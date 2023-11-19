<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        interval: 0,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
* 面试官您好，我是石东昊。
* 能在上百上千份简历中受到您的关注，不胜荣幸！
* 我通过这个页面展示一些我的简历制作过程和前端基本功。
* 如果觉得我符合岗位要求，期待接到您的现场面试邀约。
*/

/* 首先，为了让动态效果过渡平滑，需要添加一些默认设置。 */
* {
  transition: all .3s;
}
/* 白色背景有些单调，我换一个颜色。 */
html {
  color: rgb(222,222,222); background: rgb(0,43,54);
}
/* 给文字和边框设置一点间距。 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: 30px;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 给代码添加颜色。 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果。 */
.styleEditor::-webkit-scrollbar {
  display: none;
}
.styleEditor {
  position: fixed; 
  transform: perspective(1000px) rotateY(13deg) rotateZ(-2deg);
}

/* 接下来我准备一个简历编辑器。 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  
  margin: 30px;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/*我开始在编辑器中写简历了。*/
`,
          `
/* 
 * 整体转换一下简历格式。
 */
`
          ,
          `
/* 再加点样式。 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`],
        currentMarkdown: '',
        fullMarkdown: `石东昊
----

男 | 24岁 |  广州
求职意向：前端开发工程师

手机：13974391326（微信同号）

项目经历
----

* 素彩UI——一款基于 Vue3 / Vite / JavaScript 的 UI 框架。
主要组件有开关选择器、各式按钮、弹出框、组件切换动效等，已发布至npm。【[预览](https://k93846.github.io/Sucai-ui-web/index.html#/)】
* 赋能·Markdown——全原生JavaScript项目，可以使用Markdown语法，快速制作PPT。【[预览](https://k93846.github.io/pf-markdown/)】
* 简·账——自行设计的极简记账应用，特点是快速记账，可以通过图表查看自己的消费习惯。【[预览](https://k93846.github.io/money-web/)】
* 可自定义的前端导航【[预览](https://k93846.github.io/nav-1/dist/index.html)】
* 会动的皮卡丘【[预览](https://k93846.github.io/pikachu-1/src/test.html)】
* ……

技能
----

1. 熟练掌握HTML、CSS、JavaScript基本功，能将设计稿完美还原。
2. 熟练掌握 Vue全家桶的使用，包括 VueCli、Vite、VueRouter、Vuex 等。
3. 熟悉 ES6和Vue3新特性。
4. 掌握开发辅助工具如 SASS语法、 Git版本控制、 Vscode编程工具以及AI辅助编程等。
5. 熟悉前后端分离技术。 

教育经历
----

* 2017年9月~2021年7月：中央民族大学(985工程，双一流A) 本科 行政管理

工作经历
----

* 2021年8月~2023年4月：中建三局绿色产业投资有限公司 网络党建岗


链接
----

* [我的飞书](https://iazbxhecrn6.feishu.cn/drive/folder/J05rfoHJhlI9n3dH0v8cEZJFneu)
* [返回静态简历](https://k93846.github.io/jianli-static/src/index.html)

> 感谢面试官在百忙之中能抽出时间来阅读我的简历，我若有幸收到现场面试邀约，一定盛情赴会。

`
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }

              setTimeout(showStyle, interval)

              //滚轮滚到底部

            } else {
              resolve()
              document.querySelector('#scroll-test').scrollTo(0,999)

            }

          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.interval
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
              
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    min-height: 100vh;
  }
  *{
    box-sizing: border-box;
  }
</style>
