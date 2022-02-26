<template>
  <section class="portfolie-structure">
    <h1 class="portfolie-structure__heading">Структура портфеля</h1>

    <div class="portfolie-structure__selection" ref="selectController">
      <GuiSelectController
        :ifSelectionOptionsBlock="isSelectionBlockVisible"
        :value="controllerValue"
        :selectionElements="selectionElements"
        @onClickSelectionController="onClickSelectionController"
      />
    </div>

    <div class="portfolie-structure__content">
      <PortfolioStructureGraph />

      <PortfolioStructureAsPercentag
        v-for="(percentBlock, index) in percentBlocks"
        :key="index"
        :percent="percentBlock"
        :isContainerVisible="idOptions === index"
      />
      <!--   -->
    </div>
  </section>
</template>

<script>
import GuiSelectController from '@/components/gui/guiSelect/GuiSelectController.vue';
import PortfolioStructureGraph from '@/components/investPage/PortfolioStructureGraph.vue';
import PortfolioStructureAsPercentag from '@/components/investPage/PortfolioStructureAsPercentag.vue';

export default {
  name: 'PortfolioStructure',

  data() {
    return {
      selectControllerTop: 0,
      selectControllerBottom: 0,
      selectControllerLeft: 0,
      selectControllerWidth: 0,
      selectControllerHeight: 0,

      percentBlocks: [
        {
          percentNumber01: '57.6%',
          percentNumber02: '24.7%',
          percentNumber03: '13%',
          percentNumber04: '2.8%',
          percentNumber05: '1.2%',
          percentNumber06: '0.7%',
        },
        {
          percentNumber01: '57.8%',
          percentNumber02: '25.1%',
          percentNumber03: '13.8%',
          percentNumber04: '1.5%',
          percentNumber05: '1.1%',
          percentNumber06: '0.7%',
        },
        {
          percentNumber01: '55.3%',
          percentNumber02: '26.9%',
          percentNumber03: '13.8%',
          percentNumber04: '2.2%',
          percentNumber05: '1.1%',
          percentNumber06: '0.7%',
        },
        {
          percentNumber01: '55.2%',
          percentNumber02: '27.2%',
          percentNumber03: '13.7%',
          percentNumber04: '2.1%',
          percentNumber05: '1.1%',
          percentNumber06: '0.7%',
        },
        {
          percentNumber01: '56.1%',
          percentNumber02: '27.1%',
          percentNumber03: '12.4%',
          percentNumber04: '2.8%',
          percentNumber05: '1%',
          percentNumber06: '0.6%',
        },
        {
          percentNumber01: '56.2%',
          percentNumber02: '28.2%',
          percentNumber03: '12.1%',
          percentNumber04: '1.7%',
          percentNumber05: '1.2%',
          percentNumber06: '0.6%',
        },
        {
          percentNumber01: '56.5%',
          percentNumber02: '28.5%',
          percentNumber03: '12%',
          percentNumber04: '1.3%',
          percentNumber05: '1.1%',
          percentNumber06: '0.6%',
        },
        {
          percentNumber01: '55.4%',
          percentNumber02: '29.7%',
          percentNumber03: '12.2%',
          percentNumber04: '1.1%',
          percentNumber05: '1%',
          percentNumber06: '0.6%',
        },
        {
          percentNumber01: '54.5%',
          percentNumber02: '29.8%',
          percentNumber03: '12.1%',
          percentNumber04: '2%',
          percentNumber05: '1%',
          percentNumber06: '0.6%',
        },
        {
          percentNumber01: '53.9%',
          percentNumber02: '30.4%',
          percentNumber03: '12.1%',
          percentNumber04: '2.1%',
          percentNumber05: '0.9%',
          percentNumber06: '0.6%',
        },
        {
          percentNumber01: '53.1%',
          percentNumber02: '30.7%',
          percentNumber03: '12.6%',
          percentNumber04: '2.1%',
          percentNumber05: '0.9%',
          percentNumber06: '0.6%',
        },
        {
          percentNumber01: '53%',
          percentNumber02: '30.9%',
          percentNumber03: '12.5%',
          percentNumber04: '2.2%',
          percentNumber05: '0.8%',
          percentNumber06: '0.6%',
        },
        {
          percentNumber01: '52%',
          percentNumber02: '31.4%',
          percentNumber03: '12.2%',
          percentNumber04: '3%',
          percentNumber05: '0.8%',
          percentNumber06: '0.6%',
        },
        {
          percentNumber01: '51%',
          percentNumber02: '31%',
          percentNumber03: '12%',
          percentNumber04: '4.8%',
          percentNumber05: '0.6%',
          percentNumber06: '0.6%',
        },
        {
          percentNumber01: '50.1%',
          percentNumber02: '31.2%',
          percentNumber03: '12%',
          percentNumber04: '5.5%',
          percentNumber05: '0.6%',
          percentNumber06: '0.6%',
        },
        {
          percentNumber01: '48.5%',
          percentNumber02: '31.9%',
          percentNumber03: '12%',
          percentNumber04: '6.4%',
          percentNumber05: '0.6%',
          percentNumber06: '0.6%',
        },
        {
          percentNumber01: '48.6%',
          percentNumber02: '32.7%',
          percentNumber03: '11.9%',
          percentNumber04: '5.6%',
          percentNumber05: '0.6%',
          percentNumber06: '0.6%',
        },
        {
          percentNumber01: '49.6%',
          percentNumber02: '32.1%',
          percentNumber03: '11.9%',
          percentNumber04: '5.4%',
          percentNumber05: '0.5%',
          percentNumber06: '0.5%',
        },
        {
          percentNumber01: '49.08%',
          percentNumber02: '31.47%',
          percentNumber03: '10.79%',
          percentNumber04: '7.65%',
          percentNumber05: '0.52%',
          percentNumber06: '0.49%',
        },
        {
          percentNumber01: '49.53%',
          percentNumber02: '30.45%',
          percentNumber03: '9.68%',
          percentNumber04: '9.61%',
          percentNumber05: '0.53%',
          percentNumber06: '0.2%',
        },
        {
          percentNumber01: '50%',
          percentNumber02: '29.62%',
          percentNumber03: '10.35%',
          percentNumber04: '9.27%',
          percentNumber05: '0.53%',
          percentNumber06: '0.23%',
        },
        {
          percentNumber01: '49.69%',
          percentNumber02: '29.46%',
          percentNumber03: '10.06%',
          percentNumber04: '10.02%',
          percentNumber05: '0.51%',
          percentNumber06: '0.26%',
        },
        {
          percentNumber01: '51%',
          percentNumber02: '28.5%',
          percentNumber03: '10.5%',
          percentNumber04: '9.2%',
          percentNumber05: '0.5%',
          percentNumber06: '0.3%',
        },
        {
          percentNumber01: '50.2%',
          percentNumber02: '28.2%',
          percentNumber03: '10.7%',
          percentNumber04: '10.4%',
          percentNumber05: '0.5%',
          percentNumber06: '0%',
        },
        {
          percentNumber01: '50.3%',
          percentNumber02: '27.5%',
          percentNumber03: '11%',
          percentNumber04: '10.7%',
          percentNumber05: '0.5%',
          percentNumber06: '0%',
        },
      ],
    };
  },

  props: {
    isSelectionBlockVisible: { type: Boolean, default: false },
    // controllerValue: { type: Number, required: true },
    controllerValue: { type: String, required: true },
    idOptions: { type: Number, required: true },
    selectionElements: { type: Array },
    date: { type: String },
  },

  created() {
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    onClickSelectionController() {
      this.$emit('onClickSelectionController');
    },
    handleScroll() {
      this.getSelectControllerCoords();
      this.$emit(
        'handleScroll',
        this.selectControllerTop,
        this.selectControllerBottom,
        this.selectControllerLeft,
        this.selectControllerWidth,
        this.selectControllerHeight
      );
    },
    getSelectControllerCoords() {
      const selectController = this.$refs.selectController;
      this.selectControllerTop = selectController.getBoundingClientRect().top;
      this.selectControllerBottom = selectController.getBoundingClientRect().bottom;
      this.selectControllerLeft = selectController.getBoundingClientRect().left;
      this.selectControllerWidth = selectController.getBoundingClientRect().width;
      this.selectControllerHeight = selectController.getBoundingClientRect().height;
    },
  },

  components: {
    GuiSelectController,
    PortfolioStructureGraph,
    PortfolioStructureAsPercentag,
  },
};
</script>

<style lang="scss" scoped>
.portfolie-structure {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  border-color: #ffffff;
  padding: 24px 24px 0;

  @media screen and (min-width: 576px) {
    padding: 24px 28px 0;
  }

  @media screen and (min-width: 768px) {
    padding: 48px 28px 0;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }

  &__heading {
    font-size: 18px;
    line-height: 24px;
    color: #28323c;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      font-size: 34px;
      line-height: 48px;
      margin-bottom: 48px;
    }
  }

  &__selection {
    max-width: 382px;
    margin: 0 auto;

    @media screen and (min-width: 576px) {
      max-width: 210px;
    }

    @media screen and (min-width: 768px) {
      margin: 0;
    }
  }

  &__content {
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (min-width: 768px) {
      justify-content: flex-start;
    }
  }
}
</style>
