<template>
    <div class="vue-form__form h-full flex flex-col m-auto md:w-2/5 justify-center">
        <form-question
                :number="currentQuestionIndex + 1"
                :question="question"
        ></form-question>

        <form-answer :question="question"></form-answer>
    </div>
</template>

<script>
    import FormQuestion from './FormQuestion';
    import FormAnswer from './FormAnswer';

    export default {
        props: {
            questions: Array
        },
        data() {
            return {
                answers: [],
                currentQuestionIndex: 0
            }
        },
        computed: {
            question() {
                return this.questions[this.currentQuestionIndex];
            }
        },
        components: {
            FormQuestion,
            FormAnswer
        }
    }
</script>

<style lang="scss" scoped>
    .vue-form__form {
        height: 100%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        margin: auto;
        
        @media (min-width: 768px) {
            width: calc( (100% / 5) * 2 )
        }
    }
</style>