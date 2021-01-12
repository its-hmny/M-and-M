import './common/objectWithoutPropertiesLoose-2d09fd44.js';
import './common/_commonjsHelpers-37fa8da4.js';
import { r as react } from './common/index-8732a38f.js';
import { r as emphasize } from './common/defaultTheme-2111bb1f.js';
import './common/orange-f3aa52cc.js';
import './common/index-c103191b.js';
import './common/makeStyles-b541edea.js';
import { c as clsx, w as withStyles } from './common/withStyles-dafff300.js';
import './common/hoist-non-react-statics.cjs-452b108e.js';
import { m as makeStyles } from './common/makeStyles-07701499.js';
import './common/useTheme-5585e676.js';
import './common/capitalize-2163aab8.js';
import { S as SvgIcon } from './common/SvgIcon-3604f8f0.js';
import './common/debounce-44d9042c.js';
import { o as ownerDocument } from './common/ownerDocument-d79106b5.js';
import { u as useForkRef } from './common/useForkRef-bc5ba56b.js';
import { u as useEventCallback$1 } from './common/useEventCallback-d186462f.js';
import { r as reactDom } from './common/index-ad94d284.js';
import './common/utils-8b4b913c.js';
import './common/TransitionGroupContext-984882cb.js';
import { C as Collapse } from './common/Collapse-e021d291.js';
import { S as Slide } from './common/Slide-7055252b.js';

function createStyles(styles) {
  return styles;
}

// To remove in v5

function createStyles$1(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return createStyles(styles);
}

function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}

function clickedRootScrollbar(event) {
  return document.documentElement.clientWidth < event.clientX || document.documentElement.clientHeight < event.clientY;
}
/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 */


