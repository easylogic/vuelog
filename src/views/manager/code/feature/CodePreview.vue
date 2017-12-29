<template>

    <div class="code-preview">
      
    </div>

</template>
<script>

export default {
  name: 'CodePreview',
  data () {
    return {

    }
  },
  computed () {
    return {
      resources : this.$store.state.currentDocument.resources
    }
  }
}
</script>

<style lang="less">
.code-preview {
    position: absolute;
    left: 940px;
    top:0px;
    right: 0px;
    bottom:0px;
    box-sizing: border-box;
    background-color: rgb(243, 243, 243);
}
</style>
