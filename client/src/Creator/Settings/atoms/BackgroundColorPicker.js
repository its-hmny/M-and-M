import React, { useState, useRef, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, InputLabel } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import shortid from 'shortid';

const useStyles = makeStyles(theme => ({
  colorContainer: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  swatch: {
    position: 'relative',
    top: 1,
    marginLeft: theme.spacing(2),
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: props => rgbaToHex(props.color),
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
  Container: {
    paddingBottom: '20px',
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

const getOpacityFromRgba = rgba => {
  return Number(rgba.slice(5, -1).split(',').slice(-1)[0].trim());
};

const backgroundColorInputId = shortid.generate();

function BackgroundColorPicker({ onChange, value }) {
  const { backgroundColor } = value;

  const classes = useStyles({ color: backgroundColor });

  const [bgOpacity, setBGOpacity] = useState(getOpacityFromRgba(backgroundColor));
  const inputRef = useRef();

  const handleChangeBackgroundColor = event => {
    onChange({ backgroundColor: hexToRgba(event.currentTarget.value, bgOpacity) });
  };

  const handleChangeBGOpacity = (_, newValue) => {
    setBGOpacity(newValue / 100);
    onChange({ backgroundColor: hexToRgba(rgbaToHex(backgroundColor), newValue / 100) });
  };

  const handleClick = useCallback(() => inputRef.current.click(), []);

  return (
    <div className={classes.Container}>
      <div className={classes.colorContainer}>
        <InputLabel htmlFor={backgroundColorInputId}>Background Color</InputLabel>
        <div className={classes.swatch} onClick={handleClick}>
          <input
            ref={inputRef}
            type="color"
            className={classes.input}
            id={backgroundColorInputId}
            value={rgbaToHex(backgroundColor)}
            onChange={handleChangeBackgroundColor}
          />
        </div>
      </div>
      <Typography id="opacity-slider">Background Color Opacity</Typography>
      <Slider
        value={bgOpacity * 100}
        onChange={handleChangeBGOpacity}
        getAriaValueText={value => `${value}`}
        aria-labelledby="opacity-slider"
      />
    </div>
  );
}

export default BackgroundColorPicker;
