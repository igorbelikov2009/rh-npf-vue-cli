<template>
  <div>
    <transition name="my-input__title">
      <p class="my-input__title" v-if="!isActive">{{ title }}</p>
    </transition>

    <transition name="my-input__title-else">
      <p class="my-input__title-else" v-if="isActive">{{ title }}</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'InputTitle',

  props: {
    title: { type: String },
    isActive: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss" scoped>
.my-input {
  &__title {
    position: absolute;
    top: 24px;
    left: 0px;
    font-size: 16px;
    color: #78828c;
  }

  // transition name="my-input__title"
  &__title-leave-active,
  &__title-enter-active {
    transition: all 0.5s;
  }

  &__title-leave-to,
  &__title-enter {
    top: 0px;
    font-size: 11px;
  }

  // transition name="my-input__title-else"
  &__title-else {
    position: absolute;
    top: 0;
    left: 0px;
    font-size: 11px;
    color: #78828c;
  }

  &__title-else-enter-active {
    transition: all 0.01s 0.49s;
  }

  &__title-else-enter {
    opacity: 0;
  }
}
</style>
