import React from '../web_modules/react.js';
import ReactDOM from '../web_modules/react-dom.js';
import App from './App.js';
import ThemeProvider from './theme.js';

ReactDOM.render(
  React.createElement(ThemeProvider, null, React.createElement(App, null)),
  document.getElementById('root')
);
