<template>
<div>
    <Button @click="onClick" @focus="onClick" @mouseenter="onClick">按钮</Button>
    <Button>按钮2</Button>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components: {
        Button
    },
    setup() {
        const onClick = () => {
            console.log('hi')
        }
        return {
            onClick
        }
    }
}
</script>
