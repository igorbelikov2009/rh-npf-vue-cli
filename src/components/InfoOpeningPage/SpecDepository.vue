<template>
  <div>
    <section class="spec-depository">
      <div class="spec-depository__container">
        <h2 class="spec-depository__heading">
          Специализированный депозитарий
        </h2>

        <div class="spec-depository__param-switch">
          <ParamSwitch :switchItems="switchItems" @onChangeRadio="onChangeRadio" />
        </div>

        <div class="spec-depository__content">
          <SpecDepositoryBlock
            v-if="ifFirstContentVisible"
            :subheading="depository1.subheading"
            :title="depository1.title"
            :subtitle="depository1.subtitle"
          />

          <SpecDepositoryBlock
            v-if="!ifFirstContentVisible"
            :subheading="depository2.subheading"
            :title="depository2.title"
            :subtitle="depository2.subtitle"
          />
        </div>
      </div>
    </section>

    <section class="spec-depository__interactions">
      <div class="spec-depository__container">
        <p class="spec-depository__description">
          Для информационного взаимодействия АО НПФ «Ренессанс пенсии», являясь участником системы
          электронного документооборота, использует обмен электронными документами в системе
          электронного документооборота
          <a class="spec-depository__link" href="">
            АО ВТБ Специализированный депозитарий.
          </a>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import SpecDepositoryBlock from '@/components/InfoOpeningPage/SpecDepositoryBlock.vue';
import ParamSwitch from '@/components/gui/ParamSwitch.vue';

export default {
  name: 'SpecDepository',

  data() {
    return {
      ifFirstContentVisible: true,
      radioValue: 0,
      switchItems: [
        {
          name: 'information',
          value: 1,
          title: 'Действующие',
          isActive: false,
        },
        {
          name: 'information',
          value: 2,
          title: 'Договоры прекращены',
          isActive: false,
        },
      ],

      depository1: {
        subheading: 'АО ВТБ Специализированный депозитарий',
        title:
          'лицензия на осуществление деятельности в качестве специализированного депозитария инвестиционных фондов, паевых инвестиционных фондов и негосударственных пенсионных фондов №22-000-1-00005 от 25 ноября 1997 года (бессрочная).',
        subtitle: 'Договор №96 заключен 27.09.2010 г., бессрочный, действует',
      },

      depository2: {
        subheading: 'ООО «Дойче Банк»',
        title:
          'лицензия № 22-000-1-00060 от 25.01.2005г., на осуществление деятельности специализированного депозитария инвестиционных фондов, паевых инвестиционных фондов и негосударственных пенсионных фондов, выданную Федеральной Службой по финансовым рынкам, срок окончания: лицензия предоставлена на срок 5 лет.',
        subtitle:
          'Договор №16-1/NPF/789 от 28.11.2008 г., на срок один год, прекращен 26.09.2010 г.',
      },
    };
  },
  methods: {
    onChangeRadio(value) {
      this.radioValue = value;
      // console.log('radioValue:' + this.radioValue);
      this.changeVisibilityFirstContent();
    },
    changeVisibilityFirstContent() {
      if (this.radioValue === 1) {
        this.ifFirstContentVisible = true;
        // console.log(this.ifFirstContentVisible);
      } else {
        this.ifFirstContentVisible = false;
        // console.log(this.ifFirstContentVisible);
      }
    },
  },

  components: {
    SpecDepositoryBlock,
    ParamSwitch,
  },
};
</script>

<style lang="scss" scoped>
.spec-depository {
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

  &__interactions {
    width: 100%;
    padding-right: 24px;
    padding-left: 24px;

    @media screen and (min-width: 576px) {
      padding-right: 28px;
      padding-left: 28px;
    }
  }

  &__description {
    display: block;
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    color: #5a646e;
  }

  &__link {
    text-decoration: none;
    font-size: inherit;
    line-height: inherit;
    color: #50287d;
    cursor: pointer;
  }
}
</style>
