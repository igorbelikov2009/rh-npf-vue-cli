<template>
  <div class="radio-list-controller">
    <div class="radio-list-controller__changing-title">
      <div
        class="radio-list-controller__border "
        :class="{
          'radio-list-controller__border_gray': ifRadioListVisible,
          'radio-list-controller__border_white': !ifRadioListVisible,
        }"
      >
        <div
          class="radio-list-controller__container "
          :class="{
            'radio-list-controller__container_backgr-gray': ifRadioListVisible,
            'radio-list-controller__container_backgr-white': !ifRadioListVisible,
          }"
          @click="onClickRadioListController"
        >
          <div class="radio-list-controller__controller-date">
            <div>
              <p class="radio-list-controller-date">{{ value }}</p>
            </div>
          </div>

          <div class="radio-list-controller__icon">
            <img
              class="radio-list-controller__image "
              :class="{
                'radio-list-controller__image_rotate-180': ifRadioListVisible,
                'radio-list-controller__image_rotate-0': !ifRadioListVisible,
              }"
              src="/icons/triple/Arrow Down/Dark.svg"
              alt=""
            />
          </div>
        </div>

        <div
          class="radio-list-controller__white-line "
          :class="{
            'radio-list-controller__white-line_height-2': ifRadioListVisible,
            'radio-list-controller__white-line_height-1': !ifRadioListVisible,
          }"
        >
          <div
            class="radio-list-controller__black-line"
            :class="{
              'radio-list-controller__black-line_width-0': ifRadioListVisible,
              'radio-list-controller__black-line_width-50': !ifRadioListVisible,
            }"
          ></div>

          <div
            class="radio-list-controller__black-line "
            :class="{
              'radio-list-controller__black-line_width-0': ifRadioListVisible,
              'radio-list-controller__black-line_width-50': !ifRadioListVisible,
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuiRadioListController',

  props: {
    value: { type: Number },
    ifRadioListVisible: { type: Boolean, default: false },
    radioListElements: { type: Array },
  },
  methods: {
    onClickRadioListController() {
      this.$emit('onClickRadioListController');
    },
  },
};
</script>

<style lang="scss" scoped>
// radio-list-controller
.radio-list-controller {
  display: block;
  position: relative;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }

  &__changing-title {
    max-width: 546px;
    position: relative;
  }

  &__border {
    width: 100%;
    border-radius: 5px;
    position: relative;

    // radio-list-controller__border_white
    &_white {
      border: 1px solid #fff;
    }

    // radio-list-controller__border_gray
    &_gray {
      border: 1px solid #e4e4e4;
    }
  }

  &__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    // radio-list-controller__container_backgr-white
    &__backgr-white {
      background-color: #fff;
      transition: all 0.36s ease;
    }

    // radio-list-controller__container_backgr-gray
    &_backgr-gray {
      background-color: #d0f0f6d1;
      transition: all 0.36s ease;
    }
  }

  &__controller-date {
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

    // radio-list-controller__image_rotate-0
    &_rotate-0 {
      transform: scaleY(0.7) rotate(0deg);
    }

    // radio-list-controller__image_rotate-180
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

    // radio-list-controller__white-line_height-1
    &_height-1 {
      height: 1px;
      transition: width 0.7s ease-out;
    }

    // radio-list-controller__white-line_height-2
    &_height-2 {
      height: 2px;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &__black-line {
    background-color: black;

    // radio-list-controller__black-line_width-50
    &_width-50 {
      height: 1px;
      width: 50%;
      transition: width 0.7s ease-out;
    }

    // radio-list-controller__black-line_width-0
    &_width-0 {
      width: 0;
      height: 2px;
      transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
}

.radio-list-controller-date {
  display: block;
  padding: 18px 12px;
  font-size: 14px;
  line-height: 18px;
  color: #28323c;
  font-weight: 400;
}
</style>
