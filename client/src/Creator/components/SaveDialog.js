import React, { useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core';

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
    () => onSave({ name, description }),
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

  return (
    <Dialog open={open} onClose={onCancel} aria-labelledby="save-dialog">
      <DialogTitle id="save-dialog">Save Template</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You're about to save this template. Give your new template a name and a brief
          description.
        </DialogContentText>
        <TextField
          className={classes.name}
          autoFocus
          variant="outlined"
          margin="dense"
          id="name"
          label="Name"
          fullWidth
          value={name}
          onChange={evt => setName(evt.target.value)}
          onKeyPress={handleEnter}
        />
        <TextField
          variant="outlined"
          margin="dense"
          id="description"
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={evt => setDescription(evt.target.value)}
          onKeyPress={handleEnter}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleComplete} color="primary" disabled={!name}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaveDialog;
