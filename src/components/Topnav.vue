<template>
<div class="topnav">
    <span class="toggleAside" v-if="toggleMenuButtonVisible" @click="toggleMenu" ref="iconWrapper">
        <Icon name="gengduo" />
    </span>
    <div class="logo">
        <router-link to="/">
            <Icon name="lemon" />
        </router-link>
    </div>
    <ul class="menu">
        <li>
            <router-link to="/doc/switch">文档</router-link>
        </li>
    </ul>
</div>
</template>

<script lang="ts">
import Icon from '../lib/Icon.vue'
import {
    inject,
    Ref,
    watchEffect,
    watch,
    onMounted,
    onUpdated,
    ref
} from 'vue'
export default {
    components: {
        Icon
    },
    props: {
        toggleMenuButtonVisible: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const menuVisible = inject < Ref < boolean >> ('menuVisible')
        const iconWrapper = ref < HTMLSpanElement > (null)
        const asideRef = inject < Ref < HTMLDivElement >> ('asideRef')

        function toggleMenu() {
            menuVisible.value = !menuVisible.value
        }
        watch(menuVisible, (count, prevCount) => {
            if (count) {
                document.addEventListener('click', onDocumentClick)
            } else {
                document.removeEventListener('click', onDocumentClick)
            }
        })

        const onDocumentClick = (e) => {
            if (iconWrapper.value.contains(e.target) || e.target === asideRef.value) return
            close()
        }

        const close = () => {
            menuVisible.value = false
        }
        return {
            toggleMenu,
            iconWrapper
        }
    }

}
</script>

<style lang="scss" scoped>
$bg:#122520;

.topnav {
    z-index: 10;
    display: flex;
    padding: 16px;
    align-items: center;
    position: fixed;
    background: $bg;
    top: 0;
    left: 0;
    width: 100%;
    $font-color: #f8d912;

    >.logo {
        max-width: 6em;
        margin-right: auto;
    }

    .gulu-icon {
        width: 26px;
        height: 26px;
    }

    >.menu {
        color: $font-color;
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }

    >.toggleAside {
        cursor: pointer;
        display: none;
        margin-right: -26px;

        &>.gulu-icon {
            width: 26px;
            height: 26px;
            fill: $font-color;
        }
    }

    @media (max-width:500px) {

        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }

        >.toggleAside {

            display: block;
        }
    }
}
</style>
