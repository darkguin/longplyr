var ao = Object.defineProperty;
var ho = (e, t, n) => t in e ? ao(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var It = (e, t, n) => (ho(e, typeof t != "symbol" ? t + "" : t, n), n);
function Zn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const po = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", go = /* @__PURE__ */ Zn(po);
function ir(e) {
  return !!e || e === "";
}
function Dt(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = le(s) ? vo(s) : Dt(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else {
    if (le(e))
      return e;
    if (z(e))
      return e;
  }
}
const _o = /;(?![^(]*\))/g, mo = /:(.+)/;
function vo(e) {
  const t = {};
  return e.split(_o).forEach((n) => {
    if (n) {
      const s = n.split(mo);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function un(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = un(e[n]);
      s && (t += s + " ");
    }
  else if (z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ys = (e) => le(e) ? e : e == null ? "" : I(e) || z(e) && (e.toString === fr || !L(e.toString)) ? JSON.stringify(e, lr, 2) : String(e), lr = (e, t) => t && t.__v_isRef ? lr(e, t.value) : _t(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
} : cr(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : z(t) && !I(t) && !ar(t) ? String(t) : t, k = {}, gt = [], Fe = () => {
}, Co = () => !1, bo = /^on[^a-z]/, fn = (e) => bo.test(e), qn = (e) => e.startsWith("onUpdate:"), te = Object.assign, Yn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, yo = Object.prototype.hasOwnProperty, N = (e, t) => yo.call(e, t), I = Array.isArray, _t = (e) => an(e) === "[object Map]", cr = (e) => an(e) === "[object Set]", L = (e) => typeof e == "function", le = (e) => typeof e == "string", Qn = (e) => typeof e == "symbol", z = (e) => e !== null && typeof e == "object", ur = (e) => z(e) && L(e.then) && L(e.catch), fr = Object.prototype.toString, an = (e) => fr.call(e), wo = (e) => an(e).slice(8, -1), ar = (e) => an(e) === "[object Object]", Jn = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xt = /* @__PURE__ */ Zn(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), dn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, xo = /-(\w)/g, Ze = dn((e) => e.replace(xo, (t, n) => n ? n.toUpperCase() : "")), Eo = /\B([A-Z])/g, Re = dn((e) => e.replace(Eo, "-$1").toLowerCase()), dr = dn((e) => e.charAt(0).toUpperCase() + e.slice(1)), xn = dn((e) => e ? `on${dr(e)}` : ""), Ht = (e, t) => !Object.is(e, t), En = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, tn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, nn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ws;
const To = () => ws || (ws = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let ge;
class Fo {
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
function $o(e, t = ge) {
  t && t.active && t.effects.push(e);
}
function Oo() {
  return ge;
}
function Io(e) {
  ge && ge.cleanups.push(e);
}
const Xn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, hr = (e) => (e.w & qe) > 0, pr = (e) => (e.n & qe) > 0, Po = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= qe;
}, Mo = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      hr(r) && !pr(r) ? r.delete(e) : t[n++] = r, r.w &= ~qe, r.n &= ~qe;
    }
    t.length = n;
  }
}, Mn = /* @__PURE__ */ new WeakMap();
let Mt = 0, qe = 1;
const Ln = 30;
let Ee;
const ct = Symbol(""), An = Symbol("");
class Gn {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, $o(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Ee, n = ze;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Ee, Ee = this, ze = !0, qe = 1 << ++Mt, Mt <= Ln ? Po(this) : xs(this), this.fn();
    } finally {
      Mt <= Ln && Mo(this), qe = 1 << --Mt, Ee = this.parent, ze = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Ee === this ? this.deferStop = !0 : this.active && (xs(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function xs(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let ze = !0;
const gr = [];
function Et() {
  gr.push(ze), ze = !1;
}
function Tt() {
  const e = gr.pop();
  ze = e === void 0 ? !0 : e;
}
function me(e, t, n) {
  if (ze && Ee) {
    let s = Mn.get(e);
    s || Mn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = Xn()), _r(r);
  }
}
function _r(e, t) {
  let n = !1;
  Mt <= Ln ? pr(e) || (e.n |= qe, n = !hr(e)) : n = !e.has(Ee), n && (e.add(Ee), Ee.deps.push(e));
}
function Se(e, t, n, s, r, o) {
  const i = Mn.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && I(e))
    i.forEach((u, a) => {
      (a === "length" || a >= s) && l.push(u);
    });
  else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        I(e) ? Jn(n) && l.push(i.get("length")) : (l.push(i.get(ct)), _t(e) && l.push(i.get(An)));
        break;
      case "delete":
        I(e) || (l.push(i.get(ct)), _t(e) && l.push(i.get(An)));
        break;
      case "set":
        _t(e) && l.push(i.get(ct));
        break;
    }
  if (l.length === 1)
    l[0] && Hn(l[0]);
  else {
    const u = [];
    for (const a of l)
      a && u.push(...a);
    Hn(Xn(u));
  }
}
function Hn(e, t) {
  const n = I(e) ? e : [...e];
  for (const s of n)
    s.computed && Es(s);
  for (const s of n)
    s.computed || Es(s);
}
function Es(e, t) {
  (e !== Ee || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Lo = /* @__PURE__ */ Zn("__proto__,__v_isRef,__isVue"), mr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qn)
), Ao = /* @__PURE__ */ es(), Ho = /* @__PURE__ */ es(!1, !0), Ro = /* @__PURE__ */ es(!0), Ts = /* @__PURE__ */ No();
function No() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = S(this);
      for (let o = 0, i = this.length; o < i; o++)
        me(s, "get", o + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(S)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Et();
      const s = S(this)[t].apply(this, n);
      return Tt(), s;
    };
  }), e;
}
function es(e = !1, t = !1) {
  return function(s, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && o === (e ? t ? Xo : wr : t ? yr : br).get(s))
      return s;
    const i = I(s);
    if (!e && i && N(Ts, r))
      return Reflect.get(Ts, r, o);
    const l = Reflect.get(s, r, o);
    return (Qn(r) ? mr.has(r) : Lo(r)) || (e || me(s, "get", r), t) ? l : ie(l) ? i && Jn(r) ? l : l.value : z(l) ? e ? xr(l) : jt(l) : l;
  };
}
const So = /* @__PURE__ */ vr(), Vo = /* @__PURE__ */ vr(!0);
function vr(e = !1) {
  return function(n, s, r, o) {
    let i = n[s];
    if (wt(i) && ie(i) && !ie(r))
      return !1;
    if (!e && (!sn(r) && !wt(r) && (i = S(i), r = S(r)), !I(n) && ie(i) && !ie(r)))
      return i.value = r, !0;
    const l = I(n) && Jn(s) ? Number(s) < n.length : N(n, s), u = Reflect.set(n, s, r, o);
    return n === S(o) && (l ? Ht(r, i) && Se(n, "set", s, r) : Se(n, "add", s, r)), u;
  };
}
function Bo(e, t) {
  const n = N(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Se(e, "delete", t, void 0), s;
}
function Do(e, t) {
  const n = Reflect.has(e, t);
  return (!Qn(t) || !mr.has(t)) && me(e, "has", t), n;
}
function jo(e) {
  return me(e, "iterate", I(e) ? "length" : ct), Reflect.ownKeys(e);
}
const Cr = {
  get: Ao,
  set: So,
  deleteProperty: Bo,
  has: Do,
  ownKeys: jo
}, ko = {
  get: Ro,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, Uo = /* @__PURE__ */ te({}, Cr, {
  get: Ho,
  set: Vo
}), ts = (e) => e, hn = (e) => Reflect.getPrototypeOf(e);
function Zt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = S(e), o = S(t);
  n || (t !== o && me(r, "get", t), me(r, "get", o));
  const { has: i } = hn(r), l = s ? ts : n ? rs : Rt;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, o))
    return l(e.get(o));
  e !== r && e.get(t);
}
function qt(e, t = !1) {
  const n = this.__v_raw, s = S(n), r = S(e);
  return t || (e !== r && me(s, "has", e), me(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Yt(e, t = !1) {
  return e = e.__v_raw, !t && me(S(e), "iterate", ct), Reflect.get(e, "size", e);
}
function Fs(e) {
  e = S(e);
  const t = S(this);
  return hn(t).has.call(t, e) || (t.add(e), Se(t, "add", e, e)), this;
}
function $s(e, t) {
  t = S(t);
  const n = S(this), { has: s, get: r } = hn(n);
  let o = s.call(n, e);
  o || (e = S(e), o = s.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), o ? Ht(t, i) && Se(n, "set", e, t) : Se(n, "add", e, t), this;
}
function Os(e) {
  const t = S(this), { has: n, get: s } = hn(t);
  let r = n.call(t, e);
  r || (e = S(e), r = n.call(t, e)), s && s.call(t, e);
  const o = t.delete(e);
  return r && Se(t, "delete", e, void 0), o;
}
function Is() {
  const e = S(this), t = e.size !== 0, n = e.clear();
  return t && Se(e, "clear", void 0, void 0), n;
}
function Qt(e, t) {
  return function(s, r) {
    const o = this, i = o.__v_raw, l = S(i), u = t ? ts : e ? rs : Rt;
    return !e && me(l, "iterate", ct), i.forEach((a, d) => s.call(r, u(a), u(d), o));
  };
}
function Jt(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = S(r), i = _t(o), l = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...s), d = n ? ts : t ? rs : Rt;
    return !t && me(o, "iterate", u ? An : ct), {
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
function Ko() {
  const e = {
    get(o) {
      return Zt(this, o);
    },
    get size() {
      return Yt(this);
    },
    has: qt,
    add: Fs,
    set: $s,
    delete: Os,
    clear: Is,
    forEach: Qt(!1, !1)
  }, t = {
    get(o) {
      return Zt(this, o, !1, !0);
    },
    get size() {
      return Yt(this);
    },
    has: qt,
    add: Fs,
    set: $s,
    delete: Os,
    clear: Is,
    forEach: Qt(!1, !0)
  }, n = {
    get(o) {
      return Zt(this, o, !0);
    },
    get size() {
      return Yt(this, !0);
    },
    has(o) {
      return qt.call(this, o, !0);
    },
    add: je("add"),
    set: je("set"),
    delete: je("delete"),
    clear: je("clear"),
    forEach: Qt(!0, !1)
  }, s = {
    get(o) {
      return Zt(this, o, !0, !0);
    },
    get size() {
      return Yt(this, !0);
    },
    has(o) {
      return qt.call(this, o, !0);
    },
    add: je("add"),
    set: je("set"),
    delete: je("delete"),
    clear: je("clear"),
    forEach: Qt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = Jt(o, !1, !1), n[o] = Jt(o, !0, !1), t[o] = Jt(o, !1, !0), s[o] = Jt(o, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [zo, Wo, Zo, qo] = /* @__PURE__ */ Ko();
function ns(e, t) {
  const n = t ? e ? qo : Zo : e ? Wo : zo;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(N(n, r) && r in s ? n : s, r, o);
}
const Yo = {
  get: /* @__PURE__ */ ns(!1, !1)
}, Qo = {
  get: /* @__PURE__ */ ns(!1, !0)
}, Jo = {
  get: /* @__PURE__ */ ns(!0, !1)
}, br = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), Xo = /* @__PURE__ */ new WeakMap();
function Go(e) {
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
function ei(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Go(wo(e));
}
function jt(e) {
  return wt(e) ? e : ss(e, !1, Cr, Yo, br);
}
function ti(e) {
  return ss(e, !1, Uo, Qo, yr);
}
function xr(e) {
  return ss(e, !0, ko, Jo, wr);
}
function ss(e, t, n, s, r) {
  if (!z(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = ei(e);
  if (i === 0)
    return e;
  const l = new Proxy(e, i === 2 ? s : n);
  return r.set(e, l), l;
}
function mt(e) {
  return wt(e) ? mt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function wt(e) {
  return !!(e && e.__v_isReadonly);
}
function sn(e) {
  return !!(e && e.__v_isShallow);
}
function Er(e) {
  return mt(e) || wt(e);
}
function S(e) {
  const t = e && e.__v_raw;
  return t ? S(t) : e;
}
function Tr(e) {
  return tn(e, "__v_skip", !0), e;
}
const Rt = (e) => z(e) ? jt(e) : e, rs = (e) => z(e) ? xr(e) : e;
function os(e) {
  ze && Ee && (e = S(e), _r(e.dep || (e.dep = Xn())));
}
function is(e, t) {
  e = S(e), e.dep && Hn(e.dep);
}
function ie(e) {
  return !!(e && e.__v_isRef === !0);
}
function vt(e) {
  return ni(e, !1);
}
function ni(e, t) {
  return ie(e) ? e : new si(e, t);
}
class si {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : S(t), this._value = n ? t : Rt(t);
  }
  get value() {
    return os(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || sn(t) || wt(t);
    t = n ? t : S(t), Ht(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Rt(t), is(this));
  }
}
function Ye(e) {
  return ie(e) ? e.value : e;
}
const ri = {
  get: (e, t, n) => Ye(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ie(r) && !ie(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Fr(e) {
  return mt(e) ? e : new Proxy(e, ri);
}
class oi {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: s } = t(() => os(this), () => is(this));
    this._get = n, this._set = s;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function ii(e) {
  return new oi(e);
}
var $r;
class li {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[$r] = !1, this._dirty = !0, this.effect = new Gn(t, () => {
      this._dirty || (this._dirty = !0, is(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = S(this);
    return os(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
$r = "__v_isReadonly";
function ci(e, t, n = !1) {
  let s, r;
  const o = L(e);
  return o ? (s = e, r = Fe) : (s = e.get, r = e.set), new li(s, r, o || !r, n);
}
function We(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    pn(o, t, n);
  }
  return r;
}
function ye(e, t, n, s) {
  if (L(e)) {
    const o = We(e, t, n, s);
    return o && ur(o) && o.catch((i) => {
      pn(i, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(ye(e[o], t, n, s));
  return r;
}
function pn(e, t, n, s = !0) {
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
      We(u, null, 10, [e, i, l]);
      return;
    }
  }
  ui(e, n, r, s);
}
function ui(e, t, n, s = !0) {
  console.error(e);
}
let Nt = !1, Rn = !1;
const oe = [];
let Le = 0;
const Ct = [];
let He = null, rt = 0;
const Or = /* @__PURE__ */ Promise.resolve();
let ls = null;
function Ir(e) {
  const t = ls || Or;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function fi(e) {
  let t = Le + 1, n = oe.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    St(oe[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function cs(e) {
  (!oe.length || !oe.includes(e, Nt && e.allowRecurse ? Le + 1 : Le)) && (e.id == null ? oe.push(e) : oe.splice(fi(e.id), 0, e), Pr());
}
function Pr() {
  !Nt && !Rn && (Rn = !0, ls = Or.then(Lr));
}
function ai(e) {
  const t = oe.indexOf(e);
  t > Le && oe.splice(t, 1);
}
function di(e) {
  I(e) ? Ct.push(...e) : (!He || !He.includes(e, e.allowRecurse ? rt + 1 : rt)) && Ct.push(e), Pr();
}
function Ps(e, t = Nt ? Le + 1 : 0) {
  for (; t < oe.length; t++) {
    const n = oe[t];
    n && n.pre && (oe.splice(t, 1), t--, n());
  }
}
function Mr(e) {
  if (Ct.length) {
    const t = [...new Set(Ct)];
    if (Ct.length = 0, He) {
      He.push(...t);
      return;
    }
    for (He = t, He.sort((n, s) => St(n) - St(s)), rt = 0; rt < He.length; rt++)
      He[rt]();
    He = null, rt = 0;
  }
}
const St = (e) => e.id == null ? 1 / 0 : e.id, hi = (e, t) => {
  const n = St(e) - St(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Lr(e) {
  Rn = !1, Nt = !0, oe.sort(hi);
  const t = Fe;
  try {
    for (Le = 0; Le < oe.length; Le++) {
      const n = oe[Le];
      n && n.active !== !1 && We(n, null, 14);
    }
  } finally {
    Le = 0, oe.length = 0, Mr(), Nt = !1, ls = null, (oe.length || Ct.length) && Lr();
  }
}
function pi(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || k;
  let r = n;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in s) {
    const d = `${i === "modelValue" ? "model" : i}Modifiers`, { number: m, trim: b } = s[d] || k;
    b && (r = n.map(($) => $.trim())), m && (r = n.map(nn));
  }
  let l, u = s[l = xn(t)] || s[l = xn(Ze(t))];
  !u && o && (u = s[l = xn(Re(t))]), u && ye(u, e, 6, r);
  const a = s[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ye(a, e, 6, r);
  }
}
function Ar(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, l = !1;
  if (!L(e)) {
    const u = (a) => {
      const d = Ar(a, t, !0);
      d && (l = !0, te(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !l ? (z(e) && s.set(e, null), null) : (I(o) ? o.forEach((u) => i[u] = null) : te(i, o), z(e) && s.set(e, i), i);
}
function gn(e, t) {
  return !e || !fn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), N(e, t[0].toLowerCase() + t.slice(1)) || N(e, Re(t)) || N(e, t));
}
let ae = null, Hr = null;
function rn(e) {
  const t = ae;
  return ae = e, Hr = e && e.type.__scopeId || null, t;
}
function kt(e, t = ae, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Ds(-1);
    const o = rn(t), i = e(...r);
    return rn(o), s._d && Ds(1), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Tn(e) {
  const { type: t, vnode: n, proxy: s, withProxy: r, props: o, propsOptions: [i], slots: l, attrs: u, emit: a, render: d, renderCache: m, data: b, setupState: $, ctx: H, inheritAttrs: O } = e;
  let V, A;
  const ue = rn(e);
  try {
    if (n.shapeFlag & 4) {
      const W = r || s;
      V = Me(d.call(W, W, m, o, $, b, H)), A = u;
    } else {
      const W = t;
      V = Me(W.length > 1 ? W(o, { attrs: u, slots: l, emit: a }) : W(o, null)), A = t.props ? u : gi(u);
    }
  } catch (W) {
    At.length = 0, pn(W, e, 1), V = G(we);
  }
  let q = V;
  if (A && O !== !1) {
    const W = Object.keys(A), { shapeFlag: se } = q;
    W.length && se & 7 && (i && W.some(qn) && (A = _i(A, i)), q = Qe(q, A));
  }
  return n.dirs && (q = Qe(q), q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs), n.transition && (q.transition = n.transition), V = q, rn(ue), V;
}
const gi = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || fn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, _i = (e, t) => {
  const n = {};
  for (const s in e)
    (!qn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function mi(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: l, patchFlag: u } = t, a = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? Ms(s, i, a) : !!i;
    if (u & 8) {
      const d = t.dynamicProps;
      for (let m = 0; m < d.length; m++) {
        const b = d[m];
        if (i[b] !== s[b] && !gn(a, b))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Ms(s, i, a) : !0 : !!i;
  return !1;
}
function Ms(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !gn(n, o))
      return !0;
  }
  return !1;
}
function vi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ci = (e) => e.__isSuspense;
function bi(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : di(e);
}
function Rr(e, t) {
  if (ne) {
    let n = ne.provides;
    const s = ne.parent && ne.parent.provides;
    s === n && (n = ne.provides = Object.create(s)), n[e] = t;
  }
}
function Ne(e, t, n = !1) {
  const s = ne || ae;
  if (s) {
    const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && L(t) ? t.call(s.proxy) : t;
  }
}
const Ls = {};
function Gt(e, t, n) {
  return Nr(e, t, n);
}
function Nr(e, t, { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = k) {
  const l = ne;
  let u, a = !1, d = !1;
  if (ie(e) ? (u = () => e.value, a = sn(e)) : mt(e) ? (u = () => e, s = !0) : I(e) ? (d = !0, a = e.some((A) => mt(A) || sn(A)), u = () => e.map((A) => {
    if (ie(A))
      return A.value;
    if (mt(A))
      return pt(A);
    if (L(A))
      return We(A, l, 2);
  })) : L(e) ? t ? u = () => We(e, l, 2) : u = () => {
    if (!(l && l.isUnmounted))
      return m && m(), ye(e, l, 3, [b]);
  } : u = Fe, t && s) {
    const A = u;
    u = () => pt(A());
  }
  let m, b = (A) => {
    m = V.onStop = () => {
      We(A, l, 4);
    };
  };
  if (Bt)
    return b = Fe, t ? n && ye(t, l, 3, [
      u(),
      d ? [] : void 0,
      b
    ]) : u(), Fe;
  let $ = d ? [] : Ls;
  const H = () => {
    if (!!V.active)
      if (t) {
        const A = V.run();
        (s || a || (d ? A.some((ue, q) => Ht(ue, $[q])) : Ht(A, $))) && (m && m(), ye(t, l, 3, [
          A,
          $ === Ls ? void 0 : $,
          b
        ]), $ = A);
      } else
        V.run();
  };
  H.allowRecurse = !!t;
  let O;
  r === "sync" ? O = H : r === "post" ? O = () => fe(H, l && l.suspense) : (H.pre = !0, l && (H.id = l.uid), O = () => cs(H));
  const V = new Gn(u, O);
  return t ? n ? H() : $ = V.run() : r === "post" ? fe(V.run.bind(V), l && l.suspense) : V.run(), () => {
    V.stop(), l && l.scope && Yn(l.scope.effects, V);
  };
}
function yi(e, t, n) {
  const s = this.proxy, r = le(e) ? e.includes(".") ? Sr(s, e) : () => s[e] : e.bind(s, s);
  let o;
  L(t) ? o = t : (o = t.handler, n = t);
  const i = ne;
  xt(this);
  const l = Nr(r, o.bind(s), n);
  return i ? xt(i) : ut(), l;
}
function Sr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function pt(e, t) {
  if (!z(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ie(e))
    pt(e.value, t);
  else if (I(e))
    for (let n = 0; n < e.length; n++)
      pt(e[n], t);
  else if (cr(e) || _t(e))
    e.forEach((n) => {
      pt(n, t);
    });
  else if (ar(e))
    for (const n in e)
      pt(e[n], t);
  return e;
}
function wi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return vn(() => {
    e.isMounted = !0;
  }), kr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ce = [Function, Array], xi = {
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
    const n = ll(), s = wi();
    let r;
    return () => {
      const o = t.default && Dr(t.default(), !0);
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
      const l = S(e), { mode: u } = l;
      if (s.isLeaving)
        return Fn(i);
      const a = As(i);
      if (!a)
        return Fn(i);
      const d = Nn(a, l, s, n);
      Sn(a, d);
      const m = n.subTree, b = m && As(m);
      let $ = !1;
      const { getTransitionKey: H } = a.type;
      if (H) {
        const O = H();
        r === void 0 ? r = O : O !== r && (r = O, $ = !0);
      }
      if (b && b.type !== we && (!ot(a, b) || $)) {
        const O = Nn(b, l, s, n);
        if (Sn(b, O), u === "out-in")
          return s.isLeaving = !0, O.afterLeave = () => {
            s.isLeaving = !1, n.update();
          }, Fn(i);
        u === "in-out" && a.type !== we && (O.delayLeave = (V, A, ue) => {
          const q = Br(s, b);
          q[String(b.key)] = b, V._leaveCb = () => {
            A(), V._leaveCb = void 0, delete d.delayedLeave;
          }, d.delayedLeave = ue;
        });
      }
      return i;
    };
  }
}, Vr = xi;
function Br(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Nn(e, t, n, s) {
  const { appear: r, mode: o, persisted: i = !1, onBeforeEnter: l, onEnter: u, onAfterEnter: a, onEnterCancelled: d, onBeforeLeave: m, onLeave: b, onAfterLeave: $, onLeaveCancelled: H, onBeforeAppear: O, onAppear: V, onAfterAppear: A, onAppearCancelled: ue } = t, q = String(e.key), W = Br(n, e), se = (M, Y) => {
    M && ye(M, s, 9, Y);
  }, De = (M, Y) => {
    const U = Y[1];
    se(M, Y), I(M) ? M.every((re) => re.length <= 1) && U() : M.length <= 1 && U();
  }, $e = {
    mode: o,
    persisted: i,
    beforeEnter(M) {
      let Y = l;
      if (!n.isMounted)
        if (r)
          Y = O || l;
        else
          return;
      M._leaveCb && M._leaveCb(!0);
      const U = W[q];
      U && ot(e, U) && U.el._leaveCb && U.el._leaveCb(), se(Y, [M]);
    },
    enter(M) {
      let Y = u, U = a, re = d;
      if (!n.isMounted)
        if (r)
          Y = V || u, U = A || a, re = ue || d;
        else
          return;
      let E = !1;
      const Z = M._enterCb = (he) => {
        E || (E = !0, he ? se(re, [M]) : se(U, [M]), $e.delayedLeave && $e.delayedLeave(), M._enterCb = void 0);
      };
      Y ? De(Y, [M, Z]) : Z();
    },
    leave(M, Y) {
      const U = String(e.key);
      if (M._enterCb && M._enterCb(!0), n.isUnmounting)
        return Y();
      se(m, [M]);
      let re = !1;
      const E = M._leaveCb = (Z) => {
        re || (re = !0, Y(), Z ? se(H, [M]) : se($, [M]), M._leaveCb = void 0, W[U] === e && delete W[U]);
      };
      W[U] = e, b ? De(b, [M, E]) : E();
    },
    clone(M) {
      return Nn(M, t, n, s);
    }
  };
  return $e;
}
function Fn(e) {
  if (_n(e))
    return e = Qe(e), e.children = null, e;
}
function As(e) {
  return _n(e) ? e.children ? e.children[0] : void 0 : e;
}
function Sn(e, t) {
  e.shapeFlag & 6 && e.component ? Sn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Dr(e, t = !1, n) {
  let s = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === be ? (i.patchFlag & 128 && r++, s = s.concat(Dr(i.children, t, l))) : (t || i.type !== we) && s.push(l != null ? Qe(i, { key: l }) : i);
  }
  if (r > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
function de(e) {
  return L(e) ? { setup: e, name: e.name } : e;
}
const Lt = (e) => !!e.type.__asyncLoader, _n = (e) => e.type.__isKeepAlive;
function Ei(e, t) {
  jr(e, "a", t);
}
function Ti(e, t) {
  jr(e, "da", t);
}
function jr(e, t, n = ne) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (mn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      _n(r.parent.vnode) && Fi(s, t, n, r), r = r.parent;
  }
}
function Fi(e, t, n, s) {
  const r = mn(t, e, s, !0);
  Ur(() => {
    Yn(s[t], r);
  }, n);
}
function mn(e, t, n = ne, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Et(), xt(n);
      const l = ye(t, n, e, i);
      return ut(), Tt(), l;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const Be = (e) => (t, n = ne) => (!Bt || e === "sp") && mn(e, (...s) => t(...s), n), $i = Be("bm"), vn = Be("m"), Oi = Be("bu"), Ii = Be("u"), kr = Be("bum"), Ur = Be("um"), Pi = Be("sp"), Mi = Be("rtg"), Li = Be("rtc");
function Ai(e, t = ne) {
  mn("ec", e, t);
}
function Ge(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let u = l.dir[s];
    u && (Et(), ye(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Tt());
  }
}
const Hi = Symbol();
function Ri(e, t, n = {}, s, r) {
  if (ae.isCE || ae.parent && Lt(ae.parent) && ae.parent.isCE)
    return G("slot", t === "default" ? null : { name: t }, s && s());
  let o = e[t];
  o && o._c && (o._d = !1), J();
  const i = o && Kr(o(n)), l = Ve(be, {
    key: n.key || i && i.key || `_${t}`
  }, i || (s ? s() : []), i && e._ === 1 ? 64 : -2);
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = !0), l;
}
function Kr(e) {
  return e.some((t) => cn(t) ? !(t.type === we || t.type === be && !Kr(t.children)) : !0) ? e : null;
}
const Vn = (e) => e ? no(e) ? hs(e) || e.proxy : Vn(e.parent) : null, on = /* @__PURE__ */ te(/* @__PURE__ */ Object.create(null), {
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
  $options: (e) => us(e),
  $forceUpdate: (e) => e.f || (e.f = () => cs(e.update)),
  $nextTick: (e) => e.n || (e.n = Ir.bind(e.proxy)),
  $watch: (e) => yi.bind(e)
}), Ni = {
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
        if (s !== k && N(s, t))
          return i[t] = 1, s[t];
        if (r !== k && N(r, t))
          return i[t] = 2, r[t];
        if ((a = e.propsOptions[0]) && N(a, t))
          return i[t] = 3, o[t];
        if (n !== k && N(n, t))
          return i[t] = 4, n[t];
        Bn && (i[t] = 0);
      }
    }
    const d = on[t];
    let m, b;
    if (d)
      return t === "$attrs" && me(e, "get", t), d(e);
    if ((m = l.__cssModules) && (m = m[t]))
      return m;
    if (n !== k && N(n, t))
      return i[t] = 4, n[t];
    if (b = u.config.globalProperties, N(b, t))
      return b[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return r !== k && N(r, t) ? (r[t] = n, !0) : s !== k && N(s, t) ? (s[t] = n, !0) : N(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o } }, i) {
    let l;
    return !!n[i] || e !== k && N(e, i) || t !== k && N(t, i) || (l = o[0]) && N(l, i) || N(s, i) || N(on, i) || N(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : N(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let Bn = !0;
function Si(e) {
  const t = us(e), n = e.proxy, s = e.ctx;
  Bn = !1, t.beforeCreate && Hs(t.beforeCreate, e, "bc");
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
    deactivated: V,
    beforeDestroy: A,
    beforeUnmount: ue,
    destroyed: q,
    unmounted: W,
    render: se,
    renderTracked: De,
    renderTriggered: $e,
    errorCaptured: M,
    serverPrefetch: Y,
    expose: U,
    inheritAttrs: re,
    components: E,
    directives: Z,
    filters: he
  } = t;
  if (a && Vi(a, s, null, e.appContext.config.unwrapInjectedRef), i)
    for (const Q in i) {
      const D = i[Q];
      L(D) && (s[Q] = D.bind(n));
    }
  if (r) {
    const Q = r.call(n, n);
    z(Q) && (e.data = jt(Q));
  }
  if (Bn = !0, o)
    for (const Q in o) {
      const D = o[Q], Je = L(D) ? D.bind(n, n) : L(D.get) ? D.get.bind(n, n) : Fe, zt = !L(D) && L(D.set) ? D.set.bind(n) : Fe, Xe = bt({
        get: Je,
        set: zt
      });
      Object.defineProperty(s, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => Xe.value,
        set: (Oe) => Xe.value = Oe
      });
    }
  if (l)
    for (const Q in l)
      zr(l[Q], s, n, Q);
  if (u) {
    const Q = L(u) ? u.call(n) : u;
    Reflect.ownKeys(Q).forEach((D) => {
      Rr(D, Q[D]);
    });
  }
  d && Hs(d, e, "c");
  function ee(Q, D) {
    I(D) ? D.forEach((Je) => Q(Je.bind(n))) : D && Q(D.bind(n));
  }
  if (ee($i, m), ee(vn, b), ee(Oi, $), ee(Ii, H), ee(Ei, O), ee(Ti, V), ee(Ai, M), ee(Li, De), ee(Mi, $e), ee(kr, ue), ee(Ur, W), ee(Pi, Y), I(U))
    if (U.length) {
      const Q = e.exposed || (e.exposed = {});
      U.forEach((D) => {
        Object.defineProperty(Q, D, {
          get: () => n[D],
          set: (Je) => n[D] = Je
        });
      });
    } else
      e.exposed || (e.exposed = {});
  se && e.render === Fe && (e.render = se), re != null && (e.inheritAttrs = re), E && (e.components = E), Z && (e.directives = Z);
}
function Vi(e, t, n = Fe, s = !1) {
  I(e) && (e = Dn(e));
  for (const r in e) {
    const o = e[r];
    let i;
    z(o) ? "default" in o ? i = Ne(o.from || r, o.default, !0) : i = Ne(o.from || r) : i = Ne(o), ie(i) && s ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[r] = i;
  }
}
function Hs(e, t, n) {
  ye(I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function zr(e, t, n, s) {
  const r = s.includes(".") ? Sr(n, s) : () => n[s];
  if (le(e)) {
    const o = t[e];
    L(o) && Gt(r, o);
  } else if (L(e))
    Gt(r, e.bind(n));
  else if (z(e))
    if (I(e))
      e.forEach((o) => zr(o, t, n, s));
    else {
      const o = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(o) && Gt(r, o, e);
    }
}
function us(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, l = o.get(t);
  let u;
  return l ? u = l : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach((a) => ln(u, a, i, !0)), ln(u, t, i)), z(t) && o.set(t, u), u;
}
function ln(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && ln(e, o, n, !0), r && r.forEach((i) => ln(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = Bi[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Bi = {
  data: Rs,
  props: st,
  emits: st,
  methods: st,
  computed: st,
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
  components: st,
  directives: st,
  watch: ji,
  provide: Rs,
  inject: Di
};
function Rs(e, t) {
  return t ? e ? function() {
    return te(L(e) ? e.call(this, this) : e, L(t) ? t.call(this, this) : t);
  } : t : e;
}
function Di(e, t) {
  return st(Dn(e), Dn(t));
}
function Dn(e) {
  if (I(e)) {
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
function st(e, t) {
  return e ? te(te(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function ji(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = te(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ce(e[s], t[s]);
  return n;
}
function ki(e, t, n, s = !1) {
  const r = {}, o = {};
  tn(o, Cn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Wr(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : ti(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function Ui(e, t, n, s) {
  const { props: r, attrs: o, vnode: { patchFlag: i } } = e, l = S(r), [u] = e.propsOptions;
  let a = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let m = 0; m < d.length; m++) {
        let b = d[m];
        if (gn(e.emitsOptions, b))
          continue;
        const $ = t[b];
        if (u)
          if (N(o, b))
            $ !== o[b] && (o[b] = $, a = !0);
          else {
            const H = Ze(b);
            r[H] = jn(u, l, H, $, e, !1);
          }
        else
          $ !== o[b] && (o[b] = $, a = !0);
      }
    }
  } else {
    Wr(e, t, r, o) && (a = !0);
    let d;
    for (const m in l)
      (!t || !N(t, m) && ((d = Re(m)) === m || !N(t, d))) && (u ? n && (n[m] !== void 0 || n[d] !== void 0) && (r[m] = jn(u, l, m, void 0, e, !0)) : delete r[m]);
    if (o !== l)
      for (const m in o)
        (!t || !N(t, m) && !0) && (delete o[m], a = !0);
  }
  a && Se(e, "set", "$attrs");
}
function Wr(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let u in t) {
      if (Xt(u))
        continue;
      const a = t[u];
      let d;
      r && N(r, d = Ze(u)) ? !o || !o.includes(d) ? n[d] = a : (l || (l = {}))[d] = a : gn(e.emitsOptions, u) || (!(u in s) || a !== s[u]) && (s[u] = a, i = !0);
    }
  if (o) {
    const u = S(n), a = l || k;
    for (let d = 0; d < o.length; d++) {
      const m = o[d];
      n[m] = jn(r, u, m, a[m], e, !N(a, m));
    }
  }
  return i;
}
function jn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = N(i, "default");
    if (l && s === void 0) {
      const u = i.default;
      if (i.type !== Function && L(u)) {
        const { propsDefaults: a } = r;
        n in a ? s = a[n] : (xt(r), s = a[n] = u.call(null, t), ut());
      } else
        s = u;
    }
    i[0] && (o && !l ? s = !1 : i[1] && (s === "" || s === Re(n)) && (s = !0));
  }
  return s;
}
function Zr(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, l = [];
  let u = !1;
  if (!L(e)) {
    const d = (m) => {
      u = !0;
      const [b, $] = Zr(m, t, !0);
      te(i, b), $ && l.push(...$);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !u)
    return z(e) && s.set(e, gt), gt;
  if (I(o))
    for (let d = 0; d < o.length; d++) {
      const m = Ze(o[d]);
      Ns(m) && (i[m] = k);
    }
  else if (o)
    for (const d in o) {
      const m = Ze(d);
      if (Ns(m)) {
        const b = o[d], $ = i[m] = I(b) || L(b) ? { type: b } : b;
        if ($) {
          const H = Bs(Boolean, $.type), O = Bs(String, $.type);
          $[0] = H > -1, $[1] = O < 0 || H < O, (H > -1 || N($, "default")) && l.push(m);
        }
      }
    }
  const a = [i, l];
  return z(e) && s.set(e, a), a;
}
function Ns(e) {
  return e[0] !== "$";
}
function Ss(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Vs(e, t) {
  return Ss(e) === Ss(t);
}
function Bs(e, t) {
  return I(t) ? t.findIndex((n) => Vs(n, e)) : L(t) && Vs(t, e) ? 0 : -1;
}
const qr = (e) => e[0] === "_" || e === "$stable", fs = (e) => I(e) ? e.map(Me) : [Me(e)], Ki = (e, t, n) => {
  if (t._n)
    return t;
  const s = kt((...r) => fs(t(...r)), n);
  return s._c = !1, s;
}, Yr = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (qr(r))
      continue;
    const o = e[r];
    if (L(o))
      t[r] = Ki(r, o, s);
    else if (o != null) {
      const i = fs(o);
      t[r] = () => i;
    }
  }
}, Qr = (e, t) => {
  const n = fs(t);
  e.slots.default = () => n;
}, zi = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = S(t), tn(t, "_", n)) : Yr(t, e.slots = {});
  } else
    e.slots = {}, t && Qr(e, t);
  tn(e.slots, Cn, 1);
}, Wi = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = k;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : (te(r, t), !n && l === 1 && delete r._) : (o = !t.$stable, Yr(t, r)), i = t;
  } else
    t && (Qr(e, t), i = { default: 1 });
  if (o)
    for (const l in r)
      !qr(l) && !(l in i) && delete r[l];
};
function Jr() {
  return {
    app: null,
    config: {
      isNativeTag: Co,
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
let Zi = 0;
function qi(e, t) {
  return function(s, r = null) {
    L(s) || (s = Object.assign({}, s)), r != null && !z(r) && (r = null);
    const o = Jr(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const u = o.app = {
      _uid: Zi++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: pl,
      get config() {
        return o.config;
      },
      set config(a) {
      },
      use(a, ...d) {
        return i.has(a) || (a && L(a.install) ? (i.add(a), a.install(u, ...d)) : L(a) && (i.add(a), a(u, ...d))), u;
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
          const b = G(s, r);
          return b.appContext = o, d && t ? t(b, a) : e(b, a, m), l = !0, u._container = a, a.__vue_app__ = u, hs(b.component) || b.component.proxy;
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
function kn(e, t, n, s, r = !1) {
  if (I(e)) {
    e.forEach((b, $) => kn(b, t && (I(t) ? t[$] : t), n, s, r));
    return;
  }
  if (Lt(s) && !r)
    return;
  const o = s.shapeFlag & 4 ? hs(s.component) || s.component.proxy : s.el, i = r ? null : o, { i: l, r: u } = e, a = t && t.r, d = l.refs === k ? l.refs = {} : l.refs, m = l.setupState;
  if (a != null && a !== u && (le(a) ? (d[a] = null, N(m, a) && (m[a] = null)) : ie(a) && (a.value = null)), L(u))
    We(u, l, 12, [i, d]);
  else {
    const b = le(u), $ = ie(u);
    if (b || $) {
      const H = () => {
        if (e.f) {
          const O = b ? d[u] : u.value;
          r ? I(O) && Yn(O, o) : I(O) ? O.includes(o) || O.push(o) : b ? (d[u] = [o], N(m, u) && (m[u] = d[u])) : (u.value = [o], e.k && (d[e.k] = u.value));
        } else
          b ? (d[u] = i, N(m, u) && (m[u] = i)) : $ && (u.value = i, e.k && (d[e.k] = i));
      };
      i ? (H.id = -1, fe(H, n)) : H();
    }
  }
}
const fe = bi;
function Yi(e) {
  return Qi(e);
}
function Qi(e, t) {
  const n = To();
  n.__VUE__ = !0;
  const { insert: s, remove: r, patchProp: o, createElement: i, createText: l, createComment: u, setText: a, setElementText: d, parentNode: m, nextSibling: b, setScopeId: $ = Fe, insertStaticContent: H } = e, O = (c, f, h, g = null, p = null, C = null, w = !1, v = null, y = !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !ot(c, f) && (g = Wt(c), Oe(c, p, C, !0), c = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: _, ref: T, shapeFlag: x } = f;
    switch (_) {
      case as:
        V(c, f, h, g);
        break;
      case we:
        A(c, f, h, g);
        break;
      case $n:
        c == null && ue(f, h, g, w);
        break;
      case be:
        E(c, f, h, g, p, C, w, v, y);
        break;
      default:
        x & 1 ? se(c, f, h, g, p, C, w, v, y) : x & 6 ? Z(c, f, h, g, p, C, w, v, y) : (x & 64 || x & 128) && _.process(c, f, h, g, p, C, w, v, y, dt);
    }
    T != null && p && kn(T, c && c.ref, C, f || c, !f);
  }, V = (c, f, h, g) => {
    if (c == null)
      s(f.el = l(f.children), h, g);
    else {
      const p = f.el = c.el;
      f.children !== c.children && a(p, f.children);
    }
  }, A = (c, f, h, g) => {
    c == null ? s(f.el = u(f.children || ""), h, g) : f.el = c.el;
  }, ue = (c, f, h, g) => {
    [c.el, c.anchor] = H(c.children, f, h, g, c.el, c.anchor);
  }, q = ({ el: c, anchor: f }, h, g) => {
    let p;
    for (; c && c !== f; )
      p = b(c), s(c, h, g), c = p;
    s(f, h, g);
  }, W = ({ el: c, anchor: f }) => {
    let h;
    for (; c && c !== f; )
      h = b(c), r(c), c = h;
    r(f);
  }, se = (c, f, h, g, p, C, w, v, y) => {
    w = w || f.type === "svg", c == null ? De(f, h, g, p, C, w, v, y) : Y(c, f, p, C, w, v, y);
  }, De = (c, f, h, g, p, C, w, v) => {
    let y, _;
    const { type: T, props: x, shapeFlag: F, transition: P, dirs: R } = c;
    if (y = c.el = i(c.type, C, x && x.is, x), F & 8 ? d(y, c.children) : F & 16 && M(c.children, y, null, g, p, C && T !== "foreignObject", w, v), R && Ge(c, null, g, "created"), x) {
      for (const B in x)
        B !== "value" && !Xt(B) && o(y, B, null, x[B], C, c.children, g, p, Ae);
      "value" in x && o(y, "value", null, x.value), (_ = x.onVnodeBeforeMount) && Pe(_, g, c);
    }
    $e(y, c, c.scopeId, w, g), R && Ge(c, null, g, "beforeMount");
    const j = (!p || p && !p.pendingBranch) && P && !P.persisted;
    j && P.beforeEnter(y), s(y, f, h), ((_ = x && x.onVnodeMounted) || j || R) && fe(() => {
      _ && Pe(_, g, c), j && P.enter(y), R && Ge(c, null, g, "mounted");
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
  }, M = (c, f, h, g, p, C, w, v, y = 0) => {
    for (let _ = y; _ < c.length; _++) {
      const T = c[_] = v ? Ke(c[_]) : Me(c[_]);
      O(null, T, f, h, g, p, C, w, v);
    }
  }, Y = (c, f, h, g, p, C, w) => {
    const v = f.el = c.el;
    let { patchFlag: y, dynamicChildren: _, dirs: T } = f;
    y |= c.patchFlag & 16;
    const x = c.props || k, F = f.props || k;
    let P;
    h && et(h, !1), (P = F.onVnodeBeforeUpdate) && Pe(P, h, f, c), T && Ge(f, c, h, "beforeUpdate"), h && et(h, !0);
    const R = p && f.type !== "foreignObject";
    if (_ ? U(c.dynamicChildren, _, v, h, g, R, C) : w || D(c, f, v, null, h, g, R, C, !1), y > 0) {
      if (y & 16)
        re(v, f, x, F, h, g, p);
      else if (y & 2 && x.class !== F.class && o(v, "class", null, F.class, p), y & 4 && o(v, "style", x.style, F.style, p), y & 8) {
        const j = f.dynamicProps;
        for (let B = 0; B < j.length; B++) {
          const X = j[B], xe = x[X], ht = F[X];
          (ht !== xe || X === "value") && o(v, X, xe, ht, p, c.children, h, g, Ae);
        }
      }
      y & 1 && c.children !== f.children && d(v, f.children);
    } else
      !w && _ == null && re(v, f, x, F, h, g, p);
    ((P = F.onVnodeUpdated) || T) && fe(() => {
      P && Pe(P, h, f, c), T && Ge(f, c, h, "updated");
    }, g);
  }, U = (c, f, h, g, p, C, w) => {
    for (let v = 0; v < f.length; v++) {
      const y = c[v], _ = f[v], T = y.el && (y.type === be || !ot(y, _) || y.shapeFlag & 70) ? m(y.el) : h;
      O(y, _, T, null, g, p, C, w, !0);
    }
  }, re = (c, f, h, g, p, C, w) => {
    if (h !== g) {
      if (h !== k)
        for (const v in h)
          !Xt(v) && !(v in g) && o(c, v, h[v], null, w, f.children, p, C, Ae);
      for (const v in g) {
        if (Xt(v))
          continue;
        const y = g[v], _ = h[v];
        y !== _ && v !== "value" && o(c, v, _, y, w, f.children, p, C, Ae);
      }
      "value" in g && o(c, "value", h.value, g.value);
    }
  }, E = (c, f, h, g, p, C, w, v, y) => {
    const _ = f.el = c ? c.el : l(""), T = f.anchor = c ? c.anchor : l("");
    let { patchFlag: x, dynamicChildren: F, slotScopeIds: P } = f;
    P && (v = v ? v.concat(P) : P), c == null ? (s(_, h, g), s(T, h, g), M(f.children, h, T, p, C, w, v, y)) : x > 0 && x & 64 && F && c.dynamicChildren ? (U(c.dynamicChildren, F, h, p, C, w, v), (f.key != null || p && f === p.subTree) && Xr(c, f, !0)) : D(c, f, h, T, p, C, w, v, y);
  }, Z = (c, f, h, g, p, C, w, v, y) => {
    f.slotScopeIds = v, c == null ? f.shapeFlag & 512 ? p.ctx.activate(f, h, g, w, y) : he(f, h, g, p, C, w, y) : $t(c, f, y);
  }, he = (c, f, h, g, p, C, w) => {
    const v = c.component = il(c, g, p);
    if (_n(c) && (v.ctx.renderer = dt), cl(v), v.asyncDep) {
      if (p && p.registerDep(v, ee), !c.el) {
        const y = v.subTree = G(we);
        A(null, y, f, h);
      }
      return;
    }
    ee(v, c, f, h, p, C, w);
  }, $t = (c, f, h) => {
    const g = f.component = c.component;
    if (mi(c, f, h))
      if (g.asyncDep && !g.asyncResolved) {
        Q(g, f, h);
        return;
      } else
        g.next = f, ai(g.update), g.update();
    else
      f.el = c.el, g.vnode = f;
  }, ee = (c, f, h, g, p, C, w) => {
    const v = () => {
      if (c.isMounted) {
        let { next: T, bu: x, u: F, parent: P, vnode: R } = c, j = T, B;
        et(c, !1), T ? (T.el = R.el, Q(c, T, w)) : T = R, x && En(x), (B = T.props && T.props.onVnodeBeforeUpdate) && Pe(B, P, T, R), et(c, !0);
        const X = Tn(c), xe = c.subTree;
        c.subTree = X, O(
          xe,
          X,
          m(xe.el),
          Wt(xe),
          c,
          p,
          C
        ), T.el = X.el, j === null && vi(c, X.el), F && fe(F, p), (B = T.props && T.props.onVnodeUpdated) && fe(() => Pe(B, P, T, R), p);
      } else {
        let T;
        const { el: x, props: F } = f, { bm: P, m: R, parent: j } = c, B = Lt(f);
        if (et(c, !1), P && En(P), !B && (T = F && F.onVnodeBeforeMount) && Pe(T, j, f), et(c, !0), x && wn) {
          const X = () => {
            c.subTree = Tn(c), wn(x, c.subTree, c, p, null);
          };
          B ? f.type.__asyncLoader().then(
            () => !c.isUnmounted && X()
          ) : X();
        } else {
          const X = c.subTree = Tn(c);
          O(null, X, h, g, c, p, C), f.el = X.el;
        }
        if (R && fe(R, p), !B && (T = F && F.onVnodeMounted)) {
          const X = f;
          fe(() => Pe(T, j, X), p);
        }
        (f.shapeFlag & 256 || j && Lt(j.vnode) && j.vnode.shapeFlag & 256) && c.a && fe(c.a, p), c.isMounted = !0, f = h = g = null;
      }
    }, y = c.effect = new Gn(
      v,
      () => cs(_),
      c.scope
    ), _ = c.update = () => y.run();
    _.id = c.uid, et(c, !0), _();
  }, Q = (c, f, h) => {
    f.component = c;
    const g = c.vnode.props;
    c.vnode = f, c.next = null, Ui(c, f.props, g, h), Wi(c, f.children, h), Et(), Ps(), Tt();
  }, D = (c, f, h, g, p, C, w, v, y = !1) => {
    const _ = c && c.children, T = c ? c.shapeFlag : 0, x = f.children, { patchFlag: F, shapeFlag: P } = f;
    if (F > 0) {
      if (F & 128) {
        zt(_, x, h, g, p, C, w, v, y);
        return;
      } else if (F & 256) {
        Je(_, x, h, g, p, C, w, v, y);
        return;
      }
    }
    P & 8 ? (T & 16 && Ae(_, p, C), x !== _ && d(h, x)) : T & 16 ? P & 16 ? zt(_, x, h, g, p, C, w, v, y) : Ae(_, p, C, !0) : (T & 8 && d(h, ""), P & 16 && M(x, h, g, p, C, w, v, y));
  }, Je = (c, f, h, g, p, C, w, v, y) => {
    c = c || gt, f = f || gt;
    const _ = c.length, T = f.length, x = Math.min(_, T);
    let F;
    for (F = 0; F < x; F++) {
      const P = f[F] = y ? Ke(f[F]) : Me(f[F]);
      O(c[F], P, h, null, p, C, w, v, y);
    }
    _ > T ? Ae(c, p, C, !0, !1, x) : M(f, h, g, p, C, w, v, y, x);
  }, zt = (c, f, h, g, p, C, w, v, y) => {
    let _ = 0;
    const T = f.length;
    let x = c.length - 1, F = T - 1;
    for (; _ <= x && _ <= F; ) {
      const P = c[_], R = f[_] = y ? Ke(f[_]) : Me(f[_]);
      if (ot(P, R))
        O(P, R, h, null, p, C, w, v, y);
      else
        break;
      _++;
    }
    for (; _ <= x && _ <= F; ) {
      const P = c[x], R = f[F] = y ? Ke(f[F]) : Me(f[F]);
      if (ot(P, R))
        O(P, R, h, null, p, C, w, v, y);
      else
        break;
      x--, F--;
    }
    if (_ > x) {
      if (_ <= F) {
        const P = F + 1, R = P < T ? f[P].el : g;
        for (; _ <= F; )
          O(null, f[_] = y ? Ke(f[_]) : Me(f[_]), h, R, p, C, w, v, y), _++;
      }
    } else if (_ > F)
      for (; _ <= x; )
        Oe(c[_], p, C, !0), _++;
    else {
      const P = _, R = _, j = /* @__PURE__ */ new Map();
      for (_ = R; _ <= F; _++) {
        const pe = f[_] = y ? Ke(f[_]) : Me(f[_]);
        pe.key != null && j.set(pe.key, _);
      }
      let B, X = 0;
      const xe = F - R + 1;
      let ht = !1, vs = 0;
      const Ot = new Array(xe);
      for (_ = 0; _ < xe; _++)
        Ot[_] = 0;
      for (_ = P; _ <= x; _++) {
        const pe = c[_];
        if (X >= xe) {
          Oe(pe, p, C, !0);
          continue;
        }
        let Ie;
        if (pe.key != null)
          Ie = j.get(pe.key);
        else
          for (B = R; B <= F; B++)
            if (Ot[B - R] === 0 && ot(pe, f[B])) {
              Ie = B;
              break;
            }
        Ie === void 0 ? Oe(pe, p, C, !0) : (Ot[Ie - R] = _ + 1, Ie >= vs ? vs = Ie : ht = !0, O(pe, f[Ie], h, null, p, C, w, v, y), X++);
      }
      const Cs = ht ? Ji(Ot) : gt;
      for (B = Cs.length - 1, _ = xe - 1; _ >= 0; _--) {
        const pe = R + _, Ie = f[pe], bs = pe + 1 < T ? f[pe + 1].el : g;
        Ot[_] === 0 ? O(null, Ie, h, bs, p, C, w, v, y) : ht && (B < 0 || _ !== Cs[B] ? Xe(Ie, h, bs, 2) : B--);
      }
    }
  }, Xe = (c, f, h, g, p = null) => {
    const { el: C, type: w, transition: v, children: y, shapeFlag: _ } = c;
    if (_ & 6) {
      Xe(c.component.subTree, f, h, g);
      return;
    }
    if (_ & 128) {
      c.suspense.move(f, h, g);
      return;
    }
    if (_ & 64) {
      w.move(c, f, h, dt);
      return;
    }
    if (w === be) {
      s(C, f, h);
      for (let x = 0; x < y.length; x++)
        Xe(y[x], f, h, g);
      s(c.anchor, f, h);
      return;
    }
    if (w === $n) {
      q(c, f, h);
      return;
    }
    if (g !== 2 && _ & 1 && v)
      if (g === 0)
        v.beforeEnter(C), s(C, f, h), fe(() => v.enter(C), p);
      else {
        const { leave: x, delayLeave: F, afterLeave: P } = v, R = () => s(C, f, h), j = () => {
          x(C, () => {
            R(), P && P();
          });
        };
        F ? F(C, R, j) : j();
      }
    else
      s(C, f, h);
  }, Oe = (c, f, h, g = !1, p = !1) => {
    const { type: C, props: w, ref: v, children: y, dynamicChildren: _, shapeFlag: T, patchFlag: x, dirs: F } = c;
    if (v != null && kn(v, null, h, c, !0), T & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const P = T & 1 && F, R = !Lt(c);
    let j;
    if (R && (j = w && w.onVnodeBeforeUnmount) && Pe(j, f, c), T & 6)
      fo(c.component, h, g);
    else {
      if (T & 128) {
        c.suspense.unmount(h, g);
        return;
      }
      P && Ge(c, null, f, "beforeUnmount"), T & 64 ? c.type.remove(c, f, h, p, dt, g) : _ && (C !== be || x > 0 && x & 64) ? Ae(_, f, h, !1, !0) : (C === be && x & 384 || !p && T & 16) && Ae(y, f, h), g && _s(c);
    }
    (R && (j = w && w.onVnodeUnmounted) || P) && fe(() => {
      j && Pe(j, f, c), P && Ge(c, null, f, "unmounted");
    }, h);
  }, _s = (c) => {
    const { type: f, el: h, anchor: g, transition: p } = c;
    if (f === be) {
      uo(h, g);
      return;
    }
    if (f === $n) {
      W(c);
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
  }, uo = (c, f) => {
    let h;
    for (; c !== f; )
      h = b(c), r(c), c = h;
    r(f);
  }, fo = (c, f, h) => {
    const { bum: g, scope: p, update: C, subTree: w, um: v } = c;
    g && En(g), p.stop(), C && (C.active = !1, Oe(w, c, f, h)), v && fe(v, f), fe(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, Ae = (c, f, h, g = !1, p = !1, C = 0) => {
    for (let w = C; w < c.length; w++)
      Oe(c[w], f, h, g, p);
  }, Wt = (c) => c.shapeFlag & 6 ? Wt(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : b(c.anchor || c.el), ms = (c, f, h) => {
    c == null ? f._vnode && Oe(f._vnode, null, null, !0) : O(f._vnode || null, c, f, null, null, null, h), Ps(), Mr(), f._vnode = c;
  }, dt = {
    p: O,
    um: Oe,
    m: Xe,
    r: _s,
    mt: he,
    mc: M,
    pc: D,
    pbc: U,
    n: Wt,
    o: e
  };
  let yn, wn;
  return t && ([yn, wn] = t(dt)), {
    render: ms,
    hydrate: yn,
    createApp: qi(ms, yn)
  };
}
function et({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Xr(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (I(s) && I(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = Ke(r[o]), l.el = i.el), n || Xr(i, l));
    }
}
function Ji(e) {
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
const Xi = (e) => e.__isTeleport, be = Symbol(void 0), as = Symbol(void 0), we = Symbol(void 0), $n = Symbol(void 0), At = [];
let Te = null;
function J(e = !1) {
  At.push(Te = e ? null : []);
}
function Gi() {
  At.pop(), Te = At[At.length - 1] || null;
}
let Vt = 1;
function Ds(e) {
  Vt += e;
}
function Gr(e) {
  return e.dynamicChildren = Vt > 0 ? Te || gt : null, Gi(), Vt > 0 && Te && Te.push(e), e;
}
function ve(e, t, n, s, r, o) {
  return Gr(K(e, t, n, s, r, o, !0));
}
function Ve(e, t, n, s, r) {
  return Gr(G(e, t, n, s, r, !0));
}
function cn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ot(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Cn = "__vInternal", eo = ({ key: e }) => e != null ? e : null, en = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? le(e) || ie(e) || L(e) ? { i: ae, r: e, k: t, f: !!n } : e : null;
function K(e, t = null, n = null, s = 0, r = null, o = e === be ? 0 : 1, i = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && eo(t),
    ref: t && en(t),
    scopeId: Hr,
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
  return l ? (ds(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= le(n) ? 8 : 16), Vt > 0 && !i && Te && (u.patchFlag > 0 || o & 6) && u.patchFlag !== 32 && Te.push(u), u;
}
const G = el;
function el(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === Hi) && (e = we), cn(e)) {
    const l = Qe(e, t, !0);
    return n && ds(l, n), Vt > 0 && !o && Te && (l.shapeFlag & 6 ? Te[Te.indexOf(e)] = l : Te.push(l)), l.patchFlag |= -2, l;
  }
  if (dl(e) && (e = e.__vccOpts), t) {
    t = tl(t);
    let { class: l, style: u } = t;
    l && !le(l) && (t.class = un(l)), z(u) && (Er(u) && !I(u) && (u = te({}, u)), t.style = Dt(u));
  }
  const i = le(e) ? 1 : Ci(e) ? 128 : Xi(e) ? 64 : z(e) ? 4 : L(e) ? 2 : 0;
  return K(e, t, n, s, r, i, o, !0);
}
function tl(e) {
  return e ? Er(e) || Cn in e ? te({}, e) : e : null;
}
function Qe(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e, l = t ? to(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && eo(l),
    ref: t && t.ref ? n && r ? I(r) ? r.concat(en(t)) : [r, en(t)] : en(t) : r,
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
    ssContent: e.ssContent && Qe(e.ssContent),
    ssFallback: e.ssFallback && Qe(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function nl(e = " ", t = 0) {
  return G(as, null, e, t);
}
function sl(e = "", t = !1) {
  return t ? (J(), Ve(we, null, e)) : G(we, null, e);
}
function Me(e) {
  return e == null || typeof e == "boolean" ? G(we) : I(e) ? G(
    be,
    null,
    e.slice()
  ) : typeof e == "object" ? Ke(e) : G(as, null, String(e));
}
function Ke(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qe(e);
}
function ds(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), ds(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Cn in t) ? t._ctx = ae : r === 3 && ae && (ae.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    L(t) ? (t = { default: t, _ctx: ae }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [nl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function to(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = un([t.class, s.class]));
      else if (r === "style")
        t.style = Dt([t.style, s.style]);
      else if (fn(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(I(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Pe(e, t, n, s = null) {
  ye(e, t, 7, [
    n,
    s
  ]);
}
const rl = Jr();
let ol = 0;
function il(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || rl, o = {
    uid: ol++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Fo(!0),
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
    propsOptions: Zr(s, r),
    emitsOptions: Ar(s, r),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = pi.bind(null, o), e.ce && e.ce(o), o;
}
let ne = null;
const ll = () => ne || ae, xt = (e) => {
  ne = e, e.scope.on();
}, ut = () => {
  ne && ne.scope.off(), ne = null;
};
function no(e) {
  return e.vnode.shapeFlag & 4;
}
let Bt = !1;
function cl(e, t = !1) {
  Bt = t;
  const { props: n, children: s } = e.vnode, r = no(e);
  ki(e, n, r, t), zi(e, s);
  const o = r ? ul(e, t) : void 0;
  return Bt = !1, o;
}
function ul(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Tr(new Proxy(e.ctx, Ni));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? al(e) : null;
    xt(e), Et();
    const o = We(s, e, 0, [e.props, r]);
    if (Tt(), ut(), ur(o)) {
      if (o.then(ut, ut), t)
        return o.then((i) => {
          js(e, i, t);
        }).catch((i) => {
          pn(i, e, 0);
        });
      e.asyncDep = o;
    } else
      js(e, o, t);
  } else
    so(e, t);
}
function js(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : z(t) && (e.setupState = Fr(t)), so(e, n);
}
let ks;
function so(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && ks && !s.render) {
      const r = s.template || us(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: u } = s, a = te(te({
          isCustomElement: o,
          delimiters: l
        }, i), u);
        s.render = ks(r, a);
      }
    }
    e.render = s.render || Fe;
  }
  xt(e), Et(), Si(e), Tt(), ut();
}
function fl(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return me(e, "get", "$attrs"), t[n];
    }
  });
}
function al(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = fl(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function hs(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Fr(Tr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in on)
          return on[n](e);
      }
    }));
}
function dl(e) {
  return L(e) && "__vccOpts" in e;
}
const bt = (e, t) => ci(e, t, Bt);
function hl(e, t, n) {
  const s = arguments.length;
  return s === 2 ? z(t) && !I(t) ? cn(t) ? G(e, null, [t]) : G(e, t) : G(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && cn(n) && (n = [n]), G(e, t, n));
}
const pl = "3.2.40", gl = "http://www.w3.org/2000/svg", it = typeof document < "u" ? document : null, Us = it && /* @__PURE__ */ it.createElement("template"), _l = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t ? it.createElementNS(gl, e) : it.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => it.createTextNode(e),
  createComment: (e) => it.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => it.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      Us.innerHTML = s ? `<svg>${e}</svg>` : e;
      const l = Us.content;
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
function ml(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function vl(e, t, n) {
  const s = e.style, r = le(n);
  if (n && !r) {
    for (const o in n)
      Un(s, o, n[o]);
    if (t && !le(t))
      for (const o in t)
        n[o] == null && Un(s, o, "");
  } else {
    const o = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = o);
  }
}
const Ks = /\s*!important$/;
function Un(e, t, n) {
  if (I(n))
    n.forEach((s) => Un(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Cl(e, t);
    Ks.test(n) ? e.setProperty(Re(s), n.replace(Ks, ""), "important") : e[s] = n;
  }
}
const zs = ["Webkit", "Moz", "ms"], On = {};
function Cl(e, t) {
  const n = On[t];
  if (n)
    return n;
  let s = Ze(t);
  if (s !== "filter" && s in e)
    return On[t] = s;
  s = dr(s);
  for (let r = 0; r < zs.length; r++) {
    const o = zs[r] + s;
    if (o in e)
      return On[t] = o;
  }
  return t;
}
const Ws = "http://www.w3.org/1999/xlink";
function bl(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Ws, t.slice(6, t.length)) : e.setAttributeNS(Ws, t, n);
  else {
    const o = go(t);
    n == null || o && !ir(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function yl(e, t, n, s, r, o, i) {
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
    u === "boolean" ? n = ir(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(t);
}
const [ro, wl] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let Kn = 0;
const xl = /* @__PURE__ */ Promise.resolve(), El = () => {
  Kn = 0;
}, Tl = () => Kn || (xl.then(El), Kn = ro());
function Fl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function $l(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Ol(e, t, n, s, r = null) {
  const o = e._vei || (e._vei = {}), i = o[t];
  if (s && i)
    i.value = s;
  else {
    const [l, u] = Il(t);
    if (s) {
      const a = o[t] = Pl(s, r);
      Fl(e, l, a, u);
    } else
      i && ($l(e, l, i, u), o[t] = void 0);
  }
}
const Zs = /(?:Once|Passive|Capture)$/;
function Il(e) {
  let t;
  if (Zs.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Zs); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Re(e.slice(2)), t];
}
function Pl(e, t) {
  const n = (s) => {
    const r = s.timeStamp || ro();
    (wl || r >= n.attached - 1) && ye(Ml(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = Tl(), n;
}
function Ml(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return t;
}
const qs = /^on[a-z]/, Ll = (e, t, n, s, r = !1, o, i, l, u) => {
  t === "class" ? ml(e, s, r) : t === "style" ? vl(e, n, s) : fn(t) ? qn(t) || Ol(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Al(e, t, s, r)) ? yl(e, t, s, o, i, l, u) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), bl(e, t, s, r));
};
function Al(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && qs.test(t) && L(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || qs.test(t) && le(n) ? !1 : t in e;
}
function ft(e, t) {
  const n = de(e);
  class s extends ps {
    constructor(o) {
      super(n, o, t);
    }
  }
  return s.def = n, s;
}
const Hl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class ps extends Hl {
  constructor(t, n = {}, s) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this._connected = !0, this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    this._connected = !1, Ir(() => {
      this._connected || (tr(null, this.shadowRoot), this._instance = null);
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
      const { props: r, styles: o } = s, i = !I(r), l = r ? i ? Object.keys(r) : r : [];
      let u;
      if (i)
        for (const a in this._props) {
          const d = r[a];
          (d === Number || d && d.type === Number) && (this._props[a] = nn(this._props[a]), (u || (u = /* @__PURE__ */ Object.create(null)))[a] = !0);
        }
      this._numberProps = u;
      for (const a of Object.keys(this))
        a[0] !== "_" && this._setProp(a, this[a], !0, !1);
      for (const a of l.map(Ze))
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
    this._numberProps && this._numberProps[t] && (n = nn(n)), this._setProp(Ze(t), n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, s = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), s && (n === !0 ? this.setAttribute(Re(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Re(t), n + "") : n || this.removeAttribute(Re(t))));
  }
  _update() {
    tr(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = G(this._def, te({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, n.emit = (r, ...o) => {
        this.dispatchEvent(new CustomEvent(r, {
          detail: o
        }));
      };
      let s = this;
      for (; s = s && (s.parentNode || s.host); )
        if (s instanceof ps) {
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
const ke = "transition", Pt = "animation", Ft = (e, { slots: t }) => hl(Vr, Rl(e), t);
Ft.displayName = "Transition";
const oo = {
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
Ft.props = /* @__PURE__ */ te({}, Vr.props, oo);
const tt = (e, t = []) => {
  I(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ys = (e) => e ? I(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Rl(e) {
  const t = {};
  for (const E in e)
    E in oo || (t[E] = e[E]);
  if (e.css === !1)
    return t;
  const { name: n = "v", type: s, duration: r, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: u = o, appearActiveClass: a = i, appearToClass: d = l, leaveFromClass: m = `${n}-leave-from`, leaveActiveClass: b = `${n}-leave-active`, leaveToClass: $ = `${n}-leave-to` } = e, H = Nl(r), O = H && H[0], V = H && H[1], { onBeforeEnter: A, onEnter: ue, onEnterCancelled: q, onLeave: W, onLeaveCancelled: se, onBeforeAppear: De = A, onAppear: $e = ue, onAppearCancelled: M = q } = t, Y = (E, Z, he) => {
    nt(E, Z ? d : l), nt(E, Z ? a : i), he && he();
  }, U = (E, Z) => {
    E._isLeaving = !1, nt(E, m), nt(E, $), nt(E, b), Z && Z();
  }, re = (E) => (Z, he) => {
    const $t = E ? $e : ue, ee = () => Y(Z, E, he);
    tt($t, [Z, ee]), Qs(() => {
      nt(Z, E ? u : o), Ue(Z, E ? d : l), Ys($t) || Js(Z, s, O, ee);
    });
  };
  return te(t, {
    onBeforeEnter(E) {
      tt(A, [E]), Ue(E, o), Ue(E, i);
    },
    onBeforeAppear(E) {
      tt(De, [E]), Ue(E, u), Ue(E, a);
    },
    onEnter: re(!1),
    onAppear: re(!0),
    onLeave(E, Z) {
      E._isLeaving = !0;
      const he = () => U(E, Z);
      Ue(E, m), Bl(), Ue(E, b), Qs(() => {
        !E._isLeaving || (nt(E, m), Ue(E, $), Ys(W) || Js(E, s, V, he));
      }), tt(W, [E, he]);
    },
    onEnterCancelled(E) {
      Y(E, !1), tt(q, [E]);
    },
    onAppearCancelled(E) {
      Y(E, !0), tt(M, [E]);
    },
    onLeaveCancelled(E) {
      U(E), tt(se, [E]);
    }
  });
}
function Nl(e) {
  if (e == null)
    return null;
  if (z(e))
    return [In(e.enter), In(e.leave)];
  {
    const t = In(e);
    return [t, t];
  }
}
function In(e) {
  return nn(e);
}
function Ue(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(t);
}
function nt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Qs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Sl = 0;
function Js(e, t, n, s) {
  const r = e._endId = ++Sl, o = () => {
    r === e._endId && s();
  };
  if (n)
    return setTimeout(o, n);
  const { type: i, timeout: l, propCount: u } = Vl(e, t);
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
function Vl(e, t) {
  const n = window.getComputedStyle(e), s = (H) => (n[H] || "").split(", "), r = s(ke + "Delay"), o = s(ke + "Duration"), i = Xs(r, o), l = s(Pt + "Delay"), u = s(Pt + "Duration"), a = Xs(l, u);
  let d = null, m = 0, b = 0;
  t === ke ? i > 0 && (d = ke, m = i, b = o.length) : t === Pt ? a > 0 && (d = Pt, m = a, b = u.length) : (m = Math.max(i, a), d = m > 0 ? i > a ? ke : Pt : null, b = d ? d === ke ? o.length : u.length : 0);
  const $ = d === ke && /\b(transform|all)(,|$)/.test(n[ke + "Property"]);
  return {
    type: d,
    timeout: m,
    propCount: b,
    hasTransform: $
  };
}
function Xs(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Gs(n) + Gs(e[s])));
}
function Gs(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Bl() {
  return document.body.offsetHeight;
}
const Dl = /* @__PURE__ */ te({ patchProp: Ll }, _l);
let er;
function jl() {
  return er || (er = Yi(Dl));
}
const tr = (...e) => {
  jl().render(...e);
};
function gs(e) {
  Object.keys(e).forEach((t) => {
    yt.prototype[t] = e[t];
  });
}
function bn(e) {
  let t;
  const n = (o) => {
    t = o;
  };
  return { moduleFunc: (o) => (e({ player: o, onModuleDispose: n }), o), dispose: () => {
    t && t();
  } };
}
function kl() {
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
const Ul = bn(({ player: e }) => {
  gs({
    on(t, n) {
      return Array.isArray(t) || (t = [t]), t.forEach((s) => e.$el.addEventListener(s, n)), e;
    },
    once(t, n) {
      const s = (r) => (e.off(t, s), n(r));
      return e.on(t, s);
    },
    off(t, n) {
      return Array.isArray(t) || (t = [t]), t.forEach((s) => e.$el.removeEventListener(s, n)), e;
    }
  });
});
var _e = /* @__PURE__ */ ((e) => (e.Created = "created", e.TimeUpdate = "timeupdate", e.LoadStart = "loadstart", e.Play = "play", e.Ended = "ended", e.Pause = "pause", e.Playing = "playing", e.DurationChange = "durationchange", e.VolumeChange = "volumechange", e.FullscreenChange = "fullscreenchange", e.MozFullscreenChange = "mozfullscreenchange", e.WebKitFullscreenChange = "webkitfullscreenchange", e))(_e || {});
const Kl = [
  "fullscreenchange",
  "mozfullscreenchange",
  "webkitfullscreenchange"
];
var nr;
const Ut = typeof window < "u", zl = (e) => typeof e == "string", Pn = () => {
};
Ut && ((nr = window == null ? void 0 : window.navigator) == null ? void 0 : nr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Wl(e) {
  return typeof e == "function" ? e() : Ye(e);
}
function Zl(e) {
  return e;
}
function ql(e) {
  return Oo() ? (Io(e), !0) : !1;
}
function Yl(e) {
  var t;
  const n = Wl(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ql = Ut ? window : void 0;
Ut && window.document;
Ut && window.navigator;
Ut && window.location;
function io(...e) {
  let t, n, s, r;
  if (zl(e[0]) ? ([n, s, r] = e, t = Ql) : [t, n, s, r] = e, !t)
    return Pn;
  let o = Pn;
  const i = Gt(() => Yl(t), (u) => {
    o(), u && (u.addEventListener(n, s, r), o = () => {
      u.removeEventListener(n, s, r), o = Pn;
    });
  }, { immediate: !0, flush: "post" }), l = () => {
    i(), o();
  };
  return ql(l), l;
}
const zn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Wn = "__vueuse_ssr_handlers__";
zn[Wn] = zn[Wn] || {};
zn[Wn];
var sr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(sr || (sr = {}));
var Jl = Object.defineProperty, rr = Object.getOwnPropertySymbols, Xl = Object.prototype.hasOwnProperty, Gl = Object.prototype.propertyIsEnumerable, or = (e, t, n) => t in e ? Jl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ec = (e, t) => {
  for (var n in t || (t = {}))
    Xl.call(t, n) && or(e, n, t[n]);
  if (rr)
    for (var n of rr(t))
      Gl.call(t, n) && or(e, n, t[n]);
  return e;
};
const tc = {
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
ec({
  linear: Zl
}, tc);
const nc = bn(({ player: e, onModuleDispose: t }) => {
  const n = new Array();
  Kl.forEach((s) => {
    const r = io(e.$containerEl, s, () => {
      e.isFullscreen.value = !e.isFullscreen.value;
    });
    n.push(r);
  }), gs({
    isFullscreen: vt(!1),
    toFullScreen() {
      (e.$containerEl.requestFullscreen || e.$containerEl.mozRequestFullScreen || e.$containerEl.webkitRequestFullscreen || e.$containerEl.msRequestFullscreen).call(e.$containerEl);
    },
    fromFullScreen() {
      (document.exitFullscreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.msExitFullscreen).call(document);
    }
  }), t(() => n.forEach((s) => s()));
});
let sc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function Kt(e) {
  const t = new Array(), n = (s, r) => {
    const o = jt(e.$el);
    return ii((i, l) => {
      let u = o[s];
      const a = () => {
        u = o[s], l();
      };
      return r.forEach((d) => {
        t.push(io(o, d, a));
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
const rc = bn(({ player: e, onModuleDispose: t }) => {
  const { createReactive: n, cleanupListenerFns: s } = Kt(e), r = n("currentTime", [_e.TimeUpdate]), o = n("duration", [_e.DurationChange]), i = n("ended", [_e.Ended]), l = n("volume", [_e.VolumeChange]), u = n("muted", [_e.VolumeChange]), a = n("paused", [_e.Pause, _e.Playing]), d = n("played", [_e.Pause, _e.Playing]);
  e.reactive = {
    media: jt(e.$el),
    currentTime: r,
    duration: o,
    volume: l,
    muted: u,
    paused: a,
    played: d,
    ended: i
  }, t(() => s.forEach((m) => m()));
});
var lo = /* @__PURE__ */ ((e) => (e.MOUNTED = "mounted", e.UNMOUNTED = "unmounted", e))(lo || {});
const oc = bn(({ player: e }) => {
  const t = {};
  Object.values(lo).forEach((n) => {
    t[n] = [];
  }), gs({
    _hooks: t
  });
}), lt = class {
  constructor(t, n) {
    It(this, "id");
    It(this, "$el");
    It(this, "$containerEl");
    this.id = `player-${sc(10)}`, this.$el = t, this.$containerEl = n, lt.modules_.forEach((s) => s.moduleFunc(this));
  }
  static installModule(t) {
    !!t && lt.modules_.indexOf(t) < 0 && lt.modules_.push(t);
  }
  static use(t) {
    return t.forEach((n) => lt.installModule(n)), lt;
  }
  togglePlay() {
    this.$el.paused || this.$el.ended ? this.$el.play() : this.$el.pause();
  }
};
let yt = lt;
It(yt, "modules_", []);
yt.use([Ul, rc, nc, oc]);
const ic = ["id", "src"], lc = { class: "lpr__container" }, cc = /* @__PURE__ */ de({
  __name: "VideoPlayer",
  props: {
    src: { default: "" }
  },
  emits: [_e.Created],
  setup(e, { emit: t }) {
    const n = vt(), s = vt(), r = vt();
    vn(() => {
      if (!s.value || !r.value)
        return;
      const i = new yt(s.value, r.value);
      n.value = i, Rr("player", i), t(_e.Created, i);
    });
    const o = () => {
      !n.value || n.value.togglePlay();
    };
    return (i, l) => {
      var u;
      return J(), ve("div", {
        ref_key: "containerRef",
        ref: r,
        class: un([{ "lpr--fullscreen": (u = n.value) == null ? void 0 : u.isFullscreen }, "lpr"])
      }, [
        K("video", to({
          id: n.value && n.value.id,
          ref_key: "mediaRef",
          ref: s,
          src: e.src,
          class: "lpr__video"
        }, i.$attrs, { onClick: o }), null, 16, ic),
        K("div", lc, [
          Ri(i.$slots, "default")
        ])
      ], 2);
    };
  }
}), uc = `:host{--lpr-player-border-radius: 16px}.lpr{border:0 solid transparent;border-radius:var(--lpr-player-border-radius);height:100%;overflow:hidden;position:relative;width:100%}.lpr.lpr--fullscreen{border-radius:0}.lpr__video{height:100%;object-fit:cover;width:100%}.lpr__container{align-items:center;box-sizing:border-box;display:grid;gap:12px;grid-template-areas:". . . . ." "timeline timeline timeline timeline timeline" "play volume time . fullscreen";grid-template-columns:auto auto auto 1fr auto;grid-template-rows:1fr auto auto;height:100%;left:0;padding:14px 20px;pointer-events:none;position:absolute;top:0;width:100%}.lpr video::-webkit-media-controls-overlay-enclosure{display:none!important}.lpr video::-webkit-media-controls-enclosure{display:none!important}.lpr video::-webkit-media-controls{display:none!important}
`, at = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, fc = /* @__PURE__ */ at(cc, [["styles", [uc]]]), ac = ["width", "height", "fill"], dc = /* @__PURE__ */ K("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M6.86355 2.05557C7.42031 2.02791 7.94738 2.24828 8.46759 2.53995C8.9882 2.83184 9.62066 3.26666 10.4059 3.80651L10.4378 3.82845L17.5894 8.74515L17.6192 8.76565C18.2375 9.19076 18.7436 9.53867 19.12 9.85095C19.5043 10.1698 19.8337 10.5145 20.0159 10.9612C20.2877 11.6272 20.2877 12.3731 20.0159 13.039C19.8337 13.4857 19.5043 13.8304 19.12 14.1493C18.7436 14.4616 18.2375 14.8095 17.6192 15.2346L17.5894 15.2551L10.4378 20.1718L10.4059 20.1937L10.4058 20.1938C9.62064 20.7336 8.98819 21.1684 8.46759 21.4603C7.94738 21.752 7.42031 21.9723 6.86355 21.9447C6.05497 21.9045 5.30516 21.5101 4.81398 20.8665C4.47577 20.4234 4.35876 19.8642 4.30439 19.2703C4.24998 18.676 4.24999 17.9085 4.25 16.9557V16.9556V16.9168V7.08342V7.04459V7.04449C4.24999 6.0917 4.24998 5.32424 4.30439 4.72991C4.35876 4.136 4.47577 3.57683 4.81398 3.13371C5.30516 2.49016 6.05497 2.09574 6.86355 2.05557Z"
}, null, -1), hc = [
  dc
], co = /* @__PURE__ */ de({
  __name: "PlayIcon",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    color: { default: "#1D1E1F" }
  },
  setup(e) {
    return (t, n) => (J(), ve("svg", {
      width: e.width,
      height: e.height,
      viewBox: "0 0 24 24",
      fill: e.color,
      xmlns: "http://www.w3.org/2000/svg"
    }, hc, 8, ac));
  }
}), pc = ["src"], gc = /* @__PURE__ */ de({
  __name: "Poster",
  props: {
    src: { default: "" }
  },
  setup(e) {
    const t = Ne("player"), n = vt(!0);
    vn(() => {
      t.once(_e.Playing, () => s(!1));
    });
    const s = (o = !n.value) => {
      n.value = o;
    }, r = () => {
      !t || t.$el.play();
    };
    return (o, i) => (J(), Ve(Ft, null, {
      default: kt(() => [
        n.value ? (J(), ve("div", {
          key: 0,
          class: "lpr-poster__container",
          onClick: r
        }, [
          K("img", {
            src: e.src,
            alt: "lpr-poster",
            class: "lpr-poster"
          }, null, 8, pc),
          G(co, {
            class: "lpr-poster__icon",
            color: "#fff",
            height: "56",
            width: "56"
          })
        ])) : sl("", !0)
      ]),
      _: 1
    }));
  }
}), _c = `:host{--lpr-poster-background: #0a0a0a;--lpr-poster-brightness: 60%}.lpr-poster{filter:brightness(var(--lpr-poster-brightness));height:100%;object-fit:cover;width:100%}.lpr-poster__container{background:var(--lpr-poster-background);cursor:pointer;height:100%;left:0;pointer-events:all;position:absolute;top:0;transition:all ease-in-out .4s;width:100%;z-index:2}.lpr-poster__container:hover{transform:scale(1.05);transition:all ease-in-out .4s}.lpr-poster__icon{left:50%;opacity:.85;position:absolute;top:50%;transform:translate(-50%,-50%);transition:all ease-in-out .4s;z-index:3}.lpr-poster__icon:hover{opacity:1;transition:all ease-in-out .4s}.v-enter-active,.v-leave-active{transition:opacity .5s ease}.v-enter-from,.v-leave-to{opacity:0}
`, mc = /* @__PURE__ */ at(gc, [["styles", [_c]]]), vc = { class: "lpr-timeline__container" }, Cc = /* @__PURE__ */ K("div", { class: "lpr-timeline__circle" }, null, -1), bc = [
  Cc
], yc = /* @__PURE__ */ de({
  __name: "TimeLine",
  setup(e) {
    const t = Ne("player"), { currentTime: n, duration: s } = Kt(t), r = bt(() => `${n.value / s.value * 100}%`), o = (i) => {
      const { clientX: l, target: u } = i, { left: a, width: d } = u.getBoundingClientRect();
      n.value = s.value * ((l - a) / d);
    };
    return (i, l) => (J(), ve("div", vc, [
      K("div", {
        class: "lpr-timeline",
        onClick: o
      }),
      K("div", {
        style: Dt({ width: Ye(r) }),
        class: "lpr-timeline__progress"
      }, bc, 4)
    ]));
  }
}), wc = `:host{--timeline-border-radius: 8px;--timeline-color: #787574;grid-area:timeline;--timeline-height: 4px;--timeline-progress-color: #00b9ae}.lpr-timeline__container{height:var(--timeline-height);position:relative}.lpr-timeline,.lpr-timeline__progress{border:0 solid transparent;border-radius:var(--timeline-border-radius);bottom:0;height:var(--timeline-height);left:0;position:absolute;right:0;top:0}.lpr-timeline{background-color:var(--timeline-color);cursor:pointer;opacity:.7;pointer-events:all}.lpr-timeline__progress{background-color:var(--timeline-progress-color);overflow:visible;pointer-events:none;resize:horizontal;width:0}.lpr-timeline__circle{background-color:var(--timeline-progress-color);border-radius:50%;height:10px;position:absolute;right:0;top:50%;transform:translateY(-50%);width:10px}
`, xc = /* @__PURE__ */ at(yc, [["styles", [wc]]]), Ec = { class: "lpr-time" }, Tc = /* @__PURE__ */ de({
  __name: "Time",
  setup(e) {
    const t = Ne("player"), { toHMSStrings: n } = kl(), { currentTime: s, duration: r } = Kt(t), o = bt(() => r.value < 3600), i = bt(() => {
      const { h: u, m: a, s: d } = n(s.value);
      return o ? `${a}:${d}` : `${u}:${a}:${d}`;
    }), l = bt(() => {
      const { h: u, m: a, s: d } = n(r.value);
      return o ? `${a}:${d}` : `${u}:${a}:${d}`;
    });
    return (u, a) => (J(), ve("div", Ec, ys(Ye(i)) + " / " + ys(Ye(l)), 1));
  }
}), Fc = `:host{grid-area:time}.lpr-time{color:#fff;font-size:18px;font-weight:500}
`, $c = /* @__PURE__ */ at(Tc, [["styles", [Fc]]]), Oc = ["width", "height", "fill"], Ic = /* @__PURE__ */ K("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M3.62891 0.250001H3.6H3.4H3.37109H3.37106H3.37104C2.9757 0.249988 2.63465 0.249978 2.35373 0.27293C2.05722 0.297155 1.76231 0.350642 1.47852 0.495238C1.05516 0.710953 0.710953 1.05516 0.495237 1.47852C0.350642 1.76231 0.297155 2.05722 0.272929 2.35373C0.249978 2.63465 0.249988 2.9757 0.250001 3.37104V3.37106V3.37108V3.4V16.6V16.6289V16.6289V16.629C0.249988 17.0243 0.249978 17.3654 0.272929 17.6463C0.297155 17.9428 0.350642 18.2377 0.495237 18.5215C0.710953 18.9448 1.05516 19.2891 1.47852 19.5048C1.76231 19.6494 2.05722 19.7028 2.35373 19.7271C2.63463 19.75 2.97567 19.75 3.37098 19.75H3.37108H3.4H3.6H3.62893H3.62902C4.02434 19.75 4.36537 19.75 4.64627 19.7271C4.94278 19.7028 5.2377 19.6494 5.52148 19.5048C5.94485 19.2891 6.28905 18.9448 6.50477 18.5215C6.64936 18.2377 6.70285 17.9428 6.72708 17.6463C6.75003 17.3653 6.75002 17.0243 6.75 16.6289L6.75 16.6V3.4L6.75 3.37109C6.75002 2.97573 6.75003 2.63466 6.72708 2.35373C6.70285 2.05722 6.64936 1.76231 6.50477 1.47852C6.28905 1.05516 5.94485 0.710953 5.52148 0.495238C5.2377 0.350642 4.94278 0.297155 4.64627 0.27293C4.36536 0.249978 4.0243 0.249988 3.62896 0.250001H3.62894H3.62891ZM14.6289 0.250001H14.6H14.4H14.3711H14.3711H14.371C13.9757 0.249988 13.6346 0.249978 13.3537 0.27293C13.0572 0.297155 12.7623 0.350642 12.4785 0.495238C12.0552 0.710953 11.711 1.05516 11.4952 1.47852C11.3506 1.76231 11.2972 2.05722 11.2729 2.35373C11.25 2.63465 11.25 2.97571 11.25 3.37106V3.37108V3.4V16.6V16.6289V16.6289C11.25 17.0243 11.25 17.3654 11.2729 17.6463C11.2972 17.9428 11.3506 18.2377 11.4952 18.5215C11.711 18.9448 12.0552 19.2891 12.4785 19.5048C12.7623 19.6494 13.0572 19.7028 13.3537 19.7271C13.6346 19.75 13.9757 19.75 14.371 19.75H14.3711H14.4H14.6H14.6289H14.629C15.0243 19.75 15.3654 19.75 15.6463 19.7271C15.9428 19.7028 16.2377 19.6494 16.5215 19.5048C16.9448 19.2891 17.2891 18.9448 17.5048 18.5215C17.6494 18.2377 17.7028 17.9428 17.7271 17.6463C17.75 17.3653 17.75 17.0243 17.75 16.6289V16.6V3.4V3.37109C17.75 2.97573 17.75 2.63466 17.7271 2.35373C17.7028 2.05722 17.6494 1.76231 17.5048 1.47852C17.2891 1.05516 16.9448 0.710953 16.5215 0.495238C16.2377 0.350642 15.9428 0.297155 15.6463 0.27293C15.3654 0.249978 15.0243 0.249988 14.629 0.250001H14.6289H14.6289Z"
}, null, -1), Pc = [
  Ic
], Mc = /* @__PURE__ */ de({
  __name: "PauseIcon",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    color: { default: "#1D1E1F" }
  },
  setup(e) {
    return (t, n) => (J(), ve("svg", {
      width: e.width,
      height: e.height,
      viewBox: "-2 -2 22 24",
      fill: e.color,
      xmlns: "http://www.w3.org/2000/svg"
    }, Pc, 8, Oc));
  }
}), Lc = /* @__PURE__ */ de({
  __name: "PlayControl",
  setup(e) {
    const t = Ne("player"), { paused: n, ended: s } = Kt(t), r = () => {
      !t || (n.value || s.value ? t.$el.play() : t.$el.pause());
    };
    return (o, i) => (J(), ve("div", {
      class: "lpr-play",
      onClick: r
    }, [
      G(Ft, null, {
        default: kt(() => [
          Ye(n) ? (J(), Ve(co, {
            key: 0,
            class: "lpr-play__icon",
            color: "#fff",
            height: "32",
            width: "32"
          })) : (J(), Ve(Mc, {
            key: 1,
            class: "lpr-play__icon",
            color: "#fff",
            height: "32",
            width: "32"
          }))
        ]),
        _: 1
      })
    ]));
  }
}), Ac = `:host{grid-area:play}.lpr-play{cursor:pointer;display:inline-block;height:32px;margin-right:16px;pointer-events:all;position:relative;width:32px}.lpr-play__icon{position:absolute}.v-enter-active,.v-leave-active{transition:all .25s ease-out}.v-enter-from{opacity:0;transform:translateY(-30px)}.v-leave-to{opacity:0;transform:translateY(30px)}
`, Hc = /* @__PURE__ */ at(Lc, [["styles", [Ac]]]), Rc = ["width", "height", "fill"], Nc = /* @__PURE__ */ K("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M12.4697 7.53031C12.1768 7.23742 12.1768 6.76254 12.4697 6.46965L17.1893 1.75H14C13.5858 1.75 13.25 1.41421 13.25 1C13.25 0.585786 13.5858 0.25 14 0.25H18.9946H19.0053H19.75V1V6C19.75 6.41421 19.4142 6.75 19 6.75C18.5858 6.75 18.25 6.41421 18.25 6V2.81062L13.5303 7.53031C13.2374 7.8232 12.7626 7.8232 12.4697 7.53031ZM7.53032 12.4696C7.82321 12.7625 7.82321 13.2374 7.53032 13.5303L2.81063 18.25H6C6.41421 18.25 6.75 18.5858 6.75 19C6.75 19.4142 6.41421 19.75 6 19.75H1H0.25V19.0045V18.9954V14C0.25 13.5858 0.585786 13.25 1 13.25C1.41421 13.25 1.75 13.5858 1.75 14V17.1893L6.46966 12.4696C6.76255 12.1767 7.23742 12.1767 7.53032 12.4696ZM1.75002 2.81066V6C1.75002 6.41421 1.41423 6.75 1.00002 6.75C0.585805 6.75 0.250019 6.41421 0.250019 6V1V0.25H1.00002H6.00002C6.41423 0.25 6.75002 0.585786 6.75002 1C6.75002 1.41421 6.41423 1.75 6.00002 1.75H2.81068L7.53035 6.46967C7.82324 6.76256 7.82324 7.23744 7.53035 7.53033C7.23746 7.82322 6.76258 7.82322 6.46969 7.53033L1.75002 2.81066ZM12.4697 12.4697C12.1768 12.7625 12.1768 13.2374 12.4697 13.5303L17.1894 18.25H14C13.5858 18.25 13.25 18.5858 13.25 19C13.25 19.4142 13.5858 19.75 14 19.75H19H19.75V19V14C19.75 13.5858 19.4142 13.25 19 13.25C18.5858 13.25 18.25 13.5858 18.25 14V17.1893L13.5303 12.4697C13.2374 12.1768 12.7626 12.1768 12.4697 12.4697Z"
}, null, -1), Sc = [
  Nc
], Vc = /* @__PURE__ */ de({
  __name: "FullscreenIcon",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    color: { default: "#1D1E1F" }
  },
  setup(e) {
    return (t, n) => (J(), ve("svg", {
      width: e.width,
      height: e.height,
      viewBox: "0 0 20 20",
      fill: e.color,
      xmlns: "http://www.w3.org/2000/svg"
    }, Sc, 8, Rc));
  }
}), Bc = ["width", "height", "fill"], Dc = /* @__PURE__ */ K("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L6.25 5.18934V2C6.25 1.58579 6.58579 1.25 7 1.25C7.41421 1.25 7.75 1.58579 7.75 2V7V7.75H7H2C1.58579 7.75 1.25 7.41421 1.25 7C1.25 6.58579 1.58579 6.25 2 6.25H5.18934L0.46967 1.53033ZM7 18.75C6.58579 18.75 6.25 18.4142 6.25 18V14.8107L1.53033 19.5303C1.23744 19.8232 0.762563 19.8232 0.46967 19.5303C0.176777 19.2374 0.176777 18.7626 0.46967 18.4697L5.18934 13.75H2C1.58579 13.75 1.25 13.4142 1.25 13C1.25 12.5858 1.58579 12.25 2 12.25H7H7.75V13V18C7.75 18.4142 7.41421 18.75 7 18.75ZM19.5303 1.53033C19.8232 1.23744 19.8232 0.762563 19.5303 0.46967C19.2374 0.176777 18.7626 0.176777 18.4697 0.46967L13.75 5.18934V2C13.75 1.58579 13.4142 1.25 13 1.25C12.5858 1.25 12.25 1.58579 12.25 2V7V7.75H13H18C18.4142 7.75 18.75 7.41421 18.75 7C18.75 6.58579 18.4142 6.25 18 6.25H14.8107L19.5303 1.53033ZM13 18.75C13.4142 18.75 13.75 18.4142 13.75 18V14.8107L18.4697 19.5303C18.7626 19.8232 19.2374 19.8232 19.5303 19.5303C19.8232 19.2374 19.8232 18.7626 19.5303 18.4697L14.8107 13.75H18C18.4142 13.75 18.75 13.4142 18.75 13C18.75 12.5858 18.4142 12.25 18 12.25H13H12.25V13V18C12.25 18.4142 12.5858 18.75 13 18.75Z"
}, null, -1), jc = [
  Dc
], kc = /* @__PURE__ */ de({
  __name: "ExitFullscreenIcon",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    color: { default: "#1D1E1F" }
  },
  setup(e) {
    return (t, n) => (J(), ve("svg", {
      width: e.width,
      height: e.height,
      viewBox: "0 0 20 20",
      fill: e.color,
      xmlns: "http://www.w3.org/2000/svg"
    }, jc, 8, Bc));
  }
}), Uc = /* @__PURE__ */ de({
  __name: "FullscreenControl",
  setup(e) {
    const t = vt(Ne("player")), n = () => {
      !t || (t.value.isFullscreen ? t.value.fromFullScreen() : t.value.toFullScreen());
    };
    return (s, r) => (J(), ve("div", {
      class: "lpr-fullscreen",
      onClick: n
    }, [
      G(Ft, null, {
        default: kt(() => {
          var o;
          return [
            (o = t.value) != null && o.isFullscreen ? (J(), Ve(kc, {
              key: 1,
              class: "lpr-fullscreen__icon",
              color: "#fff",
              height: "26",
              width: "26"
            })) : (J(), Ve(Vc, {
              key: 0,
              class: "lpr-fullscreen__icon",
              color: "#fff",
              height: "26",
              width: "26"
            }))
          ];
        }),
        _: 1
      })
    ]));
  }
}), Kc = `:host{grid-area:fullscreen}.lpr-fullscreen{align-self:flex-end;cursor:pointer;display:inline-block;height:32px;pointer-events:all;position:relative;width:32px}.lpr-fullscreen__icon{position:absolute;transition:all .25s ease-in}.lpr-fullscreen__icon:hover{transform:scale(1.2);transition:all .25s ease-in}.v-enter-active,.v-leave-active{transition:all .25s ease-out}.v-enter-from{opacity:0;transform:scale(0)}.v-leave-to{opacity:0;transform:scale(1)}
`, zc = /* @__PURE__ */ at(Uc, [["styles", [Kc]]]), Wc = ["width", "height", "fill"], Zc = /* @__PURE__ */ K("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M11.7501 3.7977C11.7501 3.60169 11.5347 3.48192 11.3682 3.58529L10.3055 4.24488L11.7501 5.68938V3.7977ZM10.5772 2.31083C11.7429 1.58725 13.2501 2.42563 13.2501 3.7977V9.31071L7.90732 3.96798L10.5772 2.31083ZM6.13112 5.07045L13.2501 12.1894V18.2024C13.2501 19.5745 11.7429 20.4128 10.5772 19.6893L3.07999 15.0358C0.0866191 13.1779 0.0866184 8.82221 3.07999 6.96425L6.13112 5.07045ZM5.91154 6.97219L3.87103 8.23872C1.82294 9.50995 1.82294 12.4901 3.87103 13.7614L11.3682 18.4148C11.5347 18.5182 11.7501 18.3984 11.7501 18.2024V12.8107L5.91154 6.97219Z"
}, null, -1), qc = /* @__PURE__ */ K("path", { d: "M10.9727 19.0519L3.47551 14.3985C0.954778 12.8339 0.954778 9.166 3.47551 7.6014L6.02133 6.02124L12.5001 12.5V18.2023C12.5001 18.9863 11.6388 19.4654 10.9727 19.0519Z" }, null, -1), Yc = /* @__PURE__ */ K("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z"
}, null, -1), Qc = /* @__PURE__ */ K("path", { d: "M10.9727 2.94809L9.10645 4.10646L12.5001 7.50007V3.79773C12.5001 3.01369 11.6389 2.53462 10.9727 2.94809Z" }, null, -1), Jc = [
  Zc,
  qc,
  Yc,
  Qc
], Xc = /* @__PURE__ */ de({
  __name: "SoundOffIcon",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    color: { default: "#1D1E1F" }
  },
  setup(e) {
    return (t, n) => (J(), ve("svg", {
      width: e.width,
      height: e.height,
      viewBox: "0 0 22 22",
      fill: e.color,
      xmlns: "http://www.w3.org/2000/svg"
    }, Jc, 8, Wc));
  }
}), Gc = ["width", "height", "fill"], eu = /* @__PURE__ */ K("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M17.9026 5.01695C17.4264 4.80872 17.0997 4.75 17 4.75V3.25C17.4003 3.25 17.9486 3.39991 18.5036 3.6426C19.0811 3.8951 19.74 4.28017 20.3645 4.81823C21.6239 5.90319 22.75 7.62064 22.75 10.0845C22.75 12.5516 21.6206 14.2316 20.3519 15.2769C19.7242 15.7941 19.0631 16.1566 18.4856 16.3914C17.9269 16.6185 17.3869 16.75 17 16.75V15.25C17.1131 15.25 17.4481 15.194 17.9207 15.0019C18.3744 14.8174 18.9008 14.529 19.3981 14.1192C20.3794 13.3107 21.25 12.0329 21.25 10.0845C21.25 8.13288 20.3761 6.80808 19.3855 5.95466C18.885 5.52352 18.3564 5.21538 17.9026 5.01695Z"
}, null, -1), tu = /* @__PURE__ */ K("path", { d: "M19.5 10C19.5 7.5 17 6.5 17 6.5V13.5C17 13.5 19.5 12.5 19.5 10Z" }, null, -1), nu = /* @__PURE__ */ K("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M14.7499 1.80431C14.7499 0.429804 13.238 -0.408177 12.0724 0.320315L3.02962 5.97207C0.0529509 7.83249 0.0529509 12.1676 3.02962 14.0281L12.0724 19.6798C13.238 20.4083 14.7499 19.5703 14.7499 18.1958V1.80431Z"
}, null, -1), su = [
  eu,
  tu,
  nu
], ru = /* @__PURE__ */ de({
  __name: "SoundIcon",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    color: { default: "#1D1E1F" }
  },
  setup(e) {
    return (t, n) => (J(), ve("svg", {
      width: e.width,
      height: e.height,
      viewBox: "0 0 23 20",
      fill: e.color,
      xmlns: "http://www.w3.org/2000/svg"
    }, su, 8, Gc));
  }
}), ou = { class: "lpr-volume" }, iu = /* @__PURE__ */ K("div", { class: "lpr-volume__level" }, null, -1), lu = /* @__PURE__ */ K("div", { class: "lpr-volume__level-circle" }, null, -1), cu = [
  lu
], uu = /* @__PURE__ */ de({
  __name: "VolumeControl",
  setup(e) {
    const t = Ne("player"), { volume: n, muted: s } = Kt(t), r = bt(() => `${n.value * 100}%`), o = () => {
      !t || (s.value = !s.value);
    }, i = (l) => {
      const { clientX: u, target: a } = l, { left: d, width: m } = a.getBoundingClientRect();
      n.value = (u - d) / m, s.value && o();
    };
    return (l, u) => (J(), ve("div", ou, [
      K("div", {
        class: "lpr-volume__button",
        onClick: o
      }, [
        G(Ft, null, {
          default: kt(() => [
            Ye(s) ? (J(), Ve(Xc, {
              key: 1,
              class: "lpr-volume__icon",
              color: "#fff",
              height: "28",
              width: "28"
            })) : (J(), Ve(ru, {
              key: 0,
              class: "lpr-volume__icon",
              color: "#fff",
              height: "26",
              width: "26"
            }))
          ]),
          _: 1
        })
      ]),
      K("div", {
        class: "lpr-volume__level-container",
        onClick: i
      }, [
        iu,
        K("div", {
          style: Dt({ width: Ye(r) }),
          class: "lpr-volume__level-progress"
        }, cu, 4)
      ])
    ]));
  }
}), fu = `:host{--volume-border-radius: 8px;--volume-color: #787574;grid-area:volume;--volume-height: 4px;--volume-progress-color: #00b9ae;--volume-width: 80px}.lpr-volume{align-items:center;display:flex;height:32px;position:relative;width:fit-content}.lpr-volume__button,.lpr-volume__level-container{align-items:center;cursor:pointer;display:flex;pointer-events:all}.lpr-volume__button{height:100%;width:32px}.lpr-volume__level-container{height:100%;opacity:0;overflow:hidden;transform:translate(calc(-1 * var(--volume-width)/2));transition:transform .2s ease-out,opacity .2s ease-in;width:0}.lpr-volume:hover .lpr-volume__level-container,.lpr-volume__level-container:hover{height:100%;opacity:1;position:relative;transform:translate(0);transition:transform .2s ease-out,opacity .2s ease-in;width:var(--volume-width)}.lpr-volume__level{background-color:var(--volume-color);cursor:pointer;opacity:.7;pointer-events:all}.lpr-volume__level,.lpr-volume__level-progress{border:0 solid transparent;border-radius:var(--volume-border-radius);bottom:0;height:var(--volume-height);left:0;position:absolute;right:0;top:50%;transform:translateY(-50%)}.lpr-volume__level-progress{background-color:var(--volume-progress-color);pointer-events:none;resize:horizontal;width:0}.lpr-volume__level-circle{background-color:var(--volume-progress-color);border-radius:50%;height:10px;position:absolute;right:0;top:50%;transform:translateY(-50%);width:10px}.lpr-volume__icon{position:absolute}.v-enter-active,.v-leave-active{transition:all .25s ease-out}.v-enter-from{opacity:0;transform:translateY(-30px)}.v-leave-to{opacity:0;transform:translateY(30px)}
`, au = /* @__PURE__ */ at(uu, [["styles", [fu]]]), du = ft(fc), hu = ft(mc), pu = ft(xc), gu = ft($c), _u = ft(Hc), mu = ft(zc), vu = ft(au);
customElements.define("lpr-player", du);
customElements.define("lpr-poster", hu);
customElements.define("lpr-timeline", pu);
customElements.define("lpr-time", gu);
customElements.define("lpr-play", _u);
customElements.define("lpr-fullscreen", mu);
customElements.define("lpr-volume", vu);
