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
      levelSeparation: 100,
      nodeSpacing: 200,
      edgeMinimization: false,
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

  manipulation: { enabled: false, initiallyActive: false },

  physics: { enabled: false },
};

export const getGraphFromStory = story => {
  const graph = { nodes: [], edges: [] };

  story.nodes.forEach(node => {
    graph.nodes = [...graph.nodes, node];
    setEdgesFromChildren(node.components, node.id, graph);
  });

  return graph;
};

const setEdgesFromChildren = (root, rootId, graph) => {
  root.forEach(child => {
    if (child.story && child.story.nextNode) graph.edges = [...graph.edges, { from: rootId, to: child.story.nextNode }];
    else if (child.children instanceof Array) setEdgesFromChildren(child.children, rootId, graph);
  });
};
