import React, { useState, useEffect } from 'react';
import {
    Slider,
    Checkbox,
    InputLabel,
    Switch
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
// i dont think that worked. obv, should be moved to separate file.
const varNameIcon = {
    bold: {
        name: "bold",
        IconComponent: FormatBoldIcon,
        prop: {
            "font-weight": "bold"
        },
        default: {
            "font-weight": "normal"
        },
    },
    italic: {
        name: "italic",
        IconComponent: FormatItalicIcon,
        prop: {
            "font-style": "italic"
        },
        default: {
            "font-style": "normal"
        },
    },
    underlined: {
        name: "underlined",
        IconComponent: FormatUnderlinedIcon,
        prop: {
            "text-decoration": "underline"
        },
        default: {
            "text-decoration": "none"
        },
    }
};

const alignProp = {
    propName: "text-align",
    default: "left",
};

const alignNameIcon = {
    alignRight: {
        name: "text-align-right",
        IconComponent: FormatBoldIcon,
        value: "right"
    },
    alignLeft: {
        name: "text-align-left",
        IconComponent: FormatItalicIcon,
        value: "left"
    },
    alignCenter: {
        name: "text-align-center",
        IconComponent: FormatUnderlinedIcon,
        value: "center"
    },
    justify: {
        name: "justify",
        IconComponent: FormatItalicIcon,
        value: "justify"
    },
};

function FontVarInput({ onChange, value }) {

    const id = shortid.generate();

    const [formats, setFormats] = useState(() => ['bold', 'italic', 'underline']);

    const handleFormat = (event, newFormats) => {
        console.log(`received ${event} with formats ${newFormats}`);
        setFormats(newFormats);
    };

    useEffect(() => {
        Object.values(varNameIcon).map((val) => {
            const [propName, propValue] = Object.entries(val.default)[0]; // i get it, it sucks.
            onChange(propName, propValue);
        })
        onChange(alignProp.propName, alignProp.default);
    }, [onChange])

    if (value[alignProp.propName] === undefined) return <p>Loading default values...</p>;

    return (
        <div key={id}>{/*just shutting up react */}
            <ToggleButtonGroup value={formats} onChange={handleFormat}>
                {Object.values(varNameIcon).map(({ name, IconComponent, prop: value }) => {
                    const [propName, propValue] = Object.entries(value)[0];
                    const key = shortid.generate();
                    return (
                        <ToggleButton value={propValue} aria-label={name} key={key}>
                            <IconComponent />
                        </ToggleButton>
                    );
                })}
            </ToggleButtonGroup>
        </div>
    )
    /*bold: {
        name: "bold",
        icon: FormatBoldIcon,
        prop: {
            "font-weight": "bold"
        },
        default: {
            "font-weight": "normal"
        },*/
}
export default FontVarInput;