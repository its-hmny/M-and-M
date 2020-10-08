import React, { useContext } from 'react';
import FontFamily from './atoms/FontFamily';
import ColorPicker from './atoms/ColorPicker';
import FontSize from './atoms/FontSize';
// import ImageProp from './atoms/ImageProp';
import TextFormat from './atoms/TextFormat';
import TextAlignment from './atoms/TextAlignment';
import useStylesStore from '../stores/styles';

function TextSettings({ styleId }) {
  const { styles, updateStyle } = useStylesStore(state => ({ styles: state.styles, updateStyle: state.updateStyle }));
  const onChange = subStyle => updateStyle({ styleId, ...subStyle });

  return (
    <div>
      <FontFamily onChange={onChange} value={styles[styleId]} />
      <FontSize onChange={onChange} value={styles[styleId]} />
      <ColorPicker onChange={onChange} value={styles[styleId]} />
      {/*<ImageProp onChange={onChange} value={styles[styleId]} />*/}
      <TextFormat onChange={onChange} value={styles[styleId]} />
      <TextAlignment onChange={onChange} value={styles[styleId]} />
    </div>
  );
}

export default TextSettings;
