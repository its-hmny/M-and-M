import React, { useContext, useState } from 'react';
import { Paper, Box, Typography, List, ListItem, Collapse, Divider } from '@material-ui/core';
import EditorContext from '../context/EditorContext';
import properties from '../../ComponentProperties.json';

import { makeStyles } from "@material-ui/core/styles";
import InspectorElement from "./InspectorElement";

const useStyles = makeStyles({
  
  InspectorPaperStyle:{
    padding: 15,
    zIndex: 2
  },

  InspectorElementStyle:{
    margin: 10
  }
  
});


const Inspector = () => {
  const { story, workingActivity } = useContext(EditorContext);
  const {InspectorPaperStyle, InspectorElementStyle } = useStyles();
  const [open, setOpen] = useState({});
  const isVisible = workingActivity !== undefined;
  
 
  const handleClick = (index) => {
    if (open[index] === undefined) 
      setOpen({...open, [index] : true});
    else 
      setOpen({...open, [index] : !open[index]});
  };
  

  const getComponentName = (node) => { 
    const tokens = node.component.split('/');
    return (tokens[tokens.length - 1]);
  };

  
  const globalOptions = () => {
    return (
      <Box key={"Global"} className={InspectorElementStyle}>
        <List className={InspectorElementStyle} >
            
          <ListItem button onClick={() => handleClick("Global")}>
            <Typography variant="h5" component="h5">{"Global"}</Typography>
          </ListItem>

          <Collapse in={open["Global"]} unmountOnExit>  
            <Box borderLeft={1} borderColor="primary.main">
              <InspectorElement fieldList={properties.global} />
            </Box>
          </Collapse>

        </List>
        <Divider/>
      </Box>
   );
  };


  const populateInspector = (iterator, previousPath) => {
    const absPath = previousPath || ["view", "children"];
    const globalInspector = globalOptions();

    return ([globalInspector, iterator.map((element, index) => {
      const { mandatory, optional } = properties.components[element.component];
      const InspectorSection = (
        <InspectorElement  fieldList={[...mandatory, ...optional]} pathToComponent={[...absPath, index]} />
      );

      return (
        <Box key={getComponentName(element) + index} className={InspectorElementStyle}>
          <List className={InspectorElementStyle} >
              
            <ListItem button onClick={(event) => handleClick(`${getComponentName(element)}-${iterator}-${index}`)}>
              <Typography variant="h5" component="h5">{getComponentName(element)}</Typography>
            </ListItem>

            <Collapse in={open[getComponentName(element)+'-'+iterator+'-'+index]} unmountOnExit>  
              <Box borderLeft={1} borderColor="primary.main">
                {InspectorSection}
                { Array.isArray(element.children) ? populateInspector(element.children, [...absPath, index, "children"]) : undefined }
              </Box>
            </Collapse>

          </List>
          <Divider/>
        </Box>
     );
    })]);
  };
  
  return (
      <Paper className={InspectorPaperStyle} elevation={3}>
        { 
          (!isVisible) ? 
            <Typography variant="h5" component="h5">Select an element</Typography> :
            populateInspector(story.nodes.filter(node => node.id === workingActivity)[0].view.children)
        }
      </Paper>
    
    );
  };
  
  export default Inspector;