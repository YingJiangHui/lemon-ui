<demo>常规用法</demo>
<template>
<Tabs v-model:selected="x">
    <Tab title='导航1'>内容1</Tab>
    <Tab title='导航2'>内容2</Tab>
    <Tab title='导航3'>内容3</Tab>
    <Tab title='导航4'>内容4</Tab>
</Tabs>
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
