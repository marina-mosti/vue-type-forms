<template>
    <div class="flex items-center mb-2">
        <span class="text-blue mr-1" v-if="number">{{ number }}</span>
        <span class="mr-1" v-if="number">
            <svg class="SVGInline-svg" width="11" height="10" xmlns="http://www.w3.org/2000/svg"><g fillrule="nonzero"><path d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"></path><path d="M8 4v2H0V4z"></path></g></svg>
        </span>
        <span class="text-2xl">{{ question.question }}</span>
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