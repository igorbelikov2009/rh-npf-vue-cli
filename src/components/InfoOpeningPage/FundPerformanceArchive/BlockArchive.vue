<template>
  <div>
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
  name: 'BlockArchive',

  data() {
    return {
      links: [
        {
          linkHref:
            '/pdf/infoOpening/indexArchive/Finacial_data_and_performance_indicators_17-1576673962838.pdf',
          linkTitle: 'Показатели деятельности Фонда с 2009 по 2017 гг.',
        },
      ],
    };
  },
  components: {
    ArchiveLink,
  },
};
</script>
