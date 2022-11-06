var go = Object.defineProperty;
var _o = (e, t, n) => t in e ? go(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var tt = (e, t, n) => (_o(e, typeof t != "symbol" ? t + "" : t, n), n);
function Jn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const mo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", vo = /* @__PURE__ */ Jn(mo);
function fr(e) {
  return !!e || e === "";
}
function Kt(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = le(s) ? yo(s) : Kt(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else {
    if (le(e))
      return e;
    if (K(e))
      return e;
  }
}
const Co = /;(?![^(]*\))/g, bo = /:(.+)/;
function yo(e) {
  const t = {};
  return e.split(Co).forEach((n) => {
    if (n) {
      const s = n.split(bo);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function hn(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const s = hn(e[n]);
      s && (t += s + " ");
    }
  else if (K(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Fs = (e) => le(e) ? e : e == null ? "" : P(e) || K(e) && (e.toString === pr || !M(e.toString)) ? JSON.stringify(e, ar, 2) : String(e), ar = (e, t) => t && t.__v_isRef ? ar(e, t.value) : vt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
} : dr(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : K(t) && !P(t) && !gr(t) ? String(t) : t, D = {}, mt = [], Te = () => {
}, wo = () => !1, xo = /^on[^a-z]/, pn = (e) => xo.test(e), Xn = (e) => e.startsWith("onUpdate:"), te = Object.assign, Gn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Eo = Object.prototype.hasOwnProperty, S = (e, t) => Eo.call(e, t), P = Array.isArray, vt = (e) => gn(e) === "[object Map]", dr = (e) => gn(e) === "[object Set]", M = (e) => typeof e == "function", le = (e) => typeof e == "string", es = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", hr = (e) => K(e) && M(e.then) && M(e.catch), pr = Object.prototype.toString, gn = (e) => pr.call(e), Fo = (e) => gn(e).slice(8, -1), gr = (e) => gn(e) === "[object Object]", ts = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, nn = /* @__PURE__ */ Jn(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), _n = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, To = /-(\w)/g, Ye = _n((e) => e.replace(To, (t, n) => n ? n.toUpperCase() : "")), $o = /\B([A-Z])/g, Se = _n((e) => e.replace($o, "-$1").toLowerCase()), _r = _n((e) => e.charAt(0).toUpperCase() + e.slice(1)), On = _n((e) => e ? `on${_r(e)}` : ""), Nt = (e, t) => !Object.is(e, t), Pn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, on = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, ln = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ts;
const Oo = () => Ts || (Ts = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let ge;
class mr {
  constructor(t = !1) {
    this.active = !0, this.effects = [], this.cleanups = [], !t && ge && (this.parent = ge, this.index = (ge.scopes || (ge.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = ge;
      try {
        return ge = this, t();
      } finally {
        ge = n;
      }
    }
  }
  on() {
    ge = this;
  }
  off() {
    ge = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
      if (this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.active = !1;
    }
  }
}
function Po(e) {
  return new mr(e);
}
function Io(e, t = ge) {
  t && t.active && t.effects.push(e);
}
function Mo() {
  return ge;
}
function Ao(e) {
  ge && ge.cleanups.push(e);
}
const ns = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, vr = (e) => (e.w & Qe) > 0, Cr = (e) => (e.n & Qe) > 0, Lo = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Qe;
}, Ho = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      vr(r) && !Cr(r) ? r.delete(e) : t[n++] = r, r.w &= ~Qe, r.n &= ~Qe;
    }
    t.length = n;
  }
}, Rn = /* @__PURE__ */ new WeakMap();
let Ht = 0, Qe = 1;
const Sn = 30;
let Ee;
const at = Symbol(""), Nn = Symbol("");
class ss {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Io(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Ee, n = Ze;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Ee, Ee = this, Ze = !0, Qe = 1 << ++Ht, Ht <= Sn ? Lo(this) : $s(this), this.fn();
    } finally {
      Ht <= Sn && Ho(this), Qe = 1 << --Ht, Ee = this.parent, Ze = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Ee === this ? this.deferStop = !0 : this.active && ($s(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function $s(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ze = !0;
const br = [];
function $t() {
  br.push(Ze), Ze = !1;
}
function Ot() {
  const e = br.pop();
  Ze = e === void 0 ? !0 : e;
}
function me(e, t, n) {
  if (Ze && Ee) {
    let s = Rn.get(e);
    s || Rn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = ns()), yr(r);
  }
}
function yr(e, t) {
  let n = !1;
  Ht <= Sn ? Cr(e) || (e.n |= Qe, n = !vr(e)) : n = !e.has(Ee), n && (e.add(Ee), Ee.deps.push(e));
}
function ke(e, t, n, s, r, o) {
  const i = Rn.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && P(e))
    i.forEach((u, a) => {
      (a === "length" || a >= s) && l.push(u);
    });
  else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        P(e) ? ts(n) && l.push(i.get("length")) : (l.push(i.get(at)), vt(e) && l.push(i.get(Nn)));
        break;
      case "delete":
        P(e) || (l.push(i.get(at)), vt(e) && l.push(i.get(Nn)));
        break;
      case "set":
        vt(e) && l.push(i.get(at));
        break;
    }
  if (l.length === 1)
    l[0] && kn(l[0]);
  else {
    const u = [];
    for (const a of l)
      a && u.push(...a);
    kn(ns(u));
  }
}
function kn(e, t) {
  const n = P(e) ? e : [...e];
  for (const s of n)
    s.computed && Os(s);
  for (const s of n)
    s.computed || Os(s);
}
function Os(e, t) {
  (e !== Ee || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Ro = /* @__PURE__ */ Jn("__proto__,__v_isRef,__isVue"), wr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(es)
), So = /* @__PURE__ */ rs(), No = /* @__PURE__ */ rs(!1, !0), ko = /* @__PURE__ */ rs(!0), Ps = /* @__PURE__ */ Bo();
function Bo() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = N(this);
      for (let o = 0, i = this.length; o < i; o++)
        me(s, "get", o + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(N)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      $t();
      const s = N(this)[t].apply(this, n);
      return Ot(), s;
    };
  }), e;
}
function rs(e = !1, t = !1) {
  return function(s, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && o === (e ? t ? ti : $r : t ? Tr : Fr).get(s))
      return s;
    const i = P(s);
    if (!e && i && S(Ps, r))
      return Reflect.get(Ps, r, o);
    const l = Reflect.get(s, r, o);
    return (es(r) ? wr.has(r) : Ro(r)) || (e || me(s, "get", r), t) ? l : ie(l) ? i && ts(r) ? l : l.value : K(l) ? e ? Or(l) : zt(l) : l;
  };
}
const Do = /* @__PURE__ */ xr(), Vo = /* @__PURE__ */ xr(!0);
function xr(e = !1) {
  return function(n, s, r, o) {
    let i = n[s];
    if (Et(i) && ie(i) && !ie(r))
      return !1;
    if (!e && (!cn(r) && !Et(r) && (i = N(i), r = N(r)), !P(n) && ie(i) && !ie(r)))
      return i.value = r, !0;
    const l = P(n) && ts(s) ? Number(s) < n.length : S(n, s), u = Reflect.set(n, s, r, o);
    return n === N(o) && (l ? Nt(r, i) && ke(n, "set", s, r) : ke(n, "add", s, r)), u;
  };
}
function jo(e, t) {
  const n = S(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && ke(e, "delete", t, void 0), s;
}
function Uo(e, t) {
  const n = Reflect.has(e, t);
  return (!es(t) || !wr.has(t)) && me(e, "has", t), n;
}
function Ko(e) {
  return me(e, "iterate", P(e) ? "length" : at), Reflect.ownKeys(e);
}
const Er = {
  get: So,
  set: Do,
  deleteProperty: jo,
  has: Uo,
  ownKeys: Ko
}, zo = {
  get: ko,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, Wo = /* @__PURE__ */ te({}, Er, {
  get: No,
  set: Vo
}), os = (e) => e, mn = (e) => Reflect.getPrototypeOf(e);
function Jt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = N(e), o = N(t);
  n || (t !== o && me(r, "get", t), me(r, "get", o));
  const { has: i } = mn(r), l = s ? os : n ? cs : kt;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, o))
    return l(e.get(o));
  e !== r && e.get(t);
}
function Xt(e, t = !1) {
  const n = this.__v_raw, s = N(n), r = N(e);
  return t || (e !== r && me(s, "has", e), me(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Gt(e, t = !1) {
  return e = e.__v_raw, !t && me(N(e), "iterate", at), Reflect.get(e, "size", e);
}
function Is(e) {
  e = N(e);
  const t = N(this);
  return mn(t).has.call(t, e) || (t.add(e), ke(t, "add", e, e)), this;
}
function Ms(e, t) {
  t = N(t);
  const n = N(this), { has: s, get: r } = mn(n);
  let o = s.call(n, e);
  o || (e = N(e), o = s.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), o ? Nt(t, i) && ke(n, "set", e, t) : ke(n, "add", e, t), this;
}
function As(e) {
  const t = N(this), { has: n, get: s } = mn(t);
  let r = n.call(t, e);
  r || (e = N(e), r = n.call(t, e)), s && s.call(t, e);
  const o = t.delete(e);
  return r && ke(t, "delete", e, void 0), o;
}
function Ls() {
  const e = N(this), t = e.size !== 0, n = e.clear();
  return t && ke(e, "clear", void 0, void 0), n;
}
function en(e, t) {
  return function(s, r) {
    const o = this, i = o.__v_raw, l = N(i), u = t ? os : e ? cs : kt;
    return !e && me(l, "iterate", at), i.forEach((a, d) => s.call(r, u(a), u(d), o));
  };
}
function tn(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = N(r), i = vt(o), l = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...s), d = n ? os : t ? cs : kt;
    return !t && me(o, "iterate", u ? Nn : at), {
      next() {
        const { value: m, done: b } = a.next();
        return b ? { value: m, done: b } : {
          value: l ? [d(m[0]), d(m[1])] : d(m),
          done: b
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
    return e === "delete" ? !1 : this;
  };
}
function Zo() {
  const e = {
    get(o) {
      return Jt(this, o);
    },
    get size() {
      return Gt(this);
    },
    has: Xt,
    add: Is,
    set: Ms,
    delete: As,
    clear: Ls,
    forEach: en(!1, !1)
  }, t = {
    get(o) {
      return Jt(this, o, !1, !0);
    },
    get size() {
      return Gt(this);
    },
    has: Xt,
    add: Is,
    set: Ms,
    delete: As,
    clear: Ls,
    forEach: en(!1, !0)
  }, n = {
    get(o) {
      return Jt(this, o, !0);
    },
    get size() {
      return Gt(this, !0);
    },
    has(o) {
      return Xt.call(this, o, !0);
    },
    add: je("add"),
    set: je("set"),
    delete: je("delete"),
    clear: je("clear"),
    forEach: en(!0, !1)
  }, s = {
    get(o) {
      return Jt(this, o, !0, !0);
    },
    get size() {
      return Gt(this, !0);
    },
    has(o) {
      return Xt.call(this, o, !0);
    },
    add: je("add"),
    set: je("set"),
    delete: je("delete"),
    clear: je("clear"),
    forEach: en(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = tn(o, !1, !1), n[o] = tn(o, !0, !1), t[o] = tn(o, !1, !0), s[o] = tn(o, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [qo, Yo, Qo, Jo] = /* @__PURE__ */ Zo();
function is(e, t) {
  const n = t ? e ? Jo : Qo : e ? Yo : qo;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(S(n, r) && r in s ? n : s, r, o);
}
const Xo = {
  get: /* @__PURE__ */ is(!1, !1)
}, Go = {
  get: /* @__PURE__ */ is(!1, !0)
}, ei = {
  get: /* @__PURE__ */ is(!0, !1)
}, Fr = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap();
function ni(e) {
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
function si(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ni(Fo(e));
}
function zt(e) {
  return Et(e) ? e : ls(e, !1, Er, Xo, Fr);
}
function ri(e) {
  return ls(e, !1, Wo, Go, Tr);
}
function Or(e) {
  return ls(e, !0, zo, ei, $r);
}
function ls(e, t, n, s, r) {
  if (!K(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = si(e);
  if (i === 0)
    return e;
  const l = new Proxy(e, i === 2 ? s : n);
  return r.set(e, l), l;
}
function Ct(e) {
  return Et(e) ? Ct(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Et(e) {
  return !!(e && e.__v_isReadonly);
}
function cn(e) {
  return !!(e && e.__v_isShallow);
}
function Pr(e) {
  return Ct(e) || Et(e);
}
function N(e) {
  const t = e && e.__v_raw;
  return t ? N(t) : e;
}
function Ir(e) {
  return on(e, "__v_skip", !0), e;
}
const kt = (e) => K(e) ? zt(e) : e, cs = (e) => K(e) ? Or(e) : e;
function us(e) {
  Ze && Ee && (e = N(e), yr(e.dep || (e.dep = ns())));
}
function fs(e, t) {
  e = N(e), e.dep && kn(e.dep);
}
function ie(e) {
  return !!(e && e.__v_isRef === !0);
}
function Re(e) {
  return oi(e, !1);
}
function oi(e, t) {
  return ie(e) ? e : new ii(e, t);
}
class ii {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : N(t), this._value = n ? t : kt(t);
  }
  get value() {
    return us(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || cn(t) || Et(t);
    t = n ? t : N(t), Nt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : kt(t), fs(this));
  }
}
function Je(e) {
  return ie(e) ? e.value : e;
}
const li = {
  get: (e, t, n) => Je(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ie(r) && !ie(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Mr(e) {
  return Ct(e) ? e : new Proxy(e, li);
}
class ci {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: s } = t(() => us(this), () => fs(this));
    this._get = n, this._set = s;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function ui(e) {
  return new ci(e);
}
var Ar;
class fi {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Ar] = !1, this._dirty = !0, this.effect = new ss(t, () => {
      this._dirty || (this._dirty = !0, fs(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = N(this);
    return us(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Ar = "__v_isReadonly";
function ai(e, t, n = !1) {
  let s, r;
  const o = M(e);
  return o ? (s = e, r = Te) : (s = e.get, r = e.set), new fi(s, r, o || !r, n);
}
function qe(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    vn(o, t, n);
  }
  return r;
}
function ye(e, t, n, s) {
  if (M(e)) {
    const o = qe(e, t, n, s);
    return o && hr(o) && o.catch((i) => {
      vn(i, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(ye(e[o], t, n, s));
  return r;
}
function vn(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, l = n;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, i, l) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      qe(u, null, 10, [e, i, l]);
      return;
    }
  }
  di(e, n, r, s);
}
function di(e, t, n, s = !0) {
  console.error(e);
}
let Bt = !1, Bn = !1;
const oe = [];
let Ae = 0;
const bt = [];
let He = null, lt = 0;
const Lr = /* @__PURE__ */ Promise.resolve();
let as = null;
function Hr(e) {
  const t = as || Lr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function hi(e) {
  let t = Ae + 1, n = oe.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    Dt(oe[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function ds(e) {
  (!oe.length || !oe.includes(e, Bt && e.allowRecurse ? Ae + 1 : Ae)) && (e.id == null ? oe.push(e) : oe.splice(hi(e.id), 0, e), Rr());
}
function Rr() {
  !Bt && !Bn && (Bn = !0, as = Lr.then(Nr));
}
function pi(e) {
  const t = oe.indexOf(e);
  t > Ae && oe.splice(t, 1);
}
function gi(e) {
  P(e) ? bt.push(...e) : (!He || !He.includes(e, e.allowRecurse ? lt + 1 : lt)) && bt.push(e), Rr();
}
function Hs(e, t = Bt ? Ae + 1 : 0) {
  for (; t < oe.length; t++) {
    const n = oe[t];
    n && n.pre && (oe.splice(t, 1), t--, n());
  }
}
function Sr(e) {
  if (bt.length) {
    const t = [...new Set(bt)];
    if (bt.length = 0, He) {
      He.push(...t);
      return;
    }
    for (He = t, He.sort((n, s) => Dt(n) - Dt(s)), lt = 0; lt < He.length; lt++)
      He[lt]();
    He = null, lt = 0;
  }
}
const Dt = (e) => e.id == null ? 1 / 0 : e.id, _i = (e, t) => {
  const n = Dt(e) - Dt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Nr(e) {
  Bn = !1, Bt = !0, oe.sort(_i);
  const t = Te;
  try {
    for (Ae = 0; Ae < oe.length; Ae++) {
      const n = oe[Ae];
      n && n.active !== !1 && qe(n, null, 14);
    }
  } finally {
    Ae = 0, oe.length = 0, Sr(), Bt = !1, as = null, (oe.length || bt.length) && Nr();
  }
}
function mi(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || D;
  let r = n;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in s) {
    const d = `${i === "modelValue" ? "model" : i}Modifiers`, { number: m, trim: b } = s[d] || D;
    b && (r = n.map(($) => $.trim())), m && (r = n.map(ln));
  }
  let l, u = s[l = On(t)] || s[l = On(Ye(t))];
  !u && o && (u = s[l = On(Se(t))]), u && ye(u, e, 6, r);
  const a = s[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ye(a, e, 6, r);
  }
}
function kr(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, l = !1;
  if (!M(e)) {
    const u = (a) => {
      const d = kr(a, t, !0);
      d && (l = !0, te(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !l ? (K(e) && s.set(e, null), null) : (P(o) ? o.forEach((u) => i[u] = null) : te(i, o), K(e) && s.set(e, i), i);
}
function Cn(e, t) {
  return !e || !pn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), S(e, t[0].toLowerCase() + t.slice(1)) || S(e, Se(t)) || S(e, t));
}
let ue = null, Br = null;
function un(e) {
  const t = ue;
  return ue = e, Br = e && e.type.__scopeId || null, t;
}
function Wt(e, t = ue, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Ks(-1);
    const o = un(t), i = e(...r);
    return un(o), s._d && Ks(1), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function In(e) {
  const { type: t, vnode: n, proxy: s, withProxy: r, props: o, propsOptions: [i], slots: l, attrs: u, emit: a, render: d, renderCache: m, data: b, setupState: $, ctx: H, inheritAttrs: O } = e;
  let k, L;
  const fe = un(e);
  try {
    if (n.shapeFlag & 4) {
      const z = r || s;
      k = Me(d.call(z, z, m, o, $, b, H)), L = u;
    } else {
      const z = t;
      k = Me(z.length > 1 ? z(o, { attrs: u, slots: l, emit: a }) : z(o, null)), L = t.props ? u : vi(u);
    }
  } catch (z) {
    St.length = 0, vn(z, e, 1), k = X(we);
  }
  let Z = k;
  if (L && O !== !1) {
    const z = Object.keys(L), { shapeFlag: se } = Z;
    z.length && se & 7 && (i && z.some(Xn) && (L = Ci(L, i)), Z = Xe(Z, L));
  }
  return n.dirs && (Z = Xe(Z), Z.dirs = Z.dirs ? Z.dirs.concat(n.dirs) : n.dirs), n.transition && (Z.transition = n.transition), k = Z, un(fe), k;
}
const vi = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || pn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ci = (e, t) => {
  const n = {};
  for (const s in e)
    (!Xn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function bi(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: l, patchFlag: u } = t, a = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? Rs(s, i, a) : !!i;
    if (u & 8) {
      const d = t.dynamicProps;
      for (let m = 0; m < d.length; m++) {
        const b = d[m];
        if (i[b] !== s[b] && !Cn(a, b))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Rs(s, i, a) : !0 : !!i;
  return !1;
}
function Rs(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !Cn(n, o))
      return !0;
  }
  return !1;
}
function yi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const wi = (e) => e.__isSuspense;
function xi(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : gi(e);
}
function Dr(e, t) {
  if (ne) {
    let n = ne.provides;
    const s = ne.parent && ne.parent.provides;
    s === n && (n = ne.provides = Object.create(s)), n[e] = t;
  }
}
function Ne(e, t, n = !1) {
  const s = ne || ue;
  if (s) {
    const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && M(t) ? t.call(s.proxy) : t;
  }
}
const Ss = {};
function yt(e, t, n) {
  return Vr(e, t, n);
}
function Vr(e, t, { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = D) {
  const l = ne;
  let u, a = !1, d = !1;
  if (ie(e) ? (u = () => e.value, a = cn(e)) : Ct(e) ? (u = () => e, s = !0) : P(e) ? (d = !0, a = e.some((L) => Ct(L) || cn(L)), u = () => e.map((L) => {
    if (ie(L))
      return L.value;
    if (Ct(L))
      return ft(L);
    if (M(L))
      return qe(L, l, 2);
  })) : M(e) ? t ? u = () => qe(e, l, 2) : u = () => {
    if (!(l && l.isUnmounted))
      return m && m(), ye(e, l, 3, [b]);
  } : u = Te, t && s) {
    const L = u;
    u = () => ft(L());
  }
  let m, b = (L) => {
    m = k.onStop = () => {
      qe(L, l, 4);
    };
  };
  if (jt)
    return b = Te, t ? n && ye(t, l, 3, [
      u(),
      d ? [] : void 0,
      b
    ]) : u(), Te;
  let $ = d ? [] : Ss;
  const H = () => {
    if (!!k.active)
      if (t) {
        const L = k.run();
        (s || a || (d ? L.some((fe, Z) => Nt(fe, $[Z])) : Nt(L, $))) && (m && m(), ye(t, l, 3, [
          L,
          $ === Ss ? void 0 : $,
          b
        ]), $ = L);
      } else
        k.run();
  };
  H.allowRecurse = !!t;
  let O;
  r === "sync" ? O = H : r === "post" ? O = () => ae(H, l && l.suspense) : (H.pre = !0, l && (H.id = l.uid), O = () => ds(H));
  const k = new ss(u, O);
  return t ? n ? H() : $ = k.run() : r === "post" ? ae(k.run.bind(k), l && l.suspense) : k.run(), () => {
    k.stop(), l && l.scope && Gn(l.scope.effects, k);
  };
}
function Ei(e, t, n) {
  const s = this.proxy, r = le(e) ? e.includes(".") ? jr(s, e) : () => s[e] : e.bind(s, s);
  let o;
  M(t) ? o = t : (o = t.handler, n = t);
  const i = ne;
  Ft(this);
  const l = Vr(r, o.bind(s), n);
  return i ? Ft(i) : dt(), l;
}
function jr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function ft(e, t) {
  if (!K(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ie(e))
    ft(e.value, t);
  else if (P(e))
    for (let n = 0; n < e.length; n++)
      ft(e[n], t);
  else if (dr(e) || vt(e))
    e.forEach((n) => {
      ft(n, t);
    });
  else if (gr(e))
    for (const n in e)
      ft(e[n], t);
  return e;
}
function Fi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return wn(() => {
    e.isMounted = !0;
  }), Zr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ce = [Function, Array], Ti = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ce,
    onEnter: Ce,
    onAfterEnter: Ce,
    onEnterCancelled: Ce,
    onBeforeLeave: Ce,
    onLeave: Ce,
    onAfterLeave: Ce,
    onLeaveCancelled: Ce,
    onBeforeAppear: Ce,
    onAppear: Ce,
    onAfterAppear: Ce,
    onAppearCancelled: Ce
  },
  setup(e, { slots: t }) {
    const n = al(), s = Fi();
    let r;
    return () => {
      const o = t.default && zr(t.default(), !0);
      if (!o || !o.length)
        return;
      let i = o[0];
      if (o.length > 1) {
        for (const O of o)
          if (O.type !== we) {
            i = O;
            break;
          }
      }
      const l = N(e), { mode: u } = l;
      if (s.isLeaving)
        return Mn(i);
      const a = Ns(i);
      if (!a)
        return Mn(i);
      const d = Dn(a, l, s, n);
      Vn(a, d);
      const m = n.subTree, b = m && Ns(m);
      let $ = !1;
      const { getTransitionKey: H } = a.type;
      if (H) {
        const O = H();
        r === void 0 ? r = O : O !== r && (r = O, $ = !0);
      }
      if (b && b.type !== we && (!ct(a, b) || $)) {
        const O = Dn(b, l, s, n);
        if (Vn(b, O), u === "out-in")
          return s.isLeaving = !0, O.afterLeave = () => {
            s.isLeaving = !1, n.update();
          }, Mn(i);
        u === "in-out" && a.type !== we && (O.delayLeave = (k, L, fe) => {
          const Z = Kr(s, b);
          Z[String(b.key)] = b, k._leaveCb = () => {
            L(), k._leaveCb = void 0, delete d.delayedLeave;
          }, d.delayedLeave = fe;
        });
      }
      return i;
    };
  }
}, Ur = Ti;
function Kr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Dn(e, t, n, s) {
  const { appear: r, mode: o, persisted: i = !1, onBeforeEnter: l, onEnter: u, onAfterEnter: a, onEnterCancelled: d, onBeforeLeave: m, onLeave: b, onAfterLeave: $, onLeaveCancelled: H, onBeforeAppear: O, onAppear: k, onAfterAppear: L, onAppearCancelled: fe } = t, Z = String(e.key), z = Kr(n, e), se = (A, q) => {
    A && ye(A, s, 9, q);
  }, Ve = (A, q) => {
    const U = q[1];
    se(A, q), P(A) ? A.every((re) => re.length <= 1) && U() : A.length <= 1 && U();
  }, $e = {
    mode: o,
    persisted: i,
    beforeEnter(A) {
      let q = l;
      if (!n.isMounted)
        if (r)
          q = O || l;
        else
          return;
      A._leaveCb && A._leaveCb(!0);
      const U = z[Z];
      U && ct(e, U) && U.el._leaveCb && U.el._leaveCb(), se(q, [A]);
    },
    enter(A) {
      let q = u, U = a, re = d;
      if (!n.isMounted)
        if (r)
          q = k || u, U = L || a, re = fe || d;
        else
          return;
      let E = !1;
      const W = A._enterCb = (he) => {
        E || (E = !0, he ? se(re, [A]) : se(U, [A]), $e.delayedLeave && $e.delayedLeave(), A._enterCb = void 0);
      };
      q ? Ve(q, [A, W]) : W();
    },
    leave(A, q) {
      const U = String(e.key);
      if (A._enterCb && A._enterCb(!0), n.isUnmounting)
        return q();
      se(m, [A]);
      let re = !1;
      const E = A._leaveCb = (W) => {
        re || (re = !0, q(), W ? se(H, [A]) : se($, [A]), A._leaveCb = void 0, z[U] === e && delete z[U]);
      };
      z[U] = e, b ? Ve(b, [A, E]) : E();
    },
    clone(A) {
      return Dn(A, t, n, s);
    }
  };
  return $e;
}
function Mn(e) {
  if (bn(e))
    return e = Xe(e), e.children = null, e;
}
function Ns(e) {
  return bn(e) ? e.children ? e.children[0] : void 0 : e;
}
function Vn(e, t) {
  e.shapeFlag & 6 && e.component ? Vn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function zr(e, t = !1, n) {
  let s = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === be ? (i.patchFlag & 128 && r++, s = s.concat(zr(i.children, t, l))) : (t || i.type !== we) && s.push(l != null ? Xe(i, { key: l }) : i);
  }
  if (r > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
function de(e) {
  return M(e) ? { setup: e, name: e.name } : e;
}
const Rt = (e) => !!e.type.__asyncLoader, bn = (e) => e.type.__isKeepAlive;
function $i(e, t) {
  Wr(e, "a", t);
}
function Oi(e, t) {
  Wr(e, "da", t);
}
function Wr(e, t, n = ne) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (yn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      bn(r.parent.vnode) && Pi(s, t, n, r), r = r.parent;
  }
}
function Pi(e, t, n, s) {
  const r = yn(t, e, s, !0);
  hs(() => {
    Gn(s[t], r);
  }, n);
}
function yn(e, t, n = ne, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      $t(), Ft(n);
      const l = ye(t, n, e, i);
      return dt(), Ot(), l;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const De = (e) => (t, n = ne) => (!jt || e === "sp") && yn(e, (...s) => t(...s), n), Ii = De("bm"), wn = De("m"), Mi = De("bu"), Ai = De("u"), Zr = De("bum"), hs = De("um"), Li = De("sp"), Hi = De("rtg"), Ri = De("rtc");
function Si(e, t = ne) {
  yn("ec", e, t);
}
function Ni(e, t) {
  const n = ue;
  if (n === null)
    return e;
  const s = En(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, u, a = D] = t[o];
    M(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ft(l), r.push({
      dir: i,
      instance: s,
      value: l,
      oldValue: void 0,
      arg: u,
      modifiers: a
    });
  }
  return e;
}
function nt(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let u = l.dir[s];
    u && ($t(), ye(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ot());
  }
}
const ki = Symbol();
function Bi(e, t, n = {}, s, r) {
  if (ue.isCE || ue.parent && Rt(ue.parent) && ue.parent.isCE)
    return X("slot", t === "default" ? null : { name: t }, s && s());
  let o = e[t];
  o && o._c && (o._d = !1), Q();
  const i = o && qr(o(n)), l = Be(be, {
    key: n.key || i && i.key || `_${t}`
  }, i || (s ? s() : []), i && e._ === 1 ? 64 : -2);
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = !0), l;
}
function qr(e) {
  return e.some((t) => dn(t) ? !(t.type === we || t.type === be && !qr(t.children)) : !0) ? e : null;
}
const jn = (e) => e ? lo(e) ? En(e) || e.proxy : jn(e.parent) : null, fn = /* @__PURE__ */ te(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => e.props,
  $attrs: (e) => e.attrs,
  $slots: (e) => e.slots,
  $refs: (e) => e.refs,
  $parent: (e) => jn(e.parent),
  $root: (e) => jn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => ps(e),
  $forceUpdate: (e) => e.f || (e.f = () => ds(e.update)),
  $nextTick: (e) => e.n || (e.n = Hr.bind(e.proxy)),
  $watch: (e) => Ei.bind(e)
}), Di = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: u } = e;
    let a;
    if (t[0] !== "$") {
      const $ = i[t];
      if ($ !== void 0)
        switch ($) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (s !== D && S(s, t))
          return i[t] = 1, s[t];
        if (r !== D && S(r, t))
          return i[t] = 2, r[t];
        if ((a = e.propsOptions[0]) && S(a, t))
          return i[t] = 3, o[t];
        if (n !== D && S(n, t))
          return i[t] = 4, n[t];
        Un && (i[t] = 0);
      }
    }
    const d = fn[t];
    let m, b;
    if (d)
      return t === "$attrs" && me(e, "get", t), d(e);
    if ((m = l.__cssModules) && (m = m[t]))
      return m;
    if (n !== D && S(n, t))
      return i[t] = 4, n[t];
    if (b = u.config.globalProperties, S(b, t))
      return b[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return r !== D && S(r, t) ? (r[t] = n, !0) : s !== D && S(s, t) ? (s[t] = n, !0) : S(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o } }, i) {
    let l;
    return !!n[i] || e !== D && S(e, i) || t !== D && S(t, i) || (l = o[0]) && S(l, i) || S(s, i) || S(fn, i) || S(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : S(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let Un = !0;
function Vi(e) {
  const t = ps(e), n = e.proxy, s = e.ctx;
  Un = !1, t.beforeCreate && ks(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: u,
    inject: a,
    created: d,
    beforeMount: m,
    mounted: b,
    beforeUpdate: $,
    updated: H,
    activated: O,
    deactivated: k,
    beforeDestroy: L,
    beforeUnmount: fe,
    destroyed: Z,
    unmounted: z,
    render: se,
    renderTracked: Ve,
    renderTriggered: $e,
    errorCaptured: A,
    serverPrefetch: q,
    expose: U,
    inheritAttrs: re,
    components: E,
    directives: W,
    filters: he
  } = t;
  if (a && ji(a, s, null, e.appContext.config.unwrapInjectedRef), i)
    for (const Y in i) {
      const V = i[Y];
      M(V) && (s[Y] = V.bind(n));
    }
  if (r) {
    const Y = r.call(n, n);
    K(Y) && (e.data = zt(Y));
  }
  if (Un = !0, o)
    for (const Y in o) {
      const V = o[Y], Ge = M(V) ? V.bind(n, n) : M(V.get) ? V.get.bind(n, n) : Te, Yt = !M(V) && M(V.set) ? V.set.bind(n) : Te, et = wt({
        get: Ge,
        set: Yt
      });
      Object.defineProperty(s, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => et.value,
        set: (Oe) => et.value = Oe
      });
    }
  if (l)
    for (const Y in l)
      Yr(l[Y], s, n, Y);
  if (u) {
    const Y = M(u) ? u.call(n) : u;
    Reflect.ownKeys(Y).forEach((V) => {
      Dr(V, Y[V]);
    });
  }
  d && ks(d, e, "c");
  function ee(Y, V) {
    P(V) ? V.forEach((Ge) => Y(Ge.bind(n))) : V && Y(V.bind(n));
  }
  if (ee(Ii, m), ee(wn, b), ee(Mi, $), ee(Ai, H), ee($i, O), ee(Oi, k), ee(Si, A), ee(Ri, Ve), ee(Hi, $e), ee(Zr, fe), ee(hs, z), ee(Li, q), P(U))
    if (U.length) {
      const Y = e.exposed || (e.exposed = {});
      U.forEach((V) => {
        Object.defineProperty(Y, V, {
          get: () => n[V],
          set: (Ge) => n[V] = Ge
        });
      });
    } else
      e.exposed || (e.exposed = {});
  se && e.render === Te && (e.render = se), re != null && (e.inheritAttrs = re), E && (e.components = E), W && (e.directives = W);
}
function ji(e, t, n = Te, s = !1) {
  P(e) && (e = Kn(e));
  for (const r in e) {
    const o = e[r];
    let i;
    K(o) ? "default" in o ? i = Ne(o.from || r, o.default, !0) : i = Ne(o.from || r) : i = Ne(o), ie(i) && s ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[r] = i;
  }
}
function ks(e, t, n) {
  ye(P(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Yr(e, t, n, s) {
  const r = s.includes(".") ? jr(n, s) : () => n[s];
  if (le(e)) {
    const o = t[e];
    M(o) && yt(r, o);
  } else if (M(e))
    yt(r, e.bind(n));
  else if (K(e))
    if (P(e))
      e.forEach((o) => Yr(o, t, n, s));
    else {
      const o = M(e.handler) ? e.handler.bind(n) : t[e.handler];
      M(o) && yt(r, o, e);
    }
}
function ps(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, l = o.get(t);
  let u;
  return l ? u = l : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach((a) => an(u, a, i, !0)), an(u, t, i)), K(t) && o.set(t, u), u;
}
function an(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && an(e, o, n, !0), r && r.forEach((i) => an(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = Ui[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Ui = {
  data: Bs,
  props: it,
  emits: it,
  methods: it,
  computed: it,
  beforeCreate: ce,
  created: ce,
  beforeMount: ce,
  mounted: ce,
  beforeUpdate: ce,
  updated: ce,
  beforeDestroy: ce,
  beforeUnmount: ce,
  destroyed: ce,
  unmounted: ce,
  activated: ce,
  deactivated: ce,
  errorCaptured: ce,
  serverPrefetch: ce,
  components: it,
  directives: it,
  watch: zi,
  provide: Bs,
  inject: Ki
};
function Bs(e, t) {
  return t ? e ? function() {
    return te(M(e) ? e.call(this, this) : e, M(t) ? t.call(this, this) : t);
  } : t : e;
}
function Ki(e, t) {
  return it(Kn(e), Kn(t));
}
function Kn(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ce(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function it(e, t) {
  return e ? te(te(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function zi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = te(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ce(e[s], t[s]);
  return n;
}
function Wi(e, t, n, s = !1) {
  const r = {}, o = {};
  on(o, xn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Qr(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : ri(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function Zi(e, t, n, s) {
  const { props: r, attrs: o, vnode: { patchFlag: i } } = e, l = N(r), [u] = e.propsOptions;
  let a = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let m = 0; m < d.length; m++) {
        let b = d[m];
        if (Cn(e.emitsOptions, b))
          continue;
        const $ = t[b];
        if (u)
          if (S(o, b))
            $ !== o[b] && (o[b] = $, a = !0);
          else {
            const H = Ye(b);
            r[H] = zn(u, l, H, $, e, !1);
          }
        else
          $ !== o[b] && (o[b] = $, a = !0);
      }
    }
  } else {
    Qr(e, t, r, o) && (a = !0);
    let d;
    for (const m in l)
      (!t || !S(t, m) && ((d = Se(m)) === m || !S(t, d))) && (u ? n && (n[m] !== void 0 || n[d] !== void 0) && (r[m] = zn(u, l, m, void 0, e, !0)) : delete r[m]);
    if (o !== l)
      for (const m in o)
        (!t || !S(t, m) && !0) && (delete o[m], a = !0);
  }
  a && ke(e, "set", "$attrs");
}
function Qr(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let u in t) {
      if (nn(u))
        continue;
      const a = t[u];
      let d;
      r && S(r, d = Ye(u)) ? !o || !o.includes(d) ? n[d] = a : (l || (l = {}))[d] = a : Cn(e.emitsOptions, u) || (!(u in s) || a !== s[u]) && (s[u] = a, i = !0);
    }
  if (o) {
    const u = N(n), a = l || D;
    for (let d = 0; d < o.length; d++) {
      const m = o[d];
      n[m] = zn(r, u, m, a[m], e, !S(a, m));
    }
  }
  return i;
}
function zn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = S(i, "default");
    if (l && s === void 0) {
      const u = i.default;
      if (i.type !== Function && M(u)) {
        const { propsDefaults: a } = r;
        n in a ? s = a[n] : (Ft(r), s = a[n] = u.call(null, t), dt());
      } else
        s = u;
    }
    i[0] && (o && !l ? s = !1 : i[1] && (s === "" || s === Se(n)) && (s = !0));
  }
  return s;
}
function Jr(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, l = [];
  let u = !1;
  if (!M(e)) {
    const d = (m) => {
      u = !0;
      const [b, $] = Jr(m, t, !0);
      te(i, b), $ && l.push(...$);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !u)
    return K(e) && s.set(e, mt), mt;
  if (P(o))
    for (let d = 0; d < o.length; d++) {
      const m = Ye(o[d]);
      Ds(m) && (i[m] = D);
    }
  else if (o)
    for (const d in o) {
      const m = Ye(d);
      if (Ds(m)) {
        const b = o[d], $ = i[m] = P(b) || M(b) ? { type: b } : b;
        if ($) {
          const H = Us(Boolean, $.type), O = Us(String, $.type);
          $[0] = H > -1, $[1] = O < 0 || H < O, (H > -1 || S($, "default")) && l.push(m);
        }
      }
    }
  const a = [i, l];
  return K(e) && s.set(e, a), a;
}
function Ds(e) {
  return e[0] !== "$";
}
function Vs(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function js(e, t) {
  return Vs(e) === Vs(t);
}
function Us(e, t) {
  return P(t) ? t.findIndex((n) => js(n, e)) : M(t) && js(t, e) ? 0 : -1;
}
const Xr = (e) => e[0] === "_" || e === "$stable", gs = (e) => P(e) ? e.map(Me) : [Me(e)], qi = (e, t, n) => {
  if (t._n)
    return t;
  const s = Wt((...r) => gs(t(...r)), n);
  return s._c = !1, s;
}, Gr = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Xr(r))
      continue;
    const o = e[r];
    if (M(o))
      t[r] = qi(r, o, s);
    else if (o != null) {
      const i = gs(o);
      t[r] = () => i;
    }
  }
}, eo = (e, t) => {
  const n = gs(t);
  e.slots.default = () => n;
}, Yi = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = N(t), on(t, "_", n)) : Gr(t, e.slots = {});
  } else
    e.slots = {}, t && eo(e, t);
  on(e.slots, xn, 1);
}, Qi = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = D;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : (te(r, t), !n && l === 1 && delete r._) : (o = !t.$stable, Gr(t, r)), i = t;
  } else
    t && (eo(e, t), i = { default: 1 });
  if (o)
    for (const l in r)
      !Xr(l) && !(l in i) && delete r[l];
};
function to() {
  return {
    app: null,
    config: {
      isNativeTag: wo,
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
let Ji = 0;
function Xi(e, t) {
  return function(s, r = null) {
    M(s) || (s = Object.assign({}, s)), r != null && !K(r) && (r = null);
    const o = to(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const u = o.app = {
      _uid: Ji++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: vl,
      get config() {
        return o.config;
      },
      set config(a) {
      },
      use(a, ...d) {
        return i.has(a) || (a && M(a.install) ? (i.add(a), a.install(u, ...d)) : M(a) && (i.add(a), a(u, ...d))), u;
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), u;
      },
      component(a, d) {
        return d ? (o.components[a] = d, u) : o.components[a];
      },
      directive(a, d) {
        return d ? (o.directives[a] = d, u) : o.directives[a];
      },
      mount(a, d, m) {
        if (!l) {
          const b = X(s, r);
          return b.appContext = o, d && t ? t(b, a) : e(b, a, m), l = !0, u._container = a, a.__vue_app__ = u, En(b.component) || b.component.proxy;
        }
      },
      unmount() {
        l && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, d) {
        return o.provides[a] = d, u;
      }
    };
    return u;
  };
}
function Wn(e, t, n, s, r = !1) {
  if (P(e)) {
    e.forEach((b, $) => Wn(b, t && (P(t) ? t[$] : t), n, s, r));
    return;
  }
  if (Rt(s) && !r)
    return;
  const o = s.shapeFlag & 4 ? En(s.component) || s.component.proxy : s.el, i = r ? null : o, { i: l, r: u } = e, a = t && t.r, d = l.refs === D ? l.refs = {} : l.refs, m = l.setupState;
  if (a != null && a !== u && (le(a) ? (d[a] = null, S(m, a) && (m[a] = null)) : ie(a) && (a.value = null)), M(u))
    qe(u, l, 12, [i, d]);
  else {
    const b = le(u), $ = ie(u);
    if (b || $) {
      const H = () => {
        if (e.f) {
          const O = b ? d[u] : u.value;
          r ? P(O) && Gn(O, o) : P(O) ? O.includes(o) || O.push(o) : b ? (d[u] = [o], S(m, u) && (m[u] = d[u])) : (u.value = [o], e.k && (d[e.k] = u.value));
        } else
          b ? (d[u] = i, S(m, u) && (m[u] = i)) : $ && (u.value = i, e.k && (d[e.k] = i));
      };
      i ? (H.id = -1, ae(H, n)) : H();
    }
  }
}
const ae = xi;
function Gi(e) {
  return el(e);
}
function el(e, t) {
  const n = Oo();
  n.__VUE__ = !0;
  const { insert: s, remove: r, patchProp: o, createElement: i, createText: l, createComment: u, setText: a, setElementText: d, parentNode: m, nextSibling: b, setScopeId: $ = Te, insertStaticContent: H } = e, O = (c, f, h, g = null, p = null, C = null, w = !1, v = null, y = !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !ct(c, f) && (g = Qt(c), Oe(c, p, C, !0), c = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: _, ref: F, shapeFlag: x } = f;
    switch (_) {
      case _s:
        k(c, f, h, g);
        break;
      case we:
        L(c, f, h, g);
        break;
      case sn:
        c == null && fe(f, h, g, w);
        break;
      case be:
        E(c, f, h, g, p, C, w, v, y);
        break;
      default:
        x & 1 ? se(c, f, h, g, p, C, w, v, y) : x & 6 ? W(c, f, h, g, p, C, w, v, y) : (x & 64 || x & 128) && _.process(c, f, h, g, p, C, w, v, y, gt);
    }
    F != null && p && Wn(F, c && c.ref, C, f || c, !f);
  }, k = (c, f, h, g) => {
    if (c == null)
      s(f.el = l(f.children), h, g);
    else {
      const p = f.el = c.el;
      f.children !== c.children && a(p, f.children);
    }
  }, L = (c, f, h, g) => {
    c == null ? s(f.el = u(f.children || ""), h, g) : f.el = c.el;
  }, fe = (c, f, h, g) => {
    [c.el, c.anchor] = H(c.children, f, h, g, c.el, c.anchor);
  }, Z = ({ el: c, anchor: f }, h, g) => {
    let p;
    for (; c && c !== f; )
      p = b(c), s(c, h, g), c = p;
    s(f, h, g);
  }, z = ({ el: c, anchor: f }) => {
    let h;
    for (; c && c !== f; )
      h = b(c), r(c), c = h;
    r(f);
  }, se = (c, f, h, g, p, C, w, v, y) => {
    w = w || f.type === "svg", c == null ? Ve(f, h, g, p, C, w, v, y) : q(c, f, p, C, w, v, y);
  }, Ve = (c, f, h, g, p, C, w, v) => {
    let y, _;
    const { type: F, props: x, shapeFlag: T, transition: I, dirs: R } = c;
    if (y = c.el = i(c.type, C, x && x.is, x), T & 8 ? d(y, c.children) : T & 16 && A(c.children, y, null, g, p, C && F !== "foreignObject", w, v), R && nt(c, null, g, "created"), x) {
      for (const B in x)
        B !== "value" && !nn(B) && o(y, B, null, x[B], C, c.children, g, p, Le);
      "value" in x && o(y, "value", null, x.value), (_ = x.onVnodeBeforeMount) && Ie(_, g, c);
    }
    $e(y, c, c.scopeId, w, g), R && nt(c, null, g, "beforeMount");
    const j = (!p || p && !p.pendingBranch) && I && !I.persisted;
    j && I.beforeEnter(y), s(y, f, h), ((_ = x && x.onVnodeMounted) || j || R) && ae(() => {
      _ && Ie(_, g, c), j && I.enter(y), R && nt(c, null, g, "mounted");
    }, p);
  }, $e = (c, f, h, g, p) => {
    if (h && $(c, h), g)
      for (let C = 0; C < g.length; C++)
        $(c, g[C]);
    if (p) {
      let C = p.subTree;
      if (f === C) {
        const w = p.vnode;
        $e(c, w, w.scopeId, w.slotScopeIds, p.parent);
      }
    }
  }, A = (c, f, h, g, p, C, w, v, y = 0) => {
    for (let _ = y; _ < c.length; _++) {
      const F = c[_] = v ? ze(c[_]) : Me(c[_]);
      O(null, F, f, h, g, p, C, w, v);
    }
  }, q = (c, f, h, g, p, C, w) => {
    const v = f.el = c.el;
    let { patchFlag: y, dynamicChildren: _, dirs: F } = f;
    y |= c.patchFlag & 16;
    const x = c.props || D, T = f.props || D;
    let I;
    h && st(h, !1), (I = T.onVnodeBeforeUpdate) && Ie(I, h, f, c), F && nt(f, c, h, "beforeUpdate"), h && st(h, !0);
    const R = p && f.type !== "foreignObject";
    if (_ ? U(c.dynamicChildren, _, v, h, g, R, C) : w || V(c, f, v, null, h, g, R, C, !1), y > 0) {
      if (y & 16)
        re(v, f, x, T, h, g, p);
      else if (y & 2 && x.class !== T.class && o(v, "class", null, T.class, p), y & 4 && o(v, "style", x.style, T.style, p), y & 8) {
        const j = f.dynamicProps;
        for (let B = 0; B < j.length; B++) {
          const J = j[B], xe = x[J], _t = T[J];
          (_t !== xe || J === "value") && o(v, J, xe, _t, p, c.children, h, g, Le);
        }
      }
      y & 1 && c.children !== f.children && d(v, f.children);
    } else
      !w && _ == null && re(v, f, x, T, h, g, p);
    ((I = T.onVnodeUpdated) || F) && ae(() => {
      I && Ie(I, h, f, c), F && nt(f, c, h, "updated");
    }, g);
  }, U = (c, f, h, g, p, C, w) => {
    for (let v = 0; v < f.length; v++) {
      const y = c[v], _ = f[v], F = y.el && (y.type === be || !ct(y, _) || y.shapeFlag & 70) ? m(y.el) : h;
      O(y, _, F, null, g, p, C, w, !0);
    }
  }, re = (c, f, h, g, p, C, w) => {
    if (h !== g) {
      if (h !== D)
        for (const v in h)
          !nn(v) && !(v in g) && o(c, v, h[v], null, w, f.children, p, C, Le);
      for (const v in g) {
        if (nn(v))
          continue;
        const y = g[v], _ = h[v];
        y !== _ && v !== "value" && o(c, v, _, y, w, f.children, p, C, Le);
      }
      "value" in g && o(c, "value", h.value, g.value);
    }
  }, E = (c, f, h, g, p, C, w, v, y) => {
    const _ = f.el = c ? c.el : l(""), F = f.anchor = c ? c.anchor : l("");
    let { patchFlag: x, dynamicChildren: T, slotScopeIds: I } = f;
    I && (v = v ? v.concat(I) : I), c == null ? (s(_, h, g), s(F, h, g), A(f.children, h, F, p, C, w, v, y)) : x > 0 && x & 64 && T && c.dynamicChildren ? (U(c.dynamicChildren, T, h, p, C, w, v), (f.key != null || p && f === p.subTree) && no(c, f, !0)) : V(c, f, h, F, p, C, w, v, y);
  }, W = (c, f, h, g, p, C, w, v, y) => {
    f.slotScopeIds = v, c == null ? f.shapeFlag & 512 ? p.ctx.activate(f, h, g, w, y) : he(f, h, g, p, C, w, y) : It(c, f, y);
  }, he = (c, f, h, g, p, C, w) => {
    const v = c.component = fl(c, g, p);
    if (bn(c) && (v.ctx.renderer = gt), dl(v), v.asyncDep) {
      if (p && p.registerDep(v, ee), !c.el) {
        const y = v.subTree = X(we);
        L(null, y, f, h);
      }
      return;
    }
    ee(v, c, f, h, p, C, w);
  }, It = (c, f, h) => {
    const g = f.component = c.component;
    if (bi(c, f, h))
      if (g.asyncDep && !g.asyncResolved) {
        Y(g, f, h);
        return;
      } else
        g.next = f, pi(g.update), g.update();
    else
      f.el = c.el, g.vnode = f;
  }, ee = (c, f, h, g, p, C, w) => {
    const v = () => {
      if (c.isMounted) {
        let { next: F, bu: x, u: T, parent: I, vnode: R } = c, j = F, B;
        st(c, !1), F ? (F.el = R.el, Y(c, F, w)) : F = R, x && Pn(x), (B = F.props && F.props.onVnodeBeforeUpdate) && Ie(B, I, F, R), st(c, !0);
        const J = In(c), xe = c.subTree;
        c.subTree = J, O(
          xe,
          J,
          m(xe.el),
          Qt(xe),
          c,
          p,
          C
        ), F.el = J.el, j === null && yi(c, J.el), T && ae(T, p), (B = F.props && F.props.onVnodeUpdated) && ae(() => Ie(B, I, F, R), p);
      } else {
        let F;
        const { el: x, props: T } = f, { bm: I, m: R, parent: j } = c, B = Rt(f);
        if (st(c, !1), I && Pn(I), !B && (F = T && T.onVnodeBeforeMount) && Ie(F, j, f), st(c, !0), x && $n) {
          const J = () => {
            c.subTree = In(c), $n(x, c.subTree, c, p, null);
          };
          B ? f.type.__asyncLoader().then(
            () => !c.isUnmounted && J()
          ) : J();
        } else {
          const J = c.subTree = In(c);
          O(null, J, h, g, c, p, C), f.el = J.el;
        }
        if (R && ae(R, p), !B && (F = T && T.onVnodeMounted)) {
          const J = f;
          ae(() => Ie(F, j, J), p);
        }
        (f.shapeFlag & 256 || j && Rt(j.vnode) && j.vnode.shapeFlag & 256) && c.a && ae(c.a, p), c.isMounted = !0, f = h = g = null;
      }
    }, y = c.effect = new ss(
      v,
      () => ds(_),
      c.scope
    ), _ = c.update = () => y.run();
    _.id = c.uid, st(c, !0), _();
  }, Y = (c, f, h) => {
    f.component = c;
    const g = c.vnode.props;
    c.vnode = f, c.next = null, Zi(c, f.props, g, h), Qi(c, f.children, h), $t(), Hs(), Ot();
  }, V = (c, f, h, g, p, C, w, v, y = !1) => {
    const _ = c && c.children, F = c ? c.shapeFlag : 0, x = f.children, { patchFlag: T, shapeFlag: I } = f;
    if (T > 0) {
      if (T & 128) {
        Yt(_, x, h, g, p, C, w, v, y);
        return;
      } else if (T & 256) {
        Ge(_, x, h, g, p, C, w, v, y);
        return;
      }
    }
    I & 8 ? (F & 16 && Le(_, p, C), x !== _ && d(h, x)) : F & 16 ? I & 16 ? Yt(_, x, h, g, p, C, w, v, y) : Le(_, p, C, !0) : (F & 8 && d(h, ""), I & 16 && A(x, h, g, p, C, w, v, y));
  }, Ge = (c, f, h, g, p, C, w, v, y) => {
    c = c || mt, f = f || mt;
    const _ = c.length, F = f.length, x = Math.min(_, F);
    let T;
    for (T = 0; T < x; T++) {
      const I = f[T] = y ? ze(f[T]) : Me(f[T]);
      O(c[T], I, h, null, p, C, w, v, y);
    }
    _ > F ? Le(c, p, C, !0, !1, x) : A(f, h, g, p, C, w, v, y, x);
  }, Yt = (c, f, h, g, p, C, w, v, y) => {
    let _ = 0;
    const F = f.length;
    let x = c.length - 1, T = F - 1;
    for (; _ <= x && _ <= T; ) {
      const I = c[_], R = f[_] = y ? ze(f[_]) : Me(f[_]);
      if (ct(I, R))
        O(I, R, h, null, p, C, w, v, y);
      else
        break;
      _++;
    }
    for (; _ <= x && _ <= T; ) {
      const I = c[x], R = f[T] = y ? ze(f[T]) : Me(f[T]);
      if (ct(I, R))
        O(I, R, h, null, p, C, w, v, y);
      else
        break;
      x--, T--;
    }
    if (_ > x) {
      if (_ <= T) {
        const I = T + 1, R = I < F ? f[I].el : g;
        for (; _ <= T; )
          O(null, f[_] = y ? ze(f[_]) : Me(f[_]), h, R, p, C, w, v, y), _++;
      }
    } else if (_ > T)
      for (; _ <= x; )
        Oe(c[_], p, C, !0), _++;
    else {
      const I = _, R = _, j = /* @__PURE__ */ new Map();
      for (_ = R; _ <= T; _++) {
        const pe = f[_] = y ? ze(f[_]) : Me(f[_]);
        pe.key != null && j.set(pe.key, _);
      }
      let B, J = 0;
      const xe = T - R + 1;
      let _t = !1, ws = 0;
      const Mt = new Array(xe);
      for (_ = 0; _ < xe; _++)
        Mt[_] = 0;
      for (_ = I; _ <= x; _++) {
        const pe = c[_];
        if (J >= xe) {
          Oe(pe, p, C, !0);
          continue;
        }
        let Pe;
        if (pe.key != null)
          Pe = j.get(pe.key);
        else
          for (B = R; B <= T; B++)
            if (Mt[B - R] === 0 && ct(pe, f[B])) {
              Pe = B;
              break;
            }
        Pe === void 0 ? Oe(pe, p, C, !0) : (Mt[Pe - R] = _ + 1, Pe >= ws ? ws = Pe : _t = !0, O(pe, f[Pe], h, null, p, C, w, v, y), J++);
      }
      const xs = _t ? tl(Mt) : mt;
      for (B = xs.length - 1, _ = xe - 1; _ >= 0; _--) {
        const pe = R + _, Pe = f[pe], Es = pe + 1 < F ? f[pe + 1].el : g;
        Mt[_] === 0 ? O(null, Pe, h, Es, p, C, w, v, y) : _t && (B < 0 || _ !== xs[B] ? et(Pe, h, Es, 2) : B--);
      }
    }
  }, et = (c, f, h, g, p = null) => {
    const { el: C, type: w, transition: v, children: y, shapeFlag: _ } = c;
    if (_ & 6) {
      et(c.component.subTree, f, h, g);
      return;
    }
    if (_ & 128) {
      c.suspense.move(f, h, g);
      return;
    }
    if (_ & 64) {
      w.move(c, f, h, gt);
      return;
    }
    if (w === be) {
      s(C, f, h);
      for (let x = 0; x < y.length; x++)
        et(y[x], f, h, g);
      s(c.anchor, f, h);
      return;
    }
    if (w === sn) {
      Z(c, f, h);
      return;
    }
    if (g !== 2 && _ & 1 && v)
      if (g === 0)
        v.beforeEnter(C), s(C, f, h), ae(() => v.enter(C), p);
      else {
        const { leave: x, delayLeave: T, afterLeave: I } = v, R = () => s(C, f, h), j = () => {
          x(C, () => {
            R(), I && I();
          });
        };
        T ? T(C, R, j) : j();
      }
    else
      s(C, f, h);
  }, Oe = (c, f, h, g = !1, p = !1) => {
    const { type: C, props: w, ref: v, children: y, dynamicChildren: _, shapeFlag: F, patchFlag: x, dirs: T } = c;
    if (v != null && Wn(v, null, h, c, !0), F & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const I = F & 1 && T, R = !Rt(c);
    let j;
    if (R && (j = w && w.onVnodeBeforeUnmount) && Ie(j, f, c), F & 6)
      po(c.component, h, g);
    else {
      if (F & 128) {
        c.suspense.unmount(h, g);
        return;
      }
      I && nt(c, null, f, "beforeUnmount"), F & 64 ? c.type.remove(c, f, h, p, gt, g) : _ && (C !== be || x > 0 && x & 64) ? Le(_, f, h, !1, !0) : (C === be && x & 384 || !p && F & 16) && Le(y, f, h), g && bs(c);
    }
    (R && (j = w && w.onVnodeUnmounted) || I) && ae(() => {
      j && Ie(j, f, c), I && nt(c, null, f, "unmounted");
    }, h);
  }, bs = (c) => {
    const { type: f, el: h, anchor: g, transition: p } = c;
    if (f === be) {
      ho(h, g);
      return;
    }
    if (f === sn) {
      z(c);
      return;
    }
    const C = () => {
      r(h), p && !p.persisted && p.afterLeave && p.afterLeave();
    };
    if (c.shapeFlag & 1 && p && !p.persisted) {
      const { leave: w, delayLeave: v } = p, y = () => w(h, C);
      v ? v(c.el, C, y) : y();
    } else
      C();
  }, ho = (c, f) => {
    let h;
    for (; c !== f; )
      h = b(c), r(c), c = h;
    r(f);
  }, po = (c, f, h) => {
    const { bum: g, scope: p, update: C, subTree: w, um: v } = c;
    g && Pn(g), p.stop(), C && (C.active = !1, Oe(w, c, f, h)), v && ae(v, f), ae(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, Le = (c, f, h, g = !1, p = !1, C = 0) => {
    for (let w = C; w < c.length; w++)
      Oe(c[w], f, h, g, p);
  }, Qt = (c) => c.shapeFlag & 6 ? Qt(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : b(c.anchor || c.el), ys = (c, f, h) => {
    c == null ? f._vnode && Oe(f._vnode, null, null, !0) : O(f._vnode || null, c, f, null, null, null, h), Hs(), Sr(), f._vnode = c;
  }, gt = {
    p: O,
    um: Oe,
    m: et,
    r: bs,
    mt: he,
    mc: A,
    pc: V,
    pbc: U,
    n: Qt,
    o: e
  };
  let Tn, $n;
  return t && ([Tn, $n] = t(gt)), {
    render: ys,
    hydrate: Tn,
    createApp: Xi(ys, Tn)
  };
}
function st({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function no(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (P(s) && P(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = ze(r[o]), l.el = i.el), n || no(i, l));
    }
}
function tl(e) {
  const t = e.slice(), n = [0];
  let s, r, o, i, l;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const a = e[s];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        l = o + i >> 1, e[n[l]] < a ? o = l + 1 : i = l;
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
const nl = (e) => e.__isTeleport, be = Symbol(void 0), _s = Symbol(void 0), we = Symbol(void 0), sn = Symbol(void 0), St = [];
let Fe = null;
function Q(e = !1) {
  St.push(Fe = e ? null : []);
}
function sl() {
  St.pop(), Fe = St[St.length - 1] || null;
}
let Vt = 1;
function Ks(e) {
  Vt += e;
}
function so(e) {
  return e.dynamicChildren = Vt > 0 ? Fe || mt : null, sl(), Vt > 0 && Fe && Fe.push(e), e;
}
function ve(e, t, n, s, r, o) {
  return so(G(e, t, n, s, r, o, !0));
}
function Be(e, t, n, s, r) {
  return so(X(e, t, n, s, r, !0));
}
function dn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const xn = "__vInternal", ro = ({ key: e }) => e != null ? e : null, rn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? le(e) || ie(e) || M(e) ? { i: ue, r: e, k: t, f: !!n } : e : null;
function G(e, t = null, n = null, s = 0, r = null, o = e === be ? 0 : 1, i = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ro(t),
    ref: t && rn(t),
    scopeId: Br,
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
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null
  };
  return l ? (ms(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= le(n) ? 8 : 16), Vt > 0 && !i && Fe && (u.patchFlag > 0 || o & 6) && u.patchFlag !== 32 && Fe.push(u), u;
}
const X = rl;
function rl(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === ki) && (e = we), dn(e)) {
    const l = Xe(e, t, !0);
    return n && ms(l, n), Vt > 0 && !o && Fe && (l.shapeFlag & 6 ? Fe[Fe.indexOf(e)] = l : Fe.push(l)), l.patchFlag |= -2, l;
  }
  if (_l(e) && (e = e.__vccOpts), t) {
    t = ol(t);
    let { class: l, style: u } = t;
    l && !le(l) && (t.class = hn(l)), K(u) && (Pr(u) && !P(u) && (u = te({}, u)), t.style = Kt(u));
  }
  const i = le(e) ? 1 : wi(e) ? 128 : nl(e) ? 64 : K(e) ? 4 : M(e) ? 2 : 0;
  return G(e, t, n, s, r, i, o, !0);
}
function ol(e) {
  return e ? Pr(e) || xn in e ? te({}, e) : e : null;
}
function Xe(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e, l = t ? io(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ro(l),
    ref: t && t.ref ? n && r ? P(r) ? r.concat(rn(t)) : [r, rn(t)] : rn(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== be ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Xe(e.ssContent),
    ssFallback: e.ssFallback && Xe(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function il(e = " ", t = 0) {
  return X(_s, null, e, t);
}
function oo(e, t) {
  const n = X(sn, null, e);
  return n.staticCount = t, n;
}
function ll(e = "", t = !1) {
  return t ? (Q(), Be(we, null, e)) : X(we, null, e);
}
function Me(e) {
  return e == null || typeof e == "boolean" ? X(we) : P(e) ? X(
    be,
    null,
    e.slice()
  ) : typeof e == "object" ? ze(e) : X(_s, null, String(e));
}
function ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xe(e);
}
function ms(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (P(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), ms(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(xn in t) ? t._ctx = ue : r === 3 && ue && (ue.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    M(t) ? (t = { default: t, _ctx: ue }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [il(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function io(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = hn([t.class, s.class]));
      else if (r === "style")
        t.style = Kt([t.style, s.style]);
      else if (pn(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(P(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ie(e, t, n, s = null) {
  ye(e, t, 7, [
    n,
    s
  ]);
}
const cl = to();
let ul = 0;
function fl(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || cl, o = {
    uid: ul++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new mr(!0),
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
    propsOptions: Jr(s, r),
    emitsOptions: kr(s, r),
    emit: null,
    emitted: null,
    propsDefaults: D,
    inheritAttrs: s.inheritAttrs,
    ctx: D,
    data: D,
    props: D,
    attrs: D,
    slots: D,
    refs: D,
    setupState: D,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = mi.bind(null, o), e.ce && e.ce(o), o;
}
let ne = null;
const al = () => ne || ue, Ft = (e) => {
  ne = e, e.scope.on();
}, dt = () => {
  ne && ne.scope.off(), ne = null;
};
function lo(e) {
  return e.vnode.shapeFlag & 4;
}
let jt = !1;
function dl(e, t = !1) {
  jt = t;
  const { props: n, children: s } = e.vnode, r = lo(e);
  Wi(e, n, r, t), Yi(e, s);
  const o = r ? hl(e, t) : void 0;
  return jt = !1, o;
}
function hl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Ir(new Proxy(e.ctx, Di));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? gl(e) : null;
    Ft(e), $t();
    const o = qe(s, e, 0, [e.props, r]);
    if (Ot(), dt(), hr(o)) {
      if (o.then(dt, dt), t)
        return o.then((i) => {
          zs(e, i, t);
        }).catch((i) => {
          vn(i, e, 0);
        });
      e.asyncDep = o;
    } else
      zs(e, o, t);
  } else
    co(e, t);
}
function zs(e, t, n) {
  M(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) && (e.setupState = Mr(t)), co(e, n);
}
let Ws;
function co(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Ws && !s.render) {
      const r = s.template || ps(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: u } = s, a = te(te({
          isCustomElement: o,
          delimiters: l
        }, i), u);
        s.render = Ws(r, a);
      }
    }
    e.render = s.render || Te;
  }
  Ft(e), $t(), Vi(e), Ot(), dt();
}
function pl(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return me(e, "get", "$attrs"), t[n];
    }
  });
}
function gl(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = pl(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function En(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Mr(Ir(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in fn)
          return fn[n](e);
      }
    }));
}
function _l(e) {
  return M(e) && "__vccOpts" in e;
}
const wt = (e, t) => ai(e, t, jt);
function ml(e, t, n) {
  const s = arguments.length;
  return s === 2 ? K(t) && !P(t) ? dn(t) ? X(e, null, [t]) : X(e, t) : X(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && dn(n) && (n = [n]), X(e, t, n));
}
const vl = "3.2.40", Cl = "http://www.w3.org/2000/svg", ut = typeof document < "u" ? document : null, Zs = ut && /* @__PURE__ */ ut.createElement("template"), bl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t ? ut.createElementNS(Cl, e) : ut.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => ut.createTextNode(e),
  createComment: (e) => ut.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ut.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      Zs.innerHTML = s ? `<svg>${e}</svg>` : e;
      const l = Zs.content;
      if (s) {
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
function yl(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function wl(e, t, n) {
  const s = e.style, r = le(n);
  if (n && !r) {
    for (const o in n)
      Zn(s, o, n[o]);
    if (t && !le(t))
      for (const o in t)
        n[o] == null && Zn(s, o, "");
  } else {
    const o = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = o);
  }
}
const qs = /\s*!important$/;
function Zn(e, t, n) {
  if (P(n))
    n.forEach((s) => Zn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = xl(e, t);
    qs.test(n) ? e.setProperty(Se(s), n.replace(qs, ""), "important") : e[s] = n;
  }
}
const Ys = ["Webkit", "Moz", "ms"], An = {};
function xl(e, t) {
  const n = An[t];
  if (n)
    return n;
  let s = Ye(t);
  if (s !== "filter" && s in e)
    return An[t] = s;
  s = _r(s);
  for (let r = 0; r < Ys.length; r++) {
    const o = Ys[r] + s;
    if (o in e)
      return An[t] = o;
  }
  return t;
}
const Qs = "http://www.w3.org/1999/xlink";
function El(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Qs, t.slice(6, t.length)) : e.setAttributeNS(Qs, t, n);
  else {
    const o = vo(t);
    n == null || o && !fr(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function Fl(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), e[t] = n == null ? "" : n;
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
    u === "boolean" ? n = fr(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(t);
}
const [uo, Tl] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let qn = 0;
const $l = /* @__PURE__ */ Promise.resolve(), Ol = () => {
  qn = 0;
}, Pl = () => qn || ($l.then(Ol), qn = uo());
function Il(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ml(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Al(e, t, n, s, r = null) {
  const o = e._vei || (e._vei = {}), i = o[t];
  if (s && i)
    i.value = s;
  else {
    const [l, u] = Ll(t);
    if (s) {
      const a = o[t] = Hl(s, r);
      Il(e, l, a, u);
    } else
      i && (Ml(e, l, i, u), o[t] = void 0);
  }
}
const Js = /(?:Once|Passive|Capture)$/;
function Ll(e) {
  let t;
  if (Js.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Js); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Se(e.slice(2)), t];
}
function Hl(e, t) {
  const n = (s) => {
    const r = s.timeStamp || uo();
    (Tl || r >= n.attached - 1) && ye(Rl(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = Pl(), n;
}
function Rl(e, t) {
  if (P(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return t;
}
const Xs = /^on[a-z]/, Sl = (e, t, n, s, r = !1, o, i, l, u) => {
  t === "class" ? yl(e, s, r) : t === "style" ? wl(e, n, s) : pn(t) ? Xn(t) || Al(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Nl(e, t, s, r)) ? Fl(e, t, s, o, i, l, u) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), El(e, t, s, r));
};
function Nl(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && Xs.test(t) && M(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Xs.test(t) && le(n) ? !1 : t in e;
}
function ht(e, t) {
  const n = de(e);
  class s extends vs {
    constructor(o) {
      super(n, o, t);
    }
  }
  return s.def = n, s;
}
const kl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class vs extends kl {
  constructor(t, n = {}, s) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this._connected = !0, this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    this._connected = !1, Hr(() => {
      this._connected || (or(null, this.shadowRoot), this._instance = null);
    });
  }
  _resolveDef() {
    if (this._resolved)
      return;
    this._resolved = !0;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    new MutationObserver((s) => {
      for (const r of s)
        this._setAttr(r.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (s) => {
      const { props: r, styles: o } = s, i = !P(r), l = r ? i ? Object.keys(r) : r : [];
      let u;
      if (i)
        for (const a in this._props) {
          const d = r[a];
          (d === Number || d && d.type === Number) && (this._props[a] = ln(this._props[a]), (u || (u = /* @__PURE__ */ Object.create(null)))[a] = !0);
        }
      this._numberProps = u;
      for (const a of Object.keys(this))
        a[0] !== "_" && this._setProp(a, this[a], !0, !1);
      for (const a of l.map(Ye))
        Object.defineProperty(this, a, {
          get() {
            return this._getProp(a);
          },
          set(d) {
            this._setProp(a, d);
          }
        });
      this._applyStyles(o), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then(t) : t(this._def);
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    this._numberProps && this._numberProps[t] && (n = ln(n)), this._setProp(Ye(t), n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, s = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), s && (n === !0 ? this.setAttribute(Se(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Se(t), n + "") : n || this.removeAttribute(Se(t))));
  }
  _update() {
    or(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = X(this._def, te({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, n.emit = (r, ...o) => {
        this.dispatchEvent(new CustomEvent(r, {
          detail: o
        }));
      };
      let s = this;
      for (; s = s && (s.parentNode || s.host); )
        if (s instanceof vs) {
          n.parent = s._instance;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const s = document.createElement("style");
      s.textContent = n, this.shadowRoot.appendChild(s);
    });
  }
}
const Ue = "transition", At = "animation", Pt = (e, { slots: t }) => ml(Ur, Bl(e), t);
Pt.displayName = "Transition";
const fo = {
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
Pt.props = /* @__PURE__ */ te({}, Ur.props, fo);
const rt = (e, t = []) => {
  P(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Gs = (e) => e ? P(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Bl(e) {
  const t = {};
  for (const E in e)
    E in fo || (t[E] = e[E]);
  if (e.css === !1)
    return t;
  const { name: n = "v", type: s, duration: r, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: u = o, appearActiveClass: a = i, appearToClass: d = l, leaveFromClass: m = `${n}-leave-from`, leaveActiveClass: b = `${n}-leave-active`, leaveToClass: $ = `${n}-leave-to` } = e, H = Dl(r), O = H && H[0], k = H && H[1], { onBeforeEnter: L, onEnter: fe, onEnterCancelled: Z, onLeave: z, onLeaveCancelled: se, onBeforeAppear: Ve = L, onAppear: $e = fe, onAppearCancelled: A = Z } = t, q = (E, W, he) => {
    ot(E, W ? d : l), ot(E, W ? a : i), he && he();
  }, U = (E, W) => {
    E._isLeaving = !1, ot(E, m), ot(E, $), ot(E, b), W && W();
  }, re = (E) => (W, he) => {
    const It = E ? $e : fe, ee = () => q(W, E, he);
    rt(It, [W, ee]), er(() => {
      ot(W, E ? u : o), Ke(W, E ? d : l), Gs(It) || tr(W, s, O, ee);
    });
  };
  return te(t, {
    onBeforeEnter(E) {
      rt(L, [E]), Ke(E, o), Ke(E, i);
    },
    onBeforeAppear(E) {
      rt(Ve, [E]), Ke(E, u), Ke(E, a);
    },
    onEnter: re(!1),
    onAppear: re(!0),
    onLeave(E, W) {
      E._isLeaving = !0;
      const he = () => U(E, W);
      Ke(E, m), Ul(), Ke(E, b), er(() => {
        !E._isLeaving || (ot(E, m), Ke(E, $), Gs(z) || tr(E, s, k, he));
      }), rt(z, [E, he]);
    },
    onEnterCancelled(E) {
      q(E, !1), rt(Z, [E]);
    },
    onAppearCancelled(E) {
      q(E, !0), rt(A, [E]);
    },
    onLeaveCancelled(E) {
      U(E), rt(se, [E]);
    }
  });
}
function Dl(e) {
  if (e == null)
    return null;
  if (K(e))
    return [Ln(e.enter), Ln(e.leave)];
  {
    const t = Ln(e);
    return [t, t];
  }
}
function Ln(e) {
  return ln(e);
}
function Ke(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(t);
}
function ot(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function er(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Vl = 0;
function tr(e, t, n, s) {
  const r = e._endId = ++Vl, o = () => {
    r === e._endId && s();
  };
  if (n)
    return setTimeout(o, n);
  const { type: i, timeout: l, propCount: u } = jl(e, t);
  if (!i)
    return s();
  const a = i + "end";
  let d = 0;
  const m = () => {
    e.removeEventListener(a, b), o();
  }, b = ($) => {
    $.target === e && ++d >= u && m();
  };
  setTimeout(() => {
    d < u && m();
  }, l + 1), e.addEventListener(a, b);
}
function jl(e, t) {
  const n = window.getComputedStyle(e), s = (H) => (n[H] || "").split(", "), r = s(Ue + "Delay"), o = s(Ue + "Duration"), i = nr(r, o), l = s(At + "Delay"), u = s(At + "Duration"), a = nr(l, u);
  let d = null, m = 0, b = 0;
  t === Ue ? i > 0 && (d = Ue, m = i, b = o.length) : t === At ? a > 0 && (d = At, m = a, b = u.length) : (m = Math.max(i, a), d = m > 0 ? i > a ? Ue : At : null, b = d ? d === Ue ? o.length : u.length : 0);
  const $ = d === Ue && /\b(transform|all)(,|$)/.test(n[Ue + "Property"]);
  return {
    type: d,
    timeout: m,
    propCount: b,
    hasTransform: $
  };
}
function nr(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => sr(n) + sr(e[s])));
}
function sr(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ul() {
  return document.body.offsetHeight;
}
const Kl = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Lt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Lt(e, !0), s.enter(e)) : s.leave(e, () => {
      Lt(e, !1);
    }) : Lt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Lt(e, t);
  }
};
function Lt(e, t) {
  e.style.display = t ? e._vod : "none";
}
const zl = /* @__PURE__ */ te({ patchProp: Sl }, bl);
let rr;
function Wl() {
  return rr || (rr = Gi(zl));
}
const or = (...e) => {
  Wl().render(...e);
};
function Cs(e) {
  Object.keys(e).forEach((t) => {
    xt.prototype[t] = e[t];
  });
}
function Fn(e) {
  let t;
  const n = (o) => {
    t = o;
  };
  return { moduleFunc: (o) => (e({ player: o, onModuleDispose: n }), o), dispose: () => {
    t && t();
  } };
}
function Zl() {
  const e = (n) => ({
    h: Math.floor(n / 3600),
    m: Math.floor(n % 3600 / 60),
    s: Math.floor(n % 3600 % 60)
  });
  return { toHMS: e, toHMSStrings: (n) => {
    const { h: s, m: r, s: o } = e(n);
    return {
      h: s < 10 ? `0${s}` : `${s}`,
      m: r < 10 ? `0${r}` : `${r}`,
      s: o < 10 ? `0${o}` : `${o}`
    };
  } };
}
let ql = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function Yl(e = "") {
  return `${e}${e ? "-" : ""}${ql(10)}`;
}
class Ql {
  constructor(t) {
    tt(this, "_hooks", /* @__PURE__ */ new Set());
    tt(this, "_player");
    this._player = t;
  }
  get hooks() {
    return this._hooks;
  }
  dispatch(t) {
    this._hooks.add(t);
  }
  clear() {
    this._hooks.clear();
  }
}
var Ut = /* @__PURE__ */ ((e) => (e.CREATED = "created", e.BEFORE_DISPOSED = "beforeDisposed", e))(Ut || {});
const Jl = (e) => (t, n) => {
  t._hooks[e].dispatch(n);
}, Xl = Fn(({ player: e }) => {
  const t = {};
  Object.values(Ut).forEach((n) => {
    t[n] = new Ql(e);
  }), Cs({
    _hooks: t,
    _triggerHook: (n) => {
      t[n].hooks.forEach((s) => {
        s(e);
      });
    },
    _clearHook(n) {
      t[n].hooks.clear();
    },
    _clearHooks: () => {
      Object.values(Ut).forEach((n) => {
        t[n].hooks.clear();
      });
    }
  });
}), Gl = Jl("beforeDisposed");
var ir;
const Zt = typeof window < "u", ec = (e) => typeof e == "string", Hn = () => {
};
Zt && ((ir = window == null ? void 0 : window.navigator) == null ? void 0 : ir.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function tc(e) {
  return typeof e == "function" ? e() : Je(e);
}
function nc(e) {
  return e;
}
function sc(e) {
  return Mo() ? (Ao(e), !0) : !1;
}
function rc(e) {
  var t;
  const n = tc(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const oc = Zt ? window : void 0;
Zt && window.document;
Zt && window.navigator;
Zt && window.location;
function Tt(...e) {
  let t, n, s, r;
  if (ec(e[0]) ? ([n, s, r] = e, t = oc) : [t, n, s, r] = e, !t)
    return Hn;
  let o = Hn;
  const i = yt(() => rc(t), (u) => {
    o(), u && (u.addEventListener(n, s, r), o = () => {
      u.removeEventListener(n, s, r), o = Hn;
    });
  }, { immediate: !0, flush: "post" }), l = () => {
    i(), o();
  };
  return sc(l), l;
}
const Yn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Qn = "__vueuse_ssr_handlers__";
Yn[Qn] = Yn[Qn] || {};
Yn[Qn];
function ic(e) {
  const t = Re(!1);
  return Tt(e, "mouseenter", () => t.value = !0), Tt(e, "mouseleave", () => t.value = !1), t;
}
var lr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(lr || (lr = {}));
var lc = Object.defineProperty, cr = Object.getOwnPropertySymbols, cc = Object.prototype.hasOwnProperty, uc = Object.prototype.propertyIsEnumerable, ur = (e, t, n) => t in e ? lc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, fc = (e, t) => {
  for (var n in t || (t = {}))
    cc.call(t, n) && ur(e, n, t[n]);
  if (cr)
    for (var n of cr(t))
      uc.call(t, n) && ur(e, n, t[n]);
  return e;
};
const ac = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
fc({
  linear: nc
}, ac);
function dc(e) {
  const t = Po(), n = Re(!0), s = ic(e.$containerEl), r = (o = !n) => {
    n.value = o;
  };
  return t.run(() => {
    yt(s, () => {
      if (e.$el.paused)
        return r(!0);
      r(s.value);
    }), Tt(e.$el, "pause", () => r(!0));
  }), Gl(e, () => t.stop()), { isControlVisible: n };
}
const hc = Fn(({ player: e }) => {
  const t = /* @__PURE__ */ new Map();
  Cs({
    on(n, s) {
      return Array.isArray(n) || (n = [n]), n.forEach((r) => {
        t.set(s, Tt(e.$el, r, s));
      }), e;
    },
    once(n, s) {
      const r = (o) => (e.off(n, r), s(o));
      return e.on(n, r);
    },
    off(n, s) {
      return Array.isArray(n) || (n = [n]), n.forEach(() => {
        var r;
        (r = t.get(s)) == null || r(), t.delete(s);
      }), e;
    },
    offAll() {
      t.forEach((n) => n()), t.clear();
    }
  });
});
var _e = /* @__PURE__ */ ((e) => (e.Created = "created", e.TimeUpdate = "timeupdate", e.LoadStart = "loadstart", e.Play = "play", e.Ended = "ended", e.Pause = "pause", e.Playing = "playing", e.DurationChange = "durationchange", e.VolumeChange = "volumechange", e.FullscreenChange = "fullscreenchange", e.MozFullscreenChange = "mozfullscreenchange", e.WebKitFullscreenChange = "webkitfullscreenchange", e))(_e || {});
const pc = [
  "fullscreenchange",
  "mozfullscreenchange",
  "webkitfullscreenchange"
], gc = Fn(({ player: e, onModuleDispose: t }) => {
  const n = new Array();
  pc.forEach((s) => {
    const r = Tt(e.$containerEl, s, () => {
      e.isFullscreen.value = !e.isFullscreen.value;
    });
    n.push(r);
  }), Cs({
    isFullscreen: Re(!1),
    toFullScreen() {
      (e.$containerEl.requestFullscreen || e.$containerEl.mozRequestFullScreen || e.$containerEl.webkitRequestFullscreen || e.$containerEl.msRequestFullscreen).call(e.$containerEl);
    },
    fromFullScreen() {
      (document.exitFullscreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.msExitFullscreen).call(document);
    }
  }), t(() => n.forEach((s) => s()));
});
function qt(e) {
  const t = new Array(), n = (s, r) => {
    const o = zt(e.$el);
    return ui((i, l) => {
      let u = o[s];
      const a = () => {
        u = o[s], l();
      };
      return r.forEach((d) => {
        t.push(Tt(o, d, a));
      }), {
        get() {
          return i(), u;
        },
        set(d) {
          o[s] = d;
        }
      };
    });
  };
  return { ...e.reactive, createReactive: n, cleanupListenerFns: t };
}
const _c = Fn(({ player: e, onModuleDispose: t }) => {
  const { createReactive: n, cleanupListenerFns: s } = qt(e), r = n("currentTime", [_e.TimeUpdate]), o = n("duration", [_e.DurationChange]), i = n("ended", [_e.Ended]), l = n("volume", [_e.VolumeChange]), u = n("muted", [_e.VolumeChange]), a = n("paused", [_e.Pause, _e.Playing]), d = n("played", [_e.Pause, _e.Playing]);
  e.reactive = {
    media: zt(e.$el),
    currentTime: r,
    duration: o,
    volume: l,
    muted: u,
    paused: a,
    played: d,
    ended: i
  }, t(() => s.forEach((m) => m()));
}), We = class {
  constructor(t, n) {
    tt(this, "id");
    tt(this, "$el");
    tt(this, "$containerEl");
    this.id = Yl("player"), this.$el = t, this.$containerEl = n, We.modules_.forEach((s) => s.moduleFunc(this)), this._triggerHook(Ut.CREATED);
  }
  static installModule(t) {
    !!t && We.modules_.indexOf(t) < 0 && We.modules_.push(t);
  }
  static use(t) {
    return t.forEach((n) => We.installModule(n)), We;
  }
  dispose() {
    We.modules_.forEach((t) => t.dispose()), this._triggerHook(Ut.BEFORE_DISPOSED), this._clearHooks();
  }
  togglePlay() {
    this.$el.paused || this.$el.ended ? this.$el.play() : this.$el.pause();
  }
};
let xt = We;
tt(xt, "modules_", []);
xt.use([hc, _c, gc, Xl]);
const mc = ["id", "src"], vc = { class: "lpr__container" }, Cc = /* @__PURE__ */ de({
  __name: "VideoPlayer",
  props: {
    src: { default: "" }
  },
  emits: [_e.Created],
  setup(e, { emit: t }) {
    const n = Re(), s = Re(), r = Re(), o = Re(!0);
    wn(() => {
      if (!s.value || !r.value)
        return;
      const l = new xt(s.value, r.value);
      n.value = l, Dr("player", l), t(_e.Created, l);
      const { isControlVisible: u } = dc(l);
      yt(u, (a) => {
        o.value = a;
      });
    }), hs(() => {
      var l;
      (l = n.value) == null || l.dispose();
    });
    const i = () => {
      !n.value || n.value.togglePlay();
    };
    return (l, u) => {
      var a;
      return Q(), ve("div", {
        ref_key: "containerRef",
        ref: r,
        class: hn([{ "lpr--fullscreen": (a = n.value) == null ? void 0 : a.isFullscreen }, "lpr"])
      }, [
        G("video", io({
          id: n.value && n.value.id,
          ref_key: "mediaRef",
          ref: s,
          src: e.src,
          class: "lpr__video"
        }, l.$attrs, { onClick: i }), null, 16, mc),
        Ni(G("div", vc, [
          Bi(l.$slots, "default")
        ], 512), [
          [Kl, o.value]
        ])
      ], 2);
    };
  }
}), bc = `:host{--lpr-player-border-radius: 16px;--lpr-player-padding: min(3.33%, 32px)}*{font-size:0;box-sizing:border-box}.lpr{position:relative;overflow:hidden;box-sizing:border-box;width:100%;height:100%;margin:0;padding:0;border:0 solid transparent;border-radius:var(--lpr-player-border-radius)}.lpr.lpr--fullscreen{border-radius:0}.lpr.lpr--fullscreen .lpr__video{object-fit:contain}.lpr__video{font-size:0;width:100%;height:100%;margin:0;padding:0;object-fit:cover}.lpr__container{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;align-items:center;box-sizing:border-box;padding:var(--lpr-player-padding);pointer-events:none;gap:14px;grid-template-areas:". . . . ." "play volume time . fullscreen" "timeline timeline timeline timeline timeline";grid-template-columns:auto auto auto 1fr auto;grid-template-rows:1fr auto auto}.lpr video::-webkit-media-controls-overlay-enclosure{display:none!important}.lpr video::-webkit-media-controls-enclosure{display:none!important}.lpr video::-webkit-media-controls{display:none!important}.v-enter-active,.v-leave-active{transition:all .4s ease-out}.v-enter-from,.v-leave-to{transform:translateY(50px);opacity:0}
`, pt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, yc = /* @__PURE__ */ pt(Cc, [["styles", [bc]]]), wc = ["fill", "height", "width"], xc = /* @__PURE__ */ G("path", {
  "clip-rule": "evenodd",
  d: "M11.306 0.00565815C12.6494 -0.0610802 13.9211 0.470631 15.1762 1.17438C16.4324 1.87865 17.9584 2.92779 19.853 4.23034L19.93 4.28328L37.1854 16.1463L37.2573 16.1958C38.7492 17.2215 39.9703 18.061 40.8785 18.8144C41.8057 19.5838 42.6005 20.4155 43.0401 21.4933C43.6959 23.1002 43.6959 24.8999 43.0401 26.5066C42.6005 27.5844 41.8057 28.4161 40.8785 29.1855C39.9703 29.9391 38.7492 30.7785 37.2573 31.8042L37.1854 31.8536L19.93 43.7167L19.853 43.7695L19.8528 43.7698C17.9583 45.0722 16.4324 46.1213 15.1762 46.8256C13.9211 47.5294 12.6494 48.061 11.306 47.9944C9.35505 47.8974 7.5459 46.9458 6.36078 45.3929C5.54474 44.3238 5.26242 42.9745 5.13123 41.5415C4.99995 40.1076 4.99998 38.2558 5 35.9568V35.9566V35.863V12.1369V12.0432V12.043C4.99998 9.74407 4.99995 7.89234 5.13123 6.45833C5.26242 5.02534 5.54474 3.67617 6.36078 2.60701C7.5459 1.05424 9.35505 0.102581 11.306 0.00565815Z",
  "fill-rule": "evenodd"
}, null, -1), Ec = [
  xc
], ao = /* @__PURE__ */ de({
  __name: "PlayIcon",
  props: {
    width: { default: 48 },
    height: { default: 48 },
    color: { default: "#FFFFFF" }
  },
  setup(e) {
    return (t, n) => (Q(), ve("svg", {
      fill: e.color,
      height: e.height,
      width: e.width,
      viewBox: "0 0 48 48",
      xmlns: "http://www.w3.org/2000/svg"
    }, Ec, 8, wc));
  }
}), Fc = ["src"], Tc = /* @__PURE__ */ de({
  __name: "Poster",
  props: {
    src: { default: "" }
  },
  setup(e) {
    const t = Ne("player"), n = Re(!0);
    wn(() => {
      t.once(_e.Playing, () => s(!1));
    });
    const s = (o = !n.value) => {
      n.value = o;
    }, r = () => {
      !t || t.$el.play();
    };
    return (o, i) => (Q(), Be(Pt, null, {
      default: Wt(() => [
        n.value ? (Q(), ve("div", {
          key: 0,
          class: "lpr-poster__container",
          onClick: r
        }, [
          G("img", {
            src: e.src,
            alt: "lpr-poster",
            class: "lpr-poster"
          }, null, 8, Fc),
          X(ao, {
            class: "lpr-poster__icon",
            color: "#fff",
            height: "56",
            width: "56"
          })
        ])) : ll("", !0)
      ]),
      _: 1
    }));
  }
}), $c = `:host{--lpr-poster-background: #0a0a0a;--lpr-poster-brightness: 60%}.lpr-poster{filter:brightness(var(--lpr-poster-brightness));height:100%;object-fit:cover;width:100%}.lpr-poster__container{background:var(--lpr-poster-background);cursor:pointer;height:100%;left:0;pointer-events:all;position:absolute;top:0;transition:all ease-in-out .4s;width:100%;z-index:2}.lpr-poster__container:hover{transform:scale(1.05);transition:all ease-in-out .4s}.lpr-poster__icon{left:50%;opacity:.85;position:absolute;top:50%;transform:translate(-50%,-50%);transition:all ease-in-out .4s;z-index:3}.lpr-poster__icon:hover{opacity:1;transition:all ease-in-out .4s}.v-enter-active,.v-leave-active{transition:opacity .5s ease}.v-enter-from,.v-leave-to{opacity:0}
`, Oc = /* @__PURE__ */ pt(Tc, [["styles", [$c]]]), Pc = { class: "lpr-timeline__container" }, Ic = /* @__PURE__ */ de({
  __name: "TimeLine",
  setup(e) {
    const t = Ne("player"), { currentTime: n, duration: s } = qt(t), r = wt(() => `${n.value / s.value * 100}%`), o = (i) => {
      const { clientX: l, target: u } = i, { left: a, width: d } = u.getBoundingClientRect();
      n.value = s.value * ((l - a) / d);
    };
    return (i, l) => (Q(), ve("div", Pc, [
      G("div", {
        class: "lpr-timeline",
        onClick: o
      }),
      G("div", {
        style: Kt({ width: Je(r) }),
        class: "lpr-timeline__progress"
      }, null, 4)
    ]));
  }
}), Mc = `:host{grid-area:timeline;--timeline-border-radius: 12px;--timeline-color: rgba(255, 255, 255, 80%);--timeline-height: 6px;--timeline-progress-color: #00b9ae}.lpr-timeline__container{position:relative;display:block;height:var(--timeline-height)}.lpr-timeline,.lpr-timeline__progress{position:absolute;top:0;right:0;bottom:0;left:0;height:var(--timeline-height);border:0 solid transparent;border-radius:var(--timeline-border-radius)}.lpr-timeline{cursor:pointer;pointer-events:all;opacity:.7;background-color:var(--timeline-color)}.lpr-timeline__progress{overflow:visible;width:0;resize:horizontal;pointer-events:none;background-color:var(--timeline-progress-color)}
`, Ac = /* @__PURE__ */ pt(Ic, [["styles", [Mc]]]), Lc = { class: "lpr-time" }, Hc = /* @__PURE__ */ de({
  __name: "Time",
  setup(e) {
    const t = Ne("player"), { toHMSStrings: n } = Zl(), { currentTime: s, duration: r } = qt(t), o = wt(() => r.value < 3600), i = wt(() => {
      const { h: u, m: a, s: d } = n(s.value);
      return o ? `${a}:${d}` : `${u}:${a}:${d}`;
    }), l = wt(() => {
      const { h: u, m: a, s: d } = n(r.value);
      return o ? `${a}:${d}` : `${u}:${a}:${d}`;
    });
    return (u, a) => (Q(), ve("div", Lc, Fs(Je(i)) + " / " + Fs(Je(l)), 1));
  }
}), Rc = `:host{grid-area:time}.lpr-time{font-size:18px;font-weight:600;color:#fff}
`, Sc = /* @__PURE__ */ pt(Hc, [["styles", [Rc]]]), Nc = ["fill", "height", "width"], kc = /* @__PURE__ */ G("path", {
  "clip-rule": "evenodd",
  d: "M10.3173 1.51051e-06H10.2462H9.75385H9.68268H9.68261H9.68256C8.70941 -3.04895e-05 7.86991 -5.51481e-05 7.17841 0.0564421C6.44854 0.116073 5.72261 0.247733 5.02405 0.603662C3.98193 1.13465 3.13465 1.98193 2.60366 3.02405C2.24773 3.72261 2.11607 4.44854 2.05644 5.17841C1.99994 5.86991 1.99997 6.70941 2 7.68256V7.68261V7.68266V7.75385V40.2462V40.3173V40.3175C1.99997 41.2906 1.99994 42.1302 2.05644 42.8217C2.11607 43.5515 2.24773 44.2774 2.60366 44.976C3.13465 46.018 3.98193 46.8655 5.02405 47.3964C5.72261 47.7524 6.44854 47.8838 7.17841 47.9436C7.86986 48 8.70934 48 9.68241 48H9.68266H9.75385H10.2462H10.3174H10.3176C11.2907 48 12.1301 48 12.8216 47.9436C13.5515 47.8838 14.2774 47.7524 14.976 47.3964C16.0181 46.8655 16.8654 46.018 17.3964 44.976C17.7523 44.2774 17.8839 43.5515 17.9436 42.8217C18.0001 42.13 18 41.2906 18 40.3173V40.2462V7.75385V7.68268C18 6.70949 18.0001 5.86993 17.9436 5.17841C17.8839 4.44854 17.7523 3.72261 17.3964 3.02405C16.8654 1.98193 16.0181 1.13465 14.976 0.603662C14.2774 0.247733 13.5515 0.116073 12.8216 0.0564421C12.1301 -5.51481e-05 11.2906 -3.04895e-05 10.3174 1.51051e-06H10.3174H10.3173ZM37.3942 1.51051e-06H37.3231H36.8308H36.7596H36.7594C35.7863 -3.04895e-05 34.9467 -5.51481e-05 34.2553 0.0564421C33.5254 0.116073 32.7995 0.247733 32.1009 0.603662C31.059 1.13465 30.2117 1.98193 29.6805 3.02405C29.3246 3.72261 29.1931 4.44854 29.1333 5.17841C29.0769 5.86991 29.0769 6.70944 29.0769 7.68261V7.68266V7.75385V40.2462V40.3173C29.0769 41.2906 29.0769 42.1302 29.1333 42.8217C29.1931 43.5515 29.3246 44.2774 29.6805 44.976C30.2117 46.018 31.059 46.8655 32.1009 47.3964C32.7995 47.7524 33.5254 47.8838 34.2553 47.9436C34.9467 48 35.7863 48 36.7594 48H36.7596H36.8308H37.3231H37.3942H37.3945C38.3675 48 39.2071 48 39.8986 47.9436C40.6284 47.8838 41.3543 47.7524 42.0529 47.3964C43.0949 46.8655 43.9424 46.018 44.4734 44.976C44.8293 44.2774 44.9607 43.5515 45.0206 42.8217C45.0769 42.13 45.0769 41.2906 45.0769 40.3173V40.2462V7.75385V7.68268C45.0769 6.70949 45.0769 5.86993 45.0206 5.17841C44.9607 4.44854 44.8293 3.72261 44.4734 3.02405C43.9424 1.98193 43.0949 1.13465 42.0529 0.603662C41.3543 0.247733 40.6284 0.116073 39.8986 0.0564421C39.2071 -5.51481e-05 38.3675 -3.04895e-05 37.3945 1.51051e-06H37.3942Z",
  "fill-rule": "evenodd"
}, null, -1), Bc = [
  kc
], Dc = /* @__PURE__ */ de({
  __name: "PauseIcon",
  props: {
    width: { default: 48 },
    height: { default: 48 },
    color: { default: "#FFFFFF" }
  },
  setup(e) {
    return (t, n) => (Q(), ve("svg", {
      fill: e.color,
      height: e.height,
      width: e.width,
      viewBox: "0 0 48 48",
      xmlns: "http://www.w3.org/2000/svg"
    }, Bc, 8, Nc));
  }
}), Vc = /* @__PURE__ */ de({
  __name: "PlayControl",
  setup(e) {
    const t = Ne("player"), { paused: n, ended: s } = qt(t), r = () => {
      !t || (n.value || s.value ? t.$el.play() : t.$el.pause());
    };
    return (o, i) => (Q(), ve("div", {
      class: "lpr-play",
      onClick: r
    }, [
      X(Pt, null, {
        default: Wt(() => [
          Je(n) ? (Q(), Be(ao, {
            key: 0,
            class: "lpr-play__icon",
            color: "#fff",
            height: "22",
            width: "22"
          })) : (Q(), Be(Dc, {
            key: 1,
            class: "lpr-play__icon",
            color: "#fff",
            height: "22",
            width: "22"
          }))
        ]),
        _: 1
      })
    ]));
  }
}), jc = `:host{grid-area:play}.lpr-play{position:relative;display:inline-block;width:22px;height:22px;cursor:pointer;pointer-events:all}.lpr-play__icon{position:absolute}.v-enter-active,.v-leave-active{transition:all .25s ease-out}.v-enter-from{transform:translateY(-30px);opacity:0}.v-leave-to{transform:translateY(30px);opacity:0}
`, Uc = /* @__PURE__ */ pt(Vc, [["styles", [jc]]]), Kc = ["fill", "height", "width"], zc = /* @__PURE__ */ G("path", {
  "clip-rule": "evenodd",
  d: "M5.0025 31.0221C4.92944 29.9497 4.07482 29 2.99995 29C1.86479 29 0.924696 29.8673 0.999954 31C0.999954 44 6.18358 49.0044 19 49C20.1327 49.0753 21 48.1352 21 47C21 45.9251 20.0724 45.0731 19 45C16.9274 44.8588 14.9975 44.8328 13.5 44.5C10.7878 43.8972 9.0679 43.0679 8 42C6.9321 40.9321 6.10278 39.2123 5.5 36.5C5.1672 35.0025 5.14369 33.0947 5.0025 31.0221ZM45 31C45.0731 29.9276 45.9251 29 47 29C48.1352 29 49.0469 29.9507 48.9717 31.0833C49 44 44.1212 48.9956 31.0118 48.9956C29.8791 49.0709 28.9284 48.1591 28.9284 47.0239C28.9284 45.9491 29.7779 45.0705 30.8503 44.9975C32.9229 44.8563 35.0025 44.8328 36.5 44.5C39.2123 43.8972 40.9321 43.0679 42 42C43.0679 40.9321 43.8972 39.2123 44.5 36.5C44.8328 35.0025 44.8588 33.0726 45 31ZM49 25.1777C49 25.1471 49 25.1165 49 25.0859C49 25.0552 49 25.0246 49 24.994V25.1777ZM49 19C49.0753 20.1327 48.1352 21 47 21C45.9251 21 45.0731 20.0724 45 19C44.8588 16.9274 44.8328 15.4975 44.5 14C43.8972 11.2877 43.0679 9.0679 42 8C40.9321 6.93211 38.7123 6.10277 36 5.5C34.5025 5.1672 33.0726 5.14119 31 5C29.9276 4.92695 29 4.07487 29 3C29 1.86484 29.8673 0.924743 31 1C44 1 49 6 49 19ZM5.00001 19C4.92695 20.0723 4.07488 20.9999 3.00001 20.9999C1.86485 20.9999 0.929098 20.1208 1.00436 18.9882C1.00436 5.87876 5.89065 0.823767 19 0.999919C20.1327 0.92466 21 1.86476 21 2.99992C21 4.07479 20.0724 4.92691 19 4.99996C16.9274 5.14115 14.9975 5.16716 13.5 5.49996C10.7878 6.10273 9.0679 6.93207 8.00001 7.99996C6.93211 9.06786 6.10278 11.2877 5.50001 14C5.16721 15.4974 5.1412 16.9273 5.00001 19ZM24.9141 0.99996L24.952 0.999965H24.8762L24.9141 0.99996Z",
  "fill-rule": "evenodd"
}, null, -1), Wc = [
  zc
], Zc = /* @__PURE__ */ de({
  __name: "FullscreenIcon",
  props: {
    width: { default: 48 },
    height: { default: 48 },
    color: { default: "#FFFFFF" }
  },
  setup(e) {
    return (t, n) => (Q(), ve("svg", {
      fill: e.color,
      height: e.height,
      width: e.width,
      viewBox: "0 0 48 48",
      xmlns: "http://www.w3.org/2000/svg"
    }, Wc, 8, Kc));
  }
}), qc = ["fill", "height", "width"], Yc = /* @__PURE__ */ G("g", { "clip-path": "url(#clip0_18_214)" }, [
  /* @__PURE__ */ G("path", {
    "clip-rule": "evenodd",
    d: "M19.1538 43C18.1342 43 17.3077 42.1734 17.3077 41.1539V33.3033L3.15158 47.4593C2.43062 48.1802 1.26169 48.1802 0.540726 47.4593C-0.180242 46.7383 -0.180242 45.5695 0.540726 44.8485L14.6968 30.6923H6.84614C5.82654 30.6923 4.99998 29.8657 4.99998 28.8462C4.99998 27.8266 5.82654 27 6.84614 27H19.1538H21V28.8462V41.1539C21 42.1734 20.1734 43 19.1538 43ZM47.4593 3.15158C48.1802 2.43062 48.1802 1.26169 47.4593 0.540726C46.7383 -0.180242 45.5695 -0.180242 44.8485 0.540726L30.6923 14.6968V6.84614C30.6923 5.82654 29.8657 4.99998 28.8462 4.99998C27.8266 4.99998 27 5.82654 27 6.84614V19.1538V21H28.8462H41.1539C42.1734 21 43 20.1734 43 19.1538C43 18.1342 42.1734 17.3077 41.1539 17.3077H33.3033L47.4593 3.15158Z",
    "fill-rule": "evenodd"
  })
], -1), Qc = /* @__PURE__ */ G("defs", null, [
  /* @__PURE__ */ G("clipPath", { id: "clip0_18_214" }, [
    /* @__PURE__ */ G("rect", {
      height: "48",
      width: "48"
    })
  ])
], -1), Jc = [
  Yc,
  Qc
], Xc = /* @__PURE__ */ de({
  __name: "ExitFullscreenIcon",
  props: {
    width: { default: 48 },
    height: { default: 48 },
    color: { default: "#FFFFFF" }
  },
  setup(e) {
    return (t, n) => (Q(), ve("svg", {
      fill: e.color,
      height: e.height,
      width: e.width,
      viewBox: "0 0 48 48",
      xmlns: "http://www.w3.org/2000/svg"
    }, Jc, 8, qc));
  }
}), Gc = /* @__PURE__ */ de({
  __name: "FullscreenControl",
  setup(e) {
    const t = Re(Ne("player")), n = () => {
      !t || (t.value.isFullscreen ? t.value.fromFullScreen() : t.value.toFullScreen());
    };
    return (s, r) => (Q(), ve("div", {
      class: "lpr-fullscreen",
      onClick: n
    }, [
      X(Pt, null, {
        default: Wt(() => {
          var o;
          return [
            (o = t.value) != null && o.isFullscreen ? (Q(), Be(Xc, {
              key: 1,
              class: "lpr-fullscreen__icon",
              color: "#fff",
              height: "22px",
              width: "22px"
            })) : (Q(), Be(Zc, {
              key: 0,
              class: "lpr-fullscreen__icon",
              color: "#fff",
              height: "22px",
              width: "22px"
            }))
          ];
        }),
        _: 1
      })
    ]));
  }
}), eu = `:host{grid-area:fullscreen}.lpr-fullscreen{position:relative;display:inline-block;align-self:flex-end;width:22px;height:22px;cursor:pointer;pointer-events:all}.lpr-fullscreen__icon{position:absolute;transition:all .25s ease-in}.lpr-fullscreen__icon:hover{transition:all .25s ease-in;transform:scale(1.2)}.v-enter-active,.v-leave-active{transition:all .25s ease-out}.v-enter-from{transform:scale(0);opacity:0}.v-leave-to{transform:scale(1);opacity:0}
`, tu = /* @__PURE__ */ pt(Gc, [["styles", [eu]]]), nu = ["fill", "height", "width"], su = /* @__PURE__ */ oo('<g clip-path="url(#clip0_19_95)"><path clip-rule="evenodd" d="M25.6366 8.28592C25.6366 7.85826 25.1667 7.59695 24.8034 7.82248L22.4848 9.26159L25.6366 12.4132V8.28592ZM23.0776 5.04184C25.6209 3.46312 28.9094 5.29231 28.9094 8.28592V20.3143L17.2524 8.65744L23.0776 5.04184ZM13.377 11.0628L28.9094 26.5951V39.7144C28.9094 42.708 25.6209 44.5371 23.0776 42.9585L6.72002 32.8054C0.18903 28.7518 0.189029 19.2485 6.72002 15.1948L13.377 11.0628ZM12.8979 15.2121L8.44593 17.9754C3.97737 20.749 3.97737 27.2512 8.44593 30.0249L24.8034 40.1778C25.1667 40.4034 25.6366 40.142 25.6366 39.7144V27.9506L12.8979 15.2121Z" fill-rule="evenodd"></path><path d="M23.9405 41.5677L7.58296 31.4149C2.08319 28.0012 2.08319 19.9985 7.58296 16.5848L13.1375 13.1372L27.273 27.2727V39.7141C27.273 41.4246 25.3938 42.4699 23.9405 41.5677Z"></path><path clip-rule="evenodd" d="M1.02469 1.02469C1.66373 0.38565 2.69982 0.38565 3.33886 1.02469L46.9752 44.6611C47.6142 45.3002 47.6142 46.3361 46.9752 46.9752C46.3361 47.6142 45.3002 47.6142 44.6611 46.9752L1.02469 3.33886C0.38565 2.69982 0.38565 1.66373 1.02469 1.02469Z" fill-rule="evenodd"></path><path d="M23.9405 6.43223L19.8687 8.95958L27.273 16.3638V8.28599C27.273 6.57536 25.394 5.53011 23.9405 6.43223Z"></path></g><defs><clipPath id="clip0_19_95"><rect fill="white" height="48" width="48"></rect></clipPath></defs>', 2), ru = [
  su
], ou = /* @__PURE__ */ de({
  __name: "SoundOffIcon",
  props: {
    width: { default: 48 },
    height: { default: 48 },
    color: { default: "#FFFFFF" }
  },
  setup(e) {
    return (t, n) => (Q(), ve("svg", {
      fill: e.color,
      height: e.height,
      width: e.width,
      viewBox: "0 0 48 48",
      xmlns: "http://www.w3.org/2000/svg"
    }, ru, 8, nu));
  }
}), iu = ["fill", "height", "width"], lu = /* @__PURE__ */ oo('<g clip-path="url(#clip0_18_204)"><path clip-rule="evenodd" d="M37.8837 13.6648C36.8899 13.2329 36.2081 13.1111 36 13.1111V10C36.8354 10 37.9797 10.3109 39.1379 10.8143C40.3432 11.338 41.7183 12.1366 43.0216 13.2526C45.6499 15.5029 48 19.065 48 24.1753C48 29.2922 45.643 32.7767 42.9953 34.9447C41.6853 36.0174 40.3056 36.7692 39.1004 37.2562C37.9344 37.7273 36.8074 38 36 38V34.8889C36.236 34.8889 36.9352 34.7727 37.9215 34.3743C38.8683 33.9916 39.9669 33.3935 41.0047 32.5435C43.0527 30.8666 44.8696 28.2164 44.8696 24.1753C44.8696 20.1275 43.0458 17.3797 40.9784 15.6097C39.9339 14.7154 38.8307 14.0763 37.8837 13.6648Z" fill-rule="evenodd"></path><path d="M41 24C41 19 36 17 36 17V31C36 31 41 29 41 24Z" fill="white"></path><path clip-rule="evenodd" d="M33.6599 4.22847C33.6599 0.912593 30.0125 -1.10896 27.2006 0.64846L5.38572 14.2828C-1.79524 18.7709 -1.79524 29.229 5.38572 33.7173L27.2006 47.3515C30.0125 49.109 33.6599 47.0874 33.6599 43.7715V4.22847Z" fill-rule="evenodd"></path></g><defs><clipPath id="clip0_18_204"><rect height="48" width="48"></rect></clipPath></defs>', 2), cu = [
  lu
], uu = /* @__PURE__ */ de({
  __name: "SoundIcon",
  props: {
    width: { default: 48 },
    height: { default: 48 },
    color: { default: "#FFFFFF" }
  },
  setup(e) {
    return (t, n) => (Q(), ve("svg", {
      fill: e.color,
      height: e.height,
      width: e.width,
      viewBox: "0 0 48 48",
      xmlns: "http://www.w3.org/2000/svg"
    }, cu, 8, iu));
  }
}), fu = { class: "lpr-volume" }, au = /* @__PURE__ */ G("div", { class: "lpr-volume__level" }, null, -1), du = /* @__PURE__ */ de({
  __name: "VolumeControl",
  setup(e) {
    const t = Ne("player"), { volume: n, muted: s } = qt(t), r = wt(() => `${n.value * 100}%`), o = () => {
      !t || (s.value = !s.value);
    }, i = (l) => {
      const { clientX: u, target: a } = l, { left: d, width: m } = a.getBoundingClientRect();
      n.value = (u - d) / m, s.value && o();
    };
    return (l, u) => (Q(), ve("div", fu, [
      G("div", {
        class: "lpr-volume__button",
        onClick: o
      }, [
        X(Pt, null, {
          default: Wt(() => [
            Je(s) ? (Q(), Be(ou, {
              key: 1,
              class: "lpr-volume__icon",
              color: "#fff",
              height: "22",
              width: "22"
            })) : (Q(), Be(uu, {
              key: 0,
              class: "lpr-volume__icon",
              color: "#fff",
              height: "22",
              width: "22"
            }))
          ]),
          _: 1
        })
      ]),
      G("div", {
        class: "lpr-volume__level-container",
        onClick: i
      }, [
        au,
        G("div", {
          style: Kt({ width: Je(r) }),
          class: "lpr-volume__level-progress"
        }, null, 4)
      ])
    ]));
  }
}), hu = `:host{--volume-border-radius: 12px;--volume-color: rgba(255, 255, 255, 80%);grid-area:volume;--volume-height: 6px;--volume-progress-color: #00b9ae;--volume-width: 80px}.lpr-volume{position:relative;display:flex;align-items:center;width:fit-content;height:22px}.lpr-volume__button,.lpr-volume__level-container{display:flex;align-items:center;cursor:pointer;pointer-events:all}.lpr-volume__button{width:22px;height:100%}.lpr-volume__level-container{overflow:hidden;width:0;height:100%;transition:all 1s ease-out;transform:scale(0);opacity:0}.lpr-volume:hover .lpr-volume__button{box-sizing:content-box;padding-right:7px}.lpr-volume:hover .lpr-volume__level-container,.lpr-volume__level-container:hover{position:relative;box-sizing:content-box;width:var(--volume-width);height:100%;transition:all .3s ease-out;transform:scale(1);opacity:1}.lpr-volume__level{cursor:pointer;pointer-events:all;opacity:.7;background-color:var(--volume-color)}.lpr-volume__level,.lpr-volume__level-progress{position:absolute;top:50%;right:0;bottom:0;left:0;overflow:hidden;height:var(--volume-height);transform:translateY(-50%);border:0 solid transparent;border-radius:var(--volume-border-radius)}.lpr-volume__level-progress{box-sizing:content-box;width:0;pointer-events:none;background-color:var(--volume-progress-color)}.lpr-volume__icon{position:absolute}.v-enter-active,.v-leave-active{transition:all .25s ease-out}.v-enter-from{transform:translateY(-30px);opacity:0}.v-leave-to{transform:translateY(30px);opacity:0}
`, pu = /* @__PURE__ */ pt(du, [["styles", [hu]]]), gu = ht(yc), _u = ht(Oc), mu = ht(Ac), vu = ht(Sc), Cu = ht(Uc), bu = ht(tu), yu = ht(pu);
customElements.define("lpr-player", gu);
customElements.define("lpr-poster", _u);
customElements.define("lpr-timeline", mu);
customElements.define("lpr-time", vu);
customElements.define("lpr-play", Cu);
customElements.define("lpr-fullscreen", bu);
customElements.define("lpr-volume", yu);
