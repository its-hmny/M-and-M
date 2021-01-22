import React from '../web_modules/react.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from '../web_modules/react-router-dom.js';
import Editor from './Editor/index.js';
import Creator from './Creator/index.js';
import Player from './Player/index.js';
import Evaluator from './Evaluator/index.js';
import Publisher from './Publisher/index.js';
import NotFound from './NotFound.js';
import * as ROUTES from './routes.js';

const App = () => {
  return React.createElement(
    Router,
    null,
    React.createElement(
      Switch,
      null,
      React.createElement(Route, {
        exact: true,
        path: ROUTES.HOME,
        component: Publisher,
      }),
      React.createElement(Route, {
        path: ROUTES.EDITOR,
        component: Editor,
      }),
      React.createElement(Route, {
        path: ROUTES.CREATOR,
        component: Creator,
      }),
      React.createElement(Route, {
        path: ROUTES.PLAYER,
        component: Player,
      }),
      React.createElement(Route, {
        path: ROUTES.EVALUATOR,
        component: Evaluator,
      }),
      React.createElement(Route, {
        path: ROUTES.NOTFOUND,
        component: NotFound,
      }),
      React.createElement(Route, {
        component: NotFound,
      })
    )
  );
};

export default App;
