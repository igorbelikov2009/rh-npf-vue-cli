<template>
  <label class="triple-switch__label" :class="{ 'triple-switch__label_chosen': isActive }">
    <input
      class="triple-switch__field"
      type="radio"
      name="content"
      :value="value"
      @change="emitValue"
    />
  </label>
</template>

<script>
export default {
  name: 'TripleSwitchItem',

  props: {
    value: { type: Number, required: true },
    isActive: { type: Boolean, default: false },
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
//  triple-switch
.triple-switch {
  &__label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
    background-color: #dfe6ec;
    opacity: 1;
    //
    transition: color 0.3s, background 0.4s;
    transition-property: color, background;
    transition-duration: 0.3s, 0.4s;
    transition-timing-function: ease, ease;
    transition-delay: 0s, 0s;

    @media screen and (min-width: 1160px) {
      padding: 24px;
      border-radius: 24px;
    }

    &:hover {
      opacity: 0.8;
    }

    //  triple-switch__label_chosen
    &_chosen {
      background: #50287d;
    }
  }

  &__field {
    display: none;
  }
} // triple-switch
</style>
