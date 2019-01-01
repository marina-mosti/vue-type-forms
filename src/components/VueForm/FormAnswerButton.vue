<template>
    <button @click="$emit('click')" class="vue-form__answer-button" :class="{ 'selected': isSelected }">
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
        },
        computed: {
            isSelected() {
                return this.selected;
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

        width: calc(100% / 4);
        text-align: left;

        background-color: #EFF8FF;
        color: #3490DC;

        cursor: pointer;

        &.selected {
            border: 2px solid #3490DC;
        }

        &:focus {
            outline: none;
            font-weight: bold;
        }
    }
</style>