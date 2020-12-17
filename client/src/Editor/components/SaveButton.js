import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Fab, CircularProgress } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

import { useEditor } from '../context/EditorContext';
import axios from '../../common/shared';

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: 'black',
    marginRight: '10px',
    zIndex: 1,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const useInterval = (callback, delay) => {
  const savedCallbackRef = useRef();

  useEffect(() => {
    savedCallbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (...args) => savedCallbackRef.current(...args);

    if (delay !== null) {
      const intervalId = setInterval(handler, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
};

const SaveButton = () => {
  const classes = useStyles();
  const { story } = useEditor();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const resetTimer = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(resetTimer.current);
    };
  }, []);

  useInterval(() => uploadStory(), 60000);

  const uploadStory = async () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      try {
        const res = await axios.patch(`stories/${story.uuid}`, story);
        if (res.data.status) {
          setSuccess(true);
          setLoading(false);
          resetTimer.current = setTimeout(() => {
            setSuccess(false);
          }, 3000);
        }
      } catch (err) {
        if (err.response) {
          console.error(err.response.data.message);
        }
      }
    }
  };

  return (
    <div className={classes.wrapper}>
      <Fab
        variant="extended"
        className={success ? classes.buttonSuccess : ''}
        onClick={uploadStory}
      >
        {success ? (
          <CheckIcon className={classes.icon} />
        ) : loading ? (
          <CircularProgress size={24} className={classes.fabProgress} />
        ) : (
          <SaveIcon className={classes.icon} />
        )}
        {success ? 'Saved' : loading ? 'Saving' : 'Save Story'}
      </Fab>
    </div>
  );
};

export default SaveButton;
