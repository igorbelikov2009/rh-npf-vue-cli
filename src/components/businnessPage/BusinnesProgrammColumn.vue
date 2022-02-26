<template>
  <div class="column">
    <div class="column__top-block">
      <img class="column__icon" :src="imgSrc" :alt="imgAlt" />

      <h2 class="column__title">{{ title }}</h2>
    </div>

    <div class="column__description-block">
      <BusinnesProgrammDescription
        v-for="(description, index) in descriptions"
        :key="index"
        :text="description.text"
        :isHasText="description.isHasText"
      />
    </div>
  </div>
</template>

<script>
import BusinnesProgrammDescription from '../businnessPage/BusinnesProgrammDescription.vue';
export default {
  name: 'BusinnesProgrammColumn',

  props: {
    imgSrc: { type: String },
    imgAlt: { type: String },
    title: { type: String },
    descriptions: { type: Array },
  },
  components: {
    BusinnesProgrammDescription,
  },
};
</script>

<style lang="scss" scoped>
// column
.column {
  width: 100%;
  margin-bottom: 48px;

  @media screen and (min-width: 576px) {
    width: calc(50% - 24px);
    margin-left: 12px;
    margin-right: 12px;
  }

  &__top-block {
    width: 100%;
    display: flex;
    margin-bottom: 24px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;

    @media screen and (min-width: 576px) {
      margin-right: 24px;
    }
  }

  &__title {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #28323c;
  }

  &__description-block {
    margin-left: 0;

    @media screen and (min-width: 576px) {
      margin-left: 40px;
    }
  }
}
// column
</style>
