import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Collapse,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  TextField,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';


function DialogStyleName({ open, onCancel, value, onChange, onSave }) {

  return (
    <Dialog onClose={onCancel} open={open} aria-labelledby="dialog-new-style-name" >
      <DialogTitle id="new-style-name">Insert new name</DialogTitle>
      <DialogContent>
        <Typography>What do you want to call your new style?</Typography>
        <TextField
          autoFocus
          id="new-style-dialog-name-input"
          label="Style Name"
          value={value}
          onChange={(event) => onChange(event.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </DialogActions>
    </Dialog>

  )
}

export default DialogStyleName;