import React from 'react';

import TextColorPicker from './atoms/TextColorPicker';
import BackgroundColorPicker from './atoms/BackgroundColorPicker';
import useStylesStore from '../stores/styles';
import { Typography } from '@material-ui/core';
function TextAreaSettings({ styleId }) {
  const { styles, updateStyle } = useStylesStore(state => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));
  const onChange = subStyle => updateStyle({ styleId, ...subStyle });
  const onChangeButton = subStyle =>
    updateStyle(
      {
        styleId: 'Button',
        ...subStyle,
      },
      styleId
    );
  return (
    <div>
      <Typography variant="h4">Component</Typography>
      <TextColorPicker onChange={onChange} value={styles[styleId]} />
      <BackgroundColorPicker onChange={onChange} value={styles[styleId]} />
      <Typography variant="h4">Button</Typography>
      <TextColorPicker onChange={onChangeButton} value={styles[styleId]['Button']} />
      <BackgroundColorPicker
        onChange={onChangeButton}
        value={styles[styleId]['Button']}
      />
    </div>
  );
}
export default TextAreaSettings;
