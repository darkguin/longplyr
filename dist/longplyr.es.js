var mo = Object.defineProperty;
var vo = (e, t, n) => t in e ? mo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var nt = (e, t, n) => (vo(e, typeof t != "symbol" ? t + "" : t, n), n);
function Qn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const Co = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", bo = /* @__PURE__ */ Qn(Co);
function ar(e) {
  return !!e || e === "";
}
function zt(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ce(s) ? xo(s) : zt(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else {
    if (ce(e))
      return e;
    if (K(e))
      return e;
  }
}
const yo = /;(?![^(]*\))/g, wo = /:(.+)/;
function xo(e) {
  const t = {};
  return e.split(yo).forEach((n) => {
    if (n) {
      const s = n.split(wo);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function dn(e) {
  let t = "";
  if (ce(e))
    t = e;
  else if (O(e))
    for (let n = 0; n < e.length; n++) {
      const s = dn(e[n]);
      s && (t += s + " ");
    }
  else if (K(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ts = (e) => ce(e) ? e : e == null ? "" : O(e) || K(e) && (e.toString === gr || !M(e.toString)) ? JSON.stringify(e, dr, 2) : String(e), dr = (e, t) => t && t.__v_isRef ? dr(e, t.value) : bt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
} : hr(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : K(t) && !O(t) && !_r(t) ? String(t) : t, k = {}, Ct = [], Te = () => {
}, Eo = () => !1, Fo = /^on[^a-z]/, hn = (e) => Fo.test(e), Jn = (e) => e.startsWith("onUpdate:"), te = Object.assign, Xn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, To = Object.prototype.hasOwnProperty, S = (e, t) => To.call(e, t), O = Array.isArray, bt = (e) => pn(e) === "[object Map]", hr = (e) => pn(e) === "[object Set]", M = (e) => typeof e == "function", ce = (e) => typeof e == "string", Gn = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", pr = (e) => K(e) && M(e.then) && M(e.catch), gr = Object.prototype.toString, pn = (e) => gr.call(e), Po = (e) => pn(e).slice(8, -1), _r = (e) => pn(e) === "[object Object]", es = (e) => ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, tn = /* @__PURE__ */ Qn(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), gn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, $o = /-(\w)/g, Qe = gn((e) => e.replace($o, (t, n) => n ? n.toUpperCase() : "")), Oo = /\B([A-Z])/g, Se = gn((e) => e.replace(Oo, "-$1").toLowerCase()), mr = gn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Pn = gn((e) => e ? `on${mr(e)}` : ""), Dt = (e, t) => !Object.is(e, t), $n = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, rn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, on = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ps;
const Io = () => Ps || (Ps = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let _e;
class vr {
  constructor(t = !1) {
    this.active = !0, this.effects = [], this.cleanups = [], !t && _e && (this.parent = _e, this.index = (_e.scopes || (_e.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = _e;
      try {
        return _e = this, t();
      } finally {
        _e = n;
      }
    }
  }
  on() {
    _e = this;
  }
  off() {
    _e = this.parent;
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
function Mo(e) {
  return new vr(e);
}
function Ao(e, t = _e) {
  t && t.active && t.effects.push(e);
}
function Lo() {
  return _e;
}
function Ho(e) {
  _e && _e.cleanups.push(e);
}
const ts = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Cr = (e) => (e.w & Je) > 0, br = (e) => (e.n & Je) > 0, Ro = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Je;
}, So = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      Cr(r) && !br(r) ? r.delete(e) : t[n++] = r, r.w &= ~Je, r.n &= ~Je;
    }
    t.length = n;
  }
}, Hn = /* @__PURE__ */ new WeakMap();
let Rt = 0, Je = 1;
const Rn = 30;
let Ee;
const dt = Symbol(""), Sn = Symbol("");
class ns {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ao(this, s);
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
      return this.parent = Ee, Ee = this, Ze = !0, Je = 1 << ++Rt, Rt <= Rn ? Ro(this) : $s(this), this.fn();
    } finally {
      Rt <= Rn && So(this), Je = 1 << --Rt, Ee = this.parent, Ze = n, this.parent = void 0, this.deferStop && this.stop();
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
const yr = [];
function $t() {
  yr.push(Ze), Ze = !1;
}
function Ot() {
  const e = yr.pop();
  Ze = e === void 0 ? !0 : e;
}
function me(e, t, n) {
  if (Ze && Ee) {
    let s = Hn.get(e);
    s || Hn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = ts()), wr(r);
  }
}
function wr(e, t) {
  let n = !1;
  Rt <= Rn ? br(e) || (e.n |= Je, n = !Cr(e)) : n = !e.has(Ee), n && (e.add(Ee), Ee.deps.push(e));
}
function De(e, t, n, s, r, o) {
  const i = Hn.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && O(e))
    i.forEach((u, a) => {
      (a === "length" || a >= s) && l.push(u);
    });
  else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        O(e) ? es(n) && l.push(i.get("length")) : (l.push(i.get(dt)), bt(e) && l.push(i.get(Sn)));
        break;
      case "delete":
        O(e) || (l.push(i.get(dt)), bt(e) && l.push(i.get(Sn)));
        break;
      case "set":
        bt(e) && l.push(i.get(dt));
        break;
    }
  if (l.length === 1)
    l[0] && Nn(l[0]);
  else {
    const u = [];
    for (const a of l)
      a && u.push(...a);
    Nn(ts(u));
  }
}
function Nn(e, t) {
  const n = O(e) ? e : [...e];
  for (const s of n)
    s.computed && Os(s);
  for (const s of n)
    s.computed || Os(s);
}
function Os(e, t) {
  (e !== Ee || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const No = /* @__PURE__ */ Qn("__proto__,__v_isRef,__isVue"), xr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Gn)
), Do = /* @__PURE__ */ ss(), Bo = /* @__PURE__ */ ss(!1, !0), ko = /* @__PURE__ */ ss(!0), Is = /* @__PURE__ */ Vo();
function Vo() {
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
function ss(e = !1, t = !1) {
  return function(s, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && o === (e ? t ? si : $r : t ? Pr : Tr).get(s))
      return s;
    const i = O(s);
    if (!e && i && S(Is, r))
      return Reflect.get(Is, r, o);
    const l = Reflect.get(s, r, o);
    return (Gn(r) ? xr.has(r) : No(r)) || (e || me(s, "get", r), t) ? l : le(l) ? i && es(r) ? l : l.value : K(l) ? e ? Or(l) : Wt(l) : l;
  };
}
const jo = /* @__PURE__ */ Er(), Uo = /* @__PURE__ */ Er(!0);
function Er(e = !1) {
  return function(n, s, r, o) {
    let i = n[s];
    if (Tt(i) && le(i) && !le(r))
      return !1;
    if (!e && (!ln(r) && !Tt(r) && (i = N(i), r = N(r)), !O(n) && le(i) && !le(r)))
      return i.value = r, !0;
    const l = O(n) && es(s) ? Number(s) < n.length : S(n, s), u = Reflect.set(n, s, r, o);
    return n === N(o) && (l ? Dt(r, i) && De(n, "set", s, r) : De(n, "add", s, r)), u;
  };
}
function Ko(e, t) {
  const n = S(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && De(e, "delete", t, void 0), s;
}
function zo(e, t) {
  const n = Reflect.has(e, t);
  return (!Gn(t) || !xr.has(t)) && me(e, "has", t), n;
}
function Wo(e) {
  return me(e, "iterate", O(e) ? "length" : dt), Reflect.ownKeys(e);
}
const Fr = {
  get: Do,
  set: jo,
  deleteProperty: Ko,
  has: zo,
  ownKeys: Wo
}, Zo = {
  get: ko,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, qo = /* @__PURE__ */ te({}, Fr, {
  get: Bo,
  set: Uo
}), rs = (e) => e, _n = (e) => Reflect.getPrototypeOf(e);
function Qt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = N(e), o = N(t);
  n || (t !== o && me(r, "get", t), me(r, "get", o));
  const { has: i } = _n(r), l = s ? rs : n ? ls : Bt;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, o))
    return l(e.get(o));
  e !== r && e.get(t);
}
function Jt(e, t = !1) {
  const n = this.__v_raw, s = N(n), r = N(e);
  return t || (e !== r && me(s, "has", e), me(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Xt(e, t = !1) {
  return e = e.__v_raw, !t && me(N(e), "iterate", dt), Reflect.get(e, "size", e);
}
function Ms(e) {
  e = N(e);
  const t = N(this);
  return _n(t).has.call(t, e) || (t.add(e), De(t, "add", e, e)), this;
}
function As(e, t) {
  t = N(t);
  const n = N(this), { has: s, get: r } = _n(n);
  let o = s.call(n, e);
  o || (e = N(e), o = s.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), o ? Dt(t, i) && De(n, "set", e, t) : De(n, "add", e, t), this;
}
function Ls(e) {
  const t = N(this), { has: n, get: s } = _n(t);
  let r = n.call(t, e);
  r || (e = N(e), r = n.call(t, e)), s && s.call(t, e);
  const o = t.delete(e);
  return r && De(t, "delete", e, void 0), o;
}
function Hs() {
  const e = N(this), t = e.size !== 0, n = e.clear();
  return t && De(e, "clear", void 0, void 0), n;
}
function Gt(e, t) {
  return function(s, r) {
    const o = this, i = o.__v_raw, l = N(i), u = t ? rs : e ? ls : Bt;
    return !e && me(l, "iterate", dt), i.forEach((a, d) => s.call(r, u(a), u(d), o));
  };
}
function en(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = N(r), i = bt(o), l = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...s), d = n ? rs : t ? ls : Bt;
    return !t && me(o, "iterate", u ? Sn : dt), {
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
function Yo() {
  const e = {
    get(o) {
      return Qt(this, o);
    },
    get size() {
      return Xt(this);
    },
    has: Jt,
    add: Ms,
    set: As,
    delete: Ls,
    clear: Hs,
    forEach: Gt(!1, !1)
  }, t = {
    get(o) {
      return Qt(this, o, !1, !0);
    },
    get size() {
      return Xt(this);
    },
    has: Jt,
    add: Ms,
    set: As,
    delete: Ls,
    clear: Hs,
    forEach: Gt(!1, !0)
  }, n = {
    get(o) {
      return Qt(this, o, !0);
    },
    get size() {
      return Xt(this, !0);
    },
    has(o) {
      return Jt.call(this, o, !0);
    },
    add: je("add"),
    set: je("set"),
    delete: je("delete"),
    clear: je("clear"),
    forEach: Gt(!0, !1)
  }, s = {
    get(o) {
      return Qt(this, o, !0, !0);
    },
    get size() {
      return Xt(this, !0);
    },
    has(o) {
      return Jt.call(this, o, !0);
    },
    add: je("add"),
    set: je("set"),
    delete: je("delete"),
    clear: je("clear"),
    forEach: Gt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = en(o, !1, !1), n[o] = en(o, !0, !1), t[o] = en(o, !1, !0), s[o] = en(o, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [Qo, Jo, Xo, Go] = /* @__PURE__ */ Yo();
function os(e, t) {
  const n = t ? e ? Go : Xo : e ? Jo : Qo;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(S(n, r) && r in s ? n : s, r, o);
}
const ei = {
  get: /* @__PURE__ */ os(!1, !1)
}, ti = {
  get: /* @__PURE__ */ os(!1, !0)
}, ni = {
  get: /* @__PURE__ */ os(!0, !1)
}, Tr = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap();
function ri(e) {
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
function oi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ri(Po(e));
}
function Wt(e) {
  return Tt(e) ? e : is(e, !1, Fr, ei, Tr);
}
function ii(e) {
  return is(e, !1, qo, ti, Pr);
}
function Or(e) {
  return is(e, !0, Zo, ni, $r);
}
function is(e, t, n, s, r) {
  if (!K(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = oi(e);
  if (i === 0)
    return e;
  const l = new Proxy(e, i === 2 ? s : n);
  return r.set(e, l), l;
}
function yt(e) {
  return Tt(e) ? yt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Tt(e) {
  return !!(e && e.__v_isReadonly);
}
function ln(e) {
  return !!(e && e.__v_isShallow);
}
function Ir(e) {
  return yt(e) || Tt(e);
}
function N(e) {
  const t = e && e.__v_raw;
  return t ? N(t) : e;
}
function Mr(e) {
  return rn(e, "__v_skip", !0), e;
}
const Bt = (e) => K(e) ? Wt(e) : e, ls = (e) => K(e) ? Or(e) : e;
function cs(e) {
  Ze && Ee && (e = N(e), wr(e.dep || (e.dep = ts())));
}
function us(e, t) {
  e = N(e), e.dep && Nn(e.dep);
}
function le(e) {
  return !!(e && e.__v_isRef === !0);
}
function Le(e) {
  return li(e, !1);
}
function li(e, t) {
  return le(e) ? e : new ci(e, t);
}
class ci {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : N(t), this._value = n ? t : Bt(t);
  }
  get value() {
    return cs(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || ln(t) || Tt(t);
    t = n ? t : N(t), Dt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Bt(t), us(this));
  }
}
function Xe(e) {
  return le(e) ? e.value : e;
}
const ui = {
  get: (e, t, n) => Xe(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return le(r) && !le(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Ar(e) {
  return yt(e) ? e : new Proxy(e, ui);
}
class fi {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: s } = t(() => cs(this), () => us(this));
    this._get = n, this._set = s;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function ai(e) {
  return new fi(e);
}
var Lr;
class di {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Lr] = !1, this._dirty = !0, this.effect = new ns(t, () => {
      this._dirty || (this._dirty = !0, us(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = N(this);
    return cs(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Lr = "__v_isReadonly";
function hi(e, t, n = !1) {
  let s, r;
  const o = M(e);
  return o ? (s = e, r = Te) : (s = e.get, r = e.set), new di(s, r, o || !r, n);
}
function qe(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    mn(o, t, n);
  }
  return r;
}
function ye(e, t, n, s) {
  if (M(e)) {
    const o = qe(e, t, n, s);
    return o && pr(o) && o.catch((i) => {
      mn(i, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(ye(e[o], t, n, s));
  return r;
}
function mn(e, t, n, s = !0) {
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
  pi(e, n, r, s);
}
function pi(e, t, n, s = !0) {
  console.error(e);
}
let kt = !1, Dn = !1;
const ie = [];
let Ae = 0;
const wt = [];
let Re = null, ct = 0;
const Hr = /* @__PURE__ */ Promise.resolve();
let fs = null;
function Rr(e) {
  const t = fs || Hr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function gi(e) {
  let t = Ae + 1, n = ie.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    Vt(ie[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function as(e) {
  (!ie.length || !ie.includes(e, kt && e.allowRecurse ? Ae + 1 : Ae)) && (e.id == null ? ie.push(e) : ie.splice(gi(e.id), 0, e), Sr());
}
function Sr() {
  !kt && !Dn && (Dn = !0, fs = Hr.then(Dr));
}
function _i(e) {
  const t = ie.indexOf(e);
  t > Ae && ie.splice(t, 1);
}
function mi(e) {
  O(e) ? wt.push(...e) : (!Re || !Re.includes(e, e.allowRecurse ? ct + 1 : ct)) && wt.push(e), Sr();
}
function Rs(e, t = kt ? Ae + 1 : 0) {
  for (; t < ie.length; t++) {
    const n = ie[t];
    n && n.pre && (ie.splice(t, 1), t--, n());
  }
}
function Nr(e) {
  if (wt.length) {
    const t = [...new Set(wt)];
    if (wt.length = 0, Re) {
      Re.push(...t);
      return;
    }
    for (Re = t, Re.sort((n, s) => Vt(n) - Vt(s)), ct = 0; ct < Re.length; ct++)
      Re[ct]();
    Re = null, ct = 0;
  }
}
const Vt = (e) => e.id == null ? 1 / 0 : e.id, vi = (e, t) => {
  const n = Vt(e) - Vt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Dr(e) {
  Dn = !1, kt = !0, ie.sort(vi);
  const t = Te;
  try {
    for (Ae = 0; Ae < ie.length; Ae++) {
      const n = ie[Ae];
      n && n.active !== !1 && qe(n, null, 14);
    }
  } finally {
    Ae = 0, ie.length = 0, Nr(), kt = !1, fs = null, (ie.length || wt.length) && Dr();
  }
}
function Ci(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || k;
  let r = n;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in s) {
    const d = `${i === "modelValue" ? "model" : i}Modifiers`, { number: m, trim: b } = s[d] || k;
    b && (r = n.map((P) => P.trim())), m && (r = n.map(on));
  }
  let l, u = s[l = Pn(t)] || s[l = Pn(Qe(t))];
  !u && o && (u = s[l = Pn(Se(t))]), u && ye(u, e, 6, r);
  const a = s[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ye(a, e, 6, r);
  }
}
function Br(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, l = !1;
  if (!M(e)) {
    const u = (a) => {
      const d = Br(a, t, !0);
      d && (l = !0, te(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !l ? (K(e) && s.set(e, null), null) : (O(o) ? o.forEach((u) => i[u] = null) : te(i, o), K(e) && s.set(e, i), i);
}
function vn(e, t) {
  return !e || !hn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), S(e, t[0].toLowerCase() + t.slice(1)) || S(e, Se(t)) || S(e, t));
}
let fe = null, kr = null;
function cn(e) {
  const t = fe;
  return fe = e, kr = e && e.type.__scopeId || null, t;
}
function It(e, t = fe, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && zs(-1);
    const o = cn(t), i = e(...r);
    return cn(o), s._d && zs(1), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function On(e) {
  const { type: t, vnode: n, proxy: s, withProxy: r, props: o, propsOptions: [i], slots: l, attrs: u, emit: a, render: d, renderCache: m, data: b, setupState: P, ctx: H, inheritAttrs: $ } = e;
  let D, L;
  const ae = cn(e);
  try {
    if (n.shapeFlag & 4) {
      const z = r || s;
      D = Me(d.call(z, z, m, o, P, b, H)), L = u;
    } else {
      const z = t;
      D = Me(z.length > 1 ? z(o, { attrs: u, slots: l, emit: a }) : z(o, null)), L = t.props ? u : bi(u);
    }
  } catch (z) {
    Nt.length = 0, mn(z, e, 1), D = J(we);
  }
  let Z = D;
  if (L && $ !== !1) {
    const z = Object.keys(L), { shapeFlag: se } = Z;
    z.length && se & 7 && (i && z.some(Jn) && (L = yi(L, i)), Z = Ge(Z, L));
  }
  return n.dirs && (Z = Ge(Z), Z.dirs = Z.dirs ? Z.dirs.concat(n.dirs) : n.dirs), n.transition && (Z.transition = n.transition), D = Z, cn(ae), D;
}
const bi = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || hn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, yi = (e, t) => {
  const n = {};
  for (const s in e)
    (!Jn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function wi(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: l, patchFlag: u } = t, a = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? Ss(s, i, a) : !!i;
    if (u & 8) {
      const d = t.dynamicProps;
      for (let m = 0; m < d.length; m++) {
        const b = d[m];
        if (i[b] !== s[b] && !vn(a, b))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Ss(s, i, a) : !0 : !!i;
  return !1;
}
function Ss(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !vn(n, o))
      return !0;
  }
  return !1;
}
function xi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ei = (e) => e.__isSuspense;
function Fi(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : mi(e);
}
function Vr(e, t) {
  if (ne) {
    let n = ne.provides;
    const s = ne.parent && ne.parent.provides;
    s === n && (n = ne.provides = Object.create(s)), n[e] = t;
  }
}
function Ne(e, t, n = !1) {
  const s = ne || fe;
  if (s) {
    const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && M(t) ? t.call(s.proxy) : t;
  }
}
const Ns = {};
function xt(e, t, n) {
  return jr(e, t, n);
}
function jr(e, t, { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = k) {
  const l = ne;
  let u, a = !1, d = !1;
  if (le(e) ? (u = () => e.value, a = ln(e)) : yt(e) ? (u = () => e, s = !0) : O(e) ? (d = !0, a = e.some((L) => yt(L) || ln(L)), u = () => e.map((L) => {
    if (le(L))
      return L.value;
    if (yt(L))
      return at(L);
    if (M(L))
      return qe(L, l, 2);
  })) : M(e) ? t ? u = () => qe(e, l, 2) : u = () => {
    if (!(l && l.isUnmounted))
      return m && m(), ye(e, l, 3, [b]);
  } : u = Te, t && s) {
    const L = u;
    u = () => at(L());
  }
  let m, b = (L) => {
    m = D.onStop = () => {
      qe(L, l, 4);
    };
  };
  if (Ut)
    return b = Te, t ? n && ye(t, l, 3, [
      u(),
      d ? [] : void 0,
      b
    ]) : u(), Te;
  let P = d ? [] : Ns;
  const H = () => {
    if (!!D.active)
      if (t) {
        const L = D.run();
        (s || a || (d ? L.some((ae, Z) => Dt(ae, P[Z])) : Dt(L, P))) && (m && m(), ye(t, l, 3, [
          L,
          P === Ns ? void 0 : P,
          b
        ]), P = L);
      } else
        D.run();
  };
  H.allowRecurse = !!t;
  let $;
  r === "sync" ? $ = H : r === "post" ? $ = () => de(H, l && l.suspense) : (H.pre = !0, l && (H.id = l.uid), $ = () => as(H));
  const D = new ns(u, $);
  return t ? n ? H() : P = D.run() : r === "post" ? de(D.run.bind(D), l && l.suspense) : D.run(), () => {
    D.stop(), l && l.scope && Xn(l.scope.effects, D);
  };
}
function Ti(e, t, n) {
  const s = this.proxy, r = ce(e) ? e.includes(".") ? Ur(s, e) : () => s[e] : e.bind(s, s);
  let o;
  M(t) ? o = t : (o = t.handler, n = t);
  const i = ne;
  Pt(this);
  const l = jr(r, o.bind(s), n);
  return i ? Pt(i) : ht(), l;
}
function Ur(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function at(e, t) {
  if (!K(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), le(e))
    at(e.value, t);
  else if (O(e))
    for (let n = 0; n < e.length; n++)
      at(e[n], t);
  else if (hr(e) || bt(e))
    e.forEach((n) => {
      at(n, t);
    });
  else if (_r(e))
    for (const n in e)
      at(e[n], t);
  return e;
}
function Pi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return yn(() => {
    e.isMounted = !0;
  }), qr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ce = [Function, Array], $i = {
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
    const n = hl(), s = Pi();
    let r;
    return () => {
      const o = t.default && Wr(t.default(), !0);
      if (!o || !o.length)
        return;
      let i = o[0];
      if (o.length > 1) {
        for (const $ of o)
          if ($.type !== we) {
            i = $;
            break;
          }
      }
      const l = N(e), { mode: u } = l;
      if (s.isLeaving)
        return In(i);
      const a = Ds(i);
      if (!a)
        return In(i);
      const d = Bn(a, l, s, n);
      kn(a, d);
      const m = n.subTree, b = m && Ds(m);
      let P = !1;
      const { getTransitionKey: H } = a.type;
      if (H) {
        const $ = H();
        r === void 0 ? r = $ : $ !== r && (r = $, P = !0);
      }
      if (b && b.type !== we && (!ut(a, b) || P)) {
        const $ = Bn(b, l, s, n);
        if (kn(b, $), u === "out-in")
          return s.isLeaving = !0, $.afterLeave = () => {
            s.isLeaving = !1, n.update();
          }, In(i);
        u === "in-out" && a.type !== we && ($.delayLeave = (D, L, ae) => {
          const Z = zr(s, b);
          Z[String(b.key)] = b, D._leaveCb = () => {
            L(), D._leaveCb = void 0, delete d.delayedLeave;
          }, d.delayedLeave = ae;
        });
      }
      return i;
    };
  }
}, Kr = $i;
function zr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Bn(e, t, n, s) {
  const { appear: r, mode: o, persisted: i = !1, onBeforeEnter: l, onEnter: u, onAfterEnter: a, onEnterCancelled: d, onBeforeLeave: m, onLeave: b, onAfterLeave: P, onLeaveCancelled: H, onBeforeAppear: $, onAppear: D, onAfterAppear: L, onAppearCancelled: ae } = t, Z = String(e.key), z = zr(n, e), se = (A, q) => {
    A && ye(A, s, 9, q);
  }, Ve = (A, q) => {
    const U = q[1];
    se(A, q), O(A) ? A.every((re) => re.length <= 1) && U() : A.length <= 1 && U();
  }, Pe = {
    mode: o,
    persisted: i,
    beforeEnter(A) {
      let q = l;
      if (!n.isMounted)
        if (r)
          q = $ || l;
        else
          return;
      A._leaveCb && A._leaveCb(!0);
      const U = z[Z];
      U && ut(e, U) && U.el._leaveCb && U.el._leaveCb(), se(q, [A]);
    },
    enter(A) {
      let q = u, U = a, re = d;
      if (!n.isMounted)
        if (r)
          q = D || u, U = L || a, re = ae || d;
        else
          return;
      let E = !1;
      const W = A._enterCb = (pe) => {
        E || (E = !0, pe ? se(re, [A]) : se(U, [A]), Pe.delayedLeave && Pe.delayedLeave(), A._enterCb = void 0);
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
        re || (re = !0, q(), W ? se(H, [A]) : se(P, [A]), A._leaveCb = void 0, z[U] === e && delete z[U]);
      };
      z[U] = e, b ? Ve(b, [A, E]) : E();
    },
    clone(A) {
      return Bn(A, t, n, s);
    }
  };
  return Pe;
}
function In(e) {
  if (Cn(e))
    return e = Ge(e), e.children = null, e;
}
function Ds(e) {
  return Cn(e) ? e.children ? e.children[0] : void 0 : e;
}
function kn(e, t) {
  e.shapeFlag & 6 && e.component ? kn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Wr(e, t = !1, n) {
  let s = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === be ? (i.patchFlag & 128 && r++, s = s.concat(Wr(i.children, t, l))) : (t || i.type !== we) && s.push(l != null ? Ge(i, { key: l }) : i);
  }
  if (r > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
function he(e) {
  return M(e) ? { setup: e, name: e.name } : e;
}
const St = (e) => !!e.type.__asyncLoader, Cn = (e) => e.type.__isKeepAlive;
function Oi(e, t) {
  Zr(e, "a", t);
}
function Ii(e, t) {
  Zr(e, "da", t);
}
function Zr(e, t, n = ne) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (bn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Cn(r.parent.vnode) && Mi(s, t, n, r), r = r.parent;
  }
}
function Mi(e, t, n, s) {
  const r = bn(t, e, s, !0);
  ds(() => {
    Xn(s[t], r);
  }, n);
}
function bn(e, t, n = ne, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      $t(), Pt(n);
      const l = ye(t, n, e, i);
      return ht(), Ot(), l;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const ke = (e) => (t, n = ne) => (!Ut || e === "sp") && bn(e, (...s) => t(...s), n), Ai = ke("bm"), yn = ke("m"), Li = ke("bu"), Hi = ke("u"), qr = ke("bum"), ds = ke("um"), Ri = ke("sp"), Si = ke("rtg"), Ni = ke("rtc");
function Di(e, t = ne) {
  bn("ec", e, t);
}
function Bi(e, t) {
  const n = fe;
  if (n === null)
    return e;
  const s = xn(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, u, a = k] = t[o];
    M(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && at(l), r.push({
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
function st(e, t, n, s) {
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
function Vi(e, t, n = {}, s, r) {
  if (fe.isCE || fe.parent && St(fe.parent) && fe.parent.isCE)
    return J("slot", t === "default" ? null : { name: t }, s && s());
  let o = e[t];
  o && o._c && (o._d = !1), Q();
  const i = o && Yr(o(n)), l = Be(be, {
    key: n.key || i && i.key || `_${t}`
  }, i || (s ? s() : []), i && e._ === 1 ? 64 : -2);
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = !0), l;
}
function Yr(e) {
  return e.some((t) => an(t) ? !(t.type === we || t.type === be && !Yr(t.children)) : !0) ? e : null;
}
const Vn = (e) => e ? co(e) ? xn(e) || e.proxy : Vn(e.parent) : null, un = /* @__PURE__ */ te(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => e.props,
  $attrs: (e) => e.attrs,
  $slots: (e) => e.slots,
  $refs: (e) => e.refs,
  $parent: (e) => Vn(e.parent),
  $root: (e) => Vn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => hs(e),
  $forceUpdate: (e) => e.f || (e.f = () => as(e.update)),
  $nextTick: (e) => e.n || (e.n = Rr.bind(e.proxy)),
  $watch: (e) => Ti.bind(e)
}), ji = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: u } = e;
    let a;
    if (t[0] !== "$") {
      const P = i[t];
      if (P !== void 0)
        switch (P) {
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
        if (s !== k && S(s, t))
          return i[t] = 1, s[t];
        if (r !== k && S(r, t))
          return i[t] = 2, r[t];
        if ((a = e.propsOptions[0]) && S(a, t))
          return i[t] = 3, o[t];
        if (n !== k && S(n, t))
          return i[t] = 4, n[t];
        jn && (i[t] = 0);
      }
    }
    const d = un[t];
    let m, b;
    if (d)
      return t === "$attrs" && me(e, "get", t), d(e);
    if ((m = l.__cssModules) && (m = m[t]))
      return m;
    if (n !== k && S(n, t))
      return i[t] = 4, n[t];
    if (b = u.config.globalProperties, S(b, t))
      return b[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return r !== k && S(r, t) ? (r[t] = n, !0) : s !== k && S(s, t) ? (s[t] = n, !0) : S(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o } }, i) {
    let l;
    return !!n[i] || e !== k && S(e, i) || t !== k && S(t, i) || (l = o[0]) && S(l, i) || S(s, i) || S(un, i) || S(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : S(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let jn = !0;
function Ui(e) {
  const t = hs(e), n = e.proxy, s = e.ctx;
  jn = !1, t.beforeCreate && Bs(t.beforeCreate, e, "bc");
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
    beforeUpdate: P,
    updated: H,
    activated: $,
    deactivated: D,
    beforeDestroy: L,
    beforeUnmount: ae,
    destroyed: Z,
    unmounted: z,
    render: se,
    renderTracked: Ve,
    renderTriggered: Pe,
    errorCaptured: A,
    serverPrefetch: q,
    expose: U,
    inheritAttrs: re,
    components: E,
    directives: W,
    filters: pe
  } = t;
  if (a && Ki(a, s, null, e.appContext.config.unwrapInjectedRef), i)
    for (const Y in i) {
      const V = i[Y];
      M(V) && (s[Y] = V.bind(n));
    }
  if (r) {
    const Y = r.call(n, n);
    K(Y) && (e.data = Wt(Y));
  }
  if (jn = !0, o)
    for (const Y in o) {
      const V = o[Y], et = M(V) ? V.bind(n, n) : M(V.get) ? V.get.bind(n, n) : Te, qt = !M(V) && M(V.set) ? V.set.bind(n) : Te, tt = Et({
        get: et,
        set: qt
      });
      Object.defineProperty(s, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => tt.value,
        set: ($e) => tt.value = $e
      });
    }
  if (l)
    for (const Y in l)
      Qr(l[Y], s, n, Y);
  if (u) {
    const Y = M(u) ? u.call(n) : u;
    Reflect.ownKeys(Y).forEach((V) => {
      Vr(V, Y[V]);
    });
  }
  d && Bs(d, e, "c");
  function ee(Y, V) {
    O(V) ? V.forEach((et) => Y(et.bind(n))) : V && Y(V.bind(n));
  }
  if (ee(Ai, m), ee(yn, b), ee(Li, P), ee(Hi, H), ee(Oi, $), ee(Ii, D), ee(Di, A), ee(Ni, Ve), ee(Si, Pe), ee(qr, ae), ee(ds, z), ee(Ri, q), O(U))
    if (U.length) {
      const Y = e.exposed || (e.exposed = {});
      U.forEach((V) => {
        Object.defineProperty(Y, V, {
          get: () => n[V],
          set: (et) => n[V] = et
        });
      });
    } else
      e.exposed || (e.exposed = {});
  se && e.render === Te && (e.render = se), re != null && (e.inheritAttrs = re), E && (e.components = E), W && (e.directives = W);
}
function Ki(e, t, n = Te, s = !1) {
  O(e) && (e = Un(e));
  for (const r in e) {
    const o = e[r];
    let i;
    K(o) ? "default" in o ? i = Ne(o.from || r, o.default, !0) : i = Ne(o.from || r) : i = Ne(o), le(i) && s ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[r] = i;
  }
}
function Bs(e, t, n) {
  ye(O(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Qr(e, t, n, s) {
  const r = s.includes(".") ? Ur(n, s) : () => n[s];
  if (ce(e)) {
    const o = t[e];
    M(o) && xt(r, o);
  } else if (M(e))
    xt(r, e.bind(n));
  else if (K(e))
    if (O(e))
      e.forEach((o) => Qr(o, t, n, s));
    else {
      const o = M(e.handler) ? e.handler.bind(n) : t[e.handler];
      M(o) && xt(r, o, e);
    }
}
function hs(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, l = o.get(t);
  let u;
  return l ? u = l : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach((a) => fn(u, a, i, !0)), fn(u, t, i)), K(t) && o.set(t, u), u;
}
function fn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && fn(e, o, n, !0), r && r.forEach((i) => fn(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = zi[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const zi = {
  data: ks,
  props: lt,
  emits: lt,
  methods: lt,
  computed: lt,
  beforeCreate: ue,
  created: ue,
  beforeMount: ue,
  mounted: ue,
  beforeUpdate: ue,
  updated: ue,
  beforeDestroy: ue,
  beforeUnmount: ue,
  destroyed: ue,
  unmounted: ue,
  activated: ue,
  deactivated: ue,
  errorCaptured: ue,
  serverPrefetch: ue,
  components: lt,
  directives: lt,
  watch: Zi,
  provide: ks,
  inject: Wi
};
function ks(e, t) {
  return t ? e ? function() {
    return te(M(e) ? e.call(this, this) : e, M(t) ? t.call(this, this) : t);
  } : t : e;
}
function Wi(e, t) {
  return lt(Un(e), Un(t));
}
function Un(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function lt(e, t) {
  return e ? te(te(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function Zi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = te(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ue(e[s], t[s]);
  return n;
}
function qi(e, t, n, s = !1) {
  const r = {}, o = {};
  rn(o, wn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Jr(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : ii(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function Yi(e, t, n, s) {
  const { props: r, attrs: o, vnode: { patchFlag: i } } = e, l = N(r), [u] = e.propsOptions;
  let a = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let m = 0; m < d.length; m++) {
        let b = d[m];
        if (vn(e.emitsOptions, b))
          continue;
        const P = t[b];
        if (u)
          if (S(o, b))
            P !== o[b] && (o[b] = P, a = !0);
          else {
            const H = Qe(b);
            r[H] = Kn(u, l, H, P, e, !1);
          }
        else
          P !== o[b] && (o[b] = P, a = !0);
      }
    }
  } else {
    Jr(e, t, r, o) && (a = !0);
    let d;
    for (const m in l)
      (!t || !S(t, m) && ((d = Se(m)) === m || !S(t, d))) && (u ? n && (n[m] !== void 0 || n[d] !== void 0) && (r[m] = Kn(u, l, m, void 0, e, !0)) : delete r[m]);
    if (o !== l)
      for (const m in o)
        (!t || !S(t, m) && !0) && (delete o[m], a = !0);
  }
  a && De(e, "set", "$attrs");
}
function Jr(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let u in t) {
      if (tn(u))
        continue;
      const a = t[u];
      let d;
      r && S(r, d = Qe(u)) ? !o || !o.includes(d) ? n[d] = a : (l || (l = {}))[d] = a : vn(e.emitsOptions, u) || (!(u in s) || a !== s[u]) && (s[u] = a, i = !0);
    }
  if (o) {
    const u = N(n), a = l || k;
    for (let d = 0; d < o.length; d++) {
      const m = o[d];
      n[m] = Kn(r, u, m, a[m], e, !S(a, m));
    }
  }
  return i;
}
function Kn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = S(i, "default");
    if (l && s === void 0) {
      const u = i.default;
      if (i.type !== Function && M(u)) {
        const { propsDefaults: a } = r;
        n in a ? s = a[n] : (Pt(r), s = a[n] = u.call(null, t), ht());
      } else
        s = u;
    }
    i[0] && (o && !l ? s = !1 : i[1] && (s === "" || s === Se(n)) && (s = !0));
  }
  return s;
}
function Xr(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, l = [];
  let u = !1;
  if (!M(e)) {
    const d = (m) => {
      u = !0;
      const [b, P] = Xr(m, t, !0);
      te(i, b), P && l.push(...P);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !u)
    return K(e) && s.set(e, Ct), Ct;
  if (O(o))
    for (let d = 0; d < o.length; d++) {
      const m = Qe(o[d]);
      Vs(m) && (i[m] = k);
    }
  else if (o)
    for (const d in o) {
      const m = Qe(d);
      if (Vs(m)) {
        const b = o[d], P = i[m] = O(b) || M(b) ? { type: b } : b;
        if (P) {
          const H = Ks(Boolean, P.type), $ = Ks(String, P.type);
          P[0] = H > -1, P[1] = $ < 0 || H < $, (H > -1 || S(P, "default")) && l.push(m);
        }
      }
    }
  const a = [i, l];
  return K(e) && s.set(e, a), a;
}
function Vs(e) {
  return e[0] !== "$";
}
function js(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Us(e, t) {
  return js(e) === js(t);
}
function Ks(e, t) {
  return O(t) ? t.findIndex((n) => Us(n, e)) : M(t) && Us(t, e) ? 0 : -1;
}
const Gr = (e) => e[0] === "_" || e === "$stable", ps = (e) => O(e) ? e.map(Me) : [Me(e)], Qi = (e, t, n) => {
  if (t._n)
    return t;
  const s = It((...r) => ps(t(...r)), n);
  return s._c = !1, s;
}, eo = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Gr(r))
      continue;
    const o = e[r];
    if (M(o))
      t[r] = Qi(r, o, s);
    else if (o != null) {
      const i = ps(o);
      t[r] = () => i;
    }
  }
}, to = (e, t) => {
  const n = ps(t);
  e.slots.default = () => n;
}, Ji = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = N(t), rn(t, "_", n)) : eo(t, e.slots = {});
  } else
    e.slots = {}, t && to(e, t);
  rn(e.slots, wn, 1);
}, Xi = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = k;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : (te(r, t), !n && l === 1 && delete r._) : (o = !t.$stable, eo(t, r)), i = t;
  } else
    t && (to(e, t), i = { default: 1 });
  if (o)
    for (const l in r)
      !Gr(l) && !(l in i) && delete r[l];
};
function no() {
  return {
    app: null,
    config: {
      isNativeTag: Eo,
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
let Gi = 0;
function el(e, t) {
  return function(s, r = null) {
    M(s) || (s = Object.assign({}, s)), r != null && !K(r) && (r = null);
    const o = no(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const u = o.app = {
      _uid: Gi++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: bl,
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
          const b = J(s, r);
          return b.appContext = o, d && t ? t(b, a) : e(b, a, m), l = !0, u._container = a, a.__vue_app__ = u, xn(b.component) || b.component.proxy;
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
function zn(e, t, n, s, r = !1) {
  if (O(e)) {
    e.forEach((b, P) => zn(b, t && (O(t) ? t[P] : t), n, s, r));
    return;
  }
  if (St(s) && !r)
    return;
  const o = s.shapeFlag & 4 ? xn(s.component) || s.component.proxy : s.el, i = r ? null : o, { i: l, r: u } = e, a = t && t.r, d = l.refs === k ? l.refs = {} : l.refs, m = l.setupState;
  if (a != null && a !== u && (ce(a) ? (d[a] = null, S(m, a) && (m[a] = null)) : le(a) && (a.value = null)), M(u))
    qe(u, l, 12, [i, d]);
  else {
    const b = ce(u), P = le(u);
    if (b || P) {
      const H = () => {
        if (e.f) {
          const $ = b ? d[u] : u.value;
          r ? O($) && Xn($, o) : O($) ? $.includes(o) || $.push(o) : b ? (d[u] = [o], S(m, u) && (m[u] = d[u])) : (u.value = [o], e.k && (d[e.k] = u.value));
        } else
          b ? (d[u] = i, S(m, u) && (m[u] = i)) : P && (u.value = i, e.k && (d[e.k] = i));
      };
      i ? (H.id = -1, de(H, n)) : H();
    }
  }
}
const de = Fi;
function tl(e) {
  return nl(e);
}
function nl(e, t) {
  const n = Io();
  n.__VUE__ = !0;
  const { insert: s, remove: r, patchProp: o, createElement: i, createText: l, createComment: u, setText: a, setElementText: d, parentNode: m, nextSibling: b, setScopeId: P = Te, insertStaticContent: H } = e, $ = (c, f, h, g = null, p = null, C = null, w = !1, v = null, y = !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !ut(c, f) && (g = Yt(c), $e(c, p, C, !0), c = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: _, ref: F, shapeFlag: x } = f;
    switch (_) {
      case gs:
        D(c, f, h, g);
        break;
      case we:
        L(c, f, h, g);
        break;
      case nn:
        c == null && ae(f, h, g, w);
        break;
      case be:
        E(c, f, h, g, p, C, w, v, y);
        break;
      default:
        x & 1 ? se(c, f, h, g, p, C, w, v, y) : x & 6 ? W(c, f, h, g, p, C, w, v, y) : (x & 64 || x & 128) && _.process(c, f, h, g, p, C, w, v, y, mt);
    }
    F != null && p && zn(F, c && c.ref, C, f || c, !f);
  }, D = (c, f, h, g) => {
    if (c == null)
      s(f.el = l(f.children), h, g);
    else {
      const p = f.el = c.el;
      f.children !== c.children && a(p, f.children);
    }
  }, L = (c, f, h, g) => {
    c == null ? s(f.el = u(f.children || ""), h, g) : f.el = c.el;
  }, ae = (c, f, h, g) => {
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
    if (y = c.el = i(c.type, C, x && x.is, x), T & 8 ? d(y, c.children) : T & 16 && A(c.children, y, null, g, p, C && F !== "foreignObject", w, v), R && st(c, null, g, "created"), x) {
      for (const B in x)
        B !== "value" && !tn(B) && o(y, B, null, x[B], C, c.children, g, p, He);
      "value" in x && o(y, "value", null, x.value), (_ = x.onVnodeBeforeMount) && Ie(_, g, c);
    }
    Pe(y, c, c.scopeId, w, g), R && st(c, null, g, "beforeMount");
    const j = (!p || p && !p.pendingBranch) && I && !I.persisted;
    j && I.beforeEnter(y), s(y, f, h), ((_ = x && x.onVnodeMounted) || j || R) && de(() => {
      _ && Ie(_, g, c), j && I.enter(y), R && st(c, null, g, "mounted");
    }, p);
  }, Pe = (c, f, h, g, p) => {
    if (h && P(c, h), g)
      for (let C = 0; C < g.length; C++)
        P(c, g[C]);
    if (p) {
      let C = p.subTree;
      if (f === C) {
        const w = p.vnode;
        Pe(c, w, w.scopeId, w.slotScopeIds, p.parent);
      }
    }
  }, A = (c, f, h, g, p, C, w, v, y = 0) => {
    for (let _ = y; _ < c.length; _++) {
      const F = c[_] = v ? ze(c[_]) : Me(c[_]);
      $(null, F, f, h, g, p, C, w, v);
    }
  }, q = (c, f, h, g, p, C, w) => {
    const v = f.el = c.el;
    let { patchFlag: y, dynamicChildren: _, dirs: F } = f;
    y |= c.patchFlag & 16;
    const x = c.props || k, T = f.props || k;
    let I;
    h && rt(h, !1), (I = T.onVnodeBeforeUpdate) && Ie(I, h, f, c), F && st(f, c, h, "beforeUpdate"), h && rt(h, !0);
    const R = p && f.type !== "foreignObject";
    if (_ ? U(c.dynamicChildren, _, v, h, g, R, C) : w || V(c, f, v, null, h, g, R, C, !1), y > 0) {
      if (y & 16)
        re(v, f, x, T, h, g, p);
      else if (y & 2 && x.class !== T.class && o(v, "class", null, T.class, p), y & 4 && o(v, "style", x.style, T.style, p), y & 8) {
        const j = f.dynamicProps;
        for (let B = 0; B < j.length; B++) {
          const X = j[B], xe = x[X], vt = T[X];
          (vt !== xe || X === "value") && o(v, X, xe, vt, p, c.children, h, g, He);
        }
      }
      y & 1 && c.children !== f.children && d(v, f.children);
    } else
      !w && _ == null && re(v, f, x, T, h, g, p);
    ((I = T.onVnodeUpdated) || F) && de(() => {
      I && Ie(I, h, f, c), F && st(f, c, h, "updated");
    }, g);
  }, U = (c, f, h, g, p, C, w) => {
    for (let v = 0; v < f.length; v++) {
      const y = c[v], _ = f[v], F = y.el && (y.type === be || !ut(y, _) || y.shapeFlag & 70) ? m(y.el) : h;
      $(y, _, F, null, g, p, C, w, !0);
    }
  }, re = (c, f, h, g, p, C, w) => {
    if (h !== g) {
      if (h !== k)
        for (const v in h)
          !tn(v) && !(v in g) && o(c, v, h[v], null, w, f.children, p, C, He);
      for (const v in g) {
        if (tn(v))
          continue;
        const y = g[v], _ = h[v];
        y !== _ && v !== "value" && o(c, v, _, y, w, f.children, p, C, He);
      }
      "value" in g && o(c, "value", h.value, g.value);
    }
  }, E = (c, f, h, g, p, C, w, v, y) => {
    const _ = f.el = c ? c.el : l(""), F = f.anchor = c ? c.anchor : l("");
    let { patchFlag: x, dynamicChildren: T, slotScopeIds: I } = f;
    I && (v = v ? v.concat(I) : I), c == null ? (s(_, h, g), s(F, h, g), A(f.children, h, F, p, C, w, v, y)) : x > 0 && x & 64 && T && c.dynamicChildren ? (U(c.dynamicChildren, T, h, p, C, w, v), (f.key != null || p && f === p.subTree) && so(c, f, !0)) : V(c, f, h, F, p, C, w, v, y);
  }, W = (c, f, h, g, p, C, w, v, y) => {
    f.slotScopeIds = v, c == null ? f.shapeFlag & 512 ? p.ctx.activate(f, h, g, w, y) : pe(f, h, g, p, C, w, y) : Mt(c, f, y);
  }, pe = (c, f, h, g, p, C, w) => {
    const v = c.component = dl(c, g, p);
    if (Cn(c) && (v.ctx.renderer = mt), pl(v), v.asyncDep) {
      if (p && p.registerDep(v, ee), !c.el) {
        const y = v.subTree = J(we);
        L(null, y, f, h);
      }
      return;
    }
    ee(v, c, f, h, p, C, w);
  }, Mt = (c, f, h) => {
    const g = f.component = c.component;
    if (wi(c, f, h))
      if (g.asyncDep && !g.asyncResolved) {
        Y(g, f, h);
        return;
      } else
        g.next = f, _i(g.update), g.update();
    else
      f.el = c.el, g.vnode = f;
  }, ee = (c, f, h, g, p, C, w) => {
    const v = () => {
      if (c.isMounted) {
        let { next: F, bu: x, u: T, parent: I, vnode: R } = c, j = F, B;
        rt(c, !1), F ? (F.el = R.el, Y(c, F, w)) : F = R, x && $n(x), (B = F.props && F.props.onVnodeBeforeUpdate) && Ie(B, I, F, R), rt(c, !0);
        const X = On(c), xe = c.subTree;
        c.subTree = X, $(
          xe,
          X,
          m(xe.el),
          Yt(xe),
          c,
          p,
          C
        ), F.el = X.el, j === null && xi(c, X.el), T && de(T, p), (B = F.props && F.props.onVnodeUpdated) && de(() => Ie(B, I, F, R), p);
      } else {
        let F;
        const { el: x, props: T } = f, { bm: I, m: R, parent: j } = c, B = St(f);
        if (rt(c, !1), I && $n(I), !B && (F = T && T.onVnodeBeforeMount) && Ie(F, j, f), rt(c, !0), x && Tn) {
          const X = () => {
            c.subTree = On(c), Tn(x, c.subTree, c, p, null);
          };
          B ? f.type.__asyncLoader().then(
            () => !c.isUnmounted && X()
          ) : X();
        } else {
          const X = c.subTree = On(c);
          $(null, X, h, g, c, p, C), f.el = X.el;
        }
        if (R && de(R, p), !B && (F = T && T.onVnodeMounted)) {
          const X = f;
          de(() => Ie(F, j, X), p);
        }
        (f.shapeFlag & 256 || j && St(j.vnode) && j.vnode.shapeFlag & 256) && c.a && de(c.a, p), c.isMounted = !0, f = h = g = null;
      }
    }, y = c.effect = new ns(
      v,
      () => as(_),
      c.scope
    ), _ = c.update = () => y.run();
    _.id = c.uid, rt(c, !0), _();
  }, Y = (c, f, h) => {
    f.component = c;
    const g = c.vnode.props;
    c.vnode = f, c.next = null, Yi(c, f.props, g, h), Xi(c, f.children, h), $t(), Rs(), Ot();
  }, V = (c, f, h, g, p, C, w, v, y = !1) => {
    const _ = c && c.children, F = c ? c.shapeFlag : 0, x = f.children, { patchFlag: T, shapeFlag: I } = f;
    if (T > 0) {
      if (T & 128) {
        qt(_, x, h, g, p, C, w, v, y);
        return;
      } else if (T & 256) {
        et(_, x, h, g, p, C, w, v, y);
        return;
      }
    }
    I & 8 ? (F & 16 && He(_, p, C), x !== _ && d(h, x)) : F & 16 ? I & 16 ? qt(_, x, h, g, p, C, w, v, y) : He(_, p, C, !0) : (F & 8 && d(h, ""), I & 16 && A(x, h, g, p, C, w, v, y));
  }, et = (c, f, h, g, p, C, w, v, y) => {
    c = c || Ct, f = f || Ct;
    const _ = c.length, F = f.length, x = Math.min(_, F);
    let T;
    for (T = 0; T < x; T++) {
      const I = f[T] = y ? ze(f[T]) : Me(f[T]);
      $(c[T], I, h, null, p, C, w, v, y);
    }
    _ > F ? He(c, p, C, !0, !1, x) : A(f, h, g, p, C, w, v, y, x);
  }, qt = (c, f, h, g, p, C, w, v, y) => {
    let _ = 0;
    const F = f.length;
    let x = c.length - 1, T = F - 1;
    for (; _ <= x && _ <= T; ) {
      const I = c[_], R = f[_] = y ? ze(f[_]) : Me(f[_]);
      if (ut(I, R))
        $(I, R, h, null, p, C, w, v, y);
      else
        break;
      _++;
    }
    for (; _ <= x && _ <= T; ) {
      const I = c[x], R = f[T] = y ? ze(f[T]) : Me(f[T]);
      if (ut(I, R))
        $(I, R, h, null, p, C, w, v, y);
      else
        break;
      x--, T--;
    }
    if (_ > x) {
      if (_ <= T) {
        const I = T + 1, R = I < F ? f[I].el : g;
        for (; _ <= T; )
          $(null, f[_] = y ? ze(f[_]) : Me(f[_]), h, R, p, C, w, v, y), _++;
      }
    } else if (_ > T)
      for (; _ <= x; )
        $e(c[_], p, C, !0), _++;
    else {
      const I = _, R = _, j = /* @__PURE__ */ new Map();
      for (_ = R; _ <= T; _++) {
        const ge = f[_] = y ? ze(f[_]) : Me(f[_]);
        ge.key != null && j.set(ge.key, _);
      }
      let B, X = 0;
      const xe = T - R + 1;
      let vt = !1, xs = 0;
      const At = new Array(xe);
      for (_ = 0; _ < xe; _++)
        At[_] = 0;
      for (_ = I; _ <= x; _++) {
        const ge = c[_];
        if (X >= xe) {
          $e(ge, p, C, !0);
          continue;
        }
        let Oe;
        if (ge.key != null)
          Oe = j.get(ge.key);
        else
          for (B = R; B <= T; B++)
            if (At[B - R] === 0 && ut(ge, f[B])) {
              Oe = B;
              break;
            }
        Oe === void 0 ? $e(ge, p, C, !0) : (At[Oe - R] = _ + 1, Oe >= xs ? xs = Oe : vt = !0, $(ge, f[Oe], h, null, p, C, w, v, y), X++);
      }
      const Es = vt ? sl(At) : Ct;
      for (B = Es.length - 1, _ = xe - 1; _ >= 0; _--) {
        const ge = R + _, Oe = f[ge], Fs = ge + 1 < F ? f[ge + 1].el : g;
        At[_] === 0 ? $(null, Oe, h, Fs, p, C, w, v, y) : vt && (B < 0 || _ !== Es[B] ? tt(Oe, h, Fs, 2) : B--);
      }
    }
  }, tt = (c, f, h, g, p = null) => {
    const { el: C, type: w, transition: v, children: y, shapeFlag: _ } = c;
    if (_ & 6) {
      tt(c.component.subTree, f, h, g);
      return;
    }
    if (_ & 128) {
      c.suspense.move(f, h, g);
      return;
    }
    if (_ & 64) {
      w.move(c, f, h, mt);
      return;
    }
    if (w === be) {
      s(C, f, h);
      for (let x = 0; x < y.length; x++)
        tt(y[x], f, h, g);
      s(c.anchor, f, h);
      return;
    }
    if (w === nn) {
      Z(c, f, h);
      return;
    }
    if (g !== 2 && _ & 1 && v)
      if (g === 0)
        v.beforeEnter(C), s(C, f, h), de(() => v.enter(C), p);
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
  }, $e = (c, f, h, g = !1, p = !1) => {
    const { type: C, props: w, ref: v, children: y, dynamicChildren: _, shapeFlag: F, patchFlag: x, dirs: T } = c;
    if (v != null && zn(v, null, h, c, !0), F & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const I = F & 1 && T, R = !St(c);
    let j;
    if (R && (j = w && w.onVnodeBeforeUnmount) && Ie(j, f, c), F & 6)
      _o(c.component, h, g);
    else {
      if (F & 128) {
        c.suspense.unmount(h, g);
        return;
      }
      I && st(c, null, f, "beforeUnmount"), F & 64 ? c.type.remove(c, f, h, p, mt, g) : _ && (C !== be || x > 0 && x & 64) ? He(_, f, h, !1, !0) : (C === be && x & 384 || !p && F & 16) && He(y, f, h), g && ys(c);
    }
    (R && (j = w && w.onVnodeUnmounted) || I) && de(() => {
      j && Ie(j, f, c), I && st(c, null, f, "unmounted");
    }, h);
  }, ys = (c) => {
    const { type: f, el: h, anchor: g, transition: p } = c;
    if (f === be) {
      go(h, g);
      return;
    }
    if (f === nn) {
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
  }, go = (c, f) => {
    let h;
    for (; c !== f; )
      h = b(c), r(c), c = h;
    r(f);
  }, _o = (c, f, h) => {
    const { bum: g, scope: p, update: C, subTree: w, um: v } = c;
    g && $n(g), p.stop(), C && (C.active = !1, $e(w, c, f, h)), v && de(v, f), de(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, He = (c, f, h, g = !1, p = !1, C = 0) => {
    for (let w = C; w < c.length; w++)
      $e(c[w], f, h, g, p);
  }, Yt = (c) => c.shapeFlag & 6 ? Yt(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : b(c.anchor || c.el), ws = (c, f, h) => {
    c == null ? f._vnode && $e(f._vnode, null, null, !0) : $(f._vnode || null, c, f, null, null, null, h), Rs(), Nr(), f._vnode = c;
  }, mt = {
    p: $,
    um: $e,
    m: tt,
    r: ys,
    mt: pe,
    mc: A,
    pc: V,
    pbc: U,
    n: Yt,
    o: e
  };
  let Fn, Tn;
  return t && ([Fn, Tn] = t(mt)), {
    render: ws,
    hydrate: Fn,
    createApp: el(ws, Fn)
  };
}
function rt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function so(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (O(s) && O(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = ze(r[o]), l.el = i.el), n || so(i, l));
    }
}
function sl(e) {
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
const rl = (e) => e.__isTeleport, be = Symbol(void 0), gs = Symbol(void 0), we = Symbol(void 0), nn = Symbol(void 0), Nt = [];
let Fe = null;
function Q(e = !1) {
  Nt.push(Fe = e ? null : []);
}
function ol() {
  Nt.pop(), Fe = Nt[Nt.length - 1] || null;
}
let jt = 1;
function zs(e) {
  jt += e;
}
function ro(e) {
  return e.dynamicChildren = jt > 0 ? Fe || Ct : null, ol(), jt > 0 && Fe && Fe.push(e), e;
}
function ve(e, t, n, s, r, o) {
  return ro(G(e, t, n, s, r, o, !0));
}
function Be(e, t, n, s, r) {
  return ro(J(e, t, n, s, r, !0));
}
function an(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ut(e, t) {
  return e.type === t.type && e.key === t.key;
}
const wn = "__vInternal", oo = ({ key: e }) => e != null ? e : null, sn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ce(e) || le(e) || M(e) ? { i: fe, r: e, k: t, f: !!n } : e : null;
function G(e, t = null, n = null, s = 0, r = null, o = e === be ? 0 : 1, i = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && oo(t),
    ref: t && sn(t),
    scopeId: kr,
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
  return l ? (_s(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= ce(n) ? 8 : 16), jt > 0 && !i && Fe && (u.patchFlag > 0 || o & 6) && u.patchFlag !== 32 && Fe.push(u), u;
}
const J = il;
function il(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === ki) && (e = we), an(e)) {
    const l = Ge(e, t, !0);
    return n && _s(l, n), jt > 0 && !o && Fe && (l.shapeFlag & 6 ? Fe[Fe.indexOf(e)] = l : Fe.push(l)), l.patchFlag |= -2, l;
  }
  if (vl(e) && (e = e.__vccOpts), t) {
    t = ll(t);
    let { class: l, style: u } = t;
    l && !ce(l) && (t.class = dn(l)), K(u) && (Ir(u) && !O(u) && (u = te({}, u)), t.style = zt(u));
  }
  const i = ce(e) ? 1 : Ei(e) ? 128 : rl(e) ? 64 : K(e) ? 4 : M(e) ? 2 : 0;
  return G(e, t, n, s, r, i, o, !0);
}
function ll(e) {
  return e ? Ir(e) || wn in e ? te({}, e) : e : null;
}
function Ge(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e, l = t ? lo(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && oo(l),
    ref: t && t.ref ? n && r ? O(r) ? r.concat(sn(t)) : [r, sn(t)] : sn(t) : r,
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
    ssContent: e.ssContent && Ge(e.ssContent),
    ssFallback: e.ssFallback && Ge(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function cl(e = " ", t = 0) {
  return J(gs, null, e, t);
}
function io(e, t) {
  const n = J(nn, null, e);
  return n.staticCount = t, n;
}
function ul(e = "", t = !1) {
  return t ? (Q(), Be(we, null, e)) : J(we, null, e);
}
function Me(e) {
  return e == null || typeof e == "boolean" ? J(we) : O(e) ? J(
    be,
    null,
    e.slice()
  ) : typeof e == "object" ? ze(e) : J(gs, null, String(e));
}
function ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ge(e);
}
function _s(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (O(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), _s(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(wn in t) ? t._ctx = fe : r === 3 && fe && (fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    M(t) ? (t = { default: t, _ctx: fe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [cl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function lo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = dn([t.class, s.class]));
      else if (r === "style")
        t.style = zt([t.style, s.style]);
      else if (hn(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(O(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
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
const fl = no();
let al = 0;
function dl(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || fl, o = {
    uid: al++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new vr(!0),
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
    propsOptions: Xr(s, r),
    emitsOptions: Br(s, r),
    emit: null,
    emitted: null,
    propsDefaults: k,
    inheritAttrs: s.inheritAttrs,
    ctx: k,
    data: k,
    props: k,
    attrs: k,
    slots: k,
    refs: k,
    setupState: k,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Ci.bind(null, o), e.ce && e.ce(o), o;
}
let ne = null;
const hl = () => ne || fe, Pt = (e) => {
  ne = e, e.scope.on();
}, ht = () => {
  ne && ne.scope.off(), ne = null;
};
function co(e) {
  return e.vnode.shapeFlag & 4;
}
let Ut = !1;
function pl(e, t = !1) {
  Ut = t;
  const { props: n, children: s } = e.vnode, r = co(e);
  qi(e, n, r, t), Ji(e, s);
  const o = r ? gl(e, t) : void 0;
  return Ut = !1, o;
}
function gl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Mr(new Proxy(e.ctx, ji));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? ml(e) : null;
    Pt(e), $t();
    const o = qe(s, e, 0, [e.props, r]);
    if (Ot(), ht(), pr(o)) {
      if (o.then(ht, ht), t)
        return o.then((i) => {
          Ws(e, i, t);
        }).catch((i) => {
          mn(i, e, 0);
        });
      e.asyncDep = o;
    } else
      Ws(e, o, t);
  } else
    uo(e, t);
}
function Ws(e, t, n) {
  M(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) && (e.setupState = Ar(t)), uo(e, n);
}
let Zs;
function uo(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Zs && !s.render) {
      const r = s.template || hs(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: u } = s, a = te(te({
          isCustomElement: o,
          delimiters: l
        }, i), u);
        s.render = Zs(r, a);
      }
    }
    e.render = s.render || Te;
  }
  Pt(e), $t(), Ui(e), Ot(), ht();
}
function _l(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return me(e, "get", "$attrs"), t[n];
    }
  });
}
function ml(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = _l(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function xn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ar(Mr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in un)
          return un[n](e);
      }
    }));
}
function vl(e) {
  return M(e) && "__vccOpts" in e;
}
const Et = (e, t) => hi(e, t, Ut);
function Cl(e, t, n) {
  const s = arguments.length;
  return s === 2 ? K(t) && !O(t) ? an(t) ? J(e, null, [t]) : J(e, t) : J(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && an(n) && (n = [n]), J(e, t, n));
}
const bl = "3.2.40", yl = "http://www.w3.org/2000/svg", ft = typeof document < "u" ? document : null, qs = ft && /* @__PURE__ */ ft.createElement("template"), wl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t ? ft.createElementNS(yl, e) : ft.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => ft.createTextNode(e),
  createComment: (e) => ft.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ft.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      qs.innerHTML = s ? `<svg>${e}</svg>` : e;
      const l = qs.content;
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
function xl(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function El(e, t, n) {
  const s = e.style, r = ce(n);
  if (n && !r) {
    for (const o in n)
      Wn(s, o, n[o]);
    if (t && !ce(t))
      for (const o in t)
        n[o] == null && Wn(s, o, "");
  } else {
    const o = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = o);
  }
}
const Ys = /\s*!important$/;
function Wn(e, t, n) {
  if (O(n))
    n.forEach((s) => Wn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Fl(e, t);
    Ys.test(n) ? e.setProperty(Se(s), n.replace(Ys, ""), "important") : e[s] = n;
  }
}
const Qs = ["Webkit", "Moz", "ms"], Mn = {};
function Fl(e, t) {
  const n = Mn[t];
  if (n)
    return n;
  let s = Qe(t);
  if (s !== "filter" && s in e)
    return Mn[t] = s;
  s = mr(s);
  for (let r = 0; r < Qs.length; r++) {
    const o = Qs[r] + s;
    if (o in e)
      return Mn[t] = o;
  }
  return t;
}
const Js = "http://www.w3.org/1999/xlink";
function Tl(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Js, t.slice(6, t.length)) : e.setAttributeNS(Js, t, n);
  else {
    const o = bo(t);
    n == null || o && !ar(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function Pl(e, t, n, s, r, o, i) {
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
    u === "boolean" ? n = ar(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(t);
}
const [fo, $l] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let Zn = 0;
const Ol = /* @__PURE__ */ Promise.resolve(), Il = () => {
  Zn = 0;
}, Ml = () => Zn || (Ol.then(Il), Zn = fo());
function Al(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ll(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Hl(e, t, n, s, r = null) {
  const o = e._vei || (e._vei = {}), i = o[t];
  if (s && i)
    i.value = s;
  else {
    const [l, u] = Rl(t);
    if (s) {
      const a = o[t] = Sl(s, r);
      Al(e, l, a, u);
    } else
      i && (Ll(e, l, i, u), o[t] = void 0);
  }
}
const Xs = /(?:Once|Passive|Capture)$/;
function Rl(e) {
  let t;
  if (Xs.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Xs); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Se(e.slice(2)), t];
}
function Sl(e, t) {
  const n = (s) => {
    const r = s.timeStamp || fo();
    ($l || r >= n.attached - 1) && ye(Nl(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = Ml(), n;
}
function Nl(e, t) {
  if (O(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return t;
}
const Gs = /^on[a-z]/, Dl = (e, t, n, s, r = !1, o, i, l, u) => {
  t === "class" ? xl(e, s, r) : t === "style" ? El(e, n, s) : hn(t) ? Jn(t) || Hl(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Bl(e, t, s, r)) ? Pl(e, t, s, o, i, l, u) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Tl(e, t, s, r));
};
function Bl(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && Gs.test(t) && M(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Gs.test(t) && ce(n) ? !1 : t in e;
}
function pt(e, t) {
  const n = he(e);
  class s extends ms {
    constructor(o) {
      super(n, o, t);
    }
  }
  return s.def = n, s;
}
const kl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class ms extends kl {
  constructor(t, n = {}, s) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this._connected = !0, this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    this._connected = !1, Rr(() => {
      this._connected || (ir(null, this.shadowRoot), this._instance = null);
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
      const { props: r, styles: o } = s, i = !O(r), l = r ? i ? Object.keys(r) : r : [];
      let u;
      if (i)
        for (const a in this._props) {
          const d = r[a];
          (d === Number || d && d.type === Number) && (this._props[a] = on(this._props[a]), (u || (u = /* @__PURE__ */ Object.create(null)))[a] = !0);
        }
      this._numberProps = u;
      for (const a of Object.keys(this))
        a[0] !== "_" && this._setProp(a, this[a], !0, !1);
      for (const a of l.map(Qe))
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
    this._numberProps && this._numberProps[t] && (n = on(n)), this._setProp(Qe(t), n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, s = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), s && (n === !0 ? this.setAttribute(Se(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Se(t), n + "") : n || this.removeAttribute(Se(t))));
  }
  _update() {
    ir(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = J(this._def, te({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, n.emit = (r, ...o) => {
        this.dispatchEvent(new CustomEvent(r, {
          detail: o
        }));
      };
      let s = this;
      for (; s = s && (s.parentNode || s.host); )
        if (s instanceof ms) {
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
const Ue = "transition", Lt = "animation", gt = (e, { slots: t }) => Cl(Kr, Vl(e), t);
gt.displayName = "Transition";
const ao = {
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
gt.props = /* @__PURE__ */ te({}, Kr.props, ao);
const ot = (e, t = []) => {
  O(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, er = (e) => e ? O(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Vl(e) {
  const t = {};
  for (const E in e)
    E in ao || (t[E] = e[E]);
  if (e.css === !1)
    return t;
  const { name: n = "v", type: s, duration: r, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: u = o, appearActiveClass: a = i, appearToClass: d = l, leaveFromClass: m = `${n}-leave-from`, leaveActiveClass: b = `${n}-leave-active`, leaveToClass: P = `${n}-leave-to` } = e, H = jl(r), $ = H && H[0], D = H && H[1], { onBeforeEnter: L, onEnter: ae, onEnterCancelled: Z, onLeave: z, onLeaveCancelled: se, onBeforeAppear: Ve = L, onAppear: Pe = ae, onAppearCancelled: A = Z } = t, q = (E, W, pe) => {
    it(E, W ? d : l), it(E, W ? a : i), pe && pe();
  }, U = (E, W) => {
    E._isLeaving = !1, it(E, m), it(E, P), it(E, b), W && W();
  }, re = (E) => (W, pe) => {
    const Mt = E ? Pe : ae, ee = () => q(W, E, pe);
    ot(Mt, [W, ee]), tr(() => {
      it(W, E ? u : o), Ke(W, E ? d : l), er(Mt) || nr(W, s, $, ee);
    });
  };
  return te(t, {
    onBeforeEnter(E) {
      ot(L, [E]), Ke(E, o), Ke(E, i);
    },
    onBeforeAppear(E) {
      ot(Ve, [E]), Ke(E, u), Ke(E, a);
    },
    onEnter: re(!1),
    onAppear: re(!0),
    onLeave(E, W) {
      E._isLeaving = !0;
      const pe = () => U(E, W);
      Ke(E, m), zl(), Ke(E, b), tr(() => {
        !E._isLeaving || (it(E, m), Ke(E, P), er(z) || nr(E, s, D, pe));
      }), ot(z, [E, pe]);
    },
    onEnterCancelled(E) {
      q(E, !1), ot(Z, [E]);
    },
    onAppearCancelled(E) {
      q(E, !0), ot(A, [E]);
    },
    onLeaveCancelled(E) {
      U(E), ot(se, [E]);
    }
  });
}
function jl(e) {
  if (e == null)
    return null;
  if (K(e))
    return [An(e.enter), An(e.leave)];
  {
    const t = An(e);
    return [t, t];
  }
}
function An(e) {
  return on(e);
}
function Ke(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(t);
}
function it(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function tr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ul = 0;
function nr(e, t, n, s) {
  const r = e._endId = ++Ul, o = () => {
    r === e._endId && s();
  };
  if (n)
    return setTimeout(o, n);
  const { type: i, timeout: l, propCount: u } = Kl(e, t);
  if (!i)
    return s();
  const a = i + "end";
  let d = 0;
  const m = () => {
    e.removeEventListener(a, b), o();
  }, b = (P) => {
    P.target === e && ++d >= u && m();
  };
  setTimeout(() => {
    d < u && m();
  }, l + 1), e.addEventListener(a, b);
}
function Kl(e, t) {
  const n = window.getComputedStyle(e), s = (H) => (n[H] || "").split(", "), r = s(Ue + "Delay"), o = s(Ue + "Duration"), i = sr(r, o), l = s(Lt + "Delay"), u = s(Lt + "Duration"), a = sr(l, u);
  let d = null, m = 0, b = 0;
  t === Ue ? i > 0 && (d = Ue, m = i, b = o.length) : t === Lt ? a > 0 && (d = Lt, m = a, b = u.length) : (m = Math.max(i, a), d = m > 0 ? i > a ? Ue : Lt : null, b = d ? d === Ue ? o.length : u.length : 0);
  const P = d === Ue && /\b(transform|all)(,|$)/.test(n[Ue + "Property"]);
  return {
    type: d,
    timeout: m,
    propCount: b,
    hasTransform: P
  };
}
function sr(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => rr(n) + rr(e[s])));
}
function rr(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function zl() {
  return document.body.offsetHeight;
}
const Wl = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ht(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Ht(e, !0), s.enter(e)) : s.leave(e, () => {
      Ht(e, !1);
    }) : Ht(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ht(e, t);
  }
};
function Ht(e, t) {
  e.style.display = t ? e._vod : "none";
}
const Zl = /* @__PURE__ */ te({ patchProp: Dl }, wl);
let or;
function ql() {
  return or || (or = tl(Zl));
}
const ir = (...e) => {
  ql().render(...e);
};
function vs(e) {
  Object.keys(e).forEach((t) => {
    Ft.prototype[t] = e[t];
  });
}
function En(e) {
  let t;
  const n = (o) => {
    t = o;
  };
  return { moduleFunc: (o) => (e({ player: o, onModuleDispose: n }), o), dispose: () => {
    t && t();
  } };
}
function Yl() {
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
let Ql = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function Jl(e = "") {
  return `${e}${e ? "-" : ""}${Ql(10)}`;
}
class Xl {
  constructor(t) {
    nt(this, "_hooks", /* @__PURE__ */ new Set());
    nt(this, "_player");
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
var Kt = /* @__PURE__ */ ((e) => (e.CREATED = "created", e.BEFORE_DISPOSED = "beforeDisposed", e))(Kt || {});
const Gl = (e) => (t, n) => {
  t._hooks[e].dispatch(n);
}, ec = En(({ player: e }) => {
  const t = {};
  Object.values(Kt).forEach((n) => {
    t[n] = new Xl(e);
  }), vs({
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
      Object.values(Kt).forEach((n) => {
        t[n].hooks.clear();
      });
    }
  });
}), tc = Gl("beforeDisposed");
var lr;
const Cs = typeof window < "u", nc = (e) => typeof e == "string", Ln = () => {
};
Cs && ((lr = window == null ? void 0 : window.navigator) == null ? void 0 : lr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function bs(e) {
  return typeof e == "function" ? e() : Xe(e);
}
function sc(e, t) {
  function n(...s) {
    e(() => t.apply(this, s), { fn: t, thisArg: this, args: s });
  }
  return n;
}
function rc(e, t = !0, n = !0) {
  let s = 0, r, o = !0;
  const i = () => {
    r && (clearTimeout(r), r = void 0);
  };
  return (u) => {
    const a = bs(e), d = Date.now() - s;
    if (i(), a <= 0)
      return s = Date.now(), u();
    d > a && (n || !o) ? (s = Date.now(), u()) : t && (r = setTimeout(() => {
      s = Date.now(), o = !0, i(), u();
    }, a)), !n && !r && (r = setTimeout(() => o = !0, a)), o = !1;
  };
}
function oc(e) {
  return e;
}
function ho(e) {
  return Lo() ? (Ho(e), !0) : !1;
}
function ic(e, t = 200, n = !1, s = !0) {
  return sc(rc(t, n, s), e);
}
function lc(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, r = Le(!1);
  let o = null;
  function i() {
    o && (clearTimeout(o), o = null);
  }
  function l() {
    r.value = !1, i();
  }
  function u(...a) {
    i(), r.value = !0, o = setTimeout(() => {
      r.value = !1, o = null, e(...a);
    }, bs(t));
  }
  return s && (r.value = !0, Cs && u()), ho(l), {
    isPending: r,
    start: u,
    stop: l
  };
}
function cc(e) {
  var t;
  const n = bs(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const uc = Cs ? window : void 0;
function Ye(...e) {
  let t, n, s, r;
  if (nc(e[0]) ? ([n, s, r] = e, t = uc) : [t, n, s, r] = e, !t)
    return Ln;
  let o = Ln;
  const i = xt(() => cc(t), (u) => {
    o(), u && (u.addEventListener(n, s, r), o = () => {
      u.removeEventListener(n, s, r), o = Ln;
    });
  }, { immediate: !0, flush: "post" }), l = () => {
    i(), o();
  };
  return ho(l), l;
}
const qn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Yn = "__vueuse_ssr_handlers__";
qn[Yn] = qn[Yn] || {};
qn[Yn];
function fc(e) {
  const t = Le(!1);
  return Ye(e, "mouseenter", () => t.value = !0), Ye(e, "mouseleave", () => t.value = !1), t;
}
var cr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(cr || (cr = {}));
var ac = Object.defineProperty, ur = Object.getOwnPropertySymbols, dc = Object.prototype.hasOwnProperty, hc = Object.prototype.propertyIsEnumerable, fr = (e, t, n) => t in e ? ac(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, pc = (e, t) => {
  for (var n in t || (t = {}))
    dc.call(t, n) && fr(e, n, t[n]);
  if (ur)
    for (var n of ur(t))
      hc.call(t, n) && fr(e, n, t[n]);
  return e;
};
const gc = {
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
pc({
  linear: oc
}, gc);
function _c(e) {
  const t = Mo(), n = Le(!0), s = fc(e.$containerEl), r = (o = !n) => {
    n.value = o;
  };
  return t.run(() => {
    const { start: o, stop: i } = lc(() => r(!1), 1e3);
    xt(s, () => {
      if (e.$el.paused)
        return r(!0);
      r(s.value);
    });
    const l = () => {
      i(), r(!0);
    }, u = ic(() => o(), 1e3);
    Ye(e.$el, oe.TimeUpdate, u), Ye(e.$el, oe.Pause, l), Ye(e.$el, oe.MouseMove, l);
  }), tc(e, () => t.stop()), { isControlVisible: n };
}
const mc = En(({ player: e }) => {
  const t = /* @__PURE__ */ new Map();
  vs({
    on(n, s) {
      return Array.isArray(n) || (n = [n]), n.forEach((r) => {
        t.set(s, Ye(e.$el, r, s));
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
var oe = /* @__PURE__ */ ((e) => (e.Created = "created", e.TimeUpdate = "timeupdate", e.LoadStart = "loadstart", e.Play = "play", e.Ended = "ended", e.Pause = "pause", e.Playing = "playing", e.DurationChange = "durationchange", e.VolumeChange = "volumechange", e.FullscreenChange = "fullscreenchange", e.MozFullscreenChange = "mozfullscreenchange", e.WebKitFullscreenChange = "webkitfullscreenchange", e.MouseMove = "mousemove", e))(oe || {});
const vc = [
  "fullscreenchange",
  "mozfullscreenchange",
  "webkitfullscreenchange"
], Cc = En(({ player: e, onModuleDispose: t }) => {
  const n = new Array();
  vc.forEach((s) => {
    const r = Ye(e.$containerEl, s, () => {
      e.isFullscreen.value = !e.isFullscreen.value;
    });
    n.push(r);
  }), vs({
    isFullscreen: Le(!1),
    toFullScreen() {
      (e.$containerEl.requestFullscreen || e.$containerEl.mozRequestFullScreen || e.$containerEl.webkitRequestFullscreen || e.$containerEl.msRequestFullscreen).call(e.$containerEl);
    },
    fromFullScreen() {
      (document.exitFullscreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.msExitFullscreen).call(document);
    }
  }), t(() => n.forEach((s) => s()));
});
function Zt(e) {
  const t = new Array(), n = (s, r) => {
    const o = Wt(e.$el);
    return ai((i, l) => {
      let u = o[s];
      const a = () => {
        u = o[s], l();
      };
      return r.forEach((d) => {
        t.push(Ye(o, d, a));
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
const bc = En(({ player: e, onModuleDispose: t }) => {
  const { createReactive: n, cleanupListenerFns: s } = Zt(e), r = n("currentTime", [oe.TimeUpdate]), o = n("duration", [oe.DurationChange]), i = n("ended", [oe.Ended]), l = n("volume", [oe.VolumeChange]), u = n("muted", [oe.VolumeChange]), a = n("paused", [oe.Pause, oe.Playing]), d = n("played", [oe.Pause, oe.Playing]);
  e.reactive = {
    media: Wt(e.$el),
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
    nt(this, "id");
    nt(this, "$el");
    nt(this, "$containerEl");
    this.id = Jl("player"), this.$el = t, this.$containerEl = n, We.modules_.forEach((s) => s.moduleFunc(this)), this._triggerHook(Kt.CREATED);
  }
  static installModule(t) {
    !!t && We.modules_.indexOf(t) < 0 && We.modules_.push(t);
  }
  static use(t) {
    return t.forEach((n) => We.installModule(n)), We;
  }
  dispose() {
    We.modules_.forEach((t) => t.dispose()), this._triggerHook(Kt.BEFORE_DISPOSED), this._clearHooks();
  }
  togglePlay() {
    this.$el.paused || this.$el.ended ? this.$el.play() : this.$el.pause();
  }
};
let Ft = We;
nt(Ft, "modules_", []);
Ft.use([mc, bc, Cc, ec]);
const yc = ["id", "src"], wc = { class: "lpr__container" }, xc = /* @__PURE__ */ he({
  __name: "VideoPlayer",
  props: {
    src: { default: "" }
  },
  emits: [oe.Created],
  setup(e, { emit: t }) {
    const n = Le(), s = Le(), r = Le(), o = Le(!0);
    yn(() => {
      if (!s.value || !r.value)
        return;
      const l = new Ft(s.value, r.value);
      n.value = l, Vr("player", l), t(oe.Created, l);
      const { isControlVisible: u } = _c(l);
      xt(u, (a) => {
        o.value = a;
      });
    }), ds(() => {
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
        class: dn([{ "lpr--fullscreen": (a = n.value) == null ? void 0 : a.isFullscreen }, "lpr"])
      }, [
        G("video", lo({
          id: n.value && n.value.id,
          ref_key: "mediaRef",
          ref: s,
          src: e.src,
          class: "lpr__video"
        }, l.$attrs, { onClick: i }), null, 16, yc),
        J(gt, null, {
          default: It(() => [
            Bi(G("div", wc, [
              Vi(l.$slots, "default")
            ], 512), [
              [Wl, o.value]
            ])
          ]),
          _: 3
        })
      ], 2);
    };
  }
}), Ec = `:host{--lpr-player-border-radius: 16px;--lpr-player-padding: min(3.33%, 32px)}*{font-size:0;box-sizing:border-box}.lpr{position:relative;overflow:hidden;box-sizing:border-box;width:100%;height:100%;margin:0;padding:0;border:0 solid transparent;border-radius:var(--lpr-player-border-radius)}.lpr.lpr--fullscreen{border-radius:0}.lpr.lpr--fullscreen .lpr__video{object-fit:contain}.lpr__video{font-size:0;width:100%;height:100%;margin:0;padding:0;object-fit:contain}.lpr__container{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;align-items:center;box-sizing:border-box;padding:var(--lpr-player-padding);pointer-events:none;gap:14px;grid-template-areas:". . . . ." "play volume time . fullscreen" "timeline timeline timeline timeline timeline";grid-template-columns:auto auto auto 1fr auto;grid-template-rows:1fr auto auto}.lpr video::-webkit-media-controls-overlay-enclosure{display:none!important}.lpr video::-webkit-media-controls-enclosure{display:none!important}.lpr video::-webkit-media-controls{display:none!important}.v-enter-active,.v-leave-active{transition:all .4s ease-out}.v-enter-from,.v-leave-to{transition-delay:2s;transform:translateY(50px);opacity:0}
`, _t = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, Fc = /* @__PURE__ */ _t(xc, [["styles", [Ec]]]), Tc = ["fill", "height", "width"], Pc = /* @__PURE__ */ G("path", {
  "clip-rule": "evenodd",
  d: "M11.306 0.00565815C12.6494 -0.0610802 13.9211 0.470631 15.1762 1.17438C16.4324 1.87865 17.9584 2.92779 19.853 4.23034L19.93 4.28328L37.1854 16.1463L37.2573 16.1958C38.7492 17.2215 39.9703 18.061 40.8785 18.8144C41.8057 19.5838 42.6005 20.4155 43.0401 21.4933C43.6959 23.1002 43.6959 24.8999 43.0401 26.5066C42.6005 27.5844 41.8057 28.4161 40.8785 29.1855C39.9703 29.9391 38.7492 30.7785 37.2573 31.8042L37.1854 31.8536L19.93 43.7167L19.853 43.7695L19.8528 43.7698C17.9583 45.0722 16.4324 46.1213 15.1762 46.8256C13.9211 47.5294 12.6494 48.061 11.306 47.9944C9.35505 47.8974 7.5459 46.9458 6.36078 45.3929C5.54474 44.3238 5.26242 42.9745 5.13123 41.5415C4.99995 40.1076 4.99998 38.2558 5 35.9568V35.9566V35.863V12.1369V12.0432V12.043C4.99998 9.74407 4.99995 7.89234 5.13123 6.45833C5.26242 5.02534 5.54474 3.67617 6.36078 2.60701C7.5459 1.05424 9.35505 0.102581 11.306 0.00565815Z",
  "fill-rule": "evenodd"
}, null, -1), $c = [
  Pc
], po = /* @__PURE__ */ he({
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
    }, $c, 8, Tc));
  }
}), Oc = ["src"], Ic = /* @__PURE__ */ he({
  __name: "Poster",
  props: {
    src: { default: "" }
  },
  setup(e) {
    const t = Ne("player"), n = Le(!0);
    yn(() => {
      t.once(oe.Playing, () => s(!1));
    });
    const s = (o = !n.value) => {
      n.value = o;
    }, r = () => {
      t == null || t.$el.play();
    };
    return (o, i) => (Q(), Be(gt, null, {
      default: It(() => [
        n.value ? (Q(), ve("div", {
          key: 0,
          class: "lpr-poster__container",
          onClick: r
        }, [
          G("img", {
            src: e.src,
            alt: "lpr-poster",
            class: "lpr-poster"
          }, null, 8, Oc),
          J(po, {
            class: "lpr-poster__icon",
            color: "#fff",
            height: "56",
            width: "56"
          })
        ])) : ul("", !0)
      ]),
      _: 1
    }));
  }
}), Mc = `:host{--lpr-poster-background: #0a0a0a;--lpr-poster-brightness: 60%}.lpr-poster{width:100%;height:100%;filter:brightness(var(--lpr-poster-brightness));object-fit:cover}.lpr-poster__container{position:absolute;z-index:2;top:0;left:0;width:100%;height:100%;cursor:pointer;transition:all ease-in-out .4s;pointer-events:all;background:var(--lpr-poster-background)}.lpr-poster__container:hover{transition:all ease-in-out .4s;transform:scale(1.05)}.lpr-poster__icon{position:absolute;z-index:3;top:50%;left:50%;transition:all ease-in-out .4s;transform:translate(-50%,-50%);opacity:.85}.lpr-poster__icon:hover{transition:all ease-in-out .4s;opacity:1}.v-enter-active,.v-leave-active{transition:opacity .5s ease}.v-enter-from,.v-leave-to{opacity:0}
`, Ac = /* @__PURE__ */ _t(Ic, [["styles", [Mc]]]), Lc = { class: "lpr-timeline__container" }, Hc = /* @__PURE__ */ he({
  __name: "TimeLine",
  setup(e) {
    const t = Ne("player"), { currentTime: n, duration: s } = Zt(t), r = Et(() => `${n.value / s.value * 100}%`), o = (i) => {
      const { clientX: l, target: u } = i, { left: a, width: d } = u.getBoundingClientRect();
      n.value = s.value * ((l - a) / d);
    };
    return (i, l) => (Q(), ve("div", Lc, [
      G("div", {
        class: "lpr-timeline",
        onClick: o
      }),
      G("div", {
        style: zt({ width: Xe(r) }),
        class: "lpr-timeline__progress"
      }, null, 4)
    ]));
  }
}), Rc = `:host{grid-area:timeline;--timeline-border-radius: 12px;--timeline-color: rgba(255, 255, 255, 80%);--timeline-height: 6px;--timeline-progress-color: #00b9ae}.lpr-timeline__container{position:relative;display:block;height:var(--timeline-height)}.lpr-timeline,.lpr-timeline__progress{position:absolute;top:0;right:0;bottom:0;left:0;height:var(--timeline-height);border:0 solid transparent;border-radius:var(--timeline-border-radius)}.lpr-timeline{cursor:pointer;pointer-events:all;opacity:.7;background-color:var(--timeline-color)}.lpr-timeline__progress{overflow:visible;width:0;resize:horizontal;pointer-events:none;background-color:var(--timeline-progress-color)}
`, Sc = /* @__PURE__ */ _t(Hc, [["styles", [Rc]]]), Nc = { class: "lpr-time" }, Dc = /* @__PURE__ */ he({
  __name: "Time",
  setup(e) {
    const t = Ne("player"), { toHMSStrings: n } = Yl(), { currentTime: s, duration: r } = Zt(t), o = Et(() => r.value < 3600), i = Et(() => {
      const { h: u, m: a, s: d } = n(s.value);
      return o ? `${a}:${d}` : `${u}:${a}:${d}`;
    }), l = Et(() => {
      const { h: u, m: a, s: d } = n(r.value);
      return o ? `${a}:${d}` : `${u}:${a}:${d}`;
    });
    return (u, a) => (Q(), ve("div", Nc, Ts(Xe(i)) + " / " + Ts(Xe(l)), 1));
  }
}), Bc = `:host{grid-area:time}.lpr-time{font-size:18px;font-weight:600;color:#fff}
`, kc = /* @__PURE__ */ _t(Dc, [["styles", [Bc]]]), Vc = ["fill", "height", "width"], jc = /* @__PURE__ */ G("path", {
  "clip-rule": "evenodd",
  d: "M10.3173 1.51051e-06H10.2462H9.75385H9.68268H9.68261H9.68256C8.70941 -3.04895e-05 7.86991 -5.51481e-05 7.17841 0.0564421C6.44854 0.116073 5.72261 0.247733 5.02405 0.603662C3.98193 1.13465 3.13465 1.98193 2.60366 3.02405C2.24773 3.72261 2.11607 4.44854 2.05644 5.17841C1.99994 5.86991 1.99997 6.70941 2 7.68256V7.68261V7.68266V7.75385V40.2462V40.3173V40.3175C1.99997 41.2906 1.99994 42.1302 2.05644 42.8217C2.11607 43.5515 2.24773 44.2774 2.60366 44.976C3.13465 46.018 3.98193 46.8655 5.02405 47.3964C5.72261 47.7524 6.44854 47.8838 7.17841 47.9436C7.86986 48 8.70934 48 9.68241 48H9.68266H9.75385H10.2462H10.3174H10.3176C11.2907 48 12.1301 48 12.8216 47.9436C13.5515 47.8838 14.2774 47.7524 14.976 47.3964C16.0181 46.8655 16.8654 46.018 17.3964 44.976C17.7523 44.2774 17.8839 43.5515 17.9436 42.8217C18.0001 42.13 18 41.2906 18 40.3173V40.2462V7.75385V7.68268C18 6.70949 18.0001 5.86993 17.9436 5.17841C17.8839 4.44854 17.7523 3.72261 17.3964 3.02405C16.8654 1.98193 16.0181 1.13465 14.976 0.603662C14.2774 0.247733 13.5515 0.116073 12.8216 0.0564421C12.1301 -5.51481e-05 11.2906 -3.04895e-05 10.3174 1.51051e-06H10.3174H10.3173ZM37.3942 1.51051e-06H37.3231H36.8308H36.7596H36.7594C35.7863 -3.04895e-05 34.9467 -5.51481e-05 34.2553 0.0564421C33.5254 0.116073 32.7995 0.247733 32.1009 0.603662C31.059 1.13465 30.2117 1.98193 29.6805 3.02405C29.3246 3.72261 29.1931 4.44854 29.1333 5.17841C29.0769 5.86991 29.0769 6.70944 29.0769 7.68261V7.68266V7.75385V40.2462V40.3173C29.0769 41.2906 29.0769 42.1302 29.1333 42.8217C29.1931 43.5515 29.3246 44.2774 29.6805 44.976C30.2117 46.018 31.059 46.8655 32.1009 47.3964C32.7995 47.7524 33.5254 47.8838 34.2553 47.9436C34.9467 48 35.7863 48 36.7594 48H36.7596H36.8308H37.3231H37.3942H37.3945C38.3675 48 39.2071 48 39.8986 47.9436C40.6284 47.8838 41.3543 47.7524 42.0529 47.3964C43.0949 46.8655 43.9424 46.018 44.4734 44.976C44.8293 44.2774 44.9607 43.5515 45.0206 42.8217C45.0769 42.13 45.0769 41.2906 45.0769 40.3173V40.2462V7.75385V7.68268C45.0769 6.70949 45.0769 5.86993 45.0206 5.17841C44.9607 4.44854 44.8293 3.72261 44.4734 3.02405C43.9424 1.98193 43.0949 1.13465 42.0529 0.603662C41.3543 0.247733 40.6284 0.116073 39.8986 0.0564421C39.2071 -5.51481e-05 38.3675 -3.04895e-05 37.3945 1.51051e-06H37.3942Z",
  "fill-rule": "evenodd"
}, null, -1), Uc = [
  jc
], Kc = /* @__PURE__ */ he({
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
    }, Uc, 8, Vc));
  }
}), zc = /* @__PURE__ */ he({
  __name: "PlayControl",
  setup(e) {
    const t = Ne("player"), { paused: n } = Zt(t), s = () => t == null ? void 0 : t.togglePlay();
    return (r, o) => (Q(), ve("div", {
      class: "lpr-play",
      onClick: s
    }, [
      J(gt, null, {
        default: It(() => [
          Xe(n) ? (Q(), Be(po, {
            key: 0,
            class: "lpr-play__icon",
            color: "#fff",
            height: "22",
            width: "22"
          })) : (Q(), Be(Kc, {
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
}), Wc = `:host{grid-area:play}.lpr-play{position:relative;display:inline-block;width:22px;height:22px;cursor:pointer;pointer-events:all}.lpr-play__icon{position:absolute}.v-enter-active,.v-leave-active{transition:all .25s ease-out}.v-enter-from{transform:translateY(-30px);opacity:0}.v-leave-to{transform:translateY(30px);opacity:0}
`, Zc = /* @__PURE__ */ _t(zc, [["styles", [Wc]]]), qc = ["fill", "height", "width"], Yc = /* @__PURE__ */ G("path", {
  "clip-rule": "evenodd",
  d: "M5.0025 31.0221C4.92944 29.9497 4.07482 29 2.99995 29C1.86479 29 0.924696 29.8673 0.999954 31C0.999954 44 6.18358 49.0044 19 49C20.1327 49.0753 21 48.1352 21 47C21 45.9251 20.0724 45.0731 19 45C16.9274 44.8588 14.9975 44.8328 13.5 44.5C10.7878 43.8972 9.0679 43.0679 8 42C6.9321 40.9321 6.10278 39.2123 5.5 36.5C5.1672 35.0025 5.14369 33.0947 5.0025 31.0221ZM45 31C45.0731 29.9276 45.9251 29 47 29C48.1352 29 49.0469 29.9507 48.9717 31.0833C49 44 44.1212 48.9956 31.0118 48.9956C29.8791 49.0709 28.9284 48.1591 28.9284 47.0239C28.9284 45.9491 29.7779 45.0705 30.8503 44.9975C32.9229 44.8563 35.0025 44.8328 36.5 44.5C39.2123 43.8972 40.9321 43.0679 42 42C43.0679 40.9321 43.8972 39.2123 44.5 36.5C44.8328 35.0025 44.8588 33.0726 45 31ZM49 25.1777C49 25.1471 49 25.1165 49 25.0859C49 25.0552 49 25.0246 49 24.994V25.1777ZM49 19C49.0753 20.1327 48.1352 21 47 21C45.9251 21 45.0731 20.0724 45 19C44.8588 16.9274 44.8328 15.4975 44.5 14C43.8972 11.2877 43.0679 9.0679 42 8C40.9321 6.93211 38.7123 6.10277 36 5.5C34.5025 5.1672 33.0726 5.14119 31 5C29.9276 4.92695 29 4.07487 29 3C29 1.86484 29.8673 0.924743 31 1C44 1 49 6 49 19ZM5.00001 19C4.92695 20.0723 4.07488 20.9999 3.00001 20.9999C1.86485 20.9999 0.929098 20.1208 1.00436 18.9882C1.00436 5.87876 5.89065 0.823767 19 0.999919C20.1327 0.92466 21 1.86476 21 2.99992C21 4.07479 20.0724 4.92691 19 4.99996C16.9274 5.14115 14.9975 5.16716 13.5 5.49996C10.7878 6.10273 9.0679 6.93207 8.00001 7.99996C6.93211 9.06786 6.10278 11.2877 5.50001 14C5.16721 15.4974 5.1412 16.9273 5.00001 19ZM24.9141 0.99996L24.952 0.999965H24.8762L24.9141 0.99996Z",
  "fill-rule": "evenodd"
}, null, -1), Qc = [
  Yc
], Jc = /* @__PURE__ */ he({
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
    }, Qc, 8, qc));
  }
}), Xc = ["fill", "height", "width"], Gc = /* @__PURE__ */ G("g", { "clip-path": "url(#clip0_18_214)" }, [
  /* @__PURE__ */ G("path", {
    "clip-rule": "evenodd",
    d: "M19.1538 43C18.1342 43 17.3077 42.1734 17.3077 41.1539V33.3033L3.15158 47.4593C2.43062 48.1802 1.26169 48.1802 0.540726 47.4593C-0.180242 46.7383 -0.180242 45.5695 0.540726 44.8485L14.6968 30.6923H6.84614C5.82654 30.6923 4.99998 29.8657 4.99998 28.8462C4.99998 27.8266 5.82654 27 6.84614 27H19.1538H21V28.8462V41.1539C21 42.1734 20.1734 43 19.1538 43ZM47.4593 3.15158C48.1802 2.43062 48.1802 1.26169 47.4593 0.540726C46.7383 -0.180242 45.5695 -0.180242 44.8485 0.540726L30.6923 14.6968V6.84614C30.6923 5.82654 29.8657 4.99998 28.8462 4.99998C27.8266 4.99998 27 5.82654 27 6.84614V19.1538V21H28.8462H41.1539C42.1734 21 43 20.1734 43 19.1538C43 18.1342 42.1734 17.3077 41.1539 17.3077H33.3033L47.4593 3.15158Z",
    "fill-rule": "evenodd"
  })
], -1), eu = /* @__PURE__ */ G("defs", null, [
  /* @__PURE__ */ G("clipPath", { id: "clip0_18_214" }, [
    /* @__PURE__ */ G("rect", {
      height: "48",
      width: "48"
    })
  ])
], -1), tu = [
  Gc,
  eu
], nu = /* @__PURE__ */ he({
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
    }, tu, 8, Xc));
  }
}), su = /* @__PURE__ */ he({
  __name: "FullscreenControl",
  setup(e) {
    const t = Le(Ne("player")), n = () => {
      !t || (t.value.isFullscreen ? t.value.fromFullScreen() : t.value.toFullScreen());
    };
    return (s, r) => (Q(), ve("div", {
      class: "lpr-fullscreen",
      onClick: n
    }, [
      J(gt, null, {
        default: It(() => {
          var o;
          return [
            (o = t.value) != null && o.isFullscreen ? (Q(), Be(nu, {
              key: 1,
              class: "lpr-fullscreen__icon",
              color: "#fff",
              height: "22px",
              width: "22px"
            })) : (Q(), Be(Jc, {
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
}), ru = `:host{grid-area:fullscreen}.lpr-fullscreen{position:relative;display:inline-block;align-self:flex-end;width:22px;height:22px;cursor:pointer;pointer-events:all}.lpr-fullscreen__icon{position:absolute;transition:all .25s ease-in}.lpr-fullscreen__icon:hover{transition:all .25s ease-in;transform:scale(1.2)}.v-enter-active,.v-leave-active{transition:all .25s ease-out}.v-enter-from{transform:scale(0);opacity:0}.v-leave-to{transform:scale(1);opacity:0}
`, ou = /* @__PURE__ */ _t(su, [["styles", [ru]]]), iu = ["fill", "height", "width"], lu = /* @__PURE__ */ io('<g clip-path="url(#clip0_19_95)"><path clip-rule="evenodd" d="M25.6366 8.28592C25.6366 7.85826 25.1667 7.59695 24.8034 7.82248L22.4848 9.26159L25.6366 12.4132V8.28592ZM23.0776 5.04184C25.6209 3.46312 28.9094 5.29231 28.9094 8.28592V20.3143L17.2524 8.65744L23.0776 5.04184ZM13.377 11.0628L28.9094 26.5951V39.7144C28.9094 42.708 25.6209 44.5371 23.0776 42.9585L6.72002 32.8054C0.18903 28.7518 0.189029 19.2485 6.72002 15.1948L13.377 11.0628ZM12.8979 15.2121L8.44593 17.9754C3.97737 20.749 3.97737 27.2512 8.44593 30.0249L24.8034 40.1778C25.1667 40.4034 25.6366 40.142 25.6366 39.7144V27.9506L12.8979 15.2121Z" fill-rule="evenodd"></path><path d="M23.9405 41.5677L7.58296 31.4149C2.08319 28.0012 2.08319 19.9985 7.58296 16.5848L13.1375 13.1372L27.273 27.2727V39.7141C27.273 41.4246 25.3938 42.4699 23.9405 41.5677Z"></path><path clip-rule="evenodd" d="M1.02469 1.02469C1.66373 0.38565 2.69982 0.38565 3.33886 1.02469L46.9752 44.6611C47.6142 45.3002 47.6142 46.3361 46.9752 46.9752C46.3361 47.6142 45.3002 47.6142 44.6611 46.9752L1.02469 3.33886C0.38565 2.69982 0.38565 1.66373 1.02469 1.02469Z" fill-rule="evenodd"></path><path d="M23.9405 6.43223L19.8687 8.95958L27.273 16.3638V8.28599C27.273 6.57536 25.394 5.53011 23.9405 6.43223Z"></path></g><defs><clipPath id="clip0_19_95"><rect fill="white" height="48" width="48"></rect></clipPath></defs>', 2), cu = [
  lu
], uu = /* @__PURE__ */ he({
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
    }, cu, 8, iu));
  }
}), fu = ["fill", "height", "width"], au = /* @__PURE__ */ io('<g clip-path="url(#clip0_18_204)"><path clip-rule="evenodd" d="M37.8837 13.6648C36.8899 13.2329 36.2081 13.1111 36 13.1111V10C36.8354 10 37.9797 10.3109 39.1379 10.8143C40.3432 11.338 41.7183 12.1366 43.0216 13.2526C45.6499 15.5029 48 19.065 48 24.1753C48 29.2922 45.643 32.7767 42.9953 34.9447C41.6853 36.0174 40.3056 36.7692 39.1004 37.2562C37.9344 37.7273 36.8074 38 36 38V34.8889C36.236 34.8889 36.9352 34.7727 37.9215 34.3743C38.8683 33.9916 39.9669 33.3935 41.0047 32.5435C43.0527 30.8666 44.8696 28.2164 44.8696 24.1753C44.8696 20.1275 43.0458 17.3797 40.9784 15.6097C39.9339 14.7154 38.8307 14.0763 37.8837 13.6648Z" fill-rule="evenodd"></path><path d="M41 24C41 19 36 17 36 17V31C36 31 41 29 41 24Z" fill="white"></path><path clip-rule="evenodd" d="M33.6599 4.22847C33.6599 0.912593 30.0125 -1.10896 27.2006 0.64846L5.38572 14.2828C-1.79524 18.7709 -1.79524 29.229 5.38572 33.7173L27.2006 47.3515C30.0125 49.109 33.6599 47.0874 33.6599 43.7715V4.22847Z" fill-rule="evenodd"></path></g><defs><clipPath id="clip0_18_204"><rect height="48" width="48"></rect></clipPath></defs>', 2), du = [
  au
], hu = /* @__PURE__ */ he({
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
    }, du, 8, fu));
  }
}), pu = { class: "lpr-volume" }, gu = /* @__PURE__ */ G("div", { class: "lpr-volume__level" }, null, -1), _u = /* @__PURE__ */ he({
  __name: "VolumeControl",
  setup(e) {
    const t = Ne("player"), { volume: n, muted: s } = Zt(t), r = Et(() => `${n.value * 100}%`), o = () => {
      !t || (s.value = !s.value);
    }, i = (l) => {
      const { clientX: u, target: a } = l, { left: d, width: m } = a.getBoundingClientRect();
      n.value = (u - d) / m, s.value && o();
    };
    return (l, u) => (Q(), ve("div", pu, [
      G("div", {
        class: "lpr-volume__button",
        onClick: o
      }, [
        J(gt, null, {
          default: It(() => [
            Xe(s) ? (Q(), Be(uu, {
              key: 1,
              class: "lpr-volume__icon",
              color: "#fff",
              height: "22",
              width: "22"
            })) : (Q(), Be(hu, {
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
        gu,
        G("div", {
          style: zt({ width: Xe(r) }),
          class: "lpr-volume__level-progress"
        }, null, 4)
      ])
    ]));
  }
}), mu = `:host{--volume-border-radius: 12px;--volume-color: rgba(255, 255, 255, 80%);grid-area:volume;--volume-height: 6px;--volume-progress-color: #00b9ae;--volume-width: 80px}.lpr-volume{position:relative;display:flex;align-items:center;width:fit-content;height:22px}.lpr-volume__button,.lpr-volume__level-container{display:flex;align-items:center;cursor:pointer;pointer-events:all}.lpr-volume__button{width:22px;height:100%}.lpr-volume__level-container{overflow:hidden;width:0;height:100%;transition:all 1s ease-out;transform:scale(0);opacity:0}.lpr-volume:hover .lpr-volume__button{box-sizing:content-box;padding-right:7px}.lpr-volume:hover .lpr-volume__level-container,.lpr-volume__level-container:hover{position:relative;box-sizing:content-box;width:var(--volume-width);height:100%;transition:all .3s ease-out;transform:scale(1);opacity:1}.lpr-volume__level{cursor:pointer;pointer-events:all;opacity:.7;background-color:var(--volume-color)}.lpr-volume__level,.lpr-volume__level-progress{position:absolute;top:50%;right:0;bottom:0;left:0;overflow:hidden;height:var(--volume-height);transform:translateY(-50%);border:0 solid transparent;border-radius:var(--volume-border-radius)}.lpr-volume__level-progress{box-sizing:content-box;width:0;pointer-events:none;background-color:var(--volume-progress-color)}.lpr-volume__icon{position:absolute}.v-enter-active,.v-leave-active{transition:all .25s ease-out}.v-enter-from{transform:translateY(-30px);opacity:0}.v-leave-to{transform:translateY(30px);opacity:0}
`, vu = /* @__PURE__ */ _t(_u, [["styles", [mu]]]), Cu = pt(Fc), bu = pt(Ac), yu = pt(Sc), wu = pt(kc), xu = pt(Zc), Eu = pt(ou), Fu = pt(vu);
customElements.define("lpr-player", Cu);
customElements.define("lpr-poster", bu);
customElements.define("lpr-timeline", yu);
customElements.define("lpr-time", wu);
customElements.define("lpr-play", xu);
customElements.define("lpr-fullscreen", Eu);
customElements.define("lpr-volume", Fu);
