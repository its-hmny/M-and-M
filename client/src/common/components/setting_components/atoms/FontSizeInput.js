import React from 'react';
import {
    InputLabel,
    Slider
} from '@material-ui/core';

//TODO: https://material-ui.com/components/slider/#accessibility


const unit = "px";
const propName = "font-size";

function valueText(val) {
    return `${val}px`
}


function FontSizeInput({ onChange, value }) {
    const handleSliderChange = (event, newValue) => {
        onChange(propName, newValue);
    }

    return (
        <>
            <Slider
                name={propName}
                defaultValue={12}
                value={value.propName}
                getAriaValueText={valueText}
                aria-labelledby="font-size-slider"
                step={1}
                marks
                min={3}
                max={23}
                valueLabelDisplay="on"
                onChange={handleSliderChange}
            />
        </>
    )
}

export default FontSizeInput;