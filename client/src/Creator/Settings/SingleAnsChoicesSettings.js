import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ColorPickerInput from './atoms/ColorPicker';
import useStylesStore from '../stores/styles';
import TextSettings from './TextSettings';

const useStyles = makeStyles({});

// Choices style object reference:
// {
//   Root: { /* root styles */ },
//   Radio: { /* styles applied to Radio components */ },
//   Button: { /* styles applied to submit component if present */}
// }

function ChoicesSettings({ styleId }) {
  const classes = useStyles();

  // Choices styles
  const { styles, updateStyle } = useStylesStore(state => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));
  const onChange = (subStyle, innerId) =>
    updateStyle(
      {
        styleId: innerId,
        ...subStyle,
      },
      styleId
    );

  return (
    <div>
      {/* edit root styles */}
      <ColorPickerInput
        onChange={subStyle => onChange(subStyle, 'Root')}
        value={styles[styleId]['Root']}
      />
      <p>edit radio settings</p>
      <ColorPickerInput
        onChange={subStyle => onChange(subStyle, 'Radio')}
        value={styles[styleId]['Radio']}
      />
      <p>edit submit settings</p>
      <ColorPickerInput
        onChange={subStyle => onChange(subStyle, 'Button')}
        value={styles[styleId]['Button']}
      />
    </div>
  );
}

export default ChoicesSettings;