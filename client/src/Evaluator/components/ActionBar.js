import React, { useState } from 'react';
import { useEvaluator } from '../context/EvaluatorContext';
import Preview from '../../common/Preview';
import PlayersChat, { toggleWidget } from './PlayersChat';
import Launcher from './Launcher';

const ActionBar = () => {
  const { selectedPlayer } = useEvaluator();
  const [currentOpen, setCurrentOpen] = useState(undefined);

  const toggleContained = nToggle =>
    setCurrentOpen(nPrev => (nPrev === nToggle ? undefined : nToggle));

  return (
    <div style={{ display: selectedPlayer ? undefined : 'none' }}>
      <PlayersChat />

      <Launcher
        icon="http://localhost:8000/smartphone.svg"
        buttonColor="#121212"
        marginRight="10vw"
        open={currentOpen === 1}
        toggleContainer={() => toggleContained(1)}
      >
        <Preview storyNode={{ components: [] }} />
      </Launcher>

      <Launcher
        icon="http://localhost:8000/info.svg"
        buttonColor="#d3d3d3"
        marginRight="20vw"
        open={currentOpen === 2}
        toggleContainer={() => toggleContained(2)}
      >
        <h4>In this will be put the stats of the player</h4>
      </Launcher>
    </div>
  );
};

export default ActionBar;
