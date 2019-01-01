<template>
    <button class="vue-form__answer-button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    .vue-form__answer-button {
        border-radius: .25rem;
        border: 1px solid #3490DC;
        margin-bottom: .25rem;
        padding: .25rem;

        width: calc(100% / 6);
        text-align: left;
        font-weight: bold;

        background-color: #EFF8FF;
        color: #3490DC;

        cursor: pointer;
    }
</style>