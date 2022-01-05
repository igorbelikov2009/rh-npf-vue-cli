<template>
  <div class="about-fund">
    <TopBlock
      :image="topBlock.image"
      :heading="topBlock.heading"
      :subheading="topBlock.subheading"
    />

    <section class="about-fund__about-us">
      <p class="about-fund__description">
        Мы являемся одним из немногих безотраслевых фондов, что позволяет нам вести абсолютно
        прозрачную и независимую инвестиционную политику в отношении наших клиентов и занимать
        лидирующие позиции на протяжении последних 15 лет.
      </p>

      <p class="about-fund__description">
        Акционерами Фонда являются: ООО "Велби Холдинг" и АО СК "Ренессанс здоровье".
      </p>
    </section>

    <AboutFundBlock />
    <Statistics />
    <TopMenu />
    <Footer />
  </div>
</template>

<script>
import TopMenu from '@/components/topMenu/TopMenu.vue';
import TopBlock from '@/components/general/TopBlock.vue';
import aboutFundImage from '../../../public/images/aboutFund/aboutFundTop.jpg';
import AboutFundBlock from '@/components/aboutFundPage/AboutFundBlock.vue';
import Statistics from '@/components/mainPage/statistics/Statistics.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'AboutFundPage',
  data() {
    return {
      topBlock: {
        image: aboutFundImage,
        heading: 'О фонде',
        subheading:
          'На сегодняшний день АО НПФ "Ренессанс пенсии" – один из крупнейших и надежных негосударственных пенсионных фондов на рынке негосударственного пенсионного обеспечения (НПО).',
      },
    };
  },

  components: {
    TopMenu,
    TopBlock,
    AboutFundBlock,
    Statistics,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.about-fund {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  color: #5a646e;

  &__about-us {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    background-color: #fff;
    padding: 24px 24px 48px;

    @media screen and (min-width: 768px) {
      padding: 48px 28px 72px;
    }

    @media screen and (min-width: 1024px) {
      padding-right: 0;
      padding-left: 0;
    }

    @media screen and (min-width: 1440px) {
      padding-top: 72px;
    }
  }

  &__description {
    color: #78828c;
    font-size: 13px;
    margin-bottom: 0;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }

    &:first-of-type {
      margin-bottom: 24px;
    }
  }
}
</style>
