export const Options = {
  autoResize: true,
  height: '100vh',
  width: '100vw',

  configure: {
    enabled: false,
    filter: 'manipulation',
    /* nodes, edges, layout, interaction, manipulation, physics, selection, renderer */
    showButton: false,
  },

  nodes: {
    borderWidth: 2,
    borderWidthSelected: 2.5,

    font: {
      size: 15,
      color: 'white',
      background: 'none',
      align: 'center',
    },

    shape: 'dot',
    size: 20,
    color: 'orange',
  },

  edges: {
    arrows: { to: { enabled: true } },
    color: { color: 'white', highlight: 'white' },
  },

  layout: {
    improvedLayout: true,

    hierarchical: {
      enabled: false,
      direction: 'LR',
      levelSeparation: 150,
      nodeSpacing: 100,
      edgeMinimization: true,
      parentCentralization: false,
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

  manipulation: {
    enabled: false,
    initiallyActive: false,
    addEdge: (edgeData, callback) => {
      if (edgeData.from !== edgeData.to) {
        var r = window.confirm('Do you want to connect the node to itself?');
        if (r === true) callback(edgeData);
      }
    },
  },

  physics: { enabled: false },
};

export const getGraphFromStory = story => {
  if (!story) return { nodes: [], edges: [] };

  const graph = { nodes: [], edges: [] };

  story.nodes.forEach(node => {
    graph.nodes = [...graph.nodes, { ...node, label: node.name, mission: node.mission }];
    setEdgesFromChildren(node.components, node.id, graph);
  });

  return graph;
};

const setEdgesFromChildren = (root, rootId, graph) => {
  root.forEach(child => {
    if (child.story && child.story.nextNode)
      graph.edges = [...graph.edges, { from: rootId, to: child.story.nextNode }];
    else if (child.children instanceof Array)
      setEdgesFromChildren(child.children, rootId, graph);
  });
};

export const makeClusters = network => {
  const missions = getMissions(network);
  if (missions.length === 0) {
    missions.forEach(mission => {
      const options = {
        joinCondition: currentNodeOptions => {
          return currentNodeOptions.mission === mission;
        },
        clusterNodeProperties: {
          id: mission,
          borderWidth: 3,
          shape: 'database',
          label: mission,
          allowSingleNodeCluster: true,
        },
        clusterEdgeProperties: {},
      };
      network.clustering.cluster(options);
    });
  }

  return missions;
};

export const openClusters = network => {
  const missions = getMissions(network);

  missions.forEach(mission => {
    if (network.isCluster(mission)) {
      network.openCluster(mission, {
        releaseFunction: (clusterPosition, containedNodesPositions) => {
          return containedNodesPositions;
        },
      });
    }
  });
};

const getMissions = network => {
  var missions = [];
  /*Populating mission database 
    (there isn't a central db because it wasn't necessary)
  */
  //Getting node data we set from network.body.nodes[i].options
  if (network !== undefined) {
    network.body.data.nodes.forEach(node => {
      if (!missions.includes(node.mission)) {
        missions.push(node.mission);
      }
    });
  }

  return missions;
};

export const cleanClusterEdges = (network, missions) => {
  if (network !== undefined) {
    for (const [key, edge] of Object.entries(network.body.edges)) {
      if (key.includes('clusterEdge')) {
        if (!missions.includes(edge.toId)) {
          edge.options.hidden = true;
        }
      }
    }
  }
};
