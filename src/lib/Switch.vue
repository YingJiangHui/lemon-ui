<template>
    <button @click="toggle" :class="{checked}"><span></span></button>
</template>

<script lang='ts'>
    import {ref} from 'vue'
    export default {
      setup(){
        const checked = ref(false)
        const toggle= ()=>{
          checked.value = !checked.value
        }
        return {
          toggle,checked
        }
      }
    }
</script>

<style lang="scss" scoped>
    $h: 22px;
    $h2: $h - 4px;
    button{
        outline: none;
        height: $h;
        width: $h*2;
        border: none;
        background: grey;
        border-radius: $h/2;
        position: relative;
        left: 0;
    }
    .checked{
        background: dodgerblue;
    }
    .checked>span{
        left: calc(100% - #{$h2} - 2px);
    }
    span{
        transition: left .25s;
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background:white;
        border-radius: $h2 / 2;
    }
</style>