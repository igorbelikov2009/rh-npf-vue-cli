<template>
  <div>
    <p class="hiding-archive__subheading">
      Правила определения стоимости чистых активов
    </p>

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
  name: 'ArchiveAssetValueRules',

  data() {
    return {
      links: [
        {
          linkHref:
            '/pdf/infoOpening/archive-asset/01 Порядок определения стоимости чистых активов Фонда архив.pdf',
          linkTitle: 'Порядок определения стоимости чистых активов Фонда',
        },
        {
          linkHref:
            '/pdf/infoOpening/archive-asset/02 Порядок определения стоимости чистых активов РП (опубликовано 25.12.2018).pdf',
          linkTitle:
            'Порядок определения стоимости чистых активов АО НПФ «Ренессанс пенсии» (опубликовано: 25.12.2018)',
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
.hiding-archive {
  //   display: none;
  //
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 2;

  // hiding-archive__background-blur
  &__background-blur {
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background-color: #000;
    opacity: 0.16;
  }

  // hiding-archive__background-clear
  &__background-clear {
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background-color: #000;
    opacity: 0;
  }

  &__subheading {
    font-size: 16px;
    line-height: 24px;
    color: #5a646e;
    margin-bottom: 48px;
  }
}
// hiding-archive
</style>
