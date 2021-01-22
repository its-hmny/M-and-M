import { _ as _extends } from './objectWithoutPropertiesLoose-2d09fd44.js';
import {
  a as _objectWithoutProperties,
  e as _slicedToArray,
  q as duration,
  _ as _defineProperty,
} from './defaultTheme-b844222d.js';
import { r as react } from './index-8732a38f.js';
import './index-c103191b.js';
import { w as withStyles, c as clsx } from './withStyles-43366c5d.js';
import { c as capitalize } from './capitalize-263ec4d2.js';
import { M as Modal } from './Modal-e85099c5.js';
import { u as useTheme } from './useTheme-5585e676.js';
import {
  T as Transition,
  r as reflow,
  g as getTransitionProps,
} from './utils-67230be0.js';
import { u as useForkRef } from './useForkRef-bc5ba56b.js';
import { P as Paper } from './Portal-354ff3bf.js';

var styles = {
  entering: {
    opacity: 1,
  },
  entered: {
    opacity: 1,
  },
};
var defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen,
};
/**
 * The Fade transition is used by the [Modal](/components/modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Fade = /*#__PURE__*/ react.forwardRef(function Fade(props, ref) {
  var children = props.children,
    _props$disableStrictM = props.disableStrictModeCompat,
    disableStrictModeCompat =
      _props$disableStrictM === void 0 ? false : _props$disableStrictM,
    inProp = props.in,
    onEnter = props.onEnter,
    onEntered = props.onEntered,
    onEntering = props.onEntering,
    onExit = props.onExit,
    onExited = props.onExited,
    onExiting = props.onExiting,
    style = props.style,
    _props$TransitionComp = props.TransitionComponent,
    TransitionComponent =
      _props$TransitionComp === void 0 ? Transition : _props$TransitionComp,
    _props$timeout = props.timeout,
    timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
    other = _objectWithoutProperties(props, [
      'children',
      'disableStrictModeCompat',
      'in',
      'onEnter',
      'onEntered',
      'onEntering',
      'onExit',
      'onExited',
      'onExiting',
      'style',
      'TransitionComponent',
      'timeout',
    ]);

  var theme = useTheme();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react.useRef(null);
  var foreignRef = useForkRef(children.ref, ref);
  var handleRef = useForkRef(enableStrictModeCompat ? nodeRef : undefined, foreignRef);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat
            ? [nodeRef.current, nodeOrAppearing]
            : [nodeOrAppearing, maybeAppearing],
          _ref2 = _slicedToArray(_ref, 2),
          node = _ref2[0],
          isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };

  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    reflow(node); // So the animation always start from the start.

    var transitionProps = getTransitionProps(
      {
        style: style,
        timeout: timeout,
      },
      {
        mode: 'enter',
      }
    );
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var transitionProps = getTransitionProps(
      {
        style: style,
        timeout: timeout,
      },
      {
        mode: 'exit',
      }
    );
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  return /*#__PURE__*/ react.createElement(
    TransitionComponent,
    _extends(
      {
        appear: true,
        in: inProp,
        nodeRef: enableStrictModeCompat ? nodeRef : undefined,
        onEnter: handleEnter,
        onEntered: handleEntered,
        onEntering: handleEntering,
        onExit: handleExit,
        onExited: handleExited,
        onExiting: handleExiting,
        timeout: timeout,
      },
      other
    ),
    function (state, childProps) {
      return /*#__PURE__*/ react.cloneElement(
        children,
        _extends(
          {
            style: _extends(
              {
                opacity: 0,
                visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
              },
              styles[state],
              style,
              children.props.style
            ),
            ref: handleRef,
          },
          childProps
        )
      );
    }
  );
});

var styles$1 = {
  /* Styles applied to the root element. */
  root: {
    // Improve scrollable dialog support.
    zIndex: -1,
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent',
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent',
  },
};
var Backdrop = /*#__PURE__*/ react.forwardRef(function Backdrop(props, ref) {
  var children = props.children,
    classes = props.classes,
    className = props.className,
    _props$invisible = props.invisible,
    invisible = _props$invisible === void 0 ? false : _props$invisible,
    open = props.open,
    transitionDuration = props.transitionDuration,
    _props$TransitionComp = props.TransitionComponent,
    TransitionComponent = _props$TransitionComp === void 0 ? Fade : _props$TransitionComp,
    other = _objectWithoutProperties(props, [
      'children',
      'classes',
      'className',
      'invisible',
      'open',
      'transitionDuration',
      'TransitionComponent',
    ]);

  return /*#__PURE__*/ react.createElement(
    TransitionComponent,
    _extends(
      {
        in: open,
        timeout: transitionDuration,
      },
      other
    ),
    /*#__PURE__*/ react.createElement(
      'div',
      {
        className: clsx(classes.root, className, invisible && classes.invisible),
        'aria-hidden': true,
        ref: ref,
      },
      children
    )
  );
});
var Backdrop$1 = withStyles(styles$1, {
  name: 'MuiBackdrop',
})(Backdrop);

