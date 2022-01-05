<template>
  <div v-if="ifInicatorsVisible">
    <div>
      <div class="block-header">
        <p class="block-header__heading-13">{{ heading }}</p>

        <p class="block-header__date">{{ subheading }}</p>
      </div>

      <FundIndicatorRow
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
import FundIndicatorRow from '@/components/InfoOpeningPage/FundIndicatorRow.vue';
import ArchiveLink from '@/components/general/ArchiveLink.vue';

export default {
  name: 'FundIndicators',

  props: {
    ifInicatorsVisible: { type: Boolean, default: false },
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
    FundIndicatorRow,
    ArchiveLink,
  },
};
</script>

<style lang="scss" scoped>
.block-header {
  width: 100%;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #e4e4e4;

  &:first-of-type {
    padding-top: 0;
  }

  &__heading-13 {
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
