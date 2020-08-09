import React from 'react';


import { makeStyles } from "@material-ui/core/styles";

import CustomColorPicker from './CustomColorPicker';
import ControlledTextField from './ControlledTextField';
import ControlledSelect from './ControlledSelect';

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
              <ControlledTextField  multiline={props.element.component == "Elements/Text"} defaultValue={props.element.children}
                  changeState={props.handleChange} saveData={props.saveData}
                  name={props.name} nodeid={props.nodeid} componentcount={props.componentcount} />
            </div>);
        
        case "to":

            //Get default value from current story
            let defaultValue = props.story.nodes[props.nodeid].view.children[props.componentcount]["to"];
          
            return (
              <ControlledSelect nodeid={props.nodeid} name={props.name} componentcount={props.componentcount} 
                nodes={props.nodes} changeState={props.handleChange} defaultValue={defaultValue} saveData={props.saveData}/>
            )
        
        case "color":
            
          return(
            <CustomColorPicker className={classes.InspectorElement} name={props.name} nodeid={props.nodeid} 
              changeState={props.handleChange} componentcount={props.componentcount} saveData={props.saveData}/>
            
          );
          
        
    }
}

export default InspectorElement;