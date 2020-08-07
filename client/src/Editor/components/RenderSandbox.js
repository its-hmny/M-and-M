import React, {useState, useEffect} from 'react';
import shortid from 'shortid';

const cachedComponents = [];
const importComponent = async component =>
  React.lazy(() =>
    import(`../../Player/components/${component}`).catch(() =>
      console.log(`Unable to load ${component}`)
    )
  );

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

const RenderSanbox = (props) => {
  const { component } = props;
  const [view, setView] = useState(null);

  useEffect(() => {
    const loadView = async viewObject => {
      try {
        const viewHierarchy = await loadViewHierarchy(viewObject);
        setView(viewHierarchy);
      } catch (err) {
        console.error(
          `An error occured while loading view for ${component.name}: ${err}`
        );
      }
    };

    console.log(component.view);
    loadView(component.view);
  }, [component]);

  return (
    <React.Suspense fallback="Loading components...">
      <div>{view}</div>
    </React.Suspense>
  );
};

export default RenderSanbox;