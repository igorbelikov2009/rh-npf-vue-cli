<template>
  <div id="02" class="news-block" v-if="isNewsVisible">
    <input class="news-block__input" type="radio" value="value" />

    <div class="news__header">
      <h1 class="news__header-heading">
        Группа компаний «БЛАГОСОСТОЯНИЕ» приобрела 100% акций Акционерного общества «ИНТАЧ
        СТРАХОВАНИЕ»(INTOUCH)
      </h1>

      <p class="news__header-date">29 января 2016 г.</p>

      <p class="news__paragraph">
        "Акционерное общество «Страховая компания БЛАГОСОСТОЯНИЕ» приобрела 100% акций Акционерного
        общества «ИНТАЧ СТРАХОВАНИЕ» (INTOUCH)
      </p>

      <p class="news__paragraph">
        08 декабря 2015 года АО «СК БЛАГОСОСТОЯНИЕ» подписала соглашение со страховым холдингом RSA
        Group и Европейским банком реконструкции и развития о приобретении 100% акций АО «ИНТАЧ
        СТРАХОВАНИЕ» (INTOUCH).
      </p>

      <p class="news__paragraph">
        29 января АО «СК БЛАГОСОСТОЯНИЕ» завершила сделку по приобретению 100% акций АО «ИНТАЧ
        СТРАХОВАНИЕ».
      </p>

      <p class="news__paragraph">
        INTOUCH - лидер российского рынка страхования в области инновационных предложений для своих
        клиентов. Является одной из первых директ-компаний в России, осуществляющих страхование без
        посредников и удаленное урегулирование убытков. INTOUCH специализируется на прямых продажах
        полисов автострахования, страхования имущества и гражданской ответственности, страхования от
        несчастного случая, страхования выезжающих за рубеж.
      </p>

      <p class="news__paragraph">
        INTOUCH работает на российском рынке с 2008 года, специализируется на модели прямого
        страхования – страхования без посредников, осуществляя оформление договора по телефону и
        через сеть интернет, а также удаленное урегулирование страховых случаев. В соответствии с
        данными промежуточной финансовой отчетности за 9 месяцев 2015 года, основанными на принципах
        Международных стандартов финансовой отчетности (МСФО), компания демонстрирует темпы роста
        сборов существенно выше рыночных. Рост по сравнению с аналогичным показателем прошлого года
        составил 32,3%. За 9 месяцев 2015 года компания показала прибыль до налогообложения в
        размере 67 миллионов рублей. Текущий уставной капитал АО «ИНТАЧ СТРАХОВАНИЕ» составляет
        более 755 млн. рублей.
      </p>

      <p class="news__paragraph">
        Дмитрий Максимов, генеральный директор АО «СК БЛАГОСОСТОЯНИЕ»:
      </p>

      <p class="news__paragraph">
        «Приобретение лидера рынка прямого страхования, обладающего высокоразвитой технологической
        платформой и эффективными каналами продаж, последующее синергетическое развитие компаний за
        счет кросс-продаж и оптимизации операционных расходов открывает возможность качественного
        роста бизнеса образованной страховой группы». "
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News02',

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
