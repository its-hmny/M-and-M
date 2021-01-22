import { c as createCommonjsModule } from './common/_commonjsHelpers-37fa8da4.js';
import { r as react } from './common/index-8732a38f.js';
import { r as reactDom } from './common/index-859bbe1e.js';

var lib = createCommonjsModule(function (module, exports) {
  !(function (e, t) {
    module.exports = t(react, reactDom);
  })(window, function (e, t) {
    return (function (e) {
      var t = {};
      function r(n) {
        if (t[n]) return t[n].exports;
        var o = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
      }
      return (
        (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
          var n = Object.create(null);
          if (
            (r.r(n),
            Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
            2 & t && 'string' != typeof e)
          )
            for (var o in e)
              r.d(
                n,
                o,
                function (t) {
                  return e[t];
                }.bind(null, o)
              );
          return n;
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
        r((r.s = 32))
      );
    })([
      function (t, r) {
        t.exports = e;
      },
      function (e, t, r) {
        var n = Object.prototype.hasOwnProperty;
        function o(e, t) {
          return n.call(e, t);
        }
        function i(e) {
          return (
            !(e >= 55296 && e <= 57343) &&
            !(e >= 64976 && e <= 65007) &&
            65535 != (65535 & e) &&
            65534 != (65535 & e) &&
            !(e >= 0 && e <= 8) &&
            11 !== e &&
            !(e >= 14 && e <= 31) &&
            !(e >= 127 && e <= 159) &&
            !(e > 1114111)
          );
        }
        function a(e) {
          if (e > 65535) {
            var t = 55296 + ((e -= 65536) >> 10),
              r = 56320 + (1023 & e);
            return String.fromCharCode(t, r);
          }
          return String.fromCharCode(e);
        }
        var s = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
          u = new RegExp(s.source + '|' + /&([a-z#][a-z0-9]{1,31});/gi.source, 'gi'),
          c = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
          l = r(21);
        var f = /[&<>"]/,
          d = /[&<>"]/g,
          p = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
        function h(e) {
          return p[e];
        }
        var g = /[.?*+^$[\]\\(){}|-]/g;
        var M = r(10);
        (t.lib = {}),
          (t.lib.mdurl = r(22)),
          (t.lib.ucmicro = r(52)),
          (t.assign = function (e) {
            return (
              Array.prototype.slice.call(arguments, 1).forEach(function (t) {
                if (t) {
                  if ('object' != typeof t) throw new TypeError(t + 'must be object');
                  Object.keys(t).forEach(function (r) {
                    e[r] = t[r];
                  });
                }
              }),
              e
            );
          }),
          (t.isString = function (e) {
            return (
              '[object String]' ===
              (function (e) {
                return Object.prototype.toString.call(e);
              })(e)
            );
          }),
          (t.has = o),
          (t.unescapeMd = function (e) {
            return e.indexOf('\\') < 0 ? e : e.replace(s, '$1');
          }),
          (t.unescapeAll = function (e) {
            return e.indexOf('\\') < 0 && e.indexOf('&') < 0
              ? e
              : e.replace(u, function (e, t, r) {
                  return (
                    t ||
                    (function (e, t) {
                      var r = 0;
                      return o(l, t)
                        ? l[t]
                        : 35 === t.charCodeAt(0) &&
                          c.test(t) &&
                          i(
                            (r =
                              'x' === t[1].toLowerCase()
                                ? parseInt(t.slice(2), 16)
                                : parseInt(t.slice(1), 10))
                          )
                        ? a(r)
                        : e;
                    })(e, r)
                  );
                });
          }),
          (t.isValidEntityCode = i),
          (t.fromCodePoint = a),
          (t.escapeHtml = function (e) {
            return f.test(e) ? e.replace(d, h) : e;
          }),
          (t.arrayReplaceAt = function (e, t, r) {
            return [].concat(e.slice(0, t), r, e.slice(t + 1));
          }),
          (t.isSpace = function (e) {
            switch (e) {
              case 9:
              case 32:
                return !0;
            }
            return !1;
          }),
          (t.isWhiteSpace = function (e) {
            if (e >= 8192 && e <= 8202) return !0;
            switch (e) {
              case 9:
              case 10:
              case 11:
              case 12:
              case 13:
              case 32:
              case 160:
              case 5760:
              case 8239:
              case 8287:
              case 12288:
                return !0;
            }
            return !1;
          }),
          (t.isMdAsciiPunct = function (e) {
            switch (e) {
              case 33:
              case 34:
              case 35:
              case 36:
              case 37:
              case 38:
              case 39:
              case 40:
              case 41:
              case 42:
              case 43:
              case 44:
              case 45:
              case 46:
              case 47:
              case 58:
              case 59:
              case 60:
              case 61:
              case 62:
              case 63:
              case 64:
              case 91:
              case 92:
              case 93:
              case 94:
              case 95:
              case 96:
              case 123:
              case 124:
              case 125:
              case 126:
                return !0;
              default:
                return !1;
            }
          }),
          (t.isPunctChar = function (e) {
            return M.test(e);
          }),
          (t.escapeRE = function (e) {
            return e.replace(g, '\\$&');
          }),
          (t.normalizeReference = function (e) {
            return e.trim().replace(/\s+/g, ' ').toUpperCase();
          });
      },
      function (e, t, r) {
        var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            },
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var i = n(r(30)),
          a = o(r(4));
        (t.addUserMessage = function (e, t) {
          i.default.dispatch(a.addUserMessage(e, t));
        }),
          (t.addResponseMessage = function (e, t) {
            i.default.dispatch(a.addResponseMessage(e, t));
          }),
          (t.addLinkSnippet = function (e, t) {
            i.default.dispatch(a.addLinkSnippet(e, t));
          }),
          (t.toggleMsgLoader = function () {
            i.default.dispatch(a.toggleMsgLoader());
          }),
          (t.renderCustomComponent = function (e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              n = arguments.length > 3 ? arguments[3] : void 0;
            i.default.dispatch(a.renderCustomComponent(e, t, r, n));
          }),
          (t.toggleWidget = function () {
            i.default.dispatch(a.toggleChat());
          }),
          (t.toggleInputDisabled = function () {
            i.default.dispatch(a.toggleInputDisabled());
          }),
          (t.dropMessages = function () {
            i.default.dispatch(a.dropMessages());
          }),
          (t.isWidgetOpened = function () {
            return i.default.getState().behavior.showChat;
          }),
          (t.setQuickButtons = function (e) {
            i.default.dispatch(a.setQuickButtons(e));
          }),
          (t.deleteMessages = function (e, t) {
            i.default.dispatch(a.deleteMessages(e, t));
          }),
          (t.markAllAsRead = function () {
            i.default.dispatch(a.markAllMessagesRead());
          }),
          (t.setBadgeCount = function (e) {
            i.default.dispatch(a.setBadgeCount(e));
          }),
          (t.openFullscreenPreview = function (e) {
            i.default.dispatch(a.openFullscreenPreview(e));
          }),
          (t.closeFullscreenPreview = function () {
            i.default.dispatch(a.closeFullscreenPreview());
          });
      },
      function (e, t, r) {
        r.r(t),
          r.d(t, 'Provider', function () {
            return l;
          }),
          r.d(t, 'connectAdvanced', function () {
            return j;
          }),
          r.d(t, 'ReactReduxContext', function () {
            return i;
          }),
          r.d(t, 'connect', function () {
            return R;
          }),
          r.d(t, 'batch', function () {
            return V.unstable_batchedUpdates;
          }),
          r.d(t, 'useDispatch', function () {
            return G;
          }),
          r.d(t, 'createDispatchHook', function () {
            return Q;
          }),
          r.d(t, 'useSelector', function () {
            return W;
          }),
          r.d(t, 'createSelectorHook', function () {
            return H;
          }),
          r.d(t, 'useStore', function () {
            return F;
          }),
          r.d(t, 'createStoreHook', function () {
            return B;
          }),
          r.d(t, 'shallowEqual', function () {
            return _;
          });
        var n = r(0),
          o = r.n(n),
          i = (r(33), o.a.createContext(null));
        var a = function (e) {
            e();
          },
          s = function () {
            return a;
          },
          u = { notify: function () {} };
        var c = (function () {
          function e(e, t) {
            (this.store = e),
              (this.parentSub = t),
              (this.unsubscribe = null),
              (this.listeners = u),
              (this.handleChangeWrapper = this.handleChangeWrapper.bind(this));
          }
          var t = e.prototype;
          return (
            (t.addNestedSub = function (e) {
              return this.trySubscribe(), this.listeners.subscribe(e);
            }),
            (t.notifyNestedSubs = function () {
              this.listeners.notify();
            }),
            (t.handleChangeWrapper = function () {
              this.onStateChange && this.onStateChange();
            }),
            (t.isSubscribed = function () {
              return Boolean(this.unsubscribe);
            }),
            (t.trySubscribe = function () {
              this.unsubscribe ||
                ((this.unsubscribe = this.parentSub
                  ? this.parentSub.addNestedSub(this.handleChangeWrapper)
                  : this.store.subscribe(this.handleChangeWrapper)),
                (this.listeners = (function () {
                  var e = s(),
                    t = null,
                    r = null;
                  return {
                    clear: function () {
                      (t = null), (r = null);
                    },
                    notify: function () {
                      e(function () {
                        for (var e = t; e; ) e.callback(), (e = e.next);
                      });
                    },
                    get: function () {
                      for (var e = [], r = t; r; ) e.push(r), (r = r.next);
                      return e;
                    },
                    subscribe: function (e) {
                      var n = !0,
                        o = (r = { callback: e, next: null, prev: r });
                      return (
                        o.prev ? (o.prev.next = o) : (t = o),
                        function () {
                          n &&
                            null !== t &&
                            ((n = !1),
                            o.next ? (o.next.prev = o.prev) : (r = o.prev),
                            o.prev ? (o.prev.next = o.next) : (t = o.next));
                        }
                      );
                    },
                  };
                })()));
            }),
            (t.tryUnsubscribe = function () {
              this.unsubscribe &&
                (this.unsubscribe(),
                (this.unsubscribe = null),
                this.listeners.clear(),
                (this.listeners = u));
            }),
            e
          );
        })();
        var l = function (e) {
          var t = e.store,
            r = e.context,
            a = e.children,
            s = Object(n.useMemo)(
              function () {
                var e = new c(t);
                return (
                  (e.onStateChange = e.notifyNestedSubs), { store: t, subscription: e }
                );
              },
              [t]
            ),
            u = Object(n.useMemo)(
              function () {
                return t.getState();
              },
              [t]
            );
          Object(n.useEffect)(
            function () {
              var e = s.subscription;
              return (
                e.trySubscribe(),
                u !== t.getState() && e.notifyNestedSubs(),
                function () {
                  e.tryUnsubscribe(), (e.onStateChange = null);
                }
              );
            },
            [s, u]
          );
          var l = r || i;
          return o.a.createElement(l.Provider, { value: s }, a);
        };
        function f() {
          return (f =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
        }
        function d(e, t) {
          if (null == e) return {};
          var r,
            n,
            o = {},
            i = Object.keys(e);
          for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
          return o;
        }
        var p = r(16),
          h = r.n(p),
          g = r(14),
          M =
            'undefined' != typeof window &&
            void 0 !== window.document &&
            void 0 !== window.document.createElement
              ? n.useLayoutEffect
              : n.useEffect,
          m = [],
          y = [null, null];
        function N(e, t) {
          var r = e[1];
          return [t.payload, r + 1];
        }
        function b(e, t, r) {
          M(function () {
            return e.apply(void 0, t);
          }, r);
        }
        function v(e, t, r, n, o, i, a) {
          (e.current = n),
            (t.current = o),
            (r.current = !1),
            i.current && ((i.current = null), a());
        }
        function w(e, t, r, n, o, i, a, s, u, c) {
          if (e) {
            var l = !1,
              f = null,
              d = function () {
                if (!l) {
                  var e,
                    r,
                    d = t.getState();
                  try {
                    e = n(d, o.current);
                  } catch (e) {
                    (r = e), (f = e);
                  }
                  r || (f = null),
                    e === i.current
                      ? a.current || u()
                      : ((i.current = e),
                        (s.current = e),
                        (a.current = !0),
                        c({ type: 'STORE_UPDATED', payload: { error: r } }));
                }
              };
            (r.onStateChange = d), r.trySubscribe(), d();
            return function () {
              if (((l = !0), r.tryUnsubscribe(), (r.onStateChange = null), f)) throw f;
            };
          }
        }
        var D = function () {
          return [null, 0];
        };
        function j(e, t) {
          void 0 === t && (t = {});
          var r = t,
            a = r.getDisplayName,
            s =
              void 0 === a
                ? function (e) {
                    return 'ConnectAdvanced(' + e + ')';
                  }
                : a,
            u = r.methodName,
            l = void 0 === u ? 'connectAdvanced' : u,
            p = r.renderCountProp,
            M = void 0 === p ? void 0 : p,
            j = r.shouldHandleStateChanges,
            T = void 0 === j || j,
            _ = r.storeKey,
            z = void 0 === _ ? 'store' : _,
            E = (r.withRef, r.forwardRef),
            A = void 0 !== E && E,
            C = r.context,
            x = void 0 === C ? i : C,
            k = d(r, [
              'getDisplayName',
              'methodName',
              'renderCountProp',
              'shouldHandleStateChanges',
              'storeKey',
              'withRef',
              'forwardRef',
              'context',
            ]),
            I = x;
          return function (t) {
            var r = t.displayName || t.name || 'Component',
              i = s(r),
              a = f({}, k, {
                getDisplayName: s,
                methodName: l,
                renderCountProp: M,
                shouldHandleStateChanges: T,
                storeKey: z,
                displayName: i,
                wrappedComponentName: r,
                WrappedComponent: t,
              }),
              u = k.pure;
            var p = u
              ? n.useMemo
              : function (e) {
                  return e();
                };
            function j(r) {
              var i = Object(n.useMemo)(
                  function () {
                    var e = r.forwardedRef,
                      t = d(r, ['forwardedRef']);
                    return [r.context, e, t];
                  },
                  [r]
                ),
                s = i[0],
                u = i[1],
                l = i[2],
                h = Object(n.useMemo)(
                  function () {
                    return s &&
                      s.Consumer &&
                      Object(g.isContextConsumer)(o.a.createElement(s.Consumer, null))
                      ? s
                      : I;
                  },
                  [s, I]
                ),
                M = Object(n.useContext)(h),
                j =
                  Boolean(r.store) &&
                  Boolean(r.store.getState) &&
                  Boolean(r.store.dispatch);
              Boolean(M) && Boolean(M.store);
              var _ = j ? r.store : M.store,
                z = Object(n.useMemo)(
                  function () {
                    return (function (t) {
                      return e(t.dispatch, a);
                    })(_);
                  },
                  [_]
                ),
                E = Object(n.useMemo)(
                  function () {
                    if (!T) return y;
                    var e = new c(_, j ? null : M.subscription);
                    return [e, e.notifyNestedSubs.bind(e)];
                  },
                  [_, j, M]
                ),
                A = E[0],
                C = E[1],
                x = Object(n.useMemo)(
                  function () {
                    return j ? M : f({}, M, { subscription: A });
                  },
                  [j, M, A]
                ),
                k = Object(n.useReducer)(N, m, D),
                L = k[0][0],
                S = k[1];
              if (L && L.error) throw L.error;
              var O = Object(n.useRef)(),
                P = Object(n.useRef)(l),
                Y = Object(n.useRef)(),
                U = Object(n.useRef)(!1),
                R = p(
                  function () {
                    return Y.current && l === P.current ? Y.current : z(_.getState(), l);
                  },
                  [_, L, l]
                );
              b(v, [P, O, U, l, R, Y, C]),
                b(w, [T, _, A, z, P, O, U, Y, C, S], [_, A, z]);
              var q = Object(n.useMemo)(
                function () {
                  return o.a.createElement(t, f({}, R, { ref: u }));
                },
                [u, t, R]
              );
              return Object(n.useMemo)(
                function () {
                  return T ? o.a.createElement(h.Provider, { value: x }, q) : q;
                },
                [h, q, x]
              );
            }
            var _ = u ? o.a.memo(j) : j;
            if (((_.WrappedComponent = t), (_.displayName = i), A)) {
              var E = o.a.forwardRef(function (e, t) {
                return o.a.createElement(_, f({}, e, { forwardedRef: t }));
              });
              return (E.displayName = i), (E.WrappedComponent = t), h()(E, t);
            }
            return h()(_, t);
          };
        }
        function T(e, t) {
          return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
        }
        function _(e, t) {
          if (T(e, t)) return !0;
          if ('object' != typeof e || null === e || 'object' != typeof t || null === t)
            return !1;
          var r = Object.keys(e),
            n = Object.keys(t);
          if (r.length !== n.length) return !1;
          for (var o = 0; o < r.length; o++)
            if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !T(e[r[o]], t[r[o]]))
              return !1;
          return !0;
        }
        var z = r(15);
        function E(e) {
          return function (t, r) {
            var n = e(t, r);
            function o() {
              return n;
            }
            return (o.dependsOnOwnProps = !1), o;
          };
        }
        function A(e) {
          return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps
            ? Boolean(e.dependsOnOwnProps)
            : 1 !== e.length;
        }
        function C(e, t) {
          return function (t, r) {
            r.displayName;
            var n = function (e, t) {
              return n.dependsOnOwnProps ? n.mapToProps(e, t) : n.mapToProps(e);
            };
            return (
              (n.dependsOnOwnProps = !0),
              (n.mapToProps = function (t, r) {
                (n.mapToProps = e), (n.dependsOnOwnProps = A(e));
                var o = n(t, r);
                return (
                  'function' == typeof o &&
                    ((n.mapToProps = o), (n.dependsOnOwnProps = A(o)), (o = n(t, r))),
                  o
                );
              }),
              n
            );
          };
        }
        var x = [
          function (e) {
            return 'function' == typeof e ? C(e) : void 0;
          },
          function (e) {
            return e
              ? void 0
              : E(function (e) {
                  return { dispatch: e };
                });
          },
          function (e) {
            return e && 'object' == typeof e
              ? E(function (t) {
                  return Object(z.bindActionCreators)(e, t);
                })
              : void 0;
          },
        ];
        var k = [
          function (e) {
            return 'function' == typeof e ? C(e) : void 0;
          },
          function (e) {
            return e
              ? void 0
              : E(function () {
                  return {};
                });
          },
        ];
        function I(e, t, r) {
          return f({}, r, {}, e, {}, t);
        }
        var L = [
          function (e) {
            return 'function' == typeof e
              ? (function (e) {
                  return function (t, r) {
                    r.displayName;
                    var n,
                      o = r.pure,
                      i = r.areMergedPropsEqual,
                      a = !1;
                    return function (t, r, s) {
                      var u = e(t, r, s);
                      return a ? (o && i(u, n)) || (n = u) : ((a = !0), (n = u)), n;
                    };
                  };
                })(e)
              : void 0;
          },
          function (e) {
            return e
              ? void 0
              : function () {
                  return I;
                };
          },
        ];
        function S(e, t, r, n) {
          return function (o, i) {
            return r(e(o, i), t(n, i), i);
          };
        }
        function O(e, t, r, n, o) {
          var i,
            a,
            s,
            u,
            c,
            l = o.areStatesEqual,
            f = o.areOwnPropsEqual,
            d = o.areStatePropsEqual,
            p = !1;
          function h(o, p) {
            var h = !f(p, a),
              g = !l(o, i);
            return (
              (i = o),
              (a = p),
              h && g
                ? ((s = e(i, a)), t.dependsOnOwnProps && (u = t(n, a)), (c = r(s, u, a)))
                : h
                ? (e.dependsOnOwnProps && (s = e(i, a)),
                  t.dependsOnOwnProps && (u = t(n, a)),
                  (c = r(s, u, a)))
                : g
                ? (function () {
                    var t = e(i, a),
                      n = !d(t, s);
                    return (s = t), n && (c = r(s, u, a)), c;
                  })()
                : c
            );
          }
          return function (o, l) {
            return p
              ? h(o, l)
              : (function (o, l) {
                  return (
                    (s = e((i = o), (a = l))),
                    (u = t(n, a)),
                    (c = r(s, u, a)),
                    (p = !0),
                    c
                  );
                })(o, l);
          };
        }
        function P(e, t) {
          var r = t.initMapStateToProps,
            n = t.initMapDispatchToProps,
            o = t.initMergeProps,
            i = d(t, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']),
            a = r(e, i),
            s = n(e, i),
            u = o(e, i);
          return (i.pure ? O : S)(a, s, u, e, i);
        }
        function Y(e, t, r) {
          for (var n = t.length - 1; n >= 0; n--) {
            var o = t[n](e);
            if (o) return o;
          }
          return function (t, n) {
            throw new Error(
              'Invalid value of type ' +
                typeof e +
                ' for ' +
                r +
                ' argument when connecting component ' +
                n.wrappedComponentName +
                '.'
            );
          };
        }
        function U(e, t) {
          return e === t;
        }
        var R = (function (e) {
          var t = void 0 === e ? {} : e,
            r = t.connectHOC,
            n = void 0 === r ? j : r,
            o = t.mapStateToPropsFactories,
            i = void 0 === o ? k : o,
            a = t.mapDispatchToPropsFactories,
            s = void 0 === a ? x : a,
            u = t.mergePropsFactories,
            c = void 0 === u ? L : u,
            l = t.selectorFactory,
            p = void 0 === l ? P : l;
          return function (e, t, r, o) {
            void 0 === o && (o = {});
            var a = o,
              u = a.pure,
              l = void 0 === u || u,
              h = a.areStatesEqual,
              g = void 0 === h ? U : h,
              M = a.areOwnPropsEqual,
              m = void 0 === M ? _ : M,
              y = a.areStatePropsEqual,
              N = void 0 === y ? _ : y,
              b = a.areMergedPropsEqual,
              v = void 0 === b ? _ : b,
              w = d(a, [
                'pure',
                'areStatesEqual',
                'areOwnPropsEqual',
                'areStatePropsEqual',
                'areMergedPropsEqual',
              ]),
              D = Y(e, i, 'mapStateToProps'),
              j = Y(t, s, 'mapDispatchToProps'),
              T = Y(r, c, 'mergeProps');
            return n(
              p,
              f(
                {
                  methodName: 'connect',
                  getDisplayName: function (e) {
                    return 'Connect(' + e + ')';
                  },
                  shouldHandleStateChanges: Boolean(e),
                  initMapStateToProps: D,
                  initMapDispatchToProps: j,
                  initMergeProps: T,
                  pure: l,
                  areStatesEqual: g,
                  areOwnPropsEqual: m,
                  areStatePropsEqual: N,
                  areMergedPropsEqual: v,
                },
                w
              )
            );
          };
        })();
        function q() {
          return Object(n.useContext)(i);
        }
        function B(e) {
          void 0 === e && (e = i);
          var t =
            e === i
              ? q
              : function () {
                  return Object(n.useContext)(e);
                };
          return function () {
            return t().store;
          };
        }
        var F = B();
        function Q(e) {
          void 0 === e && (e = i);
          var t = e === i ? F : B(e);
          return function () {
            return t().dispatch;
          };
        }
        var G = Q(),
          Z = function (e, t) {
            return e === t;
          };
        function H(e) {
          void 0 === e && (e = i);
          var t =
            e === i
              ? q
              : function () {
                  return Object(n.useContext)(e);
                };
          return function (e, r) {
            void 0 === r && (r = Z);
            var o = t();
            return (function (e, t, r, o) {
              var i,
                a = Object(n.useReducer)(function (e) {
                  return e + 1;
                }, 0)[1],
                s = Object(n.useMemo)(
                  function () {
                    return new c(r, o);
                  },
                  [r, o]
                ),
                u = Object(n.useRef)(),
                l = Object(n.useRef)(),
                f = Object(n.useRef)();
              try {
                i = e !== l.current || u.current ? e(r.getState()) : f.current;
              } catch (e) {
                throw (
                  (u.current &&
                    (e.message +=
                      '\nThe error may be correlated with this previous error:\n' +
                      u.current.stack +
                      '\n\n'),
                  e)
                );
              }
              return (
                M(function () {
                  (l.current = e), (f.current = i), (u.current = void 0);
                }),
                M(
                  function () {
                    function e() {
                      try {
                        var e = l.current(r.getState());
                        if (t(e, f.current)) return;
                        f.current = e;
                      } catch (e) {
                        u.current = e;
                      }
                      a({});
                    }
                    return (
                      (s.onStateChange = e),
                      s.trySubscribe(),
                      e(),
                      function () {
                        return s.tryUnsubscribe();
                      }
                    );
                  },
                  [r, s]
                ),
                i
              );
            })(e, r, o.store, o.subscription);
          };
        }
        var W = H(),
          V = r(8);
        !(function (e) {
          a = e;
        })(V.unstable_batchedUpdates);
      },
      function (e, t, r) {
        var n =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(r(5));
        (t.toggleChat = function () {
          return { type: o.TOGGLE_CHAT };
        }),
          (t.toggleInputDisabled = function () {
            return { type: o.TOGGLE_INPUT_DISABLED };
          }),
          (t.addUserMessage = function (e, t) {
            return { type: o.ADD_NEW_USER_MESSAGE, text: e, id: t };
          }),
          (t.addResponseMessage = function (e, t) {
            return { type: o.ADD_NEW_RESPONSE_MESSAGE, text: e, id: t };
          }),
          (t.toggleMsgLoader = function () {
            return { type: o.TOGGLE_MESSAGE_LOADER };
          }),
          (t.addLinkSnippet = function (e, t) {
            return { type: o.ADD_NEW_LINK_SNIPPET, link: e, id: t };
          }),
          (t.renderCustomComponent = function (e, t, r, n) {
            return {
              type: o.ADD_COMPONENT_MESSAGE,
              component: e,
              props: t,
              showAvatar: r,
              id: n,
            };
          }),
          (t.dropMessages = function () {
            return { type: o.DROP_MESSAGES };
          }),
          (t.hideAvatar = function (e) {
            return { type: o.HIDE_AVATAR, index: e };
          }),
          (t.setQuickButtons = function (e) {
            return { type: o.SET_QUICK_BUTTONS, buttons: e };
          }),
          (t.deleteMessages = function (e, t) {
            return { type: o.DELETE_MESSAGES, count: e, id: t };
          }),
          (t.setBadgeCount = function (e) {
            return { type: o.SET_BADGE_COUNT, count: e };
          }),
          (t.markAllMessagesRead = function () {
            return { type: o.MARK_ALL_READ };
          }),
          (t.openFullscreenPreview = function (e) {
            return { type: o.OPEN_FULLSCREEN_PREVIEW, payload: e };
          }),
          (t.closeFullscreenPreview = function () {
            return { type: o.CLOSE_FULLSCREEN_PREVIEW };
          });
      },
      function (e, t, r) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.TOGGLE_CHAT = 'BEHAVIOR/TOGGLE_CHAT'),
          (t.TOGGLE_INPUT_DISABLED = 'BEHAVIOR/TOGGLE_INPUT_DISABLED'),
          (t.TOGGLE_MESSAGE_LOADER = 'BEHAVIOR/TOGGLE_MSG_LOADER'),
          (t.SET_BADGE_COUNT = 'BEHAVIOR/SET_BADGE_COUNT'),
          (t.ADD_NEW_USER_MESSAGE = 'MESSAGES/ADD_NEW_USER_MESSAGE'),
          (t.ADD_NEW_RESPONSE_MESSAGE = 'MESSAGES/ADD_NEW_RESPONSE_MESSAGE'),
          (t.ADD_NEW_LINK_SNIPPET = 'MESSAGES/ADD_NEW_LINK_SNIPPET'),
          (t.ADD_COMPONENT_MESSAGE = 'MESSAGES/ADD_COMPONENT_MESSAGE'),
          (t.DROP_MESSAGES = 'MESSAGES/DROP_MESSAGES'),
          (t.HIDE_AVATAR = 'MESSAGES/HIDE_AVATAR'),
          (t.DELETE_MESSAGES = 'MESSAGES/DELETE_MESSAGES'),
          (t.MARK_ALL_READ = 'MESSAGES/MARK_ALL_READ'),
          (t.SET_QUICK_BUTTONS = 'SET_QUICK_BUTTONS'),
          (t.OPEN_FULLSCREEN_PREVIEW = 'FULLSCREEN/OPEN_PREVIEW'),
          (t.CLOSE_FULLSCREEN_PREVIEW = 'FULLSCREEN/CLOSE_PREVIEW');
      },
      function (e, t, r) {
        var n;
        /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
        /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
        !(function () {
          var r = {}.hasOwnProperty;
          function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var i = typeof n;
                if ('string' === i || 'number' === i) e.push(n);
                else if (Array.isArray(n) && n.length) {
                  var a = o.apply(null, n);
                  a && e.push(a);
                } else if ('object' === i)
                  for (var s in n) r.call(n, s) && n[s] && e.push(s);
              }
            }
            return e.join(' ');
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : void 0 ===
                (n = function () {
                  return o;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      function (e, t, r) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.createReducer = function (e, t, r) {
            return e[r.type] ? e[r.type](t, r) : t;
          });
      },
      function (e, r) {
        e.exports = t;
      },
      function (e, t, r) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(r(44)),
          i = n(r(106)),
          a = n(r(108)),
          s = r(29);
        (t.createNewMessage = function (e, t, r) {
          return {
            type: s.MESSAGES_TYPES.TEXT,
            component: o.default,
            text: e,
            sender: t,
            timestamp: new Date(),
            showAvatar: t === s.MESSAGE_SENDER.RESPONSE,
            customId: r,
            unread: t === s.MESSAGE_SENDER.RESPONSE,
          };
        }),
          (t.createLinkSnippet = function (e, t) {
            return {
              type: s.MESSAGES_TYPES.SNIPPET.LINK,
              component: i.default,
              title: e.title,
              link: e.link,
              target: e.target || '_blank',
              sender: s.MESSAGE_SENDER.RESPONSE,
              timestamp: new Date(),
              showAvatar: !0,
              customId: t,
              unread: !0,
            };
          }),
          (t.createComponentMessage = function (e, t, r, n) {
            return {
              type: s.MESSAGES_TYPES.CUSTOM_COMPONENT,
              component: e,
              props: t,
              sender: s.MESSAGE_SENDER.RESPONSE,
              timestamp: new Date(),
              showAvatar: r,
              customId: n,
              unread: !0,
            };
          }),
          (t.createQuickButton = function (e) {
            return { component: a.default, label: e.label, value: e.value };
          }),
          (t.scrollToBottom = function (e) {
            if (e) {
              var t = e.clientHeight,
                r = e.scrollTop,
                n = e.scrollHeight - (r + t);
              n &&
                (function (e, t, r) {
                  var n =
                      null === window || void 0 === window
                        ? void 0
                        : window.requestAnimationFrame,
                    o = 0;
                  n(function i(a) {
                    o || (o = a);
                    var u = (function (e, t, r, n) {
                        return r * ((e = e / n - 1) * e * e + 1) + t;
                      })(a - o, 0, r, s.MESSAGE_BOX_SCROLL_DURATION),
                      c = t + u;
                    (e.scrollTop = c), c < t + r && n(i);
                  });
                })(e, r, n);
            }
          });
      },
      function (e, t) {
        e.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
      },
      function (e, t, r) {
        function n() {
          (this.__rules__ = []), (this.__cache__ = null);
        }
        (n.prototype.__find__ = function (e) {
          for (var t = 0; t < this.__rules__.length; t++)
            if (this.__rules__[t].name === e) return t;
          return -1;
        }),
          (n.prototype.__compile__ = function () {
            var e = this,
              t = [''];
            e.__rules__.forEach(function (e) {
              e.enabled &&
                e.alt.forEach(function (e) {
                  t.indexOf(e) < 0 && t.push(e);
                });
            }),
              (e.__cache__ = {}),
              t.forEach(function (t) {
                (e.__cache__[t] = []),
                  e.__rules__.forEach(function (r) {
                    r.enabled &&
                      ((t && r.alt.indexOf(t) < 0) || e.__cache__[t].push(r.fn));
                  });
              });
          }),
          (n.prototype.at = function (e, t, r) {
            var n = this.__find__(e),
              o = r || {};
            if (-1 === n) throw new Error('Parser rule not found: ' + e);
            (this.__rules__[n].fn = t),
              (this.__rules__[n].alt = o.alt || []),
              (this.__cache__ = null);
          }),
          (n.prototype.before = function (e, t, r, n) {
            var o = this.__find__(e),
              i = n || {};
            if (-1 === o) throw new Error('Parser rule not found: ' + e);
            this.__rules__.splice(o, 0, {
              name: t,
              enabled: !0,
              fn: r,
              alt: i.alt || [],
            }),
              (this.__cache__ = null);
          }),
          (n.prototype.after = function (e, t, r, n) {
            var o = this.__find__(e),
              i = n || {};
            if (-1 === o) throw new Error('Parser rule not found: ' + e);
            this.__rules__.splice(o + 1, 0, {
              name: t,
              enabled: !0,
              fn: r,
              alt: i.alt || [],
            }),
              (this.__cache__ = null);
          }),
          (n.prototype.push = function (e, t, r) {
            var n = r || {};
            this.__rules__.push({ name: e, enabled: !0, fn: t, alt: n.alt || [] }),
              (this.__cache__ = null);
          }),
          (n.prototype.enable = function (e, t) {
            Array.isArray(e) || (e = [e]);
            var r = [];
            return (
              e.forEach(function (e) {
                var n = this.__find__(e);
                if (n < 0) {
                  if (t) return;
                  throw new Error('Rules manager: invalid rule name ' + e);
                }
                (this.__rules__[n].enabled = !0), r.push(e);
              }, this),
              (this.__cache__ = null),
              r
            );
          }),
          (n.prototype.enableOnly = function (e, t) {
            Array.isArray(e) || (e = [e]),
              this.__rules__.forEach(function (e) {
                e.enabled = !1;
              }),
              this.enable(e, t);
          }),
          (n.prototype.disable = function (e, t) {
            Array.isArray(e) || (e = [e]);
            var r = [];
            return (
              e.forEach(function (e) {
                var n = this.__find__(e);
                if (n < 0) {
                  if (t) return;
                  throw new Error('Rules manager: invalid rule name ' + e);
                }
                (this.__rules__[n].enabled = !1), r.push(e);
              }, this),
              (this.__cache__ = null),
              r
            );
          }),
          (n.prototype.getRules = function (e) {
            return null === this.__cache__ && this.__compile__(), this.__cache__[e] || [];
          }),
          (e.exports = n);
      },
      function (e, t, r) {
        function n(e, t, r) {
          (this.type = e),
            (this.tag = t),
            (this.attrs = null),
            (this.map = null),
            (this.nesting = r),
            (this.level = 0),
            (this.children = null),
            (this.content = ''),
            (this.markup = ''),
            (this.info = ''),
            (this.meta = null),
            (this.block = !1),
            (this.hidden = !1);
        }
        (n.prototype.attrIndex = function (e) {
          var t, r, n;
          if (!this.attrs) return -1;
          for (r = 0, n = (t = this.attrs).length; r < n; r++)
            if (t[r][0] === e) return r;
          return -1;
        }),
          (n.prototype.attrPush = function (e) {
            this.attrs ? this.attrs.push(e) : (this.attrs = [e]);
          }),
          (n.prototype.attrSet = function (e, t) {
            var r = this.attrIndex(e),
              n = [e, t];
            r < 0 ? this.attrPush(n) : (this.attrs[r] = n);
          }),
          (n.prototype.attrGet = function (e) {
            var t = this.attrIndex(e),
              r = null;
            return t >= 0 && (r = this.attrs[t][1]), r;
          }),
          (n.prototype.attrJoin = function (e, t) {
            var r = this.attrIndex(e);
            r < 0
              ? this.attrPush([e, t])
              : (this.attrs[r][1] = this.attrs[r][1] + ' ' + t);
          }),
          (e.exports = n);
      },
      function (e, t, r) {
        function n(e, t) {
          if (t.length < e)
            throw new TypeError(
              e + ' argument' + e > 1
                ? 's'
                : ' required, but only ' + t.length + ' present'
            );
        }
        function o(e) {
          n(1, arguments);
          var t = Object.prototype.toString.call(e);
          return e instanceof Date || ('object' == typeof e && '[object Date]' === t)
            ? new Date(e.getTime())
            : 'number' == typeof e || '[object Number]' === t
            ? new Date(e)
            : (('string' != typeof e && '[object String]' !== t) ||
                'undefined' == typeof console ||
                (console.warn(
                  "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"
                ),
                console.warn(new Error().stack)),
              new Date(NaN));
        }
        r.r(t),
          r.d(t, 'default', function () {
            return H;
          });
        var i = {
          lessThanXSeconds: {
            one: 'less than a second',
            other: 'less than {{count}} seconds',
          },
          xSeconds: { one: '1 second', other: '{{count}} seconds' },
          halfAMinute: 'half a minute',
          lessThanXMinutes: {
            one: 'less than a minute',
            other: 'less than {{count}} minutes',
          },
          xMinutes: { one: '1 minute', other: '{{count}} minutes' },
          aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
          xHours: { one: '1 hour', other: '{{count}} hours' },
          xDays: { one: '1 day', other: '{{count}} days' },
          aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
          xMonths: { one: '1 month', other: '{{count}} months' },
          aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
          xYears: { one: '1 year', other: '{{count}} years' },
          overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
          almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
        };
        function a(e) {
          return function (t) {
            var r = t || {},
              n = r.width ? String(r.width) : e.defaultWidth;
            return e.formats[n] || e.formats[e.defaultWidth];
          };
        }
        var s = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: 'P',
        };
        function u(e) {
          return function (t, r) {
            var n,
              o = r || {};
            if (
              'formatting' === (o.context ? String(o.context) : 'standalone') &&
              e.formattingValues
            ) {
              var i = e.defaultFormattingWidth || e.defaultWidth,
                a = o.width ? String(o.width) : i;
              n = e.formattingValues[a] || e.formattingValues[i];
            } else {
              var s = e.defaultWidth,
                u = o.width ? String(o.width) : e.defaultWidth;
              n = e.values[u] || e.values[s];
            }
            return n[e.argumentCallback ? e.argumentCallback(t) : t];
          };
        }
        function c(e) {
          return function (t, r) {
            var n = String(t),
              o = r || {},
              i = o.width,
              a = (i && e.matchPatterns[i]) || e.matchPatterns[e.defaultMatchWidth],
              s = n.match(a);
            if (!s) return null;
            var u,
              c = s[0],
              l = (i && e.parsePatterns[i]) || e.parsePatterns[e.defaultParseWidth];
            return (
              (u =
                '[object Array]' === Object.prototype.toString.call(l)
                  ? (function (e, t) {
                      for (var r = 0; r < e.length; r++) if (t(e[r])) return r;
                    })(l, function (e) {
                      return e.test(n);
                    })
                  : (function (e, t) {
                      for (var r in e) if (e.hasOwnProperty(r) && t(e[r])) return r;
                    })(l, function (e) {
                      return e.test(n);
                    })),
              (u = e.valueCallback ? e.valueCallback(u) : u),
              {
                value: (u = o.valueCallback ? o.valueCallback(u) : u),
                rest: n.slice(c.length),
              }
            );
          };
        }
        var l = {
          code: 'en-US',
          formatDistance: function (e, t, r) {
            var n;
            return (
              (r = r || {}),
              (n =
                'string' == typeof i[e]
                  ? i[e]
                  : 1 === t
                  ? i[e].one
                  : i[e].other.replace('{{count}}', t)),
              r.addSuffix ? (r.comparison > 0 ? 'in ' + n : n + ' ago') : n
            );
          },
          formatLong: {
            date: a({
              formats: {
                full: 'EEEE, MMMM do, y',
                long: 'MMMM do, y',
                medium: 'MMM d, y',
                short: 'MM/dd/yyyy',
              },
              defaultWidth: 'full',
            }),
            time: a({
              formats: {
                full: 'h:mm:ss a zzzz',
                long: 'h:mm:ss a z',
                medium: 'h:mm:ss a',
                short: 'h:mm a',
              },
              defaultWidth: 'full',
            }),
            dateTime: a({
              formats: {
                full: "{{date}} 'at' {{time}}",
                long: "{{date}} 'at' {{time}}",
                medium: '{{date}}, {{time}}',
                short: '{{date}}, {{time}}',
              },
              defaultWidth: 'full',
            }),
          },
          formatRelative: function (e, t, r, n) {
            return s[e];
          },
          localize: {
            ordinalNumber: function (e, t) {
              var r = Number(e),
                n = r % 100;
              if (n > 20 || n < 10)
                switch (n % 10) {
                  case 1:
                    return r + 'st';
                  case 2:
                    return r + 'nd';
                  case 3:
                    return r + 'rd';
                }
              return r + 'th';
            },
            era: u({
              values: {
                narrow: ['B', 'A'],
                abbreviated: ['BC', 'AD'],
                wide: ['Before Christ', 'Anno Domini'],
              },
              defaultWidth: 'wide',
            }),
            quarter: u({
              values: {
                narrow: ['1', '2', '3', '4'],
                abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
                wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
              },
              defaultWidth: 'wide',
              argumentCallback: function (e) {
                return Number(e) - 1;
              },
            }),
            month: u({
              values: {
                narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
                abbreviated: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                wide: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ],
              },
              defaultWidth: 'wide',
            }),
            day: u({
              values: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                wide: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              defaultWidth: 'wide',
            }),
            dayPeriod: u({
              values: {
                narrow: {
                  am: 'a',
                  pm: 'p',
                  midnight: 'mi',
                  noon: 'n',
                  morning: 'morning',
                  afternoon: 'afternoon',
                  evening: 'evening',
                  night: 'night',
                },
                abbreviated: {
                  am: 'AM',
                  pm: 'PM',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'morning',
                  afternoon: 'afternoon',
                  evening: 'evening',
                  night: 'night',
                },
                wide: {
                  am: 'a.m.',
                  pm: 'p.m.',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'morning',
                  afternoon: 'afternoon',
                  evening: 'evening',
                  night: 'night',
                },
              },
              defaultWidth: 'wide',
              formattingValues: {
                narrow: {
                  am: 'a',
                  pm: 'p',
                  midnight: 'mi',
                  noon: 'n',
                  morning: 'in the morning',
                  afternoon: 'in the afternoon',
                  evening: 'in the evening',
                  night: 'at night',
                },
                abbreviated: {
                  am: 'AM',
                  pm: 'PM',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'in the morning',
                  afternoon: 'in the afternoon',
                  evening: 'in the evening',
                  night: 'at night',
                },
                wide: {
                  am: 'a.m.',
                  pm: 'p.m.',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'in the morning',
                  afternoon: 'in the afternoon',
                  evening: 'in the evening',
                  night: 'at night',
                },
              },
              defaultFormattingWidth: 'wide',
            }),
          },
          match: {
            ordinalNumber: (function (e) {
              return function (t, r) {
                var n = String(t),
                  o = r || {},
                  i = n.match(e.matchPattern);
                if (!i) return null;
                var a = i[0],
                  s = n.match(e.parsePattern);
                if (!s) return null;
                var u = e.valueCallback ? e.valueCallback(s[0]) : s[0];
                return {
                  value: (u = o.valueCallback ? o.valueCallback(u) : u),
                  rest: n.slice(a.length),
                };
              };
            })({
              matchPattern: /^(\d+)(th|st|nd|rd)?/i,
              parsePattern: /\d+/i,
              valueCallback: function (e) {
                return parseInt(e, 10);
              },
            }),
            era: c({
              matchPatterns: {
                narrow: /^(b|a)/i,
                abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                wide: /^(before christ|before common era|anno domini|common era)/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: { any: [/^b/i, /^(a|c)/i] },
              defaultParseWidth: 'any',
            }),
            quarter: c({
              matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^q[1234]/i,
                wide: /^[1234](th|st|nd|rd)? quarter/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
              defaultParseWidth: 'any',
              valueCallback: function (e) {
                return e + 1;
              },
            }),
            month: c({
              matchPatterns: {
                narrow: /^[jfmasond]/i,
                abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: {
                narrow: [
                  /^j/i,
                  /^f/i,
                  /^m/i,
                  /^a/i,
                  /^m/i,
                  /^j/i,
                  /^j/i,
                  /^a/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
                any: [
                  /^ja/i,
                  /^f/i,
                  /^mar/i,
                  /^ap/i,
                  /^may/i,
                  /^jun/i,
                  /^jul/i,
                  /^au/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
              },
              defaultParseWidth: 'any',
            }),
            day: c({
              matchPatterns: {
                narrow: /^[smtwf]/i,
                short: /^(su|mo|tu|we|th|fr|sa)/i,
                abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: {
                narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
              },
              defaultParseWidth: 'any',
            }),
            dayPeriod: c({
              matchPatterns: {
                narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
              },
              defaultMatchWidth: 'any',
              parsePatterns: {
                any: {
                  am: /^a/i,
                  pm: /^p/i,
                  midnight: /^mi/i,
                  noon: /^no/i,
                  morning: /morning/i,
                  afternoon: /afternoon/i,
                  evening: /evening/i,
                  night: /night/i,
                },
              },
              defaultParseWidth: 'any',
            }),
          },
          options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
        };
        function f(e) {
          if (null === e || !0 === e || !1 === e) return NaN;
          var t = Number(e);
          return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
        }
        function d(e, t) {
          return (
            n(2, arguments),
            (function (e, t) {
              n(2, arguments);
              var r = o(e).getTime(),
                i = f(t);
              return new Date(r + i);
            })(e, -f(t))
          );
        }
        function p(e, t) {
          for (var r = e < 0 ? '-' : '', n = Math.abs(e).toString(); n.length < t; )
            n = '0' + n;
          return r + n;
        }
        var h = {
            y: function (e, t) {
              var r = e.getUTCFullYear(),
                n = r > 0 ? r : 1 - r;
              return p('yy' === t ? n % 100 : n, t.length);
            },
            M: function (e, t) {
              var r = e.getUTCMonth();
              return 'M' === t ? String(r + 1) : p(r + 1, 2);
            },
            d: function (e, t) {
              return p(e.getUTCDate(), t.length);
            },
            a: function (e, t) {
              var r = e.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
              switch (t) {
                case 'a':
                case 'aa':
                case 'aaa':
                  return r.toUpperCase();
                case 'aaaaa':
                  return r[0];
                case 'aaaa':
                default:
                  return 'am' === r ? 'a.m.' : 'p.m.';
              }
            },
            h: function (e, t) {
              return p(e.getUTCHours() % 12 || 12, t.length);
            },
            H: function (e, t) {
              return p(e.getUTCHours(), t.length);
            },
            m: function (e, t) {
              return p(e.getUTCMinutes(), t.length);
            },
            s: function (e, t) {
              return p(e.getUTCSeconds(), t.length);
            },
            S: function (e, t) {
              var r = t.length,
                n = e.getUTCMilliseconds();
              return p(Math.floor(n * Math.pow(10, r - 3)), t.length);
            },
          },
          g = 864e5;
        function M(e) {
          n(1, arguments);
          var t = o(e),
            r = t.getUTCDay(),
            i = (r < 1 ? 7 : 0) + r - 1;
          return t.setUTCDate(t.getUTCDate() - i), t.setUTCHours(0, 0, 0, 0), t;
        }
        function m(e) {
          n(1, arguments);
          var t = o(e),
            r = t.getUTCFullYear(),
            i = new Date(0);
          i.setUTCFullYear(r + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
          var a = M(i),
            s = new Date(0);
          s.setUTCFullYear(r, 0, 4), s.setUTCHours(0, 0, 0, 0);
          var u = M(s);
          return t.getTime() >= a.getTime()
            ? r + 1
            : t.getTime() >= u.getTime()
            ? r
            : r - 1;
        }
        var y = 6048e5;
        function N(e) {
          n(1, arguments);
          var t = o(e),
            r =
              M(t).getTime() -
              (function (e) {
                n(1, arguments);
                var t = m(e),
                  r = new Date(0);
                return r.setUTCFullYear(t, 0, 4), r.setUTCHours(0, 0, 0, 0), M(r);
              })(t).getTime();
          return Math.round(r / y) + 1;
        }
        function b(e, t) {
          n(1, arguments);
          var r = t || {},
            i = r.locale,
            a = i && i.options && i.options.weekStartsOn,
            s = null == a ? 0 : f(a),
            u = null == r.weekStartsOn ? s : f(r.weekStartsOn);
          if (!(u >= 0 && u <= 6))
            throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
          var c = o(e),
            l = c.getUTCDay(),
            d = (l < u ? 7 : 0) + l - u;
          return c.setUTCDate(c.getUTCDate() - d), c.setUTCHours(0, 0, 0, 0), c;
        }
        function v(e, t) {
          n(1, arguments);
          var r = o(e, t),
            i = r.getUTCFullYear(),
            a = t || {},
            s = a.locale,
            u = s && s.options && s.options.firstWeekContainsDate,
            c = null == u ? 1 : f(u),
            l = null == a.firstWeekContainsDate ? c : f(a.firstWeekContainsDate);
          if (!(l >= 1 && l <= 7))
            throw new RangeError(
              'firstWeekContainsDate must be between 1 and 7 inclusively'
            );
          var d = new Date(0);
          d.setUTCFullYear(i + 1, 0, l), d.setUTCHours(0, 0, 0, 0);
          var p = b(d, t),
            h = new Date(0);
          h.setUTCFullYear(i, 0, l), h.setUTCHours(0, 0, 0, 0);
          var g = b(h, t);
          return r.getTime() >= p.getTime()
            ? i + 1
            : r.getTime() >= g.getTime()
            ? i
            : i - 1;
        }
        var w = 6048e5;
        function D(e, t) {
          n(1, arguments);
          var r = o(e),
            i =
              b(r, t).getTime() -
              (function (e, t) {
                n(1, arguments);
                var r = t || {},
                  o = r.locale,
                  i = o && o.options && o.options.firstWeekContainsDate,
                  a = null == i ? 1 : f(i),
                  s = null == r.firstWeekContainsDate ? a : f(r.firstWeekContainsDate),
                  u = v(e, t),
                  c = new Date(0);
                return c.setUTCFullYear(u, 0, s), c.setUTCHours(0, 0, 0, 0), b(c, t);
              })(r, t).getTime();
          return Math.round(i / w) + 1;
        }
        var j = 'midnight',
          T = 'noon',
          _ = 'morning',
          z = 'afternoon',
          E = 'evening',
          A = 'night';
        function C(e, t) {
          var r = e > 0 ? '-' : '+',
            n = Math.abs(e),
            o = Math.floor(n / 60),
            i = n % 60;
          if (0 === i) return r + String(o);
          var a = t || '';
          return r + String(o) + a + p(i, 2);
        }
        function x(e, t) {
          return e % 60 == 0 ? (e > 0 ? '-' : '+') + p(Math.abs(e) / 60, 2) : k(e, t);
        }
        function k(e, t) {
          var r = t || '',
            n = e > 0 ? '-' : '+',
            o = Math.abs(e);
          return n + p(Math.floor(o / 60), 2) + r + p(o % 60, 2);
        }
        var I = {
          G: function (e, t, r) {
            var n = e.getUTCFullYear() > 0 ? 1 : 0;
            switch (t) {
              case 'G':
              case 'GG':
              case 'GGG':
                return r.era(n, { width: 'abbreviated' });
              case 'GGGGG':
                return r.era(n, { width: 'narrow' });
              case 'GGGG':
              default:
                return r.era(n, { width: 'wide' });
            }
          },
          y: function (e, t, r) {
            if ('yo' === t) {
              var n = e.getUTCFullYear(),
                o = n > 0 ? n : 1 - n;
              return r.ordinalNumber(o, { unit: 'year' });
            }
            return h.y(e, t);
          },
          Y: function (e, t, r, n) {
            var o = v(e, n),
              i = o > 0 ? o : 1 - o;
            return 'YY' === t
              ? p(i % 100, 2)
              : 'Yo' === t
              ? r.ordinalNumber(i, { unit: 'year' })
              : p(i, t.length);
          },
          R: function (e, t) {
            return p(m(e), t.length);
          },
          u: function (e, t) {
            return p(e.getUTCFullYear(), t.length);
          },
          Q: function (e, t, r) {
            var n = Math.ceil((e.getUTCMonth() + 1) / 3);
            switch (t) {
              case 'Q':
                return String(n);
              case 'QQ':
                return p(n, 2);
              case 'Qo':
                return r.ordinalNumber(n, { unit: 'quarter' });
              case 'QQQ':
                return r.quarter(n, { width: 'abbreviated', context: 'formatting' });
              case 'QQQQQ':
                return r.quarter(n, { width: 'narrow', context: 'formatting' });
              case 'QQQQ':
              default:
                return r.quarter(n, { width: 'wide', context: 'formatting' });
            }
          },
          q: function (e, t, r) {
            var n = Math.ceil((e.getUTCMonth() + 1) / 3);
            switch (t) {
              case 'q':
                return String(n);
              case 'qq':
                return p(n, 2);
              case 'qo':
                return r.ordinalNumber(n, { unit: 'quarter' });
              case 'qqq':
                return r.quarter(n, { width: 'abbreviated', context: 'standalone' });
              case 'qqqqq':
                return r.quarter(n, { width: 'narrow', context: 'standalone' });
              case 'qqqq':
              default:
                return r.quarter(n, { width: 'wide', context: 'standalone' });
            }
          },
          M: function (e, t, r) {
            var n = e.getUTCMonth();
            switch (t) {
              case 'M':
              case 'MM':
                return h.M(e, t);
              case 'Mo':
                return r.ordinalNumber(n + 1, { unit: 'month' });
              case 'MMM':
                return r.month(n, { width: 'abbreviated', context: 'formatting' });
              case 'MMMMM':
                return r.month(n, { width: 'narrow', context: 'formatting' });
              case 'MMMM':
              default:
                return r.month(n, { width: 'wide', context: 'formatting' });
            }
          },
          L: function (e, t, r) {
            var n = e.getUTCMonth();
            switch (t) {
              case 'L':
                return String(n + 1);
              case 'LL':
                return p(n + 1, 2);
              case 'Lo':
                return r.ordinalNumber(n + 1, { unit: 'month' });
              case 'LLL':
                return r.month(n, { width: 'abbreviated', context: 'standalone' });
              case 'LLLLL':
                return r.month(n, { width: 'narrow', context: 'standalone' });
              case 'LLLL':
              default:
                return r.month(n, { width: 'wide', context: 'standalone' });
            }
          },
          w: function (e, t, r, n) {
            var o = D(e, n);
            return 'wo' === t ? r.ordinalNumber(o, { unit: 'week' }) : p(o, t.length);
          },
          I: function (e, t, r) {
            var n = N(e);
            return 'Io' === t ? r.ordinalNumber(n, { unit: 'week' }) : p(n, t.length);
          },
          d: function (e, t, r) {
            return 'do' === t
              ? r.ordinalNumber(e.getUTCDate(), { unit: 'date' })
              : h.d(e, t);
          },
          D: function (e, t, r) {
            var i = (function (e) {
              n(1, arguments);
              var t = o(e),
                r = t.getTime();
              t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
              var i = r - t.getTime();
              return Math.floor(i / g) + 1;
            })(e);
            return 'Do' === t
              ? r.ordinalNumber(i, { unit: 'dayOfYear' })
              : p(i, t.length);
          },
          E: function (e, t, r) {
            var n = e.getUTCDay();
            switch (t) {
              case 'E':
              case 'EE':
              case 'EEE':
                return r.day(n, { width: 'abbreviated', context: 'formatting' });
              case 'EEEEE':
                return r.day(n, { width: 'narrow', context: 'formatting' });
              case 'EEEEEE':
                return r.day(n, { width: 'short', context: 'formatting' });
              case 'EEEE':
              default:
                return r.day(n, { width: 'wide', context: 'formatting' });
            }
          },
          e: function (e, t, r, n) {
            var o = e.getUTCDay(),
              i = (o - n.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case 'e':
                return String(i);
              case 'ee':
                return p(i, 2);
              case 'eo':
                return r.ordinalNumber(i, { unit: 'day' });
              case 'eee':
                return r.day(o, { width: 'abbreviated', context: 'formatting' });
              case 'eeeee':
                return r.day(o, { width: 'narrow', context: 'formatting' });
              case 'eeeeee':
                return r.day(o, { width: 'short', context: 'formatting' });
              case 'eeee':
              default:
                return r.day(o, { width: 'wide', context: 'formatting' });
            }
          },
          c: function (e, t, r, n) {
            var o = e.getUTCDay(),
              i = (o - n.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case 'c':
                return String(i);
              case 'cc':
                return p(i, t.length);
              case 'co':
                return r.ordinalNumber(i, { unit: 'day' });
              case 'ccc':
                return r.day(o, { width: 'abbreviated', context: 'standalone' });
              case 'ccccc':
                return r.day(o, { width: 'narrow', context: 'standalone' });
              case 'cccccc':
                return r.day(o, { width: 'short', context: 'standalone' });
              case 'cccc':
              default:
                return r.day(o, { width: 'wide', context: 'standalone' });
            }
          },
          i: function (e, t, r) {
            var n = e.getUTCDay(),
              o = 0 === n ? 7 : n;
            switch (t) {
              case 'i':
                return String(o);
              case 'ii':
                return p(o, t.length);
              case 'io':
                return r.ordinalNumber(o, { unit: 'day' });
              case 'iii':
                return r.day(n, { width: 'abbreviated', context: 'formatting' });
              case 'iiiii':
                return r.day(n, { width: 'narrow', context: 'formatting' });
              case 'iiiiii':
                return r.day(n, { width: 'short', context: 'formatting' });
              case 'iiii':
              default:
                return r.day(n, { width: 'wide', context: 'formatting' });
            }
          },
          a: function (e, t, r) {
            var n = e.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
            switch (t) {
              case 'a':
              case 'aa':
              case 'aaa':
                return r.dayPeriod(n, { width: 'abbreviated', context: 'formatting' });
              case 'aaaaa':
                return r.dayPeriod(n, { width: 'narrow', context: 'formatting' });
              case 'aaaa':
              default:
                return r.dayPeriod(n, { width: 'wide', context: 'formatting' });
            }
          },
          b: function (e, t, r) {
            var n,
              o = e.getUTCHours();
            switch (((n = 12 === o ? T : 0 === o ? j : o / 12 >= 1 ? 'pm' : 'am'), t)) {
              case 'b':
              case 'bb':
              case 'bbb':
                return r.dayPeriod(n, { width: 'abbreviated', context: 'formatting' });
              case 'bbbbb':
                return r.dayPeriod(n, { width: 'narrow', context: 'formatting' });
              case 'bbbb':
              default:
                return r.dayPeriod(n, { width: 'wide', context: 'formatting' });
            }
          },
          B: function (e, t, r) {
            var n,
              o = e.getUTCHours();
            switch (((n = o >= 17 ? E : o >= 12 ? z : o >= 4 ? _ : A), t)) {
              case 'B':
              case 'BB':
              case 'BBB':
                return r.dayPeriod(n, { width: 'abbreviated', context: 'formatting' });
              case 'BBBBB':
                return r.dayPeriod(n, { width: 'narrow', context: 'formatting' });
              case 'BBBB':
              default:
                return r.dayPeriod(n, { width: 'wide', context: 'formatting' });
            }
          },
          h: function (e, t, r) {
            if ('ho' === t) {
              var n = e.getUTCHours() % 12;
              return 0 === n && (n = 12), r.ordinalNumber(n, { unit: 'hour' });
            }
            return h.h(e, t);
          },
          H: function (e, t, r) {
            return 'Ho' === t
              ? r.ordinalNumber(e.getUTCHours(), { unit: 'hour' })
              : h.H(e, t);
          },
          K: function (e, t, r) {
            var n = e.getUTCHours() % 12;
            return 'Ko' === t ? r.ordinalNumber(n, { unit: 'hour' }) : p(n, t.length);
          },
          k: function (e, t, r) {
            var n = e.getUTCHours();
            return (
              0 === n && (n = 24),
              'ko' === t ? r.ordinalNumber(n, { unit: 'hour' }) : p(n, t.length)
            );
          },
          m: function (e, t, r) {
            return 'mo' === t
              ? r.ordinalNumber(e.getUTCMinutes(), { unit: 'minute' })
              : h.m(e, t);
          },
          s: function (e, t, r) {
            return 'so' === t
              ? r.ordinalNumber(e.getUTCSeconds(), { unit: 'second' })
              : h.s(e, t);
          },
          S: function (e, t) {
            return h.S(e, t);
          },
          X: function (e, t, r, n) {
            var o = (n._originalDate || e).getTimezoneOffset();
            if (0 === o) return 'Z';
            switch (t) {
              case 'X':
                return x(o);
              case 'XXXX':
              case 'XX':
                return k(o);
              case 'XXXXX':
              case 'XXX':
              default:
                return k(o, ':');
            }
          },
          x: function (e, t, r, n) {
            var o = (n._originalDate || e).getTimezoneOffset();
            switch (t) {
              case 'x':
                return x(o);
              case 'xxxx':
              case 'xx':
                return k(o);
              case 'xxxxx':
              case 'xxx':
              default:
                return k(o, ':');
            }
          },
          O: function (e, t, r, n) {
            var o = (n._originalDate || e).getTimezoneOffset();
            switch (t) {
              case 'O':
              case 'OO':
              case 'OOO':
                return 'GMT' + C(o, ':');
              case 'OOOO':
              default:
                return 'GMT' + k(o, ':');
            }
          },
          z: function (e, t, r, n) {
            var o = (n._originalDate || e).getTimezoneOffset();
            switch (t) {
              case 'z':
              case 'zz':
              case 'zzz':
                return 'GMT' + C(o, ':');
              case 'zzzz':
              default:
                return 'GMT' + k(o, ':');
            }
          },
          t: function (e, t, r, n) {
            var o = n._originalDate || e;
            return p(Math.floor(o.getTime() / 1e3), t.length);
          },
          T: function (e, t, r, n) {
            return p((n._originalDate || e).getTime(), t.length);
          },
        };
        function L(e, t) {
          switch (e) {
            case 'P':
              return t.date({ width: 'short' });
            case 'PP':
              return t.date({ width: 'medium' });
            case 'PPP':
              return t.date({ width: 'long' });
            case 'PPPP':
            default:
              return t.date({ width: 'full' });
          }
        }
        function S(e, t) {
          switch (e) {
            case 'p':
              return t.time({ width: 'short' });
            case 'pp':
              return t.time({ width: 'medium' });
            case 'ppp':
              return t.time({ width: 'long' });
            case 'pppp':
            default:
              return t.time({ width: 'full' });
          }
        }
        var O = {
            p: S,
            P: function (e, t) {
              var r,
                n = e.match(/(P+)(p+)?/),
                o = n[1],
                i = n[2];
              if (!i) return L(e, t);
              switch (o) {
                case 'P':
                  r = t.dateTime({ width: 'short' });
                  break;
                case 'PP':
                  r = t.dateTime({ width: 'medium' });
                  break;
                case 'PPP':
                  r = t.dateTime({ width: 'long' });
                  break;
                case 'PPPP':
                default:
                  r = t.dateTime({ width: 'full' });
              }
              return r.replace('{{date}}', L(o, t)).replace('{{time}}', S(i, t));
            },
          },
          P = 6e4;
        function Y(e) {
          return e.getTime() % P;
        }
        var U = ['D', 'DD'],
          R = ['YY', 'YYYY'];
        function q(e) {
          if ('YYYY' === e)
            throw new RangeError(
              'Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr'
            );
          if ('YY' === e)
            throw new RangeError(
              'Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr'
            );
          if ('D' === e)
            throw new RangeError(
              'Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr'
            );
          if ('DD' === e)
            throw new RangeError(
              'Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr'
            );
        }
        var B = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
          F = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
          Q = /^'([^]*?)'?$/,
          G = /''/g,
          Z = /[a-zA-Z]/;
        function H(e, t, r) {
          n(2, arguments);
          var i = String(t),
            a = r || {},
            s = a.locale || l,
            u = s.options && s.options.firstWeekContainsDate,
            c = null == u ? 1 : f(u),
            p = null == a.firstWeekContainsDate ? c : f(a.firstWeekContainsDate);
          if (!(p >= 1 && p <= 7))
            throw new RangeError(
              'firstWeekContainsDate must be between 1 and 7 inclusively'
            );
          var h = s.options && s.options.weekStartsOn,
            g = null == h ? 0 : f(h),
            M = null == a.weekStartsOn ? g : f(a.weekStartsOn);
          if (!(M >= 0 && M <= 6))
            throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
          if (!s.localize) throw new RangeError('locale must contain localize property');
          if (!s.formatLong)
            throw new RangeError('locale must contain formatLong property');
          var m = o(e);
          if (
            !(function (e) {
              n(1, arguments);
              var t = o(e);
              return !isNaN(t);
            })(m)
          )
            throw new RangeError('Invalid time value');
          var y = d(
              m,
              (function (e) {
                var t = new Date(e.getTime()),
                  r = Math.ceil(t.getTimezoneOffset());
                t.setSeconds(0, 0);
                var n = r > 0 ? (P + Y(t)) % P : Y(t);
                return r * P + n;
              })(m)
            ),
            N = {
              firstWeekContainsDate: p,
              weekStartsOn: M,
              locale: s,
              _originalDate: m,
            };
          return i
            .match(F)
            .map(function (e) {
              var t = e[0];
              return 'p' === t || 'P' === t ? (0, O[t])(e, s.formatLong, N) : e;
            })
            .join('')
            .match(B)
            .map(function (e) {
              if ("''" === e) return "'";
              var t = e[0];
              if ("'" === t)
                return (function (e) {
                  return e.match(Q)[1].replace(G, "'");
                })(e);
              var r = I[t];
              if (r)
                return (
                  !a.useAdditionalWeekYearTokens &&
                    (function (e) {
                      return -1 !== R.indexOf(e);
                    })(e) &&
                    q(e),
                  !a.useAdditionalDayOfYearTokens &&
                    (function (e) {
                      return -1 !== U.indexOf(e);
                    })(e) &&
                    q(e),
                  r(y, e, s.localize, N)
                );
              if (t.match(Z))
                throw new RangeError(
                  'Format string contains an unescaped latin alphabet character `' +
                    t +
                    '`'
                );
              return e;
            })
            .join('');
        }
      },
      function (e, t, r) {
        e.exports = r(36);
      },
      function (e, t, r) {
        r.r(t),
          r.d(t, '__DO_NOT_USE__ActionTypes', function () {
            return i;
          }),
          r.d(t, 'applyMiddleware', function () {
            return g;
          }),
          r.d(t, 'bindActionCreators', function () {
            return f;
          }),
          r.d(t, 'combineReducers', function () {
            return c;
          }),
          r.d(t, 'compose', function () {
            return h;
          }),
          r.d(t, 'createStore', function () {
            return s;
          });
        var n = r(17),
          o = function () {
            return Math.random().toString(36).substring(7).split('').join('.');
          },
          i = {
            INIT: '@@redux/INIT' + o(),
            REPLACE: '@@redux/REPLACE' + o(),
            PROBE_UNKNOWN_ACTION: function () {
              return '@@redux/PROBE_UNKNOWN_ACTION' + o();
            },
          };
        function a(e) {
          if ('object' != typeof e || null === e) return !1;
          for (var t = e; null !== Object.getPrototypeOf(t); )
            t = Object.getPrototypeOf(t);
          return Object.getPrototypeOf(e) === t;
        }
        function s(e, t, r) {
          var o;
          if (
            ('function' == typeof t && 'function' == typeof r) ||
            ('function' == typeof r && 'function' == typeof arguments[3])
          )
            throw new Error(
              'It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.'
            );
          if (
            ('function' == typeof t && void 0 === r && ((r = t), (t = void 0)),
            void 0 !== r)
          ) {
            if ('function' != typeof r)
              throw new Error('Expected the enhancer to be a function.');
            return r(s)(e, t);
          }
          if ('function' != typeof e)
            throw new Error('Expected the reducer to be a function.');
          var u = e,
            c = t,
            l = [],
            f = l,
            d = !1;
          function p() {
            f === l && (f = l.slice());
          }
          function h() {
            if (d)
              throw new Error(
                'You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.'
              );
            return c;
          }
          function g(e) {
            if ('function' != typeof e)
              throw new Error('Expected the listener to be a function.');
            if (d)
              throw new Error(
                'You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.'
              );
            var t = !0;
            return (
              p(),
              f.push(e),
              function () {
                if (t) {
                  if (d)
                    throw new Error(
                      'You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.'
                    );
                  (t = !1), p();
                  var r = f.indexOf(e);
                  f.splice(r, 1), (l = null);
                }
              }
            );
          }
          function M(e) {
            if (!a(e))
              throw new Error(
                'Actions must be plain objects. Use custom middleware for async actions.'
              );
            if (void 0 === e.type)
              throw new Error(
                'Actions may not have an undefined "type" property. Have you misspelled a constant?'
              );
            if (d) throw new Error('Reducers may not dispatch actions.');
            try {
              (d = !0), (c = u(c, e));
            } finally {
              d = !1;
            }
            for (var t = (l = f), r = 0; r < t.length; r++) {
              (0, t[r])();
            }
            return e;
          }
          return (
            M({ type: i.INIT }),
            ((o = {
              dispatch: M,
              subscribe: g,
              getState: h,
              replaceReducer: function (e) {
                if ('function' != typeof e)
                  throw new Error('Expected the nextReducer to be a function.');
                (u = e), M({ type: i.REPLACE });
              },
            })[n.a] = function () {
              var e,
                t = g;
              return (
                ((e = {
                  subscribe: function (e) {
                    if ('object' != typeof e || null === e)
                      throw new TypeError('Expected the observer to be an object.');
                    function r() {
                      e.next && e.next(h());
                    }
                    return r(), { unsubscribe: t(r) };
                  },
                })[n.a] = function () {
                  return this;
                }),
                e
              );
            }),
            o
          );
        }
        function u(e, t) {
          var r = t && t.type;
          return (
            'Given ' +
            ((r && 'action "' + String(r) + '"') || 'an action') +
            ', reducer "' +
            e +
            '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
          );
        }
        function c(e) {
          for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
            var o = t[n];
            'function' == typeof e[o] && (r[o] = e[o]);
          }
          var a,
            s = Object.keys(r);
          try {
            !(function (e) {
              Object.keys(e).forEach(function (t) {
                var r = e[t];
                if (void 0 === r(void 0, { type: i.INIT }))
                  throw new Error(
                    'Reducer "' +
                      t +
                      '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don\'t want to set a value for this reducer, you can use null instead of undefined.'
                  );
                if (void 0 === r(void 0, { type: i.PROBE_UNKNOWN_ACTION() }))
                  throw new Error(
                    'Reducer "' +
                      t +
                      '" returned undefined when probed with a random type. Don\'t try to handle ' +
                      i.INIT +
                      ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
                  );
              });
            })(r);
          } catch (e) {
            a = e;
          }
          return function (e, t) {
            if ((void 0 === e && (e = {}), a)) throw a;
            for (var n = !1, o = {}, i = 0; i < s.length; i++) {
              var c = s[i],
                l = r[c],
                f = e[c],
                d = l(f, t);
              if (void 0 === d) {
                var p = u(c, t);
                throw new Error(p);
              }
              (o[c] = d), (n = n || d !== f);
            }
            return (n = n || s.length !== Object.keys(e).length) ? o : e;
          };
        }
        function l(e, t) {
          return function () {
            return t(e.apply(this, arguments));
          };
        }
        function f(e, t) {
          if ('function' == typeof e) return l(e, t);
          if ('object' != typeof e || null === e)
            throw new Error(
              'bindActionCreators expected an object or a function, instead received ' +
                (null === e ? 'null' : typeof e) +
                '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
            );
          var r = {};
          for (var n in e) {
            var o = e[n];
            'function' == typeof o && (r[n] = l(o, t));
          }
          return r;
        }
        function d(e, t, r) {
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
        function p(e, t) {
          var r = Object.keys(e);
          return (
            Object.getOwnPropertySymbols &&
              r.push.apply(r, Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            r
          );
        }
        function h() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return 0 === t.length
            ? function (e) {
                return e;
              }
            : 1 === t.length
            ? t[0]
            : t.reduce(function (e, t) {
                return function () {
                  return e(t.apply(void 0, arguments));
                };
              });
        }
        function g() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return function (e) {
            return function () {
              var r = e.apply(void 0, arguments),
                n = function () {
                  throw new Error(
                    'Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.'
                  );
                },
                o = {
                  getState: r.getState,
                  dispatch: function () {
                    return n.apply(void 0, arguments);
                  },
                },
                i = t.map(function (e) {
                  return e(o);
                });
              return (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? p(r, !0).forEach(function (t) {
                        d(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : p(r).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        );
                      });
                }
                return e;
              })({}, r, { dispatch: (n = h.apply(void 0, i)(r.dispatch)) });
            };
          };
        }
      },
      function (e, t, r) {
        var n = r(14),
          o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          i = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          a = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          s = {};
        function u(e) {
          return n.isMemo(e) ? a : s[e.$$typeof] || o;
        }
        (s[n.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (s[n.Memo] = a);
        var c = Object.defineProperty,
          l = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          d = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, r, n) {
          if ('string' != typeof r) {
            if (h) {
              var o = p(r);
              o && o !== h && e(t, o, n);
            }
            var a = l(r);
            f && (a = a.concat(f(r)));
            for (var s = u(t), g = u(r), M = 0; M < a.length; ++M) {
              var m = a[M];
              if (!(i[m] || (n && n[m]) || (g && g[m]) || (s && s[m]))) {
                var y = d(r, m);
                try {
                  c(t, m, y);
                } catch (e) {}
              }
            }
          }
          return t;
        };
      },
      function (e, t, r) {
        (function (e, n) {
          var o,
            i = r(31);
          o =
            'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
              ? window
              : void 0 !== e
              ? e
              : n;
          var a = Object(i.a)(o);
          t.a = a;
        }.call(this, r(19), r(37)(e)));
      },
      function (e, t, r) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(r(0)),
          i = r(3),
          a = n(r(38)),
          s = n(r(30));
        function u(e) {
          var t = e.title,
            r = e.titleAvatar,
            n = e.subtitle,
            u = e.senderPlaceHolder,
            c = e.showCloseButton,
            l = e.fullScreenMode,
            f = e.autofocus,
            d = e.profileAvatar,
            p = e.launcher,
            h = e.handleNewUserMessage,
            g = e.handleQuickButtonClicked,
            M = e.handleTextInputChange,
            m = e.chatId,
            y = e.launcherOpenLabel,
            N = e.launcherCloseLabel,
            b = e.sendButtonAlt,
            v = e.showTimeStamp,
            w = e.imagePreview,
            D = e.zoomStep,
            j = e.handleSubmit;
          return o.default.createElement(
            i.Provider,
            { store: s.default },
            o.default.createElement(a.default, {
              title: t,
              titleAvatar: r,
              subtitle: n,
              handleNewUserMessage: h,
              handleQuickButtonClicked: g,
              senderPlaceHolder: u,
              profileAvatar: d,
              showCloseButton: c,
              fullScreenMode: l,
              autofocus: f,
              customLauncher: p,
              handleTextInputChange: M,
              chatId: m,
              launcherOpenLabel: y,
              launcherCloseLabel: N,
              sendButtonAlt: b,
              showTimeStamp: v,
              imagePreview: w,
              zoomStep: D,
              handleSubmit: j,
            })
          );
        }
        (u.defaultProps = {
          title: 'Welcome',
          subtitle: 'This is your chat subtitle',
          senderPlaceHolder: 'Type a message...',
          showCloseButton: !0,
          fullScreenMode: !1,
          autofocus: !0,
          chatId: 'rcw-chat-container',
          launcherOpenLabel: 'Open chat',
          launcherCloseLabel: 'Close chat',
          sendButtonAlt: 'Send',
          showTimeStamp: !0,
          imagePreview: !1,
          zoomStep: 80,
        }),
          (t.default = u);
      },
      function (e, t) {
        var r;
        r = (function () {
          return this;
        })();
        try {
          r = r || new Function('return this')();
        } catch (e) {
          'object' == typeof window && (r = window);
        }
        e.exports = r;
      },
      function (e, t) {
        e.exports =
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMzU3IDM1NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzU3IDM1NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnIGlkPSJjbGVhciI+CgkJPHBvbHlnb24gcG9pbnRzPSIzNTcsMzUuNyAzMjEuMywwIDE3OC41LDE0Mi44IDM1LjcsMCAwLDM1LjcgMTQyLjgsMTc4LjUgMCwzMjEuMyAzNS43LDM1NyAxNzguNSwyMTQuMiAzMjEuMywzNTcgMzU3LDMyMS4zICAgICAyMTQuMiwxNzguNSAgICIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=';
      },
      function (e, t, r) {
        e.exports = r(47);
      },
      function (e, t, r) {
        (e.exports.encode = r(48)),
          (e.exports.decode = r(49)),
          (e.exports.format = r(50)),
          (e.exports.parse = r(51));
      },
      function (e, t) {
        e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
      },
      function (e, t) {
        e.exports = /[\0-\x1F\x7F-\x9F]/;
      },
      function (e, t) {
        e.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
      },
      function (e, t, r) {
        var n =
            '<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"\'=<>`\\x00-\\x20]+|\'[^\']*\'|"[^"]*"))?)*\\s*\\/?>',
          o = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>',
          i = new RegExp(
            '^(?:' +
              n +
              '|' +
              o +
              '|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)'
          ),
          a = new RegExp('^(?:' + n + '|' + o + ')');
        (e.exports.HTML_TAG_RE = i), (e.exports.HTML_OPEN_CLOSE_TAG_RE = a);
      },
      function (e, t, r) {
        (e.exports.tokenize = function (e, t) {
          var r,
            n,
            o,
            i,
            a = e.pos,
            s = e.src.charCodeAt(a);
          if (t) return !1;
          if (126 !== s) return !1;
          if (
            ((o = (n = e.scanDelims(e.pos, !0)).length),
            (i = String.fromCharCode(s)),
            o < 2)
          )
            return !1;
          for (o % 2 && ((e.push('text', '', 0).content = i), o--), r = 0; r < o; r += 2)
            (e.push('text', '', 0).content = i + i),
              e.delimiters.push({
                marker: s,
                jump: r,
                token: e.tokens.length - 1,
                level: e.level,
                end: -1,
                open: n.can_open,
                close: n.can_close,
              });
          return (e.pos += n.length), !0;
        }),
          (e.exports.postProcess = function (e) {
            var t,
              r,
              n,
              o,
              i,
              a = [],
              s = e.delimiters,
              u = e.delimiters.length;
            for (t = 0; t < u; t++)
              126 === (n = s[t]).marker &&
                -1 !== n.end &&
                ((o = s[n.end]),
                ((i = e.tokens[n.token]).type = 's_open'),
                (i.tag = 's'),
                (i.nesting = 1),
                (i.markup = '~~'),
                (i.content = ''),
                ((i = e.tokens[o.token]).type = 's_close'),
                (i.tag = 's'),
                (i.nesting = -1),
                (i.markup = '~~'),
                (i.content = ''),
                'text' === e.tokens[o.token - 1].type &&
                  '~' === e.tokens[o.token - 1].content &&
                  a.push(o.token - 1));
            for (; a.length; ) {
              for (
                r = (t = a.pop()) + 1;
                r < e.tokens.length && 's_close' === e.tokens[r].type;

              )
                r++;
              t !== --r &&
                ((i = e.tokens[r]), (e.tokens[r] = e.tokens[t]), (e.tokens[t] = i));
            }
          });
      },
      function (e, t, r) {
        (e.exports.tokenize = function (e, t) {
          var r,
            n,
            o = e.pos,
            i = e.src.charCodeAt(o);
          if (t) return !1;
          if (95 !== i && 42 !== i) return !1;
          for (n = e.scanDelims(e.pos, 42 === i), r = 0; r < n.length; r++)
            (e.push('text', '', 0).content = String.fromCharCode(i)),
              e.delimiters.push({
                marker: i,
                length: n.length,
                jump: r,
                token: e.tokens.length - 1,
                level: e.level,
                end: -1,
                open: n.can_open,
                close: n.can_close,
              });
          return (e.pos += n.length), !0;
        }),
          (e.exports.postProcess = function (e) {
            var t,
              r,
              n,
              o,
              i,
              a,
              s = e.delimiters;
            for (t = e.delimiters.length - 1; t >= 0; t--)
              (95 !== (r = s[t]).marker && 42 !== r.marker) ||
                (-1 !== r.end &&
                  ((n = s[r.end]),
                  (a =
                    t > 0 &&
                    s[t - 1].end === r.end + 1 &&
                    s[t - 1].token === r.token - 1 &&
                    s[r.end + 1].token === n.token + 1 &&
                    s[t - 1].marker === r.marker),
                  (i = String.fromCharCode(r.marker)),
                  ((o = e.tokens[r.token]).type = a ? 'strong_open' : 'em_open'),
                  (o.tag = a ? 'strong' : 'em'),
                  (o.nesting = 1),
                  (o.markup = a ? i + i : i),
                  (o.content = ''),
                  ((o = e.tokens[n.token]).type = a ? 'strong_close' : 'em_close'),
                  (o.tag = a ? 'strong' : 'em'),
                  (o.nesting = -1),
                  (o.markup = a ? i + i : i),
                  (o.content = ''),
                  a &&
                    ((e.tokens[s[t - 1].token].content = ''),
                    (e.tokens[s[r.end + 1].token].content = ''),
                    t--)));
          });
      },
      function (e, t, r) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.MESSAGE_SENDER = { CLIENT: 'client', RESPONSE: 'response' }),
          (t.MESSAGES_TYPES = {
            TEXT: 'text',
            SNIPPET: { LINK: 'snippet' },
            CUSTOM_COMPONENT: 'component',
          }),
          (t.MESSAGE_BOX_SCROLL_DURATION = 400);
      },
      function (e, t, r) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = r(15),
          i = n(r(134)),
          a = n(r(135)),
          s = n(r(136)),
          u = n(r(137)),
          c = o.compose,
          l = o.combineReducers({
            behavior: i.default,
            messages: a.default,
            quickButtons: s.default,
            preview: u.default,
          });
        t.default = o.createStore(l, c());
      },
      function (e, t, r) {
        function n(e) {
          var t,
            r = e.Symbol;
          return (
            'function' == typeof r
              ? r.observable
                ? (t = r.observable)
                : ((t = r('observable')), (r.observable = t))
              : (t = '@@observable'),
            t
          );
        }
        r.d(t, 'a', function () {
          return n;
        });
      },
      function (e, t, r) {
        r.r(t);
        var n = r(18),
          o = r.n(n);
        r.d(t, 'Widget', function () {
          return o.a;
        });
        var i = r(2);
        r.d(t, 'addUserMessage', function () {
          return i.addUserMessage;
        }),
          r.d(t, 'addResponseMessage', function () {
            return i.addResponseMessage;
          }),
          r.d(t, 'addLinkSnippet', function () {
            return i.addLinkSnippet;
          }),
          r.d(t, 'renderCustomComponent', function () {
            return i.renderCustomComponent;
          }),
          r.d(t, 'toggleWidget', function () {
            return i.toggleWidget;
          }),
          r.d(t, 'toggleInputDisabled', function () {
            return i.toggleInputDisabled;
          }),
          r.d(t, 'toggleMsgLoader', function () {
            return i.toggleMsgLoader;
          }),
          r.d(t, 'dropMessages', function () {
            return i.dropMessages;
          }),
          r.d(t, 'isWidgetOpened', function () {
            return i.isWidgetOpened;
          }),
          r.d(t, 'setQuickButtons', function () {
            return i.setQuickButtons;
          }),
          r.d(t, 'deleteMessages', function () {
            return i.deleteMessages;
          }),
          r.d(t, 'markAllAsRead', function () {
            return i.markAllAsRead;
          }),
          r.d(t, 'setBadgeCount', function () {
            return i.setBadgeCount;
          });
      },
      function (e, t, r) {
        e.exports = r(34)();
      },
      function (e, t, r) {
        var n = r(35);
        function o() {}
        function i() {}
        (i.resetWarningCache = o),
          (e.exports = function () {
            function e(e, t, r, o, i, a) {
              if (a !== n) {
                var s = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                );
                throw ((s.name = 'Invariant Violation'), s);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var r = {
              array: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: i,
              resetWarningCache: o,
            };
            return (r.PropTypes = r), r;
          });
      },
      function (e, t, r) {
        e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
      },
      function (e, t, r) {
        /** @license React v16.13.1
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var n = 'function' == typeof Symbol && Symbol.for,
          o = n ? Symbol.for('react.element') : 60103,
          i = n ? Symbol.for('react.portal') : 60106,
          a = n ? Symbol.for('react.fragment') : 60107,
          s = n ? Symbol.for('react.strict_mode') : 60108,
          u = n ? Symbol.for('react.profiler') : 60114,
          c = n ? Symbol.for('react.provider') : 60109,
          l = n ? Symbol.for('react.context') : 60110,
          f = n ? Symbol.for('react.async_mode') : 60111,
          d = n ? Symbol.for('react.concurrent_mode') : 60111,
          p = n ? Symbol.for('react.forward_ref') : 60112,
          h = n ? Symbol.for('react.suspense') : 60113,
          g = n ? Symbol.for('react.suspense_list') : 60120,
          M = n ? Symbol.for('react.memo') : 60115,
          m = n ? Symbol.for('react.lazy') : 60116,
          y = n ? Symbol.for('react.block') : 60121,
          N = n ? Symbol.for('react.fundamental') : 60117,
          b = n ? Symbol.for('react.responder') : 60118,
          v = n ? Symbol.for('react.scope') : 60119;
        function w(e) {
          if ('object' == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case o:
                switch ((e = e.type)) {
                  case f:
                  case d:
                  case a:
                  case u:
                  case s:
                  case h:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case l:
                      case p:
                      case m:
                      case M:
                      case c:
                        return e;
                      default:
                        return t;
                    }
                }
              case i:
                return t;
            }
          }
        }
        function D(e) {
          return w(e) === d;
        }
        (t.AsyncMode = f),
          (t.ConcurrentMode = d),
          (t.ContextConsumer = l),
          (t.ContextProvider = c),
          (t.Element = o),
          (t.ForwardRef = p),
          (t.Fragment = a),
          (t.Lazy = m),
          (t.Memo = M),
          (t.Portal = i),
          (t.Profiler = u),
          (t.StrictMode = s),
          (t.Suspense = h),
          (t.isAsyncMode = function (e) {
            return D(e) || w(e) === f;
          }),
          (t.isConcurrentMode = D),
          (t.isContextConsumer = function (e) {
            return w(e) === l;
          }),
          (t.isContextProvider = function (e) {
            return w(e) === c;
          }),
          (t.isElement = function (e) {
            return 'object' == typeof e && null !== e && e.$$typeof === o;
          }),
          (t.isForwardRef = function (e) {
            return w(e) === p;
          }),
          (t.isFragment = function (e) {
            return w(e) === a;
          }),
          (t.isLazy = function (e) {
            return w(e) === m;
          }),
          (t.isMemo = function (e) {
            return w(e) === M;
          }),
          (t.isPortal = function (e) {
            return w(e) === i;
          }),
          (t.isProfiler = function (e) {
            return w(e) === u;
          }),
          (t.isStrictMode = function (e) {
            return w(e) === s;
          }),
          (t.isSuspense = function (e) {
            return w(e) === h;
          }),
          (t.isValidElementType = function (e) {
            return (
              'string' == typeof e ||
              'function' == typeof e ||
              e === a ||
              e === d ||
              e === u ||
              e === s ||
              e === h ||
              e === g ||
              ('object' == typeof e &&
                null !== e &&
                (e.$$typeof === m ||
                  e.$$typeof === M ||
                  e.$$typeof === c ||
                  e.$$typeof === l ||
                  e.$$typeof === p ||
                  e.$$typeof === N ||
                  e.$$typeof === b ||
                  e.$$typeof === v ||
                  e.$$typeof === y))
            );
          }),
          (t.typeOf = w);
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
      function (e, t, r) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(r(0)),
          i = r(3),
          a = r(4),
          s = n(r(39));
        t.default = function (e) {
          var t = e.title,
            r = e.titleAvatar,
            n = e.subtitle,
            u = e.senderPlaceHolder,
            c = e.profileAvatar,
            l = e.showCloseButton,
            f = e.fullScreenMode,
            d = e.autofocus,
            p = e.customLauncher,
            h = e.handleNewUserMessage,
            g = e.handleQuickButtonClicked,
            M = e.handleTextInputChange,
            m = e.chatId,
            y = e.launcherOpenLabel,
            N = e.launcherCloseLabel,
            b = e.sendButtonAlt,
            v = e.showTimeStamp,
            w = e.imagePreview,
            D = e.zoomStep,
            j = e.handleSubmit,
            T = i.useDispatch();
          return o.default.createElement(s.default, {
            onToggleConversation: function () {
              T(a.toggleChat());
            },
            onSendMessage: function (e) {
              e.preventDefault();
              var t = e.target.message.value;
              t.trim() &&
                (null === j || void 0 === j || j(t),
                T(a.addUserMessage(t)),
                h(t),
                (e.target.message.value = ''));
            },
            onQuickButtonClicked: function (e, t) {
              e.preventDefault(), null === g || void 0 === g || g(t);
            },
            title: t,
            titleAvatar: r,
            subtitle: n,
            senderPlaceHolder: u,
            profileAvatar: c,
            showCloseButton: l,
            fullScreenMode: f,
            autofocus: d,
            customLauncher: p,
            onTextInputChange: M,
            chatId: m,
            launcherOpenLabel: y,
            launcherCloseLabel: N,
            sendButtonAlt: b,
            showTimeStamp: v,
            imagePreview: w,
            zoomStep: D,
          });
        };
      },
      function (e, t, r) {
        var n =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            },
          o =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var i = n(r(0)),
          a = r(3),
          s = o(r(6)),
          u = r(4),
          c = o(r(40)),
          l = o(r(119)),
          f = o(r(124));
        r(133),
          (t.default = function (e) {
            var t = e.title,
              r = e.titleAvatar,
              n = e.subtitle,
              o = e.onSendMessage,
              d = e.onToggleConversation,
              p = e.senderPlaceHolder,
              h = e.onQuickButtonClicked,
              g = e.profileAvatar,
              M = e.showCloseButton,
              m = e.fullScreenMode,
              y = e.autofocus,
              N = e.customLauncher,
              b = e.onTextInputChange,
              v = e.chatId,
              w = e.launcherOpenLabel,
              D = e.launcherCloseLabel,
              j = e.sendButtonAlt,
              T = e.showTimeStamp,
              _ = e.imagePreview,
              z = e.zoomStep,
              E = a.useDispatch(),
              A = a.useSelector(function (e) {
                return {
                  showChat: e.behavior.showChat,
                  dissableInput: e.behavior.disabledInput,
                  visible: e.preview.visible,
                };
              }),
              C = A.dissableInput,
              x = A.showChat,
              k = A.visible,
              I = i.useRef(null);
            i.useEffect(
              function () {
                return (
                  x && (I.current = document.getElementById('messages')),
                  function () {
                    I.current = null;
                  }
                );
              },
              [x]
            );
            var L = function (e) {
              if (e.target && 'rcw-message-img' === e.target.className) {
                var t = e.target,
                  r = {
                    src: t.src,
                    alt: t.alt,
                    width: t.naturalWidth,
                    height: t.naturalHeight,
                  };
                E(u.openFullscreenPreview(r));
              }
            };
            return (
              i.useEffect(
                function () {
                  var e = null === I || void 0 === I ? void 0 : I.current;
                  return (
                    _ &&
                      x &&
                      (null === e || void 0 === e || e.addEventListener('click', L, !1)),
                    function () {
                      null === e || void 0 === e || e.removeEventListener('click', L);
                    }
                  );
                },
                [_, x]
              ),
              i.useEffect(
                function () {
                  document.body.setAttribute(
                    'style',
                    'overflow: '.concat(k || m ? 'hidden' : 'auto')
                  );
                },
                [m, k]
              ),
              i.default.createElement(
                'div',
                {
                  className: s.default('rcw-widget-container', {
                    'rcw-full-screen': m,
                    'rcw-previewer': _,
                  }),
                },
                x &&
                  i.default.createElement(c.default, {
                    title: t,
                    subtitle: n,
                    sendMessage: o,
                    senderPlaceHolder: p,
                    profileAvatar: g,
                    toggleChat: d,
                    showCloseButton: M,
                    disabledInput: C,
                    autofocus: y,
                    titleAvatar: r,
                    className: x ? 'active' : 'hidden',
                    onQuickButtonClicked: h,
                    onTextInputChange: b,
                    sendButtonAlt: j,
                    showTimeStamp: T,
                  }),
                N
                  ? N(d)
                  : !m &&
                      i.default.createElement(l.default, {
                        toggle: d,
                        chatId: v,
                        openLabel: w,
                        closeLabel: D,
                      }),
                _ &&
                  i.default.createElement(f.default, { fullScreenMode: m, zoomStep: z })
              )
            );
          });
      },
      function (e, t, r) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(r(0)),
          i = n(r(6)),
          a = n(r(41)),
          s = n(r(43)),
          u = n(r(113)),
          c = n(r(116));
        r(118),
          (t.default = function (e) {
            var t = e.title,
              r = e.subtitle,
              n = e.senderPlaceHolder,
              l = e.showCloseButton,
              f = e.disabledInput,
              d = e.autofocus,
              p = e.className,
              h = e.sendMessage,
              g = e.toggleChat,
              M = e.profileAvatar,
              m = e.titleAvatar,
              y = e.onQuickButtonClicked,
              N = e.onTextInputChange,
              b = e.sendButtonAlt,
              v = e.showTimeStamp;
            return o.default.createElement(
              'div',
              {
                className: i.default('rcw-conversation-container', p),
                'aria-live': 'polite',
              },
              o.default.createElement(a.default, {
                title: t,
                subtitle: r,
                toggleChat: g,
                showCloseButton: l,
                titleAvatar: m,
              }),
              o.default.createElement(s.default, { profileAvatar: M, showTimeStamp: v }),
              o.default.createElement(c.default, { onQuickButtonClicked: y }),
              o.default.createElement(u.default, {
                sendMessage: h,
                placeholder: n,
                disabledInput: f,
                autofocus: d,
                onTextInputChange: N,
                buttonAlt: b,
              })
            );
          });
      },
      function (e, t, r) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(r(0)),
          i = r(20);
        r(42),
          (t.default = function (e) {
            var t = e.title,
              r = e.subtitle,
              n = e.toggleChat,
              a = e.showCloseButton,
              s = e.titleAvatar;
            return o.default.createElement(
              'div',
              { className: 'rcw-header' },
              a &&
                o.default.createElement(
                  'button',
                  { className: 'rcw-close-button', onClick: n },
                  o.default.createElement('img', {
                    src: i,
                    className: 'rcw-close',
                    alt: 'close',
                  })
                ),
              o.default.createElement(
                'h4',
                { className: 'rcw-title' },
                s &&
                  o.default.createElement('img', {
                    src: s,
                    className: 'avatar',
                    alt: 'profile',
                  }),
                t
              ),
              o.default.createElement('span', null, r)
            );
          });
      },
      function (e, t, r) {},
      function (e, t, r) {
        var n =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            },
          o =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var i = n(r(0)),
          a = r(3),
          s = o(r(13)),
          u = r(9),
          c = r(4),
          l = o(r(110));
        r(112),
          (t.default = function (e) {
            var t = e.profileAvatar,
              r = e.showTimeStamp,
              n = a.useDispatch(),
              o = a.useSelector(function (e) {
                return {
                  messages: e.messages.messages,
                  badgeCount: e.messages.badgeCount,
                  typing: e.behavior.messageLoader,
                  showChat: e.behavior.showChat,
                };
              }),
              f = o.messages,
              d = o.typing,
              p = o.showChat,
              h = o.badgeCount,
              g = i.useRef(null);
            return (
              i.useEffect(
                function () {
                  u.scrollToBottom(g.current),
                    n(
                      p && h
                        ? c.markAllMessagesRead()
                        : c.setBadgeCount(
                            f.filter(function (e) {
                              return e.unread;
                            }).length
                          )
                    );
                },
                [f, h, p]
              ),
              i.default.createElement(
                'div',
                { id: 'messages', className: 'rcw-messages-container', ref: g },
                null === f || void 0 === f
                  ? void 0
                  : f.map(function (e, n) {
                      return i.default.createElement(
                        'div',
                        {
                          className: 'rcw-message',
                          key: ''.concat(n, '-').concat(s.default(e.timestamp, 'hh:mm')),
                        },
                        t &&
                          e.showAvatar &&
                          i.default.createElement('img', {
                            src: t,
                            className: 'rcw-avatar',
                            alt: 'profile',
                          }),
                        (function (e) {
                          var t = e.component;
                          return 'component' === e.type
                            ? i.default.createElement(t, Object.assign({}, e.props))
                            : i.default.createElement(t, {
                                message: e,
                                showTimeStamp: r,
                              });
                        })(e)
                      );
                    }),
                i.default.createElement(l.default, { typing: d })
              )
            );
          });
      },
      function (e, t, r) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(r(0)),
          i = n(r(13)),
          a = n(r(45)),
          s = n(r(101)),
          u = n(r(102)),
          c = n(r(103)),
          l = n(r(104));
        r(105),
          (t.default = function (e) {
            var t = e.message,
              r = e.showTimeStamp,
              n = a
                .default()
                .use(c.default, { img: ['rcw-message-img'] })
                .use(s.default)
                .use(u.default)
                .use(l.default, { attrs: { target: '_blank', rel: 'noopener' } })
                .render(t.text);
            return o.default.createElement(
              'div',
              { className: 'rcw-'.concat(t.sender) },
              o.default.createElement('div', {
                className: 'rcw-message-text',
                dangerouslySetInnerHTML: { __html: n },
              }),
              r &&
                o.default.createElement(
                  'span',
                  { className: 'rcw-timestamp' },
                  i.default(t.timestamp, 'hh:mm')
                )
            );
          });
      },
      function (e, t, r) {
        e.exports = r(46);
      },
      function (e, t, r) {
        var n = r(1),
          o = r(54),
          i = r(58),
          a = r(59),
          s = r(67),
          u = r(81),
          c = r(94),
          l = r(22),
          f = r(96),
          d = { default: r(98), zero: r(99), commonmark: r(100) },
          p = /^(vbscript|javascript|file|data):/,
          h = /^data:image\/(gif|png|jpeg|webp);/;
        function g(e) {
          var t = e.trim().toLowerCase();
          return !p.test(t) || !!h.test(t);
        }
        var M = ['http:', 'https:', 'mailto:'];
        function m(e) {
          var t = l.parse(e, !0);
          if (t.hostname && (!t.protocol || M.indexOf(t.protocol) >= 0))
            try {
              t.hostname = f.toASCII(t.hostname);
            } catch (e) {}
          return l.encode(l.format(t));
        }
        function y(e) {
          var t = l.parse(e, !0);
          if (t.hostname && (!t.protocol || M.indexOf(t.protocol) >= 0))
            try {
              t.hostname = f.toUnicode(t.hostname);
            } catch (e) {}
          return l.decode(l.format(t));
        }
        function N(e, t) {
          if (!(this instanceof N)) return new N(e, t);
          t || n.isString(e) || ((t = e || {}), (e = 'default')),
            (this.inline = new u()),
            (this.block = new s()),
            (this.core = new a()),
            (this.renderer = new i()),
            (this.linkify = new c()),
            (this.validateLink = g),
            (this.normalizeLink = m),
            (this.normalizeLinkText = y),
            (this.utils = n),
            (this.helpers = n.assign({}, o)),
            (this.options = {}),
            this.configure(e),
            t && this.set(t);
        }
        (N.prototype.set = function (e) {
          return n.assign(this.options, e), this;
        }),
          (N.prototype.configure = function (e) {
            var t,
              r = this;
            if (n.isString(e) && !(e = d[(t = e)]))
              throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
            if (!e) throw new Error("Wrong `markdown-it` preset, can't be empty");
            return (
              e.options && r.set(e.options),
              e.components &&
                Object.keys(e.components).forEach(function (t) {
                  e.components[t].rules && r[t].ruler.enableOnly(e.components[t].rules),
                    e.components[t].rules2 &&
                      r[t].ruler2.enableOnly(e.components[t].rules2);
                }),
              this
            );
          }),
          (N.prototype.enable = function (e, t) {
            var r = [];
            Array.isArray(e) || (e = [e]),
              ['core', 'block', 'inline'].forEach(function (t) {
                r = r.concat(this[t].ruler.enable(e, !0));
              }, this),
              (r = r.concat(this.inline.ruler2.enable(e, !0)));
            var n = e.filter(function (e) {
              return r.indexOf(e) < 0;
            });
            if (n.length && !t)
              throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + n);
            return this;
          }),
          (N.prototype.disable = function (e, t) {
            var r = [];
            Array.isArray(e) || (e = [e]),
              ['core', 'block', 'inline'].forEach(function (t) {
                r = r.concat(this[t].ruler.disable(e, !0));
              }, this),
              (r = r.concat(this.inline.ruler2.disable(e, !0)));
            var n = e.filter(function (e) {
              return r.indexOf(e) < 0;
            });
            if (n.length && !t)
              throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + n);
            return this;
          }),
          (N.prototype.use = function (e) {
            var t = [this].concat(Array.prototype.slice.call(arguments, 1));
            return e.apply(e, t), this;
          }),
          (N.prototype.parse = function (e, t) {
            if ('string' != typeof e) throw new Error('Input data should be a String');
            var r = new this.core.State(e, this, t);
            return this.core.process(r), r.tokens;
          }),
          (N.prototype.render = function (e, t) {
            return (t = t || {}), this.renderer.render(this.parse(e, t), this.options, t);
          }),
          (N.prototype.parseInline = function (e, t) {
            var r = new this.core.State(e, this, t);
            return (r.inlineMode = !0), this.core.process(r), r.tokens;
          }),
          (N.prototype.renderInline = function (e, t) {
            return (
              (t = t || {}), this.renderer.render(this.parseInline(e, t), this.options, t)
            );
          }),
          (e.exports = N);
      },
      function (e) {
        e.exports = JSON.parse(
          '{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}'
        );
      },
      function (e, t, r) {
        var n = {};
        function o(e, t, r) {
          var i,
            a,
            s,
            u,
            c,
            l = '';
          for (
            'string' != typeof t && ((r = t), (t = o.defaultChars)),
              void 0 === r && (r = !0),
              c = (function (e) {
                var t,
                  r,
                  o = n[e];
                if (o) return o;
                for (o = n[e] = [], t = 0; t < 128; t++)
                  (r = String.fromCharCode(t)),
                    /^[0-9a-z]$/i.test(r)
                      ? o.push(r)
                      : o.push('%' + ('0' + t.toString(16).toUpperCase()).slice(-2));
                for (t = 0; t < e.length; t++) o[e.charCodeAt(t)] = e[t];
                return o;
              })(t),
              i = 0,
              a = e.length;
            i < a;
            i++
          )
            if (
              ((s = e.charCodeAt(i)),
              r && 37 === s && i + 2 < a && /^[0-9a-f]{2}$/i.test(e.slice(i + 1, i + 3)))
            )
              (l += e.slice(i, i + 3)), (i += 2);
            else if (s < 128) l += c[s];
            else if (s >= 55296 && s <= 57343) {
              if (
                s >= 55296 &&
                s <= 56319 &&
                i + 1 < a &&
                (u = e.charCodeAt(i + 1)) >= 56320 &&
                u <= 57343
              ) {
                (l += encodeURIComponent(e[i] + e[i + 1])), i++;
                continue;
              }
              l += '%EF%BF%BD';
            } else l += encodeURIComponent(e[i]);
          return l;
        }
        (o.defaultChars = ";/?:@&=+$,-_.!~*'()#"),
          (o.componentChars = "-_.!~*'()"),
          (e.exports = o);
      },
      function (e, t, r) {
        var n = {};
        function o(e, t) {
          var r;
          return (
            'string' != typeof t && (t = o.defaultChars),
            (r = (function (e) {
              var t,
                r,
                o = n[e];
              if (o) return o;
              for (o = n[e] = [], t = 0; t < 128; t++)
                (r = String.fromCharCode(t)), o.push(r);
              for (t = 0; t < e.length; t++)
                o[(r = e.charCodeAt(t))] =
                  '%' + ('0' + r.toString(16).toUpperCase()).slice(-2);
              return o;
            })(t)),
            e.replace(/(%[a-f0-9]{2})+/gi, function (e) {
              var t,
                n,
                o,
                i,
                a,
                s,
                u,
                c = '';
              for (t = 0, n = e.length; t < n; t += 3)
                (o = parseInt(e.slice(t + 1, t + 3), 16)) < 128
                  ? (c += r[o])
                  : 192 == (224 & o) &&
                    t + 3 < n &&
                    128 == (192 & (i = parseInt(e.slice(t + 4, t + 6), 16)))
                  ? ((c +=
                      (u = ((o << 6) & 1984) | (63 & i)) < 128
                        ? '��'
                        : String.fromCharCode(u)),
                    (t += 3))
                  : 224 == (240 & o) &&
                    t + 6 < n &&
                    ((i = parseInt(e.slice(t + 4, t + 6), 16)),
                    (a = parseInt(e.slice(t + 7, t + 9), 16)),
                    128 == (192 & i) && 128 == (192 & a))
                  ? ((c +=
                      (u = ((o << 12) & 61440) | ((i << 6) & 4032) | (63 & a)) < 2048 ||
                      (u >= 55296 && u <= 57343)
                        ? '���'
                        : String.fromCharCode(u)),
                    (t += 6))
                  : 240 == (248 & o) &&
                    t + 9 < n &&
                    ((i = parseInt(e.slice(t + 4, t + 6), 16)),
                    (a = parseInt(e.slice(t + 7, t + 9), 16)),
                    (s = parseInt(e.slice(t + 10, t + 12), 16)),
                    128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s))
                  ? ((u =
                      ((o << 18) & 1835008) |
                      ((i << 12) & 258048) |
                      ((a << 6) & 4032) |
                      (63 & s)) < 65536 || u > 1114111
                      ? (c += '����')
                      : ((u -= 65536),
                        (c += String.fromCharCode(
                          55296 + (u >> 10),
                          56320 + (1023 & u)
                        ))),
                    (t += 9))
                  : (c += '�');
              return c;
            })
          );
        }
        (o.defaultChars = ';/?:@&=+$,#'), (o.componentChars = ''), (e.exports = o);
      },
      function (e, t, r) {
        e.exports = function (e) {
          var t = '';
          return (
            (t += e.protocol || ''),
            (t += e.slashes ? '//' : ''),
            (t += e.auth ? e.auth + '@' : ''),
            e.hostname && -1 !== e.hostname.indexOf(':')
              ? (t += '[' + e.hostname + ']')
              : (t += e.hostname || ''),
            (t += e.port ? ':' + e.port : ''),
            (t += e.pathname || ''),
            (t += e.search || ''),
            (t += e.hash || '')
          );
        };
      },
      function (e, t, r) {
        function n() {
          (this.protocol = null),
            (this.slashes = null),
            (this.auth = null),
            (this.port = null),
            (this.hostname = null),
            (this.hash = null),
            (this.search = null),
            (this.pathname = null);
        }
        var o = /^([a-z0-9.+-]+:)/i,
          i = /:[0-9]*$/,
          a = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
          s = ['{', '}', '|', '\\', '^', '`'].concat([
            '<',
            '>',
            '"',
            '`',
            ' ',
            '\r',
            '\n',
            '\t',
          ]),
          u = ["'"].concat(s),
          c = ['%', '/', '?', ';', '#'].concat(u),
          l = ['/', '?', '#'],
          f = /^[+a-z0-9A-Z_-]{0,63}$/,
          d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          p = { javascript: !0, 'javascript:': !0 },
          h = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            'http:': !0,
            'https:': !0,
            'ftp:': !0,
            'gopher:': !0,
            'file:': !0,
          };
        (n.prototype.parse = function (e, t) {
          var r,
            n,
            i,
            s,
            u,
            g = e;
          if (((g = g.trim()), !t && 1 === e.split('#').length)) {
            var M = a.exec(g);
            if (M) return (this.pathname = M[1]), M[2] && (this.search = M[2]), this;
          }
          var m = o.exec(g);
          if (
            (m &&
              ((i = (m = m[0]).toLowerCase()),
              (this.protocol = m),
              (g = g.substr(m.length))),
            (t || m || g.match(/^\/\/[^@\/]+@[^@\/]+/)) &&
              (!(u = '//' === g.substr(0, 2)) ||
                (m && p[m]) ||
                ((g = g.substr(2)), (this.slashes = !0))),
            !p[m] && (u || (m && !h[m])))
          ) {
            var y,
              N,
              b = -1;
            for (r = 0; r < l.length; r++)
              -1 !== (s = g.indexOf(l[r])) && (-1 === b || s < b) && (b = s);
            for (
              -1 !== (N = -1 === b ? g.lastIndexOf('@') : g.lastIndexOf('@', b)) &&
                ((y = g.slice(0, N)), (g = g.slice(N + 1)), (this.auth = y)),
                b = -1,
                r = 0;
              r < c.length;
              r++
            )
              -1 !== (s = g.indexOf(c[r])) && (-1 === b || s < b) && (b = s);
            -1 === b && (b = g.length), ':' === g[b - 1] && b--;
            var v = g.slice(0, b);
            (g = g.slice(b)), this.parseHost(v), (this.hostname = this.hostname || '');
            var w =
              '[' === this.hostname[0] && ']' === this.hostname[this.hostname.length - 1];
            if (!w) {
              var D = this.hostname.split(/\./);
              for (r = 0, n = D.length; r < n; r++) {
                var j = D[r];
                if (j && !j.match(f)) {
                  for (var T = '', _ = 0, z = j.length; _ < z; _++)
                    j.charCodeAt(_) > 127 ? (T += 'x') : (T += j[_]);
                  if (!T.match(f)) {
                    var E = D.slice(0, r),
                      A = D.slice(r + 1),
                      C = j.match(d);
                    C && (E.push(C[1]), A.unshift(C[2])),
                      A.length && (g = A.join('.') + g),
                      (this.hostname = E.join('.'));
                    break;
                  }
                }
              }
            }
            this.hostname.length > 255 && (this.hostname = ''),
              w && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
          }
          var x = g.indexOf('#');
          -1 !== x && ((this.hash = g.substr(x)), (g = g.slice(0, x)));
          var k = g.indexOf('?');
          return (
            -1 !== k && ((this.search = g.substr(k)), (g = g.slice(0, k))),
            g && (this.pathname = g),
            h[i] && this.hostname && !this.pathname && (this.pathname = ''),
            this
          );
        }),
          (n.prototype.parseHost = function (e) {
            var t = i.exec(e);
            t &&
              (':' !== (t = t[0]) && (this.port = t.substr(1)),
              (e = e.substr(0, e.length - t.length))),
              e && (this.hostname = e);
          }),
          (e.exports = function (e, t) {
            if (e && e instanceof n) return e;
            var r = new n();
            return r.parse(e, t), r;
          });
      },
      function (e, t, r) {
        (t.Any = r(23)), (t.Cc = r(24)), (t.Cf = r(53)), (t.P = r(10)), (t.Z = r(25));
      },
      function (e, t) {
        e.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
      },
      function (e, t, r) {
        (t.parseLinkLabel = r(55)),
          (t.parseLinkDestination = r(56)),
          (t.parseLinkTitle = r(57));
      },
      function (e, t, r) {
        e.exports = function (e, t, r) {
          var n,
            o,
            i,
            a,
            s = -1,
            u = e.posMax,
            c = e.pos;
          for (e.pos = t + 1, n = 1; e.pos < u; ) {
            if (93 === (i = e.src.charCodeAt(e.pos)) && 0 === --n) {
              o = !0;
              break;
            }
            if (((a = e.pos), e.md.inline.skipToken(e), 91 === i))
              if (a === e.pos - 1) n++;
              else if (r) return (e.pos = c), -1;
          }
          return o && (s = e.pos), (e.pos = c), s;
        };
      },
      function (e, t, r) {
        var n = r(1).isSpace,
          o = r(1).unescapeAll;
        e.exports = function (e, t, r) {
          var i,
            a,
            s = t,
            u = { ok: !1, pos: 0, lines: 0, str: '' };
          if (60 === e.charCodeAt(t)) {
            for (t++; t < r; ) {
              if (10 === (i = e.charCodeAt(t)) || n(i)) return u;
              if (62 === i)
                return (u.pos = t + 1), (u.str = o(e.slice(s + 1, t))), (u.ok = !0), u;
              92 === i && t + 1 < r ? (t += 2) : t++;
            }
            return u;
          }
          for (a = 0; t < r && 32 !== (i = e.charCodeAt(t)) && !(i < 32 || 127 === i); )
            if (92 === i && t + 1 < r) t += 2;
            else {
              if ((40 === i && a++, 41 === i)) {
                if (0 === a) break;
                a--;
              }
              t++;
            }
          return s === t
            ? u
            : 0 !== a
            ? u
            : ((u.str = o(e.slice(s, t))), (u.lines = 0), (u.pos = t), (u.ok = !0), u);
        };
      },
      function (e, t, r) {
        var n = r(1).unescapeAll;
        e.exports = function (e, t, r) {
          var o,
            i,
            a = 0,
            s = t,
            u = { ok: !1, pos: 0, lines: 0, str: '' };
          if (t >= r) return u;
          if (34 !== (i = e.charCodeAt(t)) && 39 !== i && 40 !== i) return u;
          for (t++, 40 === i && (i = 41); t < r; ) {
            if ((o = e.charCodeAt(t)) === i)
              return (
                (u.pos = t + 1),
                (u.lines = a),
                (u.str = n(e.slice(s + 1, t))),
                (u.ok = !0),
                u
              );
            10 === o
              ? a++
              : 92 === o && t + 1 < r && (t++, 10 === e.charCodeAt(t) && a++),
              t++;
          }
          return u;
        };
      },
      function (e, t, r) {
        var n = r(1).assign,
          o = r(1).unescapeAll,
          i = r(1).escapeHtml,
          a = {};
        function s() {
          this.rules = n({}, a);
        }
        (a.code_inline = function (e, t, r, n, o) {
          var a = e[t];
          return '<code' + o.renderAttrs(a) + '>' + i(e[t].content) + '</code>';
        }),
          (a.code_block = function (e, t, r, n, o) {
            var a = e[t];
            return (
              '<pre' + o.renderAttrs(a) + '><code>' + i(e[t].content) + '</code></pre>\n'
            );
          }),
          (a.fence = function (e, t, r, n, a) {
            var s,
              u,
              c,
              l,
              f = e[t],
              d = f.info ? o(f.info).trim() : '',
              p = '';
            return (
              d && (p = d.split(/\s+/g)[0]),
              0 ===
              (s = (r.highlight && r.highlight(f.content, p)) || i(f.content)).indexOf(
                '<pre'
              )
                ? s + '\n'
                : d
                ? ((u = f.attrIndex('class')),
                  (c = f.attrs ? f.attrs.slice() : []),
                  u < 0
                    ? c.push(['class', r.langPrefix + p])
                    : (c[u][1] += ' ' + r.langPrefix + p),
                  (l = { attrs: c }),
                  '<pre><code' + a.renderAttrs(l) + '>' + s + '</code></pre>\n')
                : '<pre><code' + a.renderAttrs(f) + '>' + s + '</code></pre>\n'
            );
          }),
          (a.image = function (e, t, r, n, o) {
            var i = e[t];
            return (
              (i.attrs[i.attrIndex('alt')][1] = o.renderInlineAsText(i.children, r, n)),
              o.renderToken(e, t, r)
            );
          }),
          (a.hardbreak = function (e, t, r) {
            return r.xhtmlOut ? '<br />\n' : '<br>\n';
          }),
          (a.softbreak = function (e, t, r) {
            return r.breaks ? (r.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
          }),
          (a.text = function (e, t) {
            return i(e[t].content);
          }),
          (a.html_block = function (e, t) {
            return e[t].content;
          }),
          (a.html_inline = function (e, t) {
            return e[t].content;
          }),
          (s.prototype.renderAttrs = function (e) {
            var t, r, n;
            if (!e.attrs) return '';
            for (n = '', t = 0, r = e.attrs.length; t < r; t++)
              n += ' ' + i(e.attrs[t][0]) + '="' + i(e.attrs[t][1]) + '"';
            return n;
          }),
          (s.prototype.renderToken = function (e, t, r) {
            var n,
              o = '',
              i = !1,
              a = e[t];
            return a.hidden
              ? ''
              : (a.block && -1 !== a.nesting && t && e[t - 1].hidden && (o += '\n'),
                (o += (-1 === a.nesting ? '</' : '<') + a.tag),
                (o += this.renderAttrs(a)),
                0 === a.nesting && r.xhtmlOut && (o += ' /'),
                a.block &&
                  ((i = !0),
                  1 === a.nesting &&
                    t + 1 < e.length &&
                    ('inline' === (n = e[t + 1]).type || n.hidden
                      ? (i = !1)
                      : -1 === n.nesting && n.tag === a.tag && (i = !1))),
                (o += i ? '>\n' : '>'));
          }),
          (s.prototype.renderInline = function (e, t, r) {
            for (var n, o = '', i = this.rules, a = 0, s = e.length; a < s; a++)
              void 0 !== i[(n = e[a].type)]
                ? (o += i[n](e, a, t, r, this))
                : (o += this.renderToken(e, a, t));
            return o;
          }),
          (s.prototype.renderInlineAsText = function (e, t, r) {
            for (var n = '', o = 0, i = e.length; o < i; o++)
              'text' === e[o].type
                ? (n += e[o].content)
                : 'image' === e[o].type &&
                  (n += this.renderInlineAsText(e[o].children, t, r));
            return n;
          }),
          (s.prototype.render = function (e, t, r) {
            var n,
              o,
              i,
              a = '',
              s = this.rules;
            for (n = 0, o = e.length; n < o; n++)
              'inline' === (i = e[n].type)
                ? (a += this.renderInline(e[n].children, t, r))
                : void 0 !== s[i]
                ? (a += s[e[n].type](e, n, t, r, this))
                : (a += this.renderToken(e, n, t, r));
            return a;
          }),
          (e.exports = s);
      },
      function (e, t, r) {
        var n = r(11),
          o = [
            ['normalize', r(60)],
            ['block', r(61)],
            ['inline', r(62)],
            ['linkify', r(63)],
            ['replacements', r(64)],
            ['smartquotes', r(65)],
          ];
        function i() {
          this.ruler = new n();
          for (var e = 0; e < o.length; e++) this.ruler.push(o[e][0], o[e][1]);
        }
        (i.prototype.process = function (e) {
          var t, r, n;
          for (t = 0, r = (n = this.ruler.getRules('')).length; t < r; t++) n[t](e);
        }),
          (i.prototype.State = r(66)),
          (e.exports = i);
      },
      function (e, t, r) {
        var n = /\r[\n\u0085]?|[\u2424\u2028\u0085]/g,
          o = /\u0000/g;
        e.exports = function (e) {
          var t;
          (t = (t = e.src.replace(n, '\n')).replace(o, '�')), (e.src = t);
        };
      },
      function (e, t, r) {
        e.exports = function (e) {
          var t;
          e.inlineMode
            ? (((t = new e.Token('inline', '', 0)).content = e.src),
              (t.map = [0, 1]),
              (t.children = []),
              e.tokens.push(t))
            : e.md.block.parse(e.src, e.md, e.env, e.tokens);
        };
      },
      function (e, t, r) {
        e.exports = function (e) {
          var t,
            r,
            n,
            o = e.tokens;
          for (r = 0, n = o.length; r < n; r++)
            'inline' === (t = o[r]).type &&
              e.md.inline.parse(t.content, e.md, e.env, t.children);
        };
      },
      function (e, t, r) {
        var n = r(1).arrayReplaceAt;
        function o(e) {
          return /^<a[>\s]/i.test(e);
        }
        function i(e) {
          return /^<\/a\s*>/i.test(e);
        }
        e.exports = function (e) {
          var t,
            r,
            a,
            s,
            u,
            c,
            l,
            f,
            d,
            p,
            h,
            g,
            M,
            m,
            y,
            N,
            b,
            v = e.tokens;
          if (e.md.options.linkify)
            for (r = 0, a = v.length; r < a; r++)
              if ('inline' === v[r].type && e.md.linkify.pretest(v[r].content))
                for (M = 0, t = (s = v[r].children).length - 1; t >= 0; t--)
                  if ('link_close' !== (c = s[t]).type) {
                    if (
                      ('html_inline' === c.type &&
                        (o(c.content) && M > 0 && M--, i(c.content) && M++),
                      !(M > 0) && 'text' === c.type && e.md.linkify.test(c.content))
                    ) {
                      for (
                        d = c.content,
                          b = e.md.linkify.match(d),
                          l = [],
                          g = c.level,
                          h = 0,
                          f = 0;
                        f < b.length;
                        f++
                      )
                        (m = b[f].url),
                          (y = e.md.normalizeLink(m)),
                          e.md.validateLink(y) &&
                            ((N = b[f].text),
                            (N = b[f].schema
                              ? 'mailto:' !== b[f].schema || /^mailto:/i.test(N)
                                ? e.md.normalizeLinkText(N)
                                : e.md
                                    .normalizeLinkText('mailto:' + N)
                                    .replace(/^mailto:/, '')
                              : e.md
                                  .normalizeLinkText('http://' + N)
                                  .replace(/^http:\/\//, '')),
                            (p = b[f].index) > h &&
                              (((u = new e.Token('text', '', 0)).content = d.slice(h, p)),
                              (u.level = g),
                              l.push(u)),
                            ((u = new e.Token('link_open', 'a', 1)).attrs = [
                              ['href', y],
                            ]),
                            (u.level = g++),
                            (u.markup = 'linkify'),
                            (u.info = 'auto'),
                            l.push(u),
                            ((u = new e.Token('text', '', 0)).content = N),
                            (u.level = g),
                            l.push(u),
                            ((u = new e.Token('link_close', 'a', -1)).level = --g),
                            (u.markup = 'linkify'),
                            (u.info = 'auto'),
                            l.push(u),
                            (h = b[f].lastIndex));
                      h < d.length &&
                        (((u = new e.Token('text', '', 0)).content = d.slice(h)),
                        (u.level = g),
                        l.push(u)),
                        (v[r].children = s = n(s, t, l));
                    }
                  } else
                    for (t--; s[t].level !== c.level && 'link_open' !== s[t].type; ) t--;
        };
      },
      function (e, t, r) {
        var n = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
          o = /\((c|tm|r|p)\)/i,
          i = /\((c|tm|r|p)\)/gi,
          a = { c: '©', r: '®', p: '§', tm: '™' };
        function s(e, t) {
          return a[t.toLowerCase()];
        }
        function u(e) {
          var t,
            r,
            n = 0;
          for (t = e.length - 1; t >= 0; t--)
            'text' !== (r = e[t]).type || n || (r.content = r.content.replace(i, s)),
              'link_open' === r.type && 'auto' === r.info && n--,
              'link_close' === r.type && 'auto' === r.info && n++;
        }
        function c(e) {
          var t,
            r,
            o = 0;
          for (t = e.length - 1; t >= 0; t--)
            'text' !== (r = e[t]).type ||
              o ||
              (n.test(r.content) &&
                (r.content = r.content
                  .replace(/\+-/g, '±')
                  .replace(/\.{2,}/g, '…')
                  .replace(/([?!])…/g, '$1..')
                  .replace(/([?!]){4,}/g, '$1$1$1')
                  .replace(/,{2,}/g, ',')
                  .replace(/(^|[^-])---([^-]|$)/gm, '$1—$2')
                  .replace(/(^|\s)--(\s|$)/gm, '$1–$2')
                  .replace(/(^|[^-\s])--([^-\s]|$)/gm, '$1–$2'))),
              'link_open' === r.type && 'auto' === r.info && o--,
              'link_close' === r.type && 'auto' === r.info && o++;
        }
        e.exports = function (e) {
          var t;
          if (e.md.options.typographer)
            for (t = e.tokens.length - 1; t >= 0; t--)
              'inline' === e.tokens[t].type &&
                (o.test(e.tokens[t].content) && u(e.tokens[t].children),
                n.test(e.tokens[t].content) && c(e.tokens[t].children));
        };
      },
      function (e, t, r) {
        var n = r(1).isWhiteSpace,
          o = r(1).isPunctChar,
          i = r(1).isMdAsciiPunct,
          a = /['"]/,
          s = /['"]/g,
          u = '’';
        function c(e, t, r) {
          return e.substr(0, t) + r + e.substr(t + 1);
        }
        function l(e, t) {
          var r, a, l, f, d, p, h, g, M, m, y, N, b, v, w, D, j, T, _, z, E;
          for (_ = [], r = 0; r < e.length; r++) {
            for (
              a = e[r], h = e[r].level, j = _.length - 1;
              j >= 0 && !(_[j].level <= h);
              j--
            );
            if (((_.length = j + 1), 'text' === a.type)) {
              (d = 0), (p = (l = a.content).length);
              e: for (; d < p && ((s.lastIndex = d), (f = s.exec(l))); ) {
                if (
                  ((w = D = !0),
                  (d = f.index + 1),
                  (T = "'" === f[0]),
                  (M = 32),
                  f.index - 1 >= 0)
                )
                  M = l.charCodeAt(f.index - 1);
                else
                  for (
                    j = r - 1;
                    j >= 0 && 'softbreak' !== e[j].type && 'hardbreak' !== e[j].type;
                    j--
                  )
                    if ('text' === e[j].type) {
                      M = e[j].content.charCodeAt(e[j].content.length - 1);
                      break;
                    }
                if (((m = 32), d < p)) m = l.charCodeAt(d);
                else
                  for (
                    j = r + 1;
                    j < e.length &&
                    'softbreak' !== e[j].type &&
                    'hardbreak' !== e[j].type;
                    j++
                  )
                    if ('text' === e[j].type) {
                      m = e[j].content.charCodeAt(0);
                      break;
                    }
                if (
                  ((y = i(M) || o(String.fromCharCode(M))),
                  (N = i(m) || o(String.fromCharCode(m))),
                  (b = n(M)),
                  (v = n(m)) ? (w = !1) : N && (b || y || (w = !1)),
                  b ? (D = !1) : y && (v || N || (D = !1)),
                  34 === m && '"' === f[0] && M >= 48 && M <= 57 && (D = w = !1),
                  w && D && ((w = !1), (D = N)),
                  w || D)
                ) {
                  if (D)
                    for (j = _.length - 1; j >= 0 && ((g = _[j]), !(_[j].level < h)); j--)
                      if (g.single === T && _[j].level === h) {
                        (g = _[j]),
                          T
                            ? ((z = t.md.options.quotes[2]), (E = t.md.options.quotes[3]))
                            : ((z = t.md.options.quotes[0]),
                              (E = t.md.options.quotes[1])),
                          (a.content = c(a.content, f.index, E)),
                          (e[g.token].content = c(e[g.token].content, g.pos, z)),
                          (d += E.length - 1),
                          g.token === r && (d += z.length - 1),
                          (p = (l = a.content).length),
                          (_.length = j);
                        continue e;
                      }
                  w
                    ? _.push({ token: r, pos: f.index, single: T, level: h })
                    : D && T && (a.content = c(a.content, f.index, u));
                } else T && (a.content = c(a.content, f.index, u));
              }
            }
          }
        }
        e.exports = function (e) {
          var t;
          if (e.md.options.typographer)
            for (t = e.tokens.length - 1; t >= 0; t--)
              'inline' === e.tokens[t].type &&
                a.test(e.tokens[t].content) &&
                l(e.tokens[t].children, e);
        };
      },
      function (e, t, r) {
        var n = r(12);
        function o(e, t, r) {
          (this.src = e),
            (this.env = r),
            (this.tokens = []),
            (this.inlineMode = !1),
            (this.md = t);
        }
        (o.prototype.Token = n), (e.exports = o);
      },
      function (e, t, r) {
        var n = r(11),
          o = [
            ['table', r(68), ['paragraph', 'reference']],
            ['code', r(69)],
            ['fence', r(70), ['paragraph', 'reference', 'blockquote', 'list']],
            ['blockquote', r(71), ['paragraph', 'reference', 'blockquote', 'list']],
            ['hr', r(72), ['paragraph', 'reference', 'blockquote', 'list']],
            ['list', r(73), ['paragraph', 'reference', 'blockquote']],
            ['reference', r(74)],
            ['heading', r(75), ['paragraph', 'reference', 'blockquote']],
            ['lheading', r(76)],
            ['html_block', r(77), ['paragraph', 'reference', 'blockquote']],
            ['paragraph', r(79)],
          ];
        function i() {
          this.ruler = new n();
          for (var e = 0; e < o.length; e++)
            this.ruler.push(o[e][0], o[e][1], { alt: (o[e][2] || []).slice() });
        }
        (i.prototype.tokenize = function (e, t, r) {
          for (
            var n,
              o = this.ruler.getRules(''),
              i = o.length,
              a = t,
              s = !1,
              u = e.md.options.maxNesting;
            a < r &&
            ((e.line = a = e.skipEmptyLines(a)), !(a >= r)) &&
            !(e.sCount[a] < e.blkIndent);

          ) {
            if (e.level >= u) {
              e.line = r;
              break;
            }
            for (n = 0; n < i && !o[n](e, a, r, !1); n++);
            (e.tight = !s),
              e.isEmpty(e.line - 1) && (s = !0),
              (a = e.line) < r && e.isEmpty(a) && ((s = !0), a++, (e.line = a));
          }
        }),
          (i.prototype.parse = function (e, t, r, n) {
            var o;
            e && ((o = new this.State(e, t, r, n)), this.tokenize(o, o.line, o.lineMax));
          }),
          (i.prototype.State = r(80)),
          (e.exports = i);
      },
      function (e, t, r) {
        var n = r(1).isSpace;
        function o(e, t) {
          var r = e.bMarks[t] + e.blkIndent,
            n = e.eMarks[t];
          return e.src.substr(r, n - r);
        }
        function i(e) {
          var t,
            r = [],
            n = 0,
            o = e.length,
            i = 0,
            a = 0,
            s = !1,
            u = 0;
          for (t = e.charCodeAt(n); n < o; )
            96 === t
              ? s
                ? ((s = !1), (u = n))
                : i % 2 == 0 && ((s = !0), (u = n))
              : 124 !== t || i % 2 != 0 || s || (r.push(e.substring(a, n)), (a = n + 1)),
              92 === t ? i++ : (i = 0),
              ++n === o && s && ((s = !1), (n = u + 1)),
              (t = e.charCodeAt(n));
          return r.push(e.substring(a)), r;
        }
        e.exports = function (e, t, r, a) {
          var s, u, c, l, f, d, p, h, g, M, m, y;
          if (t + 2 > r) return !1;
          if (((f = t + 1), e.sCount[f] < e.blkIndent)) return !1;
          if (e.sCount[f] - e.blkIndent >= 4) return !1;
          if ((c = e.bMarks[f] + e.tShift[f]) >= e.eMarks[f]) return !1;
          if (124 !== (s = e.src.charCodeAt(c++)) && 45 !== s && 58 !== s) return !1;
          for (; c < e.eMarks[f]; ) {
            if (124 !== (s = e.src.charCodeAt(c)) && 45 !== s && 58 !== s && !n(s))
              return !1;
            c++;
          }
          for (d = (u = o(e, t + 1)).split('|'), g = [], l = 0; l < d.length; l++) {
            if (!(M = d[l].trim())) {
              if (0 === l || l === d.length - 1) continue;
              return !1;
            }
            if (!/^:?-+:?$/.test(M)) return !1;
            58 === M.charCodeAt(M.length - 1)
              ? g.push(58 === M.charCodeAt(0) ? 'center' : 'right')
              : 58 === M.charCodeAt(0)
              ? g.push('left')
              : g.push('');
          }
          if (-1 === (u = o(e, t).trim()).indexOf('|')) return !1;
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          if ((p = (d = i(u.replace(/^\||\|$/g, ''))).length) > g.length) return !1;
          if (a) return !0;
          for (
            (h = e.push('table_open', 'table', 1)).map = m = [t, 0],
              (h = e.push('thead_open', 'thead', 1)).map = [t, t + 1],
              (h = e.push('tr_open', 'tr', 1)).map = [t, t + 1],
              l = 0;
            l < d.length;
            l++
          )
            ((h = e.push('th_open', 'th', 1)).map = [t, t + 1]),
              g[l] && (h.attrs = [['style', 'text-align:' + g[l]]]),
              ((h = e.push('inline', '', 0)).content = d[l].trim()),
              (h.map = [t, t + 1]),
              (h.children = []),
              (h = e.push('th_close', 'th', -1));
          for (
            h = e.push('tr_close', 'tr', -1),
              h = e.push('thead_close', 'thead', -1),
              (h = e.push('tbody_open', 'tbody', 1)).map = y = [t + 2, 0],
              f = t + 2;
            f < r &&
            !(e.sCount[f] < e.blkIndent) &&
            -1 !== (u = o(e, f).trim()).indexOf('|') &&
            !(e.sCount[f] - e.blkIndent >= 4);
            f++
          ) {
            for (
              d = i(u.replace(/^\||\|$/g, '')), h = e.push('tr_open', 'tr', 1), l = 0;
              l < p;
              l++
            )
              (h = e.push('td_open', 'td', 1)),
                g[l] && (h.attrs = [['style', 'text-align:' + g[l]]]),
                ((h = e.push('inline', '', 0)).content = d[l] ? d[l].trim() : ''),
                (h.children = []),
                (h = e.push('td_close', 'td', -1));
            h = e.push('tr_close', 'tr', -1);
          }
          return (
            (h = e.push('tbody_close', 'tbody', -1)),
            (h = e.push('table_close', 'table', -1)),
            (m[1] = y[1] = f),
            (e.line = f),
            !0
          );
        };
      },
      function (e, t, r) {
        e.exports = function (e, t, r) {
          var n, o, i;
          if (e.sCount[t] - e.blkIndent < 4) return !1;
          for (o = n = t + 1; n < r; )
            if (e.isEmpty(n)) n++;
            else {
              if (!(e.sCount[n] - e.blkIndent >= 4)) break;
              o = ++n;
            }
          return (
            (e.line = o),
            ((i = e.push('code_block', 'code', 0)).content = e.getLines(
              t,
              o,
              4 + e.blkIndent,
              !0
            )),
            (i.map = [t, e.line]),
            !0
          );
        };
      },
      function (e, t, r) {
        e.exports = function (e, t, r, n) {
          var o,
            i,
            a,
            s,
            u,
            c,
            l,
            f = !1,
            d = e.bMarks[t] + e.tShift[t],
            p = e.eMarks[t];
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          if (d + 3 > p) return !1;
          if (126 !== (o = e.src.charCodeAt(d)) && 96 !== o) return !1;
          if (((u = d), (i = (d = e.skipChars(d, o)) - u) < 3)) return !1;
          if (
            ((l = e.src.slice(u, d)),
            (a = e.src.slice(d, p)).indexOf(String.fromCharCode(o)) >= 0)
          )
            return !1;
          if (n) return !0;
          for (
            s = t;
            !(++s >= r) &&
            !(
              (d = u = e.bMarks[s] + e.tShift[s]) < (p = e.eMarks[s]) &&
              e.sCount[s] < e.blkIndent
            );

          )
            if (
              e.src.charCodeAt(d) === o &&
              !(
                e.sCount[s] - e.blkIndent >= 4 ||
                (d = e.skipChars(d, o)) - u < i ||
                (d = e.skipSpaces(d)) < p
              )
            ) {
              f = !0;
              break;
            }
          return (
            (i = e.sCount[t]),
            (e.line = s + (f ? 1 : 0)),
            ((c = e.push('fence', 'code', 0)).info = a),
            (c.content = e.getLines(t + 1, s, i, !0)),
            (c.markup = l),
            (c.map = [t, e.line]),
            !0
          );
        };
      },
      function (e, t, r) {
        var n = r(1).isSpace;
        e.exports = function (e, t, r, o) {
          var i,
            a,
            s,
            u,
            c,
            l,
            f,
            d,
            p,
            h,
            g,
            M,
            m,
            y,
            N,
            b,
            v,
            w,
            D,
            j,
            T = e.lineMax,
            _ = e.bMarks[t] + e.tShift[t],
            z = e.eMarks[t];
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          if (62 !== e.src.charCodeAt(_++)) return !1;
          if (o) return !0;
          for (
            u = p = e.sCount[t] + _ - (e.bMarks[t] + e.tShift[t]),
              32 === e.src.charCodeAt(_)
                ? (_++, u++, p++, (i = !1), (b = !0))
                : 9 === e.src.charCodeAt(_)
                ? ((b = !0),
                  (e.bsCount[t] + p) % 4 == 3 ? (_++, u++, p++, (i = !1)) : (i = !0))
                : (b = !1),
              h = [e.bMarks[t]],
              e.bMarks[t] = _;
            _ < z && ((a = e.src.charCodeAt(_)), n(a));

          )
            9 === a ? (p += 4 - ((p + e.bsCount[t] + (i ? 1 : 0)) % 4)) : p++, _++;
          for (
            g = [e.bsCount[t]],
              e.bsCount[t] = e.sCount[t] + 1 + (b ? 1 : 0),
              l = _ >= z,
              y = [e.sCount[t]],
              e.sCount[t] = p - u,
              N = [e.tShift[t]],
              e.tShift[t] = _ - e.bMarks[t],
              w = e.md.block.ruler.getRules('blockquote'),
              m = e.parentType,
              e.parentType = 'blockquote',
              j = !1,
              d = t + 1;
            d < r &&
            (e.sCount[d] < e.blkIndent && (j = !0),
            !((_ = e.bMarks[d] + e.tShift[d]) >= (z = e.eMarks[d])));
            d++
          )
            if (62 !== e.src.charCodeAt(_++) || j) {
              if (l) break;
              for (v = !1, s = 0, c = w.length; s < c; s++)
                if (w[s](e, d, r, !0)) {
                  v = !0;
                  break;
                }
              if (v) {
                (e.lineMax = d),
                  0 !== e.blkIndent &&
                    (h.push(e.bMarks[d]),
                    g.push(e.bsCount[d]),
                    N.push(e.tShift[d]),
                    y.push(e.sCount[d]),
                    (e.sCount[d] -= e.blkIndent));
                break;
              }
              h.push(e.bMarks[d]),
                g.push(e.bsCount[d]),
                N.push(e.tShift[d]),
                y.push(e.sCount[d]),
                (e.sCount[d] = -1);
            } else {
              for (
                u = p = e.sCount[d] + _ - (e.bMarks[d] + e.tShift[d]),
                  32 === e.src.charCodeAt(_)
                    ? (_++, u++, p++, (i = !1), (b = !0))
                    : 9 === e.src.charCodeAt(_)
                    ? ((b = !0),
                      (e.bsCount[d] + p) % 4 == 3 ? (_++, u++, p++, (i = !1)) : (i = !0))
                    : (b = !1),
                  h.push(e.bMarks[d]),
                  e.bMarks[d] = _;
                _ < z && ((a = e.src.charCodeAt(_)), n(a));

              )
                9 === a ? (p += 4 - ((p + e.bsCount[d] + (i ? 1 : 0)) % 4)) : p++, _++;
              (l = _ >= z),
                g.push(e.bsCount[d]),
                (e.bsCount[d] = e.sCount[d] + 1 + (b ? 1 : 0)),
                y.push(e.sCount[d]),
                (e.sCount[d] = p - u),
                N.push(e.tShift[d]),
                (e.tShift[d] = _ - e.bMarks[d]);
            }
          for (
            M = e.blkIndent,
              e.blkIndent = 0,
              (D = e.push('blockquote_open', 'blockquote', 1)).markup = '>',
              D.map = f = [t, 0],
              e.md.block.tokenize(e, t, d),
              (D = e.push('blockquote_close', 'blockquote', -1)).markup = '>',
              e.lineMax = T,
              e.parentType = m,
              f[1] = e.line,
              s = 0;
            s < N.length;
            s++
          )
            (e.bMarks[s + t] = h[s]),
              (e.tShift[s + t] = N[s]),
              (e.sCount[s + t] = y[s]),
              (e.bsCount[s + t] = g[s]);
          return (e.blkIndent = M), !0;
        };
      },
      function (e, t, r) {
        var n = r(1).isSpace;
        e.exports = function (e, t, r, o) {
          var i,
            a,
            s,
            u,
            c = e.bMarks[t] + e.tShift[t],
            l = e.eMarks[t];
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          if (42 !== (i = e.src.charCodeAt(c++)) && 45 !== i && 95 !== i) return !1;
          for (a = 1; c < l; ) {
            if ((s = e.src.charCodeAt(c++)) !== i && !n(s)) return !1;
            s === i && a++;
          }
          return (
            !(a < 3) &&
            (!!o ||
              ((e.line = t + 1),
              ((u = e.push('hr', 'hr', 0)).map = [t, e.line]),
              (u.markup = Array(a + 1).join(String.fromCharCode(i))),
              !0))
          );
        };
      },
      function (e, t, r) {
        var n = r(1).isSpace;
        function o(e, t) {
          var r, o, i, a;
          return (
            (o = e.bMarks[t] + e.tShift[t]),
            (i = e.eMarks[t]),
            42 !== (r = e.src.charCodeAt(o++)) && 45 !== r && 43 !== r
              ? -1
              : o < i && ((a = e.src.charCodeAt(o)), !n(a))
              ? -1
              : o
          );
        }
        function i(e, t) {
          var r,
            o = e.bMarks[t] + e.tShift[t],
            i = o,
            a = e.eMarks[t];
          if (i + 1 >= a) return -1;
          if ((r = e.src.charCodeAt(i++)) < 48 || r > 57) return -1;
          for (;;) {
            if (i >= a) return -1;
            if (!((r = e.src.charCodeAt(i++)) >= 48 && r <= 57)) {
              if (41 === r || 46 === r) break;
              return -1;
            }
            if (i - o >= 10) return -1;
          }
          return i < a && ((r = e.src.charCodeAt(i)), !n(r)) ? -1 : i;
        }
        e.exports = function (e, t, r, n) {
          var a,
            s,
            u,
            c,
            l,
            f,
            d,
            p,
            h,
            g,
            M,
            m,
            y,
            N,
            b,
            v,
            w,
            D,
            j,
            T,
            _,
            z,
            E,
            A,
            C,
            x,
            k,
            I,
            L = !1,
            S = !0;
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          if (
            (n && 'paragraph' === e.parentType && e.tShift[t] >= e.blkIndent && (L = !0),
            (E = i(e, t)) >= 0)
          ) {
            if (
              ((d = !0),
              (C = e.bMarks[t] + e.tShift[t]),
              (y = Number(e.src.substr(C, E - C - 1))),
              L && 1 !== y)
            )
              return !1;
          } else {
            if (!((E = o(e, t)) >= 0)) return !1;
            d = !1;
          }
          if (L && e.skipSpaces(E) >= e.eMarks[t]) return !1;
          if (((m = e.src.charCodeAt(E - 1)), n)) return !0;
          for (
            M = e.tokens.length,
              d
                ? ((I = e.push('ordered_list_open', 'ol', 1)),
                  1 !== y && (I.attrs = [['start', y]]))
                : (I = e.push('bullet_list_open', 'ul', 1)),
              I.map = g = [t, 0],
              I.markup = String.fromCharCode(m),
              b = t,
              A = !1,
              k = e.md.block.ruler.getRules('list'),
              j = e.parentType,
              e.parentType = 'list';
            b < r;

          ) {
            for (
              z = E,
                N = e.eMarks[b],
                f = v = e.sCount[b] + E - (e.bMarks[t] + e.tShift[t]);
              z < N;

            ) {
              if (9 === (a = e.src.charCodeAt(z))) v += 4 - ((v + e.bsCount[b]) % 4);
              else {
                if (32 !== a) break;
                v++;
              }
              z++;
            }
            if (
              ((l = (s = z) >= N ? 1 : v - f) > 4 && (l = 1),
              (c = f + l),
              ((I = e.push('list_item_open', 'li', 1)).markup = String.fromCharCode(m)),
              (I.map = p = [t, 0]),
              (w = e.blkIndent),
              (_ = e.tight),
              (T = e.tShift[t]),
              (D = e.sCount[t]),
              (e.blkIndent = c),
              (e.tight = !0),
              (e.tShift[t] = s - e.bMarks[t]),
              (e.sCount[t] = v),
              s >= N && e.isEmpty(t + 1)
                ? (e.line = Math.min(e.line + 2, r))
                : e.md.block.tokenize(e, t, r, !0),
              (e.tight && !A) || (S = !1),
              (A = e.line - t > 1 && e.isEmpty(e.line - 1)),
              (e.blkIndent = w),
              (e.tShift[t] = T),
              (e.sCount[t] = D),
              (e.tight = _),
              ((I = e.push('list_item_close', 'li', -1)).markup = String.fromCharCode(m)),
              (b = t = e.line),
              (p[1] = b),
              (s = e.bMarks[t]),
              b >= r)
            )
              break;
            if (e.sCount[b] < e.blkIndent) break;
            for (x = !1, u = 0, h = k.length; u < h; u++)
              if (k[u](e, b, r, !0)) {
                x = !0;
                break;
              }
            if (x) break;
            if (d) {
              if ((E = i(e, b)) < 0) break;
            } else if ((E = o(e, b)) < 0) break;
            if (m !== e.src.charCodeAt(E - 1)) break;
          }
          return (
            ((I = d
              ? e.push('ordered_list_close', 'ol', -1)
              : e.push('bullet_list_close', 'ul', -1)).markup = String.fromCharCode(m)),
            (g[1] = b),
            (e.line = b),
            (e.parentType = j),
            S &&
              (function (e, t) {
                var r,
                  n,
                  o = e.level + 2;
                for (r = t + 2, n = e.tokens.length - 2; r < n; r++)
                  e.tokens[r].level === o &&
                    'paragraph_open' === e.tokens[r].type &&
                    ((e.tokens[r + 2].hidden = !0), (e.tokens[r].hidden = !0), (r += 2));
              })(e, M),
            !0
          );
        };
      },
      function (e, t, r) {
        var n = r(1).normalizeReference,
          o = r(1).isSpace;
        e.exports = function (e, t, r, i) {
          var a,
            s,
            u,
            c,
            l,
            f,
            d,
            p,
            h,
            g,
            M,
            m,
            y,
            N,
            b,
            v,
            w = 0,
            D = e.bMarks[t] + e.tShift[t],
            j = e.eMarks[t],
            T = t + 1;
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          if (91 !== e.src.charCodeAt(D)) return !1;
          for (; ++D < j; )
            if (93 === e.src.charCodeAt(D) && 92 !== e.src.charCodeAt(D - 1)) {
              if (D + 1 === j) return !1;
              if (58 !== e.src.charCodeAt(D + 1)) return !1;
              break;
            }
          for (
            c = e.lineMax,
              b = e.md.block.ruler.getRules('reference'),
              g = e.parentType,
              e.parentType = 'reference';
            T < c && !e.isEmpty(T);
            T++
          )
            if (!(e.sCount[T] - e.blkIndent > 3 || e.sCount[T] < 0)) {
              for (N = !1, f = 0, d = b.length; f < d; f++)
                if (b[f](e, T, c, !0)) {
                  N = !0;
                  break;
                }
              if (N) break;
            }
          for (
            j = (y = e.getLines(t, T, e.blkIndent, !1).trim()).length, D = 1;
            D < j;
            D++
          ) {
            if (91 === (a = y.charCodeAt(D))) return !1;
            if (93 === a) {
              h = D;
              break;
            }
            10 === a ? w++ : 92 === a && ++D < j && 10 === y.charCodeAt(D) && w++;
          }
          if (h < 0 || 58 !== y.charCodeAt(h + 1)) return !1;
          for (D = h + 2; D < j; D++)
            if (10 === (a = y.charCodeAt(D))) w++;
            else if (!o(a)) break;
          if (!(M = e.md.helpers.parseLinkDestination(y, D, j)).ok) return !1;
          if (((l = e.md.normalizeLink(M.str)), !e.md.validateLink(l))) return !1;
          for (s = D = M.pos, u = w += M.lines, m = D; D < j; D++)
            if (10 === (a = y.charCodeAt(D))) w++;
            else if (!o(a)) break;
          for (
            M = e.md.helpers.parseLinkTitle(y, D, j),
              D < j && m !== D && M.ok
                ? ((v = M.str), (D = M.pos), (w += M.lines))
                : ((v = ''), (D = s), (w = u));
            D < j && ((a = y.charCodeAt(D)), o(a));

          )
            D++;
          if (D < j && 10 !== y.charCodeAt(D) && v)
            for (v = '', D = s, w = u; D < j && ((a = y.charCodeAt(D)), o(a)); ) D++;
          return (
            !(D < j && 10 !== y.charCodeAt(D)) &&
            !!(p = n(y.slice(1, h))) &&
            (!!i ||
              (void 0 === e.env.references && (e.env.references = {}),
              void 0 === e.env.references[p] &&
                (e.env.references[p] = { title: v, href: l }),
              (e.parentType = g),
              (e.line = t + w + 1),
              !0))
          );
        };
      },
      function (e, t, r) {
        var n = r(1).isSpace;
        e.exports = function (e, t, r, o) {
          var i,
            a,
            s,
            u,
            c = e.bMarks[t] + e.tShift[t],
            l = e.eMarks[t];
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          if (35 !== (i = e.src.charCodeAt(c)) || c >= l) return !1;
          for (a = 1, i = e.src.charCodeAt(++c); 35 === i && c < l && a <= 6; )
            a++, (i = e.src.charCodeAt(++c));
          return (
            !(a > 6 || (c < l && !n(i))) &&
            (!!o ||
              ((l = e.skipSpacesBack(l, c)),
              (s = e.skipCharsBack(l, 35, c)) > c &&
                n(e.src.charCodeAt(s - 1)) &&
                (l = s),
              (e.line = t + 1),
              ((u = e.push('heading_open', 'h' + String(a), 1)).markup = '########'.slice(
                0,
                a
              )),
              (u.map = [t, e.line]),
              ((u = e.push('inline', '', 0)).content = e.src.slice(c, l).trim()),
              (u.map = [t, e.line]),
              (u.children = []),
              ((u = e.push(
                'heading_close',
                'h' + String(a),
                -1
              )).markup = '########'.slice(0, a)),
              !0))
          );
        };
      },
      function (e, t, r) {
        e.exports = function (e, t, r) {
          var n,
            o,
            i,
            a,
            s,
            u,
            c,
            l,
            f,
            d,
            p = t + 1,
            h = e.md.block.ruler.getRules('paragraph');
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          for (d = e.parentType, e.parentType = 'paragraph'; p < r && !e.isEmpty(p); p++)
            if (!(e.sCount[p] - e.blkIndent > 3)) {
              if (
                e.sCount[p] >= e.blkIndent &&
                (u = e.bMarks[p] + e.tShift[p]) < (c = e.eMarks[p]) &&
                (45 === (f = e.src.charCodeAt(u)) || 61 === f) &&
                ((u = e.skipChars(u, f)), (u = e.skipSpaces(u)) >= c)
              ) {
                l = 61 === f ? 1 : 2;
                break;
              }
              if (!(e.sCount[p] < 0)) {
                for (o = !1, i = 0, a = h.length; i < a; i++)
                  if (h[i](e, p, r, !0)) {
                    o = !0;
                    break;
                  }
                if (o) break;
              }
            }
          return (
            !!l &&
            ((n = e.getLines(t, p, e.blkIndent, !1).trim()),
            (e.line = p + 1),
            ((s = e.push(
              'heading_open',
              'h' + String(l),
              1
            )).markup = String.fromCharCode(f)),
            (s.map = [t, e.line]),
            ((s = e.push('inline', '', 0)).content = n),
            (s.map = [t, e.line - 1]),
            (s.children = []),
            ((s = e.push(
              'heading_close',
              'h' + String(l),
              -1
            )).markup = String.fromCharCode(f)),
            (e.parentType = d),
            !0)
          );
        };
      },
      function (e, t, r) {
        var n = r(78),
          o = r(26).HTML_OPEN_CLOSE_TAG_RE,
          i = [
            [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0],
            [/^<!--/, /-->/, !0],
            [/^<\?/, /\?>/, !0],
            [/^<![A-Z]/, />/, !0],
            [/^<!\[CDATA\[/, /\]\]>/, !0],
            [new RegExp('^</?(' + n.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, !0],
            [new RegExp(o.source + '\\s*$'), /^$/, !1],
          ];
        e.exports = function (e, t, r, n) {
          var o,
            a,
            s,
            u,
            c = e.bMarks[t] + e.tShift[t],
            l = e.eMarks[t];
          if (e.sCount[t] - e.blkIndent >= 4) return !1;
          if (!e.md.options.html) return !1;
          if (60 !== e.src.charCodeAt(c)) return !1;
          for (u = e.src.slice(c, l), o = 0; o < i.length && !i[o][0].test(u); o++);
          if (o === i.length) return !1;
          if (n) return i[o][2];
          if (((a = t + 1), !i[o][1].test(u)))
            for (; a < r && !(e.sCount[a] < e.blkIndent); a++)
              if (
                ((c = e.bMarks[a] + e.tShift[a]),
                (l = e.eMarks[a]),
                (u = e.src.slice(c, l)),
                i[o][1].test(u))
              ) {
                0 !== u.length && a++;
                break;
              }
          return (
            (e.line = a),
            ((s = e.push('html_block', '', 0)).map = [t, a]),
            (s.content = e.getLines(t, a, e.blkIndent, !0)),
            !0
          );
        };
      },
      function (e, t, r) {
        e.exports = [
          'address',
          'article',
          'aside',
          'base',
          'basefont',
          'blockquote',
          'body',
          'caption',
          'center',
          'col',
          'colgroup',
          'dd',
          'details',
          'dialog',
          'dir',
          'div',
          'dl',
          'dt',
          'fieldset',
          'figcaption',
          'figure',
          'footer',
          'form',
          'frame',
          'frameset',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'head',
          'header',
          'hr',
          'html',
          'iframe',
          'legend',
          'li',
          'link',
          'main',
          'menu',
          'menuitem',
          'meta',
          'nav',
          'noframes',
          'ol',
          'optgroup',
          'option',
          'p',
          'param',
          'section',
          'source',
          'summary',
          'table',
          'tbody',
          'td',
          'tfoot',
          'th',
          'thead',
          'title',
          'tr',
          'track',
          'ul',
        ];
      },
      function (e, t, r) {
        e.exports = function (e, t) {
          var r,
            n,
            o,
            i,
            a,
            s,
            u = t + 1,
            c = e.md.block.ruler.getRules('paragraph'),
            l = e.lineMax;
          for (s = e.parentType, e.parentType = 'paragraph'; u < l && !e.isEmpty(u); u++)
            if (!(e.sCount[u] - e.blkIndent > 3 || e.sCount[u] < 0)) {
              for (n = !1, o = 0, i = c.length; o < i; o++)
                if (c[o](e, u, l, !0)) {
                  n = !0;
                  break;
                }
              if (n) break;
            }
          return (
            (r = e.getLines(t, u, e.blkIndent, !1).trim()),
            (e.line = u),
            ((a = e.push('paragraph_open', 'p', 1)).map = [t, e.line]),
            ((a = e.push('inline', '', 0)).content = r),
            (a.map = [t, e.line]),
            (a.children = []),
            (a = e.push('paragraph_close', 'p', -1)),
            (e.parentType = s),
            !0
          );
        };
      },
      function (e, t, r) {
        var n = r(12),
          o = r(1).isSpace;
        function i(e, t, r, n) {
          var i, a, s, u, c, l, f, d;
          for (
            this.src = e,
              this.md = t,
              this.env = r,
              this.tokens = n,
              this.bMarks = [],
              this.eMarks = [],
              this.tShift = [],
              this.sCount = [],
              this.bsCount = [],
              this.blkIndent = 0,
              this.line = 0,
              this.lineMax = 0,
              this.tight = !1,
              this.ddIndent = -1,
              this.parentType = 'root',
              this.level = 0,
              this.result = '',
              d = !1,
              s = u = l = f = 0,
              c = (a = this.src).length;
            u < c;
            u++
          ) {
            if (((i = a.charCodeAt(u)), !d)) {
              if (o(i)) {
                l++, 9 === i ? (f += 4 - (f % 4)) : f++;
                continue;
              }
              d = !0;
            }
            (10 !== i && u !== c - 1) ||
              (10 !== i && u++,
              this.bMarks.push(s),
              this.eMarks.push(u),
              this.tShift.push(l),
              this.sCount.push(f),
              this.bsCount.push(0),
              (d = !1),
              (l = 0),
              (f = 0),
              (s = u + 1));
          }
          this.bMarks.push(a.length),
            this.eMarks.push(a.length),
            this.tShift.push(0),
            this.sCount.push(0),
            this.bsCount.push(0),
            (this.lineMax = this.bMarks.length - 1);
        }
        (i.prototype.push = function (e, t, r) {
          var o = new n(e, t, r);
          return (
            (o.block = !0),
            r < 0 && this.level--,
            (o.level = this.level),
            r > 0 && this.level++,
            this.tokens.push(o),
            o
          );
        }),
          (i.prototype.isEmpty = function (e) {
            return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
          }),
          (i.prototype.skipEmptyLines = function (e) {
            for (
              var t = this.lineMax;
              e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]);
              e++
            );
            return e;
          }),
          (i.prototype.skipSpaces = function (e) {
            for (
              var t, r = this.src.length;
              e < r && ((t = this.src.charCodeAt(e)), o(t));
              e++
            );
            return e;
          }),
          (i.prototype.skipSpacesBack = function (e, t) {
            if (e <= t) return e;
            for (; e > t; ) if (!o(this.src.charCodeAt(--e))) return e + 1;
            return e;
          }),
          (i.prototype.skipChars = function (e, t) {
            for (var r = this.src.length; e < r && this.src.charCodeAt(e) === t; e++);
            return e;
          }),
          (i.prototype.skipCharsBack = function (e, t, r) {
            if (e <= r) return e;
            for (; e > r; ) if (t !== this.src.charCodeAt(--e)) return e + 1;
            return e;
          }),
          (i.prototype.getLines = function (e, t, r, n) {
            var i,
              a,
              s,
              u,
              c,
              l,
              f,
              d = e;
            if (e >= t) return '';
            for (l = new Array(t - e), i = 0; d < t; d++, i++) {
              for (
                a = 0,
                  f = u = this.bMarks[d],
                  c = d + 1 < t || n ? this.eMarks[d] + 1 : this.eMarks[d];
                u < c && a < r;

              ) {
                if (((s = this.src.charCodeAt(u)), o(s)))
                  9 === s ? (a += 4 - ((a + this.bsCount[d]) % 4)) : a++;
                else {
                  if (!(u - f < this.tShift[d])) break;
                  a++;
                }
                u++;
              }
              l[i] =
                a > r
                  ? new Array(a - r + 1).join(' ') + this.src.slice(u, c)
                  : this.src.slice(u, c);
            }
            return l.join('');
          }),
          (i.prototype.Token = n),
          (e.exports = i);
      },
      function (e, t, r) {
        var n = r(11),
          o = [
            ['text', r(82)],
            ['newline', r(83)],
            ['escape', r(84)],
            ['backticks', r(85)],
            ['strikethrough', r(27).tokenize],
            ['emphasis', r(28).tokenize],
            ['link', r(86)],
            ['image', r(87)],
            ['autolink', r(88)],
            ['html_inline', r(89)],
            ['entity', r(90)],
          ],
          i = [
            ['balance_pairs', r(91)],
            ['strikethrough', r(27).postProcess],
            ['emphasis', r(28).postProcess],
            ['text_collapse', r(92)],
          ];
        function a() {
          var e;
          for (this.ruler = new n(), e = 0; e < o.length; e++)
            this.ruler.push(o[e][0], o[e][1]);
          for (this.ruler2 = new n(), e = 0; e < i.length; e++)
            this.ruler2.push(i[e][0], i[e][1]);
        }
        (a.prototype.skipToken = function (e) {
          var t,
            r,
            n = e.pos,
            o = this.ruler.getRules(''),
            i = o.length,
            a = e.md.options.maxNesting,
            s = e.cache;
          if (void 0 === s[n]) {
            if (e.level < a)
              for (r = 0; r < i && (e.level++, (t = o[r](e, !0)), e.level--, !t); r++);
            else e.pos = e.posMax;
            t || e.pos++, (s[n] = e.pos);
          } else e.pos = s[n];
        }),
          (a.prototype.tokenize = function (e) {
            for (
              var t,
                r,
                n = this.ruler.getRules(''),
                o = n.length,
                i = e.posMax,
                a = e.md.options.maxNesting;
              e.pos < i;

            ) {
              if (e.level < a) for (r = 0; r < o && !(t = n[r](e, !1)); r++);
              if (t) {
                if (e.pos >= i) break;
              } else e.pending += e.src[e.pos++];
            }
            e.pending && e.pushPending();
          }),
          (a.prototype.parse = function (e, t, r, n) {
            var o,
              i,
              a,
              s = new this.State(e, t, r, n);
            for (
              this.tokenize(s), a = (i = this.ruler2.getRules('')).length, o = 0;
              o < a;
              o++
            )
              i[o](s);
          }),
          (a.prototype.State = r(93)),
          (e.exports = a);
      },
      function (e, t, r) {
        function n(e) {
          switch (e) {
            case 10:
            case 33:
            case 35:
            case 36:
            case 37:
            case 38:
            case 42:
            case 43:
            case 45:
            case 58:
            case 60:
            case 61:
            case 62:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 125:
            case 126:
              return !0;
            default:
              return !1;
          }
        }
        e.exports = function (e, t) {
          for (var r = e.pos; r < e.posMax && !n(e.src.charCodeAt(r)); ) r++;
          return (
            r !== e.pos && (t || (e.pending += e.src.slice(e.pos, r)), (e.pos = r), !0)
          );
        };
      },
      function (e, t, r) {
        var n = r(1).isSpace;
        e.exports = function (e, t) {
          var r,
            o,
            i = e.pos;
          if (10 !== e.src.charCodeAt(i)) return !1;
          for (
            r = e.pending.length - 1,
              o = e.posMax,
              t ||
                (r >= 0 && 32 === e.pending.charCodeAt(r)
                  ? r >= 1 && 32 === e.pending.charCodeAt(r - 1)
                    ? ((e.pending = e.pending.replace(/ +$/, '')),
                      e.push('hardbreak', 'br', 0))
                    : ((e.pending = e.pending.slice(0, -1)), e.push('softbreak', 'br', 0))
                  : e.push('softbreak', 'br', 0)),
              i++;
            i < o && n(e.src.charCodeAt(i));

          )
            i++;
          return (e.pos = i), !0;
        };
      },
      function (e, t, r) {
        for (var n = r(1).isSpace, o = [], i = 0; i < 256; i++) o.push(0);
        '\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'.split('').forEach(function (e) {
          o[e.charCodeAt(0)] = 1;
        }),
          (e.exports = function (e, t) {
            var r,
              i = e.pos,
              a = e.posMax;
            if (92 !== e.src.charCodeAt(i)) return !1;
            if (++i < a) {
              if ((r = e.src.charCodeAt(i)) < 256 && 0 !== o[r])
                return t || (e.pending += e.src[i]), (e.pos += 2), !0;
              if (10 === r) {
                for (
                  t || e.push('hardbreak', 'br', 0), i++;
                  i < a && ((r = e.src.charCodeAt(i)), n(r));

                )
                  i++;
                return (e.pos = i), !0;
              }
            }
            return t || (e.pending += '\\'), e.pos++, !0;
          });
      },
      function (e, t, r) {
        e.exports = function (e, t) {
          var r,
            n,
            o,
            i,
            a,
            s,
            u = e.pos;
          if (96 !== e.src.charCodeAt(u)) return !1;
          for (r = u, u++, n = e.posMax; u < n && 96 === e.src.charCodeAt(u); ) u++;
          for (o = e.src.slice(r, u), i = a = u; -1 !== (i = e.src.indexOf('`', a)); ) {
            for (a = i + 1; a < n && 96 === e.src.charCodeAt(a); ) a++;
            if (a - i === o.length)
              return (
                t ||
                  (((s = e.push('code_inline', 'code', 0)).markup = o),
                  (s.content = e.src
                    .slice(u, i)
                    .replace(/[ \n]+/g, ' ')
                    .trim())),
                (e.pos = a),
                !0
              );
          }
          return t || (e.pending += o), (e.pos += o.length), !0;
        };
      },
      function (e, t, r) {
        var n = r(1).normalizeReference,
          o = r(1).isSpace;
        e.exports = function (e, t) {
          var r,
            i,
            a,
            s,
            u,
            c,
            l,
            f,
            d,
            p = '',
            h = e.pos,
            g = e.posMax,
            M = e.pos,
            m = !0;
          if (91 !== e.src.charCodeAt(e.pos)) return !1;
          if (((u = e.pos + 1), (s = e.md.helpers.parseLinkLabel(e, e.pos, !0)) < 0))
            return !1;
          if ((c = s + 1) < g && 40 === e.src.charCodeAt(c)) {
            for (
              m = !1, c++;
              c < g && ((i = e.src.charCodeAt(c)), o(i) || 10 === i);
              c++
            );
            if (c >= g) return !1;
            for (
              M = c,
                (l = e.md.helpers.parseLinkDestination(e.src, c, e.posMax)).ok &&
                  ((p = e.md.normalizeLink(l.str)),
                  e.md.validateLink(p) ? (c = l.pos) : (p = '')),
                M = c;
              c < g && ((i = e.src.charCodeAt(c)), o(i) || 10 === i);
              c++
            );
            if (
              ((l = e.md.helpers.parseLinkTitle(e.src, c, e.posMax)),
              c < g && M !== c && l.ok)
            )
              for (
                d = l.str, c = l.pos;
                c < g && ((i = e.src.charCodeAt(c)), o(i) || 10 === i);
                c++
              );
            else d = '';
            (c >= g || 41 !== e.src.charCodeAt(c)) && (m = !0), c++;
          }
          if (m) {
            if (void 0 === e.env.references) return !1;
            if (
              (c < g && 91 === e.src.charCodeAt(c)
                ? ((M = c + 1),
                  (c = e.md.helpers.parseLinkLabel(e, c)) >= 0
                    ? (a = e.src.slice(M, c++))
                    : (c = s + 1))
                : (c = s + 1),
              a || (a = e.src.slice(u, s)),
              !(f = e.env.references[n(a)]))
            )
              return (e.pos = h), !1;
            (p = f.href), (d = f.title);
          }
          return (
            t ||
              ((e.pos = u),
              (e.posMax = s),
              (e.push('link_open', 'a', 1).attrs = r = [['href', p]]),
              d && r.push(['title', d]),
              e.md.inline.tokenize(e),
              e.push('link_close', 'a', -1)),
            (e.pos = c),
            (e.posMax = g),
            !0
          );
        };
      },
      function (e, t, r) {
        var n = r(1).normalizeReference,
          o = r(1).isSpace;
        e.exports = function (e, t) {
          var r,
            i,
            a,
            s,
            u,
            c,
            l,
            f,
            d,
            p,
            h,
            g,
            M,
            m = '',
            y = e.pos,
            N = e.posMax;
          if (33 !== e.src.charCodeAt(e.pos)) return !1;
          if (91 !== e.src.charCodeAt(e.pos + 1)) return !1;
          if (((c = e.pos + 2), (u = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1)) < 0))
            return !1;
          if ((l = u + 1) < N && 40 === e.src.charCodeAt(l)) {
            for (l++; l < N && ((i = e.src.charCodeAt(l)), o(i) || 10 === i); l++);
            if (l >= N) return !1;
            for (
              M = l,
                (d = e.md.helpers.parseLinkDestination(e.src, l, e.posMax)).ok &&
                  ((m = e.md.normalizeLink(d.str)),
                  e.md.validateLink(m) ? (l = d.pos) : (m = '')),
                M = l;
              l < N && ((i = e.src.charCodeAt(l)), o(i) || 10 === i);
              l++
            );
            if (
              ((d = e.md.helpers.parseLinkTitle(e.src, l, e.posMax)),
              l < N && M !== l && d.ok)
            )
              for (
                p = d.str, l = d.pos;
                l < N && ((i = e.src.charCodeAt(l)), o(i) || 10 === i);
                l++
              );
            else p = '';
            if (l >= N || 41 !== e.src.charCodeAt(l)) return (e.pos = y), !1;
            l++;
          } else {
            if (void 0 === e.env.references) return !1;
            if (
              (l < N && 91 === e.src.charCodeAt(l)
                ? ((M = l + 1),
                  (l = e.md.helpers.parseLinkLabel(e, l)) >= 0
                    ? (s = e.src.slice(M, l++))
                    : (l = u + 1))
                : (l = u + 1),
              s || (s = e.src.slice(c, u)),
              !(f = e.env.references[n(s)]))
            )
              return (e.pos = y), !1;
            (m = f.href), (p = f.title);
          }
          return (
            t ||
              ((a = e.src.slice(c, u)),
              e.md.inline.parse(a, e.md, e.env, (g = [])),
              ((h = e.push('image', 'img', 0)).attrs = r = [
                ['src', m],
                ['alt', ''],
              ]),
              (h.children = g),
              (h.content = a),
              p && r.push(['title', p])),
            (e.pos = l),
            (e.posMax = N),
            !0
          );
        };
      },
      function (e, t, r) {
        var n = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
          o = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;
        e.exports = function (e, t) {
          var r,
            i,
            a,
            s,
            u,
            c,
            l = e.pos;
          return (
            60 === e.src.charCodeAt(l) &&
            !((r = e.src.slice(l)).indexOf('>') < 0) &&
            (o.test(r)
              ? ((s = (i = r.match(o))[0].slice(1, -1)),
                (u = e.md.normalizeLink(s)),
                !!e.md.validateLink(u) &&
                  (t ||
                    (((c = e.push('link_open', 'a', 1)).attrs = [['href', u]]),
                    (c.markup = 'autolink'),
                    (c.info = 'auto'),
                    ((c = e.push('text', '', 0)).content = e.md.normalizeLinkText(s)),
                    ((c = e.push('link_close', 'a', -1)).markup = 'autolink'),
                    (c.info = 'auto')),
                  (e.pos += i[0].length),
                  !0))
              : !!n.test(r) &&
                ((s = (a = r.match(n))[0].slice(1, -1)),
                (u = e.md.normalizeLink('mailto:' + s)),
                !!e.md.validateLink(u) &&
                  (t ||
                    (((c = e.push('link_open', 'a', 1)).attrs = [['href', u]]),
                    (c.markup = 'autolink'),
                    (c.info = 'auto'),
                    ((c = e.push('text', '', 0)).content = e.md.normalizeLinkText(s)),
                    ((c = e.push('link_close', 'a', -1)).markup = 'autolink'),
                    (c.info = 'auto')),
                  (e.pos += a[0].length),
                  !0)))
          );
        };
      },
      function (e, t, r) {
        var n = r(26).HTML_TAG_RE;
        e.exports = function (e, t) {
          var r,
            o,
            i,
            a = e.pos;
          return (
            !!e.md.options.html &&
            ((i = e.posMax),
            !(60 !== e.src.charCodeAt(a) || a + 2 >= i) &&
              !(
                33 !== (r = e.src.charCodeAt(a + 1)) &&
                63 !== r &&
                47 !== r &&
                !(function (e) {
                  var t = 32 | e;
                  return t >= 97 && t <= 122;
                })(r)
              ) &&
              !!(o = e.src.slice(a).match(n)) &&
              (t ||
                (e.push('html_inline', '', 0).content = e.src.slice(a, a + o[0].length)),
              (e.pos += o[0].length),
              !0))
          );
        };
      },
      function (e, t, r) {
        var n = r(21),
          o = r(1).has,
          i = r(1).isValidEntityCode,
          a = r(1).fromCodePoint,
          s = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,
          u = /^&([a-z][a-z0-9]{1,31});/i;
        e.exports = function (e, t) {
          var r,
            c,
            l = e.pos,
            f = e.posMax;
          if (38 !== e.src.charCodeAt(l)) return !1;
          if (l + 1 < f)
            if (35 === e.src.charCodeAt(l + 1)) {
              if ((c = e.src.slice(l).match(s)))
                return (
                  t ||
                    ((r =
                      'x' === c[1][0].toLowerCase()
                        ? parseInt(c[1].slice(1), 16)
                        : parseInt(c[1], 10)),
                    (e.pending += i(r) ? a(r) : a(65533))),
                  (e.pos += c[0].length),
                  !0
                );
            } else if ((c = e.src.slice(l).match(u)) && o(n, c[1]))
              return t || (e.pending += n[c[1]]), (e.pos += c[0].length), !0;
          return t || (e.pending += '&'), e.pos++, !0;
        };
      },
      function (e, t, r) {
        e.exports = function (e) {
          var t,
            r,
            n,
            o,
            i = e.delimiters,
            a = e.delimiters.length;
          for (t = 0; t < a; t++)
            if ((n = i[t]).close)
              for (r = t - n.jump - 1; r >= 0; ) {
                if (
                  (o = i[r]).open &&
                  o.marker === n.marker &&
                  o.end < 0 &&
                  o.level === n.level
                )
                  if (
                    !(
                      (o.close || n.open) &&
                      void 0 !== o.length &&
                      void 0 !== n.length &&
                      (o.length + n.length) % 3 == 0
                    )
                  ) {
                    (n.jump = t - r), (n.open = !1), (o.end = t), (o.jump = 0);
                    break;
                  }
                r -= o.jump + 1;
              }
        };
      },
      function (e, t, r) {
        e.exports = function (e) {
          var t,
            r,
            n = 0,
            o = e.tokens,
            i = e.tokens.length;
          for (t = r = 0; t < i; t++)
            (n += o[t].nesting),
              (o[t].level = n),
              'text' === o[t].type && t + 1 < i && 'text' === o[t + 1].type
                ? (o[t + 1].content = o[t].content + o[t + 1].content)
                : (t !== r && (o[r] = o[t]), r++);
          t !== r && (o.length = r);
        };
      },
      function (e, t, r) {
        var n = r(12),
          o = r(1).isWhiteSpace,
          i = r(1).isPunctChar,
          a = r(1).isMdAsciiPunct;
        function s(e, t, r, n) {
          (this.src = e),
            (this.env = r),
            (this.md = t),
            (this.tokens = n),
            (this.pos = 0),
            (this.posMax = this.src.length),
            (this.level = 0),
            (this.pending = ''),
            (this.pendingLevel = 0),
            (this.cache = {}),
            (this.delimiters = []);
        }
        (s.prototype.pushPending = function () {
          var e = new n('text', '', 0);
          return (
            (e.content = this.pending),
            (e.level = this.pendingLevel),
            this.tokens.push(e),
            (this.pending = ''),
            e
          );
        }),
          (s.prototype.push = function (e, t, r) {
            this.pending && this.pushPending();
            var o = new n(e, t, r);
            return (
              r < 0 && this.level--,
              (o.level = this.level),
              r > 0 && this.level++,
              (this.pendingLevel = this.level),
              this.tokens.push(o),
              o
            );
          }),
          (s.prototype.scanDelims = function (e, t) {
            var r,
              n,
              s,
              u,
              c,
              l,
              f,
              d,
              p,
              h = e,
              g = !0,
              M = !0,
              m = this.posMax,
              y = this.src.charCodeAt(e);
            for (
              r = e > 0 ? this.src.charCodeAt(e - 1) : 32;
              h < m && this.src.charCodeAt(h) === y;

            )
              h++;
            return (
              (s = h - e),
              (n = h < m ? this.src.charCodeAt(h) : 32),
              (f = a(r) || i(String.fromCharCode(r))),
              (p = a(n) || i(String.fromCharCode(n))),
              (l = o(r)),
              (d = o(n)) ? (g = !1) : p && (l || f || (g = !1)),
              l ? (M = !1) : f && (d || p || (M = !1)),
              t ? ((u = g), (c = M)) : ((u = g && (!M || f)), (c = M && (!g || p))),
              { can_open: u, can_close: c, length: s }
            );
          }),
          (s.prototype.Token = n),
          (e.exports = s);
      },
      function (e, t, r) {
        function n(e) {
          return (
            Array.prototype.slice.call(arguments, 1).forEach(function (t) {
              t &&
                Object.keys(t).forEach(function (r) {
                  e[r] = t[r];
                });
            }),
            e
          );
        }
        function o(e) {
          return Object.prototype.toString.call(e);
        }
        function i(e) {
          return '[object Function]' === o(e);
        }
        function a(e) {
          return e.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
        }
        var s = { fuzzyLink: !0, fuzzyEmail: !0, fuzzyIP: !1 };
        var u = {
            'http:': {
              validate: function (e, t, r) {
                var n = e.slice(t);
                return (
                  r.re.http ||
                    (r.re.http = new RegExp(
                      '^\\/\\/' +
                        r.re.src_auth +
                        r.re.src_host_port_strict +
                        r.re.src_path,
                      'i'
                    )),
                  r.re.http.test(n) ? n.match(r.re.http)[0].length : 0
                );
              },
            },
            'https:': 'http:',
            'ftp:': 'http:',
            '//': {
              validate: function (e, t, r) {
                var n = e.slice(t);
                return (
                  r.re.no_http ||
                    (r.re.no_http = new RegExp(
                      '^' +
                        r.re.src_auth +
                        '(?:localhost|(?:(?:' +
                        r.re.src_domain +
                        ')\\.)+' +
                        r.re.src_domain_root +
                        ')' +
                        r.re.src_port +
                        r.re.src_host_terminator +
                        r.re.src_path,
                      'i'
                    )),
                  r.re.no_http.test(n)
                    ? t >= 3 && ':' === e[t - 3]
                      ? 0
                      : t >= 3 && '/' === e[t - 3]
                      ? 0
                      : n.match(r.re.no_http)[0].length
                    : 0
                );
              },
            },
            'mailto:': {
              validate: function (e, t, r) {
                var n = e.slice(t);
                return (
                  r.re.mailto ||
                    (r.re.mailto = new RegExp(
                      '^' + r.re.src_email_name + '@' + r.re.src_host_strict,
                      'i'
                    )),
                  r.re.mailto.test(n) ? n.match(r.re.mailto)[0].length : 0
                );
              },
            },
          },
          c =
            'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]',
          l = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split(
            '|'
          );
        function f(e) {
          var t = (e.re = r(95)(e.__opts__)),
            n = e.__tlds__.slice();
          function s(e) {
            return e.replace('%TLDS%', t.src_tlds);
          }
          e.onCompile(),
            e.__tlds_replaced__ || n.push(c),
            n.push(t.src_xn),
            (t.src_tlds = n.join('|')),
            (t.email_fuzzy = RegExp(s(t.tpl_email_fuzzy), 'i')),
            (t.link_fuzzy = RegExp(s(t.tpl_link_fuzzy), 'i')),
            (t.link_no_ip_fuzzy = RegExp(s(t.tpl_link_no_ip_fuzzy), 'i')),
            (t.host_fuzzy_test = RegExp(s(t.tpl_host_fuzzy_test), 'i'));
          var u = [];
          function l(e, t) {
            throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t);
          }
          (e.__compiled__ = {}),
            Object.keys(e.__schemas__).forEach(function (t) {
              var r = e.__schemas__[t];
              if (null !== r) {
                var n = { validate: null, link: null };
                if (
                  ((e.__compiled__[t] = n),
                  (function (e) {
                    return '[object Object]' === o(e);
                  })(r))
                )
                  return (
                    !(function (e) {
                      return '[object RegExp]' === o(e);
                    })(r.validate)
                      ? i(r.validate)
                        ? (n.validate = r.validate)
                        : l(t, r)
                      : (n.validate = (function (e) {
                          return function (t, r) {
                            var n = t.slice(r);
                            return e.test(n) ? n.match(e)[0].length : 0;
                          };
                        })(r.validate)),
                    void (i(r.normalize)
                      ? (n.normalize = r.normalize)
                      : r.normalize
                      ? l(t, r)
                      : (n.normalize = function (e, t) {
                          t.normalize(e);
                        }))
                  );
                !(function (e) {
                  return '[object String]' === o(e);
                })(r)
                  ? l(t, r)
                  : u.push(t);
              }
            }),
            u.forEach(function (t) {
              e.__compiled__[e.__schemas__[t]] &&
                ((e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate),
                (e.__compiled__[t].normalize =
                  e.__compiled__[e.__schemas__[t]].normalize));
            }),
            (e.__compiled__[''] = {
              validate: null,
              normalize: function (e, t) {
                t.normalize(e);
              },
            });
          var f = Object.keys(e.__compiled__)
            .filter(function (t) {
              return t.length > 0 && e.__compiled__[t];
            })
            .map(a)
            .join('|');
          (e.re.schema_test = RegExp(
            '(^|(?!_)(?:[><｜]|' + t.src_ZPCc + '))(' + f + ')',
            'i'
          )),
            (e.re.schema_search = RegExp(
              '(^|(?!_)(?:[><｜]|' + t.src_ZPCc + '))(' + f + ')',
              'ig'
            )),
            (e.re.pretest = RegExp(
              '(' + e.re.schema_test.source + ')|(' + e.re.host_fuzzy_test.source + ')|@',
              'i'
            )),
            (function (e) {
              (e.__index__ = -1), (e.__text_cache__ = '');
            })(e);
        }
        function d(e, t) {
          var r = new (function (e, t) {
            var r = e.__index__,
              n = e.__last_index__,
              o = e.__text_cache__.slice(r, n);
            (this.schema = e.__schema__.toLowerCase()),
              (this.index = r + t),
              (this.lastIndex = n + t),
              (this.raw = o),
              (this.text = o),
              (this.url = o);
          })(e, t);
          return e.__compiled__[r.schema].normalize(r, e), r;
        }
        function p(e, t) {
          if (!(this instanceof p)) return new p(e, t);
          t ||
            ((function (e) {
              return Object.keys(e || {}).reduce(function (e, t) {
                return e || s.hasOwnProperty(t);
              }, !1);
            })(e) &&
              ((t = e), (e = {}))),
            (this.__opts__ = n({}, s, t)),
            (this.__index__ = -1),
            (this.__last_index__ = -1),
            (this.__schema__ = ''),
            (this.__text_cache__ = ''),
            (this.__schemas__ = n({}, u, e)),
            (this.__compiled__ = {}),
            (this.__tlds__ = l),
            (this.__tlds_replaced__ = !1),
            (this.re = {}),
            f(this);
        }
        (p.prototype.add = function (e, t) {
          return (this.__schemas__[e] = t), f(this), this;
        }),
          (p.prototype.set = function (e) {
            return (this.__opts__ = n(this.__opts__, e)), this;
          }),
          (p.prototype.test = function (e) {
            if (((this.__text_cache__ = e), (this.__index__ = -1), !e.length)) return !1;
            var t, r, n, o, i, a, s, u;
            if (this.re.schema_test.test(e))
              for ((s = this.re.schema_search).lastIndex = 0; null !== (t = s.exec(e)); )
                if ((o = this.testSchemaAt(e, t[2], s.lastIndex))) {
                  (this.__schema__ = t[2]),
                    (this.__index__ = t.index + t[1].length),
                    (this.__last_index__ = t.index + t[0].length + o);
                  break;
                }
            return (
              this.__opts__.fuzzyLink &&
                this.__compiled__['http:'] &&
                (u = e.search(this.re.host_fuzzy_test)) >= 0 &&
                (this.__index__ < 0 || u < this.__index__) &&
                null !==
                  (r = e.match(
                    this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy
                  )) &&
                ((i = r.index + r[1].length),
                (this.__index__ < 0 || i < this.__index__) &&
                  ((this.__schema__ = ''),
                  (this.__index__ = i),
                  (this.__last_index__ = r.index + r[0].length))),
              this.__opts__.fuzzyEmail &&
                this.__compiled__['mailto:'] &&
                e.indexOf('@') >= 0 &&
                null !== (n = e.match(this.re.email_fuzzy)) &&
                ((i = n.index + n[1].length),
                (a = n.index + n[0].length),
                (this.__index__ < 0 ||
                  i < this.__index__ ||
                  (i === this.__index__ && a > this.__last_index__)) &&
                  ((this.__schema__ = 'mailto:'),
                  (this.__index__ = i),
                  (this.__last_index__ = a))),
              this.__index__ >= 0
            );
          }),
          (p.prototype.pretest = function (e) {
            return this.re.pretest.test(e);
          }),
          (p.prototype.testSchemaAt = function (e, t, r) {
            return this.__compiled__[t.toLowerCase()]
              ? this.__compiled__[t.toLowerCase()].validate(e, r, this)
              : 0;
          }),
          (p.prototype.match = function (e) {
            var t = 0,
              r = [];
            this.__index__ >= 0 &&
              this.__text_cache__ === e &&
              (r.push(d(this, t)), (t = this.__last_index__));
            for (var n = t ? e.slice(t) : e; this.test(n); )
              r.push(d(this, t)),
                (n = n.slice(this.__last_index__)),
                (t += this.__last_index__);
            return r.length ? r : null;
          }),
          (p.prototype.tlds = function (e, t) {
            return (
              (e = Array.isArray(e) ? e : [e]),
              t
                ? ((this.__tlds__ = this.__tlds__
                    .concat(e)
                    .sort()
                    .filter(function (e, t, r) {
                      return e !== r[t - 1];
                    })
                    .reverse()),
                  f(this),
                  this)
                : ((this.__tlds__ = e.slice()),
                  (this.__tlds_replaced__ = !0),
                  f(this),
                  this)
            );
          }),
          (p.prototype.normalize = function (e) {
            e.schema || (e.url = 'http://' + e.url),
              'mailto:' !== e.schema ||
                /^mailto:/i.test(e.url) ||
                (e.url = 'mailto:' + e.url);
          }),
          (p.prototype.onCompile = function () {}),
          (e.exports = p);
      },
      function (e, t, r) {
        e.exports = function (e) {
          var t = {};
          (t.src_Any = r(23).source),
            (t.src_Cc = r(24).source),
            (t.src_Z = r(25).source),
            (t.src_P = r(10).source),
            (t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join('|')),
            (t.src_ZCc = [t.src_Z, t.src_Cc].join('|'));
          return (
            (t.src_pseudo_letter = '(?:(?![><｜]|' + t.src_ZPCc + ')' + t.src_Any + ')'),
            (t.src_ip4 =
              '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'),
            (t.src_auth = '(?:(?:(?!' + t.src_ZCc + '|[@/\\[\\]()]).)+@)?'),
            (t.src_port =
              '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?'),
            (t.src_host_terminator =
              '(?=$|[><｜]|' +
              t.src_ZPCc +
              ')(?!-|_|:\\d|\\.-|\\.(?!$|' +
              t.src_ZPCc +
              '))'),
            (t.src_path =
              '(?:[/?#](?:(?!' +
              t.src_ZCc +
              '|[><｜]|[()[\\]{}.,"\'?!\\-]).|\\[(?:(?!' +
              t.src_ZCc +
              '|\\]).)*\\]|\\((?:(?!' +
              t.src_ZCc +
              '|[)]).)*\\)|\\{(?:(?!' +
              t.src_ZCc +
              '|[}]).)*\\}|\\"(?:(?!' +
              t.src_ZCc +
              '|["]).)+\\"|\\\'(?:(?!' +
              t.src_ZCc +
              "|[']).)+\\'|\\'(?=" +
              t.src_pseudo_letter +
              '|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!' +
              t.src_ZCc +
              '|[.]).|' +
              (e && e['---'] ? '\\-(?!--(?:[^-]|$))(?:-*)|' : '\\-+|') +
              '\\,(?!' +
              t.src_ZCc +
              ').|\\!(?!' +
              t.src_ZCc +
              '|[!]).|\\?(?!' +
              t.src_ZCc +
              '|[?]).)+|\\/)?'),
            (t.src_email_name =
              '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*'),
            (t.src_xn = 'xn--[a-z0-9\\-]{1,59}'),
            (t.src_domain_root =
              '(?:' + t.src_xn + '|' + t.src_pseudo_letter + '{1,63})'),
            (t.src_domain =
              '(?:' +
              t.src_xn +
              '|(?:' +
              t.src_pseudo_letter +
              ')|(?:' +
              t.src_pseudo_letter +
              '(?:-|' +
              t.src_pseudo_letter +
              '){0,61}' +
              t.src_pseudo_letter +
              '))'),
            (t.src_host = '(?:(?:(?:(?:' + t.src_domain + ')\\.)*' + t.src_domain + '))'),
            (t.tpl_host_fuzzy =
              '(?:' + t.src_ip4 + '|(?:(?:(?:' + t.src_domain + ')\\.)+(?:%TLDS%)))'),
            (t.tpl_host_no_ip_fuzzy = '(?:(?:(?:' + t.src_domain + ')\\.)+(?:%TLDS%))'),
            (t.src_host_strict = t.src_host + t.src_host_terminator),
            (t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator),
            (t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator),
            (t.tpl_host_port_fuzzy_strict =
              t.tpl_host_fuzzy + t.src_port + t.src_host_terminator),
            (t.tpl_host_port_no_ip_fuzzy_strict =
              t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator),
            (t.tpl_host_fuzzy_test =
              'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' +
              t.src_ZPCc +
              '|>|$))'),
            (t.tpl_email_fuzzy =
              '(^|[><｜]|"|\\(|' +
              t.src_ZCc +
              ')(' +
              t.src_email_name +
              '@' +
              t.tpl_host_fuzzy_strict +
              ')'),
            (t.tpl_link_fuzzy =
              '(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|' +
              t.src_ZPCc +
              '))((?![$+<=>^`|｜])' +
              t.tpl_host_port_fuzzy_strict +
              t.src_path +
              ')'),
            (t.tpl_link_no_ip_fuzzy =
              '(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|' +
              t.src_ZPCc +
              '))((?![$+<=>^`|｜])' +
              t.tpl_host_port_no_ip_fuzzy_strict +
              t.src_path +
              ')'),
            t
          );
        };
      },
      function (e, t, r) {
        (function (e, n) {
          var o;
          /*! https://mths.be/punycode v1.4.1 by @mathias */ !(function (i) {
            t && t.nodeType, e && e.nodeType;
            var a = 'object' == typeof n && n;
            a.global !== a && a.window !== a && a.self;
            var s,
              u = 2147483647,
              c = 36,
              l = 1,
              f = 26,
              d = 38,
              p = 700,
              h = 72,
              g = 128,
              M = '-',
              m = /^xn--/,
              y = /[^\x20-\x7E]/,
              N = /[\x2E\u3002\uFF0E\uFF61]/g,
              b = {
                overflow: 'Overflow: input needs wider integers to process',
                'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                'invalid-input': 'Invalid input',
              },
              v = c - l,
              w = Math.floor,
              D = String.fromCharCode;
            function j(e) {
              throw new RangeError(b[e]);
            }
            function T(e, t) {
              for (var r = e.length, n = []; r--; ) n[r] = t(e[r]);
              return n;
            }
            function _(e, t) {
              var r = e.split('@'),
                n = '';
              return (
                r.length > 1 && ((n = r[0] + '@'), (e = r[1])),
                n + T((e = e.replace(N, '.')).split('.'), t).join('.')
              );
            }
            function z(e) {
              for (var t, r, n = [], o = 0, i = e.length; o < i; )
                (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i
                  ? 56320 == (64512 & (r = e.charCodeAt(o++)))
                    ? n.push(((1023 & t) << 10) + (1023 & r) + 65536)
                    : (n.push(t), o--)
                  : n.push(t);
              return n;
            }
            function E(e) {
              return T(e, function (e) {
                var t = '';
                return (
                  e > 65535 &&
                    ((t += D((((e -= 65536) >>> 10) & 1023) | 55296)),
                    (e = 56320 | (1023 & e))),
                  (t += D(e))
                );
              }).join('');
            }
            function A(e) {
              return e - 48 < 10
                ? e - 22
                : e - 65 < 26
                ? e - 65
                : e - 97 < 26
                ? e - 97
                : c;
            }
            function C(e, t) {
              return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
            }
            function x(e, t, r) {
              var n = 0;
              for (e = r ? w(e / p) : e >> 1, e += w(e / t); e > (v * f) >> 1; n += c)
                e = w(e / v);
              return w(n + ((v + 1) * e) / (e + d));
            }
            function k(e) {
              var t,
                r,
                n,
                o,
                i,
                a,
                s,
                d,
                p,
                m,
                y = [],
                N = e.length,
                b = 0,
                v = g,
                D = h;
              for ((r = e.lastIndexOf(M)) < 0 && (r = 0), n = 0; n < r; ++n)
                e.charCodeAt(n) >= 128 && j('not-basic'), y.push(e.charCodeAt(n));
              for (o = r > 0 ? r + 1 : 0; o < N; ) {
                for (
                  i = b, a = 1, s = c;
                  o >= N && j('invalid-input'),
                    ((d = A(e.charCodeAt(o++))) >= c || d > w((u - b) / a)) &&
                      j('overflow'),
                    (b += d * a),
                    !(d < (p = s <= D ? l : s >= D + f ? f : s - D));
                  s += c
                )
                  a > w(u / (m = c - p)) && j('overflow'), (a *= m);
                (D = x(b - i, (t = y.length + 1), 0 == i)),
                  w(b / t) > u - v && j('overflow'),
                  (v += w(b / t)),
                  (b %= t),
                  y.splice(b++, 0, v);
              }
              return E(y);
            }
            function I(e) {
              var t,
                r,
                n,
                o,
                i,
                a,
                s,
                d,
                p,
                m,
                y,
                N,
                b,
                v,
                T,
                _ = [];
              for (N = (e = z(e)).length, t = g, r = 0, i = h, a = 0; a < N; ++a)
                (y = e[a]) < 128 && _.push(D(y));
              for (n = o = _.length, o && _.push(M); n < N; ) {
                for (s = u, a = 0; a < N; ++a) (y = e[a]) >= t && y < s && (s = y);
                for (
                  s - t > w((u - r) / (b = n + 1)) && j('overflow'),
                    r += (s - t) * b,
                    t = s,
                    a = 0;
                  a < N;
                  ++a
                )
                  if (((y = e[a]) < t && ++r > u && j('overflow'), y == t)) {
                    for (
                      d = r, p = c;
                      !(d < (m = p <= i ? l : p >= i + f ? f : p - i));
                      p += c
                    )
                      (T = d - m),
                        (v = c - m),
                        _.push(D(C(m + (T % v), 0))),
                        (d = w(T / v));
                    _.push(D(C(d, 0))), (i = x(r, b, n == o)), (r = 0), ++n;
                  }
                ++r, ++t;
              }
              return _.join('');
            }
            (s = {
              version: '1.4.1',
              ucs2: { decode: z, encode: E },
              decode: k,
              encode: I,
              toASCII: function (e) {
                return _(e, function (e) {
                  return y.test(e) ? 'xn--' + I(e) : e;
                });
              },
              toUnicode: function (e) {
                return _(e, function (e) {
                  return m.test(e) ? k(e.slice(4).toLowerCase()) : e;
                });
              },
            }),
              void 0 ===
                (o = function () {
                  return s;
                }.call(t, r, t, e)) || (e.exports = o);
          })();
        }.call(this, r(97)(e), r(19)));
      },
      function (e, t) {
        e.exports = function (e) {
          return (
            e.webpackPolyfill ||
              ((e.deprecate = function () {}),
              (e.paths = []),
              e.children || (e.children = []),
              Object.defineProperty(e, 'loaded', {
                enumerable: !0,
                get: function () {
                  return e.l;
                },
              }),
              Object.defineProperty(e, 'id', {
                enumerable: !0,
                get: function () {
                  return e.i;
                },
              }),
              (e.webpackPolyfill = 1)),
            e
          );
        };
      },
      function (e, t, r) {
        e.exports = {
          options: {
            html: !1,
            xhtmlOut: !1,
            breaks: !1,
            langPrefix: 'language-',
            linkify: !1,
            typographer: !1,
            quotes: '“”‘’',
            highlight: null,
            maxNesting: 100,
          },
          components: { core: {}, block: {}, inline: {} },
        };
      },
      function (e, t, r) {
        e.exports = {
          options: {
            html: !1,
            xhtmlOut: !1,
            breaks: !1,
            langPrefix: 'language-',
            linkify: !1,
            typographer: !1,
            quotes: '“”‘’',
            highlight: null,
            maxNesting: 20,
          },
          components: {
            core: { rules: ['normalize', 'block', 'inline'] },
            block: { rules: ['paragraph'] },
            inline: { rules: ['text'], rules2: ['balance_pairs', 'text_collapse'] },
          },
        };
      },
      function (e, t, r) {
        e.exports = {
          options: {
            html: !0,
            xhtmlOut: !0,
            breaks: !1,
            langPrefix: 'language-',
            linkify: !1,
            typographer: !1,
            quotes: '“”‘’',
            highlight: null,
            maxNesting: 20,
          },
          components: {
            core: { rules: ['normalize', 'block', 'inline'] },
            block: {
              rules: [
                'blockquote',
                'code',
                'fence',
                'heading',
                'hr',
                'html_block',
                'lheading',
                'list',
                'reference',
                'paragraph',
              ],
            },
            inline: {
              rules: [
                'autolink',
                'backticks',
                'emphasis',
                'entity',
                'escape',
                'html_inline',
                'image',
                'link',
                'newline',
                'text',
              ],
              rules2: ['balance_pairs', 'emphasis', 'text_collapse'],
            },
          },
        };
      },
      function (e, t, r) {
        var n = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
        function o(e, t) {
          var r,
            o,
            i = e.posMax,
            a = e.pos;
          if (94 !== e.src.charCodeAt(a)) return !1;
          if (t) return !1;
          if (a + 2 >= i) return !1;
          for (e.pos = a + 1; e.pos < i; ) {
            if (94 === e.src.charCodeAt(e.pos)) {
              r = !0;
              break;
            }
            e.md.inline.skipToken(e);
          }
          return r && a + 1 !== e.pos
            ? (o = e.src.slice(a + 1, e.pos)).match(/(^|[^\\])(\\\\)*\s/)
              ? ((e.pos = a), !1)
              : ((e.posMax = e.pos),
                (e.pos = a + 1),
                (e.push('sup_open', 'sup', 1).markup = '^'),
                (e.push('text', '', 0).content = o.replace(n, '$1')),
                (e.push('sup_close', 'sup', -1).markup = '^'),
                (e.pos = e.posMax + 1),
                (e.posMax = i),
                !0)
            : ((e.pos = a), !1);
        }
        e.exports = function (e) {
          e.inline.ruler.after('emphasis', 'sup', o);
        };
      },
      function (e, t, r) {
        e.exports = function (e, t) {
          var r,
            n = e.linkify,
            o = e.utils.escapeHtml,
            i = RegExp('<a\\s([^<>]*href="[^"<>]*"[^<>]*)\\s?>', 'i'),
            a = RegExp('<img\\s([^<>]*src="[^"<>]*"[^<>]*)\\s?\\/?>', 'i'),
            s = /^(?:https?:)?\/\//i,
            u = /^(?:https?:\/\/|ftp:\/\/|\/\/|mailto:|xmpp:)/i,
            c = void 0 !== (t = t || {}).removeUnknown && t.removeUnknown,
            l = void 0 !== t.removeUnbalanced && t.removeUnbalanced,
            f = void 0 !== t.imageClass ? t.imageClass : '',
            d = !1,
            p = [
              'a',
              'b',
              'blockquote',
              'code',
              'em',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'li',
              'ol',
              'p',
              'pre',
              's',
              'sub',
              'sup',
              'strong',
              'ul',
            ],
            h = new Array(p.length),
            g = new Array(p.length);
          for (r = 0; r < p.length; r++) h[r] = 0;
          for (r = 0; r < p.length; r++) g[r] = !1;
          function M(e) {
            var t = n.match(e);
            return t && 1 === t.length && 0 === t[0].index && t[0].lastIndex === e.length
              ? t[0].url
              : null;
          }
          function m(e) {
            return (e = e.replace(/<[^<>]*>?/gi, function (e) {
              var t, r, n, l, m, y;
              return /(^<->|^<-\s|^<3\s)/.test(e)
                ? e
                : (t = e.match(a)) &&
                  ((n = M((r = t[1]).match(/src="([^"<>]*)"/i)[1])),
                  (l = (l = r.match(/alt="([^"<>]*)"/i)) && void 0 !== l[1] ? l[1] : ''),
                  (m =
                    (m = r.match(/title="([^"<>]*)"/i)) && void 0 !== m[1] ? m[1] : ''),
                  n && s.test(n))
                ? '' !== f
                  ? '<img src="' +
                    n +
                    '" alt="' +
                    l +
                    '" title="' +
                    m +
                    '" class="' +
                    f +
                    '">'
                  : '<img src="' + n + '" alt="' + l + '" title="' + m + '">'
                : ((y = p.indexOf('a')),
                  (t = e.match(i)) &&
                  ((n = M((r = t[1]).match(/href="([^"<>]*)"/i)[1])),
                  (m =
                    (m = r.match(/title="([^"<>]*)"/i)) && void 0 !== m[1] ? m[1] : ''),
                  n && u.test(n))
                    ? ((d = !0),
                      (h[y] += 1),
                      '<a href="' + n + '" title="' + m + '" target="_blank">')
                    : (t = /<\/a>/i.test(e))
                    ? ((d = !0), (h[y] -= 1), h[y] < 0 && (g[y] = !0), '</a>')
                    : (t = e.match(/<(br|hr)\s?\/?>/i))
                    ? '<' + t[1].toLowerCase() + '>'
                    : (t = e.match(
                        /<(\/?)(b|blockquote|code|em|h[1-6]|li|ol(?: start="\d+")?|p|pre|s|sub|sup|strong|ul)>/i
                      )) && !/<\/ol start="\d+"/i.test(e)
                    ? ((d = !0),
                      (y = p.indexOf(t[2].toLowerCase().split(' ')[0])),
                      '/' === t[1] ? (h[y] -= 1) : (h[y] += 1),
                      h[y] < 0 && (g[y] = !0),
                      '<' + t[1] + t[2].toLowerCase() + '>')
                    : !0 === c
                    ? ''
                    : o(e));
            }));
          }
          e.core.ruler.after('linkify', 'sanitize_inline', function (e) {
            var t, n, o;
            for (r = 0; r < p.length; r++) h[r] = 0;
            for (r = 0; r < p.length; r++) g[r] = !1;
            for (d = !1, n = 0; n < e.tokens.length; n++)
              if (
                ('html_block' === e.tokens[n].type &&
                  (e.tokens[n].content = m(e.tokens[n].content)),
                'inline' === e.tokens[n].type)
              )
                for (o = e.tokens[n].children, t = 0; t < o.length; t++)
                  'html_inline' === o[t].type && (o[t].content = m(o[t].content));
          }),
            e.core.ruler.after('sanitize_inline', 'sanitize_balance', function (e) {
              if (!1 !== d) {
                var t, n;
                for (r = 0; r < p.length; r++) 0 !== h[r] && (g[r] = !0);
                for (t = 0; t < e.tokens.length; t++)
                  if ('html_block' !== e.tokens[t].type) {
                    if ('inline' === e.tokens[t].type)
                      for (n = e.tokens[t].children, r = 0; r < n.length; r++)
                        'html_inline' === n[r].type && (n[r].content = a(n[r].content));
                  } else e.tokens[t].content = a(e.tokens[t].content);
              }
              function i(e, t) {
                var r, n;
                return (
                  (r =
                    'a' === t
                      ? RegExp('<a href="[^"<>]*" title="[^"<>]*" target="_blank">', 'g')
                      : 'ol' === t
                      ? /<ol(?: start="\d+")?>/g
                      : RegExp('<' + t + '>', 'g')),
                  (n = RegExp('</' + t + '>', 'g')),
                  (e =
                    !0 === l
                      ? (e = e.replace(r, '')).replace(n, '')
                      : (e = e.replace(r, function (e) {
                          return o(e);
                        })).replace(n, function (e) {
                          return o(e);
                        }))
                );
              }
              function a(e) {
                var t;
                for (t = 0; t < p.length; t++) !0 === g[t] && (e = i(e, p[t]));
                return e;
              }
            });
        };
      },
      function (e, t, r) {
        let n = {};
        const o = e => (e ? e.split(' ') : []),
          i = e => (Array.isArray(e) ? e : [e]);
        function a(e) {
          !(function e(t) {
            t.forEach(t => {
              if (/(_open$|image)/.test(t.type) && n[t.tag]) {
                const e = o(t.attrGet('class')),
                  r = i(n[t.tag]);
                t.attrSet('class', [...e, ...r].join(' '));
              }
              t.children && e(t.children);
            });
          })(e.tokens);
        }
        e.exports = function (e, t) {
          (n = t || {}), e.core.ruler.push('markdownit-tag-to-class', a);
        };
      },
      function (e, t, r) {
        function n(e, t) {
          (t = t ? (Array.isArray(t) ? t : [t]) : []), Object.freeze(t);
          var r = e.renderer.rules.link_open || this.defaultRender;
          e.renderer.rules.link_open = function (e, n, o, i, a) {
            var s = (function (e, t) {
                var r,
                  n,
                  o = e.attrs[e.attrIndex('href')][1];
                for (r = 0; r < t.length; ++r)
                  if (!(n = t[r]).pattern || new RegExp(n.pattern).test(o)) return n;
              })(e[n], t),
              u = s && s.attrs;
            return (
              u &&
                (function (e, t, r) {
                  Object.keys(r).forEach(function (n) {
                    var o,
                      i = r[n];
                    'className' === n && (n = 'class'),
                      (o = t[e].attrIndex(n)) < 0
                        ? t[e].attrPush([n, i])
                        : (t[e].attrs[o][1] = i);
                  });
                })(n, e, u),
              r(e, n, o, i, a)
            );
          };
        }
        (n.defaultRender = function (e, t, r, n, o) {
          return o.renderToken(e, t, r);
        }),
          (e.exports = n);
      },
      function (e, t, r) {},
      function (e, t, r) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(r(0)),
          i = n(r(13));
        r(107),
          (t.default = function (e) {
            var t = e.message,
              r = e.showTimeStamp;
            return o.default.createElement(
              'div',
              null,
              o.default.createElement(
                'div',
                { className: 'rcw-snippet' },
                o.default.createElement(
                  'h5',
                  { className: 'rcw-snippet-title' },
                  t.title
                ),
                o.default.createElement(
                  'div',
                  { className: 'rcw-snippet-details' },
                  o.default.createElement(
                    'a',
                    { href: t.link, target: t.target, className: 'rcw-link' },
                    t.link
                  )
                )
              ),
              r &&
                o.default.createElement(
                  'span',
                  { className: 'rcw-timestamp' },
                  i.default(t.timestamp, 'hh:mm')
                )
            );
          });
      },
      function (e, t, r) {},
      function (e, t, r) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(r(0));
        r(109),
          (t.default = function (e) {
            var t = e.button,
              r = e.onQuickButtonClicked;
            return o.default.createElement(
              'button',
              {
                className: 'quick-button',
                onClick: function (e) {
                  return r(e, t.value);
                },
              },
              t.label
            );
          });
      },
      function (e, t, r) {},
      function (e, t, r) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(r(0)),
          i = n(r(6));
        r(111),
          (t.default = function (e) {
            var t = e.typing;
            return o.default.createElement(
              'div',
              { className: i.default('loader', { active: t }) },
              o.default.createElement(
                'div',
                { className: 'loader-container' },
                o.default.createElement('span', { className: 'loader-dots' }),
                o.default.createElement('span', { className: 'loader-dots' }),
                o.default.createElement('span', { className: 'loader-dots' })
              )
            );
          });
      },
      function (e, t, r) {},
      function (e, t, r) {},
      function (e, t, r) {
        var n =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(r(0)),
          i = r(3),
          a = r(114);
        r(115),
          (t.default = function (e) {
            var t = e.sendMessage,
              r = e.placeholder,
              n = e.disabledInput,
              s = e.autofocus,
              u = e.onTextInputChange,
              c = e.buttonAlt,
              l = i.useSelector(function (e) {
                return e.behavior.showChat;
              }),
              f = o.useRef(null);
            return (
              o.useEffect(
                function () {
                  var e;
                  l && (null === (e = f.current) || void 0 === e || e.focus());
                },
                [l]
              ),
              o.default.createElement(
                'form',
                { className: 'rcw-sender', onSubmit: t },
                o.default.createElement('input', {
                  type: 'text',
                  className: 'rcw-new-message',
                  name: 'message',
                  ref: f,
                  placeholder: r,
                  disabled: n,
                  autoFocus: s,
                  autoComplete: 'off',
                  onChange: u,
                }),
                o.default.createElement(
                  'button',
                  { type: 'submit', className: 'rcw-send' },
                  o.default.createElement('img', {
                    src: a,
                    className: 'rcw-send-icon',
                    alt: c,
                  })
                )
              )
            );
          });
      },
      function (e, t) {
        e.exports =
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTM1LjUgNTM1LjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzNS41IDUzNS41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9InNlbmQiPgoJCTxwb2x5Z29uIHBvaW50cz0iMCw0OTcuMjUgNTM1LjUsMjY3Ljc1IDAsMzguMjUgMCwyMTYuNzUgMzgyLjUsMjY3Ljc1IDAsMzE4Ljc1ICAgIiBmaWxsPSIjY2JjYmNiIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';
      },
      function (e, t, r) {},
      function (e, t, r) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(r(0)),
          i = r(3);
        r(117),
          (t.default = function (e) {
            var t = e.onQuickButtonClicked,
              r = i.useSelector(function (e) {
                return e.quickButtons.quickButtons;
              });
            return r.length
              ? o.default.createElement(
                  'div',
                  { className: 'quick-buttons-container' },
                  o.default.createElement(
                    'ul',
                    { className: 'quick-buttons' },
                    r.map(function (e, r) {
                      return o.default.createElement(
                        'li',
                        {
                          className: 'quick-list-button',
                          key: ''.concat(e.label, '-').concat(r),
                        },
                        (function (e) {
                          var r = e.component;
                          return o.default.createElement(r, {
                            onQuickButtonClicked: t,
                            button: e,
                          });
                        })(e)
                      );
                    })
                  )
                )
              : null;
          });
      },
      function (e, t, r) {},
      function (e, t, r) {},
      function (e, t, r) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(r(0)),
          i = r(3),
          a = n(r(6)),
          s = n(r(120)),
          u = r(4);
        r(122);
        var c = r(123),
          l = r(20);
        t.default = function (e) {
          var t = e.toggle,
            r = e.chatId,
            n = e.openLabel,
            f = e.closeLabel,
            d = i.useDispatch(),
            p = i.useSelector(function (e) {
              return { showChat: e.behavior.showChat, badgeCount: e.messages.badgeCount };
            }),
            h = p.showChat,
            g = p.badgeCount;
          return o.default.createElement(
            'button',
            {
              type: 'button',
              className: a.default('rcw-launcher', { 'rcw-hide-sm': h }),
              onClick: function () {
                t(), h || d(u.setBadgeCount(0));
              },
              'aria-controls': r,
            },
            !h && o.default.createElement(s.default, { badge: g }),
            h
              ? o.default.createElement('img', {
                  src: l,
                  className: 'rcw-close-launcher',
                  alt: n,
                })
              : o.default.createElement('img', {
                  src: c,
                  className: 'rcw-open-launcher',
                  alt: f,
                })
          );
        };
      },
      function (e, t, r) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(r(0));
        r(121),
          (t.default = function (e) {
            var t = e.badge;
            return t > 0
              ? o.default.createElement('span', { className: 'rcw-badge' }, t)
              : null;
          });
      },
      function (e, t, r) {},
      function (e, t, r) {},
      function (e, t) {
        e.exports =
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzQgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ1LjEgKDQzNTA0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY19idXR0b248L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iRGVza3RvcC1IRCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyOTkuMDAwMDAwLCAtNzQ4LjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjg5LjAwMDAwMCwgNzM1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImljX2J1dHRvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMjA2OTMzLCAxMy42MDc4MjUpIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUuNzg2NTM5OCw3LjM3MDUxODYzIEMyNS43ODY1Mzk4LDguNDA4MDMxMTggMjUuMDQzMjAyNiw5LjAzOTAxMDkgMjQuNTAwNDE2MSw5LjUwMjA1NjQyIEMyNC4yOTQ4NTE3LDkuNjc3NDQzODggMjMuOTEyMjI3MSw5Ljk5NzQ2MjMgMjMuOTEzMjQ4NCwxMC4xMTY5OTc1IEMyMy45MTY5NjIzLDEwLjU4NTg5MjQgMjMuNTQ1OTQzNiwxMC45NjAzNDc5IDIzLjA4NDM5ODYsMTAuOTYwMzQ3OSBDMjMuMDgyMDc3NSwxMC45NjAzNDc5IDIzLjA3OTc1NjMsMTAuOTYwMzQ3OSAyMy4wNzc0MzUxLDEwLjk2MDM0NzkgQzIyLjYxOTEzOTgsMTAuOTYwMzQ3OSAyMi4yNDU3MDcxLDEwLjU5NzQwMjUgMjIuMjQxOTkzMiwxMC4xMzA4NjYyIEMyMi4yMzQ2NTgyLDkuMjExMjg0OTcgMjIuODk1MDgyNiw4LjY2MDU5Mjg5IDIzLjQyNTc5ODksOC4yMDc4MzA5OCBDMjMuODQyMjIsNy44NTI1Mjc1MSAyNC4xMTUyODQ2LDcuNjAyNTEzMTEgMjQuMTE1Mjg0Niw3LjM3MzcyNjM2IEMyNC4xMTUyODQ2LDYuOTEwNTg2NDkgMjMuNzQ0NDUxNiw2LjUzMzc3MjM1IDIzLjI4ODY2MzIsNi41MzM3NzIzNSBDMjIuODMyNjg5LDYuNTMzNzcyMzUgMjIuNDYxNzYzMiw2LjkxMDU4NjQ5IDIyLjQ2MTc2MzIsNy4zNzM3MjYzNiBDMjIuNDYxNzYzMiw3Ljg0MjcxNTYyIDIyLjA4NzY4MDYsOC4yMjI4MzE4NCAyMS42MjYxMzU2LDguMjIyODMxODQgQzIxLjE2NDU5MDYsOC4yMjI4MzE4NCAyMC43OTA1MDgsNy44NDI3MTU2MiAyMC43OTA1MDgsNy4zNzM3MjYzNiBDMjAuNzkwNTA4LDUuOTc0MjExODMgMjEuOTExMDg0Niw0LjgzNTU2MTM4IDIzLjI4ODQ3NzUsNC44MzU1NjEzOCBDMjQuNjY1OTYzMiw0LjgzNTQ2NzAzIDI1Ljc4NjUzOTgsNS45NzA5MDk3NiAyNS43ODY1Mzk4LDcuMzcwNTE4NjMgWiBNMjMuMTAwNTU0MSwxMS43NDQxNjY2IEMyMi42MzkwMDkxLDExLjc0NDE2NjYgMjIuMjgzNDAzMSwxMi4xMjQyODI4IDIyLjI4MzQwMzEsMTIuNTkzMjcyMSBMMjIuMjgzNDAzMSwxMi41OTk3ODE5IEMyMi4yODM0MDMxLDEzLjA2ODc3MTIgMjIuNjM5MTAyLDEzLjQ0NTY3OTcgMjMuMTAwNTU0MSwxMy40NDU2Nzk3IEMyMy41NjIwMDYzLDEzLjQ0NTY3OTcgMjMuOTM2MTgxNywxMy4wNjIyNjE0IDIzLjkzNjE4MTcsMTIuNTkzMjcyMSBDMjMuOTM2MTgxNywxMi4xMjQyODI4IDIzLjU2MjA5OTEsMTEuNzQ0MTY2NiAyMy4xMDA1NTQxLDExLjc0NDE2NjYgWiBNNi4yNTcxNzk2LDE3LjY1ODk0MTEgQzUuNzk1NjM0NjIsMTcuNjU4OTQxMSA1LjQyMTU1MTk5LDE4LjAzOTA1NzMgNS40MjE1NTE5OSwxOC41MDgwNDY2IEM1LjQyMTU1MTk5LDE4Ljk3NzAzNTggNS43OTU2MzQ2MiwxOS4zNTcxNTIgNi4yNTcxNzk2LDE5LjM1NzE1MiBMNi4zMjY4MTUyNCwxOS4zNTcxNTIgQzYuNzg4MzYwMjMsMTkuMzU3MTUyIDcuMTYyNDQyODYsMTguOTc3MDM1OCA3LjE2MjQ0Mjg2LDE4LjUwODA0NjYgQzcuMTYyNDQyODYsMTguMDM5MDU3MyA2Ljc4ODM2MDIzLDE3LjY1ODk0MTEgNi4zMjY4MTUyNCwxNy42NTg5NDExIEw2LjI1NzE3OTYsMTcuNjU4OTQxMSBaIE05LjE2MTM1Njk3LDE3LjY1ODk0MTEgQzguNjk5ODExOTgsMTcuNjU4OTQxMSA4LjMyNTcyOTM1LDE4LjAzOTA1NzMgOC4zMjU3MjkzNSwxOC41MDgwNDY2IEM4LjMyNTcyOTM1LDE4Ljk3NzAzNTggOC42OTk4MTE5OCwxOS4zNTcxNTIgOS4xNjEzNTY5NywxOS4zNTcxNTIgTDkuMjMwODk5NzUsMTkuMzU3MTUyIEM5LjY5MjQ0NDc0LDE5LjM1NzE1MiAxMC4wNjY1Mjc0LDE4Ljk3NzAzNTggMTAuMDY2NTI3NCwxOC41MDgwNDY2IEMxMC4wNjY1Mjc0LDE4LjAzOTA1NzMgOS42OTI0NDQ3NCwxNy42NTg5NDExIDkuMjMwODk5NzUsMTcuNjU4OTQxMSBMOS4xNjEzNTY5NywxNy42NTg5NDExIFogTTMzLjcwMzY0NzMsNC4wOTY5MzM5NSBMMzMuNzAzNjQ3MywxMy42NTQxODIyIEMzMy43MDM2NDczLDE1LjkxNzA0ODMgMzEuOTE4MDAzOSwxNy43NTMyODYxIDI5LjY5MTA1NjMsMTcuNzUzMjg2MSBMMTguODU0MTczMSwxNy43NTMyODYxIEMxOC42NDIyOTUxLDE3Ljc1MzI4NjEgMTguNDY3ODM0NiwxNy43NTIwNTk2IDE4LjMyMTg3ODMsMTcuNzQ4OTQ2MyBDMTguMTY4OTU4NSwxNy43NDU3Mzg1IDE3Ljk5NjgxOTIsMTcuNzQ0NTEyIDE3LjkyOTY5MDQsMTcuNzUyMDU5NiBDMTcuODU5Nzc2MiwxNy43OTkyMzIyIDE3LjY4ODM3OTcsMTcuOTU4NzY5NyAxNy41MjMyMDQsMTguMTEzNDAxMiBDMTcuNDU3NzQ2NSwxOC4xNzQ2MzExIDE3LjM4MzY1NDIsMTguMjQxOTkzNSAxNy4zMDM3MTI1LDE4LjMxNjE0ODcgTDE0LjIzNzcwMTksMjEuMTU1NzQ2MSBDMTMuOTkzMTQxNSwyMS4zODI0NTczIDEzLjYzMTMxNDgsMjEuNDQxMTM5OSAxMy4zMjg0NDYyLDIxLjMwNTQ3MTcgQzEzLjAyNTU3NzYsMjEuMTY5NzA5MiAxMi44MTI5NTY4LDIwLjg2NDk3NDcgMTIuODEyOTU2OCwyMC41Mjg2MzQ2IEwxMi44MTI5NTY4LDExLjUyNjUxMjYgTDQuMDU5MjkzMjcsMTEuNTI2NTEyNiBDMi43NTM2NzE1NCwxMS41MjY1MTI2IDEuNjcxMjU1MjQsMTIuNjEzNjUwNiAxLjY3MTI1NTI0LDEzLjk0MDE0MjEgTDEuNjcxMjU1MjQsMjMuNDk3MzkwNCBDMS42NzEyNTUyNCwyNC44MjM5NzYyIDIuNzUzNzY0MzksMjUuODY2OTYwNyA0LjA1OTI5MzI3LDI1Ljg2Njk2MDcgTDE2LjE2NDE5NDksMjUuODY2OTYwNyBDMTYuMzcyNjM3NiwyNS44NjY5NjA3IDE2LjU2NzYxNzQsMjUuOTY0MjMwNSAxNi43MjE1NTg2LDI2LjEwNzA2ODkgTDE5LjIxOTQzNTIsMjguNDQ3MjAzNiBMMTkuMjE5NDM1MiwyMC4zNzcwMjIxIEMxOS4yMTk0MzUyLDE5LjkwODAzMjggMTkuNTkzNTE3OCwxOS41Mjc5MTY2IDIwLjA1NTA2MjgsMTkuNTI3OTE2NiBDMjAuNTE2NjA3OCwxOS41Mjc5MTY2IDIwLjg5MDY5MDUsMTkuOTA4MDMyOCAyMC44OTA2OTA1LDIwLjM3NzAyMjEgTDIwLjg5MDY5MDUsMzAuMzcxNzQ4NCBDMjAuODkwNjkwNSwzMC43MDgwODg1IDIwLjcwMTI4MTUsMzEuMDA4Mjk0NCAyMC4zOTgzMjAxLDMxLjE0NDA1NyBDMjAuMjg5OTY3LDMxLjE5MjY0NDcgMjAuMTgxMTQ5OCwzMS4yMTE3OTY3IDIwLjA2NzIyNTksMzEuMjExNzk2NyBDMTkuODYyNTg5OSwzMS4yMTE3OTY3IDE5LjY2MDczOTQsMzEuMTI2NDE0NCAxOS41MDM3MzQzLDMwLjk4MDc0NTcgTDE1Ljg0MDI1LDI3LjU2NTA3NzQgTDQuMDU5MjkzMjcsMjcuNTY1MDc3NCBDMS44MzIyNTI4MiwyNy41NjUwNzc0IDAsMjUuNzYwMjU2NSAwLDIzLjQ5NzI5NiBMMCwxMy45NDAxNDIxIEMwLDExLjY3NzI3NiAxLjgzMjI1MjgyLDkuODI4MzAxNjIgNC4wNTkyOTMyNyw5LjgyODMwMTYyIEwxMi44MTI5NTY4LDkuODI4MzAxNjIgTDEyLjgxMjk1NjgsNC4wOTY5MzM5NSBDMTIuODEyOTU2OCwxLjgzMzk3MzUgMTQuNjU5MjI5NiwwLjAxNjQxNjAzOTMgMTYuODg2MjcwMSwwLjAxNjQxNjAzOTMgTDI5LjY5MTE0OTEsMC4wMTY0MTYwMzkzIEMzMS45MTgwMDM5LDAuMDE2NDE2MDM5MyAzMy43MDM2NDczLDEuODMzOTczNSAzMy43MDM2NDczLDQuMDk2OTMzOTUgWiBNMzIuMDMyMzkyLDQuMDk2OTMzOTUgQzMyLjAzMjM5MiwyLjc3MDM0ODE2IDMwLjk5NjQ5MjMsMS43MTQ2MjcgMjkuNjkxMDU2MywxLjcxNDYyNyBMMTYuODg2MjcwMSwxLjcxNDYyNyBDMTUuNTgwNzQxMiwxLjcxNDYyNyAxNC40ODQyMTIsMi43NzAzNDgxNiAxNC40ODQyMTIsNC4wOTY5MzM5NSBMMTQuNDg0MjEyLDEwLjY4NTMzMjEgTDE0LjQ4NDIxMiwxOC42MDQwODk4IEwxNi4xNjQyODc4LDE3LjA2MTI2NTIgQzE2LjI0MjA5NCwxNi45ODkwOTEyIDE2LjMyOTI3NzgsMTYuOTIzMDQ5NyAxNi4zOTI4Nzg0LDE2Ljg2MzQyMzYgQzE3LjE2MDA3NzQsMTYuMTQ1MDgwMyAxNy4zNTYzNTcsMTYuMDMwMjYyNCAxOC4zNTcwNjc1LDE2LjA1MTIwNyBDMTguNDkzNTUzNCwxNi4wNTQxMzE3IDE4LjY1NjEyOTQsMTYuMDU1MTY5NSAxOC44NTQxNzMxLDE2LjA1NTE2OTUgTDI5LjY5MTA1NjMsMTYuMDU1MTY5NSBDMzAuOTk2NDkyMywxNi4wNTUxNjk1IDMyLjAzMjM5MiwxNC45ODA3NjggMzIuMDMyMzkyLDEzLjY1NDI3NjYgTDMyLjAzMjM5Miw0LjA5NjkzMzk1IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
      },
      function (e, t, r) {
        var n =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            },
          o =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var i = n(r(0)),
          a = o(r(8)),
          s = r(3),
          u = o(r(125)),
          c = o(r(126));
        r(127);
        var l = r(4),
          f = r(128),
          d = r(129),
          p = r(130),
          h = r(131),
          g = r(132);
        t.default = function (e) {
          e.fullScreenMode;
          var t = e.zoomStep,
            r = u.default(t),
            n = r.state,
            o = r.initFileSize,
            M = r.onZoomIn,
            m = r.onZoomOut,
            y = r.onResizePageZoom,
            N = s.useDispatch(),
            b = s.useSelector(function (e) {
              return {
                src: e.preview.src,
                alt: e.preview.alt,
                width: e.preview.width,
                height: e.preview.height,
                visible: e.preview.visible,
              };
            }),
            v = b.src,
            w = b.alt,
            D = b.width,
            j = b.height,
            T = b.visible;
          i.useEffect(
            function () {
              v && o(D, j);
            },
            [v]
          );
          var _ = c.default(),
            z = i.default.createElement(
              'div',
              { className: 'rcw-previewer-container' },
              i.default.createElement(
                'div',
                { className: 'rcw-previewer-veil' },
                i.default.createElement(
                  'img',
                  Object.assign({}, n.layout, {
                    src: v,
                    className: 'rcw-previewer-image',
                    alt: w,
                  })
                )
              ),
              i.default.createElement(
                'button',
                {
                  className: 'rcw-previewer-button rcw-previewer-close-button',
                  onClick: function () {
                    N(l.closeFullscreenPreview());
                  },
                },
                i.default.createElement('img', {
                  src: f,
                  className: 'rcw-previewer-icon',
                })
              ),
              i.default.createElement(
                'div',
                { className: 'rcw-previewer-tools' },
                i.default.createElement(
                  'button',
                  { className: 'rcw-previewer-button', onClick: y },
                  i.default.createElement('img', {
                    src: n.zoom ? g : h,
                    className: 'rcw-previewer-icon',
                    alt: 'reset zoom',
                  })
                ),
                i.default.createElement(
                  'button',
                  { className: 'rcw-previewer-button', onClick: M },
                  i.default.createElement('img', {
                    src: d,
                    className: 'rcw-previewer-icon',
                    alt: 'zoom in',
                  })
                ),
                i.default.createElement(
                  'button',
                  { className: 'rcw-previewer-button', onClick: m },
                  i.default.createElement('img', {
                    src: p,
                    className: 'rcw-previewer-icon',
                    alt: 'zoom out',
                  })
                )
              )
            );
          return T ? a.default.createPortal(z, _) : null;
        };
      },
      function (e, t, r) {
        function n(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e))) return;
              var r = [],
                n = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t);
                  n = !0
                );
              } catch (e) {
                (o = !0), (i = e);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (o) throw i;
                }
              }
              return r;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ('string' == typeof e) return o(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === r && e.constructor && (r = e.constructor.name);
              if ('Map' === r || 'Set' === r) return Array.from(r);
              if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return o(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function o(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var i = r(0),
          a = { layout: { width: 800 }, zoom: !1, direction: 'vertical' };
        t.default = function (e) {
          var t = n(i.useState({ width: 0, height: 0 }), 2),
            r = t[0],
            o = t[1],
            s = n(i.useState({ width: 0, height: 0 }), 2),
            u = s[0],
            c = s[1],
            l = n(
              i.useReducer(function (e, t) {
                switch (t.type) {
                  case 'initLayout':
                    return Object.assign(Object.assign({}, e), {
                      layout: t.payload.layout,
                      direction: t.payload.direction,
                      zoom: !1,
                    });
                  case 'zoomIn':
                  case 'zoomOut':
                    return Object.assign(Object.assign({}, e), {
                      layout: t.layout,
                      zoom: !0,
                    });
                  case 'resetZoom':
                    return Object.assign(Object.assign({}, e), {
                      layout: t.layout,
                      direction: t.direction,
                    });
                  default:
                    throw new Error('Unexpected action');
                }
              }, Object.assign({}, a)),
              2
            ),
            f = l[0],
            d = l[1],
            p = function (e, t) {
              var r = window,
                n = r.innerWidth,
                i = r.innerHeight;
              o({ width: n, height: i }), c({ width: e, height: t });
              var a = { layout: {}, direction: 'horizontal' };
              n / i <= e / t
                ? ((a.layout.width = 0.8 * n), (a.direction = 'horizontal'))
                : ((a.layout.height = 0.8 * i), (a.direction = 'vertical')),
                d({ type: 'initLayout', payload: a });
            },
            h = function (e) {
              return 'vertical' === f.direction
                ? { height: f.layout.height + e }
                : { width: f.layout.width + e };
            };
          return {
            state: f,
            initFileSize: p,
            onZoomIn: function () {
              d({ type: 'zoomIn', layout: h(e) });
            },
            onZoomOut: function () {
              ('vertical' === f.direction
                ? f.layout.height > r.height / 3
                : f.layout.width > r.width / 3) && d({ type: 'zoomOut', layout: h(-e) });
            },
            onResizePageZoom: function () {
              f.zoom && p(u.width, u.height);
            },
          };
        };
      },
      function (e, t, r) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = r(0);
        t.default = function () {
          var e = n.useRef(null);
          return (
            n.useEffect(function () {
              var t = document.querySelector('#rcw-image-preview'),
                r =
                  t ||
                  (function (e) {
                    var t = document.createElement('div');
                    return t.setAttribute('id', e), t;
                  })('#rcw-image-preview');
              return (
                t ||
                  (function (e) {
                    document.body.appendChild(e);
                  })(r),
                e.current && r.appendChild(e.current),
                function () {
                  e.current && e.current.remove(),
                    -1 === r.childNodes.length && r.remove();
                }
              );
            }, []),
            e.current || (e.current = document.createElement('div')),
            e.current
          );
        };
      },
      function (e, t, r) {},
      function (e, t) {
        e.exports =
          'data:image/svg+xml;base64,PHN2ZyB0PSIxNTg4MDczODg1NTE0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU0MjgiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHBhdGggZD0iTTY4MC41NTA0IDY0MC44ODc0NjdhMzAuNjUxNzMzIDMwLjY1MTczMyAwIDAgMSAwIDQzLjQxNzZjLTYuMDA3NDY3IDYuMDA3NDY3LTEzLjg1ODEzMyA5LjAxMTItMjEuNzA4OCA5LjAxMTItNy44NTA2NjcgMC0xNS43MDEzMzMtMy4wMDM3MzMtMjEuNzA4OC05LjAxMTJMNTEyLjA2ODI2NyA1NTkuMzA4OGwtMTI1LjA2NDUzNCAxMjUuMDY0NTMzYy02LjAwNzQ2NyA2LjAwNzQ2Ny0xMy44NTgxMzMgOS4wMTEyLTIxLjcwODggOS4wMTEyLTcuODUwNjY3IDAtMTUuNzAxMzMzLTMuMDAzNzMzLTIxLjcwODgtOS4wMTEyYTMwLjY1MTczMyAzMC42NTE3MzMgMCAwIDEgMC00My40MTc2bDEyNS4wNjQ1MzQtMTI1LjA2NDUzMy0xMjUuMDY0NTM0LTEyNS4xMzI4YTMwLjY1MTczMyAzMC42NTE3MzMgMCAwIDEgMC00My40MTc2IDMwLjY1MTczMyAzMC42NTE3MzMgMCAwIDEgNDMuNDE3NiAwTDUxMi4wNjgyNjcgNDcyLjQwNTMzM2wxMjUuMDY0NTMzLTEyNS4wNjQ1MzNhMzAuNjUxNzMzIDMwLjY1MTczMyAwIDAgMSA0My40MTc2IDAgMzAuNjUxNzMzIDMwLjY1MTczMyAwIDAgMSAwIDQzLjQxNzZMNTU1LjU1NDEzMyA1MTUuODIyOTMzbDEyNC45OTYyNjcgMTI1LjA2NDUzNHoiIHAtaWQ9IjU0MjkiIGZpbGw9IiM0MzM5MzgiPjwvcGF0aD48L3N2Zz4=';
      },
      function (e, t) {
        e.exports =
          'data:image/svg+xml;base64,PHN2ZyB0PSIxNTg4MDczMjExMDE0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ0MjYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHBhdGggZD0iTTY5My4xNzk3MzMgNTIwLjgwNjRjMCAxNi45OTg0LTEzLjcyMTYgMzAuNzItMzAuNzIgMzAuNzJoLTEyMi44OHYxMTYuMDUzMzMzYzAgMTYuOTk4NC0xMy43MjE2IDMwLjcyLTMwLjcyIDMwLjcycy0zMC43Mi0xMy43MjE2LTMwLjcyLTMwLjcydi0xMTYuMDUzMzMzaC0xMTYuMDUzMzMzYy0xNi45OTg0IDAtMzAuNzItMTMuNzIxNi0zMC43Mi0zMC43MnMxMy43MjE2LTMwLjcyIDMwLjcyLTMwLjcyaDExNi4wNTMzMzN2LTEyMi44OGMwLTE2Ljk5ODQgMTMuNzIxNi0zMC43MiAzMC43Mi0zMC43MnMzMC43MiAxMy43MjE2IDMwLjcyIDMwLjcydjEyMi44OGgxMjIuODhhMzAuNzIgMzAuNzIgMCAwIDEgMzAuNzIgMzAuNzJ6IiBwLWlkPSI0NDI3IiBmaWxsPSIjNDMzOTM4Ij48L3BhdGg+PC9zdmc+';
      },
      function (e, t) {
        e.exports =
          'data:image/svg+xml;base64,PHN2ZyB0PSIxNTg4MDczMjQzNTU3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ2NzIiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCI+PHBhdGggZD0iTTY2Mi40NTk3MzMgNTQ4LjExMzA2N2gtMzAwLjM3MzMzM2MtMTYuOTk4NCAwLTMwLjcyLTEzLjcyMTYtMzAuNzItMzAuNzJzMTMuNzIxNi0zMC43MiAzMC43Mi0zMC43MmgzMDAuMzczMzMzYTMwLjcyIDMwLjcyIDAgMCAxIDAgNjEuNDR6IiBwLWlkPSI0NjczIj48L3BhdGg+PC9zdmc+';
      },
      function (e, t) {
        e.exports =
          'data:image/svg+xml;base64,PHN2ZyB0PSIxNTg4MDc0MTk1MzQzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU3MjYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHBhdGggZD0iTTgxNS43ODY2NjcgMjQxLjczMjI2N3YxMzYuNTMzMzMzYzAgMTUuMDg2OTMzLTEyLjIxOTczMyAyNy4zMDY2NjctMjcuMzA2NjY3IDI3LjMwNjY2N3MtMjcuMzA2NjY3LTEyLjIxOTczMy0yNy4zMDY2NjctMjcuMzA2NjY3VjMwNy42Nzc4NjdMNjAyLjUyMTYgNDY2LjQ2NjEzM2MtNS4zMjQ4IDUuMzI0OC0xMi4zNTYyNjcgNy45ODcyLTE5LjMxOTQ2NyA3Ljk4NzJhMjcuMjkzMDEzIDI3LjI5MzAxMyAwIDAgMS0xOS4zMTk0NjYtNDYuNjI2MTMzbDE1OC43Mi0xNTguODU2NTMzSDY1Mi4wMTQ5MzNjLTE1LjA4NjkzMyAwLTI3LjMwNjY2Ny0xMi4yMTk3MzMtMjcuMzA2NjY2LTI3LjMwNjY2N3MxMi4yMTk3MzMtMjcuMzA2NjY3IDI3LjMwNjY2Ni0yNy4zMDY2NjdoMTM2LjQ2NTA2N2M3LjIzNjI2NyAwIDE0LjE5OTQ2NyAyLjg2NzIgMTkuMzE5NDY3IDcuOTg3MiA1LjEyIDUuMTg4MjY3IDcuOTg3MiAxMi4xNTE0NjcgNy45ODcyIDE5LjM4NzczNHogbS0yNy4zMDY2NjcgMzgyLjIyNTA2NmMtMTUuMDg2OTMzIDAtMjcuMzA2NjY3IDEyLjIxOTczMy0yNy4zMDY2NjcgMjcuMzA2NjY3djcwLjU4NzczM0w2MDUuMTg0IDU2Ny4yMjc3MzNjLTEwLjY0OTYtMTAuNjQ5Ni0yOC42NzItMTAuNjQ5Ni0zOS4zMjE2IDAtMTAuNjQ5NiAxMC42NDk2LTExLjA1OTIgMjcuOTIxMDY3LTAuNDA5NiAzOC42Mzg5MzRsMTU0LjQxOTIgMTU0LjY5MjI2Nkg2NDkuMjE2aC0wLjA2ODI2N2MtMTUuMDg2OTMzIDAtMjcuMzA2NjY3IDEyLjIxOTczMy0yNy4zMDY2NjYgMjcuMzA2NjY3czEyLjIxOTczMyAyNy4zMDY2NjcgMjcuMzA2NjY2IDI3LjMwNjY2N2gxMzYuMzk2OGM3LjIzNjI2NyAwIDE1LjYzMzA2Ny0yLjg2NzIgMjAuNzUzMDY3LTcuOTg3MnM5LjQ4OTA2Ny0xMi4wODMyIDkuNDg5MDY3LTE5LjMxOTQ2N3YtMTM2LjUzMzMzM2MwLTE1LjE1NTItMTIuMjE5NzMzLTI3LjM3NDkzMy0yNy4zMDY2NjctMjcuMzc0OTM0eiBtLTM2Mi44MzczMzMtNTcuOTU4NEwyNjkuNjUzMzMzIDcyMS44NTE3MzNWNjUxLjI2NGMwLTE1LjA4NjkzMy0xMi4wMTQ5MzMtMjcuMzA2NjY3LTI3LjAzMzYtMjcuMzA2NjY3aDAuMTM2NTM0YTI3LjIzODQgMjcuMjM4NCAwIDAgMC0yNy4yMzg0IDI3LjMwNjY2N3YxMzYuNTMzMzMzYzAgNy4yMzYyNjcgMi44NjcyIDE0LjE5OTQ2NyA3Ljk4NzIgMTkuMzE5NDY3czEyLjA4MzIgNy45ODcyIDE5LjMxOTQ2NiA3Ljk4NzJoMTM2LjQ2NTA2N2MxNS4wODY5MzMgMCAyNy4zMDY2NjctMTIuMjE5NzMzIDI3LjMwNjY2Ny0yNy4zMDY2NjdzLTEyLjIxOTczMy0yNy4zMDY2NjctMjcuMzA2NjY3LTI3LjMwNjY2NkgzMDguNzAxODY3bDE1NS43ODQ1MzMtMTU1LjkyMTA2N2MxMC42NDk2LTEwLjY0OTYgMTAuNTEzMDY3LTI3Ljk4OTMzMy0wLjEzNjUzMy0zOC42Mzg5MzNhMjcuNTA0NjQgMjcuNTA0NjQgMCAwIDAtMzguNzA3MiAwLjA2ODI2NnogbS0xMTcuNDE4NjY3LTI5NC41MDI0aDcwLjUxOTQ2N2MxNS4wODY5MzMgMCAyNy4zMDY2NjctMTIuMjE5NzMzIDI3LjMwNjY2Ni0yNy4zMDY2NjZzLTEyLjIxOTczMy0yNy4zMDY2NjctMjcuMzA2NjY2LTI3LjMwNjY2N0gyNDIuMjc4NGMtNy4yMzYyNjcgMC0xNC4xOTk0NjcgMi44NjcyLTE5LjMxOTQ2NyA3Ljk4NzJzLTcuOTg3MiAxMi4wODMyLTcuOTg3MiAxOS4zMTk0Njd2MTM2LjUzMzMzM2MwIDE1LjA4NjkzMyAxMi4yMTk3MzMgMjcuMzA2NjY3IDI3LjMwNjY2NyAyNy4zMDY2NjdzMjcuMzA2NjY3LTEyLjIxOTczMyAyNy4zMDY2NjctMjcuMzA2NjY3VjMxMC4xMzU0NjdMNDI3LjA3NjI2NyA0NjcuNjI2NjY3YzUuMzI0OCA1LjMyNDggMTIuMzU2MjY3IDcuOTg3MiAxOS4zMTk0NjYgNy45ODcyYTI3LjI5MzAxMyAyNy4yOTMwMTMgMCAwIDAgMTkuMzE5NDY3LTQ2LjYyNjEzNEwzMDguMjI0IDI3MS40OTY1MzN6IiBwLWlkPSI1NzI3IiBmaWxsPSIjNDMzOTM4Ij48L3BhdGg+PC9zdmc+';
      },
      function (e, t) {
        e.exports =
          'data:image/svg+xml;base64,PHN2ZyB0PSIxNTg4MDc0MjEzNTczIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYwMzIiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHBhdGggZD0iTTgwMS42NTU0NjcgNzcxLjA3MmMxMC42NDk2IDEwLjY0OTYgMTAuNTgxMzMzIDI3LjkyMTA2Ny0wLjA2ODI2NyAzOC42Mzg5MzMtNS4zMjQ4IDUuMzI0OC0xMi40MjQ1MzMgNy45ODcyLTE5LjM4NzczMyA3Ljk4NzItNi45NjMyIDAtMTQuMTk5NDY3LTIuNjYyNC0xOS41MjQyNjctNy45ODcybC0xNDguMTM4NjY3LTE0Ny43MjkwNjZ2NzAuNTg3NzMzYzAgMTUuMDg2OTMzLTEyLjIxOTczMyAyNy4zMDY2NjctMjcuMzA2NjY2IDI3LjMwNjY2N3MtMjcuMzA2NjY3LTEyLjIxOTczMy0yNy4zMDY2NjctMjcuMzA2NjY3di0xMzYuNTMzMzMzYzAtNy4yMzYyNjcgMy4yNzY4LTE0LjE5OTQ2NyA4LjM5NjgtMTkuMzE5NDY3czEyLjQ5MjgtNy45ODcyIDE5LjcyOTA2Ny03Ljk4NzJoMTM2LjQ2NTA2NmMxNS4wODY5MzMgMCAyNy4zMDY2NjcgMTIuMjE5NzMzIDI3LjMwNjY2NyAyNy4zMDY2NjdzLTEyLjIxOTczMyAyNy4zMDY2NjctMjcuMzA2NjY3IDI3LjMwNjY2Nkg2NTMuOTI2NGwxNDcuNzI5MDY3IDE0Ny43MjkwNjd6TTU4Ni44ODg1MzMgNDY5LjYwNjRoMTM2LjQ2NTA2N2MxNS4wODY5MzMgMCAyNy4zMDY2NjctMTIuMjE5NzMzIDI3LjMwNjY2Ny0yNy4zMDY2NjdzLTEyLjIxOTczMy0yNy4zMDY2NjctMjcuMzA2NjY3LTI3LjMwNjY2Nkg2NTIuNzY1ODY3bDE1MS44MjUwNjYtMTUxLjYyMDI2N2EyNy4xMDg2OTMgMjcuMTA4NjkzIDAgMCAwIDAtMzguNDM0MTMzIDI3LjEwODY5MyAyNy4xMDg2OTMgMCAwIDAtMzguNDM0MTMzIDAuMDY4MjY2TDYxNC41MzY1MzMgMzc2LjkwMDI2N1YzMDYuMzEyNTMzYzAtMTUuMDg2OTMzLTEyLjQyNDUzMy0yNy45MjEwNjctMjcuNDQzMi0yNy45MjEwNjZoLTAuMDY4MjY2Yy0xNS4wODY5MzMgMC0yNy4zNzQ5MzMgMTIuNDkyOC0yNy4zNzQ5MzQgMjcuNTc5NzMzdjEzNi42Njk4NjdjMCA3LjIzNjI2NyAyLjg2NzIgMTMuOTk0NjY3IDcuOTg3MiAxOS4xMTQ2NjYgNS4wNTE3MzMgNS4xODgyNjcgMTIuMDE0OTMzIDcuODUwNjY3IDE5LjI1MTIgNy44NTA2Njd6TTQzNi42MzM2IDI4MC4yMzQ2NjdjLTE1LjA4NjkzMyAwLTI2Ljg5NzA2NyAxMi4yMTk3MzMtMjYuODk3MDY3IDI3LjMwNjY2NnY3MC41ODc3MzRMMjU4Ljc5ODkzMyAyMjcuNTMyOGMtMTAuNjQ5Ni0xMC42NDk2LTI4LjE5NDEzMy0xMC42NDk2LTM4Ljg0MzczMyAwLTEwLjY0OTYgMTAuNjQ5Ni0xMC43ODYxMzMgMjcuMDMzNi0wLjEzNjUzMyAzNy43NTE0NjdMMzcwLjI3ODQgNDE1LjA2MTMzM0gzMDAuNTA5ODY3djAuODg3NDY3Yy0xMy42NTMzMzMgMC0yNy43MTYyNjcgMTIuNjI5MzMzLTI3LjcxNjI2NyAyNy43MTYyNjcgMCAxNS4wODY5MzMgMTIuNDkyOCAyNy41MTE0NjcgMjcuNTExNDY3IDI3LjUxMTQ2NmwxMzYuNjY5ODY2IDAuMTM2NTM0djAuMDY4MjY2YzYuODI2NjY3IDAgMTMuNzg5ODY3LTIuODY3MiAxOC45MDk4NjctNy45ODcyczcuNzgyNC0xMi4wODMyIDcuNzgyNC0xOS4zMTk0NjZsMC4wNjgyNjctMTM2LjUzMzMzNGMwLjEzNjUzMy0xNS4wODY5MzMtMTIuMDE0OTMzLTI3LjMwNjY2Ny0yNy4xMDE4NjctMjcuMzA2NjY2eiBtLTEuNjM4NCAyODQuOTQ1MDY2SDI5OC41MzAxMzNjLTE1LjA4NjkzMyAwLTI3LjMwNjY2NyAxMi4yMTk3MzMtMjcuMzA2NjY2IDI3LjMwNjY2N3MxMi4yMTk3MzMgMjcuMzA2NjY3IDI3LjMwNjY2NiAyNy4zMDY2NjdoNzAuNTg3NzM0bC0xNDguODg5NiAxNTAuMTE4NGMtMTAuNjQ5NiAxMC42NDk2LTEwLjY0OTYgMjguNTM1NDY3IDAgMzkuMTg1MDY2IDUuMzI0OCA1LjMyNDggMTIuMjg4IDguMjYwMjY3IDE5LjMxOTQ2NiA4LjI2MDI2NyA2Ljk2MzIgMCAxNS4wMTg2NjctMi41MjU4NjcgMjAuMzQzNDY3LTcuODUwNjY3bDE0OS45MTM2LTE0OC44MjEzMzN2NzAuNTg3NzMzYzAgMTUuMDg2OTMzIDExLjE5NTczMyAyNC45ODU2IDI2LjI4MjY2NyAyNC45ODU2aC0wLjU0NjEzNGMxNS4wODY5MzMgMCAyNy4wMzM2LTExLjA1OTIgMjcuMDMzNi0yNi4xNDYxMzNsLTAuMTM2NTMzLTEzNS45MTg5MzNjMC03LjIzNjI2Ny0yLjkzNTQ2Ny0xNS4wODY5MzMtOC4wNTU0NjctMjAuMjA2OTM0LTUuMTItNS4wNTE3MzMtMTIuMTUxNDY3LTguODA2NC0xOS4zODc3MzMtOC44MDY0eiIgcC1pZD0iNjAzMyIgZmlsbD0iIzQzMzkzOCI+PC9wYXRoPjwvc3ZnPg==';
      },
      function (e, t, r) {},
      function (e, t, r) {
        var n;
        function o(e, t, r) {
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
        Object.defineProperty(t, '__esModule', { value: !0 });
        var i = r(7),
          a = r(5),
          s = { showChat: !1, disabledInput: !1, messageLoader: !1 },
          u =
            (o((n = {}), a.TOGGLE_CHAT, function (e) {
              return Object.assign(Object.assign({}, e), { showChat: !e.showChat });
            }),
            o(n, a.TOGGLE_INPUT_DISABLED, function (e) {
              return Object.assign(Object.assign({}, e), {
                disabledInput: !e.disabledInput,
              });
            }),
            o(n, a.TOGGLE_MESSAGE_LOADER, function (e) {
              return Object.assign(Object.assign({}, e), {
                messageLoader: !e.messageLoader,
              });
            }),
            n);
        t.default = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return i.createReducer(u, e, t);
        };
      },
      function (e, t, r) {
        var n;
        function o(e, t, r) {
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
        function i(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return a(e);
            })(e) ||
            (function (e) {
              if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (!e) return;
              if ('string' == typeof e) return a(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === r && e.constructor && (r = e.constructor.name);
              if ('Map' === r || 'Set' === r) return Array.from(r);
              if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return a(e, t);
            })(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function a(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var s = r(7),
          u = r(9),
          c = r(29),
          l = r(5),
          f = { messages: [], badgeCount: 0 },
          d =
            (o((n = {}), l.ADD_NEW_USER_MESSAGE, function (e, t) {
              var r = t.text,
                n = t.id;
              return Object.assign(Object.assign({}, e), {
                messages: [].concat(i(e.messages), [
                  u.createNewMessage(r, c.MESSAGE_SENDER.CLIENT, n),
                ]),
              });
            }),
            o(n, l.ADD_NEW_RESPONSE_MESSAGE, function (e, t) {
              var r = t.text,
                n = t.id;
              return Object.assign(Object.assign({}, e), {
                messages: [].concat(i(e.messages), [
                  u.createNewMessage(r, c.MESSAGE_SENDER.RESPONSE, n),
                ]),
                badgeCount: e.badgeCount + 1,
              });
            }),
            o(n, l.ADD_NEW_LINK_SNIPPET, function (e, t) {
              var r = t.link,
                n = t.id;
              return Object.assign(Object.assign({}, e), {
                messages: [].concat(i(e.messages), [u.createLinkSnippet(r, n)]),
              });
            }),
            o(n, l.ADD_COMPONENT_MESSAGE, function (e, t) {
              var r = t.component,
                n = t.props,
                o = t.showAvatar,
                a = t.id;
              return Object.assign(Object.assign({}, e), {
                messages: [].concat(i(e.messages), [
                  u.createComponentMessage(r, n, o, a),
                ]),
              });
            }),
            o(n, l.DROP_MESSAGES, function (e) {
              return Object.assign(Object.assign({}, e), { messages: [] });
            }),
            o(n, l.HIDE_AVATAR, function (e, t) {
              var r = t.index;
              return (e.messages[r].showAvatar = !1);
            }),
            o(n, l.DELETE_MESSAGES, function (e, t) {
              var r = t.count,
                n = t.id;
              return Object.assign(Object.assign({}, e), {
                messages: n
                  ? e.messages.filter(function (e) {
                      return e.customId !== n;
                    })
                  : e.messages.splice(e.messages.length - 1, r),
              });
            }),
            o(n, l.SET_BADGE_COUNT, function (e, t) {
              var r = t.count;
              return Object.assign(Object.assign({}, e), { badgeCount: r });
            }),
            o(n, l.MARK_ALL_READ, function (e) {
              return Object.assign(Object.assign({}, e), {
                messages: e.messages.map(function (e) {
                  return Object.assign(Object.assign({}, e), { unread: !1 });
                }),
                badgeCount: 0,
              });
            }),
            n);
        t.default = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return s.createReducer(d, e, t);
        };
      },
      function (e, t, r) {
        function n(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return o(e);
            })(e) ||
            (function (e) {
              if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (!e) return;
              if ('string' == typeof e) return o(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === r && e.constructor && (r = e.constructor.name);
              if ('Map' === r || 'Set' === r) return Array.from(r);
              if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return o(e, t);
            })(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function o(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var i = r(7),
          a = r(9),
          s = { quickButtons: [] },
          u = (function (e, t, r) {
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
          })({}, r(5).SET_QUICK_BUTTONS, function (e, t) {
            return {
              quickButtons: n(
                t.buttons.map(function (e) {
                  return a.createQuickButton(e);
                })
              ),
            };
          });
        t.default = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return i.createReducer(u, e, t);
        };
      },
      function (e, t, r) {
        var n;
        function o(e, t, r) {
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
        Object.defineProperty(t, '__esModule', { value: !0 });
        var i = r(7),
          a = r(5),
          s = { src: '', alt: '', width: 0, height: 0, visible: !1 },
          u =
            (o((n = {}), a.OPEN_FULLSCREEN_PREVIEW, function (e, t) {
              var r = t.payload,
                n = r.src,
                o = r.width,
                i = r.height;
              return Object.assign(Object.assign({}, e), {
                src: n,
                width: o,
                height: i,
                visible: !0,
              });
            }),
            o(n, a.CLOSE_FULLSCREEN_PREVIEW, function (e) {
              return Object.assign({}, s);
            }),
            n);
        t.default = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return i.createReducer(u, e, t);
        };
      },
    ]);
  });
});

var Widget = lib.Widget;
var addResponseMessage = lib.addResponseMessage;
var addUserMessage = lib.addUserMessage;
var deleteMessages = lib.deleteMessages;
var setBadgeCount = lib.setBadgeCount;
var toggleWidget = lib.toggleWidget;
export {
  Widget,
  addResponseMessage,
  addUserMessage,
  deleteMessages,
  setBadgeCount,
  toggleWidget,
};
