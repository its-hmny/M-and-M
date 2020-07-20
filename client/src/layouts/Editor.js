import React from "react";
import { Grid } from "@material-ui/core";
import GraphCanvas from "../components/GraphCanvas";
import ActivitiesMenu from "../components/ActivitiesMenu";

const Editor = () => {
  return (
    <Grid>
      <ActivitiesMenu />
      <GraphCanvas />
    </Grid>
  );
};

export default Editor;
