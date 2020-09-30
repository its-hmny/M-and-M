import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';

const useStyles = makeStyles(theme => ({
  root: {
    width: '25ch',
  },
  inputRoot: {
    paddingRight: theme.spacing(2),
  },
}));

const TextFieldFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const { root, inputRoot } = useStyles();
  const { valToChange, label } = fragmentSpecificProps;
  const { getFromPath, setPathToValue } = useEditor();
  const value = getFromPath(path || [])[valToChange];

  return (
    <TextField
      className={classNames.InspectorElement}
      classes={{ root }}
      InputProps={{
        className: inputRoot,
      }}
      label={label.toUpperCase()}
      multiline={true}
      rows={2}
      value={value}
      onChange={event => setPathToValue(path || [], valToChange, event.target.value)}
    />
  );
};

export default TextFieldFragment;
