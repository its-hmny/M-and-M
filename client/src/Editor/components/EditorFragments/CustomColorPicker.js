import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import EditorContext from '../../context/EditorContext';

const CustomColorPicker = props => {
  const { classNames, path } = props;
  const { getFromPath, setPathToValue } = useContext(EditorContext);
  // If undefined then it defaults to orange
  const colorValue = getFromPath(path || [])[path ? 'bho' : 'color'] || '#eb8231';

  return (
    <div>
      <Typography variant="caption" className={classNames.colorLabel} htmlFor="colorpicker">
        Color:
      </Typography>
      <input
        className={classNames.colorButton}
        id="colorpicker"
        type="color"
        value={colorValue}
        onChange={event => setPathToValue(path || [], path ? 'bho' : 'color', event.target.value)}
      />
    </div>
  );
};

export default CustomColorPicker;
