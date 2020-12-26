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
  const { pathAlternative, valToChange, label, onChange } = fragmentSpecificProps;
  const { getFromPath, setPathToValue } = useEditor();

  //Additional field to modify objects or array
  path = pathAlternative ? path.concat(pathAlternative || []) : path;
  const value = getFromPath(path || [])[valToChange];

  return (
    <div>
      <TextField
        className={classNames.InspectorElement}
        classes={{ root }}
        InputProps={{
          className: inputRoot,
        }}
        label={label}
        multiline={true}
        rowsMax={3}
        value={value}
        variant="outlined"
        size="small"
        onChange={event =>
          onChange !== undefined
            ? onChange(event)
            : setPathToValue(path || [], valToChange, event.target.value)
        }
      />
    </div>
  );
};

export default TextFieldFragment;
