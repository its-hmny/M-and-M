let lastClusterZoomLevel = 0;
let clusterFactor = 0.9;
let network = null;

//TODO unisci le seguenti variabili in un unico oggetto
let colors = [];
let groups = ["event1", "event2", "event3"];
let clusters = [];

export const GraphOptions = {
  autoResize: true,
  height: "500",
  width: "100%",

  configure: {
    enabled: false,
    filter: "manipulation",
    /* nodes, edges, layout, interaction, manipulation, physics, selection, renderer */
    showButton: false,
  },

  nodes: {
    borderWidth: 2,
    borderWidthSelected: 2.5,

    font: {
      size: 15,
      color: "black",
      background: "none",
      align: "center",
    },

    shape: "dot",
    size: 20,
  },
  groups: {
    event1: {
      color: {
        border: "darkorange",
        background: "orange",
        highlight: { border: "black", background: "orange" },
      },
    },
    event2: {
      color: {
        border: "darkblue",
        background: "blue",
        highlight: { border: "black", background: "blue" },
      },
    },
    event3: {
      color: {
        border: "darkgreen",
        background: "green",
        highlight: { border: "black", background: "green" },
      },
    },
  },

  layout: {
    improvedLayout: false,

    hierarchical: {
      enabled: true,
      direction: "LR",
      levelSeparation: 100,
      nodeSpacing: 200,
      edgeMinimization: false,
      parentCentralization: false,
      //shakeTowards: "roots"
    },
  },

  interaction: {
    dragNodes: true,
    dragView: true,
    hover: false,
    keyboard: { enabled: true, bindToWindow: false },
    selectable: true,
    multiselect: true,
    navigationButtons: false,
    zoomView: true,
  },

  // Must write functions to handle events
  manipulation: { enabled: false, initiallyActive: false },

  physics: { enabled: false },
};


export const GraphEvents = {
  click: (params) => {
    params.event = "[original event]";
    console.log("click event, getNodeAt returns: ");
  },

  doubleClick: (params) => {
    console.log("doubleClick Event:", params);
    params.event = "[original event]";
  },

  oncontext: (params) => {
    console.log("oncontext Event:", params);
    params.event = "[original event]";
  },

  dragStart: (params) => {
    // There's no point in displaying this event on screen, it gets immediately overwritten
    params.event = "[original event]";
    console.log("dragStart Event:", params);
    console.log("dragStart event, getNodeAt returns: ");
  },

  dragging: (params) => {
    params.event = "[original event]";
  },

  dragEnd: (params) => {
    params.event = "[original event]";
    console.log("dragEnd Event:", params);
    console.log("dragEnd event, getNodeAt returns: ");
  },

  controlNodeDragging: (params) => {
    params.event = "[original event]";
  },

  controlNodeDragEnd: (params) => {
    params.event = "[original event]";
    console.log("controlNodeDragEnd Event:", params);
  },

  zoom: (params) => {
    //Stiamo allontanando la visuale
    if (params.direction === "-") {
      if (params.scale < lastClusterZoomLevel * clusterFactor) {
        makeClusters(params.scale);
        lastClusterZoomLevel = params.scale;
      }
    } else {
      openClusters(params.scale);
    }
  },

  showPopup: (params) => {},

  hidePopup: () => {
    console.log("hidePopup Event");
  },

  select: (params) => {
    console.log("select Event:", params);
  },

  selectNode: (params) => {
    console.log("selectNode Event:", params);
  },

  selectEdge: (params) => {
    console.log("selectEdge Event:", params);
  },

  deselectNode: (params) => {
    console.log("deselectNode Event:", params);
  },

  deselectEdge: (params) => {
    console.log("deselectEdge Event:", params);
  },

  hoverNode: (params) => {
    console.log("hoverNode Event:", params);
  },

  hoverEdge: (params) => {
    console.log("hoverEdge Event:", params);
  },

  blurNode: (params) => {
    console.log("blurNode Event:", params);
  },

  blurEdge: (params) => {
    console.log("blurEdge Event:", params);
  },
};


