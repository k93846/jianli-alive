webpackJsonp([1],{40:function(n,e){},41:function(n,e,t){t(87);var r=t(14)(t(48),t(95),"data-v-7747d3c6",null);n.exports=r.exports},42:function(n,e,t){t(85);var r=t(14)(t(49),t(93),"data-v-4f21a162",null);n.exports=r.exports},43:function(n,e,t){t(86);var r=t(14)(t(46),t(94),"data-v-4f8813d4",null);n.exports=r.exports},44:function(n,e,t){t(88);var r=t(14)(t(47),t(96),"data-v-7c5e58bf",null);n.exports=r.exports},46:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),u=t(24),a=t.n(u),l=t(42),c=t.n(l),d=t(41),m=t.n(d),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:25,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 面试官您好，我是石东昊。\n* 能在上百上千份简历中受到您的关注，不胜荣幸！\n* 我通过这个页面展示一些我的简历制作过程和前端基本功。\n* 如果觉得我符合岗位要求，期待接到您的现场面试邀约。\n*/\n\n/* 首先，为了让动态效果过渡平滑，需要添加一些默认设置。 */\n* {\n  transition: all .3s;\n}\n/* 白色背景有些单调，我换一个颜色。 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 给文字和边框设置一点间距。 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: 30px;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 给代码添加颜色。 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果。 */\n.styleEditor::-webkit-scrollbar {\n  display: none;\n}\n.styleEditor {\n  position: fixed; \n  transform: perspective(1000px) rotateY(13deg) rotateZ(-2deg);\n}\n\n/* 接下来我准备一个简历编辑器。 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  \n  margin: 30px;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/*我开始在编辑器中写简历了。*/\n","\n/* \n * 整体转换一下简历格式。\n */\n",'\n/* 再加点样式。 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"石东昊\n----\n\n男 | 24岁 |  广州\n求职意向：前端开发工程师\n\n手机：13974391326（微信同号）\n\n项目经历\n----\n\n* 素彩UI——一款基于 Vue3 / Vite / JavaScript 的 UI 框架。\n主要组件有开关选择器、各式按钮、弹出框、组件切换动效等，已发布至npm。\n* 赋能·Markdown——全原生JavaScript项目，可以使用Markdown语法，快速制作PPT。\n* 简·账——自行设计的极简记账应用，特点是快速记账，可以通过图表查看自己的消费习惯。\n* 可自定义的前端导航\n* 会动的皮卡丘\n* ……\n\n技能\n----\n\n1. 熟练掌握HTML、CSS、JavaScript基本功，能将设计稿完美还原。\n2. 熟练掌握 Vue全家桶的使用，包括 VueCli、Vite、VueRouter、Vuex 等。\n3. 熟悉 ES6和Vue3新特性。\n4. 掌握开发辅助工具如 SASS语法、 Git版本控制、 Vscode编程工具以及AI辅助编程等。\n5. 熟悉前后端分离技术。 \n\n教育经历\n----\n\n* 2017年9月~2021年7月：中央民族大学(985工程，双一流A) 本科 行政管理\n\n工作经历\n----\n\n* 2021年8月~2023年4月：中建三局绿色产业投资有限公司 网络党建岗\n\n\n链接\n----\n\n* [返回静态简历](https://k93846.github.io/jianli-static/src/index.html)\n\n> 感谢面试官在百忙之中能抽出时间来阅读我的简历，我若有幸收到现场面试邀约，一定盛情赴会。\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=a()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=a()(s.a.mark(function e(){var r,u,a,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:u=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),a=u-r.length,this.currentStyle.length<u?(l=this.currentStyle.length-a,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):(t(),document.querySelector("#scroll-test").scrollTo(0,999));case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},47:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),u=t(24),a=t.n(u),l=t(42),c=t.n(l),d=t(41),m=t.n(d),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:25,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 面试官您好，我是石东昊。\n* 能在上百上千份简历中受到您的关注，不胜荣幸！\n* 我通过这个页面展示一些我的简历制作过程和前端基本功。\n* 如果觉得我符合岗位要求，期待接到您的现场面试邀约。\n*/\n\n/* 首先，为了让动态效果过渡平滑，需要添加一些默认设置。 */\n* {\n  transition: all .3s;\n}\n/* 白色背景有些单调，我换一个颜色。 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 给文字和边框设置一点间距、高度。 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n.styleEditor::-webkit-scrollbar {\n  display: none;\n}\n.styleEditor {\n  height: 45vh;\n}\n/* 给代码添加颜色。 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加点 3D 效果。 */\n\n.styleEditor {\n  position: fixed; \n  transform: perspective(1000px) rotateX(-10deg) rotateZ(0deg);\n}\n\n/* 接下来我准备一个简历编辑器。 */\n.resumeEditor{\n  position: fixed;\n  top: 50%;\n  padding: .5em;  margin: 2.5vh 2.5vw;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/*我开始在编辑器中写简历了。*/\n\n\n","\n/* \n * 整体转换一下简历格式\n */\n",'\n /* 再加点样式。 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"石东昊\n----\n\n男 | 24岁 |  广州\n求职意向：前端开发工程师\n\n手机：13974391326（微信同号）\n\n项目经历\n----\n\n* 素彩UI——一款基于 Vue3 / Vite / JavaScript 的 UI 框架。\n主要组件有开关选择器、各式按钮、弹出框、组件切换动效等，已发布至npm。\n* 赋能·Markdown——全原生JavaScript项目，可以使用Markdown语法，快速制作PPT。\n* 简·账——自行设计的极简记账应用，特点是快速记账，可以通过图表查看自己的消费习惯。\n* 可自定义的前端导航\n* 会动的皮卡丘\n* ……\n\n技能\n----\n\n1. 熟练掌握HTML、CSS、JavaScript基本功，能将设计稿完美还原。\n2. 熟练掌握 Vue全家桶的使用，包括 VueCli、Vite、VueRouter、Vuex 等。\n3. 熟悉 ES6和Vue3新特性。\n4. 掌握开发辅助工具如 SASS语法、 Git版本控制、 Vscode编程工具以及AI辅助编程等。\n5. 熟悉前后端分离技术。 \n\n教育经历\n----\n\n* 2017年9月~2021年7月：中央民族大学(985工程，双一流A) 本科 行政管理\n\n工作经历\n----\n\n* 2021年8月~2023年4月：中建三局绿色产业投资有限公司 网络党建岗\n\n\n链接\n----\n\n* [返回静态简历](https://k93846.github.io/jianli-static/src/index.html)\n\n> 感谢面试官在百忙之中能抽出时间来阅读我的简历，我若有幸收到现场面试邀约，一定盛情赴会。\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=a()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goBottom()}),e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=a()(s.a.mark(function e(){var r,u,a,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:u=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),a=u-r.length,this.currentStyle.length<u?(l=this.currentStyle.length-a,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):(t(),document.querySelector("#scroll-test").scrollTo(0,999));case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},48:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(89),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(90),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(45),o=t(43),i=t.n(o),s=t(44),u=t.n(s),a=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(a>500?i.a:u.a)}})},85:function(n,e){},86:function(n,e){},87:function(n,e){},88:function(n,e){},93:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{staticStyle:{"white-space":"pre-wrap","word-break":"break-word"},domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},94:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},95:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml},staticStyle:{"word-break":"break-word"},attrs:{id:"scroll-test"}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",{staticStyle:{"white-space":"pre-wrap","word-break":"break-word"}},[n._v(n._s(n.result))])])},staticRenderFns:[]}},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.bb632e60a9e946e15121.js.map