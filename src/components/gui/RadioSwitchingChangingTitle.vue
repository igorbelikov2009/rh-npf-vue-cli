<template>
  <div v-if="ifTitleVisible">
    <p class="switching__duplicate-inner-text">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'RadioSwitchingChangingTitle',

  props: {
    ifTitleVisible: { type: Boolean, default: true },
    name: { type: String },
  },
};
</script>

<style lang="scss" scoped>
.switching {
  &__duplicate-inner-text {
    display: block;
    padding: 18px 12px;
    font-size: 14px;
    line-height: 18px;
    color: #28323c;
    font-weight: 400;
  }
}
</style>
