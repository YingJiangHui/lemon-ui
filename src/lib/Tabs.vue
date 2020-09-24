<template>
<div>
    <div class="gulu-tabs-nav">
        <div class="gulu-tabs-nav-item" v-for="t in titles" :key="t">{{t}}</div>
    </div>
    <div class="gulu-tabs-content">
        <component class="gulu-tabs-content-item" v-for="(slot,index) in defaults" :key='index' :is="slot">
    </div>
</div>
</template>

<script>
import Tab from './Tab.vue'
export default {
    props: {

    },
    setup(props, context) {
        const defaults = context.slots.default()
        context.slots.default().forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error('Tabs的子组件必须是Tab组件')
            }
        })
        const titles = context.slots.default().map(tag => {
            return tag.props.title
        })
        return {
            titles,
            defaults
        }
    }
}
</script>

<style lang="scss">
.gulu-tabs-nav {
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    >.gulu-tabs-nav-item {
        cursor: pointer;
        padding: 0.4em 1em;

        &.selected {
            color: #43ba85;
        }
    }
}
</style>
