<template>
  <div v-if="isNewsYearVisible">
    <NewsLink
      v-for="(newsLink, index) in newsLinks"
      :key="index"
      :isNewsLinkVisible="true"
      :value="newsLink.value"
      :href="newsLink.href"
      :title="newsLink.title"
      :date="newsLink.date"
      @emitValue="onClickNewsLink"
    />
  </div>
</template>

<script>
import NewsLink from '@/components/news/NewsLink.vue';

export default {
  name: 'NewsBlockInAYear',

  data() {
    return {
      newsLinkValue: 0,
    };
  },

  props: {
    isNewsYearVisible: { type: Boolean, default: false },
    newsLinks: { type: Array },
    value: { type: String },
    href: { type: String },
    title: { type: String },
    date: { type: String },
  },

  methods: {
    onClickNewsLink(value) {
      this.newsLinkValue = value;
      // console.log(this.newsLinkValue);

      this.$emit('onClickNewsLink', this.newsLinkValue);
    },
  },

  components: {
    NewsLink,
  },
};
</script>
