import React from 'react';

import { ActivePlayersList, ProgressGraph, WidgetArea } from './components/';
import Navbar from '../common/Navbar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
  },
  main: {
    height: 'calc(100vh - 64px)',
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
      <Navbar />
      <div className={classes.main}>
        <ActivePlayersList />
        <ProgressGraph />
      </div>
      <WidgetArea />
    </div>
  );
};

export default App;
