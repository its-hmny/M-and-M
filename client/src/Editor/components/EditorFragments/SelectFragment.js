import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';

const SelectFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const { pathAlternative, valToChange, label, data, dataName } = fragmentSpecificProps;
  const { story, getFromPath, setPathToValue } = useEditor();
  path = path || [];
  const completePath = pathAlternative ? [...path, ...pathAlternative] : [...path];
  let items = [];
  const menuItems = story.nodes.map(node => {
    if (node[data] && !items.includes(node[data])) {
      items.push(node[data]);
      return (
        <MenuItem key={node[data]} value={node[data]}>
          {node[dataName]}
        </MenuItem>
      );
    }

    return null;
  });

  return (
    <div className={classNames.InspectorElement}>
      <FormControl className={classNames.FormControl}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={getFromPath(completePath)[valToChange] || ''}
          onChange={event =>
            setPathToValue(completePath, valToChange, event.target.value)
          }
        >
          {menuItems}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectFragment;
