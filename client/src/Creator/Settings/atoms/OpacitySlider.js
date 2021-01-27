import React from 'react';
import { Slider } from '@material-ui/core';

//TODO: https://material-ui.com/components/slider/#accessibility

function OpacitySlider({ onChange, value }) {
  const handleSliderChange = (_, newValue) => {
    onChange({ opacity: newValue / 100 });
  };

  return (
    <>
      <Slider
        defaultValue={100}
        value={Number(Math.round(value.opacity * 100))}
        getAriaValueText={val => `${val}`}
        aria-labelledby="font-size-slider"
        step={1}
        min={0}
        max={100}
        valueLabelDisplay="on"
        onChange={handleSliderChange}
      />
    </>
  );
}

export default OpacitySlider;
