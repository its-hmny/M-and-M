import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import EditorContext from '../../context/EditorContext';

const CustomTextField = props => {
  const { classNames, path } = props;
  const { getFromPath, setPathToValue } = useContext(EditorContext);

  return (
    <div className={classNames.InspectorElement}>
      <TextField
        label={path ? 'Text' : 'Label'}
        multiline={true}
        value={getFromPath(path || [])[path ? 'children' : 'label']}
        onChange={event => setPathToValue(path || [], path ? 'children' : 'label', event.target.value)}
      />
    </div>
  );
};

export default CustomTextField;
