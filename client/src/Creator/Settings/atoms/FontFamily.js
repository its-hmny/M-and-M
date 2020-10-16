import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputLabel } from '@material-ui/core';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import shortid from 'shortid';

const filter = createFilterOptions();
/*
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));*/

function FontFamilyInput({ onChange, value }) {
  //const classes = useStyles();
  const autoInput = shortid.generate();

  return (
    <div>
      <Autocomplete
        id={autoInput}
        onChange={(_, newValue) => {
          if (typeof newValue === 'string') {
            // enter a string and press enter
            // maybe we want to add dialog.. https://material-ui.com/components/autocomplete/#creatable
            // if you want to implement adding new input, REMEMBER freeSolo as an option
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input (clicking add)
            // same shit as before. for now, you HAVE to select one of the options
          } else if (newValue) {
            // if i pressed one of the options
            onChange({ fontFamily: newValue.name });
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          /*
          // Suggest the creation of a new value
          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              title: `Add "${params.inputValue}"`,
            });
          }
          */
          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        required
        value={possibleFonts.find(font => font.name === value.fontFamily)}
        options={possibleFonts.sort()}
        getOptionLabel={option => option.name}
        groupBy={option => option.type}
        renderOption={option => option.name}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="Font family" variant="outlined" />
        )}
      />
    </div>
  );
}

export default FontFamilyInput;

const possibleFonts = [
  { name: 'sans-serif', type: 'sans-serif' },
  { name: 'Helvetica', type: 'sans-serif' },
  { name: 'Arial', type: 'sans-serif' },
  { name: 'Verdana', type: 'sans-serif' },
  { name: 'Tahoma', type: 'sans-serif' },
  { name: 'Comic Sans MS', type: 'sans-serif' },
  { name: 'Impact', type: 'sans-serif' },
  { name: 'Avant Garde', type: 'sans-serif' },
  { name: 'Trebuchet MS', type: 'sans-serif' },
  { name: 'Geneva', type: 'sans-serif' },
  { name: 'serif', type: 'serif' },
  { name: 'Times', type: 'serif' },
  { name: 'Times New Roman', type: 'serif' },
  { name: 'Georgia', type: 'serif' },
  { name: 'Palatino', type: 'serif' },
  { name: 'Bookman', type: 'serif' },
  { name: 'Garamond', type: 'serif' },
  { name: 'monospace', type: 'monospace' },
  { name: 'Courier', type: 'monospace' },
  { name: 'Courier New', type: 'monospace' },
  { name: 'Andale Mono', type: 'monospace' },
  { name: 'Lucida Console', type: 'monospace' },
];
