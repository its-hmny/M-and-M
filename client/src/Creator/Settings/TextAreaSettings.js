import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ColorPickerInput from './atoms/ColorPicker';
import useStylesStore from '../stores/styles';
import TextSettings from './TextSettings';

const useStyles = makeStyles({});

function TextAreaSettings({ styleId }) {
  const { styles, updateStyle } = useStylesStore(state => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));
  const onChange = subStyle => updateStyle({ styleId, ...subStyle });

  return (
    <div>
      <ColorPickerInput onChange={onChange} value={styles[styleId]} />
    </div>
  );
}
export default TextAreaSettings;
