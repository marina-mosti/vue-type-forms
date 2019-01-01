<template>
    <div class="h-full flex flex-col m-auto md:w-2/5 justify-center">
        <form-question
                :number="currentQuestionIndex + 1"
                :question="question"
        ></form-question>

        <form-answer :question="question"></form-answer>
    </div>
</template>

<script>
    import FormQuestion from '@/components/VueForm/FormQuestion';
    import FormAnswer from '@/components/VueForm/FormAnswer';

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