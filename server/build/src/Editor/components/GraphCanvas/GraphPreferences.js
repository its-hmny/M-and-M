export const Options = {
  autoResize: true,

  /* Capolavoro d'ingegneria del software, dovrebbe
      essere mostrato ad un museo d'arte */
  width: '100vw',
  height: '100vh',
  configure: {
    enabled: false,

    /* nodes, edges, layout, interaction, manipulation, physics, selection, renderer */
    showButton: false,
  },
  nodes: {
    borderWidth: 2,
    borderWidthSelected: 2.5,
    font: {
      size: 20,
      color: 'white',
      background: 'none',
      align: 'center',
    },
    shape: 'dot',
    size: 20,
    color: 'orange',
  },
  edges: {
    arrows: {
      to: {
        enabled: true,
      },
    },
    color: {
      color: 'white',
      highlight: 'white',
    },
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
    keyboard: {
      enabled: true,
      bindToWindow: false,
    },
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
  physics: {
    enabled: false,
    solver: 'repulsion',
    repulsion: {
      nodeDistance: 400, // Put more distance between the nodes.
    },
  },
};
export const getGraphFromStory = (story) => {
  if (!story)
    return {
      nodes: [],
      edges: [],
    };

  const graph = {
    nodes: [],
    edges: [],
  };

  story.nodes.forEach((node) => {
    graph.nodes = [
      ...graph.nodes,
      { ...node, label: node.name, mission: node.mission },
    ];
    setEdgesFromChildren(node.components, node.id, graph);
  });
  return graph;
};

const setEdgesFromChildren = (root, rootId, graph) => {
  root.forEach((child) => {
    if (child.story && child.story.nextNode) {
      if (typeof child.story.nextNode === 'string') {
        graph.edges = [
          ...graph.edges,
          {
            from: rootId,
            to: child.story.nextNode,
          },
        ];
      } else {
        graph.edges = [
          ...graph.edges,
          {
            from: rootId,
            to: child.story.nextNode['[CORRECT]'],
          },
          {
            from: rootId,
            to: child.story.nextNode['[WRONG]'],
          },
        ];
      }
    } else if (child.children instanceof Array)
      setEdgesFromChildren(child.children, rootId, graph);
  });
};

export const highlightPath = (graph, path) => {
  const touchedNodes = path.map((node) => node.activityNodeId); // Al the reached node became triangles

  graph.nodes.forEach((node) => {
    if (touchedNodes.find((id) => id === node.id)) node.shape = 'hexagon';
    else node.shape = 'dot';
  }); // Edge highlighting part

  graph.edges.forEach((edge) => (edge.color = '#ffffff')); // Resets to default

  for (let prev = 0, next = 1; next < touchedNodes.length; prev++, next++) {
    const edgeToHighlight = graph.edges.find(
      (edge) =>
        edge.from === touchedNodes[prev] && edge.to === touchedNodes[next],
    );

    if (edgeToHighlight) edgeToHighlight.color = 'black';
  }

  return graph;
};
export const makeClusters = (network) => {
  const missions = getMissions(network);

  if (missions.length !== 0) {
    missions.forEach((mission) => {
      const options = {
        joinCondition: (currentNodeOptions) => {
          if (currentNodeOptions.mission === undefined) {
            return false;
          } else return currentNodeOptions.mission === mission;
        },
        clusterNodeProperties: {
          id: mission,
          font: {
            color: 'black',
            size: '40',
          },
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
export const openClusters = (network) => {
  const missions = getMissions(network);

  missions.forEach((mission) => {
    if (network.isCluster(mission)) {
      network.openCluster(mission, {
        releaseFunction: (clusterPosition, containedNodesPositions) => {
          return containedNodesPositions;
        },
      });
    }
  });

  if (network.isCluster(undefined)) {
    network.openCluster(undefined, {
      releaseFunction: (clusterPosition, containedNodesPositions) => {
        return containedNodesPositions;
      },
    });
  }
};

const getMissions = (network) => {
  const missions = [];
  /*Populating mission database 
    (there isn't a central db because it wasn't necessary)
  */
  //Getting node data we set from network.body.nodes[i].options

  if (network !== undefined) {
    network.body.data.nodes.forEach((node) => {
      if (!missions.includes(node.mission)) {
        missions.push(node.mission);
      }
    });
  }

  return missions;
};

export const cleanClusterEdges = (network, missions) => {
  if (network !== undefined) {
    Object.entries(network.body.edges).forEach(([key, edge]) => {
      if (
        key.includes('clusterEdge') &&
        (!missions.includes(edge.toId) || !missions.includes(edge.fromId))
      ) {
        edge.options.hidden = true;
      }
    });
  }
};
