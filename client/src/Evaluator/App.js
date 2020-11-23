import React from 'react';
import { Typography } from '@material-ui/core';
import PlayerProgressGraph from './components/PlayerProgressGraph';
import PlayerSidebar from './components/PlayerSidebar';
import ActionBar from './components/ActionBar';

import { useEvaluator } from './context/EvaluatorContext';

const App = () => {
  const { selectedPlayer } = useEvaluator();
  return (
    <>
      <Typography>{selectedPlayer}</Typography>
      {/*<PlayerProgressGraph />*/}
      <PlayerSidebar />
      <ActionBar />
    </>
  );
};

export default App;
