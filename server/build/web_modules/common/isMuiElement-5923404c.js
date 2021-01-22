import { r as react } from './index-8732a38f.js';

function isMuiElement(element, muiNames) {
  return (
    /*#__PURE__*/ react.isValidElement(element) &&
    muiNames.indexOf(element.type.muiName) !== -1
  );
}

export { isMuiElement as i };
