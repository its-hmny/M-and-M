import React from '../../../web_modules/react.js';
import TextColorPicker from './atoms/TextColorPicker.js';
import BackgroundColorPicker from './atoms/BackgroundColorPicker.js';
import useStylesStore from '../stores/styles.js';
import { Typography } from '../../../web_modules/@material-ui/core.js';

function TextAreaSettings({ styleId }) {
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
      'Label',
    ),
    React.createElement(TextColorPicker, {
      onChange: (subStyle) => onChangeSub(subStyle, 'Label'),
      value: styles[styleId]['Label'],
    }),
    React.createElement(BackgroundColorPicker, {
      onChange: (subStyle) => onChangeSub(subStyle, 'Label'),
      value: styles[styleId]['Label'],
    }),
    React.createElement(
      Typography,
      {
        variant: 'h4',
      },
      'TextArea',
    ),
    React.createElement(TextColorPicker, {
      onChange: onChange,
      value: styles[styleId],
    }),
    React.createElement(BackgroundColorPicker, {
      onChange: onChange,
      value: styles[styleId],
    }),
    React.createElement(
      Typography,
      {
        variant: 'h4',
      },
      'Button',
    ),
    React.createElement(TextColorPicker, {
      onChange: (subStyle) => onChangeSub(subStyle, 'Button'),
      value: styles[styleId]['Button'],
    }),
    React.createElement(BackgroundColorPicker, {
      onChange: (subStyle) => onChangeSub(subStyle, 'Button'),
      value: styles[styleId]['Button'],
    }),
  );
}

export default TextAreaSettings;
