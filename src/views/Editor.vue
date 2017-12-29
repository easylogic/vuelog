<template>
  <section>

    <div class="container make-view">
        <code-manager v-if="documentType == 'code'" />
        <pr-manager v-if="documentType == 'pr'" />
    </div>

  </section>
</template>
<script>

import CodeManager from './manager/code'
import PrManager from './manager/pr'

import { LOAD_DOCUMENT } from '../store/mutation-constants'

export default {
  name: 'Manager',
  components : {
    'code-manager' : CodeManager,
    'pr-manager' : PrManager
  },
  data () {
    return {

    }
  },
  computed: {
    documentType () {

      if (this.$route.params.id) {
        // select current document 
        return this.$store.state.currentDocument.documentType || 'code';
      } else {
        return this.$route.params.documentType || 'code'
      }

    }
  },

  mounted: function () {

    const id = this.$route.params.id;

    this.$store.dispatch(LOAD_DOCUMENT, id);
  }
}
</script>

<style lang="less" scoped>

</style>
