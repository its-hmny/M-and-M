import React from 'react';
import TextColorPickerInput from './atoms/TextColorPicker';
import BackgroundColorPickerInput from './atoms/BackgroundColorPicker';
import useStylesStore from '../stores/styles';

function ButtonSettings({ componentId, styleId }) {
  const { styles, updateStyle } = useStylesStore(state => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));
  const onChange = subStyle => updateStyle({ styleId, ...subStyle });

  return (
    <div>
      <TextColorPickerInput onChange={onChange} value={styles[styleId]} />
      <BackgroundColorPickerInput onChange={onChange} value={styles[styleId]} />
    </div>
  );
}

export default ButtonSettings;
