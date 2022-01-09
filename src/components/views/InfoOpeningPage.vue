<template>
  <div class="info-opening">
    <TopBlock image="images/infoOpening/infoOpening.jpg" heading="Раскрытие информации" />
    <OverallInfo />
    <FundPerformance />
    <DocumentsOfTitle />
    <StructureAndRules
      @onClickArchiveShareholders="onClickArchiveShareholders"
      @onClickArchivePension="onClickArchivePension"
    />
    <Reporting @onClickArchiveReporting="onClickArchiveReporting" />
    <PortfolioStructure />
    <IncomeChangeRegulation />
    <AssetValueRules @onClickArchiveAssetValueRules="onClickArchiveAssetValueRules" />
    <HidingArchive
      :isHidingArchiveVisible="hidingArchive.isHidingArchiveVisible"
      :isArchiveShareholdersVisible="hidingArchive.isArchiveShareholdersVisible"
      :isArchivePensionVisible="hidingArchive.isArchivePensionVisible"
      :isArchiveReportingVisible="hidingArchive.isArchiveReportingVisible"
      :isArchiveAssetValueRulesVisible="hidingArchive.isArchiveAssetValueRulesVisible"
      @onClickHidingArchive="onClickHidingArchive"
    />
    <Other />
    <ManagementCompanies />
    <SpecDepository />
    <Interactions />
    <Notifics />

    <TopMenu />

    <Footer />
  </div>
</template>

<script>
import TopMenu from '@/components/topMenu/TopMenu.vue';
import TopBlock from '@/components/general/TopBlock.vue';
// import infoOpeningImage from '../../../public/images/infoOpening/infoOpening.jpg';
import OverallInfo from '@/components/InfoOpeningPage/OverallInfo.vue';
import FundPerformance from '@/components/InfoOpeningPage/FundPerformance.vue';
import DocumentsOfTitle from '@/components/InfoOpeningPage/DocumentsOfTitle';
import StructureAndRules from '@/components/InfoOpeningPage/StructureAndRules.vue';
import Reporting from '@/components/InfoOpeningPage/Reporting.vue';
import HidingArchive from '@/components/InfoOpeningPage/HidingArchive.vue';
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
      // topBlock: {
      //   // image: infoOpeningImage,
      //   heading: 'Раскрытие информации',
      // },

      hidingArchive: {
        isHidingArchiveVisible: false,
        isArchiveShareholdersVisible: false,
        isArchivePensionVisible: false,
        isArchiveReportingVisible: false,
        isArchiveAssetValueRulesVisible: false,
      },
    };
  },

  methods: {
    onClickHidingArchive() {
      this.hidingArchive.isHidingArchiveVisible = false;
      this.hidingArchive.isArchiveShareholdersVisible = false;
      this.hidingArchive.isArchivePensionVisible = false;
      this.hidingArchive.isArchiveReportingVisible = false;
      this.hidingArchive.isArchiveAssetValueRulesVisible = false;

      document.body.style.overflow = '';
    },
    onClickArchiveShareholders() {
      this.hidingArchive.isHidingArchiveVisible = true;
      this.hidingArchive.isArchiveShareholdersVisible = true;
      document.body.style.overflow = 'hidden';
    },
    onClickArchivePension() {
      this.hidingArchive.isHidingArchiveVisible = true;
      this.hidingArchive.isArchivePensionVisible = true;
      document.body.style.overflow = 'hidden';
    },
    onClickArchiveReporting() {
      this.hidingArchive.isHidingArchiveVisible = true;
      this.hidingArchive.isArchiveReportingVisible = true;
      document.body.style.overflow = 'hidden';
    },
    onClickArchiveAssetValueRules() {
      this.hidingArchive.isHidingArchiveVisible = true;
      this.hidingArchive.isArchiveAssetValueRulesVisible = true;
      document.body.style.overflow = 'hidden';
    },
  },

  components: {
    TopMenu,
    TopBlock,
    OverallInfo,
    FundPerformance,
    DocumentsOfTitle,
    StructureAndRules,
    Reporting,
    HidingArchive,
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
  //
  height: 100%;
  overflow: hidden;

  // info-opening__stop-scrolling
  &__stop-scrolling {
    height: 100%;
    overflow: hidden;
  }
}
</style>
