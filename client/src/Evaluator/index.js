import React from 'react';

import { EvaluatorProvider } from './context/EvaluatorContext';
import App from './App';

const Evaluator = () => (
  <EvaluatorProvider>
    <App />
  </EvaluatorProvider>
);

export default Evaluator;
