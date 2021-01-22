import React from '../../../web_modules/react.js';
import BackgroundColorPicker from './atoms/BackgroundColorPicker.js';
import useStylesStore from '../stores/styles.js';
import Slider from '../../../web_modules/@material-ui/core/Slider.js';
import Grid from '../../../web_modules/@material-ui/core/Grid.js';
import Typography from '../../../web_modules/@material-ui/core/Typography.js';

const removePercent = value => Number(value.replace('%', ''));

const SpacerSettings = ({ styleId }) => {
  const { styles, updateStyle } = useStylesStore(state => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));

  const onChange = subStyle =>
    updateStyle({
      styleId,
      ...subStyle,
    });

  const onWidthChange = (_, newWidth) => {
    updateStyle({
      styleId,
      width: `${newWidth}%`,
    });
  };

  const onHeightChange = (_, newHeight) => {
    updateStyle({
      styleId,
      height: `${newHeight}%`,
    });
  };

  return React.createElement(
    'div',
    null,
    React.createElement(BackgroundColorPicker, {
      onChange: onChange,
      value: styles[styleId],
    }),
    React.createElement(
      'div',
      null,
      React.createElement(
        Typography,
        {
          id: 'height-slider',
          gutterBottom: true,
        },
        'Height'
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
            xs: true,
          },
          React.createElement(Slider, {
            value: removePercent(styles[styleId].height),
            onChange: onHeightChange,
            getAriaValueText: value => `${value}%`,
            'aria-labelledby': 'height-slider',
          })
        )
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement(
        Typography,
        {
          id: 'width-slider',
          gutterBottom: true,
        },
        'Width'
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
            xs: true,
          },
          React.createElement(Slider, {
            value: removePercent(styles[styleId].width),
            onChange: onWidthChange,
            getAriaValueText: value => `${value}%`,
            'aria-labelledby': 'width-slider',
          })
        )
      )
    )
  );
};

export default SpacerSettings;
