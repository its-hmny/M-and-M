import React from 'react';
import { useHistory } from 'react-router-dom';
import { Fab, makeStyles } from '@material-ui/core';
import { Home as HomeIcon } from '@material-ui/icons';

import { ActivePlayersList, ProgressGraph, WidgetArea } from './components/';

import * as ROUTES from '../routes';

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
  navButton: {
    position: 'absolute',
    zIndex: 1,
    margin: theme.spacing(2),
    marginLeft: theme.spacing(30),
  },
  navIcon: {
    marginRight: theme.spacing(1),
  },
}));

const App = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <ActivePlayersList />
        <Fab
          className={classes.navButton}
          onClick={() => history.push(ROUTES.HOME)}
          variant="extended"
        >
          <HomeIcon className={classes.navIcon} />
          Home
        </Fab>
        <ProgressGraph />
      </div>
      <WidgetArea />
    </div>
  );
};

export default App;
