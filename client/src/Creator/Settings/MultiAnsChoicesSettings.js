import React from 'react';

import ColorPickerInput from './atoms/ColorPicker';
import useStylesStore from '../stores/styles';

// Choices style object reference:
// {
//   Root: { /* root styles */ },
//   Checkbox: { /* styles applied to Checkbox components */},
//   Button: { /* styles applied to submit component if present */}
// }

function ChoicesSettings({ styleId }) {
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
      {/* edit root styles */}
      <ColorPickerInput
        onChange={subStyle => onChange(subStyle, 'Root')}
        value={styles[styleId]['Root']}
      />
      <p>edit checkbox settings</p>
      <ColorPickerInput
        onChange={subStyle => onChange(subStyle, 'Checkbox')}
        value={styles[styleId]['Checkbox']}
      />
      <p>edit submit settings</p>
      <ColorPickerInput
        onChange={subStyle => onChange(subStyle, 'Button')}
        value={styles[styleId]['Button']}
      />
    </div>
  );
}

export default ChoicesSettings;
