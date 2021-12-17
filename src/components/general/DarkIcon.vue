<template>
  <img
    class="dark-icon"
    :src="imgUrl"
    :alt="icon"
    :class="{ 'dark-icon__decreased': isDecreased }"
  />
</template>

<script>
export default {
  name: 'DarkIcon',

  props: {
    icon: {
      type: String,
      required: true,
    },
    isDecreased: { type: Boolean, default: false },
  },

  computed: {
    imgUrl() {
      return `/icons/triple/${this.icon}/Dark.svg`;
    },
  },
};
</script>

<style lang="scss" scoped>
.dark-icon {
  height: 24px;
  width: 24px;

  // dark-icon__decreased
  &__decreased {
    height: 18px;
    width: 18px;
  }
}
</style>
