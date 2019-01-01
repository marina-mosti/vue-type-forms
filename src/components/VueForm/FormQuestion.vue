<template>
    <div class="vue-form__question">
        <span class="number" v-if="number">{{ number }}</span>
        <span class="arrow" v-if="number">
            <svg class="SVGInline-svg" width="11" height="10" xmlns="http://www.w3.org/2000/svg"><g fillrule="nonzero"><path d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"></path><path d="M8 4v2H0V4z"></path></g></svg>
        </span>
        <span class="question">{{ question.question }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            number: Number,
            question: Object
        }
    }
</script>

<style lang="scss" scoped>
    .vue-form__question {
        display: flex;
        align-items: center;

        margin-bottom: 1rem;

        .number {
            color: #3490DC;
            margin-right: .25rem;
        }

        .arrow {
            margin-right: .25rem;
        }

        .question {
            font-size: 2rem;
        }
    }
</style>