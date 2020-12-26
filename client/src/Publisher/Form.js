import React, { useState } from 'react';
import {
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  TextField,
  FormControlLabel,
  Box,
  FormGroup,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '3vh 2vw',
  },
  formElements: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
}));

const Form = ({ story, handleChange }) => {
  const classes = useStyles();
  const handleCheck = (propName, field, value) => {
    handleChange(propName, { ...story.propName, field: value });
  };
  return (
    <div className={classes.form}>
      <FormControl className={classes.formElements}>
        <TextField
          variant="filled"
          value={story.title}
          onChange={e => {
            handleChange('title', e.target.value);
          }}
          label={'Title'}
        />
      </FormControl>
      <FormControl className={classes.formElements}>
        <TextField
          variant="filled"
          value={story.description}
          onChange={e => handleChange('description', e.target.value)}
          label={'Description'}
        />
      </FormControl>
      <FormControl variant="outlined" className={classes.formElements}>
        <FormGroup>
          <Typography variant="subtitle2">Suitable for:</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={story.gameplay.single}
                onChange={e => handleCheck('target', 'child', e.target.checked)}
              />
            }
            label={<Typography variant="body2">Children</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={story.gameplay.single}
                onChange={e => handleCheck('target', 'teen', e.target.checked)}
              />
            }
            label={<Typography variant="body2">Teen</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={story.gameplay.single}
                onChange={e => handleCheck('target', 'adult', e.target.checked)}
              />
            }
            label={<Typography variant="body2">Young Adults</Typography>}
          />
        </FormGroup>
      </FormControl>
      <FormControl variant="outlined" className={classes.formElements}>
        <FormGroup>
          <Typography variant="subtitle2">Playable by:</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={story.gameplay.single}
                onChange={e => handleCheck('gameplay', 'single', e.target.checked)}
              />
            }
            label={<Typography variant="body2">Single Player</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={story.gameplay.multi}
                onChange={e =>
                  handleChange('gameplay', { ...story.gameplay, multi: e.target.checked })
                }
              />
            }
            label={<Typography variant="body2">Multi Player</Typography>}
          />
        </FormGroup>
      </FormControl>
      <FormControl className={classes.formElements}>
        <FormControlLabel
          label="Accessible"
          control={
            <Checkbox
              checked={story.accessible}
              onChange={e => handleChange('accessible', e.target.checked)}
            />
          }
        />
      </FormControl>
    </div>
  );
};

export default Form;
