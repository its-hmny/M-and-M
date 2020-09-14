import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import {
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,
  FormatUnderlined as FormatUnderlinedIcon,
} from '@material-ui/icons';

const props = {
  fontWeight: 'bold',
  fontStyle: 'italic',
  textDecoration: 'underline',
};

function TextFormat({ onChange, value }) {
  const [formats, setFormats] = useState(() => {
    Object.keys(props).forEach(prop => {
      if (value[prop]) formats.push(value[prop]);
    });
  });

  const handleFormat = (_, newFormats) => {
    setFormats(newFormats);
    Object.entries(props).map(([prop, value]) =>
      onChange({ [prop]: newFormats.includes(value) ? value : undefined })
    );
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="font decorations"
    >
      <ToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value="underline" aria-label="underline">
        <FormatUnderlinedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default TextFormat;
