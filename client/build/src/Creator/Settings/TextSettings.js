import React from '../../../web_modules/react.js';
import FontFamily from './atoms/FontFamily.js';
import TextColorPicker from './atoms/TextColorPicker.js';
import FontSize from './atoms/FontSize.js';
import TextFormat from './atoms/TextFormat.js';
import TextAlignment from './atoms/TextAlignment.js';
import useStylesStore from '../stores/styles.js';

function TextSettings({ styleId }) {
  const { styles, updateStyle } = useStylesStore(state => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));

  const onChange = subStyle =>
    updateStyle({
      styleId,
      ...subStyle,
    });

  return React.createElement(
    'div',
    null,
    React.createElement(FontFamily, {
      onChange: onChange,
      value: styles[styleId],
    }),
    React.createElement(FontSize, {
      onChange: onChange,
      value: styles[styleId],
    }),
    React.createElement(TextColorPicker, {
      onChange: onChange,
      value: styles[styleId],
    }),
    React.createElement(TextFormat, {
      onChange: onChange,
      value: styles[styleId],
    }),
    React.createElement(TextAlignment, {
      onChange: onChange,
      value: styles[styleId],
    })
  );
}

export default TextSettings;
