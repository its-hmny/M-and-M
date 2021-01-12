import React, { useState } from '../../../../web_modules/react.js';
import { makeStyles } from '../../../../web_modules/@material-ui/core/styles.js';
import {
    Typography,
    InputLabel,
} from '../../../../web_modules/@material-ui/core.js';
import Slider from '../../../../web_modules/@material-ui/core/Slider.js';
import shortid from '../../../../web_modules/shortid.js';

const useStyles = makeStyles((theme) => ({
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

const rgbaToHex = (rgba) => {
    const [red, green, blue] = rgba
        .slice(5, -1)
        .split(',')
        .map((val) => Number(val.trim()).toString(16).padStart(2, '0'));

    return `#${red}${green}${blue}`;
};

const colorInputId = shortid.generate();

function TextColorPicker({ onChange, value }) {
    const classes = useStyles();

    const { color } = value;

    const [textOpacity, setTextOpacity] = useState(1.0);

    const handleChangeColor = (event) => {
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

    return React.createElement(
        'div',
        null,
        React.createElement(
            InputLabel,
            {
                htmlFor: colorInputId,
            },
            'Text Color',
        ),
        React.createElement('input', {
            type: 'color',
            className: classes.colorInput,
            id: colorInputId,
            onChange: handleChangeColor,
            value: rgbaToHex(color),
        }),
        React.createElement(
            Typography,
            {
                id: 'opacity-slider',
            },
            'Color Opacity',
        ),
        React.createElement(Slider, {
            value: textOpacity * 100,
            onChange: handleChangeTextOpacity,
            getAriaValueText: (value) => `${value}`,
            'aria-labelledby': 'opacity-slider',
        }),
    );
}

export default TextColorPicker;
