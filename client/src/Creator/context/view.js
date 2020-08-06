import React, { useContext, useState } from 'react';

const ViewContext = React.createContext();

function ViewProvider({ children }) {
  const [view, setView] = useState();

  function addComponent(component) {
    setView({
      children: [component],
    });
  }

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
}

function useView() {
  const view = useContext(ViewContext);
  if (view == null) throw new Error('yo wtf did you even type ViewProvider??');

  return view;
}

export { ViewProvider, useView };
