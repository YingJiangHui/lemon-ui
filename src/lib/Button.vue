<template>
<button class="gulu-button" :disabled="disabled" :class="classes">
    <span class="gulu-loading-icon" v-if="loading"></span>
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
                [`gulu-theme-${props.theme}`]: props.theme,
                [`gulu-size-${props.size}`]: props.size,
                [`gulu-loading`]: props.loading,
                [`gulu-disabled`]: props.disabled,
                [`gulu-level-${props.level}`]: props.level,
                [`gulu-full`]: props.full,
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
    & {
        box-sizing: border-box;

        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        border: 1px solid $border-color;
        border-radius: $radius;
        // box-shadow: 0 1px 0 fade-out(black, 0.95);
        color: $color;
        background: white;
        transition: box-shadow 500ms;

    }

    &+& {
        margin-left: 8px;
    }

    &>.gulu-text {
        font-size: inherit;
    }

    &:focus {
        outline: none;
    }

    &.gulu-size-normal {
        padding: 4px 14px;
        font-size: 14px;
    }

    &.gulu-size-large {
        padding: 6px 18px;
        font-size: 18px;
    }

    &.gulu-size-small {
        padding: 3px 12px;
        font-size: 12px;
    }

    &.gulu-theme-link,
    &.gulu-theme-text {
        & {
            border: none;
        }
    }

    &.gulu-theme-text {
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

    &.gulu-theme-link {
        & {
            transition: color .25s;
            color: $primary;
        }

        &:active {
            color: fade-out($color: $primary, $amount: 0.2);
        }
    }

    &>.gulu-loading-icon {
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

    &.gulu-level-main {
        &.gulu-theme-button {

            & {
                background: #fff;
                box-shadow: 0 0 0 6px rgba($primary, 0);

            }

            &:active {
                transition: none;
                box-shadow: 0 0 0 0 rgba($primary, 0.5);
            }

            &:focus,
            &:hover {
                color: fade-out($color: $primary, $amount: 0);
                border: 1px solid fade-out($color: $primary, $amount: 0.5);
            }

            &.gulu-full {
                background: $primary;
                color: #fff;
            }
        }
    }

    &.gulu-level-primary {
        &>.gulu-loading-icon {
            border-color: transparent $primary $primary transparent;
        }

        &.gulu-theme-button {

            & {
                color: $primary;
                background: #fff;
                box-shadow: 0 0 0 6px rgba($primary, 0);
                border: 1px solid fade-out($color: $primary, $amount: 0.5);
            }

            &:active {
                transition: none;
                box-shadow: 0 0 0 0 rgba($primary, 0.5);
            }

            &:focus,
            &:hover {
                color: fade-out($color: $primary, $amount: 0);
            }

            &.gulu-full {
                background: $primary;
                color: #fff;
            }
        }

    }

    &.gulu-level-danger {
        &>.gulu-loading-icon {
            border-color: transparent $danger $danger transparent;
        }

        &.gulu-theme-button {

            & {
                color: $danger;
                background: #fff;
                box-shadow: 0 0 0 6px rgba($danger, 0);
                border: 1px solid fade-out($color: $danger, $amount: 0.5);

            }

            &:active {
                transition: none;
                box-shadow: 0 0 0 0 rgba($danger, 0.5);
            }

            &:focus,
            &:hover {
                color: fade-out($color: $danger, $amount: 0);
            }

            &.gulu-full {
                background: $danger;
                color: #fff;
            }
        }
    }

    &.gulu-level-warning {
        &>.gulu-loading-icon {
            border-color: transparent $warning $warning transparent;
        }

        &.gulu-theme-button {

            & {
                color: $warning;
                background: #fff;
                box-shadow: 0 0 0 6px rgba($warning, 0);
                border: 1px solid fade-out($color: $warning, $amount: 0.5);

            }

            &:active {
                transition: none;
                box-shadow: 0 0 0 0 rgba($warning, 0.5);
            }

            &:focus,
            &:hover {
                color: fade-out($color: $warning, $amount: 0);
            }

            &.gulu-full {
                background: $warning;
                color: #fff;
            }
        }
    }

    &.gulu-level-main,
    &.gulu-full {
        .gulu-loading-icon {
            border-color: transparent #fff #fff transparent;
        }
    }
}
</style>
