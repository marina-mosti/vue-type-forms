<template>
    <div id="app" class="h-full w-full">
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