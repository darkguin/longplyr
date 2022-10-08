var ws = Object.defineProperty;
var Ds = (e, t, n) => t in e ? ws(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Dt = (e, t, n) => (Ds(e, typeof t != "symbol" ? t + "" : t, n), n);
function bt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const xs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Vs = /* @__PURE__ */ bt(xs);
function mr(e) {
  return !!e || e === "";
}
function lo(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = J(o) ? Ts(o) : lo(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (J(e))
      return e;
    if (k(e))
      return e;
  }
}
const Cs = /;(?![^(]*\))/g, $s = /:(.+)/;
function Ts(e) {
  const t = {};
  return e.split(Cs).forEach((n) => {
    if (n) {
      const o = n.split($s);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function co(e) {
  let t = "";
  if (J(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = co(e[n]);
      o && (t += o + " ");
    }
  else if (k(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const S = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, ht = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Z = () => {
}, gr = () => !1, Is = /^on[^a-z]/, Kt = (e) => Is.test(e), sn = (e) => e.startsWith("onUpdate:"), K = Object.assign, uo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ps = Object.prototype.hasOwnProperty, R = (e, t) => Ps.call(e, t), T = Array.isArray, _t = (e) => pn(e) === "[object Map]", Rs = (e) => pn(e) === "[object Set]", $ = (e) => typeof e == "function", J = (e) => typeof e == "string", fo = (e) => typeof e == "symbol", k = (e) => e !== null && typeof e == "object", ao = (e) => k(e) && $(e.then) && $(e.catch), Ms = Object.prototype.toString, pn = (e) => Ms.call(e), po = (e) => pn(e).slice(8, -1), As = (e) => pn(e) === "[object Object]", ho = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Gt = /* @__PURE__ */ bt(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), js = /* @__PURE__ */ bt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), hn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Fs = /-(\w)/g, Le = hn((e) => e.replace(Fs, (t, n) => n ? n.toUpperCase() : "")), Ss = /\B([A-Z])/g, he = hn((e) => e.replace(Ss, "-$1").toLowerCase()), _n = hn((e) => e.charAt(0).toUpperCase() + e.slice(1)), qe = hn((e) => e ? `on${_n(e)}` : ""), Ft = (e, t) => !Object.is(e, t), xt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, ln = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Un = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let So;
const Er = () => So || (So = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function kn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ne;
class Hs {
  constructor(t = !1) {
    this.active = !0, this.effects = [], this.cleanups = [], !t && Ne && (this.parent = Ne, this.index = (Ne.scopes || (Ne.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = Ne;
      try {
        return Ne = this, t();
      } finally {
        Ne = n;
      }
    } else
      process.env.NODE_ENV !== "production" && kn("cannot run an inactive effect scope.");
  }
  on() {
    Ne = this;
  }
  off() {
    Ne = this.parent;
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
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.active = !1;
    }
  }
}
function Ls(e, t = Ne) {
  t && t.active && t.effects.push(e);
}
const St = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Nr = (e) => (e.w & Ue) > 0, vr = (e) => (e.n & Ue) > 0, Us = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Ue;
}, ks = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Nr(r) && !vr(r) ? r.delete(e) : t[n++] = r, r.w &= ~Ue, r.n &= ~Ue;
    }
    t.length = n;
  }
}, Bn = /* @__PURE__ */ new WeakMap();
let Tt = 0, Ue = 1;
const Kn = 30;
let oe;
const Ge = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Wn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class _o {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ls(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = oe, n = He;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = oe, oe = this, He = !0, Ue = 1 << ++Tt, Tt <= Kn ? Us(this) : Ho(this), this.fn();
    } finally {
      Tt <= Kn && ks(this), Ue = 1 << --Tt, oe = this.parent, He = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    oe === this ? this.deferStop = !0 : this.active && (Ho(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ho(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let He = !0;
const br = [];
function st() {
  br.push(He), He = !1;
}
function it() {
  const e = br.pop();
  He = e === void 0 ? !0 : e;
}
function ie(e, t, n) {
  if (He && oe) {
    let o = Bn.get(e);
    o || Bn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = St());
    const s = process.env.NODE_ENV !== "production" ? { effect: oe, target: e, type: t, key: n } : void 0;
    zn(r, s);
  }
}
function zn(e, t) {
  let n = !1;
  Tt <= Kn ? vr(e) || (e.n |= Ue, n = !Nr(e)) : n = !e.has(oe), n && (e.add(oe), oe.deps.push(e), process.env.NODE_ENV !== "production" && oe.onTrack && oe.onTrack(Object.assign({ effect: oe }, t)));
}
function $e(e, t, n, o, r, s) {
  const i = Bn.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && T(e))
    i.forEach((a, h) => {
      (h === "length" || h >= o) && c.push(a);
    });
  else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        T(e) ? ho(n) && c.push(i.get("length")) : (c.push(i.get(Ge)), _t(e) && c.push(i.get(Wn)));
        break;
      case "delete":
        T(e) || (c.push(i.get(Ge)), _t(e) && c.push(i.get(Wn)));
        break;
      case "set":
        _t(e) && c.push(i.get(Ge));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? dt(c[0], u) : dt(c[0]));
  else {
    const a = [];
    for (const h of c)
      h && a.push(...h);
    process.env.NODE_ENV !== "production" ? dt(St(a), u) : dt(St(a));
  }
}
function dt(e, t) {
  const n = T(e) ? e : [...e];
  for (const o of n)
    o.computed && Lo(o, t);
  for (const o of n)
    o.computed || Lo(o, t);
}
function Lo(e, t) {
  (e !== oe || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(K({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Bs = /* @__PURE__ */ bt("__proto__,__v_isRef,__isVue"), yr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(fo)
), Ks = /* @__PURE__ */ mn(), Ws = /* @__PURE__ */ mn(!1, !0), zs = /* @__PURE__ */ mn(!0), qs = /* @__PURE__ */ mn(!0, !0), Uo = /* @__PURE__ */ Ys();
function Ys() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = I(this);
      for (let s = 0, i = this.length; s < i; s++)
        ie(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(I)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      st();
      const o = I(this)[t].apply(this, n);
      return it(), o;
    };
  }), e;
}
function mn(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? Tr : $r : t ? Cr : Vr).get(o))
      return o;
    const i = T(o);
    if (!e && i && R(Uo, r))
      return Reflect.get(Uo, r, s);
    const c = Reflect.get(o, r, s);
    return (fo(r) ? yr.has(r) : Bs(r)) || (e || ie(o, "get", r), t) ? c : Y(c) ? i && ho(r) ? c : c.value : k(c) ? e ? Ir(c) : go(c) : c;
  };
}
const Js = /* @__PURE__ */ Or(), Xs = /* @__PURE__ */ Or(!0);
function Or(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (ke(i) && Y(i) && !Y(r))
      return !1;
    if (!e && (!cn(r) && !ke(r) && (i = I(i), r = I(r)), !T(n) && Y(i) && !Y(r)))
      return i.value = r, !0;
    const c = T(n) && ho(o) ? Number(o) < n.length : R(n, o), u = Reflect.set(n, o, r, s);
    return n === I(s) && (c ? Ft(r, i) && $e(n, "set", o, r, i) : $e(n, "add", o, r)), u;
  };
}
function Zs(e, t) {
  const n = R(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && $e(e, "delete", t, void 0, o), r;
}
function Qs(e, t) {
  const n = Reflect.has(e, t);
  return (!fo(t) || !yr.has(t)) && ie(e, "has", t), n;
}
function Gs(e) {
  return ie(e, "iterate", T(e) ? "length" : Ge), Reflect.ownKeys(e);
}
const wr = {
  get: Ks,
  set: Js,
  deleteProperty: Zs,
  has: Qs,
  ownKeys: Gs
}, Dr = {
  get: zs,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && kn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && kn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, ei = /* @__PURE__ */ K({}, wr, {
  get: Ws,
  set: Xs
}), ti = /* @__PURE__ */ K({}, Dr, {
  get: qs
}), mo = (e) => e, gn = (e) => Reflect.getPrototypeOf(e);
function Yt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = I(e), s = I(t);
  n || (t !== s && ie(r, "get", t), ie(r, "get", s));
  const { has: i } = gn(r), c = o ? mo : n ? Eo : Ht;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function Jt(e, t = !1) {
  const n = this.__v_raw, o = I(n), r = I(e);
  return t || (e !== r && ie(o, "has", e), ie(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Xt(e, t = !1) {
  return e = e.__v_raw, !t && ie(I(e), "iterate", Ge), Reflect.get(e, "size", e);
}
function ko(e) {
  e = I(e);
  const t = I(this);
  return gn(t).has.call(t, e) || (t.add(e), $e(t, "add", e, e)), this;
}
function Bo(e, t) {
  t = I(t);
  const n = I(this), { has: o, get: r } = gn(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && xr(n, o, e) : (e = I(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? Ft(t, i) && $e(n, "set", e, t, i) : $e(n, "add", e, t), this;
}
function Ko(e) {
  const t = I(this), { has: n, get: o } = gn(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && xr(t, n, e) : (e = I(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && $e(t, "delete", e, void 0, s), i;
}
function Wo() {
  const e = I(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? _t(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && $e(e, "clear", void 0, void 0, n), o;
}
function Zt(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, c = I(i), u = t ? mo : e ? Eo : Ht;
    return !e && ie(c, "iterate", Ge), i.forEach((a, h) => o.call(r, u(a), u(h), s));
  };
}
function Qt(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = I(r), i = _t(s), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...o), h = n ? mo : t ? Eo : Ht;
    return !t && ie(s, "iterate", u ? Wn : Ge), {
      next() {
        const { value: d, done: N } = a.next();
        return N ? { value: d, done: N } : {
          value: c ? [h(d[0]), h(d[1])] : h(d),
          done: N
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ae(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${_n(e)} operation ${n}failed: target is readonly.`, I(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function ni() {
  const e = {
    get(s) {
      return Yt(this, s);
    },
    get size() {
      return Xt(this);
    },
    has: Jt,
    add: ko,
    set: Bo,
    delete: Ko,
    clear: Wo,
    forEach: Zt(!1, !1)
  }, t = {
    get(s) {
      return Yt(this, s, !1, !0);
    },
    get size() {
      return Xt(this);
    },
    has: Jt,
    add: ko,
    set: Bo,
    delete: Ko,
    clear: Wo,
    forEach: Zt(!1, !0)
  }, n = {
    get(s) {
      return Yt(this, s, !0);
    },
    get size() {
      return Xt(this, !0);
    },
    has(s) {
      return Jt.call(this, s, !0);
    },
    add: Ae("add"),
    set: Ae("set"),
    delete: Ae("delete"),
    clear: Ae("clear"),
    forEach: Zt(!0, !1)
  }, o = {
    get(s) {
      return Yt(this, s, !0, !0);
    },
    get size() {
      return Xt(this, !0);
    },
    has(s) {
      return Jt.call(this, s, !0);
    },
    add: Ae("add"),
    set: Ae("set"),
    delete: Ae("delete"),
    clear: Ae("clear"),
    forEach: Zt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = Qt(s, !1, !1), n[s] = Qt(s, !0, !1), t[s] = Qt(s, !1, !0), o[s] = Qt(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [oi, ri, si, ii] = /* @__PURE__ */ ni();
function En(e, t) {
  const n = t ? e ? ii : si : e ? ri : oi;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(R(n, r) && r in o ? n : o, r, s);
}
const li = {
  get: /* @__PURE__ */ En(!1, !1)
}, ci = {
  get: /* @__PURE__ */ En(!1, !0)
}, ui = {
  get: /* @__PURE__ */ En(!0, !1)
}, fi = {
  get: /* @__PURE__ */ En(!0, !0)
};
function xr(e, t, n) {
  const o = I(n);
  if (o !== n && t.call(e, o)) {
    const r = po(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Vr = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ new WeakMap();
function ai(e) {
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
function di(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ai(po(e));
}
function go(e) {
  return ke(e) ? e : Nn(e, !1, wr, li, Vr);
}
function pi(e) {
  return Nn(e, !1, ei, ci, Cr);
}
function Ir(e) {
  return Nn(e, !0, Dr, ui, $r);
}
function pt(e) {
  return Nn(e, !0, ti, fi, Tr);
}
function Nn(e, t, n, o, r) {
  if (!k(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = di(e);
  if (i === 0)
    return e;
  const c = new Proxy(e, i === 2 ? o : n);
  return r.set(e, c), c;
}
function et(e) {
  return ke(e) ? et(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ke(e) {
  return !!(e && e.__v_isReadonly);
}
function cn(e) {
  return !!(e && e.__v_isShallow);
}
function qn(e) {
  return et(e) || ke(e);
}
function I(e) {
  const t = e && e.__v_raw;
  return t ? I(t) : e;
}
function Pr(e) {
  return ln(e, "__v_skip", !0), e;
}
const Ht = (e) => k(e) ? go(e) : e, Eo = (e) => k(e) ? Ir(e) : e;
function Rr(e) {
  He && oe && (e = I(e), process.env.NODE_ENV !== "production" ? zn(e.dep || (e.dep = St()), {
    target: e,
    type: "get",
    key: "value"
  }) : zn(e.dep || (e.dep = St())));
}
function Mr(e, t) {
  e = I(e), e.dep && (process.env.NODE_ENV !== "production" ? dt(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : dt(e.dep));
}
function Y(e) {
  return !!(e && e.__v_isRef === !0);
}
function Pt(e) {
  return hi(e, !1);
}
function hi(e, t) {
  return Y(e) ? e : new _i(e, t);
}
class _i {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : I(t), this._value = n ? t : Ht(t);
  }
  get value() {
    return Rr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || cn(t) || ke(t);
    t = n ? t : I(t), Ft(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Ht(t), Mr(this, t));
  }
}
function mi(e) {
  return Y(e) ? e.value : e;
}
const gi = {
  get: (e, t, n) => mi(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return Y(r) && !Y(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ar(e) {
  return et(e) ? e : new Proxy(e, gi);
}
var jr;
class Ei {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[jr] = !1, this._dirty = !0, this.effect = new _o(t, () => {
      this._dirty || (this._dirty = !0, Mr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = I(this);
    return Rr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
jr = "__v_isReadonly";
function Ni(e, t, n = !1) {
  let o, r;
  const s = $(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Z) : (o = e.get, r = e.set);
  const i = new Ei(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const tt = [];
function en(e) {
  tt.push(e);
}
function tn() {
  tt.pop();
}
function y(e, ...t) {
  st();
  const n = tt.length ? tt[tt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = vi();
  if (o)
    Ce(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${In(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...bi(r)), console.warn(...s);
  }
  it();
}
function vi() {
  let e = tt[tt.length - 1];
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
function bi(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...yi(n));
  }), t;
}
function yi({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${In(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...Oi(e.props), s] : [r + s];
}
function Oi(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Fr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Fr(e, t, n) {
  return J(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Y(t) ? (t = Fr(e, I(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = I(t), n ? t : [`${e}=`, t]);
}
const No = {
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
function Ce(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    vn(s, t, n);
  }
  return r;
}
function _e(e, t, n, o) {
  if ($(e)) {
    const s = Ce(e, t, n, o);
    return s && ao(s) && s.catch((i) => {
      vn(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(_e(e[s], t, n, o));
  return r;
}
function vn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? No[n] : n;
    for (; s; ) {
      const a = s.ec;
      if (a) {
        for (let h = 0; h < a.length; h++)
          if (a[h](e, i, c) === !1)
            return;
      }
      s = s.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Ce(u, null, 10, [e, i, c]);
      return;
    }
  }
  wi(e, n, r, o);
}
function wi(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = No[t];
    if (n && en(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && tn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Lt = !1, Yn = !1;
const G = [];
let be = 0;
const mt = [];
let ve = null, je = 0;
const Sr = /* @__PURE__ */ Promise.resolve();
let vo = null;
const Di = 100;
function Hr(e) {
  const t = vo || Sr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function xi(e) {
  let t = be + 1, n = G.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Ut(G[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function bn(e) {
  (!G.length || !G.includes(e, Lt && e.allowRecurse ? be + 1 : be)) && (e.id == null ? G.push(e) : G.splice(xi(e.id), 0, e), Lr());
}
function Lr() {
  !Lt && !Yn && (Yn = !0, vo = Sr.then(Br));
}
function Vi(e) {
  const t = G.indexOf(e);
  t > be && G.splice(t, 1);
}
function Ur(e) {
  T(e) ? mt.push(...e) : (!ve || !ve.includes(e, e.allowRecurse ? je + 1 : je)) && mt.push(e), Lr();
}
function zo(e, t = Lt ? be + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < G.length; t++) {
    const n = G[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && bo(e, n))
        continue;
      G.splice(t, 1), t--, n();
    }
  }
}
function kr(e) {
  if (mt.length) {
    const t = [...new Set(mt)];
    if (mt.length = 0, ve) {
      ve.push(...t);
      return;
    }
    for (ve = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ve.sort((n, o) => Ut(n) - Ut(o)), je = 0; je < ve.length; je++)
      process.env.NODE_ENV !== "production" && bo(e, ve[je]) || ve[je]();
    ve = null, je = 0;
  }
}
const Ut = (e) => e.id == null ? 1 / 0 : e.id, Ci = (e, t) => {
  const n = Ut(e) - Ut(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Br(e) {
  Yn = !1, Lt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), G.sort(Ci);
  const t = process.env.NODE_ENV !== "production" ? (n) => bo(e, n) : Z;
  try {
    for (be = 0; be < G.length; be++) {
      const n = G[be];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Ce(n, null, 14);
      }
    }
  } finally {
    be = 0, G.length = 0, kr(e), Lt = !1, vo = null, (G.length || mt.length) && Br(e);
  }
}
function bo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Di) {
      const o = t.ownerInstance, r = o && Ns(o.type);
      return y(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let nt = !1;
const at = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Er().__VUE_HMR_RUNTIME__ = {
  createRecord: jn(Kr),
  rerender: jn(Ii),
  reload: jn(Pi)
});
const rt = /* @__PURE__ */ new Map();
function $i(e) {
  const t = e.type.__hmrId;
  let n = rt.get(t);
  n || (Kr(t, e.type), n = rt.get(t)), n.instances.add(e);
}
function Ti(e) {
  rt.get(e.type.__hmrId).instances.delete(e);
}
function Kr(e, t) {
  return rt.has(e) ? !1 : (rt.set(e, {
    initialDef: Rt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Rt(e) {
  return vs(e) ? e.__vccOpts : e;
}
function Ii(e, t) {
  const n = rt.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Rt(o.type).render = t), o.renderCache = [], nt = !0, o.update(), nt = !1;
  }));
}
function Pi(e, t) {
  const n = rt.get(e);
  if (!n)
    return;
  t = Rt(t), qo(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = Rt(r.type);
    at.has(s) || (s !== n.initialDef && qo(s, t), at.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (at.add(s), r.ceReload(t.styles), at.delete(s)) : r.parent ? (bn(r.parent.update), r.parent.type.__asyncLoader && r.parent.ceReload && r.parent.ceReload(t.styles)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Ur(() => {
    for (const r of o)
      at.delete(Rt(r.type));
  });
}
function qo(e, t) {
  K(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function jn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Je, It = [], Jn = !1;
function Wt(e, ...t) {
  Je ? Je.emit(e, ...t) : Jn || It.push({ event: e, args: t });
}
function Wr(e, t) {
  var n, o;
  Je = e, Je ? (Je.enabled = !0, It.forEach(({ event: r, args: s }) => Je.emit(r, ...s)), It = []) : typeof window < "u" && window.HTMLElement && !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Wr(s, t);
  }), setTimeout(() => {
    Je || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Jn = !0, It = []);
  }, 3e3)) : (Jn = !0, It = []);
}
function Ri(e, t) {
  Wt("app:init", e, t, {
    Fragment: le,
    Text: xn,
    Comment: ce,
    Static: on
  });
}
function Mi(e) {
  Wt("app:unmount", e);
}
const Ai = /* @__PURE__ */ yo("component:added"), zr = /* @__PURE__ */ yo("component:updated"), ji = /* @__PURE__ */ yo("component:removed");
function yo(e) {
  return (t) => {
    Wt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Fi = /* @__PURE__ */ qr("perf:start"), Si = /* @__PURE__ */ qr("perf:end");
function qr(e) {
  return (t, n, o) => {
    Wt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Hi(e, t, n) {
  Wt("component:emit", e.appContext.app, e, t, n);
}
function Li(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || S;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: h, propsOptions: [d] } = e;
    if (h)
      if (!(t in h))
        (!d || !(qe(t) in d)) && y(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${qe(t)}" prop.`);
      else {
        const N = h[t];
        $(N) && (N(...n) || y(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: N } = o[h] || S;
    N && (r = n.map((V) => V.trim())), d && (r = n.map(Un));
  }
  if (process.env.NODE_ENV !== "production" && Hi(e, t, r), process.env.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && o[qe(h)] && y(`Event "${h}" is emitted in component ${In(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${he(t)}" instead of "${t}".`);
  }
  let c, u = o[c = qe(t)] || o[c = qe(Le(t))];
  !u && s && (u = o[c = qe(he(t))]), u && _e(u, e, 6, r);
  const a = o[c + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, _e(a, e, 6, r);
  }
}
function Yr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, c = !1;
  if (!$(e)) {
    const u = (a) => {
      const h = Yr(a, t, !0);
      h && (c = !0, K(i, h));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !s && !c ? (k(e) && o.set(e, null), null) : (T(s) ? s.forEach((u) => i[u] = null) : K(i, s), k(e) && o.set(e, i), i);
}
function yn(e, t) {
  return !e || !Kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), R(e, t[0].toLowerCase() + t.slice(1)) || R(e, he(t)) || R(e, t));
}
let ee = null, Jr = null;
function un(e) {
  const t = ee;
  return ee = e, Jr = e && e.type.__scopeId || null, t;
}
function Ui(e, t = ee, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && rr(-1);
    const s = un(t), i = e(...r);
    return un(s), o._d && rr(1), process.env.NODE_ENV !== "production" && zr(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Xn = !1;
function fn() {
  Xn = !0;
}
function Fn(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: c, attrs: u, emit: a, render: h, renderCache: d, data: N, setupState: V, ctx: A, inheritAttrs: P } = e;
  let q, B;
  const L = un(e);
  process.env.NODE_ENV !== "production" && (Xn = !1);
  try {
    if (n.shapeFlag & 4) {
      const X = r || o;
      q = de(h.call(X, X, d, s, V, N, A)), B = u;
    } else {
      const X = t;
      process.env.NODE_ENV !== "production" && u === s && fn(), q = de(X.length > 1 ? X(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return fn(), u;
        },
        slots: c,
        emit: a
      } : { attrs: u, slots: c, emit: a }) : X(s, null)), B = t.props ? u : Bi(u);
    }
  } catch (X) {
    jt.length = 0, vn(X, e, 1), q = ye(ce);
  }
  let W = q, Oe;
  if (process.env.NODE_ENV !== "production" && q.patchFlag > 0 && q.patchFlag & 2048 && ([W, Oe] = ki(q)), B && P !== !1) {
    const X = Object.keys(B), { shapeFlag: yt } = W;
    if (X.length) {
      if (yt & 7)
        i && X.some(sn) && (B = Ki(B, i)), W = Ke(W, B);
      else if (process.env.NODE_ENV !== "production" && !Xn && W.type !== ce) {
        const lt = Object.keys(u), Ie = [], ue = [];
        for (let we = 0, Pe = lt.length; we < Pe; we++) {
          const fe = lt[we];
          Kt(fe) ? sn(fe) || Ie.push(fe[2].toLowerCase() + fe.slice(3)) : ue.push(fe);
        }
        ue.length && y(`Extraneous non-props attributes (${ue.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), Ie.length && y(`Extraneous non-emits event listeners (${Ie.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Yo(W) && y("Runtime directive used on component with non-element root node. The directives will not function as intended."), W = Ke(W), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Yo(W) && y("Component inside <Transition> renders non-element root node that cannot be animated."), W.transition = n.transition), process.env.NODE_ENV !== "production" && Oe ? Oe(W) : q = W, un(L), q;
}
const ki = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Xr(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (c) => {
    t[r] = c, n && (s > -1 ? n[s] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [de(o), i];
};
function Xr(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Cn(o)) {
      if (o.type !== ce || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Bi = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Kt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ki = (e, t) => {
  const n = {};
  for (const o in e)
    (!sn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Yo = (e) => e.shapeFlag & 7 || e.type === ce;
function Wi(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: c, patchFlag: u } = t, a = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || c) && nt || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? Jo(o, i, a) : !!i;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        const N = h[d];
        if (i[N] !== o[N] && !yn(a, N))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === i ? !1 : o ? i ? Jo(o, i, a) : !0 : !!i;
  return !1;
}
function Jo(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !yn(n, s))
      return !0;
  }
  return !1;
}
function zi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const qi = (e) => e.__isSuspense;
function Yi(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Ur(e);
}
function Zr(e, t) {
  if (!Q)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = Q.provides;
    const o = Q.parent && Q.parent.provides;
    o === n && (n = Q.provides = Object.create(o)), n[e] = t;
  }
}
function Mt(e, t, n = !1) {
  const o = Q || ee;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const Xo = {};
function Sn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !$(t) && y("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Qr(e, t, n);
}
function Qr(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = S) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && y('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && y('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (L) => {
    y("Invalid watch source: ", L, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = Q;
  let a, h = !1, d = !1;
  if (Y(e) ? (a = () => e.value, h = cn(e)) : et(e) ? (a = () => e, o = !0) : T(e) ? (d = !0, h = e.some((L) => et(L) || cn(L)), a = () => e.map((L) => {
    if (Y(L))
      return L.value;
    if (et(L))
      return Qe(L);
    if ($(L))
      return Ce(L, u, 2);
    process.env.NODE_ENV !== "production" && c(L);
  })) : $(e) ? t ? a = () => Ce(e, u, 2) : a = () => {
    if (!(u && u.isUnmounted))
      return N && N(), _e(e, u, 3, [V]);
  } : (a = Z, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const L = a;
    a = () => Qe(L());
  }
  let N, V = (L) => {
    N = B.onStop = () => {
      Ce(L, u, 4);
    };
  };
  if (Bt)
    return V = Z, t ? n && _e(t, u, 3, [
      a(),
      d ? [] : void 0,
      V
    ]) : a(), Z;
  let A = d ? [] : Xo;
  const P = () => {
    if (!!B.active)
      if (t) {
        const L = B.run();
        (o || h || (d ? L.some((W, Oe) => Ft(W, A[Oe])) : Ft(L, A))) && (N && N(), _e(t, u, 3, [
          L,
          A === Xo ? void 0 : A,
          V
        ]), A = L);
      } else
        B.run();
  };
  P.allowRecurse = !!t;
  let q;
  r === "sync" ? q = P : r === "post" ? q = () => se(P, u && u.suspense) : (P.pre = !0, u && (P.id = u.uid), q = () => bn(P));
  const B = new _o(a, q);
  return process.env.NODE_ENV !== "production" && (B.onTrack = s, B.onTrigger = i), t ? n ? P() : A = B.run() : r === "post" ? se(B.run.bind(B), u && u.suspense) : B.run(), () => {
    B.stop(), u && u.scope && uo(u.scope.effects, B);
  };
}
function Ji(e, t, n) {
  const o = this.proxy, r = J(e) ? e.includes(".") ? Gr(o, e) : () => o[e] : e.bind(o, o);
  let s;
  $(t) ? s = t : (s = t.handler, n = t);
  const i = Q;
  Nt(this);
  const c = Qr(r, s.bind(o), n);
  return i ? Nt(i) : ot(), c;
}
function Gr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function Qe(e, t) {
  if (!k(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Y(e))
    Qe(e.value, t);
  else if (T(e))
    for (let n = 0; n < e.length; n++)
      Qe(e[n], t);
  else if (Rs(e) || _t(e))
    e.forEach((n) => {
      Qe(n, t);
    });
  else if (As(e))
    for (const n in e)
      Qe(e[n], t);
  return e;
}
function On(e) {
  return $(e) ? { setup: e, name: e.name } : e;
}
const At = (e) => !!e.type.__asyncLoader, Oo = (e) => e.type.__isKeepAlive;
function Xi(e, t) {
  es(e, "a", t);
}
function Zi(e, t) {
  es(e, "da", t);
}
function es(e, t, n = Q) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (wn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Oo(r.parent.vnode) && Qi(o, t, n, r), r = r.parent;
  }
}
function Qi(e, t, n, o) {
  const r = wn(t, e, o, !0);
  wo(() => {
    uo(o[t], r);
  }, n);
}
function wn(e, t, n = Q, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      st(), Nt(n);
      const c = _e(t, n, e, i);
      return ot(), it(), c;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = qe(No[e].replace(/ hook$/, ""));
    y(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Te = (e) => (t, n = Q) => (!Bt || e === "sp") && wn(e, (...o) => t(...o), n), Gi = Te("bm"), Dn = Te("m"), el = Te("bu"), tl = Te("u"), nl = Te("bum"), wo = Te("um"), ol = Te("sp"), rl = Te("rtg"), sl = Te("rtc");
function il(e, t = Q) {
  wn("ec", e, t);
}
function ts(e) {
  js(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function ll(e, t) {
  const n = ee;
  if (n === null)
    return process.env.NODE_ENV !== "production" && y("withDirectives can only be used inside render functions."), e;
  const o = Tn(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, c, u, a = S] = t[s];
    $(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Qe(c), r.push({
      dir: i,
      instance: o,
      value: c,
      oldValue: void 0,
      arg: u,
      modifiers: a
    });
  }
  return e;
}
function We(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    s && (c.oldValue = s[i].value);
    let u = c.dir[o];
    u && (st(), _e(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), it());
  }
}
const cl = Symbol();
function ul(e, t, n = {}, o, r) {
  if (ee.isCE || ee.parent && At(ee.parent) && ee.parent.isCE)
    return ye("slot", t === "default" ? null : { name: t }, o && o());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (y("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), s = () => []), s && s._c && (s._d = !1), Vn();
  const i = s && ns(s(n)), c = Sl(le, {
    key: n.key || i && i.key || `_${t}`
  }, i || (o ? o() : []), i && e._ === 1 ? 64 : -2);
  return !r && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), s && s._c && (s._d = !0), c;
}
function ns(e) {
  return e.some((t) => Cn(t) ? !(t.type === ce || t.type === le && !ns(t.children)) : !0) ? e : null;
}
const Zn = (e) => e ? gs(e) ? Tn(e) || e.proxy : Zn(e.parent) : null, Et = /* @__PURE__ */ K(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? pt(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? pt(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? pt(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? pt(e.refs) : e.refs,
  $parent: (e) => Zn(e.parent),
  $root: (e) => Zn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => xo(e),
  $forceUpdate: (e) => e.f || (e.f = () => bn(e.update)),
  $nextTick: (e) => e.n || (e.n = Hr.bind(e.proxy)),
  $watch: (e) => Ji.bind(e)
}), Do = (e) => e === "_" || e === "$", os = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (process.env.NODE_ENV !== "production" && o !== S && o.__isScriptSetup && R(o, t))
      return o[t];
    let a;
    if (t[0] !== "$") {
      const V = i[t];
      if (V !== void 0)
        switch (V) {
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
        if (o !== S && R(o, t))
          return i[t] = 1, o[t];
        if (r !== S && R(r, t))
          return i[t] = 2, r[t];
        if ((a = e.propsOptions[0]) && R(a, t))
          return i[t] = 3, s[t];
        if (n !== S && R(n, t))
          return i[t] = 4, n[t];
        Qn && (i[t] = 0);
      }
    }
    const h = Et[t];
    let d, N;
    if (h)
      return t === "$attrs" && (ie(e, "get", t), process.env.NODE_ENV !== "production" && fn()), h(e);
    if ((d = c.__cssModules) && (d = d[t]))
      return d;
    if (n !== S && R(n, t))
      return i[t] = 4, n[t];
    if (N = u.config.globalProperties, R(N, t))
      return N[t];
    process.env.NODE_ENV !== "production" && ee && (!J(t) || t.indexOf("__v") !== 0) && (r !== S && Do(t[0]) && R(r, t) ? y(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === ee && y(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return r !== S && R(r, t) ? (r[t] = n, !0) : o !== S && R(o, t) ? (o[t] = n, !0) : R(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`, e), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`, e), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, i) {
    let c;
    return !!n[i] || e !== S && R(e, i) || t !== S && R(t, i) || (c = s[0]) && R(c, i) || R(o, i) || R(Et, i) || R(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : R(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (os.ownKeys = (e) => (y("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function fl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Et).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Et[n](e),
      set: Z
    });
  }), t;
}
function al(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Z
    });
  });
}
function dl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(I(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Do(o[0])) {
        y(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Z
      });
    }
  });
}
function pl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Qn = !0;
function hl(e) {
  const t = xo(e), n = e.proxy, o = e.ctx;
  Qn = !1, t.beforeCreate && Zo(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: s,
    methods: i,
    watch: c,
    provide: u,
    inject: a,
    created: h,
    beforeMount: d,
    mounted: N,
    beforeUpdate: V,
    updated: A,
    activated: P,
    deactivated: q,
    beforeDestroy: B,
    beforeUnmount: L,
    destroyed: W,
    unmounted: Oe,
    render: X,
    renderTracked: yt,
    renderTriggered: lt,
    errorCaptured: Ie,
    serverPrefetch: ue,
    expose: we,
    inheritAttrs: Pe,
    components: fe,
    directives: zt,
    filters: Ro
  } = t, Re = process.env.NODE_ENV !== "production" ? pl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [j] = e.propsOptions;
    if (j)
      for (const F in j)
        Re("Props", F);
  }
  if (a && _l(a, o, Re, e.appContext.config.unwrapInjectedRef), i)
    for (const j in i) {
      const F = i[j];
      $(F) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, j, {
        value: F.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[j] = F.bind(n), process.env.NODE_ENV !== "production" && Re("Methods", j)) : process.env.NODE_ENV !== "production" && y(`Method "${j}" has type "${typeof F}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !$(r) && y("The data option must be a function. Plain object usage is no longer supported.");
    const j = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && ao(j) && y("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !k(j))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = go(j), process.env.NODE_ENV !== "production")
      for (const F in j)
        Re("Data", F), Do(F[0]) || Object.defineProperty(o, F, {
          configurable: !0,
          enumerable: !0,
          get: () => j[F],
          set: Z
        });
  }
  if (Qn = !0, s)
    for (const j in s) {
      const F = s[j], me = $(F) ? F.bind(n, n) : $(F.get) ? F.get.bind(n, n) : Z;
      process.env.NODE_ENV !== "production" && me === Z && y(`Computed property "${j}" has no getter.`);
      const Pn = !$(F) && $(F.set) ? F.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(`Write operation failed: computed property "${j}" is readonly.`);
      } : Z, Ot = Ql({
        get: me,
        set: Pn
      });
      Object.defineProperty(o, j, {
        enumerable: !0,
        configurable: !0,
        get: () => Ot.value,
        set: (ct) => Ot.value = ct
      }), process.env.NODE_ENV !== "production" && Re("Computed", j);
    }
  if (c)
    for (const j in c)
      rs(c[j], o, n, j);
  if (u) {
    const j = $(u) ? u.call(n) : u;
    Reflect.ownKeys(j).forEach((F) => {
      Zr(F, j[F]);
    });
  }
  h && Zo(h, e, "c");
  function re(j, F) {
    T(F) ? F.forEach((me) => j(me.bind(n))) : F && j(F.bind(n));
  }
  if (re(Gi, d), re(Dn, N), re(el, V), re(tl, A), re(Xi, P), re(Zi, q), re(il, Ie), re(sl, yt), re(rl, lt), re(nl, L), re(wo, Oe), re(ol, ue), T(we))
    if (we.length) {
      const j = e.exposed || (e.exposed = {});
      we.forEach((F) => {
        Object.defineProperty(j, F, {
          get: () => n[F],
          set: (me) => n[F] = me
        });
      });
    } else
      e.exposed || (e.exposed = {});
  X && e.render === Z && (e.render = X), Pe != null && (e.inheritAttrs = Pe), fe && (e.components = fe), zt && (e.directives = zt);
}
function _l(e, t, n = Z, o = !1) {
  T(e) && (e = Gn(e));
  for (const r in e) {
    const s = e[r];
    let i;
    k(s) ? "default" in s ? i = Mt(s.from || r, s.default, !0) : i = Mt(s.from || r) : i = Mt(s), Y(i) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : (process.env.NODE_ENV !== "production" && y(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = i) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Zo(e, t, n) {
  _e(T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function rs(e, t, n, o) {
  const r = o.includes(".") ? Gr(n, o) : () => n[o];
  if (J(e)) {
    const s = t[e];
    $(s) ? Sn(r, s) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, s);
  } else if ($(e))
    Sn(r, e.bind(n));
  else if (k(e))
    if (T(e))
      e.forEach((s) => rs(s, t, n, o));
    else {
      const s = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(s) ? Sn(r, s, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function xo(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, c = s.get(t);
  let u;
  return c ? u = c : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach((a) => an(u, a, i, !0)), an(u, t, i)), k(t) && s.set(t, u), u;
}
function an(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && an(e, s, n, !0), r && r.forEach((i) => an(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && y('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const c = ml[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const ml = {
  data: Qo,
  props: Ye,
  emits: Ye,
  methods: Ye,
  computed: Ye,
  beforeCreate: ne,
  created: ne,
  beforeMount: ne,
  mounted: ne,
  beforeUpdate: ne,
  updated: ne,
  beforeDestroy: ne,
  beforeUnmount: ne,
  destroyed: ne,
  unmounted: ne,
  activated: ne,
  deactivated: ne,
  errorCaptured: ne,
  serverPrefetch: ne,
  components: Ye,
  directives: Ye,
  watch: El,
  provide: Qo,
  inject: gl
};
function Qo(e, t) {
  return t ? e ? function() {
    return K($(e) ? e.call(this, this) : e, $(t) ? t.call(this, this) : t);
  } : t : e;
}
function gl(e, t) {
  return Ye(Gn(e), Gn(t));
}
function Gn(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ne(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ye(e, t) {
  return e ? K(K(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function El(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = K(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ne(e[o], t[o]);
  return n;
}
function Nl(e, t, n, o = !1) {
  const r = {}, s = {};
  ln(s, $n, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ss(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && ls(t || {}, r, e), n ? e.props = o ? r : pi(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function vl(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function bl(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: i } } = e, c = I(r), [u] = e.propsOptions;
  let a = !1;
  if (!(process.env.NODE_ENV !== "production" && vl(e)) && (o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        let N = h[d];
        if (yn(e.emitsOptions, N))
          continue;
        const V = t[N];
        if (u)
          if (R(s, N))
            V !== s[N] && (s[N] = V, a = !0);
          else {
            const A = Le(N);
            r[A] = eo(u, c, A, V, e, !1);
          }
        else
          V !== s[N] && (s[N] = V, a = !0);
      }
    }
  } else {
    ss(e, t, r, s) && (a = !0);
    let h;
    for (const d in c)
      (!t || !R(t, d) && ((h = he(d)) === d || !R(t, h))) && (u ? n && (n[d] !== void 0 || n[h] !== void 0) && (r[d] = eo(u, c, d, void 0, e, !0)) : delete r[d]);
    if (s !== c)
      for (const d in s)
        (!t || !R(t, d) && !0) && (delete s[d], a = !0);
  }
  a && $e(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && ls(t || {}, r, e);
}
function ss(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if (Gt(u))
        continue;
      const a = t[u];
      let h;
      r && R(r, h = Le(u)) ? !s || !s.includes(h) ? n[h] = a : (c || (c = {}))[h] = a : yn(e.emitsOptions, u) || (!(u in o) || a !== o[u]) && (o[u] = a, i = !0);
    }
  if (s) {
    const u = I(n), a = c || S;
    for (let h = 0; h < s.length; h++) {
      const d = s[h];
      n[d] = eo(r, u, d, a[d], e, !R(a, d));
    }
  }
  return i;
}
function eo(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const c = R(i, "default");
    if (c && o === void 0) {
      const u = i.default;
      if (i.type !== Function && $(u)) {
        const { propsDefaults: a } = r;
        n in a ? o = a[n] : (Nt(r), o = a[n] = u.call(null, t), ot());
      } else
        o = u;
    }
    i[0] && (s && !c ? o = !1 : i[1] && (o === "" || o === he(n)) && (o = !0));
  }
  return o;
}
function is(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, c = [];
  let u = !1;
  if (!$(e)) {
    const h = (d) => {
      u = !0;
      const [N, V] = is(d, t, !0);
      K(i, N), V && c.push(...V);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!s && !u)
    return k(e) && o.set(e, ht), ht;
  if (T(s))
    for (let h = 0; h < s.length; h++) {
      process.env.NODE_ENV !== "production" && !J(s[h]) && y("props must be strings when using array syntax.", s[h]);
      const d = Le(s[h]);
      Go(d) && (i[d] = S);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !k(s) && y("invalid props options", s);
    for (const h in s) {
      const d = Le(h);
      if (Go(d)) {
        const N = s[h], V = i[d] = T(N) || $(N) ? { type: N } : N;
        if (V) {
          const A = tr(Boolean, V.type), P = tr(String, V.type);
          V[0] = A > -1, V[1] = P < 0 || A < P, (A > -1 || R(V, "default")) && c.push(d);
        }
      }
    }
  }
  const a = [i, c];
  return k(e) && o.set(e, a), a;
}
function Go(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function to(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function er(e, t) {
  return to(e) === to(t);
}
function tr(e, t) {
  return T(t) ? t.findIndex((n) => er(n, e)) : $(t) && er(t, e) ? 0 : -1;
}
function ls(e, t, n) {
  const o = I(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && yl(s, o[s], i, !R(e, s) && !R(e, he(s)));
  }
}
function yl(e, t, n, o) {
  const { type: r, required: s, validator: i } = n;
  if (s && o) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let c = !1;
      const u = T(r) ? r : [r], a = [];
      for (let h = 0; h < u.length && !c; h++) {
        const { valid: d, expectedType: N } = wl(t, u[h]);
        a.push(N || ""), c = d;
      }
      if (!c) {
        y(Dl(e, t, a));
        return;
      }
    }
    i && !i(t) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Ol = /* @__PURE__ */ bt("String,Number,Boolean,Function,Symbol,BigInt");
function wl(e, t) {
  let n;
  const o = to(t);
  if (Ol(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = k(e) : o === "Array" ? n = T(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Dl(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(_n).join(" | ")}`;
  const r = n[0], s = po(t), i = nr(t, r), c = nr(t, s);
  return n.length === 1 && or(r) && !xl(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, or(s) && (o += `with value ${c}.`), o;
}
function nr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function or(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function xl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const cs = (e) => e[0] === "_" || e === "$stable", Vo = (e) => T(e) ? e.map(de) : [de(e)], Vl = (e, t, n) => {
  if (t._n)
    return t;
  const o = Ui((...r) => (process.env.NODE_ENV !== "production" && Q && y(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Vo(t(...r))), n);
  return o._c = !1, o;
}, us = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (cs(r))
      continue;
    const s = e[r];
    if ($(s))
      t[r] = Vl(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && y(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const i = Vo(s);
      t[r] = () => i;
    }
  }
}, fs = (e, t) => {
  process.env.NODE_ENV !== "production" && !Oo(e.vnode) && y("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = Vo(t);
  e.slots.default = () => n;
}, Cl = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = I(t), ln(t, "_", n)) : us(t, e.slots = {});
  } else
    e.slots = {}, t && fs(e, t);
  ln(e.slots, $n, 1);
}, $l = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = S;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && nt ? K(r, t) : n && c === 1 ? s = !1 : (K(r, t), !n && c === 1 && delete r._) : (s = !t.$stable, us(t, r)), i = t;
  } else
    t && (fs(e, t), i = { default: 1 });
  if (s)
    for (const c in r)
      !cs(c) && !(c in i) && delete r[c];
};
function as() {
  return {
    app: null,
    config: {
      isNativeTag: gr,
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
let Tl = 0;
function Il(e, t) {
  return function(o, r = null) {
    $(o) || (o = Object.assign({}, o)), r != null && !k(r) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), r = null);
    const s = as(), i = /* @__PURE__ */ new Set();
    let c = !1;
    const u = s.app = {
      _uid: Tl++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: lr,
      get config() {
        return s.config;
      },
      set config(a) {
        process.env.NODE_ENV !== "production" && y("app.config cannot be replaced. Modify individual options instead.");
      },
      use(a, ...h) {
        return i.has(a) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : a && $(a.install) ? (i.add(a), a.install(u, ...h)) : $(a) ? (i.add(a), a(u, ...h)) : process.env.NODE_ENV !== "production" && y('A plugin must either be a function or an object with an "install" function.'), u;
      },
      mixin(a) {
        return s.mixins.includes(a) ? process.env.NODE_ENV !== "production" && y("Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")) : s.mixins.push(a), u;
      },
      component(a, h) {
        return process.env.NODE_ENV !== "production" && oo(a, s.config), h ? (process.env.NODE_ENV !== "production" && s.components[a] && y(`Component "${a}" has already been registered in target app.`), s.components[a] = h, u) : s.components[a];
      },
      directive(a, h) {
        return process.env.NODE_ENV !== "production" && ts(a), h ? (process.env.NODE_ENV !== "production" && s.directives[a] && y(`Directive "${a}" has already been registered in target app.`), s.directives[a] = h, u) : s.directives[a];
      },
      mount(a, h, d) {
        if (c)
          process.env.NODE_ENV !== "production" && y("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && a.__vue_app__ && y("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const N = ye(o, r);
          return N.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(Ke(N), a, d);
          }), h && t ? t(N, a) : e(N, a, d), c = !0, u._container = a, a.__vue_app__ = u, process.env.NODE_ENV !== "production" && (u._instance = N.component, Ri(u, lr)), Tn(N.component) || N.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, u._container), process.env.NODE_ENV !== "production" && (u._instance = null, Mi(u)), delete u._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(a, h) {
        return process.env.NODE_ENV !== "production" && a in s.provides && y(`App already provides property with key "${String(a)}". It will be overwritten with the new value.`), s.provides[a] = h, u;
      }
    };
    return u;
  };
}
function no(e, t, n, o, r = !1) {
  if (T(e)) {
    e.forEach((N, V) => no(N, t && (T(t) ? t[V] : t), n, o, r));
    return;
  }
  if (At(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? Tn(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: c, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    y("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const a = t && t.r, h = c.refs === S ? c.refs = {} : c.refs, d = c.setupState;
  if (a != null && a !== u && (J(a) ? (h[a] = null, R(d, a) && (d[a] = null)) : Y(a) && (a.value = null)), $(u))
    Ce(u, c, 12, [i, h]);
  else {
    const N = J(u), V = Y(u);
    if (N || V) {
      const A = () => {
        if (e.f) {
          const P = N ? h[u] : u.value;
          r ? T(P) && uo(P, s) : T(P) ? P.includes(s) || P.push(s) : N ? (h[u] = [s], R(d, u) && (d[u] = h[u])) : (u.value = [s], e.k && (h[e.k] = u.value));
        } else
          N ? (h[u] = i, R(d, u) && (d[u] = i)) : V ? (u.value = i, e.k && (h[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
      };
      i ? (A.id = -1, se(A, n)) : A();
    } else
      process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
  }
}
let Vt, Se;
function xe(e, t) {
  e.appContext.config.performance && dn() && Se.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Fi(e, t, dn() ? Se.now() : Date.now());
}
function Ve(e, t) {
  if (e.appContext.config.performance && dn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Se.mark(o), Se.measure(`<${In(e, e.type)}> ${t}`, n, o), Se.clearMarks(n), Se.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Si(e, t, dn() ? Se.now() : Date.now());
}
function dn() {
  return Vt !== void 0 || (typeof window < "u" && window.performance ? (Vt = !0, Se = window.performance) : Vt = !1), Vt;
}
function Pl() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const se = Yi;
function Rl(e) {
  return Ml(e);
}
function Ml(e, t) {
  Pl();
  const n = Er();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Wr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: c, createComment: u, setText: a, setElementText: h, parentNode: d, nextSibling: N, setScopeId: V = Z, insertStaticContent: A } = e, P = (l, f, p, m = null, _ = null, v = null, O = !1, E = null, b = process.env.NODE_ENV !== "production" && nt ? !1 : !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !Ct(l, f) && (m = qt(l), Me(l, _, v, !0), l = null), f.patchFlag === -2 && (b = !1, f.dynamicChildren = null);
    const { type: g, ref: D, shapeFlag: w } = f;
    switch (g) {
      case xn:
        q(l, f, p, m);
        break;
      case ce:
        B(l, f, p, m);
        break;
      case on:
        l == null ? L(f, p, m, O) : process.env.NODE_ENV !== "production" && W(l, f, p, O);
        break;
      case le:
        zt(l, f, p, m, _, v, O, E, b);
        break;
      default:
        w & 1 ? yt(l, f, p, m, _, v, O, E, b) : w & 6 ? Ro(l, f, p, m, _, v, O, E, b) : w & 64 || w & 128 ? g.process(l, f, p, m, _, v, O, E, b, ut) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", g, `(${typeof g})`);
    }
    D != null && _ && no(D, l && l.ref, v, f || l, !f);
  }, q = (l, f, p, m) => {
    if (l == null)
      o(f.el = c(f.children), p, m);
    else {
      const _ = f.el = l.el;
      f.children !== l.children && a(_, f.children);
    }
  }, B = (l, f, p, m) => {
    l == null ? o(f.el = u(f.children || ""), p, m) : f.el = l.el;
  }, L = (l, f, p, m) => {
    [l.el, l.anchor] = A(l.children, f, p, m, l.el, l.anchor);
  }, W = (l, f, p, m) => {
    if (f.children !== l.children) {
      const _ = N(l.anchor);
      X(l), [f.el, f.anchor] = A(f.children, p, _, m);
    } else
      f.el = l.el, f.anchor = l.anchor;
  }, Oe = ({ el: l, anchor: f }, p, m) => {
    let _;
    for (; l && l !== f; )
      _ = N(l), o(l, p, m), l = _;
    o(f, p, m);
  }, X = ({ el: l, anchor: f }) => {
    let p;
    for (; l && l !== f; )
      p = N(l), r(l), l = p;
    r(f);
  }, yt = (l, f, p, m, _, v, O, E, b) => {
    O = O || f.type === "svg", l == null ? lt(f, p, m, _, v, O, E, b) : we(l, f, _, v, O, E, b);
  }, lt = (l, f, p, m, _, v, O, E) => {
    let b, g;
    const { type: D, props: w, shapeFlag: x, transition: C, dirs: M } = l;
    if (b = l.el = i(l.type, v, w && w.is, w), x & 8 ? h(b, l.children) : x & 16 && ue(l.children, b, null, m, _, v && D !== "foreignObject", O, E), M && We(l, null, m, "created"), w) {
      for (const H in w)
        H !== "value" && !Gt(H) && s(b, H, null, w[H], v, l.children, m, _, De);
      "value" in w && s(b, "value", null, w.value), (g = w.onVnodeBeforeMount) && Ee(g, m, l);
    }
    Ie(b, l, l.scopeId, O, m), process.env.NODE_ENV !== "production" && (Object.defineProperty(b, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(b, "__vueParentComponent", {
      value: m,
      enumerable: !1
    })), M && We(l, null, m, "beforeMount");
    const U = (!_ || _ && !_.pendingBranch) && C && !C.persisted;
    U && C.beforeEnter(b), o(b, f, p), ((g = w && w.onVnodeMounted) || U || M) && se(() => {
      g && Ee(g, m, l), U && C.enter(b), M && We(l, null, m, "mounted");
    }, _);
  }, Ie = (l, f, p, m, _) => {
    if (p && V(l, p), m)
      for (let v = 0; v < m.length; v++)
        V(l, m[v]);
    if (_) {
      let v = _.subTree;
      if (process.env.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = Xr(v.children) || v), f === v) {
        const O = _.vnode;
        Ie(l, O, O.scopeId, O.slotScopeIds, _.parent);
      }
    }
  }, ue = (l, f, p, m, _, v, O, E, b = 0) => {
    for (let g = b; g < l.length; g++) {
      const D = l[g] = E ? Fe(l[g]) : de(l[g]);
      P(null, D, f, p, m, _, v, O, E);
    }
  }, we = (l, f, p, m, _, v, O) => {
    const E = f.el = l.el;
    let { patchFlag: b, dynamicChildren: g, dirs: D } = f;
    b |= l.patchFlag & 16;
    const w = l.props || S, x = f.props || S;
    let C;
    p && ze(p, !1), (C = x.onVnodeBeforeUpdate) && Ee(C, p, f, l), D && We(f, l, p, "beforeUpdate"), p && ze(p, !0), process.env.NODE_ENV !== "production" && nt && (b = 0, O = !1, g = null);
    const M = _ && f.type !== "foreignObject";
    if (g ? (Pe(l.dynamicChildren, g, E, p, m, M, v), process.env.NODE_ENV !== "production" && p && p.type.__hmrId && nn(l, f)) : O || me(l, f, E, null, p, m, M, v, !1), b > 0) {
      if (b & 16)
        fe(E, f, w, x, p, m, _);
      else if (b & 2 && w.class !== x.class && s(E, "class", null, x.class, _), b & 4 && s(E, "style", w.style, x.style, _), b & 8) {
        const U = f.dynamicProps;
        for (let H = 0; H < U.length; H++) {
          const z = U[H], ae = w[z], ft = x[z];
          (ft !== ae || z === "value") && s(E, z, ae, ft, _, l.children, p, m, De);
        }
      }
      b & 1 && l.children !== f.children && h(E, f.children);
    } else
      !O && g == null && fe(E, f, w, x, p, m, _);
    ((C = x.onVnodeUpdated) || D) && se(() => {
      C && Ee(C, p, f, l), D && We(f, l, p, "updated");
    }, m);
  }, Pe = (l, f, p, m, _, v, O) => {
    for (let E = 0; E < f.length; E++) {
      const b = l[E], g = f[E], D = b.el && (b.type === le || !Ct(b, g) || b.shapeFlag & 70) ? d(b.el) : p;
      P(b, g, D, null, m, _, v, O, !0);
    }
  }, fe = (l, f, p, m, _, v, O) => {
    if (p !== m) {
      if (p !== S)
        for (const E in p)
          !Gt(E) && !(E in m) && s(l, E, p[E], null, O, f.children, _, v, De);
      for (const E in m) {
        if (Gt(E))
          continue;
        const b = m[E], g = p[E];
        b !== g && E !== "value" && s(l, E, g, b, O, f.children, _, v, De);
      }
      "value" in m && s(l, "value", p.value, m.value);
    }
  }, zt = (l, f, p, m, _, v, O, E, b) => {
    const g = f.el = l ? l.el : c(""), D = f.anchor = l ? l.anchor : c("");
    let { patchFlag: w, dynamicChildren: x, slotScopeIds: C } = f;
    process.env.NODE_ENV !== "production" && (nt || w & 2048) && (w = 0, b = !1, x = null), C && (E = E ? E.concat(C) : C), l == null ? (o(g, p, m), o(D, p, m), ue(f.children, p, D, _, v, O, E, b)) : w > 0 && w & 64 && x && l.dynamicChildren ? (Pe(l.dynamicChildren, x, p, _, v, O, E), process.env.NODE_ENV !== "production" && _ && _.type.__hmrId ? nn(l, f) : (f.key != null || _ && f === _.subTree) && nn(l, f, !0)) : me(l, f, p, D, _, v, O, E, b);
  }, Ro = (l, f, p, m, _, v, O, E, b) => {
    f.slotScopeIds = E, l == null ? f.shapeFlag & 512 ? _.ctx.activate(f, p, m, O, b) : Re(f, p, m, _, v, O, b) : re(l, f, b);
  }, Re = (l, f, p, m, _, v, O) => {
    const E = l.component = Kl(l, m, _);
    if (process.env.NODE_ENV !== "production" && E.type.__hmrId && $i(E), process.env.NODE_ENV !== "production" && (en(l), xe(E, "mount")), Oo(l) && (E.ctx.renderer = ut), process.env.NODE_ENV !== "production" && xe(E, "init"), zl(E), process.env.NODE_ENV !== "production" && Ve(E, "init"), E.asyncDep) {
      if (_ && _.registerDep(E, j), !l.el) {
        const b = E.subTree = ye(ce);
        B(null, b, f, p);
      }
      return;
    }
    j(E, l, f, p, _, v, O), process.env.NODE_ENV !== "production" && (tn(), Ve(E, "mount"));
  }, re = (l, f, p) => {
    const m = f.component = l.component;
    if (Wi(l, f, p))
      if (m.asyncDep && !m.asyncResolved) {
        process.env.NODE_ENV !== "production" && en(f), F(m, f, p), process.env.NODE_ENV !== "production" && tn();
        return;
      } else
        m.next = f, Vi(m.update), m.update();
    else
      f.el = l.el, m.vnode = f;
  }, j = (l, f, p, m, _, v, O) => {
    const E = () => {
      if (l.isMounted) {
        let { next: D, bu: w, u: x, parent: C, vnode: M } = l, U = D, H;
        process.env.NODE_ENV !== "production" && en(D || l.vnode), ze(l, !1), D ? (D.el = M.el, F(l, D, O)) : D = M, w && xt(w), (H = D.props && D.props.onVnodeBeforeUpdate) && Ee(H, C, D, M), ze(l, !0), process.env.NODE_ENV !== "production" && xe(l, "render");
        const z = Fn(l);
        process.env.NODE_ENV !== "production" && Ve(l, "render");
        const ae = l.subTree;
        l.subTree = z, process.env.NODE_ENV !== "production" && xe(l, "patch"), P(
          ae,
          z,
          d(ae.el),
          qt(ae),
          l,
          _,
          v
        ), process.env.NODE_ENV !== "production" && Ve(l, "patch"), D.el = z.el, U === null && zi(l, z.el), x && se(x, _), (H = D.props && D.props.onVnodeUpdated) && se(() => Ee(H, C, D, M), _), process.env.NODE_ENV !== "production" && zr(l), process.env.NODE_ENV !== "production" && tn();
      } else {
        let D;
        const { el: w, props: x } = f, { bm: C, m: M, parent: U } = l, H = At(f);
        if (ze(l, !1), C && xt(C), !H && (D = x && x.onVnodeBeforeMount) && Ee(D, U, f), ze(l, !0), w && An) {
          const z = () => {
            process.env.NODE_ENV !== "production" && xe(l, "render"), l.subTree = Fn(l), process.env.NODE_ENV !== "production" && Ve(l, "render"), process.env.NODE_ENV !== "production" && xe(l, "hydrate"), An(w, l.subTree, l, _, null), process.env.NODE_ENV !== "production" && Ve(l, "hydrate");
          };
          H ? f.type.__asyncLoader().then(
            () => !l.isUnmounted && z()
          ) : z();
        } else {
          process.env.NODE_ENV !== "production" && xe(l, "render");
          const z = l.subTree = Fn(l);
          process.env.NODE_ENV !== "production" && Ve(l, "render"), process.env.NODE_ENV !== "production" && xe(l, "patch"), P(null, z, p, m, l, _, v), process.env.NODE_ENV !== "production" && Ve(l, "patch"), f.el = z.el;
        }
        if (M && se(M, _), !H && (D = x && x.onVnodeMounted)) {
          const z = f;
          se(() => Ee(D, U, z), _);
        }
        (f.shapeFlag & 256 || U && At(U.vnode) && U.vnode.shapeFlag & 256) && l.a && se(l.a, _), l.isMounted = !0, process.env.NODE_ENV !== "production" && Ai(l), f = p = m = null;
      }
    }, b = l.effect = new _o(
      E,
      () => bn(g),
      l.scope
    ), g = l.update = () => b.run();
    g.id = l.uid, ze(l, !0), process.env.NODE_ENV !== "production" && (b.onTrack = l.rtc ? (D) => xt(l.rtc, D) : void 0, b.onTrigger = l.rtg ? (D) => xt(l.rtg, D) : void 0, g.ownerInstance = l), g();
  }, F = (l, f, p) => {
    f.component = l;
    const m = l.vnode.props;
    l.vnode = f, l.next = null, bl(l, f.props, m, p), $l(l, f.children, p), st(), zo(), it();
  }, me = (l, f, p, m, _, v, O, E, b = !1) => {
    const g = l && l.children, D = l ? l.shapeFlag : 0, w = f.children, { patchFlag: x, shapeFlag: C } = f;
    if (x > 0) {
      if (x & 128) {
        Ot(g, w, p, m, _, v, O, E, b);
        return;
      } else if (x & 256) {
        Pn(g, w, p, m, _, v, O, E, b);
        return;
      }
    }
    C & 8 ? (D & 16 && De(g, _, v), w !== g && h(p, w)) : D & 16 ? C & 16 ? Ot(g, w, p, m, _, v, O, E, b) : De(g, _, v, !0) : (D & 8 && h(p, ""), C & 16 && ue(w, p, m, _, v, O, E, b));
  }, Pn = (l, f, p, m, _, v, O, E, b) => {
    l = l || ht, f = f || ht;
    const g = l.length, D = f.length, w = Math.min(g, D);
    let x;
    for (x = 0; x < w; x++) {
      const C = f[x] = b ? Fe(f[x]) : de(f[x]);
      P(l[x], C, p, null, _, v, O, E, b);
    }
    g > D ? De(l, _, v, !0, !1, w) : ue(f, p, m, _, v, O, E, b, w);
  }, Ot = (l, f, p, m, _, v, O, E, b) => {
    let g = 0;
    const D = f.length;
    let w = l.length - 1, x = D - 1;
    for (; g <= w && g <= x; ) {
      const C = l[g], M = f[g] = b ? Fe(f[g]) : de(f[g]);
      if (Ct(C, M))
        P(C, M, p, null, _, v, O, E, b);
      else
        break;
      g++;
    }
    for (; g <= w && g <= x; ) {
      const C = l[w], M = f[x] = b ? Fe(f[x]) : de(f[x]);
      if (Ct(C, M))
        P(C, M, p, null, _, v, O, E, b);
      else
        break;
      w--, x--;
    }
    if (g > w) {
      if (g <= x) {
        const C = x + 1, M = C < D ? f[C].el : m;
        for (; g <= x; )
          P(null, f[g] = b ? Fe(f[g]) : de(f[g]), p, M, _, v, O, E, b), g++;
      }
    } else if (g > x)
      for (; g <= w; )
        Me(l[g], _, v, !0), g++;
    else {
      const C = g, M = g, U = /* @__PURE__ */ new Map();
      for (g = M; g <= x; g++) {
        const te = f[g] = b ? Fe(f[g]) : de(f[g]);
        te.key != null && (process.env.NODE_ENV !== "production" && U.has(te.key) && y("Duplicate keys found during update:", JSON.stringify(te.key), "Make sure keys are unique."), U.set(te.key, g));
      }
      let H, z = 0;
      const ae = x - M + 1;
      let ft = !1, Ao = 0;
      const wt = new Array(ae);
      for (g = 0; g < ae; g++)
        wt[g] = 0;
      for (g = C; g <= w; g++) {
        const te = l[g];
        if (z >= ae) {
          Me(te, _, v, !0);
          continue;
        }
        let ge;
        if (te.key != null)
          ge = U.get(te.key);
        else
          for (H = M; H <= x; H++)
            if (wt[H - M] === 0 && Ct(te, f[H])) {
              ge = H;
              break;
            }
        ge === void 0 ? Me(te, _, v, !0) : (wt[ge - M] = g + 1, ge >= Ao ? Ao = ge : ft = !0, P(te, f[ge], p, null, _, v, O, E, b), z++);
      }
      const jo = ft ? Al(wt) : ht;
      for (H = jo.length - 1, g = ae - 1; g >= 0; g--) {
        const te = M + g, ge = f[te], Fo = te + 1 < D ? f[te + 1].el : m;
        wt[g] === 0 ? P(null, ge, p, Fo, _, v, O, E, b) : ft && (H < 0 || g !== jo[H] ? ct(ge, p, Fo, 2) : H--);
      }
    }
  }, ct = (l, f, p, m, _ = null) => {
    const { el: v, type: O, transition: E, children: b, shapeFlag: g } = l;
    if (g & 6) {
      ct(l.component.subTree, f, p, m);
      return;
    }
    if (g & 128) {
      l.suspense.move(f, p, m);
      return;
    }
    if (g & 64) {
      O.move(l, f, p, ut);
      return;
    }
    if (O === le) {
      o(v, f, p);
      for (let w = 0; w < b.length; w++)
        ct(b[w], f, p, m);
      o(l.anchor, f, p);
      return;
    }
    if (O === on) {
      Oe(l, f, p);
      return;
    }
    if (m !== 2 && g & 1 && E)
      if (m === 0)
        E.beforeEnter(v), o(v, f, p), se(() => E.enter(v), _);
      else {
        const { leave: w, delayLeave: x, afterLeave: C } = E, M = () => o(v, f, p), U = () => {
          w(v, () => {
            M(), C && C();
          });
        };
        x ? x(v, M, U) : U();
      }
    else
      o(v, f, p);
  }, Me = (l, f, p, m = !1, _ = !1) => {
    const { type: v, props: O, ref: E, children: b, dynamicChildren: g, shapeFlag: D, patchFlag: w, dirs: x } = l;
    if (E != null && no(E, null, p, l, !0), D & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const C = D & 1 && x, M = !At(l);
    let U;
    if (M && (U = O && O.onVnodeBeforeUnmount) && Ee(U, f, l), D & 6)
      Os(l.component, p, m);
    else {
      if (D & 128) {
        l.suspense.unmount(p, m);
        return;
      }
      C && We(l, null, f, "beforeUnmount"), D & 64 ? l.type.remove(l, f, p, _, ut, m) : g && (v !== le || w > 0 && w & 64) ? De(g, f, p, !1, !0) : (v === le && w & 384 || !_ && D & 16) && De(b, f, p), m && Rn(l);
    }
    (M && (U = O && O.onVnodeUnmounted) || C) && se(() => {
      U && Ee(U, f, l), C && We(l, null, f, "unmounted");
    }, p);
  }, Rn = (l) => {
    const { type: f, el: p, anchor: m, transition: _ } = l;
    if (f === le) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && _ && !_.persisted ? l.children.forEach((O) => {
        O.type === ce ? r(O.el) : Rn(O);
      }) : ys(p, m);
      return;
    }
    if (f === on) {
      X(l);
      return;
    }
    const v = () => {
      r(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (l.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: O, delayLeave: E } = _, b = () => O(p, v);
      E ? E(l.el, v, b) : b();
    } else
      v();
  }, ys = (l, f) => {
    let p;
    for (; l !== f; )
      p = N(l), r(l), l = p;
    r(f);
  }, Os = (l, f, p) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Ti(l);
    const { bum: m, scope: _, update: v, subTree: O, um: E } = l;
    m && xt(m), _.stop(), v && (v.active = !1, Me(O, l, f, p)), E && se(E, f), se(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && ji(l);
  }, De = (l, f, p, m = !1, _ = !1, v = 0) => {
    for (let O = v; O < l.length; O++)
      Me(l[O], f, p, m, _);
  }, qt = (l) => l.shapeFlag & 6 ? qt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : N(l.anchor || l.el), Mo = (l, f, p) => {
    l == null ? f._vnode && Me(f._vnode, null, null, !0) : P(f._vnode || null, l, f, null, null, null, p), zo(), kr(), f._vnode = l;
  }, ut = {
    p: P,
    um: Me,
    m: ct,
    r: Rn,
    mt: Re,
    mc: ue,
    pc: me,
    pbc: Pe,
    n: qt,
    o: e
  };
  let Mn, An;
  return t && ([Mn, An] = t(ut)), {
    render: Mo,
    hydrate: Mn,
    createApp: Il(Mo, Mn)
  };
}
function ze({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function nn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (T(o) && T(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let c = r[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[s] = Fe(r[s]), c.el = i.el), n || nn(i, c)), process.env.NODE_ENV !== "production" && c.type === ce && !c.el && (c.el = i.el);
    }
}
function Al(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, c;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const a = e[o];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        c = s + i >> 1, e[n[c]] < a ? s = c + 1 : i = c;
      a < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const jl = (e) => e.__isTeleport, le = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), xn = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), ce = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), on = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), jt = [];
let pe = null;
function Vn(e = !1) {
  jt.push(pe = e ? null : []);
}
function Fl() {
  jt.pop(), pe = jt[jt.length - 1] || null;
}
let kt = 1;
function rr(e) {
  kt += e;
}
function ds(e) {
  return e.dynamicChildren = kt > 0 ? pe || ht : null, Fl(), kt > 0 && pe && pe.push(e), e;
}
function Co(e, t, n, o, r, s) {
  return ds(Be(e, t, n, o, r, s, !0));
}
function Sl(e, t, n, o, r) {
  return ds(ye(e, t, n, o, r, !0));
}
function Cn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ct(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && at.has(t.type) ? !1 : e.type === t.type && e.key === t.key;
}
const Hl = (...e) => hs(...e), $n = "__vInternal", ps = ({ key: e }) => e != null ? e : null, rn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? J(e) || Y(e) || $(e) ? { i: ee, r: e, k: t, f: !!n } : e : null;
function Be(e, t = null, n = null, o = 0, r = null, s = e === le ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ps(t),
    ref: t && rn(t),
    scopeId: Jr,
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
    appContext: null
  };
  return c ? ($o(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= J(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && y("VNode created with invalid key (NaN). VNode type:", u.type), kt > 0 && !i && pe && (u.patchFlag > 0 || s & 6) && u.patchFlag !== 32 && pe.push(u), u;
}
const ye = process.env.NODE_ENV !== "production" ? Hl : hs;
function hs(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === cl) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = ce), Cn(e)) {
    const c = Ke(e, t, !0);
    return n && $o(c, n), kt > 0 && !s && pe && (c.shapeFlag & 6 ? pe[pe.indexOf(e)] = c : pe.push(c)), c.patchFlag |= -2, c;
  }
  if (vs(e) && (e = e.__vccOpts), t) {
    t = Ll(t);
    let { class: c, style: u } = t;
    c && !J(c) && (t.class = co(c)), k(u) && (qn(u) && !T(u) && (u = K({}, u)), t.style = lo(u));
  }
  const i = J(e) ? 1 : qi(e) ? 128 : jl(e) ? 64 : k(e) ? 4 : $(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && qn(e) && (e = I(e), y("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), Be(e, t, n, o, r, i, s, !0);
}
function Ll(e) {
  return e ? qn(e) || $n in e ? K({}, e) : e : null;
}
function Ke(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, c = t ? ms(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ps(c),
    ref: t && t.ref ? n && r ? T(r) ? r.concat(rn(t)) : [r, rn(t)] : rn(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && T(i) ? i.map(_s) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== le ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ke(e.ssContent),
    ssFallback: e.ssFallback && Ke(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function _s(e) {
  const t = Ke(e);
  return T(e.children) && (t.children = e.children.map(_s)), t;
}
function Ul(e = " ", t = 0) {
  return ye(xn, null, e, t);
}
function de(e) {
  return e == null || typeof e == "boolean" ? ye(ce) : T(e) ? ye(
    le,
    null,
    e.slice()
  ) : typeof e == "object" ? Fe(e) : ye(xn, null, String(e));
}
function Fe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ke(e);
}
function $o(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), $o(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !($n in t) ? t._ctx = ee : r === 3 && ee && (ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    $(t) ? (t = { default: t, _ctx: ee }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ul(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ms(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = co([t.class, o.class]));
      else if (r === "style")
        t.style = lo([t.style, o.style]);
      else if (Kt(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(T(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Ee(e, t, n, o = null) {
  _e(e, t, 7, [
    n,
    o
  ]);
}
const kl = as();
let Bl = 0;
function Kl(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || kl, s = {
    uid: Bl++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Hs(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: is(o, r),
    emitsOptions: Yr(o, r),
    emit: null,
    emitted: null,
    propsDefaults: S,
    inheritAttrs: o.inheritAttrs,
    ctx: S,
    data: S,
    props: S,
    attrs: S,
    slots: S,
    refs: S,
    setupState: S,
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
  return process.env.NODE_ENV !== "production" ? s.ctx = fl(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Li.bind(null, s), e.ce && e.ce(s), s;
}
let Q = null;
const Nt = (e) => {
  Q = e, e.scope.on();
}, ot = () => {
  Q && Q.scope.off(), Q = null;
}, Wl = /* @__PURE__ */ bt("slot,component");
function oo(e, t) {
  const n = t.isNativeTag || gr;
  (Wl(e) || n(e)) && y("Do not use built-in or reserved HTML elements as component id: " + e);
}
function gs(e) {
  return e.vnode.shapeFlag & 4;
}
let Bt = !1;
function zl(e, t = !1) {
  Bt = t;
  const { props: n, children: o } = e.vnode, r = gs(e);
  Nl(e, n, r, t), Cl(e, o);
  const s = r ? ql(e, t) : void 0;
  return Bt = !1, s;
}
function ql(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && oo(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        oo(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        ts(s[i]);
    }
    o.compilerOptions && Yl() && y('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Pr(new Proxy(e.ctx, os)), process.env.NODE_ENV !== "production" && al(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? Jl(e) : null;
    Nt(e), st();
    const i = Ce(r, e, 0, [process.env.NODE_ENV !== "production" ? pt(e.props) : e.props, s]);
    if (it(), ot(), ao(i)) {
      if (i.then(ot, ot), t)
        return i.then((c) => {
          sr(e, c, t);
        }).catch((c) => {
          vn(c, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        y(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      sr(e, i, t);
  } else
    Es(e, t);
}
function sr(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : k(t) ? (process.env.NODE_ENV !== "production" && Cn(t) && y("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ar(t), process.env.NODE_ENV !== "production" && dl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Es(e, n);
}
let ro;
const Yl = () => !ro;
function Es(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && ro && !o.render) {
      const r = o.template || xo(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && xe(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: u } = o, a = K(K({
          isCustomElement: s,
          delimiters: c
        }, i), u);
        o.render = ro(r, a), process.env.NODE_ENV !== "production" && Ve(e, "compile");
      }
    }
    e.render = o.render || Z;
  }
  Nt(e), st(), hl(e), it(), ot(), process.env.NODE_ENV !== "production" && !o.render && e.render === Z && !t && (o.template ? y('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : y("Component is missing template or render function."));
}
function ir(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return fn(), ie(e, "get", "$attrs"), t[n];
    },
    set() {
      return y("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return y("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return ie(e, "get", "$attrs"), t[n];
    }
  });
}
function Jl(e) {
  const t = (o) => {
    process.env.NODE_ENV !== "production" && e.exposed && y("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = ir(e));
    },
    get slots() {
      return pt(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = ir(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Tn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ar(Pr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Et)
          return Et[n](e);
      }
    }));
}
const Xl = /(?:^|[-_])(\w)/g, Zl = (e) => e.replace(Xl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ns(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function In(e, t, n = !1) {
  let o = Ns(t);
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
    o = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return o ? Zl(o) : n ? "App" : "Anonymous";
}
function vs(e) {
  return $(e) && "__vccOpts" in e;
}
const Ql = (e, t) => Ni(e, t, Bt);
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function Hn(e) {
  return !!(e && e.__v_isShallow);
}
function Gl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(d) {
      return k(d) ? d.__isVue ? ["div", e, "VueInstance"] : Y(d) ? [
        "div",
        {},
        ["span", e, h(d)],
        "<",
        c(d.value),
        ">"
      ] : et(d) ? [
        "div",
        {},
        ["span", e, Hn(d) ? "ShallowReactive" : "Reactive"],
        "<",
        c(d),
        `>${ke(d) ? " (readonly)" : ""}`
      ] : ke(d) ? [
        "div",
        {},
        ["span", e, Hn(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(d),
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
          ...s(d.$)
        ];
    }
  };
  function s(d) {
    const N = [];
    d.type.props && d.props && N.push(i("props", I(d.props))), d.setupState !== S && N.push(i("setup", d.setupState)), d.data !== S && N.push(i("data", I(d.data)));
    const V = u(d, "computed");
    V && N.push(i("computed", V));
    const A = u(d, "inject");
    return A && N.push(i("injected", A)), N.push([
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
    ]), N;
  }
  function i(d, N) {
    return N = K({}, N), Object.keys(N).length ? [
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
        ...Object.keys(N).map((V) => [
          "div",
          {},
          ["span", o, V + ": "],
          c(N[V], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(d, N = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : k(d) ? ["object", { object: N ? I(d) : d }] : ["span", n, String(d)];
  }
  function u(d, N) {
    const V = d.type;
    if ($(V))
      return;
    const A = {};
    for (const P in d.ctx)
      a(V, P, N) && (A[P] = d.ctx[P]);
    return A;
  }
  function a(d, N, V) {
    const A = d[V];
    if (T(A) && A.includes(N) || k(A) && N in A || d.extends && a(d.extends, N, V) || d.mixins && d.mixins.some((P) => a(P, N, V)))
      return !0;
  }
  function h(d) {
    return Hn(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const lr = "3.2.40", ec = "http://www.w3.org/2000/svg", Xe = typeof document < "u" ? document : null, cr = Xe && /* @__PURE__ */ Xe.createElement("template"), tc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? Xe.createElementNS(ec, e) : Xe.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Xe.createTextNode(e),
  createComment: (e) => Xe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Xe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      cr.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = cr.content;
      if (o) {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      i ? i.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function nc(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function oc(e, t, n) {
  const o = e.style, r = J(n);
  if (n && !r) {
    for (const s in n)
      so(o, s, n[s]);
    if (t && !J(t))
      for (const s in t)
        n[s] == null && so(o, s, "");
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const ur = /\s*!important$/;
function so(e, t, n) {
  if (T(n))
    n.forEach((o) => so(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = rc(e, t);
    ur.test(n) ? e.setProperty(he(o), n.replace(ur, ""), "important") : e[o] = n;
  }
}
const fr = ["Webkit", "Moz", "ms"], Ln = {};
function rc(e, t) {
  const n = Ln[t];
  if (n)
    return n;
  let o = Le(t);
  if (o !== "filter" && o in e)
    return Ln[t] = o;
  o = _n(o);
  for (let r = 0; r < fr.length; r++) {
    const s = fr[r] + o;
    if (s in e)
      return Ln[t] = s;
  }
  return t;
}
const ar = "http://www.w3.org/1999/xlink";
function sc(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ar, t.slice(6, t.length)) : e.setAttributeNS(ar, t, n);
  else {
    const s = Vs(t);
    n == null || s && !mr(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function ic(e, t, n, o, r, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, r, s), e[t] = n == null ? "" : n;
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const u = n == null ? "" : n;
    (e.value !== u || e.tagName === "OPTION") && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = mr(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (u) {
    process.env.NODE_ENV !== "production" && !c && y(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, u);
  }
  c && e.removeAttribute(t);
}
const [bs, lc] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let io = 0;
const cc = /* @__PURE__ */ Promise.resolve(), uc = () => {
  io = 0;
}, fc = () => io || (cc.then(uc), io = bs());
function ac(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function dc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function pc(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [c, u] = hc(t);
    if (o) {
      const a = s[t] = _c(o, r);
      ac(e, c, a, u);
    } else
      i && (dc(e, c, i, u), s[t] = void 0);
  }
}
const dr = /(?:Once|Passive|Capture)$/;
function hc(e) {
  let t;
  if (dr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(dr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : he(e.slice(2)), t];
}
function _c(e, t) {
  const n = (o) => {
    const r = o.timeStamp || bs();
    (lc || r >= n.attached - 1) && _e(mc(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = fc(), n;
}
function mc(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const pr = /^on[a-z]/, gc = (e, t, n, o, r = !1, s, i, c, u) => {
  t === "class" ? nc(e, o, r) : t === "style" ? oc(e, n, o) : Kt(t) ? sn(t) || pc(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ec(e, t, o, r)) ? ic(e, t, o, s, i, c, u) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), sc(e, t, o, r));
};
function Ec(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && pr.test(t) && $(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || pr.test(t) && J(n) ? !1 : t in e;
}
function To(e, t) {
  const n = On(e);
  class o extends Io {
    constructor(s) {
      super(n, s, t);
    }
  }
  return o.def = n, o;
}
const Nc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Io extends Nc {
  constructor(t, n = {}, o) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && y("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), this.attachShadow({ mode: "open" }));
  }
  connectedCallback() {
    this._connected = !0, this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    this._connected = !1, Hr(() => {
      this._connected || (_r(null, this.shadowRoot), this._instance = null);
    });
  }
  _resolveDef() {
    if (this._resolved)
      return;
    this._resolved = !0;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    new MutationObserver((o) => {
      for (const r of o)
        this._setAttr(r.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (o) => {
      const { props: r, styles: s } = o, i = !T(r), c = r ? i ? Object.keys(r) : r : [];
      let u;
      if (i)
        for (const a in this._props) {
          const h = r[a];
          (h === Number || h && h.type === Number) && (this._props[a] = Un(this._props[a]), (u || (u = /* @__PURE__ */ Object.create(null)))[a] = !0);
        }
      this._numberProps = u;
      for (const a of Object.keys(this))
        a[0] !== "_" && this._setProp(a, this[a], !0, !1);
      for (const a of c.map(Le))
        Object.defineProperty(this, a, {
          get() {
            return this._getProp(a);
          },
          set(h) {
            this._setProp(a, h);
          }
        });
      this._applyStyles(s), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then(t) : t(this._def);
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    this._numberProps && this._numberProps[t] && (n = Un(n)), this._setProp(Le(t), n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, o = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), o && (n === !0 ? this.setAttribute(he(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(he(t), n + "") : n || this.removeAttribute(he(t))));
  }
  _update() {
    _r(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = ye(this._def, K({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, process.env.NODE_ENV !== "production" && (n.ceReload = (r) => {
        this._styles && (this._styles.forEach((s) => this.shadowRoot.removeChild(s)), this._styles.length = 0), this._applyStyles(r), this._def.__asyncLoader || (this._instance = null, this._update());
      }), n.emit = (r, ...s) => {
        this.dispatchEvent(new CustomEvent(r, {
          detail: s
        }));
      };
      let o = this;
      for (; o = o && (o.parentNode || o.host); )
        if (o instanceof Io) {
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
const vc = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : $t(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), $t(e, !0), o.enter(e)) : o.leave(e, () => {
      $t(e, !1);
    }) : $t(e, t));
  },
  beforeUnmount(e, { value: t }) {
    $t(e, t);
  }
};
function $t(e, t) {
  e.style.display = t ? e._vod : "none";
}
const bc = /* @__PURE__ */ K({ patchProp: gc }, tc);
let hr;
function yc() {
  return hr || (hr = Rl(bc));
}
const _r = (...e) => {
  yc().render(...e);
};
function Oc() {
  Gl();
}
process.env.NODE_ENV !== "production" && Oc();
const wc = Vc(() => {
  xc({
    on(e, t) {
      const n = this;
      return n.$el.addEventListener(e, t), n;
    },
    once(e, t) {
      const n = this, o = (r) => (n.off(e, o), t(r));
      return n.on(e, o);
    },
    off(e, t) {
      const n = this;
      return n.$el.removeEventListener(e, t), n;
    }
  });
});
let Dc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
const Ze = class {
  constructor(t, n) {
    Dt(this, "id");
    Dt(this, "$el");
    Dt(this, "$containerEl");
    this.id = `player-${Dc(10)}`, this.$el = t, this.$containerEl = n, Ze.modules_.forEach((o) => o(this));
  }
  get currentTime() {
    return this.$el.currentTime;
  }
  set currentTime(t) {
    this.$el.currentTime = t;
  }
  get duration() {
    return this.$el.duration;
  }
  get played() {
    return this.$el.played;
  }
  get paused() {
    return this.$el.paused;
  }
  play() {
    return this.$el.play();
  }
  pause() {
    this.$el.pause();
  }
  togglePlay() {
    this.paused ? this.play() : this.pause();
  }
  static installModule(t) {
    !!t && Ze.modules_.indexOf(t) < 0 && Ze.modules_.push(t);
  }
  static use(t) {
    return t.forEach((n) => Ze.installModule(n)), Ze;
  }
};
let gt = Ze;
Dt(gt, "modules_", []);
function xc(e) {
  Object.keys(e).forEach((t) => {
    gt.prototype[t] = e[t];
  });
}
gt.use([wc]);
function Vc(e) {
  return function(t) {
    return e(t), t;
  };
}
var vt = /* @__PURE__ */ ((e) => (e.Created = "created", e.TimeUpdate = "timeupdate", e.LoadStart = "loadstart", e.Play = "play", e.Pause = "pause", e.Playing = "playing", e))(vt || {});
const Cc = { class: "lpr" }, $c = ["id", "src"], Tc = /* @__PURE__ */ On({
  __name: "VideoPlayer",
  props: {
    src: { default: "" }
  },
  emits: [vt.Created],
  setup(e, { emit: t }) {
    const n = Pt(), o = Pt(), r = Pt();
    Dn(() => {
      !n.value || !o.value || (console.log(), r.value = new gt(n.value, o.value), Zr("player", r.value), t(vt.Created, r.value));
    });
    const s = () => {
      !r.value || r.value.togglePlay();
    };
    return (i, c) => (Vn(), Co("div", Cc, [
      Be("video", ms({
        id: r.value && r.value.id,
        src: e.src
      }, i.$attrs, {
        class: "lpr__video",
        ref_key: "mediaRef",
        ref: n,
        onClick: s
      }), null, 16, $c),
      Be("div", {
        class: "lpr__container",
        ref_key: "containerRef",
        ref: o
      }, [
        ul(i.$slots, "default")
      ], 512)
    ]));
  }
}), Ic = `:host{--lpr-player-border-radius: 16px}.lpr{position:relative;width:100%;height:100%;overflow:hidden;border:0 solid transparent;border-radius:var(--lpr-player-border-radius)}.lpr__video{width:100%;height:100%}.lpr__container{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}
`, Po = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Pc = /* @__PURE__ */ Po(Tc, [["styles", [Ic]]]), Rc = ["src"], Mc = /* @__PURE__ */ On({
  __name: "Poster",
  props: {
    src: { default: "" }
  },
  setup(e) {
    const t = Mt("player"), n = Pt(!0);
    Dn(() => {
      t.once(vt.Playing, () => o(!1));
    });
    const o = (s = !n.value) => {
      n.value = s;
    }, r = () => {
      !t || t.play();
    };
    return (s, i) => ll((Vn(), Co("div", {
      class: "lpr-poster__container",
      onClick: r
    }, [
      Be("img", {
        src: e.src,
        class: "lpr-poster"
      }, null, 8, Rc)
    ], 512)), [
      [vc, n.value]
    ]);
  }
}), Ac = `:host{--lpr-poster-background: #0a0a0a;--lpr-poster-brightness: 60%}.lpr-poster{width:100%;height:100%;object-fit:cover}.lpr-poster__container{position:absolute;top:0;left:0;width:100%;height:100%;background:var(--lpr-poster-background);filter:brightness(var(--lpr-poster-brightness));z-index:2;cursor:pointer;pointer-events:all}
`, jc = /* @__PURE__ */ Po(Mc, [["styles", [Ac]]]), Fc = { class: "lpr-timeline__container" }, Sc = /* @__PURE__ */ Be("div", { class: "lpr-timeline__circle" }, null, -1), Hc = [
  Sc
], Lc = /* @__PURE__ */ On({
  __name: "TimeLine",
  setup(e) {
    const t = Mt("player"), n = Pt();
    Dn(() => {
      !n.value || t.on(vt.TimeUpdate, o);
    }), wo(() => {
      t.off(vt.TimeUpdate, o);
    });
    const o = () => {
      if (!n.value || !t)
        return;
      const { currentTime: s, duration: i } = t, c = s / i * 100;
      n.value.style.width = `${c}%`;
    }, r = (s) => {
      if (!t)
        return;
      const { clientX: i, target: c } = s, { left: u, width: a } = c.getBoundingClientRect();
      t.currentTime = t.duration * ((i - u) / a);
    };
    return (s, i) => (Vn(), Co("div", Fc, [
      Be("div", {
        class: "lpr-timeline",
        onClick: r
      }),
      Be("div", {
        ref_key: "progressRef",
        ref: n,
        class: "lpr-timeline__progress"
      }, Hc, 512)
    ]));
  }
}), Uc = `:host{--timeline-color: #787574;--timeline-progress-color: #00b9ae;--timeline-height: 4px;--timeline-border-radius: 8px;--timeline-padding-left: 32px;--timeline-padding-right: 32px;--timeline-padding-bottom: max(12%, 36px)}.lpr-timeline__container{position:absolute;left:var(--timeline-padding-left);right:var(--timeline-padding-right);bottom:var(--timeline-padding-bottom);height:var(--timeline-height)}.lpr-timeline,.lpr-timeline__progress{position:absolute;top:0;left:0;right:0;bottom:0;height:var(--timeline-height);border:0 solid transparent;border-radius:var(--timeline-border-radius)}.lpr-timeline{cursor:pointer;pointer-events:all;background-color:var(--timeline-color);opacity:.7}.lpr-timeline__progress{pointer-events:none;width:0;background-color:var(--timeline-progress-color)}.lpr-timeline__circle{position:absolute;top:50%;right:0;transform:translateY(-50%);width:10px;height:10px;border-radius:50%;background-color:var(--timeline-progress-color)}
`, kc = /* @__PURE__ */ Po(Lc, [["styles", [Uc]]]), Bc = To(Pc), Kc = To(jc), Wc = To(kc);
customElements.define("lpr-player", Bc);
customElements.define("lpr-poster", Kc);
customElements.define("lpr-timeline", Wc);