function ClickAwayListener(props) {
  var children = props.children,
      _props$disableReactTr = props.disableReactTree,
      disableReactTree = _props$disableReactTr === void 0 ? false : _props$disableReactTr,
      _props$mouseEvent = props.mouseEvent,
      mouseEvent = _props$mouseEvent === void 0 ? 'onClick' : _props$mouseEvent,
      onClickAway = props.onClickAway,
      _props$touchEvent = props.touchEvent,
      touchEvent = _props$touchEvent === void 0 ? 'onTouchEnd' : _props$touchEvent;
  var movedRef = react.useRef(false);
  var nodeRef = react.useRef(null);
  var activatedRef = react.useRef(false);
  var syntheticEventRef = react.useRef(false);
  react.useEffect(function () {
    // Ensure that this component is not "activated" synchronously.
    // https://github.com/facebook/react/issues/20074
    setTimeout(function () {
      activatedRef.current = true;
    }, 0);
    return function () {
      activatedRef.current = false;
    };
  }, []); // can be removed once we drop support for non ref forwarding class components

  var handleOwnRef = react.useCallback(function (instance) {
    // #StrictMode ready
    nodeRef.current = reactDom.findDOMNode(instance);
  }, []);
  var handleRef = useForkRef(children.ref, handleOwnRef); // The handler doesn't take event.defaultPrevented into account:
  //
  // event.preventDefault() is meant to stop default behaviours like
  // clicking a checkbox to check it, hitting a button to submit a form,
  // and hitting left arrow to move the cursor in a text input etc.
  // Only special HTML elements have these default behaviors.

  var handleClickAway = useEventCallback$1(function (event) {
    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    var insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false; // 1. IE 11 support, which trigger the handleClickAway even after the unbind
    // 2. The child might render null.
    // 3. Behave like a blur listener.

    if (!activatedRef.current || !nodeRef.current || clickedRootScrollbar(event)) {
      return;
    } // Do not act if user performed touchmove


    if (movedRef.current) {
      movedRef.current = false;
      return;
    }

    var insideDOM; // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js

    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      // TODO v6 remove dead logic https://caniuse.com/#search=composedPath.
      var doc = ownerDocument(nodeRef.current);
      insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
    }

    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  }); // Keep track of mouse/touch events that bubbled up through the portal.

  var createHandleSynthetic = function createHandleSynthetic(handlerName) {
    return function (event) {
      syntheticEventRef.current = true;
      var childrenPropsHandler = children.props[handlerName];

      if (childrenPropsHandler) {
        childrenPropsHandler(event);
      }
    };
  };

  var childrenProps = {
    ref: handleRef
  };

  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }

  react.useEffect(function () {
    if (touchEvent !== false) {
      var mappedTouchEvent = mapEventPropToEvent(touchEvent);
      var doc = ownerDocument(nodeRef.current);

      var handleTouchMove = function handleTouchMove() {
        movedRef.current = true;
      };

      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener('touchmove', handleTouchMove);
      return function () {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener('touchmove', handleTouchMove);
      };
    }

    return undefined;
  }, [handleClickAway, touchEvent]);

  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }

  react.useEffect(function () {
    if (mouseEvent !== false) {
      var mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      var doc = ownerDocument(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return function () {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }

    return undefined;
  }, [handleClickAway, mouseEvent]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.cloneElement(children, childrenProps));
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var SnackbarContext = /*#__PURE__*/react.createContext();

var allClasses = {
  mui: {
    root: {},
    anchorOriginTopCenter: {},
    anchorOriginBottomCenter: {},
    anchorOriginTopRight: {},
    anchorOriginBottomRight: {},
    anchorOriginTopLeft: {},
    anchorOriginBottomLeft: {}
  },
  container: {
    containerRoot: {},
    containerAnchorOriginTopCenter: {},
    containerAnchorOriginBottomCenter: {},
    containerAnchorOriginTopRight: {},
    containerAnchorOriginBottomRight: {},
    containerAnchorOriginTopLeft: {},
    containerAnchorOriginBottomLeft: {}
  }
};
var SNACKBAR_INDENTS = {
  view: {
    "default": 20,
    dense: 4
  },
  snackbar: {
    "default": 6,
    dense: 2
  }
};
var DEFAULTS = {
  maxSnack: 3,
  dense: false,
  hideIconVariant: false,
  variant: 'default',
  autoHideDuration: 5000,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  TransitionComponent: Slide,
  transitionDuration: {
    enter: 225,
    exit: 195
  }
};
var capitalise = function capitalise(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
var originKeyExtractor = function originKeyExtractor(anchor) {
  return "" + capitalise(anchor.vertical) + capitalise(anchor.horizontal);
};
/**
 * Omit SnackbarContainer class keys that are not needed for SnackbarItem
 */

var omitContainerKeys = function omitContainerKeys(classes) {
  return (// @ts-ignore
    Object.keys(classes).filter(function (key) {
      return !allClasses.container[key];
    }).reduce(function (obj, key) {
      var _extends2;

      return _extends({}, obj, (_extends2 = {}, _extends2[key] = classes[key], _extends2));
    }, {})
  );
};
var REASONS = {
  TIMEOUT: 'timeout',
  CLICKAWAY: 'clickaway',
  MAXSNACK: 'maxsnack',
  INSTRUCTED: 'instructed'
};
/** Tranforms classes name */

var transformer = {
  toContainerAnchorOrigin: function toContainerAnchorOrigin(origin) {
    return "anchorOrigin" + origin;
  },
  toAnchorOrigin: function toAnchorOrigin(_ref) {
    var vertical = _ref.vertical,
        horizontal = _ref.horizontal;
    return "anchorOrigin" + capitalise(vertical) + capitalise(horizontal);
  },
  toVariant: function toVariant(variant) {
    return "variant" + capitalise(variant);
  }
};
var isDefined = function isDefined(value) {
  return !!value || value === 0;
};

var numberOrNull = function numberOrNull(numberish) {
  return typeof numberish === 'number' || numberish === null;
}; // @ts-ignore


var merge = function merge(options, props, defaults) {
  return function (name) {
    if (name === 'autoHideDuration') {
      if (numberOrNull(options.autoHideDuration)) return options.autoHideDuration;
      if (numberOrNull(props.autoHideDuration)) return props.autoHideDuration;
      return DEFAULTS.autoHideDuration;
    }

    return options[name] || props[name] || defaults[name];
  };
};
function objectMerge(options, props, defaults) {
  if (options === void 0) {
    options = {};
  }

  if (props === void 0) {
    props = {};
  }

  if (defaults === void 0) {
    defaults = {};
  }

  return _extends({}, defaults, {}, props, {}, options);
}

var styles = function styles(theme) {
  var _root;

  return createStyles$1({
    root: (_root = {
      display: 'flex',
      flexWrap: 'wrap',
      flexGrow: 1
    }, _root[theme.breakpoints.up('sm')] = {
      flexGrow: 'initial',
      minWidth: 288
    }, _root)
  });
};

var SnackbarContent = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var classes = _ref.classes,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["classes", "className"]);

  return react.createElement("div", Object.assign({
    ref: ref,
    className: clsx(classes.root, className)
  }, props));
});
var SnackbarContent$1 = /*#__PURE__*/withStyles(styles)(SnackbarContent);

