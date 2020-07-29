import React, { useContext } from "react";
import Graph from "vis-network-react";
import { Grid } from "@material-ui/core/"
import { GraphOptions, GraphEvents, additionalOptions, GraphManipulation } from "../constants/GraphPreferences";
import EditorContext from "../context/EditorContext"

const GraphCanvas = () => {
  const { story } = useContext(EditorContext);
  const { convertFromStory } = GraphManipulation;

  return (
    <Grid item xs={6}>
      <Graph data={convertFromStory.parseStory(story)} options={GraphOptions} events={GraphEvents} getNetwork={additionalOptions} />
    </Grid>
  );
};

export default GraphCanvas;