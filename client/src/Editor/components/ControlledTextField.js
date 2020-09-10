import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import EditorContext from '../context/EditorContext';

const ControlledTextField = (props) => {
  const { classNames, pathToFragment } = props;
  const { getFromPath, setPathToValue } = useContext(EditorContext);
  
  
  return (
    <div className={classNames.InspectorElement}>
      <TextField 
        label={pathToFragment ? "Text" : "Label"}  multiline={true} value={getFromPath(pathToFragment || [])[pathToFragment ? "children" : "label"]} 
        onChange={event => setPathToValue((pathToFragment || []), (pathToFragment ? "children" : "label"), event.target.value)}
      />
    </div>
  );
};


export default ControlledTextField;