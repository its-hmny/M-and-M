import React, { useContext } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';

const SelectFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const { valToChange } = fragmentSpecificProps;
  const { story, getFromPath, setPathToValue } = useEditor();

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
          value={getFromPath(path)[valToChange]}
          onChange={event => setPathToValue(path, valToChange, event.target.value)}
        >
          {destinationOption}
          <MenuItem key={story.nodes.length} value=""></MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectFragment;
