import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, makeStyles, colors } from '@material-ui/core';

import logo from '../assets/logo.svg';
import * as ROUTES from '../routes';

const useStyles = makeStyles(theme => ({
  navLink: {
    backgroundColor: colors.deepOrange[500],
    '&:hover': {
      backgroundColor: colors.deepOrange[700],
    },
  },
  logo: {
    height: 40,
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <img className={classes.logo} src={logo} alt="Application Logo" />
        <Button
          component={NavLink}
          activeClassName={classes.navLink}
          exact
          to={ROUTES.HOME}
        >
          Home
        </Button>
        <Button component={NavLink} activeClassName={classes.navLink} to={ROUTES.CREATOR}>
          Creator
        </Button>
        <Button
          component={NavLink}
          activeClassName={classes.navLink}
          to={`${ROUTES.EDITOR}?storyId=test`}
        >
          Editor
        </Button>
        <Button
          component={NavLink}
          activeClassName={classes.navLink}
          to={ROUTES.PLAYER + '?storyId=test'}
        >
          Player
        </Button>
        <Button
          component={NavLink}
          activeClassName={classes.navLink}
          to={ROUTES.EVALUATOR + '?storyId=test'}
        >
          Evaluator
        </Button>
        <Button
          component={NavLink}
          activeClassName={classes.navLink}
          to={ROUTES.PUBLISHER}
        >
          Publisher
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
