import React, { useState } from 'react';
import { useEvaluator } from '../context/EvaluatorContext';
import { ChatWidget, WidgetLauncher, StatsWidget, EvaluationWidget } from '.';

const WidgetArea = () => {
  const { selectedPlayer } = useEvaluator();
  const [currentOpen, setCurrentOpen] = useState(undefined);

  const toggleContained = nToggle =>
    setCurrentOpen(nPrev => (nPrev === nToggle ? undefined : nToggle));

  return (
    <div style={{ display: selectedPlayer ? undefined : 'none' }}>
      <ChatWidget onOpen={() => toggleContained(0)} />

      <WidgetLauncher
        icon="http://localhost:8000/smartphone.svg"
        buttonColor="#121212"
        marginRight="21vw"
        open={currentOpen === 1}
        toggleContainer={() => toggleContained(1)}
      >
        <EvaluationWidget />
      </WidgetLauncher>

      <WidgetLauncher
        icon="http://localhost:8000/info.svg"
        buttonColor="#d3d3d3"
        marginRight="40vw"
        open={currentOpen === 2}
        toggleContainer={() => toggleContained(2)}
      >
        {/*ToDo change this line once stats has default value*/}
        <StatsWidget player={selectedPlayer || {}} />
      </WidgetLauncher>
    </div>
  );
};

export default WidgetArea;
