<template>
<component :is="DemoWrapper">
    <h2>Button示例</h2>
    <component :is="Demo" :component="Button1Demo" />
    <component :is="Demo" :component="Button4Demo" />
    <component :is="Demo" :component="Button5Demo" />
    <span>下一节：</span>
    <router-link to="/doc/dialog"><Button theme='link' size="large">Dialog 组件</Button></router-link>
</component>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import Button1Demo from './Button1.demo.vue'
import Button4Demo from './Button4.demo.vue'
import Button5Demo from './Button5.demo.vue'
import Demo from './Demo.vue'
import DemoWrapper from './DemoWrapper.vue'
export default {
    components: {
        Button
    },
    setup() {
        const onClick = () => {
            console.log('hi')
        }
        return {
            onClick,
            Button1Demo,
            Button4Demo,
            Button5Demo,
            DemoWrapper,
            Demo
        }
    }
}
</script>

<style lang="scss">
.box {
    &+& {
        margin-top: 10px
    }
}
</style>
