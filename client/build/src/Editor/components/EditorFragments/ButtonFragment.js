import React from '../../../../web_modules/react.js';
import { Button } from '../../../../web_modules/@material-ui/core.js';
import { useEditor } from '../../context/EditorContext.js';

const deleteEdges = (node, components, target) => {
  return components.map((component) => {
    if (component.story) {
      let updatedNextNode = component.story.nextNode;

      if (typeof updatedNextNode === 'object') {
        updatedNextNode = Object.entries(updatedNextNode).reduce(
          (obj, [label, value]) => ({
            ...obj,
            [label]: value === target ? node.id : value,
          }),
          {},
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

const ButtonFragment = (props) => {
  const { classNames, fragmentSpecificProps } = props;

  const { story, workingActivity, saveStory, setWorkingActivity } = useEditor();

  const onClick = () => {
    let { nodes, ...others } = story;

    nodes = nodes.filter((node) => node.id !== workingActivity);
    nodes = nodes.map((node) => ({
      ...node,
      components: deleteEdges(node, node.components, workingActivity),
    }));
    saveStory({
      nodes,
      ...others,
    });
    setWorkingActivity(undefined);
  };

  return React.createElement(
    Button,
    {
      onClick: onClick,
      color: 'primary',
      variant: 'contained',
      className: classNames.InspectorElement,
    },
    fragmentSpecificProps.text,
  );
};

export default ButtonFragment;
