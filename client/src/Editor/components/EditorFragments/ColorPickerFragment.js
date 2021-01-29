import React, { useCallback, useRef } from 'react';
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
  swatch: {
    position: 'relative',
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: props => props.color,
    cursor: 'pointer',
  },
  input: {
    position: 'absolute',
    margin: 0,
    padding: 0,
    top: 'calc(50% + 2px)',
    left: 'calc(50% - 2px)',
    width: 0,
    height: 0,
    visibility: 'hidden',
  },
}));

const ColorPickerFragment = props => {
  const { path, fragmentSpecificProps } = props;
  const { valToChange } = fragmentSpecificProps;
  const { getFromPath, setPathToValue } = useEditor();

  // If undefined then it defaults to orange
  const colorValue = getFromPath(path || [])[valToChange] || '#eb8231';

  const inputRef = useRef();
  const classes = useStyles({ color: colorValue });

  const handleClick = useCallback(() => inputRef.current.click(), []);

  return (
    <div className={classes.container}>
      <Typography className={classes.label}>Node Color</Typography>
      <div className={classes.swatch} onClick={handleClick}>
        <input
          ref={inputRef}
          className={classes.input}
          type="color"
          value={colorValue}
          onChange={event => setPathToValue(path || [], valToChange, event.target.value)}
        />
      </div>
    </div>
  );
};

export default ColorPickerFragment;
