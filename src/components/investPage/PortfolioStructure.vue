<template>
  <section class="structure">
    <h1 class="structure__heading">Структура портфеля</h1>

    <div class="structure__selection-by-options">
      <div class="structure__selection-calendar">
        <SelectionCalendar />
      </div>

      <div class="structure__content">
        <div class="structure__graph">graph</div>

        <div class="structure__percent">
          <div class="structure__percent-block">
            <p class="structure__percent-number structure__percent-number_01">
              56.2%
            </p>
            <p class="structure__percent-title">
              Облигации федерального займа
            </p>
          </div>

          <div class="structure__percent-block">
            <p class="structure__percent-number structure__percent-number_02">
              12.1%
            </p>
            <p class="structure__percent-title">
              Облигации хозяйствующих обществ
            </p>
          </div>

          <div class="structure__percent-block">
            <p class="structure__percent-number structure__percent-number_03">
              1.2%
            </p>
            <p class="structure__percent-title">Акции</p>
          </div>

          <div class="structure__percent-block">
            <p class="structure__percent-number structure__percent-number_04">
              28.2%
            </p>
            <p class="structure__percent-title">
              Субфедеральные и муниципальные облигации
            </p>
          </div>

          <div class="structure__percent-block">
            <p class="structure__percent-number structure__percent-number_05">
              1.7%
            </p>
            <p class="structure__percent-title">
              Депозиты / денежные средства на расчетных счетах
            </p>
          </div>

          <div class="structure__percent-block">
            <p class="structure__percent-number structure__percent-number_06">
              0.6%
            </p>
            <p class="structure__percent-title">
              Открытые паевые инвестиционные фонды
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SelectionCalendar from '../../components/investPage/SelectionCalendar.vue';
export default {
  name: 'PortfolioStructure',
  components: {
    SelectionCalendar,
  },
};
</script>

<style lang="scss" scoped>
// structure
.structure {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  border-color: #ffffff;
  padding-top: 0;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 576px) {
    padding-left: 28px;
    padding-right: 28px;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }

  &__heading {
    font-size: 18px;
    line-height: 24px;
    color: #28323c;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      font-size: 34px;
      line-height: 48px;
      margin-bottom: 48px;
    }
  }

  &__selection-by-options {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  &__selection-calendar {
    width: 100%;
    min-width: 272px;
    max-width: 344px;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      min-width: 176px;
      max-width: 176px;
    }

    @media screen and (min-width: 768px) {
      margin-bottom: 72px;
    }
  }

  &__content {
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (min-width: 768px) {
      justify-content: flex-start;
    }
  }

  &__graph {
    width: 260px;
    height: 260px;
    background-color: rgb(112, 23, 23);
  }

  &__percent {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 0;
    margin-top: 48px;

    @media screen and (min-width: 768px) {
      width: calc(100% - 280px);
      margin-left: 20px;
      margin-top: 0px;
    }
  }

  &__percent-block {
    width: calc(50% - 24px);
    margin: 0 12px;
    margin-bottom: 24px;
    display: block;

    @media screen and (min-width: 768px) {
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
    padding-left: 16px;
  }
} // structure
</style>
