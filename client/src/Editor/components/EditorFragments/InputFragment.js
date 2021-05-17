import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';

const useStyles = makeStyles(theme => ({
  root: {
    width: '25ch',
  },
  inputRoot: {
    paddingRight: theme.spacing(2),
  },
}));

const InputFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const { root, inputRoot } = useStyles();
  const { valToChange, label, onChange, pointsPath, pointsValToChange } =
    fragmentSpecificProps;
  const { getFromPath, setPathToValue } = useEditor();
  path = path || [];
  const value = getFromPath(path)[valToChange];
  const PointsCompletePath = path.concat(pointsPath);
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
      setPathToValue(PointsCompletePath, story, parseInt(value));
    } else if (value === '-') {
      setPathToValue(PointsCompletePath, story, 0);
    }
  };

  return (
    <div>
      <TextField
        className={classNames.InspectorElement}
        classes={{ root }}
        InputProps={{
          className: inputRoot,
        }}
        label={label}
        multiline={true}
        rowsMax={3}
        value={value}
        variant="outlined"
        size="small"
        onChange={event =>
          onChange !== undefined
            ? onChange(event)
            : setPathToValue(path, valToChange, event.target.value)
        }
      />
      <TextField
        className={classNames.InspectorElement}
        classes={{ root }}
        InputProps={{
          className: inputRoot,
        }}
        label={'Answer Points'}
        value={pointsValue}
        variant="outlined"
        size="small"
        onChange={event => setNumberField(event.target.value, pointsValToChange)}
      />
    </div>
  );
};

export default InputFragment;
