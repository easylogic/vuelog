<template>
  <section class="generated-viewer" v-html="generatedHtml"></section>
</template>
<script>

import { LOAD_GENERATED_DOCUMENT } from '../store/mutation-constants'

export default {
  name: 'GeneratedViewer',
  computed: {
    generatedHtml () {
      return this.$store.state.generatedHtml
    }
  },

  mounted : function () {

    const id = this.$route.params.id;

    this.$store.dispatch(LOAD_GENERATED_DOCUMENT, id);

    setInterval(function () {
      window.parent.resizeHeight(document.body.scrollHeight);
    }, 1000);
  }
}
</script>

<style lang="less">
  .generated-viewer {

  }


</style>
