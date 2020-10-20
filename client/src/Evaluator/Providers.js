import React from 'react';
import { orange, pink } from '@material-ui/core/colors';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { EvaluatorProvider } from './context/EvaluatorContext';

const customTheme = createMuiTheme({
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

const Providers = ({ children }) => (
  <ThemeProvider theme={customTheme}>
    <CssBaseline />
    <EvaluatorProvider>{children}</EvaluatorProvider>
  </ThemeProvider>
);

export default Providers;
