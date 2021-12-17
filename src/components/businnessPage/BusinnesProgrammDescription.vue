<template>
  <p class="description" v-if="isHasText">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: 'BusinnesProgrammDescription',

  props: {
    text: { type: String },
    isHasText: { type: Boolean },
  },
};
</script>

<style lang="scss" scoped>
.description {
  font-size: 16px;
  line-height: 24px;
  color: #5a646e;
  position: relative;
  padding-left: 24px;
  margin-top: 8px;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    line-height: 24px;
    background-color: #50287d;
    position: absolute;
    top: 10px;
    left: 9px;
  }
}
</style>
