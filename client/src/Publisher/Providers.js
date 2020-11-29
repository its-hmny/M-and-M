import React from 'react';
import { orange, pink } from '@material-ui/core/colors';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

const customTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: pink,
    secondary: orange,
  },
});

const Providers = ({ children }) => (
  <ThemeProvider theme={customTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default Providers;
