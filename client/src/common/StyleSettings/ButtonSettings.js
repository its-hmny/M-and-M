import React, { useState } from 'react';
import { useView } from '../../Creator/context/view';
import { view } from '@material-ui/icons';
import { useInputChange } from './useInputChange';
import Button from '../Elements/Button';
import ColorPickerInput from './atoms/ColorPickerInput';

function ButtonSettings({ componentId, style, handleChangeStyle }) {
  const { color, backgroundColor } = style;
  const [input, handleInputChange] = useInputChange();

  return (
    <div>
      <ColorPickerInput onChange={handleChangeStyle} value={input} />
    </div>
  );
}
export default ButtonSettings;
