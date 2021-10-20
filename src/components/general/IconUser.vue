<template>
  <img v-show="!isIconVisible" class="icon-user__icon" :src="imgUrl" alt="user" />

  <!-- <img
      v-show="isIconVisible"
      class="icon-user__icon"
      src="@/assets/icons/generals/user/colored.svg"
      alt="user"
    />

    <img
      v-show="isIconVisible"
      class="icon-user__icon"
      src="@/assets/icons/generals/user/light.svg"
      alt="user"
    />

    <img
      v-show="isIconVisible"
      class="icon-user__icon"
      src="@/assets/icons/generals/user/dark.svg"
      alt="user"
    /> -->
</template>

<script>
export default {
  props: {
    isIconVisible: {
      type: Boolean,
      default: true,
    },

    imgUrl: {
      type: String,
      default: '@/assets/icons/generals/user/light.svg',
    },
  },
}
</script>

<style lang="scss" scoped>
.icon-user {
  width: 24px;
  height: 24px;
  position: relative;

  &__icon {
    width: 24px;
    height: 24px;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
  }
}
</style>
