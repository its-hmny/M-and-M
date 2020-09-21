import React, { useState, useEffect } from 'react';

import View from '../common/View';
import * as Elements from '../common/Elements';

// import { useStory } from './context/story';

// const importComponent = async component =>
//   React.lazy(() => import(`../common/${component}`).catch(() => console.log(`Unable to load ${component}`)));

// // import actually uses browser cache, so...
// const cachedComponents = [];

// const loadViewHierarchy = async ({ component: componentName, children, ...props }) => {
//   if (children && typeof children === 'object' && Array.isArray(children)) {
//     children = await Promise.all(children.map(component => loadViewHierarchy(component)));
//   }

//   if (!cachedComponents[componentName]) cachedComponents[componentName] = await importComponent(componentName);

//   const Component = cachedComponents[componentName];
//   return (
//     <Component key={`${componentName}-${shortid.generate()}`} {...props}>
//       {children}
//     </Component>
//   );
// };

function App({ components }) {
  return <View>{}</View>;
}

export default App;
