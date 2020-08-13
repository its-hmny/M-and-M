import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

let useStyles = makeStyles({
    colorButton: {
        margin: 10,
        marginLeft: 15,
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

const CustomColorPicker = (props) => {
  const [colorState, setColorState] = React.useState("#000");
  const classes = useStyles();
    
  return (
    <div >
      <label className={classes.colorLabel} for="colorpicker">Color: </label> 
      <input className={classes.colorButton} id="colorpicker" type="color" value={colorState} onChange={(e) => setColorState(e.target.value)} />   
    </div>);
};

export default CustomColorPicker;