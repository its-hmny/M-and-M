import React, { useCallback, useContext } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { List } from '@material-ui/core';

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
  const renderList = useCallback(
    components =>
      components.map((component, index) => {
        const id = `draggable-${component.props.id}`;
        return (
          <Draggable key={id} draggableId={id} index={index} isDragDisabled={disabled}>
            {(provided, snapshot) => (
              <DragListContext.Provider value={{ provided, snapshot, isDragDisabled: disabled }}>
                {component}
              </DragListContext.Provider>
            )}
          </Draggable>
        );
      }),
    [disabled]
  );

  return (
    <Droppable key={id} droppableId={id} type={id}>
      {(provided, snapshot) => {
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
