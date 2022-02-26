<template>
  <div class="portfolie-structure__container">
    <div class="portfolie-structure__percent-block">
      <p class="portfolie-structure__percent-number portfolie-structure__percent-number_01">
        {{ percentNumber01 }}
      </p>
      <p class="portfolie-structure__percent-title">
        Облигации федерального займа
      </p>
    </div>

    <div class="portfolie-structure__percent-block">
      <p class="portfolie-structure__percent-number portfolie-structure__percent-number_02">
        {{ percentNumber02 }}
      </p>
      <p class="portfolie-structure__percent-title">
        Облигации хозяйствующих обществ
      </p>
    </div>

    <div class="portfolie-structure__percent-block">
      <p class="portfolie-structure__percent-number portfolie-structure__percent-number_03">
        {{ percentNumber03 }}
      </p>
      <p class="portfolie-structure__percent-title">Акции</p>
    </div>

    <div class="portfolie-structure__percent-block">
      <p class="portfolie-structure__percent-number portfolie-structure__percent-number_04">
        {{ percentNumber04 }}
      </p>
      <p class="portfolie-structure__percent-title">
        Субфедеральные и муниципальные облигации
      </p>
    </div>

    <div class="portfolie-structure__percent-block">
      <p class="portfolie-structure__percent-number portfolie-structure__percent-number_05">
        {{ percentNumber05 }}
      </p>
      <p class="portfolie-structure__percent-title">
        Депозиты / денежные средства на расчетных счетах
      </p>
    </div>

    <div class="portfolie-structure__percent-block">
      <p class="portfolie-structure__percent-number portfolie-structure__percent-number_06">
        {{ percentNumber06 }}
      </p>
      <p class="portfolie-structure__percent-title">
        Открытые паевые инвестиционные фонды
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioStructureContainer',

  props: {
    percentNumber01: { type: String },
    percentNumber02: { type: String },
    percentNumber03: { type: String },
    percentNumber04: { type: String },
    percentNumber05: { type: String },
    percentNumber06: { type: String },
  },
};
</script>

<style lang="scss" scoped>
.portfolie-structure {
  &__container {
    display: flex;
    flex-wrap: wrap;
  }

  &__percent-block {
    width: calc(50% - 24px);
    margin: 0 12px;
    margin-bottom: 24px;
    display: block;

    @media screen and (min-width: 578px) {
      display: flex;
    }
  }

  &__percent-number {
    position: relative;
    width: 25%;
    padding-left: 16px;
    font-size: 18px;
    line-height: 24px;
    color: black;

    &::before {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      position: absolute;
      top: 8px;
      left: 0px;
      background-color: rgb(175, 22, 124);
    }

    &_01::before {
      background-color: rgb(69, 194, 83);
    }

    &_02::before {
      background-color: rgb(214, 223, 94);
    }

    &_03::before {
      background-color: rgb(197, 94, 223);
    }

    &_04::before {
      background-color: rgb(146, 39, 6);
    }

    &_05::before {
      background-color: rgb(94, 204, 223);
    }

    &_06::before {
      background-color: rgb(22, 22, 20);
    }
  }

  &__percent-title {
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
    width: 75%;
    margin-left: 24px;
  }
}
</style>
