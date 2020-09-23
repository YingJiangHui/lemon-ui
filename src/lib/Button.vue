<template>
<button class="gulu-button" :class="classes">
    <span class="gulu-text">
        <slot></slot>
    </span>
</button>
</template>

<script lang="ts">
import {
    computed
} from 'vue'
export default {
    inheritAttrs: false,
    props: {
        theme: {
            default: 'button',
            type: String,
        },
        size: {
            default: 'normal',
            type: String
        }
    },
    setup(props, context) {
        const classes = computed(() => {
            return {
                [`gulu-theme-${props.theme}`]: props.theme,
                [`gulu-theme-${props.size}`]: props.size
            }
        })
        return {
            classes
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
    padding: 4px 15px;
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
    font-size: 14px;

    &+& {
        margin-left: 8px;
    }

    &>.gulu-text {
        font-size: inherit;
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

    &.gulu-theme-large {
        font-size: 18px;
        padding: 6px 18px;
    }

    &.gulu-theme-small {
        font-size: 12px;
        padding: 2px 12px;
    }
}
</style>
