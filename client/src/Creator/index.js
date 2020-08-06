import React from 'react';

import App from './App';
import Providers from './Providers';

function Creator() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}

export default Creator;
