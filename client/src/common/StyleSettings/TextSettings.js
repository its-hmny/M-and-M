import React, { useState } from 'react';
import { useView } from '../../Creator/context/view';
import { view } from '@material-ui/icons';
import { useInputChange } from './useInputChange';
import Button from '../Elements/Button';
import FontFamilyInput from './atoms/FontFamilyInput';
import ColorPickerInput from './atoms/ColorPickerInput';
import FontSizeInput from './atoms/FontSizeInput';
import ImagePropInput from './atoms/ImagePropInput';
import FontVarInput from './atoms/FontVarInput';

const TextContent = ({ content, onChange }) => {
  return (
    <div>
      <textarea
        value={content}
        onChange={onChange}
        style={{ minHeight: 100 }}
      />
    </div>
  );
};

function TextSettings({ componentId, styleName, text }) {
  const [input, handleInputChange] = useInputChange(styleName);
  const { style, dispatch } = useStyle(styleName);

  return (
    <div>
      <FontFamilyInput value={input} onChange={handleInputChange} />
      <TextDecoration />
      <ColorPickerInput onChange={handleInputChange} value={input} />
      <FontSizeInput onChange={handleInputChange} value={input} />
      <ImagePropInput onChange={handleInputChange} value={input} />
      <FontVarInput onChange={handleInputChange} value={input} />
    </div>
  );
}

export default TextSettings;

/*

<ButtonSettings 
  onChange={(updatedStyle) => setStyles({ ...styles, [styleName]: updatedStyle })} 
  value={styles[styleName]} />

styles: {
  SpaceButton: {

  },
  UnderwaterButton: {

  }
}

*/
