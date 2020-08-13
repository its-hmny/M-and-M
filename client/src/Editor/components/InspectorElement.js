import React from 'react';

import { Typography } from '@material-ui/core';
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


const InspectorElement = (props) => {
    const { fieldList } = props;
    const classes = useStyles();
    
    return (fieldList.map(property => {
      switch(property) {
          
        case "text":
          return (
            <ControlledTextField isMultiline={true} className={classes.InspectorElement} />
          );
          
        case "to":
          return (
            <ControlledSelect classNames={classes} />
          );
          
        case "color":
          return(
            <CustomColorPicker className={classes.InspectorElement} name={props.name} nodeid={props.nodeid} 
              changeState={props.handleChange} componentcount={props.componentcount} saveData={props.saveData}/>
          );
  
          default:
            return (<Typography variant="h6">{`Properties ${property} not known!`}</Typography>);
      }

    }));
}


export default InspectorElement;