<template>
    <div class="vue-form__form h-full flex flex-col m-auto md:w-2/5 justify-center">
        <form-question
                :number="currentQuestionIndex + 1"
                :question="question"
        ></form-question>

        <form-answer @answer="registerAnswer" :question="question"></form-answer>
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
            registerAnswer(answerData) {
                const question = answerData.question;
                const answer = answerData.answer;

                this.userAnswers.push({
                    question: question.question,
                    answer: answer.answer
                });

                if (answer.action === 'continue') {
                    this.currentQuestionIndex++;
                    return;
                }

                if (answer.action === 'skip') {
                    const questionIndex = this.questions.findIndex(q => q.id === answer.skipTo);
                    this.currentQuestionIndex = questionIndex;
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