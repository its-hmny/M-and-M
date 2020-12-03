import React, { useState, useMemo } from 'react';
import { useEvaluator } from '../context/EvaluatorContext';
import { ChatWidget, WidgetLauncher, StatsWidget } from '.';
import Preview from '../../common/Preview';

const WidgetArea = () => {
  const { story, selectedPlayer } = useEvaluator();
  const [currentOpen, setCurrentOpen] = useState(undefined);
  const { currentQuestion } = selectedPlayer;

  const playerNode = useMemo(() => {
    if (!currentQuestion) {
      return { components: [] };
    }
    const { currentNodeId, patchs } = currentQuestion;
    // Get the story node in wich the player is (its components array)
    const defaultStoryNode = story.nodes.find(node => node.id === currentNodeId);
    const components = defaultStoryNode ? defaultStoryNode.components : [];
    // Apply the patches to the relative component before display
    patchs.forEach(patch => {
      const { componentId, value } = patch;
      const toChange = components.find(comp => comp.id === componentId);
      toChange.initialValue = value;
    });
    return components;
  }, [currentQuestion]);

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
        {/*ToDo change this line once currenQuestion has default value*/}
        <Preview components={playerNode} />
      </WidgetLauncher>

      <WidgetLauncher
        icon="http://localhost:8000/info.svg"
        buttonColor="#d3d3d3"
        marginRight="40vw"
        open={currentOpen === 2}
        toggleContainer={() => toggleContained(2)}
      >
        {/*ToDo change this line once stats has default value*/}
        <StatsWidget player={selectedPlayer} />
      </WidgetLauncher>
    </div>
  );
};

export default WidgetArea;
