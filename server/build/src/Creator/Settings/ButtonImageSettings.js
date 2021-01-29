import React from '../../../web_modules/react.js';
import { makeStyles } from '../../../web_modules/@material-ui/core/styles.js';
import Slider from '../../../web_modules/@material-ui/core/Slider.js';
import Grid from '../../../web_modules/@material-ui/core/Grid.js';
import Typography from '../../../web_modules/@material-ui/core/Typography.js';
import { Height as HeightIcon } from '../../../web_modules/@material-ui/icons.js';
import useStylesStore from '../stores/styles.js';

const useStyles = makeStyles({
  widthIcon: {
    transform: 'rotate(90deg)',
  },
});

const removePercent = (value) => Number(value.replace('%', ''));

function ButtonImageSettings({ styleId }) {
  const { widthIcon } = useStyles();

  const { styles, updateStyle } = useStylesStore((state) => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));

  const onWidthChange = (_, newWidth) => {
    updateStyle({
      styleId,
      width: `${newWidth}%`,
    });
  };

  return React.createElement(
    'div',
    null,
    React.createElement(
      Typography,
      {
        id: 'width-slider',
        gutterBottom: true,
      },
      'Width',
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
          value: removePercent(styles[styleId].width),
          onChange: onWidthChange,
          getAriaValueText: (value) => `${value}%`,
          'aria-labelledby': 'width-slider',
        }),
      ),
    ),
  );
}

export default ButtonImageSettings;
