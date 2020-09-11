import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import {
  FormatAlignLeft as FormatAlignLeftIcon,
  FormatAlignRight as FormatAlignRightIcon,
  FormatAlignCenter as FormatAlignCenterIcon,
  FormatAlignJustify as FormatAlignJustifyIcon,
} from '@material-ui/icons';

const TextAlignment = ({ value, onChange }) => {
  return (
    <ToggleButtonGroup
      exclusive
      value={value.textAlign}
      defaultValue="left"
      onChange={(_, newValue) => onChange({ textAlign: newValue })}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="center">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justify">
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TextAlignment;
