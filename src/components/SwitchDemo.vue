<template>
<component :is="DemoWrapper">
    <h2>Switch示例</h2>
    <component :is="Demo" :component="Switch1Demo" />
    <component :is="Demo" :component="Switch2Demo" />
    <component :is="Demo" :component="Switch3Demo" />
</component>
</template>

<script lang="ts">
import DemoWrapper from './DemoWrapper.vue'
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Switch3Demo from './Switch3.demo.vue'
import Demo from './Demo.vue'
import {
    ref
} from 'vue'
export default {
    setup() {
        return {
            Demo,
            Switch1Demo,
            Switch2Demo,
            Switch3Demo,
            DemoWrapper
        }
    }
}
</script>
