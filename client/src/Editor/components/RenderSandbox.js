import React, { useEffect } from 'react';
import View from '../../common/View';
import * as Elements from '../../common/Elements';

import StyleDB from '../../data/styles.json';
import { common } from '@material-ui/core/colors';

// const cachedComponents = [];
// const cachedValues = [];

// /* Lazy component importing */
// const importComponent = async component =>
//   React.lazy(() => import(`../../common/${component}`).catch(() => console.log(`Unable to load ${component}`)));

// const loadViewHierarchy = async ({ component: componentName, children, ...props }) => {
//   if (children && typeof children === 'object' && Array.isArray(children))
//     children = await Promise.all(children.map(component => loadViewHierarchy(component)));

//   if (!cachedComponents[componentName]) cachedComponents[componentName] = await importComponent(componentName);

//   const Component = cachedComponents[componentName];

//   return (
//     <Component key={`${componentName}-${shortid.generate()}`} {...props}>
//       {children}
//     </Component>
//   );
// };

// const RenderSanbox = props => {
//   let { component } = props;
//   const { story, workingActivity } = useContext(EditorContext);
//   component = component || story.nodes.filter(node => node.id === workingActivity)[0];
//   const [view, setView] = useState(null);

//   const renderView = component => {
//     if (component === undefined) {
//       setView(<h5>Select an element and here will appear the preview</h5>);
//       return;
//     } else {
//       /* Cache children data from components to notice changes and allow real time preview */
//       cachedValues[component.name] = JSON.stringify(component.view.children);
//     }

//     const loadView = async viewObject => {
//       try {
//         /* Load all components in view recursively and asynchronously  */
//         const viewHierarchy = await loadViewHierarchy(viewObject);
//         setView(viewHierarchy);
//       } catch (err) {
//         console.error(`An error occured while loading view for ${component.name}: ${err}`);
//       }
//     };
//     /* Async loading of component view (with all his children) */
//     loadView(component.view);
//   };

//   /* Execute rendering for first renderi */
//   useEffect(() => {
//     renderView(component);
//   }, [component]);

//   //Controlla se è stato modificato un campo, se lo è stato allora rirenderizza la view
//   if (component !== undefined && cachedValues[component.name] !== undefined) {
//     if (JSON.stringify(component.view.children) !== cachedValues[component.name]) {
//       renderView(component);
//     }
//   }
//   return (
//     <React.Suspense fallback={<h5>Loading components...</h5>}>
//       <div>{view}</div>
//     </React.Suspense>
//   );
// };

const RenderSanbox = ({ components }) => {
  const expandStyle = list => {
    list.forEach(component => {
      const { styleId, children } = component;
      // Deletes the key and replaces it with the expanded style object
      if (styleId) {
        delete component.styleId;
        component.style = StyleDB[styleId];
      }
      // Recursively on children as well
      if (Array.isArray(children))
        expandStyle(children);
    });
  };

  const loadFromList = list => {
    expandStyle(list);

    return list.map(component => {
      const { id, name, children, ...props } = component;
      const Element = Elements[name];
      
      if (Array.isArray(children))
        return (
          <Element key={id} {...props}>
            {loadFromList(children)}
          </Element>
        );
      else 
        return <Element key={id} {...props} />;
    });
  };

  return <View>{loadFromList(components)}</View>;
};

export default RenderSanbox;
