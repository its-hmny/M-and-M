import React, { useContext } from 'react';
import { Typography, Button } from '@material-ui/core';
import EditorContext from '../../context/EditorContext';

const FilePickerFragment = props => {
  const { classNames, path, keyToUpdate } = props;
  const { getFromPath, setPathToValue } = useContext(EditorContext);

  return (
    <div className={classNames.InspectorElement}>
      <label htmlFor="upload-photo">
        <input
          style={{ display: 'none' }}
          id="upload-photo"
          type="file"
          accept="image/*"
          onChange={event => console.log(event.target.files)}
        />

        <Button color="primary" variant="contained" component="span">
          Upload local image
        </Button>
      </label>
    </div>
  );
};

export default FilePickerFragment;
