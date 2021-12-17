<template>
  <div class="expanding">
    <ExpandingPanel
      :isContentVisible="ifContentVisible"
      :title="title"
      @onClickExpandingRow="onClickExpandingRow"
    />
    <transition name="expanding__content">
      <div class="expanding__content" v-if="ifContentVisible">
        <TableInvest :headings="tableHeadings" :rows="tableRows" />
      </div>
    </transition>
  </div>
</template>

<script>
import ExpandingPanel from '@/components/general/expanding/ExpandingPanel';
import TableInvest from '@/components/investPage/TableInvest.vue';
export default {
  name: 'ExpandingTable',

  data() {
    return {
      ifContentVisible: this.isContentVisible,
    };
  },
  props: {
    isContentVisible: { type: Boolean },
    title: { type: String },

    tableHeadings: { type: Array },
    tableRows: { type: Array },
  },
  methods: {
    onClickExpandingRow() {
      this.ifContentVisible = !this.ifContentVisible;
    },
  },
  components: {
    ExpandingPanel,
    TableInvest,
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
    // padding: 24px 0 48px;
  }

  &__paragraph {
    width: 100%;
    margin: 12px 0;
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
