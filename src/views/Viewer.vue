<template>
  <section>

    <div class="container">
      <h1 class="title" v-if="doc.title">{{ doc.title }}</h1>
      <p class="description" v-if="doc.description">{{ doc.description }}</p>      
      <div class="left">

        <document-viewer />
      </div>
      <div class="right">
        <div class="tools">
          <router-link tag="button" type="button" class="button block red" :to="`/edit/${doc.id}`">Edit</router-link>
          <button type="button" class="button block">FullScreen</button>          
        </div>
        <div class='qrcode'></div>
      </div>
      <div class="comments">

      </div>
    </div>


  </section>
</template>
<script>

import DocumentViewer from './DocumentViewer'
import { LOAD_DOCUMENT } from '../store/mutation-constants'

export default {
  name: 'Viewer',
  components : {
      'document-viewer' : DocumentViewer
  },
  data () {
    return {

    }
  },
  computed: {
    doc () {
      return this.$store.state.currentDocument
    }
  },

  methods : {
    edit : function () {
      
    }
  },

  mounted : function () {

    const id = this.$route.params.id;

    this.$store.dispatch(LOAD_DOCUMENT, id);
  }
}
</script>

<style lang="less" scoped>
  .container {
    overflow: auto;

    .left {
      float: left;
      width: 740px;
    }

    .right {
      float: right; 
      width: 200px;
      text-align:center;

      .button {
        margin-bottom: 5px;
        border:1px solid #ececec;
        border-radius: 5px; 
        outline: none;

        &.red {
          background-color: rgba(255, 0, 0, 0.5);
          color:white;
        }

        &.block {
          display: block;
          width: 100%;
          box-sizing: border-box;
          padding:10px;
        }

      }

      .qrcode {
        width: 190px;
        height: 200px;
        margin:0 auto;
        margin-top:20px;
        box-shadow: 0 0 2px 0px rgba(255, 0, 0, 0.5);
      }
      
    }
  }

  .comments {
    border-top:1px solid #ececec;
    clear: both;
    min-height: 300px;
    background-color: #ececec;
  }


</style>
