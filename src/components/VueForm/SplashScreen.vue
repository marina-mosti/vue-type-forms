<template>
  <div class="vue-form__splash flex">
    <div class="mb-8">
      <img src="@/assets/logo.png" alt="Vue Vixens">
    </div>

    <div>
      <h1 class="vue-form__splash__cta">{{ callToAction }}</h1>
    </div>

    <div>
      <form-button @click="emitContinue">{{ button }} <small>[Enter]</small></form-button>
    </div>
  </div>
</template>

<script>
import FormButton from "./FormButton";
export default {
  props: {
    callToAction: String,
    button: String
  },
  components: {
    FormButton
  },
  methods: {
    emitContinue() {
      this.$emit('continue');
    }
  },
  created() {
    window.addEventListener('keyup', this.emitContinue);
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.emitContinue);
  }
};
</script>

<style lang="scss" scoped>
.vue-form__splash {
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__cta {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}
</style>
