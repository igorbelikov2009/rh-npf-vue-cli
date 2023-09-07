<template>
  <div class="tables__table-container">
    <table class="tables__table">
      <TableThreeHeaderRow
        :text1="tableHeaderRow.text1"
        :text2="tableHeaderRow.text2"
        :text3="tableHeaderRow.text3"
      />

      <TableThreeRow :text1="tableRow1.text1" :text2="tableRow1.text2" :text3="tableRow1.text3" />

      <TableThreeRow :text1="tableRow2.text1" :text2="tableRow2.text2" :text3="tableRow2.text3" />
    </table>
  </div>
</template>

<script>
import TableThreeHeaderRow from '@/components/general/tables/TableThreeHeaderRow .vue';
import TableThreeRow from '@/components/general/tables/TableThreeRow.vue';

export default {
  name: 'TableThree',

  props: {
    tableHeaderRow: { type: Object },
    tableRow1: { type: Object },
    tableRow2: { type: Object },
  },
  components: {
    TableThreeHeaderRow,
    TableThreeRow,
  },
};
</script>

<style lang="scss" scoped>
// tables
.tables {
  &__table-container {
    position: relative;
    overflow-x: auto;

    @media screen and (min-width: 1024px) {
      overflow-x: hidden;
    }
  }

  &__table {
    color: #001100;
    border-collapse: collapse;
    width: 100%;
    min-width: 576px;
    margin: 10px 0;
    position: relative;

    @media screen and (max-width: 576px) {
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
}
// tables
</style>
