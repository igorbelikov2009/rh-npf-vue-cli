<template>
  <section id="calculator" class="calculator">
    <div class="calculator__container">
      <h2 class="calculator__heading">Калькулятор</h2>
      <h1 class="calculator__subheading">Рассчитайте будущую пенсию</h1>
      <div class="calculator__block">
        <div class="calculator__box">
          <div class="calculator__sliders">
            <form class="slider-block">
              <div class="slider-block__age">
                <div class="slider-block__switch">
                  <div class="double-switch">
                    <label
                      class="double-switch__item"
                      :class="{
                        'double-switch__active': !isActive,
                        'double-switch__not-active': isActive,
                      }"
                    >
                      <input
                        class="double-switch__field"
                        type="radio"
                        name="gender"
                        value="65"
                        v-model="gender"
                        @change="clickGender"
                      />

                      <p class="double-switch__title">М</p>
                    </label>

                    <label
                      class="
                            double-switch__item  
                          "
                      :class="{
                        'double-switch__active': isActive,
                        'double-switch__not-active': !isActive,
                      }"
                    >
                      <input
                        class="double-switch__field"
                        type="radio"
                        name="gender"
                        value="60"
                        v-model="gender"
                        @change="clickGender"
                      />

                      <p class="double-switch__title">Ж</p>
                    </label>
                  </div>
                </div>

                <div class="slider">
                  <div class="slider__description">
                    <p class="slider__title">Возраст, лет</p>

                    <p class="slider__output">{{ ageSlider.currentValue }}</p>
                  </div>

                  <input
                    class="slider-bicolor "
                    type="range"
                    name="ageSlider"
                    :min="ageSlider.min"
                    :max="ageSlider.max"
                    :step="ageSlider.step"
                    :value="ageSlider.currentValue"
                    @input="ageSlider.currentValue = $event.target.value"
                  />

                  <p class="slider-block__time-invest-inner">
                    Срок накопления 32,5
                  </p>
                </div>
              </div>
              <!--  -->
              <div class="slider-block__container">
                <div class="slider">
                  <div class="slider__description">
                    <p class="slider__title">
                      Первоначальный взнос, р.
                    </p>

                    <p class="slider__output">{{ firstPayment.currentValue }} ₽.</p>
                  </div>

                  <input
                    class="slider-bicolor "
                    type="range"
                    name="firstPayment"
                    :min="firstPayment.min"
                    :max="firstPayment.max"
                    :step="firstPayment.step"
                    :value="firstPayment.currentValue"
                    @input="firstPayment.currentValue = $event.target.value"
                  />
                </div>
              </div>

              <div class="slider-block__container">
                <div class="slider">
                  <div class="slider__description">
                    <p class="slider__title">Ежемесячный взнос, р.</p>

                    <p class="slider__output">{{ monthlyPayment.currentValue }} ₽.</p>
                  </div>

                  <input
                    class="slider-bicolor "
                    type="range"
                    name="monthlyPayment"
                    :min="monthlyPayment.min"
                    :max="monthlyPayment.max"
                    :step="monthlyPayment.step"
                    :value="monthlyPayment.currentValue"
                    @input="monthlyPayment.currentValue = $event.target.value"
                  />
                </div>
              </div>

              <div class="slider-block__container">
                <div class="slider">
                  <div class="slider__description">
                    <p class="slider__title">
                      Срок выплаты пенсии, лет
                    </p>

                    <p class="slider__output">{{ dueDate.currentValue }} лет</p>
                  </div>

                  <input
                    class="slider-bicolor"
                    type="range"
                    name="dueDate"
                    :min="dueDate.min"
                    :max="dueDate.max"
                    :step="dueDate.step"
                    :value="dueDate.currentValue"
                    @input="dueDate.currentValue = $event.target.value"
                  />
                </div>
              </div>

              <div class="slider-block__checkbox">
                <label tabindex="0" role="checkbox" class="r-checkbox">
                  <span class="r-checkbox__checker"></span>

                  <button class="r-checkbox__switch r-checkbox__switch_invisible"></button>

                  <input id="Checkbox" type="checkbox" class="r-checkbox__input" />

                  <div class="r-checkbox__agree-link">
                    Учитывать социальный налоговый вычет
                  </div>
                </label>
              </div>

              <div class="slider-block__button-container">
                <button class="slider-block__button primary-button">
                  Оформить договор
                </button>
              </div>
            </form>
          </div>

          <div class="pension-info">
            <div class="pension-info__container">
              <div class="pension-info__v-budushchem">
                <div class="pension-info__v-budushchem_wrapper">
                  <p class="pension-info__output-pension">0 ₽.</p>

                  <p class="pension-info__description">
                    Пенсия
                    <span class="pension-info__description_span"> в будущем</span>
                  </p>
                </div>
              </div>

              <div class="pension-info__box">
                <div class="pension-info__calculation">
                  <p class="pension-info__output-sum-nakoplen">0 ₽.</p>
                  <p class="pension-info__description">Накоплено</p>
                </div>

                <div class="pension-info__calculation">
                  <div class="pension-info__calculation_wrapper">
                    <p class="pension-info__output-social">273 000 ₽.</p>

                    <p class="pension-info__description">
                      Размер соц. вычета
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="calculator__graph-container">
          <Graph />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { minValue, maxValue } from 'vuelidate/lib/validators'

