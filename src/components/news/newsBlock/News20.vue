<template>
  <div id="20" class="news-block" v-if="isNewsVisible">
    <input class="news-block__input" type="radio" value="value" />

    <div class="news__header">
      <h1 class="news__header-heading">
        Сообщение о завершении процедуры реорганизации НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» в форме
        преобразования в Акционерное общество негосударственный пенсионный фонд «Ренессанс пенсии»
      </h1>

      <p class="news__header-date">14 декабря 2018 г.</p>

      <p class="news__paragraph">
        14 декабря 2018 года в Единый государственный реестр юридических лиц (ЕГРЮЛ) внесены записи
      </p>

      <p class="news__paragraph_before">
        <span class="news__paragraph_bold"
          >о прекращении 14.12.2018 деятельности Негосударственного пенсионного фонда
          «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» (ОГРН:1027739310170) путем реорганизации в форме
          преобразования.</span
        >
      </p>

      <p class="news__paragraph_before">
        <span class="news__paragraph_bold"
          >о создании 14.12.2018 Акционерного общества негосударственного пенсионного фонда
          «Ренессанс пенсии» (ОГРН:1187700021948, ИНН 9725000621, КПП 772501001, адрес: 115114, г.
          Москва, Дербеневская набережная, д. 7, стр. 22)</span
        >
        путем реорганизации в форме преобразования.
      </p>

      <p class="news__paragraph">
        Сокращенное наименование – АО НПФ «Ренессанс пенсии». Уставный капитал - 150 000 000 (Сто
        пятьдесят миллионов) рублей.
      </p>

      <p class="news__paragraph">
        В соответствии с законодательством Российской Федерации к АО НПФ «Ренессанс пенсии» в
        порядке правопреемства перешли в полном объеме все права и обязанности НПФ «БЛАГОСОСТОЯНИЕ
        ЭМЭНСИ».
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News20',

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
