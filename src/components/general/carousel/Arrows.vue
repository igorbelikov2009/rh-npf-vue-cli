<template>
  <div class="arrows">
    <div
      class="arrows__left-arrow"
      :class="{ 'arrows__left-arrow_no-cursor': isNoCursorLeft }"
      @click="onClickLeft"
    >
      <img
        class="
                  arrows__left-image arrows__not-visible
                "
        src="/icons/triple/Arrow Right/Colored.svg"
        alt="arrow"
      />

      <img
        class="arrows__left-image"
        :class="{ 'arrows__opacity-04': isBlurredLeft }"
        src="/icons/triple/Arrow Right/Dark.svg"
        alt="arrow"
      />
    </div>

    <div
      class="arrows__right-arrow"
      :class="{ 'arrows__right-arrow_no-cursor': isNoCursorRight }"
      @click="onClickRight"
    >
      <img
        class="
                  arrows__right-image arrows__not-visible
                "
        src="/icons/triple/Arrow Right/Colored.svg"
        alt="arrow"
      />

      <img
        class="arrows__right-image"
        :class="{ 'arrows__opacity-04': isBlurredRight }"
        src="/icons/triple/Arrow Right/Dark.svg"
        alt="arrow"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OffsetArrows',
  props: {
    isNoCursorLeft: { type: Boolean },
    isBlurredLeft: { type: Boolean },
    isNoCursorRight: { type: Boolean },
    isBlurredRight: { type: Boolean },
  },

  methods: {
    onClickLeft() {
      // console.log('onClickLeft')
      this.$emit('onClickLeft');
    },
    onClickRight() {
      // console.log('onClickRight')
      this.$emit('onClickRight');
    },
  },
};
</script>

<style lang="scss" scoped>
// arrows
.arrows {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  &__left-arrow {
    position: relative;
    width: 24px;
    height: 26px;
    cursor: pointer;

    &:hover .arrows__left-image:first-of-type {
      display: block;
    }

    // arrows__left-arrow_no-cursor
    // добавляем в ("arrows__left-arrow") !!!
    &_no-cursor {
      cursor: default;

      &:hover .arrows__left-image:first-of-type {
        display: none;
      }
    }
  }

  &__right-arrow {
    position: relative;
    width: 24px;
    height: 26px;
    cursor: pointer;

    &:hover .arrows__right-image:first-of-type {
      display: block;
    }

    // arrows__right-arrow_no-cursor
    // добавляем в ("history__right-arrow") !!!
    &_no-cursor {
      cursor: default;

      &:hover .arrows__right-image:first-of-type {
        display: none;
      }
    }
  }

  &__left-image {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(180deg);
  }

  &__right-image {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 0;
    left: 0;
  }

  // arrows__opacity-04
  &__opacity-04 {
    opacity: 0.4;
  }

  // arrows__not-visible
  &__not-visible {
    display: none;
  }
} // arrows
</style>
