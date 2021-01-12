import React from '../../../../web_modules/react.js';
import {
    TextField,
    makeStyles,
} from '../../../../web_modules/@material-ui/core.js';
import { useEditor } from '../../context/EditorContext.js';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '25ch',
    },
    inputRoot: {
        paddingRight: theme.spacing(2),
    },
}));

const TextFieldFragment = ({ classNames, path, fragmentSpecificProps }) => {
    const { root, inputRoot } = useStyles();

    const {
        pathAlternative,
        valToChange,
        label,
        onChange,
    } = fragmentSpecificProps;

    const { getFromPath, setPathToValue } = useEditor(); //Additional field to modify objects or array

    path = pathAlternative ? path.concat(pathAlternative || []) : path;

    const value = getFromPath(path || [])[valToChange];

    return React.createElement(
        'div',
        null,
        React.createElement(TextField, {
            className: classNames.InspectorElement,
            classes: {
                root,
            },
            InputProps: {
                className: inputRoot,
            },
            label: label,
            multiline: true,
            rowsMax: 3,
            value: value,
            variant: 'outlined',
            size: 'small',
            onChange: (event) =>
                onChange !== undefined
                    ? onChange(event)
                    : setPathToValue(
                          path || [],
                          valToChange,
                          event.target.value,
                      ),
        }),
    );
};

export default TextFieldFragment;
