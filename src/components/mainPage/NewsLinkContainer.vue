<template>
  <article
    class="news-link-container"
    :class="{ 'news-link-container_clear': isClear }"
    ref="newsLinkContainer"
  >
    <NewsLink :title="newsLinkTitle" :date="newsLinkDate" :id="newsLinkId" />
  </article>
</template>

<script>
import NewsLink from '@/components/news/NewsLink.vue';
export default {
  name: 'NewsLinkContainer',

  data() {
    return {
      // ширина столбца
      linkContainerWidth: '',
    };
  },
  props: {
    isClear: { type: Boolean, default: false },
    newsLinkTitle: { type: String, required: true },
    newsLinkDate: { type: String, required: true },
    newsLinkId: { type: Number, required: true },
  },
  mounted() {
    this.getLinkContainerWidth();
  },

  methods: {
    // ширина столбца
    getLinkContainerWidth() {
      const newsLinkContainer = this.$refs.newsLinkContainer;
      this.linkContainerWidth = newsLinkContainer.offsetWidth;
      // console.log('linkContainerWidth :' + this.linkContainerWidth)
      this.$emit('getLinkContainerWidth', this.linkContainerWidth);
    },
  },
  components: {
    NewsLink,
  },
};
</script>

<style lang="scss" scoped>
.news-link-container {
  min-width: 83.33vw;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 24px;

  opacity: 0.4;
  transition: opacity 0.5s;
  transition-property: opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0s;
  //

  @media screen and (min-width: 576px) {
    min-width: 480px;
    padding-right: 140px;
  }

  @media screen and (min-width: 1024px) {
    min-width: 500px;
    padding-right: 140px;
  }

  // news-link-container_clear
  &_clear {
    opacity: 1;
    transition: opacity 0.5s;
    transition-property: opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;
  }

  // news-link-container_not-visible
  &_not-visible {
    display: none;
  }

  &__title {
    display: block;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 24px;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    color: #8967b1;

    &:hover {
      color: #50287d;
    }
  }

  &__date {
    display: block;
    font-size: 13px;
    color: #5a646e;
    margin-bottom: 48px;

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }
}
</style>
