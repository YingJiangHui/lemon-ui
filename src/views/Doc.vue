<template>
<div class="layout">
    <Topnav class="nav" :toggleMenuButtonVisible='true' />
    <div class="content">
        <transition name="fade">
            <aside v-if="menuVisible" ref='asideRef'>
                <h2>文档</h2>
                <ol>
                    <li>
                        <router-link tag="li" to="/doc/intro">介绍</router-link>
                    </li>
                    <li>
                        <router-link tag="li" to="/doc/install">安装</router-link>
                    </li>
                    <li>
                        <router-link tag="li" to="/doc/get-started">开始使用</router-link>
                    </li>
                </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                </ol>
            </aside>
        </transition>
        <main>
            <router-view />
        </main>
    </div>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue';
import Topnav from "../components/Topnav.vue";
export default {
    components: {
        Topnav
    },
    setup() {
        const asideRef = inject < Ref < HTMLDivElement >> ('asideRef')
        const menuVisible = inject < Ref < boolean >> ('menuVisible')
        return {
            menuVisible,
            asideRef
        }
    }
}
</script>

<style lang="scss" scoped>
$aside-padding:24px;
$bg:#3cb54b;

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease, top 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    top: -30px;
    opacity: 0;
}

.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    >.nav {
        flex-shrink: 0;
    }

    >.content {
        flex-grow: 1;
        padding-top: 60px;
        padding-left: 300px;

        @media (max-width: 500px) {
            padding-left: 0;
        }
    }
}

.content {
    display: flex;

    >aside {
        flex-shrink: 0;
    }

    >main {
        flex-grow: 1;
        padding: 16px;
    }
}

aside {
    z-index: 1;
    background: rgb(247, 247, 247);
    width: 300px;
    padding: 70px 24px 0 30px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    border-right: 1px solid #ececec;

    >.aside-inner {
        position: relative;
    }

    >h2 {
        font-size: 18px;
        padding: 5px 0;
    }

    >ol {
        >li {

            >a {
                font-size: 14px;
                padding: 3px 0;
                color: #6d6d6d;
                border: none;
                text-decoration: none;
                display: block;
            }

            a:hover {
                color: #1a1a1a;
            }

            >a.router-link-active {
                border-right: 4px solid $bg;
                color: #000;
            }
        }
    }
}

@media (max-width: 500px) {
    aside {
        width: 100%;
        padding-left: 24px;
        padding-right: 24px;

        >ol>li>a.router-link-active {
            color: $bg;
            border: none;
        }
    }
}

main {
    overflow: auto;
}
</style>
