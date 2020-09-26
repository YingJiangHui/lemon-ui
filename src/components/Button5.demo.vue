<demo>
加载中
</demo>
<template>
<Button level='primary' :loading="true">按钮</Button>
<Button level='warning' :loading="true">按钮</Button>
<Button level='danger' :loading="true">按钮</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components: {
        Button
    }
}
</script>
