import React from '../../../web_modules/react.js';
import { Typography } from '../../../web_modules/@material-ui/core.js';
import BackgroundColorPicker from './atoms/BackgroundColorPicker.js';
import useStylesStore from '../stores/styles.js';

function AudioPlayerSettings({ styleId }) {
  const { styles, updateStyle } = useStylesStore((state) => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));

  const onChange = (subStyle) =>
    updateStyle({
      styleId,
      ...subStyle,
    });

  const onChangeSub = (subStyle, innerId) =>
    updateStyle(
      {
        styleId: innerId,
        ...subStyle,
      },
      styleId,
    );

  return React.createElement(
    'div',
    null,
    React.createElement(
      Typography,
      {
        variant: 'h4',
      },
      'Component',
    ),
    React.createElement(BackgroundColorPicker, {
      onChange: onChange,
      value: styles[styleId],
    }),
    React.createElement(
      Typography,
      {
        variant: 'h4',
      },
      'Play Button',
    ),
    React.createElement(BackgroundColorPicker, {
      onChange: (subStyle) => onChangeSub(subStyle, 'PlayButton'),
      value: styles[styleId]['PlayButton'],
    }),
    React.createElement(
      Typography,
      {
        variant: 'h4',
      },
      'Progressbar',
    ),
    React.createElement(BackgroundColorPicker, {
      onChange: (subStyle) => onChangeSub(subStyle, 'ProgressBar'),
      value: styles[styleId]['ProgressBar'],
    }),
  );
}

export default AudioPlayerSettings;
