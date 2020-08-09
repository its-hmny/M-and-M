import React, { useContext, useEffect } from 'react';
import {Paper,Box, Typography} from '@material-ui/core';
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

  const [viewInspector, setViewInspector] = React.useState(workingActivity === undefined);
  const [tempstory,setTempStory] = React.useState(story);

  /*ATTENZIONE questo campo non serve davvero, è solo un trigger per il il salvataggio
    nelle sottocomponenti ESISTE SICURAMENTE UN MODO MIGLIORE */
  const [saveData, setSaveData] = React.useState(false);

  const viewerRef = React.useRef(undefined);
  

  

  const handleChange = (id, componentcount, field ,value) => {
    
    //Temp node to modify and reinsert
    let node = tempstory.nodes[id];
    
    //Get reference to field value of the component in the story
    node.view.children[componentcount][field] = value;
    
    setTempStory({...tempstory, [tempstory.nodes[id]] : {
                        ...tempstory.nodes[id],
                        node 
                    }
                  });
    
  };
  
 


  const populateInspector = () => {
      const currentNode = tempstory.nodes.filter(node => node.id === workingActivity)[0];
      var inspectorFields = [];
      //Counter for the current component
      var componentcount = 0;
      
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
                
                //Name for each inspector element 
                name = property;

                currentGroup.push(
                  <InspectorElement saveData={saveData} type={property} name={name} nodes={story.nodes} nodeid={currentNode.id} element={element}
                     componentcount={componentcount} handleChange={handleChange} key={shortid.generate()} story={tempstory}/>
                );
                
                
          });
          
          //Optional properties
          currentProperties.optional.forEach(property => {
            switch(property){
              
            }
          });
          
          componentcount++;
        }
        
        //Regex to remove component path
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
        <div key={shortid.generate()}>
          {inspectorFields}
        </div>);
  };

  /* ATTENZIONE meccanismo per il salvataggio dati da rivedere */
  if(workingActivity === undefined && viewInspector) {
    setSaveData(true);
    setViewInspector(false);
    
    viewerRef.current = (<h1>Select an element</h1>);
  }else if(workingActivity !== undefined && !viewInspector){
    
    setViewInspector(true);
    viewerRef.current = populateInspector();
    
  }   
        
  
  return (
      <Paper className={classes.InspectorPaper} elevation={3}>
        {viewerRef.current}
      </Paper>
    
  );
};

export default Inspector;