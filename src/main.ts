import { createApp } from 'vue'
import App from './App.vue'
import Ying from './components/Ying.vue'
import Ying2 from './components/Ying2.vue'

import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'

const hashHistory = createWebHashHistory()
const router = createRouter({
    history:hashHistory,
    routes:[
        {path:'/',component:Ying},
        {path:'/ying',component:Ying2}
    ]
    
})
const app = createApp(App)
app.use(router)
app.mount('#app')