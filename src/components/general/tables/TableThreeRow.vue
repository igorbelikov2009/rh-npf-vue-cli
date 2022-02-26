<template>
  <tr class="tables__table-row">
    <td class="tables__table-cell">
      <TableCell :text="text1" />
    </td>

    <td class="tables__table-cell">
      <TableCell :text="text2" />
    </td>

    <td class="tables__table-cell">
      <TableCell :text="text3" />
    </td>
  </tr>
</template>

<script>
import TableCell from '@/components/general/tables/TableCell.vue';
export default {
  name: 'TableThreeRow',

  props: {
    text1: { type: String },
    text2: { type: String },
    text3: { type: String },
  },
  components: {
    TableCell,
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
}
// tables
</style>
