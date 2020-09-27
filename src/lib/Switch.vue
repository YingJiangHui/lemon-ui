<template>
<button class="gulu-button" @click="toggle" :class="classes"><span class="gulu-ball"></span></button>
</template>

<script lang="ts">
import {
    computed
} from 'vue'
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'normal'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        const classes = computed(() => {
            return {
                [`gulu-switch-size-${props.size}`]: true,
                [`gulu-switch-checked`]: props.value,
                [`gulu-swtich-disabled`]: props.disabled
            }
        })
        const toggle = () => {
            if (props.disabled) return
            context.emit('update:value', !props.value)
        }
        return {
            toggle,
            classes
        }
    }
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
$gb:dodgerblue;
$default-gb:#bfbfbf;

.gulu-button {

    border: none;
    background: $default-gb;
    border-radius: $h/2;
    position: relative;
    left: 0;
    box-shadow: 0 0 0 7px rgba(30, 144, 255, 0);
    transition: box-shadow 500ms;
    height: $h;
    width: $h * 2;

    &.gulu-swtich-disabled {
        background: fade-out($color: $default-gb, $amount: 0.5);
    }

    &.gulu-switch-checked {
        background: dodgerblue;

        &.gulu-swtich-disabled {
            background: fade-out($color: $gb, $amount: 0.5);
        }
    }

    &.gulu-switch-checked>.gulu-ball {
        left: calc(100% - #{$h2} - 2px);
    }

    &>.gulu-ball {
        transition: left .25s, width .25s;
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: $h2 / 2;
    }

    &:focus {
        outline: none;

    }

    &:active:not(.gulu-swtich-disabled)>.gulu-ball {
        width: $h2+5px;
    }

    &.gulu-switch-checked:active:not(.gulu-swtich-disabled)>.gulu-ball {
        left: calc(100% - #{$h2} - 7px);
    }

    &:active:not(.gulu-swtich-disabled) {
        transition: none;
        box-shadow: 0 0 0 0 rgba(30, 144, 255, .5);
    }

    &.gulu-swtich-disabled {
        cursor: not-allowed;
    }

    &.gulu-switch-size-small {
        $h: $h - 6px;
        $h2: $h - 4px;

        height: $h;
        width: $h*2;

        &>.gulu-ball {
            height: $h2;
            width: $h2;
        }

        &.gulu-switch-checked>.gulu-ball {
            left: calc(100% - #{$h2} - 2px);
        }

        &:active:not(.gulu-swtich-disabled)>.gulu-ball {
            width: $h2 + 4px;
        }

        &.gulu-switch-checked:active:not(.gulu-swtich-disabled)>.gulu-ball {
            left: calc(100% - #{$h2} - 6px);
        }

    }
}
</style>
