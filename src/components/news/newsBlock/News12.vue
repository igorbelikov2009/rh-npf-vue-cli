<template>
  <div id="12" class="news-block" v-if="isNewsVisible">
    <input class="news-block__input" type="radio" value="value" />

    <div class="news__header">
      <h1 class="news__header-heading">
        Уведомление об аннулировании доверенностей
      </h1>

      <p class="news__header-date">13 октября 2017 г.</p>

      <p class="news__paragraph">
        В страховой группе АО «СК БЛАГОСОСТОЯНИЕ» были аннулированы следующие доверенности:
      </p>

      <p class="news__paragraph">
        1. Поверенное лицо Андреев Алексей Викторович: <br />
        - доверенности от АО «СК БЛАГОСОСТОЯНИЕ» № 63-17 от 14.12.2016 (аннулирована 29.09.2017), №
        180-17 от 13.06.2017 (аннулирована 29.09.2017), № 300-17 от 02.10.2017 (аннулирована
        13.10.2017)
        <br />
        - доверенность от АО «СК БЛАГОСОСТОЯНИЕ ОС» № 151-17 от 09.10.2017 (аннулирована 13.10.2017)
      </p>

      <p class="news__paragraph">
        2. Поверенное лицо Калабина Екатерина Викторовна, доверенность от АО «СК БЛАГОСОСТОЯНИЕ ОС»
        № 27-17 от 14.12.2017 (аннулирована 08.10.2017), № 161-17 от 09.10.2017 (аннулирована
        13.10.2017)
      </p>

      <p class="news__paragraph">
        3. Поверенное лицо Есаулов Евгений Сергеевич: <br />
        - доверенности от АО «СК БЛАГОСОСТОЯНИЕ» № 80-17 от 14.12.2016 (аннулирована 13.10.2017)
        <br />
        - доверенность от НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» № 06-17 от 28.12.2016 (аннулирована
        13.10.2017) <br />
        - доверенность от АО «ИНТАЧ СТРАХОВАНИЕ» № 295/10/17 от 09.10.2017 (аннулирована 13.10.2017)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News12',

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
