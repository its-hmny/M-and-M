import React from '../../../web_modules/react.js';
import { makeStyles } from '../../../web_modules/@material-ui/core/styles.js';
import TextColorPicker from './atoms/TextColorPicker.js';
import BackgroundColorPicker from './atoms/BackgroundColorPicker.js';
import useStylesStore from '../stores/styles.js';
import Slider from '../../../web_modules/@material-ui/core/Slider.js';
import Grid from '../../../web_modules/@material-ui/core/Grid.js';
import Typography from '../../../web_modules/@material-ui/core/Typography.js';
import { Height as HeightIcon } from '../../../web_modules/@material-ui/icons.js';

const useStyles = makeStyles({
  widthIcon: {
    transform: 'rotate(90deg)',
  },
});

const removePercent = (value) => Number(value.replace('%', '')); // Choices style object reference:
// {
//   Root: { /* root styles */ },
//   Checkbox: { /* styles applied to Checkbox components */},
//   Button: { /* styles applied to submit component if present */}
// }

function MultiAnsChoicesImagesSettings({ styleId }) {
  const { widthIcon } = useStyles(); // Choices styles

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

  const onWidthChange = (_, newWidth) => {
    updateStyle({
      styleId,
      Image: {
        height: `${newWidth}%`,
        width: `${newWidth}%`,
      },
    });
  };

  return React.createElement(
    'div',
    null,
    React.createElement('p', null, 'Edit Image settings'),
    React.createElement(
      Typography,
      {
        id: 'width-slider',
        gutterBottom: true,
      },
      'Width and Height',
    ),
    React.createElement(
      Grid,
      {
        container: true,
        spacing: 2,
      },
      React.createElement(
        Grid,
        {
          item: true,
        },
        React.createElement(HeightIcon, {
          className: widthIcon,
        }),
      ),
      React.createElement(
        Grid,
        {
          item: true,
          xs: true,
        },
        React.createElement(Slider, {
          value: removePercent(styles[styleId]['Image'].width),
          onChange: onWidthChange,
          getAriaValueText: (value) => `${value}%`,
          'aria-labelledby': 'width-slider',
        }),
      ),
    ),
    React.createElement('p', null, 'Edit Checkbox settings'),
    React.createElement(TextColorPicker, {
      onChange: (subStyle) => onChange(subStyle, 'Checkbox'),
      value: styles[styleId]['Checkbox'],
    }),
    React.createElement(BackgroundColorPicker, {
      onChange: (subStyle) => onChange(subStyle, 'Checkbox'),
      value: styles[styleId]['Checkbox'],
    }),
    React.createElement('p', null, 'Edit submit settings'),
    React.createElement(TextColorPicker, {
      onChange: (subStyle) => onChange(subStyle, 'Button'),
      value: styles[styleId]['Button'],
    }),
    React.createElement(BackgroundColorPicker, {
      onChange: (subStyle) => onChange(subStyle, 'Button'),
      value: styles[styleId]['Button'],
    }),
  );
}

export default MultiAnsChoicesImagesSettings;
