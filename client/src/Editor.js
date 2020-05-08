import ActivitiesMenu from './ActivitiesMenu';
import React, { useState } from "react";
import Graph from "react-graph-vis";
import options from "./GraphPreferences.json";

const events = {
  select: function (event) {
    //let { nodes, edges } = event;
  },
};

let graph_uuid = 1;

function Editor() {
  const [graphNodes, setNodes] = useState([]);
  const [graphEdges, setEdges] = useState([]);

  const addNode = () => {
    graph_uuid += 1;
    let last_id = graphNodes.length
    setNodes([...graphNodes, { id: last_id, label: "Added", title: "Title"}]);
  };

  const addEdge = () => {
    let start_node = 1;
    let dest_node = 0;
    graph_uuid += 1;
    setEdges([...graphEdges, { from: start_node, to: dest_node }])
  };


  return (
    <div>
      <ActivitiesMenu />
      <Graph key={graph_uuid} graph={{ nodes: graphNodes, edges: graphEdges }} options={options} events={events} />
      <button onClick={addNode}>Add a node</button>
      <button onClick={addEdge}>Add an edge</button>
    </div>
  );
}

export default Editor;