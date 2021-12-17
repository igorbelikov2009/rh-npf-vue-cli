<template>
  <div class="expanding__row" @click="onClickExpandingRow">
    <h2 class="expanding__title">
      {{ title }}
    </h2>

    <button class="expanding__button">
      <div class="expanding__plus" :class="{ expanding__plus_rotate: isContentVisible }">
        <DarkIcon :isDecreased="true" icon="Plus Thin" />
      </div>

      <div class="expanding__minus" :class="{ expanding__minus_rotate: isContentVisible }">
        <DarkIcon :isDecreased="true" icon="Minus Thin" />
      </div>
    </button>
  </div>
</template>

<script>
import DarkIcon from '@/components/general/DarkIcon.vue';
export default {
  name: 'ExpandingPanel',

  props: {
    isContentVisible: { type: Boolean },
    title: { type: String },
  },
  methods: {
    onClickExpandingRow() {
      this.$emit('onClickExpandingRow');
    },
  },
  components: {
    DarkIcon,
  },
};
</script>

<style lang="scss" scoped>
// expanding
.expanding {
  &__row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0 32px;
    position: relative;
    cursor: pointer;
    //
    transition: padding 0.3s;
    transition-property: padding;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
  }

  &__title {
    vertical-align: baseline;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    color: #50287d;

    &:hover {
      color: #000;
    }
  }

  &__button {
    width: 18px;
    height: 18px;
    position: relative;
    top: 0;
    right: 0;
    margin-left: 12px;
    flex: none;
  }

  &__image {
    width: 18px;
    height: 18px;
  }

  &__plus {
    cursor: pointer;
    opacity: 1;
    width: 18px;
    height: 18px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    transform: rotate(0deg);
    transition: all 500ms;

    // expanding__plus_rotate
    &_rotate {
      opacity: 0;
      transform: rotate(180deg);
      transition: all 500ms;
    }
  }

  &__minus {
    cursor: pointer;
    width: 18px;
    height: 18px;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(0deg);
    transition: all 500ms;

    // expanding__minus_rotate
    &_rotate {
      transform: rotate(180deg);
      transition: all 500ms;
    }
  }
}
//expanding
</style>
