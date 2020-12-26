import React from 'react';

import { EvaluatorProvider } from './context/EvaluatorContext';
import { SnackbarProvider } from 'notistack';
import App from './App';

const Evaluator = () => (
  <SnackbarProvider
    maxSnack={10}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
  >
    <EvaluatorProvider>
      <App />
    </EvaluatorProvider>
  </SnackbarProvider>
);

export default Evaluator;
