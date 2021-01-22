import React, { useState, useCallback } from '../../../web_modules/react.js';
import Button from '../../../web_modules/@material-ui/core/Button.js';
import TextField from '../../../web_modules/@material-ui/core/TextField.js';
import Dialog from '../../../web_modules/@material-ui/core/Dialog.js';
import DialogActions from '../../../web_modules/@material-ui/core/DialogActions.js';
import DialogContent from '../../../web_modules/@material-ui/core/DialogContent.js';
import DialogContentText from '../../../web_modules/@material-ui/core/DialogContentText.js';
import DialogTitle from '../../../web_modules/@material-ui/core/DialogTitle.js';
import { makeStyles } from '../../../web_modules/@material-ui/core.js';

const useStyles = makeStyles(theme => ({
  name: {
    marginBottom: theme.spacing(2),
  },
}));

const SaveDialog = ({ open, onCancel, onSave }) => {
  const classes = useStyles();

  const [name, setName] = useState('');

  const [description, setDescription] = useState('');

  const handleComplete = useCallback(
    () =>
      onSave({
        name,
        description,
      }),
    [name, description, onSave]
  );

  const handleEnter = useCallback(
    evt => {
      if (name && evt.key === 'Enter') {
        handleComplete();
      }
    },
    [name, handleComplete]
  );

  return React.createElement(
    Dialog,
    {
      open: open,
      onClose: onCancel,
      'aria-labelledby': 'save-dialog',
    },
    React.createElement(
      DialogTitle,
      {
        id: 'save-dialog',
      },
      'Save Template'
    ),
    React.createElement(
      DialogContent,
      null,
      React.createElement(
        DialogContentText,
        null,
        "You're about to save this template. Give your new template a name and a brief description."
      ),
      React.createElement(TextField, {
        className: classes.name,
        autoFocus: true,
        variant: 'outlined',
        margin: 'dense',
        id: 'name',
        label: 'Name',
        fullWidth: true,
        value: name,
        onChange: evt => setName(evt.target.value),
        onKeyPress: handleEnter,
      }),
      React.createElement(TextField, {
        variant: 'outlined',
        margin: 'dense',
        id: 'description',
        label: 'Description',
        fullWidth: true,
        multiline: true,
        rows: 4,
        value: description,
        onChange: evt => setDescription(evt.target.value),
        onKeyPress: handleEnter,
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
        'Cancel'
      ),
      React.createElement(
        Button,
        {
          onClick: handleComplete,
          color: 'primary',
          disabled: !name,
        },
        'Save'
      )
    )
  );
};

export default SaveDialog;
