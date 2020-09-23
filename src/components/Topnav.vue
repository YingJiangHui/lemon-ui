<template>
<div class="topnav">
    <span class="toggleAside" @click="toggleMenu"></span>
    <div class="logo">
        <router-link to="/">LOGO</router-link>
    </div>
    <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
    </ul>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue'
export default {
    setup() {
        const menuVisible = inject < Ref < boolean >> ('menuVisible')

        function toggleMenu() {
            menuVisible.value = !menuVisible.value
        }
        return {
            toggleMenu
        }
    }
}
</script>

<style lang="scss" scoped>
.topnav {
    z-index: 10;
    background: pink;
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    >.logo {
        max-width: 6em;
        margin-right: auto;
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }

    >.toggleAside {
        width: 30px;
        height: 30px;
        background: black;
        display: none;
    }

    @media (max-width:500px) {
        >.menu {
            display: none;
        }

        >.logo {
            margin-right: auto;
            margin-left: auto;
        }

        >.toggleAside {
            display: block;
        }
    }
}
</style>
