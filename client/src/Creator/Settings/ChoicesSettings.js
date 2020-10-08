import React, { useContext } from 'react';
import ColorPickerInput from './atoms/ColorPicker';
import useStylesStore, { actions } from '../styles';
import TextSettings from './TextSettings';

function ChoicesSettings({ styleId }) {
  const [state, dispatch] = useStylesStore();
  const onChange = subStyle => {
    dispatch({ type: actions.UPDATE_STYLE, payload: { styleId, ...subStyle } });
  };

  return (
    <div>
      <TextSettings styleId={styleId} />
    </div>
  );
}

export default ChoicesSettings;
