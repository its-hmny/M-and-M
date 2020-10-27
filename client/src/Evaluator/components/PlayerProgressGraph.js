import React from 'react';
import Graph from 'vis-network-react';

const PlayerProgressGraph = () => {
  return (
    <div id="graphcanvas-container" style={{ zIndex: -1000000 }}>
      <Graph data={{ nodes: [{}, {}, {}] }} />
    </div>
  );
};

export default PlayerProgressGraph;
