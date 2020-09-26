<template>
<div>
    <Button @click="open">open dialog</Button>
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
        const ok = () => {
            console.log('ok')
            return true
        }
        const cancel = () => {
            console.log('cancel')
        }
        const open = () => {
            console.log(1)
            showDialog({
                title: "标题",
                content: "<strong>111</strong>",
                ok,
                cancel,
                closeOnClickOverlay: true
            })
        }
        return {
            visible,
            open
        }
    }
}
</script>
