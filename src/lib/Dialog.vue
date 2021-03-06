<template>
<template v-if="visible">
    <teleport to='#app'>
        <div class="gulu-dialog-overlay" :style="{borderRadius:radius+'px'}" @click="onClickOverlay"></div>
        <div class="gulu-dialog-wrapper">
            <div class="gulu-dialog">
                <header>
                    <slot name="title"></slot>
                    <span class="gulu-dialog-close" @click="close"></span>
                </header>

                <main>
                    <slot name="content"></slot>
                </main>
                <footer>
                    <Button @click="cancel">Cancel</Button>
                    <Button level="primary" :full="true" @click="ok">OK</Button>
                </footer>
            </div>
        </div>
    </teleport>
</template>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
    components: {
        Button
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true
        },
        ok: {
            type: Function,
        },
        cancel: {
            type: Function
        },
        radius: {
            type: [String, Number],
            default: 0
        }
    },
    setup(props, context) {
        const close = () => {
            context.emit('update:visible', false)
        }
        const ok = () => {
            if (props.ok?.()) {
                close()
            }
        }
        const cancel = () => {
            props.cancel?.()
            close()

        }
        const onClickOverlay = () => {
            if (props.closeOnClickOverlay)
                close()
        }
        return {
            onClickOverlay,
            close,
            ok,
            cancel
        }
    }
}
</script>

<style lang="scss">
$radius: 2px;
$border-color: #d9d9d9;

.gulu-dialog {
    background: white;
    box-shadow: 0 0 3px fade_out(black, 0.5);

    width: 420px;
    min-width: 300px;

    @media (max-width:500px) {
        width: 90vw;
    }

    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fade_out(black, 0.5);
        z-index: 10;
    }

    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }

    >header {
        padding: 12px 16px;
        border-bottom: 1px solid $border-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }

    >main {
        padding: 12px 16px;
    }

    >footer {
        border-top: 1px solid $border-color;
        padding: 12px 16px;
        text-align: right;
    }

    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;

        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 1px;
            background: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}
</style>
