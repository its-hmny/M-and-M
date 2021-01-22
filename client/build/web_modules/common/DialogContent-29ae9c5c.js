import { _ as _extends } from './objectWithoutPropertiesLoose-2d09fd44.js';
import { a as _objectWithoutProperties } from './defaultTheme-b844222d.js';
import { r as react } from './index-8732a38f.js';
import './index-c103191b.js';
import { w as withStyles, c as clsx } from './withStyles-43366c5d.js';

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: '1 1 auto',
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      overflowY: 'auto',
      padding: '8px 24px',
      '&:first-child': {
        // dialog without title
        paddingTop: 20
      }
    },

    /* Styles applied to the root element if `dividers={true}`. */
    dividers: {
      padding: '16px 24px',
      borderTop: "1px solid ".concat(theme.palette.divider),
      borderBottom: "1px solid ".concat(theme.palette.divider)
    }
  };
};
var DialogContent = /*#__PURE__*/react.forwardRef(function DialogContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$dividers = props.dividers,
      dividers = _props$dividers === void 0 ? false : _props$dividers,
      other = _objectWithoutProperties(props, ["classes", "className", "dividers"]);

  return /*#__PURE__*/react.createElement("div", _extends({
    className: clsx(classes.root, className, dividers && classes.dividers),
    ref: ref
  }, other));
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles, {
  name: 'MuiDialogContent'
})(DialogContent);

export { __pika_web_default_export_for_treeshaking__ as _ };
