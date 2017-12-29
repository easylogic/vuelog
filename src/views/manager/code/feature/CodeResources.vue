<template>

    <div class="code-resources">
      <div class="code-resource-item" v-for="item, key in resources">
        {{key}}
      </div>
      <div class='code-resource-item' v-if="path">
        <input type="text" class="add-resource-name-input" v-model="path" @keyup.enter="keyup" />
      </div>
      <button type="button" class="add-resource-btn" @click="addResource">+ Add Resource</button>
      <div class="code-external-resource-item" v-for="item in externalResources">
        {{item}}
      </div>
    </div>

</template>
<script>

import { ADD_RESOURCE } from '../../../../store/mutation-constants' 

export default {
  name: 'CodeResources',
  data () {
    return {
      path : ''
    }
  },
  methods: {
    addResource: function (e) {
      this.path = 'temp.txt'
    },
    keyup: function (e) {
      if (this.path) {        
        this.$store.dispatch(ADD_RESOURCE, this.path);
        this.path = '';     

      }
    }
  },
  computed: {
    resources : function () { 
      return this.$store.state.currentDocument.resources
    },
    externalResources : function () {
      return this.$store.state.currentDocument.externalResources
    }
  }
}
</script>

<style lang="less">
.code-resources {
    position: absolute;
    left: 0px;
    top:0px;
    width: 240px;
    bottom:0px;
    background-color: rgba(0, 0, 0, 0.3);

    .code-resource-item {
      color: white;
      padding:5px;
      border-bottom: 1px solid #ececec;
    }

    .code-external-resource-item {
      color: rgba(255, 255, 255, 0.8);
      padding: 5px;
      text-decoration: underline;
    }
}
</style>
