<template>
<div :size=size>
    <button v-bind="rest">
        <slot></slot>
    </button>
</div>
</template>

<script lang="ts">
export default {
    inheritAttrs: false,
    setup(props, context) {
        const {
            size,
            ...rest
        } = context.attrs
        console.log(rest)
        return {
            rest,
            size
        }
    }
}
</script>
