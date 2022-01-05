<template>
  <div>
    <div class="block-header">
      <p class="block-header__heading-18">{{ heading }}</p>
    </div>

    <ArchiveLink
      v-for="(archiveLink, index) in archiveLinks"
      :key="index"
      :linkHref="archiveLink.linkHref"
      :linkTitle="archiveLink.linkTitle"
      :linkSubtitle="archiveLink.linkSubtitle"
    />
  </div>
</template>

<script>
import ArchiveLink from '@/components/general/ArchiveLink.vue';

export default {
  name: 'ReportsWithHeader',

  props: {
    heading: { type: String },
    archiveLinks: { type: Array },
    linkHref: { type: String },
    linkTitle: { type: String },
    linkSubtitle: { type: String },
  },

  components: {
    ArchiveLink,
  },
};
</script>

<style lang="scss" scoped>
.block-header {
  width: 100%;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #e4e4e4;

  &__heading-18 {
    display: block;
    width: 100%;
    max-width: 560px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    color: #5a646e;
  }
}
</style>
