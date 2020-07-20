import React from "react";
import Graph from "react-graph-vis";
import { Grid } from "@material-ui/core/"
import { GraphOptions, GraphEvents } from "../constants/GraphPreferences";

let graph_uuid = 0;

const GraphCanvas = () => {
    const GraphTest = <Graph key={graph_uuid} graph={{ nodes: [], edges: [] }} options={GraphOptions} events={GraphEvents} />
    
    console.log(GraphTest)
    
    return (
        <Grid container item xs={6}>
            {GraphTest}
        </Grid>
    );
}

export default GraphCanvas;