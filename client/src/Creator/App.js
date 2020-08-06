import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Inspector from './components/Inspector';
import Preview from './components/Preview';

function App() {
  const [components, setComponents] = useState([
    {
      name: 'Text',
      properties: {
        fontFamily: 'serif',
        fontWeight: 'bold',
        backgroundColor: 'pink',
        color: 'black',
      },
    },
    {
      name: 'Button',
      properties: {
        fontFamily: 'sans-serif',
        backgroundColor: 'red',
        color: 'black',
      },
    },
  ]);

  const handleAddComponent = component => {
    setComponents([...components, component]);
  };

  return (
    <Grid container>
      <Grid item xs={6}>
        <Inspector
          components={components}
          onAddComponent={handleAddComponent}
        />
      </Grid>
      <Grid item xs={6}>
        <Preview components={components} />
      </Grid>
    </Grid>
  );
}

export default App;