var DIRECTION = {
  right: 'left',
  left: 'right',
  bottom: 'up',
  top: 'down'
};
var getTransitionDirection = function getTransitionDirection(anchorOrigin) {
  if (anchorOrigin.horizontal !== 'center') {
    return DIRECTION[anchorOrigin.horizontal];
  }

  return DIRECTION[anchorOrigin.vertical];
};
/**
 * Omit all class keys except what we need for collapse component
 */

var omitNonCollapseKeys = function omitNonCollapseKeys(classes, dense) {
  return {
    container: classes.collapseContainer,
    wrapper: clsx(classes.collapseWrapper, dense && classes.collapseWrapperDense)
  };
};

var CheckIcon = function CheckIcon(props) {
  return react.createElement(SvgIcon, Object.assign({}, props), react.createElement("path", {
    d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41\n        10.59L10 14.17L17.59 6.58L19 8L10 17Z"
  }));
};

var WarningIcon = function WarningIcon(props) {
  return react.createElement(SvgIcon, Object.assign({}, props), react.createElement("path", {
    d: "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"
  }));
};

var ErrorIcon = function ErrorIcon(props) {
  return react.createElement(SvgIcon, Object.assign({}, props), react.createElement("path", {
    d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,\n        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,\n        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
  }));
};

var InfoIcon = function InfoIcon(props) {
  return react.createElement(SvgIcon, Object.assign({}, props), react.createElement("path", {
    d: "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,\n        0 22,12A10,10 0 0,0 12,2Z"
  }));
};

var iconStyles = {
  fontSize: 20,
  marginInlineEnd: 8
};
var defaultIconVariants = {
  "default": undefined,
  success: /*#__PURE__*/react.createElement(CheckIcon, {
    style: iconStyles
  }),
  warning: /*#__PURE__*/react.createElement(WarningIcon, {
    style: iconStyles
  }),
  error: /*#__PURE__*/react.createElement(ErrorIcon, {
    style: iconStyles
  }),
  info: /*#__PURE__*/react.createElement(InfoIcon, {
    style: iconStyles
  })
};

/**
 * @link https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/utils/createChainedFunction.js
 */
function createChainedFunction(funcs, extraArg) {
  return funcs.reduce(function (acc, func) {
    if (func == null) return acc;

    return function chainedFunction() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var argums = [].concat(args);

      if (extraArg && argums.indexOf(extraArg) === -1) {
        argums.push(extraArg);
      }

      acc.apply(this, argums);
      func.apply(this, argums);
    };
  }, function () {});
}

/**
 * @link https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/utils/useEventCallback.js
 */
var useEnhancedEffect = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
function useEventCallback(fn) {
  var ref = react.useRef(fn);
  useEnhancedEffect(function () {
    ref.current = fn;
  });
  return react.useCallback(function () {
    return (ref.current).apply(void 0, arguments);
  }, []);
}

