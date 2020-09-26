<demo>
设置点击遮罩层不关闭对话框
</demo>
<template>
<div>
    <Button @click="open" level="primary" :full='true'>open dialog</Button>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {
    showDialog
} from '../lib/dialog'
import {
    createApp,
    ref
} from 'vue'
export default {
    components: {
        Button
    },
    setup() {
        const ok = () => {
            console.log('ok')
            return true
        }
        const cancel = () => {
            console.log('cancel')
        }
        const open = () => {
            showDialog({
                title: "标题",
                content: "内容",
                ok,
                cancel,
                closeOnClickOverlay: false
            })
        }
        return {
            open
        }
    }
}
</script>
