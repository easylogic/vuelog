<template>

    <div class="code-editor">
      
    </div>

</template>
<script>

export default {
  name: 'CodeEditor',
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
.code-editor {
    position: absolute;
    left: 240px;
    top:0px;
    width: 700px;
    bottom:0px;
    box-sizing: border-box;
    background-color: rgb(243, 243, 243);
    border-right: 1px solid #dedede;
}
</style>
