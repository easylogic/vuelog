import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// component 
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

// page view
import Home from './views/Home.vue'
import Editor from './views/Editor.vue'
import Viewer from './views/Viewer.vue'
import GeneratedViewer from './views/GeneratedViewer.vue'


export default new Router({
  mode: 'history',
  routes: [
    { path: '/', components : {
        navbar: Navbar,
        main: Home,
        footer: Footer 
    } },
    { 
        path: '/make/:documentType?', components : {
            navbar: Navbar,
            main: Editor
        }

    },
    { 
        path: '/view/:id', 
        components : {
            navbar: Navbar,
            main: Viewer
        }, 
        alias : '/:id'

    },
    {
        path: '/edit/:id', components: {
            navbar: Navbar,
            main: Editor
        }
    },
    {
        path: '/gen/:id', components : {
            main : GeneratedViewer
        }
    }
  ]
})
