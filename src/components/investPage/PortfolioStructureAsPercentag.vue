<template>
  <div class="portfolie-structure__as-percentag" v-if="isContainerVisible">
    <PortfolioStructureContainer
      :percentNumber01="percent.percentNumber01"
      :percentNumber02="percent.percentNumber02"
      :percentNumber03="percent.percentNumber03"
      :percentNumber04="percent.percentNumber04"
      :percentNumber05="percent.percentNumber05"
      :percentNumber06="percent.percentNumber06"
    />
  </div>
</template>

<script>
import PortfolioStructureContainer from '@/components/investPage/PortfolioStructureContainer.vue';

export default {
  name: 'PortfolioStructureAsPercentag',

  props: {
    isContainerVisible: { type: Boolean, default: false },
    percent: { type: Object },
  },

  components: {
    PortfolioStructureContainer,
  },
};
</script>

<style lang="scss" scoped>
.portfolie-structure {
  &__as-percentag {
    width: 100%;
    margin-left: 0;
    margin-top: 48px;

    @media screen and (min-width: 768px) {
      width: calc(100% - 280px);
      margin-left: 20px;
      margin-top: 0px;
    }
  }
}
</style>
