<template>
<article v-html="content" class="markdown-body"></article>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
export default {
    props: {
        path: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const content = ref < string > (null)
        import(props.path).then((data) => {
            content.value = data.default
        }).catch((err) => {
            console.log(err)
        })
        return {
            content
        }
    }
}
</script>
