import React from 'react';
import { useEditor } from '../../context/EditorContext';
import { Checkbox, FormControlLabel } from '@material-ui/core';

/*
  truthValues = [TrueValue, FalseValue]
*/

const CheckboxFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const { pathAlternative, valToChange, label, onChange, truthValues } =
    fragmentSpecificProps;
  const { getFromPath, setPathToValue } = useEditor();
  path = pathAlternative ? path.concat(pathAlternative || []) : path || [];
  const value = getFromPath(path)[valToChange];

  return (
    <FormControlLabel
      className={classNames.InspectorElement}
      control={
        <Checkbox
          color="primary"
          checked={value === (truthValues !== undefined ? truthValues[0] : true)}
        />
      }
      onChange={event =>
        onChange !== undefined
          ? onChange(event)
          : setPathToValue(
              path,
              valToChange,
              event.target.checked
                ? truthValues !== undefined
                  ? truthValues[0]
                  : true
                : truthValues !== undefined
                ? truthValues[1]
                : false
            )
      }
      label={label}
    />
  );
};

export default CheckboxFragment;
