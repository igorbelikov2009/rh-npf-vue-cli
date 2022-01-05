<template>
  <div class="business-page">
    <TopBlock
      :image="topBlock.image"
      :heading="topBlock.heading"
      :subheading="topBlock.subheading"
    />

    <BusinessCarouselBlock />
    <BusinessProgramm />
    <BusinnesImages />
    <BusinnesStatistic />
    <TaxPreferences />
    <BusinnesForm />
    <TopMenu />
    <Footer />
  </div>
</template>

<script>
import TopMenu from '@/components/topMenu/TopMenu.vue';
import TopBlock from '@/components/general/TopBlock.vue';
import businessImage from '../../../public/images/businnes/businnes.jpg';
import BusinessCarouselBlock from '@/components/businnessPage/BusinessCarouselBlock.vue';
import BusinessProgramm from '@/components/businnessPage/BusinessProgramm.vue';
import BusinnesImages from '@/components/businnessPage/BusinnesImages.vue';
import BusinnesStatistic from '@/components/businnessPage/BusinnesStatistic.vue';
import TaxPreferences from '@/components/businnessPage/TaxPreferences.vue';
import BusinnesForm from '@/components/businnessPage/BusinnesForm.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'BusinessPage',
  data() {
    return {
      topBlock: {
        image: businessImage,
        heading: 'Для бизнеса',
        subheading:
          'Пенсионная программа – современный, эффективный инструмент с уникальным набором опций и льгот, позволяющий влиять на мотивацию  сотрудников и управлять результативностью бизнеса, создавая для компании положительный имидж и характеризуя ее как социально ответственного работодателя.',
      },
    };
  },

  components: {
    TopMenu,
    TopBlock,
    BusinessCarouselBlock,
    BusinessProgramm,
    BusinnesImages,
    BusinnesStatistic,
    TaxPreferences,
    BusinnesForm,
    Footer,
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
