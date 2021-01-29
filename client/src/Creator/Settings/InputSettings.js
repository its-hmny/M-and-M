import React from 'react';

import TextColorPicker from './atoms/TextColorPicker';
import BackgroundColorPicker from './atoms/BackgroundColorPicker';
import useStylesStore from '../stores/styles';
import { Typography } from '@material-ui/core';

function InputSettings({ styleId }) {
  const { styles, updateStyle } = useStylesStore(state => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));
  const onChange = subStyle => updateStyle({ styleId, ...subStyle });
  const onChangeSub = (subStyle, innerId) =>
    updateStyle(
      {
        styleId: innerId,
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
      <TextColorPicker
        onChange={subStyle => onChangeSub(subStyle, 'Button')}
        value={styles[styleId]['Button']}
      />
      <BackgroundColorPicker
        onChange={subStyle => onChangeSub(subStyle, 'Button')}
        value={styles[styleId]['Button']}
      />
    </div>
  );
}
export default InputSettings;
