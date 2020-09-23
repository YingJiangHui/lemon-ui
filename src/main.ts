import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

import { createWebHashHistory, createRouter } from 'vue-router'

const hashHistory = createWebHashHistory()
const router = createRouter({
    history:hashHistory,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc}
    ]
    
})
const app = createApp(App)
app.use(router)
app.mount('#app')