<template>
  <div id="22" class="news-block" v-if="isNewsVisible">
    <input class="news-block__input" type="radio" value="value" />

    <div class="news__header">
      <h1 class="news__header-heading">Стратегия для пенсионера</h1>

      <p class="news__header-date">05 июня 2019 г.</p>

      <p class="news__paragraph">
        Пять финансовых продуктов, которые помогут сохранить и увеличить доход после выхода на
        пенсию.
      </p>

      <p class="news__paragraph">
        Гендиректор НПФ «Ренессанс пенсии» Елена Горшкова пояснила, что, открыв ИПП, клиент сам
        может выбрать удобный режим пополнения счета и выплат пенсии. Как правило, фонды предлагают
        срок от пяти лет и выше, а также схемы с пожизненной выплатой пенсии и правом наследования
        невыплаченного остатка. Также пенсионный план можно открыть для пожилого родственника.
        Впрочем, и сам пенсионер в любом возрасте может заключить договор с НПФ, говорит она.
      </p>

      <p class="news__paragraph">
        Ознакомиться с полной версией статьи можно на сайте Банки.ру:
        <a class="news__paragraph_link" href="https://www.banki.ru/news/daytheme/?id=10897448"
          >https://www.banki.ru/news/daytheme/?id=10897448</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News22',

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
