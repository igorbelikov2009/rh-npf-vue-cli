<template>
  <div class="invest-page">
    <TopBlock
      image="/images/invest/InvestTop.jpg"
      heading="Инвестиционная"
      headingSpan="деятельность"
      subheading="АО НПФ «Ренессанс пенсии» осуществляет инвестирование пенсионных резервов в интересах участников Фонда на принципах сохранности и надежности, в соответствии с действующим законодательством РФ и корпоративной инвестиционной политикой"
    />

    <InvestmentRules />

    <PortfolioStructure
      id="portfolioStructure"
      :isSelectionBlockVisible="firstSelectionBlock.isVisible"
      :selectionValue="commonSelectionBlocks.selectionValue"
      :selectionItems="commonSelectionBlocks.selectionItems"
      @onClickSelectionTopBlock="onClickFirstSelectionTopBlock"
      @handleScroll="onScrollPortfolioStructure"
    />

    <CompositionOfFunds
      :isSelectionBlockVisible="secondSelectionBlock.isVisible"
      :selectionValue="commonSelectionBlocks.selectionValue"
      :selectionItems="commonSelectionBlocks.selectionItems"
      @onClickSelectionTopBlock="onClickSecondSelectionTopBlock"
      @handleScroll="onScrollCompositionOfFunds"
    />

    <ConvenienceArchives />

    <ConvenienceDescription />

    <TopMenu />

    <Footer />

    <div
      ref="firstSelectionBlock"
      :style="firstSelectionBlockStyle"
      class="selection-options-block"
      :class="{
        'selection-options-block_show': firstSelectionBlock.isVisible,
        'selection-options-block_hide': !firstSelectionBlock.isVisible,
      }"
    >
      <SelectionOptionsBlock
        :selectionItems="commonSelectionBlocks.selectionItems"
        @onClickSelectionBlock="onClickFirstSelectionBlock"
        @onChangeSelectionBlock="onChangeFirstSelectionBlock"
      />
    </div>

    <div
      :style="secondSelectionBlockStyle"
      class="selection-options-block"
      :class="{
        'selection-options-block_show': secondSelectionBlock.isVisible,
        'selection-options-block_hide': !secondSelectionBlock.isVisible,
      }"
    >
      <SelectionOptionsBlock
        :selectionItems="commonSelectionBlocks.selectionItems"
        @onClickSelectionBlock="onClickSecondSelectionBlock"
        @onChangeSelectionBlock="onChangeSecondSelectionBlock"
      />
    </div>
  </div>
</template>

<script>
import TopMenu from '@/components/topMenu/TopMenu.vue';
import TopBlock from '@/components/general/TopBlock.vue';
// import investImage from '/public/images/invest/InvestTop.jpg';
import InvestmentRules from '@/components/investPage/InvestmentRules.vue';
import PortfolioStructure from '@/components/investPage/PortfolioStructure.vue';
import CompositionOfFunds from '@/components/investPage/CompositionOfFunds.vue';
import ConvenienceArchives from '@/components/investPage/ConvenienceArchives.vue';
import ConvenienceDescription from '@/components/investPage/ConvenienceDescription.vue';

