import React, { useContext } from 'react';
import ColorPickerInput from './atoms/ColorPicker';
import { StylesContext, actions } from '../context/style';

function ButtonSettings({ styleId }) {
  const [{ styles }, dispatch] = useContext(StylesContext);
  const onChange = subStyle => {
    dispatch({ type: actions.UPDATE_STYLE, payload: { styleId, ...subStyle } });
  };

  return (
    <div>
      <ColorPickerInput onChange={onChange} value={styles[styleId]} />
    </div>
  );
}

export default ButtonSettings;
