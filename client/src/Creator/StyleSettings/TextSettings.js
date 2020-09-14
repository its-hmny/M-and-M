import React from 'react';
import FontFamily from './atoms/FontFamily';
import ColorPicker from './atoms/ColorPicker';
import FontSize from './atoms/FontSize';
// import ImageProp from './atoms/ImageProp';
import TextFormat from './atoms/TextFormat';
import TextAlignment from './atoms/TextAlignment';
import { useStyle } from '../../Creator/context/style';

function TextSettings({ styleName }) {
  const { style, updateStyle } = useStyle('Elements/Text', styleName);
  const onChange = subStyle => {
    updateStyle({ ...subStyle });
  };

  return (
    <div>
      <FontFamily onChange={onChange} value={style} />
      <ColorPicker onChange={onChange} value={style} />
      <FontSize onChange={onChange} value={style} />
      {/*<ImageProp onChange={onChange} value={style} />*/}
      <TextFormat onChange={onChange} value={style} />
      <TextAlignment onChange={onChange} value={style} />
    </div>
  );
}

export default TextSettings;
