import React from 'react';

import ColorPickerInput from './atoms/ColorPicker';
import useStylesStore from '../stores/styles';

function InputSettings({ styleId }) {
  const { styles, updateStyle } = useStylesStore(state => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));
  const onChange = subStyle => updateStyle({ styleId, ...subStyle });

  return (
    <div>
      <ColorPickerInput onChange={onChange} value={styles[styleId]} />
    </div>
  );
}
export default InputSettings;
