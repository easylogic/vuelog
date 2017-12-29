<template>
    <footer class="footer">
    <div class="container">
        <div class="content has-text-centered">
            <p>
                blabla {{ version }}
            </p>
        </div>
    </div>
    </footer>
</template>
<script>

export default {
  name: 'Footer',
  data () {
    return {
      version: this.$store.state.version
    }
  }
}
</script>

<style lang="less">
</style>
