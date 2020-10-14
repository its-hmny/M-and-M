import React, { useState, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import List from '@material-ui/core/List';
import shortid from 'shortid';

const DraggableTree = ({ id, children }) => {
  const renderTree = useCallback((components, level) => {
    const droppableId = shortid.generate();
    const type = `level-${level}`;

    const droppableContent = components.map((component, index) => {
      const { id, children } = component.props;
      const cloned = React.cloneElement(component, {
        children: children && renderTree(component.props.subSettings, level + 1),
      });

      // if child has children of his own, render their own draggable and droppable.
      // Otherwise, just plop them in
      return (
        <Draggable draggableId={id} key={id} index={index}>
          {provided => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              {cloned}
            </div>
          )}
        </Draggable>
      );
    });

    return (
      <Droppable droppableId={droppableId} type={type} key={droppableId}>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {droppableContent}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }, []);

  const handleDragEnd = useCallback(result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    // const newOrder = reorder(components, result.source.index, result.destination.index);
    // reorderComponents(newOrder);
  }, []);

  return <DragDropContext onDragEnd={handleDragEnd}>{renderTree(children, 0)}</DragDropContext>;
};

export default DraggableTree;
