import React from 'react';

import Graph from "react-graph-vis";


  const options = {
    layout: {
      hierarchical: true
    },
    edges: {
      color: "#000000"
    },
    height: "500px"
  };

  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };
class GraphCanvas extends React.Component {

    constructor(props) {
      super(props);
      this.state = { graph: 
            {nodes: [
                { id: 1, label: "Node 1", title: "node 1 tootip text" },
                { id: 2, label: "Node 2", title: "node 2 tootip text" },
                { id: 3, label: "Node 3", title: "node 3 tootip text" },
                { id: 4, label: "Node 4", title: "node 4 tootip text" },
                { id: 5, label: "Node 5", title: "node 5 tootip text" }
              ],
              edges: [
                { from: 1, to: 2 },
                { from: 1, to: 3 },
                { from: 2, to: 4 },
                { from: 2, to: 5 }
              ]} 
      };
      this.group_id = 1;
      this.add_n = this.add_n.bind(this);
      
    }

    add_n(){
        let last_node = this.state.graph.nodes[this.state.graph.nodes.length - 1];
        let id = last_node.id + 1;
        let label = 'Node ' + id;
        let title = 'Node ' + id + ' tooltip text';

        this.group_id += 1;

        this.setState({
            graph:{
                nodes: this.state.graph.nodes.concat({ id: id, label: label, title: title }),
                edges: this.state.graph.edges.concat({from: last_node.id, to: id})
            }
        });
        
    }
    
    
    render() {
        return (
            <div id="container">
                <Graph
                    key={this.group_id}
                    graph={this.state.graph}
                    options={options}
                    events={events}
                   
                />
                <button onClick={this.add_n}>Ciao</button>
            </div>
          );
    }

}



export default GraphCanvas;