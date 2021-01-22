/** @jsx jsx */
import { css, jsx } from '../../../web_modules/@emotion/core.js';
import { useState, useRef } from '../../../web_modules/react.js';
import { PhotoCamera } from '../../../web_modules/@material-ui/icons.js';
import Button from './Button.js';

const container = css`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const cameraButtonText = css`
  display: flex;
  align-items: center;

  & > svg:first-of-type {
    margin-right: 10px;
  }

  & > span:first-of-type {
    font-size: 20px;
    line-height: 1;
  }
`;

const Camera = ({ style, initialValue, onSendPhoto }) => {
  const [photoUrl, setPhotoUrl] = useState(initialValue);

  const inputRef = useRef();

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleTakePhoto = evt => {
    const file = evt.target.files[0];

    const reader = new FileReader();

    reader.addEventListener(
      'load',
      () => {
        // convert image file to base64 string
        setPhotoUrl(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return jsx(
    'div',
    {
      css: container,
    },
    jsx('input', {
      ref: inputRef,
      style: {
        display: 'none',
      },
      type: 'file',
      accept: 'image/*',
      capture: true,
      onChange: handleTakePhoto,
    }),
    photoUrl &&
      jsx('img', {
        src: photoUrl,
        alt: 'The photo you take with your camera',
        width: '100%',
      }),
    jsx(Button, {
      onClick: handleClick,
      text: jsx(
        'span',
        {
          css: cameraButtonText,
        },
        jsx(PhotoCamera, null),
        jsx('span', null, photoUrl ? 'Retake' : 'Take photo')
      ),
      style: style && style.CameraButton,
    }),
    jsx(Button, {
      disabled: !photoUrl,
      onClick: () => onSendPhoto(photoUrl),
      style: style && style.Button,
      text: 'Conferma',
    })
  );
};

export default Camera;
