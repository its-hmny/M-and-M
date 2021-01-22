import React, { useState, useMemo } from '../../../web_modules/react.js';
import {
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '../../../web_modules/@material-ui/core.js';

function DialogStyleName({ open, initialId, onComplete, styleIds }) {
  const [styleId, setStyleId] = useState(initialId);

  const handleChange = (event) => setStyleId(event.target.value);

  const handleComplete = () => onComplete(styleId);

  const idAlreadyPresent = useMemo(
    () =>
      Object.values(styleIds)
        .flat()
        .some((id) => id === styleId),
    [styleId, styleIds],
  );

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
        onKeyPress: (e) =>
          !idAlreadyPresent && e.key === 'Enter' && handleComplete(),
        helperText: idAlreadyPresent && `Pick an unused name`,
        error: idAlreadyPresent,
      }),
    ),
    React.createElement(
      DialogActions,
      null,
      React.createElement(
        Button,
        {
          disabled: idAlreadyPresent,
          onClick: handleComplete,
        },
        'Ok',
      ),
    ),
  );
}

export default DialogStyleName;
