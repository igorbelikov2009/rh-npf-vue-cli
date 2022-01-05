<template>
  <div id="25" class="news-block" v-if="isNewsVisible">
    <input class="news-block__input" type="radio" value="value" />

    <div class="news__header">
      <h1 class="news__header-heading">
        Рейтинговое агентство «Эксперт РА» повысило рейтинг финансовой надежности АО НПФ «Ренессанс
        пенсии» до уровня ruAA
      </h1>

      <p class="news__header-date">30 декабря 2019 г.</p>

      <p class="news__paragraph">
        Рейтинговое агентство «Эксперт РА» повысило рейтинг финансовой надежности АО НПФ «Ренессанс
        пенсии» до уровня ruAA. По рейтингу установлен стабильный прогноз. Ранее у фонда действовал
        рейтинг на уровне ruAA- со стабильным прогнозом.
      </p>

      <p class="news__paragraph">
        Повышение уровня рейтинга связано, прежде всего, с ростом объема активов фонда до 20,4 млрд
        рублей на 30.09.2019.
      </p>

      <p class="news__paragraph">
        Агентство отметило положительную динамику обязательств фонда по НПО (прирост обязательств по
        НПО составил 8,9%), высокую диверсификацию клиентской базы. Положительное влияние на уровень
        рейтинга оказывает высокий запас собственных средств. Качество активов, относящихся к
        собственным средствам, оценивается как высокое.
      </p>

      <p class="news__paragraph">
        В числе позитивных факторов агентство выделило высокий уровень организации и регламентации
        системы управления рисками, стратегического обеспечения и высокий уровень информационной
        прозрачности.
      </p>

      <p class="news__paragraph">
        По данным Банка России, на 30.09.2019 АО НПФ «Ренессанс пенсии» занял 19 место по объему
        активов, 10 место по объему обязательств по НПО и 23 место по количеству участников по НПО
        на российском пенсионном рынке.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News25',

  props: {
    isNewsVisible: { type: Boolean, default: false },
    value: { type: Number, required: true },
  },
};
</script>

<style lang="scss" scoped>
.news-block {
  width: 100%;

  &__input {
    display: none;
  }
}

.news {
  &__header {
    width: 100%;
  }

  &__header-heading {
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    display: block;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      font-size: 34px;
      line-height: 48px;
    }
  }

  &__header-date {
    font-size: 16px;
    line-height: 24px;
    color: #78828c;
    display: block;
    margin-bottom: 24px;
  }

  &__paragraph {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-style: normal;
    color: #5a646e;
    display: block;
    margin-top: 24px;
    margin-bottom: 24px;

    &_bold {
      font-size: inherit;
      line-height: inherit;
      font-weight: 700;
      color: #010;
      margin-top: 24px;
      margin-bottom: 24px;
    }

    &_italic {
      font-weight: 400;
      font-style: italic;
      color: #010;
      margin-top: 24px;
      margin-bottom: 24px;
    }

    &_italic-bold {
      font-weight: 700;
      font-style: italic;
      color: #010;
      margin-top: 24px;
      margin-bottom: 24px;
    }

    &_link {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      text-decoration: none;
      outline: none;
      cursor: pointer;

      color: #8967b1;

      &:hover {
        color: #50287d;
      }
    }

    // news-block__paragraph_before
    &_before {
      font-weight: 400;
      font-style: normal;
      color: #5a646e;
      display: block;
      margin-top: 24px;
      margin-bottom: 24px;
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
  }

  &__image-bank-vtb,
  &__image-spring-holiday {
    aspect-ratio: 660 / 440;
    width: 100%;
  }
}
</style>
