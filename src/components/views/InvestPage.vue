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
      :controllerValue="firstSelectionValue"
      :idOptions="firstSelectionBlock.idOptions"
      :selectionElements="firstSelectionElements"
      @onClickSelectionController="onClickFirstSelectController"
      @handleScroll="onScrollPortfolioStructure"
    />

    <CompositionOfFunds
      :isSelectionBlockVisible="secondSelectionBlock.isVisible"
      :controllerValue="secondSelectionValue"
      :idOptions="secondSelectionBlock.idOptions"
      :selectionElements="secondSelectionElements"
      @onClickSelectionController="onClickSecondSelectController"
      @handleScroll="onScrollCompositionOfFunds"
    />

    <ConvenienceArchives />

    <ConvenienceDescription />

    <TopMenu />

    <Footer />

    <div
      ref="firstSelectionBlock"
      :style="firstSelectionBlockStyle"
      class="invest-page__selection-options-block"
      :class="{
        'invest-page__selection-options-block_show': firstSelectionBlock.isVisible,
        'invest-page__selection-options-block_hide': !firstSelectionBlock.isVisible,
      }"
    >
      <GuiSelectionOptionsBlock
        :selectionElements="firstSelectionElements"
        @onClickSelectionBlock="onClickFirstSelectionBlock"
        @onChangeSelectionBlock="onChangeFirstSelectionBlock"
      />
    </div>

    <div
      :style="secondSelectionBlockStyle"
      class="invest-page__selection-options-block"
      :class="{
        'invest-page__selection-options-block_show': secondSelectionBlock.isVisible,
        'invest-page__selection-options-block_hide': !secondSelectionBlock.isVisible,
      }"
    >
      <GuiSelectionOptionsBlock
        :selectionElements="secondSelectionElements"
        @onClickSelectionBlock="onClickSecondSelectionBlock"
        @onChangeSelectionBlock="onChangeSecondSelectionBlock"
      />
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns';

import TopMenu from '@/components/topMenu/TopMenu.vue';
import TopBlock from '@/components/general/TopBlock.vue';
import InvestmentRules from '@/components/investPage/InvestmentRules.vue';
import PortfolioStructure from '@/components/investPage/PortfolioStructure.vue';
import CompositionOfFunds from '@/components/investPage/CompositionOfFunds.vue';
import ConvenienceArchives from '@/components/investPage/ConvenienceArchives.vue';
import ConvenienceDescription from '@/components/investPage/ConvenienceDescription.vue';

import Footer from '@/components/Footer.vue';
import GuiSelectionOptionsBlock from '@/components/gui/guiSelect/GuiSelectionOptionsBlock.vue';

