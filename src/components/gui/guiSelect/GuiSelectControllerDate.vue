<template>
  <div v-if="isTitleVisible">
    <p class="select-controller-date">{{ date }}</p>
  </div>
</template>

<script>
export default {
  name: 'GuiSelectControllerDate',

  props: {
    isTitleVisible: { type: Boolean, default: true },
    date: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.select-controller-date {
  display: block;
  padding: 18px 12px;
  font-size: 14px;
  line-height: 18px;
  color: #28323c;
  font-weight: 400;
}
</style>
