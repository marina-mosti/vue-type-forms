<template>
    <div class="vue-form__form">
        <form-question
                :number="currentQuestionIndex + 1"
                :question="question"
                :show-number="question.type !== 'submit'"
        ></form-question>

        <form-answer @answer="registerAnswer" :question="question" @submit="submit"></form-answer>
    </div>
</template>

<script>
    import FormQuestion from './FormQuestion';
    import FormAnswer from './FormAnswer';

    export default {
        props: {
            questions: Array,
            answers: []
        },
        data() {
            return {
                userAnswers: [],
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
        },
        methods: {
            submit() {
                this.$emit('complete', this.userAnswers);
            },

            changeQuestion(newQuestionIndex) {
                if (!this.questions[newQuestionIndex]) {
                    this.submit();
                    return;
                }

                this.currentQuestionIndex = newQuestionIndex;
            },

            registerAnswer(answerData) {
                const question = answerData.question;
                const answer = answerData.answer;

                const action = answer.action || question.action;

                this.userAnswers.push({
                    question: question.question,
                    answer: answer.answer || answer
                });

                if (action === 'continue') {
                    this.changeQuestion(this.currentQuestionIndex + 1);
                    return;
                }

                if (action === 'skip') {
                    const questionIndex = this.questions.findIndex(q => q.id === answer.skipTo);
                    this.changeQuestion(questionIndex);
                }
            }
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