import Footer from '@/components/Footer.vue';
import SelectionOptionsBlock from '@/components/gui/SelectionOptionsBlock.vue';
export default {
  name: 'InvestPage',
  data() {
    return {
      // topBlock: {
      //   // image: investImage,
      //   heading: 'Инвестиционная',
      //   headingSpan: 'деятельность',
      //   subheading:
      //     'АО НПФ «Ренессанс пенсии» осуществляет инвестирование пенсионных резервов в интересах участников Фонда на принципах сохранности и надежности, в соответствии с действующим законодательством РФ и корпоративной инвестиционной политикой',

      // },
      clientHeight: 0,

      firstSelectionTopBlock: {
        top: 0,
        bottom: 0,
        height: 0,
      },
      firstSelectionBlock: {
        top: 0,
        isVisible: false,
      },

      secondSelectionTopBlock: {
        top: 0,
        bottom: 0,
        height: 0,
      },
      secondSelectionBlock: {
        top: 0,
        isVisible: false,
      },

      commonSelectionBlocks: {
        width: 0,
        left: 0,
        height: 0,
        selectionValue: 0,
        selectionItems: [
          {
            name: '30 ноября 2021 г.',
            value: 0,
          },
          {
            name: '31 октября 2021 г.',
            value: 1,
          },
          {
            name: '30 сентября 2021 г.',
            value: 2,
          },
          {
            name: '31 августа 2021 г.',
            value: 3,
          },
          {
            name: '31 июля 2021 г.',
            value: 4,
          },
          {
            name: '30 июня 2021 г.',
            value: 5,
          },
          {
            name: '31 мая 2021 г.',
            value: 6,
          },
          {
            name: '30 апреля 2021 г.',
            value: 7,
          },
          {
            name: '31 марта 2021 г.',
            value: 8,
          },
          {
            name: '28 февраля 2021 г.',
            value: 9,
          },
          {
            name: '31 января 2021 г.',
            value: 10,
          },
          {
            name: '31 декабря 2020 г.',
            value: 11,
          },
          {
            name: '30 ноября 2020 г.',
            value: 12,
          },
          {
            name: '31 октября 2020 г.',
            value: 13,
          },
          {
            name: '30 сентября 2020 г.',
            value: 14,
          },
          {
            name: '31 августа 2020 г.',
            value: 15,
          },
          {
            name: '31 июля 2020 г.',
            value: 16,
          },
          {
            name: '30 июня 2020 г.',
            value: 17,
          },
          {
            name: '31 мая 2020 г.',
            value: 18,
          },
          {
            name: '30 апреля 2020 г.',
            value: 19,
          },
          {
            name: '31 марта 2020 г. ',
            value: 20,
          },
          {
            name: '29 февраля 2020 г.',
            value: 21,
          },
          {
            name: '31 января 2020 г.',
            value: 22,
          },
          {
            name: '31 декабря 2019 г.',
            value: 23,
          },
          {
            name: '30 ноября 2019 г.',
            value: 24,
          },
        ],
      },
    };
  },

  computed: {
    firstSelectionBlockStyle() {
      return {
        top: `${this.firstSelectionBlock.top}px`,
        left: `${this.commonSelectionBlocks.left + 6}px`,
        width: `${this.commonSelectionBlocks.width - 12}px`,
      };
    },
    secondSelectionBlockStyle() {
      return {
        top: `${this.secondSelectionBlock.top}px`,
        left: `${this.commonSelectionBlocks.left + 6}px`,
        width: `${this.commonSelectionBlocks.width - 12}px`,
      };
    },
  },

  mounted() {
    window.addEventListener('load', this.getSelectionBlockHeight);
  },

  methods: {
    onClickFirstSelectionTopBlock() {
      this.firstSelectionBlock.isVisible = !this.firstSelectionBlock.isVisible;
      this.secondSelectionBlock.isVisible = false;
      this.firstSelectionBlock.top = this.firstSelectionBlock.bottom;
    },
    onClickSecondSelectionTopBlock() {
      this.secondSelectionBlock.isVisible = !this.secondSelectionBlock.isVisible;
      this.firstSelectionBlock.isVisible = false;
      this.secondSelectionBlock.top = this.secondSelectionTopBlock.bottom;
    },

    onClickFirstSelectionBlock() {
      this.firstSelectionBlock.isVisible = false;
    },
    onClickSecondSelectionBlock() {
      this.secondSelectionBlock.isVisible = false;
    },

    onChangeFirstSelectionBlock(selectionValue) {
      this.commonSelectionBlocks.selectionValue = selectionValue;
      // console.log('selectionValue:' + this.commonSelectionBlocks.selectionValue);
    },
    onChangeSecondSelectionBlock(selectionValue) {
      this.commonSelectionBlocks.selectionValue = selectionValue;
    },

    getClientHeight() {
      this.clientHeight = document.documentElement.clientHeight;
    },

    getSelectionBlockHeight() {
      const selectionOptionBlock = this.$refs.firstSelectionBlock;
      this.commonSelectionBlocks.height = Math.round(
        selectionOptionBlock.getBoundingClientRect().height
      );
      // console.log('height: ' + this.commonSelectionBlocks.height);
    },

    onScrollPortfolioStructure(top, bottom, left, width, height) {
      this.firstSelectionTopBlock.top = top;
      this.firstSelectionTopBlock.bottom = bottom;
      this.commonSelectionBlocks.left = left;
      this.commonSelectionBlocks.width = width;
      this.firstSelectionTopBlock.height = height;
      this.getFirstSelectionBlockCoordsTop();
      this.getClientHeight();
      // console.log('height: ' + this.commonSelectionBlocks.height);
    },

    onScrollCompositionOfFunds(top, bottom, left, width, height) {
      this.secondSelectionTopBlock.top = top;
      this.secondSelectionTopBlock.bottom = bottom;
      this.commonSelectionBlocks.left = left;
      this.commonSelectionBlocks.width = width;
      this.secondSelectionTopBlock.height = height;
      this.getSecondSelectionBlockCoordsTop();
      this.getClientHeight();
      // console.log('height: ' + this.commonSelectionBlocks.height);
    },
    getFirstSelectionBlockCoordsTop() {
      this.firstSelectionBlock.top = this.firstSelectionTopBlock.bottom;
      if (this.firstSelectionTopBlock.bottom <= 0) {
        this.firstSelectionBlock.top = 0;
      } else if (
        this.firstSelectionTopBlock.top >= this.clientHeight - this.commonSelectionBlocks.height &&
        this.firstSelectionTopBlock.bottom <= this.clientHeight
      ) {
        this.firstSelectionBlock.top =
          this.firstSelectionTopBlock.top - this.commonSelectionBlocks.height;
      } else if (this.firstSelectionTopBlock.bottom >= this.clientHeight) {
        this.firstSelectionBlock.top = this.clientHeight - this.commonSelectionBlocks.height;
      }
    },
    getSecondSelectionBlockCoordsTop() {
      this.secondSelectionBlock.top = this.secondSelectionTopBlock.bottom;
      if (this.secondSelectionTopBlock.bottom <= 0) {
        this.secondSelectionBlock.top = 0;
      } else if (
        this.secondSelectionTopBlock.top >= this.clientHeight - this.commonSelectionBlocks.height &&
        this.secondSelectionTopBlock.bottom <= this.clientHeight
      ) {
        this.secondSelectionBlock.top =
          this.secondSelectionTopBlock.top - this.commonSelectionBlocks.height;
      } else if (this.secondSelectionTopBlock.bottom >= this.clientHeight) {
        this.secondSelectionBlock.top = this.clientHeight - this.commonSelectionBlocks.height;
      }
    },
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
    SelectionOptionsBlock,
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

.selection-options-block {
  max-width: 382px;
  border-radius: 6px;
  position: fixed;
  // position: absolute;
  margin: 0 auto;

  @media screen and (min-width: 576px) {
    max-width: 210px;
  }

  @media screen and (min-width: 768px) {
    max-width: 210px;
    margin: 0;
  }

  //  selection-options-block_hide
  &_hide {
    opacity: 0;
    transition: opacity 0.28s ease;
  }

  // selection-options-block_show
  &_show {
    opacity: 1;
    transition: opacity 0.28s ease;
  }
}
</style>
