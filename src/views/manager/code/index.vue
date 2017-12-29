<template>
  <section class='code-manager'>
    <code-toolbar />
    <code-layout />
  </section>
</template>
<script>

import CodeToolbar from './Toolbar'
import CodeLayout from './Layout'

export default {
  name: 'CodeManager',
  components : {
    'code-toolbar' : CodeToolbar,
    'code-layout' : CodeLayout
  },
  data () {
    return {

    }
  },
  computed: {
    doc () {
      return this.$store.state.currentDocument
    }
  }
}
</script>

<style lang="less">
.code-manager {
  position: absolute;
  top:40px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #ececec;
  list-style-type: none;
  padding-left: 0px;

}
</style>
