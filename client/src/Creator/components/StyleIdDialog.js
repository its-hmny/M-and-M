import React, { useState, useMemo } from 'react';
import {
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';

function DialogStyleName({ open, initialId, onComplete, styleIds }) {
  const [styleId, setStyleId] = useState(initialId);

  const handleChange = event => setStyleId(event.target.value);
  const handleComplete = () => onComplete(styleId);
  const idAlreadyPresent = useMemo(
    () =>
      Object.values(styleIds)
        .flat()
        .some(id => id === styleId),
    [styleId]
  );

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
          onKeyPress={e => !idAlreadyPresent && e.key === 'Enter' && handleComplete()}
          helperText={idAlreadyPresent && `Pick an unused name`}
          error={idAlreadyPresent}
        />
      </DialogContent>
      <DialogActions>
        <Button disabled={idAlreadyPresent} onClick={handleComplete}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogStyleName;
