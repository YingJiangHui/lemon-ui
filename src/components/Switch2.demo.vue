<demo>
使用disabled
</demo>
<template>
<Switch v-model:value="bool" :disabled="disabled" />
<br />
<br />
<Button level='primary' :full="true" @click="toggleDisabled">Toggle disabled</Button>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import Button from '../lib/Button.vue'
import {
    ref
} from 'vue'
export default {
    name: 'SwitchDemo',
    components: {
        Switch,
        Button
    },
    setup() {
        const bool = ref(false)
        const disabled = ref(true)
        const toggleDisabled = () => {
            disabled.value = !disabled.value
        }
        return {
            toggleDisabled,
            bool,
            disabled
        }
    }
}
</script>
