import React from "react";
import { Grid } from "@material-ui/core";
import GraphCanvas from "./components/GraphCanvas";
import ActivitiesMenu from "./components/ActivitiesMenu";
import { EditorContextProvider } from "./context/EditorContext";
import ExampleStory from "./constants/ExampleStory";

const Editor = () => {
  return (
    <EditorContextProvider userStory={ExampleStory} >
      
        
        <GraphCanvas />
      
    </EditorContextProvider>
  );
};

export default Editor;