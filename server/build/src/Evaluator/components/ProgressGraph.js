import React, { useCallback, useEffect, useRef } from '../../../web_modules/react.js';
import Graph from '../../common/Graph.js';
import {
  Options,
  getGraphFromStory,
  highlightPath,
} from '../../Editor/components/GraphCanvas/GraphPreferences.js';
import { useEvaluator } from '../context/EvaluatorContext.js';

const ProgressGraph = () => {
  const { story, selectedPlayer } = useEvaluator();

  const playerPath = selectedPlayer ? selectedPlayer.history : [];

  const networkRef = useRef();

  const containerRef = useRef();

  useEffect(() => {
    const resizeHandler = () => {
      if (containerRef.current && networkRef.current) {
        const { x, y } = containerRef.current.getBoundingClientRect().toJSON();

        networkRef.current.setOptions({
          width: `${window.innerWidth - x}px`,
          height: `${window.innerHeight - y}px`,
        });
      }
    };

    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  const getNetwork = useCallback(network => (networkRef.current = network), []);

  return React.createElement(
    'div',
    {
      ref: containerRef,
    },
    React.createElement(Graph, {
      data: highlightPath({ ...getGraphFromStory(story) }, playerPath),
      options: Options,
      getNetwork: getNetwork,
    })
  );
};

export default ProgressGraph;
