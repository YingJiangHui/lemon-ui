<template>
<div>
    <component :is="Demo" :component="Button1Demo" />
    <div class="box">
        <Button size="large">按钮</Button>
        <Button size="normal">按钮</Button>
        <Button size="small">按钮</Button>
    </div>
    <div class="box">
        <Button theme='text' size="large">按钮</Button>
        <Button theme='text' size="normal">按钮</Button>
        <Button theme='text' size="small">按钮</Button>
    </div>
    <div class="box">
        <Button theme='link' size="large">按钮</Button>
        <Button theme='link' size="normal">按钮</Button>
        <Button theme='link' size="small">按钮</Button>
    </div>

    <div class="box">
        <Button level='primary' full size="large">按钮</Button>
        <Button level='primary' size="normal">按钮</Button>
        <Button level='primary' size="small">按钮</Button>
    </div>
    <div class="box">
        <Button level='warning' size="large">按钮</Button>
        <Button level='warning' full size="normal">按钮</Button>
        <Button level='warning' size="small">按钮</Button>
    </div>
    <div class="box">
        <Button level='danger' size="large">按钮</Button>
        <Button level='danger' size="normal">按钮</Button>
        <Button level='danger' full size="small">按钮</Button>
    </div>
    <div class="box">
        <Button level='primary' :loading="true" size="large">按钮</Button>
        <Button level='warning' :loading="true" size="normal">按钮</Button>
        <Button level='danger' :loading="true" size="small">按钮</Button>
    </div>
    <div class="box">
        <Button level='primary' full :loading="true" size="large">按钮</Button>
        <Button level='warning' full :loading="true" size="normal">按钮</Button>
        <Button level='danger' full :loading="true" size="small">按钮</Button>
    </div>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import Button1Demo from './Button1.demo.vue'
import Demo from './Demo.vue'
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
