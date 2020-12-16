import React from 'react';
import { makeStyles } from '@material-ui/core';

import Navbar from './common/Navbar';
import { useQuery } from './common/shared';

const useStyles = makeStyles(() => ({
  main: {
    padding: '2vh',
  },
}));

const NotFound = () => {
  const classes = useStyles();
  const { route } = useQuery();

  let content;
  if (route && route.includes('editor')) {
    const storyId = route.substring(route.lastIndexOf('=') + 1);
    content = <div>Sorry, but we didn't find any story with ID: {storyId} </div>;
  } else {
    content = <div>404</div>;
  }

  return (
    <div>
      <Navbar />
      <div className={classes.main}>{content}</div>
    </div>
  );
};

export default NotFound;
