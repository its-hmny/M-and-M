import React from 'react';
import Graph from 'vis-network-react';
import {
  Options,
  getGraphFromStory,
} from '../../Editor/components/GraphCanvas/GraphPreferences';
import { useEvaluator } from '../context/EvaluatorContext';
import '../../Editor/components/GraphCanvas/styles.css';

const PlayerProgressGraph = () => {
  const { story } = useEvaluator();
  return (
    <div id="graphcanvas-container">
      <Graph data={getGraphFromStory(story)} options={Options} />
    </div>
  );
};

export default PlayerProgressGraph;
