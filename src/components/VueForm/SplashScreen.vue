<template>
    <div class="flex flex-col items-center justify-center h-full">
        <div class="mb-8">
            <img src="@/assets/logo.png" alt="Vue Vixens">
        </div>

        <div>
            <h1 class="text-2xl mb-8">{{ callToAction }}</h1>
        </div>

        <div>
            <form-button @click="$emit('continue')">{{ button }}</form-button>
        </div>
    </div>
</template>

<script>
    import FormButton from '@/components/VueForm/FormButton';
    export default {
        props: {
            callToAction: String,
            button: String
        },
        components: {
            FormButton
        }
    }
</script>