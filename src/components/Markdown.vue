<template>
<article v-html="content" class="markdown-body"></article>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
export default {
    props: {
        content: {
            type: String,
            required: true
        }
    },

}
</script>
