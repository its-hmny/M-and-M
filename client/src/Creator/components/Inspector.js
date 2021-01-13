import React, { useState, useCallback, useMemo } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';
import { DraggableList } from './DraggableList';

import AddComponentButton from './AddComponentButton';
import SettingsItem from './SettingsItem';
import useTemplateStore from '../stores/template';

const useStyles = makeStyles(theme => ({
  root: {
    // aka all except navbar and padding
    maxHeight: `calc(100vh - 64px)`,
    display: 'flex',
    flexDirection: 'column',
    '& .MuiList-root': {
      overflowY: 'auto',
      padding: `0 ${theme.spacing(2)}px`,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      // maxHeight: `calc(100vh - 64px - ${theme.spacing(2) * 2}px)`,
    },
  },
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
    <Container className={classes.root} disableGutters>
      <DragDropContext onDragEnd={handleDragEnd}>
        <DraggableList
          id={inspectorDragId}
          list={settings}
          disabled={currentlyEditing > 0}
        />
      </DragDropContext>
      {currentlyEditing === 0 && <AddComponentButton onClick={addComponent} />}
    </Container>
  );
}

export default Inspector;
