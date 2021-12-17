<template>
  <tr>
    <TableHeadCell v-for="(title, index) in titles" :key="index" :title="title" />
  </tr>
</template>

<script>
import TableHeadCell from '@/components/investPage/TableHeadCell.vue';
export default {
  name: 'TableHeadRow',

  props: {
    titles: { type: Array },
  },

  components: {
    TableHeadCell,
  },
};
</script>

<style lang="scss" scoped>
tr {
  font-size: 100%;
  vertical-align: baseline;
  box-sizing: border-box;
}
</style>
