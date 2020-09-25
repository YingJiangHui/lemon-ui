<template>
<div>
    <Button @click="open">open dialog</Button>
    <Dialog v-model:visible="visible" :yes="fn1" :no="fn2" :closeOnClickOverlay="true">
        <template v-slot:title>
            标题
        </template>
        <template v-slot:content>
            <p>一行内容</p>
            <p>两行内容</p>
        </template>
    </Dialog>
</div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {
    showDialog
} from '../lib/dialog'
import {
    ref
} from 'vue'
export default {
    components: {
        Dialog,
        Button
    },
    setup() {
        const visible = ref(false)
        const fn1 = () => {
            console.log('fn1')
            return true
        }
        const fn2 = () => {
            console.log('fn2')
        }
        const open = () => {
            showDialog({
                title: "标题",
                constent: "内容一",
                ok: fn1,
                cancel: fn2,
                closeOnClickOverlay: true
            })
        }
        return {
            visible,
            fn1,
            fn2,
            showDialog,
            open
        }
    }
}
</script>
