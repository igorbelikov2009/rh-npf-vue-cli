<template>
  <a
    target="_blank"
    class="archive-link"
    :href="linkHref"
    @mouseover="isLinkHovered = true"
    @mouseout="isLinkHovered = false"
  >
    <div class="archive-link__images">
      <TripleIcon :hovered="isLinkHovered" icon="Pdf" />
    </div>

    <p class="archive-link__title">
      {{ linkTitle }}
    </p>
  </a>
</template>

<script>
import TripleIcon from '@/components/general/TripleIcon.vue';

export default {
  name: 'ArchiveLink',
  data() {
    return {
      isLinkHovered: false,
    };
  },

  props: {
    linkHref: { type: String },
    linkTitle: { type: String },
  },

  components: {
    TripleIcon,
  },
};
</script>

<style lang="scss" scoped>
.archive-link {
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  padding: 24px 0;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #e6f0fa;
  border-top: 1px solid #e6f0fa;

  &:last-of-type {
    border-top: none;
  }

  &:hover .archive-link__title {
    color: #50287d;
  }

  &__images {
    margin-right: 24px;
  }

  &__title {
    width: calc(100% - 48px);
    margin-bottom: 24px;
    display: block;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #5a646e;

    @media screen and (min-width: 576px) {
      margin-bottom: 0;
    }
  }
}
</style>
