import { _ as _extends } from './objectWithoutPropertiesLoose-2d09fd44.js';
import { a as _objectWithoutProperties } from './defaultTheme-3ddef459.js';
import { r as react } from './index-8732a38f.js';
import './index-c103191b.js';
import { w as withStyles, c as clsx } from './withStyles-9e6b69b9.js';

var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end',
    flex: '0 0 auto'
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var DialogActions = /*#__PURE__*/react.forwardRef(function DialogActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ["disableSpacing", "classes", "className"]);

  return /*#__PURE__*/react.createElement("div", _extends({
    className: clsx(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles, {
  name: 'MuiDialogActions'
})(DialogActions);

export { __pika_web_default_export_for_treeshaking__ as _ };
