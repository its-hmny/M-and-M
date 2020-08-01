import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import EditorContext from '../context/EditorContext';

const Inspector = () => {
  const { story, workingActivity } = useContext(EditorContext);

  const populateInspector = () => {
      const currentNode = story.nodes.filter(node => node.id === workingActivity)[0];
      currentNode.view.children.forEach(element => {
          
      });
      
      return <h1>{currentNode.id}</h1>;
  };

  return (
    <Grid item xs={3}>
      {workingActivity === undefined ? <h1>Select an element</h1> : populateInspector()}
    </Grid>
  );
};

export default Inspector;