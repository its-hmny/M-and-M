import {
  g as getDefaultExportFromCjs,
  c as createCommonjsModule,
} from './common/_commonjsHelpers-37fa8da4.js';
import { p as propTypes } from './common/index-c103191b.js';
import { r as react } from './common/index-8732a38f.js';

var bundle = createCommonjsModule(function (module) {
  module.exports = (function (e) {
    var t = {};
    function r(o) {
      if (t[o]) return t[o].exports;
      var n = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, o) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (r.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (r.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var n in e)
            r.d(
              o,
              n,
              function (t) {
                return e[t];
              }.bind(null, n)
            );
        return o;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, 'a', t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ''),
      r((r.s = 2))
    );
  })([
    function (e, t) {
      e.exports = propTypes;
    },
    function (e, t) {
      e.exports = react;
    },
    function (module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__),
        function (module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
            prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_1__
            ),
            enterModule;
          function _typeof(e) {
            return (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  })(e);
          }
          function _extends() {
            return (_extends =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var o in r)
                    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                }
                return e;
              }).apply(this, arguments);
          }
          function _classCallCheck(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }
          function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
              var o = t[r];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function _createClass(e, t, r) {
            return (
              t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
            );
          }
          function _inherits(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && _setPrototypeOf(e, t);
          }
          function _setPrototypeOf(e, t) {
            return (_setPrototypeOf =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function _createSuper(e) {
            return function () {
              var t,
                r = _getPrototypeOf(e);
              if (_isNativeReflectConstruct()) {
                var o = _getPrototypeOf(this).constructor;
                t = Reflect.construct(r, arguments, o);
              } else t = r.apply(this, arguments);
              return _possibleConstructorReturn(this, t);
            };
          }
          function _possibleConstructorReturn(e, t) {
            return !t || ('object' !== _typeof(t) && 'function' != typeof t)
              ? _assertThisInitialized(e)
              : t;
          }
          function _assertThisInitialized(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function _isNativeReflectConstruct() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
                !0
              );
            } catch (e) {
              return !1;
            }
          }
          function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function _defineProperty(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          (enterModule =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0),
            enterModule && enterModule(module);
          var __signature__ =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default.signature
                : function (e) {
                    return e;
                  },
            ReactAudioPlayer = (function (_Component) {
              _inherits(ReactAudioPlayer, _Component);
              var _super = _createSuper(ReactAudioPlayer);
              function ReactAudioPlayer() {
                var e;
                _classCallCheck(this, ReactAudioPlayer);
                for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
                  r[o] = arguments[o];
                return (
                  _defineProperty(
                    _assertThisInitialized(
                      (e = _super.call.apply(_super, [this].concat(r)))
                    ),
                    'audioEl',
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()
                  ),
                  _defineProperty(_assertThisInitialized(e), 'listenTracker', void 0),
                  e
                );
              }
              return (
                _createClass(ReactAudioPlayer, [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      var e = this,
                        t = this.audioEl.current;
                      t &&
                        (this.updateVolume(this.props.volume),
                        t.addEventListener('error', function (t) {
                          e.props.onError(t);
                        }),
                        t.addEventListener('canplay', function (t) {
                          e.props.onCanPlay(t);
                        }),
                        t.addEventListener('canplaythrough', function (t) {
                          e.props.onCanPlayThrough(t);
                        }),
                        t.addEventListener('play', function (t) {
                          e.setListenTrack(), e.props.onPlay(t);
                        }),
                        t.addEventListener('abort', function (t) {
                          e.clearListenTrack(), e.props.onAbort(t);
                        }),
                        t.addEventListener('ended', function (t) {
                          e.clearListenTrack(), e.props.onEnded(t);
                        }),
                        t.addEventListener('pause', function (t) {
                          e.clearListenTrack(), e.props.onPause(t);
                        }),
                        t.addEventListener('seeked', function (t) {
                          e.props.onSeeked(t);
                        }),
                        t.addEventListener('loadedmetadata', function (t) {
                          e.props.onLoadedMetadata(t);
                        }),
                        t.addEventListener('volumechange', function (t) {
                          e.props.onVolumeChanged(t);
                        }));
                    },
                  },
                  {
                    key: 'componentDidUpdate',
                    value: function (e) {
                      this.updateVolume(this.props.volume);
                    },
                  },
                  {
                    key: 'setListenTrack',
                    value: function () {
                      var e = this;
                      if (!this.listenTracker) {
                        var t = this.props.listenInterval;
                        this.listenTracker = window.setInterval(function () {
                          e.audioEl.current &&
                            e.props.onListen(e.audioEl.current.currentTime);
                        }, t);
                      }
                    },
                  },
                  {
                    key: 'updateVolume',
                    value: function (e) {
                      var t = this.audioEl.current;
                      null !== t &&
                        'number' == typeof e &&
                        e !== (null == t ? void 0 : t.volume) &&
                        (t.volume = e);
                    },
                  },
                  {
                    key: 'clearListenTrack',
                    value: function () {
                      this.listenTracker &&
                        (clearInterval(this.listenTracker), delete this.listenTracker);
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e =
                          this.props.children ||
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'p',
                            null,
                            'Your browser does not support the ',
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'code',
                              null,
                              'audio'
                            ),
                            ' element.'
                          ),
                        t = !(!1 === this.props.controls),
                        r = this.props.title ? this.props.title : this.props.src,
                        o = {};
                      return (
                        this.props.controlsList &&
                          (o.controlsList = this.props.controlsList),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'audio',
                          _extends(
                            {
                              autoPlay: this.props.autoPlay,
                              className: 'react-audio-player '.concat(
                                this.props.className
                              ),
                              controls: t,
                              crossOrigin: this.props.crossOrigin,
                              id: this.props.id,
                              loop: this.props.loop,
                              muted: this.props.muted,
                              preload: this.props.preload,
                              ref: this.audioEl,
                              src: this.props.src,
                              style: this.props.style,
                              title: r,
                            },
                            o
                          ),
                          e
                        )
                      );
                    },
                  },
                  {
                    key: '__reactstandin__regenerateByEval',
                    value: function __reactstandin__regenerateByEval(key, code) {
                      this[key] = eval(code);
                    },
                  },
                ]),
                ReactAudioPlayer
              );
            })(react__WEBPACK_IMPORTED_MODULE_0__.Component);
          _defineProperty(ReactAudioPlayer, 'propTypes', void 0),
            _defineProperty(ReactAudioPlayer, 'defaultProps', void 0),
            (ReactAudioPlayer.defaultProps = {
              autoPlay: !1,
              children: null,
              className: '',
              controls: !1,
              controlsList: '',
              id: '',
              listenInterval: 1e4,
              loop: !1,
              muted: !1,
              onAbort: function () {},
              onCanPlay: function () {},
              onCanPlayThrough: function () {},
              onEnded: function () {},
              onError: function () {},
              onListen: function () {},
              onPause: function () {},
              onPlay: function () {},
              onSeeked: function () {},
              onVolumeChanged: function () {},
              onLoadedMetadata: function () {},
              preload: 'metadata',
              style: {},
              title: '',
              volume: 1,
            }),
            (ReactAudioPlayer.propTypes = {
              autoPlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
              children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
              className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
              controls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
              controlsList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
              crossOrigin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
              id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
              listenInterval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
              loop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
              muted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
              onAbort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
              onCanPlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
              onCanPlayThrough: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
              onEnded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
              onError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
              onListen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
              onLoadedMetadata: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
              onPause: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
              onPlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
              onSeeked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
              onVolumeChanged: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
              preload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([
                '',
                'none',
                'metadata',
                'auto',
              ]),
              src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
              style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
              ),
              title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
              volume: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
            });
          var _default = ReactAudioPlayer,
            reactHotLoader,
            leaveModule;
          (__webpack_exports__.default = _default),
            (reactHotLoader =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0),
            reactHotLoader &&
              (reactHotLoader.register(
                ReactAudioPlayer,
                'ReactAudioPlayer',
                '/home/justin/Projects/react-audio-player/src/index.tsx'
              ),
              reactHotLoader.register(
                _default,
                'default',
                '/home/justin/Projects/react-audio-player/src/index.tsx'
              )),
            (leaveModule =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0),
            leaveModule && leaveModule(module);
        }.call(this, __webpack_require__(3)(module));
    },
    function (e, t) {
      e.exports = function (e) {
        if (!e.webpackPolyfill) {
          var t = Object.create(e);
          t.children || (t.children = []),
            Object.defineProperty(t, 'loaded', {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, 'id', {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            Object.defineProperty(t, 'exports', { enumerable: !0 }),
            (t.webpackPolyfill = 1);
        }
        return t;
      };
    },
  ]);
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/ getDefaultExportFromCjs(
  bundle
);

export default __pika_web_default_export_for_treeshaking__;
