import { r as react } from './index-8732a38f.js';

/**
 * Private module reserved for @material-ui/x packages.
 */

function useId(idOverride) {
  var _React$useState = react.useState(idOverride),
    defaultId = _React$useState[0],
    setDefaultId = _React$useState[1];

  var id = idOverride || defaultId;
  react.useEffect(
    function () {
      if (defaultId == null) {
        // Fallback to this default id when possible.
        // Use the random value for client-side rendering only.
        // We can't use it server-side.
        setDefaultId('mui-'.concat(Math.round(Math.random() * 1e5)));
      }
    },
    [defaultId]
  );
  return id;
}

export { useId as u };
