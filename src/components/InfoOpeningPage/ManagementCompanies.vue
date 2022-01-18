<template>
  <section class="management-companies">
    <div class="management-companies__container">
      <h2 class="management-companies__heading">Управляющие компании</h2>

      <div class="management-companies__param-switch">
        <GuiRadioPrimary :radioItems="radioItems" @onChangePrimaryRadio="onChangePrimaryRadio" />
      </div>

      <div class="management-companies__content">
        <div v-if="isVisible">
          <p class="management-companies__paragraph">
            <span class="management-companies__paragraph-bold"
              >Акционерное общество «Сбер Управление Активами»</span
            >

            <span class="management-companies__paragraph-small"
              >лицензия на осуществление деятельности по управлению инвестиционными фондами, паевыми
              инвестиционными фондами и негосударственными пенсионными фондами № 21-000-1-00010 от
              12 сентября 1996 года.</span
            >
          </p>

          <p class="management-companies__paragraph">
            <span class="management-companies__paragraph-small"
              >Договор №УК-110/2009 заключен 31.07.2009 г., бессрочный, действует.</span
            >
          </p>

          <p class="management-companies__paragraph">
            <span class="management-companies__paragraph-small"
              >Договор №УК-117/2009 заключен 07.10.2009 г., бессрочный, действует.</span
            >
          </p>

          <p class="management-companies__paragraph">
            <span class="management-companies__paragraph-small">
              <br />
            </span>
          </p>

          <p class="management-companies__paragraph">
            <span class="management-companies__paragraph-bold"
              >Акционерное общество «Управляющая компания «ТРАНСФИНГРУП»</span
            >

            <span class="management-companies__paragraph-small"
              >лицензия на осуществление деятельности по управлению инвестиционными фондами, паевыми
              инвестиционными фондами и негосударственными пенсионными фондами № 21–000–1–00052 от 6
              ноября 2001 года.</span
            >
          </p>

          <p class="management-companies__paragraph">
            <span class="management-companies__paragraph-small"
              >Договор № 32/ДУ заключен 17.03.2015 г., бессрочный, действует.</span
            >
          </p>

          <p class="management-companies__paragraph">
            <span class="management-companies__paragraph-small">
              <br />
            </span>
          </p>

          <p class="management-companies__paragraph">
            <span class="management-companies__paragraph-bold"
              >Акционерное общество «Управляющая компания «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ»</span
            >

            <span class="management-companies__paragraph-small"
              >лицензия на осуществление деятельности по управлению инвестиционными фондами, <br />
              паевыми инвестиционными фондами и негосударственными пенсионными фондами, <br />
              № 21-000-1-00054 от 3 декабря 2001 года.</span
            >
          </p>

          <p class="management-companies__paragraph">
            <span class="management-companies__paragraph-small"
              >Договор № 250518/1, заключен 25.05.2018г., бессрочный, действует.</span
            >
          </p>

          <p class="management-companies__paragraph">
            <span class="management-companies__paragraph-small"
              >Договор № 200220/1, заключен 20.02.2020г., бессрочный, действует.</span
            >
          </p>

          <p class="management-companies__paragraph">
            <span class="management-companies__paragraph-small"
              >Договор № 200220/2, заключен 20.02.2020г., бессрочный, действует.</span
            >
          </p>

          <p class="management-companies__paragraph">
            <span class="management-companies__paragraph-small"
              >Договор № 311220/1, заключен 31.12.2020г., бессрочный, действует.</span
            >
          </p>
        </div>

        <div v-if="!isVisible">
          <p class="management-companies__paragraph">
            <span class="management-companies__paragraph-bold"
              >Акционерное общество «Сбербанк Управление Активами» (до переименования в ноябре 2012
              г. - ЗАО «Управляющая Компания «Тройка Диалог»)</span
            >
            <span class="management-companies__paragraph-small"
              >лицензия на осуществление деятельности по управлению инвестиционными фондами, паевыми
              инвестиционными фондами и негосударственными пенсионными фондами № 21-000-1-00010 от
              12 сентября 1996 года.</span
            >
          </p>

          <p class="management-companies__paragraph">
            <span class="management-companies__paragraph-small"
              >Договор №УК-111/2009 заключен 31.07.2009 г., бессрочный, прекращен 28.02.2013 г.
              Договор № УК-51/2012 заключен 19.12.2012 г., бессрочный, прекращен 31.01.2014 г.
              Договор №УК-52/2012 заключен 19.12.2012 г., бессрочный, прекращен 31.01.2014 г.</span
            >
          </p>

          <p class="management-companies__paragraph">
            <span class="management-companies__paragraph-small">
              <br />
            </span>
          </p>

          <p class="management-companies__paragraph">
            <span class="management-companies__paragraph-bold">ООО «УК «Ренессанс Капитал»</span>

            <span class="management-companies__paragraph-small"
              >лицензия № 21-000-1-00587 от 15.11.2008г. на право осуществления деятельности по
              управлению инвестиционными фондами, паевыми инвестиционными фондами и
              негосударственными пенсионными фондами, выданная Федеральной службой по финансовым
              рынкам, срок окончания: лицензия бессрочная. Лицензия № 077-09401-001000 от
              05.09.2006г., на право осуществления деятельности по управлению ценными бумагами,
              выданная Федеральной Службой по финансовым рынкам, срок окончания: лицензия
              бессрочная.</span
            >
          </p>

          <p class="management-companies__paragraph">
            <span class="management-companies__paragraph-small"
              >Договор № 294/2007, заключен 27.06.2007 г. на срок 2 года, прекращен 31.12.2009 г.,
              Договор № 295/2007, заключен 27.06.2007 г. на срок 2 года, прекращен 31.12.2009
              г.</span
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GuiRadioPrimary from '@/components/gui/guiRadio/GuiRadioPrimary.vue';

export default {
  name: 'ManagementCompanies',

  data() {
    return {
      isVisible: true,
      radioValue: 0,
      radioItems: [
        {
          name: 'information',
          value: 0,
          title: 'Действующие',
        },
        {
          name: 'information',
          value: 1,
          title: 'Договоры прекращены',
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
    GuiRadioPrimary,
  },
};
</script>

<style lang="scss" scoped>
.management-companies {
  width: 100%;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 28px;
  }

  &__container {
    max-width: 960px;
    margin: 0 auto;
  }

  &__heading {
    display: block;
    width: 100%;
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

  &__content {
    width: 100%;
  }

  &__paragraph {
    display: block;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    margin-top: 24px;
    margin-bottom: 12px;
    color: #5a646e;
  }

  &__paragraph-bold {
    display: block;
    font-weight: 700;
    color: #010;
  }

  &__paragraph-small {
    display: block;
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
    font-style: normal;
    font-weight: 400;
  }
}
</style>
