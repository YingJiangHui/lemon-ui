import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import DocDemo from './components/DocDemo.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import Markdown from './components/Markdown.vue'
import { h } from 'vue'
const md = (filename)=>{
    return {path:`../markdown/${filename}.md`,key:filename}
}
const hashHistory = createWebHashHistory()
export const router = createRouter({
    history:hashHistory,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,children:[
            {path:'',component:DocDemo},
            {path:'intro',component:h(Markdown,md('intro'))},
            {path:'install',component:h(Markdown,md('install'))},
            {path:'get-started',component:h(Markdown,md('get-started'))},
            {path:'switch',component:SwitchDemo},
            {path:'button',component:ButtonDemo},
            {path:'dialog',component:DialogDemo},
            {path:'tabs',component:TabsDemo},
        ]}
    ]
})