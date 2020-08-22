import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Inspector from './components/Inspector';
import Preview from './components/Preview';

function App() {
  const [components, setComponents] = useState([
    {
      name: 'Text',
      id: 'Text01',
      properties: {
        fontFamily: 'serif',
        fontWeight: 'bold',
        backgroundColor: 'pink',
        color: 'black',
      },
    },
    {
      name: 'Button',
      id: 'Button01',
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

  const handleRemoveComponent = id => {
    setComponents([...components.filter(component => component.id != id)]);
  }

  return (
    <Grid container>
      <Grid item xs={6}>
        <Inspector
          components={components}
          onAddComponent={handleAddComponent}
          onRemoveComponent={handleRemoveComponent}
        />
      </Grid>
      <Grid item xs={6}>
        <Preview components={components} />
      </Grid>
    </Grid>
  );
}

export default App;
