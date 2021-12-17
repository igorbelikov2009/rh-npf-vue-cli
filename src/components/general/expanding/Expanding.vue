<template>
  <div class="expanding">
    <ExpandingPanel
      :isContentVisible="ifContentVisible"
      :title="title"
      @onClickExpandingRow="onClickExpandingRow"
    />
    <transition name="expanding__content">
      <div class="expanding__content" v-if="ifContentVisible">
        <ParagrapLink
          v-for="(paragraph, index) in paragraphs"
          :key="index"
          :isHasBefore="paragraph.isHasBefore"
          :paragraphText="paragraph.paragraphText"
          :paragraphTextAfter="paragraph.paragraphTextAfter"
          :isHasLink="paragraph.isHasLink"
          :linkHref="paragraph.linkHref"
          :linkText="paragraph.linkText"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import ExpandingPanel from '@/components/general/expanding/ExpandingPanel';
import ParagrapLink from '@/components/general/text/ParagrapLink.vue';

export default {
  name: 'Expanding',

  data() {
    return {
      ifContentVisible: this.isContentVisible,
    };
  },
  props: {
    isContentVisible: { type: Boolean },
    title: { type: String },
    paragraphs: { type: Array },
  },

  components: {
    ExpandingPanel,
    ParagrapLink,
  },
  methods: {
    onClickExpandingRow() {
      this.ifContentVisible = !this.ifContentVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
// expanding
.expanding {
  width: 100%;
  border-bottom: 1px solid #e6f0fa;
  position: relative;

  &__content {
    width: 100%;
    padding: 24px 0 48px;
  }
}

.expanding__content-enter-active {
  animation: bounce-in 0.5s;
}

.expanding__content-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
//expanding
</style>
