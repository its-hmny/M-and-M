import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Inspector from './components/Inspector';
import Preview from '../common/Preview';
import useStylesStore from './stores/styles';
import useTemplateStore from './stores/template';
import shortid from 'shortid';

function PreviewWrapper() {
  const styles = useStylesStore(state => state.styles);
  const components = useTemplateStore(state => state.components);
  return <Preview components={components} styles={styles} />;
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
