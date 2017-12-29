
import { 
    INCREMENT, 
    LOAD_MEETUP, 
    SWITCH_LOCALE, 
    SAVE_LOCALE,
    ADD_RESOURCE, 
    LOAD_DOCUMENT, 
    LOAD_GENERATED_DOCUMENT, 
    LOAD_DOCUMENT_LIST
} from './mutation-constants'

export default {

  [ADD_RESOURCE] (state, path ) {
    state.currentDocument.resources[path] = { content : '' }
  }, 
  [LOAD_DOCUMENT] ( state, doc) {
    state.currentDocument = doc; 
  },
  [LOAD_GENERATED_DOCUMENT] ( state, html ) {
    state.generatedHtml = html; 
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

