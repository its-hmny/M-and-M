import React from '../../../../web_modules/react.js';
import { useEditor } from '../../context/EditorContext.js';
import {
    Radio,
    FormControlLabel,
} from '../../../../web_modules/@material-ui/core.js';
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

    const { setPathToValue } = useEditor();

    path = pathAlternative ? path.concat(pathAlternative || []) : path;
    return React.createElement(FormControlLabel, {
        className: classNames.InspectorElement,
        control: React.createElement(Radio, {
            name: name,
            value: index,
            checked: index === correctAnswerValue,
        }),
        onChange: (event) =>
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
                          : false,
                  ),
        label: label,
    });
};

export default RadioFragment;
