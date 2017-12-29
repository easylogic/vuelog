<template>
  <div class="container">
    <ul class='document-viewer'>
      {{ doc }}

    </ul>
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
    doc () {
      return this.$store.state.currentDocument
    }
  }
}
</script>

<style lang="less">
.container {
  margin: 0 auto; 
  max-width: 960px;
}

.document-list {
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 0 0 rgba(0,0,0,0.1);

  .document-item {
    width: 300px;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    box-sizing:border-box;
    margin: 10px;
    padding: 30px;
  }
}


</style>
