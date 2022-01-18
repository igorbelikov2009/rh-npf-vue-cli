<template>
  <label class="radio-primary-label" :class="{ 'radio-primary-label_active': isActive }">
    <input
      class="radio-primary-label__field"
      type="radio"
      :name="name"
      :value="value"
      @change="emitValue"
    />
    <p class="radio-primary-label__title">{{ title }}</p>
  </label>
</template>

<script>
export default {
  name: 'GuiRadioPrimaryLabel',

  props: {
    name: { type: String },
    value: { type: Number, required: true },
    title: { type: String },
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
.radio-primary-label {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 18px;
  border-radius: 20px;
  box-sizing: border-box;
  opacity: 1;
  background: #b5bdc8;
  //
  transition: color 0.3s, background 0.4s;
  transition-property: color, background;
  transition-duration: 0.3s, 0.4s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;

  @media screen and (min-width: 1160px) {
    padding: 12px 24px;
    border-radius: 24px;
  }

  &:hover {
    opacity: 0.8;
  }

  &:hover .radio-primary-label__title {
    color: #010;
    font-weight: 400;
    opacity: 1;
  }

  // radio-primary-label_active
  &_active {
    background: #50287d;

    &:hover .radio-primary-label__title {
      color: #fff;
      font-weight: 400;
    }
  }

  &__field {
    display: none;
  }

  &__title {
    opacity: 0.7;
    font-size: 13px;
    line-height: 24px;
    font-weight: 400;
    color: #ffffff;

    @media screen and (min-width: 1160px) {
      font-size: 16px;
    }
  }
}
</style>
