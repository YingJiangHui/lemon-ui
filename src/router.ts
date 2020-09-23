import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

import { createWebHashHistory, createRouter } from 'vue-router'

const hashHistory = createWebHashHistory()
export const router = createRouter({
    history:hashHistory,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc}
    ]
})