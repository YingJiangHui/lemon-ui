<template>
<div class="demo-wrapper">
    <slot />
</div>
</template>

<style lang="scss">
.demo-wrapper {

    padding: 45px;
    margin: 0 auto;
    max-width: 890px;

    @media (max-width:500px) {
        padding: 0;
    }

    >*:not(:last-child) {
        margin-bottom: 20px;
    }
}
</style>
