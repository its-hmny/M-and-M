import React from '../../../../web_modules/react.js';
import { Slider } from '../../../../web_modules/@material-ui/core.js';
//TODO: https://material-ui.com/components/slider/#accessibility

function FontSizeInput({ onChange, value }) {
    const handleSliderChange = (_, newValue) => {
        onChange({
            fontSize: `${newValue}px`,
        });
    };

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Slider, {
            defaultValue: 12,
            value: Number(value.fontSize.replace('px', '')),
            getAriaValueText: (val) => `${val}px`,
            'aria-labelledby': 'font-size-slider',
            step: 1,
            marks: true,
            min: 3,
            max: 70,
            valueLabelDisplay: 'on',
            onChange: handleSliderChange,
        }),
    );
}

export default FontSizeInput;
