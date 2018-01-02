
import {  
    SWITCH_LOCALE, 
    SAVE_LOCALE,
    ADD_RESOURCE, 
    EDIT_RESOURCE,
    SELECT_RESOURCE,
    CLOSE_RESOURCE,
    LOAD_DOCUMENT, 
    LOAD_GENERATED_DOCUMENT, 
    LOAD_DOCUMENT_LIST,
    UPDATE_CONTENT
} from './mutation-constants'

export default {

  [ADD_RESOURCE] (state, path ) {
    state.currentDocument.resources[path] = 'new resource';
  }, 
  [EDIT_RESOURCE] (state, file ) {
    // set to editing resource 
    let doc = state.currentDocument;
    if ( !doc.editResources.includes(file) ) {
      doc.editResources.push(file);
    }
      
    
  },
  [SELECT_RESOURCE] (state, file ) {

    state.currentDocument.selectResource = file ;
  },  
  [CLOSE_RESOURCE] (state, file) {
    let doc = state.currentDocument;

    let index = -1; 
    if (doc.editResources.length) {
      index = doc.editResources.indexOf(file);
    } 

    if (index > -1) {
      doc.editResources.splice(index, 1);
      if (doc.editResources.length) {
        doc.selectResource = doc.editResources[0];
      }
    }

  },

  [UPDATE_CONTENT] (state, file, content) {
    state.currentDocument.resources[file] = content; 
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

