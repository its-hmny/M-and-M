import React from '../../../web_modules/react.js';
import TextColorPicker from './atoms/TextColorPicker.js';
import BackgroundColorPicker from './atoms/BackgroundColorPicker.js';
import useStylesStore from '../stores/styles.js';

function InputSettings({ styleId }) {
  const { styles, updateStyle } = useStylesStore((state) => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));

  const onChange = (subStyle) =>
    updateStyle({
      styleId,
      ...subStyle,
    });

  return React.createElement(
    'div',
    null,
    React.createElement(TextColorPicker, {
      onChange: onChange,
      value: styles[styleId],
    }),
    React.createElement(BackgroundColorPicker, {
      onChange: onChange,
      value: styles[styleId],
    }),
  );
}

export default InputSettings;
