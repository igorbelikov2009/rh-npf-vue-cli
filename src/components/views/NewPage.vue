<template>
  <div class="new-page">
    <TopMenu :ifBackgroundWhite="true" />

    <div class="new-page__head">
      <div class="new-page__container">
        <router-link
          class="new-page__link-to-news"
          :to="{ name: 'newsPage' }"
          @mouseover="isLinkToNewsHovered = true"
          @mouseout="isLinkToNewsHovered = false"
        >
          <div class="new-page__icons">
            <TripleIcon :hovered="isLinkToNewsHovered" icon="Arrow Down" />
          </div>
          <p class="new-page__link-title">К списку новостей</p>
        </router-link>

        <NewsArticle v-if="selectedNewsArticle" :data="selectedNewsArticle" />
        <div v-else>Новости с таким ID не найдено</div>

        <div class="news__footer">
          <h1 class="news__footer-heading">Другие новости</h1>

          <NewsLink
            v-for="article in anotherNews"
            :key="article.id"
            :title="article.title"
            :date="article.date"
            :id="article.id"
          />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import TopMenu from '@/components/topMenu/TopMenu.vue';
import TripleIcon from '@/components/general/TripleIcon.vue';
import NewsLink from '@/components/news/NewsLink.vue';
import Footer from '@/components/Footer.vue';
import NewsArticle from '@/components/news/NewsArticle.vue';

export default {
  name: 'NewPage',
  data() {
    return {
      isLinkToNewsHovered: false,
    };
  },

  methods: {
    onClickNewsLink(valueRadio) {
      this.valueRadio = valueRadio;
      console.log(this.valueRadio);
    },
  },
  computed: {
    allNews() {
      return this.$store.state.news.news;
    },
    anotherNews() {
      const selectedId = this.selectedNewsArticle?.id || 0;

      const nextArticleId = selectedId + 1;
      const previousArticleId = selectedId - 1;

      // {id} - это деструктуризация
      return this.allNews.filter(({ id }) => id === nextArticleId || id === previousArticleId);
    },
    selectedNewsArticle() {
      const id = this.$route.query.id || '0';

      return this.allNews.find(article => String(article.id) === id);
    },
  },
  components: {
    TripleIcon,
    TopMenu,
    NewsLink,
    Footer,
    NewsArticle,
  },
};
</script>

<style lang="scss" scoped>
.new-page {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  color: #5a646e;

  &__head {
    width: 100%;
    padding: 24px;
    box-sizing: border-box;

    @media screen and (min-width: 576px) {
      padding-top: 48px;
      padding-left: 24px;
      padding-right: 24px;
      padding-bottom: 24px;
    }
  }

  &__container {
    width: 100%;
    max-width: 660px;
    margin: 0 auto;
  }

  &__link-to-news {
    margin-bottom: 24px;
    display: flex;
    cursor: pointer;
    text-decoration: none;
    outline: none;
  }

  &__icons {
    width: 24px;
    height: 24px;
    position: relative;
    transform: rotate(90deg);
  }

  &__link-title {
    font-size: 16px;
    line-height: 24px;
    color: #96a0aa;
    display: block;
    margin-left: 12px;

    &:hover {
      color: black;
    }
  }
}

.news {
  &__footer {
    width: 100%;
    padding-top: 24px;
    padding-bottom: 0;

    @media screen and (min-width: 576px) {
      padding-top: 48px;
      padding-bottom: 24px;
    }
  }

  &__footer-heading {
    font-size: 34px;
    line-height: 48px;
    color: #000000;
    display: block;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      margin-bottom: 48px;
    }
  }
}
</style>
