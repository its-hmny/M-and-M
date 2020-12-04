import React from 'react';
import { ActivePlayersList, ProgressGraph, WidgetArea } from './components/';

const App = () => {
  return (
    <>
      <ActivePlayersList />
      <WidgetArea />
      <ProgressGraph />
    </>
  );
};

export default App;
