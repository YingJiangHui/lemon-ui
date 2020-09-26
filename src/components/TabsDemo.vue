<template>
<component :is="DemoWrapper">
    <component :is="Demo" :component="Tabs1Demo" />
    <component :is="Demo" :component="Tabs2Demo" />
    <component :is="Demo" :component="Tabs3Demo" />
</component>
</template>

<script lang="ts">
import Tabs1Demo from './Tabs1Demo.vue'
import Tabs2Demo from './Tabs2Demo.vue'
import Tabs3Demo from './Tabs3Demo.vue'
import Demo from './Demo.vue'
import DemoWrapper from './DemoWrapper.vue'
export default {
    setup() {
        return {
            Tabs1Demo,
            Tabs2Demo,
            Tabs3Demo,
            Demo,
            DemoWrapper
        }
    }
}
</script>
