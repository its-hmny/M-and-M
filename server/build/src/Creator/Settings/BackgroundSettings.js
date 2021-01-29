import React, { useState, useRef } from '../../../web_modules/react.js';
import { makeStyles } from '../../../web_modules/@material-ui/core/styles.js';
import Button from '../../../web_modules/@material-ui/core/Button.js';
import Typography from '../../../web_modules/@material-ui/core/Typography.js';
import { Camera as CameraIcon } from '../../../web_modules/@material-ui/icons.js';
import OpacitySlider from './atoms/OpacitySlider.js';
import useStylesStore from '../stores/styles.js';
import axios from '../../common/shared.js';
import { SERVER_URL } from '../../common/constants.js';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const BackgroundSettings = ({ styleId }) => {
  const classes = useStyles();

  const inputRef = useRef();

  const [outcome, setOutcome] = useState('');

  const { styles, updateStyle } = useStylesStore((state) => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));

  const onChange = (subStyle) =>
    updateStyle({
      styleId,
      ...subStyle,
    });

  const upload = async (file) => {
    const formData = new FormData();

    formData.append('file', file); // Ignore any error

    axios
      .delete(`resources/${styles[styleId].backgroundImage}`)
      .catch(() => {});

    try {
      const res = await axios.put('resources/', formData, {
        headers: {
          'Content-Type': file.type,
        },
      });

      updateStyle({
        styleId,
        backgroundImage: `url(${SERVER_URL}/resources/${res.data.uuid})`,
      });
      setOutcome('File uploaded successfully!');
    } catch (err) {
      console.log(err.data);
      setOutcome('Error occured while loading!');
    }
  };

  return React.createElement(
    'div',
    null,
    React.createElement(
      Button,
      {
        variant: 'contained',
        color: 'default',
        className: classes.button,
        startIcon: React.createElement(CameraIcon, null),
        onClick: () => {
          inputRef.current.click();
        },
      },
      'Upload image',
    ),
    React.createElement('input', {
      style: {
        display: 'none',
      },
      ref: inputRef,
      type: 'file',
      onChange: (evt) => {
        upload(evt.target.files[0]);
      },
    }),
    React.createElement(Typography, null, outcome),
    React.createElement(OpacitySlider, {
      onChange: onChange,
      value: styles[styleId],
    }),
  );
};

export default BackgroundSettings;
