import {
  Fragment,
  computed,
  createBaseVNode,
  createElementBlock,
  createStaticVNode,
  createTextVNode,
  createVNode,
  defineComponent,
  isRef,
  nextTick,
  onMounted,
  openBlock,
  reactive,
  ref,
  renderList,
  renderSlot,
  unref,
  useCssVars,
  vModelText,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-AWA6B2ZS.js";
import {
  toDisplayString
} from "./chunk-JXWQMH7G.js";

// ../../personal-components-docs/node_modules/tk-personal-components/dist/tk-lib.es.js
var se = { class: "badge-main" };
var ie = defineComponent({
  __name: "badge",
  props: {
    value: null,
    color: { default: "#f56c6c" },
    textColor: { default: "#ffffff" },
    max: { default: 99 }
  },
  setup(a) {
    const t = a;
    useCssVars((c) => ({
      "65f25024": a.color,
      "5e13f312": a.textColor
    }));
    const n = ref(null), d = ref(null);
    function m() {
      nextTick(() => {
        var c;
        if (n.value && t.value) {
          let u = Number(n.value.innerText);
          if (isNaN(u))
            d.value && (console.log(n.value, n.value.clientWidth), d.value.style.marginRight = n.value.offsetWidth + "px");
          else {
            let r = u > t.max ? `${t.max}+` : `${u}`;
            n.value.innerText = r, d.value && (console.log(n.value, n.value.clientWidth), d.value.style.marginRight = n.value.offsetWidth + "px");
          }
        } else
          d.value && (d.value.style.marginRight = ((c = n.value) == null ? void 0 : c.offsetWidth) + "px");
      });
    }
    return onMounted(() => {
      m();
    }), watch(t, () => {
      m();
    }), (c, u) => (openBlock(), createElementBlock("div", {
      style: { "font-size": "12px" },
      ref_key: "badgeContainer",
      ref: d
    }, [
      createBaseVNode("div", se, [
        renderSlot(c.$slots, "default", {}, void 0, true),
        a.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "badge",
          ref_key: "badge",
          ref: n
        }, toDisplayString(a.value), 513)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: "badge-dot",
          ref_key: "badge",
          ref: n
        }, null, 512))
      ])
    ], 512));
  }
});
var N = (a, t) => {
  const n = a.__vccOpts || a;
  for (const [d, m] of t)
    n[d] = m;
  return n;
};
var I = N(ie, [["__scopeId", "data-v-c1c05d21"]]);
I.name = "tk-badge";
I.install = (a) => {
  a.component(I.name, I);
};
var de = ["disabled"];
var ce = { class: "content" };
var ue = { class: "loading" };
var fe = defineComponent({
  __name: "button",
  props: {
    type: {
      type: String,
      default: "default",
      required: false
    },
    size: {
      type: String,
      default: "normal",
      required: false
    },
    shape: {
      type: String,
      default: "default",
      required: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    // 是否加载中
    color: String,
    // 背景颜色
    hoverColor: String,
    // hover状态颜色
    textColor: String
    // 文字颜色
  },
  setup(a) {
    const t = a;
    let { type: n, size: d, shape: m, loading: c } = t;
    const u = reactive({
      "--bg-color": " #dbdbdb",
      "--bg-hover-color": "#e6e3e3",
      "--text-color": "#000000"
    }), r = reactive({
      "--bg-color": "#2d87cc",
      "--bg-hover-color": "#50a2e1",
      "--text-color": "#ffffff"
    }), k = reactive({
      "--bg-color": "#23af54",
      "--bg-hover-color": "#1ccf5b",
      "--text-color": "#ffffff"
    }), S = reactive({
      "--bg-color": "#db4343",
      "--bg-hover-color": "#fd6767",
      "--text-color": "#ffffff"
    }), _ = reactive({
      default: u,
      primary: r,
      success: k,
      danger: S
    }), i = reactive({
      "--font-size": "1.2rem",
      "--padding": "0.6em 1.5em"
    }), s = reactive({
      "--font-size": "0.9rem",
      "--padding": "0.5em 1.25em"
    }), j = reactive({
      "--font-size": "0.8rem",
      "--padding": "0.4em 1em"
    }), J = reactive({
      "--font-size": "0.6rem",
      "--padding": "0.3em 0.75em"
    }), E = reactive({
      large: i,
      normal: s,
      small: j,
      mini: J
    }), A = reactive({
      "--border-radius": "0.25em"
    }), F = reactive({
      "--border-radius": "1.5em"
    }), Y = reactive({
      "--border-radius": "50%",
      "--padding": "0.6em"
    }), M = reactive({
      default: A,
      round: F,
      circle: Y
    }), g = ref(null);
    function B() {
      var T, R, Z, l, o, e;
      if (n && d && m) {
        for (let y in _[n])
          (T = g.value) == null || T.style.setProperty(y, _[n][y]);
        for (let y in E[d])
          (R = g.value) == null || R.style.setProperty(y, E[d][y]);
        for (let y in M[m])
          (Z = g.value) == null || Z.style.setProperty(y, M[m][y]);
        t.color && ((l = g.value) == null || l.style.setProperty("--bg-color", t.color)), t.hoverColor && ((o = g.value) == null || o.style.setProperty("--bg-hover-color", t.hoverColor)), t.textColor && ((e = g.value) == null || e.style.setProperty("--text-color", t.textColor));
      }
    }
    return onMounted(() => {
      B();
    }), watch(t, () => {
      n = t.type, d = t.size, m = t.shape, c = t.loading, B();
    }), (T, R) => (openBlock(), createElementBlock("button", {
      disabled: unref(c),
      ref_key: "buttonRef",
      ref: g
    }, [
      createBaseVNode("div", ce, [
        withDirectives(createBaseVNode("div", ue, null, 512), [
          [vShow, unref(c)]
        ]),
        renderSlot(T.$slots, "prefix", {}, void 0, true),
        renderSlot(T.$slots, "default", {}, () => [
          createTextVNode("默认")
        ], true),
        renderSlot(T.$slots, "suffix", {}, void 0, true)
      ])
    ], 8, de));
  }
});
var D = N(fe, [["__scopeId", "data-v-640db270"]]);
D.name = "tk-button";
D.install = (a) => {
  a.component(D.name, D);
};
var ve = { class: "card-box" };
var pe = {
  key: 0,
  class: "title"
};
var he = {
  key: 1,
  class: "title"
};
var me = { class: "card-content" };
var ye = {
  key: 2,
  class: "footbar"
};
var _e = {
  key: 3,
  class: "footbar"
};
var ge = defineComponent({
  __name: "card",
  props: {
    title: String,
    // 标题
    foot: String
    // 底部
  },
  setup(a) {
    const t = a;
    return (n, d) => (openBlock(), createElementBlock("div", ve, [
      t.title ? (openBlock(), createElementBlock("div", pe, toDisplayString(t.title), 1)) : (openBlock(), createElementBlock("div", he, [
        renderSlot(n.$slots, "title", {}, void 0, true)
      ])),
      createBaseVNode("div", me, [
        renderSlot(n.$slots, "default", {}, void 0, true)
      ]),
      t.foot ? (openBlock(), createElementBlock("div", ye, toDisplayString(t.foot), 1)) : (openBlock(), createElementBlock("div", _e, [
        renderSlot(n.$slots, "foot", {}, void 0, true)
      ]))
    ]));
  }
});
var P = N(ge, [["__scopeId", "data-v-15a69eeb"]]);
P.name = "tk-card";
P.install = (a) => {
  a.component(P.name, P);
};
var be = { class: "container" };
var ke = ["value"];
var xe = createStaticVNode('<label class="input_icon" data-v-4a21d4d3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36 36" data-v-4a21d4d3><path fill="#606266" d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6Z" class="clr-i-outline clr-i-outline-path-1" data-v-4a21d4d3></path><path fill="currentColor" d="M8 14h2v2H8z" class="clr-i-outline clr-i-outline-path-2" data-v-4a21d4d3></path><path fill="currentColor" d="M14 14h2v2h-2z" class="clr-i-outline clr-i-outline-path-3" data-v-4a21d4d3></path><path fill="currentColor" d="M20 14h2v2h-2z" class="clr-i-outline clr-i-outline-path-4" data-v-4a21d4d3></path><path fill="currentColor" d="M26 14h2v2h-2z" class="clr-i-outline clr-i-outline-path-5" data-v-4a21d4d3></path><path fill="currentColor" d="M8 19h2v2H8z" class="clr-i-outline clr-i-outline-path-6" data-v-4a21d4d3></path><path fill="currentColor" d="M14 19h2v2h-2z" class="clr-i-outline clr-i-outline-path-7" data-v-4a21d4d3></path><path fill="currentColor" d="M20 19h2v2h-2z" class="clr-i-outline clr-i-outline-path-8" data-v-4a21d4d3></path><path fill="currentColor" d="M26 19h2v2h-2z" class="clr-i-outline clr-i-outline-path-9" data-v-4a21d4d3></path><path fill="currentColor" d="M8 24h2v2H8z" class="clr-i-outline clr-i-outline-path-10" data-v-4a21d4d3></path><path fill="currentColor" d="M14 24h2v2h-2z" class="clr-i-outline clr-i-outline-path-11" data-v-4a21d4d3></path><path fill="currentColor" d="M20 24h2v2h-2z" class="clr-i-outline clr-i-outline-path-12" data-v-4a21d4d3></path><path fill="currentColor" d="M26 24h2v2h-2z" class="clr-i-outline clr-i-outline-path-13" data-v-4a21d4d3></path><path fill="currentColor" d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" class="clr-i-outline clr-i-outline-path-14" data-v-4a21d4d3></path><path fill="currentColor" d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" class="clr-i-outline clr-i-outline-path-15" data-v-4a21d4d3></path><path fill="currentColor" d="M13 6h10v2H13z" class="clr-i-outline clr-i-outline-path-16" data-v-4a21d4d3></path><path fill="none" d="M0 0h36v36H0z" data-v-4a21d4d3></path></svg></label>', 1);
var Ce = { class: "date-seletor" };
var $e = { class: "head" };
var Te = { class: "title" };
var Se = { class: "title-btn" };
var Me = { class: "title-btn" };
var ze = { class: "main" };
var De = ["onClick"];
var Ve = ["onClick", "title"];
var we = ["onClick"];
var Ne = { class: "foot" };
var Be = defineComponent({
  __name: "dateSelector",
  props: {
    modelValue: String,
    // v-model绑定值
    shake: Boolean
    // 是否开启震动
  },
  emits: [
    "update:modelValue"
  ],
  setup(a, { emit: t }) {
    const n = a, d = ref(null), m = ref(null), c = ref(null), u = ref(null);
    let r = reactive({
      year: 0,
      month: 0,
      day: 0
    });
    watch(r, () => {
      let l = `${r.year}-${r.month >= 10 ? r.month : "0" + r.month}-${r.day >= 10 ? r.day : "0" + r.day}`;
      t("update:modelValue", l);
    }), watch(() => n.modelValue, (l) => {
      let e = (l == null ? void 0 : l.split("-")).map((y) => parseInt(y));
      for (let y of e)
        if (isNaN(y))
          return;
      if (e[0] >= 0 && e[0] <= 9999 && e[1] >= 1 && e[1] <= 12 && e[2] >= 0 && e[2] <= A(e[0], e[1]))
        i.value = e[0], s.value = e[1], g(e[2]);
      else
        return;
    });
    let k = reactive({
      year: 0,
      month: 0,
      day: 0
    });
    function S(l) {
      let o = l % 7 - 1, e = Math.floor(l / 7) + 2;
      return o < 0 && (o = o + 7, e = e - 1), { x: o, y: e };
    }
    let _ = new Date(), i = ref(_.getFullYear()), s = ref(_.getMonth() + 1), j = computed(() => s.value === 12 ? 1 : s.value + 1), J = computed(() => s.value === 1 ? 12 : s.value - 1), E = reactive(["一", "二", "三", "四", "五", "六", "日"]);
    function A(l, o) {
      var e = new Date(l, o, 0);
      return e.getDate();
    }
    let F = computed(() => A(i.value, s.value));
    function Y(l) {
      return l.year === _.getFullYear() && l.month === _.getMonth() + 1 && l.day === M;
    }
    let M = _.getDate();
    r.year = i.value, r.month = s.value, r.day = M, k = r;
    function g(l) {
      n.shake && navigator.vibrate(100);
      let o = m.value[k.day - 1];
      Y(k) ? (o.style.color = "#2d87cc", o.style.fontWeight = "bold", o.style.boxShadow = "0 0 4px rgba(0,0,0,0.2)") : o.style.color = "#606266";
      let e = S(l), y = m.value[l - 1];
      d.value && (d.value.style.transform = `translate(${2.3 * e.x}em, ${2.3 * e.y}em)`), setTimeout(() => {
        Y(r) && (y.style.fontWeight = "normal", y.style.boxShadow = "none"), y.style.color = "#ffffff";
      }, 300), r.year = i.value, r.month = s.value, r.day = l, k = r;
    }
    function B(l) {
      s.value === 1 ? (i.value--, s.value = 12) : s.value--, g(l);
    }
    function T(l) {
      s.value === 12 ? (i.value++, s.value = 1) : s.value++, g(l);
    }
    onMounted(() => {
      let l = S(M), o = m.value[M - 1];
      d.value && (d.value.style.transform = `translate(${2.3 * l.x}em, ${2.3 * l.y}em)`, d.value.style.transition = "all 0.5s", o.style.color = "#fff");
    }), watch([s, i], () => {
      let l = m.value[M - 1];
      s.value === _.getMonth() + 1 && i.value === _.getFullYear() ? (l.style.color = "#2d87cc", l.style.fontWeight = "bold", l.style.boxShadow = "0 0 4px rgba(0,0,0,0.2)") : (l.style.color = "#606266", l.style.fontWeight = "normal", l.style.boxShadow = "none"), r.year = i.value, r.month = s.value, g(r.day);
    });
    function R(l) {
      let o = parseInt(l.target.value);
      isNaN(o) || o <= 0 || o >= 9999 ? c.value && (c.value.style.color = "red") : c.value && (c.value.style.color = "#000000");
    }
    function Z(l) {
      let o = parseInt(l.target.value);
      isNaN(o) || o < 1 || o > 12 ? u.value && (u.value.style.color = "red") : u.value && (u.value.style.color = "#000000");
    }
    return (l, o) => (openBlock(), createElementBlock("div", be, [
      createBaseVNode("input", {
        class: "input_value",
        type: "text",
        "model-value": "modelValue",
        value: a.modelValue,
        onInput: o[0] || (o[0] = (e) => l.$emit("update:modelValue", e.target.value))
      }, null, 40, ke),
      xe,
      createBaseVNode("div", Ce, [
        createBaseVNode("div", $e, [
          createBaseVNode("div", Te, [
            createBaseVNode("span", Se, [
              withDirectives(createBaseVNode("input", {
                class: "date-show year",
                type: "number",
                "onUpdate:modelValue": o[1] || (o[1] = (e) => isRef(i) ? i.value = e : i = e),
                min: "0",
                max: "9999",
                ref_key: "yearRef",
                ref: c,
                onInput: o[2] || (o[2] = (e) => R(e))
              }, null, 544), [
                [vModelText, unref(i)]
              ]),
              createTextVNode(" 年")
            ]),
            createBaseVNode("span", Me, [
              withDirectives(createBaseVNode("input", {
                class: "date-show month",
                type: "number",
                "onUpdate:modelValue": o[3] || (o[3] = (e) => isRef(s) ? s.value = e : s = e),
                min: "1",
                max: "12",
                ref_key: "monthRef",
                ref: u,
                onInput: o[4] || (o[4] = (e) => Z(e))
              }, null, 544), [
                [vModelText, unref(s)]
              ]),
              createTextVNode(" 月")
            ])
          ])
        ]),
        createBaseVNode("div", ze, [
          createBaseVNode("div", {
            class: "select",
            ref_key: "select",
            ref: d
          }, null, 512),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(E), (e) => (openBlock(), createElementBlock("div", {
            class: "item-week",
            ref_for: true,
            ref: "itemWeeks"
          }, toDisplayString(e), 513))), 256)),
          (openBlock(), createElementBlock(Fragment, null, renderList(7, (e) => createBaseVNode("div", {
            class: "item-previus",
            ref_for: true,
            ref: "itemPrevius",
            onClick: (y) => B(e)
          }, toDisplayString(e), 9, De)), 64)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(F), (e) => (openBlock(), createElementBlock("div", {
            class: "item",
            ref_for: true,
            ref_key: "itemNormal",
            ref: m,
            onClick: (y) => g(e),
            title: unref(i) + "年" + unref(s) + "月" + e + "日"
          }, toDisplayString(e), 9, Ve))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(42 - unref(F) - 7, (e) => (openBlock(), createElementBlock("div", {
            class: "item-next",
            ref_for: true,
            ref: "itemNext",
            onClick: (y) => T(e)
          }, toDisplayString(e), 9, we))), 256))
        ]),
        createBaseVNode("div", Ne, [
          createBaseVNode("div", {
            class: "btn",
            onClick: o[5] || (o[5] = (e) => B(1))
          }, toDisplayString(unref(J)) + "月", 1),
          createBaseVNode("div", {
            class: "btn",
            onClick: o[6] || (o[6] = (e) => T(1))
          }, toDisplayString(unref(j)) + "月", 1)
        ])
      ])
    ]));
  }
});
var W = N(Be, [["__scopeId", "data-v-4a21d4d3"]]);
W.name = "tk-date-selector";
W.install = (a) => {
  a.component(W.name, W);
};
var Re = ["model-value"];
var Ie = {
  key: 0,
  class: "title"
};
var Pe = {
  key: 1,
  class: "title"
};
var We = { class: "dialog-content" };
var He = { class: "toolbar" };
var qe = defineComponent({
  __name: "dialog",
  props: {
    modelValue: Boolean,
    // 是否显示
    title: String
    // 标题
  },
  emits: [
    "confirm",
    // ‘确定’ 回调事件
    "cancel",
    // ‘取消’ 回调事件
    "update:modelValue"
    // 绑定值的更新事件
  ],
  setup(a, { emit: t }) {
    const n = a;
    let d = ref(null), m = ref(null), c, u;
    onMounted(() => {
      var i, s;
      c = (i = d.value) == null ? void 0 : i.style, u = (s = m.value) == null ? void 0 : s.style;
    }), watch(n, (i) => {
      i.modelValue && setTimeout(() => {
        k();
      }, 0);
    });
    function r() {
      setTimeout(() => {
        c && u && (c.backgroundColor = "rgba(0, 0, 0, 0)", u.opacity = "0", u.transform = "translate(-50%, -70%)", setTimeout(() => {
          t("update:modelValue", false);
        }, 600));
      }, 100);
    }
    function k() {
      c && u && (c.backgroundColor = "rgba(0, 0, 0, 0.15)", u.opacity = "1", u.transform = "translate(-50%, -50%)");
    }
    function S() {
      t("confirm"), r();
    }
    function _() {
      t("cancel"), r();
    }
    return (i, s) => withDirectives((openBlock(), createElementBlock("div", {
      class: "model-box",
      ref_key: "modelBoxRef",
      ref: d,
      "model-value": a.modelValue
    }, [
      createBaseVNode("div", {
        class: "model-content",
        ref_key: "modelContentRef",
        ref: m
      }, [
        n.title ? (openBlock(), createElementBlock("div", Ie, toDisplayString(n.title), 1)) : (openBlock(), createElementBlock("div", Pe, [
          renderSlot(i.$slots, "title", {}, void 0, true)
        ])),
        createBaseVNode("div", We, [
          renderSlot(i.$slots, "default", {}, void 0, true)
        ]),
        createBaseVNode("div", He, [
          createVNode(D, {
            type: "default",
            onClick: _
          }, {
            default: withCtx(() => [
              createTextVNode("Cancel")
            ]),
            _: 1
          }),
          createVNode(D, {
            type: "primary",
            onClick: S
          }, {
            default: withCtx(() => [
              createTextVNode("Confirm")
            ]),
            _: 1
          })
        ])
      ], 512)
    ], 8, Re)), [
      [vShow, n.modelValue]
    ]);
  }
});
var H = N(qe, [["__scopeId", "data-v-8c3171ce"]]);
H.name = "tk-dialog";
H.install = (a) => {
  a.component(H.name, H);
};
var Le = ["href", "onClick", "disabled"];
var Ee = { class: "link-text" };
var Ae = defineComponent({
  __name: "link",
  props: {
    type: {
      type: String,
      default: "default",
      required: false
    },
    underline: {
      type: Boolean,
      default: true,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    href: {
      type: String,
      default: "",
      required: false
    }
  },
  setup(a) {
    const t = a, n = reactive({
      "--text-color": "#606266",
      "--text-hover-color": "#2d87cc",
      "--text-underline-color": "#2d87cc"
    }), d = reactive({
      "--text-color": "#50a2e1",
      "--text-hover-color": "#2d87cc",
      "--text-underline-color": "#2d87cc"
    }), m = reactive({
      "--text-color": "#1ccf5b",
      "--text-hover-color": "#23af54",
      "--text-underline-color": "#23af54"
    }), c = reactive({
      "--text-color": "#fd6767",
      "--text-hover-color": "#db4343",
      "--text-underline-color": "#db4343"
    }), u = reactive({
      default: n,
      primary: d,
      success: m,
      danger: c
    }), r = ref(null);
    function k() {
      var _, i;
      if (t.type)
        for (let s in u[t.type])
          (_ = r.value) == null || _.style.setProperty(s, u[t.type][s]);
      t.underline || (i = r.value) == null || i.style.setProperty("--text-underline-color", "transparent");
    }
    onMounted(() => {
      k();
    }), watch(t, () => {
      k();
    });
    function S() {
      r.value && t.href && !t.disabled && window.open(r.value.href);
    }
    return (_, i) => (openBlock(), createElementBlock("a", {
      href: t.href,
      class: "link",
      ref_key: "linkRef",
      ref: r,
      onClick: withModifiers(S, ["prevent"]),
      disabled: t.disabled
    }, [
      createBaseVNode("span", Ee, [
        renderSlot(_.$slots, "default", {}, () => [
          createTextVNode("Link")
        ], true)
      ])
    ], 8, Le));
  }
});
var q = N(Ae, [["__scopeId", "data-v-ce2d1bab"]]);
q.name = "tk-link";
q.install = (a) => {
  a.component(q.name, q);
};
var Fe = [
  I,
  D,
  P,
  W,
  H,
  q
];
var Ye = (a) => {
  Fe.map((t) => {
    a.component(t.name, t);
  });
};
var Ue = {
  install: Ye
};
export {
  I as TkBadge,
  I as TkBadgeType,
  D as TkButton,
  P as TkCard,
  W as TkDateSelector,
  H as TkDialog,
  q as TkLink,
  Ue as default
};
//# sourceMappingURL=tk-personal-components.js.map
