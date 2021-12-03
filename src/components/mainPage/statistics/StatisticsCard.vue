<template>
  <div class="statistics-card">
    <img class="statistics-card__icon" :src="imgSrc" :alt="imgAlt" />
    <div>
      <p class="statistics-card__title">
        {{ title }} <span class="statistics-card__span"> {{ span }} </span>
      </p>
      <p class="statistics-card__subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticsCard',

  props: {
    imgSrc: {
      type: String,
      default: 'https://tsum.by/images/no-photo.png',
    },

    imgAlt: { type: String },

    title: {
      type: String,
    },
    span: {
      type: String,
    },
    subtitle: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.statistics-card {
  width: 100%;
  border: 1px solid #e4e6e8;
  box-sizing: border-box;
  padding: 24px;
  display: flex;

  @media screen and (min-width: 576px) {
    padding: 32px 32px 48px 32px;
    display: block;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 24px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    margin-right: 24px;
    margin-bottom: 0;

    @media screen and (min-width: 576px) {
      margin-bottom: 64px;
    }
  }

  &__title {
    font-size: 18px;
    color: #28323c;
    margin-bottom: 12px;

    @media screen and (min-width: 576px) {
      margin-bottom: 24px;
    }
  }

  &__span {
    display: block;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }

  &__subtitle {
    font-size: 13px;
    color: #5a646e;
  }
}
</style>
