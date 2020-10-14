import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Inspector from './components/Inspector';
import Preview from '../common/Preview';
import useStylesStore from './stores/styles';
import useTemplateStore from './stores/template';
import shortid from 'shortid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  smartphone: {
    position: 'relative',
    margin: 'auto',
    border: '2vh black solid',
    borderTopWidth: '5vh',
    borderBottomWidth: '6vh',
    borderRadius: '36px',
    width: 'calc(75vh * 0.5)',
    height: '75vh',
    background: 'white',
    overflowY: 'auto',
  },
}));

function PreviewWrapper() {
  const classes = useStyles();
  const styles = useStylesStore(state => state.styles);
  const components = useTemplateStore(state => state.components);
  return (
    <div className={classes.smartphone}>
      <Preview components={components} styles={styles} />
    </div>
  );
}

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" color="primary">
          Creator
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Inspector />
      </Grid>
      <Grid item xs={6}>
        <PreviewWrapper />
      </Grid>
    </Grid>
  );
}

export default App;
