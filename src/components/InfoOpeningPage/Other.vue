<template>
  <section class="other">
    <div class="other__container">
      <h2 class="other__heading">Прочие</h2>

      <div class="other__content">
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
  name: 'Other',

  data() {
    return {
      links: [
        {
          linkHref:
            '/pdf/infoOpening/other/01 Рейтинг АО НПФ Ренесанс пенсии ruAA-1617266870709.pdf',
          linkTitle: 'Свидетельство о присвоении рейтинга Эксперт РА',
        },
        {
          linkHref:
            '/pdf/infoOpening/other/02 Свидетельство о членстве в Ассоциации Европейского Бизнеса-1576773162632.pdf',
          linkTitle: 'Свидетельство о членстве в Ассоциации Европейского Бизнеса',
        },
        {
          linkHref:
            '/pdf/infoOpening/other/03 Правила корпоративной этики АО НПФ РП-1576773142054.pdf',
          linkTitle: 'Правила корпоративной этики АО НПФ «Ренессанс пенсии»',
        },
        {
          linkHref: '/pdf/infoOpening/other/04 npf-terms-of-personal-data-1605258268312.pdf',
          linkTitle:
            'Политика в отношении обработки персональных данных в АО НПФ «Ренессанс пенсии» (редакция 1.0)',
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
// other
.other {
  width: 100%;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 28px;
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

  &__content {
    width: 100%;
  }
} // other
</style>
