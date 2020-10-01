import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';
import axios from 'axios';

// TODO find a way to implement server upload and make the image a static resource
const FilePickerFragment = props => {
  const { classNames, path, fragmentSpecificProps } = props;
  const { valToChange, acceptedFileType, buttonLabel } = fragmentSpecificProps;
  const { setPathToValue, getFromPath } = useEditor();
  const [uploadOutcome, setOutcome] = useState("");

  // Clearly this has to be changed
  const loadToServer = toUpload => {
    const formData = new FormData();
    formData.append('file', toUpload);
    const oldResourceId = getFromPath(path, valToChange)[valToChange].split('/').slice(-1)[0];

    axios.delete(`http://localhost:8000/resources/${oldResourceId}`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));

    axios.put("http://localhost:8000/resources/", formData, { headers: { 'Content-Type': toUpload.type }})
      .then(response => {
        setPathToValue(path, valToChange, `http://localhost:8000/resources/${response.data.uuid}`);
        setOutcome("File uploaded successfully!");
      })
      .catch(error => {
        console.log(error.data);
        setOutcome("Error occured while loading!");
      });
  };

  return (
    <div className={classNames.InspectorElement}>
      <label htmlFor="upload-res">
        <input
          style={{ display: 'none' }}
          id="upload-res"
          type="file"
          name="file_upload"
          accept={acceptedFileType}
          onChange={event => loadToServer(event.target.files[0])}
        />

        <Button color="primary" variant="contained" component="span">
          { buttonLabel }
        </Button>
      </label>
      <Typography variant="subtitle1">{uploadOutcome}</Typography>
    </div>
  );
};

export default FilePickerFragment;
