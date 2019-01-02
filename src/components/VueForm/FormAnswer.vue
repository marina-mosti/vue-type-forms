<template>
    <div class="vue-form__answer">
        <!-- Single selection buttons -->
        <template v-if="question.type === 'single'">
            <answer-button v-for="answer in question.answers" :key="answer.answer"
               :selected="currentAnswer && answer.answer === currentAnswer.answer"
               @click="selectAnswer(answer)"
            >
                {{ answer.answer }}
            </answer-button>
        </template>

        <!-- Open single line text -->
        <template v-if="question.type === 'text'">
            <answer-input type="text" @input="selectAnswer" value=""></answer-input>
        </template>

        <template v-if="question.type === 'email'">
            <answer-input type="email" @input="selectAnswer" value=""></answer-input>
        </template>

        <form-button @click="answer" v-if="showOKButton" class="ok-button">OK ✔</form-button>
    </div>
</template>

<script>
    import AnswerButton from './FormAnswerButton';
    import AnswerInput from './FormAnswerInput';
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
            AnswerInput,
            FormButton
        },
        computed: {
            showOKButton() {
                if (!this.currentAnswer) return false;

                if (this.question.type === 'single') {
                    return (
                        this.question.answers &&
                        this.question.answers.length > 0
                    );
                }

                if (this.question.type === 'text' && this.question.minLength) {
                    return this.currentAnswer.length >= this.question.minLength;
                }

                if (this.question.type === 'email') {
                    // eslint-disable-next-line
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( this.currentAnswer );
                }

                return true;
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