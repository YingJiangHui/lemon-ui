<template>
<div class="demo-wrapper">
    <h1>Swtich 组件示例</h1>
    <div class="demo">
        <p>常规用法</p>
        <div class="demo-component">
            <switch-demo-1></switch-demo-1>

        </div>
        <div class="demo-actions">
            <Button @click="toggle">查看代码</Button>
        </div>
        <pre class="demo-code" v-if="codeVisible">{{SwitchDemo1.__sourceCode}}</pre>
    </div>
</div>
</template>

<script lang="ts">
import SwitchDemo1 from './Switch.demo1.vue'
import Button from '../lib/Button.vue'
import {
    ref
} from 'vue'
export default {
    components: {
        SwitchDemo1,
        Button
    },
    setup() {
        const codeVisible = ref < boolean > (false)
        const toggle = () => {
            codeVisible.value = !codeVisible.value
        }
        return {
            codeVisible,
            toggle,
            SwitchDemo1
        }
    }
}
</script>

<style lang="scss">
.demo-wrapper {
    padding: 45px;
    margin: 0 auto;
    max-width: 890px;

    @media (max-width:500px) {
        padding: 0;
    }

    >.demo {
        min-width: 320px;
        display: flex;
        flex-direction: column;
        border: 1px solid rgba($color: #000, $alpha: .1);

        &>*:not(:last-child) {
            border-bottom: 1px solid rgba($color: #000, $alpha: .1);
        }

        &>* {
            padding: 1em;
        }

        >.demo-component {}

        >.demo-actions {}

        >.demo-code {}
    }
}
</style>
