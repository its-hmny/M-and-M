import React from 'react';
import { Typography } from '@material-ui/core';
import PlayerSidebar from './components/PlayerSidebar';
import ChatPopUp from './components/ChatPopUp';
import Launcher from './components/Launcher';
import { SmartphoneEmulator } from '../Editor/components';
import { useEvaluator } from './context/EvaluatorContext';

const App = () => {
  const { selectedPlayer } = useEvaluator();
  return (
    <>
      <Typography>{selectedPlayer}</Typography>
      <PlayerSidebar />
      <ChatPopUp />
      <Launcher
        img="http://localhost:8000/M&M_Icon.svg"
        backgroundColor="#121212"
        marginRight={'5vw'}
      >
        <SmartphoneEmulator storyNode={{ components: [] }} />
      </Launcher>
    </>
  );
};

export default App;
