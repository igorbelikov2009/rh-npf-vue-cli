<template>
  <div class="index__block block__2021">
    <div class="block-header">
      <p class="block-header__heading-13">Показатели деятельности</p>

      <p class="block-header__date">2021</p>
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
  name: 'Block2021',

  data() {
    return {
      links: [
        {
          linkHref: '/pdf/infoOpening/index2021/Показатели деятельности на 31.01.2021.pdf',
          linkTitle: 'Показатели деятельности на 31.01.2021',
        },
        {
          linkHref: '/pdf/infoOpening/index2021/Показатели деятельности на 28.02.2021.pdf',
          linkTitle: 'Показатели деятельности на 28.02.2021',
        },
        {
          linkHref: '/pdf/infoOpening/index2021/Показатели деятельности на 31.03.2021.pdf',
          linkTitle: 'Показатели деятельности на 31.03.2021',
        },
        {
          linkHref: '/pdf/infoOpening/index2021/Показатели деятельности на 30.04.2021.pdf',
          linkTitle: 'Показатели деятельности на 30.04.2021',
        },
        {
          linkHref: '/pdf/infoOpening/index2021/Показатели деятельности на 31.05.2021.pdf',
          linkTitle: 'Показатели деятельности на 31.05.2021',
        },
        {
          linkHref: '/pdf/infoOpening/index2021/Показатели деятельности на 30.06.2021.pdf',
          linkTitle: 'Показатели деятельности на 30.06.2021',
        },
        {
          linkHref: '/pdf/infoOpening/index2021/Показатели деятельности на 31.07.2021.pdf',
          linkTitle: 'Показатели деятельности на 31.07.2021',
        },
      ],
    };
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

  &:first-of-type {
    padding-top: 0;
  }

  &__heading-13 {
    display: block;
    width: 100%;
    max-width: 560px;
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
  }

  &__heading-16 {
    display: block;
    width: 100%;
    max-width: 560px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #000;
  }

  &__heading-18 {
    display: block;
    width: 100%;
    max-width: 560px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    color: #5a646e;
  }

  &__date {
    display: block;
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
    flex: none;
    margin-left: 12px;

    @media screen and (min-width: 576px) {
      margin-left: 40px;
    }
  }
}

.paragraph {
  width: 100%;

  // paragraph__table-row
  &__table-row {
    width: 100%;
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e4e4e4;

    &:first-of-type {
      padding-top: 0;
    }

    &_title {
      width: 100%;
      max-width: 560px;
      font-size: 13px;
      line-height: 24px;
      color: #5a646e;

      @media screen and (min-width: 576px) {
        font-size: 16px;
      }
    }

    &_value {
      font-size: 13px;
      line-height: 24px;
      color: #5a646e;
      margin-left: 12px;

      @media screen and (min-width: 576px) {
        font-size: 16px;
        margin-left: 40px;
      }
    }
  }
}
</style>
