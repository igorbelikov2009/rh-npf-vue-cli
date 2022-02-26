<template>
  <section class="fund-performance fund-performance__background-white">
    <div class="fund-performance__container">
      <h1 class="fund-performance__heading">Показатели деятельности фонда</h1>

      <div class="fund-performance__flex-container">
        <div class="fund-performance__select">
          <GuiRadioList
            :value="radioValue"
            :id="idOptions"
            :isRadioListVisible="ifRadioListVisible"
            :radioListElements="radioElements"
            @onClickRadioListController="onClickRadioListController"
            @onChangeRadioListBlock="onChangeRadioListBlock"
            @onClickRadioListBlock="onClickRadioListBlock"
          />
        </div>

        <div class="fund-performance__adaptive-radio">
          <GuiAdaptiveRadio
            :value="radioValue"
            :id="idOptions"
            :radioElements="radioElements"
            @onChangeAdaptiveRadio="onChangeAdaptiveRadio"
          />
        </div>
      </div>

      <div class="fund-performance__list">
        <FundPerformanceIndicators
          v-for="(fundIndicator, index) in fundIndicators"
          :key="index"
          :heading="fundIndicator.heading"
          :subheading="fundIndicator.subheading"
          :indicatorRows="fundIndicator.indicatorRows"
          :links="fundIndicator.links"
          :isVisible="idOptions === index"
        />
      </div>
    </div>
  </section>
</template>

<script>
import GuiRadioList from '@/components/gui/guiRadio/GuiRadioList.vue';
import GuiAdaptiveRadio from '@/components/gui/guiRadio/GuiAdaptiveRadio.vue';
import FundPerformanceIndicators from '@/components/InfoOpeningPage/FundPerformanceIndicators.vue';

