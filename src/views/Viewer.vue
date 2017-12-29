<template>
  <section>

    <div class="container">
        <document-viewer />
    </div>

  </section>
</template>
<script>

import DocumentViewer from './DocumentViewer'
import { LOAD_DOCUMENT } from '../store/mutation-constants'

export default {
  name: 'Viewer',
  components : {
      'document-viewer' : DocumentViewer
  },
  data () {
    return {

    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },

  activated: function () {
    console.log(arguments, this);
  },

  mounted : function () {

    const id = this.$route.params.id;

    this.$store.dispatch(LOAD_DOCUMENT, id);
  }
}
</script>

<style lang="less" scoped>

</style>
