import React from '../../web_modules/react.js';
import {
  ActivePlayersList,
  ProgressGraph,
  WidgetArea,
} from './components/index.js';
import { makeStyles } from '../../web_modules/@material-ui/core.js';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
  },
  main: {
    height: '100vh',
    display: 'flex',
    '& .vis-network': {
      outline: 'none',
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return React.createElement(
    'div',
    {
      className: classes.container,
    },
    React.createElement(
      'div',
      {
        className: classes.main,
      },
      React.createElement(ActivePlayersList, null),
      React.createElement(ProgressGraph, null),
    ),
    React.createElement(WidgetArea, null),
  );
};

export default App;
