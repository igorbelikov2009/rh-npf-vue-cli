<template>
  <div class="news-page">
    <TopBlock image="/images/news/news.jpg" heading="Новости" />

    <TopMenu />
    <section class="news-page__news">
      <div class="news-page__container-select">
        <div class="news-page__select">
          <GuiRadioList
            :value="selectedYear"
            :isRadioListVisible="ifRadioListVisible"
            :radioListElements="radioYearsDuplicate"
            @onClickRadioListController="onClickRadioListController"
            @onChangeRadioListBlock="onChangeRadioListBlock"
            @onClickRadioListBlock="onClickRadioListBlock"
          />
        </div>

        <div class="news-page__radio">
          <GuiAdaptiveRadio
            :value="selectedYear"
            :radioElements="radioYearsDuplicate"
            @onChangeAdaptiveRadio="onChangeAdaptiveRadio"
          />
        </div>
      </div>

      <div class="news-page__container-news">
        <div class="news-page__list-news">
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
    </section>

    <Footer />
  </div>
</template>

<script>
import TopBlock from '@/components/general/TopBlock.vue';
import TopMenu from '@/components/topMenu/TopMenu.vue';
import GuiRadioList from '@/components/gui/guiRadio/GuiRadioList.vue';
import GuiAdaptiveRadio from '@/components/gui/guiRadio/GuiAdaptiveRadio.vue';
import NewsLink from '@/components/news/NewsLink.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'NewsPage',

  data() {
    return {
      ifRadioListVisible: false,
      selectedYear: 2021,
    };
  },

  computed: {
    // usersStore() {
    //   return this.$store.state.users.users;
    // },
    // usersAge() {
    //   // return this.$store.getters['users/sortedByAge'];
    //   // return this.$store.state.users.users.slice().sort((a, b) => (a.age < b.age ? -1 : 1));
    //   return this.$store.getters['users/sortedByAge'];
    // },
    // age() {
    //   return this.$store.state.users.users.slice().map(item => item.age);
    // },

    news() {
      return this.$store.getters['news/sortedByDateNews'];
    },

    radioYears() {
      return this.news
        .map(item => new Date(item.date).getFullYear())
        .filter((item, index, self) => index === self.indexOf(item))
        .map(item => ({ name: String(item), value: item }));
      /* name => date */
    },

    //  this duplicate for GuiRadioList and for GuiAdaptiveRadio
    radioYearsDuplicate() {
      return this.news
        .map(item => new Date(item.date).getFullYear())
        .filter((item, index, self) => index === self.indexOf(item))
        .map((item, index) => ({ date: String(item), value: item, id: index }));
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
    onChangeAdaptiveRadio(selectedYear) {
      this.selectedYear = selectedYear;
      // console.log('OK, selectedYear: ' + this.selectedYear);
    },
    onClickRadioListController() {
      this.ifRadioListVisible = !this.ifRadioListVisible;
      // console.log('ifRadioListVisible: ' + this.ifRadioListVisible);
    },
    onChangeRadioListBlock(selectedYear) {
      this.selectedYear = selectedYear;
      // console.log('selectedYear: ' + this.selectedYear);
    },
    onClickRadioListBlock() {
      this.ifRadioListVisible = false;
    },
  },

  components: {
    TopBlock,
    TopMenu,
    GuiRadioList,
    GuiAdaptiveRadio,
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

  &__news {
    width: 100%;
    padding: 24px;
    max-width: 960px;
    margin: 0 auto;

    @media screen and (min-width: 576px) {
      padding: 48px 28px;
    }
  }

  &__container-select {
    width: 100%;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      margin-bottom: 48px;
    }
  }

  &__select {
    width: 100%;
    display: block;

    @media screen and (min-width: 576px) {
      display: none;
    }
  }

  &__radio {
    display: none;

    @media screen and (min-width: 576px) {
      display: block;
    }
  }

  &__container-news {
    display: flex;
    flex-wrap: wrap;
  }

  &__list-news {
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
