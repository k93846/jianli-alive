<template>
  <div class="resumeEditor" :class="{ htmlMode: enableHtml }" ref="container" id="scroll-test"
    style="word-break:break-word;">
    <div v-if="enableHtml" v-html="result"></div>
    <pre v-else style="white-space:pre-wrap;word-break:break-word;">{{ result }}</pre>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  props: ['markdown', 'enableHtml'],
  name: 'ResumeEditor',
  computed: {
    result: function () {
      return this.enableHtml ? marked(this.markdown) : this.markdown
    }
  },
  methods: {
    goBottom: function () {
      this.$refs.container.scrollTop = 100000
    },
    goTop: function () {
      this.$refs.container.scrollTop = 0
    }
  },
  // updated(){
  //   document.querySelector('#scroll-test').scrollTo(0,999)
  // }
}

</script>

<style scoped>
@media (max-width:500px) {
  .resumeEditor {}
}

.htmlMode {
  animation: flip 2s;
}

@keyframes flip {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
