<template>
    <div class="vue-form__answer">
        <template v-if="question.type === 'single'">
            <answer-button v-for="answer in question.answers" :key="answer.answer"
               :selected="currentAnswer && answer.answer === currentAnswer.answer"
               @click="selectAnswer(answer)"
            >
                {{ answer.answer }}
            </answer-button>
        </template>

        <form-button @click="answer" v-if="showOKButton" class="ok-button">OK ✔</form-button>
    </div>
</template>

<script>
    import AnswerButton from './FormAnswerButton';
    import FormButton from './FormButton';

    export default {
        data() {
            return {
                currentAnswer: null // Answer obj
            }
        },
        props: {
            question: Object
        },
        components: {
            AnswerButton,
            FormButton
        },
        computed: {
            showOKButton() {
                return (
                    this.currentAnswer &&
                    this.question.answers &&
                    this.question.answers.length > 0
                );
            }
        },
        methods: {
            answer() {
                this.$emit('answer', {
                    question: this.question,
                    answer: this.currentAnswer
                });

                this.currentAnswer = null;
            },

            selectAnswer(answer) {
                this.currentAnswer = answer;
            },
        }
    }
</script>

<style lang="scss" scoped>
    .vue-form__answer {
        display: flex;
        flex-direction: column;
        align-items: start;

        .ok-button {
            margin-top: 2rem;
        }
    }
</style>