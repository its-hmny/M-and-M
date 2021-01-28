import React from 'react';

import { Typography } from '@material-ui/core';
import TextColorPicker from './atoms/TextColorPicker';
import BackgroundColorPicker from './atoms/BackgroundColorPicker';
import useStylesStore from '../stores/styles';

function AudioPlayerSettings({ styleId }) {
  const { styles, updateStyle } = useStylesStore(state => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));
  const onChange = subStyle => updateStyle({ styleId, ...subStyle });
  const onChangeButton = subStyle =>
    updateStyle(
      {
        styleId: 'PlayButton',
        ...subStyle,
      },
      styleId
    );
  const onChangeProgressBar = subStyle =>
    updateStyle(
      {
        styleId: 'ProgressBar',
        ...subStyle,
      },
      styleId
    );

  return (
    <div>
      <Typography variant="h4">Component</Typography>
      <TextColorPicker onChange={onChange} value={styles[styleId]} />
      <BackgroundColorPicker onChange={onChange} value={styles[styleId]} />
      <Typography variant="h4">Play Button</Typography>
      <BackgroundColorPicker
        onChange={onChangeButton}
        value={styles[styleId]['PlayButton']}
      />
      <Typography variant="h4">Progressbar</Typography>
      <BackgroundColorPicker
        onChange={onChangeProgressBar}
        value={styles[styleId]['ProgressBar']}
      />
    </div>
  );
}
export default AudioPlayerSettings;
