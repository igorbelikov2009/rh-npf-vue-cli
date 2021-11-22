<template>
  <div class="pension-info">
    <div class="pension-info__container">
      <div class="pension-info__v-budushchem">
        <div class="pension-info__v-budushchem_wrapper">
          <p class="pension-info__output-pension">{{ pensionValue }} ₽.</p>

          <p class="pension-info__description">
            Пенсия
            <span class="pension-info__description_span"> в будущем</span>
          </p>
        </div>
      </div>

      <div class="pension-info__box">
        <div class="pension-info__calculation">
          <p class="pension-info__output-sum-nakoplen">{{ generalAccumValue }} ₽.</p>

          <p class="pension-info__description">Накоплено</p>
        </div>

        <div class="pension-info__calculation">
          <div class="pension-info__calculation_wrapper">
            <p class="pension-info__output-social">273 000 ₽.</p>

            <p class="pension-info__description">
              Размер соц. вычета
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PensionInfo',

  props: {
    pensionValue: { type: Number },
    generalAccumValue: { type: Number },
  },
}
</script>

<style lang="scss" scoped>
// pension-info
.pension-info {
  width: 100%;
  margin-bottom: 24px;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 576px) {
    width: 29.41%;
    border-top: none;
    border-bottom: none;
    display: block;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    width: 47.92%;
  }

  &__container {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 576px) {
      display: block;
    }

    @media screen and (min-width: 1024px) {
      display: flex;
    }
  }

  &__v-budushchem {
    padding: 24px;
    width: 46.25%;
    margin-right: 0;
    margin-bottom: 0;
    box-sizing: border-box;

    @media screen and (min-width: 576px) {
      width: 100%;
      margin-bottom: 24px;
      border: 1px solid #e4e4e4;
    }

    @media screen and (min-width: 1024px) {
      width: 35.85%;
      margin-right: 24px;
      margin-bottom: 0;
    }

    &_wrapper {
      width: 100%;
      border-right: 1px solid #e4e4e4;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media screen and (min-width: 576px) {
        border-right: none;
      }
    }
  }

  &__output-pension {
    color: #28323c;
    margin-bottom: 96px;
    font-size: 18px;

    @media screen and (min-width: 576px) {
      margin-bottom: 48px;
    }

    @media screen and (min-width: 1024px) {
      margin-bottom: 96px;
    }
  }

  &__description {
    font-size: 13px;
    color: #5a646e;

    &_span {
      display: block;
      font-size: inherit;
      color: inherit;

      @media screen and (min-width: 576px) {
        display: inline;
        margin-bottom: 48px;
      }

      @media screen and (min-width: 1024px) {
        display: block;
        margin-bottom: 0;
      }
    }
  }

  &__box {
    display: block;
    width: 53.43%;
    border: none;

    @media screen and (min-width: 576px) {
      width: 100%;
      border: 1px solid #e4e4e4;
    }

    @media screen and (min-width: 1024px) {
      width: 58.75%;
    }
  }

  &__calculation {
    width: 100%;
    padding: 24px;

    &_wrapper {
      border-top: 1px solid #e4e4e4;
    }

    &:last-of-type {
      // background-color: red;
      padding-top: 0;
      margin-top: 24px;
    }
  }

  &__output-sum-nakoplen {
    font-size: 18px;
    color: #0a0a0a;
  }

  &__output-social {
    font-size: 18px;
    color: #0a0a0a;
    margin-top: 24px;
  }
}
// pension-info
</style>
