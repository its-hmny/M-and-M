import React, { useState, useEffect, useRef } from 'react';
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

  if (componentName === 'Elements/Text') console.log(props);

  return (
    <Component key={`${componentName}-${shortid.generate()}`} {...props}>
      {children}
    </Component>
  );
};

//let oldView = null;

function Preview({ view }) {
  // if (oldView === view) {
  //   console.log('view equals');
  // } else {
  //   console.log('view differs');
  //   oldView = view;
  // }
  console.log('preview initial', view.children);
  const [hierarchy, setHierarchy] = useState(null);
  const oldView = useRef();

  const isLoading = oldView.current !== view;

  useEffect(() => {
    oldView.current = view;
    console.log('preview effect', view.children);
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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <React.Suspense fallback="Loading...">{hierarchy}</React.Suspense>;
}

export default Preview;
