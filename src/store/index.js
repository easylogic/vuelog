import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'


import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({

  plugins: [createLogger()],
  strict: process.env.NODE_ENV !== 'production',
  mutations,
  actions,
  getters,
  state: {
    documents : [
        { title : '샘플 1', description : '', id : '1', path : '', like : '', thumbnail : '', usid : '' },
        { title : '샘플 2', description : '', id : '2', path : '', like : '', thumbnail : '', usid : '' },
        { title : '샘플 3', description : '', id : '3', path : '', like : '', thumbnail : '', usid : '' },
        { title : '샘플 4', description : '', id : '4', path : '', like : '', thumbnail : '', usid : '' },
        { title : '샘플 5', description : '', id : '5', path : '', like : '', thumbnail : '', usid : '' },
        { title : '샘플 6', description : '', id : '6', path : '', like : '', thumbnail : '', usid : '' },
    ],
    currentDocument: {
        id: '',
        type : 'code',
        timestamp : Date.now(), 
        Title: "blabla",
        Url : "custom path or auto created path",
        description : "", 
        Access : 'public',
        externalResources : [
            'Https://ssss.sss.sss' , 
            'Local resource name',  
        ],
        resources  : {
            settings : {
                type : 'object', 
                Content :  { 
                    a : 'b', 
                    c : 'd' , 
                    e : 'f' 
                }
            },
            style : {
                content : "", 
                Type : 'less'
            },
            note :  {
                content : '', 
                type : 'markdown'
            }

        }
        
    }
  }
})
