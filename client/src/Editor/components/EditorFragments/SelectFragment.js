import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';

const SelectFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const { specificPath, valToChange } = fragmentSpecificProps;
  const { story, getFromPath, setPathToValue } = useEditor();
  const completePath = [...path, ...specificPath];

  const destinationOption = story.nodes.map(node => (
    <MenuItem key={node.id} value={node.id}>
      {node.label}
    </MenuItem>
  ));

  return (
    <div className={classNames.InspectorElement}>
      <FormControl className={classNames.FormControl}>
        <InputLabel>Destination</InputLabel>
        <Select
          value={getFromPath(completePath)[valToChange]}
          onChange={event => setPathToValue(completePath, valToChange, event.target.value)}
        >
          {destinationOption}
          <MenuItem key={story.nodes.length} value="">Undefined</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectFragment;
