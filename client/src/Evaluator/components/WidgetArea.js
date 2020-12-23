import React, { useState } from 'react';
import { useEvaluator } from '../context/EvaluatorContext';
import { ChatWidget, WidgetLauncher, StatsWidget, EvaluationWidget } from '.';

import smartphoneIcon from '../assets/svgs/smartphone.svg';
import infoIcon from '../assets/svgs/info.svg';
import { toggleWidget } from 'react-chat-widget';

const WidgetArea = () => {
  const { selectedPlayer, socket } = useEvaluator();
  const [currentOpen, setCurrentOpen] = useState(undefined);

  const toggleContained = nToggle =>
    setCurrentOpen(nPrev => {
      if (nPrev === 0 && nToggle !== 0) toggleWidget();
      return nPrev === nToggle ? undefined : nToggle;
    });

  if (!selectedPlayer) {
    return null;
  }

  return (
    <>
      <ChatWidget
        isOpen={currentOpen === 0}
        onOpen={() => toggleContained(0)}
        socket={socket}
      />

      <WidgetLauncher
        icon={smartphoneIcon}
        buttonColor="#121212"
        marginRight="10vw"
        width={currentOpen !== 1 && 'unset'}
        open={currentOpen === 1}
        toggleContainer={() => toggleContained(1)}
      >
        <EvaluationWidget />
      </WidgetLauncher>

      <WidgetLauncher
        icon={infoIcon}
        buttonColor="#d3d3d3"
        marginRight="20vw"
        width={currentOpen !== 2 && 'unset'}
        open={currentOpen === 2}
        toggleContainer={() => toggleContained(2)}
      >
        <StatsWidget player={selectedPlayer} />
      </WidgetLauncher>
    </>
  );
};

export default WidgetArea;
