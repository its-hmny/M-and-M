import React from '../web_modules/react.js';
import {
  Grid,
  Typography,
  makeStyles,
} from '../web_modules/@material-ui/core.js';
import Astronaut from './assets/Astronaut.svg.proxy.js';

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

  return React.createElement(
    Grid,
    {
      container: true,
      justify: 'center',
      alignItems: 'center',
      className: container,
    },
    React.createElement('img', {
      src: Astronaut,
      alt: 'Just a funny astronaut',
      className: img,
    }),
    React.createElement(
      Typography,
      {
        color: 'primary',
        variant: 'h1',
        align: 'left',
        classname: text,
      },
      '404',
      React.createElement(
        Typography,
        {
          color: 'primary',
          variant: 'h3',
        },
        'Not Found',
        React.createElement(
          Typography,
          {
            color: 'status',
            variant: 'subtitle1',
          },
          'We are sorry but the page you are looking for does not exist',
        ),
      ),
    ),
  );
};

export default NotFound;
