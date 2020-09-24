import React from 'react';
import { Button } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';

// TODO find a way to implement server upload and make the image a static resource
const FilePickerFragment = props => {
  const { classNames, path, fragmentSpecificProps } = props;
  const { valToChange, acceptedFileType, buttonLabel } = fragmentSpecificProps;
  const { setPathToValue } = useEditor();

  // Clearly this has to be changed
  const loadToServer = toUpload => `file://C:/Users/eneag/Pictures/Wallpapers/${toUpload.name}`;

  return (
    <div className={classNames.InspectorElement}>
      <label htmlFor="upload-res">
        <input
          style={{ display: 'none' }}
          id="upload-res"
          type="file"
          accept={acceptedFileType}
          onChange={event => setPathToValue(path, valToChange, loadToServer(event.target.files[0]))}
        />

        <Button color="primary" variant="contained" component="span">
          { buttonLabel }
        </Button>
      </label>
    </div>
  );
};

export default FilePickerFragment;
