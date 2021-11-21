<template>
  <div class="slider">
    <div class="slider__description">
      <p class="slider__title">{{ title }}</p>

      <p class="slider__output">{{ value }}</p>
    </div>

    <input
      class="slider-bicolor "
      type="range"
      :name="name"
      :min="min"
      :max="max"
      :step="step"
      :value="value"
      @input="emitValue"
    />
  </div>
</template>

<script>
export default {
  name: 'BicolorSlider',
  props: {
    title: { type: String },
    name: { type: String },
    min: { type: Number },
    max: { type: Number },
    step: { type: Number },
    value: { type: Number, required: true },
  },

  methods: {
    emitValue(event) {
      // console.log(event)
      this.$emit('input', event.target.valueAsNumber)
      // console.log(this.value)
    },
  },
}
</script>

<style lang="scss" scoped>
// slider
.slider {
  position: relative;
  width: 100%;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    margin-bottom: 48px;
  }

  &__description {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    font-size: 13px;
    color: #b5bdc8;
  }

  &__output {
    font-size: 16px;
    line-height: 24px;
    font-style: normal;
    color: #5a646e;
  }

  &__sub-output {
    font-size: 11px;
    line-height: 24px;
    font-style: normal;
    color: #b5bdc8;
  }
}
// slider

// стилизация ползунка slider-bicolor *
.slider-bicolor {
  width: 100%;
  appearance: none;
  outline: none;
  overflow: hidden;
  height: 4px;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &:hover .slider-bicolor::-webkit-slider-thumb {
    border: 1px solid #0d4c8b;
  }

  &::-webkit-slider-runnable-track {
    height: 4px;
    background-color: #b5bdc8;
  }

  &::-webkit-slider-thumb {
    background: #ecf0f1;
    cursor: pointer;
    width: 24px;
    height: 24px;
    // background: url(@/assets/icons/sliderOval.jpg);
    background-color: #fff;
    border: 1px solid #f3f5f7;
    box-sizing: border-box;
    box-shadow: 0px 4px 6px rgba(26, 65, 101, 0.15);
    -webkit-appearance: none;
    box-shadow: -500px 0 0 500px #cedc01;
  }
}
// стилизация ползунка slider-bicolor *
</style>
