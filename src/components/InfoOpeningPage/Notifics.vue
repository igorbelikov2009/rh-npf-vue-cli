<template>
  <section class="notifics">
    <div class="notifics__container">
      <h2 class="notifics__heading">Уведомления</h2>

      <div class="notifics__triple-switch">
        <GuiRadioRound @onChangeRadio="onChangeRadio" :switchItems="radioYears" />
      </div>

      <div class="notifics__content">
        <NotificsContent
          v-for="(content, index) in formattedContents"
          :key="index"
          :isContentVisible="selectedYear === index"
          :date="content.date"
          :description="content.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { format } from 'date-fns';

import GuiRadioRound from '@/components/gui/guiRadio/GuiRadioRound.vue';
import NotificsContent from '@/components/InfoOpeningPage/NotificsContent.vue';

export default {
  name: 'Notifics',
  data() {
    return {
      selectedYear: 0,

      contents: [
        {
          // date: '12.01.2021',
          date: '2021-01-12T00:00:00.000',
          description:
            'АО НПФ «Ренессанс пенсии» заключил договор доверительного управления пенсионными резервами №311220/1 от 31 декабря 2020 года с Акционерным обществом «Управляющая компания «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ» (лицензия № 21-000-1-00054 от 3 декабря 2001 года).',
        },
        {
          // date: '21.02.2020',
          date: '2020-02-21T00:00:00.000',
          description:
            'АО НПФ «Ренессанс пенсии» заключил договоры доверительного управления пенсионными резервами №200220/1 от 20 февраля 2020 года и №200220/2 от 20 февраля 2020 года с Акционерным обществом «Управляющая компания «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ» (лицензия № 21-000-1-00054 от 3 декабря 2001 года).',
        },
        {
          // date: '29.05.2018',
          date: '2018-05-29T00:00:00.000',
          description:
            'НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» заключил договор доверительного управления пенсионными резервами № 250518/1 от 25 мая 2018 года с Акционерным обществом «Управляющая компания «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ» (лицензия № 21-000-1-00054 от 3 декабря 2001 года).',
        },
      ],
    };
  },

  computed: {
    radioYears() {
      return this.contents
        .map(item => new Date(item.date).getFullYear())
        .map((item, index) => ({ title: String(item), value: Number(index) }));
    },
    formattedContents() {
      return this.contents.map(item => ({
        date: String(format(new Date(item.date), 'dd.MM.yyyy')),
        description: String(item.description),
      }));
    },
  },
  methods: {
    onChangeRadio(selectedYear) {
      this.selectedYear = selectedYear;
      // console.log('selectedYear: ' + this.selectedYear, selectedYear);
    },
  },

  components: {
    GuiRadioRound,
    NotificsContent,
  },
};
</script>

<style lang="scss" scoped>
.notifics {
  width: 100%;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 28px;
  }

  &__container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }

  &__heading {
    display: block;
    width: 100%;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      font-size: 34px;
      line-height: 48px;
      margin-bottom: 48px;
    }
  }

  &__triple-param-switch {
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      margin-bottom: 48px;
    }
  }

  &__content {
    width: 100%;
  }
}
</style>
