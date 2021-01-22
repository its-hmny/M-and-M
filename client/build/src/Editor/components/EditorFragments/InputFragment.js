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

const InputFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const { root, inputRoot } = useStyles();

  const {
    valToChange,
    label,
    onChange,
    pointsPath,
    pointsValToChange,
  } = fragmentSpecificProps;

  const { getFromPath, setPathToValue } = useEditor();

  const value = getFromPath(path || [])[valToChange];

  const PointsCompletePath = path.concat(pointsPath) || [];

  const pointsValue = getFromPath(PointsCompletePath)[pointsValToChange];

  const setNumberField = (value, story) => {
    if (value === '') {
      value = '0';
    }

    let minusIndex = value.lastIndexOf('-');

    if (minusIndex > 0) {
      value = value.replace('-', '');
      value = '-' + value;
    }

    if (!isNaN(value)) {
      setPathToValue(PointsCompletePath || [], story, parseInt(value));
    } else if (value === '-') {
      setPathToValue(PointsCompletePath || [], story, 0);
    }
  };

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
          : setPathToValue(path || [], valToChange, event.target.value),
    }),
    React.createElement(TextField, {
      className: classNames.InspectorElement,
      classes: {
        root,
      },
      InputProps: {
        className: inputRoot,
      },
      label: 'Answer Points',
      value: pointsValue,
      variant: 'outlined',
      size: 'small',
      onChange: (event) =>
        setNumberField(event.target.value, pointsValToChange),
    }),
  );
};

export default InputFragment;
