<template>
  <section class="business-programm">
    <div class="business-programm__container">
      <div class="business-programm__header">
        <h1 class="business-programm__heading">
          Как работает корпоративная пенсионная программа
        </h1>
      </div>

      <div class="business-programm__block">
        <div class="column" v-for="(column, index) in columns" :key="index">
          <div class="column__top-block">
            <DarkIcon :icon="column.icon" class="column__icon" />

            <h2 class="column__title">{{ column.title }}</h2>
          </div>

          <div class="column__description-block">
            <p class="description" v-for="(phrase, index) in column.descriptions" :key="index">
              {{ phrase }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DarkIcon from '@/components/general/DarkIcon.vue';

export default {
  name: 'BusinessProgramm',
  data() {
    return {
      columns: [
        {
          icon: 'Case',
          title: 'Работодатель (Вкладчик)',
          descriptions: ['Определяет условия программы', 'Уплачивает взносы в фонд'],
        },
        {
          icon: 'Man',
          title: 'Сотрудник (Участник)',
          descriptions: [
            'Заключает личный договор',
            'Уплачивает взносы в фонд',
            'Выполняет условия программы',
            'Получает пенсию или выкупную сумму',
          ],
        },
        {
          icon: 'Bank',
          title: 'Фонд',
          descriptions: [
            'Аккумулирует взносы вкладчика (Участника) ведет учет, распределяет нвестиционный доход',

            'Выплачивает негосударственные пенсии участникам',
          ],
        },
        {
          icon: 'Settings',
          title: 'Управляющая компания',
          descriptions: [
            'Определяет условия программы',
            'Уплачивает взносы в фонд',
            'Управляет портфелем ценных бумаг',
            'Инвестирует с целью получения дохода',
          ],
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
.business-programm {
  width: 100%;
  background-color: #f3f5f7;
  margin: 0 auto;
  padding: 72px 24px 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 28px 24px;
  }

  @media screen and (min-width: 1024px) {
    padding-right: 0;
    padding-left: 0;
  }

  &__container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }

  &__header {
    width: 100%;
    margin-bottom: 48px;
  }

  &__heading {
    font-size: 18px;
    line-height: 24px;
    color: #28323c;

    @media screen and (min-width: 576px) {
      font-size: 34px;
      line-height: 48px;
    }
  }

  &__block {
    width: 100%;
    display: block;

    @media screen and (min-width: 576px) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  &__column {
    width: 100%;
    margin-bottom: 48px;

    @media screen and (min-width: 576px) {
      width: calc(50% - 24px);
      margin-left: 12px;
      margin-right: 12px;
    }
  }

  &__top-block {
    width: 100%;
    display: flex;
    margin-bottom: 24px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;

    @media screen and (min-width: 576px) {
      margin-right: 40px;
    }
  }

  &__title {
    font-size: 18px;
    line-height: 24px;
    color: #28323c;
  }

  &__description-block {
    margin-left: 0;

    @media screen and (min-width: 576px) {
      margin-left: 40px;
    }
  }

  &__description {
    font-size: 16px;
    line-height: 24px;
    color: #5a646e;
    position: relative;
    padding-left: 24px;
    margin-top: 8px;

    &::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50px;
      line-height: 24px;
      background-color: #50287d;
      position: absolute;
      top: 9px;
      left: 9px;
    }
  }
}

.column {
  width: 100%;
  margin-bottom: 48px;

  @media screen and (min-width: 576px) {
    width: calc(50% - 24px);
    margin-left: 12px;
    margin-right: 12px;
  }

  &__top-block {
    width: 100%;
    display: flex;
    margin-bottom: 24px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;

    @media screen and (min-width: 576px) {
      margin-right: 24px;
    }
  }

  &__title {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #28323c;
  }

  &__description-block {
    margin-left: 0;

    @media screen and (min-width: 576px) {
      margin-left: 40px;
    }
  }
}

.description {
  font-size: 16px;
  line-height: 24px;
  color: #5a646e;
  position: relative;
  padding-left: 24px;
  margin-top: 8px;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    line-height: 24px;
    background-color: #50287d;
    position: absolute;
    top: 10px;
    left: 9px;
  }
}
</style>
