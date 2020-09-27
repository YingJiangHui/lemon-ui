<template>
<div class="gulu-tabs-wrapper" :class="wrapperClasses">
    <div class="gulu-tabs-nav">
        <div class="gulu-tabs-nav-item" :ref="el => { if(title===selected) navItem = el}" :class="navItemClasses(title)" v-for="(title) in titles" :key="title" @click="select(title)">{{title}}</div>
        <div class="gulu-tabs-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
        <component class="gulu-tabs-content-item" :key='current.props.title' :is="current" />
    </div>
</div>
</template>

<script lang="ts">
import {
    computed,
    onMounted,
    onUpdated,
    ref,
    VNode,
    watchEffect,
} from 'vue'
import Tab from './Tab.vue'
export default {
    props: {
        selected: {
            type: String
        },
        direction: {
            type: String,
            default: 'horizontal'
        }
    },
    setup(props, context) {
        const wrapperClasses = computed(() => ({
            [`gulu-direction-${props.direction}`]: props.direction
        }))
        const navItemClasses = (title) => ({
            [`gulu-tabs-nav-item-disabled`]: disabledItem[title],
            ['selected']: title === props.selected,
        })
        context.slots.default().forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error('Tabs的子组件必须是Tab组件')
            }
        })
        const navItem = ref < HTMLDivElement > (null)
        const indicator = ref < HTMLDivElement > (null)

        const moveIndicator = () => {
            const div = navItem.value
            const {
                width,
                height
            } = div.getBoundingClientRect()
            const left = div.offsetLeft
            const top = div.offsetTop
            if (props.direction === 'horizontal') {
                indicator.value.style.width = width + 'px'
                indicator.value.style.left = left + 'px'
            } else if (props.direction === 'vertical') {
                indicator.value.style.height = height + 'px'
                indicator.value.style.top = top + 'px'
            }
        }
        // 默认watchEffect会在组件渲之前查看依赖的属性是否发生变化。
        // 而代码中的依赖navItem是需要在组件渲染之后才会发生变化，
        // 因此watchEffect在组件渲染之前查看却发现依赖没有变化导致不执行watchEffect函数。
        // 将watchEffect传入第二个参数flush改为post表示只有在组件渲染之后watchEffect再进行查看即可。
        // 默认flush:pre
        onMounted(() => {
            watchEffect(moveIndicator, {
                flush: 'post'
            })
        })
        const disabledItem = context.slots.default().reduce((obj, tag) =>
            tag.props['disabled'] ? {
                ...obj,
                [tag.props['title']]: true
            } : obj, {})
        const current = computed(() => context.slots.default().filter(tag => tag.props.title === props.selected)[0])

        const titles = context.slots.default().map(tag => tag.props.title)
        const select = (title: string) => {
            if (Object.keys(disabledItem).indexOf(title) >= 0) return
            context.emit('update:selected', title)
        }
        const defaults = context.slots.default()
        return {
            titles,
            defaults,
            select,
            navItem,
            indicator,
            wrapperClasses,
            disabledItem,
            navItemClasses,
            current
        }
    }
}
</script>

<style lang="scss">
.gulu-tabs-wrapper {

    display: flex;

    &>.gulu-tabs-nav {
        display: flex;
        position: relative;

        >.gulu-tabs-nav-item {
            &.gulu-tabs-nav-item-disabled {
                cursor: not-allowed;
                color: #dfdfdf;
            }

            cursor: pointer;
            padding: 0.4em 1em;

            &.selected {
                color: #43ba85;
            }
        }

        >.gulu-tabs-indicator {

            transition: .25s;
            position: absolute;
            background: #43ba85;
        }
    }

    &.gulu-direction-horizontal {
        flex-direction: column;

        &>.gulu-tabs-content {
            padding: 1em;
        }

        &>.gulu-tabs-nav {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            flex-direction: row;

            >.gulu-tabs-indicator {
                height: 2px;
                bottom: -1px;
                left: 0;
            }
        }
    }

    &.gulu-direction-vertical {
        flex-direction: row;

        &>.gulu-tabs-content {
            padding: 0.4em 1em;
        }

        &>.gulu-tabs-nav {
            border-right: 1px solid rgba(0, 0, 0, 0.1);
            flex-direction: column;

            >.gulu-tabs-indicator {
                width: 2px;
                top: 0;
                right: -1px;
            }
        }
    }

}
</style>
