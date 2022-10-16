var ho = Object.defineProperty;
var po = (e, t, n) => t in e ? ho(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var It = (e, t, n) => (po(e, typeof t != "symbol" ? t + "" : t, n), n);
function Zn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const _o = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", go = /* @__PURE__ */ Zn(_o);
function cr(e) {
  return !!e || e === "";
}
function Dt(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = le(s) ? Co(s) : Dt(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else {
    if (le(e))
      return e;
    if (W(e))
      return e;
  }
}
const mo = /;(?![^(]*\))/g, vo = /:(.+)/;
function Co(e) {
  const t = {};
  return e.split(mo).forEach((n) => {
    if (n) {
      const s = n.split(vo);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function fn(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = fn(e[n]);
      s && (t += s + " ");
    }
  else if (W(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ws = (e) => le(e) ? e : e == null ? "" : I(e) || W(e) && (e.toString === dr || !M(e.toString)) ? JSON.stringify(e, ur, 2) : String(e), ur = (e, t) => t && t.__v_isRef ? ur(e, t.value) : gt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
} : fr(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : W(t) && !I(t) && !hr(t) ? String(t) : t, k = {}, _t = [], Oe = () => {
}, bo = () => !1, yo = /^on[^a-z]/, an = (e) => yo.test(e), qn = (e) => e.startsWith("onUpdate:"), te = Object.assign, Yn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, wo = Object.prototype.hasOwnProperty, N = (e, t) => wo.call(e, t), I = Array.isArray, gt = (e) => dn(e) === "[object Map]", fr = (e) => dn(e) === "[object Set]", M = (e) => typeof e == "function", le = (e) => typeof e == "string", Qn = (e) => typeof e == "symbol", W = (e) => e !== null && typeof e == "object", ar = (e) => W(e) && M(e.then) && M(e.catch), dr = Object.prototype.toString, dn = (e) => dr.call(e), xo = (e) => dn(e).slice(8, -1), hr = (e) => dn(e) === "[object Object]", Jn = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xt = /* @__PURE__ */ Zn(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), hn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Eo = /-(\w)/g, Qe = hn((e) => e.replace(Eo, (t, n) => n ? n.toUpperCase() : "")), To = /\B([A-Z])/g, Se = hn((e) => e.replace(To, "-$1").toLowerCase()), pr = hn((e) => e.charAt(0).toUpperCase() + e.slice(1)), xn = hn((e) => e ? `on${pr(e)}` : ""), Ht = (e, t) => !Object.is(e, t), En = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, nn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, sn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let xs;
const $o = () => xs || (xs = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
let me;
class Oo {
  constructor(t = !1) {
    this.active = !0, this.effects = [], this.cleanups = [], !t && me && (this.parent = me, this.index = (me.scopes || (me.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = me;
      try {
        return me = this, t();
      } finally {
        me = n;
      }
    }
  }
  on() {
    me = this;
  }
  off() {
    me = this.parent;
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
function Po(e, t = me) {
  t && t.active && t.effects.push(e);
}
function Io() {
  return me;
}
function Fo(e) {
  me && me.cleanups.push(e);
}
const Xn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, _r = (e) => (e.w & Je) > 0, gr = (e) => (e.n & Je) > 0, Lo = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Je;
}, Mo = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      _r(r) && !gr(r) ? r.delete(e) : t[n++] = r, r.w &= ~Je, r.n &= ~Je;
    }
    t.length = n;
  }
}, Ln = /* @__PURE__ */ new WeakMap();
let Lt = 0, Je = 1;
const Mn = 30;
let Ee;
const ft = Symbol(""), An = Symbol("");
class Gn {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Po(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Ee, n = qe;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Ee, Ee = this, qe = !0, Je = 1 << ++Lt, Lt <= Mn ? Lo(this) : Es(this), this.fn();
    } finally {
      Lt <= Mn && Mo(this), Je = 1 << --Lt, Ee = this.parent, qe = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Ee === this ? this.deferStop = !0 : this.active && (Es(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Es(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let qe = !0;
const mr = [];
function Et() {
  mr.push(qe), qe = !1;
}
function Tt() {
  const e = mr.pop();
  qe = e === void 0 ? !0 : e;
}
function ve(e, t, n) {
  if (qe && Ee) {
    let s = Ln.get(e);
    s || Ln.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = Xn()), vr(r);
  }
}
function vr(e, t) {
  let n = !1;
  Lt <= Mn ? gr(e) || (e.n |= Je, n = !_r(e)) : n = !e.has(Ee), n && (e.add(Ee), Ee.deps.push(e));
}
function Ve(e, t, n, s, r, o) {
  const i = Ln.get(e);
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
        I(e) ? Jn(n) && l.push(i.get("length")) : (l.push(i.get(ft)), gt(e) && l.push(i.get(An)));
        break;
      case "delete":
        I(e) || (l.push(i.get(ft)), gt(e) && l.push(i.get(An)));
        break;
      case "set":
        gt(e) && l.push(i.get(ft));
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
    s.computed && Ts(s);
  for (const s of n)
    s.computed || Ts(s);
}
function Ts(e, t) {
  (e !== Ee || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Ao = /* @__PURE__ */ Zn("__proto__,__v_isRef,__isVue"), Cr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qn)
), Ho = /* @__PURE__ */ es(), Ro = /* @__PURE__ */ es(!1, !0), No = /* @__PURE__ */ es(!0), $s = /* @__PURE__ */ So();
function So() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = S(this);
      for (let o = 0, i = this.length; o < i; o++)
        ve(s, "get", o + "");
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
    if (r === "__v_raw" && o === (e ? t ? Go : Er : t ? xr : wr).get(s))
      return s;
    const i = I(s);
    if (!e && i && N($s, r))
      return Reflect.get($s, r, o);
    const l = Reflect.get(s, r, o);
    return (Qn(r) ? Cr.has(r) : Ao(r)) || (e || ve(s, "get", r), t) ? l : se(l) ? i && Jn(r) ? l : l.value : W(l) ? e ? Tr(l) : ss(l) : l;
  };
}
const Vo = /* @__PURE__ */ br(), Bo = /* @__PURE__ */ br(!0);
function br(e = !1) {
  return function(n, s, r, o) {
    let i = n[s];
    if (yt(i) && se(i) && !se(r))
      return !1;
    if (!e && (!rn(r) && !yt(r) && (i = S(i), r = S(r)), !I(n) && se(i) && !se(r)))
      return i.value = r, !0;
    const l = I(n) && Jn(s) ? Number(s) < n.length : N(n, s), u = Reflect.set(n, s, r, o);
    return n === S(o) && (l ? Ht(r, i) && Ve(n, "set", s, r) : Ve(n, "add", s, r)), u;
  };
}
function jo(e, t) {
  const n = N(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Ve(e, "delete", t, void 0), s;
}
function Do(e, t) {
  const n = Reflect.has(e, t);
  return (!Qn(t) || !Cr.has(t)) && ve(e, "has", t), n;
}
function ko(e) {
  return ve(e, "iterate", I(e) ? "length" : ft), Reflect.ownKeys(e);
}
const yr = {
  get: Ho,
  set: Vo,
  deleteProperty: jo,
  has: Do,
  ownKeys: ko
}, Uo = {
  get: No,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, Ko = /* @__PURE__ */ te({}, yr, {
  get: Ro,
  set: Bo
}), ts = (e) => e, pn = (e) => Reflect.getPrototypeOf(e);
function Zt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = S(e), o = S(t);
  n || (t !== o && ve(r, "get", t), ve(r, "get", o));
  const { has: i } = pn(r), l = s ? ts : n ? os : Rt;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, o))
    return l(e.get(o));
  e !== r && e.get(t);
}
function qt(e, t = !1) {
  const n = this.__v_raw, s = S(n), r = S(e);
  return t || (e !== r && ve(s, "has", e), ve(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Yt(e, t = !1) {
  return e = e.__v_raw, !t && ve(S(e), "iterate", ft), Reflect.get(e, "size", e);
}
function Os(e) {
  e = S(e);
  const t = S(this);
  return pn(t).has.call(t, e) || (t.add(e), Ve(t, "add", e, e)), this;
}
function Ps(e, t) {
  t = S(t);
  const n = S(this), { has: s, get: r } = pn(n);
  let o = s.call(n, e);
  o || (e = S(e), o = s.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), o ? Ht(t, i) && Ve(n, "set", e, t) : Ve(n, "add", e, t), this;
}
function Is(e) {
  const t = S(this), { has: n, get: s } = pn(t);
  let r = n.call(t, e);
  r || (e = S(e), r = n.call(t, e)), s && s.call(t, e);
  const o = t.delete(e);
  return r && Ve(t, "delete", e, void 0), o;
}
function Fs() {
  const e = S(this), t = e.size !== 0, n = e.clear();
  return t && Ve(e, "clear", void 0, void 0), n;
}
function Qt(e, t) {
  return function(s, r) {
    const o = this, i = o.__v_raw, l = S(i), u = t ? ts : e ? os : Rt;
    return !e && ve(l, "iterate", ft), i.forEach((a, h) => s.call(r, u(a), u(h), o));
  };
}
function Jt(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = S(r), i = gt(o), l = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...s), h = n ? ts : t ? os : Rt;
    return !t && ve(o, "iterate", u ? An : ft), {
      next() {
        const { value: m, done: b } = a.next();
        return b ? { value: m, done: b } : {
          value: l ? [h(m[0]), h(m[1])] : h(m),
          done: b
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ke(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function zo() {
  const e = {
    get(o) {
      return Zt(this, o);
    },
    get size() {
      return Yt(this);
    },
    has: qt,
    add: Os,
    set: Ps,
    delete: Is,
    clear: Fs,
    forEach: Qt(!1, !1)
  }, t = {
    get(o) {
      return Zt(this, o, !1, !0);
    },
    get size() {
      return Yt(this);
    },
    has: qt,
    add: Os,
    set: Ps,
    delete: Is,
    clear: Fs,
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
    add: Ke("add"),
    set: Ke("set"),
    delete: Ke("delete"),
    clear: Ke("clear"),
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
    add: Ke("add"),
    set: Ke("set"),
    delete: Ke("delete"),
    clear: Ke("clear"),
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
const [Wo, Zo, qo, Yo] = /* @__PURE__ */ zo();
function ns(e, t) {
  const n = t ? e ? Yo : qo : e ? Zo : Wo;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(N(n, r) && r in s ? n : s, r, o);
}
const Qo = {
  get: /* @__PURE__ */ ns(!1, !1)
}, Jo = {
  get: /* @__PURE__ */ ns(!1, !0)
}, Xo = {
  get: /* @__PURE__ */ ns(!0, !1)
}, wr = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakMap();
function ei(e) {
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
function ti(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ei(xo(e));
}
function ss(e) {
  return yt(e) ? e : rs(e, !1, yr, Qo, wr);
}
function ni(e) {
  return rs(e, !1, Ko, Jo, xr);
}
function Tr(e) {
  return rs(e, !0, Uo, Xo, Er);
}
function rs(e, t, n, s, r) {
  if (!W(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = ti(e);
  if (i === 0)
    return e;
  const l = new Proxy(e, i === 2 ? s : n);
  return r.set(e, l), l;
}
function mt(e) {
  return yt(e) ? mt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function yt(e) {
  return !!(e && e.__v_isReadonly);
}
function rn(e) {
  return !!(e && e.__v_isShallow);
}
function $r(e) {
  return mt(e) || yt(e);
}
function S(e) {
  const t = e && e.__v_raw;
  return t ? S(t) : e;
}
function Or(e) {
  return nn(e, "__v_skip", !0), e;
}
const Rt = (e) => W(e) ? ss(e) : e, os = (e) => W(e) ? Tr(e) : e;
function Pr(e) {
  qe && Ee && (e = S(e), vr(e.dep || (e.dep = Xn())));
}
function Ir(e, t) {
  e = S(e), e.dep && Hn(e.dep);
}
function se(e) {
  return !!(e && e.__v_isRef === !0);
}
function pe(e) {
  return si(e, !1);
}
function si(e, t) {
  return se(e) ? e : new ri(e, t);
}
class ri {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : S(t), this._value = n ? t : Rt(t);
  }
  get value() {
    return Pr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || rn(t) || yt(t);
    t = n ? t : S(t), Ht(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Rt(t), Ir(this));
  }
}
function wt(e) {
  return se(e) ? e.value : e;
}
const oi = {
  get: (e, t, n) => wt(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return se(r) && !se(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Fr(e) {
  return mt(e) ? e : new Proxy(e, oi);
}
class ii {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function Ls(e, t, n) {
  const s = e[t];
  return se(s) ? s : new ii(e, t, n);
}
var Lr;
class li {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Lr] = !1, this._dirty = !0, this.effect = new Gn(t, () => {
      this._dirty || (this._dirty = !0, Ir(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = S(this);
    return Pr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Lr = "__v_isReadonly";
function ci(e, t, n = !1) {
  let s, r;
  const o = M(e);
  return o ? (s = e, r = Oe) : (s = e.get, r = e.set), new li(s, r, o || !r, n);
}
function Ye(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    _n(o, t, n);
  }
  return r;
}
function ye(e, t, n, s) {
  if (M(e)) {
    const o = Ye(e, t, n, s);
    return o && ar(o) && o.catch((i) => {
      _n(i, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(ye(e[o], t, n, s));
  return r;
}
function _n(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, l = n;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let h = 0; h < a.length; h++)
          if (a[h](e, i, l) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Ye(u, null, 10, [e, i, l]);
      return;
    }
  }
  ui(e, n, r, s);
}
function ui(e, t, n, s = !0) {
  console.error(e);
}
let Nt = !1, Rn = !1;
const ie = [];
let He = 0;
const vt = [];
let Ne = null, it = 0;
const Mr = /* @__PURE__ */ Promise.resolve();
let is = null;
function Ar(e) {
  const t = is || Mr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function fi(e) {
  let t = He + 1, n = ie.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    St(ie[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function ls(e) {
  (!ie.length || !ie.includes(e, Nt && e.allowRecurse ? He + 1 : He)) && (e.id == null ? ie.push(e) : ie.splice(fi(e.id), 0, e), Hr());
}
function Hr() {
  !Nt && !Rn && (Rn = !0, is = Mr.then(Nr));
}
function ai(e) {
  const t = ie.indexOf(e);
  t > He && ie.splice(t, 1);
}
function di(e) {
  I(e) ? vt.push(...e) : (!Ne || !Ne.includes(e, e.allowRecurse ? it + 1 : it)) && vt.push(e), Hr();
}
function Ms(e, t = Nt ? He + 1 : 0) {
  for (; t < ie.length; t++) {
    const n = ie[t];
    n && n.pre && (ie.splice(t, 1), t--, n());
  }
}
function Rr(e) {
  if (vt.length) {
    const t = [...new Set(vt)];
    if (vt.length = 0, Ne) {
      Ne.push(...t);
      return;
    }
    for (Ne = t, Ne.sort((n, s) => St(n) - St(s)), it = 0; it < Ne.length; it++)
      Ne[it]();
    Ne = null, it = 0;
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
function Nr(e) {
  Rn = !1, Nt = !0, ie.sort(hi);
  const t = Oe;
  try {
    for (He = 0; He < ie.length; He++) {
      const n = ie[He];
      n && n.active !== !1 && Ye(n, null, 14);
    }
  } finally {
    He = 0, ie.length = 0, Rr(), Nt = !1, is = null, (ie.length || vt.length) && Nr();
  }
}
function pi(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || k;
  let r = n;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in s) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`, { number: m, trim: b } = s[h] || k;
    b && (r = n.map((O) => O.trim())), m && (r = n.map(sn));
  }
  let l, u = s[l = xn(t)] || s[l = xn(Qe(t))];
  !u && o && (u = s[l = xn(Se(t))]), u && ye(u, e, 6, r);
  const a = s[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ye(a, e, 6, r);
  }
}
function Sr(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, l = !1;
  if (!M(e)) {
    const u = (a) => {
      const h = Sr(a, t, !0);
      h && (l = !0, te(i, h));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !l ? (W(e) && s.set(e, null), null) : (I(o) ? o.forEach((u) => i[u] = null) : te(i, o), W(e) && s.set(e, i), i);
}
function gn(e, t) {
  return !e || !an(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), N(e, t[0].toLowerCase() + t.slice(1)) || N(e, Se(t)) || N(e, t));
}
let he = null, Vr = null;
function on(e) {
  const t = he;
  return he = e, Vr = e && e.type.__scopeId || null, t;
}
function kt(e, t = he, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && ks(-1);
    const o = on(t), i = e(...r);
    return on(o), s._d && ks(1), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Tn(e) {
  const { type: t, vnode: n, proxy: s, withProxy: r, props: o, propsOptions: [i], slots: l, attrs: u, emit: a, render: h, renderCache: m, data: b, setupState: O, ctx: H, inheritAttrs: P } = e;
  let V, A;
  const ae = on(e);
  try {
    if (n.shapeFlag & 4) {
      const Z = r || s;
      V = Ae(h.call(Z, Z, m, o, O, b, H)), A = u;
    } else {
      const Z = t;
      V = Ae(Z.length > 1 ? Z(o, { attrs: u, slots: l, emit: a }) : Z(o, null)), A = t.props ? u : _i(u);
    }
  } catch (Z) {
    At.length = 0, _n(Z, e, 1), V = G(we);
  }
  let Y = V;
  if (A && P !== !1) {
    const Z = Object.keys(A), { shapeFlag: re } = Y;
    Z.length && re & 7 && (i && Z.some(qn) && (A = gi(A, i)), Y = Xe(Y, A));
  }
  return n.dirs && (Y = Xe(Y), Y.dirs = Y.dirs ? Y.dirs.concat(n.dirs) : n.dirs), n.transition && (Y.transition = n.transition), V = Y, on(ae), V;
}
const _i = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || an(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, gi = (e, t) => {
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
      return s ? As(s, i, a) : !!i;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let m = 0; m < h.length; m++) {
        const b = h[m];
        if (i[b] !== s[b] && !gn(a, b))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? As(s, i, a) : !0 : !!i;
  return !1;
}
function As(e, t, n) {
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
function mn(e, t) {
  if (ne) {
    let n = ne.provides;
    const s = ne.parent && ne.parent.provides;
    s === n && (n = ne.provides = Object.create(s)), n[e] = t;
  }
}
function Pe(e, t, n = !1) {
  const s = ne || he;
  if (s) {
    const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && M(t) ? t.call(s.proxy) : t;
  }
}
const Hs = {};
function Gt(e, t, n) {
  return Br(e, t, n);
}
function Br(e, t, { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = k) {
  const l = ne;
  let u, a = !1, h = !1;
  if (se(e) ? (u = () => e.value, a = rn(e)) : mt(e) ? (u = () => e, s = !0) : I(e) ? (h = !0, a = e.some((A) => mt(A) || rn(A)), u = () => e.map((A) => {
    if (se(A))
      return A.value;
    if (mt(A))
      return pt(A);
    if (M(A))
      return Ye(A, l, 2);
  })) : M(e) ? t ? u = () => Ye(e, l, 2) : u = () => {
    if (!(l && l.isUnmounted))
      return m && m(), ye(e, l, 3, [b]);
  } : u = Oe, t && s) {
    const A = u;
    u = () => pt(A());
  }
  let m, b = (A) => {
    m = V.onStop = () => {
      Ye(A, l, 4);
    };
  };
  if (Bt)
    return b = Oe, t ? n && ye(t, l, 3, [
      u(),
      h ? [] : void 0,
      b
    ]) : u(), Oe;
  let O = h ? [] : Hs;
  const H = () => {
    if (!!V.active)
      if (t) {
        const A = V.run();
        (s || a || (h ? A.some((ae, Y) => Ht(ae, O[Y])) : Ht(A, O))) && (m && m(), ye(t, l, 3, [
          A,
          O === Hs ? void 0 : O,
          b
        ]), O = A);
      } else
        V.run();
  };
  H.allowRecurse = !!t;
  let P;
  r === "sync" ? P = H : r === "post" ? P = () => de(H, l && l.suspense) : (H.pre = !0, l && (H.id = l.uid), P = () => ls(H));
  const V = new Gn(u, P);
  return t ? n ? H() : O = V.run() : r === "post" ? de(V.run.bind(V), l && l.suspense) : V.run(), () => {
    V.stop(), l && l.scope && Yn(l.scope.effects, V);
  };
}
function yi(e, t, n) {
  const s = this.proxy, r = le(e) ? e.includes(".") ? jr(s, e) : () => s[e] : e.bind(s, s);
  let o;
  M(t) ? o = t : (o = t.handler, n = t);
  const i = ne;
  xt(this);
  const l = Br(r, o.bind(s), n);
  return i ? xt(i) : at(), l;
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
function pt(e, t) {
  if (!W(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), se(e))
    pt(e.value, t);
  else if (I(e))
    for (let n = 0; n < e.length; n++)
      pt(e[n], t);
  else if (fr(e) || gt(e))
    e.forEach((n) => {
      pt(n, t);
    });
  else if (hr(e))
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
  return Ut(() => {
    e.isMounted = !0;
  }), cs(() => {
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
    const n = il(), s = wi();
    let r;
    return () => {
      const o = t.default && Ur(t.default(), !0);
      if (!o || !o.length)
        return;
      let i = o[0];
      if (o.length > 1) {
        for (const P of o)
          if (P.type !== we) {
            i = P;
            break;
          }
      }
      const l = S(e), { mode: u } = l;
      if (s.isLeaving)
        return $n(i);
      const a = Rs(i);
      if (!a)
        return $n(i);
      const h = Nn(a, l, s, n);
      Sn(a, h);
      const m = n.subTree, b = m && Rs(m);
      let O = !1;
      const { getTransitionKey: H } = a.type;
      if (H) {
        const P = H();
        r === void 0 ? r = P : P !== r && (r = P, O = !0);
      }
      if (b && b.type !== we && (!lt(a, b) || O)) {
        const P = Nn(b, l, s, n);
        if (Sn(b, P), u === "out-in")
          return s.isLeaving = !0, P.afterLeave = () => {
            s.isLeaving = !1, n.update();
          }, $n(i);
        u === "in-out" && a.type !== we && (P.delayLeave = (V, A, ae) => {
          const Y = kr(s, b);
          Y[String(b.key)] = b, V._leaveCb = () => {
            A(), V._leaveCb = void 0, delete h.delayedLeave;
          }, h.delayedLeave = ae;
        });
      }
      return i;
    };
  }
}, Dr = xi;
function kr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Nn(e, t, n, s) {
  const { appear: r, mode: o, persisted: i = !1, onBeforeEnter: l, onEnter: u, onAfterEnter: a, onEnterCancelled: h, onBeforeLeave: m, onLeave: b, onAfterLeave: O, onLeaveCancelled: H, onBeforeAppear: P, onAppear: V, onAfterAppear: A, onAppearCancelled: ae } = t, Y = String(e.key), Z = kr(n, e), re = (L, Q) => {
    L && ye(L, s, 9, Q);
  }, Ue = (L, Q) => {
    const U = Q[1];
    re(L, Q), I(L) ? L.every((oe) => oe.length <= 1) && U() : L.length <= 1 && U();
  }, Ie = {
    mode: o,
    persisted: i,
    beforeEnter(L) {
      let Q = l;
      if (!n.isMounted)
        if (r)
          Q = P || l;
        else
          return;
      L._leaveCb && L._leaveCb(!0);
      const U = Z[Y];
      U && lt(e, U) && U.el._leaveCb && U.el._leaveCb(), re(Q, [L]);
    },
    enter(L) {
      let Q = u, U = a, oe = h;
      if (!n.isMounted)
        if (r)
          Q = V || u, U = A || a, oe = ae || h;
        else
          return;
      let E = !1;
      const q = L._enterCb = (_e) => {
        E || (E = !0, _e ? re(oe, [L]) : re(U, [L]), Ie.delayedLeave && Ie.delayedLeave(), L._enterCb = void 0);
      };
      Q ? Ue(Q, [L, q]) : q();
    },
    leave(L, Q) {
      const U = String(e.key);
      if (L._enterCb && L._enterCb(!0), n.isUnmounting)
        return Q();
      re(m, [L]);
      let oe = !1;
      const E = L._leaveCb = (q) => {
        oe || (oe = !0, Q(), q ? re(H, [L]) : re(O, [L]), L._leaveCb = void 0, Z[U] === e && delete Z[U]);
      };
      Z[U] = e, b ? Ue(b, [L, E]) : E();
    },
    clone(L) {
      return Nn(L, t, n, s);
    }
  };
  return Ie;
}
function $n(e) {
  if (vn(e))
    return e = Xe(e), e.children = null, e;
}
function Rs(e) {
  return vn(e) ? e.children ? e.children[0] : void 0 : e;
}
function Sn(e, t) {
  e.shapeFlag & 6 && e.component ? Sn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ur(e, t = !1, n) {
  let s = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === be ? (i.patchFlag & 128 && r++, s = s.concat(Ur(i.children, t, l))) : (t || i.type !== we) && s.push(l != null ? Xe(i, { key: l }) : i);
  }
  if (r > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
function ce(e) {
  return M(e) ? { setup: e, name: e.name } : e;
}
const Mt = (e) => !!e.type.__asyncLoader, vn = (e) => e.type.__isKeepAlive;
function Ei(e, t) {
  Kr(e, "a", t);
}
function Ti(e, t) {
  Kr(e, "da", t);
}
function Kr(e, t, n = ne) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Cn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      vn(r.parent.vnode) && $i(s, t, n, r), r = r.parent;
  }
}
function $i(e, t, n, s) {
  const r = Cn(t, e, s, !0);
  zr(() => {
    Yn(s[t], r);
  }, n);
}
function Cn(e, t, n = ne, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Et(), xt(n);
      const l = ye(t, n, e, i);
      return at(), Tt(), l;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const je = (e) => (t, n = ne) => (!Bt || e === "sp") && Cn(e, (...s) => t(...s), n), Oi = je("bm"), Ut = je("m"), Pi = je("bu"), Ii = je("u"), cs = je("bum"), zr = je("um"), Fi = je("sp"), Li = je("rtg"), Mi = je("rtc");
function Ai(e, t = ne) {
  Cn("ec", e, t);
}
function tt(e, t, n, s) {
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
function us(e, t, n = {}, s, r) {
  if (he.isCE || he.parent && Mt(he.parent) && he.parent.isCE)
    return G("slot", t === "default" ? null : { name: t }, s && s());
  let o = e[t];
  o && o._c && (o._d = !1), z();
  const i = o && Wr(o(n)), l = Be(be, {
    key: n.key || i && i.key || `_${t}`
  }, i || (s ? s() : []), i && e._ === 1 ? 64 : -2);
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = !0), l;
}
function Wr(e) {
  return e.some((t) => un(t) ? !(t.type === we || t.type === be && !Wr(t.children)) : !0) ? e : null;
}
const Vn = (e) => e ? ro(e) ? ps(e) || e.proxy : Vn(e.parent) : null, ln = /* @__PURE__ */ te(/* @__PURE__ */ Object.create(null), {
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
  $options: (e) => fs(e),
  $forceUpdate: (e) => e.f || (e.f = () => ls(e.update)),
  $nextTick: (e) => e.n || (e.n = Ar.bind(e.proxy)),
  $watch: (e) => yi.bind(e)
}), Ri = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: u } = e;
    let a;
    if (t[0] !== "$") {
      const O = i[t];
      if (O !== void 0)
        switch (O) {
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
    const h = ln[t];
    let m, b;
    if (h)
      return t === "$attrs" && ve(e, "get", t), h(e);
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
    return !!n[i] || e !== k && N(e, i) || t !== k && N(t, i) || (l = o[0]) && N(l, i) || N(s, i) || N(ln, i) || N(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : N(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let Bn = !0;
function Ni(e) {
  const t = fs(e), n = e.proxy, s = e.ctx;
  Bn = !1, t.beforeCreate && Ns(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: u,
    inject: a,
    created: h,
    beforeMount: m,
    mounted: b,
    beforeUpdate: O,
    updated: H,
    activated: P,
    deactivated: V,
    beforeDestroy: A,
    beforeUnmount: ae,
    destroyed: Y,
    unmounted: Z,
    render: re,
    renderTracked: Ue,
    renderTriggered: Ie,
    errorCaptured: L,
    serverPrefetch: Q,
    expose: U,
    inheritAttrs: oe,
    components: E,
    directives: q,
    filters: _e
  } = t;
  if (a && Si(a, s, null, e.appContext.config.unwrapInjectedRef), i)
    for (const J in i) {
      const j = i[J];
      M(j) && (s[J] = j.bind(n));
    }
  if (r) {
    const J = r.call(n, n);
    W(J) && (e.data = ss(J));
  }
  if (Bn = !0, o)
    for (const J in o) {
      const j = o[J], Ge = M(j) ? j.bind(n, n) : M(j.get) ? j.get.bind(n, n) : Oe, zt = !M(j) && M(j.set) ? j.set.bind(n) : Oe, et = Ct({
        get: Ge,
        set: zt
      });
      Object.defineProperty(s, J, {
        enumerable: !0,
        configurable: !0,
        get: () => et.value,
        set: (Fe) => et.value = Fe
      });
    }
  if (l)
    for (const J in l)
      Zr(l[J], s, n, J);
  if (u) {
    const J = M(u) ? u.call(n) : u;
    Reflect.ownKeys(J).forEach((j) => {
      mn(j, J[j]);
    });
  }
  h && Ns(h, e, "c");
  function ee(J, j) {
    I(j) ? j.forEach((Ge) => J(Ge.bind(n))) : j && J(j.bind(n));
  }
  if (ee(Oi, m), ee(Ut, b), ee(Pi, O), ee(Ii, H), ee(Ei, P), ee(Ti, V), ee(Ai, L), ee(Mi, Ue), ee(Li, Ie), ee(cs, ae), ee(zr, Z), ee(Fi, Q), I(U))
    if (U.length) {
      const J = e.exposed || (e.exposed = {});
      U.forEach((j) => {
        Object.defineProperty(J, j, {
          get: () => n[j],
          set: (Ge) => n[j] = Ge
        });
      });
    } else
      e.exposed || (e.exposed = {});
  re && e.render === Oe && (e.render = re), oe != null && (e.inheritAttrs = oe), E && (e.components = E), q && (e.directives = q);
}
function Si(e, t, n = Oe, s = !1) {
  I(e) && (e = jn(e));
  for (const r in e) {
    const o = e[r];
    let i;
    W(o) ? "default" in o ? i = Pe(o.from || r, o.default, !0) : i = Pe(o.from || r) : i = Pe(o), se(i) && s ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[r] = i;
  }
}
function Ns(e, t, n) {
  ye(I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Zr(e, t, n, s) {
  const r = s.includes(".") ? jr(n, s) : () => n[s];
  if (le(e)) {
    const o = t[e];
    M(o) && Gt(r, o);
  } else if (M(e))
    Gt(r, e.bind(n));
  else if (W(e))
    if (I(e))
      e.forEach((o) => Zr(o, t, n, s));
    else {
      const o = M(e.handler) ? e.handler.bind(n) : t[e.handler];
      M(o) && Gt(r, o, e);
    }
}
function fs(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, l = o.get(t);
  let u;
  return l ? u = l : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach((a) => cn(u, a, i, !0)), cn(u, t, i)), W(t) && o.set(t, u), u;
}
function cn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && cn(e, o, n, !0), r && r.forEach((i) => cn(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = Vi[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Vi = {
  data: Ss,
  props: ot,
  emits: ot,
  methods: ot,
  computed: ot,
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
  components: ot,
  directives: ot,
  watch: ji,
  provide: Ss,
  inject: Bi
};
function Ss(e, t) {
  return t ? e ? function() {
    return te(M(e) ? e.call(this, this) : e, M(t) ? t.call(this, this) : t);
  } : t : e;
}
function Bi(e, t) {
  return ot(jn(e), jn(t));
}
function jn(e) {
  if (I(e)) {
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
function ot(e, t) {
  return e ? te(te(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function ji(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = te(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ue(e[s], t[s]);
  return n;
}
function Di(e, t, n, s = !1) {
  const r = {}, o = {};
  nn(o, bn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), qr(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : ni(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function ki(e, t, n, s) {
  const { props: r, attrs: o, vnode: { patchFlag: i } } = e, l = S(r), [u] = e.propsOptions;
  let a = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let m = 0; m < h.length; m++) {
        let b = h[m];
        if (gn(e.emitsOptions, b))
          continue;
        const O = t[b];
        if (u)
          if (N(o, b))
            O !== o[b] && (o[b] = O, a = !0);
          else {
            const H = Qe(b);
            r[H] = Dn(u, l, H, O, e, !1);
          }
        else
          O !== o[b] && (o[b] = O, a = !0);
      }
    }
  } else {
    qr(e, t, r, o) && (a = !0);
    let h;
    for (const m in l)
      (!t || !N(t, m) && ((h = Se(m)) === m || !N(t, h))) && (u ? n && (n[m] !== void 0 || n[h] !== void 0) && (r[m] = Dn(u, l, m, void 0, e, !0)) : delete r[m]);
    if (o !== l)
      for (const m in o)
        (!t || !N(t, m) && !0) && (delete o[m], a = !0);
  }
  a && Ve(e, "set", "$attrs");
}
function qr(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let u in t) {
      if (Xt(u))
        continue;
      const a = t[u];
      let h;
      r && N(r, h = Qe(u)) ? !o || !o.includes(h) ? n[h] = a : (l || (l = {}))[h] = a : gn(e.emitsOptions, u) || (!(u in s) || a !== s[u]) && (s[u] = a, i = !0);
    }
  if (o) {
    const u = S(n), a = l || k;
    for (let h = 0; h < o.length; h++) {
      const m = o[h];
      n[m] = Dn(r, u, m, a[m], e, !N(a, m));
    }
  }
  return i;
}
function Dn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = N(i, "default");
    if (l && s === void 0) {
      const u = i.default;
      if (i.type !== Function && M(u)) {
        const { propsDefaults: a } = r;
        n in a ? s = a[n] : (xt(r), s = a[n] = u.call(null, t), at());
      } else
        s = u;
    }
    i[0] && (o && !l ? s = !1 : i[1] && (s === "" || s === Se(n)) && (s = !0));
  }
  return s;
}
function Yr(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, l = [];
  let u = !1;
  if (!M(e)) {
    const h = (m) => {
      u = !0;
      const [b, O] = Yr(m, t, !0);
      te(i, b), O && l.push(...O);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!o && !u)
    return W(e) && s.set(e, _t), _t;
  if (I(o))
    for (let h = 0; h < o.length; h++) {
      const m = Qe(o[h]);
      Vs(m) && (i[m] = k);
    }
  else if (o)
    for (const h in o) {
      const m = Qe(h);
      if (Vs(m)) {
        const b = o[h], O = i[m] = I(b) || M(b) ? { type: b } : b;
        if (O) {
          const H = Ds(Boolean, O.type), P = Ds(String, O.type);
          O[0] = H > -1, O[1] = P < 0 || H < P, (H > -1 || N(O, "default")) && l.push(m);
        }
      }
    }
  const a = [i, l];
  return W(e) && s.set(e, a), a;
}
function Vs(e) {
  return e[0] !== "$";
}
function Bs(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function js(e, t) {
  return Bs(e) === Bs(t);
}
function Ds(e, t) {
  return I(t) ? t.findIndex((n) => js(n, e)) : M(t) && js(t, e) ? 0 : -1;
}
const Qr = (e) => e[0] === "_" || e === "$stable", as = (e) => I(e) ? e.map(Ae) : [Ae(e)], Ui = (e, t, n) => {
  if (t._n)
    return t;
  const s = kt((...r) => as(t(...r)), n);
  return s._c = !1, s;
}, Jr = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Qr(r))
      continue;
    const o = e[r];
    if (M(o))
      t[r] = Ui(r, o, s);
    else if (o != null) {
      const i = as(o);
      t[r] = () => i;
    }
  }
}, Xr = (e, t) => {
  const n = as(t);
  e.slots.default = () => n;
}, Ki = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = S(t), nn(t, "_", n)) : Jr(t, e.slots = {});
  } else
    e.slots = {}, t && Xr(e, t);
  nn(e.slots, bn, 1);
}, zi = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = k;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : (te(r, t), !n && l === 1 && delete r._) : (o = !t.$stable, Jr(t, r)), i = t;
  } else
    t && (Xr(e, t), i = { default: 1 });
  if (o)
    for (const l in r)
      !Qr(l) && !(l in i) && delete r[l];
};
function Gr() {
  return {
    app: null,
    config: {
      isNativeTag: bo,
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
let Wi = 0;
function Zi(e, t) {
  return function(s, r = null) {
    M(s) || (s = Object.assign({}, s)), r != null && !W(r) && (r = null);
    const o = Gr(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const u = o.app = {
      _uid: Wi++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: hl,
      get config() {
        return o.config;
      },
      set config(a) {
      },
      use(a, ...h) {
        return i.has(a) || (a && M(a.install) ? (i.add(a), a.install(u, ...h)) : M(a) && (i.add(a), a(u, ...h))), u;
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), u;
      },
      component(a, h) {
        return h ? (o.components[a] = h, u) : o.components[a];
      },
      directive(a, h) {
        return h ? (o.directives[a] = h, u) : o.directives[a];
      },
      mount(a, h, m) {
        if (!l) {
          const b = G(s, r);
          return b.appContext = o, h && t ? t(b, a) : e(b, a, m), l = !0, u._container = a, a.__vue_app__ = u, ps(b.component) || b.component.proxy;
        }
      },
      unmount() {
        l && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, h) {
        return o.provides[a] = h, u;
      }
    };
    return u;
  };
}
function kn(e, t, n, s, r = !1) {
  if (I(e)) {
    e.forEach((b, O) => kn(b, t && (I(t) ? t[O] : t), n, s, r));
    return;
  }
  if (Mt(s) && !r)
    return;
  const o = s.shapeFlag & 4 ? ps(s.component) || s.component.proxy : s.el, i = r ? null : o, { i: l, r: u } = e, a = t && t.r, h = l.refs === k ? l.refs = {} : l.refs, m = l.setupState;
  if (a != null && a !== u && (le(a) ? (h[a] = null, N(m, a) && (m[a] = null)) : se(a) && (a.value = null)), M(u))
    Ye(u, l, 12, [i, h]);
  else {
    const b = le(u), O = se(u);
    if (b || O) {
      const H = () => {
        if (e.f) {
          const P = b ? h[u] : u.value;
          r ? I(P) && Yn(P, o) : I(P) ? P.includes(o) || P.push(o) : b ? (h[u] = [o], N(m, u) && (m[u] = h[u])) : (u.value = [o], e.k && (h[e.k] = u.value));
        } else
          b ? (h[u] = i, N(m, u) && (m[u] = i)) : O && (u.value = i, e.k && (h[e.k] = i));
      };
      i ? (H.id = -1, de(H, n)) : H();
    }
  }
}
const de = bi;
function qi(e) {
  return Yi(e);
}
function Yi(e, t) {
  const n = $o();
  n.__VUE__ = !0;
  const { insert: s, remove: r, patchProp: o, createElement: i, createText: l, createComment: u, setText: a, setElementText: h, parentNode: m, nextSibling: b, setScopeId: O = Oe, insertStaticContent: H } = e, P = (c, f, d, _ = null, p = null, C = null, w = !1, v = null, y = !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !lt(c, f) && (_ = Wt(c), Fe(c, p, C, !0), c = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: g, ref: T, shapeFlag: x } = f;
    switch (g) {
      case ds:
        V(c, f, d, _);
        break;
      case we:
        A(c, f, d, _);
        break;
      case On:
        c == null && ae(f, d, _, w);
        break;
      case be:
        E(c, f, d, _, p, C, w, v, y);
        break;
      default:
        x & 1 ? re(c, f, d, _, p, C, w, v, y) : x & 6 ? q(c, f, d, _, p, C, w, v, y) : (x & 64 || x & 128) && g.process(c, f, d, _, p, C, w, v, y, dt);
    }
    T != null && p && kn(T, c && c.ref, C, f || c, !f);
  }, V = (c, f, d, _) => {
    if (c == null)
      s(f.el = l(f.children), d, _);
    else {
      const p = f.el = c.el;
      f.children !== c.children && a(p, f.children);
    }
  }, A = (c, f, d, _) => {
    c == null ? s(f.el = u(f.children || ""), d, _) : f.el = c.el;
  }, ae = (c, f, d, _) => {
    [c.el, c.anchor] = H(c.children, f, d, _, c.el, c.anchor);
  }, Y = ({ el: c, anchor: f }, d, _) => {
    let p;
    for (; c && c !== f; )
      p = b(c), s(c, d, _), c = p;
    s(f, d, _);
  }, Z = ({ el: c, anchor: f }) => {
    let d;
    for (; c && c !== f; )
      d = b(c), r(c), c = d;
    r(f);
  }, re = (c, f, d, _, p, C, w, v, y) => {
    w = w || f.type === "svg", c == null ? Ue(f, d, _, p, C, w, v, y) : Q(c, f, p, C, w, v, y);
  }, Ue = (c, f, d, _, p, C, w, v) => {
    let y, g;
    const { type: T, props: x, shapeFlag: $, transition: F, dirs: R } = c;
    if (y = c.el = i(c.type, C, x && x.is, x), $ & 8 ? h(y, c.children) : $ & 16 && L(c.children, y, null, _, p, C && T !== "foreignObject", w, v), R && tt(c, null, _, "created"), x) {
      for (const B in x)
        B !== "value" && !Xt(B) && o(y, B, null, x[B], C, c.children, _, p, Re);
      "value" in x && o(y, "value", null, x.value), (g = x.onVnodeBeforeMount) && Me(g, _, c);
    }
    Ie(y, c, c.scopeId, w, _), R && tt(c, null, _, "beforeMount");
    const D = (!p || p && !p.pendingBranch) && F && !F.persisted;
    D && F.beforeEnter(y), s(y, f, d), ((g = x && x.onVnodeMounted) || D || R) && de(() => {
      g && Me(g, _, c), D && F.enter(y), R && tt(c, null, _, "mounted");
    }, p);
  }, Ie = (c, f, d, _, p) => {
    if (d && O(c, d), _)
      for (let C = 0; C < _.length; C++)
        O(c, _[C]);
    if (p) {
      let C = p.subTree;
      if (f === C) {
        const w = p.vnode;
        Ie(c, w, w.scopeId, w.slotScopeIds, p.parent);
      }
    }
  }, L = (c, f, d, _, p, C, w, v, y = 0) => {
    for (let g = y; g < c.length; g++) {
      const T = c[g] = v ? Ze(c[g]) : Ae(c[g]);
      P(null, T, f, d, _, p, C, w, v);
    }
  }, Q = (c, f, d, _, p, C, w) => {
    const v = f.el = c.el;
    let { patchFlag: y, dynamicChildren: g, dirs: T } = f;
    y |= c.patchFlag & 16;
    const x = c.props || k, $ = f.props || k;
    let F;
    d && nt(d, !1), (F = $.onVnodeBeforeUpdate) && Me(F, d, f, c), T && tt(f, c, d, "beforeUpdate"), d && nt(d, !0);
    const R = p && f.type !== "foreignObject";
    if (g ? U(c.dynamicChildren, g, v, d, _, R, C) : w || j(c, f, v, null, d, _, R, C, !1), y > 0) {
      if (y & 16)
        oe(v, f, x, $, d, _, p);
      else if (y & 2 && x.class !== $.class && o(v, "class", null, $.class, p), y & 4 && o(v, "style", x.style, $.style, p), y & 8) {
        const D = f.dynamicProps;
        for (let B = 0; B < D.length; B++) {
          const X = D[B], xe = x[X], ht = $[X];
          (ht !== xe || X === "value") && o(v, X, xe, ht, p, c.children, d, _, Re);
        }
      }
      y & 1 && c.children !== f.children && h(v, f.children);
    } else
      !w && g == null && oe(v, f, x, $, d, _, p);
    ((F = $.onVnodeUpdated) || T) && de(() => {
      F && Me(F, d, f, c), T && tt(f, c, d, "updated");
    }, _);
  }, U = (c, f, d, _, p, C, w) => {
    for (let v = 0; v < f.length; v++) {
      const y = c[v], g = f[v], T = y.el && (y.type === be || !lt(y, g) || y.shapeFlag & 70) ? m(y.el) : d;
      P(y, g, T, null, _, p, C, w, !0);
    }
  }, oe = (c, f, d, _, p, C, w) => {
    if (d !== _) {
      if (d !== k)
        for (const v in d)
          !Xt(v) && !(v in _) && o(c, v, d[v], null, w, f.children, p, C, Re);
      for (const v in _) {
        if (Xt(v))
          continue;
        const y = _[v], g = d[v];
        y !== g && v !== "value" && o(c, v, g, y, w, f.children, p, C, Re);
      }
      "value" in _ && o(c, "value", d.value, _.value);
    }
  }, E = (c, f, d, _, p, C, w, v, y) => {
    const g = f.el = c ? c.el : l(""), T = f.anchor = c ? c.anchor : l("");
    let { patchFlag: x, dynamicChildren: $, slotScopeIds: F } = f;
    F && (v = v ? v.concat(F) : F), c == null ? (s(g, d, _), s(T, d, _), L(f.children, d, T, p, C, w, v, y)) : x > 0 && x & 64 && $ && c.dynamicChildren ? (U(c.dynamicChildren, $, d, p, C, w, v), (f.key != null || p && f === p.subTree) && eo(c, f, !0)) : j(c, f, d, T, p, C, w, v, y);
  }, q = (c, f, d, _, p, C, w, v, y) => {
    f.slotScopeIds = v, c == null ? f.shapeFlag & 512 ? p.ctx.activate(f, d, _, w, y) : _e(f, d, _, p, C, w, y) : Ot(c, f, y);
  }, _e = (c, f, d, _, p, C, w) => {
    const v = c.component = ol(c, _, p);
    if (vn(c) && (v.ctx.renderer = dt), ll(v), v.asyncDep) {
      if (p && p.registerDep(v, ee), !c.el) {
        const y = v.subTree = G(we);
        A(null, y, f, d);
      }
      return;
    }
    ee(v, c, f, d, p, C, w);
  }, Ot = (c, f, d) => {
    const _ = f.component = c.component;
    if (mi(c, f, d))
      if (_.asyncDep && !_.asyncResolved) {
        J(_, f, d);
        return;
      } else
        _.next = f, ai(_.update), _.update();
    else
      f.el = c.el, _.vnode = f;
  }, ee = (c, f, d, _, p, C, w) => {
    const v = () => {
      if (c.isMounted) {
        let { next: T, bu: x, u: $, parent: F, vnode: R } = c, D = T, B;
        nt(c, !1), T ? (T.el = R.el, J(c, T, w)) : T = R, x && En(x), (B = T.props && T.props.onVnodeBeforeUpdate) && Me(B, F, T, R), nt(c, !0);
        const X = Tn(c), xe = c.subTree;
        c.subTree = X, P(
          xe,
          X,
          m(xe.el),
          Wt(xe),
          c,
          p,
          C
        ), T.el = X.el, D === null && vi(c, X.el), $ && de($, p), (B = T.props && T.props.onVnodeUpdated) && de(() => Me(B, F, T, R), p);
      } else {
        let T;
        const { el: x, props: $ } = f, { bm: F, m: R, parent: D } = c, B = Mt(f);
        if (nt(c, !1), F && En(F), !B && (T = $ && $.onVnodeBeforeMount) && Me(T, D, f), nt(c, !0), x && wn) {
          const X = () => {
            c.subTree = Tn(c), wn(x, c.subTree, c, p, null);
          };
          B ? f.type.__asyncLoader().then(
            () => !c.isUnmounted && X()
          ) : X();
        } else {
          const X = c.subTree = Tn(c);
          P(null, X, d, _, c, p, C), f.el = X.el;
        }
        if (R && de(R, p), !B && (T = $ && $.onVnodeMounted)) {
          const X = f;
          de(() => Me(T, D, X), p);
        }
        (f.shapeFlag & 256 || D && Mt(D.vnode) && D.vnode.shapeFlag & 256) && c.a && de(c.a, p), c.isMounted = !0, f = d = _ = null;
      }
    }, y = c.effect = new Gn(
      v,
      () => ls(g),
      c.scope
    ), g = c.update = () => y.run();
    g.id = c.uid, nt(c, !0), g();
  }, J = (c, f, d) => {
    f.component = c;
    const _ = c.vnode.props;
    c.vnode = f, c.next = null, ki(c, f.props, _, d), zi(c, f.children, d), Et(), Ms(), Tt();
  }, j = (c, f, d, _, p, C, w, v, y = !1) => {
    const g = c && c.children, T = c ? c.shapeFlag : 0, x = f.children, { patchFlag: $, shapeFlag: F } = f;
    if ($ > 0) {
      if ($ & 128) {
        zt(g, x, d, _, p, C, w, v, y);
        return;
      } else if ($ & 256) {
        Ge(g, x, d, _, p, C, w, v, y);
        return;
      }
    }
    F & 8 ? (T & 16 && Re(g, p, C), x !== g && h(d, x)) : T & 16 ? F & 16 ? zt(g, x, d, _, p, C, w, v, y) : Re(g, p, C, !0) : (T & 8 && h(d, ""), F & 16 && L(x, d, _, p, C, w, v, y));
  }, Ge = (c, f, d, _, p, C, w, v, y) => {
    c = c || _t, f = f || _t;
    const g = c.length, T = f.length, x = Math.min(g, T);
    let $;
    for ($ = 0; $ < x; $++) {
      const F = f[$] = y ? Ze(f[$]) : Ae(f[$]);
      P(c[$], F, d, null, p, C, w, v, y);
    }
    g > T ? Re(c, p, C, !0, !1, x) : L(f, d, _, p, C, w, v, y, x);
  }, zt = (c, f, d, _, p, C, w, v, y) => {
    let g = 0;
    const T = f.length;
    let x = c.length - 1, $ = T - 1;
    for (; g <= x && g <= $; ) {
      const F = c[g], R = f[g] = y ? Ze(f[g]) : Ae(f[g]);
      if (lt(F, R))
        P(F, R, d, null, p, C, w, v, y);
      else
        break;
      g++;
    }
    for (; g <= x && g <= $; ) {
      const F = c[x], R = f[$] = y ? Ze(f[$]) : Ae(f[$]);
      if (lt(F, R))
        P(F, R, d, null, p, C, w, v, y);
      else
        break;
      x--, $--;
    }
    if (g > x) {
      if (g <= $) {
        const F = $ + 1, R = F < T ? f[F].el : _;
        for (; g <= $; )
          P(null, f[g] = y ? Ze(f[g]) : Ae(f[g]), d, R, p, C, w, v, y), g++;
      }
    } else if (g > $)
      for (; g <= x; )
        Fe(c[g], p, C, !0), g++;
    else {
      const F = g, R = g, D = /* @__PURE__ */ new Map();
      for (g = R; g <= $; g++) {
        const ge = f[g] = y ? Ze(f[g]) : Ae(f[g]);
        ge.key != null && D.set(ge.key, g);
      }
      let B, X = 0;
      const xe = $ - R + 1;
      let ht = !1, Cs = 0;
      const Pt = new Array(xe);
      for (g = 0; g < xe; g++)
        Pt[g] = 0;
      for (g = F; g <= x; g++) {
        const ge = c[g];
        if (X >= xe) {
          Fe(ge, p, C, !0);
          continue;
        }
        let Le;
        if (ge.key != null)
          Le = D.get(ge.key);
        else
          for (B = R; B <= $; B++)
            if (Pt[B - R] === 0 && lt(ge, f[B])) {
              Le = B;
              break;
            }
        Le === void 0 ? Fe(ge, p, C, !0) : (Pt[Le - R] = g + 1, Le >= Cs ? Cs = Le : ht = !0, P(ge, f[Le], d, null, p, C, w, v, y), X++);
      }
      const bs = ht ? Qi(Pt) : _t;
      for (B = bs.length - 1, g = xe - 1; g >= 0; g--) {
        const ge = R + g, Le = f[ge], ys = ge + 1 < T ? f[ge + 1].el : _;
        Pt[g] === 0 ? P(null, Le, d, ys, p, C, w, v, y) : ht && (B < 0 || g !== bs[B] ? et(Le, d, ys, 2) : B--);
      }
    }
  }, et = (c, f, d, _, p = null) => {
    const { el: C, type: w, transition: v, children: y, shapeFlag: g } = c;
    if (g & 6) {
      et(c.component.subTree, f, d, _);
      return;
    }
    if (g & 128) {
      c.suspense.move(f, d, _);
      return;
    }
    if (g & 64) {
      w.move(c, f, d, dt);
      return;
    }
    if (w === be) {
      s(C, f, d);
      for (let x = 0; x < y.length; x++)
        et(y[x], f, d, _);
      s(c.anchor, f, d);
      return;
    }
    if (w === On) {
      Y(c, f, d);
      return;
    }
    if (_ !== 2 && g & 1 && v)
      if (_ === 0)
        v.beforeEnter(C), s(C, f, d), de(() => v.enter(C), p);
      else {
        const { leave: x, delayLeave: $, afterLeave: F } = v, R = () => s(C, f, d), D = () => {
          x(C, () => {
            R(), F && F();
          });
        };
        $ ? $(C, R, D) : D();
      }
    else
      s(C, f, d);
  }, Fe = (c, f, d, _ = !1, p = !1) => {
    const { type: C, props: w, ref: v, children: y, dynamicChildren: g, shapeFlag: T, patchFlag: x, dirs: $ } = c;
    if (v != null && kn(v, null, d, c, !0), T & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const F = T & 1 && $, R = !Mt(c);
    let D;
    if (R && (D = w && w.onVnodeBeforeUnmount) && Me(D, f, c), T & 6)
      ao(c.component, d, _);
    else {
      if (T & 128) {
        c.suspense.unmount(d, _);
        return;
      }
      F && tt(c, null, f, "beforeUnmount"), T & 64 ? c.type.remove(c, f, d, p, dt, _) : g && (C !== be || x > 0 && x & 64) ? Re(g, f, d, !1, !0) : (C === be && x & 384 || !p && T & 16) && Re(y, f, d), _ && ms(c);
    }
    (R && (D = w && w.onVnodeUnmounted) || F) && de(() => {
      D && Me(D, f, c), F && tt(c, null, f, "unmounted");
    }, d);
  }, ms = (c) => {
    const { type: f, el: d, anchor: _, transition: p } = c;
    if (f === be) {
      fo(d, _);
      return;
    }
    if (f === On) {
      Z(c);
      return;
    }
    const C = () => {
      r(d), p && !p.persisted && p.afterLeave && p.afterLeave();
    };
    if (c.shapeFlag & 1 && p && !p.persisted) {
      const { leave: w, delayLeave: v } = p, y = () => w(d, C);
      v ? v(c.el, C, y) : y();
    } else
      C();
  }, fo = (c, f) => {
    let d;
    for (; c !== f; )
      d = b(c), r(c), c = d;
    r(f);
  }, ao = (c, f, d) => {
    const { bum: _, scope: p, update: C, subTree: w, um: v } = c;
    _ && En(_), p.stop(), C && (C.active = !1, Fe(w, c, f, d)), v && de(v, f), de(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, Re = (c, f, d, _ = !1, p = !1, C = 0) => {
    for (let w = C; w < c.length; w++)
      Fe(c[w], f, d, _, p);
  }, Wt = (c) => c.shapeFlag & 6 ? Wt(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : b(c.anchor || c.el), vs = (c, f, d) => {
    c == null ? f._vnode && Fe(f._vnode, null, null, !0) : P(f._vnode || null, c, f, null, null, null, d), Ms(), Rr(), f._vnode = c;
  }, dt = {
    p: P,
    um: Fe,
    m: et,
    r: ms,
    mt: _e,
    mc: L,
    pc: j,
    pbc: U,
    n: Wt,
    o: e
  };
  let yn, wn;
  return t && ([yn, wn] = t(dt)), {
    render: vs,
    hydrate: yn,
    createApp: Zi(vs, yn)
  };
}
function nt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function eo(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (I(s) && I(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = Ze(r[o]), l.el = i.el), n || eo(i, l));
    }
}
function Qi(e) {
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
const Ji = (e) => e.__isTeleport, be = Symbol(void 0), ds = Symbol(void 0), we = Symbol(void 0), On = Symbol(void 0), At = [];
let Te = null;
function z(e = !1) {
  At.push(Te = e ? null : []);
}
function Xi() {
  At.pop(), Te = At[At.length - 1] || null;
}
let Vt = 1;
function ks(e) {
  Vt += e;
}
function to(e) {
  return e.dynamicChildren = Vt > 0 ? Te || _t : null, Xi(), Vt > 0 && Te && Te.push(e), e;
}
function fe(e, t, n, s, r, o) {
  return to(K(e, t, n, s, r, o, !0));
}
function Be(e, t, n, s, r) {
  return to(G(e, t, n, s, r, !0));
}
function un(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function lt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const bn = "__vInternal", no = ({ key: e }) => e != null ? e : null, en = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? le(e) || se(e) || M(e) ? { i: he, r: e, k: t, f: !!n } : e : null;
function K(e, t = null, n = null, s = 0, r = null, o = e === be ? 0 : 1, i = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && no(t),
    ref: t && en(t),
    scopeId: Vr,
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
  return l ? (hs(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= le(n) ? 8 : 16), Vt > 0 && !i && Te && (u.patchFlag > 0 || o & 6) && u.patchFlag !== 32 && Te.push(u), u;
}
const G = Gi;
function Gi(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === Hi) && (e = we), un(e)) {
    const l = Xe(e, t, !0);
    return n && hs(l, n), Vt > 0 && !o && Te && (l.shapeFlag & 6 ? Te[Te.indexOf(e)] = l : Te.push(l)), l.patchFlag |= -2, l;
  }
  if (al(e) && (e = e.__vccOpts), t) {
    t = el(t);
    let { class: l, style: u } = t;
    l && !le(l) && (t.class = fn(l)), W(u) && ($r(u) && !I(u) && (u = te({}, u)), t.style = Dt(u));
  }
  const i = le(e) ? 1 : Ci(e) ? 128 : Ji(e) ? 64 : W(e) ? 4 : M(e) ? 2 : 0;
  return K(e, t, n, s, r, i, o, !0);
}
function el(e) {
  return e ? $r(e) || bn in e ? te({}, e) : e : null;
}
function Xe(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e, l = t ? so(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && no(l),
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
    ssContent: e.ssContent && Xe(e.ssContent),
    ssFallback: e.ssFallback && Xe(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function tl(e = " ", t = 0) {
  return G(ds, null, e, t);
}
function nl(e = "", t = !1) {
  return t ? (z(), Be(we, null, e)) : G(we, null, e);
}
function Ae(e) {
  return e == null || typeof e == "boolean" ? G(we) : I(e) ? G(
    be,
    null,
    e.slice()
  ) : typeof e == "object" ? Ze(e) : G(ds, null, String(e));
}
function Ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xe(e);
}
function hs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), hs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(bn in t) ? t._ctx = he : r === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    M(t) ? (t = { default: t, _ctx: he }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [tl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function so(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = fn([t.class, s.class]));
      else if (r === "style")
        t.style = Dt([t.style, s.style]);
      else if (an(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(I(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Me(e, t, n, s = null) {
  ye(e, t, 7, [
    n,
    s
  ]);
}
const sl = Gr();
let rl = 0;
function ol(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || sl, o = {
    uid: rl++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Oo(!0),
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
    propsOptions: Yr(s, r),
    emitsOptions: Sr(s, r),
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
const il = () => ne || he, xt = (e) => {
  ne = e, e.scope.on();
}, at = () => {
  ne && ne.scope.off(), ne = null;
};
function ro(e) {
  return e.vnode.shapeFlag & 4;
}
let Bt = !1;
function ll(e, t = !1) {
  Bt = t;
  const { props: n, children: s } = e.vnode, r = ro(e);
  Di(e, n, r, t), Ki(e, s);
  const o = r ? cl(e, t) : void 0;
  return Bt = !1, o;
}
function cl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Or(new Proxy(e.ctx, Ri));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? fl(e) : null;
    xt(e), Et();
    const o = Ye(s, e, 0, [e.props, r]);
    if (Tt(), at(), ar(o)) {
      if (o.then(at, at), t)
        return o.then((i) => {
          Us(e, i, t);
        }).catch((i) => {
          _n(i, e, 0);
        });
      e.asyncDep = o;
    } else
      Us(e, o, t);
  } else
    oo(e, t);
}
function Us(e, t, n) {
  M(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : W(t) && (e.setupState = Fr(t)), oo(e, n);
}
let Ks;
function oo(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Ks && !s.render) {
      const r = s.template || fs(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: u } = s, a = te(te({
          isCustomElement: o,
          delimiters: l
        }, i), u);
        s.render = Ks(r, a);
      }
    }
    e.render = s.render || Oe;
  }
  xt(e), Et(), Ni(e), Tt(), at();
}
function ul(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return ve(e, "get", "$attrs"), t[n];
    }
  });
}
function fl(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = ul(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ps(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Fr(Or(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ln)
          return ln[n](e);
      }
    }));
}
function al(e) {
  return M(e) && "__vccOpts" in e;
}
const Ct = (e, t) => ci(e, t, Bt);
function dl(e, t, n) {
  const s = arguments.length;
  return s === 2 ? W(t) && !I(t) ? un(t) ? G(e, null, [t]) : G(e, t) : G(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && un(n) && (n = [n]), G(e, t, n));
}
const hl = "3.2.40", pl = "http://www.w3.org/2000/svg", ct = typeof document != "undefined" ? document : null, zs = ct && /* @__PURE__ */ ct.createElement("template"), _l = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t ? ct.createElementNS(pl, e) : ct.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => ct.createTextNode(e),
  createComment: (e) => ct.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ct.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      zs.innerHTML = s ? `<svg>${e}</svg>` : e;
      const l = zs.content;
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
function gl(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function ml(e, t, n) {
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
const Ws = /\s*!important$/;
function Un(e, t, n) {
  if (I(n))
    n.forEach((s) => Un(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = vl(e, t);
    Ws.test(n) ? e.setProperty(Se(s), n.replace(Ws, ""), "important") : e[s] = n;
  }
}
const Zs = ["Webkit", "Moz", "ms"], Pn = {};
function vl(e, t) {
  const n = Pn[t];
  if (n)
    return n;
  let s = Qe(t);
  if (s !== "filter" && s in e)
    return Pn[t] = s;
  s = pr(s);
  for (let r = 0; r < Zs.length; r++) {
    const o = Zs[r] + s;
    if (o in e)
      return Pn[t] = o;
  }
  return t;
}
const qs = "http://www.w3.org/1999/xlink";
function Cl(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(qs, t.slice(6, t.length)) : e.setAttributeNS(qs, t, n);
  else {
    const o = go(t);
    n == null || o && !cr(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function bl(e, t, n, s, r, o, i) {
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
    u === "boolean" ? n = cr(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (u) {
  }
  l && e.removeAttribute(t);
}
const [io, yl] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window != "undefined") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let Kn = 0;
const wl = /* @__PURE__ */ Promise.resolve(), xl = () => {
  Kn = 0;
}, El = () => Kn || (wl.then(xl), Kn = io());
function Tl(e, t, n, s) {
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
    const [l, u] = Pl(t);
    if (s) {
      const a = o[t] = Il(s, r);
      Tl(e, l, a, u);
    } else
      i && ($l(e, l, i, u), o[t] = void 0);
  }
}
const Ys = /(?:Once|Passive|Capture)$/;
function Pl(e) {
  let t;
  if (Ys.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ys); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Se(e.slice(2)), t];
}
function Il(e, t) {
  const n = (s) => {
    const r = s.timeStamp || io();
    (yl || r >= n.attached - 1) && ye(Fl(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = El(), n;
}
function Fl(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return t;
}
const Qs = /^on[a-z]/, Ll = (e, t, n, s, r = !1, o, i, l, u) => {
  t === "class" ? gl(e, s, r) : t === "style" ? ml(e, n, s) : an(t) ? qn(t) || Ol(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ml(e, t, s, r)) ? bl(e, t, s, o, i, l, u) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Cl(e, t, s, r));
};
function Ml(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && Qs.test(t) && M(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Qs.test(t) && le(n) ? !1 : t in e;
}
function De(e, t) {
  const n = ce(e);
  class s extends _s {
    constructor(o) {
      super(n, o, t);
    }
  }
  return s.def = n, s;
}
const Al = typeof HTMLElement != "undefined" ? HTMLElement : class {
};
class _s extends Al {
  constructor(t, n = {}, s) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this._connected = !0, this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    this._connected = !1, Ar(() => {
      this._connected || (sr(null, this.shadowRoot), this._instance = null);
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
          const h = r[a];
          (h === Number || h && h.type === Number) && (this._props[a] = sn(this._props[a]), (u || (u = /* @__PURE__ */ Object.create(null)))[a] = !0);
        }
      this._numberProps = u;
      for (const a of Object.keys(this))
        a[0] !== "_" && this._setProp(a, this[a], !0, !1);
      for (const a of l.map(Qe))
        Object.defineProperty(this, a, {
          get() {
            return this._getProp(a);
          },
          set(h) {
            this._setProp(a, h);
          }
        });
      this._applyStyles(o), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then(t) : t(this._def);
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    this._numberProps && this._numberProps[t] && (n = sn(n)), this._setProp(Qe(t), n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, s = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), s && (n === !0 ? this.setAttribute(Se(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Se(t), n + "") : n || this.removeAttribute(Se(t))));
  }
  _update() {
    sr(this._createVNode(), this.shadowRoot);
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
        if (s instanceof _s) {
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
const ze = "transition", Ft = "animation", $t = (e, { slots: t }) => dl(Dr, Hl(e), t);
$t.displayName = "Transition";
const lo = {
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
$t.props = /* @__PURE__ */ te({}, Dr.props, lo);
const st = (e, t = []) => {
  I(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Js = (e) => e ? I(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Hl(e) {
  const t = {};
  for (const E in e)
    E in lo || (t[E] = e[E]);
  if (e.css === !1)
    return t;
  const { name: n = "v", type: s, duration: r, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: u = o, appearActiveClass: a = i, appearToClass: h = l, leaveFromClass: m = `${n}-leave-from`, leaveActiveClass: b = `${n}-leave-active`, leaveToClass: O = `${n}-leave-to` } = e, H = Rl(r), P = H && H[0], V = H && H[1], { onBeforeEnter: A, onEnter: ae, onEnterCancelled: Y, onLeave: Z, onLeaveCancelled: re, onBeforeAppear: Ue = A, onAppear: Ie = ae, onAppearCancelled: L = Y } = t, Q = (E, q, _e) => {
    rt(E, q ? h : l), rt(E, q ? a : i), _e && _e();
  }, U = (E, q) => {
    E._isLeaving = !1, rt(E, m), rt(E, O), rt(E, b), q && q();
  }, oe = (E) => (q, _e) => {
    const Ot = E ? Ie : ae, ee = () => Q(q, E, _e);
    st(Ot, [q, ee]), Xs(() => {
      rt(q, E ? u : o), We(q, E ? h : l), Js(Ot) || Gs(q, s, P, ee);
    });
  };
  return te(t, {
    onBeforeEnter(E) {
      st(A, [E]), We(E, o), We(E, i);
    },
    onBeforeAppear(E) {
      st(Ue, [E]), We(E, u), We(E, a);
    },
    onEnter: oe(!1),
    onAppear: oe(!0),
    onLeave(E, q) {
      E._isLeaving = !0;
      const _e = () => U(E, q);
      We(E, m), Vl(), We(E, b), Xs(() => {
        !E._isLeaving || (rt(E, m), We(E, O), Js(Z) || Gs(E, s, V, _e));
      }), st(Z, [E, _e]);
    },
    onEnterCancelled(E) {
      Q(E, !1), st(Y, [E]);
    },
    onAppearCancelled(E) {
      Q(E, !0), st(L, [E]);
    },
    onLeaveCancelled(E) {
      U(E), st(re, [E]);
    }
  });
}
function Rl(e) {
  if (e == null)
    return null;
  if (W(e))
    return [In(e.enter), In(e.leave)];
  {
    const t = In(e);
    return [t, t];
  }
}
function In(e) {
  return sn(e);
}
function We(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(t);
}
function rt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Xs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Nl = 0;
function Gs(e, t, n, s) {
  const r = e._endId = ++Nl, o = () => {
    r === e._endId && s();
  };
  if (n)
    return setTimeout(o, n);
  const { type: i, timeout: l, propCount: u } = Sl(e, t);
  if (!i)
    return s();
  const a = i + "end";
  let h = 0;
  const m = () => {
    e.removeEventListener(a, b), o();
  }, b = (O) => {
    O.target === e && ++h >= u && m();
  };
  setTimeout(() => {
    h < u && m();
  }, l + 1), e.addEventListener(a, b);
}
function Sl(e, t) {
  const n = window.getComputedStyle(e), s = (H) => (n[H] || "").split(", "), r = s(ze + "Delay"), o = s(ze + "Duration"), i = er(r, o), l = s(Ft + "Delay"), u = s(Ft + "Duration"), a = er(l, u);
  let h = null, m = 0, b = 0;
  t === ze ? i > 0 && (h = ze, m = i, b = o.length) : t === Ft ? a > 0 && (h = Ft, m = a, b = u.length) : (m = Math.max(i, a), h = m > 0 ? i > a ? ze : Ft : null, b = h ? h === ze ? o.length : u.length : 0);
  const O = h === ze && /\b(transform|all)(,|$)/.test(n[ze + "Property"]);
  return {
    type: h,
    timeout: m,
    propCount: b,
    hasTransform: O
  };
}
function er(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => tr(n) + tr(e[s])));
}
function tr(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Vl() {
  return document.body.offsetHeight;
}
const Bl = /* @__PURE__ */ te({ patchProp: Ll }, _l);
let nr;
function jl() {
  return nr || (nr = qi(Bl));
}
const sr = (...e) => {
  jl().render(...e);
};
function co(e) {
  Object.keys(e).forEach((t) => {
    bt.prototype[t] = e[t];
  });
}
const Dl = gs((e) => {
  co({
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
var $e = /* @__PURE__ */ ((e) => (e.Created = "created", e.TimeUpdate = "timeupdate", e.LoadStart = "loadstart", e.Play = "play", e.Pause = "pause", e.Playing = "playing", e.DurationChange = "durationchange", e.VolumeChange = "volumechange", e.FullscreenChange = "fullscreenchange", e.MozFullscreenChange = "mozfullscreenchange", e.WebKitFullscreenChange = "webkitfullscreenchange", e))($e || {});
const kl = [
  "fullscreenchange",
  "mozfullscreenchange",
  "webkitfullscreenchange"
];
var rr;
const Kt = typeof window != "undefined", Ul = (e) => typeof e == "string", Fn = () => {
};
Kt && ((rr = window == null ? void 0 : window.navigator) == null ? void 0 : rr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Kl(e) {
  return typeof e == "function" ? e() : wt(e);
}
function zl(e) {
  return e;
}
function Wl(e) {
  return Io() ? (Fo(e), !0) : !1;
}
function Zl(e) {
  var t;
  const n = Kl(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ql = Kt ? window : void 0;
Kt && window.document;
Kt && window.navigator;
Kt && window.location;
function tn(...e) {
  let t, n, s, r;
  if (Ul(e[0]) ? ([n, s, r] = e, t = ql) : [t, n, s, r] = e, !t)
    return Fn;
  let o = Fn;
  const i = Gt(() => Zl(t), (u) => {
    o(), u && (u.addEventListener(n, s, r), o = () => {
      u.removeEventListener(n, s, r), o = Fn;
    });
  }, { immediate: !0, flush: "post" }), l = () => {
    i(), o();
  };
  return Wl(l), l;
}
const zn = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Wn = "__vueuse_ssr_handlers__";
zn[Wn] = zn[Wn] || {};
zn[Wn];
var or;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(or || (or = {}));
var Yl = Object.defineProperty, ir = Object.getOwnPropertySymbols, Ql = Object.prototype.hasOwnProperty, Jl = Object.prototype.propertyIsEnumerable, lr = (e, t, n) => t in e ? Yl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Xl = (e, t) => {
  for (var n in t || (t = {}))
    Ql.call(t, n) && lr(e, n, t[n]);
  if (ir)
    for (var n of ir(t))
      Jl.call(t, n) && lr(e, n, t[n]);
  return e;
};
const Gl = {
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
Xl({
  linear: zl
}, Gl);
const ec = gs((e) => {
  kl.forEach((t) => {
    tn(e.$containerEl, t, () => {
      e.isFullscreen.value = !e.isFullscreen.value;
    });
  }), co({
    isFullscreen: pe(!1),
    toFullScreen() {
      (this.$containerEl.requestFullscreen || this.$containerEl.mozRequestFullScreen || this.$containerEl.webkitRequestFullscreen).call(this.$containerEl);
    },
    fromFullScreen() {
      (document.exitFullscreen || document.mozCancelFullScreen || document.webkitCancelFullScreen).call(document);
    }
  });
});
let tc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
const nc = gs((e) => {
  const t = pe(e.$el.duration || 0), n = pe(e.$el.currentTime || 0), s = pe(e.$el.volume || 0);
  e.reactive = {
    currentTime: n,
    duration: t,
    volume: s
  }, tn(e.$el, $e.TimeUpdate, () => {
    n.value = e.$el.currentTime;
  }), tn(e.$el, $e.DurationChange, () => {
    t.value = e.$el.duration;
  }), tn(e.$el, $e.VolumeChange, () => {
    s.value = e.$el.volume;
  });
});
function jt(e, t) {
  const n = Ls(e.value, "reactive");
  return Ls(n.value, t);
}
const ut = class {
  constructor(t, n) {
    It(this, "id");
    It(this, "$el");
    It(this, "$containerEl");
    this.id = `player-${tc(10)}`, this.$el = t, this.$containerEl = n, ut.modules_.forEach((s) => s(this));
  }
  static installModule(t) {
    !!t && ut.modules_.indexOf(t) < 0 && ut.modules_.push(t);
  }
  static use(t) {
    return t.forEach((n) => ut.installModule(n)), ut;
  }
  togglePlay() {
    this.$el.paused || this.$el.ended ? this.$el.play() : this.$el.pause();
  }
};
let bt = ut;
It(bt, "modules_", []);
bt.use([Dl, nc, ec]);
function gs(e) {
  return function(t) {
    return e(t), t;
  };
}
function sc() {
  return { toHMS: (t) => ({
    h: Math.floor(t / 3600),
    m: Math.floor(t % 3600 / 60),
    s: Math.floor(t % 3600 % 60)
  }) };
}
const rc = ["id", "src"], oc = { class: "lpr__container" }, ic = /* @__PURE__ */ ce({
  __name: "VideoPlayer",
  props: {
    src: { default: "" }
  },
  emits: [$e.Created],
  setup(e, { emit: t }) {
    const n = pe(), s = pe(), r = pe();
    Ut(() => {
      !s.value || !r.value || (n.value = new bt(s.value, r.value), mn("player", n.value), t($e.Created, n.value));
    });
    const o = () => {
      !n.value || n.value.togglePlay();
    };
    return (i, l) => {
      var u;
      return z(), fe("div", {
        class: fn(["lpr", { "lpr--fullscreen": (u = n.value) == null ? void 0 : u.isFullscreen }]),
        ref_key: "containerRef",
        ref: r
      }, [
        K("video", so({
          id: n.value && n.value.id,
          src: e.src
        }, i.$attrs, {
          class: "lpr__video",
          ref_key: "mediaRef",
          ref: s,
          onClick: o
        }), null, 16, rc),
        K("div", oc, [
          us(i.$slots, "default")
        ])
      ], 2);
    };
  }
}), lc = `:host{--lpr-player-border-radius: 16px}.lpr{position:relative;width:100%;height:100%;overflow:hidden;border:0 solid transparent;border-radius:var(--lpr-player-border-radius)}.lpr.lpr--fullscreen{border-radius:0}.lpr__video{width:100%;height:100%;object-fit:cover}.lpr__container{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.lpr video::-webkit-media-controls-overlay-enclosure{display:none!important}.lpr video::-webkit-media-controls-enclosure{display:none!important}.lpr video::-webkit-media-controls{display:none!important}
`, ke = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, cc = /* @__PURE__ */ ke(ic, [["styles", [lc]]]), uc = ["width", "height", "fill"], fc = /* @__PURE__ */ K("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M6.86355 2.05557C7.42031 2.02791 7.94738 2.24828 8.46759 2.53995C8.9882 2.83184 9.62066 3.26666 10.4059 3.80651L10.4378 3.82845L17.5894 8.74515L17.6192 8.76565C18.2375 9.19076 18.7436 9.53867 19.12 9.85095C19.5043 10.1698 19.8337 10.5145 20.0159 10.9612C20.2877 11.6272 20.2877 12.3731 20.0159 13.039C19.8337 13.4857 19.5043 13.8304 19.12 14.1493C18.7436 14.4616 18.2375 14.8095 17.6192 15.2346L17.5894 15.2551L10.4378 20.1718L10.4059 20.1937L10.4058 20.1938C9.62064 20.7336 8.98819 21.1684 8.46759 21.4603C7.94738 21.752 7.42031 21.9723 6.86355 21.9447C6.05497 21.9045 5.30516 21.5101 4.81398 20.8665C4.47577 20.4234 4.35876 19.8642 4.30439 19.2703C4.24998 18.676 4.24999 17.9085 4.25 16.9557V16.9556V16.9168V7.08342V7.04459V7.04449C4.24999 6.0917 4.24998 5.32424 4.30439 4.72991C4.35876 4.136 4.47577 3.57683 4.81398 3.13371C5.30516 2.49016 6.05497 2.09574 6.86355 2.05557Z"
}, null, -1), ac = [
  fc
], uo = /* @__PURE__ */ ce({
  __name: "PlayIcon",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    color: { default: "#1D1E1F" }
  },
  setup(e) {
    return (t, n) => (z(), fe("svg", {
      width: e.width,
      height: e.height,
      viewBox: "0 0 24 24",
      fill: e.color,
      xmlns: "http://www.w3.org/2000/svg"
    }, ac, 8, uc));
  }
}), dc = ["src"], hc = /* @__PURE__ */ ce({
  __name: "Poster",
  props: {
    src: { default: "" }
  },
  setup(e) {
    const t = Pe("player"), n = pe(!0);
    Ut(() => {
      t.once($e.Playing, () => s(!1));
    });
    const s = (o = !n.value) => {
      n.value = o;
    }, r = () => {
      !t || t.$el.play();
    };
    return (o, i) => (z(), Be($t, null, {
      default: kt(() => [
        n.value ? (z(), fe("div", {
          key: 0,
          class: "lpr-poster__container",
          onClick: r
        }, [
          K("img", {
            src: e.src,
            class: "lpr-poster",
            alt: "lpr-poster"
          }, null, 8, dc),
          G(uo, {
            width: "56",
            height: "56",
            color: "#fff",
            class: "lpr-poster__icon"
          })
        ])) : nl("", !0)
      ]),
      _: 1
    }));
  }
}), pc = `:host{--lpr-poster-background: #0a0a0a;--lpr-poster-brightness: 60%}.lpr-poster{width:100%;height:100%;object-fit:cover;filter:brightness(var(--lpr-poster-brightness))}.lpr-poster__container{position:absolute;top:0;left:0;width:100%;height:100%;background:var(--lpr-poster-background);z-index:2;cursor:pointer;pointer-events:all;transition:all ease-in-out .4s}.lpr-poster__container:hover{transform:scale(1.05);transition:all ease-in-out .4s}.lpr-poster__icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:3;opacity:.85;transition:all ease-in-out .4s}.lpr-poster__icon:hover{opacity:1;transition:all ease-in-out .4s}.v-enter-active,.v-leave-active{transition:opacity .5s ease}.v-enter-from,.v-leave-to{opacity:0}
`, _c = /* @__PURE__ */ ke(hc, [["styles", [pc]]]), gc = { class: "lpr-timeline__container" }, mc = /* @__PURE__ */ K("div", { class: "lpr-timeline__circle" }, null, -1), vc = [
  mc
], Cc = /* @__PURE__ */ ce({
  __name: "TimeLine",
  setup(e) {
    const t = pe(Pe("player")), n = jt(t, "currentTime"), s = jt(t, "duration"), r = Ct(() => `${n.value / s.value * 100}%`), o = (i) => {
      const { clientX: l, target: u } = i, { left: a, width: h } = u.getBoundingClientRect();
      t.value.$el.currentTime = s.value * ((l - a) / h);
    };
    return (i, l) => (z(), fe("div", gc, [
      K("div", {
        class: "lpr-timeline",
        onClick: o
      }),
      K("div", {
        class: "lpr-timeline__progress",
        style: Dt({ width: wt(r) })
      }, vc, 4)
    ]));
  }
}), bc = `:host{--timeline-color: #787574;--timeline-progress-color: #00b9ae;--timeline-height: 4px;--timeline-border-radius: 8px;--timeline-padding-left: 20px;--timeline-padding-right: 20px;--timeline-padding-bottom: 60px}.lpr-timeline__container{position:absolute;left:var(--timeline-padding-left);right:var(--timeline-padding-right);bottom:var(--timeline-padding-bottom);height:var(--timeline-height)}.lpr-timeline,.lpr-timeline__progress{position:absolute;inset:0;height:var(--timeline-height);border:0 solid transparent;border-radius:var(--timeline-border-radius)}.lpr-timeline{cursor:pointer;pointer-events:all;background-color:var(--timeline-color);opacity:.7}.lpr-timeline__progress{overflow:visible;resize:horizontal;pointer-events:none;width:0;background-color:var(--timeline-progress-color)}.lpr-timeline__circle{position:absolute;top:50%;right:0;transform:translateY(-50%);width:10px;height:10px;border-radius:50%;background-color:var(--timeline-progress-color)}
`, yc = /* @__PURE__ */ ke(Cc, [["styles", [bc]]]), wc = { class: "lpr-time" }, xc = /* @__PURE__ */ ce({
  __name: "Time",
  setup(e) {
    const t = pe(Pe("player")), { toHMS: n } = sc(), s = jt(t, "currentTime"), r = jt(t, "duration"), o = Ct(() => r.value < 3600), i = Ct(() => {
      const { h: u, m: a, s: h } = n(s.value);
      return o ? `${a}:${h}` : `${u}:${a}:${h}`;
    }), l = Ct(() => {
      const { h: u, m: a, s: h } = n(r.value);
      return o ? `${a}:${h}` : `${u}:${a}:${h}`;
    });
    return (u, a) => (z(), fe("div", wc, ws(wt(i)) + " / " + ws(wt(l)), 1));
  }
}), Ec = `.lpr-time{font-size:18px;font-weight:500;color:#fff}
`, Tc = /* @__PURE__ */ ke(xc, [["styles", [Ec]]]), $c = { class: "lpr-control-bar" }, Oc = /* @__PURE__ */ ce({
  __name: "ControlBar",
  setup(e) {
    const t = Pe("player");
    return mn("player", t), (n, s) => (z(), fe("div", $c, [
      us(n.$slots, "default")
    ]));
  }
}), Pc = `:host{--control-bar-padding-left: 20px;--control-bar-padding-right: 20px;--control-bar-padding-bottom: 12px}.lpr-control-bar{position:absolute;left:var(--control-bar-padding-left);right:var(--control-bar-padding-right);bottom:var(--control-bar-padding-bottom);display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:calc(100% - var(--control-bar-padding-right) - var(--control-bar-padding-left));gap:12px;pointer-events:all}
`, Ic = /* @__PURE__ */ ke(Oc, [["styles", [Pc]]]), Fc = { class: "lpr-control-group" }, Lc = /* @__PURE__ */ ce({
  __name: "ControlGroup",
  setup(e) {
    const t = Pe("player");
    return mn("player", t), (n, s) => (z(), fe("div", Fc, [
      us(n.$slots, "default")
    ]));
  }
}), Mc = `.lpr-control-group{display:flex;flex-direction:row;align-items:center;gap:12px}
`, Ac = /* @__PURE__ */ ke(Lc, [["styles", [Mc]]]), Hc = ["width", "height", "fill"], Rc = /* @__PURE__ */ K("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M3.62891 0.250001H3.6H3.4H3.37109H3.37106H3.37104C2.9757 0.249988 2.63465 0.249978 2.35373 0.27293C2.05722 0.297155 1.76231 0.350642 1.47852 0.495238C1.05516 0.710953 0.710953 1.05516 0.495237 1.47852C0.350642 1.76231 0.297155 2.05722 0.272929 2.35373C0.249978 2.63465 0.249988 2.9757 0.250001 3.37104V3.37106V3.37108V3.4V16.6V16.6289V16.6289V16.629C0.249988 17.0243 0.249978 17.3654 0.272929 17.6463C0.297155 17.9428 0.350642 18.2377 0.495237 18.5215C0.710953 18.9448 1.05516 19.2891 1.47852 19.5048C1.76231 19.6494 2.05722 19.7028 2.35373 19.7271C2.63463 19.75 2.97567 19.75 3.37098 19.75H3.37108H3.4H3.6H3.62893H3.62902C4.02434 19.75 4.36537 19.75 4.64627 19.7271C4.94278 19.7028 5.2377 19.6494 5.52148 19.5048C5.94485 19.2891 6.28905 18.9448 6.50477 18.5215C6.64936 18.2377 6.70285 17.9428 6.72708 17.6463C6.75003 17.3653 6.75002 17.0243 6.75 16.6289L6.75 16.6V3.4L6.75 3.37109C6.75002 2.97573 6.75003 2.63466 6.72708 2.35373C6.70285 2.05722 6.64936 1.76231 6.50477 1.47852C6.28905 1.05516 5.94485 0.710953 5.52148 0.495238C5.2377 0.350642 4.94278 0.297155 4.64627 0.27293C4.36536 0.249978 4.0243 0.249988 3.62896 0.250001H3.62894H3.62891ZM14.6289 0.250001H14.6H14.4H14.3711H14.3711H14.371C13.9757 0.249988 13.6346 0.249978 13.3537 0.27293C13.0572 0.297155 12.7623 0.350642 12.4785 0.495238C12.0552 0.710953 11.711 1.05516 11.4952 1.47852C11.3506 1.76231 11.2972 2.05722 11.2729 2.35373C11.25 2.63465 11.25 2.97571 11.25 3.37106V3.37108V3.4V16.6V16.6289V16.6289C11.25 17.0243 11.25 17.3654 11.2729 17.6463C11.2972 17.9428 11.3506 18.2377 11.4952 18.5215C11.711 18.9448 12.0552 19.2891 12.4785 19.5048C12.7623 19.6494 13.0572 19.7028 13.3537 19.7271C13.6346 19.75 13.9757 19.75 14.371 19.75H14.3711H14.4H14.6H14.6289H14.629C15.0243 19.75 15.3654 19.75 15.6463 19.7271C15.9428 19.7028 16.2377 19.6494 16.5215 19.5048C16.9448 19.2891 17.2891 18.9448 17.5048 18.5215C17.6494 18.2377 17.7028 17.9428 17.7271 17.6463C17.75 17.3653 17.75 17.0243 17.75 16.6289V16.6V3.4V3.37109C17.75 2.97573 17.75 2.63466 17.7271 2.35373C17.7028 2.05722 17.6494 1.76231 17.5048 1.47852C17.2891 1.05516 16.9448 0.710953 16.5215 0.495238C16.2377 0.350642 15.9428 0.297155 15.6463 0.27293C15.3654 0.249978 15.0243 0.249988 14.629 0.250001H14.6289H14.6289Z"
}, null, -1), Nc = [
  Rc
], Sc = /* @__PURE__ */ ce({
  __name: "PauseIcon",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    color: { default: "#1D1E1F" }
  },
  setup(e) {
    return (t, n) => (z(), fe("svg", {
      width: e.width,
      height: e.height,
      viewBox: "-2 -2 22 24",
      fill: e.color,
      xmlns: "http://www.w3.org/2000/svg"
    }, Nc, 8, Hc));
  }
}), Vc = /* @__PURE__ */ ce({
  __name: "PlayControl",
  setup(e) {
    const t = Pe("player"), n = pe(!1);
    Ut(() => {
      t.on($e.Playing, s), t.on($e.Pause, r);
    }), cs(() => {
      t.off($e.Playing, s), t.off($e.Pause, r);
    });
    const s = () => {
      n.value = !0;
    }, r = () => {
      n.value = !1;
    }, o = () => {
      !t || t.togglePlay();
    };
    return (i, l) => (z(), fe("div", {
      class: "lpr-play",
      onClick: o
    }, [
      G($t, null, {
        default: kt(() => [
          n.value ? (z(), Be(Sc, {
            key: 1,
            class: "lpr-play__icon",
            width: "32",
            height: "32",
            color: "#fff"
          })) : (z(), Be(uo, {
            key: 0,
            class: "lpr-play__icon",
            width: "32",
            height: "32",
            color: "#fff"
          }))
        ]),
        _: 1
      })
    ]));
  }
}), Bc = `.lpr-play[data-v-cc29428e]{position:relative;width:32px;height:32px;pointer-events:all;cursor:pointer;display:inline-block;margin-right:16px}.lpr-play__icon[data-v-cc29428e]{position:absolute}.v-enter-active[data-v-cc29428e],.v-leave-active[data-v-cc29428e]{transition:all .25s ease-out}.v-enter-from[data-v-cc29428e]{opacity:0;transform:translateY(-30px)}.v-leave-to[data-v-cc29428e]{opacity:0;transform:translateY(30px)}
`, jc = /* @__PURE__ */ ke(Vc, [["styles", [Bc]], ["__scopeId", "data-v-cc29428e"]]), Dc = ["width", "height", "fill"], kc = /* @__PURE__ */ K("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M12.4697 7.53031C12.1768 7.23742 12.1768 6.76254 12.4697 6.46965L17.1893 1.75H14C13.5858 1.75 13.25 1.41421 13.25 1C13.25 0.585786 13.5858 0.25 14 0.25H18.9946H19.0053H19.75V1V6C19.75 6.41421 19.4142 6.75 19 6.75C18.5858 6.75 18.25 6.41421 18.25 6V2.81062L13.5303 7.53031C13.2374 7.8232 12.7626 7.8232 12.4697 7.53031ZM7.53032 12.4696C7.82321 12.7625 7.82321 13.2374 7.53032 13.5303L2.81063 18.25H6C6.41421 18.25 6.75 18.5858 6.75 19C6.75 19.4142 6.41421 19.75 6 19.75H1H0.25V19.0045V18.9954V14C0.25 13.5858 0.585786 13.25 1 13.25C1.41421 13.25 1.75 13.5858 1.75 14V17.1893L6.46966 12.4696C6.76255 12.1767 7.23742 12.1767 7.53032 12.4696ZM1.75002 2.81066V6C1.75002 6.41421 1.41423 6.75 1.00002 6.75C0.585805 6.75 0.250019 6.41421 0.250019 6V1V0.25H1.00002H6.00002C6.41423 0.25 6.75002 0.585786 6.75002 1C6.75002 1.41421 6.41423 1.75 6.00002 1.75H2.81068L7.53035 6.46967C7.82324 6.76256 7.82324 7.23744 7.53035 7.53033C7.23746 7.82322 6.76258 7.82322 6.46969 7.53033L1.75002 2.81066ZM12.4697 12.4697C12.1768 12.7625 12.1768 13.2374 12.4697 13.5303L17.1894 18.25H14C13.5858 18.25 13.25 18.5858 13.25 19C13.25 19.4142 13.5858 19.75 14 19.75H19H19.75V19V14C19.75 13.5858 19.4142 13.25 19 13.25C18.5858 13.25 18.25 13.5858 18.25 14V17.1893L13.5303 12.4697C13.2374 12.1768 12.7626 12.1768 12.4697 12.4697Z"
}, null, -1), Uc = [
  kc
], Kc = /* @__PURE__ */ ce({
  __name: "FullscreenIcon",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    color: { default: "#1D1E1F" }
  },
  setup(e) {
    return (t, n) => (z(), fe("svg", {
      width: e.width,
      height: e.height,
      viewBox: "0 0 20 20",
      fill: e.color,
      xmlns: "http://www.w3.org/2000/svg"
    }, Uc, 8, Dc));
  }
}), zc = ["width", "height", "fill"], Wc = /* @__PURE__ */ K("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L6.25 5.18934V2C6.25 1.58579 6.58579 1.25 7 1.25C7.41421 1.25 7.75 1.58579 7.75 2V7V7.75H7H2C1.58579 7.75 1.25 7.41421 1.25 7C1.25 6.58579 1.58579 6.25 2 6.25H5.18934L0.46967 1.53033ZM7 18.75C6.58579 18.75 6.25 18.4142 6.25 18V14.8107L1.53033 19.5303C1.23744 19.8232 0.762563 19.8232 0.46967 19.5303C0.176777 19.2374 0.176777 18.7626 0.46967 18.4697L5.18934 13.75H2C1.58579 13.75 1.25 13.4142 1.25 13C1.25 12.5858 1.58579 12.25 2 12.25H7H7.75V13V18C7.75 18.4142 7.41421 18.75 7 18.75ZM19.5303 1.53033C19.8232 1.23744 19.8232 0.762563 19.5303 0.46967C19.2374 0.176777 18.7626 0.176777 18.4697 0.46967L13.75 5.18934V2C13.75 1.58579 13.4142 1.25 13 1.25C12.5858 1.25 12.25 1.58579 12.25 2V7V7.75H13H18C18.4142 7.75 18.75 7.41421 18.75 7C18.75 6.58579 18.4142 6.25 18 6.25H14.8107L19.5303 1.53033ZM13 18.75C13.4142 18.75 13.75 18.4142 13.75 18V14.8107L18.4697 19.5303C18.7626 19.8232 19.2374 19.8232 19.5303 19.5303C19.8232 19.2374 19.8232 18.7626 19.5303 18.4697L14.8107 13.75H18C18.4142 13.75 18.75 13.4142 18.75 13C18.75 12.5858 18.4142 12.25 18 12.25H13H12.25V13V18C12.25 18.4142 12.5858 18.75 13 18.75Z"
}, null, -1), Zc = [
  Wc
], qc = /* @__PURE__ */ ce({
  __name: "ExitFullscreenIcon",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    color: { default: "#1D1E1F" }
  },
  setup(e) {
    return (t, n) => (z(), fe("svg", {
      width: e.width,
      height: e.height,
      viewBox: "0 0 20 20",
      fill: e.color,
      xmlns: "http://www.w3.org/2000/svg"
    }, Zc, 8, zc));
  }
}), Yc = /* @__PURE__ */ ce({
  __name: "FullscreenControl",
  setup(e) {
    const t = pe(Pe("player")), n = () => {
      !t || (t.value.isFullscreen ? t.value.fromFullScreen() : t.value.toFullScreen());
    };
    return (s, r) => (z(), fe("div", {
      class: "lpr-fullscreen",
      onClick: n
    }, [
      G($t, null, {
        default: kt(() => {
          var o;
          return [
            (o = t.value) != null && o.isFullscreen ? (z(), Be(qc, {
              key: 1,
              class: "lpr-fullscreen__icon",
              width: "26",
              height: "26",
              color: "#fff"
            })) : (z(), Be(Kc, {
              key: 0,
              class: "lpr-fullscreen__icon",
              width: "26",
              height: "26",
              color: "#fff"
            }))
          ];
        }),
        _: 1
      })
    ]));
  }
}), Qc = `.lpr-fullscreen[data-v-c96eb516]{position:relative;width:32px;height:32px;pointer-events:all;cursor:pointer;display:inline-block;align-self:flex-end}.lpr-fullscreen__icon[data-v-c96eb516]{position:absolute;transition:all .25s ease-in}.lpr-fullscreen__icon[data-v-c96eb516]:hover{transform:scale(1.2);transition:all .25s ease-in}.v-enter-active[data-v-c96eb516],.v-leave-active[data-v-c96eb516]{transition:all .25s ease-out}.v-enter-from[data-v-c96eb516]{opacity:0;transform:scale(0)}.v-leave-to[data-v-c96eb516]{opacity:0;transform:scale(1)}
`, Jc = /* @__PURE__ */ ke(Yc, [["styles", [Qc]], ["__scopeId", "data-v-c96eb516"]]), Xc = ["width", "height", "fill"], Gc = /* @__PURE__ */ K("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M11.7501 3.7977C11.7501 3.60169 11.5347 3.48192 11.3682 3.58529L10.3055 4.24488L11.7501 5.68938V3.7977ZM10.5772 2.31083C11.7429 1.58725 13.2501 2.42563 13.2501 3.7977V9.31071L7.90732 3.96798L10.5772 2.31083ZM6.13112 5.07045L13.2501 12.1894V18.2024C13.2501 19.5745 11.7429 20.4128 10.5772 19.6893L3.07999 15.0358C0.0866191 13.1779 0.0866184 8.82221 3.07999 6.96425L6.13112 5.07045ZM5.91154 6.97219L3.87103 8.23872C1.82294 9.50995 1.82294 12.4901 3.87103 13.7614L11.3682 18.4148C11.5347 18.5182 11.7501 18.3984 11.7501 18.2024V12.8107L5.91154 6.97219Z"
}, null, -1), eu = /* @__PURE__ */ K("path", { d: "M10.9727 19.0519L3.47551 14.3985C0.954778 12.8339 0.954778 9.166 3.47551 7.6014L6.02133 6.02124L12.5001 12.5V18.2023C12.5001 18.9863 11.6388 19.4654 10.9727 19.0519Z" }, null, -1), tu = /* @__PURE__ */ K("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z"
}, null, -1), nu = /* @__PURE__ */ K("path", { d: "M10.9727 2.94809L9.10645 4.10646L12.5001 7.50007V3.79773C12.5001 3.01369 11.6389 2.53462 10.9727 2.94809Z" }, null, -1), su = [
  Gc,
  eu,
  tu,
  nu
], ru = /* @__PURE__ */ ce({
  __name: "SoundOffIcon",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    color: { default: "#1D1E1F" }
  },
  setup(e) {
    return (t, n) => (z(), fe("svg", {
      width: e.width,
      height: e.height,
      viewBox: "0 0 22 22",
      fill: e.color,
      xmlns: "http://www.w3.org/2000/svg"
    }, su, 8, Xc));
  }
}), ou = ["width", "height", "fill"], iu = /* @__PURE__ */ K("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M17.9026 5.01695C17.4264 4.80872 17.0997 4.75 17 4.75V3.25C17.4003 3.25 17.9486 3.39991 18.5036 3.6426C19.0811 3.8951 19.74 4.28017 20.3645 4.81823C21.6239 5.90319 22.75 7.62064 22.75 10.0845C22.75 12.5516 21.6206 14.2316 20.3519 15.2769C19.7242 15.7941 19.0631 16.1566 18.4856 16.3914C17.9269 16.6185 17.3869 16.75 17 16.75V15.25C17.1131 15.25 17.4481 15.194 17.9207 15.0019C18.3744 14.8174 18.9008 14.529 19.3981 14.1192C20.3794 13.3107 21.25 12.0329 21.25 10.0845C21.25 8.13288 20.3761 6.80808 19.3855 5.95466C18.885 5.52352 18.3564 5.21538 17.9026 5.01695Z"
}, null, -1), lu = /* @__PURE__ */ K("path", { d: "M19.5 10C19.5 7.5 17 6.5 17 6.5V13.5C17 13.5 19.5 12.5 19.5 10Z" }, null, -1), cu = /* @__PURE__ */ K("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M14.7499 1.80431C14.7499 0.429804 13.238 -0.408177 12.0724 0.320315L3.02962 5.97207C0.0529509 7.83249 0.0529509 12.1676 3.02962 14.0281L12.0724 19.6798C13.238 20.4083 14.7499 19.5703 14.7499 18.1958V1.80431Z"
}, null, -1), uu = [
  iu,
  lu,
  cu
], fu = /* @__PURE__ */ ce({
  __name: "SoundIcon",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    color: { default: "#1D1E1F" }
  },
  setup(e) {
    return (t, n) => (z(), fe("svg", {
      width: e.width,
      height: e.height,
      viewBox: "0 0 23 20",
      fill: e.color,
      xmlns: "http://www.w3.org/2000/svg"
    }, uu, 8, ou));
  }
}), au = { class: "lpr-volume" }, du = { class: "lpr-volume__level-container" }, hu = /* @__PURE__ */ K("div", { class: "lpr-volume__level-circle" }, null, -1), pu = [
  hu
], _u = /* @__PURE__ */ ce({
  __name: "VolumeControl",
  setup(e) {
    var l;
    const t = pe(Pe("player")), n = pe((l = t.value) == null ? void 0 : l.$el.muted), s = jt(t, "volume"), r = Ct(() => `${s.value * 100}%`), o = () => {
      !t || (t.value.$el.muted = !n.value, n.value = !n.value);
    }, i = (u) => {
      const { clientX: a, target: h } = u, { left: m, width: b } = h.getBoundingClientRect();
      t.value.$el.volume = (a - m) / b, n.value && o();
    };
    return (u, a) => (z(), fe("div", au, [
      K("div", {
        class: "lpr-volume__button",
        onClick: o
      }, [
        G($t, null, {
          default: kt(() => [
            n.value ? (z(), Be(ru, {
              key: 1,
              class: "lpr-volume__icon",
              width: "28",
              height: "28",
              color: "#fff"
            })) : (z(), Be(fu, {
              key: 0,
              class: "lpr-volume__icon",
              width: "26",
              height: "26",
              color: "#fff"
            }))
          ]),
          _: 1
        })
      ]),
      K("div", du, [
        K("div", {
          class: "lpr-volume__level",
          onClick: i
        }),
        K("div", {
          class: "lpr-volume__level-progress",
          style: Dt({ width: wt(r) })
        }, pu, 4)
      ])
    ]));
  }
}), gu = `:host{--volume-color: #787574;--volume-progress-color: #00b9ae;--volume-width: 80px;--volume-height: 4px;--volume-border-radius: 8px}.lpr-volume{position:relative;display:flex;align-items:center;width:fit-content;height:32px;gap:10px}.lpr-volume__button,.lpr-volume__level-container{display:flex;align-items:center;pointer-events:all;cursor:pointer}.lpr-volume__button{width:32px;height:100%}.lpr-volume__level-container{overflow:hidden;transform:translate(calc(-1 * var(--volume-width)/2));opacity:0;width:0;height:100%;transition:transform .2s ease-out,opacity .2s ease-in}.lpr-volume:hover .lpr-volume__level-container{position:relative;opacity:1;height:100%;width:var(--volume-width);transform:translate(0);transition:transform .2s ease-out,opacity .2s ease-in}.lpr-volume__level{cursor:pointer;pointer-events:all;background-color:var(--volume-color);opacity:.7}.lpr-volume__level,.lpr-volume__level-progress{position:absolute;inset:50% 0 0;transform:translateY(-50%);border:0 solid transparent;border-radius:var(--volume-border-radius);height:var(--volume-height)}.lpr-volume__level-progress{pointer-events:none;width:0;background-color:var(--volume-progress-color);resize:horizontal}.lpr-volume__level-circle{position:absolute;top:50%;right:0;transform:translateY(-50%);width:10px;height:10px;border-radius:50%;background-color:var(--volume-progress-color)}.lpr-volume__icon{position:absolute}.v-enter-active,.v-leave-active{transition:all .25s ease-out}.v-enter-from{opacity:0;transform:translateY(-30px)}.v-leave-to{opacity:0;transform:translateY(30px)}
`, mu = /* @__PURE__ */ ke(_u, [["styles", [gu]]]), vu = De(cc), Cu = De(_c), bu = De(yc), yu = De(Tc), wu = De(Ic), xu = De(Ac), Eu = De(jc), Tu = De(Jc), $u = De(mu);
customElements.define("lpr-player", vu);
customElements.define("lpr-poster", Cu);
customElements.define("lpr-timeline", bu);
customElements.define("lpr-time", yu);
customElements.define("lpr-control-bar", wu);
customElements.define("lpr-control-group", xu);
customElements.define("lpr-play", Eu);
customElements.define("lpr-fullscreen", Tu);
customElements.define("lpr-volume", $u);
