import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import * as ROUTES from './routes';
import Navbar from './common/Navbar';

const Home = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <img
            src="http://localhost:8000/M&M_Icon.svg"
            alt="Application Logo"
            style={{ height: '5vh', marginRight: '1vw' }}
          />
          <Typography variant="h5">{'M&M'}</Typography>

          <div style={{ marginLeft: '70vw' }} />

          <Typography variant="h6">
            <Button color="inherit" to={ROUTES.HOME}>
              Home
            </Button>
          </Typography>
          <Typography variant="h6">
            <Button color="inherit" to={ROUTES.CREATOR}>
              Creator
            </Button>
          </Typography>
          <Typography variant="h6">
            <Button color="inherit" to={ROUTES.EDITOR}>
              Editor
            </Button>
          </Typography>
          <Typography variant="h6">
            <Button color="inherit" to={`${ROUTES.PLAYER}?storyId=0`}>
              Player
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Navbar />
    </div>
  );
};

export default Home;
