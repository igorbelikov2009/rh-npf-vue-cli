<template>
  <a class="logotype-link" href="#">
    <img class="logotype-link__image" src="/logotype/logoWhite.svg" alt="" />

    <img class="logotype-link__image" src="/logotype/logoWhiteSmall.svg" alt="" />
  </a>
</template>

<script>
export default {
  name: 'Logotypes',
};
</script>

<style lang="scss" scoped>
.logotype-link {
  text-decoration: none;
  outline: none;

  &__image {
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
