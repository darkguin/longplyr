var Vs = Object.defineProperty;
var Cs = (e, t, n) => t in e ? Vs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var dt = (e, t, n) => (Cs(e, typeof t != "symbol" ? t + "" : t, n), n);
function yt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const Ts = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", $s = /* @__PURE__ */ yt(Ts);
function Nr(e) {
  return !!e || e === "";
}
function uo(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = J(o) ? Rs(o) : uo(o);
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
const Is = /;(?![^(]*\))/g, Ps = /:(.+)/;
function Rs(e) {
  const t = {};
  return e.split(Is).forEach((n) => {
    if (n) {
      const o = n.split(Ps);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function fo(e) {
  let t = "";
  if (J(e))
    t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const o = fo(e[n]);
      o && (t += o + " ");
    }
  else if (k(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const S = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, gt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Q = () => {
}, vr = () => !1, Ms = /^on[^a-z]/, Wt = (e) => Ms.test(e), cn = (e) => e.startsWith("onUpdate:"), K = Object.assign, ao = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, As = Object.prototype.hasOwnProperty, R = (e, t) => As.call(e, t), $ = Array.isArray, Et = (e) => _n(e) === "[object Map]", Fs = (e) => _n(e) === "[object Set]", T = (e) => typeof e == "function", J = (e) => typeof e == "string", po = (e) => typeof e == "symbol", k = (e) => e !== null && typeof e == "object", ho = (e) => k(e) && T(e.then) && T(e.catch), js = Object.prototype.toString, _n = (e) => js.call(e), _o = (e) => _n(e).slice(8, -1), Ss = (e) => _n(e) === "[object Object]", mo = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, tn = /* @__PURE__ */ yt(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Us = /* @__PURE__ */ yt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), mn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Hs = /-(\w)/g, Le = mn((e) => e.replace(Hs, (t, n) => n ? n.toUpperCase() : "")), Ls = /\B([A-Z])/g, _e = mn((e) => e.replace(Ls, "-$1").toLowerCase()), gn = mn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ye = mn((e) => e ? `on${gn(e)}` : ""), St = (e, t) => !Object.is(e, t), xt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, un = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Bn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ho;
const br = () => Ho || (Ho = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Kn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ve;
class ks {
  constructor(t = !1) {
    this.active = !0, this.effects = [], this.cleanups = [], !t && ve && (this.parent = ve, this.index = (ve.scopes || (ve.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = ve;
      try {
        return ve = this, t();
      } finally {
        ve = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Kn("cannot run an inactive effect scope.");
  }
  on() {
    ve = this;
  }
  off() {
    ve = this.parent;
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
function Bs(e, t = ve) {
  t && t.active && t.effects.push(e);
}
const Ut = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, yr = (e) => (e.w & ke) > 0, Or = (e) => (e.n & ke) > 0, Ks = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= ke;
}, Ws = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      yr(r) && !Or(r) ? r.delete(e) : t[n++] = r, r.w &= ~ke, r.n &= ~ke;
    }
    t.length = n;
  }
}, Wn = /* @__PURE__ */ new WeakMap();
let $t = 0, ke = 1;
const zn = 30;
let re;
const Ge = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), qn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class go {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Bs(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = re, n = He;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = re, re = this, He = !0, ke = 1 << ++$t, $t <= zn ? Ks(this) : Lo(this), this.fn();
    } finally {
      $t <= zn && Ws(this), ke = 1 << --$t, re = this.parent, He = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    re === this ? this.deferStop = !0 : this.active && (Lo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Lo(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let He = !0;
const wr = [];
function it() {
  wr.push(He), He = !1;
}
function lt() {
  const e = wr.pop();
  He = e === void 0 ? !0 : e;
}
function le(e, t, n) {
  if (He && re) {
    let o = Wn.get(e);
    o || Wn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Ut());
    const s = process.env.NODE_ENV !== "production" ? { effect: re, target: e, type: t, key: n } : void 0;
    Yn(r, s);
  }
}
function Yn(e, t) {
  let n = !1;
  $t <= zn ? Or(e) || (e.n |= ke, n = !yr(e)) : n = !e.has(re), n && (e.add(re), re.deps.push(e), process.env.NODE_ENV !== "production" && re.onTrack && re.onTrack(Object.assign({ effect: re }, t)));
}
function $e(e, t, n, o, r, s) {
  const i = Wn.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && $(e))
    i.forEach((a, h) => {
      (h === "length" || h >= o) && c.push(a);
    });
  else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        $(e) ? mo(n) && c.push(i.get("length")) : (c.push(i.get(Ge)), Et(e) && c.push(i.get(qn)));
        break;
      case "delete":
        $(e) || (c.push(i.get(Ge)), Et(e) && c.push(i.get(qn)));
        break;
      case "set":
        Et(e) && c.push(i.get(Ge));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? ht(c[0], u) : ht(c[0]));
  else {
    const a = [];
    for (const h of c)
      h && a.push(...h);
    process.env.NODE_ENV !== "production" ? ht(Ut(a), u) : ht(Ut(a));
  }
}
function ht(e, t) {
  const n = $(e) ? e : [...e];
  for (const o of n)
    o.computed && ko(o, t);
  for (const o of n)
    o.computed || ko(o, t);
}
function ko(e, t) {
  (e !== re || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(K({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const zs = /* @__PURE__ */ yt("__proto__,__v_isRef,__isVue"), Dr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(po)
), qs = /* @__PURE__ */ En(), Ys = /* @__PURE__ */ En(!1, !0), Js = /* @__PURE__ */ En(!0), Xs = /* @__PURE__ */ En(!0, !0), Bo = /* @__PURE__ */ Zs();
function Zs() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = I(this);
      for (let s = 0, i = this.length; s < i; s++)
        le(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(I)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      it();
      const o = I(this)[t].apply(this, n);
      return lt(), o;
    };
  }), e;
}
function En(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? Rr : Pr : t ? Ir : $r).get(o))
      return o;
    const i = $(o);
    if (!e && i && R(Bo, r))
      return Reflect.get(Bo, r, s);
    const c = Reflect.get(o, r, s);
    return (po(r) ? Dr.has(r) : zs(r)) || (e || le(o, "get", r), t) ? c : Y(c) ? i && mo(r) ? c : c.value : k(c) ? e ? Mr(c) : No(c) : c;
  };
}
const Qs = /* @__PURE__ */ xr(), Gs = /* @__PURE__ */ xr(!0);
function xr(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (Be(i) && Y(i) && !Y(r))
      return !1;
    if (!e && (!fn(r) && !Be(r) && (i = I(i), r = I(r)), !$(n) && Y(i) && !Y(r)))
      return i.value = r, !0;
    const c = $(n) && mo(o) ? Number(o) < n.length : R(n, o), u = Reflect.set(n, o, r, s);
    return n === I(s) && (c ? St(r, i) && $e(n, "set", o, r, i) : $e(n, "add", o, r)), u;
  };
}
function ei(e, t) {
  const n = R(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && $e(e, "delete", t, void 0, o), r;
}
function ti(e, t) {
  const n = Reflect.has(e, t);
  return (!po(t) || !Dr.has(t)) && le(e, "has", t), n;
}
function ni(e) {
  return le(e, "iterate", $(e) ? "length" : Ge), Reflect.ownKeys(e);
}
const Vr = {
  get: qs,
  set: Qs,
  deleteProperty: ei,
  has: ti,
  ownKeys: ni
}, Cr = {
  get: Js,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Kn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Kn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, oi = /* @__PURE__ */ K({}, Vr, {
  get: Ys,
  set: Gs
}), ri = /* @__PURE__ */ K({}, Cr, {
  get: Xs
}), Eo = (e) => e, Nn = (e) => Reflect.getPrototypeOf(e);
function Jt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = I(e), s = I(t);
  n || (t !== s && le(r, "get", t), le(r, "get", s));
  const { has: i } = Nn(r), c = o ? Eo : n ? vo : Ht;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function Xt(e, t = !1) {
  const n = this.__v_raw, o = I(n), r = I(e);
  return t || (e !== r && le(o, "has", e), le(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Zt(e, t = !1) {
  return e = e.__v_raw, !t && le(I(e), "iterate", Ge), Reflect.get(e, "size", e);
}
function Ko(e) {
  e = I(e);
  const t = I(this);
  return Nn(t).has.call(t, e) || (t.add(e), $e(t, "add", e, e)), this;
}
function Wo(e, t) {
  t = I(t);
  const n = I(this), { has: o, get: r } = Nn(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Tr(n, o, e) : (e = I(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? St(t, i) && $e(n, "set", e, t, i) : $e(n, "add", e, t), this;
}
function zo(e) {
  const t = I(this), { has: n, get: o } = Nn(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Tr(t, n, e) : (e = I(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && $e(t, "delete", e, void 0, s), i;
}
function qo() {
  const e = I(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Et(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && $e(e, "clear", void 0, void 0, n), o;
}
function Qt(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, c = I(i), u = t ? Eo : e ? vo : Ht;
    return !e && le(c, "iterate", Ge), i.forEach((a, h) => o.call(r, u(a), u(h), s));
  };
}
function Gt(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = I(r), i = Et(s), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...o), h = n ? Eo : t ? vo : Ht;
    return !t && le(s, "iterate", u ? qn : Ge), {
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
function Fe(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${gn(e)} operation ${n}failed: target is readonly.`, I(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function si() {
  const e = {
    get(s) {
      return Jt(this, s);
    },
    get size() {
      return Zt(this);
    },
    has: Xt,
    add: Ko,
    set: Wo,
    delete: zo,
    clear: qo,
    forEach: Qt(!1, !1)
  }, t = {
    get(s) {
      return Jt(this, s, !1, !0);
    },
    get size() {
      return Zt(this);
    },
    has: Xt,
    add: Ko,
    set: Wo,
    delete: zo,
    clear: qo,
    forEach: Qt(!1, !0)
  }, n = {
    get(s) {
      return Jt(this, s, !0);
    },
    get size() {
      return Zt(this, !0);
    },
    has(s) {
      return Xt.call(this, s, !0);
    },
    add: Fe("add"),
    set: Fe("set"),
    delete: Fe("delete"),
    clear: Fe("clear"),
    forEach: Qt(!0, !1)
  }, o = {
    get(s) {
      return Jt(this, s, !0, !0);
    },
    get size() {
      return Zt(this, !0);
    },
    has(s) {
      return Xt.call(this, s, !0);
    },
    add: Fe("add"),
    set: Fe("set"),
    delete: Fe("delete"),
    clear: Fe("clear"),
    forEach: Qt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = Gt(s, !1, !1), n[s] = Gt(s, !0, !1), t[s] = Gt(s, !1, !0), o[s] = Gt(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [ii, li, ci, ui] = /* @__PURE__ */ si();
function vn(e, t) {
  const n = t ? e ? ui : ci : e ? li : ii;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(R(n, r) && r in o ? n : o, r, s);
}
const fi = {
  get: /* @__PURE__ */ vn(!1, !1)
}, ai = {
  get: /* @__PURE__ */ vn(!1, !0)
}, di = {
  get: /* @__PURE__ */ vn(!0, !1)
}, pi = {
  get: /* @__PURE__ */ vn(!0, !0)
};
function Tr(e, t, n) {
  const o = I(n);
  if (o !== n && t.call(e, o)) {
    const r = _o(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const $r = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap();
function hi(e) {
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
function _i(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : hi(_o(e));
}
function No(e) {
  return Be(e) ? e : bn(e, !1, Vr, fi, $r);
}
function mi(e) {
  return bn(e, !1, oi, ai, Ir);
}
function Mr(e) {
  return bn(e, !0, Cr, di, Pr);
}
function _t(e) {
  return bn(e, !0, ri, pi, Rr);
}
function bn(e, t, n, o, r) {
  if (!k(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = _i(e);
  if (i === 0)
    return e;
  const c = new Proxy(e, i === 2 ? o : n);
  return r.set(e, c), c;
}
function et(e) {
  return Be(e) ? et(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Be(e) {
  return !!(e && e.__v_isReadonly);
}
function fn(e) {
  return !!(e && e.__v_isShallow);
}
function Jn(e) {
  return et(e) || Be(e);
}
function I(e) {
  const t = e && e.__v_raw;
  return t ? I(t) : e;
}
function Ar(e) {
  return un(e, "__v_skip", !0), e;
}
const Ht = (e) => k(e) ? No(e) : e, vo = (e) => k(e) ? Mr(e) : e;
function Fr(e) {
  He && re && (e = I(e), process.env.NODE_ENV !== "production" ? Yn(e.dep || (e.dep = Ut()), {
    target: e,
    type: "get",
    key: "value"
  }) : Yn(e.dep || (e.dep = Ut())));
}
function jr(e, t) {
  e = I(e), e.dep && (process.env.NODE_ENV !== "production" ? ht(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : ht(e.dep));
}
function Y(e) {
  return !!(e && e.__v_isRef === !0);
}
function Pt(e) {
  return gi(e, !1);
}
function gi(e, t) {
  return Y(e) ? e : new Ei(e, t);
}
class Ei {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : I(t), this._value = n ? t : Ht(t);
  }
  get value() {
    return Fr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || fn(t) || Be(t);
    t = n ? t : I(t), St(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Ht(t), jr(this, t));
  }
}
function Ni(e) {
  return Y(e) ? e.value : e;
}
const vi = {
  get: (e, t, n) => Ni(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return Y(r) && !Y(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Sr(e) {
  return et(e) ? e : new Proxy(e, vi);
}
var Ur;
class bi {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Ur] = !1, this._dirty = !0, this.effect = new go(t, () => {
      this._dirty || (this._dirty = !0, jr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = I(this);
    return Fr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Ur = "__v_isReadonly";
function yi(e, t, n = !1) {
  let o, r;
  const s = T(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Q) : (o = e.get, r = e.set);
  const i = new bi(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const tt = [];
function nn(e) {
  tt.push(e);
}
function on() {
  tt.pop();
}
function y(e, ...t) {
  it();
  const n = tt.length ? tt[tt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Oi();
  if (o)
    Te(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${Rn(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...wi(r)), console.warn(...s);
  }
  lt();
}
function Oi() {
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
function wi(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Di(n));
  }), t;
}
function Di({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Rn(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...xi(e.props), s] : [r + s];
}
function xi(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Hr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Hr(e, t, n) {
  return J(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Y(t) ? (t = Hr(e, I(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : T(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = I(t), n ? t : [`${e}=`, t]);
}
const bo = {
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
function Te(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    yn(s, t, n);
  }
  return r;
}
function me(e, t, n, o) {
  if (T(e)) {
    const s = Te(e, t, n, o);
    return s && ho(s) && s.catch((i) => {
      yn(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(me(e[s], t, n, o));
  return r;
}
function yn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? bo[n] : n;
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
      Te(u, null, 10, [e, i, c]);
      return;
    }
  }
  Vi(e, n, r, o);
}
function Vi(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = bo[t];
    if (n && nn(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && on(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Lt = !1, Xn = !1;
const ee = [];
let ye = 0;
const Nt = [];
let be = null, je = 0;
const Lr = /* @__PURE__ */ Promise.resolve();
let yo = null;
const Ci = 100;
function kr(e) {
  const t = yo || Lr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ti(e) {
  let t = ye + 1, n = ee.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    kt(ee[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function On(e) {
  (!ee.length || !ee.includes(e, Lt && e.allowRecurse ? ye + 1 : ye)) && (e.id == null ? ee.push(e) : ee.splice(Ti(e.id), 0, e), Br());
}
function Br() {
  !Lt && !Xn && (Xn = !0, yo = Lr.then(zr));
}
function $i(e) {
  const t = ee.indexOf(e);
  t > ye && ee.splice(t, 1);
}
function Kr(e) {
  $(e) ? Nt.push(...e) : (!be || !be.includes(e, e.allowRecurse ? je + 1 : je)) && Nt.push(e), Br();
}
function Yo(e, t = Lt ? ye + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < ee.length; t++) {
    const n = ee[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && Oo(e, n))
        continue;
      ee.splice(t, 1), t--, n();
    }
  }
}
function Wr(e) {
  if (Nt.length) {
    const t = [...new Set(Nt)];
    if (Nt.length = 0, be) {
      be.push(...t);
      return;
    }
    for (be = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), be.sort((n, o) => kt(n) - kt(o)), je = 0; je < be.length; je++)
      process.env.NODE_ENV !== "production" && Oo(e, be[je]) || be[je]();
    be = null, je = 0;
  }
}
const kt = (e) => e.id == null ? 1 / 0 : e.id, Ii = (e, t) => {
  const n = kt(e) - kt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function zr(e) {
  Xn = !1, Lt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ee.sort(Ii);
  const t = process.env.NODE_ENV !== "production" ? (n) => Oo(e, n) : Q;
  try {
    for (ye = 0; ye < ee.length; ye++) {
      const n = ee[ye];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Te(n, null, 14);
      }
    }
  } finally {
    ye = 0, ee.length = 0, Wr(e), Lt = !1, yo = null, (ee.length || Nt.length) && zr(e);
  }
}
function Oo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Ci) {
      const o = t.ownerInstance, r = o && ys(o.type);
      return y(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let nt = !1;
const pt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (br().__VUE_HMR_RUNTIME__ = {
  createRecord: Sn(qr),
  rerender: Sn(Mi),
  reload: Sn(Ai)
});
const rt = /* @__PURE__ */ new Map();
function Pi(e) {
  const t = e.type.__hmrId;
  let n = rt.get(t);
  n || (qr(t, e.type), n = rt.get(t)), n.instances.add(e);
}
function Ri(e) {
  rt.get(e.type.__hmrId).instances.delete(e);
}
function qr(e, t) {
  return rt.has(e) ? !1 : (rt.set(e, {
    initialDef: Rt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Rt(e) {
  return Os(e) ? e.__vccOpts : e;
}
function Mi(e, t) {
  const n = rt.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Rt(o.type).render = t), o.renderCache = [], nt = !0, o.update(), nt = !1;
  }));
}
function Ai(e, t) {
  const n = rt.get(e);
  if (!n)
    return;
  t = Rt(t), Jo(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = Rt(r.type);
    pt.has(s) || (s !== n.initialDef && Jo(s, t), pt.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (pt.add(s), r.ceReload(t.styles), pt.delete(s)) : r.parent ? (On(r.parent.update), r.parent.type.__asyncLoader && r.parent.ceReload && r.parent.ceReload(t.styles)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Kr(() => {
    for (const r of o)
      pt.delete(Rt(r.type));
  });
}
function Jo(e, t) {
  K(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Sn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Xe, It = [], Zn = !1;
function zt(e, ...t) {
  Xe ? Xe.emit(e, ...t) : Zn || It.push({ event: e, args: t });
}
function Yr(e, t) {
  var n, o;
  Xe = e, Xe ? (Xe.enabled = !0, It.forEach(({ event: r, args: s }) => Xe.emit(r, ...s)), It = []) : typeof window < "u" && window.HTMLElement && !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Yr(s, t);
  }), setTimeout(() => {
    Xe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Zn = !0, It = []);
  }, 3e3)) : (Zn = !0, It = []);
}
function Fi(e, t) {
  zt("app:init", e, t, {
    Fragment: ce,
    Text: Cn,
    Comment: ue,
    Static: sn
  });
}
function ji(e) {
  zt("app:unmount", e);
}
const Si = /* @__PURE__ */ wo("component:added"), Jr = /* @__PURE__ */ wo("component:updated"), Ui = /* @__PURE__ */ wo("component:removed");
function wo(e) {
  return (t) => {
    zt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Hi = /* @__PURE__ */ Xr("perf:start"), Li = /* @__PURE__ */ Xr("perf:end");
function Xr(e) {
  return (t, n, o) => {
    zt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function ki(e, t, n) {
  zt("component:emit", e.appContext.app, e, t, n);
}
function Bi(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || S;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: h, propsOptions: [d] } = e;
    if (h)
      if (!(t in h))
        (!d || !(Ye(t) in d)) && y(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ye(t)}" prop.`);
      else {
        const N = h[t];
        T(N) && (N(...n) || y(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: N } = o[h] || S;
    N && (r = n.map((V) => V.trim())), d && (r = n.map(Bn));
  }
  if (process.env.NODE_ENV !== "production" && ki(e, t, r), process.env.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && o[Ye(h)] && y(`Event "${h}" is emitted in component ${Rn(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${_e(t)}" instead of "${t}".`);
  }
  let c, u = o[c = Ye(t)] || o[c = Ye(Le(t))];
  !u && s && (u = o[c = Ye(_e(t))]), u && me(u, e, 6, r);
  const a = o[c + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, me(a, e, 6, r);
  }
}
function Zr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, c = !1;
  if (!T(e)) {
    const u = (a) => {
      const h = Zr(a, t, !0);
      h && (c = !0, K(i, h));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !s && !c ? (k(e) && o.set(e, null), null) : ($(s) ? s.forEach((u) => i[u] = null) : K(i, s), k(e) && o.set(e, i), i);
}
function wn(e, t) {
  return !e || !Wt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), R(e, t[0].toLowerCase() + t.slice(1)) || R(e, _e(t)) || R(e, t));
}
let te = null, Qr = null;
function an(e) {
  const t = te;
  return te = e, Qr = e && e.type.__scopeId || null, t;
}
function Ki(e, t = te, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && ir(-1);
    const s = an(t), i = e(...r);
    return an(s), o._d && ir(1), process.env.NODE_ENV !== "production" && Jr(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Qn = !1;
function dn() {
  Qn = !0;
}
function Un(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: c, attrs: u, emit: a, render: h, renderCache: d, data: N, setupState: V, ctx: A, inheritAttrs: P } = e;
  let q, B;
  const H = an(e);
  process.env.NODE_ENV !== "production" && (Qn = !1);
  try {
    if (n.shapeFlag & 4) {
      const X = r || o;
      q = pe(h.call(X, X, d, s, V, N, A)), B = u;
    } else {
      const X = t;
      process.env.NODE_ENV !== "production" && u === s && dn(), q = pe(X.length > 1 ? X(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return dn(), u;
        },
        slots: c,
        emit: a
      } : { attrs: u, slots: c, emit: a }) : X(s, null)), B = t.props ? u : zi(u);
    }
  } catch (X) {
    Ft.length = 0, yn(X, e, 1), q = Oe(ue);
  }
  let W = q, we;
  if (process.env.NODE_ENV !== "production" && q.patchFlag > 0 && q.patchFlag & 2048 && ([W, we] = Wi(q)), B && P !== !1) {
    const X = Object.keys(B), { shapeFlag: Ot } = W;
    if (X.length) {
      if (Ot & 7)
        i && X.some(cn) && (B = qi(B, i)), W = We(W, B);
      else if (process.env.NODE_ENV !== "production" && !Qn && W.type !== ue) {
        const ct = Object.keys(u), Pe = [], fe = [];
        for (let De = 0, Re = ct.length; De < Re; De++) {
          const ae = ct[De];
          Wt(ae) ? cn(ae) || Pe.push(ae[2].toLowerCase() + ae.slice(3)) : fe.push(ae);
        }
        fe.length && y(`Extraneous non-props attributes (${fe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), Pe.length && y(`Extraneous non-emits event listeners (${Pe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Xo(W) && y("Runtime directive used on component with non-element root node. The directives will not function as intended."), W = We(W), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Xo(W) && y("Component inside <Transition> renders non-element root node that cannot be animated."), W.transition = n.transition), process.env.NODE_ENV !== "production" && we ? we(W) : q = W, an(H), q;
}
const Wi = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Gr(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (c) => {
    t[r] = c, n && (s > -1 ? n[s] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [pe(o), i];
};
function Gr(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if ($n(o)) {
      if (o.type !== ue || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const zi = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Wt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, qi = (e, t) => {
  const n = {};
  for (const o in e)
    (!cn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Xo = (e) => e.shapeFlag & 7 || e.type === ue;
function Yi(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: c, patchFlag: u } = t, a = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || c) && nt || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? Zo(o, i, a) : !!i;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        const N = h[d];
        if (i[N] !== o[N] && !wn(a, N))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === i ? !1 : o ? i ? Zo(o, i, a) : !0 : !!i;
  return !1;
}
function Zo(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !wn(n, s))
      return !0;
  }
  return !1;
}
function Ji({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Xi = (e) => e.__isSuspense;
function Zi(e, t) {
  t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : Kr(e);
}
function es(e, t) {
  if (!G)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = G.provides;
    const o = G.parent && G.parent.provides;
    o === n && (n = G.provides = Object.create(o)), n[e] = t;
  }
}
function Mt(e, t, n = !1) {
  const o = G || te;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && T(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const Qo = {};
function Hn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !T(t) && y("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), ts(e, t, n);
}
function ts(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = S) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && y('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && y('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (H) => {
    y("Invalid watch source: ", H, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = G;
  let a, h = !1, d = !1;
  if (Y(e) ? (a = () => e.value, h = fn(e)) : et(e) ? (a = () => e, o = !0) : $(e) ? (d = !0, h = e.some((H) => et(H) || fn(H)), a = () => e.map((H) => {
    if (Y(H))
      return H.value;
    if (et(H))
      return Qe(H);
    if (T(H))
      return Te(H, u, 2);
    process.env.NODE_ENV !== "production" && c(H);
  })) : T(e) ? t ? a = () => Te(e, u, 2) : a = () => {
    if (!(u && u.isUnmounted))
      return N && N(), me(e, u, 3, [V]);
  } : (a = Q, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const H = a;
    a = () => Qe(H());
  }
  let N, V = (H) => {
    N = B.onStop = () => {
      Te(H, u, 4);
    };
  };
  if (Kt)
    return V = Q, t ? n && me(t, u, 3, [
      a(),
      d ? [] : void 0,
      V
    ]) : a(), Q;
  let A = d ? [] : Qo;
  const P = () => {
    if (!!B.active)
      if (t) {
        const H = B.run();
        (o || h || (d ? H.some((W, we) => St(W, A[we])) : St(H, A))) && (N && N(), me(t, u, 3, [
          H,
          A === Qo ? void 0 : A,
          V
        ]), A = H);
      } else
        B.run();
  };
  P.allowRecurse = !!t;
  let q;
  r === "sync" ? q = P : r === "post" ? q = () => ie(P, u && u.suspense) : (P.pre = !0, u && (P.id = u.uid), q = () => On(P));
  const B = new go(a, q);
  return process.env.NODE_ENV !== "production" && (B.onTrack = s, B.onTrigger = i), t ? n ? P() : A = B.run() : r === "post" ? ie(B.run.bind(B), u && u.suspense) : B.run(), () => {
    B.stop(), u && u.scope && ao(u.scope.effects, B);
  };
}
function Qi(e, t, n) {
  const o = this.proxy, r = J(e) ? e.includes(".") ? ns(o, e) : () => o[e] : e.bind(o, o);
  let s;
  T(t) ? s = t : (s = t.handler, n = t);
  const i = G;
  bt(this);
  const c = ts(r, s.bind(o), n);
  return i ? bt(i) : ot(), c;
}
function ns(e, t) {
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
  else if ($(e))
    for (let n = 0; n < e.length; n++)
      Qe(e[n], t);
  else if (Fs(e) || Et(e))
    e.forEach((n) => {
      Qe(n, t);
    });
  else if (Ss(e))
    for (const n in e)
      Qe(e[n], t);
  return e;
}
function Dn(e) {
  return T(e) ? { setup: e, name: e.name } : e;
}
const At = (e) => !!e.type.__asyncLoader, Do = (e) => e.type.__isKeepAlive;
function Gi(e, t) {
  os(e, "a", t);
}
function el(e, t) {
  os(e, "da", t);
}
function os(e, t, n = G) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (xn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Do(r.parent.vnode) && tl(o, t, n, r), r = r.parent;
  }
}
function tl(e, t, n, o) {
  const r = xn(t, e, o, !0);
  xo(() => {
    ao(o[t], r);
  }, n);
}
function xn(e, t, n = G, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      it(), bt(n);
      const c = me(t, n, e, i);
      return ot(), lt(), c;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = Ye(bo[e].replace(/ hook$/, ""));
    y(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Ie = (e) => (t, n = G) => (!Kt || e === "sp") && xn(e, (...o) => t(...o), n), nl = Ie("bm"), Vn = Ie("m"), ol = Ie("bu"), rl = Ie("u"), sl = Ie("bum"), xo = Ie("um"), il = Ie("sp"), ll = Ie("rtg"), cl = Ie("rtc");
function ul(e, t = G) {
  xn("ec", e, t);
}
function rs(e) {
  Us(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function fl(e, t) {
  const n = te;
  if (n === null)
    return process.env.NODE_ENV !== "production" && y("withDirectives can only be used inside render functions."), e;
  const o = Pn(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, c, u, a = S] = t[s];
    T(i) && (i = {
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
function ze(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    s && (c.oldValue = s[i].value);
    let u = c.dir[o];
    u && (it(), me(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), lt());
  }
}
const al = Symbol();
function dl(e, t, n = {}, o, r) {
  if (te.isCE || te.parent && At(te.parent) && te.parent.isCE)
    return Oe("slot", t === "default" ? null : { name: t }, o && o());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (y("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), s = () => []), s && s._c && (s._d = !1), Tn();
  const i = s && ss(s(n)), c = Ll(ce, {
    key: n.key || i && i.key || `_${t}`
  }, i || (o ? o() : []), i && e._ === 1 ? 64 : -2);
  return !r && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), s && s._c && (s._d = !0), c;
}
function ss(e) {
  return e.some((t) => $n(t) ? !(t.type === ue || t.type === ce && !ss(t.children)) : !0) ? e : null;
}
const Gn = (e) => e ? vs(e) ? Pn(e) || e.proxy : Gn(e.parent) : null, vt = /* @__PURE__ */ K(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? _t(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? _t(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? _t(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? _t(e.refs) : e.refs,
  $parent: (e) => Gn(e.parent),
  $root: (e) => Gn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => Co(e),
  $forceUpdate: (e) => e.f || (e.f = () => On(e.update)),
  $nextTick: (e) => e.n || (e.n = kr.bind(e.proxy)),
  $watch: (e) => Qi.bind(e)
}), Vo = (e) => e === "_" || e === "$", is = {
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
        eo && (i[t] = 0);
      }
    }
    const h = vt[t];
    let d, N;
    if (h)
      return t === "$attrs" && (le(e, "get", t), process.env.NODE_ENV !== "production" && dn()), h(e);
    if ((d = c.__cssModules) && (d = d[t]))
      return d;
    if (n !== S && R(n, t))
      return i[t] = 4, n[t];
    if (N = u.config.globalProperties, R(N, t))
      return N[t];
    process.env.NODE_ENV !== "production" && te && (!J(t) || t.indexOf("__v") !== 0) && (r !== S && Vo(t[0]) && R(r, t) ? y(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === te && y(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
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
    return !!n[i] || e !== S && R(e, i) || t !== S && R(t, i) || (c = s[0]) && R(c, i) || R(o, i) || R(vt, i) || R(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : R(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (is.ownKeys = (e) => (y("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function pl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(vt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => vt[n](e),
      set: Q
    });
  }), t;
}
function hl(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Q
    });
  });
}
function _l(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(I(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Vo(o[0])) {
        y(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Q
      });
    }
  });
}
function ml() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let eo = !0;
function gl(e) {
  const t = Co(e), n = e.proxy, o = e.ctx;
  eo = !1, t.beforeCreate && Go(t.beforeCreate, e, "bc");
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
    beforeUnmount: H,
    destroyed: W,
    unmounted: we,
    render: X,
    renderTracked: Ot,
    renderTriggered: ct,
    errorCaptured: Pe,
    serverPrefetch: fe,
    expose: De,
    inheritAttrs: Re,
    components: ae,
    directives: qt,
    filters: Ao
  } = t, Me = process.env.NODE_ENV !== "production" ? ml() : null;
  if (process.env.NODE_ENV !== "production") {
    const [F] = e.propsOptions;
    if (F)
      for (const j in F)
        Me("Props", j);
  }
  if (a && El(a, o, Me, e.appContext.config.unwrapInjectedRef), i)
    for (const F in i) {
      const j = i[F];
      T(j) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, F, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[F] = j.bind(n), process.env.NODE_ENV !== "production" && Me("Methods", F)) : process.env.NODE_ENV !== "production" && y(`Method "${F}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !T(r) && y("The data option must be a function. Plain object usage is no longer supported.");
    const F = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && ho(F) && y("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !k(F))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = No(F), process.env.NODE_ENV !== "production")
      for (const j in F)
        Me("Data", j), Vo(j[0]) || Object.defineProperty(o, j, {
          configurable: !0,
          enumerable: !0,
          get: () => F[j],
          set: Q
        });
  }
  if (eo = !0, s)
    for (const F in s) {
      const j = s[F], ge = T(j) ? j.bind(n, n) : T(j.get) ? j.get.bind(n, n) : Q;
      process.env.NODE_ENV !== "production" && ge === Q && y(`Computed property "${F}" has no getter.`);
      const Mn = !T(j) && T(j.set) ? j.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(`Write operation failed: computed property "${F}" is readonly.`);
      } : Q, wt = tc({
        get: ge,
        set: Mn
      });
      Object.defineProperty(o, F, {
        enumerable: !0,
        configurable: !0,
        get: () => wt.value,
        set: (ut) => wt.value = ut
      }), process.env.NODE_ENV !== "production" && Me("Computed", F);
    }
  if (c)
    for (const F in c)
      ls(c[F], o, n, F);
  if (u) {
    const F = T(u) ? u.call(n) : u;
    Reflect.ownKeys(F).forEach((j) => {
      es(j, F[j]);
    });
  }
  h && Go(h, e, "c");
  function se(F, j) {
    $(j) ? j.forEach((ge) => F(ge.bind(n))) : j && F(j.bind(n));
  }
  if (se(nl, d), se(Vn, N), se(ol, V), se(rl, A), se(Gi, P), se(el, q), se(ul, Pe), se(cl, Ot), se(ll, ct), se(sl, H), se(xo, we), se(il, fe), $(De))
    if (De.length) {
      const F = e.exposed || (e.exposed = {});
      De.forEach((j) => {
        Object.defineProperty(F, j, {
          get: () => n[j],
          set: (ge) => n[j] = ge
        });
      });
    } else
      e.exposed || (e.exposed = {});
  X && e.render === Q && (e.render = X), Re != null && (e.inheritAttrs = Re), ae && (e.components = ae), qt && (e.directives = qt);
}
function El(e, t, n = Q, o = !1) {
  $(e) && (e = to(e));
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
function Go(e, t, n) {
  me($(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ls(e, t, n, o) {
  const r = o.includes(".") ? ns(n, o) : () => n[o];
  if (J(e)) {
    const s = t[e];
    T(s) ? Hn(r, s) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, s);
  } else if (T(e))
    Hn(r, e.bind(n));
  else if (k(e))
    if ($(e))
      e.forEach((s) => ls(s, t, n, o));
    else {
      const s = T(e.handler) ? e.handler.bind(n) : t[e.handler];
      T(s) ? Hn(r, s, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function Co(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, c = s.get(t);
  let u;
  return c ? u = c : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach((a) => pn(u, a, i, !0)), pn(u, t, i)), k(t) && s.set(t, u), u;
}
function pn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && pn(e, s, n, !0), r && r.forEach((i) => pn(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && y('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const c = Nl[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Nl = {
  data: er,
  props: Je,
  emits: Je,
  methods: Je,
  computed: Je,
  beforeCreate: oe,
  created: oe,
  beforeMount: oe,
  mounted: oe,
  beforeUpdate: oe,
  updated: oe,
  beforeDestroy: oe,
  beforeUnmount: oe,
  destroyed: oe,
  unmounted: oe,
  activated: oe,
  deactivated: oe,
  errorCaptured: oe,
  serverPrefetch: oe,
  components: Je,
  directives: Je,
  watch: bl,
  provide: er,
  inject: vl
};
function er(e, t) {
  return t ? e ? function() {
    return K(T(e) ? e.call(this, this) : e, T(t) ? t.call(this, this) : t);
  } : t : e;
}
function vl(e, t) {
  return Je(to(e), to(t));
}
function to(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function oe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Je(e, t) {
  return e ? K(K(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function bl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = K(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = oe(e[o], t[o]);
  return n;
}
function yl(e, t, n, o = !1) {
  const r = {}, s = {};
  un(s, In, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), cs(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && fs(t || {}, r, e), n ? e.props = o ? r : mi(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Ol(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function wl(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: i } } = e, c = I(r), [u] = e.propsOptions;
  let a = !1;
  if (!(process.env.NODE_ENV !== "production" && Ol(e)) && (o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        let N = h[d];
        if (wn(e.emitsOptions, N))
          continue;
        const V = t[N];
        if (u)
          if (R(s, N))
            V !== s[N] && (s[N] = V, a = !0);
          else {
            const A = Le(N);
            r[A] = no(u, c, A, V, e, !1);
          }
        else
          V !== s[N] && (s[N] = V, a = !0);
      }
    }
  } else {
    cs(e, t, r, s) && (a = !0);
    let h;
    for (const d in c)
      (!t || !R(t, d) && ((h = _e(d)) === d || !R(t, h))) && (u ? n && (n[d] !== void 0 || n[h] !== void 0) && (r[d] = no(u, c, d, void 0, e, !0)) : delete r[d]);
    if (s !== c)
      for (const d in s)
        (!t || !R(t, d) && !0) && (delete s[d], a = !0);
  }
  a && $e(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && fs(t || {}, r, e);
}
function cs(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if (tn(u))
        continue;
      const a = t[u];
      let h;
      r && R(r, h = Le(u)) ? !s || !s.includes(h) ? n[h] = a : (c || (c = {}))[h] = a : wn(e.emitsOptions, u) || (!(u in o) || a !== o[u]) && (o[u] = a, i = !0);
    }
  if (s) {
    const u = I(n), a = c || S;
    for (let h = 0; h < s.length; h++) {
      const d = s[h];
      n[d] = no(r, u, d, a[d], e, !R(a, d));
    }
  }
  return i;
}
function no(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const c = R(i, "default");
    if (c && o === void 0) {
      const u = i.default;
      if (i.type !== Function && T(u)) {
        const { propsDefaults: a } = r;
        n in a ? o = a[n] : (bt(r), o = a[n] = u.call(null, t), ot());
      } else
        o = u;
    }
    i[0] && (s && !c ? o = !1 : i[1] && (o === "" || o === _e(n)) && (o = !0));
  }
  return o;
}
function us(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, c = [];
  let u = !1;
  if (!T(e)) {
    const h = (d) => {
      u = !0;
      const [N, V] = us(d, t, !0);
      K(i, N), V && c.push(...V);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!s && !u)
    return k(e) && o.set(e, gt), gt;
  if ($(s))
    for (let h = 0; h < s.length; h++) {
      process.env.NODE_ENV !== "production" && !J(s[h]) && y("props must be strings when using array syntax.", s[h]);
      const d = Le(s[h]);
      tr(d) && (i[d] = S);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !k(s) && y("invalid props options", s);
    for (const h in s) {
      const d = Le(h);
      if (tr(d)) {
        const N = s[h], V = i[d] = $(N) || T(N) ? { type: N } : N;
        if (V) {
          const A = or(Boolean, V.type), P = or(String, V.type);
          V[0] = A > -1, V[1] = P < 0 || A < P, (A > -1 || R(V, "default")) && c.push(d);
        }
      }
    }
  }
  const a = [i, c];
  return k(e) && o.set(e, a), a;
}
function tr(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function oo(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function nr(e, t) {
  return oo(e) === oo(t);
}
function or(e, t) {
  return $(t) ? t.findIndex((n) => nr(n, e)) : T(t) && nr(t, e) ? 0 : -1;
}
function fs(e, t, n) {
  const o = I(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && Dl(s, o[s], i, !R(e, s) && !R(e, _e(s)));
  }
}
function Dl(e, t, n, o) {
  const { type: r, required: s, validator: i } = n;
  if (s && o) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let c = !1;
      const u = $(r) ? r : [r], a = [];
      for (let h = 0; h < u.length && !c; h++) {
        const { valid: d, expectedType: N } = Vl(t, u[h]);
        a.push(N || ""), c = d;
      }
      if (!c) {
        y(Cl(e, t, a));
        return;
      }
    }
    i && !i(t) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const xl = /* @__PURE__ */ yt("String,Number,Boolean,Function,Symbol,BigInt");
function Vl(e, t) {
  let n;
  const o = oo(t);
  if (xl(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = k(e) : o === "Array" ? n = $(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Cl(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(gn).join(" | ")}`;
  const r = n[0], s = _o(t), i = rr(t, r), c = rr(t, s);
  return n.length === 1 && sr(r) && !Tl(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, sr(s) && (o += `with value ${c}.`), o;
}
function rr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function sr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Tl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const as = (e) => e[0] === "_" || e === "$stable", To = (e) => $(e) ? e.map(pe) : [pe(e)], $l = (e, t, n) => {
  if (t._n)
    return t;
  const o = Ki((...r) => (process.env.NODE_ENV !== "production" && G && y(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), To(t(...r))), n);
  return o._c = !1, o;
}, ds = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (as(r))
      continue;
    const s = e[r];
    if (T(s))
      t[r] = $l(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && y(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const i = To(s);
      t[r] = () => i;
    }
  }
}, ps = (e, t) => {
  process.env.NODE_ENV !== "production" && !Do(e.vnode) && y("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = To(t);
  e.slots.default = () => n;
}, Il = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = I(t), un(t, "_", n)) : ds(t, e.slots = {});
  } else
    e.slots = {}, t && ps(e, t);
  un(e.slots, In, 1);
}, Pl = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = S;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && nt ? K(r, t) : n && c === 1 ? s = !1 : (K(r, t), !n && c === 1 && delete r._) : (s = !t.$stable, ds(t, r)), i = t;
  } else
    t && (ps(e, t), i = { default: 1 });
  if (s)
    for (const c in r)
      !as(c) && !(c in i) && delete r[c];
};
function hs() {
  return {
    app: null,
    config: {
      isNativeTag: vr,
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
let Rl = 0;
function Ml(e, t) {
  return function(o, r = null) {
    T(o) || (o = Object.assign({}, o)), r != null && !k(r) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), r = null);
    const s = hs(), i = /* @__PURE__ */ new Set();
    let c = !1;
    const u = s.app = {
      _uid: Rl++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: ur,
      get config() {
        return s.config;
      },
      set config(a) {
        process.env.NODE_ENV !== "production" && y("app.config cannot be replaced. Modify individual options instead.");
      },
      use(a, ...h) {
        return i.has(a) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : a && T(a.install) ? (i.add(a), a.install(u, ...h)) : T(a) ? (i.add(a), a(u, ...h)) : process.env.NODE_ENV !== "production" && y('A plugin must either be a function or an object with an "install" function.'), u;
      },
      mixin(a) {
        return s.mixins.includes(a) ? process.env.NODE_ENV !== "production" && y("Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")) : s.mixins.push(a), u;
      },
      component(a, h) {
        return process.env.NODE_ENV !== "production" && so(a, s.config), h ? (process.env.NODE_ENV !== "production" && s.components[a] && y(`Component "${a}" has already been registered in target app.`), s.components[a] = h, u) : s.components[a];
      },
      directive(a, h) {
        return process.env.NODE_ENV !== "production" && rs(a), h ? (process.env.NODE_ENV !== "production" && s.directives[a] && y(`Directive "${a}" has already been registered in target app.`), s.directives[a] = h, u) : s.directives[a];
      },
      mount(a, h, d) {
        if (c)
          process.env.NODE_ENV !== "production" && y("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && a.__vue_app__ && y("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const N = Oe(o, r);
          return N.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(We(N), a, d);
          }), h && t ? t(N, a) : e(N, a, d), c = !0, u._container = a, a.__vue_app__ = u, process.env.NODE_ENV !== "production" && (u._instance = N.component, Fi(u, ur)), Pn(N.component) || N.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, u._container), process.env.NODE_ENV !== "production" && (u._instance = null, ji(u)), delete u._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(a, h) {
        return process.env.NODE_ENV !== "production" && a in s.provides && y(`App already provides property with key "${String(a)}". It will be overwritten with the new value.`), s.provides[a] = h, u;
      }
    };
    return u;
  };
}
function ro(e, t, n, o, r = !1) {
  if ($(e)) {
    e.forEach((N, V) => ro(N, t && ($(t) ? t[V] : t), n, o, r));
    return;
  }
  if (At(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? Pn(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: c, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    y("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const a = t && t.r, h = c.refs === S ? c.refs = {} : c.refs, d = c.setupState;
  if (a != null && a !== u && (J(a) ? (h[a] = null, R(d, a) && (d[a] = null)) : Y(a) && (a.value = null)), T(u))
    Te(u, c, 12, [i, h]);
  else {
    const N = J(u), V = Y(u);
    if (N || V) {
      const A = () => {
        if (e.f) {
          const P = N ? h[u] : u.value;
          r ? $(P) && ao(P, s) : $(P) ? P.includes(s) || P.push(s) : N ? (h[u] = [s], R(d, u) && (d[u] = h[u])) : (u.value = [s], e.k && (h[e.k] = u.value));
        } else
          N ? (h[u] = i, R(d, u) && (d[u] = i)) : V ? (u.value = i, e.k && (h[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
      };
      i ? (A.id = -1, ie(A, n)) : A();
    } else
      process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
  }
}
let Vt, Ue;
function Ve(e, t) {
  e.appContext.config.performance && hn() && Ue.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Hi(e, t, hn() ? Ue.now() : Date.now());
}
function Ce(e, t) {
  if (e.appContext.config.performance && hn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Ue.mark(o), Ue.measure(`<${Rn(e, e.type)}> ${t}`, n, o), Ue.clearMarks(n), Ue.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Li(e, t, hn() ? Ue.now() : Date.now());
}
function hn() {
  return Vt !== void 0 || (typeof window < "u" && window.performance ? (Vt = !0, Ue = window.performance) : Vt = !1), Vt;
}
function Al() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const ie = Zi;
function Fl(e) {
  return jl(e);
}
function jl(e, t) {
  Al();
  const n = br();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Yr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: c, createComment: u, setText: a, setElementText: h, parentNode: d, nextSibling: N, setScopeId: V = Q, insertStaticContent: A } = e, P = (l, f, p, m = null, _ = null, v = null, O = !1, E = null, b = process.env.NODE_ENV !== "production" && nt ? !1 : !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !Ct(l, f) && (m = Yt(l), Ae(l, _, v, !0), l = null), f.patchFlag === -2 && (b = !1, f.dynamicChildren = null);
    const { type: g, ref: D, shapeFlag: w } = f;
    switch (g) {
      case Cn:
        q(l, f, p, m);
        break;
      case ue:
        B(l, f, p, m);
        break;
      case sn:
        l == null ? H(f, p, m, O) : process.env.NODE_ENV !== "production" && W(l, f, p, O);
        break;
      case ce:
        qt(l, f, p, m, _, v, O, E, b);
        break;
      default:
        w & 1 ? Ot(l, f, p, m, _, v, O, E, b) : w & 6 ? Ao(l, f, p, m, _, v, O, E, b) : w & 64 || w & 128 ? g.process(l, f, p, m, _, v, O, E, b, ft) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", g, `(${typeof g})`);
    }
    D != null && _ && ro(D, l && l.ref, v, f || l, !f);
  }, q = (l, f, p, m) => {
    if (l == null)
      o(f.el = c(f.children), p, m);
    else {
      const _ = f.el = l.el;
      f.children !== l.children && a(_, f.children);
    }
  }, B = (l, f, p, m) => {
    l == null ? o(f.el = u(f.children || ""), p, m) : f.el = l.el;
  }, H = (l, f, p, m) => {
    [l.el, l.anchor] = A(l.children, f, p, m, l.el, l.anchor);
  }, W = (l, f, p, m) => {
    if (f.children !== l.children) {
      const _ = N(l.anchor);
      X(l), [f.el, f.anchor] = A(f.children, p, _, m);
    } else
      f.el = l.el, f.anchor = l.anchor;
  }, we = ({ el: l, anchor: f }, p, m) => {
    let _;
    for (; l && l !== f; )
      _ = N(l), o(l, p, m), l = _;
    o(f, p, m);
  }, X = ({ el: l, anchor: f }) => {
    let p;
    for (; l && l !== f; )
      p = N(l), r(l), l = p;
    r(f);
  }, Ot = (l, f, p, m, _, v, O, E, b) => {
    O = O || f.type === "svg", l == null ? ct(f, p, m, _, v, O, E, b) : De(l, f, _, v, O, E, b);
  }, ct = (l, f, p, m, _, v, O, E) => {
    let b, g;
    const { type: D, props: w, shapeFlag: x, transition: C, dirs: M } = l;
    if (b = l.el = i(l.type, v, w && w.is, w), x & 8 ? h(b, l.children) : x & 16 && fe(l.children, b, null, m, _, v && D !== "foreignObject", O, E), M && ze(l, null, m, "created"), w) {
      for (const U in w)
        U !== "value" && !tn(U) && s(b, U, null, w[U], v, l.children, m, _, xe);
      "value" in w && s(b, "value", null, w.value), (g = w.onVnodeBeforeMount) && Ne(g, m, l);
    }
    Pe(b, l, l.scopeId, O, m), process.env.NODE_ENV !== "production" && (Object.defineProperty(b, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(b, "__vueParentComponent", {
      value: m,
      enumerable: !1
    })), M && ze(l, null, m, "beforeMount");
    const L = (!_ || _ && !_.pendingBranch) && C && !C.persisted;
    L && C.beforeEnter(b), o(b, f, p), ((g = w && w.onVnodeMounted) || L || M) && ie(() => {
      g && Ne(g, m, l), L && C.enter(b), M && ze(l, null, m, "mounted");
    }, _);
  }, Pe = (l, f, p, m, _) => {
    if (p && V(l, p), m)
      for (let v = 0; v < m.length; v++)
        V(l, m[v]);
    if (_) {
      let v = _.subTree;
      if (process.env.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = Gr(v.children) || v), f === v) {
        const O = _.vnode;
        Pe(l, O, O.scopeId, O.slotScopeIds, _.parent);
      }
    }
  }, fe = (l, f, p, m, _, v, O, E, b = 0) => {
    for (let g = b; g < l.length; g++) {
      const D = l[g] = E ? Se(l[g]) : pe(l[g]);
      P(null, D, f, p, m, _, v, O, E);
    }
  }, De = (l, f, p, m, _, v, O) => {
    const E = f.el = l.el;
    let { patchFlag: b, dynamicChildren: g, dirs: D } = f;
    b |= l.patchFlag & 16;
    const w = l.props || S, x = f.props || S;
    let C;
    p && qe(p, !1), (C = x.onVnodeBeforeUpdate) && Ne(C, p, f, l), D && ze(f, l, p, "beforeUpdate"), p && qe(p, !0), process.env.NODE_ENV !== "production" && nt && (b = 0, O = !1, g = null);
    const M = _ && f.type !== "foreignObject";
    if (g ? (Re(l.dynamicChildren, g, E, p, m, M, v), process.env.NODE_ENV !== "production" && p && p.type.__hmrId && rn(l, f)) : O || ge(l, f, E, null, p, m, M, v, !1), b > 0) {
      if (b & 16)
        ae(E, f, w, x, p, m, _);
      else if (b & 2 && w.class !== x.class && s(E, "class", null, x.class, _), b & 4 && s(E, "style", w.style, x.style, _), b & 8) {
        const L = f.dynamicProps;
        for (let U = 0; U < L.length; U++) {
          const z = L[U], de = w[z], at = x[z];
          (at !== de || z === "value") && s(E, z, de, at, _, l.children, p, m, xe);
        }
      }
      b & 1 && l.children !== f.children && h(E, f.children);
    } else
      !O && g == null && ae(E, f, w, x, p, m, _);
    ((C = x.onVnodeUpdated) || D) && ie(() => {
      C && Ne(C, p, f, l), D && ze(f, l, p, "updated");
    }, m);
  }, Re = (l, f, p, m, _, v, O) => {
    for (let E = 0; E < f.length; E++) {
      const b = l[E], g = f[E], D = b.el && (b.type === ce || !Ct(b, g) || b.shapeFlag & 70) ? d(b.el) : p;
      P(b, g, D, null, m, _, v, O, !0);
    }
  }, ae = (l, f, p, m, _, v, O) => {
    if (p !== m) {
      if (p !== S)
        for (const E in p)
          !tn(E) && !(E in m) && s(l, E, p[E], null, O, f.children, _, v, xe);
      for (const E in m) {
        if (tn(E))
          continue;
        const b = m[E], g = p[E];
        b !== g && E !== "value" && s(l, E, g, b, O, f.children, _, v, xe);
      }
      "value" in m && s(l, "value", p.value, m.value);
    }
  }, qt = (l, f, p, m, _, v, O, E, b) => {
    const g = f.el = l ? l.el : c(""), D = f.anchor = l ? l.anchor : c("");
    let { patchFlag: w, dynamicChildren: x, slotScopeIds: C } = f;
    process.env.NODE_ENV !== "production" && (nt || w & 2048) && (w = 0, b = !1, x = null), C && (E = E ? E.concat(C) : C), l == null ? (o(g, p, m), o(D, p, m), fe(f.children, p, D, _, v, O, E, b)) : w > 0 && w & 64 && x && l.dynamicChildren ? (Re(l.dynamicChildren, x, p, _, v, O, E), process.env.NODE_ENV !== "production" && _ && _.type.__hmrId ? rn(l, f) : (f.key != null || _ && f === _.subTree) && rn(l, f, !0)) : ge(l, f, p, D, _, v, O, E, b);
  }, Ao = (l, f, p, m, _, v, O, E, b) => {
    f.slotScopeIds = E, l == null ? f.shapeFlag & 512 ? _.ctx.activate(f, p, m, O, b) : Me(f, p, m, _, v, O, b) : se(l, f, b);
  }, Me = (l, f, p, m, _, v, O) => {
    const E = l.component = ql(l, m, _);
    if (process.env.NODE_ENV !== "production" && E.type.__hmrId && Pi(E), process.env.NODE_ENV !== "production" && (nn(l), Ve(E, "mount")), Do(l) && (E.ctx.renderer = ft), process.env.NODE_ENV !== "production" && Ve(E, "init"), Jl(E), process.env.NODE_ENV !== "production" && Ce(E, "init"), E.asyncDep) {
      if (_ && _.registerDep(E, F), !l.el) {
        const b = E.subTree = Oe(ue);
        B(null, b, f, p);
      }
      return;
    }
    F(E, l, f, p, _, v, O), process.env.NODE_ENV !== "production" && (on(), Ce(E, "mount"));
  }, se = (l, f, p) => {
    const m = f.component = l.component;
    if (Yi(l, f, p))
      if (m.asyncDep && !m.asyncResolved) {
        process.env.NODE_ENV !== "production" && nn(f), j(m, f, p), process.env.NODE_ENV !== "production" && on();
        return;
      } else
        m.next = f, $i(m.update), m.update();
    else
      f.el = l.el, m.vnode = f;
  }, F = (l, f, p, m, _, v, O) => {
    const E = () => {
      if (l.isMounted) {
        let { next: D, bu: w, u: x, parent: C, vnode: M } = l, L = D, U;
        process.env.NODE_ENV !== "production" && nn(D || l.vnode), qe(l, !1), D ? (D.el = M.el, j(l, D, O)) : D = M, w && xt(w), (U = D.props && D.props.onVnodeBeforeUpdate) && Ne(U, C, D, M), qe(l, !0), process.env.NODE_ENV !== "production" && Ve(l, "render");
        const z = Un(l);
        process.env.NODE_ENV !== "production" && Ce(l, "render");
        const de = l.subTree;
        l.subTree = z, process.env.NODE_ENV !== "production" && Ve(l, "patch"), P(
          de,
          z,
          d(de.el),
          Yt(de),
          l,
          _,
          v
        ), process.env.NODE_ENV !== "production" && Ce(l, "patch"), D.el = z.el, L === null && Ji(l, z.el), x && ie(x, _), (U = D.props && D.props.onVnodeUpdated) && ie(() => Ne(U, C, D, M), _), process.env.NODE_ENV !== "production" && Jr(l), process.env.NODE_ENV !== "production" && on();
      } else {
        let D;
        const { el: w, props: x } = f, { bm: C, m: M, parent: L } = l, U = At(f);
        if (qe(l, !1), C && xt(C), !U && (D = x && x.onVnodeBeforeMount) && Ne(D, L, f), qe(l, !0), w && jn) {
          const z = () => {
            process.env.NODE_ENV !== "production" && Ve(l, "render"), l.subTree = Un(l), process.env.NODE_ENV !== "production" && Ce(l, "render"), process.env.NODE_ENV !== "production" && Ve(l, "hydrate"), jn(w, l.subTree, l, _, null), process.env.NODE_ENV !== "production" && Ce(l, "hydrate");
          };
          U ? f.type.__asyncLoader().then(
            () => !l.isUnmounted && z()
          ) : z();
        } else {
          process.env.NODE_ENV !== "production" && Ve(l, "render");
          const z = l.subTree = Un(l);
          process.env.NODE_ENV !== "production" && Ce(l, "render"), process.env.NODE_ENV !== "production" && Ve(l, "patch"), P(null, z, p, m, l, _, v), process.env.NODE_ENV !== "production" && Ce(l, "patch"), f.el = z.el;
        }
        if (M && ie(M, _), !U && (D = x && x.onVnodeMounted)) {
          const z = f;
          ie(() => Ne(D, L, z), _);
        }
        (f.shapeFlag & 256 || L && At(L.vnode) && L.vnode.shapeFlag & 256) && l.a && ie(l.a, _), l.isMounted = !0, process.env.NODE_ENV !== "production" && Si(l), f = p = m = null;
      }
    }, b = l.effect = new go(
      E,
      () => On(g),
      l.scope
    ), g = l.update = () => b.run();
    g.id = l.uid, qe(l, !0), process.env.NODE_ENV !== "production" && (b.onTrack = l.rtc ? (D) => xt(l.rtc, D) : void 0, b.onTrigger = l.rtg ? (D) => xt(l.rtg, D) : void 0, g.ownerInstance = l), g();
  }, j = (l, f, p) => {
    f.component = l;
    const m = l.vnode.props;
    l.vnode = f, l.next = null, wl(l, f.props, m, p), Pl(l, f.children, p), it(), Yo(), lt();
  }, ge = (l, f, p, m, _, v, O, E, b = !1) => {
    const g = l && l.children, D = l ? l.shapeFlag : 0, w = f.children, { patchFlag: x, shapeFlag: C } = f;
    if (x > 0) {
      if (x & 128) {
        wt(g, w, p, m, _, v, O, E, b);
        return;
      } else if (x & 256) {
        Mn(g, w, p, m, _, v, O, E, b);
        return;
      }
    }
    C & 8 ? (D & 16 && xe(g, _, v), w !== g && h(p, w)) : D & 16 ? C & 16 ? wt(g, w, p, m, _, v, O, E, b) : xe(g, _, v, !0) : (D & 8 && h(p, ""), C & 16 && fe(w, p, m, _, v, O, E, b));
  }, Mn = (l, f, p, m, _, v, O, E, b) => {
    l = l || gt, f = f || gt;
    const g = l.length, D = f.length, w = Math.min(g, D);
    let x;
    for (x = 0; x < w; x++) {
      const C = f[x] = b ? Se(f[x]) : pe(f[x]);
      P(l[x], C, p, null, _, v, O, E, b);
    }
    g > D ? xe(l, _, v, !0, !1, w) : fe(f, p, m, _, v, O, E, b, w);
  }, wt = (l, f, p, m, _, v, O, E, b) => {
    let g = 0;
    const D = f.length;
    let w = l.length - 1, x = D - 1;
    for (; g <= w && g <= x; ) {
      const C = l[g], M = f[g] = b ? Se(f[g]) : pe(f[g]);
      if (Ct(C, M))
        P(C, M, p, null, _, v, O, E, b);
      else
        break;
      g++;
    }
    for (; g <= w && g <= x; ) {
      const C = l[w], M = f[x] = b ? Se(f[x]) : pe(f[x]);
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
          P(null, f[g] = b ? Se(f[g]) : pe(f[g]), p, M, _, v, O, E, b), g++;
      }
    } else if (g > x)
      for (; g <= w; )
        Ae(l[g], _, v, !0), g++;
    else {
      const C = g, M = g, L = /* @__PURE__ */ new Map();
      for (g = M; g <= x; g++) {
        const ne = f[g] = b ? Se(f[g]) : pe(f[g]);
        ne.key != null && (process.env.NODE_ENV !== "production" && L.has(ne.key) && y("Duplicate keys found during update:", JSON.stringify(ne.key), "Make sure keys are unique."), L.set(ne.key, g));
      }
      let U, z = 0;
      const de = x - M + 1;
      let at = !1, jo = 0;
      const Dt = new Array(de);
      for (g = 0; g < de; g++)
        Dt[g] = 0;
      for (g = C; g <= w; g++) {
        const ne = l[g];
        if (z >= de) {
          Ae(ne, _, v, !0);
          continue;
        }
        let Ee;
        if (ne.key != null)
          Ee = L.get(ne.key);
        else
          for (U = M; U <= x; U++)
            if (Dt[U - M] === 0 && Ct(ne, f[U])) {
              Ee = U;
              break;
            }
        Ee === void 0 ? Ae(ne, _, v, !0) : (Dt[Ee - M] = g + 1, Ee >= jo ? jo = Ee : at = !0, P(ne, f[Ee], p, null, _, v, O, E, b), z++);
      }
      const So = at ? Sl(Dt) : gt;
      for (U = So.length - 1, g = de - 1; g >= 0; g--) {
        const ne = M + g, Ee = f[ne], Uo = ne + 1 < D ? f[ne + 1].el : m;
        Dt[g] === 0 ? P(null, Ee, p, Uo, _, v, O, E, b) : at && (U < 0 || g !== So[U] ? ut(Ee, p, Uo, 2) : U--);
      }
    }
  }, ut = (l, f, p, m, _ = null) => {
    const { el: v, type: O, transition: E, children: b, shapeFlag: g } = l;
    if (g & 6) {
      ut(l.component.subTree, f, p, m);
      return;
    }
    if (g & 128) {
      l.suspense.move(f, p, m);
      return;
    }
    if (g & 64) {
      O.move(l, f, p, ft);
      return;
    }
    if (O === ce) {
      o(v, f, p);
      for (let w = 0; w < b.length; w++)
        ut(b[w], f, p, m);
      o(l.anchor, f, p);
      return;
    }
    if (O === sn) {
      we(l, f, p);
      return;
    }
    if (m !== 2 && g & 1 && E)
      if (m === 0)
        E.beforeEnter(v), o(v, f, p), ie(() => E.enter(v), _);
      else {
        const { leave: w, delayLeave: x, afterLeave: C } = E, M = () => o(v, f, p), L = () => {
          w(v, () => {
            M(), C && C();
          });
        };
        x ? x(v, M, L) : L();
      }
    else
      o(v, f, p);
  }, Ae = (l, f, p, m = !1, _ = !1) => {
    const { type: v, props: O, ref: E, children: b, dynamicChildren: g, shapeFlag: D, patchFlag: w, dirs: x } = l;
    if (E != null && ro(E, null, p, l, !0), D & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const C = D & 1 && x, M = !At(l);
    let L;
    if (M && (L = O && O.onVnodeBeforeUnmount) && Ne(L, f, l), D & 6)
      xs(l.component, p, m);
    else {
      if (D & 128) {
        l.suspense.unmount(p, m);
        return;
      }
      C && ze(l, null, f, "beforeUnmount"), D & 64 ? l.type.remove(l, f, p, _, ft, m) : g && (v !== ce || w > 0 && w & 64) ? xe(g, f, p, !1, !0) : (v === ce && w & 384 || !_ && D & 16) && xe(b, f, p), m && An(l);
    }
    (M && (L = O && O.onVnodeUnmounted) || C) && ie(() => {
      L && Ne(L, f, l), C && ze(l, null, f, "unmounted");
    }, p);
  }, An = (l) => {
    const { type: f, el: p, anchor: m, transition: _ } = l;
    if (f === ce) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && _ && !_.persisted ? l.children.forEach((O) => {
        O.type === ue ? r(O.el) : An(O);
      }) : Ds(p, m);
      return;
    }
    if (f === sn) {
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
  }, Ds = (l, f) => {
    let p;
    for (; l !== f; )
      p = N(l), r(l), l = p;
    r(f);
  }, xs = (l, f, p) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Ri(l);
    const { bum: m, scope: _, update: v, subTree: O, um: E } = l;
    m && xt(m), _.stop(), v && (v.active = !1, Ae(O, l, f, p)), E && ie(E, f), ie(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && Ui(l);
  }, xe = (l, f, p, m = !1, _ = !1, v = 0) => {
    for (let O = v; O < l.length; O++)
      Ae(l[O], f, p, m, _);
  }, Yt = (l) => l.shapeFlag & 6 ? Yt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : N(l.anchor || l.el), Fo = (l, f, p) => {
    l == null ? f._vnode && Ae(f._vnode, null, null, !0) : P(f._vnode || null, l, f, null, null, null, p), Yo(), Wr(), f._vnode = l;
  }, ft = {
    p: P,
    um: Ae,
    m: ut,
    r: An,
    mt: Me,
    mc: fe,
    pc: ge,
    pbc: Re,
    n: Yt,
    o: e
  };
  let Fn, jn;
  return t && ([Fn, jn] = t(ft)), {
    render: Fo,
    hydrate: Fn,
    createApp: Ml(Fo, Fn)
  };
}
function qe({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function rn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if ($(o) && $(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let c = r[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[s] = Se(r[s]), c.el = i.el), n || rn(i, c)), process.env.NODE_ENV !== "production" && c.type === ue && !c.el && (c.el = i.el);
    }
}
function Sl(e) {
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
const Ul = (e) => e.__isTeleport, ce = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Cn = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), ue = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), sn = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Ft = [];
let he = null;
function Tn(e = !1) {
  Ft.push(he = e ? null : []);
}
function Hl() {
  Ft.pop(), he = Ft[Ft.length - 1] || null;
}
let Bt = 1;
function ir(e) {
  Bt += e;
}
function _s(e) {
  return e.dynamicChildren = Bt > 0 ? he || gt : null, Hl(), Bt > 0 && he && he.push(e), e;
}
function $o(e, t, n, o, r, s) {
  return _s(Ke(e, t, n, o, r, s, !0));
}
function Ll(e, t, n, o, r) {
  return _s(Oe(e, t, n, o, r, !0));
}
function $n(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ct(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && pt.has(t.type) ? !1 : e.type === t.type && e.key === t.key;
}
const kl = (...e) => gs(...e), In = "__vInternal", ms = ({ key: e }) => e != null ? e : null, ln = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? J(e) || Y(e) || T(e) ? { i: te, r: e, k: t, f: !!n } : e : null;
function Ke(e, t = null, n = null, o = 0, r = null, s = e === ce ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ms(t),
    ref: t && ln(t),
    scopeId: Qr,
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
  return c ? (Io(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= J(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && y("VNode created with invalid key (NaN). VNode type:", u.type), Bt > 0 && !i && he && (u.patchFlag > 0 || s & 6) && u.patchFlag !== 32 && he.push(u), u;
}
const Oe = process.env.NODE_ENV !== "production" ? kl : gs;
function gs(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === al) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = ue), $n(e)) {
    const c = We(e, t, !0);
    return n && Io(c, n), Bt > 0 && !s && he && (c.shapeFlag & 6 ? he[he.indexOf(e)] = c : he.push(c)), c.patchFlag |= -2, c;
  }
  if (Os(e) && (e = e.__vccOpts), t) {
    t = Bl(t);
    let { class: c, style: u } = t;
    c && !J(c) && (t.class = fo(c)), k(u) && (Jn(u) && !$(u) && (u = K({}, u)), t.style = uo(u));
  }
  const i = J(e) ? 1 : Xi(e) ? 128 : Ul(e) ? 64 : k(e) ? 4 : T(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Jn(e) && (e = I(e), y("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), Ke(e, t, n, o, r, i, s, !0);
}
function Bl(e) {
  return e ? Jn(e) || In in e ? K({}, e) : e : null;
}
function We(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, c = t ? Ns(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ms(c),
    ref: t && t.ref ? n && r ? $(r) ? r.concat(ln(t)) : [r, ln(t)] : ln(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && $(i) ? i.map(Es) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ce ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && We(e.ssContent),
    ssFallback: e.ssFallback && We(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function Es(e) {
  const t = We(e);
  return $(e.children) && (t.children = e.children.map(Es)), t;
}
function Kl(e = " ", t = 0) {
  return Oe(Cn, null, e, t);
}
function pe(e) {
  return e == null || typeof e == "boolean" ? Oe(ue) : $(e) ? Oe(
    ce,
    null,
    e.slice()
  ) : typeof e == "object" ? Se(e) : Oe(Cn, null, String(e));
}
function Se(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : We(e);
}
function Io(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if ($(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Io(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(In in t) ? t._ctx = te : r === 3 && te && (te.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    T(t) ? (t = { default: t, _ctx: te }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Kl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ns(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = fo([t.class, o.class]));
      else if (r === "style")
        t.style = uo([t.style, o.style]);
      else if (Wt(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !($(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Ne(e, t, n, o = null) {
  me(e, t, 7, [
    n,
    o
  ]);
}
const Wl = hs();
let zl = 0;
function ql(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Wl, s = {
    uid: zl++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new ks(!0),
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
    propsOptions: us(o, r),
    emitsOptions: Zr(o, r),
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
  return process.env.NODE_ENV !== "production" ? s.ctx = pl(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Bi.bind(null, s), e.ce && e.ce(s), s;
}
let G = null;
const bt = (e) => {
  G = e, e.scope.on();
}, ot = () => {
  G && G.scope.off(), G = null;
}, Yl = /* @__PURE__ */ yt("slot,component");
function so(e, t) {
  const n = t.isNativeTag || vr;
  (Yl(e) || n(e)) && y("Do not use built-in or reserved HTML elements as component id: " + e);
}
function vs(e) {
  return e.vnode.shapeFlag & 4;
}
let Kt = !1;
function Jl(e, t = !1) {
  Kt = t;
  const { props: n, children: o } = e.vnode, r = vs(e);
  yl(e, n, r, t), Il(e, o);
  const s = r ? Xl(e, t) : void 0;
  return Kt = !1, s;
}
function Xl(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && so(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        so(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        rs(s[i]);
    }
    o.compilerOptions && Zl() && y('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Ar(new Proxy(e.ctx, is)), process.env.NODE_ENV !== "production" && hl(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? Ql(e) : null;
    bt(e), it();
    const i = Te(r, e, 0, [process.env.NODE_ENV !== "production" ? _t(e.props) : e.props, s]);
    if (lt(), ot(), ho(i)) {
      if (i.then(ot, ot), t)
        return i.then((c) => {
          lr(e, c, t);
        }).catch((c) => {
          yn(c, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        y(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      lr(e, i, t);
  } else
    bs(e, t);
}
function lr(e, t, n) {
  T(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : k(t) ? (process.env.NODE_ENV !== "production" && $n(t) && y("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Sr(t), process.env.NODE_ENV !== "production" && _l(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), bs(e, n);
}
let io;
const Zl = () => !io;
function bs(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && io && !o.render) {
      const r = o.template || Co(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Ve(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: u } = o, a = K(K({
          isCustomElement: s,
          delimiters: c
        }, i), u);
        o.render = io(r, a), process.env.NODE_ENV !== "production" && Ce(e, "compile");
      }
    }
    e.render = o.render || Q;
  }
  bt(e), it(), gl(e), lt(), ot(), process.env.NODE_ENV !== "production" && !o.render && e.render === Q && !t && (o.template ? y('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : y("Component is missing template or render function."));
}
function cr(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return dn(), le(e, "get", "$attrs"), t[n];
    },
    set() {
      return y("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return y("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return le(e, "get", "$attrs"), t[n];
    }
  });
}
function Ql(e) {
  const t = (o) => {
    process.env.NODE_ENV !== "production" && e.exposed && y("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = cr(e));
    },
    get slots() {
      return _t(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = cr(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Pn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Sr(Ar(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in vt)
          return vt[n](e);
      }
    }));
}
const Gl = /(?:^|[-_])(\w)/g, ec = (e) => e.replace(Gl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ys(e, t = !0) {
  return T(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Rn(e, t, n = !1) {
  let o = ys(t);
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
  return o ? ec(o) : n ? "App" : "Anonymous";
}
function Os(e) {
  return T(e) && "__vccOpts" in e;
}
const tc = (e, t) => yi(e, t, Kt);
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function Ln(e) {
  return !!(e && e.__v_isShallow);
}
function nc() {
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
        ["span", e, Ln(d) ? "ShallowReactive" : "Reactive"],
        "<",
        c(d),
        `>${Be(d) ? " (readonly)" : ""}`
      ] : Be(d) ? [
        "div",
        {},
        ["span", e, Ln(d) ? "ShallowReadonly" : "Readonly"],
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
    if (T(V))
      return;
    const A = {};
    for (const P in d.ctx)
      a(V, P, N) && (A[P] = d.ctx[P]);
    return A;
  }
  function a(d, N, V) {
    const A = d[V];
    if ($(A) && A.includes(N) || k(A) && N in A || d.extends && a(d.extends, N, V) || d.mixins && d.mixins.some((P) => a(P, N, V)))
      return !0;
  }
  function h(d) {
    return Ln(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const ur = "3.2.40", oc = "http://www.w3.org/2000/svg", Ze = typeof document < "u" ? document : null, fr = Ze && /* @__PURE__ */ Ze.createElement("template"), rc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? Ze.createElementNS(oc, e) : Ze.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Ze.createTextNode(e),
  createComment: (e) => Ze.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ze.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      fr.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = fr.content;
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
function sc(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function ic(e, t, n) {
  const o = e.style, r = J(n);
  if (n && !r) {
    for (const s in n)
      lo(o, s, n[s]);
    if (t && !J(t))
      for (const s in t)
        n[s] == null && lo(o, s, "");
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const ar = /\s*!important$/;
function lo(e, t, n) {
  if ($(n))
    n.forEach((o) => lo(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = lc(e, t);
    ar.test(n) ? e.setProperty(_e(o), n.replace(ar, ""), "important") : e[o] = n;
  }
}
const dr = ["Webkit", "Moz", "ms"], kn = {};
function lc(e, t) {
  const n = kn[t];
  if (n)
    return n;
  let o = Le(t);
  if (o !== "filter" && o in e)
    return kn[t] = o;
  o = gn(o);
  for (let r = 0; r < dr.length; r++) {
    const s = dr[r] + o;
    if (s in e)
      return kn[t] = s;
  }
  return t;
}
const pr = "http://www.w3.org/1999/xlink";
function cc(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(pr, t.slice(6, t.length)) : e.setAttributeNS(pr, t, n);
  else {
    const s = $s(t);
    n == null || s && !Nr(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function uc(e, t, n, o, r, s, i) {
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
    u === "boolean" ? n = Nr(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (u) {
    process.env.NODE_ENV !== "production" && !c && y(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, u);
  }
  c && e.removeAttribute(t);
}
const [ws, fc] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let co = 0;
const ac = /* @__PURE__ */ Promise.resolve(), dc = () => {
  co = 0;
}, pc = () => co || (ac.then(dc), co = ws());
function hc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function _c(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function mc(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [c, u] = gc(t);
    if (o) {
      const a = s[t] = Ec(o, r);
      hc(e, c, a, u);
    } else
      i && (_c(e, c, i, u), s[t] = void 0);
  }
}
const hr = /(?:Once|Passive|Capture)$/;
function gc(e) {
  let t;
  if (hr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(hr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : _e(e.slice(2)), t];
}
function Ec(e, t) {
  const n = (o) => {
    const r = o.timeStamp || ws();
    (fc || r >= n.attached - 1) && me(Nc(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = pc(), n;
}
function Nc(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const _r = /^on[a-z]/, vc = (e, t, n, o, r = !1, s, i, c, u) => {
  t === "class" ? sc(e, o, r) : t === "style" ? ic(e, n, o) : Wt(t) ? cn(t) || mc(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : bc(e, t, o, r)) ? uc(e, t, o, s, i, c, u) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), cc(e, t, o, r));
};
function bc(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && _r.test(t) && T(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || _r.test(t) && J(n) ? !1 : t in e;
}
function Po(e, t) {
  const n = Dn(e);
  class o extends Ro {
    constructor(s) {
      super(n, s, t);
    }
  }
  return o.def = n, o;
}
const yc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Ro extends yc {
  constructor(t, n = {}, o) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && y("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), this.attachShadow({ mode: "open" }));
  }
  connectedCallback() {
    this._connected = !0, this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    this._connected = !1, kr(() => {
      this._connected || (gr(null, this.shadowRoot), this._instance = null);
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
      const { props: r, styles: s } = o, i = !$(r), c = r ? i ? Object.keys(r) : r : [];
      let u;
      if (i)
        for (const a in this._props) {
          const h = r[a];
          (h === Number || h && h.type === Number) && (this._props[a] = Bn(this._props[a]), (u || (u = /* @__PURE__ */ Object.create(null)))[a] = !0);
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
    this._numberProps && this._numberProps[t] && (n = Bn(n)), this._setProp(Le(t), n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, o = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), o && (n === !0 ? this.setAttribute(_e(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(_e(t), n + "") : n || this.removeAttribute(_e(t))));
  }
  _update() {
    gr(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Oe(this._def, K({}, this._props));
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
        if (o instanceof Ro) {
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
const Oc = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Tt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), Tt(e, !0), o.enter(e)) : o.leave(e, () => {
      Tt(e, !1);
    }) : Tt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Tt(e, t);
  }
};
function Tt(e, t) {
  e.style.display = t ? e._vod : "none";
}
const wc = /* @__PURE__ */ K({ patchProp: vc }, rc);
let mr;
function Dc() {
  return mr || (mr = Fl(wc));
}
const gr = (...e) => {
  Dc().render(...e);
};
function xc() {
  nc();
}
process.env.NODE_ENV !== "production" && xc();
let en;
const Vc = new Uint8Array(16);
function Cc() {
  if (!en && (en = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !en))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return en(Vc);
}
const Z = [];
for (let e = 0; e < 256; ++e)
  Z.push((e + 256).toString(16).slice(1));
function Tc(e, t = 0) {
  return (Z[e[t + 0]] + Z[e[t + 1]] + Z[e[t + 2]] + Z[e[t + 3]] + "-" + Z[e[t + 4]] + Z[e[t + 5]] + "-" + Z[e[t + 6]] + Z[e[t + 7]] + "-" + Z[e[t + 8]] + Z[e[t + 9]] + "-" + Z[e[t + 10]] + Z[e[t + 11]] + Z[e[t + 12]] + Z[e[t + 13]] + Z[e[t + 14]] + Z[e[t + 15]]).toLowerCase();
}
const $c = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Er = {
  randomUUID: $c
};
function Ic(e, t, n) {
  if (Er.randomUUID && !t && !e)
    return Er.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || Cc)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
    n = n || 0;
    for (let r = 0; r < 16; ++r)
      t[n + r] = o[r];
    return t;
  }
  return Tc(o);
}
var st = /* @__PURE__ */ ((e) => (e.Created = "created", e.TimeUpdate = "timeupdate", e.LoadStart = "loadstart", e.Play = "play", e.Pause = "pause", e.Playing = "playing", e))(st || {});
const mt = class {
  constructor(t, n) {
    dt(this, "mediaEl_");
    dt(this, "id");
    dt(this, "containerEl");
    dt(this, "hasStarted", !1);
    this.id = `player-${Ic()}`, this.mediaEl_ = t, this.containerEl = n, this.one(st.Playing, () => {
      this.hasStarted = !0;
    });
  }
  get videoElement() {
    return this.mediaEl_;
  }
  get currentTime() {
    return this.mediaEl_.currentTime;
  }
  set currentTime(t) {
    this.mediaEl_.currentTime = t;
  }
  get duration() {
    return this.mediaEl_.duration;
  }
  get played() {
    return this.mediaEl_.played;
  }
  get paused() {
    return this.mediaEl_.paused;
  }
  play() {
    return this.mediaEl_.play();
  }
  pause() {
    this.mediaEl_.pause();
  }
  togglePlay() {
    this.played ? this.pause() : this.play();
  }
  on(t, n) {
    return this.mediaEl_.addEventListener(t, n), this;
  }
  one(t, n) {
    const o = (r) => {
      this.off(t, o), n(r);
    };
    return this.on(t, o), this;
  }
  off(t, n) {
    return this.mediaEl_.removeEventListener(t, n), this;
  }
  static installModule(t) {
    !!t && mt.modules_.indexOf(t) < 0 && mt.modules_.push(t);
  }
  static use(t) {
    return t.forEach((n) => mt.installModule(n)), mt;
  }
};
let jt = mt;
dt(jt, "modules_", []);
const Pc = { class: "lpr" }, Rc = ["id", "src"], Mc = /* @__PURE__ */ Dn({
  __name: "VideoPlayer.ce",
  props: {
    src: null
  },
  emits: [st.Created],
  setup(e, { emit: t }) {
    jt.use([]);
    const n = Pt(), o = Pt(), r = Pt();
    Vn(() => {
      !n.value || !o.value || (r.value = new jt(n.value, o.value), es("player", r.value), t(st.Created, r.value));
    });
    const s = () => {
      !r.value || r.value.togglePlay();
    };
    return (i, c) => (Tn(), $o("div", Pc, [
      Ke("video", Ns({
        id: r.value && r.value.id,
        src: e.src
      }, i.$attrs, {
        class: "lpr__video",
        ref_key: "videoElementRef",
        ref: n
      }), null, 16, Rc),
      Ke("div", {
        ref_key: "containerElementRef",
        ref: o,
        class: "lpr__container",
        onClick: s
      }, [
        dl(i.$slots, "default")
      ], 512)
    ]));
  }
}), Ac = `:host{--lpr-border-radius: 16px}*{box-sizing:border-box}.lpr{position:relative;display:flex;overflow:hidden;border-radius:var(--lpr-border-radius)}.lpr__video{width:100%;height:100%;box-sizing:border-box}.lpr__container{position:absolute;top:0;left:0;width:100%;height:100%}
`, Mo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Fc = /* @__PURE__ */ Mo(Mc, [["styles", [Ac]]]), jc = { class: "lpr-timeline__container" }, Sc = /* @__PURE__ */ Ke("div", { class: "lpr-timeline__circle" }, null, -1), Uc = [
  Sc
], Hc = /* @__PURE__ */ Dn({
  __name: "TimeLine.ce",
  setup(e) {
    const t = Mt("player"), n = Pt();
    Vn(() => {
      !n.value || t.on(st.TimeUpdate, o);
    }), xo(() => {
      t.off(st.TimeUpdate, o);
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
    return (s, i) => (Tn(), $o("div", jc, [
      Ke("div", {
        class: "lpr-timeline",
        onClick: r
      }),
      Ke("div", {
        ref_key: "progressRef",
        ref: n,
        class: "lpr-timeline__progress"
      }, Uc, 512)
    ]));
  }
}), Lc = `:host{--timeline-color: #787574;--timeline-progress-color: #00b9ae;--timeline-height: 4px;--timeline-border-radius: 8px;--timeline-padding-left: 32px;--timeline-padding-right: 32px;--timeline-padding-bottom: max(12%, 36px)}.lpr-timeline__container{position:absolute;left:var(--timeline-padding-left);right:var(--timeline-padding-right);bottom:var(--timeline-padding-bottom);height:var(--timeline-height)}.lpr-timeline,.lpr-timeline__progress{position:absolute;top:0;left:0;right:0;bottom:0;height:var(--timeline-height);border:0 solid transparent;border-radius:var(--timeline-border-radius)}.lpr-timeline{cursor:pointer;background-color:var(--timeline-color);opacity:.7}.lpr-timeline__progress{pointer-events:none;width:0;background-color:var(--timeline-progress-color)}.lpr-timeline__circle{position:absolute;top:50%;right:0;transform:translateY(-50%);width:10px;height:10px;border-radius:50%;background-color:var(--timeline-progress-color)}
`, kc = /* @__PURE__ */ Mo(Hc, [["styles", [Lc]]]), Bc = ["src"], Kc = /* @__PURE__ */ Dn({
  __name: "Poster.ce",
  props: {
    src: { default: "" }
  },
  setup(e) {
    const t = Mt("player"), n = Pt(!0);
    Vn(() => {
      t.one(st.Playing, () => o(!1));
    });
    const o = (s = !n.value) => {
      n.value = s;
    }, r = () => {
      !t || t.play();
    };
    return (s, i) => fl((Tn(), $o("div", {
      class: "lpr-poster__container",
      onClick: r
    }, [
      Ke("img", {
        src: e.src,
        class: "lpr-poster"
      }, null, 8, Bc)
    ], 512)), [
      [Oc, n.value]
    ]);
  }
}), Wc = `:host{--lpr-poster-background: #0a0a0a;--lpr-poster-brightness: 60%}.lpr-poster{width:100%;height:100%;object-fit:cover}.lpr-poster__container{position:absolute;top:0;left:0;width:100%;height:100%;background:var(--lpr-poster-background);filter:brightness(var(--lpr-poster-brightness));z-index:2;cursor:pointer}
`, zc = /* @__PURE__ */ Mo(Kc, [["styles", [Wc]]]), qc = Po(Fc), Yc = Po(kc), Jc = Po(zc);
customElements.define("lpr-player", qc);
customElements.define("lpr-timeline", Yc);
customElements.define("lpr-poster", Jc);
