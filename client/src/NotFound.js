import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import Astronaut from './assets/Astronaut.svg';

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    width: '100%',
  },
  img: {
    width: '33vw',
    height: '33vh',
  },
  text: {
    widht: '33vw',
  },
}));

const NotFound = () => {
  const { container, img, text } = useStyles();
  return (
    <Grid container justify="center" alignItems="center" className={container}>
      <img src={Astronaut} alt="Just a funny astronaut" className={img} />
      <Typography color="primary" variant="h1" align="left" classname={text}>
        404
        <Typography color="primary" variant="h3">
          Not Found
          <Typography color="status" variant="subtitle1">
            We are sorry but the page you are looking for does not exist
          </Typography>
        </Typography>
      </Typography>
    </Grid>
  );
};

export default NotFound;
