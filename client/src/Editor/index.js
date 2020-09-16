import React from 'react';
import { Grid, Typography, Card, CardContent, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Inspector, ReadOnly, RenderSandbox, GraphCanvas } from './components/';
import { EditorContextProvider } from './context/EditorContext';
import { blue, pink } from '@material-ui/core/colors';
import ExampleStory from './constants/ExampleStory';

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
  const customTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: pink,
      secondary: blue,
    },
  });

  const { InspectorContainerStyle, SimulatorContainerStyle } = useStyles();

  return (
    <>
      <ThemeProvider theme={customTheme}>
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
                <ReadOnly>
                  <RenderSandbox />
                </ReadOnly>
              </CardContent>
            </Card>
          </Grid>

          <div id="graphcanvas-container">
            <GraphCanvas />
          </div>
        </EditorContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
