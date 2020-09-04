import React, { useState, useEffect } from 'react';
import shortid from 'shortid';

const importComponent = async component =>
  React.lazy(() =>
    import(`../../common/${component}`).catch(() =>
      console.log(`Unable to load ${component}`)
    )
  );

// import actually uses browser cache, so...
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

function Preview({ view }) {
  const [hierarchy, setHierarchy] = useState(null);

  useEffect(() => {
    const loadView = async viewObject => {
      try {
        const viewHierarchy = await loadViewHierarchy(viewObject);
        setHierarchy(viewHierarchy);
      } catch (err) {
        console.error(`An error occured while loading hierarchy: ${err}`);
      }
    };

    loadView(view);
  }, [view]);

  return (
    <React.Suspense fallback="Loading components...">
      {hierarchy}
    </React.Suspense>
  );
}

export default Preview;
