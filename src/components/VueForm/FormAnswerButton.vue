<template>
  <button
    @click="select"
    class="vue-form__answer-button"
    :class="{ 'selected': isSelected }"
  >
    <span v-if="keyboard" class="vue-form__answer-button__key-hint">[{{ keyboard }}]</span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    keyboard: String
  },
  computed: {
    isSelected() {
      return this.selected;
    }
  },
  methods: {
    select() {
      this.$emit('click');
    },

    keyListener(event) {
      const key = String.fromCharCode(event.which);
      if (key === this.keyboard.toUpperCase()) {
        this.select();
      }
    }
  },
  created() {
    if (this.keyboard) {
      window.addEventListener('keyup', this.keyListener);
    }
  },
  beforeDestroy() {
    if (this.keyboard) {
      window.removeEventListener('keyup', this.keyListener);
    }
  }
};
</script>

<style lang="scss" scoped>
.vue-form__answer-button {
  display: flex;
  align-items: center;

  border-radius: 0.25rem;
  border: 1px solid #3490dc;
  margin-bottom: 0.25rem;
  padding: 0.25rem;

  font-size: 1.2rem;

  width: calc(100% / 4);
  text-align: left;

  background-color: #eff8ff;
  color: #3490dc;

  cursor: pointer;

  &.selected {
    border: 2px solid #3490dc;
    font-weight: bold;
  }

  &:focus {
    outline: none;
    font-weight: bold;
    line-height: 1rem;
  }

  &__key-hint {
    display: inline-block;

    font-size: .8rem;
    margin-right: 5px;
  }
}
</style>