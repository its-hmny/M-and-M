export const GraphOptions = {
    autoResize: true,

    nodes: {
        shape: "dot",
        size: 20,
        font: { size: 20, color: "#ffffff" },
        color: {
            border: "darkorange",
            background: "orange",
            highlight: {
              border: "black",
              background: "white"
            }
        }
    },
    
    
    edges: {
        color: "#ffffff",
        width: 2
    },
    
    
    layout: {
        hierarchical: true
    },
    
    
    manipulation: {
        enabled: false
    },
    
    
    physics: {
        enabled: false
    }
};

export const GraphEvents = {
    select: function (event) {
      //let { nodes, edges } = event;
    },
  };