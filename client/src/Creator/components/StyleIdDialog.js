import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';

function DialogStyleName({ open, initialId, onComplete }) {
  const [styleId, setStyleId] = useState(initialId);

  const handleChange = event => setStyleId(event.target.value);
  const handleComplete = () => onComplete(styleId);

  return (
    <Dialog open={open}>
      <DialogTitle>Style Id</DialogTitle>
      <DialogContent>
        <Typography>What do you want to call your new style?</Typography>
        <TextField
          autoFocus
          label="Style id"
          value={styleId}
          onChange={handleChange}
          onKeyPress={e => e.key == 'Enter' && handleComplete()}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleComplete}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogStyleName;
