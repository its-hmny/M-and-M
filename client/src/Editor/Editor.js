import React from 'react';
import GraphCanvas from './components/GraphCanvas';
import Inspector from './components/Inspector';
import { EditorContextProvider } from './context/EditorContext';
import ExampleStory from './constants/ExampleStory';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import ReadOnly from './components/ReadOnly';
import RenderSandbox from './components/RenderSandbox';
import shortid from 'shortid';
const useStyles = makeStyles({
  InspectorContainerStyle: {
    zIndex: 2,
    position: 'absolute',
    marginLeft: '75vw',
    marginTop: 3,
  },

  SimulatorContainerStyle: {
    zIndex: 2,
    position: 'absolute',
    marginLeft: 15,
    marginTop: 100,
  },
});

const Editor = () => {
  const { InspectorContainerStyle, SimulatorContainerStyle } = useStyles();

  return (
    <EditorContextProvider userStory={ExampleStory}>
      <Grid item xs={6} className={InspectorContainerStyle}>
        <Inspector />
      </Grid>

      <Grid item xs={3} className={SimulatorContainerStyle}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              This is still a work in progress...
            </Typography>
            <ReadOnly>{/* {<RenderSandbox />} */}</ReadOnly>
          </CardContent>
        </Card>
      </Grid>

      <div id="graphcanvas-container">
        <GraphCanvas />
      </div>
    </EditorContextProvider>
  );
};

export default Editor;
