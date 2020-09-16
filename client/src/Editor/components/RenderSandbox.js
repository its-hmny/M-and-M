import React, { useState, useEffect, useContext } from 'react';
import EditorContext from '../context/EditorContext';
import shortid from 'shortid';

const cachedComponents = [];

const importComponent = async component =>
  React.lazy(() => import(`../../common/${component}`).catch(() => console.log(`Unable to load ${component}`)));

const loadViewHierarchy = async ({ component: componentName, children, ...props }) => {
  if (children && typeof children === 'object' && Array.isArray(children))
    children = await Promise.all(children.map(component => loadViewHierarchy(component)));

  if (!cachedComponents[componentName]) cachedComponents[componentName] = await importComponent(componentName);

  const Component = cachedComponents[componentName];

  return (
    <Component key={`${componentName}-${shortid.generate()}`} {...props}>
      {children}
    </Component>
  );
};

const RenderSanbox = props => {
  let { component } = props;
  const { story, workingActivity } = useContext(EditorContext);
  component = component || story.nodes[workingActivity];
  const [view, setView] = useState(null);

  useEffect(() => {
    if (component === undefined) {
      setView(<h5>Select an element and here will appear the preview</h5>);
      return;
    }

    const loadView = async viewObject => {
      try {
        const viewHierarchy = await loadViewHierarchy(viewObject);
        setView(viewHierarchy);
      } catch (err) {
        console.error(`An error occured while loading view for ${component.name}: ${err}`);
      }
    };

    loadView(component.view);
  }, [component]);

  return (
    <React.Suspense fallback={<h5>Loading components...</h5>}>
      <div>{view}</div>
    </React.Suspense>
  );
};

export default RenderSanbox;
