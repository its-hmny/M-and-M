export const GraphOptions = {
    autoResize: true,
    height: '500',
    width: '100%',

    configure: {
        enabled: false,
        filter: "manipulation",
        /* nodes, edges, layout, interaction, manipulation, physics, selection, renderer */
        showButton: true
    },
    
    edges: {
        arrows: { to: {enabled: true}},

        color: { color:'black', highlight:'red' },

        // Width for every sistuations
        width: 2,
        hoverWidth: 2.5,
        selectionWidth: 2.5,

        // Smoothness option of the edges
        smooth: { enabled: true, type: "dynamic", roundness: 0.7 }
    },

    nodes: {
        borderWidth: 2,
        borderWidthSelected: 2.5,
        
        color: {
            border: "darkorange",
            background: "orange",
            highlight: { border: "black", background: "orange" }
        },

        font: { size: 15, color: "black", background: "none", align: "center"},
        
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
            parentCentralization: true,
        }
    },
    
    interaction: {
        dragNodes: true,
        dragView: true,
        hover: false,
        keyboard: {enabled: true, bindToWindow: false},
        selectable:true,
        multiselect: true,
        navigationButtons: true,
        zoomView: true
    },

    // Must write functions to haandle events
    manipulation: { enabled: true, initiallyActive: true},
    
    physics: { enabled: false }
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

      zoom: (params) => {},

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