import React from 'react'
import { Button } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';

const ButtonFragment = props => {
    const { classNames } = props;
    const { story, workingActivity, saveStory, setWorkingActivity } = useEditor();
    
    const removeFromStory = () => {
      let { nodes, ...others } = story;
      nodes = nodes.filter(node => node.id !== workingActivity);
      saveStory({ nodes , ...others });
      setWorkingActivity(undefined);
    };
    
    return (
      <Button onClick={removeFromStory} color="primary" variant="contained" className={classNames.InspectorElement}>
        Delete this node
      </Button>
    );
};


export default ButtonFragment;