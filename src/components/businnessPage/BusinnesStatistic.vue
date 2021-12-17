<template>
  <section class="businnes-statistic">
    <h2 class="businnes-statistic__heading">
      Для заключения договора негосударственного пенсионного обеспечения вы можете обратиться в офис
      Фонда. Договор будет оформлен на основании пенсионных правил Фонда по пенсионной Схеме 1, с
      именными пенсионными счетами или Схеме 2. С солидарным пенсионным счетом.
      <span class="businnes-statistic__heading_span">(Поделить на ссылки)</span>
    </h2>

    <h2 class="businnes-statistic__subheading">Преимущества Фонда</h2>

    <div class="businnes-statistic__wrapper">
      <BusinnesStatisticBlock
        v-for="(block, index) in blocks"
        :key="index"
        :imgSrc="block.imgSrc"
        :imgAlt="block.imgAlt"
        :description="block.description"
      />
    </div>
  </section>
</template>

<script>
import BusinnesStatisticBlock from '../businnessPage/BusinnesStatisticBlock.vue';
export default {
  name: 'BusinnesStatistic',
  data() {
    return {
      blocks: [
        {
          imgSrc: '/icons/triple/Invest/Dark.svg',
          imgAlt: 'Invest',
          description: 'Полная прозрачность инвестиционного процесса',
        },
        {
          imgSrc: '/icons/triple/Group/Dark.svg',
          imgAlt: 'Group',
          description:
            'Представители крупных международных компаний составляют Попечительский Совет Фонда',
        },
        {
          imgSrc: '/icons/triple/Stock/Dark.svg',
          imgAlt: 'Stock',
          description: 'Возможность гибкого формирования корпоративной пенсионной программы',
        },
        {
          imgSrc: '/icons/triple/Partner/Dark.svg',
          imgAlt: 'Partne',
          description:
            'Команда высококлассных специалистов в области управления пенсионными фондами',
        },
      ],
    };
  },
  components: {
    BusinnesStatisticBlock,
  },
};
</script>

<style lang="scss" scoped>
// businnes-statistic
.businnes-statistic {
  width: 100%;
  max-width: 1440px;
  background: #fff;
  margin: 0 auto;
  padding: 24px 24px 0;
  box-sizing: border-box;

  @media screen and (min-width: 576px) {
    padding: 72px 28px;
  }

  @media screen and (min-width: 1024px) {
    padding-right: 0;
    padding-left: 0;
  }

  &__heading {
    width: 100%;
    max-width: 960px;
    margin: 12px auto;
    color: #5a646e;
    font-size: 16px;
    line-height: 1.5rem;
    font-weight: 500;

    &_span {
      font-size: inherit;
      line-height: inherit;
      font-weight: inherit;
      color: red;
    }
  }

  &__subheading {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 48px;
    color: #28323c;
    font-weight: 500;
  }

  &__wrapper {
    max-width: 960px;
    display: flex;
    flex-wrap: wrap;
    margin-right: -24px;
    margin-left: -24px;
    box-sizing: border-box;

    @media screen and (min-width: 576px) {
      margin: 0 auto;
    }
  }
}
// businnes-statistic
</style>
