import React from 'react';
import Graph from '../../common/Graph';
import {
  Options,
  getGraphFromStory,
} from '../../Editor/components/GraphCanvas/GraphPreferences';
import { useEvaluator } from '../context/EvaluatorContext';
import '../../Editor/components/GraphCanvas/styles.css';

const ProgressGraph = () => {
  const { story } = useEvaluator();
  return (
    <div id="graphcanvas-container">
      <Graph data={getGraphFromStory(story)} options={Options} />
    </div>
  );
};

export default ProgressGraph;
