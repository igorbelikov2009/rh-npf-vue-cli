<template>
  <div class="business-page">
    <TopMenu />
    <TopBlock
      :image="imageTop"
      :heading="headingTop"
      :headingSpan="headingSpanTop"
      :subheading="subheadingTop"
      :subheadingSpan="subheadingSpanTop"
    />
    <BusinessCarouselBlock />
  </div>
</template>

<script>
import TopMenu from '@/components/topMenu/TopMenu.vue';
import TopBlock from '@/components/general/TopBlock.vue';
import businessTopImage from '../../../public/images/businnes/businnes.jpg';

import BusinessCarouselBlock from '@/components/businnessPage/BusinessCarouselBlock.vue';
export default {
  name: 'BusinessPage',
  data() {
    return {
      imageTop: businessTopImage,
      headingTop: 'Для бизнеса',
      headingSpanTop: '',
      subheadingTop:
        'Пенсионная программа – современный, эффективный инструмент с уникальным набором опций и льгот, позволяющий влиять на мотивацию  сотрудников и управлять результативностью бизнеса, создавая для компании положительный имидж и характеризуя ее как социально ответственного работодателя.',
      subheadingSpanTop: '',
    };
  },

  components: {
    TopMenu,
    TopBlock,
    BusinessCarouselBlock,
  },
};
</script>

<style lang="scss" scoped>
.business-page {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
}
</style>