export const DummyData = {
  nodes: [
    { id: 1, label: "Evento 1", group: groups[0] },
    { id: 2, label: "Domanda", group: groups[0], shape: "square" },
    { id: 3, label: "Domanda", group: groups[0], shape: "square" },
    { id: 4, label: "Domanda", group: groups[0], shape: "square" },
    { id: 5, label: "Evento 2", group: groups[1] },
    { id: 6, label: "Domanda", group: groups[1], shape: "square" },
    { id: 7, label: "Domanda", group: groups[1], shape: "square" },
    { id: 8, label: "Evento 3", group: groups[2] },
    { id: 9, label: "Domanda", group: groups[2], shape: "square" },
    { id: 10, label: "Domanda", group: groups[2], shape: "square" },
    { id: 11, label: "Domanda", group: groups[2], shape: "square" },
    { id: 12, label: "Domanda", group: groups[2], shape: "square" },
  ],
  edges: [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 5, to: 6 },
    { from: 5, to: 7 },
    { from: 8, to: 9 },
    { from: 8, to: 10 },
    { from: 8, to: 11 },
    { from: 8, to: 12 },
    { from: 2, to: 5 },
    { from: 4, to: 5 },
    { from: 3, to: 8 },
  ],
};


export const GraphManipulation = {
  addNode: (oldGraph, newNode) => {
    // Need better uuid generation
    newNode.id = oldGraph.nodes.length;

    const newGraph = {
      nodes: [...oldGraph.nodes, newNode],
      edges: [...oldGraph.edges],
    };
    return newGraph;
  },

  removeNode: (oldGraph, removedID) => {
    const newGraph = {
      nodes: oldGraph.nodes.filter((current) => current.id !== removedID),
      // Removes all the edges with destination or start the removed node
      edges: oldGraph.edges.filter(
        (current) => current.from !== removedID && current.to !== removedID
      ),
    };
    return newGraph;
  },

  addEdge: (oldGraph, newEdge) => {
    const newGraph = {
      nodes: [...oldGraph.nodes],
      edges: [...oldGraph.edges, newEdge],
    };
    return newGraph;
  },

  removeEdge: (oldGraph, removedEdge) => {
    const newGraph = {
      nodes: [...oldGraph.nodes],
      edges: oldGraph.edges.filter((current) => current !== removedEdge),
    };
    return newGraph;
  },
};

/*Funzione che permette di accedere al network interno della componente react
  attraverso la prop (non documentata) getNetwork */
export const additionalOptions = (currentNetwork) => {
  //Impostiamo lo zoomlevel iniziale
  currentNetwork.once("initRedraw", () => {
    if (lastClusterZoomLevel === 0) 
      lastClusterZoomLevel = currentnetwork.getScale();
  });

  network = currentNetwork;

  //Popoliamo automaticamente le variabili globali
  //TODO scrivere le opzioni a partire dalle variabili globali e non viceversa
  for (let group in GraphOptions.groups) 
    colors.push(GraphOptions.groups[group].color);
};

function makeClusters(scale) {
  for (let i in groups) {
    clusters[i] = { id: "cluster:" + i, scale: scale };
    let clusterOption = {
      joinCondition: (childOptions) => { return childOptions.group === groups[i] },
      
      clusterNodeProperties: {
        id: "cluster:" + i,
        borderWidth: 4,
        shape: "database",
        color: colors[i],
        label: groups[i],
      }
    };

    network.clustering.cluster(clusterOption);
  }
}

function openClusters(scale) {
  let newClusters = [];
  let declustered = false;
  for (let i = 0; i < clusters.length; i++) {
    
    if (clusters[i].scale < scale) {
      network.openCluster(clusters[i].id);
      lastClusterZoomLevel = scale;
      declustered = true;
    } 
    
    else 
      newClusters.push(clusters[i]);
  }
  
  clusters = newClusters;
}