import React from 'react';
import ReactDOM from 'react-dom';

import { StylesProvider } from './context/styles';
import { StoryProvider } from './context/story';

import App from './App';

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    logOnDifferentValues: true,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider>
      <StoryProvider>
        <App />
      </StoryProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
