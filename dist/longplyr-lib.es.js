function bt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let s = 0; s < o.length; s++)
    n[o[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
const yr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Or = /* @__PURE__ */ bt(yr);
function ls(e) {
  return !!e || e === "";
}
function oo(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = ee(o) ? Vr(o) : oo(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else {
    if (ee(e))
      return e;
    if (q(e))
      return e;
  }
}
const wr = /;(?![^(]*\))/g, Dr = /:(.+)/;
function Vr(e) {
  const t = {};
  return e.split(wr).forEach((n) => {
    if (n) {
      const o = n.split(Dr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function so(e) {
  let t = "";
  if (ee(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = so(e[n]);
      o && (t += o + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const H = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, mt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ne = () => {
}, fs = () => !1, xr = /^on[^a-z]/, jt = (e) => xr.test(e), en = (e) => e.startsWith("onUpdate:"), X = Object.assign, ro = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Cr = Object.prototype.hasOwnProperty, R = (e, t) => Cr.call(e, t), T = Array.isArray, gt = (e) => fn(e) === "[object Map]", Tr = (e) => fn(e) === "[object Set]", $ = (e) => typeof e == "function", ee = (e) => typeof e == "string", io = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", co = (e) => q(e) && $(e.then) && $(e.catch), Ir = Object.prototype.toString, fn = (e) => Ir.call(e), lo = (e) => fn(e).slice(8, -1), $r = (e) => fn(e) === "[object Object]", fo = (e) => ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Jt = /* @__PURE__ */ bt(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Pr = /* @__PURE__ */ bt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), un = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ar = /-(\w)/g, We = un((e) => e.replace(Ar, (t, n) => n ? n.toUpperCase() : "")), Rr = /\B([A-Z])/g, ve = un((e) => e.replace(Rr, "-$1").toLowerCase()), an = un((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xe = un((e) => e ? `on${an(e)}` : ""), $t = (e, t) => !Object.is(e, t), wt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, tn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Mn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let To;
const us = () => To || (To = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Fn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let De;
class Mr {
  constructor(t = !1) {
    this.active = !0, this.effects = [], this.cleanups = [], !t && De && (this.parent = De, this.index = (De.scopes || (De.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = De;
      try {
        return De = this, t();
      } finally {
        De = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Fn("cannot run an inactive effect scope.");
  }
  on() {
    De = this;
  }
  off() {
    De = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.active = !1;
    }
  }
}
function Fr(e, t = De) {
  t && t.active && t.effects.push(e);
}
const Pt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, as = (e) => (e.w & ze) > 0, ds = (e) => (e.n & ze) > 0, Sr = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= ze;
}, jr = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      as(s) && !ds(s) ? s.delete(e) : t[n++] = s, s.w &= ~ze, s.n &= ~ze;
    }
    t.length = n;
  }
}, Sn = /* @__PURE__ */ new WeakMap();
let Vt = 0, ze = 1;
const jn = 30;
let fe;
const tt = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Ln = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class uo {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Fr(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = fe, n = Ke;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = fe, fe = this, Ke = !0, ze = 1 << ++Vt, Vt <= jn ? Sr(this) : Io(this), this.fn();
    } finally {
      Vt <= jn && jr(this), ze = 1 << --Vt, fe = this.parent, Ke = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    fe === this ? this.deferStop = !0 : this.active && (Io(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Io(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ke = !0;
const ps = [];
function ct() {
  ps.push(Ke), Ke = !1;
}
function lt() {
  const e = ps.pop();
  Ke = e === void 0 ? !0 : e;
}
function pe(e, t, n) {
  if (Ke && fe) {
    let o = Sn.get(e);
    o || Sn.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Pt());
    const r = process.env.NODE_ENV !== "production" ? { effect: fe, target: e, type: t, key: n } : void 0;
    Hn(s, r);
  }
}
function Hn(e, t) {
  let n = !1;
  Vt <= jn ? ds(e) || (e.n |= ze, n = !as(e)) : n = !e.has(fe), n && (e.add(fe), fe.deps.push(e), process.env.NODE_ENV !== "production" && fe.onTrack && fe.onTrack(Object.assign({ effect: fe }, t)));
}
function Me(e, t, n, o, s, r) {
  const i = Sn.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && T(e))
    i.forEach((a, h) => {
      (h === "length" || h >= o) && l.push(a);
    });
  else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        T(e) ? fo(n) && l.push(i.get("length")) : (l.push(i.get(tt)), gt(e) && l.push(i.get(Ln)));
        break;
      case "delete":
        T(e) || (l.push(i.get(tt)), gt(e) && l.push(i.get(Ln)));
        break;
      case "set":
        gt(e) && l.push(i.get(tt));
        break;
    }
  const f = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: s, oldTarget: r } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? pt(l[0], f) : pt(l[0]));
  else {
    const a = [];
    for (const h of l)
      h && a.push(...h);
    process.env.NODE_ENV !== "production" ? pt(Pt(a), f) : pt(Pt(a));
  }
}
function pt(e, t) {
  const n = T(e) ? e : [...e];
  for (const o of n)
    o.computed && $o(o, t);
  for (const o of n)
    o.computed || $o(o, t);
}
function $o(e, t) {
  (e !== fe || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(X({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Lr = /* @__PURE__ */ bt("__proto__,__v_isRef,__isVue"), hs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(io)
), Hr = /* @__PURE__ */ dn(), Ur = /* @__PURE__ */ dn(!1, !0), kr = /* @__PURE__ */ dn(!0), Br = /* @__PURE__ */ dn(!0, !0), Po = /* @__PURE__ */ Kr();
function Kr() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = P(this);
      for (let r = 0, i = this.length; r < i; r++)
        pe(o, "get", r + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(P)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ct();
      const o = P(this)[t].apply(this, n);
      return lt(), o;
    };
  }), e;
}
function dn(e = !1, t = !1) {
  return function(o, s, r) {
    if (s === "__v_isReactive")
      return !e;
    if (s === "__v_isReadonly")
      return e;
    if (s === "__v_isShallow")
      return t;
    if (s === "__v_raw" && r === (e ? t ? ys : bs : t ? vs : Ns).get(o))
      return o;
    const i = T(o);
    if (!e && i && R(Po, s))
      return Reflect.get(Po, s, r);
    const l = Reflect.get(o, s, r);
    return (io(s) ? hs.has(s) : Lr(s)) || (e || pe(o, "get", s), t) ? l : G(l) ? i && fo(s) ? l : l.value : q(l) ? e ? Os(l) : po(l) : l;
  };
}
const Wr = /* @__PURE__ */ _s(), zr = /* @__PURE__ */ _s(!0);
function _s(e = !1) {
  return function(n, o, s, r) {
    let i = n[o];
    if (qe(i) && G(i) && !G(s))
      return !1;
    if (!e && (!nn(s) && !qe(s) && (i = P(i), s = P(s)), !T(n) && G(i) && !G(s)))
      return i.value = s, !0;
    const l = T(n) && fo(o) ? Number(o) < n.length : R(n, o), f = Reflect.set(n, o, s, r);
    return n === P(r) && (l ? $t(s, i) && Me(n, "set", o, s, i) : Me(n, "add", o, s)), f;
  };
}
function qr(e, t) {
  const n = R(e, t), o = e[t], s = Reflect.deleteProperty(e, t);
  return s && n && Me(e, "delete", t, void 0, o), s;
}
function Jr(e, t) {
  const n = Reflect.has(e, t);
  return (!io(t) || !hs.has(t)) && pe(e, "has", t), n;
}
function Yr(e) {
  return pe(e, "iterate", T(e) ? "length" : tt), Reflect.ownKeys(e);
}
const ms = {
  get: Hr,
  set: Wr,
  deleteProperty: qr,
  has: Jr,
  ownKeys: Yr
}, gs = {
  get: kr,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Fn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Fn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, Xr = /* @__PURE__ */ X({}, ms, {
  get: Ur,
  set: zr
}), Zr = /* @__PURE__ */ X({}, gs, {
  get: Br
}), ao = (e) => e, pn = (e) => Reflect.getPrototypeOf(e);
function Bt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = P(e), r = P(t);
  n || (t !== r && pe(s, "get", t), pe(s, "get", r));
  const { has: i } = pn(s), l = o ? ao : n ? ho : At;
  if (i.call(s, t))
    return l(e.get(t));
  if (i.call(s, r))
    return l(e.get(r));
  e !== s && e.get(t);
}
function Kt(e, t = !1) {
  const n = this.__v_raw, o = P(n), s = P(e);
  return t || (e !== s && pe(o, "has", e), pe(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Wt(e, t = !1) {
  return e = e.__v_raw, !t && pe(P(e), "iterate", tt), Reflect.get(e, "size", e);
}
function Ao(e) {
  e = P(e);
  const t = P(this);
  return pn(t).has.call(t, e) || (t.add(e), Me(t, "add", e, e)), this;
}
function Ro(e, t) {
  t = P(t);
  const n = P(this), { has: o, get: s } = pn(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && Es(n, o, e) : (e = P(e), r = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), r ? $t(t, i) && Me(n, "set", e, t, i) : Me(n, "add", e, t), this;
}
function Mo(e) {
  const t = P(this), { has: n, get: o } = pn(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && Es(t, n, e) : (e = P(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && Me(t, "delete", e, void 0, r), i;
}
function Fo() {
  const e = P(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? gt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Me(e, "clear", void 0, void 0, n), o;
}
function zt(e, t) {
  return function(o, s) {
    const r = this, i = r.__v_raw, l = P(i), f = t ? ao : e ? ho : At;
    return !e && pe(l, "iterate", tt), i.forEach((a, h) => o.call(s, f(a), f(h), r));
  };
}
function qt(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = P(s), i = gt(r), l = e === "entries" || e === Symbol.iterator && i, f = e === "keys" && i, a = s[e](...o), h = n ? ao : t ? ho : At;
    return !t && pe(r, "iterate", f ? Ln : tt), {
      next() {
        const { value: d, done: g } = a.next();
        return g ? { value: d, done: g } : {
          value: l ? [h(d[0]), h(d[1])] : h(d),
          done: g
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function He(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${an(e)} operation ${n}failed: target is readonly.`, P(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function Qr() {
  const e = {
    get(r) {
      return Bt(this, r);
    },
    get size() {
      return Wt(this);
    },
    has: Kt,
    add: Ao,
    set: Ro,
    delete: Mo,
    clear: Fo,
    forEach: zt(!1, !1)
  }, t = {
    get(r) {
      return Bt(this, r, !1, !0);
    },
    get size() {
      return Wt(this);
    },
    has: Kt,
    add: Ao,
    set: Ro,
    delete: Mo,
    clear: Fo,
    forEach: zt(!1, !0)
  }, n = {
    get(r) {
      return Bt(this, r, !0);
    },
    get size() {
      return Wt(this, !0);
    },
    has(r) {
      return Kt.call(this, r, !0);
    },
    add: He("add"),
    set: He("set"),
    delete: He("delete"),
    clear: He("clear"),
    forEach: zt(!0, !1)
  }, o = {
    get(r) {
      return Bt(this, r, !0, !0);
    },
    get size() {
      return Wt(this, !0);
    },
    has(r) {
      return Kt.call(this, r, !0);
    },
    add: He("add"),
    set: He("set"),
    delete: He("delete"),
    clear: He("clear"),
    forEach: zt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = qt(r, !1, !1), n[r] = qt(r, !0, !1), t[r] = qt(r, !1, !0), o[r] = qt(r, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [Gr, ei, ti, ni] = /* @__PURE__ */ Qr();
function hn(e, t) {
  const n = t ? e ? ni : ti : e ? ei : Gr;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(R(n, s) && s in o ? n : o, s, r);
}
const oi = {
  get: /* @__PURE__ */ hn(!1, !1)
}, si = {
  get: /* @__PURE__ */ hn(!1, !0)
}, ri = {
  get: /* @__PURE__ */ hn(!0, !1)
}, ii = {
  get: /* @__PURE__ */ hn(!0, !0)
};
function Es(e, t, n) {
  const o = P(n);
  if (o !== n && t.call(e, o)) {
    const s = lo(e);
    console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Ns = /* @__PURE__ */ new WeakMap(), vs = /* @__PURE__ */ new WeakMap(), bs = /* @__PURE__ */ new WeakMap(), ys = /* @__PURE__ */ new WeakMap();
function ci(e) {
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
function li(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ci(lo(e));
}
function po(e) {
  return qe(e) ? e : _n(e, !1, ms, oi, Ns);
}
function fi(e) {
  return _n(e, !1, Xr, si, vs);
}
function Os(e) {
  return _n(e, !0, gs, ri, bs);
}
function ht(e) {
  return _n(e, !0, Zr, ii, ys);
}
function _n(e, t, n, o, s) {
  if (!q(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const i = li(e);
  if (i === 0)
    return e;
  const l = new Proxy(e, i === 2 ? o : n);
  return s.set(e, l), l;
}
function nt(e) {
  return qe(e) ? nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function qe(e) {
  return !!(e && e.__v_isReadonly);
}
function nn(e) {
  return !!(e && e.__v_isShallow);
}
function Un(e) {
  return nt(e) || qe(e);
}
function P(e) {
  const t = e && e.__v_raw;
  return t ? P(t) : e;
}
function ws(e) {
  return tn(e, "__v_skip", !0), e;
}
const At = (e) => q(e) ? po(e) : e, ho = (e) => q(e) ? Os(e) : e;
function Ds(e) {
  Ke && fe && (e = P(e), process.env.NODE_ENV !== "production" ? Hn(e.dep || (e.dep = Pt()), {
    target: e,
    type: "get",
    key: "value"
  }) : Hn(e.dep || (e.dep = Pt())));
}
function Vs(e, t) {
  e = P(e), e.dep && (process.env.NODE_ENV !== "production" ? pt(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : pt(e.dep));
}
function G(e) {
  return !!(e && e.__v_isRef === !0);
}
function ui(e) {
  return ai(e, !1);
}
function ai(e, t) {
  return G(e) ? e : new di(e, t);
}
class di {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : P(t), this._value = n ? t : At(t);
  }
  get value() {
    return Ds(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || nn(t) || qe(t);
    t = n ? t : P(t), $t(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : At(t), Vs(this, t));
  }
}
function pi(e) {
  return G(e) ? e.value : e;
}
const hi = {
  get: (e, t, n) => pi(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return G(s) && !G(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function xs(e) {
  return nt(e) ? e : new Proxy(e, hi);
}
var Cs;
class _i {
  constructor(t, n, o, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Cs] = !1, this._dirty = !0, this.effect = new uo(t, () => {
      this._dirty || (this._dirty = !0, Vs(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = o;
  }
  get value() {
    const t = P(this);
    return Ds(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Cs = "__v_isReadonly";
function mi(e, t, n = !1) {
  let o, s;
  const r = $(e);
  r ? (o = e, s = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ne) : (o = e.get, s = e.set);
  const i = new _i(o, s, r || !s, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const ot = [];
function Yt(e) {
  ot.push(e);
}
function Xt() {
  ot.pop();
}
function y(e, ...t) {
  ct();
  const n = ot.length ? ot[ot.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = gi();
  if (o)
    Re(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      s.map(({ vnode: r }) => `at <${On(n, r.type)}>`).join(`
`),
      s
    ]);
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Ei(s)), console.warn(...r);
  }
  lt();
}
function gi() {
  let e = ot[ot.length - 1];
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
function Ei(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Ni(n));
  }), t;
}
function Ni({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${On(e.component, e.type, o)}`, r = ">" + n;
  return e.props ? [s, ...vi(e.props), r] : [s + r];
}
function vi(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Ts(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ts(e, t, n) {
  return ee(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : G(t) ? (t = Ts(e, P(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = P(t), n ? t : [`${e}=`, t]);
}
const _o = {
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
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Re(e, t, n, o) {
  let s;
  try {
    s = o ? e(...o) : e();
  } catch (r) {
    mn(r, t, n);
  }
  return s;
}
function me(e, t, n, o) {
  if ($(e)) {
    const r = Re(e, t, n, o);
    return r && co(r) && r.catch((i) => {
      mn(i, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(me(e[r], t, n, o));
  return s;
}
function mn(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? _o[n] : n;
    for (; r; ) {
      const a = r.ec;
      if (a) {
        for (let h = 0; h < a.length; h++)
          if (a[h](e, i, l) === !1)
            return;
      }
      r = r.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      Re(f, null, 10, [e, i, l]);
      return;
    }
  }
  bi(e, n, s, o);
}
function bi(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = _o[t];
    if (n && Yt(n), y(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Xt(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Rt = !1, kn = !1;
const se = [];
let xe = 0;
const Et = [];
let Ve = null, Ue = 0;
const Is = /* @__PURE__ */ Promise.resolve();
let mo = null;
const yi = 100;
function $s(e) {
  const t = mo || Is;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Oi(e) {
  let t = xe + 1, n = se.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Mt(se[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function gn(e) {
  (!se.length || !se.includes(e, Rt && e.allowRecurse ? xe + 1 : xe)) && (e.id == null ? se.push(e) : se.splice(Oi(e.id), 0, e), Ps());
}
function Ps() {
  !Rt && !kn && (kn = !0, mo = Is.then(Ms));
}
function wi(e) {
  const t = se.indexOf(e);
  t > xe && se.splice(t, 1);
}
function As(e) {
  T(e) ? Et.push(...e) : (!Ve || !Ve.includes(e, e.allowRecurse ? Ue + 1 : Ue)) && Et.push(e), Ps();
}
function So(e, t = Rt ? xe + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < se.length; t++) {
    const n = se[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && go(e, n))
        continue;
      se.splice(t, 1), t--, n();
    }
  }
}
function Rs(e) {
  if (Et.length) {
    const t = [...new Set(Et)];
    if (Et.length = 0, Ve) {
      Ve.push(...t);
      return;
    }
    for (Ve = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ve.sort((n, o) => Mt(n) - Mt(o)), Ue = 0; Ue < Ve.length; Ue++)
      process.env.NODE_ENV !== "production" && go(e, Ve[Ue]) || Ve[Ue]();
    Ve = null, Ue = 0;
  }
}
const Mt = (e) => e.id == null ? 1 / 0 : e.id, Di = (e, t) => {
  const n = Mt(e) - Mt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Ms(e) {
  kn = !1, Rt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), se.sort(Di);
  const t = process.env.NODE_ENV !== "production" ? (n) => go(e, n) : ne;
  try {
    for (xe = 0; xe < se.length; xe++) {
      const n = se[xe];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Re(n, null, 14);
      }
    }
  } finally {
    xe = 0, se.length = 0, Rs(e), Rt = !1, mo = null, (se.length || Et.length) && Ms(e);
  }
}
function go(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > yi) {
      const o = t.ownerInstance, s = o && gr(o.type);
      return y(`Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let st = !1;
const dt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (us().__VUE_HMR_RUNTIME__ = {
  createRecord: Cn(Fs),
  rerender: Cn(Ci),
  reload: Cn(Ti)
});
const it = /* @__PURE__ */ new Map();
function Vi(e) {
  const t = e.type.__hmrId;
  let n = it.get(t);
  n || (Fs(t, e.type), n = it.get(t)), n.instances.add(e);
}
function xi(e) {
  it.get(e.type.__hmrId).instances.delete(e);
}
function Fs(e, t) {
  return it.has(e) ? !1 : (it.set(e, {
    initialDef: Ct(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ct(e) {
  return Er(e) ? e.__vccOpts : e;
}
function Ci(e, t) {
  const n = it.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Ct(o.type).render = t), o.renderCache = [], st = !0, o.update(), st = !1;
  }));
}
function Ti(e, t) {
  const n = it.get(e);
  if (!n)
    return;
  t = Ct(t), jo(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = Ct(s.type);
    dt.has(r) || (r !== n.initialDef && jo(r, t), dt.add(r)), s.appContext.optionsCache.delete(s.type), s.ceReload ? (dt.add(r), s.ceReload(t.styles), dt.delete(r)) : s.parent ? (gn(s.parent.update), s.parent.type.__asyncLoader && s.parent.ceReload && s.parent.ceReload(t.styles)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  As(() => {
    for (const s of o)
      dt.delete(Ct(s.type));
  });
}
function jo(e, t) {
  X(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Cn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Qe, xt = [], Bn = !1;
function Lt(e, ...t) {
  Qe ? Qe.emit(e, ...t) : Bn || xt.push({ event: e, args: t });
}
function Ss(e, t) {
  var n, o;
  Qe = e, Qe ? (Qe.enabled = !0, xt.forEach(({ event: s, args: r }) => Qe.emit(s, ...r)), xt = []) : typeof window < "u" && window.HTMLElement && !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Ss(r, t);
  }), setTimeout(() => {
    Qe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Bn = !0, xt = []);
  }, 3e3)) : (Bn = !0, xt = []);
}
function Ii(e, t) {
  Lt("app:init", e, t, {
    Fragment: he,
    Text: vn,
    Comment: ie,
    Static: Qt
  });
}
function $i(e) {
  Lt("app:unmount", e);
}
const Pi = /* @__PURE__ */ Eo("component:added"), js = /* @__PURE__ */ Eo("component:updated"), Ai = /* @__PURE__ */ Eo("component:removed");
function Eo(e) {
  return (t) => {
    Lt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Ri = /* @__PURE__ */ Ls("perf:start"), Mi = /* @__PURE__ */ Ls("perf:end");
function Ls(e) {
  return (t, n, o) => {
    Lt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Fi(e, t, n) {
  Lt("component:emit", e.appContext.app, e, t, n);
}
function Si(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || H;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: h, propsOptions: [d] } = e;
    if (h)
      if (!(t in h))
        (!d || !(Xe(t) in d)) && y(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Xe(t)}" prop.`);
      else {
        const g = h[t];
        $(g) && (g(...n) || y(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && t.slice(7);
  if (i && i in o) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: g } = o[h] || H;
    g && (s = n.map((V) => V.trim())), d && (s = n.map(Mn));
  }
  if (process.env.NODE_ENV !== "production" && Fi(e, t, s), process.env.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && o[Xe(h)] && y(`Event "${h}" is emitted in component ${On(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ve(t)}" instead of "${t}".`);
  }
  let l, f = o[l = Xe(t)] || o[l = Xe(We(t))];
  !f && r && (f = o[l = Xe(ve(t))]), f && me(f, e, 6, s);
  const a = o[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, me(a, e, 6, s);
  }
}
function Hs(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, l = !1;
  if (!$(e)) {
    const f = (a) => {
      const h = Hs(a, t, !0);
      h && (l = !0, X(i, h));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !r && !l ? (q(e) && o.set(e, null), null) : (T(r) ? r.forEach((f) => i[f] = null) : X(i, r), q(e) && o.set(e, i), i);
}
function En(e, t) {
  return !e || !jt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), R(e, t[0].toLowerCase() + t.slice(1)) || R(e, ve(t)) || R(e, t));
}
let re = null, Us = null;
function on(e) {
  const t = re;
  return re = e, Us = e && e.type.__scopeId || null, t;
}
function ji(e, t = re, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && Xo(-1);
    const r = on(t), i = e(...s);
    return on(r), o._d && Xo(1), process.env.NODE_ENV !== "production" && js(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Kn = !1;
function sn() {
  Kn = !0;
}
function Tn(e) {
  const { type: t, vnode: n, proxy: o, withProxy: s, props: r, propsOptions: [i], slots: l, attrs: f, emit: a, render: h, renderCache: d, data: g, setupState: V, ctx: A, inheritAttrs: C } = e;
  let K, U;
  const L = on(e);
  process.env.NODE_ENV !== "production" && (Kn = !1);
  try {
    if (n.shapeFlag & 4) {
      const z = s || o;
      K = Ee(h.call(z, z, d, r, V, g, A)), U = f;
    } else {
      const z = t;
      process.env.NODE_ENV !== "production" && f === r && sn(), K = Ee(z.length > 1 ? z(r, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return sn(), f;
        },
        slots: l,
        emit: a
      } : { attrs: f, slots: l, emit: a }) : z(r, null)), U = t.props ? f : Hi(f);
    }
  } catch (z) {
    It.length = 0, mn(z, e, 1), K = Ce(ie);
  }
  let J = K, ue;
  if (process.env.NODE_ENV !== "production" && K.patchFlag > 0 && K.patchFlag & 2048 && ([J, ue] = Li(K)), U && C !== !1) {
    const z = Object.keys(U), { shapeFlag: Se } = J;
    if (z.length) {
      if (Se & 7)
        i && z.some(en) && (U = Ui(U, i)), J = Te(J, U);
      else if (process.env.NODE_ENV !== "production" && !Kn && J.type !== ie) {
        const be = Object.keys(f), M = [], W = [];
        for (let Y = 0, oe = be.length; Y < oe; Y++) {
          const te = be[Y];
          jt(te) ? en(te) || M.push(te[2].toLowerCase() + te.slice(3)) : W.push(te);
        }
        W.length && y(`Extraneous non-props attributes (${W.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), M.length && y(`Extraneous non-emits event listeners (${M.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Lo(J) && y("Runtime directive used on component with non-element root node. The directives will not function as intended."), J = Te(J), J.dirs = J.dirs ? J.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Lo(J) && y("Component inside <Transition> renders non-element root node that cannot be animated."), J.transition = n.transition), process.env.NODE_ENV !== "production" && ue ? ue(J) : K = J, on(L), K;
}
const Li = (e) => {
  const t = e.children, n = e.dynamicChildren, o = ks(t);
  if (!o)
    return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (l) => {
    t[s] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Ee(o), i];
};
function ks(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (bn(o)) {
      if (o.type !== ie || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Hi = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || jt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ui = (e, t) => {
  const n = {};
  for (const o in e)
    (!en(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Lo = (e) => e.shapeFlag & 7 || e.type === ie;
function ki(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: l, patchFlag: f } = t, a = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || l) && st || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? Ho(o, i, a) : !!i;
    if (f & 8) {
      const h = t.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        const g = h[d];
        if (i[g] !== o[g] && !En(a, g))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Ho(o, i, a) : !0 : !!i;
  return !1;
}
function Ho(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !En(n, r))
      return !0;
  }
  return !1;
}
function Bi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ki = (e) => e.__isSuspense;
function Wi(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : As(e);
}
function zi(e, t) {
  if (!Q)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = Q.provides;
    const o = Q.parent && Q.parent.provides;
    o === n && (n = Q.provides = Object.create(o)), n[e] = t;
  }
}
function In(e, t, n = !1) {
  const o = Q || re;
  if (o) {
    const s = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const Uo = {};
function $n(e, t, n) {
  return process.env.NODE_ENV !== "production" && !$(t) && y("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Bs(e, t, n);
}
function Bs(e, t, { immediate: n, deep: o, flush: s, onTrack: r, onTrigger: i } = H) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && y('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && y('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (L) => {
    y("Invalid watch source: ", L, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, f = Q;
  let a, h = !1, d = !1;
  if (G(e) ? (a = () => e.value, h = nn(e)) : nt(e) ? (a = () => e, o = !0) : T(e) ? (d = !0, h = e.some((L) => nt(L) || nn(L)), a = () => e.map((L) => {
    if (G(L))
      return L.value;
    if (nt(L))
      return _t(L);
    if ($(L))
      return Re(L, f, 2);
    process.env.NODE_ENV !== "production" && l(L);
  })) : $(e) ? t ? a = () => Re(e, f, 2) : a = () => {
    if (!(f && f.isUnmounted))
      return g && g(), me(e, f, 3, [V]);
  } : (a = ne, process.env.NODE_ENV !== "production" && l(e)), t && o) {
    const L = a;
    a = () => _t(L());
  }
  let g, V = (L) => {
    g = U.onStop = () => {
      Re(L, f, 4);
    };
  };
  if (St)
    return V = ne, t ? n && me(t, f, 3, [
      a(),
      d ? [] : void 0,
      V
    ]) : a(), ne;
  let A = d ? [] : Uo;
  const C = () => {
    if (!!U.active)
      if (t) {
        const L = U.run();
        (o || h || (d ? L.some((J, ue) => $t(J, A[ue])) : $t(L, A))) && (g && g(), me(t, f, 3, [
          L,
          A === Uo ? void 0 : A,
          V
        ]), A = L);
      } else
        U.run();
  };
  C.allowRecurse = !!t;
  let K;
  s === "sync" ? K = C : s === "post" ? K = () => de(C, f && f.suspense) : (C.pre = !0, f && (C.id = f.uid), K = () => gn(C));
  const U = new uo(a, K);
  return process.env.NODE_ENV !== "production" && (U.onTrack = r, U.onTrigger = i), t ? n ? C() : A = U.run() : s === "post" ? de(U.run.bind(U), f && f.suspense) : U.run(), () => {
    U.stop(), f && f.scope && ro(f.scope.effects, U);
  };
}
function qi(e, t, n) {
  const o = this.proxy, s = ee(e) ? e.includes(".") ? Ks(o, e) : () => o[e] : e.bind(o, o);
  let r;
  $(t) ? r = t : (r = t.handler, n = t);
  const i = Q;
  vt(this);
  const l = Bs(s, r.bind(o), n);
  return i ? vt(i) : rt(), l;
}
function Ks(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function _t(e, t) {
  if (!q(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), G(e))
    _t(e.value, t);
  else if (T(e))
    for (let n = 0; n < e.length; n++)
      _t(e[n], t);
  else if (Tr(e) || gt(e))
    e.forEach((n) => {
      _t(n, t);
    });
  else if ($r(e))
    for (const n in e)
      _t(e[n], t);
  return e;
}
function Ji() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ys(() => {
    e.isMounted = !0;
  }), Xs(() => {
    e.isUnmounting = !0;
  }), e;
}
const _e = [Function, Array], Yi = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: _e,
    onEnter: _e,
    onAfterEnter: _e,
    onEnterCancelled: _e,
    onBeforeLeave: _e,
    onLeave: _e,
    onAfterLeave: _e,
    onLeaveCancelled: _e,
    onBeforeAppear: _e,
    onAppear: _e,
    onAfterAppear: _e,
    onAppearCancelled: _e
  },
  setup(e, { slots: t }) {
    const n = Wc(), o = Ji();
    let s;
    return () => {
      const r = t.default && zs(t.default(), !0);
      if (!r || !r.length)
        return;
      let i = r[0];
      if (r.length > 1) {
        let C = !1;
        for (const K of r)
          if (K.type !== ie) {
            if (process.env.NODE_ENV !== "production" && C) {
              y("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = K, C = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const l = P(e), { mode: f } = l;
      if (process.env.NODE_ENV !== "production" && f && f !== "in-out" && f !== "out-in" && f !== "default" && y(`invalid <transition> mode: ${f}`), o.isLeaving)
        return Pn(i);
      const a = ko(i);
      if (!a)
        return Pn(i);
      const h = Wn(a, l, o, n);
      zn(a, h);
      const d = n.subTree, g = d && ko(d);
      let V = !1;
      const { getTransitionKey: A } = a.type;
      if (A) {
        const C = A();
        s === void 0 ? s = C : C !== s && (s = C, V = !0);
      }
      if (g && g.type !== ie && (!Ge(a, g) || V)) {
        const C = Wn(g, l, o, n);
        if (zn(g, C), f === "out-in")
          return o.isLeaving = !0, C.afterLeave = () => {
            o.isLeaving = !1, n.update();
          }, Pn(i);
        f === "in-out" && a.type !== ie && (C.delayLeave = (K, U, L) => {
          const J = Ws(o, g);
          J[String(g.key)] = g, K._leaveCb = () => {
            U(), K._leaveCb = void 0, delete h.delayedLeave;
          }, h.delayedLeave = L;
        });
      }
      return i;
    };
  }
}, Xi = Yi;
function Ws(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function Wn(e, t, n, o) {
  const { appear: s, mode: r, persisted: i = !1, onBeforeEnter: l, onEnter: f, onAfterEnter: a, onEnterCancelled: h, onBeforeLeave: d, onLeave: g, onAfterLeave: V, onLeaveCancelled: A, onBeforeAppear: C, onAppear: K, onAfterAppear: U, onAppearCancelled: L } = t, J = String(e.key), ue = Ws(n, e), z = (M, W) => {
    M && me(M, o, 9, W);
  }, Se = (M, W) => {
    const Y = W[1];
    z(M, W), T(M) ? M.every((oe) => oe.length <= 1) && Y() : M.length <= 1 && Y();
  }, be = {
    mode: r,
    persisted: i,
    beforeEnter(M) {
      let W = l;
      if (!n.isMounted)
        if (s)
          W = C || l;
        else
          return;
      M._leaveCb && M._leaveCb(!0);
      const Y = ue[J];
      Y && Ge(e, Y) && Y.el._leaveCb && Y.el._leaveCb(), z(W, [M]);
    },
    enter(M) {
      let W = f, Y = a, oe = h;
      if (!n.isMounted)
        if (s)
          W = K || f, Y = U || a, oe = L || h;
        else
          return;
      let te = !1;
      const Ie = M._enterCb = (Ut) => {
        te || (te = !0, Ut ? z(oe, [M]) : z(Y, [M]), be.delayedLeave && be.delayedLeave(), M._enterCb = void 0);
      };
      W ? Se(W, [M, Ie]) : Ie();
    },
    leave(M, W) {
      const Y = String(e.key);
      if (M._enterCb && M._enterCb(!0), n.isUnmounting)
        return W();
      z(d, [M]);
      let oe = !1;
      const te = M._leaveCb = (Ie) => {
        oe || (oe = !0, W(), Ie ? z(A, [M]) : z(V, [M]), M._leaveCb = void 0, ue[Y] === e && delete ue[Y]);
      };
      ue[Y] = e, g ? Se(g, [M, te]) : te();
    },
    clone(M) {
      return Wn(M, t, n, o);
    }
  };
  return be;
}
function Pn(e) {
  if (Ht(e))
    return e = Te(e), e.children = null, e;
}
function ko(e) {
  return Ht(e) ? e.children ? e.children[0] : void 0 : e;
}
function zn(e, t) {
  e.shapeFlag & 6 && e.component ? zn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function zs(e, t = !1, n) {
  let o = [], s = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === he ? (i.patchFlag & 128 && s++, o = o.concat(zs(i.children, t, l))) : (t || i.type !== ie) && o.push(l != null ? Te(i, { key: l }) : i);
  }
  if (s > 1)
    for (let r = 0; r < o.length; r++)
      o[r].patchFlag = -2;
  return o;
}
function qs(e) {
  return $(e) ? { setup: e, name: e.name } : e;
}
const Tt = (e) => !!e.type.__asyncLoader, Ht = (e) => e.type.__isKeepAlive;
function Zi(e, t) {
  Js(e, "a", t);
}
function Qi(e, t) {
  Js(e, "da", t);
}
function Js(e, t, n = Q) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Nn(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Ht(s.parent.vnode) && Gi(o, t, n, s), s = s.parent;
  }
}
function Gi(e, t, n, o) {
  const s = Nn(t, e, o, !0);
  Zs(() => {
    ro(o[t], s);
  }, n);
}
function Nn(e, t, n = Q, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      ct(), vt(n);
      const l = me(t, n, e, i);
      return rt(), lt(), l;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Xe(_o[e].replace(/ hook$/, ""));
    y(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Fe = (e) => (t, n = Q) => (!St || e === "sp") && Nn(e, (...o) => t(...o), n), ec = Fe("bm"), Ys = Fe("m"), tc = Fe("bu"), nc = Fe("u"), Xs = Fe("bum"), Zs = Fe("um"), oc = Fe("sp"), sc = Fe("rtg"), rc = Fe("rtc");
function ic(e, t = Q) {
  Nn("ec", e, t);
}
function Qs(e) {
  Pr(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function Je(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    r && (l.oldValue = r[i].value);
    let f = l.dir[o];
    f && (ct(), me(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), lt());
  }
}
const cc = Symbol();
function lc(e, t, n = {}, o, s) {
  if (re.isCE || re.parent && Tt(re.parent) && re.parent.isCE)
    return Ce("slot", t === "default" ? null : { name: t }, o && o());
  let r = e[t];
  process.env.NODE_ENV !== "production" && r && r.length > 1 && (y("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), r = () => []), r && r._c && (r._d = !1), fr();
  const i = r && Gs(r(n)), l = jc(he, {
    key: n.key || i && i.key || `_${t}`
  }, i || (o ? o() : []), i && e._ === 1 ? 64 : -2);
  return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), r && r._c && (r._d = !0), l;
}
function Gs(e) {
  return e.some((t) => bn(t) ? !(t.type === ie || t.type === he && !Gs(t.children)) : !0) ? e : null;
}
const qn = (e) => e ? _r(e) ? Oo(e) || e.proxy : qn(e.parent) : null, Nt = /* @__PURE__ */ X(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? ht(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? ht(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? ht(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? ht(e.refs) : e.refs,
  $parent: (e) => qn(e.parent),
  $root: (e) => qn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => vo(e),
  $forceUpdate: (e) => e.f || (e.f = () => gn(e.update)),
  $nextTick: (e) => e.n || (e.n = $s.bind(e.proxy)),
  $watch: (e) => qi.bind(e)
}), No = (e) => e === "_" || e === "$", er = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: l, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (process.env.NODE_ENV !== "production" && o !== H && o.__isScriptSetup && R(o, t))
      return o[t];
    let a;
    if (t[0] !== "$") {
      const V = i[t];
      if (V !== void 0)
        switch (V) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (o !== H && R(o, t))
          return i[t] = 1, o[t];
        if (s !== H && R(s, t))
          return i[t] = 2, s[t];
        if ((a = e.propsOptions[0]) && R(a, t))
          return i[t] = 3, r[t];
        if (n !== H && R(n, t))
          return i[t] = 4, n[t];
        Jn && (i[t] = 0);
      }
    }
    const h = Nt[t];
    let d, g;
    if (h)
      return t === "$attrs" && (pe(e, "get", t), process.env.NODE_ENV !== "production" && sn()), h(e);
    if ((d = l.__cssModules) && (d = d[t]))
      return d;
    if (n !== H && R(n, t))
      return i[t] = 4, n[t];
    if (g = f.config.globalProperties, R(g, t))
      return g[t];
    process.env.NODE_ENV !== "production" && re && (!ee(t) || t.indexOf("__v") !== 0) && (s !== H && No(t[0]) && R(s, t) ? y(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === re && y(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return s !== H && R(s, t) ? (s[t] = n, !0) : o !== H && R(o, t) ? (o[t] = n, !0) : R(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`, e), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`, e), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: r } }, i) {
    let l;
    return !!n[i] || e !== H && R(e, i) || t !== H && R(t, i) || (l = r[0]) && R(l, i) || R(o, i) || R(Nt, i) || R(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : R(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (er.ownKeys = (e) => (y("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function fc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Nt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Nt[n](e),
      set: ne
    });
  }), t;
}
function uc(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ne
    });
  });
}
function ac(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(P(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (No(o[0])) {
        y(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: ne
      });
    }
  });
}
function dc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Jn = !0;
function pc(e) {
  const t = vo(e), n = e.proxy, o = e.ctx;
  Jn = !1, t.beforeCreate && Bo(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: r,
    methods: i,
    watch: l,
    provide: f,
    inject: a,
    created: h,
    beforeMount: d,
    mounted: g,
    beforeUpdate: V,
    updated: A,
    activated: C,
    deactivated: K,
    beforeDestroy: U,
    beforeUnmount: L,
    destroyed: J,
    unmounted: ue,
    render: z,
    renderTracked: Se,
    renderTriggered: be,
    errorCaptured: M,
    serverPrefetch: W,
    expose: Y,
    inheritAttrs: oe,
    components: te,
    directives: Ie,
    filters: Ut
  } = t, je = process.env.NODE_ENV !== "production" ? dc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [S] = e.propsOptions;
    if (S)
      for (const j in S)
        je("Props", j);
  }
  if (a && hc(a, o, je, e.appContext.config.unwrapInjectedRef), i)
    for (const S in i) {
      const j = i[S];
      $(j) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, S, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[S] = j.bind(n), process.env.NODE_ENV !== "production" && je("Methods", S)) : process.env.NODE_ENV !== "production" && y(`Method "${S}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`);
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !$(s) && y("The data option must be a function. Plain object usage is no longer supported.");
    const S = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && co(S) && y("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !q(S))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = po(S), process.env.NODE_ENV !== "production")
      for (const j in S)
        je("Data", j), No(j[0]) || Object.defineProperty(o, j, {
          configurable: !0,
          enumerable: !0,
          get: () => S[j],
          set: ne
        });
  }
  if (Jn = !0, r)
    for (const S in r) {
      const j = r[S], ye = $(j) ? j.bind(n, n) : $(j.get) ? j.get.bind(n, n) : ne;
      process.env.NODE_ENV !== "production" && ye === ne && y(`Computed property "${S}" has no getter.`);
      const wn = !$(j) && $(j.set) ? j.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(`Write operation failed: computed property "${S}" is readonly.`);
      } : ne, yt = Gc({
        get: ye,
        set: wn
      });
      Object.defineProperty(o, S, {
        enumerable: !0,
        configurable: !0,
        get: () => yt.value,
        set: (ft) => yt.value = ft
      }), process.env.NODE_ENV !== "production" && je("Computed", S);
    }
  if (l)
    for (const S in l)
      tr(l[S], o, n, S);
  if (f) {
    const S = $(f) ? f.call(n) : f;
    Reflect.ownKeys(S).forEach((j) => {
      zi(j, S[j]);
    });
  }
  h && Bo(h, e, "c");
  function ae(S, j) {
    T(j) ? j.forEach((ye) => S(ye.bind(n))) : j && S(j.bind(n));
  }
  if (ae(ec, d), ae(Ys, g), ae(tc, V), ae(nc, A), ae(Zi, C), ae(Qi, K), ae(ic, M), ae(rc, Se), ae(sc, be), ae(Xs, L), ae(Zs, ue), ae(oc, W), T(Y))
    if (Y.length) {
      const S = e.exposed || (e.exposed = {});
      Y.forEach((j) => {
        Object.defineProperty(S, j, {
          get: () => n[j],
          set: (ye) => n[j] = ye
        });
      });
    } else
      e.exposed || (e.exposed = {});
  z && e.render === ne && (e.render = z), oe != null && (e.inheritAttrs = oe), te && (e.components = te), Ie && (e.directives = Ie);
}
function hc(e, t, n = ne, o = !1) {
  T(e) && (e = Yn(e));
  for (const s in e) {
    const r = e[s];
    let i;
    q(r) ? "default" in r ? i = In(r.from || s, r.default, !0) : i = In(r.from || s) : i = In(r), G(i) ? o ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : (process.env.NODE_ENV !== "production" && y(`injected property "${s}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[s] = i) : t[s] = i, process.env.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Bo(e, t, n) {
  me(T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function tr(e, t, n, o) {
  const s = o.includes(".") ? Ks(n, o) : () => n[o];
  if (ee(e)) {
    const r = t[e];
    $(r) ? $n(s, r) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, r);
  } else if ($(e))
    $n(s, e.bind(n));
  else if (q(e))
    if (T(e))
      e.forEach((r) => tr(r, t, n, o));
    else {
      const r = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(r) ? $n(s, r, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function vo(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: s, optionsCache: r, config: { optionMergeStrategies: i } } = e.appContext, l = r.get(t);
  let f;
  return l ? f = l : !s.length && !n && !o ? f = t : (f = {}, s.length && s.forEach((a) => rn(f, a, i, !0)), rn(f, t, i)), q(t) && r.set(t, f), f;
}
function rn(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && rn(e, r, n, !0), s && s.forEach((i) => rn(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && y('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = _c[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const _c = {
  data: Ko,
  props: Ze,
  emits: Ze,
  methods: Ze,
  computed: Ze,
  beforeCreate: le,
  created: le,
  beforeMount: le,
  mounted: le,
  beforeUpdate: le,
  updated: le,
  beforeDestroy: le,
  beforeUnmount: le,
  destroyed: le,
  unmounted: le,
  activated: le,
  deactivated: le,
  errorCaptured: le,
  serverPrefetch: le,
  components: Ze,
  directives: Ze,
  watch: gc,
  provide: Ko,
  inject: mc
};
function Ko(e, t) {
  return t ? e ? function() {
    return X($(e) ? e.call(this, this) : e, $(t) ? t.call(this, this) : t);
  } : t : e;
}
function mc(e, t) {
  return Ze(Yn(e), Yn(t));
}
function Yn(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ze(e, t) {
  return e ? X(X(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function gc(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = X(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = le(e[o], t[o]);
  return n;
}
function Ec(e, t, n, o = !1) {
  const s = {}, r = {};
  tn(r, yn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), nr(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && sr(t || {}, s, e), n ? e.props = o ? s : fi(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function Nc(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function vc(e, t, n, o) {
  const { props: s, attrs: r, vnode: { patchFlag: i } } = e, l = P(s), [f] = e.propsOptions;
  let a = !1;
  if (!(process.env.NODE_ENV !== "production" && Nc(e)) && (o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        let g = h[d];
        if (En(e.emitsOptions, g))
          continue;
        const V = t[g];
        if (f)
          if (R(r, g))
            V !== r[g] && (r[g] = V, a = !0);
          else {
            const A = We(g);
            s[A] = Xn(f, l, A, V, e, !1);
          }
        else
          V !== r[g] && (r[g] = V, a = !0);
      }
    }
  } else {
    nr(e, t, s, r) && (a = !0);
    let h;
    for (const d in l)
      (!t || !R(t, d) && ((h = ve(d)) === d || !R(t, h))) && (f ? n && (n[d] !== void 0 || n[h] !== void 0) && (s[d] = Xn(f, l, d, void 0, e, !0)) : delete s[d]);
    if (r !== l)
      for (const d in r)
        (!t || !R(t, d) && !0) && (delete r[d], a = !0);
  }
  a && Me(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && sr(t || {}, s, e);
}
function nr(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let f in t) {
      if (Jt(f))
        continue;
      const a = t[f];
      let h;
      s && R(s, h = We(f)) ? !r || !r.includes(h) ? n[h] = a : (l || (l = {}))[h] = a : En(e.emitsOptions, f) || (!(f in o) || a !== o[f]) && (o[f] = a, i = !0);
    }
  if (r) {
    const f = P(n), a = l || H;
    for (let h = 0; h < r.length; h++) {
      const d = r[h];
      n[d] = Xn(s, f, d, a[d], e, !R(a, d));
    }
  }
  return i;
}
function Xn(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const l = R(i, "default");
    if (l && o === void 0) {
      const f = i.default;
      if (i.type !== Function && $(f)) {
        const { propsDefaults: a } = s;
        n in a ? o = a[n] : (vt(s), o = a[n] = f.call(null, t), rt());
      } else
        o = f;
    }
    i[0] && (r && !l ? o = !1 : i[1] && (o === "" || o === ve(n)) && (o = !0));
  }
  return o;
}
function or(e, t, n = !1) {
  const o = t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, l = [];
  let f = !1;
  if (!$(e)) {
    const h = (d) => {
      f = !0;
      const [g, V] = or(d, t, !0);
      X(i, g), V && l.push(...V);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!r && !f)
    return q(e) && o.set(e, mt), mt;
  if (T(r))
    for (let h = 0; h < r.length; h++) {
      process.env.NODE_ENV !== "production" && !ee(r[h]) && y("props must be strings when using array syntax.", r[h]);
      const d = We(r[h]);
      Wo(d) && (i[d] = H);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !q(r) && y("invalid props options", r);
    for (const h in r) {
      const d = We(h);
      if (Wo(d)) {
        const g = r[h], V = i[d] = T(g) || $(g) ? { type: g } : g;
        if (V) {
          const A = qo(Boolean, V.type), C = qo(String, V.type);
          V[0] = A > -1, V[1] = C < 0 || A < C, (A > -1 || R(V, "default")) && l.push(d);
        }
      }
    }
  }
  const a = [i, l];
  return q(e) && o.set(e, a), a;
}
function Wo(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Zn(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function zo(e, t) {
  return Zn(e) === Zn(t);
}
function qo(e, t) {
  return T(t) ? t.findIndex((n) => zo(n, e)) : $(t) && zo(t, e) ? 0 : -1;
}
function sr(e, t, n) {
  const o = P(t), s = n.propsOptions[0];
  for (const r in s) {
    let i = s[r];
    i != null && bc(r, o[r], i, !R(e, r) && !R(e, ve(r)));
  }
}
function bc(e, t, n, o) {
  const { type: s, required: r, validator: i } = n;
  if (r && o) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (s != null && s !== !0) {
      let l = !1;
      const f = T(s) ? s : [s], a = [];
      for (let h = 0; h < f.length && !l; h++) {
        const { valid: d, expectedType: g } = Oc(t, f[h]);
        a.push(g || ""), l = d;
      }
      if (!l) {
        y(wc(e, t, a));
        return;
      }
    }
    i && !i(t) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const yc = /* @__PURE__ */ bt("String,Number,Boolean,Function,Symbol,BigInt");
function Oc(e, t) {
  let n;
  const o = Zn(t);
  if (yc(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = q(e) : o === "Array" ? n = T(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function wc(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(an).join(" | ")}`;
  const s = n[0], r = lo(t), i = Jo(t, s), l = Jo(t, r);
  return n.length === 1 && Yo(s) && !Dc(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, Yo(r) && (o += `with value ${l}.`), o;
}
function Jo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Yo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Dc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const rr = (e) => e[0] === "_" || e === "$stable", bo = (e) => T(e) ? e.map(Ee) : [Ee(e)], Vc = (e, t, n) => {
  if (t._n)
    return t;
  const o = ji((...s) => (process.env.NODE_ENV !== "production" && Q && y(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), bo(t(...s))), n);
  return o._c = !1, o;
}, ir = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (rr(s))
      continue;
    const r = e[s];
    if ($(r))
      t[s] = Vc(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && y(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);
      const i = bo(r);
      t[s] = () => i;
    }
  }
}, cr = (e, t) => {
  process.env.NODE_ENV !== "production" && !Ht(e.vnode) && y("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = bo(t);
  e.slots.default = () => n;
}, xc = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = P(t), tn(t, "_", n)) : ir(t, e.slots = {});
  } else
    e.slots = {}, t && cr(e, t);
  tn(e.slots, yn, 1);
}, Cc = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = H;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && st ? X(s, t) : n && l === 1 ? r = !1 : (X(s, t), !n && l === 1 && delete s._) : (r = !t.$stable, ir(t, s)), i = t;
  } else
    t && (cr(e, t), i = { default: 1 });
  if (r)
    for (const l in s)
      !rr(l) && !(l in i) && delete s[l];
};
function lr() {
  return {
    app: null,
    config: {
      isNativeTag: fs,
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
let Tc = 0;
function Ic(e, t) {
  return function(o, s = null) {
    $(o) || (o = Object.assign({}, o)), s != null && !q(s) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), s = null);
    const r = lr(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const f = r.app = {
      _uid: Tc++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: Go,
      get config() {
        return r.config;
      },
      set config(a) {
        process.env.NODE_ENV !== "production" && y("app.config cannot be replaced. Modify individual options instead.");
      },
      use(a, ...h) {
        return i.has(a) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : a && $(a.install) ? (i.add(a), a.install(f, ...h)) : $(a) ? (i.add(a), a(f, ...h)) : process.env.NODE_ENV !== "production" && y('A plugin must either be a function or an object with an "install" function.'), f;
      },
      mixin(a) {
        return r.mixins.includes(a) ? process.env.NODE_ENV !== "production" && y("Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")) : r.mixins.push(a), f;
      },
      component(a, h) {
        return process.env.NODE_ENV !== "production" && Gn(a, r.config), h ? (process.env.NODE_ENV !== "production" && r.components[a] && y(`Component "${a}" has already been registered in target app.`), r.components[a] = h, f) : r.components[a];
      },
      directive(a, h) {
        return process.env.NODE_ENV !== "production" && Qs(a), h ? (process.env.NODE_ENV !== "production" && r.directives[a] && y(`Directive "${a}" has already been registered in target app.`), r.directives[a] = h, f) : r.directives[a];
      },
      mount(a, h, d) {
        if (l)
          process.env.NODE_ENV !== "production" && y("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && a.__vue_app__ && y("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const g = Ce(o, s);
          return g.appContext = r, process.env.NODE_ENV !== "production" && (r.reload = () => {
            e(Te(g), a, d);
          }), h && t ? t(g, a) : e(g, a, d), l = !0, f._container = a, a.__vue_app__ = f, process.env.NODE_ENV !== "production" && (f._instance = g.component, Ii(f, Go)), Oo(g.component) || g.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, f._container), process.env.NODE_ENV !== "production" && (f._instance = null, $i(f)), delete f._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(a, h) {
        return process.env.NODE_ENV !== "production" && a in r.provides && y(`App already provides property with key "${String(a)}". It will be overwritten with the new value.`), r.provides[a] = h, f;
      }
    };
    return f;
  };
}
function Qn(e, t, n, o, s = !1) {
  if (T(e)) {
    e.forEach((g, V) => Qn(g, t && (T(t) ? t[V] : t), n, o, s));
    return;
  }
  if (Tt(o) && !s)
    return;
  const r = o.shapeFlag & 4 ? Oo(o.component) || o.component.proxy : o.el, i = s ? null : r, { i: l, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    y("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const a = t && t.r, h = l.refs === H ? l.refs = {} : l.refs, d = l.setupState;
  if (a != null && a !== f && (ee(a) ? (h[a] = null, R(d, a) && (d[a] = null)) : G(a) && (a.value = null)), $(f))
    Re(f, l, 12, [i, h]);
  else {
    const g = ee(f), V = G(f);
    if (g || V) {
      const A = () => {
        if (e.f) {
          const C = g ? h[f] : f.value;
          s ? T(C) && ro(C, r) : T(C) ? C.includes(r) || C.push(r) : g ? (h[f] = [r], R(d, f) && (d[f] = h[f])) : (f.value = [r], e.k && (h[e.k] = f.value));
        } else
          g ? (h[f] = i, R(d, f) && (d[f] = i)) : V ? (f.value = i, e.k && (h[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
      };
      i ? (A.id = -1, de(A, n)) : A();
    } else
      process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let Dt, Be;
function Pe(e, t) {
  e.appContext.config.performance && cn() && Be.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Ri(e, t, cn() ? Be.now() : Date.now());
}
function Ae(e, t) {
  if (e.appContext.config.performance && cn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Be.mark(o), Be.measure(`<${On(e, e.type)}> ${t}`, n, o), Be.clearMarks(n), Be.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Mi(e, t, cn() ? Be.now() : Date.now());
}
function cn() {
  return Dt !== void 0 || (typeof window < "u" && window.performance ? (Dt = !0, Be = window.performance) : Dt = !1), Dt;
}
function $c() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const de = Wi;
function Pc(e) {
  return Ac(e);
}
function Ac(e, t) {
  $c();
  const n = us();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Ss(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: s, patchProp: r, createElement: i, createText: l, createComment: f, setText: a, setElementText: h, parentNode: d, nextSibling: g, setScopeId: V = ne, insertStaticContent: A } = e, C = (c, u, p, m = null, _ = null, v = null, O = !1, N = null, b = process.env.NODE_ENV !== "production" && st ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !Ge(c, u) && (m = kt(c), Le(c, _, v, !0), c = null), u.patchFlag === -2 && (b = !1, u.dynamicChildren = null);
    const { type: E, ref: D, shapeFlag: w } = u;
    switch (E) {
      case vn:
        K(c, u, p, m);
        break;
      case ie:
        U(c, u, p, m);
        break;
      case Qt:
        c == null ? L(u, p, m, O) : process.env.NODE_ENV !== "production" && J(c, u, p, O);
        break;
      case he:
        Ie(c, u, p, m, _, v, O, N, b);
        break;
      default:
        w & 1 ? Se(c, u, p, m, _, v, O, N, b) : w & 6 ? Ut(c, u, p, m, _, v, O, N, b) : w & 64 || w & 128 ? E.process(c, u, p, m, _, v, O, N, b, ut) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", E, `(${typeof E})`);
    }
    D != null && _ && Qn(D, c && c.ref, v, u || c, !u);
  }, K = (c, u, p, m) => {
    if (c == null)
      o(u.el = l(u.children), p, m);
    else {
      const _ = u.el = c.el;
      u.children !== c.children && a(_, u.children);
    }
  }, U = (c, u, p, m) => {
    c == null ? o(u.el = f(u.children || ""), p, m) : u.el = c.el;
  }, L = (c, u, p, m) => {
    [c.el, c.anchor] = A(c.children, u, p, m, c.el, c.anchor);
  }, J = (c, u, p, m) => {
    if (u.children !== c.children) {
      const _ = g(c.anchor);
      z(c), [u.el, u.anchor] = A(u.children, p, _, m);
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, ue = ({ el: c, anchor: u }, p, m) => {
    let _;
    for (; c && c !== u; )
      _ = g(c), o(c, p, m), c = _;
    o(u, p, m);
  }, z = ({ el: c, anchor: u }) => {
    let p;
    for (; c && c !== u; )
      p = g(c), s(c), c = p;
    s(u);
  }, Se = (c, u, p, m, _, v, O, N, b) => {
    O = O || u.type === "svg", c == null ? be(u, p, m, _, v, O, N, b) : Y(c, u, _, v, O, N, b);
  }, be = (c, u, p, m, _, v, O, N) => {
    let b, E;
    const { type: D, props: w, shapeFlag: x, transition: I, dirs: F } = c;
    if (b = c.el = i(c.type, v, w && w.is, w), x & 8 ? h(b, c.children) : x & 16 && W(c.children, b, null, m, _, v && D !== "foreignObject", O, N), F && Je(c, null, m, "created"), w) {
      for (const k in w)
        k !== "value" && !Jt(k) && r(b, k, null, w[k], v, c.children, m, _, $e);
      "value" in w && r(b, "value", null, w.value), (E = w.onVnodeBeforeMount) && we(E, m, c);
    }
    M(b, c, c.scopeId, O, m), process.env.NODE_ENV !== "production" && (Object.defineProperty(b, "__vnode", {
      value: c,
      enumerable: !1
    }), Object.defineProperty(b, "__vueParentComponent", {
      value: m,
      enumerable: !1
    })), F && Je(c, null, m, "beforeMount");
    const B = (!_ || _ && !_.pendingBranch) && I && !I.persisted;
    B && I.beforeEnter(b), o(b, u, p), ((E = w && w.onVnodeMounted) || B || F) && de(() => {
      E && we(E, m, c), B && I.enter(b), F && Je(c, null, m, "mounted");
    }, _);
  }, M = (c, u, p, m, _) => {
    if (p && V(c, p), m)
      for (let v = 0; v < m.length; v++)
        V(c, m[v]);
    if (_) {
      let v = _.subTree;
      if (process.env.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = ks(v.children) || v), u === v) {
        const O = _.vnode;
        M(c, O, O.scopeId, O.slotScopeIds, _.parent);
      }
    }
  }, W = (c, u, p, m, _, v, O, N, b = 0) => {
    for (let E = b; E < c.length; E++) {
      const D = c[E] = N ? ke(c[E]) : Ee(c[E]);
      C(null, D, u, p, m, _, v, O, N);
    }
  }, Y = (c, u, p, m, _, v, O) => {
    const N = u.el = c.el;
    let { patchFlag: b, dynamicChildren: E, dirs: D } = u;
    b |= c.patchFlag & 16;
    const w = c.props || H, x = u.props || H;
    let I;
    p && Ye(p, !1), (I = x.onVnodeBeforeUpdate) && we(I, p, u, c), D && Je(u, c, p, "beforeUpdate"), p && Ye(p, !0), process.env.NODE_ENV !== "production" && st && (b = 0, O = !1, E = null);
    const F = _ && u.type !== "foreignObject";
    if (E ? (oe(c.dynamicChildren, E, N, p, m, F, v), process.env.NODE_ENV !== "production" && p && p.type.__hmrId && Zt(c, u)) : O || ye(c, u, N, null, p, m, F, v, !1), b > 0) {
      if (b & 16)
        te(N, u, w, x, p, m, _);
      else if (b & 2 && w.class !== x.class && r(N, "class", null, x.class, _), b & 4 && r(N, "style", w.style, x.style, _), b & 8) {
        const B = u.dynamicProps;
        for (let k = 0; k < B.length; k++) {
          const Z = B[k], ge = w[Z], at = x[Z];
          (at !== ge || Z === "value") && r(N, Z, ge, at, _, c.children, p, m, $e);
        }
      }
      b & 1 && c.children !== u.children && h(N, u.children);
    } else
      !O && E == null && te(N, u, w, x, p, m, _);
    ((I = x.onVnodeUpdated) || D) && de(() => {
      I && we(I, p, u, c), D && Je(u, c, p, "updated");
    }, m);
  }, oe = (c, u, p, m, _, v, O) => {
    for (let N = 0; N < u.length; N++) {
      const b = c[N], E = u[N], D = b.el && (b.type === he || !Ge(b, E) || b.shapeFlag & 70) ? d(b.el) : p;
      C(b, E, D, null, m, _, v, O, !0);
    }
  }, te = (c, u, p, m, _, v, O) => {
    if (p !== m) {
      if (p !== H)
        for (const N in p)
          !Jt(N) && !(N in m) && r(c, N, p[N], null, O, u.children, _, v, $e);
      for (const N in m) {
        if (Jt(N))
          continue;
        const b = m[N], E = p[N];
        b !== E && N !== "value" && r(c, N, E, b, O, u.children, _, v, $e);
      }
      "value" in m && r(c, "value", p.value, m.value);
    }
  }, Ie = (c, u, p, m, _, v, O, N, b) => {
    const E = u.el = c ? c.el : l(""), D = u.anchor = c ? c.anchor : l("");
    let { patchFlag: w, dynamicChildren: x, slotScopeIds: I } = u;
    process.env.NODE_ENV !== "production" && (st || w & 2048) && (w = 0, b = !1, x = null), I && (N = N ? N.concat(I) : I), c == null ? (o(E, p, m), o(D, p, m), W(u.children, p, D, _, v, O, N, b)) : w > 0 && w & 64 && x && c.dynamicChildren ? (oe(c.dynamicChildren, x, p, _, v, O, N), process.env.NODE_ENV !== "production" && _ && _.type.__hmrId ? Zt(c, u) : (u.key != null || _ && u === _.subTree) && Zt(c, u, !0)) : ye(c, u, p, D, _, v, O, N, b);
  }, Ut = (c, u, p, m, _, v, O, N, b) => {
    u.slotScopeIds = N, c == null ? u.shapeFlag & 512 ? _.ctx.activate(u, p, m, O, b) : je(u, p, m, _, v, O, b) : ae(c, u, b);
  }, je = (c, u, p, m, _, v, O) => {
    const N = c.component = Kc(c, m, _);
    if (process.env.NODE_ENV !== "production" && N.type.__hmrId && Vi(N), process.env.NODE_ENV !== "production" && (Yt(c), Pe(N, "mount")), Ht(c) && (N.ctx.renderer = ut), process.env.NODE_ENV !== "production" && Pe(N, "init"), qc(N), process.env.NODE_ENV !== "production" && Ae(N, "init"), N.asyncDep) {
      if (_ && _.registerDep(N, S), !c.el) {
        const b = N.subTree = Ce(ie);
        U(null, b, u, p);
      }
      return;
    }
    S(N, c, u, p, _, v, O), process.env.NODE_ENV !== "production" && (Xt(), Ae(N, "mount"));
  }, ae = (c, u, p) => {
    const m = u.component = c.component;
    if (ki(c, u, p))
      if (m.asyncDep && !m.asyncResolved) {
        process.env.NODE_ENV !== "production" && Yt(u), j(m, u, p), process.env.NODE_ENV !== "production" && Xt();
        return;
      } else
        m.next = u, wi(m.update), m.update();
    else
      u.el = c.el, m.vnode = u;
  }, S = (c, u, p, m, _, v, O) => {
    const N = () => {
      if (c.isMounted) {
        let { next: D, bu: w, u: x, parent: I, vnode: F } = c, B = D, k;
        process.env.NODE_ENV !== "production" && Yt(D || c.vnode), Ye(c, !1), D ? (D.el = F.el, j(c, D, O)) : D = F, w && wt(w), (k = D.props && D.props.onVnodeBeforeUpdate) && we(k, I, D, F), Ye(c, !0), process.env.NODE_ENV !== "production" && Pe(c, "render");
        const Z = Tn(c);
        process.env.NODE_ENV !== "production" && Ae(c, "render");
        const ge = c.subTree;
        c.subTree = Z, process.env.NODE_ENV !== "production" && Pe(c, "patch"), C(
          ge,
          Z,
          d(ge.el),
          kt(ge),
          c,
          _,
          v
        ), process.env.NODE_ENV !== "production" && Ae(c, "patch"), D.el = Z.el, B === null && Bi(c, Z.el), x && de(x, _), (k = D.props && D.props.onVnodeUpdated) && de(() => we(k, I, D, F), _), process.env.NODE_ENV !== "production" && js(c), process.env.NODE_ENV !== "production" && Xt();
      } else {
        let D;
        const { el: w, props: x } = u, { bm: I, m: F, parent: B } = c, k = Tt(u);
        if (Ye(c, !1), I && wt(I), !k && (D = x && x.onVnodeBeforeMount) && we(D, B, u), Ye(c, !0), w && xn) {
          const Z = () => {
            process.env.NODE_ENV !== "production" && Pe(c, "render"), c.subTree = Tn(c), process.env.NODE_ENV !== "production" && Ae(c, "render"), process.env.NODE_ENV !== "production" && Pe(c, "hydrate"), xn(w, c.subTree, c, _, null), process.env.NODE_ENV !== "production" && Ae(c, "hydrate");
          };
          k ? u.type.__asyncLoader().then(
            () => !c.isUnmounted && Z()
          ) : Z();
        } else {
          process.env.NODE_ENV !== "production" && Pe(c, "render");
          const Z = c.subTree = Tn(c);
          process.env.NODE_ENV !== "production" && Ae(c, "render"), process.env.NODE_ENV !== "production" && Pe(c, "patch"), C(null, Z, p, m, c, _, v), process.env.NODE_ENV !== "production" && Ae(c, "patch"), u.el = Z.el;
        }
        if (F && de(F, _), !k && (D = x && x.onVnodeMounted)) {
          const Z = u;
          de(() => we(D, B, Z), _);
        }
        (u.shapeFlag & 256 || B && Tt(B.vnode) && B.vnode.shapeFlag & 256) && c.a && de(c.a, _), c.isMounted = !0, process.env.NODE_ENV !== "production" && Pi(c), u = p = m = null;
      }
    }, b = c.effect = new uo(
      N,
      () => gn(E),
      c.scope
    ), E = c.update = () => b.run();
    E.id = c.uid, Ye(c, !0), process.env.NODE_ENV !== "production" && (b.onTrack = c.rtc ? (D) => wt(c.rtc, D) : void 0, b.onTrigger = c.rtg ? (D) => wt(c.rtg, D) : void 0, E.ownerInstance = c), E();
  }, j = (c, u, p) => {
    u.component = c;
    const m = c.vnode.props;
    c.vnode = u, c.next = null, vc(c, u.props, m, p), Cc(c, u.children, p), ct(), So(), lt();
  }, ye = (c, u, p, m, _, v, O, N, b = !1) => {
    const E = c && c.children, D = c ? c.shapeFlag : 0, w = u.children, { patchFlag: x, shapeFlag: I } = u;
    if (x > 0) {
      if (x & 128) {
        yt(E, w, p, m, _, v, O, N, b);
        return;
      } else if (x & 256) {
        wn(E, w, p, m, _, v, O, N, b);
        return;
      }
    }
    I & 8 ? (D & 16 && $e(E, _, v), w !== E && h(p, w)) : D & 16 ? I & 16 ? yt(E, w, p, m, _, v, O, N, b) : $e(E, _, v, !0) : (D & 8 && h(p, ""), I & 16 && W(w, p, m, _, v, O, N, b));
  }, wn = (c, u, p, m, _, v, O, N, b) => {
    c = c || mt, u = u || mt;
    const E = c.length, D = u.length, w = Math.min(E, D);
    let x;
    for (x = 0; x < w; x++) {
      const I = u[x] = b ? ke(u[x]) : Ee(u[x]);
      C(c[x], I, p, null, _, v, O, N, b);
    }
    E > D ? $e(c, _, v, !0, !1, w) : W(u, p, m, _, v, O, N, b, w);
  }, yt = (c, u, p, m, _, v, O, N, b) => {
    let E = 0;
    const D = u.length;
    let w = c.length - 1, x = D - 1;
    for (; E <= w && E <= x; ) {
      const I = c[E], F = u[E] = b ? ke(u[E]) : Ee(u[E]);
      if (Ge(I, F))
        C(I, F, p, null, _, v, O, N, b);
      else
        break;
      E++;
    }
    for (; E <= w && E <= x; ) {
      const I = c[w], F = u[x] = b ? ke(u[x]) : Ee(u[x]);
      if (Ge(I, F))
        C(I, F, p, null, _, v, O, N, b);
      else
        break;
      w--, x--;
    }
    if (E > w) {
      if (E <= x) {
        const I = x + 1, F = I < D ? u[I].el : m;
        for (; E <= x; )
          C(null, u[E] = b ? ke(u[E]) : Ee(u[E]), p, F, _, v, O, N, b), E++;
      }
    } else if (E > x)
      for (; E <= w; )
        Le(c[E], _, v, !0), E++;
    else {
      const I = E, F = E, B = /* @__PURE__ */ new Map();
      for (E = F; E <= x; E++) {
        const ce = u[E] = b ? ke(u[E]) : Ee(u[E]);
        ce.key != null && (process.env.NODE_ENV !== "production" && B.has(ce.key) && y("Duplicate keys found during update:", JSON.stringify(ce.key), "Make sure keys are unique."), B.set(ce.key, E));
      }
      let k, Z = 0;
      const ge = x - F + 1;
      let at = !1, Vo = 0;
      const Ot = new Array(ge);
      for (E = 0; E < ge; E++)
        Ot[E] = 0;
      for (E = I; E <= w; E++) {
        const ce = c[E];
        if (Z >= ge) {
          Le(ce, _, v, !0);
          continue;
        }
        let Oe;
        if (ce.key != null)
          Oe = B.get(ce.key);
        else
          for (k = F; k <= x; k++)
            if (Ot[k - F] === 0 && Ge(ce, u[k])) {
              Oe = k;
              break;
            }
        Oe === void 0 ? Le(ce, _, v, !0) : (Ot[Oe - F] = E + 1, Oe >= Vo ? Vo = Oe : at = !0, C(ce, u[Oe], p, null, _, v, O, N, b), Z++);
      }
      const xo = at ? Rc(Ot) : mt;
      for (k = xo.length - 1, E = ge - 1; E >= 0; E--) {
        const ce = F + E, Oe = u[ce], Co = ce + 1 < D ? u[ce + 1].el : m;
        Ot[E] === 0 ? C(null, Oe, p, Co, _, v, O, N, b) : at && (k < 0 || E !== xo[k] ? ft(Oe, p, Co, 2) : k--);
      }
    }
  }, ft = (c, u, p, m, _ = null) => {
    const { el: v, type: O, transition: N, children: b, shapeFlag: E } = c;
    if (E & 6) {
      ft(c.component.subTree, u, p, m);
      return;
    }
    if (E & 128) {
      c.suspense.move(u, p, m);
      return;
    }
    if (E & 64) {
      O.move(c, u, p, ut);
      return;
    }
    if (O === he) {
      o(v, u, p);
      for (let w = 0; w < b.length; w++)
        ft(b[w], u, p, m);
      o(c.anchor, u, p);
      return;
    }
    if (O === Qt) {
      ue(c, u, p);
      return;
    }
    if (m !== 2 && E & 1 && N)
      if (m === 0)
        N.beforeEnter(v), o(v, u, p), de(() => N.enter(v), _);
      else {
        const { leave: w, delayLeave: x, afterLeave: I } = N, F = () => o(v, u, p), B = () => {
          w(v, () => {
            F(), I && I();
          });
        };
        x ? x(v, F, B) : B();
      }
    else
      o(v, u, p);
  }, Le = (c, u, p, m = !1, _ = !1) => {
    const { type: v, props: O, ref: N, children: b, dynamicChildren: E, shapeFlag: D, patchFlag: w, dirs: x } = c;
    if (N != null && Qn(N, null, p, c, !0), D & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const I = D & 1 && x, F = !Tt(c);
    let B;
    if (F && (B = O && O.onVnodeBeforeUnmount) && we(B, u, c), D & 6)
      br(c.component, p, m);
    else {
      if (D & 128) {
        c.suspense.unmount(p, m);
        return;
      }
      I && Je(c, null, u, "beforeUnmount"), D & 64 ? c.type.remove(c, u, p, _, ut, m) : E && (v !== he || w > 0 && w & 64) ? $e(E, u, p, !1, !0) : (v === he && w & 384 || !_ && D & 16) && $e(b, u, p), m && Dn(c);
    }
    (F && (B = O && O.onVnodeUnmounted) || I) && de(() => {
      B && we(B, u, c), I && Je(c, null, u, "unmounted");
    }, p);
  }, Dn = (c) => {
    const { type: u, el: p, anchor: m, transition: _ } = c;
    if (u === he) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && _ && !_.persisted ? c.children.forEach((O) => {
        O.type === ie ? s(O.el) : Dn(O);
      }) : vr(p, m);
      return;
    }
    if (u === Qt) {
      z(c);
      return;
    }
    const v = () => {
      s(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: O, delayLeave: N } = _, b = () => O(p, v);
      N ? N(c.el, v, b) : b();
    } else
      v();
  }, vr = (c, u) => {
    let p;
    for (; c !== u; )
      p = g(c), s(c), c = p;
    s(u);
  }, br = (c, u, p) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && xi(c);
    const { bum: m, scope: _, update: v, subTree: O, um: N } = c;
    m && wt(m), _.stop(), v && (v.active = !1, Le(O, c, u, p)), N && de(N, u), de(() => {
      c.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), process.env.NODE_ENV !== "production" && Ai(c);
  }, $e = (c, u, p, m = !1, _ = !1, v = 0) => {
    for (let O = v; O < c.length; O++)
      Le(c[O], u, p, m, _);
  }, kt = (c) => c.shapeFlag & 6 ? kt(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : g(c.anchor || c.el), Do = (c, u, p) => {
    c == null ? u._vnode && Le(u._vnode, null, null, !0) : C(u._vnode || null, c, u, null, null, null, p), So(), Rs(), u._vnode = c;
  }, ut = {
    p: C,
    um: Le,
    m: ft,
    r: Dn,
    mt: je,
    mc: W,
    pc: ye,
    pbc: oe,
    n: kt,
    o: e
  };
  let Vn, xn;
  return t && ([Vn, xn] = t(ut)), {
    render: Do,
    hydrate: Vn,
    createApp: Ic(Do, Vn)
  };
}
function Ye({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Zt(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (T(o) && T(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let l = s[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[r] = ke(s[r]), l.el = i.el), n || Zt(i, l)), process.env.NODE_ENV !== "production" && l.type === ie && !l.el && (l.el = i.el);
    }
}
function Rc(e) {
  const t = e.slice(), n = [0];
  let o, s, r, i, l;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const a = e[o];
    if (a !== 0) {
      if (s = n[n.length - 1], e[s] < a) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < a ? r = l + 1 : i = l;
      a < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
const Mc = (e) => e.__isTeleport, he = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), vn = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), ie = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), Qt = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), It = [];
let Ne = null;
function fr(e = !1) {
  It.push(Ne = e ? null : []);
}
function Fc() {
  It.pop(), Ne = It[It.length - 1] || null;
}
let Ft = 1;
function Xo(e) {
  Ft += e;
}
function ur(e) {
  return e.dynamicChildren = Ft > 0 ? Ne || mt : null, Fc(), Ft > 0 && Ne && Ne.push(e), e;
}
function Sc(e, t, n, o, s, r) {
  return ur(ln(e, t, n, o, s, r, !0));
}
function jc(e, t, n, o, s) {
  return ur(Ce(e, t, n, o, s, !0));
}
function bn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ge(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && dt.has(t.type) ? !1 : e.type === t.type && e.key === t.key;
}
const Lc = (...e) => dr(...e), yn = "__vInternal", ar = ({ key: e }) => e != null ? e : null, Gt = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ee(e) || G(e) || $(e) ? { i: re, r: e, k: t, f: !!n } : e : null;
function ln(e, t = null, n = null, o = 0, s = null, r = e === he ? 0 : 1, i = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ar(t),
    ref: t && Gt(t),
    scopeId: Us,
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
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null
  };
  return l ? (yo(f, n), r & 128 && e.normalize(f)) : n && (f.shapeFlag |= ee(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && y("VNode created with invalid key (NaN). VNode type:", f.type), Ft > 0 && !i && Ne && (f.patchFlag > 0 || r & 6) && f.patchFlag !== 32 && Ne.push(f), f;
}
const Ce = process.env.NODE_ENV !== "production" ? Lc : dr;
function dr(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === cc) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = ie), bn(e)) {
    const l = Te(e, t, !0);
    return n && yo(l, n), Ft > 0 && !r && Ne && (l.shapeFlag & 6 ? Ne[Ne.indexOf(e)] = l : Ne.push(l)), l.patchFlag |= -2, l;
  }
  if (Er(e) && (e = e.__vccOpts), t) {
    t = Hc(t);
    let { class: l, style: f } = t;
    l && !ee(l) && (t.class = so(l)), q(f) && (Un(f) && !T(f) && (f = X({}, f)), t.style = oo(f));
  }
  const i = ee(e) ? 1 : Ki(e) ? 128 : Mc(e) ? 64 : q(e) ? 4 : $(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Un(e) && (e = P(e), y("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), ln(e, t, n, o, s, i, r, !0);
}
function Hc(e) {
  return e ? Un(e) || yn in e ? X({}, e) : e : null;
}
function Te(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: i } = e, l = t ? Uc(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ar(l),
    ref: t && t.ref ? n && s ? T(s) ? s.concat(Gt(t)) : [s, Gt(t)] : Gt(t) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && T(i) ? i.map(pr) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== he ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Te(e.ssContent),
    ssFallback: e.ssFallback && Te(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function pr(e) {
  const t = Te(e);
  return T(e.children) && (t.children = e.children.map(pr)), t;
}
function hr(e = " ", t = 0) {
  return Ce(vn, null, e, t);
}
function Ee(e) {
  return e == null || typeof e == "boolean" ? Ce(ie) : T(e) ? Ce(
    he,
    null,
    e.slice()
  ) : typeof e == "object" ? ke(e) : Ce(vn, null, String(e));
}
function ke(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Te(e);
}
function yo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), yo(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(yn in t) ? t._ctx = re : s === 3 && re && (re.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    $(t) ? (t = { default: t, _ctx: re }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [hr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Uc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = so([t.class, o.class]));
      else if (s === "style")
        t.style = oo([t.style, o.style]);
      else if (jt(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(T(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
function we(e, t, n, o = null) {
  me(e, t, 7, [
    n,
    o
  ]);
}
const kc = lr();
let Bc = 0;
function Kc(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || kc, r = {
    uid: Bc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Mr(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: or(o, s),
    emitsOptions: Hs(o, s),
    emit: null,
    emitted: null,
    propsDefaults: H,
    inheritAttrs: o.inheritAttrs,
    ctx: H,
    data: H,
    props: H,
    attrs: H,
    slots: H,
    refs: H,
    setupState: H,
    setupContext: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
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
  return process.env.NODE_ENV !== "production" ? r.ctx = fc(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Si.bind(null, r), e.ce && e.ce(r), r;
}
let Q = null;
const Wc = () => Q || re, vt = (e) => {
  Q = e, e.scope.on();
}, rt = () => {
  Q && Q.scope.off(), Q = null;
}, zc = /* @__PURE__ */ bt("slot,component");
function Gn(e, t) {
  const n = t.isNativeTag || fs;
  (zc(e) || n(e)) && y("Do not use built-in or reserved HTML elements as component id: " + e);
}
function _r(e) {
  return e.vnode.shapeFlag & 4;
}
let St = !1;
function qc(e, t = !1) {
  St = t;
  const { props: n, children: o } = e.vnode, s = _r(e);
  Ec(e, n, s, t), xc(e, o);
  const r = s ? Jc(e, t) : void 0;
  return St = !1, r;
}
function Jc(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && Gn(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let i = 0; i < r.length; i++)
        Gn(r[i], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let i = 0; i < r.length; i++)
        Qs(r[i]);
    }
    o.compilerOptions && Yc() && y('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = ws(new Proxy(e.ctx, er)), process.env.NODE_ENV !== "production" && uc(e);
  const { setup: s } = o;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Xc(e) : null;
    vt(e), ct();
    const i = Re(s, e, 0, [process.env.NODE_ENV !== "production" ? ht(e.props) : e.props, r]);
    if (lt(), rt(), co(i)) {
      if (i.then(rt, rt), t)
        return i.then((l) => {
          Zo(e, l, t);
        }).catch((l) => {
          mn(l, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        y(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      Zo(e, i, t);
  } else
    mr(e, t);
}
function Zo(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) ? (process.env.NODE_ENV !== "production" && bn(t) && y("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = xs(t), process.env.NODE_ENV !== "production" && ac(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), mr(e, n);
}
let eo;
const Yc = () => !eo;
function mr(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && eo && !o.render) {
      const s = o.template || vo(e).template;
      if (s) {
        process.env.NODE_ENV !== "production" && Pe(e, "compile");
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: f } = o, a = X(X({
          isCustomElement: r,
          delimiters: l
        }, i), f);
        o.render = eo(s, a), process.env.NODE_ENV !== "production" && Ae(e, "compile");
      }
    }
    e.render = o.render || ne;
  }
  vt(e), ct(), pc(e), lt(), rt(), process.env.NODE_ENV !== "production" && !o.render && e.render === ne && !t && (o.template ? y('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : y("Component is missing template or render function."));
}
function Qo(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return sn(), pe(e, "get", "$attrs"), t[n];
    },
    set() {
      return y("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return y("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return pe(e, "get", "$attrs"), t[n];
    }
  });
}
function Xc(e) {
  const t = (o) => {
    process.env.NODE_ENV !== "production" && e.exposed && y("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = Qo(e));
    },
    get slots() {
      return ht(e.slots);
    },
    get emit() {
      return (o, ...s) => e.emit(o, ...s);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = Qo(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Oo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(xs(ws(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Nt)
          return Nt[n](e);
      }
    }));
}
const Zc = /(?:^|[-_])(\w)/g, Qc = (e) => e.replace(Zc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function gr(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function On(e, t, n = !1) {
  let o = gr(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(e.components || e.parent.type.components) || s(e.appContext.components);
  }
  return o ? Qc(o) : n ? "App" : "Anonymous";
}
function Er(e) {
  return $(e) && "__vccOpts" in e;
}
const Gc = (e, t) => mi(e, t, St);
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function An(e) {
  return !!(e && e.__v_isShallow);
}
function el() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, s = {
    header(d) {
      return q(d) ? d.__isVue ? ["div", e, "VueInstance"] : G(d) ? [
        "div",
        {},
        ["span", e, h(d)],
        "<",
        l(d.value),
        ">"
      ] : nt(d) ? [
        "div",
        {},
        ["span", e, An(d) ? "ShallowReactive" : "Reactive"],
        "<",
        l(d),
        `>${qe(d) ? " (readonly)" : ""}`
      ] : qe(d) ? [
        "div",
        {},
        ["span", e, An(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...r(d.$)
        ];
    }
  };
  function r(d) {
    const g = [];
    d.type.props && d.props && g.push(i("props", P(d.props))), d.setupState !== H && g.push(i("setup", d.setupState)), d.data !== H && g.push(i("data", P(d.data)));
    const V = f(d, "computed");
    V && g.push(i("computed", V));
    const A = f(d, "inject");
    return A && g.push(i("injected", A)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), g;
  }
  function i(d, g) {
    return g = X({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((V) => [
          "div",
          {},
          ["span", o, V + ": "],
          l(g[V], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(d, g = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : q(d) ? ["object", { object: g ? P(d) : d }] : ["span", n, String(d)];
  }
  function f(d, g) {
    const V = d.type;
    if ($(V))
      return;
    const A = {};
    for (const C in d.ctx)
      a(V, C, g) && (A[C] = d.ctx[C]);
    return A;
  }
  function a(d, g, V) {
    const A = d[V];
    if (T(A) && A.includes(g) || q(A) && g in A || d.extends && a(d.extends, g, V) || d.mixins && d.mixins.some((C) => a(C, g, V)))
      return !0;
  }
  function h(d) {
    return An(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const Go = "3.2.40", tl = "http://www.w3.org/2000/svg", et = typeof document < "u" ? document : null, es = et && /* @__PURE__ */ et.createElement("template"), nl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t ? et.createElementNS(tl, e) : et.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => et.createTextNode(e),
  createComment: (e) => et.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => et.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, o, s, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      es.innerHTML = o ? `<svg>${e}</svg>` : e;
      const l = es.content;
      if (o) {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      i ? i.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function ol(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function sl(e, t, n) {
  const o = e.style, s = ee(n);
  if (n && !s) {
    for (const r in n)
      to(o, r, n[r]);
    if (t && !ee(t))
      for (const r in t)
        n[r] == null && to(o, r, "");
  } else {
    const r = o.display;
    s ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = r);
  }
}
const ts = /\s*!important$/;
function to(e, t, n) {
  if (T(n))
    n.forEach((o) => to(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = rl(e, t);
    ts.test(n) ? e.setProperty(ve(o), n.replace(ts, ""), "important") : e[o] = n;
  }
}
const ns = ["Webkit", "Moz", "ms"], Rn = {};
function rl(e, t) {
  const n = Rn[t];
  if (n)
    return n;
  let o = We(t);
  if (o !== "filter" && o in e)
    return Rn[t] = o;
  o = an(o);
  for (let s = 0; s < ns.length; s++) {
    const r = ns[s] + o;
    if (r in e)
      return Rn[t] = r;
  }
  return t;
}
const os = "http://www.w3.org/1999/xlink";
function il(e, t, n, o, s) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(os, t.slice(6, t.length)) : e.setAttributeNS(os, t, n);
  else {
    const r = Or(t);
    n == null || r && !ls(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
  }
}
function cl(e, t, n, o, s, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, s, r), e[t] = n == null ? "" : n;
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const f = n == null ? "" : n;
    (e.value !== f || e.tagName === "OPTION") && (e.value = f), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = ls(n) : n == null && f === "string" ? (n = "", l = !0) : f === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (f) {
    process.env.NODE_ENV !== "production" && !l && y(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, f);
  }
  l && e.removeAttribute(t);
}
const [Nr, ll] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let no = 0;
const fl = /* @__PURE__ */ Promise.resolve(), ul = () => {
  no = 0;
}, al = () => no || (fl.then(ul), no = Nr());
function dl(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function pl(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function hl(e, t, n, o, s = null) {
  const r = e._vei || (e._vei = {}), i = r[t];
  if (o && i)
    i.value = o;
  else {
    const [l, f] = _l(t);
    if (o) {
      const a = r[t] = ml(o, s);
      dl(e, l, a, f);
    } else
      i && (pl(e, l, i, f), r[t] = void 0);
  }
}
const ss = /(?:Once|Passive|Capture)$/;
function _l(e) {
  let t;
  if (ss.test(e)) {
    t = {};
    let o;
    for (; o = e.match(ss); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ve(e.slice(2)), t];
}
function ml(e, t) {
  const n = (o) => {
    const s = o.timeStamp || Nr();
    (ll || s >= n.attached - 1) && me(gl(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = al(), n;
}
function gl(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (s) => !s._stopped && o && o(s));
  } else
    return t;
}
const rs = /^on[a-z]/, El = (e, t, n, o, s = !1, r, i, l, f) => {
  t === "class" ? ol(e, o, s) : t === "style" ? sl(e, n, o) : jt(t) ? en(t) || hl(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Nl(e, t, o, s)) ? cl(e, t, o, r, i, l, f) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), il(e, t, o, s));
};
function Nl(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && rs.test(t) && $(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || rs.test(t) && ee(n) ? !1 : t in e;
}
function vl(e, t) {
  const n = qs(e);
  class o extends wo {
    constructor(r) {
      super(n, r, t);
    }
  }
  return o.def = n, o;
}
const bl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class wo extends bl {
  constructor(t, n = {}, o) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && y("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), this.attachShadow({ mode: "open" }));
  }
  connectedCallback() {
    this._connected = !0, this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    this._connected = !1, $s(() => {
      this._connected || (cs(null, this.shadowRoot), this._instance = null);
    });
  }
  _resolveDef() {
    if (this._resolved)
      return;
    this._resolved = !0;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    new MutationObserver((o) => {
      for (const s of o)
        this._setAttr(s.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (o) => {
      const { props: s, styles: r } = o, i = !T(s), l = s ? i ? Object.keys(s) : s : [];
      let f;
      if (i)
        for (const a in this._props) {
          const h = s[a];
          (h === Number || h && h.type === Number) && (this._props[a] = Mn(this._props[a]), (f || (f = /* @__PURE__ */ Object.create(null)))[a] = !0);
        }
      this._numberProps = f;
      for (const a of Object.keys(this))
        a[0] !== "_" && this._setProp(a, this[a], !0, !1);
      for (const a of l.map(We))
        Object.defineProperty(this, a, {
          get() {
            return this._getProp(a);
          },
          set(h) {
            this._setProp(a, h);
          }
        });
      this._applyStyles(r), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then(t) : t(this._def);
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    this._numberProps && this._numberProps[t] && (n = Mn(n)), this._setProp(We(t), n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, o = !0, s = !0) {
    n !== this._props[t] && (this._props[t] = n, s && this._instance && this._update(), o && (n === !0 ? this.setAttribute(ve(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(ve(t), n + "") : n || this.removeAttribute(ve(t))));
  }
  _update() {
    cs(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Ce(this._def, X({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, process.env.NODE_ENV !== "production" && (n.ceReload = (s) => {
        this._styles && (this._styles.forEach((r) => this.shadowRoot.removeChild(r)), this._styles.length = 0), this._applyStyles(s), this._def.__asyncLoader || (this._instance = null, this._update());
      }), n.emit = (s, ...r) => {
        this.dispatchEvent(new CustomEvent(s, {
          detail: r
        }));
      };
      let o = this;
      for (; o = o && (o.parentNode || o.host); )
        if (o instanceof wo) {
          n.parent = o._instance;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const o = document.createElement("style");
      o.textContent = n, this.shadowRoot.appendChild(o), process.env.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(o);
    });
  }
}
const yl = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Xi.props;
const Ol = /* @__PURE__ */ X({ patchProp: El }, nl);
let is;
function wl() {
  return is || (is = Pc(Ol));
}
const cs = (...e) => {
  wl().render(...e);
};
function Dl() {
  el();
}
process.env.NODE_ENV !== "production" && Dl();
const Vl = { class: "lpr" }, xl = { class: "lpr__container" }, Cl = /* @__PURE__ */ qs({
  __name: "VideoPlayer.ce",
  setup(e) {
    const t = ui();
    return (n, o) => (fr(), Sc("div", Vl, [
      ln("video", {
        class: "lpr__video",
        ref_key: "videoElementRef",
        ref: t
      }, null, 512),
      hr(" demo "),
      ln("div", xl, [
        lc(n.$slots, "default")
      ])
    ]));
  }
}), Tl = vl(Cl);
customElements.define("video-player", Tl);
