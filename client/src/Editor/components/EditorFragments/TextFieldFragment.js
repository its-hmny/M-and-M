import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';

const TextFieldFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const { valToChange } = fragmentSpecificProps;
  const { getFromPath, setPathToValue } = useEditor();

  return (
    <TextField
      className={classNames.InspectorElement}
      fullWidth={true}
      label={valToChange.toUpperCase()}
      multiline={true}
      value={getFromPath(path || [])[valToChange]}
      onChange={event => setPathToValue(path || [], valToChange, event.target.value)}
    />
  );
};

export default TextFieldFragment;
