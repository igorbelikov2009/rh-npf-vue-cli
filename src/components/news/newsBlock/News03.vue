<template>
  <div id="03" class="news-block" v-if="isNewsVisible">
    <input class="news-block__input" type="radio" value="value" />

    <div class="news__header">
      <h1 class="news__header-heading">
        НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» подвел итоги инвестиционной деятельности за 2015 год.
      </h1>

      <p class="news__header-date">10 февраля 2016 г.</p>

      <p class="news__paragraph">
        Минувший год стал годом серьёзных негативных изменений в экономике и геополитике России.
        Резкое падение цен на нефть, политическое охлаждение отношений с ведущими мировыми
        державами, обмен санкциями, всплеск инфляции, девальвация национальной валюты – всё это
        отразилось на состоянии инвестиционного рынка.
      </p>

      <p class="news__paragraph"><br /></p>

      <p class="news__paragraph">
        В сложившейся ситуации Фонд уделяет максимальное внимание управлению рисками и повышению
        кредитного качества инвестиционного портфеля. Благодаря профессиональному управлению
        портфелем, несмотря на давление внешних факторов, действующая Консервативная инвестиционная
        стратегия Фонда позволила заработать положительную в реальном выражении инвестиционную
        доходность, превышающую официально объявленный уровень инфляции.
      </p>

      <p class="news__paragraph"><br /></p>

      <p class="news__paragraph">
        Доход по итогам года уже появился на пенсионных счетах наших участников. Приглашаем клиентов
        заглянуть в электронные выписки.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News03',

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
