import React from 'react';
import ReactDOM from 'react-dom';

import { StoryProvider } from './story-context';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <StoryProvider>
      <App />
    </StoryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
