<template>
  <div>
    <p class="hiding-archive__subheading">
      Структура и состав акционеров
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
  name: 'ArchiveShareholders',

  data() {
    return {
      links: [
        {
          linkHref:
            '/pdf/infoOpening/archive-aktsionerov/01 Beneficiaries structure 16.03.2021.pdf',
          linkTitle:
            'Список акционеров Фонда и лиц, под контролем либо значительным влиянием находится Фонд (на 16.03.2021)',
        },
        {
          linkHref:
            '/pdf/infoOpening/archive-aktsionerov/02 Beneficiaries structure 04.03.2021.pdf',
          linkTitle:
            'Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 04.03.2021)',
        },
        {
          linkHref:
            '/pdf/infoOpening/archive-aktsionerov/03 Beneficiaries structure 18.02.2021.pdf',
          linkTitle:
            'Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 18.02.2021)',
        },
        {
          linkHref:
            '/pdf/infoOpening/archive-aktsionerov/04 Beneficiaries structure 08.02.2021.pdf',
          linkTitle:
            'Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 08.02.2021)',
        },
        {
          linkHref:
            '/pdf/infoOpening/archive-aktsionerov/05 Список акционеров Фонда 03.09.2020.pdf',
          linkTitle:
            'Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 03.09.2020)',
        },
        {
          linkHref:
            '/pdf/infoOpening/archive-aktsionerov/06 Beneficiaries structure 27.03.2020.pdf',
          linkTitle:
            'Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 27.03.2020)',
        },
        {
          linkHref:
            '/pdf/infoOpening/archive-aktsionerov/07 Beneficiaries structure 11.03.2020.pdf',
          linkTitle:
            'Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 11.03.2020)',
        },
        {
          linkHref:
            '/pdf/infoOpening/archive-aktsionerov/08 Beneficiaries structure 31.12.2019.pdf',
          linkTitle:
            'Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 31.12.2019)',
        },
        {
          linkHref:
            '/pdf/infoOpening/archive-aktsionerov/09 Beneficiaries structure 05.12.2019.pdf',
          linkTitle:
            'Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 05.12.2019)',
        },
        {
          linkHref:
            '/pdf/infoOpening/archive-aktsionerov/10 Beneficiaries structure 30.09.2019.pdf',
          linkTitle:
            'Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 30.09.2019)',
        },
        {
          linkHref:
            '/pdf/infoOpening/archive-aktsionerov/11 Beneficiaries structure 25.07.2019-1577255864084.pdf',
          linkTitle:
            'Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 25.07.2019)',
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
