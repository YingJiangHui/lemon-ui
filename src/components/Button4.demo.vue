<demo>
等级
</demo>
<template>
<Button level='primary'>按钮</Button>
<Button level='warning'>按钮</Button>
<Button level='danger'>按钮</Button>
<br />
<br />
<Button level='primary' :full="true">按钮</Button>
<Button level='warning' :full="true">按钮</Button>
<Button level='danger' :full="true">按钮</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components: {
        Button
    }
}
</script>
