<template>
  <div>
    <p class="hiding-archive__subheading">Пенсионные правила</p>

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
  name: 'ArchivePension',

  data() {
    return {
      links: [
        {
          linkHref: '/pdf/infoOpening/archive-pension/01 pravila_fond_trudovih_nakopleniy.pdf',
          linkTitle: 'Правила НПФ "Фонд Трудовых накоплений"',
        },
        {
          linkHref: '/pdf/infoOpening/archive-pension/02 pravila_npf_aviva_18.05.2009 2.pdf',
          linkTitle: 'Правила НПФ "Авива"',
        },
        {
          linkHref: '/pdf/infoOpening/archive-pension/03 pravila_aviva_2007 3-.pdf',
          linkTitle: 'Правила НПФ "Авива"',
        },
        {
          linkHref: '/pdf/infoOpening/archive-pension/04 Пенсионные правила НПФ ИНГ.pdf',
          linkTitle: 'Правила НПФ "ИНГ"',
        },
        {
          linkHref: '/pdf/infoOpening/archive-pension/05 Pension Rules_2005 4.pdf',
          linkTitle: 'Правила НПФ "ИНГ"',
        },
        {
          linkHref: '/pdf/infoOpening/archive-pension/06 2008-11-10_pravila_npf_ing 5.pdf',
          linkTitle: 'Правила НПФ "ИНГ"',
        },
        {
          linkHref: '/pdf/infoOpening/archive-pension/07 pensionnie_pravila_APO_20.01.2010 6.pdf',
          linkTitle: 'Правила НПФ "Авива Пенсионное обеспечение"',
        },
        {
          linkHref: '/pdf/infoOpening/archive-pension/08 pravila_16.08.2011 7.pdf',
          linkTitle: 'Правила НПФ "Авива Пенсионное обеспечение"',
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
} // hiding-archive
</style>
