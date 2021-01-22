/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState, useRef } from 'react';
import { PhotoCamera } from '@material-ui/icons';
import Button from './Button';

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

  return (
    <div css={container}>
      <input
        ref={inputRef}
        style={{ display: 'none' }}
        type="file"
        accept="image/*"
        capture
        onChange={handleTakePhoto}
      />
      {photoUrl && (
        <img src={photoUrl} alt="The photo you take with your camera" width="100%" />
      )}
      <Button
        onClick={handleClick}
        text={
          <span css={cameraButtonText}>
            <PhotoCamera />
            <span>{photoUrl ? 'Retake' : 'Take photo'}</span>
          </span>
        }
        style={style && style.CameraButton}
      />
      <Button
        disabled={!photoUrl}
        onClick={() => onSendPhoto(photoUrl)}
        style={style && style.Button}
        text="Conferma"
      />
    </div>
  );
};

export default Camera;
