<template>
    <div class="h-full w-full">
        <splash-screen v-if="state === 'splash'"
                @continue="state = 'form'"
                :call-to-action="data.callToAction"
                :button="data.launchButton">
        </splash-screen>

        <v-form v-if="state === 'form'"
                :questions="data.questions"></v-form>
    </div>
</template>

<script>
    import SplashScreen from '@/components/VueForm/SplashScreen';
    import vForm from '@/components/VueForm/Form';

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
            vForm
        }
    }
</script>

<style lang="scss">

    html, body {
        @apply h-full;
        font-family: 'Karla', sans-serif;
    }

</style>