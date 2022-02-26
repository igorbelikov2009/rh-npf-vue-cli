<template>
  <div>
    <p class="spec-depository__paragraph">
      <span class="spec-depository__subheading"> {{ subheading }} </span>

      <span class="spec-depository__title"> {{ title }} </span>
    </p>

    <p class="spec-depository__paragraph">
      <span class="spec-depository__title"> {{ subtitle }} </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SpecDepositoryBlock',

  props: {
    subheading: { type: String },
    title: { type: String },
    subtitle: { type: String },
  },
};
</script>

<style lang="scss" scoped>
.spec-depository {
  &__paragraph {
    display: block;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    margin-top: 24px;
    margin-bottom: 12px;
    color: #5a646e;
  }

  &__subheading {
    display: block;
    font-weight: 700;
    color: #010;
  }

  &__title {
    display: block;
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
    font-style: normal;
    font-weight: 400;
  }
}
</style>
