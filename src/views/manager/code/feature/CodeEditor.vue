<template>

    <div class="code-editor">

      <div class="tab">
        <div class="tab-item" v-bind:class="{selected : selectResource == item }" :data-src="item" @click.self="doSelectResource"  v-for="item in editResources">
          {{item | base_name}}
          <span class="close" title="close" @click="closeResource(item, $event)">&times;</span>
        </div>
      </div>
      <div class="tab-container">
        <div class="tab-content" v-bind:class="{selected : selectResource == item }" v-for="item in editResources">
          <editor :ref="`editor-${item}`" :data-src="item" :value="resources[item]" @change="updateContent" />
        </div>
      </div>
    </div>

</template>
<script>

import { mapState } from 'vuex'
import Editor from '../../../../components/ui/Editor.vue'

import { 
  SELECT_RESOURCE, 
  CLOSE_RESOURCE,
  UPDATE_CONTENT

} from '../../../../store/mutation-constants'

export default {
  name: 'CodeEditor',
  components : {
    editor : Editor
  },
  methods: {
    doSelectResource : function (e) {

      var file = e.target.getAttribute('data-src');

      this.$store.dispatch(SELECT_RESOURCE, file);

      this.$nextTick(()=> {
        this.$refs[`editor-${file}`][0].focus();
      })
    },
    updateContent : function (e) {

      console.log(arguments);

      //this.$store.dispatch(UPDATE_CONTENT, e.target.getAttribute('data-src'), e.target.value);
    },
    closeResource : function (file, event) {
      if (event) event.preventDefault();
      this.$store.dispatch(CLOSE_RESOURCE, file);
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
    left: 0px;
    top:0px;
    right:0px;
    bottom:0px;
    box-sizing: border-box;
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
        line-height: 1.5;

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

        .close {
          float: right;
          font-size:0.8rem;
          background-color: black;
          color: white;
          border-radius:50px;
          line-height: 1.1;
          font-weight: 100;
          padding:0px;
          width:12px;
          height: 12px;
          margin-top:5px;
          display:inline-block;
          box-sizing:border-box;
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
        display:none;

        &.selected {

          display:block;
        }

        textarea {
          width:100%;
          height:100%;
          box-sizing: border-box;
          border:0px;

          &:focus {
            outline: none;
          }
        }
      }


    }
}
</style>
