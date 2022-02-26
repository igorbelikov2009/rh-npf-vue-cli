<template>
  <div class="carousel-tape">
    <NewsLinkContainer
      v-for="(carouselLink, index) in carouselLinks"
      :key="index"
      :isClear="index === qq || jj === index"
      :newsLinkTitle="carouselLink.title"
      :newsLinkDate="carouselLink.date"
      :newsLinkId="carouselLink.id"
      @getLinkContainerWidth="getLinkContainerWidth"
    />
  </div>
</template>

<script>
import NewsLinkContainer from '@/components/mainPage/NewsLinkContainer.vue';
export default {
  name: 'MainCarouselTape',

  data() {
    return {
      // ширина контейнера ссылок
      widthLink: '',
    };
  },

  props: {
    qq: { type: Number },
    jj: { type: Number },
    carouselLinks: { type: Array },
  },

  computed: {
    news() {
      return this.$store.getters['news/sortedByDateNews'];
    },
  },
  methods: {
    // ширина контейнера ссылок
    getLinkContainerWidth(widthLink) {
      this.widthLink = widthLink;
      this.$emit('getLinkContainerWidth', this.widthLink);
      // console.log('widthLink :' + this.widthLink)
    },
  },

  components: {
    NewsLinkContainer,
  },
};
</script>

<style lang="scss" scoped>
.carousel-tape {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
</style>
