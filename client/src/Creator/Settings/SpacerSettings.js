import React from 'react';

import ColorPickerInput from './atoms/ColorPicker';
import useStylesStore from '../stores/styles';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const removePercent = value => Number(value.replace('%', ''));

const SpacerSettings = ({ styleId }) => {
  const { styles, updateStyle } = useStylesStore(state => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));
  const onChange = subStyle => updateStyle({ styleId, ...subStyle });

  const onWidthChange = (_, newWidth) => {
    updateStyle({ styleId, width: `${newWidth}%` });
  };
  const onHeightChange = (_, newHeight) => {
    updateStyle({ styleId, height: `${newHeight}%` });
  };
  return (
    <div>
      <ColorPickerInput onChange={onChange} value={styles[styleId]} />
      <div>
        <Typography id="height-slider" gutterBottom>
          Height
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs>
            <Slider
              value={removePercent(styles[styleId].height)}
              onChange={onHeightChange}
              getAriaValueText={value => `${value}%`}
              aria-labelledby="height-slider"
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <Typography id="width-slider" gutterBottom>
          Width
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs>
            <Slider
              value={removePercent(styles[styleId].width)}
              onChange={onWidthChange}
              getAriaValueText={value => `${value}%`}
              aria-labelledby="width-slider"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default SpacerSettings;
