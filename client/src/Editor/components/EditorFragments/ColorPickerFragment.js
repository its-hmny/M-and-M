import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';

const ColorPickerFragment = props => {
  const { classNames, path, fragmentSpecificProps } = props;
  const { valToChange } = fragmentSpecificProps;
  const { getFromPath, setPathToValue } = useEditor();
  // If undefined then it defaults to orange
  const colorValue = getFromPath(path || [])[valToChange] || '#eb8231';

  return (
    <div className={classNames.InspectorElement}>
      <Typography variant="caption" className={classNames.colorLabel} htmlFor="colorpicker">
        Color:
      </Typography>
      <input
        className={classNames.colorButton}
        type="color"
        value={colorValue}
        onChange={event => setPathToValue(path || [], valToChange, event.target.value)}
      />
    </div>
  );
};

export default ColorPickerFragment;
