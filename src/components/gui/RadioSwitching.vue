<template>
  <div class="switching">
    <div class="switching__changing-top-block">
      <div
        class="switching__border "
        :class="{
          switching__border_gray: ifHidingBlockVisible,
          switching__border_white: !ifHidingBlockVisible,
        }"
      >
        <div
          class="switching__top-title "
          :class="{
            'switching__top-title_backgr-gray': ifHidingBlockVisible,
            'switching__top-title_backgr-white': !ifHidingBlockVisible,
          }"
          @click="onClickArrowDown"
        >
          <div class="switching__top-title-elem">
            <RadioSwitchingChangingTitle
              v-for="(switchItem, index) in switchItems"
              :key="index"
              :ifTitleVisible="radioValue === index"
              :name="switchItem.name"
            />
          </div>

          <div class="switching__icon">
            <img
              class="switching__image "
              :class="{
                'switching__image_rotate-180': ifHidingBlockVisible,
                'switching__image_rotate-0': !ifHidingBlockVisible,
              }"
              src="../../../public/icons/triple/Arrow Down/Dark.svg"
              alt=""
            />
          </div>
        </div>

        <div
          class="switching__white-line "
          :class="{
            'switching__white-line_height-2': ifHidingBlockVisible,
            'switching__white-line_height-1': !ifHidingBlockVisible,
          }"
        >
          <div
            class="switching__black-line"
            :class="{
              'switching__black-line_width-0': ifHidingBlockVisible,
              'switching__black-line_width-50': !ifHidingBlockVisible,
            }"
          ></div>

          <div
            class="switching__black-line "
            :class="{
              'switching__black-line_width-0': ifHidingBlockVisible,
              'switching__black-line_width-50': !ifHidingBlockVisible,
            }"
          ></div>
        </div>
      </div>

      <div
        class="switching__hiding-block"
        :class="{
          'switching__hiding-block_show': ifHidingBlockVisible,
          'switching__hiding-block_hide': !ifHidingBlockVisible,
        }"
      ></div>
    </div>

    <div
      class="switching__container-top"
      :class="{
        'switching__container-top_show': ifHidingBlockVisible,
        'switching__container-top_hide': !ifHidingBlockVisible,
      }"
    >
      <RadioSwitchingTop
        @onChangeRadioTop="onChangeRadio"
        @onClickTopBlockButtons="onClickTopBlockButtons"
        :switchItems="switchItems"
      />
    </div>

    <RadioSwitchingBottom @onChangeRadioBottom="onChangeRadio" :switchItems="switchItems" />

    <div
      v-if="isHasButtonToArchive"
      class="switching__container-button"
      @click="onClickArchiveReporting"
    >
      <ButtonToArchive />
    </div>
  </div>
</template>

<script>
import RadioSwitchingChangingTitle from '@/components/gui/RadioSwitchingChangingTitle.vue';
import RadioSwitchingTop from '@/components/gui/RadioSwitchingTop.vue';
import RadioSwitchingBottom from '@/components/gui/RadioSwitchingBottom.vue';
import ButtonToArchive from '@/components/gui/ButtonToArchive.vue';

export default {
  name: 'RadioSwitching',
  data() {
    return {
      radioValue: 0,
      ifHidingBlockVisible: this.isHidingBlockVisible,
    };
  },
  props: {
    isHidingBlockVisible: { type: Boolean, default: false },
    isHasButtonToArchive: { type: Boolean, default: false },
    switchItems: { type: Array },
    name: { type: String },
    value: { type: Number },
  },

  methods: {
    onClickArchiveReporting() {
      this.$emit('onClickArchiveReporting');
    },

    onChangeRadio(switchValue) {
      this.radioValue = switchValue;
      // console.log('radioValue:' + this.radioValue);
      this.$emit('onChangeRadioSwitching', this.radioValue);
    },
    onClickArrowDown() {
      this.ifHidingBlockVisible = !this.ifHidingBlockVisible;
      // console.log('ifHidingBlockVisible:' + this.ifHidingBlockVisible);
    },
    onClickTopBlockButtons() {
      this.ifHidingBlockVisible = false;
      // console.log('ifHidingBlockVisible: ' + this.ifHidingBlockVisible);
      this.$emit('onClickTopBlockButtons');
    },
  },

  components: {
    RadioSwitchingChangingTitle,
    RadioSwitchingTop,
    RadioSwitchingBottom,
    ButtonToArchive,
  },
};
</script>

<style lang="scss" scoped>
.switching {
  display: block;
  position: relative;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    display: flex;
    align-items: center;
    margin-bottom: 48px;
  }

  &__changing-top-block {
    max-width: 546px;
    padding-bottom: 20px;
    position: relative;

    @media screen and (min-width: 576px) {
      display: none;
    }
  }

  &__border {
    width: 100%;
    border-radius: 5px;
    position: relative;

    // switching__border_white
    &_white {
      border: 1px solid #fff;
    }

    // switching__border_gray
    &_gray {
      border: 1px solid #e4e4e4;
    }
  }

  &__top-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    // switching__top-title_backgr-white
    &__backgr-white {
      background-color: #fff;
      transition: all 0.36s ease;
    }

    // switching__top-title_backgr-gray
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

    // switching__image_rotate-0
    &_rotate-0 {
      transform: scaleY(0.7) rotate(0deg);
    }

    // switching__image_rotate-180
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

    // switching__white-line_height-1
    &_height-1 {
      height: 1px;
      transition: width 0.7s ease-out;
    }

    // switching__white-line_height-2
    &_height-2 {
      height: 2px;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &__black-line {
    background-color: black;

    // switching__black-line_width-50
    &_width-50 {
      height: 1px;
      width: 50%;
      transition: width 0.7s ease-out;
    }

    // switching__black-line_width-0
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

    // switching__hiding-block_hide
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

    // switching__hiding-block_show
    &_show {
      transform: scale(1);
      transition: transform 0.28s;
      transition-property: transform;
      transition-duration: 0.28s;
      transition-timing-function: ease;
      transition-delay: 0s;
    }
  }

  &__container-button {
    width: 96px;
    margin-left: 0;

    @media screen and (min-width: 576px) {
      margin-left: 24px;
      margin-top: 0;
    }
  }

  &__container-top {
    width: calc(100% - 12px);
    border-radius: 6px;
    box-shadow: 1px 7px 8px 8px #afa9a9;

    // switching__container-top_hide
    &_hide {
      position: absolute;
      top: 0;
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

    // switching__container-top_show
    &_show {
      position: relative;
      top: -18px;
      left: 6px;
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
