import React, { useContext } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import EditorContext from '../context/EditorContext';


const ControlledSelect = ({ classNames, pathToFragment }) => {
  const { story, getFromPath, setPathToValue } = useContext(EditorContext);

  const destinationOption = story.nodes.map(node => (
    <MenuItem key={node.id} value={node.id}>
      {node.name}
    </MenuItem>
  ));

  return (
    <div className={classNames.InspectorElement}>
      <FormControl className={classNames.FormControl}>
        <InputLabel>Destination</InputLabel>
        <Select value={getFromPath(pathToFragment).to} onChange={event => setPathToValue(pathToFragment, "to", event.target.value)} >
          {destinationOption}
          <MenuItem key={story.nodes.lenght} value={undefined}>
            Blank
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ControlledSelect;