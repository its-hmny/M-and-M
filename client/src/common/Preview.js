import React, { useState, useEffect, useRef, useContext } from 'react';
import shortid from 'shortid';

import * as Elements from './Elements';
import View from './View';
import { StylesContext } from '../Creator/context/style';

// const importComponent = async component =>
//   React.lazy(() =>
//     import(`../../common/${component}`).catch(() =>
//       console.log(`Unable to load ${component}`)
//     )
//   );

// // import actually uses browser cache, so...
// const cachedComponents = [];

// const loadViewHierarchy = async ({
//   component: componentName,
//   children,
//   ...props
// }) => {
//   if (children && typeof children === 'object' && Array.isArray(children)) {
//     children = await Promise.all(
//       children.map(component => loadViewHierarchy(component))
//     );
//   }

//   if (!cachedComponents[componentName])
//     cachedComponents[componentName] = await importComponent(componentName);

//   const Component = cachedComponents[componentName];

//   return (
//     <Component key={`${componentName}-${shortid.generate()}`} {...props}>
//       {children}
//     </Component>
//   );
// };

function Preview({ components }) {
  // const [{ styles }] = useContext(StylesContext);

  const elements = components.map(component => {
    const { id, name, ...props } = component;
    const Element = Elements[name];
    return <Element key={id} {...props} />;
  });

  return <View>{elements}</View>;
  // const [hierarchy, setHierarchy] = useState(null);
  // const oldView = useRef();
  // const isLoading = oldView.current !== view;
  // useEffect(() => {
  //   oldView.current = view;
  //   const loadView = async viewObject => {
  //     try {
  //       const viewHierarchy = await loadViewHierarchy(viewObject);
  //       setHierarchy(viewHierarchy);
  //     } catch (err) {
  //       console.error(`An error occured while loading hierarchy: ${err}`);
  //     }
  //   };
  //   loadView(view);
  // }, [view]);
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  // return <React.Suspense fallback="Loading...">{hierarchy}</React.Suspense>;
}

export default Preview;
