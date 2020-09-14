import React, { useContext } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import EditorContext from '../../context/EditorContext';

const CustomSelect = props => {
  const { classNames, path } = props;
  const { story, getFromPath, setPathToValue } = useContext(EditorContext);

  const destinationOption = story.nodes.map(node => (
    <MenuItem key={node.id} value={node.id}>
      {node.label}
    </MenuItem>
  ));

  return (
    <div className={classNames.InspectorElement}>
      <FormControl className={classNames.FormControl}>
        <InputLabel>Destination</InputLabel>
        <Select value={getFromPath(path).to} onChange={event => setPathToValue(path, 'to', event.target.value)}>
          {destinationOption}
          <MenuItem key={story.nodes.lenght} value={undefined}>
            Blank
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelect;
