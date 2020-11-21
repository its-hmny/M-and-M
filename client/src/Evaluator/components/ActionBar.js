import React from 'react';
import { useEvaluator } from '../context/EvaluatorContext';
import Preview from '../../common/Preview';
import PlayersChat from './PlayersChat';
import Launcher from './Launcher';

const ActionBar = () => {
  const { selectedPlayer } = useEvaluator();
  const barStyle = {
    display: selectedPlayer ? undefined : 'none',
    zIndex: 1000,
  };
  return (
    <div style={barStyle}>
      <PlayersChat />

      <Launcher
        img="http://localhost:8000/smartphone.svg"
        backgroundColor="#121212"
        marginRight="5vw"
      >
        <Preview storyNode={{ components: [] }} />
      </Launcher>
    </div>
  );
};

export default ActionBar;
