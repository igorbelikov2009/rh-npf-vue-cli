<template>
  <div id="01" class="news-block" v-if="isNewsVisible">
    <input class="news-block__input" type="radio" value="value" />

    <div class="news__header">
      <h1 class="news__header-heading">
        RAEX (Эксперт РА) подтвердил рейтинг НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» на уровне А++
      </h1>

      <p class="news__header-date">10 декабря 2015 г.</p>

      <p class="news__paragraph">
        Рейтинговое агентство RAEX (Эксперт РА) подтвердило рейтинг надежности НПФ «БЛАГОСОСТОЯНИЕ
        ЭМЭНСИ» на уровне А++ «Исключительно высокий (наивысший) уровень надежности», прогноз по
        рейтингу – стабильный.
      </p>

      <p class="news__paragraph">
        В качестве позитивных факторов были отмечены консервативная структура размещения пенсионных
        резервов (на 30.09.2015 фонд размещал пенсионные резервы только на банковские депозиты и в
        государственные ценные бумаги, а также бумаги субъектов федерации), консервативная структура
        размещения ИОУД и высокая надежность УК, с которыми сотрудничает фонд при размещении
        пенсионных резервов (УК «Сбербанк Управление Активами», УК «ТРАНСФИНГРУП» имеют рейтинг
        надежности и качества услуг от RAEX (Эксперт РА) на уровне А++). Также поддержку рейтингу
        оказывают высокий уровень организации риск-менеджмента, высокий размер среднего счета
        участника фонда по НПО (на 30.09.2015 составляет 205 тыс. руб.) и умеренно высокая
        диверсификация пенсионных резервов по вкладчикам (на долю 3 крупнейших вкладчиков приходится
        28% пенсионных резервов). Кроме того фонд характеризуется невысокой долей пенсионеров среди
        участников фонда (на 30.09.2015 доля пенсионеров составляла менее 1%), высокими показателями
        ликвидности и высоким качеством стратегического обеспечения.
      </p>

      <p class="news__paragraph">
        «НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» входит в Группу компаний ЗАО «СК БЛАГОСОСТОЯНИЕ», собственником
        которой является НПФ «БЛАГОСОСТОЯНИЕ». Высокая вероятность поддержки со стороны НПФ
        «БЛАГОСОСТОЯНИЕ», финансовый потенциал которого позволяет оказать поддержку фонду в случае
        такой необходимости, была выделена в качестве умеренного фактора поддержки» - отмечает
        Вероника Иванова, директор по корпоративным рейтингам.
      </p>

      <p class="news__paragraph">
        В качестве сдерживающих факторов аналитиками агентства были выделены невысокий уровень
        достаточности ИОУД (отношение ИОУД на 30.09.2015 к операционным расходам фонда по итогам
        2014 года, за вычетом минимального нормативного значения, составляет 2,5; отношение ИОУД к
        РППО составляет 2,75%) и невысокий уровень диверсификации пенсионных резервов по УК (фонд
        сотрудничает с двумя УК; 52,9% пенсионных резервов приходится на УК АО «Сбербанк Управление
        Активами», 5,6% – на ЗАО УК «ТРАНСФИНГРУП», остальную часть резервов фонд размещает
        самостоятельно).
      </p>

      <p class="news__paragraph">
        НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» (номер лицензии №383/2 от 16 июня 2009 г.) осуществляет
        деятельность по негосударственному пенсионному обеспечению. На 30.09.2015 пенсионные резервы
        НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» составляли 7,1 млрд. рублей, ИОУД – 268,1 млн. рублей. На
        30.09.2015 фонд занимал 35-е место по объему имущества, 15-е место по объему пенсионных
        резервов. Более подробно читайте на
        <a class="news__paragraph_link" href="https://www.raexpert.ru/">http://www.raexpert.ru/</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News01',

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
