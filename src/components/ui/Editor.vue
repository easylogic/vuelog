<template>
    <textarea class="editor" :value="code" @input="updateContent"></textarea>
</template>

<script>

import MonacoEditor from 'vue-monaco'


export default {
    name: 'Editor',
    props : ['value'],
    data : function () {
        return {
            code : this.value
        }
    },
    methods : {
        updateContent : function (e) {
            this.$emit('change', e.target.value);
        },
        focus : function () {
            this.$el.focus();
        }
    }
}
</script>

<style lang="less" scoped>
.editor {
  width: 100%;
  height: 100%;

  padding: 10px;
  box-sizing: border-box;
}
</style>
