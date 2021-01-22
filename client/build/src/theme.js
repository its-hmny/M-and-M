import React from '../web_modules/react.js';
import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from '../web_modules/@material-ui/core.js';
import { orange, pink } from '../web_modules/@material-ui/core/colors.js';

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

const ThemeProvider = ({ children }) =>
  React.createElement(
    MuiThemeProvider,
    {
      theme: theme,
    },
    React.createElement(CssBaseline, null),
    children,
  );

export default ThemeProvider;
