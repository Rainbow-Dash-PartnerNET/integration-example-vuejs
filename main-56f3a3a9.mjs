function vt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const ne = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Lt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], pe = () => {
}, _s = () => !1, qi = /^on[^a-z]/, Nn = (e) => qi.test(e), Hn = (e) => e.startsWith("onUpdate:"), se = Object.assign, Yo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Yi = Object.prototype.hasOwnProperty, K = (e, t) => Yi.call(e, t), k = Array.isArray, xt = (e) => Gn(e) === "[object Map]", vs = (e) => Gn(e) === "[object Set]", H = (e) => typeof e == "function", ie = (e) => typeof e == "string", Go = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", Qo = (e) => ee(e) && H(e.then) && H(e.catch), Es = Object.prototype.toString, Gn = (e) => Es.call(e), Jo = (e) => Gn(e).slice(8, -1), ys = (e) => Gn(e) === "[object Object]", Zo = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, In = /* @__PURE__ */ vt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Gi = /* @__PURE__ */ vt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Qn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Qi = /-(\w)/g, Ut = Qn((e) => e.replace(Qi, (t, n) => n ? n.toUpperCase() : "")), Ji = /\B([A-Z])/g, pt = Qn(
  (e) => e.replace(Ji, "-$1").toLowerCase()
), Jn = Qn(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), wt = Qn(
  (e) => e ? `on${Jn(e)}` : ""
), dn = (e, t) => !Object.is(e, t), Gt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ln = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Zi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Nr;
const Fn = () => Nr || (Nr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Xo(e) {
  if (k(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ie(o) ? nc(o) : Xo(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (ie(e))
      return e;
    if (ee(e))
      return e;
  }
}
const Xi = /;(?![^(]*\))/g, ec = /:([^]+)/, tc = /\/\*[^]*?\*\//g;
function nc(e) {
  const t = {};
  return e.replace(tc, "").split(Xi).forEach((n) => {
    if (n) {
      const o = n.split(ec);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function er(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (k(e))
    for (let n = 0; n < e.length; n++) {
      const o = er(e[n]);
      o && (t += o + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const oc = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", rc = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", sc = /* @__PURE__ */ vt(oc), ic = /* @__PURE__ */ vt(rc), cc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", lc = /* @__PURE__ */ vt(cc);
function Ns(e) {
  return !!e || e === "";
}
const ac = (e) => ie(e) ? e : e == null ? "" : k(e) || ee(e) && (e.toString === Es || !H(e.toString)) ? JSON.stringify(e, bs, 2) : String(e), bs = (e, t) => t && t.__v_isRef ? bs(e, t.value) : xt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : vs(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : ee(t) && !k(t) && !ys(t) ? String(t) : t;
function bo(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ie;
class uc {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ie, !t && Ie && (this.index = (Ie.scopes || (Ie.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ie;
      try {
        return Ie = this, t();
      } finally {
        Ie = n;
      }
    } else
      process.env.NODE_ENV !== "production" && bo("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ie = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ie = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function fc(e, t = Ie) {
  t && t.active && t.effects.push(e);
}
function dc() {
  return Ie;
}
const pn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, ws = (e) => (e.w & ht) > 0, Os = (e) => (e.n & ht) > 0, pc = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= ht;
}, hc = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      ws(r) && !Os(r) ? r.delete(e) : t[n++] = r, r.w &= ~ht, r.n &= ~ht;
    }
    t.length = n;
  }
}, wo = /* @__PURE__ */ new WeakMap();
let tn = 0, ht = 1;
const Oo = 30;
let Ee;
const Dt = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), xo = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class tr {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, fc(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Ee, n = dt;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Ee, Ee = this, dt = !0, ht = 1 << ++tn, tn <= Oo ? pc(this) : br(this), this.fn();
    } finally {
      tn <= Oo && hc(this), ht = 1 << --tn, Ee = this.parent, dt = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Ee === this ? this.deferStop = !0 : this.active && (br(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function br(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let dt = !0;
const xs = [];
function It() {
  xs.push(dt), dt = !1;
}
function Tt() {
  const e = xs.pop();
  dt = e === void 0 ? !0 : e;
}
function me(e, t, n) {
  if (dt && Ee) {
    let o = wo.get(e);
    o || wo.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = pn());
    const s = process.env.NODE_ENV !== "production" ? { effect: Ee, target: e, type: t, key: n } : void 0;
    Do(r, s);
  }
}
function Do(e, t) {
  let n = !1;
  tn <= Oo ? Os(e) || (e.n |= ht, n = !ws(e)) : n = !e.has(Ee), n && (e.add(Ee), Ee.deps.push(e), process.env.NODE_ENV !== "production" && Ee.onTrack && Ee.onTrack(
    se(
      {
        effect: Ee
      },
      t
    )
  ));
}
function qe(e, t, n, o, r, s) {
  const i = wo.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && k(e)) {
    const d = Number(o);
    i.forEach((u, f) => {
      (f === "length" || f >= d) && c.push(u);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        k(e) ? Zo(n) && c.push(i.get("length")) : (c.push(i.get(Dt)), xt(e) && c.push(i.get(xo)));
        break;
      case "delete":
        k(e) || (c.push(i.get(Dt)), xt(e) && c.push(i.get(xo)));
        break;
      case "set":
        xt(e) && c.push(i.get(Dt));
        break;
    }
  const a = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? zt(c[0], a) : zt(c[0]));
  else {
    const d = [];
    for (const u of c)
      u && d.push(...u);
    process.env.NODE_ENV !== "production" ? zt(pn(d), a) : zt(pn(d));
  }
}
function zt(e, t) {
  const n = k(e) ? e : [...e];
  for (const o of n)
    o.computed && wr(o, t);
  for (const o of n)
    o.computed || wr(o, t);
}
function wr(e, t) {
  (e !== Ee || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(se({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const mc = /* @__PURE__ */ vt("__proto__,__v_isRef,__isVue"), Ds = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Go)
), gc = /* @__PURE__ */ Zn(), _c = /* @__PURE__ */ Zn(!1, !0), vc = /* @__PURE__ */ Zn(!0), Ec = /* @__PURE__ */ Zn(!0, !0), Or = /* @__PURE__ */ yc();
function yc() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = F(this);
      for (let s = 0, i = this.length; s < i; s++)
        me(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(F)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      It();
      const o = F(this)[t].apply(this, n);
      return Tt(), o;
    };
  }), e;
}
function Nc(e) {
  const t = F(this);
  return me(t, "has", e), t.hasOwnProperty(e);
}
function Zn(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? Ts : Is : t ? Ss : Rs).get(o))
      return o;
    const i = k(o);
    if (!e) {
      if (i && K(Or, r))
        return Reflect.get(Or, r, s);
      if (r === "hasOwnProperty")
        return Nc;
    }
    const c = Reflect.get(o, r, s);
    return (Go(r) ? Ds.has(r) : mc(r)) || (e || me(o, "get", r), t) ? c : le(c) ? i && Zo(r) ? c : c.value : ee(c) ? e ? Ms(c) : to(c) : c;
  };
}
const bc = /* @__PURE__ */ Vs(), wc = /* @__PURE__ */ Vs(!0);
function Vs(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (mt(i) && le(i) && !le(r))
      return !1;
    if (!e && (!Un(r) && !mt(r) && (i = F(i), r = F(r)), !k(n) && le(i) && !le(r)))
      return i.value = r, !0;
    const c = k(n) && Zo(o) ? Number(o) < n.length : K(n, o), a = Reflect.set(n, o, r, s);
    return n === F(s) && (c ? dn(r, i) && qe(n, "set", o, r, i) : qe(n, "add", o, r)), a;
  };
}
function Oc(e, t) {
  const n = K(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && qe(e, "delete", t, void 0, o), r;
}
function xc(e, t) {
  const n = Reflect.has(e, t);
  return (!Go(t) || !Ds.has(t)) && me(e, "has", t), n;
}
function Dc(e) {
  return me(e, "iterate", k(e) ? "length" : Dt), Reflect.ownKeys(e);
}
const Cs = {
  get: gc,
  set: bc,
  deleteProperty: Oc,
  has: xc,
  ownKeys: Dc
}, $s = {
  get: vc,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && bo(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && bo(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
}, Vc = /* @__PURE__ */ se(
  {},
  Cs,
  {
    get: _c,
    set: wc
  }
), Cc = /* @__PURE__ */ se(
  {},
  $s,
  {
    get: Ec
  }
), nr = (e) => e, Xn = (e) => Reflect.getPrototypeOf(e);
function Dn(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = F(e), s = F(t);
  n || (t !== s && me(r, "get", t), me(r, "get", s));
  const { has: i } = Xn(r), c = o ? nr : n ? or : hn;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function Vn(e, t = !1) {
  const n = this.__v_raw, o = F(n), r = F(e);
  return t || (e !== r && me(o, "has", e), me(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Cn(e, t = !1) {
  return e = e.__v_raw, !t && me(F(e), "iterate", Dt), Reflect.get(e, "size", e);
}
function xr(e) {
  e = F(e);
  const t = F(this);
  return Xn(t).has.call(t, e) || (t.add(e), qe(t, "add", e, e)), this;
}
function Dr(e, t) {
  t = F(t);
  const n = F(this), { has: o, get: r } = Xn(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Ps(n, o, e) : (e = F(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? dn(t, i) && qe(n, "set", e, t, i) : qe(n, "add", e, t), this;
}
function Vr(e) {
  const t = F(this), { has: n, get: o } = Xn(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Ps(t, n, e) : (e = F(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && qe(t, "delete", e, void 0, s), i;
}
function Cr() {
  const e = F(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? xt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && qe(e, "clear", void 0, void 0, n), o;
}
function $n(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, c = F(i), a = t ? nr : e ? or : hn;
    return !e && me(c, "iterate", Dt), i.forEach((d, u) => o.call(r, a(d), a(u), s));
  };
}
function Pn(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = F(r), i = xt(s), c = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, d = r[e](...o), u = n ? nr : t ? or : hn;
    return !t && me(
      s,
      "iterate",
      a ? xo : Dt
    ), {
      // iterator protocol
      next() {
        const { value: f, done: h } = d.next();
        return h ? { value: f, done: h } : {
          value: c ? [u(f[0]), u(f[1])] : u(f),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function it(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${Jn(e)} operation ${n}failed: target is readonly.`,
        F(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function $c() {
  const e = {
    get(s) {
      return Dn(this, s);
    },
    get size() {
      return Cn(this);
    },
    has: Vn,
    add: xr,
    set: Dr,
    delete: Vr,
    clear: Cr,
    forEach: $n(!1, !1)
  }, t = {
    get(s) {
      return Dn(this, s, !1, !0);
    },
    get size() {
      return Cn(this);
    },
    has: Vn,
    add: xr,
    set: Dr,
    delete: Vr,
    clear: Cr,
    forEach: $n(!1, !0)
  }, n = {
    get(s) {
      return Dn(this, s, !0);
    },
    get size() {
      return Cn(this, !0);
    },
    has(s) {
      return Vn.call(this, s, !0);
    },
    add: it("add"),
    set: it("set"),
    delete: it("delete"),
    clear: it("clear"),
    forEach: $n(!0, !1)
  }, o = {
    get(s) {
      return Dn(this, s, !0, !0);
    },
    get size() {
      return Cn(this, !0);
    },
    has(s) {
      return Vn.call(this, s, !0);
    },
    add: it("add"),
    set: it("set"),
    delete: it("delete"),
    clear: it("clear"),
    forEach: $n(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = Pn(
      s,
      !1,
      !1
    ), n[s] = Pn(
      s,
      !0,
      !1
    ), t[s] = Pn(
      s,
      !1,
      !0
    ), o[s] = Pn(
      s,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  Pc,
  Rc,
  Sc,
  Ic
] = /* @__PURE__ */ $c();
function eo(e, t) {
  const n = t ? e ? Ic : Sc : e ? Rc : Pc;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    K(n, r) && r in o ? n : o,
    r,
    s
  );
}
const Tc = {
  get: /* @__PURE__ */ eo(!1, !1)
}, Ac = {
  get: /* @__PURE__ */ eo(!1, !0)
}, Mc = {
  get: /* @__PURE__ */ eo(!0, !1)
}, kc = {
  get: /* @__PURE__ */ eo(!0, !0)
};
function Ps(e, t, n) {
  const o = F(n);
  if (o !== n && t.call(e, o)) {
    const r = Jo(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Rs = /* @__PURE__ */ new WeakMap(), Ss = /* @__PURE__ */ new WeakMap(), Is = /* @__PURE__ */ new WeakMap(), Ts = /* @__PURE__ */ new WeakMap();
function jc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function zc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : jc(Jo(e));
}
function to(e) {
  return mt(e) ? e : no(
    e,
    !1,
    Cs,
    Tc,
    Rs
  );
}
function As(e) {
  return no(
    e,
    !1,
    Vc,
    Ac,
    Ss
  );
}
function Ms(e) {
  return no(
    e,
    !0,
    $s,
    Mc,
    Is
  );
}
function nn(e) {
  return no(
    e,
    !0,
    Cc,
    kc,
    Ts
  );
}
function no(e, t, n, o, r) {
  if (!ee(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = zc(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? o : n
  );
  return r.set(e, c), c;
}
function Vt(e) {
  return mt(e) ? Vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function mt(e) {
  return !!(e && e.__v_isReadonly);
}
function Un(e) {
  return !!(e && e.__v_isShallow);
}
function Vo(e) {
  return Vt(e) || mt(e);
}
function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e;
}
function ks(e) {
  return Ln(e, "__v_skip", !0), e;
}
const hn = (e) => ee(e) ? to(e) : e, or = (e) => ee(e) ? Ms(e) : e;
function js(e) {
  dt && Ee && (e = F(e), process.env.NODE_ENV !== "production" ? Do(e.dep || (e.dep = pn()), {
    target: e,
    type: "get",
    key: "value"
  }) : Do(e.dep || (e.dep = pn())));
}
function zs(e, t) {
  e = F(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? zt(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : zt(n));
}
function le(e) {
  return !!(e && e.__v_isRef === !0);
}
function Hc(e) {
  return Hs(e, !1);
}
function Lc(e) {
  return Hs(e, !0);
}
function Hs(e, t) {
  return le(e) ? e : new Fc(e, t);
}
class Fc {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : F(t), this._value = n ? t : hn(t);
  }
  get value() {
    return js(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Un(t) || mt(t);
    t = n ? t : F(t), dn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : hn(t), zs(this, t));
  }
}
function Xe(e) {
  return le(e) ? e.value : e;
}
const Uc = {
  get: (e, t, n) => Xe(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return le(r) && !le(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ls(e) {
  return Vt(e) ? e : new Proxy(e, Uc);
}
class Bc {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new tr(t, () => {
      this._dirty || (this._dirty = !0, zs(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = F(this);
    return js(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function Kc(e, t, n = !1) {
  let o, r;
  const s = H(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : pe) : (o = e.get, r = e.set);
  const i = new Bc(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const Ct = [];
function Tn(e) {
  Ct.push(e);
}
function An() {
  Ct.pop();
}
function w(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  It();
  const n = Ct.length ? Ct[Ct.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Wc();
  if (o)
    et(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        r.map(
          ({ vnode: s }) => `at <${ao(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...qc(r)), console.warn(...s);
  }
  Tt();
}
function Wc() {
  let e = Ct[Ct.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function qc(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Yc(n));
  }), t;
}
function Yc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${ao(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...Gc(e.props), s] : [r + s];
}
function Gc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Fs(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Fs(e, t, n) {
  return ie(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : le(t) ? (t = Fs(e, F(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : H(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = F(t), n ? t : [`${e}=`, t]);
}
const rr = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function et(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    oo(s, t, n);
  }
  return r;
}
function ke(e, t, n, o) {
  if (H(e)) {
    const s = et(e, t, n, o);
    return s && Qo(s) && s.catch((i) => {
      oo(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(ke(e[s], t, n, o));
  return r;
}
function oo(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? rr[n] : n;
    for (; s; ) {
      const d = s.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, i, c) === !1)
            return;
      }
      s = s.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      et(
        a,
        null,
        10,
        [e, i, c]
      );
      return;
    }
  }
  Qc(e, n, r, o);
}
function Qc(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = rr[t];
    if (n && Tn(n), w(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && An(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let mn = !1, Co = !1;
const ge = [];
let Ke = 0;
const Ft = [];
let Be = null, lt = 0;
const Us = /* @__PURE__ */ Promise.resolve();
let sr = null;
const Jc = 100;
function Bs(e) {
  const t = sr || Us;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Zc(e) {
  let t = Ke + 1, n = ge.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    gn(ge[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function ro(e) {
  (!ge.length || !ge.includes(
    e,
    mn && e.allowRecurse ? Ke + 1 : Ke
  )) && (e.id == null ? ge.push(e) : ge.splice(Zc(e.id), 0, e), Ks());
}
function Ks() {
  !mn && !Co && (Co = !0, sr = Us.then(Ys));
}
function Xc(e) {
  const t = ge.indexOf(e);
  t > Ke && ge.splice(t, 1);
}
function Ws(e) {
  k(e) ? Ft.push(...e) : (!Be || !Be.includes(
    e,
    e.allowRecurse ? lt + 1 : lt
  )) && Ft.push(e), Ks();
}
function $r(e, t = mn ? Ke + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < ge.length; t++) {
    const n = ge[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && ir(e, n))
        continue;
      ge.splice(t, 1), t--, n();
    }
  }
}
function qs(e) {
  if (Ft.length) {
    const t = [...new Set(Ft)];
    if (Ft.length = 0, Be) {
      Be.push(...t);
      return;
    }
    for (Be = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Be.sort((n, o) => gn(n) - gn(o)), lt = 0; lt < Be.length; lt++)
      process.env.NODE_ENV !== "production" && ir(e, Be[lt]) || Be[lt]();
    Be = null, lt = 0;
  }
}
const gn = (e) => e.id == null ? 1 / 0 : e.id, el = (e, t) => {
  const n = gn(e) - gn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Ys(e) {
  Co = !1, mn = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ge.sort(el);
  const t = process.env.NODE_ENV !== "production" ? (n) => ir(e, n) : pe;
  try {
    for (Ke = 0; Ke < ge.length; Ke++) {
      const n = ge[Ke];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        et(n, null, 14);
      }
    }
  } finally {
    Ke = 0, ge.length = 0, qs(e), mn = !1, sr = null, (ge.length || Ft.length) && Ys(e);
  }
}
function ir(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Jc) {
      const o = t.ownerInstance, r = o && Oi(o.type);
      return w(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let $t = !1;
const jt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Fn().__VUE_HMR_RUNTIME__ = {
  createRecord: fo(Gs),
  rerender: fo(ol),
  reload: fo(rl)
});
const St = /* @__PURE__ */ new Map();
function tl(e) {
  const t = e.type.__hmrId;
  let n = St.get(t);
  n || (Gs(t, e.type), n = St.get(t)), n.instances.add(e);
}
function nl(e) {
  St.get(e.type.__hmrId).instances.delete(e);
}
function Gs(e, t) {
  return St.has(e) ? !1 : (St.set(e, {
    initialDef: sn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function sn(e) {
  return xi(e) ? e.__vccOpts : e;
}
function ol(e, t) {
  const n = St.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, sn(o.type).render = t), o.renderCache = [], $t = !0, o.update(), $t = !1;
  }));
}
function rl(e, t) {
  const n = St.get(e);
  if (!n)
    return;
  t = sn(t), Pr(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = sn(r.type);
    jt.has(s) || (s !== n.initialDef && Pr(s, t), jt.add(s)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (jt.add(s), r.ceReload(t.styles), jt.delete(s)) : r.parent ? ro(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Ws(() => {
    for (const r of o)
      jt.delete(
        sn(r.type)
      );
  });
}
function Pr(e, t) {
  se(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function fo(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let We, on = [], $o = !1;
function bn(e, ...t) {
  We ? We.emit(e, ...t) : $o || on.push({ event: e, args: t });
}
function Qs(e, t) {
  var n, o;
  We = e, We ? (We.enabled = !0, on.forEach(({ event: r, args: s }) => We.emit(r, ...s)), on = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Qs(s, t);
  }), setTimeout(() => {
    We || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, $o = !0, on = []);
  }, 3e3)) : ($o = !0, on = []);
}
function sl(e, t) {
  bn("app:init", e, t, {
    Fragment: Oe,
    Text: wn,
    Comment: Pe,
    Static: jn
  });
}
function il(e) {
  bn("app:unmount", e);
}
const cl = /* @__PURE__ */ cr(
  "component:added"
  /* COMPONENT_ADDED */
), Js = /* @__PURE__ */ cr(
  "component:updated"
  /* COMPONENT_UPDATED */
), ll = /* @__PURE__ */ cr(
  "component:removed"
  /* COMPONENT_REMOVED */
), al = (e) => {
  We && typeof We.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !We.cleanupBuffer(e) && ll(e);
};
function cr(e) {
  return (t) => {
    bn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const ul = /* @__PURE__ */ Zs(
  "perf:start"
  /* PERFORMANCE_START */
), fl = /* @__PURE__ */ Zs(
  "perf:end"
  /* PERFORMANCE_END */
);
function Zs(e) {
  return (t, n, o) => {
    bn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function dl(e, t, n) {
  bn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function pl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || ne;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [f]
    } = e;
    if (u)
      if (!(t in u))
        (!f || !(wt(t) in f)) && w(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${wt(t)}" prop.`
        );
      else {
        const h = u[t];
        H(h) && (h(...n) || w(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const u = `${i === "modelValue" ? "model" : i}Modifiers`, { number: f, trim: h } = o[u] || ne;
    h && (r = n.map((_) => ie(_) ? _.trim() : _)), f && (r = n.map(Zi));
  }
  if (process.env.NODE_ENV !== "production" && dl(e, t, r), process.env.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && o[wt(u)] && w(
      `Event "${u}" is emitted in component ${ao(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${pt(t)}" instead of "${t}".`
    );
  }
  let c, a = o[c = wt(t)] || // also try camelCase event handler (#2249)
  o[c = wt(Ut(t))];
  !a && s && (a = o[c = wt(pt(t))]), a && ke(
    a,
    e,
    6,
    r
  );
  const d = o[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ke(
      d,
      e,
      6,
      r
    );
  }
}
function Xs(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, c = !1;
  if (!H(e)) {
    const a = (d) => {
      const u = Xs(d, t, !0);
      u && (c = !0, se(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !c ? (ee(e) && o.set(e, null), null) : (k(s) ? s.forEach((a) => i[a] = null) : se(i, s), ee(e) && o.set(e, i), i);
}
function so(e, t) {
  return !e || !Nn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, pt(t)) || K(e, t));
}
let he = null, io = null;
function Bn(e) {
  const t = he;
  return he = e, io = e && e.type.__scopeId || null, t;
}
function ei(e) {
  io = e;
}
function ti() {
  io = null;
}
function ae(e, t = he, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Fr(-1);
    const s = Bn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Bn(s), o._d && Fr(1);
    }
    return process.env.NODE_ENV !== "production" && Js(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Po = !1;
function Kn() {
  Po = !0;
}
function po(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    props: s,
    propsOptions: [i],
    slots: c,
    attrs: a,
    emit: d,
    render: u,
    renderCache: f,
    data: h,
    setupState: _,
    ctx: x,
    inheritAttrs: I
  } = e;
  let j, R;
  const z = Bn(e);
  process.env.NODE_ENV !== "production" && (Po = !1);
  try {
    if (n.shapeFlag & 4) {
      const M = r || o;
      j = Te(
        u.call(
          M,
          M,
          f,
          s,
          _,
          h,
          x
        )
      ), R = a;
    } else {
      const M = t;
      process.env.NODE_ENV !== "production" && a === s && Kn(), j = Te(
        M.length > 1 ? M(
          s,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Kn(), a;
            },
            slots: c,
            emit: d
          } : { attrs: a, slots: c, emit: d }
        ) : M(
          s,
          null
          /* we know it doesn't need it */
        )
      ), R = t.props ? a : ml(a);
    }
  } catch (M) {
    an.length = 0, oo(M, e, 1), j = X(Pe);
  }
  let A = j, oe;
  if (process.env.NODE_ENV !== "production" && j.patchFlag > 0 && j.patchFlag & 2048 && ([A, oe] = hl(j)), R && I !== !1) {
    const M = Object.keys(R), { shapeFlag: fe } = A;
    if (M.length) {
      if (fe & 7)
        i && M.some(Hn) && (R = gl(
          R,
          i
        )), A = gt(A, R);
      else if (process.env.NODE_ENV !== "production" && !Po && A.type !== Pe) {
        const ye = Object.keys(a), ze = [], Ne = [];
        for (let De = 0, Re = ye.length; De < Re; De++) {
          const be = ye[De];
          Nn(be) ? Hn(be) || ze.push(be[2].toLowerCase() + be.slice(3)) : Ne.push(be);
        }
        Ne.length && w(
          `Extraneous non-props attributes (${Ne.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), ze.length && w(
          `Extraneous non-emits event listeners (${ze.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Rr(A) && w(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), A = gt(A), A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Rr(A) && w(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), A.transition = n.transition), process.env.NODE_ENV !== "production" && oe ? oe(A) : j = A, Bn(z), j;
}
const hl = (e) => {
  const t = e.children, n = e.dynamicChildren, o = ni(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (c) => {
    t[r] = c, n && (s > -1 ? n[s] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [Te(o), i];
};
function ni(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Bt(o)) {
      if (o.type !== Pe || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const ml = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Nn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, gl = (e, t) => {
  const n = {};
  for (const o in e)
    (!Hn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Rr = (e) => e.shapeFlag & 7 || e.type === Pe;
function _l(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: c, patchFlag: a } = t, d = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || c) && $t || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return o ? Sr(o, i, d) : !!i;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (i[h] !== o[h] && !so(d, h))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === i ? !1 : o ? i ? Sr(o, i, d) : !0 : !!i;
  return !1;
}
function Sr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !so(n, s))
      return !0;
  }
  return !1;
}
function vl({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const El = (e) => e.__isSuspense;
function yl(e, t) {
  t && t.pendingBranch ? k(e) ? t.effects.push(...e) : t.effects.push(e) : Ws(e);
}
function Nl(e, t) {
  return lr(e, null, t);
}
const Rn = {};
function cn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !H(t) && w(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), lr(e, t, n);
}
function lr(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = ne) {
  var c;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = (M) => {
    w(
      "Invalid watch source: ",
      M,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = dc() === ((c = ue) == null ? void 0 : c.scope) ? ue : null;
  let u, f = !1, h = !1;
  if (le(e) ? (u = () => e.value, f = Un(e)) : Vt(e) ? (u = () => e, o = !0) : k(e) ? (h = !0, f = e.some((M) => Vt(M) || Un(M)), u = () => e.map((M) => {
    if (le(M))
      return M.value;
    if (Vt(M))
      return Ht(M);
    if (H(M))
      return et(M, d, 2);
    process.env.NODE_ENV !== "production" && a(M);
  })) : H(e) ? t ? u = () => et(e, d, 2) : u = () => {
    if (!(d && d.isUnmounted))
      return _ && _(), ke(
        e,
        d,
        3,
        [x]
      );
  } : (u = pe, process.env.NODE_ENV !== "production" && a(e)), t && o) {
    const M = u;
    u = () => Ht(M());
  }
  let _, x = (M) => {
    _ = A.onStop = () => {
      et(M, d, 4);
    };
  }, I;
  if (vn)
    if (x = pe, t ? n && ke(t, d, 3, [
      u(),
      h ? [] : void 0,
      x
    ]) : u(), r === "sync") {
      const M = Da();
      I = M.__watcherHandles || (M.__watcherHandles = []);
    } else
      return pe;
  let j = h ? new Array(e.length).fill(Rn) : Rn;
  const R = () => {
    if (A.active)
      if (t) {
        const M = A.run();
        (o || f || (h ? M.some(
          (fe, ye) => dn(fe, j[ye])
        ) : dn(M, j))) && (_ && _(), ke(t, d, 3, [
          M,
          // pass undefined as the old value when it's changed for the first time
          j === Rn ? void 0 : h && j[0] === Rn ? [] : j,
          x
        ]), j = M);
      } else
        A.run();
  };
  R.allowRecurse = !!t;
  let z;
  r === "sync" ? z = R : r === "post" ? z = () => we(R, d && d.suspense) : (R.pre = !0, d && (R.id = d.uid), z = () => ro(R));
  const A = new tr(u, z);
  process.env.NODE_ENV !== "production" && (A.onTrack = s, A.onTrigger = i), t ? n ? R() : j = A.run() : r === "post" ? we(
    A.run.bind(A),
    d && d.suspense
  ) : A.run();
  const oe = () => {
    A.stop(), d && d.scope && Yo(d.scope.effects, A);
  };
  return I && I.push(oe), oe;
}
function bl(e, t, n) {
  const o = this.proxy, r = ie(e) ? e.includes(".") ? oi(o, e) : () => o[e] : e.bind(o, o);
  let s;
  H(t) ? s = t : (s = t.handler, n = t);
  const i = ue;
  Kt(this);
  const c = lr(r, s.bind(o), n);
  return i ? Kt(i) : Rt(), c;
}
function oi(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function Ht(e, t) {
  if (!ee(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), le(e))
    Ht(e.value, t);
  else if (k(e))
    for (let n = 0; n < e.length; n++)
      Ht(e[n], t);
  else if (vs(e) || xt(e))
    e.forEach((n) => {
      Ht(n, t);
    });
  else if (ys(e))
    for (const n in e)
      Ht(e[n], t);
  return e;
}
function ri(e) {
  Gi(e) && w("Do not use built-in directive ids as custom directive id: " + e);
}
function Nt(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    s && (c.oldValue = s[i].value);
    let a = c.dir[o];
    a && (It(), ke(a, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Tt());
  }
}
function qt(e, t) {
  return H(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => se({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const ln = (e) => !!e.type.__asyncLoader, ar = (e) => e.type.__isKeepAlive;
function wl(e, t) {
  si(e, "a", t);
}
function Ol(e, t) {
  si(e, "da", t);
}
function si(e, t, n = ue) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (co(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      ar(r.parent.vnode) && xl(o, t, n, r), r = r.parent;
  }
}
function xl(e, t, n, o) {
  const r = co(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  ii(() => {
    Yo(o[t], r);
  }, n);
}
function co(e, t, n = ue, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      It(), Kt(n);
      const c = ke(t, n, e, i);
      return Rt(), Tt(), c;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = wt(rr[e].replace(/ hook$/, ""));
    w(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const nt = (e) => (t, n = ue) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!vn || e === "sp") && co(e, (...o) => t(...o), n)
), Dl = nt("bm"), Vl = nt("m"), Cl = nt("bu"), $l = nt("u"), Pl = nt("bum"), ii = nt("um"), Rl = nt("sp"), Sl = nt(
  "rtg"
), Il = nt(
  "rtc"
);
function Tl(e, t = ue) {
  co("ec", e, t);
}
const Al = Symbol.for("v-ndc");
function ho(e, t, n = {}, o, r) {
  if (he.isCE || he.parent && ln(he.parent) && he.parent.isCE)
    return t !== "default" && (n.name = t), X("slot", n, o && o());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (w(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), je();
  const i = s && ci(s(n)), c = ua(
    Oe,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (o ? o() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !r && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), s && s._c && (s._d = !0), c;
}
function ci(e) {
  return e.some((t) => Bt(t) ? !(t.type === Pe || t.type === Oe && !ci(t.children)) : !0) ? e : null;
}
const Ro = (e) => e ? bi(e) ? mr(e) || e.proxy : Ro(e.parent) : null, Pt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ se(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? nn(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? nn(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? nn(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? nn(e.refs) : e.refs,
    $parent: (e) => Ro(e.parent),
    $root: (e) => Ro(e.root),
    $emit: (e) => e.emit,
    $options: (e) => fr(e),
    $forceUpdate: (e) => e.f || (e.f = () => ro(e.update)),
    $nextTick: (e) => e.n || (e.n = Bs.bind(e.proxy)),
    $watch: (e) => bl.bind(e)
  })
), ur = (e) => e === "_" || e === "$", mo = (e, t) => e !== ne && !e.__isScriptSetup && K(e, t), li = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: c, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const _ = i[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (mo(o, t))
          return i[t] = 1, o[t];
        if (r !== ne && K(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && K(d, t)
        )
          return i[t] = 3, s[t];
        if (n !== ne && K(n, t))
          return i[t] = 4, n[t];
        So && (i[t] = 0);
      }
    }
    const u = Pt[t];
    let f, h;
    if (u)
      return t === "$attrs" ? (me(e, "get", t), process.env.NODE_ENV !== "production" && Kn()) : process.env.NODE_ENV !== "production" && t === "$slots" && me(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (f = c.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== ne && K(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, K(h, t)
    )
      return h[t];
    process.env.NODE_ENV !== "production" && he && (!ie(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== ne && ur(t[0]) && K(r, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === he && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return mo(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && K(r, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== ne && K(o, t) ? (o[t] = n, !0) : K(e.props, t) ? (process.env.NODE_ENV !== "production" && w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && w(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s }
  }, i) {
    let c;
    return !!n[i] || e !== ne && K(e, i) || mo(t, i) || (c = s[0]) && K(c, i) || K(o, i) || K(Pt, i) || K(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : K(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (li.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ml(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Pt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Pt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: pe
    });
  }), t;
}
function kl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: pe
    });
  });
}
function jl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(F(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (ur(o[0])) {
        w(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: pe
      });
    }
  });
}
function Ir(e) {
  return k(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function zl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? w(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let So = !0;
function Hl(e) {
  const t = fr(e), n = e.proxy, o = e.ctx;
  So = !1, t.beforeCreate && Tr(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: s,
    methods: i,
    watch: c,
    provide: a,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: h,
    beforeUpdate: _,
    updated: x,
    activated: I,
    deactivated: j,
    beforeDestroy: R,
    beforeUnmount: z,
    destroyed: A,
    unmounted: oe,
    render: M,
    renderTracked: fe,
    renderTriggered: ye,
    errorCaptured: ze,
    serverPrefetch: Ne,
    // public API
    expose: De,
    inheritAttrs: Re,
    // assets
    components: be,
    directives: He,
    filters: On
  } = t, Ve = process.env.NODE_ENV !== "production" ? zl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [U] = e.propsOptions;
    if (U)
      for (const B in U)
        Ve("Props", B);
  }
  if (d && Ll(d, o, Ve), i)
    for (const U in i) {
      const B = i[U];
      H(B) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, U, {
        value: B.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[U] = B.bind(n), process.env.NODE_ENV !== "production" && Ve("Methods", U)) : process.env.NODE_ENV !== "production" && w(
        `Method "${U}" has type "${typeof B}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !H(r) && w(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const U = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && Qo(U) && w(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ee(U))
      process.env.NODE_ENV !== "production" && w("data() should return an object.");
    else if (e.data = to(U), process.env.NODE_ENV !== "production")
      for (const B in U)
        Ve("Data", B), ur(B[0]) || Object.defineProperty(o, B, {
          configurable: !0,
          enumerable: !0,
          get: () => U[B],
          set: pe
        });
  }
  if (So = !0, s)
    for (const U in s) {
      const B = s[U], Ce = H(B) ? B.bind(n, n) : H(B.get) ? B.get.bind(n, n) : pe;
      process.env.NODE_ENV !== "production" && Ce === pe && w(`Computed property "${U}" has no getter.`);
      const yt = !H(B) && H(B.set) ? B.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        w(
          `Write operation failed: computed property "${U}" is readonly.`
        );
      } : pe, ot = Ae({
        get: Ce,
        set: yt
      });
      Object.defineProperty(o, U, {
        enumerable: !0,
        configurable: !0,
        get: () => ot.value,
        set: (Le) => ot.value = Le
      }), process.env.NODE_ENV !== "production" && Ve("Computed", U);
    }
  if (c)
    for (const U in c)
      ai(c[U], o, n, U);
  if (a) {
    const U = H(a) ? a.call(n) : a;
    Reflect.ownKeys(U).forEach((B) => {
      Mn(B, U[B]);
    });
  }
  u && Tr(u, e, "c");
  function de(U, B) {
    k(B) ? B.forEach((Ce) => U(Ce.bind(n))) : B && U(B.bind(n));
  }
  if (de(Dl, f), de(Vl, h), de(Cl, _), de($l, x), de(wl, I), de(Ol, j), de(Tl, ze), de(Il, fe), de(Sl, ye), de(Pl, z), de(ii, oe), de(Rl, Ne), k(De))
    if (De.length) {
      const U = e.exposed || (e.exposed = {});
      De.forEach((B) => {
        Object.defineProperty(U, B, {
          get: () => n[B],
          set: (Ce) => n[B] = Ce
        });
      });
    } else
      e.exposed || (e.exposed = {});
  M && e.render === pe && (e.render = M), Re != null && (e.inheritAttrs = Re), be && (e.components = be), He && (e.directives = He);
}
function Ll(e, t, n = pe) {
  k(e) && (e = Io(e));
  for (const o in e) {
    const r = e[o];
    let s;
    ee(r) ? "default" in r ? s = tt(
      r.from || o,
      r.default,
      !0
      /* treat default function as factory */
    ) : s = tt(r.from || o) : s = tt(r), le(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[o] = s, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Tr(e, t, n) {
  ke(
    k(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ai(e, t, n, o) {
  const r = o.includes(".") ? oi(n, o) : () => n[o];
  if (ie(e)) {
    const s = t[e];
    H(s) ? cn(r, s) : process.env.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e}"`, s);
  } else if (H(e))
    cn(r, e.bind(n));
  else if (ee(e))
    if (k(e))
      e.forEach((s) => ai(s, t, n, o));
    else {
      const s = H(e.handler) ? e.handler.bind(n) : t[e.handler];
      H(s) ? cn(r, s, e) : process.env.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && w(`Invalid watch option: "${o}"`, e);
}
function fr(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = s.get(t);
  let a;
  return c ? a = c : !r.length && !n && !o ? a = t : (a = {}, r.length && r.forEach(
    (d) => Wn(a, d, i, !0)
  ), Wn(a, t, i)), ee(t) && s.set(t, a), a;
}
function Wn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Wn(e, s, n, !0), r && r.forEach(
    (i) => Wn(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = Fl[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Fl = {
  data: Ar,
  props: Mr,
  emits: Mr,
  // objects
  methods: rn,
  computed: rn,
  // lifecycle
  beforeCreate: ve,
  created: ve,
  beforeMount: ve,
  mounted: ve,
  beforeUpdate: ve,
  updated: ve,
  beforeDestroy: ve,
  beforeUnmount: ve,
  destroyed: ve,
  unmounted: ve,
  activated: ve,
  deactivated: ve,
  errorCaptured: ve,
  serverPrefetch: ve,
  // assets
  components: rn,
  directives: rn,
  // watch
  watch: Bl,
  // provide / inject
  provide: Ar,
  inject: Ul
};
function Ar(e, t) {
  return t ? e ? function() {
    return se(
      H(e) ? e.call(this, this) : e,
      H(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ul(e, t) {
  return rn(Io(e), Io(t));
}
function Io(e) {
  if (k(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function rn(e, t) {
  return e ? se(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Mr(e, t) {
  return e ? k(e) && k(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : se(
    /* @__PURE__ */ Object.create(null),
    Ir(e),
    Ir(t ?? {})
  ) : t;
}
function Bl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = se(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ve(e[o], t[o]);
  return n;
}
function ui() {
  return {
    app: null,
    config: {
      isNativeTag: _s,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Kl = 0;
function Wl(e, t) {
  return function(o, r = null) {
    H(o) || (o = se({}, o)), r != null && !ee(r) && (process.env.NODE_ENV !== "production" && w("root props passed to app.mount() must be an object."), r = null);
    const s = ui();
    process.env.NODE_ENV !== "production" && Object.defineProperty(s.config, "unwrapInjectedRef", {
      get() {
        return !0;
      },
      set() {
        w(
          "app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API."
        );
      }
    });
    const i = /* @__PURE__ */ new Set();
    let c = !1;
    const a = s.app = {
      _uid: Kl++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Wr,
      get config() {
        return s.config;
      },
      set config(d) {
        process.env.NODE_ENV !== "production" && w(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return i.has(d) ? process.env.NODE_ENV !== "production" && w("Plugin has already been applied to target app.") : d && H(d.install) ? (i.add(d), d.install(a, ...u)) : H(d) ? (i.add(d), d(a, ...u)) : process.env.NODE_ENV !== "production" && w(
          'A plugin must either be a function or an object with an "install" function.'
        ), a;
      },
      mixin(d) {
        return s.mixins.includes(d) ? process.env.NODE_ENV !== "production" && w(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : s.mixins.push(d), a;
      },
      component(d, u) {
        return process.env.NODE_ENV !== "production" && ko(d, s.config), u ? (process.env.NODE_ENV !== "production" && s.components[d] && w(`Component "${d}" has already been registered in target app.`), s.components[d] = u, a) : s.components[d];
      },
      directive(d, u) {
        return process.env.NODE_ENV !== "production" && ri(d), u ? (process.env.NODE_ENV !== "production" && s.directives[d] && w(`Directive "${d}" has already been registered in target app.`), s.directives[d] = u, a) : s.directives[d];
      },
      mount(d, u, f) {
        if (c)
          process.env.NODE_ENV !== "production" && w(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && d.__vue_app__ && w(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = X(
            o,
            r
          );
          return h.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(gt(h), d, f);
          }), u && t ? t(h, d) : e(h, d, f), c = !0, a._container = d, d.__vue_app__ = a, process.env.NODE_ENV !== "production" && (a._instance = h.component, sl(a, Wr)), mr(h.component) || h.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, a._container), process.env.NODE_ENV !== "production" && (a._instance = null, il(a)), delete a._container.__vue_app__) : process.env.NODE_ENV !== "production" && w("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return process.env.NODE_ENV !== "production" && d in s.provides && w(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), s.provides[d] = u, a;
      },
      runWithContext(d) {
        qn = a;
        try {
          return d();
        } finally {
          qn = null;
        }
      }
    };
    return a;
  };
}
let qn = null;
function Mn(e, t) {
  if (!ue)
    process.env.NODE_ENV !== "production" && w("provide() can only be used inside setup().");
  else {
    let n = ue.provides;
    const o = ue.parent && ue.parent.provides;
    o === n && (n = ue.provides = Object.create(o)), n[e] = t;
  }
}
function tt(e, t, n = !1) {
  const o = ue || he;
  if (o || qn) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : qn._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && H(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && w(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && w("inject() can only be used inside setup() or functional components.");
}
function ql(e, t, n, o = !1) {
  const r = {}, s = {};
  Ln(s, lo, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), fi(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && pi(t || {}, r, e), n ? e.props = o ? r : As(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Yl(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Gl(e, t, n, o) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, c = F(r), [a] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Yl(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (so(e.emitsOptions, h))
          continue;
        const _ = t[h];
        if (a)
          if (K(s, h))
            _ !== s[h] && (s[h] = _, d = !0);
          else {
            const x = Ut(h);
            r[x] = To(
              a,
              c,
              x,
              _,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          _ !== s[h] && (s[h] = _, d = !0);
      }
    }
  } else {
    fi(e, t, r, s) && (d = !0);
    let u;
    for (const f in c)
      (!t || // for camelCase
      !K(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = pt(f)) === f || !K(t, u))) && (a ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[f] = To(
        a,
        c,
        f,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[f]);
    if (s !== c)
      for (const f in s)
        (!t || !K(t, f)) && (delete s[f], d = !0);
  }
  d && qe(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && pi(t || {}, r, e);
}
function fi(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let a in t) {
      if (In(a))
        continue;
      const d = t[a];
      let u;
      r && K(r, u = Ut(a)) ? !s || !s.includes(u) ? n[u] = d : (c || (c = {}))[u] = d : so(e.emitsOptions, a) || (!(a in o) || d !== o[a]) && (o[a] = d, i = !0);
    }
  if (s) {
    const a = F(n), d = c || ne;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      n[f] = To(
        r,
        a,
        f,
        d[f],
        e,
        !K(d, f)
      );
    }
  }
  return i;
}
function To(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const c = K(i, "default");
    if (c && o === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && H(a)) {
        const { propsDefaults: d } = r;
        n in d ? o = d[n] : (Kt(r), o = d[n] = a.call(
          null,
          t
        ), Rt());
      } else
        o = a;
    }
    i[
      0
      /* shouldCast */
    ] && (s && !c ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === pt(n)) && (o = !0));
  }
  return o;
}
function di(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, c = [];
  let a = !1;
  if (!H(e)) {
    const u = (f) => {
      a = !0;
      const [h, _] = di(f, t, !0);
      se(i, h), _ && c.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !a)
    return ee(e) && o.set(e, Lt), Lt;
  if (k(s))
    for (let u = 0; u < s.length; u++) {
      process.env.NODE_ENV !== "production" && !ie(s[u]) && w("props must be strings when using array syntax.", s[u]);
      const f = Ut(s[u]);
      kr(f) && (i[f] = ne);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !ee(s) && w("invalid props options", s);
    for (const u in s) {
      const f = Ut(u);
      if (kr(f)) {
        const h = s[u], _ = i[f] = k(h) || H(h) ? { type: h } : se({}, h);
        if (_) {
          const x = zr(Boolean, _.type), I = zr(String, _.type);
          _[
            0
            /* shouldCast */
          ] = x > -1, _[
            1
            /* shouldCastTrue */
          ] = I < 0 || x < I, (x > -1 || K(_, "default")) && c.push(f);
        }
      }
    }
  }
  const d = [i, c];
  return ee(e) && o.set(e, d), d;
}
function kr(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && w(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ao(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function jr(e, t) {
  return Ao(e) === Ao(t);
}
function zr(e, t) {
  return k(t) ? t.findIndex((n) => jr(n, e)) : H(t) && jr(t, e) ? 0 : -1;
}
function pi(e, t, n) {
  const o = F(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && Ql(
      s,
      o[s],
      i,
      !K(e, s) && !K(e, pt(s))
    );
  }
}
function Ql(e, t, n, o) {
  const { type: r, required: s, validator: i, skipCheck: c } = n;
  if (s && o) {
    w('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (r != null && r !== !0 && !c) {
      let a = !1;
      const d = k(r) ? r : [r], u = [];
      for (let f = 0; f < d.length && !a; f++) {
        const { valid: h, expectedType: _ } = Zl(t, d[f]);
        u.push(_ || ""), a = h;
      }
      if (!a) {
        w(Xl(e, t, u));
        return;
      }
    }
    i && !i(t) && w('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Jl = /* @__PURE__ */ vt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Zl(e, t) {
  let n;
  const o = Ao(t);
  if (Jl(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = ee(e) : o === "Array" ? n = k(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Xl(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Jn).join(" | ")}`;
  const r = n[0], s = Jo(t), i = Hr(t, r), c = Hr(t, s);
  return n.length === 1 && Lr(r) && !ea(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, Lr(s) && (o += `with value ${c}.`), o;
}
function Hr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Lr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function ea(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const hi = (e) => e[0] === "_" || e === "$stable", dr = (e) => k(e) ? e.map(Te) : [Te(e)], ta = (e, t, n) => {
  if (t._n)
    return t;
  const o = ae((...r) => (process.env.NODE_ENV !== "production" && ue && w(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), dr(t(...r))), n);
  return o._c = !1, o;
}, mi = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (hi(r))
      continue;
    const s = e[r];
    if (H(s))
      t[r] = ta(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && w(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const i = dr(s);
      t[r] = () => i;
    }
  }
}, gi = (e, t) => {
  process.env.NODE_ENV !== "production" && !ar(e.vnode) && w(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = dr(t);
  e.slots.default = () => n;
}, na = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = F(t), Ln(t, "_", n)) : mi(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && gi(e, t);
  Ln(e.slots, lo, 1);
}, oa = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = ne;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && $t ? (se(r, t), qe(e, "set", "$slots")) : n && c === 1 ? s = !1 : (se(r, t), !n && c === 1 && delete r._) : (s = !t.$stable, mi(t, r)), i = t;
  } else
    t && (gi(e, t), i = { default: 1 });
  if (s)
    for (const c in r)
      !hi(c) && !(c in i) && delete r[c];
};
function Mo(e, t, n, o, r = !1) {
  if (k(e)) {
    e.forEach(
      (h, _) => Mo(
        h,
        t && (k(t) ? t[_] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (ln(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? mr(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: c, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    w(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, u = c.refs === ne ? c.refs = {} : c.refs, f = c.setupState;
  if (d != null && d !== a && (ie(d) ? (u[d] = null, K(f, d) && (f[d] = null)) : le(d) && (d.value = null)), H(a))
    et(a, c, 12, [i, u]);
  else {
    const h = ie(a), _ = le(a);
    if (h || _) {
      const x = () => {
        if (e.f) {
          const I = h ? K(f, a) ? f[a] : u[a] : a.value;
          r ? k(I) && Yo(I, s) : k(I) ? I.includes(s) || I.push(s) : h ? (u[a] = [s], K(f, a) && (f[a] = u[a])) : (a.value = [s], e.k && (u[e.k] = a.value));
        } else
          h ? (u[a] = i, K(f, a) && (f[a] = i)) : _ ? (a.value = i, e.k && (u[e.k] = i)) : process.env.NODE_ENV !== "production" && w("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (x.id = -1, we(x, n)) : x();
    } else
      process.env.NODE_ENV !== "production" && w("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let Qt, ft;
function Qe(e, t) {
  e.appContext.config.performance && Yn() && ft.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && ul(e, t, Yn() ? ft.now() : Date.now());
}
function Je(e, t) {
  if (e.appContext.config.performance && Yn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    ft.mark(o), ft.measure(
      `<${ao(e, e.type)}> ${t}`,
      n,
      o
    ), ft.clearMarks(n), ft.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && fl(e, t, Yn() ? ft.now() : Date.now());
}
function Yn() {
  return Qt !== void 0 || (typeof window < "u" && window.performance ? (Qt = !0, ft = window.performance) : Qt = !1), Qt;
}
function ra() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const we = yl;
function sa(e) {
  return ia(e);
}
function ia(e, t) {
  ra();
  const n = Fn();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Qs(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: s,
    createElement: i,
    createText: c,
    createComment: a,
    setText: d,
    setElementText: u,
    parentNode: f,
    nextSibling: h,
    setScopeId: _ = pe,
    insertStaticContent: x
  } = e, I = (l, p, m, E = null, v = null, b = null, D = !1, N = null, O = process.env.NODE_ENV !== "production" && $t ? !1 : !!p.dynamicChildren) => {
    if (l === p)
      return;
    l && !Jt(l, p) && (E = V(l), $e(l, v, b, !0), l = null), p.patchFlag === -2 && (O = !1, p.dynamicChildren = null);
    const { type: y, ref: S, shapeFlag: P } = p;
    switch (y) {
      case wn:
        j(l, p, m, E);
        break;
      case Pe:
        R(l, p, m, E);
        break;
      case jn:
        l == null ? z(p, m, E, D) : process.env.NODE_ENV !== "production" && A(l, p, m, D);
        break;
      case Oe:
        He(
          l,
          p,
          m,
          E,
          v,
          b,
          D,
          N,
          O
        );
        break;
      default:
        P & 1 ? fe(
          l,
          p,
          m,
          E,
          v,
          b,
          D,
          N,
          O
        ) : P & 6 ? On(
          l,
          p,
          m,
          E,
          v,
          b,
          D,
          N,
          O
        ) : P & 64 || P & 128 ? y.process(
          l,
          p,
          m,
          E,
          v,
          b,
          D,
          N,
          O,
          $
        ) : process.env.NODE_ENV !== "production" && w("Invalid VNode type:", y, `(${typeof y})`);
    }
    S != null && v && Mo(S, l && l.ref, b, p || l, !p);
  }, j = (l, p, m, E) => {
    if (l == null)
      o(
        p.el = c(p.children),
        m,
        E
      );
    else {
      const v = p.el = l.el;
      p.children !== l.children && d(v, p.children);
    }
  }, R = (l, p, m, E) => {
    l == null ? o(
      p.el = a(p.children || ""),
      m,
      E
    ) : p.el = l.el;
  }, z = (l, p, m, E) => {
    [l.el, l.anchor] = x(
      l.children,
      p,
      m,
      E,
      l.el,
      l.anchor
    );
  }, A = (l, p, m, E) => {
    if (p.children !== l.children) {
      const v = h(l.anchor);
      M(l), [p.el, p.anchor] = x(
        p.children,
        m,
        v,
        E
      );
    } else
      p.el = l.el, p.anchor = l.anchor;
  }, oe = ({ el: l, anchor: p }, m, E) => {
    let v;
    for (; l && l !== p; )
      v = h(l), o(l, m, E), l = v;
    o(p, m, E);
  }, M = ({ el: l, anchor: p }) => {
    let m;
    for (; l && l !== p; )
      m = h(l), r(l), l = m;
    r(p);
  }, fe = (l, p, m, E, v, b, D, N, O) => {
    D = D || p.type === "svg", l == null ? ye(
      p,
      m,
      E,
      v,
      b,
      D,
      N,
      O
    ) : De(
      l,
      p,
      v,
      b,
      D,
      N,
      O
    );
  }, ye = (l, p, m, E, v, b, D, N) => {
    let O, y;
    const { type: S, props: P, shapeFlag: T, transition: L, dirs: W } = l;
    if (O = l.el = i(
      l.type,
      b,
      P && P.is,
      P
    ), T & 8 ? u(O, l.children) : T & 16 && Ne(
      l.children,
      O,
      null,
      E,
      v,
      b && S !== "foreignObject",
      D,
      N
    ), W && Nt(l, null, E, "created"), ze(O, l, l.scopeId, D, E), P) {
      for (const Z in P)
        Z !== "value" && !In(Z) && s(
          O,
          Z,
          null,
          P[Z],
          b,
          l.children,
          E,
          v,
          g
        );
      "value" in P && s(O, "value", null, P.value), (y = P.onVnodeBeforeMount) && Ue(y, E, l);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(O, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(O, "__vueParentComponent", {
      value: E,
      enumerable: !1
    })), W && Nt(l, null, E, "beforeMount");
    const te = (!v || v && !v.pendingBranch) && L && !L.persisted;
    te && L.beforeEnter(O), o(O, p, m), ((y = P && P.onVnodeMounted) || te || W) && we(() => {
      y && Ue(y, E, l), te && L.enter(O), W && Nt(l, null, E, "mounted");
    }, v);
  }, ze = (l, p, m, E, v) => {
    if (m && _(l, m), E)
      for (let b = 0; b < E.length; b++)
        _(l, E[b]);
    if (v) {
      let b = v.subTree;
      if (process.env.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && (b = ni(b.children) || b), p === b) {
        const D = v.vnode;
        ze(
          l,
          D,
          D.scopeId,
          D.slotScopeIds,
          v.parent
        );
      }
    }
  }, Ne = (l, p, m, E, v, b, D, N, O = 0) => {
    for (let y = O; y < l.length; y++) {
      const S = l[y] = N ? at(l[y]) : Te(l[y]);
      I(
        null,
        S,
        p,
        m,
        E,
        v,
        b,
        D,
        N
      );
    }
  }, De = (l, p, m, E, v, b, D) => {
    const N = p.el = l.el;
    let { patchFlag: O, dynamicChildren: y, dirs: S } = p;
    O |= l.patchFlag & 16;
    const P = l.props || ne, T = p.props || ne;
    let L;
    m && bt(m, !1), (L = T.onVnodeBeforeUpdate) && Ue(L, m, p, l), S && Nt(p, l, m, "beforeUpdate"), m && bt(m, !0), process.env.NODE_ENV !== "production" && $t && (O = 0, D = !1, y = null);
    const W = v && p.type !== "foreignObject";
    if (y ? (Re(
      l.dynamicChildren,
      y,
      N,
      m,
      E,
      W,
      b
    ), process.env.NODE_ENV !== "production" && kn(l, p)) : D || Ce(
      l,
      p,
      N,
      null,
      m,
      E,
      W,
      b,
      !1
    ), O > 0) {
      if (O & 16)
        be(
          N,
          p,
          P,
          T,
          m,
          E,
          v
        );
      else if (O & 2 && P.class !== T.class && s(N, "class", null, T.class, v), O & 4 && s(N, "style", P.style, T.style, v), O & 8) {
        const te = p.dynamicProps;
        for (let Z = 0; Z < te.length; Z++) {
          const ce = te[Z], Se = P[ce], At = T[ce];
          (At !== Se || ce === "value") && s(
            N,
            ce,
            Se,
            At,
            v,
            l.children,
            m,
            E,
            g
          );
        }
      }
      O & 1 && l.children !== p.children && u(N, p.children);
    } else
      !D && y == null && be(
        N,
        p,
        P,
        T,
        m,
        E,
        v
      );
    ((L = T.onVnodeUpdated) || S) && we(() => {
      L && Ue(L, m, p, l), S && Nt(p, l, m, "updated");
    }, E);
  }, Re = (l, p, m, E, v, b, D) => {
    for (let N = 0; N < p.length; N++) {
      const O = l[N], y = p[N], S = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === Oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Jt(O, y) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 70) ? f(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      I(
        O,
        y,
        S,
        null,
        E,
        v,
        b,
        D,
        !0
      );
    }
  }, be = (l, p, m, E, v, b, D) => {
    if (m !== E) {
      if (m !== ne)
        for (const N in m)
          !In(N) && !(N in E) && s(
            l,
            N,
            m[N],
            null,
            D,
            p.children,
            v,
            b,
            g
          );
      for (const N in E) {
        if (In(N))
          continue;
        const O = E[N], y = m[N];
        O !== y && N !== "value" && s(
          l,
          N,
          y,
          O,
          D,
          p.children,
          v,
          b,
          g
        );
      }
      "value" in E && s(l, "value", m.value, E.value);
    }
  }, He = (l, p, m, E, v, b, D, N, O) => {
    const y = p.el = l ? l.el : c(""), S = p.anchor = l ? l.anchor : c("");
    let { patchFlag: P, dynamicChildren: T, slotScopeIds: L } = p;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    ($t || P & 2048) && (P = 0, O = !1, T = null), L && (N = N ? N.concat(L) : L), l == null ? (o(y, m, E), o(S, m, E), Ne(
      p.children,
      m,
      S,
      v,
      b,
      D,
      N,
      O
    )) : P > 0 && P & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Re(
      l.dynamicChildren,
      T,
      m,
      v,
      b,
      D,
      N
    ), process.env.NODE_ENV !== "production" ? kn(l, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || v && p === v.subTree) && kn(
        l,
        p,
        !0
        /* shallow */
      )
    )) : Ce(
      l,
      p,
      m,
      S,
      v,
      b,
      D,
      N,
      O
    );
  }, On = (l, p, m, E, v, b, D, N, O) => {
    p.slotScopeIds = N, l == null ? p.shapeFlag & 512 ? v.ctx.activate(
      p,
      m,
      E,
      D,
      O
    ) : Ve(
      p,
      m,
      E,
      v,
      b,
      D,
      O
    ) : de(l, p, O);
  }, Ve = (l, p, m, E, v, b, D) => {
    const N = l.component = ga(
      l,
      E,
      v
    );
    if (process.env.NODE_ENV !== "production" && N.type.__hmrId && tl(N), process.env.NODE_ENV !== "production" && (Tn(l), Qe(N, "mount")), ar(l) && (N.ctx.renderer = $), process.env.NODE_ENV !== "production" && Qe(N, "init"), va(N), process.env.NODE_ENV !== "production" && Je(N, "init"), N.asyncDep) {
      if (v && v.registerDep(N, U), !l.el) {
        const O = N.subTree = X(Pe);
        R(null, O, p, m);
      }
      return;
    }
    U(
      N,
      l,
      p,
      m,
      v,
      b,
      D
    ), process.env.NODE_ENV !== "production" && (An(), Je(N, "mount"));
  }, de = (l, p, m) => {
    const E = p.component = l.component;
    if (_l(l, p, m))
      if (E.asyncDep && !E.asyncResolved) {
        process.env.NODE_ENV !== "production" && Tn(p), B(E, p, m), process.env.NODE_ENV !== "production" && An();
        return;
      } else
        E.next = p, Xc(E.update), E.update();
    else
      p.el = l.el, E.vnode = p;
  }, U = (l, p, m, E, v, b, D) => {
    const N = () => {
      if (l.isMounted) {
        let { next: S, bu: P, u: T, parent: L, vnode: W } = l, te = S, Z;
        process.env.NODE_ENV !== "production" && Tn(S || l.vnode), bt(l, !1), S ? (S.el = W.el, B(l, S, D)) : S = W, P && Gt(P), (Z = S.props && S.props.onVnodeBeforeUpdate) && Ue(Z, L, S, W), bt(l, !0), process.env.NODE_ENV !== "production" && Qe(l, "render");
        const ce = po(l);
        process.env.NODE_ENV !== "production" && Je(l, "render");
        const Se = l.subTree;
        l.subTree = ce, process.env.NODE_ENV !== "production" && Qe(l, "patch"), I(
          Se,
          ce,
          // parent may have changed if it's in a teleport
          f(Se.el),
          // anchor may have changed if it's in a fragment
          V(Se),
          l,
          v,
          b
        ), process.env.NODE_ENV !== "production" && Je(l, "patch"), S.el = ce.el, te === null && vl(l, ce.el), T && we(T, v), (Z = S.props && S.props.onVnodeUpdated) && we(
          () => Ue(Z, L, S, W),
          v
        ), process.env.NODE_ENV !== "production" && Js(l), process.env.NODE_ENV !== "production" && An();
      } else {
        let S;
        const { el: P, props: T } = p, { bm: L, m: W, parent: te } = l, Z = ln(p);
        if (bt(l, !1), L && Gt(L), !Z && (S = T && T.onVnodeBeforeMount) && Ue(S, te, p), bt(l, !0), P && re) {
          const ce = () => {
            process.env.NODE_ENV !== "production" && Qe(l, "render"), l.subTree = po(l), process.env.NODE_ENV !== "production" && Je(l, "render"), process.env.NODE_ENV !== "production" && Qe(l, "hydrate"), re(
              P,
              l.subTree,
              l,
              v,
              null
            ), process.env.NODE_ENV !== "production" && Je(l, "hydrate");
          };
          Z ? p.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && ce()
          ) : ce();
        } else {
          process.env.NODE_ENV !== "production" && Qe(l, "render");
          const ce = l.subTree = po(l);
          process.env.NODE_ENV !== "production" && Je(l, "render"), process.env.NODE_ENV !== "production" && Qe(l, "patch"), I(
            null,
            ce,
            m,
            E,
            l,
            v,
            b
          ), process.env.NODE_ENV !== "production" && Je(l, "patch"), p.el = ce.el;
        }
        if (W && we(W, v), !Z && (S = T && T.onVnodeMounted)) {
          const ce = p;
          we(
            () => Ue(S, te, ce),
            v
          );
        }
        (p.shapeFlag & 256 || te && ln(te.vnode) && te.vnode.shapeFlag & 256) && l.a && we(l.a, v), l.isMounted = !0, process.env.NODE_ENV !== "production" && cl(l), p = m = E = null;
      }
    }, O = l.effect = new tr(
      N,
      () => ro(y),
      l.scope
      // track it in component's effect scope
    ), y = l.update = () => O.run();
    y.id = l.uid, bt(l, !0), process.env.NODE_ENV !== "production" && (O.onTrack = l.rtc ? (S) => Gt(l.rtc, S) : void 0, O.onTrigger = l.rtg ? (S) => Gt(l.rtg, S) : void 0, y.ownerInstance = l), y();
  }, B = (l, p, m) => {
    p.component = l;
    const E = l.vnode.props;
    l.vnode = p, l.next = null, Gl(l, p.props, E, m), oa(l, p.children, m), It(), $r(), Tt();
  }, Ce = (l, p, m, E, v, b, D, N, O = !1) => {
    const y = l && l.children, S = l ? l.shapeFlag : 0, P = p.children, { patchFlag: T, shapeFlag: L } = p;
    if (T > 0) {
      if (T & 128) {
        ot(
          y,
          P,
          m,
          E,
          v,
          b,
          D,
          N,
          O
        );
        return;
      } else if (T & 256) {
        yt(
          y,
          P,
          m,
          E,
          v,
          b,
          D,
          N,
          O
        );
        return;
      }
    }
    L & 8 ? (S & 16 && g(y, v, b), P !== y && u(m, P)) : S & 16 ? L & 16 ? ot(
      y,
      P,
      m,
      E,
      v,
      b,
      D,
      N,
      O
    ) : g(y, v, b, !0) : (S & 8 && u(m, ""), L & 16 && Ne(
      P,
      m,
      E,
      v,
      b,
      D,
      N,
      O
    ));
  }, yt = (l, p, m, E, v, b, D, N, O) => {
    l = l || Lt, p = p || Lt;
    const y = l.length, S = p.length, P = Math.min(y, S);
    let T;
    for (T = 0; T < P; T++) {
      const L = p[T] = O ? at(p[T]) : Te(p[T]);
      I(
        l[T],
        L,
        m,
        null,
        v,
        b,
        D,
        N,
        O
      );
    }
    y > S ? g(
      l,
      v,
      b,
      !0,
      !1,
      P
    ) : Ne(
      p,
      m,
      E,
      v,
      b,
      D,
      N,
      O,
      P
    );
  }, ot = (l, p, m, E, v, b, D, N, O) => {
    let y = 0;
    const S = p.length;
    let P = l.length - 1, T = S - 1;
    for (; y <= P && y <= T; ) {
      const L = l[y], W = p[y] = O ? at(p[y]) : Te(p[y]);
      if (Jt(L, W))
        I(
          L,
          W,
          m,
          null,
          v,
          b,
          D,
          N,
          O
        );
      else
        break;
      y++;
    }
    for (; y <= P && y <= T; ) {
      const L = l[P], W = p[T] = O ? at(p[T]) : Te(p[T]);
      if (Jt(L, W))
        I(
          L,
          W,
          m,
          null,
          v,
          b,
          D,
          N,
          O
        );
      else
        break;
      P--, T--;
    }
    if (y > P) {
      if (y <= T) {
        const L = T + 1, W = L < S ? p[L].el : E;
        for (; y <= T; )
          I(
            null,
            p[y] = O ? at(p[y]) : Te(p[y]),
            m,
            W,
            v,
            b,
            D,
            N,
            O
          ), y++;
      }
    } else if (y > T)
      for (; y <= P; )
        $e(l[y], v, b, !0), y++;
    else {
      const L = y, W = y, te = /* @__PURE__ */ new Map();
      for (y = W; y <= T; y++) {
        const _e = p[y] = O ? at(p[y]) : Te(p[y]);
        _e.key != null && (process.env.NODE_ENV !== "production" && te.has(_e.key) && w(
          "Duplicate keys found during update:",
          JSON.stringify(_e.key),
          "Make sure keys are unique."
        ), te.set(_e.key, y));
      }
      let Z, ce = 0;
      const Se = T - W + 1;
      let At = !1, vr = 0;
      const Yt = new Array(Se);
      for (y = 0; y < Se; y++)
        Yt[y] = 0;
      for (y = L; y <= P; y++) {
        const _e = l[y];
        if (ce >= Se) {
          $e(_e, v, b, !0);
          continue;
        }
        let Fe;
        if (_e.key != null)
          Fe = te.get(_e.key);
        else
          for (Z = W; Z <= T; Z++)
            if (Yt[Z - W] === 0 && Jt(_e, p[Z])) {
              Fe = Z;
              break;
            }
        Fe === void 0 ? $e(_e, v, b, !0) : (Yt[Fe - W] = y + 1, Fe >= vr ? vr = Fe : At = !0, I(
          _e,
          p[Fe],
          m,
          null,
          v,
          b,
          D,
          N,
          O
        ), ce++);
      }
      const Er = At ? ca(Yt) : Lt;
      for (Z = Er.length - 1, y = Se - 1; y >= 0; y--) {
        const _e = W + y, Fe = p[_e], yr = _e + 1 < S ? p[_e + 1].el : E;
        Yt[y] === 0 ? I(
          null,
          Fe,
          m,
          yr,
          v,
          b,
          D,
          N,
          O
        ) : At && (Z < 0 || y !== Er[Z] ? Le(Fe, m, yr, 2) : Z--);
      }
    }
  }, Le = (l, p, m, E, v = null) => {
    const { el: b, type: D, transition: N, children: O, shapeFlag: y } = l;
    if (y & 6) {
      Le(l.component.subTree, p, m, E);
      return;
    }
    if (y & 128) {
      l.suspense.move(p, m, E);
      return;
    }
    if (y & 64) {
      D.move(l, p, m, $);
      return;
    }
    if (D === Oe) {
      o(b, p, m);
      for (let P = 0; P < O.length; P++)
        Le(O[P], p, m, E);
      o(l.anchor, p, m);
      return;
    }
    if (D === jn) {
      oe(l, p, m);
      return;
    }
    if (E !== 2 && y & 1 && N)
      if (E === 0)
        N.beforeEnter(b), o(b, p, m), we(() => N.enter(b), v);
      else {
        const { leave: P, delayLeave: T, afterLeave: L } = N, W = () => o(b, p, m), te = () => {
          P(b, () => {
            W(), L && L();
          });
        };
        T ? T(b, W, te) : te();
      }
    else
      o(b, p, m);
  }, $e = (l, p, m, E = !1, v = !1) => {
    const {
      type: b,
      props: D,
      ref: N,
      children: O,
      dynamicChildren: y,
      shapeFlag: S,
      patchFlag: P,
      dirs: T
    } = l;
    if (N != null && Mo(N, null, m, l, !0), S & 256) {
      p.ctx.deactivate(l);
      return;
    }
    const L = S & 1 && T, W = !ln(l);
    let te;
    if (W && (te = D && D.onVnodeBeforeUnmount) && Ue(te, p, l), S & 6)
      st(l.component, m, E);
    else {
      if (S & 128) {
        l.suspense.unmount(m, E);
        return;
      }
      L && Nt(l, null, p, "beforeUnmount"), S & 64 ? l.type.remove(
        l,
        p,
        m,
        v,
        $,
        E
      ) : y && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Oe || P > 0 && P & 64) ? g(
        y,
        p,
        m,
        !1,
        !0
      ) : (b === Oe && P & 384 || !v && S & 16) && g(O, p, m), E && rt(l);
    }
    (W && (te = D && D.onVnodeUnmounted) || L) && we(() => {
      te && Ue(te, p, l), L && Nt(l, null, p, "unmounted");
    }, m);
  }, rt = (l) => {
    const { type: p, el: m, anchor: E, transition: v } = l;
    if (p === Oe) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && v && !v.persisted ? l.children.forEach((D) => {
        D.type === Pe ? r(D.el) : rt(D);
      }) : xn(m, E);
      return;
    }
    if (p === jn) {
      M(l);
      return;
    }
    const b = () => {
      r(m), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (l.shapeFlag & 1 && v && !v.persisted) {
      const { leave: D, delayLeave: N } = v, O = () => D(m, b);
      N ? N(l.el, b, O) : O();
    } else
      b();
  }, xn = (l, p) => {
    let m;
    for (; l !== p; )
      m = h(l), r(l), l = m;
    r(p);
  }, st = (l, p, m) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && nl(l);
    const { bum: E, scope: v, update: b, subTree: D, um: N } = l;
    E && Gt(E), v.stop(), b && (b.active = !1, $e(D, l, p, m)), N && we(N, p), we(() => {
      l.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), process.env.NODE_ENV !== "production" && al(l);
  }, g = (l, p, m, E = !1, v = !1, b = 0) => {
    for (let D = b; D < l.length; D++)
      $e(l[D], p, m, E, v);
  }, V = (l) => l.shapeFlag & 6 ? V(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : h(l.anchor || l.el), C = (l, p, m) => {
    l == null ? p._vnode && $e(p._vnode, null, null, !0) : I(p._vnode || null, l, p, null, null, null, m), $r(), qs(), p._vnode = l;
  }, $ = {
    p: I,
    um: $e,
    m: Le,
    r: rt,
    mt: Ve,
    mc: Ne,
    pc: Ce,
    pbc: Re,
    n: V,
    o: e
  };
  let Y, re;
  return t && ([Y, re] = t(
    $
  )), {
    render: C,
    hydrate: Y,
    createApp: Wl(C, Y)
  };
}
function bt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function kn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (k(o) && k(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let c = r[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[s] = at(r[s]), c.el = i.el), n || kn(i, c)), c.type === wn && (c.el = i.el), process.env.NODE_ENV !== "production" && c.type === Pe && !c.el && (c.el = i.el);
    }
}
function ca(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, c;
  const a = e.length;
  for (o = 0; o < a; o++) {
    const d = e[o];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        c = s + i >> 1, e[n[c]] < d ? s = c + 1 : i = c;
      d < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const la = (e) => e.__isTeleport, Oe = Symbol.for("v-fgt"), wn = Symbol.for("v-txt"), Pe = Symbol.for("v-cmt"), jn = Symbol.for("v-stc"), an = [];
let Me = null;
function je(e = !1) {
  an.push(Me = e ? null : []);
}
function aa() {
  an.pop(), Me = an[an.length - 1] || null;
}
let _n = 1;
function Fr(e) {
  _n += e;
}
function _i(e) {
  return e.dynamicChildren = _n > 0 ? Me || Lt : null, aa(), _n > 0 && Me && Me.push(e), e;
}
function Ye(e, t, n, o, r, s) {
  return _i(
    q(
      e,
      t,
      n,
      o,
      r,
      s,
      !0
      /* isBlock */
    )
  );
}
function ua(e, t, n, o, r) {
  return _i(
    X(
      e,
      t,
      n,
      o,
      r,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function Bt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Jt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && jt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const fa = (...e) => Ei(
  ...e
), lo = "__vInternal", vi = ({ key: e }) => e ?? null, zn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || le(e) || H(e) ? { i: he, r: e, k: t, f: !!n } : e : null);
function q(e, t = null, n = null, o = 0, r = null, s = e === Oe ? 0 : 1, i = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && vi(t),
    ref: t && zn(t),
    scopeId: io,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: he
  };
  return c ? (pr(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= ie(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && w("VNode created with invalid key (NaN). VNode type:", a.type), _n > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Me.push(a), a;
}
const X = process.env.NODE_ENV !== "production" ? fa : Ei;
function Ei(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Al) && (process.env.NODE_ENV !== "production" && !e && w(`Invalid vnode type when creating vnode: ${e}.`), e = Pe), Bt(e)) {
    const c = gt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && pr(c, n), _n > 0 && !s && Me && (c.shapeFlag & 6 ? Me[Me.indexOf(e)] = c : Me.push(c)), c.patchFlag |= -2, c;
  }
  if (xi(e) && (e = e.__vccOpts), t) {
    t = da(t);
    let { class: c, style: a } = t;
    c && !ie(c) && (t.class = er(c)), ee(a) && (Vo(a) && !k(a) && (a = se({}, a)), t.style = Xo(a));
  }
  const i = ie(e) ? 1 : El(e) ? 128 : la(e) ? 64 : ee(e) ? 4 : H(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Vo(e) && (e = F(e), w(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), q(
    e,
    t,
    n,
    o,
    r,
    i,
    s,
    !0
  );
}
function da(e) {
  return e ? Vo(e) || lo in e ? se({}, e) : e : null;
}
function gt(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, c = t ? pa(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && vi(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? k(r) ? r.concat(zn(t)) : [r, zn(t)] : zn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && k(i) ? i.map(yi) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Oe ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && gt(e.ssContent),
    ssFallback: e.ssFallback && gt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function yi(e) {
  const t = gt(e);
  return k(e.children) && (t.children = e.children.map(yi)), t;
}
function Q(e = " ", t = 0) {
  return X(wn, null, e, t);
}
function Te(e) {
  return e == null || typeof e == "boolean" ? X(Pe) : k(e) ? X(
    Oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? at(e) : X(wn, null, String(e));
}
function at(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : gt(e);
}
function pr(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (k(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), pr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(lo in t) ? t._ctx = he : r === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    H(t) ? (t = { default: t, _ctx: he }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Q(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function pa(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = er([t.class, o.class]));
      else if (r === "style")
        t.style = Xo([t.style, o.style]);
      else if (Nn(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(k(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Ue(e, t, n, o = null) {
  ke(e, t, 7, [
    n,
    o
  ]);
}
const ha = ui();
let ma = 0;
function ga(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || ha, s = {
    uid: ma++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new uc(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: di(o, r),
    emitsOptions: Xs(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ne,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: ne,
    data: ne,
    props: ne,
    attrs: ne,
    slots: ne,
    refs: ne,
    setupState: ne,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = Ml(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = pl.bind(null, s), e.ce && e.ce(s), s;
}
let ue = null;
const Ni = () => ue || he;
let hr, Mt, Ur = "__VUE_INSTANCE_SETTERS__";
(Mt = Fn()[Ur]) || (Mt = Fn()[Ur] = []), Mt.push((e) => ue = e), hr = (e) => {
  Mt.length > 1 ? Mt.forEach((t) => t(e)) : Mt[0](e);
};
const Kt = (e) => {
  hr(e), e.scope.on();
}, Rt = () => {
  ue && ue.scope.off(), hr(null);
}, _a = /* @__PURE__ */ vt("slot,component");
function ko(e, t) {
  const n = t.isNativeTag || _s;
  (_a(e) || n(e)) && w(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function bi(e) {
  return e.vnode.shapeFlag & 4;
}
let vn = !1;
function va(e, t = !1) {
  vn = t;
  const { props: n, children: o } = e.vnode, r = bi(e);
  ql(e, n, r, t), na(e, o);
  const s = r ? Ea(e, t) : void 0;
  return vn = !1, s;
}
function Ea(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && ko(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        ko(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        ri(s[i]);
    }
    o.compilerOptions && ya() && w(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = ks(new Proxy(e.ctx, li)), process.env.NODE_ENV !== "production" && kl(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? ba(e) : null;
    Kt(e), It();
    const i = et(
      r,
      e,
      0,
      [process.env.NODE_ENV !== "production" ? nn(e.props) : e.props, s]
    );
    if (Tt(), Rt(), Qo(i)) {
      if (i.then(Rt, Rt), t)
        return i.then((c) => {
          Br(e, c, t);
        }).catch((c) => {
          oo(c, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) != null ? n : "Anonymous";
        w(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Br(e, i, t);
  } else
    wi(e, t);
}
function Br(e, t, n) {
  H(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) ? (process.env.NODE_ENV !== "production" && Bt(t) && w(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ls(t), process.env.NODE_ENV !== "production" && jl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && w(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), wi(e, n);
}
let jo;
const ya = () => !jo;
function wi(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && jo && !o.render) {
      const r = o.template || fr(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Qe(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: a } = o, d = se(
          se(
            {
              isCustomElement: s,
              delimiters: c
            },
            i
          ),
          a
        );
        o.render = jo(r, d), process.env.NODE_ENV !== "production" && Je(e, "compile");
      }
    }
    e.render = o.render || pe;
  }
  Kt(e), It(), Hl(e), Tt(), Rt(), process.env.NODE_ENV !== "production" && !o.render && e.render === pe && !t && (o.template ? w(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : w("Component is missing template or render function."));
}
function Kr(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    process.env.NODE_ENV !== "production" ? {
      get(t, n) {
        return Kn(), me(e, "get", "$attrs"), t[n];
      },
      set() {
        return w("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return w("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return me(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Na(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return me(e, "get", "$slots"), t[n];
    }
  }));
}
function ba(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && w("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (k(n) ? o = "array" : le(n) && (o = "ref")), o !== "object" && w(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return Kr(e);
    },
    get slots() {
      return Na(e);
    },
    get emit() {
      return (n, ...o) => e.emit(n, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return Kr(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function mr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ls(ks(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Pt)
          return Pt[n](e);
      },
      has(t, n) {
        return n in t || n in Pt;
      }
    }));
}
const wa = /(?:^|[-_])(\w)/g, Oa = (e) => e.replace(wa, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Oi(e, t = !0) {
  return H(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ao(e, t, n = !1) {
  let o = Oi(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? Oa(o) : n ? "App" : "Anonymous";
}
function xi(e) {
  return H(e) && "__vccOpts" in e;
}
const Ae = (e, t) => Kc(e, t, vn);
function Di(e, t, n) {
  const o = arguments.length;
  return o === 2 ? ee(t) && !k(t) ? Bt(t) ? X(e, null, [t]) : X(e, t) : X(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Bt(n) && (n = [n]), X(e, t, n));
}
const xa = Symbol.for("v-scx"), Da = () => {
  {
    const e = tt(xa);
    return e || process.env.NODE_ENV !== "production" && w(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function go(e) {
  return !!(e && e.__v_isShallow);
}
function Va() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(f) {
      return ee(f) ? f.__isVue ? ["div", e, "VueInstance"] : le(f) ? [
        "div",
        {},
        ["span", e, u(f)],
        "<",
        c(f.value),
        ">"
      ] : Vt(f) ? [
        "div",
        {},
        ["span", e, go(f) ? "ShallowReactive" : "Reactive"],
        "<",
        c(f),
        `>${mt(f) ? " (readonly)" : ""}`
      ] : mt(f) ? [
        "div",
        {},
        ["span", e, go(f) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(f),
        ">"
      ] : null : null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...s(f.$)
        ];
    }
  };
  function s(f) {
    const h = [];
    f.type.props && f.props && h.push(i("props", F(f.props))), f.setupState !== ne && h.push(i("setup", f.setupState)), f.data !== ne && h.push(i("data", F(f.data)));
    const _ = a(f, "computed");
    _ && h.push(i("computed", _));
    const x = a(f, "inject");
    return x && h.push(i("injected", x)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), h;
  }
  function i(f, h) {
    return h = se({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((_) => [
          "div",
          {},
          ["span", o, _ + ": "],
          c(h[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(f, h = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", o, f] : ee(f) ? ["object", { object: h ? F(f) : f }] : ["span", n, String(f)];
  }
  function a(f, h) {
    const _ = f.type;
    if (H(_))
      return;
    const x = {};
    for (const I in f.ctx)
      d(_, I, h) && (x[I] = f.ctx[I]);
    return x;
  }
  function d(f, h, _) {
    const x = f[_];
    if (k(x) && x.includes(h) || ee(x) && h in x || f.extends && d(f.extends, h, _) || f.mixins && f.mixins.some((I) => d(I, h, _)))
      return !0;
  }
  function u(f) {
    return go(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Wr = "3.3.4", Ca = "http://www.w3.org/2000/svg", Ot = typeof document < "u" ? document : null, qr = Ot && /* @__PURE__ */ Ot.createElement("template"), $a = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? Ot.createElementNS(Ca, e) : Ot.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Ot.createTextNode(e),
  createComment: (e) => Ot.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ot.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      qr.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = qr.content;
      if (o) {
        const a = c.firstChild;
        for (; a.firstChild; )
          c.appendChild(a.firstChild);
        c.removeChild(a);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function Pa(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Ra(e, t, n) {
  const o = e.style, r = ie(n);
  if (n && !r) {
    if (t && !ie(t))
      for (const s in t)
        n[s] == null && zo(o, s, "");
    for (const s in n)
      zo(o, s, n[s]);
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const Sa = /[^\\];\s*$/, Yr = /\s*!important$/;
function zo(e, t, n) {
  if (k(n))
    n.forEach((o) => zo(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Sa.test(n) && w(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Ia(e, t);
    Yr.test(n) ? e.setProperty(
      pt(o),
      n.replace(Yr, ""),
      "important"
    ) : e[o] = n;
  }
}
const Gr = ["Webkit", "Moz", "ms"], _o = {};
function Ia(e, t) {
  const n = _o[t];
  if (n)
    return n;
  let o = Ut(t);
  if (o !== "filter" && o in e)
    return _o[t] = o;
  o = Jn(o);
  for (let r = 0; r < Gr.length; r++) {
    const s = Gr[r] + o;
    if (s in e)
      return _o[t] = s;
  }
  return t;
}
const Qr = "http://www.w3.org/1999/xlink";
function Ta(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Qr, t.slice(6, t.length)) : e.setAttributeNS(Qr, t, n);
  else {
    const s = lc(t);
    n == null || s && !Ns(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function Aa(e, t, n, o, r, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, r, s), e[t] = n ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    e._value = n;
    const d = c === "OPTION" ? e.getAttribute("value") : e.value, u = n ?? "";
    d !== u && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = Ns(n) : n == null && d === "string" ? (n = "", a = !0) : d === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch (d) {
    process.env.NODE_ENV !== "production" && !a && w(
      `Failed setting prop "${t}" on <${c.toLowerCase()}>: value ${n} is invalid.`,
      d
    );
  }
  a && e.removeAttribute(t);
}
function Ma(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function ka(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function ja(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [c, a] = za(t);
    if (o) {
      const d = s[t] = Fa(o, r);
      Ma(e, c, d, a);
    } else
      i && (ka(e, c, i, a), s[t] = void 0);
  }
}
const Jr = /(?:Once|Passive|Capture)$/;
function za(e) {
  let t;
  if (Jr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Jr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : pt(e.slice(2)), t];
}
let vo = 0;
const Ha = /* @__PURE__ */ Promise.resolve(), La = () => vo || (Ha.then(() => vo = 0), vo = Date.now());
function Fa(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    ke(
      Ua(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = La(), n;
}
function Ua(e, t) {
  if (k(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const Zr = /^on[a-z]/, Ba = (e, t, n, o, r = !1, s, i, c, a) => {
  t === "class" ? Pa(e, o, r) : t === "style" ? Ra(e, n, o) : Nn(t) ? Hn(t) || ja(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ka(e, t, o, r)) ? Aa(
    e,
    t,
    o,
    s,
    i,
    c,
    a
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Ta(e, t, o, r));
};
function Ka(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && Zr.test(t) && H(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Zr.test(t) && ie(n) ? !1 : t in e;
}
const Wa = /* @__PURE__ */ se({ patchProp: Ba }, $a);
let Xr;
function qa() {
  return Xr || (Xr = sa(Wa));
}
const Ya = (...e) => {
  const t = qa().createApp(...e);
  process.env.NODE_ENV !== "production" && (Ga(t), Qa(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Ja(o);
    if (!r)
      return;
    const s = t._component;
    !H(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const i = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function Ga(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => sc(t) || ic(t),
    writable: !1
  });
}
function Qa(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        w(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return w(o), n;
      },
      set() {
        w(o);
      }
    });
  }
}
function Ja(e) {
  if (ie(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && w(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && w(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function Za() {
  Va();
}
process.env.NODE_ENV !== "production" && Za();
const Xa = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjEuNzYgMjI2LjY5Ij48cGF0aCBkPSJNMTYxLjA5Ni4wMDFsLTMwLjIyNSA1Mi4zNTFMMTAwLjY0Ny4wMDFILS4wMDVsMTMwLjg3NyAyMjYuNjg4TDI2MS43NDkuMDAxeiIgZmlsbD0iIzQxYjg4MyIvPjxwYXRoIGQ9Ik0xNjEuMDk2LjAwMWwtMzAuMjI1IDUyLjM1MUwxMDAuNjQ3LjAwMUg1Mi4zNDZsNzguNTI2IDEzNi4wMUwyMDkuMzk4LjAwMXoiIGZpbGw9IiMzNDQ5NWUiLz48L3N2Zz4K";
function eu() {
  return Vi().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Vi() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const tu = typeof Proxy == "function", nu = "devtools-plugin:setup", ou = "plugin:settings:set";
let kt, Ho;
function ru() {
  var e;
  return kt !== void 0 || (typeof window < "u" && window.performance ? (kt = !0, Ho = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (kt = !0, Ho = global.perf_hooks.performance) : kt = !1), kt;
}
function su() {
  return ru() ? Ho.now() : Date.now();
}
class iu {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const i in t.settings) {
        const c = t.settings[i];
        o[i] = c.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, o);
    try {
      const i = localStorage.getItem(r), c = JSON.parse(i);
      Object.assign(s, c);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(i) {
        try {
          localStorage.setItem(r, JSON.stringify(i));
        } catch {
        }
        s = i;
      },
      now() {
        return su();
      }
    }, n && n.on(ou, (i, c) => {
      i === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, c) => this.target ? this.target.on[c] : (...a) => {
        this.onQueue.push({
          method: c,
          args: a
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...a) => (this.targetQueue.push({
        method: c,
        args: a,
        resolve: () => {
        }
      }), this.fallbacks[c](...a)) : (...a) => new Promise((d) => {
        this.targetQueue.push({
          method: c,
          args: a,
          resolve: d
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
function cu(e, t) {
  const n = e, o = Vi(), r = eu(), s = tu && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    r.emit(nu, e, t);
  else {
    const i = s ? new iu(n, r) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const Ze = typeof window < "u";
function lu(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const J = Object.assign;
function Eo(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = xe(r) ? r.map(e) : e(r);
  }
  return n;
}
const un = () => {
}, xe = Array.isArray;
function G(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const au = /\/$/, uu = (e) => e.replace(au, "");
function yo(e, t, n = "/") {
  let o, r = {}, s = "", i = "";
  const c = t.indexOf("#");
  let a = t.indexOf("?");
  return c < a && c >= 0 && (a = -1), a > -1 && (o = t.slice(0, a), s = t.slice(a + 1, c > -1 ? c : t.length), r = e(s)), c > -1 && (o = o || t.slice(0, c), i = t.slice(c, t.length)), o = pu(o ?? t, n), {
    fullPath: o + (s && "?") + s + i,
    path: o,
    query: r,
    hash: i
  };
}
function fu(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function es(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function ts(e, t, n) {
  const o = t.matched.length - 1, r = n.matched.length - 1;
  return o > -1 && o === r && _t(t.matched[o], n.matched[r]) && Ci(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function _t(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ci(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!du(e[n], t[n]))
      return !1;
  return !0;
}
function du(e, t) {
  return xe(e) ? ns(e, t) : xe(t) ? ns(t, e) : e === t;
}
function ns(e, t) {
  return xe(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function pu(e, t) {
  if (e.startsWith("/"))
    return e;
  if (process.env.NODE_ENV !== "production" && !t.startsWith("/"))
    return G(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), r = o[o.length - 1];
  (r === ".." || r === ".") && o.push("");
  let s = n.length - 1, i, c;
  for (i = 0; i < o.length; i++)
    if (c = o[i], c !== ".")
      if (c === "..")
        s > 1 && s--;
      else
        break;
  return n.slice(0, s).join("/") + "/" + o.slice(i - (i === o.length ? 1 : 0)).join("/");
}
var En;
(function(e) {
  e.pop = "pop", e.push = "push";
})(En || (En = {}));
var fn;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(fn || (fn = {}));
function hu(e) {
  if (!e)
    if (Ze) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), uu(e);
}
const mu = /^[^#]+#/;
function gu(e, t) {
  return e.replace(mu, "#") + t;
}
function _u(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const uo = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function vu(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const s = document.querySelector(e.el);
        if (o && s) {
          G(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        G(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const r = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r) {
      process.env.NODE_ENV !== "production" && G(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = _u(r, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function os(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Lo = /* @__PURE__ */ new Map();
function Eu(e, t) {
  Lo.set(e, t);
}
function yu(e) {
  const t = Lo.get(e);
  return Lo.delete(e), t;
}
let Nu = () => location.protocol + "//" + location.host;
function $i(e, t) {
  const { pathname: n, search: o, hash: r } = t, s = e.indexOf("#");
  if (s > -1) {
    let c = r.includes(e.slice(s)) ? e.slice(s).length : 1, a = r.slice(c);
    return a[0] !== "/" && (a = "/" + a), es(a, "");
  }
  return es(n, e) + o + r;
}
function bu(e, t, n, o) {
  let r = [], s = [], i = null;
  const c = ({ state: h }) => {
    const _ = $i(e, location), x = n.value, I = t.value;
    let j = 0;
    if (h) {
      if (n.value = _, t.value = h, i && i === x) {
        i = null;
        return;
      }
      j = I ? h.position - I.position : 0;
    } else
      o(_);
    r.forEach((R) => {
      R(n.value, x, {
        delta: j,
        type: En.pop,
        direction: j ? j > 0 ? fn.forward : fn.back : fn.unknown
      });
    });
  };
  function a() {
    i = n.value;
  }
  function d(h) {
    r.push(h);
    const _ = () => {
      const x = r.indexOf(h);
      x > -1 && r.splice(x, 1);
    };
    return s.push(_), _;
  }
  function u() {
    const { history: h } = window;
    h.state && h.replaceState(J({}, h.state, { scroll: uo() }), "");
  }
  function f() {
    for (const h of s)
      h();
    s = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", u);
  }
  return window.addEventListener("popstate", c), window.addEventListener("beforeunload", u, {
    passive: !0
  }), {
    pauseListeners: a,
    listen: d,
    destroy: f
  };
}
function rs(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? uo() : null
  };
}
function wu(e) {
  const { history: t, location: n } = window, o = {
    value: $i(e, n)
  }, r = { value: t.state };
  r.value || s(o.value, {
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
  function s(a, d, u) {
    const f = e.indexOf("#"), h = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + a : Nu() + e + a;
    try {
      t[u ? "replaceState" : "pushState"](d, "", h), r.value = d;
    } catch (_) {
      process.env.NODE_ENV !== "production" ? G("Error with push/replace State", _) : console.error(_), n[u ? "replace" : "assign"](h);
    }
  }
  function i(a, d) {
    const u = J({}, t.state, rs(
      r.value.back,
      // keep back and forward entries but override current position
      a,
      r.value.forward,
      !0
    ), d, { position: r.value.position });
    s(a, u, !0), o.value = a;
  }
  function c(a, d) {
    const u = J(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      r.value,
      t.state,
      {
        forward: a,
        scroll: uo()
      }
    );
    process.env.NODE_ENV !== "production" && !t.state && G(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), s(u.current, u, !0);
    const f = J({}, rs(o.value, a, null), { position: u.position + 1 }, d);
    s(a, f, !1), o.value = a;
  }
  return {
    location: o,
    state: r,
    push: c,
    replace: i
  };
}
function Ou(e) {
  e = hu(e);
  const t = wu(e), n = bu(e, t.state, t.location, t.replace);
  function o(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const r = J({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: gu.bind(null, e)
  }, t, n);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
function xu(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), process.env.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && G(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Ou(e);
}
function Du(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Pi(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const ct = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Fo = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var ss;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(ss || (ss = {}));
const Vu = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${$u(t)}" via a navigation guard.`;
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
function Wt(e, t) {
  return process.env.NODE_ENV !== "production" ? J(new Error(Vu[e](t)), {
    type: e,
    [Fo]: !0
  }, t) : J(new Error(), {
    type: e,
    [Fo]: !0
  }, t);
}
function Ge(e, t) {
  return e instanceof Error && Fo in e && (t == null || !!(e.type & t));
}
const Cu = ["params", "query", "hash"];
function $u(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Cu)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const is = "[^/]+?", Pu = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Ru = /[.+*?^${}()[\]/\\]/g;
function Su(e, t) {
  const n = J({}, Pu, t), o = [];
  let r = n.start ? "^" : "";
  const s = [];
  for (const d of e) {
    const u = d.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !d.length && (r += "/");
    for (let f = 0; f < d.length; f++) {
      const h = d[f];
      let _ = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        f || (r += "/"), r += h.value.replace(Ru, "\\$&"), _ += 40;
      else if (h.type === 1) {
        const { value: x, repeatable: I, optional: j, regexp: R } = h;
        s.push({
          name: x,
          repeatable: I,
          optional: j
        });
        const z = R || is;
        if (z !== is) {
          _ += 10;
          try {
            new RegExp(`(${z})`);
          } catch (oe) {
            throw new Error(`Invalid custom RegExp for param "${x}" (${z}): ` + oe.message);
          }
        }
        let A = I ? `((?:${z})(?:/(?:${z}))*)` : `(${z})`;
        f || (A = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        j && d.length < 2 ? `(?:/${A})` : "/" + A), j && (A += "?"), r += A, _ += 20, j && (_ += -8), I && (_ += -20), z === ".*" && (_ += -50);
      }
      u.push(_);
    }
    o.push(u);
  }
  if (n.strict && n.end) {
    const d = o.length - 1;
    o[d][o[d].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? r += "$" : n.strict && (r += "(?:/|$)");
  const i = new RegExp(r, n.sensitive ? "" : "i");
  function c(d) {
    const u = d.match(i), f = {};
    if (!u)
      return null;
    for (let h = 1; h < u.length; h++) {
      const _ = u[h] || "", x = s[h - 1];
      f[x.name] = _ && x.repeatable ? _.split("/") : _;
    }
    return f;
  }
  function a(d) {
    let u = "", f = !1;
    for (const h of e) {
      (!f || !u.endsWith("/")) && (u += "/"), f = !1;
      for (const _ of h)
        if (_.type === 0)
          u += _.value;
        else if (_.type === 1) {
          const { value: x, repeatable: I, optional: j } = _, R = x in d ? d[x] : "";
          if (xe(R) && !I)
            throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);
          const z = xe(R) ? R.join("/") : R;
          if (!z)
            if (j)
              h.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : f = !0);
            else
              throw new Error(`Missing required param "${x}"`);
          u += z;
        }
    }
    return u || "/";
  }
  return {
    re: i,
    score: o,
    keys: s,
    parse: c,
    stringify: a
  };
}
function Iu(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Tu(e, t) {
  let n = 0;
  const o = e.score, r = t.score;
  for (; n < o.length && n < r.length; ) {
    const s = Iu(o[n], r[n]);
    if (s)
      return s;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (cs(o))
      return 1;
    if (cs(r))
      return -1;
  }
  return r.length - o.length;
}
function cs(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Au = {
  type: 0,
  value: ""
}, Mu = /[a-zA-Z0-9_]/;
function ku(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Au]];
  if (!e.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(_) {
    throw new Error(`ERR (${n})/"${d}": ${_}`);
  }
  let n = 0, o = n;
  const r = [];
  let s;
  function i() {
    s && r.push(s), s = [];
  }
  let c = 0, a, d = "", u = "";
  function f() {
    d && (n === 0 ? s.push({
      type: 0,
      value: d
    }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: 1,
      value: d,
      regexp: u,
      repeatable: a === "*" || a === "+",
      optional: a === "*" || a === "?"
    })) : t("Invalid state to consume buffer"), d = "");
  }
  function h() {
    d += a;
  }
  for (; c < e.length; ) {
    if (a = e[c++], a === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        a === "/" ? (d && f(), i()) : a === ":" ? (f(), n = 1) : h();
        break;
      case 4:
        h(), n = o;
        break;
      case 1:
        a === "(" ? n = 2 : Mu.test(a) ? h() : (f(), n = 0, a !== "*" && a !== "?" && a !== "+" && c--);
        break;
      case 2:
        a === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + a : n = 3 : u += a;
        break;
      case 3:
        f(), n = 0, a !== "*" && a !== "?" && a !== "+" && c--, u = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), f(), i(), r;
}
function ju(e, t, n) {
  const o = Su(ku(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const s = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      s.has(i.name) && G(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), s.add(i.name);
  }
  const r = J(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function zu(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = us({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(u) {
    return o.get(u);
  }
  function s(u, f, h) {
    const _ = !h, x = Hu(u);
    process.env.NODE_ENV !== "production" && Bu(x, f), x.aliasOf = h && h.record;
    const I = us(t, u), j = [
      x
    ];
    if ("alias" in u) {
      const A = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const oe of A)
        j.push(J({}, x, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: h ? h.record.components : x.components,
          path: oe,
          // we might be the child of an alias
          aliasOf: h ? h.record : x
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let R, z;
    for (const A of j) {
      const { path: oe } = A;
      if (f && oe[0] !== "/") {
        const M = f.record.path, fe = M[M.length - 1] === "/" ? "" : "/";
        A.path = f.record.path + (oe && fe + oe);
      }
      if (process.env.NODE_ENV !== "production" && A.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (R = ju(A, f, I), process.env.NODE_ENV !== "production" && f && oe[0] === "/" && Ku(R, f), h ? (h.alias.push(R), process.env.NODE_ENV !== "production" && Uu(h, R)) : (z = z || R, z !== R && z.alias.push(R), _ && u.name && !as(R) && i(u.name)), x.children) {
        const M = x.children;
        for (let fe = 0; fe < M.length; fe++)
          s(M[fe], R, h && h.children[fe]);
      }
      h = h || R, (R.record.components && Object.keys(R.record.components).length || R.record.name || R.record.redirect) && a(R);
    }
    return z ? () => {
      i(z);
    } : un;
  }
  function i(u) {
    if (Pi(u)) {
      const f = o.get(u);
      f && (o.delete(u), n.splice(n.indexOf(f), 1), f.children.forEach(i), f.alias.forEach(i));
    } else {
      const f = n.indexOf(u);
      f > -1 && (n.splice(f, 1), u.record.name && o.delete(u.record.name), u.children.forEach(i), u.alias.forEach(i));
    }
  }
  function c() {
    return n;
  }
  function a(u) {
    let f = 0;
    for (; f < n.length && Tu(u, n[f]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (u.record.path !== n[f].record.path || !Ri(u, n[f])); )
      f++;
    n.splice(f, 0, u), u.record.name && !as(u) && o.set(u.record.name, u);
  }
  function d(u, f) {
    let h, _ = {}, x, I;
    if ("name" in u && u.name) {
      if (h = o.get(u.name), !h)
        throw Wt(1, {
          location: u
        });
      if (process.env.NODE_ENV !== "production") {
        const z = Object.keys(u.params || {}).filter((A) => !h.keys.find((oe) => oe.name === A));
        z.length && G(`Discarded invalid param(s) "${z.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      I = h.record.name, _ = J(
        // paramsFromLocation is a new object
        ls(
          f.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          h.keys.filter((z) => !z.optional).map((z) => z.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        u.params && ls(u.params, h.keys.map((z) => z.name))
      ), x = h.stringify(_);
    } else if ("path" in u)
      x = u.path, process.env.NODE_ENV !== "production" && !x.startsWith("/") && G(`The Matcher cannot resolve relative paths but received "${x}". Unless you directly called \`matcher.resolve("${x}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), h = n.find((z) => z.re.test(x)), h && (_ = h.parse(x), I = h.record.name);
    else {
      if (h = f.name ? o.get(f.name) : n.find((z) => z.re.test(f.path)), !h)
        throw Wt(1, {
          location: u,
          currentLocation: f
        });
      I = h.record.name, _ = J({}, f.params, u.params), x = h.stringify(_);
    }
    const j = [];
    let R = h;
    for (; R; )
      j.unshift(R.record), R = R.parent;
    return {
      name: I,
      path: x,
      params: _,
      matched: j,
      meta: Fu(j)
    };
  }
  return e.forEach((u) => s(u)), { addRoute: s, resolve: d, removeRoute: i, getRoutes: c, getRecordMatcher: r };
}
function ls(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function Hu(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Lu(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Lu(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function as(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Fu(e) {
  return e.reduce((t, n) => J(t, n.meta), {});
}
function us(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Uo(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Uu(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Uo.bind(null, n)))
      return G(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Uo.bind(null, n)))
      return G(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Bu(e, t) {
  t && t.record.name && !e.name && !e.path && G(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Ku(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Uo.bind(null, n)))
      return G(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Ri(e, t) {
  return t.children.some((n) => n === e || Ri(e, n));
}
const Si = /#/g, Wu = /&/g, qu = /\//g, Yu = /=/g, Gu = /\?/g, Ii = /\+/g, Qu = /%5B/g, Ju = /%5D/g, Ti = /%5E/g, Zu = /%60/g, Ai = /%7B/g, Xu = /%7C/g, Mi = /%7D/g, ef = /%20/g;
function gr(e) {
  return encodeURI("" + e).replace(Xu, "|").replace(Qu, "[").replace(Ju, "]");
}
function tf(e) {
  return gr(e).replace(Ai, "{").replace(Mi, "}").replace(Ti, "^");
}
function Bo(e) {
  return gr(e).replace(Ii, "%2B").replace(ef, "+").replace(Si, "%23").replace(Wu, "%26").replace(Zu, "`").replace(Ai, "{").replace(Mi, "}").replace(Ti, "^");
}
function nf(e) {
  return Bo(e).replace(Yu, "%3D");
}
function of(e) {
  return gr(e).replace(Si, "%23").replace(Gu, "%3F");
}
function rf(e) {
  return e == null ? "" : of(e).replace(qu, "%2F");
}
function yn(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && G(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function sf(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const s = o[r].replace(Ii, " "), i = s.indexOf("="), c = yn(i < 0 ? s : s.slice(0, i)), a = i < 0 ? null : yn(s.slice(i + 1));
    if (c in t) {
      let d = t[c];
      xe(d) || (d = t[c] = [d]), d.push(a);
    } else
      t[c] = a;
  }
  return t;
}
function fs(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = nf(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (xe(o) ? o.map((s) => s && Bo(s)) : [o && Bo(o)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
    });
  }
  return t;
}
function cf(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = xe(o) ? o.map((r) => r == null ? null : "" + r) : o == null ? o : "" + o);
  }
  return t;
}
const lf = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), ds = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), _r = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), ki = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), Ko = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Zt() {
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
function ut(e, t, n, o, r) {
  const s = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () => new Promise((i, c) => {
    const a = (f) => {
      f === !1 ? c(Wt(4, {
        from: n,
        to: t
      })) : f instanceof Error ? c(f) : Du(f) ? c(Wt(2, {
        from: t,
        to: f
      })) : (s && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[r] === s && typeof f == "function" && s.push(f), i());
    }, d = e.call(o && o.instances[r], t, n, process.env.NODE_ENV !== "production" ? af(a, t, n) : a);
    let u = Promise.resolve(d);
    if (e.length < 3 && (u = u.then(a)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const f = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        u = u.then((h) => a._called ? h : (G(f), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !a._called) {
        G(f), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    u.catch((f) => c(f));
  });
}
function af(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && G(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function No(e, t, n, o) {
  const r = [];
  for (const s of e) {
    process.env.NODE_ENV !== "production" && !s.components && !s.children.length && G(`Record with path "${s.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in s.components) {
      let c = s.components[i];
      if (process.env.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw G(`Component "${i}" in record with path "${s.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          G(`Component "${i}" in record with path "${s.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const a = c;
          c = () => a;
        } else
          c.__asyncLoader && // warn only once per component
          !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, G(`Component "${i}" in record with path "${s.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !s.instances[i]))
        if (uf(c)) {
          const d = (c.__vccOpts || c)[t];
          d && r.push(ut(d, n, o, s, i));
        } else {
          let a = c();
          process.env.NODE_ENV !== "production" && !("catch" in a) && (G(`Component "${i}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), a = Promise.resolve(a)), r.push(() => a.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));
            const u = lu(d) ? d.default : d;
            s.components[i] = u;
            const h = (u.__vccOpts || u)[t];
            return h && ut(h, n, o, s, i)();
          }));
        }
    }
  }
  return r;
}
function uf(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function ps(e) {
  const t = tt(_r), n = tt(ki), o = Ae(() => t.resolve(Xe(e.to))), r = Ae(() => {
    const { matched: a } = o.value, { length: d } = a, u = a[d - 1], f = n.matched;
    if (!u || !f.length)
      return -1;
    const h = f.findIndex(_t.bind(null, u));
    if (h > -1)
      return h;
    const _ = hs(a[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      hs(u) === _ && // avoid comparing the child with its parent
      f[f.length - 1].path !== _ ? f.findIndex(_t.bind(null, a[d - 2])) : h
    );
  }), s = Ae(() => r.value > -1 && pf(n.params, o.value.params)), i = Ae(() => r.value > -1 && r.value === n.matched.length - 1 && Ci(n.params, o.value.params));
  function c(a = {}) {
    return df(a) ? t[Xe(e.replace) ? "replace" : "push"](
      Xe(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(un) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && Ze) {
    const a = Ni();
    if (a) {
      const d = {
        route: o.value,
        isActive: s.value,
        isExactActive: i.value
      };
      a.__vrl_devtools = a.__vrl_devtools || [], a.__vrl_devtools.push(d), Nl(() => {
        d.route = o.value, d.isActive = s.value, d.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: Ae(() => o.value.href),
    isActive: s,
    isExactActive: i,
    navigate: c
  };
}
const ff = /* @__PURE__ */ qt({
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
  useLink: ps,
  setup(e, { slots: t }) {
    const n = to(ps(e)), { options: o } = tt(_r), r = Ae(() => ({
      [ms(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [ms(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && t.default(n);
      return e.custom ? s : Di("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: r.value
      }, s);
    };
  }
}), Wo = ff;
function df(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function pf(e, t) {
  for (const n in t) {
    const o = t[n], r = e[n];
    if (typeof o == "string") {
      if (o !== r)
        return !1;
    } else if (!xe(r) || r.length !== o.length || o.some((s, i) => s !== r[i]))
      return !1;
  }
  return !0;
}
function hs(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const ms = (e, t, n) => e ?? t ?? n, hf = /* @__PURE__ */ qt({
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
    process.env.NODE_ENV !== "production" && mf();
    const o = tt(Ko), r = Ae(() => e.route || o.value), s = tt(ds, 0), i = Ae(() => {
      let d = Xe(s);
      const { matched: u } = r.value;
      let f;
      for (; (f = u[d]) && !f.components; )
        d++;
      return d;
    }), c = Ae(() => r.value.matched[i.value]);
    Mn(ds, Ae(() => i.value + 1)), Mn(lf, c), Mn(Ko, r);
    const a = Hc();
    return cn(() => [a.value, c.value, e.name], ([d, u, f], [h, _, x]) => {
      u && (u.instances[f] = d, _ && _ !== u && d && d === h && (u.leaveGuards.size || (u.leaveGuards = _.leaveGuards), u.updateGuards.size || (u.updateGuards = _.updateGuards))), d && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!_ || !_t(u, _) || !h) && (u.enterCallbacks[f] || []).forEach((I) => I(d));
    }, { flush: "post" }), () => {
      const d = r.value, u = e.name, f = c.value, h = f && f.components[u];
      if (!h)
        return gs(n.default, { Component: h, route: d });
      const _ = f.props[u], x = _ ? _ === !0 ? d.params : typeof _ == "function" ? _(d) : _ : null, j = Di(h, J({}, x, t, {
        onVnodeUnmounted: (R) => {
          R.component.isUnmounted && (f.instances[u] = null);
        },
        ref: a
      }));
      if (process.env.NODE_ENV !== "production" && Ze && j.ref) {
        const R = {
          depth: i.value,
          name: f.name,
          path: f.path,
          meta: f.meta
        };
        (xe(j.ref) ? j.ref.map((A) => A.i) : [j.ref.i]).forEach((A) => {
          A.__vrv_devtools = R;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        gs(n.default, { Component: j, route: d }) || j
      );
    };
  }
});
function gs(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const ji = hf;
function mf() {
  const e = Ni(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    G(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function Xt(e, t) {
  const n = J({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => Of(o, ["instances", "children", "aliasOf"]))
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
function Sn(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let gf = 0;
function _f(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = gf++;
  cu({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (r) => {
    typeof r.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), r.on.inspectComponent((u, f) => {
      u.instanceData && u.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Xt(t.currentRoute.value, "Current Route")
      });
    }), r.on.visitComponentTree(({ treeNode: u, componentInstance: f }) => {
      if (f.__vrv_devtools) {
        const h = f.__vrv_devtools;
        u.tags.push({
          label: (h.name ? `${h.name.toString()}: ` : "") + h.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: zi
        });
      }
      xe(f.__vrl_devtools) && (f.__devtoolsApi = r, f.__vrl_devtools.forEach((h) => {
        let _ = Fi, x = "";
        h.isExactActive ? (_ = Li, x = "This is exactly active") : h.isActive && (_ = Hi, x = "This link is active"), u.tags.push({
          label: h.route.path,
          textColor: 0,
          tooltip: x,
          backgroundColor: _
        });
      }));
    }), cn(t.currentRoute, () => {
      a(), r.notifyComponentUpdate(), r.sendInspectorTree(c), r.sendInspectorState(c);
    });
    const s = "router:navigations:" + o;
    r.addTimelineLayer({
      id: s,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((u, f) => {
      r.addTimelineEvent({
        layerId: s,
        event: {
          title: "Error during Navigation",
          subtitle: f.fullPath,
          logType: "error",
          time: r.now(),
          data: { error: u },
          groupId: f.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((u, f) => {
      const h = {
        guard: Sn("beforeEach"),
        from: Xt(f, "Current Location during this navigation"),
        to: Xt(u, "Target location")
      };
      Object.defineProperty(u.meta, "__navigationId", {
        value: i++
      }), r.addTimelineEvent({
        layerId: s,
        event: {
          time: r.now(),
          title: "Start of navigation",
          subtitle: u.fullPath,
          data: h,
          groupId: u.meta.__navigationId
        }
      });
    }), t.afterEach((u, f, h) => {
      const _ = {
        guard: Sn("afterEach")
      };
      h ? (_.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: h ? h.message : "",
          tooltip: "Navigation Failure",
          value: h
        }
      }, _.status = Sn("❌")) : _.status = Sn("✅"), _.from = Xt(f, "Current Location during this navigation"), _.to = Xt(u, "Target location"), r.addTimelineEvent({
        layerId: s,
        event: {
          title: "End of navigation",
          subtitle: u.fullPath,
          time: r.now(),
          data: _,
          logType: h ? "warning" : "default",
          groupId: u.meta.__navigationId
        }
      });
    });
    const c = "router-inspector:" + o;
    r.addInspector({
      id: c,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function a() {
      if (!d)
        return;
      const u = d;
      let f = n.getRoutes().filter((h) => !h.parent);
      f.forEach(Ki), u.filter && (f = f.filter((h) => (
        // save matches state based on the payload
        qo(h, u.filter.toLowerCase())
      ))), f.forEach((h) => Bi(h, t.currentRoute.value)), u.rootNodes = f.map(Ui);
    }
    let d;
    r.on.getInspectorTree((u) => {
      d = u, u.app === e && u.inspectorId === c && a();
    }), r.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === c) {
        const h = n.getRoutes().find((_) => _.record.__vd_id === u.nodeId);
        h && (u.state = {
          options: Ef(h)
        });
      }
    }), r.sendInspectorTree(c), r.sendInspectorState(c);
  });
}
function vf(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Ef(e) {
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
        display: e.keys.map((o) => `${o.name}${vf(o)}`).join(" "),
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
const zi = 15485081, Hi = 2450411, Li = 8702998, yf = 2282478, Fi = 16486972, Nf = 6710886;
function Ui(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: yf
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Fi
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: zi
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Li
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Hi
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Nf
  });
  let o = n.__vd_id;
  return o == null && (o = String(bf++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Ui)
  };
}
let bf = 0;
const wf = /^\/(.*)\/([a-z]*)$/;
function Bi(e, t) {
  const n = t.matched.length && _t(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => _t(o, e.record))), e.children.forEach((o) => Bi(o, t));
}
function Ki(e) {
  e.__vd_match = !1, e.children.forEach(Ki);
}
function qo(e, t) {
  const n = String(e.re).match(wf);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => qo(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const r = e.record.path.toLowerCase(), s = yn(r);
  return !t.startsWith("/") && (s.includes(t) || r.includes(t)) || s.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => qo(i, t));
}
function Of(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function xf(e) {
  const t = zu(e.routes, e), n = e.parseQuery || sf, o = e.stringifyQuery || fs, r = e.history;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const s = Zt(), i = Zt(), c = Zt(), a = Lc(ct);
  let d = ct;
  Ze && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = Eo.bind(null, (g) => "" + g), f = Eo.bind(null, rf), h = (
    // @ts-expect-error: intentionally avoid the type check
    Eo.bind(null, yn)
  );
  function _(g, V) {
    let C, $;
    return Pi(g) ? (C = t.getRecordMatcher(g), $ = V) : $ = g, t.addRoute($, C);
  }
  function x(g) {
    const V = t.getRecordMatcher(g);
    V ? t.removeRoute(V) : process.env.NODE_ENV !== "production" && G(`Cannot remove non-existent route "${String(g)}"`);
  }
  function I() {
    return t.getRoutes().map((g) => g.record);
  }
  function j(g) {
    return !!t.getRecordMatcher(g);
  }
  function R(g, V) {
    if (V = J({}, V || a.value), typeof g == "string") {
      const p = yo(n, g, V.path), m = t.resolve({ path: p.path }, V), E = r.createHref(p.fullPath);
      return process.env.NODE_ENV !== "production" && (E.startsWith("//") ? G(`Location "${g}" resolved to "${E}". A resolved location cannot start with multiple slashes.`) : m.matched.length || G(`No match found for location with path "${g}"`)), J(p, m, {
        params: h(m.params),
        hash: yn(p.hash),
        redirectedFrom: void 0,
        href: E
      });
    }
    let C;
    if ("path" in g)
      process.env.NODE_ENV !== "production" && "params" in g && !("name" in g) && // @ts-expect-error: the type is never
      Object.keys(g.params).length && G(`Path "${g.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), C = J({}, g, {
        path: yo(n, g.path, V.path).path
      });
    else {
      const p = J({}, g.params);
      for (const m in p)
        p[m] == null && delete p[m];
      C = J({}, g, {
        params: f(p)
      }), V.params = f(V.params);
    }
    const $ = t.resolve(C, V), Y = g.hash || "";
    process.env.NODE_ENV !== "production" && Y && !Y.startsWith("#") && G(`A \`hash\` should always start with the character "#". Replace "${Y}" with "#${Y}".`), $.params = u(h($.params));
    const re = fu(o, J({}, g, {
      hash: tf(Y),
      path: $.path
    })), l = r.createHref(re);
    return process.env.NODE_ENV !== "production" && (l.startsWith("//") ? G(`Location "${g}" resolved to "${l}". A resolved location cannot start with multiple slashes.`) : $.matched.length || G(`No match found for location with path "${"path" in g ? g.path : g}"`)), J({
      fullPath: re,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: Y,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === fs ? cf(g.query) : g.query || {}
      )
    }, $, {
      redirectedFrom: void 0,
      href: l
    });
  }
  function z(g) {
    return typeof g == "string" ? yo(n, g, a.value.path) : J({}, g);
  }
  function A(g, V) {
    if (d !== g)
      return Wt(8, {
        from: V,
        to: g
      });
  }
  function oe(g) {
    return ye(g);
  }
  function M(g) {
    return oe(J(z(g), { replace: !0 }));
  }
  function fe(g) {
    const V = g.matched[g.matched.length - 1];
    if (V && V.redirect) {
      const { redirect: C } = V;
      let $ = typeof C == "function" ? C(g) : C;
      if (typeof $ == "string" && ($ = $.includes("?") || $.includes("#") ? $ = z($) : (
        // force empty params
        { path: $ }
      ), $.params = {}), process.env.NODE_ENV !== "production" && !("path" in $) && !("name" in $))
        throw G(`Invalid redirect found:
${JSON.stringify($, null, 2)}
 when navigating to "${g.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return J({
        query: g.query,
        hash: g.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in $ ? {} : g.params
      }, $);
    }
  }
  function ye(g, V) {
    const C = d = R(g), $ = a.value, Y = g.state, re = g.force, l = g.replace === !0, p = fe(C);
    if (p)
      return ye(
        J(z(p), {
          state: typeof p == "object" ? J({}, Y, p.state) : Y,
          force: re,
          replace: l
        }),
        // keep original redirectedFrom if it exists
        V || C
      );
    const m = C;
    m.redirectedFrom = V;
    let E;
    return !re && ts(o, $, C) && (E = Wt(16, { to: m, from: $ }), ot(
      $,
      $,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (E ? Promise.resolve(E) : De(m, $)).catch((v) => Ge(v) ? (
      // navigation redirects still mark the router as ready
      Ge(
        v,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? v : yt(v)
    ) : (
      // reject any unknown error
      B(v, m, $)
    )).then((v) => {
      if (v) {
        if (Ge(
          v,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          ts(o, R(v.to), m) && // and we have done it a couple of times
          V && // @ts-expect-error: added only in dev
          (V._count = V._count ? (
            // @ts-expect-error
            V._count + 1
          ) : 1) > 30 ? (G(`Detected a possibly infinite redirection in a navigation guard when going from "${$.fullPath}" to "${m.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : ye(
            // keep options
            J({
              // preserve an existing replacement but allow the redirect to override it
              replace: l
            }, z(v.to), {
              state: typeof v.to == "object" ? J({}, Y, v.to.state) : Y,
              force: re
            }),
            // preserve the original redirectedFrom if any
            V || m
          );
      } else
        v = be(m, $, !0, l, Y);
      return Re(m, $, v), v;
    });
  }
  function ze(g, V) {
    const C = A(g, V);
    return C ? Promise.reject(C) : Promise.resolve();
  }
  function Ne(g) {
    const V = rt.values().next().value;
    return V && typeof V.runWithContext == "function" ? V.runWithContext(g) : g();
  }
  function De(g, V) {
    let C;
    const [$, Y, re] = Df(g, V);
    C = No($.reverse(), "beforeRouteLeave", g, V);
    for (const p of $)
      p.leaveGuards.forEach((m) => {
        C.push(ut(m, g, V));
      });
    const l = ze.bind(null, g, V);
    return C.push(l), st(C).then(() => {
      C = [];
      for (const p of s.list())
        C.push(ut(p, g, V));
      return C.push(l), st(C);
    }).then(() => {
      C = No(Y, "beforeRouteUpdate", g, V);
      for (const p of Y)
        p.updateGuards.forEach((m) => {
          C.push(ut(m, g, V));
        });
      return C.push(l), st(C);
    }).then(() => {
      C = [];
      for (const p of re)
        if (p.beforeEnter)
          if (xe(p.beforeEnter))
            for (const m of p.beforeEnter)
              C.push(ut(m, g, V));
          else
            C.push(ut(p.beforeEnter, g, V));
      return C.push(l), st(C);
    }).then(() => (g.matched.forEach((p) => p.enterCallbacks = {}), C = No(re, "beforeRouteEnter", g, V), C.push(l), st(C))).then(() => {
      C = [];
      for (const p of i.list())
        C.push(ut(p, g, V));
      return C.push(l), st(C);
    }).catch((p) => Ge(
      p,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? p : Promise.reject(p));
  }
  function Re(g, V, C) {
    c.list().forEach(($) => Ne(() => $(g, V, C)));
  }
  function be(g, V, C, $, Y) {
    const re = A(g, V);
    if (re)
      return re;
    const l = V === ct, p = Ze ? history.state : {};
    C && ($ || l ? r.replace(g.fullPath, J({
      scroll: l && p && p.scroll
    }, Y)) : r.push(g.fullPath, Y)), a.value = g, ot(g, V, C, l), yt();
  }
  let He;
  function On() {
    He || (He = r.listen((g, V, C) => {
      if (!xn.listening)
        return;
      const $ = R(g), Y = fe($);
      if (Y) {
        ye(J(Y, { replace: !0 }), $).catch(un);
        return;
      }
      d = $;
      const re = a.value;
      Ze && Eu(os(re.fullPath, C.delta), uo()), De($, re).catch((l) => Ge(
        l,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? l : Ge(
        l,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (ye(
        l.to,
        $
        // avoid an uncaught rejection, let push call triggerError
      ).then((p) => {
        Ge(
          p,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !C.delta && C.type === En.pop && r.go(-1, !1);
      }).catch(un), Promise.reject()) : (C.delta && r.go(-C.delta, !1), B(l, $, re))).then((l) => {
        l = l || be(
          // after navigation, all matched components are resolved
          $,
          re,
          !1
        ), l && (C.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Ge(
          l,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? r.go(-C.delta, !1) : C.type === En.pop && Ge(
          l,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && r.go(-1, !1)), Re($, re, l);
      }).catch(un);
    }));
  }
  let Ve = Zt(), de = Zt(), U;
  function B(g, V, C) {
    yt(g);
    const $ = de.list();
    return $.length ? $.forEach((Y) => Y(g, V, C)) : (process.env.NODE_ENV !== "production" && G("uncaught error during route navigation:"), console.error(g)), Promise.reject(g);
  }
  function Ce() {
    return U && a.value !== ct ? Promise.resolve() : new Promise((g, V) => {
      Ve.add([g, V]);
    });
  }
  function yt(g) {
    return U || (U = !g, On(), Ve.list().forEach(([V, C]) => g ? C(g) : V()), Ve.reset()), g;
  }
  function ot(g, V, C, $) {
    const { scrollBehavior: Y } = e;
    if (!Ze || !Y)
      return Promise.resolve();
    const re = !C && yu(os(g.fullPath, 0)) || ($ || !C) && history.state && history.state.scroll || null;
    return Bs().then(() => Y(g, V, re)).then((l) => l && vu(l)).catch((l) => B(l, g, V));
  }
  const Le = (g) => r.go(g);
  let $e;
  const rt = /* @__PURE__ */ new Set(), xn = {
    currentRoute: a,
    listening: !0,
    addRoute: _,
    removeRoute: x,
    hasRoute: j,
    getRoutes: I,
    resolve: R,
    options: e,
    push: oe,
    replace: M,
    go: Le,
    back: () => Le(-1),
    forward: () => Le(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: c.add,
    onError: de.add,
    isReady: Ce,
    install(g) {
      const V = this;
      g.component("RouterLink", Wo), g.component("RouterView", ji), g.config.globalProperties.$router = V, Object.defineProperty(g.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Xe(a)
      }), Ze && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !$e && a.value === ct && ($e = !0, oe(r.location).catch((Y) => {
        process.env.NODE_ENV !== "production" && G("Unexpected error when starting the router:", Y);
      }));
      const C = {};
      for (const Y in ct)
        Object.defineProperty(C, Y, {
          get: () => a.value[Y],
          enumerable: !0
        });
      g.provide(_r, V), g.provide(ki, As(C)), g.provide(Ko, a);
      const $ = g.unmount;
      rt.add(g), g.unmount = function() {
        rt.delete(g), rt.size < 1 && (d = ct, He && He(), He = null, a.value = ct, $e = !1, U = !1), $();
      }, process.env.NODE_ENV !== "production" && Ze && _f(g, V, t);
    }
  };
  function st(g) {
    return g.reduce((V, C) => V.then(() => Ne(C)), Promise.resolve());
  }
  return xn;
}
function Df(e, t) {
  const n = [], o = [], r = [], s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const c = t.matched[i];
    c && (e.matched.find((d) => _t(d, c)) ? o.push(c) : n.push(c));
    const a = e.matched[i];
    a && (t.matched.find((d) => _t(d, a)) || r.push(a));
  }
  return [n, o, r];
}
const Vf = (e) => (ei("data-v-a47c673d"), e = e(), ti(), e), Cf = { class: "greetings" }, $f = { class: "green" }, Pf = /* @__PURE__ */ Vf(() => /* @__PURE__ */ q("h3", null, [
  /* @__PURE__ */ Q(" You’ve successfully created a project with "),
  /* @__PURE__ */ q("a", {
    href: "https://vitejs.dev/",
    target: "_blank",
    rel: "noopener"
  }, "Vite"),
  /* @__PURE__ */ Q(" + "),
  /* @__PURE__ */ q("a", {
    href: "https://vuejs.org/",
    target: "_blank",
    rel: "noopener"
  }, "Vue 3"),
  /* @__PURE__ */ Q(". What's next? ")
], -1)), Rf = /* @__PURE__ */ qt({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(e) {
    return (t, n) => (je(), Ye("div", Cf, [
      q("h1", $f, ac(t.msg), 1),
      Pf
    ]));
  }
});
const Et = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Sf = /* @__PURE__ */ Et(Rf, [["__scopeId", "data-v-a47c673d"]]), If = (e) => (ei("data-v-d87485c4"), e = e(), ti(), e), Tf = { id: "app_inner" }, Af = /* @__PURE__ */ If(() => /* @__PURE__ */ q("img", {
  alt: "Vue logo",
  class: "logo",
  src: Xa,
  width: "125",
  height: "125"
}, null, -1)), Mf = { class: "wrapper" }, kf = /* @__PURE__ */ qt({
  __name: "App",
  setup(e) {
    return (t, n) => (je(), Ye("div", Tf, [
      q("header", null, [
        Af,
        q("div", Mf, [
          X(Sf, { msg: "You did it!" }),
          q("nav", null, [
            X(Xe(Wo), { to: "/" }, {
              default: ae(() => [
                Q("Home")
              ]),
              _: 1
            }),
            X(Xe(Wo), { to: "/about" }, {
              default: ae(() => [
                Q("About")
              ]),
              _: 1
            })
          ])
        ])
      ]),
      X(Xe(ji))
    ]));
  }
});
const jf = /* @__PURE__ */ Et(kf, [["__scopeId", "data-v-d87485c4"]]);
const zf = {}, Hf = { class: "item" }, Lf = { class: "details" };
function Ff(e, t) {
  return je(), Ye("div", Hf, [
    q("i", null, [
      ho(e.$slots, "icon", {}, void 0, !0)
    ]),
    q("div", Lf, [
      q("h3", null, [
        ho(e.$slots, "heading", {}, void 0, !0)
      ]),
      ho(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const en = /* @__PURE__ */ Et(zf, [["render", Ff], ["__scopeId", "data-v-fd0742eb"]]), Uf = {}, Bf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "17",
  fill: "currentColor"
}, Kf = /* @__PURE__ */ q("path", { d: "M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z" }, null, -1), Wf = [
  Kf
];
function qf(e, t) {
  return je(), Ye("svg", Bf, Wf);
}
const Yf = /* @__PURE__ */ Et(Uf, [["render", qf]]), Gf = {}, Qf = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": "true",
  role: "img",
  class: "iconify iconify--mdi",
  width: "24",
  height: "24",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
}, Jf = /* @__PURE__ */ q("path", {
  d: "M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",
  fill: "currentColor"
}, null, -1), Zf = [
  Jf
];
function Xf(e, t) {
  return je(), Ye("svg", Qf, Zf);
}
const ed = /* @__PURE__ */ Et(Gf, [["render", Xf]]), td = {}, nd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "20",
  fill: "currentColor"
}, od = /* @__PURE__ */ q("path", { d: "M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z" }, null, -1), rd = [
  od
];
function sd(e, t) {
  return je(), Ye("svg", nd, rd);
}
const id = /* @__PURE__ */ Et(td, [["render", sd]]), cd = {}, ld = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
}, ad = /* @__PURE__ */ q("path", { d: "M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z" }, null, -1), ud = [
  ad
];
function fd(e, t) {
  return je(), Ye("svg", ld, ud);
}
const dd = /* @__PURE__ */ Et(cd, [["render", fd]]), pd = {}, hd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
}, md = /* @__PURE__ */ q("path", { d: "M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z" }, null, -1), gd = [
  md
];
function _d(e, t) {
  return je(), Ye("svg", hd, gd);
}
const vd = /* @__PURE__ */ Et(pd, [["render", _d]]), Ed = /* @__PURE__ */ q("a", {
  href: "https://vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "official documentation", -1), yd = /* @__PURE__ */ q("a", {
  href: "https://vitejs.dev/guide/features.html",
  target: "_blank",
  rel: "noopener"
}, "Vite", -1), Nd = /* @__PURE__ */ q("a", {
  href: "https://code.visualstudio.com/",
  target: "_blank",
  rel: "noopener"
}, "VSCode", -1), bd = /* @__PURE__ */ q("a", {
  href: "https://github.com/johnsoncodehk/volar",
  target: "_blank",
  rel: "noopener"
}, "Volar", -1), wd = /* @__PURE__ */ q("a", {
  href: "https://www.cypress.io/",
  target: "_blank",
  rel: "noopener"
}, "Cypress", -1), Od = /* @__PURE__ */ q("a", {
  href: "https://on.cypress.io/component",
  target: "_blank",
  rel: "noopener"
}, "Cypress Component Testing", -1), xd = /* @__PURE__ */ q("br", null, null, -1), Dd = /* @__PURE__ */ q("code", null, "README.md", -1), Vd = /* @__PURE__ */ q("a", {
  href: "https://pinia.vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "Pinia", -1), Cd = /* @__PURE__ */ q("a", {
  href: "https://router.vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "Vue Router", -1), $d = /* @__PURE__ */ q("a", {
  href: "https://test-utils.vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "Vue Test Utils", -1), Pd = /* @__PURE__ */ q("a", {
  href: "https://github.com/vuejs/devtools",
  target: "_blank",
  rel: "noopener"
}, "Vue Dev Tools", -1), Rd = /* @__PURE__ */ q("a", {
  href: "https://github.com/vuejs/awesome-vue",
  target: "_blank",
  rel: "noopener"
}, "Awesome Vue", -1), Sd = /* @__PURE__ */ q("a", {
  href: "https://chat.vuejs.org",
  target: "_blank",
  rel: "noopener"
}, "Vue Land", -1), Id = /* @__PURE__ */ q("a", {
  href: "https://stackoverflow.com/questions/tagged/vue.js",
  target: "_blank",
  rel: "noopener"
}, "StackOverflow", -1), Td = /* @__PURE__ */ q("a", {
  href: "https://news.vuejs.org",
  target: "_blank",
  rel: "noopener"
}, "our mailing list", -1), Ad = /* @__PURE__ */ q("a", {
  href: "https://twitter.com/vuejs",
  target: "_blank",
  rel: "noopener"
}, "@vuejs", -1), Md = /* @__PURE__ */ q("a", {
  href: "https://vuejs.org/sponsor/",
  target: "_blank",
  rel: "noopener"
}, "becoming a sponsor", -1), kd = /* @__PURE__ */ qt({
  __name: "TheWelcome",
  setup(e) {
    return (t, n) => (je(), Ye(Oe, null, [
      X(en, null, {
        icon: ae(() => [
          X(Yf)
        ]),
        heading: ae(() => [
          Q("Documentation")
        ]),
        default: ae(() => [
          Q(" Vue’s "),
          Ed,
          Q(" provides you with all information you need to get started. ")
        ]),
        _: 1
      }),
      X(en, null, {
        icon: ae(() => [
          X(ed)
        ]),
        heading: ae(() => [
          Q("Tooling")
        ]),
        default: ae(() => [
          Q(" This project is served and bundled with "),
          yd,
          Q(". The recommended IDE setup is "),
          Nd,
          Q(" + "),
          bd,
          Q(". If you need to test your components and web pages, check out "),
          wd,
          Q(" and "),
          Od,
          Q(". "),
          xd,
          Q(" More instructions are available in "),
          Dd,
          Q(". ")
        ]),
        _: 1
      }),
      X(en, null, {
        icon: ae(() => [
          X(id)
        ]),
        heading: ae(() => [
          Q("Ecosystem")
        ]),
        default: ae(() => [
          Q(" Get official tools and libraries for your project: "),
          Vd,
          Q(", "),
          Cd,
          Q(", "),
          $d,
          Q(", and "),
          Pd,
          Q(". If you need more resources, we suggest paying "),
          Rd,
          Q(" a visit. ")
        ]),
        _: 1
      }),
      X(en, null, {
        icon: ae(() => [
          X(dd)
        ]),
        heading: ae(() => [
          Q("Community")
        ]),
        default: ae(() => [
          Q(" Got stuck? Ask your question on "),
          Sd,
          Q(", our official Discord server, or "),
          Id,
          Q(". You should also subscribe to "),
          Td,
          Q(" and follow the official "),
          Ad,
          Q(" twitter account for latest news in the Vue world. ")
        ]),
        _: 1
      }),
      X(en, null, {
        icon: ae(() => [
          X(vd)
        ]),
        heading: ae(() => [
          Q("Support Vue")
        ]),
        default: ae(() => [
          Q(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),
          Md,
          Q(". ")
        ]),
        _: 1
      })
    ], 64));
  }
}), jd = /* @__PURE__ */ qt({
  __name: "HomeView",
  setup(e) {
    return (t, n) => (je(), Ye("main", null, [
      X(kd)
    ]));
  }
}), zd = xf({
  history: xu(),
  routes: [
    {
      path: "/",
      name: "home",
      component: jd
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./AboutView-ac897ec6.mjs")
    }
  ]
}), Wi = Ya(jf);
Wi.use(zd);
Wi.mount("#app");
export {
  Et as _,
  q as a,
  Ye as c,
  je as o
};
