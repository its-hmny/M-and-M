import React from 'react';
import { useEditor } from '../../context/EditorContext';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const CheckboxFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const { pathAlternative, valToChange, label } = fragmentSpecificProps;
  const { getFromPath, setPathToValue } = useEditor();
  path = pathAlternative ? path.concat(pathAlternative || []) : path;
  const value = getFromPath(path || [])[valToChange];

  return (
    <FormControlLabel
      className={classNames.InspectorElement}
      control={<Checkbox color="primary" checked={value === '[CORRECT]'} />}
      onChange={event =>
        setPathToValue(
          path || [],
          valToChange,
          event.target.checked ? '[CORRECT]' : '[WRONG]'
        )
      }
      label={label}
    />
  );
};

export default CheckboxFragment;
