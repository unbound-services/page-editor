import * as Er from "react";
import er, { Fragment as ll, useContext as Rl, createContext as Ml, useState as dr, useEffect as bi, useRef as pl } from "react";
import Al, { createPortal as Ol } from "react-dom";
var ls = { exports: {} }, yi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hl;
function jl() {
  if (hl) return yi;
  hl = 1;
  var R = er, v = Symbol.for("react.element"), k = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, f = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(B, b, w) {
    var V, D = {}, L = null, Q = null;
    w !== void 0 && (L = "" + w), b.key !== void 0 && (L = "" + b.key), b.ref !== void 0 && (Q = b.ref);
    for (V in b) _.call(b, V) && !F.hasOwnProperty(V) && (D[V] = b[V]);
    if (B && B.defaultProps) for (V in b = B.defaultProps, b) D[V] === void 0 && (D[V] = b[V]);
    return { $$typeof: v, type: B, key: L, ref: Q, props: D, _owner: f.current };
  }
  return yi.Fragment = k, yi.jsx = U, yi.jsxs = U, yi;
}
var Si = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vl;
function Ll() {
  return vl || (vl = 1, process.env.NODE_ENV !== "production" && function() {
    var R = er, v = Symbol.for("react.element"), k = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), B = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), J = Symbol.iterator, ee = "@@iterator";
    function N(S) {
      if (S === null || typeof S != "object")
        return null;
      var H = J && S[J] || S[ee];
      return typeof H == "function" ? H : null;
    }
    var M = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ne(S) {
      {
        for (var H = arguments.length, Y = new Array(H > 1 ? H - 1 : 0), re = 1; re < H; re++)
          Y[re - 1] = arguments[re];
        He("error", S, Y);
      }
    }
    function He(S, H, Y) {
      {
        var re = M.ReactDebugCurrentFrame, ve = re.getStackAddendum();
        ve !== "" && (H += "%s", Y = Y.concat([ve]));
        var xe = Y.map(function(ye) {
          return String(ye);
        });
        xe.unshift("Warning: " + H), Function.prototype.apply.call(console[S], console, xe);
      }
    }
    var we = !1, De = !1, Ce = !1, ge = !1, je = !1, ce;
    ce = Symbol.for("react.module.reference");
    function at(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === _ || S === F || je || S === f || S === w || S === V || ge || S === Q || we || De || Ce || typeof S == "object" && S !== null && (S.$$typeof === L || S.$$typeof === D || S.$$typeof === U || S.$$typeof === B || S.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === ce || S.getModuleId !== void 0));
    }
    function me(S, H, Y) {
      var re = S.displayName;
      if (re)
        return re;
      var ve = H.displayName || H.name || "";
      return ve !== "" ? Y + "(" + ve + ")" : Y;
    }
    function Le(S) {
      return S.displayName || "Context";
    }
    function Z(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && ne("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
        return S.displayName || S.name || null;
      if (typeof S == "string")
        return S;
      switch (S) {
        case _:
          return "Fragment";
        case k:
          return "Portal";
        case F:
          return "Profiler";
        case f:
          return "StrictMode";
        case w:
          return "Suspense";
        case V:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case B:
            var H = S;
            return Le(H) + ".Consumer";
          case U:
            var Y = S;
            return Le(Y._context) + ".Provider";
          case b:
            return me(S, S.render, "ForwardRef");
          case D:
            var re = S.displayName || null;
            return re !== null ? re : Z(S.type) || "Memo";
          case L: {
            var ve = S, xe = ve._payload, ye = ve._init;
            try {
              return Z(ye(xe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var he = Object.assign, Qe = 0, ze, ht, st, K, dt, Ae, Re;
    function _t() {
    }
    _t.__reactDisabledLog = !0;
    function It() {
      {
        if (Qe === 0) {
          ze = console.log, ht = console.info, st = console.warn, K = console.error, dt = console.group, Ae = console.groupCollapsed, Re = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: _t,
            writable: !0
          };
          Object.defineProperties(console, {
            info: S,
            log: S,
            warn: S,
            error: S,
            group: S,
            groupCollapsed: S,
            groupEnd: S
          });
        }
        Qe++;
      }
    }
    function $e() {
      {
        if (Qe--, Qe === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: he({}, S, {
              value: ze
            }),
            info: he({}, S, {
              value: ht
            }),
            warn: he({}, S, {
              value: st
            }),
            error: he({}, S, {
              value: K
            }),
            group: he({}, S, {
              value: dt
            }),
            groupCollapsed: he({}, S, {
              value: Ae
            }),
            groupEnd: he({}, S, {
              value: Re
            })
          });
        }
        Qe < 0 && ne("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Oe = M.ReactCurrentDispatcher, wt;
    function We(S, H, Y) {
      {
        if (wt === void 0)
          try {
            throw Error();
          } catch (ve) {
            var re = ve.stack.trim().match(/\n( *(at )?)/);
            wt = re && re[1] || "";
          }
        return `
` + wt + S;
      }
    }
    var it = !1, lt;
    {
      var rt = typeof WeakMap == "function" ? WeakMap : Map;
      lt = new rt();
    }
    function kt(S, H) {
      if (!S || it)
        return "";
      {
        var Y = lt.get(S);
        if (Y !== void 0)
          return Y;
      }
      var re;
      it = !0;
      var ve = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var xe;
      xe = Oe.current, Oe.current = null, It();
      try {
        if (H) {
          var ye = function() {
            throw Error();
          };
          if (Object.defineProperty(ye.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ye, []);
            } catch (Xe) {
              re = Xe;
            }
            Reflect.construct(S, [], ye);
          } else {
            try {
              ye.call();
            } catch (Xe) {
              re = Xe;
            }
            S.call(ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Xe) {
            re = Xe;
          }
          S();
        }
      } catch (Xe) {
        if (Xe && re && typeof Xe.stack == "string") {
          for (var pe = Xe.stack.split(`
`), Ge = re.stack.split(`
`), _e = pe.length - 1, Me = Ge.length - 1; _e >= 1 && Me >= 0 && pe[_e] !== Ge[Me]; )
            Me--;
          for (; _e >= 1 && Me >= 0; _e--, Me--)
            if (pe[_e] !== Ge[Me]) {
              if (_e !== 1 || Me !== 1)
                do
                  if (_e--, Me--, Me < 0 || pe[_e] !== Ge[Me]) {
                    var Be = `
` + pe[_e].replace(" at new ", " at ");
                    return S.displayName && Be.includes("<anonymous>") && (Be = Be.replace("<anonymous>", S.displayName)), typeof S == "function" && lt.set(S, Be), Be;
                  }
                while (_e >= 1 && Me >= 0);
              break;
            }
        }
      } finally {
        it = !1, Oe.current = xe, $e(), Error.prepareStackTrace = ve;
      }
      var $t = S ? S.displayName || S.name : "", At = $t ? We($t) : "";
      return typeof S == "function" && lt.set(S, At), At;
    }
    function Ke(S, H, Y) {
      return kt(S, !1);
    }
    function nt(S) {
      var H = S.prototype;
      return !!(H && H.isReactComponent);
    }
    function vt(S, H, Y) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return kt(S, nt(S));
      if (typeof S == "string")
        return We(S);
      switch (S) {
        case w:
          return We("Suspense");
        case V:
          return We("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case b:
            return Ke(S.render);
          case D:
            return vt(S.type, H, Y);
          case L: {
            var re = S, ve = re._payload, xe = re._init;
            try {
              return vt(xe(ve), H, Y);
            } catch {
            }
          }
        }
      return "";
    }
    var X = Object.prototype.hasOwnProperty, ae = {}, te = M.ReactDebugCurrentFrame;
    function ie(S) {
      if (S) {
        var H = S._owner, Y = vt(S.type, S._source, H ? H.type : null);
        te.setExtraStackFrame(Y);
      } else
        te.setExtraStackFrame(null);
    }
    function fe(S, H, Y, re, ve) {
      {
        var xe = Function.call.bind(X);
        for (var ye in S)
          if (xe(S, ye)) {
            var pe = void 0;
            try {
              if (typeof S[ye] != "function") {
                var Ge = Error((re || "React class") + ": " + Y + " type `" + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ge.name = "Invariant Violation", Ge;
              }
              pe = S[ye](H, ye, re, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_e) {
              pe = _e;
            }
            pe && !(pe instanceof Error) && (ie(ve), ne("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", re || "React class", Y, ye, typeof pe), ie(null)), pe instanceof Error && !(pe.message in ae) && (ae[pe.message] = !0, ie(ve), ne("Failed %s type: %s", Y, pe.message), ie(null));
          }
      }
    }
    var se = Array.isArray;
    function Ee(S) {
      return se(S);
    }
    function ke(S) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, Y = H && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return Y;
      }
    }
    function Ve(S) {
      try {
        return Ht(S), !1;
      } catch {
        return !0;
      }
    }
    function Ht(S) {
      return "" + S;
    }
    function Wt(S) {
      if (Ve(S))
        return ne("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ke(S)), Ht(S);
    }
    var Nt = M.ReactCurrentOwner, Ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pt, mt;
    function Nr(S) {
      if (X.call(S, "ref")) {
        var H = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function Tr(S) {
      if (X.call(S, "key")) {
        var H = Object.getOwnPropertyDescriptor(S, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function pr(S, H) {
      typeof S.ref == "string" && Nt.current;
    }
    function en(S, H) {
      {
        var Y = function() {
          Pt || (Pt = !0, ne("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        Y.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: Y,
          configurable: !0
        });
      }
    }
    function Rr(S, H) {
      {
        var Y = function() {
          mt || (mt = !0, ne("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        Y.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: Y,
          configurable: !0
        });
      }
    }
    var tr = function(S, H, Y, re, ve, xe, ye) {
      var pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: S,
        key: H,
        ref: Y,
        props: ye,
        // Record the component responsible for creating this element.
        _owner: xe
      };
      return pe._store = {}, Object.defineProperty(pe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(pe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.defineProperty(pe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ve
      }), Object.freeze && (Object.freeze(pe.props), Object.freeze(pe)), pe;
    };
    function _r(S, H, Y, re, ve) {
      {
        var xe, ye = {}, pe = null, Ge = null;
        Y !== void 0 && (Wt(Y), pe = "" + Y), Tr(H) && (Wt(H.key), pe = "" + H.key), Nr(H) && (Ge = H.ref, pr(H, ve));
        for (xe in H)
          X.call(H, xe) && !Ye.hasOwnProperty(xe) && (ye[xe] = H[xe]);
        if (S && S.defaultProps) {
          var _e = S.defaultProps;
          for (xe in _e)
            ye[xe] === void 0 && (ye[xe] = _e[xe]);
        }
        if (pe || Ge) {
          var Me = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          pe && en(ye, Me), Ge && Rr(ye, Me);
        }
        return tr(S, pe, Ge, ve, re, Nt.current, ye);
      }
    }
    var hr = M.ReactCurrentOwner, ut = M.ReactDebugCurrentFrame;
    function ct(S) {
      if (S) {
        var H = S._owner, Y = vt(S.type, S._source, H ? H.type : null);
        ut.setExtraStackFrame(Y);
      } else
        ut.setExtraStackFrame(null);
    }
    var Dt;
    Dt = !1;
    function Te(S) {
      return typeof S == "object" && S !== null && S.$$typeof === v;
    }
    function zt() {
      {
        if (hr.current) {
          var S = Z(hr.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function vr(S) {
      return "";
    }
    var rr = {};
    function Ft(S) {
      {
        var H = zt();
        if (!H) {
          var Y = typeof S == "string" ? S : S.displayName || S.name;
          Y && (H = `

Check the top-level render call using <` + Y + ">.");
        }
        return H;
      }
    }
    function sr(S, H) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var Y = Ft(H);
        if (rr[Y])
          return;
        rr[Y] = !0;
        var re = "";
        S && S._owner && S._owner !== hr.current && (re = " It was passed a child from " + Z(S._owner.type) + "."), ct(S), ne('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, re), ct(null);
      }
    }
    function Mt(S, H) {
      {
        if (typeof S != "object")
          return;
        if (Ee(S))
          for (var Y = 0; Y < S.length; Y++) {
            var re = S[Y];
            Te(re) && sr(re, H);
          }
        else if (Te(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var ve = N(S);
          if (typeof ve == "function" && ve !== S.entries)
            for (var xe = ve.call(S), ye; !(ye = xe.next()).done; )
              Te(ye.value) && sr(ye.value, H);
        }
      }
    }
    function ot(S) {
      {
        var H = S.type;
        if (H == null || typeof H == "string")
          return;
        var Y;
        if (typeof H == "function")
          Y = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === D))
          Y = H.propTypes;
        else
          return;
        if (Y) {
          var re = Z(H);
          fe(Y, S.props, "prop", re, S);
        } else if (H.PropTypes !== void 0 && !Dt) {
          Dt = !0;
          var ve = Z(H);
          ne("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ve || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && ne("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ir(S) {
      {
        for (var H = Object.keys(S.props), Y = 0; Y < H.length; Y++) {
          var re = H[Y];
          if (re !== "children" && re !== "key") {
            ct(S), ne("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", re), ct(null);
            break;
          }
        }
        S.ref !== null && (ct(S), ne("Invalid attribute `ref` supplied to `React.Fragment`."), ct(null));
      }
    }
    var mr = {};
    function Pr(S, H, Y, re, ve, xe) {
      {
        var ye = at(S);
        if (!ye) {
          var pe = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ge = vr();
          Ge ? pe += Ge : pe += zt();
          var _e;
          S === null ? _e = "null" : Ee(S) ? _e = "array" : S !== void 0 && S.$$typeof === v ? (_e = "<" + (Z(S.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : _e = typeof S, ne("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _e, pe);
        }
        var Me = _r(S, H, Y, ve, xe);
        if (Me == null)
          return Me;
        if (ye) {
          var Be = H.children;
          if (Be !== void 0)
            if (re)
              if (Ee(Be)) {
                for (var $t = 0; $t < Be.length; $t++)
                  Mt(Be[$t], S);
                Object.freeze && Object.freeze(Be);
              } else
                ne("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Mt(Be, S);
        }
        if (X.call(H, "key")) {
          var At = Z(S), Xe = Object.keys(H).filter(function(jt) {
            return jt !== "key";
          }), Ze = Xe.length > 0 ? "{key: someKey, " + Xe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!mr[At + Ze]) {
            var Ot = Xe.length > 0 ? "{" + Xe.join(": ..., ") + ": ...}" : "{}";
            ne(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ze, At, Ot, At), mr[At + Ze] = !0;
          }
        }
        return S === _ ? Ir(Me) : ot(Me), Me;
      }
    }
    function et(S, H, Y) {
      return Pr(S, H, Y, !0);
    }
    function Dr(S, H, Y) {
      return Pr(S, H, Y, !1);
    }
    var tn = Dr, rn = et;
    Si.Fragment = _, Si.jsx = tn, Si.jsxs = rn;
  }()), Si;
}
var ml;
function Bl() {
  return ml || (ml = 1, process.env.NODE_ENV === "production" ? ls.exports = jl() : ls.exports = Ll()), ls.exports;
}
var x = Bl(), $n = {}, Co = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gl;
function Ul() {
  if (gl) return Co;
  gl = 1;
  var R = er;
  function v(a) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, h = 1; h < arguments.length; h++) u += "&args[]=" + encodeURIComponent(arguments[h]);
    return "Minified React error #" + a + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var k = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, f = {}, F = {};
  function U(a) {
    return k.call(F, a) ? !0 : k.call(f, a) ? !1 : _.test(a) ? F[a] = !0 : (f[a] = !0, !1);
  }
  function B(a, u, h, g, I, C, A) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = g, this.attributeNamespace = I, this.mustUseProperty = h, this.propertyName = a, this.type = u, this.sanitizeURL = C, this.removeEmptyString = A;
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    b[a] = new B(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var u = a[0];
    b[u] = new B(u, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    b[a] = new B(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    b[a] = new B(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    b[a] = new B(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    b[a] = new B(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    b[a] = new B(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    b[a] = new B(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    b[a] = new B(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var w = /[\-:]([a-z])/g;
  function V(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var u = a.replace(
      w,
      V
    );
    b[u] = new B(u, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var u = a.replace(w, V);
    b[u] = new B(u, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var u = a.replace(w, V);
    b[u] = new B(u, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    b[a] = new B(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), b.xlinkHref = new B("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    b[a] = new B(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var D = {
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
  }, L = ["Webkit", "ms", "Moz", "O"];
  Object.keys(D).forEach(function(a) {
    L.forEach(function(u) {
      u = u + a.charAt(0).toUpperCase() + a.substring(1), D[u] = D[a];
    });
  });
  var Q = /["'&<>]/;
  function J(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var u = Q.exec(a);
    if (u) {
      var h = "", g, I = 0;
      for (g = u.index; g < a.length; g++) {
        switch (a.charCodeAt(g)) {
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
        I !== g && (h += a.substring(I, g)), I = g + 1, h += u;
      }
      a = I !== g ? h + a.substring(I, g) : h;
    }
    return a;
  }
  var ee = /([A-Z])/g, N = /^ms-/, M = Array.isArray;
  function ne(a, u) {
    return { insertionMode: a, selectedValue: u };
  }
  function He(a, u, h) {
    switch (u) {
      case "select":
        return ne(1, h.value != null ? h.value : h.defaultValue);
      case "svg":
        return ne(2, null);
      case "math":
        return ne(3, null);
      case "foreignObject":
        return ne(1, null);
      case "table":
        return ne(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return ne(5, null);
      case "colgroup":
        return ne(7, null);
      case "tr":
        return ne(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? ne(1, null) : a;
  }
  var we = /* @__PURE__ */ new Map();
  function De(a, u, h) {
    if (typeof h != "object") throw Error(v(62));
    u = !0;
    for (var g in h) if (k.call(h, g)) {
      var I = h[g];
      if (I != null && typeof I != "boolean" && I !== "") {
        if (g.indexOf("--") === 0) {
          var C = J(g);
          I = J(("" + I).trim());
        } else {
          C = g;
          var A = we.get(C);
          A !== void 0 || (A = J(C.replace(ee, "-$1").toLowerCase().replace(N, "-ms-")), we.set(C, A)), C = A, I = typeof I == "number" ? I === 0 || k.call(D, g) ? "" + I : I + "px" : J(("" + I).trim());
        }
        u ? (u = !1, a.push(' style="', C, ":", I)) : a.push(";", C, ":", I);
      }
    }
    u || a.push('"');
  }
  function Ce(a, u, h, g) {
    switch (h) {
      case "style":
        De(a, u, g);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < h.length) || h[0] !== "o" && h[0] !== "O" || h[1] !== "n" && h[1] !== "N") {
      if (u = b.hasOwnProperty(h) ? b[h] : null, u !== null) {
        switch (typeof g) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (h = u.attributeName, u.type) {
          case 3:
            g && a.push(" ", h, '=""');
            break;
          case 4:
            g === !0 ? a.push(" ", h, '=""') : g !== !1 && a.push(" ", h, '="', J(g), '"');
            break;
          case 5:
            isNaN(g) || a.push(" ", h, '="', J(g), '"');
            break;
          case 6:
            !isNaN(g) && 1 <= g && a.push(" ", h, '="', J(g), '"');
            break;
          default:
            u.sanitizeURL && (g = "" + g), a.push(" ", h, '="', J(g), '"');
        }
      } else if (U(h)) {
        switch (typeof g) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = h.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        a.push(" ", h, '="', J(g), '"');
      }
    }
  }
  function ge(a, u, h) {
    if (u != null) {
      if (h != null) throw Error(v(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(v(61));
      u = u.__html, u != null && a.push("" + u);
    }
  }
  function je(a) {
    var u = "";
    return R.Children.forEach(a, function(h) {
      h != null && (u += h);
    }), u;
  }
  function ce(a, u, h, g) {
    a.push(Le(h));
    var I = h = null, C;
    for (C in u) if (k.call(u, C)) {
      var A = u[C];
      if (A != null) switch (C) {
        case "children":
          h = A;
          break;
        case "dangerouslySetInnerHTML":
          I = A;
          break;
        default:
          Ce(a, g, C, A);
      }
    }
    return a.push(">"), ge(a, I, h), typeof h == "string" ? (a.push(J(h)), null) : h;
  }
  var at = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, me = /* @__PURE__ */ new Map();
  function Le(a) {
    var u = me.get(a);
    if (u === void 0) {
      if (!at.test(a)) throw Error(v(65, a));
      u = "<" + a, me.set(a, u);
    }
    return u;
  }
  function Z(a, u, h, g, I) {
    switch (u) {
      case "select":
        a.push(Le("select"));
        var C = null, A = null;
        for (oe in h) if (k.call(h, oe)) {
          var z = h[oe];
          if (z != null) switch (oe) {
            case "children":
              C = z;
              break;
            case "dangerouslySetInnerHTML":
              A = z;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              Ce(a, g, oe, z);
          }
        }
        return a.push(">"), ge(a, A, C), C;
      case "option":
        A = I.selectedValue, a.push(Le("option"));
        var q = z = null, le = null, oe = null;
        for (C in h) if (k.call(h, C)) {
          var Ie = h[C];
          if (Ie != null) switch (C) {
            case "children":
              z = Ie;
              break;
            case "selected":
              le = Ie;
              break;
            case "dangerouslySetInnerHTML":
              oe = Ie;
              break;
            case "value":
              q = Ie;
            default:
              Ce(a, g, C, Ie);
          }
        }
        if (A != null) if (h = q !== null ? "" + q : je(z), M(A)) {
          for (g = 0; g < A.length; g++)
            if ("" + A[g] === h) {
              a.push(' selected=""');
              break;
            }
        } else "" + A === h && a.push(' selected=""');
        else le && a.push(' selected=""');
        return a.push(">"), ge(a, oe, z), z;
      case "textarea":
        a.push(Le("textarea")), oe = A = C = null;
        for (z in h) if (k.call(h, z) && (q = h[z], q != null)) switch (z) {
          case "children":
            oe = q;
            break;
          case "value":
            C = q;
            break;
          case "defaultValue":
            A = q;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(v(91));
          default:
            Ce(
              a,
              g,
              z,
              q
            );
        }
        if (C === null && A !== null && (C = A), a.push(">"), oe != null) {
          if (C != null) throw Error(v(92));
          if (M(oe) && 1 < oe.length) throw Error(v(93));
          C = "" + oe;
        }
        return typeof C == "string" && C[0] === `
` && a.push(`
`), C !== null && a.push(J("" + C)), null;
      case "input":
        a.push(Le("input")), q = oe = z = C = null;
        for (A in h) if (k.call(h, A) && (le = h[A], le != null)) switch (A) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(399, "input"));
          case "defaultChecked":
            q = le;
            break;
          case "defaultValue":
            z = le;
            break;
          case "checked":
            oe = le;
            break;
          case "value":
            C = le;
            break;
          default:
            Ce(a, g, A, le);
        }
        return oe !== null ? Ce(a, g, "checked", oe) : q !== null && Ce(a, g, "checked", q), C !== null ? Ce(a, g, "value", C) : z !== null && Ce(a, g, "value", z), a.push("/>"), null;
      case "menuitem":
        a.push(Le("menuitem"));
        for (var St in h) if (k.call(h, St) && (C = h[St], C != null)) switch (St) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(400));
          default:
            Ce(a, g, St, C);
        }
        return a.push(">"), null;
      case "title":
        a.push(Le("title")), C = null;
        for (Ie in h) if (k.call(h, Ie) && (A = h[Ie], A != null)) switch (Ie) {
          case "children":
            C = A;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(v(434));
          default:
            Ce(a, g, Ie, A);
        }
        return a.push(">"), C;
      case "listing":
      case "pre":
        a.push(Le(u)), A = C = null;
        for (q in h) if (k.call(h, q) && (z = h[q], z != null)) switch (q) {
          case "children":
            C = z;
            break;
          case "dangerouslySetInnerHTML":
            A = z;
            break;
          default:
            Ce(a, g, q, z);
        }
        if (a.push(">"), A != null) {
          if (C != null) throw Error(v(60));
          if (typeof A != "object" || !("__html" in A)) throw Error(v(61));
          h = A.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? a.push(`
`, h) : a.push("" + h));
        }
        return typeof C == "string" && C[0] === `
` && a.push(`
`), C;
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
        a.push(Le(u));
        for (var bt in h) if (k.call(h, bt) && (C = h[bt], C != null)) switch (bt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(399, u));
          default:
            Ce(a, g, bt, C);
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
        return ce(
          a,
          h,
          u,
          g
        );
      case "html":
        return I.insertionMode === 0 && a.push("<!DOCTYPE html>"), ce(a, h, u, g);
      default:
        if (u.indexOf("-") === -1 && typeof h.is != "string") return ce(a, h, u, g);
        a.push(Le(u)), A = C = null;
        for (le in h) if (k.call(h, le) && (z = h[le], z != null)) switch (le) {
          case "children":
            C = z;
            break;
          case "dangerouslySetInnerHTML":
            A = z;
            break;
          case "style":
            De(a, g, z);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            U(le) && typeof z != "function" && typeof z != "symbol" && a.push(" ", le, '="', J(z), '"');
        }
        return a.push(">"), ge(a, A, C), C;
    }
  }
  function he(a, u, h) {
    if (a.push('<!--$?--><template id="'), h === null) throw Error(v(395));
    return a.push(h), a.push('"></template>');
  }
  function Qe(a, u, h, g) {
    switch (h.insertionMode) {
      case 0:
      case 1:
        return a.push('<div hidden id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 2:
        return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 3:
        return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 4:
        return a.push('<table hidden id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 5:
        return a.push('<table hidden><tbody id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 6:
        return a.push('<table hidden><tr id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 7:
        return a.push('<table hidden><colgroup id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      default:
        throw Error(v(397));
    }
  }
  function ze(a, u) {
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
        throw Error(v(397));
    }
  }
  var ht = /[<\u2028\u2029]/g;
  function st(a) {
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
  function K(a, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: a };
  }
  function dt(a, u, h, g) {
    return h.generateStaticMarkup ? (a.push(J(u)), !1) : (u === "" ? a = g : (g && a.push("<!-- -->"), a.push(J(u)), a = !0), a);
  }
  var Ae = Object.assign, Re = Symbol.for("react.element"), _t = Symbol.for("react.portal"), It = Symbol.for("react.fragment"), $e = Symbol.for("react.strict_mode"), Oe = Symbol.for("react.profiler"), wt = Symbol.for("react.provider"), We = Symbol.for("react.context"), it = Symbol.for("react.forward_ref"), lt = Symbol.for("react.suspense"), rt = Symbol.for("react.suspense_list"), kt = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), nt = Symbol.for("react.scope"), vt = Symbol.for("react.debug_trace_mode"), X = Symbol.for("react.legacy_hidden"), ae = Symbol.for("react.default_value"), te = Symbol.iterator;
  function ie(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case It:
        return "Fragment";
      case _t:
        return "Portal";
      case Oe:
        return "Profiler";
      case $e:
        return "StrictMode";
      case lt:
        return "Suspense";
      case rt:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case We:
        return (a.displayName || "Context") + ".Consumer";
      case wt:
        return (a._context.displayName || "Context") + ".Provider";
      case it:
        var u = a.render;
        return a = a.displayName, a || (a = u.displayName || u.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case kt:
        return u = a.displayName || null, u !== null ? u : ie(a.type) || "Memo";
      case Ke:
        u = a._payload, a = a._init;
        try {
          return ie(a(u));
        } catch {
        }
    }
    return null;
  }
  var fe = {};
  function se(a, u) {
    if (a = a.contextTypes, !a) return fe;
    var h = {}, g;
    for (g in a) h[g] = u[g];
    return h;
  }
  var Ee = null;
  function ke(a, u) {
    if (a !== u) {
      a.context._currentValue2 = a.parentValue, a = a.parent;
      var h = u.parent;
      if (a === null) {
        if (h !== null) throw Error(v(401));
      } else {
        if (h === null) throw Error(v(401));
        ke(a, h);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function Ve(a) {
    a.context._currentValue2 = a.parentValue, a = a.parent, a !== null && Ve(a);
  }
  function Ht(a) {
    var u = a.parent;
    u !== null && Ht(u), a.context._currentValue2 = a.value;
  }
  function Wt(a, u) {
    if (a.context._currentValue2 = a.parentValue, a = a.parent, a === null) throw Error(v(402));
    a.depth === u.depth ? ke(a, u) : Wt(a, u);
  }
  function Nt(a, u) {
    var h = u.parent;
    if (h === null) throw Error(v(402));
    a.depth === h.depth ? ke(a, h) : Nt(a, h), u.context._currentValue2 = u.value;
  }
  function Ye(a) {
    var u = Ee;
    u !== a && (u === null ? Ht(a) : a === null ? Ve(u) : u.depth === a.depth ? ke(u, a) : u.depth > a.depth ? Wt(u, a) : Nt(u, a), Ee = a);
  }
  var Pt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, u) {
    a = a._reactInternals, a.queue !== null && a.queue.push(u);
  }, enqueueReplaceState: function(a, u) {
    a = a._reactInternals, a.replace = !0, a.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function mt(a, u, h, g) {
    var I = a.state !== void 0 ? a.state : null;
    a.updater = Pt, a.props = h, a.state = I;
    var C = { queue: [], replace: !1 };
    a._reactInternals = C;
    var A = u.contextType;
    if (a.context = typeof A == "object" && A !== null ? A._currentValue2 : g, A = u.getDerivedStateFromProps, typeof A == "function" && (A = A(h, I), I = A == null ? I : Ae({}, I, A), a.state = I), typeof u.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (u = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), u !== a.state && Pt.enqueueReplaceState(a, a.state, null), C.queue !== null && 0 < C.queue.length) if (u = C.queue, A = C.replace, C.queue = null, C.replace = !1, A && u.length === 1) a.state = u[0];
    else {
      for (C = A ? u[0] : a.state, I = !0, A = A ? 1 : 0; A < u.length; A++) {
        var z = u[A];
        z = typeof z == "function" ? z.call(a, C, h, g) : z, z != null && (I ? (I = !1, C = Ae({}, C, z)) : Ae(C, z));
      }
      a.state = C;
    }
    else C.queue = null;
  }
  var Nr = { id: 1, overflow: "" };
  function Tr(a, u, h) {
    var g = a.id;
    a = a.overflow;
    var I = 32 - pr(g) - 1;
    g &= ~(1 << I), h += 1;
    var C = 32 - pr(u) + I;
    if (30 < C) {
      var A = I - I % 5;
      return C = (g & (1 << A) - 1).toString(32), g >>= A, I -= A, { id: 1 << 32 - pr(u) + I | h << I | g, overflow: C + a };
    }
    return { id: 1 << C | h << I | g, overflow: a };
  }
  var pr = Math.clz32 ? Math.clz32 : tr, en = Math.log, Rr = Math.LN2;
  function tr(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (en(a) / Rr | 0) | 0;
  }
  function _r(a, u) {
    return a === u && (a !== 0 || 1 / a === 1 / u) || a !== a && u !== u;
  }
  var hr = typeof Object.is == "function" ? Object.is : _r, ut = null, ct = null, Dt = null, Te = null, zt = !1, vr = !1, rr = 0, Ft = null, sr = 0;
  function Mt() {
    if (ut === null) throw Error(v(321));
    return ut;
  }
  function ot() {
    if (0 < sr) throw Error(v(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ir() {
    return Te === null ? Dt === null ? (zt = !1, Dt = Te = ot()) : (zt = !0, Te = Dt) : Te.next === null ? (zt = !1, Te = Te.next = ot()) : (zt = !0, Te = Te.next), Te;
  }
  function mr() {
    ct = ut = null, vr = !1, Dt = null, sr = 0, Te = Ft = null;
  }
  function Pr(a, u) {
    return typeof u == "function" ? u(a) : u;
  }
  function et(a, u, h) {
    if (ut = Mt(), Te = Ir(), zt) {
      var g = Te.queue;
      if (u = g.dispatch, Ft !== null && (h = Ft.get(g), h !== void 0)) {
        Ft.delete(g), g = Te.memoizedState;
        do
          g = a(g, h.action), h = h.next;
        while (h !== null);
        return Te.memoizedState = g, [g, u];
      }
      return [Te.memoizedState, u];
    }
    return a = a === Pr ? typeof u == "function" ? u() : u : h !== void 0 ? h(u) : u, Te.memoizedState = a, a = Te.queue = { last: null, dispatch: null }, a = a.dispatch = tn.bind(null, ut, a), [Te.memoizedState, a];
  }
  function Dr(a, u) {
    if (ut = Mt(), Te = Ir(), u = u === void 0 ? null : u, Te !== null) {
      var h = Te.memoizedState;
      if (h !== null && u !== null) {
        var g = h[1];
        e: if (g === null) g = !1;
        else {
          for (var I = 0; I < g.length && I < u.length; I++) if (!hr(u[I], g[I])) {
            g = !1;
            break e;
          }
          g = !0;
        }
        if (g) return h[0];
      }
    }
    return a = a(), Te.memoizedState = [a, u], a;
  }
  function tn(a, u, h) {
    if (25 <= sr) throw Error(v(301));
    if (a === ut) if (vr = !0, a = { action: h, next: null }, Ft === null && (Ft = /* @__PURE__ */ new Map()), h = Ft.get(u), h === void 0) Ft.set(u, a);
    else {
      for (u = h; u.next !== null; ) u = u.next;
      u.next = a;
    }
  }
  function rn() {
    throw Error(v(394));
  }
  function S() {
  }
  var H = { readContext: function(a) {
    return a._currentValue2;
  }, useContext: function(a) {
    return Mt(), a._currentValue2;
  }, useMemo: Dr, useReducer: et, useRef: function(a) {
    ut = Mt(), Te = Ir();
    var u = Te.memoizedState;
    return u === null ? (a = { current: a }, Te.memoizedState = a) : u;
  }, useState: function(a) {
    return et(Pr, a);
  }, useInsertionEffect: S, useLayoutEffect: function() {
  }, useCallback: function(a, u) {
    return Dr(function() {
      return a;
    }, u);
  }, useImperativeHandle: S, useEffect: S, useDebugValue: S, useDeferredValue: function(a) {
    return Mt(), a;
  }, useTransition: function() {
    return Mt(), [
      !1,
      rn
    ];
  }, useId: function() {
    var a = ct.treeContext, u = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - pr(a) - 1)).toString(32) + u;
    var h = Y;
    if (h === null) throw Error(v(404));
    return u = rr++, a = ":" + h.idPrefix + "R" + a, 0 < u && (a += "H" + u.toString(32)), a + ":";
  }, useMutableSource: function(a, u) {
    return Mt(), u(a._source);
  }, useSyncExternalStore: function(a, u, h) {
    if (h === void 0) throw Error(v(407));
    return h();
  } }, Y = null, re = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ve(a) {
    return console.error(a), null;
  }
  function xe() {
  }
  function ye(a, u, h, g, I, C, A, z, q) {
    var le = [], oe = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: g === void 0 ? 12800 : g, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: oe, pingedTasks: le, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: I === void 0 ? ve : I, onAllReady: xe, onShellReady: A === void 0 ? xe : A, onShellError: xe, onFatalError: xe }, h = Ge(u, 0, null, h, !1, !1), h.parentFlushed = !0, a = pe(u, a, null, h, oe, fe, null, Nr), le.push(a), u;
  }
  function pe(a, u, h, g, I, C, A, z) {
    a.allPendingTasks++, h === null ? a.pendingRootTasks++ : h.pendingTasks++;
    var q = { node: u, ping: function() {
      var le = a.pingedTasks;
      le.push(q), le.length === 1 && gt(a);
    }, blockedBoundary: h, blockedSegment: g, abortSet: I, legacyContext: C, context: A, treeContext: z };
    return I.add(q), q;
  }
  function Ge(a, u, h, g, I, C) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: g, boundary: h, lastPushedText: I, textEmbedded: C };
  }
  function _e(a, u) {
    if (a = a.onError(u), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function Me(a, u) {
    var h = a.onShellError;
    h(u), h = a.onFatalError, h(u), a.destination !== null ? (a.status = 2, a.destination.destroy(u)) : (a.status = 1, a.fatalError = u);
  }
  function Be(a, u, h, g, I) {
    for (ut = {}, ct = u, rr = 0, a = h(g, I); vr; ) vr = !1, rr = 0, sr += 1, Te = null, a = h(g, I);
    return mr(), a;
  }
  function $t(a, u, h, g) {
    var I = h.render(), C = g.childContextTypes;
    if (C != null) {
      var A = u.legacyContext;
      if (typeof h.getChildContext != "function") g = A;
      else {
        h = h.getChildContext();
        for (var z in h) if (!(z in C)) throw Error(v(108, ie(g) || "Unknown", z));
        g = Ae({}, A, h);
      }
      u.legacyContext = g, Ze(a, u, I), u.legacyContext = A;
    } else Ze(a, u, I);
  }
  function At(a, u) {
    if (a && a.defaultProps) {
      u = Ae({}, u), a = a.defaultProps;
      for (var h in a) u[h] === void 0 && (u[h] = a[h]);
      return u;
    }
    return u;
  }
  function Xe(a, u, h, g, I) {
    if (typeof h == "function") if (h.prototype && h.prototype.isReactComponent) {
      I = se(h, u.legacyContext);
      var C = h.contextType;
      C = new h(g, typeof C == "object" && C !== null ? C._currentValue2 : I), mt(C, h, g, I), $t(a, u, C, h);
    } else {
      C = se(h, u.legacyContext), I = Be(a, u, h, g, C);
      var A = rr !== 0;
      if (typeof I == "object" && I !== null && typeof I.render == "function" && I.$$typeof === void 0) mt(I, h, g, C), $t(a, u, I, h);
      else if (A) {
        g = u.treeContext, u.treeContext = Tr(g, 1, 0);
        try {
          Ze(a, u, I);
        } finally {
          u.treeContext = g;
        }
      } else Ze(a, u, I);
    }
    else if (typeof h == "string") {
      switch (I = u.blockedSegment, C = Z(I.chunks, h, g, a.responseState, I.formatContext), I.lastPushedText = !1, A = I.formatContext, I.formatContext = He(A, h, g), jt(a, u, C), I.formatContext = A, h) {
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
          I.chunks.push("</", h, ">");
      }
      I.lastPushedText = !1;
    } else {
      switch (h) {
        case X:
        case vt:
        case $e:
        case Oe:
        case It:
          Ze(a, u, g.children);
          return;
        case rt:
          Ze(a, u, g.children);
          return;
        case nt:
          throw Error(v(343));
        case lt:
          e: {
            h = u.blockedBoundary, I = u.blockedSegment, C = g.fallback, g = g.children, A = /* @__PURE__ */ new Set();
            var z = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: A, errorDigest: null }, q = Ge(a, I.chunks.length, z, I.formatContext, !1, !1);
            I.children.push(q), I.lastPushedText = !1;
            var le = Ge(a, 0, null, I.formatContext, !1, !1);
            le.parentFlushed = !0, u.blockedBoundary = z, u.blockedSegment = le;
            try {
              if (jt(
                a,
                u,
                g
              ), a.responseState.generateStaticMarkup || le.lastPushedText && le.textEmbedded && le.chunks.push("<!-- -->"), le.status = 1, Vt(z, le), z.pendingTasks === 0) break e;
            } catch (oe) {
              le.status = 4, z.forceClientRender = !0, z.errorDigest = _e(a, oe);
            } finally {
              u.blockedBoundary = h, u.blockedSegment = I;
            }
            u = pe(a, C, h, q, A, u.legacyContext, u.context, u.treeContext), a.pingedTasks.push(u);
          }
          return;
      }
      if (typeof h == "object" && h !== null) switch (h.$$typeof) {
        case it:
          if (g = Be(a, u, h.render, g, I), rr !== 0) {
            h = u.treeContext, u.treeContext = Tr(h, 1, 0);
            try {
              Ze(a, u, g);
            } finally {
              u.treeContext = h;
            }
          } else Ze(a, u, g);
          return;
        case kt:
          h = h.type, g = At(h, g), Xe(a, u, h, g, I);
          return;
        case wt:
          if (I = g.children, h = h._context, g = g.value, C = h._currentValue2, h._currentValue2 = g, A = Ee, Ee = g = { parent: A, depth: A === null ? 0 : A.depth + 1, context: h, parentValue: C, value: g }, u.context = g, Ze(a, u, I), a = Ee, a === null) throw Error(v(403));
          g = a.parentValue, a.context._currentValue2 = g === ae ? a.context._defaultValue : g, a = Ee = a.parent, u.context = a;
          return;
        case We:
          g = g.children, g = g(h._currentValue2), Ze(a, u, g);
          return;
        case Ke:
          I = h._init, h = I(h._payload), g = At(h, g), Xe(
            a,
            u,
            h,
            g,
            void 0
          );
          return;
      }
      throw Error(v(130, h == null ? h : typeof h, ""));
    }
  }
  function Ze(a, u, h) {
    if (u.node = h, typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Re:
          Xe(a, u, h.type, h.props, h.ref);
          return;
        case _t:
          throw Error(v(257));
        case Ke:
          var g = h._init;
          h = g(h._payload), Ze(a, u, h);
          return;
      }
      if (M(h)) {
        Ot(a, u, h);
        return;
      }
      if (h === null || typeof h != "object" ? g = null : (g = te && h[te] || h["@@iterator"], g = typeof g == "function" ? g : null), g && (g = g.call(h))) {
        if (h = g.next(), !h.done) {
          var I = [];
          do
            I.push(h.value), h = g.next();
          while (!h.done);
          Ot(a, u, I);
        }
        return;
      }
      throw a = Object.prototype.toString.call(h), Error(v(31, a === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : a));
    }
    typeof h == "string" ? (g = u.blockedSegment, g.lastPushedText = dt(u.blockedSegment.chunks, h, a.responseState, g.lastPushedText)) : typeof h == "number" && (g = u.blockedSegment, g.lastPushedText = dt(u.blockedSegment.chunks, "" + h, a.responseState, g.lastPushedText));
  }
  function Ot(a, u, h) {
    for (var g = h.length, I = 0; I < g; I++) {
      var C = u.treeContext;
      u.treeContext = Tr(C, g, I);
      try {
        jt(a, u, h[I]);
      } finally {
        u.treeContext = C;
      }
    }
  }
  function jt(a, u, h) {
    var g = u.blockedSegment.formatContext, I = u.legacyContext, C = u.context;
    try {
      return Ze(a, u, h);
    } catch (q) {
      if (mr(), typeof q == "object" && q !== null && typeof q.then == "function") {
        h = q;
        var A = u.blockedSegment, z = Ge(a, A.chunks.length, null, A.formatContext, A.lastPushedText, !0);
        A.children.push(z), A.lastPushedText = !1, a = pe(a, u.node, u.blockedBoundary, z, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, h.then(a, a), u.blockedSegment.formatContext = g, u.legacyContext = I, u.context = C, Ye(C);
      } else throw u.blockedSegment.formatContext = g, u.legacyContext = I, u.context = C, Ye(C), q;
    }
  }
  function gr(a) {
    var u = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, nr(this, u, a);
  }
  function zr(a, u, h) {
    var g = a.blockedBoundary;
    a.blockedSegment.status = 3, g === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (g.pendingTasks--, g.forceClientRender || (g.forceClientRender = !0, a = h === void 0 ? Error(v(432)) : h, g.errorDigest = u.onError(a), g.parentFlushed && u.clientRenderedBoundaries.push(g)), g.fallbackAbortableTasks.forEach(function(I) {
      return zr(I, u, h);
    }), g.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (g = u.onAllReady, g()));
  }
  function Vt(a, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var h = u.children[0];
      h.id = u.id, h.parentFlushed = !0, h.status === 1 && Vt(a, h);
    } else a.completedSegments.push(u);
  }
  function nr(a, u, h) {
    if (u === null) {
      if (h.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(v(389));
        a.completedRootSegment = h;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = xe, u = a.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && Vt(u, h), u.parentFlushed && a.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(gr, a), u.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (Vt(u, h), u.completedSegments.length === 1 && u.parentFlushed && a.partialBoundaries.push(u)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function gt(a) {
    if (a.status !== 2) {
      var u = Ee, h = re.current;
      re.current = H;
      var g = Y;
      Y = a.responseState;
      try {
        var I = a.pingedTasks, C;
        for (C = 0; C < I.length; C++) {
          var A = I[C], z = a, q = A.blockedSegment;
          if (q.status === 0) {
            Ye(A.context);
            try {
              Ze(z, A, A.node), z.responseState.generateStaticMarkup || q.lastPushedText && q.textEmbedded && q.chunks.push("<!-- -->"), A.abortSet.delete(A), q.status = 1, nr(z, A.blockedBoundary, q);
            } catch (xt) {
              if (mr(), typeof xt == "object" && xt !== null && typeof xt.then == "function") {
                var le = A.ping;
                xt.then(le, le);
              } else {
                A.abortSet.delete(A), q.status = 4;
                var oe = A.blockedBoundary, Ie = xt, St = _e(z, Ie);
                if (oe === null ? Me(z, Ie) : (oe.pendingTasks--, oe.forceClientRender || (oe.forceClientRender = !0, oe.errorDigest = St, oe.parentFlushed && z.clientRenderedBoundaries.push(oe))), z.allPendingTasks--, z.allPendingTasks === 0) {
                  var bt = z.onAllReady;
                  bt();
                }
              }
            } finally {
            }
          }
        }
        I.splice(0, C), a.destination !== null && yt(a, a.destination);
      } catch (xt) {
        _e(a, xt), Me(a, xt);
      } finally {
        Y = g, re.current = h, h === H && Ye(u);
      }
    }
  }
  function yr(a, u, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var g = h.id = a.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, a = a.responseState, u.push('<template id="'), u.push(a.placeholderPrefix), a = g.toString(16), u.push(a), u.push('"></template>');
      case 1:
        h.status = 2;
        var I = !0;
        g = h.chunks;
        var C = 0;
        h = h.children;
        for (var A = 0; A < h.length; A++) {
          for (I = h[A]; C < I.index; C++) u.push(g[C]);
          I = Fr(a, u, I);
        }
        for (; C < g.length - 1; C++) u.push(g[C]);
        return C < g.length && (I = u.push(g[C])), I;
      default:
        throw Error(v(390));
    }
  }
  function Fr(a, u, h) {
    var g = h.boundary;
    if (g === null) return yr(a, u, h);
    if (g.parentFlushed = !0, g.forceClientRender) return a.responseState.generateStaticMarkup || (g = g.errorDigest, u.push("<!--$!-->"), u.push("<template"), g && (u.push(' data-dgst="'), g = J(g), u.push(g), u.push('"')), u.push("></template>")), yr(a, u, h), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
    if (0 < g.pendingTasks) {
      g.rootSegmentID = a.nextSegmentId++, 0 < g.completedSegments.length && a.partialBoundaries.push(g);
      var I = a.responseState, C = I.nextSuspenseID++;
      return I = I.boundaryPrefix + C.toString(16), g = g.id = I, he(u, a.responseState, g), yr(a, u, h), u.push("<!--/$-->");
    }
    if (g.byteSize > a.progressiveChunkSize) return g.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(g), he(u, a.responseState, g.id), yr(a, u, h), u.push("<!--/$-->");
    if (a.responseState.generateStaticMarkup || u.push("<!--$-->"), h = g.completedSegments, h.length !== 1) throw Error(v(391));
    return Fr(a, u, h[0]), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
  }
  function $r(a, u, h) {
    return Qe(u, a.responseState, h.formatContext, h.id), Fr(a, u, h), ze(u, h.formatContext);
  }
  function Lt(a, u, h) {
    for (var g = h.completedSegments, I = 0; I < g.length; I++) or(a, u, h, g[I]);
    if (g.length = 0, a = a.responseState, g = h.id, h = h.rootSegmentID, u.push(a.startInlineScript), a.sentCompleteBoundaryFunction ? u.push('$RC("') : (a.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), g === null) throw Error(v(395));
    return h = h.toString(16), u.push(g), u.push('","'), u.push(a.segmentPrefix), u.push(h), u.push('")<\/script>');
  }
  function or(a, u, h, g) {
    if (g.status === 2) return !0;
    var I = g.id;
    if (I === -1) {
      if ((g.id = h.rootSegmentID) === -1) throw Error(v(392));
      return $r(a, u, g);
    }
    return $r(a, u, g), a = a.responseState, u.push(a.startInlineScript), a.sentCompleteSegmentFunction ? u.push('$RS("') : (a.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(a.segmentPrefix), I = I.toString(16), u.push(I), u.push('","'), u.push(a.placeholderPrefix), u.push(I), u.push('")<\/script>');
  }
  function yt(a, u) {
    try {
      var h = a.completedRootSegment;
      if (h !== null && a.pendingRootTasks === 0) {
        Fr(a, u, h), a.completedRootSegment = null;
        var g = a.responseState.bootstrapChunks;
        for (h = 0; h < g.length - 1; h++) u.push(g[h]);
        h < g.length && u.push(g[h]);
      }
      var I = a.clientRenderedBoundaries, C;
      for (C = 0; C < I.length; C++) {
        var A = I[C];
        g = u;
        var z = a.responseState, q = A.id, le = A.errorDigest, oe = A.errorMessage, Ie = A.errorComponentStack;
        if (g.push(z.startInlineScript), z.sentClientRenderFunction ? g.push('$RX("') : (z.sentClientRenderFunction = !0, g.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), q === null) throw Error(v(395));
        if (g.push(q), g.push('"'), le || oe || Ie) {
          g.push(",");
          var St = st(le || "");
          g.push(St);
        }
        if (oe || Ie) {
          g.push(",");
          var bt = st(oe || "");
          g.push(bt);
        }
        if (Ie) {
          g.push(",");
          var xt = st(Ie);
          g.push(xt);
        }
        if (!g.push(")<\/script>")) {
          a.destination = null, C++, I.splice(0, C);
          return;
        }
      }
      I.splice(0, C);
      var Sr = a.completedBoundaries;
      for (C = 0; C < Sr.length; C++) if (!Lt(a, u, Sr[C])) {
        a.destination = null, C++, Sr.splice(0, C);
        return;
      }
      Sr.splice(0, C);
      var ar = a.partialBoundaries;
      for (C = 0; C < ar.length; C++) {
        var Yr = ar[C];
        e: {
          I = a, A = u;
          var br = Yr.completedSegments;
          for (z = 0; z < br.length; z++) if (!or(I, A, Yr, br[z])) {
            z++, br.splice(0, z);
            var Mr = !1;
            break e;
          }
          br.splice(0, z), Mr = !0;
        }
        if (!Mr) {
          a.destination = null, C++, ar.splice(0, C);
          return;
        }
      }
      ar.splice(0, C);
      var lr = a.completedBoundaries;
      for (C = 0; C < lr.length; C++) if (!Lt(a, u, lr[C])) {
        a.destination = null, C++, lr.splice(0, C);
        return;
      }
      lr.splice(0, C);
    } finally {
      a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function Vr(a, u) {
    try {
      var h = a.abortableTasks;
      h.forEach(function(g) {
        return zr(g, a, u);
      }), h.clear(), a.destination !== null && yt(a, a.destination);
    } catch (g) {
      _e(a, g), Me(a, g);
    }
  }
  function ft() {
  }
  function Ct(a, u, h, g) {
    var I = !1, C = null, A = "", z = { push: function(le) {
      return le !== null && (A += le), !0;
    }, destroy: function(le) {
      I = !0, C = le;
    } }, q = !1;
    if (a = ye(a, K(h, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, ft, void 0, function() {
      q = !0;
    }), gt(a), Vr(a, g), a.status === 1) a.status = 2, z.destroy(a.fatalError);
    else if (a.status !== 2 && a.destination === null) {
      a.destination = z;
      try {
        yt(a, z);
      } catch (le) {
        _e(a, le), Me(a, le);
      }
    }
    if (I) throw C;
    if (!q) throw Error(v(426));
    return A;
  }
  return Co.renderToNodeStream = function() {
    throw Error(v(207));
  }, Co.renderToStaticMarkup = function(a, u) {
    return Ct(a, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Co.renderToStaticNodeStream = function() {
    throw Error(v(208));
  }, Co.renderToString = function(a, u) {
    return Ct(a, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Co.version = "18.3.1", Co;
}
var us = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yl;
function Hl() {
  if (yl) return us;
  yl = 1;
  var R = er;
  function v(i) {
    for (var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, d = 1; d < arguments.length; d++) l += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + i + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var k = null, _ = 0;
  function f(i, l) {
    if (l.length !== 0) if (512 < l.length) 0 < _ && (i.enqueue(new Uint8Array(k.buffer, 0, _)), k = new Uint8Array(512), _ = 0), i.enqueue(l);
    else {
      var d = k.length - _;
      d < l.length && (d === 0 ? i.enqueue(k) : (k.set(l.subarray(0, d), _), i.enqueue(k), l = l.subarray(d)), k = new Uint8Array(512), _ = 0), k.set(l, _), _ += l.length;
    }
  }
  function F(i, l) {
    return f(i, l), !0;
  }
  function U(i) {
    k && 0 < _ && (i.enqueue(new Uint8Array(k.buffer, 0, _)), k = null, _ = 0);
  }
  var B = new TextEncoder();
  function b(i) {
    return B.encode(i);
  }
  function w(i) {
    return B.encode(i);
  }
  function V(i, l) {
    typeof i.error == "function" ? i.error(l) : i.close();
  }
  var D = Object.prototype.hasOwnProperty, L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Q = {}, J = {};
  function ee(i) {
    return D.call(J, i) ? !0 : D.call(Q, i) ? !1 : L.test(i) ? J[i] = !0 : (Q[i] = !0, !1);
  }
  function N(i, l, d, m, P, T, O) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = m, this.attributeNamespace = P, this.mustUseProperty = d, this.propertyName = i, this.type = l, this.sanitizeURL = T, this.removeEmptyString = O;
  }
  var M = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    M[i] = new N(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var l = i[0];
    M[l] = new N(l, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    M[i] = new N(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    M[i] = new N(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    M[i] = new N(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    M[i] = new N(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    M[i] = new N(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    M[i] = new N(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    M[i] = new N(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var ne = /[\-:]([a-z])/g;
  function He(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var l = i.replace(
      ne,
      He
    );
    M[l] = new N(l, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var l = i.replace(ne, He);
    M[l] = new N(l, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var l = i.replace(ne, He);
    M[l] = new N(l, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    M[i] = new N(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), M.xlinkHref = new N("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    M[i] = new N(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var we = {
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
  }, De = ["Webkit", "ms", "Moz", "O"];
  Object.keys(we).forEach(function(i) {
    De.forEach(function(l) {
      l = l + i.charAt(0).toUpperCase() + i.substring(1), we[l] = we[i];
    });
  });
  var Ce = /["'&<>]/;
  function ge(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var l = Ce.exec(i);
    if (l) {
      var d = "", m, P = 0;
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
        P !== m && (d += i.substring(P, m)), P = m + 1, d += l;
      }
      i = P !== m ? d + i.substring(P, m) : d;
    }
    return i;
  }
  var je = /([A-Z])/g, ce = /^ms-/, at = Array.isArray, me = w("<script>"), Le = w("<\/script>"), Z = w('<script src="'), he = w('<script type="module" src="'), Qe = w('" async=""><\/script>'), ze = /(<\/|<)(s)(cript)/gi;
  function ht(i, l, d, m) {
    return "" + l + (d === "s" ? "\\u0073" : "\\u0053") + m;
  }
  function st(i, l, d, m, P) {
    i = i === void 0 ? "" : i, l = l === void 0 ? me : w('<script nonce="' + ge(l) + '">');
    var T = [];
    if (d !== void 0 && T.push(l, b(("" + d).replace(ze, ht)), Le), m !== void 0) for (d = 0; d < m.length; d++) T.push(Z, b(ge(m[d])), Qe);
    if (P !== void 0) for (m = 0; m < P.length; m++) T.push(he, b(ge(P[m])), Qe);
    return { bootstrapChunks: T, startInlineScript: l, placeholderPrefix: w(i + "P:"), segmentPrefix: w(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function K(i, l) {
    return { insertionMode: i, selectedValue: l };
  }
  function dt(i) {
    return K(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Ae(i, l, d) {
    switch (l) {
      case "select":
        return K(1, d.value != null ? d.value : d.defaultValue);
      case "svg":
        return K(2, null);
      case "math":
        return K(3, null);
      case "foreignObject":
        return K(1, null);
      case "table":
        return K(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return K(5, null);
      case "colgroup":
        return K(7, null);
      case "tr":
        return K(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? K(1, null) : i;
  }
  var Re = w("<!-- -->");
  function _t(i, l, d, m) {
    return l === "" ? m : (m && i.push(Re), i.push(b(ge(l))), !0);
  }
  var It = /* @__PURE__ */ new Map(), $e = w(' style="'), Oe = w(":"), wt = w(";");
  function We(i, l, d) {
    if (typeof d != "object") throw Error(v(62));
    l = !0;
    for (var m in d) if (D.call(d, m)) {
      var P = d[m];
      if (P != null && typeof P != "boolean" && P !== "") {
        if (m.indexOf("--") === 0) {
          var T = b(ge(m));
          P = b(ge(("" + P).trim()));
        } else {
          T = m;
          var O = It.get(T);
          O !== void 0 || (O = w(ge(T.replace(je, "-$1").toLowerCase().replace(ce, "-ms-"))), It.set(T, O)), T = O, P = typeof P == "number" ? P === 0 || D.call(we, m) ? b("" + P) : b(P + "px") : b(ge(("" + P).trim()));
        }
        l ? (l = !1, i.push($e, T, Oe, P)) : i.push(wt, T, Oe, P);
      }
    }
    l || i.push(rt);
  }
  var it = w(" "), lt = w('="'), rt = w('"'), kt = w('=""');
  function Ke(i, l, d, m) {
    switch (d) {
      case "style":
        We(i, l, m);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < d.length) || d[0] !== "o" && d[0] !== "O" || d[1] !== "n" && d[1] !== "N") {
      if (l = M.hasOwnProperty(d) ? M[d] : null, l !== null) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!l.acceptsBooleans) return;
        }
        switch (d = b(l.attributeName), l.type) {
          case 3:
            m && i.push(it, d, kt);
            break;
          case 4:
            m === !0 ? i.push(it, d, kt) : m !== !1 && i.push(it, d, lt, b(ge(m)), rt);
            break;
          case 5:
            isNaN(m) || i.push(it, d, lt, b(ge(m)), rt);
            break;
          case 6:
            !isNaN(m) && 1 <= m && i.push(it, d, lt, b(ge(m)), rt);
            break;
          default:
            l.sanitizeURL && (m = "" + m), i.push(it, d, lt, b(ge(m)), rt);
        }
      } else if (ee(d)) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (l = d.toLowerCase().slice(0, 5), l !== "data-" && l !== "aria-") return;
        }
        i.push(it, b(d), lt, b(ge(m)), rt);
      }
    }
  }
  var nt = w(">"), vt = w("/>");
  function X(i, l, d) {
    if (l != null) {
      if (d != null) throw Error(v(60));
      if (typeof l != "object" || !("__html" in l)) throw Error(v(61));
      l = l.__html, l != null && i.push(b("" + l));
    }
  }
  function ae(i) {
    var l = "";
    return R.Children.forEach(i, function(d) {
      d != null && (l += d);
    }), l;
  }
  var te = w(' selected=""');
  function ie(i, l, d, m) {
    i.push(ke(d));
    var P = d = null, T;
    for (T in l) if (D.call(l, T)) {
      var O = l[T];
      if (O != null) switch (T) {
        case "children":
          d = O;
          break;
        case "dangerouslySetInnerHTML":
          P = O;
          break;
        default:
          Ke(i, m, T, O);
      }
    }
    return i.push(nt), X(i, P, d), typeof d == "string" ? (i.push(b(ge(d))), null) : d;
  }
  var fe = w(`
`), se = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ee = /* @__PURE__ */ new Map();
  function ke(i) {
    var l = Ee.get(i);
    if (l === void 0) {
      if (!se.test(i)) throw Error(v(65, i));
      l = w("<" + i), Ee.set(i, l);
    }
    return l;
  }
  var Ve = w("<!DOCTYPE html>");
  function Ht(i, l, d, m, P) {
    switch (l) {
      case "select":
        i.push(ke("select"));
        var T = null, O = null;
        for (Se in d) if (D.call(d, Se)) {
          var $ = d[Se];
          if ($ != null) switch (Se) {
            case "children":
              T = $;
              break;
            case "dangerouslySetInnerHTML":
              O = $;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              Ke(i, m, Se, $);
          }
        }
        return i.push(nt), X(i, O, T), T;
      case "option":
        O = P.selectedValue, i.push(ke("option"));
        var ue = $ = null, be = null, Se = null;
        for (T in d) if (D.call(d, T)) {
          var Ne = d[T];
          if (Ne != null) switch (T) {
            case "children":
              $ = Ne;
              break;
            case "selected":
              be = Ne;
              break;
            case "dangerouslySetInnerHTML":
              Se = Ne;
              break;
            case "value":
              ue = Ne;
            default:
              Ke(i, m, T, Ne);
          }
        }
        if (O != null) if (d = ue !== null ? "" + ue : ae($), at(O)) {
          for (m = 0; m < O.length; m++)
            if ("" + O[m] === d) {
              i.push(te);
              break;
            }
        } else "" + O === d && i.push(te);
        else be && i.push(te);
        return i.push(nt), X(i, Se, $), $;
      case "textarea":
        i.push(ke("textarea")), Se = O = T = null;
        for ($ in d) if (D.call(d, $) && (ue = d[$], ue != null)) switch ($) {
          case "children":
            Se = ue;
            break;
          case "value":
            T = ue;
            break;
          case "defaultValue":
            O = ue;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(v(91));
          default:
            Ke(i, m, $, ue);
        }
        if (T === null && O !== null && (T = O), i.push(nt), Se != null) {
          if (T != null) throw Error(v(92));
          if (at(Se) && 1 < Se.length) throw Error(v(93));
          T = "" + Se;
        }
        return typeof T == "string" && T[0] === `
` && i.push(fe), T !== null && i.push(b(ge("" + T))), null;
      case "input":
        i.push(ke("input")), ue = Se = $ = T = null;
        for (O in d) if (D.call(d, O) && (be = d[O], be != null)) switch (O) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(399, "input"));
          case "defaultChecked":
            ue = be;
            break;
          case "defaultValue":
            $ = be;
            break;
          case "checked":
            Se = be;
            break;
          case "value":
            T = be;
            break;
          default:
            Ke(i, m, O, be);
        }
        return Se !== null ? Ke(
          i,
          m,
          "checked",
          Se
        ) : ue !== null && Ke(i, m, "checked", ue), T !== null ? Ke(i, m, "value", T) : $ !== null && Ke(i, m, "value", $), i.push(vt), null;
      case "menuitem":
        i.push(ke("menuitem"));
        for (var Tt in d) if (D.call(d, Tt) && (T = d[Tt], T != null)) switch (Tt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(400));
          default:
            Ke(i, m, Tt, T);
        }
        return i.push(nt), null;
      case "title":
        i.push(ke("title")), T = null;
        for (Ne in d) if (D.call(d, Ne) && (O = d[Ne], O != null)) switch (Ne) {
          case "children":
            T = O;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(v(434));
          default:
            Ke(i, m, Ne, O);
        }
        return i.push(nt), T;
      case "listing":
      case "pre":
        i.push(ke(l)), O = T = null;
        for (ue in d) if (D.call(d, ue) && ($ = d[ue], $ != null)) switch (ue) {
          case "children":
            T = $;
            break;
          case "dangerouslySetInnerHTML":
            O = $;
            break;
          default:
            Ke(i, m, ue, $);
        }
        if (i.push(nt), O != null) {
          if (T != null) throw Error(v(60));
          if (typeof O != "object" || !("__html" in O)) throw Error(v(61));
          d = O.__html, d != null && (typeof d == "string" && 0 < d.length && d[0] === `
` ? i.push(fe, b(d)) : i.push(b("" + d)));
        }
        return typeof T == "string" && T[0] === `
` && i.push(fe), T;
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
        i.push(ke(l));
        for (var Gt in d) if (D.call(d, Gt) && (T = d[Gt], T != null)) switch (Gt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(399, l));
          default:
            Ke(i, m, Gt, T);
        }
        return i.push(vt), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return ie(i, d, l, m);
      case "html":
        return P.insertionMode === 0 && i.push(Ve), ie(i, d, l, m);
      default:
        if (l.indexOf("-") === -1 && typeof d.is != "string") return ie(i, d, l, m);
        i.push(ke(l)), O = T = null;
        for (be in d) if (D.call(d, be) && ($ = d[be], $ != null)) switch (be) {
          case "children":
            T = $;
            break;
          case "dangerouslySetInnerHTML":
            O = $;
            break;
          case "style":
            We(i, m, $);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            ee(be) && typeof $ != "function" && typeof $ != "symbol" && i.push(it, b(be), lt, b(ge($)), rt);
        }
        return i.push(nt), X(i, O, T), T;
    }
  }
  var Wt = w("</"), Nt = w(">"), Ye = w('<template id="'), Pt = w('"></template>'), mt = w("<!--$-->"), Nr = w('<!--$?--><template id="'), Tr = w('"></template>'), pr = w("<!--$!-->"), en = w("<!--/$-->"), Rr = w("<template"), tr = w('"'), _r = w(' data-dgst="');
  w(' data-msg="'), w(' data-stck="');
  var hr = w("></template>");
  function ut(i, l, d) {
    if (f(i, Nr), d === null) throw Error(v(395));
    return f(i, d), F(i, Tr);
  }
  var ct = w('<div hidden id="'), Dt = w('">'), Te = w("</div>"), zt = w('<svg aria-hidden="true" style="display:none" id="'), vr = w('">'), rr = w("</svg>"), Ft = w('<math aria-hidden="true" style="display:none" id="'), sr = w('">'), Mt = w("</math>"), ot = w('<table hidden id="'), Ir = w('">'), mr = w("</table>"), Pr = w('<table hidden><tbody id="'), et = w('">'), Dr = w("</tbody></table>"), tn = w('<table hidden><tr id="'), rn = w('">'), S = w("</tr></table>"), H = w('<table hidden><colgroup id="'), Y = w('">'), re = w("</colgroup></table>");
  function ve(i, l, d, m) {
    switch (d.insertionMode) {
      case 0:
      case 1:
        return f(i, ct), f(i, l.segmentPrefix), f(i, b(m.toString(16))), F(i, Dt);
      case 2:
        return f(i, zt), f(i, l.segmentPrefix), f(i, b(m.toString(16))), F(i, vr);
      case 3:
        return f(i, Ft), f(i, l.segmentPrefix), f(i, b(m.toString(16))), F(i, sr);
      case 4:
        return f(i, ot), f(i, l.segmentPrefix), f(i, b(m.toString(16))), F(i, Ir);
      case 5:
        return f(i, Pr), f(i, l.segmentPrefix), f(i, b(m.toString(16))), F(i, et);
      case 6:
        return f(i, tn), f(i, l.segmentPrefix), f(i, b(m.toString(16))), F(i, rn);
      case 7:
        return f(
          i,
          H
        ), f(i, l.segmentPrefix), f(i, b(m.toString(16))), F(i, Y);
      default:
        throw Error(v(397));
    }
  }
  function xe(i, l) {
    switch (l.insertionMode) {
      case 0:
      case 1:
        return F(i, Te);
      case 2:
        return F(i, rr);
      case 3:
        return F(i, Mt);
      case 4:
        return F(i, mr);
      case 5:
        return F(i, Dr);
      case 6:
        return F(i, S);
      case 7:
        return F(i, re);
      default:
        throw Error(v(397));
    }
  }
  var ye = w('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), pe = w('$RS("'), Ge = w('","'), _e = w('")<\/script>'), Me = w('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Be = w('$RC("'), $t = w('","'), At = w('")<\/script>'), Xe = w('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ze = w('$RX("'), Ot = w('"'), jt = w(")<\/script>"), gr = w(","), zr = /[<\u2028\u2029]/g;
  function Vt(i) {
    return JSON.stringify(i).replace(zr, function(l) {
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
  var nr = Object.assign, gt = Symbol.for("react.element"), yr = Symbol.for("react.portal"), Fr = Symbol.for("react.fragment"), $r = Symbol.for("react.strict_mode"), Lt = Symbol.for("react.profiler"), or = Symbol.for("react.provider"), yt = Symbol.for("react.context"), Vr = Symbol.for("react.forward_ref"), ft = Symbol.for("react.suspense"), Ct = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), h = Symbol.for("react.scope"), g = Symbol.for("react.debug_trace_mode"), I = Symbol.for("react.legacy_hidden"), C = Symbol.for("react.default_value"), A = Symbol.iterator;
  function z(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case Fr:
        return "Fragment";
      case yr:
        return "Portal";
      case Lt:
        return "Profiler";
      case $r:
        return "StrictMode";
      case ft:
        return "Suspense";
      case Ct:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case yt:
        return (i.displayName || "Context") + ".Consumer";
      case or:
        return (i._context.displayName || "Context") + ".Provider";
      case Vr:
        var l = i.render;
        return i = i.displayName, i || (i = l.displayName || l.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case a:
        return l = i.displayName || null, l !== null ? l : z(i.type) || "Memo";
      case u:
        l = i._payload, i = i._init;
        try {
          return z(i(l));
        } catch {
        }
    }
    return null;
  }
  var q = {};
  function le(i, l) {
    if (i = i.contextTypes, !i) return q;
    var d = {}, m;
    for (m in i) d[m] = l[m];
    return d;
  }
  var oe = null;
  function Ie(i, l) {
    if (i !== l) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var d = l.parent;
      if (i === null) {
        if (d !== null) throw Error(v(401));
      } else {
        if (d === null) throw Error(v(401));
        Ie(i, d);
      }
      l.context._currentValue = l.value;
    }
  }
  function St(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && St(i);
  }
  function bt(i) {
    var l = i.parent;
    l !== null && bt(l), i.context._currentValue = i.value;
  }
  function xt(i, l) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(v(402));
    i.depth === l.depth ? Ie(i, l) : xt(i, l);
  }
  function Sr(i, l) {
    var d = l.parent;
    if (d === null) throw Error(v(402));
    i.depth === d.depth ? Ie(i, d) : Sr(i, d), l.context._currentValue = l.value;
  }
  function ar(i) {
    var l = oe;
    l !== i && (l === null ? bt(i) : i === null ? St(l) : l.depth === i.depth ? Ie(l, i) : l.depth > i.depth ? xt(l, i) : Sr(l, i), oe = i);
  }
  var Yr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, l) {
    i = i._reactInternals, i.queue !== null && i.queue.push(l);
  }, enqueueReplaceState: function(i, l) {
    i = i._reactInternals, i.replace = !0, i.queue = [l];
  }, enqueueForceUpdate: function() {
  } };
  function br(i, l, d, m) {
    var P = i.state !== void 0 ? i.state : null;
    i.updater = Yr, i.props = d, i.state = P;
    var T = { queue: [], replace: !1 };
    i._reactInternals = T;
    var O = l.contextType;
    if (i.context = typeof O == "object" && O !== null ? O._currentValue : m, O = l.getDerivedStateFromProps, typeof O == "function" && (O = O(d, P), P = O == null ? P : nr({}, P, O), i.state = P), typeof l.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (l = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), l !== i.state && Yr.enqueueReplaceState(i, i.state, null), T.queue !== null && 0 < T.queue.length) if (l = T.queue, O = T.replace, T.queue = null, T.replace = !1, O && l.length === 1) i.state = l[0];
    else {
      for (T = O ? l[0] : i.state, P = !0, O = O ? 1 : 0; O < l.length; O++) {
        var $ = l[O];
        $ = typeof $ == "function" ? $.call(i, T, d, m) : $, $ != null && (P ? (P = !1, T = nr({}, T, $)) : nr(T, $));
      }
      i.state = T;
    }
    else T.queue = null;
  }
  var Mr = { id: 1, overflow: "" };
  function lr(i, l, d) {
    var m = i.id;
    i = i.overflow;
    var P = 32 - Ar(m) - 1;
    m &= ~(1 << P), d += 1;
    var T = 32 - Ar(l) + P;
    if (30 < T) {
      var O = P - P % 5;
      return T = (m & (1 << O) - 1).toString(32), m >>= O, P -= O, { id: 1 << 32 - Ar(l) + P | d << P | m, overflow: T + i };
    }
    return { id: 1 << T | d << P | m, overflow: i };
  }
  var Ar = Math.clz32 ? Math.clz32 : Sn, Ra = Math.log, _a = Math.LN2;
  function Sn(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Ra(i) / _a | 0) | 0;
  }
  function ir(i, l) {
    return i === l && (i !== 0 || 1 / i === 1 / l) || i !== i && l !== l;
  }
  var Ia = typeof Object.is == "function" ? Object.is : ir, ur = null, Vn = null, bn = null, Ue = null, Or = !1, xn = !1, jr = 0, xr = null, wn = 0;
  function wr() {
    if (ur === null) throw Error(v(321));
    return ur;
  }
  function Yt() {
    if (0 < wn) throw Error(v(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Yn() {
    return Ue === null ? bn === null ? (Or = !1, bn = Ue = Yt()) : (Or = !0, Ue = bn) : Ue.next === null ? (Or = !1, Ue = Ue.next = Yt()) : (Or = !0, Ue = Ue.next), Ue;
  }
  function nn() {
    Vn = ur = null, xn = !1, bn = null, wn = 0, Ue = xr = null;
  }
  function Ro(i, l) {
    return typeof l == "function" ? l(i) : l;
  }
  function kn(i, l, d) {
    if (ur = wr(), Ue = Yn(), Or) {
      var m = Ue.queue;
      if (l = m.dispatch, xr !== null && (d = xr.get(m), d !== void 0)) {
        xr.delete(m), m = Ue.memoizedState;
        do
          m = i(m, d.action), d = d.next;
        while (d !== null);
        return Ue.memoizedState = m, [m, l];
      }
      return [Ue.memoizedState, l];
    }
    return i = i === Ro ? typeof l == "function" ? l() : l : d !== void 0 ? d(l) : l, Ue.memoizedState = i, i = Ue.queue = { last: null, dispatch: null }, i = i.dispatch = Pa.bind(null, ur, i), [Ue.memoizedState, i];
  }
  function _o(i, l) {
    if (ur = wr(), Ue = Yn(), l = l === void 0 ? null : l, Ue !== null) {
      var d = Ue.memoizedState;
      if (d !== null && l !== null) {
        var m = d[1];
        e: if (m === null) m = !1;
        else {
          for (var P = 0; P < m.length && P < l.length; P++) if (!Ia(l[P], m[P])) {
            m = !1;
            break e;
          }
          m = !0;
        }
        if (m) return d[0];
      }
    }
    return i = i(), Ue.memoizedState = [i, l], i;
  }
  function Pa(i, l, d) {
    if (25 <= wn) throw Error(v(301));
    if (i === ur) if (xn = !0, i = { action: d, next: null }, xr === null && (xr = /* @__PURE__ */ new Map()), d = xr.get(l), d === void 0) xr.set(l, i);
    else {
      for (l = d; l.next !== null; ) l = l.next;
      l.next = i;
    }
  }
  function Da() {
    throw Error(v(394));
  }
  function Cn() {
  }
  var Io = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return wr(), i._currentValue;
  }, useMemo: _o, useReducer: kn, useRef: function(i) {
    ur = wr(), Ue = Yn();
    var l = Ue.memoizedState;
    return l === null ? (i = { current: i }, Ue.memoizedState = i) : l;
  }, useState: function(i) {
    return kn(Ro, i);
  }, useInsertionEffect: Cn, useLayoutEffect: function() {
  }, useCallback: function(i, l) {
    return _o(function() {
      return i;
    }, l);
  }, useImperativeHandle: Cn, useEffect: Cn, useDebugValue: Cn, useDeferredValue: function(i) {
    return wr(), i;
  }, useTransition: function() {
    return wr(), [!1, Da];
  }, useId: function() {
    var i = Vn.treeContext, l = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - Ar(i) - 1)).toString(32) + l;
    var d = on;
    if (d === null) throw Error(v(404));
    return l = jr++, i = ":" + d.idPrefix + "R" + i, 0 < l && (i += "H" + l.toString(32)), i + ":";
  }, useMutableSource: function(i, l) {
    return wr(), l(i._source);
  }, useSyncExternalStore: function(i, l, d) {
    if (d === void 0) throw Error(v(407));
    return d();
  } }, on = null, Gn = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Fa(i) {
    return console.error(i), null;
  }
  function Gr() {
  }
  function Xn(i, l, d, m, P, T, O, $, ue) {
    var be = [], Se = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: m === void 0 ? 12800 : m, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Se, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: P === void 0 ? Fa : P, onAllReady: T === void 0 ? Gr : T, onShellReady: O === void 0 ? Gr : O, onShellError: $ === void 0 ? Gr : $, onFatalError: ue === void 0 ? Gr : ue }, d = Xr(l, 0, null, d, !1, !1), d.parentFlushed = !0, i = Zn(l, i, null, d, Se, q, null, Mr), be.push(i), l;
  }
  function Zn(i, l, d, m, P, T, O, $) {
    i.allPendingTasks++, d === null ? i.pendingRootTasks++ : d.pendingTasks++;
    var ue = { node: l, ping: function() {
      var be = i.pingedTasks;
      be.push(ue), be.length === 1 && jo(i);
    }, blockedBoundary: d, blockedSegment: m, abortSet: P, legacyContext: T, context: O, treeContext: $ };
    return P.add(ue), ue;
  }
  function Xr(i, l, d, m, P, T) {
    return { status: 0, id: -1, index: l, parentFlushed: !1, chunks: [], children: [], formatContext: m, boundary: d, lastPushedText: P, textEmbedded: T };
  }
  function an(i, l) {
    if (i = i.onError(l), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function En(i, l) {
    var d = i.onShellError;
    d(l), d = i.onFatalError, d(l), i.destination !== null ? (i.status = 2, V(i.destination, l)) : (i.status = 1, i.fatalError = l);
  }
  function Po(i, l, d, m, P) {
    for (ur = {}, Vn = l, jr = 0, i = d(m, P); xn; ) xn = !1, jr = 0, wn += 1, Ue = null, i = d(m, P);
    return nn(), i;
  }
  function Do(i, l, d, m) {
    var P = d.render(), T = m.childContextTypes;
    if (T != null) {
      var O = l.legacyContext;
      if (typeof d.getChildContext != "function") m = O;
      else {
        d = d.getChildContext();
        for (var $ in d) if (!($ in T)) throw Error(v(108, z(m) || "Unknown", $));
        m = nr({}, O, d);
      }
      l.legacyContext = m, Et(i, l, P), l.legacyContext = O;
    } else Et(i, l, P);
  }
  function Fo(i, l) {
    if (i && i.defaultProps) {
      l = nr({}, l), i = i.defaultProps;
      for (var d in i) l[d] === void 0 && (l[d] = i[d]);
      return l;
    }
    return l;
  }
  function Tn(i, l, d, m, P) {
    if (typeof d == "function") if (d.prototype && d.prototype.isReactComponent) {
      P = le(d, l.legacyContext);
      var T = d.contextType;
      T = new d(m, typeof T == "object" && T !== null ? T._currentValue : P), br(T, d, m, P), Do(i, l, T, d);
    } else {
      T = le(d, l.legacyContext), P = Po(i, l, d, m, T);
      var O = jr !== 0;
      if (typeof P == "object" && P !== null && typeof P.render == "function" && P.$$typeof === void 0) br(P, d, m, T), Do(i, l, P, d);
      else if (O) {
        m = l.treeContext, l.treeContext = lr(m, 1, 0);
        try {
          Et(i, l, P);
        } finally {
          l.treeContext = m;
        }
      } else Et(i, l, P);
    }
    else if (typeof d == "string") {
      switch (P = l.blockedSegment, T = Ht(P.chunks, d, m, i.responseState, P.formatContext), P.lastPushedText = !1, O = P.formatContext, P.formatContext = Ae(O, d, m), Rn(i, l, T), P.formatContext = O, d) {
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
          P.chunks.push(Wt, b(d), Nt);
      }
      P.lastPushedText = !1;
    } else {
      switch (d) {
        case I:
        case g:
        case $r:
        case Lt:
        case Fr:
          Et(i, l, m.children);
          return;
        case Ct:
          Et(i, l, m.children);
          return;
        case h:
          throw Error(v(343));
        case ft:
          e: {
            d = l.blockedBoundary, P = l.blockedSegment, T = m.fallback, m = m.children, O = /* @__PURE__ */ new Set();
            var $ = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: O, errorDigest: null }, ue = Xr(i, P.chunks.length, $, P.formatContext, !1, !1);
            P.children.push(ue), P.lastPushedText = !1;
            var be = Xr(i, 0, null, P.formatContext, !1, !1);
            be.parentFlushed = !0, l.blockedBoundary = $, l.blockedSegment = be;
            try {
              if (Rn(
                i,
                l,
                m
              ), be.lastPushedText && be.textEmbedded && be.chunks.push(Re), be.status = 1, _n($, be), $.pendingTasks === 0) break e;
            } catch (Se) {
              be.status = 4, $.forceClientRender = !0, $.errorDigest = an(i, Se);
            } finally {
              l.blockedBoundary = d, l.blockedSegment = P;
            }
            l = Zn(i, T, d, ue, O, l.legacyContext, l.context, l.treeContext), i.pingedTasks.push(l);
          }
          return;
      }
      if (typeof d == "object" && d !== null) switch (d.$$typeof) {
        case Vr:
          if (m = Po(i, l, d.render, m, P), jr !== 0) {
            d = l.treeContext, l.treeContext = lr(d, 1, 0);
            try {
              Et(i, l, m);
            } finally {
              l.treeContext = d;
            }
          } else Et(i, l, m);
          return;
        case a:
          d = d.type, m = Fo(d, m), Tn(i, l, d, m, P);
          return;
        case or:
          if (P = m.children, d = d._context, m = m.value, T = d._currentValue, d._currentValue = m, O = oe, oe = m = { parent: O, depth: O === null ? 0 : O.depth + 1, context: d, parentValue: T, value: m }, l.context = m, Et(i, l, P), i = oe, i === null) throw Error(v(403));
          m = i.parentValue, i.context._currentValue = m === C ? i.context._defaultValue : m, i = oe = i.parent, l.context = i;
          return;
        case yt:
          m = m.children, m = m(d._currentValue), Et(i, l, m);
          return;
        case u:
          P = d._init, d = P(d._payload), m = Fo(d, m), Tn(i, l, d, m, void 0);
          return;
      }
      throw Error(v(
        130,
        d == null ? d : typeof d,
        ""
      ));
    }
  }
  function Et(i, l, d) {
    if (l.node = d, typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case gt:
          Tn(i, l, d.type, d.props, d.ref);
          return;
        case yr:
          throw Error(v(257));
        case u:
          var m = d._init;
          d = m(d._payload), Et(i, l, d);
          return;
      }
      if (at(d)) {
        Mo(i, l, d);
        return;
      }
      if (d === null || typeof d != "object" ? m = null : (m = A && d[A] || d["@@iterator"], m = typeof m == "function" ? m : null), m && (m = m.call(d))) {
        if (d = m.next(), !d.done) {
          var P = [];
          do
            P.push(d.value), d = m.next();
          while (!d.done);
          Mo(i, l, P);
        }
        return;
      }
      throw i = Object.prototype.toString.call(d), Error(v(31, i === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : i));
    }
    typeof d == "string" ? (m = l.blockedSegment, m.lastPushedText = _t(l.blockedSegment.chunks, d, i.responseState, m.lastPushedText)) : typeof d == "number" && (m = l.blockedSegment, m.lastPushedText = _t(l.blockedSegment.chunks, "" + d, i.responseState, m.lastPushedText));
  }
  function Mo(i, l, d) {
    for (var m = d.length, P = 0; P < m; P++) {
      var T = l.treeContext;
      l.treeContext = lr(T, m, P);
      try {
        Rn(i, l, d[P]);
      } finally {
        l.treeContext = T;
      }
    }
  }
  function Rn(i, l, d) {
    var m = l.blockedSegment.formatContext, P = l.legacyContext, T = l.context;
    try {
      return Et(i, l, d);
    } catch (ue) {
      if (nn(), typeof ue == "object" && ue !== null && typeof ue.then == "function") {
        d = ue;
        var O = l.blockedSegment, $ = Xr(i, O.chunks.length, null, O.formatContext, O.lastPushedText, !0);
        O.children.push($), O.lastPushedText = !1, i = Zn(i, l.node, l.blockedBoundary, $, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, d.then(i, i), l.blockedSegment.formatContext = m, l.legacyContext = P, l.context = T, ar(T);
      } else throw l.blockedSegment.formatContext = m, l.legacyContext = P, l.context = T, ar(T), ue;
    }
  }
  function Ma(i) {
    var l = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Oo(this, l, i);
  }
  function Ao(i, l, d) {
    var m = i.blockedBoundary;
    i.blockedSegment.status = 3, m === null ? (l.allPendingTasks--, l.status !== 2 && (l.status = 2, l.destination !== null && l.destination.close())) : (m.pendingTasks--, m.forceClientRender || (m.forceClientRender = !0, i = d === void 0 ? Error(v(432)) : d, m.errorDigest = l.onError(i), m.parentFlushed && l.clientRenderedBoundaries.push(m)), m.fallbackAbortableTasks.forEach(function(P) {
      return Ao(P, l, d);
    }), m.fallbackAbortableTasks.clear(), l.allPendingTasks--, l.allPendingTasks === 0 && (m = l.onAllReady, m()));
  }
  function _n(i, l) {
    if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null) {
      var d = l.children[0];
      d.id = l.id, d.parentFlushed = !0, d.status === 1 && _n(i, d);
    } else i.completedSegments.push(l);
  }
  function Oo(i, l, d) {
    if (l === null) {
      if (d.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(v(389));
        i.completedRootSegment = d;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = Gr, l = i.onShellReady, l());
    } else l.pendingTasks--, l.forceClientRender || (l.pendingTasks === 0 ? (d.parentFlushed && d.status === 1 && _n(l, d), l.parentFlushed && i.completedBoundaries.push(l), l.fallbackAbortableTasks.forEach(Ma, i), l.fallbackAbortableTasks.clear()) : d.parentFlushed && d.status === 1 && (_n(l, d), l.completedSegments.length === 1 && l.parentFlushed && i.partialBoundaries.push(l)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function jo(i) {
    if (i.status !== 2) {
      var l = oe, d = Gn.current;
      Gn.current = Io;
      var m = on;
      on = i.responseState;
      try {
        var P = i.pingedTasks, T;
        for (T = 0; T < P.length; T++) {
          var O = P[T], $ = i, ue = O.blockedSegment;
          if (ue.status === 0) {
            ar(O.context);
            try {
              Et($, O, O.node), ue.lastPushedText && ue.textEmbedded && ue.chunks.push(Re), O.abortSet.delete(O), ue.status = 1, Oo($, O.blockedBoundary, ue);
            } catch (Xt) {
              if (nn(), typeof Xt == "object" && Xt !== null && typeof Xt.then == "function") {
                var be = O.ping;
                Xt.then(be, be);
              } else {
                O.abortSet.delete(O), ue.status = 4;
                var Se = O.blockedBoundary, Ne = Xt, Tt = an($, Ne);
                if (Se === null ? En($, Ne) : (Se.pendingTasks--, Se.forceClientRender || (Se.forceClientRender = !0, Se.errorDigest = Tt, Se.parentFlushed && $.clientRenderedBoundaries.push(Se))), $.allPendingTasks--, $.allPendingTasks === 0) {
                  var Gt = $.onAllReady;
                  Gt();
                }
              }
            } finally {
            }
          }
        }
        P.splice(0, T), i.destination !== null && Jn(i, i.destination);
      } catch (Xt) {
        an(i, Xt), En(i, Xt);
      } finally {
        on = m, Gn.current = d, d === Io && ar(l);
      }
    }
  }
  function In(i, l, d) {
    switch (d.parentFlushed = !0, d.status) {
      case 0:
        var m = d.id = i.nextSegmentId++;
        return d.lastPushedText = !1, d.textEmbedded = !1, i = i.responseState, f(l, Ye), f(l, i.placeholderPrefix), i = b(m.toString(16)), f(l, i), F(l, Pt);
      case 1:
        d.status = 2;
        var P = !0;
        m = d.chunks;
        var T = 0;
        d = d.children;
        for (var O = 0; O < d.length; O++) {
          for (P = d[O]; T < P.index; T++) f(l, m[T]);
          P = Pn(i, l, P);
        }
        for (; T < m.length - 1; T++) f(l, m[T]);
        return T < m.length && (P = F(l, m[T])), P;
      default:
        throw Error(v(390));
    }
  }
  function Pn(i, l, d) {
    var m = d.boundary;
    if (m === null) return In(i, l, d);
    if (m.parentFlushed = !0, m.forceClientRender) m = m.errorDigest, F(l, pr), f(l, Rr), m && (f(l, _r), f(l, b(ge(m))), f(l, tr)), F(l, hr), In(i, l, d);
    else if (0 < m.pendingTasks) {
      m.rootSegmentID = i.nextSegmentId++, 0 < m.completedSegments.length && i.partialBoundaries.push(m);
      var P = i.responseState, T = P.nextSuspenseID++;
      P = w(P.boundaryPrefix + T.toString(16)), m = m.id = P, ut(l, i.responseState, m), In(i, l, d);
    } else if (m.byteSize > i.progressiveChunkSize) m.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(m), ut(l, i.responseState, m.id), In(i, l, d);
    else {
      if (F(l, mt), d = m.completedSegments, d.length !== 1) throw Error(v(391));
      Pn(i, l, d[0]);
    }
    return F(l, en);
  }
  function Lo(i, l, d) {
    return ve(l, i.responseState, d.formatContext, d.id), Pn(i, l, d), xe(l, d.formatContext);
  }
  function Bo(i, l, d) {
    for (var m = d.completedSegments, P = 0; P < m.length; P++) Uo(i, l, d, m[P]);
    if (m.length = 0, i = i.responseState, m = d.id, d = d.rootSegmentID, f(l, i.startInlineScript), i.sentCompleteBoundaryFunction ? f(l, Be) : (i.sentCompleteBoundaryFunction = !0, f(l, Me)), m === null) throw Error(v(395));
    return d = b(d.toString(16)), f(l, m), f(l, $t), f(l, i.segmentPrefix), f(l, d), F(l, At);
  }
  function Uo(i, l, d, m) {
    if (m.status === 2) return !0;
    var P = m.id;
    if (P === -1) {
      if ((m.id = d.rootSegmentID) === -1) throw Error(v(392));
      return Lo(i, l, m);
    }
    return Lo(i, l, m), i = i.responseState, f(l, i.startInlineScript), i.sentCompleteSegmentFunction ? f(l, pe) : (i.sentCompleteSegmentFunction = !0, f(l, ye)), f(l, i.segmentPrefix), P = b(P.toString(16)), f(l, P), f(l, Ge), f(l, i.placeholderPrefix), f(l, P), F(l, _e);
  }
  function Jn(i, l) {
    k = new Uint8Array(512), _ = 0;
    try {
      var d = i.completedRootSegment;
      if (d !== null && i.pendingRootTasks === 0) {
        Pn(i, l, d), i.completedRootSegment = null;
        var m = i.responseState.bootstrapChunks;
        for (d = 0; d < m.length - 1; d++) f(l, m[d]);
        d < m.length && F(l, m[d]);
      }
      var P = i.clientRenderedBoundaries, T;
      for (T = 0; T < P.length; T++) {
        var O = P[T];
        m = l;
        var $ = i.responseState, ue = O.id, be = O.errorDigest, Se = O.errorMessage, Ne = O.errorComponentStack;
        if (f(m, $.startInlineScript), $.sentClientRenderFunction ? f(m, Ze) : ($.sentClientRenderFunction = !0, f(
          m,
          Xe
        )), ue === null) throw Error(v(395));
        f(m, ue), f(m, Ot), (be || Se || Ne) && (f(m, gr), f(m, b(Vt(be || "")))), (Se || Ne) && (f(m, gr), f(m, b(Vt(Se || "")))), Ne && (f(m, gr), f(m, b(Vt(Ne)))), F(m, jt);
      }
      P.splice(0, T);
      var Tt = i.completedBoundaries;
      for (T = 0; T < Tt.length; T++) Bo(i, l, Tt[T]);
      Tt.splice(0, T), U(l), k = new Uint8Array(512), _ = 0;
      var Gt = i.partialBoundaries;
      for (T = 0; T < Gt.length; T++) {
        var Xt = Gt[T];
        e: {
          P = i, O = l;
          var Dn = Xt.completedSegments;
          for ($ = 0; $ < Dn.length; $++) if (!Uo(
            P,
            O,
            Xt,
            Dn[$]
          )) {
            $++, Dn.splice(0, $);
            var Wo = !1;
            break e;
          }
          Dn.splice(0, $), Wo = !0;
        }
        if (!Wo) {
          i.destination = null, T++, Gt.splice(0, T);
          return;
        }
      }
      Gt.splice(0, T);
      var sn = i.completedBoundaries;
      for (T = 0; T < sn.length; T++) Bo(i, l, sn[T]);
      sn.splice(0, T);
    } finally {
      U(l), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && l.close();
    }
  }
  function Ho(i, l) {
    try {
      var d = i.abortableTasks;
      d.forEach(function(m) {
        return Ao(m, i, l);
      }), d.clear(), i.destination !== null && Jn(i, i.destination);
    } catch (m) {
      an(i, m), En(i, m);
    }
  }
  return us.renderToReadableStream = function(i, l) {
    return new Promise(function(d, m) {
      var P, T, O = new Promise(function(Se, Ne) {
        T = Se, P = Ne;
      }), $ = Xn(i, st(l ? l.identifierPrefix : void 0, l ? l.nonce : void 0, l ? l.bootstrapScriptContent : void 0, l ? l.bootstrapScripts : void 0, l ? l.bootstrapModules : void 0), dt(l ? l.namespaceURI : void 0), l ? l.progressiveChunkSize : void 0, l ? l.onError : void 0, T, function() {
        var Se = new ReadableStream({ type: "bytes", pull: function(Ne) {
          if ($.status === 1) $.status = 2, V(Ne, $.fatalError);
          else if ($.status !== 2 && $.destination === null) {
            $.destination = Ne;
            try {
              Jn($, Ne);
            } catch (Tt) {
              an($, Tt), En($, Tt);
            }
          }
        }, cancel: function() {
          Ho($);
        } }, { highWaterMark: 0 });
        Se.allReady = O, d(Se);
      }, function(Se) {
        O.catch(function() {
        }), m(Se);
      }, P);
      if (l && l.signal) {
        var ue = l.signal, be = function() {
          Ho($, ue.reason), ue.removeEventListener("abort", be);
        };
        ue.addEventListener("abort", be);
      }
      jo($);
    });
  }, us.version = "18.3.1", us;
}
var Eo = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sl;
function Wl() {
  return Sl || (Sl = 1, process.env.NODE_ENV !== "production" && function() {
    var R = er, v = "18.3.1", k = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          r[o - 1] = arguments[o];
        F("warn", e, r);
      }
    }
    function f(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          r[o - 1] = arguments[o];
        F("error", e, r);
      }
    }
    function F(e, t, r) {
      {
        var o = k.ReactDebugCurrentFrame, s = o.getStackAddendum();
        s !== "" && (t += "%s", r = r.concat([s]));
        var c = r.map(function(p) {
          return String(p);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    function U(e) {
      e();
    }
    function B(e) {
    }
    function b(e, t) {
      w(e, t);
    }
    function w(e, t) {
      return e.push(t);
    }
    function V(e) {
    }
    function D(e) {
      e.push(null);
    }
    function L(e) {
      return e;
    }
    function Q(e) {
      return e;
    }
    function J(e, t) {
      e.destroy(t);
    }
    function ee(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function N(e) {
      try {
        return M(e), !1;
      } catch {
        return !0;
      }
    }
    function M(e) {
      return "" + e;
    }
    function ne(e, t) {
      if (N(e))
        return f("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ee(e)), M(e);
    }
    function He(e, t) {
      if (N(e))
        return f("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ee(e)), M(e);
    }
    function we(e) {
      if (N(e))
        return f("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", ee(e)), M(e);
    }
    var De = Object.prototype.hasOwnProperty, Ce = 0, ge = 1, je = 2, ce = 3, at = 4, me = 5, Le = 6, Z = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", he = Z + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Qe = new RegExp("^[" + Z + "][" + he + "]*$"), ze = {}, ht = {};
    function st(e) {
      return De.call(ht, e) ? !0 : De.call(ze, e) ? !1 : Qe.test(e) ? (ht[e] = !0, !0) : (ze[e] = !0, f("Invalid attribute name: `%s`", e), !1);
    }
    function K(e, t, r, o) {
      if (r !== null && r.type === Ce)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (r !== null)
            return !r.acceptsBooleans;
          var s = e.toLowerCase().slice(0, 5);
          return s !== "data-" && s !== "aria-";
        }
        default:
          return !1;
      }
    }
    function dt(e) {
      return Re.hasOwnProperty(e) ? Re[e] : null;
    }
    function Ae(e, t, r, o, s, c, p) {
      this.acceptsBooleans = t === je || t === ce || t === at, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = p;
    }
    var Re = {}, _t = [
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
    _t.forEach(function(e) {
      Re[e] = new Ae(
        e,
        Ce,
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
      var t = e[0], r = e[1];
      Re[t] = new Ae(
        t,
        ge,
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
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Re[e] = new Ae(
        e,
        je,
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
      Re[e] = new Ae(
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
      Re[e] = new Ae(
        e,
        ce,
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
      Re[e] = new Ae(
        e,
        ce,
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
      Re[e] = new Ae(
        e,
        at,
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
      Re[e] = new Ae(
        e,
        Le,
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
      Re[e] = new Ae(
        e,
        me,
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
    var It = /[\-\:]([a-z])/g, $e = function(e) {
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
      var t = e.replace(It, $e);
      Re[t] = new Ae(
        t,
        ge,
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
      var t = e.replace(It, $e);
      Re[t] = new Ae(
        t,
        ge,
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
      var t = e.replace(It, $e);
      Re[t] = new Ae(
        t,
        ge,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Re[e] = new Ae(
        e,
        ge,
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
    var Oe = "xlinkHref";
    Re[Oe] = new Ae(
      "xlinkHref",
      ge,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Re[e] = new Ae(
        e,
        ge,
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
    var wt = {
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
    function We(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var it = ["Webkit", "ms", "Moz", "O"];
    Object.keys(wt).forEach(function(e) {
      it.forEach(function(t) {
        wt[We(t, e)] = wt[e];
      });
    });
    var lt = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function rt(e, t) {
      lt[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || f("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || f("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function kt(e, t) {
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
    var Ke = {
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
    }, nt = {}, vt = new RegExp("^(aria)-[" + he + "]*$"), X = new RegExp("^(aria)[A-Z][" + he + "]*$");
    function ae(e, t) {
      {
        if (De.call(nt, t) && nt[t])
          return !0;
        if (X.test(t)) {
          var r = "aria-" + t.slice(4).toLowerCase(), o = Ke.hasOwnProperty(r) ? r : null;
          if (o == null)
            return f("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), nt[t] = !0, !0;
          if (t !== o)
            return f("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), nt[t] = !0, !0;
        }
        if (vt.test(t)) {
          var s = t.toLowerCase(), c = Ke.hasOwnProperty(s) ? s : null;
          if (c == null)
            return nt[t] = !0, !1;
          if (t !== c)
            return f("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), nt[t] = !0, !0;
        }
      }
      return !0;
    }
    function te(e, t) {
      {
        var r = [];
        for (var o in t) {
          var s = ae(e, o);
          s || r.push(o);
        }
        var c = r.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        r.length === 1 ? f("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e) : r.length > 1 && f("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e);
      }
    }
    function ie(e, t) {
      kt(e, t) || te(e, t);
    }
    var fe = !1;
    function se(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !fe && (fe = !0, e === "select" && t.multiple ? f("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : f("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ee = {
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
    }, ke = function() {
    };
    {
      var Ve = {}, Ht = /^on./, Wt = /^on[^A-Z]/, Nt = new RegExp("^(aria)-[" + he + "]*$"), Ye = new RegExp("^(aria)[A-Z][" + he + "]*$");
      ke = function(e, t, r, o) {
        if (De.call(Ve, t) && Ve[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return f("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ve[t] = !0, !0;
        if (o != null) {
          var c = o.registrationNameDependencies, p = o.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var y = p.hasOwnProperty(s) ? p[s] : null;
          if (y != null)
            return f("Invalid event handler property `%s`. Did you mean `%s`?", t, y), Ve[t] = !0, !0;
          if (Ht.test(t))
            return f("Unknown event handler property `%s`. It will be ignored.", t), Ve[t] = !0, !0;
        } else if (Ht.test(t))
          return Wt.test(t) && f("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Ve[t] = !0, !0;
        if (Nt.test(t) || Ye.test(t))
          return !0;
        if (s === "innerhtml")
          return f("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ve[t] = !0, !0;
        if (s === "aria")
          return f("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ve[t] = !0, !0;
        if (s === "is" && r !== null && r !== void 0 && typeof r != "string")
          return f("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof r), Ve[t] = !0, !0;
        if (typeof r == "number" && isNaN(r))
          return f("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Ve[t] = !0, !0;
        var E = dt(t), j = E !== null && E.type === Ce;
        if (Ee.hasOwnProperty(s)) {
          var W = Ee[s];
          if (W !== t)
            return f("Invalid DOM property `%s`. Did you mean `%s`?", t, W), Ve[t] = !0, !0;
        } else if (!j && t !== s)
          return f("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), Ve[t] = !0, !0;
        return typeof r == "boolean" && K(t, r, E) ? (r ? f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', r, t, t, r, t) : f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', r, t, t, r, t, t, t), Ve[t] = !0, !0) : j ? !0 : K(t, r, E) ? (Ve[t] = !0, !1) : ((r === "false" || r === "true") && E !== null && E.type === ce && (f("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", r, t, r === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, r), Ve[t] = !0), !0);
      };
    }
    var Pt = function(e, t, r) {
      {
        var o = [];
        for (var s in t) {
          var c = ke(e, s, t[s], r);
          c || o.push(s);
        }
        var p = o.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        o.length === 1 ? f("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e) : o.length > 1 && f("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e);
      }
    };
    function mt(e, t, r) {
      kt(e, t) || Pt(e, t, r);
    }
    var Nr = function() {
    };
    {
      var Tr = /^(?:webkit|moz|o)[A-Z]/, pr = /^-ms-/, en = /-(.)/g, Rr = /;\s*$/, tr = {}, _r = {}, hr = !1, ut = !1, ct = function(e) {
        return e.replace(en, function(t, r) {
          return r.toUpperCase();
        });
      }, Dt = function(e) {
        tr.hasOwnProperty(e) && tr[e] || (tr[e] = !0, f(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ct(e.replace(pr, "ms-"))
        ));
      }, Te = function(e) {
        tr.hasOwnProperty(e) && tr[e] || (tr[e] = !0, f("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, zt = function(e, t) {
        _r.hasOwnProperty(t) && _r[t] || (_r[t] = !0, f(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Rr, "")));
      }, vr = function(e, t) {
        hr || (hr = !0, f("`NaN` is an invalid value for the `%s` css style property.", e));
      }, rr = function(e, t) {
        ut || (ut = !0, f("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Nr = function(e, t) {
        e.indexOf("-") > -1 ? Dt(e) : Tr.test(e) ? Te(e) : Rr.test(t) && zt(e, t), typeof t == "number" && (isNaN(t) ? vr(e, t) : isFinite(t) || rr(e, t));
      };
    }
    var Ft = Nr, sr = /["'&<>]/;
    function Mt(e) {
      we(e);
      var t = "" + e, r = sr.exec(t);
      if (!r)
        return t;
      var o, s = "", c, p = 0;
      for (c = r.index; c < t.length; c++) {
        switch (t.charCodeAt(c)) {
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
        p !== c && (s += t.substring(p, c)), p = c + 1, s += o;
      }
      return p !== c ? s + t.substring(p, c) : s;
    }
    function ot(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : Mt(e);
    }
    var Ir = /([A-Z])/g, mr = /^ms-/;
    function Pr(e) {
      return e.replace(Ir, "-$1").toLowerCase().replace(mr, "-ms-");
    }
    var et = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Dr = !1;
    function tn(e) {
      !Dr && et.test(e) && (Dr = !0, f("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var rn = Array.isArray;
    function S(e) {
      return rn(e);
    }
    var H = "<script>";
    function Y(e, t, r, o, s) {
      var c = e === void 0 ? "" : e, p = H, y = [];
      return {
        bootstrapChunks: y,
        startInlineScript: p,
        placeholderPrefix: c + "P:",
        segmentPrefix: c + "S:",
        boundaryPrefix: c + "B:",
        idPrefix: c,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var re = 0, ve = 1, xe = 2, ye = 3, pe = 4, Ge = 5, _e = 6, Me = 7;
    function Be(e, t) {
      return {
        insertionMode: e,
        selectedValue: t
      };
    }
    function $t(e, t, r) {
      switch (t) {
        case "select":
          return Be(ve, r.value != null ? r.value : r.defaultValue);
        case "svg":
          return Be(xe, null);
        case "math":
          return Be(ye, null);
        case "foreignObject":
          return Be(ve, null);
        // Table parents are special in that their children can only be created at all if they're
        // wrapped in a table parent. So we need to encode that we're entering this mode.
        case "table":
          return Be(pe, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Be(Ge, null);
        case "colgroup":
          return Be(Me, null);
        case "tr":
          return Be(_e, null);
      }
      return e.insertionMode >= pe || e.insertionMode === re ? Be(ve, null) : e;
    }
    var At = null;
    function Xe(e) {
      var t = e.nextSuspenseID++;
      return e.boundaryPrefix + t.toString(16);
    }
    function Ze(e, t, r) {
      var o = e.idPrefix, s = ":" + o + "R" + t;
      return r > 0 && (s += "H" + r.toString(32)), s + ":";
    }
    function Ot(e) {
      return ot(e);
    }
    var jt = "<!-- -->";
    function gr(e, t, r, o) {
      return t === "" ? o : (o && e.push(jt), e.push(Ot(t)), !0);
    }
    function zr(e, t, r, o) {
      r && o && e.push(jt);
    }
    var Vt = /* @__PURE__ */ new Map();
    function nr(e) {
      var t = Vt.get(e);
      if (t !== void 0)
        return t;
      var r = ot(Pr(e));
      return Vt.set(e, r), r;
    }
    var gt = ' style="', yr = ":", Fr = ";";
    function $r(e, t, r) {
      if (typeof r != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var o = !0;
      for (var s in r)
        if (De.call(r, s)) {
          var c = r[s];
          if (!(c == null || typeof c == "boolean" || c === "")) {
            var p = void 0, y = void 0, E = s.indexOf("--") === 0;
            E ? (p = ot(s), He(c, s), y = ot(("" + c).trim())) : (Ft(s, c), p = nr(s), typeof c == "number" ? c !== 0 && !De.call(wt, s) ? y = c + "px" : y = "" + c : (He(c, s), y = ot(("" + c).trim()))), o ? (o = !1, e.push(gt, p, yr, y)) : e.push(Fr, p, yr, y);
          }
        }
      o || e.push(yt);
    }
    var Lt = " ", or = '="', yt = '"', Vr = '=""';
    function ft(e, t, r, o) {
      switch (r) {
        case "style": {
          $r(e, t, o);
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
        !(r.length > 2 && (r[0] === "o" || r[0] === "O") && (r[1] === "n" || r[1] === "N"))
      ) {
        var s = dt(r);
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
          var c = s.attributeName, p = c;
          switch (s.type) {
            case ce:
              o && e.push(Lt, p, Vr);
              return;
            case at:
              o === !0 ? e.push(Lt, p, Vr) : o === !1 || e.push(Lt, p, or, ot(o), yt);
              return;
            case me:
              isNaN(o) || e.push(Lt, p, or, ot(o), yt);
              break;
            case Le:
              !isNaN(o) && o >= 1 && e.push(Lt, p, or, ot(o), yt);
              break;
            default:
              s.sanitizeURL && (ne(o, c), o = "" + o, tn(o)), e.push(Lt, p, or, ot(o), yt);
          }
        } else if (st(r)) {
          switch (typeof o) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return;
            case "boolean": {
              var y = r.toLowerCase().slice(0, 5);
              if (y !== "data-" && y !== "aria-")
                return;
            }
          }
          e.push(Lt, r, or, ot(o), yt);
        }
      }
    }
    var Ct = ">", a = "/>";
    function u(e, t, r) {
      if (t != null) {
        if (r != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t != "object" || !("__html" in t))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = t.__html;
        o != null && (we(o), e.push("" + o));
      }
    }
    var h = !1, g = !1, I = !1, C = !1, A = !1, z = !1, q = !1;
    function le(e, t) {
      {
        var r = e[t];
        if (r != null) {
          var o = S(r);
          e.multiple && !o ? f("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && o && f("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t);
        }
      }
    }
    function oe(e, t, r) {
      rt("select", t), le(t, "value"), le(t, "defaultValue"), t.value !== void 0 && t.defaultValue !== void 0 && !I && (f("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), I = !0), e.push(ir("select"));
      var o = null, s = null;
      for (var c in t)
        if (De.call(t, c)) {
          var p = t[c];
          if (p == null)
            continue;
          switch (c) {
            case "children":
              o = p;
              break;
            case "dangerouslySetInnerHTML":
              s = p;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ft(e, r, c, p);
              break;
          }
        }
      return e.push(Ct), u(e, s, o), o;
    }
    function Ie(e) {
      var t = "";
      return R.Children.forEach(e, function(r) {
        r != null && (t += r, !A && typeof r != "string" && typeof r != "number" && (A = !0, f("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), t;
    }
    var St = ' selected=""';
    function bt(e, t, r, o) {
      var s = o.selectedValue;
      e.push(ir("option"));
      var c = null, p = null, y = null, E = null;
      for (var j in t)
        if (De.call(t, j)) {
          var W = t[j];
          if (W == null)
            continue;
          switch (j) {
            case "children":
              c = W;
              break;
            case "selected":
              y = W, q || (f("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), q = !0);
              break;
            case "dangerouslySetInnerHTML":
              E = W;
              break;
            // eslint-disable-next-line-no-fallthrough
            case "value":
              p = W;
            // We intentionally fallthrough to also set the attribute on the node.
            // eslint-disable-next-line-no-fallthrough
            default:
              ft(e, r, j, W);
              break;
          }
        }
      if (s != null) {
        var G;
        if (p !== null ? (ne(p, "value"), G = "" + p) : (E !== null && (z || (z = !0, f("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), G = Ie(c)), S(s))
          for (var de = 0; de < s.length; de++) {
            ne(s[de], "value");
            var Fe = "" + s[de];
            if (Fe === G) {
              e.push(St);
              break;
            }
          }
        else
          ne(s, "select.value"), "" + s === G && e.push(St);
      } else y && e.push(St);
      return e.push(Ct), u(e, E, c), c;
    }
    function xt(e, t, r) {
      rt("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !g && (f("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), g = !0), t.value !== void 0 && t.defaultValue !== void 0 && !h && (f("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), h = !0), e.push(ir("input"));
      var o = null, s = null, c = null, p = null;
      for (var y in t)
        if (De.call(t, y)) {
          var E = t[y];
          if (E == null)
            continue;
          switch (y) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            case "defaultChecked":
              p = E;
              break;
            case "defaultValue":
              s = E;
              break;
            case "checked":
              c = E;
              break;
            case "value":
              o = E;
              break;
            default:
              ft(e, r, y, E);
              break;
          }
        }
      return c !== null ? ft(e, r, "checked", c) : p !== null && ft(e, r, "checked", p), o !== null ? ft(e, r, "value", o) : s !== null && ft(e, r, "value", s), e.push(a), null;
    }
    function Sr(e, t, r) {
      rt("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !C && (f("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), C = !0), e.push(ir("textarea"));
      var o = null, s = null, c = null;
      for (var p in t)
        if (De.call(t, p)) {
          var y = t[p];
          if (y == null)
            continue;
          switch (p) {
            case "children":
              c = y;
              break;
            case "value":
              o = y;
              break;
            case "defaultValue":
              s = y;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            // eslint-disable-next-line-no-fallthrough
            default:
              ft(e, r, p, y);
              break;
          }
        }
      if (o === null && s !== null && (o = s), e.push(Ct), c != null) {
        if (f("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), o != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (S(c)) {
          if (c.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          we(c[0]), o = "" + c[0];
        }
        we(c), o = "" + c;
      }
      return typeof o == "string" && o[0] === `
` && e.push(Ar), o !== null && (ne(o, "value"), e.push(Ot("" + o))), null;
    }
    function ar(e, t, r, o) {
      e.push(ir(r));
      for (var s in t)
        if (De.call(t, s)) {
          var c = t[s];
          if (c == null)
            continue;
          switch (s) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(r + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              ft(e, o, s, c);
              break;
          }
        }
      return e.push(a), null;
    }
    function Yr(e, t, r) {
      e.push(ir("menuitem"));
      for (var o in t)
        if (De.call(t, o)) {
          var s = t[o];
          if (s == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              ft(e, r, o, s);
              break;
          }
        }
      return e.push(Ct), null;
    }
    function br(e, t, r) {
      e.push(ir("title"));
      var o = null;
      for (var s in t)
        if (De.call(t, s)) {
          var c = t[s];
          if (c == null)
            continue;
          switch (s) {
            case "children":
              o = c;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            // eslint-disable-next-line-no-fallthrough
            default:
              ft(e, r, s, c);
              break;
          }
        }
      e.push(Ct);
      {
        var p = Array.isArray(o) && o.length < 2 ? o[0] || null : o;
        Array.isArray(o) && o.length > 1 ? f("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : p != null && p.$$typeof != null ? f("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : p != null && typeof p != "string" && typeof p != "number" && f("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return o;
    }
    function Mr(e, t, r, o) {
      e.push(ir(r));
      var s = null, c = null;
      for (var p in t)
        if (De.call(t, p)) {
          var y = t[p];
          if (y == null)
            continue;
          switch (p) {
            case "children":
              s = y;
              break;
            case "dangerouslySetInnerHTML":
              c = y;
              break;
            default:
              ft(e, o, p, y);
              break;
          }
        }
      return e.push(Ct), u(e, c, s), typeof s == "string" ? (e.push(Ot(s)), null) : s;
    }
    function lr(e, t, r, o) {
      e.push(ir(r));
      var s = null, c = null;
      for (var p in t)
        if (De.call(t, p)) {
          var y = t[p];
          if (y == null)
            continue;
          switch (p) {
            case "children":
              s = y;
              break;
            case "dangerouslySetInnerHTML":
              c = y;
              break;
            case "style":
              $r(e, o, y);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              st(p) && typeof y != "function" && typeof y != "symbol" && e.push(Lt, p, or, ot(y), yt);
              break;
          }
        }
      return e.push(Ct), u(e, c, s), s;
    }
    var Ar = `
`;
    function Ra(e, t, r, o) {
      e.push(ir(r));
      var s = null, c = null;
      for (var p in t)
        if (De.call(t, p)) {
          var y = t[p];
          if (y == null)
            continue;
          switch (p) {
            case "children":
              s = y;
              break;
            case "dangerouslySetInnerHTML":
              c = y;
              break;
            default:
              ft(e, o, p, y);
              break;
          }
        }
      if (e.push(Ct), c != null) {
        if (s != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof c != "object" || !("__html" in c))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var E = c.__html;
        E != null && (typeof E == "string" && E.length > 0 && E[0] === `
` ? e.push(Ar, E) : (we(E), e.push("" + E)));
      }
      return typeof s == "string" && s[0] === `
` && e.push(Ar), s;
    }
    var _a = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Sn = /* @__PURE__ */ new Map();
    function ir(e) {
      var t = Sn.get(e);
      if (t === void 0) {
        if (!_a.test(e))
          throw new Error("Invalid tag: " + e);
        t = "<" + e, Sn.set(e, t);
      }
      return t;
    }
    var Ia = "<!DOCTYPE html>";
    function ur(e, t, r, o, s) {
      switch (ie(t, r), se(t, r), mt(t, r, null), !r.suppressContentEditableWarning && r.contentEditable && r.children != null && f("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), s.insertionMode !== xe && s.insertionMode !== ye && t.indexOf("-") === -1 && typeof r.is != "string" && t.toLowerCase() !== t && f("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
        // Special tags
        case "select":
          return oe(e, r, o);
        case "option":
          return bt(e, r, o, s);
        case "textarea":
          return Sr(e, r, o);
        case "input":
          return xt(e, r, o);
        case "menuitem":
          return Yr(e, r, o);
        case "title":
          return br(e, r, o);
        // Newline eating tags
        case "listing":
        case "pre":
          return Ra(e, r, t, o);
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
          return ar(e, r, t, o);
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
          return Mr(e, r, t, o);
        case "html":
          return s.insertionMode === re && e.push(Ia), Mr(e, r, t, o);
        default:
          return t.indexOf("-") === -1 && typeof r.is != "string" ? Mr(e, r, t, o) : lr(e, r, t, o);
      }
    }
    var Vn = "</", bn = ">";
    function Ue(e, t, r) {
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
          e.push(Vn, t, bn);
      }
    }
    function Or(e, t) {
      for (var r = t.bootstrapChunks, o = 0; o < r.length - 1; o++)
        b(e, r[o]);
      return o < r.length ? w(e, r[o]) : !0;
    }
    var xn = '<template id="', jr = '"></template>';
    function xr(e, t, r) {
      b(e, xn), b(e, t.placeholderPrefix);
      var o = r.toString(16);
      return b(e, o), w(e, jr);
    }
    var wn = "<!--$-->", wr = '<!--$?--><template id="', Yt = '"></template>', Yn = "<!--$!-->", nn = "<!--/$-->", Ro = "<template", kn = '"', _o = ' data-dgst="', Pa = ' data-msg="', Da = ' data-stck="', Cn = "></template>";
    function Io(e, t) {
      return w(e, wn);
    }
    function on(e, t, r) {
      if (b(e, wr), r === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return b(e, r), w(e, Yt);
    }
    function Gn(e, t, r, o, s) {
      var c;
      return c = w(e, Yn), b(e, Ro), r && (b(e, _o), b(e, ot(r)), b(e, kn)), o && (b(e, Pa), b(e, ot(o)), b(e, kn)), s && (b(e, Da), b(e, ot(s)), b(e, kn)), c = w(e, Cn), c;
    }
    function Fa(e, t) {
      return w(e, nn);
    }
    function Gr(e, t) {
      return w(e, nn);
    }
    function Xn(e, t) {
      return w(e, nn);
    }
    var Zn = '<div hidden id="', Xr = '">', an = "</div>", En = '<svg aria-hidden="true" style="display:none" id="', Po = '">', Do = "</svg>", Fo = '<math aria-hidden="true" style="display:none" id="', Tn = '">', Et = "</math>", Mo = '<table hidden id="', Rn = '">', Ma = "</table>", Ao = '<table hidden><tbody id="', _n = '">', Oo = "</tbody></table>", jo = '<table hidden><tr id="', In = '">', Pn = "</tr></table>", Lo = '<table hidden><colgroup id="', Bo = '">', Uo = "</colgroup></table>";
    function Jn(e, t, r, o) {
      switch (r.insertionMode) {
        case re:
        case ve:
          return b(e, Zn), b(e, t.segmentPrefix), b(e, o.toString(16)), w(e, Xr);
        case xe:
          return b(e, En), b(e, t.segmentPrefix), b(e, o.toString(16)), w(e, Po);
        case ye:
          return b(e, Fo), b(e, t.segmentPrefix), b(e, o.toString(16)), w(e, Tn);
        case pe:
          return b(e, Mo), b(e, t.segmentPrefix), b(e, o.toString(16)), w(e, Rn);
        // TODO: For the rest of these, there will be extra wrapper nodes that never
        // get deleted from the document. We need to delete the table too as part
        // of the injected scripts. They are invisible though so it's not too terrible
        // and it's kind of an edge case to suspend in a table. Totally supported though.
        case Ge:
          return b(e, Ao), b(e, t.segmentPrefix), b(e, o.toString(16)), w(e, _n);
        case _e:
          return b(e, jo), b(e, t.segmentPrefix), b(e, o.toString(16)), w(e, In);
        case Me:
          return b(e, Lo), b(e, t.segmentPrefix), b(e, o.toString(16)), w(e, Bo);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ho(e, t) {
      switch (t.insertionMode) {
        case re:
        case ve:
          return w(e, an);
        case xe:
          return w(e, Do);
        case ye:
          return w(e, Et);
        case pe:
          return w(e, Ma);
        case Ge:
          return w(e, Oo);
        case _e:
          return w(e, Pn);
        case Me:
          return w(e, Uo);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var i = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", l = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', d = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', m = i + ';$RS("', P = '$RS("', T = '","', O = '")<\/script>';
    function $(e, t, r) {
      b(e, t.startInlineScript), t.sentCompleteSegmentFunction ? b(e, P) : (t.sentCompleteSegmentFunction = !0, b(e, m)), b(e, t.segmentPrefix);
      var o = r.toString(16);
      return b(e, o), b(e, T), b(e, t.placeholderPrefix), b(e, o), w(e, O);
    }
    var ue = l + ';$RC("', be = '$RC("', Se = '","', Ne = '")<\/script>';
    function Tt(e, t, r, o) {
      if (b(e, t.startInlineScript), t.sentCompleteBoundaryFunction ? b(e, be) : (t.sentCompleteBoundaryFunction = !0, b(e, ue)), r === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var s = o.toString(16);
      return b(e, r), b(e, Se), b(e, t.segmentPrefix), b(e, s), w(e, Ne);
    }
    var Gt = d + ';$RX("', Xt = '$RX("', Dn = '"', Wo = ")<\/script>", sn = ",";
    function fs(e, t, r, o, s, c) {
      if (b(e, t.startInlineScript), t.sentClientRenderFunction ? b(e, Xt) : (t.sentClientRenderFunction = !0, b(e, Gt)), r === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return b(e, r), b(e, Dn), (o || s || c) && (b(e, sn), b(e, Aa(o || ""))), (s || c) && (b(e, sn), b(e, Aa(s || ""))), c && (b(e, sn), b(e, Aa(c))), w(e, Wo);
    }
    var ds = /[<\u2028\u2029]/g;
    function Aa(e) {
      var t = JSON.stringify(e);
      return t.replace(ds, function(r) {
        switch (r) {
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
    function ps(e, t) {
      var r = Y(t);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: r.bootstrapChunks,
        startInlineScript: r.startInlineScript,
        placeholderPrefix: r.placeholderPrefix,
        segmentPrefix: r.segmentPrefix,
        boundaryPrefix: r.boundaryPrefix,
        idPrefix: r.idPrefix,
        nextSuspenseID: r.nextSuspenseID,
        sentCompleteSegmentFunction: r.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: r.sentCompleteBoundaryFunction,
        sentClientRenderFunction: r.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: e
      };
    }
    function hs() {
      return {
        insertionMode: ve,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function wi(e, t, r, o) {
      return r.generateStaticMarkup ? (e.push(ot(t)), !1) : gr(e, t, r, o);
    }
    function ki(e, t, r, o) {
      if (!t.generateStaticMarkup)
        return zr(e, t, r, o);
    }
    function vs(e, t) {
      return t.generateStaticMarkup ? !0 : Io(e);
    }
    function ms(e, t, r, o, s) {
      return t.generateStaticMarkup ? !0 : Gn(e, t, r, o, s);
    }
    function gs(e, t) {
      return t.generateStaticMarkup ? !0 : Fa(e);
    }
    function ys(e, t) {
      return t.generateStaticMarkup ? !0 : Xn(e);
    }
    var Bt = Object.assign, Ss = Symbol.for("react.element"), Ci = Symbol.for("react.portal"), No = Symbol.for("react.fragment"), Zt = Symbol.for("react.strict_mode"), Ei = Symbol.for("react.profiler"), zo = Symbol.for("react.provider"), $o = Symbol.for("react.context"), Vo = Symbol.for("react.forward_ref"), Yo = Symbol.for("react.suspense"), Qn = Symbol.for("react.suspense_list"), Kn = Symbol.for("react.memo"), Fn = Symbol.for("react.lazy"), Oa = Symbol.for("react.scope"), ja = Symbol.for("react.debug_trace_mode"), La = Symbol.for("react.legacy_hidden"), Go = Symbol.for("react.default_value"), Ti = Symbol.iterator, bs = "@@iterator";
    function xs(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ti && e[Ti] || e[bs];
      return typeof t == "function" ? t : null;
    }
    function ws(e, t, r) {
      var o = e.displayName;
      if (o)
        return o;
      var s = t.displayName || t.name || "";
      return s !== "" ? r + "(" + s + ")" : r;
    }
    function Ba(e) {
      return e.displayName || "Context";
    }
    function tt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case No:
          return "Fragment";
        case Ci:
          return "Portal";
        case Ei:
          return "Profiler";
        case Zt:
          return "StrictMode";
        case Yo:
          return "Suspense";
        case Qn:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $o:
            var t = e;
            return Ba(t) + ".Consumer";
          case zo:
            var r = e;
            return Ba(r._context) + ".Provider";
          case Vo:
            return ws(e, e.render, "ForwardRef");
          case Kn:
            var o = e.displayName || null;
            return o !== null ? o : tt(e.type) || "Memo";
          case Fn: {
            var s = e, c = s._payload, p = s._init;
            try {
              return tt(p(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var qn = 0, Ri, Ua, qe, Mn, Ha, Wa, Na;
    function za() {
    }
    za.__reactDisabledLog = !0;
    function _i() {
      {
        if (qn === 0) {
          Ri = console.log, Ua = console.info, qe = console.warn, Mn = console.error, Ha = console.group, Wa = console.groupCollapsed, Na = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: za,
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
        qn++;
      }
    }
    function Ii() {
      {
        if (qn--, qn === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Bt({}, e, {
              value: Ri
            }),
            info: Bt({}, e, {
              value: Ua
            }),
            warn: Bt({}, e, {
              value: qe
            }),
            error: Bt({}, e, {
              value: Mn
            }),
            group: Bt({}, e, {
              value: Ha
            }),
            groupCollapsed: Bt({}, e, {
              value: Wa
            }),
            groupEnd: Bt({}, e, {
              value: Na
            })
          });
        }
        qn < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xo = k.ReactCurrentDispatcher, Zo;
    function eo(e, t, r) {
      {
        if (Zo === void 0)
          try {
            throw Error();
          } catch (s) {
            var o = s.stack.trim().match(/\n( *(at )?)/);
            Zo = o && o[1] || "";
          }
        return `
` + Zo + e;
      }
    }
    var $a = !1, An;
    {
      var Va = typeof WeakMap == "function" ? WeakMap : Map;
      An = new Va();
    }
    function ln(e, t) {
      if (!e || $a)
        return "";
      {
        var r = An.get(e);
        if (r !== void 0)
          return r;
      }
      var o;
      $a = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = Xo.current, Xo.current = null, _i();
      try {
        if (t) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (pt) {
              o = pt;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (pt) {
              o = pt;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pt) {
            o = pt;
          }
          e();
        }
      } catch (pt) {
        if (pt && o && typeof pt.stack == "string") {
          for (var y = pt.stack.split(`
`), E = o.stack.split(`
`), j = y.length - 1, W = E.length - 1; j >= 1 && W >= 0 && y[j] !== E[W]; )
            W--;
          for (; j >= 1 && W >= 0; j--, W--)
            if (y[j] !== E[W]) {
              if (j !== 1 || W !== 1)
                do
                  if (j--, W--, W < 0 || y[j] !== E[W]) {
                    var G = `
` + y[j].replace(" at new ", " at ");
                    return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), typeof e == "function" && An.set(e, G), G;
                  }
                while (j >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        $a = !1, Xo.current = c, Ii(), Error.prepareStackTrace = s;
      }
      var de = e ? e.displayName || e.name : "", Fe = de ? eo(de) : "";
      return typeof e == "function" && An.set(e, Fe), Fe;
    }
    function Ya(e, t, r) {
      return ln(e, !0);
    }
    function to(e, t, r) {
      return ln(e, !1);
    }
    function ks(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ro(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ln(e, ks(e));
      if (typeof e == "string")
        return eo(e);
      switch (e) {
        case Yo:
          return eo("Suspense");
        case Qn:
          return eo("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Vo:
            return to(e.render);
          case Kn:
            return ro(e.type, t, r);
          case Fn: {
            var o = e, s = o._payload, c = o._init;
            try {
              return ro(c(s), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    var Pi = {}, Ga = k.ReactDebugCurrentFrame;
    function Jo(e) {
      if (e) {
        var t = e._owner, r = ro(e.type, e._source, t ? t.type : null);
        Ga.setExtraStackFrame(r);
      } else
        Ga.setExtraStackFrame(null);
    }
    function Qo(e, t, r, o, s) {
      {
        var c = Function.call.bind(De);
        for (var p in e)
          if (c(e, p)) {
            var y = void 0;
            try {
              if (typeof e[p] != "function") {
                var E = Error((o || "React class") + ": " + r + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              y = e[p](t, p, o, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              y = j;
            }
            y && !(y instanceof Error) && (Jo(s), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", r, p, typeof y), Jo(null)), y instanceof Error && !(y.message in Pi) && (Pi[y.message] = !0, Jo(s), f("Failed %s type: %s", r, y.message), Jo(null));
          }
      }
    }
    var Ko;
    Ko = {};
    var no = {};
    Object.freeze(no);
    function oo(e, t) {
      {
        var r = e.contextTypes;
        if (!r)
          return no;
        var o = {};
        for (var s in r)
          o[s] = t[s];
        {
          var c = tt(e) || "Unknown";
          Qo(r, o, "context", c);
        }
        return o;
      }
    }
    function Di(e, t, r, o) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var s = tt(t) || "Unknown";
            Ko[s] || (Ko[s] = !0, f("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return r;
        }
        var c = e.getChildContext();
        for (var p in c)
          if (!(p in o))
            throw new Error((tt(t) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var y = tt(t) || "Unknown";
          Qo(o, c, "child context", y);
        }
        return Bt({}, r, c);
      }
    }
    var un;
    un = {};
    var qo = null, Zr = null;
    function Xa(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function cn(e) {
      e.context._currentValue2 = e.value;
    }
    function ea(e, t) {
      if (e !== t) {
        Xa(e);
        var r = e.parent, o = t.parent;
        if (r === null) {
          if (o !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (o === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          ea(r, o);
        }
        cn(t);
      }
    }
    function Jr(e) {
      Xa(e);
      var t = e.parent;
      t !== null && Jr(t);
    }
    function ta(e) {
      var t = e.parent;
      t !== null && ta(t), cn(e);
    }
    function ra(e, t) {
      Xa(e);
      var r = e.parent;
      if (r === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      r.depth === t.depth ? ea(r, t) : ra(r, t);
    }
    function ao(e, t) {
      var r = t.parent;
      if (r === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === r.depth ? ea(e, r) : ao(e, r), cn(t);
    }
    function io(e) {
      var t = Zr, r = e;
      t !== r && (t === null ? ta(r) : r === null ? Jr(t) : t.depth === r.depth ? ea(t, r) : t.depth > r.depth ? ra(t, r) : ao(t, r), Zr = r);
    }
    function Fi(e, t) {
      var r;
      r = e._currentValue2, e._currentValue2 = t, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== un && f("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = un;
      var o = Zr, s = {
        parent: o,
        depth: o === null ? 0 : o.depth + 1,
        context: e,
        parentValue: r,
        value: t
      };
      return Zr = s, s;
    }
    function Mi(e) {
      var t = Zr;
      if (t === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      t.context !== e && f("The parent context is not the expected context. This is probably a bug in React.");
      {
        var r = t.parentValue;
        r === Go ? t.context._currentValue2 = t.context._defaultValue : t.context._currentValue2 = r, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== un && f("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = un;
      }
      return Zr = t.parent;
    }
    function Ai() {
      return Zr;
    }
    function Qr(e) {
      var t = e._currentValue2;
      return t;
    }
    function Za(e) {
      return e._reactInternals;
    }
    function Cs(e, t) {
      e._reactInternals = t;
    }
    var Oi = {}, On = {}, so, Ja, na, oa, aa, jn, lo, uo, ia;
    {
      so = /* @__PURE__ */ new Set(), Ja = /* @__PURE__ */ new Set(), na = /* @__PURE__ */ new Set(), lo = /* @__PURE__ */ new Set(), oa = /* @__PURE__ */ new Set(), uo = /* @__PURE__ */ new Set(), ia = /* @__PURE__ */ new Set();
      var co = /* @__PURE__ */ new Set();
      jn = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var r = t + "_" + e;
          co.has(r) || (co.add(r), f("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, aa = function(e, t) {
        if (t === void 0) {
          var r = tt(e) || "Component";
          oa.has(r) || (oa.add(r), f("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", r));
        }
      };
    }
    function sa(e, t) {
      {
        var r = e.constructor, o = r && tt(r) || "ReactClass", s = o + "." + t;
        if (Oi[s])
          return;
        f(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), Oi[s] = !0;
      }
    }
    var la = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, t, r) {
        var o = Za(e);
        o.queue === null ? sa(e, "setState") : (o.queue.push(t), r != null && jn(r, "setState"));
      },
      enqueueReplaceState: function(e, t, r) {
        var o = Za(e);
        o.replace = !0, o.queue = [t], r != null && jn(r, "setState");
      },
      enqueueForceUpdate: function(e, t) {
        var r = Za(e);
        r.queue === null ? sa(e, "forceUpdate") : t != null && jn(t, "setState");
      }
    };
    function Qa(e, t, r, o, s) {
      var c = r(s, o);
      aa(t, c);
      var p = c == null ? o : Bt({}, o, c);
      return p;
    }
    function ji(e, t, r) {
      var o = no, s = e.contextType;
      if ("contextType" in e) {
        var c = (
          // Allow null for conditional declaration
          s === null || s !== void 0 && s.$$typeof === $o && s._context === void 0
        );
        if (!c && !ia.has(e)) {
          ia.add(e);
          var p = "";
          s === void 0 ? p = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? p = " However, it is set to a " + typeof s + "." : s.$$typeof === zo ? p = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? p = " Did you accidentally pass the Context.Consumer instead?" : p = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", f("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", tt(e) || "Component", p);
        }
      }
      typeof s == "object" && s !== null ? o = Qr(s) : o = r;
      var y = new e(t, o);
      {
        if (typeof e.getDerivedStateFromProps == "function" && (y.state === null || y.state === void 0)) {
          var E = tt(e) || "Component";
          so.has(E) || (so.add(E), f("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", E, y.state === null ? "null" : "undefined", E));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var j = null, W = null, G = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? j = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (j = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? W = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (W = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? G = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (G = "UNSAFE_componentWillUpdate"), j !== null || W !== null || G !== null) {
            var de = tt(e) || "Component", Fe = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            na.has(de) || (na.add(de), f(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, de, Fe, j !== null ? `
  ` + j : "", W !== null ? `
  ` + W : "", G !== null ? `
  ` + G : ""));
          }
        }
      }
      return y;
    }
    function Li(e, t, r) {
      {
        var o = tt(t) || "Component", s = e.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? f("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : f("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && f("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && f("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), e.propTypes && f("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), e.contextType && f("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), e.contextTypes && f("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !uo.has(t) && (uo.add(t), f("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof e.componentShouldUpdate == "function" && f("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && f("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", tt(t) || "A pure component"), typeof e.componentDidUnmount == "function" && f("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof e.componentDidReceiveProps == "function" && f("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof e.componentWillRecieveProps == "function" && f("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof e.UNSAFE_componentWillRecieveProps == "function" && f("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var c = e.props !== r;
        e.props !== void 0 && c && f("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), e.defaultProps && f("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !Ja.has(t) && (Ja.add(t), f("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", tt(t))), typeof e.getDerivedStateFromProps == "function" && f("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof e.getDerivedStateFromError == "function" && f("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && f("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var p = e.state;
        p && (typeof p != "object" || S(p)) && f("%s.state: must be set to an object or null", o), typeof e.getChildContext == "function" && typeof t.childContextTypes != "object" && f("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function Bi(e, t) {
      var r = t.state;
      if (typeof t.componentWillMount == "function") {
        if (t.componentWillMount.__suppressDeprecationWarning !== !0) {
          var o = tt(e) || "Unknown";
          On[o] || (_(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            o
          ), On[o] = !0);
        }
        t.componentWillMount();
      }
      typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && (f("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", tt(e) || "Component"), la.enqueueReplaceState(t, t.state, null));
    }
    function Es(e, t, r, o) {
      if (e.queue !== null && e.queue.length > 0) {
        var s = e.queue, c = e.replace;
        if (e.queue = null, e.replace = !1, c && s.length === 1)
          t.state = s[0];
        else {
          for (var p = c ? s[0] : t.state, y = !0, E = c ? 1 : 0; E < s.length; E++) {
            var j = s[E], W = typeof j == "function" ? j.call(t, p, r, o) : j;
            W != null && (y ? (y = !1, p = Bt({}, p, W)) : Bt(p, W));
          }
          t.state = p;
        }
      } else
        e.queue = null;
    }
    function Ui(e, t, r, o) {
      Li(e, t, r);
      var s = e.state !== void 0 ? e.state : null;
      e.updater = la, e.props = r, e.state = s;
      var c = {
        queue: [],
        replace: !1
      };
      Cs(e, c);
      var p = t.contextType;
      if (typeof p == "object" && p !== null ? e.context = Qr(p) : e.context = o, e.state === r) {
        var y = tt(t) || "Component";
        lo.has(y) || (lo.add(y), f("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
      }
      var E = t.getDerivedStateFromProps;
      typeof E == "function" && (e.state = Qa(e, t, E, s, r)), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (Bi(t, e), Es(c, e, r, o));
    }
    var Ts = {
      id: 1,
      overflow: ""
    };
    function Rs(e) {
      var t = e.overflow, r = e.id, o = r & ~_s(r);
      return o.toString(32) + t;
    }
    function Ka(e, t, r) {
      var o = e.id, s = e.overflow, c = fo(o) - 1, p = o & ~(1 << c), y = r + 1, E = fo(t) + c;
      if (E > 30) {
        var j = c - c % 5, W = (1 << j) - 1, G = (p & W).toString(32), de = p >> j, Fe = c - j, pt = fo(t) + Fe, gn = y << Fe, yn = gn | de, Wr = G + s;
        return {
          id: 1 << pt | yn,
          overflow: Wr
        };
      } else {
        var zn = y << c, il = zn | p, Fl = s;
        return {
          id: 1 << E | il,
          overflow: Fl
        };
      }
    }
    function fo(e) {
      return 32 - Is(e);
    }
    function _s(e) {
      return 1 << fo(e) - 1;
    }
    var Is = Math.clz32 ? Math.clz32 : Ps, qa = Math.log, ua = Math.LN2;
    function Ps(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (qa(t) / ua | 0) | 0;
    }
    function Ds(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Fs = typeof Object.is == "function" ? Object.is : Ds, Lr = null, ei = null, ca = null, Je = null, Jt = !1, Ln = !1, fn = 0, Pe = null, Kr = 0, fa = 25, Qt = !1, Kt;
    function kr() {
      if (Lr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Qt && f("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Lr;
    }
    function Ms(e, t) {
      if (t === null)
        return f("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Kt), !1;
      e.length !== t.length && f(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Kt, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var r = 0; r < t.length && r < e.length; r++)
        if (!Fs(e[r], t[r]))
          return !1;
      return !0;
    }
    function cr() {
      if (Kr > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function qr() {
      return Je === null ? ca === null ? (Jt = !1, ca = Je = cr()) : (Jt = !0, Je = ca) : Je.next === null ? (Jt = !1, Je = Je.next = cr()) : (Jt = !0, Je = Je.next), Je;
    }
    function dn(e, t) {
      Lr = t, ei = e, Qt = !1, fn = 0;
    }
    function As(e, t, r, o) {
      for (; Ln; )
        Ln = !1, fn = 0, Kr += 1, Je = null, r = e(t, o);
      return po(), r;
    }
    function ti() {
      var e = fn !== 0;
      return e;
    }
    function po() {
      Qt = !1, Lr = null, ei = null, Ln = !1, ca = null, Kr = 0, Pe = null, Je = null;
    }
    function Os(e) {
      return Qt && f("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Qr(e);
    }
    function js(e) {
      return Kt = "useContext", kr(), Qr(e);
    }
    function da(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function ri(e) {
      return Kt = "useState", Hi(
        da,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function Hi(e, t, r) {
      if (e !== da && (Kt = "useReducer"), Lr = kr(), Je = qr(), Jt) {
        var o = Je.queue, s = o.dispatch;
        if (Pe !== null) {
          var c = Pe.get(o);
          if (c !== void 0) {
            Pe.delete(o);
            var p = Je.memoizedState, y = c;
            do {
              var E = y.action;
              Qt = !0, p = e(p, E), Qt = !1, y = y.next;
            } while (y !== null);
            return Je.memoizedState = p, [p, s];
          }
        }
        return [Je.memoizedState, s];
      } else {
        Qt = !0;
        var j;
        e === da ? j = typeof t == "function" ? t() : t : j = r !== void 0 ? r(t) : t, Qt = !1, Je.memoizedState = j;
        var W = Je.queue = {
          last: null,
          dispatch: null
        }, G = W.dispatch = Ni.bind(null, Lr, W);
        return [Je.memoizedState, G];
      }
    }
    function Wi(e, t) {
      Lr = kr(), Je = qr();
      var r = t === void 0 ? null : t;
      if (Je !== null) {
        var o = Je.memoizedState;
        if (o !== null && r !== null) {
          var s = o[1];
          if (Ms(r, s))
            return o[0];
        }
      }
      Qt = !0;
      var c = e();
      return Qt = !1, Je.memoizedState = [c, r], c;
    }
    function ni(e) {
      Lr = kr(), Je = qr();
      var t = Je.memoizedState;
      if (t === null) {
        var r = {
          current: e
        };
        return Object.seal(r), Je.memoizedState = r, r;
      } else
        return t;
    }
    function Ls(e, t) {
      Kt = "useLayoutEffect", f("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Ni(e, t, r) {
      if (Kr >= fa)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === Lr) {
        Ln = !0;
        var o = {
          action: r,
          next: null
        };
        Pe === null && (Pe = /* @__PURE__ */ new Map());
        var s = Pe.get(t);
        if (s === void 0)
          Pe.set(t, o);
        else {
          for (var c = s; c.next !== null; )
            c = c.next;
          c.next = o;
        }
      }
    }
    function zi(e, t) {
      return Wi(function() {
        return e;
      }, t);
    }
    function Bs(e, t, r) {
      return kr(), t(e._source);
    }
    function Us(e, t, r) {
      if (r === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return r();
    }
    function Hs(e) {
      return kr(), e;
    }
    function Ws() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Ns() {
      return kr(), [!1, Ws];
    }
    function zs() {
      var e = ei, t = Rs(e.treeContext), r = oi;
      if (r === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var o = fn++;
      return Ze(r, t, o);
    }
    function pa() {
    }
    var $i = {
      readContext: Os,
      useContext: js,
      useMemo: Wi,
      useReducer: Hi,
      useRef: ni,
      useState: ri,
      useInsertionEffect: pa,
      useLayoutEffect: Ls,
      useCallback: zi,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: pa,
      // Effects are not run in the server environment.
      useEffect: pa,
      // Debugging effect
      useDebugValue: pa,
      useDeferredValue: Hs,
      useTransition: Ns,
      useId: zs,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Bs,
      useSyncExternalStore: Us
    }, oi = null;
    function Vi(e) {
      oi = e;
    }
    function ha(e) {
      try {
        var t = "", r = e;
        do {
          switch (r.tag) {
            case 0:
              t += eo(r.type, null, null);
              break;
            case 1:
              t += to(r.type, null, null);
              break;
            case 2:
              t += Ya(r.type, null, null);
              break;
          }
          r = r.parent;
        } while (r);
        return t;
      } catch (o) {
        return `
Error generating stack: ` + o.message + `
` + o.stack;
      }
    }
    var va = k.ReactCurrentDispatcher, ho = k.ReactDebugCurrentFrame, ma = 0, Bn = 1, ga = 2, ya = 3, Sa = 4, Un = 0, ai = 1, pn = 2, Yi = 12800;
    function $s(e) {
      return console.error(e), null;
    }
    function Hn() {
    }
    function Wn(e, t, r, o, s, c, p, y, E) {
      var j = [], W = /* @__PURE__ */ new Set(), G = {
        destination: null,
        responseState: t,
        progressiveChunkSize: o === void 0 ? Yi : o,
        status: Un,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: W,
        pingedTasks: j,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: s === void 0 ? $s : s,
        onAllReady: Hn,
        onShellReady: p === void 0 ? Hn : p,
        onShellError: Hn,
        onFatalError: Hn
      }, de = ba(
        G,
        0,
        null,
        r,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      de.parentFlushed = !0;
      var Fe = hn(G, e, null, de, W, no, qo, Ts);
      return j.push(Fe), G;
    }
    function Vs(e, t) {
      var r = e.pingedTasks;
      r.push(t), r.length === 1 && U(function() {
        return vi(e);
      });
    }
    function Ys(e, t) {
      return {
        id: At,
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
    function hn(e, t, r, o, s, c, p, y) {
      e.allPendingTasks++, r === null ? e.pendingRootTasks++ : r.pendingTasks++;
      var E = {
        node: t,
        ping: function() {
          return Vs(e, E);
        },
        blockedBoundary: r,
        blockedSegment: o,
        abortSet: s,
        legacyContext: c,
        context: p,
        treeContext: y
      };
      return E.componentStack = null, s.add(E), E;
    }
    function ba(e, t, r, o, s, c) {
      return {
        status: ma,
        id: -1,
        // lazily assigned later
        index: t,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: o,
        boundary: r,
        lastPushedText: s,
        textEmbedded: c
      };
    }
    var Br = null;
    function ii() {
      return Br === null || Br.componentStack === null ? "" : ha(Br.componentStack);
    }
    function vn(e, t) {
      e.componentStack = {
        tag: 0,
        parent: e.componentStack,
        type: t
      };
    }
    function vo(e, t) {
      e.componentStack = {
        tag: 1,
        parent: e.componentStack,
        type: t
      };
    }
    function Ur(e, t) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: t
      };
    }
    function Cr(e) {
      e.componentStack === null ? f("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var Hr = null;
    function xa(e, t) {
      {
        var r;
        typeof t == "string" ? r = t : t && typeof t.message == "string" ? r = t.message : r = String(t);
        var o = Hr || ii();
        Hr = null, e.errorMessage = r, e.errorComponentStack = o;
      }
    }
    function mo(e, t) {
      var r = e.onError(t);
      if (r != null && typeof r != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof r + '" instead');
      return r;
    }
    function fr(e, t) {
      var r = e.onShellError;
      r(t);
      var o = e.onFatalError;
      o(t), e.destination !== null ? (e.status = pn, J(e.destination, t)) : (e.status = ai, e.fatalError = t);
    }
    function go(e, t, r) {
      vn(t, "Suspense");
      var o = t.blockedBoundary, s = t.blockedSegment, c = r.fallback, p = r.children, y = /* @__PURE__ */ new Set(), E = Ys(e, y), j = s.chunks.length, W = ba(
        e,
        j,
        E,
        s.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      s.children.push(W), s.lastPushedText = !1;
      var G = ba(
        e,
        0,
        null,
        s.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      G.parentFlushed = !0, t.blockedBoundary = E, t.blockedSegment = G;
      try {
        if (Rt(e, t, p), ki(G.chunks, e.responseState, G.lastPushedText, G.textEmbedded), G.status = Bn, Nn(E, G), E.pendingTasks === 0) {
          Cr(t);
          return;
        }
      } catch (Fe) {
        G.status = Sa, E.forceClientRender = !0, E.errorDigest = mo(e, Fe), xa(E, Fe);
      } finally {
        t.blockedBoundary = o, t.blockedSegment = s;
      }
      var de = hn(e, c, o, W, y, t.legacyContext, t.context, t.treeContext);
      de.componentStack = t.componentStack, e.pingedTasks.push(de), Cr(t);
    }
    function si(e, t, r, o) {
      vn(t, r);
      var s = t.blockedSegment, c = ur(s.chunks, r, o, e.responseState, s.formatContext);
      s.lastPushedText = !1;
      var p = s.formatContext;
      s.formatContext = $t(p, r, o), Rt(e, t, c), s.formatContext = p, Ue(s.chunks, r), s.lastPushedText = !1, Cr(t);
    }
    function yo(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function So(e, t, r, o, s) {
      var c = {};
      dn(t, c);
      var p = r(o, s);
      return As(r, o, p, s);
    }
    function Gi(e, t, r, o, s) {
      var c = r.render();
      r.props !== s && (ui || f("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", tt(o) || "a component"), ui = !0);
      {
        var p = o.childContextTypes;
        if (p != null) {
          var y = t.legacyContext, E = Di(r, o, y, p);
          t.legacyContext = E, qt(e, t, c), t.legacyContext = y;
          return;
        }
      }
      qt(e, t, c);
    }
    function Gs(e, t, r, o) {
      Ur(t, r);
      var s = oo(r, t.legacyContext), c = ji(r, o, s);
      Ui(c, r, o, s), Gi(e, t, c, r, o), Cr(t);
    }
    var Xi = {}, bo = {}, li = {}, Zi = {}, ui = !1, xo = {}, ci = !1, fi = !1, di = !1;
    function Ji(e, t, r, o) {
      var s;
      if (s = oo(r, t.legacyContext), vo(t, r), r.prototype && typeof r.prototype.render == "function") {
        var c = tt(r) || "Unknown";
        Xi[c] || (f("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", c, c), Xi[c] = !0);
      }
      var p = So(e, t, r, o, s), y = ti();
      if (typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var E = tt(r) || "Unknown";
        bo[E] || (f("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", E, E, E), bo[E] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var j = tt(r) || "Unknown";
          bo[j] || (f("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", j, j, j), bo[j] = !0);
        }
        Ui(p, r, o, s), Gi(e, t, p, r, o);
      } else if (Qi(r), y) {
        var W = t.treeContext, G = 1, de = 0;
        t.treeContext = Ka(W, G, de);
        try {
          qt(e, t, p);
        } finally {
          t.treeContext = W;
        }
      } else
        qt(e, t, p);
      Cr(t);
    }
    function Qi(e) {
      {
        if (e && e.childContextTypes && f("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), e.defaultProps !== void 0) {
          var t = tt(e) || "Unknown";
          xo[t] || (f("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", t), xo[t] = !0);
        }
        if (typeof e.getDerivedStateFromProps == "function") {
          var r = tt(e) || "Unknown";
          Zi[r] || (f("%s: Function components do not support getDerivedStateFromProps.", r), Zi[r] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var o = tt(e) || "Unknown";
          li[o] || (f("%s: Function components do not support contextType.", o), li[o] = !0);
        }
      }
    }
    function pi(e, t) {
      if (e && e.defaultProps) {
        var r = Bt({}, t), o = e.defaultProps;
        for (var s in o)
          r[s] === void 0 && (r[s] = o[s]);
        return r;
      }
      return t;
    }
    function Ki(e, t, r, o, s) {
      vo(t, r.render);
      var c = So(e, t, r.render, o, s), p = ti();
      if (p) {
        var y = t.treeContext, E = 1, j = 0;
        t.treeContext = Ka(y, E, j);
        try {
          qt(e, t, c);
        } finally {
          t.treeContext = y;
        }
      } else
        qt(e, t, c);
      Cr(t);
    }
    function Xs(e, t, r, o, s) {
      var c = r.type, p = pi(c, o);
      hi(e, t, c, p, s);
    }
    function Zs(e, t, r, o) {
      r._context === void 0 ? r !== r.Consumer && (di || (di = !0, f("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : r = r._context;
      var s = o.children;
      typeof s != "function" && f("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var c = Qr(r), p = s(c);
      qt(e, t, p);
    }
    function qi(e, t, r, o) {
      var s = r._context, c = o.value, p = o.children, y;
      y = t.context, t.context = Fi(s, c), qt(e, t, p), t.context = Mi(s), y !== t.context && f("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Js(e, t, r, o, s) {
      vn(t, "Lazy");
      var c = r._payload, p = r._init, y = p(c), E = pi(y, o);
      hi(e, t, y, E, s), Cr(t);
    }
    function hi(e, t, r, o, s) {
      if (typeof r == "function")
        if (yo(r)) {
          Gs(e, t, r, o);
          return;
        } else {
          Ji(e, t, r, o);
          return;
        }
      if (typeof r == "string") {
        si(e, t, r, o);
        return;
      }
      switch (r) {
        // TODO: LegacyHidden acts the same as a fragment. This only works
        // because we currently assume that every instance of LegacyHidden is
        // accompanied by a host component wrapper. In the hidden mode, the host
        // component is given a `hidden` attribute, which ensures that the
        // initial HTML is not visible. To support the use of LegacyHidden as a
        // true fragment, without an extra DOM node, we would have to hide the
        // initial HTML in some other way.
        // TODO: Add REACT_OFFSCREEN_TYPE here too with the same capability.
        case La:
        case ja:
        case Zt:
        case Ei:
        case No: {
          qt(e, t, o.children);
          return;
        }
        case Qn: {
          vn(t, "SuspenseList"), qt(e, t, o.children), Cr(t);
          return;
        }
        case Oa:
          throw new Error("ReactDOMServer does not yet support scope components.");
        // eslint-disable-next-line-no-fallthrough
        case Yo: {
          go(e, t, o);
          return;
        }
      }
      if (typeof r == "object" && r !== null)
        switch (r.$$typeof) {
          case Vo: {
            Ki(e, t, r, o, s);
            return;
          }
          case Kn: {
            Xs(e, t, r, o, s);
            return;
          }
          case zo: {
            qi(e, t, r, o);
            return;
          }
          case $o: {
            Zs(e, t, r, o);
            return;
          }
          case Fn: {
            Js(e, t, r, o);
            return;
          }
        }
      var c = "";
      throw (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (r == null ? r : typeof r) + "." + c));
    }
    function Qs(e, t) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (ci || f("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ci = !0), e.entries === t && (fi || f("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), fi = !0);
    }
    function qt(e, t, r) {
      try {
        return Ks(e, t, r);
      } catch (o) {
        throw typeof o == "object" && o !== null && typeof o.then == "function" || (Hr = Hr !== null ? Hr : ii()), o;
      }
    }
    function Ks(e, t, r) {
      if (t.node = r, typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case Ss: {
            var o = r, s = o.type, c = o.props, p = o.ref;
            hi(e, t, s, c, p);
            return;
          }
          case Ci:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          // eslint-disable-next-line-no-fallthrough
          case Fn: {
            var y = r, E = y._payload, j = y._init, W;
            try {
              W = j(E);
            } catch (zn) {
              throw typeof zn == "object" && zn !== null && typeof zn.then == "function" && vn(t, "Lazy"), zn;
            }
            qt(e, t, W);
            return;
          }
        }
        if (S(r)) {
          wa(e, t, r);
          return;
        }
        var G = xs(r);
        if (G) {
          Qs(r, G);
          var de = G.call(r);
          if (de) {
            var Fe = de.next();
            if (!Fe.done) {
              var pt = [];
              do
                pt.push(Fe.value), Fe = de.next();
              while (!Fe.done);
              wa(e, t, pt);
              return;
            }
            return;
          }
        }
        var gn = Object.prototype.toString.call(r);
        throw new Error("Objects are not valid as a React child (found: " + (gn === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : gn) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof r == "string") {
        var yn = t.blockedSegment;
        yn.lastPushedText = wi(t.blockedSegment.chunks, r, e.responseState, yn.lastPushedText);
        return;
      }
      if (typeof r == "number") {
        var Wr = t.blockedSegment;
        Wr.lastPushedText = wi(t.blockedSegment.chunks, "" + r, e.responseState, Wr.lastPushedText);
        return;
      }
      typeof r == "function" && f("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function wa(e, t, r) {
      for (var o = r.length, s = 0; s < o; s++) {
        var c = t.treeContext;
        t.treeContext = Ka(c, o, s);
        try {
          Rt(e, t, r[s]);
        } finally {
          t.treeContext = c;
        }
      }
    }
    function qs(e, t, r) {
      var o = t.blockedSegment, s = o.chunks.length, c = ba(
        e,
        s,
        null,
        o.formatContext,
        // Adopt the parent segment's leading text embed
        o.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      o.children.push(c), o.lastPushedText = !1;
      var p = hn(e, t.node, t.blockedBoundary, c, t.abortSet, t.legacyContext, t.context, t.treeContext);
      t.componentStack !== null && (p.componentStack = t.componentStack.parent);
      var y = p.ping;
      r.then(y, y);
    }
    function Rt(e, t, r) {
      var o = t.blockedSegment.formatContext, s = t.legacyContext, c = t.context, p = null;
      p = t.componentStack;
      try {
        return qt(e, t, r);
      } catch (y) {
        if (po(), typeof y == "object" && y !== null && typeof y.then == "function") {
          qs(e, t, y), t.blockedSegment.formatContext = o, t.legacyContext = s, t.context = c, io(c), t.componentStack = p;
          return;
        } else
          throw t.blockedSegment.formatContext = o, t.legacyContext = s, t.context = c, io(c), t.componentStack = p, y;
      }
    }
    function el(e, t, r, o) {
      var s = mo(e, o);
      if (t === null ? fr(e, o) : (t.pendingTasks--, t.forceClientRender || (t.forceClientRender = !0, t.errorDigest = s, xa(t, o), t.parentFlushed && e.clientRenderedBoundaries.push(t))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var c = e.onAllReady;
        c();
      }
    }
    function es(e) {
      var t = this, r = e.blockedBoundary, o = e.blockedSegment;
      o.status = ya, rs(t, r, o);
    }
    function ts(e, t, r) {
      var o = e.blockedBoundary, s = e.blockedSegment;
      if (s.status = ya, o === null)
        t.allPendingTasks--, t.status !== pn && (t.status = pn, t.destination !== null && D(t.destination));
      else {
        if (o.pendingTasks--, !o.forceClientRender) {
          o.forceClientRender = !0;
          var c = r === void 0 ? new Error("The render was aborted by the server without a reason.") : r;
          o.errorDigest = t.onError(c);
          {
            var p = "The server did not finish this Suspense boundary: ";
            c && typeof c.message == "string" ? c = p + c.message : c = p + String(c);
            var y = Br;
            Br = e;
            try {
              xa(o, c);
            } finally {
              Br = y;
            }
          }
          o.parentFlushed && t.clientRenderedBoundaries.push(o);
        }
        if (o.fallbackAbortableTasks.forEach(function(j) {
          return ts(j, t, r);
        }), o.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0) {
          var E = t.onAllReady;
          E();
        }
      }
    }
    function Nn(e, t) {
      if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
        var r = t.children[0];
        r.id = t.id, r.parentFlushed = !0, r.status === Bn && Nn(e, r);
      } else {
        var o = e.completedSegments;
        o.push(t);
      }
    }
    function rs(e, t, r) {
      if (t === null) {
        if (r.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          e.completedRootSegment = r;
        }
        if (e.pendingRootTasks--, e.pendingRootTasks === 0) {
          e.onShellError = Hn;
          var o = e.onShellReady;
          o();
        }
      } else if (t.pendingTasks--, !t.forceClientRender) {
        if (t.pendingTasks === 0)
          r.parentFlushed && r.status === Bn && Nn(t, r), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(es, e), t.fallbackAbortableTasks.clear();
        else if (r.parentFlushed && r.status === Bn) {
          Nn(t, r);
          var s = t.completedSegments;
          s.length === 1 && t.parentFlushed && e.partialBoundaries.push(t);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var c = e.onAllReady;
        c();
      }
    }
    function tl(e, t) {
      var r = t.blockedSegment;
      if (r.status === ma) {
        io(t.context);
        var o = null;
        o = Br, Br = t;
        try {
          qt(e, t, t.node), ki(r.chunks, e.responseState, r.lastPushedText, r.textEmbedded), t.abortSet.delete(t), r.status = Bn, rs(e, t.blockedBoundary, r);
        } catch (c) {
          if (po(), typeof c == "object" && c !== null && typeof c.then == "function") {
            var s = t.ping;
            c.then(s, s);
          } else
            t.abortSet.delete(t), r.status = Sa, el(e, t.blockedBoundary, r, c);
        } finally {
          Br = o;
        }
      }
    }
    function vi(e) {
      if (e.status !== pn) {
        var t = Ai(), r = va.current;
        va.current = $i;
        var o;
        o = ho.getCurrentStack, ho.getCurrentStack = ii;
        var s = oi;
        Vi(e.responseState);
        try {
          var c = e.pingedTasks, p;
          for (p = 0; p < c.length; p++) {
            var y = c[p];
            tl(e, y);
          }
          c.splice(0, p), e.destination !== null && Ca(e, e.destination);
        } catch (E) {
          mo(e, E), fr(e, E);
        } finally {
          Vi(s), va.current = r, ho.getCurrentStack = o, r === $i && io(t);
        }
      }
    }
    function mn(e, t, r) {
      switch (r.parentFlushed = !0, r.status) {
        case ma: {
          var o = r.id = e.nextSegmentId++;
          return r.lastPushedText = !1, r.textEmbedded = !1, xr(t, e.responseState, o);
        }
        case Bn: {
          r.status = ga;
          for (var s = !0, c = r.chunks, p = 0, y = r.children, E = 0; E < y.length; E++) {
            for (var j = y[E]; p < j.index; p++)
              b(t, c[p]);
            s = wo(e, t, j);
          }
          for (; p < c.length - 1; p++)
            b(t, c[p]);
          return p < c.length && (s = w(t, c[p])), s;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function wo(e, t, r) {
      var o = r.boundary;
      if (o === null)
        return mn(e, t, r);
      if (o.parentFlushed = !0, o.forceClientRender)
        return ms(t, e.responseState, o.errorDigest, o.errorMessage, o.errorComponentStack), mn(e, t, r), ys(t, e.responseState);
      if (o.pendingTasks > 0) {
        o.rootSegmentID = e.nextSegmentId++, o.completedSegments.length > 0 && e.partialBoundaries.push(o);
        var s = o.id = Xe(e.responseState);
        return on(t, e.responseState, s), mn(e, t, r), Gr(t, e.responseState);
      } else {
        if (o.byteSize > e.progressiveChunkSize)
          return o.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(o), on(t, e.responseState, o.id), mn(e, t, r), Gr(t, e.responseState);
        vs(t, e.responseState);
        var c = o.completedSegments;
        if (c.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var p = c[0];
        return wo(e, t, p), gs(t, e.responseState);
      }
    }
    function rl(e, t, r) {
      return fs(t, e.responseState, r.id, r.errorDigest, r.errorMessage, r.errorComponentStack);
    }
    function mi(e, t, r) {
      return Jn(t, e.responseState, r.formatContext, r.id), wo(e, t, r), Ho(t, r.formatContext);
    }
    function ko(e, t, r) {
      for (var o = r.completedSegments, s = 0; s < o.length; s++) {
        var c = o[s];
        ns(e, t, r, c);
      }
      return o.length = 0, Tt(t, e.responseState, r.id, r.rootSegmentID);
    }
    function ka(e, t, r) {
      for (var o = r.completedSegments, s = 0; s < o.length; s++) {
        var c = o[s];
        if (!ns(e, t, r, c))
          return s++, o.splice(0, s), !1;
      }
      return o.splice(0, s), !0;
    }
    function ns(e, t, r, o) {
      if (o.status === ga)
        return !0;
      var s = o.id;
      if (s === -1) {
        var c = o.id = r.rootSegmentID;
        if (c === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return mi(e, t, o);
      } else
        return mi(e, t, o), $(t, e.responseState, s);
    }
    function Ca(e, t) {
      try {
        var r = e.completedRootSegment;
        r !== null && e.pendingRootTasks === 0 && (wo(e, t, r), e.completedRootSegment = null, Or(t, e.responseState));
        var o = e.clientRenderedBoundaries, s;
        for (s = 0; s < o.length; s++) {
          var c = o[s];
          if (!rl(e, t, c)) {
            e.destination = null, s++, o.splice(0, s);
            return;
          }
        }
        o.splice(0, s);
        var p = e.completedBoundaries;
        for (s = 0; s < p.length; s++) {
          var y = p[s];
          if (!ko(e, t, y)) {
            e.destination = null, s++, p.splice(0, s);
            return;
          }
        }
        p.splice(0, s);
        var E = e.partialBoundaries;
        for (s = 0; s < E.length; s++) {
          var j = E[s];
          if (!ka(e, t, j)) {
            e.destination = null, s++, E.splice(0, s);
            return;
          }
        }
        E.splice(0, s);
        var W = e.completedBoundaries;
        for (s = 0; s < W.length; s++) {
          var G = W[s];
          if (!ko(e, t, G)) {
            e.destination = null, s++, W.splice(0, s);
            return;
          }
        }
        W.splice(0, s);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && f("There was still abortable task at the root when we closed. This is a bug in React."), D(t));
      }
    }
    function os(e) {
      U(function() {
        return vi(e);
      });
    }
    function nl(e, t) {
      if (e.status === ai) {
        e.status = pn, J(t, e.fatalError);
        return;
      }
      if (e.status !== pn && e.destination === null) {
        e.destination = t;
        try {
          Ca(e, t);
        } catch (r) {
          mo(e, r), fr(e, r);
        }
      }
    }
    function as(e, t) {
      try {
        var r = e.abortableTasks;
        r.forEach(function(o) {
          return ts(o, e, t);
        }), r.clear(), e.destination !== null && Ca(e, e.destination);
      } catch (o) {
        mo(e, o), fr(e, o);
      }
    }
    function gi() {
    }
    function is(e, t, r, o) {
      var s = !1, c = null, p = "", y = {
        push: function(G) {
          return G !== null && (p += G), !0;
        },
        destroy: function(G) {
          s = !0, c = G;
        }
      }, E = !1;
      function j() {
        E = !0;
      }
      var W = Wn(e, ps(r, t ? t.identifierPrefix : void 0), hs(), 1 / 0, gi, void 0, j);
      if (os(W), as(W, o), nl(W, y), s)
        throw c;
      if (!E)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return p;
    }
    function ol(e, t) {
      return is(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function ss(e, t) {
      return is(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function al() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function n() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Eo.renderToNodeStream = al, Eo.renderToStaticMarkup = ss, Eo.renderToStaticNodeStream = n, Eo.renderToString = ol, Eo.version = v;
  }()), Eo;
}
var cs = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bl;
function Nl() {
  return bl || (bl = 1, process.env.NODE_ENV !== "production" && function() {
    var R = er, v = "18.3.1", k = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(n) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
          t[r - 1] = arguments[r];
        F("warn", n, t);
      }
    }
    function f(n) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
          t[r - 1] = arguments[r];
        F("error", n, t);
      }
    }
    function F(n, e, t) {
      {
        var r = k.ReactDebugCurrentFrame, o = r.getStackAddendum();
        o !== "" && (e += "%s", t = t.concat([o]));
        var s = t.map(function(c) {
          return String(c);
        });
        s.unshift("Warning: " + e), Function.prototype.apply.call(console[n], console, s);
      }
    }
    function U(n) {
      n();
    }
    var B = 512, b = null, w = 0;
    function V(n) {
      b = new Uint8Array(B), w = 0;
    }
    function D(n, e) {
      if (e.length !== 0) {
        if (e.length > B) {
          w > 0 && (n.enqueue(new Uint8Array(b.buffer, 0, w)), b = new Uint8Array(B), w = 0), n.enqueue(e);
          return;
        }
        var t = e, r = b.length - w;
        r < t.length && (r === 0 ? n.enqueue(b) : (b.set(t.subarray(0, r), w), n.enqueue(b), t = t.subarray(r)), b = new Uint8Array(B), w = 0), b.set(t, w), w += t.length;
      }
    }
    function L(n, e) {
      return D(n, e), !0;
    }
    function Q(n) {
      b && w > 0 && (n.enqueue(new Uint8Array(b.buffer, 0, w)), b = null, w = 0);
    }
    function J(n) {
      n.close();
    }
    var ee = new TextEncoder();
    function N(n) {
      return ee.encode(n);
    }
    function M(n) {
      return ee.encode(n);
    }
    function ne(n, e) {
      typeof n.error == "function" ? n.error(e) : n.close();
    }
    function He(n) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return t;
      }
    }
    function we(n) {
      try {
        return De(n), !1;
      } catch {
        return !0;
      }
    }
    function De(n) {
      return "" + n;
    }
    function Ce(n, e) {
      if (we(n))
        return f("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", e, He(n)), De(n);
    }
    function ge(n, e) {
      if (we(n))
        return f("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", e, He(n)), De(n);
    }
    function je(n) {
      if (we(n))
        return f("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", He(n)), De(n);
    }
    var ce = Object.prototype.hasOwnProperty, at = 0, me = 1, Le = 2, Z = 3, he = 4, Qe = 5, ze = 6, ht = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", st = ht + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", K = new RegExp("^[" + ht + "][" + st + "]*$"), dt = {}, Ae = {};
    function Re(n) {
      return ce.call(Ae, n) ? !0 : ce.call(dt, n) ? !1 : K.test(n) ? (Ae[n] = !0, !0) : (dt[n] = !0, f("Invalid attribute name: `%s`", n), !1);
    }
    function _t(n, e, t, r) {
      if (t !== null && t.type === at)
        return !1;
      switch (typeof e) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (t !== null)
            return !t.acceptsBooleans;
          var o = n.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function It(n) {
      return Oe.hasOwnProperty(n) ? Oe[n] : null;
    }
    function $e(n, e, t, r, o, s, c) {
      this.acceptsBooleans = e === Le || e === Z || e === he, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = t, this.propertyName = n, this.type = e, this.sanitizeURL = s, this.removeEmptyString = c;
    }
    var Oe = {}, wt = [
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
    wt.forEach(function(n) {
      Oe[n] = new $e(
        n,
        at,
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
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
      var e = n[0], t = n[1];
      Oe[e] = new $e(
        e,
        me,
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
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
      Oe[n] = new $e(
        n,
        Le,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
      Oe[n] = new $e(
        n,
        Le,
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
    ].forEach(function(n) {
      Oe[n] = new $e(
        n,
        Z,
        !1,
        // mustUseProperty
        n.toLowerCase(),
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
    ].forEach(function(n) {
      Oe[n] = new $e(
        n,
        Z,
        !0,
        // mustUseProperty
        n,
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
    ].forEach(function(n) {
      Oe[n] = new $e(
        n,
        he,
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
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(n) {
      Oe[n] = new $e(
        n,
        ze,
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
    }), ["rowSpan", "start"].forEach(function(n) {
      Oe[n] = new $e(
        n,
        Qe,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var We = /[\-\:]([a-z])/g, it = function(n) {
      return n[1].toUpperCase();
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
    ].forEach(function(n) {
      var e = n.replace(We, it);
      Oe[e] = new $e(
        e,
        me,
        !1,
        // mustUseProperty
        n,
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
    ].forEach(function(n) {
      var e = n.replace(We, it);
      Oe[e] = new $e(
        e,
        me,
        !1,
        // mustUseProperty
        n,
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
    ].forEach(function(n) {
      var e = n.replace(We, it);
      Oe[e] = new $e(
        e,
        me,
        !1,
        // mustUseProperty
        n,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(n) {
      Oe[n] = new $e(
        n,
        me,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var lt = "xlinkHref";
    Oe[lt] = new $e(
      "xlinkHref",
      me,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(n) {
      Oe[n] = new $e(
        n,
        me,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var rt = {
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
    function kt(n, e) {
      return n + e.charAt(0).toUpperCase() + e.substring(1);
    }
    var Ke = ["Webkit", "ms", "Moz", "O"];
    Object.keys(rt).forEach(function(n) {
      Ke.forEach(function(e) {
        rt[kt(e, n)] = rt[n];
      });
    });
    var nt = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function vt(n, e) {
      nt[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || f("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), e.onChange || e.readOnly || e.disabled || e.checked == null || f("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function X(n, e) {
      if (n.indexOf("-") === -1)
        return typeof e.is == "string";
      switch (n) {
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
    var ae = {
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
    }, te = {}, ie = new RegExp("^(aria)-[" + st + "]*$"), fe = new RegExp("^(aria)[A-Z][" + st + "]*$");
    function se(n, e) {
      {
        if (ce.call(te, e) && te[e])
          return !0;
        if (fe.test(e)) {
          var t = "aria-" + e.slice(4).toLowerCase(), r = ae.hasOwnProperty(t) ? t : null;
          if (r == null)
            return f("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", e), te[e] = !0, !0;
          if (e !== r)
            return f("Invalid ARIA attribute `%s`. Did you mean `%s`?", e, r), te[e] = !0, !0;
        }
        if (ie.test(e)) {
          var o = e.toLowerCase(), s = ae.hasOwnProperty(o) ? o : null;
          if (s == null)
            return te[e] = !0, !1;
          if (e !== s)
            return f("Unknown ARIA attribute `%s`. Did you mean `%s`?", e, s), te[e] = !0, !0;
        }
      }
      return !0;
    }
    function Ee(n, e) {
      {
        var t = [];
        for (var r in e) {
          var o = se(n, r);
          o || t.push(r);
        }
        var s = t.map(function(c) {
          return "`" + c + "`";
        }).join(", ");
        t.length === 1 ? f("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, n) : t.length > 1 && f("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, n);
      }
    }
    function ke(n, e) {
      X(n, e) || Ee(n, e);
    }
    var Ve = !1;
    function Ht(n, e) {
      {
        if (n !== "input" && n !== "textarea" && n !== "select")
          return;
        e != null && e.value === null && !Ve && (Ve = !0, n === "select" && e.multiple ? f("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", n) : f("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", n));
      }
    }
    var Wt = {
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
    }, Nt = function() {
    };
    {
      var Ye = {}, Pt = /^on./, mt = /^on[^A-Z]/, Nr = new RegExp("^(aria)-[" + st + "]*$"), Tr = new RegExp("^(aria)[A-Z][" + st + "]*$");
      Nt = function(n, e, t, r) {
        if (ce.call(Ye, e) && Ye[e])
          return !0;
        var o = e.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return f("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ye[e] = !0, !0;
        if (r != null) {
          var s = r.registrationNameDependencies, c = r.possibleRegistrationNames;
          if (s.hasOwnProperty(e))
            return !0;
          var p = c.hasOwnProperty(o) ? c[o] : null;
          if (p != null)
            return f("Invalid event handler property `%s`. Did you mean `%s`?", e, p), Ye[e] = !0, !0;
          if (Pt.test(e))
            return f("Unknown event handler property `%s`. It will be ignored.", e), Ye[e] = !0, !0;
        } else if (Pt.test(e))
          return mt.test(e) && f("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", e), Ye[e] = !0, !0;
        if (Nr.test(e) || Tr.test(e))
          return !0;
        if (o === "innerhtml")
          return f("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ye[e] = !0, !0;
        if (o === "aria")
          return f("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ye[e] = !0, !0;
        if (o === "is" && t !== null && t !== void 0 && typeof t != "string")
          return f("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof t), Ye[e] = !0, !0;
        if (typeof t == "number" && isNaN(t))
          return f("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", e), Ye[e] = !0, !0;
        var y = It(e), E = y !== null && y.type === at;
        if (Wt.hasOwnProperty(o)) {
          var j = Wt[o];
          if (j !== e)
            return f("Invalid DOM property `%s`. Did you mean `%s`?", e, j), Ye[e] = !0, !0;
        } else if (!E && e !== o)
          return f("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", e, o), Ye[e] = !0, !0;
        return typeof t == "boolean" && _t(e, t, y) ? (t ? f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', t, e, e, t, e) : f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', t, e, e, t, e, e, e), Ye[e] = !0, !0) : E ? !0 : _t(e, t, y) ? (Ye[e] = !0, !1) : ((t === "false" || t === "true") && y !== null && y.type === Z && (f("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", t, e, t === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', e, t), Ye[e] = !0), !0);
      };
    }
    var pr = function(n, e, t) {
      {
        var r = [];
        for (var o in e) {
          var s = Nt(n, o, e[o], t);
          s || r.push(o);
        }
        var c = r.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        r.length === 1 ? f("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, n) : r.length > 1 && f("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, n);
      }
    };
    function en(n, e, t) {
      X(n, e) || pr(n, e, t);
    }
    var Rr = function() {
    };
    {
      var tr = /^(?:webkit|moz|o)[A-Z]/, _r = /^-ms-/, hr = /-(.)/g, ut = /;\s*$/, ct = {}, Dt = {}, Te = !1, zt = !1, vr = function(n) {
        return n.replace(hr, function(e, t) {
          return t.toUpperCase();
        });
      }, rr = function(n) {
        ct.hasOwnProperty(n) && ct[n] || (ct[n] = !0, f(
          "Unsupported style property %s. Did you mean %s?",
          n,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          vr(n.replace(_r, "ms-"))
        ));
      }, Ft = function(n) {
        ct.hasOwnProperty(n) && ct[n] || (ct[n] = !0, f("Unsupported vendor-prefixed style property %s. Did you mean %s?", n, n.charAt(0).toUpperCase() + n.slice(1)));
      }, sr = function(n, e) {
        Dt.hasOwnProperty(e) && Dt[e] || (Dt[e] = !0, f(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, n, e.replace(ut, "")));
      }, Mt = function(n, e) {
        Te || (Te = !0, f("`NaN` is an invalid value for the `%s` css style property.", n));
      }, ot = function(n, e) {
        zt || (zt = !0, f("`Infinity` is an invalid value for the `%s` css style property.", n));
      };
      Rr = function(n, e) {
        n.indexOf("-") > -1 ? rr(n) : tr.test(n) ? Ft(n) : ut.test(e) && sr(n, e), typeof e == "number" && (isNaN(e) ? Mt(n, e) : isFinite(e) || ot(n, e));
      };
    }
    var Ir = Rr, mr = /["'&<>]/;
    function Pr(n) {
      je(n);
      var e = "" + n, t = mr.exec(e);
      if (!t)
        return e;
      var r, o = "", s, c = 0;
      for (s = t.index; s < e.length; s++) {
        switch (e.charCodeAt(s)) {
          case 34:
            r = "&quot;";
            break;
          case 38:
            r = "&amp;";
            break;
          case 39:
            r = "&#x27;";
            break;
          case 60:
            r = "&lt;";
            break;
          case 62:
            r = "&gt;";
            break;
          default:
            continue;
        }
        c !== s && (o += e.substring(c, s)), c = s + 1, o += r;
      }
      return c !== s ? o + e.substring(c, s) : o;
    }
    function et(n) {
      return typeof n == "boolean" || typeof n == "number" ? "" + n : Pr(n);
    }
    var Dr = /([A-Z])/g, tn = /^ms-/;
    function rn(n) {
      return n.replace(Dr, "-$1").toLowerCase().replace(tn, "-ms-");
    }
    var S = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, H = !1;
    function Y(n) {
      !H && S.test(n) && (H = !0, f("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(n)));
    }
    var re = Array.isArray;
    function ve(n) {
      return re(n);
    }
    var xe = M("<script>"), ye = M("<\/script>"), pe = M('<script src="'), Ge = M('<script type="module" src="'), _e = M('" async=""><\/script>');
    function Me(n) {
      return je(n), ("" + n).replace(Be, $t);
    }
    var Be = /(<\/|<)(s)(cript)/gi, $t = function(n, e, t, r) {
      return "" + e + (t === "s" ? "\\u0073" : "\\u0053") + r;
    };
    function At(n, e, t, r, o) {
      var s = n === void 0 ? "" : n, c = e === void 0 ? xe : M('<script nonce="' + et(e) + '">'), p = [];
      if (t !== void 0 && p.push(c, N(Me(t)), ye), r !== void 0)
        for (var y = 0; y < r.length; y++)
          p.push(pe, N(et(r[y])), _e);
      if (o !== void 0)
        for (var E = 0; E < o.length; E++)
          p.push(Ge, N(et(o[E])), _e);
      return {
        bootstrapChunks: p,
        startInlineScript: c,
        placeholderPrefix: M(s + "P:"),
        segmentPrefix: M(s + "S:"),
        boundaryPrefix: s + "B:",
        idPrefix: s,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Xe = 0, Ze = 1, Ot = 2, jt = 3, gr = 4, zr = 5, Vt = 6, nr = 7;
    function gt(n, e) {
      return {
        insertionMode: n,
        selectedValue: e
      };
    }
    function yr(n) {
      var e = n === "http://www.w3.org/2000/svg" ? Ot : n === "http://www.w3.org/1998/Math/MathML" ? jt : Xe;
      return gt(e, null);
    }
    function Fr(n, e, t) {
      switch (e) {
        case "select":
          return gt(Ze, t.value != null ? t.value : t.defaultValue);
        case "svg":
          return gt(Ot, null);
        case "math":
          return gt(jt, null);
        case "foreignObject":
          return gt(Ze, null);
        // Table parents are special in that their children can only be created at all if they're
        // wrapped in a table parent. So we need to encode that we're entering this mode.
        case "table":
          return gt(gr, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return gt(zr, null);
        case "colgroup":
          return gt(nr, null);
        case "tr":
          return gt(Vt, null);
      }
      return n.insertionMode >= gr || n.insertionMode === Xe ? gt(Ze, null) : n;
    }
    var $r = null;
    function Lt(n) {
      var e = n.nextSuspenseID++;
      return M(n.boundaryPrefix + e.toString(16));
    }
    function or(n, e, t) {
      var r = n.idPrefix, o = ":" + r + "R" + e;
      return t > 0 && (o += "H" + t.toString(32)), o + ":";
    }
    function yt(n) {
      return et(n);
    }
    var Vr = M("<!-- -->");
    function ft(n, e, t, r) {
      return e === "" ? r : (r && n.push(Vr), n.push(N(yt(e))), !0);
    }
    function Ct(n, e, t, r) {
      t && r && n.push(Vr);
    }
    var a = /* @__PURE__ */ new Map();
    function u(n) {
      var e = a.get(n);
      if (e !== void 0)
        return e;
      var t = M(et(rn(n)));
      return a.set(n, t), t;
    }
    var h = M(' style="'), g = M(":"), I = M(";");
    function C(n, e, t) {
      if (typeof t != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var r = !0;
      for (var o in t)
        if (ce.call(t, o)) {
          var s = t[o];
          if (!(s == null || typeof s == "boolean" || s === "")) {
            var c = void 0, p = void 0, y = o.indexOf("--") === 0;
            y ? (c = N(et(o)), ge(s, o), p = N(et(("" + s).trim()))) : (Ir(o, s), c = u(o), typeof s == "number" ? s !== 0 && !ce.call(rt, o) ? p = N(s + "px") : p = N("" + s) : (ge(s, o), p = N(et(("" + s).trim())))), r ? (r = !1, n.push(h, c, g, p)) : n.push(I, c, g, p);
          }
        }
      r || n.push(q);
    }
    var A = M(" "), z = M('="'), q = M('"'), le = M('=""');
    function oe(n, e, t, r) {
      switch (t) {
        case "style": {
          C(n, e, r);
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
        var o = It(t);
        if (o !== null) {
          switch (typeof r) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return;
            case "boolean":
              if (!o.acceptsBooleans)
                return;
          }
          var s = o.attributeName, c = N(s);
          switch (o.type) {
            case Z:
              r && n.push(A, c, le);
              return;
            case he:
              r === !0 ? n.push(A, c, le) : r === !1 || n.push(A, c, z, N(et(r)), q);
              return;
            case Qe:
              isNaN(r) || n.push(A, c, z, N(et(r)), q);
              break;
            case ze:
              !isNaN(r) && r >= 1 && n.push(A, c, z, N(et(r)), q);
              break;
            default:
              o.sanitizeURL && (Ce(r, s), r = "" + r, Y(r)), n.push(A, c, z, N(et(r)), q);
          }
        } else if (Re(t)) {
          switch (typeof r) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return;
            case "boolean": {
              var p = t.toLowerCase().slice(0, 5);
              if (p !== "data-" && p !== "aria-")
                return;
            }
          }
          n.push(A, N(t), z, N(et(r)), q);
        }
      }
    }
    var Ie = M(">"), St = M("/>");
    function bt(n, e, t) {
      if (e != null) {
        if (t != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof e != "object" || !("__html" in e))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var r = e.__html;
        r != null && (je(r), n.push(N("" + r)));
      }
    }
    var xt = !1, Sr = !1, ar = !1, Yr = !1, br = !1, Mr = !1, lr = !1;
    function Ar(n, e) {
      {
        var t = n[e];
        if (t != null) {
          var r = ve(t);
          n.multiple && !r ? f("The `%s` prop supplied to <select> must be an array if `multiple` is true.", e) : !n.multiple && r && f("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", e);
        }
      }
    }
    function Ra(n, e, t) {
      vt("select", e), Ar(e, "value"), Ar(e, "defaultValue"), e.value !== void 0 && e.defaultValue !== void 0 && !ar && (f("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ar = !0), n.push(Yt("select"));
      var r = null, o = null;
      for (var s in e)
        if (ce.call(e, s)) {
          var c = e[s];
          if (c == null)
            continue;
          switch (s) {
            case "children":
              r = c;
              break;
            case "dangerouslySetInnerHTML":
              o = c;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              oe(n, t, s, c);
              break;
          }
        }
      return n.push(Ie), bt(n, o, r), r;
    }
    function _a(n) {
      var e = "";
      return R.Children.forEach(n, function(t) {
        t != null && (e += t, !br && typeof t != "string" && typeof t != "number" && (br = !0, f("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), e;
    }
    var Sn = M(' selected=""');
    function ir(n, e, t, r) {
      var o = r.selectedValue;
      n.push(Yt("option"));
      var s = null, c = null, p = null, y = null;
      for (var E in e)
        if (ce.call(e, E)) {
          var j = e[E];
          if (j == null)
            continue;
          switch (E) {
            case "children":
              s = j;
              break;
            case "selected":
              p = j, lr || (f("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), lr = !0);
              break;
            case "dangerouslySetInnerHTML":
              y = j;
              break;
            // eslint-disable-next-line-no-fallthrough
            case "value":
              c = j;
            // We intentionally fallthrough to also set the attribute on the node.
            // eslint-disable-next-line-no-fallthrough
            default:
              oe(n, t, E, j);
              break;
          }
        }
      if (o != null) {
        var W;
        if (c !== null ? (Ce(c, "value"), W = "" + c) : (y !== null && (Mr || (Mr = !0, f("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), W = _a(s)), ve(o))
          for (var G = 0; G < o.length; G++) {
            Ce(o[G], "value");
            var de = "" + o[G];
            if (de === W) {
              n.push(Sn);
              break;
            }
          }
        else
          Ce(o, "select.value"), "" + o === W && n.push(Sn);
      } else p && n.push(Sn);
      return n.push(Ie), bt(n, y, s), s;
    }
    function Ia(n, e, t) {
      vt("input", e), e.checked !== void 0 && e.defaultChecked !== void 0 && !Sr && (f("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), Sr = !0), e.value !== void 0 && e.defaultValue !== void 0 && !xt && (f("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), xt = !0), n.push(Yt("input"));
      var r = null, o = null, s = null, c = null;
      for (var p in e)
        if (ce.call(e, p)) {
          var y = e[p];
          if (y == null)
            continue;
          switch (p) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            case "defaultChecked":
              c = y;
              break;
            case "defaultValue":
              o = y;
              break;
            case "checked":
              s = y;
              break;
            case "value":
              r = y;
              break;
            default:
              oe(n, t, p, y);
              break;
          }
        }
      return s !== null ? oe(n, t, "checked", s) : c !== null && oe(n, t, "checked", c), r !== null ? oe(n, t, "value", r) : o !== null && oe(n, t, "value", o), n.push(St), null;
    }
    function ur(n, e, t) {
      vt("textarea", e), e.value !== void 0 && e.defaultValue !== void 0 && !Yr && (f("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Yr = !0), n.push(Yt("textarea"));
      var r = null, o = null, s = null;
      for (var c in e)
        if (ce.call(e, c)) {
          var p = e[c];
          if (p == null)
            continue;
          switch (c) {
            case "children":
              s = p;
              break;
            case "value":
              r = p;
              break;
            case "defaultValue":
              o = p;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            // eslint-disable-next-line-no-fallthrough
            default:
              oe(n, t, c, p);
              break;
          }
        }
      if (r === null && o !== null && (r = o), n.push(Ie), s != null) {
        if (f("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), r != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (ve(s)) {
          if (s.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          je(s[0]), r = "" + s[0];
        }
        je(s), r = "" + s;
      }
      return typeof r == "string" && r[0] === `
` && n.push(jr), r !== null && (Ce(r, "value"), n.push(N(yt("" + r)))), null;
    }
    function Vn(n, e, t, r) {
      n.push(Yt(t));
      for (var o in e)
        if (ce.call(e, o)) {
          var s = e[o];
          if (s == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(t + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              oe(n, r, o, s);
              break;
          }
        }
      return n.push(St), null;
    }
    function bn(n, e, t) {
      n.push(Yt("menuitem"));
      for (var r in e)
        if (ce.call(e, r)) {
          var o = e[r];
          if (o == null)
            continue;
          switch (r) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              oe(n, t, r, o);
              break;
          }
        }
      return n.push(Ie), null;
    }
    function Ue(n, e, t) {
      n.push(Yt("title"));
      var r = null;
      for (var o in e)
        if (ce.call(e, o)) {
          var s = e[o];
          if (s == null)
            continue;
          switch (o) {
            case "children":
              r = s;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            // eslint-disable-next-line-no-fallthrough
            default:
              oe(n, t, o, s);
              break;
          }
        }
      n.push(Ie);
      {
        var c = Array.isArray(r) && r.length < 2 ? r[0] || null : r;
        Array.isArray(r) && r.length > 1 ? f("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : c != null && c.$$typeof != null ? f("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : c != null && typeof c != "string" && typeof c != "number" && f("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return r;
    }
    function Or(n, e, t, r) {
      n.push(Yt(t));
      var o = null, s = null;
      for (var c in e)
        if (ce.call(e, c)) {
          var p = e[c];
          if (p == null)
            continue;
          switch (c) {
            case "children":
              o = p;
              break;
            case "dangerouslySetInnerHTML":
              s = p;
              break;
            default:
              oe(n, r, c, p);
              break;
          }
        }
      return n.push(Ie), bt(n, s, o), typeof o == "string" ? (n.push(N(yt(o))), null) : o;
    }
    function xn(n, e, t, r) {
      n.push(Yt(t));
      var o = null, s = null;
      for (var c in e)
        if (ce.call(e, c)) {
          var p = e[c];
          if (p == null)
            continue;
          switch (c) {
            case "children":
              o = p;
              break;
            case "dangerouslySetInnerHTML":
              s = p;
              break;
            case "style":
              C(n, r, p);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              Re(c) && typeof p != "function" && typeof p != "symbol" && n.push(A, N(c), z, N(et(p)), q);
              break;
          }
        }
      return n.push(Ie), bt(n, s, o), o;
    }
    var jr = M(`
`);
    function xr(n, e, t, r) {
      n.push(Yt(t));
      var o = null, s = null;
      for (var c in e)
        if (ce.call(e, c)) {
          var p = e[c];
          if (p == null)
            continue;
          switch (c) {
            case "children":
              o = p;
              break;
            case "dangerouslySetInnerHTML":
              s = p;
              break;
            default:
              oe(n, r, c, p);
              break;
          }
        }
      if (n.push(Ie), s != null) {
        if (o != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof s != "object" || !("__html" in s))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var y = s.__html;
        y != null && (typeof y == "string" && y.length > 0 && y[0] === `
` ? n.push(jr, N(y)) : (je(y), n.push(N("" + y))));
      }
      return typeof o == "string" && o[0] === `
` && n.push(jr), o;
    }
    var wn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, wr = /* @__PURE__ */ new Map();
    function Yt(n) {
      var e = wr.get(n);
      if (e === void 0) {
        if (!wn.test(n))
          throw new Error("Invalid tag: " + n);
        e = M("<" + n), wr.set(n, e);
      }
      return e;
    }
    var Yn = M("<!DOCTYPE html>");
    function nn(n, e, t, r, o) {
      switch (ke(e, t), Ht(e, t), en(e, t, null), !t.suppressContentEditableWarning && t.contentEditable && t.children != null && f("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), o.insertionMode !== Ot && o.insertionMode !== jt && e.indexOf("-") === -1 && typeof t.is != "string" && e.toLowerCase() !== e && f("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e) {
        // Special tags
        case "select":
          return Ra(n, t, r);
        case "option":
          return ir(n, t, r, o);
        case "textarea":
          return ur(n, t, r);
        case "input":
          return Ia(n, t, r);
        case "menuitem":
          return bn(n, t, r);
        case "title":
          return Ue(n, t, r);
        // Newline eating tags
        case "listing":
        case "pre":
          return xr(n, t, e, r);
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
          return Vn(n, t, e, r);
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
          return Or(n, t, e, r);
        case "html":
          return o.insertionMode === Xe && n.push(Yn), Or(n, t, e, r);
        default:
          return e.indexOf("-") === -1 && typeof t.is != "string" ? Or(n, t, e, r) : xn(n, t, e, r);
      }
    }
    var Ro = M("</"), kn = M(">");
    function _o(n, e, t) {
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
          n.push(Ro, N(e), kn);
      }
    }
    function Pa(n, e) {
      for (var t = e.bootstrapChunks, r = 0; r < t.length - 1; r++)
        D(n, t[r]);
      return r < t.length ? L(n, t[r]) : !0;
    }
    var Da = M('<template id="'), Cn = M('"></template>');
    function Io(n, e, t) {
      D(n, Da), D(n, e.placeholderPrefix);
      var r = N(t.toString(16));
      return D(n, r), L(n, Cn);
    }
    var on = M("<!--$-->"), Gn = M('<!--$?--><template id="'), Fa = M('"></template>'), Gr = M("<!--$!-->"), Xn = M("<!--/$-->"), Zn = M("<template"), Xr = M('"'), an = M(' data-dgst="'), En = M(' data-msg="'), Po = M(' data-stck="'), Do = M("></template>");
    function Fo(n, e) {
      return L(n, on);
    }
    function Tn(n, e, t) {
      if (D(n, Gn), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return D(n, t), L(n, Fa);
    }
    function Et(n, e, t, r, o) {
      var s;
      return s = L(n, Gr), D(n, Zn), t && (D(n, an), D(n, N(et(t))), D(n, Xr)), r && (D(n, En), D(n, N(et(r))), D(n, Xr)), o && (D(n, Po), D(n, N(et(o))), D(n, Xr)), s = L(n, Do), s;
    }
    function Mo(n, e) {
      return L(n, Xn);
    }
    function Rn(n, e) {
      return L(n, Xn);
    }
    function Ma(n, e) {
      return L(n, Xn);
    }
    var Ao = M('<div hidden id="'), _n = M('">'), Oo = M("</div>"), jo = M('<svg aria-hidden="true" style="display:none" id="'), In = M('">'), Pn = M("</svg>"), Lo = M('<math aria-hidden="true" style="display:none" id="'), Bo = M('">'), Uo = M("</math>"), Jn = M('<table hidden id="'), Ho = M('">'), i = M("</table>"), l = M('<table hidden><tbody id="'), d = M('">'), m = M("</tbody></table>"), P = M('<table hidden><tr id="'), T = M('">'), O = M("</tr></table>"), $ = M('<table hidden><colgroup id="'), ue = M('">'), be = M("</colgroup></table>");
    function Se(n, e, t, r) {
      switch (t.insertionMode) {
        case Xe:
        case Ze:
          return D(n, Ao), D(n, e.segmentPrefix), D(n, N(r.toString(16))), L(n, _n);
        case Ot:
          return D(n, jo), D(n, e.segmentPrefix), D(n, N(r.toString(16))), L(n, In);
        case jt:
          return D(n, Lo), D(n, e.segmentPrefix), D(n, N(r.toString(16))), L(n, Bo);
        case gr:
          return D(n, Jn), D(n, e.segmentPrefix), D(n, N(r.toString(16))), L(n, Ho);
        // TODO: For the rest of these, there will be extra wrapper nodes that never
        // get deleted from the document. We need to delete the table too as part
        // of the injected scripts. They are invisible though so it's not too terrible
        // and it's kind of an edge case to suspend in a table. Totally supported though.
        case zr:
          return D(n, l), D(n, e.segmentPrefix), D(n, N(r.toString(16))), L(n, d);
        case Vt:
          return D(n, P), D(n, e.segmentPrefix), D(n, N(r.toString(16))), L(n, T);
        case nr:
          return D(n, $), D(n, e.segmentPrefix), D(n, N(r.toString(16))), L(n, ue);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ne(n, e) {
      switch (e.insertionMode) {
        case Xe:
        case Ze:
          return L(n, Oo);
        case Ot:
          return L(n, Pn);
        case jt:
          return L(n, Uo);
        case gr:
          return L(n, i);
        case zr:
          return L(n, m);
        case Vt:
          return L(n, O);
        case nr:
          return L(n, be);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Tt = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Gt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Xt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Dn = M(Tt + ';$RS("'), Wo = M('$RS("'), sn = M('","'), fs = M('")<\/script>');
    function ds(n, e, t) {
      D(n, e.startInlineScript), e.sentCompleteSegmentFunction ? D(n, Wo) : (e.sentCompleteSegmentFunction = !0, D(n, Dn)), D(n, e.segmentPrefix);
      var r = N(t.toString(16));
      return D(n, r), D(n, sn), D(n, e.placeholderPrefix), D(n, r), L(n, fs);
    }
    var Aa = M(Gt + ';$RC("'), ps = M('$RC("'), hs = M('","'), wi = M('")<\/script>');
    function ki(n, e, t, r) {
      if (D(n, e.startInlineScript), e.sentCompleteBoundaryFunction ? D(n, ps) : (e.sentCompleteBoundaryFunction = !0, D(n, Aa)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var o = N(r.toString(16));
      return D(n, t), D(n, hs), D(n, e.segmentPrefix), D(n, o), L(n, wi);
    }
    var vs = M(Xt + ';$RX("'), ms = M('$RX("'), gs = M('"'), ys = M(")<\/script>"), Bt = M(",");
    function Ss(n, e, t, r, o, s) {
      if (D(n, e.startInlineScript), e.sentClientRenderFunction ? D(n, ms) : (e.sentClientRenderFunction = !0, D(n, vs)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return D(n, t), D(n, gs), (r || o || s) && (D(n, Bt), D(n, N(No(r || "")))), (o || s) && (D(n, Bt), D(n, N(No(o || "")))), s && (D(n, Bt), D(n, N(No(s)))), L(n, ys);
    }
    var Ci = /[<\u2028\u2029]/g;
    function No(n) {
      var e = JSON.stringify(n);
      return e.replace(Ci, function(t) {
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
    var Zt = Object.assign, Ei = Symbol.for("react.element"), zo = Symbol.for("react.portal"), $o = Symbol.for("react.fragment"), Vo = Symbol.for("react.strict_mode"), Yo = Symbol.for("react.profiler"), Qn = Symbol.for("react.provider"), Kn = Symbol.for("react.context"), Fn = Symbol.for("react.forward_ref"), Oa = Symbol.for("react.suspense"), ja = Symbol.for("react.suspense_list"), La = Symbol.for("react.memo"), Go = Symbol.for("react.lazy"), Ti = Symbol.for("react.scope"), bs = Symbol.for("react.debug_trace_mode"), xs = Symbol.for("react.legacy_hidden"), ws = Symbol.for("react.default_value"), Ba = Symbol.iterator, tt = "@@iterator";
    function qn(n) {
      if (n === null || typeof n != "object")
        return null;
      var e = Ba && n[Ba] || n[tt];
      return typeof e == "function" ? e : null;
    }
    function Ri(n, e, t) {
      var r = n.displayName;
      if (r)
        return r;
      var o = e.displayName || e.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function Ua(n) {
      return n.displayName || "Context";
    }
    function qe(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case $o:
          return "Fragment";
        case zo:
          return "Portal";
        case Yo:
          return "Profiler";
        case Vo:
          return "StrictMode";
        case Oa:
          return "Suspense";
        case ja:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case Kn:
            var e = n;
            return Ua(e) + ".Consumer";
          case Qn:
            var t = n;
            return Ua(t._context) + ".Provider";
          case Fn:
            return Ri(n, n.render, "ForwardRef");
          case La:
            var r = n.displayName || null;
            return r !== null ? r : qe(n.type) || "Memo";
          case Go: {
            var o = n, s = o._payload, c = o._init;
            try {
              return qe(c(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Mn = 0, Ha, Wa, Na, za, _i, Ii, Xo;
    function Zo() {
    }
    Zo.__reactDisabledLog = !0;
    function eo() {
      {
        if (Mn === 0) {
          Ha = console.log, Wa = console.info, Na = console.warn, za = console.error, _i = console.group, Ii = console.groupCollapsed, Xo = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: Zo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        Mn++;
      }
    }
    function $a() {
      {
        if (Mn--, Mn === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Zt({}, n, {
              value: Ha
            }),
            info: Zt({}, n, {
              value: Wa
            }),
            warn: Zt({}, n, {
              value: Na
            }),
            error: Zt({}, n, {
              value: za
            }),
            group: Zt({}, n, {
              value: _i
            }),
            groupCollapsed: Zt({}, n, {
              value: Ii
            }),
            groupEnd: Zt({}, n, {
              value: Xo
            })
          });
        }
        Mn < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var An = k.ReactCurrentDispatcher, Va;
    function ln(n, e, t) {
      {
        if (Va === void 0)
          try {
            throw Error();
          } catch (o) {
            var r = o.stack.trim().match(/\n( *(at )?)/);
            Va = r && r[1] || "";
          }
        return `
` + Va + n;
      }
    }
    var Ya = !1, to;
    {
      var ks = typeof WeakMap == "function" ? WeakMap : Map;
      to = new ks();
    }
    function ro(n, e) {
      if (!n || Ya)
        return "";
      {
        var t = to.get(n);
        if (t !== void 0)
          return t;
      }
      var r;
      Ya = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = An.current, An.current = null, eo();
      try {
        if (e) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (Fe) {
              r = Fe;
            }
            Reflect.construct(n, [], c);
          } else {
            try {
              c.call();
            } catch (Fe) {
              r = Fe;
            }
            n.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Fe) {
            r = Fe;
          }
          n();
        }
      } catch (Fe) {
        if (Fe && r && typeof Fe.stack == "string") {
          for (var p = Fe.stack.split(`
`), y = r.stack.split(`
`), E = p.length - 1, j = y.length - 1; E >= 1 && j >= 0 && p[E] !== y[j]; )
            j--;
          for (; E >= 1 && j >= 0; E--, j--)
            if (p[E] !== y[j]) {
              if (E !== 1 || j !== 1)
                do
                  if (E--, j--, j < 0 || p[E] !== y[j]) {
                    var W = `
` + p[E].replace(" at new ", " at ");
                    return n.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", n.displayName)), typeof n == "function" && to.set(n, W), W;
                  }
                while (E >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        Ya = !1, An.current = s, $a(), Error.prepareStackTrace = o;
      }
      var G = n ? n.displayName || n.name : "", de = G ? ln(G) : "";
      return typeof n == "function" && to.set(n, de), de;
    }
    function Pi(n, e, t) {
      return ro(n, !0);
    }
    function Ga(n, e, t) {
      return ro(n, !1);
    }
    function Jo(n) {
      var e = n.prototype;
      return !!(e && e.isReactComponent);
    }
    function Qo(n, e, t) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return ro(n, Jo(n));
      if (typeof n == "string")
        return ln(n);
      switch (n) {
        case Oa:
          return ln("Suspense");
        case ja:
          return ln("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case Fn:
            return Ga(n.render);
          case La:
            return Qo(n.type, e, t);
          case Go: {
            var r = n, o = r._payload, s = r._init;
            try {
              return Qo(s(o), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Ko = {}, no = k.ReactDebugCurrentFrame;
    function oo(n) {
      if (n) {
        var e = n._owner, t = Qo(n.type, n._source, e ? e.type : null);
        no.setExtraStackFrame(t);
      } else
        no.setExtraStackFrame(null);
    }
    function Di(n, e, t, r, o) {
      {
        var s = Function.call.bind(ce);
        for (var c in n)
          if (s(n, c)) {
            var p = void 0;
            try {
              if (typeof n[c] != "function") {
                var y = Error((r || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              p = n[c](e, c, r, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              p = E;
            }
            p && !(p instanceof Error) && (oo(o), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", r || "React class", t, c, typeof p), oo(null)), p instanceof Error && !(p.message in Ko) && (Ko[p.message] = !0, oo(o), f("Failed %s type: %s", t, p.message), oo(null));
          }
      }
    }
    var un;
    un = {};
    var qo = {};
    Object.freeze(qo);
    function Zr(n, e) {
      {
        var t = n.contextTypes;
        if (!t)
          return qo;
        var r = {};
        for (var o in t)
          r[o] = e[o];
        {
          var s = qe(n) || "Unknown";
          Di(t, r, "context", s);
        }
        return r;
      }
    }
    function Xa(n, e, t, r) {
      {
        if (typeof n.getChildContext != "function") {
          {
            var o = qe(e) || "Unknown";
            un[o] || (un[o] = !0, f("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", o, o));
          }
          return t;
        }
        var s = n.getChildContext();
        for (var c in s)
          if (!(c in r))
            throw new Error((qe(e) || "Unknown") + '.getChildContext(): key "' + c + '" is not defined in childContextTypes.');
        {
          var p = qe(e) || "Unknown";
          Di(r, s, "child context", p);
        }
        return Zt({}, t, s);
      }
    }
    var cn;
    cn = {};
    var ea = null, Jr = null;
    function ta(n) {
      n.context._currentValue = n.parentValue;
    }
    function ra(n) {
      n.context._currentValue = n.value;
    }
    function ao(n, e) {
      if (n !== e) {
        ta(n);
        var t = n.parent, r = e.parent;
        if (t === null) {
          if (r !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (r === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          ao(t, r);
        }
        ra(e);
      }
    }
    function io(n) {
      ta(n);
      var e = n.parent;
      e !== null && io(e);
    }
    function Fi(n) {
      var e = n.parent;
      e !== null && Fi(e), ra(n);
    }
    function Mi(n, e) {
      ta(n);
      var t = n.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === e.depth ? ao(t, e) : Mi(t, e);
    }
    function Ai(n, e) {
      var t = e.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      n.depth === t.depth ? ao(n, t) : Ai(n, t), ra(e);
    }
    function Qr(n) {
      var e = Jr, t = n;
      e !== t && (e === null ? Fi(t) : t === null ? io(e) : e.depth === t.depth ? ao(e, t) : e.depth > t.depth ? Mi(e, t) : Ai(e, t), Jr = t);
    }
    function Za(n, e) {
      var t;
      t = n._currentValue, n._currentValue = e, n._currentRenderer !== void 0 && n._currentRenderer !== null && n._currentRenderer !== cn && f("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer = cn;
      var r = Jr, o = {
        parent: r,
        depth: r === null ? 0 : r.depth + 1,
        context: n,
        parentValue: t,
        value: e
      };
      return Jr = o, o;
    }
    function Cs(n) {
      var e = Jr;
      if (e === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      e.context !== n && f("The parent context is not the expected context. This is probably a bug in React.");
      {
        var t = e.parentValue;
        t === ws ? e.context._currentValue = e.context._defaultValue : e.context._currentValue = t, n._currentRenderer !== void 0 && n._currentRenderer !== null && n._currentRenderer !== cn && f("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer = cn;
      }
      return Jr = e.parent;
    }
    function Oi() {
      return Jr;
    }
    function On(n) {
      var e = n._currentValue;
      return e;
    }
    function so(n) {
      return n._reactInternals;
    }
    function Ja(n, e) {
      n._reactInternals = e;
    }
    var na = {}, oa = {}, aa, jn, lo, uo, ia, co, sa, la, Qa;
    {
      aa = /* @__PURE__ */ new Set(), jn = /* @__PURE__ */ new Set(), lo = /* @__PURE__ */ new Set(), sa = /* @__PURE__ */ new Set(), uo = /* @__PURE__ */ new Set(), la = /* @__PURE__ */ new Set(), Qa = /* @__PURE__ */ new Set();
      var ji = /* @__PURE__ */ new Set();
      co = function(n, e) {
        if (!(n === null || typeof n == "function")) {
          var t = e + "_" + n;
          ji.has(t) || (ji.add(t), f("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", e, n));
        }
      }, ia = function(n, e) {
        if (e === void 0) {
          var t = qe(n) || "Component";
          uo.has(t) || (uo.add(t), f("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", t));
        }
      };
    }
    function Li(n, e) {
      {
        var t = n.constructor, r = t && qe(t) || "ReactClass", o = r + "." + e;
        if (na[o])
          return;
        f(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, e, e, r), na[o] = !0;
      }
    }
    var Bi = {
      isMounted: function(n) {
        return !1;
      },
      enqueueSetState: function(n, e, t) {
        var r = so(n);
        r.queue === null ? Li(n, "setState") : (r.queue.push(e), t != null && co(t, "setState"));
      },
      enqueueReplaceState: function(n, e, t) {
        var r = so(n);
        r.replace = !0, r.queue = [e], t != null && co(t, "setState");
      },
      enqueueForceUpdate: function(n, e) {
        var t = so(n);
        t.queue === null ? Li(n, "forceUpdate") : e != null && co(e, "setState");
      }
    };
    function Es(n, e, t, r, o) {
      var s = t(o, r);
      ia(e, s);
      var c = s == null ? r : Zt({}, r, s);
      return c;
    }
    function Ui(n, e, t) {
      var r = qo, o = n.contextType;
      if ("contextType" in n) {
        var s = (
          // Allow null for conditional declaration
          o === null || o !== void 0 && o.$$typeof === Kn && o._context === void 0
        );
        if (!s && !Qa.has(n)) {
          Qa.add(n);
          var c = "";
          o === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof o != "object" ? c = " However, it is set to a " + typeof o + "." : o.$$typeof === Qn ? c = " Did you accidentally pass the Context.Provider instead?" : o._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(o).join(", ") + "}.", f("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", qe(n) || "Component", c);
        }
      }
      typeof o == "object" && o !== null ? r = On(o) : r = t;
      var p = new n(e, r);
      {
        if (typeof n.getDerivedStateFromProps == "function" && (p.state === null || p.state === void 0)) {
          var y = qe(n) || "Component";
          aa.has(y) || (aa.add(y), f("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", y, p.state === null ? "null" : "undefined", y));
        }
        if (typeof n.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function") {
          var E = null, j = null, W = null;
          if (typeof p.componentWillMount == "function" && p.componentWillMount.__suppressDeprecationWarning !== !0 ? E = "componentWillMount" : typeof p.UNSAFE_componentWillMount == "function" && (E = "UNSAFE_componentWillMount"), typeof p.componentWillReceiveProps == "function" && p.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? j = "componentWillReceiveProps" : typeof p.UNSAFE_componentWillReceiveProps == "function" && (j = "UNSAFE_componentWillReceiveProps"), typeof p.componentWillUpdate == "function" && p.componentWillUpdate.__suppressDeprecationWarning !== !0 ? W = "componentWillUpdate" : typeof p.UNSAFE_componentWillUpdate == "function" && (W = "UNSAFE_componentWillUpdate"), E !== null || j !== null || W !== null) {
            var G = qe(n) || "Component", de = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            lo.has(G) || (lo.add(G), f(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, G, de, E !== null ? `
  ` + E : "", j !== null ? `
  ` + j : "", W !== null ? `
  ` + W : ""));
          }
        }
      }
      return p;
    }
    function Ts(n, e, t) {
      {
        var r = qe(e) || "Component", o = n.render;
        o || (e.prototype && typeof e.prototype.render == "function" ? f("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", r) : f("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", r)), n.getInitialState && !n.getInitialState.isReactClassApproved && !n.state && f("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", r), n.getDefaultProps && !n.getDefaultProps.isReactClassApproved && f("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", r), n.propTypes && f("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", r), n.contextType && f("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", r), n.contextTypes && f("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", r), e.contextType && e.contextTypes && !la.has(e) && (la.add(e), f("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", r)), typeof n.componentShouldUpdate == "function" && f("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", r), e.prototype && e.prototype.isPureReactComponent && typeof n.shouldComponentUpdate < "u" && f("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", qe(e) || "A pure component"), typeof n.componentDidUnmount == "function" && f("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", r), typeof n.componentDidReceiveProps == "function" && f("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", r), typeof n.componentWillRecieveProps == "function" && f("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", r), typeof n.UNSAFE_componentWillRecieveProps == "function" && f("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", r);
        var s = n.props !== t;
        n.props !== void 0 && s && f("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", r, r), n.defaultProps && f("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", r, r), typeof n.getSnapshotBeforeUpdate == "function" && typeof n.componentDidUpdate != "function" && !jn.has(e) && (jn.add(e), f("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", qe(e))), typeof n.getDerivedStateFromProps == "function" && f("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", r), typeof n.getDerivedStateFromError == "function" && f("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", r), typeof e.getSnapshotBeforeUpdate == "function" && f("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", r);
        var c = n.state;
        c && (typeof c != "object" || ve(c)) && f("%s.state: must be set to an object or null", r), typeof n.getChildContext == "function" && typeof e.childContextTypes != "object" && f("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", r);
      }
    }
    function Rs(n, e) {
      var t = e.state;
      if (typeof e.componentWillMount == "function") {
        if (e.componentWillMount.__suppressDeprecationWarning !== !0) {
          var r = qe(n) || "Unknown";
          oa[r] || (_(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            r
          ), oa[r] = !0);
        }
        e.componentWillMount();
      }
      typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && (f("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", qe(n) || "Component"), Bi.enqueueReplaceState(e, e.state, null));
    }
    function Ka(n, e, t, r) {
      if (n.queue !== null && n.queue.length > 0) {
        var o = n.queue, s = n.replace;
        if (n.queue = null, n.replace = !1, s && o.length === 1)
          e.state = o[0];
        else {
          for (var c = s ? o[0] : e.state, p = !0, y = s ? 1 : 0; y < o.length; y++) {
            var E = o[y], j = typeof E == "function" ? E.call(e, c, t, r) : E;
            j != null && (p ? (p = !1, c = Zt({}, c, j)) : Zt(c, j));
          }
          e.state = c;
        }
      } else
        n.queue = null;
    }
    function fo(n, e, t, r) {
      Ts(n, e, t);
      var o = n.state !== void 0 ? n.state : null;
      n.updater = Bi, n.props = t, n.state = o;
      var s = {
        queue: [],
        replace: !1
      };
      Ja(n, s);
      var c = e.contextType;
      if (typeof c == "object" && c !== null ? n.context = On(c) : n.context = r, n.state === t) {
        var p = qe(e) || "Component";
        sa.has(p) || (sa.add(p), f("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
      }
      var y = e.getDerivedStateFromProps;
      typeof y == "function" && (n.state = Es(n, e, y, o, t)), typeof e.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function") && (Rs(e, n), Ka(s, n, t, r));
    }
    var _s = {
      id: 1,
      overflow: ""
    };
    function Is(n) {
      var e = n.overflow, t = n.id, r = t & ~Ps(t);
      return r.toString(32) + e;
    }
    function qa(n, e, t) {
      var r = n.id, o = n.overflow, s = ua(r) - 1, c = r & ~(1 << s), p = t + 1, y = ua(e) + s;
      if (y > 30) {
        var E = s - s % 5, j = (1 << E) - 1, W = (c & j).toString(32), G = c >> E, de = s - E, Fe = ua(e) + de, pt = p << de, gn = pt | G, yn = W + o;
        return {
          id: 1 << Fe | gn,
          overflow: yn
        };
      } else {
        var Wr = p << s, zn = Wr | c, il = o;
        return {
          id: 1 << y | zn,
          overflow: il
        };
      }
    }
    function ua(n) {
      return 32 - Ds(n);
    }
    function Ps(n) {
      return 1 << ua(n) - 1;
    }
    var Ds = Math.clz32 ? Math.clz32 : ei, Fs = Math.log, Lr = Math.LN2;
    function ei(n) {
      var e = n >>> 0;
      return e === 0 ? 32 : 31 - (Fs(e) / Lr | 0) | 0;
    }
    function ca(n, e) {
      return n === e && (n !== 0 || 1 / n === 1 / e) || n !== n && e !== e;
    }
    var Je = typeof Object.is == "function" ? Object.is : ca, Jt = null, Ln = null, fn = null, Pe = null, Kr = !1, fa = !1, Qt = 0, Kt = null, kr = 0, Ms = 25, cr = !1, qr;
    function dn() {
      if (Jt === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return cr && f("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Jt;
    }
    function As(n, e) {
      if (e === null)
        return f("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", qr), !1;
      n.length !== e.length && f(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, qr, "[" + n.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var t = 0; t < e.length && t < n.length; t++)
        if (!Je(n[t], e[t]))
          return !1;
      return !0;
    }
    function ti() {
      if (kr > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function po() {
      return Pe === null ? fn === null ? (Kr = !1, fn = Pe = ti()) : (Kr = !0, Pe = fn) : Pe.next === null ? (Kr = !1, Pe = Pe.next = ti()) : (Kr = !0, Pe = Pe.next), Pe;
    }
    function Os(n, e) {
      Jt = e, Ln = n, cr = !1, Qt = 0;
    }
    function js(n, e, t, r) {
      for (; fa; )
        fa = !1, Qt = 0, kr += 1, Pe = null, t = n(e, r);
      return ri(), t;
    }
    function da() {
      var n = Qt !== 0;
      return n;
    }
    function ri() {
      cr = !1, Jt = null, Ln = null, fa = !1, fn = null, kr = 0, Kt = null, Pe = null;
    }
    function Hi(n) {
      return cr && f("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), On(n);
    }
    function Wi(n) {
      return qr = "useContext", dn(), On(n);
    }
    function ni(n, e) {
      return typeof e == "function" ? e(n) : e;
    }
    function Ls(n) {
      return qr = "useState", Ni(
        ni,
        // useReducer has a special case to support lazy useState initializers
        n
      );
    }
    function Ni(n, e, t) {
      if (n !== ni && (qr = "useReducer"), Jt = dn(), Pe = po(), Kr) {
        var r = Pe.queue, o = r.dispatch;
        if (Kt !== null) {
          var s = Kt.get(r);
          if (s !== void 0) {
            Kt.delete(r);
            var c = Pe.memoizedState, p = s;
            do {
              var y = p.action;
              cr = !0, c = n(c, y), cr = !1, p = p.next;
            } while (p !== null);
            return Pe.memoizedState = c, [c, o];
          }
        }
        return [Pe.memoizedState, o];
      } else {
        cr = !0;
        var E;
        n === ni ? E = typeof e == "function" ? e() : e : E = t !== void 0 ? t(e) : e, cr = !1, Pe.memoizedState = E;
        var j = Pe.queue = {
          last: null,
          dispatch: null
        }, W = j.dispatch = Hs.bind(null, Jt, j);
        return [Pe.memoizedState, W];
      }
    }
    function zi(n, e) {
      Jt = dn(), Pe = po();
      var t = e === void 0 ? null : e;
      if (Pe !== null) {
        var r = Pe.memoizedState;
        if (r !== null && t !== null) {
          var o = r[1];
          if (As(t, o))
            return r[0];
        }
      }
      cr = !0;
      var s = n();
      return cr = !1, Pe.memoizedState = [s, t], s;
    }
    function Bs(n) {
      Jt = dn(), Pe = po();
      var e = Pe.memoizedState;
      if (e === null) {
        var t = {
          current: n
        };
        return Object.seal(t), Pe.memoizedState = t, t;
      } else
        return e;
    }
    function Us(n, e) {
      qr = "useLayoutEffect", f("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Hs(n, e, t) {
      if (kr >= Ms)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (n === Jt) {
        fa = !0;
        var r = {
          action: t,
          next: null
        };
        Kt === null && (Kt = /* @__PURE__ */ new Map());
        var o = Kt.get(e);
        if (o === void 0)
          Kt.set(e, r);
        else {
          for (var s = o; s.next !== null; )
            s = s.next;
          s.next = r;
        }
      }
    }
    function Ws(n, e) {
      return zi(function() {
        return n;
      }, e);
    }
    function Ns(n, e, t) {
      return dn(), e(n._source);
    }
    function zs(n, e, t) {
      if (t === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return t();
    }
    function pa(n) {
      return dn(), n;
    }
    function $i() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function oi() {
      return dn(), [!1, $i];
    }
    function Vi() {
      var n = Ln, e = Is(n.treeContext), t = ho;
      if (t === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var r = Qt++;
      return or(t, e, r);
    }
    function ha() {
    }
    var va = {
      readContext: Hi,
      useContext: Wi,
      useMemo: zi,
      useReducer: Ni,
      useRef: Bs,
      useState: Ls,
      useInsertionEffect: ha,
      useLayoutEffect: Us,
      useCallback: Ws,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: ha,
      // Effects are not run in the server environment.
      useEffect: ha,
      // Debugging effect
      useDebugValue: ha,
      useDeferredValue: pa,
      useTransition: oi,
      useId: Vi,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Ns,
      useSyncExternalStore: zs
    }, ho = null;
    function ma(n) {
      ho = n;
    }
    function Bn(n) {
      try {
        var e = "", t = n;
        do {
          switch (t.tag) {
            case 0:
              e += ln(t.type, null, null);
              break;
            case 1:
              e += Ga(t.type, null, null);
              break;
            case 2:
              e += Pi(t.type, null, null);
              break;
          }
          t = t.parent;
        } while (t);
        return e;
      } catch (r) {
        return `
Error generating stack: ` + r.message + `
` + r.stack;
      }
    }
    var ga = k.ReactCurrentDispatcher, ya = k.ReactDebugCurrentFrame, Sa = 0, Un = 1, ai = 2, pn = 3, Yi = 4, $s = 0, Hn = 1, Wn = 2, Vs = 12800;
    function Ys(n) {
      return console.error(n), null;
    }
    function hn() {
    }
    function ba(n, e, t, r, o, s, c, p, y) {
      var E = [], j = /* @__PURE__ */ new Set(), W = {
        destination: null,
        responseState: e,
        progressiveChunkSize: r === void 0 ? Vs : r,
        status: $s,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: j,
        pingedTasks: E,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: o === void 0 ? Ys : o,
        onAllReady: s === void 0 ? hn : s,
        onShellReady: c === void 0 ? hn : c,
        onShellError: p === void 0 ? hn : p,
        onFatalError: y === void 0 ? hn : y
      }, G = vo(
        W,
        0,
        null,
        t,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      G.parentFlushed = !0;
      var de = vn(W, n, null, G, j, qo, ea, _s);
      return E.push(de), W;
    }
    function Br(n, e) {
      var t = n.pingedTasks;
      t.push(e), t.length === 1 && U(function() {
        return mi(n);
      });
    }
    function ii(n, e) {
      return {
        id: $r,
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
    function vn(n, e, t, r, o, s, c, p) {
      n.allPendingTasks++, t === null ? n.pendingRootTasks++ : t.pendingTasks++;
      var y = {
        node: e,
        ping: function() {
          return Br(n, y);
        },
        blockedBoundary: t,
        blockedSegment: r,
        abortSet: o,
        legacyContext: s,
        context: c,
        treeContext: p
      };
      return y.componentStack = null, o.add(y), y;
    }
    function vo(n, e, t, r, o, s) {
      return {
        status: Sa,
        id: -1,
        // lazily assigned later
        index: e,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: r,
        boundary: t,
        lastPushedText: o,
        textEmbedded: s
      };
    }
    var Ur = null;
    function Cr() {
      return Ur === null || Ur.componentStack === null ? "" : Bn(Ur.componentStack);
    }
    function Hr(n, e) {
      n.componentStack = {
        tag: 0,
        parent: n.componentStack,
        type: e
      };
    }
    function xa(n, e) {
      n.componentStack = {
        tag: 1,
        parent: n.componentStack,
        type: e
      };
    }
    function mo(n, e) {
      n.componentStack = {
        tag: 2,
        parent: n.componentStack,
        type: e
      };
    }
    function fr(n) {
      n.componentStack === null ? f("Unexpectedly popped too many stack frames. This is a bug in React.") : n.componentStack = n.componentStack.parent;
    }
    var go = null;
    function si(n, e) {
      {
        var t;
        typeof e == "string" ? t = e : e && typeof e.message == "string" ? t = e.message : t = String(e);
        var r = go || Cr();
        go = null, n.errorMessage = t, n.errorComponentStack = r;
      }
    }
    function yo(n, e) {
      var t = n.onError(e);
      if (t != null && typeof t != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
      return t;
    }
    function So(n, e) {
      var t = n.onShellError;
      t(e);
      var r = n.onFatalError;
      r(e), n.destination !== null ? (n.status = Wn, ne(n.destination, e)) : (n.status = Hn, n.fatalError = e);
    }
    function Gi(n, e, t) {
      Hr(e, "Suspense");
      var r = e.blockedBoundary, o = e.blockedSegment, s = t.fallback, c = t.children, p = /* @__PURE__ */ new Set(), y = ii(n, p), E = o.chunks.length, j = vo(
        n,
        E,
        y,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      o.children.push(j), o.lastPushedText = !1;
      var W = vo(
        n,
        0,
        null,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      W.parentFlushed = !0, e.blockedBoundary = y, e.blockedSegment = W;
      try {
        if (Nn(n, e, c), Ct(W.chunks, n.responseState, W.lastPushedText, W.textEmbedded), W.status = Un, mn(y, W), y.pendingTasks === 0) {
          fr(e);
          return;
        }
      } catch (de) {
        W.status = Yi, y.forceClientRender = !0, y.errorDigest = yo(n, de), si(y, de);
      } finally {
        e.blockedBoundary = r, e.blockedSegment = o;
      }
      var G = vn(n, s, r, j, p, e.legacyContext, e.context, e.treeContext);
      G.componentStack = e.componentStack, n.pingedTasks.push(G), fr(e);
    }
    function Gs(n, e, t, r) {
      Hr(e, t);
      var o = e.blockedSegment, s = nn(o.chunks, t, r, n.responseState, o.formatContext);
      o.lastPushedText = !1;
      var c = o.formatContext;
      o.formatContext = Fr(c, t, r), Nn(n, e, s), o.formatContext = c, _o(o.chunks, t), o.lastPushedText = !1, fr(e);
    }
    function Xi(n) {
      return n.prototype && n.prototype.isReactComponent;
    }
    function bo(n, e, t, r, o) {
      var s = {};
      Os(e, s);
      var c = t(r, o);
      return js(t, r, c, o);
    }
    function li(n, e, t, r, o) {
      var s = t.render();
      t.props !== o && (di || f("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", qe(r) || "a component"), di = !0);
      {
        var c = r.childContextTypes;
        if (c != null) {
          var p = e.legacyContext, y = Xa(t, r, p, c);
          e.legacyContext = y, Rt(n, e, s), e.legacyContext = p;
          return;
        }
      }
      Rt(n, e, s);
    }
    function Zi(n, e, t, r) {
      mo(e, t);
      var o = Zr(t, e.legacyContext), s = Ui(t, r, o);
      fo(s, t, r, o), li(n, e, s, t, r), fr(e);
    }
    var ui = {}, xo = {}, ci = {}, fi = {}, di = !1, Ji = {}, Qi = !1, pi = !1, Ki = !1;
    function Xs(n, e, t, r) {
      var o;
      if (o = Zr(t, e.legacyContext), xa(e, t), t.prototype && typeof t.prototype.render == "function") {
        var s = qe(t) || "Unknown";
        ui[s] || (f("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", s, s), ui[s] = !0);
      }
      var c = bo(n, e, t, r, o), p = da();
      if (typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0) {
        var y = qe(t) || "Unknown";
        xo[y] || (f("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), xo[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0
      ) {
        {
          var E = qe(t) || "Unknown";
          xo[E] || (f("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", E, E, E), xo[E] = !0);
        }
        fo(c, t, r, o), li(n, e, c, t, r);
      } else if (Zs(t), p) {
        var j = e.treeContext, W = 1, G = 0;
        e.treeContext = qa(j, W, G);
        try {
          Rt(n, e, c);
        } finally {
          e.treeContext = j;
        }
      } else
        Rt(n, e, c);
      fr(e);
    }
    function Zs(n) {
      {
        if (n && n.childContextTypes && f("%s(...): childContextTypes cannot be defined on a function component.", n.displayName || n.name || "Component"), n.defaultProps !== void 0) {
          var e = qe(n) || "Unknown";
          Ji[e] || (f("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", e), Ji[e] = !0);
        }
        if (typeof n.getDerivedStateFromProps == "function") {
          var t = qe(n) || "Unknown";
          fi[t] || (f("%s: Function components do not support getDerivedStateFromProps.", t), fi[t] = !0);
        }
        if (typeof n.contextType == "object" && n.contextType !== null) {
          var r = qe(n) || "Unknown";
          ci[r] || (f("%s: Function components do not support contextType.", r), ci[r] = !0);
        }
      }
    }
    function qi(n, e) {
      if (n && n.defaultProps) {
        var t = Zt({}, e), r = n.defaultProps;
        for (var o in r)
          t[o] === void 0 && (t[o] = r[o]);
        return t;
      }
      return e;
    }
    function Js(n, e, t, r, o) {
      xa(e, t.render);
      var s = bo(n, e, t.render, r, o), c = da();
      if (c) {
        var p = e.treeContext, y = 1, E = 0;
        e.treeContext = qa(p, y, E);
        try {
          Rt(n, e, s);
        } finally {
          e.treeContext = p;
        }
      } else
        Rt(n, e, s);
      fr(e);
    }
    function hi(n, e, t, r, o) {
      var s = t.type, c = qi(s, r);
      wa(n, e, s, c, o);
    }
    function Qs(n, e, t, r) {
      t._context === void 0 ? t !== t.Consumer && (Ki || (Ki = !0, f("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : t = t._context;
      var o = r.children;
      typeof o != "function" && f("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var s = On(t), c = o(s);
      Rt(n, e, c);
    }
    function qt(n, e, t, r) {
      var o = t._context, s = r.value, c = r.children, p;
      p = e.context, e.context = Za(o, s), Rt(n, e, c), e.context = Cs(o), p !== e.context && f("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Ks(n, e, t, r, o) {
      Hr(e, "Lazy");
      var s = t._payload, c = t._init, p = c(s), y = qi(p, r);
      wa(n, e, p, y, o), fr(e);
    }
    function wa(n, e, t, r, o) {
      if (typeof t == "function")
        if (Xi(t)) {
          Zi(n, e, t, r);
          return;
        } else {
          Xs(n, e, t, r);
          return;
        }
      if (typeof t == "string") {
        Gs(n, e, t, r);
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
        case xs:
        case bs:
        case Vo:
        case Yo:
        case $o: {
          Rt(n, e, r.children);
          return;
        }
        case ja: {
          Hr(e, "SuspenseList"), Rt(n, e, r.children), fr(e);
          return;
        }
        case Ti:
          throw new Error("ReactDOMServer does not yet support scope components.");
        // eslint-disable-next-line-no-fallthrough
        case Oa: {
          Gi(n, e, r);
          return;
        }
      }
      if (typeof t == "object" && t !== null)
        switch (t.$$typeof) {
          case Fn: {
            Js(n, e, t, r, o);
            return;
          }
          case La: {
            hi(n, e, t, r, o);
            return;
          }
          case Qn: {
            qt(n, e, t, r);
            return;
          }
          case Kn: {
            Qs(n, e, t, r);
            return;
          }
          case Go: {
            Ks(n, e, t, r);
            return;
          }
        }
      var s = "";
      throw (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (t == null ? t : typeof t) + "." + s));
    }
    function qs(n, e) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      n[Symbol.toStringTag] === "Generator" && (Qi || f("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Qi = !0), n.entries === e && (pi || f("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), pi = !0);
    }
    function Rt(n, e, t) {
      try {
        return el(n, e, t);
      } catch (r) {
        throw typeof r == "object" && r !== null && typeof r.then == "function" || (go = go !== null ? go : Cr()), r;
      }
    }
    function el(n, e, t) {
      if (e.node = t, typeof t == "object" && t !== null) {
        switch (t.$$typeof) {
          case Ei: {
            var r = t, o = r.type, s = r.props, c = r.ref;
            wa(n, e, o, s, c);
            return;
          }
          case zo:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          // eslint-disable-next-line-no-fallthrough
          case Go: {
            var p = t, y = p._payload, E = p._init, j;
            try {
              j = E(y);
            } catch (Wr) {
              throw typeof Wr == "object" && Wr !== null && typeof Wr.then == "function" && Hr(e, "Lazy"), Wr;
            }
            Rt(n, e, j);
            return;
          }
        }
        if (ve(t)) {
          es(n, e, t);
          return;
        }
        var W = qn(t);
        if (W) {
          qs(t, W);
          var G = W.call(t);
          if (G) {
            var de = G.next();
            if (!de.done) {
              var Fe = [];
              do
                Fe.push(de.value), de = G.next();
              while (!de.done);
              es(n, e, Fe);
              return;
            }
            return;
          }
        }
        var pt = Object.prototype.toString.call(t);
        throw new Error("Objects are not valid as a React child (found: " + (pt === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : pt) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof t == "string") {
        var gn = e.blockedSegment;
        gn.lastPushedText = ft(e.blockedSegment.chunks, t, n.responseState, gn.lastPushedText);
        return;
      }
      if (typeof t == "number") {
        var yn = e.blockedSegment;
        yn.lastPushedText = ft(e.blockedSegment.chunks, "" + t, n.responseState, yn.lastPushedText);
        return;
      }
      typeof t == "function" && f("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function es(n, e, t) {
      for (var r = t.length, o = 0; o < r; o++) {
        var s = e.treeContext;
        e.treeContext = qa(s, r, o);
        try {
          Nn(n, e, t[o]);
        } finally {
          e.treeContext = s;
        }
      }
    }
    function ts(n, e, t) {
      var r = e.blockedSegment, o = r.chunks.length, s = vo(
        n,
        o,
        null,
        r.formatContext,
        // Adopt the parent segment's leading text embed
        r.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      r.children.push(s), r.lastPushedText = !1;
      var c = vn(n, e.node, e.blockedBoundary, s, e.abortSet, e.legacyContext, e.context, e.treeContext);
      e.componentStack !== null && (c.componentStack = e.componentStack.parent);
      var p = c.ping;
      t.then(p, p);
    }
    function Nn(n, e, t) {
      var r = e.blockedSegment.formatContext, o = e.legacyContext, s = e.context, c = null;
      c = e.componentStack;
      try {
        return Rt(n, e, t);
      } catch (p) {
        if (ri(), typeof p == "object" && p !== null && typeof p.then == "function") {
          ts(n, e, p), e.blockedSegment.formatContext = r, e.legacyContext = o, e.context = s, Qr(s), e.componentStack = c;
          return;
        } else
          throw e.blockedSegment.formatContext = r, e.legacyContext = o, e.context = s, Qr(s), e.componentStack = c, p;
      }
    }
    function rs(n, e, t, r) {
      var o = yo(n, r);
      if (e === null ? So(n, r) : (e.pendingTasks--, e.forceClientRender || (e.forceClientRender = !0, e.errorDigest = o, si(e, r), e.parentFlushed && n.clientRenderedBoundaries.push(e))), n.allPendingTasks--, n.allPendingTasks === 0) {
        var s = n.onAllReady;
        s();
      }
    }
    function tl(n) {
      var e = this, t = n.blockedBoundary, r = n.blockedSegment;
      r.status = pn, wo(e, t, r);
    }
    function vi(n, e, t) {
      var r = n.blockedBoundary, o = n.blockedSegment;
      if (o.status = pn, r === null)
        e.allPendingTasks--, e.status !== Wn && (e.status = Wn, e.destination !== null && J(e.destination));
      else {
        if (r.pendingTasks--, !r.forceClientRender) {
          r.forceClientRender = !0;
          var s = t === void 0 ? new Error("The render was aborted by the server without a reason.") : t;
          r.errorDigest = e.onError(s);
          {
            var c = "The server did not finish this Suspense boundary: ";
            s && typeof s.message == "string" ? s = c + s.message : s = c + String(s);
            var p = Ur;
            Ur = n;
            try {
              si(r, s);
            } finally {
              Ur = p;
            }
          }
          r.parentFlushed && e.clientRenderedBoundaries.push(r);
        }
        if (r.fallbackAbortableTasks.forEach(function(E) {
          return vi(E, e, t);
        }), r.fallbackAbortableTasks.clear(), e.allPendingTasks--, e.allPendingTasks === 0) {
          var y = e.onAllReady;
          y();
        }
      }
    }
    function mn(n, e) {
      if (e.chunks.length === 0 && e.children.length === 1 && e.children[0].boundary === null) {
        var t = e.children[0];
        t.id = e.id, t.parentFlushed = !0, t.status === Un && mn(n, t);
      } else {
        var r = n.completedSegments;
        r.push(e);
      }
    }
    function wo(n, e, t) {
      if (e === null) {
        if (t.parentFlushed) {
          if (n.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          n.completedRootSegment = t;
        }
        if (n.pendingRootTasks--, n.pendingRootTasks === 0) {
          n.onShellError = hn;
          var r = n.onShellReady;
          r();
        }
      } else if (e.pendingTasks--, !e.forceClientRender) {
        if (e.pendingTasks === 0)
          t.parentFlushed && t.status === Un && mn(e, t), e.parentFlushed && n.completedBoundaries.push(e), e.fallbackAbortableTasks.forEach(tl, n), e.fallbackAbortableTasks.clear();
        else if (t.parentFlushed && t.status === Un) {
          mn(e, t);
          var o = e.completedSegments;
          o.length === 1 && e.parentFlushed && n.partialBoundaries.push(e);
        }
      }
      if (n.allPendingTasks--, n.allPendingTasks === 0) {
        var s = n.onAllReady;
        s();
      }
    }
    function rl(n, e) {
      var t = e.blockedSegment;
      if (t.status === Sa) {
        Qr(e.context);
        var r = null;
        r = Ur, Ur = e;
        try {
          Rt(n, e, e.node), Ct(t.chunks, n.responseState, t.lastPushedText, t.textEmbedded), e.abortSet.delete(e), t.status = Un, wo(n, e.blockedBoundary, t);
        } catch (s) {
          if (ri(), typeof s == "object" && s !== null && typeof s.then == "function") {
            var o = e.ping;
            s.then(o, o);
          } else
            e.abortSet.delete(e), t.status = Yi, rs(n, e.blockedBoundary, t, s);
        } finally {
          Ur = r;
        }
      }
    }
    function mi(n) {
      if (n.status !== Wn) {
        var e = Oi(), t = ga.current;
        ga.current = va;
        var r;
        r = ya.getCurrentStack, ya.getCurrentStack = Cr;
        var o = ho;
        ma(n.responseState);
        try {
          var s = n.pingedTasks, c;
          for (c = 0; c < s.length; c++) {
            var p = s[c];
            rl(n, p);
          }
          s.splice(0, c), n.destination !== null && gi(n, n.destination);
        } catch (y) {
          yo(n, y), So(n, y);
        } finally {
          ma(o), ga.current = t, ya.getCurrentStack = r, t === va && Qr(e);
        }
      }
    }
    function ko(n, e, t) {
      switch (t.parentFlushed = !0, t.status) {
        case Sa: {
          var r = t.id = n.nextSegmentId++;
          return t.lastPushedText = !1, t.textEmbedded = !1, Io(e, n.responseState, r);
        }
        case Un: {
          t.status = ai;
          for (var o = !0, s = t.chunks, c = 0, p = t.children, y = 0; y < p.length; y++) {
            for (var E = p[y]; c < E.index; c++)
              D(e, s[c]);
            o = ka(n, e, E);
          }
          for (; c < s.length - 1; c++)
            D(e, s[c]);
          return c < s.length && (o = L(e, s[c])), o;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function ka(n, e, t) {
      var r = t.boundary;
      if (r === null)
        return ko(n, e, t);
      if (r.parentFlushed = !0, r.forceClientRender)
        return Et(e, n.responseState, r.errorDigest, r.errorMessage, r.errorComponentStack), ko(n, e, t), Ma(e, n.responseState);
      if (r.pendingTasks > 0) {
        r.rootSegmentID = n.nextSegmentId++, r.completedSegments.length > 0 && n.partialBoundaries.push(r);
        var o = r.id = Lt(n.responseState);
        return Tn(e, n.responseState, o), ko(n, e, t), Rn(e, n.responseState);
      } else {
        if (r.byteSize > n.progressiveChunkSize)
          return r.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(r), Tn(e, n.responseState, r.id), ko(n, e, t), Rn(e, n.responseState);
        Fo(e, n.responseState);
        var s = r.completedSegments;
        if (s.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var c = s[0];
        return ka(n, e, c), Mo(e, n.responseState);
      }
    }
    function ns(n, e, t) {
      return Ss(e, n.responseState, t.id, t.errorDigest, t.errorMessage, t.errorComponentStack);
    }
    function Ca(n, e, t) {
      return Se(e, n.responseState, t.formatContext, t.id), ka(n, e, t), Ne(e, t.formatContext);
    }
    function os(n, e, t) {
      for (var r = t.completedSegments, o = 0; o < r.length; o++) {
        var s = r[o];
        as(n, e, t, s);
      }
      return r.length = 0, ki(e, n.responseState, t.id, t.rootSegmentID);
    }
    function nl(n, e, t) {
      for (var r = t.completedSegments, o = 0; o < r.length; o++) {
        var s = r[o];
        if (!as(n, e, t, s))
          return o++, r.splice(0, o), !1;
      }
      return r.splice(0, o), !0;
    }
    function as(n, e, t, r) {
      if (r.status === ai)
        return !0;
      var o = r.id;
      if (o === -1) {
        var s = r.id = t.rootSegmentID;
        if (s === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Ca(n, e, r);
      } else
        return Ca(n, e, r), ds(e, n.responseState, o);
    }
    function gi(n, e) {
      V();
      try {
        var t = n.completedRootSegment;
        t !== null && n.pendingRootTasks === 0 && (ka(n, e, t), n.completedRootSegment = null, Pa(e, n.responseState));
        var r = n.clientRenderedBoundaries, o;
        for (o = 0; o < r.length; o++) {
          var s = r[o];
          ns(n, e, s);
        }
        r.splice(0, o);
        var c = n.completedBoundaries;
        for (o = 0; o < c.length; o++) {
          var p = c[o];
          os(n, e, p);
        }
        c.splice(0, o), Q(e), V(e);
        var y = n.partialBoundaries;
        for (o = 0; o < y.length; o++) {
          var E = y[o];
          if (!nl(n, e, E)) {
            n.destination = null, o++, y.splice(0, o);
            return;
          }
        }
        y.splice(0, o);
        var j = n.completedBoundaries;
        for (o = 0; o < j.length; o++) {
          var W = j[o];
          os(n, e, W);
        }
        j.splice(0, o);
      } finally {
        Q(e), n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && (n.abortableTasks.size !== 0 && f("There was still abortable task at the root when we closed. This is a bug in React."), J(e));
      }
    }
    function is(n) {
      U(function() {
        return mi(n);
      });
    }
    function ol(n, e) {
      if (n.status === Hn) {
        n.status = Wn, ne(e, n.fatalError);
        return;
      }
      if (n.status !== Wn && n.destination === null) {
        n.destination = e;
        try {
          gi(n, e);
        } catch (t) {
          yo(n, t), So(n, t);
        }
      }
    }
    function ss(n, e) {
      try {
        var t = n.abortableTasks;
        t.forEach(function(r) {
          return vi(r, n, e);
        }), t.clear(), n.destination !== null && gi(n, n.destination);
      } catch (r) {
        yo(n, r), So(n, r);
      }
    }
    function al(n, e) {
      return new Promise(function(t, r) {
        var o, s, c = new Promise(function(G, de) {
          s = G, o = de;
        });
        function p() {
          var G = new ReadableStream(
            {
              type: "bytes",
              pull: function(de) {
                ol(E, de);
              },
              cancel: function(de) {
                ss(E);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          G.allReady = c, t(G);
        }
        function y(G) {
          c.catch(function() {
          }), r(G);
        }
        var E = ba(n, At(e ? e.identifierPrefix : void 0, e ? e.nonce : void 0, e ? e.bootstrapScriptContent : void 0, e ? e.bootstrapScripts : void 0, e ? e.bootstrapModules : void 0), yr(e ? e.namespaceURI : void 0), e ? e.progressiveChunkSize : void 0, e ? e.onError : void 0, s, p, y, o);
        if (e && e.signal) {
          var j = e.signal, W = function() {
            ss(E, j.reason), j.removeEventListener("abort", W);
          };
          j.addEventListener("abort", W);
        }
        is(E);
      });
    }
    cs.renderToReadableStream = al, cs.version = v;
  }()), cs;
}
var xl;
function zl() {
  if (xl) return $n;
  xl = 1;
  var R, v;
  return process.env.NODE_ENV === "production" ? (R = Ul(), v = Hl()) : (R = Wl(), v = Nl()), $n.version = R.version, $n.renderToString = R.renderToString, $n.renderToStaticMarkup = R.renderToStaticMarkup, $n.renderToNodeStream = R.renderToNodeStream, $n.renderToStaticNodeStream = R.renderToStaticNodeStream, $n.renderToReadableStream = v.renderToReadableStream, $n;
}
var sl = zl();
const ul = (R) => {
  const {
    onClose: v,
    children: k,
    open: _ = !1,
    className: f = "",
    innerClass: F = ""
  } = R;
  let U = null, B = null, b, w = "";
  return F && (w = F), _ && (U = k, b = "open", B = /* @__PURE__ */ x.jsx("div", { className: `common-drawer-outer ${f}`, onClick: v })), /* @__PURE__ */ x.jsxs(ll, { children: [
    B,
    /* @__PURE__ */ x.jsx("div", { className: `${w} common-drawer-inner ${b}`, children: U })
  ] });
}, $l = ({ pageMeta: R, updatePageMetaState: v }) => {
  const k = (U, B) => {
    v(B, U.target.value);
  }, { name: _ = "", status: f = "", slug: F = "" } = R;
  return /* @__PURE__ */ x.jsxs("div", { className: "drawer-contents", children: [
    /* @__PURE__ */ x.jsx("div", { className: "drawer-contents__option", children: /* @__PURE__ */ x.jsxs("label", { children: [
      "Page Name:",
      /* @__PURE__ */ x.jsx("br", {}),
      /* @__PURE__ */ x.jsx(
        "input",
        {
          className: "drawer-contents__input",
          name: "name",
          onChange: (U) => k(U, "name"),
          value: _
        }
      )
    ] }) }),
    /* @__PURE__ */ x.jsx("div", { className: "drawer-contents__option", children: /* @__PURE__ */ x.jsxs("label", { children: [
      "Page Status (drafts are only visible to admins):",
      /* @__PURE__ */ x.jsxs(
        "select",
        {
          name: "status",
          className: "base-form__select drawer-contents__input",
          onChange: (U) => k(U, "status"),
          value: f,
          children: [
            /* @__PURE__ */ x.jsx("option", { value: "draft", children: "Draft" }),
            /* @__PURE__ */ x.jsx("option", { value: "published", children: "Published" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ x.jsx("div", { className: "drawer-contents__option", children: /* @__PURE__ */ x.jsxs("label", { children: [
      "Page Url:",
      /* @__PURE__ */ x.jsx("br", {}),
      /* @__PURE__ */ x.jsx(
        "input",
        {
          className: "drawer-contents__input",
          name: "slug",
          onChange: (U) => k(U, "slug"),
          value: F
        }
      ),
      /* @__PURE__ */ x.jsx(
        "div",
        {
          style: { fontSize: "0.8em", color: "#dddddd", paddingTop: 4 },
          children: 'Set to "/" to make this homepage'
        }
      )
    ] }) })
  ] });
}, Ut = (R = null, v = !1) => {
  let k = Rl(Ta);
  if (!k)
    return v ? {
      setState: (U) => {
      },
      editorState: {},
      componentList: {},
      editing: !1,
      previewing: !1,
      editorOptions: {},
      viewportDimensions: { width: 0, height: 0, zoom: 1 },
      updateViewportDimension: (U, B, b) => {
      }
    } : void 0;
  if (!R) return k;
  if (!k) return;
  let _ = k.editorState, f = [];
  R.indexOf(".") > -1 ? f = R.split(".") : f = [R];
  for (let U = 0; U < f.length; U++) {
    let B = f[U];
    if (!_ || typeof _ != "object" && !Array.isArray(_))
      break;
    if (B.indexOf("[") > -1) {
      let b = B.split("["), w = b[0], V = parseInt(b[1].replace("]", ""));
      if (!_[w])
        break;
      _ = _[w][V];
    } else
      _ = _[f[U]];
  }
  return {
    ...k,
    setState: (U) => {
      let B = To(k.editorState), b = B;
      for (let w = 0; w < f.length; w++) {
        let V = f[w];
        if (V.indexOf("[") > -1) {
          let D = V.split("["), L = D[0], Q = parseInt(D[1].replace("]", ""));
          b[L] = To(b[L]) || [], b[L][Q] = To(U);
          break;
        }
        w === f.length - 1 ? b[V] = To(U) : (b[V] = To(b[V]) || {}, b = b[V]);
      }
      k.setState(B);
    },
    editorState: _
  };
}, To = (R) => Array.isArray(R) ? [...R] : typeof R == "object" ? { ...R } : R, gu = (R) => (v) => {
  const { editorState: k, editing: _, setState: f } = Ut(v.sectionName);
  return /* @__PURE__ */ x.jsx(R, { ...k, editing: _, setState: f, ...v });
}, yu = (R = null) => {
  const v = Ut(R).editorState;
  return [v == null ? void 0 : v.editorState, v == null ? void 0 : v.setState, v == null ? void 0 : v.editing];
}, Su = (R = null, v) => ({ ...Ut(R).editorState, ...v }), bu = (R) => (v) => /* @__PURE__ */ x.jsx(Ta.Consumer, { children: (k) => /* @__PURE__ */ x.jsx(R, { ...v, editorContext: k }) }), Ta = Ml(null), wl = (R, v, k) => (_) => {
  const f = { ...v, [R]: _ };
  k(f);
}, xi = (R) => {
  var Ke, nt, vt;
  const {
    sectionName: v = "children",
    tagName: k = "div",
    isRoot: _ = !1,
    iframeRef: f,
    editing: F = void 0,
    editorOnly: U,
    ...B
  } = R, [b, w] = dr(!1), [V, D] = dr({}), L = Ut(v), Q = Er.useRef(null), [J, ee] = dr(null), [N, M] = dr(null), [ne, He] = dr(!1), we = Er.useRef({}), [De, Ce] = dr({}), ge = Er.useRef(null), je = Er.useRef(0), [ce, at] = dr(""), me = (X) => (ae) => {
    X == 0 && (we.current = {}), we.current[X] != ae && (we.current[X] = ae);
  }, Le = (X) => V[X], Z = (X, ae) => {
    D({ ...V, [X]: ae });
  }, Qe = ((X) => X ? Object.keys(X).sort(
    (ae, te) => {
      var ie, fe;
      return ((ie = X[ae]) == null ? void 0 : ie.displayName) > ((fe = X[te]) == null ? void 0 : fe.displayName) ? 1 : -1;
    }
  ) : [])(L == null ? void 0 : L.componentList), {
    editorState: ze = [],
    previewing: ht,
    renderFlags: st,
    editorOptions: K
  } = L;
  let {
    editing: dt
  } = L;
  F !== void 0 && (dt = F);
  let Ae = ze, Re = ze || [], _t = null;
  const It = (X) => (ae) => {
    let te = [...Re];
    ae.preventDefault(), ae.stopPropagation(), te.splice(X, 1), L.setState(te);
  }, $e = (X) => (ae) => {
    let te = [...Re];
    if (ae.preventDefault(), ae.stopPropagation(), X == 0) return;
    je.current++;
    let ie = te[X];
    te[X] = te[X - 1], te[X - 1] = ie, L.setState(te), D({});
  }, Oe = (X) => (ae) => {
    let te = [...Re];
    if (ae.preventDefault(), ae.stopPropagation(), X == Re.length - 1) return;
    je.current++;
    let ie = te[X];
    te[X] = te[X + 1], te[X + 1] = ie, L.setState(te), D({});
  };
  if (Ae) {
    const X = Yl(L, me, dt);
    _t = Vl(
      {
        componentData: Ae,
        renderFlags: st,
        editing: dt,
        context: L,
        moveUp: $e,
        moveDown: Oe,
        currentChildren: Re,
        reorderRef: je,
        removeComponent: It,
        getComp: X,
        buttonRenderState: (ae) => [Le(ae), (te) => Z(ae, te)]
      }
    );
  }
  const { componentList: wt, viewportDimensions: We } = L, it = (X) => {
    let ae = [...Re];
    w(!1);
    let te = X;
    te || (te = X || Qe[0]), ae.push({ comp: te, props: {} }), L.setState(ae);
  };
  let lt = null;
  dt && !(st != null && st.noAdd) && (lt = /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx("div", { className: "unb-comp-section__add-component", onClick: () => w(!0) }),
    /* @__PURE__ */ x.jsxs(ul, { open: b, className: "component-drawer", onClose: () => w(!1), children: [
      /* @__PURE__ */ x.jsx("h1", { className: "component-drawer__h1", children: "Insert Component" }),
      /* @__PURE__ */ x.jsxs("label", { children: [
        "Search:",
        /* @__PURE__ */ x.jsx("input", { placeholder: "search", type: "text", value: ce, onChange: (X) => {
          at(X.target.value);
        } })
      ] }),
      /* @__PURE__ */ x.jsx("div", { className: "componeent-drawer__component-list", children: Qe.map((X) => {
        const ae = wt[X], te = ae.displayName ? ae.displayName : ae, ie = ae.description;
        return ce && te.toLowerCase().indexOf(ce.toLowerCase()) == -1 ? null : /* @__PURE__ */ x.jsxs("div", { onClick: () => it(X), className: "component-drawer__component", children: [
          te,
          ie && /* @__PURE__ */ x.jsx("div", { className: "component-drawer__description", children: ie })
        ] }, X);
      }) })
    ] })
  ] })), bi(
    () => {
      var X, ae;
      if (Q && Q.current) {
        let te = f.current, ie = [];
        if ((X = K == null ? void 0 : K.pageOptions) != null && X.scripts && ((ae = K.pageOptions.scripts) == null ? void 0 : ae.length) > 0)
          for (let fe of K.pageOptions.scripts) {
            const se = () => new Promise((Ee) => {
              const ke = te.contentDocument.createElement("script");
              ke.src = fe, te.contentDocument.head.appendChild(ke), ke.onload = () => Ee(), ke.onerror = () => Ee();
            });
            ie.push(se);
          }
        new Promise(async (fe) => {
          for (let se = 0; se < ie.length; se++)
            await ie[se]();
          fe(!0);
        }).then(
          () => {
            var fe, se;
            (fe = K == null ? void 0 : K.pageOptions) != null && fe.js && ((se = K.pageOptions.js) == null ? void 0 : se.length) > 0 && K.pageOptions.js.forEach((Ee) => {
              const ke = te.contentDocument.createElement("script");
              ke.textContent = Ee, te.contentDocument.body.appendChild(ke);
            });
          }
        );
      }
    },
    [Q.current]
  ), bi(() => {
    if (f && f.current && We) {
      const { zoom: X, width: ae, height: te } = We;
      f.current.style.zoom = `${X / 100}`, f.current.contentDocument.body.style.minWidth = `${ae - 20 / X * 100}px`, f.current.contentDocument.body.style.minHeight = `${te - 20 / X * 100}px`;
    }
  }, [J, We]), Er.useEffect(() => {
    if (!we.current) return;
    const X = () => {
      var ae;
      if (we.current) {
        we.current[0];
        for (let te in we.current) {
          const ie = we.current[te];
          if (!ie) continue;
          let fe = ie.nextSibling;
          const se = { x: 1e9, y: 1e9, bottom: -1e7, right: -1e7 };
          for (; fe && !(fe != null && fe.classList.contains("content-section-controls__wrapper")) && !(fe != null && fe.classList.contains("unb-comp-section__add-component")); ) {
            const ke = fe == null ? void 0 : fe.getBoundingClientRect();
            ke && (se.x = Math.min(se.x, ke.left), se.y = Math.min(se.y, ke.top), se.bottom = Math.max(se.bottom, ke.top + ke.height), se.right = Math.max(se.right, ke.left + ke.width)), fe = fe == null ? void 0 : fe.nextSibling;
          }
          ie.style.width = `${se.right - se.x}px`, ie.style.height = `${se.bottom - se.y}px`, ie.style.position = "absolute";
          const Ee = (ae = ie == null ? void 0 : ie.parentElement) == null ? void 0 : ae.getBoundingClientRect();
          Ee && (ie.style.left = `${se.x - Ee.x}px`, ie.style.top = `${se.y - Ee.y}px`);
        }
      }
    };
    return window.addEventListener("resize", X), setTimeout(X, 10), () => {
      window.removeEventListener("resize", X);
    };
  }, [
    ze,
    we.current,
    We,
    J,
    Q.current,
    dt,
    ne,
    N
  ]), bi(() => {
    ge.current != null && ge.current.addEventListener(
      "mousedown",
      (X) => {
        X.preventDefault(), X.stopPropagation();
        let ae = { x: X.clientX, y: X.clientY };
        We.width, We.height, We.width, We.height;
        let te = (se) => {
          se.preventDefault(), se.stopPropagation();
          let Ee = { x: se.clientX - ae.x, y: se.clientY - ae.y };
          ae = { x: se.clientX, y: se.clientY }, L.updateViewportDimension("width", Ee.x, !0), L.updateViewportDimension("height", Ee.y, !0);
        }, ie = (se) => {
          se.preventDefault(), se.stopPropagation(), se.buttons == 1 ? te(se) : fe(se);
        }, fe = (se) => {
          se.preventDefault(), se.stopPropagation();
          let Ee = { x: se.clientX - ae.x, y: se.clientY - ae.y };
          ae = { x: se.clientX, y: se.clientY }, L.updateViewportDimension("width", Ee.x, !0), L.updateViewportDimension("height", Ee.y, !0), -window.removeEventListener("mousemove", te), window.removeEventListener("mouseup", fe), window.removeEventListener("mousein", ie);
        };
        window.addEventListener("mousemove", te), window.addEventListener("mouseup", fe), window.addEventListener("mousein", ie);
      }
    );
  }, []);
  let rt = /* @__PURE__ */ x.jsx(Xl, { editing: dt, children: /* @__PURE__ */ x.jsxs(k, { ...B, children: [
    _t,
    lt
  ] }) }), kt = (Ke = K == null ? void 0 : K.pageOptions) == null ? void 0 : Ke.renderInIframe;
  if (kt === void 0 && (kt = !0), _ && kt) {
    let X = "<!doctype HTML>", ae;
    (nt = K == null ? void 0 : K.pageOptions) != null && nt.href ? (ae = K.pageOptions.href, X = void 0) : (vt = K == null ? void 0 : K.pageOptions) != null && vt.pageHtml && (X = K.pageOptions.pageHtml, ae = void 0), rt = /* @__PURE__ */ x.jsxs("div", { className: "page-editor__viewport-holder", style: { width: We.width * We.zoom / 100, height: We.height * We.zoom / 100 }, children: [
      /* @__PURE__ */ x.jsx(
        "iframe",
        {
          className: "page-editor__viewport-iframe",
          src: ae,
          srcDoc: X,
          onLoad: async (te) => {
            var se, Ee, ke, Ve, Ht, Wt;
            const ie = te.currentTarget;
            if (!ie.contentDocument || !ie.contentDocument.head) return;
            if (f && f.current != ie && (f.current = ie), !ie.contentDocument.head != Q.current) {
              Q.current = ie.contentDocument.head;
              const Nt = document.createElement("style"), Ye = (await import("./unb-editor-M_dUqbOJ.mjs")).default;
              Nt.textContent = Ye, ie.contentDocument.head.appendChild(Nt), (se = K == null ? void 0 : K.pageOptions) != null && se.css && ((Ee = K.pageOptions.css) == null ? void 0 : Ee.length) > 0 && K.pageOptions.css.forEach((Pt) => {
                const mt = document.createElement("style");
                mt.textContent = Pt, ie.contentDocument.head.appendChild(mt);
              }), (ke = K == null ? void 0 : K.pageOptions) != null && ke.stylesheets && ((Ve = K.pageOptions.stylesheets) == null ? void 0 : Ve.length) > 0 && K.pageOptions.stylesheets.forEach((Pt) => {
                const mt = document.createElement("link");
                mt.rel = "stylesheet", mt.href = Pt, ie.contentDocument.head.appendChild(mt);
              });
            }
            let fe;
            (Ht = K == null ? void 0 : K.pageOptions) != null && Ht.documentRoot ? typeof K.pageOptions.documentRoot == "function" ? fe = K.pageOptions.documentRoot(ie) : typeof K.pageOptions.documentRoot == "string" ? fe = ie.contentDocument.querySelector(K.pageOptions.documentRoot) : K.pageOptions.documentRoot instanceof HTMLElement && (fe = K.pageOptions.documentRoot) : fe = ie.contentDocument.body, J != fe && ((Wt = K == null ? void 0 : K.pageOptions) != null && Wt.clearContainer && (fe.innerHTML = ""), ee(fe), He(!0));
          },
          children: J && Ol(rt, J)
        },
        "iframe"
      ),
      /* @__PURE__ */ x.jsx("div", { ref: ge, className: "page-editor__viewport-handle" })
    ] });
  }
  return rt;
}, Vl = ({ componentData: R, renderFlags: v, editing: k, context: _, moveUp: f, moveDown: F, currentChildren: U, removeComponent: B, getComp: b, buttonRenderState: w, reorderRef: V }) => R.map((D, L) => {
  let Q = null;
  return k && _.componentList[D.comp] && (_.componentList[D.comp].displayName ? _.componentList[D.comp].displayName : D.comp, Q = [], v != null && v.noRearrange || (L > 0 && Q.push(
    /* @__PURE__ */ x.jsx("button", { onClick: f(L), children: "⬆️" }, `${D.comp}-up-button`)
  ), L < U.length - 1 && Q.push(
    /* @__PURE__ */ x.jsx(
      "button",
      {
        onClick: F(L),
        children: "⬇️"
      },
      `${D.comp}-down-button`
    )
  )), v != null && v.noAdd || Q.push(
    /* @__PURE__ */ x.jsx(
      "button",
      {
        className: "content-section-controls__delete-button",
        onClick: B(L),
        children: "X"
      },
      `${D.comp}-delete-button`
    )
  )), b({ data: D, key: L, reorderRef: V, optionButtons: Q, buttonRenderState: w(L) });
}), Yl = (R, v, k = void 0) => ({ data: _, reorderRef: f, key: F, optionButtons: U, buttonRenderState: B }) => {
  const b = R.componentList[_.comp], [w, V] = B;
  if (!b) return null;
  const D = R.componentList[_.comp].comp;
  let L = _.props;
  return k === void 0 && (k = R.editing), /* @__PURE__ */ x.jsxs(Ta.Provider, { value: { ...R[F], ...Zl(R, F), editing: k }, children: [
    /* @__PURE__ */ x.jsx(
      Gl,
      {
        optionButtons: U,
        componentName: b.displayName,
        editing: k,
        previewing: R.previewing,
        buttonRender: w,
        setWrapperDomNode: v(F)
      },
      f.current + "-" + F + "-slot-wrapper"
    ),
    /* @__PURE__ */ x.jsx(
      D,
      {
        ...L,
        editing: k,
        componentName: b.displayName,
        previewing: R.previewing,
        setButtonRender: V
      },
      f.current + "-" + F + "-comp"
    )
  ] }, f.current + "-" + F + "-slot-provider");
}, Gl = ({ componentName: R, optionButtons: v, ...k }) => {
  const { editing: _, previewing: f, buttonRender: F, setWrapperDomNode: U } = k;
  if (!_)
    return U(null), k.children;
  let B = null;
  F && typeof F == "function" && (B = F(), B && (B = /* @__PURE__ */ x.jsx("div", { className: "content-section-controls__extra-buttons-wrapper", children: /* @__PURE__ */ x.jsx("div", { className: "content-section-controls__extra-buttons", children: B }) })));
  const b = /* @__PURE__ */ x.jsxs("div", { className: "content-section-controls__inner", children: [
    /* @__PURE__ */ x.jsx("strong", { className: "content-section-controls__component-type", children: R }),
    v,
    B
  ] });
  return /* @__PURE__ */ x.jsxs("div", { className: "content-section-controls__wrapper", ref: U, children: [
    b,
    k.children
  ] });
}, Xl = (R) => {
  const { editing: v, children: k, setWrapperDomNode: _, key: f } = R;
  return v ? /* @__PURE__ */ x.jsx("div", { className: "content-section-controls__wrapper --unb-content-section", ref: _, children: k }) : /* @__PURE__ */ x.jsx(x.Fragment, { children: k });
}, Zl = (R, v, k) => {
  const _ = To(R);
  let f;
  return f = (F) => {
    const U = To(R.editorState);
    U[v].props = {
      ...U[v].props,
      ...F
    }, R.setState(U);
  }, _.editorState = R.editorState[v].props, _.setState = f, _;
}, Jl = ({ color: R = "white" }) => /* @__PURE__ */ x.jsxs("svg", { width: "24px", height: "24px", strokeWidth: "1.5", viewBox: "0 0 24 24", fill: "none", stroke: R, xmlns: "http://www.w3.org/2000/svg", color: "#000000", children: [
  /* @__PURE__ */ x.jsx("path", { d: "M9 9L4 4M4 4V8M4 4H8", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M15 9L20 4M20 4V8M20 4H16", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M9 15L4 20M4 20V16M4 20H8", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M15 15L20 20M20 20V16M20 20H16", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
] }), Ql = ({ color: R = "#ffffff" }) => /* @__PURE__ */ x.jsxs("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", strokeWidth: "1.5", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: R, stroke: R, children: [
  /* @__PURE__ */ x.jsx("path", { d: "M11 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V12", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M2 7L22 7", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M5 5.01L5.01 4.99889", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M8 5.01L8.01 4.99889", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M11 5.01L11.01 4.99889", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M21.6665 16.6667C21.0477 15.097 19.6346 14 17.9903 14C16.2319 14 14.7378 15.2545 14.1969 17", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M19.9952 16.7723H21.4002C21.7316 16.7723 22.0002 16.5036 22.0002 16.1723V14.55", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M14.3337 19.3333C14.9525 20.903 16.3657 22 18.01 22C19.7684 22 21.2624 20.7455 21.8033 19", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M16.005 19.2277H14.6001C14.2687 19.2277 14.0001 19.4964 14.0001 19.8277V21.45", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
] }), Kl = (R) => {
  const [v, k] = dr({
    editorState: R.pageData ? R.pageData : { children: [] },
    pageMetaState: R.pageMeta ? R.pageMeta : { name: "", slug: "", status: "draft" },
    preview: !1,
    changes: !1,
    advancedOpen: !1,
    pageEditorDrawerOpen: !1
  }), [_, f] = dr({ width: 1200, height: 800, zoom: 100 }), F = er.useRef(null), U = er.useRef({ width: 0, height: 0, viewport: { width: _.width, height: _.height } }), B = () => {
    var Z;
    (Z = F.current) != null && Z.requestFullscreen && (document.fullscreenElement ? document.exitFullscreen() : F.current.requestFullscreen());
  }, b = (Z, he, Qe = !1) => {
    U.current.viewport[Z] = parseInt(he), f((ze) => Qe ? { ...ze, [Z]: ze[Z] + parseInt(he) } : { ...ze, [Z]: parseInt(he) });
  }, w = er.useRef(null);
  er.useEffect(() => {
    if (window.addEventListener("beforeunload", (Z) => {
      if (v.changes) {
        var he = "It looks like you have been editing something. If you leave before saving, your changes will be lost.";
        return (Z || window.event).returnValue = he, he;
      }
    }), w.current) {
      const he = w.current.getBoundingClientRect();
      U.current.viewport.width = he.width, U.current.viewport.height = he.height;
    }
    window.addEventListener(
      "resize",
      () => {
        F.current;
      }
    );
  }, []);
  const V = v.editorState, { preview: D } = v, {
    streams: L,
    renderFlags: Q = {},
    exportState: J,
    editorOptions: ee,
    editing: N = !D
  } = R;
  let M = fu;
  Q && (M = { ...M, ...Q });
  const ne = (Z) => {
    k({ ...v, ...Z, changes: !0 });
  }, He = () => {
    k({ ...v, pageEditorDrawerOpen: !v.pageEditorDrawerOpen });
  }, we = (Z, he) => {
    k({
      ...v,
      pageMetaState: {
        ...v.pageMetaState,
        [Z]: he
      }
    });
  };
  let De = (Z = {}, he = !0) => {
    var Qe, ze;
    if ((Qe = ee == null ? void 0 : ee.pageOptions) != null && Qe.wrapperComponent) {
      if (he && !((ze = ee == null ? void 0 : ee.pageOptions) != null && ze.includeWrapperInRender)) return /* @__PURE__ */ x.jsx(xi, { isRoot: !0, ...Z });
      const ht = ee.pageOptions.wrapperComponent;
      return /* @__PURE__ */ x.jsx(ht, { children: /* @__PURE__ */ x.jsx(xi, { isRoot: !0, ...Z }) });
    }
    return /* @__PURE__ */ x.jsx(xi, { isRoot: !0, ...Z });
  };
  const Ce = () => V.children.map((Z) => {
    const he = R.componentList[Z.comp];
    if (!he) return "";
    const Qe = R.componentList[Z.comp].comp;
    let ze = Z.props;
    return {
      comp: Z.comp,
      markup: sl.renderToString(
        /* @__PURE__ */ x.jsx(
          Qe,
          {
            ...ze,
            editing: !1,
            componentName: he.displayName,
            previewing: !0,
            setButtonRender: (ht) => {
            },
            children: Z.children
          }
        )
      ).replaceAll(/[class|style]\=\"\""/, "")
    };
  }), ge = (Z = !1) => Z ? Ce() : sl.renderToString(
    /* @__PURE__ */ x.jsx(
      Ta.Provider,
      {
        value: {
          setState: wl("editorState", v, ne),
          editorState: V,
          componentList: R.componentList,
          editorOptions: { ...ee, pageOptions: { ...ee.pageOptions, renderInIframe: !1 } },
          plugins: R.plugins,
          editing: !1,
          previewing: !0,
          renderFlags: M,
          streams: L,
          viewportDimensions: _,
          updateViewportDimension: b
        },
        children: De()
      }
    )
  );
  J && J(() => v, k, ge);
  const je = () => {
    if (!R.onSave) {
      console.log("No onSave function connected to app");
      return;
    }
    let Z = [];
    M.individualComponents && (Z = ge(!0));
    const he = ge(), Qe = v.editorState, ze = v.pageMetaState, ht = { pageState: Qe, pageMarkup: he, metaState: ze, componentsMarkup: Z };
    R.onSave && R.onSave(ht);
  };
  let ce = null;
  R.onSave && (ce = /* @__PURE__ */ x.jsxs(
    "a",
    {
      className: "page-editor__button",
      onClick: je,
      "data-testid": "save-page-button",
      children: [
        "Save ",
        v.changes ? "*" : "",
        " "
      ]
    }
  ));
  let at = null;
  L && (at = L.getComponent());
  let me = "";
  M.inlineOptionBar && (me += "page-editor__menu--inline");
  const Le = (Z) => {
    if (Z && F.current != Z) {
      const he = Z.getBoundingClientRect();
      U.current.width = he.width, U.current.height = he.height;
    }
    F.current = Z;
  };
  return /* @__PURE__ */ x.jsxs("div", { ref: Le, className: "page-editor__inner", children: [
    /* @__PURE__ */ x.jsx(
      ul,
      {
        open: v.pageEditorDrawerOpen,
        onClose: He,
        children: /* @__PURE__ */ x.jsx(
          $l,
          {
            pageMeta: v.pageMetaState,
            updatePageMetaState: we
          }
        )
      }
    ),
    /* @__PURE__ */ x.jsxs("div", { className: "page-editor__menu " + me, children: [
      /* @__PURE__ */ x.jsx(
        "a",
        {
          className: "page-editor__button",
          onClick: (Z) => {
            Z.preventDefault(), Z.stopPropagation(), k({ ...v, preview: !D });
          },
          children: D ? "Edit" : "Preview"
        }
      ),
      ce,
      /* @__PURE__ */ x.jsx("a", { className: "page-editor__button", title: "Refresh Page", onClick: () => {
        var Z, he;
        (he = (Z = w == null ? void 0 : w.current) == null ? void 0 : Z.contentWindow) == null || he.location.reload();
      }, children: /* @__PURE__ */ x.jsx(Ql, {}) }),
      /* @__PURE__ */ x.jsx("a", { className: "page-editor__button", title: "Full Screen", onClick: B, children: /* @__PURE__ */ x.jsx(Jl, {}) }),
      /* @__PURE__ */ x.jsx("a", { className: "page-editor__button", onClick: He, children: "Options" }),
      /* @__PURE__ */ x.jsxs("div", { className: "page-editor__dimensions", children: [
        /* @__PURE__ */ x.jsx("input", { type: "number", step: 100, onChange: (Z) => b("width", parseInt(Z.target.value)), value: _.width }),
        /* @__PURE__ */ x.jsx("strong", { children: "px" }),
        "X",
        /* @__PURE__ */ x.jsx("input", { type: "number", step: 100, onChange: (Z) => b("height", parseInt(Z.target.value)), value: _.height }),
        /* @__PURE__ */ x.jsx("strong", { children: "px" }),
        /* @__PURE__ */ x.jsx("input", { type: "number", step: 20, min: 20, max: 200, onChange: (Z) => b("zoom", parseInt(Z.target.value)), value: _.zoom }),
        /* @__PURE__ */ x.jsx("strong", { children: "%" })
      ] })
    ] }),
    /* @__PURE__ */ x.jsxs(
      Ta.Provider,
      {
        value: {
          setState: wl("editorState", v, ne),
          editorState: V,
          componentList: R.componentList,
          plugins: R.plugins,
          editing: !D,
          previewing: D,
          renderFlags: M,
          streams: L,
          contextualPageData: R.contextualPageData,
          editorOptions: ee,
          viewportDimensions: _,
          updateViewportDimension: b
        },
        children: [
          De({ key: "root-content-section", iframeRef: w }, !1),
          /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsx(at, {}) })
        ]
      },
      "root-provider"
    )
  ] });
}, cl = (R) => {
  const {
    sectionName: v,
    tagName: k = "div",
    label: _ = null,
    min: f,
    max: F,
    step: U = 1,
    hidden: B = !0,
    ...b
  } = R;
  let { current: w = typeof f == "number" ? f : 1 } = R;
  const V = k, { editorState: D, editing: L, setState: Q } = Ut(v);
  D !== void 0 && (w = D);
  const J = (ee) => {
    let N = parseFloat(ee.currentTarget.value);
    N || (N = 0), f !== void 0 && N < f && (N = f), F !== void 0 && N > F && (N = F), Q(N);
  };
  return L ? _ ? /* @__PURE__ */ x.jsx(V, { ...b, children: /* @__PURE__ */ x.jsxs("label", { children: [
    /* @__PURE__ */ x.jsx("span", { children: _ }),
    /* @__PURE__ */ x.jsx(
      "input",
      {
        value: w,
        type: "number",
        onChange: J,
        min: f,
        max: F,
        step: U
      }
    )
  ] }) }, "num-input-wrapper") : /* @__PURE__ */ x.jsx(V, { children: /* @__PURE__ */ x.jsx(
    "input",
    {
      value: w,
      type: "number",
      onChange: J,
      min: typeof f == "number" ? f : void 0,
      max: typeof F == "number" ? F : void 0,
      step: typeof U == "number" ? U : void 0
    },
    "num-input"
  ) }, "num-input-wrapper") : B ? null : /* @__PURE__ */ x.jsx(V, { ...b, children: D });
}, _l = (R) => {
  const { sectionName: v, children: k, editing: _ } = R, f = Ut(v);
  let { previewing: F, editing: U } = f || { previewing: !1, editing: !1 };
  const B = { ...f };
  return B.editorState || (B.editorState = {}), _ !== void 0 && (B.editing = _), /* @__PURE__ */ x.jsx(Ta.Provider, { value: B, children: k });
}, ql = (R) => {
  const {
    sectionName: v,
    current: k,
    label: _,
    hidden: f = !1,
    tagName: F = "div",
    ...U
  } = R, B = F, { editorState: b, editing: w, setState: V } = Ut(), D = (L) => {
    V({ ...b, [v]: L.currentTarget.checked });
  };
  return w ? /* @__PURE__ */ x.jsx(B, { children: /* @__PURE__ */ x.jsxs("label", { children: [
    /* @__PURE__ */ x.jsx("span", { children: _ }),
    /* @__PURE__ */ x.jsx(
      "input",
      {
        type: "checkbox",
        onChange: D,
        checked: k
      }
    )
  ] }) }) : f ? null : /* @__PURE__ */ x.jsx(B, { ...U, children: k ? "true" : "false" });
}, fl = (R) => {
  const { children: v, editing: k } = R, { editorState: _, editing: f } = Ut(), F = k || f;
  return /* @__PURE__ */ x.jsx(Il, { hide: !F, children: v });
}, xu = (R) => {
  const { children: v, editing: k } = R, { editorState: _, editing: f } = Ut(), F = k || f;
  return /* @__PURE__ */ x.jsx(Il, { hide: F, children: v });
}, Il = (R) => {
  const { children: v, hide: k = !1 } = R;
  return k ? null : /* @__PURE__ */ x.jsx(x.Fragment, { children: v });
}, eu = (R) => {
  const { text: v = "", count: k } = R;
  return /* @__PURE__ */ x.jsx("div", { className: "section__column", children: /* @__PURE__ */ x.jsx(xi, {}) });
}, tu = (R) => {
  const { count: v = 3, responsive: k = !1, setButtonRender: _ } = R;
  let f = eu, F = [], U;
  Er.useEffect(() => {
    _ && _(() => /* @__PURE__ */ x.jsxs(Er.Fragment, { children: [
      /* @__PURE__ */ x.jsx(
        cl,
        {
          hidden: !0,
          label: "Number of Columns: ",
          sectionName: "count",
          current: v,
          min: 2,
          max: 6
        }
      ),
      /* @__PURE__ */ x.jsx(
        ql,
        {
          label: "Responsive Columns",
          sectionName: "responsive"
        }
      )
    ] }));
  }, []), v && (U = `section__inner-div column-section ${k ? "--responsive" : "--fixed"} --cols-${v}`);
  for (var B = 0; B < v; B++) {
    let b = "column" + B;
    F.push(
      /* @__PURE__ */ x.jsx(
        _l,
        {
          sectionName: b,
          children: /* @__PURE__ */ x.jsx(f, { ...R })
        },
        B
      )
    );
  }
  return /* @__PURE__ */ x.jsxs(Er.Fragment, { children: [
    /* @__PURE__ */ x.jsx(fl, { children: /* @__PURE__ */ x.jsx("div", { className: "section__columns__heading" }) }),
    /* @__PURE__ */ x.jsx("section", { className: "section", children: /* @__PURE__ */ x.jsx("div", { className: U, children: F }) })
  ] });
}, kl = (R) => {
  const {
    value: v,
    sectionName: k,
    label: _,
    tagName: f = "div",
    hidden: F = !1,
    inputClass: U = {},
    children: B = null,
    ...b
  } = R, w = f, { editorState: V, editing: D, setState: L } = Ut(k);
  let Q = v || V || "";
  const J = (ee) => {
    L(ee.currentTarget.value);
  };
  return D ? _ ? (
    // @ts-ignore
    /* @__PURE__ */ x.jsx(w, { ...U, ...b, children: /* @__PURE__ */ x.jsxs("label", { children: [
      /* @__PURE__ */ x.jsx("span", { children: _ }),
      /* @__PURE__ */ x.jsx("input", { type: "text", onChange: J, value: Q })
    ] }) })
  ) : (
    // @ts-ignore
    /* @__PURE__ */ x.jsx(w, { ...U, ...b, children: /* @__PURE__ */ x.jsx("input", { type: "text", onChange: J, value: Q }) })
  ) : F ? null : (
    // @ts-ignore
    /* @__PURE__ */ x.jsxs(w, { ...U, ...b, children: [
      V[k],
      B
    ] })
  );
}, ru = (R) => {
  const {
    sectionName: v,
    options: k,
    current: _,
    optionLabels: f = null,
    label: F = !1,
    hidden: U = !1,
    tagName: B = "div",
    selectList: b = !1,
    ...w
  } = R, V = B, { editorState: D, editing: L, setState: Q } = Ut(), J = (N) => {
    Q({ ...D, [v]: N.currentTarget.value });
  };
  let ee = "";
  return b ? ee = b : Array.isArray(k) ? (ee = [], k.forEach((N, M) => {
    const ne = f ? f[M] : N;
    ee.push(
      /* @__PURE__ */ x.jsx("option", { value: N, className: "", children: ne }, M)
    );
  })) : k && (ee = [], Object.entries(k).forEach(([N, M], ne) => {
    let He = M, we = N;
    f && (we = f[N]), ee.push(
      /* @__PURE__ */ x.jsx("option", { value: He, className: "", children: we }, ne)
    );
  })), L ? F ? /* @__PURE__ */ x.jsx(V, { children: /* @__PURE__ */ x.jsxs("label", { children: [
    /* @__PURE__ */ x.jsx("span", { children: F }),
    /* @__PURE__ */ x.jsx("select", { onChange: J, value: _, children: ee })
  ] }) }) : /* @__PURE__ */ x.jsx(V, { children: /* @__PURE__ */ x.jsx("select", { onChange: J, value: _, children: ee }) }) : U ? null : /* @__PURE__ */ x.jsx(V, { ...w, children: D[v] });
}, nu = ({ bem: R, bemPrefix: v, classFunction: k }) => new Proxy(
  { __compCache: {}, context: er.createContext({ bem: R, bemPrefix: v }) },
  {
    get: (_, f) => {
      const F = f;
      if (f == "BEM")
        return _.BEM || (_.BEM = _.context.Provider), _.BEM;
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
      if (!_.__compCache[F]) {
        const U = R, B = v;
        _.__compCache[F] = (b) => {
          let { bem: w, bemPrefix: V, bemName: D, editing: L, sectionName: Q, ...J } = b;
          const ee = Rl(_.context);
          let N = U, M = B;
          return typeof (ee == null ? void 0 : ee.bem) == "boolean" && w === void 0 && (N = ee.bem), ee != null && ee.bemPrefix && V == null && (M = ee.bemPrefix), /* @__PURE__ */ x.jsx(
            Dl,
            {
              tagName: F,
              bem: N,
              editing: L,
              bemPrefix: M,
              sectionName: Q,
              bemName: D || Q || void 0,
              classFunction: k,
              ...b
            }
          );
        };
      }
      return _.__compCache[F];
    }
  }
), Pl = nu({ bem: !0 }), Dl = ({
  placeholder: R = "",
  ref: v = null,
  className: k = "",
  sectionName: _ = void 0,
  tagName: f = "div",
  textOnly: F = !1,
  bem: U = !1,
  bemName: B = "",
  editing: b = void 0,
  bemPrefix: w = "",
  classFunction: V = null,
  children: D = void 0,
  ...L
}) => {
  L = { ...L };
  const [Q, J] = dr(!1);
  B || (B = _ || f);
  let ee = R;
  R || (ee = `${f} placeholder`);
  let N = _;
  _ || (N = `${f}`);
  const M = pl(null), ne = Ut(N), He = ne == null ? void 0 : ne.editorState;
  let { editing: we = !1 } = ne;
  b !== void 0 && (we = b);
  const Ce = pl(He || null), ge = (Le) => {
    let Z = M.current.innerHTML;
    F && (Z = M.current.innerText, M.current.innerHTML = Z), Z !== Ce.current && ne.setState(Z);
  };
  bi(() => {
    if (!He && !Ce.current && L.children) {
      const Le = sl.renderToString(L.children);
      Ce.current = Le, ne.setState(Le);
    }
  }, []);
  let je = k;
  U && (w ? je = `${w}__${B} ${je}` : je = `${B} ${je}`), V && typeof V == "function" && (je = V(f, L));
  const ce = {};
  we && (je += " unbContentEditable", ce.onInput = ge, ce["data-ph"] = ee, ce.ref = M, ce.contentEditable = !0, ce.suppressContentEditableWarning = !0, Q && (ce.dangerouslySetInnerHTML = { __html: Ce.current })), (!we || Ce.current) && (ce.dangerouslySetInnerHTML = { __html: Ce.current }, L.children = void 0);
  let at = f, me = L.style ? L.style : {};
  if (f == "rawText")
    if (we)
      at = "div", me = ce.style ? { ...ce.style } : {}, me.display = "inline-block", me.padding = 0, me.margin = 0, me.width = "auto", me.transform = "none", me.border = "none", me.boxShadow = "none", me.outline = "none", me.overflow = "visible", me.lineHeight = "inherit", me.fontFamily = "inherit", me.fontSize = "inherit", me.fontWeight = "inherit", me.fontStyle = "inherit", me.color = "inherit", me.backgroundColor = "inherit", me.textAlign = "inherit", me.textDecoration = "inherit", me.textTransform = "inherit", me.minWidth = "50px", me.minHeight = "100%", ce.style = me;
    else
      return /* @__PURE__ */ x.jsx(x.Fragment, { children: Ce.current });
  return /* @__PURE__ */ x.jsx(x.Fragment, { children: /* @__PURE__ */ x.jsx(
    at,
    {
      className: je,
      suppressContentEditableWarning: !0,
      ...ce,
      ...L
    }
  ) });
}, ou = (R) => {
  const {
    headingType: v = "h1",
    text: k = "",
    customClass: _ = "",
    editing: f = !0,
    setButtonRender: F
  } = R, U = ["h1", "h2", "h3", "h4", "h5", "h6"];
  return bi(() => {
    F(() => /* @__PURE__ */ x.jsxs(ll, { children: [
      /* @__PURE__ */ x.jsx(
        ru,
        {
          sectionName: "headingType",
          options: U,
          label: "Heading Type"
        }
      ),
      /* @__PURE__ */ x.jsx(kl, { sectionName: "text", label: "Heading Text" }),
      /* @__PURE__ */ x.jsx(kl, { sectionName: "customClass", label: "Custom CSS Class" })
    ] }));
  }, []), /* @__PURE__ */ x.jsx("header", { children: /* @__PURE__ */ x.jsx(
    Dl,
    {
      sectionName: "text",
      tagName: v,
      placeholder: "Heading",
      className: _
    }
  ) });
}, au = (R) => {
  const { text: v = "", customClass: k = "", sectionName: _ } = R;
  return /* @__PURE__ */ x.jsx(Pl.p, { ...R });
}, iu = (R) => {
  const { sectionName: v = "space" } = R, { editorState: k, editing: _, setState: f } = Ut(v), { space: F = k || 10 } = R, U = Er.useRef(null), B = Er.useRef({ startY: 0, startHeight: 0, mouseDown: !1 });
  let b = null;
  const w = (Q) => {
    Q.target === U.current && (B.current.startY = Q.clientY || Q.touches[0].clientY, B.current.startHeight = F || 0, (!B.current.startHeight || B.current.startHeight < 0) && (B.current.startHeight = 0), B.current.mouseDown = !0);
  }, V = (Q) => {
    if (!B.current.mouseDown) return;
    let ee = (Q.clientY || Q.touches[0].clientY) - B.current.startY;
    const N = Math.max(0, B.current.startHeight + ee);
    f(N);
  }, D = (Q) => {
    if (!B.current.mouseDown) return;
    let ee = (Q.clientY || Q.touches[0].clientY) - B.current.startY;
    const N = Math.max(0, B.current.startHeight + ee);
    f(N), B.current.mouseDown = !1;
  }, L = () => {
    U.current && (U.current.removeEventListener("mousedown", w), U.current.removeEventListener("touchstart", w), U.current.removeEventListener("mousemove", V), U.current.removeEventListener("touchmove", V), U.current.removeEventListener("mouseup", D), U.current.removeEventListener("touchend", D), U.current.removeEventListener("mouseleave", D), U.current.removeEventListener("touchcancel", D), U.current.removeEventListener("touchleave", D));
  };
  if (Er.useEffect(() => L, []), _) {
    const Q = (J) => {
      J != U.current && (L(), J && (J.addEventListener("mousedown", w), J.addEventListener("touchstart", w), J.addEventListener("mousemove", V), J.addEventListener("touchmove", V), J.addEventListener("mouseup", D), J.addEventListener("touchend", D), J.addEventListener("mouseleave", D), J.addEventListener("touchcancel", D), J.addEventListener("touchleave", D)), U.current = J);
    };
    b = /* @__PURE__ */ x.jsx("div", { ref: Q, style: { height: F }, className: "spacer-handle", children: /* @__PURE__ */ x.jsx(
      cl,
      {
        sectionName: v,
        className: "spacer-input",
        current: F,
        max: 1e3,
        min: 0
      },
      "num-select"
    ) });
  } else
    return /* @__PURE__ */ x.jsx("div", { style: { height: `${F}px` } });
  return /* @__PURE__ */ x.jsx(Er.Fragment, { children: /* @__PURE__ */ x.jsx("div", { className: "unbeditor-spacer", style: { height: `${F}px` }, children: b }) });
}, Cl = {
  "column-with-text": { displayName: "Columns With Text", comp: tu },
  heading: { displayName: "Heading", comp: ou },
  paragraph: { displayName: "Paragraph", comp: au },
  spacer: { displayName: "Spacer", comp: iu }
};
var Ea = {}, El;
function su() {
  if (El) return Ea;
  El = 1;
  var R = Al;
  if (process.env.NODE_ENV === "production")
    Ea.createRoot = R.createRoot, Ea.hydrateRoot = R.hydrateRoot;
  else {
    var v = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Ea.createRoot = function(k, _) {
      v.usingClientEntryPoint = !0;
      try {
        return R.createRoot(k, _);
      } finally {
        v.usingClientEntryPoint = !1;
      }
    }, Ea.hydrateRoot = function(k, _, f) {
      v.usingClientEntryPoint = !0;
      try {
        return R.hydrateRoot(k, _, f);
      } finally {
        v.usingClientEntryPoint = !1;
      }
    };
  }
  return Ea;
}
var lu = su();
class uu {
  constructor() {
    this.streams = {}, this.createStreamComponent();
  }
  addStream(v, k) {
    this.streams[v] = { name: v, stream: k };
  }
  addStreams(v) {
    this.streams = { ...this.streams, ...v };
  }
  setStreams(v) {
    this.streams = v;
  }
  /**
   * gets a list of all the stream names
   */
  get streamList() {
    return Object.keys(this.streams);
  }
  createStreamComponent() {
    this.component = (v) => /* @__PURE__ */ x.jsx("div", { children: "hello" });
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
  getStream(v, k, _) {
    return this.streams[v] && this.streams[v].stream.get(k, _), !1;
  }
}
class cu extends uu {
  constructor() {
    super(...arguments), this.setCurrentStream = null, this.currentCallback = null, this._setCurrentStreamName = null;
  }
  getStream(v, k, _, f) {
    if (this.streams[v]) {
      const { selectMax: F = 1, ...U } = _ || {};
      this._setCurrentStreamName(v), this.streams[v].stream.get((B) => {
        this.currentCallback = k, this.setCurrentStream(B);
      }, U, f);
    }
    return !1;
  }
  addStream(v, k, _ = void 0) {
    this.streams[v] = { name: v, stream: k, streamOptions: _ };
  }
  addStreams(v) {
    this.streams = { ...this.streams, ...v };
  }
  setStreams(v) {
    this.streams = v;
  }
  // it is important that this only be rendered once per component
  createStreamComponent() {
    this.component = () => {
      var U, B, b, w, V, D;
      const [v, k] = dr([]), [_, f] = dr(null);
      this.setCurrentStream = k, this._setCurrentStreamName = f;
      let F = null;
      if ((B = (U = this.streams[_]) == null ? void 0 : U.streamOptions) != null && B.streamAdapter) {
        const L = this.streams[_].streamOptions.streamAdapter;
        F = /* @__PURE__ */ x.jsx(
          L,
          {
            entries: v,
            select: (Q) => {
              this._setCurrentStreamName(null), this.currentCallback(Q);
            }
          }
        );
      } else if ((w = (b = this.streams[_]) == null ? void 0 : b.streamOptions) != null && w.individualPreviewComponent) {
        const L = (D = (V = this.streams[_]) == null ? void 0 : V.streamOptions) == null ? void 0 : D.individualPreviewComponent;
        F = v.map((Q) => /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsx(
          L,
          {
            model: Q,
            select: (J) => {
              this._setCurrentStreamName(null), this.currentCallback(J);
            }
          }
        ) }));
      } else this.streams[_] && (F = v.map((L) => /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsx(
        "img",
        {
          style: { width: 50 },
          src: L.src,
          onClick: () => {
            this._setCurrentStreamName(null), this.currentCallback([L]);
          }
        }
      ) })));
      return /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsx(
        ul,
        {
          open: !!_,
          onClose: () => this._setCurrentStreamName(!1),
          children: F
        }
      ) });
    };
  }
}
const fu = {
  individualComponents: !1,
  noRearrange: !1,
  noAdd: !1,
  inlineOptionBar: !0,
  disableFullscreen: !1,
  disableRefresh: !1
};
class wu {
  constructor(v = {}) {
    this._renderFunction = null, this.currentRoot = null, this._editorOptions = null, this._editorOptions = v;
    const {
      components: k = Cl,
      plugins: _ = null
    } = v;
    this.components = k, this.plugins = _ ? [..._] : [];
  }
  get streamDriver() {
    return this._streamDriver;
  }
  processOptions(v) {
    if (v.components && (this.components = v.components), v.plugins && (this.plugins = v.plugins), this._editorOptions) {
      const k = { ...this._editorOptions, ...v };
      v.pageOptions && (k.pageOptions = { ...this._editorOptions.pageOptions, ...v.pageOptions }), v.renderFlags && (k.renderFlags = { ...this._editorOptions.renderFlags, ...v.renderFlags }), this._editorOptions = k;
    } else
      this._editorOptions = v;
  }
  start(v, k) {
    k && this.processOptions(k);
    const { pageData: _ = { children: [] }, pageMeta: f, onSave: F, renderFlags: U, contextualPageData: B } = this._editorOptions;
    this._streamDriver = this.createStreamDriver();
    const b = (V) => {
      const [D, L] = dr(1);
      return this._setForceRefreshVal = L, /* @__PURE__ */ x.jsx("div", { className: "page-editor", "data-testid": "page-editor", children: /* @__PURE__ */ x.jsx(
        Kl,
        {
          componentList: this.components,
          plugins: this.plugins,
          editorOptions: this._editorOptions,
          pageData: _,
          pageMeta: f,
          onSave: F,
          renderFlags: U,
          streams: this._streamDriver,
          exportState: (Q, J, ee) => {
            this._externalSetState = J, this._externalGetState = Q, this._externalGetMarkup = ee;
          },
          contextualPageData: B
        },
        "page-editor"
      ) });
    }, w = /* @__PURE__ */ x.jsx(b, {});
    this.currentRoot || (this.currentRoot = lu.createRoot(v), this._renderFunction = (V) => {
      this.currentRoot.render(V);
    }), this._renderFunction(w);
  }
  createStreamDriver() {
    return new cu();
  }
  addComponents(v, k = null, _ = null) {
    if (Array.isArray(v) && "comp" in v) {
      this.components = v;
      return;
    }
    if (!v) {
      console.error(
        "trying to call the add components function without a properly formatted components list or component"
      );
      return;
    }
    k && (this.components[k] = {
      displayName: _,
      comp: v
    }, this.refreshComponentListInEditor());
  }
  insertComponent(v, k = {}) {
    if (!this._externalSetState) return null;
    this._externalSetState((_, f) => {
      let F = {
        ..._,
        editorState: {
          ..._.editorState,
          children: [..._.editorState.children]
        }
      };
      return F.editorState.children.push({
        comp: v,
        props: { ...k }
      }), F;
    });
  }
  getDefaultComponents() {
    return Cl;
  }
  refreshComponentListInEditor() {
    this._setForceRefreshVal && this._setForceRefreshVal((v) => v + 1);
  }
  //saving and loading
  getEditorState() {
    var v;
    return this._externalGetState ? (v = this._externalGetState()) == null ? void 0 : v.editorState : null;
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
const ku = (R) => {
  const { sectionName: v, defaultValue: k, ..._ } = R, { editorState: f } = Ut(v);
  let F = f || k || "";
  return R.transform && (F = R.transform(F)), /* @__PURE__ */ x.jsx(ll, { children: F });
};
class dl {
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
  get(v, k, _) {
  }
}
class Cu extends dl {
  constructor(v, k = null) {
    super(), this.url = v, this._callback = k;
  }
  get(v, k, _) {
    switch ((_ || "GET").toUpperCase()) {
      case "GET": {
        fetch(this.getAPIUrl(k), { method: "get" }).then((F) => F.json()).then((F) => {
          let U = F;
          this._callback && (U = this._callback(F)), v(U);
        });
        break;
      }
      case "POST": {
        fetch(this.url, {
          headers: {
            "Content-Type": "application/json"
          },
          method: "post",
          body: JSON.stringify(k)
        }).then((F) => F.json()).then((F) => {
          let U = F;
          this._callback && (U = this._callback(F)), v(U);
        });
        break;
      }
    }
  }
  getAPIUrl(v) {
    return this.url + "?" + new URLSearchParams(v).toString();
  }
}
class Eu extends dl {
  constructor(v = null) {
    super(), this._streamSelect = null, this._streams = {}, this._streamSelect = v;
  }
  addStream(v, k) {
    this._streams[v] = { stream: k, name: v };
  }
  adaptStream(v, k, _) {
    this._streams[v] = { stream: k, name: v, callback: _ };
  }
  get(v, k) {
    let _ = null;
    if (this._streamSelect ? _ = this._streamSelect(
      k,
      Object.values(this._streams).map((F) => ({
        name: F.name,
        stream: F.stream
      }))
    ) : _ = Object.values(this._streams)[0].name, !_ || !this._streams[_])
      throw new du();
    const f = this._streams[_];
    if (f.callback) {
      f.stream.get((F) => {
        v(f.callback(F));
      });
      return;
    }
    f.stream.get(v);
  }
}
class du extends Error {
  constructor(v = "") {
    super(
      `No sub-streams have been added to this group stream. Use addStream() before the editor starts ${v}`
    );
  }
}
class Tu extends dl {
  constructor(v) {
    super(), this.getValues = v;
  }
  get(v, k) {
    v(this.getValues(k));
  }
}
const Ru = ({
  streamName: R,
  sectionName: v,
  selectMax: k = 1,
  label: _ = "Select From Stream"
}) => {
  const f = Ut(v), F = f.streams;
  if (!f.editing) return null;
  const U = () => {
    F.getStream(R, (B) => {
      f.setState(B[0]);
    }, { selectMax: k });
  };
  return /* @__PURE__ */ x.jsx("button", { onClick: U, children: _ });
}, Tl = (R) => {
  const { sectionName: v = "repeater", rowSectionName: k = "row", addLabel: _ = "Row", hideAddButton: f = !1, editing: F, hideCounter: U = !1, ...B } = R, b = "count", w = Ut(v), { editorState: V } = w || { editorState: null }, D = F !== void 0 ? F : w == null ? void 0 : w.editing, { count: L = V && V[b] ? V[b] : 1 } = B, Q = (M, ne) => er.Children.map(ne, (He) => {
    if (er.isValidElement(He)) {
      let we = V && V[k] && V[k][M] ? V[k][M] : {};
      return er.cloneElement(He, { repeaterIndex: M, ...we });
    }
    return He;
  });
  let J = [];
  for (let M = 0; M < L; M++) {
    let ne = Q(M, R.children);
    J.push(/* @__PURE__ */ x.jsx(_l, { sectionName: `${v}.${k}[${M}]`, children: ne }, M));
  }
  let ee = null;
  D && !f && (ee = /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsxs("button", { onClick: () => {
      const M = L + 1;
      w.setState({ ...V, [b]: M });
    }, children: [
      "+ ",
      _
    ] }),
    /* @__PURE__ */ x.jsxs("button", { onClick: () => {
      const M = Math.max(L - 1, 1);
      w.setState({ ...V, [b]: M });
    }, children: [
      "- ",
      _
    ] })
  ] }));
  let N = null;
  return D && !U && (N = /* @__PURE__ */ x.jsx(cl, { label: "Count:", min: 1, sectionName: `${v}.${b}` })), R.TagName ? /* @__PURE__ */ x.jsxs(R.TagName, { ...B, children: [
    N,
    J
  ] }) : /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    N,
    J,
    ee
  ] });
}, _u = (R) => {
  const { children: v, tabNames: k } = R, [_, f] = er.useState(0);
  return /* @__PURE__ */ x.jsxs("div", { className: "tabs", children: [
    /* @__PURE__ */ x.jsx("ul", { children: /* @__PURE__ */ x.jsx(Tl, { hideCounter: !0, addLabel: "Tab", sectionName: "tabs", children: /* @__PURE__ */ x.jsx(pu, { setTab: f, currentTab: _ }) }) }),
    /* @__PURE__ */ x.jsx(Tl, { hideCounter: !0, hideAddButton: !0, sectionName: "tabs", children: /* @__PURE__ */ x.jsx(hu, { currentTab: _ }) })
  ] });
}, pu = ({ repeaterIndex: R = 0, currentTab: v, setTab: k }) => {
  const _ = R === v, f = {
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
  return _ && (f.fontWeight = "bold", f.color = "black", f.top = 0, f.paddingBottom = 4, f.marginTop = 0, f.background = "white"), /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx(fl, { children: /* @__PURE__ */ x.jsx("input", { type: "radio", checked: _, onClick: (F) => k(R) }) }),
    /* @__PURE__ */ x.jsx(Pl.li, { style: f, onClick: (F) => k(R), sectionName: "tabName", placeholder: "Tab Name" })
  ] });
}, hu = ({ repeaterIndex: R = 0, currentTab: v }) => {
  const k = { display: "block", zIndex: 2, position: "relative", background: "white", padding: 16 };
  return R !== v && (k.display = "none"), /* @__PURE__ */ x.jsxs("div", { style: k, children: [
    /* @__PURE__ */ x.jsx(fl, { children: /* @__PURE__ */ x.jsxs("strong", { children: [
      "Tab ",
      R + 1
    ] }) }),
    /* @__PURE__ */ x.jsx(xi, {})
  ] });
};
export {
  Pl as CE,
  ql as CheckboxInput,
  tu as ColumnSection,
  Dl as ContentEditableInputSlot,
  xi as ContentSection,
  Ta as EditorContext,
  ku as EditorValue,
  Tu as FakeStream,
  Cu as HTTPStream,
  Il as HideIf,
  xu as HideIfEditing,
  fl as HideIfRendering,
  cl as NumberSelect,
  Kl as PageEditor,
  Tl as Repeater,
  ru as SelectInput,
  _l as SlotSection,
  iu as Spacer,
  dl as StreamBase,
  cu as StreamDrawerDriver,
  uu as StreamDriver,
  Eu as StreamGroup,
  Ru as StreamSelectButton,
  kl as StringInput,
  _u as Tabs,
  wu as UNBEditor,
  Cl as componentList,
  nu as createContentEditable,
  wu as default,
  bu as injectEditorContext,
  gu as injectEditorState,
  Ut as useEditorContext,
  yu as useEditorState,
  Su as useEditorStateWithProps
};
//# sourceMappingURL=index.es.js.map
