import Dialog from './Dialog.vue'
import {createApp, h} from 'vue'
export const showDialog = (options)=>{
    console.log(options)
    const {ok,cancel,content,title,closeOnClickOverlay} = options
    const div = document.createElement('div')
    document.body.appendChild(div)
    const close = ()=>{
        dialogApp.unmount(div),
        div.remove()
    }
    const dialogApp = createApp({
        render(){
           return h(Dialog,{visible:true,'onUpdate:visible':(newVisible)=>{
               if(!newVisible)
                close()
           },ok,cancel,closeOnClickOverlay},{title,content})
        }
    })
    dialogApp.mount(div)
}