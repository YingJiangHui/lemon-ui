<template>
<article class="markdown-body" v-html="md" />
</template>

<script>
import md from '../markdown/get-started.md'
export default {
    setup() {
        return {
            md
        }
    }
}
</script>
