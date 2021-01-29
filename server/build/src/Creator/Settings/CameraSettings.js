import React from '../../../web_modules/react.js';
import { Typography } from '../../../web_modules/@material-ui/core.js';
import TextColorPicker from './atoms/TextColorPicker.js';
import BackgroundColorPicker from './atoms/BackgroundColorPicker.js';
import useStylesStore from '../stores/styles.js'; // Choices style object reference:
// {
//   Root: { /* root styles */ },
//   Button: { /* styles applied to Button */ },
// }

const CameraSettings = ({ styleId }) => {
  const { styles, updateStyle } = useStylesStore((state) => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));

  const onChange = (subStyle, innerId) =>
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
      'Camera Button',
    ),
    React.createElement(TextColorPicker, {
      onChange: (subStyle) => onChange(subStyle, 'CameraButton'),
      value: styles[styleId]['CameraButton'],
    }),
    React.createElement(BackgroundColorPicker, {
      onChange: (subStyle) => onChange(subStyle, 'CameraButton'),
      value: styles[styleId]['CameraButton'],
    }),
    React.createElement(
      Typography,
      {
        variant: 'h4',
      },
      'Submit Button',
    ),
    React.createElement(TextColorPicker, {
      onChange: (subStyle) => onChange(subStyle, 'Button'),
      value: styles[styleId]['Button'],
    }),
    React.createElement(BackgroundColorPicker, {
      onChange: (subStyle) => onChange(subStyle, 'Button'),
      value: styles[styleId]['Button'],
    }),
  );
};

export default CameraSettings;
