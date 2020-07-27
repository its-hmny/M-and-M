import React from "react";
import Graph from "vis-network-react";
import { Grid } from "@material-ui/core/"
import { GraphOptions, GraphEvents } from "../constants/GraphPreferences";

const GraphCanvas = (props) => {
  return (
      <Grid item xs={6}>
        <Graph data={props.graph} options={GraphOptions} events={GraphEvents} />
      </Grid>
  );
}

export default GraphCanvas;