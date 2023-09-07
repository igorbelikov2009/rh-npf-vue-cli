<template>
  <div class="statistics-card">
    <div class="statistics-card__icon">
      <DarkIcon :isDecreased="ifDecreased" :icon="iconName" />
      <!-- <img class="statistics-card__icon" :src="imgSrc" :alt="imgAlt" /> -->
    </div>

    <div>
      <p class="statistics-card__title">
        {{ title }} <span class="statistics-card__span"> {{ span }} </span>
      </p>
      <p class="statistics-card__subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
import DarkIcon from '@/components/general/DarkIcon.vue';
export default {
  name: 'StatisticsCard',
  data() {
    return {
      ifDecreased: false,
      // iconName: 'User',
    };
  },

  props: {
    iconName: { type: String },

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

  components: {
    DarkIcon,
  },
};
</script>

<style lang="scss" scoped>
.statistics-card {
  width: 100%;
  max-width: 100%;
  min-height: 96px;
  border-top: 1px solid #e4e4e4;
  border: 1px solid #e4e6e8;
  box-sizing: border-box;
  padding: 24px;
  display: flex;

  @media screen and (min-width: 576px) {
    max-width: 260px;
    width: 33.33%;
    display: block;
  }

  @media screen and (min-width: 768px) {
    width: 25%;
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
    line-height: 24px;
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
    line-height: 24px;
    color: #5a646e;
  }
}
</style>
