<template>
<Switch v-model:value="bool" :disabled="disabled" />
<Button level="primary" :full="true" @click="disabled=!disabled">Toggle disabled</Button>
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
        const disabled = ref(false)
        return {
            bool,
            disabled
        }
    }
}
</script>
