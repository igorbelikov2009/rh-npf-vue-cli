<template>
  <section class="news-header">
    <div class="news-header__heading">
      <h1 class="news-header__title">Новости</h1>
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
import Arrows from '@/components/general/Arrows.vue';

export default {
  name: 'NewsHeader',
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
// news-header
.news-header {
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
} // news-header
</style>
