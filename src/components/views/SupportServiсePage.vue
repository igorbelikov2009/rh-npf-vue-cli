<template>
  <div class="support-servise-page">
    <TopBlock :image="topBlock.image" :heading="topBlock.heading" />

    <QuestionsAnswers id="questionsAnswers" />
    <PensionPrograms />
    <SupportForm id="form" />
    <TopMenu />
    <Footer />
  </div>
</template>

<script>
import TopMenu from '@/components/topMenu/TopMenu.vue';
import TopBlock from '@/components/general/TopBlock.vue';
import supportImage from '../../../public/images/supportService/supportService.jpg';
import QuestionsAnswers from '@/components/supportServiсePage/QuestionsAnswers.vue';
import PensionPrograms from '@/components/supportServiсePage/PensionPrograms.vue';
import SupportForm from '@/components/supportServiсePage/SupportForm.vue';

import Footer from '@/components/Footer.vue';

export default {
  name: 'SupportServiсePage',
  data() {
    return {
      topBlock: {
        image: supportImage,
        heading: 'Поддержка',
      },
    };
  },

  components: {
    TopMenu,
    TopBlock,
    QuestionsAnswers,
    PensionPrograms,
    SupportForm,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
// support-servise-page
.support-servise-page {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  color: #5a646e;
}
// support-servise-page
</style>
