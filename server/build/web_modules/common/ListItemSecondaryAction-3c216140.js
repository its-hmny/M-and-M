import { _ as _extends } from './objectWithoutPropertiesLoose-2d09fd44.js';
import { r as react } from './index-8732a38f.js';
import { a as _objectWithoutProperties } from './defaultTheme-2111bb1f.js';
import './index-c103191b.js';
import { w as withStyles, c as clsx } from './withStyles-dafff300.js';

var styles = {
  /* Styles applied to the root element. */
  root: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: 'translateY(-50%)'
  }
};
/**
 * Must be used as the last child of ListItem to function properly.
 */

var ListItemSecondaryAction = /*#__PURE__*/react.forwardRef(function ListItemSecondaryAction(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ["classes", "className"]);

  return /*#__PURE__*/react.createElement("div", _extends({
    className: clsx(classes.root, className),
    ref: ref
  }, other));
});
ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';
var __pika_web_default_export_for_treeshaking__ = withStyles(styles, {
  name: 'MuiListItemSecondaryAction'
})(ListItemSecondaryAction);

export { __pika_web_default_export_for_treeshaking__ as _ };
