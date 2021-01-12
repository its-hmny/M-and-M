import React, { useState } from '../../../../web_modules/react.js';
import {
    ToggleButton,
    ToggleButtonGroup,
} from '../../../../web_modules/@material-ui/lab.js';
import {
    FormatBold as FormatBoldIcon,
    FormatItalic as FormatItalicIcon,
    FormatUnderlined as FormatUnderlinedIcon,
} from '../../../../web_modules/@material-ui/icons.js';

const props = {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecoration: 'underline',
};

function TextFormat({ onChange, value }) {
    const [formats, setFormats] = useState(() => {
        Object.keys(props).forEach((prop) => {
            if (value[prop]) formats.push(value[prop]);
        });
    });

    const handleFormat = (_, newFormats) => {
        setFormats(newFormats);
        Object.entries(props).map(([prop, value]) =>
            onChange({
                [prop]: newFormats.includes(value) ? value : undefined,
            }),
        );
    };

    return React.createElement(
        ToggleButtonGroup,
        {
            value: formats,
            onChange: handleFormat,
            'aria-label': 'font decorations',
        },
        React.createElement(
            ToggleButton,
            {
                value: 'bold',
                'aria-label': 'bold',
            },
            React.createElement(FormatBoldIcon, null),
        ),
        React.createElement(
            ToggleButton,
            {
                value: 'italic',
                'aria-label': 'italic',
            },
            React.createElement(FormatItalicIcon, null),
        ),
        React.createElement(
            ToggleButton,
            {
                value: 'underline',
                'aria-label': 'underline',
            },
            React.createElement(FormatUnderlinedIcon, null),
        ),
    );
}

export default TextFormat;
