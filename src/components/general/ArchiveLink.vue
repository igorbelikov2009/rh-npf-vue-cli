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

    <div class="archive-link__row">
      <p class="archive-link__title">
        {{ linkTitle }}
      </p>

      <p class="archive-link__subtitle">{{ linkSubtitle }}</p>
    </div>
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
    linkSubtitle: { type: String },
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
  box-sizing: border-box;

  &:last-of-type {
    border-top: none;
  }

  &:hover .archive-link__title {
    color: #50287d;
  }

  &__images {
    width: 24px;
    height: 24px;
    margin-right: 24px;
  }

  &__row {
    width: 100%;
    display: block;
    justify-content: space-between;

    @media screen and (min-width: 576px) {
      display: flex;
    }
  }

  &__title {
    display: block;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #5a646e;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      max-width: 560px;
      width: 100%;
      margin-bottom: 0;
    }
  }

  // &__title {
  //   width: calc(100% - 48px);
  //   margin-bottom: 24px;
  //   display: block;
  //   font-size: 16px;
  //   line-height: 24px;
  //   font-weight: 400;
  //   color: #5a646e;

  //   @media screen and (min-width: 576px) {
  //     margin-bottom: 0;
  //   }
  // }

  &__subtitle {
    width: 125px;
    display: block;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #5a646e;
    margin-left: 0px;
    // text-align: right;

    @media screen and (min-width: 576px) {
      margin-bottom: 0;
      margin-left: 48px;
      text-align: right;
    }
  }
}
</style>
