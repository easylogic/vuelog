<template>
    <div class='document-viewer'>
      <iframe ref="generatedDocument" :src="url" scrolling="no"></iframe>
    </div>
</template>
<script>


export default {
  name: 'DocumentList',
  data () {
    return {

    }
  },
  computed: {
    url () {
      return '/gen/' + this.$route.params.id ;
    },
    doc () {
      return this.$store.state.currentDocument
    }
  },
  mounted: function () {
      const self = this; 
      window.resizeHeight = function (height) {
        self.$refs.generatedDocument.style.height = height + 'px';
      }
  }
}
</script>

<style lang="less">

.document-viewer  {

  iframe {
    width:100%;
    border:1px solid #ececec;
    min-height: 500px;
  }

}


</style>
