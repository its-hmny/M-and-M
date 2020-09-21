import React, { useContext } from 'react';
import { Typography, Button } from '@material-ui/core';
import EditorContext from '../../context/EditorContext';

// TODO find a way to implement server upload and make the image a static resource
const FilePickerFragment = props => {
  const { classNames, path, fragmentSpecificProps } = props;
  const {} = fragmentSpecificProps;
  const { getFromPath, setPathToValue } = useContext(EditorContext);

  return (
    <div className={classNames.InspectorElement}>
      <label htmlFor="upload-photo">
        <input
          style={{ display: 'none' }}
          id="upload-photo"
          type="file"
          accept="image/*"
          onChange={event => console.log(event.target.files[0])}
        />

        <Button color="primary" variant="contained" component="span">
          Upload local image
        </Button>
      </label>
    </div>
  );
};

export default FilePickerFragment;
