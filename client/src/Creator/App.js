import React, { useState } from 'react';
import {
  Grid,
  Typography,
}
  from '@material-ui/core';
import Inspector from './components/Inspector';
import Preview from '../common/Preview';
import { StylesProvider } from './style';
import shortid from 'shortid';

function App() {
  const [components, setComponents] = useState([
    {
      id: shortid.generate(),
      name: 'Text',
      text: 'Di che colore è il cavallo bianco di Napoleone?',
      styleId: 'DefaultText',
    },
    {
      id: shortid.generate(),
      name: 'Button',
      text: 'Some Button inside ButtonGroup',
      styleId: 'DefaultButton',
    },
    {
      id: shortid.generate(),
      name: 'ButtonGroup',
      children: [
        {
          id: shortid.generate(),
          name: 'Button',
          text: 'Ritenta',
          styleId: 'DefaultButton',
        },
        {
          id: shortid.generate(),
          name: 'Button',
          text: 'Abbandona',
          styleId: 'DefaultButton',
        },
      ],
    },
    // {
    //   id: shortid.generate(),
    //   name: 'ButtonGroup',
    //   children: [
    //     {
    //       id: shortid.generate(),
    //       name: 'Button',
    //       text: 'Some Button inside ButtonGroup',
    //       styleId: 'DefaultButton',
    //     },
    //     {
    //       id: shortid.generate(),
    //       name: 'Button',
    //       text: 'Some Button inside ButtonGroup',
    //       styleId: 'DefaultButton',
    //     },
    //   ],
    // },
  ]);

  const handleAddComponent = componentName => {
    const newComponent = {
      id: shortid.generate(),
      name: componentName,
      text: 'Lorem ipsum dolor sit amet',
      styleId: `Default${componentName}`,
    };
    setComponents(components => [...components, newComponent]);
  };

  // receives component id and property to change
  const handleUpdateComponent = (updatedId, update) => {
    setComponents(components =>
      components.map(component => (component.id === updatedId ? { ...component, ...update } : component))
    );
  };

  const handleRemoveComponent = removedId => {
    setComponents(components => components.filter(component => component.id !== removedId));
  };

  const handleReorderComponents = components => {
    setComponents(components);
  };

  const onSave = () => {
    // console.log(view);
  };

  return (
    <StylesProvider>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" color="primary">
            Creator
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Inspector
            components={components}
            onAddComponent={handleAddComponent}
            onRemoveComponent={handleRemoveComponent}
            onUpdateComponent={handleUpdateComponent}
            onReorderComponents={handleReorderComponents}
            onSave={onSave}
          />
        </Grid>
        <Grid item xs={6}>
          <Preview components={components} />
        </Grid>
      </Grid>
    </StylesProvider>
  );
}

export default App;
