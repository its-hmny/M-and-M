import React from 'react';
import { Typography } from '@material-ui/core';
import PlayerProgressGraph from './components/PlayerProgressGraph';
import SmartphoneEmulator from '../Editor/components/SmartphoneEmulator';
import PlayerSidebar from './components/PlayerSidebar';
import ChatPopUp from './components/ChatPopUp';
import Launcher from './components/Launcher';
import { useEvaluator } from './context/EvaluatorContext';

const App = () => {
  const { selectedPlayer } = useEvaluator();
  return (
    <>
      <Typography>{selectedPlayer}</Typography>
      {/* {<PlayerProgressGraph />} */}
      <PlayerSidebar />
      <ChatPopUp />
      <Launcher backgroundColor="#121212" img="http://localhost:8000/clear-button.svg">
        <div>
          <div class="rcw-conversation-container active">
            {/* <SmartphoneEmulator storyNode={{ components: [] }} /> */}
            <h1>Diocane</h1>
          </div>
        </div>
      </Launcher>
    </>
  );
};

export default App;
