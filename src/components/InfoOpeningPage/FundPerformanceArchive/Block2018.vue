<template>
  <div>
    <div class="block-header">
      <p class="block-header__heading-13">Показатели деятельности</p>

      <p class="block-header__date">2018</p>
    </div>

    <div class="paragraph__table-row">
      <p class="paragraph__table-row_title">
        Количество вкладчиков фонда
      </p>

      <p class="paragraph__table-row_value">12 059</p>
    </div>

    <div class="paragraph__table-row">
      <p class="paragraph__table-row_title">
        Количество участников фонда (человек)
      </p>

      <p class="paragraph__table-row_value">40 195</p>
    </div>

    <div class="paragraph__table-row">
      <p class="paragraph__table-row_title">
        Количество участников, получающих негосударственную пенсию (человек)
      </p>

      <p class="paragraph__table-row_value">166</p>
    </div>

    <div class="paragraph__table-row">
      <p class="paragraph__table-row_title">
        Размер дохода от размещения пенсионных резервов (результат инвестирования пенсионных
        резервов), подлежащий зачислению на пенсионные счета негосударственного пенсионного
        обеспечения, тыс. руб.
      </p>

      <p class="paragraph__table-row_value">637 892</p>
    </div>

    <div class="paragraph__table-row">
      <p class="paragraph__table-row_title">
        Размер дохода от размещения пенсионных резервов, направленный на формирование страхового
        резерва, тыс. руб.
      </p>

      <p class="paragraph__table-row_value">80 271</p>
    </div>

    <div class="paragraph__table-row">
      <p class="paragraph__table-row_title">
        Размер пенсионных резервов, тыс. руб.
      </p>

      <p class="paragraph__table-row_value">16 946 469</p>
    </div>

    <div class="paragraph__table-row">
      <p class="paragraph__table-row_title">
        в том числе: размер страхового резерва, тыс. руб.
      </p>

      <p class="paragraph__table-row_value">1 328 519</p>
    </div>

    <div class="paragraph__table-row">
      <p class="paragraph__table-row_title">
        Результаты размещения средств пенсионных резервов на основании данных о средней расчетной
        ставке доходности от размещения пенсионных резервов, в соответствии с которой направлен
        доход на пополнение резервов покрытия пенсионных обязательств за отчетный год
      </p>

      <p class="paragraph__table-row_value">4,47%</p>
    </div>

    <div class="paragraph__table-row">
      <p class="paragraph__table-row_title">
        Средневзвешенный процент, на который был увеличен размер назначенных негосударственных
        пенсий по итогам размещения средств пенсионных резервов за отчетный год
      </p>

      <p class="paragraph__table-row_value">4,8%</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Block2018',
};
</script>

<style lang="scss" scoped>
// block-header
.block-header {
  width: 100%;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #e4e4e4;

  &:first-of-type {
    padding-top: 0;
  }

  &__heading-13 {
    display: block;
    width: 100%;
    max-width: 560px;
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
  }

  &__heading-16 {
    display: block;
    width: 100%;
    max-width: 560px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #000;
  }

  &__heading-18 {
    display: block;
    width: 100%;
    max-width: 560px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    color: #5a646e;
  }

  &__date {
    display: block;
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
    flex: none;
    margin-left: 12px;

    @media screen and (min-width: 576px) {
      margin-left: 40px;
    }
  }
}
// block-header

// paragraph
.paragraph {
  width: 100%;

  // paragraph__table-row
  &__table-row {
    width: 100%;
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e4e4e4;

    &:first-of-type {
      padding-top: 0;
    }

    &_title {
      width: 100%;
      max-width: 560px;
      font-size: 13px;
      line-height: 24px;
      color: #5a646e;

      @media screen and (min-width: 576px) {
        font-size: 16px;
      }
    }

    &_value {
      font-size: 13px;
      line-height: 24px;
      color: #5a646e;
      margin-left: 12px;

      @media screen and (min-width: 576px) {
        font-size: 16px;
        margin-left: 40px;
      }
    }
  }
}
// paragraph
</style>
