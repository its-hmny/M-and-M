import React from 'react';
import { Slider } from '@material-ui/core';

//TODO: https://material-ui.com/components/slider/#accessibility

function FontSizeInput({ onChange, value }) {
  const handleSliderChange = (_, newValue) => {
    onChange({ fontSize: `${newValue}px` });
  };

  return (
    <>
      <Slider
        defaultValue={12}
        value={Number(value.fontSize.replace('px', ''))}
        getAriaValueText={val => `${val}px`}
        aria-labelledby="font-size-slider"
        step={1}
        marks
        min={3}
        max={70}
        valueLabelDisplay="on"
        onChange={handleSliderChange}
      />
    </>
  );
}

export default FontSizeInput;
