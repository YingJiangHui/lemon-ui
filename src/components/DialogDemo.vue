<template>
<component :is="DemoWrapper">
    <h2>Dialog示例</h2>
    <component :is="Demo" :component="Dialog1Demo"></component>
    <component :is="Demo" :component="Dialog2Demo"></component>
    <span>下一节：</span>
    <router-link to="/doc/tabs"><Button theme='link' size="large">Tabs 组件</Button></router-link>
</component>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
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
            Button,
            Dialog1Demo,
            Dialog2Demo,
            Demo,
            DemoWrapper
        }
    }
}
</script>
