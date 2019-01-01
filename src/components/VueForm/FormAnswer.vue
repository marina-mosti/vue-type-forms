<template>
    <div class="flex flex-col items-start">
        <template v-if="question.type === 'single'">
            <answer-button class="mb-1" v-for="answer in question.answers" :key="answer"
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