import React from 'react';
import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { orange, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          overflow: 'hidden',
        },
      },
    },
  },
  palette: {
    type: 'dark',
    primary: pink,
    secondary: orange,
  },
});

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
