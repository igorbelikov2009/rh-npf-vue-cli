<template>
  <div id="33" class="news-block" v-if="isNewsVisible">
    <input class="news-block__input" type="radio" value="value" />

    <div class="news__header">
      <h1 class="news__header-heading">
        Режим работы Фонда на период с 04 по 07 мая 2021 года
      </h1>

      <p class="news__header-date">27 апреля 2021 г.</p>

      <p class="news__paragraph">Уважаемые клиенты!</p>

      <p class="news__paragraph">
        Информируем вас, что в период с 04 по 07 мая 2021 включительно офис Фонда по адресу: 115114,
        г. Москва, Дербеневская наб., д. 7, стр. 22 работает в обычном режиме для посетителей.
      </p>

      <p class="news__paragraph">
        Мы предоставим поддержку всем клиентам по обычному графику: с 9:00 до 19:00 по московскому
        времени.
      </p>

      <p class="news__paragraph">
        <span class="news__paragraph_bold">По телефону:</span>
      </p>

      <p class="news__paragraph">
        Для звонков из Москвы и других стран +7 495 933-47-66
      </p>

      <p class="news__paragraph">
        Для звонков из других регионов России 8 800 200-47-66
      </p>

      <p class="news__paragraph">
        <span class="news__paragraph_bold">По e-mail:</span>
      </p>

      <p class="news__paragraph">
        <a class="news__paragraph_link" href="#">info_npf@renpensions.com</a>
      </p>

      <p class="news__paragraph">
        <span class="news__paragraph_bold">Форма обратной связи на сайте Фонда:</span>
      </p>

      <p class="news__paragraph">
        <a class="news__paragraph_link" href="../../templates/supportService.html#write-to-us"
          >https://renpensions.com/</a
        >
        (раздел «Контакты», «Написать нам»)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News33',

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
