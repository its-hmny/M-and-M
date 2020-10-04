import React from 'react';
import { Grid, Typography, Card, CardContent, Slide, makeStyles, Paper } from '@material-ui/core';

import { ActivitiesMenuButton, SettingsColumn, SmartphoneEmulator, GraphCanvas } from './components';
import { useEditor } from './context/EditorContext';

const useStyles = makeStyles(theme => ({
  InspectorContainerStyle: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  SimulatorContainerStyle: {
    zIndex: 2,
    position: 'absolute',
    top: 100,
    left: 15,
  },
}));

const App = () => {
  const { InspectorContainerStyle, SimulatorContainerStyle, paper } = useStyles();
  const { story, workingActivity } = useEditor();
  const currentNode = story.nodes.find(node => node.id === workingActivity);

  return (
    <>
      <ActivitiesMenuButton />

      <Grid item xs={6} className={InspectorContainerStyle}>
        <SettingsColumn />
      </Grid>

      <Grid item xs={3} className={SimulatorContainerStyle}>
        <Slide in={currentNode != null} direction="right">
          <div>{currentNode && <SmartphoneEmulator storyNode={currentNode} />}</div>
        </Slide>
      </Grid>

      <div id="graphcanvas-container">
        <GraphCanvas />
      </div>
    </>
  );
};

export default App;
