<template>
  <img v-show="!isIconVisible" class="icon-user__icon" :src="imgUrl" alt="user" />

  <!-- <img
      v-show="isIconVisible"
      class="icon-user__icon"
      src="@/assets/icons/triple/user/colored.svg"
      alt="user"
    />

    в css TopMenu  установлен hover на 
    top-menu__button-switch, 
    .icon-user__icon:first-of-type
    .icon-user__icon:nth-of-type(2)

    <img
      v-show="isIconVisible"
      class="icon-user__icon"
      src="@/assets/icons/triple/user/light.svg"
      alt="user"
    />

    <img
      v-show="isIconVisible"
      class="icon-user__icon"
      src="@/assets/icons/triple/user/dark.svg"
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
      default: '@/assets/icons/triple/user/light.svg',
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
