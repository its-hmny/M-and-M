import React from 'react';
import { Typography } from '@material-ui/core';
import TextColorPicker from './atoms/TextColorPicker';
import BackgroundColorPicker from './atoms/BackgroundColorPicker';
import useStylesStore from '../stores/styles';

// Choices style object reference:
// {
//   Root: { /* root styles */ },
//   Checkbox: { /* styles applied to Checkbox components */},
//   Button: { /* styles applied to submit component if present */}
// }

function MultiAnsChoicesImagesSettings({ styleId }) {
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

  return (
    <div>
      <Typography variant="h4">Border</Typography>
      <TextColorPicker
        onChange={subStyle => onChange(subStyle, 'Checkbox')}
        value={styles[styleId]['Checkbox']}
      />
      <BackgroundColorPicker
        onChange={subStyle => onChange(subStyle, 'Checkbox')}
        value={styles[styleId]['Checkbox']}
      />
      <Typography variant="h4">Submit Button</Typography>
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
