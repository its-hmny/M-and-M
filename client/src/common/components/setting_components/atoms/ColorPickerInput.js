import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';
import shortid from 'shortid';

const useStyles = makeStyles(theme => ({
  colorInput: {
    margin: theme.spacing(1),
    minWidth: 80,
    minHeight: 30,
    display: 'block',
  }
}));

const properties = [
  {
    prop: "color",
    label: "Change color (text)"
  },
  {
    prop: "background-color",
    label: "Change background color"
  }];

function ColorPickerInput({ onChange, value }) {
  const classes = useStyles();
  const handleChangeColor = (event) => {
    onChange(event);
  }

  return (
    <>
      {
        properties.map(({ prop, label }) => {
          const inputId = shortid.generate();
          // div key stops strictMode from harassing me
          return (
            <div key={`${inputId}-div`}>
              <InputLabel htmlFor={inputId}>{label}</InputLabel>
              <input
                type="color"
                className={classes.colorInput}
                id={inputId}
                onChange={handleChangeColor}
                name={prop}
                value={value.prop} />
            </div>
          )
        }
        )
      }
    </>
  )
}
// < input type="color" onChange={handleChangeColor} name={propertyNames[0]} />

export default ColorPickerInput;