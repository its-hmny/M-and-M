import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import CustomColorPicker from './CustomColorPicker';
import ControlledTextField from './ControlledTextField';
import ControlledSelect from './ControlledSelect';
import shortid from "shortid";
const useStyles = makeStyles({
  InspectorPaper: {
    padding: 10,
    paddingBottom: 20,
  },
  InspectorElement: {
    margin: 10,
    marginLeft: 15,
  },
  FormControl: {
    minWidth: 150,
  },
  colorButton: {
    margin: 10,
    marginLeft: 15,
    width: 60,
    height: 30,
    border: 'none',
    background: 'none'
    
  },
  colorLabel: {
    margin: 10,
    marginLeft: 15,
    fontSize: 18,
  },
});


const InspectorElement = ({ fieldList, pathToComponent }) => {
    const classes = useStyles();

    return (fieldList.map((property, index) => {
      switch(property) {
          
        case "text":
          return (
            <ControlledTextField key={index} classNames={classes} pathToFragment={pathToComponent}/>
          );
          
        case "to":
          return (
            <ControlledSelect key={index} classNames={classes} pathToFragment={pathToComponent}/>
          );
          
        case "color":
          return(
            <CustomColorPicker key={index} classNames={classes} pathToFragment={pathToComponent}/>
          );
  
        default:
          return (<Typography  className={classes.InspectorElement} variant="h6">{`Properties ${property} not known!`}</Typography>);
      }

    }));
}


export default InspectorElement;