export default {
  name: 'FundPerformance',

  data() {
    return {
      radioValue: 2021,
      idOptions: 0,
      ifRadioListVisible: false,
      radioElements: [
        {
          date: '2021',
          value: 2021,
          id: 0,
        },
        {
          date: '2020',
          value: 2020,
          id: 1,
        },
        {
          date: '2019',
          value: 2019,
          id: 2,
        },
        {
          date: '2018',
          value: 2018,
          id: 3,
        },
        {
          date: '2017',
          value: 2017,
          id: 4,
        },
      ],
      fundIndicators: [
        {
          heading: 'Показатели деятельности',
          subheading: '2021',

          links: [
            {
              linkHref: '/pdf/infoOpening/index2021/Показатели деятельности на 31.01.2021.pdf',
              linkTitle: 'Показатели деятельности на 31.01.2021',
            },
            {
              linkHref: '/pdf/infoOpening/index2021/Показатели деятельности на 28.02.2021.pdf',
              linkTitle: 'Показатели деятельности на 28.02.2021',
            },
            {
              linkHref: '/pdf/infoOpening/index2021/Показатели деятельности на 31.03.2021.pdf',
              linkTitle: 'Показатели деятельности на 31.03.2021',
            },
            {
              linkHref: '/pdf/infoOpening/index2021/Показатели деятельности на 30.04.2021.pdf',
              linkTitle: 'Показатели деятельности на 30.04.2021',
            },
            {
              linkHref: '/pdf/infoOpening/index2021/Показатели деятельности на 31.05.2021.pdf',
              linkTitle: 'Показатели деятельности на 31.05.2021',
            },
            {
              linkHref: '/pdf/infoOpening/index2021/Показатели деятельности на 30.06.2021.pdf',
              linkTitle: 'Показатели деятельности на 30.06.2021',
            },
            {
              linkHref: '/pdf/infoOpening/index2021/Показатели деятельности на 31.07.2021.pdf',
              linkTitle: 'Показатели деятельности на 31.07.2021',
            },
          ],
        },
        {
          heading: 'Показатели деятельности',
          subheading: '2020',
          indicatorRows: [
            {
              title: 'Количество вкладчиков фонда',
              subtitle: '14 368',
            },
            {
              title: 'Количество участников фонда (человек)',
              subtitle: '42 366',
            },
            {
              title: 'Количество участников, получающих негосударственную пенсию (человек)',
              subtitle: '233',
            },
            {
              title:
                'Размер дохода от размещения пенсионных резервов (результат инвестирования пенсионных резервов), подлежащий зачислению на пенсионные счета негосударственного пенсионного обеспечения, тыс. руб.',
              subtitle: '1 137 798, 01',
            },
            {
              title:
                'Размер дохода от размещения пенсионных резервов, направленный на формирование страхового резерва, тыс. руб.',
              subtitle: '136 741, 37',
            },
            {
              title: 'Размер пенсионных резервов, тыс. руб.',
              subtitle: '23 480 406,17',
            },
            {
              title: 'в том числе: размер страхового резерва, тыс. руб.',
              subtitle: '1 752 717,32',
            },
            {
              title:
                'Результаты размещения средств пенсионных резервов на основании данных о средней расчетной ставке доходности от размещения пенсионных резервов, в соответствии с которой направлен доход на пополнение резервов покрытия пенсионных обязательств за отчетный год',
              subtitle: '5,77%',
            },
            {
              title:
                'Средневзвешенный процент, на который был увеличен размер назначенных негосударственных пенсий по итогам размещения средств пенсионных резервов за отчетный год',
              subtitle: '7,29%',
            },
          ],
          links: [
            {
              linkHref: '/pdf/infoOpening/index2020/Показатели деятельности на 31.01.2020.pdf',
              linkTitle: 'Показатели деятельности на 31.01.2020',
            },
            {
              linkHref: '/pdf/infoOpening/index2020/Показатели деятельности на 29.02.2020.pdf',
              linkTitle: 'Показатели деятельности на 29.02.2020',
            },
            {
              linkHref: '/pdf/infoOpening/index2020/Показатели деятельности на 31.03.2020.pdf',
              linkTitle: 'Показатели деятельности на 31.03.2020',
            },
            {
              linkHref: '/pdf/infoOpening/index2020/Показатели деятельности на 30.04.2020.pdf',
              linkTitle: 'Показатели деятельности на 30.04.2020',
            },
            {
              linkHref: '/pdf/infoOpening/index2020/Показатели деятельности на 31.05.2020.pdf',
              linkTitle: 'Показатели деятельности на 31.05.2020',
            },
            {
              linkHref: '/pdf/infoOpening/index2020/Показатели деятельности на 30.06.2020.pdf',
              linkTitle: 'Показатели деятельности на 30.06.2020',
            },
            {
              linkHref: '/pdf/infoOpening/index2020/Показатели деятельности на 31.07.2020.pdf',
              linkTitle: 'Показатели деятельности на 31.07.2020',
            },
            {
              linkHref: '/pdf/infoOpening/index2020/Показатели деятельности на 31.08.2020.pdf',
              linkTitle: 'Показатели деятельности на 31.08.2020',
            },
            {
              linkHref: '/pdf/infoOpening/index2020/Показатели деятельности на 30.09.2020.pdf',
              linkTitle: 'Показатели деятельности на 30.09.2020',
            },
            {
              linkHref: '/pdf/infoOpening/index2020/Показатели деятельности на 31.10.2020.pdf',
              linkTitle: 'Показатели деятельности на 31.10.2020',
            },
            {
              linkHref: '/pdf/infoOpening/index2020/Показатели деятельности на 30.11.2020.pdf',
              linkTitle: 'Показатели деятельности на 30.11.2020',
            },
            {
              linkHref: '/pdf/infoOpening/index2020/Показатели деятельности на 31.12.2020.pdf',
              linkTitle: 'Показатели деятельности на 31.12.2020',
            },
          ],
        },
        {
          heading: 'Показатели деятельности',
          subheading: '2019',
          indicatorRows: [
            {
              title: 'Количество вкладчиков фонда',
              subtitle: '13 652',
            },
            {
              title: 'Количество участников фонда (человек)',
              subtitle: '41 609',
            },
            {
              title: 'Количество участников, получающих негосударственную пенсию (человек)',
              subtitle: '198',
            },
            {
              title:
                'Размер дохода от размещения пенсионных резервов (результат инвестирования пенсионных резервов), подлежащий зачислению на пенсионные счета негосударственного пенсионного обеспечения, тыс. руб.',
              subtitle: '1 429 559,88',
            },
            {
              title:
                'Размер дохода от размещения пенсионных резервов, направленный на формирование страхового резерва, тыс. руб.',
              subtitle: '142 229,62',
            },
            {
              title: 'Размер пенсионных резервов, тыс. руб.',
              subtitle: '20 385 221,50',
            },
            {
              title: 'в том числе: размер страхового резерва, тыс. руб.',
              subtitle: '1 537 201,58',
            },
            {
              title:
                'Результаты размещения средств пенсионных резервов на основании данных о средней расчетной ставке доходности от размещения пенсионных резервов, в соответствии с которой направлен доход на пополнение резервов покрытия пенсионных обязательств за отчетный год',
              subtitle: '8,60%',
            },
            {
              title:
                'Средневзвешенный процент, на который был увеличен размер назначенных негосударственных пенсий по итогам размещения средств пенсионных резервов за отчетный год',
              subtitle: '9,74%',
            },
          ],
          links: [
            {
              linkHref: '/pdf/infoOpening/index2019/Показатели деятельности на 30.09.2019.pdf',
              linkTitle: 'Показатели деятельности на 30.09.2019',
            },
            {
              linkHref: '/pdf/infoOpening/index2019/Показатели деятельности на 31.10.2019.pdf',
              linkTitle: 'Показатели деятельности на 31.10.2019',
            },
            {
              linkHref: '/pdf/infoOpening/index2019/Показатели деятельности на 30.11.2019.pdf',
              linkTitle: 'Показатели деятельности на 30.11.2019',
            },
          ],
        },
        {
          heading: 'Показатели деятельности',
          subheading: '2018',
          indicatorRows: [
            {
              title: 'Количество вкладчиков фонда',
              subtitle: '12 059',
            },
            {
              title: 'Количество участников фонда (человек)',
              subtitle: '40 195',
            },
            {
              title: 'Количество участников, получающих негосударственную пенсию (человек)',
              subtitle: '166',
            },
            {
              title:
                'Размер дохода от размещения пенсионных резервов (результат инвестирования пенсионных резервов), подлежащий зачислению на пенсионные счета негосударственного пенсионного обеспечения, тыс. руб.',
              subtitle: '637 892',
            },
            {
              title:
                'Размер дохода от размещения пенсионных резервов, направленный на формирование страхового резерва, тыс. руб.',
              subtitle: '80 271',
            },
            {
              title: 'Размер пенсионных резервов, тыс. руб.',
              subtitle: '16 946 469',
            },
            {
              title: 'в том числе: размер страхового резерва, тыс. руб.',
              subtitle: '1 328 519',
            },
            {
              title:
                'Результаты размещения средств пенсионных резервов на основании данных о средней расчетной ставке доходности от размещения пенсионных резервов, в соответствии с которой направлен доход на пополнение резервов покрытия пенсионных обязательств за отчетный год',
              subtitle: '4,47%',
            },
            {
              title:
                'Средневзвешенный процент, на который был увеличен размер назначенных негосударственных пенсий по итогам размещения средств пенсионных резервов за отчетный год',
              subtitle: '4,8%',
            },
          ],
          links: [
            {
              linkHref: '/pdf/infoOpening/index2019/Показатели деятельности на 30.09.2018.pdf',
              linkTitle: 'Показатели деятельности на 30.09.2019',
            },
            {
              linkHref: '/pdf/infoOpening/index2019/Показатели деятельности на 31.10.2018.pdf',
              linkTitle: 'Показатели деятельности на 31.10.2019',
            },
            {
              linkHref: '/pdf/infoOpening/index2019/Показатели деятельности на 30.11.2018.pdf',
              linkTitle: 'Показатели деятельности на 30.11.2019',
            },
          ],
        },
        {
          links: [
            {
              linkHref:
                '/pdf/infoOpening/indexArchive/Finacial_data_and_performance_indicators_17-1576673962838.pdf',
              linkTitle: 'Показатели деятельности Фонда с 2009 по 2017 гг.',
            },
          ],
        },
      ],
    };
  },

  methods: {
    onChangeAdaptiveRadio(radioValue, id) {
      this.radioValue = radioValue;
      this.idOptions = id;
      // console.log('radioValue: ' + this.radioValue, 'this.idOptions: ' + this.idOptions);
    },
    onClickRadioListController() {
      this.ifRadioListVisible = !this.ifRadioListVisible;
      // console.log('ifRadioListVisible: ' + this.ifRadioListVisible);
    },
    onChangeRadioListBlock(radioValue, id) {
      this.radioValue = radioValue;
      this.idOptions = id;
      // console.log('radioValue: ' + this.radioValue, 'this.idOptions: ' + this.idOptions);
    },
    onClickRadioListBlock() {
      this.ifRadioListVisible = false;
    },
  },

  components: {
    GuiRadioList,
    GuiAdaptiveRadio,
    FundPerformanceIndicators,
  },
};
</script>

<style lang="scss" scoped>
.fund-performance {
  width: 100%;
  background-color: #fff;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 24px;
  }

  // fund-performance__background-white
  &__background-white {
    background-color: #fff;
    transition: all 0.28s ease;
  }

  // fund-performance__background-gray
  &__background-gray {
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.28s ease;
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

  &__flex-container {
    width: 100%;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (min-width: 576px) {
      margin-bottom: 48px;
      flex-wrap: nowrap;
    }
  }

  &__select {
    width: 100%;
    position: relative;
    display: block;

    @media screen and (min-width: 576px) {
      display: none;
    }
  }

  &__adaptive-radio {
    position: relative;
    display: none;

    @media screen and (min-width: 576px) {
      display: block;
    }
  }

  &__list {
    width: 100%;
  }
}
</style>
