import React from 'react';
import Graph from '../../common/Graph';
import {
  Options,
  getGraphFromStory,
} from '../../Editor/components/GraphCanvas/GraphPreferences';
import { useEvaluator } from '../context/EvaluatorContext';
import '../../Editor/components/GraphCanvas/styles.css';

const ProgressGraph = () => {
  const { story, setFocusedNode } = useEvaluator();

  const selectNode = event => setFocusedNode(event.nodes[0]);
  const deselectNode = () => setFocusedNode(undefined);

  return (
    <div id="graphcanvas-container">
      <Graph
        data={getGraphFromStory(story)}
        options={Options}
        events={{ selectNode, deselectNode }}
      />
    </div>
  );
};

export default ProgressGraph;
