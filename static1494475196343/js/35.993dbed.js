webpackJsonp([35],{178:function(e,t,a){var r=a(0)(a(744),a(815),null,null);r.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/demos/form/switchlist1.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] switchlist1.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},744:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{value1:"选择1",value2:"1",param1:["选择1","选择2","选择3"],param2:{1:"选择1",2:"选择2",3:"选择3"}}}}},815:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{directives:[{name:"color",rawName:"v-color:gray",arg:"gray"}]},[e._v(e._s(e.value1))]),e._v(" "),a("div",[a("SwitchList",{attrs:{datas:e.param1},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),a("p",{directives:[{name:"color",rawName:"v-color:gray",arg:"gray"}]},[e._v(e._s(e.value2))]),e._v(" "),a("div",[a("SwitchList",{attrs:{datas:e.param2},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0}});