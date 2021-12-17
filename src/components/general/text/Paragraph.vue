<template>
  <p class="paragraph" :class="{ paragraph_before: isHasBefore }">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    isHasBefore: { type: Boolean },
    text: { type: String },
  },
};
</script>

<style lang="scss" scoped>
// paragraph
.paragraph {
  margin: 12px 0;
  color: #5a646e;
  font-weight: 400;
  vertical-align: baseline;
  box-sizing: border-box;

  // paragraph_before
  &_before {
    position: relative;
    margin-left: 32px;

    &::before {
      position: absolute;
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #50287d;
      left: -24px;
      top: 8px;
    }
  }
}
// paragraph
</style>
