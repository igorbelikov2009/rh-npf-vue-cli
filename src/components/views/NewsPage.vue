<template>
  <div class="news-page">
    <TopBlock image="/images/news/news.jpg" heading="Новости" />
    <TopMenu />
    <section class="news-page__news">
      <div class="news-page__container">
        <div class="news-page__flex-container">
          <div class="news-page__select">
            <GuiSelect
              :value="selectedYear"
              :isSelectionOptionsBlock="ifSelectionOptionsBlock"
              :selectionElements="radioYearsDuplicate"
              @onClickSelectionController="onClickSelectionController"
              @onChangeSelectionBlock="onChangeSelectionBlock"
              @onClickSelectionBlock="onClickSelectionBlock"
            />
          </div>

          <div class="news-page__adaptive-radio">
            <GuiAdaptiveRadio
              :value="selectedYear"
              :radioElements="radioYearsDuplicate"
              @onChangeRadio="onChangeRadio"
            />
          </div>
        </div>

        <!-- Разделить на 2 компоненты И НЕ СМЕШИВАТЬ ИХ -->
        <!-- <RadioSwitching
          :value="selectedYear"
          :switchItems="radioYears"
          @onChangeRadioSwitching="onChangeRadioSwitching"
        /> -->

        <div class="news-page__row">
          <div class="news-page__list">
            <NewsLink
              v-for="item in filteredByYearNews"
              :key="item.id"
              :id="item.id"
              :title="item.title"
              :date="item.date"
            />

            <!-- @click="$router.push({path: `/new?id=${item.id}`})" -->
          </div>

          <div class="news-page__contact">
            <p class="news-page__contact-header">Контакты пресс-службы</p>

            <p class="news-page__contact-adress">
              115114, Россия, Москва, Дербеневская набережная, 7, стр. 22, подъезд B, 3 этаж
            </p>

            <p class="news-page__contact-phone">Телефон: 8 (495) 933-47-66</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
// import { format } from 'date-fns';

import TopBlock from '@/components/general/TopBlock.vue';
import TopMenu from '@/components/topMenu/TopMenu.vue';
import GuiSelect from '@/components/gui/guiSelect/GuiSelect.vue';
import GuiAdaptiveRadio from '@/components/gui/guiRadio/GuiAdaptiveRadio.vue';

import RadioSwitching from '@/components/gui/RadioSwitching.vue';
import NewsLink from '@/components/news/NewsLink.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'NewsPage',

  data() {
    return {
      ifSelectionOptionsBlock: false,
      selectedYear: 2021,
    };
  },
  computed: {
    news() {
      return this.$store.getters['news/sortedByDateNews'];
    },
    radioYearsDuplicate() {
      return this.news
        .map(item => new Date(item.date).getFullYear())
        .filter((item, index, self) => index === self.indexOf(item))
        .map(item => ({ date: String(item), value: item }));
    },

    radioYears() {
      return this.news
        .map(item => new Date(item.date).getFullYear())
        .filter((item, index, self) => index === self.indexOf(item))
        .map(item => ({ name: String(item), value: item }));
      /* name => date */
    },

    filteredByYearNews() {
      return this.news.filter(item => {
        return new Date(item.date).getFullYear() === this.selectedYear;
      });
    },
  },
  methods: {
    onChangeRadioSwitching(value) {
      this.selectedYear = value;
      console.log('selectedYear: ' + this.selectedYear);
    },

    //
    //
    onChangeRadio(selectedYear) {
      this.selectedYear = selectedYear;
      // console.log('OK, selectedYear: ' + this.selectedYear);
    },
    onClickSelectionController() {
      this.ifSelectionOptionsBlock = !this.ifSelectionOptionsBlock;
      // console.log('ifSelectionOptionsBlock: ' + this.ifSelectionOptionsBlock);
    },
    onChangeSelectionBlock(selectedYear) {
      this.selectedYear = selectedYear;
      // console.log('selectedYear: ' + this.selectedYear);
    },
    onClickSelectionBlock() {
      this.ifSelectionOptionsBlock = false;
    },
  },

  components: {
    TopBlock,
    TopMenu,
    GuiSelect,
    GuiAdaptiveRadio,
    //
    RadioSwitching,
    NewsLink,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.news-page {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  color: #5a646e;

  // news-page__background-white
  &__background-white {
    background-color: #fff;
    transition: all 0.28s ease;
  }

  // news-page__background-gray
  &__background-gray {
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.28s ease;
  }

  &__news {
    width: 100%;
    padding: 24px;

    @media screen and (min-width: 576px) {
      padding-right: 28px;
      padding-left: 28px;
      padding-top: 48px;
      padding-bottom: 48px;
    }
  }

  &__container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
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

  &__row {
    display: flex;
    flex-wrap: wrap;
  }

  &__list {
    width: 100%;
    padding-right: 12px;

    @media screen and (min-width: 576px) {
      width: 66.66%;
    }

    @media screen and (min-width: 768px) {
      width: 66.66%;
      padding-right: 14px;
    }
  }

  &__contact {
    display: none;

    @media screen and (min-width: 576px) {
      display: block;
      width: 33.33%;
      padding-left: 12px;
    }

    @media screen and (min-width: 768px) {
      width: 33.33%;
      padding-left: 14px;
    }
  }

  &__contact-header {
    font-size: 18px;
    line-height: 24px;
    color: #000;
    margin-bottom: 24px;
  }

  &__contact-adress {
    font-size: 16px;
    line-height: 24px;
    color: #5a646e;
  }

  &__contact-phone {
    font-size: 16px;
    line-height: 24px;
    color: #5a646e;
    margin-top: 24px;
  }
}
</style>
