<template>
<router-view />
</template>

<script>
import {
    provide,
    ref
} from 'vue'
import {
    router
} from './router';
export default {
    name: 'App',
    setup() {
        const {
            clientWidth: width
        } = document.documentElement

        const menuVisible = ref(width > 500);
        const asideRef = ref(null);
        provide('menuVisible', menuVisible);
        provide('asideRef', asideRef)
        router.afterEach(() => {
            if (width <= 500) {
                menuVisible.value = false
            }
        })
    }
}
</script>
