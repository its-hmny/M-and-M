import React, { useState, useEffect } from 'react';
import shortid from 'shortid';

import { useStory } from './story-context';

const importComponent = component =>
  React.lazy(() => {
    console.log(`Importing ./components/${component}`);
    return import(`./components/${component}`).catch(() =>
      console.log(`Unable to load ${component}`)
    )
  });

const cachedComponents = [];

const loadViewHierarchy = async ({ 
  component: componentName, 
  children, 
  ...props 
}) => {
  if (children && typeof children === 'object' && Array.isArray(children)) {
    children = await Promise.all(
      children.map(component => loadViewHierarchy(component))
    );
  }

  if (!cachedComponents[componentName])
    cachedComponents[componentName] = await importComponent(componentName);

  const Component = cachedComponents[componentName];

  return (
    <Component key={`${componentName}-${shortid.generate()}`} {...props}>
      {children}
    </Component>
  );
};

function App() {
  const { currentNode } = useStory();
  const [view, setView] = useState(null);

  useEffect(() => {
    const loadView = async viewObject => {
      try {
        const viewHierarchy = await loadViewHierarchy(viewObject);
        setView(viewHierarchy);
      } catch (err) {
        console.error(
          `An error occured while loading view for ${currentNode.name}: ${err}`
        );
      }
    };

    loadView(currentNode.view);
  }, [currentNode]);

  return (
    <React.Suspense fallback="Loading components...">
      <div>{view}</div>
    </React.Suspense>
  );
}

export default App;