import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Editor from './Editor';
import Creator from './Creator';
import Player from './Player';
import Evaluator from './Evaluator';
import Publisher from './Publisher';
import NotFound from './NotFound';
import * as ROUTES from './routes';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.EDITOR} component={Editor} />
        <Route path={ROUTES.CREATOR} component={Creator} />
        <Route path={ROUTES.PLAYER} component={Player} />
        <Route path={ROUTES.EVALUATOR} component={Evaluator} />
        <Route path={ROUTES.PUBLISHER} component={Publisher} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
