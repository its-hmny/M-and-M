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

const backgroundColorInputId = shortid.generate();

function BackgroundColorPicker({ onChange, value }) {
    const classes = useStyles();

    const { backgroundColor } = value;

    const [bgOpacity, setBGOpacity] = useState(1.0);

    const handleChangeBackgroundColor = (event) => {
        onChange({
            backgroundColor: hexToRgba(event.currentTarget.value, bgOpacity),
        });
    };

    const handleChangeBGOpacity = (_, newValue) => {
        setBGOpacity(newValue / 100);
        onChange({
            backgroundColor: hexToRgba(
                rgbaToHex(backgroundColor),
                newValue / 100,
            ),
        });
    };

    return React.createElement(
        'div',
        null,
        React.createElement(
            InputLabel,
            {
                htmlFor: backgroundColorInputId,
            },
            'Pick background color',
        ),
        React.createElement('input', {
            type: 'color',
            className: classes.colorInput,
            id: backgroundColorInputId,
            onChange: handleChangeBackgroundColor,
            value: rgbaToHex(backgroundColor),
        }),
        React.createElement(
            Typography,
            {
                id: 'opacity-slider',
            },
            'BackgroundColor Opacity',
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
