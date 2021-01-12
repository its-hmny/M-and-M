import React, { useState } from '../../../web_modules/react.js';
import {
    Typography,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from '../../../web_modules/@material-ui/core.js';

function DialogStyleName({ open, initialId, onComplete }) {
    const [styleId, setStyleId] = useState(initialId);

    const handleChange = (event) => setStyleId(event.target.value);

    const handleComplete = () => onComplete(styleId);

    return React.createElement(
        Dialog,
        {
            open: open,
        },
        React.createElement(DialogTitle, null, 'Style Id'),
        React.createElement(
            DialogContent,
            null,
            React.createElement(
                Typography,
                null,
                'What do you want to call your new style?',
            ),
            React.createElement(TextField, {
                autoFocus: true,
                label: 'Style id',
                value: styleId,
                onChange: handleChange,
                onKeyPress: (e) => e.key === 'Enter' && handleComplete(),
            }),
        ),
        React.createElement(
            DialogActions,
            null,
            React.createElement(
                Button,
                {
                    onClick: handleComplete,
                },
                'Ok',
            ),
        ),
    );
}

export default DialogStyleName;
