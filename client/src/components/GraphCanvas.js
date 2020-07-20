import React from "react";
import Graph from "vis-network-react";
import { Grid } from "@material-ui/core/"
import { GraphOptions, GraphEvents, DummyData } from "../constants/GraphPreferences";

let graph_uuid = 0;

const GraphCanvas = () => {
    return (
        <Grid container item xs={4}>
          <Graph key={graph_uuid} data={DummyData} options={GraphOptions} events={GraphEvents} />
        </Grid>
    );
}

export default GraphCanvas;