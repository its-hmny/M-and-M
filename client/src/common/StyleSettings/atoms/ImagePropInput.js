import React, { useState, useEffect } from 'react';
import {
    Slider,
    Checkbox,
    InputLabel,
    Switch
} from '@material-ui/core';
import shortid from 'shortid';
import Autocomplete from '@material-ui/lab/Autocomplete';


function getText(value) {
    return `${value}%`;
}


const propNames = {
    auto: "auto",
    width: "width",
    height: "height",
};

const propDefaults = {
    width: "50%",
    height: "50%",
};

const autoSettings = {
    "display": "block",
    "margin-left": "auto",
    "margin-right": "auto",
    "max-width": "100%",
    "width": "50%",
    "height": "50%",
    "padding": "5 5px"
}
const defaultSettings = {
    "display": "flex",
    "margin-left": "auto",
    "margin-right": "auto",
    "max-width": "500%",
    "width": "100%",
    "height": "100%",
    "padding": "0px"
}

function ImagePropInput({ onChange, value }) {
    const [auto, setAuto] = useState(true);
    const ids = {};
    Object.keys(propNames).map((element) => ids[element] = shortid.generate());

    function getValue(propName) {
        let returned;
        if (value[propName] !== undefined)
            returned = value[propName].replace("%", "");
        else
            returned = propDefaults[propName].replace("%", "");
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
            <InputLabel htmlFor={ids[propNames.auto]}> Default</InputLabel>
            {/* i wasn't sure, now i am. i was supposed to use FormControlLabel, not InputLabel... TODO!*/}
            <Switch
                name={propNames.auto}
                id={ids[propNames.auto]}
                checked={auto}
                aria-label="auto-image"
                onChange={toggleAuto} />
            <InputLabel htmlFor={ids[propNames.width]}>Width</InputLabel>
            <Slider
                disabled={auto}
                id={ids[propNames.width]}
                name={propNames.width}
                value={getValue(propNames.width)}
                getAriaValueText={getText}
                aria-labelledby="width-image-slider"
                min={0}
                max={100}
                valueLabelDisplay="on"
                onChange={(event, newValue) => handleSlider(event, newValue, propNames.width)}
            />

            <InputLabel htmlFor={ids[propNames.height]}>Height</InputLabel>
            <Slider
                disabled={auto}
                id={ids[propNames.height]}
                name={propNames.height}
                orientation="vertical"
                value={getValue(propNames.height)}
                getAriaValueText={getText}
                aria-labelledby="height-image-slider"
                min={0}
                max={100}
                valueLabelDisplay="on"
                onChange={(event, newValue) => handleSlider(event, newValue, propNames.height)}
                style={{ height: "300px" }}
            />
        </>
    )

}

export default ImagePropInput;