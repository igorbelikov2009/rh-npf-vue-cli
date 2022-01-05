<template>
  <div id="27" class="news-block" v-if="isNewsVisible">
    <input class="news-block__input" type="radio" value="value" />

    <div class="news__header">
      <h1 class="news__header-heading">
        18 марта 2020 года вступил в силу Федеральный закон N 61-ФЗ "О внесении изменений в статью
        10 Федерального закона "О негосударственных пенсионных фондах" по вопросам назначения
        негосударственных пенсий"
      </h1>

      <p class="news__header-date">24 марта 2020 г.</p>

      <p class="news__paragraph">
        18 марта 2020 года был подписан и вступил в силу Федеральный закон N 61-ФЗ "О внесении
        изменений в статью 10 Федерального закона "О негосударственных пенсионных фондах" по
        вопросам назначения негосударственных пенсий". Согласно закону, по общему правилу, возраст
        выхода на негосударственную пенсию составит 55 и 60 лет для женщин и мужчин соответственно
        вне зависимости от их страхового стажа, если иной возраст и (или) иные основания, дающие
        право на получение негосударственной пенсии, не установлены пенсионными договорами.
      </p>

      <p class="news__paragraph">
        При этом сотрудники, имеющие право на досрочное получение отдельных видов пенсий,
        установленных государством, смогут получить негосударственную пенсию ранее 55/60 лет.
      </p>

      <p class="news__paragraph">
        Поправки распространяются также на пенсионные договоры, заключенные с 1 января 2019 г.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News27',

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
