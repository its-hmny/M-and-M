import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import EditorContext from '../context/EditorContext';

const ControlledTextField = ({ classNames, pathToFragment }) => {
  const { getFromPath, setPathToValue } = useContext(EditorContext);
  
  
  return (
    <div className={classNames.InspectorElement}>
      <TextField 
        label="Text"  multiline={true} value={getFromPath(pathToFragment).children} 
        onChange={event => setPathToValue(pathToFragment, "children", event.target.value)}
      />
    </div>
  );
};


export default ControlledTextField;