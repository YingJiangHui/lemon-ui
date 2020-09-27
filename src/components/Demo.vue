<template>
<div class="demo">
    <p>{{component.__sourceCodeTitle}}</p>
    <div class="demo-component">
        <component :is="component" />
    </div>
    <div class="demo-actions">
        <Button v-if="codeVisible" @click="codeVisible=false">关闭代码</Button>
        <Button v-else @click="codeVisible=true">查看代码</Button>

    </div>
    <div class="demo-code" v-if="codeVisible">
        <pre class="language-html" v-html="html"></pre>
    </div>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import Prism from 'prismjs';
import '../../node_modules/prismjs/themes/prism.css'
import {
    computed,
    ref,
} from 'vue'
export default {

    props: {
        component: {
            type: Object,
            required: true
        }
    },
    components: {
        Button
    },
    setup(props) {
        const codeVisible = ref < boolean > (false)

        const html = computed(() => {
            return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
        })
        return {
            codeVisible,
            Prism,
            html
        }
    }
}
</script>

<style lang="scss">
.demo {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba($color: #000, $alpha: .1);

    &>*:not(:last-child) {
        border-bottom: 1px solid rgba($color: #000, $alpha: .1);
    }

    &>* {
        padding: 1em;
    }
}
</style>
