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
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formElements: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
}));

const Form = ({ story, handleChange }) => {
  const classes = useStyles();
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
        <InputLabel id="target-label">Target</InputLabel>
        <Select
          labelId="target-label"
          label="Target"
          value={story.target}
          onChange={e => handleChange('target', e.target.value)}
        >
          <MenuItem value={'KID'}>Kid</MenuItem>
          <MenuItem value={'TEEN'}>Teen</MenuItem>
          <MenuItem value={'ADULT'}>Adult</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formElements}>
        <InputLabel id="gameplay-label">Gameplay</InputLabel>
        <Select
          labelId="gameplay-label"
          label="Gameplay"
          value={story.gameplay}
          onChange={e => handleChange('gameplay', e.target.value)}
        >
          <MenuItem value={'SINGLE'}>Single</MenuItem>
          <MenuItem value={'GROUP'}>Group</MenuItem>
        </Select>
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
