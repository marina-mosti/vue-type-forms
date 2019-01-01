<template>
    <div class="vue-form__answer">
        <template v-if="question.type === 'single'">
            <answer-button v-for="answer in question.answers" :key="answer.answer"
               @click="answer(answer)"
            >
                {{ answer.answer }}
            </answer-button>
        </template>
    </div>
</template>

<script>
    import AnswerButton from '@/components/VueForm/FormAnswerButton';

    export default {
        props: {
            question: Object
        },
        components: {
            AnswerButton
        },
        methods: {
            answer(answer) {
                this.$emit('answer', {
                    question: this.question,
                    answer: answer
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vue-form__answer {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
</style>