<template>
    <div id="app">
        <vue-form :data="formData"></vue-form>
    </div>
</template>

<script>
    import VueForm from '@/components/VueForm';
    import data from '@/data/demo';

    export default {
        data() {
            return {
                formData: data
            }
        },
        components: {
            VueForm
        }
    }
</script>

<style lang="scss">
    html, body {
        height: 100%;
    }

    #app {
        height: 100%;
    }
</style>