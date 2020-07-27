import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import GraphCanvas from "../components/GraphCanvas";
import ActivitiesMenu from "../components/ActivitiesMenu";

const Editor = () => {
  const [GraphData, setGraphData] = useState( {nodes: [], edges: []} );

  const updateGraph = (updateFunction, arg) => {
    const updatedGraph = updateFunction(GraphData, arg);
    setGraphData(updatedGraph);
  };

  return (
    <Grid container spacing={2} >
      <ActivitiesMenu renderNewState={updateGraph} />
      <GraphCanvas graph={GraphData} />
    </Grid>
  );
};

export default Editor;