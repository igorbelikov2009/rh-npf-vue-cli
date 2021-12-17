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
    <Calculator id="calculator" />
    <CalculatorImages />
    <NewsBLock />
    <Footer />
  </div>
</template>

<script>
import TopMenu from '@/components/topMenu/TopMenu.vue';
import TopBlock from '@/components/general/TopBlock.vue';
import Info from '@/components/mainPage/Info.vue';
import Statistics from '@/components/mainPage/statistics/Statistics.vue';
import Calculator from '@/components/mainPage/calculator/Calculator.vue';
import CalculatorImages from '@/components/mainPage/CalculatorImages.vue';
import NewsBLock from '@/components/mainPage/NewsBLock.vue';
import Footer from '@/components/Footer.vue';
//
import mainTopImage from '../../../public/images/main/mainTop.jpg';

export default {
  name: 'MainPage',
  data() {
    return {
      imageTop: mainTopImage,
      headingTop: 'Уверенность в будущем,',
      headingSpanTop: ' доступная каждому',
      subheadingTop: 'Обеспечьте себе стабильность и приступайте',
      subheadingSpanTop: ' к реализации своих самых смелых планов!',
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
    Footer,
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
