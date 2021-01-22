import { _ as _extends } from './objectWithoutPropertiesLoose-2d09fd44.js';
import { f as fade, a as _objectWithoutProperties } from './defaultTheme-b844222d.js';
import { r as react } from './index-8732a38f.js';
import './index-c103191b.js';
import { w as withStyles, c as clsx } from './withStyles-43366c5d.js';
import { c as capitalize } from './capitalize-263ec4d2.js';
import { B as ButtonBase } from './ButtonBase-b41b3be7.js';

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: theme.typography.pxToRem(24),
      padding: 12,
      borderRadius: '50%',
      overflow: 'visible',
      // Explicitly set the default value to solve a bug on IE 11.
      color: theme.palette.action.active,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest,
      }),
      '&:hover': {
        backgroundColor: fade(
          theme.palette.action.active,
          theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      '&$disabled': {
        backgroundColor: 'transparent',
        color: theme.palette.action.disabled,
      },
    },

    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -12,
      '$sizeSmall&': {
        marginLeft: -3,
      },
    },

    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -12,
      '$sizeSmall&': {
        marginRight: -3,
      },
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit',
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: fade(
          theme.palette.primary.main,
          theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: fade(
          theme.palette.secondary.main,
          theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: 3,
      fontSize: theme.typography.pxToRem(18),
    },

    /* Styles applied to the children container element. */
    label: {
      width: '100%',
      display: 'flex',
      alignItems: 'inherit',
      justifyContent: 'inherit',
    },
  };
};
/**
 * Refer to the [Icons](/components/icons/) section of the documentation
 * regarding the available icon options.
 */

var IconButton = /*#__PURE__*/ react.forwardRef(function IconButton(props, ref) {
  var _props$edge = props.edge,
    edge = _props$edge === void 0 ? false : _props$edge,
    children = props.children,
    classes = props.classes,
    className = props.className,
    _props$color = props.color,
    color = _props$color === void 0 ? 'default' : _props$color,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$disableFocusRi = props.disableFocusRipple,
    disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    other = _objectWithoutProperties(props, [
      'edge',
      'children',
      'classes',
      'className',
      'color',
      'disabled',
      'disableFocusRipple',
      'size',
    ]);

  return /*#__PURE__*/ react.createElement(
    ButtonBase,
    _extends(
      {
        className: clsx(
          classes.root,
          className,
          color !== 'default' && classes['color'.concat(capitalize(color))],
          disabled && classes.disabled,
          size === 'small' && classes['size'.concat(capitalize(size))],
          {
            start: classes.edgeStart,
            end: classes.edgeEnd,
          }[edge]
        ),
        centerRipple: true,
        focusRipple: !disableFocusRipple,
        disabled: disabled,
        ref: ref,
      },
      other
    ),
    /*#__PURE__*/ react.createElement(
      'span',
      {
        className: classes.label,
      },
      children
    )
  );
});
var IconButton$1 = withStyles(styles, {
  name: 'MuiIconButton',
})(IconButton);

export { IconButton$1 as I };
