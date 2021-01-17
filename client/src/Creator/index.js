import { SnackbarProvider } from 'notistack';
import App from './App';
import React from 'react';

const Creator = () => {
  return (
    <SnackbarProvider
      maxSnack={10}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <App />
    </SnackbarProvider>
  );
};

export default Creator;
