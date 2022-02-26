<template>
  <label class="carousel__square" :class="{ 'carousel__square-actived': isActived }">
    <CarouselSquareRadio :radioValue="valueRadio" @emitValue="onClickCarouselSquare" />
    <div class="carousel__icons">
      <TripleIcon :hovered="isOuterHovered" :light="isLight" :icon="icon" />
    </div>

    <p class="carousel__title">
      {{ title }}
    </p>
  </label>
</template>

<script>
import TripleIcon from '@/components/general/TripleIcon.vue';
import CarouselSquareRadio from '@/components/businnessPage/CarouselSquareRadio.vue';
export default {
  name: 'CarouselSquare',

  data() {
    return {
      currentValue: 0,
      isLight: false,
    };
  },
  props: {
    valueRadio: { type: String },
    imgColored: { type: String },
    imgDark: { type: String },
    icon: { type: String },
    title: { type: String },
    isOuterHovered: { type: Boolean },
    isActived: { type: Boolean },
  },
  methods: {
    // emitValue(event) {
    //   this.currentValue = Number(event.target.value);
    //   this.$emit('onClickCarouselSquare', this.currentValue);
    //   console.log('currentValue: ' + this.currentValue);
    //   // this.$emit('onClickCarouselSquare', Number(event.target.value));
    // },
    onClickCarouselSquare(valueRadio) {
      this.currentValue = valueRadio;
      // console.log('currentValue: ' + this.currentValue);
      this.$emit('onClickCarouselSquare', this.currentValue);
    },
  },
  components: {
    TripleIcon,
    CarouselSquareRadio,
  },
};
</script>

<style lang="scss" scoped>
// carousel
.carousel {
  &__square {
    display: inline-block;
    white-space: normal;
    min-width: 200px;
    padding: 24px;
    margin-right: 24px;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      z-index: 0;
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      // box-shadow: 0px 4px 6px #d2dce6;

      transition: box-shadow 0.3s, width 0.3s, height 0.3s, top 0.3s, left 0.3s;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }

    &:hover .carousel__image:first-of-type {
      display: block;
    }

    &:hover .carousel__image:last-of-type {
      display: none;
    }
  }

  // "carousel__square-actived"
  &__square-actived {
    &::before {
      content: '';
      position: absolute;
      z-index: 0;
      border: 1px solid #e4e4e4;
      box-shadow: 0px 4px 6px #d2dce6;
      transition: box-shadow 0.3s, width 0.3s, height 0.3s, top 0.3s, left 0.3s;
      width: calc(100% + 8px);
      height: calc(100% + 8px);
      left: 0px;
      top: 0px;
    }
  }

  &__radio {
    display: none;
  }

  &__icons {
    position: relative;
    width: 24px;
    height: 24px;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      margin-bottom: 48px;
    }
  }

  &__title {
    display: block;
    min-width: 140px;
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
    margin-bottom: 48px;
  }
}
// carousel
</style>
