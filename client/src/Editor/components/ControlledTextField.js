import React, { useEffect } from 'react';
import {Popover, TextField } from '@material-ui/core';

import { makeStyles } from "@material-ui/core/styles";


const ControlledTextField = (props) => {
    const [textState, setTextState] = React.useState(props.defaultValue);
    if(props.saveData){
        props.changeState(props.nodeid, props.componentcount , "children", textState);
    }
    const handleChange = (event) => {
        
        setTextState(event.target.value);
        
        
    };
    
    return(
        <TextField label="Text"  value={textState} multiline={props.multiline} 
            onChange={handleChange} />
    )
};

export default ControlledTextField;