import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import { Fab, CircularProgress } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import ErrorIcon from '@material-ui/icons/Error';
import axios from './shared';

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
  buttonFailure: {
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
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

const SaveButton = ({ story }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const resetTimer = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(resetTimer.current);
    };
  }, []);

  useInterval(() => uploadStory(), 30000);

  const uploadStory = async () => {
    if (!loading) {
      setSuccess(false);
      setFailure(false);
      setLoading(true);
      try {
        const res = await axios.patch(`stories/${story.uuid}`, story);
        if (res.data.status) {
          setSuccess(true);
          resetTimer.current = setTimeout(() => {
            setSuccess(false);
          }, 3000);
        }
      } catch (err) {
        setFailure(true);
        resetTimer.current = setTimeout(() => {
          setFailure(false);
        }, 3000);
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={classes.wrapper}>
      <Fab
        variant="extended"
        color="primary"
        className={success ? classes.buttonSuccess : failure ? classes.buttonFailure : ''}
        onClick={uploadStory}
      >
        {success ? (
          <CheckIcon className={classes.icon} />
        ) : failure ? (
          <ErrorIcon className={classes.icon} />
        ) : loading ? (
          <CircularProgress size={24} className={classes.fabProgress} />
        ) : (
          <SaveIcon className={classes.icon} />
        )}
        {success ? 'Saved' : failure ? 'Failed' : loading ? 'Saving' : 'Save Story'}
      </Fab>
    </div>
  );
};

export default SaveButton;
