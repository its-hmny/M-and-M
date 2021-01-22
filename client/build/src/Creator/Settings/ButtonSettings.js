import React from '../../../web_modules/react.js';
import TextColorPickerInput from './atoms/TextColorPicker.js';
import BackgroundColorPickerInput from './atoms/BackgroundColorPicker.js';
import useStylesStore from '../stores/styles.js';

function ButtonSettings({ componentId, styleId }) {
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
    React.createElement(TextColorPickerInput, {
      onChange: onChange,
      value: styles[styleId],
    }),
    React.createElement(BackgroundColorPickerInput, {
      onChange: onChange,
      value: styles[styleId],
    }),
  );
}

export default ButtonSettings;
