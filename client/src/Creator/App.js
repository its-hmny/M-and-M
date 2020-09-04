import React, { useCallback, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Inspector from './components/Inspector';
import Preview from './components/Preview';
import { StylesProvider } from '../Player/context/styles';
import shortid from 'shortid';

const StylesContext = React.createContext();
const StylesDispatchContext = React.createContext();

const initialState = {
  SpaceButton: {
    fontFamily: 'Arial',
    backgroundColor: 'blue',
    color: 'white',
  },
  SubmarineButton: {
    fontFamily: 'Arial',
    backgroundColor: 'aqua',
    color: 'white',
  },
};

const stylesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_STYLE':
      return { ...state.styles, [`Style-${shortid.generate()}`]: action.style };
    case 'UPDATE_STYLE':
      return { ...state.styles, [action.styleId]: action.style };
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
};

const StylesProvider = ({ children }) => {
  const [styles, dispatch] = useReducer(stylesReducer, initialState);

  return (
    <StylesContext.Provider value={styles}>
      <StylesDispatchContext.Provider value={dispatch}>
        {children}
      </StylesDispatchContext.Provider>
    </StylesContext.Provider>
  );
};

export const useStyle = styleId => {
  const styles = useContext(StylesContext);
  const dispatch = useContext(StylesDispatchContext);
  if (styles == null || dispatch == null) {
    throw new Error('useStyle must be used inside a StylesProvider');
  }

  if (!styles[styleId]) {
    throw new Error(`Unknown style with id ${styleId}`);
  }

  return { style: styles[styleId], dispatch };
};

function App() {
  const [view, setView] = useState({
    component: 'View',
    children: [
      {
        id: 'Text01',
        component: 'Elements/Text',
        text: 'Di che colore è il cavallo bianco di Napoleone?',
      },
      // {
      //   id: 'ButtonGroup01',
      //   component: 'Elements/ButtonGroup',
      //   children: [
      //     {
      //       id: 'Button01',
      //       component: 'Elements/Button',
      //       text: 'Some Button inside ButtonGroup',
      //       styleName: 'SpaceButton',
      //     },
      //   ],
      // },
    ],
  });

  const addComponent = component => {
    setView([...view, component]);
  };

  const removeComponent = id => {
    setView([...view.filter(component => component.id !== id)]);
  };

  return (
    <StylesProvider>
      <Grid container>
        <Grid item xs={6}>
          <Inspector
            view={view}
            setView={setView}
            styles={styles}
            onAddComponent={addComponent}
            onRemoveComponent={removeComponent}
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
