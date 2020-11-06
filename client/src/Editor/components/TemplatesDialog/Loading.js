import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress />
      <div>
        <Typography variant="h6">Loading templates...</Typography>
        <Typography variant="body1">This should be a very short process</Typography>
      </div>
    </div>
  );
};

export default Loading;
