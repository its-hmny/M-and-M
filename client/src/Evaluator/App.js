import React from 'react';
import { Typography } from '@material-ui/core';
import PlayerProgressGraph from './components/PlayerProgressGraph';
import PlayerSidebar from './components/PlayerSidebar';
import ChatPopUp from './components/ChatPopUp';
import { useEvaluator } from './context/EvaluatorContext';

const App = () => {
  const { selectedPlayer } = useEvaluator();
  return (
    <>
      <Typography>{selectedPlayer}</Typography>
      {/* {<PlayerProgressGraph />} */}
      <PlayerSidebar />
      <ChatPopUp />
    </>
  );
};

export default App;
