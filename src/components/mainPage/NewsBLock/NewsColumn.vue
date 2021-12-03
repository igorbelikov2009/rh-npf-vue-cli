<template>
  <article class="news__column" :class="{ ' news__column_clear': isClear }" ref="newsColumn">
    <a class="news__link" :href="linkHref"> {{ linkTitle }} </a>

    <p class="news__date">{{ newsDate }}</p>
  </article>
</template>

<script>
export default {
  name: 'NewsColumn',
  data() {
    return {
      // ширина столбца
      widthColumnBox: '',
    };
  },

  props: {
    linkHref: { type: String },
    linkTitle: { type: String },
    newsDate: { type: String },
    isClear: { type: Boolean },
    isNotVisible: { type: Boolean },
  },

  mounted() {
    this.getWidthColumn();
  },

  methods: {
    // ширина столбца
    getWidthColumn() {
      const newsColumn = this.$refs.newsColumn;
      this.widthColumnBox = newsColumn.offsetWidth;
      // console.log('widthColumnBox :' + this.widthColumnBox)
      this.$emit('getWidthColumn', this.widthColumnBox);
    },
  },
};
</script>

<style lang="scss" scoped>
// news
.news {
  &__column {
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

    // news__column_clear
    &_clear {
      opacity: 1;
      transition: opacity 0.5s;
      transition-property: opacity;
      transition-duration: 0.5s;
      transition-timing-function: ease;
      transition-delay: 0s;
    }

    // news__column_not-visible
    &_not-visible {
      display: none;
    }
  }

  &__link {
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
} // news
</style>
