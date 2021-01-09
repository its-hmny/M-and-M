import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import shortid from 'shortid';

const useStyles = makeStyles(theme => ({
  colorInput: {
    margin: theme.spacing(1),
    minWidth: 80,
    minHeight: 30,
    display: 'block',
  },
}));

const hexToRgba = (hexColor, opacity) => {
  const red = parseInt(hexColor.substring(1, 3), 16);
  const green = parseInt(hexColor.substring(3, 5), 16);
  const blue = parseInt(hexColor.substring(5, 7), 16);
  return `rgba(${red}, ${green}, ${blue}, ${opacity.toFixed(2)})`;
};

const rgbaToHex = rgba => {
  const [red, green, blue] = rgba
    .slice(5, -1)
    .split(',')
    .map(val => Number(val.trim()).toString(16).padStart(2, '0'));
  return `#${red}${green}${blue}`;
};

const colorInputId = shortid.generate();
const backgroundColorInputId = shortid.generate();

function ColorPickerInput({ onChange, value }) {
  const classes = useStyles();
  const { color, backgroundColor } = value;

  const [textOpacity, setTextOpacity] = useState(1.0);
  const [bgOpacity, setBGOpacity] = useState(1.0);

  const handleChangeColor = event => {
    onChange({ color: hexToRgba(event.currentTarget.value, textOpacity) });
  };
  const handleChangeBackgroundColor = event => {
    onChange({ backgroundColor: hexToRgba(event.currentTarget.value, bgOpacity) });
  };
  const handleChangeTextOpacity = (_, newValue) => {
    setTextOpacity(newValue / 100);
    console.log(newValue);
    onChange({ color: hexToRgba(rgbaToHex(color), newValue / 100) });
  };
  const handleChangeBGOpacity = (_, newValue) => {
    setBGOpacity(newValue / 100);
    console.log(newValue);
    onChange({ backgroundColor: hexToRgba(rgbaToHex(backgroundColor), newValue / 100) });
  };

  return (
    <div>
      <div>
        <InputLabel htmlFor={colorInputId}>Pick text color</InputLabel>
        <input
          type="color"
          className={classes.colorInput}
          id={colorInputId}
          onChange={handleChangeColor}
          value={rgbaToHex(color)}
        />
        <Slider
          value={textOpacity * 100}
          onChange={handleChangeTextOpacity}
          getAriaValueText={value => `${value}`}
        />
      </div>
      <div>
        <InputLabel htmlFor={backgroundColorInputId}>Pick background color</InputLabel>
        <input
          type="color"
          className={classes.colorInput}
          id={backgroundColorInputId}
          onChange={handleChangeBackgroundColor}
          value={rgbaToHex(backgroundColor)}
        />
        <Slider
          value={bgOpacity * 100}
          onChange={handleChangeBGOpacity}
          getAriaValueText={value => `${value}`}
        />
      </div>
    </div>
  );
}

export default ColorPickerInput;
