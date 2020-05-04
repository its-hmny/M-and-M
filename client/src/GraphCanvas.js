import React, { useState } from "react";
import Graph from "react-graph-vis";

const options = {
  layout: { hierarchical: true },
  edges: {
    color: "#000000",
  },

  physic: { enabled: false },
  height: "500px",
};

const events = {
  select: function (event) {
    //let { nodes, edges } = event;
  },
};

function GraphCanvas() {
  const [graphNodes, setNodes] = useState([]);
  const [graphEdges, setEdges] = useState([]);

  const graph = { nodes: graphNodes, edges: graphEdges };
  let group_id = 1;

  const addNode = () => {
    group_id += 1;
    let last_id = graphNodes.length
    setNodes(graphNodes.concat({ id: last_id, label: "Added", title: "Title"}));
    //setNodes([...graphNodes, { id: 1, label: "Added", title: "Title"}]);
  };

  const addEdge = () => {
    let start_node = 0;
    let dest_node = 2;
    setEdges([...graphEdges, { from: start_node, to: dest_node }])
  };

  //setNodes([{ id: 1, label: "Added", title: "Title"}]);
  return (
    <div id="graph-container">
      <Graph key={group_id} graph={graph} options={options} events={events} />
      <button onClick={addNode}>Add a node</button>
    </div>
  );
}

export default GraphCanvas;