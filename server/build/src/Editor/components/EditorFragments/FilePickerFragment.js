import React, { useState, useMemo } from '../../../../web_modules/react.js';
import {
  Button,
  Typography,
} from '../../../../web_modules/@material-ui/core.js';
import shortid from '../../../../web_modules/shortid.js';
import { useEditor } from '../../context/EditorContext.js';
import axios from '../../../common/shared.js';
import { SERVER_URL } from '../../../common/constants.js';

const FilePickerFragment = (props) => {
  const { classNames, path, fragmentSpecificProps } = props;

  const { valToChange, acceptedFileType, buttonLabel } = fragmentSpecificProps;

  const { setPathToValue, getFromPath } = useEditor();

  const [uploadOutcome, setOutcome] = useState('');

  const inputId = useMemo(() => shortid.generate(), []);

  const loadToServer = (toUpload) => {
    if (!toUpload) return;

    const formData = new FormData();

    formData.append('file', toUpload);

    const oldResourceId = getFromPath(path)
      [valToChange].split('/')
      .slice(-1)[0];

    axios
      .delete(`resources/${oldResourceId}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    axios
      .put('resources/', formData, {
        headers: {
          'Content-Type': toUpload.type,
        },
      })
      .then((response) => {
        setPathToValue(
          path,
          valToChange,
          `${SERVER_URL}/resources/${response.data.uuid}`,
        );
        setOutcome('File uploaded successfully!');
      })
      .catch((error) => {
        console.log(error.data);
        setOutcome('Error occured while loading!');
      });
  };

  return React.createElement(
    'div',
    {
      className: classNames.InspectorElement,
    },
    React.createElement(
      'label',
      {
        htmlFor: inputId,
      },
      React.createElement('input', {
        style: {
          display: 'none',
        },
        id: inputId,
        type: 'file',
        accept: acceptedFileType,
        onChange: (evt) => loadToServer(evt.target.files[0]),
      }),
      React.createElement(
        Button,
        {
          color: 'primary',
          variant: 'contained',
          component: 'span',
        },
        buttonLabel,
      ),
    ),
    React.createElement(
      Typography,
      {
        variant: 'subtitle1',
      },
      uploadOutcome,
    ),
  );
};

export default FilePickerFragment;
