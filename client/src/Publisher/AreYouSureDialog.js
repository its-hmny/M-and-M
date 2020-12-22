import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

const AreYouSureDialog = ({ open, onClose, onConfirm }) => (
  <Dialog
    open={open}
    onClose={onClose}
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
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        No
      </Button>
      <Button onClick={onConfirm} color="primary">
        Yes
      </Button>
    </DialogActions>
  </Dialog>
);

export default AreYouSureDialog;
