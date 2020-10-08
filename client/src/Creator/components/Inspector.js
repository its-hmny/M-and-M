import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import AddComponentButton from './AddComponentButton';
import SettingsItem from './SettingsItem';
import useTemplateStore from '../stores/template';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

function getStyle(style, isDragging) {
  if (style.transform) {
    const axisLockY = 'translate(0px' + style.transform.slice(style.transform.indexOf(','), style.transform.length);
    return {
      ...style,
      transform: axisLockY,
    };
  }
  return style;
}

function Inspector() {
  const classes = useStyles();
  const [isDragDisabled, setIsDragDisabled] = useState(false);
  const { components, addComponent, reorderComponents } = useTemplateStore(state => ({
    components: state.components,
    addComponent: state.addComponent,
    reorderComponents: state.reorderComponents,
  }));

  const settings = components.map((component, index) => (
    <Draggable key={component.id} draggableId={component.id} index={index}>
      {(provided, snapshot) => (
        <SettingsItem
          ref={provided.innerRef}
          draggableProps={provided.draggableProps}
          dragHandleProps={provided.dragHandleProps}
          component={component}
          onEditing={isEditing => setIsDragDisabled(isEditing)}
          isDragDisabled={isDragDisabled}
          style={getStyle(provided.draggableProps.style, snapshot.isDragging)}
          isDragging={snapshot.isDragging}
        />
      )}
    </Draggable>
  ));

  const handleDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newOrder = reorder(components, result.source.index, result.destination.index);
    reorderComponents(newOrder);
  };

  return (
    <Container>
      <div className={classes.root}>
        <Typography variant="h6" color="secondary">
          Inspector
        </Typography>

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="settings-list">
            {provided => (
              <List ref={provided.innerRef} {...provided.droppableProps}>
                {settings}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </DragDropContext>

        <AddComponentButton onClick={addComponent} />
      </div>
    </Container>
  );
}

export default Inspector;
