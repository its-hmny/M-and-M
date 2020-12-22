import React, { useState, useCallback, useMemo } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';
import { DraggableList } from './DraggableList';

import AddComponentButton from './AddComponentButton';
import SettingsItem from './SettingsItem';
import useTemplateStore from '../stores/template';

const useStyles = makeStyles(theme => ({
  root: {},
}));

function Inspector() {
  const classes = useStyles();
  const [currentlyEditing, setCurrentlyEditing] = useState(0);
  const { components, addComponent, reorderComponents } = useTemplateStore(state => ({
    components: state.components,
    addComponent: state.addComponent,
    reorderComponents: state.reorderComponents,
  }));

  const inspectorDragId = 'inspector-top-list';

  const settings = useMemo(
    () =>
      components.map((objComponent, index) => (
        <SettingsItem
          key={objComponent.id}
          id={objComponent.id}
          dragIndex={index}
          component={objComponent}
          onEditing={isEditing =>
            setCurrentlyEditing(currentlyEditing =>
              isEditing ? currentlyEditing + 1 : currentlyEditing - 1
            )
          }
        />
      )),
    [components]
  );

  const handleDragEnd = useCallback(
    ({ source, destination, type: dragListId }) => {
      // dropped outside the list
      if (destination) {
        reorderComponents(
          source.index,
          destination.index,
          dragListId === inspectorDragId ? null : dragListId
        );
      }
    },
    [reorderComponents]
  );

  return (
    <Container className={classes.root}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <DraggableList
          id={inspectorDragId}
          list={settings}
          disabled={currentlyEditing > 0}
        />
      </DragDropContext>
      <AddComponentButton onClick={addComponent} />
    </Container>
  );
}

export default Inspector;
