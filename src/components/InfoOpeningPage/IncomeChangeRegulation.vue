<template>
  <section class="income-change-regulation">
    <div class="income-change-regulation__container">
      <h2 class="income-change-regulation__heading">
        <br />
        Положение о возможности увеличения или уменьшения дохода
      </h2>

      <p class="income-change-regulation__paragraph">
        Просим вас обратить внимание на следующее:
      </p>

      <p class="income-change-regulation__paragraph-before">
        доход от размещения пенсионных резервов может увеличиваться или уменьшаться;
      </p>

      <p class="income-change-regulation__paragraph-before">
        результаты инвестирования в прошлом не определяют доходов в будущем;
      </p>

      <p class="income-change-regulation__paragraph-before">
        государство не гарантирует доходности размещения средств пенсионных резервов.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IncomeChangeRegulation',
};
</script>

<style lang="scss" scoped>
.income-change-regulation {
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;

  @media screen and (min-width: 576px) {
    padding-right: 28px;
    padding-left: 28px;
  }

  &__container {
    max-width: 960px;
    margin: 0 auto;
  }

  &__paragraph {
    width: 100%;
    display: block;
    margin: 12px 0;
    font-size: 16px;
    line-height: 1.5rem;
    font-weight: 400;
    color: #5a646e;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  // income-change-regulation__paragraph-before
  &__paragraph-before {
    width: calc(100% - 32px);
    display: block;
    margin: 12px 0;
    font-size: 16px;
    line-height: 1.5rem;
    font-weight: 400;
    color: #5a646e;
    margin-left: 24px;
    position: relative;

    &::before {
      position: absolute;
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #50287d;
      left: -24px;
      top: 8px;
    }
  }

  &__link {
    outline: none;
    text-decoration: none;
    cursor: pointer;
    color: #55347c;

    &:hover {
      text-decoration: underline;
    }
  }

  &__heading {
    color: #28323c;
    font-size: 34px;
    line-height: 48px;
    font-weight: 400;
    letter-spacing: normal;
    margin: 24px 0;
  }
}
</style>
