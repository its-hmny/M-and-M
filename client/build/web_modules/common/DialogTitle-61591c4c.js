import { _ as _extends } from './objectWithoutPropertiesLoose-2d09fd44.js';
import { a as _objectWithoutProperties } from './defaultTheme-b844222d.js';
import { r as react } from './index-8732a38f.js';
import './index-c103191b.js';
import { w as withStyles, c as clsx } from './withStyles-43366c5d.js';
import { T as Typography } from './Typography-ea7a85ca.js';

var styles = {
  /* Styles applied to the root element. */
  root: {
    margin: 0,
    padding: '16px 24px',
    flex: '0 0 auto'
  }
};
var DialogTitle = /*#__PURE__*/react.forwardRef(function DialogTitle(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "disableTypography"]);

  return /*#__PURE__*/react.createElement("div", _extends({
    className: clsx(classes.root, className),
    ref: ref
  }, other), disableTypography ? children : /*#__PURE__*/react.createElement(Typography, {
    component: "h2",
    variant: "h6"
  }, children));
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles, {
  name: 'MuiDialogTitle'
})(DialogTitle);

export { __pika_web_default_export_for_treeshaking__ as _ };
