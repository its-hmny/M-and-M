import React from 'react';
import Graph from 'vis-network-react';

import '../../Editor/components/styles.css';

const PlayerProgressGraph = () => {
  return (
    <div id="graphcanvas-container" style={{ zIndex: -1000000 }}>
      <Graph data={{ nodes: [{}, {}, {}] }} />
    </div>
  );
};

export default PlayerProgressGraph;
