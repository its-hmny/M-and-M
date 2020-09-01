import React, { useContext } from 'react';
import {Paper, Box, Typography, List, ListItem, ListItemText, Collapse, Divider, FormControl, InputLabel} from '@material-ui/core';
import EditorContext from '../context/EditorContext';
import properties from '../../ComponentProperties.json';

import { makeStyles } from "@material-ui/core/styles";
import InspectorElement from "./InspectorElement";

const useStyles = makeStyles({
  
  InspectorPaper:{
    padding: 10,
    paddingBottom: 20,
    
   
  },

  InspectorElement:{
    margin: 10,
    
  },
  
});

const Inspector = () => {
  const { story, workingActivity } = useContext(EditorContext);
  const classes = useStyles();
  const [open, setOpen] = React.useState({});
  const isVisible = workingActivity !== undefined;
  
 
  const handleClick = (event, index) => {
    
    if (open[index] === undefined){
      setOpen({...open, [index] : true});
    }else{
      setOpen({...open, [index] : !open[index]});
    }
  };
  

  const getComponentName = (node) => { 
    const tokens = node.component.split('/');
    return (tokens[tokens.length - 1])
  };

  
  
  const populateInspector = (iterator, previousPath) => {
    const absPath = previousPath || ["view", "children"];
    
    const mandatoryForAll = properties.mandatory;
    
    return (iterator.map((element, index) => {
        
        const { mandatory, optional } = properties.components[element.component];

        const InspectorSection = (
          <InspectorElement 
            
            fieldList={[...mandatoryForAll, ...mandatory, ...optional]} 
            pathToComponent={[...absPath, index]}
            
          />);

        return (
          <Box key={getComponentName(element) + index} className={classes.InspectorElement}>
            
            <List className={classes.InspectorElement} >
              <ListItem button onClick={ (event) => handleClick(event,getComponentName(element)+'-'+iterator+'-'+index)}>
                <Typography variant="h5" component="h5">{getComponentName(element)}</Typography>
                
                
              </ListItem>
              <Collapse in={open[getComponentName(element)+'-'+iterator+'-'+index]} unmountOnExit>
                
              <Box borderLeft={1} borderColor="primary.main">
                    {InspectorSection}
                    {
                      Array.isArray(element.children) ? 
                        populateInspector(element.children, [...absPath, index, "children"]) : 
                        undefined
                    }
              </Box>
              </Collapse>
            </List>
            <Divider/>
          </Box>
        );
    }));
  };
  
  return (
      <Paper className={classes.InspectorPaper} elevation={3}>
        { (!isVisible) ? 
          <Typography variant="h5" component="h5">
            Select an element
          </Typography> :
          
          populateInspector(story.nodes.filter(node => node.id === workingActivity)[0].view.children)
        }
      </Paper>
    
    );
  };
  
  export default Inspector;