import Graph from '../calculator/Graph'

export default {
  mixins: [validationMixin],
  name: 'Calculator',

  data() {
    return {
      gender: 65,
      isActive: false,
      ageSlider: {
        min: 18,
        max: 65,
        step: 1,
        currentValue: 23.5,
      },
      firstPayment: {
        min: 10000,
        max: 1000000,
        step: 10000,
        currentValue: 500000,
      },
      monthlyPayment: {
        min: 0,
        max: 50000,
        step: 500,
        currentValue: 25000,
      },
      dueDate: {
        name: 'dueDate',
        min: 5,
        max: 30,
        step: 1,
        currentValue: 12.5,
      },
    }
  },
  validations: {
    gender: { minValue: minValue(65), maxValue: maxValue(65) },
  },
  components: {
    Graph,
  },
  methods: {
    clickGender() {
      if (this.$v.gender.$invalid) {
        this.isActive = true
        this.ageSlider.max = 60
        this.ageSlider.currentValue = 21
      } else {
        this.isActive = false
        this.ageSlider.max = 65
        this.ageSlider.currentValue = 23.5
      }
    },
  },
}
</script>

<style lang="scss" scoped>
// calculator
.calculator {
  width: 100%;
  background-color: #fff;
  margin: 0 auto;
  padding: 24px 0;

  @media screen and (min-width: 768px) {
    padding: 48px 0;
  }

  &__container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0;

    @media screen and (min-width: 576px) {
      padding: 0 28px;
    }

    @media screen and (min-width: 1024px) {
      padding: 0;
    }
  }

  &__heading {
    display: block;
    font-size: 13px;
    color: #5a646e;
    margin-bottom: 24px;
    margin-left: 24px;

    @media screen and (min-width: 576px) {
      margin-left: 0;
    }

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  &__subheading {
    display: block;
    font-size: 34px;
    line-height: 48px;
    color: #28323c;
    margin-bottom: 24px;
    margin-left: 24px;

    @media screen and (min-width: 576px) {
      margin-left: 0;
    }

    @media screen and (min-width: 768px) {
      font-size: 55px;
      line-height: 73.54px;
      margin-bottom: 44px;
    }
  }

  &__block {
    width: 100%;
    position: relative;
  }

  &__box {
    width: 100%;
    display: block;

    @media screen and (min-width: 576px) {
      display: flex;
      justify-content: space-between;
    }
  }

  &__sliders {
    width: calc(100% - 48px);
    margin-bottom: 48px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 576px) {
      width: 63.53%;
      margin-left: 0;
      margin-right: 0;
    }

    @media screen and (min-width: 1024px) {
      width: 41.66%;
    }
  }

  &__graph-container {
    width: calc(100% - 48px);
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 576px) {
      width: 100%;
    }

    @media screen and (min-width: 1024px) {
      width: 47.92%;
      position: absolute;
      bottom: 41px;
      right: 0;
      z-index: 0;
    }

    @media screen and (min-width: 1440px) {
      padding: 0;
    }
  }
}
// calculator

