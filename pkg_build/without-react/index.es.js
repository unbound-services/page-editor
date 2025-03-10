import * as Wr from "react";
import nr, { Fragment as ul, createContext as Il, useState as fr, useContext as us, useEffect as Si, useRef as pl } from "react";
import Pl, { createPortal as Dl } from "react-dom";
var is = { exports: {} }, gi = {};
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
function Fl() {
  if (hl) return gi;
  hl = 1;
  var D = nr, v = Symbol.for("react.element"), k = Symbol.for("react.fragment"), P = Object.prototype.hasOwnProperty, f = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B($, b, x) {
    var Z, R = {}, L = null, K = null;
    x !== void 0 && (L = "" + x), b.key !== void 0 && (L = "" + b.key), b.ref !== void 0 && (K = b.ref);
    for (Z in b) P.call(b, Z) && !F.hasOwnProperty(Z) && (R[Z] = b[Z]);
    if ($ && $.defaultProps) for (Z in b = $.defaultProps, b) R[Z] === void 0 && (R[Z] = b[Z]);
    return { $$typeof: v, type: $, key: L, ref: K, props: R, _owner: f.current };
  }
  return gi.Fragment = k, gi.jsx = B, gi.jsxs = B, gi;
}
var yi = {};
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
function Ml() {
  return vl || (vl = 1, process.env.NODE_ENV !== "production" && function() {
    var D = nr, v = Symbol.for("react.element"), k = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), $ = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), J = Symbol.iterator, Re = "@@iterator";
    function W(S) {
      if (S === null || typeof S != "object")
        return null;
      var U = J && S[J] || S[Re];
      return typeof U == "function" ? U : null;
    }
    var O = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ue(S) {
      {
        for (var U = arguments.length, V = new Array(U > 1 ? U - 1 : 0), ne = 1; ne < U; ne++)
          V[ne - 1] = arguments[ne];
        Ne("error", S, V);
      }
    }
    function Ne(S, U, V) {
      {
        var ne = O.ReactDebugCurrentFrame, he = ne.getStackAddendum();
        he !== "" && (U += "%s", V = V.concat([he]));
        var be = V.map(function(me) {
          return String(me);
        });
        be.unshift("Warning: " + U), Function.prototype.apply.call(console[S], console, be);
      }
    }
    var ke = !1, Ce = !1, Pe = !1, ie = !1, rt = !1, ve;
    ve = Symbol.for("react.module.reference");
    function Oe(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === P || S === F || rt || S === f || S === x || S === Z || ie || S === K || ke || Ce || Pe || typeof S == "object" && S !== null && (S.$$typeof === L || S.$$typeof === R || S.$$typeof === B || S.$$typeof === $ || S.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === ve || S.getModuleId !== void 0));
    }
    function Q(S, U, V) {
      var ne = S.displayName;
      if (ne)
        return ne;
      var he = U.displayName || U.name || "";
      return he !== "" ? V + "(" + he + ")" : V;
    }
    function X(S) {
      return S.displayName || "Context";
    }
    function De(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && ue("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
        return S.displayName || S.name || null;
      if (typeof S == "string")
        return S;
      switch (S) {
        case P:
          return "Fragment";
        case k:
          return "Portal";
        case F:
          return "Profiler";
        case f:
          return "StrictMode";
        case x:
          return "Suspense";
        case Z:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case $:
            var U = S;
            return X(U) + ".Consumer";
          case B:
            var V = S;
            return X(V._context) + ".Provider";
          case b:
            return Q(S, S.render, "ForwardRef");
          case R:
            var ne = S.displayName || null;
            return ne !== null ? ne : De(S.type) || "Memo";
          case L: {
            var he = S, be = he._payload, me = he._init;
            try {
              return De(me(be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ye = Object.assign, Le = 0, ar, Ot, ee, Qe, Ct, xe, Ae;
    function jt() {
    }
    jt.__reactDisabledLog = !0;
    function Et() {
      {
        if (Le === 0) {
          ar = console.log, Ot = console.info, ee = console.warn, Qe = console.error, Ct = console.group, xe = console.groupCollapsed, Ae = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: jt,
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
        Le++;
      }
    }
    function ze() {
      {
        if (Le--, Le === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ye({}, S, {
              value: ar
            }),
            info: ye({}, S, {
              value: Ot
            }),
            warn: ye({}, S, {
              value: ee
            }),
            error: ye({}, S, {
              value: Qe
            }),
            group: ye({}, S, {
              value: Ct
            }),
            groupCollapsed: ye({}, S, {
              value: xe
            }),
            groupEnd: ye({}, S, {
              value: Ae
            })
          });
        }
        Le < 0 && ue("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var je = O.ReactCurrentDispatcher, $e;
    function ht(S, U, V) {
      {
        if ($e === void 0)
          try {
            throw Error();
          } catch (he) {
            var ne = he.stack.trim().match(/\n( *(at )?)/);
            $e = ne && ne[1] || "";
          }
        return `
` + $e + S;
      }
    }
    var at = !1, lt;
    {
      var nt = typeof WeakMap == "function" ? WeakMap : Map;
      lt = new nt();
    }
    function Tt(S, U) {
      if (!S || at)
        return "";
      {
        var V = lt.get(S);
        if (V !== void 0)
          return V;
      }
      var ne;
      at = !0;
      var he = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var be;
      be = je.current, je.current = null, Et();
      try {
        if (U) {
          var me = function() {
            throw Error();
          };
          if (Object.defineProperty(me.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(me, []);
            } catch (Xe) {
              ne = Xe;
            }
            Reflect.construct(S, [], me);
          } else {
            try {
              me.call();
            } catch (Xe) {
              ne = Xe;
            }
            S.call(me.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Xe) {
            ne = Xe;
          }
          S();
        }
      } catch (Xe) {
        if (Xe && ne && typeof Xe.stack == "string") {
          for (var pe = Xe.stack.split(`
`), Ge = ne.stack.split(`
`), Te = pe.length - 1, Me = Ge.length - 1; Te >= 1 && Me >= 0 && pe[Te] !== Ge[Me]; )
            Me--;
          for (; Te >= 1 && Me >= 0; Te--, Me--)
            if (pe[Te] !== Ge[Me]) {
              if (Te !== 1 || Me !== 1)
                do
                  if (Te--, Me--, Me < 0 || pe[Te] !== Ge[Me]) {
                    var Ue = `
` + pe[Te].replace(" at new ", " at ");
                    return S.displayName && Ue.includes("<anonymous>") && (Ue = Ue.replace("<anonymous>", S.displayName)), typeof S == "function" && lt.set(S, Ue), Ue;
                  }
                while (Te >= 1 && Me >= 0);
              break;
            }
        }
      } finally {
        at = !1, je.current = be, ze(), Error.prepareStackTrace = he;
      }
      var Ht = S ? S.displayName || S.name : "", Pt = Ht ? ht(Ht) : "";
      return typeof S == "function" && lt.set(S, Pt), Pt;
    }
    function Ke(S, U, V) {
      return Tt(S, !1);
    }
    function it(S) {
      var U = S.prototype;
      return !!(U && U.isReactComponent);
    }
    function G(S, U, V) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return Tt(S, it(S));
      if (typeof S == "string")
        return ht(S);
      switch (S) {
        case x:
          return ht("Suspense");
        case Z:
          return ht("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case b:
            return Ke(S.render);
          case R:
            return G(S.type, U, V);
          case L: {
            var ne = S, he = ne._payload, be = ne._init;
            try {
              return G(be(he), U, V);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, ce = {}, ae = O.ReactDebugCurrentFrame;
    function fe(S) {
      if (S) {
        var U = S._owner, V = G(S.type, S._source, U ? U.type : null);
        ae.setExtraStackFrame(V);
      } else
        ae.setExtraStackFrame(null);
    }
    function te(S, U, V, ne, he) {
      {
        var be = Function.call.bind(q);
        for (var me in S)
          if (be(S, me)) {
            var pe = void 0;
            try {
              if (typeof S[me] != "function") {
                var Ge = Error((ne || "React class") + ": " + V + " type `" + me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ge.name = "Invariant Violation", Ge;
              }
              pe = S[me](U, me, ne, V, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Te) {
              pe = Te;
            }
            pe && !(pe instanceof Error) && (fe(he), ue("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ne || "React class", V, me, typeof pe), fe(null)), pe instanceof Error && !(pe.message in ce) && (ce[pe.message] = !0, fe(he), ue("Failed %s type: %s", V, pe.message), fe(null));
          }
      }
    }
    var Ve = Array.isArray;
    function we(S) {
      return Ve(S);
    }
    function ot(S) {
      {
        var U = typeof Symbol == "function" && Symbol.toStringTag, V = U && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return V;
      }
    }
    function Ye(S) {
      try {
        return Lt(S), !1;
      } catch {
        return !0;
      }
    }
    function Lt(S) {
      return "" + S;
    }
    function Bt(S) {
      if (Ye(S))
        return ue("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ot(S)), Lt(S);
    }
    var Jt = O.ReactCurrentOwner, Be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, dt, Cr;
    function Nr(S) {
      if (q.call(S, "ref")) {
        var U = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function Er(S) {
      if (q.call(S, "key")) {
        var U = Object.getOwnPropertyDescriptor(S, "key").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function dr(S, U) {
      typeof S.ref == "string" && Jt.current;
    }
    function en(S, U) {
      {
        var V = function() {
          dt || (dt = !0, ue("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        V.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: V,
          configurable: !0
        });
      }
    }
    function Tr(S, U) {
      {
        var V = function() {
          Cr || (Cr = !0, ue("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        V.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: V,
          configurable: !0
        });
      }
    }
    var Qt = function(S, U, V, ne, he, be, me) {
      var pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: S,
        key: U,
        ref: V,
        props: me,
        // Record the component responsible for creating this element.
        _owner: be
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
        value: ne
      }), Object.defineProperty(pe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.freeze && (Object.freeze(pe.props), Object.freeze(pe)), pe;
    };
    function Rr(S, U, V, ne, he) {
      {
        var be, me = {}, pe = null, Ge = null;
        V !== void 0 && (Bt(V), pe = "" + V), Er(U) && (Bt(U.key), pe = "" + U.key), Nr(U) && (Ge = U.ref, dr(U, he));
        for (be in U)
          q.call(U, be) && !Be.hasOwnProperty(be) && (me[be] = U[be]);
        if (S && S.defaultProps) {
          var Te = S.defaultProps;
          for (be in Te)
            me[be] === void 0 && (me[be] = Te[be]);
        }
        if (pe || Ge) {
          var Me = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          pe && en(me, Me), Ge && Tr(me, Me);
        }
        return Qt(S, pe, Ge, he, ne, Jt.current, me);
      }
    }
    var pr = O.ReactCurrentOwner, ut = O.ReactDebugCurrentFrame;
    function ct(S) {
      if (S) {
        var U = S._owner, V = G(S.type, S._source, U ? U.type : null);
        ut.setExtraStackFrame(V);
      } else
        ut.setExtraStackFrame(null);
    }
    var Rt;
    Rt = !1;
    function Ee(S) {
      return typeof S == "object" && S !== null && S.$$typeof === v;
    }
    function Ut() {
      {
        if (pr.current) {
          var S = De(pr.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function hr(S) {
      return "";
    }
    var Kt = {};
    function _t(S) {
      {
        var U = Ut();
        if (!U) {
          var V = typeof S == "string" ? S : S.displayName || S.name;
          V && (U = `

Check the top-level render call using <` + V + ">.");
        }
        return U;
      }
    }
    function ir(S, U) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var V = _t(U);
        if (Kt[V])
          return;
        Kt[V] = !0;
        var ne = "";
        S && S._owner && S._owner !== pr.current && (ne = " It was passed a child from " + De(S._owner.type) + "."), ct(S), ue('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', V, ne), ct(null);
      }
    }
    function It(S, U) {
      {
        if (typeof S != "object")
          return;
        if (we(S))
          for (var V = 0; V < S.length; V++) {
            var ne = S[V];
            Ee(ne) && ir(ne, U);
          }
        else if (Ee(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var he = W(S);
          if (typeof he == "function" && he !== S.entries)
            for (var be = he.call(S), me; !(me = be.next()).done; )
              Ee(me.value) && ir(me.value, U);
        }
      }
    }
    function st(S) {
      {
        var U = S.type;
        if (U == null || typeof U == "string")
          return;
        var V;
        if (typeof U == "function")
          V = U.propTypes;
        else if (typeof U == "object" && (U.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        U.$$typeof === R))
          V = U.propTypes;
        else
          return;
        if (V) {
          var ne = De(U);
          te(V, S.props, "prop", ne, S);
        } else if (U.PropTypes !== void 0 && !Rt) {
          Rt = !0;
          var he = De(U);
          ue("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", he || "Unknown");
        }
        typeof U.getDefaultProps == "function" && !U.getDefaultProps.isReactClassApproved && ue("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(S) {
      {
        for (var U = Object.keys(S.props), V = 0; V < U.length; V++) {
          var ne = U[V];
          if (ne !== "children" && ne !== "key") {
            ct(S), ue("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ne), ct(null);
            break;
          }
        }
        S.ref !== null && (ct(S), ue("Invalid attribute `ref` supplied to `React.Fragment`."), ct(null));
      }
    }
    var vr = {};
    function Ir(S, U, V, ne, he, be) {
      {
        var me = Oe(S);
        if (!me) {
          var pe = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ge = hr();
          Ge ? pe += Ge : pe += Ut();
          var Te;
          S === null ? Te = "null" : we(S) ? Te = "array" : S !== void 0 && S.$$typeof === v ? (Te = "<" + (De(S.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof S, ue("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, pe);
        }
        var Me = Rr(S, U, V, he, be);
        if (Me == null)
          return Me;
        if (me) {
          var Ue = U.children;
          if (Ue !== void 0)
            if (ne)
              if (we(Ue)) {
                for (var Ht = 0; Ht < Ue.length; Ht++)
                  It(Ue[Ht], S);
                Object.freeze && Object.freeze(Ue);
              } else
                ue("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              It(Ue, S);
        }
        if (q.call(U, "key")) {
          var Pt = De(S), Xe = Object.keys(U).filter(function(Ft) {
            return Ft !== "key";
          }), Ze = Xe.length > 0 ? "{key: someKey, " + Xe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!vr[Pt + Ze]) {
            var Dt = Xe.length > 0 ? "{" + Xe.join(": ..., ") + ": ...}" : "{}";
            ue(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ze, Pt, Dt, Pt), vr[Pt + Ze] = !0;
          }
        }
        return S === P ? _r(Me) : st(Me), Me;
      }
    }
    function et(S, U, V) {
      return Ir(S, U, V, !0);
    }
    function Pr(S, U, V) {
      return Ir(S, U, V, !1);
    }
    var tn = Pr, rn = et;
    yi.Fragment = P, yi.jsx = tn, yi.jsxs = rn;
  }()), yi;
}
var ml;
function Al() {
  return ml || (ml = 1, process.env.NODE_ENV === "production" ? is.exports = Fl() : is.exports = Ml()), is.exports;
}
var w = Al(), $n = {}, Eo = {};
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
function Ol() {
  if (gl) return Eo;
  gl = 1;
  var D = nr;
  function v(a) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, h = 1; h < arguments.length; h++) u += "&args[]=" + encodeURIComponent(arguments[h]);
    return "Minified React error #" + a + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var k = Object.prototype.hasOwnProperty, P = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, f = {}, F = {};
  function B(a) {
    return k.call(F, a) ? !0 : k.call(f, a) ? !1 : P.test(a) ? F[a] = !0 : (f[a] = !0, !1);
  }
  function $(a, u, h, g, _, C, M) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = g, this.attributeNamespace = _, this.mustUseProperty = h, this.propertyName = a, this.type = u, this.sanitizeURL = C, this.removeEmptyString = M;
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    b[a] = new $(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var u = a[0];
    b[u] = new $(u, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    b[a] = new $(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    b[a] = new $(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    b[a] = new $(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    b[a] = new $(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    b[a] = new $(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    b[a] = new $(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    b[a] = new $(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var x = /[\-:]([a-z])/g;
  function Z(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var u = a.replace(
      x,
      Z
    );
    b[u] = new $(u, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var u = a.replace(x, Z);
    b[u] = new $(u, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var u = a.replace(x, Z);
    b[u] = new $(u, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    b[a] = new $(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), b.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    b[a] = new $(a, 1, !1, a.toLowerCase(), null, !0, !0);
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
  }, L = ["Webkit", "ms", "Moz", "O"];
  Object.keys(R).forEach(function(a) {
    L.forEach(function(u) {
      u = u + a.charAt(0).toUpperCase() + a.substring(1), R[u] = R[a];
    });
  });
  var K = /["'&<>]/;
  function J(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var u = K.exec(a);
    if (u) {
      var h = "", g, _ = 0;
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
        _ !== g && (h += a.substring(_, g)), _ = g + 1, h += u;
      }
      a = _ !== g ? h + a.substring(_, g) : h;
    }
    return a;
  }
  var Re = /([A-Z])/g, W = /^ms-/, O = Array.isArray;
  function ue(a, u) {
    return { insertionMode: a, selectedValue: u };
  }
  function Ne(a, u, h) {
    switch (u) {
      case "select":
        return ue(1, h.value != null ? h.value : h.defaultValue);
      case "svg":
        return ue(2, null);
      case "math":
        return ue(3, null);
      case "foreignObject":
        return ue(1, null);
      case "table":
        return ue(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return ue(5, null);
      case "colgroup":
        return ue(7, null);
      case "tr":
        return ue(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? ue(1, null) : a;
  }
  var ke = /* @__PURE__ */ new Map();
  function Ce(a, u, h) {
    if (typeof h != "object") throw Error(v(62));
    u = !0;
    for (var g in h) if (k.call(h, g)) {
      var _ = h[g];
      if (_ != null && typeof _ != "boolean" && _ !== "") {
        if (g.indexOf("--") === 0) {
          var C = J(g);
          _ = J(("" + _).trim());
        } else {
          C = g;
          var M = ke.get(C);
          M !== void 0 || (M = J(C.replace(Re, "-$1").toLowerCase().replace(W, "-ms-")), ke.set(C, M)), C = M, _ = typeof _ == "number" ? _ === 0 || k.call(R, g) ? "" + _ : _ + "px" : J(("" + _).trim());
        }
        u ? (u = !1, a.push(' style="', C, ":", _)) : a.push(";", C, ":", _);
      }
    }
    u || a.push('"');
  }
  function Pe(a, u, h, g) {
    switch (h) {
      case "style":
        Ce(a, u, g);
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
      } else if (B(h)) {
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
  function ie(a, u, h) {
    if (u != null) {
      if (h != null) throw Error(v(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(v(61));
      u = u.__html, u != null && a.push("" + u);
    }
  }
  function rt(a) {
    var u = "";
    return D.Children.forEach(a, function(h) {
      h != null && (u += h);
    }), u;
  }
  function ve(a, u, h, g) {
    a.push(X(h));
    var _ = h = null, C;
    for (C in u) if (k.call(u, C)) {
      var M = u[C];
      if (M != null) switch (C) {
        case "children":
          h = M;
          break;
        case "dangerouslySetInnerHTML":
          _ = M;
          break;
        default:
          Pe(a, g, C, M);
      }
    }
    return a.push(">"), ie(a, _, h), typeof h == "string" ? (a.push(J(h)), null) : h;
  }
  var Oe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Q = /* @__PURE__ */ new Map();
  function X(a) {
    var u = Q.get(a);
    if (u === void 0) {
      if (!Oe.test(a)) throw Error(v(65, a));
      u = "<" + a, Q.set(a, u);
    }
    return u;
  }
  function De(a, u, h, g, _) {
    switch (u) {
      case "select":
        a.push(X("select"));
        var C = null, M = null;
        for (oe in h) if (k.call(h, oe)) {
          var N = h[oe];
          if (N != null) switch (oe) {
            case "children":
              C = N;
              break;
            case "dangerouslySetInnerHTML":
              M = N;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              Pe(a, g, oe, N);
          }
        }
        return a.push(">"), ie(a, M, C), C;
      case "option":
        M = _.selectedValue, a.push(X("option"));
        var re = N = null, se = null, oe = null;
        for (C in h) if (k.call(h, C)) {
          var _e = h[C];
          if (_e != null) switch (C) {
            case "children":
              N = _e;
              break;
            case "selected":
              se = _e;
              break;
            case "dangerouslySetInnerHTML":
              oe = _e;
              break;
            case "value":
              re = _e;
            default:
              Pe(a, g, C, _e);
          }
        }
        if (M != null) if (h = re !== null ? "" + re : rt(N), O(M)) {
          for (g = 0; g < M.length; g++)
            if ("" + M[g] === h) {
              a.push(' selected=""');
              break;
            }
        } else "" + M === h && a.push(' selected=""');
        else se && a.push(' selected=""');
        return a.push(">"), ie(a, oe, N), N;
      case "textarea":
        a.push(X("textarea")), oe = M = C = null;
        for (N in h) if (k.call(h, N) && (re = h[N], re != null)) switch (N) {
          case "children":
            oe = re;
            break;
          case "value":
            C = re;
            break;
          case "defaultValue":
            M = re;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(v(91));
          default:
            Pe(
              a,
              g,
              N,
              re
            );
        }
        if (C === null && M !== null && (C = M), a.push(">"), oe != null) {
          if (C != null) throw Error(v(92));
          if (O(oe) && 1 < oe.length) throw Error(v(93));
          C = "" + oe;
        }
        return typeof C == "string" && C[0] === `
` && a.push(`
`), C !== null && a.push(J("" + C)), null;
      case "input":
        a.push(X("input")), re = oe = N = C = null;
        for (M in h) if (k.call(h, M) && (se = h[M], se != null)) switch (M) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(399, "input"));
          case "defaultChecked":
            re = se;
            break;
          case "defaultValue":
            N = se;
            break;
          case "checked":
            oe = se;
            break;
          case "value":
            C = se;
            break;
          default:
            Pe(a, g, M, se);
        }
        return oe !== null ? Pe(a, g, "checked", oe) : re !== null && Pe(a, g, "checked", re), C !== null ? Pe(a, g, "value", C) : N !== null && Pe(a, g, "value", N), a.push("/>"), null;
      case "menuitem":
        a.push(X("menuitem"));
        for (var gt in h) if (k.call(h, gt) && (C = h[gt], C != null)) switch (gt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(400));
          default:
            Pe(a, g, gt, C);
        }
        return a.push(">"), null;
      case "title":
        a.push(X("title")), C = null;
        for (_e in h) if (k.call(h, _e) && (M = h[_e], M != null)) switch (_e) {
          case "children":
            C = M;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(v(434));
          default:
            Pe(a, g, _e, M);
        }
        return a.push(">"), C;
      case "listing":
      case "pre":
        a.push(X(u)), M = C = null;
        for (re in h) if (k.call(h, re) && (N = h[re], N != null)) switch (re) {
          case "children":
            C = N;
            break;
          case "dangerouslySetInnerHTML":
            M = N;
            break;
          default:
            Pe(a, g, re, N);
        }
        if (a.push(">"), M != null) {
          if (C != null) throw Error(v(60));
          if (typeof M != "object" || !("__html" in M)) throw Error(v(61));
          h = M.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
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
        a.push(X(u));
        for (var yt in h) if (k.call(h, yt) && (C = h[yt], C != null)) switch (yt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(399, u));
          default:
            Pe(a, g, yt, C);
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
        return ve(
          a,
          h,
          u,
          g
        );
      case "html":
        return _.insertionMode === 0 && a.push("<!DOCTYPE html>"), ve(a, h, u, g);
      default:
        if (u.indexOf("-") === -1 && typeof h.is != "string") return ve(a, h, u, g);
        a.push(X(u)), M = C = null;
        for (se in h) if (k.call(h, se) && (N = h[se], N != null)) switch (se) {
          case "children":
            C = N;
            break;
          case "dangerouslySetInnerHTML":
            M = N;
            break;
          case "style":
            Ce(a, g, N);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            B(se) && typeof N != "function" && typeof N != "symbol" && a.push(" ", se, '="', J(N), '"');
        }
        return a.push(">"), ie(a, M, C), C;
    }
  }
  function ye(a, u, h) {
    if (a.push('<!--$?--><template id="'), h === null) throw Error(v(395));
    return a.push(h), a.push('"></template>');
  }
  function Le(a, u, h, g) {
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
  function ar(a, u) {
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
  var Ot = /[<\u2028\u2029]/g;
  function ee(a) {
    return JSON.stringify(a).replace(Ot, function(u) {
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
  function Qe(a, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: a };
  }
  function Ct(a, u, h, g) {
    return h.generateStaticMarkup ? (a.push(J(u)), !1) : (u === "" ? a = g : (g && a.push("<!-- -->"), a.push(J(u)), a = !0), a);
  }
  var xe = Object.assign, Ae = Symbol.for("react.element"), jt = Symbol.for("react.portal"), Et = Symbol.for("react.fragment"), ze = Symbol.for("react.strict_mode"), je = Symbol.for("react.profiler"), $e = Symbol.for("react.provider"), ht = Symbol.for("react.context"), at = Symbol.for("react.forward_ref"), lt = Symbol.for("react.suspense"), nt = Symbol.for("react.suspense_list"), Tt = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), it = Symbol.for("react.scope"), G = Symbol.for("react.debug_trace_mode"), q = Symbol.for("react.legacy_hidden"), ce = Symbol.for("react.default_value"), ae = Symbol.iterator;
  function fe(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case Et:
        return "Fragment";
      case jt:
        return "Portal";
      case je:
        return "Profiler";
      case ze:
        return "StrictMode";
      case lt:
        return "Suspense";
      case nt:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case ht:
        return (a.displayName || "Context") + ".Consumer";
      case $e:
        return (a._context.displayName || "Context") + ".Provider";
      case at:
        var u = a.render;
        return a = a.displayName, a || (a = u.displayName || u.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case Tt:
        return u = a.displayName || null, u !== null ? u : fe(a.type) || "Memo";
      case Ke:
        u = a._payload, a = a._init;
        try {
          return fe(a(u));
        } catch {
        }
    }
    return null;
  }
  var te = {};
  function Ve(a, u) {
    if (a = a.contextTypes, !a) return te;
    var h = {}, g;
    for (g in a) h[g] = u[g];
    return h;
  }
  var we = null;
  function ot(a, u) {
    if (a !== u) {
      a.context._currentValue2 = a.parentValue, a = a.parent;
      var h = u.parent;
      if (a === null) {
        if (h !== null) throw Error(v(401));
      } else {
        if (h === null) throw Error(v(401));
        ot(a, h);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function Ye(a) {
    a.context._currentValue2 = a.parentValue, a = a.parent, a !== null && Ye(a);
  }
  function Lt(a) {
    var u = a.parent;
    u !== null && Lt(u), a.context._currentValue2 = a.value;
  }
  function Bt(a, u) {
    if (a.context._currentValue2 = a.parentValue, a = a.parent, a === null) throw Error(v(402));
    a.depth === u.depth ? ot(a, u) : Bt(a, u);
  }
  function Jt(a, u) {
    var h = u.parent;
    if (h === null) throw Error(v(402));
    a.depth === h.depth ? ot(a, h) : Jt(a, h), u.context._currentValue2 = u.value;
  }
  function Be(a) {
    var u = we;
    u !== a && (u === null ? Lt(a) : a === null ? Ye(u) : u.depth === a.depth ? ot(u, a) : u.depth > a.depth ? Bt(u, a) : Jt(u, a), we = a);
  }
  var dt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, u) {
    a = a._reactInternals, a.queue !== null && a.queue.push(u);
  }, enqueueReplaceState: function(a, u) {
    a = a._reactInternals, a.replace = !0, a.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function Cr(a, u, h, g) {
    var _ = a.state !== void 0 ? a.state : null;
    a.updater = dt, a.props = h, a.state = _;
    var C = { queue: [], replace: !1 };
    a._reactInternals = C;
    var M = u.contextType;
    if (a.context = typeof M == "object" && M !== null ? M._currentValue2 : g, M = u.getDerivedStateFromProps, typeof M == "function" && (M = M(h, _), _ = M == null ? _ : xe({}, _, M), a.state = _), typeof u.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (u = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), u !== a.state && dt.enqueueReplaceState(a, a.state, null), C.queue !== null && 0 < C.queue.length) if (u = C.queue, M = C.replace, C.queue = null, C.replace = !1, M && u.length === 1) a.state = u[0];
    else {
      for (C = M ? u[0] : a.state, _ = !0, M = M ? 1 : 0; M < u.length; M++) {
        var N = u[M];
        N = typeof N == "function" ? N.call(a, C, h, g) : N, N != null && (_ ? (_ = !1, C = xe({}, C, N)) : xe(C, N));
      }
      a.state = C;
    }
    else C.queue = null;
  }
  var Nr = { id: 1, overflow: "" };
  function Er(a, u, h) {
    var g = a.id;
    a = a.overflow;
    var _ = 32 - dr(g) - 1;
    g &= ~(1 << _), h += 1;
    var C = 32 - dr(u) + _;
    if (30 < C) {
      var M = _ - _ % 5;
      return C = (g & (1 << M) - 1).toString(32), g >>= M, _ -= M, { id: 1 << 32 - dr(u) + _ | h << _ | g, overflow: C + a };
    }
    return { id: 1 << C | h << _ | g, overflow: a };
  }
  var dr = Math.clz32 ? Math.clz32 : Qt, en = Math.log, Tr = Math.LN2;
  function Qt(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (en(a) / Tr | 0) | 0;
  }
  function Rr(a, u) {
    return a === u && (a !== 0 || 1 / a === 1 / u) || a !== a && u !== u;
  }
  var pr = typeof Object.is == "function" ? Object.is : Rr, ut = null, ct = null, Rt = null, Ee = null, Ut = !1, hr = !1, Kt = 0, _t = null, ir = 0;
  function It() {
    if (ut === null) throw Error(v(321));
    return ut;
  }
  function st() {
    if (0 < ir) throw Error(v(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function _r() {
    return Ee === null ? Rt === null ? (Ut = !1, Rt = Ee = st()) : (Ut = !0, Ee = Rt) : Ee.next === null ? (Ut = !1, Ee = Ee.next = st()) : (Ut = !0, Ee = Ee.next), Ee;
  }
  function vr() {
    ct = ut = null, hr = !1, Rt = null, ir = 0, Ee = _t = null;
  }
  function Ir(a, u) {
    return typeof u == "function" ? u(a) : u;
  }
  function et(a, u, h) {
    if (ut = It(), Ee = _r(), Ut) {
      var g = Ee.queue;
      if (u = g.dispatch, _t !== null && (h = _t.get(g), h !== void 0)) {
        _t.delete(g), g = Ee.memoizedState;
        do
          g = a(g, h.action), h = h.next;
        while (h !== null);
        return Ee.memoizedState = g, [g, u];
      }
      return [Ee.memoizedState, u];
    }
    return a = a === Ir ? typeof u == "function" ? u() : u : h !== void 0 ? h(u) : u, Ee.memoizedState = a, a = Ee.queue = { last: null, dispatch: null }, a = a.dispatch = tn.bind(null, ut, a), [Ee.memoizedState, a];
  }
  function Pr(a, u) {
    if (ut = It(), Ee = _r(), u = u === void 0 ? null : u, Ee !== null) {
      var h = Ee.memoizedState;
      if (h !== null && u !== null) {
        var g = h[1];
        e: if (g === null) g = !1;
        else {
          for (var _ = 0; _ < g.length && _ < u.length; _++) if (!pr(u[_], g[_])) {
            g = !1;
            break e;
          }
          g = !0;
        }
        if (g) return h[0];
      }
    }
    return a = a(), Ee.memoizedState = [a, u], a;
  }
  function tn(a, u, h) {
    if (25 <= ir) throw Error(v(301));
    if (a === ut) if (hr = !0, a = { action: h, next: null }, _t === null && (_t = /* @__PURE__ */ new Map()), h = _t.get(u), h === void 0) _t.set(u, a);
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
  var U = { readContext: function(a) {
    return a._currentValue2;
  }, useContext: function(a) {
    return It(), a._currentValue2;
  }, useMemo: Pr, useReducer: et, useRef: function(a) {
    ut = It(), Ee = _r();
    var u = Ee.memoizedState;
    return u === null ? (a = { current: a }, Ee.memoizedState = a) : u;
  }, useState: function(a) {
    return et(Ir, a);
  }, useInsertionEffect: S, useLayoutEffect: function() {
  }, useCallback: function(a, u) {
    return Pr(function() {
      return a;
    }, u);
  }, useImperativeHandle: S, useEffect: S, useDebugValue: S, useDeferredValue: function(a) {
    return It(), a;
  }, useTransition: function() {
    return It(), [
      !1,
      rn
    ];
  }, useId: function() {
    var a = ct.treeContext, u = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - dr(a) - 1)).toString(32) + u;
    var h = V;
    if (h === null) throw Error(v(404));
    return u = Kt++, a = ":" + h.idPrefix + "R" + a, 0 < u && (a += "H" + u.toString(32)), a + ":";
  }, useMutableSource: function(a, u) {
    return It(), u(a._source);
  }, useSyncExternalStore: function(a, u, h) {
    if (h === void 0) throw Error(v(407));
    return h();
  } }, V = null, ne = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function he(a) {
    return console.error(a), null;
  }
  function be() {
  }
  function me(a, u, h, g, _, C, M, N, re) {
    var se = [], oe = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: g === void 0 ? 12800 : g, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: oe, pingedTasks: se, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: _ === void 0 ? he : _, onAllReady: be, onShellReady: M === void 0 ? be : M, onShellError: be, onFatalError: be }, h = Ge(u, 0, null, h, !1, !1), h.parentFlushed = !0, a = pe(u, a, null, h, oe, te, null, Nr), se.push(a), u;
  }
  function pe(a, u, h, g, _, C, M, N) {
    a.allPendingTasks++, h === null ? a.pendingRootTasks++ : h.pendingTasks++;
    var re = { node: u, ping: function() {
      var se = a.pingedTasks;
      se.push(re), se.length === 1 && vt(a);
    }, blockedBoundary: h, blockedSegment: g, abortSet: _, legacyContext: C, context: M, treeContext: N };
    return _.add(re), re;
  }
  function Ge(a, u, h, g, _, C) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: g, boundary: h, lastPushedText: _, textEmbedded: C };
  }
  function Te(a, u) {
    if (a = a.onError(u), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function Me(a, u) {
    var h = a.onShellError;
    h(u), h = a.onFatalError, h(u), a.destination !== null ? (a.status = 2, a.destination.destroy(u)) : (a.status = 1, a.fatalError = u);
  }
  function Ue(a, u, h, g, _) {
    for (ut = {}, ct = u, Kt = 0, a = h(g, _); hr; ) hr = !1, Kt = 0, ir += 1, Ee = null, a = h(g, _);
    return vr(), a;
  }
  function Ht(a, u, h, g) {
    var _ = h.render(), C = g.childContextTypes;
    if (C != null) {
      var M = u.legacyContext;
      if (typeof h.getChildContext != "function") g = M;
      else {
        h = h.getChildContext();
        for (var N in h) if (!(N in C)) throw Error(v(108, fe(g) || "Unknown", N));
        g = xe({}, M, h);
      }
      u.legacyContext = g, Ze(a, u, _), u.legacyContext = M;
    } else Ze(a, u, _);
  }
  function Pt(a, u) {
    if (a && a.defaultProps) {
      u = xe({}, u), a = a.defaultProps;
      for (var h in a) u[h] === void 0 && (u[h] = a[h]);
      return u;
    }
    return u;
  }
  function Xe(a, u, h, g, _) {
    if (typeof h == "function") if (h.prototype && h.prototype.isReactComponent) {
      _ = Ve(h, u.legacyContext);
      var C = h.contextType;
      C = new h(g, typeof C == "object" && C !== null ? C._currentValue2 : _), Cr(C, h, g, _), Ht(a, u, C, h);
    } else {
      C = Ve(h, u.legacyContext), _ = Ue(a, u, h, g, C);
      var M = Kt !== 0;
      if (typeof _ == "object" && _ !== null && typeof _.render == "function" && _.$$typeof === void 0) Cr(_, h, g, C), Ht(a, u, _, h);
      else if (M) {
        g = u.treeContext, u.treeContext = Er(g, 1, 0);
        try {
          Ze(a, u, _);
        } finally {
          u.treeContext = g;
        }
      } else Ze(a, u, _);
    }
    else if (typeof h == "string") {
      switch (_ = u.blockedSegment, C = De(_.chunks, h, g, a.responseState, _.formatContext), _.lastPushedText = !1, M = _.formatContext, _.formatContext = Ne(M, h, g), Ft(a, u, C), _.formatContext = M, h) {
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
          _.chunks.push("</", h, ">");
      }
      _.lastPushedText = !1;
    } else {
      switch (h) {
        case q:
        case G:
        case ze:
        case je:
        case Et:
          Ze(a, u, g.children);
          return;
        case nt:
          Ze(a, u, g.children);
          return;
        case it:
          throw Error(v(343));
        case lt:
          e: {
            h = u.blockedBoundary, _ = u.blockedSegment, C = g.fallback, g = g.children, M = /* @__PURE__ */ new Set();
            var N = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: M, errorDigest: null }, re = Ge(a, _.chunks.length, N, _.formatContext, !1, !1);
            _.children.push(re), _.lastPushedText = !1;
            var se = Ge(a, 0, null, _.formatContext, !1, !1);
            se.parentFlushed = !0, u.blockedBoundary = N, u.blockedSegment = se;
            try {
              if (Ft(
                a,
                u,
                g
              ), a.responseState.generateStaticMarkup || se.lastPushedText && se.textEmbedded && se.chunks.push("<!-- -->"), se.status = 1, Wt(N, se), N.pendingTasks === 0) break e;
            } catch (oe) {
              se.status = 4, N.forceClientRender = !0, N.errorDigest = Te(a, oe);
            } finally {
              u.blockedBoundary = h, u.blockedSegment = _;
            }
            u = pe(a, C, h, re, M, u.legacyContext, u.context, u.treeContext), a.pingedTasks.push(u);
          }
          return;
      }
      if (typeof h == "object" && h !== null) switch (h.$$typeof) {
        case at:
          if (g = Ue(a, u, h.render, g, _), Kt !== 0) {
            h = u.treeContext, u.treeContext = Er(h, 1, 0);
            try {
              Ze(a, u, g);
            } finally {
              u.treeContext = h;
            }
          } else Ze(a, u, g);
          return;
        case Tt:
          h = h.type, g = Pt(h, g), Xe(a, u, h, g, _);
          return;
        case $e:
          if (_ = g.children, h = h._context, g = g.value, C = h._currentValue2, h._currentValue2 = g, M = we, we = g = { parent: M, depth: M === null ? 0 : M.depth + 1, context: h, parentValue: C, value: g }, u.context = g, Ze(a, u, _), a = we, a === null) throw Error(v(403));
          g = a.parentValue, a.context._currentValue2 = g === ce ? a.context._defaultValue : g, a = we = a.parent, u.context = a;
          return;
        case ht:
          g = g.children, g = g(h._currentValue2), Ze(a, u, g);
          return;
        case Ke:
          _ = h._init, h = _(h._payload), g = Pt(h, g), Xe(
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
        case Ae:
          Xe(a, u, h.type, h.props, h.ref);
          return;
        case jt:
          throw Error(v(257));
        case Ke:
          var g = h._init;
          h = g(h._payload), Ze(a, u, h);
          return;
      }
      if (O(h)) {
        Dt(a, u, h);
        return;
      }
      if (h === null || typeof h != "object" ? g = null : (g = ae && h[ae] || h["@@iterator"], g = typeof g == "function" ? g : null), g && (g = g.call(h))) {
        if (h = g.next(), !h.done) {
          var _ = [];
          do
            _.push(h.value), h = g.next();
          while (!h.done);
          Dt(a, u, _);
        }
        return;
      }
      throw a = Object.prototype.toString.call(h), Error(v(31, a === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : a));
    }
    typeof h == "string" ? (g = u.blockedSegment, g.lastPushedText = Ct(u.blockedSegment.chunks, h, a.responseState, g.lastPushedText)) : typeof h == "number" && (g = u.blockedSegment, g.lastPushedText = Ct(u.blockedSegment.chunks, "" + h, a.responseState, g.lastPushedText));
  }
  function Dt(a, u, h) {
    for (var g = h.length, _ = 0; _ < g; _++) {
      var C = u.treeContext;
      u.treeContext = Er(C, g, _);
      try {
        Ft(a, u, h[_]);
      } finally {
        u.treeContext = C;
      }
    }
  }
  function Ft(a, u, h) {
    var g = u.blockedSegment.formatContext, _ = u.legacyContext, C = u.context;
    try {
      return Ze(a, u, h);
    } catch (re) {
      if (vr(), typeof re == "object" && re !== null && typeof re.then == "function") {
        h = re;
        var M = u.blockedSegment, N = Ge(a, M.chunks.length, null, M.formatContext, M.lastPushedText, !0);
        M.children.push(N), M.lastPushedText = !1, a = pe(a, u.node, u.blockedBoundary, N, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, h.then(a, a), u.blockedSegment.formatContext = g, u.legacyContext = _, u.context = C, Be(C);
      } else throw u.blockedSegment.formatContext = g, u.legacyContext = _, u.context = C, Be(C), re;
    }
  }
  function mr(a) {
    var u = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, qt(this, u, a);
  }
  function zr(a, u, h) {
    var g = a.blockedBoundary;
    a.blockedSegment.status = 3, g === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (g.pendingTasks--, g.forceClientRender || (g.forceClientRender = !0, a = h === void 0 ? Error(v(432)) : h, g.errorDigest = u.onError(a), g.parentFlushed && u.clientRenderedBoundaries.push(g)), g.fallbackAbortableTasks.forEach(function(_) {
      return zr(_, u, h);
    }), g.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (g = u.onAllReady, g()));
  }
  function Wt(a, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var h = u.children[0];
      h.id = u.id, h.parentFlushed = !0, h.status === 1 && Wt(a, h);
    } else a.completedSegments.push(u);
  }
  function qt(a, u, h) {
    if (u === null) {
      if (h.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(v(389));
        a.completedRootSegment = h;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = be, u = a.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && Wt(u, h), u.parentFlushed && a.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(mr, a), u.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (Wt(u, h), u.completedSegments.length === 1 && u.parentFlushed && a.partialBoundaries.push(u)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function vt(a) {
    if (a.status !== 2) {
      var u = we, h = ne.current;
      ne.current = U;
      var g = V;
      V = a.responseState;
      try {
        var _ = a.pingedTasks, C;
        for (C = 0; C < _.length; C++) {
          var M = _[C], N = a, re = M.blockedSegment;
          if (re.status === 0) {
            Be(M.context);
            try {
              Ze(N, M, M.node), N.responseState.generateStaticMarkup || re.lastPushedText && re.textEmbedded && re.chunks.push("<!-- -->"), M.abortSet.delete(M), re.status = 1, qt(N, M.blockedBoundary, re);
            } catch (St) {
              if (vr(), typeof St == "object" && St !== null && typeof St.then == "function") {
                var se = M.ping;
                St.then(se, se);
              } else {
                M.abortSet.delete(M), re.status = 4;
                var oe = M.blockedBoundary, _e = St, gt = Te(N, _e);
                if (oe === null ? Me(N, _e) : (oe.pendingTasks--, oe.forceClientRender || (oe.forceClientRender = !0, oe.errorDigest = gt, oe.parentFlushed && N.clientRenderedBoundaries.push(oe))), N.allPendingTasks--, N.allPendingTasks === 0) {
                  var yt = N.onAllReady;
                  yt();
                }
              }
            } finally {
            }
          }
        }
        _.splice(0, C), a.destination !== null && mt(a, a.destination);
      } catch (St) {
        Te(a, St), Me(a, St);
      } finally {
        V = g, ne.current = h, h === U && Be(u);
      }
    }
  }
  function gr(a, u, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var g = h.id = a.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, a = a.responseState, u.push('<template id="'), u.push(a.placeholderPrefix), a = g.toString(16), u.push(a), u.push('"></template>');
      case 1:
        h.status = 2;
        var _ = !0;
        g = h.chunks;
        var C = 0;
        h = h.children;
        for (var M = 0; M < h.length; M++) {
          for (_ = h[M]; C < _.index; C++) u.push(g[C]);
          _ = Dr(a, u, _);
        }
        for (; C < g.length - 1; C++) u.push(g[C]);
        return C < g.length && (_ = u.push(g[C])), _;
      default:
        throw Error(v(390));
    }
  }
  function Dr(a, u, h) {
    var g = h.boundary;
    if (g === null) return gr(a, u, h);
    if (g.parentFlushed = !0, g.forceClientRender) return a.responseState.generateStaticMarkup || (g = g.errorDigest, u.push("<!--$!-->"), u.push("<template"), g && (u.push(' data-dgst="'), g = J(g), u.push(g), u.push('"')), u.push("></template>")), gr(a, u, h), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
    if (0 < g.pendingTasks) {
      g.rootSegmentID = a.nextSegmentId++, 0 < g.completedSegments.length && a.partialBoundaries.push(g);
      var _ = a.responseState, C = _.nextSuspenseID++;
      return _ = _.boundaryPrefix + C.toString(16), g = g.id = _, ye(u, a.responseState, g), gr(a, u, h), u.push("<!--/$-->");
    }
    if (g.byteSize > a.progressiveChunkSize) return g.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(g), ye(u, a.responseState, g.id), gr(a, u, h), u.push("<!--/$-->");
    if (a.responseState.generateStaticMarkup || u.push("<!--$-->"), h = g.completedSegments, h.length !== 1) throw Error(v(391));
    return Dr(a, u, h[0]), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
  }
  function $r(a, u, h) {
    return Le(u, a.responseState, h.formatContext, h.id), Dr(a, u, h), ar(u, h.formatContext);
  }
  function Mt(a, u, h) {
    for (var g = h.completedSegments, _ = 0; _ < g.length; _++) er(a, u, h, g[_]);
    if (g.length = 0, a = a.responseState, g = h.id, h = h.rootSegmentID, u.push(a.startInlineScript), a.sentCompleteBoundaryFunction ? u.push('$RC("') : (a.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), g === null) throw Error(v(395));
    return h = h.toString(16), u.push(g), u.push('","'), u.push(a.segmentPrefix), u.push(h), u.push('")<\/script>');
  }
  function er(a, u, h, g) {
    if (g.status === 2) return !0;
    var _ = g.id;
    if (_ === -1) {
      if ((g.id = h.rootSegmentID) === -1) throw Error(v(392));
      return $r(a, u, g);
    }
    return $r(a, u, g), a = a.responseState, u.push(a.startInlineScript), a.sentCompleteSegmentFunction ? u.push('$RS("') : (a.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(a.segmentPrefix), _ = _.toString(16), u.push(_), u.push('","'), u.push(a.placeholderPrefix), u.push(_), u.push('")<\/script>');
  }
  function mt(a, u) {
    try {
      var h = a.completedRootSegment;
      if (h !== null && a.pendingRootTasks === 0) {
        Dr(a, u, h), a.completedRootSegment = null;
        var g = a.responseState.bootstrapChunks;
        for (h = 0; h < g.length - 1; h++) u.push(g[h]);
        h < g.length && u.push(g[h]);
      }
      var _ = a.clientRenderedBoundaries, C;
      for (C = 0; C < _.length; C++) {
        var M = _[C];
        g = u;
        var N = a.responseState, re = M.id, se = M.errorDigest, oe = M.errorMessage, _e = M.errorComponentStack;
        if (g.push(N.startInlineScript), N.sentClientRenderFunction ? g.push('$RX("') : (N.sentClientRenderFunction = !0, g.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), re === null) throw Error(v(395));
        if (g.push(re), g.push('"'), se || oe || _e) {
          g.push(",");
          var gt = ee(se || "");
          g.push(gt);
        }
        if (oe || _e) {
          g.push(",");
          var yt = ee(oe || "");
          g.push(yt);
        }
        if (_e) {
          g.push(",");
          var St = ee(_e);
          g.push(St);
        }
        if (!g.push(")<\/script>")) {
          a.destination = null, C++, _.splice(0, C);
          return;
        }
      }
      _.splice(0, C);
      var yr = a.completedBoundaries;
      for (C = 0; C < yr.length; C++) if (!Mt(a, u, yr[C])) {
        a.destination = null, C++, yr.splice(0, C);
        return;
      }
      yr.splice(0, C);
      var tr = a.partialBoundaries;
      for (C = 0; C < tr.length; C++) {
        var Yr = tr[C];
        e: {
          _ = a, M = u;
          var Sr = Yr.completedSegments;
          for (N = 0; N < Sr.length; N++) if (!er(_, M, Yr, Sr[N])) {
            N++, Sr.splice(0, N);
            var Fr = !1;
            break e;
          }
          Sr.splice(0, N), Fr = !0;
        }
        if (!Fr) {
          a.destination = null, C++, tr.splice(0, C);
          return;
        }
      }
      tr.splice(0, C);
      var sr = a.completedBoundaries;
      for (C = 0; C < sr.length; C++) if (!Mt(a, u, sr[C])) {
        a.destination = null, C++, sr.splice(0, C);
        return;
      }
      sr.splice(0, C);
    } finally {
      a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function Vr(a, u) {
    try {
      var h = a.abortableTasks;
      h.forEach(function(g) {
        return zr(g, a, u);
      }), h.clear(), a.destination !== null && mt(a, a.destination);
    } catch (g) {
      Te(a, g), Me(a, g);
    }
  }
  function ft() {
  }
  function bt(a, u, h, g) {
    var _ = !1, C = null, M = "", N = { push: function(se) {
      return se !== null && (M += se), !0;
    }, destroy: function(se) {
      _ = !0, C = se;
    } }, re = !1;
    if (a = me(a, Qe(h, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, ft, void 0, function() {
      re = !0;
    }), vt(a), Vr(a, g), a.status === 1) a.status = 2, N.destroy(a.fatalError);
    else if (a.status !== 2 && a.destination === null) {
      a.destination = N;
      try {
        mt(a, N);
      } catch (se) {
        Te(a, se), Me(a, se);
      }
    }
    if (_) throw C;
    if (!re) throw Error(v(426));
    return M;
  }
  return Eo.renderToNodeStream = function() {
    throw Error(v(207));
  }, Eo.renderToStaticMarkup = function(a, u) {
    return bt(a, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Eo.renderToStaticNodeStream = function() {
    throw Error(v(208));
  }, Eo.renderToString = function(a, u) {
    return bt(a, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Eo.version = "18.3.1", Eo;
}
var ss = {};
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
function jl() {
  if (yl) return ss;
  yl = 1;
  var D = nr;
  function v(i) {
    for (var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, d = 1; d < arguments.length; d++) l += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + i + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var k = null, P = 0;
  function f(i, l) {
    if (l.length !== 0) if (512 < l.length) 0 < P && (i.enqueue(new Uint8Array(k.buffer, 0, P)), k = new Uint8Array(512), P = 0), i.enqueue(l);
    else {
      var d = k.length - P;
      d < l.length && (d === 0 ? i.enqueue(k) : (k.set(l.subarray(0, d), P), i.enqueue(k), l = l.subarray(d)), k = new Uint8Array(512), P = 0), k.set(l, P), P += l.length;
    }
  }
  function F(i, l) {
    return f(i, l), !0;
  }
  function B(i) {
    k && 0 < P && (i.enqueue(new Uint8Array(k.buffer, 0, P)), k = null, P = 0);
  }
  var $ = new TextEncoder();
  function b(i) {
    return $.encode(i);
  }
  function x(i) {
    return $.encode(i);
  }
  function Z(i, l) {
    typeof i.error == "function" ? i.error(l) : i.close();
  }
  var R = Object.prototype.hasOwnProperty, L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, K = {}, J = {};
  function Re(i) {
    return R.call(J, i) ? !0 : R.call(K, i) ? !1 : L.test(i) ? J[i] = !0 : (K[i] = !0, !1);
  }
  function W(i, l, d, m, I, T, A) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = m, this.attributeNamespace = I, this.mustUseProperty = d, this.propertyName = i, this.type = l, this.sanitizeURL = T, this.removeEmptyString = A;
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    O[i] = new W(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var l = i[0];
    O[l] = new W(l, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    O[i] = new W(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    O[i] = new W(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    O[i] = new W(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    O[i] = new W(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    O[i] = new W(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    O[i] = new W(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    O[i] = new W(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var ue = /[\-:]([a-z])/g;
  function Ne(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var l = i.replace(
      ue,
      Ne
    );
    O[l] = new W(l, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var l = i.replace(ue, Ne);
    O[l] = new W(l, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var l = i.replace(ue, Ne);
    O[l] = new W(l, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    O[i] = new W(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), O.xlinkHref = new W("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    O[i] = new W(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var ke = {
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
  }, Ce = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ke).forEach(function(i) {
    Ce.forEach(function(l) {
      l = l + i.charAt(0).toUpperCase() + i.substring(1), ke[l] = ke[i];
    });
  });
  var Pe = /["'&<>]/;
  function ie(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var l = Pe.exec(i);
    if (l) {
      var d = "", m, I = 0;
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
        I !== m && (d += i.substring(I, m)), I = m + 1, d += l;
      }
      i = I !== m ? d + i.substring(I, m) : d;
    }
    return i;
  }
  var rt = /([A-Z])/g, ve = /^ms-/, Oe = Array.isArray, Q = x("<script>"), X = x("<\/script>"), De = x('<script src="'), ye = x('<script type="module" src="'), Le = x('" async=""><\/script>'), ar = /(<\/|<)(s)(cript)/gi;
  function Ot(i, l, d, m) {
    return "" + l + (d === "s" ? "\\u0073" : "\\u0053") + m;
  }
  function ee(i, l, d, m, I) {
    i = i === void 0 ? "" : i, l = l === void 0 ? Q : x('<script nonce="' + ie(l) + '">');
    var T = [];
    if (d !== void 0 && T.push(l, b(("" + d).replace(ar, Ot)), X), m !== void 0) for (d = 0; d < m.length; d++) T.push(De, b(ie(m[d])), Le);
    if (I !== void 0) for (m = 0; m < I.length; m++) T.push(ye, b(ie(I[m])), Le);
    return { bootstrapChunks: T, startInlineScript: l, placeholderPrefix: x(i + "P:"), segmentPrefix: x(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Qe(i, l) {
    return { insertionMode: i, selectedValue: l };
  }
  function Ct(i) {
    return Qe(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function xe(i, l, d) {
    switch (l) {
      case "select":
        return Qe(1, d.value != null ? d.value : d.defaultValue);
      case "svg":
        return Qe(2, null);
      case "math":
        return Qe(3, null);
      case "foreignObject":
        return Qe(1, null);
      case "table":
        return Qe(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Qe(5, null);
      case "colgroup":
        return Qe(7, null);
      case "tr":
        return Qe(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? Qe(1, null) : i;
  }
  var Ae = x("<!-- -->");
  function jt(i, l, d, m) {
    return l === "" ? m : (m && i.push(Ae), i.push(b(ie(l))), !0);
  }
  var Et = /* @__PURE__ */ new Map(), ze = x(' style="'), je = x(":"), $e = x(";");
  function ht(i, l, d) {
    if (typeof d != "object") throw Error(v(62));
    l = !0;
    for (var m in d) if (R.call(d, m)) {
      var I = d[m];
      if (I != null && typeof I != "boolean" && I !== "") {
        if (m.indexOf("--") === 0) {
          var T = b(ie(m));
          I = b(ie(("" + I).trim()));
        } else {
          T = m;
          var A = Et.get(T);
          A !== void 0 || (A = x(ie(T.replace(rt, "-$1").toLowerCase().replace(ve, "-ms-"))), Et.set(T, A)), T = A, I = typeof I == "number" ? I === 0 || R.call(ke, m) ? b("" + I) : b(I + "px") : b(ie(("" + I).trim()));
        }
        l ? (l = !1, i.push(ze, T, je, I)) : i.push($e, T, je, I);
      }
    }
    l || i.push(nt);
  }
  var at = x(" "), lt = x('="'), nt = x('"'), Tt = x('=""');
  function Ke(i, l, d, m) {
    switch (d) {
      case "style":
        ht(i, l, m);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < d.length) || d[0] !== "o" && d[0] !== "O" || d[1] !== "n" && d[1] !== "N") {
      if (l = O.hasOwnProperty(d) ? O[d] : null, l !== null) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!l.acceptsBooleans) return;
        }
        switch (d = b(l.attributeName), l.type) {
          case 3:
            m && i.push(at, d, Tt);
            break;
          case 4:
            m === !0 ? i.push(at, d, Tt) : m !== !1 && i.push(at, d, lt, b(ie(m)), nt);
            break;
          case 5:
            isNaN(m) || i.push(at, d, lt, b(ie(m)), nt);
            break;
          case 6:
            !isNaN(m) && 1 <= m && i.push(at, d, lt, b(ie(m)), nt);
            break;
          default:
            l.sanitizeURL && (m = "" + m), i.push(at, d, lt, b(ie(m)), nt);
        }
      } else if (Re(d)) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (l = d.toLowerCase().slice(0, 5), l !== "data-" && l !== "aria-") return;
        }
        i.push(at, b(d), lt, b(ie(m)), nt);
      }
    }
  }
  var it = x(">"), G = x("/>");
  function q(i, l, d) {
    if (l != null) {
      if (d != null) throw Error(v(60));
      if (typeof l != "object" || !("__html" in l)) throw Error(v(61));
      l = l.__html, l != null && i.push(b("" + l));
    }
  }
  function ce(i) {
    var l = "";
    return D.Children.forEach(i, function(d) {
      d != null && (l += d);
    }), l;
  }
  var ae = x(' selected=""');
  function fe(i, l, d, m) {
    i.push(ot(d));
    var I = d = null, T;
    for (T in l) if (R.call(l, T)) {
      var A = l[T];
      if (A != null) switch (T) {
        case "children":
          d = A;
          break;
        case "dangerouslySetInnerHTML":
          I = A;
          break;
        default:
          Ke(i, m, T, A);
      }
    }
    return i.push(it), q(i, I, d), typeof d == "string" ? (i.push(b(ie(d))), null) : d;
  }
  var te = x(`
`), Ve = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, we = /* @__PURE__ */ new Map();
  function ot(i) {
    var l = we.get(i);
    if (l === void 0) {
      if (!Ve.test(i)) throw Error(v(65, i));
      l = x("<" + i), we.set(i, l);
    }
    return l;
  }
  var Ye = x("<!DOCTYPE html>");
  function Lt(i, l, d, m, I) {
    switch (l) {
      case "select":
        i.push(ot("select"));
        var T = null, A = null;
        for (ge in d) if (R.call(d, ge)) {
          var z = d[ge];
          if (z != null) switch (ge) {
            case "children":
              T = z;
              break;
            case "dangerouslySetInnerHTML":
              A = z;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              Ke(i, m, ge, z);
          }
        }
        return i.push(it), q(i, A, T), T;
      case "option":
        A = I.selectedValue, i.push(ot("option"));
        var le = z = null, Se = null, ge = null;
        for (T in d) if (R.call(d, T)) {
          var We = d[T];
          if (We != null) switch (T) {
            case "children":
              z = We;
              break;
            case "selected":
              Se = We;
              break;
            case "dangerouslySetInnerHTML":
              ge = We;
              break;
            case "value":
              le = We;
            default:
              Ke(i, m, T, We);
          }
        }
        if (A != null) if (d = le !== null ? "" + le : ce(z), Oe(A)) {
          for (m = 0; m < A.length; m++)
            if ("" + A[m] === d) {
              i.push(ae);
              break;
            }
        } else "" + A === d && i.push(ae);
        else Se && i.push(ae);
        return i.push(it), q(i, ge, z), z;
      case "textarea":
        i.push(ot("textarea")), ge = A = T = null;
        for (z in d) if (R.call(d, z) && (le = d[z], le != null)) switch (z) {
          case "children":
            ge = le;
            break;
          case "value":
            T = le;
            break;
          case "defaultValue":
            A = le;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(v(91));
          default:
            Ke(i, m, z, le);
        }
        if (T === null && A !== null && (T = A), i.push(it), ge != null) {
          if (T != null) throw Error(v(92));
          if (Oe(ge) && 1 < ge.length) throw Error(v(93));
          T = "" + ge;
        }
        return typeof T == "string" && T[0] === `
` && i.push(te), T !== null && i.push(b(ie("" + T))), null;
      case "input":
        i.push(ot("input")), le = ge = z = T = null;
        for (A in d) if (R.call(d, A) && (Se = d[A], Se != null)) switch (A) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(399, "input"));
          case "defaultChecked":
            le = Se;
            break;
          case "defaultValue":
            z = Se;
            break;
          case "checked":
            ge = Se;
            break;
          case "value":
            T = Se;
            break;
          default:
            Ke(i, m, A, Se);
        }
        return ge !== null ? Ke(
          i,
          m,
          "checked",
          ge
        ) : le !== null && Ke(i, m, "checked", le), T !== null ? Ke(i, m, "value", T) : z !== null && Ke(i, m, "value", z), i.push(G), null;
      case "menuitem":
        i.push(ot("menuitem"));
        for (var wt in d) if (R.call(d, wt) && (T = d[wt], T != null)) switch (wt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(400));
          default:
            Ke(i, m, wt, T);
        }
        return i.push(it), null;
      case "title":
        i.push(ot("title")), T = null;
        for (We in d) if (R.call(d, We) && (A = d[We], A != null)) switch (We) {
          case "children":
            T = A;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(v(434));
          default:
            Ke(i, m, We, A);
        }
        return i.push(it), T;
      case "listing":
      case "pre":
        i.push(ot(l)), A = T = null;
        for (le in d) if (R.call(d, le) && (z = d[le], z != null)) switch (le) {
          case "children":
            T = z;
            break;
          case "dangerouslySetInnerHTML":
            A = z;
            break;
          default:
            Ke(i, m, le, z);
        }
        if (i.push(it), A != null) {
          if (T != null) throw Error(v(60));
          if (typeof A != "object" || !("__html" in A)) throw Error(v(61));
          d = A.__html, d != null && (typeof d == "string" && 0 < d.length && d[0] === `
` ? i.push(te, b(d)) : i.push(b("" + d)));
        }
        return typeof T == "string" && T[0] === `
` && i.push(te), T;
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
        i.push(ot(l));
        for (var zt in d) if (R.call(d, zt) && (T = d[zt], T != null)) switch (zt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(v(399, l));
          default:
            Ke(i, m, zt, T);
        }
        return i.push(G), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return fe(i, d, l, m);
      case "html":
        return I.insertionMode === 0 && i.push(Ye), fe(i, d, l, m);
      default:
        if (l.indexOf("-") === -1 && typeof d.is != "string") return fe(i, d, l, m);
        i.push(ot(l)), A = T = null;
        for (Se in d) if (R.call(d, Se) && (z = d[Se], z != null)) switch (Se) {
          case "children":
            T = z;
            break;
          case "dangerouslySetInnerHTML":
            A = z;
            break;
          case "style":
            ht(i, m, z);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            Re(Se) && typeof z != "function" && typeof z != "symbol" && i.push(at, b(Se), lt, b(ie(z)), nt);
        }
        return i.push(it), q(i, A, T), T;
    }
  }
  var Bt = x("</"), Jt = x(">"), Be = x('<template id="'), dt = x('"></template>'), Cr = x("<!--$-->"), Nr = x('<!--$?--><template id="'), Er = x('"></template>'), dr = x("<!--$!-->"), en = x("<!--/$-->"), Tr = x("<template"), Qt = x('"'), Rr = x(' data-dgst="');
  x(' data-msg="'), x(' data-stck="');
  var pr = x("></template>");
  function ut(i, l, d) {
    if (f(i, Nr), d === null) throw Error(v(395));
    return f(i, d), F(i, Er);
  }
  var ct = x('<div hidden id="'), Rt = x('">'), Ee = x("</div>"), Ut = x('<svg aria-hidden="true" style="display:none" id="'), hr = x('">'), Kt = x("</svg>"), _t = x('<math aria-hidden="true" style="display:none" id="'), ir = x('">'), It = x("</math>"), st = x('<table hidden id="'), _r = x('">'), vr = x("</table>"), Ir = x('<table hidden><tbody id="'), et = x('">'), Pr = x("</tbody></table>"), tn = x('<table hidden><tr id="'), rn = x('">'), S = x("</tr></table>"), U = x('<table hidden><colgroup id="'), V = x('">'), ne = x("</colgroup></table>");
  function he(i, l, d, m) {
    switch (d.insertionMode) {
      case 0:
      case 1:
        return f(i, ct), f(i, l.segmentPrefix), f(i, b(m.toString(16))), F(i, Rt);
      case 2:
        return f(i, Ut), f(i, l.segmentPrefix), f(i, b(m.toString(16))), F(i, hr);
      case 3:
        return f(i, _t), f(i, l.segmentPrefix), f(i, b(m.toString(16))), F(i, ir);
      case 4:
        return f(i, st), f(i, l.segmentPrefix), f(i, b(m.toString(16))), F(i, _r);
      case 5:
        return f(i, Ir), f(i, l.segmentPrefix), f(i, b(m.toString(16))), F(i, et);
      case 6:
        return f(i, tn), f(i, l.segmentPrefix), f(i, b(m.toString(16))), F(i, rn);
      case 7:
        return f(
          i,
          U
        ), f(i, l.segmentPrefix), f(i, b(m.toString(16))), F(i, V);
      default:
        throw Error(v(397));
    }
  }
  function be(i, l) {
    switch (l.insertionMode) {
      case 0:
      case 1:
        return F(i, Ee);
      case 2:
        return F(i, Kt);
      case 3:
        return F(i, It);
      case 4:
        return F(i, vr);
      case 5:
        return F(i, Pr);
      case 6:
        return F(i, S);
      case 7:
        return F(i, ne);
      default:
        throw Error(v(397));
    }
  }
  var me = x('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), pe = x('$RS("'), Ge = x('","'), Te = x('")<\/script>'), Me = x('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Ue = x('$RC("'), Ht = x('","'), Pt = x('")<\/script>'), Xe = x('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ze = x('$RX("'), Dt = x('"'), Ft = x(")<\/script>"), mr = x(","), zr = /[<\u2028\u2029]/g;
  function Wt(i) {
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
  var qt = Object.assign, vt = Symbol.for("react.element"), gr = Symbol.for("react.portal"), Dr = Symbol.for("react.fragment"), $r = Symbol.for("react.strict_mode"), Mt = Symbol.for("react.profiler"), er = Symbol.for("react.provider"), mt = Symbol.for("react.context"), Vr = Symbol.for("react.forward_ref"), ft = Symbol.for("react.suspense"), bt = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), h = Symbol.for("react.scope"), g = Symbol.for("react.debug_trace_mode"), _ = Symbol.for("react.legacy_hidden"), C = Symbol.for("react.default_value"), M = Symbol.iterator;
  function N(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case Dr:
        return "Fragment";
      case gr:
        return "Portal";
      case Mt:
        return "Profiler";
      case $r:
        return "StrictMode";
      case ft:
        return "Suspense";
      case bt:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case mt:
        return (i.displayName || "Context") + ".Consumer";
      case er:
        return (i._context.displayName || "Context") + ".Provider";
      case Vr:
        var l = i.render;
        return i = i.displayName, i || (i = l.displayName || l.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case a:
        return l = i.displayName || null, l !== null ? l : N(i.type) || "Memo";
      case u:
        l = i._payload, i = i._init;
        try {
          return N(i(l));
        } catch {
        }
    }
    return null;
  }
  var re = {};
  function se(i, l) {
    if (i = i.contextTypes, !i) return re;
    var d = {}, m;
    for (m in i) d[m] = l[m];
    return d;
  }
  var oe = null;
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
  function gt(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && gt(i);
  }
  function yt(i) {
    var l = i.parent;
    l !== null && yt(l), i.context._currentValue = i.value;
  }
  function St(i, l) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(v(402));
    i.depth === l.depth ? _e(i, l) : St(i, l);
  }
  function yr(i, l) {
    var d = l.parent;
    if (d === null) throw Error(v(402));
    i.depth === d.depth ? _e(i, d) : yr(i, d), l.context._currentValue = l.value;
  }
  function tr(i) {
    var l = oe;
    l !== i && (l === null ? yt(i) : i === null ? gt(l) : l.depth === i.depth ? _e(l, i) : l.depth > i.depth ? St(l, i) : yr(l, i), oe = i);
  }
  var Yr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, l) {
    i = i._reactInternals, i.queue !== null && i.queue.push(l);
  }, enqueueReplaceState: function(i, l) {
    i = i._reactInternals, i.replace = !0, i.queue = [l];
  }, enqueueForceUpdate: function() {
  } };
  function Sr(i, l, d, m) {
    var I = i.state !== void 0 ? i.state : null;
    i.updater = Yr, i.props = d, i.state = I;
    var T = { queue: [], replace: !1 };
    i._reactInternals = T;
    var A = l.contextType;
    if (i.context = typeof A == "object" && A !== null ? A._currentValue : m, A = l.getDerivedStateFromProps, typeof A == "function" && (A = A(d, I), I = A == null ? I : qt({}, I, A), i.state = I), typeof l.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (l = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), l !== i.state && Yr.enqueueReplaceState(i, i.state, null), T.queue !== null && 0 < T.queue.length) if (l = T.queue, A = T.replace, T.queue = null, T.replace = !1, A && l.length === 1) i.state = l[0];
    else {
      for (T = A ? l[0] : i.state, I = !0, A = A ? 1 : 0; A < l.length; A++) {
        var z = l[A];
        z = typeof z == "function" ? z.call(i, T, d, m) : z, z != null && (I ? (I = !1, T = qt({}, T, z)) : qt(T, z));
      }
      i.state = T;
    }
    else T.queue = null;
  }
  var Fr = { id: 1, overflow: "" };
  function sr(i, l, d) {
    var m = i.id;
    i = i.overflow;
    var I = 32 - Mr(m) - 1;
    m &= ~(1 << I), d += 1;
    var T = 32 - Mr(l) + I;
    if (30 < T) {
      var A = I - I % 5;
      return T = (m & (1 << A) - 1).toString(32), m >>= A, I -= A, { id: 1 << 32 - Mr(l) + I | d << I | m, overflow: T + i };
    }
    return { id: 1 << T | d << I | m, overflow: i };
  }
  var Mr = Math.clz32 ? Math.clz32 : Sn, Ta = Math.log, Ra = Math.LN2;
  function Sn(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Ta(i) / Ra | 0) | 0;
  }
  function rr(i, l) {
    return i === l && (i !== 0 || 1 / i === 1 / l) || i !== i && l !== l;
  }
  var _a = typeof Object.is == "function" ? Object.is : rr, lr = null, Yn = null, bn = null, He = null, Ar = !1, xn = !1, Or = 0, br = null, wn = 0;
  function xr() {
    if (lr === null) throw Error(v(321));
    return lr;
  }
  function Nt() {
    if (0 < wn) throw Error(v(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Gn() {
    return He === null ? bn === null ? (Ar = !1, bn = He = Nt()) : (Ar = !0, He = bn) : He.next === null ? (Ar = !1, He = He.next = Nt()) : (Ar = !0, He = He.next), He;
  }
  function nn() {
    Yn = lr = null, xn = !1, bn = null, wn = 0, He = br = null;
  }
  function Ro(i, l) {
    return typeof l == "function" ? l(i) : l;
  }
  function kn(i, l, d) {
    if (lr = xr(), He = Gn(), Ar) {
      var m = He.queue;
      if (l = m.dispatch, br !== null && (d = br.get(m), d !== void 0)) {
        br.delete(m), m = He.memoizedState;
        do
          m = i(m, d.action), d = d.next;
        while (d !== null);
        return He.memoizedState = m, [m, l];
      }
      return [He.memoizedState, l];
    }
    return i = i === Ro ? typeof l == "function" ? l() : l : d !== void 0 ? d(l) : l, He.memoizedState = i, i = He.queue = { last: null, dispatch: null }, i = i.dispatch = Ia.bind(null, lr, i), [He.memoizedState, i];
  }
  function _o(i, l) {
    if (lr = xr(), He = Gn(), l = l === void 0 ? null : l, He !== null) {
      var d = He.memoizedState;
      if (d !== null && l !== null) {
        var m = d[1];
        e: if (m === null) m = !1;
        else {
          for (var I = 0; I < m.length && I < l.length; I++) if (!_a(l[I], m[I])) {
            m = !1;
            break e;
          }
          m = !0;
        }
        if (m) return d[0];
      }
    }
    return i = i(), He.memoizedState = [i, l], i;
  }
  function Ia(i, l, d) {
    if (25 <= wn) throw Error(v(301));
    if (i === lr) if (xn = !0, i = { action: d, next: null }, br === null && (br = /* @__PURE__ */ new Map()), d = br.get(l), d === void 0) br.set(l, i);
    else {
      for (l = d; l.next !== null; ) l = l.next;
      l.next = i;
    }
  }
  function Pa() {
    throw Error(v(394));
  }
  function Cn() {
  }
  var Io = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return xr(), i._currentValue;
  }, useMemo: _o, useReducer: kn, useRef: function(i) {
    lr = xr(), He = Gn();
    var l = He.memoizedState;
    return l === null ? (i = { current: i }, He.memoizedState = i) : l;
  }, useState: function(i) {
    return kn(Ro, i);
  }, useInsertionEffect: Cn, useLayoutEffect: function() {
  }, useCallback: function(i, l) {
    return _o(function() {
      return i;
    }, l);
  }, useImperativeHandle: Cn, useEffect: Cn, useDebugValue: Cn, useDeferredValue: function(i) {
    return xr(), i;
  }, useTransition: function() {
    return xr(), [!1, Pa];
  }, useId: function() {
    var i = Yn.treeContext, l = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - Mr(i) - 1)).toString(32) + l;
    var d = on;
    if (d === null) throw Error(v(404));
    return l = Or++, i = ":" + d.idPrefix + "R" + i, 0 < l && (i += "H" + l.toString(32)), i + ":";
  }, useMutableSource: function(i, l) {
    return xr(), l(i._source);
  }, useSyncExternalStore: function(i, l, d) {
    if (d === void 0) throw Error(v(407));
    return d();
  } }, on = null, Xn = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Da(i) {
    return console.error(i), null;
  }
  function Gr() {
  }
  function Zn(i, l, d, m, I, T, A, z, le) {
    var Se = [], ge = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: m === void 0 ? 12800 : m, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ge, pingedTasks: Se, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: I === void 0 ? Da : I, onAllReady: T === void 0 ? Gr : T, onShellReady: A === void 0 ? Gr : A, onShellError: z === void 0 ? Gr : z, onFatalError: le === void 0 ? Gr : le }, d = Xr(l, 0, null, d, !1, !1), d.parentFlushed = !0, i = Jn(l, i, null, d, ge, re, null, Fr), Se.push(i), l;
  }
  function Jn(i, l, d, m, I, T, A, z) {
    i.allPendingTasks++, d === null ? i.pendingRootTasks++ : d.pendingTasks++;
    var le = { node: l, ping: function() {
      var Se = i.pingedTasks;
      Se.push(le), Se.length === 1 && jo(i);
    }, blockedBoundary: d, blockedSegment: m, abortSet: I, legacyContext: T, context: A, treeContext: z };
    return I.add(le), le;
  }
  function Xr(i, l, d, m, I, T) {
    return { status: 0, id: -1, index: l, parentFlushed: !1, chunks: [], children: [], formatContext: m, boundary: d, lastPushedText: I, textEmbedded: T };
  }
  function an(i, l) {
    if (i = i.onError(l), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function En(i, l) {
    var d = i.onShellError;
    d(l), d = i.onFatalError, d(l), i.destination !== null ? (i.status = 2, Z(i.destination, l)) : (i.status = 1, i.fatalError = l);
  }
  function Po(i, l, d, m, I) {
    for (lr = {}, Yn = l, Or = 0, i = d(m, I); xn; ) xn = !1, Or = 0, wn += 1, He = null, i = d(m, I);
    return nn(), i;
  }
  function Do(i, l, d, m) {
    var I = d.render(), T = m.childContextTypes;
    if (T != null) {
      var A = l.legacyContext;
      if (typeof d.getChildContext != "function") m = A;
      else {
        d = d.getChildContext();
        for (var z in d) if (!(z in T)) throw Error(v(108, N(m) || "Unknown", z));
        m = qt({}, A, d);
      }
      l.legacyContext = m, xt(i, l, I), l.legacyContext = A;
    } else xt(i, l, I);
  }
  function Fo(i, l) {
    if (i && i.defaultProps) {
      l = qt({}, l), i = i.defaultProps;
      for (var d in i) l[d] === void 0 && (l[d] = i[d]);
      return l;
    }
    return l;
  }
  function Tn(i, l, d, m, I) {
    if (typeof d == "function") if (d.prototype && d.prototype.isReactComponent) {
      I = se(d, l.legacyContext);
      var T = d.contextType;
      T = new d(m, typeof T == "object" && T !== null ? T._currentValue : I), Sr(T, d, m, I), Do(i, l, T, d);
    } else {
      T = se(d, l.legacyContext), I = Po(i, l, d, m, T);
      var A = Or !== 0;
      if (typeof I == "object" && I !== null && typeof I.render == "function" && I.$$typeof === void 0) Sr(I, d, m, T), Do(i, l, I, d);
      else if (A) {
        m = l.treeContext, l.treeContext = sr(m, 1, 0);
        try {
          xt(i, l, I);
        } finally {
          l.treeContext = m;
        }
      } else xt(i, l, I);
    }
    else if (typeof d == "string") {
      switch (I = l.blockedSegment, T = Lt(I.chunks, d, m, i.responseState, I.formatContext), I.lastPushedText = !1, A = I.formatContext, I.formatContext = xe(A, d, m), Rn(i, l, T), I.formatContext = A, d) {
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
          I.chunks.push(Bt, b(d), Jt);
      }
      I.lastPushedText = !1;
    } else {
      switch (d) {
        case _:
        case g:
        case $r:
        case Mt:
        case Dr:
          xt(i, l, m.children);
          return;
        case bt:
          xt(i, l, m.children);
          return;
        case h:
          throw Error(v(343));
        case ft:
          e: {
            d = l.blockedBoundary, I = l.blockedSegment, T = m.fallback, m = m.children, A = /* @__PURE__ */ new Set();
            var z = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: A, errorDigest: null }, le = Xr(i, I.chunks.length, z, I.formatContext, !1, !1);
            I.children.push(le), I.lastPushedText = !1;
            var Se = Xr(i, 0, null, I.formatContext, !1, !1);
            Se.parentFlushed = !0, l.blockedBoundary = z, l.blockedSegment = Se;
            try {
              if (Rn(
                i,
                l,
                m
              ), Se.lastPushedText && Se.textEmbedded && Se.chunks.push(Ae), Se.status = 1, _n(z, Se), z.pendingTasks === 0) break e;
            } catch (ge) {
              Se.status = 4, z.forceClientRender = !0, z.errorDigest = an(i, ge);
            } finally {
              l.blockedBoundary = d, l.blockedSegment = I;
            }
            l = Jn(i, T, d, le, A, l.legacyContext, l.context, l.treeContext), i.pingedTasks.push(l);
          }
          return;
      }
      if (typeof d == "object" && d !== null) switch (d.$$typeof) {
        case Vr:
          if (m = Po(i, l, d.render, m, I), Or !== 0) {
            d = l.treeContext, l.treeContext = sr(d, 1, 0);
            try {
              xt(i, l, m);
            } finally {
              l.treeContext = d;
            }
          } else xt(i, l, m);
          return;
        case a:
          d = d.type, m = Fo(d, m), Tn(i, l, d, m, I);
          return;
        case er:
          if (I = m.children, d = d._context, m = m.value, T = d._currentValue, d._currentValue = m, A = oe, oe = m = { parent: A, depth: A === null ? 0 : A.depth + 1, context: d, parentValue: T, value: m }, l.context = m, xt(i, l, I), i = oe, i === null) throw Error(v(403));
          m = i.parentValue, i.context._currentValue = m === C ? i.context._defaultValue : m, i = oe = i.parent, l.context = i;
          return;
        case mt:
          m = m.children, m = m(d._currentValue), xt(i, l, m);
          return;
        case u:
          I = d._init, d = I(d._payload), m = Fo(d, m), Tn(i, l, d, m, void 0);
          return;
      }
      throw Error(v(
        130,
        d == null ? d : typeof d,
        ""
      ));
    }
  }
  function xt(i, l, d) {
    if (l.node = d, typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case vt:
          Tn(i, l, d.type, d.props, d.ref);
          return;
        case gr:
          throw Error(v(257));
        case u:
          var m = d._init;
          d = m(d._payload), xt(i, l, d);
          return;
      }
      if (Oe(d)) {
        Mo(i, l, d);
        return;
      }
      if (d === null || typeof d != "object" ? m = null : (m = M && d[M] || d["@@iterator"], m = typeof m == "function" ? m : null), m && (m = m.call(d))) {
        if (d = m.next(), !d.done) {
          var I = [];
          do
            I.push(d.value), d = m.next();
          while (!d.done);
          Mo(i, l, I);
        }
        return;
      }
      throw i = Object.prototype.toString.call(d), Error(v(31, i === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : i));
    }
    typeof d == "string" ? (m = l.blockedSegment, m.lastPushedText = jt(l.blockedSegment.chunks, d, i.responseState, m.lastPushedText)) : typeof d == "number" && (m = l.blockedSegment, m.lastPushedText = jt(l.blockedSegment.chunks, "" + d, i.responseState, m.lastPushedText));
  }
  function Mo(i, l, d) {
    for (var m = d.length, I = 0; I < m; I++) {
      var T = l.treeContext;
      l.treeContext = sr(T, m, I);
      try {
        Rn(i, l, d[I]);
      } finally {
        l.treeContext = T;
      }
    }
  }
  function Rn(i, l, d) {
    var m = l.blockedSegment.formatContext, I = l.legacyContext, T = l.context;
    try {
      return xt(i, l, d);
    } catch (le) {
      if (nn(), typeof le == "object" && le !== null && typeof le.then == "function") {
        d = le;
        var A = l.blockedSegment, z = Xr(i, A.chunks.length, null, A.formatContext, A.lastPushedText, !0);
        A.children.push(z), A.lastPushedText = !1, i = Jn(i, l.node, l.blockedBoundary, z, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, d.then(i, i), l.blockedSegment.formatContext = m, l.legacyContext = I, l.context = T, tr(T);
      } else throw l.blockedSegment.formatContext = m, l.legacyContext = I, l.context = T, tr(T), le;
    }
  }
  function Fa(i) {
    var l = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Oo(this, l, i);
  }
  function Ao(i, l, d) {
    var m = i.blockedBoundary;
    i.blockedSegment.status = 3, m === null ? (l.allPendingTasks--, l.status !== 2 && (l.status = 2, l.destination !== null && l.destination.close())) : (m.pendingTasks--, m.forceClientRender || (m.forceClientRender = !0, i = d === void 0 ? Error(v(432)) : d, m.errorDigest = l.onError(i), m.parentFlushed && l.clientRenderedBoundaries.push(m)), m.fallbackAbortableTasks.forEach(function(I) {
      return Ao(I, l, d);
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
    } else l.pendingTasks--, l.forceClientRender || (l.pendingTasks === 0 ? (d.parentFlushed && d.status === 1 && _n(l, d), l.parentFlushed && i.completedBoundaries.push(l), l.fallbackAbortableTasks.forEach(Fa, i), l.fallbackAbortableTasks.clear()) : d.parentFlushed && d.status === 1 && (_n(l, d), l.completedSegments.length === 1 && l.parentFlushed && i.partialBoundaries.push(l)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function jo(i) {
    if (i.status !== 2) {
      var l = oe, d = Xn.current;
      Xn.current = Io;
      var m = on;
      on = i.responseState;
      try {
        var I = i.pingedTasks, T;
        for (T = 0; T < I.length; T++) {
          var A = I[T], z = i, le = A.blockedSegment;
          if (le.status === 0) {
            tr(A.context);
            try {
              xt(z, A, A.node), le.lastPushedText && le.textEmbedded && le.chunks.push(Ae), A.abortSet.delete(A), le.status = 1, Oo(z, A.blockedBoundary, le);
            } catch ($t) {
              if (nn(), typeof $t == "object" && $t !== null && typeof $t.then == "function") {
                var Se = A.ping;
                $t.then(Se, Se);
              } else {
                A.abortSet.delete(A), le.status = 4;
                var ge = A.blockedBoundary, We = $t, wt = an(z, We);
                if (ge === null ? En(z, We) : (ge.pendingTasks--, ge.forceClientRender || (ge.forceClientRender = !0, ge.errorDigest = wt, ge.parentFlushed && z.clientRenderedBoundaries.push(ge))), z.allPendingTasks--, z.allPendingTasks === 0) {
                  var zt = z.onAllReady;
                  zt();
                }
              }
            } finally {
            }
          }
        }
        I.splice(0, T), i.destination !== null && Qn(i, i.destination);
      } catch ($t) {
        an(i, $t), En(i, $t);
      } finally {
        on = m, Xn.current = d, d === Io && tr(l);
      }
    }
  }
  function In(i, l, d) {
    switch (d.parentFlushed = !0, d.status) {
      case 0:
        var m = d.id = i.nextSegmentId++;
        return d.lastPushedText = !1, d.textEmbedded = !1, i = i.responseState, f(l, Be), f(l, i.placeholderPrefix), i = b(m.toString(16)), f(l, i), F(l, dt);
      case 1:
        d.status = 2;
        var I = !0;
        m = d.chunks;
        var T = 0;
        d = d.children;
        for (var A = 0; A < d.length; A++) {
          for (I = d[A]; T < I.index; T++) f(l, m[T]);
          I = Pn(i, l, I);
        }
        for (; T < m.length - 1; T++) f(l, m[T]);
        return T < m.length && (I = F(l, m[T])), I;
      default:
        throw Error(v(390));
    }
  }
  function Pn(i, l, d) {
    var m = d.boundary;
    if (m === null) return In(i, l, d);
    if (m.parentFlushed = !0, m.forceClientRender) m = m.errorDigest, F(l, dr), f(l, Tr), m && (f(l, Rr), f(l, b(ie(m))), f(l, Qt)), F(l, pr), In(i, l, d);
    else if (0 < m.pendingTasks) {
      m.rootSegmentID = i.nextSegmentId++, 0 < m.completedSegments.length && i.partialBoundaries.push(m);
      var I = i.responseState, T = I.nextSuspenseID++;
      I = x(I.boundaryPrefix + T.toString(16)), m = m.id = I, ut(l, i.responseState, m), In(i, l, d);
    } else if (m.byteSize > i.progressiveChunkSize) m.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(m), ut(l, i.responseState, m.id), In(i, l, d);
    else {
      if (F(l, Cr), d = m.completedSegments, d.length !== 1) throw Error(v(391));
      Pn(i, l, d[0]);
    }
    return F(l, en);
  }
  function Lo(i, l, d) {
    return he(l, i.responseState, d.formatContext, d.id), Pn(i, l, d), be(l, d.formatContext);
  }
  function Bo(i, l, d) {
    for (var m = d.completedSegments, I = 0; I < m.length; I++) Uo(i, l, d, m[I]);
    if (m.length = 0, i = i.responseState, m = d.id, d = d.rootSegmentID, f(l, i.startInlineScript), i.sentCompleteBoundaryFunction ? f(l, Ue) : (i.sentCompleteBoundaryFunction = !0, f(l, Me)), m === null) throw Error(v(395));
    return d = b(d.toString(16)), f(l, m), f(l, Ht), f(l, i.segmentPrefix), f(l, d), F(l, Pt);
  }
  function Uo(i, l, d, m) {
    if (m.status === 2) return !0;
    var I = m.id;
    if (I === -1) {
      if ((m.id = d.rootSegmentID) === -1) throw Error(v(392));
      return Lo(i, l, m);
    }
    return Lo(i, l, m), i = i.responseState, f(l, i.startInlineScript), i.sentCompleteSegmentFunction ? f(l, pe) : (i.sentCompleteSegmentFunction = !0, f(l, me)), f(l, i.segmentPrefix), I = b(I.toString(16)), f(l, I), f(l, Ge), f(l, i.placeholderPrefix), f(l, I), F(l, Te);
  }
  function Qn(i, l) {
    k = new Uint8Array(512), P = 0;
    try {
      var d = i.completedRootSegment;
      if (d !== null && i.pendingRootTasks === 0) {
        Pn(i, l, d), i.completedRootSegment = null;
        var m = i.responseState.bootstrapChunks;
        for (d = 0; d < m.length - 1; d++) f(l, m[d]);
        d < m.length && F(l, m[d]);
      }
      var I = i.clientRenderedBoundaries, T;
      for (T = 0; T < I.length; T++) {
        var A = I[T];
        m = l;
        var z = i.responseState, le = A.id, Se = A.errorDigest, ge = A.errorMessage, We = A.errorComponentStack;
        if (f(m, z.startInlineScript), z.sentClientRenderFunction ? f(m, Ze) : (z.sentClientRenderFunction = !0, f(
          m,
          Xe
        )), le === null) throw Error(v(395));
        f(m, le), f(m, Dt), (Se || ge || We) && (f(m, mr), f(m, b(Wt(Se || "")))), (ge || We) && (f(m, mr), f(m, b(Wt(ge || "")))), We && (f(m, mr), f(m, b(Wt(We)))), F(m, Ft);
      }
      I.splice(0, T);
      var wt = i.completedBoundaries;
      for (T = 0; T < wt.length; T++) Bo(i, l, wt[T]);
      wt.splice(0, T), B(l), k = new Uint8Array(512), P = 0;
      var zt = i.partialBoundaries;
      for (T = 0; T < zt.length; T++) {
        var $t = zt[T];
        e: {
          I = i, A = l;
          var Dn = $t.completedSegments;
          for (z = 0; z < Dn.length; z++) if (!Uo(
            I,
            A,
            $t,
            Dn[z]
          )) {
            z++, Dn.splice(0, z);
            var Wo = !1;
            break e;
          }
          Dn.splice(0, z), Wo = !0;
        }
        if (!Wo) {
          i.destination = null, T++, zt.splice(0, T);
          return;
        }
      }
      zt.splice(0, T);
      var sn = i.completedBoundaries;
      for (T = 0; T < sn.length; T++) Bo(i, l, sn[T]);
      sn.splice(0, T);
    } finally {
      B(l), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && l.close();
    }
  }
  function Ho(i, l) {
    try {
      var d = i.abortableTasks;
      d.forEach(function(m) {
        return Ao(m, i, l);
      }), d.clear(), i.destination !== null && Qn(i, i.destination);
    } catch (m) {
      an(i, m), En(i, m);
    }
  }
  return ss.renderToReadableStream = function(i, l) {
    return new Promise(function(d, m) {
      var I, T, A = new Promise(function(ge, We) {
        T = ge, I = We;
      }), z = Zn(i, ee(l ? l.identifierPrefix : void 0, l ? l.nonce : void 0, l ? l.bootstrapScriptContent : void 0, l ? l.bootstrapScripts : void 0, l ? l.bootstrapModules : void 0), Ct(l ? l.namespaceURI : void 0), l ? l.progressiveChunkSize : void 0, l ? l.onError : void 0, T, function() {
        var ge = new ReadableStream({ type: "bytes", pull: function(We) {
          if (z.status === 1) z.status = 2, Z(We, z.fatalError);
          else if (z.status !== 2 && z.destination === null) {
            z.destination = We;
            try {
              Qn(z, We);
            } catch (wt) {
              an(z, wt), En(z, wt);
            }
          }
        }, cancel: function() {
          Ho(z);
        } }, { highWaterMark: 0 });
        ge.allReady = A, d(ge);
      }, function(ge) {
        A.catch(function() {
        }), m(ge);
      }, I);
      if (l && l.signal) {
        var le = l.signal, Se = function() {
          Ho(z, le.reason), le.removeEventListener("abort", Se);
        };
        le.addEventListener("abort", Se);
      }
      jo(z);
    });
  }, ss.version = "18.3.1", ss;
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
var Sl;
function Ll() {
  return Sl || (Sl = 1, process.env.NODE_ENV !== "production" && function() {
    var D = nr, v = "18.3.1", k = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(e) {
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
    function B(e) {
      e();
    }
    function $(e) {
    }
    function b(e, t) {
      x(e, t);
    }
    function x(e, t) {
      return e.push(t);
    }
    function Z(e) {
    }
    function R(e) {
      e.push(null);
    }
    function L(e) {
      return e;
    }
    function K(e) {
      return e;
    }
    function J(e, t) {
      e.destroy(t);
    }
    function Re(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function W(e) {
      try {
        return O(e), !1;
      } catch {
        return !0;
      }
    }
    function O(e) {
      return "" + e;
    }
    function ue(e, t) {
      if (W(e))
        return f("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Re(e)), O(e);
    }
    function Ne(e, t) {
      if (W(e))
        return f("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Re(e)), O(e);
    }
    function ke(e) {
      if (W(e))
        return f("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Re(e)), O(e);
    }
    var Ce = Object.prototype.hasOwnProperty, Pe = 0, ie = 1, rt = 2, ve = 3, Oe = 4, Q = 5, X = 6, De = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ye = De + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Le = new RegExp("^[" + De + "][" + ye + "]*$"), ar = {}, Ot = {};
    function ee(e) {
      return Ce.call(Ot, e) ? !0 : Ce.call(ar, e) ? !1 : Le.test(e) ? (Ot[e] = !0, !0) : (ar[e] = !0, f("Invalid attribute name: `%s`", e), !1);
    }
    function Qe(e, t, r, o) {
      if (r !== null && r.type === Pe)
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
    function Ct(e) {
      return Ae.hasOwnProperty(e) ? Ae[e] : null;
    }
    function xe(e, t, r, o, s, c, p) {
      this.acceptsBooleans = t === rt || t === ve || t === Oe, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = p;
    }
    var Ae = {}, jt = [
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
    jt.forEach(function(e) {
      Ae[e] = new xe(
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
      var t = e[0], r = e[1];
      Ae[t] = new xe(
        t,
        ie,
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
      Ae[e] = new xe(
        e,
        rt,
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
      Ae[e] = new xe(
        e,
        rt,
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
      Ae[e] = new xe(
        e,
        ve,
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
      Ae[e] = new xe(
        e,
        ve,
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
      Ae[e] = new xe(
        e,
        Oe,
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
      Ae[e] = new xe(
        e,
        X,
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
      Ae[e] = new xe(
        e,
        Q,
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
    var Et = /[\-\:]([a-z])/g, ze = function(e) {
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
      var t = e.replace(Et, ze);
      Ae[t] = new xe(
        t,
        ie,
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
      var t = e.replace(Et, ze);
      Ae[t] = new xe(
        t,
        ie,
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
      var t = e.replace(Et, ze);
      Ae[t] = new xe(
        t,
        ie,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Ae[e] = new xe(
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
    });
    var je = "xlinkHref";
    Ae[je] = new xe(
      "xlinkHref",
      ie,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Ae[e] = new xe(
        e,
        ie,
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
    var $e = {
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
    function ht(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var at = ["Webkit", "ms", "Moz", "O"];
    Object.keys($e).forEach(function(e) {
      at.forEach(function(t) {
        $e[ht(t, e)] = $e[e];
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
    function nt(e, t) {
      lt[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || f("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || f("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Tt(e, t) {
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
    }, it = {}, G = new RegExp("^(aria)-[" + ye + "]*$"), q = new RegExp("^(aria)[A-Z][" + ye + "]*$");
    function ce(e, t) {
      {
        if (Ce.call(it, t) && it[t])
          return !0;
        if (q.test(t)) {
          var r = "aria-" + t.slice(4).toLowerCase(), o = Ke.hasOwnProperty(r) ? r : null;
          if (o == null)
            return f("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), it[t] = !0, !0;
          if (t !== o)
            return f("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), it[t] = !0, !0;
        }
        if (G.test(t)) {
          var s = t.toLowerCase(), c = Ke.hasOwnProperty(s) ? s : null;
          if (c == null)
            return it[t] = !0, !1;
          if (t !== c)
            return f("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), it[t] = !0, !0;
        }
      }
      return !0;
    }
    function ae(e, t) {
      {
        var r = [];
        for (var o in t) {
          var s = ce(e, o);
          s || r.push(o);
        }
        var c = r.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        r.length === 1 ? f("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e) : r.length > 1 && f("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e);
      }
    }
    function fe(e, t) {
      Tt(e, t) || ae(e, t);
    }
    var te = !1;
    function Ve(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !te && (te = !0, e === "select" && t.multiple ? f("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : f("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var we = {
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
    }, ot = function() {
    };
    {
      var Ye = {}, Lt = /^on./, Bt = /^on[^A-Z]/, Jt = new RegExp("^(aria)-[" + ye + "]*$"), Be = new RegExp("^(aria)[A-Z][" + ye + "]*$");
      ot = function(e, t, r, o) {
        if (Ce.call(Ye, t) && Ye[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return f("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ye[t] = !0, !0;
        if (o != null) {
          var c = o.registrationNameDependencies, p = o.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var y = p.hasOwnProperty(s) ? p[s] : null;
          if (y != null)
            return f("Invalid event handler property `%s`. Did you mean `%s`?", t, y), Ye[t] = !0, !0;
          if (Lt.test(t))
            return f("Unknown event handler property `%s`. It will be ignored.", t), Ye[t] = !0, !0;
        } else if (Lt.test(t))
          return Bt.test(t) && f("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Ye[t] = !0, !0;
        if (Jt.test(t) || Be.test(t))
          return !0;
        if (s === "innerhtml")
          return f("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ye[t] = !0, !0;
        if (s === "aria")
          return f("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ye[t] = !0, !0;
        if (s === "is" && r !== null && r !== void 0 && typeof r != "string")
          return f("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof r), Ye[t] = !0, !0;
        if (typeof r == "number" && isNaN(r))
          return f("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Ye[t] = !0, !0;
        var E = Ct(t), j = E !== null && E.type === Pe;
        if (we.hasOwnProperty(s)) {
          var H = we[s];
          if (H !== t)
            return f("Invalid DOM property `%s`. Did you mean `%s`?", t, H), Ye[t] = !0, !0;
        } else if (!j && t !== s)
          return f("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), Ye[t] = !0, !0;
        return typeof r == "boolean" && Qe(t, r, E) ? (r ? f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', r, t, t, r, t) : f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', r, t, t, r, t, t, t), Ye[t] = !0, !0) : j ? !0 : Qe(t, r, E) ? (Ye[t] = !0, !1) : ((r === "false" || r === "true") && E !== null && E.type === ve && (f("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", r, t, r === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, r), Ye[t] = !0), !0);
      };
    }
    var dt = function(e, t, r) {
      {
        var o = [];
        for (var s in t) {
          var c = ot(e, s, t[s], r);
          c || o.push(s);
        }
        var p = o.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        o.length === 1 ? f("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e) : o.length > 1 && f("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e);
      }
    };
    function Cr(e, t, r) {
      Tt(e, t) || dt(e, t, r);
    }
    var Nr = function() {
    };
    {
      var Er = /^(?:webkit|moz|o)[A-Z]/, dr = /^-ms-/, en = /-(.)/g, Tr = /;\s*$/, Qt = {}, Rr = {}, pr = !1, ut = !1, ct = function(e) {
        return e.replace(en, function(t, r) {
          return r.toUpperCase();
        });
      }, Rt = function(e) {
        Qt.hasOwnProperty(e) && Qt[e] || (Qt[e] = !0, f(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ct(e.replace(dr, "ms-"))
        ));
      }, Ee = function(e) {
        Qt.hasOwnProperty(e) && Qt[e] || (Qt[e] = !0, f("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Ut = function(e, t) {
        Rr.hasOwnProperty(t) && Rr[t] || (Rr[t] = !0, f(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Tr, "")));
      }, hr = function(e, t) {
        pr || (pr = !0, f("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Kt = function(e, t) {
        ut || (ut = !0, f("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Nr = function(e, t) {
        e.indexOf("-") > -1 ? Rt(e) : Er.test(e) ? Ee(e) : Tr.test(t) && Ut(e, t), typeof t == "number" && (isNaN(t) ? hr(e, t) : isFinite(t) || Kt(e, t));
      };
    }
    var _t = Nr, ir = /["'&<>]/;
    function It(e) {
      ke(e);
      var t = "" + e, r = ir.exec(t);
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
    function st(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : It(e);
    }
    var _r = /([A-Z])/g, vr = /^ms-/;
    function Ir(e) {
      return e.replace(_r, "-$1").toLowerCase().replace(vr, "-ms-");
    }
    var et = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Pr = !1;
    function tn(e) {
      !Pr && et.test(e) && (Pr = !0, f("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var rn = Array.isArray;
    function S(e) {
      return rn(e);
    }
    var U = "<script>";
    function V(e, t, r, o, s) {
      var c = e === void 0 ? "" : e, p = U, y = [];
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
    var ne = 0, he = 1, be = 2, me = 3, pe = 4, Ge = 5, Te = 6, Me = 7;
    function Ue(e, t) {
      return {
        insertionMode: e,
        selectedValue: t
      };
    }
    function Ht(e, t, r) {
      switch (t) {
        case "select":
          return Ue(he, r.value != null ? r.value : r.defaultValue);
        case "svg":
          return Ue(be, null);
        case "math":
          return Ue(me, null);
        case "foreignObject":
          return Ue(he, null);
        // Table parents are special in that their children can only be created at all if they're
        // wrapped in a table parent. So we need to encode that we're entering this mode.
        case "table":
          return Ue(pe, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Ue(Ge, null);
        case "colgroup":
          return Ue(Me, null);
        case "tr":
          return Ue(Te, null);
      }
      return e.insertionMode >= pe || e.insertionMode === ne ? Ue(he, null) : e;
    }
    var Pt = null;
    function Xe(e) {
      var t = e.nextSuspenseID++;
      return e.boundaryPrefix + t.toString(16);
    }
    function Ze(e, t, r) {
      var o = e.idPrefix, s = ":" + o + "R" + t;
      return r > 0 && (s += "H" + r.toString(32)), s + ":";
    }
    function Dt(e) {
      return st(e);
    }
    var Ft = "<!-- -->";
    function mr(e, t, r, o) {
      return t === "" ? o : (o && e.push(Ft), e.push(Dt(t)), !0);
    }
    function zr(e, t, r, o) {
      r && o && e.push(Ft);
    }
    var Wt = /* @__PURE__ */ new Map();
    function qt(e) {
      var t = Wt.get(e);
      if (t !== void 0)
        return t;
      var r = st(Ir(e));
      return Wt.set(e, r), r;
    }
    var vt = ' style="', gr = ":", Dr = ";";
    function $r(e, t, r) {
      if (typeof r != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var o = !0;
      for (var s in r)
        if (Ce.call(r, s)) {
          var c = r[s];
          if (!(c == null || typeof c == "boolean" || c === "")) {
            var p = void 0, y = void 0, E = s.indexOf("--") === 0;
            E ? (p = st(s), Ne(c, s), y = st(("" + c).trim())) : (_t(s, c), p = qt(s), typeof c == "number" ? c !== 0 && !Ce.call($e, s) ? y = c + "px" : y = "" + c : (Ne(c, s), y = st(("" + c).trim()))), o ? (o = !1, e.push(vt, p, gr, y)) : e.push(Dr, p, gr, y);
          }
        }
      o || e.push(mt);
    }
    var Mt = " ", er = '="', mt = '"', Vr = '=""';
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
        var s = Ct(r);
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
            case ve:
              o && e.push(Mt, p, Vr);
              return;
            case Oe:
              o === !0 ? e.push(Mt, p, Vr) : o === !1 || e.push(Mt, p, er, st(o), mt);
              return;
            case Q:
              isNaN(o) || e.push(Mt, p, er, st(o), mt);
              break;
            case X:
              !isNaN(o) && o >= 1 && e.push(Mt, p, er, st(o), mt);
              break;
            default:
              s.sanitizeURL && (ue(o, c), o = "" + o, tn(o)), e.push(Mt, p, er, st(o), mt);
          }
        } else if (ee(r)) {
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
          e.push(Mt, r, er, st(o), mt);
        }
      }
    }
    var bt = ">", a = "/>";
    function u(e, t, r) {
      if (t != null) {
        if (r != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t != "object" || !("__html" in t))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = t.__html;
        o != null && (ke(o), e.push("" + o));
      }
    }
    var h = !1, g = !1, _ = !1, C = !1, M = !1, N = !1, re = !1;
    function se(e, t) {
      {
        var r = e[t];
        if (r != null) {
          var o = S(r);
          e.multiple && !o ? f("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && o && f("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t);
        }
      }
    }
    function oe(e, t, r) {
      nt("select", t), se(t, "value"), se(t, "defaultValue"), t.value !== void 0 && t.defaultValue !== void 0 && !_ && (f("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), _ = !0), e.push(rr("select"));
      var o = null, s = null;
      for (var c in t)
        if (Ce.call(t, c)) {
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
      return e.push(bt), u(e, s, o), o;
    }
    function _e(e) {
      var t = "";
      return D.Children.forEach(e, function(r) {
        r != null && (t += r, !M && typeof r != "string" && typeof r != "number" && (M = !0, f("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), t;
    }
    var gt = ' selected=""';
    function yt(e, t, r, o) {
      var s = o.selectedValue;
      e.push(rr("option"));
      var c = null, p = null, y = null, E = null;
      for (var j in t)
        if (Ce.call(t, j)) {
          var H = t[j];
          if (H == null)
            continue;
          switch (j) {
            case "children":
              c = H;
              break;
            case "selected":
              y = H, re || (f("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), re = !0);
              break;
            case "dangerouslySetInnerHTML":
              E = H;
              break;
            // eslint-disable-next-line-no-fallthrough
            case "value":
              p = H;
            // We intentionally fallthrough to also set the attribute on the node.
            // eslint-disable-next-line-no-fallthrough
            default:
              ft(e, r, j, H);
              break;
          }
        }
      if (s != null) {
        var Y;
        if (p !== null ? (ue(p, "value"), Y = "" + p) : (E !== null && (N || (N = !0, f("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), Y = _e(c)), S(s))
          for (var de = 0; de < s.length; de++) {
            ue(s[de], "value");
            var Fe = "" + s[de];
            if (Fe === Y) {
              e.push(gt);
              break;
            }
          }
        else
          ue(s, "select.value"), "" + s === Y && e.push(gt);
      } else y && e.push(gt);
      return e.push(bt), u(e, E, c), c;
    }
    function St(e, t, r) {
      nt("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !g && (f("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), g = !0), t.value !== void 0 && t.defaultValue !== void 0 && !h && (f("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), h = !0), e.push(rr("input"));
      var o = null, s = null, c = null, p = null;
      for (var y in t)
        if (Ce.call(t, y)) {
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
    function yr(e, t, r) {
      nt("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !C && (f("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), C = !0), e.push(rr("textarea"));
      var o = null, s = null, c = null;
      for (var p in t)
        if (Ce.call(t, p)) {
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
      if (o === null && s !== null && (o = s), e.push(bt), c != null) {
        if (f("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), o != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (S(c)) {
          if (c.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          ke(c[0]), o = "" + c[0];
        }
        ke(c), o = "" + c;
      }
      return typeof o == "string" && o[0] === `
` && e.push(Mr), o !== null && (ue(o, "value"), e.push(Dt("" + o))), null;
    }
    function tr(e, t, r, o) {
      e.push(rr(r));
      for (var s in t)
        if (Ce.call(t, s)) {
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
      e.push(rr("menuitem"));
      for (var o in t)
        if (Ce.call(t, o)) {
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
      return e.push(bt), null;
    }
    function Sr(e, t, r) {
      e.push(rr("title"));
      var o = null;
      for (var s in t)
        if (Ce.call(t, s)) {
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
      e.push(bt);
      {
        var p = Array.isArray(o) && o.length < 2 ? o[0] || null : o;
        Array.isArray(o) && o.length > 1 ? f("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : p != null && p.$$typeof != null ? f("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : p != null && typeof p != "string" && typeof p != "number" && f("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return o;
    }
    function Fr(e, t, r, o) {
      e.push(rr(r));
      var s = null, c = null;
      for (var p in t)
        if (Ce.call(t, p)) {
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
      return e.push(bt), u(e, c, s), typeof s == "string" ? (e.push(Dt(s)), null) : s;
    }
    function sr(e, t, r, o) {
      e.push(rr(r));
      var s = null, c = null;
      for (var p in t)
        if (Ce.call(t, p)) {
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
              ee(p) && typeof y != "function" && typeof y != "symbol" && e.push(Mt, p, er, st(y), mt);
              break;
          }
        }
      return e.push(bt), u(e, c, s), s;
    }
    var Mr = `
`;
    function Ta(e, t, r, o) {
      e.push(rr(r));
      var s = null, c = null;
      for (var p in t)
        if (Ce.call(t, p)) {
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
      if (e.push(bt), c != null) {
        if (s != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof c != "object" || !("__html" in c))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var E = c.__html;
        E != null && (typeof E == "string" && E.length > 0 && E[0] === `
` ? e.push(Mr, E) : (ke(E), e.push("" + E)));
      }
      return typeof s == "string" && s[0] === `
` && e.push(Mr), s;
    }
    var Ra = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Sn = /* @__PURE__ */ new Map();
    function rr(e) {
      var t = Sn.get(e);
      if (t === void 0) {
        if (!Ra.test(e))
          throw new Error("Invalid tag: " + e);
        t = "<" + e, Sn.set(e, t);
      }
      return t;
    }
    var _a = "<!DOCTYPE html>";
    function lr(e, t, r, o, s) {
      switch (fe(t, r), Ve(t, r), Cr(t, r, null), !r.suppressContentEditableWarning && r.contentEditable && r.children != null && f("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), s.insertionMode !== be && s.insertionMode !== me && t.indexOf("-") === -1 && typeof r.is != "string" && t.toLowerCase() !== t && f("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
        // Special tags
        case "select":
          return oe(e, r, o);
        case "option":
          return yt(e, r, o, s);
        case "textarea":
          return yr(e, r, o);
        case "input":
          return St(e, r, o);
        case "menuitem":
          return Yr(e, r, o);
        case "title":
          return Sr(e, r, o);
        // Newline eating tags
        case "listing":
        case "pre":
          return Ta(e, r, t, o);
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
          return tr(e, r, t, o);
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
          return Fr(e, r, t, o);
        case "html":
          return s.insertionMode === ne && e.push(_a), Fr(e, r, t, o);
        default:
          return t.indexOf("-") === -1 && typeof r.is != "string" ? Fr(e, r, t, o) : sr(e, r, t, o);
      }
    }
    var Yn = "</", bn = ">";
    function He(e, t, r) {
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
          e.push(Yn, t, bn);
      }
    }
    function Ar(e, t) {
      for (var r = t.bootstrapChunks, o = 0; o < r.length - 1; o++)
        b(e, r[o]);
      return o < r.length ? x(e, r[o]) : !0;
    }
    var xn = '<template id="', Or = '"></template>';
    function br(e, t, r) {
      b(e, xn), b(e, t.placeholderPrefix);
      var o = r.toString(16);
      return b(e, o), x(e, Or);
    }
    var wn = "<!--$-->", xr = '<!--$?--><template id="', Nt = '"></template>', Gn = "<!--$!-->", nn = "<!--/$-->", Ro = "<template", kn = '"', _o = ' data-dgst="', Ia = ' data-msg="', Pa = ' data-stck="', Cn = "></template>";
    function Io(e, t) {
      return x(e, wn);
    }
    function on(e, t, r) {
      if (b(e, xr), r === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return b(e, r), x(e, Nt);
    }
    function Xn(e, t, r, o, s) {
      var c;
      return c = x(e, Gn), b(e, Ro), r && (b(e, _o), b(e, st(r)), b(e, kn)), o && (b(e, Ia), b(e, st(o)), b(e, kn)), s && (b(e, Pa), b(e, st(s)), b(e, kn)), c = x(e, Cn), c;
    }
    function Da(e, t) {
      return x(e, nn);
    }
    function Gr(e, t) {
      return x(e, nn);
    }
    function Zn(e, t) {
      return x(e, nn);
    }
    var Jn = '<div hidden id="', Xr = '">', an = "</div>", En = '<svg aria-hidden="true" style="display:none" id="', Po = '">', Do = "</svg>", Fo = '<math aria-hidden="true" style="display:none" id="', Tn = '">', xt = "</math>", Mo = '<table hidden id="', Rn = '">', Fa = "</table>", Ao = '<table hidden><tbody id="', _n = '">', Oo = "</tbody></table>", jo = '<table hidden><tr id="', In = '">', Pn = "</tr></table>", Lo = '<table hidden><colgroup id="', Bo = '">', Uo = "</colgroup></table>";
    function Qn(e, t, r, o) {
      switch (r.insertionMode) {
        case ne:
        case he:
          return b(e, Jn), b(e, t.segmentPrefix), b(e, o.toString(16)), x(e, Xr);
        case be:
          return b(e, En), b(e, t.segmentPrefix), b(e, o.toString(16)), x(e, Po);
        case me:
          return b(e, Fo), b(e, t.segmentPrefix), b(e, o.toString(16)), x(e, Tn);
        case pe:
          return b(e, Mo), b(e, t.segmentPrefix), b(e, o.toString(16)), x(e, Rn);
        // TODO: For the rest of these, there will be extra wrapper nodes that never
        // get deleted from the document. We need to delete the table too as part
        // of the injected scripts. They are invisible though so it's not too terrible
        // and it's kind of an edge case to suspend in a table. Totally supported though.
        case Ge:
          return b(e, Ao), b(e, t.segmentPrefix), b(e, o.toString(16)), x(e, _n);
        case Te:
          return b(e, jo), b(e, t.segmentPrefix), b(e, o.toString(16)), x(e, In);
        case Me:
          return b(e, Lo), b(e, t.segmentPrefix), b(e, o.toString(16)), x(e, Bo);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ho(e, t) {
      switch (t.insertionMode) {
        case ne:
        case he:
          return x(e, an);
        case be:
          return x(e, Do);
        case me:
          return x(e, xt);
        case pe:
          return x(e, Fa);
        case Ge:
          return x(e, Oo);
        case Te:
          return x(e, Pn);
        case Me:
          return x(e, Uo);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var i = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", l = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', d = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', m = i + ';$RS("', I = '$RS("', T = '","', A = '")<\/script>';
    function z(e, t, r) {
      b(e, t.startInlineScript), t.sentCompleteSegmentFunction ? b(e, I) : (t.sentCompleteSegmentFunction = !0, b(e, m)), b(e, t.segmentPrefix);
      var o = r.toString(16);
      return b(e, o), b(e, T), b(e, t.placeholderPrefix), b(e, o), x(e, A);
    }
    var le = l + ';$RC("', Se = '$RC("', ge = '","', We = '")<\/script>';
    function wt(e, t, r, o) {
      if (b(e, t.startInlineScript), t.sentCompleteBoundaryFunction ? b(e, Se) : (t.sentCompleteBoundaryFunction = !0, b(e, le)), r === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var s = o.toString(16);
      return b(e, r), b(e, ge), b(e, t.segmentPrefix), b(e, s), x(e, We);
    }
    var zt = d + ';$RX("', $t = '$RX("', Dn = '"', Wo = ")<\/script>", sn = ",";
    function cs(e, t, r, o, s, c) {
      if (b(e, t.startInlineScript), t.sentClientRenderFunction ? b(e, $t) : (t.sentClientRenderFunction = !0, b(e, zt)), r === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return b(e, r), b(e, Dn), (o || s || c) && (b(e, sn), b(e, Ma(o || ""))), (s || c) && (b(e, sn), b(e, Ma(s || ""))), c && (b(e, sn), b(e, Ma(c))), x(e, Wo);
    }
    var fs = /[<\u2028\u2029]/g;
    function Ma(e) {
      var t = JSON.stringify(e);
      return t.replace(fs, function(r) {
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
    function ds(e, t) {
      var r = V(t);
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
    function ps() {
      return {
        insertionMode: he,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function bi(e, t, r, o) {
      return r.generateStaticMarkup ? (e.push(st(t)), !1) : mr(e, t, r, o);
    }
    function xi(e, t, r, o) {
      if (!t.generateStaticMarkup)
        return zr(e, t, r, o);
    }
    function hs(e, t) {
      return t.generateStaticMarkup ? !0 : Io(e);
    }
    function vs(e, t, r, o, s) {
      return t.generateStaticMarkup ? !0 : Xn(e, t, r, o, s);
    }
    function ms(e, t) {
      return t.generateStaticMarkup ? !0 : Da(e);
    }
    function gs(e, t) {
      return t.generateStaticMarkup ? !0 : Zn(e);
    }
    var At = Object.assign, ys = Symbol.for("react.element"), wi = Symbol.for("react.portal"), No = Symbol.for("react.fragment"), Vt = Symbol.for("react.strict_mode"), ki = Symbol.for("react.profiler"), zo = Symbol.for("react.provider"), $o = Symbol.for("react.context"), Vo = Symbol.for("react.forward_ref"), Yo = Symbol.for("react.suspense"), Kn = Symbol.for("react.suspense_list"), qn = Symbol.for("react.memo"), Fn = Symbol.for("react.lazy"), Aa = Symbol.for("react.scope"), Oa = Symbol.for("react.debug_trace_mode"), ja = Symbol.for("react.legacy_hidden"), Go = Symbol.for("react.default_value"), Ci = Symbol.iterator, Ss = "@@iterator";
    function bs(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ci && e[Ci] || e[Ss];
      return typeof t == "function" ? t : null;
    }
    function xs(e, t, r) {
      var o = e.displayName;
      if (o)
        return o;
      var s = t.displayName || t.name || "";
      return s !== "" ? r + "(" + s + ")" : r;
    }
    function La(e) {
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
        case wi:
          return "Portal";
        case ki:
          return "Profiler";
        case Vt:
          return "StrictMode";
        case Yo:
          return "Suspense";
        case Kn:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $o:
            var t = e;
            return La(t) + ".Consumer";
          case zo:
            var r = e;
            return La(r._context) + ".Provider";
          case Vo:
            return xs(e, e.render, "ForwardRef");
          case qn:
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
    var eo = 0, Ei, Ba, qe, Mn, Ua, Ha, Wa;
    function Na() {
    }
    Na.__reactDisabledLog = !0;
    function Ti() {
      {
        if (eo === 0) {
          Ei = console.log, Ba = console.info, qe = console.warn, Mn = console.error, Ua = console.group, Ha = console.groupCollapsed, Wa = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Na,
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
    function Ri() {
      {
        if (eo--, eo === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: At({}, e, {
              value: Ei
            }),
            info: At({}, e, {
              value: Ba
            }),
            warn: At({}, e, {
              value: qe
            }),
            error: At({}, e, {
              value: Mn
            }),
            group: At({}, e, {
              value: Ua
            }),
            groupCollapsed: At({}, e, {
              value: Ha
            }),
            groupEnd: At({}, e, {
              value: Wa
            })
          });
        }
        eo < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xo = k.ReactCurrentDispatcher, Zo;
    function to(e, t, r) {
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
    var za = !1, An;
    {
      var $a = typeof WeakMap == "function" ? WeakMap : Map;
      An = new $a();
    }
    function ln(e, t) {
      if (!e || za)
        return "";
      {
        var r = An.get(e);
        if (r !== void 0)
          return r;
      }
      var o;
      za = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = Xo.current, Xo.current = null, Ti();
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
`), j = y.length - 1, H = E.length - 1; j >= 1 && H >= 0 && y[j] !== E[H]; )
            H--;
          for (; j >= 1 && H >= 0; j--, H--)
            if (y[j] !== E[H]) {
              if (j !== 1 || H !== 1)
                do
                  if (j--, H--, H < 0 || y[j] !== E[H]) {
                    var Y = `
` + y[j].replace(" at new ", " at ");
                    return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), typeof e == "function" && An.set(e, Y), Y;
                  }
                while (j >= 1 && H >= 0);
              break;
            }
        }
      } finally {
        za = !1, Xo.current = c, Ri(), Error.prepareStackTrace = s;
      }
      var de = e ? e.displayName || e.name : "", Fe = de ? to(de) : "";
      return typeof e == "function" && An.set(e, Fe), Fe;
    }
    function Va(e, t, r) {
      return ln(e, !0);
    }
    function ro(e, t, r) {
      return ln(e, !1);
    }
    function ws(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function no(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ln(e, ws(e));
      if (typeof e == "string")
        return to(e);
      switch (e) {
        case Yo:
          return to("Suspense");
        case Kn:
          return to("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Vo:
            return ro(e.render);
          case qn:
            return no(e.type, t, r);
          case Fn: {
            var o = e, s = o._payload, c = o._init;
            try {
              return no(c(s), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    var _i = {}, Ya = k.ReactDebugCurrentFrame;
    function Jo(e) {
      if (e) {
        var t = e._owner, r = no(e.type, e._source, t ? t.type : null);
        Ya.setExtraStackFrame(r);
      } else
        Ya.setExtraStackFrame(null);
    }
    function Qo(e, t, r, o, s) {
      {
        var c = Function.call.bind(Ce);
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
            y && !(y instanceof Error) && (Jo(s), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", r, p, typeof y), Jo(null)), y instanceof Error && !(y.message in _i) && (_i[y.message] = !0, Jo(s), f("Failed %s type: %s", r, y.message), Jo(null));
          }
      }
    }
    var Ko;
    Ko = {};
    var oo = {};
    Object.freeze(oo);
    function ao(e, t) {
      {
        var r = e.contextTypes;
        if (!r)
          return oo;
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
    function Ii(e, t, r, o) {
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
        return At({}, r, c);
      }
    }
    var un;
    un = {};
    var qo = null, Zr = null;
    function Ga(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function cn(e) {
      e.context._currentValue2 = e.value;
    }
    function ea(e, t) {
      if (e !== t) {
        Ga(e);
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
      Ga(e);
      var t = e.parent;
      t !== null && Jr(t);
    }
    function ta(e) {
      var t = e.parent;
      t !== null && ta(t), cn(e);
    }
    function ra(e, t) {
      Ga(e);
      var r = e.parent;
      if (r === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      r.depth === t.depth ? ea(r, t) : ra(r, t);
    }
    function io(e, t) {
      var r = t.parent;
      if (r === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === r.depth ? ea(e, r) : io(e, r), cn(t);
    }
    function so(e) {
      var t = Zr, r = e;
      t !== r && (t === null ? ta(r) : r === null ? Jr(t) : t.depth === r.depth ? ea(t, r) : t.depth > r.depth ? ra(t, r) : io(t, r), Zr = r);
    }
    function Pi(e, t) {
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
    function Di(e) {
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
    function Fi() {
      return Zr;
    }
    function Qr(e) {
      var t = e._currentValue2;
      return t;
    }
    function Xa(e) {
      return e._reactInternals;
    }
    function ks(e, t) {
      e._reactInternals = t;
    }
    var Mi = {}, On = {}, lo, Za, na, oa, aa, jn, uo, co, ia;
    {
      lo = /* @__PURE__ */ new Set(), Za = /* @__PURE__ */ new Set(), na = /* @__PURE__ */ new Set(), uo = /* @__PURE__ */ new Set(), oa = /* @__PURE__ */ new Set(), co = /* @__PURE__ */ new Set(), ia = /* @__PURE__ */ new Set();
      var fo = /* @__PURE__ */ new Set();
      jn = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var r = t + "_" + e;
          fo.has(r) || (fo.add(r), f("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
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
        if (Mi[s])
          return;
        f(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), Mi[s] = !0;
      }
    }
    var la = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, t, r) {
        var o = Xa(e);
        o.queue === null ? sa(e, "setState") : (o.queue.push(t), r != null && jn(r, "setState"));
      },
      enqueueReplaceState: function(e, t, r) {
        var o = Xa(e);
        o.replace = !0, o.queue = [t], r != null && jn(r, "setState");
      },
      enqueueForceUpdate: function(e, t) {
        var r = Xa(e);
        r.queue === null ? sa(e, "forceUpdate") : t != null && jn(t, "setState");
      }
    };
    function Ja(e, t, r, o, s) {
      var c = r(s, o);
      aa(t, c);
      var p = c == null ? o : At({}, o, c);
      return p;
    }
    function Ai(e, t, r) {
      var o = oo, s = e.contextType;
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
          lo.has(E) || (lo.add(E), f("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", E, y.state === null ? "null" : "undefined", E));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var j = null, H = null, Y = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? j = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (j = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? H = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (H = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Y = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (Y = "UNSAFE_componentWillUpdate"), j !== null || H !== null || Y !== null) {
            var de = tt(e) || "Component", Fe = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            na.has(de) || (na.add(de), f(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, de, Fe, j !== null ? `
  ` + j : "", H !== null ? `
  ` + H : "", Y !== null ? `
  ` + Y : ""));
          }
        }
      }
      return y;
    }
    function Oi(e, t, r) {
      {
        var o = tt(t) || "Component", s = e.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? f("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : f("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && f("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && f("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), e.propTypes && f("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), e.contextType && f("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), e.contextTypes && f("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !co.has(t) && (co.add(t), f("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof e.componentShouldUpdate == "function" && f("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && f("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", tt(t) || "A pure component"), typeof e.componentDidUnmount == "function" && f("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof e.componentDidReceiveProps == "function" && f("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof e.componentWillRecieveProps == "function" && f("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof e.UNSAFE_componentWillRecieveProps == "function" && f("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var c = e.props !== r;
        e.props !== void 0 && c && f("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), e.defaultProps && f("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !Za.has(t) && (Za.add(t), f("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", tt(t))), typeof e.getDerivedStateFromProps == "function" && f("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof e.getDerivedStateFromError == "function" && f("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && f("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var p = e.state;
        p && (typeof p != "object" || S(p)) && f("%s.state: must be set to an object or null", o), typeof e.getChildContext == "function" && typeof t.childContextTypes != "object" && f("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function ji(e, t) {
      var r = t.state;
      if (typeof t.componentWillMount == "function") {
        if (t.componentWillMount.__suppressDeprecationWarning !== !0) {
          var o = tt(e) || "Unknown";
          On[o] || (P(
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
    function Cs(e, t, r, o) {
      if (e.queue !== null && e.queue.length > 0) {
        var s = e.queue, c = e.replace;
        if (e.queue = null, e.replace = !1, c && s.length === 1)
          t.state = s[0];
        else {
          for (var p = c ? s[0] : t.state, y = !0, E = c ? 1 : 0; E < s.length; E++) {
            var j = s[E], H = typeof j == "function" ? j.call(t, p, r, o) : j;
            H != null && (y ? (y = !1, p = At({}, p, H)) : At(p, H));
          }
          t.state = p;
        }
      } else
        e.queue = null;
    }
    function Li(e, t, r, o) {
      Oi(e, t, r);
      var s = e.state !== void 0 ? e.state : null;
      e.updater = la, e.props = r, e.state = s;
      var c = {
        queue: [],
        replace: !1
      };
      ks(e, c);
      var p = t.contextType;
      if (typeof p == "object" && p !== null ? e.context = Qr(p) : e.context = o, e.state === r) {
        var y = tt(t) || "Component";
        uo.has(y) || (uo.add(y), f("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
      }
      var E = t.getDerivedStateFromProps;
      typeof E == "function" && (e.state = Ja(e, t, E, s, r)), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (ji(t, e), Cs(c, e, r, o));
    }
    var Es = {
      id: 1,
      overflow: ""
    };
    function Ts(e) {
      var t = e.overflow, r = e.id, o = r & ~Rs(r);
      return o.toString(32) + t;
    }
    function Qa(e, t, r) {
      var o = e.id, s = e.overflow, c = po(o) - 1, p = o & ~(1 << c), y = r + 1, E = po(t) + c;
      if (E > 30) {
        var j = c - c % 5, H = (1 << j) - 1, Y = (p & H).toString(32), de = p >> j, Fe = c - j, pt = po(t) + Fe, gn = y << Fe, yn = gn | de, Hr = Y + s;
        return {
          id: 1 << pt | yn,
          overflow: Hr
        };
      } else {
        var zn = y << c, al = zn | p, _l = s;
        return {
          id: 1 << E | al,
          overflow: _l
        };
      }
    }
    function po(e) {
      return 32 - _s(e);
    }
    function Rs(e) {
      return 1 << po(e) - 1;
    }
    var _s = Math.clz32 ? Math.clz32 : Is, Ka = Math.log, ua = Math.LN2;
    function Is(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Ka(t) / ua | 0) | 0;
    }
    function Ps(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ds = typeof Object.is == "function" ? Object.is : Ps, jr = null, qa = null, ca = null, Je = null, Yt = !1, Ln = !1, fn = 0, Ie = null, Kr = 0, fa = 25, Gt = !1, Xt;
    function wr() {
      if (jr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Gt && f("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), jr;
    }
    function Fs(e, t) {
      if (t === null)
        return f("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Xt), !1;
      e.length !== t.length && f(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Xt, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var r = 0; r < t.length && r < e.length; r++)
        if (!Ds(e[r], t[r]))
          return !1;
      return !0;
    }
    function ur() {
      if (Kr > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function qr() {
      return Je === null ? ca === null ? (Yt = !1, ca = Je = ur()) : (Yt = !0, Je = ca) : Je.next === null ? (Yt = !1, Je = Je.next = ur()) : (Yt = !0, Je = Je.next), Je;
    }
    function dn(e, t) {
      jr = t, qa = e, Gt = !1, fn = 0;
    }
    function Ms(e, t, r, o) {
      for (; Ln; )
        Ln = !1, fn = 0, Kr += 1, Je = null, r = e(t, o);
      return ho(), r;
    }
    function ei() {
      var e = fn !== 0;
      return e;
    }
    function ho() {
      Gt = !1, jr = null, qa = null, Ln = !1, ca = null, Kr = 0, Ie = null, Je = null;
    }
    function As(e) {
      return Gt && f("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Qr(e);
    }
    function Os(e) {
      return Xt = "useContext", wr(), Qr(e);
    }
    function da(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function ti(e) {
      return Xt = "useState", Bi(
        da,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function Bi(e, t, r) {
      if (e !== da && (Xt = "useReducer"), jr = wr(), Je = qr(), Yt) {
        var o = Je.queue, s = o.dispatch;
        if (Ie !== null) {
          var c = Ie.get(o);
          if (c !== void 0) {
            Ie.delete(o);
            var p = Je.memoizedState, y = c;
            do {
              var E = y.action;
              Gt = !0, p = e(p, E), Gt = !1, y = y.next;
            } while (y !== null);
            return Je.memoizedState = p, [p, s];
          }
        }
        return [Je.memoizedState, s];
      } else {
        Gt = !0;
        var j;
        e === da ? j = typeof t == "function" ? t() : t : j = r !== void 0 ? r(t) : t, Gt = !1, Je.memoizedState = j;
        var H = Je.queue = {
          last: null,
          dispatch: null
        }, Y = H.dispatch = Hi.bind(null, jr, H);
        return [Je.memoizedState, Y];
      }
    }
    function Ui(e, t) {
      jr = wr(), Je = qr();
      var r = t === void 0 ? null : t;
      if (Je !== null) {
        var o = Je.memoizedState;
        if (o !== null && r !== null) {
          var s = o[1];
          if (Fs(r, s))
            return o[0];
        }
      }
      Gt = !0;
      var c = e();
      return Gt = !1, Je.memoizedState = [c, r], c;
    }
    function ri(e) {
      jr = wr(), Je = qr();
      var t = Je.memoizedState;
      if (t === null) {
        var r = {
          current: e
        };
        return Object.seal(r), Je.memoizedState = r, r;
      } else
        return t;
    }
    function js(e, t) {
      Xt = "useLayoutEffect", f("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Hi(e, t, r) {
      if (Kr >= fa)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === jr) {
        Ln = !0;
        var o = {
          action: r,
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
    function Wi(e, t) {
      return Ui(function() {
        return e;
      }, t);
    }
    function Ls(e, t, r) {
      return wr(), t(e._source);
    }
    function Bs(e, t, r) {
      if (r === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return r();
    }
    function Us(e) {
      return wr(), e;
    }
    function Hs() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Ws() {
      return wr(), [!1, Hs];
    }
    function Ns() {
      var e = qa, t = Ts(e.treeContext), r = ni;
      if (r === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var o = fn++;
      return Ze(r, t, o);
    }
    function pa() {
    }
    var Ni = {
      readContext: As,
      useContext: Os,
      useMemo: Ui,
      useReducer: Bi,
      useRef: ri,
      useState: ti,
      useInsertionEffect: pa,
      useLayoutEffect: js,
      useCallback: Wi,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: pa,
      // Effects are not run in the server environment.
      useEffect: pa,
      // Debugging effect
      useDebugValue: pa,
      useDeferredValue: Us,
      useTransition: Ws,
      useId: Ns,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Ls,
      useSyncExternalStore: Bs
    }, ni = null;
    function zi(e) {
      ni = e;
    }
    function ha(e) {
      try {
        var t = "", r = e;
        do {
          switch (r.tag) {
            case 0:
              t += to(r.type, null, null);
              break;
            case 1:
              t += ro(r.type, null, null);
              break;
            case 2:
              t += Va(r.type, null, null);
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
    var va = k.ReactCurrentDispatcher, vo = k.ReactDebugCurrentFrame, ma = 0, Bn = 1, ga = 2, ya = 3, Sa = 4, Un = 0, oi = 1, pn = 2, $i = 12800;
    function zs(e) {
      return console.error(e), null;
    }
    function Hn() {
    }
    function Wn(e, t, r, o, s, c, p, y, E) {
      var j = [], H = /* @__PURE__ */ new Set(), Y = {
        destination: null,
        responseState: t,
        progressiveChunkSize: o === void 0 ? $i : o,
        status: Un,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: H,
        pingedTasks: j,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: s === void 0 ? zs : s,
        onAllReady: Hn,
        onShellReady: p === void 0 ? Hn : p,
        onShellError: Hn,
        onFatalError: Hn
      }, de = ba(
        Y,
        0,
        null,
        r,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      de.parentFlushed = !0;
      var Fe = hn(Y, e, null, de, H, oo, qo, Es);
      return j.push(Fe), Y;
    }
    function $s(e, t) {
      var r = e.pingedTasks;
      r.push(t), r.length === 1 && B(function() {
        return hi(e);
      });
    }
    function Vs(e, t) {
      return {
        id: Pt,
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
          return $s(e, E);
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
    var Lr = null;
    function ai() {
      return Lr === null || Lr.componentStack === null ? "" : ha(Lr.componentStack);
    }
    function vn(e, t) {
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
    function Br(e, t) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: t
      };
    }
    function kr(e) {
      e.componentStack === null ? f("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var Ur = null;
    function xa(e, t) {
      {
        var r;
        typeof t == "string" ? r = t : t && typeof t.message == "string" ? r = t.message : r = String(t);
        var o = Ur || ai();
        Ur = null, e.errorMessage = r, e.errorComponentStack = o;
      }
    }
    function go(e, t) {
      var r = e.onError(t);
      if (r != null && typeof r != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof r + '" instead');
      return r;
    }
    function cr(e, t) {
      var r = e.onShellError;
      r(t);
      var o = e.onFatalError;
      o(t), e.destination !== null ? (e.status = pn, J(e.destination, t)) : (e.status = oi, e.fatalError = t);
    }
    function yo(e, t, r) {
      vn(t, "Suspense");
      var o = t.blockedBoundary, s = t.blockedSegment, c = r.fallback, p = r.children, y = /* @__PURE__ */ new Set(), E = Vs(e, y), j = s.chunks.length, H = ba(
        e,
        j,
        E,
        s.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      s.children.push(H), s.lastPushedText = !1;
      var Y = ba(
        e,
        0,
        null,
        s.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      Y.parentFlushed = !0, t.blockedBoundary = E, t.blockedSegment = Y;
      try {
        if (kt(e, t, p), xi(Y.chunks, e.responseState, Y.lastPushedText, Y.textEmbedded), Y.status = Bn, Nn(E, Y), E.pendingTasks === 0) {
          kr(t);
          return;
        }
      } catch (Fe) {
        Y.status = Sa, E.forceClientRender = !0, E.errorDigest = go(e, Fe), xa(E, Fe);
      } finally {
        t.blockedBoundary = o, t.blockedSegment = s;
      }
      var de = hn(e, c, o, H, y, t.legacyContext, t.context, t.treeContext);
      de.componentStack = t.componentStack, e.pingedTasks.push(de), kr(t);
    }
    function ii(e, t, r, o) {
      vn(t, r);
      var s = t.blockedSegment, c = lr(s.chunks, r, o, e.responseState, s.formatContext);
      s.lastPushedText = !1;
      var p = s.formatContext;
      s.formatContext = Ht(p, r, o), kt(e, t, c), s.formatContext = p, He(s.chunks, r), s.lastPushedText = !1, kr(t);
    }
    function So(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function bo(e, t, r, o, s) {
      var c = {};
      dn(t, c);
      var p = r(o, s);
      return Ms(r, o, p, s);
    }
    function Vi(e, t, r, o, s) {
      var c = r.render();
      r.props !== s && (li || f("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", tt(o) || "a component"), li = !0);
      {
        var p = o.childContextTypes;
        if (p != null) {
          var y = t.legacyContext, E = Ii(r, o, y, p);
          t.legacyContext = E, Zt(e, t, c), t.legacyContext = y;
          return;
        }
      }
      Zt(e, t, c);
    }
    function Ys(e, t, r, o) {
      Br(t, r);
      var s = ao(r, t.legacyContext), c = Ai(r, o, s);
      Li(c, r, o, s), Vi(e, t, c, r, o), kr(t);
    }
    var Yi = {}, xo = {}, si = {}, Gi = {}, li = !1, wo = {}, ui = !1, ci = !1, fi = !1;
    function Xi(e, t, r, o) {
      var s;
      if (s = ao(r, t.legacyContext), mo(t, r), r.prototype && typeof r.prototype.render == "function") {
        var c = tt(r) || "Unknown";
        Yi[c] || (f("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", c, c), Yi[c] = !0);
      }
      var p = bo(e, t, r, o, s), y = ei();
      if (typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var E = tt(r) || "Unknown";
        xo[E] || (f("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", E, E, E), xo[E] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var j = tt(r) || "Unknown";
          xo[j] || (f("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", j, j, j), xo[j] = !0);
        }
        Li(p, r, o, s), Vi(e, t, p, r, o);
      } else if (Zi(r), y) {
        var H = t.treeContext, Y = 1, de = 0;
        t.treeContext = Qa(H, Y, de);
        try {
          Zt(e, t, p);
        } finally {
          t.treeContext = H;
        }
      } else
        Zt(e, t, p);
      kr(t);
    }
    function Zi(e) {
      {
        if (e && e.childContextTypes && f("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), e.defaultProps !== void 0) {
          var t = tt(e) || "Unknown";
          wo[t] || (f("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", t), wo[t] = !0);
        }
        if (typeof e.getDerivedStateFromProps == "function") {
          var r = tt(e) || "Unknown";
          Gi[r] || (f("%s: Function components do not support getDerivedStateFromProps.", r), Gi[r] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var o = tt(e) || "Unknown";
          si[o] || (f("%s: Function components do not support contextType.", o), si[o] = !0);
        }
      }
    }
    function di(e, t) {
      if (e && e.defaultProps) {
        var r = At({}, t), o = e.defaultProps;
        for (var s in o)
          r[s] === void 0 && (r[s] = o[s]);
        return r;
      }
      return t;
    }
    function Ji(e, t, r, o, s) {
      mo(t, r.render);
      var c = bo(e, t, r.render, o, s), p = ei();
      if (p) {
        var y = t.treeContext, E = 1, j = 0;
        t.treeContext = Qa(y, E, j);
        try {
          Zt(e, t, c);
        } finally {
          t.treeContext = y;
        }
      } else
        Zt(e, t, c);
      kr(t);
    }
    function Gs(e, t, r, o, s) {
      var c = r.type, p = di(c, o);
      pi(e, t, c, p, s);
    }
    function Xs(e, t, r, o) {
      r._context === void 0 ? r !== r.Consumer && (fi || (fi = !0, f("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : r = r._context;
      var s = o.children;
      typeof s != "function" && f("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var c = Qr(r), p = s(c);
      Zt(e, t, p);
    }
    function Qi(e, t, r, o) {
      var s = r._context, c = o.value, p = o.children, y;
      y = t.context, t.context = Pi(s, c), Zt(e, t, p), t.context = Di(s), y !== t.context && f("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Zs(e, t, r, o, s) {
      vn(t, "Lazy");
      var c = r._payload, p = r._init, y = p(c), E = di(y, o);
      pi(e, t, y, E, s), kr(t);
    }
    function pi(e, t, r, o, s) {
      if (typeof r == "function")
        if (So(r)) {
          Ys(e, t, r, o);
          return;
        } else {
          Xi(e, t, r, o);
          return;
        }
      if (typeof r == "string") {
        ii(e, t, r, o);
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
        case ja:
        case Oa:
        case Vt:
        case ki:
        case No: {
          Zt(e, t, o.children);
          return;
        }
        case Kn: {
          vn(t, "SuspenseList"), Zt(e, t, o.children), kr(t);
          return;
        }
        case Aa:
          throw new Error("ReactDOMServer does not yet support scope components.");
        // eslint-disable-next-line-no-fallthrough
        case Yo: {
          yo(e, t, o);
          return;
        }
      }
      if (typeof r == "object" && r !== null)
        switch (r.$$typeof) {
          case Vo: {
            Ji(e, t, r, o, s);
            return;
          }
          case qn: {
            Gs(e, t, r, o, s);
            return;
          }
          case zo: {
            Qi(e, t, r, o);
            return;
          }
          case $o: {
            Xs(e, t, r, o);
            return;
          }
          case Fn: {
            Zs(e, t, r, o);
            return;
          }
        }
      var c = "";
      throw (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (r == null ? r : typeof r) + "." + c));
    }
    function Js(e, t) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (ui || f("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ui = !0), e.entries === t && (ci || f("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ci = !0);
    }
    function Zt(e, t, r) {
      try {
        return Qs(e, t, r);
      } catch (o) {
        throw typeof o == "object" && o !== null && typeof o.then == "function" || (Ur = Ur !== null ? Ur : ai()), o;
      }
    }
    function Qs(e, t, r) {
      if (t.node = r, typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case ys: {
            var o = r, s = o.type, c = o.props, p = o.ref;
            pi(e, t, s, c, p);
            return;
          }
          case wi:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          // eslint-disable-next-line-no-fallthrough
          case Fn: {
            var y = r, E = y._payload, j = y._init, H;
            try {
              H = j(E);
            } catch (zn) {
              throw typeof zn == "object" && zn !== null && typeof zn.then == "function" && vn(t, "Lazy"), zn;
            }
            Zt(e, t, H);
            return;
          }
        }
        if (S(r)) {
          wa(e, t, r);
          return;
        }
        var Y = bs(r);
        if (Y) {
          Js(r, Y);
          var de = Y.call(r);
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
        yn.lastPushedText = bi(t.blockedSegment.chunks, r, e.responseState, yn.lastPushedText);
        return;
      }
      if (typeof r == "number") {
        var Hr = t.blockedSegment;
        Hr.lastPushedText = bi(t.blockedSegment.chunks, "" + r, e.responseState, Hr.lastPushedText);
        return;
      }
      typeof r == "function" && f("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function wa(e, t, r) {
      for (var o = r.length, s = 0; s < o; s++) {
        var c = t.treeContext;
        t.treeContext = Qa(c, o, s);
        try {
          kt(e, t, r[s]);
        } finally {
          t.treeContext = c;
        }
      }
    }
    function Ks(e, t, r) {
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
    function kt(e, t, r) {
      var o = t.blockedSegment.formatContext, s = t.legacyContext, c = t.context, p = null;
      p = t.componentStack;
      try {
        return Zt(e, t, r);
      } catch (y) {
        if (ho(), typeof y == "object" && y !== null && typeof y.then == "function") {
          Ks(e, t, y), t.blockedSegment.formatContext = o, t.legacyContext = s, t.context = c, so(c), t.componentStack = p;
          return;
        } else
          throw t.blockedSegment.formatContext = o, t.legacyContext = s, t.context = c, so(c), t.componentStack = p, y;
      }
    }
    function qs(e, t, r, o) {
      var s = go(e, o);
      if (t === null ? cr(e, o) : (t.pendingTasks--, t.forceClientRender || (t.forceClientRender = !0, t.errorDigest = s, xa(t, o), t.parentFlushed && e.clientRenderedBoundaries.push(t))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var c = e.onAllReady;
        c();
      }
    }
    function Ki(e) {
      var t = this, r = e.blockedBoundary, o = e.blockedSegment;
      o.status = ya, es(t, r, o);
    }
    function qi(e, t, r) {
      var o = e.blockedBoundary, s = e.blockedSegment;
      if (s.status = ya, o === null)
        t.allPendingTasks--, t.status !== pn && (t.status = pn, t.destination !== null && R(t.destination));
      else {
        if (o.pendingTasks--, !o.forceClientRender) {
          o.forceClientRender = !0;
          var c = r === void 0 ? new Error("The render was aborted by the server without a reason.") : r;
          o.errorDigest = t.onError(c);
          {
            var p = "The server did not finish this Suspense boundary: ";
            c && typeof c.message == "string" ? c = p + c.message : c = p + String(c);
            var y = Lr;
            Lr = e;
            try {
              xa(o, c);
            } finally {
              Lr = y;
            }
          }
          o.parentFlushed && t.clientRenderedBoundaries.push(o);
        }
        if (o.fallbackAbortableTasks.forEach(function(j) {
          return qi(j, t, r);
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
    function es(e, t, r) {
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
          r.parentFlushed && r.status === Bn && Nn(t, r), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(Ki, e), t.fallbackAbortableTasks.clear();
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
    function el(e, t) {
      var r = t.blockedSegment;
      if (r.status === ma) {
        so(t.context);
        var o = null;
        o = Lr, Lr = t;
        try {
          Zt(e, t, t.node), xi(r.chunks, e.responseState, r.lastPushedText, r.textEmbedded), t.abortSet.delete(t), r.status = Bn, es(e, t.blockedBoundary, r);
        } catch (c) {
          if (ho(), typeof c == "object" && c !== null && typeof c.then == "function") {
            var s = t.ping;
            c.then(s, s);
          } else
            t.abortSet.delete(t), r.status = Sa, qs(e, t.blockedBoundary, r, c);
        } finally {
          Lr = o;
        }
      }
    }
    function hi(e) {
      if (e.status !== pn) {
        var t = Fi(), r = va.current;
        va.current = Ni;
        var o;
        o = vo.getCurrentStack, vo.getCurrentStack = ai;
        var s = ni;
        zi(e.responseState);
        try {
          var c = e.pingedTasks, p;
          for (p = 0; p < c.length; p++) {
            var y = c[p];
            el(e, y);
          }
          c.splice(0, p), e.destination !== null && Ca(e, e.destination);
        } catch (E) {
          go(e, E), cr(e, E);
        } finally {
          zi(s), va.current = r, vo.getCurrentStack = o, r === Ni && so(t);
        }
      }
    }
    function mn(e, t, r) {
      switch (r.parentFlushed = !0, r.status) {
        case ma: {
          var o = r.id = e.nextSegmentId++;
          return r.lastPushedText = !1, r.textEmbedded = !1, br(t, e.responseState, o);
        }
        case Bn: {
          r.status = ga;
          for (var s = !0, c = r.chunks, p = 0, y = r.children, E = 0; E < y.length; E++) {
            for (var j = y[E]; p < j.index; p++)
              b(t, c[p]);
            s = ko(e, t, j);
          }
          for (; p < c.length - 1; p++)
            b(t, c[p]);
          return p < c.length && (s = x(t, c[p])), s;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function ko(e, t, r) {
      var o = r.boundary;
      if (o === null)
        return mn(e, t, r);
      if (o.parentFlushed = !0, o.forceClientRender)
        return vs(t, e.responseState, o.errorDigest, o.errorMessage, o.errorComponentStack), mn(e, t, r), gs(t, e.responseState);
      if (o.pendingTasks > 0) {
        o.rootSegmentID = e.nextSegmentId++, o.completedSegments.length > 0 && e.partialBoundaries.push(o);
        var s = o.id = Xe(e.responseState);
        return on(t, e.responseState, s), mn(e, t, r), Gr(t, e.responseState);
      } else {
        if (o.byteSize > e.progressiveChunkSize)
          return o.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(o), on(t, e.responseState, o.id), mn(e, t, r), Gr(t, e.responseState);
        hs(t, e.responseState);
        var c = o.completedSegments;
        if (c.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var p = c[0];
        return ko(e, t, p), ms(t, e.responseState);
      }
    }
    function tl(e, t, r) {
      return cs(t, e.responseState, r.id, r.errorDigest, r.errorMessage, r.errorComponentStack);
    }
    function vi(e, t, r) {
      return Qn(t, e.responseState, r.formatContext, r.id), ko(e, t, r), Ho(t, r.formatContext);
    }
    function Co(e, t, r) {
      for (var o = r.completedSegments, s = 0; s < o.length; s++) {
        var c = o[s];
        ts(e, t, r, c);
      }
      return o.length = 0, wt(t, e.responseState, r.id, r.rootSegmentID);
    }
    function ka(e, t, r) {
      for (var o = r.completedSegments, s = 0; s < o.length; s++) {
        var c = o[s];
        if (!ts(e, t, r, c))
          return s++, o.splice(0, s), !1;
      }
      return o.splice(0, s), !0;
    }
    function ts(e, t, r, o) {
      if (o.status === ga)
        return !0;
      var s = o.id;
      if (s === -1) {
        var c = o.id = r.rootSegmentID;
        if (c === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return vi(e, t, o);
      } else
        return vi(e, t, o), z(t, e.responseState, s);
    }
    function Ca(e, t) {
      try {
        var r = e.completedRootSegment;
        r !== null && e.pendingRootTasks === 0 && (ko(e, t, r), e.completedRootSegment = null, Ar(t, e.responseState));
        var o = e.clientRenderedBoundaries, s;
        for (s = 0; s < o.length; s++) {
          var c = o[s];
          if (!tl(e, t, c)) {
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
        var E = e.partialBoundaries;
        for (s = 0; s < E.length; s++) {
          var j = E[s];
          if (!ka(e, t, j)) {
            e.destination = null, s++, E.splice(0, s);
            return;
          }
        }
        E.splice(0, s);
        var H = e.completedBoundaries;
        for (s = 0; s < H.length; s++) {
          var Y = H[s];
          if (!Co(e, t, Y)) {
            e.destination = null, s++, H.splice(0, s);
            return;
          }
        }
        H.splice(0, s);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && f("There was still abortable task at the root when we closed. This is a bug in React."), R(t));
      }
    }
    function rs(e) {
      B(function() {
        return hi(e);
      });
    }
    function rl(e, t) {
      if (e.status === oi) {
        e.status = pn, J(t, e.fatalError);
        return;
      }
      if (e.status !== pn && e.destination === null) {
        e.destination = t;
        try {
          Ca(e, t);
        } catch (r) {
          go(e, r), cr(e, r);
        }
      }
    }
    function ns(e, t) {
      try {
        var r = e.abortableTasks;
        r.forEach(function(o) {
          return qi(o, e, t);
        }), r.clear(), e.destination !== null && Ca(e, e.destination);
      } catch (o) {
        go(e, o), cr(e, o);
      }
    }
    function mi() {
    }
    function os(e, t, r, o) {
      var s = !1, c = null, p = "", y = {
        push: function(Y) {
          return Y !== null && (p += Y), !0;
        },
        destroy: function(Y) {
          s = !0, c = Y;
        }
      }, E = !1;
      function j() {
        E = !0;
      }
      var H = Wn(e, ds(r, t ? t.identifierPrefix : void 0), ps(), 1 / 0, mi, void 0, j);
      if (rs(H), ns(H, o), rl(H, y), s)
        throw c;
      if (!E)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return p;
    }
    function nl(e, t) {
      return os(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function as(e, t) {
      return os(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function ol() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function n() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    To.renderToNodeStream = ol, To.renderToStaticMarkup = as, To.renderToStaticNodeStream = n, To.renderToString = nl, To.version = v;
  }()), To;
}
var ls = {};
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
function Bl() {
  return bl || (bl = 1, process.env.NODE_ENV !== "production" && function() {
    var D = nr, v = "18.3.1", k = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(n) {
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
    function B(n) {
      n();
    }
    var $ = 512, b = null, x = 0;
    function Z(n) {
      b = new Uint8Array($), x = 0;
    }
    function R(n, e) {
      if (e.length !== 0) {
        if (e.length > $) {
          x > 0 && (n.enqueue(new Uint8Array(b.buffer, 0, x)), b = new Uint8Array($), x = 0), n.enqueue(e);
          return;
        }
        var t = e, r = b.length - x;
        r < t.length && (r === 0 ? n.enqueue(b) : (b.set(t.subarray(0, r), x), n.enqueue(b), t = t.subarray(r)), b = new Uint8Array($), x = 0), b.set(t, x), x += t.length;
      }
    }
    function L(n, e) {
      return R(n, e), !0;
    }
    function K(n) {
      b && x > 0 && (n.enqueue(new Uint8Array(b.buffer, 0, x)), b = null, x = 0);
    }
    function J(n) {
      n.close();
    }
    var Re = new TextEncoder();
    function W(n) {
      return Re.encode(n);
    }
    function O(n) {
      return Re.encode(n);
    }
    function ue(n, e) {
      typeof n.error == "function" ? n.error(e) : n.close();
    }
    function Ne(n) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return t;
      }
    }
    function ke(n) {
      try {
        return Ce(n), !1;
      } catch {
        return !0;
      }
    }
    function Ce(n) {
      return "" + n;
    }
    function Pe(n, e) {
      if (ke(n))
        return f("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", e, Ne(n)), Ce(n);
    }
    function ie(n, e) {
      if (ke(n))
        return f("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", e, Ne(n)), Ce(n);
    }
    function rt(n) {
      if (ke(n))
        return f("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Ne(n)), Ce(n);
    }
    var ve = Object.prototype.hasOwnProperty, Oe = 0, Q = 1, X = 2, De = 3, ye = 4, Le = 5, ar = 6, Ot = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ee = Ot + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Qe = new RegExp("^[" + Ot + "][" + ee + "]*$"), Ct = {}, xe = {};
    function Ae(n) {
      return ve.call(xe, n) ? !0 : ve.call(Ct, n) ? !1 : Qe.test(n) ? (xe[n] = !0, !0) : (Ct[n] = !0, f("Invalid attribute name: `%s`", n), !1);
    }
    function jt(n, e, t, r) {
      if (t !== null && t.type === Oe)
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
    function Et(n) {
      return je.hasOwnProperty(n) ? je[n] : null;
    }
    function ze(n, e, t, r, o, s, c) {
      this.acceptsBooleans = e === X || e === De || e === ye, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = t, this.propertyName = n, this.type = e, this.sanitizeURL = s, this.removeEmptyString = c;
    }
    var je = {}, $e = [
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
    $e.forEach(function(n) {
      je[n] = new ze(
        n,
        Oe,
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
      je[e] = new ze(
        e,
        Q,
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
      je[n] = new ze(
        n,
        X,
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
      je[n] = new ze(
        n,
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
      je[n] = new ze(
        n,
        De,
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
      je[n] = new ze(
        n,
        De,
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
      je[n] = new ze(
        n,
        ye,
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
      je[n] = new ze(
        n,
        ar,
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
      je[n] = new ze(
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
    });
    var ht = /[\-\:]([a-z])/g, at = function(n) {
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
      var e = n.replace(ht, at);
      je[e] = new ze(
        e,
        Q,
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
      var e = n.replace(ht, at);
      je[e] = new ze(
        e,
        Q,
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
      var e = n.replace(ht, at);
      je[e] = new ze(
        e,
        Q,
        !1,
        // mustUseProperty
        n,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(n) {
      je[n] = new ze(
        n,
        Q,
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
    je[lt] = new ze(
      "xlinkHref",
      Q,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(n) {
      je[n] = new ze(
        n,
        Q,
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
    function Tt(n, e) {
      return n + e.charAt(0).toUpperCase() + e.substring(1);
    }
    var Ke = ["Webkit", "ms", "Moz", "O"];
    Object.keys(nt).forEach(function(n) {
      Ke.forEach(function(e) {
        nt[Tt(e, n)] = nt[n];
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
    function G(n, e) {
      it[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || f("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), e.onChange || e.readOnly || e.disabled || e.checked == null || f("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function q(n, e) {
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
    var ce = {
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
    }, ae = {}, fe = new RegExp("^(aria)-[" + ee + "]*$"), te = new RegExp("^(aria)[A-Z][" + ee + "]*$");
    function Ve(n, e) {
      {
        if (ve.call(ae, e) && ae[e])
          return !0;
        if (te.test(e)) {
          var t = "aria-" + e.slice(4).toLowerCase(), r = ce.hasOwnProperty(t) ? t : null;
          if (r == null)
            return f("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", e), ae[e] = !0, !0;
          if (e !== r)
            return f("Invalid ARIA attribute `%s`. Did you mean `%s`?", e, r), ae[e] = !0, !0;
        }
        if (fe.test(e)) {
          var o = e.toLowerCase(), s = ce.hasOwnProperty(o) ? o : null;
          if (s == null)
            return ae[e] = !0, !1;
          if (e !== s)
            return f("Unknown ARIA attribute `%s`. Did you mean `%s`?", e, s), ae[e] = !0, !0;
        }
      }
      return !0;
    }
    function we(n, e) {
      {
        var t = [];
        for (var r in e) {
          var o = Ve(n, r);
          o || t.push(r);
        }
        var s = t.map(function(c) {
          return "`" + c + "`";
        }).join(", ");
        t.length === 1 ? f("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, n) : t.length > 1 && f("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, n);
      }
    }
    function ot(n, e) {
      q(n, e) || we(n, e);
    }
    var Ye = !1;
    function Lt(n, e) {
      {
        if (n !== "input" && n !== "textarea" && n !== "select")
          return;
        e != null && e.value === null && !Ye && (Ye = !0, n === "select" && e.multiple ? f("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", n) : f("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", n));
      }
    }
    var Bt = {
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
    }, Jt = function() {
    };
    {
      var Be = {}, dt = /^on./, Cr = /^on[^A-Z]/, Nr = new RegExp("^(aria)-[" + ee + "]*$"), Er = new RegExp("^(aria)[A-Z][" + ee + "]*$");
      Jt = function(n, e, t, r) {
        if (ve.call(Be, e) && Be[e])
          return !0;
        var o = e.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return f("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Be[e] = !0, !0;
        if (r != null) {
          var s = r.registrationNameDependencies, c = r.possibleRegistrationNames;
          if (s.hasOwnProperty(e))
            return !0;
          var p = c.hasOwnProperty(o) ? c[o] : null;
          if (p != null)
            return f("Invalid event handler property `%s`. Did you mean `%s`?", e, p), Be[e] = !0, !0;
          if (dt.test(e))
            return f("Unknown event handler property `%s`. It will be ignored.", e), Be[e] = !0, !0;
        } else if (dt.test(e))
          return Cr.test(e) && f("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", e), Be[e] = !0, !0;
        if (Nr.test(e) || Er.test(e))
          return !0;
        if (o === "innerhtml")
          return f("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Be[e] = !0, !0;
        if (o === "aria")
          return f("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Be[e] = !0, !0;
        if (o === "is" && t !== null && t !== void 0 && typeof t != "string")
          return f("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof t), Be[e] = !0, !0;
        if (typeof t == "number" && isNaN(t))
          return f("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", e), Be[e] = !0, !0;
        var y = Et(e), E = y !== null && y.type === Oe;
        if (Bt.hasOwnProperty(o)) {
          var j = Bt[o];
          if (j !== e)
            return f("Invalid DOM property `%s`. Did you mean `%s`?", e, j), Be[e] = !0, !0;
        } else if (!E && e !== o)
          return f("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", e, o), Be[e] = !0, !0;
        return typeof t == "boolean" && jt(e, t, y) ? (t ? f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', t, e, e, t, e) : f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', t, e, e, t, e, e, e), Be[e] = !0, !0) : E ? !0 : jt(e, t, y) ? (Be[e] = !0, !1) : ((t === "false" || t === "true") && y !== null && y.type === De && (f("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", t, e, t === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', e, t), Be[e] = !0), !0);
      };
    }
    var dr = function(n, e, t) {
      {
        var r = [];
        for (var o in e) {
          var s = Jt(n, o, e[o], t);
          s || r.push(o);
        }
        var c = r.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        r.length === 1 ? f("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, n) : r.length > 1 && f("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, n);
      }
    };
    function en(n, e, t) {
      q(n, e) || dr(n, e, t);
    }
    var Tr = function() {
    };
    {
      var Qt = /^(?:webkit|moz|o)[A-Z]/, Rr = /^-ms-/, pr = /-(.)/g, ut = /;\s*$/, ct = {}, Rt = {}, Ee = !1, Ut = !1, hr = function(n) {
        return n.replace(pr, function(e, t) {
          return t.toUpperCase();
        });
      }, Kt = function(n) {
        ct.hasOwnProperty(n) && ct[n] || (ct[n] = !0, f(
          "Unsupported style property %s. Did you mean %s?",
          n,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          hr(n.replace(Rr, "ms-"))
        ));
      }, _t = function(n) {
        ct.hasOwnProperty(n) && ct[n] || (ct[n] = !0, f("Unsupported vendor-prefixed style property %s. Did you mean %s?", n, n.charAt(0).toUpperCase() + n.slice(1)));
      }, ir = function(n, e) {
        Rt.hasOwnProperty(e) && Rt[e] || (Rt[e] = !0, f(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, n, e.replace(ut, "")));
      }, It = function(n, e) {
        Ee || (Ee = !0, f("`NaN` is an invalid value for the `%s` css style property.", n));
      }, st = function(n, e) {
        Ut || (Ut = !0, f("`Infinity` is an invalid value for the `%s` css style property.", n));
      };
      Tr = function(n, e) {
        n.indexOf("-") > -1 ? Kt(n) : Qt.test(n) ? _t(n) : ut.test(e) && ir(n, e), typeof e == "number" && (isNaN(e) ? It(n, e) : isFinite(e) || st(n, e));
      };
    }
    var _r = Tr, vr = /["'&<>]/;
    function Ir(n) {
      rt(n);
      var e = "" + n, t = vr.exec(e);
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
      return typeof n == "boolean" || typeof n == "number" ? "" + n : Ir(n);
    }
    var Pr = /([A-Z])/g, tn = /^ms-/;
    function rn(n) {
      return n.replace(Pr, "-$1").toLowerCase().replace(tn, "-ms-");
    }
    var S = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, U = !1;
    function V(n) {
      !U && S.test(n) && (U = !0, f("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(n)));
    }
    var ne = Array.isArray;
    function he(n) {
      return ne(n);
    }
    var be = O("<script>"), me = O("<\/script>"), pe = O('<script src="'), Ge = O('<script type="module" src="'), Te = O('" async=""><\/script>');
    function Me(n) {
      return rt(n), ("" + n).replace(Ue, Ht);
    }
    var Ue = /(<\/|<)(s)(cript)/gi, Ht = function(n, e, t, r) {
      return "" + e + (t === "s" ? "\\u0073" : "\\u0053") + r;
    };
    function Pt(n, e, t, r, o) {
      var s = n === void 0 ? "" : n, c = e === void 0 ? be : O('<script nonce="' + et(e) + '">'), p = [];
      if (t !== void 0 && p.push(c, W(Me(t)), me), r !== void 0)
        for (var y = 0; y < r.length; y++)
          p.push(pe, W(et(r[y])), Te);
      if (o !== void 0)
        for (var E = 0; E < o.length; E++)
          p.push(Ge, W(et(o[E])), Te);
      return {
        bootstrapChunks: p,
        startInlineScript: c,
        placeholderPrefix: O(s + "P:"),
        segmentPrefix: O(s + "S:"),
        boundaryPrefix: s + "B:",
        idPrefix: s,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Xe = 0, Ze = 1, Dt = 2, Ft = 3, mr = 4, zr = 5, Wt = 6, qt = 7;
    function vt(n, e) {
      return {
        insertionMode: n,
        selectedValue: e
      };
    }
    function gr(n) {
      var e = n === "http://www.w3.org/2000/svg" ? Dt : n === "http://www.w3.org/1998/Math/MathML" ? Ft : Xe;
      return vt(e, null);
    }
    function Dr(n, e, t) {
      switch (e) {
        case "select":
          return vt(Ze, t.value != null ? t.value : t.defaultValue);
        case "svg":
          return vt(Dt, null);
        case "math":
          return vt(Ft, null);
        case "foreignObject":
          return vt(Ze, null);
        // Table parents are special in that their children can only be created at all if they're
        // wrapped in a table parent. So we need to encode that we're entering this mode.
        case "table":
          return vt(mr, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return vt(zr, null);
        case "colgroup":
          return vt(qt, null);
        case "tr":
          return vt(Wt, null);
      }
      return n.insertionMode >= mr || n.insertionMode === Xe ? vt(Ze, null) : n;
    }
    var $r = null;
    function Mt(n) {
      var e = n.nextSuspenseID++;
      return O(n.boundaryPrefix + e.toString(16));
    }
    function er(n, e, t) {
      var r = n.idPrefix, o = ":" + r + "R" + e;
      return t > 0 && (o += "H" + t.toString(32)), o + ":";
    }
    function mt(n) {
      return et(n);
    }
    var Vr = O("<!-- -->");
    function ft(n, e, t, r) {
      return e === "" ? r : (r && n.push(Vr), n.push(W(mt(e))), !0);
    }
    function bt(n, e, t, r) {
      t && r && n.push(Vr);
    }
    var a = /* @__PURE__ */ new Map();
    function u(n) {
      var e = a.get(n);
      if (e !== void 0)
        return e;
      var t = O(et(rn(n)));
      return a.set(n, t), t;
    }
    var h = O(' style="'), g = O(":"), _ = O(";");
    function C(n, e, t) {
      if (typeof t != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var r = !0;
      for (var o in t)
        if (ve.call(t, o)) {
          var s = t[o];
          if (!(s == null || typeof s == "boolean" || s === "")) {
            var c = void 0, p = void 0, y = o.indexOf("--") === 0;
            y ? (c = W(et(o)), ie(s, o), p = W(et(("" + s).trim()))) : (_r(o, s), c = u(o), typeof s == "number" ? s !== 0 && !ve.call(nt, o) ? p = W(s + "px") : p = W("" + s) : (ie(s, o), p = W(et(("" + s).trim())))), r ? (r = !1, n.push(h, c, g, p)) : n.push(_, c, g, p);
          }
        }
      r || n.push(re);
    }
    var M = O(" "), N = O('="'), re = O('"'), se = O('=""');
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
        var o = Et(t);
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
          var s = o.attributeName, c = W(s);
          switch (o.type) {
            case De:
              r && n.push(M, c, se);
              return;
            case ye:
              r === !0 ? n.push(M, c, se) : r === !1 || n.push(M, c, N, W(et(r)), re);
              return;
            case Le:
              isNaN(r) || n.push(M, c, N, W(et(r)), re);
              break;
            case ar:
              !isNaN(r) && r >= 1 && n.push(M, c, N, W(et(r)), re);
              break;
            default:
              o.sanitizeURL && (Pe(r, s), r = "" + r, V(r)), n.push(M, c, N, W(et(r)), re);
          }
        } else if (Ae(t)) {
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
          n.push(M, W(t), N, W(et(r)), re);
        }
      }
    }
    var _e = O(">"), gt = O("/>");
    function yt(n, e, t) {
      if (e != null) {
        if (t != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof e != "object" || !("__html" in e))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var r = e.__html;
        r != null && (rt(r), n.push(W("" + r)));
      }
    }
    var St = !1, yr = !1, tr = !1, Yr = !1, Sr = !1, Fr = !1, sr = !1;
    function Mr(n, e) {
      {
        var t = n[e];
        if (t != null) {
          var r = he(t);
          n.multiple && !r ? f("The `%s` prop supplied to <select> must be an array if `multiple` is true.", e) : !n.multiple && r && f("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", e);
        }
      }
    }
    function Ta(n, e, t) {
      G("select", e), Mr(e, "value"), Mr(e, "defaultValue"), e.value !== void 0 && e.defaultValue !== void 0 && !tr && (f("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), tr = !0), n.push(Nt("select"));
      var r = null, o = null;
      for (var s in e)
        if (ve.call(e, s)) {
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
      return n.push(_e), yt(n, o, r), r;
    }
    function Ra(n) {
      var e = "";
      return D.Children.forEach(n, function(t) {
        t != null && (e += t, !Sr && typeof t != "string" && typeof t != "number" && (Sr = !0, f("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), e;
    }
    var Sn = O(' selected=""');
    function rr(n, e, t, r) {
      var o = r.selectedValue;
      n.push(Nt("option"));
      var s = null, c = null, p = null, y = null;
      for (var E in e)
        if (ve.call(e, E)) {
          var j = e[E];
          if (j == null)
            continue;
          switch (E) {
            case "children":
              s = j;
              break;
            case "selected":
              p = j, sr || (f("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), sr = !0);
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
        var H;
        if (c !== null ? (Pe(c, "value"), H = "" + c) : (y !== null && (Fr || (Fr = !0, f("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), H = Ra(s)), he(o))
          for (var Y = 0; Y < o.length; Y++) {
            Pe(o[Y], "value");
            var de = "" + o[Y];
            if (de === H) {
              n.push(Sn);
              break;
            }
          }
        else
          Pe(o, "select.value"), "" + o === H && n.push(Sn);
      } else p && n.push(Sn);
      return n.push(_e), yt(n, y, s), s;
    }
    function _a(n, e, t) {
      G("input", e), e.checked !== void 0 && e.defaultChecked !== void 0 && !yr && (f("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), yr = !0), e.value !== void 0 && e.defaultValue !== void 0 && !St && (f("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), St = !0), n.push(Nt("input"));
      var r = null, o = null, s = null, c = null;
      for (var p in e)
        if (ve.call(e, p)) {
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
      return s !== null ? oe(n, t, "checked", s) : c !== null && oe(n, t, "checked", c), r !== null ? oe(n, t, "value", r) : o !== null && oe(n, t, "value", o), n.push(gt), null;
    }
    function lr(n, e, t) {
      G("textarea", e), e.value !== void 0 && e.defaultValue !== void 0 && !Yr && (f("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Yr = !0), n.push(Nt("textarea"));
      var r = null, o = null, s = null;
      for (var c in e)
        if (ve.call(e, c)) {
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
      if (r === null && o !== null && (r = o), n.push(_e), s != null) {
        if (f("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), r != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (he(s)) {
          if (s.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          rt(s[0]), r = "" + s[0];
        }
        rt(s), r = "" + s;
      }
      return typeof r == "string" && r[0] === `
` && n.push(Or), r !== null && (Pe(r, "value"), n.push(W(mt("" + r)))), null;
    }
    function Yn(n, e, t, r) {
      n.push(Nt(t));
      for (var o in e)
        if (ve.call(e, o)) {
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
      return n.push(gt), null;
    }
    function bn(n, e, t) {
      n.push(Nt("menuitem"));
      for (var r in e)
        if (ve.call(e, r)) {
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
      return n.push(_e), null;
    }
    function He(n, e, t) {
      n.push(Nt("title"));
      var r = null;
      for (var o in e)
        if (ve.call(e, o)) {
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
      n.push(_e);
      {
        var c = Array.isArray(r) && r.length < 2 ? r[0] || null : r;
        Array.isArray(r) && r.length > 1 ? f("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : c != null && c.$$typeof != null ? f("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : c != null && typeof c != "string" && typeof c != "number" && f("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return r;
    }
    function Ar(n, e, t, r) {
      n.push(Nt(t));
      var o = null, s = null;
      for (var c in e)
        if (ve.call(e, c)) {
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
      return n.push(_e), yt(n, s, o), typeof o == "string" ? (n.push(W(mt(o))), null) : o;
    }
    function xn(n, e, t, r) {
      n.push(Nt(t));
      var o = null, s = null;
      for (var c in e)
        if (ve.call(e, c)) {
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
              Ae(c) && typeof p != "function" && typeof p != "symbol" && n.push(M, W(c), N, W(et(p)), re);
              break;
          }
        }
      return n.push(_e), yt(n, s, o), o;
    }
    var Or = O(`
`);
    function br(n, e, t, r) {
      n.push(Nt(t));
      var o = null, s = null;
      for (var c in e)
        if (ve.call(e, c)) {
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
      if (n.push(_e), s != null) {
        if (o != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof s != "object" || !("__html" in s))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var y = s.__html;
        y != null && (typeof y == "string" && y.length > 0 && y[0] === `
` ? n.push(Or, W(y)) : (rt(y), n.push(W("" + y))));
      }
      return typeof o == "string" && o[0] === `
` && n.push(Or), o;
    }
    var wn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, xr = /* @__PURE__ */ new Map();
    function Nt(n) {
      var e = xr.get(n);
      if (e === void 0) {
        if (!wn.test(n))
          throw new Error("Invalid tag: " + n);
        e = O("<" + n), xr.set(n, e);
      }
      return e;
    }
    var Gn = O("<!DOCTYPE html>");
    function nn(n, e, t, r, o) {
      switch (ot(e, t), Lt(e, t), en(e, t, null), !t.suppressContentEditableWarning && t.contentEditable && t.children != null && f("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), o.insertionMode !== Dt && o.insertionMode !== Ft && e.indexOf("-") === -1 && typeof t.is != "string" && e.toLowerCase() !== e && f("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e) {
        // Special tags
        case "select":
          return Ta(n, t, r);
        case "option":
          return rr(n, t, r, o);
        case "textarea":
          return lr(n, t, r);
        case "input":
          return _a(n, t, r);
        case "menuitem":
          return bn(n, t, r);
        case "title":
          return He(n, t, r);
        // Newline eating tags
        case "listing":
        case "pre":
          return br(n, t, e, r);
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
          return Yn(n, t, e, r);
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
          return Ar(n, t, e, r);
        case "html":
          return o.insertionMode === Xe && n.push(Gn), Ar(n, t, e, r);
        default:
          return e.indexOf("-") === -1 && typeof t.is != "string" ? Ar(n, t, e, r) : xn(n, t, e, r);
      }
    }
    var Ro = O("</"), kn = O(">");
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
          n.push(Ro, W(e), kn);
      }
    }
    function Ia(n, e) {
      for (var t = e.bootstrapChunks, r = 0; r < t.length - 1; r++)
        R(n, t[r]);
      return r < t.length ? L(n, t[r]) : !0;
    }
    var Pa = O('<template id="'), Cn = O('"></template>');
    function Io(n, e, t) {
      R(n, Pa), R(n, e.placeholderPrefix);
      var r = W(t.toString(16));
      return R(n, r), L(n, Cn);
    }
    var on = O("<!--$-->"), Xn = O('<!--$?--><template id="'), Da = O('"></template>'), Gr = O("<!--$!-->"), Zn = O("<!--/$-->"), Jn = O("<template"), Xr = O('"'), an = O(' data-dgst="'), En = O(' data-msg="'), Po = O(' data-stck="'), Do = O("></template>");
    function Fo(n, e) {
      return L(n, on);
    }
    function Tn(n, e, t) {
      if (R(n, Xn), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return R(n, t), L(n, Da);
    }
    function xt(n, e, t, r, o) {
      var s;
      return s = L(n, Gr), R(n, Jn), t && (R(n, an), R(n, W(et(t))), R(n, Xr)), r && (R(n, En), R(n, W(et(r))), R(n, Xr)), o && (R(n, Po), R(n, W(et(o))), R(n, Xr)), s = L(n, Do), s;
    }
    function Mo(n, e) {
      return L(n, Zn);
    }
    function Rn(n, e) {
      return L(n, Zn);
    }
    function Fa(n, e) {
      return L(n, Zn);
    }
    var Ao = O('<div hidden id="'), _n = O('">'), Oo = O("</div>"), jo = O('<svg aria-hidden="true" style="display:none" id="'), In = O('">'), Pn = O("</svg>"), Lo = O('<math aria-hidden="true" style="display:none" id="'), Bo = O('">'), Uo = O("</math>"), Qn = O('<table hidden id="'), Ho = O('">'), i = O("</table>"), l = O('<table hidden><tbody id="'), d = O('">'), m = O("</tbody></table>"), I = O('<table hidden><tr id="'), T = O('">'), A = O("</tr></table>"), z = O('<table hidden><colgroup id="'), le = O('">'), Se = O("</colgroup></table>");
    function ge(n, e, t, r) {
      switch (t.insertionMode) {
        case Xe:
        case Ze:
          return R(n, Ao), R(n, e.segmentPrefix), R(n, W(r.toString(16))), L(n, _n);
        case Dt:
          return R(n, jo), R(n, e.segmentPrefix), R(n, W(r.toString(16))), L(n, In);
        case Ft:
          return R(n, Lo), R(n, e.segmentPrefix), R(n, W(r.toString(16))), L(n, Bo);
        case mr:
          return R(n, Qn), R(n, e.segmentPrefix), R(n, W(r.toString(16))), L(n, Ho);
        // TODO: For the rest of these, there will be extra wrapper nodes that never
        // get deleted from the document. We need to delete the table too as part
        // of the injected scripts. They are invisible though so it's not too terrible
        // and it's kind of an edge case to suspend in a table. Totally supported though.
        case zr:
          return R(n, l), R(n, e.segmentPrefix), R(n, W(r.toString(16))), L(n, d);
        case Wt:
          return R(n, I), R(n, e.segmentPrefix), R(n, W(r.toString(16))), L(n, T);
        case qt:
          return R(n, z), R(n, e.segmentPrefix), R(n, W(r.toString(16))), L(n, le);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function We(n, e) {
      switch (e.insertionMode) {
        case Xe:
        case Ze:
          return L(n, Oo);
        case Dt:
          return L(n, Pn);
        case Ft:
          return L(n, Uo);
        case mr:
          return L(n, i);
        case zr:
          return L(n, m);
        case Wt:
          return L(n, A);
        case qt:
          return L(n, Se);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var wt = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", zt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', $t = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Dn = O(wt + ';$RS("'), Wo = O('$RS("'), sn = O('","'), cs = O('")<\/script>');
    function fs(n, e, t) {
      R(n, e.startInlineScript), e.sentCompleteSegmentFunction ? R(n, Wo) : (e.sentCompleteSegmentFunction = !0, R(n, Dn)), R(n, e.segmentPrefix);
      var r = W(t.toString(16));
      return R(n, r), R(n, sn), R(n, e.placeholderPrefix), R(n, r), L(n, cs);
    }
    var Ma = O(zt + ';$RC("'), ds = O('$RC("'), ps = O('","'), bi = O('")<\/script>');
    function xi(n, e, t, r) {
      if (R(n, e.startInlineScript), e.sentCompleteBoundaryFunction ? R(n, ds) : (e.sentCompleteBoundaryFunction = !0, R(n, Ma)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var o = W(r.toString(16));
      return R(n, t), R(n, ps), R(n, e.segmentPrefix), R(n, o), L(n, bi);
    }
    var hs = O($t + ';$RX("'), vs = O('$RX("'), ms = O('"'), gs = O(")<\/script>"), At = O(",");
    function ys(n, e, t, r, o, s) {
      if (R(n, e.startInlineScript), e.sentClientRenderFunction ? R(n, vs) : (e.sentClientRenderFunction = !0, R(n, hs)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return R(n, t), R(n, ms), (r || o || s) && (R(n, At), R(n, W(No(r || "")))), (o || s) && (R(n, At), R(n, W(No(o || "")))), s && (R(n, At), R(n, W(No(s)))), L(n, gs);
    }
    var wi = /[<\u2028\u2029]/g;
    function No(n) {
      var e = JSON.stringify(n);
      return e.replace(wi, function(t) {
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
    var Vt = Object.assign, ki = Symbol.for("react.element"), zo = Symbol.for("react.portal"), $o = Symbol.for("react.fragment"), Vo = Symbol.for("react.strict_mode"), Yo = Symbol.for("react.profiler"), Kn = Symbol.for("react.provider"), qn = Symbol.for("react.context"), Fn = Symbol.for("react.forward_ref"), Aa = Symbol.for("react.suspense"), Oa = Symbol.for("react.suspense_list"), ja = Symbol.for("react.memo"), Go = Symbol.for("react.lazy"), Ci = Symbol.for("react.scope"), Ss = Symbol.for("react.debug_trace_mode"), bs = Symbol.for("react.legacy_hidden"), xs = Symbol.for("react.default_value"), La = Symbol.iterator, tt = "@@iterator";
    function eo(n) {
      if (n === null || typeof n != "object")
        return null;
      var e = La && n[La] || n[tt];
      return typeof e == "function" ? e : null;
    }
    function Ei(n, e, t) {
      var r = n.displayName;
      if (r)
        return r;
      var o = e.displayName || e.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function Ba(n) {
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
        case Aa:
          return "Suspense";
        case Oa:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case qn:
            var e = n;
            return Ba(e) + ".Consumer";
          case Kn:
            var t = n;
            return Ba(t._context) + ".Provider";
          case Fn:
            return Ei(n, n.render, "ForwardRef");
          case ja:
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
    var Mn = 0, Ua, Ha, Wa, Na, Ti, Ri, Xo;
    function Zo() {
    }
    Zo.__reactDisabledLog = !0;
    function to() {
      {
        if (Mn === 0) {
          Ua = console.log, Ha = console.info, Wa = console.warn, Na = console.error, Ti = console.group, Ri = console.groupCollapsed, Xo = console.groupEnd;
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
    function za() {
      {
        if (Mn--, Mn === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Vt({}, n, {
              value: Ua
            }),
            info: Vt({}, n, {
              value: Ha
            }),
            warn: Vt({}, n, {
              value: Wa
            }),
            error: Vt({}, n, {
              value: Na
            }),
            group: Vt({}, n, {
              value: Ti
            }),
            groupCollapsed: Vt({}, n, {
              value: Ri
            }),
            groupEnd: Vt({}, n, {
              value: Xo
            })
          });
        }
        Mn < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var An = k.ReactCurrentDispatcher, $a;
    function ln(n, e, t) {
      {
        if ($a === void 0)
          try {
            throw Error();
          } catch (o) {
            var r = o.stack.trim().match(/\n( *(at )?)/);
            $a = r && r[1] || "";
          }
        return `
` + $a + n;
      }
    }
    var Va = !1, ro;
    {
      var ws = typeof WeakMap == "function" ? WeakMap : Map;
      ro = new ws();
    }
    function no(n, e) {
      if (!n || Va)
        return "";
      {
        var t = ro.get(n);
        if (t !== void 0)
          return t;
      }
      var r;
      Va = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = An.current, An.current = null, to();
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
                    var H = `
` + p[E].replace(" at new ", " at ");
                    return n.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", n.displayName)), typeof n == "function" && ro.set(n, H), H;
                  }
                while (E >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        Va = !1, An.current = s, za(), Error.prepareStackTrace = o;
      }
      var Y = n ? n.displayName || n.name : "", de = Y ? ln(Y) : "";
      return typeof n == "function" && ro.set(n, de), de;
    }
    function _i(n, e, t) {
      return no(n, !0);
    }
    function Ya(n, e, t) {
      return no(n, !1);
    }
    function Jo(n) {
      var e = n.prototype;
      return !!(e && e.isReactComponent);
    }
    function Qo(n, e, t) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return no(n, Jo(n));
      if (typeof n == "string")
        return ln(n);
      switch (n) {
        case Aa:
          return ln("Suspense");
        case Oa:
          return ln("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case Fn:
            return Ya(n.render);
          case ja:
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
    var Ko = {}, oo = k.ReactDebugCurrentFrame;
    function ao(n) {
      if (n) {
        var e = n._owner, t = Qo(n.type, n._source, e ? e.type : null);
        oo.setExtraStackFrame(t);
      } else
        oo.setExtraStackFrame(null);
    }
    function Ii(n, e, t, r, o) {
      {
        var s = Function.call.bind(ve);
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
            p && !(p instanceof Error) && (ao(o), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", r || "React class", t, c, typeof p), ao(null)), p instanceof Error && !(p.message in Ko) && (Ko[p.message] = !0, ao(o), f("Failed %s type: %s", t, p.message), ao(null));
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
          Ii(t, r, "context", s);
        }
        return r;
      }
    }
    function Ga(n, e, t, r) {
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
          Ii(r, s, "child context", p);
        }
        return Vt({}, t, s);
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
    function io(n, e) {
      if (n !== e) {
        ta(n);
        var t = n.parent, r = e.parent;
        if (t === null) {
          if (r !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (r === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          io(t, r);
        }
        ra(e);
      }
    }
    function so(n) {
      ta(n);
      var e = n.parent;
      e !== null && so(e);
    }
    function Pi(n) {
      var e = n.parent;
      e !== null && Pi(e), ra(n);
    }
    function Di(n, e) {
      ta(n);
      var t = n.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === e.depth ? io(t, e) : Di(t, e);
    }
    function Fi(n, e) {
      var t = e.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      n.depth === t.depth ? io(n, t) : Fi(n, t), ra(e);
    }
    function Qr(n) {
      var e = Jr, t = n;
      e !== t && (e === null ? Pi(t) : t === null ? so(e) : e.depth === t.depth ? io(e, t) : e.depth > t.depth ? Di(e, t) : Fi(e, t), Jr = t);
    }
    function Xa(n, e) {
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
    function ks(n) {
      var e = Jr;
      if (e === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      e.context !== n && f("The parent context is not the expected context. This is probably a bug in React.");
      {
        var t = e.parentValue;
        t === xs ? e.context._currentValue = e.context._defaultValue : e.context._currentValue = t, n._currentRenderer !== void 0 && n._currentRenderer !== null && n._currentRenderer !== cn && f("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer = cn;
      }
      return Jr = e.parent;
    }
    function Mi() {
      return Jr;
    }
    function On(n) {
      var e = n._currentValue;
      return e;
    }
    function lo(n) {
      return n._reactInternals;
    }
    function Za(n, e) {
      n._reactInternals = e;
    }
    var na = {}, oa = {}, aa, jn, uo, co, ia, fo, sa, la, Ja;
    {
      aa = /* @__PURE__ */ new Set(), jn = /* @__PURE__ */ new Set(), uo = /* @__PURE__ */ new Set(), sa = /* @__PURE__ */ new Set(), co = /* @__PURE__ */ new Set(), la = /* @__PURE__ */ new Set(), Ja = /* @__PURE__ */ new Set();
      var Ai = /* @__PURE__ */ new Set();
      fo = function(n, e) {
        if (!(n === null || typeof n == "function")) {
          var t = e + "_" + n;
          Ai.has(t) || (Ai.add(t), f("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", e, n));
        }
      }, ia = function(n, e) {
        if (e === void 0) {
          var t = qe(n) || "Component";
          co.has(t) || (co.add(t), f("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", t));
        }
      };
    }
    function Oi(n, e) {
      {
        var t = n.constructor, r = t && qe(t) || "ReactClass", o = r + "." + e;
        if (na[o])
          return;
        f(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, e, e, r), na[o] = !0;
      }
    }
    var ji = {
      isMounted: function(n) {
        return !1;
      },
      enqueueSetState: function(n, e, t) {
        var r = lo(n);
        r.queue === null ? Oi(n, "setState") : (r.queue.push(e), t != null && fo(t, "setState"));
      },
      enqueueReplaceState: function(n, e, t) {
        var r = lo(n);
        r.replace = !0, r.queue = [e], t != null && fo(t, "setState");
      },
      enqueueForceUpdate: function(n, e) {
        var t = lo(n);
        t.queue === null ? Oi(n, "forceUpdate") : e != null && fo(e, "setState");
      }
    };
    function Cs(n, e, t, r, o) {
      var s = t(o, r);
      ia(e, s);
      var c = s == null ? r : Vt({}, r, s);
      return c;
    }
    function Li(n, e, t) {
      var r = qo, o = n.contextType;
      if ("contextType" in n) {
        var s = (
          // Allow null for conditional declaration
          o === null || o !== void 0 && o.$$typeof === qn && o._context === void 0
        );
        if (!s && !Ja.has(n)) {
          Ja.add(n);
          var c = "";
          o === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof o != "object" ? c = " However, it is set to a " + typeof o + "." : o.$$typeof === Kn ? c = " Did you accidentally pass the Context.Provider instead?" : o._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(o).join(", ") + "}.", f("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", qe(n) || "Component", c);
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
          var E = null, j = null, H = null;
          if (typeof p.componentWillMount == "function" && p.componentWillMount.__suppressDeprecationWarning !== !0 ? E = "componentWillMount" : typeof p.UNSAFE_componentWillMount == "function" && (E = "UNSAFE_componentWillMount"), typeof p.componentWillReceiveProps == "function" && p.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? j = "componentWillReceiveProps" : typeof p.UNSAFE_componentWillReceiveProps == "function" && (j = "UNSAFE_componentWillReceiveProps"), typeof p.componentWillUpdate == "function" && p.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof p.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), E !== null || j !== null || H !== null) {
            var Y = qe(n) || "Component", de = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            uo.has(Y) || (uo.add(Y), f(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Y, de, E !== null ? `
  ` + E : "", j !== null ? `
  ` + j : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return p;
    }
    function Es(n, e, t) {
      {
        var r = qe(e) || "Component", o = n.render;
        o || (e.prototype && typeof e.prototype.render == "function" ? f("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", r) : f("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", r)), n.getInitialState && !n.getInitialState.isReactClassApproved && !n.state && f("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", r), n.getDefaultProps && !n.getDefaultProps.isReactClassApproved && f("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", r), n.propTypes && f("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", r), n.contextType && f("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", r), n.contextTypes && f("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", r), e.contextType && e.contextTypes && !la.has(e) && (la.add(e), f("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", r)), typeof n.componentShouldUpdate == "function" && f("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", r), e.prototype && e.prototype.isPureReactComponent && typeof n.shouldComponentUpdate < "u" && f("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", qe(e) || "A pure component"), typeof n.componentDidUnmount == "function" && f("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", r), typeof n.componentDidReceiveProps == "function" && f("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", r), typeof n.componentWillRecieveProps == "function" && f("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", r), typeof n.UNSAFE_componentWillRecieveProps == "function" && f("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", r);
        var s = n.props !== t;
        n.props !== void 0 && s && f("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", r, r), n.defaultProps && f("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", r, r), typeof n.getSnapshotBeforeUpdate == "function" && typeof n.componentDidUpdate != "function" && !jn.has(e) && (jn.add(e), f("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", qe(e))), typeof n.getDerivedStateFromProps == "function" && f("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", r), typeof n.getDerivedStateFromError == "function" && f("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", r), typeof e.getSnapshotBeforeUpdate == "function" && f("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", r);
        var c = n.state;
        c && (typeof c != "object" || he(c)) && f("%s.state: must be set to an object or null", r), typeof n.getChildContext == "function" && typeof e.childContextTypes != "object" && f("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", r);
      }
    }
    function Ts(n, e) {
      var t = e.state;
      if (typeof e.componentWillMount == "function") {
        if (e.componentWillMount.__suppressDeprecationWarning !== !0) {
          var r = qe(n) || "Unknown";
          oa[r] || (P(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            r
          ), oa[r] = !0);
        }
        e.componentWillMount();
      }
      typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && (f("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", qe(n) || "Component"), ji.enqueueReplaceState(e, e.state, null));
    }
    function Qa(n, e, t, r) {
      if (n.queue !== null && n.queue.length > 0) {
        var o = n.queue, s = n.replace;
        if (n.queue = null, n.replace = !1, s && o.length === 1)
          e.state = o[0];
        else {
          for (var c = s ? o[0] : e.state, p = !0, y = s ? 1 : 0; y < o.length; y++) {
            var E = o[y], j = typeof E == "function" ? E.call(e, c, t, r) : E;
            j != null && (p ? (p = !1, c = Vt({}, c, j)) : Vt(c, j));
          }
          e.state = c;
        }
      } else
        n.queue = null;
    }
    function po(n, e, t, r) {
      Es(n, e, t);
      var o = n.state !== void 0 ? n.state : null;
      n.updater = ji, n.props = t, n.state = o;
      var s = {
        queue: [],
        replace: !1
      };
      Za(n, s);
      var c = e.contextType;
      if (typeof c == "object" && c !== null ? n.context = On(c) : n.context = r, n.state === t) {
        var p = qe(e) || "Component";
        sa.has(p) || (sa.add(p), f("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
      }
      var y = e.getDerivedStateFromProps;
      typeof y == "function" && (n.state = Cs(n, e, y, o, t)), typeof e.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function") && (Ts(e, n), Qa(s, n, t, r));
    }
    var Rs = {
      id: 1,
      overflow: ""
    };
    function _s(n) {
      var e = n.overflow, t = n.id, r = t & ~Is(t);
      return r.toString(32) + e;
    }
    function Ka(n, e, t) {
      var r = n.id, o = n.overflow, s = ua(r) - 1, c = r & ~(1 << s), p = t + 1, y = ua(e) + s;
      if (y > 30) {
        var E = s - s % 5, j = (1 << E) - 1, H = (c & j).toString(32), Y = c >> E, de = s - E, Fe = ua(e) + de, pt = p << de, gn = pt | Y, yn = H + o;
        return {
          id: 1 << Fe | gn,
          overflow: yn
        };
      } else {
        var Hr = p << s, zn = Hr | c, al = o;
        return {
          id: 1 << y | zn,
          overflow: al
        };
      }
    }
    function ua(n) {
      return 32 - Ps(n);
    }
    function Is(n) {
      return 1 << ua(n) - 1;
    }
    var Ps = Math.clz32 ? Math.clz32 : qa, Ds = Math.log, jr = Math.LN2;
    function qa(n) {
      var e = n >>> 0;
      return e === 0 ? 32 : 31 - (Ds(e) / jr | 0) | 0;
    }
    function ca(n, e) {
      return n === e && (n !== 0 || 1 / n === 1 / e) || n !== n && e !== e;
    }
    var Je = typeof Object.is == "function" ? Object.is : ca, Yt = null, Ln = null, fn = null, Ie = null, Kr = !1, fa = !1, Gt = 0, Xt = null, wr = 0, Fs = 25, ur = !1, qr;
    function dn() {
      if (Yt === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return ur && f("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Yt;
    }
    function Ms(n, e) {
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
    function ei() {
      if (wr > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function ho() {
      return Ie === null ? fn === null ? (Kr = !1, fn = Ie = ei()) : (Kr = !0, Ie = fn) : Ie.next === null ? (Kr = !1, Ie = Ie.next = ei()) : (Kr = !0, Ie = Ie.next), Ie;
    }
    function As(n, e) {
      Yt = e, Ln = n, ur = !1, Gt = 0;
    }
    function Os(n, e, t, r) {
      for (; fa; )
        fa = !1, Gt = 0, wr += 1, Ie = null, t = n(e, r);
      return ti(), t;
    }
    function da() {
      var n = Gt !== 0;
      return n;
    }
    function ti() {
      ur = !1, Yt = null, Ln = null, fa = !1, fn = null, wr = 0, Xt = null, Ie = null;
    }
    function Bi(n) {
      return ur && f("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), On(n);
    }
    function Ui(n) {
      return qr = "useContext", dn(), On(n);
    }
    function ri(n, e) {
      return typeof e == "function" ? e(n) : e;
    }
    function js(n) {
      return qr = "useState", Hi(
        ri,
        // useReducer has a special case to support lazy useState initializers
        n
      );
    }
    function Hi(n, e, t) {
      if (n !== ri && (qr = "useReducer"), Yt = dn(), Ie = ho(), Kr) {
        var r = Ie.queue, o = r.dispatch;
        if (Xt !== null) {
          var s = Xt.get(r);
          if (s !== void 0) {
            Xt.delete(r);
            var c = Ie.memoizedState, p = s;
            do {
              var y = p.action;
              ur = !0, c = n(c, y), ur = !1, p = p.next;
            } while (p !== null);
            return Ie.memoizedState = c, [c, o];
          }
        }
        return [Ie.memoizedState, o];
      } else {
        ur = !0;
        var E;
        n === ri ? E = typeof e == "function" ? e() : e : E = t !== void 0 ? t(e) : e, ur = !1, Ie.memoizedState = E;
        var j = Ie.queue = {
          last: null,
          dispatch: null
        }, H = j.dispatch = Us.bind(null, Yt, j);
        return [Ie.memoizedState, H];
      }
    }
    function Wi(n, e) {
      Yt = dn(), Ie = ho();
      var t = e === void 0 ? null : e;
      if (Ie !== null) {
        var r = Ie.memoizedState;
        if (r !== null && t !== null) {
          var o = r[1];
          if (Ms(t, o))
            return r[0];
        }
      }
      ur = !0;
      var s = n();
      return ur = !1, Ie.memoizedState = [s, t], s;
    }
    function Ls(n) {
      Yt = dn(), Ie = ho();
      var e = Ie.memoizedState;
      if (e === null) {
        var t = {
          current: n
        };
        return Object.seal(t), Ie.memoizedState = t, t;
      } else
        return e;
    }
    function Bs(n, e) {
      qr = "useLayoutEffect", f("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Us(n, e, t) {
      if (wr >= Fs)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (n === Yt) {
        fa = !0;
        var r = {
          action: t,
          next: null
        };
        Xt === null && (Xt = /* @__PURE__ */ new Map());
        var o = Xt.get(e);
        if (o === void 0)
          Xt.set(e, r);
        else {
          for (var s = o; s.next !== null; )
            s = s.next;
          s.next = r;
        }
      }
    }
    function Hs(n, e) {
      return Wi(function() {
        return n;
      }, e);
    }
    function Ws(n, e, t) {
      return dn(), e(n._source);
    }
    function Ns(n, e, t) {
      if (t === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return t();
    }
    function pa(n) {
      return dn(), n;
    }
    function Ni() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function ni() {
      return dn(), [!1, Ni];
    }
    function zi() {
      var n = Ln, e = _s(n.treeContext), t = vo;
      if (t === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var r = Gt++;
      return er(t, e, r);
    }
    function ha() {
    }
    var va = {
      readContext: Bi,
      useContext: Ui,
      useMemo: Wi,
      useReducer: Hi,
      useRef: Ls,
      useState: js,
      useInsertionEffect: ha,
      useLayoutEffect: Bs,
      useCallback: Hs,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: ha,
      // Effects are not run in the server environment.
      useEffect: ha,
      // Debugging effect
      useDebugValue: ha,
      useDeferredValue: pa,
      useTransition: ni,
      useId: zi,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Ws,
      useSyncExternalStore: Ns
    }, vo = null;
    function ma(n) {
      vo = n;
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
              e += Ya(t.type, null, null);
              break;
            case 2:
              e += _i(t.type, null, null);
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
    var ga = k.ReactCurrentDispatcher, ya = k.ReactDebugCurrentFrame, Sa = 0, Un = 1, oi = 2, pn = 3, $i = 4, zs = 0, Hn = 1, Wn = 2, $s = 12800;
    function Vs(n) {
      return console.error(n), null;
    }
    function hn() {
    }
    function ba(n, e, t, r, o, s, c, p, y) {
      var E = [], j = /* @__PURE__ */ new Set(), H = {
        destination: null,
        responseState: e,
        progressiveChunkSize: r === void 0 ? $s : r,
        status: zs,
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
        onError: o === void 0 ? Vs : o,
        onAllReady: s === void 0 ? hn : s,
        onShellReady: c === void 0 ? hn : c,
        onShellError: p === void 0 ? hn : p,
        onFatalError: y === void 0 ? hn : y
      }, Y = mo(
        H,
        0,
        null,
        t,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      Y.parentFlushed = !0;
      var de = vn(H, n, null, Y, j, qo, ea, Rs);
      return E.push(de), H;
    }
    function Lr(n, e) {
      var t = n.pingedTasks;
      t.push(e), t.length === 1 && B(function() {
        return vi(n);
      });
    }
    function ai(n, e) {
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
          return Lr(n, y);
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
    function mo(n, e, t, r, o, s) {
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
    var Br = null;
    function kr() {
      return Br === null || Br.componentStack === null ? "" : Bn(Br.componentStack);
    }
    function Ur(n, e) {
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
    function go(n, e) {
      n.componentStack = {
        tag: 2,
        parent: n.componentStack,
        type: e
      };
    }
    function cr(n) {
      n.componentStack === null ? f("Unexpectedly popped too many stack frames. This is a bug in React.") : n.componentStack = n.componentStack.parent;
    }
    var yo = null;
    function ii(n, e) {
      {
        var t;
        typeof e == "string" ? t = e : e && typeof e.message == "string" ? t = e.message : t = String(e);
        var r = yo || kr();
        yo = null, n.errorMessage = t, n.errorComponentStack = r;
      }
    }
    function So(n, e) {
      var t = n.onError(e);
      if (t != null && typeof t != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
      return t;
    }
    function bo(n, e) {
      var t = n.onShellError;
      t(e);
      var r = n.onFatalError;
      r(e), n.destination !== null ? (n.status = Wn, ue(n.destination, e)) : (n.status = Hn, n.fatalError = e);
    }
    function Vi(n, e, t) {
      Ur(e, "Suspense");
      var r = e.blockedBoundary, o = e.blockedSegment, s = t.fallback, c = t.children, p = /* @__PURE__ */ new Set(), y = ai(n, p), E = o.chunks.length, j = mo(
        n,
        E,
        y,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      o.children.push(j), o.lastPushedText = !1;
      var H = mo(
        n,
        0,
        null,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      H.parentFlushed = !0, e.blockedBoundary = y, e.blockedSegment = H;
      try {
        if (Nn(n, e, c), bt(H.chunks, n.responseState, H.lastPushedText, H.textEmbedded), H.status = Un, mn(y, H), y.pendingTasks === 0) {
          cr(e);
          return;
        }
      } catch (de) {
        H.status = $i, y.forceClientRender = !0, y.errorDigest = So(n, de), ii(y, de);
      } finally {
        e.blockedBoundary = r, e.blockedSegment = o;
      }
      var Y = vn(n, s, r, j, p, e.legacyContext, e.context, e.treeContext);
      Y.componentStack = e.componentStack, n.pingedTasks.push(Y), cr(e);
    }
    function Ys(n, e, t, r) {
      Ur(e, t);
      var o = e.blockedSegment, s = nn(o.chunks, t, r, n.responseState, o.formatContext);
      o.lastPushedText = !1;
      var c = o.formatContext;
      o.formatContext = Dr(c, t, r), Nn(n, e, s), o.formatContext = c, _o(o.chunks, t), o.lastPushedText = !1, cr(e);
    }
    function Yi(n) {
      return n.prototype && n.prototype.isReactComponent;
    }
    function xo(n, e, t, r, o) {
      var s = {};
      As(e, s);
      var c = t(r, o);
      return Os(t, r, c, o);
    }
    function si(n, e, t, r, o) {
      var s = t.render();
      t.props !== o && (fi || f("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", qe(r) || "a component"), fi = !0);
      {
        var c = r.childContextTypes;
        if (c != null) {
          var p = e.legacyContext, y = Ga(t, r, p, c);
          e.legacyContext = y, kt(n, e, s), e.legacyContext = p;
          return;
        }
      }
      kt(n, e, s);
    }
    function Gi(n, e, t, r) {
      go(e, t);
      var o = Zr(t, e.legacyContext), s = Li(t, r, o);
      po(s, t, r, o), si(n, e, s, t, r), cr(e);
    }
    var li = {}, wo = {}, ui = {}, ci = {}, fi = !1, Xi = {}, Zi = !1, di = !1, Ji = !1;
    function Gs(n, e, t, r) {
      var o;
      if (o = Zr(t, e.legacyContext), xa(e, t), t.prototype && typeof t.prototype.render == "function") {
        var s = qe(t) || "Unknown";
        li[s] || (f("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", s, s), li[s] = !0);
      }
      var c = xo(n, e, t, r, o), p = da();
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
          var E = qe(t) || "Unknown";
          wo[E] || (f("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", E, E, E), wo[E] = !0);
        }
        po(c, t, r, o), si(n, e, c, t, r);
      } else if (Xs(t), p) {
        var j = e.treeContext, H = 1, Y = 0;
        e.treeContext = Ka(j, H, Y);
        try {
          kt(n, e, c);
        } finally {
          e.treeContext = j;
        }
      } else
        kt(n, e, c);
      cr(e);
    }
    function Xs(n) {
      {
        if (n && n.childContextTypes && f("%s(...): childContextTypes cannot be defined on a function component.", n.displayName || n.name || "Component"), n.defaultProps !== void 0) {
          var e = qe(n) || "Unknown";
          Xi[e] || (f("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", e), Xi[e] = !0);
        }
        if (typeof n.getDerivedStateFromProps == "function") {
          var t = qe(n) || "Unknown";
          ci[t] || (f("%s: Function components do not support getDerivedStateFromProps.", t), ci[t] = !0);
        }
        if (typeof n.contextType == "object" && n.contextType !== null) {
          var r = qe(n) || "Unknown";
          ui[r] || (f("%s: Function components do not support contextType.", r), ui[r] = !0);
        }
      }
    }
    function Qi(n, e) {
      if (n && n.defaultProps) {
        var t = Vt({}, e), r = n.defaultProps;
        for (var o in r)
          t[o] === void 0 && (t[o] = r[o]);
        return t;
      }
      return e;
    }
    function Zs(n, e, t, r, o) {
      xa(e, t.render);
      var s = xo(n, e, t.render, r, o), c = da();
      if (c) {
        var p = e.treeContext, y = 1, E = 0;
        e.treeContext = Ka(p, y, E);
        try {
          kt(n, e, s);
        } finally {
          e.treeContext = p;
        }
      } else
        kt(n, e, s);
      cr(e);
    }
    function pi(n, e, t, r, o) {
      var s = t.type, c = Qi(s, r);
      wa(n, e, s, c, o);
    }
    function Js(n, e, t, r) {
      t._context === void 0 ? t !== t.Consumer && (Ji || (Ji = !0, f("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : t = t._context;
      var o = r.children;
      typeof o != "function" && f("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var s = On(t), c = o(s);
      kt(n, e, c);
    }
    function Zt(n, e, t, r) {
      var o = t._context, s = r.value, c = r.children, p;
      p = e.context, e.context = Xa(o, s), kt(n, e, c), e.context = ks(o), p !== e.context && f("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Qs(n, e, t, r, o) {
      Ur(e, "Lazy");
      var s = t._payload, c = t._init, p = c(s), y = Qi(p, r);
      wa(n, e, p, y, o), cr(e);
    }
    function wa(n, e, t, r, o) {
      if (typeof t == "function")
        if (Yi(t)) {
          Gi(n, e, t, r);
          return;
        } else {
          Gs(n, e, t, r);
          return;
        }
      if (typeof t == "string") {
        Ys(n, e, t, r);
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
        case bs:
        case Ss:
        case Vo:
        case Yo:
        case $o: {
          kt(n, e, r.children);
          return;
        }
        case Oa: {
          Ur(e, "SuspenseList"), kt(n, e, r.children), cr(e);
          return;
        }
        case Ci:
          throw new Error("ReactDOMServer does not yet support scope components.");
        // eslint-disable-next-line-no-fallthrough
        case Aa: {
          Vi(n, e, r);
          return;
        }
      }
      if (typeof t == "object" && t !== null)
        switch (t.$$typeof) {
          case Fn: {
            Zs(n, e, t, r, o);
            return;
          }
          case ja: {
            pi(n, e, t, r, o);
            return;
          }
          case Kn: {
            Zt(n, e, t, r);
            return;
          }
          case qn: {
            Js(n, e, t, r);
            return;
          }
          case Go: {
            Qs(n, e, t, r);
            return;
          }
        }
      var s = "";
      throw (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (t == null ? t : typeof t) + "." + s));
    }
    function Ks(n, e) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      n[Symbol.toStringTag] === "Generator" && (Zi || f("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Zi = !0), n.entries === e && (di || f("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), di = !0);
    }
    function kt(n, e, t) {
      try {
        return qs(n, e, t);
      } catch (r) {
        throw typeof r == "object" && r !== null && typeof r.then == "function" || (yo = yo !== null ? yo : kr()), r;
      }
    }
    function qs(n, e, t) {
      if (e.node = t, typeof t == "object" && t !== null) {
        switch (t.$$typeof) {
          case ki: {
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
            } catch (Hr) {
              throw typeof Hr == "object" && Hr !== null && typeof Hr.then == "function" && Ur(e, "Lazy"), Hr;
            }
            kt(n, e, j);
            return;
          }
        }
        if (he(t)) {
          Ki(n, e, t);
          return;
        }
        var H = eo(t);
        if (H) {
          Ks(t, H);
          var Y = H.call(t);
          if (Y) {
            var de = Y.next();
            if (!de.done) {
              var Fe = [];
              do
                Fe.push(de.value), de = Y.next();
              while (!de.done);
              Ki(n, e, Fe);
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
    function Ki(n, e, t) {
      for (var r = t.length, o = 0; o < r; o++) {
        var s = e.treeContext;
        e.treeContext = Ka(s, r, o);
        try {
          Nn(n, e, t[o]);
        } finally {
          e.treeContext = s;
        }
      }
    }
    function qi(n, e, t) {
      var r = e.blockedSegment, o = r.chunks.length, s = mo(
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
        return kt(n, e, t);
      } catch (p) {
        if (ti(), typeof p == "object" && p !== null && typeof p.then == "function") {
          qi(n, e, p), e.blockedSegment.formatContext = r, e.legacyContext = o, e.context = s, Qr(s), e.componentStack = c;
          return;
        } else
          throw e.blockedSegment.formatContext = r, e.legacyContext = o, e.context = s, Qr(s), e.componentStack = c, p;
      }
    }
    function es(n, e, t, r) {
      var o = So(n, r);
      if (e === null ? bo(n, r) : (e.pendingTasks--, e.forceClientRender || (e.forceClientRender = !0, e.errorDigest = o, ii(e, r), e.parentFlushed && n.clientRenderedBoundaries.push(e))), n.allPendingTasks--, n.allPendingTasks === 0) {
        var s = n.onAllReady;
        s();
      }
    }
    function el(n) {
      var e = this, t = n.blockedBoundary, r = n.blockedSegment;
      r.status = pn, ko(e, t, r);
    }
    function hi(n, e, t) {
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
            var p = Br;
            Br = n;
            try {
              ii(r, s);
            } finally {
              Br = p;
            }
          }
          r.parentFlushed && e.clientRenderedBoundaries.push(r);
        }
        if (r.fallbackAbortableTasks.forEach(function(E) {
          return hi(E, e, t);
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
    function ko(n, e, t) {
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
          t.parentFlushed && t.status === Un && mn(e, t), e.parentFlushed && n.completedBoundaries.push(e), e.fallbackAbortableTasks.forEach(el, n), e.fallbackAbortableTasks.clear();
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
    function tl(n, e) {
      var t = e.blockedSegment;
      if (t.status === Sa) {
        Qr(e.context);
        var r = null;
        r = Br, Br = e;
        try {
          kt(n, e, e.node), bt(t.chunks, n.responseState, t.lastPushedText, t.textEmbedded), e.abortSet.delete(e), t.status = Un, ko(n, e.blockedBoundary, t);
        } catch (s) {
          if (ti(), typeof s == "object" && s !== null && typeof s.then == "function") {
            var o = e.ping;
            s.then(o, o);
          } else
            e.abortSet.delete(e), t.status = $i, es(n, e.blockedBoundary, t, s);
        } finally {
          Br = r;
        }
      }
    }
    function vi(n) {
      if (n.status !== Wn) {
        var e = Mi(), t = ga.current;
        ga.current = va;
        var r;
        r = ya.getCurrentStack, ya.getCurrentStack = kr;
        var o = vo;
        ma(n.responseState);
        try {
          var s = n.pingedTasks, c;
          for (c = 0; c < s.length; c++) {
            var p = s[c];
            tl(n, p);
          }
          s.splice(0, c), n.destination !== null && mi(n, n.destination);
        } catch (y) {
          So(n, y), bo(n, y);
        } finally {
          ma(o), ga.current = t, ya.getCurrentStack = r, t === va && Qr(e);
        }
      }
    }
    function Co(n, e, t) {
      switch (t.parentFlushed = !0, t.status) {
        case Sa: {
          var r = t.id = n.nextSegmentId++;
          return t.lastPushedText = !1, t.textEmbedded = !1, Io(e, n.responseState, r);
        }
        case Un: {
          t.status = oi;
          for (var o = !0, s = t.chunks, c = 0, p = t.children, y = 0; y < p.length; y++) {
            for (var E = p[y]; c < E.index; c++)
              R(e, s[c]);
            o = ka(n, e, E);
          }
          for (; c < s.length - 1; c++)
            R(e, s[c]);
          return c < s.length && (o = L(e, s[c])), o;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function ka(n, e, t) {
      var r = t.boundary;
      if (r === null)
        return Co(n, e, t);
      if (r.parentFlushed = !0, r.forceClientRender)
        return xt(e, n.responseState, r.errorDigest, r.errorMessage, r.errorComponentStack), Co(n, e, t), Fa(e, n.responseState);
      if (r.pendingTasks > 0) {
        r.rootSegmentID = n.nextSegmentId++, r.completedSegments.length > 0 && n.partialBoundaries.push(r);
        var o = r.id = Mt(n.responseState);
        return Tn(e, n.responseState, o), Co(n, e, t), Rn(e, n.responseState);
      } else {
        if (r.byteSize > n.progressiveChunkSize)
          return r.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(r), Tn(e, n.responseState, r.id), Co(n, e, t), Rn(e, n.responseState);
        Fo(e, n.responseState);
        var s = r.completedSegments;
        if (s.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var c = s[0];
        return ka(n, e, c), Mo(e, n.responseState);
      }
    }
    function ts(n, e, t) {
      return ys(e, n.responseState, t.id, t.errorDigest, t.errorMessage, t.errorComponentStack);
    }
    function Ca(n, e, t) {
      return ge(e, n.responseState, t.formatContext, t.id), ka(n, e, t), We(e, t.formatContext);
    }
    function rs(n, e, t) {
      for (var r = t.completedSegments, o = 0; o < r.length; o++) {
        var s = r[o];
        ns(n, e, t, s);
      }
      return r.length = 0, xi(e, n.responseState, t.id, t.rootSegmentID);
    }
    function rl(n, e, t) {
      for (var r = t.completedSegments, o = 0; o < r.length; o++) {
        var s = r[o];
        if (!ns(n, e, t, s))
          return o++, r.splice(0, o), !1;
      }
      return r.splice(0, o), !0;
    }
    function ns(n, e, t, r) {
      if (r.status === oi)
        return !0;
      var o = r.id;
      if (o === -1) {
        var s = r.id = t.rootSegmentID;
        if (s === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Ca(n, e, r);
      } else
        return Ca(n, e, r), fs(e, n.responseState, o);
    }
    function mi(n, e) {
      Z();
      try {
        var t = n.completedRootSegment;
        t !== null && n.pendingRootTasks === 0 && (ka(n, e, t), n.completedRootSegment = null, Ia(e, n.responseState));
        var r = n.clientRenderedBoundaries, o;
        for (o = 0; o < r.length; o++) {
          var s = r[o];
          ts(n, e, s);
        }
        r.splice(0, o);
        var c = n.completedBoundaries;
        for (o = 0; o < c.length; o++) {
          var p = c[o];
          rs(n, e, p);
        }
        c.splice(0, o), K(e), Z(e);
        var y = n.partialBoundaries;
        for (o = 0; o < y.length; o++) {
          var E = y[o];
          if (!rl(n, e, E)) {
            n.destination = null, o++, y.splice(0, o);
            return;
          }
        }
        y.splice(0, o);
        var j = n.completedBoundaries;
        for (o = 0; o < j.length; o++) {
          var H = j[o];
          rs(n, e, H);
        }
        j.splice(0, o);
      } finally {
        K(e), n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && (n.abortableTasks.size !== 0 && f("There was still abortable task at the root when we closed. This is a bug in React."), J(e));
      }
    }
    function os(n) {
      B(function() {
        return vi(n);
      });
    }
    function nl(n, e) {
      if (n.status === Hn) {
        n.status = Wn, ue(e, n.fatalError);
        return;
      }
      if (n.status !== Wn && n.destination === null) {
        n.destination = e;
        try {
          mi(n, e);
        } catch (t) {
          So(n, t), bo(n, t);
        }
      }
    }
    function as(n, e) {
      try {
        var t = n.abortableTasks;
        t.forEach(function(r) {
          return hi(r, n, e);
        }), t.clear(), n.destination !== null && mi(n, n.destination);
      } catch (r) {
        So(n, r), bo(n, r);
      }
    }
    function ol(n, e) {
      return new Promise(function(t, r) {
        var o, s, c = new Promise(function(Y, de) {
          s = Y, o = de;
        });
        function p() {
          var Y = new ReadableStream(
            {
              type: "bytes",
              pull: function(de) {
                nl(E, de);
              },
              cancel: function(de) {
                as(E);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          Y.allReady = c, t(Y);
        }
        function y(Y) {
          c.catch(function() {
          }), r(Y);
        }
        var E = ba(n, Pt(e ? e.identifierPrefix : void 0, e ? e.nonce : void 0, e ? e.bootstrapScriptContent : void 0, e ? e.bootstrapScripts : void 0, e ? e.bootstrapModules : void 0), gr(e ? e.namespaceURI : void 0), e ? e.progressiveChunkSize : void 0, e ? e.onError : void 0, s, p, y, o);
        if (e && e.signal) {
          var j = e.signal, H = function() {
            as(E, j.reason), j.removeEventListener("abort", H);
          };
          j.addEventListener("abort", H);
        }
        os(E);
      });
    }
    ls.renderToReadableStream = ol, ls.version = v;
  }()), ls;
}
var xl;
function Ul() {
  if (xl) return $n;
  xl = 1;
  var D, v;
  return process.env.NODE_ENV === "production" ? (D = Ol(), v = jl()) : (D = Ll(), v = Bl()), $n.version = D.version, $n.renderToString = D.renderToString, $n.renderToStaticMarkup = D.renderToStaticMarkup, $n.renderToNodeStream = D.renderToNodeStream, $n.renderToStaticNodeStream = D.renderToStaticNodeStream, $n.renderToReadableStream = v.renderToReadableStream, $n;
}
var il = Ul();
const cl = (D) => {
  const {
    onClose: v,
    children: k,
    open: P = !1,
    className: f = "",
    innerClass: F = ""
  } = D;
  let B = null, $ = null, b, x = "";
  return F && (x = F), P && (B = k, b = "open", $ = /* @__PURE__ */ w.jsx("div", { className: `common-drawer-outer ${f}`, onClick: v })), /* @__PURE__ */ w.jsxs(ul, { children: [
    $,
    /* @__PURE__ */ w.jsx("div", { className: `${x} common-drawer-inner ${b}`, children: B })
  ] });
}, Hl = ({ pageMeta: D, updatePageMetaState: v }) => {
  const k = (B, $) => {
    v($, B.target.value);
  }, { name: P = "", status: f = "", slug: F = "" } = D;
  return /* @__PURE__ */ w.jsxs("div", { className: "drawer-contents", children: [
    /* @__PURE__ */ w.jsx("div", { className: "drawer-contents__option", children: /* @__PURE__ */ w.jsxs("label", { children: [
      "Page Name:",
      /* @__PURE__ */ w.jsx("br", {}),
      /* @__PURE__ */ w.jsx(
        "input",
        {
          className: "drawer-contents__input",
          name: "name",
          onChange: (B) => k(B, "name"),
          value: P
        }
      )
    ] }) }),
    /* @__PURE__ */ w.jsx("div", { className: "drawer-contents__option", children: /* @__PURE__ */ w.jsxs("label", { children: [
      "Page Status (drafts are only visible to admins):",
      /* @__PURE__ */ w.jsxs(
        "select",
        {
          name: "status",
          className: "base-form__select drawer-contents__input",
          onChange: (B) => k(B, "status"),
          value: f,
          children: [
            /* @__PURE__ */ w.jsx("option", { value: "draft", children: "Draft" }),
            /* @__PURE__ */ w.jsx("option", { value: "published", children: "Published" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ w.jsx("div", { className: "drawer-contents__option", children: /* @__PURE__ */ w.jsxs("label", { children: [
      "Page Url:",
      /* @__PURE__ */ w.jsx("br", {}),
      /* @__PURE__ */ w.jsx(
        "input",
        {
          className: "drawer-contents__input",
          name: "slug",
          onChange: (B) => k(B, "slug"),
          value: F
        }
      ),
      /* @__PURE__ */ w.jsx(
        "div",
        {
          style: { fontSize: "0.8em", color: "#dddddd", paddingTop: 4 },
          children: 'Set to "/" to make this homepage'
        }
      )
    ] }) })
  ] });
}, Vn = Il(null), sl = (D, v, k) => (P) => {
  const f = { ...v, [D]: P };
  k(f);
}, Wl = (D, v, k = "children") => {
  const P = { ...D };
  let f = (F) => {
    const B = { ...D.editorState };
    B[k] && (B[k] = [...B[k]]), B[k][v].props = {
      ...B[k][v].props,
      ...F
    }, D.setState(B);
  };
  return P.setState = f, P.editorState = D.editorState[k][v].props, P;
}, ll = (D) => {
  var Tt, Ke, it;
  const {
    sectionName: v = "children",
    tagName: k = "div",
    isRoot: P = !1,
    iframeRef: f,
    editing: F = void 0,
    editorOnly: B,
    ...$
  } = D, [b, x] = fr(!1), [Z, R] = fr({}), L = us(Vn), K = Wr.useRef(null), [J, Re] = fr(null), [W, O] = fr(null), [ue, Ne] = fr(!1), ke = Wr.useRef({}), [Ce, Pe] = fr({}), ie = Wr.useRef(null), [rt, ve] = fr(""), Oe = (G) => (q) => {
    G == 0 && (ke.current = {}), ke.current[G] != q && (ke.current[G] = q);
  }, Q = (G) => Z[G], X = (G, q) => {
    R({ ...Z, [G]: q });
  }, ye = ((G) => Object.keys(G).sort(
    (q, ce) => G[q].displayName > G[ce].displayName ? 1 : -1
  ))(L.componentList), {
    editorState: Le = { [v]: [] },
    previewing: ar,
    renderFlags: Ot,
    editorOptions: ee
  } = L;
  let {
    editing: Qe
  } = L;
  F !== void 0 && (Qe = F);
  let Ct = Le[v], xe = Le[v] ? Le[v] : [], Ae = null;
  const jt = (G) => (q) => {
    let ce = { ...Le, [v]: [...xe] };
    q.preventDefault(), q.stopPropagation(), ce[v].splice(G, 1), L.setState(ce, v);
  }, Et = (G) => (q) => {
    let ce = { ...Le, [v]: [...xe] };
    q.preventDefault(), q.stopPropagation();
    const ae = xe[G];
    G != 0 && (ce[v][G] = ce[v][G - 1], ce[v][G - 1] = ae, L.setState(ce, v));
  }, ze = (G) => (q) => {
    let ce = { ...Le, [v]: [...xe] };
    q.preventDefault(), q.stopPropagation();
    const ae = xe[G];
    G != xe.length - 1 && (ce[v][G] = ce[v][G + 1], ce[v][G + 1] = ae, L.setState(ce, v));
  };
  if (Ct) {
    const G = zl(L, Oe, Qe);
    Ae = Nl(
      {
        componentData: Ct,
        renderFlags: Ot,
        editing: Qe,
        context: L,
        moveUp: Et,
        moveDown: ze,
        currentChildren: xe,
        removeComponent: jt,
        getComp: G,
        buttonRenderState: (q) => [Q(q), (ce) => X(q, ce)],
        sectionName: v
      }
    );
  }
  const { componentList: je, viewportDimensions: $e } = L, ht = (G) => {
    let q = { ...Le, [v]: [...xe] };
    x(!1);
    let ce = G;
    ce || (ce = G || ye[0]), q[v].push({ comp: ce, props: {} }), L.setState(q, v);
  };
  let at = null;
  Qe && !Ot.noAdd && (at = /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx("div", { className: "unb-comp-section__add-component", onClick: () => x(!0) }),
    /* @__PURE__ */ w.jsxs(cl, { open: b, className: "component-drawer", onClose: () => x(!1), children: [
      /* @__PURE__ */ w.jsx("h1", { className: "component-drawer__h1", children: "Insert Component" }),
      /* @__PURE__ */ w.jsxs("label", { children: [
        "Search:",
        /* @__PURE__ */ w.jsx("input", { placeholder: "search", type: "text", value: rt, onChange: (G) => {
          ve(G.target.value);
        } })
      ] }),
      /* @__PURE__ */ w.jsx("div", { className: "componeent-drawer__component-list", children: ye.map((G) => {
        const q = je[G], ce = q.displayName ? q.displayName : q, ae = q.description;
        return rt && ce.toLowerCase().indexOf(rt.toLowerCase()) == -1 ? null : /* @__PURE__ */ w.jsxs("div", { onClick: () => ht(G), className: "component-drawer__component", children: [
          ce,
          ae && /* @__PURE__ */ w.jsx("div", { className: "component-drawer__description", children: ae })
        ] }, G);
      }) })
    ] })
  ] })), Si(
    () => {
      var G, q;
      if (K && K.current) {
        let ce = f.current, ae = [];
        if ((G = ee == null ? void 0 : ee.pageOptions) != null && G.scripts && ((q = ee.pageOptions.scripts) == null ? void 0 : q.length) > 0)
          for (let fe of ee.pageOptions.scripts) {
            const te = () => new Promise((Ve) => {
              const we = ce.contentDocument.createElement("script");
              we.src = fe, ce.contentDocument.head.appendChild(we), we.onload = () => Ve(), we.onerror = () => Ve();
            });
            ae.push(te);
          }
        new Promise(async (fe) => {
          for (let te = 0; te < ae.length; te++)
            await ae[te]();
          fe(!0);
        }).then(
          () => {
            var fe, te;
            (fe = ee == null ? void 0 : ee.pageOptions) != null && fe.js && ((te = ee.pageOptions.js) == null ? void 0 : te.length) > 0 && ee.pageOptions.js.forEach((Ve) => {
              const we = ce.contentDocument.createElement("script");
              we.textContent = Ve, ce.contentDocument.body.appendChild(we);
            });
          }
        );
      }
    },
    [K.current]
  ), Si(() => {
    if (f && f.current && $e) {
      const { zoom: G, width: q, height: ce } = $e;
      f.current.style.zoom = `${G / 100}`, f.current.contentDocument.body.style.minWidth = `${q - 20 / G * 100}px`, f.current.contentDocument.body.style.minHeight = `${ce - 20 / G * 100}px`;
    }
  }, [J, $e]), Wr.useEffect(() => {
    if (!ke.current) return;
    const G = () => {
      var q;
      if (ke.current) {
        ke.current[0];
        for (let ce in ke.current) {
          const ae = ke.current[ce];
          if (!ae) continue;
          let fe = ae.nextSibling;
          const te = { x: 1e9, y: 1e9, bottom: -1e7, right: -1e7 };
          for (; fe && !(fe != null && fe.classList.contains("content-section-controls__wrapper")) && !(fe != null && fe.classList.contains("unb-comp-section__add-component")); ) {
            const we = fe == null ? void 0 : fe.getBoundingClientRect();
            we && (te.x = Math.min(te.x, we.left), te.y = Math.min(te.y, we.top), te.bottom = Math.max(te.bottom, we.top + we.height), te.right = Math.max(te.right, we.left + we.width)), fe = fe == null ? void 0 : fe.nextSibling;
          }
          ae.style.width = `${te.right - te.x}px`, ae.style.height = `${te.bottom - te.y}px`, ae.style.position = "absolute";
          const Ve = (q = ae == null ? void 0 : ae.parentElement) == null ? void 0 : q.getBoundingClientRect();
          Ve && (ae.style.left = `${te.x - Ve.x}px`, ae.style.top = `${te.y - Ve.y}px`);
        }
      }
    };
    return window.addEventListener("resize", G), setTimeout(G, 10), () => {
      window.removeEventListener("resize", G);
    };
  }, [
    Le,
    ke.current,
    $e,
    J,
    K.current,
    Qe,
    ue,
    W
  ]), Si(() => {
    ie.current != null && ie.current.addEventListener(
      "mousedown",
      (G) => {
        G.preventDefault(), G.stopPropagation();
        let q = { x: G.clientX, y: G.clientY };
        $e.width, $e.height, $e.width, $e.height;
        let ce = (te) => {
          te.preventDefault(), te.stopPropagation();
          let Ve = { x: te.clientX - q.x, y: te.clientY - q.y };
          q = { x: te.clientX, y: te.clientY }, L.updateViewportDimension("width", Ve.x, !0), L.updateViewportDimension("height", Ve.y, !0);
        }, ae = (te) => {
          te.preventDefault(), te.stopPropagation(), te.buttons == 1 ? ce(te) : fe(te);
        }, fe = (te) => {
          te.preventDefault(), te.stopPropagation();
          let Ve = { x: te.clientX - q.x, y: te.clientY - q.y };
          q = { x: te.clientX, y: te.clientY }, L.updateViewportDimension("width", Ve.x, !0), L.updateViewportDimension("height", Ve.y, !0), -window.removeEventListener("mousemove", ce), window.removeEventListener("mouseup", fe), window.removeEventListener("mousein", ae);
        };
        window.addEventListener("mousemove", ce), window.addEventListener("mouseup", fe), window.addEventListener("mousein", ae);
      }
    );
  }, []);
  let lt = /* @__PURE__ */ w.jsx(Vl, { editing: Qe, children: /* @__PURE__ */ w.jsxs(k, { ...$, children: [
    Ae,
    at
  ] }) }), nt = (Tt = ee == null ? void 0 : ee.pageOptions) == null ? void 0 : Tt.renderInIframe;
  if (nt === void 0 && (nt = !0), P && nt) {
    let G = "<!doctype HTML>", q;
    (Ke = ee == null ? void 0 : ee.pageOptions) != null && Ke.href ? (q = ee.pageOptions.href, G = void 0) : (it = ee == null ? void 0 : ee.pageOptions) != null && it.pageHtml && (G = ee.pageOptions.pageHtml, q = void 0), lt = /* @__PURE__ */ w.jsxs("div", { className: "page-editor__viewport-holder", style: { width: $e.width * $e.zoom / 100, height: $e.height * $e.zoom / 100 }, children: [
      /* @__PURE__ */ w.jsx(
        "iframe",
        {
          className: "page-editor__viewport-iframe",
          src: q,
          srcDoc: G,
          onLoad: async (ce) => {
            var te, Ve, we, ot, Ye, Lt;
            const ae = ce.currentTarget;
            if (!ae.contentDocument || !ae.contentDocument.head) return;
            if (f && f.current != ae && (f.current = ae), !ae.contentDocument.head != K.current) {
              K.current = ae.contentDocument.head;
              const Bt = document.createElement("style"), Jt = (await import("./unb-editor-BbKoEqEE.mjs")).default;
              Bt.textContent = Jt, ae.contentDocument.head.appendChild(Bt), (te = ee == null ? void 0 : ee.pageOptions) != null && te.css && ((Ve = ee.pageOptions.css) == null ? void 0 : Ve.length) > 0 && ee.pageOptions.css.forEach((Be) => {
                const dt = document.createElement("style");
                dt.textContent = Be, ae.contentDocument.head.appendChild(dt);
              }), (we = ee == null ? void 0 : ee.pageOptions) != null && we.stylesheets && ((ot = ee.pageOptions.stylesheets) == null ? void 0 : ot.length) > 0 && ee.pageOptions.stylesheets.forEach((Be) => {
                const dt = document.createElement("link");
                dt.rel = "stylesheet", dt.href = Be, ae.contentDocument.head.appendChild(dt);
              });
            }
            let fe;
            (Ye = ee == null ? void 0 : ee.pageOptions) != null && Ye.documentRoot ? typeof ee.pageOptions.documentRoot == "function" ? fe = ee.pageOptions.documentRoot(ae) : typeof ee.pageOptions.documentRoot == "string" ? fe = ae.contentDocument.querySelector(ee.pageOptions.documentRoot) : ee.pageOptions.documentRoot instanceof HTMLElement && (fe = ee.pageOptions.documentRoot) : fe = ae.contentDocument.body, J != fe && ((Lt = ee == null ? void 0 : ee.pageOptions) != null && Lt.clearContainer && (fe.innerHTML = ""), Re(fe), Ne(!0));
          },
          children: J && Dl(lt, J)
        },
        "iframe"
      ),
      /* @__PURE__ */ w.jsx("div", { ref: ie, className: "page-editor__viewport-handle" })
    ] });
  }
  return lt;
}, Nl = ({ componentData: D, renderFlags: v, editing: k, context: P, moveUp: f, moveDown: F, currentChildren: B, removeComponent: $, getComp: b, buttonRenderState: x, sectionName: Z }) => D.map((R, L) => {
  let K = null;
  return k && P.componentList[R.comp] && (P.componentList[R.comp].displayName ? P.componentList[R.comp].displayName : R.comp, K = [], v.noRearrange || (L > 0 && K.push(
    /* @__PURE__ */ w.jsx("button", { onClick: f(L), children: "⬆️" }, `${R.comp}-up-button`)
  ), L < B.length - 1 && K.push(
    /* @__PURE__ */ w.jsx(
      "button",
      {
        onClick: F(L),
        children: "⬇️"
      },
      `${R.comp}-down-button`
    )
  )), v.noAdd || K.push(
    /* @__PURE__ */ w.jsx(
      "button",
      {
        className: "content-section-controls__delete-button",
        onClick: $(L),
        children: "X"
      },
      `${R.comp}-delete-button`
    )
  )), b({ data: R, key: L, optionButtons: K, buttonRenderState: x(L), sectionName: Z });
}), zl = (D, v, k = void 0) => ({ data: P, key: f, optionButtons: F, buttonRenderState: B, sectionName: $ }) => {
  const b = D.componentList[P.comp], [x, Z] = B;
  if (!b) return null;
  const R = D.componentList[P.comp].comp;
  let L = P.props;
  return k === void 0 && (k = D.editing), /* @__PURE__ */ w.jsxs(Vn.Provider, { value: { ...D, ...Wl(D, f, $), editing: k }, children: [
    /* @__PURE__ */ w.jsx(
      $l,
      {
        optionButtons: F,
        componentName: b.displayName,
        editing: k,
        previewing: D.previewing,
        buttonRender: x,
        sectionName: $,
        setWrapperDomNode: v(f)
      },
      f + "-slot-wrapper"
    ),
    /* @__PURE__ */ w.jsx(
      R,
      {
        ...L,
        editing: k,
        componentName: b.displayName,
        previewing: D.previewing,
        sectionName: $,
        setButtonRender: Z,
        children: P.props[$]
      },
      f + "-comp"
    )
  ] }, f + "-slot-provider");
}, $l = (D) => {
  const { editing: v, previewing: k, buttonRender: P, sectionName: f, setWrapperDomNode: F } = D;
  if (!v)
    return F(null), D.children;
  let B = null;
  P && typeof P == "function" && (B = P(), B && (B = /* @__PURE__ */ w.jsx("div", { className: "content-section-controls__extra-buttons-wrapper", children: /* @__PURE__ */ w.jsx("div", { className: "content-section-controls__extra-buttons", children: B }) })));
  const $ = /* @__PURE__ */ w.jsxs("div", { className: "content-section-controls__inner", children: [
    /* @__PURE__ */ w.jsx("strong", { className: "content-section-controls__component-type", children: D.componentName }),
    D.optionButtons,
    B
  ] });
  return /* @__PURE__ */ w.jsxs("div", { className: "content-section-controls__wrapper", ref: F, children: [
    $,
    D.children
  ] });
}, Vl = (D) => {
  const { editing: v, children: k, setWrapperDomNode: P, key: f } = D;
  return v ? /* @__PURE__ */ w.jsx("div", { className: "content-section-controls__wrapper --unb-content-section", ref: P, children: k }) : /* @__PURE__ */ w.jsx(w.Fragment, { children: k });
}, Yl = ({ color: D = "white" }) => /* @__PURE__ */ w.jsxs("svg", { width: "24px", height: "24px", strokeWidth: "1.5", viewBox: "0 0 24 24", fill: "none", stroke: D, xmlns: "http://www.w3.org/2000/svg", color: "#000000", children: [
  /* @__PURE__ */ w.jsx("path", { d: "M9 9L4 4M4 4V8M4 4H8", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ w.jsx("path", { d: "M15 9L20 4M20 4V8M20 4H16", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ w.jsx("path", { d: "M9 15L4 20M4 20V16M4 20H8", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ w.jsx("path", { d: "M15 15L20 20M20 20V16M20 20H16", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
] }), Gl = ({ color: D = "#ffffff" }) => /* @__PURE__ */ w.jsxs("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", strokeWidth: "1.5", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: D, stroke: D, children: [
  /* @__PURE__ */ w.jsx("path", { d: "M11 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V12", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ w.jsx("path", { d: "M2 7L22 7", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ w.jsx("path", { d: "M5 5.01L5.01 4.99889", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ w.jsx("path", { d: "M8 5.01L8.01 4.99889", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ w.jsx("path", { d: "M11 5.01L11.01 4.99889", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ w.jsx("path", { d: "M21.6665 16.6667C21.0477 15.097 19.6346 14 17.9903 14C16.2319 14 14.7378 15.2545 14.1969 17", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ w.jsx("path", { d: "M19.9952 16.7723H21.4002C21.7316 16.7723 22.0002 16.5036 22.0002 16.1723V14.55", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ w.jsx("path", { d: "M14.3337 19.3333C14.9525 20.903 16.3657 22 18.01 22C19.7684 22 21.2624 20.7455 21.8033 19", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ w.jsx("path", { d: "M16.005 19.2277H14.6001C14.2687 19.2277 14.0001 19.4964 14.0001 19.8277V21.45", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
] }), Xl = (D) => {
  const [v, k] = fr({
    editorState: D.pageData ? D.pageData : { children: [] },
    pageMetaState: D.pageMeta ? D.pageMeta : { name: "", slug: "", status: "draft" },
    preview: !1,
    changes: !1,
    advancedOpen: !1,
    pageEditorDrawerOpen: !1
  }), [P, f] = fr({ width: 1200, height: 800, zoom: 100 }), F = nr.useRef(null), B = nr.useRef({ width: 0, height: 0, viewport: { width: P.width, height: P.height } }), $ = () => {
    var Q;
    (Q = F.current) != null && Q.requestFullscreen && (document.fullscreenElement ? document.exitFullscreen() : F.current.requestFullscreen());
  }, b = (Q, X, De = !1) => {
    B.current.viewport[Q] = parseInt(X), f((ye) => De ? { ...ye, [Q]: ye[Q] + parseInt(X) } : { ...ye, [Q]: parseInt(X) });
  }, x = nr.useRef(null);
  nr.useEffect(() => {
    if (window.addEventListener("beforeunload", (Q) => {
      if (v.changes) {
        var X = "It looks like you have been editing something. If you leave before saving, your changes will be lost.";
        return (Q || window.event).returnValue = X, X;
      }
    }), x.current) {
      const X = x.current.getBoundingClientRect();
      B.current.viewport.width = X.width, B.current.viewport.height = X.height;
    }
    window.addEventListener(
      "resize",
      () => {
        F.current;
      }
    );
  }, []);
  const Z = v.editorState, { preview: R } = v, {
    streams: L,
    renderFlags: K = {},
    exportState: J,
    editorOptions: Re
  } = D;
  let W = uu;
  K && (W = { ...W, ...K });
  const O = (Q) => {
    k({ ...v, ...Q, changes: !0 });
  }, ue = () => {
    k({ ...v, pageEditorDrawerOpen: !v.pageEditorDrawerOpen });
  }, Ne = (Q, X) => {
    k({
      ...v,
      pageMetaState: {
        ...v.pageMetaState,
        [Q]: X
      }
    });
  }, ke = () => Z.children.map((Q) => {
    const X = D.componentList[Q.comp];
    if (!X) return "";
    const De = D.componentList[Q.comp].comp;
    let ye = Q.props;
    return {
      comp: Q.comp,
      markup: il.renderToString(
        /* @__PURE__ */ w.jsx(
          De,
          {
            ...ye,
            editing: !1,
            componentName: X.displayName,
            previewing: !0,
            setButtonRender: (Le) => {
            },
            children: Q.children
          }
        )
      ).replaceAll(/[class|style]\=\"\""/, "")
    };
  }), Ce = (Q = !1) => Q ? ke() : il.renderToString(
    /* @__PURE__ */ w.jsx(
      Vn.Provider,
      {
        value: {
          setState: sl("editorState", v, O),
          editorState: Z,
          componentList: D.componentList,
          editorOptions: { ...Re, pageOptions: { ...Re.pageOptions, renderInIframe: !1 } },
          plugins: D.plugins,
          editing: !1,
          previewing: !0,
          renderFlags: W,
          streams: L,
          viewportDimensions: P,
          updateViewportDimension: b
        },
        children: /* @__PURE__ */ w.jsx(ll, { isRoot: !0 })
      }
    )
  );
  J && J(() => v, k, Ce);
  const Pe = () => {
    if (!D.onSave) {
      console.log("No onSave function connected to app");
      return;
    }
    let Q = [];
    W.individualComponents && (Q = Ce(!0));
    const X = Ce(), De = v.editorState, ye = v.pageMetaState, Le = { pageState: De, pageMarkup: X, metaState: ye, componentsMarkup: Q };
    D.onSave && D.onSave(Le);
  };
  let ie = null;
  D.onSave && (ie = /* @__PURE__ */ w.jsxs(
    "a",
    {
      className: "page-editor__button",
      onClick: Pe,
      "data-testid": "save-page-button",
      children: [
        "Save ",
        v.changes ? "*" : "",
        " "
      ]
    }
  ));
  let rt = null;
  L && (rt = L.getComponent());
  let ve = "";
  W.inlineOptionBar && (ve += "page-editor__menu--inline");
  const Oe = (Q) => {
    if (Q && F.current != Q) {
      const X = Q.getBoundingClientRect();
      B.current.width = X.width, B.current.height = X.height;
    }
    F.current = Q;
  };
  return /* @__PURE__ */ w.jsxs("div", { ref: Oe, className: "page-editor__inner", children: [
    /* @__PURE__ */ w.jsx(
      cl,
      {
        open: v.pageEditorDrawerOpen,
        onClose: ue,
        children: /* @__PURE__ */ w.jsx(
          Hl,
          {
            pageMeta: v.pageMetaState,
            updatePageMetaState: Ne
          }
        )
      }
    ),
    /* @__PURE__ */ w.jsxs("div", { className: "page-editor__menu " + ve, children: [
      /* @__PURE__ */ w.jsx(
        "a",
        {
          className: "page-editor__button",
          onClick: (Q) => {
            Q.preventDefault(), Q.stopPropagation(), k({ ...v, preview: !R });
          },
          children: R ? "Edit" : "Preview"
        }
      ),
      ie,
      /* @__PURE__ */ w.jsx("a", { className: "page-editor__button", title: "Refresh Page", onClick: () => {
        var Q, X;
        (X = (Q = x == null ? void 0 : x.current) == null ? void 0 : Q.contentWindow) == null || X.location.reload();
      }, children: /* @__PURE__ */ w.jsx(Gl, {}) }),
      /* @__PURE__ */ w.jsx("a", { className: "page-editor__button", title: "Full Screen", onClick: $, children: /* @__PURE__ */ w.jsx(Yl, {}) }),
      /* @__PURE__ */ w.jsx("a", { className: "page-editor__button", onClick: ue, children: "Options" }),
      /* @__PURE__ */ w.jsxs("div", { className: "page-editor__dimensions", children: [
        /* @__PURE__ */ w.jsx("input", { type: "number", step: 100, onChange: (Q) => b("width", parseInt(Q.target.value)), value: P.width }),
        /* @__PURE__ */ w.jsx("strong", { children: "px" }),
        "X",
        /* @__PURE__ */ w.jsx("input", { type: "number", step: 100, onChange: (Q) => b("height", parseInt(Q.target.value)), value: P.height }),
        /* @__PURE__ */ w.jsx("strong", { children: "px" }),
        /* @__PURE__ */ w.jsx("input", { type: "number", step: 20, min: 20, max: 200, onChange: (Q) => b("zoom", parseInt(Q.target.value)), value: P.zoom }),
        /* @__PURE__ */ w.jsx("strong", { children: "%" })
      ] })
    ] }),
    /* @__PURE__ */ w.jsxs(
      Vn.Provider,
      {
        value: {
          setState: sl("editorState", v, O),
          editorState: Z,
          componentList: D.componentList,
          plugins: D.plugins,
          editing: !R,
          previewing: R,
          renderFlags: W,
          streams: L,
          contextualPageData: D.contextualPageData,
          editorOptions: Re,
          viewportDimensions: P,
          updateViewportDimension: b
        },
        children: [
          /* @__PURE__ */ w.jsx(ll, { isRoot: !0, iframeRef: x }, "root-content-section"),
          /* @__PURE__ */ w.jsx("div", { children: /* @__PURE__ */ w.jsx(rt, {}) })
        ]
      },
      "root-provider"
    )
  ] });
}, or = (D = null) => {
  let v = us(Vn);
  if (!D) return v;
  let k = v.editorState, P = [];
  D.indexOf(".") > -1 ? P = D.split(".") : P = [D];
  for (let F = 0; F < P.length && (k = k[P[F]], !!k); F++)
    ;
  return {
    ...v,
    setState: (F) => {
      let B = { ...v.editorState };
      for (let $ = 0; $ < P.length; $++)
        $ === P.length - 1 ? B[P[$]] = F : (B[P[$]] || (B[P[$]] = {}), B = { ...B[P[$]] });
      v.setState(B);
    },
    editorState: k
  };
}, pu = (D) => (v) => {
  const { editorState: k, editing: P, setState: f } = or(v.sectionName);
  return /* @__PURE__ */ w.jsx(D, { ...k, editing: P, setState: f, ...v });
}, hu = (D = null) => or(D).editorState, vu = (D = null, v) => ({ ...or(D).editorState, ...v }), mu = (D) => (v) => /* @__PURE__ */ w.jsx(Vn.Consumer, { children: (k) => /* @__PURE__ */ w.jsx(D, { ...v, editorContext: k }) }), fl = (D) => {
  const {
    sectionName: v,
    tagName: k = "div",
    label: P = null,
    min: f,
    max: F,
    step: B = 1,
    hidden: $ = !0,
    ...b
  } = D;
  let { current: x = typeof f == "number" ? f : 0 } = D;
  const Z = k, { editorState: R, editing: L, setState: K } = or();
  R[v] !== void 0 && (x = R[v]);
  const J = (Re) => {
    let W = parseFloat(Re.currentTarget.value);
    W || (W = 0), f !== void 0 && W < f && (W = f), F !== void 0 && W > F && (W = F), K({ ...R, [v]: W });
  };
  return L ? P ? /* @__PURE__ */ w.jsx(Z, { ...b, children: /* @__PURE__ */ w.jsxs("label", { children: [
    /* @__PURE__ */ w.jsx("span", { children: P }),
    /* @__PURE__ */ w.jsx(
      "input",
      {
        value: x,
        type: "number",
        onChange: J,
        min: f,
        max: F,
        step: B
      }
    )
  ] }) }, "num-input-wrapper") : /* @__PURE__ */ w.jsx(Z, { children: /* @__PURE__ */ w.jsx(
    "input",
    {
      value: x,
      type: "number",
      onChange: J,
      min: typeof f == "number" ? f : void 0,
      max: typeof F == "number" ? F : void 0,
      step: typeof B == "number" ? B : void 0
    },
    "num-input"
  ) }, "num-input-wrapper") : $ ? null : /* @__PURE__ */ w.jsx(Z, { ...b, children: R[v] });
}, El = (D) => {
  const { sectionName: v, children: k } = D, P = us(Vn), { previewing: f, editing: F } = P, B = { ...P };
  return B.editorState = {}, P.editorState[v] && (B.editorState = P.editorState[v]), B.setState = sl(
    v,
    P.editorState,
    P.setState
  ), /* @__PURE__ */ w.jsx(Vn.Provider, { value: B, children: k });
}, Zl = (D) => {
  const {
    sectionName: v,
    current: k,
    label: P,
    hidden: f = !1,
    tagName: F = "div",
    ...B
  } = D, $ = F, { editorState: b, editing: x, setState: Z } = or(), R = (L) => {
    Z({ ...b, [v]: L.currentTarget.checked });
  };
  return x ? /* @__PURE__ */ w.jsx($, { children: /* @__PURE__ */ w.jsxs("label", { children: [
    /* @__PURE__ */ w.jsx("span", { children: P }),
    /* @__PURE__ */ w.jsx(
      "input",
      {
        type: "checkbox",
        onChange: R,
        checked: k
      }
    )
  ] }) }) : f ? null : /* @__PURE__ */ w.jsx($, { ...B, children: k ? "true" : "false" });
}, Jl = (D) => {
  const { children: v, editing: k } = D, { editorState: P, editing: f } = or(), F = k || f;
  return /* @__PURE__ */ w.jsx(Tl, { hide: !F, children: v });
}, gu = (D) => {
  const { children: v, editing: k } = D, { editorState: P, editing: f } = or(), F = k || f;
  return /* @__PURE__ */ w.jsx(Tl, { hide: F, children: v });
}, Tl = (D) => {
  const { children: v, hide: k = !1 } = D;
  return k ? null : /* @__PURE__ */ w.jsx(w.Fragment, { children: v });
}, Ql = (D) => {
  const { text: v = "", count: k } = D;
  return /* @__PURE__ */ w.jsx("div", { className: "section__column", children: /* @__PURE__ */ w.jsx(ll, {}) });
}, Kl = (D) => {
  const { count: v = 3, responsive: k = !1, setButtonRender: P } = D;
  let f = Ql, F = [], B;
  Wr.useEffect(() => {
    P(() => /* @__PURE__ */ w.jsxs(Wr.Fragment, { children: [
      /* @__PURE__ */ w.jsx(
        fl,
        {
          hidden: !0,
          label: "Number of Columns: ",
          sectionName: "count",
          current: v,
          min: 2,
          max: 6
        }
      ),
      /* @__PURE__ */ w.jsx(
        Zl,
        {
          label: "Responsive Columns",
          sectionName: "responsive"
        }
      )
    ] }));
  }, []), v && (B = `section__inner-div column-section ${k ? "--responsive" : "--fixed"} --cols-${v}`);
  for (var $ = 0; $ < v; $++) {
    let b = "column" + $;
    F.push(
      /* @__PURE__ */ w.jsx(
        El,
        {
          sectionName: b,
          children: /* @__PURE__ */ w.jsx(f, { ...D })
        },
        $
      )
    );
  }
  return /* @__PURE__ */ w.jsxs(Wr.Fragment, { children: [
    /* @__PURE__ */ w.jsx(Jl, { children: /* @__PURE__ */ w.jsx("div", { className: "section__columns__heading" }) }),
    /* @__PURE__ */ w.jsx("section", { className: "section", children: /* @__PURE__ */ w.jsx("div", { className: B, children: F }) })
  ] });
}, wl = (D) => {
  const {
    value: v = "yay",
    sectionName: k,
    label: P,
    tagName: f = "div",
    hidden: F = !1,
    inputClass: B = {},
    children: $ = null,
    ...b
  } = D, x = f, { editorState: Z, editing: R, setState: L } = or(), K = (J) => {
    L({ ...Z, [k]: J.currentTarget.value });
  };
  return R ? P ? (
    // @ts-ignore
    /* @__PURE__ */ w.jsx(x, { ...B, ...b, children: /* @__PURE__ */ w.jsxs("label", { children: [
      /* @__PURE__ */ w.jsx("span", { children: P }),
      /* @__PURE__ */ w.jsx("input", { type: "text", onChange: K, value: Z[k] })
    ] }) })
  ) : (
    // @ts-ignore
    /* @__PURE__ */ w.jsx(x, { ...B, ...b, children: /* @__PURE__ */ w.jsx("input", { type: "text", onChange: K, value: Z[k] }) })
  ) : F ? null : (
    // @ts-ignore
    /* @__PURE__ */ w.jsxs(x, { ...B, ...b, children: [
      Z[k],
      $
    ] })
  );
}, ql = (D) => {
  const {
    sectionName: v,
    options: k,
    current: P,
    optionLabels: f = null,
    label: F = !1,
    hidden: B = !1,
    tagName: $ = "div",
    selectList: b = !1,
    ...x
  } = D, Z = $, { editorState: R, editing: L, setState: K } = or(), J = (W) => {
    K({ ...R, [v]: W.currentTarget.value });
  };
  let Re = "";
  return b ? Re = b : Array.isArray(k) ? (Re = [], k.forEach((W, O) => {
    const ue = f ? f[O] : W;
    Re.push(
      /* @__PURE__ */ w.jsx("option", { value: W, className: "", children: ue }, O)
    );
  })) : k && (Re = [], Object.entries(k).forEach(([W, O], ue) => {
    let Ne = O, ke = W;
    f && (ke = f[W]), Re.push(
      /* @__PURE__ */ w.jsx("option", { value: Ne, className: "", children: ke }, ue)
    );
  })), L ? F ? /* @__PURE__ */ w.jsx(Z, { children: /* @__PURE__ */ w.jsxs("label", { children: [
    /* @__PURE__ */ w.jsx("span", { children: F }),
    /* @__PURE__ */ w.jsx("select", { onChange: J, value: P, children: Re })
  ] }) }) : /* @__PURE__ */ w.jsx(Z, { children: /* @__PURE__ */ w.jsx("select", { onChange: J, value: P, children: Re }) }) : B ? null : /* @__PURE__ */ w.jsx(Z, { ...x, children: R[v] });
}, eu = ({ bem: D, bemPrefix: v, bemName: k, classFunction: P }) => new Proxy(
  { __compCache: {}, context: nr.createContext({ bem: D, bemPrefix: v }) },
  {
    get: function(f, F) {
      const B = F;
      if (F == "BEM")
        return f.BEM || (f.BEM = f.context.Provider), f.BEM;
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
      ].includes(B))
        throw new Error("Invalid tagname for CE");
      if (f.__compCache[B])
        return f.__compCache[B];
      const $ = D, b = v;
      f.__compCache[B] = (x) => {
        let { bem: Z, bemPrefix: R, bemName: L, sectionName: K } = x;
        const J = us(f.context);
        let Re = $, W = b;
        return typeof (J == null ? void 0 : J.bem) == "boolean" && Z === void 0 && (Re = J.bem), J != null && J.bemPrefix && R == null && (W = J.bemPrefix), /* @__PURE__ */ w.jsx(
          Rl,
          {
            tagName: B,
            bem: Re,
            bemPrefix: W,
            sectionName: K,
            bemName: L || K || void 0,
            classFunction: P,
            ...x
          }
        );
      };
    }
  }
), tu = eu({ bem: !0 }), Rl = ({
  placeholder: D = "",
  ref: v = null,
  className: k = "",
  sectionName: P = "",
  tagName: f = "div",
  number: F = !1,
  textOnly: B = !1,
  bem: $ = !1,
  bemName: b = "",
  allowHTMLEdit: x = !1,
  allowHTML: Z = !1,
  bemPrefix: R = "",
  classFunction: L = null,
  ...K
}) => {
  K = { ...K };
  const [J, Re] = fr(!1);
  b || (b = f);
  let W = D;
  D || (W = `${f} placeholder`);
  let O = P;
  P || (O = `${f}__index`);
  const ue = pl(null), Ne = or(O), ke = Ne == null ? void 0 : Ne.editorState, { editing: Ce = !1 } = Ne;
  let Pe = ke || null;
  const ie = pl(Pe), rt = (De) => {
    De.preventDefault(), De.stopPropagation();
    let ye = ue.current.innerHTML;
    if (console.log("curHtml", ye), F || B) {
      if (ye = ye.replace(/<[^>]*>?/gm, ""), F) {
        const Le = Number.parseInt(ye);
        ye = Le || 0;
      }
      ue.current.innerHTML = ye;
    }
    ye !== ie.current && (ie.current = ye, Ne.setState(ye));
  };
  Si(() => {
    if (!ie.current && K.children) {
      const De = il.renderToString(K.children);
      ie.current = De, Ne.setState(De);
    }
  }, [K.children]), ie.current != Pe && (ie.current = Pe);
  let ve = k;
  $ && (R ? ve = `${R}__${b} ${ve}` : ve = `${b} ${ve}`), L && (ve = L(f, K));
  const Oe = {};
  Ne.editing && (ve += " unbContentEditable", Oe.onBlur = rt, Oe["data-ph"] = W, Oe.ref = ue, Oe.contentEditable = !0, Oe.suppressContentEditableWarning = !0, J && (Oe.dangerouslySetInnerHTML = { __html: ie.current })), (!Ce || ie.current) && (Oe.dangerouslySetInnerHTML = { __html: ie.current }, K.children = void 0);
  let Q = f, X = {};
  if (f == "rawText")
    if (Ce)
      Q = "div", X = Oe.style ? { ...Oe.style } : {}, X.display = "inline-block", X.padding = 0, X.margin = 0, X.width = "auto", X.transform = "none", X.border = "none", X.boxShadow = "none", X.outline = "none", X.overflow = "visible", X.lineHeight = "inherit", X.fontFamily = "inherit", X.fontSize = "inherit", X.fontWeight = "inherit", X.fontStyle = "inherit", X.color = "inherit", X.backgroundColor = "inherit", X.textAlign = "inherit", X.textDecoration = "inherit", X.textTransform = "inherit", X.minWidth = "50px", X.minHeight = "100%", Oe.style = X;
    else
      return /* @__PURE__ */ w.jsx(w.Fragment, { children: ie.current });
  return /* @__PURE__ */ w.jsx(w.Fragment, { children: /* @__PURE__ */ w.jsx(
    Q,
    {
      className: ve,
      ...K,
      ...Oe
    },
    "ce"
  ) });
}, ru = (D) => {
  const {
    headingType: v = "h1",
    text: k = "",
    customClass: P = "",
    editing: f = !0,
    setButtonRender: F
  } = D, B = ["h1", "h2", "h3", "h4", "h5", "h6"];
  return Si(() => {
    F(() => /* @__PURE__ */ w.jsxs(ul, { children: [
      /* @__PURE__ */ w.jsx(
        ql,
        {
          sectionName: "headingType",
          options: B,
          label: "Heading Type"
        }
      ),
      /* @__PURE__ */ w.jsx(wl, { sectionName: "text", label: "Heading Text" }),
      /* @__PURE__ */ w.jsx(wl, { sectionName: "customClass", label: "Custom CSS Class" })
    ] }));
  }, []), /* @__PURE__ */ w.jsx("header", { children: /* @__PURE__ */ w.jsx(
    Rl,
    {
      sectionName: "text",
      tagName: v,
      placeholder: "Heading",
      className: P
    }
  ) });
}, nu = (D) => {
  const { text: v = "", customClass: k = "" } = D;
  return /* @__PURE__ */ w.jsx(tu.p, { sectionName: "text", className: k });
}, ou = (D) => {
  const { space: v = 10 } = D, { editing: k, setState: P } = or(), f = Wr.useRef(null), F = Wr.useRef({ startY: 0, startHeight: 0, mouseDown: !1 });
  let B = null;
  const $ = (R) => {
    R.target === f.current && (F.current.startY = R.clientY || R.touches[0].clientY, F.current.startHeight = v || 0, (!F.current.startHeight || F.current.startHeight < 0) && (F.current.startHeight = 0), F.current.mouseDown = !0);
  }, b = (R) => {
    if (!F.current.mouseDown) return;
    let K = (R.clientY || R.touches[0].clientY) - F.current.startY;
    const J = Math.max(0, F.current.startHeight + K);
    P({ space: J });
  }, x = (R) => {
    if (!F.current.mouseDown) return;
    let K = (R.clientY || R.touches[0].clientY) - F.current.startY;
    const J = Math.max(0, F.current.startHeight + K);
    P({ space: J }), F.current.mouseDown = !1;
  }, Z = () => {
    f.current && (f.current.removeEventListener("mousedown", $), f.current.removeEventListener("touchstart", $), f.current.removeEventListener("mousemove", b), f.current.removeEventListener("touchmove", b), f.current.removeEventListener("mouseup", x), f.current.removeEventListener("touchend", x), f.current.removeEventListener("mouseleave", x), f.current.removeEventListener("touchcancel", x), f.current.removeEventListener("touchleave", x));
  };
  if (Wr.useEffect(() => Z, []), k) {
    const R = (L) => {
      L != f.current && (Z(), L && (L.addEventListener("mousedown", $), L.addEventListener("touchstart", $), L.addEventListener("mousemove", b), L.addEventListener("touchmove", b), L.addEventListener("mouseup", x), L.addEventListener("touchend", x), L.addEventListener("mouseleave", x), L.addEventListener("touchcancel", x), L.addEventListener("touchleave", x)), f.current = L);
    };
    B = /* @__PURE__ */ w.jsx("div", { ref: R, style: { height: v }, className: "spacer-handle", children: /* @__PURE__ */ w.jsx(
      fl,
      {
        sectionName: "space",
        className: "spacer-input",
        current: v,
        max: 1e3,
        min: 0
      },
      "num-select"
    ) });
  } else
    return /* @__PURE__ */ w.jsx("div", { style: { height: `${v}px` } });
  return /* @__PURE__ */ w.jsx(Wr.Fragment, { children: /* @__PURE__ */ w.jsx("div", { className: "unbeditor-spacer", style: { height: `${v}px` }, children: B }) });
}, kl = {
  "column-with-text": { displayName: "Columns With Text", comp: Kl },
  heading: { displayName: "Heading", comp: ru },
  paragraph: { displayName: "Paragraph", comp: nu },
  spacer: { displayName: "Spacer", comp: ou }
};
var Ea = {}, Cl;
function au() {
  if (Cl) return Ea;
  Cl = 1;
  var D = Pl;
  if (process.env.NODE_ENV === "production")
    Ea.createRoot = D.createRoot, Ea.hydrateRoot = D.hydrateRoot;
  else {
    var v = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Ea.createRoot = function(k, P) {
      v.usingClientEntryPoint = !0;
      try {
        return D.createRoot(k, P);
      } finally {
        v.usingClientEntryPoint = !1;
      }
    }, Ea.hydrateRoot = function(k, P, f) {
      v.usingClientEntryPoint = !0;
      try {
        return D.hydrateRoot(k, P, f);
      } finally {
        v.usingClientEntryPoint = !1;
      }
    };
  }
  return Ea;
}
var iu = au();
class su {
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
    this.component = (v) => /* @__PURE__ */ w.jsx("div", { children: "hello" });
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
  getStream(v, k, P) {
    return this.streams[v] && this.streams[v].stream.get(k, P), !1;
  }
}
class lu extends su {
  constructor() {
    super(...arguments), this.setCurrentStream = null, this.currentCallback = null, this._setCurrentStreamName = null;
  }
  getStream(v, k, P, f) {
    if (this.streams[v]) {
      const { selectMax: F = 1, ...B } = P || {};
      this._setCurrentStreamName(v), this.streams[v].stream.get(($) => {
        this.currentCallback = k, this.setCurrentStream($);
      }, B, f);
    }
    return !1;
  }
  addStream(v, k, P = void 0) {
    this.streams[v] = { name: v, stream: k, streamOptions: P };
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
      var B, $, b, x, Z, R;
      const [v, k] = fr([]), [P, f] = fr(null);
      this.setCurrentStream = k, this._setCurrentStreamName = f;
      let F = null;
      if (($ = (B = this.streams[P]) == null ? void 0 : B.streamOptions) != null && $.streamAdapter) {
        const L = this.streams[P].streamOptions.streamAdapter;
        F = /* @__PURE__ */ w.jsx(
          L,
          {
            entries: v,
            select: (K) => {
              this._setCurrentStreamName(null), this.currentCallback(K);
            }
          }
        );
      } else if ((x = (b = this.streams[P]) == null ? void 0 : b.streamOptions) != null && x.individualPreviewComponent) {
        const L = (R = (Z = this.streams[P]) == null ? void 0 : Z.streamOptions) == null ? void 0 : R.individualPreviewComponent;
        F = v.map((K) => /* @__PURE__ */ w.jsx("div", { children: /* @__PURE__ */ w.jsx(
          L,
          {
            model: K,
            select: (J) => {
              this._setCurrentStreamName(null), this.currentCallback(J);
            }
          }
        ) }));
      } else this.streams[P] && (F = v.map((L) => /* @__PURE__ */ w.jsx("div", { children: /* @__PURE__ */ w.jsx(
        "img",
        {
          style: { width: 50 },
          src: L.src,
          onClick: () => {
            this._setCurrentStreamName(null), this.currentCallback([L]);
          }
        }
      ) })));
      return /* @__PURE__ */ w.jsx("div", { children: /* @__PURE__ */ w.jsx(
        cl,
        {
          open: !!P,
          onClose: () => this._setCurrentStreamName(!1),
          children: F
        }
      ) });
    };
  }
}
const uu = {
  individualComponents: !1,
  noRearrange: !1,
  noAdd: !1,
  inlineOptionBar: !0,
  disableFullscreen: !1,
  disableRefresh: !1
};
class yu {
  constructor(v = {}) {
    this._renderFunction = null, this.currentRoot = null, this._editorOptions = null, this._editorOptions = v;
    const {
      components: k = kl,
      plugins: P = null
    } = v;
    this.components = k, this.plugins = P ? [...P] : [];
  }
  get streamDriver() {
    return this._streamDriver;
  }
  processOptions(v) {
    v.components && (this.components = v.components), v.plugins && (this.plugins = v.plugins), this._editorOptions ? this._editorOptions = { ...this._editorOptions, ...v } : this._editorOptions = v;
  }
  start(v, k) {
    k && this.processOptions(k);
    const { pageData: P = { children: [] }, pageMeta: f, onSave: F, renderFlags: B, contextualPageData: $ } = this._editorOptions;
    this._streamDriver = this.createStreamDriver();
    const b = (Z) => {
      const [R, L] = fr(1);
      return this._setForceRefreshVal = L, /* @__PURE__ */ w.jsx("div", { className: "page-editor", "data-testid": "page-editor", children: /* @__PURE__ */ w.jsx(
        Xl,
        {
          componentList: this.components,
          plugins: this.plugins,
          editorOptions: this._editorOptions,
          pageData: P,
          pageMeta: f,
          onSave: F,
          renderFlags: B,
          streams: this._streamDriver,
          exportState: (K, J, Re) => {
            this._externalSetState = J, this._externalGetState = K, this._externalGetMarkup = Re;
          },
          contextualPageData: $
        },
        "page-editor"
      ) });
    }, x = /* @__PURE__ */ w.jsx(b, {});
    this.currentRoot || (this.currentRoot = iu.createRoot(v), this._renderFunction = (Z) => {
      this.currentRoot.render(Z);
    }), this._renderFunction(x);
  }
  createStreamDriver() {
    return new lu();
  }
  addComponents(v, k = null, P = null) {
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
      displayName: P,
      comp: v
    }, this.refreshComponentListInEditor());
  }
  insertComponent(v, k = {}) {
    if (!this._externalSetState) return null;
    this._externalSetState((P, f) => {
      let F = {
        ...P,
        editorState: {
          ...P.editorState,
          children: [...P.editorState.children]
        }
      };
      return F.editorState.children.push({
        comp: v,
        props: { ...k }
      }), F;
    });
  }
  getDefaultComponents() {
    return kl;
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
const Su = (D) => {
  const { sectionName: v, ...k } = D, { editorState: P } = or();
  let f = P[v] ? P[v] : "";
  return D.transform && (f = D.transform(f)), /* @__PURE__ */ w.jsx(ul, { children: f });
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
  get(v, k, P) {
  }
}
class bu extends dl {
  constructor(v, k = null) {
    super(), this.url = v, this._callback = k;
  }
  get(v, k, P) {
    switch ((P || "GET").toUpperCase()) {
      case "GET": {
        fetch(this.getAPIUrl(k), { method: "get" }).then((F) => F.json()).then((F) => {
          let B = F;
          this._callback && (B = this._callback(F)), v(B);
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
          let B = F;
          this._callback && (B = this._callback(F)), v(B);
        });
        break;
      }
    }
  }
  getAPIUrl(v) {
    return this.url + "?" + new URLSearchParams(v).toString();
  }
}
class xu extends dl {
  constructor(v = null) {
    super(), this._streamSelect = null, this._streams = {}, this._streamSelect = v;
  }
  addStream(v, k) {
    this._streams[v] = { stream: k, name: v };
  }
  adaptStream(v, k, P) {
    this._streams[v] = { stream: k, name: v, callback: P };
  }
  get(v, k) {
    let P = null;
    if (this._streamSelect ? P = this._streamSelect(
      k,
      Object.values(this._streams).map((F) => ({
        name: F.name,
        stream: F.stream
      }))
    ) : P = Object.values(this._streams)[0].name, !P || !this._streams[P])
      throw new cu();
    const f = this._streams[P];
    if (f.callback) {
      f.stream.get((F) => {
        v(f.callback(F));
      });
      return;
    }
    f.stream.get(v);
  }
}
class cu extends Error {
  constructor(v = "") {
    super(
      `No sub-streams have been added to this group stream. Use addStream() before the editor starts ${v}`
    );
  }
}
class wu extends dl {
  constructor(v) {
    super(), this.getValues = v;
  }
  get(v, k) {
    v(this.getValues(k));
  }
}
const ku = ({
  streamName: D,
  sectionName: v,
  selectMax: k = 1,
  label: P = "Select From Stream"
}) => {
  const f = or(v), F = f.streams;
  if (!f.editing) return null;
  const B = () => {
    F.getStream(D, ($) => {
      f.setState($[0]);
    }, { selectMax: k });
  };
  return /* @__PURE__ */ w.jsx("button", { onClick: B, children: P });
}, Cu = (D) => {
  const { sectionName: v = "repeater", countStateName: k = "count", hideCounter: P = !1, ...f } = D, { editorState: F, editing: B } = or(v), { count: $ = F && F[k] ? F[k] : 1 } = f, b = (R, L) => nr.Children.map(L, (K) => {
    if (nr.isValidElement(K)) {
      let J = F ? F[`rep${R}`] || {} : {};
      return nr.cloneElement(K, { repeaterIndex: R, ...J });
    }
    return K;
  });
  let x = [];
  for (let R = 0; R < $; R++) {
    let L = b(R, D.children);
    x.push(/* @__PURE__ */ w.jsx(El, { sectionName: `rep${R}`, children: L }, R));
  }
  let Z = null;
  return B && !P && (Z = /* @__PURE__ */ w.jsx(fl, { label: "Count:", min: 1, sectionName: k })), D.TagName ? /* @__PURE__ */ w.jsxs(D.TagName, { ...f, children: [
    Z,
    x
  ] }) : /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    Z,
    x
  ] });
};
export {
  tu as CE,
  Kl as ColumnSection,
  Rl as ContentEditableInputSlot,
  ll as ContentSection,
  Vn as EditorContext,
  Su as EditorValue,
  wu as FakeStream,
  bu as HTTPStream,
  Tl as HideIf,
  gu as HideIfEditing,
  Jl as HideIfRendering,
  fl as NumberSelect,
  Xl as PageEditor,
  Cu as Repeater,
  ql as SelectInput,
  El as SlotSection,
  ou as Spacer,
  dl as StreamBase,
  lu as StreamDrawerDriver,
  su as StreamDriver,
  xu as StreamGroup,
  ku as StreamSelectButton,
  wl as StringInput,
  yu as UNBEditor,
  kl as componentList,
  eu as createContentEditable,
  yu as default,
  mu as injectEditorContext,
  pu as injectEditorState,
  or as useEditorContext,
  hu as useEditorState,
  vu as useEditorStateWithProps
};
//# sourceMappingURL=index.es.js.map
