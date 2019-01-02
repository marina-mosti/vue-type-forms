<template>
    <input :type="type"
           :value="value"
           v-model="input"
           class="vue-form__input"
           placeholder="Type your answer here..."
           @input="$emit('input', input)"
    >
</template>

<script>
    export default {
        data() {
            return {
                input: ''
            }
        },
        props: {
            type: {
                type: String,
                default: 'text'
            },
            value: String
        }
    }
</script>

<style lang="scss" scoped>
    .vue-form__input {
        color: #3490DC;

        font-size: 2rem;
        padding: 0 0 8px;
        background: none;
        border: none;

        -webkit-appearance: none;
        border-bottom: 1px solid #3490DC;

        &::placeholder {
            color: #BCDEFA;
        }

        &:focus {
            outline: none;
        }
    }
</style>