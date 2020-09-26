<template>
<component :is="DemoWrapper">
    <component :is="Demo" :component="Button1Demo" />
    <component :is="Demo" :component="Button2Demo" />
    <component :is="Demo" :component="Button3Demo" />
    <component :is="Demo" :component="Button4Demo" />
    <component :is="Demo" :component="Button5Demo" />
</component>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import Button1Demo from './Button1.demo.vue'
import Button2Demo from './Button2.demo.vue'
import Button3Demo from './Button3.demo.vue'
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
            Button2Demo,
            Button3Demo,
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
