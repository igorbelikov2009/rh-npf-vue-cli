<template>
  <div class="main-page">
    <TopMenu />
    <TopBlock
      :image="imageTop"
      :heading="headingTop"
      :headingSpan="headingSpanTop"
      :subheading="subheadingTop"
      :subheadingSpan="subheadingSpanTop"
    />
    <Info />
    <Statistics />
    <Calculator />
    <CalculatorImages />
    <NewsBLock />
  </div>
</template>

<script>
import TopMenu from '@/components/topMenu/TopMenu.vue';
import TopBlock from '@/components/general/TopBlock.vue';
import Info from '../mainPage/Info.vue';
import Statistics from '../mainPage/statistics/Statistics.vue';
import Calculator from '../mainPage/calculator/Calculator.vue';
import CalculatorImages from '../mainPage/CalculatorImages.vue';
import NewsBLock from '../mainPage/NewsBLock/NewsBLock.vue';
//
import mainTopImage from '../../../public/images/main/mainTop.jpg';

export default {
  name: 'MainPage',
  data() {
    return {
      imageTop: mainTopImage,
      headingTop: 'Уверенность в будущем,',
      headingSpanTop: ' доступная каждому',
      subheadingTop: 'Обеспечьте себе стабильность и приступайте',
      subheadingSpanTop: ' к реализации своих самых смелых планов!',
    };
  },

  components: {
    TopMenu,
    TopBlock,
    Info,
    Statistics,
    Calculator,
    CalculatorImages,
    NewsBLock,
  },
};
</script>

<style lang="scss" scoped>
.main-page {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
}
</style>
