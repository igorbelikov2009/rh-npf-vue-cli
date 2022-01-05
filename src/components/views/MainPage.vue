<template>
  <div class="main-page">
    <TopBlock
      :image="topBlock.image"
      :heading="topBlock.heading"
      :headingSpan="topBlock.headingSpan"
      :subheading="topBlock.subheading"
      :subheadingSpan="topBlock.subheadingSpan"
    />
    <Info />
    <Statistics />
    <Calculator id="calculator" />
    <CalculatorImages />
    <NewsBLock />

    <TopMenu />
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
import mainImage from '../../../public/images/main/mainTop.jpg';

export default {
  name: 'MainPage',
  data() {
    return {
      topBlock: {
        image: mainImage,
        heading: 'Уверенность в будущем,',
        headingSpan: ' доступная каждому',
        subheading: 'Обеспечьте себе стабильность и приступайте',
        subheadingSpan: ' к реализации своих самых смелых планов!',
      },
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
  position: relative;
}
</style>
