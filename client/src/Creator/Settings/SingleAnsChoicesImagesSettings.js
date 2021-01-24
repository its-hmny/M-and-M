import React from 'react';
import TextColorPicker from './atoms/TextColorPicker';
import BackgroundColorPicker from './atoms/BackgroundColorPicker';
import useStylesStore from '../stores/styles';

// Choices style object reference:
// {
//   Root: { /* root styles */ },
//   Checkbox: { /* styles applied to Checkbox components */},
//   Button: { /* styles applied to submit component if present */}
// }

function SingleAnsChoicesImagesSettings({ styleId }) {
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
      <p>Edit Radio settings</p>
      <TextColorPicker
        onChange={subStyle => onChange(subStyle, 'Radio')}
        value={styles[styleId]['Radio']}
      />
      <BackgroundColorPicker
        onChange={subStyle => onChange(subStyle, 'Radio')}
        value={styles[styleId]['Radio']}
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

export default SingleAnsChoicesImagesSettings;
