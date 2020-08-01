import React from "react";
import { Grid } from "@material-ui/core";
import GraphCanvas from "./components/GraphCanvas";
import ActivitiesMenu from "./components/ActivitiesMenu";
import Inspector from "./components/Inspector";
import { EditorContextProvider } from "./context/EditorContext";
import ExampleStory from "./constants/ExampleStory";

const Editor = () => {
  return (
    <EditorContextProvider userStory={ExampleStory} >
      <Grid container spacing={2} >
        <ActivitiesMenu />
        <GraphCanvas />
        <Inspector />
      </Grid>
    </EditorContextProvider>
  );
};

export default Editor;