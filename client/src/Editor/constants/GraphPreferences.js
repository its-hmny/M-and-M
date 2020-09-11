
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

export const Converter = {
  getGraphFromStory: function (story) {
    const graph = { nodes: [], edges: [] };

    story.nodes.forEach(node => {
      graph.nodes = [...graph.nodes, node];
      this.setEdgesFromChildrens(node.view.children, node.id, graph);
    });

    return graph;
  },

  setEdgesFromChildrens: function (root, root_id, graph) {
    root.forEach(child => {
      if (child.to !== undefined)
        graph.edges = [...graph.edges, { from: root_id, to: child.to }];
        
      else if (child.children instanceof Array)
        this.setEdgesFromChildrens(child.children, root_id, graph);
    });
  },
};
