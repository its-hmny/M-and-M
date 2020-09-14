import React from 'react';

import App from './App';
import Providers from './Providers';

function Player() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}

export default Player;
