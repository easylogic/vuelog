<template>
  <section class='pr-manager'>
    <div>PR Manager</div>    
    {{ doc }}
  </section>
</template>
<script>


export default {
  name: 'PrManager',
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
.pr-manager {
  list-style-type: none;
  padding-left: 0px;
}
</style>
