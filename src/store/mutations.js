import Vue from 'vue'
import { INCREMENT, LOAD_MEETUP, SWITCH_LOCALE, SAVE_LOCALE, ADD_RESOURCE, LOAD_DOCUMENT, LOAD_DOCUMENT_LIST } from './mutation-constants'

export default {

  setLoading: function (state, bool) {
    state.isLoading = bool
  },
  setResource: function (state, value) {
    state.resource = value
  },
  [LOAD_MEETUP]: function (state, value) {
    state.meetupList = value || []
  },  
  [INCREMENT] (state) {
    state.count++;
  },
  [ADD_RESOURCE] (state, path ) {
    state.currentDocument.resources[path] = { content : '' }
  }, 
  [LOAD_DOCUMENT] ( state, doc) {
    state.currentDocument = doc; 
  },
  [LOAD_DOCUMENT_LIST] (state, obj) {
    state.documents = obj.documents;
    state.search = obj.search; 
  },
  [SWITCH_LOCALE] (state, locale) {
    window.localStorage && window.localStorage.setItem('damoa.locale', locale);
    state.locale = locale;     
  }  
}

