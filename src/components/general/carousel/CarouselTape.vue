<template>
  <div class="carousel-container">
    <CarouselColumn
      v-for="(carouselColumn, index) in carouselColumns"
      :key="index"
      :isClear="index === qq || jj === index"
      :titleYear="carouselColumn.titleYear"
      :isHasLine="ifHasLine"
      :linkHref="carouselColumn.linkHref"
      :linkTitle="carouselColumn.linkTitle"
      :description="carouselColumn.description"
      :date="carouselColumn.date"
      @getWidthColumn="getWidthColumn"
    />
  </div>
</template>

<script>
import CarouselColumn from '@/components/general/carousel/CarouselColumn.vue';
export default {
  name: 'CarouselTape',

  data() {
    return {
      widthColumn: '', // ширина столбца
      amountChildrenContainer: 0, // количество детей newsContainer
    };
  },

  props: {
    qq: { type: Number },
    jj: { type: Number },
    ifHasLine: { type: Boolean },
    //

    titleYear: { type: String },
    linkHref: { type: String },
    linkTitle: { type: String },
    description: { type: String },
    date: { type: String },
    isClear: { type: Boolean },
    carouselColumns: { type: Array },
  },

  methods: {
    // ширина столбца
    getWidthColumn(widthColumnBox) {
      this.widthColumn = widthColumnBox;
      this.$emit('getWidthColumn', this.widthColumn);
      // console.log('widthColumn :' + this.widthColumn)
    },

    //  устанавливаем прозрачность у "carouselColumns"
    // здесь нужны только qq и jj

    changeTransparencyColumn() {
      for (let i = 0; i < 5; i++) {
        this.carouselColumns[i].isClear = false;
        console.log('Ok', this.carouselColumns[i].isClear);
      }

      console.log('qq: ' + this.qq, 'jj: ' + this.jj);
      this.carouselColumns[this.qq].isClear = true;
      this.carouselColumns[this.jj].isClear = true;
    },
  },

  components: {
    CarouselColumn,
  },
};
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
</style>
