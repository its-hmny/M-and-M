import React from 'react';
import { Button } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';

const ButtonFragment = props => {
  const { classNames, fragmentSpecificProps } = props;
  const { story, workingActivity, saveStory, setWorkingActivity } = useEditor();
  /* Switch to check which predefined button function to use */
  let onClick;
  if (fragmentSpecificProps.onClick === 'removeNode') {
    onClick = () => {
      let { nodes, ...others } = story;
      nodes = nodes.filter(node => node.id !== workingActivity);
      saveStory({ nodes, ...others });
      setWorkingActivity(undefined);
    };
  }

  return (
    <Button
      onClick={() => onClick()}
      color="primary"
      variant="contained"
      className={classNames.InspectorElement}
    >
      {fragmentSpecificProps.text}
    </Button>
  );
};

export default ButtonFragment;
