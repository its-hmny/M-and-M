import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ViewProvider } from './context/view';

import theme from './theme';

function Providers({ children }) {
  return (
    <ViewProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ViewProvider>
  );
}

export default Providers;
