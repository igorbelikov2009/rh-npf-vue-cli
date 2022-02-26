<template>
  <div class="expanding">
    <ExpandingPanel
      :isContentVisible="ifContentVisible"
      :title="title"
      @onClickExpandingRow="onClickExpandingRow"
    />
    <transition name="expanding__content">
      <div class="expanding__content" v-if="ifContentVisible">
        <p class="questions-answers__paragraph">
          Порядок налогообложения при выплате пенсий и выкупных сумм:
        </p>

        <TableThree
          :tableHeaderRow="table1.tableHeaderRow"
          :tableRow1="table1.tableRow1"
          :tableRow2="table1.tableRow2"
        />

        <p class="questions-answers__cell-text"><br /></p>

        <TableThree
          :tableHeaderRow="table2.tableHeaderRow"
          :tableRow1="table2.tableRow1"
          :tableRow2="table2.tableRow2"
        />

        <p class="questions-answers__cell-text">
          * Независимо от факта получения / неполучения социального налогового вычета
        </p>

        <p class="questions-answers__paragraph">
          Участникам пенсионных программ предоставляются налоговые льготы - возможность получить
          социальный налоговый вычет в размере 13% от суммы уплаченных взносов по личному договору
          негосударственного пенсионного обеспечения (максимальный размер суммы взносов для
          получения налогового вычета – 120 000 рублей/год).
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import ExpandingPanel from '@/components/general/expanding/ExpandingPanel';
import TableThree from '@/components/general/tables/TableThree.vue';
import ParagrapLink from '@/components/general/text/ParagrapLink.vue';
export default {
  name: 'QuestionsExpandingBlock',
  data() {
    return {
      ifContentVisible: this.isContentVisible,
      table1: {
        tableHeaderRow: {
          text1: 'Пенсионные суммы за счет взносов компании',
          text2: 'Выкупная сумма',
          text3: 'Пенсия',
        },
        tableRow1: {
          text1: 'Взносы',
          text2: 'НДФЛ',
          text3: 'НДФЛ',
        },
        tableRow2: {
          text1: 'Инвестиционный доход',
          text2: 'НДФЛ',
          text3: 'НДФЛ',
        },
      },
      table2: {
        tableHeaderRow: {
          text1: 'Пенсионные суммы за счет взносов участника',
          text2: 'Выкупная сумма',
          text3: 'Пенсия',
        },
        tableRow1: {
          text1: ' Взносы',
          text2:
            ' Удерживается сумма НДФЛ, соответствующая социальному налоговому вычету за период участия',
          text3: ' НДФЛ не удерживается *',
        },
        tableRow2: {
          text1: 'Инвестиционный доход',
          text2: 'НДФЛ',
          text3: 'НДФЛ не удерживается *',
        },
      },
      paragraph1: ' Порядок налогообложения при выплате пенсий и выкупных сумм:',
      paragraph2: '* Независимо от факта получения / неполучения социального налогового вычета',
      paragraph3:
        'Участникам пенсионных программ предоставляются налоговые льготы - возможность получить социальный налоговый вычет в размере 13% от суммы уплаченных взносов по личному договору негосударственного пенсионного обеспечения (максимальный размер суммы взносов для получения налогового вычета – 120 000 рублей/год).',
    };
  },

  props: {
    isContentVisible: { type: Boolean },
    title: { type: String },
  },
  methods: {
    onClickExpandingRow() {
      this.ifContentVisible = !this.ifContentVisible;
    },
  },
  components: {
    ExpandingPanel,
    ParagrapLink,
    TableThree,
  },
};
</script>

<style lang="scss" scoped>
// expanding
.expanding {
  width: 100%;
  border-bottom: 1px solid #e6f0fa;
  position: relative;

  &__content {
    width: 100%;
    padding: 24px 0 48px;
  }
}

.expanding__content-enter-active {
  animation: bounce-in 0.5s;
}

.expanding__content-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
//expanding
</style>
