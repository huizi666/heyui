webpackJsonp([74],{126:function(e,t,s){var a=s(0)(s(665),s(827),null,null);a.options.__file="/Users/alicia/Documents/develop/github/heyui/src/components/demos/dataplugins/select1.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] select1.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},665:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{select:"",param:["选择1","选择2","选择3"],select2:"",param2:[{title:"选择1",key:"a1",other:"其他值"},{title:"选择2",key:"a2"},{title:"选择3",key:"a3"}],select3:"",param3:{1:"选择1",2:"选择2",3:"选择3"}}}}},827:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p",[e._v("选中值："+e._s(e.select))]),e._v(" "),s("div",{directives:[{name:"width",rawName:"v-width",value:300,expression:"300"}]},[s("Select",{attrs:{datas:e.param,placeholder:"请选择您的内容"},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})],1),e._v(" "),s("br"),e._v(" "),s("p",[e._v("选中值："+e._s(e.select2))]),e._v(" "),s("div",{directives:[{name:"width",rawName:"v-width",value:300,expression:"300"}]},[s("Select",{attrs:{datas:e.param2,placeholder:"请选择您的内容2"},model:{value:e.select2,callback:function(t){e.select2=t},expression:"select2"}})],1),e._v(" "),s("br"),e._v(" "),s("p",[e._v("选中值："+e._s(e.select3))]),e._v(" "),s("div",{directives:[{name:"width",rawName:"v-width",value:300,expression:"300"}]},[s("Select",{attrs:{datas:e.param3,placeholder:"请选择您的内容3"},model:{value:e.select3,callback:function(t){e.select3=t},expression:"select3"}})],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0}});