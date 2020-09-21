import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import EditorContext from '../../context/EditorContext';

const TextFieldFragment = props => {
  const { classNames, path, fragmentSpecificProps } = props;
  const { valToChange } = fragmentSpecificProps
  const { getFromPath, setPathToValue } = useContext(EditorContext);

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
