<template>
  <div class="fund-indicator-row">
    <p class="fund-indicator-row__title">
      {{ title }}
    </p>

    <p class="fund-indicator-row__subtitle">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'FundPerformanceIndicatorsRow',

  props: {
    title: { type: String },
    subtitle: { type: String },
  },
};
</script>

<style lang="scss" scoped>
.fund-indicator-row {
  width: 100%;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;

  &:first-of-type {
    padding-top: 0;
  }

  &__title {
    width: 100%;
    max-width: 560px;
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;

    @media screen and (min-width: 576px) {
      font-size: 16px;
    }
  }

  &__subtitle {
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
    margin-left: 12px;

    @media screen and (min-width: 576px) {
      font-size: 16px;
      margin-left: 40px;
    }
  }
}
</style>
