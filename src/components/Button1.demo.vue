<demo>
常规用法
</demo>
<template>
<div class="box">
    <Button size="large">大大</Button>
    <Button size="normal">中中</Button>
    <Button size="small">小小</Button>
</div>
<div class="box">
    <Button theme='text' size="large">大大</Button>
    <Button theme='text' size="normal">中中</Button>
    <Button theme='text' size="small">小小</Button>
</div>
<div class="box">
    <Button theme='link' size="large">大大</Button>
    <Button theme='link' size="normal">中中</Button>
    <Button theme='link' size="small">小小</Button>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components: {
        Button
    }
}
</script>
