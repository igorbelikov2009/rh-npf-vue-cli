<template>
  <div class="notifics-content" v-if="isContentVisible">
    <p class="notifics-content__paragraph">
      <span class="notifics-content__paragraph-span"> {{ date }}</span>

      <span class="notifics-content__paragraph-span">
        {{ description }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'NotificsContent',

  props: {
    isContentVisible: { type: Boolean, default: false },
    date: { type: String },
    description: { type: String },
  },
};
</script>

<style lang="scss" scoped>
// notifics-content
.notifics-content {
  display: block;

  &__paragraph {
    display: block;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    margin-top: 24px;
    margin-bottom: 12px;
    color: #5a646e;
  }

  &__paragraph-span {
    display: block;
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
    font-style: normal;
    font-weight: 400;
  }
}
// notifics-content
</style>
