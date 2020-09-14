import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';
import shortid from 'shortid';

const useStyles = makeStyles(theme => ({
  colorInput: {
    margin: theme.spacing(1),
    minWidth: 80,
    minHeight: 30,
    display: 'block',
  },
}));

function ColorPickerInput({ onChange, value }) {
  const classes = useStyles();
  const { color, backgroundColor } = value;

  const handleChangeColor = event => {
    onChange({ color: event.currentTarget.value });
  };
  const handleChangeBackgroundColor = event => {
    onChange({ backgroundColor: event.currentTarget.value });
  };
  const colorInputId = shortid.generate();
  const backgroundColorInputId = shortid.generate();

  return (
    <div>
      <div>
        <InputLabel htmlFor={colorInputId}>Pick text color</InputLabel>
        <input
          type="color"
          className={classes.colorInput}
          id={colorInputId}
          onChange={handleChangeColor}
          value={color}
        />
      </div>
      <div>
        <InputLabel htmlFor={backgroundColorInputId}>
          Pick background color
        </InputLabel>
        <input
          type="color"
          className={classes.colorInput}
          id={backgroundColorInputId}
          onChange={handleChangeBackgroundColor}
          value={backgroundColor}
        />
      </div>
    </div>
  );
}

export default ColorPickerInput;
