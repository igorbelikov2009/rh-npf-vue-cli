<template>
  <tr class="tables__table-row">
    <td class="tables__table-cell">
      <TableHeaderCell :text="text1" />
    </td>

    <td class="tables__table-cell">
      <TableHeaderCell :text="text2" />
    </td>

    <td class="tables__table-cell">
      <p class="tables__cell-text">
        <TableHeaderCell :text="text3" />
      </p>
    </td>
  </tr>
</template>

<script>
import TableHeaderCell from '@/components/general/tables/TableHeaderCell.vue';
export default {
  name: 'TableThreeHeaderRow',

  props: {
    text1: { type: String },
    text2: { type: String },
    text3: { type: String },
  },
  components: {
    TableHeaderCell,
  },
};
</script>

<style lang="scss" scoped>
// tables
.tables {
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

  // &__cell-heading {
  //   font-size: 13px;
  //   color: #001100;
  //   line-height: 1.5rem;
  //   margin: 12px 0;
  //   font-weight: 700;
  // }

  // &__cell-text {
  //   font-size: 16px;
  //   color: #001100;
  //   line-height: 1.5rem;
  //   margin: 12px 0;
  //   font-weight: 500;
  // }
}
// tables
</style>
