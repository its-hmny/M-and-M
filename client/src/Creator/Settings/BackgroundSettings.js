import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Camera as CameraIcon } from '@material-ui/icons';
import OpacitySlider from './atoms/OpacitySlider';
import useStylesStore from '../stores/styles';
import axios from '../../common/shared';
import { SERVER_URL } from '../../common/constants';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const BackgroundSettings = ({ styleId }) => {
  const classes = useStyles();
  const inputRef = useRef();
  const [outcome, setOutcome] = useState('');
  const { styles, updateStyle } = useStylesStore(state => ({
    styles: state.styles,
    updateStyle: state.updateStyle,
  }));
  const onChange = subStyle => updateStyle({ styleId, ...subStyle });
  const upload = async file => {
    const formData = new FormData();
    formData.append('file', file);

    // Ignore any error
    axios.delete(`resources/${styles[styleId].backgroundImage}`).catch(() => {});

    try {
      const res = await axios.put('resources/', formData, {
        headers: { 'Content-Type': file.type },
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

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CameraIcon />}
        onClick={() => {
          inputRef.current.click();
        }}
      >
        Upload image
      </Button>
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        type="file"
        onChange={evt => {
          upload(evt.target.files[0]);
        }}
      />
      <Typography>{outcome}</Typography>
      <OpacitySlider onChange={onChange} value={styles[styleId]} />
    </div>
  );
};

export default BackgroundSettings;