var Snackbar = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var children = props.children,
      autoHideDuration = props.autoHideDuration,
      ClickAwayListenerProps = props.ClickAwayListenerProps,
      _props$disableWindowB = props.disableWindowBlurListener,
      disableWindowBlurListener = _props$disableWindowB === void 0 ? false : _props$disableWindowB,
      onClose = props.onClose,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      open = props.open,
      resumeHideDuration = props.resumeHideDuration,
      other = _objectWithoutPropertiesLoose(props, ["children", "autoHideDuration", "ClickAwayListenerProps", "disableWindowBlurListener", "onClose", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration"]);

  var timerAutoHide = react.useRef();
  var handleClose = useEventCallback(function () {
    if (onClose) {
      onClose.apply(void 0, arguments);
    }
  });
  var setAutoHideTimer = useEventCallback(function (autoHideDurationParam) {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }

    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(function () {
      handleClose(null, REASONS.TIMEOUT);
    }, autoHideDurationParam);
  });
  react.useEffect(function () {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }

    return function () {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]);
  /**
   * Pause the timer when the user is interacting with the Snackbar
   * or when the user hide the window.
   */

  var handlePause = function handlePause() {
    clearTimeout(timerAutoHide.current);
  };
  /**
   * Restart the timer when the user is no longer interacting with the Snackbar
   * or when the window is shown back.
   */


  var handleResume = react.useCallback(function () {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);

  var handleMouseEnter = function handleMouseEnter(event) {
    if (onMouseEnter) {
      onMouseEnter(event);
    }

    handlePause();
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    if (onMouseLeave) {
      onMouseLeave(event);
    }

    handleResume();
  };

  var handleClickAway = function handleClickAway(event) {
    if (onClose) {
      onClose(event, REASONS.CLICKAWAY);
    }
  };

  react.useEffect(function () {
    if (!disableWindowBlurListener && open) {
      window.addEventListener('focus', handleResume);
      window.addEventListener('blur', handlePause);
      return function () {
        window.removeEventListener('focus', handleResume);
        window.removeEventListener('blur', handlePause);
      };
    }

    return undefined;
  }, [disableWindowBlurListener, handleResume, open]);
  return react.createElement(ClickAwayListener, _extends({
    onClickAway: handleClickAway
  }, ClickAwayListenerProps), react.createElement("div", _extends({
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ref: ref
  }, other), children));
});

var styles$1 = function styles(theme) {
  var _collapseContainer;

  // @ts-ignore
  var mode = theme.palette.mode || theme.palette.type;
  var backgroundColor = emphasize(theme.palette.background["default"], mode === 'light' ? 0.8 : 0.98);
  return createStyles$1(_extends({}, allClasses.mui, {
    lessPadding: {
      paddingLeft: 8 * 2.5
    },
    variantSuccess: {
      backgroundColor: '#43a047 !important',
      color: '#fff !important'
    },
    variantError: {
      backgroundColor: '#d32f2f !important',
      color: '#fff !important'
    },
    variantInfo: {
      backgroundColor: '#2196f3 !important',
      color: '#fff !important'
    },
    variantWarning: {
      backgroundColor: '#ff9800 !important',
      color: '#fff !important'
    },
    contentRoot: _extends({}, theme.typography.body2, {
      backgroundColor: backgroundColor,
      color: theme.palette.getContrastText(backgroundColor),
      alignItems: 'center',
      padding: '6px 16px',
      borderRadius: '4px',
      boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)'
    }),
    message: {
      display: 'flex',
      alignItems: 'center',
      padding: '8px 0'
    },
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: 16,
      marginRight: -8
    },
    wrappedRoot: {
      position: 'relative',
      transform: 'translateX(0)',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    collapseContainer: (_collapseContainer = {}, _collapseContainer[theme.breakpoints.down('xs')] = {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    }, _collapseContainer),
    collapseWrapper: {
      transition: theme.transitions.create(['margin-bottom'], {
        easing: 'ease'
      }),
      marginTop: SNACKBAR_INDENTS.snackbar["default"],
      marginBottom: SNACKBAR_INDENTS.snackbar["default"]
    },
    collapseWrapperDense: {
      marginTop: SNACKBAR_INDENTS.snackbar.dense,
      marginBottom: SNACKBAR_INDENTS.snackbar.dense
    }
  }));
};

