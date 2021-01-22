import React from '../../../../web_modules/react.js';
import {
  ToggleButton,
  ToggleButtonGroup,
} from '../../../../web_modules/@material-ui/lab.js';
import {
  FormatAlignLeft as FormatAlignLeftIcon,
  FormatAlignRight as FormatAlignRightIcon,
  FormatAlignCenter as FormatAlignCenterIcon,
  FormatAlignJustify as FormatAlignJustifyIcon,
} from '../../../../web_modules/@material-ui/icons.js';

const TextAlignment = ({ value, onChange }) => {
  return React.createElement(
    ToggleButtonGroup,
    {
      exclusive: true,
      value: value.textAlign,
      defaultValue: 'left',
      onChange: (_, newValue) =>
        onChange({
          textAlign: newValue,
        }),
      'aria-label': 'text alignment',
    },
    React.createElement(
      ToggleButton,
      {
        value: 'left',
        'aria-label': 'left',
      },
      React.createElement(FormatAlignLeftIcon, null)
    ),
    React.createElement(
      ToggleButton,
      {
        value: 'right',
        'aria-label': 'right',
      },
      React.createElement(FormatAlignRightIcon, null)
    ),
    React.createElement(
      ToggleButton,
      {
        value: 'center',
        'aria-label': 'center',
      },
      React.createElement(FormatAlignCenterIcon, null)
    ),
    React.createElement(
      ToggleButton,
      {
        value: 'justify',
        'aria-label': 'justify',
      },
      React.createElement(FormatAlignJustifyIcon, null)
    )
  );
};

export default TextAlignment;
