<template>

    <div class="code-editor">

      <div class="tab">
        <div class="tab-item" v-bind:class="{selected : selectResource == item }" :data-src="item" @click="doSelectResource"  v-for="item in editResources">
          {{item | base_name}}
        </div>
      </div>
      <div class="tab-container">
        <div class="tab-content" v-bind:class="{selected : selectResource == item }" :data-src="item"  v-for="item in editResources">
          {{resources[item]}}
        </div>
      </div>
    </div>

</template>
<script>

import { mapState } from 'vuex'
import { SELECT_RESOURCE } from '../../../../store/mutation-constants'

export default {
  name: 'CodeEditor',
  methods: {
    doSelectResource : function (e) {

      var file = e.target.getAttribute('data-src');

      this.$store.dispatch(SELECT_RESOURCE, file);
    }
  },
  computed: mapState({
    selectResource : (state) => state.currentDocument.selectResource,
    editResources : (state) => state.currentDocument.editResources,
    resources : (state) => state.currentDocument.resources
  }),
  filters : {
    base_name : function (value) {
        return value.split('/').pop();
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
    border-right: 1px solid #dedede;
    background-color: white;

    .tab {
      position: absolute;
      left: 0px;
      right:0px;
      top:0px;
      height: 30px; 
      display: flex; 
      overflow: hidden; 
      .tab-item {
        flex:1;
        max-width: 100px;
        padding: 5px;
        box-sizing:border-box;
        height:100%;
        text-align:center;
        border-right:1px solid #ececec; 
        border-left:1px solid #ececec; 
        background-color: white;
        cursor: pointer;
        font-size: 0.9rem;

        &:first-child {
          border-left:0px;
        }
        &:not(first-child) {
          margin-left: -1px;
        }
        &.selected {
          background-color: #ececec;
          color: black; 

        }
      }
    }

    .tab-container {
      position: absolute;
      left: 0px;
      right:0px;
      bottom:0px;
      top:30px;
      background-color: #ffffff;
      border-top:1px solid #ececec; 
      box-sizing: border-box; 

      .tab-content {
        position: absolute;
        left: 0px;
        top: 0px;
        width:100%;
        height:100%;
        box-sizing: border-box;
        padding:10px;
        display:none;

        &.selected {

          display:block;
        }
      }


    }
}
</style>
