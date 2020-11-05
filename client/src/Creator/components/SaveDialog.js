import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const SaveDialog = ({ open, onCancel, onSave }) => {
  const [name, setName] = useState('');

  return (
    <Dialog open={open} onClose={onCancel} aria-labelledby="save-dialog">
      <DialogTitle id="save-dialog">Save Template</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You're about to save this template. Enter template name in the text field below.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Template name"
          fullWidth
          value={name}
          onChange={evt => setName(evt.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={() => onSave(name)} color="primary" disabled={!name}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaveDialog;
