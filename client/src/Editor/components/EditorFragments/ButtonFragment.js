import React from 'react';
import { Button } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';

const deleteEdges = (node, components, target) => {
  return components.map(component => {
    if (component.story) {
      let updatedNextNode = component.story.nextNode;
      if (typeof updatedNextNode === 'object') {
        updatedNextNode = Object.entries(updatedNextNode).reduce(
          (obj, [label, value]) => ({
            ...obj,
            [label]: value === target ? node.id : value,
          }),
          {}
        );
      } else if (updatedNextNode === target) {
        updatedNextNode = node.id;
      }
      component.story.nextNode = updatedNextNode;
    }

    if (component.children) {
      component.children = deleteEdges(node, component.children, target);
    }

    return component;
  });
};

const ButtonFragment = props => {
  const { classNames, fragmentSpecificProps } = props;
  const { story, workingActivity, saveStory, setWorkingActivity } = useEditor();

  const onClick = () => {
    let { nodes, ...others } = story;
    nodes = nodes.filter(node => node.id !== workingActivity);
    nodes = nodes.map(node => ({
      ...node,
      components: deleteEdges(node, node.components, workingActivity),
    }));
    saveStory({ nodes, ...others });
    setWorkingActivity(undefined);
  };

  return (
    <Button
      onClick={onClick}
      color="primary"
      variant="contained"
      className={classNames.InspectorElement}
    >
      {fragmentSpecificProps.text}
    </Button>
  );
};

export default ButtonFragment;
