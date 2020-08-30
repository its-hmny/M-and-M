import React, { useState, useEffect, useCallback } from 'react';
import {
    Slider,
    Checkbox,
    InputLabel,
    Switch
} from '@material-ui/core';
import shortid from 'shortid';
import Autocomplete from '@material-ui/lab/Autocomplete';


function getText(value) {
    return `${value}px`;
}


const propNames = {
    auto: "auto",
    width: "width",
    height: "height",
};

const propDefaults = {
    width: "100px",
    height: "100px",
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

    function getValue(propName) {
        let returned;
        if (value[propName] !== undefined)
            returned = value[propName].replace("px", "");
        else
            returned = propDefaults[propName].replace("px", "");
        return (+returned); // so that it returns the int
    }

    useEffect(() => {
        Object.entries(auto ? autoSettings : defaultSettings).map(([key, value]) => onChange(key, value));
    }, [auto, onChange]);

    useEffect(() => {
        Object.entries(propDefaults).map(([key, value]) => onChange(key, value));
    }, [onChange]);


    const toggleAuto = (event) => setAuto(!auto);

    const handleSlider = (event, newValue, name) => {
        onChange(name, getText(newValue));
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
                disabled={auto}
                id="giorgio"
                name={propNames.width}
                value={getValue(propNames.width)}
                getAriaValueText={getText}
                aria-labelledby="width-image-slider"
                min={20}
                max={700}
                valueLabelDisplay="on"
                onChange={(event, newValue) => handleSlider(event, newValue, propNames.width)}
            />

            <Slider
                disabled={auto}
                name={propNames.height}
                orientation="vertical"
                value={getValue(propNames.height)}
                getAriaValueText={getText}
                aria-labelledby="height-image-slider"
                min={20}
                max={700}
                valueLabelDisplay="on"
                onChange={(event, newValue) => handleSlider(event, newValue, propNames.height)}
                style={{ height: "300px" }}
            />
        </>
    )

}

export default ImagePropInput;