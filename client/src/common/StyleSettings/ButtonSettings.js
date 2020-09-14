import React from 'react';
import ColorPickerInput from './atoms/ColorPicker';
import { useStyle } from '../../Creator/context/style';

function ButtonSettings({ styleName }) {
  const { style, updateStyle } = useStyle('Elements/Button', styleName);
  const onChange = subStyle => updateStyle({ ...style, ...subStyle });

  return (
    <div>
      <ColorPickerInput onChange={onChange} value={style} />
    </div>
  );
}

export default ButtonSettings;
