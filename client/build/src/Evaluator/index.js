import React from '../../web_modules/react.js';
import { EvaluatorProvider } from './context/EvaluatorContext.js';
import { SnackbarProvider } from '../../web_modules/notistack.js';
import App from './App.js';

const Evaluator = () =>
  React.createElement(
    SnackbarProvider,
    {
      maxSnack: 10,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    },
    React.createElement(
      EvaluatorProvider,
      null,
      React.createElement(App, null),
    ),
  );

export default Evaluator;
