<template>
  <div class="management-page">
    <TopBlock :image="topBlock.imageTop" :heading="topBlock.heading" />

    <Management />
    <TopMenu />
    <Footer />
  </div>
</template>

<script>
import TopMenu from '@/components/topMenu/TopMenu.vue';
import TopBlock from '@/components/general/TopBlock.vue';
import managementImage from '../../../public/images/fundManagement/fundManagement.jpg';
import Management from '../../components/managementPage/Management.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'ManagementPage',

  data() {
    return {
      topBlock: {
        imageTop: managementImage,
        heading: 'Руководство и команда',
      },
    };
  },

  components: {
    TopMenu,
    TopBlock,
    Management,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.management-page {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  color: #5a646e;
  // плавная прокрутка
  // scroll-behavior: smooth;
}
</style>