var styles$2 = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      '@media print': {
        // Use !important to override the Modal inline-style.
        position: 'absolute !important',
      },
    },

    /* Styles applied to the container element if `scroll="paper"`. */
    scrollPaper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    /* Styles applied to the container element if `scroll="body"`. */
    scrollBody: {
      overflowY: 'auto',
      overflowX: 'hidden',
      textAlign: 'center',
      '&:after': {
        content: '""',
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '100%',
        width: '0',
      },
    },

    /* Styles applied to the container element. */
    container: {
      height: '100%',
      '@media print': {
        height: 'auto',
      },
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
    },

    /* Styles applied to the `Paper` component. */
    paper: {
      margin: 32,
      position: 'relative',
      overflowY: 'auto',
      // Fix IE 11 issue, to remove at some point.
      '@media print': {
        overflowY: 'visible',
        boxShadow: 'none',
      },
    },

    /* Styles applied to the `Paper` component if `scroll="paper"`. */
    paperScrollPaper: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 'calc(100% - 64px)',
    },

    /* Styles applied to the `Paper` component if `scroll="body"`. */
    paperScrollBody: {
      display: 'inline-block',
      verticalAlign: 'middle',
      textAlign: 'left', // 'initial' doesn't work on IE 11
    },

    /* Styles applied to the `Paper` component if `maxWidth=false`. */
    paperWidthFalse: {
      maxWidth: 'calc(100% - 64px)',
    },

    /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444),
      '&$paperScrollBody': _defineProperty(
        {},
        theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2),
        {
          maxWidth: 'calc(100% - 64px)',
        }
      ),
    },

    /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
    paperWidthSm: {
      maxWidth: theme.breakpoints.values.sm,
      '&$paperScrollBody': _defineProperty(
        {},
        theme.breakpoints.down(theme.breakpoints.values.sm + 32 * 2),
        {
          maxWidth: 'calc(100% - 64px)',
        }
      ),
    },

    /* Styles applied to the `Paper` component if `maxWidth="md"`. */
    paperWidthMd: {
      maxWidth: theme.breakpoints.values.md,
      '&$paperScrollBody': _defineProperty(
        {},
        theme.breakpoints.down(theme.breakpoints.values.md + 32 * 2),
        {
          maxWidth: 'calc(100% - 64px)',
        }
      ),
    },

    /* Styles applied to the `Paper` component if `maxWidth="lg"`. */
    paperWidthLg: {
      maxWidth: theme.breakpoints.values.lg,
      '&$paperScrollBody': _defineProperty(
        {},
        theme.breakpoints.down(theme.breakpoints.values.lg + 32 * 2),
        {
          maxWidth: 'calc(100% - 64px)',
        }
      ),
    },

    /* Styles applied to the `Paper` component if `maxWidth="xl"`. */
    paperWidthXl: {
      maxWidth: theme.breakpoints.values.xl,
      '&$paperScrollBody': _defineProperty(
        {},
        theme.breakpoints.down(theme.breakpoints.values.xl + 32 * 2),
        {
          maxWidth: 'calc(100% - 64px)',
        }
      ),
    },

    /* Styles applied to the `Paper` component if `fullWidth={true}`. */
    paperFullWidth: {
      width: 'calc(100% - 64px)',
    },

    /* Styles applied to the `Paper` component if `fullScreen={true}`. */
    paperFullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: 'none',
      borderRadius: 0,
      '&$paperScrollBody': {
        margin: 0,
        maxWidth: '100%',
      },
    },
  };
};
var defaultTransitionDuration = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen,
};
/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */

