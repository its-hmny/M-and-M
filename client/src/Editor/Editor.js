import React from "react";
import GraphCanvas from "./components/GraphCanvas";
import Inspector from "./components/Inspector";
import { EditorContextProvider } from "./context/EditorContext";
import ExampleStory from "./constants/ExampleStory";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  InspectorContainerStyle: {
    zIndex: 2,
    position: "absolute",
    marginLeft: "75vw",
    marginTop: 3
  }
});

const Editor = () => {
  const { InspectorContainerStyle } = useStyles();
  
  return (
    <EditorContextProvider userStory={ExampleStory}>

      <Grid item xs={5} className={InspectorContainerStyle}>
        <Inspector />
      </Grid>

      <div id="graphcanvas-container">
        <GraphCanvas />
      </div>
    
    </EditorContextProvider>
  );
};

export default Editor;