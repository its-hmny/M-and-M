import React, { useContext, useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import EditorContext from '../context/EditorContext';


const ControlledSelect = props => {
  const { classNames } = props;
  const { story } = useContext(EditorContext);
  const [selectValue, setSelectValue] = useState(undefined);

  const destinationOption = story.nodes.map(node => (
    <MenuItem key={node.id} value={node.id}>
      {node.name}
    </MenuItem>
  ));

  return (
    <div className={classNames.InspectorElement}>
      <FormControl className={classNames.FormControl}>
        <InputLabel>Destination</InputLabel>
        <Select value={selectValue} onChange={event => setSelectValue(event.target.value)} >
          {destinationOption}
        </Select>
      </FormControl>
    </div>
  );
};

export default ControlledSelect;