export default {
  name: 'InvestPage',
  data() {
    return {
      clientHeight: 0,
      //
      firstSelectionValue: '30 November 2021 г.',
      secondSelectionValue: '30 November 2021 г.',
      //

      firstSelectController: {
        top: 0,
        bottom: 0,
        height: 0,
        width: 0,
        left: 0,

        selectionElements: [
          {
            date: '2021-11-30T09:00:00.000Z',
            value: '2021-11-30T09:00:00.000Z',
            id: 0,
          },
          {
            date: '2021-10-31T09:00:00.000Z',
            value: '2021-10-31T09:00:00.000Z',
            id: 1,
          },
          {
            date: '2021-09-30T09:00:00.000Z',
            value: '2021-09-30T09:00:00.000Z',
            id: 2,
          },
          {
            date: '2021-08-31T09:00:00.000Z',
            value: '2021-08-31T09:00:00.000Z',
            id: 3,
          },
          {
            date: '2021-07-31T09:00:00.000Z',
            value: '2021-07-31T09:00:00.000Z',
            id: 4,
          },
          {
            date: '2021-06-30T09:00:00.000Z',
            value: '2021-06-30T09:00:00.000Z',
            id: 5,
          },
          {
            date: '2021-05-31T09:00:00.000Z',
            value: '2021-05-31T09:00:00.000Z',
            id: 6,
          },
          {
            date: '2021-04-30T09:00:00.000Z',
            value: '2021-04-30T09:00:00.000Z',
            id: 7,
          },
          {
            date: '2021-03-31T09:00:00.000Z',
            value: '2021-03-31T09:00:00.000Z',
            id: 8,
          },
          {
            date: '2021-02-28T09:00:00.000Z',
            value: '2021-02-28T09:00:00.000Z',
            id: 9,
          },
          {
            date: '2021-01-31T09:00:00.000Z',
            value: '2021-01-31T09:00:00.000Z',
            id: 10,
          },
          {
            date: '2020-12-31T09:00:00.000Z',
            value: '2020-12-31T09:00:00.000Z',
            id: 11,
          },
          {
            date: '2020-11-30T09:00:00.000Z',
            value: '2020-11-30T09:00:00.000Z',
            id: 12,
          },
          {
            date: '2020-10-31T09:00:00.000Z',
            value: '2020-10-31T09:00:00.000Z',
            id: 13,
          },
          {
            date: '2020-09-30T09:00:00.000Z',
            value: '2020-09-30T09:00:00.000Z',
            id: 14,
          },
          {
            date: '2020-08-31T09:00:00.000Z',
            value: '2020-08-31T09:00:00.000Z',
            id: 15,
          },
          {
            date: '2020-07-31T09:00:00.000Z',
            value: '2020-07-31T09:00:00.000Z',
            id: 16,
          },
          {
            date: '2020-06-30T09:00:00.000Z',
            value: '2020-06-30T09:00:00.000Z',
            id: 17,
          },
          {
            date: '2020-05-31T09:00:00.000Z',
            value: '2020-05-31T09:00:00.000Z',
            id: 18,
          },
          {
            date: '2020-04-30T09:00:00.000Z',
            value: '2020-04-30T09:00:00.000Z',
            id: 19,
          },
          {
            date: '2020-03-31T09:00:00.000Z',
            value: '2020-03-31T09:00:00.000Z',
            id: 20,
          },
          {
            date: '2020-02-29T09:00:00.000Z',
            value: '2020-02-29T09:00:00.000Z',
            id: 21,
          },
          {
            date: '2020-01-31T09:00:00.000Z',
            value: '2020-01-31T09:00:00.000Z',
            id: 22,
          },
          {
            date: '2019-12-31T09:00:00.000Z',
            value: '2019-12-31T09:00:00.000Z',
            id: 23,
          },
          {
            date: '2019-11-30T09:00:00.000Z',
            value: '2019-11-30T09:00:00.000Z',
            id: 24,
          },
        ],
      },
      firstSelectionBlock: {
        idOptions: 0,
        height: 0,
        top: 0,
        isVisible: false,
      },

      secondSelectController: {
        top: 0,
        bottom: 0,
        height: 0,
        width: 0,
        left: 0,

        selectionElements: [
          {
            date: '2021-11-30T09:00:00.000Z',
            value: '2021-11-30T09:00:00.000Z',
            id: 0,
          },
          {
            date: '2021-10-31T09:00:00.000Z',
            value: '2021-10-31T09:00:00.000Z',
            id: 1,
          },
          {
            date: '2021-09-30T09:00:00.000Z',
            value: '2021-09-30T09:00:00.000Z',
            id: 2,
          },
          {
            date: '2021-08-31T09:00:00.000Z',
            value: '2021-08-31T09:00:00.000Z',
            id: 3,
          },
          {
            date: '2021-07-31T09:00:00.000Z',
            value: '2021-07-31T09:00:00.000Z',
            id: 4,
          },
          {
            date: '2021-06-30T09:00:00.000Z',
            value: '2021-06-30T09:00:00.000Z',
            id: 5,
          },
          {
            date: '2021-05-31T09:00:00.000Z',
            value: '2021-05-31T09:00:00.000Z',
            id: 6,
          },
          {
            date: '2021-04-30T09:00:00.000Z',
            value: '2021-04-30T09:00:00.000Z',
            id: 7,
          },
          {
            date: '2021-03-31T09:00:00.000Z',
            value: '2021-03-31T09:00:00.000Z',
            id: 8,
          },
          {
            date: '2021-02-28T09:00:00.000Z',
            value: '2021-02-28T09:00:00.000Z',
            id: 9,
          },
          {
            date: '2021-01-31T09:00:00.000Z',
            value: '2021-01-31T09:00:00.000Z',
            id: 10,
          },
          {
            date: '2020-12-31T09:00:00.000Z',
            value: '2020-12-31T09:00:00.000Z',
            id: 11,
          },
          {
            date: '2020-11-30T09:00:00.000Z',
            value: '2020-11-30T09:00:00.000Z',
            id: 12,
          },
          {
            date: '2020-10-31T09:00:00.000Z',
            value: '2020-10-31T09:00:00.000Z',
            id: 13,
          },
          {
            date: '2020-09-30T09:00:00.000Z',
            value: '2020-09-30T09:00:00.000Z',
            id: 14,
          },
          {
            date: '2020-08-31T09:00:00.000Z',
            value: '2020-08-31T09:00:00.000Z',
            id: 15,
          },
          {
            date: '2020-07-31T09:00:00.000Z',
            value: '2020-07-31T09:00:00.000Z',
            id: 16,
          },
          {
            date: '2020-06-30T09:00:00.000Z',
            value: '2020-06-30T09:00:00.000Z',
            id: 17,
          },
          {
            date: '2020-05-31T09:00:00.000Z',
            value: '2020-05-31T09:00:00.000Z',
            id: 18,
          },
          {
            date: '2020-04-30T09:00:00.000Z',
            value: '2020-04-30T09:00:00.000Z',
            id: 19,
          },
          {
            date: '2020-03-31T09:00:00.000Z',
            value: '2020-03-31T09:00:00.000Z',
            id: 20,
          },
          {
            date: '2020-02-29T09:00:00.000Z',
            value: '2020-02-29T09:00:00.000Z',
            id: 21,
          },
          {
            date: '2020-01-31T09:00:00.000Z',
            value: '2020-01-31T09:00:00.000Z',
            id: 22,
          },
          {
            date: '2019-12-31T09:00:00.000Z',
            value: '2019-12-31T09:00:00.000Z',
            id: 23,
          },
          {
            date: '2019-11-30T09:00:00.000Z',
            value: '2019-11-30T09:00:00.000Z',
            id: 24,
          },
        ],
      },
      secondSelectionBlock: {
        idOptions: 0,
        height: 0,
        top: 0,
        isVisible: false,
      },

      commonSelectionBlocks: {
        height: 0,
      },
    };
  },

  created() {
    window.addEventListener('scroll', this.onScrollInvestPage);
  },

  destroyed() {
    window.removeEventListener('scroll', this.onScrollInvestPage);
  },

  computed: {
    firstSelectionBlockStyle() {
      return {
        top: `${this.firstSelectionBlock.top}px`,
        left: `${this.firstSelectController.left + 6}px`,
        width: `${this.firstSelectController.width - 12}px`,
      };
    },
    secondSelectionBlockStyle() {
      return {
        top: `${this.secondSelectionBlock.top}px`,
        left: `${this.secondSelectController.left + 6}px`,
        width: `${this.secondSelectController.width - 12}px`,
      };
    },

    firstSelectionElements() {
      return this.firstSelectController.selectionElements
        .map(item => format(new Date(item.date), 'd MMMM Y г.'))
        .map((item, index) => ({ date: String(item), value: String(item), id: index }));
    },
    secondSelectionElements() {
      return this.secondSelectController.selectionElements
        .map(item => format(new Date(item.date), 'd MMMM Y г.'))
        .map((item, index) => ({ date: String(item), value: String(item), id: index }));
    },
    // firstSelectionValue() {
    //   return this.firstSelectionElements[0].date;
    // },
    // secondSelectionValue() {
    //   return this.secondSelectionElements[0].date;
    // },
  },

  methods: {
    onScrollInvestPage() {
      this.getSelectionBlockHeight();
    },
    onClickFirstSelectController() {
      this.firstSelectionBlock.isVisible = !this.firstSelectionBlock.isVisible;
      this.secondSelectionBlock.isVisible = false;
      this.firstSelectionBlock.top = this.firstSelectController.bottom;
    },
    onClickSecondSelectController() {
      this.secondSelectionBlock.isVisible = !this.secondSelectionBlock.isVisible;
      this.firstSelectionBlock.isVisible = false;
      this.secondSelectionBlock.top = this.secondSelectController.bottom;
    },

    onClickFirstSelectionBlock() {
      this.firstSelectionBlock.isVisible = false;
    },
    onClickSecondSelectionBlock() {
      this.secondSelectionBlock.isVisible = false;
    },

    onChangeFirstSelectionBlock(selectionValue, idOptions) {
      this.firstSelectionValue = selectionValue;
      this.firstSelectionBlock.idOptions = idOptions;
      // console.log(selectionValue, idOptions);
    },
    onChangeSecondSelectionBlock(selectionValue, idOptions) {
      this.secondSelectionValue = selectionValue;
      this.secondSelectionBlock.idOptions = idOptions;
      // console.log(selectionValue, idOptions);
    },

    getClientHeight() {
      this.clientHeight = document.documentElement.clientHeight;
    },

    getSelectionBlockHeight() {
      const selectionOptionBlock = this.$refs.firstSelectionBlock;
      this.commonSelectionBlocks.height = Math.round(
        selectionOptionBlock.getBoundingClientRect().height
      );
    },

    onScrollPortfolioStructure(top, bottom, left, width, height) {
      this.getFirstSelectionBlockCoordsTop();

      this.firstSelectController.top = top;
      this.firstSelectController.bottom = bottom;
      this.firstSelectController.left = left;
      this.firstSelectController.width = width;
      this.firstSelectController.height = height;
      this.getClientHeight();
    },
    onScrollCompositionOfFunds(top, bottom, left, width, height) {
      this.secondSelectController.top = top;
      this.secondSelectController.bottom = bottom;
      this.secondSelectController.left = left;
      this.secondSelectController.width = width;
      this.secondSelectController.height = height;
      this.getSecondSelectionBlockCoordsTop();
      this.getClientHeight();
    },

    getFirstSelectionBlockCoordsTop() {
      this.firstSelectionBlock.top = this.firstSelectController.bottom;
      if (this.firstSelectController.bottom <= 0) {
        this.firstSelectionBlock.top = 0;
      } else if (
        this.firstSelectController.top >= this.clientHeight - this.commonSelectionBlocks.height &&
        this.firstSelectController.bottom <= this.clientHeight
      ) {
        this.firstSelectionBlock.top =
          this.firstSelectController.top - this.commonSelectionBlocks.height;
      } else if (this.firstSelectController.bottom >= this.clientHeight) {
        this.firstSelectionBlock.top = this.clientHeight - this.commonSelectionBlocks.height;
      }
    },
    getSecondSelectionBlockCoordsTop() {
      this.secondSelectionBlock.top = this.secondSelectController.bottom;
      if (this.secondSelectController.bottom <= 0) {
        this.secondSelectionBlock.top = 0;
      } else if (
        this.secondSelectController.top >= this.clientHeight - this.commonSelectionBlocks.height &&
        this.secondSelectController.bottom <= this.clientHeight
      ) {
        this.secondSelectionBlock.top =
          this.secondSelectController.top - this.commonSelectionBlocks.height;
      } else if (this.secondSelectController.bottom >= this.clientHeight) {
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
    GuiSelectionOptionsBlock,
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

  &__selection-options-block {
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

    //  invest-page__selection-options-block_hide
    &_hide {
      opacity: 0;
      transition: opacity 0.28s ease;
    }

    // invest-page__selection-options-block_show
    &_show {
      opacity: 1;
      transition: opacity 0.28s ease;
    }
  }
}
</style>
