import React, { useContext, useState } from 'react';

const ViewContext = React.createContext();

function ViewProvider({ children }) {
  const [view, setView] = useState([
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

  const addComponent = component => {
    setView([...view, component]);
  };

  const removeComponent = id => {
    setView([...view.filter(component => component.id !== id)]);
  };

  return (
    <ViewContext.Provider value={{ view, addComponent, removeComponent }}>
      {children}
    </ViewContext.Provider>
  );
}

function useView() {
  const { view, addComponent, removeComponent } = useContext(ViewContext);
  if (view == null) throw new Error('yo wtf did you even type ViewProvider??');

  return [view, addComponent, removeComponent];
}

export { ViewProvider, useView };
