<template>
  <section class="overall-info">
    <div class="overall-info__container">
      <h1 class="overall-info__heading">Общие сведения</h1>
      <div class="overall-info__param-switch">
        <GuiRadioPrimaryLabel
          :radioItems="radioItems"
          @onChangePrimaryRadio="onChangePrimaryRadio"
        />
      </div>

      <div class="overall-info__content">
        <div v-if="isVisible">
          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span"
              >Полное фирменное наименование Фонда на русском языке</span
            >
            Акционерное общество негосударственный пенсионный фонд «Ренессанс пенсии»
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span"
              >Сокращенное фирменное наименование Фонда на русском языке</span
            >
            АО НПФ «Ренессанс пенсии»
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span"
              >Полное фирменное наименование Фонда на английском языке</span
            >
            Joint Stock Company Non-State Pension Fund Renaissance pensions
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span"
              >Сокращенное фирменное наименование Фонда на английском языке</span
            >
            JSC NSPF Renaissance pensions
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span">Лицензия</span>
            Лицензия на осуществление деятельности по пенсионному обеспечению и пенсионному
            страхованию <br />
            № 383/2 от 16 июня 2009 года *
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span"
              >Адрес места нахождения Фонда. Почтовый (контактный) адрес</span
            >
            115114, г. Москва, Дербеневская наб., д. 7, стр. 22
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span">Обособленные подразделения</span>
            Нет
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span">Фонд не работает с агентами</span>
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span"
              >*Фонд вправе осуществлять деятельность по обязательному пенсионному страхованию после
              регистрации страховых правил в Банке России и вступлении в систему гарантирования прав
              застрахованных лиц.</span
            >
          </p>
        </div>

        <div v-else-if="!isVisible">
          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span"
              >Полное наименование Фонда на русском языке</span
            >
            Акционерное общество негосударственный пенсионный фонд «Ренессанс пенсии»
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span">Юридический адрес</span>
            115114, г. Москва, Дербеневская наб., д. 7, стр. 22
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span">Почтовый (контактный) адрес</span>
            115114, г. Москва, Дербеневская наб., д. 7, стр. 22
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span">Идентификационный номер (ИНН/КПП)</span>
            9725000621 / 772501001
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span">ОГРН</span>
            1187700021948
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span">Код по ОКПО</span>
            34981417
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span">ОКТМО</span>
            45914000000 – муниципальный округ Даниловский
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span">ОКОП</span>
            12267
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span">Полное наименование банка</span>
            Банк ВТБ (ПАО)
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span">Расчетный счет (пенсионные резервы)</span>
            40701810726800000147
          </p>

          <p class="overall-info__paragraph">
            <span class="overall-info__paragraph_span">Расчетный счет (собственные средства)</span>
            40701810026800000148
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GuiRadioPrimaryLabel from '@/components/gui/guiRadio/GuiRadioPrimary.vue';

export default {
  name: 'OverallInfo',
  data() {
    return {
      isVisible: true,
      radioValue: 0,
      radioItems: [
        {
          name: 'information',
          value: 0,
          title: 'Сведения',
        },
        {
          name: 'information',
          value: 1,
          title: 'Реквизиты',
        },
      ],
    };
  },

  methods: {
    onChangePrimaryRadio(value) {
      this.radioValue = value;
      // console.log('radioValue:' + this.radioValue);
      this.changeVisibility();
    },
    changeVisibility() {
      this.isVisible = !this.isVisible;
    },
  },

  components: {
    GuiRadioPrimaryLabel,
  },
};
</script>

<style lang="scss" scoped>
.overall-info {
  width: 100%;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 24px;
  }

  &__container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }

  &__heading {
    display: block;
    font-size: 18px;
    line-height: 24px;
    color: #5a646e;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      font-size: 34px;
      line-height: 48px;
      margin-bottom: 48px;
    }
  }

  &__param-switch {
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      margin-bottom: 48px;
    }
  }

  &__paragraph {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    font-style: normal;
    color: #5a646e;
    display: block;
    margin-top: 24px;
    margin-bottom: 12px;

    &_span {
      display: block;
      font-size: 13px;
      line-height: 24px;
      color: #5a646e;
      font-style: normal;
      font-weight: 400;
    }
  }
}
</style>
