<template>

    <div class="code-layout">
      <code-resources />
      <code-editor />
      <code-preview  />
    </div>

</template>
<script>

import CodeResources from './feature/CodeResources.vue'
import CodeEditor from './feature/CodeEditor.vue'
import CodePreview from './feature/CodePreview.vue'

export default {
  name: 'CodeLayout',
  components : {
      'code-resources' : CodeResources,
      'code-editor' : CodeEditor,
      'code-preview' : CodePreview
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
.code-layout {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom:0px;
    top: 40px;
}
</style>
