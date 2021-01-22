import React from '../../web_modules/react.js';
import Providers from './Providers.js';
import App from './App.js';

const Editor = () =>
  React.createElement(Providers, null, React.createElement(App, null));

export default Editor;
