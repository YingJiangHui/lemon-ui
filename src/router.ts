import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import install from './markdown/install.md'
import getStarted from './markdown/get-started.md'

import { h } from 'vue'
const md = (string)=>({content:string,key:string})

const hashHistory = createWebHashHistory()
export const router = createRouter({
    history:hashHistory,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,children:[
            {path:'',redirect:'/doc/intro'},
            {path:'intro',component:h(Markdown,md(intro))},
            {path:'install',component:h(Markdown,md(install))},
            {path:'get-started',component:h(Markdown,md(getStarted))},
            {path:'switch',component:SwitchDemo},
            {path:'button',component:ButtonDemo},
            {path:'dialog',component:DialogDemo},
            {path:'tabs',component:TabsDemo},
        ]}
    ]
})