webpackJsonp([23],{190:function(e,o,t){var n=t(0)(t(756),t(961),null,null);n.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/demos/message/modal2.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] modal2.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},756:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{opened:!1}},methods:{confirm:function(){this.$Message("点击确定了。"),this.close()},close:function(){this.opened=!1}}}},961:function(e,o,t){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("button",{staticClass:"h-btn",on:{click:function(o){e.opened=!0}}},[e._v("打开弹出框")]),e._v(" "),t("Modal",{attrs:{"has-mask":!1},model:{value:e.opened,callback:function(o){e.opened=o},expression:"opened"}},[t("div",{slot:"header"},[e._v("标题")]),e._v(" "),t("div",[e._v("这是一个普通的弹出框")]),e._v(" "),t("div",{slot:"footer"},[t("button",{staticClass:"h-btn",on:{click:e.close}},[e._v("取消")]),t("button",{staticClass:"h-btn h-btn-primary",on:{click:e.confirm}},[e._v("确定")])])])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});