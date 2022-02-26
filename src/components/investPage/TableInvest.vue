<template>
  <div class="table">
    <div class="table__scrolling">
      <table>
        <TableIHeadRow :headTitles="headings" />

        <TableRow v-for="(row, index) in rows" :key="index" :titleCells="row" />
      </table>
    </div>
  </div>
</template>

<script>
import TableIHeadRow from '@/components/investPage/TableIHeadRow.vue';
import TableRow from '@/components/investPage/TableRow.vue';

export default {
  name: 'TableInvest',

  props: {
    headings: { type: { Array } },
    rows: { type: { Array } },
  },

  components: {
    TableIHeadRow,
    TableRow,
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  background-color: #fff;
  overflow-x: scroll;

  @media screen and (min-width: 960px) {
    overflow-x: hidden;
  }

  &__scrolling {
    width: 960px;
  }
}
</style>
