<template>
  <div class="news-page">
    <TopBlock image="/images/news/news.jpg" heading="Новости" />
    <TopMenu />
    <section class="news-page__news">
      <div class="news-page__container">
        <!-- Разделить на 2 компоненты И НЕ СМЕШИВАТЬ ИХ -->
        <RadioSwitching
          :switchItems="radioYears"
          :value="selectedYear"
          @onChangeRadioSwitching="onChangeRadioSwitching"
        />

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

            <p class="newnews-page__contact-adress">
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
import TopBlock from '@/components/general/TopBlock.vue';
// import newsImage from '/public/images/news/news.jpg';
import TopMenu from '@/components/topMenu/TopMenu.vue';
import RadioSwitching from '@/components/gui/RadioSwitching.vue';
import NewsLink from '@/components/news/NewsLink.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'NewsPage',

  data() {
    return {
      // topBlock: {
      //   image: newsImage,
      //   heading: 'Новости',
      // },
      selectedYear: 2021,
    };
  },
  computed: {
    news() {
      return this.$store.getters['news/sortedByDateNews'];
    },
    radioYears() {
      return this.news
        .map(item => new Date(item.date).getFullYear())
        .filter((item, index, self) => index === self.indexOf(item))
        .map(item => ({ name: String(item), value: item }));
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
      // console.log('selectedYear: ' + this.selectedYear);
    },
  },

  components: {
    TopBlock,
    TopMenu,
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

  &__row {
    display: flex;
    flex-wrap: wrap;
  }

  &__list {
    position: relative;
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
