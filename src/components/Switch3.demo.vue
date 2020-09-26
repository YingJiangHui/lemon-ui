<demo>
修改大小
</demo>
<template>
<Switch v-model:value="bool" />
<Switch v-model:value="bool" size="small" />
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {
    ref
} from 'vue'
export default {
    name: 'SwitchDemo',
    components: {
        Switch
    },
    setup() {
        const bool = ref(false)
        return {
            bool,
        }
    }
}
</script>
