<template>
    <div class="h-full w-full">
        <splash-screen v-if="state === 'splash'"
                @continue="state = 'form'"
                :call-to-action="data.callToAction"
                :button="data.launchButton">
        </splash-screen>

        <div v-if="state === 'form'">
            <form :data="data"></form>
        </div>
    </div>
</template>

<script>
    import SplashScreen from '@/components/VueForm/SplashScreen';
    import Form from '@/components/VueForm/Form';

    export default {
        props: {
            data: Object
        },
        data() {
            return {
                state: 'splash'
            }
        },
        components: {
            SplashScreen,
            Form
        }
    }
</script>

<style lang="scss">

    html, body {
        @apply h-full;
        font-family: 'Karla', sans-serif;
    }

</style>