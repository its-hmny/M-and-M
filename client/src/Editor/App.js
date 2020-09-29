import React from 'react';
import { Grid, Typography, Card, CardContent, makeStyles } from '@material-ui/core';

import { ActivitiesMenuButton, SettingsColumn, SmartphoneEmulator, GraphCanvas } from './components';
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
            {
              currentNode ?  
                (<SmartphoneEmulator storyNode={currentNode} />) :
                (<Typography variant="h5" component="h2">
                  Select a node to see its preview
                </Typography>)
            }
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
