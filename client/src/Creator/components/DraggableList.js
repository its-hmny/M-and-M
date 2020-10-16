import React, { useCallback, useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ListItem, List, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.default,
  },
}));

const DragListContext = React.createContext();

export const useDragList = () => {
  const value = useContext(DragListContext);
  if (value == null) {
    throw new Error('useDragList must be used inside a DraggableList');
  }

  return value;
};

// List contiene i componenti React da trasformare
export const DraggableList = ({ id, list, disabled }) => {
  const classes = useStyles();

  const renderList = useCallback(
    components =>
      components.map((component, index) => {
        const id = `draggable-${component.props.id}`;
        return (
          <Draggable key={id} draggableId={id} index={index} isDragDisabled={disabled}>
            {(provided, snapshot) => (
              <DragListContext.Provider value={{ provided, snapshot }}>
                {component}
              </DragListContext.Provider>
            )}
          </Draggable>
        );
      }),
    [list]
  );

  return (
    <Droppable key={id} droppableId={id} type={id}>
      {(provided, snapshot) => {
        console.log(provided.placeholder);
        return (
          <List ref={provided.innerRef} {...provided.droppableProps}>
            {renderList(list)}
            {provided.placeholder}
          </List>
        );
      }}
    </Droppable>
  );
};
