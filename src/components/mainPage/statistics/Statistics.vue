<template>
  <section class="statistics">
    <div class="statistics__container">
      <h2 class="statistics__heading">Фонд в цифрах</h2>

      <ul class="statistics__block">
        <li class="statistics__list" v-for="(card, index) in statistics" v-bind:key="index">
          <StatisticsCard
            :imgSrc="card.imgSrc"
            :title="card.title"
            :span="card.span"
            :subtitle="card.subtitle"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import StatisticsCard from './StatisticsCard'
import calendarDark from '@/assets/icons/triple/Calendar/Dark.svg'
import rateDark from '@/assets/icons/triple/High Rate/Dark.svg'
import usersDark from '@/assets/icons/triple/Users/Dark.svg'
import partnerDark from '@/assets/icons/triple/Partner/Dark.svg'
import bankDark from '@/assets/icons/triple/Bank/Dark.svg'

export default {
  name: 'Statistics',

  data() {
    return {
      calendarDark: calendarDark,
      rateDark: rateDark,
      usersDark: usersDark,
      partnerDark: partnerDark,
      bankDark: bankDark,

      statistics: [
        {
          imgSrc: calendarDark,
          title: '17 лет',
          span: 'на рынке',
          subtitle: 'Фонд "Ренессанс пенсии" основан в 2002 году',
        },
        {
          imgSrc: rateDark,
          title: 'Высокий ',
          span: 'рейтинг',
          subtitle: 'Надежность ruАА- по оценке Эксперт РА',
        },
        {
          imgSrc: usersDark,
          title: '41 000',
          span: 'человек',
          subtitle: ' участники пенсионной программы',
        },
        {
          imgSrc: partnerDark,
          title: '150',
          span: 'компаний',
          subtitle: 'заботятся о пенсиях сотрудников',
        },
        {
          imgSrc: bankDark,
          title: '17 млрд',
          span: 'рублей',
          subtitle: 'пенсионных резервов в Фонде',
        },
      ],
    }
  },

  components: {
    StatisticsCard,
  },
}
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
  }

  &__list {
    width: 100%;

    @media screen and (min-width: 576px) {
      width: 227px;
    }

    @media screen and (min-width: 1440px) {
      width: 192px;
    }
  }
}
// statistics
</style>
