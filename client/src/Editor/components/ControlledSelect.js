import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

import { makeStyles } from "@material-ui/core/styles";
import shortid from 'shortid';

/* 
    props = {
        nodes: ... ,
        name: ... ,
        componentcount: ... ,
        nodeid: ... ,
        saveData: ... ,
        changeState: ... ,
        defaultValue: ... ,
    }


*/

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




const ControlledSelect = (props) => {
    
    const [selectValue, setSelectValue] = React.useState(props.defaultValue);
    
    const handleChange = (value) => {
        setSelectValue(value);
    }
    
   

    //Salva al cambio dell'inspector
    if(props.saveData){
        props.changeState(props.nodeid,props.componentcount, "to", selectValue);
    }

    const classes = useStyles();

    let destinationNodes = [];
            
            props.nodes.forEach(node => {
              destinationNodes.push(
                <MenuItem key={shortid.generate()} value={node.id}>{node.name}</MenuItem>
              );
            }); 
    
    return(
        <div className={classes.InspectorElement}>
          <FormControl className={classes.FormControl}>
          <InputLabel>Destination</InputLabel>
          <Select value={selectValue} name={props.name} id={props.name} 
              onChange={event => handleChange(event.target.value)}>
            {destinationNodes}
          </Select>
          </FormControl>
        </div>);
};

export default ControlledSelect;