// pension-info
.pension-info {
  width: 100%;
  margin-bottom: 24px;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 576px) {
    width: 29.41%;
    border-top: none;
    border-bottom: none;
    display: block;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    width: 47.92%;
  }

  &__container {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 576px) {
      display: block;
    }

    @media screen and (min-width: 1024px) {
      display: flex;
    }
  }

  &__v-budushchem {
    padding: 24px;
    width: 46.25%;
    margin-right: 0;
    margin-bottom: 0;
    box-sizing: border-box;

    @media screen and (min-width: 576px) {
      width: 100%;
      margin-bottom: 24px;
      border: 1px solid #e4e4e4;
    }

    @media screen and (min-width: 1024px) {
      width: 35.85%;
      margin-right: 24px;
      margin-bottom: 0;
    }

    &_wrapper {
      width: 100%;
      border-right: 1px solid #e4e4e4;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media screen and (min-width: 576px) {
        border-right: none;
      }
    }
  }

  &__output-pension {
    color: #28323c;
    margin-bottom: 96px;
    font-size: 18px;

    @media screen and (min-width: 576px) {
      margin-bottom: 48px;
    }

    @media screen and (min-width: 1024px) {
      margin-bottom: 96px;
    }
  }

  &__description {
    font-size: 13px;
    color: #5a646e;

    &_span {
      display: block;
      font-size: inherit;
      color: inherit;

      @media screen and (min-width: 576px) {
        display: inline;
        margin-bottom: 48px;
      }

      @media screen and (min-width: 1024px) {
        display: block;
        margin-bottom: 0;
      }
    }
  }

  &__box {
    display: block;
    width: 53.43%;
    border: none;

    @media screen and (min-width: 576px) {
      width: 100%;
      border: 1px solid #e4e4e4;
    }

    @media screen and (min-width: 1024px) {
      width: 58.75%;
    }
  }

  &__calculation {
    width: 100%;
    padding: 24px;

    &_wrapper {
      border-top: 1px solid #e4e4e4;
    }

    &:last-of-type {
      // background-color: red;
      padding-top: 0;
      margin-top: 24px;
    }
  }

  &__output-sum-nakoplen {
    font-size: 18px;
    color: #0a0a0a;
  }

  &__output-social {
    font-size: 18px;
    color: #0a0a0a;
    margin-top: 24px;
  }
}
// pension-info

// sliders
.slider-block {
  width: 100%;

  &__age {
    width: 100%;
    display: block;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      display: flex;
      justify-content: space-between;
      margin-bottom: 48px;
    }
  }

  &__switch {
    min-width: 136px;
    max-width: 136px;
    margin-right: 0;
    margin-bottom: 24px;
    position: relative;

    @media screen and (min-width: 576px) {
      margin-right: 24px;
      margin-bottom: 0px;
    }
  }

  &__container {
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      margin-bottom: 48px;
    }
  }

  &__time-invest-inner {
    font-size: 11px;
    color: #b5bdc8;
    position: absolute;
    bottom: -24px;
    left: 36px;
  }

  &__checkbox {
    width: 100%;
    display: block;
  }

  &__button-container {
    width: 100%;
    max-width: 272px;
    display: block;
    margin-top: 64px;

    @media screen and (min-width: 576px) {
      max-width: 200px;
    }
  }
}
// sliders

.slider {
  position: relative;
  width: 100%;

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
}

// * double-switch Двойной переключатель *
.double-switch {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__item {
    cursor: pointer;
    width: 64px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 24px;
    display: flex;
    opacity: 1;

    transition: color 10s ease;

    &:hover {
      border: 2px solid #50287d;
      opacity: 0.8;
    }

    &:hover .double-switch__title {
      opacity: 1;
    }
  }

  // double-switch__active
  &__active {
    background: #50287d;
    transition: all 0.5s ease;
  }

  // double-switch__not-active
  &__not-active {
    background: #b5bdc8;
    transition: all 0.5s ease;
  }

  &__field {
    display: none;
  }

  &__title {
    opacity: 0.7;
    font-size: 16px;
    color: #ffffff;
    margin: auto;
  }
}
// * double-switch Двойной переключатель *

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

// r-checkbox *
.r-checkbox {
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  display: flex;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
  margin-bottom: 24px;

  &__checker {
    width: 20px;
    height: 20px;
    border: 2px solid #95bef0;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 2px;
    left: 2px;

    &:hover {
      border: 3px solid #95bef0;
    }

    &:hover::before {
      content: '';
      width: 10px;
      height: 10px;
      margin: auto;
      background-color: transparent;
    }
  }
  // r-checkbox__switch"
  &__switch {
    content: '';
    width: 10px;
    height: 10px;

    position: absolute;
    top: 7px;
    left: 7px;
    background-color: #00d2ff;
    transform: scale(1.2);
    transition: all 0.2s linear;

    // r-checkbox__switch_invisible
    &_invisible {
      display: none;
    }

    // r-checkbox__switch_visible
    &_visible {
      display: block;
    }
  }

  &__input {
    display: none;
  }

  &__agree-link {
    line-height: 24px;
    position: absolute;
    top: 0;
    left: 42px;
    color: #5a646e;
  }

  &__link {
    color: #50287d;
    cursor: pointer;
    outline: 0;
    text-decoration: none;
  }
}
// r-checkbox *
</style>
