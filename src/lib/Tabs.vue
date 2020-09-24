<template>
<div>
    <div class="gulu-tabs-nav">
        <div class="gulu-tabs-nav-item" :ref="el => { if (el) navItems[index] = el }" :class="{'selected':title===selected}" v-for="(title,index) in titles" :key="title" @click="select(title)">{{title}}</div>
        <div class="gulu-tabs-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
        <component class="gulu-tabs-content-item" :class="{'selected':slot.props.title===selected}" v-for="(slot,index) in defaults" :key='index' :is="slot" />
    </div>
</div>
</template>

<script lang="ts">
import {
    computed,
    onMounted,
    onUpdated,
    ref
} from 'vue'
import Tab from './Tab.vue'
export default {
    props: {
        selected: {
            type: String
        }
    },
    setup(props, context) {
        const navItems = ref < HTMLDivElement[] > ([])
        const indicator = ref < HTMLDivElement > (null)
        const x = () => {
            const divs = navItems.value
            console.log(divs)
            const result = divs.filter(div => div.classList.contains('selected'))[0]
            const {
                width
            } = result.getBoundingClientRect()
            const left1 = result.offsetLeft

            indicator.value.style.width = width + 'px'
            indicator.value.style.left = left1 + 'px'
        }
        onMounted(x)
        onUpdated(x)
        const defaults = context.slots.default()
        context.slots.default().forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error('Tabs的子组件必须是Tab组件')
            }
        })
        const titles = context.slots.default().map(tag => {
            return tag.props.title
        })
        const select = (title: string) => {
            context.emit('update:selected', title)
        }
        return {
            titles,
            defaults,
            select,
            navItems,
            indicator
        }
    }
}
</script>

<style lang="scss">
.gulu-tabs-nav {
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;

    >.gulu-tabs-nav-item {
        cursor: pointer;
        padding: 0.4em 1em;

        &.selected {
            color: #43ba85;
        }
    }

    >.gulu-tabs-indicator {
        transition: .25s;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #43ba85;
    }
}

.gulu-tabs-content {
    &>.gulu-tabs-content-item {
        & {
            display: none;
        }

        &.selected {
            display: block;
        }
    }

}
</style>
