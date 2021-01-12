import React from '../../../../web_modules/react.js';
import { Typography } from '../../../../web_modules/@material-ui/core.js';
import { useEditor } from '../../context/EditorContext.js';

const ColorPickerFragment = (props) => {
    const { classNames, path, fragmentSpecificProps } = props;

    const { valToChange } = fragmentSpecificProps;

    const { getFromPath, setPathToValue } = useEditor(); // If undefined then it defaults to orange

    const colorValue = getFromPath(path || [])[valToChange] || '#eb8231';

    return React.createElement(
        'div',
        {
            className: classNames.InspectorElement,
        },
        React.createElement(
            Typography,
            {
                variant: 'caption',
                className: classNames.colorLabel,
                htmlFor: 'colorpicker',
            },
            'Color:',
        ),
        React.createElement('input', {
            className: classNames.colorButton,
            type: 'color',
            value: colorValue,
            onChange: (event) =>
                setPathToValue(path || [], valToChange, event.target.value),
        }),
    );
};

export default ColorPickerFragment;
