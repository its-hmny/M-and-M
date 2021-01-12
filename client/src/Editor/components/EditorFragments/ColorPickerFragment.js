import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';

const useStyles = makeStyles(theme => ({
  container: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginRight: theme.spacing(2),
  },
  input: {
    width: 30,
    height: 30,
    padding: 0,
    border: 0,
    clipPath: 'circle(45%)',
  },
}));

const ColorPickerFragment = props => {
  const { path, fragmentSpecificProps } = props;
  const { valToChange } = fragmentSpecificProps;
  const classes = useStyles();
  const { getFromPath, setPathToValue } = useEditor();
  // If undefined then it defaults to orange
  const colorValue = getFromPath(path || [])[valToChange] || '#eb8231';

  return (
    <div className={classes.container}>
      <Typography className={classes.label}>Node Color</Typography>
      <input
        className={classes.input}
        type="color"
        value={colorValue}
        onChange={event => setPathToValue(path || [], valToChange, event.target.value)}
      />
    </div>
  );
};

export default ColorPickerFragment;
