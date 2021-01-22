import React, { useState } from '../../../web_modules/react.js';
import { useEvaluator } from '../context/EvaluatorContext.js';
import {
  ChatWidget,
  WidgetLauncher,
  StatsWidget,
  EvaluationWidget,
} from './index.js';
import smartphoneIcon from '../assets/svgs/smartphone.svg.proxy.js';
import infoIcon from '../assets/svgs/info.svg.proxy.js';
import { toggleWidget } from '../../../web_modules/react-chat-widget.js';

const WidgetArea = () => {
  const { selectedPlayer } = useEvaluator();

  const [currentOpen, setCurrentOpen] = useState(undefined);

  const toggleContained = (nToggle) =>
    setCurrentOpen((nPrev) => {
      if (nPrev === 0 && nToggle !== 0) toggleWidget();
      return nPrev === nToggle ? undefined : nToggle;
    });

  if (!selectedPlayer) {
    return null;
  }

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(ChatWidget, {
      isOpen: currentOpen === 0,
      onOpen: () => toggleContained(0),
    }),
    React.createElement(
      WidgetLauncher,
      {
        icon: smartphoneIcon,
        buttonColor: '#2b76e2',
        marginRight: '10vw',
        width: currentOpen !== 1 && 'unset',
        open: currentOpen === 1,
        toggleContainer: () => toggleContained(1),
      },
      React.createElement(EvaluationWidget, null),
    ),
    React.createElement(
      WidgetLauncher,
      {
        icon: infoIcon,
        buttonColor: '#ff9100',
        marginRight: '20vw',
        width: currentOpen !== 2 && 'unset',
        open: currentOpen === 2,
        toggleContainer: () => toggleContained(2),
      },
      React.createElement(StatsWidget, {
        player: selectedPlayer,
      }),
    ),
  );
};

export default WidgetArea;
