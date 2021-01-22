import { SnackbarProvider } from '../../web_modules/notistack.js';
import App from './App.js';
import React from '../../web_modules/react.js';

const Creator = () => {
  return React.createElement(
    SnackbarProvider,
    {
      maxSnack: 10,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    },
    React.createElement(App, null)
  );
};

export default Creator;
