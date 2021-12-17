<template>
  <section class="carousel-header">
    <div class="carousel-header__heading">
      <h1 v-if="ifHasHeaderTitle" class="carousel-header__title">{{ headerTitle }}</h1>
      <p v-if="ifHasHeaderSubtitle" class="carousel-header__subtitle">{{ headerSubtitle }}</p>
      <Arrows
        :isNoCursorLeft="NoCursorLeft"
        :isBlurredLeft="BlurredLeft"
        :isNoCursorRight="NoCursorRight"
        :isBlurredRight="BlurredRight"
        @onClickLeft="onClickLeft"
        @onClickRight="onClickRight"
      />
    </div>
  </section>
</template>

<script>
import Arrows from '@/components/general/carousel/Arrows.vue';

export default {
  name: 'CarouselHeader',
  data() {
    return {
      isNoCursorLeft: this.NoCursorLeft,
      isBlurredLeft: this.BlurredLeft,
      isNoCursorRight: this.NoCursorRight,
      isBlurredRight: this.BlurredRight,
    };
  },
  props: {
    headerTitle: { type: String },
    headerSubtitle: { type: String },
    ifHasHeaderTitle: { type: Boolean, default: false },
    ifHasHeaderSubtitle: { type: Boolean, default: false },
    NoCursorLeft: { type: Boolean },
    BlurredLeft: { type: Boolean },
    NoCursorRight: { type: Boolean },
    BlurredRight: { type: Boolean },
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
  components: {
    Arrows,
  },
};
</script>

<style lang="scss" scoped>
// carousel-header
.carousel-header {
  width: 100%;
  max-width: 960px;
  background-color: #fff;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;

  @media screen and (min-width: 576px) {
    padding-left: 28px;
    padding-right: 28px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }

  &__heading {
    width: 100%;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
      margin-bottom: 40px;
    }

    @media screen and (min-width: 1300px) {
      margin-bottom: 48px;
    }
  }

  &__title {
    font-size: 34px;
    line-height: 48px;
    color: #28323c;
    margin-bottom: 24px;
  }

  &__subtitle {
    font-size: 18px;
    line-height: 24px;
    color: #28323c;
    margin-bottom: 24px;
  }
} // carousel-header
</style>
