import React, { useState } from '../../web_modules/react.js';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Checkbox,
  FormControlLabel,
} from '../../web_modules/@material-ui/core.js';

const AreYouSureDialog = ({ open, onCancel, onConfirm }) => {
  const [dontAskAgain, setDontAskAgain] = useState(false);

  return React.createElement(
    Dialog,
    {
      open: open,
      onClose: onCancel,
      'aria-labelledby': 'alert-dialog-title',
      'aria-describedby': 'alert-dialog-description',
    },
    React.createElement(
      DialogTitle,
      {
        id: 'alert-dialog-title',
      },
      'Are you sure you want to delete this story?'
    ),
    React.createElement(
      DialogContent,
      null,
      React.createElement(
        DialogContentText,
        {
          id: 'alert-dialog-description',
        },
        'This is an irreversible operation, the story will be deleted, are you sure you want to continue?'
      ),
      React.createElement(FormControlLabel, {
        value: 'top',
        control: React.createElement(Checkbox, {
          color: 'primary',
          onChange: () => setDontAskAgain(!dontAskAgain),
        }),
        label: "Don't ask again",
        labelPlacement: 'end',
      })
    ),
    React.createElement(
      DialogActions,
      null,
      React.createElement(
        Button,
        {
          onClick: onCancel,
          color: 'primary',
        },
        'No'
      ),
      React.createElement(
        Button,
        {
          onClick: () => onConfirm(dontAskAgain),
          color: 'primary',
        },
        'Yes'
      )
    )
  );
};

export default AreYouSureDialog;
