import React from 'react';

import ColorPickerInput from './atoms/ColorPicker';
import useStylesStore from '../stores/styles';

// Choices style object reference:
// {
//   Root: { /* root styles */ },
//   Button: { /* styles applied to Button */ },
// }

const CameraSettings = ({ styleId }) => {
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
      <ColorPickerInput
        onChange={subStyle => onChange(subStyle, 'CameraButton')}
        value={styles[styleId]['CameraButton']}
      />
      <p>Edit submit Button settings</p>
      <ColorPickerInput
        onChange={subStyle => onChange(subStyle, 'Button')}
        value={styles[styleId]['Button']}
      />
    </div>
  );
};

export default CameraSettings;
