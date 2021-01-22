import React from '../../../web_modules/react.js';
import FontFamily from './atoms/FontFamily.js';
import TextColorPicker from './atoms/TextColorPicker.js';
import FontSize from './atoms/FontSize.js';
import TextFormat from './atoms/TextFormat.js';
import TextAlignment from './atoms/TextAlignment.js';
import useStylesStore from '../stores/styles.js';

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
    ); // sadly, we can't use two TextSettings, as it needs to handle nested styles, and it can't

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'div',
      null,
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
      'div',
      null,
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
