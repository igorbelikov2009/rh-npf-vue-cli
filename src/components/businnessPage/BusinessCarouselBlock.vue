<template>
  <section class="carousel">
    <div class="carousel__block">
      <BusinessHeader
        :NoCursorLeft="isNoCursorLeft"
        :BlurredLeft="isBlurredLeft"
        :NoCursorRight="isNoCursorRight"
        :BlurredRight="isBlurredRight"
        @onClickLeft="onClickLeft"
        @onClickRight="onClickRight"
      />

      <div class="carousel__visable-block">
        <div class="carousel__hidden-block" :style="scrollableElementStyle">
          <BusinessCarousel
            :q="carouselValue"
            @getAmountChildren="getAmountChildren"
            @emitValueRadio="onClickRadio"
          />
        </div>
      </div>
    </div>

    <div class="carousel__box-for-transmitted">
      <CarouselTransmittedText
        v-for="(subheading, index) in subheadings"
        :key="index"
        :isActive="carouselValue === index"
        :subheading="subheading.text"
      />
    </div>
  </section>
</template>

<script>
import BusinessHeader from './BusinessHeader.vue';
import BusinessCarousel from './BusinessCarousel.vue';
import CarouselTransmittedText from '../businnessPage/CarouselTransmittedText.vue';

export default {
  name: 'BusinessCarouselBlock',
  data() {
    return {
      // меняем цвет у стрелок и свойства курсора на "cursor: default;"
      isNoCursorLeft: true,
      isBlurredLeft: true,
      isNoCursorRight: false,
      isBlurredRight: false,

      carouselValue: 0, // значение счётчика, индекс CarouselSquare[carouselValue], равно значению valueRadio и связано с ним
      amountChildren: 0, // количество детей BusinessCarousel
      right: 0, // значение прокрутки scrollableElement, записываемое в его атрибут style
      stepScrolling: 224, // шаг прокрутки
      subheadings: [
        { text: 'Сохранение статуса и образа жизни после выхода на пенсию.' },
        { text: 'Увеличение лояльности работников к работодателю.' },
        { text: 'Комфортное увольнение на пенсию без существенной потери доходов.' },
        {
          text:
            'Уплата пенсионных взносов в пользу работника зависит от соблюдения им трудовой дисциплины.',
        },
        {
          text:
            'Зависимость размера пенсионных взносов от продолжительности участия в пенсионной программе, должностных грейдов и стажа.',
        },
        { text: 'Использование льгот по налогу на прибыль.' },
        { text: 'Передача Фонду функции социальной поддержки.' },
      ],
    };
  },
  computed: {
    scrollableElementStyle() {
      return {
        right: `${this.right}px`,
      };
    },
  },
  methods: {
    // количество детей BusinessCarousel
    getAmountChildren(amountChildrenContainer) {
      this.amountChildren = amountChildrenContainer;
      // console.log('getAmountChildren', this.amountChildren);
    },

    // getCarouselValue
    getCarouselValueOnClickArrowLeft() {
      if (this.carouselValue !== 0) this.carouselValue--;
      if (this.carouselValue < 0) this.carouselValue = 0;
      console.log('carouselValue: ' + this.carouselValue);
    },
    getCarouselValueOnClickArrowRight() {
      if (this.carouselValue < this.amountChildren - 1) {
        this.carouselValue++;
        console.log('carouselValue: ' + this.carouselValue);
      } else {
        this.carouselValue === this.amountChildren - 1;
        console.log('carouselValue: ' + this.carouselValue);
      }
    },

    // scrolling
    scrollingBusinessCarousel() {
      this.right = this.carouselValue * this.stepScrolling;
      // console.log('right: ' + this.right);
    },

    // меняем цвет у стрелок и свойства курсора на "cursor: default;"
    changeColorArrowsOnClickArrowLeft() {
      this.isNoCursorRight = false;
      this.isBlurredRight = false;

      if (this.right == 0) {
        this.isNoCursorLeft = true;
        this.isBlurredLeft = true;
      }
    },
    changeColorArrowOnClickArrowRight() {
      if (this.carouselValue < this.amountChildren - 1) {
        this.isNoCursorLeft = false;
        this.isBlurredLeft = false;
      } else {
        this.isNoCursorRight = true;
        this.isBlurredRight = true;
      }
    },
    changeColorArrowOnClickRadio() {
      if (this.carouselValue === 0) {
        this.isNoCursorLeft = true;
        this.isBlurredLeft = true;
        this.isNoCursorRight = false;
        this.isBlurredRight = false;
      } else if (this.carouselValue === this.amountChildren - 1) {
        this.isNoCursorLeft = false;
        this.isBlurredLeft = false;
        this.isNoCursorRight = true;
        this.isBlurredRight = true;
      } else {
        this.isNoCursorLeft = false;
        this.isBlurredLeft = false;
        this.isNoCursorRight = false;
        this.isBlurredRight = false;
      }
    },

    // получаем значения радио и запускаем функции
    onClickRadio(carouselValue) {
      this.carouselValue = carouselValue;
      this.changeColorArrowOnClickRadio();
      this.scrollingBusinessCarousel();
      console.log('carouselValue:' + this.carouselValue);
    },

    // запускаем функции
    onClickLeft() {
      this.getCarouselValueOnClickArrowLeft();
      this.scrollingBusinessCarousel();
      this.changeColorArrowsOnClickArrowLeft();
    },
    onClickRight() {
      this.getCarouselValueOnClickArrowRight();
      this.scrollingBusinessCarousel();
      this.changeColorArrowOnClickArrowRight();
    },
  },
  components: {
    BusinessHeader,
    BusinessCarousel,
    CarouselTransmittedText,
  },
};
</script>

<style lang="scss" scoped>
// carousel
.carousel {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #fff;
  padding-top: 24px;
  padding-bottom: 48px;
  padding-left: 24px;
  padding-right: 24px;

  @media screen and (min-width: 576px) {
    padding-left: 28px;
    padding-right: 28px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 48px;
    padding-right: 0;
    padding-left: 0;
  }

  &__block {
    width: 100%;
    padding: 48px 0;
    overflow: hidden;
    // исправить на overflow: hidden;
    // overflow-x: scroll;
  }

  &__visable-block {
    position: relative;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }

  &__hidden-block {
    transition: all 600ms ease;
    position: relative;
  }

  &__box-for-transmitted {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }

  &__subheading {
    font-size: 18px;
    line-height: 1.5rem;
    font-weight: 400;
    color: #28323c;
    margin: 24px 0;
  }
}
// carousel
</style>
