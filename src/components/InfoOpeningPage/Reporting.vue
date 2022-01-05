<template>
  <section class="reporting">
    <div class="reporting__container">
      <h1 class="reporting__heading">Отчетность</h1>

      <RadioSwitching
        :isHidingBlockVisible="radioSwitching.ifHidingBlockVisible"
        :isHasButtonToArchive="radioSwitching.isHasButtonToArchive"
        :switchItems="switchItems"
        @onChangeRadioSwitching="onChangeRadioSwitching"
        @onClickArchiveReporting="onClickArchiveReporting"
      />

      <div>
        <Reports
          v-for="(reporting, index) in reportings"
          :key="index"
          :reports="reporting"
          :ifReportVisible="radioValue === index"
        />
      </div>
    </div>
  </section>
</template>

<script>
import RadioSwitching from '@/components/gui/RadioSwitching.vue';
import Reports from '@/components/InfoOpeningPage/Reports.vue';
import ButtonToArchive from '@/components/gui/ButtonToArchive.vue';

export default {
  name: 'Reporting',
  data() {
    return {
      radioSwitching: {
        ifHidingBlockVisible: false,
        isHasButtonToArchive: true,
      },
      radioValue: 0,
      switchItems: [
        {
          name: '2021',
          value: 0,
        },
        {
          name: '2020',
          value: 1,
        },
        {
          name: '2019',
          value: 2,
        },
        {
          name: '2018',
          value: 3,
        },
        {
          name: '2017',
          value: 4,
        },
        {
          name: '2016',
          value: 5,
        },
        {
          name: '2015',
          value: 6,
        },
      ],

      reportings: [
        [
          {
            heading: '1 квартал',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2021/Бухгалтерский баланс на 31 марта 2021 года.pdf',
                linkTitle: 'Бухгалтерский баланс на 31 марта 2021 года',
                linkSubtitle: '30.04.2021',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2021/Отчет о потоках денежных средств за 1 квартал 2021 года.pdf',
                linkTitle: 'Отчет о потоках денежных средств за 1 квартал 2021 года',
                linkSubtitle: '30.04.2021',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2021/Отчет о финансовых результатах за 1 квартал 2021 года-1619814746700.pdf',
                linkTitle: 'Отчет о финансовых результатах за 1 квартал 2021 года',
                linkSubtitle: '30.04.2021',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2021/Отчет об изменениях собственного капитала за 1 квартал 2021 года.pdf',
                linkTitle: 'Отчет об изменениях собственного капитала за 1 квартал 2021 года',
                linkSubtitle: '30.04.2021',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2021/Избранные примечания к бухгалтерской отчетности за 1 квартал 2021 года.pdf',
                linkTitle: 'Избранные примечания к бухгалтерской отчетности за 1 квартал 2021 года',
                linkSubtitle: '30.04.2021',
              },
            ],
          },
          {
            heading: '2 квартал',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2021/Бухгалтерский баланс на 31 марта 2021 года.pdf',
                linkTitle: 'Бухгалтерский баланс на 30 июня 2021 года',
                linkSubtitle: '30.07.2021',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2021/Отчет о потоках денежных средств за 1 полугодие 2021 года.pdf',
                linkTitle: 'Отчет о потоках денежных средств за 1 полугодие 2021 года',
                linkSubtitle: '30.07.2021',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2021/Отчет о финансовых результатах за 1 полугодие 2021 года.pdf',
                linkTitle: 'Отчет о финансовых результатах за 1 полугодие 2021 года',
                linkSubtitle: '30.07.2021',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2021/Отчет об изменениях собственного капитала за 1 полугодие 2021 года.pdf',
                linkTitle: 'Отчет об изменениях собственного капитала за 1 полугодие 2021 года',
                linkSubtitle: '30.07.2021',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2021/Избранные примечания к бухгалтерской отчетности за 1 полугодие 2021 года.pdf',
                linkTitle:
                  'Избранные примечания к бухгалтерской отчетности за 1 полугодие 2021 года',
                linkSubtitle: '30.07.2021',
              },
            ],
          },
        ],
        [
          {
            heading: '1 квартал',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Бухгалтерский баланс на 31 марта 2020 года.pdf',
                linkTitle: 'Бухгалтерский баланс на 31 марта 2020 года',
                linkSubtitle: '16.06.2020',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Отчет о потоках денежных средств за 1 квартал 2020 года.pdf',
                linkTitle: 'Отчет о потоках денежных средств за 1 квартал 2020 года',
                linkSubtitle: '16.06.2020',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Отчет о финансовых результатах за 1 квартал 2020 года.pdf',
                linkTitle: 'Отчет о финансовых результатах за 1 квартал 2020 года',
                linkSubtitle: '16.06.2020',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Отчет об изменениях собственного капитала за 1 квартал 2020 года.pdf',
                linkTitle: 'Отчет об изменениях собственного капитала за 1 квартал 2020 года',
                linkSubtitle: '16.06.2020',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Избранные примечания к бухгалтерской отчетности за 1 квартал 2020 года (испр14 08).pdf',
                linkTitle:
                  'Избранные примечания к бухгалтерской отчетности за 1 квартал 2020 года (взамен опубликованных от 16.06.2020)',
                linkSubtitle: '14.08.2020',
              },
            ],
          },
          {
            heading: '2 квартал',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Бухгалтерский баланс на 30 июня 2020 года.pdf',
                linkTitle: 'Бухгалтерский баланс на 30 июня 2020 года',
                linkSubtitle: '30.07.2020',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Отчет о потоках денежных средств за 1полугодие 2020 года.pdf',
                linkTitle: 'Отчет о потоках денежных средств за 1 полугодие 2020 года',
                linkSubtitle: '30.07.2020',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Отчет о финансовых результатах за 1 полугодие 2020 года.pdf',
                linkTitle: 'Отчет о финансовых результатах за 1 полугодие 2020 года',
                linkSubtitle: '30.07.2020',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Отчет об изменениях собственного капитала за 1 полугодие 2020 года.pdf',
                linkTitle: 'Отчет об изменениях собственного капитала за 1 полугодие 2020 года',
                linkSubtitle: '30.07.2020',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Избранные примечания к бухгалтерской отчетности за 1 полугодие 2020 года.pdf',
                linkTitle:
                  'Избранные примечания к бухгалтерской отчетности за 1 полугодие 2020 года',
                linkSubtitle: '30.07.2020',
              },
            ],
          },
          {
            heading: '3 квартал',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Бухгалтерский баланс на 30 сентября 2020 года.pdf',
                linkTitle: 'Бухгалтерский баланс на 30 сентября 2020 года',
                linkSubtitle: '30.10.2020',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Отчет о потоках денежных средств за 9 месяцев 2020 года.pdf',
                linkTitle: 'Отчет о потоках денежных средств за 9 месяцев 2020 года',
                linkSubtitle: '30.10.2020',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Отчет о финансовых результатах за 9 месяцев 2020 года.pdf',
                linkTitle: 'Отчет о финансовых результатах за 9 месяцев 2020 года',
                linkSubtitle: '30.10.2020',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Отчет об изменениях собственного капитала за 9 месяцев 2020 года.pdf',
                linkTitle: 'Отчет об изменениях собственного капитала за 9 месяцев 2020 года',
                linkSubtitle: '30.10.2020',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Избранные примечания к бухгалтерской отчетности за 9 месяцев 2020 года.pdf',
                linkTitle: 'Избранные примечания к бухгалтерской отчетности за 9 месяцев 2020 года',
                linkSubtitle: '30.10.2020',
              },
            ],
          },
          {
            heading: 'Бухгалтерская (финансовая) отчетность АО НПФ «Ренессанс пенсии» за 2020 год',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Бухгалтерский баланс по состоянию на 31.12.2020.pdf',
                linkTitle:
                  'Бухгалтерский баланс по состоянию на 31.12.2020 (взамен опубликованного от 31.03.2021)',
                linkSubtitle: '27.04.2021',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Отчет о потоках денежных средств за 2020 год.pdf',
                linkTitle:
                  'Отчет о потоках денежных средств за 2020 год (взамен опубликованного от 31.03.2021)',
                linkSubtitle: '27.04.2021',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Отчет об изменении собственного капитала за 2020 год.pdf',
                linkTitle:
                  'Отчет об изменении собственного капитала за 2020 год (взамен опубликованного от 31.03.2021)',
                linkSubtitle: '27.04.2021',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Отчет о финансовых результатах за 2020 год.pdf',
                linkTitle:
                  'Отчет о финансовых результатах за 2020 год (взамен опубликованного от 31.03.2021)',
                linkSubtitle: '27.04.2021',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2020/Примечания к бухгалтерской (финансовой) отчетности за 2020 год.pdf',
                linkTitle:
                  'Примечания к бухгалтерской (финансовой) отчетности за 2020 год (взамен опубликованных от 31.03.2021)',
                linkSubtitle: '27.04.2021',
              },
            ],
          },
          {
            heading: 'Аудиторское и актуарное заключения АО НПФ «Ренессанс пенсии» за 2020 год',

            archiveLinks: [
              {
                linkHref: '/pdf/infoOpening/reporting/2020/Актуарное заключение за 2020 год.pdf',
                linkTitle: 'Актуарное заключение за 2020 год',
                linkSubtitle: '31.03.2021',
              },
              {
                linkHref: '/pdf/infoOpening/reporting/2020/Аудиторское заключение за 2020 год.pdf',
                linkTitle: 'Аудиторское заключение за 2020 год',
                linkSubtitle: '29.04.2021',
              },
            ],
          },
        ],
        [
          {
            heading: '1 квартал',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Бухгалтерский баланс за 1 квартал 2019.pdf',
                linkTitle: 'Бухгалтерский баланс на 31 марта 2019 года',
                linkSubtitle: '16.05.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Отчет о потоках ден. средств за 1 квартал 2019.pdf',
                linkTitle: 'Отчет о потоках денежных средств за 1 квартал 2019 года',
                linkSubtitle: '16.05.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Отчет о финансовых результатах за 1 кв. 2019.pdf',
                linkTitle: 'Отчет о финансовых результатах за 1 квартал 2019 года',
                linkSubtitle: '16.05.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Отчет об изменениях собств. капитала за 1 кв. 2019.pdf',
                linkTitle: 'Отчет об изменениях собственного капитала за 1 квартал 2019 года',
                linkSubtitle: '16.05.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Избранные примечания к бух. отчетности за 1 кв. 2019.pdf',
                linkTitle: 'Избранные примечания к бухгалтерской отчетности за 1 квартал 2019 года',
                linkSubtitle: '16.05.2019',
              },
            ],
          },
          {
            heading: '2 квартал',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Бухгалтерский баланс на 30 июня 2019 года.pdf',
                linkTitle: 'Бухгалтерский баланс на 30 июня 2019 года',
                linkSubtitle: '07.08.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Отчет о потоках ден. средств за 1 квартал 2019.pdf',
                linkTitle: 'Отчет о потоках денежных средств за 1 полугодие 2019 года',
                linkSubtitle: '07.08.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Отчет о финансовых результатах за 1 полугодие 2019 года.pdf',
                linkTitle: 'Отчет о финансовых результатах за 1 полугодие 2019 года',
                linkSubtitle: '07.08.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Отчет об изменении собственного капитала за 1 полугодие 2019 года.pdf',
                linkTitle: 'Отчет об изменении собственного капитала за 1 полугодие 2019 года',
                linkSubtitle: '07.08.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Избранные примечания к бухгалтерской отчетности за 1 полугодие 2019 года.pdf',
                linkTitle:
                  'Избранные примечания к бухгалтерской отчетности за 1 полугодие 2019 года',
                linkSubtitle: '07.08.2019',
              },
            ],
          },
          {
            heading: '3 квартал',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Бухгалтерский баланс на 30 сентября 2019 года.pdf',
                linkTitle: 'Бухгалтерский баланс на 30 сентября 2019 года',
                linkSubtitle: '30.10.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Отчет о потоках денежных средств за 9 месяцев 2019 года.pdf',
                linkTitle: 'Отчет о потоках денежных средств за 9 месяцев 2019 года',
                linkSubtitle: '30.10.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Отчет о потоках денежных средств за 9 месяцев 2019 года.pdf',
                linkTitle: 'Отчет о финансовых результатах за 9 месяцев 2019 года',
                linkSubtitle: '30.10.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Отчет об изменениях собственного капитала за 9 месяцев 2019 года.pdf',
                linkTitle: 'Отчет об изменениях собственного капитала за 9 месяцев 2019 года',
                linkSubtitle: '30.10.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Избранные примечания к бухгалтерской отчетности за 9 месяцев 2019 года.pdf',
                linkTitle: 'Избранные примечания к бухгалтерской отчетности за 9 месяцев 2019 года',
                linkSubtitle: '30.10.2019',
              },
            ],
          },
          {
            heading: 'Бухгалтерская (финансовая) отчетность АО НПФ «Ренессанс пенсии» за 2019 год',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Бухгалтерский баланс по состоянию на 31.12.2019.pdf',
                linkTitle: 'Бухгалтерский баланс по состоянию на 31.12.2019',
                linkSubtitle: '30.04.2020',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Отчет о потоках денежных средств за 2019 год.pdf',
                linkTitle: 'Отчет о потоках денежных средств за 2019 год',
                linkSubtitle: '30.04.2020',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Отчет об изменении собственного капитала за 2019 год.pdf',
                linkTitle: 'Отчет об изменении собственного капитала за 2019 год',
                linkSubtitle: '30.04.2020',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Отчет о финансовых результатах за 2019 год.pdf',
                linkTitle: 'Отчет о финансовых результатах за 2019 год',
                linkSubtitle: '30.04.2020',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Примечания к бухгалтерской (финансовой) отчетности за 2019 год (07.08.2020)-1603723746006.pdf',
                linkTitle:
                  'Примечания к бухгалтерской (финансовой) отчетности за 2019 год (взамен опубликованных от 30.04.2020)',
                linkSubtitle: '30.04.2020',
              },
            ],
          },
          {
            heading: 'Аудиторское и актуарное заключения АО НПФ «Ренессанс пенсии» за 2019 год',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2019/Аудиторское заключение АО НПФ «Ренессанс пенсии» за 2019 год.pdf',
                linkTitle: 'Аудиторское заключение за 2019 год',
                linkSubtitle: '30.04.2020',
              },
              {
                linkHref: '/pdf/infoOpening/reporting/2019/Актуарное заключение  за 2019 год.pdf',
                linkTitle: 'Актуарное заключение за 2019 год',
                linkSubtitle: '30.04.2020',
              },
            ],
          },
          {
            heading: 'Финансовая отчетность по МСФО',

            archiveLinks: [
              {
                linkHref: '/pdf/infoOpening/reporting/2019/msfo2019.pdf',
                linkTitle: 'Финансовая отчетность по МСФО за 2019 год',
                linkSubtitle: '26.06.2020',
              },
            ],
          },
        ],
        [
          {
            heading: '1 квартал',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Бухгалтерский баланс на 31 марта 2018 года.pdf',
                linkTitle: 'Бухгалтерский баланс на 31 марта 2018 года',
                linkSubtitle: '10.05.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Отчет о потоках денежных средств за 1 квартал 2018 года (исправл. от 15.08.2018).pdf',
                linkTitle:
                  'Отчет о потоках денежных средств за 1 квартал 2018 года взамен публикации 10.05.2018',
                linkSubtitle: '15.05.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Отчет о финансовых результатах за 1 квартал 2018 года.pdf',
                linkTitle: 'Отчет о финансовых результатах за 1 квартал 2018 года',
                linkSubtitle: '10.05.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Отчет об использовании средств для ОУД за 1 квартал 2018 года.pdf',
                linkTitle: 'Отчет об использовании средств для ОУД за 1 квартал 2018 года',
                linkSubtitle: '10.05.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Избранные примечания к бухгалтерской отчетности за 1 квартал 2018 года (исправл. от 15.08.2018).pdf',
                linkTitle:
                  'Избранные примечания к бухгалтерской отчетности за 1 квартал 2018 года взамен публикации 10.05.2018',
                linkSubtitle: '15.05.2018',
              },
            ],
          },
          {
            heading: '2 квартал',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Бухгалтерский баланс на 30 июня 2018 года.pdf',
                linkTitle: 'Бухгалтерский баланс на 30 июня 2018 года взамен публикации 10.08.2018',
                linkSubtitle: '21.09.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Отчет о потоках денежных средств за 2 квартал 2018 года (исправл.от 21.09.2018).pdf',
                linkTitle:
                  'Отчет о потоках денежных средств за 2 квартал 2018 года взамен публикации 10.08.2018',
                linkSubtitle: '21.09.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Отчет о финансовых результатах за 2 квартал 2018 года (исправл. от 21.09.2018).pdf',
                linkTitle:
                  'Отчет о финансовых результатах за 2 квартал 2018 года взамен публикации 10.08.2018',
                linkSubtitle: '21.09.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Отчет об использовании средств для ОУД за 2 квартал 2018 года (исправл. от 21.09.2018).pdf',
                linkTitle:
                  'Отчет об использовании средств для ОУД за 2 квартал 2018 года взамен публикации 10.08.2018',
                linkSubtitle: '21.09.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Избранные примечания к бухгалтерской отчетности за 2 квартал 2018 года (исправл. от 21.09.2018).pdf',
                linkTitle:
                  'Избранные примечания к бухгалтерской отчетности за 2 квартал 2018 года взамен публикации 10.08.2018',
                linkSubtitle: '21.09.2018',
              },
            ],
          },
          {
            heading: '3 квартал',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Бухгалтерский баланс на 30 сентября 2018 года.pdf',
                linkTitle: 'Бухгалтерский баланс на 30 сентября 2018 года',
                linkSubtitle: '07.11.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Отчет о потоках денежных средств за 9 месяцев 2018 года.pdf',
                linkTitle: 'Отчет о потоках денежных средств за 9 месяцев 2018 года',
                linkSubtitle: '07.11.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Отчет о финансовых результатах за 9 месяцев 2018 года.pdf',
                linkTitle: 'Отчет о финансовых результатах за 9 месяцев 2018 года',
                linkSubtitle: '07.11.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Отчет о потоках денежных средств за 9 месяцев 2018 года.pdf',
                linkTitle: 'Отчет о движении средств для ОУД за 9 месяцев 2018 года',
                linkSubtitle: '07.11.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Избранные примечания к бухгалтерской отчетности за 9 месяцев 2018 года.pdf',
                linkTitle:
                  'Избранные примечания к бухгалтерской отчетности за 9 месяцев 2018 года взамен публикации 07.11.2018',
                linkSubtitle: '19.11.2018',
              },
            ],
          },
          {
            heading:
              'Заключительная бухгалтерская (финансовая) отчетность НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ»',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Бухгалтерский баланс по состоянию на 31.12.2018.pdf',
                linkTitle: 'Бухгалтерский баланс по состоянию на 13.12.2018',
                linkSubtitle: '16.05.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Отчет о потоках денежных средств за период с 01.01.2018 по 13.12.2018.pdf',
                linkTitle: 'Отчет о движении средств ОУД за период с 01.01.2018 по 13.12.2018',
                linkSubtitle: '16.05.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Отчет о целевом использовании средств за период с 01.01.2018 по 13.12.2018.pdf',
                linkTitle:
                  'Отчет о целевом использовании средств за период с 01.01.2018 по 13.12.2018',
                linkSubtitle: '16.05.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Отчет о финансовых результатах за период с 01.01.2018 по 13.12.2018.pdf',
                linkTitle: 'Отчет о финансовых результатах за период с 01.01.2018 по 13.12.2018',
                linkSubtitle: '16.05.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Отчет о потоках денежных средств за период с 01.01.2018 по 13.12.2018.pdf',
                linkTitle: 'Отчет о потоках денежных средств за период с 01.01.2018 по 13.12.2018',
                linkSubtitle: '16.05.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Примечания к бухгалтерской отчетности за период с 01.01.2018 по 13.12.2018.pdf',
                linkTitle:
                  'Примечания к бухгалтерской отчетности за период с 01.01.2018 по 13.12.2018',
                linkSubtitle: '16.05.2019',
              },
            ],
          },
          {
            heading:
              'Бухгалтерская (финансовая) отчетность АО НПФ «Ренессанс пенсии» по итогам 2018 года',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Бухгалтерский баланс по состоянию на 31.12.2018.pdf',
                linkTitle: 'Бухгалтерский баланс по состоянию на 31.12.2018',
                linkSubtitle: '16.05.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Отчет о финансовых результатах за период с 14.12.2018 по 31.12.2018.pdf',
                linkTitle: 'Отчет о финансовых результатах за период с 14.12.2018 по 31.12.2018',
                linkSubtitle: '16.05.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Отчет о потоках денежных средств за период с 14.12.2018 по 31.12.2018.pdf',
                linkTitle: 'Отчет о потоках денежных средств за период с 14.12.2018 по 31.12.2018',
                linkSubtitle: '16.05.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Отчет об изменениях собственного капитала за период с 14.12.2018 по 31.12.2018.pdf',
                linkTitle:
                  'Отчет об изменениях собственного капитала за период с 14.12.2018 по 31.12.2018',
                linkSubtitle: '16.05.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Примечания к бухгалтерской отчетности за период с 14.12.2018 по 31.12.2018.pdf',
                linkTitle:
                  'Примечания к бухгалтерской отчетности за период с 14.12.2018 по 31.12.2018',
                linkSubtitle: '16.05.2019',
              },
            ],
          },
          {
            heading: 'Аудиторское и актуарное заключения',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Аудиторское заключение НПФ БЛАГОСОСТОЯНИЕ ЭМЭНСИ за 2018 год.pdf',
                linkTitle: 'Аудиторское заключение НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» за 2018 год',
                linkSubtitle: '16.05.2019',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Аудиторское заключение АО НПФ Ренессанс пенсии за 2018 год.pdf',
                linkTitle: 'Аудиторское заключение АО НПФ «Ренессанс пенсии» за 2018 год',
                linkSubtitle: '16.05.2019',
              },
              {
                linkHref: '/pdf/infoOpening/reporting/2018/Актуарное заключение за 2018 год.pdf',
                linkTitle: 'Актуарное заключение за 2018 год',
                linkSubtitle: '16.05.2019',
              },
            ],
          },
          {
            heading: 'Финансовая отчетность по МСФО',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2018/Финансовая отчетность по МСФО за 2018 год.pdf',
                linkTitle: 'Финансовая отчетность по МСФО',
                linkSubtitle: '06.05.2019',
              },
            ],
          },
        ],
        [
          {
            heading: '1 квартал',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Бухгалтерский баланс за 1 квартал 2017 года (исправл. от 13.10.2017).pdf',
                linkTitle:
                  'Бухгалтерский баланс за 1 квартал 2017 года взамен публикации 05.05.2017',
                linkSubtitle: '13.10.2017',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Отчет о потоках денежных средств за 1 квартал 2017 года (исправл. от 13.10.2017).pdf',
                linkTitle:
                  'Отчет о потоках денежных средств за 1 квартал 2017 года взамен публикации 05.05.2017',
                linkSubtitle: '13.10.2017',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Отчет о финансовых результатах за 1 квартал 2017 года (исправл. от 13.10.2017).pdf',
                linkTitle:
                  'Отчет о финансовых результатах за 1 квартал 2017 года взамен публикации 05.05.2017',
                linkSubtitle: '13.10.2017',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Отчет об использовании средств для ОУД за 1 квартал 2017 года (исправл. от 13.10.2017).pdf',
                linkTitle:
                  'Отчет об использовании средств для ОУД за 1 квартал 2017 года взамен публикации 05.05.2017',
                linkSubtitle: '13.10.2017',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Избранные примечания к промежуточной бухгалтерской (финансовой) отчетности за 1 квартал 2017 года.pdf',
                linkTitle:
                  'Избранные примечания к промежуточной бухгалтерской (финансовой) отчетности за 1 квартал 2017 года публикация 13.10.2017',
                linkSubtitle: '13.10.2017',
              },
            ],
          },
          {
            heading: '2 квартал',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Бухгалтерский баланс за полугодие 2017 (исправл от 13.10.2017).pdf',
                linkTitle:
                  'Бухгалтерский баланс за полугодие 2017 взамен публикации 18.09.2017 года',
                linkSubtitle: '13.10.2017',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Отчет о потоках денежных средств за полугодие 2017 года (исправл от 13.10.2017).pdf',
                linkTitle:
                  'Отчет о потоках денежных средств за полугодие 2017 года взамен публикации 18.09.2017',
                linkSubtitle: '13.10.2017',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Отчет о финансовых результатах за 2 квартал 2017.pdf',
                linkTitle:
                  'Отчет о финансовых результатах за 2 квартал 2017 года взамен публикации 18.09.2017',
                linkSubtitle: '13.10.2017',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Отчет о финансовых результатах за полугодие 2017.pdf',
                linkTitle:
                  'Отчет о финансовых результатах за полугодие 2017 года взамен публикации 18.09.2017',
                linkSubtitle: '13.10.2017',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Отчет об использовании средств для ОУД за 2 квартал 2018 года (исправл. от 21.09.2018)-1577108563691.pdf',
                linkTitle:
                  'Отчет об использовании средств для ОУД за полугодие 2017 года взамен публикации 18.09.2017',
                linkSubtitle: '13.10.2017',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Избранные примечания к промежуточной бухгалтерской (финансовой) отчетности за 1 квартал 2017 года.pdf',
                linkTitle:
                  'Избранные примечания к промежуточной бухгалтерской (финансовой) отчетности за полугодие 2017 года взамен публикации 18.09.2017',
                linkSubtitle: '13.10.2017',
              },
            ],
          },
          {
            heading: '3 квартал',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Бухгалтерский баланс за 9 месяцев 2017 года.pdf',
                linkTitle: 'Бухгалтерский баланс за 9 месяцев 2017 года',
                linkSubtitle: '07.11.2017',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Отчет о потоках денежных средств за 9 месяцев 2017 года.pdf',
                linkTitle: 'Отчет о потоках денежных средств за 9 месяцев 2017 года',
                linkSubtitle: '07.11.2017',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Отчет о финансовых результатах за 3 квартал 2017 года.pdf',
                linkTitle: 'Отчет о финансовых результатах за 3 квартал 2017 года',
                linkSubtitle: '07.11.2017',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Отчет о финансовых результатах за 9 месяцев 2017 года.pdf',
                linkTitle: 'Отчет о финансовых результатах за 9 месяцев 2017 года',
                linkSubtitle: '07.11.2017',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Отчет об использовании средств для ОУД за 2 квартал 2018 года (исправл. от 21.09.2018).pdf',
                linkTitle: 'Отчет об использовании средств для ОУД за 9 месяцев 2017 года',
                linkSubtitle: '07.11.2017',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Избранные примечания к бухгалтерской отчетности за 9 месяцев 2018 года-1577106787000.pdf',
                linkTitle:
                  'Избранные примечания к промежуточной бухгалтерской (финансовой) отчетности за 9 месяцев 2017 года',
                linkSubtitle: '07.11.2017',
              },
            ],
          },
          {
            heading: '4 квартал',

            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Бухгалтерский баланс на 31 декабря 2017 года.pdf',
                linkTitle: 'Бухгалтерский баланс на 31 декабря 2017 года',
                linkSubtitle: '10.05.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Отчет о потоках денежных средств за 2017 год.pdf',
                linkTitle: 'Отчет о потоках денежных средств за 2017 год',
                linkSubtitle: '10.05.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Отчет о финансовых результатах за 2017 год.pdf',
                linkTitle: 'Отчет о финансовых результатах за 2017 год',
                linkSubtitle: '10.05.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Отчет об использовании средств для ОУД за 2017 год.pdf',
                linkTitle: 'Отчет об использовании средств для ОУД за 2017 год',
                linkSubtitle: '0.05.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Отчет о целевом использовании средств за 2017 год.pdf',
                linkTitle: 'Отчет о целевом использовании средств за 2017 год',
                linkSubtitle: '17.05.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2017/Примечания к бухгалтерской отчетности за 2017 год.pdf',
                linkTitle: 'Примечания к бухгалтерской отчетности за 2017 год',
                linkSubtitle: '10.05.2018',
              },
            ],
          },
          {
            heading: 'Аудиторское и актуарное заключения',

            archiveLinks: [
              {
                linkHref: '/pdf/infoOpening/reporting/2017/Аудиторское заключение за 2017 год.pdf',
                linkTitle: 'Аудиторское заключение за 2017 год',
                linkSubtitle: '10.05.2018',
              },
              {
                linkHref: '/pdf/infoOpening/reporting/2017/Актуарное заключение за 2017 год 2.pdf',
                linkTitle: 'Актуарное заключение за 2017 год',
                linkSubtitle: '18.05.2018',
              },
            ],
          },
          {
            heading: 'Финансовая отчетность по МСФО',

            archiveLinks: [
              {
                linkHref: '/pdf/infoOpening/reporting/2017/NSPF_Blagosostoyanie_IFRS_2017.pdf',
                linkTitle: 'Финансовая отчетность по МСФО за 2017 год',
                linkSubtitle: '07.05.2018',
              },
            ],
          },
        ],
        [
          {
            heading: 'Отчёты за 2016',
            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2016/Бухгалтерский баланс на 31 декабря 2016 года.pdf',
                linkTitle: 'Бухгалтерский баланс на 31 декабря 2016 года',
                linkSubtitle: '07.08.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2016/Отчет о прибылях и убытках на 31 декабря 2016 года.pdf',
                linkTitle: 'Отчет о прибылях и убытках на 31 декабря 2016 года',
                linkSubtitle: '07.08.2018',
              },
              {
                linkHref: '/pdf/infoOpening/reporting/2016/Актуарное заключение за 2016 г..pdf',
                linkTitle:
                  'Актуарное заключение за 2016 г. выдал 29.03.17 года Актуарий негосударственных пенсионных фондов Мансуров Андрей Касимович',
                linkSubtitle: '07.08.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2016/Годовая финансовая отчетность за 2016г. (МСФО).pdf',
                linkTitle: 'Годовая финансовая отчетность за 2016г. (МСФО)',
                linkSubtitle: '07.08.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2016/Аудиторское заключение РСБУ 2016 год.pdf',
                linkTitle: 'Аудиторское заключение РСБУ 2016 год',
                linkSubtitle: '07.08.2018',
              },
            ],
          },
        ],
        [
          {
            heading: 'Отчёты за 2015',
            archiveLinks: [
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2015/Бухгалтерский баланс на 31 декабря 2015 года.pdf',
                linkTitle: ' Бухгалтерский баланс на 31 декабря 2015 года',
                linkSubtitle: '21.05.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2015/Отчет о прибылях и убытках на 31 декабря 2015 года.pdf',
                linkTitle: 'Отчет о прибылях и убытках на 31 декабря 2015 года',
                linkSubtitle: '21.05.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2015/Актуарное заключение за 2015 г. выдал 28.03.16 года Актуарий негосударственных пенсионных фондов Мансуров Андрей Касимович.pdf',
                linkTitle:
                  'Актуарное заключение за 2015 г. выдал 28.03.16 года Актуарий негосударственных пенсионных фондов Мансуров Андрей Касимович',
                linkSubtitle: '21.05.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2015/Годовая финансовая отчетность за 2015г. (МСФО).pdf',
                linkTitle: 'Годовая финансовая отчетность за 2015г. (МСФО)',
                linkSubtitle: '21.05.2018',
              },
              {
                linkHref:
                  '/pdf/infoOpening/reporting/2015/Аудиторское заключение (Специальная отчетность) 2015 год.pdf',
                linkTitle: 'Аудиторское заключение (Специальная отчетность) 2015 год',
                linkSubtitle: '21.05.2018',
              },
              {
                linkHref: '/pdf/infoOpening/reporting/2015/Аудиторское заключение РСБУ 2015.pdf',
                linkTitle: 'Аудиторское заключение РСБУ 2015',
                linkSubtitle: '21.05.2018',
              },
            ],
          },
        ],
      ],
    };
  },

  methods: {
    onChangeRadioSwitching(radioValue) {
      this.radioValue = radioValue;
      // console.log('radioValue: ' + this.radioValue);
    },
    onClickArchiveReporting() {
      this.$emit('onClickArchiveReporting');
    },
  },
  components: {
    RadioSwitching,
    ButtonToArchive,
    Reports,
  },
};
</script>

<style lang="scss" scoped>
.reporting {
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
}
</style>
