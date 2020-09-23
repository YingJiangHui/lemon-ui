<template>
<button class="gulu-button" @click="toggle" :class="{checked:value}"><span class="gulu-ball"></span></button>
</template>

<script lang="ts">
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        const toggle = () => {
            context.emit('update:value', !props.value)
        }
        return {
            toggle
        }
    }
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

.gulu-button {
    height: $h;
    width: $h*2;
    border: none;
    background: rgba(191, 191, 191);
    border-radius: $h/2;
    position: relative;
    left: 0;
    box-shadow: 0 0 0 7px rgba(30, 144, 255, 0);
    transition: box-shadow 500ms;

    &.checked {
        background: dodgerblue;
    }

    &.checked>.gulu-ball {
        left: calc(100% - #{$h2} - 2.5px);
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

    &:active>.gulu-ball {
        width: $h2+5px;
    }

    &:active {
        transition: none;
        box-shadow: 0 0 0 0 rgba(30, 144, 255, .5);
    }

    &.checked:active>.gulu-ball {
        left: calc(100% - #{$h2} - 7.5px);
    }
}
</style>
