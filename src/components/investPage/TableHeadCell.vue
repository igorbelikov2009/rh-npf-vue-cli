<template>
  <th>{{ title }}</th>
</template>

<script>
export default {
  name: 'TableHeadCell',

  props: {
    title: { type: String },
  },
};
</script>

<style lang="scss" scoped>
th {
  text-align: left;
  vertical-align: baseline;
  box-sizing: border-box;
  font-weight: 400;
  color: #5a646e;
  font-size: 13px;
  padding: 8px 12px;

  &:first-of-type {
    padding: 8px 12px 8px 0;
  }

  &:last-of-type {
    padding: 8px 0 8px 12px;
  }
}
</style>
