import React from 'react';
import { Grid, Typography, Card, CardContent, makeStyles } from '@material-ui/core';

import { ActivitiesMenuButton, SettingsColumn, ReadOnly, RenderSandbox, GraphCanvas } from './components';
import { useEditor } from './context/EditorContext';

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

const App = () => {
  const { InspectorContainerStyle, SimulatorContainerStyle } = useStyles();
  const { story, workingActivity } = useEditor();
  const currentNode = story.nodes.find(node => node.id === workingActivity);
  console.log(`currentNode: ${workingActivity}`);

  return (
    <>
      <ActivitiesMenuButton />

      <Grid item xs={6} className={InspectorContainerStyle}>
        <SettingsColumn />
      </Grid>

      <Grid item xs={3} className={SimulatorContainerStyle}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              This is still a work in progress...
            </Typography>
            {currentNode && <RenderSandbox components={currentNode.components} />}
          </CardContent>
        </Card>
      </Grid>

      <div id="graphcanvas-container">
        <GraphCanvas />
      </div>
    </>
  );
};

export default App;
