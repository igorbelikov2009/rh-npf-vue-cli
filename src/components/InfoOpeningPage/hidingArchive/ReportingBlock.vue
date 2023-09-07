<template>
  <div>
    <div class="block-header">
      <p class="block-header__heading-16">
        {{ heading }}
      </p>
    </div>

    <ArchiveLink
      v-for="(link, index) in links"
      :key="index"
      :linkHref="link.linkHref"
      :linkTitle="link.linkTitle"
    />
  </div>
</template>

<script>
import ArchiveLink from '@/components/general/ArchiveLink.vue';

export default {
  name: 'ReportingBlock',

  props: {
    heading: { type: String },
    links: { type: Array },
    linkHref: { type: String },
    linkTitle: { type: String },
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

  &__heading-16 {
    display: block;
    width: 100%;
    max-width: 560px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #000;
  }
}
</style>
