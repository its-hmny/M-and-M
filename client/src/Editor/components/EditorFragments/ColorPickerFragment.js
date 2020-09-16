import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import EditorContext from '../../context/EditorContext';

const ColorPickerFragment = props => {
  const { classNames, path, keyToUpdate } = props;
  const { getFromPath, setPathToValue } = useContext(EditorContext);
  // If undefined then it defaults to orange
  const colorValue = getFromPath(path || [])[keyToUpdate] || '#eb8231';

  return (
    <div className={classNames.InspectorElement}>
      <Typography variant="caption" className={classNames.colorLabel} htmlFor="colorpicker">
        Color:
      </Typography>
      <input
        className={classNames.colorButton}
        type="color"
        value={colorValue}
        onChange={event => setPathToValue(path || [], keyToUpdate, event.target.value)}
      />
    </div>
  );
};

export default ColorPickerFragment;
