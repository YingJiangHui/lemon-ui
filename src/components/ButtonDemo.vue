<template>
<div>
    <Button size="large">按钮2</Button>
    <Button>按钮2</Button>
    <Button theme='text' size="small">按钮</Button>
    <Button theme='link' size="large">按钮2</Button>
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
