<template>
  <div class="invest-page">
    <TopMenu />
    <TopBlock
      :image="imageTop"
      :heading="headingTop"
      :headingSpan="headingSpanTop"
      :subheading="subheadingTop"
      :subheadingSpan="subheadingSpanTop"
    />
    <InvestmentRules />
    <PortfolioStructure id="portfolioStructure" />
    <CompositionOfFunds />
    <ConvenienceArchives />
    <ConvenienceDescription />

    <Footer />
  </div>
</template>

<script>
import TopMenu from '@/components/topMenu/TopMenu.vue';
import TopBlock from '@/components/general/TopBlock.vue';
import investTopImage from '../../../public/images/invest/InvestTop.jpg';
import InvestmentRules from '@/components/investPage/InvestmentRules.vue';
import PortfolioStructure from '@/components/investPage/PortfolioStructure.vue';
import CompositionOfFunds from '@/components/investPage/CompositionOfFunds.vue';
import ConvenienceArchives from '@/components/investPage/ConvenienceArchives.vue';
import ConvenienceDescription from '@/components/investPage/ConvenienceDescription.vue';

import Footer from '@/components/Footer.vue';
export default {
  name: 'InvestPage',
  data() {
    return {
      imageTop: investTopImage,
      headingTop: 'Инвестиционная',
      headingSpanTop: 'деятельность',
      subheadingTop:
        'АО НПФ «Ренессанс пенсии» осуществляет инвестирование пенсионных резервов в интересах участников Фонда на принципах сохранности и надежности, в соответствии с действующим законодательством РФ и корпоративной инвестиционной политикой',
      subheadingSpanTop: '',
    };
  },

  components: {
    TopMenu,
    TopBlock,
    InvestmentRules,
    PortfolioStructure,
    CompositionOfFunds,
    ConvenienceArchives,
    ConvenienceDescription,

    Footer,
  },
};
</script>

<style lang="scss" scoped>
.invest-page {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  color: #5a646e;
}
</style>
