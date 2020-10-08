import React, { useContext } from 'react';
import FontFamily from './atoms/FontFamily';
import ColorPicker from './atoms/ColorPicker';
import FontSize from './atoms/FontSize';
// import ImageProp from './atoms/ImageProp';
import TextFormat from './atoms/TextFormat';
import TextAlignment from './atoms/TextAlignment';
import useStylesStore, { actions } from '../styles';

function TextSettings({ styleId }) {
  // const { style, updateStyle } = useStyle('Elements/Text', styleName);
  const [state, dispatch] = useStylesStore();
  const onChange = subStyle => {
    dispatch({ type: actions.UPDATE_STYLE, payload: { styleId, ...subStyle } });
  };

  return (
    <div>
      <FontFamily onChange={onChange} value={state.styles[styleId]} />
      <FontSize onChange={onChange} value={state.styles[styleId]} />
      <ColorPicker onChange={onChange} value={state.styles[styleId]} />
      {/*<ImageProp onChange={onChange} value={state.styles[styleId]} />*/}
      <TextFormat onChange={onChange} value={state.styles[styleId]} />
      <TextAlignment onChange={onChange} value={state.styles[styleId]} />
    </div>
  );
}

export default TextSettings;
