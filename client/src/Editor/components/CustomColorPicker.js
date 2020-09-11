import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import EditorContext from '../context/EditorContext';

const CustomColorPicker = (props) => {
  const { classNames, pathToFragment } = props;
  const {getFromPath, setPathToValue } = useContext(EditorContext);
  // If undefined then it defaults to orange
  const colorValue = getFromPath(pathToFragment || [])[pathToFragment ? "bho" : "color"] || "#eb8231";
    
  return (
    <div>
      <Typography variant="subtile" className={classNames.colorLabel} htmlFor="colorpicker">Color:</Typography> 
      <input 
        className={classNames.colorButton} id="colorpicker" 
        type="color" value={colorValue} 
        onChange={event => setPathToValue((pathToFragment || []), (pathToFragment ? "bho" : "color"), event.target.value)}
      />   
    </div>);
};

export default CustomColorPicker;