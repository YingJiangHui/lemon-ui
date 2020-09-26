<template>
<component :is="DemoWrapper">
    <component :is="Demo" :component="Dialog1Demo"></component>
    <component :is="Demo" :component="Dialog2Demo"></component>
</component>
</template>

<script lang="ts">
import Dialog1Demo from './Dialog1.demo.vue'
import Dialog2Demo from './Dialog2.demo.vue'
import DemoWrapper from './DemoWrapper.vue'
import Demo from './Demo.vue'
import {
    showDialog
} from '../lib/dialog'
import {
    ref
} from 'vue'
export default {
    setup() {
        return {
            Dialog1Demo,
            Dialog2Demo,
            Demo,
            DemoWrapper
        }
    }
}
</script>
