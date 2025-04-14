import * as zn from "react";
import Bt, { Fragment as cl, useContext as Pl, createContext as jl, useState as pn, useEffect as _o, useRef as vl } from "react";
import Ll, { createPortal as Bl } from "react-dom";
var us = { exports: {} }, bi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ml;
function Ul() {
  if (ml) return bi;
  ml = 1;
  var w = Bt, v = Symbol.for("react.element"), k = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, f = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(L, b, C) {
    var N, D = {}, B = null, ie = null;
    C !== void 0 && (B = "" + C), b.key !== void 0 && (B = "" + b.key), b.ref !== void 0 && (ie = b.ref);
    for (N in b) E.call(b, N) && !M.hasOwnProperty(N) && (D[N] = b[N]);
    if (L && L.defaultProps) for (N in b = L.defaultProps, b) D[N] === void 0 && (D[N] = b[N]);
    return { $$typeof: v, type: L, key: B, ref: ie, props: D, _owner: f.current };
  }
  return bi.Fragment = k, bi.jsx = U, bi.jsxs = U, bi;
}
var xi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gl;
function Hl() {
  return gl || (gl = 1, process.env.NODE_ENV !== "production" && function() {
    var w = Bt, v = Symbol.for("react.element"), k = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), L = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), Q = Symbol.iterator, re = "@@iterator";
    function z(S) {
      if (S === null || typeof S != "object")
        return null;
      var H = Q && S[Q] || S[re];
      return typeof H == "function" ? H : null;
    }
    var F = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function se(S) {
      {
        for (var H = arguments.length, G = new Array(H > 1 ? H - 1 : 0), ae = 1; ae < H; ae++)
          G[ae - 1] = arguments[ae];
        Le("error", S, G);
      }
    }
    function Le(S, H, G) {
      {
        var ae = F.ReactDebugCurrentFrame, ve = ae.getStackAddendum();
        ve !== "" && (H += "%s", G = G.concat([ve]));
        var xe = G.map(function(ye) {
          return String(ye);
        });
        xe.unshift("Warning: " + H), Function.prototype.apply.call(console[S], console, xe);
      }
    }
    var we = !1, Re = !1, Pe = !1, ge = !1, ot = !1, me;
    me = Symbol.for("react.module.reference");
    function ft(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === E || S === M || ot || S === f || S === C || S === N || ge || S === ie || we || Re || Pe || typeof S == "object" && S !== null && (S.$$typeof === B || S.$$typeof === D || S.$$typeof === U || S.$$typeof === L || S.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === me || S.getModuleId !== void 0));
    }
    function Be(S, H, G) {
      var ae = S.displayName;
      if (ae)
        return ae;
      var ve = H.displayName || H.name || "";
      return ve !== "" ? G + "(" + ve + ")" : G;
    }
    function ze(S) {
      return S.displayName || "Context";
    }
    function Z(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && se("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
        return S.displayName || S.name || null;
      if (typeof S == "string")
        return S;
      switch (S) {
        case E:
          return "Fragment";
        case k:
          return "Portal";
        case M:
          return "Profiler";
        case f:
          return "StrictMode";
        case C:
          return "Suspense";
        case N:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case L:
            var H = S;
            return ze(H) + ".Consumer";
          case U:
            var G = S;
            return ze(G._context) + ".Provider";
          case b:
            return Be(S, S.render, "ForwardRef");
          case D:
            var ae = S.displayName || null;
            return ae !== null ? ae : Z(S.type) || "Memo";
          case B: {
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
    var q = Object.assign, Me = 0, he, Oe, J, Ee, ut, ke, Ae;
    function Ht() {
    }
    Ht.__reactDisabledLog = !0;
    function _t() {
      {
        if (Me === 0) {
          he = console.log, Oe = console.info, J = console.warn, Ee = console.error, ut = console.group, ke = console.groupCollapsed, Ae = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: Ht,
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
        Me++;
      }
    }
    function Ve() {
      {
        if (Me--, Me === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, S, {
              value: he
            }),
            info: q({}, S, {
              value: Oe
            }),
            warn: q({}, S, {
              value: J
            }),
            error: q({}, S, {
              value: Ee
            }),
            group: q({}, S, {
              value: ut
            }),
            groupCollapsed: q({}, S, {
              value: ke
            }),
            groupEnd: q({}, S, {
              value: Ae
            })
          });
        }
        Me < 0 && se("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var je = F.ReactCurrentDispatcher, Ye;
    function gt(S, H, G) {
      {
        if (Ye === void 0)
          try {
            throw Error();
          } catch (ve) {
            var ae = ve.stack.trim().match(/\n( *(at )?)/);
            Ye = ae && ae[1] || "";
          }
        return `
` + Ye + S;
      }
    }
    var at = !1, ct;
    {
      var nt = typeof WeakMap == "function" ? WeakMap : Map;
      ct = new nt();
    }
    function It(S, H) {
      if (!S || at)
        return "";
      {
        var G = ct.get(S);
        if (G !== void 0)
          return G;
      }
      var ae;
      at = !0;
      var ve = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var xe;
      xe = je.current, je.current = null, _t();
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
            } catch (Ze) {
              ae = Ze;
            }
            Reflect.construct(S, [], ye);
          } else {
            try {
              ye.call();
            } catch (Ze) {
              ae = Ze;
            }
            S.call(ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ze) {
            ae = Ze;
          }
          S();
        }
      } catch (Ze) {
        if (Ze && ae && typeof Ze.stack == "string") {
          for (var pe = Ze.stack.split(`
`), Xe = ae.stack.split(`
`), Te = pe.length - 1, Fe = Xe.length - 1; Te >= 1 && Fe >= 0 && pe[Te] !== Xe[Fe]; )
            Fe--;
          for (; Te >= 1 && Fe >= 0; Te--, Fe--)
            if (pe[Te] !== Xe[Fe]) {
              if (Te !== 1 || Fe !== 1)
                do
                  if (Te--, Fe--, Fe < 0 || pe[Te] !== Xe[Fe]) {
                    var We = `
` + pe[Te].replace(" at new ", " at ");
                    return S.displayName && We.includes("<anonymous>") && (We = We.replace("<anonymous>", S.displayName)), typeof S == "function" && ct.set(S, We), We;
                  }
                while (Te >= 1 && Fe >= 0);
              break;
            }
        }
      } finally {
        at = !1, je.current = xe, Ve(), Error.prepareStackTrace = ve;
      }
      var $t = S ? S.displayName || S.name : "", Mt = $t ? gt($t) : "";
      return typeof S == "function" && ct.set(S, Mt), Mt;
    }
    function Ke(S, H, G) {
      return It(S, !1);
    }
    function it(S) {
      var H = S.prototype;
      return !!(H && H.isReactComponent);
    }
    function K(S, H, G) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return It(S, it(S));
      if (typeof S == "string")
        return gt(S);
      switch (S) {
        case C:
          return gt("Suspense");
        case N:
          return gt("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case b:
            return Ke(S.render);
          case D:
            return K(S.type, H, G);
          case B: {
            var ae = S, ve = ae._payload, xe = ae._init;
            try {
              return K(xe(ve), H, G);
            } catch {
            }
          }
        }
      return "";
    }
    var ee = Object.prototype.hasOwnProperty, te = {}, Y = F.ReactDebugCurrentFrame;
    function oe(S) {
      if (S) {
        var H = S._owner, G = K(S.type, S._source, H ? H.type : null);
        Y.setExtraStackFrame(G);
      } else
        Y.setExtraStackFrame(null);
    }
    function fe(S, H, G, ae, ve) {
      {
        var xe = Function.call.bind(ee);
        for (var ye in S)
          if (xe(S, ye)) {
            var pe = void 0;
            try {
              if (typeof S[ye] != "function") {
                var Xe = Error((ae || "React class") + ": " + G + " type `" + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Xe.name = "Invariant Violation", Xe;
              }
              pe = S[ye](H, ye, ae, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Te) {
              pe = Te;
            }
            pe && !(pe instanceof Error) && (oe(ve), se("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ae || "React class", G, ye, typeof pe), oe(null)), pe instanceof Error && !(pe.message in te) && (te[pe.message] = !0, oe(ve), se("Failed %s type: %s", G, pe.message), oe(null));
          }
      }
    }
    var st = Array.isArray;
    function Ue(S) {
      return st(S);
    }
    function rt(S) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, G = H && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return G;
      }
    }
    function Ge(S) {
      try {
        return Wt(S), !1;
      } catch {
        return !0;
      }
    }
    function Wt(S) {
      return "" + S;
    }
    function Nt(S) {
      if (Ge(S))
        return se("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rt(S)), Wt(S);
    }
    var en = F.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, vt, Tn;
    function $n(S) {
      if (ee.call(S, "ref")) {
        var H = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function Rn(S) {
      if (ee.call(S, "key")) {
        var H = Object.getOwnPropertyDescriptor(S, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function hn(S, H) {
      typeof S.ref == "string" && en.current;
    }
    function nr(S, H) {
      {
        var G = function() {
          vt || (vt = !0, se("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        G.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function _n(S, H) {
      {
        var G = function() {
          Tn || (Tn = !0, se("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        G.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var tn = function(S, H, G, ae, ve, xe, ye) {
      var pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: S,
        key: H,
        ref: G,
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
        value: ae
      }), Object.defineProperty(pe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ve
      }), Object.freeze && (Object.freeze(pe.props), Object.freeze(pe)), pe;
    };
    function In(S, H, G, ae, ve) {
      {
        var xe, ye = {}, pe = null, Xe = null;
        G !== void 0 && (Nt(G), pe = "" + G), Rn(H) && (Nt(H.key), pe = "" + H.key), $n(H) && (Xe = H.ref, hn(H, ve));
        for (xe in H)
          ee.call(H, xe) && !He.hasOwnProperty(xe) && (ye[xe] = H[xe]);
        if (S && S.defaultProps) {
          var Te = S.defaultProps;
          for (xe in Te)
            ye[xe] === void 0 && (ye[xe] = Te[xe]);
        }
        if (pe || Xe) {
          var Fe = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          pe && nr(ye, Fe), Xe && _n(ye, Fe);
        }
        return tn(S, pe, Xe, ve, ae, en.current, ye);
      }
    }
    var vn = F.ReactCurrentOwner, dt = F.ReactDebugCurrentFrame;
    function pt(S) {
      if (S) {
        var H = S._owner, G = K(S.type, S._source, H ? H.type : null);
        dt.setExtraStackFrame(G);
      } else
        dt.setExtraStackFrame(null);
    }
    var Pt;
    Pt = !1;
    function Ce(S) {
      return typeof S == "object" && S !== null && S.$$typeof === v;
    }
    function zt() {
      {
        if (vn.current) {
          var S = Z(vn.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function mn(S) {
      return "";
    }
    var nn = {};
    function Dt(S) {
      {
        var H = zt();
        if (!H) {
          var G = typeof S == "string" ? S : S.displayName || S.name;
          G && (H = `

Check the top-level render call using <` + G + ">.");
        }
        return H;
      }
    }
    function ln(S, H) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var G = Dt(H);
        if (nn[G])
          return;
        nn[G] = !0;
        var ae = "";
        S && S._owner && S._owner !== vn.current && (ae = " It was passed a child from " + Z(S._owner.type) + "."), pt(S), se('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, ae), pt(null);
      }
    }
    function Ft(S, H) {
      {
        if (typeof S != "object")
          return;
        if (Ue(S))
          for (var G = 0; G < S.length; G++) {
            var ae = S[G];
            Ce(ae) && ln(ae, H);
          }
        else if (Ce(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var ve = z(S);
          if (typeof ve == "function" && ve !== S.entries)
            for (var xe = ve.call(S), ye; !(ye = xe.next()).done; )
              Ce(ye.value) && ln(ye.value, H);
        }
      }
    }
    function lt(S) {
      {
        var H = S.type;
        if (H == null || typeof H == "string")
          return;
        var G;
        if (typeof H == "function")
          G = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === D))
          G = H.propTypes;
        else
          return;
        if (G) {
          var ae = Z(H);
          fe(G, S.props, "prop", ae, S);
        } else if (H.PropTypes !== void 0 && !Pt) {
          Pt = !0;
          var ve = Z(H);
          se("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ve || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && se("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pn(S) {
      {
        for (var H = Object.keys(S.props), G = 0; G < H.length; G++) {
          var ae = H[G];
          if (ae !== "children" && ae !== "key") {
            pt(S), se("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ae), pt(null);
            break;
          }
        }
        S.ref !== null && (pt(S), se("Invalid attribute `ref` supplied to `React.Fragment`."), pt(null));
      }
    }
    var gn = {};
    function Dn(S, H, G, ae, ve, xe) {
      {
        var ye = ft(S);
        if (!ye) {
          var pe = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Xe = mn();
          Xe ? pe += Xe : pe += zt();
          var Te;
          S === null ? Te = "null" : Ue(S) ? Te = "array" : S !== void 0 && S.$$typeof === v ? (Te = "<" + (Z(S.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof S, se("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, pe);
        }
        var Fe = In(S, H, G, ve, xe);
        if (Fe == null)
          return Fe;
        if (ye) {
          var We = H.children;
          if (We !== void 0)
            if (ae)
              if (Ue(We)) {
                for (var $t = 0; $t < We.length; $t++)
                  Ft(We[$t], S);
                Object.freeze && Object.freeze(We);
              } else
                se("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ft(We, S);
        }
        if (ee.call(H, "key")) {
          var Mt = Z(S), Ze = Object.keys(H).filter(function(At) {
            return At !== "key";
          }), Je = Ze.length > 0 ? "{key: someKey, " + Ze.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!gn[Mt + Je]) {
            var Ot = Ze.length > 0 ? "{" + Ze.join(": ..., ") + ": ...}" : "{}";
            se(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Je, Mt, Ot, Mt), gn[Mt + Je] = !0;
          }
        }
        return S === E ? Pn(Fe) : lt(Fe), Fe;
      }
    }
    function et(S, H, G) {
      return Dn(S, H, G, !0);
    }
    function Fn(S, H, G) {
      return Dn(S, H, G, !1);
    }
    var rr = Fn, or = et;
    xi.Fragment = E, xi.jsx = rr, xi.jsxs = or;
  }()), xi;
}
var yl;
function Wl() {
  return yl || (yl = 1, process.env.NODE_ENV === "production" ? us.exports = Ul() : us.exports = Hl()), us.exports;
}
var x = Wl(), Vr = {}, Eo = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sl;
function Nl() {
  if (Sl) return Eo;
  Sl = 1;
  var w = Bt;
  function v(a) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, h = 1; h < arguments.length; h++) u += "&args[]=" + encodeURIComponent(arguments[h]);
    return "Minified React error #" + a + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var k = Object.prototype.hasOwnProperty, E = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, f = {}, M = {};
  function U(a) {
    return k.call(M, a) ? !0 : k.call(f, a) ? !1 : E.test(a) ? M[a] = !0 : (f[a] = !0, !1);
  }
  function L(a, u, h, g, I, T, O) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = g, this.attributeNamespace = I, this.mustUseProperty = h, this.propertyName = a, this.type = u, this.sanitizeURL = T, this.removeEmptyString = O;
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    b[a] = new L(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var u = a[0];
    b[u] = new L(u, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    b[a] = new L(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    b[a] = new L(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    b[a] = new L(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    b[a] = new L(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    b[a] = new L(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    b[a] = new L(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    b[a] = new L(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var C = /[\-:]([a-z])/g;
  function N(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var u = a.replace(
      C,
      N
    );
    b[u] = new L(u, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var u = a.replace(C, N);
    b[u] = new L(u, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var u = a.replace(C, N);
    b[u] = new L(u, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    b[a] = new L(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), b.xlinkHref = new L("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    b[a] = new L(a, 1, !1, a.toLowerCase(), null, !0, !0);
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
  }, B = ["Webkit", "ms", "Moz", "O"];
  Object.keys(D).forEach(function(a) {
    B.forEach(function(u) {
      u = u + a.charAt(0).toUpperCase() + a.substring(1), D[u] = D[a];
    });
  });
  var ie = /["'&<>]/;
  function Q(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var u = ie.exec(a);
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
  var re = /([A-Z])/g, z = /^ms-/, F = Array.isArray;
  function se(a, u) {
    return { insertionMode: a, selectedValue: u };
  }
  function Le(a, u, h) {
    switch (u) {
      case "select":
        return se(1, h.value != null ? h.value : h.defaultValue);
      case "svg":
        return se(2, null);
      case "math":
        return se(3, null);
      case "foreignObject":
        return se(1, null);
      case "table":
        return se(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return se(5, null);
      case "colgroup":
        return se(7, null);
      case "tr":
        return se(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? se(1, null) : a;
  }
  var we = /* @__PURE__ */ new Map();
  function Re(a, u, h) {
    if (typeof h != "object") throw Error(v(62));
    u = !0;
    for (var g in h) if (k.call(h, g)) {
      var I = h[g];
      if (I != null && typeof I != "boolean" && I !== "") {
        if (g.indexOf("--") === 0) {
          var T = Q(g);
          I = Q(("" + I).trim());
        } else {
          T = g;
          var O = we.get(T);
          O !== void 0 || (O = Q(T.replace(re, "-$1").toLowerCase().replace(z, "-ms-")), we.set(T, O)), T = O, I = typeof I == "number" ? I === 0 || k.call(D, g) ? "" + I : I + "px" : Q(("" + I).trim());
        }
        u ? (u = !1, a.push(' style="', T, ":", I)) : a.push(";", T, ":", I);
      }
    }
    u || a.push('"');
  }
  function Pe(a, u, h, g) {
    switch (h) {
      case "style":
        Re(a, u, g);
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
            g === !0 ? a.push(" ", h, '=""') : g !== !1 && a.push(" ", h, '="', Q(g), '"');
            break;
          case 5:
            isNaN(g) || a.push(" ", h, '="', Q(g), '"');
            break;
          case 6:
            !isNaN(g) && 1 <= g && a.push(" ", h, '="', Q(g), '"');
            break;
          default:
            u.sanitizeURL && (g = "" + g), a.push(" ", h, '="', Q(g), '"');
        }
      } else if (U(h)) {
        switch (typeof g) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = h.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        a.push(" ", h, '="', Q(g), '"');
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
  function ot(a) {
    var u = "";
    return w.Children.forEach(a, function(h) {
      h != null && (u += h);
    }), u;
  }
  function me(a, u, h, g) {
    a.push(ze(h));
    var I = h = null, T;
    for (T in u) if (k.call(u, T)) {
      var O = u[T];
      if (O != null) switch (T) {
        case "children":
          h = O;
          break;
        case "dangerouslySetInnerHTML":
          I = O;
          break;
        default:
          Pe(a, g, T, O);
      }
    }
    return a.push(">"), ge(a, I, h), typeof h == "string" ? (a.push(Q(h)), null) : h;
  }
  var ft = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Be = /* @__PURE__ */ new Map();
  function ze(a) {
    var u = Be.get(a);
    if (u === void 0) {
      if (!ft.test(a)) throw Error(v(65, a));
      u = "<" + a, Be.set(a, u);
    }
    return u;
  }
  function Z(a, u, h, g, I) {
    switch (u) {
      case "select":
        a.push(ze("select"));
        var T = null, O = null;
        for (le in h) if (k.call(h, le)) {
          var $ = h[le];
          if ($ != null) switch (le) {
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
              Pe(a, g, le, $);
          }
        }
        return a.push(">"), ge(a, O, T), T;
      case "option":
        O = I.selectedValue, a.push(ze("option"));
        var ne = $ = null, ue = null, le = null;
        for (T in h) if (k.call(h, T)) {
          var _e = h[T];
          if (_e != null) switch (T) {
            case "children":
              $ = _e;
              break;
            case "selected":
              ue = _e;
              break;
            case "dangerouslySetInnerHTML":
              le = _e;
              break;
            case "value":
              ne = _e;
            default:
              Pe(a, g, T, _e);
          }
        }
        if (O != null) if (h = ne !== null ? "" + ne : ot($), F(O)) {
          for (g = 0; g < O.length; g++)
            if ("" + O[g] === h) {
              a.push(' selected=""');
              break;
            }
        } else "" + O === h && a.push(' selected=""');
        else ue && a.push(' selected=""');
        return a.push(">"), ge(a, le, $), $;
      case "textarea":
        a.push(ze("textarea")), le = O = T = null;
        for ($ in h) if (k.call(h, $) && (ne = h[$], ne != null)) switch ($) {
          case "children":
            le = ne;
            break;
          case "value":
            T = ne;
            break;
          case "defaultValue":
            O = ne;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(v(91));
          default:
            Pe(
              a,
              g,
              $,
              ne
            );
        }
        if (T === null && O !== null && (T = O), a.push(">"), le != null) {
          if (T != null) throw Error(v(92));
          if (F(le) && 1 < le.length) throw Error(v(93));
          T = "" + le;
        }
        return typeof T == "string" && T[0] === `
` && a.push(`
`), T !== null && a.push(Q("" + T)), null;
      case "input":
        a.push(ze("input")), ne = le = $ = T = null;
        for (O in h) if (k.call(h, O) && (ue = h[O], ue != null)) switch (O) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(399, "input"));
          case "defaultChecked":
            ne = ue;
            break;
          case "defaultValue":
            $ = ue;
            break;
          case "checked":
            le = ue;
            break;
          case "value":
            T = ue;
            break;
          default:
            Pe(a, g, O, ue);
        }
        return le !== null ? Pe(a, g, "checked", le) : ne !== null && Pe(a, g, "checked", ne), T !== null ? Pe(a, g, "value", T) : $ !== null && Pe(a, g, "value", $), a.push("/>"), null;
      case "menuitem":
        a.push(ze("menuitem"));
        for (var bt in h) if (k.call(h, bt) && (T = h[bt], T != null)) switch (bt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(400));
          default:
            Pe(a, g, bt, T);
        }
        return a.push(">"), null;
      case "title":
        a.push(ze("title")), T = null;
        for (_e in h) if (k.call(h, _e) && (O = h[_e], O != null)) switch (_e) {
          case "children":
            T = O;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(v(434));
          default:
            Pe(a, g, _e, O);
        }
        return a.push(">"), T;
      case "listing":
      case "pre":
        a.push(ze(u)), O = T = null;
        for (ne in h) if (k.call(h, ne) && ($ = h[ne], $ != null)) switch (ne) {
          case "children":
            T = $;
            break;
          case "dangerouslySetInnerHTML":
            O = $;
            break;
          default:
            Pe(a, g, ne, $);
        }
        if (a.push(">"), O != null) {
          if (T != null) throw Error(v(60));
          if (typeof O != "object" || !("__html" in O)) throw Error(v(61));
          h = O.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? a.push(`
`, h) : a.push("" + h));
        }
        return typeof T == "string" && T[0] === `
` && a.push(`
`), T;
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
        a.push(ze(u));
        for (var xt in h) if (k.call(h, xt) && (T = h[xt], T != null)) switch (xt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(399, u));
          default:
            Pe(a, g, xt, T);
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
        return me(
          a,
          h,
          u,
          g
        );
      case "html":
        return I.insertionMode === 0 && a.push("<!DOCTYPE html>"), me(a, h, u, g);
      default:
        if (u.indexOf("-") === -1 && typeof h.is != "string") return me(a, h, u, g);
        a.push(ze(u)), O = T = null;
        for (ue in h) if (k.call(h, ue) && ($ = h[ue], $ != null)) switch (ue) {
          case "children":
            T = $;
            break;
          case "dangerouslySetInnerHTML":
            O = $;
            break;
          case "style":
            Re(a, g, $);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            U(ue) && typeof $ != "function" && typeof $ != "symbol" && a.push(" ", ue, '="', Q($), '"');
        }
        return a.push(">"), ge(a, O, T), T;
    }
  }
  function q(a, u, h) {
    if (a.push('<!--$?--><template id="'), h === null) throw Error(v(395));
    return a.push(h), a.push('"></template>');
  }
  function Me(a, u, h, g) {
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
  function he(a, u) {
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
  var Oe = /[<\u2028\u2029]/g;
  function J(a) {
    return JSON.stringify(a).replace(Oe, function(u) {
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
  function Ee(a, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: a };
  }
  function ut(a, u, h, g) {
    return h.generateStaticMarkup ? (a.push(Q(u)), !1) : (u === "" ? a = g : (g && a.push("<!-- -->"), a.push(Q(u)), a = !0), a);
  }
  var ke = Object.assign, Ae = Symbol.for("react.element"), Ht = Symbol.for("react.portal"), _t = Symbol.for("react.fragment"), Ve = Symbol.for("react.strict_mode"), je = Symbol.for("react.profiler"), Ye = Symbol.for("react.provider"), gt = Symbol.for("react.context"), at = Symbol.for("react.forward_ref"), ct = Symbol.for("react.suspense"), nt = Symbol.for("react.suspense_list"), It = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), it = Symbol.for("react.scope"), K = Symbol.for("react.debug_trace_mode"), ee = Symbol.for("react.legacy_hidden"), te = Symbol.for("react.default_value"), Y = Symbol.iterator;
  function oe(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case _t:
        return "Fragment";
      case Ht:
        return "Portal";
      case je:
        return "Profiler";
      case Ve:
        return "StrictMode";
      case ct:
        return "Suspense";
      case nt:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case gt:
        return (a.displayName || "Context") + ".Consumer";
      case Ye:
        return (a._context.displayName || "Context") + ".Provider";
      case at:
        var u = a.render;
        return a = a.displayName, a || (a = u.displayName || u.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case It:
        return u = a.displayName || null, u !== null ? u : oe(a.type) || "Memo";
      case Ke:
        u = a._payload, a = a._init;
        try {
          return oe(a(u));
        } catch {
        }
    }
    return null;
  }
  var fe = {};
  function st(a, u) {
    if (a = a.contextTypes, !a) return fe;
    var h = {}, g;
    for (g in a) h[g] = u[g];
    return h;
  }
  var Ue = null;
  function rt(a, u) {
    if (a !== u) {
      a.context._currentValue2 = a.parentValue, a = a.parent;
      var h = u.parent;
      if (a === null) {
        if (h !== null) throw Error(v(401));
      } else {
        if (h === null) throw Error(v(401));
        rt(a, h);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function Ge(a) {
    a.context._currentValue2 = a.parentValue, a = a.parent, a !== null && Ge(a);
  }
  function Wt(a) {
    var u = a.parent;
    u !== null && Wt(u), a.context._currentValue2 = a.value;
  }
  function Nt(a, u) {
    if (a.context._currentValue2 = a.parentValue, a = a.parent, a === null) throw Error(v(402));
    a.depth === u.depth ? rt(a, u) : Nt(a, u);
  }
  function en(a, u) {
    var h = u.parent;
    if (h === null) throw Error(v(402));
    a.depth === h.depth ? rt(a, h) : en(a, h), u.context._currentValue2 = u.value;
  }
  function He(a) {
    var u = Ue;
    u !== a && (u === null ? Wt(a) : a === null ? Ge(u) : u.depth === a.depth ? rt(u, a) : u.depth > a.depth ? Nt(u, a) : en(u, a), Ue = a);
  }
  var vt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, u) {
    a = a._reactInternals, a.queue !== null && a.queue.push(u);
  }, enqueueReplaceState: function(a, u) {
    a = a._reactInternals, a.replace = !0, a.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function Tn(a, u, h, g) {
    var I = a.state !== void 0 ? a.state : null;
    a.updater = vt, a.props = h, a.state = I;
    var T = { queue: [], replace: !1 };
    a._reactInternals = T;
    var O = u.contextType;
    if (a.context = typeof O == "object" && O !== null ? O._currentValue2 : g, O = u.getDerivedStateFromProps, typeof O == "function" && (O = O(h, I), I = O == null ? I : ke({}, I, O), a.state = I), typeof u.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (u = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), u !== a.state && vt.enqueueReplaceState(a, a.state, null), T.queue !== null && 0 < T.queue.length) if (u = T.queue, O = T.replace, T.queue = null, T.replace = !1, O && u.length === 1) a.state = u[0];
    else {
      for (T = O ? u[0] : a.state, I = !0, O = O ? 1 : 0; O < u.length; O++) {
        var $ = u[O];
        $ = typeof $ == "function" ? $.call(a, T, h, g) : $, $ != null && (I ? (I = !1, T = ke({}, T, $)) : ke(T, $));
      }
      a.state = T;
    }
    else T.queue = null;
  }
  var $n = { id: 1, overflow: "" };
  function Rn(a, u, h) {
    var g = a.id;
    a = a.overflow;
    var I = 32 - hn(g) - 1;
    g &= ~(1 << I), h += 1;
    var T = 32 - hn(u) + I;
    if (30 < T) {
      var O = I - I % 5;
      return T = (g & (1 << O) - 1).toString(32), g >>= O, I -= O, { id: 1 << 32 - hn(u) + I | h << I | g, overflow: T + a };
    }
    return { id: 1 << T | h << I | g, overflow: a };
  }
  var hn = Math.clz32 ? Math.clz32 : tn, nr = Math.log, _n = Math.LN2;
  function tn(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (nr(a) / _n | 0) | 0;
  }
  function In(a, u) {
    return a === u && (a !== 0 || 1 / a === 1 / u) || a !== a && u !== u;
  }
  var vn = typeof Object.is == "function" ? Object.is : In, dt = null, pt = null, Pt = null, Ce = null, zt = !1, mn = !1, nn = 0, Dt = null, ln = 0;
  function Ft() {
    if (dt === null) throw Error(v(321));
    return dt;
  }
  function lt() {
    if (0 < ln) throw Error(v(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Pn() {
    return Ce === null ? Pt === null ? (zt = !1, Pt = Ce = lt()) : (zt = !0, Ce = Pt) : Ce.next === null ? (zt = !1, Ce = Ce.next = lt()) : (zt = !0, Ce = Ce.next), Ce;
  }
  function gn() {
    pt = dt = null, mn = !1, Pt = null, ln = 0, Ce = Dt = null;
  }
  function Dn(a, u) {
    return typeof u == "function" ? u(a) : u;
  }
  function et(a, u, h) {
    if (dt = Ft(), Ce = Pn(), zt) {
      var g = Ce.queue;
      if (u = g.dispatch, Dt !== null && (h = Dt.get(g), h !== void 0)) {
        Dt.delete(g), g = Ce.memoizedState;
        do
          g = a(g, h.action), h = h.next;
        while (h !== null);
        return Ce.memoizedState = g, [g, u];
      }
      return [Ce.memoizedState, u];
    }
    return a = a === Dn ? typeof u == "function" ? u() : u : h !== void 0 ? h(u) : u, Ce.memoizedState = a, a = Ce.queue = { last: null, dispatch: null }, a = a.dispatch = rr.bind(null, dt, a), [Ce.memoizedState, a];
  }
  function Fn(a, u) {
    if (dt = Ft(), Ce = Pn(), u = u === void 0 ? null : u, Ce !== null) {
      var h = Ce.memoizedState;
      if (h !== null && u !== null) {
        var g = h[1];
        e: if (g === null) g = !1;
        else {
          for (var I = 0; I < g.length && I < u.length; I++) if (!vn(u[I], g[I])) {
            g = !1;
            break e;
          }
          g = !0;
        }
        if (g) return h[0];
      }
    }
    return a = a(), Ce.memoizedState = [a, u], a;
  }
  function rr(a, u, h) {
    if (25 <= ln) throw Error(v(301));
    if (a === dt) if (mn = !0, a = { action: h, next: null }, Dt === null && (Dt = /* @__PURE__ */ new Map()), h = Dt.get(u), h === void 0) Dt.set(u, a);
    else {
      for (u = h; u.next !== null; ) u = u.next;
      u.next = a;
    }
  }
  function or() {
    throw Error(v(394));
  }
  function S() {
  }
  var H = { readContext: function(a) {
    return a._currentValue2;
  }, useContext: function(a) {
    return Ft(), a._currentValue2;
  }, useMemo: Fn, useReducer: et, useRef: function(a) {
    dt = Ft(), Ce = Pn();
    var u = Ce.memoizedState;
    return u === null ? (a = { current: a }, Ce.memoizedState = a) : u;
  }, useState: function(a) {
    return et(Dn, a);
  }, useInsertionEffect: S, useLayoutEffect: function() {
  }, useCallback: function(a, u) {
    return Fn(function() {
      return a;
    }, u);
  }, useImperativeHandle: S, useEffect: S, useDebugValue: S, useDeferredValue: function(a) {
    return Ft(), a;
  }, useTransition: function() {
    return Ft(), [
      !1,
      or
    ];
  }, useId: function() {
    var a = pt.treeContext, u = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - hn(a) - 1)).toString(32) + u;
    var h = G;
    if (h === null) throw Error(v(404));
    return u = nn++, a = ":" + h.idPrefix + "R" + a, 0 < u && (a += "H" + u.toString(32)), a + ":";
  }, useMutableSource: function(a, u) {
    return Ft(), u(a._source);
  }, useSyncExternalStore: function(a, u, h) {
    if (h === void 0) throw Error(v(407));
    return h();
  } }, G = null, ae = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ve(a) {
    return console.error(a), null;
  }
  function xe() {
  }
  function ye(a, u, h, g, I, T, O, $, ne) {
    var ue = [], le = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: g === void 0 ? 12800 : g, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: le, pingedTasks: ue, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: I === void 0 ? ve : I, onAllReady: xe, onShellReady: O === void 0 ? xe : O, onShellError: xe, onFatalError: xe }, h = Xe(u, 0, null, h, !1, !1), h.parentFlushed = !0, a = pe(u, a, null, h, le, fe, null, $n), ue.push(a), u;
  }
  function pe(a, u, h, g, I, T, O, $) {
    a.allPendingTasks++, h === null ? a.pendingRootTasks++ : h.pendingTasks++;
    var ne = { node: u, ping: function() {
      var ue = a.pingedTasks;
      ue.push(ne), ue.length === 1 && yt(a);
    }, blockedBoundary: h, blockedSegment: g, abortSet: I, legacyContext: T, context: O, treeContext: $ };
    return I.add(ne), ne;
  }
  function Xe(a, u, h, g, I, T) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: g, boundary: h, lastPushedText: I, textEmbedded: T };
  }
  function Te(a, u) {
    if (a = a.onError(u), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function Fe(a, u) {
    var h = a.onShellError;
    h(u), h = a.onFatalError, h(u), a.destination !== null ? (a.status = 2, a.destination.destroy(u)) : (a.status = 1, a.fatalError = u);
  }
  function We(a, u, h, g, I) {
    for (dt = {}, pt = u, nn = 0, a = h(g, I); mn; ) mn = !1, nn = 0, ln += 1, Ce = null, a = h(g, I);
    return gn(), a;
  }
  function $t(a, u, h, g) {
    var I = h.render(), T = g.childContextTypes;
    if (T != null) {
      var O = u.legacyContext;
      if (typeof h.getChildContext != "function") g = O;
      else {
        h = h.getChildContext();
        for (var $ in h) if (!($ in T)) throw Error(v(108, oe(g) || "Unknown", $));
        g = ke({}, O, h);
      }
      u.legacyContext = g, Je(a, u, I), u.legacyContext = O;
    } else Je(a, u, I);
  }
  function Mt(a, u) {
    if (a && a.defaultProps) {
      u = ke({}, u), a = a.defaultProps;
      for (var h in a) u[h] === void 0 && (u[h] = a[h]);
      return u;
    }
    return u;
  }
  function Ze(a, u, h, g, I) {
    if (typeof h == "function") if (h.prototype && h.prototype.isReactComponent) {
      I = st(h, u.legacyContext);
      var T = h.contextType;
      T = new h(g, typeof T == "object" && T !== null ? T._currentValue2 : I), Tn(T, h, g, I), $t(a, u, T, h);
    } else {
      T = st(h, u.legacyContext), I = We(a, u, h, g, T);
      var O = nn !== 0;
      if (typeof I == "object" && I !== null && typeof I.render == "function" && I.$$typeof === void 0) Tn(I, h, g, T), $t(a, u, I, h);
      else if (O) {
        g = u.treeContext, u.treeContext = Rn(g, 1, 0);
        try {
          Je(a, u, I);
        } finally {
          u.treeContext = g;
        }
      } else Je(a, u, I);
    }
    else if (typeof h == "string") {
      switch (I = u.blockedSegment, T = Z(I.chunks, h, g, a.responseState, I.formatContext), I.lastPushedText = !1, O = I.formatContext, I.formatContext = Le(O, h, g), At(a, u, T), I.formatContext = O, h) {
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
        case ee:
        case K:
        case Ve:
        case je:
        case _t:
          Je(a, u, g.children);
          return;
        case nt:
          Je(a, u, g.children);
          return;
        case it:
          throw Error(v(343));
        case ct:
          e: {
            h = u.blockedBoundary, I = u.blockedSegment, T = g.fallback, g = g.children, O = /* @__PURE__ */ new Set();
            var $ = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: O, errorDigest: null }, ne = Xe(a, I.chunks.length, $, I.formatContext, !1, !1);
            I.children.push(ne), I.lastPushedText = !1;
            var ue = Xe(a, 0, null, I.formatContext, !1, !1);
            ue.parentFlushed = !0, u.blockedBoundary = $, u.blockedSegment = ue;
            try {
              if (At(
                a,
                u,
                g
              ), a.responseState.generateStaticMarkup || ue.lastPushedText && ue.textEmbedded && ue.chunks.push("<!-- -->"), ue.status = 1, Vt($, ue), $.pendingTasks === 0) break e;
            } catch (le) {
              ue.status = 4, $.forceClientRender = !0, $.errorDigest = Te(a, le);
            } finally {
              u.blockedBoundary = h, u.blockedSegment = I;
            }
            u = pe(a, T, h, ne, O, u.legacyContext, u.context, u.treeContext), a.pingedTasks.push(u);
          }
          return;
      }
      if (typeof h == "object" && h !== null) switch (h.$$typeof) {
        case at:
          if (g = We(a, u, h.render, g, I), nn !== 0) {
            h = u.treeContext, u.treeContext = Rn(h, 1, 0);
            try {
              Je(a, u, g);
            } finally {
              u.treeContext = h;
            }
          } else Je(a, u, g);
          return;
        case It:
          h = h.type, g = Mt(h, g), Ze(a, u, h, g, I);
          return;
        case Ye:
          if (I = g.children, h = h._context, g = g.value, T = h._currentValue2, h._currentValue2 = g, O = Ue, Ue = g = { parent: O, depth: O === null ? 0 : O.depth + 1, context: h, parentValue: T, value: g }, u.context = g, Je(a, u, I), a = Ue, a === null) throw Error(v(403));
          g = a.parentValue, a.context._currentValue2 = g === te ? a.context._defaultValue : g, a = Ue = a.parent, u.context = a;
          return;
        case gt:
          g = g.children, g = g(h._currentValue2), Je(a, u, g);
          return;
        case Ke:
          I = h._init, h = I(h._payload), g = Mt(h, g), Ze(
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
  function Je(a, u, h) {
    if (u.node = h, typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ae:
          Ze(a, u, h.type, h.props, h.ref);
          return;
        case Ht:
          throw Error(v(257));
        case Ke:
          var g = h._init;
          h = g(h._payload), Je(a, u, h);
          return;
      }
      if (F(h)) {
        Ot(a, u, h);
        return;
      }
      if (h === null || typeof h != "object" ? g = null : (g = Y && h[Y] || h["@@iterator"], g = typeof g == "function" ? g : null), g && (g = g.call(h))) {
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
    typeof h == "string" ? (g = u.blockedSegment, g.lastPushedText = ut(u.blockedSegment.chunks, h, a.responseState, g.lastPushedText)) : typeof h == "number" && (g = u.blockedSegment, g.lastPushedText = ut(u.blockedSegment.chunks, "" + h, a.responseState, g.lastPushedText));
  }
  function Ot(a, u, h) {
    for (var g = h.length, I = 0; I < g; I++) {
      var T = u.treeContext;
      u.treeContext = Rn(T, g, I);
      try {
        At(a, u, h[I]);
      } finally {
        u.treeContext = T;
      }
    }
  }
  function At(a, u, h) {
    var g = u.blockedSegment.formatContext, I = u.legacyContext, T = u.context;
    try {
      return Je(a, u, h);
    } catch (ne) {
      if (gn(), typeof ne == "object" && ne !== null && typeof ne.then == "function") {
        h = ne;
        var O = u.blockedSegment, $ = Xe(a, O.chunks.length, null, O.formatContext, O.lastPushedText, !0);
        O.children.push($), O.lastPushedText = !1, a = pe(a, u.node, u.blockedBoundary, $, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, h.then(a, a), u.blockedSegment.formatContext = g, u.legacyContext = I, u.context = T, He(T);
      } else throw u.blockedSegment.formatContext = g, u.legacyContext = I, u.context = T, He(T), ne;
    }
  }
  function yn(a) {
    var u = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, rn(this, u, a);
  }
  function Vn(a, u, h) {
    var g = a.blockedBoundary;
    a.blockedSegment.status = 3, g === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (g.pendingTasks--, g.forceClientRender || (g.forceClientRender = !0, a = h === void 0 ? Error(v(432)) : h, g.errorDigest = u.onError(a), g.parentFlushed && u.clientRenderedBoundaries.push(g)), g.fallbackAbortableTasks.forEach(function(I) {
      return Vn(I, u, h);
    }), g.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (g = u.onAllReady, g()));
  }
  function Vt(a, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var h = u.children[0];
      h.id = u.id, h.parentFlushed = !0, h.status === 1 && Vt(a, h);
    } else a.completedSegments.push(u);
  }
  function rn(a, u, h) {
    if (u === null) {
      if (h.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(v(389));
        a.completedRootSegment = h;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = xe, u = a.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && Vt(u, h), u.parentFlushed && a.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(yn, a), u.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (Vt(u, h), u.completedSegments.length === 1 && u.parentFlushed && a.partialBoundaries.push(u)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function yt(a) {
    if (a.status !== 2) {
      var u = Ue, h = ae.current;
      ae.current = H;
      var g = G;
      G = a.responseState;
      try {
        var I = a.pingedTasks, T;
        for (T = 0; T < I.length; T++) {
          var O = I[T], $ = a, ne = O.blockedSegment;
          if (ne.status === 0) {
            He(O.context);
            try {
              Je($, O, O.node), $.responseState.generateStaticMarkup || ne.lastPushedText && ne.textEmbedded && ne.chunks.push("<!-- -->"), O.abortSet.delete(O), ne.status = 1, rn($, O.blockedBoundary, ne);
            } catch (wt) {
              if (gn(), typeof wt == "object" && wt !== null && typeof wt.then == "function") {
                var ue = O.ping;
                wt.then(ue, ue);
              } else {
                O.abortSet.delete(O), ne.status = 4;
                var le = O.blockedBoundary, _e = wt, bt = Te($, _e);
                if (le === null ? Fe($, _e) : (le.pendingTasks--, le.forceClientRender || (le.forceClientRender = !0, le.errorDigest = bt, le.parentFlushed && $.clientRenderedBoundaries.push(le))), $.allPendingTasks--, $.allPendingTasks === 0) {
                  var xt = $.onAllReady;
                  xt();
                }
              }
            } finally {
            }
          }
        }
        I.splice(0, T), a.destination !== null && St(a, a.destination);
      } catch (wt) {
        Te(a, wt), Fe(a, wt);
      } finally {
        G = g, ae.current = h, h === H && He(u);
      }
    }
  }
  function Sn(a, u, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var g = h.id = a.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, a = a.responseState, u.push('<template id="'), u.push(a.placeholderPrefix), a = g.toString(16), u.push(a), u.push('"></template>');
      case 1:
        h.status = 2;
        var I = !0;
        g = h.chunks;
        var T = 0;
        h = h.children;
        for (var O = 0; O < h.length; O++) {
          for (I = h[O]; T < I.index; T++) u.push(g[T]);
          I = Mn(a, u, I);
        }
        for (; T < g.length - 1; T++) u.push(g[T]);
        return T < g.length && (I = u.push(g[T])), I;
      default:
        throw Error(v(390));
    }
  }
  function Mn(a, u, h) {
    var g = h.boundary;
    if (g === null) return Sn(a, u, h);
    if (g.parentFlushed = !0, g.forceClientRender) return a.responseState.generateStaticMarkup || (g = g.errorDigest, u.push("<!--$!-->"), u.push("<template"), g && (u.push(' data-dgst="'), g = Q(g), u.push(g), u.push('"')), u.push("></template>")), Sn(a, u, h), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
    if (0 < g.pendingTasks) {
      g.rootSegmentID = a.nextSegmentId++, 0 < g.completedSegments.length && a.partialBoundaries.push(g);
      var I = a.responseState, T = I.nextSuspenseID++;
      return I = I.boundaryPrefix + T.toString(16), g = g.id = I, q(u, a.responseState, g), Sn(a, u, h), u.push("<!--/$-->");
    }
    if (g.byteSize > a.progressiveChunkSize) return g.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(g), q(u, a.responseState, g.id), Sn(a, u, h), u.push("<!--/$-->");
    if (a.responseState.generateStaticMarkup || u.push("<!--$-->"), h = g.completedSegments, h.length !== 1) throw Error(v(391));
    return Mn(a, u, h[0]), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
  }
  function Yn(a, u, h) {
    return Me(u, a.responseState, h.formatContext, h.id), Mn(a, u, h), he(u, h.formatContext);
  }
  function jt(a, u, h) {
    for (var g = h.completedSegments, I = 0; I < g.length; I++) on(a, u, h, g[I]);
    if (g.length = 0, a = a.responseState, g = h.id, h = h.rootSegmentID, u.push(a.startInlineScript), a.sentCompleteBoundaryFunction ? u.push('$RC("') : (a.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), g === null) throw Error(v(395));
    return h = h.toString(16), u.push(g), u.push('","'), u.push(a.segmentPrefix), u.push(h), u.push('")<\/script>');
  }
  function on(a, u, h, g) {
    if (g.status === 2) return !0;
    var I = g.id;
    if (I === -1) {
      if ((g.id = h.rootSegmentID) === -1) throw Error(v(392));
      return Yn(a, u, g);
    }
    return Yn(a, u, g), a = a.responseState, u.push(a.startInlineScript), a.sentCompleteSegmentFunction ? u.push('$RS("') : (a.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(a.segmentPrefix), I = I.toString(16), u.push(I), u.push('","'), u.push(a.placeholderPrefix), u.push(I), u.push('")<\/script>');
  }
  function St(a, u) {
    try {
      var h = a.completedRootSegment;
      if (h !== null && a.pendingRootTasks === 0) {
        Mn(a, u, h), a.completedRootSegment = null;
        var g = a.responseState.bootstrapChunks;
        for (h = 0; h < g.length - 1; h++) u.push(g[h]);
        h < g.length && u.push(g[h]);
      }
      var I = a.clientRenderedBoundaries, T;
      for (T = 0; T < I.length; T++) {
        var O = I[T];
        g = u;
        var $ = a.responseState, ne = O.id, ue = O.errorDigest, le = O.errorMessage, _e = O.errorComponentStack;
        if (g.push($.startInlineScript), $.sentClientRenderFunction ? g.push('$RX("') : ($.sentClientRenderFunction = !0, g.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ne === null) throw Error(v(395));
        if (g.push(ne), g.push('"'), ue || le || _e) {
          g.push(",");
          var bt = J(ue || "");
          g.push(bt);
        }
        if (le || _e) {
          g.push(",");
          var xt = J(le || "");
          g.push(xt);
        }
        if (_e) {
          g.push(",");
          var wt = J(_e);
          g.push(wt);
        }
        if (!g.push(")<\/script>")) {
          a.destination = null, T++, I.splice(0, T);
          return;
        }
      }
      I.splice(0, T);
      var bn = a.completedBoundaries;
      for (T = 0; T < bn.length; T++) if (!jt(a, u, bn[T])) {
        a.destination = null, T++, bn.splice(0, T);
        return;
      }
      bn.splice(0, T);
      var an = a.partialBoundaries;
      for (T = 0; T < an.length; T++) {
        var Xn = an[T];
        e: {
          I = a, O = u;
          var xn = Xn.completedSegments;
          for ($ = 0; $ < xn.length; $++) if (!on(I, O, Xn, xn[$])) {
            $++, xn.splice(0, $);
            var On = !1;
            break e;
          }
          xn.splice(0, $), On = !0;
        }
        if (!On) {
          a.destination = null, T++, an.splice(0, T);
          return;
        }
      }
      an.splice(0, T);
      var un = a.completedBoundaries;
      for (T = 0; T < un.length; T++) if (!jt(a, u, un[T])) {
        a.destination = null, T++, un.splice(0, T);
        return;
      }
      un.splice(0, T);
    } finally {
      a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function Gn(a, u) {
    try {
      var h = a.abortableTasks;
      h.forEach(function(g) {
        return Vn(g, a, u);
      }), h.clear(), a.destination !== null && St(a, a.destination);
    } catch (g) {
      Te(a, g), Fe(a, g);
    }
  }
  function ht() {
  }
  function kt(a, u, h, g) {
    var I = !1, T = null, O = "", $ = { push: function(ue) {
      return ue !== null && (O += ue), !0;
    }, destroy: function(ue) {
      I = !0, T = ue;
    } }, ne = !1;
    if (a = ye(a, Ee(h, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, ht, void 0, function() {
      ne = !0;
    }), yt(a), Gn(a, g), a.status === 1) a.status = 2, $.destroy(a.fatalError);
    else if (a.status !== 2 && a.destination === null) {
      a.destination = $;
      try {
        St(a, $);
      } catch (ue) {
        Te(a, ue), Fe(a, ue);
      }
    }
    if (I) throw T;
    if (!ne) throw Error(v(426));
    return O;
  }
  return Eo.renderToNodeStream = function() {
    throw Error(v(207));
  }, Eo.renderToStaticMarkup = function(a, u) {
    return kt(a, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Eo.renderToStaticNodeStream = function() {
    throw Error(v(208));
  }, Eo.renderToString = function(a, u) {
    return kt(a, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Eo.version = "18.3.1", Eo;
}
var cs = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bl;
function zl() {
  if (bl) return cs;
  bl = 1;
  var w = Bt;
  function v(i) {
    for (var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, d = 1; d < arguments.length; d++) l += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + i + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var k = null, E = 0;
  function f(i, l) {
    if (l.length !== 0) if (512 < l.length) 0 < E && (i.enqueue(new Uint8Array(k.buffer, 0, E)), k = new Uint8Array(512), E = 0), i.enqueue(l);
    else {
      var d = k.length - E;
      d < l.length && (d === 0 ? i.enqueue(k) : (k.set(l.subarray(0, d), E), i.enqueue(k), l = l.subarray(d)), k = new Uint8Array(512), E = 0), k.set(l, E), E += l.length;
    }
  }
  function M(i, l) {
    return f(i, l), !0;
  }
  function U(i) {
    k && 0 < E && (i.enqueue(new Uint8Array(k.buffer, 0, E)), k = null, E = 0);
  }
  var L = new TextEncoder();
  function b(i) {
    return L.encode(i);
  }
  function C(i) {
    return L.encode(i);
  }
  function N(i, l) {
    typeof i.error == "function" ? i.error(l) : i.close();
  }
  var D = Object.prototype.hasOwnProperty, B = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ie = {}, Q = {};
  function re(i) {
    return D.call(Q, i) ? !0 : D.call(ie, i) ? !1 : B.test(i) ? Q[i] = !0 : (ie[i] = !0, !1);
  }
  function z(i, l, d, m, P, _, A) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = m, this.attributeNamespace = P, this.mustUseProperty = d, this.propertyName = i, this.type = l, this.sanitizeURL = _, this.removeEmptyString = A;
  }
  var F = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    F[i] = new z(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var l = i[0];
    F[l] = new z(l, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    F[i] = new z(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    F[i] = new z(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    F[i] = new z(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    F[i] = new z(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    F[i] = new z(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    F[i] = new z(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    F[i] = new z(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var se = /[\-:]([a-z])/g;
  function Le(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var l = i.replace(
      se,
      Le
    );
    F[l] = new z(l, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var l = i.replace(se, Le);
    F[l] = new z(l, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var l = i.replace(se, Le);
    F[l] = new z(l, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    F[i] = new z(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), F.xlinkHref = new z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    F[i] = new z(i, 1, !1, i.toLowerCase(), null, !0, !0);
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
  }, Re = ["Webkit", "ms", "Moz", "O"];
  Object.keys(we).forEach(function(i) {
    Re.forEach(function(l) {
      l = l + i.charAt(0).toUpperCase() + i.substring(1), we[l] = we[i];
    });
  });
  var Pe = /["'&<>]/;
  function ge(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var l = Pe.exec(i);
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
  var ot = /([A-Z])/g, me = /^ms-/, ft = Array.isArray, Be = C("<script>"), ze = C("<\/script>"), Z = C('<script src="'), q = C('<script type="module" src="'), Me = C('" async=""><\/script>'), he = /(<\/|<)(s)(cript)/gi;
  function Oe(i, l, d, m) {
    return "" + l + (d === "s" ? "\\u0073" : "\\u0053") + m;
  }
  function J(i, l, d, m, P) {
    i = i === void 0 ? "" : i, l = l === void 0 ? Be : C('<script nonce="' + ge(l) + '">');
    var _ = [];
    if (d !== void 0 && _.push(l, b(("" + d).replace(he, Oe)), ze), m !== void 0) for (d = 0; d < m.length; d++) _.push(Z, b(ge(m[d])), Me);
    if (P !== void 0) for (m = 0; m < P.length; m++) _.push(q, b(ge(P[m])), Me);
    return { bootstrapChunks: _, startInlineScript: l, placeholderPrefix: C(i + "P:"), segmentPrefix: C(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Ee(i, l) {
    return { insertionMode: i, selectedValue: l };
  }
  function ut(i) {
    return Ee(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function ke(i, l, d) {
    switch (l) {
      case "select":
        return Ee(1, d.value != null ? d.value : d.defaultValue);
      case "svg":
        return Ee(2, null);
      case "math":
        return Ee(3, null);
      case "foreignObject":
        return Ee(1, null);
      case "table":
        return Ee(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Ee(5, null);
      case "colgroup":
        return Ee(7, null);
      case "tr":
        return Ee(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? Ee(1, null) : i;
  }
  var Ae = C("<!-- -->");
  function Ht(i, l, d, m) {
    return l === "" ? m : (m && i.push(Ae), i.push(b(ge(l))), !0);
  }
  var _t = /* @__PURE__ */ new Map(), Ve = C(' style="'), je = C(":"), Ye = C(";");
  function gt(i, l, d) {
    if (typeof d != "object") throw Error(v(62));
    l = !0;
    for (var m in d) if (D.call(d, m)) {
      var P = d[m];
      if (P != null && typeof P != "boolean" && P !== "") {
        if (m.indexOf("--") === 0) {
          var _ = b(ge(m));
          P = b(ge(("" + P).trim()));
        } else {
          _ = m;
          var A = _t.get(_);
          A !== void 0 || (A = C(ge(_.replace(ot, "-$1").toLowerCase().replace(me, "-ms-"))), _t.set(_, A)), _ = A, P = typeof P == "number" ? P === 0 || D.call(we, m) ? b("" + P) : b(P + "px") : b(ge(("" + P).trim()));
        }
        l ? (l = !1, i.push(Ve, _, je, P)) : i.push(Ye, _, je, P);
      }
    }
    l || i.push(nt);
  }
  var at = C(" "), ct = C('="'), nt = C('"'), It = C('=""');
  function Ke(i, l, d, m) {
    switch (d) {
      case "style":
        gt(i, l, m);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < d.length) || d[0] !== "o" && d[0] !== "O" || d[1] !== "n" && d[1] !== "N") {
      if (l = F.hasOwnProperty(d) ? F[d] : null, l !== null) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!l.acceptsBooleans) return;
        }
        switch (d = b(l.attributeName), l.type) {
          case 3:
            m && i.push(at, d, It);
            break;
          case 4:
            m === !0 ? i.push(at, d, It) : m !== !1 && i.push(at, d, ct, b(ge(m)), nt);
            break;
          case 5:
            isNaN(m) || i.push(at, d, ct, b(ge(m)), nt);
            break;
          case 6:
            !isNaN(m) && 1 <= m && i.push(at, d, ct, b(ge(m)), nt);
            break;
          default:
            l.sanitizeURL && (m = "" + m), i.push(at, d, ct, b(ge(m)), nt);
        }
      } else if (re(d)) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (l = d.toLowerCase().slice(0, 5), l !== "data-" && l !== "aria-") return;
        }
        i.push(at, b(d), ct, b(ge(m)), nt);
      }
    }
  }
  var it = C(">"), K = C("/>");
  function ee(i, l, d) {
    if (l != null) {
      if (d != null) throw Error(v(60));
      if (typeof l != "object" || !("__html" in l)) throw Error(v(61));
      l = l.__html, l != null && i.push(b("" + l));
    }
  }
  function te(i) {
    var l = "";
    return w.Children.forEach(i, function(d) {
      d != null && (l += d);
    }), l;
  }
  var Y = C(' selected=""');
  function oe(i, l, d, m) {
    i.push(rt(d));
    var P = d = null, _;
    for (_ in l) if (D.call(l, _)) {
      var A = l[_];
      if (A != null) switch (_) {
        case "children":
          d = A;
          break;
        case "dangerouslySetInnerHTML":
          P = A;
          break;
        default:
          Ke(i, m, _, A);
      }
    }
    return i.push(it), ee(i, P, d), typeof d == "string" ? (i.push(b(ge(d))), null) : d;
  }
  var fe = C(`
`), st = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ue = /* @__PURE__ */ new Map();
  function rt(i) {
    var l = Ue.get(i);
    if (l === void 0) {
      if (!st.test(i)) throw Error(v(65, i));
      l = C("<" + i), Ue.set(i, l);
    }
    return l;
  }
  var Ge = C("<!DOCTYPE html>");
  function Wt(i, l, d, m, P) {
    switch (l) {
      case "select":
        i.push(rt("select"));
        var _ = null, A = null;
        for (Se in d) if (D.call(d, Se)) {
          var V = d[Se];
          if (V != null) switch (Se) {
            case "children":
              _ = V;
              break;
            case "dangerouslySetInnerHTML":
              A = V;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              Ke(i, m, Se, V);
          }
        }
        return i.push(it), ee(i, A, _), _;
      case "option":
        A = P.selectedValue, i.push(rt("option"));
        var ce = V = null, be = null, Se = null;
        for (_ in d) if (D.call(d, _)) {
          var $e = d[_];
          if ($e != null) switch (_) {
            case "children":
              V = $e;
              break;
            case "selected":
              be = $e;
              break;
            case "dangerouslySetInnerHTML":
              Se = $e;
              break;
            case "value":
              ce = $e;
            default:
              Ke(i, m, _, $e);
          }
        }
        if (A != null) if (d = ce !== null ? "" + ce : te(V), ft(A)) {
          for (m = 0; m < A.length; m++)
            if ("" + A[m] === d) {
              i.push(Y);
              break;
            }
        } else "" + A === d && i.push(Y);
        else be && i.push(Y);
        return i.push(it), ee(i, Se, V), V;
      case "textarea":
        i.push(rt("textarea")), Se = A = _ = null;
        for (V in d) if (D.call(d, V) && (ce = d[V], ce != null)) switch (V) {
          case "children":
            Se = ce;
            break;
          case "value":
            _ = ce;
            break;
          case "defaultValue":
            A = ce;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(v(91));
          default:
            Ke(i, m, V, ce);
        }
        if (_ === null && A !== null && (_ = A), i.push(it), Se != null) {
          if (_ != null) throw Error(v(92));
          if (ft(Se) && 1 < Se.length) throw Error(v(93));
          _ = "" + Se;
        }
        return typeof _ == "string" && _[0] === `
` && i.push(fe), _ !== null && i.push(b(ge("" + _))), null;
      case "input":
        i.push(rt("input")), ce = Se = V = _ = null;
        for (A in d) if (D.call(d, A) && (be = d[A], be != null)) switch (A) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(399, "input"));
          case "defaultChecked":
            ce = be;
            break;
          case "defaultValue":
            V = be;
            break;
          case "checked":
            Se = be;
            break;
          case "value":
            _ = be;
            break;
          default:
            Ke(i, m, A, be);
        }
        return Se !== null ? Ke(
          i,
          m,
          "checked",
          Se
        ) : ce !== null && Ke(i, m, "checked", ce), _ !== null ? Ke(i, m, "value", _) : V !== null && Ke(i, m, "value", V), i.push(K), null;
      case "menuitem":
        i.push(rt("menuitem"));
        for (var Et in d) if (D.call(d, Et) && (_ = d[Et], _ != null)) switch (Et) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(400));
          default:
            Ke(i, m, Et, _);
        }
        return i.push(it), null;
      case "title":
        i.push(rt("title")), _ = null;
        for ($e in d) if (D.call(d, $e) && (A = d[$e], A != null)) switch ($e) {
          case "children":
            _ = A;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(v(434));
          default:
            Ke(i, m, $e, A);
        }
        return i.push(it), _;
      case "listing":
      case "pre":
        i.push(rt(l)), A = _ = null;
        for (ce in d) if (D.call(d, ce) && (V = d[ce], V != null)) switch (ce) {
          case "children":
            _ = V;
            break;
          case "dangerouslySetInnerHTML":
            A = V;
            break;
          default:
            Ke(i, m, ce, V);
        }
        if (i.push(it), A != null) {
          if (_ != null) throw Error(v(60));
          if (typeof A != "object" || !("__html" in A)) throw Error(v(61));
          d = A.__html, d != null && (typeof d == "string" && 0 < d.length && d[0] === `
` ? i.push(fe, b(d)) : i.push(b("" + d)));
        }
        return typeof _ == "string" && _[0] === `
` && i.push(fe), _;
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
        i.push(rt(l));
        for (var Gt in d) if (D.call(d, Gt) && (_ = d[Gt], _ != null)) switch (Gt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(399, l));
          default:
            Ke(i, m, Gt, _);
        }
        return i.push(K), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return oe(i, d, l, m);
      case "html":
        return P.insertionMode === 0 && i.push(Ge), oe(i, d, l, m);
      default:
        if (l.indexOf("-") === -1 && typeof d.is != "string") return oe(i, d, l, m);
        i.push(rt(l)), A = _ = null;
        for (be in d) if (D.call(d, be) && (V = d[be], V != null)) switch (be) {
          case "children":
            _ = V;
            break;
          case "dangerouslySetInnerHTML":
            A = V;
            break;
          case "style":
            gt(i, m, V);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            re(be) && typeof V != "function" && typeof V != "symbol" && i.push(at, b(be), ct, b(ge(V)), nt);
        }
        return i.push(it), ee(i, A, _), _;
    }
  }
  var Nt = C("</"), en = C(">"), He = C('<template id="'), vt = C('"></template>'), Tn = C("<!--$-->"), $n = C('<!--$?--><template id="'), Rn = C('"></template>'), hn = C("<!--$!-->"), nr = C("<!--/$-->"), _n = C("<template"), tn = C('"'), In = C(' data-dgst="');
  C(' data-msg="'), C(' data-stck="');
  var vn = C("></template>");
  function dt(i, l, d) {
    if (f(i, $n), d === null) throw Error(v(395));
    return f(i, d), M(i, Rn);
  }
  var pt = C('<div hidden id="'), Pt = C('">'), Ce = C("</div>"), zt = C('<svg aria-hidden="true" style="display:none" id="'), mn = C('">'), nn = C("</svg>"), Dt = C('<math aria-hidden="true" style="display:none" id="'), ln = C('">'), Ft = C("</math>"), lt = C('<table hidden id="'), Pn = C('">'), gn = C("</table>"), Dn = C('<table hidden><tbody id="'), et = C('">'), Fn = C("</tbody></table>"), rr = C('<table hidden><tr id="'), or = C('">'), S = C("</tr></table>"), H = C('<table hidden><colgroup id="'), G = C('">'), ae = C("</colgroup></table>");
  function ve(i, l, d, m) {
    switch (d.insertionMode) {
      case 0:
      case 1:
        return f(i, pt), f(i, l.segmentPrefix), f(i, b(m.toString(16))), M(i, Pt);
      case 2:
        return f(i, zt), f(i, l.segmentPrefix), f(i, b(m.toString(16))), M(i, mn);
      case 3:
        return f(i, Dt), f(i, l.segmentPrefix), f(i, b(m.toString(16))), M(i, ln);
      case 4:
        return f(i, lt), f(i, l.segmentPrefix), f(i, b(m.toString(16))), M(i, Pn);
      case 5:
        return f(i, Dn), f(i, l.segmentPrefix), f(i, b(m.toString(16))), M(i, et);
      case 6:
        return f(i, rr), f(i, l.segmentPrefix), f(i, b(m.toString(16))), M(i, or);
      case 7:
        return f(
          i,
          H
        ), f(i, l.segmentPrefix), f(i, b(m.toString(16))), M(i, G);
      default:
        throw Error(v(397));
    }
  }
  function xe(i, l) {
    switch (l.insertionMode) {
      case 0:
      case 1:
        return M(i, Ce);
      case 2:
        return M(i, nn);
      case 3:
        return M(i, Ft);
      case 4:
        return M(i, gn);
      case 5:
        return M(i, Fn);
      case 6:
        return M(i, S);
      case 7:
        return M(i, ae);
      default:
        throw Error(v(397));
    }
  }
  var ye = C('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), pe = C('$RS("'), Xe = C('","'), Te = C('")<\/script>'), Fe = C('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), We = C('$RC("'), $t = C('","'), Mt = C('")<\/script>'), Ze = C('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Je = C('$RX("'), Ot = C('"'), At = C(")<\/script>"), yn = C(","), Vn = /[<\u2028\u2029]/g;
  function Vt(i) {
    return JSON.stringify(i).replace(Vn, function(l) {
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
  var rn = Object.assign, yt = Symbol.for("react.element"), Sn = Symbol.for("react.portal"), Mn = Symbol.for("react.fragment"), Yn = Symbol.for("react.strict_mode"), jt = Symbol.for("react.profiler"), on = Symbol.for("react.provider"), St = Symbol.for("react.context"), Gn = Symbol.for("react.forward_ref"), ht = Symbol.for("react.suspense"), kt = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), h = Symbol.for("react.scope"), g = Symbol.for("react.debug_trace_mode"), I = Symbol.for("react.legacy_hidden"), T = Symbol.for("react.default_value"), O = Symbol.iterator;
  function $(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case Mn:
        return "Fragment";
      case Sn:
        return "Portal";
      case jt:
        return "Profiler";
      case Yn:
        return "StrictMode";
      case ht:
        return "Suspense";
      case kt:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case St:
        return (i.displayName || "Context") + ".Consumer";
      case on:
        return (i._context.displayName || "Context") + ".Provider";
      case Gn:
        var l = i.render;
        return i = i.displayName, i || (i = l.displayName || l.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case a:
        return l = i.displayName || null, l !== null ? l : $(i.type) || "Memo";
      case u:
        l = i._payload, i = i._init;
        try {
          return $(i(l));
        } catch {
        }
    }
    return null;
  }
  var ne = {};
  function ue(i, l) {
    if (i = i.contextTypes, !i) return ne;
    var d = {}, m;
    for (m in i) d[m] = l[m];
    return d;
  }
  var le = null;
  function _e(i, l) {
    if (i !== l) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var d = l.parent;
      if (i === null) {
        if (d !== null) throw Error(v(401));
      } else {
        if (d === null) throw Error(v(401));
        _e(i, d);
      }
      l.context._currentValue = l.value;
    }
  }
  function bt(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && bt(i);
  }
  function xt(i) {
    var l = i.parent;
    l !== null && xt(l), i.context._currentValue = i.value;
  }
  function wt(i, l) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(v(402));
    i.depth === l.depth ? _e(i, l) : wt(i, l);
  }
  function bn(i, l) {
    var d = l.parent;
    if (d === null) throw Error(v(402));
    i.depth === d.depth ? _e(i, d) : bn(i, d), l.context._currentValue = l.value;
  }
  function an(i) {
    var l = le;
    l !== i && (l === null ? xt(i) : i === null ? bt(l) : l.depth === i.depth ? _e(l, i) : l.depth > i.depth ? wt(l, i) : bn(l, i), le = i);
  }
  var Xn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, l) {
    i = i._reactInternals, i.queue !== null && i.queue.push(l);
  }, enqueueReplaceState: function(i, l) {
    i = i._reactInternals, i.replace = !0, i.queue = [l];
  }, enqueueForceUpdate: function() {
  } };
  function xn(i, l, d, m) {
    var P = i.state !== void 0 ? i.state : null;
    i.updater = Xn, i.props = d, i.state = P;
    var _ = { queue: [], replace: !1 };
    i._reactInternals = _;
    var A = l.contextType;
    if (i.context = typeof A == "object" && A !== null ? A._currentValue : m, A = l.getDerivedStateFromProps, typeof A == "function" && (A = A(d, P), P = A == null ? P : rn({}, P, A), i.state = P), typeof l.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (l = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), l !== i.state && Xn.enqueueReplaceState(i, i.state, null), _.queue !== null && 0 < _.queue.length) if (l = _.queue, A = _.replace, _.queue = null, _.replace = !1, A && l.length === 1) i.state = l[0];
    else {
      for (_ = A ? l[0] : i.state, P = !0, A = A ? 1 : 0; A < l.length; A++) {
        var V = l[A];
        V = typeof V == "function" ? V.call(i, _, d, m) : V, V != null && (P ? (P = !1, _ = rn({}, _, V)) : rn(_, V));
      }
      i.state = _;
    }
    else _.queue = null;
  }
  var On = { id: 1, overflow: "" };
  function un(i, l, d) {
    var m = i.id;
    i = i.overflow;
    var P = 32 - An(m) - 1;
    m &= ~(1 << P), d += 1;
    var _ = 32 - An(l) + P;
    if (30 < _) {
      var A = P - P % 5;
      return _ = (m & (1 << A) - 1).toString(32), m >>= A, P -= A, { id: 1 << 32 - An(l) + P | d << P | m, overflow: _ + i };
    }
    return { id: 1 << _ | d << P | m, overflow: i };
  }
  var An = Math.clz32 ? Math.clz32 : br, Ia = Math.log, Pa = Math.LN2;
  function br(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Ia(i) / Pa | 0) | 0;
  }
  function sn(i, l) {
    return i === l && (i !== 0 || 1 / i === 1 / l) || i !== i && l !== l;
  }
  var Da = typeof Object.is == "function" ? Object.is : sn, cn = null, Yr = null, xr = null, Ne = null, jn = !1, wr = !1, Ln = 0, wn = null, kr = 0;
  function kn() {
    if (cn === null) throw Error(v(321));
    return cn;
  }
  function Yt() {
    if (0 < kr) throw Error(v(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Gr() {
    return Ne === null ? xr === null ? (jn = !1, xr = Ne = Yt()) : (jn = !0, Ne = xr) : Ne.next === null ? (jn = !1, Ne = Ne.next = Yt()) : (jn = !0, Ne = Ne.next), Ne;
  }
  function ar() {
    Yr = cn = null, wr = !1, xr = null, kr = 0, Ne = wn = null;
  }
  function Io(i, l) {
    return typeof l == "function" ? l(i) : l;
  }
  function Cr(i, l, d) {
    if (cn = kn(), Ne = Gr(), jn) {
      var m = Ne.queue;
      if (l = m.dispatch, wn !== null && (d = wn.get(m), d !== void 0)) {
        wn.delete(m), m = Ne.memoizedState;
        do
          m = i(m, d.action), d = d.next;
        while (d !== null);
        return Ne.memoizedState = m, [m, l];
      }
      return [Ne.memoizedState, l];
    }
    return i = i === Io ? typeof l == "function" ? l() : l : d !== void 0 ? d(l) : l, Ne.memoizedState = i, i = Ne.queue = { last: null, dispatch: null }, i = i.dispatch = Fa.bind(null, cn, i), [Ne.memoizedState, i];
  }
  function Po(i, l) {
    if (cn = kn(), Ne = Gr(), l = l === void 0 ? null : l, Ne !== null) {
      var d = Ne.memoizedState;
      if (d !== null && l !== null) {
        var m = d[1];
        e: if (m === null) m = !1;
        else {
          for (var P = 0; P < m.length && P < l.length; P++) if (!Da(l[P], m[P])) {
            m = !1;
            break e;
          }
          m = !0;
        }
        if (m) return d[0];
      }
    }
    return i = i(), Ne.memoizedState = [i, l], i;
  }
  function Fa(i, l, d) {
    if (25 <= kr) throw Error(v(301));
    if (i === cn) if (wr = !0, i = { action: d, next: null }, wn === null && (wn = /* @__PURE__ */ new Map()), d = wn.get(l), d === void 0) wn.set(l, i);
    else {
      for (l = d; l.next !== null; ) l = l.next;
      l.next = i;
    }
  }
  function Ma() {
    throw Error(v(394));
  }
  function Er() {
  }
  var Do = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return kn(), i._currentValue;
  }, useMemo: Po, useReducer: Cr, useRef: function(i) {
    cn = kn(), Ne = Gr();
    var l = Ne.memoizedState;
    return l === null ? (i = { current: i }, Ne.memoizedState = i) : l;
  }, useState: function(i) {
    return Cr(Io, i);
  }, useInsertionEffect: Er, useLayoutEffect: function() {
  }, useCallback: function(i, l) {
    return Po(function() {
      return i;
    }, l);
  }, useImperativeHandle: Er, useEffect: Er, useDebugValue: Er, useDeferredValue: function(i) {
    return kn(), i;
  }, useTransition: function() {
    return kn(), [!1, Ma];
  }, useId: function() {
    var i = Yr.treeContext, l = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - An(i) - 1)).toString(32) + l;
    var d = ir;
    if (d === null) throw Error(v(404));
    return l = Ln++, i = ":" + d.idPrefix + "R" + i, 0 < l && (i += "H" + l.toString(32)), i + ":";
  }, useMutableSource: function(i, l) {
    return kn(), l(i._source);
  }, useSyncExternalStore: function(i, l, d) {
    if (d === void 0) throw Error(v(407));
    return d();
  } }, ir = null, Xr = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Oa(i) {
    return console.error(i), null;
  }
  function Zn() {
  }
  function Zr(i, l, d, m, P, _, A, V, ce) {
    var be = [], Se = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: m === void 0 ? 12800 : m, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Se, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: P === void 0 ? Oa : P, onAllReady: _ === void 0 ? Zn : _, onShellReady: A === void 0 ? Zn : A, onShellError: V === void 0 ? Zn : V, onFatalError: ce === void 0 ? Zn : ce }, d = Jn(l, 0, null, d, !1, !1), d.parentFlushed = !0, i = Jr(l, i, null, d, Se, ne, null, On), be.push(i), l;
  }
  function Jr(i, l, d, m, P, _, A, V) {
    i.allPendingTasks++, d === null ? i.pendingRootTasks++ : d.pendingTasks++;
    var ce = { node: l, ping: function() {
      var be = i.pingedTasks;
      be.push(ce), be.length === 1 && Bo(i);
    }, blockedBoundary: d, blockedSegment: m, abortSet: P, legacyContext: _, context: A, treeContext: V };
    return P.add(ce), ce;
  }
  function Jn(i, l, d, m, P, _) {
    return { status: 0, id: -1, index: l, parentFlushed: !1, chunks: [], children: [], formatContext: m, boundary: d, lastPushedText: P, textEmbedded: _ };
  }
  function sr(i, l) {
    if (i = i.onError(l), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function Tr(i, l) {
    var d = i.onShellError;
    d(l), d = i.onFatalError, d(l), i.destination !== null ? (i.status = 2, N(i.destination, l)) : (i.status = 1, i.fatalError = l);
  }
  function Fo(i, l, d, m, P) {
    for (cn = {}, Yr = l, Ln = 0, i = d(m, P); wr; ) wr = !1, Ln = 0, kr += 1, Ne = null, i = d(m, P);
    return ar(), i;
  }
  function Mo(i, l, d, m) {
    var P = d.render(), _ = m.childContextTypes;
    if (_ != null) {
      var A = l.legacyContext;
      if (typeof d.getChildContext != "function") m = A;
      else {
        d = d.getChildContext();
        for (var V in d) if (!(V in _)) throw Error(v(108, $(m) || "Unknown", V));
        m = rn({}, A, d);
      }
      l.legacyContext = m, Ct(i, l, P), l.legacyContext = A;
    } else Ct(i, l, P);
  }
  function Oo(i, l) {
    if (i && i.defaultProps) {
      l = rn({}, l), i = i.defaultProps;
      for (var d in i) l[d] === void 0 && (l[d] = i[d]);
      return l;
    }
    return l;
  }
  function Rr(i, l, d, m, P) {
    if (typeof d == "function") if (d.prototype && d.prototype.isReactComponent) {
      P = ue(d, l.legacyContext);
      var _ = d.contextType;
      _ = new d(m, typeof _ == "object" && _ !== null ? _._currentValue : P), xn(_, d, m, P), Mo(i, l, _, d);
    } else {
      _ = ue(d, l.legacyContext), P = Fo(i, l, d, m, _);
      var A = Ln !== 0;
      if (typeof P == "object" && P !== null && typeof P.render == "function" && P.$$typeof === void 0) xn(P, d, m, _), Mo(i, l, P, d);
      else if (A) {
        m = l.treeContext, l.treeContext = un(m, 1, 0);
        try {
          Ct(i, l, P);
        } finally {
          l.treeContext = m;
        }
      } else Ct(i, l, P);
    }
    else if (typeof d == "string") {
      switch (P = l.blockedSegment, _ = Wt(P.chunks, d, m, i.responseState, P.formatContext), P.lastPushedText = !1, A = P.formatContext, P.formatContext = ke(A, d, m), _r(i, l, _), P.formatContext = A, d) {
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
          P.chunks.push(Nt, b(d), en);
      }
      P.lastPushedText = !1;
    } else {
      switch (d) {
        case I:
        case g:
        case Yn:
        case jt:
        case Mn:
          Ct(i, l, m.children);
          return;
        case kt:
          Ct(i, l, m.children);
          return;
        case h:
          throw Error(v(343));
        case ht:
          e: {
            d = l.blockedBoundary, P = l.blockedSegment, _ = m.fallback, m = m.children, A = /* @__PURE__ */ new Set();
            var V = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: A, errorDigest: null }, ce = Jn(i, P.chunks.length, V, P.formatContext, !1, !1);
            P.children.push(ce), P.lastPushedText = !1;
            var be = Jn(i, 0, null, P.formatContext, !1, !1);
            be.parentFlushed = !0, l.blockedBoundary = V, l.blockedSegment = be;
            try {
              if (_r(
                i,
                l,
                m
              ), be.lastPushedText && be.textEmbedded && be.chunks.push(Ae), be.status = 1, Ir(V, be), V.pendingTasks === 0) break e;
            } catch (Se) {
              be.status = 4, V.forceClientRender = !0, V.errorDigest = sr(i, Se);
            } finally {
              l.blockedBoundary = d, l.blockedSegment = P;
            }
            l = Jr(i, _, d, ce, A, l.legacyContext, l.context, l.treeContext), i.pingedTasks.push(l);
          }
          return;
      }
      if (typeof d == "object" && d !== null) switch (d.$$typeof) {
        case Gn:
          if (m = Fo(i, l, d.render, m, P), Ln !== 0) {
            d = l.treeContext, l.treeContext = un(d, 1, 0);
            try {
              Ct(i, l, m);
            } finally {
              l.treeContext = d;
            }
          } else Ct(i, l, m);
          return;
        case a:
          d = d.type, m = Oo(d, m), Rr(i, l, d, m, P);
          return;
        case on:
          if (P = m.children, d = d._context, m = m.value, _ = d._currentValue, d._currentValue = m, A = le, le = m = { parent: A, depth: A === null ? 0 : A.depth + 1, context: d, parentValue: _, value: m }, l.context = m, Ct(i, l, P), i = le, i === null) throw Error(v(403));
          m = i.parentValue, i.context._currentValue = m === T ? i.context._defaultValue : m, i = le = i.parent, l.context = i;
          return;
        case St:
          m = m.children, m = m(d._currentValue), Ct(i, l, m);
          return;
        case u:
          P = d._init, d = P(d._payload), m = Oo(d, m), Rr(i, l, d, m, void 0);
          return;
      }
      throw Error(v(
        130,
        d == null ? d : typeof d,
        ""
      ));
    }
  }
  function Ct(i, l, d) {
    if (l.node = d, typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case yt:
          Rr(i, l, d.type, d.props, d.ref);
          return;
        case Sn:
          throw Error(v(257));
        case u:
          var m = d._init;
          d = m(d._payload), Ct(i, l, d);
          return;
      }
      if (ft(d)) {
        Ao(i, l, d);
        return;
      }
      if (d === null || typeof d != "object" ? m = null : (m = O && d[O] || d["@@iterator"], m = typeof m == "function" ? m : null), m && (m = m.call(d))) {
        if (d = m.next(), !d.done) {
          var P = [];
          do
            P.push(d.value), d = m.next();
          while (!d.done);
          Ao(i, l, P);
        }
        return;
      }
      throw i = Object.prototype.toString.call(d), Error(v(31, i === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : i));
    }
    typeof d == "string" ? (m = l.blockedSegment, m.lastPushedText = Ht(l.blockedSegment.chunks, d, i.responseState, m.lastPushedText)) : typeof d == "number" && (m = l.blockedSegment, m.lastPushedText = Ht(l.blockedSegment.chunks, "" + d, i.responseState, m.lastPushedText));
  }
  function Ao(i, l, d) {
    for (var m = d.length, P = 0; P < m; P++) {
      var _ = l.treeContext;
      l.treeContext = un(_, m, P);
      try {
        _r(i, l, d[P]);
      } finally {
        l.treeContext = _;
      }
    }
  }
  function _r(i, l, d) {
    var m = l.blockedSegment.formatContext, P = l.legacyContext, _ = l.context;
    try {
      return Ct(i, l, d);
    } catch (ce) {
      if (ar(), typeof ce == "object" && ce !== null && typeof ce.then == "function") {
        d = ce;
        var A = l.blockedSegment, V = Jn(i, A.chunks.length, null, A.formatContext, A.lastPushedText, !0);
        A.children.push(V), A.lastPushedText = !1, i = Jr(i, l.node, l.blockedBoundary, V, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, d.then(i, i), l.blockedSegment.formatContext = m, l.legacyContext = P, l.context = _, an(_);
      } else throw l.blockedSegment.formatContext = m, l.legacyContext = P, l.context = _, an(_), ce;
    }
  }
  function Aa(i) {
    var l = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Lo(this, l, i);
  }
  function jo(i, l, d) {
    var m = i.blockedBoundary;
    i.blockedSegment.status = 3, m === null ? (l.allPendingTasks--, l.status !== 2 && (l.status = 2, l.destination !== null && l.destination.close())) : (m.pendingTasks--, m.forceClientRender || (m.forceClientRender = !0, i = d === void 0 ? Error(v(432)) : d, m.errorDigest = l.onError(i), m.parentFlushed && l.clientRenderedBoundaries.push(m)), m.fallbackAbortableTasks.forEach(function(P) {
      return jo(P, l, d);
    }), m.fallbackAbortableTasks.clear(), l.allPendingTasks--, l.allPendingTasks === 0 && (m = l.onAllReady, m()));
  }
  function Ir(i, l) {
    if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null) {
      var d = l.children[0];
      d.id = l.id, d.parentFlushed = !0, d.status === 1 && Ir(i, d);
    } else i.completedSegments.push(l);
  }
  function Lo(i, l, d) {
    if (l === null) {
      if (d.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(v(389));
        i.completedRootSegment = d;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = Zn, l = i.onShellReady, l());
    } else l.pendingTasks--, l.forceClientRender || (l.pendingTasks === 0 ? (d.parentFlushed && d.status === 1 && Ir(l, d), l.parentFlushed && i.completedBoundaries.push(l), l.fallbackAbortableTasks.forEach(Aa, i), l.fallbackAbortableTasks.clear()) : d.parentFlushed && d.status === 1 && (Ir(l, d), l.completedSegments.length === 1 && l.parentFlushed && i.partialBoundaries.push(l)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Bo(i) {
    if (i.status !== 2) {
      var l = le, d = Xr.current;
      Xr.current = Do;
      var m = ir;
      ir = i.responseState;
      try {
        var P = i.pingedTasks, _;
        for (_ = 0; _ < P.length; _++) {
          var A = P[_], V = i, ce = A.blockedSegment;
          if (ce.status === 0) {
            an(A.context);
            try {
              Ct(V, A, A.node), ce.lastPushedText && ce.textEmbedded && ce.chunks.push(Ae), A.abortSet.delete(A), ce.status = 1, Lo(V, A.blockedBoundary, ce);
            } catch (Xt) {
              if (ar(), typeof Xt == "object" && Xt !== null && typeof Xt.then == "function") {
                var be = A.ping;
                Xt.then(be, be);
              } else {
                A.abortSet.delete(A), ce.status = 4;
                var Se = A.blockedBoundary, $e = Xt, Et = sr(V, $e);
                if (Se === null ? Tr(V, $e) : (Se.pendingTasks--, Se.forceClientRender || (Se.forceClientRender = !0, Se.errorDigest = Et, Se.parentFlushed && V.clientRenderedBoundaries.push(Se))), V.allPendingTasks--, V.allPendingTasks === 0) {
                  var Gt = V.onAllReady;
                  Gt();
                }
              }
            } finally {
            }
          }
        }
        P.splice(0, _), i.destination !== null && Qr(i, i.destination);
      } catch (Xt) {
        sr(i, Xt), Tr(i, Xt);
      } finally {
        ir = m, Xr.current = d, d === Do && an(l);
      }
    }
  }
  function Pr(i, l, d) {
    switch (d.parentFlushed = !0, d.status) {
      case 0:
        var m = d.id = i.nextSegmentId++;
        return d.lastPushedText = !1, d.textEmbedded = !1, i = i.responseState, f(l, He), f(l, i.placeholderPrefix), i = b(m.toString(16)), f(l, i), M(l, vt);
      case 1:
        d.status = 2;
        var P = !0;
        m = d.chunks;
        var _ = 0;
        d = d.children;
        for (var A = 0; A < d.length; A++) {
          for (P = d[A]; _ < P.index; _++) f(l, m[_]);
          P = Dr(i, l, P);
        }
        for (; _ < m.length - 1; _++) f(l, m[_]);
        return _ < m.length && (P = M(l, m[_])), P;
      default:
        throw Error(v(390));
    }
  }
  function Dr(i, l, d) {
    var m = d.boundary;
    if (m === null) return Pr(i, l, d);
    if (m.parentFlushed = !0, m.forceClientRender) m = m.errorDigest, M(l, hn), f(l, _n), m && (f(l, In), f(l, b(ge(m))), f(l, tn)), M(l, vn), Pr(i, l, d);
    else if (0 < m.pendingTasks) {
      m.rootSegmentID = i.nextSegmentId++, 0 < m.completedSegments.length && i.partialBoundaries.push(m);
      var P = i.responseState, _ = P.nextSuspenseID++;
      P = C(P.boundaryPrefix + _.toString(16)), m = m.id = P, dt(l, i.responseState, m), Pr(i, l, d);
    } else if (m.byteSize > i.progressiveChunkSize) m.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(m), dt(l, i.responseState, m.id), Pr(i, l, d);
    else {
      if (M(l, Tn), d = m.completedSegments, d.length !== 1) throw Error(v(391));
      Dr(i, l, d[0]);
    }
    return M(l, nr);
  }
  function Uo(i, l, d) {
    return ve(l, i.responseState, d.formatContext, d.id), Dr(i, l, d), xe(l, d.formatContext);
  }
  function Ho(i, l, d) {
    for (var m = d.completedSegments, P = 0; P < m.length; P++) Wo(i, l, d, m[P]);
    if (m.length = 0, i = i.responseState, m = d.id, d = d.rootSegmentID, f(l, i.startInlineScript), i.sentCompleteBoundaryFunction ? f(l, We) : (i.sentCompleteBoundaryFunction = !0, f(l, Fe)), m === null) throw Error(v(395));
    return d = b(d.toString(16)), f(l, m), f(l, $t), f(l, i.segmentPrefix), f(l, d), M(l, Mt);
  }
  function Wo(i, l, d, m) {
    if (m.status === 2) return !0;
    var P = m.id;
    if (P === -1) {
      if ((m.id = d.rootSegmentID) === -1) throw Error(v(392));
      return Uo(i, l, m);
    }
    return Uo(i, l, m), i = i.responseState, f(l, i.startInlineScript), i.sentCompleteSegmentFunction ? f(l, pe) : (i.sentCompleteSegmentFunction = !0, f(l, ye)), f(l, i.segmentPrefix), P = b(P.toString(16)), f(l, P), f(l, Xe), f(l, i.placeholderPrefix), f(l, P), M(l, Te);
  }
  function Qr(i, l) {
    k = new Uint8Array(512), E = 0;
    try {
      var d = i.completedRootSegment;
      if (d !== null && i.pendingRootTasks === 0) {
        Dr(i, l, d), i.completedRootSegment = null;
        var m = i.responseState.bootstrapChunks;
        for (d = 0; d < m.length - 1; d++) f(l, m[d]);
        d < m.length && M(l, m[d]);
      }
      var P = i.clientRenderedBoundaries, _;
      for (_ = 0; _ < P.length; _++) {
        var A = P[_];
        m = l;
        var V = i.responseState, ce = A.id, be = A.errorDigest, Se = A.errorMessage, $e = A.errorComponentStack;
        if (f(m, V.startInlineScript), V.sentClientRenderFunction ? f(m, Je) : (V.sentClientRenderFunction = !0, f(
          m,
          Ze
        )), ce === null) throw Error(v(395));
        f(m, ce), f(m, Ot), (be || Se || $e) && (f(m, yn), f(m, b(Vt(be || "")))), (Se || $e) && (f(m, yn), f(m, b(Vt(Se || "")))), $e && (f(m, yn), f(m, b(Vt($e)))), M(m, At);
      }
      P.splice(0, _);
      var Et = i.completedBoundaries;
      for (_ = 0; _ < Et.length; _++) Ho(i, l, Et[_]);
      Et.splice(0, _), U(l), k = new Uint8Array(512), E = 0;
      var Gt = i.partialBoundaries;
      for (_ = 0; _ < Gt.length; _++) {
        var Xt = Gt[_];
        e: {
          P = i, A = l;
          var Fr = Xt.completedSegments;
          for (V = 0; V < Fr.length; V++) if (!Wo(
            P,
            A,
            Xt,
            Fr[V]
          )) {
            V++, Fr.splice(0, V);
            var zo = !1;
            break e;
          }
          Fr.splice(0, V), zo = !0;
        }
        if (!zo) {
          i.destination = null, _++, Gt.splice(0, _);
          return;
        }
      }
      Gt.splice(0, _);
      var lr = i.completedBoundaries;
      for (_ = 0; _ < lr.length; _++) Ho(i, l, lr[_]);
      lr.splice(0, _);
    } finally {
      U(l), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && l.close();
    }
  }
  function No(i, l) {
    try {
      var d = i.abortableTasks;
      d.forEach(function(m) {
        return jo(m, i, l);
      }), d.clear(), i.destination !== null && Qr(i, i.destination);
    } catch (m) {
      sr(i, m), Tr(i, m);
    }
  }
  return cs.renderToReadableStream = function(i, l) {
    return new Promise(function(d, m) {
      var P, _, A = new Promise(function(Se, $e) {
        _ = Se, P = $e;
      }), V = Zr(i, J(l ? l.identifierPrefix : void 0, l ? l.nonce : void 0, l ? l.bootstrapScriptContent : void 0, l ? l.bootstrapScripts : void 0, l ? l.bootstrapModules : void 0), ut(l ? l.namespaceURI : void 0), l ? l.progressiveChunkSize : void 0, l ? l.onError : void 0, _, function() {
        var Se = new ReadableStream({ type: "bytes", pull: function($e) {
          if (V.status === 1) V.status = 2, N($e, V.fatalError);
          else if (V.status !== 2 && V.destination === null) {
            V.destination = $e;
            try {
              Qr(V, $e);
            } catch (Et) {
              sr(V, Et), Tr(V, Et);
            }
          }
        }, cancel: function() {
          No(V);
        } }, { highWaterMark: 0 });
        Se.allReady = A, d(Se);
      }, function(Se) {
        A.catch(function() {
        }), m(Se);
      }, P);
      if (l && l.signal) {
        var ce = l.signal, be = function() {
          No(V, ce.reason), ce.removeEventListener("abort", be);
        };
        ce.addEventListener("abort", be);
      }
      Bo(V);
    });
  }, cs.version = "18.3.1", cs;
}
var To = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xl;
function $l() {
  return xl || (xl = 1, process.env.NODE_ENV !== "production" && function() {
    var w = Bt, v = "18.3.1", k = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        M("warn", e, n);
      }
    }
    function f(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        M("error", e, n);
      }
    }
    function M(e, t, n) {
      {
        var o = k.ReactDebugCurrentFrame, s = o.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var c = n.map(function(p) {
          return String(p);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    function U(e) {
      e();
    }
    function L(e) {
    }
    function b(e, t) {
      C(e, t);
    }
    function C(e, t) {
      return e.push(t);
    }
    function N(e) {
    }
    function D(e) {
      e.push(null);
    }
    function B(e) {
      return e;
    }
    function ie(e) {
      return e;
    }
    function Q(e, t) {
      e.destroy(t);
    }
    function re(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function z(e) {
      try {
        return F(e), !1;
      } catch {
        return !0;
      }
    }
    function F(e) {
      return "" + e;
    }
    function se(e, t) {
      if (z(e))
        return f("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, re(e)), F(e);
    }
    function Le(e, t) {
      if (z(e))
        return f("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, re(e)), F(e);
    }
    function we(e) {
      if (z(e))
        return f("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", re(e)), F(e);
    }
    var Re = Object.prototype.hasOwnProperty, Pe = 0, ge = 1, ot = 2, me = 3, ft = 4, Be = 5, ze = 6, Z = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", q = Z + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Me = new RegExp("^[" + Z + "][" + q + "]*$"), he = {}, Oe = {};
    function J(e) {
      return Re.call(Oe, e) ? !0 : Re.call(he, e) ? !1 : Me.test(e) ? (Oe[e] = !0, !0) : (he[e] = !0, f("Invalid attribute name: `%s`", e), !1);
    }
    function Ee(e, t, n, o) {
      if (n !== null && n.type === Pe)
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
    function ut(e) {
      return Ae.hasOwnProperty(e) ? Ae[e] : null;
    }
    function ke(e, t, n, o, s, c, p) {
      this.acceptsBooleans = t === ot || t === me || t === ft, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = p;
    }
    var Ae = {}, Ht = [
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
    Ht.forEach(function(e) {
      Ae[e] = new ke(
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
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], n = e[1];
      Ae[t] = new ke(
        t,
        ge,
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
      Ae[e] = new ke(
        e,
        ot,
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
      Ae[e] = new ke(
        e,
        ot,
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
      Ae[e] = new ke(
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
      Ae[e] = new ke(
        e,
        me,
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
      Ae[e] = new ke(
        e,
        ft,
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
      Ae[e] = new ke(
        e,
        ze,
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
      Ae[e] = new ke(
        e,
        Be,
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
    var _t = /[\-\:]([a-z])/g, Ve = function(e) {
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
      var t = e.replace(_t, Ve);
      Ae[t] = new ke(
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
      var t = e.replace(_t, Ve);
      Ae[t] = new ke(
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
      var t = e.replace(_t, Ve);
      Ae[t] = new ke(
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
      Ae[e] = new ke(
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
    var je = "xlinkHref";
    Ae[je] = new ke(
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
      Ae[e] = new ke(
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
    var Ye = {
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
    function gt(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var at = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ye).forEach(function(e) {
      at.forEach(function(t) {
        Ye[gt(t, e)] = Ye[e];
      });
    });
    var ct = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function nt(e, t) {
      ct[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || f("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || f("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function It(e, t) {
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
    }, it = {}, K = new RegExp("^(aria)-[" + q + "]*$"), ee = new RegExp("^(aria)[A-Z][" + q + "]*$");
    function te(e, t) {
      {
        if (Re.call(it, t) && it[t])
          return !0;
        if (ee.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = Ke.hasOwnProperty(n) ? n : null;
          if (o == null)
            return f("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), it[t] = !0, !0;
          if (t !== o)
            return f("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), it[t] = !0, !0;
        }
        if (K.test(t)) {
          var s = t.toLowerCase(), c = Ke.hasOwnProperty(s) ? s : null;
          if (c == null)
            return it[t] = !0, !1;
          if (t !== c)
            return f("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), it[t] = !0, !0;
        }
      }
      return !0;
    }
    function Y(e, t) {
      {
        var n = [];
        for (var o in t) {
          var s = te(e, o);
          s || n.push(o);
        }
        var c = n.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        n.length === 1 ? f("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e) : n.length > 1 && f("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e);
      }
    }
    function oe(e, t) {
      It(e, t) || Y(e, t);
    }
    var fe = !1;
    function st(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !fe && (fe = !0, e === "select" && t.multiple ? f("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : f("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ue = {
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
    }, rt = function() {
    };
    {
      var Ge = {}, Wt = /^on./, Nt = /^on[^A-Z]/, en = new RegExp("^(aria)-[" + q + "]*$"), He = new RegExp("^(aria)[A-Z][" + q + "]*$");
      rt = function(e, t, n, o) {
        if (Re.call(Ge, t) && Ge[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return f("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ge[t] = !0, !0;
        if (o != null) {
          var c = o.registrationNameDependencies, p = o.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var y = p.hasOwnProperty(s) ? p[s] : null;
          if (y != null)
            return f("Invalid event handler property `%s`. Did you mean `%s`?", t, y), Ge[t] = !0, !0;
          if (Wt.test(t))
            return f("Unknown event handler property `%s`. It will be ignored.", t), Ge[t] = !0, !0;
        } else if (Wt.test(t))
          return Nt.test(t) && f("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Ge[t] = !0, !0;
        if (en.test(t) || He.test(t))
          return !0;
        if (s === "innerhtml")
          return f("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ge[t] = !0, !0;
        if (s === "aria")
          return f("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ge[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return f("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), Ge[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return f("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Ge[t] = !0, !0;
        var R = ut(t), j = R !== null && R.type === Pe;
        if (Ue.hasOwnProperty(s)) {
          var W = Ue[s];
          if (W !== t)
            return f("Invalid DOM property `%s`. Did you mean `%s`?", t, W), Ge[t] = !0, !0;
        } else if (!j && t !== s)
          return f("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), Ge[t] = !0, !0;
        return typeof n == "boolean" && Ee(t, n, R) ? (n ? f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), Ge[t] = !0, !0) : j ? !0 : Ee(t, n, R) ? (Ge[t] = !0, !1) : ((n === "false" || n === "true") && R !== null && R.type === me && (f("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), Ge[t] = !0), !0);
      };
    }
    var vt = function(e, t, n) {
      {
        var o = [];
        for (var s in t) {
          var c = rt(e, s, t[s], n);
          c || o.push(s);
        }
        var p = o.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        o.length === 1 ? f("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e) : o.length > 1 && f("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e);
      }
    };
    function Tn(e, t, n) {
      It(e, t) || vt(e, t, n);
    }
    var $n = function() {
    };
    {
      var Rn = /^(?:webkit|moz|o)[A-Z]/, hn = /^-ms-/, nr = /-(.)/g, _n = /;\s*$/, tn = {}, In = {}, vn = !1, dt = !1, pt = function(e) {
        return e.replace(nr, function(t, n) {
          return n.toUpperCase();
        });
      }, Pt = function(e) {
        tn.hasOwnProperty(e) && tn[e] || (tn[e] = !0, f(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          pt(e.replace(hn, "ms-"))
        ));
      }, Ce = function(e) {
        tn.hasOwnProperty(e) && tn[e] || (tn[e] = !0, f("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, zt = function(e, t) {
        In.hasOwnProperty(t) && In[t] || (In[t] = !0, f(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(_n, "")));
      }, mn = function(e, t) {
        vn || (vn = !0, f("`NaN` is an invalid value for the `%s` css style property.", e));
      }, nn = function(e, t) {
        dt || (dt = !0, f("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      $n = function(e, t) {
        e.indexOf("-") > -1 ? Pt(e) : Rn.test(e) ? Ce(e) : _n.test(t) && zt(e, t), typeof t == "number" && (isNaN(t) ? mn(e, t) : isFinite(t) || nn(e, t));
      };
    }
    var Dt = $n, ln = /["'&<>]/;
    function Ft(e) {
      we(e);
      var t = "" + e, n = ln.exec(t);
      if (!n)
        return t;
      var o, s = "", c, p = 0;
      for (c = n.index; c < t.length; c++) {
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
    function lt(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : Ft(e);
    }
    var Pn = /([A-Z])/g, gn = /^ms-/;
    function Dn(e) {
      return e.replace(Pn, "-$1").toLowerCase().replace(gn, "-ms-");
    }
    var et = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Fn = !1;
    function rr(e) {
      !Fn && et.test(e) && (Fn = !0, f("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var or = Array.isArray;
    function S(e) {
      return or(e);
    }
    var H = "<script>";
    function G(e, t, n, o, s) {
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
    var ae = 0, ve = 1, xe = 2, ye = 3, pe = 4, Xe = 5, Te = 6, Fe = 7;
    function We(e, t) {
      return {
        insertionMode: e,
        selectedValue: t
      };
    }
    function $t(e, t, n) {
      switch (t) {
        case "select":
          return We(ve, n.value != null ? n.value : n.defaultValue);
        case "svg":
          return We(xe, null);
        case "math":
          return We(ye, null);
        case "foreignObject":
          return We(ve, null);
        // Table parents are special in that their children can only be created at all if they're
        // wrapped in a table parent. So we need to encode that we're entering this mode.
        case "table":
          return We(pe, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return We(Xe, null);
        case "colgroup":
          return We(Fe, null);
        case "tr":
          return We(Te, null);
      }
      return e.insertionMode >= pe || e.insertionMode === ae ? We(ve, null) : e;
    }
    var Mt = null;
    function Ze(e) {
      var t = e.nextSuspenseID++;
      return e.boundaryPrefix + t.toString(16);
    }
    function Je(e, t, n) {
      var o = e.idPrefix, s = ":" + o + "R" + t;
      return n > 0 && (s += "H" + n.toString(32)), s + ":";
    }
    function Ot(e) {
      return lt(e);
    }
    var At = "<!-- -->";
    function yn(e, t, n, o) {
      return t === "" ? o : (o && e.push(At), e.push(Ot(t)), !0);
    }
    function Vn(e, t, n, o) {
      n && o && e.push(At);
    }
    var Vt = /* @__PURE__ */ new Map();
    function rn(e) {
      var t = Vt.get(e);
      if (t !== void 0)
        return t;
      var n = lt(Dn(e));
      return Vt.set(e, n), n;
    }
    var yt = ' style="', Sn = ":", Mn = ";";
    function Yn(e, t, n) {
      if (typeof n != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var o = !0;
      for (var s in n)
        if (Re.call(n, s)) {
          var c = n[s];
          if (!(c == null || typeof c == "boolean" || c === "")) {
            var p = void 0, y = void 0, R = s.indexOf("--") === 0;
            R ? (p = lt(s), Le(c, s), y = lt(("" + c).trim())) : (Dt(s, c), p = rn(s), typeof c == "number" ? c !== 0 && !Re.call(Ye, s) ? y = c + "px" : y = "" + c : (Le(c, s), y = lt(("" + c).trim()))), o ? (o = !1, e.push(yt, p, Sn, y)) : e.push(Mn, p, Sn, y);
          }
        }
      o || e.push(St);
    }
    var jt = " ", on = '="', St = '"', Gn = '=""';
    function ht(e, t, n, o) {
      switch (n) {
        case "style": {
          Yn(e, t, o);
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
        var s = ut(n);
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
            case me:
              o && e.push(jt, p, Gn);
              return;
            case ft:
              o === !0 ? e.push(jt, p, Gn) : o === !1 || e.push(jt, p, on, lt(o), St);
              return;
            case Be:
              isNaN(o) || e.push(jt, p, on, lt(o), St);
              break;
            case ze:
              !isNaN(o) && o >= 1 && e.push(jt, p, on, lt(o), St);
              break;
            default:
              s.sanitizeURL && (se(o, c), o = "" + o, rr(o)), e.push(jt, p, on, lt(o), St);
          }
        } else if (J(n)) {
          switch (typeof o) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return;
            case "boolean": {
              var y = n.toLowerCase().slice(0, 5);
              if (y !== "data-" && y !== "aria-")
                return;
            }
          }
          e.push(jt, n, on, lt(o), St);
        }
      }
    }
    var kt = ">", a = "/>";
    function u(e, t, n) {
      if (t != null) {
        if (n != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t != "object" || !("__html" in t))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = t.__html;
        o != null && (we(o), e.push("" + o));
      }
    }
    var h = !1, g = !1, I = !1, T = !1, O = !1, $ = !1, ne = !1;
    function ue(e, t) {
      {
        var n = e[t];
        if (n != null) {
          var o = S(n);
          e.multiple && !o ? f("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && o && f("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t);
        }
      }
    }
    function le(e, t, n) {
      nt("select", t), ue(t, "value"), ue(t, "defaultValue"), t.value !== void 0 && t.defaultValue !== void 0 && !I && (f("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), I = !0), e.push(sn("select"));
      var o = null, s = null;
      for (var c in t)
        if (Re.call(t, c)) {
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
              ht(e, n, c, p);
              break;
          }
        }
      return e.push(kt), u(e, s, o), o;
    }
    function _e(e) {
      var t = "";
      return w.Children.forEach(e, function(n) {
        n != null && (t += n, !O && typeof n != "string" && typeof n != "number" && (O = !0, f("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), t;
    }
    var bt = ' selected=""';
    function xt(e, t, n, o) {
      var s = o.selectedValue;
      e.push(sn("option"));
      var c = null, p = null, y = null, R = null;
      for (var j in t)
        if (Re.call(t, j)) {
          var W = t[j];
          if (W == null)
            continue;
          switch (j) {
            case "children":
              c = W;
              break;
            case "selected":
              y = W, ne || (f("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ne = !0);
              break;
            case "dangerouslySetInnerHTML":
              R = W;
              break;
            // eslint-disable-next-line-no-fallthrough
            case "value":
              p = W;
            // We intentionally fallthrough to also set the attribute on the node.
            // eslint-disable-next-line-no-fallthrough
            default:
              ht(e, n, j, W);
              break;
          }
        }
      if (s != null) {
        var X;
        if (p !== null ? (se(p, "value"), X = "" + p) : (R !== null && ($ || ($ = !0, f("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), X = _e(c)), S(s))
          for (var de = 0; de < s.length; de++) {
            se(s[de], "value");
            var De = "" + s[de];
            if (De === X) {
              e.push(bt);
              break;
            }
          }
        else
          se(s, "select.value"), "" + s === X && e.push(bt);
      } else y && e.push(bt);
      return e.push(kt), u(e, R, c), c;
    }
    function wt(e, t, n) {
      nt("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !g && (f("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), g = !0), t.value !== void 0 && t.defaultValue !== void 0 && !h && (f("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), h = !0), e.push(sn("input"));
      var o = null, s = null, c = null, p = null;
      for (var y in t)
        if (Re.call(t, y)) {
          var R = t[y];
          if (R == null)
            continue;
          switch (y) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            case "defaultChecked":
              p = R;
              break;
            case "defaultValue":
              s = R;
              break;
            case "checked":
              c = R;
              break;
            case "value":
              o = R;
              break;
            default:
              ht(e, n, y, R);
              break;
          }
        }
      return c !== null ? ht(e, n, "checked", c) : p !== null && ht(e, n, "checked", p), o !== null ? ht(e, n, "value", o) : s !== null && ht(e, n, "value", s), e.push(a), null;
    }
    function bn(e, t, n) {
      nt("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !T && (f("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), T = !0), e.push(sn("textarea"));
      var o = null, s = null, c = null;
      for (var p in t)
        if (Re.call(t, p)) {
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
              ht(e, n, p, y);
              break;
          }
        }
      if (o === null && s !== null && (o = s), e.push(kt), c != null) {
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
` && e.push(An), o !== null && (se(o, "value"), e.push(Ot("" + o))), null;
    }
    function an(e, t, n, o) {
      e.push(sn(n));
      for (var s in t)
        if (Re.call(t, s)) {
          var c = t[s];
          if (c == null)
            continue;
          switch (s) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(n + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              ht(e, o, s, c);
              break;
          }
        }
      return e.push(a), null;
    }
    function Xn(e, t, n) {
      e.push(sn("menuitem"));
      for (var o in t)
        if (Re.call(t, o)) {
          var s = t[o];
          if (s == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              ht(e, n, o, s);
              break;
          }
        }
      return e.push(kt), null;
    }
    function xn(e, t, n) {
      e.push(sn("title"));
      var o = null;
      for (var s in t)
        if (Re.call(t, s)) {
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
              ht(e, n, s, c);
              break;
          }
        }
      e.push(kt);
      {
        var p = Array.isArray(o) && o.length < 2 ? o[0] || null : o;
        Array.isArray(o) && o.length > 1 ? f("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : p != null && p.$$typeof != null ? f("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : p != null && typeof p != "string" && typeof p != "number" && f("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return o;
    }
    function On(e, t, n, o) {
      e.push(sn(n));
      var s = null, c = null;
      for (var p in t)
        if (Re.call(t, p)) {
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
              ht(e, o, p, y);
              break;
          }
        }
      return e.push(kt), u(e, c, s), typeof s == "string" ? (e.push(Ot(s)), null) : s;
    }
    function un(e, t, n, o) {
      e.push(sn(n));
      var s = null, c = null;
      for (var p in t)
        if (Re.call(t, p)) {
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
              Yn(e, o, y);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              J(p) && typeof y != "function" && typeof y != "symbol" && e.push(jt, p, on, lt(y), St);
              break;
          }
        }
      return e.push(kt), u(e, c, s), s;
    }
    var An = `
`;
    function Ia(e, t, n, o) {
      e.push(sn(n));
      var s = null, c = null;
      for (var p in t)
        if (Re.call(t, p)) {
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
              ht(e, o, p, y);
              break;
          }
        }
      if (e.push(kt), c != null) {
        if (s != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof c != "object" || !("__html" in c))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var R = c.__html;
        R != null && (typeof R == "string" && R.length > 0 && R[0] === `
` ? e.push(An, R) : (we(R), e.push("" + R)));
      }
      return typeof s == "string" && s[0] === `
` && e.push(An), s;
    }
    var Pa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, br = /* @__PURE__ */ new Map();
    function sn(e) {
      var t = br.get(e);
      if (t === void 0) {
        if (!Pa.test(e))
          throw new Error("Invalid tag: " + e);
        t = "<" + e, br.set(e, t);
      }
      return t;
    }
    var Da = "<!DOCTYPE html>";
    function cn(e, t, n, o, s) {
      switch (oe(t, n), st(t, n), Tn(t, n, null), !n.suppressContentEditableWarning && n.contentEditable && n.children != null && f("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), s.insertionMode !== xe && s.insertionMode !== ye && t.indexOf("-") === -1 && typeof n.is != "string" && t.toLowerCase() !== t && f("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
        // Special tags
        case "select":
          return le(e, n, o);
        case "option":
          return xt(e, n, o, s);
        case "textarea":
          return bn(e, n, o);
        case "input":
          return wt(e, n, o);
        case "menuitem":
          return Xn(e, n, o);
        case "title":
          return xn(e, n, o);
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
          return an(e, n, t, o);
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
          return On(e, n, t, o);
        case "html":
          return s.insertionMode === ae && e.push(Da), On(e, n, t, o);
        default:
          return t.indexOf("-") === -1 && typeof n.is != "string" ? On(e, n, t, o) : un(e, n, t, o);
      }
    }
    var Yr = "</", xr = ">";
    function Ne(e, t, n) {
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
          e.push(Yr, t, xr);
      }
    }
    function jn(e, t) {
      for (var n = t.bootstrapChunks, o = 0; o < n.length - 1; o++)
        b(e, n[o]);
      return o < n.length ? C(e, n[o]) : !0;
    }
    var wr = '<template id="', Ln = '"></template>';
    function wn(e, t, n) {
      b(e, wr), b(e, t.placeholderPrefix);
      var o = n.toString(16);
      return b(e, o), C(e, Ln);
    }
    var kr = "<!--$-->", kn = '<!--$?--><template id="', Yt = '"></template>', Gr = "<!--$!-->", ar = "<!--/$-->", Io = "<template", Cr = '"', Po = ' data-dgst="', Fa = ' data-msg="', Ma = ' data-stck="', Er = "></template>";
    function Do(e, t) {
      return C(e, kr);
    }
    function ir(e, t, n) {
      if (b(e, kn), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return b(e, n), C(e, Yt);
    }
    function Xr(e, t, n, o, s) {
      var c;
      return c = C(e, Gr), b(e, Io), n && (b(e, Po), b(e, lt(n)), b(e, Cr)), o && (b(e, Fa), b(e, lt(o)), b(e, Cr)), s && (b(e, Ma), b(e, lt(s)), b(e, Cr)), c = C(e, Er), c;
    }
    function Oa(e, t) {
      return C(e, ar);
    }
    function Zn(e, t) {
      return C(e, ar);
    }
    function Zr(e, t) {
      return C(e, ar);
    }
    var Jr = '<div hidden id="', Jn = '">', sr = "</div>", Tr = '<svg aria-hidden="true" style="display:none" id="', Fo = '">', Mo = "</svg>", Oo = '<math aria-hidden="true" style="display:none" id="', Rr = '">', Ct = "</math>", Ao = '<table hidden id="', _r = '">', Aa = "</table>", jo = '<table hidden><tbody id="', Ir = '">', Lo = "</tbody></table>", Bo = '<table hidden><tr id="', Pr = '">', Dr = "</tr></table>", Uo = '<table hidden><colgroup id="', Ho = '">', Wo = "</colgroup></table>";
    function Qr(e, t, n, o) {
      switch (n.insertionMode) {
        case ae:
        case ve:
          return b(e, Jr), b(e, t.segmentPrefix), b(e, o.toString(16)), C(e, Jn);
        case xe:
          return b(e, Tr), b(e, t.segmentPrefix), b(e, o.toString(16)), C(e, Fo);
        case ye:
          return b(e, Oo), b(e, t.segmentPrefix), b(e, o.toString(16)), C(e, Rr);
        case pe:
          return b(e, Ao), b(e, t.segmentPrefix), b(e, o.toString(16)), C(e, _r);
        // TODO: For the rest of these, there will be extra wrapper nodes that never
        // get deleted from the document. We need to delete the table too as part
        // of the injected scripts. They are invisible though so it's not too terrible
        // and it's kind of an edge case to suspend in a table. Totally supported though.
        case Xe:
          return b(e, jo), b(e, t.segmentPrefix), b(e, o.toString(16)), C(e, Ir);
        case Te:
          return b(e, Bo), b(e, t.segmentPrefix), b(e, o.toString(16)), C(e, Pr);
        case Fe:
          return b(e, Uo), b(e, t.segmentPrefix), b(e, o.toString(16)), C(e, Ho);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function No(e, t) {
      switch (t.insertionMode) {
        case ae:
        case ve:
          return C(e, sr);
        case xe:
          return C(e, Mo);
        case ye:
          return C(e, Ct);
        case pe:
          return C(e, Aa);
        case Xe:
          return C(e, Lo);
        case Te:
          return C(e, Dr);
        case Fe:
          return C(e, Wo);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var i = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", l = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', d = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', m = i + ';$RS("', P = '$RS("', _ = '","', A = '")<\/script>';
    function V(e, t, n) {
      b(e, t.startInlineScript), t.sentCompleteSegmentFunction ? b(e, P) : (t.sentCompleteSegmentFunction = !0, b(e, m)), b(e, t.segmentPrefix);
      var o = n.toString(16);
      return b(e, o), b(e, _), b(e, t.placeholderPrefix), b(e, o), C(e, A);
    }
    var ce = l + ';$RC("', be = '$RC("', Se = '","', $e = '")<\/script>';
    function Et(e, t, n, o) {
      if (b(e, t.startInlineScript), t.sentCompleteBoundaryFunction ? b(e, be) : (t.sentCompleteBoundaryFunction = !0, b(e, ce)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var s = o.toString(16);
      return b(e, n), b(e, Se), b(e, t.segmentPrefix), b(e, s), C(e, $e);
    }
    var Gt = d + ';$RX("', Xt = '$RX("', Fr = '"', zo = ")<\/script>", lr = ",";
    function ds(e, t, n, o, s, c) {
      if (b(e, t.startInlineScript), t.sentClientRenderFunction ? b(e, Xt) : (t.sentClientRenderFunction = !0, b(e, Gt)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return b(e, n), b(e, Fr), (o || s || c) && (b(e, lr), b(e, ja(o || ""))), (s || c) && (b(e, lr), b(e, ja(s || ""))), c && (b(e, lr), b(e, ja(c))), C(e, zo);
    }
    var ps = /[<\u2028\u2029]/g;
    function ja(e) {
      var t = JSON.stringify(e);
      return t.replace(ps, function(n) {
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
    function hs(e, t) {
      var n = G(t);
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
        insertionMode: ve,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function ki(e, t, n, o) {
      return n.generateStaticMarkup ? (e.push(lt(t)), !1) : yn(e, t, n, o);
    }
    function Ci(e, t, n, o) {
      if (!t.generateStaticMarkup)
        return Vn(e, t, n, o);
    }
    function ms(e, t) {
      return t.generateStaticMarkup ? !0 : Do(e);
    }
    function gs(e, t, n, o, s) {
      return t.generateStaticMarkup ? !0 : Xr(e, t, n, o, s);
    }
    function ys(e, t) {
      return t.generateStaticMarkup ? !0 : Oa(e);
    }
    function Ss(e, t) {
      return t.generateStaticMarkup ? !0 : Zr(e);
    }
    var Lt = Object.assign, bs = Symbol.for("react.element"), Ei = Symbol.for("react.portal"), $o = Symbol.for("react.fragment"), Zt = Symbol.for("react.strict_mode"), Ti = Symbol.for("react.profiler"), Vo = Symbol.for("react.provider"), Yo = Symbol.for("react.context"), Go = Symbol.for("react.forward_ref"), Xo = Symbol.for("react.suspense"), Kr = Symbol.for("react.suspense_list"), qr = Symbol.for("react.memo"), Mr = Symbol.for("react.lazy"), La = Symbol.for("react.scope"), Ba = Symbol.for("react.debug_trace_mode"), Ua = Symbol.for("react.legacy_hidden"), Zo = Symbol.for("react.default_value"), Ri = Symbol.iterator, xs = "@@iterator";
    function ws(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ri && e[Ri] || e[xs];
      return typeof t == "function" ? t : null;
    }
    function ks(e, t, n) {
      var o = e.displayName;
      if (o)
        return o;
      var s = t.displayName || t.name || "";
      return s !== "" ? n + "(" + s + ")" : n;
    }
    function Ha(e) {
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
        case $o:
          return "Fragment";
        case Ei:
          return "Portal";
        case Ti:
          return "Profiler";
        case Zt:
          return "StrictMode";
        case Xo:
          return "Suspense";
        case Kr:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Yo:
            var t = e;
            return Ha(t) + ".Consumer";
          case Vo:
            var n = e;
            return Ha(n._context) + ".Provider";
          case Go:
            return ks(e, e.render, "ForwardRef");
          case qr:
            var o = e.displayName || null;
            return o !== null ? o : tt(e.type) || "Memo";
          case Mr: {
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
    var eo = 0, _i, Wa, qe, Or, Na, za, $a;
    function Va() {
    }
    Va.__reactDisabledLog = !0;
    function Ii() {
      {
        if (eo === 0) {
          _i = console.log, Wa = console.info, qe = console.warn, Or = console.error, Na = console.group, za = console.groupCollapsed, $a = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Va,
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
        eo++;
      }
    }
    function Pi() {
      {
        if (eo--, eo === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Lt({}, e, {
              value: _i
            }),
            info: Lt({}, e, {
              value: Wa
            }),
            warn: Lt({}, e, {
              value: qe
            }),
            error: Lt({}, e, {
              value: Or
            }),
            group: Lt({}, e, {
              value: Na
            }),
            groupCollapsed: Lt({}, e, {
              value: za
            }),
            groupEnd: Lt({}, e, {
              value: $a
            })
          });
        }
        eo < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Jo = k.ReactCurrentDispatcher, Qo;
    function to(e, t, n) {
      {
        if (Qo === void 0)
          try {
            throw Error();
          } catch (s) {
            var o = s.stack.trim().match(/\n( *(at )?)/);
            Qo = o && o[1] || "";
          }
        return `
` + Qo + e;
      }
    }
    var Ya = !1, Ar;
    {
      var Ga = typeof WeakMap == "function" ? WeakMap : Map;
      Ar = new Ga();
    }
    function ur(e, t) {
      if (!e || Ya)
        return "";
      {
        var n = Ar.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      Ya = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = Jo.current, Jo.current = null, Ii();
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
            } catch (mt) {
              o = mt;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (mt) {
              o = mt;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (mt) {
            o = mt;
          }
          e();
        }
      } catch (mt) {
        if (mt && o && typeof mt.stack == "string") {
          for (var y = mt.stack.split(`
`), R = o.stack.split(`
`), j = y.length - 1, W = R.length - 1; j >= 1 && W >= 0 && y[j] !== R[W]; )
            W--;
          for (; j >= 1 && W >= 0; j--, W--)
            if (y[j] !== R[W]) {
              if (j !== 1 || W !== 1)
                do
                  if (j--, W--, W < 0 || y[j] !== R[W]) {
                    var X = `
` + y[j].replace(" at new ", " at ");
                    return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)), typeof e == "function" && Ar.set(e, X), X;
                  }
                while (j >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        Ya = !1, Jo.current = c, Pi(), Error.prepareStackTrace = s;
      }
      var de = e ? e.displayName || e.name : "", De = de ? to(de) : "";
      return typeof e == "function" && Ar.set(e, De), De;
    }
    function Xa(e, t, n) {
      return ur(e, !0);
    }
    function no(e, t, n) {
      return ur(e, !1);
    }
    function Cs(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ro(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ur(e, Cs(e));
      if (typeof e == "string")
        return to(e);
      switch (e) {
        case Xo:
          return to("Suspense");
        case Kr:
          return to("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Go:
            return no(e.render);
          case qr:
            return ro(e.type, t, n);
          case Mr: {
            var o = e, s = o._payload, c = o._init;
            try {
              return ro(c(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Di = {}, Za = k.ReactDebugCurrentFrame;
    function Ko(e) {
      if (e) {
        var t = e._owner, n = ro(e.type, e._source, t ? t.type : null);
        Za.setExtraStackFrame(n);
      } else
        Za.setExtraStackFrame(null);
    }
    function qo(e, t, n, o, s) {
      {
        var c = Function.call.bind(Re);
        for (var p in e)
          if (c(e, p)) {
            var y = void 0;
            try {
              if (typeof e[p] != "function") {
                var R = Error((o || "React class") + ": " + n + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              y = e[p](t, p, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              y = j;
            }
            y && !(y instanceof Error) && (Ko(s), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, p, typeof y), Ko(null)), y instanceof Error && !(y.message in Di) && (Di[y.message] = !0, Ko(s), f("Failed %s type: %s", n, y.message), Ko(null));
          }
      }
    }
    var ea;
    ea = {};
    var oo = {};
    Object.freeze(oo);
    function ao(e, t) {
      {
        var n = e.contextTypes;
        if (!n)
          return oo;
        var o = {};
        for (var s in n)
          o[s] = t[s];
        {
          var c = tt(e) || "Unknown";
          qo(n, o, "context", c);
        }
        return o;
      }
    }
    function Fi(e, t, n, o) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var s = tt(t) || "Unknown";
            ea[s] || (ea[s] = !0, f("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return n;
        }
        var c = e.getChildContext();
        for (var p in c)
          if (!(p in o))
            throw new Error((tt(t) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var y = tt(t) || "Unknown";
          qo(o, c, "child context", y);
        }
        return Lt({}, n, c);
      }
    }
    var cr;
    cr = {};
    var ta = null, Qn = null;
    function Ja(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function fr(e) {
      e.context._currentValue2 = e.value;
    }
    function na(e, t) {
      if (e !== t) {
        Ja(e);
        var n = e.parent, o = t.parent;
        if (n === null) {
          if (o !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (o === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          na(n, o);
        }
        fr(t);
      }
    }
    function Kn(e) {
      Ja(e);
      var t = e.parent;
      t !== null && Kn(t);
    }
    function ra(e) {
      var t = e.parent;
      t !== null && ra(t), fr(e);
    }
    function oa(e, t) {
      Ja(e);
      var n = e.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      n.depth === t.depth ? na(n, t) : oa(n, t);
    }
    function io(e, t) {
      var n = t.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === n.depth ? na(e, n) : io(e, n), fr(t);
    }
    function so(e) {
      var t = Qn, n = e;
      t !== n && (t === null ? ra(n) : n === null ? Kn(t) : t.depth === n.depth ? na(t, n) : t.depth > n.depth ? oa(t, n) : io(t, n), Qn = n);
    }
    function Mi(e, t) {
      var n;
      n = e._currentValue2, e._currentValue2 = t, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== cr && f("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = cr;
      var o = Qn, s = {
        parent: o,
        depth: o === null ? 0 : o.depth + 1,
        context: e,
        parentValue: n,
        value: t
      };
      return Qn = s, s;
    }
    function Oi(e) {
      var t = Qn;
      if (t === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      t.context !== e && f("The parent context is not the expected context. This is probably a bug in React.");
      {
        var n = t.parentValue;
        n === Zo ? t.context._currentValue2 = t.context._defaultValue : t.context._currentValue2 = n, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== cr && f("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = cr;
      }
      return Qn = t.parent;
    }
    function Ai() {
      return Qn;
    }
    function qn(e) {
      var t = e._currentValue2;
      return t;
    }
    function Qa(e) {
      return e._reactInternals;
    }
    function Es(e, t) {
      e._reactInternals = t;
    }
    var ji = {}, jr = {}, lo, Ka, aa, ia, sa, Lr, uo, co, la;
    {
      lo = /* @__PURE__ */ new Set(), Ka = /* @__PURE__ */ new Set(), aa = /* @__PURE__ */ new Set(), uo = /* @__PURE__ */ new Set(), ia = /* @__PURE__ */ new Set(), co = /* @__PURE__ */ new Set(), la = /* @__PURE__ */ new Set();
      var fo = /* @__PURE__ */ new Set();
      Lr = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var n = t + "_" + e;
          fo.has(n) || (fo.add(n), f("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, sa = function(e, t) {
        if (t === void 0) {
          var n = tt(e) || "Component";
          ia.has(n) || (ia.add(n), f("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
        }
      };
    }
    function ua(e, t) {
      {
        var n = e.constructor, o = n && tt(n) || "ReactClass", s = o + "." + t;
        if (ji[s])
          return;
        f(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), ji[s] = !0;
      }
    }
    var ca = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, t, n) {
        var o = Qa(e);
        o.queue === null ? ua(e, "setState") : (o.queue.push(t), n != null && Lr(n, "setState"));
      },
      enqueueReplaceState: function(e, t, n) {
        var o = Qa(e);
        o.replace = !0, o.queue = [t], n != null && Lr(n, "setState");
      },
      enqueueForceUpdate: function(e, t) {
        var n = Qa(e);
        n.queue === null ? ua(e, "forceUpdate") : t != null && Lr(t, "setState");
      }
    };
    function qa(e, t, n, o, s) {
      var c = n(s, o);
      sa(t, c);
      var p = c == null ? o : Lt({}, o, c);
      return p;
    }
    function Li(e, t, n) {
      var o = oo, s = e.contextType;
      if ("contextType" in e) {
        var c = (
          // Allow null for conditional declaration
          s === null || s !== void 0 && s.$$typeof === Yo && s._context === void 0
        );
        if (!c && !la.has(e)) {
          la.add(e);
          var p = "";
          s === void 0 ? p = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? p = " However, it is set to a " + typeof s + "." : s.$$typeof === Vo ? p = " Did you accidentally pass the Context.Provider instead?" : s._context !== void 0 ? p = " Did you accidentally pass the Context.Consumer instead?" : p = " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", f("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", tt(e) || "Component", p);
        }
      }
      typeof s == "object" && s !== null ? o = qn(s) : o = n;
      var y = new e(t, o);
      {
        if (typeof e.getDerivedStateFromProps == "function" && (y.state === null || y.state === void 0)) {
          var R = tt(e) || "Component";
          lo.has(R) || (lo.add(R), f("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", R, y.state === null ? "null" : "undefined", R));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var j = null, W = null, X = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? j = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (j = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? W = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (W = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? X = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (X = "UNSAFE_componentWillUpdate"), j !== null || W !== null || X !== null) {
            var de = tt(e) || "Component", De = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            aa.has(de) || (aa.add(de), f(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, de, De, j !== null ? `
  ` + j : "", W !== null ? `
  ` + W : "", X !== null ? `
  ` + X : ""));
          }
        }
      }
      return y;
    }
    function Bi(e, t, n) {
      {
        var o = tt(t) || "Component", s = e.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? f("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : f("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && f("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && f("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), e.propTypes && f("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), e.contextType && f("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), e.contextTypes && f("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !co.has(t) && (co.add(t), f("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof e.componentShouldUpdate == "function" && f("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && f("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", tt(t) || "A pure component"), typeof e.componentDidUnmount == "function" && f("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof e.componentDidReceiveProps == "function" && f("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof e.componentWillRecieveProps == "function" && f("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof e.UNSAFE_componentWillRecieveProps == "function" && f("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var c = e.props !== n;
        e.props !== void 0 && c && f("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), e.defaultProps && f("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !Ka.has(t) && (Ka.add(t), f("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", tt(t))), typeof e.getDerivedStateFromProps == "function" && f("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof e.getDerivedStateFromError == "function" && f("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && f("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var p = e.state;
        p && (typeof p != "object" || S(p)) && f("%s.state: must be set to an object or null", o), typeof e.getChildContext == "function" && typeof t.childContextTypes != "object" && f("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function Ui(e, t) {
      var n = t.state;
      if (typeof t.componentWillMount == "function") {
        if (t.componentWillMount.__suppressDeprecationWarning !== !0) {
          var o = tt(e) || "Unknown";
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
      typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (f("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", tt(e) || "Component"), ca.enqueueReplaceState(t, t.state, null));
    }
    function Ts(e, t, n, o) {
      if (e.queue !== null && e.queue.length > 0) {
        var s = e.queue, c = e.replace;
        if (e.queue = null, e.replace = !1, c && s.length === 1)
          t.state = s[0];
        else {
          for (var p = c ? s[0] : t.state, y = !0, R = c ? 1 : 0; R < s.length; R++) {
            var j = s[R], W = typeof j == "function" ? j.call(t, p, n, o) : j;
            W != null && (y ? (y = !1, p = Lt({}, p, W)) : Lt(p, W));
          }
          t.state = p;
        }
      } else
        e.queue = null;
    }
    function Hi(e, t, n, o) {
      Bi(e, t, n);
      var s = e.state !== void 0 ? e.state : null;
      e.updater = ca, e.props = n, e.state = s;
      var c = {
        queue: [],
        replace: !1
      };
      Es(e, c);
      var p = t.contextType;
      if (typeof p == "object" && p !== null ? e.context = qn(p) : e.context = o, e.state === n) {
        var y = tt(t) || "Component";
        uo.has(y) || (uo.add(y), f("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
      }
      var R = t.getDerivedStateFromProps;
      typeof R == "function" && (e.state = qa(e, t, R, s, n)), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (Ui(t, e), Ts(c, e, n, o));
    }
    var Rs = {
      id: 1,
      overflow: ""
    };
    function _s(e) {
      var t = e.overflow, n = e.id, o = n & ~Is(n);
      return o.toString(32) + t;
    }
    function ei(e, t, n) {
      var o = e.id, s = e.overflow, c = po(o) - 1, p = o & ~(1 << c), y = n + 1, R = po(t) + c;
      if (R > 30) {
        var j = c - c % 5, W = (1 << j) - 1, X = (p & W).toString(32), de = p >> j, De = c - j, mt = po(t) + De, yr = y << De, Sr = yr | de, Nn = X + s;
        return {
          id: 1 << mt | Sr,
          overflow: Nn
        };
      } else {
        var $r = y << c, sl = $r | p, Al = s;
        return {
          id: 1 << R | sl,
          overflow: Al
        };
      }
    }
    function po(e) {
      return 32 - Ps(e);
    }
    function Is(e) {
      return 1 << po(e) - 1;
    }
    var Ps = Math.clz32 ? Math.clz32 : Ds, ti = Math.log, fa = Math.LN2;
    function Ds(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ti(t) / fa | 0) | 0;
    }
    function Fs(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ms = typeof Object.is == "function" ? Object.is : Fs, Bn = null, ni = null, da = null, Qe = null, Jt = !1, Br = !1, dr = 0, Ie = null, er = 0, pa = 25, Qt = !1, Kt;
    function Cn() {
      if (Bn === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Qt && f("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Bn;
    }
    function Os(e, t) {
      if (t === null)
        return f("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Kt), !1;
      e.length !== t.length && f(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Kt, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ms(e[n], t[n]))
          return !1;
      return !0;
    }
    function fn() {
      if (er > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function tr() {
      return Qe === null ? da === null ? (Jt = !1, da = Qe = fn()) : (Jt = !0, Qe = da) : Qe.next === null ? (Jt = !1, Qe = Qe.next = fn()) : (Jt = !0, Qe = Qe.next), Qe;
    }
    function pr(e, t) {
      Bn = t, ni = e, Qt = !1, dr = 0;
    }
    function As(e, t, n, o) {
      for (; Br; )
        Br = !1, dr = 0, er += 1, Qe = null, n = e(t, o);
      return ho(), n;
    }
    function ri() {
      var e = dr !== 0;
      return e;
    }
    function ho() {
      Qt = !1, Bn = null, ni = null, Br = !1, da = null, er = 0, Ie = null, Qe = null;
    }
    function js(e) {
      return Qt && f("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), qn(e);
    }
    function Ls(e) {
      return Kt = "useContext", Cn(), qn(e);
    }
    function ha(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function oi(e) {
      return Kt = "useState", Wi(
        ha,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function Wi(e, t, n) {
      if (e !== ha && (Kt = "useReducer"), Bn = Cn(), Qe = tr(), Jt) {
        var o = Qe.queue, s = o.dispatch;
        if (Ie !== null) {
          var c = Ie.get(o);
          if (c !== void 0) {
            Ie.delete(o);
            var p = Qe.memoizedState, y = c;
            do {
              var R = y.action;
              Qt = !0, p = e(p, R), Qt = !1, y = y.next;
            } while (y !== null);
            return Qe.memoizedState = p, [p, s];
          }
        }
        return [Qe.memoizedState, s];
      } else {
        Qt = !0;
        var j;
        e === ha ? j = typeof t == "function" ? t() : t : j = n !== void 0 ? n(t) : t, Qt = !1, Qe.memoizedState = j;
        var W = Qe.queue = {
          last: null,
          dispatch: null
        }, X = W.dispatch = zi.bind(null, Bn, W);
        return [Qe.memoizedState, X];
      }
    }
    function Ni(e, t) {
      Bn = Cn(), Qe = tr();
      var n = t === void 0 ? null : t;
      if (Qe !== null) {
        var o = Qe.memoizedState;
        if (o !== null && n !== null) {
          var s = o[1];
          if (Os(n, s))
            return o[0];
        }
      }
      Qt = !0;
      var c = e();
      return Qt = !1, Qe.memoizedState = [c, n], c;
    }
    function ai(e) {
      Bn = Cn(), Qe = tr();
      var t = Qe.memoizedState;
      if (t === null) {
        var n = {
          current: e
        };
        return Object.seal(n), Qe.memoizedState = n, n;
      } else
        return t;
    }
    function Bs(e, t) {
      Kt = "useLayoutEffect", f("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function zi(e, t, n) {
      if (er >= pa)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === Bn) {
        Br = !0;
        var o = {
          action: n,
          next: null
        };
        Ie === null && (Ie = /* @__PURE__ */ new Map());
        var s = Ie.get(t);
        if (s === void 0)
          Ie.set(t, o);
        else {
          for (var c = s; c.next !== null; )
            c = c.next;
          c.next = o;
        }
      }
    }
    function $i(e, t) {
      return Ni(function() {
        return e;
      }, t);
    }
    function Us(e, t, n) {
      return Cn(), t(e._source);
    }
    function Hs(e, t, n) {
      if (n === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return n();
    }
    function Ws(e) {
      return Cn(), e;
    }
    function Ns() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function zs() {
      return Cn(), [!1, Ns];
    }
    function $s() {
      var e = ni, t = _s(e.treeContext), n = ii;
      if (n === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var o = dr++;
      return Je(n, t, o);
    }
    function va() {
    }
    var Vi = {
      readContext: js,
      useContext: Ls,
      useMemo: Ni,
      useReducer: Wi,
      useRef: ai,
      useState: oi,
      useInsertionEffect: va,
      useLayoutEffect: Bs,
      useCallback: $i,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: va,
      // Effects are not run in the server environment.
      useEffect: va,
      // Debugging effect
      useDebugValue: va,
      useDeferredValue: Ws,
      useTransition: zs,
      useId: $s,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Us,
      useSyncExternalStore: Hs
    }, ii = null;
    function Yi(e) {
      ii = e;
    }
    function ma(e) {
      try {
        var t = "", n = e;
        do {
          switch (n.tag) {
            case 0:
              t += to(n.type, null, null);
              break;
            case 1:
              t += no(n.type, null, null);
              break;
            case 2:
              t += Xa(n.type, null, null);
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
    var ga = k.ReactCurrentDispatcher, vo = k.ReactDebugCurrentFrame, ya = 0, Ur = 1, Sa = 2, ba = 3, xa = 4, Hr = 0, si = 1, hr = 2, Gi = 12800;
    function Vs(e) {
      return console.error(e), null;
    }
    function Wr() {
    }
    function Nr(e, t, n, o, s, c, p, y, R) {
      var j = [], W = /* @__PURE__ */ new Set(), X = {
        destination: null,
        responseState: t,
        progressiveChunkSize: o === void 0 ? Gi : o,
        status: Hr,
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
        onError: s === void 0 ? Vs : s,
        onAllReady: Wr,
        onShellReady: p === void 0 ? Wr : p,
        onShellError: Wr,
        onFatalError: Wr
      }, de = wa(
        X,
        0,
        null,
        n,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      de.parentFlushed = !0;
      var De = vr(X, e, null, de, W, oo, ta, Rs);
      return j.push(De), X;
    }
    function Ys(e, t) {
      var n = e.pingedTasks;
      n.push(t), n.length === 1 && U(function() {
        return gi(e);
      });
    }
    function Gs(e, t) {
      return {
        id: Mt,
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
    function vr(e, t, n, o, s, c, p, y) {
      e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
      var R = {
        node: t,
        ping: function() {
          return Ys(e, R);
        },
        blockedBoundary: n,
        blockedSegment: o,
        abortSet: s,
        legacyContext: c,
        context: p,
        treeContext: y
      };
      return R.componentStack = null, s.add(R), R;
    }
    function wa(e, t, n, o, s, c) {
      return {
        status: ya,
        id: -1,
        // lazily assigned later
        index: t,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: o,
        boundary: n,
        lastPushedText: s,
        textEmbedded: c
      };
    }
    var Un = null;
    function li() {
      return Un === null || Un.componentStack === null ? "" : ma(Un.componentStack);
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
    function Hn(e, t) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: t
      };
    }
    function En(e) {
      e.componentStack === null ? f("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var Wn = null;
    function ka(e, t) {
      {
        var n;
        typeof t == "string" ? n = t : t && typeof t.message == "string" ? n = t.message : n = String(t);
        var o = Wn || li();
        Wn = null, e.errorMessage = n, e.errorComponentStack = o;
      }
    }
    function go(e, t) {
      var n = e.onError(t);
      if (n != null && typeof n != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
      return n;
    }
    function dn(e, t) {
      var n = e.onShellError;
      n(t);
      var o = e.onFatalError;
      o(t), e.destination !== null ? (e.status = hr, Q(e.destination, t)) : (e.status = si, e.fatalError = t);
    }
    function yo(e, t, n) {
      mr(t, "Suspense");
      var o = t.blockedBoundary, s = t.blockedSegment, c = n.fallback, p = n.children, y = /* @__PURE__ */ new Set(), R = Gs(e, y), j = s.chunks.length, W = wa(
        e,
        j,
        R,
        s.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      s.children.push(W), s.lastPushedText = !1;
      var X = wa(
        e,
        0,
        null,
        s.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      X.parentFlushed = !0, t.blockedBoundary = R, t.blockedSegment = X;
      try {
        if (Tt(e, t, p), Ci(X.chunks, e.responseState, X.lastPushedText, X.textEmbedded), X.status = Ur, zr(R, X), R.pendingTasks === 0) {
          En(t);
          return;
        }
      } catch (De) {
        X.status = xa, R.forceClientRender = !0, R.errorDigest = go(e, De), ka(R, De);
      } finally {
        t.blockedBoundary = o, t.blockedSegment = s;
      }
      var de = vr(e, c, o, W, y, t.legacyContext, t.context, t.treeContext);
      de.componentStack = t.componentStack, e.pingedTasks.push(de), En(t);
    }
    function ui(e, t, n, o) {
      mr(t, n);
      var s = t.blockedSegment, c = cn(s.chunks, n, o, e.responseState, s.formatContext);
      s.lastPushedText = !1;
      var p = s.formatContext;
      s.formatContext = $t(p, n, o), Tt(e, t, c), s.formatContext = p, Ne(s.chunks, n), s.lastPushedText = !1, En(t);
    }
    function So(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function bo(e, t, n, o, s) {
      var c = {};
      pr(t, c);
      var p = n(o, s);
      return As(n, o, p, s);
    }
    function Xi(e, t, n, o, s) {
      var c = n.render();
      n.props !== s && (fi || f("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", tt(o) || "a component"), fi = !0);
      {
        var p = o.childContextTypes;
        if (p != null) {
          var y = t.legacyContext, R = Fi(n, o, y, p);
          t.legacyContext = R, qt(e, t, c), t.legacyContext = y;
          return;
        }
      }
      qt(e, t, c);
    }
    function Xs(e, t, n, o) {
      Hn(t, n);
      var s = ao(n, t.legacyContext), c = Li(n, o, s);
      Hi(c, n, o, s), Xi(e, t, c, n, o), En(t);
    }
    var Zi = {}, xo = {}, ci = {}, Ji = {}, fi = !1, wo = {}, di = !1, pi = !1, hi = !1;
    function Qi(e, t, n, o) {
      var s;
      if (s = ao(n, t.legacyContext), mo(t, n), n.prototype && typeof n.prototype.render == "function") {
        var c = tt(n) || "Unknown";
        Zi[c] || (f("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", c, c), Zi[c] = !0);
      }
      var p = bo(e, t, n, o, s), y = ri();
      if (typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var R = tt(n) || "Unknown";
        xo[R] || (f("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), xo[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var j = tt(n) || "Unknown";
          xo[j] || (f("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", j, j, j), xo[j] = !0);
        }
        Hi(p, n, o, s), Xi(e, t, p, n, o);
      } else if (Ki(n), y) {
        var W = t.treeContext, X = 1, de = 0;
        t.treeContext = ei(W, X, de);
        try {
          qt(e, t, p);
        } finally {
          t.treeContext = W;
        }
      } else
        qt(e, t, p);
      En(t);
    }
    function Ki(e) {
      {
        if (e && e.childContextTypes && f("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), e.defaultProps !== void 0) {
          var t = tt(e) || "Unknown";
          wo[t] || (f("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", t), wo[t] = !0);
        }
        if (typeof e.getDerivedStateFromProps == "function") {
          var n = tt(e) || "Unknown";
          Ji[n] || (f("%s: Function components do not support getDerivedStateFromProps.", n), Ji[n] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var o = tt(e) || "Unknown";
          ci[o] || (f("%s: Function components do not support contextType.", o), ci[o] = !0);
        }
      }
    }
    function vi(e, t) {
      if (e && e.defaultProps) {
        var n = Lt({}, t), o = e.defaultProps;
        for (var s in o)
          n[s] === void 0 && (n[s] = o[s]);
        return n;
      }
      return t;
    }
    function qi(e, t, n, o, s) {
      mo(t, n.render);
      var c = bo(e, t, n.render, o, s), p = ri();
      if (p) {
        var y = t.treeContext, R = 1, j = 0;
        t.treeContext = ei(y, R, j);
        try {
          qt(e, t, c);
        } finally {
          t.treeContext = y;
        }
      } else
        qt(e, t, c);
      En(t);
    }
    function Zs(e, t, n, o, s) {
      var c = n.type, p = vi(c, o);
      mi(e, t, c, p, s);
    }
    function Js(e, t, n, o) {
      n._context === void 0 ? n !== n.Consumer && (hi || (hi = !0, f("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : n = n._context;
      var s = o.children;
      typeof s != "function" && f("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var c = qn(n), p = s(c);
      qt(e, t, p);
    }
    function es(e, t, n, o) {
      var s = n._context, c = o.value, p = o.children, y;
      y = t.context, t.context = Mi(s, c), qt(e, t, p), t.context = Oi(s), y !== t.context && f("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Qs(e, t, n, o, s) {
      mr(t, "Lazy");
      var c = n._payload, p = n._init, y = p(c), R = vi(y, o);
      mi(e, t, y, R, s), En(t);
    }
    function mi(e, t, n, o, s) {
      if (typeof n == "function")
        if (So(n)) {
          Xs(e, t, n, o);
          return;
        } else {
          Qi(e, t, n, o);
          return;
        }
      if (typeof n == "string") {
        ui(e, t, n, o);
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
        case Ua:
        case Ba:
        case Zt:
        case Ti:
        case $o: {
          qt(e, t, o.children);
          return;
        }
        case Kr: {
          mr(t, "SuspenseList"), qt(e, t, o.children), En(t);
          return;
        }
        case La:
          throw new Error("ReactDOMServer does not yet support scope components.");
        // eslint-disable-next-line-no-fallthrough
        case Xo: {
          yo(e, t, o);
          return;
        }
      }
      if (typeof n == "object" && n !== null)
        switch (n.$$typeof) {
          case Go: {
            qi(e, t, n, o, s);
            return;
          }
          case qr: {
            Zs(e, t, n, o, s);
            return;
          }
          case Vo: {
            es(e, t, n, o);
            return;
          }
          case Yo: {
            Js(e, t, n, o);
            return;
          }
          case Mr: {
            Qs(e, t, n, o);
            return;
          }
        }
      var c = "";
      throw (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (n == null ? n : typeof n) + "." + c));
    }
    function Ks(e, t) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (di || f("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), di = !0), e.entries === t && (pi || f("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), pi = !0);
    }
    function qt(e, t, n) {
      try {
        return qs(e, t, n);
      } catch (o) {
        throw typeof o == "object" && o !== null && typeof o.then == "function" || (Wn = Wn !== null ? Wn : li()), o;
      }
    }
    function qs(e, t, n) {
      if (t.node = n, typeof n == "object" && n !== null) {
        switch (n.$$typeof) {
          case bs: {
            var o = n, s = o.type, c = o.props, p = o.ref;
            mi(e, t, s, c, p);
            return;
          }
          case Ei:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          // eslint-disable-next-line-no-fallthrough
          case Mr: {
            var y = n, R = y._payload, j = y._init, W;
            try {
              W = j(R);
            } catch ($r) {
              throw typeof $r == "object" && $r !== null && typeof $r.then == "function" && mr(t, "Lazy"), $r;
            }
            qt(e, t, W);
            return;
          }
        }
        if (S(n)) {
          Ca(e, t, n);
          return;
        }
        var X = ws(n);
        if (X) {
          Ks(n, X);
          var de = X.call(n);
          if (de) {
            var De = de.next();
            if (!De.done) {
              var mt = [];
              do
                mt.push(De.value), De = de.next();
              while (!De.done);
              Ca(e, t, mt);
              return;
            }
            return;
          }
        }
        var yr = Object.prototype.toString.call(n);
        throw new Error("Objects are not valid as a React child (found: " + (yr === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : yr) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof n == "string") {
        var Sr = t.blockedSegment;
        Sr.lastPushedText = ki(t.blockedSegment.chunks, n, e.responseState, Sr.lastPushedText);
        return;
      }
      if (typeof n == "number") {
        var Nn = t.blockedSegment;
        Nn.lastPushedText = ki(t.blockedSegment.chunks, "" + n, e.responseState, Nn.lastPushedText);
        return;
      }
      typeof n == "function" && f("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function Ca(e, t, n) {
      for (var o = n.length, s = 0; s < o; s++) {
        var c = t.treeContext;
        t.treeContext = ei(c, o, s);
        try {
          Tt(e, t, n[s]);
        } finally {
          t.treeContext = c;
        }
      }
    }
    function el(e, t, n) {
      var o = t.blockedSegment, s = o.chunks.length, c = wa(
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
      var p = vr(e, t.node, t.blockedBoundary, c, t.abortSet, t.legacyContext, t.context, t.treeContext);
      t.componentStack !== null && (p.componentStack = t.componentStack.parent);
      var y = p.ping;
      n.then(y, y);
    }
    function Tt(e, t, n) {
      var o = t.blockedSegment.formatContext, s = t.legacyContext, c = t.context, p = null;
      p = t.componentStack;
      try {
        return qt(e, t, n);
      } catch (y) {
        if (ho(), typeof y == "object" && y !== null && typeof y.then == "function") {
          el(e, t, y), t.blockedSegment.formatContext = o, t.legacyContext = s, t.context = c, so(c), t.componentStack = p;
          return;
        } else
          throw t.blockedSegment.formatContext = o, t.legacyContext = s, t.context = c, so(c), t.componentStack = p, y;
      }
    }
    function tl(e, t, n, o) {
      var s = go(e, o);
      if (t === null ? dn(e, o) : (t.pendingTasks--, t.forceClientRender || (t.forceClientRender = !0, t.errorDigest = s, ka(t, o), t.parentFlushed && e.clientRenderedBoundaries.push(t))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var c = e.onAllReady;
        c();
      }
    }
    function ts(e) {
      var t = this, n = e.blockedBoundary, o = e.blockedSegment;
      o.status = ba, rs(t, n, o);
    }
    function ns(e, t, n) {
      var o = e.blockedBoundary, s = e.blockedSegment;
      if (s.status = ba, o === null)
        t.allPendingTasks--, t.status !== hr && (t.status = hr, t.destination !== null && D(t.destination));
      else {
        if (o.pendingTasks--, !o.forceClientRender) {
          o.forceClientRender = !0;
          var c = n === void 0 ? new Error("The render was aborted by the server without a reason.") : n;
          o.errorDigest = t.onError(c);
          {
            var p = "The server did not finish this Suspense boundary: ";
            c && typeof c.message == "string" ? c = p + c.message : c = p + String(c);
            var y = Un;
            Un = e;
            try {
              ka(o, c);
            } finally {
              Un = y;
            }
          }
          o.parentFlushed && t.clientRenderedBoundaries.push(o);
        }
        if (o.fallbackAbortableTasks.forEach(function(j) {
          return ns(j, t, n);
        }), o.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0) {
          var R = t.onAllReady;
          R();
        }
      }
    }
    function zr(e, t) {
      if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
        var n = t.children[0];
        n.id = t.id, n.parentFlushed = !0, n.status === Ur && zr(e, n);
      } else {
        var o = e.completedSegments;
        o.push(t);
      }
    }
    function rs(e, t, n) {
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
          n.parentFlushed && n.status === Ur && zr(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(ts, e), t.fallbackAbortableTasks.clear();
        else if (n.parentFlushed && n.status === Ur) {
          zr(t, n);
          var s = t.completedSegments;
          s.length === 1 && t.parentFlushed && e.partialBoundaries.push(t);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var c = e.onAllReady;
        c();
      }
    }
    function nl(e, t) {
      var n = t.blockedSegment;
      if (n.status === ya) {
        so(t.context);
        var o = null;
        o = Un, Un = t;
        try {
          qt(e, t, t.node), Ci(n.chunks, e.responseState, n.lastPushedText, n.textEmbedded), t.abortSet.delete(t), n.status = Ur, rs(e, t.blockedBoundary, n);
        } catch (c) {
          if (ho(), typeof c == "object" && c !== null && typeof c.then == "function") {
            var s = t.ping;
            c.then(s, s);
          } else
            t.abortSet.delete(t), n.status = xa, tl(e, t.blockedBoundary, n, c);
        } finally {
          Un = o;
        }
      }
    }
    function gi(e) {
      if (e.status !== hr) {
        var t = Ai(), n = ga.current;
        ga.current = Vi;
        var o;
        o = vo.getCurrentStack, vo.getCurrentStack = li;
        var s = ii;
        Yi(e.responseState);
        try {
          var c = e.pingedTasks, p;
          for (p = 0; p < c.length; p++) {
            var y = c[p];
            nl(e, y);
          }
          c.splice(0, p), e.destination !== null && Ta(e, e.destination);
        } catch (R) {
          go(e, R), dn(e, R);
        } finally {
          Yi(s), ga.current = n, vo.getCurrentStack = o, n === Vi && so(t);
        }
      }
    }
    function gr(e, t, n) {
      switch (n.parentFlushed = !0, n.status) {
        case ya: {
          var o = n.id = e.nextSegmentId++;
          return n.lastPushedText = !1, n.textEmbedded = !1, wn(t, e.responseState, o);
        }
        case Ur: {
          n.status = Sa;
          for (var s = !0, c = n.chunks, p = 0, y = n.children, R = 0; R < y.length; R++) {
            for (var j = y[R]; p < j.index; p++)
              b(t, c[p]);
            s = ko(e, t, j);
          }
          for (; p < c.length - 1; p++)
            b(t, c[p]);
          return p < c.length && (s = C(t, c[p])), s;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function ko(e, t, n) {
      var o = n.boundary;
      if (o === null)
        return gr(e, t, n);
      if (o.parentFlushed = !0, o.forceClientRender)
        return gs(t, e.responseState, o.errorDigest, o.errorMessage, o.errorComponentStack), gr(e, t, n), Ss(t, e.responseState);
      if (o.pendingTasks > 0) {
        o.rootSegmentID = e.nextSegmentId++, o.completedSegments.length > 0 && e.partialBoundaries.push(o);
        var s = o.id = Ze(e.responseState);
        return ir(t, e.responseState, s), gr(e, t, n), Zn(t, e.responseState);
      } else {
        if (o.byteSize > e.progressiveChunkSize)
          return o.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(o), ir(t, e.responseState, o.id), gr(e, t, n), Zn(t, e.responseState);
        ms(t, e.responseState);
        var c = o.completedSegments;
        if (c.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var p = c[0];
        return ko(e, t, p), ys(t, e.responseState);
      }
    }
    function rl(e, t, n) {
      return ds(t, e.responseState, n.id, n.errorDigest, n.errorMessage, n.errorComponentStack);
    }
    function yi(e, t, n) {
      return Qr(t, e.responseState, n.formatContext, n.id), ko(e, t, n), No(t, n.formatContext);
    }
    function Co(e, t, n) {
      for (var o = n.completedSegments, s = 0; s < o.length; s++) {
        var c = o[s];
        os(e, t, n, c);
      }
      return o.length = 0, Et(t, e.responseState, n.id, n.rootSegmentID);
    }
    function Ea(e, t, n) {
      for (var o = n.completedSegments, s = 0; s < o.length; s++) {
        var c = o[s];
        if (!os(e, t, n, c))
          return s++, o.splice(0, s), !1;
      }
      return o.splice(0, s), !0;
    }
    function os(e, t, n, o) {
      if (o.status === Sa)
        return !0;
      var s = o.id;
      if (s === -1) {
        var c = o.id = n.rootSegmentID;
        if (c === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return yi(e, t, o);
      } else
        return yi(e, t, o), V(t, e.responseState, s);
    }
    function Ta(e, t) {
      try {
        var n = e.completedRootSegment;
        n !== null && e.pendingRootTasks === 0 && (ko(e, t, n), e.completedRootSegment = null, jn(t, e.responseState));
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
          if (!Co(e, t, y)) {
            e.destination = null, s++, p.splice(0, s);
            return;
          }
        }
        p.splice(0, s);
        var R = e.partialBoundaries;
        for (s = 0; s < R.length; s++) {
          var j = R[s];
          if (!Ea(e, t, j)) {
            e.destination = null, s++, R.splice(0, s);
            return;
          }
        }
        R.splice(0, s);
        var W = e.completedBoundaries;
        for (s = 0; s < W.length; s++) {
          var X = W[s];
          if (!Co(e, t, X)) {
            e.destination = null, s++, W.splice(0, s);
            return;
          }
        }
        W.splice(0, s);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && f("There was still abortable task at the root when we closed. This is a bug in React."), D(t));
      }
    }
    function as(e) {
      U(function() {
        return gi(e);
      });
    }
    function ol(e, t) {
      if (e.status === si) {
        e.status = hr, Q(t, e.fatalError);
        return;
      }
      if (e.status !== hr && e.destination === null) {
        e.destination = t;
        try {
          Ta(e, t);
        } catch (n) {
          go(e, n), dn(e, n);
        }
      }
    }
    function is(e, t) {
      try {
        var n = e.abortableTasks;
        n.forEach(function(o) {
          return ns(o, e, t);
        }), n.clear(), e.destination !== null && Ta(e, e.destination);
      } catch (o) {
        go(e, o), dn(e, o);
      }
    }
    function Si() {
    }
    function ss(e, t, n, o) {
      var s = !1, c = null, p = "", y = {
        push: function(X) {
          return X !== null && (p += X), !0;
        },
        destroy: function(X) {
          s = !0, c = X;
        }
      }, R = !1;
      function j() {
        R = !0;
      }
      var W = Nr(e, hs(n, t ? t.identifierPrefix : void 0), vs(), 1 / 0, Si, void 0, j);
      if (as(W), is(W, o), ol(W, y), s)
        throw c;
      if (!R)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return p;
    }
    function al(e, t) {
      return ss(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function ls(e, t) {
      return ss(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function il() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function r() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    To.renderToNodeStream = il, To.renderToStaticMarkup = ls, To.renderToStaticNodeStream = r, To.renderToString = al, To.version = v;
  }()), To;
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
var wl;
function Vl() {
  return wl || (wl = 1, process.env.NODE_ENV !== "production" && function() {
    var w = Bt, v = "18.3.1", k = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        M("warn", r, t);
      }
    }
    function f(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        M("error", r, t);
      }
    }
    function M(r, e, t) {
      {
        var n = k.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (e += "%s", t = t.concat([o]));
        var s = t.map(function(c) {
          return String(c);
        });
        s.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, s);
      }
    }
    function U(r) {
      r();
    }
    var L = 512, b = null, C = 0;
    function N(r) {
      b = new Uint8Array(L), C = 0;
    }
    function D(r, e) {
      if (e.length !== 0) {
        if (e.length > L) {
          C > 0 && (r.enqueue(new Uint8Array(b.buffer, 0, C)), b = new Uint8Array(L), C = 0), r.enqueue(e);
          return;
        }
        var t = e, n = b.length - C;
        n < t.length && (n === 0 ? r.enqueue(b) : (b.set(t.subarray(0, n), C), r.enqueue(b), t = t.subarray(n)), b = new Uint8Array(L), C = 0), b.set(t, C), C += t.length;
      }
    }
    function B(r, e) {
      return D(r, e), !0;
    }
    function ie(r) {
      b && C > 0 && (r.enqueue(new Uint8Array(b.buffer, 0, C)), b = null, C = 0);
    }
    function Q(r) {
      r.close();
    }
    var re = new TextEncoder();
    function z(r) {
      return re.encode(r);
    }
    function F(r) {
      return re.encode(r);
    }
    function se(r, e) {
      typeof r.error == "function" ? r.error(e) : r.close();
    }
    function Le(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function we(r) {
      try {
        return Re(r), !1;
      } catch {
        return !0;
      }
    }
    function Re(r) {
      return "" + r;
    }
    function Pe(r, e) {
      if (we(r))
        return f("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", e, Le(r)), Re(r);
    }
    function ge(r, e) {
      if (we(r))
        return f("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", e, Le(r)), Re(r);
    }
    function ot(r) {
      if (we(r))
        return f("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Le(r)), Re(r);
    }
    var me = Object.prototype.hasOwnProperty, ft = 0, Be = 1, ze = 2, Z = 3, q = 4, Me = 5, he = 6, Oe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", J = Oe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ee = new RegExp("^[" + Oe + "][" + J + "]*$"), ut = {}, ke = {};
    function Ae(r) {
      return me.call(ke, r) ? !0 : me.call(ut, r) ? !1 : Ee.test(r) ? (ke[r] = !0, !0) : (ut[r] = !0, f("Invalid attribute name: `%s`", r), !1);
    }
    function Ht(r, e, t, n) {
      if (t !== null && t.type === ft)
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
    function _t(r) {
      return je.hasOwnProperty(r) ? je[r] : null;
    }
    function Ve(r, e, t, n, o, s, c) {
      this.acceptsBooleans = e === ze || e === Z || e === q, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = t, this.propertyName = r, this.type = e, this.sanitizeURL = s, this.removeEmptyString = c;
    }
    var je = {}, Ye = [
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
    Ye.forEach(function(r) {
      je[r] = new Ve(
        r,
        ft,
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
      je[e] = new Ve(
        e,
        Be,
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
      je[r] = new Ve(
        r,
        ze,
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
      je[r] = new Ve(
        r,
        ze,
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
      je[r] = new Ve(
        r,
        Z,
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
      je[r] = new Ve(
        r,
        Z,
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
      je[r] = new Ve(
        r,
        q,
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
      je[r] = new Ve(
        r,
        he,
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
      je[r] = new Ve(
        r,
        Me,
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
    var gt = /[\-\:]([a-z])/g, at = function(r) {
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
      var e = r.replace(gt, at);
      je[e] = new Ve(
        e,
        Be,
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
      var e = r.replace(gt, at);
      je[e] = new Ve(
        e,
        Be,
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
      var e = r.replace(gt, at);
      je[e] = new Ve(
        e,
        Be,
        !1,
        // mustUseProperty
        r,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(r) {
      je[r] = new Ve(
        r,
        Be,
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
    var ct = "xlinkHref";
    je[ct] = new Ve(
      "xlinkHref",
      Be,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(r) {
      je[r] = new Ve(
        r,
        Be,
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
    function It(r, e) {
      return r + e.charAt(0).toUpperCase() + e.substring(1);
    }
    var Ke = ["Webkit", "ms", "Moz", "O"];
    Object.keys(nt).forEach(function(r) {
      Ke.forEach(function(e) {
        nt[It(e, r)] = nt[r];
      });
    });
    var it = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function K(r, e) {
      it[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || f("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), e.onChange || e.readOnly || e.disabled || e.checked == null || f("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ee(r, e) {
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
    var te = {
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
    }, Y = {}, oe = new RegExp("^(aria)-[" + J + "]*$"), fe = new RegExp("^(aria)[A-Z][" + J + "]*$");
    function st(r, e) {
      {
        if (me.call(Y, e) && Y[e])
          return !0;
        if (fe.test(e)) {
          var t = "aria-" + e.slice(4).toLowerCase(), n = te.hasOwnProperty(t) ? t : null;
          if (n == null)
            return f("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", e), Y[e] = !0, !0;
          if (e !== n)
            return f("Invalid ARIA attribute `%s`. Did you mean `%s`?", e, n), Y[e] = !0, !0;
        }
        if (oe.test(e)) {
          var o = e.toLowerCase(), s = te.hasOwnProperty(o) ? o : null;
          if (s == null)
            return Y[e] = !0, !1;
          if (e !== s)
            return f("Unknown ARIA attribute `%s`. Did you mean `%s`?", e, s), Y[e] = !0, !0;
        }
      }
      return !0;
    }
    function Ue(r, e) {
      {
        var t = [];
        for (var n in e) {
          var o = st(r, n);
          o || t.push(n);
        }
        var s = t.map(function(c) {
          return "`" + c + "`";
        }).join(", ");
        t.length === 1 ? f("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, r) : t.length > 1 && f("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, r);
      }
    }
    function rt(r, e) {
      ee(r, e) || Ue(r, e);
    }
    var Ge = !1;
    function Wt(r, e) {
      {
        if (r !== "input" && r !== "textarea" && r !== "select")
          return;
        e != null && e.value === null && !Ge && (Ge = !0, r === "select" && e.multiple ? f("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", r) : f("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", r));
      }
    }
    var Nt = {
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
    }, en = function() {
    };
    {
      var He = {}, vt = /^on./, Tn = /^on[^A-Z]/, $n = new RegExp("^(aria)-[" + J + "]*$"), Rn = new RegExp("^(aria)[A-Z][" + J + "]*$");
      en = function(r, e, t, n) {
        if (me.call(He, e) && He[e])
          return !0;
        var o = e.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return f("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), He[e] = !0, !0;
        if (n != null) {
          var s = n.registrationNameDependencies, c = n.possibleRegistrationNames;
          if (s.hasOwnProperty(e))
            return !0;
          var p = c.hasOwnProperty(o) ? c[o] : null;
          if (p != null)
            return f("Invalid event handler property `%s`. Did you mean `%s`?", e, p), He[e] = !0, !0;
          if (vt.test(e))
            return f("Unknown event handler property `%s`. It will be ignored.", e), He[e] = !0, !0;
        } else if (vt.test(e))
          return Tn.test(e) && f("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", e), He[e] = !0, !0;
        if ($n.test(e) || Rn.test(e))
          return !0;
        if (o === "innerhtml")
          return f("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), He[e] = !0, !0;
        if (o === "aria")
          return f("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), He[e] = !0, !0;
        if (o === "is" && t !== null && t !== void 0 && typeof t != "string")
          return f("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof t), He[e] = !0, !0;
        if (typeof t == "number" && isNaN(t))
          return f("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", e), He[e] = !0, !0;
        var y = _t(e), R = y !== null && y.type === ft;
        if (Nt.hasOwnProperty(o)) {
          var j = Nt[o];
          if (j !== e)
            return f("Invalid DOM property `%s`. Did you mean `%s`?", e, j), He[e] = !0, !0;
        } else if (!R && e !== o)
          return f("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", e, o), He[e] = !0, !0;
        return typeof t == "boolean" && Ht(e, t, y) ? (t ? f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', t, e, e, t, e) : f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', t, e, e, t, e, e, e), He[e] = !0, !0) : R ? !0 : Ht(e, t, y) ? (He[e] = !0, !1) : ((t === "false" || t === "true") && y !== null && y.type === Z && (f("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", t, e, t === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', e, t), He[e] = !0), !0);
      };
    }
    var hn = function(r, e, t) {
      {
        var n = [];
        for (var o in e) {
          var s = en(r, o, e[o], t);
          s || n.push(o);
        }
        var c = n.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        n.length === 1 ? f("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, r) : n.length > 1 && f("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, r);
      }
    };
    function nr(r, e, t) {
      ee(r, e) || hn(r, e, t);
    }
    var _n = function() {
    };
    {
      var tn = /^(?:webkit|moz|o)[A-Z]/, In = /^-ms-/, vn = /-(.)/g, dt = /;\s*$/, pt = {}, Pt = {}, Ce = !1, zt = !1, mn = function(r) {
        return r.replace(vn, function(e, t) {
          return t.toUpperCase();
        });
      }, nn = function(r) {
        pt.hasOwnProperty(r) && pt[r] || (pt[r] = !0, f(
          "Unsupported style property %s. Did you mean %s?",
          r,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          mn(r.replace(In, "ms-"))
        ));
      }, Dt = function(r) {
        pt.hasOwnProperty(r) && pt[r] || (pt[r] = !0, f("Unsupported vendor-prefixed style property %s. Did you mean %s?", r, r.charAt(0).toUpperCase() + r.slice(1)));
      }, ln = function(r, e) {
        Pt.hasOwnProperty(e) && Pt[e] || (Pt[e] = !0, f(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, r, e.replace(dt, "")));
      }, Ft = function(r, e) {
        Ce || (Ce = !0, f("`NaN` is an invalid value for the `%s` css style property.", r));
      }, lt = function(r, e) {
        zt || (zt = !0, f("`Infinity` is an invalid value for the `%s` css style property.", r));
      };
      _n = function(r, e) {
        r.indexOf("-") > -1 ? nn(r) : tn.test(r) ? Dt(r) : dt.test(e) && ln(r, e), typeof e == "number" && (isNaN(e) ? Ft(r, e) : isFinite(e) || lt(r, e));
      };
    }
    var Pn = _n, gn = /["'&<>]/;
    function Dn(r) {
      ot(r);
      var e = "" + r, t = gn.exec(e);
      if (!t)
        return e;
      var n, o = "", s, c = 0;
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
        c !== s && (o += e.substring(c, s)), c = s + 1, o += n;
      }
      return c !== s ? o + e.substring(c, s) : o;
    }
    function et(r) {
      return typeof r == "boolean" || typeof r == "number" ? "" + r : Dn(r);
    }
    var Fn = /([A-Z])/g, rr = /^ms-/;
    function or(r) {
      return r.replace(Fn, "-$1").toLowerCase().replace(rr, "-ms-");
    }
    var S = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, H = !1;
    function G(r) {
      !H && S.test(r) && (H = !0, f("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(r)));
    }
    var ae = Array.isArray;
    function ve(r) {
      return ae(r);
    }
    var xe = F("<script>"), ye = F("<\/script>"), pe = F('<script src="'), Xe = F('<script type="module" src="'), Te = F('" async=""><\/script>');
    function Fe(r) {
      return ot(r), ("" + r).replace(We, $t);
    }
    var We = /(<\/|<)(s)(cript)/gi, $t = function(r, e, t, n) {
      return "" + e + (t === "s" ? "\\u0073" : "\\u0053") + n;
    };
    function Mt(r, e, t, n, o) {
      var s = r === void 0 ? "" : r, c = e === void 0 ? xe : F('<script nonce="' + et(e) + '">'), p = [];
      if (t !== void 0 && p.push(c, z(Fe(t)), ye), n !== void 0)
        for (var y = 0; y < n.length; y++)
          p.push(pe, z(et(n[y])), Te);
      if (o !== void 0)
        for (var R = 0; R < o.length; R++)
          p.push(Xe, z(et(o[R])), Te);
      return {
        bootstrapChunks: p,
        startInlineScript: c,
        placeholderPrefix: F(s + "P:"),
        segmentPrefix: F(s + "S:"),
        boundaryPrefix: s + "B:",
        idPrefix: s,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Ze = 0, Je = 1, Ot = 2, At = 3, yn = 4, Vn = 5, Vt = 6, rn = 7;
    function yt(r, e) {
      return {
        insertionMode: r,
        selectedValue: e
      };
    }
    function Sn(r) {
      var e = r === "http://www.w3.org/2000/svg" ? Ot : r === "http://www.w3.org/1998/Math/MathML" ? At : Ze;
      return yt(e, null);
    }
    function Mn(r, e, t) {
      switch (e) {
        case "select":
          return yt(Je, t.value != null ? t.value : t.defaultValue);
        case "svg":
          return yt(Ot, null);
        case "math":
          return yt(At, null);
        case "foreignObject":
          return yt(Je, null);
        // Table parents are special in that their children can only be created at all if they're
        // wrapped in a table parent. So we need to encode that we're entering this mode.
        case "table":
          return yt(yn, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return yt(Vn, null);
        case "colgroup":
          return yt(rn, null);
        case "tr":
          return yt(Vt, null);
      }
      return r.insertionMode >= yn || r.insertionMode === Ze ? yt(Je, null) : r;
    }
    var Yn = null;
    function jt(r) {
      var e = r.nextSuspenseID++;
      return F(r.boundaryPrefix + e.toString(16));
    }
    function on(r, e, t) {
      var n = r.idPrefix, o = ":" + n + "R" + e;
      return t > 0 && (o += "H" + t.toString(32)), o + ":";
    }
    function St(r) {
      return et(r);
    }
    var Gn = F("<!-- -->");
    function ht(r, e, t, n) {
      return e === "" ? n : (n && r.push(Gn), r.push(z(St(e))), !0);
    }
    function kt(r, e, t, n) {
      t && n && r.push(Gn);
    }
    var a = /* @__PURE__ */ new Map();
    function u(r) {
      var e = a.get(r);
      if (e !== void 0)
        return e;
      var t = F(et(or(r)));
      return a.set(r, t), t;
    }
    var h = F(' style="'), g = F(":"), I = F(";");
    function T(r, e, t) {
      if (typeof t != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var n = !0;
      for (var o in t)
        if (me.call(t, o)) {
          var s = t[o];
          if (!(s == null || typeof s == "boolean" || s === "")) {
            var c = void 0, p = void 0, y = o.indexOf("--") === 0;
            y ? (c = z(et(o)), ge(s, o), p = z(et(("" + s).trim()))) : (Pn(o, s), c = u(o), typeof s == "number" ? s !== 0 && !me.call(nt, o) ? p = z(s + "px") : p = z("" + s) : (ge(s, o), p = z(et(("" + s).trim())))), n ? (n = !1, r.push(h, c, g, p)) : r.push(I, c, g, p);
          }
        }
      n || r.push(ne);
    }
    var O = F(" "), $ = F('="'), ne = F('"'), ue = F('=""');
    function le(r, e, t, n) {
      switch (t) {
        case "style": {
          T(r, e, n);
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
        var o = _t(t);
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
          var s = o.attributeName, c = z(s);
          switch (o.type) {
            case Z:
              n && r.push(O, c, ue);
              return;
            case q:
              n === !0 ? r.push(O, c, ue) : n === !1 || r.push(O, c, $, z(et(n)), ne);
              return;
            case Me:
              isNaN(n) || r.push(O, c, $, z(et(n)), ne);
              break;
            case he:
              !isNaN(n) && n >= 1 && r.push(O, c, $, z(et(n)), ne);
              break;
            default:
              o.sanitizeURL && (Pe(n, s), n = "" + n, G(n)), r.push(O, c, $, z(et(n)), ne);
          }
        } else if (Ae(t)) {
          switch (typeof n) {
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
          r.push(O, z(t), $, z(et(n)), ne);
        }
      }
    }
    var _e = F(">"), bt = F("/>");
    function xt(r, e, t) {
      if (e != null) {
        if (t != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof e != "object" || !("__html" in e))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var n = e.__html;
        n != null && (ot(n), r.push(z("" + n)));
      }
    }
    var wt = !1, bn = !1, an = !1, Xn = !1, xn = !1, On = !1, un = !1;
    function An(r, e) {
      {
        var t = r[e];
        if (t != null) {
          var n = ve(t);
          r.multiple && !n ? f("The `%s` prop supplied to <select> must be an array if `multiple` is true.", e) : !r.multiple && n && f("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", e);
        }
      }
    }
    function Ia(r, e, t) {
      K("select", e), An(e, "value"), An(e, "defaultValue"), e.value !== void 0 && e.defaultValue !== void 0 && !an && (f("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), an = !0), r.push(Yt("select"));
      var n = null, o = null;
      for (var s in e)
        if (me.call(e, s)) {
          var c = e[s];
          if (c == null)
            continue;
          switch (s) {
            case "children":
              n = c;
              break;
            case "dangerouslySetInnerHTML":
              o = c;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              le(r, t, s, c);
              break;
          }
        }
      return r.push(_e), xt(r, o, n), n;
    }
    function Pa(r) {
      var e = "";
      return w.Children.forEach(r, function(t) {
        t != null && (e += t, !xn && typeof t != "string" && typeof t != "number" && (xn = !0, f("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), e;
    }
    var br = F(' selected=""');
    function sn(r, e, t, n) {
      var o = n.selectedValue;
      r.push(Yt("option"));
      var s = null, c = null, p = null, y = null;
      for (var R in e)
        if (me.call(e, R)) {
          var j = e[R];
          if (j == null)
            continue;
          switch (R) {
            case "children":
              s = j;
              break;
            case "selected":
              p = j, un || (f("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), un = !0);
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
              le(r, t, R, j);
              break;
          }
        }
      if (o != null) {
        var W;
        if (c !== null ? (Pe(c, "value"), W = "" + c) : (y !== null && (On || (On = !0, f("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), W = Pa(s)), ve(o))
          for (var X = 0; X < o.length; X++) {
            Pe(o[X], "value");
            var de = "" + o[X];
            if (de === W) {
              r.push(br);
              break;
            }
          }
        else
          Pe(o, "select.value"), "" + o === W && r.push(br);
      } else p && r.push(br);
      return r.push(_e), xt(r, y, s), s;
    }
    function Da(r, e, t) {
      K("input", e), e.checked !== void 0 && e.defaultChecked !== void 0 && !bn && (f("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), bn = !0), e.value !== void 0 && e.defaultValue !== void 0 && !wt && (f("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), wt = !0), r.push(Yt("input"));
      var n = null, o = null, s = null, c = null;
      for (var p in e)
        if (me.call(e, p)) {
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
              n = y;
              break;
            default:
              le(r, t, p, y);
              break;
          }
        }
      return s !== null ? le(r, t, "checked", s) : c !== null && le(r, t, "checked", c), n !== null ? le(r, t, "value", n) : o !== null && le(r, t, "value", o), r.push(bt), null;
    }
    function cn(r, e, t) {
      K("textarea", e), e.value !== void 0 && e.defaultValue !== void 0 && !Xn && (f("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Xn = !0), r.push(Yt("textarea"));
      var n = null, o = null, s = null;
      for (var c in e)
        if (me.call(e, c)) {
          var p = e[c];
          if (p == null)
            continue;
          switch (c) {
            case "children":
              s = p;
              break;
            case "value":
              n = p;
              break;
            case "defaultValue":
              o = p;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            // eslint-disable-next-line-no-fallthrough
            default:
              le(r, t, c, p);
              break;
          }
        }
      if (n === null && o !== null && (n = o), r.push(_e), s != null) {
        if (f("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), n != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (ve(s)) {
          if (s.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          ot(s[0]), n = "" + s[0];
        }
        ot(s), n = "" + s;
      }
      return typeof n == "string" && n[0] === `
` && r.push(Ln), n !== null && (Pe(n, "value"), r.push(z(St("" + n)))), null;
    }
    function Yr(r, e, t, n) {
      r.push(Yt(t));
      for (var o in e)
        if (me.call(e, o)) {
          var s = e[o];
          if (s == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(t + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              le(r, n, o, s);
              break;
          }
        }
      return r.push(bt), null;
    }
    function xr(r, e, t) {
      r.push(Yt("menuitem"));
      for (var n in e)
        if (me.call(e, n)) {
          var o = e[n];
          if (o == null)
            continue;
          switch (n) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              le(r, t, n, o);
              break;
          }
        }
      return r.push(_e), null;
    }
    function Ne(r, e, t) {
      r.push(Yt("title"));
      var n = null;
      for (var o in e)
        if (me.call(e, o)) {
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
              le(r, t, o, s);
              break;
          }
        }
      r.push(_e);
      {
        var c = Array.isArray(n) && n.length < 2 ? n[0] || null : n;
        Array.isArray(n) && n.length > 1 ? f("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : c != null && c.$$typeof != null ? f("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : c != null && typeof c != "string" && typeof c != "number" && f("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return n;
    }
    function jn(r, e, t, n) {
      r.push(Yt(t));
      var o = null, s = null;
      for (var c in e)
        if (me.call(e, c)) {
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
              le(r, n, c, p);
              break;
          }
        }
      return r.push(_e), xt(r, s, o), typeof o == "string" ? (r.push(z(St(o))), null) : o;
    }
    function wr(r, e, t, n) {
      r.push(Yt(t));
      var o = null, s = null;
      for (var c in e)
        if (me.call(e, c)) {
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
              T(r, n, p);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              Ae(c) && typeof p != "function" && typeof p != "symbol" && r.push(O, z(c), $, z(et(p)), ne);
              break;
          }
        }
      return r.push(_e), xt(r, s, o), o;
    }
    var Ln = F(`
`);
    function wn(r, e, t, n) {
      r.push(Yt(t));
      var o = null, s = null;
      for (var c in e)
        if (me.call(e, c)) {
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
              le(r, n, c, p);
              break;
          }
        }
      if (r.push(_e), s != null) {
        if (o != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof s != "object" || !("__html" in s))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var y = s.__html;
        y != null && (typeof y == "string" && y.length > 0 && y[0] === `
` ? r.push(Ln, z(y)) : (ot(y), r.push(z("" + y))));
      }
      return typeof o == "string" && o[0] === `
` && r.push(Ln), o;
    }
    var kr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, kn = /* @__PURE__ */ new Map();
    function Yt(r) {
      var e = kn.get(r);
      if (e === void 0) {
        if (!kr.test(r))
          throw new Error("Invalid tag: " + r);
        e = F("<" + r), kn.set(r, e);
      }
      return e;
    }
    var Gr = F("<!DOCTYPE html>");
    function ar(r, e, t, n, o) {
      switch (rt(e, t), Wt(e, t), nr(e, t, null), !t.suppressContentEditableWarning && t.contentEditable && t.children != null && f("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), o.insertionMode !== Ot && o.insertionMode !== At && e.indexOf("-") === -1 && typeof t.is != "string" && e.toLowerCase() !== e && f("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e) {
        // Special tags
        case "select":
          return Ia(r, t, n);
        case "option":
          return sn(r, t, n, o);
        case "textarea":
          return cn(r, t, n);
        case "input":
          return Da(r, t, n);
        case "menuitem":
          return xr(r, t, n);
        case "title":
          return Ne(r, t, n);
        // Newline eating tags
        case "listing":
        case "pre":
          return wn(r, t, e, n);
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
          return jn(r, t, e, n);
        case "html":
          return o.insertionMode === Ze && r.push(Gr), jn(r, t, e, n);
        default:
          return e.indexOf("-") === -1 && typeof t.is != "string" ? jn(r, t, e, n) : wr(r, t, e, n);
      }
    }
    var Io = F("</"), Cr = F(">");
    function Po(r, e, t) {
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
          r.push(Io, z(e), Cr);
      }
    }
    function Fa(r, e) {
      for (var t = e.bootstrapChunks, n = 0; n < t.length - 1; n++)
        D(r, t[n]);
      return n < t.length ? B(r, t[n]) : !0;
    }
    var Ma = F('<template id="'), Er = F('"></template>');
    function Do(r, e, t) {
      D(r, Ma), D(r, e.placeholderPrefix);
      var n = z(t.toString(16));
      return D(r, n), B(r, Er);
    }
    var ir = F("<!--$-->"), Xr = F('<!--$?--><template id="'), Oa = F('"></template>'), Zn = F("<!--$!-->"), Zr = F("<!--/$-->"), Jr = F("<template"), Jn = F('"'), sr = F(' data-dgst="'), Tr = F(' data-msg="'), Fo = F(' data-stck="'), Mo = F("></template>");
    function Oo(r, e) {
      return B(r, ir);
    }
    function Rr(r, e, t) {
      if (D(r, Xr), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return D(r, t), B(r, Oa);
    }
    function Ct(r, e, t, n, o) {
      var s;
      return s = B(r, Zn), D(r, Jr), t && (D(r, sr), D(r, z(et(t))), D(r, Jn)), n && (D(r, Tr), D(r, z(et(n))), D(r, Jn)), o && (D(r, Fo), D(r, z(et(o))), D(r, Jn)), s = B(r, Mo), s;
    }
    function Ao(r, e) {
      return B(r, Zr);
    }
    function _r(r, e) {
      return B(r, Zr);
    }
    function Aa(r, e) {
      return B(r, Zr);
    }
    var jo = F('<div hidden id="'), Ir = F('">'), Lo = F("</div>"), Bo = F('<svg aria-hidden="true" style="display:none" id="'), Pr = F('">'), Dr = F("</svg>"), Uo = F('<math aria-hidden="true" style="display:none" id="'), Ho = F('">'), Wo = F("</math>"), Qr = F('<table hidden id="'), No = F('">'), i = F("</table>"), l = F('<table hidden><tbody id="'), d = F('">'), m = F("</tbody></table>"), P = F('<table hidden><tr id="'), _ = F('">'), A = F("</tr></table>"), V = F('<table hidden><colgroup id="'), ce = F('">'), be = F("</colgroup></table>");
    function Se(r, e, t, n) {
      switch (t.insertionMode) {
        case Ze:
        case Je:
          return D(r, jo), D(r, e.segmentPrefix), D(r, z(n.toString(16))), B(r, Ir);
        case Ot:
          return D(r, Bo), D(r, e.segmentPrefix), D(r, z(n.toString(16))), B(r, Pr);
        case At:
          return D(r, Uo), D(r, e.segmentPrefix), D(r, z(n.toString(16))), B(r, Ho);
        case yn:
          return D(r, Qr), D(r, e.segmentPrefix), D(r, z(n.toString(16))), B(r, No);
        // TODO: For the rest of these, there will be extra wrapper nodes that never
        // get deleted from the document. We need to delete the table too as part
        // of the injected scripts. They are invisible though so it's not too terrible
        // and it's kind of an edge case to suspend in a table. Totally supported though.
        case Vn:
          return D(r, l), D(r, e.segmentPrefix), D(r, z(n.toString(16))), B(r, d);
        case Vt:
          return D(r, P), D(r, e.segmentPrefix), D(r, z(n.toString(16))), B(r, _);
        case rn:
          return D(r, V), D(r, e.segmentPrefix), D(r, z(n.toString(16))), B(r, ce);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function $e(r, e) {
      switch (e.insertionMode) {
        case Ze:
        case Je:
          return B(r, Lo);
        case Ot:
          return B(r, Dr);
        case At:
          return B(r, Wo);
        case yn:
          return B(r, i);
        case Vn:
          return B(r, m);
        case Vt:
          return B(r, A);
        case rn:
          return B(r, be);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Et = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Gt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Xt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Fr = F(Et + ';$RS("'), zo = F('$RS("'), lr = F('","'), ds = F('")<\/script>');
    function ps(r, e, t) {
      D(r, e.startInlineScript), e.sentCompleteSegmentFunction ? D(r, zo) : (e.sentCompleteSegmentFunction = !0, D(r, Fr)), D(r, e.segmentPrefix);
      var n = z(t.toString(16));
      return D(r, n), D(r, lr), D(r, e.placeholderPrefix), D(r, n), B(r, ds);
    }
    var ja = F(Gt + ';$RC("'), hs = F('$RC("'), vs = F('","'), ki = F('")<\/script>');
    function Ci(r, e, t, n) {
      if (D(r, e.startInlineScript), e.sentCompleteBoundaryFunction ? D(r, hs) : (e.sentCompleteBoundaryFunction = !0, D(r, ja)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var o = z(n.toString(16));
      return D(r, t), D(r, vs), D(r, e.segmentPrefix), D(r, o), B(r, ki);
    }
    var ms = F(Xt + ';$RX("'), gs = F('$RX("'), ys = F('"'), Ss = F(")<\/script>"), Lt = F(",");
    function bs(r, e, t, n, o, s) {
      if (D(r, e.startInlineScript), e.sentClientRenderFunction ? D(r, gs) : (e.sentClientRenderFunction = !0, D(r, ms)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return D(r, t), D(r, ys), (n || o || s) && (D(r, Lt), D(r, z($o(n || "")))), (o || s) && (D(r, Lt), D(r, z($o(o || "")))), s && (D(r, Lt), D(r, z($o(s)))), B(r, Ss);
    }
    var Ei = /[<\u2028\u2029]/g;
    function $o(r) {
      var e = JSON.stringify(r);
      return e.replace(Ei, function(t) {
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
    var Zt = Object.assign, Ti = Symbol.for("react.element"), Vo = Symbol.for("react.portal"), Yo = Symbol.for("react.fragment"), Go = Symbol.for("react.strict_mode"), Xo = Symbol.for("react.profiler"), Kr = Symbol.for("react.provider"), qr = Symbol.for("react.context"), Mr = Symbol.for("react.forward_ref"), La = Symbol.for("react.suspense"), Ba = Symbol.for("react.suspense_list"), Ua = Symbol.for("react.memo"), Zo = Symbol.for("react.lazy"), Ri = Symbol.for("react.scope"), xs = Symbol.for("react.debug_trace_mode"), ws = Symbol.for("react.legacy_hidden"), ks = Symbol.for("react.default_value"), Ha = Symbol.iterator, tt = "@@iterator";
    function eo(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = Ha && r[Ha] || r[tt];
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
    function qe(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case Yo:
          return "Fragment";
        case Vo:
          return "Portal";
        case Xo:
          return "Profiler";
        case Go:
          return "StrictMode";
        case La:
          return "Suspense";
        case Ba:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case qr:
            var e = r;
            return Wa(e) + ".Consumer";
          case Kr:
            var t = r;
            return Wa(t._context) + ".Provider";
          case Mr:
            return _i(r, r.render, "ForwardRef");
          case Ua:
            var n = r.displayName || null;
            return n !== null ? n : qe(r.type) || "Memo";
          case Zo: {
            var o = r, s = o._payload, c = o._init;
            try {
              return qe(c(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Or = 0, Na, za, $a, Va, Ii, Pi, Jo;
    function Qo() {
    }
    Qo.__reactDisabledLog = !0;
    function to() {
      {
        if (Or === 0) {
          Na = console.log, za = console.info, $a = console.warn, Va = console.error, Ii = console.group, Pi = console.groupCollapsed, Jo = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Qo,
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
            log: Zt({}, r, {
              value: Na
            }),
            info: Zt({}, r, {
              value: za
            }),
            warn: Zt({}, r, {
              value: $a
            }),
            error: Zt({}, r, {
              value: Va
            }),
            group: Zt({}, r, {
              value: Ii
            }),
            groupCollapsed: Zt({}, r, {
              value: Pi
            }),
            groupEnd: Zt({}, r, {
              value: Jo
            })
          });
        }
        Or < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ar = k.ReactCurrentDispatcher, Ga;
    function ur(r, e, t) {
      {
        if (Ga === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            Ga = n && n[1] || "";
          }
        return `
` + Ga + r;
      }
    }
    var Xa = !1, no;
    {
      var Cs = typeof WeakMap == "function" ? WeakMap : Map;
      no = new Cs();
    }
    function ro(r, e) {
      if (!r || Xa)
        return "";
      {
        var t = no.get(r);
        if (t !== void 0)
          return t;
      }
      var n;
      Xa = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Ar.current, Ar.current = null, to();
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
            } catch (De) {
              n = De;
            }
            Reflect.construct(r, [], c);
          } else {
            try {
              c.call();
            } catch (De) {
              n = De;
            }
            r.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (De) {
            n = De;
          }
          r();
        }
      } catch (De) {
        if (De && n && typeof De.stack == "string") {
          for (var p = De.stack.split(`
`), y = n.stack.split(`
`), R = p.length - 1, j = y.length - 1; R >= 1 && j >= 0 && p[R] !== y[j]; )
            j--;
          for (; R >= 1 && j >= 0; R--, j--)
            if (p[R] !== y[j]) {
              if (R !== 1 || j !== 1)
                do
                  if (R--, j--, j < 0 || p[R] !== y[j]) {
                    var W = `
` + p[R].replace(" at new ", " at ");
                    return r.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", r.displayName)), typeof r == "function" && no.set(r, W), W;
                  }
                while (R >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        Xa = !1, Ar.current = s, Ya(), Error.prepareStackTrace = o;
      }
      var X = r ? r.displayName || r.name : "", de = X ? ur(X) : "";
      return typeof r == "function" && no.set(r, de), de;
    }
    function Di(r, e, t) {
      return ro(r, !0);
    }
    function Za(r, e, t) {
      return ro(r, !1);
    }
    function Ko(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function qo(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return ro(r, Ko(r));
      if (typeof r == "string")
        return ur(r);
      switch (r) {
        case La:
          return ur("Suspense");
        case Ba:
          return ur("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case Mr:
            return Za(r.render);
          case Ua:
            return qo(r.type, e, t);
          case Zo: {
            var n = r, o = n._payload, s = n._init;
            try {
              return qo(s(o), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ea = {}, oo = k.ReactDebugCurrentFrame;
    function ao(r) {
      if (r) {
        var e = r._owner, t = qo(r.type, r._source, e ? e.type : null);
        oo.setExtraStackFrame(t);
      } else
        oo.setExtraStackFrame(null);
    }
    function Fi(r, e, t, n, o) {
      {
        var s = Function.call.bind(me);
        for (var c in r)
          if (s(r, c)) {
            var p = void 0;
            try {
              if (typeof r[c] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              p = r[c](e, c, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              p = R;
            }
            p && !(p instanceof Error) && (ao(o), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, c, typeof p), ao(null)), p instanceof Error && !(p.message in ea) && (ea[p.message] = !0, ao(o), f("Failed %s type: %s", t, p.message), ao(null));
          }
      }
    }
    var cr;
    cr = {};
    var ta = {};
    Object.freeze(ta);
    function Qn(r, e) {
      {
        var t = r.contextTypes;
        if (!t)
          return ta;
        var n = {};
        for (var o in t)
          n[o] = e[o];
        {
          var s = qe(r) || "Unknown";
          Fi(t, n, "context", s);
        }
        return n;
      }
    }
    function Ja(r, e, t, n) {
      {
        if (typeof r.getChildContext != "function") {
          {
            var o = qe(e) || "Unknown";
            cr[o] || (cr[o] = !0, f("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", o, o));
          }
          return t;
        }
        var s = r.getChildContext();
        for (var c in s)
          if (!(c in n))
            throw new Error((qe(e) || "Unknown") + '.getChildContext(): key "' + c + '" is not defined in childContextTypes.');
        {
          var p = qe(e) || "Unknown";
          Fi(n, s, "child context", p);
        }
        return Zt({}, t, s);
      }
    }
    var fr;
    fr = {};
    var na = null, Kn = null;
    function ra(r) {
      r.context._currentValue = r.parentValue;
    }
    function oa(r) {
      r.context._currentValue = r.value;
    }
    function io(r, e) {
      if (r !== e) {
        ra(r);
        var t = r.parent, n = e.parent;
        if (t === null) {
          if (n !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (n === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          io(t, n);
        }
        oa(e);
      }
    }
    function so(r) {
      ra(r);
      var e = r.parent;
      e !== null && so(e);
    }
    function Mi(r) {
      var e = r.parent;
      e !== null && Mi(e), oa(r);
    }
    function Oi(r, e) {
      ra(r);
      var t = r.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === e.depth ? io(t, e) : Oi(t, e);
    }
    function Ai(r, e) {
      var t = e.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      r.depth === t.depth ? io(r, t) : Ai(r, t), oa(e);
    }
    function qn(r) {
      var e = Kn, t = r;
      e !== t && (e === null ? Mi(t) : t === null ? so(e) : e.depth === t.depth ? io(e, t) : e.depth > t.depth ? Oi(e, t) : Ai(e, t), Kn = t);
    }
    function Qa(r, e) {
      var t;
      t = r._currentValue, r._currentValue = e, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== fr && f("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = fr;
      var n = Kn, o = {
        parent: n,
        depth: n === null ? 0 : n.depth + 1,
        context: r,
        parentValue: t,
        value: e
      };
      return Kn = o, o;
    }
    function Es(r) {
      var e = Kn;
      if (e === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      e.context !== r && f("The parent context is not the expected context. This is probably a bug in React.");
      {
        var t = e.parentValue;
        t === ks ? e.context._currentValue = e.context._defaultValue : e.context._currentValue = t, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== fr && f("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = fr;
      }
      return Kn = e.parent;
    }
    function ji() {
      return Kn;
    }
    function jr(r) {
      var e = r._currentValue;
      return e;
    }
    function lo(r) {
      return r._reactInternals;
    }
    function Ka(r, e) {
      r._reactInternals = e;
    }
    var aa = {}, ia = {}, sa, Lr, uo, co, la, fo, ua, ca, qa;
    {
      sa = /* @__PURE__ */ new Set(), Lr = /* @__PURE__ */ new Set(), uo = /* @__PURE__ */ new Set(), ua = /* @__PURE__ */ new Set(), co = /* @__PURE__ */ new Set(), ca = /* @__PURE__ */ new Set(), qa = /* @__PURE__ */ new Set();
      var Li = /* @__PURE__ */ new Set();
      fo = function(r, e) {
        if (!(r === null || typeof r == "function")) {
          var t = e + "_" + r;
          Li.has(t) || (Li.add(t), f("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", e, r));
        }
      }, la = function(r, e) {
        if (e === void 0) {
          var t = qe(r) || "Component";
          co.has(t) || (co.add(t), f("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", t));
        }
      };
    }
    function Bi(r, e) {
      {
        var t = r.constructor, n = t && qe(t) || "ReactClass", o = n + "." + e;
        if (aa[o])
          return;
        f(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, e, e, n), aa[o] = !0;
      }
    }
    var Ui = {
      isMounted: function(r) {
        return !1;
      },
      enqueueSetState: function(r, e, t) {
        var n = lo(r);
        n.queue === null ? Bi(r, "setState") : (n.queue.push(e), t != null && fo(t, "setState"));
      },
      enqueueReplaceState: function(r, e, t) {
        var n = lo(r);
        n.replace = !0, n.queue = [e], t != null && fo(t, "setState");
      },
      enqueueForceUpdate: function(r, e) {
        var t = lo(r);
        t.queue === null ? Bi(r, "forceUpdate") : e != null && fo(e, "setState");
      }
    };
    function Ts(r, e, t, n, o) {
      var s = t(o, n);
      la(e, s);
      var c = s == null ? n : Zt({}, n, s);
      return c;
    }
    function Hi(r, e, t) {
      var n = ta, o = r.contextType;
      if ("contextType" in r) {
        var s = (
          // Allow null for conditional declaration
          o === null || o !== void 0 && o.$$typeof === qr && o._context === void 0
        );
        if (!s && !qa.has(r)) {
          qa.add(r);
          var c = "";
          o === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof o != "object" ? c = " However, it is set to a " + typeof o + "." : o.$$typeof === Kr ? c = " Did you accidentally pass the Context.Provider instead?" : o._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(o).join(", ") + "}.", f("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", qe(r) || "Component", c);
        }
      }
      typeof o == "object" && o !== null ? n = jr(o) : n = t;
      var p = new r(e, n);
      {
        if (typeof r.getDerivedStateFromProps == "function" && (p.state === null || p.state === void 0)) {
          var y = qe(r) || "Component";
          sa.has(y) || (sa.add(y), f("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", y, p.state === null ? "null" : "undefined", y));
        }
        if (typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function") {
          var R = null, j = null, W = null;
          if (typeof p.componentWillMount == "function" && p.componentWillMount.__suppressDeprecationWarning !== !0 ? R = "componentWillMount" : typeof p.UNSAFE_componentWillMount == "function" && (R = "UNSAFE_componentWillMount"), typeof p.componentWillReceiveProps == "function" && p.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? j = "componentWillReceiveProps" : typeof p.UNSAFE_componentWillReceiveProps == "function" && (j = "UNSAFE_componentWillReceiveProps"), typeof p.componentWillUpdate == "function" && p.componentWillUpdate.__suppressDeprecationWarning !== !0 ? W = "componentWillUpdate" : typeof p.UNSAFE_componentWillUpdate == "function" && (W = "UNSAFE_componentWillUpdate"), R !== null || j !== null || W !== null) {
            var X = qe(r) || "Component", de = typeof r.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            uo.has(X) || (uo.add(X), f(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, X, de, R !== null ? `
  ` + R : "", j !== null ? `
  ` + j : "", W !== null ? `
  ` + W : ""));
          }
        }
      }
      return p;
    }
    function Rs(r, e, t) {
      {
        var n = qe(e) || "Component", o = r.render;
        o || (e.prototype && typeof e.prototype.render == "function" ? f("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", n) : f("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", n)), r.getInitialState && !r.getInitialState.isReactClassApproved && !r.state && f("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", n), r.getDefaultProps && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", n), r.propTypes && f("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", n), r.contextType && f("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", n), r.contextTypes && f("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", n), e.contextType && e.contextTypes && !ca.has(e) && (ca.add(e), f("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", n)), typeof r.componentShouldUpdate == "function" && f("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", n), e.prototype && e.prototype.isPureReactComponent && typeof r.shouldComponentUpdate < "u" && f("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", qe(e) || "A pure component"), typeof r.componentDidUnmount == "function" && f("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", n), typeof r.componentDidReceiveProps == "function" && f("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", n), typeof r.componentWillRecieveProps == "function" && f("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", n), typeof r.UNSAFE_componentWillRecieveProps == "function" && f("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", n);
        var s = r.props !== t;
        r.props !== void 0 && s && f("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", n, n), r.defaultProps && f("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", n, n), typeof r.getSnapshotBeforeUpdate == "function" && typeof r.componentDidUpdate != "function" && !Lr.has(e) && (Lr.add(e), f("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", qe(e))), typeof r.getDerivedStateFromProps == "function" && f("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof r.getDerivedStateFromError == "function" && f("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof e.getSnapshotBeforeUpdate == "function" && f("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", n);
        var c = r.state;
        c && (typeof c != "object" || ve(c)) && f("%s.state: must be set to an object or null", n), typeof r.getChildContext == "function" && typeof e.childContextTypes != "object" && f("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", n);
      }
    }
    function _s(r, e) {
      var t = e.state;
      if (typeof e.componentWillMount == "function") {
        if (e.componentWillMount.__suppressDeprecationWarning !== !0) {
          var n = qe(r) || "Unknown";
          ia[n] || (E(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            n
          ), ia[n] = !0);
        }
        e.componentWillMount();
      }
      typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && (f("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", qe(r) || "Component"), Ui.enqueueReplaceState(e, e.state, null));
    }
    function ei(r, e, t, n) {
      if (r.queue !== null && r.queue.length > 0) {
        var o = r.queue, s = r.replace;
        if (r.queue = null, r.replace = !1, s && o.length === 1)
          e.state = o[0];
        else {
          for (var c = s ? o[0] : e.state, p = !0, y = s ? 1 : 0; y < o.length; y++) {
            var R = o[y], j = typeof R == "function" ? R.call(e, c, t, n) : R;
            j != null && (p ? (p = !1, c = Zt({}, c, j)) : Zt(c, j));
          }
          e.state = c;
        }
      } else
        r.queue = null;
    }
    function po(r, e, t, n) {
      Rs(r, e, t);
      var o = r.state !== void 0 ? r.state : null;
      r.updater = Ui, r.props = t, r.state = o;
      var s = {
        queue: [],
        replace: !1
      };
      Ka(r, s);
      var c = e.contextType;
      if (typeof c == "object" && c !== null ? r.context = jr(c) : r.context = n, r.state === t) {
        var p = qe(e) || "Component";
        ua.has(p) || (ua.add(p), f("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
      }
      var y = e.getDerivedStateFromProps;
      typeof y == "function" && (r.state = Ts(r, e, y, o, t)), typeof e.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function" && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function") && (_s(e, r), ei(s, r, t, n));
    }
    var Is = {
      id: 1,
      overflow: ""
    };
    function Ps(r) {
      var e = r.overflow, t = r.id, n = t & ~Ds(t);
      return n.toString(32) + e;
    }
    function ti(r, e, t) {
      var n = r.id, o = r.overflow, s = fa(n) - 1, c = n & ~(1 << s), p = t + 1, y = fa(e) + s;
      if (y > 30) {
        var R = s - s % 5, j = (1 << R) - 1, W = (c & j).toString(32), X = c >> R, de = s - R, De = fa(e) + de, mt = p << de, yr = mt | X, Sr = W + o;
        return {
          id: 1 << De | yr,
          overflow: Sr
        };
      } else {
        var Nn = p << s, $r = Nn | c, sl = o;
        return {
          id: 1 << y | $r,
          overflow: sl
        };
      }
    }
    function fa(r) {
      return 32 - Fs(r);
    }
    function Ds(r) {
      return 1 << fa(r) - 1;
    }
    var Fs = Math.clz32 ? Math.clz32 : ni, Ms = Math.log, Bn = Math.LN2;
    function ni(r) {
      var e = r >>> 0;
      return e === 0 ? 32 : 31 - (Ms(e) / Bn | 0) | 0;
    }
    function da(r, e) {
      return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
    }
    var Qe = typeof Object.is == "function" ? Object.is : da, Jt = null, Br = null, dr = null, Ie = null, er = !1, pa = !1, Qt = 0, Kt = null, Cn = 0, Os = 25, fn = !1, tr;
    function pr() {
      if (Jt === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return fn && f("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Jt;
    }
    function As(r, e) {
      if (e === null)
        return f("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", tr), !1;
      r.length !== e.length && f(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, tr, "[" + r.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var t = 0; t < e.length && t < r.length; t++)
        if (!Qe(r[t], e[t]))
          return !1;
      return !0;
    }
    function ri() {
      if (Cn > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function ho() {
      return Ie === null ? dr === null ? (er = !1, dr = Ie = ri()) : (er = !0, Ie = dr) : Ie.next === null ? (er = !1, Ie = Ie.next = ri()) : (er = !0, Ie = Ie.next), Ie;
    }
    function js(r, e) {
      Jt = e, Br = r, fn = !1, Qt = 0;
    }
    function Ls(r, e, t, n) {
      for (; pa; )
        pa = !1, Qt = 0, Cn += 1, Ie = null, t = r(e, n);
      return oi(), t;
    }
    function ha() {
      var r = Qt !== 0;
      return r;
    }
    function oi() {
      fn = !1, Jt = null, Br = null, pa = !1, dr = null, Cn = 0, Kt = null, Ie = null;
    }
    function Wi(r) {
      return fn && f("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), jr(r);
    }
    function Ni(r) {
      return tr = "useContext", pr(), jr(r);
    }
    function ai(r, e) {
      return typeof e == "function" ? e(r) : e;
    }
    function Bs(r) {
      return tr = "useState", zi(
        ai,
        // useReducer has a special case to support lazy useState initializers
        r
      );
    }
    function zi(r, e, t) {
      if (r !== ai && (tr = "useReducer"), Jt = pr(), Ie = ho(), er) {
        var n = Ie.queue, o = n.dispatch;
        if (Kt !== null) {
          var s = Kt.get(n);
          if (s !== void 0) {
            Kt.delete(n);
            var c = Ie.memoizedState, p = s;
            do {
              var y = p.action;
              fn = !0, c = r(c, y), fn = !1, p = p.next;
            } while (p !== null);
            return Ie.memoizedState = c, [c, o];
          }
        }
        return [Ie.memoizedState, o];
      } else {
        fn = !0;
        var R;
        r === ai ? R = typeof e == "function" ? e() : e : R = t !== void 0 ? t(e) : e, fn = !1, Ie.memoizedState = R;
        var j = Ie.queue = {
          last: null,
          dispatch: null
        }, W = j.dispatch = Ws.bind(null, Jt, j);
        return [Ie.memoizedState, W];
      }
    }
    function $i(r, e) {
      Jt = pr(), Ie = ho();
      var t = e === void 0 ? null : e;
      if (Ie !== null) {
        var n = Ie.memoizedState;
        if (n !== null && t !== null) {
          var o = n[1];
          if (As(t, o))
            return n[0];
        }
      }
      fn = !0;
      var s = r();
      return fn = !1, Ie.memoizedState = [s, t], s;
    }
    function Us(r) {
      Jt = pr(), Ie = ho();
      var e = Ie.memoizedState;
      if (e === null) {
        var t = {
          current: r
        };
        return Object.seal(t), Ie.memoizedState = t, t;
      } else
        return e;
    }
    function Hs(r, e) {
      tr = "useLayoutEffect", f("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Ws(r, e, t) {
      if (Cn >= Os)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (r === Jt) {
        pa = !0;
        var n = {
          action: t,
          next: null
        };
        Kt === null && (Kt = /* @__PURE__ */ new Map());
        var o = Kt.get(e);
        if (o === void 0)
          Kt.set(e, n);
        else {
          for (var s = o; s.next !== null; )
            s = s.next;
          s.next = n;
        }
      }
    }
    function Ns(r, e) {
      return $i(function() {
        return r;
      }, e);
    }
    function zs(r, e, t) {
      return pr(), e(r._source);
    }
    function $s(r, e, t) {
      if (t === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return t();
    }
    function va(r) {
      return pr(), r;
    }
    function Vi() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function ii() {
      return pr(), [!1, Vi];
    }
    function Yi() {
      var r = Br, e = Ps(r.treeContext), t = vo;
      if (t === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var n = Qt++;
      return on(t, e, n);
    }
    function ma() {
    }
    var ga = {
      readContext: Wi,
      useContext: Ni,
      useMemo: $i,
      useReducer: zi,
      useRef: Us,
      useState: Bs,
      useInsertionEffect: ma,
      useLayoutEffect: Hs,
      useCallback: Ns,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: ma,
      // Effects are not run in the server environment.
      useEffect: ma,
      // Debugging effect
      useDebugValue: ma,
      useDeferredValue: va,
      useTransition: ii,
      useId: Yi,
      // Subscriptions are not setup in a server environment.
      useMutableSource: zs,
      useSyncExternalStore: $s
    }, vo = null;
    function ya(r) {
      vo = r;
    }
    function Ur(r) {
      try {
        var e = "", t = r;
        do {
          switch (t.tag) {
            case 0:
              e += ur(t.type, null, null);
              break;
            case 1:
              e += Za(t.type, null, null);
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
    var Sa = k.ReactCurrentDispatcher, ba = k.ReactDebugCurrentFrame, xa = 0, Hr = 1, si = 2, hr = 3, Gi = 4, Vs = 0, Wr = 1, Nr = 2, Ys = 12800;
    function Gs(r) {
      return console.error(r), null;
    }
    function vr() {
    }
    function wa(r, e, t, n, o, s, c, p, y) {
      var R = [], j = /* @__PURE__ */ new Set(), W = {
        destination: null,
        responseState: e,
        progressiveChunkSize: n === void 0 ? Ys : n,
        status: Vs,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: j,
        pingedTasks: R,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: o === void 0 ? Gs : o,
        onAllReady: s === void 0 ? vr : s,
        onShellReady: c === void 0 ? vr : c,
        onShellError: p === void 0 ? vr : p,
        onFatalError: y === void 0 ? vr : y
      }, X = mo(
        W,
        0,
        null,
        t,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      X.parentFlushed = !0;
      var de = mr(W, r, null, X, j, ta, na, Is);
      return R.push(de), W;
    }
    function Un(r, e) {
      var t = r.pingedTasks;
      t.push(e), t.length === 1 && U(function() {
        return yi(r);
      });
    }
    function li(r, e) {
      return {
        id: Yn,
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
    function mr(r, e, t, n, o, s, c, p) {
      r.allPendingTasks++, t === null ? r.pendingRootTasks++ : t.pendingTasks++;
      var y = {
        node: e,
        ping: function() {
          return Un(r, y);
        },
        blockedBoundary: t,
        blockedSegment: n,
        abortSet: o,
        legacyContext: s,
        context: c,
        treeContext: p
      };
      return y.componentStack = null, o.add(y), y;
    }
    function mo(r, e, t, n, o, s) {
      return {
        status: xa,
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
    var Hn = null;
    function En() {
      return Hn === null || Hn.componentStack === null ? "" : Ur(Hn.componentStack);
    }
    function Wn(r, e) {
      r.componentStack = {
        tag: 0,
        parent: r.componentStack,
        type: e
      };
    }
    function ka(r, e) {
      r.componentStack = {
        tag: 1,
        parent: r.componentStack,
        type: e
      };
    }
    function go(r, e) {
      r.componentStack = {
        tag: 2,
        parent: r.componentStack,
        type: e
      };
    }
    function dn(r) {
      r.componentStack === null ? f("Unexpectedly popped too many stack frames. This is a bug in React.") : r.componentStack = r.componentStack.parent;
    }
    var yo = null;
    function ui(r, e) {
      {
        var t;
        typeof e == "string" ? t = e : e && typeof e.message == "string" ? t = e.message : t = String(e);
        var n = yo || En();
        yo = null, r.errorMessage = t, r.errorComponentStack = n;
      }
    }
    function So(r, e) {
      var t = r.onError(e);
      if (t != null && typeof t != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
      return t;
    }
    function bo(r, e) {
      var t = r.onShellError;
      t(e);
      var n = r.onFatalError;
      n(e), r.destination !== null ? (r.status = Nr, se(r.destination, e)) : (r.status = Wr, r.fatalError = e);
    }
    function Xi(r, e, t) {
      Wn(e, "Suspense");
      var n = e.blockedBoundary, o = e.blockedSegment, s = t.fallback, c = t.children, p = /* @__PURE__ */ new Set(), y = li(r, p), R = o.chunks.length, j = mo(
        r,
        R,
        y,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      o.children.push(j), o.lastPushedText = !1;
      var W = mo(
        r,
        0,
        null,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      W.parentFlushed = !0, e.blockedBoundary = y, e.blockedSegment = W;
      try {
        if (zr(r, e, c), kt(W.chunks, r.responseState, W.lastPushedText, W.textEmbedded), W.status = Hr, gr(y, W), y.pendingTasks === 0) {
          dn(e);
          return;
        }
      } catch (de) {
        W.status = Gi, y.forceClientRender = !0, y.errorDigest = So(r, de), ui(y, de);
      } finally {
        e.blockedBoundary = n, e.blockedSegment = o;
      }
      var X = mr(r, s, n, j, p, e.legacyContext, e.context, e.treeContext);
      X.componentStack = e.componentStack, r.pingedTasks.push(X), dn(e);
    }
    function Xs(r, e, t, n) {
      Wn(e, t);
      var o = e.blockedSegment, s = ar(o.chunks, t, n, r.responseState, o.formatContext);
      o.lastPushedText = !1;
      var c = o.formatContext;
      o.formatContext = Mn(c, t, n), zr(r, e, s), o.formatContext = c, Po(o.chunks, t), o.lastPushedText = !1, dn(e);
    }
    function Zi(r) {
      return r.prototype && r.prototype.isReactComponent;
    }
    function xo(r, e, t, n, o) {
      var s = {};
      js(e, s);
      var c = t(n, o);
      return Ls(t, n, c, o);
    }
    function ci(r, e, t, n, o) {
      var s = t.render();
      t.props !== o && (hi || f("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", qe(n) || "a component"), hi = !0);
      {
        var c = n.childContextTypes;
        if (c != null) {
          var p = e.legacyContext, y = Ja(t, n, p, c);
          e.legacyContext = y, Tt(r, e, s), e.legacyContext = p;
          return;
        }
      }
      Tt(r, e, s);
    }
    function Ji(r, e, t, n) {
      go(e, t);
      var o = Qn(t, e.legacyContext), s = Hi(t, n, o);
      po(s, t, n, o), ci(r, e, s, t, n), dn(e);
    }
    var fi = {}, wo = {}, di = {}, pi = {}, hi = !1, Qi = {}, Ki = !1, vi = !1, qi = !1;
    function Zs(r, e, t, n) {
      var o;
      if (o = Qn(t, e.legacyContext), ka(e, t), t.prototype && typeof t.prototype.render == "function") {
        var s = qe(t) || "Unknown";
        fi[s] || (f("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", s, s), fi[s] = !0);
      }
      var c = xo(r, e, t, n, o), p = ha();
      if (typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0) {
        var y = qe(t) || "Unknown";
        wo[y] || (f("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), wo[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0
      ) {
        {
          var R = qe(t) || "Unknown";
          wo[R] || (f("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), wo[R] = !0);
        }
        po(c, t, n, o), ci(r, e, c, t, n);
      } else if (Js(t), p) {
        var j = e.treeContext, W = 1, X = 0;
        e.treeContext = ti(j, W, X);
        try {
          Tt(r, e, c);
        } finally {
          e.treeContext = j;
        }
      } else
        Tt(r, e, c);
      dn(e);
    }
    function Js(r) {
      {
        if (r && r.childContextTypes && f("%s(...): childContextTypes cannot be defined on a function component.", r.displayName || r.name || "Component"), r.defaultProps !== void 0) {
          var e = qe(r) || "Unknown";
          Qi[e] || (f("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", e), Qi[e] = !0);
        }
        if (typeof r.getDerivedStateFromProps == "function") {
          var t = qe(r) || "Unknown";
          pi[t] || (f("%s: Function components do not support getDerivedStateFromProps.", t), pi[t] = !0);
        }
        if (typeof r.contextType == "object" && r.contextType !== null) {
          var n = qe(r) || "Unknown";
          di[n] || (f("%s: Function components do not support contextType.", n), di[n] = !0);
        }
      }
    }
    function es(r, e) {
      if (r && r.defaultProps) {
        var t = Zt({}, e), n = r.defaultProps;
        for (var o in n)
          t[o] === void 0 && (t[o] = n[o]);
        return t;
      }
      return e;
    }
    function Qs(r, e, t, n, o) {
      ka(e, t.render);
      var s = xo(r, e, t.render, n, o), c = ha();
      if (c) {
        var p = e.treeContext, y = 1, R = 0;
        e.treeContext = ti(p, y, R);
        try {
          Tt(r, e, s);
        } finally {
          e.treeContext = p;
        }
      } else
        Tt(r, e, s);
      dn(e);
    }
    function mi(r, e, t, n, o) {
      var s = t.type, c = es(s, n);
      Ca(r, e, s, c, o);
    }
    function Ks(r, e, t, n) {
      t._context === void 0 ? t !== t.Consumer && (qi || (qi = !0, f("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : t = t._context;
      var o = n.children;
      typeof o != "function" && f("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var s = jr(t), c = o(s);
      Tt(r, e, c);
    }
    function qt(r, e, t, n) {
      var o = t._context, s = n.value, c = n.children, p;
      p = e.context, e.context = Qa(o, s), Tt(r, e, c), e.context = Es(o), p !== e.context && f("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function qs(r, e, t, n, o) {
      Wn(e, "Lazy");
      var s = t._payload, c = t._init, p = c(s), y = es(p, n);
      Ca(r, e, p, y, o), dn(e);
    }
    function Ca(r, e, t, n, o) {
      if (typeof t == "function")
        if (Zi(t)) {
          Ji(r, e, t, n);
          return;
        } else {
          Zs(r, e, t, n);
          return;
        }
      if (typeof t == "string") {
        Xs(r, e, t, n);
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
        case ws:
        case xs:
        case Go:
        case Xo:
        case Yo: {
          Tt(r, e, n.children);
          return;
        }
        case Ba: {
          Wn(e, "SuspenseList"), Tt(r, e, n.children), dn(e);
          return;
        }
        case Ri:
          throw new Error("ReactDOMServer does not yet support scope components.");
        // eslint-disable-next-line-no-fallthrough
        case La: {
          Xi(r, e, n);
          return;
        }
      }
      if (typeof t == "object" && t !== null)
        switch (t.$$typeof) {
          case Mr: {
            Qs(r, e, t, n, o);
            return;
          }
          case Ua: {
            mi(r, e, t, n, o);
            return;
          }
          case Kr: {
            qt(r, e, t, n);
            return;
          }
          case qr: {
            Ks(r, e, t, n);
            return;
          }
          case Zo: {
            qs(r, e, t, n);
            return;
          }
        }
      var s = "";
      throw (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (t == null ? t : typeof t) + "." + s));
    }
    function el(r, e) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      r[Symbol.toStringTag] === "Generator" && (Ki || f("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Ki = !0), r.entries === e && (vi || f("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), vi = !0);
    }
    function Tt(r, e, t) {
      try {
        return tl(r, e, t);
      } catch (n) {
        throw typeof n == "object" && n !== null && typeof n.then == "function" || (yo = yo !== null ? yo : En()), n;
      }
    }
    function tl(r, e, t) {
      if (e.node = t, typeof t == "object" && t !== null) {
        switch (t.$$typeof) {
          case Ti: {
            var n = t, o = n.type, s = n.props, c = n.ref;
            Ca(r, e, o, s, c);
            return;
          }
          case Vo:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          // eslint-disable-next-line-no-fallthrough
          case Zo: {
            var p = t, y = p._payload, R = p._init, j;
            try {
              j = R(y);
            } catch (Nn) {
              throw typeof Nn == "object" && Nn !== null && typeof Nn.then == "function" && Wn(e, "Lazy"), Nn;
            }
            Tt(r, e, j);
            return;
          }
        }
        if (ve(t)) {
          ts(r, e, t);
          return;
        }
        var W = eo(t);
        if (W) {
          el(t, W);
          var X = W.call(t);
          if (X) {
            var de = X.next();
            if (!de.done) {
              var De = [];
              do
                De.push(de.value), de = X.next();
              while (!de.done);
              ts(r, e, De);
              return;
            }
            return;
          }
        }
        var mt = Object.prototype.toString.call(t);
        throw new Error("Objects are not valid as a React child (found: " + (mt === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : mt) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof t == "string") {
        var yr = e.blockedSegment;
        yr.lastPushedText = ht(e.blockedSegment.chunks, t, r.responseState, yr.lastPushedText);
        return;
      }
      if (typeof t == "number") {
        var Sr = e.blockedSegment;
        Sr.lastPushedText = ht(e.blockedSegment.chunks, "" + t, r.responseState, Sr.lastPushedText);
        return;
      }
      typeof t == "function" && f("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function ts(r, e, t) {
      for (var n = t.length, o = 0; o < n; o++) {
        var s = e.treeContext;
        e.treeContext = ti(s, n, o);
        try {
          zr(r, e, t[o]);
        } finally {
          e.treeContext = s;
        }
      }
    }
    function ns(r, e, t) {
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
      var c = mr(r, e.node, e.blockedBoundary, s, e.abortSet, e.legacyContext, e.context, e.treeContext);
      e.componentStack !== null && (c.componentStack = e.componentStack.parent);
      var p = c.ping;
      t.then(p, p);
    }
    function zr(r, e, t) {
      var n = e.blockedSegment.formatContext, o = e.legacyContext, s = e.context, c = null;
      c = e.componentStack;
      try {
        return Tt(r, e, t);
      } catch (p) {
        if (oi(), typeof p == "object" && p !== null && typeof p.then == "function") {
          ns(r, e, p), e.blockedSegment.formatContext = n, e.legacyContext = o, e.context = s, qn(s), e.componentStack = c;
          return;
        } else
          throw e.blockedSegment.formatContext = n, e.legacyContext = o, e.context = s, qn(s), e.componentStack = c, p;
      }
    }
    function rs(r, e, t, n) {
      var o = So(r, n);
      if (e === null ? bo(r, n) : (e.pendingTasks--, e.forceClientRender || (e.forceClientRender = !0, e.errorDigest = o, ui(e, n), e.parentFlushed && r.clientRenderedBoundaries.push(e))), r.allPendingTasks--, r.allPendingTasks === 0) {
        var s = r.onAllReady;
        s();
      }
    }
    function nl(r) {
      var e = this, t = r.blockedBoundary, n = r.blockedSegment;
      n.status = hr, ko(e, t, n);
    }
    function gi(r, e, t) {
      var n = r.blockedBoundary, o = r.blockedSegment;
      if (o.status = hr, n === null)
        e.allPendingTasks--, e.status !== Nr && (e.status = Nr, e.destination !== null && Q(e.destination));
      else {
        if (n.pendingTasks--, !n.forceClientRender) {
          n.forceClientRender = !0;
          var s = t === void 0 ? new Error("The render was aborted by the server without a reason.") : t;
          n.errorDigest = e.onError(s);
          {
            var c = "The server did not finish this Suspense boundary: ";
            s && typeof s.message == "string" ? s = c + s.message : s = c + String(s);
            var p = Hn;
            Hn = r;
            try {
              ui(n, s);
            } finally {
              Hn = p;
            }
          }
          n.parentFlushed && e.clientRenderedBoundaries.push(n);
        }
        if (n.fallbackAbortableTasks.forEach(function(R) {
          return gi(R, e, t);
        }), n.fallbackAbortableTasks.clear(), e.allPendingTasks--, e.allPendingTasks === 0) {
          var y = e.onAllReady;
          y();
        }
      }
    }
    function gr(r, e) {
      if (e.chunks.length === 0 && e.children.length === 1 && e.children[0].boundary === null) {
        var t = e.children[0];
        t.id = e.id, t.parentFlushed = !0, t.status === Hr && gr(r, t);
      } else {
        var n = r.completedSegments;
        n.push(e);
      }
    }
    function ko(r, e, t) {
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
          t.parentFlushed && t.status === Hr && gr(e, t), e.parentFlushed && r.completedBoundaries.push(e), e.fallbackAbortableTasks.forEach(nl, r), e.fallbackAbortableTasks.clear();
        else if (t.parentFlushed && t.status === Hr) {
          gr(e, t);
          var o = e.completedSegments;
          o.length === 1 && e.parentFlushed && r.partialBoundaries.push(e);
        }
      }
      if (r.allPendingTasks--, r.allPendingTasks === 0) {
        var s = r.onAllReady;
        s();
      }
    }
    function rl(r, e) {
      var t = e.blockedSegment;
      if (t.status === xa) {
        qn(e.context);
        var n = null;
        n = Hn, Hn = e;
        try {
          Tt(r, e, e.node), kt(t.chunks, r.responseState, t.lastPushedText, t.textEmbedded), e.abortSet.delete(e), t.status = Hr, ko(r, e.blockedBoundary, t);
        } catch (s) {
          if (oi(), typeof s == "object" && s !== null && typeof s.then == "function") {
            var o = e.ping;
            s.then(o, o);
          } else
            e.abortSet.delete(e), t.status = Gi, rs(r, e.blockedBoundary, t, s);
        } finally {
          Hn = n;
        }
      }
    }
    function yi(r) {
      if (r.status !== Nr) {
        var e = ji(), t = Sa.current;
        Sa.current = ga;
        var n;
        n = ba.getCurrentStack, ba.getCurrentStack = En;
        var o = vo;
        ya(r.responseState);
        try {
          var s = r.pingedTasks, c;
          for (c = 0; c < s.length; c++) {
            var p = s[c];
            rl(r, p);
          }
          s.splice(0, c), r.destination !== null && Si(r, r.destination);
        } catch (y) {
          So(r, y), bo(r, y);
        } finally {
          ya(o), Sa.current = t, ba.getCurrentStack = n, t === ga && qn(e);
        }
      }
    }
    function Co(r, e, t) {
      switch (t.parentFlushed = !0, t.status) {
        case xa: {
          var n = t.id = r.nextSegmentId++;
          return t.lastPushedText = !1, t.textEmbedded = !1, Do(e, r.responseState, n);
        }
        case Hr: {
          t.status = si;
          for (var o = !0, s = t.chunks, c = 0, p = t.children, y = 0; y < p.length; y++) {
            for (var R = p[y]; c < R.index; c++)
              D(e, s[c]);
            o = Ea(r, e, R);
          }
          for (; c < s.length - 1; c++)
            D(e, s[c]);
          return c < s.length && (o = B(e, s[c])), o;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Ea(r, e, t) {
      var n = t.boundary;
      if (n === null)
        return Co(r, e, t);
      if (n.parentFlushed = !0, n.forceClientRender)
        return Ct(e, r.responseState, n.errorDigest, n.errorMessage, n.errorComponentStack), Co(r, e, t), Aa(e, r.responseState);
      if (n.pendingTasks > 0) {
        n.rootSegmentID = r.nextSegmentId++, n.completedSegments.length > 0 && r.partialBoundaries.push(n);
        var o = n.id = jt(r.responseState);
        return Rr(e, r.responseState, o), Co(r, e, t), _r(e, r.responseState);
      } else {
        if (n.byteSize > r.progressiveChunkSize)
          return n.rootSegmentID = r.nextSegmentId++, r.completedBoundaries.push(n), Rr(e, r.responseState, n.id), Co(r, e, t), _r(e, r.responseState);
        Oo(e, r.responseState);
        var s = n.completedSegments;
        if (s.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var c = s[0];
        return Ea(r, e, c), Ao(e, r.responseState);
      }
    }
    function os(r, e, t) {
      return bs(e, r.responseState, t.id, t.errorDigest, t.errorMessage, t.errorComponentStack);
    }
    function Ta(r, e, t) {
      return Se(e, r.responseState, t.formatContext, t.id), Ea(r, e, t), $e(e, t.formatContext);
    }
    function as(r, e, t) {
      for (var n = t.completedSegments, o = 0; o < n.length; o++) {
        var s = n[o];
        is(r, e, t, s);
      }
      return n.length = 0, Ci(e, r.responseState, t.id, t.rootSegmentID);
    }
    function ol(r, e, t) {
      for (var n = t.completedSegments, o = 0; o < n.length; o++) {
        var s = n[o];
        if (!is(r, e, t, s))
          return o++, n.splice(0, o), !1;
      }
      return n.splice(0, o), !0;
    }
    function is(r, e, t, n) {
      if (n.status === si)
        return !0;
      var o = n.id;
      if (o === -1) {
        var s = n.id = t.rootSegmentID;
        if (s === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Ta(r, e, n);
      } else
        return Ta(r, e, n), ps(e, r.responseState, o);
    }
    function Si(r, e) {
      N();
      try {
        var t = r.completedRootSegment;
        t !== null && r.pendingRootTasks === 0 && (Ea(r, e, t), r.completedRootSegment = null, Fa(e, r.responseState));
        var n = r.clientRenderedBoundaries, o;
        for (o = 0; o < n.length; o++) {
          var s = n[o];
          os(r, e, s);
        }
        n.splice(0, o);
        var c = r.completedBoundaries;
        for (o = 0; o < c.length; o++) {
          var p = c[o];
          as(r, e, p);
        }
        c.splice(0, o), ie(e), N(e);
        var y = r.partialBoundaries;
        for (o = 0; o < y.length; o++) {
          var R = y[o];
          if (!ol(r, e, R)) {
            r.destination = null, o++, y.splice(0, o);
            return;
          }
        }
        y.splice(0, o);
        var j = r.completedBoundaries;
        for (o = 0; o < j.length; o++) {
          var W = j[o];
          as(r, e, W);
        }
        j.splice(0, o);
      } finally {
        ie(e), r.allPendingTasks === 0 && r.pingedTasks.length === 0 && r.clientRenderedBoundaries.length === 0 && r.completedBoundaries.length === 0 && (r.abortableTasks.size !== 0 && f("There was still abortable task at the root when we closed. This is a bug in React."), Q(e));
      }
    }
    function ss(r) {
      U(function() {
        return yi(r);
      });
    }
    function al(r, e) {
      if (r.status === Wr) {
        r.status = Nr, se(e, r.fatalError);
        return;
      }
      if (r.status !== Nr && r.destination === null) {
        r.destination = e;
        try {
          Si(r, e);
        } catch (t) {
          So(r, t), bo(r, t);
        }
      }
    }
    function ls(r, e) {
      try {
        var t = r.abortableTasks;
        t.forEach(function(n) {
          return gi(n, r, e);
        }), t.clear(), r.destination !== null && Si(r, r.destination);
      } catch (n) {
        So(r, n), bo(r, n);
      }
    }
    function il(r, e) {
      return new Promise(function(t, n) {
        var o, s, c = new Promise(function(X, de) {
          s = X, o = de;
        });
        function p() {
          var X = new ReadableStream(
            {
              type: "bytes",
              pull: function(de) {
                al(R, de);
              },
              cancel: function(de) {
                ls(R);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          X.allReady = c, t(X);
        }
        function y(X) {
          c.catch(function() {
          }), n(X);
        }
        var R = wa(r, Mt(e ? e.identifierPrefix : void 0, e ? e.nonce : void 0, e ? e.bootstrapScriptContent : void 0, e ? e.bootstrapScripts : void 0, e ? e.bootstrapModules : void 0), Sn(e ? e.namespaceURI : void 0), e ? e.progressiveChunkSize : void 0, e ? e.onError : void 0, s, p, y, o);
        if (e && e.signal) {
          var j = e.signal, W = function() {
            ls(R, j.reason), j.removeEventListener("abort", W);
          };
          j.addEventListener("abort", W);
        }
        ss(R);
      });
    }
    fs.renderToReadableStream = il, fs.version = v;
  }()), fs;
}
var kl;
function Yl() {
  if (kl) return Vr;
  kl = 1;
  var w, v;
  return process.env.NODE_ENV === "production" ? (w = Nl(), v = zl()) : (w = $l(), v = Vl()), Vr.version = w.version, Vr.renderToString = w.renderToString, Vr.renderToStaticMarkup = w.renderToStaticMarkup, Vr.renderToNodeStream = w.renderToNodeStream, Vr.renderToStaticNodeStream = w.renderToStaticNodeStream, Vr.renderToReadableStream = v.renderToReadableStream, Vr;
}
var ul = Yl();
const fl = (w) => {
  const {
    onClose: v,
    children: k,
    open: E = !1,
    className: f = "",
    innerClass: M = ""
  } = w;
  let U = null, L = null, b, C = "";
  return M && (C = M), E && (U = k, b = "open", L = /* @__PURE__ */ x.jsx("div", { className: `common-drawer-outer ${f}`, onClick: v })), /* @__PURE__ */ x.jsxs(cl, { children: [
    L,
    /* @__PURE__ */ x.jsx("div", { className: `${C} common-drawer-inner ${b}`, children: U })
  ] });
}, Gl = ({ pageMeta: w, updatePageMetaState: v }) => {
  const k = (U, L) => {
    v(L, U.target.value);
  }, { name: E = "", status: f = "", slug: M = "" } = w;
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
          value: E
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
          value: M
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
}, Ut = (w = null, v = !1) => {
  let k = Pl(_a);
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
      updateViewportDimension: (U, L, b) => {
      }
    } : void 0;
  if (!w) return k;
  if (!k) return;
  let E = k.editorState, f = [];
  w.indexOf(".") > -1 ? f = w.split(".") : f = [w];
  for (let U = 0; U < f.length; U++) {
    let L = f[U];
    if (!E || typeof E != "object" && !Array.isArray(E))
      break;
    if (L.indexOf("[") > -1) {
      let b = L.split("["), C = b[0], N = parseInt(b[1].replace("]", ""));
      if (!E[C])
        break;
      E = E[C][N];
    } else
      E = E[f[U]];
  }
  return {
    ...k,
    setState: (U) => {
      let L = Ro(k.editorState), b = L;
      for (let C = 0; C < f.length; C++) {
        let N = f[C];
        if (N.indexOf("[") > -1) {
          let D = N.split("["), B = D[0], ie = parseInt(D[1].replace("]", ""));
          b[B] = Ro(b[B]) || [], b[B][ie] = Ro(U);
          break;
        }
        C === f.length - 1 ? b[N] = Ro(U) : (b[N] = Ro(b[N]) || {}, b = b[N]);
      }
      k.setState(L);
    },
    editorState: E
  };
}, Ro = (w) => Array.isArray(w) ? [...w] : typeof w == "object" ? { ...w } : w, Iu = (w) => (v) => {
  const { editorState: k, editing: E, setState: f } = Ut(v.sectionName);
  return /* @__PURE__ */ x.jsx(w, { ...k, editing: E, setState: f, ...v });
}, Pu = (w = null) => {
  const v = Ut(w).editorState;
  return [v == null ? void 0 : v.editorState, v == null ? void 0 : v.setState, v == null ? void 0 : v.editing];
}, Du = (w = null, v) => ({ ...Ut(w).editorState, ...v }), Fu = (w) => (v) => /* @__PURE__ */ x.jsx(_a.Consumer, { children: (k) => /* @__PURE__ */ x.jsx(w, { ...v, editorContext: k }) }), _a = jl(null), Cl = (w, v, k) => (E) => {
  const f = { ...v, [w]: E };
  k(f);
}, Rt = [];
for (let w = 0; w < 256; ++w)
  Rt.push((w + 256).toString(16).slice(1));
function Xl(w, v = 0) {
  return (Rt[w[v + 0]] + Rt[w[v + 1]] + Rt[w[v + 2]] + Rt[w[v + 3]] + "-" + Rt[w[v + 4]] + Rt[w[v + 5]] + "-" + Rt[w[v + 6]] + Rt[w[v + 7]] + "-" + Rt[w[v + 8]] + Rt[w[v + 9]] + "-" + Rt[w[v + 10]] + Rt[w[v + 11]] + Rt[w[v + 12]] + Rt[w[v + 13]] + Rt[w[v + 14]] + Rt[w[v + 15]]).toLowerCase();
}
let ll;
const Zl = new Uint8Array(16);
function Jl() {
  if (!ll) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ll = crypto.getRandomValues.bind(crypto);
  }
  return ll(Zl);
}
const Ql = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), El = { randomUUID: Ql };
function Kl(w, v, k) {
  var f;
  if (El.randomUUID && !w)
    return El.randomUUID();
  w = w || {};
  const E = w.random ?? ((f = w.rng) == null ? void 0 : f.call(w)) ?? Jl();
  if (E.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return E[6] = E[6] & 15 | 64, E[8] = E[8] & 63 | 128, Xl(E);
}
const ql = (w, v) => {
  let k = { ...w };
  k.menus = { ...w.menus };
  const { optionMenu: E, componentUUID: f } = v.payload;
  return k.menus[f] = E, k;
}, eu = {
  SET_OPTION_MENU: ql
}, tu = (w, v) => {
  const k = eu[v.type], E = { ...w };
  return k ? k(E, v) : w;
}, wi = (w) => {
  var It, Ke, it;
  const {
    sectionName: v = "children",
    tagName: k = "div",
    isRoot: E = !1,
    iframeRef: f,
    editing: M = void 0,
    editorOnly: U,
    ...L
  } = w, [b, C] = pn(!1), [N, D] = zn.useReducer(tu, {
    menus: {}
  }), B = Ut(v), ie = zn.useRef(null), [Q, re] = pn(null), [z, F] = pn(null), [se, Le] = pn(!1), we = zn.useRef({}), [Re, Pe] = pn({}), ge = zn.useRef(null), [ot, me] = pn(""), ft = (K) => (ee) => {
    K == 0 && (we.current = {}), we.current[K] != ee && (we.current[K] = ee);
  };
  console.log("oM", N.menus);
  const Be = (K) => N.menus[K], ze = (K, ee) => {
    console.log("Set button state ", K), D({
      type: "SET_OPTION_MENU",
      payload: {
        optionMenu: ee,
        componentUUID: K
      }
    });
  }, q = ((K) => K ? Object.keys(K).sort(
    (ee, te) => {
      var Y, oe;
      return ((Y = K[ee]) == null ? void 0 : Y.displayName) > ((oe = K[te]) == null ? void 0 : oe.displayName) ? 1 : -1;
    }
  ) : [])(B == null ? void 0 : B.componentList), {
    editorState: Me = [],
    previewing: he,
    renderFlags: Oe,
    editorOptions: J
  } = B;
  let { editing: Ee } = B;
  M !== void 0 && (Ee = M);
  let ut = Me, ke = Me || [], Ae = null;
  const Ht = (K) => (ee) => {
    let te = [...ke];
    ee.preventDefault(), ee.stopPropagation();
    const Y = te.findIndex((oe) => oe.uuid == K);
    te.splice(Y, 1), B.setState(te);
  }, _t = (K) => (ee) => {
    let te = [...ke];
    ee.preventDefault(), ee.stopPropagation();
    const Y = te.findIndex((fe) => fe.uuid == K);
    if (Y == 0) return;
    let oe = te[Y];
    te[Y] = te[Y - 1], te[Y - 1] = oe, B.setState(te);
  }, Ve = (K) => (ee) => {
    let te = [...ke];
    ee.preventDefault(), ee.stopPropagation();
    const Y = te.findIndex((fe) => fe.uuid == K);
    if (Y == ke.length - 1) return;
    let oe = te[Y];
    te[Y] = te[Y + 1], te[Y + 1] = oe, B.setState(te);
  };
  if (ut) {
    const K = ru(B, ft, Ee);
    Ae = nu({
      componentData: ut,
      renderFlags: Oe,
      editing: Ee,
      context: B,
      moveUp: _t,
      moveDown: Ve,
      currentChildren: ke,
      removeComponent: Ht,
      getComp: K,
      buttonRenderState: (ee) => [Be(ee), (te) => ze(ee, te)]
    });
  }
  const { componentList: je, viewportDimensions: Ye } = B, gt = (K) => {
    let ee = [...ke];
    C(!1);
    let te = K;
    te || (te = K || q[0]), ee.push({ comp: te, props: {}, uuid: Kl() }), B.setState(ee);
  };
  let at = null;
  Ee && !(Oe != null && Oe.noAdd) && (at = /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx("div", { className: "unb-comp-section__add-component", onClick: () => C(!0) }),
    /* @__PURE__ */ x.jsxs(fl, { open: b, className: "component-drawer", onClose: () => C(!1), children: [
      /* @__PURE__ */ x.jsx("h1", { className: "component-drawer__h1", children: "Insert Component" }),
      /* @__PURE__ */ x.jsxs("label", { children: [
        "Search:",
        /* @__PURE__ */ x.jsx("input", { placeholder: "search", type: "text", value: ot, onChange: (K) => me(K.target.value) })
      ] }),
      /* @__PURE__ */ x.jsx("div", { className: "componeent-drawer__component-list", children: q.map((K) => {
        const ee = je[K], te = ee.displayName ? ee.displayName : ee, Y = ee.description;
        return ot && te.toLowerCase().componentNameOf(ot.toLowerCase()) == -1 ? null : /* @__PURE__ */ x.jsxs("div", { onClick: () => gt(K), className: "component-drawer__component", children: [
          te,
          Y && /* @__PURE__ */ x.jsx("div", { className: "component-drawer__description", children: Y })
        ] }, K);
      }) })
    ] })
  ] })), _o(() => {
    var K, ee;
    if (ie && ie.current) {
      let te = f.current, Y = [];
      if ((K = J == null ? void 0 : J.pageOptions) != null && K.scripts && ((ee = J.pageOptions.scripts) == null ? void 0 : ee.length) > 0)
        for (let oe of J.pageOptions.scripts) {
          const fe = () => new Promise((st) => {
            const Ue = te.contentDocument.createElement("script");
            Ue.src = oe, te.contentDocument.head.appendChild(Ue), Ue.onload = () => st(), Ue.onerror = () => st();
          });
          Y.push(fe);
        }
      new Promise(async (oe) => {
        for (let fe = 0; fe < Y.length; fe++)
          await Y[fe]();
        oe(!0);
      }).then(() => {
        var oe, fe;
        (oe = J == null ? void 0 : J.pageOptions) != null && oe.js && ((fe = J.pageOptions.js) == null ? void 0 : fe.length) > 0 && J.pageOptions.js.forEach((st) => {
          const Ue = te.contentDocument.createElement("script");
          Ue.textContent = st, te.contentDocument.body.appendChild(Ue);
        });
      });
    }
  }, [ie.current]), _o(() => {
    if (f && f.current && Ye) {
      const { zoom: K, width: ee, height: te } = Ye;
      f.current.style.zoom = `${K / 100}`, f.current.contentDocument.body.style.minWidth = `${ee - 20 / K * 100}px`, f.current.contentDocument.body.style.minHeight = `${te - 20 / K * 100}px`;
    }
  }, [Q, Ye]), _o(
    () => {
      if (!we.current) return;
      const K = () => {
        if (we.current)
          for (let ee in we.current) {
            const te = we.current[ee];
            if (!te) continue;
            let Y = te.nextSibling;
            const oe = { x: 1e9, y: 1e9, bottom: -1e7, right: -1e7 };
            for (; Y && !(Y != null && Y.classList.contains("content-section-controls__wrapper")) && !(Y != null && Y.classList.contains("unb-comp-section__add-component")); )
              (Y == null ? void 0 : Y.getBoundingClientRect()) && (oe.x = Math.min(oe.x, Y.offsetLeft), oe.y = Math.min(oe.y, Y.offsetTop), oe.bottom = Math.max(oe.bottom, Y.offsetTop + Y.offsetHeight), oe.right = Math.max(oe.right, Y.offsetLeft + Y.offsetWidth)), Y = Y == null ? void 0 : Y.nextSibling;
            te.style.width = `${oe.right - oe.x}px`, te.style.height = `${oe.bottom - oe.y}px`, te.style.position = "absolute", te.style.left = `${oe.x}px`, te.style.top = `${oe.y}px`;
          }
      };
      return window.addEventListener("resize", K), setTimeout(K, 10), () => {
        window.removeEventListener("resize", K);
      };
    },
    [
      Me,
      we.current,
      Ye,
      Q,
      ie.current,
      Ee,
      se,
      z
    ]
  ), _o(() => {
    ge.current != null && ge.current.addEventListener("mousedown", (K) => {
      K.preventDefault(), K.stopPropagation();
      let ee = { x: K.clientX, y: K.clientY };
      Ye.width, Ye.height, Ye.width, Ye.height;
      let te = (fe) => {
        fe.preventDefault(), fe.stopPropagation();
        let st = { x: fe.clientX - ee.x, y: fe.clientY - ee.y };
        ee = { x: fe.clientX, y: fe.clientY }, B.updateViewportDimension("width", st.x, !0), B.updateViewportDimension("height", st.y, !0);
      }, Y = (fe) => {
        fe.preventDefault(), fe.stopPropagation(), fe.buttons == 1 ? te(fe) : oe(fe);
      }, oe = (fe) => {
        fe.preventDefault(), fe.stopPropagation();
        let st = { x: fe.clientX - ee.x, y: fe.clientY - ee.y };
        ee = { x: fe.clientX, y: fe.clientY }, B.updateViewportDimension("width", st.x, !0), B.updateViewportDimension("height", st.y, !0), -window.removeEventListener("mousemove", te), window.removeEventListener("mouseup", oe), window.removeEventListener("mousein", Y);
      };
      window.addEventListener("mousemove", te), window.addEventListener("mouseup", oe), window.addEventListener("mousein", Y);
    });
  }, []);
  let ct = /* @__PURE__ */ x.jsx(au, { editing: Ee, children: /* @__PURE__ */ x.jsxs(k, { ...L, children: [
    Ae,
    at
  ] }) }), nt = (It = J == null ? void 0 : J.pageOptions) == null ? void 0 : It.renderInIframe;
  if (nt === void 0 && (nt = !0), E && nt) {
    let K = "<!doctype HTML>", ee;
    (Ke = J == null ? void 0 : J.pageOptions) != null && Ke.href ? (ee = J.pageOptions.href, K = void 0) : (it = J == null ? void 0 : J.pageOptions) != null && it.pageHtml && (K = J.pageOptions.pageHtml, ee = void 0), ct = /* @__PURE__ */ x.jsxs(
      "div",
      {
        className: "page-editor__viewport-holder",
        style: {
          width: Ye.width * Ye.zoom / 100,
          height: Ye.height * Ye.zoom / 100
        },
        children: [
          /* @__PURE__ */ x.jsx(
            "iframe",
            {
              className: "page-editor__viewport-iframe",
              src: ee,
              srcDoc: K,
              onLoad: async (te) => {
                var fe, st, Ue, rt, Ge, Wt;
                const Y = te.currentTarget;
                if (!Y.contentDocument || !Y.contentDocument.head) return;
                if (f && f.current != Y && (f.current = Y), !Y.contentDocument.head != ie.current) {
                  ie.current = Y.contentDocument.head;
                  const Nt = document.createElement("style"), en = (await import("./unb-editor-DqkaDvao.mjs")).default;
                  Nt.textContent = en, Y.contentDocument.head.appendChild(Nt), (fe = J == null ? void 0 : J.pageOptions) != null && fe.css && ((st = J.pageOptions.css) == null ? void 0 : st.length) > 0 && J.pageOptions.css.forEach((He) => {
                    const vt = document.createElement("style");
                    vt.textContent = He, Y.contentDocument.head.appendChild(vt);
                  }), (Ue = J == null ? void 0 : J.pageOptions) != null && Ue.stylesheets && ((rt = J.pageOptions.stylesheets) == null ? void 0 : rt.length) > 0 && J.pageOptions.stylesheets.forEach((He) => {
                    const vt = document.createElement("link");
                    vt.rel = "stylesheet", vt.href = He, Y.contentDocument.head.appendChild(vt);
                  });
                }
                let oe;
                (Ge = J == null ? void 0 : J.pageOptions) != null && Ge.documentRoot ? typeof J.pageOptions.documentRoot == "function" ? oe = J.pageOptions.documentRoot(Y) : typeof J.pageOptions.documentRoot == "string" ? oe = Y.contentDocument.querySelector(J.pageOptions.documentRoot) : J.pageOptions.documentRoot instanceof HTMLElement && (oe = J.pageOptions.documentRoot) : oe = Y.contentDocument.body, Q != oe && ((Wt = J == null ? void 0 : J.pageOptions) != null && Wt.clearContainer && (oe.innerHTML = ""), re(oe), Le(!0));
              },
              children: Q && Bl(ct, Q)
            },
            "iframe"
          ),
          /* @__PURE__ */ x.jsx("div", { ref: ge, className: "page-editor__viewport-handle" })
        ]
      }
    );
  }
  return ct;
}, nu = ({
  componentData: w,
  renderFlags: v,
  editing: k,
  context: E,
  moveUp: f,
  moveDown: M,
  currentChildren: U,
  removeComponent: L,
  getComp: b,
  buttonRenderState: C
}) => w.map((N, D) => {
  let B = null;
  return k && E.componentList[N.comp] && (E.componentList[N.comp].displayName ? E.componentList[N.comp].displayName : N.comp, B = [], v != null && v.noRearrange || (D > 0 && B.push(
    /* @__PURE__ */ x.jsx("button", { onClick: f(N.uuid), children: "⬆️" }, `${N.uuid}-up-button`)
  ), D < U.length - 1 && B.push(
    /* @__PURE__ */ x.jsx(
      "button",
      {
        onClick: M(N.uuid),
        children: "⬇️"
      },
      `${N.uuid}-down-button`
    )
  )), v != null && v.noAdd || B.push(
    /* @__PURE__ */ x.jsx(
      "button",
      {
        className: "content-section-controls__delete-button",
        onClick: L(N.uuid),
        children: "X"
      },
      `${N.comp}-delete-button`
    )
  )), b({
    data: N,
    uuid: N.uuid,
    index: D,
    optionButtons: B,
    buttonRenderState: C(N.uuid)
  });
}), ru = (w, v, k = void 0) => ({ data: E, uuid: f, index: M, optionButtons: U, buttonRenderState: L }) => {
  const b = w.componentList[E.comp], [C, N] = L;
  if (!b) return null;
  const D = w.componentList[E.comp].comp;
  let B = E.props;
  return k === void 0 && (k = w.editing), /* @__PURE__ */ x.jsxs(
    _a.Provider,
    {
      value: { ...iu(w, M), editing: k },
      children: [
        /* @__PURE__ */ x.jsx(
          ou,
          {
            optionButtons: U,
            componentName: b.displayName,
            editing: k,
            previewing: w.previewing,
            buttonRender: C,
            setWrapperDomNode: v(f)
          },
          f + "-slot-wrapper"
        ),
        /* @__PURE__ */ x.jsx(
          D,
          {
            ...B,
            editing: k,
            componentName: b.displayName,
            previewing: w.previewing,
            setButtonRender: N
          },
          f + "-comp"
        )
      ]
    },
    f + "-slot-provider"
  );
}, ou = ({ componentName: w, optionButtons: v, ...k }) => {
  const { editing: E, previewing: f, buttonRender: M, setWrapperDomNode: U } = k;
  if (!E)
    return U(null), k.children;
  let L = null;
  M && typeof M == "function" && (L = M(), L && (L = /* @__PURE__ */ x.jsx("div", { className: "content-section-controls__extra-buttons-wrapper", children: /* @__PURE__ */ x.jsx("div", { className: "content-section-controls__extra-buttons", children: L }) })));
  const b = /* @__PURE__ */ x.jsxs("div", { className: "content-section-controls__inner", children: [
    /* @__PURE__ */ x.jsx("strong", { className: "content-section-controls__component-type", children: w }),
    v,
    L
  ] });
  return /* @__PURE__ */ x.jsxs("div", { className: "content-section-controls__wrapper", ref: U, children: [
    b,
    k.children
  ] });
}, au = (w) => {
  const { editing: v, children: k, setWrapperDomNode: E, key: f } = w;
  return v ? /* @__PURE__ */ x.jsx("div", { className: "content-section-controls__wrapper --unb-content-section", ref: E, children: k }) : /* @__PURE__ */ x.jsx(x.Fragment, { children: k });
}, iu = (w, v, k) => {
  const E = Ro(w);
  let f;
  return f = (M, U) => {
    const L = Ro(w.editorState);
    U ? L[v].props = {
      ...L[v].props,
      [U]: M
    } : L[v].props = {
      ...L[v].props,
      ...M
    }, w.setState(L);
  }, E.editorState = w.editorState[v].props, E.setState = f, E;
}, su = ({ color: w = "white" }) => /* @__PURE__ */ x.jsxs("svg", { width: "24px", height: "24px", strokeWidth: "1.5", viewBox: "0 0 24 24", fill: "none", stroke: w, xmlns: "http://www.w3.org/2000/svg", color: "#000000", children: [
  /* @__PURE__ */ x.jsx("path", { d: "M9 9L4 4M4 4V8M4 4H8", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M15 9L20 4M20 4V8M20 4H16", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M9 15L4 20M4 20V16M4 20H8", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M15 15L20 20M20 20V16M20 20H16", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
] }), lu = ({ color: w = "#ffffff" }) => /* @__PURE__ */ x.jsxs("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", strokeWidth: "1.5", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: w, stroke: w, children: [
  /* @__PURE__ */ x.jsx("path", { d: "M11 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V12", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M2 7L22 7", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M5 5.01L5.01 4.99889", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M8 5.01L8.01 4.99889", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M11 5.01L11.01 4.99889", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M21.6665 16.6667C21.0477 15.097 19.6346 14 17.9903 14C16.2319 14 14.7378 15.2545 14.1969 17", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M19.9952 16.7723H21.4002C21.7316 16.7723 22.0002 16.5036 22.0002 16.1723V14.55", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M14.3337 19.3333C14.9525 20.903 16.3657 22 18.01 22C19.7684 22 21.2624 20.7455 21.8033 19", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ x.jsx("path", { d: "M16.005 19.2277H14.6001C14.2687 19.2277 14.0001 19.4964 14.0001 19.8277V21.45", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
] }), uu = (w) => {
  const [v, k] = pn({
    editorState: w.pageData ? w.pageData : { children: [] },
    pageMetaState: w.pageMeta ? w.pageMeta : { name: "", slug: "", status: "draft" },
    preview: !1,
    changes: !1,
    advancedOpen: !1,
    pageEditorDrawerOpen: !1
  }), [E, f] = pn({ width: 1200, height: 800, zoom: 100 });
  console.log("eS", v.editorState);
  const M = Bt.useRef(null), U = Bt.useRef({ width: 0, height: 0, viewport: { width: E.width, height: E.height } }), L = () => {
    var Z;
    (Z = M.current) != null && Z.requestFullscreen && (document.fullscreenElement ? document.exitFullscreen() : M.current.requestFullscreen());
  }, b = (Z, q, Me = !1) => {
    U.current.viewport[Z] = parseInt(q), f((he) => Me ? { ...he, [Z]: he[Z] + parseInt(q) } : { ...he, [Z]: parseInt(q) });
  }, C = Bt.useRef(null);
  Bt.useEffect(() => {
    if (window.addEventListener("beforeunload", (Z) => {
      if (v.changes) {
        var q = "It looks like you have been editing something. If you leave before saving, your changes will be lost.";
        return (Z || window.event).returnValue = q, q;
      }
    }), C.current) {
      const q = C.current.getBoundingClientRect();
      U.current.viewport.width = q.width, U.current.viewport.height = q.height;
    }
    window.addEventListener(
      "resize",
      () => {
        M.current;
      }
    );
  }, []);
  const N = v.editorState, { preview: D } = v, {
    streams: B,
    renderFlags: ie = {},
    exportState: Q,
    editorOptions: re,
    editing: z = !D
  } = w;
  let F = wu;
  ie && (F = { ...F, ...ie });
  const se = (Z) => {
    k({ ...v, ...Z, changes: !0 });
  }, Le = () => {
    k({ ...v, pageEditorDrawerOpen: !v.pageEditorDrawerOpen });
  }, we = (Z, q) => {
    k({
      ...v,
      pageMetaState: {
        ...v.pageMetaState,
        [Z]: q
      }
    });
  };
  let Re = (Z = {}, q = !0) => {
    var Me, he;
    if ((Me = re == null ? void 0 : re.pageOptions) != null && Me.wrapperComponent) {
      if (q && !((he = re == null ? void 0 : re.pageOptions) != null && he.includeWrapperInRender)) return /* @__PURE__ */ x.jsx(wi, { isRoot: !0, ...Z });
      const Oe = re.pageOptions.wrapperComponent;
      return /* @__PURE__ */ x.jsx(Oe, { children: /* @__PURE__ */ x.jsx(wi, { isRoot: !0, ...Z }) });
    }
    return /* @__PURE__ */ x.jsx(wi, { isRoot: !0, ...Z });
  };
  const Pe = () => N.children.map((Z) => {
    const q = w.componentList[Z.comp];
    if (!q) return "";
    const Me = w.componentList[Z.comp].comp;
    let he = Z.props;
    return {
      comp: Z.comp,
      markup: ul.renderToString(
        /* @__PURE__ */ x.jsx(
          Me,
          {
            ...he,
            editing: !1,
            componentName: q.displayName,
            previewing: !0,
            setButtonRender: (Oe) => {
            },
            children: Z.children
          }
        )
      ).replaceAll(/[class|style]\=\"\""/, "")
    };
  }), ge = (Z = !1) => Z ? Pe() : ul.renderToString(
    /* @__PURE__ */ x.jsx(
      _a.Provider,
      {
        value: {
          setState: Cl("editorState", v, se),
          editorState: N,
          componentList: w.componentList,
          editorOptions: { ...re, pageOptions: { ...re.pageOptions, renderInIframe: !1 } },
          plugins: w.plugins,
          editing: !1,
          previewing: !0,
          renderFlags: F,
          streams: B,
          viewportDimensions: E,
          updateViewportDimension: b
        },
        children: Re()
      }
    )
  );
  Q && Q(() => v, k, ge);
  const ot = () => {
    if (!w.onSave) {
      console.log("No onSave function connected to app");
      return;
    }
    let Z = [];
    F.individualComponents && (Z = ge(!0));
    const q = ge(), Me = v.editorState, he = v.pageMetaState, Oe = { pageState: Me, pageMarkup: q, metaState: he, componentsMarkup: Z };
    w.onSave && w.onSave(Oe);
  };
  let me = null;
  w.onSave && (me = /* @__PURE__ */ x.jsxs(
    "a",
    {
      className: "page-editor__button",
      onClick: ot,
      "data-testid": "save-page-button",
      children: [
        "Save ",
        v.changes ? "*" : "",
        " "
      ]
    }
  ));
  let ft = null;
  B && (ft = B.getComponent());
  let Be = "";
  F.inlineOptionBar && (Be += "page-editor__menu--inline");
  const ze = (Z) => {
    if (Z && M.current != Z) {
      const q = Z.getBoundingClientRect();
      U.current.width = q.width, U.current.height = q.height;
    }
    M.current = Z;
  };
  return /* @__PURE__ */ x.jsxs("div", { ref: ze, className: "page-editor__inner", children: [
    /* @__PURE__ */ x.jsx(
      fl,
      {
        open: v.pageEditorDrawerOpen,
        onClose: Le,
        children: /* @__PURE__ */ x.jsx(
          Gl,
          {
            pageMeta: v.pageMetaState,
            updatePageMetaState: we
          }
        )
      }
    ),
    /* @__PURE__ */ x.jsxs("div", { className: "page-editor__menu " + Be, children: [
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
      me,
      /* @__PURE__ */ x.jsx("a", { className: "page-editor__button", title: "Refresh Page", onClick: () => {
        var Z, q;
        (q = (Z = C == null ? void 0 : C.current) == null ? void 0 : Z.contentWindow) == null || q.location.reload();
      }, children: /* @__PURE__ */ x.jsx(lu, {}) }),
      /* @__PURE__ */ x.jsx("a", { className: "page-editor__button", title: "Full Screen", onClick: L, children: /* @__PURE__ */ x.jsx(su, {}) }),
      /* @__PURE__ */ x.jsx("a", { className: "page-editor__button", onClick: Le, children: "Options" }),
      /* @__PURE__ */ x.jsxs("div", { className: "page-editor__dimensions", children: [
        /* @__PURE__ */ x.jsx("input", { type: "number", step: 100, onChange: (Z) => b("width", parseInt(Z.target.value)), value: E.width }),
        /* @__PURE__ */ x.jsx("strong", { children: "px" }),
        "X",
        /* @__PURE__ */ x.jsx("input", { type: "number", step: 100, onChange: (Z) => b("height", parseInt(Z.target.value)), value: E.height }),
        /* @__PURE__ */ x.jsx("strong", { children: "px" }),
        /* @__PURE__ */ x.jsx("input", { type: "number", step: 20, min: 20, max: 200, onChange: (Z) => b("zoom", parseInt(Z.target.value)), value: E.zoom }),
        /* @__PURE__ */ x.jsx("strong", { children: "%" })
      ] })
    ] }),
    /* @__PURE__ */ x.jsxs(
      _a.Provider,
      {
        value: {
          setState: Cl("editorState", v, se),
          editorState: N,
          componentList: w.componentList,
          plugins: w.plugins,
          editing: !D,
          previewing: D,
          renderFlags: F,
          streams: B,
          contextualPageData: w.contextualPageData,
          editorOptions: re,
          viewportDimensions: E,
          updateViewportDimension: b
        },
        children: [
          Re({ key: "root-content-section", iframeRef: C }, !1),
          /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsx(ft, {}) })
        ]
      },
      "root-provider"
    )
  ] });
}, dl = (w) => {
  const {
    sectionName: v,
    tagName: k = "div",
    label: E = null,
    min: f,
    max: M,
    step: U = 1,
    hidden: L = !0,
    ...b
  } = w;
  let { current: C = typeof f == "number" ? f : 1 } = w;
  const N = k, { editorState: D, editing: B, setState: ie } = Ut(v);
  D !== void 0 && (C = D);
  const Q = (re) => {
    let z = parseFloat(re.currentTarget.value);
    z || (z = 0), f !== void 0 && z < f && (z = f), M !== void 0 && z > M && (z = M), ie(z);
  };
  return B ? E ? /* @__PURE__ */ x.jsx(N, { ...b, children: /* @__PURE__ */ x.jsxs("label", { children: [
    /* @__PURE__ */ x.jsx("span", { children: E }),
    /* @__PURE__ */ x.jsx(
      "input",
      {
        value: C,
        type: "number",
        onChange: Q,
        min: f,
        max: M,
        step: U
      }
    )
  ] }) }, "num-input-wrapper") : /* @__PURE__ */ x.jsx(N, { children: /* @__PURE__ */ x.jsx(
    "input",
    {
      value: C,
      type: "number",
      onChange: Q,
      min: typeof f == "number" ? f : void 0,
      max: typeof M == "number" ? M : void 0,
      step: typeof U == "number" ? U : void 0
    },
    "num-input"
  ) }, "num-input-wrapper") : L ? null : /* @__PURE__ */ x.jsx(N, { ...b, children: D });
}, Dl = (w) => {
  const { sectionName: v, children: k, editing: E } = w, f = Ut(v);
  let { previewing: M, editing: U } = f || { previewing: !1, editing: !1 };
  const L = { ...f };
  return L.editorState || (L.editorState = {}), E !== void 0 && (L.editing = E), /* @__PURE__ */ x.jsx(_a.Provider, { value: L, children: k });
}, cu = (w) => {
  const {
    sectionName: v,
    current: k,
    label: E,
    hidden: f = !1,
    tagName: M = "div",
    ...U
  } = w, L = M, { editorState: b, editing: C, setState: N } = Ut(), D = (B) => {
    N({ ...b, [v]: B.currentTarget.checked });
  };
  return C ? /* @__PURE__ */ x.jsx(L, { children: /* @__PURE__ */ x.jsxs("label", { children: [
    /* @__PURE__ */ x.jsx("span", { children: E }),
    /* @__PURE__ */ x.jsx(
      "input",
      {
        type: "checkbox",
        onChange: D,
        checked: k
      }
    )
  ] }) }) : f ? null : /* @__PURE__ */ x.jsx(L, { ...U, children: k ? "true" : "false" });
}, pl = (w) => {
  const { children: v, editing: k } = w, { editorState: E, editing: f } = Ut(), M = k || f;
  return /* @__PURE__ */ x.jsx(Fl, { hide: !M, children: v });
}, Mu = (w) => {
  const { children: v, editing: k } = w, { editorState: E, editing: f } = Ut(), M = k || f;
  return /* @__PURE__ */ x.jsx(Fl, { hide: M, children: v });
}, Fl = (w) => {
  const { children: v, hide: k = !1 } = w;
  return k ? null : /* @__PURE__ */ x.jsx(x.Fragment, { children: v });
}, fu = (w) => {
  const { text: v = "", count: k } = w;
  return /* @__PURE__ */ x.jsx("div", { className: "section__column", children: /* @__PURE__ */ x.jsx(wi, {}) });
}, du = (w) => {
  const { count: v = 3, responsive: k = !1, setButtonRender: E } = w;
  let f = fu, M = [], U;
  zn.useEffect(() => {
    E && E(() => /* @__PURE__ */ x.jsxs(zn.Fragment, { children: [
      /* @__PURE__ */ x.jsx(
        dl,
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
        cu,
        {
          label: "Responsive Columns",
          sectionName: "responsive"
        }
      )
    ] }));
  }, []), v && (U = `section__inner-div column-section ${k ? "--responsive" : "--fixed"} --cols-${v}`);
  for (var L = 0; L < v; L++) {
    let b = "column" + L;
    M.push(
      /* @__PURE__ */ x.jsx(
        Dl,
        {
          sectionName: b,
          children: /* @__PURE__ */ x.jsx(f, { ...w })
        },
        L
      )
    );
  }
  return /* @__PURE__ */ x.jsxs(zn.Fragment, { children: [
    /* @__PURE__ */ x.jsx(pl, { children: /* @__PURE__ */ x.jsx("div", { className: "section__columns__heading" }) }),
    /* @__PURE__ */ x.jsx("section", { className: "section", children: /* @__PURE__ */ x.jsx("div", { className: U, children: M }) })
  ] });
}, Tl = (w) => {
  const {
    value: v,
    sectionName: k,
    label: E,
    tagName: f = "div",
    hidden: M = !1,
    inputClass: U = {},
    children: L = null,
    ...b
  } = w, C = f, { editorState: N, editing: D, setState: B } = Ut(k);
  let ie = v || N || "";
  const Q = (re) => {
    B(re.currentTarget.value);
  };
  return D ? E ? (
    // @ts-ignore
    /* @__PURE__ */ x.jsx(C, { ...U, ...b, children: /* @__PURE__ */ x.jsxs("label", { children: [
      /* @__PURE__ */ x.jsx("span", { children: E }),
      /* @__PURE__ */ x.jsx("input", { type: "text", onChange: Q, value: ie })
    ] }) })
  ) : (
    // @ts-ignore
    /* @__PURE__ */ x.jsx(C, { ...U, ...b, children: /* @__PURE__ */ x.jsx("input", { type: "text", onChange: Q, value: ie }) })
  ) : M ? null : (
    // @ts-ignore
    /* @__PURE__ */ x.jsxs(C, { ...U, ...b, children: [
      N[k],
      L
    ] })
  );
}, pu = (w) => {
  const {
    sectionName: v,
    options: k,
    current: E,
    optionLabels: f = null,
    label: M = !1,
    hidden: U = !1,
    tagName: L = "div",
    selectList: b = !1,
    ...C
  } = w, N = L, { editorState: D, editing: B, setState: ie } = Ut(), Q = (z) => {
    ie({ ...D, [v]: z.currentTarget.value });
  };
  let re = "";
  return b ? re = b : Array.isArray(k) ? (re = [], k.forEach((z, F) => {
    const se = f ? f[F] : z;
    re.push(
      /* @__PURE__ */ x.jsx("option", { value: z, className: "", children: se }, F)
    );
  })) : k && (re = [], Object.entries(k).forEach(([z, F], se) => {
    let Le = F, we = z;
    f && (we = f[z]), re.push(
      /* @__PURE__ */ x.jsx("option", { value: Le, className: "", children: we }, se)
    );
  })), B ? M ? /* @__PURE__ */ x.jsx(N, { children: /* @__PURE__ */ x.jsxs("label", { children: [
    /* @__PURE__ */ x.jsx("span", { children: M }),
    /* @__PURE__ */ x.jsx("select", { onChange: Q, value: E, children: re })
  ] }) }) : /* @__PURE__ */ x.jsx(N, { children: /* @__PURE__ */ x.jsx("select", { onChange: Q, value: E, children: re }) }) : U ? null : /* @__PURE__ */ x.jsx(N, { ...C, children: D[v] });
}, hu = ({
  bem: w,
  bemPrefix: v,
  classFunction: k
}) => new Proxy(
  { __compCache: {}, context: Bt.createContext({ bem: w, bemPrefix: v }) },
  { get: (E, f) => {
    const M = f;
    if (f == "BEM")
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
    ].includes(M))
      throw new Error("Invalid tagname for CE");
    if (!E.__compCache[M]) {
      const U = w, L = v;
      E.__compCache[M] = (b) => {
        let {
          bem: C,
          bemPrefix: N,
          bemName: D,
          editing: B,
          sectionName: ie,
          ...Q
        } = b;
        const re = Pl(E.context);
        let z = U, F = L;
        return typeof (re == null ? void 0 : re.bem) == "boolean" && C === void 0 && (z = re.bem), re != null && re.bemPrefix && N == null && (F = re.bemPrefix), /* @__PURE__ */ x.jsx(
          Ol,
          {
            tagName: M,
            bem: z,
            editing: B,
            bemPrefix: F,
            sectionName: ie,
            bemName: D || ie || void 0,
            classFunction: k,
            ...b
          }
        );
      };
    }
    return E.__compCache[M];
  } }
), Ml = hu({ bem: !0 }), Ol = ({
  placeholder: w = "",
  ref: v = null,
  className: k = "",
  sectionName: E = void 0,
  tagName: f = "div",
  textOnly: M = !1,
  bem: U = !1,
  bemName: L = "",
  editing: b = void 0,
  bemPrefix: C = "",
  classFunction: N = null,
  children: D = void 0,
  ...B
}) => {
  B = { ...B };
  const [ie, Q] = pn(!1);
  L || (L = E || f);
  let re = w;
  w || (re = `${f} placeholder`);
  let z = E;
  E || (z = `${f}`);
  const F = vl(null), se = Ut(z), Le = se == null ? void 0 : se.editorState;
  let { editing: we = !1 } = se;
  b !== void 0 && (we = b), console.log("myState", Le);
  const Re = (Oe, J) => {
    Pe.deleteContents();
    const Ee = Pe.createContextualFragment(J);
    Pe.insertNode(Ee), ze();
  }, [Pe, ge] = pn(), ot = (Oe, J) => {
    const Ee = F.current;
    if (!Ee) return;
    const ut = Ee.ownerDocument.getSelection();
    if (!ut || ut.rangeCount === 0) return !1;
    if (Ee.contains(ut.anchorNode) && Ee.contains(ut.focusNode)) {
      let ke = ut.getRangeAt(0);
      J(!0), ge(ke);
    }
  }, me = B.insertButtons;
  _o(() => {
    if (me && B.setButtonRender) {
      const Oe = me == null ? void 0 : me.map(
        (J) => /* @__PURE__ */ x.jsx("button", { onClick: (Ee) => ot(Ee, J.setModalOpen), children: J.buttonText })
      );
      B.setButtonRender(() => /* @__PURE__ */ x.jsx(x.Fragment, { children: Oe }));
    }
  }, [me]);
  const Be = vl(Le || null), ze = (Oe) => {
    let J = F.current.innerHTML;
    M && (J = F.current.innerText, F.current.innerHTML = J), J !== Be.current && se.setState(J);
  };
  _o(() => {
    if (!Le && !Be.current && B.children) {
      const Oe = ul.renderToString(B.children);
      Be.current = Oe, se.setState(Oe);
    }
  }, []);
  let Z = k;
  U && (C ? Z = `${C}__${L} ${Z}` : Z = `${L} ${Z}`), N && typeof N == "function" && (Z = N(f, B));
  const q = {};
  we && (Z += " unbContentEditable", q.onInput = ze, q["data-ph"] = re, q.ref = F, q.contentEditable = !0, q.suppressContentEditableWarning = !0, ie && (q.dangerouslySetInnerHTML = { __html: Be.current })), (!we || Be.current) && (q.dangerouslySetInnerHTML = { __html: Be.current }, B.children = void 0);
  let Me = f, he = B.style ? B.style : {};
  if (f == "rawText")
    if (we)
      Me = "div", he = q.style ? { ...q.style } : {}, he.display = "inline-block", he.padding = 0, he.margin = 0, he.width = "auto", he.transform = "none", he.border = "none", he.boxShadow = "none", he.outline = "none", he.overflow = "visible", he.lineHeight = "inherit", he.fontFamily = "inherit", he.fontSize = "inherit", he.fontWeight = "inherit", he.fontStyle = "inherit", he.color = "inherit", he.backgroundColor = "inherit", he.textAlign = "inherit", he.textDecoration = "inherit", he.textTransform = "inherit", he.minWidth = "50px", he.minHeight = "100%", q.style = he;
    else
      return /* @__PURE__ */ x.jsx(x.Fragment, { children: Be.current });
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx(
      Me,
      {
        className: Z,
        suppressContentEditableWarning: !0,
        ...q,
        ...B
      }
    ),
    me == null ? void 0 : me.map((Oe) => Oe.makeModal(Re))
  ] });
}, vu = (w) => {
  const {
    headingType: v = "h1",
    text: k = "",
    customClass: E = "",
    editing: f = !0,
    setButtonRender: M
  } = w, U = ["h1", "h2", "h3", "h4", "h5", "h6"];
  return _o(() => {
    M(() => /* @__PURE__ */ x.jsxs(cl, { children: [
      /* @__PURE__ */ x.jsx(
        pu,
        {
          sectionName: "headingType",
          options: U,
          label: "Heading Type"
        }
      ),
      /* @__PURE__ */ x.jsx(Tl, { sectionName: "text", label: "Heading Text" }),
      /* @__PURE__ */ x.jsx(Tl, { sectionName: "customClass", label: "Custom CSS Class" })
    ] }));
  }, []), /* @__PURE__ */ x.jsx("header", { children: /* @__PURE__ */ x.jsx(
    Ol,
    {
      sectionName: "text",
      tagName: v,
      placeholder: "Heading",
      className: E
    }
  ) });
}, mu = (w) => {
  const { text: v = "", customClass: k = "", sectionName: E, setButtonRender: f } = w;
  return /* @__PURE__ */ x.jsx(Ml.p, { ...w });
}, gu = (w) => {
  const { sectionName: v = "space" } = w, { editorState: k, editing: E, setState: f } = Ut(v), { space: M = k || 10 } = w, U = zn.useRef(null), L = zn.useRef({ startY: 0, startHeight: 0, mouseDown: !1 });
  let b = null;
  const C = (ie) => {
    ie.target === U.current && (L.current.startY = ie.clientY || ie.touches[0].clientY, L.current.startHeight = M || 0, (!L.current.startHeight || L.current.startHeight < 0) && (L.current.startHeight = 0), L.current.mouseDown = !0);
  }, N = (ie) => {
    if (!L.current.mouseDown) return;
    let re = (ie.clientY || ie.touches[0].clientY) - L.current.startY;
    const z = Math.max(0, L.current.startHeight + re);
    f(z);
  }, D = (ie) => {
    if (!L.current.mouseDown) return;
    let re = (ie.clientY || ie.touches[0].clientY) - L.current.startY;
    const z = Math.max(0, L.current.startHeight + re);
    f(z), L.current.mouseDown = !1;
  }, B = () => {
    U.current && (U.current.removeEventListener("mousedown", C), U.current.removeEventListener("touchstart", C), U.current.removeEventListener("mousemove", N), U.current.removeEventListener("touchmove", N), U.current.removeEventListener("mouseup", D), U.current.removeEventListener("touchend", D), U.current.removeEventListener("mouseleave", D), U.current.removeEventListener("touchcancel", D), U.current.removeEventListener("touchleave", D));
  };
  if (zn.useEffect(() => B, []), E) {
    const ie = (Q) => {
      Q != U.current && (B(), Q && (Q.addEventListener("mousedown", C), Q.addEventListener("touchstart", C), Q.addEventListener("mousemove", N), Q.addEventListener("touchmove", N), Q.addEventListener("mouseup", D), Q.addEventListener("touchend", D), Q.addEventListener("mouseleave", D), Q.addEventListener("touchcancel", D), Q.addEventListener("touchleave", D)), U.current = Q);
    };
    b = /* @__PURE__ */ x.jsx("div", { ref: ie, style: { height: M }, className: "spacer-handle", children: /* @__PURE__ */ x.jsx(
      dl,
      {
        sectionName: v,
        className: "spacer-input",
        current: M,
        max: 1e3,
        min: 0
      },
      "num-select"
    ) });
  } else
    return /* @__PURE__ */ x.jsx("div", { style: { height: `${M}px` } });
  return /* @__PURE__ */ x.jsx(zn.Fragment, { children: /* @__PURE__ */ x.jsx("div", { className: "unbeditor-spacer", style: { height: `${M}px` }, children: b }) });
}, Rl = {
  "column-with-text": { displayName: "Columns With Text", comp: du },
  heading: { displayName: "Heading", comp: vu },
  paragraph: { displayName: "Paragraph", comp: mu },
  spacer: { displayName: "Spacer", comp: gu }
};
var Ra = {}, _l;
function yu() {
  if (_l) return Ra;
  _l = 1;
  var w = Ll;
  if (process.env.NODE_ENV === "production")
    Ra.createRoot = w.createRoot, Ra.hydrateRoot = w.hydrateRoot;
  else {
    var v = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Ra.createRoot = function(k, E) {
      v.usingClientEntryPoint = !0;
      try {
        return w.createRoot(k, E);
      } finally {
        v.usingClientEntryPoint = !1;
      }
    }, Ra.hydrateRoot = function(k, E, f) {
      v.usingClientEntryPoint = !0;
      try {
        return w.hydrateRoot(k, E, f);
      } finally {
        v.usingClientEntryPoint = !1;
      }
    };
  }
  return Ra;
}
var Su = yu();
class bu {
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
  getStream(v, k, E) {
    return this.streams[v] && this.streams[v].stream.get(k, E), !1;
  }
}
class xu extends bu {
  constructor() {
    super(...arguments), this.setCurrentStream = null, this.currentCallback = null, this._setCurrentStreamName = null;
  }
  getStream(v, k, E, f) {
    if (this.streams[v]) {
      const { selectMax: M = 1, ...U } = E || {};
      this._setCurrentStreamName(v), this.streams[v].stream.get((L) => {
        this.currentCallback = k, this.setCurrentStream(L);
      }, U, f);
    }
    return !1;
  }
  addStream(v, k, E = void 0) {
    this.streams[v] = { name: v, stream: k, streamOptions: E };
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
      var U, L, b, C, N, D;
      const [v, k] = pn([]), [E, f] = pn(null);
      this.setCurrentStream = k, this._setCurrentStreamName = f;
      let M = null;
      if ((L = (U = this.streams[E]) == null ? void 0 : U.streamOptions) != null && L.streamAdapter) {
        const B = this.streams[E].streamOptions.streamAdapter;
        M = /* @__PURE__ */ x.jsx(
          B,
          {
            entries: v,
            select: (ie) => {
              this._setCurrentStreamName(null), this.currentCallback(ie);
            }
          }
        );
      } else if ((C = (b = this.streams[E]) == null ? void 0 : b.streamOptions) != null && C.individualPreviewComponent) {
        const B = (D = (N = this.streams[E]) == null ? void 0 : N.streamOptions) == null ? void 0 : D.individualPreviewComponent;
        M = v.map((ie) => /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsx(
          B,
          {
            model: ie,
            select: (Q) => {
              this._setCurrentStreamName(null), this.currentCallback(Q);
            }
          }
        ) }));
      } else this.streams[E] && (M = v.map((B) => /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsx(
        "img",
        {
          style: { width: 50 },
          src: B.src,
          onClick: () => {
            this._setCurrentStreamName(null), this.currentCallback([B]);
          }
        }
      ) })));
      return /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsx(
        fl,
        {
          open: !!E,
          onClose: () => this._setCurrentStreamName(!1),
          children: M
        }
      ) });
    };
  }
}
const wu = {
  individualComponents: !1,
  noRearrange: !1,
  noAdd: !1,
  inlineOptionBar: !0,
  disableFullscreen: !1,
  disableRefresh: !1
};
class Ou {
  constructor(v = {}) {
    this._renderFunction = null, this.currentRoot = null, this._editorOptions = null, this._editorOptions = v;
    const {
      components: k = Rl,
      plugins: E = null
    } = v;
    this.components = k, this.plugins = E ? [...E] : [];
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
    const { pageData: E = { children: [] }, pageMeta: f, onSave: M, renderFlags: U, contextualPageData: L } = this._editorOptions;
    this._streamDriver = this.createStreamDriver();
    const b = (N) => {
      const [D, B] = pn(1);
      return this._setForceRefreshVal = B, /* @__PURE__ */ x.jsx("div", { className: "page-editor", "data-testid": "page-editor", children: /* @__PURE__ */ x.jsx(
        uu,
        {
          componentList: this.components,
          plugins: this.plugins,
          editorOptions: this._editorOptions,
          pageData: E,
          pageMeta: f,
          onSave: M,
          renderFlags: U,
          streams: this._streamDriver,
          exportState: (ie, Q, re) => {
            this._externalSetState = Q, this._externalGetState = ie, this._externalGetMarkup = re;
          },
          contextualPageData: L
        },
        "page-editor"
      ) });
    }, C = /* @__PURE__ */ x.jsx(b, {});
    this.currentRoot || (this.currentRoot = Su.createRoot(v), this._renderFunction = (N) => {
      this.currentRoot.render(N);
    }), this._renderFunction(C);
  }
  createStreamDriver() {
    return new xu();
  }
  addComponents(v, k = null, E = null) {
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
      displayName: E,
      comp: v
    }, this.refreshComponentListInEditor());
  }
  insertComponent(v, k = {}) {
    if (!this._externalSetState) return null;
    this._externalSetState((E, f) => {
      let M = {
        ...E,
        editorState: {
          ...E.editorState,
          children: [...E.editorState.children]
        }
      };
      return M.editorState.children.push({
        comp: v,
        props: { ...k }
      }), M;
    });
  }
  getDefaultComponents() {
    return Rl;
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
const ku = ({ children: w, modalOpen: v, setModalOpen: k }) => {
  console.log({ modalOpen: v });
  const E = (f) => {
    f.stopPropagation();
  };
  return /* @__PURE__ */ x.jsx(x.Fragment, { children: v ? /* @__PURE__ */ x.jsx("div", { onClick: () => k(!1), className: "common-modal__outer", children: /* @__PURE__ */ x.jsx("div", { onClick: E, className: "common-modal__inner", children: w }) }) : /* @__PURE__ */ x.jsx(x.Fragment, {}) });
}, Au = () => {
  const [w, v] = Bt.useState(!1);
  return {
    modalOpen: w,
    setModalOpen: v,
    ModalOuterComponent: ku
  };
}, ju = (w) => {
  const { sectionName: v, defaultValue: k, ...E } = w, { editorState: f } = Ut(v);
  let M = f || k || "";
  return w.transform && (M = w.transform(M)), /* @__PURE__ */ x.jsx(cl, { children: M });
};
class hl {
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
  get(v, k, E) {
  }
}
class Lu extends hl {
  constructor(v, k = null) {
    super(), this.url = v, this._callback = k;
  }
  get(v, k, E) {
    switch ((E || "GET").toUpperCase()) {
      case "GET": {
        fetch(this.getAPIUrl(k), { method: "get" }).then((M) => M.json()).then((M) => {
          let U = M;
          this._callback && (U = this._callback(M)), v(U);
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
        }).then((M) => M.json()).then((M) => {
          let U = M;
          this._callback && (U = this._callback(M)), v(U);
        });
        break;
      }
    }
  }
  getAPIUrl(v) {
    return this.url + "?" + new URLSearchParams(v).toString();
  }
}
class Bu extends hl {
  constructor(v = null) {
    super(), this._streamSelect = null, this._streams = {}, this._streamSelect = v;
  }
  addStream(v, k) {
    this._streams[v] = { stream: k, name: v };
  }
  adaptStream(v, k, E) {
    this._streams[v] = { stream: k, name: v, callback: E };
  }
  get(v, k) {
    let E = null;
    if (this._streamSelect ? E = this._streamSelect(
      k,
      Object.values(this._streams).map((M) => ({
        name: M.name,
        stream: M.stream
      }))
    ) : E = Object.values(this._streams)[0].name, !E || !this._streams[E])
      throw new Cu();
    const f = this._streams[E];
    if (f.callback) {
      f.stream.get((M) => {
        v(f.callback(M));
      });
      return;
    }
    f.stream.get(v);
  }
}
class Cu extends Error {
  constructor(v = "") {
    super(
      `No sub-streams have been added to this group stream. Use addStream() before the editor starts ${v}`
    );
  }
}
class Uu extends hl {
  constructor(v) {
    super(), this.getValues = v;
  }
  get(v, k) {
    v(this.getValues(k));
  }
}
const Hu = ({
  streamName: w,
  sectionName: v,
  selectMax: k = 1,
  label: E = "Select From Stream"
}) => {
  const f = Ut(v), M = f.streams;
  if (!f.editing) return null;
  const U = () => {
    M.getStream(w, (L) => {
      f.setState(L[0]);
    }, { selectMax: k });
  };
  return /* @__PURE__ */ x.jsx("button", { onClick: U, children: E });
}, Il = (w) => {
  const { sectionName: v = "repeater", rowSectionName: k = "row", addLabel: E = "Row", hideAddButton: f = !1, editing: M, hideCounter: U = !1, ...L } = w, b = "count", C = Ut(v), { editorState: N } = C || { editorState: null }, D = M !== void 0 ? M : C == null ? void 0 : C.editing, { count: B = N && N[b] ? N[b] : 1 } = L, ie = (F, se) => Bt.Children.map(se, (Le) => {
    if (Bt.isValidElement(Le)) {
      let we = N && N[k] && N[k][F] ? N[k][F] : {};
      return Bt.cloneElement(Le, { repeaterIndex: F, ...we });
    }
    return Le;
  });
  let Q = [];
  for (let F = 0; F < B; F++) {
    let se = ie(F, w.children);
    Q.push(/* @__PURE__ */ x.jsx(Dl, { sectionName: `${v}.${k}[${F}]`, children: se }, F));
  }
  let re = null;
  D && !f && (re = /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsxs("button", { onClick: () => {
      const F = B + 1;
      C.setState({ ...N, [b]: F });
    }, children: [
      "+ ",
      E
    ] }),
    /* @__PURE__ */ x.jsxs("button", { onClick: () => {
      const F = Math.max(B - 1, 1);
      C.setState({ ...N, [b]: F });
    }, children: [
      "- ",
      E
    ] })
  ] }));
  let z = null;
  return D && !U && (z = /* @__PURE__ */ x.jsx(dl, { label: "Count:", min: 1, sectionName: `${v}.${b}` })), w.TagName ? /* @__PURE__ */ x.jsxs(w.TagName, { ...L, children: [
    z,
    Q
  ] }) : /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    z,
    Q,
    re
  ] });
}, Wu = (w) => {
  const { children: v, tabNames: k } = w, [E, f] = Bt.useState(0);
  return /* @__PURE__ */ x.jsxs("div", { className: "tabs", children: [
    /* @__PURE__ */ x.jsx("ul", { children: /* @__PURE__ */ x.jsx(Il, { hideCounter: !0, addLabel: "Tab", sectionName: "tabs", children: /* @__PURE__ */ x.jsx(Eu, { setTab: f, currentTab: E }) }) }),
    /* @__PURE__ */ x.jsx(Il, { hideCounter: !0, hideAddButton: !0, sectionName: "tabs", children: /* @__PURE__ */ x.jsx(Tu, { currentTab: E }) })
  ] });
}, Eu = ({ repeaterIndex: w = 0, currentTab: v, setTab: k }) => {
  const E = w === v, f = {
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
  return E && (f.fontWeight = "bold", f.color = "black", f.top = 0, f.paddingBottom = 4, f.marginTop = 0, f.background = "white"), /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx(pl, { children: /* @__PURE__ */ x.jsx("input", { type: "radio", checked: E, onClick: (M) => k(w) }) }),
    /* @__PURE__ */ x.jsx(Ml.li, { style: f, onClick: (M) => k(w), sectionName: "tabName", placeholder: "Tab Name" })
  ] });
}, Tu = ({ repeaterIndex: w = 0, currentTab: v }) => {
  const k = { display: "block", zIndex: 2, position: "relative", background: "white", padding: 16 };
  return w !== v && (k.display = "none"), /* @__PURE__ */ x.jsxs("div", { style: k, children: [
    /* @__PURE__ */ x.jsx(pl, { children: /* @__PURE__ */ x.jsxs("strong", { children: [
      "Tab ",
      w + 1
    ] }) }),
    /* @__PURE__ */ x.jsx(wi, {})
  ] });
};
export {
  Ml as CE,
  cu as CheckboxInput,
  du as ColumnSection,
  Ol as ContentEditableInputSlot,
  wi as ContentSection,
  _a as EditorContext,
  ju as EditorValue,
  Uu as FakeStream,
  Lu as HTTPStream,
  Fl as HideIf,
  Mu as HideIfEditing,
  pl as HideIfRendering,
  dl as NumberSelect,
  uu as PageEditor,
  Il as Repeater,
  pu as SelectInput,
  Dl as SlotSection,
  gu as Spacer,
  hl as StreamBase,
  xu as StreamDrawerDriver,
  bu as StreamDriver,
  Bu as StreamGroup,
  Hu as StreamSelectButton,
  Tl as StringInput,
  Wu as Tabs,
  Ou as UNBEditor,
  Rl as componentList,
  hu as createContentEditable,
  Ou as default,
  Fu as injectEditorContext,
  Iu as injectEditorState,
  Ut as useEditorContext,
  Pu as useEditorState,
  Du as useEditorStateWithProps,
  Au as useModal
};
//# sourceMappingURL=index.es.js.map
