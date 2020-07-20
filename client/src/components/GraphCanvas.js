import React from "react";
import Graph from "vis-network-react";
import { Grid } from "@material-ui/core/"
import { GraphOptions, GraphEvents, DummyData } from "../constants/GraphPreferences";

const GraphCanvas = () => {
    return (
        <Grid item xs={6}>
          <Graph data={DummyData} options={GraphOptions} events={GraphEvents} />
        </Grid>
    );
}

export default GraphCanvas;