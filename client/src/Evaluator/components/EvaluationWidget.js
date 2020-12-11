import React, { useMemo } from 'react';
import { useEvaluator } from '../context/EvaluatorContext';
import Preview from '../../common/Preview';

const EvaluationWidget = () => {
  const { story, selectedPlayer } = useEvaluator();
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

  return (
    <>
      <Preview components={playerNode} />
    </>
  );
};

export default EvaluationWidget;
