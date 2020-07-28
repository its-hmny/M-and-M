import React from "react";
import { Grid } from "@material-ui/core";
import GraphCanvas from "../components/GraphCanvas";
import ActivitiesMenu from "../components/ActivitiesMenu";
import { EditorContextProvider } from "../context/EditorContext"
import mockstory from "../stories/mockstory.json"

const Editor = () => {
  return (
    <EditorContextProvider userStory={mockstory} >
      <Grid container spacing={2} >
        <ActivitiesMenu />
        <GraphCanvas />
      </Grid>
    </EditorContextProvider>
  );
};

export default Editor;