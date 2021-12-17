<template>
  <div class="info-opening">
    <TopMenu />
    <TopBlock
      :image="imageTop"
      :heading="headingTop"
      :headingSpan="headingSpanTop"
      :subheading="subheadingTop"
      :subheadingSpan="subheadingSpanTop"
    />
    <OverallInfo />
    <FundPerformance />
    <DocumentsOfTitle />
    <StructureAndRules />
    <Reporting />
    <PortfolioStructure />
    <IncomeChangeRegulation />
    <AssetValueRules />

    <Other />
    <ManagementCompanies />
    <SpecDepository />
    <Interactions />
    <Notifics />
    <Footer />
  </div>
</template>

<script>
import TopMenu from '@/components/topMenu/TopMenu.vue';
import TopBlock from '@/components/general/TopBlock.vue';
import infoOpeningTopImage from '../../../public/images/infoOpening/infoOpening.jpg';
import OverallInfo from '@/components/InfoOpeningPage/OverallInfo.vue';
import FundPerformance from '@/components/InfoOpeningPage/FundPerformance.vue';
import DocumentsOfTitle from '@/components/InfoOpeningPage/DocumentsOfTitle';
import StructureAndRules from '@/components/InfoOpeningPage/StructureAndRules.vue';
import Reporting from '@/components/InfoOpeningPage/Reporting.vue';
import PortfolioStructure from '@/components/InfoOpeningPage/PortfolioStructure.vue';
import IncomeChangeRegulation from '@/components/InfoOpeningPage/IncomeChangeRegulation.vue';
import AssetValueRules from '@/components/InfoOpeningPage/AssetValueRules.vue';

import Other from '@/components/InfoOpeningPage/Other.vue';
import ManagementCompanies from '@/components/InfoOpeningPage/ManagementCompanies.vue';
import SpecDepository from '@/components/InfoOpeningPage/SpecDepository.vue';
import Interactions from '@/components/InfoOpeningPage/Interactions.vue';
import Notifics from '@/components/InfoOpeningPage/Notifics.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'InfoOpeningPage',

  data() {
    return {
      imageTop: infoOpeningTopImage,
      headingTop: 'Раскрытие информации',
      headingSpanTop: '',
      subheadingTop: '',
      subheadingSpanTop: '',
    };
  },

  components: {
    TopMenu,
    TopBlock,
    OverallInfo,
    FundPerformance,
    DocumentsOfTitle,
    StructureAndRules,
    Reporting,
    PortfolioStructure,
    IncomeChangeRegulation,
    AssetValueRules,

    Other,
    ManagementCompanies,
    SpecDepository,
    Interactions,
    Notifics,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.info-opening {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  color: #5a646e;
}
</style>
