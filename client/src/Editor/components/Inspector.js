import React, { useContext, useEffect } from 'react';
import { Grid, Paper,Box, Typography} from '@material-ui/core';
import EditorContext from '../context/EditorContext';
import properties from '../../ComponentProperties.json';
import shortid from 'shortid';

import { makeStyles } from "@material-ui/core/styles";
import InspectorElement from "./InspectorElement";
const ComponentNameRegexp = new RegExp('[/](\\w+)$');

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
  const [data, setData] = React.useState({});
  const counterRef = React.useRef({});
  
  

  const handleChange = (node,propname,value) => {
  
    setData(data => { return({...data, [node]: {...data[node],[propname] : value}});});
    
  };

  const populateInspector = () => {
      const currentNode = story.nodes.filter(node => node.id === workingActivity)[0];
      var inspectorFields = [];
      counterRef.current[currentNode.id] ={
        "to": 0,
        "color": 0,
        "text": 0
      };
      currentNode.view.children.forEach(element => {
        
        var currentGroup = [];
        const currentProperties = properties.components[element.component];
        var name;
        //Checks universal mandatory properties 
        properties.mandatory.forEach(property => {
          switch(property){ 
            
          }
        });
        //Checks current component mandatory properties
        if(currentProperties !== undefined){
          
          currentProperties.mandatory.forEach(property => {
                
                name = property + counterRef.current[currentNode.id][property];
                
                let next = counterRef.current[currentNode.id][property] + 1;
                
                counterRef.current = {...counterRef.current, [currentNode.id] : {...counterRef.current[currentNode.id],[property] : next}};
                
                currentGroup.push(
                  <InspectorElement type={property} name={name} nodes={story.nodes} nodeid={currentNode.id} element={element}
                    data={data} handleChange={handleChange} key={shortid.generate()}
                
                />)
          });
          
          //Optional properties
          currentProperties.optional.forEach(property => {
            switch(property){
              
            }
          });
        }
        
        const match = String(element.component).match(ComponentNameRegexp);
        let componentname;
        if( match !== undefined ){
          componentname = match[1];
        }
        inspectorFields.push(
          <Box border={1} key={shortid.generate()} className={classes.InspectorElement}>
            <Typography variant="h4" component="h4" className={classes.InspectorElement}>
                {componentname || element.component}
            </Typography>
            {currentGroup}
          </Box>);
        
      });
      
      return (
        <div>
          {inspectorFields}
        </div>);
  };
  //
  return (
   
      <Paper className={classes.InspectorPaper} elevation={3}>
        
        {workingActivity === undefined ? <h1>Select an element</h1> : populateInspector()}
      </Paper>
    
  );
};

export default Inspector;