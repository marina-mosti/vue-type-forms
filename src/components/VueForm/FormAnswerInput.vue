<template>
  <input
    :type="type"
    :value="value"
    class="vue-form__input"
    placeholder="Type your answer here..."
    @input="e => $emit('input', e.target.value)"
  >
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: String
  }
};
</script>

<style lang="scss" scoped>
.vue-form__input {
  color: #3490dc;

  font-size: 2rem;
  padding: 0 0 8px;
  background: none;
  border: none;

  -webkit-appearance: none;
  border-bottom: 1px solid #3490dc;

  &::placeholder {
    color: #bcdefa;
  }

  &:focus {
    outline: none;
  }
}
</style>