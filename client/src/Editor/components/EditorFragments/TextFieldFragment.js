import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import EditorContext from '../../context/EditorContext';

const TextFieldFragment = props => {
  const { classNames, path, keyToUpdate } = props;
  const { getFromPath, setPathToValue } = useContext(EditorContext);

  return (
    <TextField
      className={classNames.InspectorElement}
      autoFocus={true}
      label={keyToUpdate.toUpperCase()}
      multiline={true}
      value={getFromPath(path || [])[keyToUpdate]}
      onChange={event => setPathToValue(path || [], keyToUpdate, event.target.value)}
    />
  );
};

export default TextFieldFragment;
