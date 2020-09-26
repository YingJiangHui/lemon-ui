<template>
<button class="gulu-button" :disabled="disabled" :style="{borderRadius:radius+'px'}" :class=" classes" v-bind="$attrs">
    <span class="gulu-button-loading-icon" v-if="loading"></span>
    <span class="gulu-button-text">
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
        disabled: {
            default: false,
            type: Boolean
        },
        loading: {
            default: false,
            type: Boolean
        },
        level: {
            default: 'main',
            type: String,
        },

        theme: {
            default: 'button',
            type: String,
        },
        size: {
            default: 'normal',
            type: String
        },
        full: {
            default: false,
            type: Boolean
        }
    },
    setup(props, context) {
        const classes = computed(() => {
            return {
                [`gulu-button-theme-${props.theme}`]: props.theme,
                [`gulu-button-size-${props.size}`]: props.size,
                [`gulu-button-loading`]: props.loading,
                [`gulu-button-disabled`]: props.disabled,
                [`gulu-button-level-${props.level}`]: props.level,
                [`gulu-button-full`]: props.full,
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
$radius: 2px;
$primary:#1890ff;
$danger:#ff4d4f;
$warning:#f4bd00;

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);

    }
}

.gulu-button {
    box-sizing: border-box;

    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    border: 1px solid $border-color;
    color: $color;
    background: white;
    transition: box-shadow 500ms;
    border-radius: $radius;

    &+& {
        margin-left: 8px;
    }

    &>.gulu-button-text {
        font-size: inherit;
    }

    &:focus {
        outline: none;
    }

    &.gulu-button-size-normal {
        padding: 6px 14px;
        font-size: 14px;
    }

    &.gulu-button-size-large {
        padding: 6px 18px;
        font-size: 18px;
    }

    &.gulu-button-size-small {
        padding: 4px 12px;
        font-size: 12px;
    }

    &.gulu-button-theme-link,
    &.gulu-button-theme-text {
        & {
            border: none;
        }
    }

    &.gulu-button-theme-text {
        & {
            transition: background .25s;
        }

        &:focus,
        &:hover {
            background: #fafafa;
        }

        &:active {
            background: #f8f8f8;
        }
    }

    &.gulu-button-theme-link {
        transition: color .25s;
        color: $primary;
    }

    &.gulu-button-theme-link:active {
        color: fade-out($color: $primary, $amount: .5);
    }

    &>.gulu-button-loading-icon {
        margin-right: 0.3em;
        animation: rotate 1.2s linear infinite;
        display: inline-block;
        width: 14px;
        height: 14px;
        background: transparent;
        border-style: solid;
        border-color: transparent $primary $primary transparent;
        border-width: 2px;
        border-radius: 50%;
    }

    &.gulu-button-level-main {
        &.gulu-button-theme-button {

            & {
                background: #fff;
                box-shadow: 0 0 0 6px rgba($primary, 0);
            }

            &:active {
                transition: none;
                box-shadow: 0 0 0 0 rgba($primary, 0.5);
            }

            &:focus {
                color: fade-out($color: $primary, $amount: 0);
                border: 1px solid fade-out($color: $primary, $amount: 0.5);
            }
        }
    }

    $levels: ("primary": $primary, "danger": $danger, "warning": $warning);

    @each $name,
    $level in $levels {
        &.gulu-button-level-#{$name} {
            &>.gulu-button-loading-icon {
                border-color: transparent $level $level transparent;
            }

            &.gulu-button-theme-button {

                & {
                    color: fade-out($color: $level, $amount: .1);
                    background: #fff;
                    box-shadow: 0 0 0 6px rgba($level, 0);
                    border: 1px solid fade-out($color: $level, $amount: .1);
                }

                &:active {
                    color: $level;
                    transition: none;
                    box-shadow: 0 0 0 0 rgba($level, 0.5);
                }

                &.gulu-button-full {
                    background: fade-out($color: $level, $amount: .1);
                    color: #fff;
                }

                &.gulu-button-full:active {
                    background: $level;
                }
            }

        }
    }

    &.gulu-button-level-main,
    &.gulu-button-full {
        .gulu-button-loading-icon {
            border-color: transparent #fff #fff transparent;
        }
    }
}
</style>
