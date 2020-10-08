import React, { useContext } from 'react';
import ColorPickerInput from './atoms/ColorPicker';
import useStylesStore, { actions } from '../styles';

function ButtonSettings({ styleId }) {
  const [{ styles }, dispatch] = useStylesStore();
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
