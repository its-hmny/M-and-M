import { _ as _extends } from './objectWithoutPropertiesLoose-2d09fd44.js';
import { r as react } from './index-8732a38f.js';
import { S as SvgIcon } from './SvgIcon-eae2d21b.js';

/**
 * Private module reserved for @material-ui/x packages.
 */

function createSvgIcon(path, displayName) {
  var Component = function Component(props, ref) {
    return /*#__PURE__*/react.createElement(SvgIcon, _extends({
      ref: ref
    }, props), path);
  };

  Component.muiName = SvgIcon.muiName;
  return /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(Component));
}

export { createSvgIcon as c };
