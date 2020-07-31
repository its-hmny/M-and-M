import React, { useContext } from "react";
import Graph from "vis-network-react";
import { Grid } from "@material-ui/core/"
import { Options, EventHandlers, additionalOptions, Utility } from "../constants/GraphPreferences";
import EditorContext from "../context/EditorContext"

const GraphCanvas = () => {
  const { story, setWorkngActivity } = useContext(EditorContext);
  const { converter } = Utility;
  EventHandlers.setFocusedNode = function (focusedNodeID) { setWorkngActivity(focusedNodeID); }

  return (
    <Grid item xs={6}>
      <Graph 
        data={converter.getGraphFromStory(story)}  
        options={Options} events={EventHandlers} 
        getNetwork={additionalOptions} 
      />
    </Grid>
  );
};

export default GraphCanvas;