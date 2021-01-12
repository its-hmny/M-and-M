import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextColorPicker from './atoms/TextColorPicker';
import BackgroundColorPicker from './atoms/BackgroundColorPicker';
import useStylesStore from '../stores/styles';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Height as HeightIcon } from '@material-ui/icons';

const useStyles = makeStyles({
  widthIcon: {
    transform: 'rotate(90deg)',
  },
});

const removePercent = value => Number(value.replace('%', ''));
// Choices style object reference:
// {
//   Root: { /* root styles */ },
//   Checkbox: { /* styles applied to Checkbox components */},
//   Button: { /* styles applied to submit component if present */}
// }

function MultiAnsChoicesImagesSettings({ styleId }) {
  const { widthIcon } = useStyles();
  // Choices styles
  const { styles, updateStyle } = useStylesStore(state => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));
  const onChange = (subStyle, innerId) =>
    updateStyle(
      {
        styleId: innerId,
        ...subStyle,
      },
      styleId
    );
  const onWidthChange = (_, newWidth) => {
    updateStyle({ styleId, Image: { height: `${newWidth}%`, width: `${newWidth}%` } });
  };

  return (
    <div>
      <p>Edit Image settings</p>
      <Typography id="width-slider" gutterBottom>
        Width and Height
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <HeightIcon className={widthIcon} />
        </Grid>
        <Grid item xs>
          <Slider
            value={removePercent(styles[styleId]['Image'].width)}
            onChange={onWidthChange}
            getAriaValueText={value => `${value}%`}
            aria-labelledby="width-slider"
          />
        </Grid>
      </Grid>
      <p>Edit Checkbox settings</p>
      <TextColorPicker
        onChange={subStyle => onChange(subStyle, 'Checkbox')}
        value={styles[styleId]['Checkbox']}
      />
      <BackgroundColorPicker
        onChange={subStyle => onChange(subStyle, 'Checkbox')}
        value={styles[styleId]['Checkbox']}
      />
      <p>Edit submit settings</p>
      <TextColorPicker
        onChange={subStyle => onChange(subStyle, 'Button')}
        value={styles[styleId]['Button']}
      />
      <BackgroundColorPicker
        onChange={subStyle => onChange(subStyle, 'Button')}
        value={styles[styleId]['Button']}
      />
    </div>
  );
}

export default MultiAnsChoicesImagesSettings;
