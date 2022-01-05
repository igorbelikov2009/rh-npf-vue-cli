<template>
  <div id="37" class="news-block" v-if="isNewsVisible">
    <input class="news-block__input" type="radio" value="value" />

    <div class="news__header">
      <h1 class="news__header-heading">
        НПФ Сбербанка и НПФ «Ренессанс пенсии» закрыли сделку
      </h1>

      <p class="news__header-date">26 июля 2021 г.</p>

      <p class="news__paragraph">
        АО «НПФ Сбербанка» завершил сделку по приобретению 100% акций АО НПФ «Ренессанс пенсии».
        Сделка закрыта после получения согласования от Центрального банка России.
      </p>

      <p class="news__paragraph">
        АО НПФ «Ренессанс пенсии» существует на рынке с 2002 года. Клиентами фонда являются около
        200 компаний, в том числе крупные международные холдинги. В пенсионных программах фонда
        участвуют более 42 тыс. клиентов. Объём активов фонда составляет 24,5 млрд рублей.
      </p>

      <p class="news__paragraph">
        В результате сделки НПФ Сбербанка нарастит портфель корпоративных клиентов, в который сейчас
        входит более 800 компаний, и укрепит лидирующие позиции на рынке корпоративного
        негосударственного пенсионного обеспечения.
      </p>

      <p class="news__paragraph">
        Клиенты НПФ «Ренессанс пенсии» получат дополнительную уверенность в стабильном и
        долгосрочном сотрудничестве со своим пенсионным провайдером: НПФ Сбербанка работает на рынке
        уже 26 лет и занимает лидирующие позиции в сегменте негосударственного пенсионного
        обеспечения.
      </p>

      <p class="news__paragraph">
        НПФ Сбербанка планирует усилить качество клиентского обслуживания клиентов НПФ «Ренессанс
        пенсии» и сохранить индивидуальный подход к потребностям корпоративных клиентов.
      </p>

      <p class="news__paragraph">
        Среди других дополнительных преимуществ — высокотехнологичные клиентские решения и
        цифровизация клиентского опыта в том числе в партнерстве с сервисами экосистемы Сбер.
      </p>

      <p class="news__paragraph"><br /></p>

      <p class="news__paragraph"><br /></p>

      <p class="news__paragraph"># # #</p>

      <p class="news__paragraph">Пресс-служба</p>

      <p class="news__paragraph">
        <a class="news__paragraph_link" href="#">media@sberbank.ru</a>
      </p>

      <p class="news__paragraph"><br /></p>

      <p class="news__paragraph">
        <span class="news__paragraph_bold">ПАО Сбербанк </span>
        — один из крупнейших банков в России и один из ведущих глобальных финансовых институтов. На
        долю Сбербанка приходится около трети активов всего российского банковского сектора.
        Сбербанк является ключевым кредитором для национальной экономики и занимает одну из
        крупнейших долей на рынке вкладов. Основным акционером ПАО Сбербанк является Российская
        Федерация в лице Министерства финансов Российской Федерации, владеющая 50% уставного
        капитала ПАО Сбербанк плюс 1 голосующая акция. Оставшимися 50% минус 1 голосующая акция от
        уставного капитала банка владеют российские и международные инвесторы. Услугами Сбербанка
        пользуются клиенты в 18 странах мира. Банк располагает обширной филиальной сетью в России:
        около 14 тысяч точек обслуживания. Зарубежная сеть банка состоит из дочерних банков,
        филиалов и представительств в Великобритании, США, СНГ, Центральной и Восточной Европе,
        Индии, Китае и других странах. Генеральная лицензия Банка России на осуществление банковских
        операций № 1481 от 11.08.2015. Официальные сайты банка:
        <a class="news__paragraph_link" href="https://www.sberbank.com/ru"> www.sberbank.com</a>
        (сайт Группы Сбербанк),
        <a class="news__paragraph_link" href="https://www.sberbank.ru/ru/person">www.sberbank.ru</a
        >.
      </p>

      <p class="news__paragraph">
        В 2020 году Сбербанк провел ребрендинг и предлагает частным и корпоративным клиентам
        финансовые и нефинансовые услуги банка и компаний Группы Сбербанк. Экосистема Сбер сегодня —
        это множество сервисов для жизни, ежедневная помощь в решении насущных задач частных
        клиентов и бизнеса. Сайт экосистемы Сбер —
        <a class="news__paragraph_link" href="https://www.sber.ru/new"> www.sber.ru</a>.
      </p>

      <p class="news__paragraph"><br /></p>

      <p class="news__paragraph">
        <span class="news__paragraph_bold">НПФ Сбербанка </span>
        — негосударственный пенсионный фонд Сбербанка, основанный 17 марта 1995 года. Более 26 лет
        фонд успешно работает на пенсионном рынке и имеет наивысший рейтинг надежности от «Эксперт
        РА»: ruAAA «Стабильный». АО «НПФ Сбербанка» входит в блок «Управление благосостоянием» ПАО
        Сбербанк и занимает лидирующую позицию в топ-10 негосударственных пенсионных фондов России.
        Общий объем активов фонда превышает 730 млрд рублей (по данным финансовой отчетности за 2020
        год). Подробная информация о фонде размещена на сайте
        <a class="news__paragraph_link" href="https://npfsberbanka.ru/">https://npfsberbanka.ru</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News37',

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
