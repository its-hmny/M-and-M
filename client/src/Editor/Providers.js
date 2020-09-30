import React from 'react';
import { orange, pink } from '@material-ui/core/colors';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

import { EditorProvider } from './context/EditorContext';
import ExampleStory from './constants/ExampleStory';

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
    <EditorProvider userStory={ExampleStory}>{children}</EditorProvider>
  </ThemeProvider>
);

export default Providers;
