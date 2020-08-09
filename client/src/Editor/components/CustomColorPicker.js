import React from 'react';
import {Popover } from '@material-ui/core';
import { ChromePicker } from 'react-color';

import { makeStyles } from "@material-ui/core/styles";
/*  
    props:{
        nodeid: ...
        name: ...
        changeState: ...

    }

*/

const CustomColorPicker = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [colorState, setColorState] = React.useState("#000");
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    var useStyles = makeStyles({
        colorButton: {
            margin: 10,
            marginLeft: 15,
            backgroundColor: colorState,
            width: 60,
            height: 30,
            border: 1,
            borderStyle: "solid",
            borderColor: "#000"
        },
        colorLabel:{
            margin: 10,
            marginLeft: 15,
            fontSize: 18
        }
    
    });
    var classes = useStyles();

    if(props.saveData){
        /* Aggiungere un file data aggiuntivo per la storia????? */
        //props.changeState(props.nodeid, props.componentcount , "children", textState);
    }

    const handleColor = (color) => {
        setColorState(color);
        
    };
    
    
    return(
    <div >
            <label className={classes.colorLabel} for="colorpicker">Color: </label>
            <div id="colorpicker" className={classes.colorButton} onClick={handleClick}></div>
            <Popover 
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
            >
                <ChromePicker  name={props.name} color={colorState}
                    onChange={ (color) => handleColor(color.hex) }/>
            </Popover>
    </div>);
}

export default CustomColorPicker;