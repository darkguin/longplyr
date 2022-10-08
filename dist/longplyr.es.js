var xs = Object.defineProperty;
var Vs = (e, t, n) => t in e ? xs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var xt = (e, t, n) => (Vs(e, typeof t != "symbol" ? t + "" : t, n), n);
function yt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const Cs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ts = /* @__PURE__ */ yt(Cs);
function Nr(e) {
  return !!e || e === "";
}
function uo(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = J(o) ? Ps(o) : uo(o);
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
const $s = /;(?![^(]*\))/g, Is = /:(.+)/;
function Ps(e) {
  const t = {};
  return e.split($s).forEach((n) => {
    if (n) {
      const o = n.split(Is);
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
const S = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, _t = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Q = () => {
}, vr = () => !1, Rs = /^on[^a-z]/, Wt = (e) => Rs.test(e), ln = (e) => e.startsWith("onUpdate:"), K = Object.assign, ao = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ms = Object.prototype.hasOwnProperty, R = (e, t) => Ms.call(e, t), $ = Array.isArray, mt = (e) => _n(e) === "[object Map]", As = (e) => _n(e) === "[object Set]", T = (e) => typeof e == "function", J = (e) => typeof e == "string", po = (e) => typeof e == "symbol", k = (e) => e !== null && typeof e == "object", ho = (e) => k(e) && T(e.then) && T(e.catch), js = Object.prototype.toString, _n = (e) => js.call(e), _o = (e) => _n(e).slice(8, -1), Fs = (e) => _n(e) === "[object Object]", mo = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, tn = /* @__PURE__ */ yt(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ss = /* @__PURE__ */ yt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), mn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Us = /-(\w)/g, Le = mn((e) => e.replace(Us, (t, n) => n ? n.toUpperCase() : "")), Hs = /\B([A-Z])/g, _e = mn((e) => e.replace(Hs, "-$1").toLowerCase()), gn = mn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ye = mn((e) => e ? `on${gn(e)}` : ""), St = (e, t) => !Object.is(e, t), Vt = (e, t) => {
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
class Ls {
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
function ks(e, t = ve) {
  t && t.active && t.effects.push(e);
}
const Ut = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, yr = (e) => (e.w & ke) > 0, Or = (e) => (e.n & ke) > 0, Bs = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= ke;
}, Ks = (e) => {
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
let It = 0, ke = 1;
const zn = 30;
let re;
const et = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), qn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class go {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, ks(this, o);
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
      return this.parent = re, re = this, He = !0, ke = 1 << ++It, It <= zn ? Bs(this) : Lo(this), this.fn();
    } finally {
      It <= zn && Ks(this), ke = 1 << --It, re = this.parent, He = n, this.parent = void 0, this.deferStop && this.stop();
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
function ct() {
  const e = wr.pop();
  He = e === void 0 ? !0 : e;
}
function ce(e, t, n) {
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
  It <= zn ? Or(e) || (e.n |= ke, n = !yr(e)) : n = !e.has(re), n && (e.add(re), re.deps.push(e), process.env.NODE_ENV !== "production" && re.onTrack && re.onTrack(Object.assign({ effect: re }, t)));
}
function $e(e, t, n, o, r, s) {
  const i = Wn.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && $(e))
    i.forEach((a, h) => {
      (h === "length" || h >= o) && l.push(a);
    });
  else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        $(e) ? mo(n) && l.push(i.get("length")) : (l.push(i.get(et)), mt(e) && l.push(i.get(qn)));
        break;
      case "delete":
        $(e) || (l.push(i.get(et)), mt(e) && l.push(i.get(qn)));
        break;
      case "set":
        mt(e) && l.push(i.get(et));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? pt(l[0], u) : pt(l[0]));
  else {
    const a = [];
    for (const h of l)
      h && a.push(...h);
    process.env.NODE_ENV !== "production" ? pt(Ut(a), u) : pt(Ut(a));
  }
}
function pt(e, t) {
  const n = $(e) ? e : [...e];
  for (const o of n)
    o.computed && ko(o, t);
  for (const o of n)
    o.computed || ko(o, t);
}
function ko(e, t) {
  (e !== re || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(K({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Ws = /* @__PURE__ */ yt("__proto__,__v_isRef,__isVue"), Dr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(po)
), zs = /* @__PURE__ */ En(), qs = /* @__PURE__ */ En(!1, !0), Ys = /* @__PURE__ */ En(!0), Js = /* @__PURE__ */ En(!0, !0), Bo = /* @__PURE__ */ Xs();
function Xs() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = I(this);
      for (let s = 0, i = this.length; s < i; s++)
        ce(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(I)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      it();
      const o = I(this)[t].apply(this, n);
      return ct(), o;
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
    const l = Reflect.get(o, r, s);
    return (po(r) ? Dr.has(r) : Ws(r)) || (e || ce(o, "get", r), t) ? l : Y(l) ? i && mo(r) ? l : l.value : k(l) ? e ? Mr(l) : No(l) : l;
  };
}
const Zs = /* @__PURE__ */ xr(), Qs = /* @__PURE__ */ xr(!0);
function xr(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (Be(i) && Y(i) && !Y(r))
      return !1;
    if (!e && (!fn(r) && !Be(r) && (i = I(i), r = I(r)), !$(n) && Y(i) && !Y(r)))
      return i.value = r, !0;
    const l = $(n) && mo(o) ? Number(o) < n.length : R(n, o), u = Reflect.set(n, o, r, s);
    return n === I(s) && (l ? St(r, i) && $e(n, "set", o, r, i) : $e(n, "add", o, r)), u;
  };
}
function Gs(e, t) {
  const n = R(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && $e(e, "delete", t, void 0, o), r;
}
function ei(e, t) {
  const n = Reflect.has(e, t);
  return (!po(t) || !Dr.has(t)) && ce(e, "has", t), n;
}
function ti(e) {
  return ce(e, "iterate", $(e) ? "length" : et), Reflect.ownKeys(e);
}
const Vr = {
  get: zs,
  set: Zs,
  deleteProperty: Gs,
  has: ei,
  ownKeys: ti
}, Cr = {
  get: Ys,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Kn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Kn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, ni = /* @__PURE__ */ K({}, Vr, {
  get: qs,
  set: Qs
}), oi = /* @__PURE__ */ K({}, Cr, {
  get: Js
}), Eo = (e) => e, Nn = (e) => Reflect.getPrototypeOf(e);
function Jt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = I(e), s = I(t);
  n || (t !== s && ce(r, "get", t), ce(r, "get", s));
  const { has: i } = Nn(r), l = o ? Eo : n ? vo : Ht;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, s))
    return l(e.get(s));
  e !== r && e.get(t);
}
function Xt(e, t = !1) {
  const n = this.__v_raw, o = I(n), r = I(e);
  return t || (e !== r && ce(o, "has", e), ce(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Zt(e, t = !1) {
  return e = e.__v_raw, !t && ce(I(e), "iterate", et), Reflect.get(e, "size", e);
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
  const e = I(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? mt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && $e(e, "clear", void 0, void 0, n), o;
}
function Qt(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, l = I(i), u = t ? Eo : e ? vo : Ht;
    return !e && ce(l, "iterate", et), i.forEach((a, h) => o.call(r, u(a), u(h), s));
  };
}
function Gt(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = I(r), i = mt(s), l = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...o), h = n ? Eo : t ? vo : Ht;
    return !t && ce(s, "iterate", u ? qn : et), {
      next() {
        const { value: d, done: N } = a.next();
        return N ? { value: d, done: N } : {
          value: l ? [h(d[0]), h(d[1])] : h(d),
          done: N
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function je(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${gn(e)} operation ${n}failed: target is readonly.`, I(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function ri() {
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
    add: je("add"),
    set: je("set"),
    delete: je("delete"),
    clear: je("clear"),
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
    add: je("add"),
    set: je("set"),
    delete: je("delete"),
    clear: je("clear"),
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
const [si, ii, ci, li] = /* @__PURE__ */ ri();
function vn(e, t) {
  const n = t ? e ? li : ci : e ? ii : si;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(R(n, r) && r in o ? n : o, r, s);
}
const ui = {
  get: /* @__PURE__ */ vn(!1, !1)
}, fi = {
  get: /* @__PURE__ */ vn(!1, !0)
}, ai = {
  get: /* @__PURE__ */ vn(!0, !1)
}, di = {
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
function pi(e) {
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
function hi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : pi(_o(e));
}
function No(e) {
  return Be(e) ? e : bn(e, !1, Vr, ui, $r);
}
function _i(e) {
  return bn(e, !1, ni, fi, Ir);
}
function Mr(e) {
  return bn(e, !0, Cr, ai, Pr);
}
function ht(e) {
  return bn(e, !0, oi, di, Rr);
}
function bn(e, t, n, o, r) {
  if (!k(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = hi(e);
  if (i === 0)
    return e;
  const l = new Proxy(e, i === 2 ? o : n);
  return r.set(e, l), l;
}
function tt(e) {
  return Be(e) ? tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Be(e) {
  return !!(e && e.__v_isReadonly);
}
function fn(e) {
  return !!(e && e.__v_isShallow);
}
function Jn(e) {
  return tt(e) || Be(e);
}
function I(e) {
  const t = e && e.__v_raw;
  return t ? I(t) : e;
}
function Ar(e) {
  return un(e, "__v_skip", !0), e;
}
const Ht = (e) => k(e) ? No(e) : e, vo = (e) => k(e) ? Mr(e) : e;
function jr(e) {
  He && re && (e = I(e), process.env.NODE_ENV !== "production" ? Yn(e.dep || (e.dep = Ut()), {
    target: e,
    type: "get",
    key: "value"
  }) : Yn(e.dep || (e.dep = Ut())));
}
function Fr(e, t) {
  e = I(e), e.dep && (process.env.NODE_ENV !== "production" ? pt(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : pt(e.dep));
}
function Y(e) {
  return !!(e && e.__v_isRef === !0);
}
function Rt(e) {
  return mi(e, !1);
}
function mi(e, t) {
  return Y(e) ? e : new gi(e, t);
}
class gi {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : I(t), this._value = n ? t : Ht(t);
  }
  get value() {
    return jr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || fn(t) || Be(t);
    t = n ? t : I(t), St(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Ht(t), Fr(this, t));
  }
}
function Ei(e) {
  return Y(e) ? e.value : e;
}
const Ni = {
  get: (e, t, n) => Ei(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return Y(r) && !Y(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Sr(e) {
  return tt(e) ? e : new Proxy(e, Ni);
}
var Ur;
class vi {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Ur] = !1, this._dirty = !0, this.effect = new go(t, () => {
      this._dirty || (this._dirty = !0, Fr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = I(this);
    return jr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Ur = "__v_isReadonly";
function bi(e, t, n = !1) {
  let o, r;
  const s = T(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Q) : (o = e.get, r = e.set);
  const i = new vi(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const nt = [];
function nn(e) {
  nt.push(e);
}
function on() {
  nt.pop();
}
function y(e, ...t) {
  it();
  const n = nt.length ? nt[nt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = yi();
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
`, ...Oi(r)), console.warn(...s);
  }
  ct();
}
function yi() {
  let e = nt[nt.length - 1];
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
function Oi(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...wi(n));
  }), t;
}
function wi({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Rn(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...Di(e.props), s] : [r + s];
}
function Di(e) {
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
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? bo[n] : n;
    for (; s; ) {
      const a = s.ec;
      if (a) {
        for (let h = 0; h < a.length; h++)
          if (a[h](e, i, l) === !1)
            return;
      }
      s = s.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Te(u, null, 10, [e, i, l]);
      return;
    }
  }
  xi(e, n, r, o);
}
function xi(e, t, n, o = !0) {
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
const gt = [];
let be = null, Fe = 0;
const Lr = /* @__PURE__ */ Promise.resolve();
let yo = null;
const Vi = 100;
function kr(e) {
  const t = yo || Lr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ci(e) {
  let t = ye + 1, n = ee.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    kt(ee[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function On(e) {
  (!ee.length || !ee.includes(e, Lt && e.allowRecurse ? ye + 1 : ye)) && (e.id == null ? ee.push(e) : ee.splice(Ci(e.id), 0, e), Br());
}
function Br() {
  !Lt && !Xn && (Xn = !0, yo = Lr.then(zr));
}
function Ti(e) {
  const t = ee.indexOf(e);
  t > ye && ee.splice(t, 1);
}
function Kr(e) {
  $(e) ? gt.push(...e) : (!be || !be.includes(e, e.allowRecurse ? Fe + 1 : Fe)) && gt.push(e), Br();
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
  if (gt.length) {
    const t = [...new Set(gt)];
    if (gt.length = 0, be) {
      be.push(...t);
      return;
    }
    for (be = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), be.sort((n, o) => kt(n) - kt(o)), Fe = 0; Fe < be.length; Fe++)
      process.env.NODE_ENV !== "production" && Oo(e, be[Fe]) || be[Fe]();
    be = null, Fe = 0;
  }
}
const kt = (e) => e.id == null ? 1 / 0 : e.id, $i = (e, t) => {
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
  Xn = !1, Lt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ee.sort($i);
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
    ye = 0, ee.length = 0, Wr(e), Lt = !1, yo = null, (ee.length || gt.length) && zr(e);
  }
}
function Oo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Vi) {
      const o = t.ownerInstance, r = o && bs(o.type);
      return y(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let ot = !1;
const dt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (br().__VUE_HMR_RUNTIME__ = {
  createRecord: Sn(qr),
  rerender: Sn(Ri),
  reload: Sn(Mi)
});
const st = /* @__PURE__ */ new Map();
function Ii(e) {
  const t = e.type.__hmrId;
  let n = st.get(t);
  n || (qr(t, e.type), n = st.get(t)), n.instances.add(e);
}
function Pi(e) {
  st.get(e.type.__hmrId).instances.delete(e);
}
function qr(e, t) {
  return st.has(e) ? !1 : (st.set(e, {
    initialDef: Mt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Mt(e) {
  return ys(e) ? e.__vccOpts : e;
}
function Ri(e, t) {
  const n = st.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Mt(o.type).render = t), o.renderCache = [], ot = !0, o.update(), ot = !1;
  }));
}
function Mi(e, t) {
  const n = st.get(e);
  if (!n)
    return;
  t = Mt(t), Jo(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = Mt(r.type);
    dt.has(s) || (s !== n.initialDef && Jo(s, t), dt.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (dt.add(s), r.ceReload(t.styles), dt.delete(s)) : r.parent ? (On(r.parent.update), r.parent.type.__asyncLoader && r.parent.ceReload && r.parent.ceReload(t.styles)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Kr(() => {
    for (const r of o)
      dt.delete(Mt(r.type));
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
let Xe, Pt = [], Zn = !1;
function zt(e, ...t) {
  Xe ? Xe.emit(e, ...t) : Zn || Pt.push({ event: e, args: t });
}
function Yr(e, t) {
  var n, o;
  Xe = e, Xe ? (Xe.enabled = !0, Pt.forEach(({ event: r, args: s }) => Xe.emit(r, ...s)), Pt = []) : typeof window < "u" && window.HTMLElement && !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Yr(s, t);
  }), setTimeout(() => {
    Xe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Zn = !0, Pt = []);
  }, 3e3)) : (Zn = !0, Pt = []);
}
function Ai(e, t) {
  zt("app:init", e, t, {
    Fragment: le,
    Text: Cn,
    Comment: ue,
    Static: sn
  });
}
function ji(e) {
  zt("app:unmount", e);
}
const Fi = /* @__PURE__ */ wo("component:added"), Jr = /* @__PURE__ */ wo("component:updated"), Si = /* @__PURE__ */ wo("component:removed");
function wo(e) {
  return (t) => {
    zt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Ui = /* @__PURE__ */ Xr("perf:start"), Hi = /* @__PURE__ */ Xr("perf:end");
function Xr(e) {
  return (t, n, o) => {
    zt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Li(e, t, n) {
  zt("component:emit", e.appContext.app, e, t, n);
}
function ki(e, t, ...n) {
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
  if (process.env.NODE_ENV !== "production" && Li(e, t, r), process.env.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && o[Ye(h)] && y(`Event "${h}" is emitted in component ${Rn(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${_e(t)}" instead of "${t}".`);
  }
  let l, u = o[l = Ye(t)] || o[l = Ye(Le(t))];
  !u && s && (u = o[l = Ye(_e(t))]), u && me(u, e, 6, r);
  const a = o[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, me(a, e, 6, r);
  }
}
function Zr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, l = !1;
  if (!T(e)) {
    const u = (a) => {
      const h = Zr(a, t, !0);
      h && (l = !0, K(i, h));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !s && !l ? (k(e) && o.set(e, null), null) : ($(s) ? s.forEach((u) => i[u] = null) : K(i, s), k(e) && o.set(e, i), i);
}
function wn(e, t) {
  return !e || !Wt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), R(e, t[0].toLowerCase() + t.slice(1)) || R(e, _e(t)) || R(e, t));
}
let te = null, Qr = null;
function an(e) {
  const t = te;
  return te = e, Qr = e && e.type.__scopeId || null, t;
}
function Bi(e, t = te, n) {
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
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: l, attrs: u, emit: a, render: h, renderCache: d, data: N, setupState: V, ctx: A, inheritAttrs: P } = e;
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
        slots: l,
        emit: a
      } : { attrs: u, slots: l, emit: a }) : X(s, null)), B = t.props ? u : Wi(u);
    }
  } catch (X) {
    Ft.length = 0, yn(X, e, 1), q = Oe(ue);
  }
  let W = q, we;
  if (process.env.NODE_ENV !== "production" && q.patchFlag > 0 && q.patchFlag & 2048 && ([W, we] = Ki(q)), B && P !== !1) {
    const X = Object.keys(B), { shapeFlag: Ot } = W;
    if (X.length) {
      if (Ot & 7)
        i && X.some(ln) && (B = zi(B, i)), W = We(W, B);
      else if (process.env.NODE_ENV !== "production" && !Qn && W.type !== ue) {
        const lt = Object.keys(u), Pe = [], fe = [];
        for (let De = 0, Re = lt.length; De < Re; De++) {
          const ae = lt[De];
          Wt(ae) ? ln(ae) || Pe.push(ae[2].toLowerCase() + ae.slice(3)) : fe.push(ae);
        }
        fe.length && y(`Extraneous non-props attributes (${fe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), Pe.length && y(`Extraneous non-emits event listeners (${Pe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Xo(W) && y("Runtime directive used on component with non-element root node. The directives will not function as intended."), W = We(W), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Xo(W) && y("Component inside <Transition> renders non-element root node that cannot be animated."), W.transition = n.transition), process.env.NODE_ENV !== "production" && we ? we(W) : q = W, an(H), q;
}
const Ki = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Gr(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
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
const Wi = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Wt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, zi = (e, t) => {
  const n = {};
  for (const o in e)
    (!ln(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Xo = (e) => e.shapeFlag & 7 || e.type === ue;
function qi(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: l, patchFlag: u } = t, a = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || l) && ot || t.dirs || t.transition)
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
    return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Zo(o, i, a) : !0 : !!i;
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
function Yi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ji = (e) => e.__isSuspense;
function Xi(e, t) {
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
function At(e, t, n = !1) {
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
  const l = (H) => {
    y("Invalid watch source: ", H, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = G;
  let a, h = !1, d = !1;
  if (Y(e) ? (a = () => e.value, h = fn(e)) : tt(e) ? (a = () => e, o = !0) : $(e) ? (d = !0, h = e.some((H) => tt(H) || fn(H)), a = () => e.map((H) => {
    if (Y(H))
      return H.value;
    if (tt(H))
      return Ge(H);
    if (T(H))
      return Te(H, u, 2);
    process.env.NODE_ENV !== "production" && l(H);
  })) : T(e) ? t ? a = () => Te(e, u, 2) : a = () => {
    if (!(u && u.isUnmounted))
      return N && N(), me(e, u, 3, [V]);
  } : (a = Q, process.env.NODE_ENV !== "production" && l(e)), t && o) {
    const H = a;
    a = () => Ge(H());
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
function Zi(e, t, n) {
  const o = this.proxy, r = J(e) ? e.includes(".") ? ns(o, e) : () => o[e] : e.bind(o, o);
  let s;
  T(t) ? s = t : (s = t.handler, n = t);
  const i = G;
  vt(this);
  const l = ts(r, s.bind(o), n);
  return i ? vt(i) : rt(), l;
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
function Ge(e, t) {
  if (!k(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Y(e))
    Ge(e.value, t);
  else if ($(e))
    for (let n = 0; n < e.length; n++)
      Ge(e[n], t);
  else if (As(e) || mt(e))
    e.forEach((n) => {
      Ge(n, t);
    });
  else if (Fs(e))
    for (const n in e)
      Ge(e[n], t);
  return e;
}
function Dn(e) {
  return T(e) ? { setup: e, name: e.name } : e;
}
const jt = (e) => !!e.type.__asyncLoader, Do = (e) => e.type.__isKeepAlive;
function Qi(e, t) {
  os(e, "a", t);
}
function Gi(e, t) {
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
      Do(r.parent.vnode) && ec(o, t, n, r), r = r.parent;
  }
}
function ec(e, t, n, o) {
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
      it(), vt(n);
      const l = me(t, n, e, i);
      return rt(), ct(), l;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = Ye(bo[e].replace(/ hook$/, ""));
    y(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Ie = (e) => (t, n = G) => (!Kt || e === "sp") && xn(e, (...o) => t(...o), n), tc = Ie("bm"), Vn = Ie("m"), nc = Ie("bu"), oc = Ie("u"), rc = Ie("bum"), xo = Ie("um"), sc = Ie("sp"), ic = Ie("rtg"), cc = Ie("rtc");
function lc(e, t = G) {
  xn("ec", e, t);
}
function rs(e) {
  Ss(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function uc(e, t) {
  const n = te;
  if (n === null)
    return process.env.NODE_ENV !== "production" && y("withDirectives can only be used inside render functions."), e;
  const o = Pn(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, l, u, a = S] = t[s];
    T(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ge(l), r.push({
      dir: i,
      instance: o,
      value: l,
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
    const l = r[i];
    s && (l.oldValue = s[i].value);
    let u = l.dir[o];
    u && (it(), me(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ct());
  }
}
const fc = Symbol();
function ac(e, t, n = {}, o, r) {
  if (te.isCE || te.parent && jt(te.parent) && te.parent.isCE)
    return Oe("slot", t === "default" ? null : { name: t }, o && o());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (y("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), s = () => []), s && s._c && (s._d = !1), Tn();
  const i = s && ss(s(n)), l = Hc(le, {
    key: n.key || i && i.key || `_${t}`
  }, i || (o ? o() : []), i && e._ === 1 ? 64 : -2);
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function ss(e) {
  return e.some((t) => $n(t) ? !(t.type === ue || t.type === le && !ss(t.children)) : !0) ? e : null;
}
const Gn = (e) => e ? Ns(e) ? Pn(e) || e.proxy : Gn(e.parent) : null, Nt = /* @__PURE__ */ K(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? ht(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? ht(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? ht(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? ht(e.refs) : e.refs,
  $parent: (e) => Gn(e.parent),
  $root: (e) => Gn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => Co(e),
  $forceUpdate: (e) => e.f || (e.f = () => On(e.update)),
  $nextTick: (e) => e.n || (e.n = kr.bind(e.proxy)),
  $watch: (e) => Zi.bind(e)
}), Vo = (e) => e === "_" || e === "$", is = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: l, appContext: u } = e;
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
    const h = Nt[t];
    let d, N;
    if (h)
      return t === "$attrs" && (ce(e, "get", t), process.env.NODE_ENV !== "production" && dn()), h(e);
    if ((d = l.__cssModules) && (d = d[t]))
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
    let l;
    return !!n[i] || e !== S && R(e, i) || t !== S && R(t, i) || (l = s[0]) && R(l, i) || R(o, i) || R(Nt, i) || R(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : R(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (is.ownKeys = (e) => (y("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function dc(e) {
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
      set: Q
    });
  }), t;
}
function pc(e) {
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
function hc(e) {
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
function _c() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let eo = !0;
function mc(e) {
  const t = Co(e), n = e.proxy, o = e.ctx;
  eo = !1, t.beforeCreate && Go(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: s,
    methods: i,
    watch: l,
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
    renderTriggered: lt,
    errorCaptured: Pe,
    serverPrefetch: fe,
    expose: De,
    inheritAttrs: Re,
    components: ae,
    directives: qt,
    filters: Ao
  } = t, Me = process.env.NODE_ENV !== "production" ? _c() : null;
  if (process.env.NODE_ENV !== "production") {
    const [j] = e.propsOptions;
    if (j)
      for (const F in j)
        Me("Props", F);
  }
  if (a && gc(a, o, Me, e.appContext.config.unwrapInjectedRef), i)
    for (const j in i) {
      const F = i[j];
      T(F) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, j, {
        value: F.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[j] = F.bind(n), process.env.NODE_ENV !== "production" && Me("Methods", j)) : process.env.NODE_ENV !== "production" && y(`Method "${j}" has type "${typeof F}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !T(r) && y("The data option must be a function. Plain object usage is no longer supported.");
    const j = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && ho(j) && y("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !k(j))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = No(j), process.env.NODE_ENV !== "production")
      for (const F in j)
        Me("Data", F), Vo(F[0]) || Object.defineProperty(o, F, {
          configurable: !0,
          enumerable: !0,
          get: () => j[F],
          set: Q
        });
  }
  if (eo = !0, s)
    for (const j in s) {
      const F = s[j], ge = T(F) ? F.bind(n, n) : T(F.get) ? F.get.bind(n, n) : Q;
      process.env.NODE_ENV !== "production" && ge === Q && y(`Computed property "${j}" has no getter.`);
      const Mn = !T(F) && T(F.set) ? F.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(`Write operation failed: computed property "${j}" is readonly.`);
      } : Q, wt = tl({
        get: ge,
        set: Mn
      });
      Object.defineProperty(o, j, {
        enumerable: !0,
        configurable: !0,
        get: () => wt.value,
        set: (ut) => wt.value = ut
      }), process.env.NODE_ENV !== "production" && Me("Computed", j);
    }
  if (l)
    for (const j in l)
      cs(l[j], o, n, j);
  if (u) {
    const j = T(u) ? u.call(n) : u;
    Reflect.ownKeys(j).forEach((F) => {
      es(F, j[F]);
    });
  }
  h && Go(h, e, "c");
  function se(j, F) {
    $(F) ? F.forEach((ge) => j(ge.bind(n))) : F && j(F.bind(n));
  }
  if (se(tc, d), se(Vn, N), se(nc, V), se(oc, A), se(Qi, P), se(Gi, q), se(lc, Pe), se(cc, Ot), se(ic, lt), se(rc, H), se(xo, we), se(sc, fe), $(De))
    if (De.length) {
      const j = e.exposed || (e.exposed = {});
      De.forEach((F) => {
        Object.defineProperty(j, F, {
          get: () => n[F],
          set: (ge) => n[F] = ge
        });
      });
    } else
      e.exposed || (e.exposed = {});
  X && e.render === Q && (e.render = X), Re != null && (e.inheritAttrs = Re), ae && (e.components = ae), qt && (e.directives = qt);
}
function gc(e, t, n = Q, o = !1) {
  $(e) && (e = to(e));
  for (const r in e) {
    const s = e[r];
    let i;
    k(s) ? "default" in s ? i = At(s.from || r, s.default, !0) : i = At(s.from || r) : i = At(s), Y(i) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : (process.env.NODE_ENV !== "production" && y(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = i) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Go(e, t, n) {
  me($(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function cs(e, t, n, o) {
  const r = o.includes(".") ? ns(n, o) : () => n[o];
  if (J(e)) {
    const s = t[e];
    T(s) ? Hn(r, s) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, s);
  } else if (T(e))
    Hn(r, e.bind(n));
  else if (k(e))
    if ($(e))
      e.forEach((s) => cs(s, t, n, o));
    else {
      const s = T(e.handler) ? e.handler.bind(n) : t[e.handler];
      T(s) ? Hn(r, s, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function Co(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, l = s.get(t);
  let u;
  return l ? u = l : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach((a) => pn(u, a, i, !0)), pn(u, t, i)), k(t) && s.set(t, u), u;
}
function pn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && pn(e, s, n, !0), r && r.forEach((i) => pn(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && y('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = Ec[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Ec = {
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
  watch: vc,
  provide: er,
  inject: Nc
};
function er(e, t) {
  return t ? e ? function() {
    return K(T(e) ? e.call(this, this) : e, T(t) ? t.call(this, this) : t);
  } : t : e;
}
function Nc(e, t) {
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
function vc(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = K(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = oe(e[o], t[o]);
  return n;
}
function bc(e, t, n, o = !1) {
  const r = {}, s = {};
  un(s, In, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ls(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && fs(t || {}, r, e), n ? e.props = o ? r : _i(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function yc(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Oc(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: i } } = e, l = I(r), [u] = e.propsOptions;
  let a = !1;
  if (!(process.env.NODE_ENV !== "production" && yc(e)) && (o || i > 0) && !(i & 16)) {
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
            r[A] = no(u, l, A, V, e, !1);
          }
        else
          V !== s[N] && (s[N] = V, a = !0);
      }
    }
  } else {
    ls(e, t, r, s) && (a = !0);
    let h;
    for (const d in l)
      (!t || !R(t, d) && ((h = _e(d)) === d || !R(t, h))) && (u ? n && (n[d] !== void 0 || n[h] !== void 0) && (r[d] = no(u, l, d, void 0, e, !0)) : delete r[d]);
    if (s !== l)
      for (const d in s)
        (!t || !R(t, d) && !0) && (delete s[d], a = !0);
  }
  a && $e(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && fs(t || {}, r, e);
}
function ls(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let u in t) {
      if (tn(u))
        continue;
      const a = t[u];
      let h;
      r && R(r, h = Le(u)) ? !s || !s.includes(h) ? n[h] = a : (l || (l = {}))[h] = a : wn(e.emitsOptions, u) || (!(u in o) || a !== o[u]) && (o[u] = a, i = !0);
    }
  if (s) {
    const u = I(n), a = l || S;
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
    const l = R(i, "default");
    if (l && o === void 0) {
      const u = i.default;
      if (i.type !== Function && T(u)) {
        const { propsDefaults: a } = r;
        n in a ? o = a[n] : (vt(r), o = a[n] = u.call(null, t), rt());
      } else
        o = u;
    }
    i[0] && (s && !l ? o = !1 : i[1] && (o === "" || o === _e(n)) && (o = !0));
  }
  return o;
}
function us(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, l = [];
  let u = !1;
  if (!T(e)) {
    const h = (d) => {
      u = !0;
      const [N, V] = us(d, t, !0);
      K(i, N), V && l.push(...V);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!s && !u)
    return k(e) && o.set(e, _t), _t;
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
          V[0] = A > -1, V[1] = P < 0 || A < P, (A > -1 || R(V, "default")) && l.push(d);
        }
      }
    }
  }
  const a = [i, l];
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
    i != null && wc(s, o[s], i, !R(e, s) && !R(e, _e(s)));
  }
}
function wc(e, t, n, o) {
  const { type: r, required: s, validator: i } = n;
  if (s && o) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let l = !1;
      const u = $(r) ? r : [r], a = [];
      for (let h = 0; h < u.length && !l; h++) {
        const { valid: d, expectedType: N } = xc(t, u[h]);
        a.push(N || ""), l = d;
      }
      if (!l) {
        y(Vc(e, t, a));
        return;
      }
    }
    i && !i(t) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Dc = /* @__PURE__ */ yt("String,Number,Boolean,Function,Symbol,BigInt");
function xc(e, t) {
  let n;
  const o = oo(t);
  if (Dc(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = k(e) : o === "Array" ? n = $(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Vc(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(gn).join(" | ")}`;
  const r = n[0], s = _o(t), i = rr(t, r), l = rr(t, s);
  return n.length === 1 && sr(r) && !Cc(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, sr(s) && (o += `with value ${l}.`), o;
}
function rr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function sr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Cc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const as = (e) => e[0] === "_" || e === "$stable", To = (e) => $(e) ? e.map(pe) : [pe(e)], Tc = (e, t, n) => {
  if (t._n)
    return t;
  const o = Bi((...r) => (process.env.NODE_ENV !== "production" && G && y(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), To(t(...r))), n);
  return o._c = !1, o;
}, ds = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (as(r))
      continue;
    const s = e[r];
    if (T(s))
      t[r] = Tc(r, s, o);
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
}, $c = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = I(t), un(t, "_", n)) : ds(t, e.slots = {});
  } else
    e.slots = {}, t && ps(e, t);
  un(e.slots, In, 1);
}, Ic = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = S;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && ot ? K(r, t) : n && l === 1 ? s = !1 : (K(r, t), !n && l === 1 && delete r._) : (s = !t.$stable, ds(t, r)), i = t;
  } else
    t && (ps(e, t), i = { default: 1 });
  if (s)
    for (const l in r)
      !as(l) && !(l in i) && delete r[l];
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
let Pc = 0;
function Rc(e, t) {
  return function(o, r = null) {
    T(o) || (o = Object.assign({}, o)), r != null && !k(r) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), r = null);
    const s = hs(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const u = s.app = {
      _uid: Pc++,
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
        if (l)
          process.env.NODE_ENV !== "production" && y("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && a.__vue_app__ && y("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const N = Oe(o, r);
          return N.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(We(N), a, d);
          }), h && t ? t(N, a) : e(N, a, d), l = !0, u._container = a, a.__vue_app__ = u, process.env.NODE_ENV !== "production" && (u._instance = N.component, Ai(u, ur)), Pn(N.component) || N.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, u._container), process.env.NODE_ENV !== "production" && (u._instance = null, ji(u)), delete u._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
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
  if (jt(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? Pn(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: l, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    y("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const a = t && t.r, h = l.refs === S ? l.refs = {} : l.refs, d = l.setupState;
  if (a != null && a !== u && (J(a) ? (h[a] = null, R(d, a) && (d[a] = null)) : Y(a) && (a.value = null)), T(u))
    Te(u, l, 12, [i, h]);
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
let Ct, Ue;
function Ve(e, t) {
  e.appContext.config.performance && hn() && Ue.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Ui(e, t, hn() ? Ue.now() : Date.now());
}
function Ce(e, t) {
  if (e.appContext.config.performance && hn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Ue.mark(o), Ue.measure(`<${Rn(e, e.type)}> ${t}`, n, o), Ue.clearMarks(n), Ue.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Hi(e, t, hn() ? Ue.now() : Date.now());
}
function hn() {
  return Ct !== void 0 || (typeof window < "u" && window.performance ? (Ct = !0, Ue = window.performance) : Ct = !1), Ct;
}
function Mc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const ie = Xi;
function Ac(e) {
  return jc(e);
}
function jc(e, t) {
  Mc();
  const n = br();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Yr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: l, createComment: u, setText: a, setElementText: h, parentNode: d, nextSibling: N, setScopeId: V = Q, insertStaticContent: A } = e, P = (c, f, p, m = null, _ = null, v = null, O = !1, E = null, b = process.env.NODE_ENV !== "production" && ot ? !1 : !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !Tt(c, f) && (m = Yt(c), Ae(c, _, v, !0), c = null), f.patchFlag === -2 && (b = !1, f.dynamicChildren = null);
    const { type: g, ref: D, shapeFlag: w } = f;
    switch (g) {
      case Cn:
        q(c, f, p, m);
        break;
      case ue:
        B(c, f, p, m);
        break;
      case sn:
        c == null ? H(f, p, m, O) : process.env.NODE_ENV !== "production" && W(c, f, p, O);
        break;
      case le:
        qt(c, f, p, m, _, v, O, E, b);
        break;
      default:
        w & 1 ? Ot(c, f, p, m, _, v, O, E, b) : w & 6 ? Ao(c, f, p, m, _, v, O, E, b) : w & 64 || w & 128 ? g.process(c, f, p, m, _, v, O, E, b, ft) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", g, `(${typeof g})`);
    }
    D != null && _ && ro(D, c && c.ref, v, f || c, !f);
  }, q = (c, f, p, m) => {
    if (c == null)
      o(f.el = l(f.children), p, m);
    else {
      const _ = f.el = c.el;
      f.children !== c.children && a(_, f.children);
    }
  }, B = (c, f, p, m) => {
    c == null ? o(f.el = u(f.children || ""), p, m) : f.el = c.el;
  }, H = (c, f, p, m) => {
    [c.el, c.anchor] = A(c.children, f, p, m, c.el, c.anchor);
  }, W = (c, f, p, m) => {
    if (f.children !== c.children) {
      const _ = N(c.anchor);
      X(c), [f.el, f.anchor] = A(f.children, p, _, m);
    } else
      f.el = c.el, f.anchor = c.anchor;
  }, we = ({ el: c, anchor: f }, p, m) => {
    let _;
    for (; c && c !== f; )
      _ = N(c), o(c, p, m), c = _;
    o(f, p, m);
  }, X = ({ el: c, anchor: f }) => {
    let p;
    for (; c && c !== f; )
      p = N(c), r(c), c = p;
    r(f);
  }, Ot = (c, f, p, m, _, v, O, E, b) => {
    O = O || f.type === "svg", c == null ? lt(f, p, m, _, v, O, E, b) : De(c, f, _, v, O, E, b);
  }, lt = (c, f, p, m, _, v, O, E) => {
    let b, g;
    const { type: D, props: w, shapeFlag: x, transition: C, dirs: M } = c;
    if (b = c.el = i(c.type, v, w && w.is, w), x & 8 ? h(b, c.children) : x & 16 && fe(c.children, b, null, m, _, v && D !== "foreignObject", O, E), M && ze(c, null, m, "created"), w) {
      for (const U in w)
        U !== "value" && !tn(U) && s(b, U, null, w[U], v, c.children, m, _, xe);
      "value" in w && s(b, "value", null, w.value), (g = w.onVnodeBeforeMount) && Ne(g, m, c);
    }
    Pe(b, c, c.scopeId, O, m), process.env.NODE_ENV !== "production" && (Object.defineProperty(b, "__vnode", {
      value: c,
      enumerable: !1
    }), Object.defineProperty(b, "__vueParentComponent", {
      value: m,
      enumerable: !1
    })), M && ze(c, null, m, "beforeMount");
    const L = (!_ || _ && !_.pendingBranch) && C && !C.persisted;
    L && C.beforeEnter(b), o(b, f, p), ((g = w && w.onVnodeMounted) || L || M) && ie(() => {
      g && Ne(g, m, c), L && C.enter(b), M && ze(c, null, m, "mounted");
    }, _);
  }, Pe = (c, f, p, m, _) => {
    if (p && V(c, p), m)
      for (let v = 0; v < m.length; v++)
        V(c, m[v]);
    if (_) {
      let v = _.subTree;
      if (process.env.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = Gr(v.children) || v), f === v) {
        const O = _.vnode;
        Pe(c, O, O.scopeId, O.slotScopeIds, _.parent);
      }
    }
  }, fe = (c, f, p, m, _, v, O, E, b = 0) => {
    for (let g = b; g < c.length; g++) {
      const D = c[g] = E ? Se(c[g]) : pe(c[g]);
      P(null, D, f, p, m, _, v, O, E);
    }
  }, De = (c, f, p, m, _, v, O) => {
    const E = f.el = c.el;
    let { patchFlag: b, dynamicChildren: g, dirs: D } = f;
    b |= c.patchFlag & 16;
    const w = c.props || S, x = f.props || S;
    let C;
    p && qe(p, !1), (C = x.onVnodeBeforeUpdate) && Ne(C, p, f, c), D && ze(f, c, p, "beforeUpdate"), p && qe(p, !0), process.env.NODE_ENV !== "production" && ot && (b = 0, O = !1, g = null);
    const M = _ && f.type !== "foreignObject";
    if (g ? (Re(c.dynamicChildren, g, E, p, m, M, v), process.env.NODE_ENV !== "production" && p && p.type.__hmrId && rn(c, f)) : O || ge(c, f, E, null, p, m, M, v, !1), b > 0) {
      if (b & 16)
        ae(E, f, w, x, p, m, _);
      else if (b & 2 && w.class !== x.class && s(E, "class", null, x.class, _), b & 4 && s(E, "style", w.style, x.style, _), b & 8) {
        const L = f.dynamicProps;
        for (let U = 0; U < L.length; U++) {
          const z = L[U], de = w[z], at = x[z];
          (at !== de || z === "value") && s(E, z, de, at, _, c.children, p, m, xe);
        }
      }
      b & 1 && c.children !== f.children && h(E, f.children);
    } else
      !O && g == null && ae(E, f, w, x, p, m, _);
    ((C = x.onVnodeUpdated) || D) && ie(() => {
      C && Ne(C, p, f, c), D && ze(f, c, p, "updated");
    }, m);
  }, Re = (c, f, p, m, _, v, O) => {
    for (let E = 0; E < f.length; E++) {
      const b = c[E], g = f[E], D = b.el && (b.type === le || !Tt(b, g) || b.shapeFlag & 70) ? d(b.el) : p;
      P(b, g, D, null, m, _, v, O, !0);
    }
  }, ae = (c, f, p, m, _, v, O) => {
    if (p !== m) {
      if (p !== S)
        for (const E in p)
          !tn(E) && !(E in m) && s(c, E, p[E], null, O, f.children, _, v, xe);
      for (const E in m) {
        if (tn(E))
          continue;
        const b = m[E], g = p[E];
        b !== g && E !== "value" && s(c, E, g, b, O, f.children, _, v, xe);
      }
      "value" in m && s(c, "value", p.value, m.value);
    }
  }, qt = (c, f, p, m, _, v, O, E, b) => {
    const g = f.el = c ? c.el : l(""), D = f.anchor = c ? c.anchor : l("");
    let { patchFlag: w, dynamicChildren: x, slotScopeIds: C } = f;
    process.env.NODE_ENV !== "production" && (ot || w & 2048) && (w = 0, b = !1, x = null), C && (E = E ? E.concat(C) : C), c == null ? (o(g, p, m), o(D, p, m), fe(f.children, p, D, _, v, O, E, b)) : w > 0 && w & 64 && x && c.dynamicChildren ? (Re(c.dynamicChildren, x, p, _, v, O, E), process.env.NODE_ENV !== "production" && _ && _.type.__hmrId ? rn(c, f) : (f.key != null || _ && f === _.subTree) && rn(c, f, !0)) : ge(c, f, p, D, _, v, O, E, b);
  }, Ao = (c, f, p, m, _, v, O, E, b) => {
    f.slotScopeIds = E, c == null ? f.shapeFlag & 512 ? _.ctx.activate(f, p, m, O, b) : Me(f, p, m, _, v, O, b) : se(c, f, b);
  }, Me = (c, f, p, m, _, v, O) => {
    const E = c.component = qc(c, m, _);
    if (process.env.NODE_ENV !== "production" && E.type.__hmrId && Ii(E), process.env.NODE_ENV !== "production" && (nn(c), Ve(E, "mount")), Do(c) && (E.ctx.renderer = ft), process.env.NODE_ENV !== "production" && Ve(E, "init"), Jc(E), process.env.NODE_ENV !== "production" && Ce(E, "init"), E.asyncDep) {
      if (_ && _.registerDep(E, j), !c.el) {
        const b = E.subTree = Oe(ue);
        B(null, b, f, p);
      }
      return;
    }
    j(E, c, f, p, _, v, O), process.env.NODE_ENV !== "production" && (on(), Ce(E, "mount"));
  }, se = (c, f, p) => {
    const m = f.component = c.component;
    if (qi(c, f, p))
      if (m.asyncDep && !m.asyncResolved) {
        process.env.NODE_ENV !== "production" && nn(f), F(m, f, p), process.env.NODE_ENV !== "production" && on();
        return;
      } else
        m.next = f, Ti(m.update), m.update();
    else
      f.el = c.el, m.vnode = f;
  }, j = (c, f, p, m, _, v, O) => {
    const E = () => {
      if (c.isMounted) {
        let { next: D, bu: w, u: x, parent: C, vnode: M } = c, L = D, U;
        process.env.NODE_ENV !== "production" && nn(D || c.vnode), qe(c, !1), D ? (D.el = M.el, F(c, D, O)) : D = M, w && Vt(w), (U = D.props && D.props.onVnodeBeforeUpdate) && Ne(U, C, D, M), qe(c, !0), process.env.NODE_ENV !== "production" && Ve(c, "render");
        const z = Un(c);
        process.env.NODE_ENV !== "production" && Ce(c, "render");
        const de = c.subTree;
        c.subTree = z, process.env.NODE_ENV !== "production" && Ve(c, "patch"), P(
          de,
          z,
          d(de.el),
          Yt(de),
          c,
          _,
          v
        ), process.env.NODE_ENV !== "production" && Ce(c, "patch"), D.el = z.el, L === null && Yi(c, z.el), x && ie(x, _), (U = D.props && D.props.onVnodeUpdated) && ie(() => Ne(U, C, D, M), _), process.env.NODE_ENV !== "production" && Jr(c), process.env.NODE_ENV !== "production" && on();
      } else {
        let D;
        const { el: w, props: x } = f, { bm: C, m: M, parent: L } = c, U = jt(f);
        if (qe(c, !1), C && Vt(C), !U && (D = x && x.onVnodeBeforeMount) && Ne(D, L, f), qe(c, !0), w && Fn) {
          const z = () => {
            process.env.NODE_ENV !== "production" && Ve(c, "render"), c.subTree = Un(c), process.env.NODE_ENV !== "production" && Ce(c, "render"), process.env.NODE_ENV !== "production" && Ve(c, "hydrate"), Fn(w, c.subTree, c, _, null), process.env.NODE_ENV !== "production" && Ce(c, "hydrate");
          };
          U ? f.type.__asyncLoader().then(
            () => !c.isUnmounted && z()
          ) : z();
        } else {
          process.env.NODE_ENV !== "production" && Ve(c, "render");
          const z = c.subTree = Un(c);
          process.env.NODE_ENV !== "production" && Ce(c, "render"), process.env.NODE_ENV !== "production" && Ve(c, "patch"), P(null, z, p, m, c, _, v), process.env.NODE_ENV !== "production" && Ce(c, "patch"), f.el = z.el;
        }
        if (M && ie(M, _), !U && (D = x && x.onVnodeMounted)) {
          const z = f;
          ie(() => Ne(D, L, z), _);
        }
        (f.shapeFlag & 256 || L && jt(L.vnode) && L.vnode.shapeFlag & 256) && c.a && ie(c.a, _), c.isMounted = !0, process.env.NODE_ENV !== "production" && Fi(c), f = p = m = null;
      }
    }, b = c.effect = new go(
      E,
      () => On(g),
      c.scope
    ), g = c.update = () => b.run();
    g.id = c.uid, qe(c, !0), process.env.NODE_ENV !== "production" && (b.onTrack = c.rtc ? (D) => Vt(c.rtc, D) : void 0, b.onTrigger = c.rtg ? (D) => Vt(c.rtg, D) : void 0, g.ownerInstance = c), g();
  }, F = (c, f, p) => {
    f.component = c;
    const m = c.vnode.props;
    c.vnode = f, c.next = null, Oc(c, f.props, m, p), Ic(c, f.children, p), it(), Yo(), ct();
  }, ge = (c, f, p, m, _, v, O, E, b = !1) => {
    const g = c && c.children, D = c ? c.shapeFlag : 0, w = f.children, { patchFlag: x, shapeFlag: C } = f;
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
  }, Mn = (c, f, p, m, _, v, O, E, b) => {
    c = c || _t, f = f || _t;
    const g = c.length, D = f.length, w = Math.min(g, D);
    let x;
    for (x = 0; x < w; x++) {
      const C = f[x] = b ? Se(f[x]) : pe(f[x]);
      P(c[x], C, p, null, _, v, O, E, b);
    }
    g > D ? xe(c, _, v, !0, !1, w) : fe(f, p, m, _, v, O, E, b, w);
  }, wt = (c, f, p, m, _, v, O, E, b) => {
    let g = 0;
    const D = f.length;
    let w = c.length - 1, x = D - 1;
    for (; g <= w && g <= x; ) {
      const C = c[g], M = f[g] = b ? Se(f[g]) : pe(f[g]);
      if (Tt(C, M))
        P(C, M, p, null, _, v, O, E, b);
      else
        break;
      g++;
    }
    for (; g <= w && g <= x; ) {
      const C = c[w], M = f[x] = b ? Se(f[x]) : pe(f[x]);
      if (Tt(C, M))
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
        Ae(c[g], _, v, !0), g++;
    else {
      const C = g, M = g, L = /* @__PURE__ */ new Map();
      for (g = M; g <= x; g++) {
        const ne = f[g] = b ? Se(f[g]) : pe(f[g]);
        ne.key != null && (process.env.NODE_ENV !== "production" && L.has(ne.key) && y("Duplicate keys found during update:", JSON.stringify(ne.key), "Make sure keys are unique."), L.set(ne.key, g));
      }
      let U, z = 0;
      const de = x - M + 1;
      let at = !1, Fo = 0;
      const Dt = new Array(de);
      for (g = 0; g < de; g++)
        Dt[g] = 0;
      for (g = C; g <= w; g++) {
        const ne = c[g];
        if (z >= de) {
          Ae(ne, _, v, !0);
          continue;
        }
        let Ee;
        if (ne.key != null)
          Ee = L.get(ne.key);
        else
          for (U = M; U <= x; U++)
            if (Dt[U - M] === 0 && Tt(ne, f[U])) {
              Ee = U;
              break;
            }
        Ee === void 0 ? Ae(ne, _, v, !0) : (Dt[Ee - M] = g + 1, Ee >= Fo ? Fo = Ee : at = !0, P(ne, f[Ee], p, null, _, v, O, E, b), z++);
      }
      const So = at ? Fc(Dt) : _t;
      for (U = So.length - 1, g = de - 1; g >= 0; g--) {
        const ne = M + g, Ee = f[ne], Uo = ne + 1 < D ? f[ne + 1].el : m;
        Dt[g] === 0 ? P(null, Ee, p, Uo, _, v, O, E, b) : at && (U < 0 || g !== So[U] ? ut(Ee, p, Uo, 2) : U--);
      }
    }
  }, ut = (c, f, p, m, _ = null) => {
    const { el: v, type: O, transition: E, children: b, shapeFlag: g } = c;
    if (g & 6) {
      ut(c.component.subTree, f, p, m);
      return;
    }
    if (g & 128) {
      c.suspense.move(f, p, m);
      return;
    }
    if (g & 64) {
      O.move(c, f, p, ft);
      return;
    }
    if (O === le) {
      o(v, f, p);
      for (let w = 0; w < b.length; w++)
        ut(b[w], f, p, m);
      o(c.anchor, f, p);
      return;
    }
    if (O === sn) {
      we(c, f, p);
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
  }, Ae = (c, f, p, m = !1, _ = !1) => {
    const { type: v, props: O, ref: E, children: b, dynamicChildren: g, shapeFlag: D, patchFlag: w, dirs: x } = c;
    if (E != null && ro(E, null, p, c, !0), D & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const C = D & 1 && x, M = !jt(c);
    let L;
    if (M && (L = O && O.onVnodeBeforeUnmount) && Ne(L, f, c), D & 6)
      Ds(c.component, p, m);
    else {
      if (D & 128) {
        c.suspense.unmount(p, m);
        return;
      }
      C && ze(c, null, f, "beforeUnmount"), D & 64 ? c.type.remove(c, f, p, _, ft, m) : g && (v !== le || w > 0 && w & 64) ? xe(g, f, p, !1, !0) : (v === le && w & 384 || !_ && D & 16) && xe(b, f, p), m && An(c);
    }
    (M && (L = O && O.onVnodeUnmounted) || C) && ie(() => {
      L && Ne(L, f, c), C && ze(c, null, f, "unmounted");
    }, p);
  }, An = (c) => {
    const { type: f, el: p, anchor: m, transition: _ } = c;
    if (f === le) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && _ && !_.persisted ? c.children.forEach((O) => {
        O.type === ue ? r(O.el) : An(O);
      }) : ws(p, m);
      return;
    }
    if (f === sn) {
      X(c);
      return;
    }
    const v = () => {
      r(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: O, delayLeave: E } = _, b = () => O(p, v);
      E ? E(c.el, v, b) : b();
    } else
      v();
  }, ws = (c, f) => {
    let p;
    for (; c !== f; )
      p = N(c), r(c), c = p;
    r(f);
  }, Ds = (c, f, p) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && Pi(c);
    const { bum: m, scope: _, update: v, subTree: O, um: E } = c;
    m && Vt(m), _.stop(), v && (v.active = !1, Ae(O, c, f, p)), E && ie(E, f), ie(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && Si(c);
  }, xe = (c, f, p, m = !1, _ = !1, v = 0) => {
    for (let O = v; O < c.length; O++)
      Ae(c[O], f, p, m, _);
  }, Yt = (c) => c.shapeFlag & 6 ? Yt(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : N(c.anchor || c.el), jo = (c, f, p) => {
    c == null ? f._vnode && Ae(f._vnode, null, null, !0) : P(f._vnode || null, c, f, null, null, null, p), Yo(), Wr(), f._vnode = c;
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
  let jn, Fn;
  return t && ([jn, Fn] = t(ft)), {
    render: jo,
    hydrate: jn,
    createApp: Rc(jo, jn)
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
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = Se(r[s]), l.el = i.el), n || rn(i, l)), process.env.NODE_ENV !== "production" && l.type === ue && !l.el && (l.el = i.el);
    }
}
function Fc(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, l;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const a = e[o];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        l = s + i >> 1, e[n[l]] < a ? s = l + 1 : i = l;
      a < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const Sc = (e) => e.__isTeleport, le = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Cn = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), ue = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), sn = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Ft = [];
let he = null;
function Tn(e = !1) {
  Ft.push(he = e ? null : []);
}
function Uc() {
  Ft.pop(), he = Ft[Ft.length - 1] || null;
}
let Bt = 1;
function ir(e) {
  Bt += e;
}
function _s(e) {
  return e.dynamicChildren = Bt > 0 ? he || _t : null, Uc(), Bt > 0 && he && he.push(e), e;
}
function $o(e, t, n, o, r, s) {
  return _s(Ke(e, t, n, o, r, s, !0));
}
function Hc(e, t, n, o, r) {
  return _s(Oe(e, t, n, o, r, !0));
}
function $n(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Tt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && dt.has(t.type) ? !1 : e.type === t.type && e.key === t.key;
}
const Lc = (...e) => gs(...e), In = "__vInternal", ms = ({ key: e }) => e != null ? e : null, cn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? J(e) || Y(e) || T(e) ? { i: te, r: e, k: t, f: !!n } : e : null;
function Ke(e, t = null, n = null, o = 0, r = null, s = e === le ? 0 : 1, i = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ms(t),
    ref: t && cn(t),
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
  return l ? (Io(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= J(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && y("VNode created with invalid key (NaN). VNode type:", u.type), Bt > 0 && !i && he && (u.patchFlag > 0 || s & 6) && u.patchFlag !== 32 && he.push(u), u;
}
const Oe = process.env.NODE_ENV !== "production" ? Lc : gs;
function gs(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === fc) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = ue), $n(e)) {
    const l = We(e, t, !0);
    return n && Io(l, n), Bt > 0 && !s && he && (l.shapeFlag & 6 ? he[he.indexOf(e)] = l : he.push(l)), l.patchFlag |= -2, l;
  }
  if (ys(e) && (e = e.__vccOpts), t) {
    t = kc(t);
    let { class: l, style: u } = t;
    l && !J(l) && (t.class = fo(l)), k(u) && (Jn(u) && !$(u) && (u = K({}, u)), t.style = uo(u));
  }
  const i = J(e) ? 1 : Ji(e) ? 128 : Sc(e) ? 64 : k(e) ? 4 : T(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Jn(e) && (e = I(e), y("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), Ke(e, t, n, o, r, i, s, !0);
}
function kc(e) {
  return e ? Jn(e) || In in e ? K({}, e) : e : null;
}
function We(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, l = t ? Kc(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ms(l),
    ref: t && t.ref ? n && r ? $(r) ? r.concat(cn(t)) : [r, cn(t)] : cn(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && $(i) ? i.map(Es) : i,
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
function Bc(e = " ", t = 0) {
  return Oe(Cn, null, e, t);
}
function pe(e) {
  return e == null || typeof e == "boolean" ? Oe(ue) : $(e) ? Oe(
    le,
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
    T(t) ? (t = { default: t, _ctx: te }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Bc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Kc(...e) {
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
const Wc = hs();
let zc = 0;
function qc(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Wc, s = {
    uid: zc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Ls(!0),
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
  return process.env.NODE_ENV !== "production" ? s.ctx = dc(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = ki.bind(null, s), e.ce && e.ce(s), s;
}
let G = null;
const vt = (e) => {
  G = e, e.scope.on();
}, rt = () => {
  G && G.scope.off(), G = null;
}, Yc = /* @__PURE__ */ yt("slot,component");
function so(e, t) {
  const n = t.isNativeTag || vr;
  (Yc(e) || n(e)) && y("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Ns(e) {
  return e.vnode.shapeFlag & 4;
}
let Kt = !1;
function Jc(e, t = !1) {
  Kt = t;
  const { props: n, children: o } = e.vnode, r = Ns(e);
  bc(e, n, r, t), $c(e, o);
  const s = r ? Xc(e, t) : void 0;
  return Kt = !1, s;
}
function Xc(e, t) {
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
    o.compilerOptions && Zc() && y('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Ar(new Proxy(e.ctx, is)), process.env.NODE_ENV !== "production" && pc(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? Qc(e) : null;
    vt(e), it();
    const i = Te(r, e, 0, [process.env.NODE_ENV !== "production" ? ht(e.props) : e.props, s]);
    if (ct(), rt(), ho(i)) {
      if (i.then(rt, rt), t)
        return i.then((l) => {
          cr(e, l, t);
        }).catch((l) => {
          yn(l, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        y(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      cr(e, i, t);
  } else
    vs(e, t);
}
function cr(e, t, n) {
  T(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : k(t) ? (process.env.NODE_ENV !== "production" && $n(t) && y("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Sr(t), process.env.NODE_ENV !== "production" && hc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), vs(e, n);
}
let io;
const Zc = () => !io;
function vs(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && io && !o.render) {
      const r = o.template || Co(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Ve(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: u } = o, a = K(K({
          isCustomElement: s,
          delimiters: l
        }, i), u);
        o.render = io(r, a), process.env.NODE_ENV !== "production" && Ce(e, "compile");
      }
    }
    e.render = o.render || Q;
  }
  vt(e), it(), mc(e), ct(), rt(), process.env.NODE_ENV !== "production" && !o.render && e.render === Q && !t && (o.template ? y('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : y("Component is missing template or render function."));
}
function lr(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return dn(), ce(e, "get", "$attrs"), t[n];
    },
    set() {
      return y("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return y("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return ce(e, "get", "$attrs"), t[n];
    }
  });
}
function Qc(e) {
  const t = (o) => {
    process.env.NODE_ENV !== "production" && e.exposed && y("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = lr(e));
    },
    get slots() {
      return ht(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = lr(e));
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
        if (n in Nt)
          return Nt[n](e);
      }
    }));
}
const Gc = /(?:^|[-_])(\w)/g, el = (e) => e.replace(Gc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function bs(e, t = !0) {
  return T(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Rn(e, t, n = !1) {
  let o = bs(t);
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
  return o ? el(o) : n ? "App" : "Anonymous";
}
function ys(e) {
  return T(e) && "__vccOpts" in e;
}
const tl = (e, t) => bi(e, t, Kt);
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function Ln(e) {
  return !!(e && e.__v_isShallow);
}
function nl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(d) {
      return k(d) ? d.__isVue ? ["div", e, "VueInstance"] : Y(d) ? [
        "div",
        {},
        ["span", e, h(d)],
        "<",
        l(d.value),
        ">"
      ] : tt(d) ? [
        "div",
        {},
        ["span", e, Ln(d) ? "ShallowReactive" : "Reactive"],
        "<",
        l(d),
        `>${Be(d) ? " (readonly)" : ""}`
      ] : Be(d) ? [
        "div",
        {},
        ["span", e, Ln(d) ? "ShallowReadonly" : "Readonly"],
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
          l(N[V], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(d, N = !0) {
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
const ur = "3.2.40", ol = "http://www.w3.org/2000/svg", Ze = typeof document < "u" ? document : null, fr = Ze && /* @__PURE__ */ Ze.createElement("template"), rl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? Ze.createElementNS(ol, e) : Ze.createElement(e, n ? { is: n } : void 0);
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
      const l = fr.content;
      if (o) {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      i ? i.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function sl(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function il(e, t, n) {
  const o = e.style, r = J(n);
  if (n && !r) {
    for (const s in n)
      co(o, s, n[s]);
    if (t && !J(t))
      for (const s in t)
        n[s] == null && co(o, s, "");
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const ar = /\s*!important$/;
function co(e, t, n) {
  if ($(n))
    n.forEach((o) => co(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = cl(e, t);
    ar.test(n) ? e.setProperty(_e(o), n.replace(ar, ""), "important") : e[o] = n;
  }
}
const dr = ["Webkit", "Moz", "ms"], kn = {};
function cl(e, t) {
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
function ll(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(pr, t.slice(6, t.length)) : e.setAttributeNS(pr, t, n);
  else {
    const s = Ts(t);
    n == null || s && !Nr(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function ul(e, t, n, o, r, s, i) {
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
  let l = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = Nr(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (u) {
    process.env.NODE_ENV !== "production" && !l && y(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, u);
  }
  l && e.removeAttribute(t);
}
const [Os, fl] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let lo = 0;
const al = /* @__PURE__ */ Promise.resolve(), dl = () => {
  lo = 0;
}, pl = () => lo || (al.then(dl), lo = Os());
function hl(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function _l(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function ml(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [l, u] = gl(t);
    if (o) {
      const a = s[t] = El(o, r);
      hl(e, l, a, u);
    } else
      i && (_l(e, l, i, u), s[t] = void 0);
  }
}
const hr = /(?:Once|Passive|Capture)$/;
function gl(e) {
  let t;
  if (hr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(hr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : _e(e.slice(2)), t];
}
function El(e, t) {
  const n = (o) => {
    const r = o.timeStamp || Os();
    (fl || r >= n.attached - 1) && me(Nl(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = pl(), n;
}
function Nl(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const _r = /^on[a-z]/, vl = (e, t, n, o, r = !1, s, i, l, u) => {
  t === "class" ? sl(e, o, r) : t === "style" ? il(e, n, o) : Wt(t) ? ln(t) || ml(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : bl(e, t, o, r)) ? ul(e, t, o, s, i, l, u) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ll(e, t, o, r));
};
function bl(e, t, n, o) {
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
const yl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Ro extends yl {
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
      const { props: r, styles: s } = o, i = !$(r), l = r ? i ? Object.keys(r) : r : [];
      let u;
      if (i)
        for (const a in this._props) {
          const h = r[a];
          (h === Number || h && h.type === Number) && (this._props[a] = Bn(this._props[a]), (u || (u = /* @__PURE__ */ Object.create(null)))[a] = !0);
        }
      this._numberProps = u;
      for (const a of Object.keys(this))
        a[0] !== "_" && this._setProp(a, this[a], !0, !1);
      for (const a of l.map(Le))
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
const Ol = {
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
const wl = /* @__PURE__ */ K({ patchProp: vl }, rl);
let mr;
function Dl() {
  return mr || (mr = Ac(wl));
}
const gr = (...e) => {
  Dl().render(...e);
};
function xl() {
  nl();
}
process.env.NODE_ENV !== "production" && xl();
const Vl = Ml(() => {
  Rl({
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
let en;
const Cl = new Uint8Array(16);
function Tl() {
  if (!en && (en = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !en))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return en(Cl);
}
const Z = [];
for (let e = 0; e < 256; ++e)
  Z.push((e + 256).toString(16).slice(1));
function $l(e, t = 0) {
  return (Z[e[t + 0]] + Z[e[t + 1]] + Z[e[t + 2]] + Z[e[t + 3]] + "-" + Z[e[t + 4]] + Z[e[t + 5]] + "-" + Z[e[t + 6]] + Z[e[t + 7]] + "-" + Z[e[t + 8]] + Z[e[t + 9]] + "-" + Z[e[t + 10]] + Z[e[t + 11]] + Z[e[t + 12]] + Z[e[t + 13]] + Z[e[t + 14]] + Z[e[t + 15]]).toLowerCase();
}
const Il = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Er = {
  randomUUID: Il
};
function Pl(e, t, n) {
  if (Er.randomUUID && !t && !e)
    return Er.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || Tl)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
    n = n || 0;
    for (let r = 0; r < 16; ++r)
      t[n + r] = o[r];
    return t;
  }
  return $l(o);
}
const Qe = class {
  constructor(t, n) {
    xt(this, "id");
    xt(this, "$el");
    xt(this, "$containerEl");
    this.id = `player-${Pl()}`, this.$el = t, this.$containerEl = n, Qe.modules_.forEach((o) => o(this));
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
    !!t && Qe.modules_.indexOf(t) < 0 && Qe.modules_.push(t);
  }
  static use(t) {
    return t.forEach((n) => Qe.installModule(n)), Qe;
  }
};
let Et = Qe;
xt(Et, "modules_", []);
function Rl(e) {
  Object.keys(e).forEach((t) => {
    Et.prototype[t] = e[t];
  });
}
Et.use([Vl]);
function Ml(e) {
  return function(t) {
    return e(t), t;
  };
}
var bt = /* @__PURE__ */ ((e) => (e.Created = "created", e.TimeUpdate = "timeupdate", e.LoadStart = "loadstart", e.Play = "play", e.Pause = "pause", e.Playing = "playing", e))(bt || {});
const Al = { class: "lpr" }, jl = /* @__PURE__ */ Dn({
  __name: "VideoPlayer.ce",
  props: {
    src: { default: "" }
  },
  emits: [bt.Created],
  setup(e, { emit: t }) {
    const n = Rt(), o = Rt(), r = Rt();
    Vn(() => {
      !n.value || !o.value || (r.value = new Et(n.value, o.value), es("player", r.value), t(bt.Created, r.value));
    });
    const s = () => {
      !r.value || r.value.togglePlay();
    };
    return (i, l) => (Tn(), $o("div", Al, [
      Ke("video", {
        class: "lpr__video",
        ref_key: "mediaRef",
        ref: n,
        onClick: s
      }, null, 512),
      Ke("div", {
        class: "lpr__container",
        ref_key: "containerRef",
        ref: o
      }, [
        ac(i.$slots, "default")
      ], 512)
    ]));
  }
}), Fl = `:host{--lpr-player-border-radius: 16px}.lpr{position:relative;width:100%;height:100%;overflow:hidden;border:0 solid transparent;border-radius:var(--lpr-player-border-radius)}.lpr__video{width:100%;height:100%}.lpr__container{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}
`, Mo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Sl = /* @__PURE__ */ Mo(jl, [["styles", [Fl]]]), Ul = ["src"], Hl = /* @__PURE__ */ Dn({
  __name: "Poster.ce",
  props: {
    src: { default: "" }
  },
  setup(e) {
    const t = At("player"), n = Rt(!0);
    Vn(() => {
      t.once(bt.Playing, () => o(!1));
    });
    const o = (s = !n.value) => {
      n.value = s;
    }, r = () => {
      !t || t.play();
    };
    return (s, i) => uc((Tn(), $o("div", {
      class: "lpr-poster__container",
      onClick: r
    }, [
      Ke("img", {
        src: e.src,
        class: "lpr-poster"
      }, null, 8, Ul)
    ], 512)), [
      [Ol, n.value]
    ]);
  }
}), Ll = `:host{--lpr-poster-background: #0a0a0a;--lpr-poster-brightness: 60%}.lpr-poster{width:100%;height:100%;object-fit:cover}.lpr-poster__container{position:absolute;top:0;left:0;width:100%;height:100%;background:var(--lpr-poster-background);filter:brightness(var(--lpr-poster-brightness));z-index:2;cursor:pointer;pointer-events:all}
`, kl = /* @__PURE__ */ Mo(Hl, [["styles", [Ll]]]), Bl = { class: "lpr-timeline__container" }, Kl = /* @__PURE__ */ Ke("div", { class: "lpr-timeline__circle" }, null, -1), Wl = [
  Kl
], zl = /* @__PURE__ */ Dn({
  __name: "TimeLine.ce",
  setup(e) {
    const t = At("player"), n = Rt();
    Vn(() => {
      !n.value || t.on(bt.TimeUpdate, o);
    }), xo(() => {
      t.off(bt.TimeUpdate, o);
    });
    const o = () => {
      if (!n.value || !t)
        return;
      const { currentTime: s, duration: i } = t, l = s / i * 100;
      n.value.style.width = `${l}%`;
    }, r = (s) => {
      if (!t)
        return;
      const { clientX: i, target: l } = s, { left: u, width: a } = l.getBoundingClientRect();
      t.currentTime = t.duration * ((i - u) / a);
    };
    return (s, i) => (Tn(), $o("div", Bl, [
      Ke("div", {
        class: "lpr-timeline",
        onClick: r
      }),
      Ke("div", {
        ref_key: "progressRef",
        ref: n,
        class: "lpr-timeline__progress"
      }, Wl, 512)
    ]));
  }
}), ql = `:host{--timeline-color: #787574;--timeline-progress-color: #00b9ae;--timeline-height: 4px;--timeline-border-radius: 8px;--timeline-padding-left: 32px;--timeline-padding-right: 32px;--timeline-padding-bottom: max(12%, 36px)}.lpr-timeline__container{position:absolute;left:var(--timeline-padding-left);right:var(--timeline-padding-right);bottom:var(--timeline-padding-bottom);height:var(--timeline-height)}.lpr-timeline,.lpr-timeline__progress{position:absolute;top:0;left:0;right:0;bottom:0;height:var(--timeline-height);border:0 solid transparent;border-radius:var(--timeline-border-radius)}.lpr-timeline{cursor:pointer;pointer-events:all;background-color:var(--timeline-color);opacity:.7}.lpr-timeline__progress{pointer-events:none;width:0;background-color:var(--timeline-progress-color)}.lpr-timeline__circle{position:absolute;top:50%;right:0;transform:translateY(-50%);width:10px;height:10px;border-radius:50%;background-color:var(--timeline-progress-color)}
`, Yl = /* @__PURE__ */ Mo(zl, [["styles", [ql]]]), Jl = Po(Sl), Xl = Po(kl), Zl = Po(Yl);
customElements.define("lpr-player", Jl);
customElements.define("lpr-poster", Xl);
customElements.define("lpr-timeline", Zl);
