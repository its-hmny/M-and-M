import React, { useEffect } from "react";
import Graph from "vis-network-react";
import { Grid } from "@material-ui/core/"
import { GraphOptions, GraphEvents, additionalOptions, DummyData } from "../constants/GraphPreferences";


const GraphCanvas = () => {
    
    return (
        <Grid item xs={6}>
          <Graph id="network" data={DummyData} options={GraphOptions} events={GraphEvents} getNetwork={additionalOptions}/>
          
        </Grid>
    );
}

export default GraphCanvas;