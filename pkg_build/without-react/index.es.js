import * as Xn from "react";
import Wt, { Fragment as pl, useContext as zl, createContext as Zl, useState as Rn, useEffect as Fo, useRef as yl } from "react";
import Ql, { createPortal as Kl } from "react-dom";
var Sl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $l(b) {
  return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default") ? b.default : b;
}
var ds = { exports: {} }, wi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bl;
function ql() {
  if (bl) return wi;
  bl = 1;
  var b = Wt, f = Symbol.for("react.element"), y = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, c = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(T, v, k) {
    var N, R = {}, W = null, re = null;
    k !== void 0 && (W = "" + k), v.key !== void 0 && (W = "" + v.key), v.ref !== void 0 && (re = v.ref);
    for (N in v) E.call(v, N) && !F.hasOwnProperty(N) && (R[N] = v[N]);
    if (T && T.defaultProps) for (N in v = T.defaultProps, v) R[N] === void 0 && (R[N] = v[N]);
    return { $$typeof: f, type: T, key: W, ref: re, props: R, _owner: c.current };
  }
  return wi.Fragment = y, wi.jsx = _, wi.jsxs = _, wi;
}
var ki = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xl;
function eu() {
  return xl || (xl = 1, process.env.NODE_ENV !== "production" && function() {
    var b = Wt, f = Symbol.for("react.element"), y = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), T = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), ae = Symbol.iterator, ee = "@@iterator";
    function z(w) {
      if (w === null || typeof w != "object")
        return null;
      var J = ae && w[ae] || w[ee];
      return typeof J == "function" ? J : null;
    }
    var D = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(w) {
      {
        for (var J = arguments.length, se = new Array(J > 1 ? J - 1 : 0), he = 1; he < J; he++)
          se[he - 1] = arguments[he];
        U("error", w, se);
      }
    }
    function U(w, J, se) {
      {
        var he = D.ReactDebugCurrentFrame, Re = he.getStackAddendum();
        Re !== "" && (J += "%s", se = se.concat([Re]));
        var je = se.map(function(Ie) {
          return String(Ie);
        });
        je.unshift("Warning: " + J), Function.prototype.apply.call(console[w], console, je);
      }
    }
    var Y = !1, B = !1, O = !1, X = !1, ie = !1, V;
    V = Symbol.for("react.module.reference");
    function Fe(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === E || w === F || ie || w === c || w === k || w === N || X || w === re || Y || B || O || typeof w == "object" && w !== null && (w.$$typeof === W || w.$$typeof === R || w.$$typeof === _ || w.$$typeof === T || w.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === V || w.getModuleId !== void 0));
    }
    function De(w, J, se) {
      var he = w.displayName;
      if (he)
        return he;
      var Re = J.displayName || J.name || "";
      return Re !== "" ? se + "(" + Re + ")" : se;
    }
    function Ne(w) {
      return w.displayName || "Context";
    }
    function oe(w) {
      if (w == null)
        return null;
      if (typeof w.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
        return w.displayName || w.name || null;
      if (typeof w == "string")
        return w;
      switch (w) {
        case E:
          return "Fragment";
        case y:
          return "Portal";
        case F:
          return "Profiler";
        case c:
          return "StrictMode";
        case k:
          return "Suspense";
        case N:
          return "SuspenseList";
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case T:
            var J = w;
            return Ne(J) + ".Consumer";
          case _:
            var se = w;
            return Ne(se._context) + ".Provider";
          case v:
            return De(w, w.render, "ForwardRef");
          case R:
            var he = w.displayName || null;
            return he !== null ? he : oe(w.type) || "Memo";
          case W: {
            var Re = w, je = Re._payload, Ie = Re._init;
            try {
              return oe(Ie(je));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var me = Object.assign, He = 0, we, ht, fe, te, Le, _e, Se;
    function gt() {
    }
    gt.__reactDisabledLog = !0;
    function tt() {
      {
        if (He === 0) {
          we = console.log, ht = console.info, fe = console.warn, te = console.error, Le = console.group, _e = console.groupCollapsed, Se = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: gt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: w,
            log: w,
            warn: w,
            error: w,
            group: w,
            groupCollapsed: w,
            groupEnd: w
          });
        }
        He++;
      }
    }
    function $e() {
      {
        if (He--, He === 0) {
          var w = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: me({}, w, {
              value: we
            }),
            info: me({}, w, {
              value: ht
            }),
            warn: me({}, w, {
              value: fe
            }),
            error: me({}, w, {
              value: te
            }),
            group: me({}, w, {
              value: Le
            }),
            groupCollapsed: me({}, w, {
              value: _e
            }),
            groupEnd: me({}, w, {
              value: Se
            })
          });
        }
        He < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ee = D.ReactCurrentDispatcher, St;
    function bt(w, J, se) {
      {
        if (St === void 0)
          try {
            throw Error();
          } catch (Re) {
            var he = Re.stack.trim().match(/\n( *(at )?)/);
            St = he && he[1] || "";
          }
        return `
` + St + w;
      }
    }
    var We = !1, vt;
    {
      var nt = typeof WeakMap == "function" ? WeakMap : Map;
      vt = new nt();
    }
    function xt(w, J) {
      if (!w || We)
        return "";
      {
        var se = vt.get(w);
        if (se !== void 0)
          return se;
      }
      var he;
      We = !0;
      var Re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var je;
      je = Ee.current, Ee.current = null, tt();
      try {
        if (J) {
          var Ie = function() {
            throw Error();
          };
          if (Object.defineProperty(Ie.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ie, []);
            } catch (lt) {
              he = lt;
            }
            Reflect.construct(w, [], Ie);
          } else {
            try {
              Ie.call();
            } catch (lt) {
              he = lt;
            }
            w.call(Ie.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (lt) {
            he = lt;
          }
          w();
        }
      } catch (lt) {
        if (lt && he && typeof lt.stack == "string") {
          for (var Te = lt.stack.split(`
`), st = he.stack.split(`
`), Ye = Te.length - 1, et = st.length - 1; Ye >= 1 && et >= 0 && Te[Ye] !== st[et]; )
            et--;
          for (; Ye >= 1 && et >= 0; Ye--, et--)
            if (Te[Ye] !== st[et]) {
              if (Ye !== 1 || et !== 1)
                do
                  if (Ye--, et--, et < 0 || Te[Ye] !== st[et]) {
                    var ot = `
` + Te[Ye].replace(" at new ", " at ");
                    return w.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", w.displayName)), typeof w == "function" && vt.set(w, ot), ot;
                  }
                while (Ye >= 1 && et >= 0);
              break;
            }
        }
      } finally {
        We = !1, Ee.current = je, $e(), Error.prepareStackTrace = Re;
      }
      var on = w ? w.displayName || w.name : "", Kt = on ? bt(on) : "";
      return typeof w == "function" && vt.set(w, Kt), Kt;
    }
    function Ze(w, J, se) {
      return xt(w, !1);
    }
    function dt(w) {
      var J = w.prototype;
      return !!(J && J.isReactComponent);
    }
    function At(w, J, se) {
      if (w == null)
        return "";
      if (typeof w == "function")
        return xt(w, dt(w));
      if (typeof w == "string")
        return bt(w);
      switch (w) {
        case k:
          return bt("Suspense");
        case N:
          return bt("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case v:
            return Ze(w.render);
          case R:
            return At(w.type, J, se);
          case W: {
            var he = w, Re = he._payload, je = he._init;
            try {
              return At(je(Re), J, se);
            } catch {
            }
          }
        }
      return "";
    }
    var wt = Object.prototype.hasOwnProperty, de = {}, q = D.ReactDebugCurrentFrame;
    function ce(w) {
      if (w) {
        var J = w._owner, se = At(w.type, w._source, J ? J.type : null);
        q.setExtraStackFrame(se);
      } else
        q.setExtraStackFrame(null);
    }
    function ue(w, J, se, he, Re) {
      {
        var je = Function.call.bind(wt);
        for (var Ie in w)
          if (je(w, Ie)) {
            var Te = void 0;
            try {
              if (typeof w[Ie] != "function") {
                var st = Error((he || "React class") + ": " + se + " type `" + Ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[Ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw st.name = "Invariant Violation", st;
              }
              Te = w[Ie](J, Ie, he, se, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ye) {
              Te = Ye;
            }
            Te && !(Te instanceof Error) && (ce(Re), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", se, Ie, typeof Te), ce(null)), Te instanceof Error && !(Te.message in de) && (de[Te.message] = !0, ce(Re), A("Failed %s type: %s", se, Te.message), ce(null));
          }
      }
    }
    var ye = Array.isArray;
    function ge(w) {
      return ye(w);
    }
    function ze(w) {
      {
        var J = typeof Symbol == "function" && Symbol.toStringTag, se = J && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return se;
      }
    }
    function Ue(w) {
      try {
        return kt(w), !1;
      } catch {
        return !0;
      }
    }
    function kt(w) {
      return "" + w;
    }
    function Dt(w) {
      if (Ue(w))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(w)), kt(w);
    }
    var Lt = D.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pt, $t;
    function Mt(w) {
      if (wt.call(w, "ref")) {
        var J = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function wn(w) {
      if (wt.call(w, "key")) {
        var J = Object.getOwnPropertyDescriptor(w, "key").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function gn(w, J) {
      typeof w.ref == "string" && Lt.current;
    }
    function ne(w, J) {
      {
        var se = function() {
          Pt || (Pt = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        se.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: se,
          configurable: !0
        });
      }
    }
    function Be(w, J) {
      {
        var se = function() {
          $t || ($t = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        se.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: se,
          configurable: !0
        });
      }
    }
    var ke = function(w, J, se, he, Re, je, Ie) {
      var Te = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: w,
        key: J,
        ref: se,
        props: Ie,
        // Record the component responsible for creating this element.
        _owner: je
      };
      return Te._store = {}, Object.defineProperty(Te._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Te, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(Te, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Re
      }), Object.freeze && (Object.freeze(Te.props), Object.freeze(Te)), Te;
    };
    function Pe(w, J, se, he, Re) {
      {
        var je, Ie = {}, Te = null, st = null;
        se !== void 0 && (Dt(se), Te = "" + se), wn(J) && (Dt(J.key), Te = "" + J.key), Mt(J) && (st = J.ref, gn(J, Re));
        for (je in J)
          wt.call(J, je) && !Ke.hasOwnProperty(je) && (Ie[je] = J[je]);
        if (w && w.defaultProps) {
          var Ye = w.defaultProps;
          for (je in Ye)
            Ie[je] === void 0 && (Ie[je] = Ye[je]);
        }
        if (Te || st) {
          var et = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          Te && ne(Ie, et), st && Be(Ie, et);
        }
        return ke(w, Te, st, Re, he, Lt.current, Ie);
      }
    }
    var qe = D.ReactCurrentOwner, Ve = D.ReactDebugCurrentFrame;
    function rt(w) {
      if (w) {
        var J = w._owner, se = At(w.type, w._source, J ? J.type : null);
        Ve.setExtraStackFrame(se);
      } else
        Ve.setExtraStackFrame(null);
    }
    var Tt;
    Tt = !1;
    function Me(w) {
      return typeof w == "object" && w !== null && w.$$typeof === f;
    }
    function Rt() {
      {
        if (qe.current) {
          var w = oe(qe.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function Ct(w) {
      return "";
    }
    var Et = {};
    function Ft(w) {
      {
        var J = Rt();
        if (!J) {
          var se = typeof w == "string" ? w : w.displayName || w.name;
          se && (J = `

Check the top-level render call using <` + se + ">.");
        }
        return J;
      }
    }
    function ft(w, J) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var se = Ft(J);
        if (Et[se])
          return;
        Et[se] = !0;
        var he = "";
        w && w._owner && w._owner !== qe.current && (he = " It was passed a child from " + oe(w._owner.type) + "."), rt(w), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', se, he), rt(null);
      }
    }
    function _t(w, J) {
      {
        if (typeof w != "object")
          return;
        if (ge(w))
          for (var se = 0; se < w.length; se++) {
            var he = w[se];
            Me(he) && ft(he, J);
          }
        else if (Me(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var Re = z(w);
          if (typeof Re == "function" && Re !== w.entries)
            for (var je = Re.call(w), Ie; !(Ie = je.next()).done; )
              Me(Ie.value) && ft(Ie.value, J);
        }
      }
    }
    function mt(w) {
      {
        var J = w.type;
        if (J == null || typeof J == "string")
          return;
        var se;
        if (typeof J == "function")
          se = J.propTypes;
        else if (typeof J == "object" && (J.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        J.$$typeof === R))
          se = J.propTypes;
        else
          return;
        if (se) {
          var he = oe(J);
          ue(se, w.props, "prop", he, w);
        } else if (J.PropTypes !== void 0 && !Tt) {
          Tt = !0;
          var Re = oe(J);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Re || "Unknown");
        }
        typeof J.getDefaultProps == "function" && !J.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rn(w) {
      {
        for (var J = Object.keys(w.props), se = 0; se < J.length; se++) {
          var he = J[se];
          if (he !== "children" && he !== "key") {
            rt(w), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), rt(null);
            break;
          }
        }
        w.ref !== null && (rt(w), A("Invalid attribute `ref` supplied to `React.Fragment`."), rt(null));
      }
    }
    var Vt = {};
    function vn(w, J, se, he, Re, je) {
      {
        var Ie = Fe(w);
        if (!Ie) {
          var Te = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (Te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var st = Ct();
          st ? Te += st : Te += Rt();
          var Ye;
          w === null ? Ye = "null" : ge(w) ? Ye = "array" : w !== void 0 && w.$$typeof === f ? (Ye = "<" + (oe(w.type) || "Unknown") + " />", Te = " Did you accidentally export a JSX literal instead of a component?") : Ye = typeof w, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ye, Te);
        }
        var et = Pe(w, J, se, Re, je);
        if (et == null)
          return et;
        if (Ie) {
          var ot = J.children;
          if (ot !== void 0)
            if (he)
              if (ge(ot)) {
                for (var on = 0; on < ot.length; on++)
                  _t(ot[on], w);
                Object.freeze && Object.freeze(ot);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _t(ot, w);
        }
        if (wt.call(J, "key")) {
          var Kt = oe(w), lt = Object.keys(J).filter(function(en) {
            return en !== "key";
          }), ut = lt.length > 0 ? "{key: someKey, " + lt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Vt[Kt + ut]) {
            var qt = lt.length > 0 ? "{" + lt.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ut, Kt, qt, Kt), Vt[Kt + ut] = !0;
          }
        }
        return w === E ? rn(et) : mt(et), et;
      }
    }
    function Ge(w, J, se) {
      return vn(w, J, se, !0);
    }
    function Gt(w, J, se) {
      return vn(w, J, se, !1);
    }
    var Fn = Gt, _n = Ge;
    ki.Fragment = E, ki.jsx = Fn, ki.jsxs = _n;
  }()), ki;
}
var wl;
function tu() {
  return wl || (wl = 1, process.env.NODE_ENV === "production" ? ds.exports = ql() : ds.exports = eu()), ds.exports;
}
var C = tu(), Gr = {}, To = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kl;
function nu() {
  if (kl) return To;
  kl = 1;
  var b = Wt;
  function f(a) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, g = 1; g < arguments.length; g++) u += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + a + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var y = Object.prototype.hasOwnProperty, E = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, c = {}, F = {};
  function _(a) {
    return y.call(F, a) ? !0 : y.call(c, a) ? !1 : E.test(a) ? F[a] = !0 : (c[a] = !0, !1);
  }
  function T(a, u, g, S, L, P, H) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = S, this.attributeNamespace = L, this.mustUseProperty = g, this.propertyName = a, this.type = u, this.sanitizeURL = P, this.removeEmptyString = H;
  }
  var v = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    v[a] = new T(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var u = a[0];
    v[u] = new T(u, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    v[a] = new T(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    v[a] = new T(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    v[a] = new T(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    v[a] = new T(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    v[a] = new T(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    v[a] = new T(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    v[a] = new T(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var k = /[\-:]([a-z])/g;
  function N(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var u = a.replace(
      k,
      N
    );
    v[u] = new T(u, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var u = a.replace(k, N);
    v[u] = new T(u, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var u = a.replace(k, N);
    v[u] = new T(u, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    v[a] = new T(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), v.xlinkHref = new T("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    v[a] = new T(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var R = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, W = ["Webkit", "ms", "Moz", "O"];
  Object.keys(R).forEach(function(a) {
    W.forEach(function(u) {
      u = u + a.charAt(0).toUpperCase() + a.substring(1), R[u] = R[a];
    });
  });
  var re = /["'&<>]/;
  function ae(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var u = re.exec(a);
    if (u) {
      var g = "", S, L = 0;
      for (S = u.index; S < a.length; S++) {
        switch (a.charCodeAt(S)) {
          case 34:
            u = "&quot;";
            break;
          case 38:
            u = "&amp;";
            break;
          case 39:
            u = "&#x27;";
            break;
          case 60:
            u = "&lt;";
            break;
          case 62:
            u = "&gt;";
            break;
          default:
            continue;
        }
        L !== S && (g += a.substring(L, S)), L = S + 1, g += u;
      }
      a = L !== S ? g + a.substring(L, S) : g;
    }
    return a;
  }
  var ee = /([A-Z])/g, z = /^ms-/, D = Array.isArray;
  function A(a, u) {
    return { insertionMode: a, selectedValue: u };
  }
  function U(a, u, g) {
    switch (u) {
      case "select":
        return A(1, g.value != null ? g.value : g.defaultValue);
      case "svg":
        return A(2, null);
      case "math":
        return A(3, null);
      case "foreignObject":
        return A(1, null);
      case "table":
        return A(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return A(5, null);
      case "colgroup":
        return A(7, null);
      case "tr":
        return A(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? A(1, null) : a;
  }
  var Y = /* @__PURE__ */ new Map();
  function B(a, u, g) {
    if (typeof g != "object") throw Error(f(62));
    u = !0;
    for (var S in g) if (y.call(g, S)) {
      var L = g[S];
      if (L != null && typeof L != "boolean" && L !== "") {
        if (S.indexOf("--") === 0) {
          var P = ae(S);
          L = ae(("" + L).trim());
        } else {
          P = S;
          var H = Y.get(P);
          H !== void 0 || (H = ae(P.replace(ee, "-$1").toLowerCase().replace(z, "-ms-")), Y.set(P, H)), P = H, L = typeof L == "number" ? L === 0 || y.call(R, S) ? "" + L : L + "px" : ae(("" + L).trim());
        }
        u ? (u = !1, a.push(' style="', P, ":", L)) : a.push(";", P, ":", L);
      }
    }
    u || a.push('"');
  }
  function O(a, u, g, S) {
    switch (g) {
      case "style":
        B(a, u, S);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
      if (u = v.hasOwnProperty(g) ? v[g] : null, u !== null) {
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (g = u.attributeName, u.type) {
          case 3:
            S && a.push(" ", g, '=""');
            break;
          case 4:
            S === !0 ? a.push(" ", g, '=""') : S !== !1 && a.push(" ", g, '="', ae(S), '"');
            break;
          case 5:
            isNaN(S) || a.push(" ", g, '="', ae(S), '"');
            break;
          case 6:
            !isNaN(S) && 1 <= S && a.push(" ", g, '="', ae(S), '"');
            break;
          default:
            u.sanitizeURL && (S = "" + S), a.push(" ", g, '="', ae(S), '"');
        }
      } else if (_(g)) {
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = g.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        a.push(" ", g, '="', ae(S), '"');
      }
    }
  }
  function X(a, u, g) {
    if (u != null) {
      if (g != null) throw Error(f(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(f(61));
      u = u.__html, u != null && a.push("" + u);
    }
  }
  function ie(a) {
    var u = "";
    return b.Children.forEach(a, function(g) {
      g != null && (u += g);
    }), u;
  }
  function V(a, u, g, S) {
    a.push(Ne(g));
    var L = g = null, P;
    for (P in u) if (y.call(u, P)) {
      var H = u[P];
      if (H != null) switch (P) {
        case "children":
          g = H;
          break;
        case "dangerouslySetInnerHTML":
          L = H;
          break;
        default:
          O(a, S, P, H);
      }
    }
    return a.push(">"), X(a, L, g), typeof g == "string" ? (a.push(ae(g)), null) : g;
  }
  var Fe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, De = /* @__PURE__ */ new Map();
  function Ne(a) {
    var u = De.get(a);
    if (u === void 0) {
      if (!Fe.test(a)) throw Error(f(65, a));
      u = "<" + a, De.set(a, u);
    }
    return u;
  }
  function oe(a, u, g, S, L) {
    switch (u) {
      case "select":
        a.push(Ne("select"));
        var P = null, H = null;
        for (ve in g) if (y.call(g, ve)) {
          var Q = g[ve];
          if (Q != null) switch (ve) {
            case "children":
              P = Q;
              break;
            case "dangerouslySetInnerHTML":
              H = Q;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              O(a, S, ve, Q);
          }
        }
        return a.push(">"), X(a, H, P), P;
      case "option":
        H = L.selectedValue, a.push(Ne("option"));
        var pe = Q = null, be = null, ve = null;
        for (P in g) if (y.call(g, P)) {
          var Xe = g[P];
          if (Xe != null) switch (P) {
            case "children":
              Q = Xe;
              break;
            case "selected":
              be = Xe;
              break;
            case "dangerouslySetInnerHTML":
              ve = Xe;
              break;
            case "value":
              pe = Xe;
            default:
              O(a, S, P, Xe);
          }
        }
        if (H != null) if (g = pe !== null ? "" + pe : ie(Q), D(H)) {
          for (S = 0; S < H.length; S++)
            if ("" + H[S] === g) {
              a.push(' selected=""');
              break;
            }
        } else "" + H === g && a.push(' selected=""');
        else be && a.push(' selected=""');
        return a.push(">"), X(a, ve, Q), Q;
      case "textarea":
        a.push(Ne("textarea")), ve = H = P = null;
        for (Q in g) if (y.call(g, Q) && (pe = g[Q], pe != null)) switch (Q) {
          case "children":
            ve = pe;
            break;
          case "value":
            P = pe;
            break;
          case "defaultValue":
            H = pe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(f(91));
          default:
            O(
              a,
              S,
              Q,
              pe
            );
        }
        if (P === null && H !== null && (P = H), a.push(">"), ve != null) {
          if (P != null) throw Error(f(92));
          if (D(ve) && 1 < ve.length) throw Error(f(93));
          P = "" + ve;
        }
        return typeof P == "string" && P[0] === `
` && a.push(`
`), P !== null && a.push(ae("" + P)), null;
      case "input":
        a.push(Ne("input")), pe = ve = Q = P = null;
        for (H in g) if (y.call(g, H) && (be = g[H], be != null)) switch (H) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(f(399, "input"));
          case "defaultChecked":
            pe = be;
            break;
          case "defaultValue":
            Q = be;
            break;
          case "checked":
            ve = be;
            break;
          case "value":
            P = be;
            break;
          default:
            O(a, S, H, be);
        }
        return ve !== null ? O(a, S, "checked", ve) : pe !== null && O(a, S, "checked", pe), P !== null ? O(a, S, "value", P) : Q !== null && O(a, S, "value", Q), a.push("/>"), null;
      case "menuitem":
        a.push(Ne("menuitem"));
        for (var Ut in g) if (y.call(g, Ut) && (P = g[Ut], P != null)) switch (Ut) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(f(400));
          default:
            O(a, S, Ut, P);
        }
        return a.push(">"), null;
      case "title":
        a.push(Ne("title")), P = null;
        for (Xe in g) if (y.call(g, Xe) && (H = g[Xe], H != null)) switch (Xe) {
          case "children":
            P = H;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(f(434));
          default:
            O(a, S, Xe, H);
        }
        return a.push(">"), P;
      case "listing":
      case "pre":
        a.push(Ne(u)), H = P = null;
        for (pe in g) if (y.call(g, pe) && (Q = g[pe], Q != null)) switch (pe) {
          case "children":
            P = Q;
            break;
          case "dangerouslySetInnerHTML":
            H = Q;
            break;
          default:
            O(a, S, pe, Q);
        }
        if (a.push(">"), H != null) {
          if (P != null) throw Error(f(60));
          if (typeof H != "object" || !("__html" in H)) throw Error(f(61));
          g = H.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? a.push(`
`, g) : a.push("" + g));
        }
        return typeof P == "string" && P[0] === `
` && a.push(`
`), P;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        a.push(Ne(u));
        for (var Nt in g) if (y.call(g, Nt) && (P = g[Nt], P != null)) switch (Nt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(f(399, u));
          default:
            O(a, S, Nt, P);
        }
        return a.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return V(
          a,
          g,
          u,
          S
        );
      case "html":
        return L.insertionMode === 0 && a.push("<!DOCTYPE html>"), V(a, g, u, S);
      default:
        if (u.indexOf("-") === -1 && typeof g.is != "string") return V(a, g, u, S);
        a.push(Ne(u)), H = P = null;
        for (be in g) if (y.call(g, be) && (Q = g[be], Q != null)) switch (be) {
          case "children":
            P = Q;
            break;
          case "dangerouslySetInnerHTML":
            H = Q;
            break;
          case "style":
            B(a, S, Q);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            _(be) && typeof Q != "function" && typeof Q != "symbol" && a.push(" ", be, '="', ae(Q), '"');
        }
        return a.push(">"), X(a, H, P), P;
    }
  }
  function me(a, u, g) {
    if (a.push('<!--$?--><template id="'), g === null) throw Error(f(395));
    return a.push(g), a.push('"></template>');
  }
  function He(a, u, g, S) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return a.push('<div hidden id="'), a.push(u.segmentPrefix), u = S.toString(16), a.push(u), a.push('">');
      case 2:
        return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(u.segmentPrefix), u = S.toString(16), a.push(u), a.push('">');
      case 3:
        return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(u.segmentPrefix), u = S.toString(16), a.push(u), a.push('">');
      case 4:
        return a.push('<table hidden id="'), a.push(u.segmentPrefix), u = S.toString(16), a.push(u), a.push('">');
      case 5:
        return a.push('<table hidden><tbody id="'), a.push(u.segmentPrefix), u = S.toString(16), a.push(u), a.push('">');
      case 6:
        return a.push('<table hidden><tr id="'), a.push(u.segmentPrefix), u = S.toString(16), a.push(u), a.push('">');
      case 7:
        return a.push('<table hidden><colgroup id="'), a.push(u.segmentPrefix), u = S.toString(16), a.push(u), a.push('">');
      default:
        throw Error(f(397));
    }
  }
  function we(a, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return a.push("</div>");
      case 2:
        return a.push("</svg>");
      case 3:
        return a.push("</math>");
      case 4:
        return a.push("</table>");
      case 5:
        return a.push("</tbody></table>");
      case 6:
        return a.push("</tr></table>");
      case 7:
        return a.push("</colgroup></table>");
      default:
        throw Error(f(397));
    }
  }
  var ht = /[<\u2028\u2029]/g;
  function fe(a) {
    return JSON.stringify(a).replace(ht, function(u) {
      switch (u) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function te(a, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: a };
  }
  function Le(a, u, g, S) {
    return g.generateStaticMarkup ? (a.push(ae(u)), !1) : (u === "" ? a = S : (S && a.push("<!-- -->"), a.push(ae(u)), a = !0), a);
  }
  var _e = Object.assign, Se = Symbol.for("react.element"), gt = Symbol.for("react.portal"), tt = Symbol.for("react.fragment"), $e = Symbol.for("react.strict_mode"), Ee = Symbol.for("react.profiler"), St = Symbol.for("react.provider"), bt = Symbol.for("react.context"), We = Symbol.for("react.forward_ref"), vt = Symbol.for("react.suspense"), nt = Symbol.for("react.suspense_list"), xt = Symbol.for("react.memo"), Ze = Symbol.for("react.lazy"), dt = Symbol.for("react.scope"), At = Symbol.for("react.debug_trace_mode"), wt = Symbol.for("react.legacy_hidden"), de = Symbol.for("react.default_value"), q = Symbol.iterator;
  function ce(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case tt:
        return "Fragment";
      case gt:
        return "Portal";
      case Ee:
        return "Profiler";
      case $e:
        return "StrictMode";
      case vt:
        return "Suspense";
      case nt:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case bt:
        return (a.displayName || "Context") + ".Consumer";
      case St:
        return (a._context.displayName || "Context") + ".Provider";
      case We:
        var u = a.render;
        return a = a.displayName, a || (a = u.displayName || u.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case xt:
        return u = a.displayName || null, u !== null ? u : ce(a.type) || "Memo";
      case Ze:
        u = a._payload, a = a._init;
        try {
          return ce(a(u));
        } catch {
        }
    }
    return null;
  }
  var ue = {};
  function ye(a, u) {
    if (a = a.contextTypes, !a) return ue;
    var g = {}, S;
    for (S in a) g[S] = u[S];
    return g;
  }
  var ge = null;
  function ze(a, u) {
    if (a !== u) {
      a.context._currentValue2 = a.parentValue, a = a.parent;
      var g = u.parent;
      if (a === null) {
        if (g !== null) throw Error(f(401));
      } else {
        if (g === null) throw Error(f(401));
        ze(a, g);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function Ue(a) {
    a.context._currentValue2 = a.parentValue, a = a.parent, a !== null && Ue(a);
  }
  function kt(a) {
    var u = a.parent;
    u !== null && kt(u), a.context._currentValue2 = a.value;
  }
  function Dt(a, u) {
    if (a.context._currentValue2 = a.parentValue, a = a.parent, a === null) throw Error(f(402));
    a.depth === u.depth ? ze(a, u) : Dt(a, u);
  }
  function Lt(a, u) {
    var g = u.parent;
    if (g === null) throw Error(f(402));
    a.depth === g.depth ? ze(a, g) : Lt(a, g), u.context._currentValue2 = u.value;
  }
  function Ke(a) {
    var u = ge;
    u !== a && (u === null ? kt(a) : a === null ? Ue(u) : u.depth === a.depth ? ze(u, a) : u.depth > a.depth ? Dt(u, a) : Lt(u, a), ge = a);
  }
  var Pt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, u) {
    a = a._reactInternals, a.queue !== null && a.queue.push(u);
  }, enqueueReplaceState: function(a, u) {
    a = a._reactInternals, a.replace = !0, a.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function $t(a, u, g, S) {
    var L = a.state !== void 0 ? a.state : null;
    a.updater = Pt, a.props = g, a.state = L;
    var P = { queue: [], replace: !1 };
    a._reactInternals = P;
    var H = u.contextType;
    if (a.context = typeof H == "object" && H !== null ? H._currentValue2 : S, H = u.getDerivedStateFromProps, typeof H == "function" && (H = H(g, L), L = H == null ? L : _e({}, L, H), a.state = L), typeof u.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (u = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), u !== a.state && Pt.enqueueReplaceState(a, a.state, null), P.queue !== null && 0 < P.queue.length) if (u = P.queue, H = P.replace, P.queue = null, P.replace = !1, H && u.length === 1) a.state = u[0];
    else {
      for (P = H ? u[0] : a.state, L = !0, H = H ? 1 : 0; H < u.length; H++) {
        var Q = u[H];
        Q = typeof Q == "function" ? Q.call(a, P, g, S) : Q, Q != null && (L ? (L = !1, P = _e({}, P, Q)) : _e(P, Q));
      }
      a.state = P;
    }
    else P.queue = null;
  }
  var Mt = { id: 1, overflow: "" };
  function wn(a, u, g) {
    var S = a.id;
    a = a.overflow;
    var L = 32 - gn(S) - 1;
    S &= ~(1 << L), g += 1;
    var P = 32 - gn(u) + L;
    if (30 < P) {
      var H = L - L % 5;
      return P = (S & (1 << H) - 1).toString(32), S >>= H, L -= H, { id: 1 << 32 - gn(u) + L | g << L | S, overflow: P + a };
    }
    return { id: 1 << P | g << L | S, overflow: a };
  }
  var gn = Math.clz32 ? Math.clz32 : ke, ne = Math.log, Be = Math.LN2;
  function ke(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (ne(a) / Be | 0) | 0;
  }
  function Pe(a, u) {
    return a === u && (a !== 0 || 1 / a === 1 / u) || a !== a && u !== u;
  }
  var qe = typeof Object.is == "function" ? Object.is : Pe, Ve = null, rt = null, Tt = null, Me = null, Rt = !1, Ct = !1, Et = 0, Ft = null, ft = 0;
  function _t() {
    if (Ve === null) throw Error(f(321));
    return Ve;
  }
  function mt() {
    if (0 < ft) throw Error(f(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function rn() {
    return Me === null ? Tt === null ? (Rt = !1, Tt = Me = mt()) : (Rt = !0, Me = Tt) : Me.next === null ? (Rt = !1, Me = Me.next = mt()) : (Rt = !0, Me = Me.next), Me;
  }
  function Vt() {
    rt = Ve = null, Ct = !1, Tt = null, ft = 0, Me = Ft = null;
  }
  function vn(a, u) {
    return typeof u == "function" ? u(a) : u;
  }
  function Ge(a, u, g) {
    if (Ve = _t(), Me = rn(), Rt) {
      var S = Me.queue;
      if (u = S.dispatch, Ft !== null && (g = Ft.get(S), g !== void 0)) {
        Ft.delete(S), S = Me.memoizedState;
        do
          S = a(S, g.action), g = g.next;
        while (g !== null);
        return Me.memoizedState = S, [S, u];
      }
      return [Me.memoizedState, u];
    }
    return a = a === vn ? typeof u == "function" ? u() : u : g !== void 0 ? g(u) : u, Me.memoizedState = a, a = Me.queue = { last: null, dispatch: null }, a = a.dispatch = Fn.bind(null, Ve, a), [Me.memoizedState, a];
  }
  function Gt(a, u) {
    if (Ve = _t(), Me = rn(), u = u === void 0 ? null : u, Me !== null) {
      var g = Me.memoizedState;
      if (g !== null && u !== null) {
        var S = g[1];
        e: if (S === null) S = !1;
        else {
          for (var L = 0; L < S.length && L < u.length; L++) if (!qe(u[L], S[L])) {
            S = !1;
            break e;
          }
          S = !0;
        }
        if (S) return g[0];
      }
    }
    return a = a(), Me.memoizedState = [a, u], a;
  }
  function Fn(a, u, g) {
    if (25 <= ft) throw Error(f(301));
    if (a === Ve) if (Ct = !0, a = { action: g, next: null }, Ft === null && (Ft = /* @__PURE__ */ new Map()), g = Ft.get(u), g === void 0) Ft.set(u, a);
    else {
      for (u = g; u.next !== null; ) u = u.next;
      u.next = a;
    }
  }
  function _n() {
    throw Error(f(394));
  }
  function w() {
  }
  var J = { readContext: function(a) {
    return a._currentValue2;
  }, useContext: function(a) {
    return _t(), a._currentValue2;
  }, useMemo: Gt, useReducer: Ge, useRef: function(a) {
    Ve = _t(), Me = rn();
    var u = Me.memoizedState;
    return u === null ? (a = { current: a }, Me.memoizedState = a) : u;
  }, useState: function(a) {
    return Ge(vn, a);
  }, useInsertionEffect: w, useLayoutEffect: function() {
  }, useCallback: function(a, u) {
    return Gt(function() {
      return a;
    }, u);
  }, useImperativeHandle: w, useEffect: w, useDebugValue: w, useDeferredValue: function(a) {
    return _t(), a;
  }, useTransition: function() {
    return _t(), [
      !1,
      _n
    ];
  }, useId: function() {
    var a = rt.treeContext, u = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - gn(a) - 1)).toString(32) + u;
    var g = se;
    if (g === null) throw Error(f(404));
    return u = Et++, a = ":" + g.idPrefix + "R" + a, 0 < u && (a += "H" + u.toString(32)), a + ":";
  }, useMutableSource: function(a, u) {
    return _t(), u(a._source);
  }, useSyncExternalStore: function(a, u, g) {
    if (g === void 0) throw Error(f(407));
    return g();
  } }, se = null, he = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Re(a) {
    return console.error(a), null;
  }
  function je() {
  }
  function Ie(a, u, g, S, L, P, H, Q, pe) {
    var be = [], ve = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: S === void 0 ? 12800 : S, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ve, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: L === void 0 ? Re : L, onAllReady: je, onShellReady: H === void 0 ? je : H, onShellError: je, onFatalError: je }, g = st(u, 0, null, g, !1, !1), g.parentFlushed = !0, a = Te(u, a, null, g, ve, ue, null, Mt), be.push(a), u;
  }
  function Te(a, u, g, S, L, P, H, Q) {
    a.allPendingTasks++, g === null ? a.pendingRootTasks++ : g.pendingTasks++;
    var pe = { node: u, ping: function() {
      var be = a.pingedTasks;
      be.push(pe), be.length === 1 && jt(a);
    }, blockedBoundary: g, blockedSegment: S, abortSet: L, legacyContext: P, context: H, treeContext: Q };
    return L.add(pe), pe;
  }
  function st(a, u, g, S, L, P) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: S, boundary: g, lastPushedText: L, textEmbedded: P };
  }
  function Ye(a, u) {
    if (a = a.onError(u), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function et(a, u) {
    var g = a.onShellError;
    g(u), g = a.onFatalError, g(u), a.destination !== null ? (a.status = 2, a.destination.destroy(u)) : (a.status = 1, a.fatalError = u);
  }
  function ot(a, u, g, S, L) {
    for (Ve = {}, rt = u, Et = 0, a = g(S, L); Ct; ) Ct = !1, Et = 0, ft += 1, Me = null, a = g(S, L);
    return Vt(), a;
  }
  function on(a, u, g, S) {
    var L = g.render(), P = S.childContextTypes;
    if (P != null) {
      var H = u.legacyContext;
      if (typeof g.getChildContext != "function") S = H;
      else {
        g = g.getChildContext();
        for (var Q in g) if (!(Q in P)) throw Error(f(108, ce(S) || "Unknown", Q));
        S = _e({}, H, g);
      }
      u.legacyContext = S, ut(a, u, L), u.legacyContext = H;
    } else ut(a, u, L);
  }
  function Kt(a, u) {
    if (a && a.defaultProps) {
      u = _e({}, u), a = a.defaultProps;
      for (var g in a) u[g] === void 0 && (u[g] = a[g]);
      return u;
    }
    return u;
  }
  function lt(a, u, g, S, L) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      L = ye(g, u.legacyContext);
      var P = g.contextType;
      P = new g(S, typeof P == "object" && P !== null ? P._currentValue2 : L), $t(P, g, S, L), on(a, u, P, g);
    } else {
      P = ye(g, u.legacyContext), L = ot(a, u, g, S, P);
      var H = Et !== 0;
      if (typeof L == "object" && L !== null && typeof L.render == "function" && L.$$typeof === void 0) $t(L, g, S, P), on(a, u, L, g);
      else if (H) {
        S = u.treeContext, u.treeContext = wn(S, 1, 0);
        try {
          ut(a, u, L);
        } finally {
          u.treeContext = S;
        }
      } else ut(a, u, L);
    }
    else if (typeof g == "string") {
      switch (L = u.blockedSegment, P = oe(L.chunks, g, S, a.responseState, L.formatContext), L.lastPushedText = !1, H = L.formatContext, L.formatContext = U(H, g, S), en(a, u, P), L.formatContext = H, g) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          L.chunks.push("</", g, ">");
      }
      L.lastPushedText = !1;
    } else {
      switch (g) {
        case wt:
        case At:
        case $e:
        case Ee:
        case tt:
          ut(a, u, S.children);
          return;
        case nt:
          ut(a, u, S.children);
          return;
        case dt:
          throw Error(f(343));
        case vt:
          e: {
            g = u.blockedBoundary, L = u.blockedSegment, P = S.fallback, S = S.children, H = /* @__PURE__ */ new Set();
            var Q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: H, errorDigest: null }, pe = st(a, L.chunks.length, Q, L.formatContext, !1, !1);
            L.children.push(pe), L.lastPushedText = !1;
            var be = st(a, 0, null, L.formatContext, !1, !1);
            be.parentFlushed = !0, u.blockedBoundary = Q, u.blockedSegment = be;
            try {
              if (en(
                a,
                u,
                S
              ), a.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), be.status = 1, an(Q, be), Q.pendingTasks === 0) break e;
            } catch (ve) {
              be.status = 4, Q.forceClientRender = !0, Q.errorDigest = Ye(a, ve);
            } finally {
              u.blockedBoundary = g, u.blockedSegment = L;
            }
            u = Te(a, P, g, pe, H, u.legacyContext, u.context, u.treeContext), a.pingedTasks.push(u);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case We:
          if (S = ot(a, u, g.render, S, L), Et !== 0) {
            g = u.treeContext, u.treeContext = wn(g, 1, 0);
            try {
              ut(a, u, S);
            } finally {
              u.treeContext = g;
            }
          } else ut(a, u, S);
          return;
        case xt:
          g = g.type, S = Kt(g, S), lt(a, u, g, S, L);
          return;
        case St:
          if (L = S.children, g = g._context, S = S.value, P = g._currentValue2, g._currentValue2 = S, H = ge, ge = S = { parent: H, depth: H === null ? 0 : H.depth + 1, context: g, parentValue: P, value: S }, u.context = S, ut(a, u, L), a = ge, a === null) throw Error(f(403));
          S = a.parentValue, a.context._currentValue2 = S === de ? a.context._defaultValue : S, a = ge = a.parent, u.context = a;
          return;
        case bt:
          S = S.children, S = S(g._currentValue2), ut(a, u, S);
          return;
        case Ze:
          L = g._init, g = L(g._payload), S = Kt(g, S), lt(
            a,
            u,
            g,
            S,
            void 0
          );
          return;
      }
      throw Error(f(130, g == null ? g : typeof g, ""));
    }
  }
  function ut(a, u, g) {
    if (u.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Se:
          lt(a, u, g.type, g.props, g.ref);
          return;
        case gt:
          throw Error(f(257));
        case Ze:
          var S = g._init;
          g = S(g._payload), ut(a, u, g);
          return;
      }
      if (D(g)) {
        qt(a, u, g);
        return;
      }
      if (g === null || typeof g != "object" ? S = null : (S = q && g[q] || g["@@iterator"], S = typeof S == "function" ? S : null), S && (S = S.call(g))) {
        if (g = S.next(), !g.done) {
          var L = [];
          do
            L.push(g.value), g = S.next();
          while (!g.done);
          qt(a, u, L);
        }
        return;
      }
      throw a = Object.prototype.toString.call(g), Error(f(31, a === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : a));
    }
    typeof g == "string" ? (S = u.blockedSegment, S.lastPushedText = Le(u.blockedSegment.chunks, g, a.responseState, S.lastPushedText)) : typeof g == "number" && (S = u.blockedSegment, S.lastPushedText = Le(u.blockedSegment.chunks, "" + g, a.responseState, S.lastPushedText));
  }
  function qt(a, u, g) {
    for (var S = g.length, L = 0; L < S; L++) {
      var P = u.treeContext;
      u.treeContext = wn(P, S, L);
      try {
        en(a, u, g[L]);
      } finally {
        u.treeContext = P;
      }
    }
  }
  function en(a, u, g) {
    var S = u.blockedSegment.formatContext, L = u.legacyContext, P = u.context;
    try {
      return ut(a, u, g);
    } catch (pe) {
      if (Vt(), typeof pe == "object" && pe !== null && typeof pe.then == "function") {
        g = pe;
        var H = u.blockedSegment, Q = st(a, H.chunks.length, null, H.formatContext, H.lastPushedText, !0);
        H.children.push(Q), H.lastPushedText = !1, a = Te(a, u.node, u.blockedBoundary, Q, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, g.then(a, a), u.blockedSegment.formatContext = S, u.legacyContext = L, u.context = P, Ke(P);
      } else throw u.blockedSegment.formatContext = S, u.legacyContext = L, u.context = P, Ke(P), pe;
    }
  }
  function Pn(a) {
    var u = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, mn(this, u, a);
  }
  function Jn(a, u, g) {
    var S = a.blockedBoundary;
    a.blockedSegment.status = 3, S === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (S.pendingTasks--, S.forceClientRender || (S.forceClientRender = !0, a = g === void 0 ? Error(f(432)) : g, S.errorDigest = u.onError(a), S.parentFlushed && u.clientRenderedBoundaries.push(S)), S.fallbackAbortableTasks.forEach(function(L) {
      return Jn(L, u, g);
    }), S.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (S = u.onAllReady, S()));
  }
  function an(a, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var g = u.children[0];
      g.id = u.id, g.parentFlushed = !0, g.status === 1 && an(a, g);
    } else a.completedSegments.push(u);
  }
  function mn(a, u, g) {
    if (u === null) {
      if (g.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(f(389));
        a.completedRootSegment = g;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = je, u = a.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && an(u, g), u.parentFlushed && a.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(Pn, a), u.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (an(u, g), u.completedSegments.length === 1 && u.parentFlushed && a.partialBoundaries.push(u)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function jt(a) {
    if (a.status !== 2) {
      var u = ge, g = he.current;
      he.current = J;
      var S = se;
      se = a.responseState;
      try {
        var L = a.pingedTasks, P;
        for (P = 0; P < L.length; P++) {
          var H = L[P], Q = a, pe = H.blockedSegment;
          if (pe.status === 0) {
            Ke(H.context);
            try {
              ut(Q, H, H.node), Q.responseState.generateStaticMarkup || pe.lastPushedText && pe.textEmbedded && pe.chunks.push("<!-- -->"), H.abortSet.delete(H), pe.status = 1, mn(Q, H.blockedBoundary, pe);
            } catch (Ht) {
              if (Vt(), typeof Ht == "object" && Ht !== null && typeof Ht.then == "function") {
                var be = H.ping;
                Ht.then(be, be);
              } else {
                H.abortSet.delete(H), pe.status = 4;
                var ve = H.blockedBoundary, Xe = Ht, Ut = Ye(Q, Xe);
                if (ve === null ? et(Q, Xe) : (ve.pendingTasks--, ve.forceClientRender || (ve.forceClientRender = !0, ve.errorDigest = Ut, ve.parentFlushed && Q.clientRenderedBoundaries.push(ve))), Q.allPendingTasks--, Q.allPendingTasks === 0) {
                  var Nt = Q.onAllReady;
                  Nt();
                }
              }
            } finally {
            }
          }
        }
        L.splice(0, P), a.destination !== null && Bt(a, a.destination);
      } catch (Ht) {
        Ye(a, Ht), et(a, Ht);
      } finally {
        se = S, he.current = g, g === J && Ke(u);
      }
    }
  }
  function In(a, u, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var S = g.id = a.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, a = a.responseState, u.push('<template id="'), u.push(a.placeholderPrefix), a = S.toString(16), u.push(a), u.push('"></template>');
      case 1:
        g.status = 2;
        var L = !0;
        S = g.chunks;
        var P = 0;
        g = g.children;
        for (var H = 0; H < g.length; H++) {
          for (L = g[H]; P < L.index; P++) u.push(S[P]);
          L = Bn(a, u, L);
        }
        for (; P < S.length - 1; P++) u.push(S[P]);
        return P < S.length && (L = u.push(S[P])), L;
      default:
        throw Error(f(390));
    }
  }
  function Bn(a, u, g) {
    var S = g.boundary;
    if (S === null) return In(a, u, g);
    if (S.parentFlushed = !0, S.forceClientRender) return a.responseState.generateStaticMarkup || (S = S.errorDigest, u.push("<!--$!-->"), u.push("<template"), S && (u.push(' data-dgst="'), S = ae(S), u.push(S), u.push('"')), u.push("></template>")), In(a, u, g), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
    if (0 < S.pendingTasks) {
      S.rootSegmentID = a.nextSegmentId++, 0 < S.completedSegments.length && a.partialBoundaries.push(S);
      var L = a.responseState, P = L.nextSuspenseID++;
      return L = L.boundaryPrefix + P.toString(16), S = S.id = L, me(u, a.responseState, S), In(a, u, g), u.push("<!--/$-->");
    }
    if (S.byteSize > a.progressiveChunkSize) return S.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(S), me(u, a.responseState, S.id), In(a, u, g), u.push("<!--/$-->");
    if (a.responseState.generateStaticMarkup || u.push("<!--$-->"), g = S.completedSegments, g.length !== 1) throw Error(f(391));
    return Bn(a, u, g[0]), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
  }
  function Zn(a, u, g) {
    return He(u, a.responseState, g.formatContext, g.id), Bn(a, u, g), we(u, g.formatContext);
  }
  function tn(a, u, g) {
    for (var S = g.completedSegments, L = 0; L < S.length; L++) yn(a, u, g, S[L]);
    if (S.length = 0, a = a.responseState, S = g.id, g = g.rootSegmentID, u.push(a.startInlineScript), a.sentCompleteBoundaryFunction ? u.push('$RC("') : (a.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), S === null) throw Error(f(395));
    return g = g.toString(16), u.push(S), u.push('","'), u.push(a.segmentPrefix), u.push(g), u.push('")<\/script>');
  }
  function yn(a, u, g, S) {
    if (S.status === 2) return !0;
    var L = S.id;
    if (L === -1) {
      if ((S.id = g.rootSegmentID) === -1) throw Error(f(392));
      return Zn(a, u, S);
    }
    return Zn(a, u, S), a = a.responseState, u.push(a.startInlineScript), a.sentCompleteSegmentFunction ? u.push('$RS("') : (a.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(a.segmentPrefix), L = L.toString(16), u.push(L), u.push('","'), u.push(a.placeholderPrefix), u.push(L), u.push('")<\/script>');
  }
  function Bt(a, u) {
    try {
      var g = a.completedRootSegment;
      if (g !== null && a.pendingRootTasks === 0) {
        Bn(a, u, g), a.completedRootSegment = null;
        var S = a.responseState.bootstrapChunks;
        for (g = 0; g < S.length - 1; g++) u.push(S[g]);
        g < S.length && u.push(S[g]);
      }
      var L = a.clientRenderedBoundaries, P;
      for (P = 0; P < L.length; P++) {
        var H = L[P];
        S = u;
        var Q = a.responseState, pe = H.id, be = H.errorDigest, ve = H.errorMessage, Xe = H.errorComponentStack;
        if (S.push(Q.startInlineScript), Q.sentClientRenderFunction ? S.push('$RX("') : (Q.sentClientRenderFunction = !0, S.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), pe === null) throw Error(f(395));
        if (S.push(pe), S.push('"'), be || ve || Xe) {
          S.push(",");
          var Ut = fe(be || "");
          S.push(Ut);
        }
        if (ve || Xe) {
          S.push(",");
          var Nt = fe(ve || "");
          S.push(Nt);
        }
        if (Xe) {
          S.push(",");
          var Ht = fe(Xe);
          S.push(Ht);
        }
        if (!S.push(")<\/script>")) {
          a.destination = null, P++, L.splice(0, P);
          return;
        }
      }
      L.splice(0, P);
      var An = a.completedBoundaries;
      for (P = 0; P < An.length; P++) if (!tn(a, u, An[P])) {
        a.destination = null, P++, An.splice(0, P);
        return;
      }
      An.splice(0, P);
      var Sn = a.partialBoundaries;
      for (P = 0; P < Sn.length; P++) {
        var Kn = Sn[P];
        e: {
          L = a, H = u;
          var Dn = Kn.completedSegments;
          for (Q = 0; Q < Dn.length; Q++) if (!yn(L, H, Kn, Dn[Q])) {
            Q++, Dn.splice(0, Q);
            var Un = !1;
            break e;
          }
          Dn.splice(0, Q), Un = !0;
        }
        if (!Un) {
          a.destination = null, P++, Sn.splice(0, P);
          return;
        }
      }
      Sn.splice(0, P);
      var kn = a.completedBoundaries;
      for (P = 0; P < kn.length; P++) if (!tn(a, u, kn[P])) {
        a.destination = null, P++, kn.splice(0, P);
        return;
      }
      kn.splice(0, P);
    } finally {
      a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function Qn(a, u) {
    try {
      var g = a.abortableTasks;
      g.forEach(function(S) {
        return Jn(S, a, u);
      }), g.clear(), a.destination !== null && Bt(a, a.destination);
    } catch (S) {
      Ye(a, S), et(a, S);
    }
  }
  function It() {
  }
  function Yt(a, u, g, S) {
    var L = !1, P = null, H = "", Q = { push: function(be) {
      return be !== null && (H += be), !0;
    }, destroy: function(be) {
      L = !0, P = be;
    } }, pe = !1;
    if (a = Ie(a, te(g, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, It, void 0, function() {
      pe = !0;
    }), jt(a), Qn(a, S), a.status === 1) a.status = 2, Q.destroy(a.fatalError);
    else if (a.status !== 2 && a.destination === null) {
      a.destination = Q;
      try {
        Bt(a, Q);
      } catch (be) {
        Ye(a, be), et(a, be);
      }
    }
    if (L) throw P;
    if (!pe) throw Error(f(426));
    return H;
  }
  return To.renderToNodeStream = function() {
    throw Error(f(207));
  }, To.renderToStaticMarkup = function(a, u) {
    return Yt(a, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, To.renderToStaticNodeStream = function() {
    throw Error(f(208));
  }, To.renderToString = function(a, u) {
    return Yt(a, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, To.version = "18.3.1", To;
}
var fs = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cl;
function ru() {
  if (Cl) return fs;
  Cl = 1;
  var b = Wt;
  function f(i) {
    for (var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, p = 1; p < arguments.length; p++) l += "&args[]=" + encodeURIComponent(arguments[p]);
    return "Minified React error #" + i + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var y = null, E = 0;
  function c(i, l) {
    if (l.length !== 0) if (512 < l.length) 0 < E && (i.enqueue(new Uint8Array(y.buffer, 0, E)), y = new Uint8Array(512), E = 0), i.enqueue(l);
    else {
      var p = y.length - E;
      p < l.length && (p === 0 ? i.enqueue(y) : (y.set(l.subarray(0, p), E), i.enqueue(y), l = l.subarray(p)), y = new Uint8Array(512), E = 0), y.set(l, E), E += l.length;
    }
  }
  function F(i, l) {
    return c(i, l), !0;
  }
  function _(i) {
    y && 0 < E && (i.enqueue(new Uint8Array(y.buffer, 0, E)), y = null, E = 0);
  }
  var T = new TextEncoder();
  function v(i) {
    return T.encode(i);
  }
  function k(i) {
    return T.encode(i);
  }
  function N(i, l) {
    typeof i.error == "function" ? i.error(l) : i.close();
  }
  var R = Object.prototype.hasOwnProperty, W = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, re = {}, ae = {};
  function ee(i) {
    return R.call(ae, i) ? !0 : R.call(re, i) ? !1 : W.test(i) ? ae[i] = !0 : (re[i] = !0, !1);
  }
  function z(i, l, p, m, j, M, $) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = m, this.attributeNamespace = j, this.mustUseProperty = p, this.propertyName = i, this.type = l, this.sanitizeURL = M, this.removeEmptyString = $;
  }
  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    D[i] = new z(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var l = i[0];
    D[l] = new z(l, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    D[i] = new z(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    D[i] = new z(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    D[i] = new z(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    D[i] = new z(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    D[i] = new z(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    D[i] = new z(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    D[i] = new z(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var A = /[\-:]([a-z])/g;
  function U(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var l = i.replace(
      A,
      U
    );
    D[l] = new z(l, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var l = i.replace(A, U);
    D[l] = new z(l, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var l = i.replace(A, U);
    D[l] = new z(l, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    D[i] = new z(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), D.xlinkHref = new z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    D[i] = new z(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var Y = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, B = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Y).forEach(function(i) {
    B.forEach(function(l) {
      l = l + i.charAt(0).toUpperCase() + i.substring(1), Y[l] = Y[i];
    });
  });
  var O = /["'&<>]/;
  function X(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var l = O.exec(i);
    if (l) {
      var p = "", m, j = 0;
      for (m = l.index; m < i.length; m++) {
        switch (i.charCodeAt(m)) {
          case 34:
            l = "&quot;";
            break;
          case 38:
            l = "&amp;";
            break;
          case 39:
            l = "&#x27;";
            break;
          case 60:
            l = "&lt;";
            break;
          case 62:
            l = "&gt;";
            break;
          default:
            continue;
        }
        j !== m && (p += i.substring(j, m)), j = m + 1, p += l;
      }
      i = j !== m ? p + i.substring(j, m) : p;
    }
    return i;
  }
  var ie = /([A-Z])/g, V = /^ms-/, Fe = Array.isArray, De = k("<script>"), Ne = k("<\/script>"), oe = k('<script src="'), me = k('<script type="module" src="'), He = k('" async=""><\/script>'), we = /(<\/|<)(s)(cript)/gi;
  function ht(i, l, p, m) {
    return "" + l + (p === "s" ? "\\u0073" : "\\u0053") + m;
  }
  function fe(i, l, p, m, j) {
    i = i === void 0 ? "" : i, l = l === void 0 ? De : k('<script nonce="' + X(l) + '">');
    var M = [];
    if (p !== void 0 && M.push(l, v(("" + p).replace(we, ht)), Ne), m !== void 0) for (p = 0; p < m.length; p++) M.push(oe, v(X(m[p])), He);
    if (j !== void 0) for (m = 0; m < j.length; m++) M.push(me, v(X(j[m])), He);
    return { bootstrapChunks: M, startInlineScript: l, placeholderPrefix: k(i + "P:"), segmentPrefix: k(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function te(i, l) {
    return { insertionMode: i, selectedValue: l };
  }
  function Le(i) {
    return te(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function _e(i, l, p) {
    switch (l) {
      case "select":
        return te(1, p.value != null ? p.value : p.defaultValue);
      case "svg":
        return te(2, null);
      case "math":
        return te(3, null);
      case "foreignObject":
        return te(1, null);
      case "table":
        return te(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return te(5, null);
      case "colgroup":
        return te(7, null);
      case "tr":
        return te(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? te(1, null) : i;
  }
  var Se = k("<!-- -->");
  function gt(i, l, p, m) {
    return l === "" ? m : (m && i.push(Se), i.push(v(X(l))), !0);
  }
  var tt = /* @__PURE__ */ new Map(), $e = k(' style="'), Ee = k(":"), St = k(";");
  function bt(i, l, p) {
    if (typeof p != "object") throw Error(f(62));
    l = !0;
    for (var m in p) if (R.call(p, m)) {
      var j = p[m];
      if (j != null && typeof j != "boolean" && j !== "") {
        if (m.indexOf("--") === 0) {
          var M = v(X(m));
          j = v(X(("" + j).trim()));
        } else {
          M = m;
          var $ = tt.get(M);
          $ !== void 0 || ($ = k(X(M.replace(ie, "-$1").toLowerCase().replace(V, "-ms-"))), tt.set(M, $)), M = $, j = typeof j == "number" ? j === 0 || R.call(Y, m) ? v("" + j) : v(j + "px") : v(X(("" + j).trim()));
        }
        l ? (l = !1, i.push($e, M, Ee, j)) : i.push(St, M, Ee, j);
      }
    }
    l || i.push(nt);
  }
  var We = k(" "), vt = k('="'), nt = k('"'), xt = k('=""');
  function Ze(i, l, p, m) {
    switch (p) {
      case "style":
        bt(i, l, m);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
      if (l = D.hasOwnProperty(p) ? D[p] : null, l !== null) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!l.acceptsBooleans) return;
        }
        switch (p = v(l.attributeName), l.type) {
          case 3:
            m && i.push(We, p, xt);
            break;
          case 4:
            m === !0 ? i.push(We, p, xt) : m !== !1 && i.push(We, p, vt, v(X(m)), nt);
            break;
          case 5:
            isNaN(m) || i.push(We, p, vt, v(X(m)), nt);
            break;
          case 6:
            !isNaN(m) && 1 <= m && i.push(We, p, vt, v(X(m)), nt);
            break;
          default:
            l.sanitizeURL && (m = "" + m), i.push(We, p, vt, v(X(m)), nt);
        }
      } else if (ee(p)) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (l = p.toLowerCase().slice(0, 5), l !== "data-" && l !== "aria-") return;
        }
        i.push(We, v(p), vt, v(X(m)), nt);
      }
    }
  }
  var dt = k(">"), At = k("/>");
  function wt(i, l, p) {
    if (l != null) {
      if (p != null) throw Error(f(60));
      if (typeof l != "object" || !("__html" in l)) throw Error(f(61));
      l = l.__html, l != null && i.push(v("" + l));
    }
  }
  function de(i) {
    var l = "";
    return b.Children.forEach(i, function(p) {
      p != null && (l += p);
    }), l;
  }
  var q = k(' selected=""');
  function ce(i, l, p, m) {
    i.push(ze(p));
    var j = p = null, M;
    for (M in l) if (R.call(l, M)) {
      var $ = l[M];
      if ($ != null) switch (M) {
        case "children":
          p = $;
          break;
        case "dangerouslySetInnerHTML":
          j = $;
          break;
        default:
          Ze(i, m, M, $);
      }
    }
    return i.push(dt), wt(i, j, p), typeof p == "string" ? (i.push(v(X(p))), null) : p;
  }
  var ue = k(`
`), ye = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ge = /* @__PURE__ */ new Map();
  function ze(i) {
    var l = ge.get(i);
    if (l === void 0) {
      if (!ye.test(i)) throw Error(f(65, i));
      l = k("<" + i), ge.set(i, l);
    }
    return l;
  }
  var Ue = k("<!DOCTYPE html>");
  function kt(i, l, p, m, j) {
    switch (l) {
      case "select":
        i.push(ze("select"));
        var M = null, $ = null;
        for (Ae in p) if (R.call(p, Ae)) {
          var K = p[Ae];
          if (K != null) switch (Ae) {
            case "children":
              M = K;
              break;
            case "dangerouslySetInnerHTML":
              $ = K;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              Ze(i, m, Ae, K);
          }
        }
        return i.push(dt), wt(i, $, M), M;
      case "option":
        $ = j.selectedValue, i.push(ze("option"));
        var xe = K = null, Oe = null, Ae = null;
        for (M in p) if (R.call(p, M)) {
          var it = p[M];
          if (it != null) switch (M) {
            case "children":
              K = it;
              break;
            case "selected":
              Oe = it;
              break;
            case "dangerouslySetInnerHTML":
              Ae = it;
              break;
            case "value":
              xe = it;
            default:
              Ze(i, m, M, it);
          }
        }
        if ($ != null) if (p = xe !== null ? "" + xe : de(K), Fe($)) {
          for (m = 0; m < $.length; m++)
            if ("" + $[m] === p) {
              i.push(q);
              break;
            }
        } else "" + $ === p && i.push(q);
        else Oe && i.push(q);
        return i.push(dt), wt(i, Ae, K), K;
      case "textarea":
        i.push(ze("textarea")), Ae = $ = M = null;
        for (K in p) if (R.call(p, K) && (xe = p[K], xe != null)) switch (K) {
          case "children":
            Ae = xe;
            break;
          case "value":
            M = xe;
            break;
          case "defaultValue":
            $ = xe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(f(91));
          default:
            Ze(i, m, K, xe);
        }
        if (M === null && $ !== null && (M = $), i.push(dt), Ae != null) {
          if (M != null) throw Error(f(92));
          if (Fe(Ae) && 1 < Ae.length) throw Error(f(93));
          M = "" + Ae;
        }
        return typeof M == "string" && M[0] === `
` && i.push(ue), M !== null && i.push(v(X("" + M))), null;
      case "input":
        i.push(ze("input")), xe = Ae = K = M = null;
        for ($ in p) if (R.call(p, $) && (Oe = p[$], Oe != null)) switch ($) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(f(399, "input"));
          case "defaultChecked":
            xe = Oe;
            break;
          case "defaultValue":
            K = Oe;
            break;
          case "checked":
            Ae = Oe;
            break;
          case "value":
            M = Oe;
            break;
          default:
            Ze(i, m, $, Oe);
        }
        return Ae !== null ? Ze(
          i,
          m,
          "checked",
          Ae
        ) : xe !== null && Ze(i, m, "checked", xe), M !== null ? Ze(i, m, "value", M) : K !== null && Ze(i, m, "value", K), i.push(At), null;
      case "menuitem":
        i.push(ze("menuitem"));
        for (var Jt in p) if (R.call(p, Jt) && (M = p[Jt], M != null)) switch (Jt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(f(400));
          default:
            Ze(i, m, Jt, M);
        }
        return i.push(dt), null;
      case "title":
        i.push(ze("title")), M = null;
        for (it in p) if (R.call(p, it) && ($ = p[it], $ != null)) switch (it) {
          case "children":
            M = $;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(f(434));
          default:
            Ze(i, m, it, $);
        }
        return i.push(dt), M;
      case "listing":
      case "pre":
        i.push(ze(l)), $ = M = null;
        for (xe in p) if (R.call(p, xe) && (K = p[xe], K != null)) switch (xe) {
          case "children":
            M = K;
            break;
          case "dangerouslySetInnerHTML":
            $ = K;
            break;
          default:
            Ze(i, m, xe, K);
        }
        if (i.push(dt), $ != null) {
          if (M != null) throw Error(f(60));
          if (typeof $ != "object" || !("__html" in $)) throw Error(f(61));
          p = $.__html, p != null && (typeof p == "string" && 0 < p.length && p[0] === `
` ? i.push(ue, v(p)) : i.push(v("" + p)));
        }
        return typeof M == "string" && M[0] === `
` && i.push(ue), M;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        i.push(ze(l));
        for (var ln in p) if (R.call(p, ln) && (M = p[ln], M != null)) switch (ln) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(f(399, l));
          default:
            Ze(i, m, ln, M);
        }
        return i.push(At), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return ce(i, p, l, m);
      case "html":
        return j.insertionMode === 0 && i.push(Ue), ce(i, p, l, m);
      default:
        if (l.indexOf("-") === -1 && typeof p.is != "string") return ce(i, p, l, m);
        i.push(ze(l)), $ = M = null;
        for (Oe in p) if (R.call(p, Oe) && (K = p[Oe], K != null)) switch (Oe) {
          case "children":
            M = K;
            break;
          case "dangerouslySetInnerHTML":
            $ = K;
            break;
          case "style":
            bt(i, m, K);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            ee(Oe) && typeof K != "function" && typeof K != "symbol" && i.push(We, v(Oe), vt, v(X(K)), nt);
        }
        return i.push(dt), wt(i, $, M), M;
    }
  }
  var Dt = k("</"), Lt = k(">"), Ke = k('<template id="'), Pt = k('"></template>'), $t = k("<!--$-->"), Mt = k('<!--$?--><template id="'), wn = k('"></template>'), gn = k("<!--$!-->"), ne = k("<!--/$-->"), Be = k("<template"), ke = k('"'), Pe = k(' data-dgst="');
  k(' data-msg="'), k(' data-stck="');
  var qe = k("></template>");
  function Ve(i, l, p) {
    if (c(i, Mt), p === null) throw Error(f(395));
    return c(i, p), F(i, wn);
  }
  var rt = k('<div hidden id="'), Tt = k('">'), Me = k("</div>"), Rt = k('<svg aria-hidden="true" style="display:none" id="'), Ct = k('">'), Et = k("</svg>"), Ft = k('<math aria-hidden="true" style="display:none" id="'), ft = k('">'), _t = k("</math>"), mt = k('<table hidden id="'), rn = k('">'), Vt = k("</table>"), vn = k('<table hidden><tbody id="'), Ge = k('">'), Gt = k("</tbody></table>"), Fn = k('<table hidden><tr id="'), _n = k('">'), w = k("</tr></table>"), J = k('<table hidden><colgroup id="'), se = k('">'), he = k("</colgroup></table>");
  function Re(i, l, p, m) {
    switch (p.insertionMode) {
      case 0:
      case 1:
        return c(i, rt), c(i, l.segmentPrefix), c(i, v(m.toString(16))), F(i, Tt);
      case 2:
        return c(i, Rt), c(i, l.segmentPrefix), c(i, v(m.toString(16))), F(i, Ct);
      case 3:
        return c(i, Ft), c(i, l.segmentPrefix), c(i, v(m.toString(16))), F(i, ft);
      case 4:
        return c(i, mt), c(i, l.segmentPrefix), c(i, v(m.toString(16))), F(i, rn);
      case 5:
        return c(i, vn), c(i, l.segmentPrefix), c(i, v(m.toString(16))), F(i, Ge);
      case 6:
        return c(i, Fn), c(i, l.segmentPrefix), c(i, v(m.toString(16))), F(i, _n);
      case 7:
        return c(
          i,
          J
        ), c(i, l.segmentPrefix), c(i, v(m.toString(16))), F(i, se);
      default:
        throw Error(f(397));
    }
  }
  function je(i, l) {
    switch (l.insertionMode) {
      case 0:
      case 1:
        return F(i, Me);
      case 2:
        return F(i, Et);
      case 3:
        return F(i, _t);
      case 4:
        return F(i, Vt);
      case 5:
        return F(i, Gt);
      case 6:
        return F(i, w);
      case 7:
        return F(i, he);
      default:
        throw Error(f(397));
    }
  }
  var Ie = k('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Te = k('$RS("'), st = k('","'), Ye = k('")<\/script>'), et = k('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), ot = k('$RC("'), on = k('","'), Kt = k('")<\/script>'), lt = k('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), ut = k('$RX("'), qt = k('"'), en = k(")<\/script>"), Pn = k(","), Jn = /[<\u2028\u2029]/g;
  function an(i) {
    return JSON.stringify(i).replace(Jn, function(l) {
      switch (l) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var mn = Object.assign, jt = Symbol.for("react.element"), In = Symbol.for("react.portal"), Bn = Symbol.for("react.fragment"), Zn = Symbol.for("react.strict_mode"), tn = Symbol.for("react.profiler"), yn = Symbol.for("react.provider"), Bt = Symbol.for("react.context"), Qn = Symbol.for("react.forward_ref"), It = Symbol.for("react.suspense"), Yt = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), g = Symbol.for("react.scope"), S = Symbol.for("react.debug_trace_mode"), L = Symbol.for("react.legacy_hidden"), P = Symbol.for("react.default_value"), H = Symbol.iterator;
  function Q(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case Bn:
        return "Fragment";
      case In:
        return "Portal";
      case tn:
        return "Profiler";
      case Zn:
        return "StrictMode";
      case It:
        return "Suspense";
      case Yt:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case Bt:
        return (i.displayName || "Context") + ".Consumer";
      case yn:
        return (i._context.displayName || "Context") + ".Provider";
      case Qn:
        var l = i.render;
        return i = i.displayName, i || (i = l.displayName || l.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case a:
        return l = i.displayName || null, l !== null ? l : Q(i.type) || "Memo";
      case u:
        l = i._payload, i = i._init;
        try {
          return Q(i(l));
        } catch {
        }
    }
    return null;
  }
  var pe = {};
  function be(i, l) {
    if (i = i.contextTypes, !i) return pe;
    var p = {}, m;
    for (m in i) p[m] = l[m];
    return p;
  }
  var ve = null;
  function Xe(i, l) {
    if (i !== l) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var p = l.parent;
      if (i === null) {
        if (p !== null) throw Error(f(401));
      } else {
        if (p === null) throw Error(f(401));
        Xe(i, p);
      }
      l.context._currentValue = l.value;
    }
  }
  function Ut(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && Ut(i);
  }
  function Nt(i) {
    var l = i.parent;
    l !== null && Nt(l), i.context._currentValue = i.value;
  }
  function Ht(i, l) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(f(402));
    i.depth === l.depth ? Xe(i, l) : Ht(i, l);
  }
  function An(i, l) {
    var p = l.parent;
    if (p === null) throw Error(f(402));
    i.depth === p.depth ? Xe(i, p) : An(i, p), l.context._currentValue = l.value;
  }
  function Sn(i) {
    var l = ve;
    l !== i && (l === null ? Nt(i) : i === null ? Ut(l) : l.depth === i.depth ? Xe(l, i) : l.depth > i.depth ? Ht(l, i) : An(l, i), ve = i);
  }
  var Kn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, l) {
    i = i._reactInternals, i.queue !== null && i.queue.push(l);
  }, enqueueReplaceState: function(i, l) {
    i = i._reactInternals, i.replace = !0, i.queue = [l];
  }, enqueueForceUpdate: function() {
  } };
  function Dn(i, l, p, m) {
    var j = i.state !== void 0 ? i.state : null;
    i.updater = Kn, i.props = p, i.state = j;
    var M = { queue: [], replace: !1 };
    i._reactInternals = M;
    var $ = l.contextType;
    if (i.context = typeof $ == "object" && $ !== null ? $._currentValue : m, $ = l.getDerivedStateFromProps, typeof $ == "function" && ($ = $(p, j), j = $ == null ? j : mn({}, j, $), i.state = j), typeof l.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (l = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), l !== i.state && Kn.enqueueReplaceState(i, i.state, null), M.queue !== null && 0 < M.queue.length) if (l = M.queue, $ = M.replace, M.queue = null, M.replace = !1, $ && l.length === 1) i.state = l[0];
    else {
      for (M = $ ? l[0] : i.state, j = !0, $ = $ ? 1 : 0; $ < l.length; $++) {
        var K = l[$];
        K = typeof K == "function" ? K.call(i, M, p, m) : K, K != null && (j ? (j = !1, M = mn({}, M, K)) : mn(M, K));
      }
      i.state = M;
    }
    else M.queue = null;
  }
  var Un = { id: 1, overflow: "" };
  function kn(i, l, p) {
    var m = i.id;
    i = i.overflow;
    var j = 32 - Nn(m) - 1;
    m &= ~(1 << j), p += 1;
    var M = 32 - Nn(l) + j;
    if (30 < M) {
      var $ = j - j % 5;
      return M = (m & (1 << $) - 1).toString(32), m >>= $, j -= $, { id: 1 << 32 - Nn(l) + j | p << j | m, overflow: M + i };
    }
    return { id: 1 << M | p << j | m, overflow: i };
  }
  var Nn = Math.clz32 ? Math.clz32 : xr, Ia = Math.log, Aa = Math.LN2;
  function xr(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Ia(i) / Aa | 0) | 0;
  }
  function bn(i, l) {
    return i === l && (i !== 0 || 1 / i === 1 / l) || i !== i && l !== l;
  }
  var Da = typeof Object.is == "function" ? Object.is : bn, Cn = null, Yr = null, wr = null, at = null, Hn = !1, kr = !1, Wn = 0, Mn = null, Cr = 0;
  function On() {
    if (Cn === null) throw Error(f(321));
    return Cn;
  }
  function sn() {
    if (0 < Cr) throw Error(f(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Xr() {
    return at === null ? wr === null ? (Hn = !1, wr = at = sn()) : (Hn = !0, at = wr) : at.next === null ? (Hn = !1, at = at.next = sn()) : (Hn = !0, at = at.next), at;
  }
  function ir() {
    Yr = Cn = null, kr = !1, wr = null, Cr = 0, at = Mn = null;
  }
  function Po(i, l) {
    return typeof l == "function" ? l(i) : l;
  }
  function Er(i, l, p) {
    if (Cn = On(), at = Xr(), Hn) {
      var m = at.queue;
      if (l = m.dispatch, Mn !== null && (p = Mn.get(m), p !== void 0)) {
        Mn.delete(m), m = at.memoizedState;
        do
          m = i(m, p.action), p = p.next;
        while (p !== null);
        return at.memoizedState = m, [m, l];
      }
      return [at.memoizedState, l];
    }
    return i = i === Po ? typeof l == "function" ? l() : l : p !== void 0 ? p(l) : l, at.memoizedState = i, i = at.queue = { last: null, dispatch: null }, i = i.dispatch = Ma.bind(null, Cn, i), [at.memoizedState, i];
  }
  function Io(i, l) {
    if (Cn = On(), at = Xr(), l = l === void 0 ? null : l, at !== null) {
      var p = at.memoizedState;
      if (p !== null && l !== null) {
        var m = p[1];
        e: if (m === null) m = !1;
        else {
          for (var j = 0; j < m.length && j < l.length; j++) if (!Da(l[j], m[j])) {
            m = !1;
            break e;
          }
          m = !0;
        }
        if (m) return p[0];
      }
    }
    return i = i(), at.memoizedState = [i, l], i;
  }
  function Ma(i, l, p) {
    if (25 <= Cr) throw Error(f(301));
    if (i === Cn) if (kr = !0, i = { action: p, next: null }, Mn === null && (Mn = /* @__PURE__ */ new Map()), p = Mn.get(l), p === void 0) Mn.set(l, i);
    else {
      for (l = p; l.next !== null; ) l = l.next;
      l.next = i;
    }
  }
  function Oa() {
    throw Error(f(394));
  }
  function Tr() {
  }
  var Ao = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return On(), i._currentValue;
  }, useMemo: Io, useReducer: Er, useRef: function(i) {
    Cn = On(), at = Xr();
    var l = at.memoizedState;
    return l === null ? (i = { current: i }, at.memoizedState = i) : l;
  }, useState: function(i) {
    return Er(Po, i);
  }, useInsertionEffect: Tr, useLayoutEffect: function() {
  }, useCallback: function(i, l) {
    return Io(function() {
      return i;
    }, l);
  }, useImperativeHandle: Tr, useEffect: Tr, useDebugValue: Tr, useDeferredValue: function(i) {
    return On(), i;
  }, useTransition: function() {
    return On(), [!1, Oa];
  }, useId: function() {
    var i = Yr.treeContext, l = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - Nn(i) - 1)).toString(32) + l;
    var p = sr;
    if (p === null) throw Error(f(404));
    return l = Wn++, i = ":" + p.idPrefix + "R" + i, 0 < l && (i += "H" + l.toString(32)), i + ":";
  }, useMutableSource: function(i, l) {
    return On(), l(i._source);
  }, useSyncExternalStore: function(i, l, p) {
    if (p === void 0) throw Error(f(407));
    return p();
  } }, sr = null, Jr = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function La(i) {
    return console.error(i), null;
  }
  function qn() {
  }
  function Zr(i, l, p, m, j, M, $, K, xe) {
    var Oe = [], Ae = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: m === void 0 ? 12800 : m, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ae, pingedTasks: Oe, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: j === void 0 ? La : j, onAllReady: M === void 0 ? qn : M, onShellReady: $ === void 0 ? qn : $, onShellError: K === void 0 ? qn : K, onFatalError: xe === void 0 ? qn : xe }, p = er(l, 0, null, p, !1, !1), p.parentFlushed = !0, i = Qr(l, i, null, p, Ae, pe, null, Un), Oe.push(i), l;
  }
  function Qr(i, l, p, m, j, M, $, K) {
    i.allPendingTasks++, p === null ? i.pendingRootTasks++ : p.pendingTasks++;
    var xe = { node: l, ping: function() {
      var Oe = i.pingedTasks;
      Oe.push(xe), Oe.length === 1 && Uo(i);
    }, blockedBoundary: p, blockedSegment: m, abortSet: j, legacyContext: M, context: $, treeContext: K };
    return j.add(xe), xe;
  }
  function er(i, l, p, m, j, M) {
    return { status: 0, id: -1, index: l, parentFlushed: !1, chunks: [], children: [], formatContext: m, boundary: p, lastPushedText: j, textEmbedded: M };
  }
  function lr(i, l) {
    if (i = i.onError(l), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function Rr(i, l) {
    var p = i.onShellError;
    p(l), p = i.onFatalError, p(l), i.destination !== null ? (i.status = 2, N(i.destination, l)) : (i.status = 1, i.fatalError = l);
  }
  function Do(i, l, p, m, j) {
    for (Cn = {}, Yr = l, Wn = 0, i = p(m, j); kr; ) kr = !1, Wn = 0, Cr += 1, at = null, i = p(m, j);
    return ir(), i;
  }
  function Mo(i, l, p, m) {
    var j = p.render(), M = m.childContextTypes;
    if (M != null) {
      var $ = l.legacyContext;
      if (typeof p.getChildContext != "function") m = $;
      else {
        p = p.getChildContext();
        for (var K in p) if (!(K in M)) throw Error(f(108, Q(m) || "Unknown", K));
        m = mn({}, $, p);
      }
      l.legacyContext = m, Xt(i, l, j), l.legacyContext = $;
    } else Xt(i, l, j);
  }
  function Oo(i, l) {
    if (i && i.defaultProps) {
      l = mn({}, l), i = i.defaultProps;
      for (var p in i) l[p] === void 0 && (l[p] = i[p]);
      return l;
    }
    return l;
  }
  function Fr(i, l, p, m, j) {
    if (typeof p == "function") if (p.prototype && p.prototype.isReactComponent) {
      j = be(p, l.legacyContext);
      var M = p.contextType;
      M = new p(m, typeof M == "object" && M !== null ? M._currentValue : j), Dn(M, p, m, j), Mo(i, l, M, p);
    } else {
      M = be(p, l.legacyContext), j = Do(i, l, p, m, M);
      var $ = Wn !== 0;
      if (typeof j == "object" && j !== null && typeof j.render == "function" && j.$$typeof === void 0) Dn(j, p, m, M), Mo(i, l, j, p);
      else if ($) {
        m = l.treeContext, l.treeContext = kn(m, 1, 0);
        try {
          Xt(i, l, j);
        } finally {
          l.treeContext = m;
        }
      } else Xt(i, l, j);
    }
    else if (typeof p == "string") {
      switch (j = l.blockedSegment, M = kt(j.chunks, p, m, i.responseState, j.formatContext), j.lastPushedText = !1, $ = j.formatContext, j.formatContext = _e($, p, m), _r(i, l, M), j.formatContext = $, p) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          j.chunks.push(Dt, v(p), Lt);
      }
      j.lastPushedText = !1;
    } else {
      switch (p) {
        case L:
        case S:
        case Zn:
        case tn:
        case Bn:
          Xt(i, l, m.children);
          return;
        case Yt:
          Xt(i, l, m.children);
          return;
        case g:
          throw Error(f(343));
        case It:
          e: {
            p = l.blockedBoundary, j = l.blockedSegment, M = m.fallback, m = m.children, $ = /* @__PURE__ */ new Set();
            var K = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: $, errorDigest: null }, xe = er(i, j.chunks.length, K, j.formatContext, !1, !1);
            j.children.push(xe), j.lastPushedText = !1;
            var Oe = er(i, 0, null, j.formatContext, !1, !1);
            Oe.parentFlushed = !0, l.blockedBoundary = K, l.blockedSegment = Oe;
            try {
              if (_r(
                i,
                l,
                m
              ), Oe.lastPushedText && Oe.textEmbedded && Oe.chunks.push(Se), Oe.status = 1, Pr(K, Oe), K.pendingTasks === 0) break e;
            } catch (Ae) {
              Oe.status = 4, K.forceClientRender = !0, K.errorDigest = lr(i, Ae);
            } finally {
              l.blockedBoundary = p, l.blockedSegment = j;
            }
            l = Qr(i, M, p, xe, $, l.legacyContext, l.context, l.treeContext), i.pingedTasks.push(l);
          }
          return;
      }
      if (typeof p == "object" && p !== null) switch (p.$$typeof) {
        case Qn:
          if (m = Do(i, l, p.render, m, j), Wn !== 0) {
            p = l.treeContext, l.treeContext = kn(p, 1, 0);
            try {
              Xt(i, l, m);
            } finally {
              l.treeContext = p;
            }
          } else Xt(i, l, m);
          return;
        case a:
          p = p.type, m = Oo(p, m), Fr(i, l, p, m, j);
          return;
        case yn:
          if (j = m.children, p = p._context, m = m.value, M = p._currentValue, p._currentValue = m, $ = ve, ve = m = { parent: $, depth: $ === null ? 0 : $.depth + 1, context: p, parentValue: M, value: m }, l.context = m, Xt(i, l, j), i = ve, i === null) throw Error(f(403));
          m = i.parentValue, i.context._currentValue = m === P ? i.context._defaultValue : m, i = ve = i.parent, l.context = i;
          return;
        case Bt:
          m = m.children, m = m(p._currentValue), Xt(i, l, m);
          return;
        case u:
          j = p._init, p = j(p._payload), m = Oo(p, m), Fr(i, l, p, m, void 0);
          return;
      }
      throw Error(f(
        130,
        p == null ? p : typeof p,
        ""
      ));
    }
  }
  function Xt(i, l, p) {
    if (l.node = p, typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case jt:
          Fr(i, l, p.type, p.props, p.ref);
          return;
        case In:
          throw Error(f(257));
        case u:
          var m = p._init;
          p = m(p._payload), Xt(i, l, p);
          return;
      }
      if (Fe(p)) {
        Lo(i, l, p);
        return;
      }
      if (p === null || typeof p != "object" ? m = null : (m = H && p[H] || p["@@iterator"], m = typeof m == "function" ? m : null), m && (m = m.call(p))) {
        if (p = m.next(), !p.done) {
          var j = [];
          do
            j.push(p.value), p = m.next();
          while (!p.done);
          Lo(i, l, j);
        }
        return;
      }
      throw i = Object.prototype.toString.call(p), Error(f(31, i === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : i));
    }
    typeof p == "string" ? (m = l.blockedSegment, m.lastPushedText = gt(l.blockedSegment.chunks, p, i.responseState, m.lastPushedText)) : typeof p == "number" && (m = l.blockedSegment, m.lastPushedText = gt(l.blockedSegment.chunks, "" + p, i.responseState, m.lastPushedText));
  }
  function Lo(i, l, p) {
    for (var m = p.length, j = 0; j < m; j++) {
      var M = l.treeContext;
      l.treeContext = kn(M, m, j);
      try {
        _r(i, l, p[j]);
      } finally {
        l.treeContext = M;
      }
    }
  }
  function _r(i, l, p) {
    var m = l.blockedSegment.formatContext, j = l.legacyContext, M = l.context;
    try {
      return Xt(i, l, p);
    } catch (xe) {
      if (ir(), typeof xe == "object" && xe !== null && typeof xe.then == "function") {
        p = xe;
        var $ = l.blockedSegment, K = er(i, $.chunks.length, null, $.formatContext, $.lastPushedText, !0);
        $.children.push(K), $.lastPushedText = !1, i = Qr(i, l.node, l.blockedBoundary, K, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, p.then(i, i), l.blockedSegment.formatContext = m, l.legacyContext = j, l.context = M, Sn(M);
      } else throw l.blockedSegment.formatContext = m, l.legacyContext = j, l.context = M, Sn(M), xe;
    }
  }
  function ja(i) {
    var l = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Bo(this, l, i);
  }
  function jo(i, l, p) {
    var m = i.blockedBoundary;
    i.blockedSegment.status = 3, m === null ? (l.allPendingTasks--, l.status !== 2 && (l.status = 2, l.destination !== null && l.destination.close())) : (m.pendingTasks--, m.forceClientRender || (m.forceClientRender = !0, i = p === void 0 ? Error(f(432)) : p, m.errorDigest = l.onError(i), m.parentFlushed && l.clientRenderedBoundaries.push(m)), m.fallbackAbortableTasks.forEach(function(j) {
      return jo(j, l, p);
    }), m.fallbackAbortableTasks.clear(), l.allPendingTasks--, l.allPendingTasks === 0 && (m = l.onAllReady, m()));
  }
  function Pr(i, l) {
    if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null) {
      var p = l.children[0];
      p.id = l.id, p.parentFlushed = !0, p.status === 1 && Pr(i, p);
    } else i.completedSegments.push(l);
  }
  function Bo(i, l, p) {
    if (l === null) {
      if (p.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(f(389));
        i.completedRootSegment = p;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = qn, l = i.onShellReady, l());
    } else l.pendingTasks--, l.forceClientRender || (l.pendingTasks === 0 ? (p.parentFlushed && p.status === 1 && Pr(l, p), l.parentFlushed && i.completedBoundaries.push(l), l.fallbackAbortableTasks.forEach(ja, i), l.fallbackAbortableTasks.clear()) : p.parentFlushed && p.status === 1 && (Pr(l, p), l.completedSegments.length === 1 && l.parentFlushed && i.partialBoundaries.push(l)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Uo(i) {
    if (i.status !== 2) {
      var l = ve, p = Jr.current;
      Jr.current = Ao;
      var m = sr;
      sr = i.responseState;
      try {
        var j = i.pingedTasks, M;
        for (M = 0; M < j.length; M++) {
          var $ = j[M], K = i, xe = $.blockedSegment;
          if (xe.status === 0) {
            Sn($.context);
            try {
              Xt(K, $, $.node), xe.lastPushedText && xe.textEmbedded && xe.chunks.push(Se), $.abortSet.delete($), xe.status = 1, Bo(K, $.blockedBoundary, xe);
            } catch (un) {
              if (ir(), typeof un == "object" && un !== null && typeof un.then == "function") {
                var Oe = $.ping;
                un.then(Oe, Oe);
              } else {
                $.abortSet.delete($), xe.status = 4;
                var Ae = $.blockedBoundary, it = un, Jt = lr(K, it);
                if (Ae === null ? Rr(K, it) : (Ae.pendingTasks--, Ae.forceClientRender || (Ae.forceClientRender = !0, Ae.errorDigest = Jt, Ae.parentFlushed && K.clientRenderedBoundaries.push(Ae))), K.allPendingTasks--, K.allPendingTasks === 0) {
                  var ln = K.onAllReady;
                  ln();
                }
              }
            } finally {
            }
          }
        }
        j.splice(0, M), i.destination !== null && Kr(i, i.destination);
      } catch (un) {
        lr(i, un), Rr(i, un);
      } finally {
        sr = m, Jr.current = p, p === Ao && Sn(l);
      }
    }
  }
  function Ir(i, l, p) {
    switch (p.parentFlushed = !0, p.status) {
      case 0:
        var m = p.id = i.nextSegmentId++;
        return p.lastPushedText = !1, p.textEmbedded = !1, i = i.responseState, c(l, Ke), c(l, i.placeholderPrefix), i = v(m.toString(16)), c(l, i), F(l, Pt);
      case 1:
        p.status = 2;
        var j = !0;
        m = p.chunks;
        var M = 0;
        p = p.children;
        for (var $ = 0; $ < p.length; $++) {
          for (j = p[$]; M < j.index; M++) c(l, m[M]);
          j = Ar(i, l, j);
        }
        for (; M < m.length - 1; M++) c(l, m[M]);
        return M < m.length && (j = F(l, m[M])), j;
      default:
        throw Error(f(390));
    }
  }
  function Ar(i, l, p) {
    var m = p.boundary;
    if (m === null) return Ir(i, l, p);
    if (m.parentFlushed = !0, m.forceClientRender) m = m.errorDigest, F(l, gn), c(l, Be), m && (c(l, Pe), c(l, v(X(m))), c(l, ke)), F(l, qe), Ir(i, l, p);
    else if (0 < m.pendingTasks) {
      m.rootSegmentID = i.nextSegmentId++, 0 < m.completedSegments.length && i.partialBoundaries.push(m);
      var j = i.responseState, M = j.nextSuspenseID++;
      j = k(j.boundaryPrefix + M.toString(16)), m = m.id = j, Ve(l, i.responseState, m), Ir(i, l, p);
    } else if (m.byteSize > i.progressiveChunkSize) m.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(m), Ve(l, i.responseState, m.id), Ir(i, l, p);
    else {
      if (F(l, $t), p = m.completedSegments, p.length !== 1) throw Error(f(391));
      Ar(i, l, p[0]);
    }
    return F(l, ne);
  }
  function No(i, l, p) {
    return Re(l, i.responseState, p.formatContext, p.id), Ar(i, l, p), je(l, p.formatContext);
  }
  function Ho(i, l, p) {
    for (var m = p.completedSegments, j = 0; j < m.length; j++) Wo(i, l, p, m[j]);
    if (m.length = 0, i = i.responseState, m = p.id, p = p.rootSegmentID, c(l, i.startInlineScript), i.sentCompleteBoundaryFunction ? c(l, ot) : (i.sentCompleteBoundaryFunction = !0, c(l, et)), m === null) throw Error(f(395));
    return p = v(p.toString(16)), c(l, m), c(l, on), c(l, i.segmentPrefix), c(l, p), F(l, Kt);
  }
  function Wo(i, l, p, m) {
    if (m.status === 2) return !0;
    var j = m.id;
    if (j === -1) {
      if ((m.id = p.rootSegmentID) === -1) throw Error(f(392));
      return No(i, l, m);
    }
    return No(i, l, m), i = i.responseState, c(l, i.startInlineScript), i.sentCompleteSegmentFunction ? c(l, Te) : (i.sentCompleteSegmentFunction = !0, c(l, Ie)), c(l, i.segmentPrefix), j = v(j.toString(16)), c(l, j), c(l, st), c(l, i.placeholderPrefix), c(l, j), F(l, Ye);
  }
  function Kr(i, l) {
    y = new Uint8Array(512), E = 0;
    try {
      var p = i.completedRootSegment;
      if (p !== null && i.pendingRootTasks === 0) {
        Ar(i, l, p), i.completedRootSegment = null;
        var m = i.responseState.bootstrapChunks;
        for (p = 0; p < m.length - 1; p++) c(l, m[p]);
        p < m.length && F(l, m[p]);
      }
      var j = i.clientRenderedBoundaries, M;
      for (M = 0; M < j.length; M++) {
        var $ = j[M];
        m = l;
        var K = i.responseState, xe = $.id, Oe = $.errorDigest, Ae = $.errorMessage, it = $.errorComponentStack;
        if (c(m, K.startInlineScript), K.sentClientRenderFunction ? c(m, ut) : (K.sentClientRenderFunction = !0, c(
          m,
          lt
        )), xe === null) throw Error(f(395));
        c(m, xe), c(m, qt), (Oe || Ae || it) && (c(m, Pn), c(m, v(an(Oe || "")))), (Ae || it) && (c(m, Pn), c(m, v(an(Ae || "")))), it && (c(m, Pn), c(m, v(an(it)))), F(m, en);
      }
      j.splice(0, M);
      var Jt = i.completedBoundaries;
      for (M = 0; M < Jt.length; M++) Ho(i, l, Jt[M]);
      Jt.splice(0, M), _(l), y = new Uint8Array(512), E = 0;
      var ln = i.partialBoundaries;
      for (M = 0; M < ln.length; M++) {
        var un = ln[M];
        e: {
          j = i, $ = l;
          var Dr = un.completedSegments;
          for (K = 0; K < Dr.length; K++) if (!Wo(
            j,
            $,
            un,
            Dr[K]
          )) {
            K++, Dr.splice(0, K);
            var $o = !1;
            break e;
          }
          Dr.splice(0, K), $o = !0;
        }
        if (!$o) {
          i.destination = null, M++, ln.splice(0, M);
          return;
        }
      }
      ln.splice(0, M);
      var ur = i.completedBoundaries;
      for (M = 0; M < ur.length; M++) Ho(i, l, ur[M]);
      ur.splice(0, M);
    } finally {
      _(l), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && l.close();
    }
  }
  function zo(i, l) {
    try {
      var p = i.abortableTasks;
      p.forEach(function(m) {
        return jo(m, i, l);
      }), p.clear(), i.destination !== null && Kr(i, i.destination);
    } catch (m) {
      lr(i, m), Rr(i, m);
    }
  }
  return fs.renderToReadableStream = function(i, l) {
    return new Promise(function(p, m) {
      var j, M, $ = new Promise(function(Ae, it) {
        M = Ae, j = it;
      }), K = Zr(i, fe(l ? l.identifierPrefix : void 0, l ? l.nonce : void 0, l ? l.bootstrapScriptContent : void 0, l ? l.bootstrapScripts : void 0, l ? l.bootstrapModules : void 0), Le(l ? l.namespaceURI : void 0), l ? l.progressiveChunkSize : void 0, l ? l.onError : void 0, M, function() {
        var Ae = new ReadableStream({ type: "bytes", pull: function(it) {
          if (K.status === 1) K.status = 2, N(it, K.fatalError);
          else if (K.status !== 2 && K.destination === null) {
            K.destination = it;
            try {
              Kr(K, it);
            } catch (Jt) {
              lr(K, Jt), Rr(K, Jt);
            }
          }
        }, cancel: function() {
          zo(K);
        } }, { highWaterMark: 0 });
        Ae.allReady = $, p(Ae);
      }, function(Ae) {
        $.catch(function() {
        }), m(Ae);
      }, j);
      if (l && l.signal) {
        var xe = l.signal, Oe = function() {
          zo(K, xe.reason), xe.removeEventListener("abort", Oe);
        };
        xe.addEventListener("abort", Oe);
      }
      Uo(K);
    });
  }, fs.version = "18.3.1", fs;
}
var Ro = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var El;
function ou() {
  return El || (El = 1, process.env.NODE_ENV !== "production" && function() {
    var b = Wt, f = "18.3.1", y = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        F("warn", e, n);
      }
    }
    function c(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        F("error", e, n);
      }
    }
    function F(e, t, n) {
      {
        var o = y.ReactDebugCurrentFrame, s = o.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var d = n.map(function(h) {
          return String(h);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    function _(e) {
      e();
    }
    function T(e) {
    }
    function v(e, t) {
      k(e, t);
    }
    function k(e, t) {
      return e.push(t);
    }
    function N(e) {
    }
    function R(e) {
      e.push(null);
    }
    function W(e) {
      return e;
    }
    function re(e) {
      return e;
    }
    function ae(e, t) {
      e.destroy(t);
    }
    function ee(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function z(e) {
      try {
        return D(e), !1;
      } catch {
        return !0;
      }
    }
    function D(e) {
      return "" + e;
    }
    function A(e, t) {
      if (z(e))
        return c("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ee(e)), D(e);
    }
    function U(e, t) {
      if (z(e))
        return c("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ee(e)), D(e);
    }
    function Y(e) {
      if (z(e))
        return c("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", ee(e)), D(e);
    }
    var B = Object.prototype.hasOwnProperty, O = 0, X = 1, ie = 2, V = 3, Fe = 4, De = 5, Ne = 6, oe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", me = oe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", He = new RegExp("^[" + oe + "][" + me + "]*$"), we = {}, ht = {};
    function fe(e) {
      return B.call(ht, e) ? !0 : B.call(we, e) ? !1 : He.test(e) ? (ht[e] = !0, !0) : (we[e] = !0, c("Invalid attribute name: `%s`", e), !1);
    }
    function te(e, t, n, o) {
      if (n !== null && n.type === O)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (n !== null)
            return !n.acceptsBooleans;
          var s = e.toLowerCase().slice(0, 5);
          return s !== "data-" && s !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Le(e) {
      return Se.hasOwnProperty(e) ? Se[e] : null;
    }
    function _e(e, t, n, o, s, d, h) {
      this.acceptsBooleans = t === ie || t === V || t === Fe, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = h;
    }
    var Se = {}, gt = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    gt.forEach(function(e) {
      Se[e] = new _e(
        e,
        O,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], n = e[1];
      Se[t] = new _e(
        t,
        X,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Se[e] = new _e(
        e,
        ie,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Se[e] = new _e(
        e,
        ie,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Se[e] = new _e(
        e,
        V,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Se[e] = new _e(
        e,
        V,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Se[e] = new _e(
        e,
        Fe,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Se[e] = new _e(
        e,
        Ne,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Se[e] = new _e(
        e,
        De,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var tt = /[\-\:]([a-z])/g, $e = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(tt, $e);
      Se[t] = new _e(
        t,
        X,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(tt, $e);
      Se[t] = new _e(
        t,
        X,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(tt, $e);
      Se[t] = new _e(
        t,
        X,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Se[e] = new _e(
        e,
        X,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ee = "xlinkHref";
    Se[Ee] = new _e(
      "xlinkHref",
      X,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Se[e] = new _e(
        e,
        X,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var St = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function bt(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var We = ["Webkit", "ms", "Moz", "O"];
    Object.keys(St).forEach(function(e) {
      We.forEach(function(t) {
        St[bt(t, e)] = St[e];
      });
    });
    var vt = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function nt(e, t) {
      vt[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || c("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || c("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function xt(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Ze = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, dt = {}, At = new RegExp("^(aria)-[" + me + "]*$"), wt = new RegExp("^(aria)[A-Z][" + me + "]*$");
    function de(e, t) {
      {
        if (B.call(dt, t) && dt[t])
          return !0;
        if (wt.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = Ze.hasOwnProperty(n) ? n : null;
          if (o == null)
            return c("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), dt[t] = !0, !0;
          if (t !== o)
            return c("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), dt[t] = !0, !0;
        }
        if (At.test(t)) {
          var s = t.toLowerCase(), d = Ze.hasOwnProperty(s) ? s : null;
          if (d == null)
            return dt[t] = !0, !1;
          if (t !== d)
            return c("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), dt[t] = !0, !0;
        }
      }
      return !0;
    }
    function q(e, t) {
      {
        var n = [];
        for (var o in t) {
          var s = de(e, o);
          s || n.push(o);
        }
        var d = n.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        n.length === 1 ? c("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : n.length > 1 && c("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function ce(e, t) {
      xt(e, t) || q(e, t);
    }
    var ue = !1;
    function ye(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ue && (ue = !0, e === "select" && t.multiple ? c("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : c("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ge = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, ze = function() {
    };
    {
      var Ue = {}, kt = /^on./, Dt = /^on[^A-Z]/, Lt = new RegExp("^(aria)-[" + me + "]*$"), Ke = new RegExp("^(aria)[A-Z][" + me + "]*$");
      ze = function(e, t, n, o) {
        if (B.call(Ue, t) && Ue[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return c("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ue[t] = !0, !0;
        if (o != null) {
          var d = o.registrationNameDependencies, h = o.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var x = h.hasOwnProperty(s) ? h[s] : null;
          if (x != null)
            return c("Invalid event handler property `%s`. Did you mean `%s`?", t, x), Ue[t] = !0, !0;
          if (kt.test(t))
            return c("Unknown event handler property `%s`. It will be ignored.", t), Ue[t] = !0, !0;
        } else if (kt.test(t))
          return Dt.test(t) && c("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Ue[t] = !0, !0;
        if (Lt.test(t) || Ke.test(t))
          return !0;
        if (s === "innerhtml")
          return c("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ue[t] = !0, !0;
        if (s === "aria")
          return c("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ue[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return c("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), Ue[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return c("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Ue[t] = !0, !0;
        var I = Le(t), G = I !== null && I.type === O;
        if (ge.hasOwnProperty(s)) {
          var Z = ge[s];
          if (Z !== t)
            return c("Invalid DOM property `%s`. Did you mean `%s`?", t, Z), Ue[t] = !0, !0;
        } else if (!G && t !== s)
          return c("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), Ue[t] = !0, !0;
        return typeof n == "boolean" && te(t, n, I) ? (n ? c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), Ue[t] = !0, !0) : G ? !0 : te(t, n, I) ? (Ue[t] = !0, !1) : ((n === "false" || n === "true") && I !== null && I.type === V && (c("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), Ue[t] = !0), !0);
      };
    }
    var Pt = function(e, t, n) {
      {
        var o = [];
        for (var s in t) {
          var d = ze(e, s, t[s], n);
          d || o.push(s);
        }
        var h = o.map(function(x) {
          return "`" + x + "`";
        }).join(", ");
        o.length === 1 ? c("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e) : o.length > 1 && c("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e);
      }
    };
    function $t(e, t, n) {
      xt(e, t) || Pt(e, t, n);
    }
    var Mt = function() {
    };
    {
      var wn = /^(?:webkit|moz|o)[A-Z]/, gn = /^-ms-/, ne = /-(.)/g, Be = /;\s*$/, ke = {}, Pe = {}, qe = !1, Ve = !1, rt = function(e) {
        return e.replace(ne, function(t, n) {
          return n.toUpperCase();
        });
      }, Tt = function(e) {
        ke.hasOwnProperty(e) && ke[e] || (ke[e] = !0, c(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          rt(e.replace(gn, "ms-"))
        ));
      }, Me = function(e) {
        ke.hasOwnProperty(e) && ke[e] || (ke[e] = !0, c("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Rt = function(e, t) {
        Pe.hasOwnProperty(t) && Pe[t] || (Pe[t] = !0, c(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Be, "")));
      }, Ct = function(e, t) {
        qe || (qe = !0, c("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Et = function(e, t) {
        Ve || (Ve = !0, c("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Mt = function(e, t) {
        e.indexOf("-") > -1 ? Tt(e) : wn.test(e) ? Me(e) : Be.test(t) && Rt(e, t), typeof t == "number" && (isNaN(t) ? Ct(e, t) : isFinite(t) || Et(e, t));
      };
    }
    var Ft = Mt, ft = /["'&<>]/;
    function _t(e) {
      Y(e);
      var t = "" + e, n = ft.exec(t);
      if (!n)
        return t;
      var o, s = "", d, h = 0;
      for (d = n.index; d < t.length; d++) {
        switch (t.charCodeAt(d)) {
          case 34:
            o = "&quot;";
            break;
          case 38:
            o = "&amp;";
            break;
          case 39:
            o = "&#x27;";
            break;
          case 60:
            o = "&lt;";
            break;
          case 62:
            o = "&gt;";
            break;
          default:
            continue;
        }
        h !== d && (s += t.substring(h, d)), h = d + 1, s += o;
      }
      return h !== d ? s + t.substring(h, d) : s;
    }
    function mt(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : _t(e);
    }
    var rn = /([A-Z])/g, Vt = /^ms-/;
    function vn(e) {
      return e.replace(rn, "-$1").toLowerCase().replace(Vt, "-ms-");
    }
    var Ge = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Gt = !1;
    function Fn(e) {
      !Gt && Ge.test(e) && (Gt = !0, c("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var _n = Array.isArray;
    function w(e) {
      return _n(e);
    }
    var J = "<script>";
    function se(e, t, n, o, s) {
      var d = e === void 0 ? "" : e, h = J, x = [];
      return {
        bootstrapChunks: x,
        startInlineScript: h,
        placeholderPrefix: d + "P:",
        segmentPrefix: d + "S:",
        boundaryPrefix: d + "B:",
        idPrefix: d,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var he = 0, Re = 1, je = 2, Ie = 3, Te = 4, st = 5, Ye = 6, et = 7;
    function ot(e, t) {
      return {
        insertionMode: e,
        selectedValue: t
      };
    }
    function on(e, t, n) {
      switch (t) {
        case "select":
          return ot(Re, n.value != null ? n.value : n.defaultValue);
        case "svg":
          return ot(je, null);
        case "math":
          return ot(Ie, null);
        case "foreignObject":
          return ot(Re, null);
        // Table parents are special in that their children can only be created at all if they're
        // wrapped in a table parent. So we need to encode that we're entering this mode.
        case "table":
          return ot(Te, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return ot(st, null);
        case "colgroup":
          return ot(et, null);
        case "tr":
          return ot(Ye, null);
      }
      return e.insertionMode >= Te || e.insertionMode === he ? ot(Re, null) : e;
    }
    var Kt = null;
    function lt(e) {
      var t = e.nextSuspenseID++;
      return e.boundaryPrefix + t.toString(16);
    }
    function ut(e, t, n) {
      var o = e.idPrefix, s = ":" + o + "R" + t;
      return n > 0 && (s += "H" + n.toString(32)), s + ":";
    }
    function qt(e) {
      return mt(e);
    }
    var en = "<!-- -->";
    function Pn(e, t, n, o) {
      return t === "" ? o : (o && e.push(en), e.push(qt(t)), !0);
    }
    function Jn(e, t, n, o) {
      n && o && e.push(en);
    }
    var an = /* @__PURE__ */ new Map();
    function mn(e) {
      var t = an.get(e);
      if (t !== void 0)
        return t;
      var n = mt(vn(e));
      return an.set(e, n), n;
    }
    var jt = ' style="', In = ":", Bn = ";";
    function Zn(e, t, n) {
      if (typeof n != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var o = !0;
      for (var s in n)
        if (B.call(n, s)) {
          var d = n[s];
          if (!(d == null || typeof d == "boolean" || d === "")) {
            var h = void 0, x = void 0, I = s.indexOf("--") === 0;
            I ? (h = mt(s), U(d, s), x = mt(("" + d).trim())) : (Ft(s, d), h = mn(s), typeof d == "number" ? d !== 0 && !B.call(St, s) ? x = d + "px" : x = "" + d : (U(d, s), x = mt(("" + d).trim()))), o ? (o = !1, e.push(jt, h, In, x)) : e.push(Bn, h, In, x);
          }
        }
      o || e.push(Bt);
    }
    var tn = " ", yn = '="', Bt = '"', Qn = '=""';
    function It(e, t, n, o) {
      switch (n) {
        case "style": {
          Zn(e, t, o);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        // These shouldn't be set as attributes on generic HTML elements.
        case "innerHTML":
        // Must use dangerouslySetInnerHTML instead.
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(n.length > 2 && (n[0] === "o" || n[0] === "O") && (n[1] === "n" || n[1] === "N"))
      ) {
        var s = Le(n);
        if (s !== null) {
          switch (typeof o) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return;
            case "boolean":
              if (!s.acceptsBooleans)
                return;
          }
          var d = s.attributeName, h = d;
          switch (s.type) {
            case V:
              o && e.push(tn, h, Qn);
              return;
            case Fe:
              o === !0 ? e.push(tn, h, Qn) : o === !1 || e.push(tn, h, yn, mt(o), Bt);
              return;
            case De:
              isNaN(o) || e.push(tn, h, yn, mt(o), Bt);
              break;
            case Ne:
              !isNaN(o) && o >= 1 && e.push(tn, h, yn, mt(o), Bt);
              break;
            default:
              s.sanitizeURL && (A(o, d), o = "" + o, Fn(o)), e.push(tn, h, yn, mt(o), Bt);
          }
        } else if (fe(n)) {
          switch (typeof o) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return;
            case "boolean": {
              var x = n.toLowerCase().slice(0, 5);
              if (x !== "data-" && x !== "aria-")
                return;
            }
          }
          e.push(tn, n, yn, mt(o), Bt);
        }
      }
    }
    var Yt = ">", a = "/>";
    function u(e, t, n) {
      if (t != null) {
        if (n != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t != "object" || !("__html" in t))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = t.__html;
        o != null && (Y(o), e.push("" + o));
      }
    }
    var g = !1, S = !1, L = !1, P = !1, H = !1, Q = !1, pe = !1;
    function be(e, t) {
      {
        var n = e[t];
        if (n != null) {
          var o = w(n);
          e.multiple && !o ? c("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && o && c("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t);
        }
      }
    }
    function ve(e, t, n) {
      nt("select", t), be(t, "value"), be(t, "defaultValue"), t.value !== void 0 && t.defaultValue !== void 0 && !L && (c("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), L = !0), e.push(bn("select"));
      var o = null, s = null;
      for (var d in t)
        if (B.call(t, d)) {
          var h = t[d];
          if (h == null)
            continue;
          switch (d) {
            case "children":
              o = h;
              break;
            case "dangerouslySetInnerHTML":
              s = h;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              It(e, n, d, h);
              break;
          }
        }
      return e.push(Yt), u(e, s, o), o;
    }
    function Xe(e) {
      var t = "";
      return b.Children.forEach(e, function(n) {
        n != null && (t += n, !H && typeof n != "string" && typeof n != "number" && (H = !0, c("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), t;
    }
    var Ut = ' selected=""';
    function Nt(e, t, n, o) {
      var s = o.selectedValue;
      e.push(bn("option"));
      var d = null, h = null, x = null, I = null;
      for (var G in t)
        if (B.call(t, G)) {
          var Z = t[G];
          if (Z == null)
            continue;
          switch (G) {
            case "children":
              d = Z;
              break;
            case "selected":
              x = Z, pe || (c("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), pe = !0);
              break;
            case "dangerouslySetInnerHTML":
              I = Z;
              break;
            // eslint-disable-next-line-no-fallthrough
            case "value":
              h = Z;
            // We intentionally fallthrough to also set the attribute on the node.
            // eslint-disable-next-line-no-fallthrough
            default:
              It(e, n, G, Z);
              break;
          }
        }
      if (s != null) {
        var le;
        if (h !== null ? (A(h, "value"), le = "" + h) : (I !== null && (Q || (Q = !0, c("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), le = Xe(d)), w(s))
          for (var Ce = 0; Ce < s.length; Ce++) {
            A(s[Ce], "value");
            var Qe = "" + s[Ce];
            if (Qe === le) {
              e.push(Ut);
              break;
            }
          }
        else
          A(s, "select.value"), "" + s === le && e.push(Ut);
      } else x && e.push(Ut);
      return e.push(Yt), u(e, I, d), d;
    }
    function Ht(e, t, n) {
      nt("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !S && (c("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), S = !0), t.value !== void 0 && t.defaultValue !== void 0 && !g && (c("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), g = !0), e.push(bn("input"));
      var o = null, s = null, d = null, h = null;
      for (var x in t)
        if (B.call(t, x)) {
          var I = t[x];
          if (I == null)
            continue;
          switch (x) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            case "defaultChecked":
              h = I;
              break;
            case "defaultValue":
              s = I;
              break;
            case "checked":
              d = I;
              break;
            case "value":
              o = I;
              break;
            default:
              It(e, n, x, I);
              break;
          }
        }
      return d !== null ? It(e, n, "checked", d) : h !== null && It(e, n, "checked", h), o !== null ? It(e, n, "value", o) : s !== null && It(e, n, "value", s), e.push(a), null;
    }
    function An(e, t, n) {
      nt("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !P && (c("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), P = !0), e.push(bn("textarea"));
      var o = null, s = null, d = null;
      for (var h in t)
        if (B.call(t, h)) {
          var x = t[h];
          if (x == null)
            continue;
          switch (h) {
            case "children":
              d = x;
              break;
            case "value":
              o = x;
              break;
            case "defaultValue":
              s = x;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            // eslint-disable-next-line-no-fallthrough
            default:
              It(e, n, h, x);
              break;
          }
        }
      if (o === null && s !== null && (o = s), e.push(Yt), d != null) {
        if (c("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), o != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (w(d)) {
          if (d.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          Y(d[0]), o = "" + d[0];
        }
        Y(d), o = "" + d;
      }
      return typeof o == "string" && o[0] === `
` && e.push(Nn), o !== null && (A(o, "value"), e.push(qt("" + o))), null;
    }
    function Sn(e, t, n, o) {
      e.push(bn(n));
      for (var s in t)
        if (B.call(t, s)) {
          var d = t[s];
          if (d == null)
            continue;
          switch (s) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(n + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              It(e, o, s, d);
              break;
          }
        }
      return e.push(a), null;
    }
    function Kn(e, t, n) {
      e.push(bn("menuitem"));
      for (var o in t)
        if (B.call(t, o)) {
          var s = t[o];
          if (s == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              It(e, n, o, s);
              break;
          }
        }
      return e.push(Yt), null;
    }
    function Dn(e, t, n) {
      e.push(bn("title"));
      var o = null;
      for (var s in t)
        if (B.call(t, s)) {
          var d = t[s];
          if (d == null)
            continue;
          switch (s) {
            case "children":
              o = d;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            // eslint-disable-next-line-no-fallthrough
            default:
              It(e, n, s, d);
              break;
          }
        }
      e.push(Yt);
      {
        var h = Array.isArray(o) && o.length < 2 ? o[0] || null : o;
        Array.isArray(o) && o.length > 1 ? c("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : h != null && h.$$typeof != null ? c("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : h != null && typeof h != "string" && typeof h != "number" && c("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return o;
    }
    function Un(e, t, n, o) {
      e.push(bn(n));
      var s = null, d = null;
      for (var h in t)
        if (B.call(t, h)) {
          var x = t[h];
          if (x == null)
            continue;
          switch (h) {
            case "children":
              s = x;
              break;
            case "dangerouslySetInnerHTML":
              d = x;
              break;
            default:
              It(e, o, h, x);
              break;
          }
        }
      return e.push(Yt), u(e, d, s), typeof s == "string" ? (e.push(qt(s)), null) : s;
    }
    function kn(e, t, n, o) {
      e.push(bn(n));
      var s = null, d = null;
      for (var h in t)
        if (B.call(t, h)) {
          var x = t[h];
          if (x == null)
            continue;
          switch (h) {
            case "children":
              s = x;
              break;
            case "dangerouslySetInnerHTML":
              d = x;
              break;
            case "style":
              Zn(e, o, x);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              fe(h) && typeof x != "function" && typeof x != "symbol" && e.push(tn, h, yn, mt(x), Bt);
              break;
          }
        }
      return e.push(Yt), u(e, d, s), s;
    }
    var Nn = `
`;
    function Ia(e, t, n, o) {
      e.push(bn(n));
      var s = null, d = null;
      for (var h in t)
        if (B.call(t, h)) {
          var x = t[h];
          if (x == null)
            continue;
          switch (h) {
            case "children":
              s = x;
              break;
            case "dangerouslySetInnerHTML":
              d = x;
              break;
            default:
              It(e, o, h, x);
              break;
          }
        }
      if (e.push(Yt), d != null) {
        if (s != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof d != "object" || !("__html" in d))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var I = d.__html;
        I != null && (typeof I == "string" && I.length > 0 && I[0] === `
` ? e.push(Nn, I) : (Y(I), e.push("" + I)));
      }
      return typeof s == "string" && s[0] === `
` && e.push(Nn), s;
    }
    var Aa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, xr = /* @__PURE__ */ new Map();
    function bn(e) {
      var t = xr.get(e);
      if (t === void 0) {
        if (!Aa.test(e))
          throw new Error("Invalid tag: " + e);
        t = "<" + e, xr.set(e, t);
      }
      return t;
    }
    var Da = "<!DOCTYPE html>";
    function Cn(e, t, n, o, s) {
      switch (ce(t, n), ye(t, n), $t(t, n, null), !n.suppressContentEditableWarning && n.contentEditable && n.children != null && c("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), s.insertionMode !== je && s.insertionMode !== Ie && t.indexOf("-") === -1 && typeof n.is != "string" && t.toLowerCase() !== t && c("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
        // Special tags
        case "select":
          return ve(e, n, o);
        case "option":
          return Nt(e, n, o, s);
        case "textarea":
          return An(e, n, o);
        case "input":
          return Ht(e, n, o);
        case "menuitem":
          return Kn(e, n, o);
        case "title":
          return Dn(e, n, o);
        // Newline eating tags
        case "listing":
        case "pre":
          return Ia(e, n, t, o);
        // Omitted close tags
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return Sn(e, n, t, o);
        // These are reserved SVG and MathML elements, that are never custom elements.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Un(e, n, t, o);
        case "html":
          return s.insertionMode === he && e.push(Da), Un(e, n, t, o);
        default:
          return t.indexOf("-") === -1 && typeof n.is != "string" ? Un(e, n, t, o) : kn(e, n, t, o);
      }
    }
    var Yr = "</", wr = ">";
    function at(e, t, n) {
      switch (t) {
        // Omitted close tags
        // TODO: Instead of repeating this switch we could try to pass a flag from above.
        // That would require returning a tuple. Which might be ok if it gets inlined.
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          e.push(Yr, t, wr);
      }
    }
    function Hn(e, t) {
      for (var n = t.bootstrapChunks, o = 0; o < n.length - 1; o++)
        v(e, n[o]);
      return o < n.length ? k(e, n[o]) : !0;
    }
    var kr = '<template id="', Wn = '"></template>';
    function Mn(e, t, n) {
      v(e, kr), v(e, t.placeholderPrefix);
      var o = n.toString(16);
      return v(e, o), k(e, Wn);
    }
    var Cr = "<!--$-->", On = '<!--$?--><template id="', sn = '"></template>', Xr = "<!--$!-->", ir = "<!--/$-->", Po = "<template", Er = '"', Io = ' data-dgst="', Ma = ' data-msg="', Oa = ' data-stck="', Tr = "></template>";
    function Ao(e, t) {
      return k(e, Cr);
    }
    function sr(e, t, n) {
      if (v(e, On), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return v(e, n), k(e, sn);
    }
    function Jr(e, t, n, o, s) {
      var d;
      return d = k(e, Xr), v(e, Po), n && (v(e, Io), v(e, mt(n)), v(e, Er)), o && (v(e, Ma), v(e, mt(o)), v(e, Er)), s && (v(e, Oa), v(e, mt(s)), v(e, Er)), d = k(e, Tr), d;
    }
    function La(e, t) {
      return k(e, ir);
    }
    function qn(e, t) {
      return k(e, ir);
    }
    function Zr(e, t) {
      return k(e, ir);
    }
    var Qr = '<div hidden id="', er = '">', lr = "</div>", Rr = '<svg aria-hidden="true" style="display:none" id="', Do = '">', Mo = "</svg>", Oo = '<math aria-hidden="true" style="display:none" id="', Fr = '">', Xt = "</math>", Lo = '<table hidden id="', _r = '">', ja = "</table>", jo = '<table hidden><tbody id="', Pr = '">', Bo = "</tbody></table>", Uo = '<table hidden><tr id="', Ir = '">', Ar = "</tr></table>", No = '<table hidden><colgroup id="', Ho = '">', Wo = "</colgroup></table>";
    function Kr(e, t, n, o) {
      switch (n.insertionMode) {
        case he:
        case Re:
          return v(e, Qr), v(e, t.segmentPrefix), v(e, o.toString(16)), k(e, er);
        case je:
          return v(e, Rr), v(e, t.segmentPrefix), v(e, o.toString(16)), k(e, Do);
        case Ie:
          return v(e, Oo), v(e, t.segmentPrefix), v(e, o.toString(16)), k(e, Fr);
        case Te:
          return v(e, Lo), v(e, t.segmentPrefix), v(e, o.toString(16)), k(e, _r);
        // TODO: For the rest of these, there will be extra wrapper nodes that never
        // get deleted from the document. We need to delete the table too as part
        // of the injected scripts. They are invisible though so it's not too terrible
        // and it's kind of an edge case to suspend in a table. Totally supported though.
        case st:
          return v(e, jo), v(e, t.segmentPrefix), v(e, o.toString(16)), k(e, Pr);
        case Ye:
          return v(e, Uo), v(e, t.segmentPrefix), v(e, o.toString(16)), k(e, Ir);
        case et:
          return v(e, No), v(e, t.segmentPrefix), v(e, o.toString(16)), k(e, Ho);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function zo(e, t) {
      switch (t.insertionMode) {
        case he:
        case Re:
          return k(e, lr);
        case je:
          return k(e, Mo);
        case Ie:
          return k(e, Xt);
        case Te:
          return k(e, ja);
        case st:
          return k(e, Bo);
        case Ye:
          return k(e, Ar);
        case et:
          return k(e, Wo);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var i = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", l = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', p = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', m = i + ';$RS("', j = '$RS("', M = '","', $ = '")<\/script>';
    function K(e, t, n) {
      v(e, t.startInlineScript), t.sentCompleteSegmentFunction ? v(e, j) : (t.sentCompleteSegmentFunction = !0, v(e, m)), v(e, t.segmentPrefix);
      var o = n.toString(16);
      return v(e, o), v(e, M), v(e, t.placeholderPrefix), v(e, o), k(e, $);
    }
    var xe = l + ';$RC("', Oe = '$RC("', Ae = '","', it = '")<\/script>';
    function Jt(e, t, n, o) {
      if (v(e, t.startInlineScript), t.sentCompleteBoundaryFunction ? v(e, Oe) : (t.sentCompleteBoundaryFunction = !0, v(e, xe)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var s = o.toString(16);
      return v(e, n), v(e, Ae), v(e, t.segmentPrefix), v(e, s), k(e, it);
    }
    var ln = p + ';$RX("', un = '$RX("', Dr = '"', $o = ")<\/script>", ur = ",";
    function hs(e, t, n, o, s, d) {
      if (v(e, t.startInlineScript), t.sentClientRenderFunction ? v(e, un) : (t.sentClientRenderFunction = !0, v(e, ln)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return v(e, n), v(e, Dr), (o || s || d) && (v(e, ur), v(e, Ba(o || ""))), (s || d) && (v(e, ur), v(e, Ba(s || ""))), d && (v(e, ur), v(e, Ba(d))), k(e, $o);
    }
    var gs = /[<\u2028\u2029]/g;
    function Ba(e) {
      var t = JSON.stringify(e);
      return t.replace(gs, function(n) {
        switch (n) {
          // santizing breaking out of strings and script tags
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function vs(e, t) {
      var n = se(t);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: n.bootstrapChunks,
        startInlineScript: n.startInlineScript,
        placeholderPrefix: n.placeholderPrefix,
        segmentPrefix: n.segmentPrefix,
        boundaryPrefix: n.boundaryPrefix,
        idPrefix: n.idPrefix,
        nextSuspenseID: n.nextSuspenseID,
        sentCompleteSegmentFunction: n.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: n.sentCompleteBoundaryFunction,
        sentClientRenderFunction: n.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: e
      };
    }
    function ms() {
      return {
        insertionMode: Re,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Ei(e, t, n, o) {
      return n.generateStaticMarkup ? (e.push(mt(t)), !1) : Pn(e, t, n, o);
    }
    function Ti(e, t, n, o) {
      if (!t.generateStaticMarkup)
        return Jn(e, t, n, o);
    }
    function ys(e, t) {
      return t.generateStaticMarkup ? !0 : Ao(e);
    }
    function Ss(e, t, n, o, s) {
      return t.generateStaticMarkup ? !0 : Jr(e, t, n, o, s);
    }
    function bs(e, t) {
      return t.generateStaticMarkup ? !0 : La(e);
    }
    function xs(e, t) {
      return t.generateStaticMarkup ? !0 : Zr(e);
    }
    var nn = Object.assign, ws = Symbol.for("react.element"), Ri = Symbol.for("react.portal"), Vo = Symbol.for("react.fragment"), cn = Symbol.for("react.strict_mode"), Fi = Symbol.for("react.profiler"), Go = Symbol.for("react.provider"), Yo = Symbol.for("react.context"), Xo = Symbol.for("react.forward_ref"), Jo = Symbol.for("react.suspense"), qr = Symbol.for("react.suspense_list"), eo = Symbol.for("react.memo"), Mr = Symbol.for("react.lazy"), Ua = Symbol.for("react.scope"), Na = Symbol.for("react.debug_trace_mode"), Ha = Symbol.for("react.legacy_hidden"), Zo = Symbol.for("react.default_value"), _i = Symbol.iterator, ks = "@@iterator";
    function Cs(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = _i && e[_i] || e[ks];
      return typeof t == "function" ? t : null;
    }
    function Es(e, t, n) {
      var o = e.displayName;
      if (o)
        return o;
      var s = t.displayName || t.name || "";
      return s !== "" ? n + "(" + s + ")" : n;
    }
    function Wa(e) {
      return e.displayName || "Context";
    }
    function yt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Vo:
          return "Fragment";
        case Ri:
          return "Portal";
        case Fi:
          return "Profiler";
        case cn:
          return "StrictMode";
        case Jo:
          return "Suspense";
        case qr:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Yo:
            var t = e;
            return Wa(t) + ".Consumer";
          case Go:
            var n = e;
            return Wa(n._context) + ".Provider";
          case Xo:
            return Es(e, e.render, "ForwardRef");
          case eo:
            var o = e.displayName || null;
            return o !== null ? o : yt(e.type) || "Memo";
          case Mr: {
            var s = e, d = s._payload, h = s._init;
            try {
              return yt(h(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var to = 0, Pi, za, pt, Or, $a, Va, Ga;
    function Ya() {
    }
    Ya.__reactDisabledLog = !0;
    function Ii() {
      {
        if (to === 0) {
          Pi = console.log, za = console.info, pt = console.warn, Or = console.error, $a = console.group, Va = console.groupCollapsed, Ga = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ya,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        to++;
      }
    }
    function Ai() {
      {
        if (to--, to === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: nn({}, e, {
              value: Pi
            }),
            info: nn({}, e, {
              value: za
            }),
            warn: nn({}, e, {
              value: pt
            }),
            error: nn({}, e, {
              value: Or
            }),
            group: nn({}, e, {
              value: $a
            }),
            groupCollapsed: nn({}, e, {
              value: Va
            }),
            groupEnd: nn({}, e, {
              value: Ga
            })
          });
        }
        to < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Qo = y.ReactCurrentDispatcher, Ko;
    function no(e, t, n) {
      {
        if (Ko === void 0)
          try {
            throw Error();
          } catch (s) {
            var o = s.stack.trim().match(/\n( *(at )?)/);
            Ko = o && o[1] || "";
          }
        return `
` + Ko + e;
      }
    }
    var Xa = !1, Lr;
    {
      var Ja = typeof WeakMap == "function" ? WeakMap : Map;
      Lr = new Ja();
    }
    function cr(e, t) {
      if (!e || Xa)
        return "";
      {
        var n = Lr.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      Xa = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Qo.current, Qo.current = null, Ii();
      try {
        if (t) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (Ot) {
              o = Ot;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (Ot) {
              o = Ot;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ot) {
            o = Ot;
          }
          e();
        }
      } catch (Ot) {
        if (Ot && o && typeof Ot.stack == "string") {
          for (var x = Ot.stack.split(`
`), I = o.stack.split(`
`), G = x.length - 1, Z = I.length - 1; G >= 1 && Z >= 0 && x[G] !== I[Z]; )
            Z--;
          for (; G >= 1 && Z >= 0; G--, Z--)
            if (x[G] !== I[Z]) {
              if (G !== 1 || Z !== 1)
                do
                  if (G--, Z--, Z < 0 || x[G] !== I[Z]) {
                    var le = `
` + x[G].replace(" at new ", " at ");
                    return e.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", e.displayName)), typeof e == "function" && Lr.set(e, le), le;
                  }
                while (G >= 1 && Z >= 0);
              break;
            }
        }
      } finally {
        Xa = !1, Qo.current = d, Ai(), Error.prepareStackTrace = s;
      }
      var Ce = e ? e.displayName || e.name : "", Qe = Ce ? no(Ce) : "";
      return typeof e == "function" && Lr.set(e, Qe), Qe;
    }
    function Za(e, t, n) {
      return cr(e, !0);
    }
    function ro(e, t, n) {
      return cr(e, !1);
    }
    function Ts(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function oo(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return cr(e, Ts(e));
      if (typeof e == "string")
        return no(e);
      switch (e) {
        case Jo:
          return no("Suspense");
        case qr:
          return no("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Xo:
            return ro(e.render);
          case eo:
            return oo(e.type, t, n);
          case Mr: {
            var o = e, s = o._payload, d = o._init;
            try {
              return oo(d(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Di = {}, Qa = y.ReactDebugCurrentFrame;
    function qo(e) {
      if (e) {
        var t = e._owner, n = oo(e.type, e._source, t ? t.type : null);
        Qa.setExtraStackFrame(n);
      } else
        Qa.setExtraStackFrame(null);
    }
    function ea(e, t, n, o, s) {
      {
        var d = Function.call.bind(B);
        for (var h in e)
          if (d(e, h)) {
            var x = void 0;
            try {
              if (typeof e[h] != "function") {
                var I = Error((o || "React class") + ": " + n + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              x = e[h](t, h, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              x = G;
            }
            x && !(x instanceof Error) && (qo(s), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, h, typeof x), qo(null)), x instanceof Error && !(x.message in Di) && (Di[x.message] = !0, qo(s), c("Failed %s type: %s", n, x.message), qo(null));
          }
      }
    }
    var ta;
    ta = {};
    var ao = {};
    Object.freeze(ao);
    function io(e, t) {
      {
        var n = e.contextTypes;
        if (!n)
          return ao;
        var o = {};
        for (var s in n)
          o[s] = t[s];
        {
          var d = yt(e) || "Unknown";
          ea(n, o, "context", d);
        }
        return o;
      }
    }
    function Mi(e, t, n, o) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var s = yt(t) || "Unknown";
            ta[s] || (ta[s] = !0, c("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return n;
        }
        var d = e.getChildContext();
        for (var h in d)
          if (!(h in o))
            throw new Error((yt(t) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        {
          var x = yt(t) || "Unknown";
          ea(o, d, "child context", x);
        }
        return nn({}, n, d);
      }
    }
    var dr;
    dr = {};
    var na = null, tr = null;
    function Ka(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function fr(e) {
      e.context._currentValue2 = e.value;
    }
    function ra(e, t) {
      if (e !== t) {
        Ka(e);
        var n = e.parent, o = t.parent;
        if (n === null) {
          if (o !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (o === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          ra(n, o);
        }
        fr(t);
      }
    }
    function nr(e) {
      Ka(e);
      var t = e.parent;
      t !== null && nr(t);
    }
    function oa(e) {
      var t = e.parent;
      t !== null && oa(t), fr(e);
    }
    function aa(e, t) {
      Ka(e);
      var n = e.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      n.depth === t.depth ? ra(n, t) : aa(n, t);
    }
    function so(e, t) {
      var n = t.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === n.depth ? ra(e, n) : so(e, n), fr(t);
    }
    function lo(e) {
      var t = tr, n = e;
      t !== n && (t === null ? oa(n) : n === null ? nr(t) : t.depth === n.depth ? ra(t, n) : t.depth > n.depth ? aa(t, n) : so(t, n), tr = n);
    }
    function Oi(e, t) {
      var n;
      n = e._currentValue2, e._currentValue2 = t, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== dr && c("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = dr;
      var o = tr, s = {
        parent: o,
        depth: o === null ? 0 : o.depth + 1,
        context: e,
        parentValue: n,
        value: t
      };
      return tr = s, s;
    }
    function Li(e) {
      var t = tr;
      if (t === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      t.context !== e && c("The parent context is not the expected context. This is probably a bug in React.");
      {
        var n = t.parentValue;
        n === Zo ? t.context._currentValue2 = t.context._defaultValue : t.context._currentValue2 = n, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== dr && c("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = dr;
      }
      return tr = t.parent;
    }
    function ji() {
      return tr;
    }
    function rr(e) {
      var t = e._currentValue2;
      return t;
    }
    function qa(e) {
      return e._reactInternals;
    }
    function Rs(e, t) {
      e._reactInternals = t;
    }
    var Bi = {}, jr = {}, uo, ei, ia, sa, la, Br, co, fo, ua;
    {
      uo = /* @__PURE__ */ new Set(), ei = /* @__PURE__ */ new Set(), ia = /* @__PURE__ */ new Set(), co = /* @__PURE__ */ new Set(), sa = /* @__PURE__ */ new Set(), fo = /* @__PURE__ */ new Set(), ua = /* @__PURE__ */ new Set();
      var po = /* @__PURE__ */ new Set();
      Br = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var n = t + "_" + e;
          po.has(n) || (po.add(n), c("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, la = function(e, t) {
        if (t === void 0) {
          var n = yt(e) || "Component";
          sa.has(n) || (sa.add(n), c("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
        }
      };
    }
    function ca(e, t) {
      {
        var n = e.constructor, o = n && yt(n) || "ReactClass", s = o + "." + t;
        if (Bi[s])
          return;
        c(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), Bi[s] = !0;
      }
    }
    var da = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, t, n) {
        var o = qa(e);
        o.queue === null ? ca(e, "setState") : (o.queue.push(t), n != null && Br(n, "setState"));
      },
      enqueueReplaceState: function(e, t, n) {
        var o = qa(e);
        o.replace = !0, o.queue = [t], n != null && Br(n, "setState");
      },
      enqueueForceUpdate: function(e, t) {
        var n = qa(e);
        n.queue === null ? ca(e, "forceUpdate") : t != null && Br(t, "setState");
      }
    };
    function ti(e, t, n, o, s) {
      var d = n(s, o);
      la(t, d);
      var h = d == null ? o : nn({}, o, d);
      return h;
    }
    function Ui(e, t, n) {
      var o = ao, s = e.contextType;
      if ("contextType" in e) {
        var d = (
          // Allow null for conditional declaration
          s === null || s !== void 0 && s.$$typeof === Yo && s._context === void 0
        );
        if (!d && !ua.has(e)) {
          ua.add(e);
          var h = "";
          s === void 0 ? h = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? h = " However, it is set to a " + typeof s + "." : s.$$typeof === Go ? h = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? h = " Did you accidentally pass the Context.Consumer instead?" : h = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", c("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", yt(e) || "Component", h);
        }
      }
      typeof s == "object" && s !== null ? o = rr(s) : o = n;
      var x = new e(t, o);
      {
        if (typeof e.getDerivedStateFromProps == "function" && (x.state === null || x.state === void 0)) {
          var I = yt(e) || "Component";
          uo.has(I) || (uo.add(I), c("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", I, x.state === null ? "null" : "undefined", I));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof x.getSnapshotBeforeUpdate == "function") {
          var G = null, Z = null, le = null;
          if (typeof x.componentWillMount == "function" && x.componentWillMount.__suppressDeprecationWarning !== !0 ? G = "componentWillMount" : typeof x.UNSAFE_componentWillMount == "function" && (G = "UNSAFE_componentWillMount"), typeof x.componentWillReceiveProps == "function" && x.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Z = "componentWillReceiveProps" : typeof x.UNSAFE_componentWillReceiveProps == "function" && (Z = "UNSAFE_componentWillReceiveProps"), typeof x.componentWillUpdate == "function" && x.componentWillUpdate.__suppressDeprecationWarning !== !0 ? le = "componentWillUpdate" : typeof x.UNSAFE_componentWillUpdate == "function" && (le = "UNSAFE_componentWillUpdate"), G !== null || Z !== null || le !== null) {
            var Ce = yt(e) || "Component", Qe = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            ia.has(Ce) || (ia.add(Ce), c(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ce, Qe, G !== null ? `
  ` + G : "", Z !== null ? `
  ` + Z : "", le !== null ? `
  ` + le : ""));
          }
        }
      }
      return x;
    }
    function Ni(e, t, n) {
      {
        var o = yt(t) || "Component", s = e.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? c("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : c("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && c("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && c("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), e.propTypes && c("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), e.contextType && c("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), e.contextTypes && c("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !fo.has(t) && (fo.add(t), c("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof e.componentShouldUpdate == "function" && c("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && c("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", yt(t) || "A pure component"), typeof e.componentDidUnmount == "function" && c("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof e.componentDidReceiveProps == "function" && c("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof e.componentWillRecieveProps == "function" && c("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof e.UNSAFE_componentWillRecieveProps == "function" && c("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var d = e.props !== n;
        e.props !== void 0 && d && c("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), e.defaultProps && c("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !ei.has(t) && (ei.add(t), c("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", yt(t))), typeof e.getDerivedStateFromProps == "function" && c("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof e.getDerivedStateFromError == "function" && c("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && c("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var h = e.state;
        h && (typeof h != "object" || w(h)) && c("%s.state: must be set to an object or null", o), typeof e.getChildContext == "function" && typeof t.childContextTypes != "object" && c("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function Hi(e, t) {
      var n = t.state;
      if (typeof t.componentWillMount == "function") {
        if (t.componentWillMount.__suppressDeprecationWarning !== !0) {
          var o = yt(e) || "Unknown";
          jr[o] || (E(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            o
          ), jr[o] = !0);
        }
        t.componentWillMount();
      }
      typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (c("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", yt(e) || "Component"), da.enqueueReplaceState(t, t.state, null));
    }
    function Fs(e, t, n, o) {
      if (e.queue !== null && e.queue.length > 0) {
        var s = e.queue, d = e.replace;
        if (e.queue = null, e.replace = !1, d && s.length === 1)
          t.state = s[0];
        else {
          for (var h = d ? s[0] : t.state, x = !0, I = d ? 1 : 0; I < s.length; I++) {
            var G = s[I], Z = typeof G == "function" ? G.call(t, h, n, o) : G;
            Z != null && (x ? (x = !1, h = nn({}, h, Z)) : nn(h, Z));
          }
          t.state = h;
        }
      } else
        e.queue = null;
    }
    function Wi(e, t, n, o) {
      Ni(e, t, n);
      var s = e.state !== void 0 ? e.state : null;
      e.updater = da, e.props = n, e.state = s;
      var d = {
        queue: [],
        replace: !1
      };
      Rs(e, d);
      var h = t.contextType;
      if (typeof h == "object" && h !== null ? e.context = rr(h) : e.context = o, e.state === n) {
        var x = yt(t) || "Component";
        co.has(x) || (co.add(x), c("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", x));
      }
      var I = t.getDerivedStateFromProps;
      typeof I == "function" && (e.state = ti(e, t, I, s, n)), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (Hi(t, e), Fs(d, e, n, o));
    }
    var _s = {
      id: 1,
      overflow: ""
    };
    function Ps(e) {
      var t = e.overflow, n = e.id, o = n & ~Is(n);
      return o.toString(32) + t;
    }
    function ni(e, t, n) {
      var o = e.id, s = e.overflow, d = ho(o) - 1, h = o & ~(1 << d), x = n + 1, I = ho(t) + d;
      if (I > 30) {
        var G = d - d % 5, Z = (1 << G) - 1, le = (h & Z).toString(32), Ce = h >> G, Qe = d - G, Ot = ho(t) + Qe, Sr = x << Qe, br = Sr | Ce, Yn = le + s;
        return {
          id: 1 << Ot | br,
          overflow: Yn
        };
      } else {
        var Vr = x << d, ul = Vr | h, Jl = s;
        return {
          id: 1 << I | ul,
          overflow: Jl
        };
      }
    }
    function ho(e) {
      return 32 - As(e);
    }
    function Is(e) {
      return 1 << ho(e) - 1;
    }
    var As = Math.clz32 ? Math.clz32 : Ds, ri = Math.log, fa = Math.LN2;
    function Ds(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ri(t) / fa | 0) | 0;
    }
    function Ms(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Os = typeof Object.is == "function" ? Object.is : Ms, zn = null, oi = null, pa = null, ct = null, dn = !1, Ur = !1, pr = 0, Je = null, or = 0, ha = 25, fn = !1, pn;
    function Ln() {
      if (zn === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return fn && c("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), zn;
    }
    function Ls(e, t) {
      if (t === null)
        return c("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", pn), !1;
      e.length !== t.length && c(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, pn, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Os(e[n], t[n]))
          return !1;
      return !0;
    }
    function En() {
      if (or > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function ar() {
      return ct === null ? pa === null ? (dn = !1, pa = ct = En()) : (dn = !0, ct = pa) : ct.next === null ? (dn = !1, ct = ct.next = En()) : (dn = !0, ct = ct.next), ct;
    }
    function hr(e, t) {
      zn = t, oi = e, fn = !1, pr = 0;
    }
    function js(e, t, n, o) {
      for (; Ur; )
        Ur = !1, pr = 0, or += 1, ct = null, n = e(t, o);
      return go(), n;
    }
    function ai() {
      var e = pr !== 0;
      return e;
    }
    function go() {
      fn = !1, zn = null, oi = null, Ur = !1, pa = null, or = 0, Je = null, ct = null;
    }
    function Bs(e) {
      return fn && c("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), rr(e);
    }
    function Us(e) {
      return pn = "useContext", Ln(), rr(e);
    }
    function ga(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function ii(e) {
      return pn = "useState", zi(
        ga,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function zi(e, t, n) {
      if (e !== ga && (pn = "useReducer"), zn = Ln(), ct = ar(), dn) {
        var o = ct.queue, s = o.dispatch;
        if (Je !== null) {
          var d = Je.get(o);
          if (d !== void 0) {
            Je.delete(o);
            var h = ct.memoizedState, x = d;
            do {
              var I = x.action;
              fn = !0, h = e(h, I), fn = !1, x = x.next;
            } while (x !== null);
            return ct.memoizedState = h, [h, s];
          }
        }
        return [ct.memoizedState, s];
      } else {
        fn = !0;
        var G;
        e === ga ? G = typeof t == "function" ? t() : t : G = n !== void 0 ? n(t) : t, fn = !1, ct.memoizedState = G;
        var Z = ct.queue = {
          last: null,
          dispatch: null
        }, le = Z.dispatch = Vi.bind(null, zn, Z);
        return [ct.memoizedState, le];
      }
    }
    function $i(e, t) {
      zn = Ln(), ct = ar();
      var n = t === void 0 ? null : t;
      if (ct !== null) {
        var o = ct.memoizedState;
        if (o !== null && n !== null) {
          var s = o[1];
          if (Ls(n, s))
            return o[0];
        }
      }
      fn = !0;
      var d = e();
      return fn = !1, ct.memoizedState = [d, n], d;
    }
    function si(e) {
      zn = Ln(), ct = ar();
      var t = ct.memoizedState;
      if (t === null) {
        var n = {
          current: e
        };
        return Object.seal(n), ct.memoizedState = n, n;
      } else
        return t;
    }
    function Ns(e, t) {
      pn = "useLayoutEffect", c("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Vi(e, t, n) {
      if (or >= ha)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === zn) {
        Ur = !0;
        var o = {
          action: n,
          next: null
        };
        Je === null && (Je = /* @__PURE__ */ new Map());
        var s = Je.get(t);
        if (s === void 0)
          Je.set(t, o);
        else {
          for (var d = s; d.next !== null; )
            d = d.next;
          d.next = o;
        }
      }
    }
    function Gi(e, t) {
      return $i(function() {
        return e;
      }, t);
    }
    function Hs(e, t, n) {
      return Ln(), t(e._source);
    }
    function Ws(e, t, n) {
      if (n === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return n();
    }
    function zs(e) {
      return Ln(), e;
    }
    function $s() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Vs() {
      return Ln(), [!1, $s];
    }
    function Gs() {
      var e = oi, t = Ps(e.treeContext), n = li;
      if (n === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var o = pr++;
      return ut(n, t, o);
    }
    function va() {
    }
    var Yi = {
      readContext: Bs,
      useContext: Us,
      useMemo: $i,
      useReducer: zi,
      useRef: si,
      useState: ii,
      useInsertionEffect: va,
      useLayoutEffect: Ns,
      useCallback: Gi,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: va,
      // Effects are not run in the server environment.
      useEffect: va,
      // Debugging effect
      useDebugValue: va,
      useDeferredValue: zs,
      useTransition: Vs,
      useId: Gs,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Hs,
      useSyncExternalStore: Ws
    }, li = null;
    function Xi(e) {
      li = e;
    }
    function ma(e) {
      try {
        var t = "", n = e;
        do {
          switch (n.tag) {
            case 0:
              t += no(n.type, null, null);
              break;
            case 1:
              t += ro(n.type, null, null);
              break;
            case 2:
              t += Za(n.type, null, null);
              break;
          }
          n = n.parent;
        } while (n);
        return t;
      } catch (o) {
        return `
Error generating stack: ` + o.message + `
` + o.stack;
      }
    }
    var ya = y.ReactCurrentDispatcher, vo = y.ReactDebugCurrentFrame, Sa = 0, Nr = 1, ba = 2, xa = 3, wa = 4, Hr = 0, ui = 1, gr = 2, Ji = 12800;
    function Ys(e) {
      return console.error(e), null;
    }
    function Wr() {
    }
    function zr(e, t, n, o, s, d, h, x, I) {
      var G = [], Z = /* @__PURE__ */ new Set(), le = {
        destination: null,
        responseState: t,
        progressiveChunkSize: o === void 0 ? Ji : o,
        status: Hr,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: Z,
        pingedTasks: G,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: s === void 0 ? Ys : s,
        onAllReady: Wr,
        onShellReady: h === void 0 ? Wr : h,
        onShellError: Wr,
        onFatalError: Wr
      }, Ce = ka(
        le,
        0,
        null,
        n,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      Ce.parentFlushed = !0;
      var Qe = vr(le, e, null, Ce, Z, ao, na, _s);
      return G.push(Qe), le;
    }
    function Xs(e, t) {
      var n = e.pingedTasks;
      n.push(t), n.length === 1 && _(function() {
        return Si(e);
      });
    }
    function Js(e, t) {
      return {
        id: Kt,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: t,
        errorDigest: null
      };
    }
    function vr(e, t, n, o, s, d, h, x) {
      e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
      var I = {
        node: t,
        ping: function() {
          return Xs(e, I);
        },
        blockedBoundary: n,
        blockedSegment: o,
        abortSet: s,
        legacyContext: d,
        context: h,
        treeContext: x
      };
      return I.componentStack = null, s.add(I), I;
    }
    function ka(e, t, n, o, s, d) {
      return {
        status: Sa,
        id: -1,
        // lazily assigned later
        index: t,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: o,
        boundary: n,
        lastPushedText: s,
        textEmbedded: d
      };
    }
    var $n = null;
    function ci() {
      return $n === null || $n.componentStack === null ? "" : ma($n.componentStack);
    }
    function mr(e, t) {
      e.componentStack = {
        tag: 0,
        parent: e.componentStack,
        type: t
      };
    }
    function mo(e, t) {
      e.componentStack = {
        tag: 1,
        parent: e.componentStack,
        type: t
      };
    }
    function Vn(e, t) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: t
      };
    }
    function jn(e) {
      e.componentStack === null ? c("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var Gn = null;
    function Ca(e, t) {
      {
        var n;
        typeof t == "string" ? n = t : t && typeof t.message == "string" ? n = t.message : n = String(t);
        var o = Gn || ci();
        Gn = null, e.errorMessage = n, e.errorComponentStack = o;
      }
    }
    function yo(e, t) {
      var n = e.onError(t);
      if (n != null && typeof n != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
      return n;
    }
    function Tn(e, t) {
      var n = e.onShellError;
      n(t);
      var o = e.onFatalError;
      o(t), e.destination !== null ? (e.status = gr, ae(e.destination, t)) : (e.status = ui, e.fatalError = t);
    }
    function So(e, t, n) {
      mr(t, "Suspense");
      var o = t.blockedBoundary, s = t.blockedSegment, d = n.fallback, h = n.children, x = /* @__PURE__ */ new Set(), I = Js(e, x), G = s.chunks.length, Z = ka(
        e,
        G,
        I,
        s.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      s.children.push(Z), s.lastPushedText = !1;
      var le = ka(
        e,
        0,
        null,
        s.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      le.parentFlushed = !0, t.blockedBoundary = I, t.blockedSegment = le;
      try {
        if (Zt(e, t, h), Ti(le.chunks, e.responseState, le.lastPushedText, le.textEmbedded), le.status = Nr, $r(I, le), I.pendingTasks === 0) {
          jn(t);
          return;
        }
      } catch (Qe) {
        le.status = wa, I.forceClientRender = !0, I.errorDigest = yo(e, Qe), Ca(I, Qe);
      } finally {
        t.blockedBoundary = o, t.blockedSegment = s;
      }
      var Ce = vr(e, d, o, Z, x, t.legacyContext, t.context, t.treeContext);
      Ce.componentStack = t.componentStack, e.pingedTasks.push(Ce), jn(t);
    }
    function di(e, t, n, o) {
      mr(t, n);
      var s = t.blockedSegment, d = Cn(s.chunks, n, o, e.responseState, s.formatContext);
      s.lastPushedText = !1;
      var h = s.formatContext;
      s.formatContext = on(h, n, o), Zt(e, t, d), s.formatContext = h, at(s.chunks, n), s.lastPushedText = !1, jn(t);
    }
    function bo(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function xo(e, t, n, o, s) {
      var d = {};
      hr(t, d);
      var h = n(o, s);
      return js(n, o, h, s);
    }
    function Zi(e, t, n, o, s) {
      var d = n.render();
      n.props !== s && (pi || c("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", yt(o) || "a component"), pi = !0);
      {
        var h = o.childContextTypes;
        if (h != null) {
          var x = t.legacyContext, I = Mi(n, o, x, h);
          t.legacyContext = I, hn(e, t, d), t.legacyContext = x;
          return;
        }
      }
      hn(e, t, d);
    }
    function Zs(e, t, n, o) {
      Vn(t, n);
      var s = io(n, t.legacyContext), d = Ui(n, o, s);
      Wi(d, n, o, s), Zi(e, t, d, n, o), jn(t);
    }
    var Qi = {}, wo = {}, fi = {}, Ki = {}, pi = !1, ko = {}, hi = !1, gi = !1, vi = !1;
    function qi(e, t, n, o) {
      var s;
      if (s = io(n, t.legacyContext), mo(t, n), n.prototype && typeof n.prototype.render == "function") {
        var d = yt(n) || "Unknown";
        Qi[d] || (c("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", d, d), Qi[d] = !0);
      }
      var h = xo(e, t, n, o, s), x = ai();
      if (typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0) {
        var I = yt(n) || "Unknown";
        wo[I] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", I, I, I), wo[I] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0
      ) {
        {
          var G = yt(n) || "Unknown";
          wo[G] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", G, G, G), wo[G] = !0);
        }
        Wi(h, n, o, s), Zi(e, t, h, n, o);
      } else if (es(n), x) {
        var Z = t.treeContext, le = 1, Ce = 0;
        t.treeContext = ni(Z, le, Ce);
        try {
          hn(e, t, h);
        } finally {
          t.treeContext = Z;
        }
      } else
        hn(e, t, h);
      jn(t);
    }
    function es(e) {
      {
        if (e && e.childContextTypes && c("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), e.defaultProps !== void 0) {
          var t = yt(e) || "Unknown";
          ko[t] || (c("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", t), ko[t] = !0);
        }
        if (typeof e.getDerivedStateFromProps == "function") {
          var n = yt(e) || "Unknown";
          Ki[n] || (c("%s: Function components do not support getDerivedStateFromProps.", n), Ki[n] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var o = yt(e) || "Unknown";
          fi[o] || (c("%s: Function components do not support contextType.", o), fi[o] = !0);
        }
      }
    }
    function mi(e, t) {
      if (e && e.defaultProps) {
        var n = nn({}, t), o = e.defaultProps;
        for (var s in o)
          n[s] === void 0 && (n[s] = o[s]);
        return n;
      }
      return t;
    }
    function ts(e, t, n, o, s) {
      mo(t, n.render);
      var d = xo(e, t, n.render, o, s), h = ai();
      if (h) {
        var x = t.treeContext, I = 1, G = 0;
        t.treeContext = ni(x, I, G);
        try {
          hn(e, t, d);
        } finally {
          t.treeContext = x;
        }
      } else
        hn(e, t, d);
      jn(t);
    }
    function Qs(e, t, n, o, s) {
      var d = n.type, h = mi(d, o);
      yi(e, t, d, h, s);
    }
    function Ks(e, t, n, o) {
      n._context === void 0 ? n !== n.Consumer && (vi || (vi = !0, c("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : n = n._context;
      var s = o.children;
      typeof s != "function" && c("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var d = rr(n), h = s(d);
      hn(e, t, h);
    }
    function ns(e, t, n, o) {
      var s = n._context, d = o.value, h = o.children, x;
      x = t.context, t.context = Oi(s, d), hn(e, t, h), t.context = Li(s), x !== t.context && c("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function qs(e, t, n, o, s) {
      mr(t, "Lazy");
      var d = n._payload, h = n._init, x = h(d), I = mi(x, o);
      yi(e, t, x, I, s), jn(t);
    }
    function yi(e, t, n, o, s) {
      if (typeof n == "function")
        if (bo(n)) {
          Zs(e, t, n, o);
          return;
        } else {
          qi(e, t, n, o);
          return;
        }
      if (typeof n == "string") {
        di(e, t, n, o);
        return;
      }
      switch (n) {
        // TODO: LegacyHidden acts the same as a fragment. This only works
        // because we currently assume that every instance of LegacyHidden is
        // accompanied by a host component wrapper. In the hidden mode, the host
        // component is given a `hidden` attribute, which ensures that the
        // initial HTML is not visible. To support the use of LegacyHidden as a
        // true fragment, without an extra DOM node, we would have to hide the
        // initial HTML in some other way.
        // TODO: Add REACT_OFFSCREEN_TYPE here too with the same capability.
        case Ha:
        case Na:
        case cn:
        case Fi:
        case Vo: {
          hn(e, t, o.children);
          return;
        }
        case qr: {
          mr(t, "SuspenseList"), hn(e, t, o.children), jn(t);
          return;
        }
        case Ua:
          throw new Error("ReactDOMServer does not yet support scope components.");
        // eslint-disable-next-line-no-fallthrough
        case Jo: {
          So(e, t, o);
          return;
        }
      }
      if (typeof n == "object" && n !== null)
        switch (n.$$typeof) {
          case Xo: {
            ts(e, t, n, o, s);
            return;
          }
          case eo: {
            Qs(e, t, n, o, s);
            return;
          }
          case Go: {
            ns(e, t, n, o);
            return;
          }
          case Yo: {
            Ks(e, t, n, o);
            return;
          }
          case Mr: {
            qs(e, t, n, o);
            return;
          }
        }
      var d = "";
      throw (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (n == null ? n : typeof n) + "." + d));
    }
    function el(e, t) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (hi || c("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), hi = !0), e.entries === t && (gi || c("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), gi = !0);
    }
    function hn(e, t, n) {
      try {
        return tl(e, t, n);
      } catch (o) {
        throw typeof o == "object" && o !== null && typeof o.then == "function" || (Gn = Gn !== null ? Gn : ci()), o;
      }
    }
    function tl(e, t, n) {
      if (t.node = n, typeof n == "object" && n !== null) {
        switch (n.$$typeof) {
          case ws: {
            var o = n, s = o.type, d = o.props, h = o.ref;
            yi(e, t, s, d, h);
            return;
          }
          case Ri:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          // eslint-disable-next-line-no-fallthrough
          case Mr: {
            var x = n, I = x._payload, G = x._init, Z;
            try {
              Z = G(I);
            } catch (Vr) {
              throw typeof Vr == "object" && Vr !== null && typeof Vr.then == "function" && mr(t, "Lazy"), Vr;
            }
            hn(e, t, Z);
            return;
          }
        }
        if (w(n)) {
          Ea(e, t, n);
          return;
        }
        var le = Cs(n);
        if (le) {
          el(n, le);
          var Ce = le.call(n);
          if (Ce) {
            var Qe = Ce.next();
            if (!Qe.done) {
              var Ot = [];
              do
                Ot.push(Qe.value), Qe = Ce.next();
              while (!Qe.done);
              Ea(e, t, Ot);
              return;
            }
            return;
          }
        }
        var Sr = Object.prototype.toString.call(n);
        throw new Error("Objects are not valid as a React child (found: " + (Sr === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : Sr) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof n == "string") {
        var br = t.blockedSegment;
        br.lastPushedText = Ei(t.blockedSegment.chunks, n, e.responseState, br.lastPushedText);
        return;
      }
      if (typeof n == "number") {
        var Yn = t.blockedSegment;
        Yn.lastPushedText = Ei(t.blockedSegment.chunks, "" + n, e.responseState, Yn.lastPushedText);
        return;
      }
      typeof n == "function" && c("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function Ea(e, t, n) {
      for (var o = n.length, s = 0; s < o; s++) {
        var d = t.treeContext;
        t.treeContext = ni(d, o, s);
        try {
          Zt(e, t, n[s]);
        } finally {
          t.treeContext = d;
        }
      }
    }
    function nl(e, t, n) {
      var o = t.blockedSegment, s = o.chunks.length, d = ka(
        e,
        s,
        null,
        o.formatContext,
        // Adopt the parent segment's leading text embed
        o.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      o.children.push(d), o.lastPushedText = !1;
      var h = vr(e, t.node, t.blockedBoundary, d, t.abortSet, t.legacyContext, t.context, t.treeContext);
      t.componentStack !== null && (h.componentStack = t.componentStack.parent);
      var x = h.ping;
      n.then(x, x);
    }
    function Zt(e, t, n) {
      var o = t.blockedSegment.formatContext, s = t.legacyContext, d = t.context, h = null;
      h = t.componentStack;
      try {
        return hn(e, t, n);
      } catch (x) {
        if (go(), typeof x == "object" && x !== null && typeof x.then == "function") {
          nl(e, t, x), t.blockedSegment.formatContext = o, t.legacyContext = s, t.context = d, lo(d), t.componentStack = h;
          return;
        } else
          throw t.blockedSegment.formatContext = o, t.legacyContext = s, t.context = d, lo(d), t.componentStack = h, x;
      }
    }
    function rl(e, t, n, o) {
      var s = yo(e, o);
      if (t === null ? Tn(e, o) : (t.pendingTasks--, t.forceClientRender || (t.forceClientRender = !0, t.errorDigest = s, Ca(t, o), t.parentFlushed && e.clientRenderedBoundaries.push(t))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var d = e.onAllReady;
        d();
      }
    }
    function rs(e) {
      var t = this, n = e.blockedBoundary, o = e.blockedSegment;
      o.status = xa, as(t, n, o);
    }
    function os(e, t, n) {
      var o = e.blockedBoundary, s = e.blockedSegment;
      if (s.status = xa, o === null)
        t.allPendingTasks--, t.status !== gr && (t.status = gr, t.destination !== null && R(t.destination));
      else {
        if (o.pendingTasks--, !o.forceClientRender) {
          o.forceClientRender = !0;
          var d = n === void 0 ? new Error("The render was aborted by the server without a reason.") : n;
          o.errorDigest = t.onError(d);
          {
            var h = "The server did not finish this Suspense boundary: ";
            d && typeof d.message == "string" ? d = h + d.message : d = h + String(d);
            var x = $n;
            $n = e;
            try {
              Ca(o, d);
            } finally {
              $n = x;
            }
          }
          o.parentFlushed && t.clientRenderedBoundaries.push(o);
        }
        if (o.fallbackAbortableTasks.forEach(function(G) {
          return os(G, t, n);
        }), o.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0) {
          var I = t.onAllReady;
          I();
        }
      }
    }
    function $r(e, t) {
      if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
        var n = t.children[0];
        n.id = t.id, n.parentFlushed = !0, n.status === Nr && $r(e, n);
      } else {
        var o = e.completedSegments;
        o.push(t);
      }
    }
    function as(e, t, n) {
      if (t === null) {
        if (n.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          e.completedRootSegment = n;
        }
        if (e.pendingRootTasks--, e.pendingRootTasks === 0) {
          e.onShellError = Wr;
          var o = e.onShellReady;
          o();
        }
      } else if (t.pendingTasks--, !t.forceClientRender) {
        if (t.pendingTasks === 0)
          n.parentFlushed && n.status === Nr && $r(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(rs, e), t.fallbackAbortableTasks.clear();
        else if (n.parentFlushed && n.status === Nr) {
          $r(t, n);
          var s = t.completedSegments;
          s.length === 1 && t.parentFlushed && e.partialBoundaries.push(t);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var d = e.onAllReady;
        d();
      }
    }
    function ol(e, t) {
      var n = t.blockedSegment;
      if (n.status === Sa) {
        lo(t.context);
        var o = null;
        o = $n, $n = t;
        try {
          hn(e, t, t.node), Ti(n.chunks, e.responseState, n.lastPushedText, n.textEmbedded), t.abortSet.delete(t), n.status = Nr, as(e, t.blockedBoundary, n);
        } catch (d) {
          if (go(), typeof d == "object" && d !== null && typeof d.then == "function") {
            var s = t.ping;
            d.then(s, s);
          } else
            t.abortSet.delete(t), n.status = wa, rl(e, t.blockedBoundary, n, d);
        } finally {
          $n = o;
        }
      }
    }
    function Si(e) {
      if (e.status !== gr) {
        var t = ji(), n = ya.current;
        ya.current = Yi;
        var o;
        o = vo.getCurrentStack, vo.getCurrentStack = ci;
        var s = li;
        Xi(e.responseState);
        try {
          var d = e.pingedTasks, h;
          for (h = 0; h < d.length; h++) {
            var x = d[h];
            ol(e, x);
          }
          d.splice(0, h), e.destination !== null && Ra(e, e.destination);
        } catch (I) {
          yo(e, I), Tn(e, I);
        } finally {
          Xi(s), ya.current = n, vo.getCurrentStack = o, n === Yi && lo(t);
        }
      }
    }
    function yr(e, t, n) {
      switch (n.parentFlushed = !0, n.status) {
        case Sa: {
          var o = n.id = e.nextSegmentId++;
          return n.lastPushedText = !1, n.textEmbedded = !1, Mn(t, e.responseState, o);
        }
        case Nr: {
          n.status = ba;
          for (var s = !0, d = n.chunks, h = 0, x = n.children, I = 0; I < x.length; I++) {
            for (var G = x[I]; h < G.index; h++)
              v(t, d[h]);
            s = Co(e, t, G);
          }
          for (; h < d.length - 1; h++)
            v(t, d[h]);
          return h < d.length && (s = k(t, d[h])), s;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Co(e, t, n) {
      var o = n.boundary;
      if (o === null)
        return yr(e, t, n);
      if (o.parentFlushed = !0, o.forceClientRender)
        return Ss(t, e.responseState, o.errorDigest, o.errorMessage, o.errorComponentStack), yr(e, t, n), xs(t, e.responseState);
      if (o.pendingTasks > 0) {
        o.rootSegmentID = e.nextSegmentId++, o.completedSegments.length > 0 && e.partialBoundaries.push(o);
        var s = o.id = lt(e.responseState);
        return sr(t, e.responseState, s), yr(e, t, n), qn(t, e.responseState);
      } else {
        if (o.byteSize > e.progressiveChunkSize)
          return o.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(o), sr(t, e.responseState, o.id), yr(e, t, n), qn(t, e.responseState);
        ys(t, e.responseState);
        var d = o.completedSegments;
        if (d.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var h = d[0];
        return Co(e, t, h), bs(t, e.responseState);
      }
    }
    function al(e, t, n) {
      return hs(t, e.responseState, n.id, n.errorDigest, n.errorMessage, n.errorComponentStack);
    }
    function bi(e, t, n) {
      return Kr(t, e.responseState, n.formatContext, n.id), Co(e, t, n), zo(t, n.formatContext);
    }
    function Eo(e, t, n) {
      for (var o = n.completedSegments, s = 0; s < o.length; s++) {
        var d = o[s];
        is(e, t, n, d);
      }
      return o.length = 0, Jt(t, e.responseState, n.id, n.rootSegmentID);
    }
    function Ta(e, t, n) {
      for (var o = n.completedSegments, s = 0; s < o.length; s++) {
        var d = o[s];
        if (!is(e, t, n, d))
          return s++, o.splice(0, s), !1;
      }
      return o.splice(0, s), !0;
    }
    function is(e, t, n, o) {
      if (o.status === ba)
        return !0;
      var s = o.id;
      if (s === -1) {
        var d = o.id = n.rootSegmentID;
        if (d === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return bi(e, t, o);
      } else
        return bi(e, t, o), K(t, e.responseState, s);
    }
    function Ra(e, t) {
      try {
        var n = e.completedRootSegment;
        n !== null && e.pendingRootTasks === 0 && (Co(e, t, n), e.completedRootSegment = null, Hn(t, e.responseState));
        var o = e.clientRenderedBoundaries, s;
        for (s = 0; s < o.length; s++) {
          var d = o[s];
          if (!al(e, t, d)) {
            e.destination = null, s++, o.splice(0, s);
            return;
          }
        }
        o.splice(0, s);
        var h = e.completedBoundaries;
        for (s = 0; s < h.length; s++) {
          var x = h[s];
          if (!Eo(e, t, x)) {
            e.destination = null, s++, h.splice(0, s);
            return;
          }
        }
        h.splice(0, s);
        var I = e.partialBoundaries;
        for (s = 0; s < I.length; s++) {
          var G = I[s];
          if (!Ta(e, t, G)) {
            e.destination = null, s++, I.splice(0, s);
            return;
          }
        }
        I.splice(0, s);
        var Z = e.completedBoundaries;
        for (s = 0; s < Z.length; s++) {
          var le = Z[s];
          if (!Eo(e, t, le)) {
            e.destination = null, s++, Z.splice(0, s);
            return;
          }
        }
        Z.splice(0, s);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && c("There was still abortable task at the root when we closed. This is a bug in React."), R(t));
      }
    }
    function ss(e) {
      _(function() {
        return Si(e);
      });
    }
    function il(e, t) {
      if (e.status === ui) {
        e.status = gr, ae(t, e.fatalError);
        return;
      }
      if (e.status !== gr && e.destination === null) {
        e.destination = t;
        try {
          Ra(e, t);
        } catch (n) {
          yo(e, n), Tn(e, n);
        }
      }
    }
    function ls(e, t) {
      try {
        var n = e.abortableTasks;
        n.forEach(function(o) {
          return os(o, e, t);
        }), n.clear(), e.destination !== null && Ra(e, e.destination);
      } catch (o) {
        yo(e, o), Tn(e, o);
      }
    }
    function xi() {
    }
    function us(e, t, n, o) {
      var s = !1, d = null, h = "", x = {
        push: function(le) {
          return le !== null && (h += le), !0;
        },
        destroy: function(le) {
          s = !0, d = le;
        }
      }, I = !1;
      function G() {
        I = !0;
      }
      var Z = zr(e, vs(n, t ? t.identifierPrefix : void 0), ms(), 1 / 0, xi, void 0, G);
      if (ss(Z), ls(Z, o), il(Z, x), s)
        throw d;
      if (!I)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return h;
    }
    function sl(e, t) {
      return us(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function cs(e, t) {
      return us(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function ll() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function r() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Ro.renderToNodeStream = ll, Ro.renderToStaticMarkup = cs, Ro.renderToStaticNodeStream = r, Ro.renderToString = sl, Ro.version = f;
  }()), Ro;
}
var ps = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tl;
function au() {
  return Tl || (Tl = 1, process.env.NODE_ENV !== "production" && function() {
    var b = Wt, f = "18.3.1", y = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        F("warn", r, t);
      }
    }
    function c(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        F("error", r, t);
      }
    }
    function F(r, e, t) {
      {
        var n = y.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (e += "%s", t = t.concat([o]));
        var s = t.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, s);
      }
    }
    function _(r) {
      r();
    }
    var T = 512, v = null, k = 0;
    function N(r) {
      v = new Uint8Array(T), k = 0;
    }
    function R(r, e) {
      if (e.length !== 0) {
        if (e.length > T) {
          k > 0 && (r.enqueue(new Uint8Array(v.buffer, 0, k)), v = new Uint8Array(T), k = 0), r.enqueue(e);
          return;
        }
        var t = e, n = v.length - k;
        n < t.length && (n === 0 ? r.enqueue(v) : (v.set(t.subarray(0, n), k), r.enqueue(v), t = t.subarray(n)), v = new Uint8Array(T), k = 0), v.set(t, k), k += t.length;
      }
    }
    function W(r, e) {
      return R(r, e), !0;
    }
    function re(r) {
      v && k > 0 && (r.enqueue(new Uint8Array(v.buffer, 0, k)), v = null, k = 0);
    }
    function ae(r) {
      r.close();
    }
    var ee = new TextEncoder();
    function z(r) {
      return ee.encode(r);
    }
    function D(r) {
      return ee.encode(r);
    }
    function A(r, e) {
      typeof r.error == "function" ? r.error(e) : r.close();
    }
    function U(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function Y(r) {
      try {
        return B(r), !1;
      } catch {
        return !0;
      }
    }
    function B(r) {
      return "" + r;
    }
    function O(r, e) {
      if (Y(r))
        return c("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", e, U(r)), B(r);
    }
    function X(r, e) {
      if (Y(r))
        return c("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", e, U(r)), B(r);
    }
    function ie(r) {
      if (Y(r))
        return c("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", U(r)), B(r);
    }
    var V = Object.prototype.hasOwnProperty, Fe = 0, De = 1, Ne = 2, oe = 3, me = 4, He = 5, we = 6, ht = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", fe = ht + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", te = new RegExp("^[" + ht + "][" + fe + "]*$"), Le = {}, _e = {};
    function Se(r) {
      return V.call(_e, r) ? !0 : V.call(Le, r) ? !1 : te.test(r) ? (_e[r] = !0, !0) : (Le[r] = !0, c("Invalid attribute name: `%s`", r), !1);
    }
    function gt(r, e, t, n) {
      if (t !== null && t.type === Fe)
        return !1;
      switch (typeof e) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (t !== null)
            return !t.acceptsBooleans;
          var o = r.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function tt(r) {
      return Ee.hasOwnProperty(r) ? Ee[r] : null;
    }
    function $e(r, e, t, n, o, s, d) {
      this.acceptsBooleans = e === Ne || e === oe || e === me, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = t, this.propertyName = r, this.type = e, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var Ee = {}, St = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    St.forEach(function(r) {
      Ee[r] = new $e(
        r,
        Fe,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
      var e = r[0], t = r[1];
      Ee[e] = new $e(
        e,
        De,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
      Ee[r] = new $e(
        r,
        Ne,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
      Ee[r] = new $e(
        r,
        Ne,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(r) {
      Ee[r] = new $e(
        r,
        oe,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      Ee[r] = new $e(
        r,
        oe,
        !0,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      Ee[r] = new $e(
        r,
        me,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      Ee[r] = new $e(
        r,
        we,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(r) {
      Ee[r] = new $e(
        r,
        He,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var bt = /[\-\:]([a-z])/g, We = function(r) {
      return r[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      var e = r.replace(bt, We);
      Ee[e] = new $e(
        e,
        De,
        !1,
        // mustUseProperty
        r,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      var e = r.replace(bt, We);
      Ee[e] = new $e(
        e,
        De,
        !1,
        // mustUseProperty
        r,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      var e = r.replace(bt, We);
      Ee[e] = new $e(
        e,
        De,
        !1,
        // mustUseProperty
        r,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(r) {
      Ee[r] = new $e(
        r,
        De,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var vt = "xlinkHref";
    Ee[vt] = new $e(
      "xlinkHref",
      De,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(r) {
      Ee[r] = new $e(
        r,
        De,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var nt = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function xt(r, e) {
      return r + e.charAt(0).toUpperCase() + e.substring(1);
    }
    var Ze = ["Webkit", "ms", "Moz", "O"];
    Object.keys(nt).forEach(function(r) {
      Ze.forEach(function(e) {
        nt[xt(e, r)] = nt[r];
      });
    });
    var dt = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function At(r, e) {
      dt[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || c("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), e.onChange || e.readOnly || e.disabled || e.checked == null || c("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function wt(r, e) {
      if (r.indexOf("-") === -1)
        return typeof e.is == "string";
      switch (r) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var de = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, q = {}, ce = new RegExp("^(aria)-[" + fe + "]*$"), ue = new RegExp("^(aria)[A-Z][" + fe + "]*$");
    function ye(r, e) {
      {
        if (V.call(q, e) && q[e])
          return !0;
        if (ue.test(e)) {
          var t = "aria-" + e.slice(4).toLowerCase(), n = de.hasOwnProperty(t) ? t : null;
          if (n == null)
            return c("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", e), q[e] = !0, !0;
          if (e !== n)
            return c("Invalid ARIA attribute `%s`. Did you mean `%s`?", e, n), q[e] = !0, !0;
        }
        if (ce.test(e)) {
          var o = e.toLowerCase(), s = de.hasOwnProperty(o) ? o : null;
          if (s == null)
            return q[e] = !0, !1;
          if (e !== s)
            return c("Unknown ARIA attribute `%s`. Did you mean `%s`?", e, s), q[e] = !0, !0;
        }
      }
      return !0;
    }
    function ge(r, e) {
      {
        var t = [];
        for (var n in e) {
          var o = ye(r, n);
          o || t.push(n);
        }
        var s = t.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        t.length === 1 ? c("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, r) : t.length > 1 && c("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, r);
      }
    }
    function ze(r, e) {
      wt(r, e) || ge(r, e);
    }
    var Ue = !1;
    function kt(r, e) {
      {
        if (r !== "input" && r !== "textarea" && r !== "select")
          return;
        e != null && e.value === null && !Ue && (Ue = !0, r === "select" && e.multiple ? c("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", r) : c("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", r));
      }
    }
    var Dt = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Lt = function() {
    };
    {
      var Ke = {}, Pt = /^on./, $t = /^on[^A-Z]/, Mt = new RegExp("^(aria)-[" + fe + "]*$"), wn = new RegExp("^(aria)[A-Z][" + fe + "]*$");
      Lt = function(r, e, t, n) {
        if (V.call(Ke, e) && Ke[e])
          return !0;
        var o = e.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return c("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ke[e] = !0, !0;
        if (n != null) {
          var s = n.registrationNameDependencies, d = n.possibleRegistrationNames;
          if (s.hasOwnProperty(e))
            return !0;
          var h = d.hasOwnProperty(o) ? d[o] : null;
          if (h != null)
            return c("Invalid event handler property `%s`. Did you mean `%s`?", e, h), Ke[e] = !0, !0;
          if (Pt.test(e))
            return c("Unknown event handler property `%s`. It will be ignored.", e), Ke[e] = !0, !0;
        } else if (Pt.test(e))
          return $t.test(e) && c("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", e), Ke[e] = !0, !0;
        if (Mt.test(e) || wn.test(e))
          return !0;
        if (o === "innerhtml")
          return c("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ke[e] = !0, !0;
        if (o === "aria")
          return c("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ke[e] = !0, !0;
        if (o === "is" && t !== null && t !== void 0 && typeof t != "string")
          return c("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof t), Ke[e] = !0, !0;
        if (typeof t == "number" && isNaN(t))
          return c("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", e), Ke[e] = !0, !0;
        var x = tt(e), I = x !== null && x.type === Fe;
        if (Dt.hasOwnProperty(o)) {
          var G = Dt[o];
          if (G !== e)
            return c("Invalid DOM property `%s`. Did you mean `%s`?", e, G), Ke[e] = !0, !0;
        } else if (!I && e !== o)
          return c("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", e, o), Ke[e] = !0, !0;
        return typeof t == "boolean" && gt(e, t, x) ? (t ? c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', t, e, e, t, e) : c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', t, e, e, t, e, e, e), Ke[e] = !0, !0) : I ? !0 : gt(e, t, x) ? (Ke[e] = !0, !1) : ((t === "false" || t === "true") && x !== null && x.type === oe && (c("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", t, e, t === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', e, t), Ke[e] = !0), !0);
      };
    }
    var gn = function(r, e, t) {
      {
        var n = [];
        for (var o in e) {
          var s = Lt(r, o, e[o], t);
          s || n.push(o);
        }
        var d = n.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        n.length === 1 ? c("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, r) : n.length > 1 && c("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, r);
      }
    };
    function ne(r, e, t) {
      wt(r, e) || gn(r, e, t);
    }
    var Be = function() {
    };
    {
      var ke = /^(?:webkit|moz|o)[A-Z]/, Pe = /^-ms-/, qe = /-(.)/g, Ve = /;\s*$/, rt = {}, Tt = {}, Me = !1, Rt = !1, Ct = function(r) {
        return r.replace(qe, function(e, t) {
          return t.toUpperCase();
        });
      }, Et = function(r) {
        rt.hasOwnProperty(r) && rt[r] || (rt[r] = !0, c(
          "Unsupported style property %s. Did you mean %s?",
          r,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ct(r.replace(Pe, "ms-"))
        ));
      }, Ft = function(r) {
        rt.hasOwnProperty(r) && rt[r] || (rt[r] = !0, c("Unsupported vendor-prefixed style property %s. Did you mean %s?", r, r.charAt(0).toUpperCase() + r.slice(1)));
      }, ft = function(r, e) {
        Tt.hasOwnProperty(e) && Tt[e] || (Tt[e] = !0, c(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, r, e.replace(Ve, "")));
      }, _t = function(r, e) {
        Me || (Me = !0, c("`NaN` is an invalid value for the `%s` css style property.", r));
      }, mt = function(r, e) {
        Rt || (Rt = !0, c("`Infinity` is an invalid value for the `%s` css style property.", r));
      };
      Be = function(r, e) {
        r.indexOf("-") > -1 ? Et(r) : ke.test(r) ? Ft(r) : Ve.test(e) && ft(r, e), typeof e == "number" && (isNaN(e) ? _t(r, e) : isFinite(e) || mt(r, e));
      };
    }
    var rn = Be, Vt = /["'&<>]/;
    function vn(r) {
      ie(r);
      var e = "" + r, t = Vt.exec(e);
      if (!t)
        return e;
      var n, o = "", s, d = 0;
      for (s = t.index; s < e.length; s++) {
        switch (e.charCodeAt(s)) {
          case 34:
            n = "&quot;";
            break;
          case 38:
            n = "&amp;";
            break;
          case 39:
            n = "&#x27;";
            break;
          case 60:
            n = "&lt;";
            break;
          case 62:
            n = "&gt;";
            break;
          default:
            continue;
        }
        d !== s && (o += e.substring(d, s)), d = s + 1, o += n;
      }
      return d !== s ? o + e.substring(d, s) : o;
    }
    function Ge(r) {
      return typeof r == "boolean" || typeof r == "number" ? "" + r : vn(r);
    }
    var Gt = /([A-Z])/g, Fn = /^ms-/;
    function _n(r) {
      return r.replace(Gt, "-$1").toLowerCase().replace(Fn, "-ms-");
    }
    var w = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, J = !1;
    function se(r) {
      !J && w.test(r) && (J = !0, c("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(r)));
    }
    var he = Array.isArray;
    function Re(r) {
      return he(r);
    }
    var je = D("<script>"), Ie = D("<\/script>"), Te = D('<script src="'), st = D('<script type="module" src="'), Ye = D('" async=""><\/script>');
    function et(r) {
      return ie(r), ("" + r).replace(ot, on);
    }
    var ot = /(<\/|<)(s)(cript)/gi, on = function(r, e, t, n) {
      return "" + e + (t === "s" ? "\\u0073" : "\\u0053") + n;
    };
    function Kt(r, e, t, n, o) {
      var s = r === void 0 ? "" : r, d = e === void 0 ? je : D('<script nonce="' + Ge(e) + '">'), h = [];
      if (t !== void 0 && h.push(d, z(et(t)), Ie), n !== void 0)
        for (var x = 0; x < n.length; x++)
          h.push(Te, z(Ge(n[x])), Ye);
      if (o !== void 0)
        for (var I = 0; I < o.length; I++)
          h.push(st, z(Ge(o[I])), Ye);
      return {
        bootstrapChunks: h,
        startInlineScript: d,
        placeholderPrefix: D(s + "P:"),
        segmentPrefix: D(s + "S:"),
        boundaryPrefix: s + "B:",
        idPrefix: s,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var lt = 0, ut = 1, qt = 2, en = 3, Pn = 4, Jn = 5, an = 6, mn = 7;
    function jt(r, e) {
      return {
        insertionMode: r,
        selectedValue: e
      };
    }
    function In(r) {
      var e = r === "http://www.w3.org/2000/svg" ? qt : r === "http://www.w3.org/1998/Math/MathML" ? en : lt;
      return jt(e, null);
    }
    function Bn(r, e, t) {
      switch (e) {
        case "select":
          return jt(ut, t.value != null ? t.value : t.defaultValue);
        case "svg":
          return jt(qt, null);
        case "math":
          return jt(en, null);
        case "foreignObject":
          return jt(ut, null);
        // Table parents are special in that their children can only be created at all if they're
        // wrapped in a table parent. So we need to encode that we're entering this mode.
        case "table":
          return jt(Pn, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return jt(Jn, null);
        case "colgroup":
          return jt(mn, null);
        case "tr":
          return jt(an, null);
      }
      return r.insertionMode >= Pn || r.insertionMode === lt ? jt(ut, null) : r;
    }
    var Zn = null;
    function tn(r) {
      var e = r.nextSuspenseID++;
      return D(r.boundaryPrefix + e.toString(16));
    }
    function yn(r, e, t) {
      var n = r.idPrefix, o = ":" + n + "R" + e;
      return t > 0 && (o += "H" + t.toString(32)), o + ":";
    }
    function Bt(r) {
      return Ge(r);
    }
    var Qn = D("<!-- -->");
    function It(r, e, t, n) {
      return e === "" ? n : (n && r.push(Qn), r.push(z(Bt(e))), !0);
    }
    function Yt(r, e, t, n) {
      t && n && r.push(Qn);
    }
    var a = /* @__PURE__ */ new Map();
    function u(r) {
      var e = a.get(r);
      if (e !== void 0)
        return e;
      var t = D(Ge(_n(r)));
      return a.set(r, t), t;
    }
    var g = D(' style="'), S = D(":"), L = D(";");
    function P(r, e, t) {
      if (typeof t != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var n = !0;
      for (var o in t)
        if (V.call(t, o)) {
          var s = t[o];
          if (!(s == null || typeof s == "boolean" || s === "")) {
            var d = void 0, h = void 0, x = o.indexOf("--") === 0;
            x ? (d = z(Ge(o)), X(s, o), h = z(Ge(("" + s).trim()))) : (rn(o, s), d = u(o), typeof s == "number" ? s !== 0 && !V.call(nt, o) ? h = z(s + "px") : h = z("" + s) : (X(s, o), h = z(Ge(("" + s).trim())))), n ? (n = !1, r.push(g, d, S, h)) : r.push(L, d, S, h);
          }
        }
      n || r.push(pe);
    }
    var H = D(" "), Q = D('="'), pe = D('"'), be = D('=""');
    function ve(r, e, t, n) {
      switch (t) {
        case "style": {
          P(r, e, n);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        // These shouldn't be set as attributes on generic HTML elements.
        case "innerHTML":
        // Must use dangerouslySetInnerHTML instead.
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(t.length > 2 && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N"))
      ) {
        var o = tt(t);
        if (o !== null) {
          switch (typeof n) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return;
            case "boolean":
              if (!o.acceptsBooleans)
                return;
          }
          var s = o.attributeName, d = z(s);
          switch (o.type) {
            case oe:
              n && r.push(H, d, be);
              return;
            case me:
              n === !0 ? r.push(H, d, be) : n === !1 || r.push(H, d, Q, z(Ge(n)), pe);
              return;
            case He:
              isNaN(n) || r.push(H, d, Q, z(Ge(n)), pe);
              break;
            case we:
              !isNaN(n) && n >= 1 && r.push(H, d, Q, z(Ge(n)), pe);
              break;
            default:
              o.sanitizeURL && (O(n, s), n = "" + n, se(n)), r.push(H, d, Q, z(Ge(n)), pe);
          }
        } else if (Se(t)) {
          switch (typeof n) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return;
            case "boolean": {
              var h = t.toLowerCase().slice(0, 5);
              if (h !== "data-" && h !== "aria-")
                return;
            }
          }
          r.push(H, z(t), Q, z(Ge(n)), pe);
        }
      }
    }
    var Xe = D(">"), Ut = D("/>");
    function Nt(r, e, t) {
      if (e != null) {
        if (t != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof e != "object" || !("__html" in e))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var n = e.__html;
        n != null && (ie(n), r.push(z("" + n)));
      }
    }
    var Ht = !1, An = !1, Sn = !1, Kn = !1, Dn = !1, Un = !1, kn = !1;
    function Nn(r, e) {
      {
        var t = r[e];
        if (t != null) {
          var n = Re(t);
          r.multiple && !n ? c("The `%s` prop supplied to <select> must be an array if `multiple` is true.", e) : !r.multiple && n && c("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", e);
        }
      }
    }
    function Ia(r, e, t) {
      At("select", e), Nn(e, "value"), Nn(e, "defaultValue"), e.value !== void 0 && e.defaultValue !== void 0 && !Sn && (c("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Sn = !0), r.push(sn("select"));
      var n = null, o = null;
      for (var s in e)
        if (V.call(e, s)) {
          var d = e[s];
          if (d == null)
            continue;
          switch (s) {
            case "children":
              n = d;
              break;
            case "dangerouslySetInnerHTML":
              o = d;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ve(r, t, s, d);
              break;
          }
        }
      return r.push(Xe), Nt(r, o, n), n;
    }
    function Aa(r) {
      var e = "";
      return b.Children.forEach(r, function(t) {
        t != null && (e += t, !Dn && typeof t != "string" && typeof t != "number" && (Dn = !0, c("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), e;
    }
    var xr = D(' selected=""');
    function bn(r, e, t, n) {
      var o = n.selectedValue;
      r.push(sn("option"));
      var s = null, d = null, h = null, x = null;
      for (var I in e)
        if (V.call(e, I)) {
          var G = e[I];
          if (G == null)
            continue;
          switch (I) {
            case "children":
              s = G;
              break;
            case "selected":
              h = G, kn || (c("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), kn = !0);
              break;
            case "dangerouslySetInnerHTML":
              x = G;
              break;
            // eslint-disable-next-line-no-fallthrough
            case "value":
              d = G;
            // We intentionally fallthrough to also set the attribute on the node.
            // eslint-disable-next-line-no-fallthrough
            default:
              ve(r, t, I, G);
              break;
          }
        }
      if (o != null) {
        var Z;
        if (d !== null ? (O(d, "value"), Z = "" + d) : (x !== null && (Un || (Un = !0, c("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), Z = Aa(s)), Re(o))
          for (var le = 0; le < o.length; le++) {
            O(o[le], "value");
            var Ce = "" + o[le];
            if (Ce === Z) {
              r.push(xr);
              break;
            }
          }
        else
          O(o, "select.value"), "" + o === Z && r.push(xr);
      } else h && r.push(xr);
      return r.push(Xe), Nt(r, x, s), s;
    }
    function Da(r, e, t) {
      At("input", e), e.checked !== void 0 && e.defaultChecked !== void 0 && !An && (c("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), An = !0), e.value !== void 0 && e.defaultValue !== void 0 && !Ht && (c("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), Ht = !0), r.push(sn("input"));
      var n = null, o = null, s = null, d = null;
      for (var h in e)
        if (V.call(e, h)) {
          var x = e[h];
          if (x == null)
            continue;
          switch (h) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            case "defaultChecked":
              d = x;
              break;
            case "defaultValue":
              o = x;
              break;
            case "checked":
              s = x;
              break;
            case "value":
              n = x;
              break;
            default:
              ve(r, t, h, x);
              break;
          }
        }
      return s !== null ? ve(r, t, "checked", s) : d !== null && ve(r, t, "checked", d), n !== null ? ve(r, t, "value", n) : o !== null && ve(r, t, "value", o), r.push(Ut), null;
    }
    function Cn(r, e, t) {
      At("textarea", e), e.value !== void 0 && e.defaultValue !== void 0 && !Kn && (c("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Kn = !0), r.push(sn("textarea"));
      var n = null, o = null, s = null;
      for (var d in e)
        if (V.call(e, d)) {
          var h = e[d];
          if (h == null)
            continue;
          switch (d) {
            case "children":
              s = h;
              break;
            case "value":
              n = h;
              break;
            case "defaultValue":
              o = h;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            // eslint-disable-next-line-no-fallthrough
            default:
              ve(r, t, d, h);
              break;
          }
        }
      if (n === null && o !== null && (n = o), r.push(Xe), s != null) {
        if (c("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), n != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Re(s)) {
          if (s.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          ie(s[0]), n = "" + s[0];
        }
        ie(s), n = "" + s;
      }
      return typeof n == "string" && n[0] === `
` && r.push(Wn), n !== null && (O(n, "value"), r.push(z(Bt("" + n)))), null;
    }
    function Yr(r, e, t, n) {
      r.push(sn(t));
      for (var o in e)
        if (V.call(e, o)) {
          var s = e[o];
          if (s == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(t + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              ve(r, n, o, s);
              break;
          }
        }
      return r.push(Ut), null;
    }
    function wr(r, e, t) {
      r.push(sn("menuitem"));
      for (var n in e)
        if (V.call(e, n)) {
          var o = e[n];
          if (o == null)
            continue;
          switch (n) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              ve(r, t, n, o);
              break;
          }
        }
      return r.push(Xe), null;
    }
    function at(r, e, t) {
      r.push(sn("title"));
      var n = null;
      for (var o in e)
        if (V.call(e, o)) {
          var s = e[o];
          if (s == null)
            continue;
          switch (o) {
            case "children":
              n = s;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            // eslint-disable-next-line-no-fallthrough
            default:
              ve(r, t, o, s);
              break;
          }
        }
      r.push(Xe);
      {
        var d = Array.isArray(n) && n.length < 2 ? n[0] || null : n;
        Array.isArray(n) && n.length > 1 ? c("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : d != null && d.$$typeof != null ? c("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : d != null && typeof d != "string" && typeof d != "number" && c("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return n;
    }
    function Hn(r, e, t, n) {
      r.push(sn(t));
      var o = null, s = null;
      for (var d in e)
        if (V.call(e, d)) {
          var h = e[d];
          if (h == null)
            continue;
          switch (d) {
            case "children":
              o = h;
              break;
            case "dangerouslySetInnerHTML":
              s = h;
              break;
            default:
              ve(r, n, d, h);
              break;
          }
        }
      return r.push(Xe), Nt(r, s, o), typeof o == "string" ? (r.push(z(Bt(o))), null) : o;
    }
    function kr(r, e, t, n) {
      r.push(sn(t));
      var o = null, s = null;
      for (var d in e)
        if (V.call(e, d)) {
          var h = e[d];
          if (h == null)
            continue;
          switch (d) {
            case "children":
              o = h;
              break;
            case "dangerouslySetInnerHTML":
              s = h;
              break;
            case "style":
              P(r, n, h);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              Se(d) && typeof h != "function" && typeof h != "symbol" && r.push(H, z(d), Q, z(Ge(h)), pe);
              break;
          }
        }
      return r.push(Xe), Nt(r, s, o), o;
    }
    var Wn = D(`
`);
    function Mn(r, e, t, n) {
      r.push(sn(t));
      var o = null, s = null;
      for (var d in e)
        if (V.call(e, d)) {
          var h = e[d];
          if (h == null)
            continue;
          switch (d) {
            case "children":
              o = h;
              break;
            case "dangerouslySetInnerHTML":
              s = h;
              break;
            default:
              ve(r, n, d, h);
              break;
          }
        }
      if (r.push(Xe), s != null) {
        if (o != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof s != "object" || !("__html" in s))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var x = s.__html;
        x != null && (typeof x == "string" && x.length > 0 && x[0] === `
` ? r.push(Wn, z(x)) : (ie(x), r.push(z("" + x))));
      }
      return typeof o == "string" && o[0] === `
` && r.push(Wn), o;
    }
    var Cr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, On = /* @__PURE__ */ new Map();
    function sn(r) {
      var e = On.get(r);
      if (e === void 0) {
        if (!Cr.test(r))
          throw new Error("Invalid tag: " + r);
        e = D("<" + r), On.set(r, e);
      }
      return e;
    }
    var Xr = D("<!DOCTYPE html>");
    function ir(r, e, t, n, o) {
      switch (ze(e, t), kt(e, t), ne(e, t, null), !t.suppressContentEditableWarning && t.contentEditable && t.children != null && c("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), o.insertionMode !== qt && o.insertionMode !== en && e.indexOf("-") === -1 && typeof t.is != "string" && e.toLowerCase() !== e && c("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e) {
        // Special tags
        case "select":
          return Ia(r, t, n);
        case "option":
          return bn(r, t, n, o);
        case "textarea":
          return Cn(r, t, n);
        case "input":
          return Da(r, t, n);
        case "menuitem":
          return wr(r, t, n);
        case "title":
          return at(r, t, n);
        // Newline eating tags
        case "listing":
        case "pre":
          return Mn(r, t, e, n);
        // Omitted close tags
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return Yr(r, t, e, n);
        // These are reserved SVG and MathML elements, that are never custom elements.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Hn(r, t, e, n);
        case "html":
          return o.insertionMode === lt && r.push(Xr), Hn(r, t, e, n);
        default:
          return e.indexOf("-") === -1 && typeof t.is != "string" ? Hn(r, t, e, n) : kr(r, t, e, n);
      }
    }
    var Po = D("</"), Er = D(">");
    function Io(r, e, t) {
      switch (e) {
        // Omitted close tags
        // TODO: Instead of repeating this switch we could try to pass a flag from above.
        // That would require returning a tuple. Which might be ok if it gets inlined.
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          r.push(Po, z(e), Er);
      }
    }
    function Ma(r, e) {
      for (var t = e.bootstrapChunks, n = 0; n < t.length - 1; n++)
        R(r, t[n]);
      return n < t.length ? W(r, t[n]) : !0;
    }
    var Oa = D('<template id="'), Tr = D('"></template>');
    function Ao(r, e, t) {
      R(r, Oa), R(r, e.placeholderPrefix);
      var n = z(t.toString(16));
      return R(r, n), W(r, Tr);
    }
    var sr = D("<!--$-->"), Jr = D('<!--$?--><template id="'), La = D('"></template>'), qn = D("<!--$!-->"), Zr = D("<!--/$-->"), Qr = D("<template"), er = D('"'), lr = D(' data-dgst="'), Rr = D(' data-msg="'), Do = D(' data-stck="'), Mo = D("></template>");
    function Oo(r, e) {
      return W(r, sr);
    }
    function Fr(r, e, t) {
      if (R(r, Jr), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return R(r, t), W(r, La);
    }
    function Xt(r, e, t, n, o) {
      var s;
      return s = W(r, qn), R(r, Qr), t && (R(r, lr), R(r, z(Ge(t))), R(r, er)), n && (R(r, Rr), R(r, z(Ge(n))), R(r, er)), o && (R(r, Do), R(r, z(Ge(o))), R(r, er)), s = W(r, Mo), s;
    }
    function Lo(r, e) {
      return W(r, Zr);
    }
    function _r(r, e) {
      return W(r, Zr);
    }
    function ja(r, e) {
      return W(r, Zr);
    }
    var jo = D('<div hidden id="'), Pr = D('">'), Bo = D("</div>"), Uo = D('<svg aria-hidden="true" style="display:none" id="'), Ir = D('">'), Ar = D("</svg>"), No = D('<math aria-hidden="true" style="display:none" id="'), Ho = D('">'), Wo = D("</math>"), Kr = D('<table hidden id="'), zo = D('">'), i = D("</table>"), l = D('<table hidden><tbody id="'), p = D('">'), m = D("</tbody></table>"), j = D('<table hidden><tr id="'), M = D('">'), $ = D("</tr></table>"), K = D('<table hidden><colgroup id="'), xe = D('">'), Oe = D("</colgroup></table>");
    function Ae(r, e, t, n) {
      switch (t.insertionMode) {
        case lt:
        case ut:
          return R(r, jo), R(r, e.segmentPrefix), R(r, z(n.toString(16))), W(r, Pr);
        case qt:
          return R(r, Uo), R(r, e.segmentPrefix), R(r, z(n.toString(16))), W(r, Ir);
        case en:
          return R(r, No), R(r, e.segmentPrefix), R(r, z(n.toString(16))), W(r, Ho);
        case Pn:
          return R(r, Kr), R(r, e.segmentPrefix), R(r, z(n.toString(16))), W(r, zo);
        // TODO: For the rest of these, there will be extra wrapper nodes that never
        // get deleted from the document. We need to delete the table too as part
        // of the injected scripts. They are invisible though so it's not too terrible
        // and it's kind of an edge case to suspend in a table. Totally supported though.
        case Jn:
          return R(r, l), R(r, e.segmentPrefix), R(r, z(n.toString(16))), W(r, p);
        case an:
          return R(r, j), R(r, e.segmentPrefix), R(r, z(n.toString(16))), W(r, M);
        case mn:
          return R(r, K), R(r, e.segmentPrefix), R(r, z(n.toString(16))), W(r, xe);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function it(r, e) {
      switch (e.insertionMode) {
        case lt:
        case ut:
          return W(r, Bo);
        case qt:
          return W(r, Ar);
        case en:
          return W(r, Wo);
        case Pn:
          return W(r, i);
        case Jn:
          return W(r, m);
        case an:
          return W(r, $);
        case mn:
          return W(r, Oe);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Jt = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", ln = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', un = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Dr = D(Jt + ';$RS("'), $o = D('$RS("'), ur = D('","'), hs = D('")<\/script>');
    function gs(r, e, t) {
      R(r, e.startInlineScript), e.sentCompleteSegmentFunction ? R(r, $o) : (e.sentCompleteSegmentFunction = !0, R(r, Dr)), R(r, e.segmentPrefix);
      var n = z(t.toString(16));
      return R(r, n), R(r, ur), R(r, e.placeholderPrefix), R(r, n), W(r, hs);
    }
    var Ba = D(ln + ';$RC("'), vs = D('$RC("'), ms = D('","'), Ei = D('")<\/script>');
    function Ti(r, e, t, n) {
      if (R(r, e.startInlineScript), e.sentCompleteBoundaryFunction ? R(r, vs) : (e.sentCompleteBoundaryFunction = !0, R(r, Ba)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var o = z(n.toString(16));
      return R(r, t), R(r, ms), R(r, e.segmentPrefix), R(r, o), W(r, Ei);
    }
    var ys = D(un + ';$RX("'), Ss = D('$RX("'), bs = D('"'), xs = D(")<\/script>"), nn = D(",");
    function ws(r, e, t, n, o, s) {
      if (R(r, e.startInlineScript), e.sentClientRenderFunction ? R(r, Ss) : (e.sentClientRenderFunction = !0, R(r, ys)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return R(r, t), R(r, bs), (n || o || s) && (R(r, nn), R(r, z(Vo(n || "")))), (o || s) && (R(r, nn), R(r, z(Vo(o || "")))), s && (R(r, nn), R(r, z(Vo(s)))), W(r, xs);
    }
    var Ri = /[<\u2028\u2029]/g;
    function Vo(r) {
      var e = JSON.stringify(r);
      return e.replace(Ri, function(t) {
        switch (t) {
          // santizing breaking out of strings and script tags
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var cn = Object.assign, Fi = Symbol.for("react.element"), Go = Symbol.for("react.portal"), Yo = Symbol.for("react.fragment"), Xo = Symbol.for("react.strict_mode"), Jo = Symbol.for("react.profiler"), qr = Symbol.for("react.provider"), eo = Symbol.for("react.context"), Mr = Symbol.for("react.forward_ref"), Ua = Symbol.for("react.suspense"), Na = Symbol.for("react.suspense_list"), Ha = Symbol.for("react.memo"), Zo = Symbol.for("react.lazy"), _i = Symbol.for("react.scope"), ks = Symbol.for("react.debug_trace_mode"), Cs = Symbol.for("react.legacy_hidden"), Es = Symbol.for("react.default_value"), Wa = Symbol.iterator, yt = "@@iterator";
    function to(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = Wa && r[Wa] || r[yt];
      return typeof e == "function" ? e : null;
    }
    function Pi(r, e, t) {
      var n = r.displayName;
      if (n)
        return n;
      var o = e.displayName || e.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function za(r) {
      return r.displayName || "Context";
    }
    function pt(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case Yo:
          return "Fragment";
        case Go:
          return "Portal";
        case Jo:
          return "Profiler";
        case Xo:
          return "StrictMode";
        case Ua:
          return "Suspense";
        case Na:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case eo:
            var e = r;
            return za(e) + ".Consumer";
          case qr:
            var t = r;
            return za(t._context) + ".Provider";
          case Mr:
            return Pi(r, r.render, "ForwardRef");
          case Ha:
            var n = r.displayName || null;
            return n !== null ? n : pt(r.type) || "Memo";
          case Zo: {
            var o = r, s = o._payload, d = o._init;
            try {
              return pt(d(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Or = 0, $a, Va, Ga, Ya, Ii, Ai, Qo;
    function Ko() {
    }
    Ko.__reactDisabledLog = !0;
    function no() {
      {
        if (Or === 0) {
          $a = console.log, Va = console.info, Ga = console.warn, Ya = console.error, Ii = console.group, Ai = console.groupCollapsed, Qo = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Ko,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        Or++;
      }
    }
    function Xa() {
      {
        if (Or--, Or === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: cn({}, r, {
              value: $a
            }),
            info: cn({}, r, {
              value: Va
            }),
            warn: cn({}, r, {
              value: Ga
            }),
            error: cn({}, r, {
              value: Ya
            }),
            group: cn({}, r, {
              value: Ii
            }),
            groupCollapsed: cn({}, r, {
              value: Ai
            }),
            groupEnd: cn({}, r, {
              value: Qo
            })
          });
        }
        Or < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Lr = y.ReactCurrentDispatcher, Ja;
    function cr(r, e, t) {
      {
        if (Ja === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            Ja = n && n[1] || "";
          }
        return `
` + Ja + r;
      }
    }
    var Za = !1, ro;
    {
      var Ts = typeof WeakMap == "function" ? WeakMap : Map;
      ro = new Ts();
    }
    function oo(r, e) {
      if (!r || Za)
        return "";
      {
        var t = ro.get(r);
        if (t !== void 0)
          return t;
      }
      var n;
      Za = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Lr.current, Lr.current = null, no();
      try {
        if (e) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (Qe) {
              n = Qe;
            }
            Reflect.construct(r, [], d);
          } else {
            try {
              d.call();
            } catch (Qe) {
              n = Qe;
            }
            r.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qe) {
            n = Qe;
          }
          r();
        }
      } catch (Qe) {
        if (Qe && n && typeof Qe.stack == "string") {
          for (var h = Qe.stack.split(`
`), x = n.stack.split(`
`), I = h.length - 1, G = x.length - 1; I >= 1 && G >= 0 && h[I] !== x[G]; )
            G--;
          for (; I >= 1 && G >= 0; I--, G--)
            if (h[I] !== x[G]) {
              if (I !== 1 || G !== 1)
                do
                  if (I--, G--, G < 0 || h[I] !== x[G]) {
                    var Z = `
` + h[I].replace(" at new ", " at ");
                    return r.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", r.displayName)), typeof r == "function" && ro.set(r, Z), Z;
                  }
                while (I >= 1 && G >= 0);
              break;
            }
        }
      } finally {
        Za = !1, Lr.current = s, Xa(), Error.prepareStackTrace = o;
      }
      var le = r ? r.displayName || r.name : "", Ce = le ? cr(le) : "";
      return typeof r == "function" && ro.set(r, Ce), Ce;
    }
    function Di(r, e, t) {
      return oo(r, !0);
    }
    function Qa(r, e, t) {
      return oo(r, !1);
    }
    function qo(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function ea(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return oo(r, qo(r));
      if (typeof r == "string")
        return cr(r);
      switch (r) {
        case Ua:
          return cr("Suspense");
        case Na:
          return cr("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case Mr:
            return Qa(r.render);
          case Ha:
            return ea(r.type, e, t);
          case Zo: {
            var n = r, o = n._payload, s = n._init;
            try {
              return ea(s(o), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ta = {}, ao = y.ReactDebugCurrentFrame;
    function io(r) {
      if (r) {
        var e = r._owner, t = ea(r.type, r._source, e ? e.type : null);
        ao.setExtraStackFrame(t);
      } else
        ao.setExtraStackFrame(null);
    }
    function Mi(r, e, t, n, o) {
      {
        var s = Function.call.bind(V);
        for (var d in r)
          if (s(r, d)) {
            var h = void 0;
            try {
              if (typeof r[d] != "function") {
                var x = Error((n || "React class") + ": " + t + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              h = r[d](e, d, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              h = I;
            }
            h && !(h instanceof Error) && (io(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, d, typeof h), io(null)), h instanceof Error && !(h.message in ta) && (ta[h.message] = !0, io(o), c("Failed %s type: %s", t, h.message), io(null));
          }
      }
    }
    var dr;
    dr = {};
    var na = {};
    Object.freeze(na);
    function tr(r, e) {
      {
        var t = r.contextTypes;
        if (!t)
          return na;
        var n = {};
        for (var o in t)
          n[o] = e[o];
        {
          var s = pt(r) || "Unknown";
          Mi(t, n, "context", s);
        }
        return n;
      }
    }
    function Ka(r, e, t, n) {
      {
        if (typeof r.getChildContext != "function") {
          {
            var o = pt(e) || "Unknown";
            dr[o] || (dr[o] = !0, c("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", o, o));
          }
          return t;
        }
        var s = r.getChildContext();
        for (var d in s)
          if (!(d in n))
            throw new Error((pt(e) || "Unknown") + '.getChildContext(): key "' + d + '" is not defined in childContextTypes.');
        {
          var h = pt(e) || "Unknown";
          Mi(n, s, "child context", h);
        }
        return cn({}, t, s);
      }
    }
    var fr;
    fr = {};
    var ra = null, nr = null;
    function oa(r) {
      r.context._currentValue = r.parentValue;
    }
    function aa(r) {
      r.context._currentValue = r.value;
    }
    function so(r, e) {
      if (r !== e) {
        oa(r);
        var t = r.parent, n = e.parent;
        if (t === null) {
          if (n !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (n === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          so(t, n);
        }
        aa(e);
      }
    }
    function lo(r) {
      oa(r);
      var e = r.parent;
      e !== null && lo(e);
    }
    function Oi(r) {
      var e = r.parent;
      e !== null && Oi(e), aa(r);
    }
    function Li(r, e) {
      oa(r);
      var t = r.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === e.depth ? so(t, e) : Li(t, e);
    }
    function ji(r, e) {
      var t = e.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      r.depth === t.depth ? so(r, t) : ji(r, t), aa(e);
    }
    function rr(r) {
      var e = nr, t = r;
      e !== t && (e === null ? Oi(t) : t === null ? lo(e) : e.depth === t.depth ? so(e, t) : e.depth > t.depth ? Li(e, t) : ji(e, t), nr = t);
    }
    function qa(r, e) {
      var t;
      t = r._currentValue, r._currentValue = e, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== fr && c("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = fr;
      var n = nr, o = {
        parent: n,
        depth: n === null ? 0 : n.depth + 1,
        context: r,
        parentValue: t,
        value: e
      };
      return nr = o, o;
    }
    function Rs(r) {
      var e = nr;
      if (e === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      e.context !== r && c("The parent context is not the expected context. This is probably a bug in React.");
      {
        var t = e.parentValue;
        t === Es ? e.context._currentValue = e.context._defaultValue : e.context._currentValue = t, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== fr && c("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = fr;
      }
      return nr = e.parent;
    }
    function Bi() {
      return nr;
    }
    function jr(r) {
      var e = r._currentValue;
      return e;
    }
    function uo(r) {
      return r._reactInternals;
    }
    function ei(r, e) {
      r._reactInternals = e;
    }
    var ia = {}, sa = {}, la, Br, co, fo, ua, po, ca, da, ti;
    {
      la = /* @__PURE__ */ new Set(), Br = /* @__PURE__ */ new Set(), co = /* @__PURE__ */ new Set(), ca = /* @__PURE__ */ new Set(), fo = /* @__PURE__ */ new Set(), da = /* @__PURE__ */ new Set(), ti = /* @__PURE__ */ new Set();
      var Ui = /* @__PURE__ */ new Set();
      po = function(r, e) {
        if (!(r === null || typeof r == "function")) {
          var t = e + "_" + r;
          Ui.has(t) || (Ui.add(t), c("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", e, r));
        }
      }, ua = function(r, e) {
        if (e === void 0) {
          var t = pt(r) || "Component";
          fo.has(t) || (fo.add(t), c("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", t));
        }
      };
    }
    function Ni(r, e) {
      {
        var t = r.constructor, n = t && pt(t) || "ReactClass", o = n + "." + e;
        if (ia[o])
          return;
        c(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, e, e, n), ia[o] = !0;
      }
    }
    var Hi = {
      isMounted: function(r) {
        return !1;
      },
      enqueueSetState: function(r, e, t) {
        var n = uo(r);
        n.queue === null ? Ni(r, "setState") : (n.queue.push(e), t != null && po(t, "setState"));
      },
      enqueueReplaceState: function(r, e, t) {
        var n = uo(r);
        n.replace = !0, n.queue = [e], t != null && po(t, "setState");
      },
      enqueueForceUpdate: function(r, e) {
        var t = uo(r);
        t.queue === null ? Ni(r, "forceUpdate") : e != null && po(e, "setState");
      }
    };
    function Fs(r, e, t, n, o) {
      var s = t(o, n);
      ua(e, s);
      var d = s == null ? n : cn({}, n, s);
      return d;
    }
    function Wi(r, e, t) {
      var n = na, o = r.contextType;
      if ("contextType" in r) {
        var s = (
          // Allow null for conditional declaration
          o === null || o !== void 0 && o.$$typeof === eo && o._context === void 0
        );
        if (!s && !ti.has(r)) {
          ti.add(r);
          var d = "";
          o === void 0 ? d = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof o != "object" ? d = " However, it is set to a " + typeof o + "." : o.$$typeof === qr ? d = " Did you accidentally pass the Context.Provider instead?" : o._context !== void 0 ? d = " Did you accidentally pass the Context.Consumer instead?" : d = " However, it is set to an object with keys {" + Object.keys(o).join(", ") + "}.", c("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", pt(r) || "Component", d);
        }
      }
      typeof o == "object" && o !== null ? n = jr(o) : n = t;
      var h = new r(e, n);
      {
        if (typeof r.getDerivedStateFromProps == "function" && (h.state === null || h.state === void 0)) {
          var x = pt(r) || "Component";
          la.has(x) || (la.add(x), c("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, h.state === null ? "null" : "undefined", x));
        }
        if (typeof r.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function") {
          var I = null, G = null, Z = null;
          if (typeof h.componentWillMount == "function" && h.componentWillMount.__suppressDeprecationWarning !== !0 ? I = "componentWillMount" : typeof h.UNSAFE_componentWillMount == "function" && (I = "UNSAFE_componentWillMount"), typeof h.componentWillReceiveProps == "function" && h.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? G = "componentWillReceiveProps" : typeof h.UNSAFE_componentWillReceiveProps == "function" && (G = "UNSAFE_componentWillReceiveProps"), typeof h.componentWillUpdate == "function" && h.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Z = "componentWillUpdate" : typeof h.UNSAFE_componentWillUpdate == "function" && (Z = "UNSAFE_componentWillUpdate"), I !== null || G !== null || Z !== null) {
            var le = pt(r) || "Component", Ce = typeof r.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            co.has(le) || (co.add(le), c(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, le, Ce, I !== null ? `
  ` + I : "", G !== null ? `
  ` + G : "", Z !== null ? `
  ` + Z : ""));
          }
        }
      }
      return h;
    }
    function _s(r, e, t) {
      {
        var n = pt(e) || "Component", o = r.render;
        o || (e.prototype && typeof e.prototype.render == "function" ? c("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", n) : c("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", n)), r.getInitialState && !r.getInitialState.isReactClassApproved && !r.state && c("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", n), r.getDefaultProps && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", n), r.propTypes && c("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", n), r.contextType && c("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", n), r.contextTypes && c("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", n), e.contextType && e.contextTypes && !da.has(e) && (da.add(e), c("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", n)), typeof r.componentShouldUpdate == "function" && c("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", n), e.prototype && e.prototype.isPureReactComponent && typeof r.shouldComponentUpdate < "u" && c("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", pt(e) || "A pure component"), typeof r.componentDidUnmount == "function" && c("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", n), typeof r.componentDidReceiveProps == "function" && c("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", n), typeof r.componentWillRecieveProps == "function" && c("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", n), typeof r.UNSAFE_componentWillRecieveProps == "function" && c("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", n);
        var s = r.props !== t;
        r.props !== void 0 && s && c("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", n, n), r.defaultProps && c("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", n, n), typeof r.getSnapshotBeforeUpdate == "function" && typeof r.componentDidUpdate != "function" && !Br.has(e) && (Br.add(e), c("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", pt(e))), typeof r.getDerivedStateFromProps == "function" && c("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof r.getDerivedStateFromError == "function" && c("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof e.getSnapshotBeforeUpdate == "function" && c("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", n);
        var d = r.state;
        d && (typeof d != "object" || Re(d)) && c("%s.state: must be set to an object or null", n), typeof r.getChildContext == "function" && typeof e.childContextTypes != "object" && c("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", n);
      }
    }
    function Ps(r, e) {
      var t = e.state;
      if (typeof e.componentWillMount == "function") {
        if (e.componentWillMount.__suppressDeprecationWarning !== !0) {
          var n = pt(r) || "Unknown";
          sa[n] || (E(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            n
          ), sa[n] = !0);
        }
        e.componentWillMount();
      }
      typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && (c("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", pt(r) || "Component"), Hi.enqueueReplaceState(e, e.state, null));
    }
    function ni(r, e, t, n) {
      if (r.queue !== null && r.queue.length > 0) {
        var o = r.queue, s = r.replace;
        if (r.queue = null, r.replace = !1, s && o.length === 1)
          e.state = o[0];
        else {
          for (var d = s ? o[0] : e.state, h = !0, x = s ? 1 : 0; x < o.length; x++) {
            var I = o[x], G = typeof I == "function" ? I.call(e, d, t, n) : I;
            G != null && (h ? (h = !1, d = cn({}, d, G)) : cn(d, G));
          }
          e.state = d;
        }
      } else
        r.queue = null;
    }
    function ho(r, e, t, n) {
      _s(r, e, t);
      var o = r.state !== void 0 ? r.state : null;
      r.updater = Hi, r.props = t, r.state = o;
      var s = {
        queue: [],
        replace: !1
      };
      ei(r, s);
      var d = e.contextType;
      if (typeof d == "object" && d !== null ? r.context = jr(d) : r.context = n, r.state === t) {
        var h = pt(e) || "Component";
        ca.has(h) || (ca.add(h), c("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", h));
      }
      var x = e.getDerivedStateFromProps;
      typeof x == "function" && (r.state = Fs(r, e, x, o, t)), typeof e.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function" && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function") && (Ps(e, r), ni(s, r, t, n));
    }
    var Is = {
      id: 1,
      overflow: ""
    };
    function As(r) {
      var e = r.overflow, t = r.id, n = t & ~Ds(t);
      return n.toString(32) + e;
    }
    function ri(r, e, t) {
      var n = r.id, o = r.overflow, s = fa(n) - 1, d = n & ~(1 << s), h = t + 1, x = fa(e) + s;
      if (x > 30) {
        var I = s - s % 5, G = (1 << I) - 1, Z = (d & G).toString(32), le = d >> I, Ce = s - I, Qe = fa(e) + Ce, Ot = h << Ce, Sr = Ot | le, br = Z + o;
        return {
          id: 1 << Qe | Sr,
          overflow: br
        };
      } else {
        var Yn = h << s, Vr = Yn | d, ul = o;
        return {
          id: 1 << x | Vr,
          overflow: ul
        };
      }
    }
    function fa(r) {
      return 32 - Ms(r);
    }
    function Ds(r) {
      return 1 << fa(r) - 1;
    }
    var Ms = Math.clz32 ? Math.clz32 : oi, Os = Math.log, zn = Math.LN2;
    function oi(r) {
      var e = r >>> 0;
      return e === 0 ? 32 : 31 - (Os(e) / zn | 0) | 0;
    }
    function pa(r, e) {
      return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
    }
    var ct = typeof Object.is == "function" ? Object.is : pa, dn = null, Ur = null, pr = null, Je = null, or = !1, ha = !1, fn = 0, pn = null, Ln = 0, Ls = 25, En = !1, ar;
    function hr() {
      if (dn === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return En && c("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), dn;
    }
    function js(r, e) {
      if (e === null)
        return c("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ar), !1;
      r.length !== e.length && c(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ar, "[" + r.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var t = 0; t < e.length && t < r.length; t++)
        if (!ct(r[t], e[t]))
          return !1;
      return !0;
    }
    function ai() {
      if (Ln > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function go() {
      return Je === null ? pr === null ? (or = !1, pr = Je = ai()) : (or = !0, Je = pr) : Je.next === null ? (or = !1, Je = Je.next = ai()) : (or = !0, Je = Je.next), Je;
    }
    function Bs(r, e) {
      dn = e, Ur = r, En = !1, fn = 0;
    }
    function Us(r, e, t, n) {
      for (; ha; )
        ha = !1, fn = 0, Ln += 1, Je = null, t = r(e, n);
      return ii(), t;
    }
    function ga() {
      var r = fn !== 0;
      return r;
    }
    function ii() {
      En = !1, dn = null, Ur = null, ha = !1, pr = null, Ln = 0, pn = null, Je = null;
    }
    function zi(r) {
      return En && c("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), jr(r);
    }
    function $i(r) {
      return ar = "useContext", hr(), jr(r);
    }
    function si(r, e) {
      return typeof e == "function" ? e(r) : e;
    }
    function Ns(r) {
      return ar = "useState", Vi(
        si,
        // useReducer has a special case to support lazy useState initializers
        r
      );
    }
    function Vi(r, e, t) {
      if (r !== si && (ar = "useReducer"), dn = hr(), Je = go(), or) {
        var n = Je.queue, o = n.dispatch;
        if (pn !== null) {
          var s = pn.get(n);
          if (s !== void 0) {
            pn.delete(n);
            var d = Je.memoizedState, h = s;
            do {
              var x = h.action;
              En = !0, d = r(d, x), En = !1, h = h.next;
            } while (h !== null);
            return Je.memoizedState = d, [d, o];
          }
        }
        return [Je.memoizedState, o];
      } else {
        En = !0;
        var I;
        r === si ? I = typeof e == "function" ? e() : e : I = t !== void 0 ? t(e) : e, En = !1, Je.memoizedState = I;
        var G = Je.queue = {
          last: null,
          dispatch: null
        }, Z = G.dispatch = zs.bind(null, dn, G);
        return [Je.memoizedState, Z];
      }
    }
    function Gi(r, e) {
      dn = hr(), Je = go();
      var t = e === void 0 ? null : e;
      if (Je !== null) {
        var n = Je.memoizedState;
        if (n !== null && t !== null) {
          var o = n[1];
          if (js(t, o))
            return n[0];
        }
      }
      En = !0;
      var s = r();
      return En = !1, Je.memoizedState = [s, t], s;
    }
    function Hs(r) {
      dn = hr(), Je = go();
      var e = Je.memoizedState;
      if (e === null) {
        var t = {
          current: r
        };
        return Object.seal(t), Je.memoizedState = t, t;
      } else
        return e;
    }
    function Ws(r, e) {
      ar = "useLayoutEffect", c("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function zs(r, e, t) {
      if (Ln >= Ls)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (r === dn) {
        ha = !0;
        var n = {
          action: t,
          next: null
        };
        pn === null && (pn = /* @__PURE__ */ new Map());
        var o = pn.get(e);
        if (o === void 0)
          pn.set(e, n);
        else {
          for (var s = o; s.next !== null; )
            s = s.next;
          s.next = n;
        }
      }
    }
    function $s(r, e) {
      return Gi(function() {
        return r;
      }, e);
    }
    function Vs(r, e, t) {
      return hr(), e(r._source);
    }
    function Gs(r, e, t) {
      if (t === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return t();
    }
    function va(r) {
      return hr(), r;
    }
    function Yi() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function li() {
      return hr(), [!1, Yi];
    }
    function Xi() {
      var r = Ur, e = As(r.treeContext), t = vo;
      if (t === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var n = fn++;
      return yn(t, e, n);
    }
    function ma() {
    }
    var ya = {
      readContext: zi,
      useContext: $i,
      useMemo: Gi,
      useReducer: Vi,
      useRef: Hs,
      useState: Ns,
      useInsertionEffect: ma,
      useLayoutEffect: Ws,
      useCallback: $s,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: ma,
      // Effects are not run in the server environment.
      useEffect: ma,
      // Debugging effect
      useDebugValue: ma,
      useDeferredValue: va,
      useTransition: li,
      useId: Xi,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Vs,
      useSyncExternalStore: Gs
    }, vo = null;
    function Sa(r) {
      vo = r;
    }
    function Nr(r) {
      try {
        var e = "", t = r;
        do {
          switch (t.tag) {
            case 0:
              e += cr(t.type, null, null);
              break;
            case 1:
              e += Qa(t.type, null, null);
              break;
            case 2:
              e += Di(t.type, null, null);
              break;
          }
          t = t.parent;
        } while (t);
        return e;
      } catch (n) {
        return `
Error generating stack: ` + n.message + `
` + n.stack;
      }
    }
    var ba = y.ReactCurrentDispatcher, xa = y.ReactDebugCurrentFrame, wa = 0, Hr = 1, ui = 2, gr = 3, Ji = 4, Ys = 0, Wr = 1, zr = 2, Xs = 12800;
    function Js(r) {
      return console.error(r), null;
    }
    function vr() {
    }
    function ka(r, e, t, n, o, s, d, h, x) {
      var I = [], G = /* @__PURE__ */ new Set(), Z = {
        destination: null,
        responseState: e,
        progressiveChunkSize: n === void 0 ? Xs : n,
        status: Ys,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: G,
        pingedTasks: I,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: o === void 0 ? Js : o,
        onAllReady: s === void 0 ? vr : s,
        onShellReady: d === void 0 ? vr : d,
        onShellError: h === void 0 ? vr : h,
        onFatalError: x === void 0 ? vr : x
      }, le = mo(
        Z,
        0,
        null,
        t,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      le.parentFlushed = !0;
      var Ce = mr(Z, r, null, le, G, na, ra, Is);
      return I.push(Ce), Z;
    }
    function $n(r, e) {
      var t = r.pingedTasks;
      t.push(e), t.length === 1 && _(function() {
        return bi(r);
      });
    }
    function ci(r, e) {
      return {
        id: Zn,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: e,
        errorDigest: null
      };
    }
    function mr(r, e, t, n, o, s, d, h) {
      r.allPendingTasks++, t === null ? r.pendingRootTasks++ : t.pendingTasks++;
      var x = {
        node: e,
        ping: function() {
          return $n(r, x);
        },
        blockedBoundary: t,
        blockedSegment: n,
        abortSet: o,
        legacyContext: s,
        context: d,
        treeContext: h
      };
      return x.componentStack = null, o.add(x), x;
    }
    function mo(r, e, t, n, o, s) {
      return {
        status: wa,
        id: -1,
        // lazily assigned later
        index: e,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: n,
        boundary: t,
        lastPushedText: o,
        textEmbedded: s
      };
    }
    var Vn = null;
    function jn() {
      return Vn === null || Vn.componentStack === null ? "" : Nr(Vn.componentStack);
    }
    function Gn(r, e) {
      r.componentStack = {
        tag: 0,
        parent: r.componentStack,
        type: e
      };
    }
    function Ca(r, e) {
      r.componentStack = {
        tag: 1,
        parent: r.componentStack,
        type: e
      };
    }
    function yo(r, e) {
      r.componentStack = {
        tag: 2,
        parent: r.componentStack,
        type: e
      };
    }
    function Tn(r) {
      r.componentStack === null ? c("Unexpectedly popped too many stack frames. This is a bug in React.") : r.componentStack = r.componentStack.parent;
    }
    var So = null;
    function di(r, e) {
      {
        var t;
        typeof e == "string" ? t = e : e && typeof e.message == "string" ? t = e.message : t = String(e);
        var n = So || jn();
        So = null, r.errorMessage = t, r.errorComponentStack = n;
      }
    }
    function bo(r, e) {
      var t = r.onError(e);
      if (t != null && typeof t != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
      return t;
    }
    function xo(r, e) {
      var t = r.onShellError;
      t(e);
      var n = r.onFatalError;
      n(e), r.destination !== null ? (r.status = zr, A(r.destination, e)) : (r.status = Wr, r.fatalError = e);
    }
    function Zi(r, e, t) {
      Gn(e, "Suspense");
      var n = e.blockedBoundary, o = e.blockedSegment, s = t.fallback, d = t.children, h = /* @__PURE__ */ new Set(), x = ci(r, h), I = o.chunks.length, G = mo(
        r,
        I,
        x,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      o.children.push(G), o.lastPushedText = !1;
      var Z = mo(
        r,
        0,
        null,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      Z.parentFlushed = !0, e.blockedBoundary = x, e.blockedSegment = Z;
      try {
        if ($r(r, e, d), Yt(Z.chunks, r.responseState, Z.lastPushedText, Z.textEmbedded), Z.status = Hr, yr(x, Z), x.pendingTasks === 0) {
          Tn(e);
          return;
        }
      } catch (Ce) {
        Z.status = Ji, x.forceClientRender = !0, x.errorDigest = bo(r, Ce), di(x, Ce);
      } finally {
        e.blockedBoundary = n, e.blockedSegment = o;
      }
      var le = mr(r, s, n, G, h, e.legacyContext, e.context, e.treeContext);
      le.componentStack = e.componentStack, r.pingedTasks.push(le), Tn(e);
    }
    function Zs(r, e, t, n) {
      Gn(e, t);
      var o = e.blockedSegment, s = ir(o.chunks, t, n, r.responseState, o.formatContext);
      o.lastPushedText = !1;
      var d = o.formatContext;
      o.formatContext = Bn(d, t, n), $r(r, e, s), o.formatContext = d, Io(o.chunks, t), o.lastPushedText = !1, Tn(e);
    }
    function Qi(r) {
      return r.prototype && r.prototype.isReactComponent;
    }
    function wo(r, e, t, n, o) {
      var s = {};
      Bs(e, s);
      var d = t(n, o);
      return Us(t, n, d, o);
    }
    function fi(r, e, t, n, o) {
      var s = t.render();
      t.props !== o && (vi || c("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", pt(n) || "a component"), vi = !0);
      {
        var d = n.childContextTypes;
        if (d != null) {
          var h = e.legacyContext, x = Ka(t, n, h, d);
          e.legacyContext = x, Zt(r, e, s), e.legacyContext = h;
          return;
        }
      }
      Zt(r, e, s);
    }
    function Ki(r, e, t, n) {
      yo(e, t);
      var o = tr(t, e.legacyContext), s = Wi(t, n, o);
      ho(s, t, n, o), fi(r, e, s, t, n), Tn(e);
    }
    var pi = {}, ko = {}, hi = {}, gi = {}, vi = !1, qi = {}, es = !1, mi = !1, ts = !1;
    function Qs(r, e, t, n) {
      var o;
      if (o = tr(t, e.legacyContext), Ca(e, t), t.prototype && typeof t.prototype.render == "function") {
        var s = pt(t) || "Unknown";
        pi[s] || (c("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", s, s), pi[s] = !0);
      }
      var d = wo(r, e, t, n, o), h = ga();
      if (typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0) {
        var x = pt(t) || "Unknown";
        ko[x] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), ko[x] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0
      ) {
        {
          var I = pt(t) || "Unknown";
          ko[I] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", I, I, I), ko[I] = !0);
        }
        ho(d, t, n, o), fi(r, e, d, t, n);
      } else if (Ks(t), h) {
        var G = e.treeContext, Z = 1, le = 0;
        e.treeContext = ri(G, Z, le);
        try {
          Zt(r, e, d);
        } finally {
          e.treeContext = G;
        }
      } else
        Zt(r, e, d);
      Tn(e);
    }
    function Ks(r) {
      {
        if (r && r.childContextTypes && c("%s(...): childContextTypes cannot be defined on a function component.", r.displayName || r.name || "Component"), r.defaultProps !== void 0) {
          var e = pt(r) || "Unknown";
          qi[e] || (c("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", e), qi[e] = !0);
        }
        if (typeof r.getDerivedStateFromProps == "function") {
          var t = pt(r) || "Unknown";
          gi[t] || (c("%s: Function components do not support getDerivedStateFromProps.", t), gi[t] = !0);
        }
        if (typeof r.contextType == "object" && r.contextType !== null) {
          var n = pt(r) || "Unknown";
          hi[n] || (c("%s: Function components do not support contextType.", n), hi[n] = !0);
        }
      }
    }
    function ns(r, e) {
      if (r && r.defaultProps) {
        var t = cn({}, e), n = r.defaultProps;
        for (var o in n)
          t[o] === void 0 && (t[o] = n[o]);
        return t;
      }
      return e;
    }
    function qs(r, e, t, n, o) {
      Ca(e, t.render);
      var s = wo(r, e, t.render, n, o), d = ga();
      if (d) {
        var h = e.treeContext, x = 1, I = 0;
        e.treeContext = ri(h, x, I);
        try {
          Zt(r, e, s);
        } finally {
          e.treeContext = h;
        }
      } else
        Zt(r, e, s);
      Tn(e);
    }
    function yi(r, e, t, n, o) {
      var s = t.type, d = ns(s, n);
      Ea(r, e, s, d, o);
    }
    function el(r, e, t, n) {
      t._context === void 0 ? t !== t.Consumer && (ts || (ts = !0, c("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : t = t._context;
      var o = n.children;
      typeof o != "function" && c("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var s = jr(t), d = o(s);
      Zt(r, e, d);
    }
    function hn(r, e, t, n) {
      var o = t._context, s = n.value, d = n.children, h;
      h = e.context, e.context = qa(o, s), Zt(r, e, d), e.context = Rs(o), h !== e.context && c("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function tl(r, e, t, n, o) {
      Gn(e, "Lazy");
      var s = t._payload, d = t._init, h = d(s), x = ns(h, n);
      Ea(r, e, h, x, o), Tn(e);
    }
    function Ea(r, e, t, n, o) {
      if (typeof t == "function")
        if (Qi(t)) {
          Ki(r, e, t, n);
          return;
        } else {
          Qs(r, e, t, n);
          return;
        }
      if (typeof t == "string") {
        Zs(r, e, t, n);
        return;
      }
      switch (t) {
        // TODO: LegacyHidden acts the same as a fragment. This only works
        // because we currently assume that every instance of LegacyHidden is
        // accompanied by a host component wrapper. In the hidden mode, the host
        // component is given a `hidden` attribute, which ensures that the
        // initial HTML is not visible. To support the use of LegacyHidden as a
        // true fragment, without an extra DOM node, we would have to hide the
        // initial HTML in some other way.
        // TODO: Add REACT_OFFSCREEN_TYPE here too with the same capability.
        case Cs:
        case ks:
        case Xo:
        case Jo:
        case Yo: {
          Zt(r, e, n.children);
          return;
        }
        case Na: {
          Gn(e, "SuspenseList"), Zt(r, e, n.children), Tn(e);
          return;
        }
        case _i:
          throw new Error("ReactDOMServer does not yet support scope components.");
        // eslint-disable-next-line-no-fallthrough
        case Ua: {
          Zi(r, e, n);
          return;
        }
      }
      if (typeof t == "object" && t !== null)
        switch (t.$$typeof) {
          case Mr: {
            qs(r, e, t, n, o);
            return;
          }
          case Ha: {
            yi(r, e, t, n, o);
            return;
          }
          case qr: {
            hn(r, e, t, n);
            return;
          }
          case eo: {
            el(r, e, t, n);
            return;
          }
          case Zo: {
            tl(r, e, t, n);
            return;
          }
        }
      var s = "";
      throw (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (t == null ? t : typeof t) + "." + s));
    }
    function nl(r, e) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      r[Symbol.toStringTag] === "Generator" && (es || c("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), es = !0), r.entries === e && (mi || c("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), mi = !0);
    }
    function Zt(r, e, t) {
      try {
        return rl(r, e, t);
      } catch (n) {
        throw typeof n == "object" && n !== null && typeof n.then == "function" || (So = So !== null ? So : jn()), n;
      }
    }
    function rl(r, e, t) {
      if (e.node = t, typeof t == "object" && t !== null) {
        switch (t.$$typeof) {
          case Fi: {
            var n = t, o = n.type, s = n.props, d = n.ref;
            Ea(r, e, o, s, d);
            return;
          }
          case Go:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          // eslint-disable-next-line-no-fallthrough
          case Zo: {
            var h = t, x = h._payload, I = h._init, G;
            try {
              G = I(x);
            } catch (Yn) {
              throw typeof Yn == "object" && Yn !== null && typeof Yn.then == "function" && Gn(e, "Lazy"), Yn;
            }
            Zt(r, e, G);
            return;
          }
        }
        if (Re(t)) {
          rs(r, e, t);
          return;
        }
        var Z = to(t);
        if (Z) {
          nl(t, Z);
          var le = Z.call(t);
          if (le) {
            var Ce = le.next();
            if (!Ce.done) {
              var Qe = [];
              do
                Qe.push(Ce.value), Ce = le.next();
              while (!Ce.done);
              rs(r, e, Qe);
              return;
            }
            return;
          }
        }
        var Ot = Object.prototype.toString.call(t);
        throw new Error("Objects are not valid as a React child (found: " + (Ot === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : Ot) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof t == "string") {
        var Sr = e.blockedSegment;
        Sr.lastPushedText = It(e.blockedSegment.chunks, t, r.responseState, Sr.lastPushedText);
        return;
      }
      if (typeof t == "number") {
        var br = e.blockedSegment;
        br.lastPushedText = It(e.blockedSegment.chunks, "" + t, r.responseState, br.lastPushedText);
        return;
      }
      typeof t == "function" && c("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function rs(r, e, t) {
      for (var n = t.length, o = 0; o < n; o++) {
        var s = e.treeContext;
        e.treeContext = ri(s, n, o);
        try {
          $r(r, e, t[o]);
        } finally {
          e.treeContext = s;
        }
      }
    }
    function os(r, e, t) {
      var n = e.blockedSegment, o = n.chunks.length, s = mo(
        r,
        o,
        null,
        n.formatContext,
        // Adopt the parent segment's leading text embed
        n.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      n.children.push(s), n.lastPushedText = !1;
      var d = mr(r, e.node, e.blockedBoundary, s, e.abortSet, e.legacyContext, e.context, e.treeContext);
      e.componentStack !== null && (d.componentStack = e.componentStack.parent);
      var h = d.ping;
      t.then(h, h);
    }
    function $r(r, e, t) {
      var n = e.blockedSegment.formatContext, o = e.legacyContext, s = e.context, d = null;
      d = e.componentStack;
      try {
        return Zt(r, e, t);
      } catch (h) {
        if (ii(), typeof h == "object" && h !== null && typeof h.then == "function") {
          os(r, e, h), e.blockedSegment.formatContext = n, e.legacyContext = o, e.context = s, rr(s), e.componentStack = d;
          return;
        } else
          throw e.blockedSegment.formatContext = n, e.legacyContext = o, e.context = s, rr(s), e.componentStack = d, h;
      }
    }
    function as(r, e, t, n) {
      var o = bo(r, n);
      if (e === null ? xo(r, n) : (e.pendingTasks--, e.forceClientRender || (e.forceClientRender = !0, e.errorDigest = o, di(e, n), e.parentFlushed && r.clientRenderedBoundaries.push(e))), r.allPendingTasks--, r.allPendingTasks === 0) {
        var s = r.onAllReady;
        s();
      }
    }
    function ol(r) {
      var e = this, t = r.blockedBoundary, n = r.blockedSegment;
      n.status = gr, Co(e, t, n);
    }
    function Si(r, e, t) {
      var n = r.blockedBoundary, o = r.blockedSegment;
      if (o.status = gr, n === null)
        e.allPendingTasks--, e.status !== zr && (e.status = zr, e.destination !== null && ae(e.destination));
      else {
        if (n.pendingTasks--, !n.forceClientRender) {
          n.forceClientRender = !0;
          var s = t === void 0 ? new Error("The render was aborted by the server without a reason.") : t;
          n.errorDigest = e.onError(s);
          {
            var d = "The server did not finish this Suspense boundary: ";
            s && typeof s.message == "string" ? s = d + s.message : s = d + String(s);
            var h = Vn;
            Vn = r;
            try {
              di(n, s);
            } finally {
              Vn = h;
            }
          }
          n.parentFlushed && e.clientRenderedBoundaries.push(n);
        }
        if (n.fallbackAbortableTasks.forEach(function(I) {
          return Si(I, e, t);
        }), n.fallbackAbortableTasks.clear(), e.allPendingTasks--, e.allPendingTasks === 0) {
          var x = e.onAllReady;
          x();
        }
      }
    }
    function yr(r, e) {
      if (e.chunks.length === 0 && e.children.length === 1 && e.children[0].boundary === null) {
        var t = e.children[0];
        t.id = e.id, t.parentFlushed = !0, t.status === Hr && yr(r, t);
      } else {
        var n = r.completedSegments;
        n.push(e);
      }
    }
    function Co(r, e, t) {
      if (e === null) {
        if (t.parentFlushed) {
          if (r.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          r.completedRootSegment = t;
        }
        if (r.pendingRootTasks--, r.pendingRootTasks === 0) {
          r.onShellError = vr;
          var n = r.onShellReady;
          n();
        }
      } else if (e.pendingTasks--, !e.forceClientRender) {
        if (e.pendingTasks === 0)
          t.parentFlushed && t.status === Hr && yr(e, t), e.parentFlushed && r.completedBoundaries.push(e), e.fallbackAbortableTasks.forEach(ol, r), e.fallbackAbortableTasks.clear();
        else if (t.parentFlushed && t.status === Hr) {
          yr(e, t);
          var o = e.completedSegments;
          o.length === 1 && e.parentFlushed && r.partialBoundaries.push(e);
        }
      }
      if (r.allPendingTasks--, r.allPendingTasks === 0) {
        var s = r.onAllReady;
        s();
      }
    }
    function al(r, e) {
      var t = e.blockedSegment;
      if (t.status === wa) {
        rr(e.context);
        var n = null;
        n = Vn, Vn = e;
        try {
          Zt(r, e, e.node), Yt(t.chunks, r.responseState, t.lastPushedText, t.textEmbedded), e.abortSet.delete(e), t.status = Hr, Co(r, e.blockedBoundary, t);
        } catch (s) {
          if (ii(), typeof s == "object" && s !== null && typeof s.then == "function") {
            var o = e.ping;
            s.then(o, o);
          } else
            e.abortSet.delete(e), t.status = Ji, as(r, e.blockedBoundary, t, s);
        } finally {
          Vn = n;
        }
      }
    }
    function bi(r) {
      if (r.status !== zr) {
        var e = Bi(), t = ba.current;
        ba.current = ya;
        var n;
        n = xa.getCurrentStack, xa.getCurrentStack = jn;
        var o = vo;
        Sa(r.responseState);
        try {
          var s = r.pingedTasks, d;
          for (d = 0; d < s.length; d++) {
            var h = s[d];
            al(r, h);
          }
          s.splice(0, d), r.destination !== null && xi(r, r.destination);
        } catch (x) {
          bo(r, x), xo(r, x);
        } finally {
          Sa(o), ba.current = t, xa.getCurrentStack = n, t === ya && rr(e);
        }
      }
    }
    function Eo(r, e, t) {
      switch (t.parentFlushed = !0, t.status) {
        case wa: {
          var n = t.id = r.nextSegmentId++;
          return t.lastPushedText = !1, t.textEmbedded = !1, Ao(e, r.responseState, n);
        }
        case Hr: {
          t.status = ui;
          for (var o = !0, s = t.chunks, d = 0, h = t.children, x = 0; x < h.length; x++) {
            for (var I = h[x]; d < I.index; d++)
              R(e, s[d]);
            o = Ta(r, e, I);
          }
          for (; d < s.length - 1; d++)
            R(e, s[d]);
          return d < s.length && (o = W(e, s[d])), o;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Ta(r, e, t) {
      var n = t.boundary;
      if (n === null)
        return Eo(r, e, t);
      if (n.parentFlushed = !0, n.forceClientRender)
        return Xt(e, r.responseState, n.errorDigest, n.errorMessage, n.errorComponentStack), Eo(r, e, t), ja(e, r.responseState);
      if (n.pendingTasks > 0) {
        n.rootSegmentID = r.nextSegmentId++, n.completedSegments.length > 0 && r.partialBoundaries.push(n);
        var o = n.id = tn(r.responseState);
        return Fr(e, r.responseState, o), Eo(r, e, t), _r(e, r.responseState);
      } else {
        if (n.byteSize > r.progressiveChunkSize)
          return n.rootSegmentID = r.nextSegmentId++, r.completedBoundaries.push(n), Fr(e, r.responseState, n.id), Eo(r, e, t), _r(e, r.responseState);
        Oo(e, r.responseState);
        var s = n.completedSegments;
        if (s.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var d = s[0];
        return Ta(r, e, d), Lo(e, r.responseState);
      }
    }
    function is(r, e, t) {
      return ws(e, r.responseState, t.id, t.errorDigest, t.errorMessage, t.errorComponentStack);
    }
    function Ra(r, e, t) {
      return Ae(e, r.responseState, t.formatContext, t.id), Ta(r, e, t), it(e, t.formatContext);
    }
    function ss(r, e, t) {
      for (var n = t.completedSegments, o = 0; o < n.length; o++) {
        var s = n[o];
        ls(r, e, t, s);
      }
      return n.length = 0, Ti(e, r.responseState, t.id, t.rootSegmentID);
    }
    function il(r, e, t) {
      for (var n = t.completedSegments, o = 0; o < n.length; o++) {
        var s = n[o];
        if (!ls(r, e, t, s))
          return o++, n.splice(0, o), !1;
      }
      return n.splice(0, o), !0;
    }
    function ls(r, e, t, n) {
      if (n.status === ui)
        return !0;
      var o = n.id;
      if (o === -1) {
        var s = n.id = t.rootSegmentID;
        if (s === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Ra(r, e, n);
      } else
        return Ra(r, e, n), gs(e, r.responseState, o);
    }
    function xi(r, e) {
      N();
      try {
        var t = r.completedRootSegment;
        t !== null && r.pendingRootTasks === 0 && (Ta(r, e, t), r.completedRootSegment = null, Ma(e, r.responseState));
        var n = r.clientRenderedBoundaries, o;
        for (o = 0; o < n.length; o++) {
          var s = n[o];
          is(r, e, s);
        }
        n.splice(0, o);
        var d = r.completedBoundaries;
        for (o = 0; o < d.length; o++) {
          var h = d[o];
          ss(r, e, h);
        }
        d.splice(0, o), re(e), N(e);
        var x = r.partialBoundaries;
        for (o = 0; o < x.length; o++) {
          var I = x[o];
          if (!il(r, e, I)) {
            r.destination = null, o++, x.splice(0, o);
            return;
          }
        }
        x.splice(0, o);
        var G = r.completedBoundaries;
        for (o = 0; o < G.length; o++) {
          var Z = G[o];
          ss(r, e, Z);
        }
        G.splice(0, o);
      } finally {
        re(e), r.allPendingTasks === 0 && r.pingedTasks.length === 0 && r.clientRenderedBoundaries.length === 0 && r.completedBoundaries.length === 0 && (r.abortableTasks.size !== 0 && c("There was still abortable task at the root when we closed. This is a bug in React."), ae(e));
      }
    }
    function us(r) {
      _(function() {
        return bi(r);
      });
    }
    function sl(r, e) {
      if (r.status === Wr) {
        r.status = zr, A(e, r.fatalError);
        return;
      }
      if (r.status !== zr && r.destination === null) {
        r.destination = e;
        try {
          xi(r, e);
        } catch (t) {
          bo(r, t), xo(r, t);
        }
      }
    }
    function cs(r, e) {
      try {
        var t = r.abortableTasks;
        t.forEach(function(n) {
          return Si(n, r, e);
        }), t.clear(), r.destination !== null && xi(r, r.destination);
      } catch (n) {
        bo(r, n), xo(r, n);
      }
    }
    function ll(r, e) {
      return new Promise(function(t, n) {
        var o, s, d = new Promise(function(le, Ce) {
          s = le, o = Ce;
        });
        function h() {
          var le = new ReadableStream(
            {
              type: "bytes",
              pull: function(Ce) {
                sl(I, Ce);
              },
              cancel: function(Ce) {
                cs(I);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          le.allReady = d, t(le);
        }
        function x(le) {
          d.catch(function() {
          }), n(le);
        }
        var I = ka(r, Kt(e ? e.identifierPrefix : void 0, e ? e.nonce : void 0, e ? e.bootstrapScriptContent : void 0, e ? e.bootstrapScripts : void 0, e ? e.bootstrapModules : void 0), In(e ? e.namespaceURI : void 0), e ? e.progressiveChunkSize : void 0, e ? e.onError : void 0, s, h, x, o);
        if (e && e.signal) {
          var G = e.signal, Z = function() {
            cs(I, G.reason), G.removeEventListener("abort", Z);
          };
          G.addEventListener("abort", Z);
        }
        us(I);
      });
    }
    ps.renderToReadableStream = ll, ps.version = f;
  }()), ps;
}
var Rl;
function iu() {
  if (Rl) return Gr;
  Rl = 1;
  var b, f;
  return process.env.NODE_ENV === "production" ? (b = nu(), f = ru()) : (b = ou(), f = au()), Gr.version = b.version, Gr.renderToString = b.renderToString, Gr.renderToStaticMarkup = b.renderToStaticMarkup, Gr.renderToNodeStream = b.renderToNodeStream, Gr.renderToStaticNodeStream = b.renderToStaticNodeStream, Gr.renderToReadableStream = f.renderToReadableStream, Gr;
}
var fl = iu();
const hl = (b) => {
  const {
    onClose: f,
    children: y,
    open: E = !1,
    className: c = "",
    innerClass: F = ""
  } = b;
  let _ = null, T = null, v, k = "";
  return F && (k = F), E && (_ = y, v = "open", T = /* @__PURE__ */ C.jsx("div", { className: `common-drawer-outer ${c}`, onClick: f })), /* @__PURE__ */ C.jsxs(pl, { children: [
    T,
    /* @__PURE__ */ C.jsx("div", { className: `${k} common-drawer-inner ${v}`, children: _ })
  ] });
}, su = ({ pageMeta: b, updatePageMetaState: f }) => {
  const y = (_, T) => {
    f(T, _.target.value);
  }, { name: E = "", status: c = "", slug: F = "" } = b;
  return /* @__PURE__ */ C.jsxs("div", { className: "drawer-contents", children: [
    /* @__PURE__ */ C.jsx("div", { className: "drawer-contents__option", children: /* @__PURE__ */ C.jsxs("label", { children: [
      "Page Name:",
      /* @__PURE__ */ C.jsx("br", {}),
      /* @__PURE__ */ C.jsx(
        "input",
        {
          className: "drawer-contents__input",
          name: "name",
          onChange: (_) => y(_, "name"),
          value: E
        }
      )
    ] }) }),
    /* @__PURE__ */ C.jsx("div", { className: "drawer-contents__option", children: /* @__PURE__ */ C.jsxs("label", { children: [
      "Page Status (drafts are only visible to admins):",
      /* @__PURE__ */ C.jsxs(
        "select",
        {
          name: "status",
          className: "base-form__select drawer-contents__input",
          onChange: (_) => y(_, "status"),
          value: c,
          children: [
            /* @__PURE__ */ C.jsx("option", { value: "draft", children: "Draft" }),
            /* @__PURE__ */ C.jsx("option", { value: "published", children: "Published" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ C.jsx("div", { className: "drawer-contents__option", children: /* @__PURE__ */ C.jsxs("label", { children: [
      "Page Url:",
      /* @__PURE__ */ C.jsx("br", {}),
      /* @__PURE__ */ C.jsx(
        "input",
        {
          className: "drawer-contents__input",
          name: "slug",
          onChange: (_) => y(_, "slug"),
          value: F
        }
      ),
      /* @__PURE__ */ C.jsx(
        "div",
        {
          style: { fontSize: "0.8em", color: "#dddddd", paddingTop: 4 },
          children: 'Set to "/" to make this homepage'
        }
      )
    ] }) })
  ] });
}, zt = (b = null, f = !1) => {
  let y = zl(Pa);
  if (!y)
    return f ? {
      setState: (_) => {
      },
      editorState: {},
      componentList: {},
      editing: !1,
      previewing: !1,
      editorOptions: {},
      viewportDimensions: { width: 0, height: 0, zoom: 1 },
      updateViewportDimension: (_, T, v) => {
      }
    } : void 0;
  if (!b) return y;
  if (!y) return;
  let E = y.editorState, c = [];
  b.indexOf(".") > -1 ? c = b.split(".") : c = [b];
  for (let _ = 0; _ < c.length; _++) {
    let T = c[_];
    if (!E || typeof E != "object" && !Array.isArray(E))
      break;
    if (T.indexOf("[") > -1) {
      let v = T.split("["), k = v[0], N = parseInt(v[1].replace("]", ""));
      if (!E[k])
        break;
      E = E[k][N];
    } else
      E = E[c[_]];
  }
  return {
    ...y,
    setState: (_) => {
      let T = _o(y.editorState), v = T;
      for (let k = 0; k < c.length; k++) {
        let N = c[k];
        if (N.indexOf("[") > -1) {
          let R = N.split("["), W = R[0], re = parseInt(R[1].replace("]", ""));
          v[W] = _o(v[W]) || [], v[W][re] = _o(_);
          break;
        }
        k === c.length - 1 ? v[N] = _o(_) : (v[N] = _o(v[N]) || {}, v = v[N]);
      }
      y.setState(T);
    },
    editorState: E
  };
}, _o = (b) => Array.isArray(b) ? [...b] : typeof b == "object" ? { ...b } : b, Ju = (b) => (f) => {
  const { editorState: y, editing: E, setState: c } = zt(f.sectionName);
  return /* @__PURE__ */ C.jsx(b, { ...y, editing: E, setState: c, ...f });
}, Zu = (b = null) => {
  const f = zt(b).editorState;
  return [f == null ? void 0 : f.editorState, f == null ? void 0 : f.setState, f == null ? void 0 : f.editing];
}, Qu = (b = null, f) => ({ ...zt(b).editorState, ...f }), Ku = (b) => (f) => /* @__PURE__ */ C.jsx(Pa.Consumer, { children: (y) => /* @__PURE__ */ C.jsx(b, { ...f, editorContext: y }) }), Pa = Zl(null), Fl = (b, f, y) => (E) => {
  const c = { ...f, [b]: E };
  y(c);
}, Qt = [];
for (let b = 0; b < 256; ++b)
  Qt.push((b + 256).toString(16).slice(1));
function lu(b, f = 0) {
  return (Qt[b[f + 0]] + Qt[b[f + 1]] + Qt[b[f + 2]] + Qt[b[f + 3]] + "-" + Qt[b[f + 4]] + Qt[b[f + 5]] + "-" + Qt[b[f + 6]] + Qt[b[f + 7]] + "-" + Qt[b[f + 8]] + Qt[b[f + 9]] + "-" + Qt[b[f + 10]] + Qt[b[f + 11]] + Qt[b[f + 12]] + Qt[b[f + 13]] + Qt[b[f + 14]] + Qt[b[f + 15]]).toLowerCase();
}
let cl;
const uu = new Uint8Array(16);
function cu() {
  if (!cl) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    cl = crypto.getRandomValues.bind(crypto);
  }
  return cl(uu);
}
const du = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), _l = { randomUUID: du };
function Pl(b, f, y) {
  var c;
  if (_l.randomUUID && !b)
    return _l.randomUUID();
  b = b || {};
  const E = b.random ?? ((c = b.rng) == null ? void 0 : c.call(b)) ?? cu();
  if (E.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return E[6] = E[6] & 15 | 64, E[8] = E[8] & 63 | 128, lu(E);
}
const fu = (b, f) => {
  let y = { ...b };
  y.menus = { ...b.menus };
  const { optionMenu: E, componentUUID: c } = f.payload;
  return y.menus[c] = E, y;
}, pu = {
  SET_OPTION_MENU: fu
}, hu = (b, f) => {
  const y = pu[f.type], E = { ...b };
  return y ? y(E, f) : b;
}, Ci = (b) => {
  var dt, At, wt;
  const {
    sectionName: f = "children",
    tagName: y = "div",
    isRoot: E = !1,
    iframeRef: c,
    editing: F = void 0,
    editorOnly: _,
    WrapperComponent: T,
    ...v
  } = b, [k, N] = Rn(!1), [R, W] = Xn.useReducer(hu, {
    menus: {}
  }), re = zt(f), ae = Xn.useRef(null), [ee, z] = Rn(null), [D, A] = Rn(null), [U, Y] = Rn(!1), B = Xn.useRef({}), [O, X] = Rn({}), ie = Xn.useRef(null), [V, Fe] = Rn(""), De = (de) => (q) => {
    de == 0 && (B.current = {}), B.current[de] != q && (B.current[de] = q);
  }, Ne = (de) => R.menus[de], oe = (de, q) => {
    W({
      type: "SET_OPTION_MENU",
      payload: {
        optionMenu: q,
        componentUUID: de
      }
    });
  }, He = ((de) => de ? Object.keys(de).sort(
    (q, ce) => {
      var ue, ye;
      return ((ue = de[q]) == null ? void 0 : ue.displayName) > ((ye = de[ce]) == null ? void 0 : ye.displayName) ? 1 : -1;
    }
  ) : [])(re == null ? void 0 : re.componentList), {
    editorState: we = [],
    previewing: ht,
    renderFlags: fe,
    editorOptions: te
  } = re;
  let { editing: Le } = re;
  F !== void 0 && (Le = F);
  let _e = !1;
  if (we && we.length > 0)
    for (let de = 0; de < we.length; de++)
      we[de].uuid || (_e = !0);
  Fo(() => {
    if (_e) {
      let de = [...we];
      for (let q = 0; q < we.length; q++)
        we[q].uuid || (de[q] = { ...we[q], uuid: Pl() });
      re.setState(de);
    }
  }, []);
  let Se = we, gt = we || [], tt = null;
  const $e = (de) => (q) => {
    let ce = [...gt];
    q.preventDefault(), q.stopPropagation();
    const ue = ce.findIndex((ye) => ye.uuid == de);
    ce.splice(ue, 1), re.setState(ce);
  }, Ee = (de) => (q) => {
    let ce = [...gt];
    q.preventDefault(), q.stopPropagation();
    const ue = ce.findIndex((ge) => ge.uuid == de);
    if (ue == 0) return;
    let ye = ce[ue];
    ce[ue] = ce[ue - 1], ce[ue - 1] = ye, re.setState(ce);
  }, St = (de) => (q) => {
    let ce = [...gt];
    q.preventDefault(), q.stopPropagation();
    const ue = ce.findIndex((ge) => ge.uuid == de);
    if (ue == gt.length - 1) return;
    let ye = ce[ue];
    ce[ue] = ce[ue + 1], ce[ue + 1] = ye, re.setState(ce);
  };
  if (Se) {
    const de = vu(re, De, Le);
    tt = gu({
      componentData: Se,
      renderFlags: fe,
      editing: Le,
      context: re,
      moveUp: Ee,
      moveDown: St,
      currentChildren: gt,
      removeComponent: $e,
      getComp: de,
      buttonRenderState: (q) => [Ne(q), (ce) => oe(q, ce)]
    });
  }
  const { componentList: bt, viewportDimensions: We } = re, vt = (de) => {
    let q = [...gt];
    N(!1);
    let ce = de;
    ce || (ce = de || He[0]), q.push({ comp: ce, props: {}, uuid: Pl() }), re.setState(q);
  };
  let nt = null;
  if (Le && !(fe != null && fe.noAdd) && (nt = /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsx("div", { className: "unb-comp-section__add-component", onClick: () => N(!0) }),
    /* @__PURE__ */ C.jsxs(hl, { open: k, className: "component-drawer", onClose: () => N(!1), children: [
      /* @__PURE__ */ C.jsx("h1", { className: "component-drawer__h1", children: "Insert Component" }),
      /* @__PURE__ */ C.jsxs("label", { children: [
        "Search:",
        /* @__PURE__ */ C.jsx("input", { placeholder: "search", type: "text", value: V, onChange: (de) => Fe(de.target.value) })
      ] }),
      /* @__PURE__ */ C.jsx("div", { className: "componeent-drawer__component-list", children: He.map((de) => {
        const q = bt[de], ce = q.displayName ? q.displayName : q, ue = q.description;
        return V && ce.toLowerCase().componentNameOf(V.toLowerCase()) == -1 ? null : /* @__PURE__ */ C.jsxs("div", { onClick: () => vt(de), className: "component-drawer__component", children: [
          ce,
          ue && /* @__PURE__ */ C.jsx("div", { className: "component-drawer__description", children: ue })
        ] }, de);
      }) })
    ] })
  ] })), Fo(() => {
    var de, q;
    if (ae && ae.current) {
      let ce = c.current, ue = [];
      if ((de = te == null ? void 0 : te.pageOptions) != null && de.scripts && ((q = te.pageOptions.scripts) == null ? void 0 : q.length) > 0)
        for (let ye of te.pageOptions.scripts) {
          const ge = () => new Promise((ze) => {
            const Ue = ce.contentDocument.createElement("script");
            Ue.src = ye, ce.contentDocument.head.appendChild(Ue), Ue.onload = () => ze(), Ue.onerror = () => ze();
          });
          ue.push(ge);
        }
      new Promise(async (ye) => {
        for (let ge = 0; ge < ue.length; ge++)
          await ue[ge]();
        ye(!0);
      }).then(() => {
        var ye, ge;
        (ye = te == null ? void 0 : te.pageOptions) != null && ye.js && ((ge = te.pageOptions.js) == null ? void 0 : ge.length) > 0 && te.pageOptions.js.forEach((ze) => {
          const Ue = ce.contentDocument.createElement("script");
          Ue.textContent = ze, ce.contentDocument.body.appendChild(Ue);
        });
      });
    }
  }, [ae.current]), Fo(() => {
    if (c && c.current && We) {
      const { zoom: de, width: q, height: ce } = We;
      c.current.style.zoom = `${de / 100}`, c.current.contentDocument.body.style.minWidth = `${q - 20 / de * 100}px`, c.current.contentDocument.body.style.minHeight = `${ce - 20 / de * 100}px`;
    }
  }, [ee, We]), Fo(
    () => {
      if (!B.current) return;
      const de = () => {
        if (B.current)
          for (let q in B.current) {
            const ce = B.current[q];
            if (!ce) continue;
            let ue = ce.nextSibling;
            const ye = { x: 1e9, y: 1e9, bottom: -1e7, right: -1e7 };
            for (; ue && !(ue != null && ue.classList.contains("content-section-controls__wrapper")) && !(ue != null && ue.classList.contains("unb-comp-section__add-component")); )
              (ue == null ? void 0 : ue.getBoundingClientRect()) && (ye.x = Math.min(ye.x, ue.offsetLeft), ye.y = Math.min(ye.y, ue.offsetTop), ye.bottom = Math.max(ye.bottom, ue.offsetTop + ue.offsetHeight), ye.right = Math.max(ye.right, ue.offsetLeft + ue.offsetWidth)), ue = ue == null ? void 0 : ue.nextSibling;
            ce.style.width = `${ye.right - ye.x}px`, ce.style.height = `${ye.bottom - ye.y}px`, ce.style.position = "absolute", ce.style.left = `${ye.x}px`, ce.style.top = `${ye.y}px`;
          }
      };
      return window.addEventListener("resize", de), setTimeout(de, 10), () => {
        window.removeEventListener("resize", de);
      };
    },
    [
      we,
      B.current,
      We,
      ee,
      ae.current,
      Le,
      U,
      D
    ]
  ), Fo(() => {
    ie.current != null && ie.current.addEventListener("mousedown", (de) => {
      de.preventDefault(), de.stopPropagation();
      let q = { x: de.clientX, y: de.clientY };
      We.width, We.height, We.width, We.height;
      let ce = (ge) => {
        ge.preventDefault(), ge.stopPropagation();
        let ze = { x: ge.clientX - q.x, y: ge.clientY - q.y };
        q = { x: ge.clientX, y: ge.clientY }, re.updateViewportDimension("width", ze.x, !0), re.updateViewportDimension("height", ze.y, !0);
      }, ue = (ge) => {
        ge.preventDefault(), ge.stopPropagation(), ge.buttons == 1 ? ce(ge) : ye(ge);
      }, ye = (ge) => {
        ge.preventDefault(), ge.stopPropagation();
        let ze = { x: ge.clientX - q.x, y: ge.clientY - q.y };
        q = { x: ge.clientX, y: ge.clientY }, re.updateViewportDimension("width", ze.x, !0), re.updateViewportDimension("height", ze.y, !0), -window.removeEventListener("mousemove", ce), window.removeEventListener("mouseup", ye), window.removeEventListener("mousein", ue);
      };
      return window.addEventListener("mousemove", ce), window.addEventListener("mouseup", ye), window.addEventListener("mousein", ue), () => {
        window.removeEventListener("mousemove", ce), window.removeEventListener("mouseup", ye), window.removeEventListener("mousein", ue);
      };
    });
  }, [U]), _e)
    return null;
  let xt;
  T ? xt = /* @__PURE__ */ C.jsx(
    T,
    {
      editing: Le,
      className: "content-section-controls__wrapper --unb-content-section",
      children: /* @__PURE__ */ C.jsx(Il, { editing: Le, children: /* @__PURE__ */ C.jsxs(y, { ...v, children: [
        tt,
        nt
      ] }) })
    }
  ) : xt = /* @__PURE__ */ C.jsx(Il, { editing: Le, children: /* @__PURE__ */ C.jsxs(y, { ...v, children: [
    tt,
    nt
  ] }) });
  let Ze = (dt = te == null ? void 0 : te.pageOptions) == null ? void 0 : dt.renderInIframe;
  if (Ze === void 0 && (Ze = !0), E && Ze) {
    let de = "<!doctype HTML>", q;
    (At = te == null ? void 0 : te.pageOptions) != null && At.href ? (q = te.pageOptions.href, de = void 0) : (wt = te == null ? void 0 : te.pageOptions) != null && wt.pageHtml && (de = te.pageOptions.pageHtml, q = void 0), xt = /* @__PURE__ */ C.jsxs(
      "div",
      {
        className: "page-editor__viewport-holder",
        style: {
          width: We.width * We.zoom / 100,
          height: We.height * We.zoom / 100
        },
        children: [
          /* @__PURE__ */ C.jsx(
            "iframe",
            {
              className: "page-editor__viewport-iframe",
              src: q,
              srcDoc: de,
              onLoad: async (ce) => {
                var ge, ze, Ue, kt, Dt, Lt;
                const ue = ce.currentTarget;
                if (!ue.contentDocument || !ue.contentDocument.head) return;
                if (c && c.current != ue && (c.current = ue), !ue.contentDocument.head != ae.current) {
                  ae.current = ue.contentDocument.head;
                  const Ke = document.createElement("style"), Pt = (await import("./unb-editor-B-ZKqUyz.mjs")).default;
                  Ke.textContent = Pt, ue.contentDocument.head.appendChild(Ke), (ge = te == null ? void 0 : te.pageOptions) != null && ge.css && ((ze = te.pageOptions.css) == null ? void 0 : ze.length) > 0 && te.pageOptions.css.forEach(($t) => {
                    const Mt = document.createElement("style");
                    Mt.textContent = $t, ue.contentDocument.head.appendChild(Mt);
                  }), (Ue = te == null ? void 0 : te.pageOptions) != null && Ue.stylesheets && ((kt = te.pageOptions.stylesheets) == null ? void 0 : kt.length) > 0 && te.pageOptions.stylesheets.forEach(($t) => {
                    const Mt = document.createElement("link");
                    Mt.rel = "stylesheet", Mt.href = $t, ue.contentDocument.head.appendChild(Mt);
                  });
                }
                let ye;
                (Dt = te == null ? void 0 : te.pageOptions) != null && Dt.documentRoot ? typeof te.pageOptions.documentRoot == "function" ? ye = te.pageOptions.documentRoot(ue) : typeof te.pageOptions.documentRoot == "string" ? ye = ue.contentDocument.querySelector(te.pageOptions.documentRoot) : te.pageOptions.documentRoot instanceof HTMLElement && (ye = te.pageOptions.documentRoot) : ye = ue.contentDocument.body, ee != ye && ((Lt = te == null ? void 0 : te.pageOptions) != null && Lt.clearContainer && (ye.innerHTML = ""), z(ye), Y(!0));
              },
              children: ee && Kl(xt, ee)
            },
            "iframe"
          ),
          /* @__PURE__ */ C.jsx("div", { ref: ie, className: "page-editor__viewport-handle" })
        ]
      }
    );
  }
  return xt;
}, gu = ({
  componentData: b,
  renderFlags: f,
  editing: y,
  context: E,
  moveUp: c,
  moveDown: F,
  currentChildren: _,
  removeComponent: T,
  getComp: v,
  buttonRenderState: k
}) => b.map((N, R) => {
  let W = null;
  return y && E.componentList[N.comp] && (E.componentList[N.comp].displayName ? E.componentList[N.comp].displayName : N.comp, W = [], f != null && f.noRearrange || (R > 0 && W.push(
    /* @__PURE__ */ C.jsx("button", { onClick: c(N.uuid), children: "⬆️" }, `${N.uuid}-up-button`)
  ), R < _.length - 1 && W.push(
    /* @__PURE__ */ C.jsx(
      "button",
      {
        onClick: F(N.uuid),
        children: "⬇️"
      },
      `${N.uuid}-down-button`
    )
  )), f != null && f.noAdd || W.push(
    /* @__PURE__ */ C.jsx(
      "button",
      {
        className: "content-section-controls__delete-button",
        onClick: T(N.uuid),
        children: "X"
      },
      `${N.comp}-delete-button`
    )
  )), v({
    data: N,
    uuid: N.uuid,
    index: R,
    optionButtons: W,
    buttonRenderState: k(N.uuid)
  });
}), vu = (b, f, y = void 0) => ({ data: E, uuid: c, index: F, optionButtons: _, buttonRenderState: T }) => {
  const v = b.componentList[E.comp], [k, N] = T;
  if (!v) return null;
  const R = b.componentList[E.comp].comp;
  let { key: W, ...re } = E.props;
  return y === void 0 && (y = b.editing), /* @__PURE__ */ C.jsxs(
    Pa.Provider,
    {
      value: { ...yu(b, F), editing: y },
      children: [
        /* @__PURE__ */ C.jsx(
          mu,
          {
            optionButtons: _,
            componentName: v.displayName,
            editing: y,
            previewing: b.previewing,
            buttonRender: k,
            setWrapperDomNode: f(c)
          },
          c + "-slot-wrapper"
        ),
        /* @__PURE__ */ C.jsx(
          R,
          {
            ...re,
            editing: y,
            componentName: v.displayName,
            previewing: b.previewing,
            setButtonRender: N
          },
          c + "-comp"
        )
      ]
    },
    c + "-slot-provider"
  );
}, mu = ({ componentName: b, optionButtons: f, ...y }) => {
  const { editing: E, previewing: c, buttonRender: F, setWrapperDomNode: _ } = y;
  if (!E)
    return _(null), y.children;
  let T = null;
  F && typeof F == "function" && (T = F(), T && (T = /* @__PURE__ */ C.jsx("div", { className: "content-section-controls__extra-buttons-wrapper", children: /* @__PURE__ */ C.jsx("div", { className: "content-section-controls__extra-buttons", children: T }) })));
  const v = /* @__PURE__ */ C.jsxs("div", { className: "content-section-controls__inner", children: [
    /* @__PURE__ */ C.jsx("strong", { className: "content-section-controls__component-type", children: b }),
    f,
    T
  ] });
  return /* @__PURE__ */ C.jsxs("div", { className: "content-section-controls__wrapper", ref: _, children: [
    v,
    y.children
  ] });
}, Il = (b) => {
  const { editing: f, children: y, setWrapperDomNode: E, key: c } = b;
  return f ? /* @__PURE__ */ C.jsx("div", { className: "content-section-controls__wrapper --unb-content-section", ref: E, children: y }) : /* @__PURE__ */ C.jsx(C.Fragment, { children: y });
}, yu = (b, f, y) => {
  const E = _o(b);
  let c;
  return c = (F, _) => {
    const T = _o(b.editorState);
    _ ? T[f].props = {
      ...T[f].props,
      [_]: F
    } : T[f].props = {
      ...T[f].props,
      ...F
    }, b.setState(T);
  }, E.editorState = b.editorState[f].props, E.setState = c, E;
}, Su = ({ color: b = "white" }) => /* @__PURE__ */ C.jsxs("svg", { width: "24px", height: "24px", strokeWidth: "1.5", viewBox: "0 0 24 24", fill: "none", stroke: b, xmlns: "http://www.w3.org/2000/svg", color: "#000000", children: [
  /* @__PURE__ */ C.jsx("path", { d: "M9 9L4 4M4 4V8M4 4H8", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ C.jsx("path", { d: "M15 9L20 4M20 4V8M20 4H16", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ C.jsx("path", { d: "M9 15L4 20M4 20V16M4 20H8", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ C.jsx("path", { d: "M15 15L20 20M20 20V16M20 20H16", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
] }), bu = ({ color: b = "#ffffff" }) => /* @__PURE__ */ C.jsxs("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", strokeWidth: "1.5", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: b, stroke: b, children: [
  /* @__PURE__ */ C.jsx("path", { d: "M11 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V12", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ C.jsx("path", { d: "M2 7L22 7", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ C.jsx("path", { d: "M5 5.01L5.01 4.99889", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ C.jsx("path", { d: "M8 5.01L8.01 4.99889", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ C.jsx("path", { d: "M11 5.01L11.01 4.99889", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ C.jsx("path", { d: "M21.6665 16.6667C21.0477 15.097 19.6346 14 17.9903 14C16.2319 14 14.7378 15.2545 14.1969 17", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ C.jsx("path", { d: "M19.9952 16.7723H21.4002C21.7316 16.7723 22.0002 16.5036 22.0002 16.1723V14.55", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ C.jsx("path", { d: "M14.3337 19.3333C14.9525 20.903 16.3657 22 18.01 22C19.7684 22 21.2624 20.7455 21.8033 19", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ C.jsx("path", { d: "M16.005 19.2277H14.6001C14.2687 19.2277 14.0001 19.4964 14.0001 19.8277V21.45", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
] }), xu = (b) => {
  const [f, y] = Rn({
    editorState: b.pageData ? b.pageData : { children: [] },
    pageMetaState: b.pageMeta ? b.pageMeta : { name: "", slug: "", status: "draft" },
    preview: !1,
    changes: !1,
    advancedOpen: !1,
    pageEditorDrawerOpen: !1
  }), [E, c] = Rn({ width: 1200, height: 800, zoom: 100 }), F = Wt.useRef(null), _ = Wt.useRef({ width: 0, height: 0, viewport: { width: E.width, height: E.height } }), T = () => {
    var oe;
    (oe = F.current) != null && oe.requestFullscreen && (document.fullscreenElement ? document.exitFullscreen() : F.current.requestFullscreen());
  }, v = (oe, me, He = !1) => {
    _.current.viewport[oe] = parseInt(me), c((we) => He ? { ...we, [oe]: we[oe] + parseInt(me) } : { ...we, [oe]: parseInt(me) });
  }, k = Wt.useRef(null);
  Wt.useEffect(() => {
    if (window.addEventListener("beforeunload", (oe) => {
      if (f.changes) {
        var me = "It looks like you have been editing something. If you leave before saving, your changes will be lost.";
        return (oe || window.event).returnValue = me, me;
      }
    }), k.current) {
      const me = k.current.getBoundingClientRect();
      _.current.viewport.width = me.width, _.current.viewport.height = me.height;
    }
    window.addEventListener(
      "resize",
      () => {
        F.current;
      }
    );
  }, []);
  const N = f.editorState, { preview: R } = f, {
    streams: W,
    renderFlags: re = {},
    exportState: ae,
    editorOptions: ee,
    editing: z = !R
  } = b;
  let D = Ou;
  re && (D = { ...D, ...re });
  const A = (oe) => {
    y({ ...f, ...oe, changes: !0 });
  }, U = () => {
    y({ ...f, pageEditorDrawerOpen: !f.pageEditorDrawerOpen });
  }, Y = (oe, me) => {
    y({
      ...f,
      pageMetaState: {
        ...f.pageMetaState,
        [oe]: me
      }
    });
  };
  let B = (oe = {}, me = !0) => {
    var He, we;
    if ((He = ee == null ? void 0 : ee.pageOptions) != null && He.wrapperComponent) {
      if (me && !((we = ee == null ? void 0 : ee.pageOptions) != null && we.includeWrapperInRender)) return /* @__PURE__ */ C.jsx(Ci, { isRoot: !0, ...oe });
      const ht = ee.pageOptions.wrapperComponent;
      return /* @__PURE__ */ C.jsx(Ci, { WrapperComponent: ht, isRoot: !0, ...oe });
    }
    return /* @__PURE__ */ C.jsx(Ci, { isRoot: !0, ...oe });
  };
  const O = () => N.children.map((oe) => {
    const me = b.componentList[oe.comp];
    if (!me) return "";
    const He = b.componentList[oe.comp].comp;
    let we = oe.props;
    return {
      comp: oe.comp,
      markup: fl.renderToString(
        /* @__PURE__ */ C.jsx(
          He,
          {
            ...we,
            editing: !1,
            componentName: me.displayName,
            previewing: !0,
            setButtonRender: (ht) => {
            },
            children: oe.children
          }
        )
      ).replaceAll(/[class|style]\=\"\""/, "")
    };
  }), X = (oe = !1) => oe ? O() : fl.renderToString(
    /* @__PURE__ */ C.jsx(
      Pa.Provider,
      {
        value: {
          setState: Fl("editorState", f, A),
          editorState: N,
          componentList: b.componentList,
          editorOptions: { ...ee, pageOptions: { ...ee.pageOptions, renderInIframe: !1 } },
          plugins: b.plugins,
          editing: !1,
          previewing: !0,
          renderFlags: D,
          streams: W,
          viewportDimensions: E,
          updateViewportDimension: v
        },
        children: B()
      }
    )
  );
  ae && ae(() => f, y, X);
  const ie = () => {
    if (!b.onSave) {
      console.log("No onSave function connected to app");
      return;
    }
    let oe = [];
    D.individualComponents && (oe = X(!0));
    const me = X(), He = f.editorState, we = f.pageMetaState, ht = { pageState: He, pageMarkup: me, metaState: we, componentsMarkup: oe };
    b.onSave && b.onSave(ht);
  };
  let V = null;
  b.onSave && (V = /* @__PURE__ */ C.jsxs(
    "a",
    {
      className: "page-editor__button",
      onClick: ie,
      "data-testid": "save-page-button",
      children: [
        "Save ",
        f.changes ? "*" : "",
        " "
      ]
    }
  ));
  let Fe = null;
  W && (Fe = W.getComponent());
  let De = "";
  D.inlineOptionBar && (De += "page-editor__menu--inline");
  const Ne = (oe) => {
    if (oe && F.current != oe) {
      const me = oe.getBoundingClientRect();
      _.current.width = me.width, _.current.height = me.height;
    }
    F.current = oe;
  };
  return /* @__PURE__ */ C.jsxs("div", { ref: Ne, className: "page-editor__inner", children: [
    /* @__PURE__ */ C.jsx(
      hl,
      {
        open: f.pageEditorDrawerOpen,
        onClose: U,
        children: /* @__PURE__ */ C.jsx(
          su,
          {
            pageMeta: f.pageMetaState,
            updatePageMetaState: Y
          }
        )
      }
    ),
    /* @__PURE__ */ C.jsxs("div", { className: "page-editor__menu " + De, children: [
      /* @__PURE__ */ C.jsx(
        "a",
        {
          className: "page-editor__button",
          onClick: (oe) => {
            oe.preventDefault(), oe.stopPropagation(), y({ ...f, preview: !R });
          },
          children: R ? "Edit" : "Preview"
        }
      ),
      V,
      /* @__PURE__ */ C.jsx("a", { className: "page-editor__button", title: "Refresh Page", onClick: () => {
        var oe, me;
        (me = (oe = k == null ? void 0 : k.current) == null ? void 0 : oe.contentWindow) == null || me.location.reload();
      }, children: /* @__PURE__ */ C.jsx(bu, {}) }),
      /* @__PURE__ */ C.jsx("a", { className: "page-editor__button", title: "Full Screen", onClick: T, children: /* @__PURE__ */ C.jsx(Su, {}) }),
      /* @__PURE__ */ C.jsx("a", { className: "page-editor__button", onClick: U, children: "Options" }),
      /* @__PURE__ */ C.jsxs("div", { className: "page-editor__dimensions", children: [
        /* @__PURE__ */ C.jsx("input", { type: "number", step: 100, onChange: (oe) => v("width", parseInt(oe.target.value)), value: E.width }),
        /* @__PURE__ */ C.jsx("strong", { children: "px" }),
        "X",
        /* @__PURE__ */ C.jsx("input", { type: "number", step: 100, onChange: (oe) => v("height", parseInt(oe.target.value)), value: E.height }),
        /* @__PURE__ */ C.jsx("strong", { children: "px" }),
        /* @__PURE__ */ C.jsx("input", { type: "number", step: 20, min: 20, max: 200, onChange: (oe) => v("zoom", parseInt(oe.target.value)), value: E.zoom }),
        /* @__PURE__ */ C.jsx("strong", { children: "%" })
      ] })
    ] }),
    /* @__PURE__ */ C.jsxs(
      Pa.Provider,
      {
        value: {
          setState: Fl("editorState", f, A),
          editorState: N,
          componentList: b.componentList,
          plugins: b.plugins,
          editing: !R,
          previewing: R,
          renderFlags: D,
          streams: W,
          contextualPageData: b.contextualPageData,
          editorOptions: ee,
          viewportDimensions: E,
          updateViewportDimension: v
        },
        children: [
          B({ key: "root-content-section", iframeRef: k }, !1),
          /* @__PURE__ */ C.jsx("div", { children: /* @__PURE__ */ C.jsx(Fe, {}) })
        ]
      },
      "root-provider"
    )
  ] });
}, gl = (b) => {
  const {
    sectionName: f,
    tagName: y = "div",
    label: E = null,
    min: c,
    max: F,
    step: _ = 1,
    hidden: T = !0,
    ...v
  } = b;
  let { current: k = typeof c == "number" ? c : 1 } = b;
  const N = y, { editorState: R, editing: W, setState: re } = zt(f);
  R !== void 0 && (k = R);
  const ae = (ee) => {
    let z = parseFloat(ee.currentTarget.value);
    z || (z = 0), c !== void 0 && z < c && (z = c), F !== void 0 && z > F && (z = F), re(z);
  };
  return W ? E ? /* @__PURE__ */ C.jsx(N, { ...v, children: /* @__PURE__ */ C.jsxs("label", { children: [
    /* @__PURE__ */ C.jsx("span", { children: E }),
    /* @__PURE__ */ C.jsx(
      "input",
      {
        value: k,
        type: "number",
        onChange: ae,
        min: c,
        max: F,
        step: _
      }
    )
  ] }) }, "num-input-wrapper") : /* @__PURE__ */ C.jsx(N, { children: /* @__PURE__ */ C.jsx(
    "input",
    {
      value: k,
      type: "number",
      onChange: ae,
      min: typeof c == "number" ? c : void 0,
      max: typeof F == "number" ? F : void 0,
      step: typeof _ == "number" ? _ : void 0
    },
    "num-input"
  ) }, "num-input-wrapper") : T ? null : /* @__PURE__ */ C.jsx(N, { ...v, children: R });
}, Vl = (b) => {
  const { sectionName: f, children: y, editing: E } = b, c = zt(f);
  let { previewing: F, editing: _ } = c || { previewing: !1, editing: !1 };
  const T = { ...c };
  return T.editorState || (T.editorState = {}), E !== void 0 && (T.editing = E), /* @__PURE__ */ C.jsx(Pa.Provider, { value: T, children: y });
}, wu = (b) => {
  const {
    sectionName: f,
    current: y,
    label: E,
    hidden: c = !1,
    tagName: F = "div",
    ..._
  } = b, T = F, { editorState: v, editing: k, setState: N } = zt(), R = (W) => {
    N({ ...v, [f]: W.currentTarget.checked });
  };
  return k ? /* @__PURE__ */ C.jsx(T, { children: /* @__PURE__ */ C.jsxs("label", { children: [
    /* @__PURE__ */ C.jsx("span", { children: E }),
    /* @__PURE__ */ C.jsx(
      "input",
      {
        type: "checkbox",
        onChange: R,
        checked: y
      }
    )
  ] }) }) : c ? null : /* @__PURE__ */ C.jsx(T, { ..._, children: y ? "true" : "false" });
}, vl = (b) => {
  const { children: f, editing: y } = b, { editorState: E, editing: c } = zt(), F = y || c;
  return /* @__PURE__ */ C.jsx(Gl, { hide: !F, children: f });
}, qu = (b) => {
  const { children: f, editing: y } = b, { editorState: E, editing: c } = zt(), F = y || c;
  return /* @__PURE__ */ C.jsx(Gl, { hide: F, children: f });
}, Gl = (b) => {
  const { children: f, hide: y = !1 } = b;
  return y ? null : /* @__PURE__ */ C.jsx(C.Fragment, { children: f });
}, ku = (b) => {
  const { text: f = "", count: y } = b;
  return /* @__PURE__ */ C.jsx("div", { className: "section__column", children: /* @__PURE__ */ C.jsx(Ci, {}) });
}, Cu = (b) => {
  const { count: f = 3, responsive: y = !1, setButtonRender: E } = b;
  let c = ku, F = [], _;
  Xn.useEffect(() => {
    E && E(() => /* @__PURE__ */ C.jsxs(Xn.Fragment, { children: [
      /* @__PURE__ */ C.jsx(
        gl,
        {
          hidden: !0,
          label: "Number of Columns: ",
          sectionName: "count",
          current: f,
          min: 2,
          max: 6
        }
      ),
      /* @__PURE__ */ C.jsx(
        wu,
        {
          label: "Responsive Columns",
          sectionName: "responsive"
        }
      )
    ] }));
  }, []), f && (_ = `section__inner-div column-section ${y ? "--responsive" : "--fixed"} --cols-${f}`);
  for (var T = 0; T < f; T++) {
    let v = "column" + T;
    F.push(
      /* @__PURE__ */ C.jsx(
        Vl,
        {
          sectionName: v,
          children: /* @__PURE__ */ C.jsx(c, { ...b })
        },
        T
      )
    );
  }
  return /* @__PURE__ */ C.jsxs(Xn.Fragment, { children: [
    /* @__PURE__ */ C.jsx(vl, { children: /* @__PURE__ */ C.jsx("div", { className: "section__columns__heading" }) }),
    /* @__PURE__ */ C.jsx("section", { className: "section", children: /* @__PURE__ */ C.jsx("div", { className: _, children: F }) })
  ] });
}, Al = (b) => {
  const {
    value: f,
    sectionName: y,
    label: E,
    tagName: c = "div",
    hidden: F = !1,
    inputClass: _ = {},
    children: T = null,
    ...v
  } = b, k = c, { editorState: N, editing: R, setState: W } = zt(y);
  let re = f || N || "";
  const ae = (ee) => {
    W(ee.currentTarget.value);
  };
  return R ? E ? (
    // @ts-ignore
    /* @__PURE__ */ C.jsx(k, { ..._, ...v, children: /* @__PURE__ */ C.jsxs("label", { children: [
      /* @__PURE__ */ C.jsx("span", { children: E }),
      /* @__PURE__ */ C.jsx("input", { type: "text", onChange: ae, value: re })
    ] }) })
  ) : (
    // @ts-ignore
    /* @__PURE__ */ C.jsx(k, { ..._, ...v, children: /* @__PURE__ */ C.jsx("input", { type: "text", onChange: ae, value: re }) })
  ) : F ? null : (
    // @ts-ignore
    /* @__PURE__ */ C.jsxs(k, { ..._, ...v, children: [
      N[y],
      T
    ] })
  );
}, Eu = (b) => {
  const {
    sectionName: f,
    options: y,
    current: E,
    optionLabels: c = null,
    label: F = !1,
    hidden: _ = !1,
    tagName: T = "div",
    selectList: v = !1,
    ...k
  } = b, N = T, { editorState: R, editing: W, setState: re } = zt(), ae = (z) => {
    re({ ...R, [f]: z.currentTarget.value });
  };
  let ee = "";
  return v ? ee = v : Array.isArray(y) ? (ee = [], y.forEach((z, D) => {
    const A = c ? c[D] : z;
    ee.push(
      /* @__PURE__ */ C.jsx("option", { value: z, className: "", children: A }, D)
    );
  })) : y && (ee = [], Object.entries(y).forEach(([z, D], A) => {
    let U = D, Y = z;
    c && (Y = c[z]), ee.push(
      /* @__PURE__ */ C.jsx("option", { value: U, className: "", children: Y }, A)
    );
  })), W ? F ? /* @__PURE__ */ C.jsx(N, { children: /* @__PURE__ */ C.jsxs("label", { children: [
    /* @__PURE__ */ C.jsx("span", { children: F }),
    /* @__PURE__ */ C.jsx("select", { onChange: ae, value: E, children: ee })
  ] }) }) : /* @__PURE__ */ C.jsx(N, { children: /* @__PURE__ */ C.jsx("select", { onChange: ae, value: E, children: ee }) }) : _ ? null : /* @__PURE__ */ C.jsx(N, { ...k, children: R[f] });
}, Tu = (b) => {
  const { editing: f = !1 } = b;
  return f ? /* @__PURE__ */ C.jsx("div", { className: "content-editable-toolbar__wrapper", children: /* @__PURE__ */ C.jsx("div", { className: "content-editable-toolbar", children: b.children }) }) : /* @__PURE__ */ C.jsx(C.Fragment, {});
}, Ru = ({
  bem: b,
  bemPrefix: f,
  classFunction: y
}) => new Proxy(
  { __compCache: {}, context: Wt.createContext({ bem: b, bemPrefix: f }) },
  { get: (E, c) => {
    const F = c;
    if (c == "BEM")
      return E.BEM || (E.BEM = E.context.Provider), E.BEM;
    if (![
      "div",
      "span",
      "em",
      "strong",
      "li",
      "a",
      "p",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "ol",
      "blockquote",
      "pre",
      "code",
      "figcaption",
      "table",
      "td",
      "tr",
      "tbody",
      "rawText",
      "del",
      "ins"
    ].includes(F))
      throw new Error("Invalid tagname for CE");
    if (!E.__compCache[F]) {
      const _ = b, T = f;
      E.__compCache[F] = (v) => {
        let {
          bem: k,
          bemPrefix: N,
          bemName: R,
          editing: W,
          sectionName: re,
          ...ae
        } = v;
        const ee = zl(E.context);
        let z = _, D = T;
        return typeof (ee == null ? void 0 : ee.bem) == "boolean" && k === void 0 && (z = ee.bem), ee != null && ee.bemPrefix && N == null && (D = ee.bemPrefix), /* @__PURE__ */ C.jsx(
          Xl,
          {
            tagName: F,
            bem: z,
            editing: W,
            bemPrefix: D,
            sectionName: re,
            bemName: R || re || void 0,
            classFunction: y,
            ...v
          }
        );
      };
    }
    return E.__compCache[F];
  } }
), Yl = Ru({ bem: !0 }), Xl = ({
  placeholder: b = "",
  ref: f = null,
  className: y = "",
  sectionName: E = void 0,
  tagName: c = "div",
  textOnly: F = !1,
  bem: _ = !1,
  bemName: T = "",
  editing: v = void 0,
  bemPrefix: k = "",
  classFunction: N = null,
  children: R = void 0,
  ...W
}) => {
  W = { ...W };
  const [re, ae] = Rn(!1);
  T || (T = E || c);
  let ee = b;
  b || (ee = `${c} placeholder`);
  let z = E;
  E || (z = `${c}`);
  const D = yl(null), A = zt(z), U = A == null ? void 0 : A.editorState;
  let { editing: Y = !1 } = A;
  v !== void 0 && (Y = v);
  const B = (te, Le) => {
    O.deleteContents();
    const _e = O.createContextualFragment(Le);
    O.insertNode(_e), me();
  }, [O, X] = Rn(), ie = (te, Le) => {
    const _e = D.current;
    if (!_e) return;
    const Se = _e.ownerDocument.getSelection();
    if (!Se || Se.rangeCount === 0) return !1;
    if (_e.contains(Se.anchorNode) && _e.contains(Se.focusNode)) {
      let gt = Se.getRangeAt(0);
      Le(!0), X(gt);
    }
  }, V = W.insertButtons, Fe = (V == null ? void 0 : V.length) > 0 ? /* @__PURE__ */ C.jsx(Tu, { editing: Y, ...W, children: V == null ? void 0 : V.map(
    (te) => /* @__PURE__ */ C.jsx("button", { onClick: (Le) => ie(Le, te.setModalOpen), children: te.buttonText })
  ) }) : /* @__PURE__ */ C.jsx(C.Fragment, {}), De = V == null ? void 0 : V.map((te) => te.makeModal(B)), oe = yl(U || null), me = (te) => {
    let Le = D.current.innerHTML;
    F && (Le = D.current.innerText, D.current.innerHTML = Le), Le !== oe.current && A.setState(Le);
  };
  Fo(() => {
    if (!U && !oe.current && W.children) {
      const te = fl.renderToString(W.children);
      A.setState(te), oe.current = te;
    }
  }, []);
  let He = y;
  _ && (k ? He = `${k}__${T} ${He}` : He = `${T} ${He}`), N && typeof N == "function" && (He = N(c, W));
  const we = {};
  Y && (He += " unbContentEditable", we.onInput = me, we["data-ph"] = ee, we.ref = D, we.contentEditable = !0, we.suppressContentEditableWarning = !0, re && (we.dangerouslySetInnerHTML = { __html: oe.current })), (!Y || oe.current) && (we.dangerouslySetInnerHTML = { __html: oe.current }, W.children = void 0);
  let ht = c, fe = W.style ? W.style : {};
  if (c == "rawText")
    if (Y)
      ht = "div", fe = we.style ? { ...we.style } : {}, fe.display = "inline-block", fe.padding = 0, fe.margin = 0, fe.width = "auto", fe.transform = "none", fe.border = "none", fe.boxShadow = "none", fe.outline = "none", fe.overflow = "visible", fe.lineHeight = "inherit", fe.fontFamily = "inherit", fe.fontSize = "inherit", fe.fontWeight = "inherit", fe.fontStyle = "inherit", fe.color = "inherit", fe.backgroundColor = "inherit", fe.textAlign = "inherit", fe.textDecoration = "inherit", fe.textTransform = "inherit", fe.minWidth = "50px", fe.minHeight = "100%", we.style = fe;
    else
      return /* @__PURE__ */ C.jsx(C.Fragment, { children: oe.current });
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    Fe,
    /* @__PURE__ */ C.jsx(
      ht,
      {
        className: He,
        suppressContentEditableWarning: !0,
        ...we,
        ...W
      }
    ),
    De
  ] });
}, Fu = (b) => {
  const {
    headingType: f = "h1",
    text: y = "",
    customClass: E = "",
    editing: c = !0,
    setButtonRender: F
  } = b, _ = ["h1", "h2", "h3", "h4", "h5", "h6"];
  return Fo(() => {
    F(() => /* @__PURE__ */ C.jsxs(pl, { children: [
      /* @__PURE__ */ C.jsx(
        Eu,
        {
          sectionName: "headingType",
          options: _,
          label: "Heading Type"
        }
      ),
      /* @__PURE__ */ C.jsx(Al, { sectionName: "text", label: "Heading Text" }),
      /* @__PURE__ */ C.jsx(Al, { sectionName: "customClass", label: "Custom CSS Class" })
    ] }));
  }, []), /* @__PURE__ */ C.jsx("header", { children: /* @__PURE__ */ C.jsx(
    Xl,
    {
      sectionName: "text",
      tagName: f,
      placeholder: "Heading",
      className: E
    }
  ) });
}, _u = (b) => {
  const { text: f = "", customClass: y = "", sectionName: E, setButtonRender: c } = b;
  return /* @__PURE__ */ C.jsx(Yl.p, { ...b });
}, Pu = (b) => {
  const { sectionName: f = "space" } = b, { editorState: y, editing: E, setState: c } = zt(f), { space: F = y || 10 } = b, _ = Xn.useRef(null), T = Xn.useRef({ startY: 0, startHeight: 0, mouseDown: !1 });
  let v = null;
  const k = (re) => {
    re.target === _.current && (T.current.startY = re.clientY || re.touches[0].clientY, T.current.startHeight = F || 0, (!T.current.startHeight || T.current.startHeight < 0) && (T.current.startHeight = 0), T.current.mouseDown = !0);
  }, N = (re) => {
    if (!T.current.mouseDown) return;
    let ee = (re.clientY || re.touches[0].clientY) - T.current.startY;
    const z = Math.max(0, T.current.startHeight + ee);
    c(z);
  }, R = (re) => {
    if (!T.current.mouseDown) return;
    let ee = (re.clientY || re.touches[0].clientY) - T.current.startY;
    const z = Math.max(0, T.current.startHeight + ee);
    c(z), T.current.mouseDown = !1;
  }, W = () => {
    _.current && (_.current.removeEventListener("mousedown", k), _.current.removeEventListener("touchstart", k), _.current.removeEventListener("mousemove", N), _.current.removeEventListener("touchmove", N), _.current.removeEventListener("mouseup", R), _.current.removeEventListener("touchend", R), _.current.removeEventListener("mouseleave", R), _.current.removeEventListener("touchcancel", R), _.current.removeEventListener("touchleave", R));
  };
  if (Xn.useEffect(() => W, []), E) {
    const re = (ae) => {
      ae != _.current && (W(), ae && (ae.addEventListener("mousedown", k), ae.addEventListener("touchstart", k), ae.addEventListener("mousemove", N), ae.addEventListener("touchmove", N), ae.addEventListener("mouseup", R), ae.addEventListener("touchend", R), ae.addEventListener("mouseleave", R), ae.addEventListener("touchcancel", R), ae.addEventListener("touchleave", R)), _.current = ae);
    };
    v = /* @__PURE__ */ C.jsx("div", { ref: re, style: { height: F }, className: "spacer-handle", children: /* @__PURE__ */ C.jsx(
      gl,
      {
        sectionName: f,
        className: "spacer-input",
        current: F,
        max: 1e3,
        min: 0
      },
      "num-select"
    ) });
  } else
    return /* @__PURE__ */ C.jsx("div", { style: { height: `${F}px` } });
  return /* @__PURE__ */ C.jsx(Xn.Fragment, { children: /* @__PURE__ */ C.jsx("div", { className: "unbeditor-spacer", style: { height: `${F}px` }, children: v }) });
}, Dl = {
  "column-with-text": { displayName: "Columns With Text", comp: Cu },
  heading: { displayName: "Heading", comp: Fu },
  paragraph: { displayName: "Paragraph", comp: _u },
  spacer: { displayName: "Spacer", comp: Pu }
};
var Fa = {}, Ml;
function Iu() {
  if (Ml) return Fa;
  Ml = 1;
  var b = Ql;
  if (process.env.NODE_ENV === "production")
    Fa.createRoot = b.createRoot, Fa.hydrateRoot = b.hydrateRoot;
  else {
    var f = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Fa.createRoot = function(y, E) {
      f.usingClientEntryPoint = !0;
      try {
        return b.createRoot(y, E);
      } finally {
        f.usingClientEntryPoint = !1;
      }
    }, Fa.hydrateRoot = function(y, E, c) {
      f.usingClientEntryPoint = !0;
      try {
        return b.hydrateRoot(y, E, c);
      } finally {
        f.usingClientEntryPoint = !1;
      }
    };
  }
  return Fa;
}
var Au = Iu();
class Du {
  constructor() {
    this.streams = {}, this.createStreamComponent();
  }
  addStream(f, y) {
    this.streams[f] = { name: f, stream: y };
  }
  addStreams(f) {
    this.streams = { ...this.streams, ...f };
  }
  setStreams(f) {
    this.streams = f;
  }
  /**
   * gets a list of all the stream names
   */
  get streamList() {
    return Object.keys(this.streams);
  }
  createStreamComponent() {
    this.component = (f) => /* @__PURE__ */ C.jsx("div", { children: "hello" });
  }
  getComponent() {
    return this.component;
  }
  /**
   *
   * @param streamName the name of the stream you want to read from
   * @param callback this function will receive the results of the selection
   * @param fields this where you can add options (stream dependent)
   * @returns
   */
  getStream(f, y, E) {
    return this.streams[f] && this.streams[f].stream.get(y, E), !1;
  }
}
class Mu extends Du {
  constructor() {
    super(...arguments), this.setCurrentStream = null, this.currentCallback = null, this._setCurrentStreamName = null;
  }
  getStream(f, y, E, c) {
    if (this.streams[f]) {
      const { selectMax: F = 1, ..._ } = E || {};
      this._setCurrentStreamName(f), this.streams[f].stream.get((T) => {
        this.currentCallback = y, this.setCurrentStream(T);
      }, _, c);
    }
    return !1;
  }
  addStream(f, y, E = void 0) {
    this.streams[f] = { name: f, stream: y, streamOptions: E };
  }
  addStreams(f) {
    this.streams = { ...this.streams, ...f };
  }
  setStreams(f) {
    this.streams = f;
  }
  // it is important that this only be rendered once per component
  createStreamComponent() {
    this.component = () => {
      var _, T, v, k, N, R;
      const [f, y] = Rn([]), [E, c] = Rn(null);
      this.setCurrentStream = y, this._setCurrentStreamName = c;
      let F = null;
      if ((T = (_ = this.streams[E]) == null ? void 0 : _.streamOptions) != null && T.streamAdapter) {
        const W = this.streams[E].streamOptions.streamAdapter;
        F = /* @__PURE__ */ C.jsx(
          W,
          {
            entries: f,
            select: (re) => {
              this._setCurrentStreamName(null), this.currentCallback(re);
            }
          }
        );
      } else if ((k = (v = this.streams[E]) == null ? void 0 : v.streamOptions) != null && k.individualPreviewComponent) {
        const W = (R = (N = this.streams[E]) == null ? void 0 : N.streamOptions) == null ? void 0 : R.individualPreviewComponent;
        F = f.map((re) => /* @__PURE__ */ C.jsx("div", { children: /* @__PURE__ */ C.jsx(
          W,
          {
            model: re,
            select: (ae) => {
              this._setCurrentStreamName(null), this.currentCallback(ae);
            }
          }
        ) }));
      } else this.streams[E] && (F = f.map((W) => /* @__PURE__ */ C.jsx("div", { children: /* @__PURE__ */ C.jsx(
        "img",
        {
          style: { width: 50 },
          src: W.src,
          onClick: () => {
            this._setCurrentStreamName(null), this.currentCallback([W]);
          }
        }
      ) })));
      return /* @__PURE__ */ C.jsx("div", { children: /* @__PURE__ */ C.jsx(
        hl,
        {
          open: !!E,
          onClose: () => this._setCurrentStreamName(!1),
          children: F
        }
      ) });
    };
  }
}
const Ou = {
  individualComponents: !1,
  noRearrange: !1,
  noAdd: !1,
  inlineOptionBar: !0,
  disableFullscreen: !1,
  disableRefresh: !1
};
class ec {
  constructor(f = {}) {
    this._renderFunction = null, this.currentRoot = null, this._editorOptions = null, this._editorOptions = f;
    const {
      components: y = Dl,
      plugins: E = null
    } = f;
    this.components = y, this.plugins = E ? [...E] : [];
  }
  get streamDriver() {
    return this._streamDriver;
  }
  processOptions(f) {
    if (f.components && (this.components = f.components), f.plugins && (this.plugins = f.plugins), this._editorOptions) {
      const y = { ...this._editorOptions, ...f };
      f.pageOptions && (y.pageOptions = { ...this._editorOptions.pageOptions, ...f.pageOptions }), f.renderFlags && (y.renderFlags = { ...this._editorOptions.renderFlags, ...f.renderFlags }), this._editorOptions = y;
    } else
      this._editorOptions = f;
  }
  start(f, y) {
    y && this.processOptions(y);
    const { pageData: E = { children: [] }, pageMeta: c, onSave: F, renderFlags: _, contextualPageData: T } = this._editorOptions;
    this._streamDriver = this.createStreamDriver();
    const v = (N) => {
      const [R, W] = Rn(1);
      return this._setForceRefreshVal = W, /* @__PURE__ */ C.jsx("div", { className: "page-editor", "data-testid": "page-editor", children: /* @__PURE__ */ C.jsx(
        xu,
        {
          componentList: this.components,
          plugins: this.plugins,
          editorOptions: this._editorOptions,
          pageData: E,
          pageMeta: c,
          onSave: F,
          renderFlags: _,
          streams: this._streamDriver,
          exportState: (re, ae, ee) => {
            this._externalSetState = ae, this._externalGetState = re, this._externalGetMarkup = ee;
          },
          contextualPageData: T
        },
        "page-editor"
      ) });
    }, k = /* @__PURE__ */ C.jsx(v, {});
    this.currentRoot || (this.currentRoot = Au.createRoot(f), this._renderFunction = (N) => {
      this.currentRoot.render(N);
    }), this._renderFunction(k);
  }
  createStreamDriver() {
    return new Mu();
  }
  addComponents(f, y = null, E = null) {
    if (Array.isArray(f) && "comp" in f) {
      this.components = f;
      return;
    }
    if (!f) {
      console.error(
        "trying to call the add components function without a properly formatted components list or component"
      );
      return;
    }
    y && (this.components[y] = {
      displayName: E,
      comp: f
    }, this.refreshComponentListInEditor());
  }
  insertComponent(f, y = {}) {
    if (!this._externalSetState) return null;
    this._externalSetState((E, c) => {
      let F = {
        ...E,
        editorState: {
          ...E.editorState,
          children: [...E.editorState.children]
        }
      };
      return F.editorState.children.push({
        comp: f,
        props: { ...y }
      }), F;
    });
  }
  getDefaultComponents() {
    return Dl;
  }
  refreshComponentListInEditor() {
    this._setForceRefreshVal && this._setForceRefreshVal((f) => f + 1);
  }
  //saving and loading
  getEditorState() {
    var f;
    return this._externalGetState ? (f = this._externalGetState()) == null ? void 0 : f.editorState : null;
  }
  /**
   * 
   * @returns the markup for the page
   */
  getMarkup() {
    return this._externalGetMarkup ? this._externalGetMarkup() : null;
  }
  /**
  * 
  * @returns the markup for the page
  */
  getIndividualMarkup() {
    return this._externalGetMarkup ? this._externalGetMarkup(!0) : null;
  }
}
const Lu = ({ children: b, modalOpen: f, setModalOpen: y }) => {
  console.log({ modalOpen: f });
  const E = (c) => {
    c.stopPropagation();
  };
  return /* @__PURE__ */ C.jsx(C.Fragment, { children: f ? /* @__PURE__ */ C.jsx("div", { onClick: () => y(!1), className: "common-modal__outer", children: /* @__PURE__ */ C.jsx("div", { onClick: E, className: "common-modal__inner", children: b }) }) : /* @__PURE__ */ C.jsx(C.Fragment, {}) });
}, tc = () => {
  const [b, f] = Wt.useState(!1);
  return {
    modalOpen: b,
    setModalOpen: f,
    ModalOuterComponent: Lu
  };
}, nc = (b) => {
  const { sectionName: f, defaultValue: y, ...E } = b, { editorState: c } = zt(f);
  let F = c || y || "";
  return b.transform && (F = b.transform(F)), /* @__PURE__ */ C.jsx(pl, { children: F });
};
class ml {
  // protected _fieldList = null;
  // public fieldList = {
  //   get() {
  //     return this._fieldList;
  //   },
  // };
  // constructor(fieldList?: FieldType) {
  //   if (fieldList) {
  //     this._fieldList = fieldList;
  //   }
  // }
  get(f, y, E) {
  }
}
class rc extends ml {
  constructor(f, y = null) {
    super(), this.url = f, this._callback = y;
  }
  get(f, y, E) {
    switch ((E || "GET").toUpperCase()) {
      case "GET": {
        fetch(this.getAPIUrl(y), { method: "get" }).then((F) => F.json()).then((F) => {
          let _ = F;
          this._callback && (_ = this._callback(F)), f(_);
        });
        break;
      }
      case "POST": {
        fetch(this.url, {
          headers: {
            "Content-Type": "application/json"
          },
          method: "post",
          body: JSON.stringify(y)
        }).then((F) => F.json()).then((F) => {
          let _ = F;
          this._callback && (_ = this._callback(F)), f(_);
        });
        break;
      }
    }
  }
  getAPIUrl(f) {
    return this.url + "?" + new URLSearchParams(f).toString();
  }
}
class oc extends ml {
  constructor(f = null) {
    super(), this._streamSelect = null, this._streams = {}, this._streamSelect = f;
  }
  addStream(f, y) {
    this._streams[f] = { stream: y, name: f };
  }
  adaptStream(f, y, E) {
    this._streams[f] = { stream: y, name: f, callback: E };
  }
  get(f, y) {
    let E = null;
    if (this._streamSelect ? E = this._streamSelect(
      y,
      Object.values(this._streams).map((F) => ({
        name: F.name,
        stream: F.stream
      }))
    ) : E = Object.values(this._streams)[0].name, !E || !this._streams[E])
      throw new ju();
    const c = this._streams[E];
    if (c.callback) {
      c.stream.get((F) => {
        f(c.callback(F));
      });
      return;
    }
    c.stream.get(f);
  }
}
class ju extends Error {
  constructor(f = "") {
    super(
      `No sub-streams have been added to this group stream. Use addStream() before the editor starts ${f}`
    );
  }
}
class ac extends ml {
  constructor(f) {
    super(), this.getValues = f;
  }
  get(f, y) {
    f(this.getValues(y));
  }
}
const ic = ({
  streamName: b,
  sectionName: f,
  selectMax: y = 1,
  label: E = "Select From Stream"
}) => {
  const c = zt(f), F = c.streams;
  if (!c.editing) return null;
  const _ = () => {
    F.getStream(b, (T) => {
      c.setState(T[0]);
    }, { selectMax: y });
  };
  return /* @__PURE__ */ C.jsx("button", { onClick: _, children: E });
}, Ol = (b) => {
  const {
    sectionName: f = "repeater",
    rowSectionName: y = "row",
    addLabel: E = "Row",
    hideAddButton: c = !1,
    editing: F,
    hideCounter: _ = !1,
    ...T
  } = b, v = "count", k = zt(f), { editorState: N } = k || { editorState: null }, R = F !== void 0 ? F : k == null ? void 0 : k.editing, { count: W = N && N[v] ? N[v] : 1 } = T, re = (D, A) => Wt.Children.map(A, (U) => {
    if (Wt.isValidElement(U)) {
      let Y = N && N[y] && N[y][D] ? N[y][D] : {};
      return Wt.cloneElement(U, { repeaterIndex: D, ...Y });
    }
    return U;
  });
  let ae = [];
  for (let D = 0; D < W; D++) {
    let A = re(D, b.children);
    ae.push(
      /* @__PURE__ */ C.jsx(Vl, { sectionName: `${f}.${y}[${D}]`, children: A }, D)
    );
  }
  let ee = null;
  if (R && !c) {
    const D = () => {
      const U = W + 1;
      k.setState({ ...N, [v]: U });
    }, A = () => {
      const U = Math.max(W - 1, 1);
      k.setState({ ...N, [v]: U });
    };
    ee = /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
      /* @__PURE__ */ C.jsxs("button", { onClick: D, children: [
        "+ ",
        E
      ] }),
      /* @__PURE__ */ C.jsxs("button", { onClick: A, children: [
        "- ",
        E
      ] })
    ] });
  }
  let z = null;
  return R && !_ && (z = /* @__PURE__ */ C.jsx(
    gl,
    {
      label: "Count:",
      min: 1,
      sectionName: `${f}.${v}`
    }
  )), b.TagName ? /* @__PURE__ */ C.jsxs(b.TagName, { ...T, children: [
    z,
    ae
  ] }) : /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    z,
    ae,
    ee
  ] });
}, sc = (b) => {
  const { children: f, tabNames: y, renderTab: E } = b, [c, F] = Wt.useState(0);
  return /* @__PURE__ */ C.jsxs("div", { className: "tabs", children: [
    /* @__PURE__ */ C.jsx("ul", { children: /* @__PURE__ */ C.jsx(Ol, { hideCounter: !0, addLabel: "Tab", sectionName: "tabs", children: /* @__PURE__ */ C.jsx(Bu, { setTab: F, currentTab: c }) }) }),
    /* @__PURE__ */ C.jsx(Ol, { hideCounter: !0, hideAddButton: !0, sectionName: "tabs", children: /* @__PURE__ */ C.jsx(Uu, { currentTab: c, renderTab: E }) })
  ] });
}, Bu = ({ repeaterIndex: b = 0, currentTab: f, setTab: y }) => {
  const E = b === f, c = {
    display: "inline-block",
    color: "#666666",
    background: "#dddddd",
    position: "relative",
    top: 5,
    zIndex: 1,
    marginTop: 5,
    padding: "4px 8px",
    border: "2px #dddddd solid",
    paddingBottom: 2,
    marginRight: 4,
    borderBottom: "none"
  };
  return E && (c.fontWeight = "bold", c.color = "black", c.top = 0, c.paddingBottom = 4, c.marginTop = 0, c.background = "white"), /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsx(vl, { children: /* @__PURE__ */ C.jsx("input", { type: "radio", checked: E, onClick: (F) => y(b) }) }),
    /* @__PURE__ */ C.jsx(Yl.li, { style: c, onClick: (F) => y(b), sectionName: "tabName", placeholder: "Tab Name" })
  ] });
}, Uu = ({ repeaterIndex: b = 0, currentTab: f, renderTab: y }) => {
  const E = { display: "block", zIndex: 2, position: "relative", background: "white", padding: 16 };
  return b !== f && (E.display = "none"), /* @__PURE__ */ C.jsxs("div", { style: E, children: [
    /* @__PURE__ */ C.jsx(vl, { children: /* @__PURE__ */ C.jsxs("strong", { children: [
      "Tab ",
      b + 1
    ] }) }),
    y ? y(b) : /* @__PURE__ */ C.jsx(Ci, {})
  ] });
};
var xn = {}, Ll;
function Nu() {
  if (Ll) return xn;
  Ll = 1;
  var b = xn && xn.__assign || function() {
    return b = Object.assign || function(B) {
      for (var O, X = 1, ie = arguments.length; X < ie; X++) {
        O = arguments[X];
        for (var V in O) Object.prototype.hasOwnProperty.call(O, V) && (B[V] = O[V]);
      }
      return B;
    }, b.apply(this, arguments);
  }, f = xn && xn.__createBinding || (Object.create ? function(B, O, X, ie) {
    ie === void 0 && (ie = X);
    var V = Object.getOwnPropertyDescriptor(O, X);
    (!V || ("get" in V ? !O.__esModule : V.writable || V.configurable)) && (V = { enumerable: !0, get: function() {
      return O[X];
    } }), Object.defineProperty(B, ie, V);
  } : function(B, O, X, ie) {
    ie === void 0 && (ie = X), B[ie] = O[X];
  }), y = xn && xn.__setModuleDefault || (Object.create ? function(B, O) {
    Object.defineProperty(B, "default", { enumerable: !0, value: O });
  } : function(B, O) {
    B.default = O;
  }), E = xn && xn.__importStar || function(B) {
    if (B && B.__esModule) return B;
    var O = {};
    if (B != null) for (var X in B) X !== "default" && Object.prototype.hasOwnProperty.call(B, X) && f(O, B, X);
    return y(O, B), O;
  }, c = xn && xn.__rest || function(B, O) {
    var X = {};
    for (var ie in B) Object.prototype.hasOwnProperty.call(B, ie) && O.indexOf(ie) < 0 && (X[ie] = B[ie]);
    if (B != null && typeof Object.getOwnPropertySymbols == "function")
      for (var V = 0, ie = Object.getOwnPropertySymbols(B); V < ie.length; V++)
        O.indexOf(ie[V]) < 0 && Object.prototype.propertyIsEnumerable.call(B, ie[V]) && (X[ie[V]] = B[ie[V]]);
    return X;
  };
  Object.defineProperty(xn, "__esModule", { value: !0 });
  var F = E(Wt), _ = 89, T = 90, v = 77, k = 57, N = 219, R = 222, W = 192, re = 100, ae = 3e3, ee = typeof window < "u" && "navigator" in window && /Win/i.test(navigator.platform), z = typeof window < "u" && "navigator" in window && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), D = "npm__react-simple-code-editor__textarea", A = (
    /* CSS */
    `
/**
 * Reset the text fill color so that placeholder is visible
 */
.`.concat(D, `:empty {
  -webkit-text-fill-color: inherit !important;
}

/**
 * Hack to apply on some CSS on IE10 and IE11
 */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  /**
    * IE doesn't support '-webkit-text-fill-color'
    * So we use 'color: transparent' to make the text transparent on IE
    * Unlike other browsers, it doesn't affect caret color in IE
    */
  .`).concat(D, ` {
    color: transparent !important;
  }

  .`).concat(D, `::selection {
    background-color: #accef7 !important;
    color: transparent !important;
  }
}
`)
  ), U = F.forwardRef(function(O, X) {
    var ie = O.autoFocus, V = O.disabled, Fe = O.form, De = O.highlight, Ne = O.ignoreTabKey, oe = Ne === void 0 ? !1 : Ne, me = O.insertSpaces, He = me === void 0 ? !0 : me, we = O.maxLength, ht = O.minLength, fe = O.name, te = O.onBlur, Le = O.onClick, _e = O.onFocus, Se = O.onKeyDown, gt = O.onKeyUp, tt = O.onValueChange, $e = O.padding, Ee = $e === void 0 ? 0 : $e, St = O.placeholder, bt = O.preClassName, We = O.readOnly, vt = O.required, nt = O.style, xt = O.tabSize, Ze = xt === void 0 ? 2 : xt, dt = O.textareaClassName, At = O.textareaId, wt = O.value, de = c(O, ["autoFocus", "disabled", "form", "highlight", "ignoreTabKey", "insertSpaces", "maxLength", "minLength", "name", "onBlur", "onClick", "onFocus", "onKeyDown", "onKeyUp", "onValueChange", "padding", "placeholder", "preClassName", "readOnly", "required", "style", "tabSize", "textareaClassName", "textareaId", "value"]), q = F.useRef({
      stack: [],
      offset: -1
    }), ce = F.useRef(null), ue = F.useState(!0), ye = ue[0], ge = ue[1], ze = {
      paddingTop: typeof Ee == "object" ? Ee.top : Ee,
      paddingRight: typeof Ee == "object" ? Ee.right : Ee,
      paddingBottom: typeof Ee == "object" ? Ee.bottom : Ee,
      paddingLeft: typeof Ee == "object" ? Ee.left : Ee
    }, Ue = De(wt), kt = function(ne, Be) {
      return ne.substring(0, Be).split(`
`);
    }, Dt = F.useCallback(function(ne, Be) {
      var ke, Pe, qe;
      Be === void 0 && (Be = !1);
      var Ve = q.current, rt = Ve.stack, Tt = Ve.offset;
      if (rt.length && Tt > -1) {
        q.current.stack = rt.slice(0, Tt + 1);
        var Me = q.current.stack.length;
        if (Me > re) {
          var Rt = Me - re;
          q.current.stack = rt.slice(Rt, Me), q.current.offset = Math.max(q.current.offset - Rt, 0);
        }
      }
      var Ct = Date.now();
      if (Be) {
        var Et = q.current.stack[q.current.offset];
        if (Et && Ct - Et.timestamp < ae) {
          var Ft = /[^a-z0-9]([a-z0-9]+)$/i, ft = (ke = kt(Et.value, Et.selectionStart).pop()) === null || ke === void 0 ? void 0 : ke.match(Ft), _t = (Pe = kt(ne.value, ne.selectionStart).pop()) === null || Pe === void 0 ? void 0 : Pe.match(Ft);
          if (ft != null && ft[1] && (!((qe = _t == null ? void 0 : _t[1]) === null || qe === void 0) && qe.startsWith(ft[1]))) {
            q.current.stack[q.current.offset] = b(b({}, ne), { timestamp: Ct });
            return;
          }
        }
      }
      q.current.stack.push(b(b({}, ne), { timestamp: Ct })), q.current.offset++;
    }, []), Lt = F.useCallback(function() {
      var ne = ce.current;
      if (ne) {
        var Be = ne.value, ke = ne.selectionStart, Pe = ne.selectionEnd;
        Dt({
          value: Be,
          selectionStart: ke,
          selectionEnd: Pe
        });
      }
    }, [Dt]), Ke = function(ne) {
      var Be = ce.current;
      Be && (Be.value = ne.value, Be.selectionStart = ne.selectionStart, Be.selectionEnd = ne.selectionEnd, tt == null || tt(ne.value));
    }, Pt = function(ne) {
      var Be = ce.current, ke = q.current.stack[q.current.offset];
      ke && Be && (q.current.stack[q.current.offset] = b(b({}, ke), { selectionStart: Be.selectionStart, selectionEnd: Be.selectionEnd })), Dt(ne), Ke(ne);
    }, $t = function() {
      var ne = q.current, Be = ne.stack, ke = ne.offset, Pe = Be[ke - 1];
      Pe && (Ke(Pe), q.current.offset = Math.max(ke - 1, 0));
    }, Mt = function() {
      var ne = q.current, Be = ne.stack, ke = ne.offset, Pe = Be[ke + 1];
      Pe && (Ke(Pe), q.current.offset = Math.min(ke + 1, Be.length - 1));
    }, wn = function(ne) {
      if (!(Se && (Se(ne), ne.defaultPrevented))) {
        ne.key === "Escape" && ne.currentTarget.blur();
        var Be = ne.currentTarget, ke = Be.value, Pe = Be.selectionStart, qe = Be.selectionEnd, Ve = (He ? " " : "	").repeat(Ze);
        if (ne.key === "Tab" && !oe && ye)
          if (ne.preventDefault(), ne.shiftKey) {
            var rt = kt(ke, Pe), Tt = rt.length - 1, Me = kt(ke, qe).length - 1, Rt = ke.split(`
`).map(function(Gt, Fn) {
              return Fn >= Tt && Fn <= Me && Gt.startsWith(Ve) ? Gt.substring(Ve.length) : Gt;
            }).join(`
`);
            if (ke !== Rt) {
              var Ct = rt[Tt];
              Pt({
                value: Rt,
                // Move the start cursor if first line in selection was modified
                // It was modified only if it started with a tab
                selectionStart: Ct != null && Ct.startsWith(Ve) ? Pe - Ve.length : Pe,
                // Move the end cursor by total number of characters removed
                selectionEnd: qe - (ke.length - Rt.length)
              });
            }
          } else if (Pe !== qe) {
            var rt = kt(ke, Pe), Et = rt.length - 1, Ft = kt(ke, qe).length - 1, Ct = rt[Et];
            Pt({
              value: ke.split(`
`).map(function(_n, w) {
                return w >= Et && w <= Ft ? Ve + _n : _n;
              }).join(`
`),
              // Move the start cursor by number of characters added in first line of selection
              // Don't move it if it there was no text before cursor
              selectionStart: Ct && /\S/.test(Ct) ? Pe + Ve.length : Pe,
              // Move the end cursor by total number of characters added
              selectionEnd: qe + Ve.length * (Ft - Et + 1)
            });
          } else {
            var ft = Pe + Ve.length;
            Pt({
              // Insert tab character at caret
              value: ke.substring(0, Pe) + Ve + ke.substring(qe),
              // Update caret position
              selectionStart: ft,
              selectionEnd: ft
            });
          }
        else if (ne.key === "Backspace") {
          var _t = Pe !== qe, mt = ke.substring(0, Pe);
          if (mt.endsWith(Ve) && !_t) {
            ne.preventDefault();
            var ft = Pe - Ve.length;
            Pt({
              // Remove tab character at caret
              value: ke.substring(0, Pe - Ve.length) + ke.substring(qe),
              // Update caret position
              selectionStart: ft,
              selectionEnd: ft
            });
          }
        } else if (ne.key === "Enter") {
          if (Pe === qe) {
            var rn = kt(ke, Pe).pop(), Vt = rn == null ? void 0 : rn.match(/^\s+/);
            if (Vt != null && Vt[0]) {
              ne.preventDefault();
              var vn = `
` + Vt[0], ft = Pe + vn.length;
              Pt({
                // Insert indentation character at caret
                value: ke.substring(0, Pe) + vn + ke.substring(qe),
                // Update caret position
                selectionStart: ft,
                selectionEnd: ft
              });
            }
          }
        } else if (ne.keyCode === k || ne.keyCode === N || ne.keyCode === R || ne.keyCode === W) {
          var Ge = void 0;
          ne.keyCode === k && ne.shiftKey ? Ge = ["(", ")"] : ne.keyCode === N ? ne.shiftKey ? Ge = ["{", "}"] : Ge = ["[", "]"] : ne.keyCode === R ? ne.shiftKey ? Ge = ['"', '"'] : Ge = ["'", "'"] : ne.keyCode === W && !ne.shiftKey && (Ge = ["`", "`"]), Pe !== qe && Ge && (ne.preventDefault(), Pt({
            value: ke.substring(0, Pe) + Ge[0] + ke.substring(Pe, qe) + Ge[1] + ke.substring(qe),
            // Update caret position
            selectionStart: Pe,
            selectionEnd: qe + 2
          }));
        } else (z ? (
          // Trigger undo with ⌘+Z on Mac
          ne.metaKey && ne.keyCode === T
        ) : (
          // Trigger undo with Ctrl+Z on other platforms
          ne.ctrlKey && ne.keyCode === T
        )) && !ne.shiftKey && !ne.altKey ? (ne.preventDefault(), $t()) : (z ? (
          // Trigger redo with ⌘+Shift+Z on Mac
          ne.metaKey && ne.keyCode === T && ne.shiftKey
        ) : ee ? (
          // Trigger redo with Ctrl+Y on Windows
          ne.ctrlKey && ne.keyCode === _
        ) : (
          // Trigger redo with Ctrl+Shift+Z on other platforms
          ne.ctrlKey && ne.keyCode === T && ne.shiftKey
        )) && !ne.altKey ? (ne.preventDefault(), Mt()) : ne.keyCode === v && ne.ctrlKey && (!z || ne.shiftKey) && (ne.preventDefault(), ge(function(Gt) {
          return !Gt;
        }));
      }
    }, gn = function(ne) {
      var Be = ne.currentTarget, ke = Be.value, Pe = Be.selectionStart, qe = Be.selectionEnd;
      Dt({
        value: ke,
        selectionStart: Pe,
        selectionEnd: qe
      }, !0), tt(ke);
    };
    return F.useEffect(function() {
      Lt();
    }, [Lt]), F.useImperativeHandle(X, function() {
      return {
        get session() {
          return {
            history: q.current
          };
        },
        set session(ne) {
          q.current = ne.history;
        }
      };
    }, []), F.createElement(
      "div",
      b({}, de, { style: b(b({}, Y.container), nt) }),
      F.createElement("pre", b({ className: bt, "aria-hidden": "true", style: b(b(b({}, Y.editor), Y.highlight), ze) }, typeof Ue == "string" ? { dangerouslySetInnerHTML: { __html: Ue + "<br />" } } : { children: Ue })),
      F.createElement("textarea", { ref: function(ne) {
        return ce.current = ne;
      }, style: b(b(b({}, Y.editor), Y.textarea), ze), className: D + (dt ? " ".concat(dt) : ""), id: At, value: wt, onChange: gn, onKeyDown: wn, onClick: Le, onKeyUp: gt, onFocus: _e, onBlur: te, disabled: V, form: Fe, maxLength: we, minLength: ht, name: fe, placeholder: St, readOnly: We, required: vt, autoFocus: ie, autoCapitalize: "off", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "data-gramm": !1 }),
      F.createElement("style", { dangerouslySetInnerHTML: { __html: A } })
    );
  }), Y = {
    container: {
      position: "relative",
      textAlign: "left",
      boxSizing: "border-box",
      padding: 0,
      overflow: "hidden"
    },
    textarea: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      resize: "none",
      color: "inherit",
      overflow: "hidden",
      MozOsxFontSmoothing: "grayscale",
      WebkitFontSmoothing: "antialiased",
      WebkitTextFillColor: "transparent"
    },
    highlight: {
      position: "relative",
      pointerEvents: "none"
    },
    editor: {
      margin: 0,
      border: 0,
      background: "none",
      boxSizing: "inherit",
      display: "inherit",
      fontFamily: "inherit",
      fontSize: "inherit",
      fontStyle: "inherit",
      fontVariantLigatures: "inherit",
      fontWeight: "inherit",
      letterSpacing: "inherit",
      lineHeight: "inherit",
      tabSize: "inherit",
      textIndent: "inherit",
      textRendering: "inherit",
      textTransform: "inherit",
      whiteSpace: "pre-wrap",
      wordBreak: "keep-all",
      overflowWrap: "break-word"
    }
  };
  return xn.default = U, xn;
}
var Hu = Nu();
const Wu = /* @__PURE__ */ $l(Hu);
var dl = { exports: {} }, jl;
function zu() {
  return jl || (jl = 1, function(b) {
    var f = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     *
     * @license MIT <https://opensource.org/licenses/MIT>
     * @author Lea Verou <https://lea.verou.me>
     * @namespace
     * @public
     */
    var y = function(E) {
      var c = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, F = 0, _ = {}, T = {
        /**
         * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
         * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
         * additional languages or plugins yourself.
         *
         * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
         *
         * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.manual = true;
         * // add a new <script> to load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        manual: E.Prism && E.Prism.manual,
        /**
         * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
         * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
         * own worker, you don't want it to do this.
         *
         * By setting this value to `true`, Prism will not add its own listeners to the worker.
         *
         * You obviously have to change this value before Prism executes. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.disableWorkerMessageHandler = true;
         * // Load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        disableWorkerMessageHandler: E.Prism && E.Prism.disableWorkerMessageHandler,
        /**
         * A namespace for utility methods.
         *
         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
         * change or disappear at any time.
         *
         * @namespace
         * @memberof Prism
         */
        util: {
          encode: function A(U) {
            return U instanceof v ? new v(U.type, A(U.content), U.alias) : Array.isArray(U) ? U.map(A) : U.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          /**
           * Returns the name of the type of the given value.
           *
           * @param {any} o
           * @returns {string}
           * @example
           * type(null)      === 'Null'
           * type(undefined) === 'Undefined'
           * type(123)       === 'Number'
           * type('foo')     === 'String'
           * type(true)      === 'Boolean'
           * type([1, 2])    === 'Array'
           * type({})        === 'Object'
           * type(String)    === 'Function'
           * type(/abc+/)    === 'RegExp'
           */
          type: function(A) {
            return Object.prototype.toString.call(A).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(A) {
            return A.__id || Object.defineProperty(A, "__id", { value: ++F }), A.__id;
          },
          /**
           * Creates a deep clone of the given object.
           *
           * The main intended use of this function is to clone language definitions.
           *
           * @param {T} o
           * @param {Record<number, any>} [visited]
           * @returns {T}
           * @template T
           */
          clone: function A(U, Y) {
            Y = Y || {};
            var B, O;
            switch (T.util.type(U)) {
              case "Object":
                if (O = T.util.objId(U), Y[O])
                  return Y[O];
                B = /** @type {Record<string, any>} */
                {}, Y[O] = B;
                for (var X in U)
                  U.hasOwnProperty(X) && (B[X] = A(U[X], Y));
                return (
                  /** @type {any} */
                  B
                );
              case "Array":
                return O = T.util.objId(U), Y[O] ? Y[O] : (B = [], Y[O] = B, /** @type {Array} */
                /** @type {any} */
                U.forEach(function(ie, V) {
                  B[V] = A(ie, Y);
                }), /** @type {any} */
                B);
              default:
                return U;
            }
          },
          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function(A) {
            for (; A; ) {
              var U = c.exec(A.className);
              if (U)
                return U[1].toLowerCase();
              A = A.parentElement;
            }
            return "none";
          },
          /**
           * Sets the Prism `language-xxxx` class of the given element.
           *
           * @param {Element} element
           * @param {string} language
           * @returns {void}
           */
          setLanguage: function(A, U) {
            A.className = A.className.replace(RegExp(c, "gi"), ""), A.classList.add("language-" + U);
          },
          /**
           * Returns the script element that is currently executing.
           *
           * This does __not__ work for line script element.
           *
           * @returns {HTMLScriptElement | null}
           */
          currentScript: function() {
            if (typeof document > "u")
              return null;
            if (document.currentScript && document.currentScript.tagName === "SCRIPT")
              return (
                /** @type {any} */
                document.currentScript
              );
            try {
              throw new Error();
            } catch (B) {
              var A = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(B.stack) || [])[1];
              if (A) {
                var U = document.getElementsByTagName("script");
                for (var Y in U)
                  if (U[Y].src == A)
                    return U[Y];
              }
              return null;
            }
          },
          /**
           * Returns whether a given class is active for `element`.
           *
           * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
           * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
           * given class is just the given class with a `no-` prefix.
           *
           * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
           * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
           * ancestors have the given class or the negated version of it, then the default activation will be returned.
           *
           * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
           * version of it, the class is considered active.
           *
           * @param {Element} element
           * @param {string} className
           * @param {boolean} [defaultActivation=false]
           * @returns {boolean}
           */
          isActive: function(A, U, Y) {
            for (var B = "no-" + U; A; ) {
              var O = A.classList;
              if (O.contains(U))
                return !0;
              if (O.contains(B))
                return !1;
              A = A.parentElement;
            }
            return !!Y;
          }
        },
        /**
         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
         *
         * @namespace
         * @memberof Prism
         * @public
         */
        languages: {
          /**
           * The grammar for plain, unformatted text.
           */
          plain: _,
          plaintext: _,
          text: _,
          txt: _,
          /**
           * Creates a deep copy of the language with the given id and appends the given tokens.
           *
           * If a token in `redef` also appears in the copied language, then the existing token in the copied language
           * will be overwritten at its original position.
           *
           * ## Best practices
           *
           * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
           * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
           * understand the language definition because, normally, the order of tokens matters in Prism grammars.
           *
           * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
           * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
           *
           * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
           * @param {Grammar} redef The new tokens to append.
           * @returns {Grammar} The new language created.
           * @public
           * @example
           * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
           *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
           *     // at its original position
           *     'comment': { ... },
           *     // CSS doesn't have a 'color' token, so this token will be appended
           *     'color': /\b(?:red|green|blue)\b/
           * });
           */
          extend: function(A, U) {
            var Y = T.util.clone(T.languages[A]);
            for (var B in U)
              Y[B] = U[B];
            return Y;
          },
          /**
           * Inserts tokens _before_ another token in a language definition or any other grammar.
           *
           * ## Usage
           *
           * This helper method makes it easy to modify existing languages. For example, the CSS language definition
           * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
           * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
           * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
           * this:
           *
           * ```js
           * Prism.languages.markup.style = {
           *     // token
           * };
           * ```
           *
           * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
           * before existing tokens. For the CSS example above, you would use it like this:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'cdata', {
           *     'style': {
           *         // token
           *     }
           * });
           * ```
           *
           * ## Special cases
           *
           * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
           * will be ignored.
           *
           * This behavior can be used to insert tokens after `before`:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'comment', {
           *     'comment': Prism.languages.markup.comment,
           *     // tokens after 'comment'
           * });
           * ```
           *
           * ## Limitations
           *
           * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
           * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
           * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
           * deleting properties which is necessary to insert at arbitrary positions.
           *
           * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
           * Instead, it will create a new object and replace all references to the target object with the new one. This
           * can be done without temporarily deleting properties, so the iteration order is well-defined.
           *
           * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
           * you hold the target object in a variable, then the value of the variable will not change.
           *
           * ```js
           * var oldMarkup = Prism.languages.markup;
           * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
           *
           * assert(oldMarkup !== Prism.languages.markup);
           * assert(newMarkup === Prism.languages.markup);
           * ```
           *
           * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
           * object to be modified.
           * @param {string} before The key to insert before.
           * @param {Grammar} insert An object containing the key-value pairs to be inserted.
           * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
           * object to be modified.
           *
           * Defaults to `Prism.languages`.
           * @returns {Grammar} The new grammar object.
           * @public
           */
          insertBefore: function(A, U, Y, B) {
            B = B || /** @type {any} */
            T.languages;
            var O = B[A], X = {};
            for (var ie in O)
              if (O.hasOwnProperty(ie)) {
                if (ie == U)
                  for (var V in Y)
                    Y.hasOwnProperty(V) && (X[V] = Y[V]);
                Y.hasOwnProperty(ie) || (X[ie] = O[ie]);
              }
            var Fe = B[A];
            return B[A] = X, T.languages.DFS(T.languages, function(De, Ne) {
              Ne === Fe && De != A && (this[De] = X);
            }), X;
          },
          // Traverse a language definition with Depth First Search
          DFS: function A(U, Y, B, O) {
            O = O || {};
            var X = T.util.objId;
            for (var ie in U)
              if (U.hasOwnProperty(ie)) {
                Y.call(U, ie, U[ie], B || ie);
                var V = U[ie], Fe = T.util.type(V);
                Fe === "Object" && !O[X(V)] ? (O[X(V)] = !0, A(V, Y, null, O)) : Fe === "Array" && !O[X(V)] && (O[X(V)] = !0, A(V, Y, ie, O));
              }
          }
        },
        plugins: {},
        /**
         * This is the most high-level function in Prism’s API.
         * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
         * each one of them.
         *
         * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
         *
         * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
         * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
         * @memberof Prism
         * @public
         */
        highlightAll: function(A, U) {
          T.highlightAllUnder(document, A, U);
        },
        /**
         * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
         * {@link Prism.highlightElement} on each one of them.
         *
         * The following hooks will be run:
         * 1. `before-highlightall`
         * 2. `before-all-elements-highlight`
         * 3. All hooks of {@link Prism.highlightElement} for each element.
         *
         * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
         * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
         * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
         * @memberof Prism
         * @public
         */
        highlightAllUnder: function(A, U, Y) {
          var B = {
            callback: Y,
            container: A,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          T.hooks.run("before-highlightall", B), B.elements = Array.prototype.slice.apply(B.container.querySelectorAll(B.selector)), T.hooks.run("before-all-elements-highlight", B);
          for (var O = 0, X; X = B.elements[O++]; )
            T.highlightElement(X, U === !0, B.callback);
        },
        /**
         * Highlights the code inside a single element.
         *
         * The following hooks will be run:
         * 1. `before-sanity-check`
         * 2. `before-highlight`
         * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
         * 4. `before-insert`
         * 5. `after-highlight`
         * 6. `complete`
         *
         * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
         * the element's language.
         *
         * @param {Element} element The element containing the code.
         * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
         * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
         * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
         * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
         *
         * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
         * asynchronous highlighting to work. You can build your own bundle on the
         * [Download page](https://prismjs.com/download.html).
         * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
         * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
         * @memberof Prism
         * @public
         */
        highlightElement: function(A, U, Y) {
          var B = T.util.getLanguage(A), O = T.languages[B];
          T.util.setLanguage(A, B);
          var X = A.parentElement;
          X && X.nodeName.toLowerCase() === "pre" && T.util.setLanguage(X, B);
          var ie = A.textContent, V = {
            element: A,
            language: B,
            grammar: O,
            code: ie
          };
          function Fe(Ne) {
            V.highlightedCode = Ne, T.hooks.run("before-insert", V), V.element.innerHTML = V.highlightedCode, T.hooks.run("after-highlight", V), T.hooks.run("complete", V), Y && Y.call(V.element);
          }
          if (T.hooks.run("before-sanity-check", V), X = V.element.parentElement, X && X.nodeName.toLowerCase() === "pre" && !X.hasAttribute("tabindex") && X.setAttribute("tabindex", "0"), !V.code) {
            T.hooks.run("complete", V), Y && Y.call(V.element);
            return;
          }
          if (T.hooks.run("before-highlight", V), !V.grammar) {
            Fe(T.util.encode(V.code));
            return;
          }
          if (U && E.Worker) {
            var De = new Worker(T.filename);
            De.onmessage = function(Ne) {
              Fe(Ne.data);
            }, De.postMessage(JSON.stringify({
              language: V.language,
              code: V.code,
              immediateClose: !0
            }));
          } else
            Fe(T.highlight(V.code, V.grammar, V.language));
        },
        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
         * and the language definitions to use, and returns a string with the HTML produced.
         *
         * The following hooks will be run:
         * 1. `before-tokenize`
         * 2. `after-tokenize`
         * 3. `wrap`: On each {@link Token}.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @param {string} language The name of the language definition passed to `grammar`.
         * @returns {string} The highlighted HTML.
         * @memberof Prism
         * @public
         * @example
         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
         */
        highlight: function(A, U, Y) {
          var B = {
            code: A,
            grammar: U,
            language: Y
          };
          if (T.hooks.run("before-tokenize", B), !B.grammar)
            throw new Error('The language "' + B.language + '" has no grammar.');
          return B.tokens = T.tokenize(B.code, B.grammar), T.hooks.run("after-tokenize", B), v.stringify(T.util.encode(B.tokens), B.language);
        },
        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
         * and the language definitions to use, and returns an array with the tokenized code.
         *
         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
         *
         * This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @returns {TokenStream} An array of strings and tokens, a token stream.
         * @memberof Prism
         * @public
         * @example
         * let code = `var foo = 0;`;
         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
         * tokens.forEach(token => {
         *     if (token instanceof Prism.Token && token.type === 'number') {
         *         console.log(`Found numeric literal: ${token.content}`);
         *     }
         * });
         */
        tokenize: function(A, U) {
          var Y = U.rest;
          if (Y) {
            for (var B in Y)
              U[B] = Y[B];
            delete U.rest;
          }
          var O = new R();
          return W(O, O.head, A), N(A, O, U, O.head, 0), ae(O);
        },
        /**
         * @namespace
         * @memberof Prism
         * @public
         */
        hooks: {
          all: {},
          /**
           * Adds the given callback to the list of callbacks for the given hook.
           *
           * The callback will be invoked when the hook it is registered for is run.
           * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
           *
           * One callback function can be registered to multiple hooks and the same hook multiple times.
           *
           * @param {string} name The name of the hook.
           * @param {HookCallback} callback The callback function which is given environment variables.
           * @public
           */
          add: function(A, U) {
            var Y = T.hooks.all;
            Y[A] = Y[A] || [], Y[A].push(U);
          },
          /**
           * Runs a hook invoking all registered callbacks with the given environment variables.
           *
           * Callbacks will be invoked synchronously and in the order in which they were registered.
           *
           * @param {string} name The name of the hook.
           * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
           * @public
           */
          run: function(A, U) {
            var Y = T.hooks.all[A];
            if (!(!Y || !Y.length))
              for (var B = 0, O; O = Y[B++]; )
                O(U);
          }
        },
        Token: v
      };
      E.Prism = T;
      function v(A, U, Y, B) {
        this.type = A, this.content = U, this.alias = Y, this.length = (B || "").length | 0;
      }
      v.stringify = function A(U, Y) {
        if (typeof U == "string")
          return U;
        if (Array.isArray(U)) {
          var B = "";
          return U.forEach(function(Fe) {
            B += A(Fe, Y);
          }), B;
        }
        var O = {
          type: U.type,
          content: A(U.content, Y),
          tag: "span",
          classes: ["token", U.type],
          attributes: {},
          language: Y
        }, X = U.alias;
        X && (Array.isArray(X) ? Array.prototype.push.apply(O.classes, X) : O.classes.push(X)), T.hooks.run("wrap", O);
        var ie = "";
        for (var V in O.attributes)
          ie += " " + V + '="' + (O.attributes[V] || "").replace(/"/g, "&quot;") + '"';
        return "<" + O.tag + ' class="' + O.classes.join(" ") + '"' + ie + ">" + O.content + "</" + O.tag + ">";
      };
      function k(A, U, Y, B) {
        A.lastIndex = U;
        var O = A.exec(Y);
        if (O && B && O[1]) {
          var X = O[1].length;
          O.index += X, O[0] = O[0].slice(X);
        }
        return O;
      }
      function N(A, U, Y, B, O, X) {
        for (var ie in Y)
          if (!(!Y.hasOwnProperty(ie) || !Y[ie])) {
            var V = Y[ie];
            V = Array.isArray(V) ? V : [V];
            for (var Fe = 0; Fe < V.length; ++Fe) {
              if (X && X.cause == ie + "," + Fe)
                return;
              var De = V[Fe], Ne = De.inside, oe = !!De.lookbehind, me = !!De.greedy, He = De.alias;
              if (me && !De.pattern.global) {
                var we = De.pattern.toString().match(/[imsuy]*$/)[0];
                De.pattern = RegExp(De.pattern.source, we + "g");
              }
              for (var ht = De.pattern || De, fe = B.next, te = O; fe !== U.tail && !(X && te >= X.reach); te += fe.value.length, fe = fe.next) {
                var Le = fe.value;
                if (U.length > A.length)
                  return;
                if (!(Le instanceof v)) {
                  var _e = 1, Se;
                  if (me) {
                    if (Se = k(ht, te, A, oe), !Se || Se.index >= A.length)
                      break;
                    var Ee = Se.index, gt = Se.index + Se[0].length, tt = te;
                    for (tt += fe.value.length; Ee >= tt; )
                      fe = fe.next, tt += fe.value.length;
                    if (tt -= fe.value.length, te = tt, fe.value instanceof v)
                      continue;
                    for (var $e = fe; $e !== U.tail && (tt < gt || typeof $e.value == "string"); $e = $e.next)
                      _e++, tt += $e.value.length;
                    _e--, Le = A.slice(te, tt), Se.index -= te;
                  } else if (Se = k(ht, 0, Le, oe), !Se)
                    continue;
                  var Ee = Se.index, St = Se[0], bt = Le.slice(0, Ee), We = Le.slice(Ee + St.length), vt = te + Le.length;
                  X && vt > X.reach && (X.reach = vt);
                  var nt = fe.prev;
                  bt && (nt = W(U, nt, bt), te += bt.length), re(U, nt, _e);
                  var xt = new v(ie, Ne ? T.tokenize(St, Ne) : St, He, St);
                  if (fe = W(U, nt, xt), We && W(U, fe, We), _e > 1) {
                    var Ze = {
                      cause: ie + "," + Fe,
                      reach: vt
                    };
                    N(A, U, Y, fe.prev, te, Ze), X && Ze.reach > X.reach && (X.reach = Ze.reach);
                  }
                }
              }
            }
          }
      }
      function R() {
        var A = { value: null, prev: null, next: null }, U = { value: null, prev: A, next: null };
        A.next = U, this.head = A, this.tail = U, this.length = 0;
      }
      function W(A, U, Y) {
        var B = U.next, O = { value: Y, prev: U, next: B };
        return U.next = O, B.prev = O, A.length++, O;
      }
      function re(A, U, Y) {
        for (var B = U.next, O = 0; O < Y && B !== A.tail; O++)
          B = B.next;
        U.next = B, B.prev = U, A.length -= O;
      }
      function ae(A) {
        for (var U = [], Y = A.head.next; Y !== A.tail; )
          U.push(Y.value), Y = Y.next;
        return U;
      }
      if (!E.document)
        return E.addEventListener && (T.disableWorkerMessageHandler || E.addEventListener("message", function(A) {
          var U = JSON.parse(A.data), Y = U.language, B = U.code, O = U.immediateClose;
          E.postMessage(T.highlight(B, T.languages[Y], Y)), O && E.close();
        }, !1)), T;
      var ee = T.util.currentScript();
      ee && (T.filename = ee.src, ee.hasAttribute("data-manual") && (T.manual = !0));
      function z() {
        T.manual || T.highlightAll();
      }
      if (!T.manual) {
        var D = document.readyState;
        D === "loading" || D === "interactive" && ee && ee.defer ? document.addEventListener("DOMContentLoaded", z) : window.requestAnimationFrame ? window.requestAnimationFrame(z) : window.setTimeout(z, 16);
      }
      return T;
    }(f);
    b.exports && (b.exports = y), typeof Sl < "u" && (Sl.Prism = y), y.languages.markup = {
      comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: !0
      },
      prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: !0
      },
      doctype: {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: !0,
            greedy: !0,
            inside: null
            // see below
          },
          string: {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: !0
          },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          name: /[^\s<>'"]+/
        }
      },
      cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: !0
      },
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                {
                  pattern: /^(\s*)["']|["']$/,
                  lookbehind: !0
                }
              ]
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      entity: [
        {
          pattern: /&[\da-z]{1,8};/i,
          alias: "named-entity"
        },
        /&#x?[\da-f]{1,8};/i
      ]
    }, y.languages.markup.tag.inside["attr-value"].inside.entity = y.languages.markup.entity, y.languages.markup.doctype.inside["internal-subset"].inside = y.languages.markup, y.hooks.add("wrap", function(E) {
      E.type === "entity" && (E.attributes.title = E.content.replace(/&amp;/, "&"));
    }), Object.defineProperty(y.languages.markup.tag, "addInlined", {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function(c, F) {
        var _ = {};
        _["language-" + F] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: y.languages[F]
        }, _.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var T = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: _
          }
        };
        T["language-" + F] = {
          pattern: /[\s\S]+/,
          inside: y.languages[F]
        };
        var v = {};
        v[c] = {
          pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
            return c;
          }), "i"),
          lookbehind: !0,
          greedy: !0,
          inside: T
        }, y.languages.insertBefore("markup", "cdata", v);
      }
    }), Object.defineProperty(y.languages.markup.tag, "addAttribute", {
      /**
       * Adds an pattern to highlight languages embedded in HTML attributes.
       *
       * An example of an inlined language is CSS with `style` attributes.
       *
       * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addAttribute('style', 'css');
       */
      value: function(E, c) {
        y.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + E + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            "i"
          ),
          lookbehind: !0,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [c, "language-" + c],
                  inside: y.languages[c]
                },
                punctuation: [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            }
          }
        });
      }
    }), y.languages.html = y.languages.markup, y.languages.mathml = y.languages.markup, y.languages.svg = y.languages.markup, y.languages.xml = y.languages.extend("markup", {}), y.languages.ssml = y.languages.xml, y.languages.atom = y.languages.xml, y.languages.rss = y.languages.xml, function(E) {
      var c = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      E.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + c.source + ")*?" + /(?:;|(?=\s*\{))/.source),
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: !0,
              alias: "selector"
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: !0
            }
            // See rest below
          }
        },
        url: {
          // https://drafts.csswg.org/css-values-3/#urls
          pattern: RegExp("\\burl\\((?:" + c.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
          greedy: !0,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + c.source + "$"),
              alias: "url"
            }
          }
        },
        selector: {
          pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + c.source + ")*(?=\\s*\\{)"),
          lookbehind: !0
        },
        string: {
          pattern: c,
          greedy: !0
        },
        property: {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: !0
        },
        important: /!important\b/i,
        function: {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: !0
        },
        punctuation: /[(){};:,]/
      }, E.languages.css.atrule.inside.rest = E.languages.css;
      var F = E.languages.markup;
      F && (F.tag.addInlined("style", "css"), F.tag.addAttribute("style", "css"));
    }(y), y.languages.clike = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: !0,
          greedy: !0
        }
      ],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
      },
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
    }, y.languages.javascript = y.languages.extend("clike", {
      "class-name": [
        y.languages.clike["class-name"],
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: !0
        }
      ],
      keyword: [
        {
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: !0
        },
        {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: !0
        }
      ],
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(
          /(^|[^\w$])/.source + "(?:" + // constant
          (/NaN|Infinity/.source + "|" + // binary integer
          /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
          /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
        ),
        lookbehind: !0
      },
      operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), y.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, y.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: RegExp(
          // lookbehind
          // eslint-disable-next-line regexp/no-dupe-characters-character-class
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
          // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
          // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
          // with the only syntax, so we have to define 2 different regex patterns.
          /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
          /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
          /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: "language-regex",
            inside: y.languages.regex
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/
        }
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      parameter: [
        {
          pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: y.languages.javascript
        },
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: y.languages.javascript
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: y.languages.javascript
        },
        {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: y.languages.javascript
        }
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), y.languages.insertBefore("javascript", "string", {
      hashbang: {
        pattern: /^#!.*/,
        greedy: !0,
        alias: "comment"
      },
      "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: y.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      },
      "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
      }
    }), y.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property"
      }
    }), y.languages.markup && (y.languages.markup.tag.addInlined("script", "javascript"), y.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
      "javascript"
    )), y.languages.js = y.languages.javascript, function() {
      if (typeof y > "u" || typeof document > "u")
        return;
      Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
      var E = "Loading…", c = function(ee, z) {
        return "✖ Error " + ee + " while fetching file: " + z;
      }, F = "✖ Error: File does not exist or is empty", _ = {
        js: "javascript",
        py: "python",
        rb: "ruby",
        ps1: "powershell",
        psm1: "powershell",
        sh: "bash",
        bat: "batch",
        h: "c",
        tex: "latex"
      }, T = "data-src-status", v = "loading", k = "loaded", N = "failed", R = "pre[data-src]:not([" + T + '="' + k + '"]):not([' + T + '="' + v + '"])';
      function W(ee, z, D) {
        var A = new XMLHttpRequest();
        A.open("GET", ee, !0), A.onreadystatechange = function() {
          A.readyState == 4 && (A.status < 400 && A.responseText ? z(A.responseText) : A.status >= 400 ? D(c(A.status, A.statusText)) : D(F));
        }, A.send(null);
      }
      function re(ee) {
        var z = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(ee || "");
        if (z) {
          var D = Number(z[1]), A = z[2], U = z[3];
          return A ? U ? [D, Number(U)] : [D, void 0] : [D, D];
        }
      }
      y.hooks.add("before-highlightall", function(ee) {
        ee.selector += ", " + R;
      }), y.hooks.add("before-sanity-check", function(ee) {
        var z = (
          /** @type {HTMLPreElement} */
          ee.element
        );
        if (z.matches(R)) {
          ee.code = "", z.setAttribute(T, v);
          var D = z.appendChild(document.createElement("CODE"));
          D.textContent = E;
          var A = z.getAttribute("data-src"), U = ee.language;
          if (U === "none") {
            var Y = (/\.(\w+)$/.exec(A) || [, "none"])[1];
            U = _[Y] || Y;
          }
          y.util.setLanguage(D, U), y.util.setLanguage(z, U);
          var B = y.plugins.autoloader;
          B && B.loadLanguages(U), W(
            A,
            function(O) {
              z.setAttribute(T, k);
              var X = re(z.getAttribute("data-range"));
              if (X) {
                var ie = O.split(/\r\n?|\n/g), V = X[0], Fe = X[1] == null ? ie.length : X[1];
                V < 0 && (V += ie.length), V = Math.max(0, Math.min(V - 1, ie.length)), Fe < 0 && (Fe += ie.length), Fe = Math.max(0, Math.min(Fe, ie.length)), O = ie.slice(V, Fe).join(`
`), z.hasAttribute("data-start") || z.setAttribute("data-start", String(V + 1));
              }
              D.textContent = O, y.highlightElement(D);
            },
            function(O) {
              z.setAttribute(T, N), D.textContent = O;
            }
          );
        }
      }), y.plugins.fileHighlight = {
        /**
         * Executes the File Highlight plugin for all matching `pre` elements under the given container.
         *
         * Note: Elements which are already loaded or currently loading will not be touched by this method.
         *
         * @param {ParentNode} [container=document]
         */
        highlight: function(z) {
          for (var D = (z || document).querySelectorAll(R), A = 0, U; U = D[A++]; )
            y.highlightElement(U);
        }
      };
      var ae = !1;
      y.fileHighlight = function() {
        ae || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), ae = !0), y.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    }();
  }(dl)), dl.exports;
}
var $u = zu();
const Bl = /* @__PURE__ */ $l($u);
(function(b) {
  var f = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  b.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + f.source + ")*?" + /(?:;|(?=\s*\{))/.source),
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0
        }
        // See rest below
      }
    },
    url: {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp("\\burl\\((?:" + f.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + f.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + f.source + ")*(?=\\s*\\{)"),
      lookbehind: !0
    },
    string: {
      pattern: f,
      greedy: !0
    },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: !0
    },
    punctuation: /[(){};:,]/
  }, b.languages.css.atrule.inside.rest = b.languages.css;
  var y = b.languages.markup;
  y && (y.tag.addInlined("style", "css"), y.tag.addAttribute("style", "css"));
})(Prism);
(function(b) {
  var f = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, y;
  b.languages.css.selector = {
    pattern: b.languages.css.selector.pattern,
    lookbehind: !0,
    inside: y = {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      class: /\.[-\w]+/,
      id: /#[-\w]+/,
      attribute: {
        pattern: RegExp(`\\[(?:[^[\\]"']|` + f.source + ")*\\]"),
        greedy: !0,
        inside: {
          punctuation: /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: !0,
            alias: "keyword"
          },
          namespace: {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: !0,
            inside: {
              punctuation: /\|$/
            }
          },
          "attr-name": {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: !0
          },
          "attr-value": [
            f,
            {
              pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
              lookbehind: !0
            }
          ],
          operator: /[|~*^$]?=/
        }
      },
      "n-th": [
        {
          pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
          lookbehind: !0,
          inside: {
            number: /[\dn]+/,
            operator: /[+-]/
          }
        },
        {
          pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
          lookbehind: !0
        }
      ],
      combinator: />|\+|~|\|\|/,
      // the `tag` token has been existed and removed.
      // because we can't find a perfect tokenize to match it.
      // if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.
      punctuation: /[(),]/
    }
  }, b.languages.css.atrule.inside["selector-function-argument"].inside = y, b.languages.insertBefore("css", "property", {
    variable: {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: !0
    }
  });
  var E = {
    pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
    lookbehind: !0
  }, c = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: !0
  };
  b.languages.insertBefore("css", "function", {
    operator: {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: !0
    },
    // CAREFUL!
    // Previewers and Inline color use hexcode and color.
    hexcode: {
      pattern: /\B#[\da-f]{3,8}\b/i,
      alias: "color"
    },
    color: [
      {
        pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
        lookbehind: !0
      },
      {
        pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
        inside: {
          unit: E,
          number: c,
          function: /[\w-]+(?=\()/,
          punctuation: /[(),]/
        }
      }
    ],
    // it's important that there is no boundary assertion after the hex digits
    entity: /\\[\da-f]{1,8}/i,
    unit: E,
    number: c
  });
})(Prism);
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0
    }
  ],
  keyword: [
    {
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: !0
    },
    {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0
    }
  ],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(
      /(^|[^\w$])/.source + "(?:" + // constant
      (/NaN|Infinity/.source + "|" + // binary integer
      /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
      /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
      /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
      /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
      /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
    ),
    lookbehind: !0
  },
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp(
      // lookbehind
      // eslint-disable-next-line regexp/no-dupe-characters-character-class
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
      // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
      // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
      // with the only syntax, so we have to define 2 different regex patterns.
      /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
      /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
      /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
    ),
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: Prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  parameter: [
    {
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore("javascript", "string", {
  hashbang: {
    pattern: /^#!.*/,
    greedy: !0,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property"
  }
});
Prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property"
  }
});
Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(
  /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
  "javascript"
));
Prism.languages.js = Prism.languages.javascript;
(function() {
  if (typeof Prism > "u" || typeof document > "u")
    return;
  var b = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g, f = /^#?((?:[\da-f]){3,4}|(?:[\da-f]{2}){3,4})$/i;
  function y(F) {
    var _ = f.exec(F);
    if (_) {
      F = _[1];
      for (var T = F.length >= 6 ? 2 : 1, v = F.length / T, k = T == 1 ? 1 / 15 : 1 / 255, N = [], R = 0; R < v; R++) {
        var W = parseInt(F.substr(R * T, T), 16);
        N.push(W * k);
      }
      v == 3 && N.push(1);
      var re = N.slice(0, 3).map(function(ee) {
        return String(Math.round(ee * 255));
      }).join(","), ae = String(Number(N[3].toFixed(3)));
      return "rgba(" + re + "," + ae + ")";
    }
  }
  function E(F) {
    var _ = new Option().style;
    return _.color = F, _.color ? F : void 0;
  }
  var c = [
    y,
    E
  ];
  Prism.hooks.add("wrap", function(F) {
    if (F.type === "color" || F.classes.indexOf("color") >= 0) {
      for (var _ = F.content, T = _.split(b).join(""), v, k = 0, N = c.length; k < N && !v; k++)
        v = c[k](T);
      if (!v)
        return;
      var R = '<span class="inline-color-wrapper"><span class="inline-color" style="background-color:' + v + ';"></span></span>';
      F.content = R + _;
    }
  });
})();
var Ul = {}, Nl;
function Vu() {
  return Nl || (Nl = 1, function() {
    if (!(typeof Prism > "u" || typeof document > "u")) {
      if (!Prism.plugins.toolbar) {
        console.warn("Show Languages plugin loaded before Toolbar plugin.");
        return;
      }
      var b = (
        /*languages_placeholder[*/
        {
          none: "Plain text",
          plain: "Plain text",
          plaintext: "Plain text",
          text: "Plain text",
          txt: "Plain text",
          html: "HTML",
          xml: "XML",
          svg: "SVG",
          mathml: "MathML",
          ssml: "SSML",
          rss: "RSS",
          css: "CSS",
          clike: "C-like",
          js: "JavaScript",
          abap: "ABAP",
          abnf: "ABNF",
          al: "AL",
          antlr4: "ANTLR4",
          g4: "ANTLR4",
          apacheconf: "Apache Configuration",
          apl: "APL",
          aql: "AQL",
          ino: "Arduino",
          arff: "ARFF",
          armasm: "ARM Assembly",
          "arm-asm": "ARM Assembly",
          art: "Arturo",
          asciidoc: "AsciiDoc",
          adoc: "AsciiDoc",
          aspnet: "ASP.NET (C#)",
          asm6502: "6502 Assembly",
          asmatmel: "Atmel AVR Assembly",
          autohotkey: "AutoHotkey",
          autoit: "AutoIt",
          avisynth: "AviSynth",
          avs: "AviSynth",
          "avro-idl": "Avro IDL",
          avdl: "Avro IDL",
          awk: "AWK",
          gawk: "GAWK",
          sh: "Shell",
          basic: "BASIC",
          bbcode: "BBcode",
          bbj: "BBj",
          bnf: "BNF",
          rbnf: "RBNF",
          bqn: "BQN",
          bsl: "BSL (1C:Enterprise)",
          oscript: "OneScript",
          csharp: "C#",
          cs: "C#",
          dotnet: "C#",
          cpp: "C++",
          cfscript: "CFScript",
          cfc: "CFScript",
          cil: "CIL",
          cilkc: "Cilk/C",
          "cilk-c": "Cilk/C",
          cilkcpp: "Cilk/C++",
          "cilk-cpp": "Cilk/C++",
          cilk: "Cilk/C++",
          cmake: "CMake",
          cobol: "COBOL",
          coffee: "CoffeeScript",
          conc: "Concurnas",
          csp: "Content-Security-Policy",
          "css-extras": "CSS Extras",
          csv: "CSV",
          cue: "CUE",
          dataweave: "DataWeave",
          dax: "DAX",
          django: "Django/Jinja2",
          jinja2: "Django/Jinja2",
          "dns-zone-file": "DNS zone file",
          "dns-zone": "DNS zone file",
          dockerfile: "Docker",
          dot: "DOT (Graphviz)",
          gv: "DOT (Graphviz)",
          ebnf: "EBNF",
          editorconfig: "EditorConfig",
          ejs: "EJS",
          etlua: "Embedded Lua templating",
          erb: "ERB",
          "excel-formula": "Excel Formula",
          xlsx: "Excel Formula",
          xls: "Excel Formula",
          fsharp: "F#",
          "firestore-security-rules": "Firestore security rules",
          ftl: "FreeMarker Template Language",
          gml: "GameMaker Language",
          gamemakerlanguage: "GameMaker Language",
          gap: "GAP (CAS)",
          gcode: "G-code",
          gdscript: "GDScript",
          gedcom: "GEDCOM",
          gettext: "gettext",
          po: "gettext",
          glsl: "GLSL",
          gn: "GN",
          gni: "GN",
          "linker-script": "GNU Linker Script",
          ld: "GNU Linker Script",
          "go-module": "Go module",
          "go-mod": "Go module",
          graphql: "GraphQL",
          hbs: "Handlebars",
          hs: "Haskell",
          hcl: "HCL",
          hlsl: "HLSL",
          http: "HTTP",
          hpkp: "HTTP Public-Key-Pins",
          hsts: "HTTP Strict-Transport-Security",
          ichigojam: "IchigoJam",
          "icu-message-format": "ICU Message Format",
          idr: "Idris",
          ignore: ".ignore",
          gitignore: ".gitignore",
          hgignore: ".hgignore",
          npmignore: ".npmignore",
          inform7: "Inform 7",
          javadoc: "JavaDoc",
          javadoclike: "JavaDoc-like",
          javastacktrace: "Java stack trace",
          jq: "JQ",
          jsdoc: "JSDoc",
          "js-extras": "JS Extras",
          json: "JSON",
          webmanifest: "Web App Manifest",
          json5: "JSON5",
          jsonp: "JSONP",
          jsstacktrace: "JS stack trace",
          "js-templates": "JS Templates",
          keepalived: "Keepalived Configure",
          kts: "Kotlin Script",
          kt: "Kotlin",
          kumir: "KuMir (КуМир)",
          kum: "KuMir (КуМир)",
          latex: "LaTeX",
          tex: "TeX",
          context: "ConTeXt",
          lilypond: "LilyPond",
          ly: "LilyPond",
          emacs: "Lisp",
          elisp: "Lisp",
          "emacs-lisp": "Lisp",
          llvm: "LLVM IR",
          log: "Log file",
          lolcode: "LOLCODE",
          magma: "Magma (CAS)",
          md: "Markdown",
          "markup-templating": "Markup templating",
          matlab: "MATLAB",
          maxscript: "MAXScript",
          mel: "MEL",
          metafont: "METAFONT",
          mongodb: "MongoDB",
          moon: "MoonScript",
          n1ql: "N1QL",
          n4js: "N4JS",
          n4jsd: "N4JS",
          "nand2tetris-hdl": "Nand To Tetris HDL",
          naniscript: "Naninovel Script",
          nani: "Naninovel Script",
          nasm: "NASM",
          neon: "NEON",
          nginx: "nginx",
          nsis: "NSIS",
          objectivec: "Objective-C",
          objc: "Objective-C",
          ocaml: "OCaml",
          opencl: "OpenCL",
          openqasm: "OpenQasm",
          qasm: "OpenQasm",
          parigp: "PARI/GP",
          objectpascal: "Object Pascal",
          psl: "PATROL Scripting Language",
          pcaxis: "PC-Axis",
          px: "PC-Axis",
          peoplecode: "PeopleCode",
          pcode: "PeopleCode",
          php: "PHP",
          phpdoc: "PHPDoc",
          "php-extras": "PHP Extras",
          "plant-uml": "PlantUML",
          plantuml: "PlantUML",
          plsql: "PL/SQL",
          powerquery: "PowerQuery",
          pq: "PowerQuery",
          mscript: "PowerQuery",
          powershell: "PowerShell",
          promql: "PromQL",
          properties: ".properties",
          protobuf: "Protocol Buffers",
          purebasic: "PureBasic",
          pbfasm: "PureBasic",
          purs: "PureScript",
          py: "Python",
          qsharp: "Q#",
          qs: "Q#",
          q: "Q (kdb+ database)",
          qml: "QML",
          rkt: "Racket",
          cshtml: "Razor C#",
          razor: "Razor C#",
          jsx: "React JSX",
          tsx: "React TSX",
          renpy: "Ren'py",
          rpy: "Ren'py",
          res: "ReScript",
          rest: "reST (reStructuredText)",
          robotframework: "Robot Framework",
          robot: "Robot Framework",
          rb: "Ruby",
          sas: "SAS",
          sass: "Sass (Sass)",
          scss: "Sass (SCSS)",
          "shell-session": "Shell session",
          "sh-session": "Shell session",
          shellsession: "Shell session",
          sml: "SML",
          smlnj: "SML/NJ",
          solidity: "Solidity (Ethereum)",
          sol: "Solidity (Ethereum)",
          "solution-file": "Solution file",
          sln: "Solution file",
          soy: "Soy (Closure Template)",
          sparql: "SPARQL",
          rq: "SPARQL",
          "splunk-spl": "Splunk SPL",
          sqf: "SQF: Status Quo Function (Arma 3)",
          sql: "SQL",
          stata: "Stata Ado",
          iecst: "Structured Text (IEC 61131-3)",
          supercollider: "SuperCollider",
          sclang: "SuperCollider",
          systemd: "Systemd configuration file",
          "t4-templating": "T4 templating",
          "t4-cs": "T4 Text Templates (C#)",
          t4: "T4 Text Templates (C#)",
          "t4-vb": "T4 Text Templates (VB)",
          tap: "TAP",
          tt2: "Template Toolkit 2",
          toml: "TOML",
          trickle: "trickle",
          troy: "troy",
          trig: "TriG",
          ts: "TypeScript",
          tsconfig: "TSConfig",
          uscript: "UnrealScript",
          uc: "UnrealScript",
          uorazor: "UO Razor Script",
          uri: "URI",
          url: "URL",
          vbnet: "VB.Net",
          vhdl: "VHDL",
          vim: "vim",
          "visual-basic": "Visual Basic",
          vba: "VBA",
          vb: "Visual Basic",
          wasm: "WebAssembly",
          "web-idl": "Web IDL",
          webidl: "Web IDL",
          wgsl: "WGSL",
          wiki: "Wiki markup",
          wolfram: "Wolfram language",
          nb: "Mathematica Notebook",
          wl: "Wolfram language",
          xeoracube: "XeoraCube",
          "xml-doc": "XML doc (.net)",
          xojo: "Xojo (REALbasic)",
          xquery: "XQuery",
          yaml: "YAML",
          yml: "YAML",
          yang: "YANG"
        }
      );
      Prism.plugins.toolbar.registerButton("show-language", function(f) {
        var y = f.element.parentNode;
        if (!y || !/pre/i.test(y.nodeName))
          return;
        function E(_) {
          return _ && (_.substring(0, 1).toUpperCase() + _.substring(1)).replace(/s(?=cript)/, "S");
        }
        var c = y.getAttribute("data-language") || b[f.language] || E(f.language);
        if (c) {
          var F = document.createElement("span");
          return F.textContent = c, F;
        }
      });
    }
  }()), Ul;
}
Vu();
var Hl = {}, Wl;
function Gu() {
  return Wl || (Wl = 1, function() {
    if (typeof Prism > "u" || typeof document > "u")
      return;
    var b = "line-numbers", f = /\n(?!$)/g, y = Prism.plugins.lineNumbers = {
      /**
       * Get node for provided line number
       *
       * @param {Element} element pre element
       * @param {number} number line number
       * @returns {Element|undefined}
       */
      getLine: function(_, T) {
        if (!(_.tagName !== "PRE" || !_.classList.contains(b))) {
          var v = _.querySelector(".line-numbers-rows");
          if (v) {
            var k = parseInt(_.getAttribute("data-start"), 10) || 1, N = k + (v.children.length - 1);
            T < k && (T = k), T > N && (T = N);
            var R = T - k;
            return v.children[R];
          }
        }
      },
      /**
       * Resizes the line numbers of the given element.
       *
       * This function will not add line numbers. It will only resize existing ones.
       *
       * @param {HTMLElement} element A `<pre>` element with line numbers.
       * @returns {void}
       */
      resize: function(_) {
        E([_]);
      },
      /**
       * Whether the plugin can assume that the units font sizes and margins are not depended on the size of
       * the current viewport.
       *
       * Setting this to `true` will allow the plugin to do certain optimizations for better performance.
       *
       * Set this to `false` if you use any of the following CSS units: `vh`, `vw`, `vmin`, `vmax`.
       *
       * @type {boolean}
       */
      assumeViewportIndependence: !0
    };
    function E(_) {
      if (_ = _.filter(function(v) {
        var k = c(v), N = k["white-space"];
        return N === "pre-wrap" || N === "pre-line";
      }), _.length != 0) {
        var T = _.map(function(v) {
          var k = v.querySelector("code"), N = v.querySelector(".line-numbers-rows");
          if (!(!k || !N)) {
            var R = v.querySelector(".line-numbers-sizer"), W = k.textContent.split(f);
            R || (R = document.createElement("span"), R.className = "line-numbers-sizer", k.appendChild(R)), R.innerHTML = "0", R.style.display = "block";
            var re = R.getBoundingClientRect().height;
            return R.innerHTML = "", {
              element: v,
              lines: W,
              lineHeights: [],
              oneLinerHeight: re,
              sizer: R
            };
          }
        }).filter(Boolean);
        T.forEach(function(v) {
          var k = v.sizer, N = v.lines, R = v.lineHeights, W = v.oneLinerHeight;
          R[N.length - 1] = void 0, N.forEach(function(re, ae) {
            if (re && re.length > 1) {
              var ee = k.appendChild(document.createElement("span"));
              ee.style.display = "block", ee.textContent = re;
            } else
              R[ae] = W;
          });
        }), T.forEach(function(v) {
          for (var k = v.sizer, N = v.lineHeights, R = 0, W = 0; W < N.length; W++)
            N[W] === void 0 && (N[W] = k.children[R++].getBoundingClientRect().height);
        }), T.forEach(function(v) {
          var k = v.sizer, N = v.element.querySelector(".line-numbers-rows");
          k.style.display = "none", k.innerHTML = "", v.lineHeights.forEach(function(R, W) {
            N.children[W].style.height = R + "px";
          });
        });
      }
    }
    function c(_) {
      return _ ? window.getComputedStyle ? getComputedStyle(_) : _.currentStyle || null : null;
    }
    var F = void 0;
    window.addEventListener("resize", function() {
      y.assumeViewportIndependence && F === window.innerWidth || (F = window.innerWidth, E(Array.prototype.slice.call(document.querySelectorAll("pre." + b))));
    }), Prism.hooks.add("complete", function(_) {
      if (_.code) {
        var T = (
          /** @type {Element} */
          _.element
        ), v = (
          /** @type {HTMLElement} */
          T.parentNode
        );
        if (!(!v || !/pre/i.test(v.nodeName)) && !T.querySelector(".line-numbers-rows") && Prism.util.isActive(T, b)) {
          T.classList.remove(b), v.classList.add(b);
          var k = _.code.match(f), N = k ? k.length + 1 : 1, R, W = new Array(N + 1).join("<span></span>");
          R = document.createElement("span"), R.setAttribute("aria-hidden", "true"), R.className = "line-numbers-rows", R.innerHTML = W, v.hasAttribute("data-start") && (v.style.counterReset = "linenumber " + (parseInt(v.getAttribute("data-start"), 10) - 1)), _.element.appendChild(R), E([v]), Prism.hooks.run("line-numbers", _);
        }
      }
    }), Prism.hooks.add("line-numbers", function(_) {
      _.plugins = _.plugins || {}, _.plugins.lineNumbers = !0;
    });
  }()), Hl;
}
Gu();
const _a = ({ language: b = "text", onRender: f = void 0, sectionName: y = void 0, ...E }) => {
  const { editing: c, editorState: F, setState: _ } = zt(y);
  return !c && f ? f(F) : /* @__PURE__ */ C.jsxs("div", { children: [
    /* @__PURE__ */ C.jsx("header", { style: {
      fontWeight: "bold",
      fontSize: "0.7rem",
      background: "#eeeeff",
      color: "#2222aa",
      padding: 4,
      paddingLeft: 8,
      textTransform: "uppercase",
      letterSpacing: 1,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
    }, children: b }),
    /* @__PURE__ */ C.jsx(
      Wu,
      {
        value: F,
        onValueChange: (T) => _(T),
        highlight: (T) => Bl.highlight(T || "", Bl.languages[b], b),
        padding: 10,
        readOnly: !c,
        style: {
          background: "white",
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12
        }
      }
    )
  ] });
}, lc = (b) => _a({ language: "css", ...b }), uc = (b) => _a({ language: "javascript", ...b }), cc = (b) => _a({ language: "html", ...b }), dc = (b) => {
  const { editing: f, setState: y } = zt(), { html: E, script: c, css: F } = b, [_, T] = Wt.useState(0);
  let v = [E, F, c];
  const k = ["HTML", "CSS", "JS"], N = [
    /* @__PURE__ */ C.jsx(_a, { language: "html", sectionName: "html", onRender: (R) => /* @__PURE__ */ C.jsx("div", { dangerouslySetInnerHTML: { __html: R } }) }),
    /* @__PURE__ */ C.jsx(_a, { language: "css", sectionName: "css", onRender: (R) => /* @__PURE__ */ C.jsx("style", { children: R }) }),
    /* @__PURE__ */ C.jsx(_a, { language: "javascript", sectionName: "script", onRender: (R) => /* @__PURE__ */ C.jsx("script", { children: R }) })
  ];
  return f ? /* @__PURE__ */ C.jsxs("div", { children: [
    /* @__PURE__ */ C.jsx("ul", { style: {
      display: "flex",
      listStyle: "none",
      padding: 0,
      margin: 0,
      background: "#dddddd",
      border: "2px #dddddd solid",
      borderBottom: "none"
    }, children: k.map((R, W) => /* @__PURE__ */ C.jsxs("li", { style: {
      padding: "4px 8px",
      cursor: "pointer",
      color: _ == W ? "black" : "#888888",
      background: _ == W ? "white" : "#ffffffaa",
      fontWeight: _ == W || v[W] || E ? "bold" : "normal"
    }, onClick: () => T(W), children: [
      R,
      v[W] ? "*" : ""
    ] }, W)) }),
    /* @__PURE__ */ C.jsx("div", { style: { padding: 10 }, children: N[_] }, _)
  ] }) : N;
};
export {
  Yl as CE,
  lc as CSSInputSlot,
  wu as CheckboxInput,
  _a as CodeInputSlot,
  Cu as ColumnSection,
  Xl as ContentEditableInputSlot,
  Ci as ContentSection,
  Pa as EditorContext,
  nc as EditorValue,
  ac as FakeStream,
  cc as HTMLInputSlot,
  rc as HTTPStream,
  Gl as HideIf,
  qu as HideIfEditing,
  vl as HideIfRendering,
  uc as JSInputSlot,
  gl as NumberSelect,
  xu as PageEditor,
  dc as RawHTMLComponent,
  Ol as Repeater,
  Eu as SelectInput,
  Vl as SlotSection,
  Pu as Spacer,
  ml as StreamBase,
  Mu as StreamDrawerDriver,
  Du as StreamDriver,
  oc as StreamGroup,
  ic as StreamSelectButton,
  Al as StringInput,
  sc as Tabs,
  ec as UNBEditor,
  Dl as componentList,
  Ru as createContentEditable,
  ec as default,
  Ku as injectEditorContext,
  Ju as injectEditorState,
  zt as useEditorContext,
  Zu as useEditorState,
  Qu as useEditorStateWithProps,
  tc as useModal
};
//# sourceMappingURL=index.es.js.map
