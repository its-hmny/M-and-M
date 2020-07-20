export const GraphOptions = {
    autoResize: true,
    height: '500',
    width: '100%',
    
    configure: {
        enabled: true,
        filter: "manipulation",
        /* nodes, edges, layout, interaction, manipulation, physics, selection, renderer */
        showButton: true
    },
    
    edges: {
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

        font: { size: 15, color: "white", background: "none", align: "center"},
        
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
    //manipulation: {},
    
    physics: { enabled: false }
};

export const GraphEvents = {
    select: function (event) {
      //let { nodes, edges } = event;
    },
  };