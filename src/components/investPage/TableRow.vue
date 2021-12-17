<template>
  <tr>
    <TableCell v-for="(title, index) in titles" :key="index" :title="title" />
  </tr>
</template>

<script>
import TableCell from '@/components/investPage/TableCell.vue';

export default {
  name: 'TableRow',

  props: {
    titles: { type: Array },
  },

  components: {
    TableCell,
  },
};
</script>

<style lang="scss" scoped>
tr {
  font-size: 100%;
  vertical-align: baseline;
  box-sizing: border-box;
}

td {
  vertical-align: baseline;
  box-sizing: border-box;
  border-top: 1px solid #e6f0fa;
  color: #28323c;
  padding: 8px 12px;

  &:first-of-type {
    padding: 8px 12px 8px 0;
  }

  &:last-of-type {
    padding: 8px 0 8px 12px;
  }
}
</style>
