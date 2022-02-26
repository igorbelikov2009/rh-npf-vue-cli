<template>
  <tr>
    <TableHeadCell v-for="(headTitle, index) in headTitles" :key="index" :headTitle="headTitle" />
  </tr>
</template>

<script>
import TableHeadCell from '@/components/investPage/TableHeadCell.vue';
export default {
  name: 'TableHeadRow',

  props: {
    headTitles: { type: Array },
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
