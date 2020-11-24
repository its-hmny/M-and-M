import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import logo from '../assets/logo.svg';
import * as ROUTES from '../routes';

const Navbar = () => (
  <AppBar position="static" color="secondary">
    <Toolbar>
      <img
        src={logo}
        alt="Application Logo"
        style={{ height: '5vh', marginRight: '1vw' }}
      />
      <Typography variant="h6">
        <Button color="inherit" component={Link} to={ROUTES.HOME}>
          Home
        </Button>
      </Typography>
      <Typography variant="h6">
        <Button color="inherit" component={Link} to={ROUTES.CREATOR}>
          Creator
        </Button>
      </Typography>
      <Typography variant="h6">
        <Button color="inherit" component={Link} to={ROUTES.EDITOR}>
          Editor
        </Button>
      </Typography>
      <Typography variant="h6">
        <Button color="inherit" component={Link} to={ROUTES.PLAYER + '?storyId=1'}>
          Player
        </Button>
      </Typography>
      <Typography variant="h6">
        <Button color="inherit" component={Link} to={ROUTES.EVALUATOR + '?storyId=1'}>
          Evaluator
        </Button>
      </Typography>
      <Typography variant="h6">
        <Button color="inherit" component={Link} to={ROUTES.PUBLISHER}>
          Publisher
        </Button>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
