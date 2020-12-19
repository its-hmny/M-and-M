import React, { useEffect, useRef } from 'react';
import Graph from '../../common/Graph';
import {
  Options,
  getGraphFromStory,
} from '../../Editor/components/GraphCanvas/GraphPreferences';
import { useEvaluator } from '../context/EvaluatorContext';

const ProgressGraph = () => {
  const { story } = useEvaluator();
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

  return (
    <div ref={containerRef}>
      <Graph
        data={getGraphFromStory(story)}
        options={Options}
        getNetwork={network => {
          networkRef.current = network;
        }}
      />
    </div>
  );
};

export default ProgressGraph;
