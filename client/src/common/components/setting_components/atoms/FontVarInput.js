import React, { useState, useEffect } from 'react';
import {
    Slider,
    Checkbox,
    InputLabel,
    Switch,
    Divider
} from '@material-ui/core';
import shortid from 'shortid';
import {
    ToggleButton,
    ToggleButtonGroup,
} from '@material-ui/lab';
import {
    FormatBold as FormatBoldIcon,
    FormatItalic as FormatItalicIcon,
    FormatUnderlined as FormatUnderlinedIcon,
    FormatAlignLeft as FormatAlignLeftIcon,
    FormatAlignCenter as FormatAlignCenterIcon,
    FormatAlignRight as FormatAlignRightIcon,
    FormatAlignJustify as FormatAlignJustifyIcon,
} from '@material-ui/icons';

// the name was supposed to be reminiscent of text-variant without being too long... 
// i dont think that worked. obv, should be moved to different file.

// also, i know i used two different structures for the two groups of properties. :(
const varNameIcon = {
    bold: {
        name: "text-bold", // aria-label and maybe tooltip
        IconComponent: FormatBoldIcon,
        prop: "font-weight",
        active: "bold",
        defaultValue: "normal"
    },
    italic: {
        name: "text-italic",
        IconComponent: FormatItalicIcon,
        prop: "font-style",
        active: "italic",
        defaultValue: "normal"
    },
    underline: {
        name: "text-underline",
        IconComponent: FormatUnderlinedIcon,
        prop: "text-decoration",
        active: "underline",
        defaultValue: "none"
    }
};

const alignProp = {
    propName: "text-align",
    defaultValue: "left",
};

const alignNameIcon = {
    alignLeft: {
        name: "text-align-left",
        IconComponent: FormatAlignLeftIcon,
        value: "left"
    },
    alignRight: {
        name: "text-align-right",
        IconComponent: FormatAlignRightIcon,
        value: "right"
    },
    alignCenter: {
        name: "text-align-center",
        IconComponent: FormatAlignCenterIcon,
        value: "center"
    },
    justify: {
        name: "text-justify",
        IconComponent: FormatAlignJustifyIcon,
        value: "justify"
    },
};

function getFormats(value) {
    // needed because of the weird way ToggleButtonGroup expects state
    // i think they made it like that to support a direct setState operation,
    // but it kinda makes handling values separately very annoying. I'm guessing
    // they imagined a different workflow.
    let formats = [];
    Object.values(varNameIcon).map(({ prop }) => formats.push(value[prop]));
    return formats;
}

function FontVarInput({ onChange, value }) {

    const id = shortid.generate();

    // assigning default values...
    useEffect(() => {
        Object.values(varNameIcon).map(({ prop, defaultValue }) => onChange(prop, defaultValue));
        onChange(alignProp.propName, alignProp.defaultValue);
    }, [onChange])

    const handleFormat = (event, newFormats) => {
        Object.entries(varNameIcon).map(([key, { prop, active, defaultValue }]) => {
            onChange(prop, (newFormats.includes(active)) ? active : defaultValue);
        })
    };

    const handleAlignment = (event, newAlignment, propName) => {
        onChange(propName, newAlignment);
    };


    if (value[alignProp.propName] === undefined) return <p>Loading defaultValue values...</p>;

    return (
        <div key={id}>{/*just shutting up react */}
            <ToggleButtonGroup value={getFormats(value)} onChange={handleFormat} aria-label={"font decorations"}>
                {Object.values(varNameIcon).map(({ name, IconComponent, prop, active }) => {
                    return (
                        <ToggleButton value={active} aria-label={name} key={`${name} -button${shortid.generate()} `}>
                            <IconComponent />
                        </ToggleButton>
                    );
                })}
            </ToggleButtonGroup>
            <Divider flexItem orientation="vertical" />
            <ToggleButtonGroup
                exclusive
                value={value[alignProp.propName]}
                onChange={(event, newValue) => handleAlignment(event, newValue, alignProp.propName)}
                aria-label={alignProp.propName}>
                {Object.values(alignNameIcon).map(({ name, IconComponent, value }) => {
                    return (
                        <ToggleButton value={value} aria-label={name} key={`${name} -button${shortid.generate()} `}>
                            <IconComponent />
                        </ToggleButton>
                    );
                })}
            </ToggleButtonGroup>
        </div>
    )
}
export default FontVarInput;