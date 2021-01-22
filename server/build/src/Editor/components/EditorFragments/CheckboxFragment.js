import React from '../../../../web_modules/react.js';
import { useEditor } from '../../context/EditorContext.js';
import {
  Checkbox,
  FormControlLabel,
} from '../../../../web_modules/@material-ui/core.js';
/*
  truthValues = [TrueValue, FalseValue]
*/

const CheckboxFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const {
    pathAlternative,
    valToChange,
    label,
    onChange,
    truthValues,
  } = fragmentSpecificProps;

  const { getFromPath, setPathToValue } = useEditor();

  path = pathAlternative ? path.concat(pathAlternative || []) : path || [];

  const value = getFromPath(path)[valToChange];

  return React.createElement(FormControlLabel, {
    className: classNames.InspectorElement,
    control: React.createElement(Checkbox, {
      color: 'primary',
      checked: value === (truthValues !== undefined ? truthValues[0] : true),
    }),
    onChange: (event) =>
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
              : false,
          ),
    label: label,
  });
};

export default CheckboxFragment;
