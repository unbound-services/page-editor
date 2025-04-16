import * as Xn from "react";
import Wt, { Fragment as pl, useContext as Wl, createContext as Jl, useState as Tn, useEffect as Yr, useRef as yl } from "react";
import Zl, { createPortal as Ql } from "react-dom";
var Sl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zl(b) {
  return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default") ? b.default : b;
}
var cs = { exports: {} }, xi = {};
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
function Kl() {
  if (bl) return xi;
  bl = 1;
  var b = Wt, p = Symbol.for("react.element"), y = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, c = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(T, v, k) {
    var W, R = {}, B = null, ce = null;
    k !== void 0 && (B = "" + k), v.key !== void 0 && (B = "" + v.key), v.ref !== void 0 && (ce = v.ref);
    for (W in v) C.call(v, W) && !F.hasOwnProperty(W) && (R[W] = v[W]);
    if (T && T.defaultProps) for (W in v = T.defaultProps, v) R[W] === void 0 && (R[W] = v[W]);
    return { $$typeof: p, type: T, key: B, ref: ce, props: R, _owner: c.current };
  }
  return xi.Fragment = y, xi.jsx = _, xi.jsxs = _, xi;
}
var wi = {};
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
function ql() {
  return xl || (xl = 1, process.env.NODE_ENV !== "production" && function() {
    var b = Wt, p = Symbol.for("react.element"), y = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), T = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), ce = Symbol.for("react.offscreen"), ae = Symbol.iterator, ne = "@@iterator";
    function z(w) {
      if (w === null || typeof w != "object")
        return null;
      var J = ae && w[ae] || w[ne];
      return typeof J == "function" ? J : null;
    }
    var A = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(w) {
      {
        for (var J = arguments.length, se = new Array(J > 1 ? J - 1 : 0), ge = 1; ge < J; ge++)
          se[ge - 1] = arguments[ge];
        U("error", w, se);
      }
    }
    function U(w, J, se) {
      {
        var ge = A.ReactDebugCurrentFrame, Fe = ge.getStackAddendum();
        Fe !== "" && (J += "%s", se = se.concat([Fe]));
        var Le = se.map(function(Ie) {
          return String(Ie);
        });
        Le.unshift("Warning: " + J), Function.prototype.apply.call(console[w], console, Le);
      }
    }
    var $ = !1, H = !1, O = !1, X = !1, ie = !1, Y;
    Y = Symbol.for("react.module.reference");
    function Pe(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === C || w === F || ie || w === c || w === k || w === W || X || w === ce || $ || H || O || typeof w == "object" && w !== null && (w.$$typeof === B || w.$$typeof === R || w.$$typeof === _ || w.$$typeof === T || w.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === Y || w.getModuleId !== void 0));
    }
    function ke(w, J, se) {
      var ge = w.displayName;
      if (ge)
        return ge;
      var Fe = J.displayName || J.name || "";
      return Fe !== "" ? se + "(" + Fe + ")" : se;
    }
    function je(w) {
      return w.displayName || "Context";
    }
    function oe(w) {
      if (w == null)
        return null;
      if (typeof w.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
        return w.displayName || w.name || null;
      if (typeof w == "string")
        return w;
      switch (w) {
        case C:
          return "Fragment";
        case y:
          return "Portal";
        case F:
          return "Profiler";
        case c:
          return "StrictMode";
        case k:
          return "Suspense";
        case W:
          return "SuspenseList";
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case T:
            var J = w;
            return je(J) + ".Consumer";
          case _:
            var se = w;
            return je(se._context) + ".Provider";
          case v:
            return ke(w, w.render, "ForwardRef");
          case R:
            var ge = w.displayName || null;
            return ge !== null ? ge : oe(w.type) || "Memo";
          case B: {
            var Fe = w, Le = Fe._payload, Ie = Fe._init;
            try {
              return oe(Ie(Le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var de = Object.assign, De = 0, Se, He, q, Ce, et, Be, xe;
    function It() {
    }
    It.__reactDisabledLog = !0;
    function at() {
      {
        if (De === 0) {
          Se = console.log, He = console.info, q = console.warn, Ce = console.error, et = console.group, Be = console.groupCollapsed, xe = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: It,
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
        De++;
      }
    }
    function Ne() {
      {
        if (De--, De === 0) {
          var w = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: de({}, w, {
              value: Se
            }),
            info: de({}, w, {
              value: He
            }),
            warn: de({}, w, {
              value: q
            }),
            error: de({}, w, {
              value: Ce
            }),
            group: de({}, w, {
              value: et
            }),
            groupCollapsed: de({}, w, {
              value: Be
            }),
            groupEnd: de({}, w, {
              value: xe
            })
          });
        }
        De < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ee = A.ReactCurrentDispatcher, bt;
    function Ge(w, J, se) {
      {
        if (bt === void 0)
          try {
            throw Error();
          } catch (Fe) {
            var ge = Fe.stack.trim().match(/\n( *(at )?)/);
            bt = ge && ge[1] || "";
          }
        return `
` + bt + w;
      }
    }
    var ut = !1, ht;
    {
      var tt = typeof WeakMap == "function" ? WeakMap : Map;
      ht = new tt();
    }
    function Et(w, J) {
      if (!w || ut)
        return "";
      {
        var se = ht.get(w);
        if (se !== void 0)
          return se;
      }
      var ge;
      ut = !0;
      var Fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Le;
      Le = Ee.current, Ee.current = null, at();
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
            } catch (dt) {
              ge = dt;
            }
            Reflect.construct(w, [], Ie);
          } else {
            try {
              Ie.call();
            } catch (dt) {
              ge = dt;
            }
            w.call(Ie.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dt) {
            ge = dt;
          }
          w();
        }
      } catch (dt) {
        if (dt && ge && typeof dt.stack == "string") {
          for (var Re = dt.stack.split(`
`), ct = ge.stack.split(`
`), Ve = Re.length - 1, qe = ct.length - 1; Ve >= 1 && qe >= 0 && Re[Ve] !== ct[qe]; )
            qe--;
          for (; Ve >= 1 && qe >= 0; Ve--, qe--)
            if (Re[Ve] !== ct[qe]) {
              if (Ve !== 1 || qe !== 1)
                do
                  if (Ve--, qe--, qe < 0 || Re[Ve] !== ct[qe]) {
                    var it = `
` + Re[Ve].replace(" at new ", " at ");
                    return w.displayName && it.includes("<anonymous>") && (it = it.replace("<anonymous>", w.displayName)), typeof w == "function" && ht.set(w, it), it;
                  }
                while (Ve >= 1 && qe >= 0);
              break;
            }
        }
      } finally {
        ut = !1, Ee.current = Le, Ne(), Error.prepareStackTrace = Fe;
      }
      var rn = w ? w.displayName || w.name : "", Qt = rn ? Ge(rn) : "";
      return typeof w == "function" && ht.set(w, Qt), Qt;
    }
    function Qe(w, J, se) {
      return Et(w, !1);
    }
    function gt(w) {
      var J = w.prototype;
      return !!(J && J.isReactComponent);
    }
    function At(w, J, se) {
      if (w == null)
        return "";
      if (typeof w == "function")
        return Et(w, gt(w));
      if (typeof w == "string")
        return Ge(w);
      switch (w) {
        case k:
          return Ge("Suspense");
        case W:
          return Ge("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case v:
            return Qe(w.render);
          case R:
            return At(w.type, J, se);
          case B: {
            var ge = w, Fe = ge._payload, Le = ge._init;
            try {
              return At(Le(Fe), J, se);
            } catch {
            }
          }
        }
      return "";
    }
    var ue = Object.prototype.hasOwnProperty, fe = {}, ee = A.ReactDebugCurrentFrame;
    function re(w) {
      if (w) {
        var J = w._owner, se = At(w.type, w._source, J ? J.type : null);
        ee.setExtraStackFrame(se);
      } else
        ee.setExtraStackFrame(null);
    }
    function pe(w, J, se, ge, Fe) {
      {
        var Le = Function.call.bind(ue);
        for (var Ie in w)
          if (Le(w, Ie)) {
            var Re = void 0;
            try {
              if (typeof w[Ie] != "function") {
                var ct = Error((ge || "React class") + ": " + se + " type `" + Ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[Ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ct.name = "Invariant Violation", ct;
              }
              Re = w[Ie](J, Ie, ge, se, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ve) {
              Re = Ve;
            }
            Re && !(Re instanceof Error) && (re(Fe), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ge || "React class", se, Ie, typeof Re), re(null)), Re instanceof Error && !(Re.message in fe) && (fe[Re.message] = !0, re(Fe), D("Failed %s type: %s", se, Re.message), re(null));
          }
      }
    }
    var Te = Array.isArray;
    function Ye(w) {
      return Te(w);
    }
    function ze(w) {
      {
        var J = typeof Symbol == "function" && Symbol.toStringTag, se = J && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return se;
      }
    }
    function nt(w) {
      try {
        return xt(w), !1;
      } catch {
        return !0;
      }
    }
    function xt(w) {
      return "" + w;
    }
    function Dt(w) {
      if (nt(w))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(w)), xt(w);
    }
    var Lt = A.ReactCurrentOwner, rt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, wt, Mt;
    function Rn(w) {
      if (ue.call(w, "ref")) {
        var J = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function xn(w) {
      if (ue.call(w, "key")) {
        var J = Object.getOwnPropertyDescriptor(w, "key").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function hn(w, J) {
      typeof w.ref == "string" && Lt.current;
    }
    function te(w, J) {
      {
        var se = function() {
          wt || (wt = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        se.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: se,
          configurable: !0
        });
      }
    }
    function Ue(w, J) {
      {
        var se = function() {
          Mt || (Mt = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        se.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: se,
          configurable: !0
        });
      }
    }
    var be = function(w, J, se, ge, Fe, Le, Ie) {
      var Re = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: w,
        key: J,
        ref: se,
        props: Ie,
        // Record the component responsible for creating this element.
        _owner: Le
      };
      return Re._store = {}, Object.defineProperty(Re._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Re, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ge
      }), Object.defineProperty(Re, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Fe
      }), Object.freeze && (Object.freeze(Re.props), Object.freeze(Re)), Re;
    };
    function _e(w, J, se, ge, Fe) {
      {
        var Le, Ie = {}, Re = null, ct = null;
        se !== void 0 && (Dt(se), Re = "" + se), xn(J) && (Dt(J.key), Re = "" + J.key), Rn(J) && (ct = J.ref, hn(J, Fe));
        for (Le in J)
          ue.call(J, Le) && !rt.hasOwnProperty(Le) && (Ie[Le] = J[Le]);
        if (w && w.defaultProps) {
          var Ve = w.defaultProps;
          for (Le in Ve)
            Ie[Le] === void 0 && (Ie[Le] = Ve[Le]);
        }
        if (Re || ct) {
          var qe = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          Re && te(Ie, qe), ct && Ue(Ie, qe);
        }
        return be(w, Re, ct, Fe, ge, Lt.current, Ie);
      }
    }
    var Ke = A.ReactCurrentOwner, We = A.ReactDebugCurrentFrame;
    function ot(w) {
      if (w) {
        var J = w._owner, se = At(w.type, w._source, J ? J.type : null);
        We.setExtraStackFrame(se);
      } else
        We.setExtraStackFrame(null);
    }
    var Tt;
    Tt = !1;
    function Me(w) {
      return typeof w == "object" && w !== null && w.$$typeof === p;
    }
    function Rt() {
      {
        if (Ke.current) {
          var w = oe(Ke.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function kt(w) {
      return "";
    }
    var Ct = {};
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
    function vt(w, J) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var se = Ft(J);
        if (Ct[se])
          return;
        Ct[se] = !0;
        var ge = "";
        w && w._owner && w._owner !== Ke.current && (ge = " It was passed a child from " + oe(w._owner.type) + "."), ot(w), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', se, ge), ot(null);
      }
    }
    function _t(w, J) {
      {
        if (typeof w != "object")
          return;
        if (Ye(w))
          for (var se = 0; se < w.length; se++) {
            var ge = w[se];
            Me(ge) && vt(ge, J);
          }
        else if (Me(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var Fe = z(w);
          if (typeof Fe == "function" && Fe !== w.entries)
            for (var Le = Fe.call(w), Ie; !(Ie = Le.next()).done; )
              Me(Ie.value) && vt(Ie.value, J);
        }
      }
    }
    function yt(w) {
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
          var ge = oe(J);
          pe(se, w.props, "prop", ge, w);
        } else if (J.PropTypes !== void 0 && !Tt) {
          Tt = !0;
          var Fe = oe(J);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Fe || "Unknown");
        }
        typeof J.getDefaultProps == "function" && !J.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nn(w) {
      {
        for (var J = Object.keys(w.props), se = 0; se < J.length; se++) {
          var ge = J[se];
          if (ge !== "children" && ge !== "key") {
            ot(w), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ge), ot(null);
            break;
          }
        }
        w.ref !== null && (ot(w), D("Invalid attribute `ref` supplied to `React.Fragment`."), ot(null));
      }
    }
    var $t = {};
    function gn(w, J, se, ge, Fe, Le) {
      {
        var Ie = Pe(w);
        if (!Ie) {
          var Re = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (Re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ct = kt();
          ct ? Re += ct : Re += Rt();
          var Ve;
          w === null ? Ve = "null" : Ye(w) ? Ve = "array" : w !== void 0 && w.$$typeof === p ? (Ve = "<" + (oe(w.type) || "Unknown") + " />", Re = " Did you accidentally export a JSX literal instead of a component?") : Ve = typeof w, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ve, Re);
        }
        var qe = _e(w, J, se, Fe, Le);
        if (qe == null)
          return qe;
        if (Ie) {
          var it = J.children;
          if (it !== void 0)
            if (ge)
              if (Ye(it)) {
                for (var rn = 0; rn < it.length; rn++)
                  _t(it[rn], w);
                Object.freeze && Object.freeze(it);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _t(it, w);
        }
        if (ue.call(J, "key")) {
          var Qt = oe(w), dt = Object.keys(J).filter(function(qt) {
            return qt !== "key";
          }), ft = dt.length > 0 ? "{key: someKey, " + dt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$t[Qt + ft]) {
            var Kt = dt.length > 0 ? "{" + dt.join(": ..., ") + ": ...}" : "{}";
            D(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ft, Qt, Kt, Qt), $t[Qt + ft] = !0;
          }
        }
        return w === C ? nn(qe) : yt(qe), qe;
      }
    }
    function $e(w, J, se) {
      return gn(w, J, se, !0);
    }
    function Vt(w, J, se) {
      return gn(w, J, se, !1);
    }
    var Fn = Vt, _n = $e;
    wi.Fragment = C, wi.jsx = Fn, wi.jsxs = _n;
  }()), wi;
}
var wl;
function eu() {
  return wl || (wl = 1, process.env.NODE_ENV === "production" ? cs.exports = Kl() : cs.exports = ql()), cs.exports;
}
var E = eu(), Gr = {}, Ro = {};
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
function tu() {
  if (kl) return Ro;
  kl = 1;
  var b = Wt;
  function p(a) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, g = 1; g < arguments.length; g++) u += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + a + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var y = Object.prototype.hasOwnProperty, C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, c = {}, F = {};
  function _(a) {
    return y.call(F, a) ? !0 : y.call(c, a) ? !1 : C.test(a) ? F[a] = !0 : (c[a] = !0, !1);
  }
  function T(a, u, g, S, L, P, N) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = S, this.attributeNamespace = L, this.mustUseProperty = g, this.propertyName = a, this.type = u, this.sanitizeURL = P, this.removeEmptyString = N;
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
  function W(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var u = a.replace(
      k,
      W
    );
    v[u] = new T(u, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var u = a.replace(k, W);
    v[u] = new T(u, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var u = a.replace(k, W);
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
  }, B = ["Webkit", "ms", "Moz", "O"];
  Object.keys(R).forEach(function(a) {
    B.forEach(function(u) {
      u = u + a.charAt(0).toUpperCase() + a.substring(1), R[u] = R[a];
    });
  });
  var ce = /["'&<>]/;
  function ae(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var u = ce.exec(a);
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
  var ne = /([A-Z])/g, z = /^ms-/, A = Array.isArray;
  function D(a, u) {
    return { insertionMode: a, selectedValue: u };
  }
  function U(a, u, g) {
    switch (u) {
      case "select":
        return D(1, g.value != null ? g.value : g.defaultValue);
      case "svg":
        return D(2, null);
      case "math":
        return D(3, null);
      case "foreignObject":
        return D(1, null);
      case "table":
        return D(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return D(5, null);
      case "colgroup":
        return D(7, null);
      case "tr":
        return D(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? D(1, null) : a;
  }
  var $ = /* @__PURE__ */ new Map();
  function H(a, u, g) {
    if (typeof g != "object") throw Error(p(62));
    u = !0;
    for (var S in g) if (y.call(g, S)) {
      var L = g[S];
      if (L != null && typeof L != "boolean" && L !== "") {
        if (S.indexOf("--") === 0) {
          var P = ae(S);
          L = ae(("" + L).trim());
        } else {
          P = S;
          var N = $.get(P);
          N !== void 0 || (N = ae(P.replace(ne, "-$1").toLowerCase().replace(z, "-ms-")), $.set(P, N)), P = N, L = typeof L == "number" ? L === 0 || y.call(R, S) ? "" + L : L + "px" : ae(("" + L).trim());
        }
        u ? (u = !1, a.push(' style="', P, ":", L)) : a.push(";", P, ":", L);
      }
    }
    u || a.push('"');
  }
  function O(a, u, g, S) {
    switch (g) {
      case "style":
        H(a, u, S);
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
      if (g != null) throw Error(p(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(p(61));
      u = u.__html, u != null && a.push("" + u);
    }
  }
  function ie(a) {
    var u = "";
    return b.Children.forEach(a, function(g) {
      g != null && (u += g);
    }), u;
  }
  function Y(a, u, g, S) {
    a.push(je(g));
    var L = g = null, P;
    for (P in u) if (y.call(u, P)) {
      var N = u[P];
      if (N != null) switch (P) {
        case "children":
          g = N;
          break;
        case "dangerouslySetInnerHTML":
          L = N;
          break;
        default:
          O(a, S, P, N);
      }
    }
    return a.push(">"), X(a, L, g), typeof g == "string" ? (a.push(ae(g)), null) : g;
  }
  var Pe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ke = /* @__PURE__ */ new Map();
  function je(a) {
    var u = ke.get(a);
    if (u === void 0) {
      if (!Pe.test(a)) throw Error(p(65, a));
      u = "<" + a, ke.set(a, u);
    }
    return u;
  }
  function oe(a, u, g, S, L) {
    switch (u) {
      case "select":
        a.push(je("select"));
        var P = null, N = null;
        for (ve in g) if (y.call(g, ve)) {
          var Q = g[ve];
          if (Q != null) switch (ve) {
            case "children":
              P = Q;
              break;
            case "dangerouslySetInnerHTML":
              N = Q;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              O(a, S, ve, Q);
          }
        }
        return a.push(">"), X(a, N, P), P;
      case "option":
        N = L.selectedValue, a.push(je("option"));
        var he = Q = null, me = null, ve = null;
        for (P in g) if (y.call(g, P)) {
          var Xe = g[P];
          if (Xe != null) switch (P) {
            case "children":
              Q = Xe;
              break;
            case "selected":
              me = Xe;
              break;
            case "dangerouslySetInnerHTML":
              ve = Xe;
              break;
            case "value":
              he = Xe;
            default:
              O(a, S, P, Xe);
          }
        }
        if (N != null) if (g = he !== null ? "" + he : ie(Q), A(N)) {
          for (S = 0; S < N.length; S++)
            if ("" + N[S] === g) {
              a.push(' selected=""');
              break;
            }
        } else "" + N === g && a.push(' selected=""');
        else me && a.push(' selected=""');
        return a.push(">"), X(a, ve, Q), Q;
      case "textarea":
        a.push(je("textarea")), ve = N = P = null;
        for (Q in g) if (y.call(g, Q) && (he = g[Q], he != null)) switch (Q) {
          case "children":
            ve = he;
            break;
          case "value":
            P = he;
            break;
          case "defaultValue":
            N = he;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(p(91));
          default:
            O(
              a,
              S,
              Q,
              he
            );
        }
        if (P === null && N !== null && (P = N), a.push(">"), ve != null) {
          if (P != null) throw Error(p(92));
          if (A(ve) && 1 < ve.length) throw Error(p(93));
          P = "" + ve;
        }
        return typeof P == "string" && P[0] === `
` && a.push(`
`), P !== null && a.push(ae("" + P)), null;
      case "input":
        a.push(je("input")), he = ve = Q = P = null;
        for (N in g) if (y.call(g, N) && (me = g[N], me != null)) switch (N) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(p(399, "input"));
          case "defaultChecked":
            he = me;
            break;
          case "defaultValue":
            Q = me;
            break;
          case "checked":
            ve = me;
            break;
          case "value":
            P = me;
            break;
          default:
            O(a, S, N, me);
        }
        return ve !== null ? O(a, S, "checked", ve) : he !== null && O(a, S, "checked", he), P !== null ? O(a, S, "value", P) : Q !== null && O(a, S, "value", Q), a.push("/>"), null;
      case "menuitem":
        a.push(je("menuitem"));
        for (var Ut in g) if (y.call(g, Ut) && (P = g[Ut], P != null)) switch (Ut) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(p(400));
          default:
            O(a, S, Ut, P);
        }
        return a.push(">"), null;
      case "title":
        a.push(je("title")), P = null;
        for (Xe in g) if (y.call(g, Xe) && (N = g[Xe], N != null)) switch (Xe) {
          case "children":
            P = N;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(p(434));
          default:
            O(a, S, Xe, N);
        }
        return a.push(">"), P;
      case "listing":
      case "pre":
        a.push(je(u)), N = P = null;
        for (he in g) if (y.call(g, he) && (Q = g[he], Q != null)) switch (he) {
          case "children":
            P = Q;
            break;
          case "dangerouslySetInnerHTML":
            N = Q;
            break;
          default:
            O(a, S, he, Q);
        }
        if (a.push(">"), N != null) {
          if (P != null) throw Error(p(60));
          if (typeof N != "object" || !("__html" in N)) throw Error(p(61));
          g = N.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
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
        a.push(je(u));
        for (var Ht in g) if (y.call(g, Ht) && (P = g[Ht], P != null)) switch (Ht) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(p(399, u));
          default:
            O(a, S, Ht, P);
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
        return Y(
          a,
          g,
          u,
          S
        );
      case "html":
        return L.insertionMode === 0 && a.push("<!DOCTYPE html>"), Y(a, g, u, S);
      default:
        if (u.indexOf("-") === -1 && typeof g.is != "string") return Y(a, g, u, S);
        a.push(je(u)), N = P = null;
        for (me in g) if (y.call(g, me) && (Q = g[me], Q != null)) switch (me) {
          case "children":
            P = Q;
            break;
          case "dangerouslySetInnerHTML":
            N = Q;
            break;
          case "style":
            H(a, S, Q);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            _(me) && typeof Q != "function" && typeof Q != "symbol" && a.push(" ", me, '="', ae(Q), '"');
        }
        return a.push(">"), X(a, N, P), P;
    }
  }
  function de(a, u, g) {
    if (a.push('<!--$?--><template id="'), g === null) throw Error(p(395));
    return a.push(g), a.push('"></template>');
  }
  function De(a, u, g, S) {
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
        throw Error(p(397));
    }
  }
  function Se(a, u) {
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
        throw Error(p(397));
    }
  }
  var He = /[<\u2028\u2029]/g;
  function q(a) {
    return JSON.stringify(a).replace(He, function(u) {
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
  function Ce(a, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: a };
  }
  function et(a, u, g, S) {
    return g.generateStaticMarkup ? (a.push(ae(u)), !1) : (u === "" ? a = S : (S && a.push("<!-- -->"), a.push(ae(u)), a = !0), a);
  }
  var Be = Object.assign, xe = Symbol.for("react.element"), It = Symbol.for("react.portal"), at = Symbol.for("react.fragment"), Ne = Symbol.for("react.strict_mode"), Ee = Symbol.for("react.profiler"), bt = Symbol.for("react.provider"), Ge = Symbol.for("react.context"), ut = Symbol.for("react.forward_ref"), ht = Symbol.for("react.suspense"), tt = Symbol.for("react.suspense_list"), Et = Symbol.for("react.memo"), Qe = Symbol.for("react.lazy"), gt = Symbol.for("react.scope"), At = Symbol.for("react.debug_trace_mode"), ue = Symbol.for("react.legacy_hidden"), fe = Symbol.for("react.default_value"), ee = Symbol.iterator;
  function re(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case at:
        return "Fragment";
      case It:
        return "Portal";
      case Ee:
        return "Profiler";
      case Ne:
        return "StrictMode";
      case ht:
        return "Suspense";
      case tt:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case Ge:
        return (a.displayName || "Context") + ".Consumer";
      case bt:
        return (a._context.displayName || "Context") + ".Provider";
      case ut:
        var u = a.render;
        return a = a.displayName, a || (a = u.displayName || u.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case Et:
        return u = a.displayName || null, u !== null ? u : re(a.type) || "Memo";
      case Qe:
        u = a._payload, a = a._init;
        try {
          return re(a(u));
        } catch {
        }
    }
    return null;
  }
  var pe = {};
  function Te(a, u) {
    if (a = a.contextTypes, !a) return pe;
    var g = {}, S;
    for (S in a) g[S] = u[S];
    return g;
  }
  var Ye = null;
  function ze(a, u) {
    if (a !== u) {
      a.context._currentValue2 = a.parentValue, a = a.parent;
      var g = u.parent;
      if (a === null) {
        if (g !== null) throw Error(p(401));
      } else {
        if (g === null) throw Error(p(401));
        ze(a, g);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function nt(a) {
    a.context._currentValue2 = a.parentValue, a = a.parent, a !== null && nt(a);
  }
  function xt(a) {
    var u = a.parent;
    u !== null && xt(u), a.context._currentValue2 = a.value;
  }
  function Dt(a, u) {
    if (a.context._currentValue2 = a.parentValue, a = a.parent, a === null) throw Error(p(402));
    a.depth === u.depth ? ze(a, u) : Dt(a, u);
  }
  function Lt(a, u) {
    var g = u.parent;
    if (g === null) throw Error(p(402));
    a.depth === g.depth ? ze(a, g) : Lt(a, g), u.context._currentValue2 = u.value;
  }
  function rt(a) {
    var u = Ye;
    u !== a && (u === null ? xt(a) : a === null ? nt(u) : u.depth === a.depth ? ze(u, a) : u.depth > a.depth ? Dt(u, a) : Lt(u, a), Ye = a);
  }
  var wt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, u) {
    a = a._reactInternals, a.queue !== null && a.queue.push(u);
  }, enqueueReplaceState: function(a, u) {
    a = a._reactInternals, a.replace = !0, a.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function Mt(a, u, g, S) {
    var L = a.state !== void 0 ? a.state : null;
    a.updater = wt, a.props = g, a.state = L;
    var P = { queue: [], replace: !1 };
    a._reactInternals = P;
    var N = u.contextType;
    if (a.context = typeof N == "object" && N !== null ? N._currentValue2 : S, N = u.getDerivedStateFromProps, typeof N == "function" && (N = N(g, L), L = N == null ? L : Be({}, L, N), a.state = L), typeof u.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (u = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), u !== a.state && wt.enqueueReplaceState(a, a.state, null), P.queue !== null && 0 < P.queue.length) if (u = P.queue, N = P.replace, P.queue = null, P.replace = !1, N && u.length === 1) a.state = u[0];
    else {
      for (P = N ? u[0] : a.state, L = !0, N = N ? 1 : 0; N < u.length; N++) {
        var Q = u[N];
        Q = typeof Q == "function" ? Q.call(a, P, g, S) : Q, Q != null && (L ? (L = !1, P = Be({}, P, Q)) : Be(P, Q));
      }
      a.state = P;
    }
    else P.queue = null;
  }
  var Rn = { id: 1, overflow: "" };
  function xn(a, u, g) {
    var S = a.id;
    a = a.overflow;
    var L = 32 - hn(S) - 1;
    S &= ~(1 << L), g += 1;
    var P = 32 - hn(u) + L;
    if (30 < P) {
      var N = L - L % 5;
      return P = (S & (1 << N) - 1).toString(32), S >>= N, L -= N, { id: 1 << 32 - hn(u) + L | g << L | S, overflow: P + a };
    }
    return { id: 1 << P | g << L | S, overflow: a };
  }
  var hn = Math.clz32 ? Math.clz32 : be, te = Math.log, Ue = Math.LN2;
  function be(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (te(a) / Ue | 0) | 0;
  }
  function _e(a, u) {
    return a === u && (a !== 0 || 1 / a === 1 / u) || a !== a && u !== u;
  }
  var Ke = typeof Object.is == "function" ? Object.is : _e, We = null, ot = null, Tt = null, Me = null, Rt = !1, kt = !1, Ct = 0, Ft = null, vt = 0;
  function _t() {
    if (We === null) throw Error(p(321));
    return We;
  }
  function yt() {
    if (0 < vt) throw Error(p(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function nn() {
    return Me === null ? Tt === null ? (Rt = !1, Tt = Me = yt()) : (Rt = !0, Me = Tt) : Me.next === null ? (Rt = !1, Me = Me.next = yt()) : (Rt = !0, Me = Me.next), Me;
  }
  function $t() {
    ot = We = null, kt = !1, Tt = null, vt = 0, Me = Ft = null;
  }
  function gn(a, u) {
    return typeof u == "function" ? u(a) : u;
  }
  function $e(a, u, g) {
    if (We = _t(), Me = nn(), Rt) {
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
    return a = a === gn ? typeof u == "function" ? u() : u : g !== void 0 ? g(u) : u, Me.memoizedState = a, a = Me.queue = { last: null, dispatch: null }, a = a.dispatch = Fn.bind(null, We, a), [Me.memoizedState, a];
  }
  function Vt(a, u) {
    if (We = _t(), Me = nn(), u = u === void 0 ? null : u, Me !== null) {
      var g = Me.memoizedState;
      if (g !== null && u !== null) {
        var S = g[1];
        e: if (S === null) S = !1;
        else {
          for (var L = 0; L < S.length && L < u.length; L++) if (!Ke(u[L], S[L])) {
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
    if (25 <= vt) throw Error(p(301));
    if (a === We) if (kt = !0, a = { action: g, next: null }, Ft === null && (Ft = /* @__PURE__ */ new Map()), g = Ft.get(u), g === void 0) Ft.set(u, a);
    else {
      for (u = g; u.next !== null; ) u = u.next;
      u.next = a;
    }
  }
  function _n() {
    throw Error(p(394));
  }
  function w() {
  }
  var J = { readContext: function(a) {
    return a._currentValue2;
  }, useContext: function(a) {
    return _t(), a._currentValue2;
  }, useMemo: Vt, useReducer: $e, useRef: function(a) {
    We = _t(), Me = nn();
    var u = Me.memoizedState;
    return u === null ? (a = { current: a }, Me.memoizedState = a) : u;
  }, useState: function(a) {
    return $e(gn, a);
  }, useInsertionEffect: w, useLayoutEffect: function() {
  }, useCallback: function(a, u) {
    return Vt(function() {
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
    var a = ot.treeContext, u = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - hn(a) - 1)).toString(32) + u;
    var g = se;
    if (g === null) throw Error(p(404));
    return u = Ct++, a = ":" + g.idPrefix + "R" + a, 0 < u && (a += "H" + u.toString(32)), a + ":";
  }, useMutableSource: function(a, u) {
    return _t(), u(a._source);
  }, useSyncExternalStore: function(a, u, g) {
    if (g === void 0) throw Error(p(407));
    return g();
  } }, se = null, ge = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Fe(a) {
    return console.error(a), null;
  }
  function Le() {
  }
  function Ie(a, u, g, S, L, P, N, Q, he) {
    var me = [], ve = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: S === void 0 ? 12800 : S, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ve, pingedTasks: me, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: L === void 0 ? Fe : L, onAllReady: Le, onShellReady: N === void 0 ? Le : N, onShellError: Le, onFatalError: Le }, g = ct(u, 0, null, g, !1, !1), g.parentFlushed = !0, a = Re(u, a, null, g, ve, pe, null, Rn), me.push(a), u;
  }
  function Re(a, u, g, S, L, P, N, Q) {
    a.allPendingTasks++, g === null ? a.pendingRootTasks++ : g.pendingTasks++;
    var he = { node: u, ping: function() {
      var me = a.pingedTasks;
      me.push(he), me.length === 1 && jt(a);
    }, blockedBoundary: g, blockedSegment: S, abortSet: L, legacyContext: P, context: N, treeContext: Q };
    return L.add(he), he;
  }
  function ct(a, u, g, S, L, P) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: S, boundary: g, lastPushedText: L, textEmbedded: P };
  }
  function Ve(a, u) {
    if (a = a.onError(u), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function qe(a, u) {
    var g = a.onShellError;
    g(u), g = a.onFatalError, g(u), a.destination !== null ? (a.status = 2, a.destination.destroy(u)) : (a.status = 1, a.fatalError = u);
  }
  function it(a, u, g, S, L) {
    for (We = {}, ot = u, Ct = 0, a = g(S, L); kt; ) kt = !1, Ct = 0, vt += 1, Me = null, a = g(S, L);
    return $t(), a;
  }
  function rn(a, u, g, S) {
    var L = g.render(), P = S.childContextTypes;
    if (P != null) {
      var N = u.legacyContext;
      if (typeof g.getChildContext != "function") S = N;
      else {
        g = g.getChildContext();
        for (var Q in g) if (!(Q in P)) throw Error(p(108, re(S) || "Unknown", Q));
        S = Be({}, N, g);
      }
      u.legacyContext = S, ft(a, u, L), u.legacyContext = N;
    } else ft(a, u, L);
  }
  function Qt(a, u) {
    if (a && a.defaultProps) {
      u = Be({}, u), a = a.defaultProps;
      for (var g in a) u[g] === void 0 && (u[g] = a[g]);
      return u;
    }
    return u;
  }
  function dt(a, u, g, S, L) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      L = Te(g, u.legacyContext);
      var P = g.contextType;
      P = new g(S, typeof P == "object" && P !== null ? P._currentValue2 : L), Mt(P, g, S, L), rn(a, u, P, g);
    } else {
      P = Te(g, u.legacyContext), L = it(a, u, g, S, P);
      var N = Ct !== 0;
      if (typeof L == "object" && L !== null && typeof L.render == "function" && L.$$typeof === void 0) Mt(L, g, S, P), rn(a, u, L, g);
      else if (N) {
        S = u.treeContext, u.treeContext = xn(S, 1, 0);
        try {
          ft(a, u, L);
        } finally {
          u.treeContext = S;
        }
      } else ft(a, u, L);
    }
    else if (typeof g == "string") {
      switch (L = u.blockedSegment, P = oe(L.chunks, g, S, a.responseState, L.formatContext), L.lastPushedText = !1, N = L.formatContext, L.formatContext = U(N, g, S), qt(a, u, P), L.formatContext = N, g) {
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
        case ue:
        case At:
        case Ne:
        case Ee:
        case at:
          ft(a, u, S.children);
          return;
        case tt:
          ft(a, u, S.children);
          return;
        case gt:
          throw Error(p(343));
        case ht:
          e: {
            g = u.blockedBoundary, L = u.blockedSegment, P = S.fallback, S = S.children, N = /* @__PURE__ */ new Set();
            var Q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: N, errorDigest: null }, he = ct(a, L.chunks.length, Q, L.formatContext, !1, !1);
            L.children.push(he), L.lastPushedText = !1;
            var me = ct(a, 0, null, L.formatContext, !1, !1);
            me.parentFlushed = !0, u.blockedBoundary = Q, u.blockedSegment = me;
            try {
              if (qt(
                a,
                u,
                S
              ), a.responseState.generateStaticMarkup || me.lastPushedText && me.textEmbedded && me.chunks.push("<!-- -->"), me.status = 1, on(Q, me), Q.pendingTasks === 0) break e;
            } catch (ve) {
              me.status = 4, Q.forceClientRender = !0, Q.errorDigest = Ve(a, ve);
            } finally {
              u.blockedBoundary = g, u.blockedSegment = L;
            }
            u = Re(a, P, g, he, N, u.legacyContext, u.context, u.treeContext), a.pingedTasks.push(u);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case ut:
          if (S = it(a, u, g.render, S, L), Ct !== 0) {
            g = u.treeContext, u.treeContext = xn(g, 1, 0);
            try {
              ft(a, u, S);
            } finally {
              u.treeContext = g;
            }
          } else ft(a, u, S);
          return;
        case Et:
          g = g.type, S = Qt(g, S), dt(a, u, g, S, L);
          return;
        case bt:
          if (L = S.children, g = g._context, S = S.value, P = g._currentValue2, g._currentValue2 = S, N = Ye, Ye = S = { parent: N, depth: N === null ? 0 : N.depth + 1, context: g, parentValue: P, value: S }, u.context = S, ft(a, u, L), a = Ye, a === null) throw Error(p(403));
          S = a.parentValue, a.context._currentValue2 = S === fe ? a.context._defaultValue : S, a = Ye = a.parent, u.context = a;
          return;
        case Ge:
          S = S.children, S = S(g._currentValue2), ft(a, u, S);
          return;
        case Qe:
          L = g._init, g = L(g._payload), S = Qt(g, S), dt(
            a,
            u,
            g,
            S,
            void 0
          );
          return;
      }
      throw Error(p(130, g == null ? g : typeof g, ""));
    }
  }
  function ft(a, u, g) {
    if (u.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case xe:
          dt(a, u, g.type, g.props, g.ref);
          return;
        case It:
          throw Error(p(257));
        case Qe:
          var S = g._init;
          g = S(g._payload), ft(a, u, g);
          return;
      }
      if (A(g)) {
        Kt(a, u, g);
        return;
      }
      if (g === null || typeof g != "object" ? S = null : (S = ee && g[ee] || g["@@iterator"], S = typeof S == "function" ? S : null), S && (S = S.call(g))) {
        if (g = S.next(), !g.done) {
          var L = [];
          do
            L.push(g.value), g = S.next();
          while (!g.done);
          Kt(a, u, L);
        }
        return;
      }
      throw a = Object.prototype.toString.call(g), Error(p(31, a === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : a));
    }
    typeof g == "string" ? (S = u.blockedSegment, S.lastPushedText = et(u.blockedSegment.chunks, g, a.responseState, S.lastPushedText)) : typeof g == "number" && (S = u.blockedSegment, S.lastPushedText = et(u.blockedSegment.chunks, "" + g, a.responseState, S.lastPushedText));
  }
  function Kt(a, u, g) {
    for (var S = g.length, L = 0; L < S; L++) {
      var P = u.treeContext;
      u.treeContext = xn(P, S, L);
      try {
        qt(a, u, g[L]);
      } finally {
        u.treeContext = P;
      }
    }
  }
  function qt(a, u, g) {
    var S = u.blockedSegment.formatContext, L = u.legacyContext, P = u.context;
    try {
      return ft(a, u, g);
    } catch (he) {
      if ($t(), typeof he == "object" && he !== null && typeof he.then == "function") {
        g = he;
        var N = u.blockedSegment, Q = ct(a, N.chunks.length, null, N.formatContext, N.lastPushedText, !0);
        N.children.push(Q), N.lastPushedText = !1, a = Re(a, u.node, u.blockedBoundary, Q, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, g.then(a, a), u.blockedSegment.formatContext = S, u.legacyContext = L, u.context = P, rt(P);
      } else throw u.blockedSegment.formatContext = S, u.legacyContext = L, u.context = P, rt(P), he;
    }
  }
  function Pn(a) {
    var u = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, vn(this, u, a);
  }
  function Jn(a, u, g) {
    var S = a.blockedBoundary;
    a.blockedSegment.status = 3, S === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (S.pendingTasks--, S.forceClientRender || (S.forceClientRender = !0, a = g === void 0 ? Error(p(432)) : g, S.errorDigest = u.onError(a), S.parentFlushed && u.clientRenderedBoundaries.push(S)), S.fallbackAbortableTasks.forEach(function(L) {
      return Jn(L, u, g);
    }), S.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (S = u.onAllReady, S()));
  }
  function on(a, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var g = u.children[0];
      g.id = u.id, g.parentFlushed = !0, g.status === 1 && on(a, g);
    } else a.completedSegments.push(u);
  }
  function vn(a, u, g) {
    if (u === null) {
      if (g.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(p(389));
        a.completedRootSegment = g;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = Le, u = a.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && on(u, g), u.parentFlushed && a.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(Pn, a), u.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (on(u, g), u.completedSegments.length === 1 && u.parentFlushed && a.partialBoundaries.push(u)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function jt(a) {
    if (a.status !== 2) {
      var u = Ye, g = ge.current;
      ge.current = J;
      var S = se;
      se = a.responseState;
      try {
        var L = a.pingedTasks, P;
        for (P = 0; P < L.length; P++) {
          var N = L[P], Q = a, he = N.blockedSegment;
          if (he.status === 0) {
            rt(N.context);
            try {
              ft(Q, N, N.node), Q.responseState.generateStaticMarkup || he.lastPushedText && he.textEmbedded && he.chunks.push("<!-- -->"), N.abortSet.delete(N), he.status = 1, vn(Q, N.blockedBoundary, he);
            } catch (Nt) {
              if ($t(), typeof Nt == "object" && Nt !== null && typeof Nt.then == "function") {
                var me = N.ping;
                Nt.then(me, me);
              } else {
                N.abortSet.delete(N), he.status = 4;
                var ve = N.blockedBoundary, Xe = Nt, Ut = Ve(Q, Xe);
                if (ve === null ? qe(Q, Xe) : (ve.pendingTasks--, ve.forceClientRender || (ve.forceClientRender = !0, ve.errorDigest = Ut, ve.parentFlushed && Q.clientRenderedBoundaries.push(ve))), Q.allPendingTasks--, Q.allPendingTasks === 0) {
                  var Ht = Q.onAllReady;
                  Ht();
                }
              }
            } finally {
            }
          }
        }
        L.splice(0, P), a.destination !== null && Bt(a, a.destination);
      } catch (Nt) {
        Ve(a, Nt), qe(a, Nt);
      } finally {
        se = S, ge.current = g, g === J && rt(u);
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
        for (var N = 0; N < g.length; N++) {
          for (L = g[N]; P < L.index; P++) u.push(S[P]);
          L = Bn(a, u, L);
        }
        for (; P < S.length - 1; P++) u.push(S[P]);
        return P < S.length && (L = u.push(S[P])), L;
      default:
        throw Error(p(390));
    }
  }
  function Bn(a, u, g) {
    var S = g.boundary;
    if (S === null) return In(a, u, g);
    if (S.parentFlushed = !0, S.forceClientRender) return a.responseState.generateStaticMarkup || (S = S.errorDigest, u.push("<!--$!-->"), u.push("<template"), S && (u.push(' data-dgst="'), S = ae(S), u.push(S), u.push('"')), u.push("></template>")), In(a, u, g), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
    if (0 < S.pendingTasks) {
      S.rootSegmentID = a.nextSegmentId++, 0 < S.completedSegments.length && a.partialBoundaries.push(S);
      var L = a.responseState, P = L.nextSuspenseID++;
      return L = L.boundaryPrefix + P.toString(16), S = S.id = L, de(u, a.responseState, S), In(a, u, g), u.push("<!--/$-->");
    }
    if (S.byteSize > a.progressiveChunkSize) return S.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(S), de(u, a.responseState, S.id), In(a, u, g), u.push("<!--/$-->");
    if (a.responseState.generateStaticMarkup || u.push("<!--$-->"), g = S.completedSegments, g.length !== 1) throw Error(p(391));
    return Bn(a, u, g[0]), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
  }
  function Zn(a, u, g) {
    return De(u, a.responseState, g.formatContext, g.id), Bn(a, u, g), Se(u, g.formatContext);
  }
  function en(a, u, g) {
    for (var S = g.completedSegments, L = 0; L < S.length; L++) mn(a, u, g, S[L]);
    if (S.length = 0, a = a.responseState, S = g.id, g = g.rootSegmentID, u.push(a.startInlineScript), a.sentCompleteBoundaryFunction ? u.push('$RC("') : (a.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), S === null) throw Error(p(395));
    return g = g.toString(16), u.push(S), u.push('","'), u.push(a.segmentPrefix), u.push(g), u.push('")<\/script>');
  }
  function mn(a, u, g, S) {
    if (S.status === 2) return !0;
    var L = S.id;
    if (L === -1) {
      if ((S.id = g.rootSegmentID) === -1) throw Error(p(392));
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
        var N = L[P];
        S = u;
        var Q = a.responseState, he = N.id, me = N.errorDigest, ve = N.errorMessage, Xe = N.errorComponentStack;
        if (S.push(Q.startInlineScript), Q.sentClientRenderFunction ? S.push('$RX("') : (Q.sentClientRenderFunction = !0, S.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), he === null) throw Error(p(395));
        if (S.push(he), S.push('"'), me || ve || Xe) {
          S.push(",");
          var Ut = q(me || "");
          S.push(Ut);
        }
        if (ve || Xe) {
          S.push(",");
          var Ht = q(ve || "");
          S.push(Ht);
        }
        if (Xe) {
          S.push(",");
          var Nt = q(Xe);
          S.push(Nt);
        }
        if (!S.push(")<\/script>")) {
          a.destination = null, P++, L.splice(0, P);
          return;
        }
      }
      L.splice(0, P);
      var An = a.completedBoundaries;
      for (P = 0; P < An.length; P++) if (!en(a, u, An[P])) {
        a.destination = null, P++, An.splice(0, P);
        return;
      }
      An.splice(0, P);
      var yn = a.partialBoundaries;
      for (P = 0; P < yn.length; P++) {
        var Kn = yn[P];
        e: {
          L = a, N = u;
          var Dn = Kn.completedSegments;
          for (Q = 0; Q < Dn.length; Q++) if (!mn(L, N, Kn, Dn[Q])) {
            Q++, Dn.splice(0, Q);
            var Un = !1;
            break e;
          }
          Dn.splice(0, Q), Un = !0;
        }
        if (!Un) {
          a.destination = null, P++, yn.splice(0, P);
          return;
        }
      }
      yn.splice(0, P);
      var wn = a.completedBoundaries;
      for (P = 0; P < wn.length; P++) if (!en(a, u, wn[P])) {
        a.destination = null, P++, wn.splice(0, P);
        return;
      }
      wn.splice(0, P);
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
      Ve(a, S), qe(a, S);
    }
  }
  function Pt() {
  }
  function Gt(a, u, g, S) {
    var L = !1, P = null, N = "", Q = { push: function(me) {
      return me !== null && (N += me), !0;
    }, destroy: function(me) {
      L = !0, P = me;
    } }, he = !1;
    if (a = Ie(a, Ce(g, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Pt, void 0, function() {
      he = !0;
    }), jt(a), Qn(a, S), a.status === 1) a.status = 2, Q.destroy(a.fatalError);
    else if (a.status !== 2 && a.destination === null) {
      a.destination = Q;
      try {
        Bt(a, Q);
      } catch (me) {
        Ve(a, me), qe(a, me);
      }
    }
    if (L) throw P;
    if (!he) throw Error(p(426));
    return N;
  }
  return Ro.renderToNodeStream = function() {
    throw Error(p(207));
  }, Ro.renderToStaticMarkup = function(a, u) {
    return Gt(a, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ro.renderToStaticNodeStream = function() {
    throw Error(p(208));
  }, Ro.renderToString = function(a, u) {
    return Gt(a, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ro.version = "18.3.1", Ro;
}
var ds = {};
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
function nu() {
  if (Cl) return ds;
  Cl = 1;
  var b = Wt;
  function p(i) {
    for (var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, f = 1; f < arguments.length; f++) l += "&args[]=" + encodeURIComponent(arguments[f]);
    return "Minified React error #" + i + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var y = null, C = 0;
  function c(i, l) {
    if (l.length !== 0) if (512 < l.length) 0 < C && (i.enqueue(new Uint8Array(y.buffer, 0, C)), y = new Uint8Array(512), C = 0), i.enqueue(l);
    else {
      var f = y.length - C;
      f < l.length && (f === 0 ? i.enqueue(y) : (y.set(l.subarray(0, f), C), i.enqueue(y), l = l.subarray(f)), y = new Uint8Array(512), C = 0), y.set(l, C), C += l.length;
    }
  }
  function F(i, l) {
    return c(i, l), !0;
  }
  function _(i) {
    y && 0 < C && (i.enqueue(new Uint8Array(y.buffer, 0, C)), y = null, C = 0);
  }
  var T = new TextEncoder();
  function v(i) {
    return T.encode(i);
  }
  function k(i) {
    return T.encode(i);
  }
  function W(i, l) {
    typeof i.error == "function" ? i.error(l) : i.close();
  }
  var R = Object.prototype.hasOwnProperty, B = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ce = {}, ae = {};
  function ne(i) {
    return R.call(ae, i) ? !0 : R.call(ce, i) ? !1 : B.test(i) ? ae[i] = !0 : (ce[i] = !0, !1);
  }
  function z(i, l, f, m, j, M, V) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = m, this.attributeNamespace = j, this.mustUseProperty = f, this.propertyName = i, this.type = l, this.sanitizeURL = M, this.removeEmptyString = V;
  }
  var A = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    A[i] = new z(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var l = i[0];
    A[l] = new z(l, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    A[i] = new z(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    A[i] = new z(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    A[i] = new z(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    A[i] = new z(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    A[i] = new z(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    A[i] = new z(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    A[i] = new z(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var D = /[\-:]([a-z])/g;
  function U(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var l = i.replace(
      D,
      U
    );
    A[l] = new z(l, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var l = i.replace(D, U);
    A[l] = new z(l, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var l = i.replace(D, U);
    A[l] = new z(l, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    A[i] = new z(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), A.xlinkHref = new z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    A[i] = new z(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var $ = {
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
  }, H = ["Webkit", "ms", "Moz", "O"];
  Object.keys($).forEach(function(i) {
    H.forEach(function(l) {
      l = l + i.charAt(0).toUpperCase() + i.substring(1), $[l] = $[i];
    });
  });
  var O = /["'&<>]/;
  function X(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var l = O.exec(i);
    if (l) {
      var f = "", m, j = 0;
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
        j !== m && (f += i.substring(j, m)), j = m + 1, f += l;
      }
      i = j !== m ? f + i.substring(j, m) : f;
    }
    return i;
  }
  var ie = /([A-Z])/g, Y = /^ms-/, Pe = Array.isArray, ke = k("<script>"), je = k("<\/script>"), oe = k('<script src="'), de = k('<script type="module" src="'), De = k('" async=""><\/script>'), Se = /(<\/|<)(s)(cript)/gi;
  function He(i, l, f, m) {
    return "" + l + (f === "s" ? "\\u0073" : "\\u0053") + m;
  }
  function q(i, l, f, m, j) {
    i = i === void 0 ? "" : i, l = l === void 0 ? ke : k('<script nonce="' + X(l) + '">');
    var M = [];
    if (f !== void 0 && M.push(l, v(("" + f).replace(Se, He)), je), m !== void 0) for (f = 0; f < m.length; f++) M.push(oe, v(X(m[f])), De);
    if (j !== void 0) for (m = 0; m < j.length; m++) M.push(de, v(X(j[m])), De);
    return { bootstrapChunks: M, startInlineScript: l, placeholderPrefix: k(i + "P:"), segmentPrefix: k(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Ce(i, l) {
    return { insertionMode: i, selectedValue: l };
  }
  function et(i) {
    return Ce(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Be(i, l, f) {
    switch (l) {
      case "select":
        return Ce(1, f.value != null ? f.value : f.defaultValue);
      case "svg":
        return Ce(2, null);
      case "math":
        return Ce(3, null);
      case "foreignObject":
        return Ce(1, null);
      case "table":
        return Ce(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Ce(5, null);
      case "colgroup":
        return Ce(7, null);
      case "tr":
        return Ce(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? Ce(1, null) : i;
  }
  var xe = k("<!-- -->");
  function It(i, l, f, m) {
    return l === "" ? m : (m && i.push(xe), i.push(v(X(l))), !0);
  }
  var at = /* @__PURE__ */ new Map(), Ne = k(' style="'), Ee = k(":"), bt = k(";");
  function Ge(i, l, f) {
    if (typeof f != "object") throw Error(p(62));
    l = !0;
    for (var m in f) if (R.call(f, m)) {
      var j = f[m];
      if (j != null && typeof j != "boolean" && j !== "") {
        if (m.indexOf("--") === 0) {
          var M = v(X(m));
          j = v(X(("" + j).trim()));
        } else {
          M = m;
          var V = at.get(M);
          V !== void 0 || (V = k(X(M.replace(ie, "-$1").toLowerCase().replace(Y, "-ms-"))), at.set(M, V)), M = V, j = typeof j == "number" ? j === 0 || R.call($, m) ? v("" + j) : v(j + "px") : v(X(("" + j).trim()));
        }
        l ? (l = !1, i.push(Ne, M, Ee, j)) : i.push(bt, M, Ee, j);
      }
    }
    l || i.push(tt);
  }
  var ut = k(" "), ht = k('="'), tt = k('"'), Et = k('=""');
  function Qe(i, l, f, m) {
    switch (f) {
      case "style":
        Ge(i, l, m);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < f.length) || f[0] !== "o" && f[0] !== "O" || f[1] !== "n" && f[1] !== "N") {
      if (l = A.hasOwnProperty(f) ? A[f] : null, l !== null) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!l.acceptsBooleans) return;
        }
        switch (f = v(l.attributeName), l.type) {
          case 3:
            m && i.push(ut, f, Et);
            break;
          case 4:
            m === !0 ? i.push(ut, f, Et) : m !== !1 && i.push(ut, f, ht, v(X(m)), tt);
            break;
          case 5:
            isNaN(m) || i.push(ut, f, ht, v(X(m)), tt);
            break;
          case 6:
            !isNaN(m) && 1 <= m && i.push(ut, f, ht, v(X(m)), tt);
            break;
          default:
            l.sanitizeURL && (m = "" + m), i.push(ut, f, ht, v(X(m)), tt);
        }
      } else if (ne(f)) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (l = f.toLowerCase().slice(0, 5), l !== "data-" && l !== "aria-") return;
        }
        i.push(ut, v(f), ht, v(X(m)), tt);
      }
    }
  }
  var gt = k(">"), At = k("/>");
  function ue(i, l, f) {
    if (l != null) {
      if (f != null) throw Error(p(60));
      if (typeof l != "object" || !("__html" in l)) throw Error(p(61));
      l = l.__html, l != null && i.push(v("" + l));
    }
  }
  function fe(i) {
    var l = "";
    return b.Children.forEach(i, function(f) {
      f != null && (l += f);
    }), l;
  }
  var ee = k(' selected=""');
  function re(i, l, f, m) {
    i.push(ze(f));
    var j = f = null, M;
    for (M in l) if (R.call(l, M)) {
      var V = l[M];
      if (V != null) switch (M) {
        case "children":
          f = V;
          break;
        case "dangerouslySetInnerHTML":
          j = V;
          break;
        default:
          Qe(i, m, M, V);
      }
    }
    return i.push(gt), ue(i, j, f), typeof f == "string" ? (i.push(v(X(f))), null) : f;
  }
  var pe = k(`
`), Te = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ye = /* @__PURE__ */ new Map();
  function ze(i) {
    var l = Ye.get(i);
    if (l === void 0) {
      if (!Te.test(i)) throw Error(p(65, i));
      l = k("<" + i), Ye.set(i, l);
    }
    return l;
  }
  var nt = k("<!DOCTYPE html>");
  function xt(i, l, f, m, j) {
    switch (l) {
      case "select":
        i.push(ze("select"));
        var M = null, V = null;
        for (Ae in f) if (R.call(f, Ae)) {
          var K = f[Ae];
          if (K != null) switch (Ae) {
            case "children":
              M = K;
              break;
            case "dangerouslySetInnerHTML":
              V = K;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              Qe(i, m, Ae, K);
          }
        }
        return i.push(gt), ue(i, V, M), M;
      case "option":
        V = j.selectedValue, i.push(ze("option"));
        var ye = K = null, Oe = null, Ae = null;
        for (M in f) if (R.call(f, M)) {
          var lt = f[M];
          if (lt != null) switch (M) {
            case "children":
              K = lt;
              break;
            case "selected":
              Oe = lt;
              break;
            case "dangerouslySetInnerHTML":
              Ae = lt;
              break;
            case "value":
              ye = lt;
            default:
              Qe(i, m, M, lt);
          }
        }
        if (V != null) if (f = ye !== null ? "" + ye : fe(K), Pe(V)) {
          for (m = 0; m < V.length; m++)
            if ("" + V[m] === f) {
              i.push(ee);
              break;
            }
        } else "" + V === f && i.push(ee);
        else Oe && i.push(ee);
        return i.push(gt), ue(i, Ae, K), K;
      case "textarea":
        i.push(ze("textarea")), Ae = V = M = null;
        for (K in f) if (R.call(f, K) && (ye = f[K], ye != null)) switch (K) {
          case "children":
            Ae = ye;
            break;
          case "value":
            M = ye;
            break;
          case "defaultValue":
            V = ye;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(p(91));
          default:
            Qe(i, m, K, ye);
        }
        if (M === null && V !== null && (M = V), i.push(gt), Ae != null) {
          if (M != null) throw Error(p(92));
          if (Pe(Ae) && 1 < Ae.length) throw Error(p(93));
          M = "" + Ae;
        }
        return typeof M == "string" && M[0] === `
` && i.push(pe), M !== null && i.push(v(X("" + M))), null;
      case "input":
        i.push(ze("input")), ye = Ae = K = M = null;
        for (V in f) if (R.call(f, V) && (Oe = f[V], Oe != null)) switch (V) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(p(399, "input"));
          case "defaultChecked":
            ye = Oe;
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
            Qe(i, m, V, Oe);
        }
        return Ae !== null ? Qe(
          i,
          m,
          "checked",
          Ae
        ) : ye !== null && Qe(i, m, "checked", ye), M !== null ? Qe(i, m, "value", M) : K !== null && Qe(i, m, "value", K), i.push(At), null;
      case "menuitem":
        i.push(ze("menuitem"));
        for (var Xt in f) if (R.call(f, Xt) && (M = f[Xt], M != null)) switch (Xt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(p(400));
          default:
            Qe(i, m, Xt, M);
        }
        return i.push(gt), null;
      case "title":
        i.push(ze("title")), M = null;
        for (lt in f) if (R.call(f, lt) && (V = f[lt], V != null)) switch (lt) {
          case "children":
            M = V;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(p(434));
          default:
            Qe(i, m, lt, V);
        }
        return i.push(gt), M;
      case "listing":
      case "pre":
        i.push(ze(l)), V = M = null;
        for (ye in f) if (R.call(f, ye) && (K = f[ye], K != null)) switch (ye) {
          case "children":
            M = K;
            break;
          case "dangerouslySetInnerHTML":
            V = K;
            break;
          default:
            Qe(i, m, ye, K);
        }
        if (i.push(gt), V != null) {
          if (M != null) throw Error(p(60));
          if (typeof V != "object" || !("__html" in V)) throw Error(p(61));
          f = V.__html, f != null && (typeof f == "string" && 0 < f.length && f[0] === `
` ? i.push(pe, v(f)) : i.push(v("" + f)));
        }
        return typeof M == "string" && M[0] === `
` && i.push(pe), M;
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
        for (var sn in f) if (R.call(f, sn) && (M = f[sn], M != null)) switch (sn) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(p(399, l));
          default:
            Qe(i, m, sn, M);
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
        return re(i, f, l, m);
      case "html":
        return j.insertionMode === 0 && i.push(nt), re(i, f, l, m);
      default:
        if (l.indexOf("-") === -1 && typeof f.is != "string") return re(i, f, l, m);
        i.push(ze(l)), V = M = null;
        for (Oe in f) if (R.call(f, Oe) && (K = f[Oe], K != null)) switch (Oe) {
          case "children":
            M = K;
            break;
          case "dangerouslySetInnerHTML":
            V = K;
            break;
          case "style":
            Ge(i, m, K);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            ne(Oe) && typeof K != "function" && typeof K != "symbol" && i.push(ut, v(Oe), ht, v(X(K)), tt);
        }
        return i.push(gt), ue(i, V, M), M;
    }
  }
  var Dt = k("</"), Lt = k(">"), rt = k('<template id="'), wt = k('"></template>'), Mt = k("<!--$-->"), Rn = k('<!--$?--><template id="'), xn = k('"></template>'), hn = k("<!--$!-->"), te = k("<!--/$-->"), Ue = k("<template"), be = k('"'), _e = k(' data-dgst="');
  k(' data-msg="'), k(' data-stck="');
  var Ke = k("></template>");
  function We(i, l, f) {
    if (c(i, Rn), f === null) throw Error(p(395));
    return c(i, f), F(i, xn);
  }
  var ot = k('<div hidden id="'), Tt = k('">'), Me = k("</div>"), Rt = k('<svg aria-hidden="true" style="display:none" id="'), kt = k('">'), Ct = k("</svg>"), Ft = k('<math aria-hidden="true" style="display:none" id="'), vt = k('">'), _t = k("</math>"), yt = k('<table hidden id="'), nn = k('">'), $t = k("</table>"), gn = k('<table hidden><tbody id="'), $e = k('">'), Vt = k("</tbody></table>"), Fn = k('<table hidden><tr id="'), _n = k('">'), w = k("</tr></table>"), J = k('<table hidden><colgroup id="'), se = k('">'), ge = k("</colgroup></table>");
  function Fe(i, l, f, m) {
    switch (f.insertionMode) {
      case 0:
      case 1:
        return c(i, ot), c(i, l.segmentPrefix), c(i, v(m.toString(16))), F(i, Tt);
      case 2:
        return c(i, Rt), c(i, l.segmentPrefix), c(i, v(m.toString(16))), F(i, kt);
      case 3:
        return c(i, Ft), c(i, l.segmentPrefix), c(i, v(m.toString(16))), F(i, vt);
      case 4:
        return c(i, yt), c(i, l.segmentPrefix), c(i, v(m.toString(16))), F(i, nn);
      case 5:
        return c(i, gn), c(i, l.segmentPrefix), c(i, v(m.toString(16))), F(i, $e);
      case 6:
        return c(i, Fn), c(i, l.segmentPrefix), c(i, v(m.toString(16))), F(i, _n);
      case 7:
        return c(
          i,
          J
        ), c(i, l.segmentPrefix), c(i, v(m.toString(16))), F(i, se);
      default:
        throw Error(p(397));
    }
  }
  function Le(i, l) {
    switch (l.insertionMode) {
      case 0:
      case 1:
        return F(i, Me);
      case 2:
        return F(i, Ct);
      case 3:
        return F(i, _t);
      case 4:
        return F(i, $t);
      case 5:
        return F(i, Vt);
      case 6:
        return F(i, w);
      case 7:
        return F(i, ge);
      default:
        throw Error(p(397));
    }
  }
  var Ie = k('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Re = k('$RS("'), ct = k('","'), Ve = k('")<\/script>'), qe = k('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), it = k('$RC("'), rn = k('","'), Qt = k('")<\/script>'), dt = k('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), ft = k('$RX("'), Kt = k('"'), qt = k(")<\/script>"), Pn = k(","), Jn = /[<\u2028\u2029]/g;
  function on(i) {
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
  var vn = Object.assign, jt = Symbol.for("react.element"), In = Symbol.for("react.portal"), Bn = Symbol.for("react.fragment"), Zn = Symbol.for("react.strict_mode"), en = Symbol.for("react.profiler"), mn = Symbol.for("react.provider"), Bt = Symbol.for("react.context"), Qn = Symbol.for("react.forward_ref"), Pt = Symbol.for("react.suspense"), Gt = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), g = Symbol.for("react.scope"), S = Symbol.for("react.debug_trace_mode"), L = Symbol.for("react.legacy_hidden"), P = Symbol.for("react.default_value"), N = Symbol.iterator;
  function Q(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case Bn:
        return "Fragment";
      case In:
        return "Portal";
      case en:
        return "Profiler";
      case Zn:
        return "StrictMode";
      case Pt:
        return "Suspense";
      case Gt:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case Bt:
        return (i.displayName || "Context") + ".Consumer";
      case mn:
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
  var he = {};
  function me(i, l) {
    if (i = i.contextTypes, !i) return he;
    var f = {}, m;
    for (m in i) f[m] = l[m];
    return f;
  }
  var ve = null;
  function Xe(i, l) {
    if (i !== l) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var f = l.parent;
      if (i === null) {
        if (f !== null) throw Error(p(401));
      } else {
        if (f === null) throw Error(p(401));
        Xe(i, f);
      }
      l.context._currentValue = l.value;
    }
  }
  function Ut(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && Ut(i);
  }
  function Ht(i) {
    var l = i.parent;
    l !== null && Ht(l), i.context._currentValue = i.value;
  }
  function Nt(i, l) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(p(402));
    i.depth === l.depth ? Xe(i, l) : Nt(i, l);
  }
  function An(i, l) {
    var f = l.parent;
    if (f === null) throw Error(p(402));
    i.depth === f.depth ? Xe(i, f) : An(i, f), l.context._currentValue = l.value;
  }
  function yn(i) {
    var l = ve;
    l !== i && (l === null ? Ht(i) : i === null ? Ut(l) : l.depth === i.depth ? Xe(l, i) : l.depth > i.depth ? Nt(l, i) : An(l, i), ve = i);
  }
  var Kn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, l) {
    i = i._reactInternals, i.queue !== null && i.queue.push(l);
  }, enqueueReplaceState: function(i, l) {
    i = i._reactInternals, i.replace = !0, i.queue = [l];
  }, enqueueForceUpdate: function() {
  } };
  function Dn(i, l, f, m) {
    var j = i.state !== void 0 ? i.state : null;
    i.updater = Kn, i.props = f, i.state = j;
    var M = { queue: [], replace: !1 };
    i._reactInternals = M;
    var V = l.contextType;
    if (i.context = typeof V == "object" && V !== null ? V._currentValue : m, V = l.getDerivedStateFromProps, typeof V == "function" && (V = V(f, j), j = V == null ? j : vn({}, j, V), i.state = j), typeof l.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (l = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), l !== i.state && Kn.enqueueReplaceState(i, i.state, null), M.queue !== null && 0 < M.queue.length) if (l = M.queue, V = M.replace, M.queue = null, M.replace = !1, V && l.length === 1) i.state = l[0];
    else {
      for (M = V ? l[0] : i.state, j = !0, V = V ? 1 : 0; V < l.length; V++) {
        var K = l[V];
        K = typeof K == "function" ? K.call(i, M, f, m) : K, K != null && (j ? (j = !1, M = vn({}, M, K)) : vn(M, K));
      }
      i.state = M;
    }
    else M.queue = null;
  }
  var Un = { id: 1, overflow: "" };
  function wn(i, l, f) {
    var m = i.id;
    i = i.overflow;
    var j = 32 - Hn(m) - 1;
    m &= ~(1 << j), f += 1;
    var M = 32 - Hn(l) + j;
    if (30 < M) {
      var V = j - j % 5;
      return M = (m & (1 << V) - 1).toString(32), m >>= V, j -= V, { id: 1 << 32 - Hn(l) + j | f << j | m, overflow: M + i };
    }
    return { id: 1 << M | f << j | m, overflow: i };
  }
  var Hn = Math.clz32 ? Math.clz32 : xr, Pa = Math.log, Ia = Math.LN2;
  function xr(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Pa(i) / Ia | 0) | 0;
  }
  function Sn(i, l) {
    return i === l && (i !== 0 || 1 / i === 1 / l) || i !== i && l !== l;
  }
  var Aa = typeof Object.is == "function" ? Object.is : Sn, kn = null, Xr = null, wr = null, st = null, Nn = !1, kr = !1, Wn = 0, Mn = null, Cr = 0;
  function On() {
    if (kn === null) throw Error(p(321));
    return kn;
  }
  function an() {
    if (0 < Cr) throw Error(p(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Jr() {
    return st === null ? wr === null ? (Nn = !1, wr = st = an()) : (Nn = !0, st = wr) : st.next === null ? (Nn = !1, st = st.next = an()) : (Nn = !0, st = st.next), st;
  }
  function ir() {
    Xr = kn = null, kr = !1, wr = null, Cr = 0, st = Mn = null;
  }
  function Po(i, l) {
    return typeof l == "function" ? l(i) : l;
  }
  function Er(i, l, f) {
    if (kn = On(), st = Jr(), Nn) {
      var m = st.queue;
      if (l = m.dispatch, Mn !== null && (f = Mn.get(m), f !== void 0)) {
        Mn.delete(m), m = st.memoizedState;
        do
          m = i(m, f.action), f = f.next;
        while (f !== null);
        return st.memoizedState = m, [m, l];
      }
      return [st.memoizedState, l];
    }
    return i = i === Po ? typeof l == "function" ? l() : l : f !== void 0 ? f(l) : l, st.memoizedState = i, i = st.queue = { last: null, dispatch: null }, i = i.dispatch = Da.bind(null, kn, i), [st.memoizedState, i];
  }
  function Io(i, l) {
    if (kn = On(), st = Jr(), l = l === void 0 ? null : l, st !== null) {
      var f = st.memoizedState;
      if (f !== null && l !== null) {
        var m = f[1];
        e: if (m === null) m = !1;
        else {
          for (var j = 0; j < m.length && j < l.length; j++) if (!Aa(l[j], m[j])) {
            m = !1;
            break e;
          }
          m = !0;
        }
        if (m) return f[0];
      }
    }
    return i = i(), st.memoizedState = [i, l], i;
  }
  function Da(i, l, f) {
    if (25 <= Cr) throw Error(p(301));
    if (i === kn) if (kr = !0, i = { action: f, next: null }, Mn === null && (Mn = /* @__PURE__ */ new Map()), f = Mn.get(l), f === void 0) Mn.set(l, i);
    else {
      for (l = f; l.next !== null; ) l = l.next;
      l.next = i;
    }
  }
  function Ma() {
    throw Error(p(394));
  }
  function Tr() {
  }
  var Ao = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return On(), i._currentValue;
  }, useMemo: Io, useReducer: Er, useRef: function(i) {
    kn = On(), st = Jr();
    var l = st.memoizedState;
    return l === null ? (i = { current: i }, st.memoizedState = i) : l;
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
    return On(), [!1, Ma];
  }, useId: function() {
    var i = Xr.treeContext, l = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - Hn(i) - 1)).toString(32) + l;
    var f = sr;
    if (f === null) throw Error(p(404));
    return l = Wn++, i = ":" + f.idPrefix + "R" + i, 0 < l && (i += "H" + l.toString(32)), i + ":";
  }, useMutableSource: function(i, l) {
    return On(), l(i._source);
  }, useSyncExternalStore: function(i, l, f) {
    if (f === void 0) throw Error(p(407));
    return f();
  } }, sr = null, Zr = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Oa(i) {
    return console.error(i), null;
  }
  function qn() {
  }
  function Qr(i, l, f, m, j, M, V, K, ye) {
    var Oe = [], Ae = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: m === void 0 ? 12800 : m, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ae, pingedTasks: Oe, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: j === void 0 ? Oa : j, onAllReady: M === void 0 ? qn : M, onShellReady: V === void 0 ? qn : V, onShellError: K === void 0 ? qn : K, onFatalError: ye === void 0 ? qn : ye }, f = er(l, 0, null, f, !1, !1), f.parentFlushed = !0, i = Kr(l, i, null, f, Ae, he, null, Un), Oe.push(i), l;
  }
  function Kr(i, l, f, m, j, M, V, K) {
    i.allPendingTasks++, f === null ? i.pendingRootTasks++ : f.pendingTasks++;
    var ye = { node: l, ping: function() {
      var Oe = i.pingedTasks;
      Oe.push(ye), Oe.length === 1 && Uo(i);
    }, blockedBoundary: f, blockedSegment: m, abortSet: j, legacyContext: M, context: V, treeContext: K };
    return j.add(ye), ye;
  }
  function er(i, l, f, m, j, M) {
    return { status: 0, id: -1, index: l, parentFlushed: !1, chunks: [], children: [], formatContext: m, boundary: f, lastPushedText: j, textEmbedded: M };
  }
  function lr(i, l) {
    if (i = i.onError(l), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function Rr(i, l) {
    var f = i.onShellError;
    f(l), f = i.onFatalError, f(l), i.destination !== null ? (i.status = 2, W(i.destination, l)) : (i.status = 1, i.fatalError = l);
  }
  function Do(i, l, f, m, j) {
    for (kn = {}, Xr = l, Wn = 0, i = f(m, j); kr; ) kr = !1, Wn = 0, Cr += 1, st = null, i = f(m, j);
    return ir(), i;
  }
  function Mo(i, l, f, m) {
    var j = f.render(), M = m.childContextTypes;
    if (M != null) {
      var V = l.legacyContext;
      if (typeof f.getChildContext != "function") m = V;
      else {
        f = f.getChildContext();
        for (var K in f) if (!(K in M)) throw Error(p(108, Q(m) || "Unknown", K));
        m = vn({}, V, f);
      }
      l.legacyContext = m, Yt(i, l, j), l.legacyContext = V;
    } else Yt(i, l, j);
  }
  function Oo(i, l) {
    if (i && i.defaultProps) {
      l = vn({}, l), i = i.defaultProps;
      for (var f in i) l[f] === void 0 && (l[f] = i[f]);
      return l;
    }
    return l;
  }
  function Fr(i, l, f, m, j) {
    if (typeof f == "function") if (f.prototype && f.prototype.isReactComponent) {
      j = me(f, l.legacyContext);
      var M = f.contextType;
      M = new f(m, typeof M == "object" && M !== null ? M._currentValue : j), Dn(M, f, m, j), Mo(i, l, M, f);
    } else {
      M = me(f, l.legacyContext), j = Do(i, l, f, m, M);
      var V = Wn !== 0;
      if (typeof j == "object" && j !== null && typeof j.render == "function" && j.$$typeof === void 0) Dn(j, f, m, M), Mo(i, l, j, f);
      else if (V) {
        m = l.treeContext, l.treeContext = wn(m, 1, 0);
        try {
          Yt(i, l, j);
        } finally {
          l.treeContext = m;
        }
      } else Yt(i, l, j);
    }
    else if (typeof f == "string") {
      switch (j = l.blockedSegment, M = xt(j.chunks, f, m, i.responseState, j.formatContext), j.lastPushedText = !1, V = j.formatContext, j.formatContext = Be(V, f, m), _r(i, l, M), j.formatContext = V, f) {
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
          j.chunks.push(Dt, v(f), Lt);
      }
      j.lastPushedText = !1;
    } else {
      switch (f) {
        case L:
        case S:
        case Zn:
        case en:
        case Bn:
          Yt(i, l, m.children);
          return;
        case Gt:
          Yt(i, l, m.children);
          return;
        case g:
          throw Error(p(343));
        case Pt:
          e: {
            f = l.blockedBoundary, j = l.blockedSegment, M = m.fallback, m = m.children, V = /* @__PURE__ */ new Set();
            var K = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: V, errorDigest: null }, ye = er(i, j.chunks.length, K, j.formatContext, !1, !1);
            j.children.push(ye), j.lastPushedText = !1;
            var Oe = er(i, 0, null, j.formatContext, !1, !1);
            Oe.parentFlushed = !0, l.blockedBoundary = K, l.blockedSegment = Oe;
            try {
              if (_r(
                i,
                l,
                m
              ), Oe.lastPushedText && Oe.textEmbedded && Oe.chunks.push(xe), Oe.status = 1, Pr(K, Oe), K.pendingTasks === 0) break e;
            } catch (Ae) {
              Oe.status = 4, K.forceClientRender = !0, K.errorDigest = lr(i, Ae);
            } finally {
              l.blockedBoundary = f, l.blockedSegment = j;
            }
            l = Kr(i, M, f, ye, V, l.legacyContext, l.context, l.treeContext), i.pingedTasks.push(l);
          }
          return;
      }
      if (typeof f == "object" && f !== null) switch (f.$$typeof) {
        case Qn:
          if (m = Do(i, l, f.render, m, j), Wn !== 0) {
            f = l.treeContext, l.treeContext = wn(f, 1, 0);
            try {
              Yt(i, l, m);
            } finally {
              l.treeContext = f;
            }
          } else Yt(i, l, m);
          return;
        case a:
          f = f.type, m = Oo(f, m), Fr(i, l, f, m, j);
          return;
        case mn:
          if (j = m.children, f = f._context, m = m.value, M = f._currentValue, f._currentValue = m, V = ve, ve = m = { parent: V, depth: V === null ? 0 : V.depth + 1, context: f, parentValue: M, value: m }, l.context = m, Yt(i, l, j), i = ve, i === null) throw Error(p(403));
          m = i.parentValue, i.context._currentValue = m === P ? i.context._defaultValue : m, i = ve = i.parent, l.context = i;
          return;
        case Bt:
          m = m.children, m = m(f._currentValue), Yt(i, l, m);
          return;
        case u:
          j = f._init, f = j(f._payload), m = Oo(f, m), Fr(i, l, f, m, void 0);
          return;
      }
      throw Error(p(
        130,
        f == null ? f : typeof f,
        ""
      ));
    }
  }
  function Yt(i, l, f) {
    if (l.node = f, typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case jt:
          Fr(i, l, f.type, f.props, f.ref);
          return;
        case In:
          throw Error(p(257));
        case u:
          var m = f._init;
          f = m(f._payload), Yt(i, l, f);
          return;
      }
      if (Pe(f)) {
        Lo(i, l, f);
        return;
      }
      if (f === null || typeof f != "object" ? m = null : (m = N && f[N] || f["@@iterator"], m = typeof m == "function" ? m : null), m && (m = m.call(f))) {
        if (f = m.next(), !f.done) {
          var j = [];
          do
            j.push(f.value), f = m.next();
          while (!f.done);
          Lo(i, l, j);
        }
        return;
      }
      throw i = Object.prototype.toString.call(f), Error(p(31, i === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : i));
    }
    typeof f == "string" ? (m = l.blockedSegment, m.lastPushedText = It(l.blockedSegment.chunks, f, i.responseState, m.lastPushedText)) : typeof f == "number" && (m = l.blockedSegment, m.lastPushedText = It(l.blockedSegment.chunks, "" + f, i.responseState, m.lastPushedText));
  }
  function Lo(i, l, f) {
    for (var m = f.length, j = 0; j < m; j++) {
      var M = l.treeContext;
      l.treeContext = wn(M, m, j);
      try {
        _r(i, l, f[j]);
      } finally {
        l.treeContext = M;
      }
    }
  }
  function _r(i, l, f) {
    var m = l.blockedSegment.formatContext, j = l.legacyContext, M = l.context;
    try {
      return Yt(i, l, f);
    } catch (ye) {
      if (ir(), typeof ye == "object" && ye !== null && typeof ye.then == "function") {
        f = ye;
        var V = l.blockedSegment, K = er(i, V.chunks.length, null, V.formatContext, V.lastPushedText, !0);
        V.children.push(K), V.lastPushedText = !1, i = Kr(i, l.node, l.blockedBoundary, K, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, f.then(i, i), l.blockedSegment.formatContext = m, l.legacyContext = j, l.context = M, yn(M);
      } else throw l.blockedSegment.formatContext = m, l.legacyContext = j, l.context = M, yn(M), ye;
    }
  }
  function La(i) {
    var l = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Bo(this, l, i);
  }
  function jo(i, l, f) {
    var m = i.blockedBoundary;
    i.blockedSegment.status = 3, m === null ? (l.allPendingTasks--, l.status !== 2 && (l.status = 2, l.destination !== null && l.destination.close())) : (m.pendingTasks--, m.forceClientRender || (m.forceClientRender = !0, i = f === void 0 ? Error(p(432)) : f, m.errorDigest = l.onError(i), m.parentFlushed && l.clientRenderedBoundaries.push(m)), m.fallbackAbortableTasks.forEach(function(j) {
      return jo(j, l, f);
    }), m.fallbackAbortableTasks.clear(), l.allPendingTasks--, l.allPendingTasks === 0 && (m = l.onAllReady, m()));
  }
  function Pr(i, l) {
    if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null) {
      var f = l.children[0];
      f.id = l.id, f.parentFlushed = !0, f.status === 1 && Pr(i, f);
    } else i.completedSegments.push(l);
  }
  function Bo(i, l, f) {
    if (l === null) {
      if (f.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(p(389));
        i.completedRootSegment = f;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = qn, l = i.onShellReady, l());
    } else l.pendingTasks--, l.forceClientRender || (l.pendingTasks === 0 ? (f.parentFlushed && f.status === 1 && Pr(l, f), l.parentFlushed && i.completedBoundaries.push(l), l.fallbackAbortableTasks.forEach(La, i), l.fallbackAbortableTasks.clear()) : f.parentFlushed && f.status === 1 && (Pr(l, f), l.completedSegments.length === 1 && l.parentFlushed && i.partialBoundaries.push(l)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Uo(i) {
    if (i.status !== 2) {
      var l = ve, f = Zr.current;
      Zr.current = Ao;
      var m = sr;
      sr = i.responseState;
      try {
        var j = i.pingedTasks, M;
        for (M = 0; M < j.length; M++) {
          var V = j[M], K = i, ye = V.blockedSegment;
          if (ye.status === 0) {
            yn(V.context);
            try {
              Yt(K, V, V.node), ye.lastPushedText && ye.textEmbedded && ye.chunks.push(xe), V.abortSet.delete(V), ye.status = 1, Bo(K, V.blockedBoundary, ye);
            } catch (ln) {
              if (ir(), typeof ln == "object" && ln !== null && typeof ln.then == "function") {
                var Oe = V.ping;
                ln.then(Oe, Oe);
              } else {
                V.abortSet.delete(V), ye.status = 4;
                var Ae = V.blockedBoundary, lt = ln, Xt = lr(K, lt);
                if (Ae === null ? Rr(K, lt) : (Ae.pendingTasks--, Ae.forceClientRender || (Ae.forceClientRender = !0, Ae.errorDigest = Xt, Ae.parentFlushed && K.clientRenderedBoundaries.push(Ae))), K.allPendingTasks--, K.allPendingTasks === 0) {
                  var sn = K.onAllReady;
                  sn();
                }
              }
            } finally {
            }
          }
        }
        j.splice(0, M), i.destination !== null && qr(i, i.destination);
      } catch (ln) {
        lr(i, ln), Rr(i, ln);
      } finally {
        sr = m, Zr.current = f, f === Ao && yn(l);
      }
    }
  }
  function Ir(i, l, f) {
    switch (f.parentFlushed = !0, f.status) {
      case 0:
        var m = f.id = i.nextSegmentId++;
        return f.lastPushedText = !1, f.textEmbedded = !1, i = i.responseState, c(l, rt), c(l, i.placeholderPrefix), i = v(m.toString(16)), c(l, i), F(l, wt);
      case 1:
        f.status = 2;
        var j = !0;
        m = f.chunks;
        var M = 0;
        f = f.children;
        for (var V = 0; V < f.length; V++) {
          for (j = f[V]; M < j.index; M++) c(l, m[M]);
          j = Ar(i, l, j);
        }
        for (; M < m.length - 1; M++) c(l, m[M]);
        return M < m.length && (j = F(l, m[M])), j;
      default:
        throw Error(p(390));
    }
  }
  function Ar(i, l, f) {
    var m = f.boundary;
    if (m === null) return Ir(i, l, f);
    if (m.parentFlushed = !0, m.forceClientRender) m = m.errorDigest, F(l, hn), c(l, Ue), m && (c(l, _e), c(l, v(X(m))), c(l, be)), F(l, Ke), Ir(i, l, f);
    else if (0 < m.pendingTasks) {
      m.rootSegmentID = i.nextSegmentId++, 0 < m.completedSegments.length && i.partialBoundaries.push(m);
      var j = i.responseState, M = j.nextSuspenseID++;
      j = k(j.boundaryPrefix + M.toString(16)), m = m.id = j, We(l, i.responseState, m), Ir(i, l, f);
    } else if (m.byteSize > i.progressiveChunkSize) m.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(m), We(l, i.responseState, m.id), Ir(i, l, f);
    else {
      if (F(l, Mt), f = m.completedSegments, f.length !== 1) throw Error(p(391));
      Ar(i, l, f[0]);
    }
    return F(l, te);
  }
  function Ho(i, l, f) {
    return Fe(l, i.responseState, f.formatContext, f.id), Ar(i, l, f), Le(l, f.formatContext);
  }
  function No(i, l, f) {
    for (var m = f.completedSegments, j = 0; j < m.length; j++) Wo(i, l, f, m[j]);
    if (m.length = 0, i = i.responseState, m = f.id, f = f.rootSegmentID, c(l, i.startInlineScript), i.sentCompleteBoundaryFunction ? c(l, it) : (i.sentCompleteBoundaryFunction = !0, c(l, qe)), m === null) throw Error(p(395));
    return f = v(f.toString(16)), c(l, m), c(l, rn), c(l, i.segmentPrefix), c(l, f), F(l, Qt);
  }
  function Wo(i, l, f, m) {
    if (m.status === 2) return !0;
    var j = m.id;
    if (j === -1) {
      if ((m.id = f.rootSegmentID) === -1) throw Error(p(392));
      return Ho(i, l, m);
    }
    return Ho(i, l, m), i = i.responseState, c(l, i.startInlineScript), i.sentCompleteSegmentFunction ? c(l, Re) : (i.sentCompleteSegmentFunction = !0, c(l, Ie)), c(l, i.segmentPrefix), j = v(j.toString(16)), c(l, j), c(l, ct), c(l, i.placeholderPrefix), c(l, j), F(l, Ve);
  }
  function qr(i, l) {
    y = new Uint8Array(512), C = 0;
    try {
      var f = i.completedRootSegment;
      if (f !== null && i.pendingRootTasks === 0) {
        Ar(i, l, f), i.completedRootSegment = null;
        var m = i.responseState.bootstrapChunks;
        for (f = 0; f < m.length - 1; f++) c(l, m[f]);
        f < m.length && F(l, m[f]);
      }
      var j = i.clientRenderedBoundaries, M;
      for (M = 0; M < j.length; M++) {
        var V = j[M];
        m = l;
        var K = i.responseState, ye = V.id, Oe = V.errorDigest, Ae = V.errorMessage, lt = V.errorComponentStack;
        if (c(m, K.startInlineScript), K.sentClientRenderFunction ? c(m, ft) : (K.sentClientRenderFunction = !0, c(
          m,
          dt
        )), ye === null) throw Error(p(395));
        c(m, ye), c(m, Kt), (Oe || Ae || lt) && (c(m, Pn), c(m, v(on(Oe || "")))), (Ae || lt) && (c(m, Pn), c(m, v(on(Ae || "")))), lt && (c(m, Pn), c(m, v(on(lt)))), F(m, qt);
      }
      j.splice(0, M);
      var Xt = i.completedBoundaries;
      for (M = 0; M < Xt.length; M++) No(i, l, Xt[M]);
      Xt.splice(0, M), _(l), y = new Uint8Array(512), C = 0;
      var sn = i.partialBoundaries;
      for (M = 0; M < sn.length; M++) {
        var ln = sn[M];
        e: {
          j = i, V = l;
          var Dr = ln.completedSegments;
          for (K = 0; K < Dr.length; K++) if (!Wo(
            j,
            V,
            ln,
            Dr[K]
          )) {
            K++, Dr.splice(0, K);
            var $o = !1;
            break e;
          }
          Dr.splice(0, K), $o = !0;
        }
        if (!$o) {
          i.destination = null, M++, sn.splice(0, M);
          return;
        }
      }
      sn.splice(0, M);
      var ur = i.completedBoundaries;
      for (M = 0; M < ur.length; M++) No(i, l, ur[M]);
      ur.splice(0, M);
    } finally {
      _(l), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && l.close();
    }
  }
  function zo(i, l) {
    try {
      var f = i.abortableTasks;
      f.forEach(function(m) {
        return jo(m, i, l);
      }), f.clear(), i.destination !== null && qr(i, i.destination);
    } catch (m) {
      lr(i, m), Rr(i, m);
    }
  }
  return ds.renderToReadableStream = function(i, l) {
    return new Promise(function(f, m) {
      var j, M, V = new Promise(function(Ae, lt) {
        M = Ae, j = lt;
      }), K = Qr(i, q(l ? l.identifierPrefix : void 0, l ? l.nonce : void 0, l ? l.bootstrapScriptContent : void 0, l ? l.bootstrapScripts : void 0, l ? l.bootstrapModules : void 0), et(l ? l.namespaceURI : void 0), l ? l.progressiveChunkSize : void 0, l ? l.onError : void 0, M, function() {
        var Ae = new ReadableStream({ type: "bytes", pull: function(lt) {
          if (K.status === 1) K.status = 2, W(lt, K.fatalError);
          else if (K.status !== 2 && K.destination === null) {
            K.destination = lt;
            try {
              qr(K, lt);
            } catch (Xt) {
              lr(K, Xt), Rr(K, Xt);
            }
          }
        }, cancel: function() {
          zo(K);
        } }, { highWaterMark: 0 });
        Ae.allReady = V, f(Ae);
      }, function(Ae) {
        V.catch(function() {
        }), m(Ae);
      }, j);
      if (l && l.signal) {
        var ye = l.signal, Oe = function() {
          zo(K, ye.reason), ye.removeEventListener("abort", Oe);
        };
        ye.addEventListener("abort", Oe);
      }
      Uo(K);
    });
  }, ds.version = "18.3.1", ds;
}
var Fo = {};
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
function ru() {
  return El || (El = 1, process.env.NODE_ENV !== "production" && function() {
    var b = Wt, p = "18.3.1", y = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(e) {
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
    function W(e) {
    }
    function R(e) {
      e.push(null);
    }
    function B(e) {
      return e;
    }
    function ce(e) {
      return e;
    }
    function ae(e, t) {
      e.destroy(t);
    }
    function ne(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function z(e) {
      try {
        return A(e), !1;
      } catch {
        return !0;
      }
    }
    function A(e) {
      return "" + e;
    }
    function D(e, t) {
      if (z(e))
        return c("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ne(e)), A(e);
    }
    function U(e, t) {
      if (z(e))
        return c("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ne(e)), A(e);
    }
    function $(e) {
      if (z(e))
        return c("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", ne(e)), A(e);
    }
    var H = Object.prototype.hasOwnProperty, O = 0, X = 1, ie = 2, Y = 3, Pe = 4, ke = 5, je = 6, oe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", de = oe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", De = new RegExp("^[" + oe + "][" + de + "]*$"), Se = {}, He = {};
    function q(e) {
      return H.call(He, e) ? !0 : H.call(Se, e) ? !1 : De.test(e) ? (He[e] = !0, !0) : (Se[e] = !0, c("Invalid attribute name: `%s`", e), !1);
    }
    function Ce(e, t, n, o) {
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
    function et(e) {
      return xe.hasOwnProperty(e) ? xe[e] : null;
    }
    function Be(e, t, n, o, s, d, h) {
      this.acceptsBooleans = t === ie || t === Y || t === Pe, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = h;
    }
    var xe = {}, It = [
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
    It.forEach(function(e) {
      xe[e] = new Be(
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
      xe[t] = new Be(
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
      xe[e] = new Be(
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
      xe[e] = new Be(
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
      xe[e] = new Be(
        e,
        Y,
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
      xe[e] = new Be(
        e,
        Y,
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
      xe[e] = new Be(
        e,
        Pe,
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
      xe[e] = new Be(
        e,
        je,
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
      xe[e] = new Be(
        e,
        ke,
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
    var at = /[\-\:]([a-z])/g, Ne = function(e) {
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
      var t = e.replace(at, Ne);
      xe[t] = new Be(
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
      var t = e.replace(at, Ne);
      xe[t] = new Be(
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
      var t = e.replace(at, Ne);
      xe[t] = new Be(
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
      xe[e] = new Be(
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
    xe[Ee] = new Be(
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
      xe[e] = new Be(
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
    var bt = {
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
    function Ge(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var ut = ["Webkit", "ms", "Moz", "O"];
    Object.keys(bt).forEach(function(e) {
      ut.forEach(function(t) {
        bt[Ge(t, e)] = bt[e];
      });
    });
    var ht = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function tt(e, t) {
      ht[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || c("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || c("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Et(e, t) {
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
    var Qe = {
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
    }, gt = {}, At = new RegExp("^(aria)-[" + de + "]*$"), ue = new RegExp("^(aria)[A-Z][" + de + "]*$");
    function fe(e, t) {
      {
        if (H.call(gt, t) && gt[t])
          return !0;
        if (ue.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = Qe.hasOwnProperty(n) ? n : null;
          if (o == null)
            return c("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), gt[t] = !0, !0;
          if (t !== o)
            return c("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), gt[t] = !0, !0;
        }
        if (At.test(t)) {
          var s = t.toLowerCase(), d = Qe.hasOwnProperty(s) ? s : null;
          if (d == null)
            return gt[t] = !0, !1;
          if (t !== d)
            return c("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), gt[t] = !0, !0;
        }
      }
      return !0;
    }
    function ee(e, t) {
      {
        var n = [];
        for (var o in t) {
          var s = fe(e, o);
          s || n.push(o);
        }
        var d = n.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        n.length === 1 ? c("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : n.length > 1 && c("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function re(e, t) {
      Et(e, t) || ee(e, t);
    }
    var pe = !1;
    function Te(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !pe && (pe = !0, e === "select" && t.multiple ? c("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : c("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ye = {
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
      var nt = {}, xt = /^on./, Dt = /^on[^A-Z]/, Lt = new RegExp("^(aria)-[" + de + "]*$"), rt = new RegExp("^(aria)[A-Z][" + de + "]*$");
      ze = function(e, t, n, o) {
        if (H.call(nt, t) && nt[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return c("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), nt[t] = !0, !0;
        if (o != null) {
          var d = o.registrationNameDependencies, h = o.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var x = h.hasOwnProperty(s) ? h[s] : null;
          if (x != null)
            return c("Invalid event handler property `%s`. Did you mean `%s`?", t, x), nt[t] = !0, !0;
          if (xt.test(t))
            return c("Unknown event handler property `%s`. It will be ignored.", t), nt[t] = !0, !0;
        } else if (xt.test(t))
          return Dt.test(t) && c("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), nt[t] = !0, !0;
        if (Lt.test(t) || rt.test(t))
          return !0;
        if (s === "innerhtml")
          return c("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), nt[t] = !0, !0;
        if (s === "aria")
          return c("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), nt[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return c("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), nt[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return c("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), nt[t] = !0, !0;
        var I = et(t), G = I !== null && I.type === O;
        if (Ye.hasOwnProperty(s)) {
          var Z = Ye[s];
          if (Z !== t)
            return c("Invalid DOM property `%s`. Did you mean `%s`?", t, Z), nt[t] = !0, !0;
        } else if (!G && t !== s)
          return c("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), nt[t] = !0, !0;
        return typeof n == "boolean" && Ce(t, n, I) ? (n ? c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), nt[t] = !0, !0) : G ? !0 : Ce(t, n, I) ? (nt[t] = !0, !1) : ((n === "false" || n === "true") && I !== null && I.type === Y && (c("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), nt[t] = !0), !0);
      };
    }
    var wt = function(e, t, n) {
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
    function Mt(e, t, n) {
      Et(e, t) || wt(e, t, n);
    }
    var Rn = function() {
    };
    {
      var xn = /^(?:webkit|moz|o)[A-Z]/, hn = /^-ms-/, te = /-(.)/g, Ue = /;\s*$/, be = {}, _e = {}, Ke = !1, We = !1, ot = function(e) {
        return e.replace(te, function(t, n) {
          return n.toUpperCase();
        });
      }, Tt = function(e) {
        be.hasOwnProperty(e) && be[e] || (be[e] = !0, c(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ot(e.replace(hn, "ms-"))
        ));
      }, Me = function(e) {
        be.hasOwnProperty(e) && be[e] || (be[e] = !0, c("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Rt = function(e, t) {
        _e.hasOwnProperty(t) && _e[t] || (_e[t] = !0, c(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Ue, "")));
      }, kt = function(e, t) {
        Ke || (Ke = !0, c("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ct = function(e, t) {
        We || (We = !0, c("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Rn = function(e, t) {
        e.indexOf("-") > -1 ? Tt(e) : xn.test(e) ? Me(e) : Ue.test(t) && Rt(e, t), typeof t == "number" && (isNaN(t) ? kt(e, t) : isFinite(t) || Ct(e, t));
      };
    }
    var Ft = Rn, vt = /["'&<>]/;
    function _t(e) {
      $(e);
      var t = "" + e, n = vt.exec(t);
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
    function yt(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : _t(e);
    }
    var nn = /([A-Z])/g, $t = /^ms-/;
    function gn(e) {
      return e.replace(nn, "-$1").toLowerCase().replace($t, "-ms-");
    }
    var $e = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Vt = !1;
    function Fn(e) {
      !Vt && $e.test(e) && (Vt = !0, c("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
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
    var ge = 0, Fe = 1, Le = 2, Ie = 3, Re = 4, ct = 5, Ve = 6, qe = 7;
    function it(e, t) {
      return {
        insertionMode: e,
        selectedValue: t
      };
    }
    function rn(e, t, n) {
      switch (t) {
        case "select":
          return it(Fe, n.value != null ? n.value : n.defaultValue);
        case "svg":
          return it(Le, null);
        case "math":
          return it(Ie, null);
        case "foreignObject":
          return it(Fe, null);
        // Table parents are special in that their children can only be created at all if they're
        // wrapped in a table parent. So we need to encode that we're entering this mode.
        case "table":
          return it(Re, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return it(ct, null);
        case "colgroup":
          return it(qe, null);
        case "tr":
          return it(Ve, null);
      }
      return e.insertionMode >= Re || e.insertionMode === ge ? it(Fe, null) : e;
    }
    var Qt = null;
    function dt(e) {
      var t = e.nextSuspenseID++;
      return e.boundaryPrefix + t.toString(16);
    }
    function ft(e, t, n) {
      var o = e.idPrefix, s = ":" + o + "R" + t;
      return n > 0 && (s += "H" + n.toString(32)), s + ":";
    }
    function Kt(e) {
      return yt(e);
    }
    var qt = "<!-- -->";
    function Pn(e, t, n, o) {
      return t === "" ? o : (o && e.push(qt), e.push(Kt(t)), !0);
    }
    function Jn(e, t, n, o) {
      n && o && e.push(qt);
    }
    var on = /* @__PURE__ */ new Map();
    function vn(e) {
      var t = on.get(e);
      if (t !== void 0)
        return t;
      var n = yt(gn(e));
      return on.set(e, n), n;
    }
    var jt = ' style="', In = ":", Bn = ";";
    function Zn(e, t, n) {
      if (typeof n != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var o = !0;
      for (var s in n)
        if (H.call(n, s)) {
          var d = n[s];
          if (!(d == null || typeof d == "boolean" || d === "")) {
            var h = void 0, x = void 0, I = s.indexOf("--") === 0;
            I ? (h = yt(s), U(d, s), x = yt(("" + d).trim())) : (Ft(s, d), h = vn(s), typeof d == "number" ? d !== 0 && !H.call(bt, s) ? x = d + "px" : x = "" + d : (U(d, s), x = yt(("" + d).trim()))), o ? (o = !1, e.push(jt, h, In, x)) : e.push(Bn, h, In, x);
          }
        }
      o || e.push(Bt);
    }
    var en = " ", mn = '="', Bt = '"', Qn = '=""';
    function Pt(e, t, n, o) {
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
        var s = et(n);
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
            case Y:
              o && e.push(en, h, Qn);
              return;
            case Pe:
              o === !0 ? e.push(en, h, Qn) : o === !1 || e.push(en, h, mn, yt(o), Bt);
              return;
            case ke:
              isNaN(o) || e.push(en, h, mn, yt(o), Bt);
              break;
            case je:
              !isNaN(o) && o >= 1 && e.push(en, h, mn, yt(o), Bt);
              break;
            default:
              s.sanitizeURL && (D(o, d), o = "" + o, Fn(o)), e.push(en, h, mn, yt(o), Bt);
          }
        } else if (q(n)) {
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
          e.push(en, n, mn, yt(o), Bt);
        }
      }
    }
    var Gt = ">", a = "/>";
    function u(e, t, n) {
      if (t != null) {
        if (n != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t != "object" || !("__html" in t))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = t.__html;
        o != null && ($(o), e.push("" + o));
      }
    }
    var g = !1, S = !1, L = !1, P = !1, N = !1, Q = !1, he = !1;
    function me(e, t) {
      {
        var n = e[t];
        if (n != null) {
          var o = w(n);
          e.multiple && !o ? c("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && o && c("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t);
        }
      }
    }
    function ve(e, t, n) {
      tt("select", t), me(t, "value"), me(t, "defaultValue"), t.value !== void 0 && t.defaultValue !== void 0 && !L && (c("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), L = !0), e.push(Sn("select"));
      var o = null, s = null;
      for (var d in t)
        if (H.call(t, d)) {
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
              Pt(e, n, d, h);
              break;
          }
        }
      return e.push(Gt), u(e, s, o), o;
    }
    function Xe(e) {
      var t = "";
      return b.Children.forEach(e, function(n) {
        n != null && (t += n, !N && typeof n != "string" && typeof n != "number" && (N = !0, c("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), t;
    }
    var Ut = ' selected=""';
    function Ht(e, t, n, o) {
      var s = o.selectedValue;
      e.push(Sn("option"));
      var d = null, h = null, x = null, I = null;
      for (var G in t)
        if (H.call(t, G)) {
          var Z = t[G];
          if (Z == null)
            continue;
          switch (G) {
            case "children":
              d = Z;
              break;
            case "selected":
              x = Z, he || (c("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), he = !0);
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
              Pt(e, n, G, Z);
              break;
          }
        }
      if (s != null) {
        var le;
        if (h !== null ? (D(h, "value"), le = "" + h) : (I !== null && (Q || (Q = !0, c("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), le = Xe(d)), w(s))
          for (var we = 0; we < s.length; we++) {
            D(s[we], "value");
            var Ze = "" + s[we];
            if (Ze === le) {
              e.push(Ut);
              break;
            }
          }
        else
          D(s, "select.value"), "" + s === le && e.push(Ut);
      } else x && e.push(Ut);
      return e.push(Gt), u(e, I, d), d;
    }
    function Nt(e, t, n) {
      tt("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !S && (c("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), S = !0), t.value !== void 0 && t.defaultValue !== void 0 && !g && (c("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), g = !0), e.push(Sn("input"));
      var o = null, s = null, d = null, h = null;
      for (var x in t)
        if (H.call(t, x)) {
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
              Pt(e, n, x, I);
              break;
          }
        }
      return d !== null ? Pt(e, n, "checked", d) : h !== null && Pt(e, n, "checked", h), o !== null ? Pt(e, n, "value", o) : s !== null && Pt(e, n, "value", s), e.push(a), null;
    }
    function An(e, t, n) {
      tt("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !P && (c("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), P = !0), e.push(Sn("textarea"));
      var o = null, s = null, d = null;
      for (var h in t)
        if (H.call(t, h)) {
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
              Pt(e, n, h, x);
              break;
          }
        }
      if (o === null && s !== null && (o = s), e.push(Gt), d != null) {
        if (c("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), o != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (w(d)) {
          if (d.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          $(d[0]), o = "" + d[0];
        }
        $(d), o = "" + d;
      }
      return typeof o == "string" && o[0] === `
` && e.push(Hn), o !== null && (D(o, "value"), e.push(Kt("" + o))), null;
    }
    function yn(e, t, n, o) {
      e.push(Sn(n));
      for (var s in t)
        if (H.call(t, s)) {
          var d = t[s];
          if (d == null)
            continue;
          switch (s) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(n + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              Pt(e, o, s, d);
              break;
          }
        }
      return e.push(a), null;
    }
    function Kn(e, t, n) {
      e.push(Sn("menuitem"));
      for (var o in t)
        if (H.call(t, o)) {
          var s = t[o];
          if (s == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              Pt(e, n, o, s);
              break;
          }
        }
      return e.push(Gt), null;
    }
    function Dn(e, t, n) {
      e.push(Sn("title"));
      var o = null;
      for (var s in t)
        if (H.call(t, s)) {
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
              Pt(e, n, s, d);
              break;
          }
        }
      e.push(Gt);
      {
        var h = Array.isArray(o) && o.length < 2 ? o[0] || null : o;
        Array.isArray(o) && o.length > 1 ? c("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : h != null && h.$$typeof != null ? c("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : h != null && typeof h != "string" && typeof h != "number" && c("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return o;
    }
    function Un(e, t, n, o) {
      e.push(Sn(n));
      var s = null, d = null;
      for (var h in t)
        if (H.call(t, h)) {
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
              Pt(e, o, h, x);
              break;
          }
        }
      return e.push(Gt), u(e, d, s), typeof s == "string" ? (e.push(Kt(s)), null) : s;
    }
    function wn(e, t, n, o) {
      e.push(Sn(n));
      var s = null, d = null;
      for (var h in t)
        if (H.call(t, h)) {
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
              q(h) && typeof x != "function" && typeof x != "symbol" && e.push(en, h, mn, yt(x), Bt);
              break;
          }
        }
      return e.push(Gt), u(e, d, s), s;
    }
    var Hn = `
`;
    function Pa(e, t, n, o) {
      e.push(Sn(n));
      var s = null, d = null;
      for (var h in t)
        if (H.call(t, h)) {
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
              Pt(e, o, h, x);
              break;
          }
        }
      if (e.push(Gt), d != null) {
        if (s != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof d != "object" || !("__html" in d))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var I = d.__html;
        I != null && (typeof I == "string" && I.length > 0 && I[0] === `
` ? e.push(Hn, I) : ($(I), e.push("" + I)));
      }
      return typeof s == "string" && s[0] === `
` && e.push(Hn), s;
    }
    var Ia = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, xr = /* @__PURE__ */ new Map();
    function Sn(e) {
      var t = xr.get(e);
      if (t === void 0) {
        if (!Ia.test(e))
          throw new Error("Invalid tag: " + e);
        t = "<" + e, xr.set(e, t);
      }
      return t;
    }
    var Aa = "<!DOCTYPE html>";
    function kn(e, t, n, o, s) {
      switch (re(t, n), Te(t, n), Mt(t, n, null), !n.suppressContentEditableWarning && n.contentEditable && n.children != null && c("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), s.insertionMode !== Le && s.insertionMode !== Ie && t.indexOf("-") === -1 && typeof n.is != "string" && t.toLowerCase() !== t && c("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
        // Special tags
        case "select":
          return ve(e, n, o);
        case "option":
          return Ht(e, n, o, s);
        case "textarea":
          return An(e, n, o);
        case "input":
          return Nt(e, n, o);
        case "menuitem":
          return Kn(e, n, o);
        case "title":
          return Dn(e, n, o);
        // Newline eating tags
        case "listing":
        case "pre":
          return Pa(e, n, t, o);
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
          return yn(e, n, t, o);
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
          return s.insertionMode === ge && e.push(Aa), Un(e, n, t, o);
        default:
          return t.indexOf("-") === -1 && typeof n.is != "string" ? Un(e, n, t, o) : wn(e, n, t, o);
      }
    }
    var Xr = "</", wr = ">";
    function st(e, t, n) {
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
          e.push(Xr, t, wr);
      }
    }
    function Nn(e, t) {
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
    var Cr = "<!--$-->", On = '<!--$?--><template id="', an = '"></template>', Jr = "<!--$!-->", ir = "<!--/$-->", Po = "<template", Er = '"', Io = ' data-dgst="', Da = ' data-msg="', Ma = ' data-stck="', Tr = "></template>";
    function Ao(e, t) {
      return k(e, Cr);
    }
    function sr(e, t, n) {
      if (v(e, On), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return v(e, n), k(e, an);
    }
    function Zr(e, t, n, o, s) {
      var d;
      return d = k(e, Jr), v(e, Po), n && (v(e, Io), v(e, yt(n)), v(e, Er)), o && (v(e, Da), v(e, yt(o)), v(e, Er)), s && (v(e, Ma), v(e, yt(s)), v(e, Er)), d = k(e, Tr), d;
    }
    function Oa(e, t) {
      return k(e, ir);
    }
    function qn(e, t) {
      return k(e, ir);
    }
    function Qr(e, t) {
      return k(e, ir);
    }
    var Kr = '<div hidden id="', er = '">', lr = "</div>", Rr = '<svg aria-hidden="true" style="display:none" id="', Do = '">', Mo = "</svg>", Oo = '<math aria-hidden="true" style="display:none" id="', Fr = '">', Yt = "</math>", Lo = '<table hidden id="', _r = '">', La = "</table>", jo = '<table hidden><tbody id="', Pr = '">', Bo = "</tbody></table>", Uo = '<table hidden><tr id="', Ir = '">', Ar = "</tr></table>", Ho = '<table hidden><colgroup id="', No = '">', Wo = "</colgroup></table>";
    function qr(e, t, n, o) {
      switch (n.insertionMode) {
        case ge:
        case Fe:
          return v(e, Kr), v(e, t.segmentPrefix), v(e, o.toString(16)), k(e, er);
        case Le:
          return v(e, Rr), v(e, t.segmentPrefix), v(e, o.toString(16)), k(e, Do);
        case Ie:
          return v(e, Oo), v(e, t.segmentPrefix), v(e, o.toString(16)), k(e, Fr);
        case Re:
          return v(e, Lo), v(e, t.segmentPrefix), v(e, o.toString(16)), k(e, _r);
        // TODO: For the rest of these, there will be extra wrapper nodes that never
        // get deleted from the document. We need to delete the table too as part
        // of the injected scripts. They are invisible though so it's not too terrible
        // and it's kind of an edge case to suspend in a table. Totally supported though.
        case ct:
          return v(e, jo), v(e, t.segmentPrefix), v(e, o.toString(16)), k(e, Pr);
        case Ve:
          return v(e, Uo), v(e, t.segmentPrefix), v(e, o.toString(16)), k(e, Ir);
        case qe:
          return v(e, Ho), v(e, t.segmentPrefix), v(e, o.toString(16)), k(e, No);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function zo(e, t) {
      switch (t.insertionMode) {
        case ge:
        case Fe:
          return k(e, lr);
        case Le:
          return k(e, Mo);
        case Ie:
          return k(e, Yt);
        case Re:
          return k(e, La);
        case ct:
          return k(e, Bo);
        case Ve:
          return k(e, Ar);
        case qe:
          return k(e, Wo);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var i = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", l = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', f = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', m = i + ';$RS("', j = '$RS("', M = '","', V = '")<\/script>';
    function K(e, t, n) {
      v(e, t.startInlineScript), t.sentCompleteSegmentFunction ? v(e, j) : (t.sentCompleteSegmentFunction = !0, v(e, m)), v(e, t.segmentPrefix);
      var o = n.toString(16);
      return v(e, o), v(e, M), v(e, t.placeholderPrefix), v(e, o), k(e, V);
    }
    var ye = l + ';$RC("', Oe = '$RC("', Ae = '","', lt = '")<\/script>';
    function Xt(e, t, n, o) {
      if (v(e, t.startInlineScript), t.sentCompleteBoundaryFunction ? v(e, Oe) : (t.sentCompleteBoundaryFunction = !0, v(e, ye)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var s = o.toString(16);
      return v(e, n), v(e, Ae), v(e, t.segmentPrefix), v(e, s), k(e, lt);
    }
    var sn = f + ';$RX("', ln = '$RX("', Dr = '"', $o = ")<\/script>", ur = ",";
    function ps(e, t, n, o, s, d) {
      if (v(e, t.startInlineScript), t.sentClientRenderFunction ? v(e, ln) : (t.sentClientRenderFunction = !0, v(e, sn)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return v(e, n), v(e, Dr), (o || s || d) && (v(e, ur), v(e, ja(o || ""))), (s || d) && (v(e, ur), v(e, ja(s || ""))), d && (v(e, ur), v(e, ja(d))), k(e, $o);
    }
    var hs = /[<\u2028\u2029]/g;
    function ja(e) {
      var t = JSON.stringify(e);
      return t.replace(hs, function(n) {
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
    function gs(e, t) {
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
    function vs() {
      return {
        insertionMode: Fe,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Ci(e, t, n, o) {
      return n.generateStaticMarkup ? (e.push(yt(t)), !1) : Pn(e, t, n, o);
    }
    function Ei(e, t, n, o) {
      if (!t.generateStaticMarkup)
        return Jn(e, t, n, o);
    }
    function ms(e, t) {
      return t.generateStaticMarkup ? !0 : Ao(e);
    }
    function ys(e, t, n, o, s) {
      return t.generateStaticMarkup ? !0 : Zr(e, t, n, o, s);
    }
    function Ss(e, t) {
      return t.generateStaticMarkup ? !0 : Oa(e);
    }
    function bs(e, t) {
      return t.generateStaticMarkup ? !0 : Qr(e);
    }
    var tn = Object.assign, xs = Symbol.for("react.element"), Ti = Symbol.for("react.portal"), Vo = Symbol.for("react.fragment"), un = Symbol.for("react.strict_mode"), Ri = Symbol.for("react.profiler"), Go = Symbol.for("react.provider"), Yo = Symbol.for("react.context"), Xo = Symbol.for("react.forward_ref"), Jo = Symbol.for("react.suspense"), eo = Symbol.for("react.suspense_list"), to = Symbol.for("react.memo"), Mr = Symbol.for("react.lazy"), Ba = Symbol.for("react.scope"), Ua = Symbol.for("react.debug_trace_mode"), Ha = Symbol.for("react.legacy_hidden"), Zo = Symbol.for("react.default_value"), Fi = Symbol.iterator, ws = "@@iterator";
    function ks(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Fi && e[Fi] || e[ws];
      return typeof t == "function" ? t : null;
    }
    function Cs(e, t, n) {
      var o = e.displayName;
      if (o)
        return o;
      var s = t.displayName || t.name || "";
      return s !== "" ? n + "(" + s + ")" : n;
    }
    function Na(e) {
      return e.displayName || "Context";
    }
    function St(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Vo:
          return "Fragment";
        case Ti:
          return "Portal";
        case Ri:
          return "Profiler";
        case un:
          return "StrictMode";
        case Jo:
          return "Suspense";
        case eo:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Yo:
            var t = e;
            return Na(t) + ".Consumer";
          case Go:
            var n = e;
            return Na(n._context) + ".Provider";
          case Xo:
            return Cs(e, e.render, "ForwardRef");
          case to:
            var o = e.displayName || null;
            return o !== null ? o : St(e.type) || "Memo";
          case Mr: {
            var s = e, d = s._payload, h = s._init;
            try {
              return St(h(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var no = 0, _i, Wa, mt, Or, za, $a, Va;
    function Ga() {
    }
    Ga.__reactDisabledLog = !0;
    function Pi() {
      {
        if (no === 0) {
          _i = console.log, Wa = console.info, mt = console.warn, Or = console.error, za = console.group, $a = console.groupCollapsed, Va = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ga,
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
        no++;
      }
    }
    function Ii() {
      {
        if (no--, no === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: tn({}, e, {
              value: _i
            }),
            info: tn({}, e, {
              value: Wa
            }),
            warn: tn({}, e, {
              value: mt
            }),
            error: tn({}, e, {
              value: Or
            }),
            group: tn({}, e, {
              value: za
            }),
            groupCollapsed: tn({}, e, {
              value: $a
            }),
            groupEnd: tn({}, e, {
              value: Va
            })
          });
        }
        no < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Qo = y.ReactCurrentDispatcher, Ko;
    function ro(e, t, n) {
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
    var Ya = !1, Lr;
    {
      var Xa = typeof WeakMap == "function" ? WeakMap : Map;
      Lr = new Xa();
    }
    function cr(e, t) {
      if (!e || Ya)
        return "";
      {
        var n = Lr.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      Ya = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Qo.current, Qo.current = null, Pi();
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
        Ya = !1, Qo.current = d, Ii(), Error.prepareStackTrace = s;
      }
      var we = e ? e.displayName || e.name : "", Ze = we ? ro(we) : "";
      return typeof e == "function" && Lr.set(e, Ze), Ze;
    }
    function Ja(e, t, n) {
      return cr(e, !0);
    }
    function oo(e, t, n) {
      return cr(e, !1);
    }
    function Es(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ao(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return cr(e, Es(e));
      if (typeof e == "string")
        return ro(e);
      switch (e) {
        case Jo:
          return ro("Suspense");
        case eo:
          return ro("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Xo:
            return oo(e.render);
          case to:
            return ao(e.type, t, n);
          case Mr: {
            var o = e, s = o._payload, d = o._init;
            try {
              return ao(d(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Ai = {}, Za = y.ReactDebugCurrentFrame;
    function qo(e) {
      if (e) {
        var t = e._owner, n = ao(e.type, e._source, t ? t.type : null);
        Za.setExtraStackFrame(n);
      } else
        Za.setExtraStackFrame(null);
    }
    function ea(e, t, n, o, s) {
      {
        var d = Function.call.bind(H);
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
            x && !(x instanceof Error) && (qo(s), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, h, typeof x), qo(null)), x instanceof Error && !(x.message in Ai) && (Ai[x.message] = !0, qo(s), c("Failed %s type: %s", n, x.message), qo(null));
          }
      }
    }
    var ta;
    ta = {};
    var io = {};
    Object.freeze(io);
    function so(e, t) {
      {
        var n = e.contextTypes;
        if (!n)
          return io;
        var o = {};
        for (var s in n)
          o[s] = t[s];
        {
          var d = St(e) || "Unknown";
          ea(n, o, "context", d);
        }
        return o;
      }
    }
    function Di(e, t, n, o) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var s = St(t) || "Unknown";
            ta[s] || (ta[s] = !0, c("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return n;
        }
        var d = e.getChildContext();
        for (var h in d)
          if (!(h in o))
            throw new Error((St(t) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        {
          var x = St(t) || "Unknown";
          ea(o, d, "child context", x);
        }
        return tn({}, n, d);
      }
    }
    var dr;
    dr = {};
    var na = null, tr = null;
    function Qa(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function fr(e) {
      e.context._currentValue2 = e.value;
    }
    function ra(e, t) {
      if (e !== t) {
        Qa(e);
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
      Qa(e);
      var t = e.parent;
      t !== null && nr(t);
    }
    function oa(e) {
      var t = e.parent;
      t !== null && oa(t), fr(e);
    }
    function aa(e, t) {
      Qa(e);
      var n = e.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      n.depth === t.depth ? ra(n, t) : aa(n, t);
    }
    function lo(e, t) {
      var n = t.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === n.depth ? ra(e, n) : lo(e, n), fr(t);
    }
    function uo(e) {
      var t = tr, n = e;
      t !== n && (t === null ? oa(n) : n === null ? nr(t) : t.depth === n.depth ? ra(t, n) : t.depth > n.depth ? aa(t, n) : lo(t, n), tr = n);
    }
    function Mi(e, t) {
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
    function Oi(e) {
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
    function Li() {
      return tr;
    }
    function rr(e) {
      var t = e._currentValue2;
      return t;
    }
    function Ka(e) {
      return e._reactInternals;
    }
    function Ts(e, t) {
      e._reactInternals = t;
    }
    var ji = {}, jr = {}, co, qa, ia, sa, la, Br, fo, po, ua;
    {
      co = /* @__PURE__ */ new Set(), qa = /* @__PURE__ */ new Set(), ia = /* @__PURE__ */ new Set(), fo = /* @__PURE__ */ new Set(), sa = /* @__PURE__ */ new Set(), po = /* @__PURE__ */ new Set(), ua = /* @__PURE__ */ new Set();
      var ho = /* @__PURE__ */ new Set();
      Br = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var n = t + "_" + e;
          ho.has(n) || (ho.add(n), c("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, la = function(e, t) {
        if (t === void 0) {
          var n = St(e) || "Component";
          sa.has(n) || (sa.add(n), c("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
        }
      };
    }
    function ca(e, t) {
      {
        var n = e.constructor, o = n && St(n) || "ReactClass", s = o + "." + t;
        if (ji[s])
          return;
        c(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), ji[s] = !0;
      }
    }
    var da = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, t, n) {
        var o = Ka(e);
        o.queue === null ? ca(e, "setState") : (o.queue.push(t), n != null && Br(n, "setState"));
      },
      enqueueReplaceState: function(e, t, n) {
        var o = Ka(e);
        o.replace = !0, o.queue = [t], n != null && Br(n, "setState");
      },
      enqueueForceUpdate: function(e, t) {
        var n = Ka(e);
        n.queue === null ? ca(e, "forceUpdate") : t != null && Br(t, "setState");
      }
    };
    function ei(e, t, n, o, s) {
      var d = n(s, o);
      la(t, d);
      var h = d == null ? o : tn({}, o, d);
      return h;
    }
    function Bi(e, t, n) {
      var o = io, s = e.contextType;
      if ("contextType" in e) {
        var d = (
          // Allow null for conditional declaration
          s === null || s !== void 0 && s.$$typeof === Yo && s._context === void 0
        );
        if (!d && !ua.has(e)) {
          ua.add(e);
          var h = "";
          s === void 0 ? h = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? h = " However, it is set to a " + typeof s + "." : s.$$typeof === Go ? h = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? h = " Did you accidentally pass the Context.Consumer instead?" : h = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", c("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", St(e) || "Component", h);
        }
      }
      typeof s == "object" && s !== null ? o = rr(s) : o = n;
      var x = new e(t, o);
      {
        if (typeof e.getDerivedStateFromProps == "function" && (x.state === null || x.state === void 0)) {
          var I = St(e) || "Component";
          co.has(I) || (co.add(I), c("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", I, x.state === null ? "null" : "undefined", I));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof x.getSnapshotBeforeUpdate == "function") {
          var G = null, Z = null, le = null;
          if (typeof x.componentWillMount == "function" && x.componentWillMount.__suppressDeprecationWarning !== !0 ? G = "componentWillMount" : typeof x.UNSAFE_componentWillMount == "function" && (G = "UNSAFE_componentWillMount"), typeof x.componentWillReceiveProps == "function" && x.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Z = "componentWillReceiveProps" : typeof x.UNSAFE_componentWillReceiveProps == "function" && (Z = "UNSAFE_componentWillReceiveProps"), typeof x.componentWillUpdate == "function" && x.componentWillUpdate.__suppressDeprecationWarning !== !0 ? le = "componentWillUpdate" : typeof x.UNSAFE_componentWillUpdate == "function" && (le = "UNSAFE_componentWillUpdate"), G !== null || Z !== null || le !== null) {
            var we = St(e) || "Component", Ze = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            ia.has(we) || (ia.add(we), c(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, we, Ze, G !== null ? `
  ` + G : "", Z !== null ? `
  ` + Z : "", le !== null ? `
  ` + le : ""));
          }
        }
      }
      return x;
    }
    function Ui(e, t, n) {
      {
        var o = St(t) || "Component", s = e.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? c("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : c("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && c("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && c("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), e.propTypes && c("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), e.contextType && c("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), e.contextTypes && c("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !po.has(t) && (po.add(t), c("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof e.componentShouldUpdate == "function" && c("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && c("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", St(t) || "A pure component"), typeof e.componentDidUnmount == "function" && c("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof e.componentDidReceiveProps == "function" && c("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof e.componentWillRecieveProps == "function" && c("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof e.UNSAFE_componentWillRecieveProps == "function" && c("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var d = e.props !== n;
        e.props !== void 0 && d && c("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), e.defaultProps && c("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !qa.has(t) && (qa.add(t), c("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", St(t))), typeof e.getDerivedStateFromProps == "function" && c("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof e.getDerivedStateFromError == "function" && c("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && c("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var h = e.state;
        h && (typeof h != "object" || w(h)) && c("%s.state: must be set to an object or null", o), typeof e.getChildContext == "function" && typeof t.childContextTypes != "object" && c("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function Hi(e, t) {
      var n = t.state;
      if (typeof t.componentWillMount == "function") {
        if (t.componentWillMount.__suppressDeprecationWarning !== !0) {
          var o = St(e) || "Unknown";
          jr[o] || (C(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            o
          ), jr[o] = !0);
        }
        t.componentWillMount();
      }
      typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (c("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", St(e) || "Component"), da.enqueueReplaceState(t, t.state, null));
    }
    function Rs(e, t, n, o) {
      if (e.queue !== null && e.queue.length > 0) {
        var s = e.queue, d = e.replace;
        if (e.queue = null, e.replace = !1, d && s.length === 1)
          t.state = s[0];
        else {
          for (var h = d ? s[0] : t.state, x = !0, I = d ? 1 : 0; I < s.length; I++) {
            var G = s[I], Z = typeof G == "function" ? G.call(t, h, n, o) : G;
            Z != null && (x ? (x = !1, h = tn({}, h, Z)) : tn(h, Z));
          }
          t.state = h;
        }
      } else
        e.queue = null;
    }
    function Ni(e, t, n, o) {
      Ui(e, t, n);
      var s = e.state !== void 0 ? e.state : null;
      e.updater = da, e.props = n, e.state = s;
      var d = {
        queue: [],
        replace: !1
      };
      Ts(e, d);
      var h = t.contextType;
      if (typeof h == "object" && h !== null ? e.context = rr(h) : e.context = o, e.state === n) {
        var x = St(t) || "Component";
        fo.has(x) || (fo.add(x), c("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", x));
      }
      var I = t.getDerivedStateFromProps;
      typeof I == "function" && (e.state = ei(e, t, I, s, n)), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (Hi(t, e), Rs(d, e, n, o));
    }
    var Fs = {
      id: 1,
      overflow: ""
    };
    function _s(e) {
      var t = e.overflow, n = e.id, o = n & ~Ps(n);
      return o.toString(32) + t;
    }
    function ti(e, t, n) {
      var o = e.id, s = e.overflow, d = go(o) - 1, h = o & ~(1 << d), x = n + 1, I = go(t) + d;
      if (I > 30) {
        var G = d - d % 5, Z = (1 << G) - 1, le = (h & Z).toString(32), we = h >> G, Ze = d - G, Ot = go(t) + Ze, Sr = x << Ze, br = Sr | we, Yn = le + s;
        return {
          id: 1 << Ot | br,
          overflow: Yn
        };
      } else {
        var Vr = x << d, ll = Vr | h, Xl = s;
        return {
          id: 1 << I | ll,
          overflow: Xl
        };
      }
    }
    function go(e) {
      return 32 - Is(e);
    }
    function Ps(e) {
      return 1 << go(e) - 1;
    }
    var Is = Math.clz32 ? Math.clz32 : As, ni = Math.log, fa = Math.LN2;
    function As(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ni(t) / fa | 0) | 0;
    }
    function Ds(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ms = typeof Object.is == "function" ? Object.is : Ds, zn = null, ri = null, pa = null, pt = null, cn = !1, Ur = !1, pr = 0, Je = null, or = 0, ha = 25, dn = !1, fn;
    function Ln() {
      if (zn === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return dn && c("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), zn;
    }
    function Os(e, t) {
      if (t === null)
        return c("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", fn), !1;
      e.length !== t.length && c(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, fn, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ms(e[n], t[n]))
          return !1;
      return !0;
    }
    function Cn() {
      if (or > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function ar() {
      return pt === null ? pa === null ? (cn = !1, pa = pt = Cn()) : (cn = !0, pt = pa) : pt.next === null ? (cn = !1, pt = pt.next = Cn()) : (cn = !0, pt = pt.next), pt;
    }
    function hr(e, t) {
      zn = t, ri = e, dn = !1, pr = 0;
    }
    function Ls(e, t, n, o) {
      for (; Ur; )
        Ur = !1, pr = 0, or += 1, pt = null, n = e(t, o);
      return vo(), n;
    }
    function oi() {
      var e = pr !== 0;
      return e;
    }
    function vo() {
      dn = !1, zn = null, ri = null, Ur = !1, pa = null, or = 0, Je = null, pt = null;
    }
    function js(e) {
      return dn && c("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), rr(e);
    }
    function Bs(e) {
      return fn = "useContext", Ln(), rr(e);
    }
    function ga(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function ai(e) {
      return fn = "useState", Wi(
        ga,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function Wi(e, t, n) {
      if (e !== ga && (fn = "useReducer"), zn = Ln(), pt = ar(), cn) {
        var o = pt.queue, s = o.dispatch;
        if (Je !== null) {
          var d = Je.get(o);
          if (d !== void 0) {
            Je.delete(o);
            var h = pt.memoizedState, x = d;
            do {
              var I = x.action;
              dn = !0, h = e(h, I), dn = !1, x = x.next;
            } while (x !== null);
            return pt.memoizedState = h, [h, s];
          }
        }
        return [pt.memoizedState, s];
      } else {
        dn = !0;
        var G;
        e === ga ? G = typeof t == "function" ? t() : t : G = n !== void 0 ? n(t) : t, dn = !1, pt.memoizedState = G;
        var Z = pt.queue = {
          last: null,
          dispatch: null
        }, le = Z.dispatch = $i.bind(null, zn, Z);
        return [pt.memoizedState, le];
      }
    }
    function zi(e, t) {
      zn = Ln(), pt = ar();
      var n = t === void 0 ? null : t;
      if (pt !== null) {
        var o = pt.memoizedState;
        if (o !== null && n !== null) {
          var s = o[1];
          if (Os(n, s))
            return o[0];
        }
      }
      dn = !0;
      var d = e();
      return dn = !1, pt.memoizedState = [d, n], d;
    }
    function ii(e) {
      zn = Ln(), pt = ar();
      var t = pt.memoizedState;
      if (t === null) {
        var n = {
          current: e
        };
        return Object.seal(n), pt.memoizedState = n, n;
      } else
        return t;
    }
    function Us(e, t) {
      fn = "useLayoutEffect", c("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function $i(e, t, n) {
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
    function Vi(e, t) {
      return zi(function() {
        return e;
      }, t);
    }
    function Hs(e, t, n) {
      return Ln(), t(e._source);
    }
    function Ns(e, t, n) {
      if (n === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return n();
    }
    function Ws(e) {
      return Ln(), e;
    }
    function zs() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function $s() {
      return Ln(), [!1, zs];
    }
    function Vs() {
      var e = ri, t = _s(e.treeContext), n = si;
      if (n === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var o = pr++;
      return ft(n, t, o);
    }
    function va() {
    }
    var Gi = {
      readContext: js,
      useContext: Bs,
      useMemo: zi,
      useReducer: Wi,
      useRef: ii,
      useState: ai,
      useInsertionEffect: va,
      useLayoutEffect: Us,
      useCallback: Vi,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: va,
      // Effects are not run in the server environment.
      useEffect: va,
      // Debugging effect
      useDebugValue: va,
      useDeferredValue: Ws,
      useTransition: $s,
      useId: Vs,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Hs,
      useSyncExternalStore: Ns
    }, si = null;
    function Yi(e) {
      si = e;
    }
    function ma(e) {
      try {
        var t = "", n = e;
        do {
          switch (n.tag) {
            case 0:
              t += ro(n.type, null, null);
              break;
            case 1:
              t += oo(n.type, null, null);
              break;
            case 2:
              t += Ja(n.type, null, null);
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
    var ya = y.ReactCurrentDispatcher, mo = y.ReactDebugCurrentFrame, Sa = 0, Hr = 1, ba = 2, xa = 3, wa = 4, Nr = 0, li = 1, gr = 2, Xi = 12800;
    function Gs(e) {
      return console.error(e), null;
    }
    function Wr() {
    }
    function zr(e, t, n, o, s, d, h, x, I) {
      var G = [], Z = /* @__PURE__ */ new Set(), le = {
        destination: null,
        responseState: t,
        progressiveChunkSize: o === void 0 ? Xi : o,
        status: Nr,
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
        onError: s === void 0 ? Gs : s,
        onAllReady: Wr,
        onShellReady: h === void 0 ? Wr : h,
        onShellError: Wr,
        onFatalError: Wr
      }, we = ka(
        le,
        0,
        null,
        n,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      we.parentFlushed = !0;
      var Ze = vr(le, e, null, we, Z, io, na, Fs);
      return G.push(Ze), le;
    }
    function Ys(e, t) {
      var n = e.pingedTasks;
      n.push(t), n.length === 1 && _(function() {
        return yi(e);
      });
    }
    function Xs(e, t) {
      return {
        id: Qt,
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
          return Ys(e, I);
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
    function ui() {
      return $n === null || $n.componentStack === null ? "" : ma($n.componentStack);
    }
    function mr(e, t) {
      e.componentStack = {
        tag: 0,
        parent: e.componentStack,
        type: t
      };
    }
    function yo(e, t) {
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
        var o = Gn || ui();
        Gn = null, e.errorMessage = n, e.errorComponentStack = o;
      }
    }
    function So(e, t) {
      var n = e.onError(t);
      if (n != null && typeof n != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
      return n;
    }
    function En(e, t) {
      var n = e.onShellError;
      n(t);
      var o = e.onFatalError;
      o(t), e.destination !== null ? (e.status = gr, ae(e.destination, t)) : (e.status = li, e.fatalError = t);
    }
    function bo(e, t, n) {
      mr(t, "Suspense");
      var o = t.blockedBoundary, s = t.blockedSegment, d = n.fallback, h = n.children, x = /* @__PURE__ */ new Set(), I = Xs(e, x), G = s.chunks.length, Z = ka(
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
        if (Jt(e, t, h), Ei(le.chunks, e.responseState, le.lastPushedText, le.textEmbedded), le.status = Hr, $r(I, le), I.pendingTasks === 0) {
          jn(t);
          return;
        }
      } catch (Ze) {
        le.status = wa, I.forceClientRender = !0, I.errorDigest = So(e, Ze), Ca(I, Ze);
      } finally {
        t.blockedBoundary = o, t.blockedSegment = s;
      }
      var we = vr(e, d, o, Z, x, t.legacyContext, t.context, t.treeContext);
      we.componentStack = t.componentStack, e.pingedTasks.push(we), jn(t);
    }
    function ci(e, t, n, o) {
      mr(t, n);
      var s = t.blockedSegment, d = kn(s.chunks, n, o, e.responseState, s.formatContext);
      s.lastPushedText = !1;
      var h = s.formatContext;
      s.formatContext = rn(h, n, o), Jt(e, t, d), s.formatContext = h, st(s.chunks, n), s.lastPushedText = !1, jn(t);
    }
    function xo(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function wo(e, t, n, o, s) {
      var d = {};
      hr(t, d);
      var h = n(o, s);
      return Ls(n, o, h, s);
    }
    function Ji(e, t, n, o, s) {
      var d = n.render();
      n.props !== s && (fi || c("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", St(o) || "a component"), fi = !0);
      {
        var h = o.childContextTypes;
        if (h != null) {
          var x = t.legacyContext, I = Di(n, o, x, h);
          t.legacyContext = I, pn(e, t, d), t.legacyContext = x;
          return;
        }
      }
      pn(e, t, d);
    }
    function Js(e, t, n, o) {
      Vn(t, n);
      var s = so(n, t.legacyContext), d = Bi(n, o, s);
      Ni(d, n, o, s), Ji(e, t, d, n, o), jn(t);
    }
    var Zi = {}, ko = {}, di = {}, Qi = {}, fi = !1, Co = {}, pi = !1, hi = !1, gi = !1;
    function Ki(e, t, n, o) {
      var s;
      if (s = so(n, t.legacyContext), yo(t, n), n.prototype && typeof n.prototype.render == "function") {
        var d = St(n) || "Unknown";
        Zi[d] || (c("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", d, d), Zi[d] = !0);
      }
      var h = wo(e, t, n, o, s), x = oi();
      if (typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0) {
        var I = St(n) || "Unknown";
        ko[I] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", I, I, I), ko[I] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0
      ) {
        {
          var G = St(n) || "Unknown";
          ko[G] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", G, G, G), ko[G] = !0);
        }
        Ni(h, n, o, s), Ji(e, t, h, n, o);
      } else if (qi(n), x) {
        var Z = t.treeContext, le = 1, we = 0;
        t.treeContext = ti(Z, le, we);
        try {
          pn(e, t, h);
        } finally {
          t.treeContext = Z;
        }
      } else
        pn(e, t, h);
      jn(t);
    }
    function qi(e) {
      {
        if (e && e.childContextTypes && c("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), e.defaultProps !== void 0) {
          var t = St(e) || "Unknown";
          Co[t] || (c("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", t), Co[t] = !0);
        }
        if (typeof e.getDerivedStateFromProps == "function") {
          var n = St(e) || "Unknown";
          Qi[n] || (c("%s: Function components do not support getDerivedStateFromProps.", n), Qi[n] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var o = St(e) || "Unknown";
          di[o] || (c("%s: Function components do not support contextType.", o), di[o] = !0);
        }
      }
    }
    function vi(e, t) {
      if (e && e.defaultProps) {
        var n = tn({}, t), o = e.defaultProps;
        for (var s in o)
          n[s] === void 0 && (n[s] = o[s]);
        return n;
      }
      return t;
    }
    function es(e, t, n, o, s) {
      yo(t, n.render);
      var d = wo(e, t, n.render, o, s), h = oi();
      if (h) {
        var x = t.treeContext, I = 1, G = 0;
        t.treeContext = ti(x, I, G);
        try {
          pn(e, t, d);
        } finally {
          t.treeContext = x;
        }
      } else
        pn(e, t, d);
      jn(t);
    }
    function Zs(e, t, n, o, s) {
      var d = n.type, h = vi(d, o);
      mi(e, t, d, h, s);
    }
    function Qs(e, t, n, o) {
      n._context === void 0 ? n !== n.Consumer && (gi || (gi = !0, c("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : n = n._context;
      var s = o.children;
      typeof s != "function" && c("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var d = rr(n), h = s(d);
      pn(e, t, h);
    }
    function ts(e, t, n, o) {
      var s = n._context, d = o.value, h = o.children, x;
      x = t.context, t.context = Mi(s, d), pn(e, t, h), t.context = Oi(s), x !== t.context && c("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Ks(e, t, n, o, s) {
      mr(t, "Lazy");
      var d = n._payload, h = n._init, x = h(d), I = vi(x, o);
      mi(e, t, x, I, s), jn(t);
    }
    function mi(e, t, n, o, s) {
      if (typeof n == "function")
        if (xo(n)) {
          Js(e, t, n, o);
          return;
        } else {
          Ki(e, t, n, o);
          return;
        }
      if (typeof n == "string") {
        ci(e, t, n, o);
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
        case Ua:
        case un:
        case Ri:
        case Vo: {
          pn(e, t, o.children);
          return;
        }
        case eo: {
          mr(t, "SuspenseList"), pn(e, t, o.children), jn(t);
          return;
        }
        case Ba:
          throw new Error("ReactDOMServer does not yet support scope components.");
        // eslint-disable-next-line-no-fallthrough
        case Jo: {
          bo(e, t, o);
          return;
        }
      }
      if (typeof n == "object" && n !== null)
        switch (n.$$typeof) {
          case Xo: {
            es(e, t, n, o, s);
            return;
          }
          case to: {
            Zs(e, t, n, o, s);
            return;
          }
          case Go: {
            ts(e, t, n, o);
            return;
          }
          case Yo: {
            Qs(e, t, n, o);
            return;
          }
          case Mr: {
            Ks(e, t, n, o);
            return;
          }
        }
      var d = "";
      throw (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (n == null ? n : typeof n) + "." + d));
    }
    function qs(e, t) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (pi || c("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), pi = !0), e.entries === t && (hi || c("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), hi = !0);
    }
    function pn(e, t, n) {
      try {
        return el(e, t, n);
      } catch (o) {
        throw typeof o == "object" && o !== null && typeof o.then == "function" || (Gn = Gn !== null ? Gn : ui()), o;
      }
    }
    function el(e, t, n) {
      if (t.node = n, typeof n == "object" && n !== null) {
        switch (n.$$typeof) {
          case xs: {
            var o = n, s = o.type, d = o.props, h = o.ref;
            mi(e, t, s, d, h);
            return;
          }
          case Ti:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          // eslint-disable-next-line-no-fallthrough
          case Mr: {
            var x = n, I = x._payload, G = x._init, Z;
            try {
              Z = G(I);
            } catch (Vr) {
              throw typeof Vr == "object" && Vr !== null && typeof Vr.then == "function" && mr(t, "Lazy"), Vr;
            }
            pn(e, t, Z);
            return;
          }
        }
        if (w(n)) {
          Ea(e, t, n);
          return;
        }
        var le = ks(n);
        if (le) {
          qs(n, le);
          var we = le.call(n);
          if (we) {
            var Ze = we.next();
            if (!Ze.done) {
              var Ot = [];
              do
                Ot.push(Ze.value), Ze = we.next();
              while (!Ze.done);
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
        br.lastPushedText = Ci(t.blockedSegment.chunks, n, e.responseState, br.lastPushedText);
        return;
      }
      if (typeof n == "number") {
        var Yn = t.blockedSegment;
        Yn.lastPushedText = Ci(t.blockedSegment.chunks, "" + n, e.responseState, Yn.lastPushedText);
        return;
      }
      typeof n == "function" && c("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function Ea(e, t, n) {
      for (var o = n.length, s = 0; s < o; s++) {
        var d = t.treeContext;
        t.treeContext = ti(d, o, s);
        try {
          Jt(e, t, n[s]);
        } finally {
          t.treeContext = d;
        }
      }
    }
    function tl(e, t, n) {
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
    function Jt(e, t, n) {
      var o = t.blockedSegment.formatContext, s = t.legacyContext, d = t.context, h = null;
      h = t.componentStack;
      try {
        return pn(e, t, n);
      } catch (x) {
        if (vo(), typeof x == "object" && x !== null && typeof x.then == "function") {
          tl(e, t, x), t.blockedSegment.formatContext = o, t.legacyContext = s, t.context = d, uo(d), t.componentStack = h;
          return;
        } else
          throw t.blockedSegment.formatContext = o, t.legacyContext = s, t.context = d, uo(d), t.componentStack = h, x;
      }
    }
    function nl(e, t, n, o) {
      var s = So(e, o);
      if (t === null ? En(e, o) : (t.pendingTasks--, t.forceClientRender || (t.forceClientRender = !0, t.errorDigest = s, Ca(t, o), t.parentFlushed && e.clientRenderedBoundaries.push(t))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var d = e.onAllReady;
        d();
      }
    }
    function ns(e) {
      var t = this, n = e.blockedBoundary, o = e.blockedSegment;
      o.status = xa, os(t, n, o);
    }
    function rs(e, t, n) {
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
          return rs(G, t, n);
        }), o.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0) {
          var I = t.onAllReady;
          I();
        }
      }
    }
    function $r(e, t) {
      if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
        var n = t.children[0];
        n.id = t.id, n.parentFlushed = !0, n.status === Hr && $r(e, n);
      } else {
        var o = e.completedSegments;
        o.push(t);
      }
    }
    function os(e, t, n) {
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
          n.parentFlushed && n.status === Hr && $r(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(ns, e), t.fallbackAbortableTasks.clear();
        else if (n.parentFlushed && n.status === Hr) {
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
    function rl(e, t) {
      var n = t.blockedSegment;
      if (n.status === Sa) {
        uo(t.context);
        var o = null;
        o = $n, $n = t;
        try {
          pn(e, t, t.node), Ei(n.chunks, e.responseState, n.lastPushedText, n.textEmbedded), t.abortSet.delete(t), n.status = Hr, os(e, t.blockedBoundary, n);
        } catch (d) {
          if (vo(), typeof d == "object" && d !== null && typeof d.then == "function") {
            var s = t.ping;
            d.then(s, s);
          } else
            t.abortSet.delete(t), n.status = wa, nl(e, t.blockedBoundary, n, d);
        } finally {
          $n = o;
        }
      }
    }
    function yi(e) {
      if (e.status !== gr) {
        var t = Li(), n = ya.current;
        ya.current = Gi;
        var o;
        o = mo.getCurrentStack, mo.getCurrentStack = ui;
        var s = si;
        Yi(e.responseState);
        try {
          var d = e.pingedTasks, h;
          for (h = 0; h < d.length; h++) {
            var x = d[h];
            rl(e, x);
          }
          d.splice(0, h), e.destination !== null && Ra(e, e.destination);
        } catch (I) {
          So(e, I), En(e, I);
        } finally {
          Yi(s), ya.current = n, mo.getCurrentStack = o, n === Gi && uo(t);
        }
      }
    }
    function yr(e, t, n) {
      switch (n.parentFlushed = !0, n.status) {
        case Sa: {
          var o = n.id = e.nextSegmentId++;
          return n.lastPushedText = !1, n.textEmbedded = !1, Mn(t, e.responseState, o);
        }
        case Hr: {
          n.status = ba;
          for (var s = !0, d = n.chunks, h = 0, x = n.children, I = 0; I < x.length; I++) {
            for (var G = x[I]; h < G.index; h++)
              v(t, d[h]);
            s = Eo(e, t, G);
          }
          for (; h < d.length - 1; h++)
            v(t, d[h]);
          return h < d.length && (s = k(t, d[h])), s;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Eo(e, t, n) {
      var o = n.boundary;
      if (o === null)
        return yr(e, t, n);
      if (o.parentFlushed = !0, o.forceClientRender)
        return ys(t, e.responseState, o.errorDigest, o.errorMessage, o.errorComponentStack), yr(e, t, n), bs(t, e.responseState);
      if (o.pendingTasks > 0) {
        o.rootSegmentID = e.nextSegmentId++, o.completedSegments.length > 0 && e.partialBoundaries.push(o);
        var s = o.id = dt(e.responseState);
        return sr(t, e.responseState, s), yr(e, t, n), qn(t, e.responseState);
      } else {
        if (o.byteSize > e.progressiveChunkSize)
          return o.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(o), sr(t, e.responseState, o.id), yr(e, t, n), qn(t, e.responseState);
        ms(t, e.responseState);
        var d = o.completedSegments;
        if (d.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var h = d[0];
        return Eo(e, t, h), Ss(t, e.responseState);
      }
    }
    function ol(e, t, n) {
      return ps(t, e.responseState, n.id, n.errorDigest, n.errorMessage, n.errorComponentStack);
    }
    function Si(e, t, n) {
      return qr(t, e.responseState, n.formatContext, n.id), Eo(e, t, n), zo(t, n.formatContext);
    }
    function To(e, t, n) {
      for (var o = n.completedSegments, s = 0; s < o.length; s++) {
        var d = o[s];
        as(e, t, n, d);
      }
      return o.length = 0, Xt(t, e.responseState, n.id, n.rootSegmentID);
    }
    function Ta(e, t, n) {
      for (var o = n.completedSegments, s = 0; s < o.length; s++) {
        var d = o[s];
        if (!as(e, t, n, d))
          return s++, o.splice(0, s), !1;
      }
      return o.splice(0, s), !0;
    }
    function as(e, t, n, o) {
      if (o.status === ba)
        return !0;
      var s = o.id;
      if (s === -1) {
        var d = o.id = n.rootSegmentID;
        if (d === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Si(e, t, o);
      } else
        return Si(e, t, o), K(t, e.responseState, s);
    }
    function Ra(e, t) {
      try {
        var n = e.completedRootSegment;
        n !== null && e.pendingRootTasks === 0 && (Eo(e, t, n), e.completedRootSegment = null, Nn(t, e.responseState));
        var o = e.clientRenderedBoundaries, s;
        for (s = 0; s < o.length; s++) {
          var d = o[s];
          if (!ol(e, t, d)) {
            e.destination = null, s++, o.splice(0, s);
            return;
          }
        }
        o.splice(0, s);
        var h = e.completedBoundaries;
        for (s = 0; s < h.length; s++) {
          var x = h[s];
          if (!To(e, t, x)) {
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
          if (!To(e, t, le)) {
            e.destination = null, s++, Z.splice(0, s);
            return;
          }
        }
        Z.splice(0, s);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && c("There was still abortable task at the root when we closed. This is a bug in React."), R(t));
      }
    }
    function is(e) {
      _(function() {
        return yi(e);
      });
    }
    function al(e, t) {
      if (e.status === li) {
        e.status = gr, ae(t, e.fatalError);
        return;
      }
      if (e.status !== gr && e.destination === null) {
        e.destination = t;
        try {
          Ra(e, t);
        } catch (n) {
          So(e, n), En(e, n);
        }
      }
    }
    function ss(e, t) {
      try {
        var n = e.abortableTasks;
        n.forEach(function(o) {
          return rs(o, e, t);
        }), n.clear(), e.destination !== null && Ra(e, e.destination);
      } catch (o) {
        So(e, o), En(e, o);
      }
    }
    function bi() {
    }
    function ls(e, t, n, o) {
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
      var Z = zr(e, gs(n, t ? t.identifierPrefix : void 0), vs(), 1 / 0, bi, void 0, G);
      if (is(Z), ss(Z, o), al(Z, x), s)
        throw d;
      if (!I)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return h;
    }
    function il(e, t) {
      return ls(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function us(e, t) {
      return ls(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function sl() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function r() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Fo.renderToNodeStream = sl, Fo.renderToStaticMarkup = us, Fo.renderToStaticNodeStream = r, Fo.renderToString = il, Fo.version = p;
  }()), Fo;
}
var fs = {};
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
function ou() {
  return Tl || (Tl = 1, process.env.NODE_ENV !== "production" && function() {
    var b = Wt, p = "18.3.1", y = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(r) {
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
    function W(r) {
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
    function B(r, e) {
      return R(r, e), !0;
    }
    function ce(r) {
      v && k > 0 && (r.enqueue(new Uint8Array(v.buffer, 0, k)), v = null, k = 0);
    }
    function ae(r) {
      r.close();
    }
    var ne = new TextEncoder();
    function z(r) {
      return ne.encode(r);
    }
    function A(r) {
      return ne.encode(r);
    }
    function D(r, e) {
      typeof r.error == "function" ? r.error(e) : r.close();
    }
    function U(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function $(r) {
      try {
        return H(r), !1;
      } catch {
        return !0;
      }
    }
    function H(r) {
      return "" + r;
    }
    function O(r, e) {
      if ($(r))
        return c("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", e, U(r)), H(r);
    }
    function X(r, e) {
      if ($(r))
        return c("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", e, U(r)), H(r);
    }
    function ie(r) {
      if ($(r))
        return c("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", U(r)), H(r);
    }
    var Y = Object.prototype.hasOwnProperty, Pe = 0, ke = 1, je = 2, oe = 3, de = 4, De = 5, Se = 6, He = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", q = He + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ce = new RegExp("^[" + He + "][" + q + "]*$"), et = {}, Be = {};
    function xe(r) {
      return Y.call(Be, r) ? !0 : Y.call(et, r) ? !1 : Ce.test(r) ? (Be[r] = !0, !0) : (et[r] = !0, c("Invalid attribute name: `%s`", r), !1);
    }
    function It(r, e, t, n) {
      if (t !== null && t.type === Pe)
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
    function at(r) {
      return Ee.hasOwnProperty(r) ? Ee[r] : null;
    }
    function Ne(r, e, t, n, o, s, d) {
      this.acceptsBooleans = e === je || e === oe || e === de, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = t, this.propertyName = r, this.type = e, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var Ee = {}, bt = [
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
    bt.forEach(function(r) {
      Ee[r] = new Ne(
        r,
        Pe,
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
      Ee[e] = new Ne(
        e,
        ke,
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
      Ee[r] = new Ne(
        r,
        je,
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
      Ee[r] = new Ne(
        r,
        je,
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
      Ee[r] = new Ne(
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
      Ee[r] = new Ne(
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
      Ee[r] = new Ne(
        r,
        de,
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
      Ee[r] = new Ne(
        r,
        Se,
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
      Ee[r] = new Ne(
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
    var Ge = /[\-\:]([a-z])/g, ut = function(r) {
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
      var e = r.replace(Ge, ut);
      Ee[e] = new Ne(
        e,
        ke,
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
      var e = r.replace(Ge, ut);
      Ee[e] = new Ne(
        e,
        ke,
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
      var e = r.replace(Ge, ut);
      Ee[e] = new Ne(
        e,
        ke,
        !1,
        // mustUseProperty
        r,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(r) {
      Ee[r] = new Ne(
        r,
        ke,
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
    var ht = "xlinkHref";
    Ee[ht] = new Ne(
      "xlinkHref",
      ke,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(r) {
      Ee[r] = new Ne(
        r,
        ke,
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
    var tt = {
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
    function Et(r, e) {
      return r + e.charAt(0).toUpperCase() + e.substring(1);
    }
    var Qe = ["Webkit", "ms", "Moz", "O"];
    Object.keys(tt).forEach(function(r) {
      Qe.forEach(function(e) {
        tt[Et(e, r)] = tt[r];
      });
    });
    var gt = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function At(r, e) {
      gt[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || c("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), e.onChange || e.readOnly || e.disabled || e.checked == null || c("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ue(r, e) {
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
    var fe = {
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
    }, ee = {}, re = new RegExp("^(aria)-[" + q + "]*$"), pe = new RegExp("^(aria)[A-Z][" + q + "]*$");
    function Te(r, e) {
      {
        if (Y.call(ee, e) && ee[e])
          return !0;
        if (pe.test(e)) {
          var t = "aria-" + e.slice(4).toLowerCase(), n = fe.hasOwnProperty(t) ? t : null;
          if (n == null)
            return c("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", e), ee[e] = !0, !0;
          if (e !== n)
            return c("Invalid ARIA attribute `%s`. Did you mean `%s`?", e, n), ee[e] = !0, !0;
        }
        if (re.test(e)) {
          var o = e.toLowerCase(), s = fe.hasOwnProperty(o) ? o : null;
          if (s == null)
            return ee[e] = !0, !1;
          if (e !== s)
            return c("Unknown ARIA attribute `%s`. Did you mean `%s`?", e, s), ee[e] = !0, !0;
        }
      }
      return !0;
    }
    function Ye(r, e) {
      {
        var t = [];
        for (var n in e) {
          var o = Te(r, n);
          o || t.push(n);
        }
        var s = t.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        t.length === 1 ? c("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, r) : t.length > 1 && c("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, r);
      }
    }
    function ze(r, e) {
      ue(r, e) || Ye(r, e);
    }
    var nt = !1;
    function xt(r, e) {
      {
        if (r !== "input" && r !== "textarea" && r !== "select")
          return;
        e != null && e.value === null && !nt && (nt = !0, r === "select" && e.multiple ? c("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", r) : c("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", r));
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
      var rt = {}, wt = /^on./, Mt = /^on[^A-Z]/, Rn = new RegExp("^(aria)-[" + q + "]*$"), xn = new RegExp("^(aria)[A-Z][" + q + "]*$");
      Lt = function(r, e, t, n) {
        if (Y.call(rt, e) && rt[e])
          return !0;
        var o = e.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return c("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), rt[e] = !0, !0;
        if (n != null) {
          var s = n.registrationNameDependencies, d = n.possibleRegistrationNames;
          if (s.hasOwnProperty(e))
            return !0;
          var h = d.hasOwnProperty(o) ? d[o] : null;
          if (h != null)
            return c("Invalid event handler property `%s`. Did you mean `%s`?", e, h), rt[e] = !0, !0;
          if (wt.test(e))
            return c("Unknown event handler property `%s`. It will be ignored.", e), rt[e] = !0, !0;
        } else if (wt.test(e))
          return Mt.test(e) && c("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", e), rt[e] = !0, !0;
        if (Rn.test(e) || xn.test(e))
          return !0;
        if (o === "innerhtml")
          return c("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), rt[e] = !0, !0;
        if (o === "aria")
          return c("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), rt[e] = !0, !0;
        if (o === "is" && t !== null && t !== void 0 && typeof t != "string")
          return c("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof t), rt[e] = !0, !0;
        if (typeof t == "number" && isNaN(t))
          return c("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", e), rt[e] = !0, !0;
        var x = at(e), I = x !== null && x.type === Pe;
        if (Dt.hasOwnProperty(o)) {
          var G = Dt[o];
          if (G !== e)
            return c("Invalid DOM property `%s`. Did you mean `%s`?", e, G), rt[e] = !0, !0;
        } else if (!I && e !== o)
          return c("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", e, o), rt[e] = !0, !0;
        return typeof t == "boolean" && It(e, t, x) ? (t ? c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', t, e, e, t, e) : c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', t, e, e, t, e, e, e), rt[e] = !0, !0) : I ? !0 : It(e, t, x) ? (rt[e] = !0, !1) : ((t === "false" || t === "true") && x !== null && x.type === oe && (c("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", t, e, t === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', e, t), rt[e] = !0), !0);
      };
    }
    var hn = function(r, e, t) {
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
    function te(r, e, t) {
      ue(r, e) || hn(r, e, t);
    }
    var Ue = function() {
    };
    {
      var be = /^(?:webkit|moz|o)[A-Z]/, _e = /^-ms-/, Ke = /-(.)/g, We = /;\s*$/, ot = {}, Tt = {}, Me = !1, Rt = !1, kt = function(r) {
        return r.replace(Ke, function(e, t) {
          return t.toUpperCase();
        });
      }, Ct = function(r) {
        ot.hasOwnProperty(r) && ot[r] || (ot[r] = !0, c(
          "Unsupported style property %s. Did you mean %s?",
          r,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          kt(r.replace(_e, "ms-"))
        ));
      }, Ft = function(r) {
        ot.hasOwnProperty(r) && ot[r] || (ot[r] = !0, c("Unsupported vendor-prefixed style property %s. Did you mean %s?", r, r.charAt(0).toUpperCase() + r.slice(1)));
      }, vt = function(r, e) {
        Tt.hasOwnProperty(e) && Tt[e] || (Tt[e] = !0, c(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, r, e.replace(We, "")));
      }, _t = function(r, e) {
        Me || (Me = !0, c("`NaN` is an invalid value for the `%s` css style property.", r));
      }, yt = function(r, e) {
        Rt || (Rt = !0, c("`Infinity` is an invalid value for the `%s` css style property.", r));
      };
      Ue = function(r, e) {
        r.indexOf("-") > -1 ? Ct(r) : be.test(r) ? Ft(r) : We.test(e) && vt(r, e), typeof e == "number" && (isNaN(e) ? _t(r, e) : isFinite(e) || yt(r, e));
      };
    }
    var nn = Ue, $t = /["'&<>]/;
    function gn(r) {
      ie(r);
      var e = "" + r, t = $t.exec(e);
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
    function $e(r) {
      return typeof r == "boolean" || typeof r == "number" ? "" + r : gn(r);
    }
    var Vt = /([A-Z])/g, Fn = /^ms-/;
    function _n(r) {
      return r.replace(Vt, "-$1").toLowerCase().replace(Fn, "-ms-");
    }
    var w = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, J = !1;
    function se(r) {
      !J && w.test(r) && (J = !0, c("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(r)));
    }
    var ge = Array.isArray;
    function Fe(r) {
      return ge(r);
    }
    var Le = A("<script>"), Ie = A("<\/script>"), Re = A('<script src="'), ct = A('<script type="module" src="'), Ve = A('" async=""><\/script>');
    function qe(r) {
      return ie(r), ("" + r).replace(it, rn);
    }
    var it = /(<\/|<)(s)(cript)/gi, rn = function(r, e, t, n) {
      return "" + e + (t === "s" ? "\\u0073" : "\\u0053") + n;
    };
    function Qt(r, e, t, n, o) {
      var s = r === void 0 ? "" : r, d = e === void 0 ? Le : A('<script nonce="' + $e(e) + '">'), h = [];
      if (t !== void 0 && h.push(d, z(qe(t)), Ie), n !== void 0)
        for (var x = 0; x < n.length; x++)
          h.push(Re, z($e(n[x])), Ve);
      if (o !== void 0)
        for (var I = 0; I < o.length; I++)
          h.push(ct, z($e(o[I])), Ve);
      return {
        bootstrapChunks: h,
        startInlineScript: d,
        placeholderPrefix: A(s + "P:"),
        segmentPrefix: A(s + "S:"),
        boundaryPrefix: s + "B:",
        idPrefix: s,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var dt = 0, ft = 1, Kt = 2, qt = 3, Pn = 4, Jn = 5, on = 6, vn = 7;
    function jt(r, e) {
      return {
        insertionMode: r,
        selectedValue: e
      };
    }
    function In(r) {
      var e = r === "http://www.w3.org/2000/svg" ? Kt : r === "http://www.w3.org/1998/Math/MathML" ? qt : dt;
      return jt(e, null);
    }
    function Bn(r, e, t) {
      switch (e) {
        case "select":
          return jt(ft, t.value != null ? t.value : t.defaultValue);
        case "svg":
          return jt(Kt, null);
        case "math":
          return jt(qt, null);
        case "foreignObject":
          return jt(ft, null);
        // Table parents are special in that their children can only be created at all if they're
        // wrapped in a table parent. So we need to encode that we're entering this mode.
        case "table":
          return jt(Pn, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return jt(Jn, null);
        case "colgroup":
          return jt(vn, null);
        case "tr":
          return jt(on, null);
      }
      return r.insertionMode >= Pn || r.insertionMode === dt ? jt(ft, null) : r;
    }
    var Zn = null;
    function en(r) {
      var e = r.nextSuspenseID++;
      return A(r.boundaryPrefix + e.toString(16));
    }
    function mn(r, e, t) {
      var n = r.idPrefix, o = ":" + n + "R" + e;
      return t > 0 && (o += "H" + t.toString(32)), o + ":";
    }
    function Bt(r) {
      return $e(r);
    }
    var Qn = A("<!-- -->");
    function Pt(r, e, t, n) {
      return e === "" ? n : (n && r.push(Qn), r.push(z(Bt(e))), !0);
    }
    function Gt(r, e, t, n) {
      t && n && r.push(Qn);
    }
    var a = /* @__PURE__ */ new Map();
    function u(r) {
      var e = a.get(r);
      if (e !== void 0)
        return e;
      var t = A($e(_n(r)));
      return a.set(r, t), t;
    }
    var g = A(' style="'), S = A(":"), L = A(";");
    function P(r, e, t) {
      if (typeof t != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var n = !0;
      for (var o in t)
        if (Y.call(t, o)) {
          var s = t[o];
          if (!(s == null || typeof s == "boolean" || s === "")) {
            var d = void 0, h = void 0, x = o.indexOf("--") === 0;
            x ? (d = z($e(o)), X(s, o), h = z($e(("" + s).trim()))) : (nn(o, s), d = u(o), typeof s == "number" ? s !== 0 && !Y.call(tt, o) ? h = z(s + "px") : h = z("" + s) : (X(s, o), h = z($e(("" + s).trim())))), n ? (n = !1, r.push(g, d, S, h)) : r.push(L, d, S, h);
          }
        }
      n || r.push(he);
    }
    var N = A(" "), Q = A('="'), he = A('"'), me = A('=""');
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
        var o = at(t);
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
              n && r.push(N, d, me);
              return;
            case de:
              n === !0 ? r.push(N, d, me) : n === !1 || r.push(N, d, Q, z($e(n)), he);
              return;
            case De:
              isNaN(n) || r.push(N, d, Q, z($e(n)), he);
              break;
            case Se:
              !isNaN(n) && n >= 1 && r.push(N, d, Q, z($e(n)), he);
              break;
            default:
              o.sanitizeURL && (O(n, s), n = "" + n, se(n)), r.push(N, d, Q, z($e(n)), he);
          }
        } else if (xe(t)) {
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
          r.push(N, z(t), Q, z($e(n)), he);
        }
      }
    }
    var Xe = A(">"), Ut = A("/>");
    function Ht(r, e, t) {
      if (e != null) {
        if (t != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof e != "object" || !("__html" in e))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var n = e.__html;
        n != null && (ie(n), r.push(z("" + n)));
      }
    }
    var Nt = !1, An = !1, yn = !1, Kn = !1, Dn = !1, Un = !1, wn = !1;
    function Hn(r, e) {
      {
        var t = r[e];
        if (t != null) {
          var n = Fe(t);
          r.multiple && !n ? c("The `%s` prop supplied to <select> must be an array if `multiple` is true.", e) : !r.multiple && n && c("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", e);
        }
      }
    }
    function Pa(r, e, t) {
      At("select", e), Hn(e, "value"), Hn(e, "defaultValue"), e.value !== void 0 && e.defaultValue !== void 0 && !yn && (c("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), yn = !0), r.push(an("select"));
      var n = null, o = null;
      for (var s in e)
        if (Y.call(e, s)) {
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
      return r.push(Xe), Ht(r, o, n), n;
    }
    function Ia(r) {
      var e = "";
      return b.Children.forEach(r, function(t) {
        t != null && (e += t, !Dn && typeof t != "string" && typeof t != "number" && (Dn = !0, c("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), e;
    }
    var xr = A(' selected=""');
    function Sn(r, e, t, n) {
      var o = n.selectedValue;
      r.push(an("option"));
      var s = null, d = null, h = null, x = null;
      for (var I in e)
        if (Y.call(e, I)) {
          var G = e[I];
          if (G == null)
            continue;
          switch (I) {
            case "children":
              s = G;
              break;
            case "selected":
              h = G, wn || (c("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), wn = !0);
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
        if (d !== null ? (O(d, "value"), Z = "" + d) : (x !== null && (Un || (Un = !0, c("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), Z = Ia(s)), Fe(o))
          for (var le = 0; le < o.length; le++) {
            O(o[le], "value");
            var we = "" + o[le];
            if (we === Z) {
              r.push(xr);
              break;
            }
          }
        else
          O(o, "select.value"), "" + o === Z && r.push(xr);
      } else h && r.push(xr);
      return r.push(Xe), Ht(r, x, s), s;
    }
    function Aa(r, e, t) {
      At("input", e), e.checked !== void 0 && e.defaultChecked !== void 0 && !An && (c("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), An = !0), e.value !== void 0 && e.defaultValue !== void 0 && !Nt && (c("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), Nt = !0), r.push(an("input"));
      var n = null, o = null, s = null, d = null;
      for (var h in e)
        if (Y.call(e, h)) {
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
    function kn(r, e, t) {
      At("textarea", e), e.value !== void 0 && e.defaultValue !== void 0 && !Kn && (c("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Kn = !0), r.push(an("textarea"));
      var n = null, o = null, s = null;
      for (var d in e)
        if (Y.call(e, d)) {
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
        if (Fe(s)) {
          if (s.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          ie(s[0]), n = "" + s[0];
        }
        ie(s), n = "" + s;
      }
      return typeof n == "string" && n[0] === `
` && r.push(Wn), n !== null && (O(n, "value"), r.push(z(Bt("" + n)))), null;
    }
    function Xr(r, e, t, n) {
      r.push(an(t));
      for (var o in e)
        if (Y.call(e, o)) {
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
      r.push(an("menuitem"));
      for (var n in e)
        if (Y.call(e, n)) {
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
    function st(r, e, t) {
      r.push(an("title"));
      var n = null;
      for (var o in e)
        if (Y.call(e, o)) {
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
    function Nn(r, e, t, n) {
      r.push(an(t));
      var o = null, s = null;
      for (var d in e)
        if (Y.call(e, d)) {
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
      return r.push(Xe), Ht(r, s, o), typeof o == "string" ? (r.push(z(Bt(o))), null) : o;
    }
    function kr(r, e, t, n) {
      r.push(an(t));
      var o = null, s = null;
      for (var d in e)
        if (Y.call(e, d)) {
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
              xe(d) && typeof h != "function" && typeof h != "symbol" && r.push(N, z(d), Q, z($e(h)), he);
              break;
          }
        }
      return r.push(Xe), Ht(r, s, o), o;
    }
    var Wn = A(`
`);
    function Mn(r, e, t, n) {
      r.push(an(t));
      var o = null, s = null;
      for (var d in e)
        if (Y.call(e, d)) {
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
    function an(r) {
      var e = On.get(r);
      if (e === void 0) {
        if (!Cr.test(r))
          throw new Error("Invalid tag: " + r);
        e = A("<" + r), On.set(r, e);
      }
      return e;
    }
    var Jr = A("<!DOCTYPE html>");
    function ir(r, e, t, n, o) {
      switch (ze(e, t), xt(e, t), te(e, t, null), !t.suppressContentEditableWarning && t.contentEditable && t.children != null && c("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), o.insertionMode !== Kt && o.insertionMode !== qt && e.indexOf("-") === -1 && typeof t.is != "string" && e.toLowerCase() !== e && c("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e) {
        // Special tags
        case "select":
          return Pa(r, t, n);
        case "option":
          return Sn(r, t, n, o);
        case "textarea":
          return kn(r, t, n);
        case "input":
          return Aa(r, t, n);
        case "menuitem":
          return wr(r, t, n);
        case "title":
          return st(r, t, n);
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
          return Xr(r, t, e, n);
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
          return Nn(r, t, e, n);
        case "html":
          return o.insertionMode === dt && r.push(Jr), Nn(r, t, e, n);
        default:
          return e.indexOf("-") === -1 && typeof t.is != "string" ? Nn(r, t, e, n) : kr(r, t, e, n);
      }
    }
    var Po = A("</"), Er = A(">");
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
    function Da(r, e) {
      for (var t = e.bootstrapChunks, n = 0; n < t.length - 1; n++)
        R(r, t[n]);
      return n < t.length ? B(r, t[n]) : !0;
    }
    var Ma = A('<template id="'), Tr = A('"></template>');
    function Ao(r, e, t) {
      R(r, Ma), R(r, e.placeholderPrefix);
      var n = z(t.toString(16));
      return R(r, n), B(r, Tr);
    }
    var sr = A("<!--$-->"), Zr = A('<!--$?--><template id="'), Oa = A('"></template>'), qn = A("<!--$!-->"), Qr = A("<!--/$-->"), Kr = A("<template"), er = A('"'), lr = A(' data-dgst="'), Rr = A(' data-msg="'), Do = A(' data-stck="'), Mo = A("></template>");
    function Oo(r, e) {
      return B(r, sr);
    }
    function Fr(r, e, t) {
      if (R(r, Zr), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return R(r, t), B(r, Oa);
    }
    function Yt(r, e, t, n, o) {
      var s;
      return s = B(r, qn), R(r, Kr), t && (R(r, lr), R(r, z($e(t))), R(r, er)), n && (R(r, Rr), R(r, z($e(n))), R(r, er)), o && (R(r, Do), R(r, z($e(o))), R(r, er)), s = B(r, Mo), s;
    }
    function Lo(r, e) {
      return B(r, Qr);
    }
    function _r(r, e) {
      return B(r, Qr);
    }
    function La(r, e) {
      return B(r, Qr);
    }
    var jo = A('<div hidden id="'), Pr = A('">'), Bo = A("</div>"), Uo = A('<svg aria-hidden="true" style="display:none" id="'), Ir = A('">'), Ar = A("</svg>"), Ho = A('<math aria-hidden="true" style="display:none" id="'), No = A('">'), Wo = A("</math>"), qr = A('<table hidden id="'), zo = A('">'), i = A("</table>"), l = A('<table hidden><tbody id="'), f = A('">'), m = A("</tbody></table>"), j = A('<table hidden><tr id="'), M = A('">'), V = A("</tr></table>"), K = A('<table hidden><colgroup id="'), ye = A('">'), Oe = A("</colgroup></table>");
    function Ae(r, e, t, n) {
      switch (t.insertionMode) {
        case dt:
        case ft:
          return R(r, jo), R(r, e.segmentPrefix), R(r, z(n.toString(16))), B(r, Pr);
        case Kt:
          return R(r, Uo), R(r, e.segmentPrefix), R(r, z(n.toString(16))), B(r, Ir);
        case qt:
          return R(r, Ho), R(r, e.segmentPrefix), R(r, z(n.toString(16))), B(r, No);
        case Pn:
          return R(r, qr), R(r, e.segmentPrefix), R(r, z(n.toString(16))), B(r, zo);
        // TODO: For the rest of these, there will be extra wrapper nodes that never
        // get deleted from the document. We need to delete the table too as part
        // of the injected scripts. They are invisible though so it's not too terrible
        // and it's kind of an edge case to suspend in a table. Totally supported though.
        case Jn:
          return R(r, l), R(r, e.segmentPrefix), R(r, z(n.toString(16))), B(r, f);
        case on:
          return R(r, j), R(r, e.segmentPrefix), R(r, z(n.toString(16))), B(r, M);
        case vn:
          return R(r, K), R(r, e.segmentPrefix), R(r, z(n.toString(16))), B(r, ye);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function lt(r, e) {
      switch (e.insertionMode) {
        case dt:
        case ft:
          return B(r, Bo);
        case Kt:
          return B(r, Ar);
        case qt:
          return B(r, Wo);
        case Pn:
          return B(r, i);
        case Jn:
          return B(r, m);
        case on:
          return B(r, V);
        case vn:
          return B(r, Oe);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Xt = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", sn = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', ln = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Dr = A(Xt + ';$RS("'), $o = A('$RS("'), ur = A('","'), ps = A('")<\/script>');
    function hs(r, e, t) {
      R(r, e.startInlineScript), e.sentCompleteSegmentFunction ? R(r, $o) : (e.sentCompleteSegmentFunction = !0, R(r, Dr)), R(r, e.segmentPrefix);
      var n = z(t.toString(16));
      return R(r, n), R(r, ur), R(r, e.placeholderPrefix), R(r, n), B(r, ps);
    }
    var ja = A(sn + ';$RC("'), gs = A('$RC("'), vs = A('","'), Ci = A('")<\/script>');
    function Ei(r, e, t, n) {
      if (R(r, e.startInlineScript), e.sentCompleteBoundaryFunction ? R(r, gs) : (e.sentCompleteBoundaryFunction = !0, R(r, ja)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var o = z(n.toString(16));
      return R(r, t), R(r, vs), R(r, e.segmentPrefix), R(r, o), B(r, Ci);
    }
    var ms = A(ln + ';$RX("'), ys = A('$RX("'), Ss = A('"'), bs = A(")<\/script>"), tn = A(",");
    function xs(r, e, t, n, o, s) {
      if (R(r, e.startInlineScript), e.sentClientRenderFunction ? R(r, ys) : (e.sentClientRenderFunction = !0, R(r, ms)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return R(r, t), R(r, Ss), (n || o || s) && (R(r, tn), R(r, z(Vo(n || "")))), (o || s) && (R(r, tn), R(r, z(Vo(o || "")))), s && (R(r, tn), R(r, z(Vo(s)))), B(r, bs);
    }
    var Ti = /[<\u2028\u2029]/g;
    function Vo(r) {
      var e = JSON.stringify(r);
      return e.replace(Ti, function(t) {
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
    var un = Object.assign, Ri = Symbol.for("react.element"), Go = Symbol.for("react.portal"), Yo = Symbol.for("react.fragment"), Xo = Symbol.for("react.strict_mode"), Jo = Symbol.for("react.profiler"), eo = Symbol.for("react.provider"), to = Symbol.for("react.context"), Mr = Symbol.for("react.forward_ref"), Ba = Symbol.for("react.suspense"), Ua = Symbol.for("react.suspense_list"), Ha = Symbol.for("react.memo"), Zo = Symbol.for("react.lazy"), Fi = Symbol.for("react.scope"), ws = Symbol.for("react.debug_trace_mode"), ks = Symbol.for("react.legacy_hidden"), Cs = Symbol.for("react.default_value"), Na = Symbol.iterator, St = "@@iterator";
    function no(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = Na && r[Na] || r[St];
      return typeof e == "function" ? e : null;
    }
    function _i(r, e, t) {
      var n = r.displayName;
      if (n)
        return n;
      var o = e.displayName || e.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function Wa(r) {
      return r.displayName || "Context";
    }
    function mt(r) {
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
        case Ba:
          return "Suspense";
        case Ua:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case to:
            var e = r;
            return Wa(e) + ".Consumer";
          case eo:
            var t = r;
            return Wa(t._context) + ".Provider";
          case Mr:
            return _i(r, r.render, "ForwardRef");
          case Ha:
            var n = r.displayName || null;
            return n !== null ? n : mt(r.type) || "Memo";
          case Zo: {
            var o = r, s = o._payload, d = o._init;
            try {
              return mt(d(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Or = 0, za, $a, Va, Ga, Pi, Ii, Qo;
    function Ko() {
    }
    Ko.__reactDisabledLog = !0;
    function ro() {
      {
        if (Or === 0) {
          za = console.log, $a = console.info, Va = console.warn, Ga = console.error, Pi = console.group, Ii = console.groupCollapsed, Qo = console.groupEnd;
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
    function Ya() {
      {
        if (Or--, Or === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: un({}, r, {
              value: za
            }),
            info: un({}, r, {
              value: $a
            }),
            warn: un({}, r, {
              value: Va
            }),
            error: un({}, r, {
              value: Ga
            }),
            group: un({}, r, {
              value: Pi
            }),
            groupCollapsed: un({}, r, {
              value: Ii
            }),
            groupEnd: un({}, r, {
              value: Qo
            })
          });
        }
        Or < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Lr = y.ReactCurrentDispatcher, Xa;
    function cr(r, e, t) {
      {
        if (Xa === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            Xa = n && n[1] || "";
          }
        return `
` + Xa + r;
      }
    }
    var Ja = !1, oo;
    {
      var Es = typeof WeakMap == "function" ? WeakMap : Map;
      oo = new Es();
    }
    function ao(r, e) {
      if (!r || Ja)
        return "";
      {
        var t = oo.get(r);
        if (t !== void 0)
          return t;
      }
      var n;
      Ja = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Lr.current, Lr.current = null, ro();
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
            } catch (Ze) {
              n = Ze;
            }
            Reflect.construct(r, [], d);
          } else {
            try {
              d.call();
            } catch (Ze) {
              n = Ze;
            }
            r.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ze) {
            n = Ze;
          }
          r();
        }
      } catch (Ze) {
        if (Ze && n && typeof Ze.stack == "string") {
          for (var h = Ze.stack.split(`
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
                    return r.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", r.displayName)), typeof r == "function" && oo.set(r, Z), Z;
                  }
                while (I >= 1 && G >= 0);
              break;
            }
        }
      } finally {
        Ja = !1, Lr.current = s, Ya(), Error.prepareStackTrace = o;
      }
      var le = r ? r.displayName || r.name : "", we = le ? cr(le) : "";
      return typeof r == "function" && oo.set(r, we), we;
    }
    function Ai(r, e, t) {
      return ao(r, !0);
    }
    function Za(r, e, t) {
      return ao(r, !1);
    }
    function qo(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function ea(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return ao(r, qo(r));
      if (typeof r == "string")
        return cr(r);
      switch (r) {
        case Ba:
          return cr("Suspense");
        case Ua:
          return cr("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case Mr:
            return Za(r.render);
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
    var ta = {}, io = y.ReactDebugCurrentFrame;
    function so(r) {
      if (r) {
        var e = r._owner, t = ea(r.type, r._source, e ? e.type : null);
        io.setExtraStackFrame(t);
      } else
        io.setExtraStackFrame(null);
    }
    function Di(r, e, t, n, o) {
      {
        var s = Function.call.bind(Y);
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
            h && !(h instanceof Error) && (so(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, d, typeof h), so(null)), h instanceof Error && !(h.message in ta) && (ta[h.message] = !0, so(o), c("Failed %s type: %s", t, h.message), so(null));
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
          var s = mt(r) || "Unknown";
          Di(t, n, "context", s);
        }
        return n;
      }
    }
    function Qa(r, e, t, n) {
      {
        if (typeof r.getChildContext != "function") {
          {
            var o = mt(e) || "Unknown";
            dr[o] || (dr[o] = !0, c("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", o, o));
          }
          return t;
        }
        var s = r.getChildContext();
        for (var d in s)
          if (!(d in n))
            throw new Error((mt(e) || "Unknown") + '.getChildContext(): key "' + d + '" is not defined in childContextTypes.');
        {
          var h = mt(e) || "Unknown";
          Di(n, s, "child context", h);
        }
        return un({}, t, s);
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
    function lo(r, e) {
      if (r !== e) {
        oa(r);
        var t = r.parent, n = e.parent;
        if (t === null) {
          if (n !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (n === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          lo(t, n);
        }
        aa(e);
      }
    }
    function uo(r) {
      oa(r);
      var e = r.parent;
      e !== null && uo(e);
    }
    function Mi(r) {
      var e = r.parent;
      e !== null && Mi(e), aa(r);
    }
    function Oi(r, e) {
      oa(r);
      var t = r.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === e.depth ? lo(t, e) : Oi(t, e);
    }
    function Li(r, e) {
      var t = e.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      r.depth === t.depth ? lo(r, t) : Li(r, t), aa(e);
    }
    function rr(r) {
      var e = nr, t = r;
      e !== t && (e === null ? Mi(t) : t === null ? uo(e) : e.depth === t.depth ? lo(e, t) : e.depth > t.depth ? Oi(e, t) : Li(e, t), nr = t);
    }
    function Ka(r, e) {
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
    function Ts(r) {
      var e = nr;
      if (e === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      e.context !== r && c("The parent context is not the expected context. This is probably a bug in React.");
      {
        var t = e.parentValue;
        t === Cs ? e.context._currentValue = e.context._defaultValue : e.context._currentValue = t, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== fr && c("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = fr;
      }
      return nr = e.parent;
    }
    function ji() {
      return nr;
    }
    function jr(r) {
      var e = r._currentValue;
      return e;
    }
    function co(r) {
      return r._reactInternals;
    }
    function qa(r, e) {
      r._reactInternals = e;
    }
    var ia = {}, sa = {}, la, Br, fo, po, ua, ho, ca, da, ei;
    {
      la = /* @__PURE__ */ new Set(), Br = /* @__PURE__ */ new Set(), fo = /* @__PURE__ */ new Set(), ca = /* @__PURE__ */ new Set(), po = /* @__PURE__ */ new Set(), da = /* @__PURE__ */ new Set(), ei = /* @__PURE__ */ new Set();
      var Bi = /* @__PURE__ */ new Set();
      ho = function(r, e) {
        if (!(r === null || typeof r == "function")) {
          var t = e + "_" + r;
          Bi.has(t) || (Bi.add(t), c("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", e, r));
        }
      }, ua = function(r, e) {
        if (e === void 0) {
          var t = mt(r) || "Component";
          po.has(t) || (po.add(t), c("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", t));
        }
      };
    }
    function Ui(r, e) {
      {
        var t = r.constructor, n = t && mt(t) || "ReactClass", o = n + "." + e;
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
        var n = co(r);
        n.queue === null ? Ui(r, "setState") : (n.queue.push(e), t != null && ho(t, "setState"));
      },
      enqueueReplaceState: function(r, e, t) {
        var n = co(r);
        n.replace = !0, n.queue = [e], t != null && ho(t, "setState");
      },
      enqueueForceUpdate: function(r, e) {
        var t = co(r);
        t.queue === null ? Ui(r, "forceUpdate") : e != null && ho(e, "setState");
      }
    };
    function Rs(r, e, t, n, o) {
      var s = t(o, n);
      ua(e, s);
      var d = s == null ? n : un({}, n, s);
      return d;
    }
    function Ni(r, e, t) {
      var n = na, o = r.contextType;
      if ("contextType" in r) {
        var s = (
          // Allow null for conditional declaration
          o === null || o !== void 0 && o.$$typeof === to && o._context === void 0
        );
        if (!s && !ei.has(r)) {
          ei.add(r);
          var d = "";
          o === void 0 ? d = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof o != "object" ? d = " However, it is set to a " + typeof o + "." : o.$$typeof === eo ? d = " Did you accidentally pass the Context.Provider instead?" : o._context !== void 0 ? d = " Did you accidentally pass the Context.Consumer instead?" : d = " However, it is set to an object with keys {" + Object.keys(o).join(", ") + "}.", c("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", mt(r) || "Component", d);
        }
      }
      typeof o == "object" && o !== null ? n = jr(o) : n = t;
      var h = new r(e, n);
      {
        if (typeof r.getDerivedStateFromProps == "function" && (h.state === null || h.state === void 0)) {
          var x = mt(r) || "Component";
          la.has(x) || (la.add(x), c("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, h.state === null ? "null" : "undefined", x));
        }
        if (typeof r.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function") {
          var I = null, G = null, Z = null;
          if (typeof h.componentWillMount == "function" && h.componentWillMount.__suppressDeprecationWarning !== !0 ? I = "componentWillMount" : typeof h.UNSAFE_componentWillMount == "function" && (I = "UNSAFE_componentWillMount"), typeof h.componentWillReceiveProps == "function" && h.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? G = "componentWillReceiveProps" : typeof h.UNSAFE_componentWillReceiveProps == "function" && (G = "UNSAFE_componentWillReceiveProps"), typeof h.componentWillUpdate == "function" && h.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Z = "componentWillUpdate" : typeof h.UNSAFE_componentWillUpdate == "function" && (Z = "UNSAFE_componentWillUpdate"), I !== null || G !== null || Z !== null) {
            var le = mt(r) || "Component", we = typeof r.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            fo.has(le) || (fo.add(le), c(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, le, we, I !== null ? `
  ` + I : "", G !== null ? `
  ` + G : "", Z !== null ? `
  ` + Z : ""));
          }
        }
      }
      return h;
    }
    function Fs(r, e, t) {
      {
        var n = mt(e) || "Component", o = r.render;
        o || (e.prototype && typeof e.prototype.render == "function" ? c("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", n) : c("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", n)), r.getInitialState && !r.getInitialState.isReactClassApproved && !r.state && c("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", n), r.getDefaultProps && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", n), r.propTypes && c("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", n), r.contextType && c("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", n), r.contextTypes && c("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", n), e.contextType && e.contextTypes && !da.has(e) && (da.add(e), c("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", n)), typeof r.componentShouldUpdate == "function" && c("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", n), e.prototype && e.prototype.isPureReactComponent && typeof r.shouldComponentUpdate < "u" && c("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", mt(e) || "A pure component"), typeof r.componentDidUnmount == "function" && c("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", n), typeof r.componentDidReceiveProps == "function" && c("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", n), typeof r.componentWillRecieveProps == "function" && c("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", n), typeof r.UNSAFE_componentWillRecieveProps == "function" && c("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", n);
        var s = r.props !== t;
        r.props !== void 0 && s && c("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", n, n), r.defaultProps && c("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", n, n), typeof r.getSnapshotBeforeUpdate == "function" && typeof r.componentDidUpdate != "function" && !Br.has(e) && (Br.add(e), c("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", mt(e))), typeof r.getDerivedStateFromProps == "function" && c("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof r.getDerivedStateFromError == "function" && c("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof e.getSnapshotBeforeUpdate == "function" && c("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", n);
        var d = r.state;
        d && (typeof d != "object" || Fe(d)) && c("%s.state: must be set to an object or null", n), typeof r.getChildContext == "function" && typeof e.childContextTypes != "object" && c("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", n);
      }
    }
    function _s(r, e) {
      var t = e.state;
      if (typeof e.componentWillMount == "function") {
        if (e.componentWillMount.__suppressDeprecationWarning !== !0) {
          var n = mt(r) || "Unknown";
          sa[n] || (C(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            n
          ), sa[n] = !0);
        }
        e.componentWillMount();
      }
      typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && (c("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", mt(r) || "Component"), Hi.enqueueReplaceState(e, e.state, null));
    }
    function ti(r, e, t, n) {
      if (r.queue !== null && r.queue.length > 0) {
        var o = r.queue, s = r.replace;
        if (r.queue = null, r.replace = !1, s && o.length === 1)
          e.state = o[0];
        else {
          for (var d = s ? o[0] : e.state, h = !0, x = s ? 1 : 0; x < o.length; x++) {
            var I = o[x], G = typeof I == "function" ? I.call(e, d, t, n) : I;
            G != null && (h ? (h = !1, d = un({}, d, G)) : un(d, G));
          }
          e.state = d;
        }
      } else
        r.queue = null;
    }
    function go(r, e, t, n) {
      Fs(r, e, t);
      var o = r.state !== void 0 ? r.state : null;
      r.updater = Hi, r.props = t, r.state = o;
      var s = {
        queue: [],
        replace: !1
      };
      qa(r, s);
      var d = e.contextType;
      if (typeof d == "object" && d !== null ? r.context = jr(d) : r.context = n, r.state === t) {
        var h = mt(e) || "Component";
        ca.has(h) || (ca.add(h), c("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", h));
      }
      var x = e.getDerivedStateFromProps;
      typeof x == "function" && (r.state = Rs(r, e, x, o, t)), typeof e.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function" && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function") && (_s(e, r), ti(s, r, t, n));
    }
    var Ps = {
      id: 1,
      overflow: ""
    };
    function Is(r) {
      var e = r.overflow, t = r.id, n = t & ~As(t);
      return n.toString(32) + e;
    }
    function ni(r, e, t) {
      var n = r.id, o = r.overflow, s = fa(n) - 1, d = n & ~(1 << s), h = t + 1, x = fa(e) + s;
      if (x > 30) {
        var I = s - s % 5, G = (1 << I) - 1, Z = (d & G).toString(32), le = d >> I, we = s - I, Ze = fa(e) + we, Ot = h << we, Sr = Ot | le, br = Z + o;
        return {
          id: 1 << Ze | Sr,
          overflow: br
        };
      } else {
        var Yn = h << s, Vr = Yn | d, ll = o;
        return {
          id: 1 << x | Vr,
          overflow: ll
        };
      }
    }
    function fa(r) {
      return 32 - Ds(r);
    }
    function As(r) {
      return 1 << fa(r) - 1;
    }
    var Ds = Math.clz32 ? Math.clz32 : ri, Ms = Math.log, zn = Math.LN2;
    function ri(r) {
      var e = r >>> 0;
      return e === 0 ? 32 : 31 - (Ms(e) / zn | 0) | 0;
    }
    function pa(r, e) {
      return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
    }
    var pt = typeof Object.is == "function" ? Object.is : pa, cn = null, Ur = null, pr = null, Je = null, or = !1, ha = !1, dn = 0, fn = null, Ln = 0, Os = 25, Cn = !1, ar;
    function hr() {
      if (cn === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Cn && c("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), cn;
    }
    function Ls(r, e) {
      if (e === null)
        return c("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ar), !1;
      r.length !== e.length && c(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ar, "[" + r.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var t = 0; t < e.length && t < r.length; t++)
        if (!pt(r[t], e[t]))
          return !1;
      return !0;
    }
    function oi() {
      if (Ln > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function vo() {
      return Je === null ? pr === null ? (or = !1, pr = Je = oi()) : (or = !0, Je = pr) : Je.next === null ? (or = !1, Je = Je.next = oi()) : (or = !0, Je = Je.next), Je;
    }
    function js(r, e) {
      cn = e, Ur = r, Cn = !1, dn = 0;
    }
    function Bs(r, e, t, n) {
      for (; ha; )
        ha = !1, dn = 0, Ln += 1, Je = null, t = r(e, n);
      return ai(), t;
    }
    function ga() {
      var r = dn !== 0;
      return r;
    }
    function ai() {
      Cn = !1, cn = null, Ur = null, ha = !1, pr = null, Ln = 0, fn = null, Je = null;
    }
    function Wi(r) {
      return Cn && c("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), jr(r);
    }
    function zi(r) {
      return ar = "useContext", hr(), jr(r);
    }
    function ii(r, e) {
      return typeof e == "function" ? e(r) : e;
    }
    function Us(r) {
      return ar = "useState", $i(
        ii,
        // useReducer has a special case to support lazy useState initializers
        r
      );
    }
    function $i(r, e, t) {
      if (r !== ii && (ar = "useReducer"), cn = hr(), Je = vo(), or) {
        var n = Je.queue, o = n.dispatch;
        if (fn !== null) {
          var s = fn.get(n);
          if (s !== void 0) {
            fn.delete(n);
            var d = Je.memoizedState, h = s;
            do {
              var x = h.action;
              Cn = !0, d = r(d, x), Cn = !1, h = h.next;
            } while (h !== null);
            return Je.memoizedState = d, [d, o];
          }
        }
        return [Je.memoizedState, o];
      } else {
        Cn = !0;
        var I;
        r === ii ? I = typeof e == "function" ? e() : e : I = t !== void 0 ? t(e) : e, Cn = !1, Je.memoizedState = I;
        var G = Je.queue = {
          last: null,
          dispatch: null
        }, Z = G.dispatch = Ws.bind(null, cn, G);
        return [Je.memoizedState, Z];
      }
    }
    function Vi(r, e) {
      cn = hr(), Je = vo();
      var t = e === void 0 ? null : e;
      if (Je !== null) {
        var n = Je.memoizedState;
        if (n !== null && t !== null) {
          var o = n[1];
          if (Ls(t, o))
            return n[0];
        }
      }
      Cn = !0;
      var s = r();
      return Cn = !1, Je.memoizedState = [s, t], s;
    }
    function Hs(r) {
      cn = hr(), Je = vo();
      var e = Je.memoizedState;
      if (e === null) {
        var t = {
          current: r
        };
        return Object.seal(t), Je.memoizedState = t, t;
      } else
        return e;
    }
    function Ns(r, e) {
      ar = "useLayoutEffect", c("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Ws(r, e, t) {
      if (Ln >= Os)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (r === cn) {
        ha = !0;
        var n = {
          action: t,
          next: null
        };
        fn === null && (fn = /* @__PURE__ */ new Map());
        var o = fn.get(e);
        if (o === void 0)
          fn.set(e, n);
        else {
          for (var s = o; s.next !== null; )
            s = s.next;
          s.next = n;
        }
      }
    }
    function zs(r, e) {
      return Vi(function() {
        return r;
      }, e);
    }
    function $s(r, e, t) {
      return hr(), e(r._source);
    }
    function Vs(r, e, t) {
      if (t === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return t();
    }
    function va(r) {
      return hr(), r;
    }
    function Gi() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function si() {
      return hr(), [!1, Gi];
    }
    function Yi() {
      var r = Ur, e = Is(r.treeContext), t = mo;
      if (t === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var n = dn++;
      return mn(t, e, n);
    }
    function ma() {
    }
    var ya = {
      readContext: Wi,
      useContext: zi,
      useMemo: Vi,
      useReducer: $i,
      useRef: Hs,
      useState: Us,
      useInsertionEffect: ma,
      useLayoutEffect: Ns,
      useCallback: zs,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: ma,
      // Effects are not run in the server environment.
      useEffect: ma,
      // Debugging effect
      useDebugValue: ma,
      useDeferredValue: va,
      useTransition: si,
      useId: Yi,
      // Subscriptions are not setup in a server environment.
      useMutableSource: $s,
      useSyncExternalStore: Vs
    }, mo = null;
    function Sa(r) {
      mo = r;
    }
    function Hr(r) {
      try {
        var e = "", t = r;
        do {
          switch (t.tag) {
            case 0:
              e += cr(t.type, null, null);
              break;
            case 1:
              e += Za(t.type, null, null);
              break;
            case 2:
              e += Ai(t.type, null, null);
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
    var ba = y.ReactCurrentDispatcher, xa = y.ReactDebugCurrentFrame, wa = 0, Nr = 1, li = 2, gr = 3, Xi = 4, Gs = 0, Wr = 1, zr = 2, Ys = 12800;
    function Xs(r) {
      return console.error(r), null;
    }
    function vr() {
    }
    function ka(r, e, t, n, o, s, d, h, x) {
      var I = [], G = /* @__PURE__ */ new Set(), Z = {
        destination: null,
        responseState: e,
        progressiveChunkSize: n === void 0 ? Ys : n,
        status: Gs,
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
        onError: o === void 0 ? Xs : o,
        onAllReady: s === void 0 ? vr : s,
        onShellReady: d === void 0 ? vr : d,
        onShellError: h === void 0 ? vr : h,
        onFatalError: x === void 0 ? vr : x
      }, le = yo(
        Z,
        0,
        null,
        t,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      le.parentFlushed = !0;
      var we = mr(Z, r, null, le, G, na, ra, Ps);
      return I.push(we), Z;
    }
    function $n(r, e) {
      var t = r.pingedTasks;
      t.push(e), t.length === 1 && _(function() {
        return Si(r);
      });
    }
    function ui(r, e) {
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
    function yo(r, e, t, n, o, s) {
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
      return Vn === null || Vn.componentStack === null ? "" : Hr(Vn.componentStack);
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
    function So(r, e) {
      r.componentStack = {
        tag: 2,
        parent: r.componentStack,
        type: e
      };
    }
    function En(r) {
      r.componentStack === null ? c("Unexpectedly popped too many stack frames. This is a bug in React.") : r.componentStack = r.componentStack.parent;
    }
    var bo = null;
    function ci(r, e) {
      {
        var t;
        typeof e == "string" ? t = e : e && typeof e.message == "string" ? t = e.message : t = String(e);
        var n = bo || jn();
        bo = null, r.errorMessage = t, r.errorComponentStack = n;
      }
    }
    function xo(r, e) {
      var t = r.onError(e);
      if (t != null && typeof t != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
      return t;
    }
    function wo(r, e) {
      var t = r.onShellError;
      t(e);
      var n = r.onFatalError;
      n(e), r.destination !== null ? (r.status = zr, D(r.destination, e)) : (r.status = Wr, r.fatalError = e);
    }
    function Ji(r, e, t) {
      Gn(e, "Suspense");
      var n = e.blockedBoundary, o = e.blockedSegment, s = t.fallback, d = t.children, h = /* @__PURE__ */ new Set(), x = ui(r, h), I = o.chunks.length, G = yo(
        r,
        I,
        x,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      o.children.push(G), o.lastPushedText = !1;
      var Z = yo(
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
        if ($r(r, e, d), Gt(Z.chunks, r.responseState, Z.lastPushedText, Z.textEmbedded), Z.status = Nr, yr(x, Z), x.pendingTasks === 0) {
          En(e);
          return;
        }
      } catch (we) {
        Z.status = Xi, x.forceClientRender = !0, x.errorDigest = xo(r, we), ci(x, we);
      } finally {
        e.blockedBoundary = n, e.blockedSegment = o;
      }
      var le = mr(r, s, n, G, h, e.legacyContext, e.context, e.treeContext);
      le.componentStack = e.componentStack, r.pingedTasks.push(le), En(e);
    }
    function Js(r, e, t, n) {
      Gn(e, t);
      var o = e.blockedSegment, s = ir(o.chunks, t, n, r.responseState, o.formatContext);
      o.lastPushedText = !1;
      var d = o.formatContext;
      o.formatContext = Bn(d, t, n), $r(r, e, s), o.formatContext = d, Io(o.chunks, t), o.lastPushedText = !1, En(e);
    }
    function Zi(r) {
      return r.prototype && r.prototype.isReactComponent;
    }
    function ko(r, e, t, n, o) {
      var s = {};
      js(e, s);
      var d = t(n, o);
      return Bs(t, n, d, o);
    }
    function di(r, e, t, n, o) {
      var s = t.render();
      t.props !== o && (gi || c("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", mt(n) || "a component"), gi = !0);
      {
        var d = n.childContextTypes;
        if (d != null) {
          var h = e.legacyContext, x = Qa(t, n, h, d);
          e.legacyContext = x, Jt(r, e, s), e.legacyContext = h;
          return;
        }
      }
      Jt(r, e, s);
    }
    function Qi(r, e, t, n) {
      So(e, t);
      var o = tr(t, e.legacyContext), s = Ni(t, n, o);
      go(s, t, n, o), di(r, e, s, t, n), En(e);
    }
    var fi = {}, Co = {}, pi = {}, hi = {}, gi = !1, Ki = {}, qi = !1, vi = !1, es = !1;
    function Zs(r, e, t, n) {
      var o;
      if (o = tr(t, e.legacyContext), Ca(e, t), t.prototype && typeof t.prototype.render == "function") {
        var s = mt(t) || "Unknown";
        fi[s] || (c("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", s, s), fi[s] = !0);
      }
      var d = ko(r, e, t, n, o), h = ga();
      if (typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0) {
        var x = mt(t) || "Unknown";
        Co[x] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), Co[x] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0
      ) {
        {
          var I = mt(t) || "Unknown";
          Co[I] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", I, I, I), Co[I] = !0);
        }
        go(d, t, n, o), di(r, e, d, t, n);
      } else if (Qs(t), h) {
        var G = e.treeContext, Z = 1, le = 0;
        e.treeContext = ni(G, Z, le);
        try {
          Jt(r, e, d);
        } finally {
          e.treeContext = G;
        }
      } else
        Jt(r, e, d);
      En(e);
    }
    function Qs(r) {
      {
        if (r && r.childContextTypes && c("%s(...): childContextTypes cannot be defined on a function component.", r.displayName || r.name || "Component"), r.defaultProps !== void 0) {
          var e = mt(r) || "Unknown";
          Ki[e] || (c("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", e), Ki[e] = !0);
        }
        if (typeof r.getDerivedStateFromProps == "function") {
          var t = mt(r) || "Unknown";
          hi[t] || (c("%s: Function components do not support getDerivedStateFromProps.", t), hi[t] = !0);
        }
        if (typeof r.contextType == "object" && r.contextType !== null) {
          var n = mt(r) || "Unknown";
          pi[n] || (c("%s: Function components do not support contextType.", n), pi[n] = !0);
        }
      }
    }
    function ts(r, e) {
      if (r && r.defaultProps) {
        var t = un({}, e), n = r.defaultProps;
        for (var o in n)
          t[o] === void 0 && (t[o] = n[o]);
        return t;
      }
      return e;
    }
    function Ks(r, e, t, n, o) {
      Ca(e, t.render);
      var s = ko(r, e, t.render, n, o), d = ga();
      if (d) {
        var h = e.treeContext, x = 1, I = 0;
        e.treeContext = ni(h, x, I);
        try {
          Jt(r, e, s);
        } finally {
          e.treeContext = h;
        }
      } else
        Jt(r, e, s);
      En(e);
    }
    function mi(r, e, t, n, o) {
      var s = t.type, d = ts(s, n);
      Ea(r, e, s, d, o);
    }
    function qs(r, e, t, n) {
      t._context === void 0 ? t !== t.Consumer && (es || (es = !0, c("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : t = t._context;
      var o = n.children;
      typeof o != "function" && c("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var s = jr(t), d = o(s);
      Jt(r, e, d);
    }
    function pn(r, e, t, n) {
      var o = t._context, s = n.value, d = n.children, h;
      h = e.context, e.context = Ka(o, s), Jt(r, e, d), e.context = Ts(o), h !== e.context && c("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function el(r, e, t, n, o) {
      Gn(e, "Lazy");
      var s = t._payload, d = t._init, h = d(s), x = ts(h, n);
      Ea(r, e, h, x, o), En(e);
    }
    function Ea(r, e, t, n, o) {
      if (typeof t == "function")
        if (Zi(t)) {
          Qi(r, e, t, n);
          return;
        } else {
          Zs(r, e, t, n);
          return;
        }
      if (typeof t == "string") {
        Js(r, e, t, n);
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
        case ks:
        case ws:
        case Xo:
        case Jo:
        case Yo: {
          Jt(r, e, n.children);
          return;
        }
        case Ua: {
          Gn(e, "SuspenseList"), Jt(r, e, n.children), En(e);
          return;
        }
        case Fi:
          throw new Error("ReactDOMServer does not yet support scope components.");
        // eslint-disable-next-line-no-fallthrough
        case Ba: {
          Ji(r, e, n);
          return;
        }
      }
      if (typeof t == "object" && t !== null)
        switch (t.$$typeof) {
          case Mr: {
            Ks(r, e, t, n, o);
            return;
          }
          case Ha: {
            mi(r, e, t, n, o);
            return;
          }
          case eo: {
            pn(r, e, t, n);
            return;
          }
          case to: {
            qs(r, e, t, n);
            return;
          }
          case Zo: {
            el(r, e, t, n);
            return;
          }
        }
      var s = "";
      throw (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (t == null ? t : typeof t) + "." + s));
    }
    function tl(r, e) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      r[Symbol.toStringTag] === "Generator" && (qi || c("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), qi = !0), r.entries === e && (vi || c("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), vi = !0);
    }
    function Jt(r, e, t) {
      try {
        return nl(r, e, t);
      } catch (n) {
        throw typeof n == "object" && n !== null && typeof n.then == "function" || (bo = bo !== null ? bo : jn()), n;
      }
    }
    function nl(r, e, t) {
      if (e.node = t, typeof t == "object" && t !== null) {
        switch (t.$$typeof) {
          case Ri: {
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
            Jt(r, e, G);
            return;
          }
        }
        if (Fe(t)) {
          ns(r, e, t);
          return;
        }
        var Z = no(t);
        if (Z) {
          tl(t, Z);
          var le = Z.call(t);
          if (le) {
            var we = le.next();
            if (!we.done) {
              var Ze = [];
              do
                Ze.push(we.value), we = le.next();
              while (!we.done);
              ns(r, e, Ze);
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
        Sr.lastPushedText = Pt(e.blockedSegment.chunks, t, r.responseState, Sr.lastPushedText);
        return;
      }
      if (typeof t == "number") {
        var br = e.blockedSegment;
        br.lastPushedText = Pt(e.blockedSegment.chunks, "" + t, r.responseState, br.lastPushedText);
        return;
      }
      typeof t == "function" && c("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function ns(r, e, t) {
      for (var n = t.length, o = 0; o < n; o++) {
        var s = e.treeContext;
        e.treeContext = ni(s, n, o);
        try {
          $r(r, e, t[o]);
        } finally {
          e.treeContext = s;
        }
      }
    }
    function rs(r, e, t) {
      var n = e.blockedSegment, o = n.chunks.length, s = yo(
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
        return Jt(r, e, t);
      } catch (h) {
        if (ai(), typeof h == "object" && h !== null && typeof h.then == "function") {
          rs(r, e, h), e.blockedSegment.formatContext = n, e.legacyContext = o, e.context = s, rr(s), e.componentStack = d;
          return;
        } else
          throw e.blockedSegment.formatContext = n, e.legacyContext = o, e.context = s, rr(s), e.componentStack = d, h;
      }
    }
    function os(r, e, t, n) {
      var o = xo(r, n);
      if (e === null ? wo(r, n) : (e.pendingTasks--, e.forceClientRender || (e.forceClientRender = !0, e.errorDigest = o, ci(e, n), e.parentFlushed && r.clientRenderedBoundaries.push(e))), r.allPendingTasks--, r.allPendingTasks === 0) {
        var s = r.onAllReady;
        s();
      }
    }
    function rl(r) {
      var e = this, t = r.blockedBoundary, n = r.blockedSegment;
      n.status = gr, Eo(e, t, n);
    }
    function yi(r, e, t) {
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
              ci(n, s);
            } finally {
              Vn = h;
            }
          }
          n.parentFlushed && e.clientRenderedBoundaries.push(n);
        }
        if (n.fallbackAbortableTasks.forEach(function(I) {
          return yi(I, e, t);
        }), n.fallbackAbortableTasks.clear(), e.allPendingTasks--, e.allPendingTasks === 0) {
          var x = e.onAllReady;
          x();
        }
      }
    }
    function yr(r, e) {
      if (e.chunks.length === 0 && e.children.length === 1 && e.children[0].boundary === null) {
        var t = e.children[0];
        t.id = e.id, t.parentFlushed = !0, t.status === Nr && yr(r, t);
      } else {
        var n = r.completedSegments;
        n.push(e);
      }
    }
    function Eo(r, e, t) {
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
          t.parentFlushed && t.status === Nr && yr(e, t), e.parentFlushed && r.completedBoundaries.push(e), e.fallbackAbortableTasks.forEach(rl, r), e.fallbackAbortableTasks.clear();
        else if (t.parentFlushed && t.status === Nr) {
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
    function ol(r, e) {
      var t = e.blockedSegment;
      if (t.status === wa) {
        rr(e.context);
        var n = null;
        n = Vn, Vn = e;
        try {
          Jt(r, e, e.node), Gt(t.chunks, r.responseState, t.lastPushedText, t.textEmbedded), e.abortSet.delete(e), t.status = Nr, Eo(r, e.blockedBoundary, t);
        } catch (s) {
          if (ai(), typeof s == "object" && s !== null && typeof s.then == "function") {
            var o = e.ping;
            s.then(o, o);
          } else
            e.abortSet.delete(e), t.status = Xi, os(r, e.blockedBoundary, t, s);
        } finally {
          Vn = n;
        }
      }
    }
    function Si(r) {
      if (r.status !== zr) {
        var e = ji(), t = ba.current;
        ba.current = ya;
        var n;
        n = xa.getCurrentStack, xa.getCurrentStack = jn;
        var o = mo;
        Sa(r.responseState);
        try {
          var s = r.pingedTasks, d;
          for (d = 0; d < s.length; d++) {
            var h = s[d];
            ol(r, h);
          }
          s.splice(0, d), r.destination !== null && bi(r, r.destination);
        } catch (x) {
          xo(r, x), wo(r, x);
        } finally {
          Sa(o), ba.current = t, xa.getCurrentStack = n, t === ya && rr(e);
        }
      }
    }
    function To(r, e, t) {
      switch (t.parentFlushed = !0, t.status) {
        case wa: {
          var n = t.id = r.nextSegmentId++;
          return t.lastPushedText = !1, t.textEmbedded = !1, Ao(e, r.responseState, n);
        }
        case Nr: {
          t.status = li;
          for (var o = !0, s = t.chunks, d = 0, h = t.children, x = 0; x < h.length; x++) {
            for (var I = h[x]; d < I.index; d++)
              R(e, s[d]);
            o = Ta(r, e, I);
          }
          for (; d < s.length - 1; d++)
            R(e, s[d]);
          return d < s.length && (o = B(e, s[d])), o;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Ta(r, e, t) {
      var n = t.boundary;
      if (n === null)
        return To(r, e, t);
      if (n.parentFlushed = !0, n.forceClientRender)
        return Yt(e, r.responseState, n.errorDigest, n.errorMessage, n.errorComponentStack), To(r, e, t), La(e, r.responseState);
      if (n.pendingTasks > 0) {
        n.rootSegmentID = r.nextSegmentId++, n.completedSegments.length > 0 && r.partialBoundaries.push(n);
        var o = n.id = en(r.responseState);
        return Fr(e, r.responseState, o), To(r, e, t), _r(e, r.responseState);
      } else {
        if (n.byteSize > r.progressiveChunkSize)
          return n.rootSegmentID = r.nextSegmentId++, r.completedBoundaries.push(n), Fr(e, r.responseState, n.id), To(r, e, t), _r(e, r.responseState);
        Oo(e, r.responseState);
        var s = n.completedSegments;
        if (s.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var d = s[0];
        return Ta(r, e, d), Lo(e, r.responseState);
      }
    }
    function as(r, e, t) {
      return xs(e, r.responseState, t.id, t.errorDigest, t.errorMessage, t.errorComponentStack);
    }
    function Ra(r, e, t) {
      return Ae(e, r.responseState, t.formatContext, t.id), Ta(r, e, t), lt(e, t.formatContext);
    }
    function is(r, e, t) {
      for (var n = t.completedSegments, o = 0; o < n.length; o++) {
        var s = n[o];
        ss(r, e, t, s);
      }
      return n.length = 0, Ei(e, r.responseState, t.id, t.rootSegmentID);
    }
    function al(r, e, t) {
      for (var n = t.completedSegments, o = 0; o < n.length; o++) {
        var s = n[o];
        if (!ss(r, e, t, s))
          return o++, n.splice(0, o), !1;
      }
      return n.splice(0, o), !0;
    }
    function ss(r, e, t, n) {
      if (n.status === li)
        return !0;
      var o = n.id;
      if (o === -1) {
        var s = n.id = t.rootSegmentID;
        if (s === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Ra(r, e, n);
      } else
        return Ra(r, e, n), hs(e, r.responseState, o);
    }
    function bi(r, e) {
      W();
      try {
        var t = r.completedRootSegment;
        t !== null && r.pendingRootTasks === 0 && (Ta(r, e, t), r.completedRootSegment = null, Da(e, r.responseState));
        var n = r.clientRenderedBoundaries, o;
        for (o = 0; o < n.length; o++) {
          var s = n[o];
          as(r, e, s);
        }
        n.splice(0, o);
        var d = r.completedBoundaries;
        for (o = 0; o < d.length; o++) {
          var h = d[o];
          is(r, e, h);
        }
        d.splice(0, o), ce(e), W(e);
        var x = r.partialBoundaries;
        for (o = 0; o < x.length; o++) {
          var I = x[o];
          if (!al(r, e, I)) {
            r.destination = null, o++, x.splice(0, o);
            return;
          }
        }
        x.splice(0, o);
        var G = r.completedBoundaries;
        for (o = 0; o < G.length; o++) {
          var Z = G[o];
          is(r, e, Z);
        }
        G.splice(0, o);
      } finally {
        ce(e), r.allPendingTasks === 0 && r.pingedTasks.length === 0 && r.clientRenderedBoundaries.length === 0 && r.completedBoundaries.length === 0 && (r.abortableTasks.size !== 0 && c("There was still abortable task at the root when we closed. This is a bug in React."), ae(e));
      }
    }
    function ls(r) {
      _(function() {
        return Si(r);
      });
    }
    function il(r, e) {
      if (r.status === Wr) {
        r.status = zr, D(e, r.fatalError);
        return;
      }
      if (r.status !== zr && r.destination === null) {
        r.destination = e;
        try {
          bi(r, e);
        } catch (t) {
          xo(r, t), wo(r, t);
        }
      }
    }
    function us(r, e) {
      try {
        var t = r.abortableTasks;
        t.forEach(function(n) {
          return yi(n, r, e);
        }), t.clear(), r.destination !== null && bi(r, r.destination);
      } catch (n) {
        xo(r, n), wo(r, n);
      }
    }
    function sl(r, e) {
      return new Promise(function(t, n) {
        var o, s, d = new Promise(function(le, we) {
          s = le, o = we;
        });
        function h() {
          var le = new ReadableStream(
            {
              type: "bytes",
              pull: function(we) {
                il(I, we);
              },
              cancel: function(we) {
                us(I);
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
        var I = ka(r, Qt(e ? e.identifierPrefix : void 0, e ? e.nonce : void 0, e ? e.bootstrapScriptContent : void 0, e ? e.bootstrapScripts : void 0, e ? e.bootstrapModules : void 0), In(e ? e.namespaceURI : void 0), e ? e.progressiveChunkSize : void 0, e ? e.onError : void 0, s, h, x, o);
        if (e && e.signal) {
          var G = e.signal, Z = function() {
            us(I, G.reason), G.removeEventListener("abort", Z);
          };
          G.addEventListener("abort", Z);
        }
        ls(I);
      });
    }
    fs.renderToReadableStream = sl, fs.version = p;
  }()), fs;
}
var Rl;
function au() {
  if (Rl) return Gr;
  Rl = 1;
  var b, p;
  return process.env.NODE_ENV === "production" ? (b = tu(), p = nu()) : (b = ru(), p = ou()), Gr.version = b.version, Gr.renderToString = b.renderToString, Gr.renderToStaticMarkup = b.renderToStaticMarkup, Gr.renderToNodeStream = b.renderToNodeStream, Gr.renderToStaticNodeStream = b.renderToStaticNodeStream, Gr.renderToReadableStream = p.renderToReadableStream, Gr;
}
var fl = au();
const hl = (b) => {
  const {
    onClose: p,
    children: y,
    open: C = !1,
    className: c = "",
    innerClass: F = ""
  } = b;
  let _ = null, T = null, v, k = "";
  return F && (k = F), C && (_ = y, v = "open", T = /* @__PURE__ */ E.jsx("div", { className: `common-drawer-outer ${c}`, onClick: p })), /* @__PURE__ */ E.jsxs(pl, { children: [
    T,
    /* @__PURE__ */ E.jsx("div", { className: `${k} common-drawer-inner ${v}`, children: _ })
  ] });
}, iu = ({ pageMeta: b, updatePageMetaState: p }) => {
  const y = (_, T) => {
    p(T, _.target.value);
  }, { name: C = "", status: c = "", slug: F = "" } = b;
  return /* @__PURE__ */ E.jsxs("div", { className: "drawer-contents", children: [
    /* @__PURE__ */ E.jsx("div", { className: "drawer-contents__option", children: /* @__PURE__ */ E.jsxs("label", { children: [
      "Page Name:",
      /* @__PURE__ */ E.jsx("br", {}),
      /* @__PURE__ */ E.jsx(
        "input",
        {
          className: "drawer-contents__input",
          name: "name",
          onChange: (_) => y(_, "name"),
          value: C
        }
      )
    ] }) }),
    /* @__PURE__ */ E.jsx("div", { className: "drawer-contents__option", children: /* @__PURE__ */ E.jsxs("label", { children: [
      "Page Status (drafts are only visible to admins):",
      /* @__PURE__ */ E.jsxs(
        "select",
        {
          name: "status",
          className: "base-form__select drawer-contents__input",
          onChange: (_) => y(_, "status"),
          value: c,
          children: [
            /* @__PURE__ */ E.jsx("option", { value: "draft", children: "Draft" }),
            /* @__PURE__ */ E.jsx("option", { value: "published", children: "Published" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ E.jsx("div", { className: "drawer-contents__option", children: /* @__PURE__ */ E.jsxs("label", { children: [
      "Page Url:",
      /* @__PURE__ */ E.jsx("br", {}),
      /* @__PURE__ */ E.jsx(
        "input",
        {
          className: "drawer-contents__input",
          name: "slug",
          onChange: (_) => y(_, "slug"),
          value: F
        }
      ),
      /* @__PURE__ */ E.jsx(
        "div",
        {
          style: { fontSize: "0.8em", color: "#dddddd", paddingTop: 4 },
          children: 'Set to "/" to make this homepage'
        }
      )
    ] }) })
  ] });
}, zt = (b = null, p = !1) => {
  let y = Wl(_a);
  if (!y)
    return p ? {
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
  let C = y.editorState, c = [];
  b.indexOf(".") > -1 ? c = b.split(".") : c = [b];
  for (let _ = 0; _ < c.length; _++) {
    let T = c[_];
    if (!C || typeof C != "object" && !Array.isArray(C))
      break;
    if (T.indexOf("[") > -1) {
      let v = T.split("["), k = v[0], W = parseInt(v[1].replace("]", ""));
      if (!C[k])
        break;
      C = C[k][W];
    } else
      C = C[c[_]];
  }
  return {
    ...y,
    setState: (_) => {
      let T = _o(y.editorState), v = T;
      for (let k = 0; k < c.length; k++) {
        let W = c[k];
        if (W.indexOf("[") > -1) {
          let R = W.split("["), B = R[0], ce = parseInt(R[1].replace("]", ""));
          v[B] = _o(v[B]) || [], v[B][ce] = _o(_);
          break;
        }
        k === c.length - 1 ? v[W] = _o(_) : (v[W] = _o(v[W]) || {}, v = v[W]);
      }
      y.setState(T);
    },
    editorState: C
  };
}, _o = (b) => Array.isArray(b) ? [...b] : typeof b == "object" ? { ...b } : b, Xu = (b) => (p) => {
  const { editorState: y, editing: C, setState: c } = zt(p.sectionName);
  return /* @__PURE__ */ E.jsx(b, { ...y, editing: C, setState: c, ...p });
}, Ju = (b = null) => {
  const p = zt(b).editorState;
  return [p == null ? void 0 : p.editorState, p == null ? void 0 : p.setState, p == null ? void 0 : p.editing];
}, Zu = (b = null, p) => ({ ...zt(b).editorState, ...p }), Qu = (b) => (p) => /* @__PURE__ */ E.jsx(_a.Consumer, { children: (y) => /* @__PURE__ */ E.jsx(b, { ...p, editorContext: y }) }), _a = Jl(null), Fl = (b, p, y) => (C) => {
  const c = { ...p, [b]: C };
  y(c);
}, Zt = [];
for (let b = 0; b < 256; ++b)
  Zt.push((b + 256).toString(16).slice(1));
function su(b, p = 0) {
  return (Zt[b[p + 0]] + Zt[b[p + 1]] + Zt[b[p + 2]] + Zt[b[p + 3]] + "-" + Zt[b[p + 4]] + Zt[b[p + 5]] + "-" + Zt[b[p + 6]] + Zt[b[p + 7]] + "-" + Zt[b[p + 8]] + Zt[b[p + 9]] + "-" + Zt[b[p + 10]] + Zt[b[p + 11]] + Zt[b[p + 12]] + Zt[b[p + 13]] + Zt[b[p + 14]] + Zt[b[p + 15]]).toLowerCase();
}
let ul;
const lu = new Uint8Array(16);
function uu() {
  if (!ul) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ul = crypto.getRandomValues.bind(crypto);
  }
  return ul(lu);
}
const cu = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), _l = { randomUUID: cu };
function Pl(b, p, y) {
  var c;
  if (_l.randomUUID && !b)
    return _l.randomUUID();
  b = b || {};
  const C = b.random ?? ((c = b.rng) == null ? void 0 : c.call(b)) ?? uu();
  if (C.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return C[6] = C[6] & 15 | 64, C[8] = C[8] & 63 | 128, su(C);
}
const du = (b, p) => {
  let y = { ...b };
  y.menus = { ...b.menus };
  const { optionMenu: C, componentUUID: c } = p.payload;
  return y.menus[c] = C, y;
}, fu = {
  SET_OPTION_MENU: du
}, pu = (b, p) => {
  const y = fu[p.type], C = { ...b };
  return y ? y(C, p) : b;
}, ki = (b) => {
  var Qe, gt, At;
  const {
    sectionName: p = "children",
    tagName: y = "div",
    isRoot: C = !1,
    iframeRef: c,
    editing: F = void 0,
    editorOnly: _,
    ...T
  } = b, [v, k] = Tn(!1), [W, R] = Xn.useReducer(pu, {
    menus: {}
  }), B = zt(p), ce = Xn.useRef(null), [ae, ne] = Tn(null), [z, A] = Tn(null), [D, U] = Tn(!1), $ = Xn.useRef({}), [H, O] = Tn({}), X = Xn.useRef(null), [ie, Y] = Tn(""), Pe = (ue) => (fe) => {
    ue == 0 && ($.current = {}), $.current[ue] != fe && ($.current[ue] = fe);
  }, ke = (ue) => W.menus[ue], je = (ue, fe) => {
    R({
      type: "SET_OPTION_MENU",
      payload: {
        optionMenu: fe,
        componentUUID: ue
      }
    });
  }, de = ((ue) => ue ? Object.keys(ue).sort(
    (fe, ee) => {
      var re, pe;
      return ((re = ue[fe]) == null ? void 0 : re.displayName) > ((pe = ue[ee]) == null ? void 0 : pe.displayName) ? 1 : -1;
    }
  ) : [])(B == null ? void 0 : B.componentList), {
    editorState: De = [],
    previewing: Se,
    renderFlags: He,
    editorOptions: q
  } = B;
  let { editing: Ce } = B;
  F !== void 0 && (Ce = F);
  let et = !1;
  if (De && De.length > 0)
    for (let ue = 0; ue < De.length; ue++)
      De[ue].uuid || (et = !0);
  Yr(() => {
    if (et) {
      let ue = [...De];
      for (let fe = 0; fe < De.length; fe++)
        De[fe].uuid || (ue[fe] = { ...De[fe], uuid: Pl() });
      B.setState(ue);
    }
  }, []);
  let Be = De, xe = De || [], It = null;
  const at = (ue) => (fe) => {
    let ee = [...xe];
    fe.preventDefault(), fe.stopPropagation();
    const re = ee.findIndex((pe) => pe.uuid == ue);
    ee.splice(re, 1), B.setState(ee);
  }, Ne = (ue) => (fe) => {
    let ee = [...xe];
    fe.preventDefault(), fe.stopPropagation();
    const re = ee.findIndex((Te) => Te.uuid == ue);
    if (re == 0) return;
    let pe = ee[re];
    ee[re] = ee[re - 1], ee[re - 1] = pe, B.setState(ee);
  }, Ee = (ue) => (fe) => {
    let ee = [...xe];
    fe.preventDefault(), fe.stopPropagation();
    const re = ee.findIndex((Te) => Te.uuid == ue);
    if (re == xe.length - 1) return;
    let pe = ee[re];
    ee[re] = ee[re + 1], ee[re + 1] = pe, B.setState(ee);
  };
  if (Be) {
    const ue = gu(B, Pe, Ce);
    It = hu({
      componentData: Be,
      renderFlags: He,
      editing: Ce,
      context: B,
      moveUp: Ne,
      moveDown: Ee,
      currentChildren: xe,
      removeComponent: at,
      getComp: ue,
      buttonRenderState: (fe) => [ke(fe), (ee) => je(fe, ee)]
    });
  }
  const { componentList: bt, viewportDimensions: Ge } = B, ut = (ue) => {
    let fe = [...xe];
    k(!1);
    let ee = ue;
    ee || (ee = ue || de[0]), fe.push({ comp: ee, props: {}, uuid: Pl() }), B.setState(fe);
  };
  let ht = null;
  if (Ce && !(He != null && He.noAdd) && (ht = /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    /* @__PURE__ */ E.jsx("div", { className: "unb-comp-section__add-component", onClick: () => k(!0) }),
    /* @__PURE__ */ E.jsxs(hl, { open: v, className: "component-drawer", onClose: () => k(!1), children: [
      /* @__PURE__ */ E.jsx("h1", { className: "component-drawer__h1", children: "Insert Component" }),
      /* @__PURE__ */ E.jsxs("label", { children: [
        "Search:",
        /* @__PURE__ */ E.jsx("input", { placeholder: "search", type: "text", value: ie, onChange: (ue) => Y(ue.target.value) })
      ] }),
      /* @__PURE__ */ E.jsx("div", { className: "componeent-drawer__component-list", children: de.map((ue) => {
        const fe = bt[ue], ee = fe.displayName ? fe.displayName : fe, re = fe.description;
        return ie && ee.toLowerCase().componentNameOf(ie.toLowerCase()) == -1 ? null : /* @__PURE__ */ E.jsxs("div", { onClick: () => ut(ue), className: "component-drawer__component", children: [
          ee,
          re && /* @__PURE__ */ E.jsx("div", { className: "component-drawer__description", children: re })
        ] }, ue);
      }) })
    ] })
  ] })), Yr(() => {
    var ue, fe;
    if (ce && ce.current) {
      let ee = c.current, re = [];
      if ((ue = q == null ? void 0 : q.pageOptions) != null && ue.scripts && ((fe = q.pageOptions.scripts) == null ? void 0 : fe.length) > 0)
        for (let pe of q.pageOptions.scripts) {
          const Te = () => new Promise((Ye) => {
            const ze = ee.contentDocument.createElement("script");
            ze.src = pe, ee.contentDocument.head.appendChild(ze), ze.onload = () => Ye(), ze.onerror = () => Ye();
          });
          re.push(Te);
        }
      new Promise(async (pe) => {
        for (let Te = 0; Te < re.length; Te++)
          await re[Te]();
        pe(!0);
      }).then(() => {
        var pe, Te;
        (pe = q == null ? void 0 : q.pageOptions) != null && pe.js && ((Te = q.pageOptions.js) == null ? void 0 : Te.length) > 0 && q.pageOptions.js.forEach((Ye) => {
          const ze = ee.contentDocument.createElement("script");
          ze.textContent = Ye, ee.contentDocument.body.appendChild(ze);
        });
      });
    }
  }, [ce.current]), Yr(() => {
    if (c && c.current && Ge) {
      const { zoom: ue, width: fe, height: ee } = Ge;
      c.current.style.zoom = `${ue / 100}`, c.current.contentDocument.body.style.minWidth = `${fe - 20 / ue * 100}px`, c.current.contentDocument.body.style.minHeight = `${ee - 20 / ue * 100}px`;
    }
  }, [ae, Ge]), Yr(
    () => {
      if (!$.current) return;
      const ue = () => {
        if ($.current)
          for (let fe in $.current) {
            const ee = $.current[fe];
            if (!ee) continue;
            let re = ee.nextSibling;
            const pe = { x: 1e9, y: 1e9, bottom: -1e7, right: -1e7 };
            for (; re && !(re != null && re.classList.contains("content-section-controls__wrapper")) && !(re != null && re.classList.contains("unb-comp-section__add-component")); )
              (re == null ? void 0 : re.getBoundingClientRect()) && (pe.x = Math.min(pe.x, re.offsetLeft), pe.y = Math.min(pe.y, re.offsetTop), pe.bottom = Math.max(pe.bottom, re.offsetTop + re.offsetHeight), pe.right = Math.max(pe.right, re.offsetLeft + re.offsetWidth)), re = re == null ? void 0 : re.nextSibling;
            ee.style.width = `${pe.right - pe.x}px`, ee.style.height = `${pe.bottom - pe.y}px`, ee.style.position = "absolute", ee.style.left = `${pe.x}px`, ee.style.top = `${pe.y}px`;
          }
      };
      return window.addEventListener("resize", ue), setTimeout(ue, 10), () => {
        window.removeEventListener("resize", ue);
      };
    },
    [
      De,
      $.current,
      Ge,
      ae,
      ce.current,
      Ce,
      D,
      z
    ]
  ), Yr(() => {
    X.current != null && X.current.addEventListener("mousedown", (ue) => {
      ue.preventDefault(), ue.stopPropagation();
      let fe = { x: ue.clientX, y: ue.clientY };
      Ge.width, Ge.height, Ge.width, Ge.height;
      let ee = (Te) => {
        Te.preventDefault(), Te.stopPropagation();
        let Ye = { x: Te.clientX - fe.x, y: Te.clientY - fe.y };
        fe = { x: Te.clientX, y: Te.clientY }, B.updateViewportDimension("width", Ye.x, !0), B.updateViewportDimension("height", Ye.y, !0);
      }, re = (Te) => {
        Te.preventDefault(), Te.stopPropagation(), Te.buttons == 1 ? ee(Te) : pe(Te);
      }, pe = (Te) => {
        Te.preventDefault(), Te.stopPropagation();
        let Ye = { x: Te.clientX - fe.x, y: Te.clientY - fe.y };
        fe = { x: Te.clientX, y: Te.clientY }, B.updateViewportDimension("width", Ye.x, !0), B.updateViewportDimension("height", Ye.y, !0), -window.removeEventListener("mousemove", ee), window.removeEventListener("mouseup", pe), window.removeEventListener("mousein", re);
      };
      return window.addEventListener("mousemove", ee), window.addEventListener("mouseup", pe), window.addEventListener("mousein", re), () => {
        window.removeEventListener("mousemove", ee), window.removeEventListener("mouseup", pe), window.removeEventListener("mousein", re);
      };
    });
  }, [D]), et)
    return null;
  let tt = /* @__PURE__ */ E.jsx(mu, { editing: Ce, children: /* @__PURE__ */ E.jsxs(y, { ...T, children: [
    It,
    ht
  ] }) }), Et = (Qe = q == null ? void 0 : q.pageOptions) == null ? void 0 : Qe.renderInIframe;
  if (Et === void 0 && (Et = !0), C && Et) {
    let ue = "<!doctype HTML>", fe;
    (gt = q == null ? void 0 : q.pageOptions) != null && gt.href ? (fe = q.pageOptions.href, ue = void 0) : (At = q == null ? void 0 : q.pageOptions) != null && At.pageHtml && (ue = q.pageOptions.pageHtml, fe = void 0), tt = /* @__PURE__ */ E.jsxs(
      "div",
      {
        className: "page-editor__viewport-holder",
        style: {
          width: Ge.width * Ge.zoom / 100,
          height: Ge.height * Ge.zoom / 100
        },
        children: [
          /* @__PURE__ */ E.jsx(
            "iframe",
            {
              className: "page-editor__viewport-iframe",
              src: fe,
              srcDoc: ue,
              onLoad: async (ee) => {
                var Te, Ye, ze, nt, xt, Dt;
                const re = ee.currentTarget;
                if (!re.contentDocument || !re.contentDocument.head) return;
                if (c && c.current != re && (c.current = re), !re.contentDocument.head != ce.current) {
                  ce.current = re.contentDocument.head;
                  const Lt = document.createElement("style"), rt = (await import("./unb-editor-CEbrN8Ez.mjs")).default;
                  Lt.textContent = rt, re.contentDocument.head.appendChild(Lt), (Te = q == null ? void 0 : q.pageOptions) != null && Te.css && ((Ye = q.pageOptions.css) == null ? void 0 : Ye.length) > 0 && q.pageOptions.css.forEach((wt) => {
                    const Mt = document.createElement("style");
                    Mt.textContent = wt, re.contentDocument.head.appendChild(Mt);
                  }), (ze = q == null ? void 0 : q.pageOptions) != null && ze.stylesheets && ((nt = q.pageOptions.stylesheets) == null ? void 0 : nt.length) > 0 && q.pageOptions.stylesheets.forEach((wt) => {
                    const Mt = document.createElement("link");
                    Mt.rel = "stylesheet", Mt.href = wt, re.contentDocument.head.appendChild(Mt);
                  });
                }
                let pe;
                (xt = q == null ? void 0 : q.pageOptions) != null && xt.documentRoot ? typeof q.pageOptions.documentRoot == "function" ? pe = q.pageOptions.documentRoot(re) : typeof q.pageOptions.documentRoot == "string" ? pe = re.contentDocument.querySelector(q.pageOptions.documentRoot) : q.pageOptions.documentRoot instanceof HTMLElement && (pe = q.pageOptions.documentRoot) : pe = re.contentDocument.body, ae != pe && ((Dt = q == null ? void 0 : q.pageOptions) != null && Dt.clearContainer && (pe.innerHTML = ""), ne(pe), U(!0));
              },
              children: ae && Ql(tt, ae)
            },
            "iframe"
          ),
          /* @__PURE__ */ E.jsx("div", { ref: X, className: "page-editor__viewport-handle" })
        ]
      }
    );
  }
  return tt;
}, hu = ({
  componentData: b,
  renderFlags: p,
  editing: y,
  context: C,
  moveUp: c,
  moveDown: F,
  currentChildren: _,
  removeComponent: T,
  getComp: v,
  buttonRenderState: k
}) => b.map((W, R) => {
  let B = null;
  return y && C.componentList[W.comp] && (C.componentList[W.comp].displayName ? C.componentList[W.comp].displayName : W.comp, B = [], p != null && p.noRearrange || (R > 0 && B.push(
    /* @__PURE__ */ E.jsx("button", { onClick: c(W.uuid), children: "⬆️" }, `${W.uuid}-up-button`)
  ), R < _.length - 1 && B.push(
    /* @__PURE__ */ E.jsx(
      "button",
      {
        onClick: F(W.uuid),
        children: "⬇️"
      },
      `${W.uuid}-down-button`
    )
  )), p != null && p.noAdd || B.push(
    /* @__PURE__ */ E.jsx(
      "button",
      {
        className: "content-section-controls__delete-button",
        onClick: T(W.uuid),
        children: "X"
      },
      `${W.comp}-delete-button`
    )
  )), v({
    data: W,
    uuid: W.uuid,
    index: R,
    optionButtons: B,
    buttonRenderState: k(W.uuid)
  });
}), gu = (b, p, y = void 0) => ({ data: C, uuid: c, index: F, optionButtons: _, buttonRenderState: T }) => {
  const v = b.componentList[C.comp], [k, W] = T;
  if (!v) return null;
  const R = b.componentList[C.comp].comp;
  let { key: B, ...ce } = C.props;
  return y === void 0 && (y = b.editing), /* @__PURE__ */ E.jsxs(
    _a.Provider,
    {
      value: { ...yu(b, F), editing: y },
      children: [
        /* @__PURE__ */ E.jsx(
          vu,
          {
            optionButtons: _,
            componentName: v.displayName,
            editing: y,
            previewing: b.previewing,
            buttonRender: k,
            setWrapperDomNode: p(c)
          },
          c + "-slot-wrapper"
        ),
        /* @__PURE__ */ E.jsx(
          R,
          {
            ...ce,
            editing: y,
            componentName: v.displayName,
            previewing: b.previewing,
            setButtonRender: W
          },
          c + "-comp"
        )
      ]
    },
    c + "-slot-provider"
  );
}, vu = ({ componentName: b, optionButtons: p, ...y }) => {
  const { editing: C, previewing: c, buttonRender: F, setWrapperDomNode: _ } = y;
  if (!C)
    return _(null), y.children;
  let T = null;
  F && typeof F == "function" && (T = F(), T && (T = /* @__PURE__ */ E.jsx("div", { className: "content-section-controls__extra-buttons-wrapper", children: /* @__PURE__ */ E.jsx("div", { className: "content-section-controls__extra-buttons", children: T }) })));
  const v = /* @__PURE__ */ E.jsxs("div", { className: "content-section-controls__inner", children: [
    /* @__PURE__ */ E.jsx("strong", { className: "content-section-controls__component-type", children: b }),
    p,
    T
  ] });
  return /* @__PURE__ */ E.jsxs("div", { className: "content-section-controls__wrapper", ref: _, children: [
    v,
    y.children
  ] });
}, mu = (b) => {
  const { editing: p, children: y, setWrapperDomNode: C, key: c } = b;
  return p ? /* @__PURE__ */ E.jsx("div", { className: "content-section-controls__wrapper --unb-content-section", ref: C, children: y }) : /* @__PURE__ */ E.jsx(E.Fragment, { children: y });
}, yu = (b, p, y) => {
  const C = _o(b);
  let c;
  return c = (F, _) => {
    const T = _o(b.editorState);
    _ ? T[p].props = {
      ...T[p].props,
      [_]: F
    } : T[p].props = {
      ...T[p].props,
      ...F
    }, b.setState(T);
  }, C.editorState = b.editorState[p].props, C.setState = c, C;
}, Su = ({ color: b = "white" }) => /* @__PURE__ */ E.jsxs("svg", { width: "24px", height: "24px", strokeWidth: "1.5", viewBox: "0 0 24 24", fill: "none", stroke: b, xmlns: "http://www.w3.org/2000/svg", color: "#000000", children: [
  /* @__PURE__ */ E.jsx("path", { d: "M9 9L4 4M4 4V8M4 4H8", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ E.jsx("path", { d: "M15 9L20 4M20 4V8M20 4H16", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ E.jsx("path", { d: "M9 15L4 20M4 20V16M4 20H8", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ E.jsx("path", { d: "M15 15L20 20M20 20V16M20 20H16", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
] }), bu = ({ color: b = "#ffffff" }) => /* @__PURE__ */ E.jsxs("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", strokeWidth: "1.5", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: b, stroke: b, children: [
  /* @__PURE__ */ E.jsx("path", { d: "M11 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V12", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ E.jsx("path", { d: "M2 7L22 7", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ E.jsx("path", { d: "M5 5.01L5.01 4.99889", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ E.jsx("path", { d: "M8 5.01L8.01 4.99889", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ E.jsx("path", { d: "M11 5.01L11.01 4.99889", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ E.jsx("path", { d: "M21.6665 16.6667C21.0477 15.097 19.6346 14 17.9903 14C16.2319 14 14.7378 15.2545 14.1969 17", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ E.jsx("path", { d: "M19.9952 16.7723H21.4002C21.7316 16.7723 22.0002 16.5036 22.0002 16.1723V14.55", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ E.jsx("path", { d: "M14.3337 19.3333C14.9525 20.903 16.3657 22 18.01 22C19.7684 22 21.2624 20.7455 21.8033 19", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ E.jsx("path", { d: "M16.005 19.2277H14.6001C14.2687 19.2277 14.0001 19.4964 14.0001 19.8277V21.45", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
] }), xu = (b) => {
  const [p, y] = Tn({
    editorState: b.pageData ? b.pageData : { children: [] },
    pageMetaState: b.pageMeta ? b.pageMeta : { name: "", slug: "", status: "draft" },
    preview: !1,
    changes: !1,
    advancedOpen: !1,
    pageEditorDrawerOpen: !1
  }), [C, c] = Tn({ width: 1200, height: 800, zoom: 100 }), F = Wt.useRef(null), _ = Wt.useRef({ width: 0, height: 0, viewport: { width: C.width, height: C.height } }), T = () => {
    var oe;
    (oe = F.current) != null && oe.requestFullscreen && (document.fullscreenElement ? document.exitFullscreen() : F.current.requestFullscreen());
  }, v = (oe, de, De = !1) => {
    _.current.viewport[oe] = parseInt(de), c((Se) => De ? { ...Se, [oe]: Se[oe] + parseInt(de) } : { ...Se, [oe]: parseInt(de) });
  }, k = Wt.useRef(null);
  Wt.useEffect(() => {
    if (window.addEventListener("beforeunload", (oe) => {
      if (p.changes) {
        var de = "It looks like you have been editing something. If you leave before saving, your changes will be lost.";
        return (oe || window.event).returnValue = de, de;
      }
    }), k.current) {
      const de = k.current.getBoundingClientRect();
      _.current.viewport.width = de.width, _.current.viewport.height = de.height;
    }
    window.addEventListener(
      "resize",
      () => {
        F.current;
      }
    );
  }, []);
  const W = p.editorState, { preview: R } = p, {
    streams: B,
    renderFlags: ce = {},
    exportState: ae,
    editorOptions: ne,
    editing: z = !R
  } = b;
  let A = Mu;
  ce && (A = { ...A, ...ce });
  const D = (oe) => {
    y({ ...p, ...oe, changes: !0 });
  }, U = () => {
    y({ ...p, pageEditorDrawerOpen: !p.pageEditorDrawerOpen });
  }, $ = (oe, de) => {
    y({
      ...p,
      pageMetaState: {
        ...p.pageMetaState,
        [oe]: de
      }
    });
  };
  let H = (oe = {}, de = !0) => {
    var De, Se;
    if ((De = ne == null ? void 0 : ne.pageOptions) != null && De.wrapperComponent) {
      if (de && !((Se = ne == null ? void 0 : ne.pageOptions) != null && Se.includeWrapperInRender)) return /* @__PURE__ */ E.jsx(ki, { isRoot: !0, ...oe });
      const He = ne.pageOptions.wrapperComponent;
      return /* @__PURE__ */ E.jsx(He, { children: /* @__PURE__ */ E.jsx(ki, { isRoot: !0, ...oe }) });
    }
    return /* @__PURE__ */ E.jsx(ki, { isRoot: !0, ...oe });
  };
  const O = () => W.children.map((oe) => {
    const de = b.componentList[oe.comp];
    if (!de) return "";
    const De = b.componentList[oe.comp].comp;
    let Se = oe.props;
    return {
      comp: oe.comp,
      markup: fl.renderToString(
        /* @__PURE__ */ E.jsx(
          De,
          {
            ...Se,
            editing: !1,
            componentName: de.displayName,
            previewing: !0,
            setButtonRender: (He) => {
            },
            children: oe.children
          }
        )
      ).replaceAll(/[class|style]\=\"\""/, "")
    };
  }), X = (oe = !1) => oe ? O() : fl.renderToString(
    /* @__PURE__ */ E.jsx(
      _a.Provider,
      {
        value: {
          setState: Fl("editorState", p, D),
          editorState: W,
          componentList: b.componentList,
          editorOptions: { ...ne, pageOptions: { ...ne.pageOptions, renderInIframe: !1 } },
          plugins: b.plugins,
          editing: !1,
          previewing: !0,
          renderFlags: A,
          streams: B,
          viewportDimensions: C,
          updateViewportDimension: v
        },
        children: H()
      }
    )
  );
  ae && ae(() => p, y, X);
  const ie = () => {
    if (!b.onSave) {
      console.log("No onSave function connected to app");
      return;
    }
    let oe = [];
    A.individualComponents && (oe = X(!0));
    const de = X(), De = p.editorState, Se = p.pageMetaState, He = { pageState: De, pageMarkup: de, metaState: Se, componentsMarkup: oe };
    b.onSave && b.onSave(He);
  };
  let Y = null;
  b.onSave && (Y = /* @__PURE__ */ E.jsxs(
    "a",
    {
      className: "page-editor__button",
      onClick: ie,
      "data-testid": "save-page-button",
      children: [
        "Save ",
        p.changes ? "*" : "",
        " "
      ]
    }
  ));
  let Pe = null;
  B && (Pe = B.getComponent());
  let ke = "";
  A.inlineOptionBar && (ke += "page-editor__menu--inline");
  const je = (oe) => {
    if (oe && F.current != oe) {
      const de = oe.getBoundingClientRect();
      _.current.width = de.width, _.current.height = de.height;
    }
    F.current = oe;
  };
  return /* @__PURE__ */ E.jsxs("div", { ref: je, className: "page-editor__inner", children: [
    /* @__PURE__ */ E.jsx(
      hl,
      {
        open: p.pageEditorDrawerOpen,
        onClose: U,
        children: /* @__PURE__ */ E.jsx(
          iu,
          {
            pageMeta: p.pageMetaState,
            updatePageMetaState: $
          }
        )
      }
    ),
    /* @__PURE__ */ E.jsxs("div", { className: "page-editor__menu " + ke, children: [
      /* @__PURE__ */ E.jsx(
        "a",
        {
          className: "page-editor__button",
          onClick: (oe) => {
            oe.preventDefault(), oe.stopPropagation(), y({ ...p, preview: !R });
          },
          children: R ? "Edit" : "Preview"
        }
      ),
      Y,
      /* @__PURE__ */ E.jsx("a", { className: "page-editor__button", title: "Refresh Page", onClick: () => {
        var oe, de;
        (de = (oe = k == null ? void 0 : k.current) == null ? void 0 : oe.contentWindow) == null || de.location.reload();
      }, children: /* @__PURE__ */ E.jsx(bu, {}) }),
      /* @__PURE__ */ E.jsx("a", { className: "page-editor__button", title: "Full Screen", onClick: T, children: /* @__PURE__ */ E.jsx(Su, {}) }),
      /* @__PURE__ */ E.jsx("a", { className: "page-editor__button", onClick: U, children: "Options" }),
      /* @__PURE__ */ E.jsxs("div", { className: "page-editor__dimensions", children: [
        /* @__PURE__ */ E.jsx("input", { type: "number", step: 100, onChange: (oe) => v("width", parseInt(oe.target.value)), value: C.width }),
        /* @__PURE__ */ E.jsx("strong", { children: "px" }),
        "X",
        /* @__PURE__ */ E.jsx("input", { type: "number", step: 100, onChange: (oe) => v("height", parseInt(oe.target.value)), value: C.height }),
        /* @__PURE__ */ E.jsx("strong", { children: "px" }),
        /* @__PURE__ */ E.jsx("input", { type: "number", step: 20, min: 20, max: 200, onChange: (oe) => v("zoom", parseInt(oe.target.value)), value: C.zoom }),
        /* @__PURE__ */ E.jsx("strong", { children: "%" })
      ] })
    ] }),
    /* @__PURE__ */ E.jsxs(
      _a.Provider,
      {
        value: {
          setState: Fl("editorState", p, D),
          editorState: W,
          componentList: b.componentList,
          plugins: b.plugins,
          editing: !R,
          previewing: R,
          renderFlags: A,
          streams: B,
          contextualPageData: b.contextualPageData,
          editorOptions: ne,
          viewportDimensions: C,
          updateViewportDimension: v
        },
        children: [
          H({ key: "root-content-section", iframeRef: k }, !1),
          /* @__PURE__ */ E.jsx("div", { children: /* @__PURE__ */ E.jsx(Pe, {}) })
        ]
      },
      "root-provider"
    )
  ] });
}, gl = (b) => {
  const {
    sectionName: p,
    tagName: y = "div",
    label: C = null,
    min: c,
    max: F,
    step: _ = 1,
    hidden: T = !0,
    ...v
  } = b;
  let { current: k = typeof c == "number" ? c : 1 } = b;
  const W = y, { editorState: R, editing: B, setState: ce } = zt(p);
  R !== void 0 && (k = R);
  const ae = (ne) => {
    let z = parseFloat(ne.currentTarget.value);
    z || (z = 0), c !== void 0 && z < c && (z = c), F !== void 0 && z > F && (z = F), ce(z);
  };
  return B ? C ? /* @__PURE__ */ E.jsx(W, { ...v, children: /* @__PURE__ */ E.jsxs("label", { children: [
    /* @__PURE__ */ E.jsx("span", { children: C }),
    /* @__PURE__ */ E.jsx(
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
  ] }) }, "num-input-wrapper") : /* @__PURE__ */ E.jsx(W, { children: /* @__PURE__ */ E.jsx(
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
  ) }, "num-input-wrapper") : T ? null : /* @__PURE__ */ E.jsx(W, { ...v, children: R });
}, $l = (b) => {
  const { sectionName: p, children: y, editing: C } = b, c = zt(p);
  let { previewing: F, editing: _ } = c || { previewing: !1, editing: !1 };
  const T = { ...c };
  return T.editorState || (T.editorState = {}), C !== void 0 && (T.editing = C), /* @__PURE__ */ E.jsx(_a.Provider, { value: T, children: y });
}, wu = (b) => {
  const {
    sectionName: p,
    current: y,
    label: C,
    hidden: c = !1,
    tagName: F = "div",
    ..._
  } = b, T = F, { editorState: v, editing: k, setState: W } = zt(), R = (B) => {
    W({ ...v, [p]: B.currentTarget.checked });
  };
  return k ? /* @__PURE__ */ E.jsx(T, { children: /* @__PURE__ */ E.jsxs("label", { children: [
    /* @__PURE__ */ E.jsx("span", { children: C }),
    /* @__PURE__ */ E.jsx(
      "input",
      {
        type: "checkbox",
        onChange: R,
        checked: y
      }
    )
  ] }) }) : c ? null : /* @__PURE__ */ E.jsx(T, { ..._, children: y ? "true" : "false" });
}, vl = (b) => {
  const { children: p, editing: y } = b, { editorState: C, editing: c } = zt(), F = y || c;
  return /* @__PURE__ */ E.jsx(Vl, { hide: !F, children: p });
}, Ku = (b) => {
  const { children: p, editing: y } = b, { editorState: C, editing: c } = zt(), F = y || c;
  return /* @__PURE__ */ E.jsx(Vl, { hide: F, children: p });
}, Vl = (b) => {
  const { children: p, hide: y = !1 } = b;
  return y ? null : /* @__PURE__ */ E.jsx(E.Fragment, { children: p });
}, ku = (b) => {
  const { text: p = "", count: y } = b;
  return /* @__PURE__ */ E.jsx("div", { className: "section__column", children: /* @__PURE__ */ E.jsx(ki, {}) });
}, Cu = (b) => {
  const { count: p = 3, responsive: y = !1, setButtonRender: C } = b;
  let c = ku, F = [], _;
  Xn.useEffect(() => {
    C && C(() => /* @__PURE__ */ E.jsxs(Xn.Fragment, { children: [
      /* @__PURE__ */ E.jsx(
        gl,
        {
          hidden: !0,
          label: "Number of Columns: ",
          sectionName: "count",
          current: p,
          min: 2,
          max: 6
        }
      ),
      /* @__PURE__ */ E.jsx(
        wu,
        {
          label: "Responsive Columns",
          sectionName: "responsive"
        }
      )
    ] }));
  }, []), p && (_ = `section__inner-div column-section ${y ? "--responsive" : "--fixed"} --cols-${p}`);
  for (var T = 0; T < p; T++) {
    let v = "column" + T;
    F.push(
      /* @__PURE__ */ E.jsx(
        $l,
        {
          sectionName: v,
          children: /* @__PURE__ */ E.jsx(c, { ...b })
        },
        T
      )
    );
  }
  return /* @__PURE__ */ E.jsxs(Xn.Fragment, { children: [
    /* @__PURE__ */ E.jsx(vl, { children: /* @__PURE__ */ E.jsx("div", { className: "section__columns__heading" }) }),
    /* @__PURE__ */ E.jsx("section", { className: "section", children: /* @__PURE__ */ E.jsx("div", { className: _, children: F }) })
  ] });
}, Il = (b) => {
  const {
    value: p,
    sectionName: y,
    label: C,
    tagName: c = "div",
    hidden: F = !1,
    inputClass: _ = {},
    children: T = null,
    ...v
  } = b, k = c, { editorState: W, editing: R, setState: B } = zt(y);
  let ce = p || W || "";
  const ae = (ne) => {
    B(ne.currentTarget.value);
  };
  return R ? C ? (
    // @ts-ignore
    /* @__PURE__ */ E.jsx(k, { ..._, ...v, children: /* @__PURE__ */ E.jsxs("label", { children: [
      /* @__PURE__ */ E.jsx("span", { children: C }),
      /* @__PURE__ */ E.jsx("input", { type: "text", onChange: ae, value: ce })
    ] }) })
  ) : (
    // @ts-ignore
    /* @__PURE__ */ E.jsx(k, { ..._, ...v, children: /* @__PURE__ */ E.jsx("input", { type: "text", onChange: ae, value: ce }) })
  ) : F ? null : (
    // @ts-ignore
    /* @__PURE__ */ E.jsxs(k, { ..._, ...v, children: [
      W[y],
      T
    ] })
  );
}, Eu = (b) => {
  const {
    sectionName: p,
    options: y,
    current: C,
    optionLabels: c = null,
    label: F = !1,
    hidden: _ = !1,
    tagName: T = "div",
    selectList: v = !1,
    ...k
  } = b, W = T, { editorState: R, editing: B, setState: ce } = zt(), ae = (z) => {
    ce({ ...R, [p]: z.currentTarget.value });
  };
  let ne = "";
  return v ? ne = v : Array.isArray(y) ? (ne = [], y.forEach((z, A) => {
    const D = c ? c[A] : z;
    ne.push(
      /* @__PURE__ */ E.jsx("option", { value: z, className: "", children: D }, A)
    );
  })) : y && (ne = [], Object.entries(y).forEach(([z, A], D) => {
    let U = A, $ = z;
    c && ($ = c[z]), ne.push(
      /* @__PURE__ */ E.jsx("option", { value: U, className: "", children: $ }, D)
    );
  })), B ? F ? /* @__PURE__ */ E.jsx(W, { children: /* @__PURE__ */ E.jsxs("label", { children: [
    /* @__PURE__ */ E.jsx("span", { children: F }),
    /* @__PURE__ */ E.jsx("select", { onChange: ae, value: C, children: ne })
  ] }) }) : /* @__PURE__ */ E.jsx(W, { children: /* @__PURE__ */ E.jsx("select", { onChange: ae, value: C, children: ne }) }) : _ ? null : /* @__PURE__ */ E.jsx(W, { ...k, children: R[p] });
}, Tu = ({
  bem: b,
  bemPrefix: p,
  classFunction: y
}) => new Proxy(
  { __compCache: {}, context: Wt.createContext({ bem: b, bemPrefix: p }) },
  { get: (C, c) => {
    const F = c;
    if (c == "BEM")
      return C.BEM || (C.BEM = C.context.Provider), C.BEM;
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
    if (!C.__compCache[F]) {
      const _ = b, T = p;
      C.__compCache[F] = (v) => {
        let {
          bem: k,
          bemPrefix: W,
          bemName: R,
          editing: B,
          sectionName: ce,
          ...ae
        } = v;
        const ne = Wl(C.context);
        let z = _, A = T;
        return typeof (ne == null ? void 0 : ne.bem) == "boolean" && k === void 0 && (z = ne.bem), ne != null && ne.bemPrefix && W == null && (A = ne.bemPrefix), /* @__PURE__ */ E.jsx(
          Yl,
          {
            tagName: F,
            bem: z,
            editing: B,
            bemPrefix: A,
            sectionName: ce,
            bemName: R || ce || void 0,
            classFunction: y,
            ...v
          }
        );
      };
    }
    return C.__compCache[F];
  } }
), Gl = Tu({ bem: !0 }), Yl = ({
  placeholder: b = "",
  ref: p = null,
  className: y = "",
  sectionName: C = void 0,
  tagName: c = "div",
  textOnly: F = !1,
  bem: _ = !1,
  bemName: T = "",
  editing: v = void 0,
  bemPrefix: k = "",
  classFunction: W = null,
  children: R = void 0,
  ...B
}) => {
  B = { ...B };
  const [ce, ae] = Tn(!1);
  T || (T = C || c);
  let ne = b;
  b || (ne = `${c} placeholder`);
  let z = C;
  C || (z = `${c}`);
  const A = yl(null), D = zt(z), U = D == null ? void 0 : D.editorState;
  let { editing: $ = !1 } = D;
  v !== void 0 && ($ = v);
  const H = (He, q) => {
    O.deleteContents();
    const Ce = O.createContextualFragment(q);
    O.insertNode(Ce), je();
  }, [O, X] = Tn(), ie = (He, q) => {
    const Ce = A.current;
    if (!Ce) return;
    const et = Ce.ownerDocument.getSelection();
    if (!et || et.rangeCount === 0) return !1;
    if (Ce.contains(et.anchorNode) && Ce.contains(et.focusNode)) {
      let Be = et.getRangeAt(0);
      q(!0), X(Be);
    }
  }, Y = B.insertButtons;
  Yr(() => {
    if (Y && B.setButtonRender) {
      const He = Y == null ? void 0 : Y.map(
        (q) => /* @__PURE__ */ E.jsx("button", { onClick: (Ce) => ie(Ce, q.setModalOpen), children: q.buttonText })
      );
      B.setButtonRender(() => /* @__PURE__ */ E.jsx(E.Fragment, { children: He }));
    }
  }, [Y]);
  const ke = yl(U || null), je = (He) => {
    let q = A.current.innerHTML;
    F && (q = A.current.innerText, A.current.innerHTML = q), q !== ke.current && D.setState(q);
  };
  Yr(() => {
    if (!U && !ke.current && B.children) {
      const He = fl.renderToString(B.children);
      D.setState(He), ke.current = He;
    }
  }, []);
  let oe = y;
  _ && (k ? oe = `${k}__${T} ${oe}` : oe = `${T} ${oe}`), W && typeof W == "function" && (oe = W(c, B));
  const de = {};
  $ && (oe += " unbContentEditable", de.onInput = je, de["data-ph"] = ne, de.ref = A, de.contentEditable = !0, de.suppressContentEditableWarning = !0, ce && (de.dangerouslySetInnerHTML = { __html: ke.current })), (!$ || ke.current) && (de.dangerouslySetInnerHTML = { __html: ke.current }, B.children = void 0);
  let De = c, Se = B.style ? B.style : {};
  if (c == "rawText")
    if ($)
      De = "div", Se = de.style ? { ...de.style } : {}, Se.display = "inline-block", Se.padding = 0, Se.margin = 0, Se.width = "auto", Se.transform = "none", Se.border = "none", Se.boxShadow = "none", Se.outline = "none", Se.overflow = "visible", Se.lineHeight = "inherit", Se.fontFamily = "inherit", Se.fontSize = "inherit", Se.fontWeight = "inherit", Se.fontStyle = "inherit", Se.color = "inherit", Se.backgroundColor = "inherit", Se.textAlign = "inherit", Se.textDecoration = "inherit", Se.textTransform = "inherit", Se.minWidth = "50px", Se.minHeight = "100%", de.style = Se;
    else
      return /* @__PURE__ */ E.jsx(E.Fragment, { children: ke.current });
  return /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    /* @__PURE__ */ E.jsx(
      De,
      {
        className: oe,
        suppressContentEditableWarning: !0,
        ...de,
        ...B
      }
    ),
    Y == null ? void 0 : Y.map((He) => He.makeModal(H))
  ] });
}, Ru = (b) => {
  const {
    headingType: p = "h1",
    text: y = "",
    customClass: C = "",
    editing: c = !0,
    setButtonRender: F
  } = b, _ = ["h1", "h2", "h3", "h4", "h5", "h6"];
  return Yr(() => {
    F(() => /* @__PURE__ */ E.jsxs(pl, { children: [
      /* @__PURE__ */ E.jsx(
        Eu,
        {
          sectionName: "headingType",
          options: _,
          label: "Heading Type"
        }
      ),
      /* @__PURE__ */ E.jsx(Il, { sectionName: "text", label: "Heading Text" }),
      /* @__PURE__ */ E.jsx(Il, { sectionName: "customClass", label: "Custom CSS Class" })
    ] }));
  }, []), /* @__PURE__ */ E.jsx("header", { children: /* @__PURE__ */ E.jsx(
    Yl,
    {
      sectionName: "text",
      tagName: p,
      placeholder: "Heading",
      className: C
    }
  ) });
}, Fu = (b) => {
  const { text: p = "", customClass: y = "", sectionName: C, setButtonRender: c } = b;
  return /* @__PURE__ */ E.jsx(Gl.p, { ...b });
}, _u = (b) => {
  const { sectionName: p = "space" } = b, { editorState: y, editing: C, setState: c } = zt(p), { space: F = y || 10 } = b, _ = Xn.useRef(null), T = Xn.useRef({ startY: 0, startHeight: 0, mouseDown: !1 });
  let v = null;
  const k = (ce) => {
    ce.target === _.current && (T.current.startY = ce.clientY || ce.touches[0].clientY, T.current.startHeight = F || 0, (!T.current.startHeight || T.current.startHeight < 0) && (T.current.startHeight = 0), T.current.mouseDown = !0);
  }, W = (ce) => {
    if (!T.current.mouseDown) return;
    let ne = (ce.clientY || ce.touches[0].clientY) - T.current.startY;
    const z = Math.max(0, T.current.startHeight + ne);
    c(z);
  }, R = (ce) => {
    if (!T.current.mouseDown) return;
    let ne = (ce.clientY || ce.touches[0].clientY) - T.current.startY;
    const z = Math.max(0, T.current.startHeight + ne);
    c(z), T.current.mouseDown = !1;
  }, B = () => {
    _.current && (_.current.removeEventListener("mousedown", k), _.current.removeEventListener("touchstart", k), _.current.removeEventListener("mousemove", W), _.current.removeEventListener("touchmove", W), _.current.removeEventListener("mouseup", R), _.current.removeEventListener("touchend", R), _.current.removeEventListener("mouseleave", R), _.current.removeEventListener("touchcancel", R), _.current.removeEventListener("touchleave", R));
  };
  if (Xn.useEffect(() => B, []), C) {
    const ce = (ae) => {
      ae != _.current && (B(), ae && (ae.addEventListener("mousedown", k), ae.addEventListener("touchstart", k), ae.addEventListener("mousemove", W), ae.addEventListener("touchmove", W), ae.addEventListener("mouseup", R), ae.addEventListener("touchend", R), ae.addEventListener("mouseleave", R), ae.addEventListener("touchcancel", R), ae.addEventListener("touchleave", R)), _.current = ae);
    };
    v = /* @__PURE__ */ E.jsx("div", { ref: ce, style: { height: F }, className: "spacer-handle", children: /* @__PURE__ */ E.jsx(
      gl,
      {
        sectionName: p,
        className: "spacer-input",
        current: F,
        max: 1e3,
        min: 0
      },
      "num-select"
    ) });
  } else
    return /* @__PURE__ */ E.jsx("div", { style: { height: `${F}px` } });
  return /* @__PURE__ */ E.jsx(Xn.Fragment, { children: /* @__PURE__ */ E.jsx("div", { className: "unbeditor-spacer", style: { height: `${F}px` }, children: v }) });
}, Al = {
  "column-with-text": { displayName: "Columns With Text", comp: Cu },
  heading: { displayName: "Heading", comp: Ru },
  paragraph: { displayName: "Paragraph", comp: Fu },
  spacer: { displayName: "Spacer", comp: _u }
};
var Fa = {}, Dl;
function Pu() {
  if (Dl) return Fa;
  Dl = 1;
  var b = Zl;
  if (process.env.NODE_ENV === "production")
    Fa.createRoot = b.createRoot, Fa.hydrateRoot = b.hydrateRoot;
  else {
    var p = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Fa.createRoot = function(y, C) {
      p.usingClientEntryPoint = !0;
      try {
        return b.createRoot(y, C);
      } finally {
        p.usingClientEntryPoint = !1;
      }
    }, Fa.hydrateRoot = function(y, C, c) {
      p.usingClientEntryPoint = !0;
      try {
        return b.hydrateRoot(y, C, c);
      } finally {
        p.usingClientEntryPoint = !1;
      }
    };
  }
  return Fa;
}
var Iu = Pu();
class Au {
  constructor() {
    this.streams = {}, this.createStreamComponent();
  }
  addStream(p, y) {
    this.streams[p] = { name: p, stream: y };
  }
  addStreams(p) {
    this.streams = { ...this.streams, ...p };
  }
  setStreams(p) {
    this.streams = p;
  }
  /**
   * gets a list of all the stream names
   */
  get streamList() {
    return Object.keys(this.streams);
  }
  createStreamComponent() {
    this.component = (p) => /* @__PURE__ */ E.jsx("div", { children: "hello" });
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
  getStream(p, y, C) {
    return this.streams[p] && this.streams[p].stream.get(y, C), !1;
  }
}
class Du extends Au {
  constructor() {
    super(...arguments), this.setCurrentStream = null, this.currentCallback = null, this._setCurrentStreamName = null;
  }
  getStream(p, y, C, c) {
    if (this.streams[p]) {
      const { selectMax: F = 1, ..._ } = C || {};
      this._setCurrentStreamName(p), this.streams[p].stream.get((T) => {
        this.currentCallback = y, this.setCurrentStream(T);
      }, _, c);
    }
    return !1;
  }
  addStream(p, y, C = void 0) {
    this.streams[p] = { name: p, stream: y, streamOptions: C };
  }
  addStreams(p) {
    this.streams = { ...this.streams, ...p };
  }
  setStreams(p) {
    this.streams = p;
  }
  // it is important that this only be rendered once per component
  createStreamComponent() {
    this.component = () => {
      var _, T, v, k, W, R;
      const [p, y] = Tn([]), [C, c] = Tn(null);
      this.setCurrentStream = y, this._setCurrentStreamName = c;
      let F = null;
      if ((T = (_ = this.streams[C]) == null ? void 0 : _.streamOptions) != null && T.streamAdapter) {
        const B = this.streams[C].streamOptions.streamAdapter;
        F = /* @__PURE__ */ E.jsx(
          B,
          {
            entries: p,
            select: (ce) => {
              this._setCurrentStreamName(null), this.currentCallback(ce);
            }
          }
        );
      } else if ((k = (v = this.streams[C]) == null ? void 0 : v.streamOptions) != null && k.individualPreviewComponent) {
        const B = (R = (W = this.streams[C]) == null ? void 0 : W.streamOptions) == null ? void 0 : R.individualPreviewComponent;
        F = p.map((ce) => /* @__PURE__ */ E.jsx("div", { children: /* @__PURE__ */ E.jsx(
          B,
          {
            model: ce,
            select: (ae) => {
              this._setCurrentStreamName(null), this.currentCallback(ae);
            }
          }
        ) }));
      } else this.streams[C] && (F = p.map((B) => /* @__PURE__ */ E.jsx("div", { children: /* @__PURE__ */ E.jsx(
        "img",
        {
          style: { width: 50 },
          src: B.src,
          onClick: () => {
            this._setCurrentStreamName(null), this.currentCallback([B]);
          }
        }
      ) })));
      return /* @__PURE__ */ E.jsx("div", { children: /* @__PURE__ */ E.jsx(
        hl,
        {
          open: !!C,
          onClose: () => this._setCurrentStreamName(!1),
          children: F
        }
      ) });
    };
  }
}
const Mu = {
  individualComponents: !1,
  noRearrange: !1,
  noAdd: !1,
  inlineOptionBar: !0,
  disableFullscreen: !1,
  disableRefresh: !1
};
class qu {
  constructor(p = {}) {
    this._renderFunction = null, this.currentRoot = null, this._editorOptions = null, this._editorOptions = p;
    const {
      components: y = Al,
      plugins: C = null
    } = p;
    this.components = y, this.plugins = C ? [...C] : [];
  }
  get streamDriver() {
    return this._streamDriver;
  }
  processOptions(p) {
    if (p.components && (this.components = p.components), p.plugins && (this.plugins = p.plugins), this._editorOptions) {
      const y = { ...this._editorOptions, ...p };
      p.pageOptions && (y.pageOptions = { ...this._editorOptions.pageOptions, ...p.pageOptions }), p.renderFlags && (y.renderFlags = { ...this._editorOptions.renderFlags, ...p.renderFlags }), this._editorOptions = y;
    } else
      this._editorOptions = p;
  }
  start(p, y) {
    y && this.processOptions(y);
    const { pageData: C = { children: [] }, pageMeta: c, onSave: F, renderFlags: _, contextualPageData: T } = this._editorOptions;
    this._streamDriver = this.createStreamDriver();
    const v = (W) => {
      const [R, B] = Tn(1);
      return this._setForceRefreshVal = B, /* @__PURE__ */ E.jsx("div", { className: "page-editor", "data-testid": "page-editor", children: /* @__PURE__ */ E.jsx(
        xu,
        {
          componentList: this.components,
          plugins: this.plugins,
          editorOptions: this._editorOptions,
          pageData: C,
          pageMeta: c,
          onSave: F,
          renderFlags: _,
          streams: this._streamDriver,
          exportState: (ce, ae, ne) => {
            this._externalSetState = ae, this._externalGetState = ce, this._externalGetMarkup = ne;
          },
          contextualPageData: T
        },
        "page-editor"
      ) });
    }, k = /* @__PURE__ */ E.jsx(v, {});
    this.currentRoot || (this.currentRoot = Iu.createRoot(p), this._renderFunction = (W) => {
      this.currentRoot.render(W);
    }), this._renderFunction(k);
  }
  createStreamDriver() {
    return new Du();
  }
  addComponents(p, y = null, C = null) {
    if (Array.isArray(p) && "comp" in p) {
      this.components = p;
      return;
    }
    if (!p) {
      console.error(
        "trying to call the add components function without a properly formatted components list or component"
      );
      return;
    }
    y && (this.components[y] = {
      displayName: C,
      comp: p
    }, this.refreshComponentListInEditor());
  }
  insertComponent(p, y = {}) {
    if (!this._externalSetState) return null;
    this._externalSetState((C, c) => {
      let F = {
        ...C,
        editorState: {
          ...C.editorState,
          children: [...C.editorState.children]
        }
      };
      return F.editorState.children.push({
        comp: p,
        props: { ...y }
      }), F;
    });
  }
  getDefaultComponents() {
    return Al;
  }
  refreshComponentListInEditor() {
    this._setForceRefreshVal && this._setForceRefreshVal((p) => p + 1);
  }
  //saving and loading
  getEditorState() {
    var p;
    return this._externalGetState ? (p = this._externalGetState()) == null ? void 0 : p.editorState : null;
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
const Ou = ({ children: b, modalOpen: p, setModalOpen: y }) => {
  console.log({ modalOpen: p });
  const C = (c) => {
    c.stopPropagation();
  };
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: p ? /* @__PURE__ */ E.jsx("div", { onClick: () => y(!1), className: "common-modal__outer", children: /* @__PURE__ */ E.jsx("div", { onClick: C, className: "common-modal__inner", children: b }) }) : /* @__PURE__ */ E.jsx(E.Fragment, {}) });
}, ec = () => {
  const [b, p] = Wt.useState(!1);
  return {
    modalOpen: b,
    setModalOpen: p,
    ModalOuterComponent: Ou
  };
}, tc = (b) => {
  const { sectionName: p, defaultValue: y, ...C } = b, { editorState: c } = zt(p);
  let F = c || y || "";
  return b.transform && (F = b.transform(F)), /* @__PURE__ */ E.jsx(pl, { children: F });
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
  get(p, y, C) {
  }
}
class nc extends ml {
  constructor(p, y = null) {
    super(), this.url = p, this._callback = y;
  }
  get(p, y, C) {
    switch ((C || "GET").toUpperCase()) {
      case "GET": {
        fetch(this.getAPIUrl(y), { method: "get" }).then((F) => F.json()).then((F) => {
          let _ = F;
          this._callback && (_ = this._callback(F)), p(_);
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
          this._callback && (_ = this._callback(F)), p(_);
        });
        break;
      }
    }
  }
  getAPIUrl(p) {
    return this.url + "?" + new URLSearchParams(p).toString();
  }
}
class rc extends ml {
  constructor(p = null) {
    super(), this._streamSelect = null, this._streams = {}, this._streamSelect = p;
  }
  addStream(p, y) {
    this._streams[p] = { stream: y, name: p };
  }
  adaptStream(p, y, C) {
    this._streams[p] = { stream: y, name: p, callback: C };
  }
  get(p, y) {
    let C = null;
    if (this._streamSelect ? C = this._streamSelect(
      y,
      Object.values(this._streams).map((F) => ({
        name: F.name,
        stream: F.stream
      }))
    ) : C = Object.values(this._streams)[0].name, !C || !this._streams[C])
      throw new Lu();
    const c = this._streams[C];
    if (c.callback) {
      c.stream.get((F) => {
        p(c.callback(F));
      });
      return;
    }
    c.stream.get(p);
  }
}
class Lu extends Error {
  constructor(p = "") {
    super(
      `No sub-streams have been added to this group stream. Use addStream() before the editor starts ${p}`
    );
  }
}
class oc extends ml {
  constructor(p) {
    super(), this.getValues = p;
  }
  get(p, y) {
    p(this.getValues(y));
  }
}
const ac = ({
  streamName: b,
  sectionName: p,
  selectMax: y = 1,
  label: C = "Select From Stream"
}) => {
  const c = zt(p), F = c.streams;
  if (!c.editing) return null;
  const _ = () => {
    F.getStream(b, (T) => {
      c.setState(T[0]);
    }, { selectMax: y });
  };
  return /* @__PURE__ */ E.jsx("button", { onClick: _, children: C });
}, Ml = (b) => {
  const { sectionName: p = "repeater", rowSectionName: y = "row", addLabel: C = "Row", hideAddButton: c = !1, editing: F, hideCounter: _ = !1, ...T } = b, v = "count", k = zt(p), { editorState: W } = k || { editorState: null }, R = F !== void 0 ? F : k == null ? void 0 : k.editing, { count: B = W && W[v] ? W[v] : 1 } = T, ce = (A, D) => Wt.Children.map(D, (U) => {
    if (Wt.isValidElement(U)) {
      let $ = W && W[y] && W[y][A] ? W[y][A] : {};
      return Wt.cloneElement(U, { repeaterIndex: A, ...$ });
    }
    return U;
  });
  let ae = [];
  for (let A = 0; A < B; A++) {
    let D = ce(A, b.children);
    ae.push(/* @__PURE__ */ E.jsx($l, { sectionName: `${p}.${y}[${A}]`, children: D }, A));
  }
  let ne = null;
  R && !c && (ne = /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxs("button", { onClick: () => {
      const A = B + 1;
      k.setState({ ...W, [v]: A });
    }, children: [
      "+ ",
      C
    ] }),
    /* @__PURE__ */ E.jsxs("button", { onClick: () => {
      const A = Math.max(B - 1, 1);
      k.setState({ ...W, [v]: A });
    }, children: [
      "- ",
      C
    ] })
  ] }));
  let z = null;
  return R && !_ && (z = /* @__PURE__ */ E.jsx(gl, { label: "Count:", min: 1, sectionName: `${p}.${v}` })), b.TagName ? /* @__PURE__ */ E.jsxs(b.TagName, { ...T, children: [
    z,
    ae
  ] }) : /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    z,
    ae,
    ne
  ] });
}, ic = (b) => {
  const { children: p, tabNames: y, renderTab: C } = b, [c, F] = Wt.useState(0);
  return /* @__PURE__ */ E.jsxs("div", { className: "tabs", children: [
    /* @__PURE__ */ E.jsx("ul", { children: /* @__PURE__ */ E.jsx(Ml, { hideCounter: !0, addLabel: "Tab", sectionName: "tabs", children: /* @__PURE__ */ E.jsx(ju, { setTab: F, currentTab: c }) }) }),
    /* @__PURE__ */ E.jsx(Ml, { hideCounter: !0, hideAddButton: !0, sectionName: "tabs", children: /* @__PURE__ */ E.jsx(Bu, { currentTab: c, renderTab: C }) })
  ] });
}, ju = ({ repeaterIndex: b = 0, currentTab: p, setTab: y }) => {
  const C = b === p, c = {
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
  return C && (c.fontWeight = "bold", c.color = "black", c.top = 0, c.paddingBottom = 4, c.marginTop = 0, c.background = "white"), /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    /* @__PURE__ */ E.jsx(vl, { children: /* @__PURE__ */ E.jsx("input", { type: "radio", checked: C, onClick: (F) => y(b) }) }),
    /* @__PURE__ */ E.jsx(Gl.li, { style: c, onClick: (F) => y(b), sectionName: "tabName", placeholder: "Tab Name" })
  ] });
}, Bu = ({ repeaterIndex: b = 0, currentTab: p, renderTab: y }) => {
  const C = { display: "block", zIndex: 2, position: "relative", background: "white", padding: 16 };
  return b !== p && (C.display = "none"), /* @__PURE__ */ E.jsxs("div", { style: C, children: [
    /* @__PURE__ */ E.jsx(vl, { children: /* @__PURE__ */ E.jsxs("strong", { children: [
      "Tab ",
      b + 1
    ] }) }),
    y ? y(b) : /* @__PURE__ */ E.jsx(ki, {})
  ] });
};
var bn = {}, Ol;
function Uu() {
  if (Ol) return bn;
  Ol = 1;
  var b = bn && bn.__assign || function() {
    return b = Object.assign || function(H) {
      for (var O, X = 1, ie = arguments.length; X < ie; X++) {
        O = arguments[X];
        for (var Y in O) Object.prototype.hasOwnProperty.call(O, Y) && (H[Y] = O[Y]);
      }
      return H;
    }, b.apply(this, arguments);
  }, p = bn && bn.__createBinding || (Object.create ? function(H, O, X, ie) {
    ie === void 0 && (ie = X);
    var Y = Object.getOwnPropertyDescriptor(O, X);
    (!Y || ("get" in Y ? !O.__esModule : Y.writable || Y.configurable)) && (Y = { enumerable: !0, get: function() {
      return O[X];
    } }), Object.defineProperty(H, ie, Y);
  } : function(H, O, X, ie) {
    ie === void 0 && (ie = X), H[ie] = O[X];
  }), y = bn && bn.__setModuleDefault || (Object.create ? function(H, O) {
    Object.defineProperty(H, "default", { enumerable: !0, value: O });
  } : function(H, O) {
    H.default = O;
  }), C = bn && bn.__importStar || function(H) {
    if (H && H.__esModule) return H;
    var O = {};
    if (H != null) for (var X in H) X !== "default" && Object.prototype.hasOwnProperty.call(H, X) && p(O, H, X);
    return y(O, H), O;
  }, c = bn && bn.__rest || function(H, O) {
    var X = {};
    for (var ie in H) Object.prototype.hasOwnProperty.call(H, ie) && O.indexOf(ie) < 0 && (X[ie] = H[ie]);
    if (H != null && typeof Object.getOwnPropertySymbols == "function")
      for (var Y = 0, ie = Object.getOwnPropertySymbols(H); Y < ie.length; Y++)
        O.indexOf(ie[Y]) < 0 && Object.prototype.propertyIsEnumerable.call(H, ie[Y]) && (X[ie[Y]] = H[ie[Y]]);
    return X;
  };
  Object.defineProperty(bn, "__esModule", { value: !0 });
  var F = C(Wt), _ = 89, T = 90, v = 77, k = 57, W = 219, R = 222, B = 192, ce = 100, ae = 3e3, ne = typeof window < "u" && "navigator" in window && /Win/i.test(navigator.platform), z = typeof window < "u" && "navigator" in window && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), A = "npm__react-simple-code-editor__textarea", D = (
    /* CSS */
    `
/**
 * Reset the text fill color so that placeholder is visible
 */
.`.concat(A, `:empty {
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
  .`).concat(A, ` {
    color: transparent !important;
  }

  .`).concat(A, `::selection {
    background-color: #accef7 !important;
    color: transparent !important;
  }
}
`)
  ), U = F.forwardRef(function(O, X) {
    var ie = O.autoFocus, Y = O.disabled, Pe = O.form, ke = O.highlight, je = O.ignoreTabKey, oe = je === void 0 ? !1 : je, de = O.insertSpaces, De = de === void 0 ? !0 : de, Se = O.maxLength, He = O.minLength, q = O.name, Ce = O.onBlur, et = O.onClick, Be = O.onFocus, xe = O.onKeyDown, It = O.onKeyUp, at = O.onValueChange, Ne = O.padding, Ee = Ne === void 0 ? 0 : Ne, bt = O.placeholder, Ge = O.preClassName, ut = O.readOnly, ht = O.required, tt = O.style, Et = O.tabSize, Qe = Et === void 0 ? 2 : Et, gt = O.textareaClassName, At = O.textareaId, ue = O.value, fe = c(O, ["autoFocus", "disabled", "form", "highlight", "ignoreTabKey", "insertSpaces", "maxLength", "minLength", "name", "onBlur", "onClick", "onFocus", "onKeyDown", "onKeyUp", "onValueChange", "padding", "placeholder", "preClassName", "readOnly", "required", "style", "tabSize", "textareaClassName", "textareaId", "value"]), ee = F.useRef({
      stack: [],
      offset: -1
    }), re = F.useRef(null), pe = F.useState(!0), Te = pe[0], Ye = pe[1], ze = {
      paddingTop: typeof Ee == "object" ? Ee.top : Ee,
      paddingRight: typeof Ee == "object" ? Ee.right : Ee,
      paddingBottom: typeof Ee == "object" ? Ee.bottom : Ee,
      paddingLeft: typeof Ee == "object" ? Ee.left : Ee
    }, nt = ke(ue), xt = function(te, Ue) {
      return te.substring(0, Ue).split(`
`);
    }, Dt = F.useCallback(function(te, Ue) {
      var be, _e, Ke;
      Ue === void 0 && (Ue = !1);
      var We = ee.current, ot = We.stack, Tt = We.offset;
      if (ot.length && Tt > -1) {
        ee.current.stack = ot.slice(0, Tt + 1);
        var Me = ee.current.stack.length;
        if (Me > ce) {
          var Rt = Me - ce;
          ee.current.stack = ot.slice(Rt, Me), ee.current.offset = Math.max(ee.current.offset - Rt, 0);
        }
      }
      var kt = Date.now();
      if (Ue) {
        var Ct = ee.current.stack[ee.current.offset];
        if (Ct && kt - Ct.timestamp < ae) {
          var Ft = /[^a-z0-9]([a-z0-9]+)$/i, vt = (be = xt(Ct.value, Ct.selectionStart).pop()) === null || be === void 0 ? void 0 : be.match(Ft), _t = (_e = xt(te.value, te.selectionStart).pop()) === null || _e === void 0 ? void 0 : _e.match(Ft);
          if (vt != null && vt[1] && (!((Ke = _t == null ? void 0 : _t[1]) === null || Ke === void 0) && Ke.startsWith(vt[1]))) {
            ee.current.stack[ee.current.offset] = b(b({}, te), { timestamp: kt });
            return;
          }
        }
      }
      ee.current.stack.push(b(b({}, te), { timestamp: kt })), ee.current.offset++;
    }, []), Lt = F.useCallback(function() {
      var te = re.current;
      if (te) {
        var Ue = te.value, be = te.selectionStart, _e = te.selectionEnd;
        Dt({
          value: Ue,
          selectionStart: be,
          selectionEnd: _e
        });
      }
    }, [Dt]), rt = function(te) {
      var Ue = re.current;
      Ue && (Ue.value = te.value, Ue.selectionStart = te.selectionStart, Ue.selectionEnd = te.selectionEnd, at == null || at(te.value));
    }, wt = function(te) {
      var Ue = re.current, be = ee.current.stack[ee.current.offset];
      be && Ue && (ee.current.stack[ee.current.offset] = b(b({}, be), { selectionStart: Ue.selectionStart, selectionEnd: Ue.selectionEnd })), Dt(te), rt(te);
    }, Mt = function() {
      var te = ee.current, Ue = te.stack, be = te.offset, _e = Ue[be - 1];
      _e && (rt(_e), ee.current.offset = Math.max(be - 1, 0));
    }, Rn = function() {
      var te = ee.current, Ue = te.stack, be = te.offset, _e = Ue[be + 1];
      _e && (rt(_e), ee.current.offset = Math.min(be + 1, Ue.length - 1));
    }, xn = function(te) {
      if (!(xe && (xe(te), te.defaultPrevented))) {
        te.key === "Escape" && te.currentTarget.blur();
        var Ue = te.currentTarget, be = Ue.value, _e = Ue.selectionStart, Ke = Ue.selectionEnd, We = (De ? " " : "	").repeat(Qe);
        if (te.key === "Tab" && !oe && Te)
          if (te.preventDefault(), te.shiftKey) {
            var ot = xt(be, _e), Tt = ot.length - 1, Me = xt(be, Ke).length - 1, Rt = be.split(`
`).map(function(Vt, Fn) {
              return Fn >= Tt && Fn <= Me && Vt.startsWith(We) ? Vt.substring(We.length) : Vt;
            }).join(`
`);
            if (be !== Rt) {
              var kt = ot[Tt];
              wt({
                value: Rt,
                // Move the start cursor if first line in selection was modified
                // It was modified only if it started with a tab
                selectionStart: kt != null && kt.startsWith(We) ? _e - We.length : _e,
                // Move the end cursor by total number of characters removed
                selectionEnd: Ke - (be.length - Rt.length)
              });
            }
          } else if (_e !== Ke) {
            var ot = xt(be, _e), Ct = ot.length - 1, Ft = xt(be, Ke).length - 1, kt = ot[Ct];
            wt({
              value: be.split(`
`).map(function(_n, w) {
                return w >= Ct && w <= Ft ? We + _n : _n;
              }).join(`
`),
              // Move the start cursor by number of characters added in first line of selection
              // Don't move it if it there was no text before cursor
              selectionStart: kt && /\S/.test(kt) ? _e + We.length : _e,
              // Move the end cursor by total number of characters added
              selectionEnd: Ke + We.length * (Ft - Ct + 1)
            });
          } else {
            var vt = _e + We.length;
            wt({
              // Insert tab character at caret
              value: be.substring(0, _e) + We + be.substring(Ke),
              // Update caret position
              selectionStart: vt,
              selectionEnd: vt
            });
          }
        else if (te.key === "Backspace") {
          var _t = _e !== Ke, yt = be.substring(0, _e);
          if (yt.endsWith(We) && !_t) {
            te.preventDefault();
            var vt = _e - We.length;
            wt({
              // Remove tab character at caret
              value: be.substring(0, _e - We.length) + be.substring(Ke),
              // Update caret position
              selectionStart: vt,
              selectionEnd: vt
            });
          }
        } else if (te.key === "Enter") {
          if (_e === Ke) {
            var nn = xt(be, _e).pop(), $t = nn == null ? void 0 : nn.match(/^\s+/);
            if ($t != null && $t[0]) {
              te.preventDefault();
              var gn = `
` + $t[0], vt = _e + gn.length;
              wt({
                // Insert indentation character at caret
                value: be.substring(0, _e) + gn + be.substring(Ke),
                // Update caret position
                selectionStart: vt,
                selectionEnd: vt
              });
            }
          }
        } else if (te.keyCode === k || te.keyCode === W || te.keyCode === R || te.keyCode === B) {
          var $e = void 0;
          te.keyCode === k && te.shiftKey ? $e = ["(", ")"] : te.keyCode === W ? te.shiftKey ? $e = ["{", "}"] : $e = ["[", "]"] : te.keyCode === R ? te.shiftKey ? $e = ['"', '"'] : $e = ["'", "'"] : te.keyCode === B && !te.shiftKey && ($e = ["`", "`"]), _e !== Ke && $e && (te.preventDefault(), wt({
            value: be.substring(0, _e) + $e[0] + be.substring(_e, Ke) + $e[1] + be.substring(Ke),
            // Update caret position
            selectionStart: _e,
            selectionEnd: Ke + 2
          }));
        } else (z ? (
          // Trigger undo with ⌘+Z on Mac
          te.metaKey && te.keyCode === T
        ) : (
          // Trigger undo with Ctrl+Z on other platforms
          te.ctrlKey && te.keyCode === T
        )) && !te.shiftKey && !te.altKey ? (te.preventDefault(), Mt()) : (z ? (
          // Trigger redo with ⌘+Shift+Z on Mac
          te.metaKey && te.keyCode === T && te.shiftKey
        ) : ne ? (
          // Trigger redo with Ctrl+Y on Windows
          te.ctrlKey && te.keyCode === _
        ) : (
          // Trigger redo with Ctrl+Shift+Z on other platforms
          te.ctrlKey && te.keyCode === T && te.shiftKey
        )) && !te.altKey ? (te.preventDefault(), Rn()) : te.keyCode === v && te.ctrlKey && (!z || te.shiftKey) && (te.preventDefault(), Ye(function(Vt) {
          return !Vt;
        }));
      }
    }, hn = function(te) {
      var Ue = te.currentTarget, be = Ue.value, _e = Ue.selectionStart, Ke = Ue.selectionEnd;
      Dt({
        value: be,
        selectionStart: _e,
        selectionEnd: Ke
      }, !0), at(be);
    };
    return F.useEffect(function() {
      Lt();
    }, [Lt]), F.useImperativeHandle(X, function() {
      return {
        get session() {
          return {
            history: ee.current
          };
        },
        set session(te) {
          ee.current = te.history;
        }
      };
    }, []), F.createElement(
      "div",
      b({}, fe, { style: b(b({}, $.container), tt) }),
      F.createElement("pre", b({ className: Ge, "aria-hidden": "true", style: b(b(b({}, $.editor), $.highlight), ze) }, typeof nt == "string" ? { dangerouslySetInnerHTML: { __html: nt + "<br />" } } : { children: nt })),
      F.createElement("textarea", { ref: function(te) {
        return re.current = te;
      }, style: b(b(b({}, $.editor), $.textarea), ze), className: A + (gt ? " ".concat(gt) : ""), id: At, value: ue, onChange: hn, onKeyDown: xn, onClick: et, onKeyUp: It, onFocus: Be, onBlur: Ce, disabled: Y, form: Pe, maxLength: Se, minLength: He, name: q, placeholder: bt, readOnly: ut, required: ht, autoFocus: ie, autoCapitalize: "off", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "data-gramm": !1 }),
      F.createElement("style", { dangerouslySetInnerHTML: { __html: D } })
    );
  }), $ = {
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
  return bn.default = U, bn;
}
var Hu = Uu();
const Nu = /* @__PURE__ */ zl(Hu);
var cl = { exports: {} }, Ll;
function Wu() {
  return Ll || (Ll = 1, function(b) {
    var p = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     *
     * @license MIT <https://opensource.org/licenses/MIT>
     * @author Lea Verou <https://lea.verou.me>
     * @namespace
     * @public
     */
    var y = function(C) {
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
        manual: C.Prism && C.Prism.manual,
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
        disableWorkerMessageHandler: C.Prism && C.Prism.disableWorkerMessageHandler,
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
          encode: function D(U) {
            return U instanceof v ? new v(U.type, D(U.content), U.alias) : Array.isArray(U) ? U.map(D) : U.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
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
          type: function(D) {
            return Object.prototype.toString.call(D).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(D) {
            return D.__id || Object.defineProperty(D, "__id", { value: ++F }), D.__id;
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
          clone: function D(U, $) {
            $ = $ || {};
            var H, O;
            switch (T.util.type(U)) {
              case "Object":
                if (O = T.util.objId(U), $[O])
                  return $[O];
                H = /** @type {Record<string, any>} */
                {}, $[O] = H;
                for (var X in U)
                  U.hasOwnProperty(X) && (H[X] = D(U[X], $));
                return (
                  /** @type {any} */
                  H
                );
              case "Array":
                return O = T.util.objId(U), $[O] ? $[O] : (H = [], $[O] = H, /** @type {Array} */
                /** @type {any} */
                U.forEach(function(ie, Y) {
                  H[Y] = D(ie, $);
                }), /** @type {any} */
                H);
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
          getLanguage: function(D) {
            for (; D; ) {
              var U = c.exec(D.className);
              if (U)
                return U[1].toLowerCase();
              D = D.parentElement;
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
          setLanguage: function(D, U) {
            D.className = D.className.replace(RegExp(c, "gi"), ""), D.classList.add("language-" + U);
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
            } catch (H) {
              var D = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(H.stack) || [])[1];
              if (D) {
                var U = document.getElementsByTagName("script");
                for (var $ in U)
                  if (U[$].src == D)
                    return U[$];
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
          isActive: function(D, U, $) {
            for (var H = "no-" + U; D; ) {
              var O = D.classList;
              if (O.contains(U))
                return !0;
              if (O.contains(H))
                return !1;
              D = D.parentElement;
            }
            return !!$;
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
          extend: function(D, U) {
            var $ = T.util.clone(T.languages[D]);
            for (var H in U)
              $[H] = U[H];
            return $;
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
          insertBefore: function(D, U, $, H) {
            H = H || /** @type {any} */
            T.languages;
            var O = H[D], X = {};
            for (var ie in O)
              if (O.hasOwnProperty(ie)) {
                if (ie == U)
                  for (var Y in $)
                    $.hasOwnProperty(Y) && (X[Y] = $[Y]);
                $.hasOwnProperty(ie) || (X[ie] = O[ie]);
              }
            var Pe = H[D];
            return H[D] = X, T.languages.DFS(T.languages, function(ke, je) {
              je === Pe && ke != D && (this[ke] = X);
            }), X;
          },
          // Traverse a language definition with Depth First Search
          DFS: function D(U, $, H, O) {
            O = O || {};
            var X = T.util.objId;
            for (var ie in U)
              if (U.hasOwnProperty(ie)) {
                $.call(U, ie, U[ie], H || ie);
                var Y = U[ie], Pe = T.util.type(Y);
                Pe === "Object" && !O[X(Y)] ? (O[X(Y)] = !0, D(Y, $, null, O)) : Pe === "Array" && !O[X(Y)] && (O[X(Y)] = !0, D(Y, $, ie, O));
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
        highlightAll: function(D, U) {
          T.highlightAllUnder(document, D, U);
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
        highlightAllUnder: function(D, U, $) {
          var H = {
            callback: $,
            container: D,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          T.hooks.run("before-highlightall", H), H.elements = Array.prototype.slice.apply(H.container.querySelectorAll(H.selector)), T.hooks.run("before-all-elements-highlight", H);
          for (var O = 0, X; X = H.elements[O++]; )
            T.highlightElement(X, U === !0, H.callback);
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
        highlightElement: function(D, U, $) {
          var H = T.util.getLanguage(D), O = T.languages[H];
          T.util.setLanguage(D, H);
          var X = D.parentElement;
          X && X.nodeName.toLowerCase() === "pre" && T.util.setLanguage(X, H);
          var ie = D.textContent, Y = {
            element: D,
            language: H,
            grammar: O,
            code: ie
          };
          function Pe(je) {
            Y.highlightedCode = je, T.hooks.run("before-insert", Y), Y.element.innerHTML = Y.highlightedCode, T.hooks.run("after-highlight", Y), T.hooks.run("complete", Y), $ && $.call(Y.element);
          }
          if (T.hooks.run("before-sanity-check", Y), X = Y.element.parentElement, X && X.nodeName.toLowerCase() === "pre" && !X.hasAttribute("tabindex") && X.setAttribute("tabindex", "0"), !Y.code) {
            T.hooks.run("complete", Y), $ && $.call(Y.element);
            return;
          }
          if (T.hooks.run("before-highlight", Y), !Y.grammar) {
            Pe(T.util.encode(Y.code));
            return;
          }
          if (U && C.Worker) {
            var ke = new Worker(T.filename);
            ke.onmessage = function(je) {
              Pe(je.data);
            }, ke.postMessage(JSON.stringify({
              language: Y.language,
              code: Y.code,
              immediateClose: !0
            }));
          } else
            Pe(T.highlight(Y.code, Y.grammar, Y.language));
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
        highlight: function(D, U, $) {
          var H = {
            code: D,
            grammar: U,
            language: $
          };
          if (T.hooks.run("before-tokenize", H), !H.grammar)
            throw new Error('The language "' + H.language + '" has no grammar.');
          return H.tokens = T.tokenize(H.code, H.grammar), T.hooks.run("after-tokenize", H), v.stringify(T.util.encode(H.tokens), H.language);
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
        tokenize: function(D, U) {
          var $ = U.rest;
          if ($) {
            for (var H in $)
              U[H] = $[H];
            delete U.rest;
          }
          var O = new R();
          return B(O, O.head, D), W(D, O, U, O.head, 0), ae(O);
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
          add: function(D, U) {
            var $ = T.hooks.all;
            $[D] = $[D] || [], $[D].push(U);
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
          run: function(D, U) {
            var $ = T.hooks.all[D];
            if (!(!$ || !$.length))
              for (var H = 0, O; O = $[H++]; )
                O(U);
          }
        },
        Token: v
      };
      C.Prism = T;
      function v(D, U, $, H) {
        this.type = D, this.content = U, this.alias = $, this.length = (H || "").length | 0;
      }
      v.stringify = function D(U, $) {
        if (typeof U == "string")
          return U;
        if (Array.isArray(U)) {
          var H = "";
          return U.forEach(function(Pe) {
            H += D(Pe, $);
          }), H;
        }
        var O = {
          type: U.type,
          content: D(U.content, $),
          tag: "span",
          classes: ["token", U.type],
          attributes: {},
          language: $
        }, X = U.alias;
        X && (Array.isArray(X) ? Array.prototype.push.apply(O.classes, X) : O.classes.push(X)), T.hooks.run("wrap", O);
        var ie = "";
        for (var Y in O.attributes)
          ie += " " + Y + '="' + (O.attributes[Y] || "").replace(/"/g, "&quot;") + '"';
        return "<" + O.tag + ' class="' + O.classes.join(" ") + '"' + ie + ">" + O.content + "</" + O.tag + ">";
      };
      function k(D, U, $, H) {
        D.lastIndex = U;
        var O = D.exec($);
        if (O && H && O[1]) {
          var X = O[1].length;
          O.index += X, O[0] = O[0].slice(X);
        }
        return O;
      }
      function W(D, U, $, H, O, X) {
        for (var ie in $)
          if (!(!$.hasOwnProperty(ie) || !$[ie])) {
            var Y = $[ie];
            Y = Array.isArray(Y) ? Y : [Y];
            for (var Pe = 0; Pe < Y.length; ++Pe) {
              if (X && X.cause == ie + "," + Pe)
                return;
              var ke = Y[Pe], je = ke.inside, oe = !!ke.lookbehind, de = !!ke.greedy, De = ke.alias;
              if (de && !ke.pattern.global) {
                var Se = ke.pattern.toString().match(/[imsuy]*$/)[0];
                ke.pattern = RegExp(ke.pattern.source, Se + "g");
              }
              for (var He = ke.pattern || ke, q = H.next, Ce = O; q !== U.tail && !(X && Ce >= X.reach); Ce += q.value.length, q = q.next) {
                var et = q.value;
                if (U.length > D.length)
                  return;
                if (!(et instanceof v)) {
                  var Be = 1, xe;
                  if (de) {
                    if (xe = k(He, Ce, D, oe), !xe || xe.index >= D.length)
                      break;
                    var Ee = xe.index, It = xe.index + xe[0].length, at = Ce;
                    for (at += q.value.length; Ee >= at; )
                      q = q.next, at += q.value.length;
                    if (at -= q.value.length, Ce = at, q.value instanceof v)
                      continue;
                    for (var Ne = q; Ne !== U.tail && (at < It || typeof Ne.value == "string"); Ne = Ne.next)
                      Be++, at += Ne.value.length;
                    Be--, et = D.slice(Ce, at), xe.index -= Ce;
                  } else if (xe = k(He, 0, et, oe), !xe)
                    continue;
                  var Ee = xe.index, bt = xe[0], Ge = et.slice(0, Ee), ut = et.slice(Ee + bt.length), ht = Ce + et.length;
                  X && ht > X.reach && (X.reach = ht);
                  var tt = q.prev;
                  Ge && (tt = B(U, tt, Ge), Ce += Ge.length), ce(U, tt, Be);
                  var Et = new v(ie, je ? T.tokenize(bt, je) : bt, De, bt);
                  if (q = B(U, tt, Et), ut && B(U, q, ut), Be > 1) {
                    var Qe = {
                      cause: ie + "," + Pe,
                      reach: ht
                    };
                    W(D, U, $, q.prev, Ce, Qe), X && Qe.reach > X.reach && (X.reach = Qe.reach);
                  }
                }
              }
            }
          }
      }
      function R() {
        var D = { value: null, prev: null, next: null }, U = { value: null, prev: D, next: null };
        D.next = U, this.head = D, this.tail = U, this.length = 0;
      }
      function B(D, U, $) {
        var H = U.next, O = { value: $, prev: U, next: H };
        return U.next = O, H.prev = O, D.length++, O;
      }
      function ce(D, U, $) {
        for (var H = U.next, O = 0; O < $ && H !== D.tail; O++)
          H = H.next;
        U.next = H, H.prev = U, D.length -= O;
      }
      function ae(D) {
        for (var U = [], $ = D.head.next; $ !== D.tail; )
          U.push($.value), $ = $.next;
        return U;
      }
      if (!C.document)
        return C.addEventListener && (T.disableWorkerMessageHandler || C.addEventListener("message", function(D) {
          var U = JSON.parse(D.data), $ = U.language, H = U.code, O = U.immediateClose;
          C.postMessage(T.highlight(H, T.languages[$], $)), O && C.close();
        }, !1)), T;
      var ne = T.util.currentScript();
      ne && (T.filename = ne.src, ne.hasAttribute("data-manual") && (T.manual = !0));
      function z() {
        T.manual || T.highlightAll();
      }
      if (!T.manual) {
        var A = document.readyState;
        A === "loading" || A === "interactive" && ne && ne.defer ? document.addEventListener("DOMContentLoaded", z) : window.requestAnimationFrame ? window.requestAnimationFrame(z) : window.setTimeout(z, 16);
      }
      return T;
    }(p);
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
    }, y.languages.markup.tag.inside["attr-value"].inside.entity = y.languages.markup.entity, y.languages.markup.doctype.inside["internal-subset"].inside = y.languages.markup, y.hooks.add("wrap", function(C) {
      C.type === "entity" && (C.attributes.title = C.content.replace(/&amp;/, "&"));
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
      value: function(C, c) {
        y.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + C + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
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
    }), y.languages.html = y.languages.markup, y.languages.mathml = y.languages.markup, y.languages.svg = y.languages.markup, y.languages.xml = y.languages.extend("markup", {}), y.languages.ssml = y.languages.xml, y.languages.atom = y.languages.xml, y.languages.rss = y.languages.xml, function(C) {
      var c = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      C.languages.css = {
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
      }, C.languages.css.atrule.inside.rest = C.languages.css;
      var F = C.languages.markup;
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
      var C = "Loading…", c = function(ne, z) {
        return "✖ Error " + ne + " while fetching file: " + z;
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
      }, T = "data-src-status", v = "loading", k = "loaded", W = "failed", R = "pre[data-src]:not([" + T + '="' + k + '"]):not([' + T + '="' + v + '"])';
      function B(ne, z, A) {
        var D = new XMLHttpRequest();
        D.open("GET", ne, !0), D.onreadystatechange = function() {
          D.readyState == 4 && (D.status < 400 && D.responseText ? z(D.responseText) : D.status >= 400 ? A(c(D.status, D.statusText)) : A(F));
        }, D.send(null);
      }
      function ce(ne) {
        var z = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(ne || "");
        if (z) {
          var A = Number(z[1]), D = z[2], U = z[3];
          return D ? U ? [A, Number(U)] : [A, void 0] : [A, A];
        }
      }
      y.hooks.add("before-highlightall", function(ne) {
        ne.selector += ", " + R;
      }), y.hooks.add("before-sanity-check", function(ne) {
        var z = (
          /** @type {HTMLPreElement} */
          ne.element
        );
        if (z.matches(R)) {
          ne.code = "", z.setAttribute(T, v);
          var A = z.appendChild(document.createElement("CODE"));
          A.textContent = C;
          var D = z.getAttribute("data-src"), U = ne.language;
          if (U === "none") {
            var $ = (/\.(\w+)$/.exec(D) || [, "none"])[1];
            U = _[$] || $;
          }
          y.util.setLanguage(A, U), y.util.setLanguage(z, U);
          var H = y.plugins.autoloader;
          H && H.loadLanguages(U), B(
            D,
            function(O) {
              z.setAttribute(T, k);
              var X = ce(z.getAttribute("data-range"));
              if (X) {
                var ie = O.split(/\r\n?|\n/g), Y = X[0], Pe = X[1] == null ? ie.length : X[1];
                Y < 0 && (Y += ie.length), Y = Math.max(0, Math.min(Y - 1, ie.length)), Pe < 0 && (Pe += ie.length), Pe = Math.max(0, Math.min(Pe, ie.length)), O = ie.slice(Y, Pe).join(`
`), z.hasAttribute("data-start") || z.setAttribute("data-start", String(Y + 1));
              }
              A.textContent = O, y.highlightElement(A);
            },
            function(O) {
              z.setAttribute(T, W), A.textContent = O;
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
          for (var A = (z || document).querySelectorAll(R), D = 0, U; U = A[D++]; )
            y.highlightElement(U);
        }
      };
      var ae = !1;
      y.fileHighlight = function() {
        ae || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), ae = !0), y.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    }();
  }(cl)), cl.exports;
}
var zu = Wu();
const jl = /* @__PURE__ */ zl(zu);
(function(b) {
  var p = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  b.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + p.source + ")*?" + /(?:;|(?=\s*\{))/.source),
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
      pattern: RegExp("\\burl\\((?:" + p.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + p.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + p.source + ")*(?=\\s*\\{)"),
      lookbehind: !0
    },
    string: {
      pattern: p,
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
  var p = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, y;
  b.languages.css.selector = {
    pattern: b.languages.css.selector.pattern,
    lookbehind: !0,
    inside: y = {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      class: /\.[-\w]+/,
      id: /#[-\w]+/,
      attribute: {
        pattern: RegExp(`\\[(?:[^[\\]"']|` + p.source + ")*\\]"),
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
            p,
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
  var C = {
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
          unit: C,
          number: c,
          function: /[\w-]+(?=\()/,
          punctuation: /[(),]/
        }
      }
    ],
    // it's important that there is no boundary assertion after the hex digits
    entity: /\\[\da-f]{1,8}/i,
    unit: C,
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
  var b = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g, p = /^#?((?:[\da-f]){3,4}|(?:[\da-f]{2}){3,4})$/i;
  function y(F) {
    var _ = p.exec(F);
    if (_) {
      F = _[1];
      for (var T = F.length >= 6 ? 2 : 1, v = F.length / T, k = T == 1 ? 1 / 15 : 1 / 255, W = [], R = 0; R < v; R++) {
        var B = parseInt(F.substr(R * T, T), 16);
        W.push(B * k);
      }
      v == 3 && W.push(1);
      var ce = W.slice(0, 3).map(function(ne) {
        return String(Math.round(ne * 255));
      }).join(","), ae = String(Number(W[3].toFixed(3)));
      return "rgba(" + ce + "," + ae + ")";
    }
  }
  function C(F) {
    var _ = new Option().style;
    return _.color = F, _.color ? F : void 0;
  }
  var c = [
    y,
    C
  ];
  Prism.hooks.add("wrap", function(F) {
    if (F.type === "color" || F.classes.indexOf("color") >= 0) {
      for (var _ = F.content, T = _.split(b).join(""), v, k = 0, W = c.length; k < W && !v; k++)
        v = c[k](T);
      if (!v)
        return;
      var R = '<span class="inline-color-wrapper"><span class="inline-color" style="background-color:' + v + ';"></span></span>';
      F.content = R + _;
    }
  });
})();
var Bl = {}, Ul;
function $u() {
  return Ul || (Ul = 1, function() {
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
      Prism.plugins.toolbar.registerButton("show-language", function(p) {
        var y = p.element.parentNode;
        if (!y || !/pre/i.test(y.nodeName))
          return;
        function C(_) {
          return _ && (_.substring(0, 1).toUpperCase() + _.substring(1)).replace(/s(?=cript)/, "S");
        }
        var c = y.getAttribute("data-language") || b[p.language] || C(p.language);
        if (c) {
          var F = document.createElement("span");
          return F.textContent = c, F;
        }
      });
    }
  }()), Bl;
}
$u();
var Hl = {}, Nl;
function Vu() {
  return Nl || (Nl = 1, function() {
    if (typeof Prism > "u" || typeof document > "u")
      return;
    var b = "line-numbers", p = /\n(?!$)/g, y = Prism.plugins.lineNumbers = {
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
            var k = parseInt(_.getAttribute("data-start"), 10) || 1, W = k + (v.children.length - 1);
            T < k && (T = k), T > W && (T = W);
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
        C([_]);
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
    function C(_) {
      if (_ = _.filter(function(v) {
        var k = c(v), W = k["white-space"];
        return W === "pre-wrap" || W === "pre-line";
      }), _.length != 0) {
        var T = _.map(function(v) {
          var k = v.querySelector("code"), W = v.querySelector(".line-numbers-rows");
          if (!(!k || !W)) {
            var R = v.querySelector(".line-numbers-sizer"), B = k.textContent.split(p);
            R || (R = document.createElement("span"), R.className = "line-numbers-sizer", k.appendChild(R)), R.innerHTML = "0", R.style.display = "block";
            var ce = R.getBoundingClientRect().height;
            return R.innerHTML = "", {
              element: v,
              lines: B,
              lineHeights: [],
              oneLinerHeight: ce,
              sizer: R
            };
          }
        }).filter(Boolean);
        T.forEach(function(v) {
          var k = v.sizer, W = v.lines, R = v.lineHeights, B = v.oneLinerHeight;
          R[W.length - 1] = void 0, W.forEach(function(ce, ae) {
            if (ce && ce.length > 1) {
              var ne = k.appendChild(document.createElement("span"));
              ne.style.display = "block", ne.textContent = ce;
            } else
              R[ae] = B;
          });
        }), T.forEach(function(v) {
          for (var k = v.sizer, W = v.lineHeights, R = 0, B = 0; B < W.length; B++)
            W[B] === void 0 && (W[B] = k.children[R++].getBoundingClientRect().height);
        }), T.forEach(function(v) {
          var k = v.sizer, W = v.element.querySelector(".line-numbers-rows");
          k.style.display = "none", k.innerHTML = "", v.lineHeights.forEach(function(R, B) {
            W.children[B].style.height = R + "px";
          });
        });
      }
    }
    function c(_) {
      return _ ? window.getComputedStyle ? getComputedStyle(_) : _.currentStyle || null : null;
    }
    var F = void 0;
    window.addEventListener("resize", function() {
      y.assumeViewportIndependence && F === window.innerWidth || (F = window.innerWidth, C(Array.prototype.slice.call(document.querySelectorAll("pre." + b))));
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
          var k = _.code.match(p), W = k ? k.length + 1 : 1, R, B = new Array(W + 1).join("<span></span>");
          R = document.createElement("span"), R.setAttribute("aria-hidden", "true"), R.className = "line-numbers-rows", R.innerHTML = B, v.hasAttribute("data-start") && (v.style.counterReset = "linenumber " + (parseInt(v.getAttribute("data-start"), 10) - 1)), _.element.appendChild(R), C([v]), Prism.hooks.run("line-numbers", _);
        }
      }
    }), Prism.hooks.add("line-numbers", function(_) {
      _.plugins = _.plugins || {}, _.plugins.lineNumbers = !0;
    });
  }()), Hl;
}
Vu();
const dl = ({ language: b = "text", onRender: p = void 0, sectionName: y = void 0, ...C }) => {
  const { editing: c, editorState: F, setState: _ } = zt(y);
  return !c && p ? p(F) : /* @__PURE__ */ E.jsxs("div", { children: [
    /* @__PURE__ */ E.jsx("header", { style: {
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
    /* @__PURE__ */ E.jsx(
      Nu,
      {
        value: F,
        onValueChange: (T) => _(T),
        highlight: (T) => jl.highlight(T || "", jl.languages[b], b),
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
}, sc = (b) => {
  const { editing: p, setState: y } = zt(), { html: C, script: c, css: F } = b, [_, T] = Wt.useState(0);
  let v = [C, F, c];
  const k = ["HTML", "CSS", "JS"], W = [
    /* @__PURE__ */ E.jsx(dl, { language: "html", sectionName: "html", onRender: (R) => /* @__PURE__ */ E.jsx("div", { dangerouslySetInnerHTML: { __html: R } }) }),
    /* @__PURE__ */ E.jsx(dl, { language: "css", sectionName: "css", onRender: (R) => /* @__PURE__ */ E.jsx("style", { children: R }) }),
    /* @__PURE__ */ E.jsx(dl, { language: "javascript", sectionName: "script", onRender: (R) => /* @__PURE__ */ E.jsx("script", { children: R }) })
  ];
  return p ? /* @__PURE__ */ E.jsxs("div", { children: [
    /* @__PURE__ */ E.jsx("ul", { style: {
      display: "flex",
      listStyle: "none",
      padding: 0,
      margin: 0,
      background: "#dddddd",
      border: "2px #dddddd solid",
      borderBottom: "none"
    }, children: k.map((R, B) => /* @__PURE__ */ E.jsxs("li", { style: {
      padding: "4px 8px",
      cursor: "pointer",
      color: _ == B ? "black" : "#888888",
      background: _ == B ? "white" : "#ffffffaa",
      fontWeight: _ == B || v[B] || C ? "bold" : "normal"
    }, onClick: () => T(B), children: [
      R,
      v[B] ? "*" : ""
    ] }, B)) }),
    /* @__PURE__ */ E.jsx("div", { style: { padding: 10 }, children: W[_] }, _)
  ] }) : W;
};
export {
  Gl as CE,
  wu as CheckboxInput,
  Cu as ColumnSection,
  Yl as ContentEditableInputSlot,
  ki as ContentSection,
  _a as EditorContext,
  tc as EditorValue,
  oc as FakeStream,
  nc as HTTPStream,
  Vl as HideIf,
  Ku as HideIfEditing,
  vl as HideIfRendering,
  gl as NumberSelect,
  xu as PageEditor,
  sc as RawHTMLComponent,
  Ml as Repeater,
  Eu as SelectInput,
  $l as SlotSection,
  _u as Spacer,
  ml as StreamBase,
  Du as StreamDrawerDriver,
  Au as StreamDriver,
  rc as StreamGroup,
  ac as StreamSelectButton,
  Il as StringInput,
  ic as Tabs,
  qu as UNBEditor,
  Al as componentList,
  Tu as createContentEditable,
  qu as default,
  Qu as injectEditorContext,
  Xu as injectEditorState,
  zt as useEditorContext,
  Ju as useEditorState,
  Zu as useEditorStateWithProps,
  ec as useModal
};
//# sourceMappingURL=index.es.js.map
