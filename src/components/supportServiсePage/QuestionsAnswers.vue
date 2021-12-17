<template>
  <section class="questions-answers">
    <h1 class="questions-answers__heading">Вопросы и ответы</h1>

    <Expanding
      v-for="(expandingBlock, index) in expandingBlocks"
      :key="index"
      :isContentVisible="expandingBlock.isContentVisible"
      :title="expandingBlock.title"
      :paragraphs="expandingBlock.paragraphs"
    />

    <QuestionsExpandingBlock
      :isContentVisible="expandingTable.isContentVisible"
      :title="expandingTable.title"
    />
  </section>
</template>

<script>
import Expanding from '@/components/general/expanding/Expanding.vue';
import QuestionsExpandingBlock from '@/components/supportServiсePage/QuestionsExpandingBlock.vue';

export default {
  name: 'QuestionsAnswers',
  data() {
    return {
      expandingBlocks: [
        {
          isContentVisible: false,
          title:
            ' Могу ли я перевести в АО НПФ «Ренессанс пенсии» пенсионные накопления (накопительную пенсию)?',
          paragraphs: [
            {
              isHasBefore: false,
              paragraphText:
                'АО НПФ «Ренессанс пенсии» в настоящий момент не занимается управлением накопительной части государственной пенсии, ориентирован на работу по пенсионным программам в рамках негосударственного пенсионного обеспечения.',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
          ],
        },
        {
          isContentVisible: false,
          title:
            'В чем преимущества участия в пенсионной программе над долгосрочным вкладом в банке?',
          paragraphs: [
            {
              isHasBefore: false,
              paragraphText:
                ' Участникам предоставляется возможность увеличения собственных вложенных средств за счет инвестиционного дохода и взносов компании. Софинансирование компании, предусмотренное большинством пенсионных программ, существенно увеличивает вклад сотрудника.',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
            {
              isHasBefore: false,
              paragraphText: 'Участникам пенсионных программ предоставляются налоговые льготы.',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
          ],
        },
        {
          isContentVisible: false,
          title: 'Какие гарантии того, что Фонд выполнит свои обязательства?',
          paragraphs: [
            {
              isHasBefore: false,
              paragraphText:
                'Фонд отвечает по своим обязательствам всем принадлежащим ему имуществом в соответствии с Федеральным законом от 07.05.1998 №75-ФЗ «О негосударственных пенсионных фондах». За деятельностью Фонда осуществляется жесткий контроль со стороны Банка России. Специализированный депозитарий осуществляет ежедневный контроль над составом инвестиционного портфеля Фонда. При нарушении законодательно установленных требований к инвестированию, специализированный депозитарий незамедлительно информирует об этом Банк России. По закону Фонд должен проходить ежегодные независимые аудиторские и актуарные проверки. Данные таких проверок, результаты деятельности Фонда, публикуемые в открытом доступе на сайте Банка России, позволяют корпоративным клиентам и частным лицам получать достоверную информацию о финансовом состоянии Фонда.',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
          ],
        },
        {
          isContentVisible: false,
          title: 'Что такое страховой резерв?',
          paragraphs: [
            {
              isHasBefore: false,
              paragraphText:
                ' Страховой резерв - это средства, формируемые Фондом для обеспечения дополнительных гарантий выполнения долгосрочных обязательств перед участниками. Страховой резерв учитывается отдельно от собственных средств Фонда и не используется для покрытия расходов Фонда. В соответствии с законодательством РФ страховой резерв Фонда должен составлять не менее 5% от резерва покрытия пенсионных обязательств.',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
          ],
        },
        {
          isContentVisible: false,
          title: 'Как начисляется инвестиционный доход?',
          paragraphs: [
            {
              isHasBefore: false,
              paragraphText:
                'Доход рассчитывается Фондом ежегодно по итогам инвестирования пенсионных резервов за истекший год. Величина инвестиционного дохода по каждому отдельному счету зависит от периода инвестирования средств в течение года. АО НПФ «Ренессанс пенсии» ежегодно отчитывается перед участниками о состоянии их пенсионных счетов и начисленном инвестиционном доходе. Информацию об инвестициях за прошедший год участники могут найти в личном кабинете на сайте Фонда или позвонив по телефону',
              paragraphTextAfter: '',
              isHasLink: true,
              linkHref: '#',
              linkText: 'горячей линии',
            },
          ],
        },
      ],
      expandingTable: {
        isContentVisible: false,
        title: 'Какие налоги уплачиваются в связи с участием в пенсионной программе?',
      },
    };
  },
  components: {
    Expanding,
    QuestionsExpandingBlock,
  },
};
</script>

<style lang="scss" scoped>
// questions-answers
.questions-answers {
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  border-color: #ffffff;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 28px 48px;
  }

  @media screen and (min-width: 768px) {
    padding: 48px 28px 48px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (min-width: 1160px) {
    padding-top: 72px;
  }

  &__heading {
    font-size: 34px;
    line-height: 48px;
    color: #363636;
    margin-bottom: 24px;
  }

  &__table-block {
    overflow-x: hidden;
    position: relative;
  }

  &__table-container {
    overflow-x: auto;

    @media screen and (min-width: 1024px) {
      overflow-x: hidden;
    }
  }

  &__table-common {
    color: #001100;
    border-collapse: collapse;
    width: 100%;
    min-width: 576px;
    margin: 10px 0;
    position: relative;

    // questions-answers__table-common_gradient-left
    &_gradient-left {
      &::before {
        position: absolute;
        display: block;
        width: 24px;
        top: 0;
        bottom: 0;
        background-image: radial-gradient(farthest-side, rgba(26, 65, 101, 0.5), transparent);
        content: '';
        right: auto;
        left: -12px;
      }
    }

    // questions-answers__table-common_gradient-right
    &_gradient-right {
      &::after {
        position: absolute;
        display: block;
        width: 24px;
        top: 0;
        bottom: 0;
        background-image: radial-gradient(farthest-side, rgba(49, 103, 155, 0.5), transparent);
        content: '';
        right: -12px;
        left: auto;
        box-sizing: inherit;
      }
    }
  }

  &__table-row {
    width: 100%;
    font-size: 13px;
    line-height: 24px;
    color: #001100;
    border-top: 1px solid #e6f0fa;
    vertical-align: baseline;
  }

  &__table-cell {
    padding: 0 8px;

    &:first-of-type {
      width: 43.16%;
      padding-left: 0;
    }

    &:nth-of-type(2) {
      width: 27.1%;
    }

    &:last-of-type {
      width: 29.74%;
      padding-right: 0;
    }
  }

  &__cell-heading {
    font-size: 13px;
    color: #001100;
    line-height: 1.5rem;
    margin: 12px 0;
    font-weight: 700;
  }

  &__cell-text {
    font-size: 16px;
    color: #001100;
    line-height: 1.5rem;
    margin: 12px 0;
    font-weight: 500;
  }
}
// questions-answers
</style>
