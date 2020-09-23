<template>
<button v-bind="rest" class="gulu-button" :class="{[`gulu-theme-${theme}`]:theme}">
    <slot></slot>
</button>
</template>

<script lang="ts">
export default {
    inheritAttrs: false,
    props: {
        theme: {
            default: 'button',
            type: String,
        }
    },
    setup(props, context) {
        const {
            ...rest
        } = context.attrs
        return {
            rest
        }
    }
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #262626;
$blue: #40a9ff;
$radius: 4px;

.gulu-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);

    &+& {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        color: $blue;
        border-color: $blue;
    }

    &:focus {
        outline: none;
    }

    //兼容firefox浏览器
    &::-moz-focus-inner {
        border: 0;
    }

    &.gulu-theme-link {
        border-color: transparent;
        box-shadow: none;
        color: $blue;
        transition: color .25s;

        &:active {
            color: #096dd9;

        }

    }

    &.gulu-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;
        transition: background .25s;

        &:hover,
        &:focus {
            background: darken(white, 5%);
        }
    }
}
</style>
