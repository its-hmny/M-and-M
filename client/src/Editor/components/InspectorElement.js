import React from 'react';
import { Grid, TextField, Paper,Box, Typography, Select, FormControl, MenuItem ,InputLabel, Popover, Button } from '@material-ui/core';
import shortid from 'shortid';
import { makeStyles } from "@material-ui/core/styles";

import CustomColorPicker from './CustomColorPicker';

import ControlledTextField from './ControlledTextField';

const useStyles = makeStyles({
    InspectorPaper:{
      padding: 10,
      paddingBottom: 20
     
    },
    InspectorElement:{
      margin: 10,
      marginLeft: 15,
      
    },
    FormControl: {
      minWidth: 150
    }
  });
/*
  Props = {
      name : ... ,
      type : ... ,
      nodes: ... ,
      nodeid: ... ,
      element: ... ,
      data: ... ,
      handleChange ...
  }
*/
const InspectorElement = (props) => {

    const classes = useStyles();

    switch(props.type){
        case "text":
          
          return (
            <div className={classes.InspectorElement}>
              <ControlledTextField  multiline={props.element.component == "Elements/Text"} 
                changeState={props.handleChange} nodeid={props.nodeid} name={props.name}/>
            </div>);
        
        case "to":
            let destinationNodes = [];
            
            props.nodes.forEach(node => {
              destinationNodes.push(
                <MenuItem key={shortid.generate()} value={node.name}>{node.name}</MenuItem>
              );
            }); 
            
            let selectvalue;
            if(props.data[props.nodeid] === undefined){
                selectvalue = "None";
                
            }else{
                if(props.data[props.nodeid][props.name] === undefined){
                    selectvalue = "None";
                }else{
                    selectvalue = props.data[props.nodeid][props.name];
                }
            }
            return(
              <div className={classes.InspectorElement}>
                <FormControl className={classes.FormControl}>
                <InputLabel>Destination</InputLabel>
                <Select value={selectvalue} name={props.name} id={props.name} 
                    onChange={event => props.handleChange(props.nodeid,props.name,event.target.value)}>
                  <MenuItem value="None"></MenuItem>
                  {destinationNodes}
                </Select>
                </FormControl>
              </div>
            );
        
        case "color":
            
            
          return(
            <CustomColorPicker className={classes.InspectorElement} name={props.name} nodeid={props.nodeid} changeState={props.handleChange} />
      
          );
          
        
    }
}

export default InspectorElement;