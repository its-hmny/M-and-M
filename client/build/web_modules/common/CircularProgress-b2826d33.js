import { _ as _extends } from './objectWithoutPropertiesLoose-2d09fd44.js';
import { a as _objectWithoutProperties } from './defaultTheme-b844222d.js';
import { r as react } from './index-8732a38f.js';
import './index-c103191b.js';
import { w as withStyles, c as clsx } from './withStyles-43366c5d.js';
import { c as capitalize } from './capitalize-263ec4d2.js';

var SIZE = 44;
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-block',
    },

    /* Styles applied to the root element if `variant="static"`. */
    static: {
      transition: theme.transitions.create('transform'),
    },

    /* Styles applied to the root element if `variant="indeterminate"`. */
    indeterminate: {
      animation: '$circular-rotate 1.4s linear infinite',
    },

    /* Styles applied to the root element if `variant="determinate"`. */
    determinate: {
      transition: theme.transitions.create('transform'),
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main,
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main,
    },

    /* Styles applied to the `svg` element. */
    svg: {
      display: 'block', // Keeps the progress centered
    },

    /* Styles applied to the `circle` svg path. */
    circle: {
      stroke: 'currentColor', // Use butt to follow the specification, by chance, it's already the default CSS value.
      // strokeLinecap: 'butt',
    },

    /* Styles applied to the `circle` svg path if `variant="static"`. */
    circleStatic: {
      transition: theme.transitions.create('stroke-dashoffset'),
    },

    /* Styles applied to the `circle` svg path if `variant="indeterminate"`. */
    circleIndeterminate: {
      animation: '$circular-dash 1.4s ease-in-out infinite',
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: '80px, 200px',
      strokeDashoffset: '0px', // Add the unit to fix a Edge 16 and below bug.
    },

    /* Styles applied to the `circle` svg path if `variant="determinate"`. */
    circleDeterminate: {
      transition: theme.transitions.create('stroke-dashoffset'),
    },
    '@keyframes circular-rotate': {
      '0%': {
        // Fix IE 11 wobbly
        transformOrigin: '50% 50%',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
    '@keyframes circular-dash': {
      '0%': {
        strokeDasharray: '1px, 200px',
        strokeDashoffset: '0px',
      },
      '50%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-15px',
      },
      '100%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-125px',
      },
    },

    /* Styles applied to the `circle` svg path if `disableShrink={true}`. */
    circleDisableShrink: {
      animation: 'none',
    },
  };
};
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */

var CircularProgress = /*#__PURE__*/ react.forwardRef(function CircularProgress(
  props,
  ref
) {
  var classes = props.classes,
    className = props.className,
    _props$color = props.color,
    color = _props$color === void 0 ? 'primary' : _props$color,
    _props$disableShrink = props.disableShrink,
    disableShrink = _props$disableShrink === void 0 ? false : _props$disableShrink,
    _props$size = props.size,
    size = _props$size === void 0 ? 40 : _props$size,
    style = props.style,
    _props$thickness = props.thickness,
    thickness = _props$thickness === void 0 ? 3.6 : _props$thickness,
    _props$value = props.value,
    value = _props$value === void 0 ? 0 : _props$value,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'indeterminate' : _props$variant,
    other = _objectWithoutProperties(props, [
      'classes',
      'className',
      'color',
      'disableShrink',
      'size',
      'style',
      'thickness',
      'value',
      'variant',
    ]);

  var circleStyle = {};
  var rootStyle = {};
  var rootProps = {};

  if (variant === 'determinate' || variant === 'static') {
    var circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps['aria-valuenow'] = Math.round(value);
    circleStyle.strokeDashoffset = ''.concat(
      (((100 - value) / 100) * circumference).toFixed(3),
      'px'
    );
    rootStyle.transform = 'rotate(-90deg)';
  }

  return /*#__PURE__*/ react.createElement(
    'div',
    _extends(
      {
        className: clsx(
          classes.root,
          className,
          color !== 'inherit' && classes['color'.concat(capitalize(color))],
          {
            determinate: classes.determinate,
            indeterminate: classes.indeterminate,
            static: classes.static,
          }[variant]
        ),
        style: _extends(
          {
            width: size,
            height: size,
          },
          rootStyle,
          style
        ),
        ref: ref,
        role: 'progressbar',
      },
      rootProps,
      other
    ),
    /*#__PURE__*/ react.createElement(
      'svg',
      {
        className: classes.svg,
        viewBox: ''
          .concat(SIZE / 2, ' ')
          .concat(SIZE / 2, ' ')
          .concat(SIZE, ' ')
          .concat(SIZE),
      },
      /*#__PURE__*/ react.createElement('circle', {
        className: clsx(
          classes.circle,
          disableShrink && classes.circleDisableShrink,
          {
            determinate: classes.circleDeterminate,
            indeterminate: classes.circleIndeterminate,
            static: classes.circleStatic,
          }[variant]
        ),
        style: circleStyle,
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: 'none',
        strokeWidth: thickness,
      })
    )
  );
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles, {
  name: 'MuiCircularProgress',
  flip: false,
})(CircularProgress);

export { __pika_web_default_export_for_treeshaking__ as _ };
