<template>
  <div class="selection">
    <div class="selection__changing-top-block">
      <div
        class="selection__border "
        :class="{
          selection__border_gray: ifSelectionOptionsBlock,
          selection__border_white: !ifSelectionOptionsBlock,
        }"
      >
        <div
          class="selection__top-title "
          :class="{
            'selection__top-title_backgr-gray': ifSelectionOptionsBlock,
            'selection__top-title_backgr-white': !ifSelectionOptionsBlock,
          }"
          @click="onClickSelectionTopBlock"
        >
          <div class="selection__top-title-elem">
            <SelectionTopBlockTitle
              v-for="(selectionItem, index) in selectionItems"
              :key="index"
              :ifTitleVisible="value === index"
              :name="selectionItem.name"
            />
          </div>

          <div class="selection__icon">
            <img
              class="selection__image "
              :class="{
                'selection__image_rotate-180': ifSelectionOptionsBlock,
                'selection__image_rotate-0': !ifSelectionOptionsBlock,
              }"
              src="../../../public/icons/triple/Arrow Down/Dark.svg"
              alt=""
            />
          </div>
        </div>

        <div
          class="selection__white-line "
          :class="{
            'selection__white-line_height-2': ifSelectionOptionsBlock,
            'selection__white-line_height-1': !ifSelectionOptionsBlock,
          }"
        >
          <div
            class="selection__black-line"
            :class="{
              'selection__black-line_width-0': ifSelectionOptionsBlock,
              'selection__black-line_width-50': !ifSelectionOptionsBlock,
            }"
          ></div>

          <div
            class="selection__black-line "
            :class="{
              'selection__black-line_width-0': ifSelectionOptionsBlock,
              'selection__black-line_width-50': !ifSelectionOptionsBlock,
            }"
          ></div>
        </div>
      </div>

      <div
        class="selection__hiding-block"
        :class="{
          'selection__hiding-block_show': ifSelectionOptionsBlock,
          'selection__hiding-block_hide': !ifSelectionOptionsBlock,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import SelectionTopBlockTitle from '@/components/gui/SelectionTopBlockTitle.vue';

export default {
  name: 'SelectionTopBlock',

  props: {
    value: { type: Number, required: true },
    ifSelectionOptionsBlock: { type: Boolean, default: false },
    selectionItems: { type: Array },
    name: { type: String },
  },

  methods: {
    onClickSelectionTopBlock() {
      this.$emit('onClickSelectionTopBlock');
    },
  },

  components: {
    SelectionTopBlockTitle,
  },
};
</script>

<style lang="scss" scoped>
.selection {
  display: block;
  position: relative;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }

  &__changing-top-block {
    max-width: 546px;
    position: relative;
  }

  &__border {
    width: 100%;
    border-radius: 5px;
    position: relative;

    // selection__border_white
    &_white {
      border: 1px solid #fff;
    }

    // selection__border_gray
    &_gray {
      border: 1px solid #e4e4e4;
    }
  }

  &__top-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    // selection__top-title_backgr-white
    &__backgr-white {
      background-color: #fff;
      transition: all 0.36s ease;
    }

    // selection__top-title_backgr-gray
    &_backgr-gray {
      background-color: #d0f0f6d1;
      transition: all 0.36s ease;
    }
  }

  &__top-title-elem {
    font-size: 14px;
    line-height: 18px;
    color: #28323c;
    font-weight: 400;
    padding-left: 8px;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 8px;
  }

  &__image {
    width: 18px;
    height: 18px;
    flex: none;
    cursor: pointer;
    transition: transform 0.28s;
    transition-property: transform;
    transition-duration: 0.28s;
    transition-timing-function: ease;
    transition-delay: 0s;

    // selection__image_rotate-0
    &_rotate-0 {
      transform: scaleY(0.7) rotate(0deg);
    }

    // selection__image_rotate-180
    &_rotate-180 {
      transform: scaleY(0.7) rotate(180deg);
    }
  }

  &__white-line {
    width: calc(100% - 16px);
    background-color: #fff;
    position: absolute;
    bottom: 6px;
    left: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    // selection__white-line_height-1
    &_height-1 {
      height: 1px;
      transition: width 0.7s ease-out;
    }

    // selection__white-line_height-2
    &_height-2 {
      height: 2px;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &__black-line {
    background-color: black;

    // selection__black-line_width-50
    &_width-50 {
      height: 1px;
      width: 50%;
      transition: width 0.7s ease-out;
    }

    // selection__black-line_width-0
    &_width-0 {
      width: 0;
      height: 2px;
      transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &__hiding-block {
    width: 100%;
    background-color: #fff;
    max-height: 280px;
    height: auto;
    position: absolute;
    top: 66px;

    // selection__hiding-block_hide
    &_hide {
      transform: scale(0);
      //
      // transform: scale(1);
      // изменить transform: scale(0);
      transition: transform 0.28s;
      transition-property: transform;
      transition-duration: 0.28s;
      transition-timing-function: ease;
      transition-delay: 0s;
    }

    // selection__hiding-block_show
    &_show {
      transform: scale(1);
      transition: transform 0.28s;
      transition-property: transform;
      transition-duration: 0.28s;
      transition-timing-function: ease;
      transition-delay: 0s;
    }
  }
}
</style>
