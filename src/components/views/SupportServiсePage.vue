<template>
  <div class="support-servise-page">
    <TopMenu />
    <TopBlock
      :image="imageTop"
      :heading="headingTop"
      :headingSpan="headingSpanTop"
      :subheading="subheadingTop"
      :subheadingSpan="subheadingSpanTop"
    />
    <QuestionsAnswers id="questionsAnswers" />
    <PensionPrograms />
    <SupportForm id="form" />
    <Footer />
  </div>
</template>

<script>
import TopMenu from '@/components/topMenu/TopMenu.vue';
import TopBlock from '@/components/general/TopBlock.vue';
import supportServiceTopImage from '../../../public/images/supportService/supportService.jpg';
import QuestionsAnswers from '@/components/supportServiсePage/QuestionsAnswers.vue';
import PensionPrograms from '@/components/supportServiсePage/PensionPrograms.vue';
import SupportForm from '@/components/supportServiсePage/SupportForm.vue';

import Footer from '@/components/Footer.vue';

export default {
  name: 'SupportServiсePage',
  data() {
    return {
      imageTop: supportServiceTopImage,
      headingTop: 'Поддержка',
      headingSpanTop: '',
      subheadingTop: '',
      subheadingSpanTop: '',
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
