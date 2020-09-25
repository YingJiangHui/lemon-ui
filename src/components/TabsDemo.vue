<template>
<div>

    <Tabs v-model:selected="x" direction="vertical">
        <Tab title='导航1'>内容1</Tab>
        <Tab title='导航2' :disabled='true'>内容2</Tab>
        <Tab title='导航5' :disabled='true'>内容5</Tab>

        <Tab title='导航3'>内容3</Tab>
    </Tabs>
</div>
</template>

<script lang="ts">
import {
    computed,
    onUpdated,
    ref
} from 'vue'
import Tab from '../lib/Tab.vue'
import Tabs from '../lib/Tabs.vue'
export default {
    components: {
        Tab,
        Tabs
    },
    setup() {
        let x = ref('导航1')
        return {
            x
        }
    }
}
</script>
