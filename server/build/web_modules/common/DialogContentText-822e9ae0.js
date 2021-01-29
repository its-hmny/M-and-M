import { _ as _extends } from './objectWithoutPropertiesLoose-2d09fd44.js';
import { r as react } from './index-8732a38f.js';
import './index-c103191b.js';
import { w as withStyles } from './withStyles-9e6b69b9.js';
import { T as Typography } from './Typography-ddbb2b6f.js';

var styles = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12
  }
};
var DialogContentText = /*#__PURE__*/react.forwardRef(function DialogContentText(props, ref) {
  return /*#__PURE__*/react.createElement(Typography, _extends({
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: ref
  }, props));
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles, {
  name: 'MuiDialogContentText'
})(DialogContentText);

export { __pika_web_default_export_for_treeshaking__ as _ };
