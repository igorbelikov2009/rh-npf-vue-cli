<template>
  <a class="logotype-link" href="#">
    <div class="logotype-link__block">
      <img v-if="isBackgroundWhite" src="../../../public/logotype/logoColored.svg" alt="logotype" />

      <img v-else src="../../../public/logotype/logoWhite.svg" alt="logotype" />
    </div>

    <div class="logotype-link__block">
      <img
        v-if="isBackgroundWhite"
        src="../../../public/logotype/logoColoredSmall.svg"
        alt="logotype"
      />

      <img v-else src="../../../public/logotype/logoWhiteSmall.svg" alt="logotype" />
    </div>
  </a>
</template>

<script>
export default {
  name: 'Logotypes',

  props: {
    isBackgroundWhite: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.logotype-link {
  text-decoration: none;
  outline: none;

  &__block {
    display: none;

    @media screen and (min-width: 576px) {
      display: block;
    }

    &:last-of-type {
      display: block;

      @media screen and (min-width: 576px) {
        display: none;
      }
    }
  }
}
</style>
