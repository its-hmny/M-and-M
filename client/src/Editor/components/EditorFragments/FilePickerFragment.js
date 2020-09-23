import React from 'react';
import { Button } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';

// TODO find a way to implement server upload and make the image a static resource
const FilePickerFragment = props => {
  const { classNames, path, fragmentSpecificProps } = props;
  const { valToChange, acceptedFileType, buttonLabel } = fragmentSpecificProps;
  const { getFromPath, setPathToValue } = useEditor();

  return (
    <div className={classNames.InspectorElement}>
      <label htmlFor="upload-res">
        <input
          style={{ display: 'none' }}
          id="upload-res"
          type="file"
          accept={acceptedFileType}
          onChange={event => console.log(event.target.files[0])}
        />

        <Button color="primary" variant="contained" component="span">
          {buttonLabel}
        </Button>
      </label>
    </div>
  );
};

export default FilePickerFragment;
