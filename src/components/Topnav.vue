<template>
<div class="topnav">
    <span class="toggleAside" v-if="toggleMenuButtonVisible" @click="toggleMenu">
        <svg class="icon">
            <use xlink:href="#icon-gengduo"></use>
        </svg>
    </span>
    <div class="logo">
        <router-link to="/">
            <svg class="icon">
                <use xlink:href="#icon-lemon"></use>
            </svg>
        </router-link>
    </div>
    <ul class="menu">
        <li>
            <router-link to="/doc">文档</router-link>
        </li>
    </ul>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue'
export default {
    props: {
        toggleMenuButtonVisible: {
            type: Boolean,
            default: false
        }
    },
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
    display: flex;
    padding: 16px;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    >.logo {
        max-width: 6em;
        margin-right: auto;

    }

    .icon {
        width: 24px;
        height: 24px;
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
        display: none;
    }

    @media (max-width:500px) {
        >.menu {
            display: none;
        }

        >.logo {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%)
        }

        >.toggleAside {
            display: block;
        }
    }
}
</style>