var SnackbarItem = function SnackbarItem(_ref) {
  var classes = _ref.classes,
      props = _objectWithoutPropertiesLoose(_ref, ["classes"]);

  var timeout = react.useRef();

  var _useState = react.useState(true),
      collapsed = _useState[0],
      setCollapsed = _useState[1];

  react.useEffect(function () {
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);
  var handleClose = createChainedFunction([props.snack.onClose, props.onClose], props.snack.key);

  var handleEntered = function handleEntered() {
    if (props.snack.requestClose) {
      handleClose(null, REASONS.INSTRCUTED);
    }
  };

  var handleExitedScreen = function handleExitedScreen() {
    timeout.current = setTimeout(function () {
      setCollapsed(!collapsed);
    }, 125);
  };

  var style = props.style,
      dense = props.dense,
      otherAriaAttributes = props.ariaAttributes,
      otherClassName = props.className,
      hideIconVariant = props.hideIconVariant,
      iconVariant = props.iconVariant,
      snack = props.snack,
      otherAction = props.action,
      otherContent = props.content,
      otherTranComponent = props.TransitionComponent,
      otherTranProps = props.TransitionProps,
      otherTranDuration = props.transitionDuration,
      other = _objectWithoutPropertiesLoose(props, ["style", "dense", "ariaAttributes", "className", "hideIconVariant", "iconVariant", "snack", "action", "content", "TransitionComponent", "TransitionProps", "transitionDuration", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting"]);

  var key = snack.key,
      open = snack.open,
      singleClassName = snack.className,
      variant = snack.variant,
      singleContent = snack.content,
      singleAction = snack.action,
      singleAriaAttributes = snack.ariaAttributes,
      anchorOrigin = snack.anchorOrigin,
      snackMessage = snack.message,
      singleTranComponent = snack.TransitionComponent,
      singleTranProps = snack.TransitionProps,
      singleTranDuration = snack.transitionDuration,
      singleSnackProps = _objectWithoutPropertiesLoose(snack, ["persist", "key", "open", "entered", "requestClose", "className", "variant", "content", "action", "ariaAttributes", "anchorOrigin", "message", "TransitionComponent", "TransitionProps", "transitionDuration", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting"]);

  var icon = _extends({}, defaultIconVariants, {}, iconVariant)[variant];

  var ariaAttributes = _extends({
    'aria-describedby': 'notistack-snackbar'
  }, objectMerge(singleAriaAttributes, otherAriaAttributes));

  var TransitionComponent = singleTranComponent || otherTranComponent || DEFAULTS.TransitionComponent;
  var transitionDuration = objectMerge(singleTranDuration, otherTranDuration, DEFAULTS.transitionDuration);

  var transitionProps = _extends({
    direction: getTransitionDirection(anchorOrigin)
  }, objectMerge(singleTranProps, otherTranProps));

  var action = singleAction || otherAction;

  if (typeof action === 'function') {
    action = action(key);
  }

  var content = singleContent || otherContent;

  if (typeof content === 'function') {
    content = content(key, snack.message);
  }

  var callbacks = ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].reduce(function (acc, cbName) {
    var _extends2;

    return _extends({}, acc, (_extends2 = {}, _extends2[cbName] = createChainedFunction([props.snack[cbName], props[cbName]], props.snack.key), _extends2));
  }, {});
  return react.createElement(Collapse, {
    unmountOnExit: true,
    timeout: 175,
    "in": collapsed,
    classes: omitNonCollapseKeys(classes, dense),
    onExited: callbacks.onExited
  }, react.createElement(Snackbar, Object.assign({}, other, singleSnackProps, {
    open: open,
    className: clsx(classes.root, classes.wrappedRoot, classes[transformer.toAnchorOrigin(anchorOrigin)]),
    onClose: handleClose
  }), react.createElement(TransitionComponent, Object.assign({
    appear: true,
    "in": open,
    timeout: transitionDuration
  }, transitionProps, {
    onExit: callbacks.onExit,
    onExiting: callbacks.onExiting,
    onExited: handleExitedScreen,
    onEnter: callbacks.onEnter,
    onEntering: callbacks.onEntering,
    // order matters. first callbacks.onEntered to set entered: true,
    // then handleEntered to check if there's a request for closing
    onEntered: createChainedFunction([callbacks.onEntered, handleEntered])
  }), content || react.createElement(SnackbarContent$1, Object.assign({}, ariaAttributes, {
    role: "alert",
    style: style,
    className: clsx(classes.contentRoot, classes[transformer.toVariant(variant)], otherClassName, singleClassName, !hideIconVariant && icon && classes.lessPadding)
  }), react.createElement("div", {
    id: ariaAttributes['aria-describedby'],
    className: classes.message
  }, !hideIconVariant ? icon : null, snackMessage), action && react.createElement("div", {
    className: classes.action
  }, action)))));
};

var SnackbarItem$1 = /*#__PURE__*/withStyles(styles$1)(SnackbarItem);

var useStyle = /*#__PURE__*/makeStyles(function (theme) {
  var _root, _center;

  return {
    root: (_root = {
      boxSizing: 'border-box',
      display: 'flex',
      maxHeight: '100%',
      maxWidth: '100%',
      position: 'fixed',
      flexDirection: 'column',
      zIndex: theme.zIndex.snackbar,
      height: 'auto',
      width: 'auto',
      minWidth: 288,
      transition: theme.transitions.create(['top', 'right', 'bottom', 'left'], {
        easing: 'ease'
      })
    }, _root[theme.breakpoints.down('xs')] = {
      left: '0 !important',
      right: '0 !important',
      width: '100%'
    }, _root),
    reverseColumns: {
      flexDirection: 'column-reverse'
    },
    top: {
      top: SNACKBAR_INDENTS.view["default"] - SNACKBAR_INDENTS.snackbar["default"]
    },
    topDense: {
      top: SNACKBAR_INDENTS.view.dense - SNACKBAR_INDENTS.snackbar.dense
    },
    bottom: {
      bottom: SNACKBAR_INDENTS.view["default"] - SNACKBAR_INDENTS.snackbar["default"]
    },
    bottomDense: {
      bottom: SNACKBAR_INDENTS.view.dense - SNACKBAR_INDENTS.snackbar.dense
    },
    left: {
      left: SNACKBAR_INDENTS.view["default"]
    },
    leftDense: {
      left: SNACKBAR_INDENTS.view.dense
    },
    right: {
      right: SNACKBAR_INDENTS.view["default"]
    },
    rightDense: {
      right: SNACKBAR_INDENTS.view.dense
    },
    center: (_center = {
      left: '50%',
      transform: 'translateX(-50%)'
    }, _center[theme.breakpoints.down('xs')] = {
      transform: 'translateX(0)'
    }, _center)
  };
});

var SnackbarContainer = function SnackbarContainer(props) {
  var classes = useStyle();

  var className = props.className,
      anchorOrigin = props.anchorOrigin,
      dense = props.dense,
      other = _objectWithoutPropertiesLoose(props, ["className", "anchorOrigin", "dense"]);

  var combinedClassname = clsx(classes.root, classes[anchorOrigin.vertical], classes[anchorOrigin.horizontal], // @ts-ignore
  classes["" + anchorOrigin.vertical + (dense ? 'Dense' : '')], // @ts-ignore
  classes["" + anchorOrigin.horizontal + (dense ? 'Dense' : '')], className, anchorOrigin.vertical === 'bottom' && classes.reverseColumns);
  return react.createElement("div", Object.assign({
    className: combinedClassname
  }, other));
};

var SnackbarContainer$1 = /*#__PURE__*/react.memo(SnackbarContainer);

var SnackbarProvider = /*#__PURE__*/function (_Component) {
  _inheritsLoose(SnackbarProvider, _Component);

  function SnackbarProvider(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    /**
     * Adds a new snackbar to the queue to be presented.
     * Returns generated or user defined key referencing the new snackbar or null
     */

    _this.enqueueSnackbar = function (message, opts) {
      if (opts === void 0) {
        opts = {};
      }

      var _opts = opts,
          key = _opts.key,
          preventDuplicate = _opts.preventDuplicate,
          options = _objectWithoutPropertiesLoose(_opts, ["key", "preventDuplicate"]);

      var hasSpecifiedKey = isDefined(key);
      var id = hasSpecifiedKey ? key : new Date().getTime() + Math.random();
      var merger = merge(options, _this.props, DEFAULTS);

      var snack = _extends({
        key: id
      }, options, {
        message: message,
        open: true,
        entered: false,
        requestClose: false,
        variant: merger('variant'),
        anchorOrigin: merger('anchorOrigin'),
        autoHideDuration: merger('autoHideDuration')
      });

      if (options.persist) {
        snack.autoHideDuration = undefined;
      }

      _this.setState(function (state) {
        if (preventDuplicate === undefined && _this.props.preventDuplicate || preventDuplicate) {
          var compareFunction = function compareFunction(item) {
            return hasSpecifiedKey ? item.key === key : item.message === message;
          };

          var inQueue = state.queue.findIndex(compareFunction) > -1;
          var inView = state.snacks.findIndex(compareFunction) > -1;

          if (inQueue || inView) {
            return state;
          }
        }

        return _this.handleDisplaySnack(_extends({}, state, {
          queue: [].concat(state.queue, [snack])
        }));
      });

      return id;
    };
    /**
     * Reducer: Display snack if there's space for it. Otherwise, immediately
     * begin dismissing the oldest message to start showing the new one.
     */


    _this.handleDisplaySnack = function (state) {
      var snacks = state.snacks;

      if (snacks.length >= _this.maxSnack) {
        return _this.handleDismissOldest(state);
      }

      return _this.processQueue(state);
    };
    /**
     * Reducer: Display items (notifications) in the queue if there's space for them.
     */


    _this.processQueue = function (state) {
      var queue = state.queue,
          snacks = state.snacks;

      if (queue.length > 0) {
        return _extends({}, state, {
          snacks: [].concat(snacks, [queue[0]]),
          queue: queue.slice(1, queue.length)
        });
      }

      return state;
    };
    /**
     * Reducer: Hide oldest snackbar on the screen because there exists a new one which we have to display.
     * (ignoring the one with 'persist' flag. i.e. explicitly told by user not to get dismissed).
     *
     * Note 1: If there is already a message leaving the screen, no new messages are dismissed.
     * Note 2: If the oldest message has not yet entered the screen, only a request to close the
     *         snackbar is made. Once it entered the screen, it will be immediately dismissed.
     */


    _this.handleDismissOldest = function (state) {
      if (state.snacks.some(function (item) {
        return !item.open || item.requestClose;
      })) {
        return state;
      }

      var popped = false;
      var ignore = false;
      var persistentCount = state.snacks.reduce(function (acc, current) {
        return acc + (current.open && current.persist ? 1 : 0);
      }, 0);

      if (persistentCount === _this.maxSnack) {
        ignore = true;
      }

      var snacks = state.snacks.map(function (item) {
        if (!popped && (!item.persist || ignore)) {
          popped = true;

          if (!item.entered) {
            return _extends({}, item, {
              requestClose: true
            });
          }

          if (item.onClose) item.onClose(null, REASONS.MAXSNACK, item.key);
          if (_this.props.onClose) _this.props.onClose(null, REASONS.MAXSNACK, item.key);
          return _extends({}, item, {
            open: false
          });
        }

        return _extends({}, item);
      });
      return _extends({}, state, {
        snacks: snacks
      });
    };
    /**
     * Set the entered state of the snackbar with the given key.
     */


    _this.handleEnteredSnack = function (node, isAppearing, key) {
      if (!isDefined(key)) {
        throw new Error('handleEnteredSnack Cannot be called with undefined key');
      }

      _this.setState(function (_ref) {
        var snacks = _ref.snacks;
        return {
          snacks: snacks.map(function (item) {
            return item.key === key ? _extends({}, item, {
              entered: true
            }) : _extends({}, item);
          })
        };
      });
    };
    /**
     * Hide a snackbar after its timeout.
     */


    _this.handleCloseSnack = function (event, reason, key) {
      // should not use createChainedFunction for onClose.
      // because this.closeSnackbar called this function
      if (_this.props.onClose) {
        _this.props.onClose(event, reason, key);
      }

      if (reason === REASONS.CLICKAWAY) return;
      var shouldCloseAll = key === undefined;

      _this.setState(function (_ref2) {
        var snacks = _ref2.snacks,
            queue = _ref2.queue;
        return {
          snacks: snacks.map(function (item) {
            if (!shouldCloseAll && item.key !== key) {
              return _extends({}, item);
            }

            return item.entered ? _extends({}, item, {
              open: false
            }) : _extends({}, item, {
              requestClose: true
            });
          }),
          queue: queue.filter(function (item) {
            return item.key !== key;
          })
        };
      });
    };
    /**
     * Close snackbar with the given key
     */


    _this.closeSnackbar = function (key) {
      // call individual snackbar onClose callback passed through options parameter
      var toBeClosed = _this.state.snacks.find(function (item) {
        return item.key === key;
      });

      if (isDefined(key) && toBeClosed && toBeClosed.onClose) {
        toBeClosed.onClose(null, REASONS.INSTRUCTED, key);
      }

      _this.handleCloseSnack(null, REASONS.INSTRUCTED, key);
    };
    /**
     * When we set open attribute of a snackbar to false (i.e. after we hide a snackbar),
     * it leaves the screen and immediately after leaving animation is done, this method
     * gets called. We remove the hidden snackbar from state and then display notifications
     * waiting in the queue (if any). If after this process the queue is not empty, the
     * oldest message is dismissed.
     */
    // @ts-ignore


    _this.handleExitedSnack = function (event, key1, key2) {
      var key = key1 || key2;

      if (!isDefined(key)) {
        throw new Error('handleExitedSnack Cannot be called with undefined key');
      }

      _this.setState(function (state) {
        var newState = _this.processQueue(_extends({}, state, {
          snacks: state.snacks.filter(function (item) {
            return item.key !== key;
          })
        }));

        if (newState.queue.length === 0) {
          return newState;
        }

        return _this.handleDismissOldest(newState);
      });
    };

    _this.state = {
      snacks: [],
      queue: [],
      contextValue: {
        enqueueSnackbar: _this.enqueueSnackbar,
        closeSnackbar: _this.closeSnackbar
      }
    };
    return _this;
  }

  var _proto = SnackbarProvider.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var contextValue = this.state.contextValue;

    var _this$props = this.props,
        iconVariant = _this$props.iconVariant,
        _this$props$dense = _this$props.dense,
        dense = _this$props$dense === void 0 ? DEFAULTS.dense : _this$props$dense,
        _this$props$hideIconV = _this$props.hideIconVariant,
        hideIconVariant = _this$props$hideIconV === void 0 ? DEFAULTS.hideIconVariant : _this$props$hideIconV,
        domRoot = _this$props.domRoot,
        children = _this$props.children,
        _this$props$classes = _this$props.classes,
        classes = _this$props$classes === void 0 ? {} : _this$props$classes,
        props = _objectWithoutPropertiesLoose(_this$props, ["maxSnack", "preventDuplicate", "variant", "anchorOrigin", "iconVariant", "dense", "hideIconVariant", "domRoot", "children", "classes"]);

    var categ = this.state.snacks.reduce(function (acc, current) {
      var _extends2;

      var category = originKeyExtractor(current.anchorOrigin);
      var existingOfCategory = acc[category] || [];
      return _extends({}, acc, (_extends2 = {}, _extends2[category] = [].concat(existingOfCategory, [current]), _extends2));
    }, {});
    var snackbars = Object.keys(categ).map(function (origin) {
      var snacks = categ[origin];
      return react.createElement(SnackbarContainer$1, {
        key: origin,
        dense: dense,
        anchorOrigin: snacks[0].anchorOrigin,
        className: clsx(classes.containerRoot, classes[transformer.toContainerAnchorOrigin(origin)])
      }, snacks.map(function (snack) {
        return react.createElement(SnackbarItem$1, Object.assign({}, props, {
          key: snack.key,
          snack: snack,
          dense: dense,
          iconVariant: iconVariant,
          hideIconVariant: hideIconVariant,
          classes: omitContainerKeys(classes),
          onClose: _this2.handleCloseSnack,
          onExited: createChainedFunction([_this2.handleExitedSnack, _this2.props.onExited]),
          onEntered: createChainedFunction([_this2.handleEnteredSnack, _this2.props.onEntered])
        }));
      }));
    });
    return react.createElement(SnackbarContext.Provider, {
      value: contextValue
    }, children, domRoot ? reactDom.createPortal(snackbars, domRoot) : snackbars);
  };

  _createClass(SnackbarProvider, [{
    key: "maxSnack",
    get: function get() {
      return this.props.maxSnack || DEFAULTS.maxSnack;
    }
  }]);

  return SnackbarProvider;
}(react.Component);

var useSnackbar = (function () {
  return react.useContext(SnackbarContext);
});

export { SnackbarProvider, useSnackbar };
