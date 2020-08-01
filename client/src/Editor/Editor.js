import React from "react";
import { Grid } from "@material-ui/core";
import GraphCanvas from "./components/GraphCanvas";
import ActivitiesMenu from "./components/ActivitiesMenu";
import { EditorContextProvider } from "./context/EditorContext";
import ExampleStory from "./constants/ExampleStory";

const Editor = () => {
  return (
    <EditorContextProvider userStory={ExampleStory} >
      <Grid container spacing={2} >
        <ActivitiesMenu widgets={["widget1","widget2","widget3","widget4","widget5"]}/>
        <GraphCanvas />
      </Grid>
    </EditorContextProvider>
  );
};

export default Editor;