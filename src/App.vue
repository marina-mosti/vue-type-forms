<template>
  <div id="app">
    <vue-form :data="formData" @complete="complete"></vue-form>
  </div>
</template>

<script>
import VueForm from "@/components/VueForm";
import data from "@/data/demo";

export default {
  data() {
    return {
      formData: data
    };
  },
  components: {
    VueForm
  },
  methods: {
    complete(data) {
      // Send to database here
      console.log("Form complete", data.map(d => d.question + ': ' + d.answer));
    }
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

#app {
  height: 100%;
}
</style>
