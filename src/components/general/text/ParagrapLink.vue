<template>
  <p class="paragraph" :class="{ paragraph_before: isHasBefore }">
    {{ paragraphText }}
    <a class="paragraph__link" :href="linkHref" v-if="isHasLink"> {{ linkText }} </a>
    {{ paragraphTextAfter }}
  </p>
</template>

<script>
export default {
  name: 'ParagrapLink',

  props: {
    isHasBefore: { type: Boolean },
    paragraphText: { type: String },
    paragraphTextAfter: { type: String },
    isHasLink: { type: Boolean },
    linkHref: { type: String },
    linkText: { type: String },
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

  &__link {
    cursor: pointer;
    color: #50287d;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    text-decoration: none;
  }
}
// paragraph
</style>
