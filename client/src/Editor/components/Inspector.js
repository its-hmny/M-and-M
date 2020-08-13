import React, { useContext } from 'react';
import {Paper, Box, Typography} from '@material-ui/core';
import EditorContext from '../context/EditorContext';
import properties from '../../ComponentProperties.json';

import { makeStyles } from "@material-ui/core/styles";
import InspectorElement from "./InspectorElement";

const useStyles = makeStyles({
  
  InspectorPaper:{
    padding: 10,
    paddingBottom: 20
   
  },

  InspectorElement:{
    margin: 10,
    marginLeft: 15
  },
  
});


const Inspector = () => {
  const { story, workingActivity } = useContext(EditorContext);
  const classes = useStyles();

  const isVisible = workingActivity !== undefined;

  const handleChange = (componentCount, field ,value) => { 
    //Temp node to modify and reinsert
    let currentNode = story.nodes[workingActivity];
    //Get reference to field value of the component in the story
    currentNode.view.children[componentCount][field] = value;
  };

  const getComponentName = (node) => { 
    const tokens = node.component.split('/');
    return (tokens[tokens.length - 1])
  };
  
  const populateInspector = () => {
    const currentNode = story.nodes.filter(node => node.id === workingActivity)[0];
    const mandatoryForAll = properties.mandatory;

    return (currentNode.view.children.map(element => {
      try {
        const { mandatory, optional } = properties.components[element.component];
        const InspectorSection = <InspectorElement fieldList={[...mandatoryForAll, ...mandatory, ...optional]} />
        
        return (
          <Box border={1} className={classes.InspectorElement} >
            <Typography variant="h5" className={classes.InspectorElement}>
              {getComponentName(element)}
            </Typography>
            { InspectorSection }
          </Box>
  
        );
      
      } catch (TypeError) {
        console.log(`Cannot find component name ${element.component} in database`);
        return (undefined);
      }

    }));
  };
  
  return (
      <Paper className={classes.InspectorPaper} elevation={3}>
        { (!isVisible) ? <h1>Select an element</h1> : populateInspector() }
      </Paper>
    
    );
  };
  
  export default Inspector;