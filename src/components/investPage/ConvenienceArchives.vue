<template>
  <section class="convenience-archives">
    <ArchiveLink
      v-for="(link, index) in links"
      :key="index"
      :linkHref="link.linkHref"
      :linkTitle="link.linkTitle"
    />
  </section>
</template>

<script>
import ArchiveLink from '@/components/general/ArchiveLink.vue';

export default {
  name: 'ConvenienceArchives',

  data() {
    return {
      links: [
        {
          linkHref:
            '/pdf/invest/Архив структуры инвестиционного портфеля Фонда-1578928598453-1579866841961.pdf',
          linkTitle: 'Архив структуры инвестиционного портфеля Фонда',
        },
        {
          linkHref:
            '/pdf/invest/Информация о процессе размещения средств ПР_10.02-1581662050140.pdf',
          linkTitle: 'Информация о процессе размещения средств',
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
.convenience-archives {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  border-color: #ffffff;
  padding: 48px 24px 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 28px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
