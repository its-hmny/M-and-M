import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import EditorContext from '../../context/EditorContext';

const CustomTextField = props => {
  const { classNames, path } = props;
  const { getFromPath, setPathToValue } = useContext(EditorContext);
  console.log(path);

  return (
    <div className={classNames.InspectorElement}>
      <TextField
        label={path ? 'Text' : 'Label'}
        multiline={true}
        value={getFromPath(path || [])[path ? 'text' : 'label']}
        onChange={event => setPathToValue(path || [], path ? 'text' : 'label', event.target.value)}
      />
    </div>
  );
};

export default CustomTextField;
