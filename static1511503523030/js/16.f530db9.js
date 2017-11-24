webpackJsonp([16],{1150:function(e,o,n){var r=n(1)(n(1378),n(1578),null,null,null);r.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/guide/themes.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)}),r.options.functional,e.exports=r.exports},1378:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{}},methods:{},components:{}}},1578:function(e,o,n){e.exports={render:function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"doc"},[n("h2",[e._v("更换主题")]),e._v(" "),n("p",[e._v("我们的样式使用的是less语言，我们定义了一些全局使用的变量")]),e._v(" "),n("p",[e._v("您可以通过修改这些变量，达到变换样式的需求。")]),e._v(" "),n("h3",[e._v("更换方法")]),e._v(" "),e._m(0),e._v(" "),n("h3",[e._v("全局变量说明")]),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("下面代码中的参数，你可以按照自己的设计修改，达成设定系统主题的目的。")]),e._v(" "),n("codes",{attrs:{type:"less"}},[e._v('\n// Color\n@primary-color : #3399ff;\n@link-color : @primary-color;\n@blue-color : #3B91FF; //info\n@green-color : #13CE66; //success\n@yellow-color : #FFAE00; //warn\n@red-color : #E11617; //error\n@white-color : #ffffff;\n\n//Gray 1-4 more shallow\n@dark-color: #333333;\n@gray-color: #808080;\n@gray1-color: #d3d3d3;\n@gray2-color: #eeeeee;\n@gray3-color: #f3f3f3;\n@gray4-color: #f9f9f9;\n\n//hover\n@hover-background-color: lighten(@primary-color, 37%);\n\n//tag\n@tag-background-color: lighten(@primary-color, 37%);\n@tag-color: @primary-color;\n\n//font-size\n@font-size : 14px;\n@font-size-mini : 13px;\n@font-size-input : @font-size-mini;\n@font-size-input-tag : 12px;\n@font-size-badge : 12px;\n\n\n@font-family : "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;\n@line-height : 1.5;\n@line-height-computed : floor((@font-size * @line-height));\n\n// Input\n@input-height : 30px;\n\n//border\n@border-color: @gray2-color;\n@border: 1px solid @gray2-color;\n\n//disabled\n@disabled-cursor: not-allowed;\n@disabled-color: @gray-color;\n@disabled-border-color: @gray1-color;\n@disabled-background-color: @gray4-color;\n\n//radius\n@border-radius : 4px;\n@btn-border-radius: 4px;\n\n//box-shadow\n@box-shadow-button: 0 1px 1px 0 @gray2-color;\n@box-shadow-notify: 0 5px 10px rgba(0, 0, 0, 0.1);\n@box-shadow-dropdown : 0 5px 10px rgba(0, 0, 0, 0.1);\n@box-shadow-select-dropdown: 0 1px 6px rgba(0, 0, 0, .2);\n\n//switch\n@switch-hight: 26px;\n@min-switch-height: 18px;\n')]),e._v(" "),n("h3",[e._v("示例")]),e._v(" "),e._m(2),e._v(" "),e._m(3)],1)},staticRenderFns:[function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("p",[e._v("更换主题的方法已经在快速上手的文档中有详细的说明，如果有任何疑问，请参考"),n("a",{attrs:{href:"/guide/quickstart"}},[e._v("快速上手")]),e._v("文档。")])},function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("p",[e._v("我们的原始全局变量文件你可以在"),n("a",{attrs:{href:"https://github.com/heyui/heyui/blob/master/themes/var.less",target:"_blank"}},[e._v("github")]),e._v("上查看。")])},function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("p",[e._v("我们提供的"),n("a",{attrs:{href:"http://demo.heyui.top/",target:"_blank"}},[e._v("heyui-demo")]),e._v("就是一个完整的示例，我们修改了主色，并调整了一些参数，"),n("a",{attrs:{href:"https://github.com/heyui/heyui-demo/blob/master/src/css/var.less"}},[e._v("代码示例")]),e._v("。")])},function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("p",[e._v("如果你还需要一些更细节化的调整，我们建议可以新建"),n("code",[e._v("overwrite.less")]),e._v("对已有的class进行覆盖修改。")])}]},e.exports.render._withStripped=!0}});