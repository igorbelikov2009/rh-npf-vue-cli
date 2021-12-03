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
                  <RadioSwitch
                    :defaultValue="genderSwitch.firstValue"
                    :switchName="genderSwitch.switchName"
                    :firstValue="genderSwitch.firstValue"
                    :firstTitle="genderSwitch.firstTitle"
                    :secondValue="genderSwitch.secondValue"
                    :secondTitle="genderSwitch.secondTitle"
                    @onChangeRadio="onChangeGenderRadio"
                  />
                </div>

                <BicolorSlider
                  :title="ageSlider.title"
                  :name="ageSlider.name"
                  :min="ageSlider.min"
                  :max="ageSlider.max"
                  :step="ageSlider.step"
                  :value="ageSlider.currentValue"
                  @input="onInputAgeSlider"
                />
                <!-- Так @input связать без метода
                     @input="ageSlider.currentValue = $event"-->
              </div>

              <BicolorSlider
                v-for="(slider, index) in sliders"
                :key="index"
                :title="slider.title"
                :name="slider.name"
                :min="slider.min"
                :max="slider.max"
                :step="slider.step"
                :value="slider.currentValue"
                @input="onInputSlider($event, slider.name)"
              />
              <!--    onInputSlider($event, slider.name)
                         @input="slider.currentValue = $event" -->

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
          <PensionInfo :pensionValue="pensionValue" :generalAccumValue="generalAccumValue" />
        </div>

        <div class="calculator__graph-container">
          <Graph />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minValue, maxValue, numeric } from 'vuelidate/lib/validators';

import Graph from '../calculator/Graph.vue';
import PensionInfo from '../calculator/PensionInfo.vue';
import BicolorSlider from '../../gui/BicolorSlider.vue';
import RadioSwitch from '../../gui/RadioSwitch.vue';

export default {
  mixins: [validationMixin],
  name: 'Calculator',

  data() {
    return {
      genderValue: 65, // гендерный возраст выхода на пенсию
      ageValue: 30, // текущий возраст
      numberOfYears: 35, // срок инвестирования
      firstInvestValue: '', // первичный взнос
      monthInvestValue: '', // ежемесячный взнос
      timePaymentsValue: '', // срок выплат пенсии
      yearPersent: 0.05, // годовой процент накопления
      generalAccumValue: 5143933, // общие накопления
      pensionValue: 28577, // размер выплаты пенсии

      genderSwitch: {
        switchName: 'gender',
        firstValue: 65,
        firstTitle: 'М',
        secondValue: 60,
        secondTitle: 'Ж',
      },

      ageSlider: {
        title: 'Возраст, лет',
        name: 'ageSlider',
        min: 18,
        max: 65,
        step: 1,
        currentValue: 30,
      },
      sliders: [
        {
          title: ' Первоначальный взнос, р',
          name: 'firstPayment',
          min: 0,
          max: 1000000,
          step: 10000,
          currentValue: 10000,
        },
        {
          title: 'Ежемесячный взнос, р.',
          name: 'monthlyPayment',
          min: 0,
          max: 50000,
          step: 500,
          currentValue: 5000,
        },
        {
          title: 'Срок выплаты пенсии, лет',
          name: 'dueDate',
          min: 5,
          max: 30,
          step: 1,
          currentValue: 15,
        },
      ],
    };
  },
  validations: {
    genderValue: { minValue: minValue(65), maxValue: maxValue(65) },
    sliders: { required, numeric },
    ageSlider: { required, numeric },
  },
  components: {
    PensionInfo,
    Graph,
    BicolorSlider,
    RadioSwitch,
  },
  methods: {
    onChangeGenderRadio(valueRadio) {
      this.genderValue = valueRadio;
      this.changeAttrAgeSlider();
      // console.log(this.genderValue)
      this.countOnCalculator();
    },

    changeAttrAgeSlider() {
      if (this.genderValue === 65) {
        this.ageSlider.max = 65;
        this.ageSlider.currentValue = 23.5;
      } else if (this.genderValue === 60) {
        this.ageSlider.max = 60;
        this.ageSlider.currentValue = 21;
      }
    },

    onInputAgeSlider(event) {
      this.ageSlider.currentValue = event;
      // console.log(this.ageSlider.currentValue, typeof this.ageSlider.currentValue)

      //
      this.countOnCalculator();
    },
    onInputSlider(value, sliderName) {
      const currentSlider = this.sliders.find(slider => {
        return slider.name === sliderName;
      });

      currentSlider.currentValue = value;
      this.countOnCalculator();

      // console.log('ok', currentSlider)
    },

    countOnCalculator(event) {
      this.genderValue = this.genderValue;
      this.ageValue = this.ageSlider.currentValue;
      this.numberOfYears = this.genderValue - this.ageValue;
      this.firstInvestValue = this.sliders[0].currentValue;
      this.monthInvestValue = this.sliders[1].currentValue;
      this.timePaymentsValue = this.sliders[2].currentValue;
      //
      // console.log('genderValue:', this.genderValue, typeof this.genderValue)
      // console.log('ageValue:', this.ageValue)
      // console.log('numberOfYears:', this.numberOfYears)
      // console.log('firstInvestValue:', this.firstInvestValue)
      // console.log('monthInvestValue:', this.monthInvestValue)
      // console.log('timePaymentsValue:', this.timePaymentsValue)

      // // обнуляем каждый раз накопления от первичного взноса
      let firstInvestAccumValue = 0;
      // // обнуляем каждый раз накопления ежемесячных взносов
      let monthInvestAccumValue = 0;
      // // общие накопления
      // this.generalAccumValue = 0
      // debugger;

      // // вычисляем общий процент накопления за несколько лет
      let generalPercent = 1 + this.yearPersent;
      const percentNumberOfYears = generalPercent ** this.numberOfYears;
      // console.log('percent:', percentNumberOfYears)

      // // вычисляем накопления от первичного взноса
      firstInvestAccumValue = this.firstInvestValue * percentNumberOfYears;
      firstInvestAccumValue = Math.round(firstInvestAccumValue);
      // console.log('firstInvestAccumValue:' + firstInvestAccumValue)

      // // вычисляем количество месяцев ежемесячных взносов
      let numberOfMonths = this.numberOfYears * 12;
      // console.log('numberOfMonths:' + numberOfMonths)

      // // вычисляем накопления ежемесячных взносов за нескольк лет (количество месяцев ежемесячных взносов)
      monthInvestAccumValue = 0; // обнуляем при каждом новом движении слайдера или свиттча
      monthInvestAccumValue = Math.round(
        this.monthInvestValue * numberOfMonths +
          this.monthInvestValue * (numberOfMonths - 1) * ((this.yearPersent * numberOfMonths) / 24)
      );
      // console.log('monthInvestAccumValue:' + monthInvestAccumValue)

      // // вычисляем общие накопления
      this.generalAccumValue = 0;
      this.generalAccumValue = Math.round(firstInvestAccumValue + monthInvestAccumValue);
      // console.log('generalAccumValue:' + this.generalAccumValue)

      // // вычисляем размер ежемесячной пенсии
      this.pensionValue = Math.round(this.generalAccumValue / this.timePaymentsValue / 12);
      // console.log('pensionValue:', this.pensionValue)
      // console.log('finish')
    },
  },
};
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

// sliders
.slider-block {
  width: 100%;

  &__age {
    width: 100%;
    display: block;

    @media screen and (min-width: 576px) {
      display: flex;
      justify-content: space-between;
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
