import Vue from 'vue'
import backend from './backend'
import { 
    INCREMENT, 
    LOAD_MEETUP, 
    SWITCH_LOCALE, 
    ADD_USER, 
    ALL_USER, 
    ADD_RESOURCE,
    LOAD_DOCUMENT,
    LOAD_GENERATED_DOCUMENT,    
    LOAD_DOCUMENT_LIST
} from './mutation-constants'

export default {

  getCurrentLocale: function () {
    return backend.getCurrentLocale()
  },

  [LOAD_MEETUP] ( { commit } ) {
    backend.fetchMeetupList(function (responseData) {
      commit(LOAD_MEETUP, responseData)
    })

  },
  [SWITCH_LOCALE] ( { commit }, locale) {
    commit(SWITCH_LOCALE, locale);
  },  

  [INCREMENT] ( { commit }) {
    commit(INCREMENT);
  },

  [ADD_USER] ( { commit }) {
    backend.addUser(function (responseData){
      console.log(responseData);
    });
  },

  [ALL_USER] ( { commit }) {
    backend.allUser(function (responseData){
      console.log(responseData);
    });
  } ,

  [ADD_RESOURCE] ( { commit }, path ) {
    commit(ADD_RESOURCE, path);
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
