<template>
  <section class="calculator-image">
    <div class="calculator-image__container">
      <div class="calculator-image__bloc-images">
        <img
          class="calculator-image__image"
          src="@/assets/images/main/manBackground.jpg"
          alt="manBackground"
        />

        <img class="calculator-image__image" src="@/assets/images/main/man.png" alt="man" />

        <img
          class="calculator-image__image"
          src="@/assets/images/main/businessWork.jpg"
          alt="businessWork"
        />

        <div class="calculator-image__attention">
          <img class="calculator-image__icon" src="@/assets/icons/attention.svg" alt="attention" />
          <p class="calculator-image__description">
            Калькулятор позволяет произвести ориентировочный расчет будущей пенсии. Не является
            офертой.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CalculatorImages',
}
</script>

<style lang="scss" scoped>
// calculator-image
.calculator-image {
  width: 100%;
  background-color: #fff;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 48px;

  @media screen and (min-width: 768px) {
    padding-top: 48px;
    padding-bottom: 120px;
  }

  &__container {
    width: 100%;
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 24px;

    @media screen and (min-width: 576px) {
      padding: 0 28px;
    }

    @media screen and (min-width: 1216px) {
      padding: 0;
    }
  }

  &__bloc-images {
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }

  &__image {
    aspect-ratio: 660 / 440;
    width: 100%;
    margin-bottom: 11px;

    @media screen and (min-width: 576px) {
      max-width: calc(50% + 56px);
      margin-bottom: 0;
    }

    @media screen and (min-width: 768px) {
      max-width: calc(50% + 80px);
    }

    &:nth-of-type(1) {
      position: static;
      z-index: 3;

      @media screen and (min-width: 576px) {
        margin-top: 120px;
        bottom: 0;
        left: 0;
      }
    }

    &:nth-of-type(2) {
      position: absolute;
      z-index: 3;

      @media screen and (min-width: 576px) {
        position: absolute;
        margin-top: 120px;
        bottom: 0;
        left: 0;
      }
    }

    &:nth-of-type(3) {
      position: static;
      z-index: 1;
      margin-bottom: 35px;

      @media screen and (min-width: 576px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }

  &__attention {
    width: 100%;
    display: block;
    position: relative;

    @media screen and (min-width: 576px) {
      max-width: calc(50% - 60px);
      position: absolute;
      bottom: 0;
      right: 0;
    }

    @media screen and (min-width: 768px) {
      max-width: calc(50% - 92px);
    }
  }

  &__icon {
    position: absolute;
    top: 2px;
    left: 0px;
  }

  &__description {
    display: block;
    font-size: 13px;
    color: #78828c;
    margin-left: 36px;

    // &::before {
    //   content: url(@/assets/icons/attention.svg);
    //   position: absolute;
    //   top: 0;
    //   left: -36px;
    // }
  }
} // calculator-image
</style>
