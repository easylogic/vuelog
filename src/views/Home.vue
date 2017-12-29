<template>
  <section>

    <div class="container">
        <document-list />
    </div>

  </section>
</template>
<script>

import DocumentList from './DocumentList'
import { LOAD_DOCUMENT_LIST } from '../store/mutation-constants'

export default {
  name: 'Home',
  components : {
      'document-list' : DocumentList
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

  mounted: function () {
    this.$store.dispatch(LOAD_DOCUMENT_LIST);
  }
}
</script>

<style lang="less" scoped>

</style>
