import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import EditorContext from '../context/EditorContext';

const CustomColorPicker = (props) => {
  const { classNames, pathToFragment } = props;
  const {getFromPath, setPathToValue } = useContext(EditorContext);
    
  return (
    <div>
      <Typography variant="subtile" className={classNames.colorLabel} htmlFor="colorpicker">Color:</Typography> 
      <input 
        className={classNames.colorButton} id="colorpicker" 
        type="color" value={getFromPath(pathToFragment || [])[pathToFragment ? "bho" : "color"]} 
        onChange={event => setPathToValue((pathToFragment || []), (pathToFragment ? "bho" : "color"), event.target.value)}
      />   
    </div>);
};

export default CustomColorPicker;