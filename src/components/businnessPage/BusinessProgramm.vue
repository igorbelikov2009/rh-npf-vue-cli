<template>
  <section class="business-programm">
    <div class="business-programm__container">
      <div class="business-programm__header">
        <h1 class="business-programm__heading">
          Как работает корпоративная пенсионная программа
        </h1>
      </div>

      <div class="business-programm__block">
        <BusinnesProgrammColumn
          v-for="(column, index) in columns"
          :key="index"
          :imgSrc="column.imgSrc"
          :imgAlt="column.imgAlt"
          :title="column.title"
          :descriptions="column.descriptions"
        />
      </div>
    </div>
  </section>
</template>

<script>
import BusinnesProgrammColumn from '@/components/businnessPage/BusinnesProgrammColumn';
export default {
  name: 'BusinessProgramm',
  data() {
    return {
      columns: [
        {
          imgSrc: '/icons/triple/Case/Dark.svg',
          imgAlt: 'Case',
          title: 'Работодатель (Вкладчик)',
          descriptions: [
            { text: 'Определяет условия программы', isHasText: true },
            { text: 'Уплачивает взносы в фонд', isHasText: true },
            { text: '', isHasText: false },
            { text: '', isHasText: false },
          ],
        },
        {
          imgSrc: '/icons/triple/Man/Dark.svg',
          imgAlt: 'Man',
          title: 'Сотрудник (Участник)',
          descriptions: [
            { text: 'Заключает личный договор', isHasText: true },
            { text: 'Уплачивает взносы в фонд', isHasText: true },
            { text: 'Выполняет условия программы', isHasText: true },
            { text: 'Получает пенсию или выкупную сумму', isHasText: true },
          ],
        },
        {
          imgSrc: '/icons/triple/Bank/Dark.svg',
          imgAlt: 'Bank',
          title: 'Фонд',
          descriptions: [
            {
              text:
                'Аккумулирует взносы вкладчика (Участника) ведет учет, распределяет нвестиционный доход',
              isHasText: true,
            },
            { text: 'Выплачивает негосударственные пенсии участникам', isHasText: true },
            { text: '', isHasText: false },
            { text: '', isHasText: false },
          ],
        },
        {
          imgSrc: '/icons/triple/Candle/Dark.svg',
          imgAlt: 'Settings',
          title: 'Управляющая компания',
          descriptions: [
            { text: 'Определяет условия программы', isHasText: true },
            { text: 'Уплачивает взносы в фонд', isHasText: true },
            { text: 'Управляет портфелем ценных бумаг', isHasText: true },
            { text: 'Инвестирует с целью получения дохода', isHasText: true },
          ],
        },
      ],
    };
  },
  components: {
    BusinnesProgrammColumn,
  },
};
</script>

<style lang="scss" scoped>
// business-programm
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

  //
} // business-programm
</style>
