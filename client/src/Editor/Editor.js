import React from "react";
import GraphCanvas from "./components/GraphCanvas";
import Inspector from "./components/Inspector";
import { EditorContextProvider } from "./context/EditorContext";
import ExampleStory from "./constants/ExampleStory";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  InspectorContainer:{
    zIndex: 4,
    backgroundColor: "white",
    height:"25%"
    
  },
  GraphContainer:{
   
  },
  EditorContainer: {
    
    
  },
  
  
});

const Editor = () => {
  const classes = useStyles();

  return (
    <EditorContextProvider userStory={ExampleStory} >
      <Grid container className={classes.EditorContainer}>
        
        <Grid item xs={9}>
          <GraphCanvas className={classes.GraphContainer}/>
        </Grid>

        <Grid className={classes.InspectorContainer} item xs={3} >
          <Inspector  />
        </Grid>
        
      </Grid>
      
      
      
    </EditorContextProvider>
  );
};

export default Editor;