import React from 'react';
import { useEditor } from '../../context/EditorContext';
import { Radio, FormControlLabel } from '@material-ui/core';

/*
  truthValues = [TrueValue, FalseValue]
*/

const RadioFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const {
    pathAlternative,
    valToChange,
    label,
    onChange,
    truthValues,
    name,
    correctAnswerValue,
    index,
  } = fragmentSpecificProps;
  console.log(fragmentSpecificProps);
  const { getFromPath, setPathToValue } = useEditor();
  path = pathAlternative ? path.concat(pathAlternative || []) : path;
  const value = getFromPath(path || [])[valToChange];
  console.log(value);
  return (
    <FormControlLabel
      className={classNames.InspectorElement}
      control={<Radio name={name} value={index} checked={index === correctAnswerValue} />}
      onChange={event =>
        onChange !== undefined
          ? onChange(event, index, path || [], truthValues)
          : setPathToValue(
              path || [],
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

export default RadioFragment;
