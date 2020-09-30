<demo>
修改大小
</demo>
<template>
<Switch v-model:value="bool1" /> <Switch v-model:value="bool2" size="small" />
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
        const bool1 = ref(false)
        const bool2 = ref(false)

        return {
            bool1,
            bool2,
        }
    }
}
</script>
