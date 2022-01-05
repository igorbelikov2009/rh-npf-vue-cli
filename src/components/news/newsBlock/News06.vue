<template>
  <div id="06" class="news-block" v-if="isNewsVisible">
    <input class="news-block__input" type="radio" value="value" />

    <div class="news__header">
      <h1 class="news__header-heading">
        НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» вступил в Национальную ассоциацию негосударственных пенсионных
        фондов
      </h1>

      <p class="news__header-date">12 сентября 2016 г.</p>

      <p class="news__paragraph">
        "5 сентября на заседании Совета саморегулируемой организации Национальной ассоциации
        негосударственных пенсионных фондов (СРО НАПФ) было принято решение о включении в состав
        ассоциации НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ».
      </p>

      <p class="news__paragraph">
        С 2016 года по инициативе Регулятора рынка, для обеспечения дополнительной защиты клиентов,
        членство в СРО является для НПФ обязательным. В соответствии с законодательством реестр
        новых членов НАПФ будет направлен в Центральный Банк России для учета в едином реестре НПФ.
      </p>

      <p class="news__paragraph">
        Единые стандарты деятельности, которые декларирует СРО НАПФ, призваны усилить контроль и
        повысить прозрачность взаимоотношений между пенсионными фондами и их клиентами. Основными
        целями СРО являются развитие финансового рынка России в целом и модернизация пенсионной
        системы в частности через выявление и распространение положительного опыта организации
        деятельности НПФ. В настоящий момент в состав НАПФ входят 69 из 81 НПФ, имеющих лицензии. В
        фондах-членах НАПФ сосредоточено 96,9 % пенсионных резервов и 84,6 % участников всех НПФ. "
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News06',

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
