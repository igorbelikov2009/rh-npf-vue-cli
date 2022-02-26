<template>
  <div v-if="isVisible">
    <div>
      <div class="fund-indicators">
        <p class="fund-indicators__heading">{{ heading }}</p>

        <p class="fund-indicators__date">{{ subheading }}</p>
      </div>

      <FundPerformanceIndicatorsRow
        v-for="(indicatorRow, index) in indicatorRows"
        :key="index"
        :title="indicatorRow.title"
        :subtitle="indicatorRow.subtitle"
      />
    </div>

    <ArchiveLink
      v-for="(link, index) in links"
      :key="index"
      :linkHref="link.linkHref"
      :linkTitle="link.linkTitle"
    />
  </div>
</template>

<script>
import FundPerformanceIndicatorsRow from '@/components/InfoOpeningPage/FundPerformanceIndicatorsRow.vue';
import ArchiveLink from '@/components/general/ArchiveLink.vue';

export default {
  name: 'FundPerformanceIndicators',

  props: {
    isVisible: { type: Boolean, default: false },
    heading: { type: String },
    subheading: { type: String },

    indicatorRows: { type: Array },
    title: { type: String },
    subtitle: { type: String },

    links: { type: Array },
    linkHref: { type: String },
    linkTitle: { type: String },
  },

  components: {
    FundPerformanceIndicatorsRow,
    ArchiveLink,
  },
};
</script>

<style lang="scss" scoped>
.fund-indicators {
  width: 100%;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #e4e4e4;

  &:first-of-type {
    padding-top: 0;
  }

  &__heading {
    display: block;
    width: 100%;
    max-width: 560px;
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
  }

  &__date {
    display: block;
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
    flex: none;
    margin-left: 12px;

    @media screen and (min-width: 576px) {
      margin-left: 40px;
    }
  }
}
</style>
