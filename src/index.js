import Vue from 'vue';

import store from './store'
import router from './router'
import App from './App.vue';

const app = new Vue({ 
    el: '#app',
    components: { App },
    router, 
    store, 
    render: h => h(App)
});
