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
      <div class="businnes-statistic__block" v-for="(block, index) in blocks" :key="index">
        <DarkIcon :icon="block.icon" class="businnes-statistic__icon" />

        <p class="businnes-statistic__description">
          {{ block.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import DarkIcon from '@/components/general/DarkIcon.vue';

export default {
  name: 'BusinnesStatistic',
  data() {
    return {
      blocks: [
        {
          imgSrc: '/icons/triple/Invest/Dark.svg',
          icon: 'Invest',
          description: 'Полная прозрачность инвестиционного процесса',
        },
        {
          imgSrc: '/icons/triple/Group/Dark.svg',
          icon: 'Group',
          description:
            'Представители крупных международных компаний составляют Попечительский Совет Фонда',
        },
        {
          imgSrc: '/icons/triple/Stock/Dark.svg',
          icon: 'Stock',
          description: 'Возможность гибкого формирования корпоративной пенсионной программы',
        },
        {
          imgSrc: '/icons/triple/Partner/Dark.svg',
          icon: 'Partner',
          description:
            'Команда высококлассных специалистов в области управления пенсионными фондами',
        },
      ],
    };
  },
  components: {
    DarkIcon,
  },
};
</script>

<style lang="scss" scoped>
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

  &__block {
    width: 100%;
    padding: 24px;
    display: flex;
    min-height: 96px;
    border-top: 1px solid #e4e4e4;

    &:first-of-type {
      @media screen and (min-width: 576px) {
        border-left: 1px solid #e4e4e4;
      }

      @media screen and (min-width: 768px) {
        border-bottom: 1px solid #e4e4e4;
      }
    }

    &:nth-of-type(2),
    &:nth-of-type(3) {
      @media screen and (min-width: 576px) {
        border-bottom: 1px solid #e4e4e4;
      }
    }

    &:last-of-type {
      border-bottom: 1px solid #e4e4e4;

      @media screen and (min-width: 576px) {
        border-left: 1px solid #e4e4e4;
      }
    }

    @media screen and (min-width: 576px) {
      width: 33.33%;
      display: block;
      border-right: 1px solid #e4e4e4;
    }

    @media screen and (min-width: 768px) {
      width: 25%;
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
    margin-right: 24px;
    margin-bottom: 0;

    @media screen and (min-width: 576px) {
      margin-bottom: 80px;
    }
  }

  &__description {
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
  }
}
</style>
