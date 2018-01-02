<template>

    <div class="code-layout">
      <split-panel :initSplit="20">

        <code-resources slot="left" />

        <split-panel :initSplit="50" slot="right">
          <code-editor slot="left" />
          <code-preview slot="right" />
        </split-panel>

      </split-panel>
    </div>

</template>
<script>

import CodeResources from './feature/CodeResources.vue'
import CodeEditor from './feature/CodeEditor.vue'
import CodePreview from './feature/CodePreview.vue'

import SplitPanel from '../../../components/ui/SplitPanel.vue'

export default {
  name: 'CodeLayout',
  components : {
      'split-panel' : SplitPanel,
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
    top: 50px;

    .splitter {
      position: absolute;
      left: 0px; 
      top: 0px; 
      bottom: 0px;
      width: 10px;
      background-color: rgba(0, 0, 0, 0.5);
    }
}
</style>
