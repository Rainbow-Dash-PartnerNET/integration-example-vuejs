import { shallowRef as At, defineComponent as ee, reactive as Mt, inject as ce, computed as T, h as st, unref as K, provide as Ee, ref as It, watch as at, getCurrentInstance as it, shallowReactive as Vt, watchEffect as Dt, nextTick as Tt, openBlock as j, createElementBlock as L, createElementVNode as N, toDisplayString as jt, pushScopeId as ct, popScopeId as lt, createTextVNode as R, createVNode as I, withCtx as A, renderSlot as we, Fragment as Lt, createApp as Ht } from "vue";
const Ut = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjEuNzYgMjI2LjY5Ij48cGF0aCBkPSJNMTYxLjA5Ni4wMDFsLTMwLjIyNSA1Mi4zNTFMMTAwLjY0Ny4wMDFILS4wMDVsMTMwLjg3NyAyMjYuNjg4TDI2MS43NDkuMDAxeiIgZmlsbD0iIzQxYjg4MyIvPjxwYXRoIGQ9Ik0xNjEuMDk2LjAwMWwtMzAuMjI1IDUyLjM1MUwxMDAuNjQ3LjAwMUg1Mi4zNDZsNzguNTI2IDEzNi4wMUwyMDkuMzk4LjAwMXoiIGZpbGw9IiMzNDQ5NWUiLz48L3N2Zz4K";
function Bt() {
  return ut().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ut() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Wt = typeof Proxy == "function", Gt = "devtools-plugin:setup", Kt = "plugin:settings:set";
let X, Re;
function qt() {
  var e;
  return X !== void 0 || (typeof window < "u" && window.performance ? (X = !0, Re = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (X = !0, Re = global.perf_hooks.performance) : X = !1), X;
}
function Qt() {
  return qt() ? Re.now() : Date.now();
}
class Yt {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const h in t.settings) {
        const d = t.settings[h];
        o[h] = d.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let l = Object.assign({}, o);
    try {
      const h = localStorage.getItem(r), d = JSON.parse(h);
      Object.assign(l, d);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return l;
      },
      setSettings(h) {
        try {
          localStorage.setItem(r, JSON.stringify(h));
        } catch {
        }
        l = h;
      },
      now() {
        return Qt();
      }
    }, n && n.on(Kt, (h, d) => {
      h === this.plugin.id && this.fallbacks.setSettings(d);
    }), this.proxiedOn = new Proxy({}, {
      get: (h, d) => this.target ? this.target.on[d] : (...c) => {
        this.onQueue.push({
          method: d,
          args: c
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (h, d) => this.target ? this.target[d] : d === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(d) ? (...c) => (this.targetQueue.push({
        method: d,
        args: c,
        resolve: () => {
        }
      }), this.fallbacks[d](...c)) : (...c) => new Promise((f) => {
        this.targetQueue.push({
          method: d,
          args: c,
          resolve: f
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Ft(e, t) {
  const n = e, o = ut(), r = Bt(), l = Wt && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !l))
    r.emit(Gt, e, t);
  else {
    const h = l ? new Yt(n, r) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: h
    }), h && t(h.proxiedTarget);
  }
}
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const B = typeof window < "u";
function Zt(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const $ = Object.assign;
function be(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = D(r) ? r.map(e) : e(r);
  }
  return n;
}
const ae = () => {
}, D = Array.isArray;
function k(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Xt = /\/$/, Jt = (e) => e.replace(Xt, "");
function ke(e, t, n = "/") {
  let o, r = {}, l = "", h = "";
  const d = t.indexOf("#");
  let c = t.indexOf("?");
  return d < c && d >= 0 && (c = -1), c > -1 && (o = t.slice(0, c), l = t.slice(c + 1, d > -1 ? d : t.length), r = e(l)), d > -1 && (o = o || t.slice(0, d), h = t.slice(d, t.length)), o = nn(o ?? t, n), {
    fullPath: o + (l && "?") + l + h,
    path: o,
    query: r,
    hash: h
  };
}
function en(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Ue(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Be(e, t, n) {
  const o = t.matched.length - 1, r = n.matched.length - 1;
  return o > -1 && o === r && q(t.matched[o], n.matched[r]) && ht(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function q(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ht(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!tn(e[n], t[n]))
      return !1;
  return !0;
}
function tn(e, t) {
  return D(e) ? We(e, t) : D(t) ? We(t, e) : e === t;
}
function We(e, t) {
  return D(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function nn(e, t) {
  if (e.startsWith("/"))
    return e;
  if (process.env.NODE_ENV !== "production" && !t.startsWith("/"))
    return k(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), r = o[o.length - 1];
  (r === ".." || r === ".") && o.push("");
  let l = n.length - 1, h, d;
  for (h = 0; h < o.length; h++)
    if (d = o[h], d !== ".")
      if (d === "..")
        l > 1 && l--;
      else
        break;
  return n.slice(0, l).join("/") + "/" + o.slice(h - (h === o.length ? 1 : 0)).join("/");
}
var le;
(function(e) {
  e.pop = "pop", e.push = "push";
})(le || (le = {}));
var ie;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ie || (ie = {}));
function on(e) {
  if (!e)
    if (B) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Jt(e);
}
const rn = /^[^#]+#/;
function sn(e, t) {
  return e.replace(rn, "#") + t;
}
function an(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const pe = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function cn(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const l = document.querySelector(e.el);
        if (o && l) {
          k(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        k(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const r = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r) {
      process.env.NODE_ENV !== "production" && k(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = an(r, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Ge(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Se = /* @__PURE__ */ new Map();
function ln(e, t) {
  Se.set(e, t);
}
function un(e) {
  const t = Se.get(e);
  return Se.delete(e), t;
}
let hn = () => location.protocol + "//" + location.host;
function dt(e, t) {
  const { pathname: n, search: o, hash: r } = t, l = e.indexOf("#");
  if (l > -1) {
    let d = r.includes(e.slice(l)) ? e.slice(l).length : 1, c = r.slice(d);
    return c[0] !== "/" && (c = "/" + c), Ue(c, "");
  }
  return Ue(n, e) + o + r;
}
function dn(e, t, n, o) {
  let r = [], l = [], h = null;
  const d = ({ state: u }) => {
    const m = dt(e, location), _ = n.value, z = t.value;
    let P = 0;
    if (u) {
      if (n.value = m, t.value = u, h && h === _) {
        h = null;
        return;
      }
      P = z ? u.position - z.position : 0;
    } else
      o(m);
    r.forEach((y) => {
      y(n.value, _, {
        delta: P,
        type: le.pop,
        direction: P ? P > 0 ? ie.forward : ie.back : ie.unknown
      });
    });
  };
  function c() {
    h = n.value;
  }
  function f(u) {
    r.push(u);
    const m = () => {
      const _ = r.indexOf(u);
      _ > -1 && r.splice(_, 1);
    };
    return l.push(m), m;
  }
  function s() {
    const { history: u } = window;
    u.state && u.replaceState($({}, u.state, { scroll: pe() }), "");
  }
  function i() {
    for (const u of l)
      u();
    l = [], window.removeEventListener("popstate", d), window.removeEventListener("beforeunload", s);
  }
  return window.addEventListener("popstate", d), window.addEventListener("beforeunload", s, {
    passive: !0
  }), {
    pauseListeners: c,
    listen: f,
    destroy: i
  };
}
function Ke(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? pe() : null
  };
}
function fn(e) {
  const { history: t, location: n } = window, o = {
    value: dt(e, n)
  }, r = { value: t.state };
  r.value || l(o.value, {
    back: null,
    current: o.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function l(c, f, s) {
    const i = e.indexOf("#"), u = i > -1 ? (n.host && document.querySelector("base") ? e : e.slice(i)) + c : hn() + e + c;
    try {
      t[s ? "replaceState" : "pushState"](f, "", u), r.value = f;
    } catch (m) {
      process.env.NODE_ENV !== "production" ? k("Error with push/replace State", m) : console.error(m), n[s ? "replace" : "assign"](u);
    }
  }
  function h(c, f) {
    const s = $({}, t.state, Ke(
      r.value.back,
      // keep back and forward entries but override current position
      c,
      r.value.forward,
      !0
    ), f, { position: r.value.position });
    l(c, s, !0), o.value = c;
  }
  function d(c, f) {
    const s = $(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      r.value,
      t.state,
      {
        forward: c,
        scroll: pe()
      }
    );
    process.env.NODE_ENV !== "production" && !t.state && k(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), l(s.current, s, !0);
    const i = $({}, Ke(o.value, c, null), { position: s.position + 1 }, f);
    l(c, i, !1), o.value = c;
  }
  return {
    location: o,
    state: r,
    push: d,
    replace: h
  };
}
function pn(e) {
  e = on(e);
  const t = fn(e), n = dn(e, t.state, t.location, t.replace);
  function o(l, h = !0) {
    h || n.pauseListeners(), history.go(l);
  }
  const r = $({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: sn.bind(null, e)
  }, t, n);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
function mn(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), process.env.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && k(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), pn(e);
}
function gn(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function ft(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const W = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, $e = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var qe;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(qe || (qe = {}));
const vn = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${yn(t)}" via a navigation guard.`;
  },
  4({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  8({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  16({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function J(e, t) {
  return process.env.NODE_ENV !== "production" ? $(new Error(vn[e](t)), {
    type: e,
    [$e]: !0
  }, t) : $(new Error(), {
    type: e,
    [$e]: !0
  }, t);
}
function U(e, t) {
  return e instanceof Error && $e in e && (t == null || !!(e.type & t));
}
const _n = ["params", "query", "hash"];
function yn(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of _n)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Qe = "[^/]+?", En = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, wn = /[.+*?^${}()[\]/\\]/g;
function bn(e, t) {
  const n = $({}, En, t), o = [];
  let r = n.start ? "^" : "";
  const l = [];
  for (const f of e) {
    const s = f.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !f.length && (r += "/");
    for (let i = 0; i < f.length; i++) {
      const u = f[i];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (u.type === 0)
        i || (r += "/"), r += u.value.replace(wn, "\\$&"), m += 40;
      else if (u.type === 1) {
        const { value: _, repeatable: z, optional: P, regexp: y } = u;
        l.push({
          name: _,
          repeatable: z,
          optional: P
        });
        const w = y || Qe;
        if (w !== Qe) {
          m += 10;
          try {
            new RegExp(`(${w})`);
          } catch (V) {
            throw new Error(`Invalid custom RegExp for param "${_}" (${w}): ` + V.message);
          }
        }
        let O = z ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
        i || (O = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        P && f.length < 2 ? `(?:/${O})` : "/" + O), P && (O += "?"), r += O, m += 20, P && (m += -8), z && (m += -20), w === ".*" && (m += -50);
      }
      s.push(m);
    }
    o.push(s);
  }
  if (n.strict && n.end) {
    const f = o.length - 1;
    o[f][o[f].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? r += "$" : n.strict && (r += "(?:/|$)");
  const h = new RegExp(r, n.sensitive ? "" : "i");
  function d(f) {
    const s = f.match(h), i = {};
    if (!s)
      return null;
    for (let u = 1; u < s.length; u++) {
      const m = s[u] || "", _ = l[u - 1];
      i[_.name] = m && _.repeatable ? m.split("/") : m;
    }
    return i;
  }
  function c(f) {
    let s = "", i = !1;
    for (const u of e) {
      (!i || !s.endsWith("/")) && (s += "/"), i = !1;
      for (const m of u)
        if (m.type === 0)
          s += m.value;
        else if (m.type === 1) {
          const { value: _, repeatable: z, optional: P } = m, y = _ in f ? f[_] : "";
          if (D(y) && !z)
            throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
          const w = D(y) ? y.join("/") : y;
          if (!w)
            if (P)
              u.length < 2 && (s.endsWith("/") ? s = s.slice(0, -1) : i = !0);
            else
              throw new Error(`Missing required param "${_}"`);
          s += w;
        }
    }
    return s || "/";
  }
  return {
    re: h,
    score: o,
    keys: l,
    parse: d,
    stringify: c
  };
}
function kn(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Nn(e, t) {
  let n = 0;
  const o = e.score, r = t.score;
  for (; n < o.length && n < r.length; ) {
    const l = kn(o[n], r[n]);
    if (l)
      return l;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (Ye(o))
      return 1;
    if (Ye(r))
      return -1;
  }
  return r.length - o.length;
}
function Ye(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Rn = {
  type: 0,
  value: ""
}, Sn = /[a-zA-Z0-9_]/;
function $n(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Rn]];
  if (!e.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${f}": ${m}`);
  }
  let n = 0, o = n;
  const r = [];
  let l;
  function h() {
    l && r.push(l), l = [];
  }
  let d = 0, c, f = "", s = "";
  function i() {
    f && (n === 0 ? l.push({
      type: 0,
      value: f
    }) : n === 1 || n === 2 || n === 3 ? (l.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), l.push({
      type: 1,
      value: f,
      regexp: s,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : t("Invalid state to consume buffer"), f = "");
  }
  function u() {
    f += c;
  }
  for (; d < e.length; ) {
    if (c = e[d++], c === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (f && i(), h()) : c === ":" ? (i(), n = 1) : u();
        break;
      case 4:
        u(), n = o;
        break;
      case 1:
        c === "(" ? n = 2 : Sn.test(c) ? u() : (i(), n = 0, c !== "*" && c !== "?" && c !== "+" && d--);
        break;
      case 2:
        c === ")" ? s[s.length - 1] == "\\" ? s = s.slice(0, -1) + c : n = 3 : s += c;
        break;
      case 3:
        i(), n = 0, c !== "*" && c !== "?" && c !== "+" && d--, s = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), i(), h(), r;
}
function Pn(e, t, n) {
  const o = bn($n(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const l = /* @__PURE__ */ new Set();
    for (const h of o.keys)
      l.has(h.name) && k(`Found duplicated params with name "${h.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), l.add(h.name);
  }
  const r = $(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Cn(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Xe({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(s) {
    return o.get(s);
  }
  function l(s, i, u) {
    const m = !u, _ = On(s);
    process.env.NODE_ENV !== "production" && Mn(_, i), _.aliasOf = u && u.record;
    const z = Xe(t, s), P = [
      _
    ];
    if ("alias" in s) {
      const O = typeof s.alias == "string" ? [s.alias] : s.alias;
      for (const V of O)
        P.push($({}, _, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: u ? u.record.components : _.components,
          path: V,
          // we might be the child of an alias
          aliasOf: u ? u.record : _
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let y, w;
    for (const O of P) {
      const { path: V } = O;
      if (i && V[0] !== "/") {
        const Y = i.record.path, H = Y[Y.length - 1] === "/" ? "" : "/";
        O.path = i.record.path + (V && H + V);
      }
      if (process.env.NODE_ENV !== "production" && O.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (y = Pn(O, i, z), process.env.NODE_ENV !== "production" && i && V[0] === "/" && In(y, i), u ? (u.alias.push(y), process.env.NODE_ENV !== "production" && An(u, y)) : (w = w || y, w !== y && w.alias.push(y), m && s.name && !Ze(y) && h(s.name)), _.children) {
        const Y = _.children;
        for (let H = 0; H < Y.length; H++)
          l(Y[H], y, u && u.children[H]);
      }
      u = u || y, (y.record.components && Object.keys(y.record.components).length || y.record.name || y.record.redirect) && c(y);
    }
    return w ? () => {
      h(w);
    } : ae;
  }
  function h(s) {
    if (ft(s)) {
      const i = o.get(s);
      i && (o.delete(s), n.splice(n.indexOf(i), 1), i.children.forEach(h), i.alias.forEach(h));
    } else {
      const i = n.indexOf(s);
      i > -1 && (n.splice(i, 1), s.record.name && o.delete(s.record.name), s.children.forEach(h), s.alias.forEach(h));
    }
  }
  function d() {
    return n;
  }
  function c(s) {
    let i = 0;
    for (; i < n.length && Nn(s, n[i]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (s.record.path !== n[i].record.path || !pt(s, n[i])); )
      i++;
    n.splice(i, 0, s), s.record.name && !Ze(s) && o.set(s.record.name, s);
  }
  function f(s, i) {
    let u, m = {}, _, z;
    if ("name" in s && s.name) {
      if (u = o.get(s.name), !u)
        throw J(1, {
          location: s
        });
      if (process.env.NODE_ENV !== "production") {
        const w = Object.keys(s.params || {}).filter((O) => !u.keys.find((V) => V.name === O));
        w.length && k(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      z = u.record.name, m = $(
        // paramsFromLocation is a new object
        Fe(
          i.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          u.keys.filter((w) => !w.optional).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        s.params && Fe(s.params, u.keys.map((w) => w.name))
      ), _ = u.stringify(m);
    } else if ("path" in s)
      _ = s.path, process.env.NODE_ENV !== "production" && !_.startsWith("/") && k(`The Matcher cannot resolve relative paths but received "${_}". Unless you directly called \`matcher.resolve("${_}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), u = n.find((w) => w.re.test(_)), u && (m = u.parse(_), z = u.record.name);
    else {
      if (u = i.name ? o.get(i.name) : n.find((w) => w.re.test(i.path)), !u)
        throw J(1, {
          location: s,
          currentLocation: i
        });
      z = u.record.name, m = $({}, i.params, s.params), _ = u.stringify(m);
    }
    const P = [];
    let y = u;
    for (; y; )
      P.unshift(y.record), y = y.parent;
    return {
      name: z,
      path: _,
      params: m,
      matched: P,
      meta: xn(P)
    };
  }
  return e.forEach((s) => l(s)), { addRoute: l, resolve: f, removeRoute: h, getRoutes: d, getRecordMatcher: r };
}
function Fe(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function On(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: zn(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function zn(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Ze(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function xn(e) {
  return e.reduce((t, n) => $(t, n.meta), {});
}
function Xe(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Pe(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function An(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Pe.bind(null, n)))
      return k(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Pe.bind(null, n)))
      return k(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Mn(e, t) {
  t && t.record.name && !e.name && !e.path && k(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function In(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Pe.bind(null, n)))
      return k(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function pt(e, t) {
  return t.children.some((n) => n === e || pt(e, n));
}
const mt = /#/g, Vn = /&/g, Dn = /\//g, Tn = /=/g, jn = /\?/g, gt = /\+/g, Ln = /%5B/g, Hn = /%5D/g, vt = /%5E/g, Un = /%60/g, _t = /%7B/g, Bn = /%7C/g, yt = /%7D/g, Wn = /%20/g;
function Ae(e) {
  return encodeURI("" + e).replace(Bn, "|").replace(Ln, "[").replace(Hn, "]");
}
function Gn(e) {
  return Ae(e).replace(_t, "{").replace(yt, "}").replace(vt, "^");
}
function Ce(e) {
  return Ae(e).replace(gt, "%2B").replace(Wn, "+").replace(mt, "%23").replace(Vn, "%26").replace(Un, "`").replace(_t, "{").replace(yt, "}").replace(vt, "^");
}
function Kn(e) {
  return Ce(e).replace(Tn, "%3D");
}
function qn(e) {
  return Ae(e).replace(mt, "%23").replace(jn, "%3F");
}
function Qn(e) {
  return e == null ? "" : qn(e).replace(Dn, "%2F");
}
function ue(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && k(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Yn(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const l = o[r].replace(gt, " "), h = l.indexOf("="), d = ue(h < 0 ? l : l.slice(0, h)), c = h < 0 ? null : ue(l.slice(h + 1));
    if (d in t) {
      let f = t[d];
      D(f) || (f = t[d] = [f]), f.push(c);
    } else
      t[d] = c;
  }
  return t;
}
function Je(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = Kn(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (D(o) ? o.map((l) => l && Ce(l)) : [o && Ce(o)]).forEach((l) => {
      l !== void 0 && (t += (t.length ? "&" : "") + n, l != null && (t += "=" + l));
    });
  }
  return t;
}
function Fn(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = D(o) ? o.map((r) => r == null ? null : "" + r) : o == null ? o : "" + o);
  }
  return t;
}
const Zn = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), et = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), Me = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Et = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), Oe = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function oe() {
  let e = [];
  function t(o) {
    return e.push(o), () => {
      const r = e.indexOf(o);
      r > -1 && e.splice(r, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function G(e, t, n, o, r) {
  const l = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () => new Promise((h, d) => {
    const c = (i) => {
      i === !1 ? d(J(4, {
        from: n,
        to: t
      })) : i instanceof Error ? d(i) : gn(i) ? d(J(2, {
        from: t,
        to: i
      })) : (l && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[r] === l && typeof i == "function" && l.push(i), h());
    }, f = e.call(o && o.instances[r], t, n, process.env.NODE_ENV !== "production" ? Xn(c, t, n) : c);
    let s = Promise.resolve(f);
    if (e.length < 3 && (s = s.then(c)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const i = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof f == "object" && "then" in f)
        s = s.then((u) => c._called ? u : (k(i), Promise.reject(new Error("Invalid navigation guard"))));
      else if (f !== void 0 && !c._called) {
        k(i), d(new Error("Invalid navigation guard"));
        return;
      }
    }
    s.catch((i) => d(i));
  });
}
function Xn(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && k(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Ne(e, t, n, o) {
  const r = [];
  for (const l of e) {
    process.env.NODE_ENV !== "production" && !l.components && !l.children.length && k(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);
    for (const h in l.components) {
      let d = l.components[h];
      if (process.env.NODE_ENV !== "production") {
        if (!d || typeof d != "object" && typeof d != "function")
          throw k(`Component "${h}" in record with path "${l.path}" is not a valid component. Received "${String(d)}".`), new Error("Invalid route component");
        if ("then" in d) {
          k(`Component "${h}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const c = d;
          d = () => c;
        } else
          d.__asyncLoader && // warn only once per component
          !d.__warnedDefineAsync && (d.__warnedDefineAsync = !0, k(`Component "${h}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !l.instances[h]))
        if (Jn(d)) {
          const f = (d.__vccOpts || d)[t];
          f && r.push(G(f, n, o, l, h));
        } else {
          let c = d();
          process.env.NODE_ENV !== "production" && !("catch" in c) && (k(`Component "${h}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), c = Promise.resolve(c)), r.push(() => c.then((f) => {
            if (!f)
              return Promise.reject(new Error(`Couldn't resolve component "${h}" at "${l.path}"`));
            const s = Zt(f) ? f.default : f;
            l.components[h] = s;
            const u = (s.__vccOpts || s)[t];
            return u && G(u, n, o, l, h)();
          }));
        }
    }
  }
  return r;
}
function Jn(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function tt(e) {
  const t = ce(Me), n = ce(Et), o = T(() => t.resolve(K(e.to))), r = T(() => {
    const { matched: c } = o.value, { length: f } = c, s = c[f - 1], i = n.matched;
    if (!s || !i.length)
      return -1;
    const u = i.findIndex(q.bind(null, s));
    if (u > -1)
      return u;
    const m = nt(c[f - 2]);
    return (
      // we are dealing with nested routes
      f > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      nt(s) === m && // avoid comparing the child with its parent
      i[i.length - 1].path !== m ? i.findIndex(q.bind(null, c[f - 2])) : u
    );
  }), l = T(() => r.value > -1 && no(n.params, o.value.params)), h = T(() => r.value > -1 && r.value === n.matched.length - 1 && ht(n.params, o.value.params));
  function d(c = {}) {
    return to(c) ? t[K(e.replace) ? "replace" : "push"](
      K(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(ae) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && B) {
    const c = it();
    if (c) {
      const f = {
        route: o.value,
        isActive: l.value,
        isExactActive: h.value
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(f), Dt(() => {
        f.route = o.value, f.isActive = l.value, f.isExactActive = h.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: T(() => o.value.href),
    isActive: l,
    isExactActive: h,
    navigate: d
  };
}
const eo = /* @__PURE__ */ ee({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: tt,
  setup(e, { slots: t }) {
    const n = Mt(tt(e)), { options: o } = ce(Me), r = T(() => ({
      [ot(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [ot(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const l = t.default && t.default(n);
      return e.custom ? l : st("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: r.value
      }, l);
    };
  }
}), ze = eo;
function to(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function no(e, t) {
  for (const n in t) {
    const o = t[n], r = e[n];
    if (typeof o == "string") {
      if (o !== r)
        return !1;
    } else if (!D(r) || r.length !== o.length || o.some((l, h) => l !== r[h]))
      return !1;
  }
  return !0;
}
function nt(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const ot = (e, t, n) => e ?? t ?? n, oo = /* @__PURE__ */ ee({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    process.env.NODE_ENV !== "production" && ro();
    const o = ce(Oe), r = T(() => e.route || o.value), l = ce(et, 0), h = T(() => {
      let f = K(l);
      const { matched: s } = r.value;
      let i;
      for (; (i = s[f]) && !i.components; )
        f++;
      return f;
    }), d = T(() => r.value.matched[h.value]);
    Ee(et, T(() => h.value + 1)), Ee(Zn, d), Ee(Oe, r);
    const c = It();
    return at(() => [c.value, d.value, e.name], ([f, s, i], [u, m, _]) => {
      s && (s.instances[i] = f, m && m !== s && f && f === u && (s.leaveGuards.size || (s.leaveGuards = m.leaveGuards), s.updateGuards.size || (s.updateGuards = m.updateGuards))), f && s && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !q(s, m) || !u) && (s.enterCallbacks[i] || []).forEach((z) => z(f));
    }, { flush: "post" }), () => {
      const f = r.value, s = e.name, i = d.value, u = i && i.components[s];
      if (!u)
        return rt(n.default, { Component: u, route: f });
      const m = i.props[s], _ = m ? m === !0 ? f.params : typeof m == "function" ? m(f) : m : null, P = st(u, $({}, _, t, {
        onVnodeUnmounted: (y) => {
          y.component.isUnmounted && (i.instances[s] = null);
        },
        ref: c
      }));
      if (process.env.NODE_ENV !== "production" && B && P.ref) {
        const y = {
          depth: h.value,
          name: i.name,
          path: i.path,
          meta: i.meta
        };
        (D(P.ref) ? P.ref.map((O) => O.i) : [P.ref.i]).forEach((O) => {
          O.__vrv_devtools = y;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        rt(n.default, { Component: P, route: f }) || P
      );
    };
  }
});
function rt(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const wt = oo;
function ro() {
  const e = it(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    k(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function re(e, t) {
  const n = $({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => po(o, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: t,
      value: n
    }
  };
}
function fe(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let so = 0;
function ao(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = so++;
  Ft({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (r) => {
    typeof r.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), r.on.inspectComponent((s, i) => {
      s.instanceData && s.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: re(t.currentRoute.value, "Current Route")
      });
    }), r.on.visitComponentTree(({ treeNode: s, componentInstance: i }) => {
      if (i.__vrv_devtools) {
        const u = i.__vrv_devtools;
        s.tags.push({
          label: (u.name ? `${u.name.toString()}: ` : "") + u.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: bt
        });
      }
      D(i.__vrl_devtools) && (i.__devtoolsApi = r, i.__vrl_devtools.forEach((u) => {
        let m = Rt, _ = "";
        u.isExactActive ? (m = Nt, _ = "This is exactly active") : u.isActive && (m = kt, _ = "This link is active"), s.tags.push({
          label: u.route.path,
          textColor: 0,
          tooltip: _,
          backgroundColor: m
        });
      }));
    }), at(t.currentRoute, () => {
      c(), r.notifyComponentUpdate(), r.sendInspectorTree(d), r.sendInspectorState(d);
    });
    const l = "router:navigations:" + o;
    r.addTimelineLayer({
      id: l,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((s, i) => {
      r.addTimelineEvent({
        layerId: l,
        event: {
          title: "Error during Navigation",
          subtitle: i.fullPath,
          logType: "error",
          time: r.now(),
          data: { error: s },
          groupId: i.meta.__navigationId
        }
      });
    });
    let h = 0;
    t.beforeEach((s, i) => {
      const u = {
        guard: fe("beforeEach"),
        from: re(i, "Current Location during this navigation"),
        to: re(s, "Target location")
      };
      Object.defineProperty(s.meta, "__navigationId", {
        value: h++
      }), r.addTimelineEvent({
        layerId: l,
        event: {
          time: r.now(),
          title: "Start of navigation",
          subtitle: s.fullPath,
          data: u,
          groupId: s.meta.__navigationId
        }
      });
    }), t.afterEach((s, i, u) => {
      const m = {
        guard: fe("afterEach")
      };
      u ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: u ? u.message : "",
          tooltip: "Navigation Failure",
          value: u
        }
      }, m.status = fe("❌")) : m.status = fe("✅"), m.from = re(i, "Current Location during this navigation"), m.to = re(s, "Target location"), r.addTimelineEvent({
        layerId: l,
        event: {
          title: "End of navigation",
          subtitle: s.fullPath,
          time: r.now(),
          data: m,
          logType: u ? "warning" : "default",
          groupId: s.meta.__navigationId
        }
      });
    });
    const d = "router-inspector:" + o;
    r.addInspector({
      id: d,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function c() {
      if (!f)
        return;
      const s = f;
      let i = n.getRoutes().filter((u) => !u.parent);
      i.forEach(Pt), s.filter && (i = i.filter((u) => (
        // save matches state based on the payload
        xe(u, s.filter.toLowerCase())
      ))), i.forEach((u) => $t(u, t.currentRoute.value)), s.rootNodes = i.map(St);
    }
    let f;
    r.on.getInspectorTree((s) => {
      f = s, s.app === e && s.inspectorId === d && c();
    }), r.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === d) {
        const u = n.getRoutes().find((m) => m.record.__vd_id === s.nodeId);
        u && (s.state = {
          options: co(u)
        });
      }
    }), r.sendInspectorTree(d), r.sendInspectorState(d);
  });
}
function io(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function co(e) {
  const { record: t } = e, n = [
    { editable: !1, key: "path", value: t.path }
  ];
  return t.name != null && n.push({
    editable: !1,
    key: "name",
    value: t.name
  }), n.push({ editable: !1, key: "regexp", value: e.re }), e.keys.length && n.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.keys.map((o) => `${o.name}${io(o)}`).join(" "),
        tooltip: "Param keys",
        value: e.keys
      }
    }
  }), t.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((o) => o.record.path)
  }), Object.keys(e.record.meta).length && n.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), n.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.score.map((o) => o.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const bt = 15485081, kt = 2450411, Nt = 8702998, lo = 2282478, Rt = 16486972, uo = 6710886;
function St(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: lo
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Rt
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: bt
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Nt
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: kt
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: uo
  });
  let o = n.__vd_id;
  return o == null && (o = String(ho++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(St)
  };
}
let ho = 0;
const fo = /^\/(.*)\/([a-z]*)$/;
function $t(e, t) {
  const n = t.matched.length && q(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => q(o, e.record))), e.children.forEach((o) => $t(o, t));
}
function Pt(e) {
  e.__vd_match = !1, e.children.forEach(Pt);
}
function xe(e, t) {
  const n = String(e.re).match(fo);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((h) => xe(h, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const r = e.record.path.toLowerCase(), l = ue(r);
  return !t.startsWith("/") && (l.includes(t) || r.includes(t)) || l.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((h) => xe(h, t));
}
function po(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function mo(e) {
  const t = Cn(e.routes, e), n = e.parseQuery || Yn, o = e.stringifyQuery || Je, r = e.history;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const l = oe(), h = oe(), d = oe(), c = At(W);
  let f = W;
  B && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const s = be.bind(null, (a) => "" + a), i = be.bind(null, Qn), u = (
    // @ts-expect-error: intentionally avoid the type check
    be.bind(null, ue)
  );
  function m(a, g) {
    let p, v;
    return ft(a) ? (p = t.getRecordMatcher(a), v = g) : v = a, t.addRoute(v, p);
  }
  function _(a) {
    const g = t.getRecordMatcher(a);
    g ? t.removeRoute(g) : process.env.NODE_ENV !== "production" && k(`Cannot remove non-existent route "${String(a)}"`);
  }
  function z() {
    return t.getRoutes().map((a) => a.record);
  }
  function P(a) {
    return !!t.getRecordMatcher(a);
  }
  function y(a, g) {
    if (g = $({}, g || c.value), typeof a == "string") {
      const E = ke(n, a, g.path), C = t.resolve({ path: E.path }, g), F = r.createHref(E.fullPath);
      return process.env.NODE_ENV !== "production" && (F.startsWith("//") ? k(`Location "${a}" resolved to "${F}". A resolved location cannot start with multiple slashes.`) : C.matched.length || k(`No match found for location with path "${a}"`)), $(E, C, {
        params: u(C.params),
        hash: ue(E.hash),
        redirectedFrom: void 0,
        href: F
      });
    }
    let p;
    if ("path" in a)
      process.env.NODE_ENV !== "production" && "params" in a && !("name" in a) && // @ts-expect-error: the type is never
      Object.keys(a.params).length && k(`Path "${a.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), p = $({}, a, {
        path: ke(n, a.path, g.path).path
      });
    else {
      const E = $({}, a.params);
      for (const C in E)
        E[C] == null && delete E[C];
      p = $({}, a, {
        params: i(E)
      }), g.params = i(g.params);
    }
    const v = t.resolve(p, g), S = a.hash || "";
    process.env.NODE_ENV !== "production" && S && !S.startsWith("#") && k(`A \`hash\` should always start with the character "#". Replace "${S}" with "#${S}".`), v.params = s(u(v.params));
    const x = en(o, $({}, a, {
      hash: Gn(S),
      path: v.path
    })), b = r.createHref(x);
    return process.env.NODE_ENV !== "production" && (b.startsWith("//") ? k(`Location "${a}" resolved to "${b}". A resolved location cannot start with multiple slashes.`) : v.matched.length || k(`No match found for location with path "${"path" in a ? a.path : a}"`)), $({
      fullPath: x,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: S,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Je ? Fn(a.query) : a.query || {}
      )
    }, v, {
      redirectedFrom: void 0,
      href: b
    });
  }
  function w(a) {
    return typeof a == "string" ? ke(n, a, c.value.path) : $({}, a);
  }
  function O(a, g) {
    if (f !== a)
      return J(8, {
        from: g,
        to: a
      });
  }
  function V(a) {
    return te(a);
  }
  function Y(a) {
    return V($(w(a), { replace: !0 }));
  }
  function H(a) {
    const g = a.matched[a.matched.length - 1];
    if (g && g.redirect) {
      const { redirect: p } = g;
      let v = typeof p == "function" ? p(a) : p;
      if (typeof v == "string" && (v = v.includes("?") || v.includes("#") ? v = w(v) : (
        // force empty params
        { path: v }
      ), v.params = {}), process.env.NODE_ENV !== "production" && !("path" in v) && !("name" in v))
        throw k(`Invalid redirect found:
${JSON.stringify(v, null, 2)}
 when navigating to "${a.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return $({
        query: a.query,
        hash: a.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in v ? {} : a.params
      }, v);
    }
  }
  function te(a, g) {
    const p = f = y(a), v = c.value, S = a.state, x = a.force, b = a.replace === !0, E = H(p);
    if (E)
      return te(
        $(w(E), {
          state: typeof E == "object" ? $({}, S, E.state) : S,
          force: x,
          replace: b
        }),
        // keep original redirectedFrom if it exists
        g || p
      );
    const C = p;
    C.redirectedFrom = g;
    let F;
    return !x && Be(o, v, p) && (F = J(16, { to: C, from: v }), Le(
      v,
      v,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (F ? Promise.resolve(F) : Ve(C, v)).catch((M) => U(M) ? (
      // navigation redirects still mark the router as ready
      U(
        M,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? M : ve(M)
    ) : (
      // reject any unknown error
      ge(M, C, v)
    )).then((M) => {
      if (M) {
        if (U(
          M,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Be(o, y(M.to), C) && // and we have done it a couple of times
          g && // @ts-expect-error: added only in dev
          (g._count = g._count ? (
            // @ts-expect-error
            g._count + 1
          ) : 1) > 30 ? (k(`Detected a possibly infinite redirection in a navigation guard when going from "${v.fullPath}" to "${C.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : te(
            // keep options
            $({
              // preserve an existing replacement but allow the redirect to override it
              replace: b
            }, w(M.to), {
              state: typeof M.to == "object" ? $({}, S, M.to.state) : S,
              force: x
            }),
            // preserve the original redirectedFrom if any
            g || C
          );
      } else
        M = Te(C, v, !0, b, S);
      return De(C, v, M), M;
    });
  }
  function Ot(a, g) {
    const p = O(a, g);
    return p ? Promise.reject(p) : Promise.resolve();
  }
  function Ie(a) {
    const g = de.values().next().value;
    return g && typeof g.runWithContext == "function" ? g.runWithContext(a) : a();
  }
  function Ve(a, g) {
    let p;
    const [v, S, x] = go(a, g);
    p = Ne(v.reverse(), "beforeRouteLeave", a, g);
    for (const E of v)
      E.leaveGuards.forEach((C) => {
        p.push(G(C, a, g));
      });
    const b = Ot.bind(null, a, g);
    return p.push(b), Z(p).then(() => {
      p = [];
      for (const E of l.list())
        p.push(G(E, a, g));
      return p.push(b), Z(p);
    }).then(() => {
      p = Ne(S, "beforeRouteUpdate", a, g);
      for (const E of S)
        E.updateGuards.forEach((C) => {
          p.push(G(C, a, g));
        });
      return p.push(b), Z(p);
    }).then(() => {
      p = [];
      for (const E of x)
        if (E.beforeEnter)
          if (D(E.beforeEnter))
            for (const C of E.beforeEnter)
              p.push(G(C, a, g));
          else
            p.push(G(E.beforeEnter, a, g));
      return p.push(b), Z(p);
    }).then(() => (a.matched.forEach((E) => E.enterCallbacks = {}), p = Ne(x, "beforeRouteEnter", a, g), p.push(b), Z(p))).then(() => {
      p = [];
      for (const E of h.list())
        p.push(G(E, a, g));
      return p.push(b), Z(p);
    }).catch((E) => U(
      E,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? E : Promise.reject(E));
  }
  function De(a, g, p) {
    d.list().forEach((v) => Ie(() => v(a, g, p)));
  }
  function Te(a, g, p, v, S) {
    const x = O(a, g);
    if (x)
      return x;
    const b = g === W, E = B ? history.state : {};
    p && (v || b ? r.replace(a.fullPath, $({
      scroll: b && E && E.scroll
    }, S)) : r.push(a.fullPath, S)), c.value = a, Le(a, g, p, b), ve();
  }
  let ne;
  function zt() {
    ne || (ne = r.listen((a, g, p) => {
      if (!He.listening)
        return;
      const v = y(a), S = H(v);
      if (S) {
        te($(S, { replace: !0 }), v).catch(ae);
        return;
      }
      f = v;
      const x = c.value;
      B && ln(Ge(x.fullPath, p.delta), pe()), Ve(v, x).catch((b) => U(
        b,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? b : U(
        b,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (te(
        b.to,
        v
        // avoid an uncaught rejection, let push call triggerError
      ).then((E) => {
        U(
          E,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !p.delta && p.type === le.pop && r.go(-1, !1);
      }).catch(ae), Promise.reject()) : (p.delta && r.go(-p.delta, !1), ge(b, v, x))).then((b) => {
        b = b || Te(
          // after navigation, all matched components are resolved
          v,
          x,
          !1
        ), b && (p.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !U(
          b,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? r.go(-p.delta, !1) : p.type === le.pop && U(
          b,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && r.go(-1, !1)), De(v, x, b);
      }).catch(ae);
    }));
  }
  let me = oe(), je = oe(), he;
  function ge(a, g, p) {
    ve(a);
    const v = je.list();
    return v.length ? v.forEach((S) => S(a, g, p)) : (process.env.NODE_ENV !== "production" && k("uncaught error during route navigation:"), console.error(a)), Promise.reject(a);
  }
  function xt() {
    return he && c.value !== W ? Promise.resolve() : new Promise((a, g) => {
      me.add([a, g]);
    });
  }
  function ve(a) {
    return he || (he = !a, zt(), me.list().forEach(([g, p]) => a ? p(a) : g()), me.reset()), a;
  }
  function Le(a, g, p, v) {
    const { scrollBehavior: S } = e;
    if (!B || !S)
      return Promise.resolve();
    const x = !p && un(Ge(a.fullPath, 0)) || (v || !p) && history.state && history.state.scroll || null;
    return Tt().then(() => S(a, g, x)).then((b) => b && cn(b)).catch((b) => ge(b, a, g));
  }
  const _e = (a) => r.go(a);
  let ye;
  const de = /* @__PURE__ */ new Set(), He = {
    currentRoute: c,
    listening: !0,
    addRoute: m,
    removeRoute: _,
    hasRoute: P,
    getRoutes: z,
    resolve: y,
    options: e,
    push: V,
    replace: Y,
    go: _e,
    back: () => _e(-1),
    forward: () => _e(1),
    beforeEach: l.add,
    beforeResolve: h.add,
    afterEach: d.add,
    onError: je.add,
    isReady: xt,
    install(a) {
      const g = this;
      a.component("RouterLink", ze), a.component("RouterView", wt), a.config.globalProperties.$router = g, Object.defineProperty(a.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => K(c)
      }), B && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !ye && c.value === W && (ye = !0, V(r.location).catch((S) => {
        process.env.NODE_ENV !== "production" && k("Unexpected error when starting the router:", S);
      }));
      const p = {};
      for (const S in W)
        Object.defineProperty(p, S, {
          get: () => c.value[S],
          enumerable: !0
        });
      a.provide(Me, g), a.provide(Et, Vt(p)), a.provide(Oe, c);
      const v = a.unmount;
      de.add(a), a.unmount = function() {
        de.delete(a), de.size < 1 && (f = W, ne && ne(), ne = null, c.value = W, ye = !1, he = !1), v();
      }, process.env.NODE_ENV !== "production" && B && ao(a, g, t);
    }
  };
  function Z(a) {
    return a.reduce((g, p) => g.then(() => Ie(p)), Promise.resolve());
  }
  return He;
}
function go(e, t) {
  const n = [], o = [], r = [], l = Math.max(t.matched.length, e.matched.length);
  for (let h = 0; h < l; h++) {
    const d = t.matched[h];
    d && (e.matched.find((f) => q(f, d)) ? o.push(d) : n.push(d));
    const c = e.matched[h];
    c && (t.matched.find((f) => q(f, c)) || r.push(c));
  }
  return [n, o, r];
}
const vo = (e) => (ct("data-v-a47c673d"), e = e(), lt(), e), _o = { class: "greetings" }, yo = { class: "green" }, Eo = /* @__PURE__ */ vo(() => /* @__PURE__ */ N("h3", null, [
  /* @__PURE__ */ R(" You’ve successfully created a project with "),
  /* @__PURE__ */ N("a", {
    href: "https://vitejs.dev/",
    target: "_blank",
    rel: "noopener"
  }, "Vite"),
  /* @__PURE__ */ R(" + "),
  /* @__PURE__ */ N("a", {
    href: "https://vuejs.org/",
    target: "_blank",
    rel: "noopener"
  }, "Vue 3"),
  /* @__PURE__ */ R(". What's next? ")
], -1)), wo = /* @__PURE__ */ ee({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(e) {
    return (t, n) => (j(), L("div", _o, [
      N("h1", yo, jt(t.msg), 1),
      Eo
    ]));
  }
});
const Q = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, bo = /* @__PURE__ */ Q(wo, [["__scopeId", "data-v-a47c673d"]]), ko = (e) => (ct("data-v-d87485c4"), e = e(), lt(), e), No = { id: "app_inner" }, Ro = /* @__PURE__ */ ko(() => /* @__PURE__ */ N("img", {
  alt: "Vue logo",
  class: "logo",
  src: Ut,
  width: "125",
  height: "125"
}, null, -1)), So = { class: "wrapper" }, $o = /* @__PURE__ */ ee({
  __name: "App",
  setup(e) {
    return (t, n) => (j(), L("div", No, [
      N("header", null, [
        Ro,
        N("div", So, [
          I(bo, { msg: "You did it!" }),
          N("nav", null, [
            I(K(ze), { to: "/" }, {
              default: A(() => [
                R("Home")
              ]),
              _: 1
            }),
            I(K(ze), { to: "/about" }, {
              default: A(() => [
                R("About")
              ]),
              _: 1
            })
          ])
        ])
      ]),
      I(K(wt))
    ]));
  }
});
const Po = /* @__PURE__ */ Q($o, [["__scopeId", "data-v-d87485c4"]]);
const Co = {}, Oo = { class: "item" }, zo = { class: "details" };
function xo(e, t) {
  return j(), L("div", Oo, [
    N("i", null, [
      we(e.$slots, "icon", {}, void 0, !0)
    ]),
    N("div", zo, [
      N("h3", null, [
        we(e.$slots, "heading", {}, void 0, !0)
      ]),
      we(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const se = /* @__PURE__ */ Q(Co, [["render", xo], ["__scopeId", "data-v-fd0742eb"]]), Ao = {}, Mo = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "17",
  fill: "currentColor"
}, Io = /* @__PURE__ */ N("path", { d: "M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z" }, null, -1), Vo = [
  Io
];
function Do(e, t) {
  return j(), L("svg", Mo, Vo);
}
const To = /* @__PURE__ */ Q(Ao, [["render", Do]]), jo = {}, Lo = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": "true",
  role: "img",
  class: "iconify iconify--mdi",
  width: "24",
  height: "24",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
}, Ho = /* @__PURE__ */ N("path", {
  d: "M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",
  fill: "currentColor"
}, null, -1), Uo = [
  Ho
];
function Bo(e, t) {
  return j(), L("svg", Lo, Uo);
}
const Wo = /* @__PURE__ */ Q(jo, [["render", Bo]]), Go = {}, Ko = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "20",
  fill: "currentColor"
}, qo = /* @__PURE__ */ N("path", { d: "M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z" }, null, -1), Qo = [
  qo
];
function Yo(e, t) {
  return j(), L("svg", Ko, Qo);
}
const Fo = /* @__PURE__ */ Q(Go, [["render", Yo]]), Zo = {}, Xo = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
}, Jo = /* @__PURE__ */ N("path", { d: "M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z" }, null, -1), er = [
  Jo
];
function tr(e, t) {
  return j(), L("svg", Xo, er);
}
const nr = /* @__PURE__ */ Q(Zo, [["render", tr]]), or = {}, rr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
}, sr = /* @__PURE__ */ N("path", { d: "M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z" }, null, -1), ar = [
  sr
];
function ir(e, t) {
  return j(), L("svg", rr, ar);
}
const cr = /* @__PURE__ */ Q(or, [["render", ir]]), lr = /* @__PURE__ */ N("a", {
  href: "https://vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "official documentation", -1), ur = /* @__PURE__ */ N("a", {
  href: "https://vitejs.dev/guide/features.html",
  target: "_blank",
  rel: "noopener"
}, "Vite", -1), hr = /* @__PURE__ */ N("a", {
  href: "https://code.visualstudio.com/",
  target: "_blank",
  rel: "noopener"
}, "VSCode", -1), dr = /* @__PURE__ */ N("a", {
  href: "https://github.com/johnsoncodehk/volar",
  target: "_blank",
  rel: "noopener"
}, "Volar", -1), fr = /* @__PURE__ */ N("a", {
  href: "https://www.cypress.io/",
  target: "_blank",
  rel: "noopener"
}, "Cypress", -1), pr = /* @__PURE__ */ N("a", {
  href: "https://on.cypress.io/component",
  target: "_blank",
  rel: "noopener"
}, "Cypress Component Testing", -1), mr = /* @__PURE__ */ N("br", null, null, -1), gr = /* @__PURE__ */ N("code", null, "README.md", -1), vr = /* @__PURE__ */ N("a", {
  href: "https://pinia.vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "Pinia", -1), _r = /* @__PURE__ */ N("a", {
  href: "https://router.vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "Vue Router", -1), yr = /* @__PURE__ */ N("a", {
  href: "https://test-utils.vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "Vue Test Utils", -1), Er = /* @__PURE__ */ N("a", {
  href: "https://github.com/vuejs/devtools",
  target: "_blank",
  rel: "noopener"
}, "Vue Dev Tools", -1), wr = /* @__PURE__ */ N("a", {
  href: "https://github.com/vuejs/awesome-vue",
  target: "_blank",
  rel: "noopener"
}, "Awesome Vue", -1), br = /* @__PURE__ */ N("a", {
  href: "https://chat.vuejs.org",
  target: "_blank",
  rel: "noopener"
}, "Vue Land", -1), kr = /* @__PURE__ */ N("a", {
  href: "https://stackoverflow.com/questions/tagged/vue.js",
  target: "_blank",
  rel: "noopener"
}, "StackOverflow", -1), Nr = /* @__PURE__ */ N("a", {
  href: "https://news.vuejs.org",
  target: "_blank",
  rel: "noopener"
}, "our mailing list", -1), Rr = /* @__PURE__ */ N("a", {
  href: "https://twitter.com/vuejs",
  target: "_blank",
  rel: "noopener"
}, "@vuejs", -1), Sr = /* @__PURE__ */ N("a", {
  href: "https://vuejs.org/sponsor/",
  target: "_blank",
  rel: "noopener"
}, "becoming a sponsor", -1), $r = /* @__PURE__ */ ee({
  __name: "TheWelcome",
  setup(e) {
    return (t, n) => (j(), L(Lt, null, [
      I(se, null, {
        icon: A(() => [
          I(To)
        ]),
        heading: A(() => [
          R("Documentation")
        ]),
        default: A(() => [
          R(" Vue’s "),
          lr,
          R(" provides you with all information you need to get started. ")
        ]),
        _: 1
      }),
      I(se, null, {
        icon: A(() => [
          I(Wo)
        ]),
        heading: A(() => [
          R("Tooling")
        ]),
        default: A(() => [
          R(" This project is served and bundled with "),
          ur,
          R(". The recommended IDE setup is "),
          hr,
          R(" + "),
          dr,
          R(". If you need to test your components and web pages, check out "),
          fr,
          R(" and "),
          pr,
          R(". "),
          mr,
          R(" More instructions are available in "),
          gr,
          R(". ")
        ]),
        _: 1
      }),
      I(se, null, {
        icon: A(() => [
          I(Fo)
        ]),
        heading: A(() => [
          R("Ecosystem")
        ]),
        default: A(() => [
          R(" Get official tools and libraries for your project: "),
          vr,
          R(", "),
          _r,
          R(", "),
          yr,
          R(", and "),
          Er,
          R(". If you need more resources, we suggest paying "),
          wr,
          R(" a visit. ")
        ]),
        _: 1
      }),
      I(se, null, {
        icon: A(() => [
          I(nr)
        ]),
        heading: A(() => [
          R("Community")
        ]),
        default: A(() => [
          R(" Got stuck? Ask your question on "),
          br,
          R(", our official Discord server, or "),
          kr,
          R(". You should also subscribe to "),
          Nr,
          R(" and follow the official "),
          Rr,
          R(" twitter account for latest news in the Vue world. ")
        ]),
        _: 1
      }),
      I(se, null, {
        icon: A(() => [
          I(cr)
        ]),
        heading: A(() => [
          R("Support Vue")
        ]),
        default: A(() => [
          R(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),
          Sr,
          R(". ")
        ]),
        _: 1
      })
    ], 64));
  }
}), Pr = /* @__PURE__ */ ee({
  __name: "HomeView",
  setup(e) {
    return (t, n) => (j(), L("main", null, [
      I($r)
    ]));
  }
}), Cr = mo({
  history: mn(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Pr
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./AboutView-ce92963b.mjs")
    }
  ]
}), Ct = Ht(Po);
Ct.use(Cr);
Ct.mount("#app");
export {
  Q as _
};
