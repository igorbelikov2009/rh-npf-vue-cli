<template>
  <div class="fund-carousel-tape">
    <FundCarouselColumn
      v-for="(carouselColumn, index) in carouselColumns"
      :key="index"
      :isClear="index === qq || jj === index"
      :title="carouselColumn.title"
      :description="carouselColumn.description"
      @getWidthColumn="getWidthColumn"
    />
  </div>
</template>

<script>
import FundCarouselColumn from '@/components/aboutFundPage/FundCarouselColumn.vue';

export default {
  name: 'FundCarouselTape',

  data() {
    return {
      widthColumn: '', // ширина столбца
    };
  },

  props: {
    qq: { type: Number },
    jj: { type: Number },
    carouselColumns: { type: Array },
  },

  methods: {
    // ширина столбца
    getWidthColumn(widthColumn) {
      this.widthColumn = widthColumn;
      this.$emit('getWidthColumn', this.widthColumn);
      // console.log('widthColumn :' + this.widthColumn)
    },
  },

  components: {
    FundCarouselColumn,
  },
};
</script>

<style lang="scss" scoped>
.fund-carousel-tape {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
</style>
