<template>
  <div class="select-controller">
    <div class="select-controller__changing-title">
      <div
        class="select-controller__border "
        :class="{
          'select-controller__border_gray': ifSelectionOptionsBlock,
          'select-controller__border_white': !ifSelectionOptionsBlock,
        }"
      >
        <div
          class="select-controller__container "
          :class="{
            'select-controller__container_backgr-gray': ifSelectionOptionsBlock,
            'select-controller__container_backgr-white': !ifSelectionOptionsBlock,
          }"
          @click="onClickSelectionController"
        >
          <div class="select-controller__controller-date">
            <div>
              <p class="select-controller-date">{{ value }}</p>
            </div>
          </div>

          <div class="select-controller__icon">
            <img
              class="select-controller__image "
              :class="{
                'select-controller__image_rotate-180': ifSelectionOptionsBlock,
                'select-controller__image_rotate-0': !ifSelectionOptionsBlock,
              }"
              src="/icons/triple/Arrow Down/Dark.svg"
              alt=""
            />
          </div>
        </div>

        <div
          class="select-controller__white-line "
          :class="{
            'select-controller__white-line_height-2': ifSelectionOptionsBlock,
            'select-controller__white-line_height-1': !ifSelectionOptionsBlock,
          }"
        >
          <div
            class="select-controller__black-line"
            :class="{
              'select-controller__black-line_width-0': ifSelectionOptionsBlock,
              'select-controller__black-line_width-50': !ifSelectionOptionsBlock,
            }"
          ></div>

          <div
            class="select-controller__black-line "
            :class="{
              'select-controller__black-line_width-0': ifSelectionOptionsBlock,
              'select-controller__black-line_width-50': !ifSelectionOptionsBlock,
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuiSelectController',

  props: {
    value: { type: String },
    ifSelectionOptionsBlock: { type: Boolean, default: false },
    // selectionElements: { type: Array },
  },
  methods: {
    onClickSelectionController() {
      this.$emit('onClickSelectionController');
    },
  },
};
</script>

<style lang="scss" scoped>
.select-controller {
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

    // select-controller__border_white
    &_white {
      border: 1px solid #fff;
    }

    // select-controller__border_gray
    &_gray {
      border: 1px solid #e4e4e4;
    }
  }

  &__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    // select-controller__container_backgr-white
    &__backgr-white {
      background-color: #fff;
      transition: all 0.36s ease;
    }

    // select-controller__container_backgr-gray
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

    // select-controller__image_rotate-0
    &_rotate-0 {
      transform: scaleY(0.7) rotate(0deg);
    }

    // select-controller__image_rotate-180
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

    // select-controller__white-line_height-1
    &_height-1 {
      height: 1px;
      transition: width 0.7s ease-out;
    }

    // select-controller__white-line_height-2
    &_height-2 {
      height: 2px;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &__black-line {
    background-color: black;

    // select-controller__black-line_width-50
    &_width-50 {
      height: 1px;
      width: 50%;
      transition: width 0.7s ease-out;
    }

    // select-controller__black-line_width-0
    &_width-0 {
      width: 0;
      height: 2px;
      transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
}

.select-controller-date {
  display: block;
  padding: 18px 12px;
  font-size: 14px;
  line-height: 18px;
  color: #28323c;
  font-weight: 400;
}
</style>
