import React, { useState } from "react";
import Graph from "react-graph-vis";

const options = {
  autoresize: true,
  layout: { hierarchical: true },
  edges: { color: "#000000" },
  manipulation: { enabled: false },
  physic: { enabled: false },
  height: "500px",
};

const events = {
  select: function (event) {
    //let { nodes, edges } = event;
  },
};

let group_id = 1;


function GraphCanvas() {
  const [graphNodes, setNodes] = useState([]);
  const [graphEdges, setEdges] = useState([]);
  const graph = { nodes: graphNodes, edges: graphEdges };

  const addNode = () => {
    group_id += 1;
    let last_id = graphNodes.length
    setNodes([...graphNodes, { id: last_id, label: "Added", title: "Title"}]);
  };

  const addEdge = () => {
    let start_node = 1;
    let dest_node = 0;
    group_id += 1;
    setEdges([...graphEdges, { from: start_node, to: dest_node }])
  };


  return (
    <div id="graph-container">
      <Graph key={group_id} graph={graph} options={options} events={events} />
      <button onClick={addNode}>Add a node</button>
      <button onClick={addEdge}>Add an edge</button>
    </div>
  );
}

export default GraphCanvas;