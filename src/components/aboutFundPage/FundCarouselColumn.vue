<template>
  <article
    class="fund-carousel-column"
    :class="{ 'fund-carousel-column_clear': isClear }"
    ref="carouselColumn"
  >
    <div class="fund-carousel-column__title">{{ title }}</div>

    <div class="fund-carousel-column__line"></div>

    <p class="fund-carousel-column__description">{{ description }}</p>
  </article>
</template>

<script>
export default {
  name: 'FundCarouselColumn',

  data() {
    return {
      // ширина столбца
      widthColumn: '',
    };
  },

  props: {
    isClear: { type: Boolean, default: false },
    title: { type: String },
    description: { type: String },
  },

  mounted() {
    this.getWidthColumn();
  },

  methods: {
    // ширина столбца
    getWidthColumn() {
      const carouselColumn = this.$refs.carouselColumn;
      this.widthColumn = carouselColumn.offsetWidth;
      // console.log('widthColumn :' + this.widthColumn)
      this.$emit('getWidthColumn', this.widthColumn);
    },
  },
};
</script>

<style lang="scss" scoped>
.fund-carousel-column {
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

  // fund-carousel-column_clear
  &_clear {
    opacity: 1;
    transition: opacity 0.5s;
    transition-property: opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;
  }

  // fund-carousel-column_not-visible
  &_not-visible {
    display: none;
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
}
</style>
