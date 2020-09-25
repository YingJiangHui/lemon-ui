import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import DocDemo from './components/DocDemo.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import Install from './views/Install.vue'
import Intro from './views/Intro.vue'
import getStarted from './views/GetStarted.vue'
const hashHistory = createWebHashHistory()
export const router = createRouter({
    history:hashHistory,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,children:[
            {path:'',component:DocDemo},
            {path:'intro',component:Intro},
            {path:'install',component:Install},
            {path:'get-started',component:getStarted},
            {path:'switch',component:SwitchDemo},
            {path:'button',component:ButtonDemo},
            {path:'dialog',component:DialogDemo},
            {path:'tabs',component:TabsDemo},
        ]}
    ]
})