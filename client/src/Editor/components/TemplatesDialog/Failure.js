import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Error as ErrorIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
    textAlign: 'center',
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(1),
    },
  },
}));

const Failure = ({ onRetry }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ErrorIcon fontSize="large" color="error" />
      <div>
        <Typography variant="h6">Something went wrong</Typography>
        <Typography>Unable to fetch templates</Typography>
      </div>
      <Button variant="text" onClick={onRetry}>
        Retry
      </Button>
    </div>
  );
};

export default Failure;
