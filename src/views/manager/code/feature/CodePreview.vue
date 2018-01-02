<template>

    <div class="code-preview">
      <div class="toolbar">
        <label>Preview</label>
      </div>
      <div class="preview-content">
        <iframe src="about:blank"></iframe>
      </div>
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
    left: 0px;
    top:0px;
    right: 0px;
    bottom:0px;
    box-sizing: border-box;
    background-color: rgb(243, 243, 243);

    .toolbar {
      position: absolute;
      left: 0px;
      right:0px;
      top:0px;
      height: 30px; 
      display: flex; 
      overflow: hidden;

      label {
        padding:8px 5px;
      }
    }

    .preview-content {
      position: absolute;
      left: 0px;
      right:0px;
      bottom:0px;
      top:30px;
      background-color: #ffffff;
      border-top:1px solid #ececec; 
      box-sizing: border-box; 

      iframe {
        border:0px;
        width:100%;
        height: 100%;
        box-sizing:border-box;
      }
    }
}
</style>
