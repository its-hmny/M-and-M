import React, { useState, useCallback, useRef } from '../../../../web_modules/react.js';
import { makeStyles } from '../../../../web_modules/@material-ui/core/styles.js';
import { Typography, InputLabel } from '../../../../web_modules/@material-ui/core.js';
import Slider from '../../../../web_modules/@material-ui/core/Slider.js';
import shortid from '../../../../web_modules/shortid.js';

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
    backgroundColor: props => props.color,
  },
  input: {
    display: 'none',
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

function TextColorPicker({ onChange, value }) {
  const { color } = value;

  const classes = useStyles({
    color,
  });

  const [textOpacity, setTextOpacity] = useState(1.0);

  const inputRef = useRef();

  const handleChangeColor = event => {
    onChange({
      color: hexToRgba(event.currentTarget.value, textOpacity),
    });
  };

  const handleChangeTextOpacity = (_, newValue) => {
    setTextOpacity(newValue / 100);
    onChange({
      color: hexToRgba(rgbaToHex(color), newValue / 100),
    });
  };

  const handleClick = useCallback(() => inputRef.current.click(), []);

  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      {
        className: classes.colorContainer,
      },
      React.createElement(
        InputLabel,
        {
          htmlFor: colorInputId,
        },
        'Text Color'
      ),
      React.createElement('div', {
        className: classes.swatch,
        onClick: handleClick,
      }),
      React.createElement('input', {
        ref: inputRef,
        type: 'color',
        className: classes.input,
        id: colorInputId,
        value: rgbaToHex(color),
        onChange: handleChangeColor,
      })
    ),
    React.createElement(
      Typography,
      {
        id: 'opacity-slider',
      },
      'Color Opacity'
    ),
    React.createElement(Slider, {
      value: textOpacity * 100,
      onChange: handleChangeTextOpacity,
      getAriaValueText: value => `${value}`,
      'aria-labelledby': 'opacity-slider',
    })
  );
}

export default TextColorPicker;
