import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Inspector from './components/Inspector';
import Preview from '../common/Preview';
import { StylesProvider } from './context/style';
import shortid from 'shortid';

const defaultStyles = {
  'Elements/Text': 'DefaultText',
  'Elements/Button': 'DefaultButton',
};

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

  const onSave = () => {
    // console.log(view);
  };

  return (
    <StylesProvider>
      <Grid container>
        <Grid item xs={6}>
          <Inspector
            components={components}
            onAddComponent={handleAddComponent}
            onRemoveComponent={handleRemoveComponent}
            onUpdateComponent={handleUpdateComponent}
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
