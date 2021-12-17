<template>
  <article
    class="carousel__column"
    :class="{ carousel__column_clear: isClear }"
    ref="carouselColumn"
  >
    <div class="carousel__title">{{ titleYear }}</div>

    <div class="carousel__line" v-if="isHasLine"></div>

    <a class="carousel__link" :href="linkHref"> {{ linkTitle }} </a>

    <p class="carousel__description">{{ description }}</p>

    <p class="carousel__date">{{ date }}</p>
  </article>
</template>

<script>
export default {
  name: 'CarouselColumn',

  data() {
    return {
      // ширина столбца
      widthColumnBox: '',
    };
  },

  props: {
    isClear: { type: Boolean },
    titleYear: { type: String },
    isHasLine: { type: Boolean },
    linkHref: { type: String },
    linkTitle: { type: String },
    description: { type: String },
    date: { type: String },
  },

  mounted() {
    this.getWidthColumn();
  },

  methods: {
    // ширина столбца
    getWidthColumn() {
      const carouselColumn = this.$refs.carouselColumn;
      this.widthColumnBox = carouselColumn.offsetWidth;
      // console.log('widthColumnBox :' + this.widthColumnBox)
      this.$emit('getWidthColumn', this.widthColumnBox);
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  &__column {
    min-width: 83.33vw;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-right: 24px;

    opacity: 0.4;
    transition: opacity 0.5s;
    transition-property: opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;
    //

    @media screen and (min-width: 576px) {
      min-width: 480px;
      padding-right: 140px;
    }

    @media screen and (min-width: 1024px) {
      min-width: 500px;
      padding-right: 140px;
    }

    // carousel__column_clear
    &_clear {
      opacity: 1;
      transition: opacity 0.5s;
      transition-property: opacity;
      transition-duration: 0.5s;
      transition-timing-function: ease;
      transition-delay: 0s;
    }

    // carousel__column_not-visible
    &_not-visible {
      display: none;
    }
  }

  &__title {
    font-size: 34px;
    line-height: 48px;
    margin-bottom: 24px;
  }

  &__line {
    width: 100vw;
    height: 1px;
    background: #e4e4e4;
    position: relative;
    margin-bottom: 24px;

    &::before {
      content: ' ';
      position: absolute;
      left: 0;
      top: -4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #28323c;
    }
  }

  &__link {
    display: block;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 24px;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    color: #8967b1;

    &:hover {
      color: #50287d;
    }
  }

  &__description {
    display: block;
    font-size: 13px;
    line-height: 24px;
    color: #78828c;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  &__date {
    display: block;
    font-size: 13px;
    color: #5a646e;
    margin-bottom: 48px;

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }
}
</style>
