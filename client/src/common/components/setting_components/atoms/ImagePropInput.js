import React, { useState, useEffect, useCallback } from 'react';
import {
    Slider,
    Checkbox,
    InputLabel,
    Switch
} from '@material-ui/core';
import shortid from 'shortid';
import Autocomplete from '@material-ui/lab/Autocomplete';


function ariaText(value) {
    return `${value}px`;
}

const propNames = {
    auto: "auto",
    width: "width",
    height: "height",
};

const autoSettings = {
    "display": "block",
    "margin-left": "auto",
    "margin-right": "auto",
    "max-width": "100%",
    "padding": "5 5px"
}
const defaultSettings = {
    "display": "flex",
    "margin-left": "auto",
    "margin-right": "auto",
    "max-width": "500%",
    "padding": "0px"
}

function ImagePropInput({ onChange, value }) {
    const [auto, setAuto] = useState(true);
    const toggleId = shortid.generate();

    useEffect(() => {
        Object.entries(auto ? autoSettings : defaultSettings).map(([key, value]) => onChange(key, value));
    }, [auto]); //TODO: react gets angry. please help. tenks


    const toggleAuto = (event) => setAuto(!auto);

    const handleSlider = (event, newValue, name) => {
        onChange(name, newValue);
    };

    return (
        <>
            <InputLabel htmlFor={toggleId}>Default</InputLabel>
            <Switch
                name={propNames.auto}
                id={toggleId}
                checked={auto}
                aria-label="auto-image"
                onChange={toggleAuto} />
            <Slider
                id="giorgio"
                name={propNames.width}
                defaultValue={300}
                value={value[propNames.width]}
                getAriaValueText={ariaText}
                aria-labelledby="width-image-slider"
                min={20}
                max={700}
                valueLabelDisplay="on"
                onChange={(event, newValue) => handleSlider(event, newValue, propNames.width)}
            />
            <Slider
                name={propNames.height}
                orientation="vertical"
                defaultValue={200}
                value={value[propNames.height]}
                getAriaValueText={ariaText}
                aria-labelledby="height-image-slider"
                min={3}
                max={23}
                valueLabelDisplay="on"
                onChange={(event, newValue) => handleSlider(event, newValue, propNames.height)}
                style={{ height: "300px" }}
            />
        </>
    )

}

export default ImagePropInput;