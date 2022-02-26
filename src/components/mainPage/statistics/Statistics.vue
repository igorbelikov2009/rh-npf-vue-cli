<template>
  <section class="statistics">
    <div class="statistics__container">
      <h2 class="statistics__heading">Фонд в цифрах</h2>

      <div class="statistics__block">
        <StatisticsCard
          v-for="(card, index) in cards"
          :key="index"
          :iconName="card.icon"
          :title="card.title"
          :span="card.span"
          :subtitle="card.subtitle"
        />
      </div>
    </div>
  </section>
</template>

<script>
import StatisticsCard from './StatisticsCard.vue';

export default {
  name: 'Statistics',

  data() {
    return {
      cards: [
        {
          icon: 'Calendar',
          title: '17 лет',
          span: 'на рынке',
          subtitle: 'Фонд "Ренессанс пенсии" основан в 2002 году',
        },
        {
          icon: 'High Rate',
          title: 'Высокий ',
          span: 'рейтинг',
          subtitle: 'Надежность ruАА- по оценке Эксперт РА',
        },
        {
          icon: 'Users',
          title: '41 000',
          span: 'человек',
          subtitle: ' участники пенсионной программы',
        },
        {
          icon: 'Partner',
          title: '150',
          span: 'компаний',
          subtitle: 'заботятся о пенсиях сотрудников',
        },
        {
          icon: 'Bank',
          title: '17 млрд',
          span: 'рублей',
          subtitle: 'пенсионных резервов в Фонде',
        },
      ],
    };
  },

  components: {
    StatisticsCard,
  },
};
</script>

<style lang="scss" scoped>
//statistics
.statistics {
  width: 100%;
  background-color: #fff;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 72px;

  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 96px;
  }

  &__container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0;

    @media screen and (min-width: 576px) {
      padding: 0 28px;
    }

    @media screen and (min-width: 1024px) {
      padding: 0;
    }
  }

  &__heading {
    font-size: 18px;
    line-height: 24px;
    color: #28323c;
    margin-bottom: 24px;
    padding: 0 24px;

    @media screen and (min-width: 576px) {
      padding: 0;
    }

    @media screen and (min-width: 768px) {
      margin-bottom: 48px;
    }
  }

  &__block {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media screen and (min-width: 1160px) {
      flex-wrap: nowrap;
    }
  }
}
// statistics
</style>
