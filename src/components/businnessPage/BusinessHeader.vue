<template>
  <div class="businnes-carousel__header">
    <h2 class="businnes-carousel__heading">
      Какие задачи решает внедрение пенсионной программы
    </h2>
    <Arrows
      :isNoCursorLeft="NoCursorLeft"
      :isBlurredLeft="BlurredLeft"
      :isNoCursorRight="NoCursorRight"
      :isBlurredRight="BlurredRight"
      @onClickLeft="onClickLeft"
      @onClickRight="onClickRight"
    />
  </div>
</template>

<script>
import Arrows from '@/components/general/Arrows.vue';

export default {
  name: 'BusinessHeader',
  data() {
    return {
      isNoCursorLeft: this.NoCursorLeft,
      isBlurredLeft: this.BlurredLeft,
      isNoCursorRight: this.NoCursorRight,
      isBlurredRight: this.BlurredRight,
    };
  },
  props: {
    NoCursorLeft: { type: Boolean },
    BlurredLeft: { type: Boolean },
    NoCursorRight: { type: Boolean },
    BlurredRight: { type: Boolean },
  },
  methods: {
    onClickLeft() {
      this.$emit('onClickLeft');
    },
    onClickRight() {
      this.$emit('onClickRight');
    },
  },
  components: {
    Arrows,
  },
};
</script>

<style lang="scss" scoped>
// businnes-carousel__header
.businnes-carousel {
  &__header {
    max-width: 960px;
    margin: 0 auto 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__heading {
    display: block;
    font-size: 18px;
    line-height: 24px;
    color: #28323c;
  }
}
// businnes-carousel__header
</style>
