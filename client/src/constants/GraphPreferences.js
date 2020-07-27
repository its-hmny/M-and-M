export const GraphOptions = {
  autoResize: true,
  height: '500',
  width: '100%',

  configure: {
    enabled: false,
    filter: "",
    /* nodes, edges, layout, interaction, manipulation, physics, selection, renderer */
    showButton: true
  },

  edges: {
    arrows: { to: { enabled: true } },

    color: { color: 'black', highlight: 'red' },

    // Width for every sistuations
    width: 2,
    hoverWidth: 2.5,
    selectionWidth: 2.5,

    // Smoothness option of the edges
    smooth: { enabled: false, type: "dynamic", roundness: 0.7 }
  },

  nodes: {
    borderWidth: 2,
    borderWidthSelected: 2.5,

    color: {
      border: "darkorange",
      background: "orange",
      highlight: { border: "black", background: "orange" }
    },

    font: { size: 15, color: "black", background: "none", align: "center" },

    shape: "dot",
    size: 20,
  },

  layout: {
    improvedLayout: false,

    hierarchical: {
      enabled: true,
      levelSeparation: 100,
      nodeSpacing: 100,
      edgeMinimization: true,
      parentCentralization: false,
    }
  },

  interaction: {
    dragNodes: true,
    dragView: true,
    hover: false,
    keyboard: { enabled: true, bindToWindow: false },
    selectable: true,
    multiselect: true,
    navigationButtons: false,
    zoomView: true
  },

  // Must write functions to handle events
  manipulation: { enabled: false, initiallyActive: false },

  physics: { enabled: false }
};


export const GraphEvents = {
  oncontext: (params) => {
    console.log("oncontext Event:", params);
    params.event = "[original event]";
  },

  showPopup: (params) => { },

  hidePopup: () => {
    console.log("hidePopup Event");
  },

  selectNode: (params) => {
    console.log("selectNode Event:", params);
  },

  selectEdge: (params) => {
    console.log("selectEdge Event:", params);
  },

  blurNode: (params) => {
    console.log("blurNode Event:", params);
  },

  blurEdge: (params) => {
    console.log("blurEdge Event:", params);
  },
};


export const GraphManipulation = {
  addNode: (oldGraph, newNode) => {
    // Need better uuid generation
    newNode.id = oldGraph.nodes.length;
    
    const newGraph = {
      nodes:  [...oldGraph.nodes, newNode],
      edges: [...oldGraph.edges]
    };
    return (newGraph);
  },

  removeNode: (oldGraph, removedID) => {
    const newGraph = {
      nodes: oldGraph.nodes.filter(current => current.id !== removedID),
      // Removes all the edges with destination or start the removed node
      edges: oldGraph.edges.filter(current => current.from  !== removedID && current.to  !== removedID)
    }
    return (newGraph);
  }, 

  addEdge: (oldGraph, newEdge) => {
    const newGraph = {
      nodes:  [...oldGraph.nodes],
      edges: [...oldGraph.edges, newEdge]
    };
    return (newGraph);
  }, 

  removeEdge: (oldGraph, removedEdge) => {
    const newGraph = {
      nodes:  [...oldGraph.nodes],
      edges: oldGraph.edges.filter(current => current !== removedEdge)
    }
    return (newGraph);
  }
}


export const DummyData = {
  nodes: [
    { id: 1, label: "Node 1" },
    { id: 2, label: "Node 2" },
    { id: 3, label: "Node 3" },
    { id: 4, label: "Node 4" },
    { id: 5, label: "Node 5" },
  ],

  edges: [
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 3 },
  ],
};