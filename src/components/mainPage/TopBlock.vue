<template>
  <section class="top-block" :style="{ 'background-image': `url(${image})` }">
    <div class="top-block__container">
      <h1 class="top-block__heading">
        Уверенность в будущем,
        <span class="top-block__heading_span"> доступная каждому</span>
      </h1>
      <h2 class="top-block__subheading">
        Обеспечьте себе стабильность и приступайте
        <span class="top-block__subheading_span"> к реализации своих самых смелых планов!</span>
      </h2>
    </div>
  </section>
</template>

<script>
import mainTopImage from '@/assets/images/main/mainTop.jpg'

export default {
  name: 'TopBlock',

  data() {
    return {
      image: mainTopImage,
    }
  },
}
</script>

<style lang="scss" scoped>
// top-bloc
.top-block {
  width: 100%;
  margin: 0 auto;
  height: 320px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;

  @media screen and (min-width: 576px) {
    height: 720px;

    padding: 24px 28px 144px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 240px;
    padding-right: 240px;
  }

  &__container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }

  &__heading {
    font-size: 26px;
    line-height: 36px;
    color: #ffffff;
    margin-bottom: 8px;

    @media screen and (min-width: 768px) {
      font-size: 55px;
      line-height: 74px;
      margin-bottom: 24px;
    }

    &_span {
      display: block;
      font-size: inherit;
      line-height: inherit;
      color: inherit;
    }
  }

  &__subheading {
    font-size: 13px;
    line-height: 24px;
    color: #ffffff;

    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }

    &_span {
      display: block;
      font-size: inherit;
      line-height: inherit;
      color: inherit;
    }
  }
} // top-bloc
</style>
