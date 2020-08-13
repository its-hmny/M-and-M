import React from 'react';
import { TextField } from '@material-ui/core';

const ControlledTextField = props => {
  const { isMultiline, assignedClassName } = props;
  const [textState, setTextState] = React.useState(props.defaultValue);
 
  const handleChange = event => {
    setTextState(event.target.value);
  };

  return (
    <div className={assignedClassName}>
      <TextField label="Text" value={textState} multiline={isMultiline} onChange={handleChange} />
    </div>
  );
};


export default ControlledTextField;