<template>
  <section class="documents-of-title">
    <div class="documents-of-title__container">
      <h1 class="documents-of-title__heading">
        Правоустанавливающие документы
      </h1>

      <div class="documents-of-title__list">
        <ArchiveLink
          v-for="(link, index) in links"
          :key="index"
          :linkHref="link.linkHref"
          :linkTitle="link.linkTitle"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ArchiveLink from '@/components/general/ArchiveLink.vue';

export default {
  name: 'DocumentsOfTitle',
  data() {
    return {
      links: [
        {
          linkHref: '/pdf/infoOpening/documents-of-title/foundationCharter.pdf',
          linkTitle: 'Устав фонда',
        },
        { linkHref: '/pdf/infoOpening/documents-of-title/license.pdf', linkTitle: 'Лицензия' },
        {
          linkHref:
            '/pdf/infoOpening/documents-of-title/Свидетельство о государственной регистрации негосударственного пенсионного фонда-1576772418041.pdf',
          linkTitle:
            'Свидетельство о государственной регистрации негосударственного пенсионного фонда',
        },
        {
          linkHref:
            '/pdf/infoOpening/documents-of-title/Свидетельство о постановке на учет в налоговом органе-1576772424907.pdf',
          linkTitle: 'Свидетельство о постановке на учет в налоговом органе',
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
.documents-of-title {
  width: 100%;
  background-color: #fff;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding-right: 28px;
    padding-left: 28px;
    padding-top: 48px;
    padding-bottom: 48px;
  }

  &__container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }

  &__heading {
    display: block;
    font-size: 18px;
    line-height: 24px;
    color: #5a646e;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      font-size: 34px;
      line-height: 48px;
      margin-bottom: 48px;
    }
  }

  &__list {
    width: 100%;
  }
}
</style>
