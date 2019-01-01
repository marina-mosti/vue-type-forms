<template>
    <div class="vue-form">
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
    import SplashScreen from './VueForm/SplashScreen';
    import vForm from './VueForm/Form';

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

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Karla:400,700');

    *, html {
        font-family: 'Karla', sans-serif;
        box-sizing: border-box;
    }

    .vue-form {
        height: 100%;
    }
</style>