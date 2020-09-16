import React, { useState, useEffect, useContext } from 'react';
import EditorContext from '../context/EditorContext';
import shortid from 'shortid';

const cachedComponents = [];
var cachedValues = [];
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

  const renderView = component => {
    if (component === undefined) {
      setView(<h1>Select an element and here will appear the preview</h1>);
      return;
    } else {
      cachedValues[component.name] = JSON.stringify(component.view.children);
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
  };

  useEffect(() => {
    renderView(component);
  }, [component]);

  //Controlla se è stato modificato un campo, se lo è stato allora rirenderizza la view
  if (component !== undefined && cachedValues[component.name] !== undefined) {
    if (JSON.stringify(component.view.children) !== cachedValues[component.name]) {
      renderView(component);
    }
  }
  return (
    <React.Suspense fallback={<h5>Loading components...</h5>}>
      <div>{view}</div>
    </React.Suspense>
  );
};

export default RenderSanbox;
