import React, { lazy, useEffect, useState } from 'react';

const importComponent = ({ component, ...props }) => {
  const Component = lazy(() =>
    import(`./components/${component}`).catch(() =>
      console.log(`Unable to load ${component}`)
    )
  );

  return <Component key={component} {...props} />;
};

function Screen({ layout }) {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    async function loadComponents() {
      const { header, content } = layout;
      const headerComponents = header.map(component =>
        importComponent(component)
      );

      const ContentComponent = importComponent(content);

      Promise.all([...headerComponents, ContentComponent]).then(setComponents);
    }

    loadComponents();
  }, [layout]);

  return (
    <React.Suspense fallback="Loading components...">
      <div>{components}</div>
    </React.Suspense>
  );
}

export default Screen;
