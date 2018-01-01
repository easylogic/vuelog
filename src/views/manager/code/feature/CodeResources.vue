<template>

    <div class="code-resources">
      <div class="input">
        <label>Title</label>
        <div class='form'>
          <input type="text" placeholder="Input a title" v-model="doc.title" >
        </div>
      </div>
      <div class="input description">
        <label>Description</label>
        <div class='form'>
          <textarea v-model="doc.description"></textarea>
        </div>
      </div>
      <div class="input">
        <label>Resources</label>
        <div class="code-resource-item" v-for="item, key in doc.resources">
          <div v-bind:class="{ resource : true,  selected: selectResource == key }" @click="editResource" :data-src="key">{{key}}</div>
        </div>
        <div class='code-resource-item' v-if="path">
          <input type="text" class="add-resource-name-input" v-model="path" @keyup.enter="keyup" ref="name_input" />
        </div>        
        <button type="button" class="add-resource-btn" @click="addResource">+ Add Resource</button>
      </div>

      <div class="input">
        <div class="code-resource-item" v-for="item in doc.externalResources">
          {{item}}
        </div>
      </div>
    </div>

</template>
<script>

import { 
  ADD_RESOURCE,
  EDIT_RESOURCE,
  SELECT_RESOURCE

} from '../../../../store/mutation-constants' 

import { mapState } from 'vuex'


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
      this.$nextTick(() => {
        this.$refs.name_input.focus();
      })
    },
    editResource: function (e) {
      var file = e.target.getAttribute('data-src');

      this.$store.dispatch(EDIT_RESOURCE, file);      
    },
    keyup: function (e) {
      if (this.path) {        
        this.$store.dispatch(ADD_RESOURCE, this.path);
        this.path = '';     

      }
    }
  },
  computed: mapState({
    selectResource : (state) => state.currentDocument.selectResource,
    doc : state => {
      return state.currentDocument;
    }
  })
}
</script>

<style lang="less">
.code-resources {
    position: absolute;
    left: 0px;
    top:0px;
    width: 240px;
    bottom:0px;
    box-sizing: border-box;
    background-color: white; 
    border-right:1px solid #ececec;
    overflow:auto;

    .code-resource-item {
      font-size: 0.9rem;
      cursor: pointer;

      .resource {
        padding: 5px;
        &.selected {
          background-color: #ececec;
        }
      }
      
      input {
        padding: 5px 10px !important;
      }
    }

    .input {
      padding: 5px 5px;

      label {
        color: gray;
        font-size: 0.7rem;
        display:block;
      }

      .form {
        width: 100%;

      }
      input, textarea, .add-resource-btn {
        width: 100%;
        display:inline-block;
        box-sizing:border-box;
        padding:10px;
        border:1px solid #ececec;
      }

      .add-resource-btn {
        padding: 5px 10px;
        margin-top:10px;
      }
    }
}
</style>
