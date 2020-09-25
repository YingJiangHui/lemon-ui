<template>
<svg class="gulu-icon">
    <use :xlink:href="`#icon-${name}`"></use>
</svg>
</template>

<script lang="ts">
export default {
    props: {
        name: {
            type: String,
        }
    }
}
</script>

<style lang="">
.gulu-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