var Dialog = /*#__PURE__*/ react.forwardRef(function Dialog(props, ref) {
  var BackdropProps = props.BackdropProps,
    children = props.children,
    classes = props.classes,
    className = props.className,
    _props$disableBackdro = props.disableBackdropClick,
    disableBackdropClick =
      _props$disableBackdro === void 0 ? false : _props$disableBackdro,
    _props$disableEscapeK = props.disableEscapeKeyDown,
    disableEscapeKeyDown =
      _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
    _props$fullScreen = props.fullScreen,
    fullScreen = _props$fullScreen === void 0 ? false : _props$fullScreen,
    _props$fullWidth = props.fullWidth,
    fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
    _props$maxWidth = props.maxWidth,
    maxWidth = _props$maxWidth === void 0 ? 'sm' : _props$maxWidth,
    onBackdropClick = props.onBackdropClick,
    onClose = props.onClose,
    onEnter = props.onEnter,
    onEntered = props.onEntered,
    onEntering = props.onEntering,
    onEscapeKeyDown = props.onEscapeKeyDown,
    onExit = props.onExit,
    onExited = props.onExited,
    onExiting = props.onExiting,
    open = props.open,
    _props$PaperComponent = props.PaperComponent,
    PaperComponent = _props$PaperComponent === void 0 ? Paper : _props$PaperComponent,
    _props$PaperProps = props.PaperProps,
    PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
    _props$scroll = props.scroll,
    scroll = _props$scroll === void 0 ? 'paper' : _props$scroll,
    _props$TransitionComp = props.TransitionComponent,
    TransitionComponent = _props$TransitionComp === void 0 ? Fade : _props$TransitionComp,
    _props$transitionDura = props.transitionDuration,
    transitionDuration =
      _props$transitionDura === void 0
        ? defaultTransitionDuration
        : _props$transitionDura,
    TransitionProps = props.TransitionProps,
    ariaDescribedby = props['aria-describedby'],
    ariaLabelledby = props['aria-labelledby'],
    other = _objectWithoutProperties(props, [
      'BackdropProps',
      'children',
      'classes',
      'className',
      'disableBackdropClick',
      'disableEscapeKeyDown',
      'fullScreen',
      'fullWidth',
      'maxWidth',
      'onBackdropClick',
      'onClose',
      'onEnter',
      'onEntered',
      'onEntering',
      'onEscapeKeyDown',
      'onExit',
      'onExited',
      'onExiting',
      'open',
      'PaperComponent',
      'PaperProps',
      'scroll',
      'TransitionComponent',
      'transitionDuration',
      'TransitionProps',
      'aria-describedby',
      'aria-labelledby',
    ]);

  var mouseDownTarget = react.useRef();

  var handleMouseDown = function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    // Ignore the events not coming from the "backdrop"
    // We don't want to close the dialog when clicking the dialog content.
    if (event.target !== event.currentTarget) {
      return;
    } // Make sure the event starts and ends on the same DOM element.

    if (event.target !== mouseDownTarget.current) {
      return;
    }

    mouseDownTarget.current = null;

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  return /*#__PURE__*/ react.createElement(
    Modal,
    _extends(
      {
        className: clsx(classes.root, className),
        BackdropComponent: Backdrop$1,
        BackdropProps: _extends(
          {
            transitionDuration: transitionDuration,
          },
          BackdropProps
        ),
        closeAfterTransition: true,
        disableBackdropClick: disableBackdropClick,
        disableEscapeKeyDown: disableEscapeKeyDown,
        onEscapeKeyDown: onEscapeKeyDown,
        onClose: onClose,
        open: open,
        ref: ref,
      },
      other
    ),
    /*#__PURE__*/ react.createElement(
      TransitionComponent,
      _extends(
        {
          appear: true,
          in: open,
          timeout: transitionDuration,
          onEnter: onEnter,
          onEntering: onEntering,
          onEntered: onEntered,
          onExit: onExit,
          onExiting: onExiting,
          onExited: onExited,
          role: 'none presentation',
        },
        TransitionProps
      ),
      /*#__PURE__*/ react.createElement(
        'div',
        {
          className: clsx(
            classes.container,
            classes['scroll'.concat(capitalize(scroll))]
          ),
          onMouseUp: handleBackdropClick,
          onMouseDown: handleMouseDown,
        },
        /*#__PURE__*/ react.createElement(
          PaperComponent,
          _extends(
            {
              elevation: 24,
              role: 'dialog',
              'aria-describedby': ariaDescribedby,
              'aria-labelledby': ariaLabelledby,
            },
            PaperProps,
            {
              className: clsx(
                classes.paper,
                classes['paperScroll'.concat(capitalize(scroll))],
                classes['paperWidth'.concat(capitalize(String(maxWidth)))],
                PaperProps.className,
                fullScreen && classes.paperFullScreen,
                fullWidth && classes.paperFullWidth
              ),
            }
          ),
          children
        )
      )
    )
  );
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles$2, {
  name: 'MuiDialog',
})(Dialog);

export { __pika_web_default_export_for_treeshaking__ as _ };
