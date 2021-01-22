import React from 'react';

import { ActivePlayersList, ProgressGraph, WidgetArea } from './components/';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
  },
  main: {
    height: '100vh',
    display: 'flex',
    '& .vis-network': {
      outline: 'none',
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <ActivePlayersList />
        <ProgressGraph />
      </div>
      <WidgetArea />
    </div>
  );
};

export default App;
