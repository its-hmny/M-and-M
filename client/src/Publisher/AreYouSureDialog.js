import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';

const AreYouSureDialog = ({ open, onCancel, onConfirm }) => {
  const [dontAskAgain, setDontAskAgain] = useState(false);
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you sure you want to delete this story?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This is an irreversible operation, the story will be deleted, are you sure you
          want to continue?
        </DialogContentText>
        <FormControlLabel
          value="top"
          control={
            <Checkbox color="primary" onChange={() => setDontAskAgain(!dontAskAgain)} />
          }
          label="Don't ask again"
          labelPlacement="end"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          No
        </Button>
        <Button onClick={() => onConfirm(dontAskAgain)} color="primary">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AreYouSureDialog;
