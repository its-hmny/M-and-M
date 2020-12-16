import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';

const SelectFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const { specificPath, valToChange, label, data, dataName } = fragmentSpecificProps;
  const { story, getFromPath, setPathToValue } = useEditor();
  path = path || [];
  const completePath = specificPath ? [...path, ...specificPath] : [...path];
  var items = [];
  const menuItems = story.nodes.map(node => {
    if (!items.includes(node[data])) {
      items.push(node[data]);
      return (
        <MenuItem key={node[data]} value={node[data]}>
          {node[dataName]}
        </MenuItem>
      );
    }
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
          <MenuItem key={story.nodes.length} value="">
            {' '}
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectFragment;
