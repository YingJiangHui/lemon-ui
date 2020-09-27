<template>
<div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
        <h1>Lemon UI</h1>
        <h2>一个厉害的UI框架</h2>
        <p class="actions">
            <a href="https://github.com/">GitHub</a>
            <router-link to='/doc'>入门教程</router-link>
        </p>
    </div>
</div>

<div class="features">
    <ul>
        <li>
            <svg>
                <use xlink:href="#icon-vue"></use>
            </svg>
            <h3>基于 Vue 3</h3>
            <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
            <svg>
                <use xlink:href="#icon-ts"></use>
            </svg>
            <h3>基于 TypeScript </h3>
            <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
            <svg>
                <use xlink:href="#icon-light"></use>
            </svg>
            <h3>代码易读</h3>
            <p>每个组件的源代码都极其简洁</p>
        </li>
    </ul>
</div>
</template>

<script>
import Topnav from '../components/Topnav.vue'
export default {
    components: {
        Topnav
    }
}
</script>

<style lang="scss" scoped>
$button-color:#3cb54b;
$font-color:#f8d912;
$bg:#18332c;

.topnavAndBanner {
    background: $bg;
    // background: rgb(222, 252, 240);
    // background: linear-gradient(90deg, rgba(222, 252, 240, 1) 0%, rgba(191, 237, 234, 1) 100%);
    // clip-path: ellipse(80% 60% at 50% 40%);
}

.banner {
    padding: 150px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &>h1 {
        font-weight: bold;
        color: $font-color;
    }

    &>h2 {
        color: #fff;
    }

    >.actions {
        padding: 10px 0;
        font-size: 16px;

        a {
            font-size: inherit;
            $h: 36px;
            padding: 0 25px;
            line-height: $h;
            height: $h;
            color: $font-color;
            margin: 0 8px;
            display: inline-block;
        }

        a:first-child {
            color: $bg;
            background: $font-color;
        }
    }
}

.features {
    margin: 64px auto;
    width: 100%;

    @media (min-width: 800px) {
        width: 800px;
    }

    @media (min-width: 1200px) {
        width: 1200px;
    }

    >ul {
        display: flex;
        flex-wrap: wrap;

        >li {
            width: 400px;
            min-width: 320px;
            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;

            >svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }

            >h3 {
                grid-area: title;
                font-size: 28px;
            }

            >p {
                color: #6d6d6d;
                grid-area: text
            }
        }
    }
}
</style>
