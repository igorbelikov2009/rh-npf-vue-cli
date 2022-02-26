<template>
  <p class="tables__cell-text">
    <span class="tables__cell-heading"> {{ text }} </span>
  </p>
</template>

<script>
export default {
  name: 'TableHeaderCell',
  props: {
    text: { type: String },
  },
};
</script>

<style lang="scss" scoped>
// tables
.tables {
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
// tables
</style>
