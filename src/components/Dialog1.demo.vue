<demo>
常规用法
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
                cancel
            })
        }
        return {
            open
        }
    }
}
</script>
