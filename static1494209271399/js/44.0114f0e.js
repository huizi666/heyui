webpackJsonp([44],{164:function(e,t,o){var n=o(0)(o(726),o(813),null,null);n.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/demos/form/input5.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] input5.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},726:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{value:""}},methods:{setvalue:function(){this.value="1\n2\n3\n4\n5\n6"},removevalue:function(){this.value=""}}}},813:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[o("Button",{attrs:{color:"blue",size:"s"},nativeOn:{click:function(t){e.setvalue(t)}}},[e._v("加载值")]),o("Button",{attrs:{color:"red",size:"s"},nativeOn:{click:function(t){e.removevalue(t)}}},[e._v("清除值")])],1),e._v(" "),o("br"),e._v(" "),o("div",[o("textarea",{directives:[{name:"autosize",rawName:"v-autosize"},{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{rows:"1",placeholder:"请输入"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),o("textarea",{directives:[{name:"autosize",rawName:"v-autosize"},{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{rows:"3",placeholder:"请输入"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});