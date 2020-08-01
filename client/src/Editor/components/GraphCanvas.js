import React, { useContext } from "react";
import Graph from "vis-network-react";
import { Grid } from "@material-ui/core/"
import { Options, additionalOptions, Utility } from "../constants/GraphPreferences";
import EditorContext from "../context/EditorContext"

const GraphCanvas = () => {
  const { story, setWorkingActivity } = useContext(EditorContext);
  const { converter } = Utility;
  
  const selectNode = (event) => setWorkingActivity(event.nodes[0]);
  const deselectNode = (event) => setWorkingActivity(undefined);

  return (
    <Grid item xs={6}>
      <Graph 
        data={converter.getGraphFromStory(story)}  
        options={Options} events={{selectNode, deselectNode}} 
        getNetwork={additionalOptions} 
      />
    </Grid>
  );
};

export default GraphCanvas;