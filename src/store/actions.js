import Vue from 'vue'
import backend from './backend'
import { 
    SWITCH_LOCALE, 

    ADD_RESOURCE,
    EDIT_RESOURCE,
    SELECT_RESOURCE,
    CLOSE_RESOURCE,

    UPDATE_CONTENT,

    LOAD_DOCUMENT,
    LOAD_GENERATED_DOCUMENT,    
    LOAD_DOCUMENT_LIST
} from './mutation-constants'

export default {

  getCurrentLocale: function () {
    return backend.getCurrentLocale()
  },

  [SWITCH_LOCALE] ( { commit }, locale) {
    commit(SWITCH_LOCALE, locale);
  },  

  [ADD_RESOURCE] ( { commit }, path ) {
    commit(ADD_RESOURCE, path);
  }, 

  [EDIT_RESOURCE] ( { commit }, file ) {
    commit(SELECT_RESOURCE, file);    
    commit(EDIT_RESOURCE, file);
  },   
  [SELECT_RESOURCE] ( { commit }, file ) {
    commit(SELECT_RESOURCE, file);
  },     
  [CLOSE_RESOURCE] ( { commit }, file ) {
    commit(CLOSE_RESOURCE, file);
  }, 
  
  [UPDATE_CONTENT] ( { commit }, file, content ) {
    commit(UPDATE_CONTENT, file, content);
  },   

  [LOAD_DOCUMENT] ( { commit }, idOrPath ) {
    backend.fetchDocument(idOrPath, function (doc) {
        commit(LOAD_DOCUMENT, doc);
    })
  },

  [LOAD_GENERATED_DOCUMENT] ( { commit }, idOrPath ) {
    backend.fetchGeneratedDocument(idOrPath, function (html) {
        commit(LOAD_GENERATED_DOCUMENT, html);
    })
  },  

  [LOAD_DOCUMENT_LIST] ( { commit }, search) {
    backend.fetchDocumentList(search || {page : 1}, function (search, documents) {
        commit(LOAD_DOCUMENT_LIST, search, documents);
    })
  }  
}
