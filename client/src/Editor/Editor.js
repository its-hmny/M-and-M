import React from "react";
import { Grid } from "@material-ui/core";
import GraphCanvas from "./components/GraphCanvas";
import ActivitiesMenu from "./components/ActivitiesMenu";
import { EditorContextProvider } from "./context/EditorContext"

const Editor = () => {
  return (
    <EditorContextProvider userStory={{title: "Test"}} >
      <Grid container spacing={2} >
        <ActivitiesMenu />
        <GraphCanvas />
      </Grid>
    </EditorContextProvider>
  );
};

export default Editor;