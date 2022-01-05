<template>
  <div id="23" class="news-block" v-if="isNewsVisible">
    <input class="news-block__input" type="radio" value="value" />

    <div class="news__header">
      <h1 class="news__header-heading">
        АО НПФ «Ренессанс пенсии» развивает сотрудничество с ВТБ
      </h1>

      <p class="news__header-date">21 июня 2019 г.</p>

      <img
        class="news__image-bank-vtb"
        src="../../../../public/images/news/bankVTB.jpg"
        alt="bankVTB"
      />

      <p class="news__paragraph">
        АО НПФ «Ренессанс пенсии» открыл в банке ВТБ расчетный счет и счета пенсионных резервов, с
        целью проведения расчетов организован трехсторонний электронный документооборот при участии
        ЗАО ВТБ Специализированный депозитарий, выбранного в качестве контролирующей стороны. В
        рамках реализованного решения НПФ начал проводить расчетные операции с использованием
        классического интерфейса системы дистанционного банковского обслуживания банка ВТБ.
      </p>

      <p class="news__paragraph">
        Елена Горшкова, генеральный директор АО НПФ «Ренессанс пенсии», прокомментировала: «Мы ценим
        качество продуктов и услуг Группы ВТБ. Транзакционные решения ВТБ позволят нам
        оптимизировать операционные процессы, повышая при этом качество обслуживания наших клиентов.
        В перспективе планируем совместно с банком ВТБ реализовать решение, позволяющее осуществлять
        пенсионные выплаты по реестру платежей».
      </p>

      <p class="news__paragraph">
        Начальник управления продаж расчетных и пассивных продуктов Департамента транзакционного
        бизнеса — старший вице-президент банка ВТБ Александр Боциев отметил: «Мы очень дорожим тем,
        что тысячи российских и международных компаний доверяют нам свои расчеты. Ежедневно банк
        обеспечивает своевременное и надежное исполнение сотен тысяч платежей своих корпоративных
        клиентов. В данном проекте, кроме осуществления расчетной функции, для АО НПФ «Ренессанс
        пенсии» реализован механизм полностью автоматизированного электронного документооборота с
        функцией контроля специализированным депозитарием за распоряжением средствами пенсионных
        резервов в соответствии с требованиями Федерального закона от 07.05.1998 N 75-ФЗ «О
        негосударственных пенсионных фондах». Наше решение существенно снижает регуляторные риски
        для пенсионных фондов, сокращает расходы на обязательный контроль платежей и делает процесс
        выплат пенсий клиентам НПФ максимально быстрым».
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News23',

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
