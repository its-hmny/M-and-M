import React from '../../../web_modules/react.js';
import FontFamily from './atoms/FontFamily.js';
import TextColorPicker from './atoms/TextColorPicker.js';
import FontSize from './atoms/FontSize.js';
import TextFormat from './atoms/TextFormat.js';
import TextAlignment from './atoms/TextAlignment.js';
import { Typography } from '../../../web_modules/@material-ui/core.js';
import useStylesStore from '../stores/styles.js';
import BackgroundColorPicker from './atoms/BackgroundColorPicker.js';
import { makeStyles } from '../../../web_modules/@material-ui/core/styles.js';

const useStyles = makeStyles(() => ({
  SettingElement: {
    marginTop: '15px',
  },
}));

const PointsSettings = ({ styleId }) => {
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

  const onChangeBackground = (subStyle) =>
    updateStyle({
      styleId,
      ...subStyle,
    });

  const classes = useStyles();

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Typography,
      {
        variant: 'h4',
      },
      'Component',
    ),
    React.createElement(BackgroundColorPicker, {
      onChange: onChangeBackground,
      value: styles[styleId],
    }),
    React.createElement(
      Typography,
      {
        variant: 'h4',
        className: classes.SettingElement,
      },
      'Points',
    ),
    React.createElement(
      'div',
      {
        className: classes.SettingElement,
      },
      React.createElement(FontFamily, {
        onChange: (subStyle) => onChange(subStyle, 'Points'),
        value: styles[styleId]['Points'],
      }),
      React.createElement(FontSize, {
        onChange: (subStyle) => onChange(subStyle, 'Points'),
        value: styles[styleId]['Points'],
      }),
      React.createElement(TextColorPicker, {
        onChange: (subStyle) => onChange(subStyle, 'Points'),
        value: styles[styleId]['Points'],
      }),
      React.createElement(TextFormat, {
        onChange: (subStyle) => onChange(subStyle, 'Points'),
        value: styles[styleId]['Points'],
      }),
      React.createElement(TextAlignment, {
        onChange: (subStyle) => onChange(subStyle, 'Points'),
        value: styles[styleId]['Points'],
      }),
    ),
    React.createElement(
      Typography,
      {
        variant: 'h4',
        className: classes.SettingElement,
      },
      'Message',
    ),
    React.createElement(
      'div',
      {
        className: classes.SettingElement,
      },
      React.createElement(FontFamily, {
        onChange: (subStyle) => onChange(subStyle, 'Text'),
        value: styles[styleId]['Text'],
      }),
      React.createElement(FontSize, {
        onChange: (subStyle) => onChange(subStyle, 'Text'),
        value: styles[styleId]['Text'],
      }),
      React.createElement(TextColorPicker, {
        onChange: (subStyle) => onChange(subStyle, 'Text'),
        value: styles[styleId]['Text'],
      }),
      React.createElement(TextFormat, {
        onChange: (subStyle) => onChange(subStyle, 'Text'),
        value: styles[styleId]['Text'],
      }),
      React.createElement(TextAlignment, {
        onChange: (subStyle) => onChange(subStyle, 'Text'),
        value: styles[styleId]['Text'],
      }),
    ),
  );
};

export default PointsSettings;
