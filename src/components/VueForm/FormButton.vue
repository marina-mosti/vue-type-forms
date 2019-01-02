<template>
  <button @click="$emit('click')" class="vue-form__button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.vue-form__button {
  border-radius: 0.25rem;
  color: white;
  background-color: #3490dc;
  padding: 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}
</style>