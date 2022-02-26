<template>
  <label class="radio-round-label" :class="{ 'radio-round-label__chosen': isActive }">
    <input
      class="radio-round-label__field"
      type="radio"
      name="content"
      :value="value"
      @change="emitValue"
    />
    <p class="radio-round-label__title" :class="{ 'radio-round-label__title_chosen': isActive }">
      {{ title }}
    </p>
  </label>
</template>

<script>
export default {
  name: 'GuiRadioRoundLabel',

  props: {
    value: { type: Number, required: true },
    isActive: { type: Boolean, default: false },
    title: { type: String },
  },

  methods: {
    emitValue(event) {
      // console.log(event)
      this.$emit('change', Number(event.target.value));
    },
  },
};
</script>

<style lang="scss" scoped>
.radio-round-label {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 17px;
  border-radius: 50%;
  background-color: #dfe6ec;
  opacity: 1;
  //
  transition: color 0.3s, background 0.4s;
  transition-property: color, background;
  transition-duration: 0.3s, 0.4s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;

  &:hover {
    opacity: 0.8;
  }

  &:hover .radio-round-label__title {
    opacity: 1;
  }

  //  radio-round-label__chosen
  &__chosen {
    background: #50287d;
  }

  &__field {
    display: none;
  }

  &__title {
    color: rgb(70, 66, 66);
    opacity: 0.6;

    // radio-round-label__title_chosen
    &_chosen {
      color: #fff;
    }
  }
}
</style>
