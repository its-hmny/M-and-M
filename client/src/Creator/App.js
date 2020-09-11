import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Inspector from './components/Inspector';
import Preview from './components/Preview';
import { StylesProvider } from './context/style';
import shortid from 'shortid';

const defaultStyles = {
  'Elements/Text': 'DefaultText',
  'Elements/Button': 'DefaultButton',
};

function App() {
  console.log('app renders');
  const [view, setView] = useState({
    component: 'View',
    children: [
      {
        id: 'Text01',
        component: 'Elements/Text',
        text: 'Di che colore è il cavallo bianco di Napoleone?',
        styleName: 'DefaultText',
      },
      {
        id: 'Button01',
        component: 'Elements/Button',
        text: 'Some Button inside ButtonGroup',
        styleName: 'DefaultButton',
      },
      // {
      //   id: 'ButtonGroup01',
      //   component: 'Elements/ButtonGroup',
      //   children: [

      //   ],
      // },
    ],
  });

  const addComponent = component => {
    const children = view.children;
    children.push({
      id: shortid.generate(),
      component,
      text: 'Lorem ipsum dolor sit amet',
      styleName: defaultStyles[component],
    });
    setView({ ...view, children });
  };

  // receives component id and property to change
  const updateComponent = (componentId, updatedProp) => {
    let component = view.children.find(
      component => component.id === componentId
    );
    component = { ...component, ...updatedProp };
    setView({
      ...view,
      children: view.children.map(child =>
        child.id === component.id ? component : child
      ),
    });
    console.log('update component');
  };

  const removeComponent = id => {
    setView({
      ...view,
      children: view.children.filter(component => component.id !== id),
    });
  };

  return (
    <StylesProvider>
      <Grid container>
        <Grid item xs={6}>
          <Inspector
            view={view}
            setView={setView}
            onAddComponent={addComponent}
            onRemoveComponent={removeComponent}
            updateComponent={updateComponent}
          />
        </Grid>
        <Grid item xs={6}>
          <Preview view={view} />
        </Grid>
      </Grid>
    </StylesProvider>
  );
}

export default App;
