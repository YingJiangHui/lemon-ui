<template>
<div>
    <Dialog>
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
export default {
    components: {
        Dialog
    }
}
</script>
