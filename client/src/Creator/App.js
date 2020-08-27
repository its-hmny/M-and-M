import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Inspector from './components/Inspector';
import Preview from './components/Preview';
import {useView} from './context/view';

function App() {
  const [view, addComponent, removeComponent] = useView();

  return (
    <Grid container>
      <Grid item xs={6}>
        <Inspector
          components={view}
          onAddComponent={addComponent}
          onRemoveComponent={removeComponent}
        />
      </Grid>
      <Grid item xs={6}>
        <Preview components={view} />
      </Grid>
    </Grid>
  );
}

export default App;
