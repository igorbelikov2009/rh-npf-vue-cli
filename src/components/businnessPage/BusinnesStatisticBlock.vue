<template>
  <div class="businnes-statistic__block">
    <img class="businnes-statistic__icon" :src="imgSrc" :alt="imgAlt" />

    <p class="businnes-statistic__description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'BusinnesStatisticBlock',

  props: {
    imgSrc: { type: String },
    imgAlt: { type: String },
    description: { type: String },
  },
};
</script>

<style lang="scss" scoped>
// businnes-statistic
.businnes-statistic {
  &__block {
    width: 100%;
    padding: 24px;
    display: flex;
    min-height: 96px;
    border-top: 1px solid #e4e4e4;

    &:first-of-type {
      @media screen and (min-width: 576px) {
        border-left: 1px solid #e4e4e4;
      }

      @media screen and (min-width: 768px) {
        border-bottom: 1px solid #e4e4e4;
      }
    }

    &:nth-of-type(2),
    &:nth-of-type(3) {
      @media screen and (min-width: 576px) {
        border-bottom: 1px solid #e4e4e4;
      }
    }

    &:last-of-type {
      border-bottom: 1px solid #e4e4e4;

      @media screen and (min-width: 576px) {
        border-left: 1px solid #e4e4e4;
      }
    }

    @media screen and (min-width: 576px) {
      width: 33.33%;
      display: block;
      border-right: 1px solid #e4e4e4;
    }

    @media screen and (min-width: 768px) {
      width: 25%;
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
    margin-right: 24px;
    margin-bottom: 0;

    @media screen and (min-width: 576px) {
      margin-bottom: 80px;
    }
  }

  &__description {
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
  }
}
// businnes-statistic
</style>
