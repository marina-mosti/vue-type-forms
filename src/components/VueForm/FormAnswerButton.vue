<template>
    <button @click="$emit('click')" class="vue-form__answer-button" :class="{ 'selected': selected }">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            selected: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vue-form__answer-button {
        border-radius: .25rem;
        border: 1px solid #3490DC;
        margin-bottom: .25rem;
        padding: .25rem;

        font-size: 1.2rem;

        width: calc(100% / 6);
        text-align: left;
        font-weight: bold;

        background-color: #EFF8FF;
        color: #3490DC;

        cursor: pointer;

        &.selected {
            border: 2px solid #3490DC;
        }

        &:focus {
            outline: none;
        }
    }
</style>