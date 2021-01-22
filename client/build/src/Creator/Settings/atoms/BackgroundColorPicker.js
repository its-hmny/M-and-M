import React, {
  useState,
  useRef,
  useCallback,
} from '../../../../web_modules/react.js';
import { makeStyles } from '../../../../web_modules/@material-ui/core/styles.js';
import {
  Typography,
  InputLabel,
} from '../../../../web_modules/@material-ui/core.js';
import Slider from '../../../../web_modules/@material-ui/core/Slider.js';
import shortid from '../../../../web_modules/shortid.js';

const useStyles = makeStyles((theme) => ({
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
    backgroundColor: (props) => props.color,
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

const rgbaToHex = (rgba) => {
  const [red, green, blue] = rgba
    .slice(5, -1)
    .split(',')
    .map((val) => Number(val.trim()).toString(16).padStart(2, '0'));

  return `#${red}${green}${blue}`;
};

const backgroundColorInputId = shortid.generate();

function BackgroundColorPicker({ onChange, value }) {
  const { backgroundColor } = value;

  const classes = useStyles({
    color: backgroundColor,
  });

  const [bgOpacity, setBGOpacity] = useState(1.0);

  const inputRef = useRef();

  const handleChangeBackgroundColor = (event) => {
    onChange({
      backgroundColor: hexToRgba(event.currentTarget.value, bgOpacity),
    });
  };

  const handleChangeBGOpacity = (_, newValue) => {
    setBGOpacity(newValue / 100);
    onChange({
      backgroundColor: hexToRgba(rgbaToHex(backgroundColor), newValue / 100),
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
          htmlFor: backgroundColorInputId,
        },
        'Background Color',
      ),
      React.createElement('div', {
        className: classes.swatch,
        onClick: handleClick,
      }),
      React.createElement('input', {
        ref: inputRef,
        type: 'color',
        className: classes.input,
        id: backgroundColorInputId,
        value: rgbaToHex(backgroundColor),
        onChange: handleChangeBackgroundColor,
      }),
    ),
    React.createElement(
      Typography,
      {
        id: 'opacity-slider',
      },
      'Background Color Opacity',
    ),
    React.createElement(Slider, {
      value: bgOpacity * 100,
      onChange: handleChangeBGOpacity,
      getAriaValueText: (value) => `${value}`,
      'aria-labelledby': 'opacity-slider',
    }),
  );
}

export default BackgroundColorPicker;