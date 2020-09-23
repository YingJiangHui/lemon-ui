<template>
<router-view />
</template>

<script>
import {
    provide,
    ref
} from 'vue'
export default {
    name: 'App',
    setup() {
        const {
            clientWidth: width
        } = document.documentElement

        const menuVisible = ref(width > 500);
        provide('menuVisible', menuVisible);
    }
}
</script>
