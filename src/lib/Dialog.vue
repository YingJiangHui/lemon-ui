<template>
<div class="gulu-dialog-wrapper">
    <header>
        <slot name="title"></slot>
    </header>

    <body>
        <slot name="content"></slot>
    </body>
    <footer>
        <Button>OK</Button>
        <Button>Cancel</Button>
    </footer>
</div>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
    components: {
        Button
    }
}
</script>

<style lang="scss">

</style>
